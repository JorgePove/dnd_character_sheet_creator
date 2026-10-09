/* ═══════════════════════════════════════════════════════════════════════
   NUBE · cuenta (Firebase Auth) y sincronización de fichas (Firestore)

   PRINCIPIOS
   · El navegador sigue siendo la fuente principal: las fichas se guardan en localStorage
     igual que siempre y la web funciona sin cuenta, sin internet y sin Firebase configurado.
   · Iniciar sesión añade una copia en la nube por persona: users/{uid}/fichas/{sid}.
     Cada ficha tiene un `sid` (identificador global, ver script.js) que es el nombre de su
     documento; el id de pestaña ("ficha-3") solo vale dentro de cada navegador.
   · Control de versiones por ficha: cada documento lleva `rev` (contador). Cada navegador
     recuerda la `rev` sobre la que trabaja (`br`) y solo sube si la nube sigue en esa `rev`
     (transacción). Si no, es que otro navegador la cambió a la vez: NO se pierde nada, la
     versión de la nube se queda en su sitio y la local se guarda como «… (copia local)».
   · Borrar una ficha deja una «lápida» (deleted:true) para que los demás navegadores también
     la quiten (y la guarden en su papelera). Una ficha borrada que se recupera de la papelera
     es una ficha nueva.
   · Estado de sincronización en localStorage['dnd_sync']:
       uid  cuenta a la que pertenecen las fichas de este navegador
       f    por sid: br (rev de la nube sobre la que se trabaja), h (hash del contenido actual),
            uh (hash de lo último sincronizado), m (cuándo se editó), v (¿ficha vacía?)
       del  borrados locales aún sin propagar
═══════════════════════════════════════════════════════════════════════ */

const NB_SDK_VERSION = '10.14.1';
const NB_SDK_ARCHIVOS = ['firebase-app-compat.js', 'firebase-auth-compat.js', 'firebase-firestore-compat.js'];
const NB_CLAVE = 'dnd_sync';
const NB_VERSION_DOC = 1;
const NB_MAX_BYTES = 900000;      // tope de una ficha (un documento de Firestore admite 1 MiB)
const _NB_T = window.__NB_TEST || {};   // solo lo usan las pruebas automáticas para acortar los tiempos
const NB_ESPERA_SUBIDA = _NB_T.espera != null ? _NB_T.espera : 6000;       // ms sin editar antes de subir
const NB_INTERVALO_MIN = _NB_T.intervalo != null ? _NB_T.intervalo : 15000; // ms mínimos entre dos subidas de la misma ficha (cuota gratuita)
const NB_REINTENTO = _NB_T.reintento != null ? _NB_T.reintento : 30000;     // ms entre reintentos si hay algo pendiente o falló
const NB_GRACIA = 2500;           // ms tras cargar una ficha de la nube en los que los reajustes automáticos no cuentan como edición
const NB_SESION = _nuevoSid();    // identifica esta pestaña (para reconocer el eco de nuestras propias escrituras)

let nbSync = nbLeerSync();
let nbUltimas = {};               // sid → contenido (cadena) más reciente = lo que se sube
let nbGracia = {};                // sid → { hasta, t0 } (solo en memoria)
let nbUltimaEntrada = 0;          // última vez que la persona tocó un campo
let nbUser = null;                // usuario con sesión Y propietario de los datos de este navegador
let nbAuth = null, nbDb = null;
let nbSdkPromesa = null;
let nbTicket = 0;
let nbUnsub = null;
let nbPrimeraHecha = false;       // ya se recibió el primer estado de la nube
let nbSubiendo = false;
let nbTimerSubida = null;
let nbTimerPospuestos = null;
let nbPospuestos = {};
let nbOffline = false;
let nbError = null;
let nbConteoRemoto = null;
let nbMotivoInactivo = null;      // 'sin-config' | 'sin-http' | 'sin-sdk' | null
let nbRenderModal = null;         // función que repinta la ventana de cuenta si está abierta
let nbAvisoGrandeMostrado = {};
let nbFirmaModal = '';

/* ══════════════════════ ESTADO LOCAL ══════════════════════ */
function nbLeerSync() {
    try {
        const o = JSON.parse(localStorage.getItem(NB_CLAVE) || 'null');
        if (o && typeof o === 'object' && o.f && typeof o.f === 'object') {
            if (!o.del || typeof o.del !== 'object') o.del = {};
            return o;
        }
    } catch (_) {}
    return { v: 1, uid: null, f: {}, del: {}, t: 0 };
}
function nbGuardarSync() { try { localStorage.setItem(NB_CLAVE, JSON.stringify(nbSync)); } catch (_) {} }

function nbHash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(36) + s.length.toString(36);
}
function nbBytes(s) { return s.length <= NB_MAX_BYTES / 3 ? s.length : new TextEncoder().encode(s).length; }

/* Contenido «canónico» de una ficha: su JSON sin el id de pestaña (que es distinto en cada navegador) */
function nbCanon(cadena, d) {
    const marca = '"id":' + JSON.stringify(d.id) + ',';
    const i = cadena.indexOf(marca);
    return (i >= 0 && i < 60) ? cadena.slice(0, i) + cadena.slice(i + marca.length) : cadena;
}

/* ¿Es una ficha sin tocar (recién creada)? Esas no se suben ni se consideran «fichas del navegador». */
function nbEsVacia(d) {
    if (!d || typeof d !== 'object') return true;
    if (d.nombre || d.especie || d.trasfondo || d.retratoCab) return false;
    if ((d.multiclases || []).some(m => m && m.clase)) return false;
    if (d.stats && Object.keys(d.stats).some(k => String(d.stats[k]) !== '10')) return false;
    if ((d.items || []).some(i => i && i.nombre)) return false;
    if ((d.armas || []).some(a => a && a.nombre)) return false;
    if (d.roleplay && (d.roleplay.imagen || (d.roleplay.imagenes && d.roleplay.imagenes.length))) return false;
    return true;
}

function nbFichaPorSid(sid) { return fichas.find(f => f.panel.dataset.sid === sid) || null; }
function nbDirty(sid) {
    const st = nbSync.f[sid];
    return !!st && st.h !== st.uh && !(st.br === 0 && st.v) && st.bloq !== st.h;
}
function nbPendientes() {
    return Object.keys(nbSync.f).filter(nbDirty).length + Object.keys(nbSync.del).length;
}
function nbNombreDe(d) { return (d && String(d.nombre || '').trim()) || 'Sin nombre'; }

/* Lee todas las fichas abiertas (sin escribir en localStorage) y actualiza los hashes */
function nbRecalcular() {
    const datos = [], cadenas = [];
    fichas.forEach(f => {
        try { const d = leerFicha(f.panel); datos.push(d); cadenas.push(JSON.stringify(d)); }
        catch (e) { console.warn('Nube: no se pudo leer una ficha', e); }
    });
    nbMarcar(datos, cadenas);
}

/* Anota qué fichas han cambiado desde la última sincronización */
function nbMarcar(datos, cadenas) {
    const ahora = Date.now();
    const vistas = {};
    datos.forEach((d, i) => {
        const sid = d && d.sid;
        if (!_sidValido(sid)) return;
        vistas[sid] = true;
        const canon = nbCanon(cadenas[i], d);
        const h = nbHash(canon);
        nbUltimas[sid] = canon;
        const st = nbSync.f[sid] || (nbSync.f[sid] = { br: 0, h: null, uh: null, m: ahora, v: 0 });
        st.v = nbEsVacia(d) ? 1 : 0;
        if (st.h !== h) {
            const g = nbGracia[sid];
            const reajuste = g && ahora < g.hasta && nbUltimaEntrada <= g.t0;   // la propia carga retocó campos: no es una edición
            st.h = h; st.m = ahora;
            if (reajuste) st.uh = h;
        }
    });
    Object.keys(nbSync.f).forEach(sid => {
        if (!vistas[sid]) { delete nbSync.f[sid]; delete nbUltimas[sid]; }
    });
    nbGuardarSync();
}

/* Lo llama guardarTodo (script.js) después de escribir en localStorage */
function nbTrasGuardar(datos, cadenas) {
    if (!nbSync.uid && !nbUser) return;      // sin cuenta no hay nada que seguir
    nbMarcar(datos, cadenas);
    if (nbUser && nbPrimeraHecha) nbProgramarSubida();
    nbPintarBoton();
}

/* Lo llama confirmarBorrado (script.js) justo antes de quitar la ficha */
function nbBorrada(sid) {
    if (!_sidValido(sid)) return;
    const st = nbSync.f[sid];
    const hayCopiaEnNube = nbUser ? !(st && st.br === 0 && st.v) : !!(st && st.br > 0);
    delete nbSync.f[sid]; delete nbUltimas[sid];
    if (hayCopiaEnNube) nbSync.del[sid] = Date.now();
    nbGuardarSync();
    if (nbUser && nbPrimeraHecha) nbProgramarSubida(1500);
    nbPintarBoton();
}

/* ══════════════════════ CARGA DEL SDK ══════════════════════ */
function nbConfigurado() {
    return typeof FIREBASE_CONFIG === 'object' && !!FIREBASE_CONFIG.apiKey && !!FIREBASE_CONFIG.projectId;
}
function nbCargarSDK() {
    if (window.firebase && firebase.auth && firebase.firestore) return Promise.resolve();
    if (nbSdkPromesa) return nbSdkPromesa;
    nbSdkPromesa = NB_SDK_ARCHIVOS.reduce((p, archivo) => p.then(() => new Promise((ok, ko) => {
        const s = document.createElement('script');
        s.src = `https://www.gstatic.com/firebasejs/${NB_SDK_VERSION}/${archivo}`;
        s.async = false;
        s.onload = ok;
        s.onerror = () => ko(new Error('No se pudo cargar ' + archivo));
        document.head.appendChild(s);
    })), Promise.resolve());
    nbSdkPromesa.catch(() => { nbSdkPromesa = null; });
    return nbSdkPromesa;
}

async function nbIniciar() {
    document.addEventListener('input', () => { nbUltimaEntrada = Date.now(); }, true);
    document.addEventListener('visibilitychange', () => {
        if (!nbUser) return;
        if (document.visibilityState === 'hidden') { if (typeof _volcarGuardadoPendiente === 'function') _volcarGuardadoPendiente(); nbSubirPendientes(true); }
        else nbProgramarSubida(500);
    });
    window.addEventListener('online', () => { nbOffline = false; if (!nbUser) nbIntentarSDK(); else { if (!nbUnsub) nbIniciarListener(); nbProgramarSubida(500); } nbPintarBoton(); });
    window.addEventListener('offline', () => { nbOffline = true; nbPintarBoton(); });
    setInterval(() => {
        if (nbUser) {
            if (!nbUnsub) nbIniciarListener();
            else if (nbPrimeraHecha && nbPendientes()) nbSubirPendientes();
        }
        nbPintarBoton();
    }, NB_REINTENTO);

    nbPintarBoton();
    if (!nbConfigurado()) { nbMotivoInactivo = 'sin-config'; nbPintarBoton(); return; }
    if (!/^https?:$/.test(location.protocol)) { nbMotivoInactivo = 'sin-http'; nbPintarBoton(); return; }
    await nbIntentarSDK();
}

async function nbIntentarSDK() {
    if (nbAuth) return true;
    if (!nbConfigurado() || !/^https?:$/.test(location.protocol)) return false;
    try { await nbCargarSDK(); }
    catch (e) { nbMotivoInactivo = 'sin-sdk'; nbPintarBoton(); return false; }
    try {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        nbAuth = firebase.auth();
        nbDb = firebase.firestore();
        try { nbDb.settings({ experimentalAutoDetectLongPolling: true, merge: true }); } catch (_) {}
        nbMotivoInactivo = null;
        nbAuth.onAuthStateChanged(u => { nbAlCambiarUsuario(u).catch(e => { console.warn('Nube:', e); nbError = 'Error al iniciar sesión: ' + (e && e.message || e); nbPintarBoton(); }); }, e => { nbError = 'Error de sesión: ' + (e && e.message || e); nbPintarBoton(); });
        return true;
    } catch (e) {
        console.warn('Nube: no se pudo iniciar Firebase', e);
        nbMotivoInactivo = 'sin-sdk';
        nbError = 'No se pudo iniciar Firebase: ' + (e && e.message || e);
        nbPintarBoton();
        return false;
    }
}

function nbCol() { return nbDb.collection('users').doc(nbUser.uid).collection('fichas'); }

/* ══════════════════════ SESIÓN ══════════════════════ */
async function nbAlCambiarUsuario(user) {
    const ticket = ++nbTicket;
    nbDetenerListener();
    nbPrimeraHecha = false; nbOffline = false; nbError = null; nbConteoRemoto = null;
    clearTimeout(nbTimerSubida);
    if (!user) { nbUser = null; nbPintarBoton(); return; }

    nbUser = null;
    nbPintarBoton();
    const ok = await nbResolverPropietario(user);
    if (ticket !== nbTicket) return;              // mientras tanto cambió la sesión
    if (ok === 'recargar') return;                // se está limpiando el navegador y recargando
    if (!ok) { try { await nbAuth.signOut(); } catch (_) {} return; }

    nbUser = user;
    nbSync.uid = user.uid;
    nbGuardarSync();
    nbRecalcular();
    nbIniciarListener();
    nbPintarBoton();
}

/* ¿A quién pertenecen las fichas que hay en este navegador? Devuelve true | false | 'recargar' */
async function nbResolverPropietario(user) {
    if (nbSync.uid === user.uid) return true;
    const locales = [];
    fichas.forEach(f => { try { const d = leerFicha(f.panel); if (!nbEsVacia(d)) locales.push(nbNombreDe(d)); } catch (_) { locales.push('(ficha ilegible)'); } });
    const lista = locales.slice(0, 5).map(n => '«' + n + '»').join(', ') + (locales.length > 5 ? '…' : '');

    if (!nbSync.uid) {   // fichas «sin dueño» (hechas antes de tener cuenta)
        if (!locales.length) return true;
        const r = await nbDialogo({
            titulo: 'Fichas de este navegador',
            texto: `Este navegador ya tiene ${locales.length} ficha${locales.length === 1 ? '' : 's'} (${lista}). ¿Quieres añadirla${locales.length === 1 ? '' : 's'} a tu cuenta ${user.email || ''}? Así las tendrás también en tus otros navegadores.`,
            botones: [{ t: 'Añadirlas a mi cuenta', v: 'si', primario: true }, { t: 'Cancelar (no iniciar sesión)', v: 'no' }]
        });
        return r === 'si';
    }

    // Las fichas son de OTRA cuenta
    if (!locales.length) { nbLimpiarLocal(false); return true; }
    const r = await nbDialogo({
        titulo: 'Fichas de otra cuenta',
        texto: `En este navegador hay fichas de otra cuenta (${lista}). Para entrar con ${user.email || 'esta cuenta'} hay que quitarlas de aquí; siguen guardadas en la nube de la otra cuenta. Antes se descargará una copia por si acaso.`,
        botones: [{ t: 'Descargar copia y cambiar de cuenta', v: 'si', primario: true }, { t: 'Cancelar', v: 'no' }]
    });
    if (r !== 'si') return false;
    try { descargarCopiaCompleta(); } catch (_) {}
    nbLimpiarLocal(true);
    return 'recargar';
}

/* Borra de este navegador las fichas, el historial, la papelera y el estado de sincronización */
function nbLimpiarLocal(recargar) {
    const bloqueoPrevio = _guardadoBloqueado;
    if (recargar) { _guardadoBloqueado = true; clearTimeout(_guardandoTimeout); }   // que ningún guardado pendiente vuelva a escribir las fichas
    const claves = ['dnd_historial', 'dnd_papelera', NB_CLAVE];
    if (recargar) claves.push('dnd_fichas', 'dnd_contador', 'dnd_activa', 'dnd_rescate');
    claves.forEach(k => { try { localStorage.removeItem(k); } catch (_) {} });
    nbSync = { v: 1, uid: null, f: {}, del: {}, t: 0 };
    nbUltimas = {};
    if (recargar) setTimeout(() => location.reload(), 700);
    else _guardadoBloqueado = bloqueoPrevio;
}

async function nbCerrarSesion() {
    if (!nbAuth || !nbUser) return;
    if (nbPendientes()) { try { await nbSubirPendientes(true); } catch (_) {} }
    const pend = nbPendientes();
    const botones = [{ t: 'Cerrar sesión y mantener las fichas aquí', v: 'mantener', primario: true }];
    if (!pend) botones.push({ t: 'Cerrar sesión y quitar las fichas de este navegador', v: 'quitar' });
    botones.push({ t: 'Cancelar', v: 'no' });
    const r = await nbDialogo({
        titulo: 'Cerrar sesión',
        texto: pend
            ? `⚠ Hay ${pend} cambio${pend === 1 ? '' : 's'} que todavía no se ${pend === 1 ? 'ha' : 'han'} subido a la nube (¿sin conexión?). Si cierras sesión ahora quedarán solo en este navegador.`
            : 'Todas tus fichas están guardadas en la nube. Si es un ordenador compartido, puedes quitarlas de este navegador.',
        botones
    });
    if (!r || r === 'no') return;
    try { await nbAuth.signOut(); } catch (e) { _mostrarToast('No se pudo cerrar sesión: ' + (e && e.message || e), 'error'); return; }
    if (r === 'quitar') nbLimpiarLocal(true);
    else _mostrarToast('Sesión cerrada. Tus fichas siguen en este navegador.');
}

/* ══════════════════════ ESCUCHA DE LA NUBE ══════════════════════ */
function nbDetenerListener() {
    if (nbUnsub) { try { nbUnsub(); } catch (_) {} nbUnsub = null; }
}
function nbIniciarListener() {
    nbDetenerListener();
    if (!nbUser || !nbDb) return;
    const uid = nbUser.uid;
    try {
        nbUnsub = nbCol().onSnapshot(
            snap => { if (nbUser && nbUser.uid === uid) nbAlSnapshot(snap); },
            err => {
                nbUnsub = null;
                if (!nbUser || nbUser.uid !== uid) return;
                nbManejarError(err);
                nbPintarBoton();
            });
    } catch (e) { nbUnsub = null; nbManejarError(e); }
}

function nbAlSnapshot(snap) {
    if (snap.metadata && snap.metadata.fromCache) { nbOffline = true; nbPintarBoton(); return; }   // sin datos fiables de la nube
    nbOffline = false; nbError = null;
    nbConteoRemoto = snap.docs.filter(d => !(d.data() || {}).deleted).length;
    // Si la persona acaba de teclear (guardado aún pendiente), anotarlo ya: así «cambiada aquí» es exacto
    if (typeof _guardadoPendiente !== 'undefined' && _guardadoPendiente) { try { guardarTodo(); } catch (_) {} }

    const cambios = snap.docChanges().filter(c => c.type !== 'removed')
        .map(c => ({ sid: c.doc.id, r: c.doc.data(), nuevo: c.type === 'added' }))
        .sort((a, b) => (a.r.cre || 0) - (b.r.cre || 0));
    const activa = fichaActual;
    cambios.forEach(c => {
        if (!_sidValido(c.sid) || !c.r || typeof c.r !== 'object') return;
        try { nbAplicarRemoto(c.sid, c.r); } catch (e) { console.warn('Nube: error aplicando', c.sid, e); nbError = 'No se pudo aplicar una ficha de la nube: ' + (e && e.message || e); }
    });
    if (activa && fichas.some(f => f.id === activa) && fichaActual !== activa) activarFicha(activa);

    if (!nbPrimeraHecha) { nbPrimeraHecha = true; nbTrasPrimeraSync(snap); }
    nbGuardarSync();
    if (nbPendientes()) nbProgramarSubida(1200);
    nbPintarBoton();
}

function nbTrasPrimeraSync(snap) {
    const docs = {};
    snap.docs.forEach(d => { docs[d.id] = d.data() || {}; });
    const hayRemotas = Object.keys(docs).some(sid => !docs[sid].deleted);

    // Con fichas en la nube, la ficha en blanco que trae un navegador nuevo sobra
    if (hayRemotas) {
        fichas.slice().forEach(f => {
            const sid = f.panel.dataset.sid, st = nbSync.f[sid];
            if (fichas.length > 1 && st && st.br === 0 && st.v && !docs[sid]) _quitarFicha(f.id);
        });
    }
    // Borrados que ya no hacen falta
    Object.keys(nbSync.del).forEach(sid => { if (!docs[sid] || docs[sid].deleted) delete nbSync.del[sid]; });
    // Fichas que se sincronizaron un día pero ya no están en la nube: se vuelven a subir
    Object.keys(nbSync.f).forEach(sid => {
        const st = nbSync.f[sid];
        if (!docs[sid] && st.br > 0) { st.br = 0; st.uh = null; }
    });
    if (!fichas.length) nuevaFicha();
    guardarDebounced();
}

/* ══════════════════════ NUBE → LOCAL ══════════════════════ */
function nbAplicarRemoto(sid, r) {
    if (nbSync.del[sid]) return;                                  // la hemos borrado aquí y falta propagarlo
    const st = nbSync.f[sid];
    if (r.dev === NB_SESION && st && r.rev === st.rW) return;      // eco de nuestra propia escritura
    const f = nbFichaPorSid(sid);

    if (r.deleted) {
        if (st) st.br = r.rev;
        if (!f) return;
        if (st && nbDirty(sid)) return;                            // editada aquí después de borrarse: se queda y se vuelve a subir
        nbEliminarLocal(sid);
        return;
    }
    if (!f) { nbCrearDesdeRemoto(sid, r); return; }

    const s = st || (nbSync.f[sid] = { br: 0, h: null, uh: null, m: 0, v: 0 });
    if (r.rev === s.br) return;                                    // es la versión que ya tenemos
    if (nbUltimas[sid] === r.data) { s.br = r.rev; s.uh = s.h; nbGuardarSync(); return; }   // mismo contenido
    if (r.rev < s.br) { s.br = r.rev; s.uh = null; return; }       // la nube va por detrás (se reinició): se reenvía lo nuestro
    if (!nbDirty(sid)) { nbReemplazarPorRemoto(sid, r); return; } // solo ha cambiado la nube
    nbResolverConflicto(sid, r);                                   // ha cambiado en los dos sitios
}

function nbParsearRemoto(sid, r) {
    let datos;
    try { datos = JSON.parse(r.data); } catch (e) { datos = null; }
    if (!datos || typeof datos !== 'object' || Array.isArray(datos)) { nbError = 'Una ficha de la nube está dañada y no se pudo leer.'; return null; }
    datos.sid = sid;
    return datos;
}

function nbRegistrarAplicada(sid, r, panel) {
    const d = leerFicha(panel);
    const canon = nbCanon(JSON.stringify(d), d);
    const h = nbHash(canon);
    nbUltimas[sid] = canon;
    nbGracia[sid] = { hasta: Date.now() + NB_GRACIA, t0: nbUltimaEntrada };
    nbSync.f[sid] = { br: r.rev, h, uh: h, m: r.mod || Date.now(), v: nbEsVacia(d) ? 1 : 0 };
    nbSync.t = Date.now();
    nbGuardarSync();
    guardarDebounced();
}

function nbCrearDesdeRemoto(sid, r) {
    const datos = nbParsearRemoto(sid, r);
    if (!datos) return;
    const activa = fichaActual;
    const nueva = nuevaFicha(datos, { nuevoId: true, sid });
    if (activa && fichas.some(f => f.id === activa)) activarFicha(activa);
    nbRegistrarAplicada(sid, r, nueva.panel);
}

function nbUsuarioEditando(f) {
    const a = document.activeElement;
    if (!a || !f.panel.contains(a)) return false;
    const campo = /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) || a.isContentEditable;
    return campo && Date.now() - nbUltimaEntrada < 8000;
}

/* Sustituye la ficha local por la versión de la nube (misma posición, mismo sid) */
function nbReemplazarPorRemoto(sid, r, forzar) {
    const f = nbFichaPorSid(sid);
    if (!f) { nbCrearDesdeRemoto(sid, r); return; }
    if (!forzar && nbUsuarioEditando(f)) {      // no cambiarle la ficha bajo los dedos: se aplica cuando pare
        nbPospuestos[sid] = r;
        clearTimeout(nbTimerPospuestos);
        nbTimerPospuestos = setTimeout(nbProcesarPospuestos, 2500);
        return;
    }
    const datos = nbParsearRemoto(sid, r);
    if (!datos) return;
    if (r.imgOmitidas && r.imgOmitidas.length) { try { nbCopiarImagenes(datos, leerFicha(f.panel), r.imgOmitidas); } catch (_) {} }

    const idViejo = f.id, idx = fichas.indexOf(f), activaId = fichaActual;
    const nueva = nuevaFicha(datos, { nuevoId: true, sid });
    // misma posición que la ficha sustituida
    const tabNueva = document.querySelector(`.pestana[data-ficha-id="${nueva.id}"]`);
    const tabVieja = document.querySelector(`.pestana[data-ficha-id="${idViejo}"]`);
    if (tabNueva && tabVieja) tabVieja.parentNode.insertBefore(tabNueva, tabVieja);
    const ent = fichas.splice(fichas.findIndex(x => x.id === nueva.id), 1)[0];
    fichas.splice(idx, 0, ent);
    // el historial de versiones sigue con la ficha nueva
    try {
        const h2 = hxLeerHist();
        if (h2[idViejo]) { h2[nueva.id] = h2[idViejo]; delete h2[idViejo]; hxEscribir(HX_HIST, h2); }
        if (typeof hxUltimaVez === 'object' && hxUltimaVez[idViejo] != null) { hxUltimaVez[nueva.id] = hxUltimaVez[idViejo]; delete hxUltimaVez[idViejo]; }
    } catch (_) {}
    _quitarFicha(idViejo);
    activarFicha(activaId === idViejo ? nueva.id : activaId);
    nbRegistrarAplicada(sid, r, nueva.panel);
}

function nbProcesarPospuestos() {
    const lista = nbPospuestos; nbPospuestos = {};
    Object.keys(lista).forEach(sid => { try { nbAplicarRemoto(sid, lista[sid]); } catch (e) { console.warn('Nube:', e); } });
    nbPintarBoton();
}

function nbEliminarLocal(sid) {
    const f = nbFichaPorSid(sid);
    if (!f) return;
    let nombre = 'Ficha';
    try { nombre = nbNombreDe(leerFicha(f.panel)); } catch (_) {}
    if (fichas.length === 1) nuevaFicha();       // nunca se queda la web sin ficha (la vacía no se sube)
    try { if (typeof hxMoverAPapelera === 'function') hxMoverAPapelera(f, { motivo: 'Borrada desde otro navegador' }); } catch (_) {}
    _quitarFicha(f.id);
    delete nbSync.f[sid]; delete nbUltimas[sid];
    nbGuardarSync();
    guardarDebounced();
    _mostrarToast(`La ficha «${nombre}» se borró desde otro navegador. Está en la papelera (🕘 Historial).`);
}

/* La ficha cambió aquí y en la nube a la vez: gana la de la nube y la local se conserva como ficha nueva */
function nbResolverConflicto(sid, r) {
    const f = nbFichaPorSid(sid);
    if (!f) { nbCrearDesdeRemoto(sid, r); return; }
    let local;
    try { local = JSON.parse(nbUltimas[sid]); } catch (_) { local = null; }
    if (local && typeof local === 'object') {
        const nombre = nbNombreDe(local);
        local.nombre = (nombre === 'Sin nombre' ? 'Ficha' : nombre) + ' (copia local)';
        delete local.id; delete local.sid;
        const activa = fichaActual;
        nuevaFicha(local, { nuevoId: true });
        if (activa && fichas.some(x => x.id === activa)) activarFicha(activa);
        _mostrarToast(`⚠ «${nombre}» se había modificado a la vez en otro navegador. Se ha conservado la versión de la nube y tu versión como «${local.nombre}».`, 'error');
    }
    nbReemplazarPorRemoto(sid, r, true);
}

/* ══════════════════════ LOCAL → NUBE ══════════════════════ */
function nbProgramarSubida(ms) {
    if (!nbUser || !nbPrimeraHecha) return;
    clearTimeout(nbTimerSubida);
    nbTimerSubida = setTimeout(() => nbSubirPendientes(), ms == null ? NB_ESPERA_SUBIDA : ms);
}

async function nbSubirPendientes(forzar) {
    if (!nbUser || !nbPrimeraHecha || !nbDb) return;
    if (nbSubiendo) return;
    nbSubiendo = true;
    nbPintarBoton();
    const uid = nbUser.uid;
    let esperar = 0;
    try {
        for (const sid of Object.keys(nbSync.del)) {
            if (!nbUser || nbUser.uid !== uid) break;
            await nbSubirBorrado(sid);
        }
        for (const sid of Object.keys(nbSync.f)) {
            if (!nbUser || nbUser.uid !== uid) break;
            if (!nbDirty(sid)) continue;
            const st = nbSync.f[sid];
            const falta = NB_INTERVALO_MIN - (Date.now() - (st.ts || 0));
            if (!forzar && falta > 0) { esperar = Math.max(esperar, falta); continue; }
            try { await nbSubirFicha(sid); }
            catch (e) {
                if (!e || !e.nbGrande) throw e;          // una ficha enorme no debe impedir subir las demás
                st.bloq = st.h;
                _mostrarToast(e.message, 'error');
            }
        }
        nbOffline = false; nbError = null;
    } catch (e) {
        nbManejarError(e);
        esperar = NB_REINTENTO;
    } finally {
        nbSubiendo = false;
        nbGuardarSync();
        if (nbUser && nbPendientes()) nbProgramarSubida(esperar || NB_ESPERA_SUBIDA);
        nbPintarBoton();
    }
}

async function nbSubirBorrado(sid) {
    const ref = nbCol().doc(sid);
    await nbDb.runTransaction(async tx => {
        const s = await tx.get(ref);
        const rev = s.exists ? ((s.data().rev | 0)) : 0;
        tx.set(ref, {
            v: NB_VERSION_DOC, rev: rev + 1, deleted: true, data: '', nombre: '',
            dev: NB_SESION, mod: Date.now(), cre: (s.exists && s.data().cre) || Date.now(),
            imgOmitidas: [], updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    });
    delete nbSync.del[sid];
    nbSync.t = Date.now();
    nbGuardarSync();
}

async function nbSubirFicha(sid) {
    const st = nbSync.f[sid], canon = nbUltimas[sid];
    if (!st) return;
    if (canon == null) { delete nbSync.f[sid]; return; }
    const hUp = st.h;
    const pre = nbPrepararDatos(canon, sid);
    let nombre = '';
    try { nombre = String(JSON.parse(canon).nombre || '').slice(0, 80); } catch (_) {}
    const ref = nbCol().doc(sid);
    let res = null;
    await nbDb.runTransaction(async tx => {
        const s = await tx.get(ref);
        const r = s.exists ? s.data() : null;
        const revR = r ? (r.rev | 0) : 0;
        res = null;
        if (r && r.deleted !== true && revR !== st.br) {            // la nube avanzó mientras tanto
            res = (r.data === pre.data) ? { tipo: 'igual', rev: revR } : { tipo: 'conflicto', remoto: r };
            return;
        }
        const rev = revR + 1;
        st.rW = rev;                                                 // para reconocer el eco en la escucha
        // Las imágenes que otro navegador no pudo subir siguen «omitidas» mientras aquí estén vacías
        // (si no, quien las tiene las perdería al recibir esta versión)
        let omitidas = pre.omitidas;
        if (r && Array.isArray(r.imgOmitidas) && r.imgOmitidas.length) {
            const previas = r.imgOmitidas.filter(p => !omitidas.includes(p));
            if (previas.length) {
                try {
                    const o = JSON.parse(pre.data);
                    const siguen = previas.filter(p => { const v = nbGetRuta(o, p); return v === '' || v == null; });
                    if (siguen.length) omitidas = omitidas.concat(siguen);
                } catch (_) {}
            }
        }
        tx.set(ref, {
            v: NB_VERSION_DOC, rev, data: pre.data, nombre, dev: NB_SESION,
            mod: st.m || Date.now(), cre: (r && r.cre) || Date.now(), deleted: false,
            imgOmitidas: omitidas, updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        res = { tipo: 'ok', rev };
    });
    if (!res) return;
    // Mientras se subía, la escucha pudo haber sustituido ya esta ficha por la de la nube (estado nuevo): no tocar nada
    if (nbSync.f[sid] !== st) return;
    if (res.tipo === 'conflicto') {
        if (st.br >= res.remoto.rev) return;                           // ya lo resolvió la escucha
        nbResolverConflicto(sid, res.remoto);
        return;
    }
    st.br = res.rev; st.uh = hUp; st.ts = Date.now();
    nbSync.t = Date.now();
    nbGuardarSync();
}

/* Si la ficha no cabe en un documento, se quitan las imágenes más pesadas (siguen en este navegador) */
function nbPrepararDatos(canon, sid) {
    if (nbBytes(canon) <= NB_MAX_BYTES) return { data: canon, omitidas: [] };
    const obj = JSON.parse(canon), imgs = [];
    nbRecorrerImagenes(obj, [], (ruta, padre, clave, valor) => imgs.push({ ruta, padre, clave, n: valor.length }));
    imgs.sort((a, b) => b.n - a.n);
    const omitidas = [];
    for (const im of imgs) {
        im.padre[im.clave] = '';
        omitidas.push(im.ruta.join('.'));
        const data = JSON.stringify(obj);
        if (nbBytes(data) <= NB_MAX_BYTES) {
            if (!nbAvisoGrandeMostrado[sid]) {
                nbAvisoGrandeMostrado[sid] = true;
                _mostrarToast(`«${nbNombreDe(obj)}» pesa demasiado para la nube: ${omitidas.length === 1 ? 'una imagen' : omitidas.length + ' imágenes'} no se sincroniza${omitidas.length === 1 ? '' : 'n'} (siguen en este navegador).`, 'error');
            }
            return { data, omitidas };
        }
    }
    const e = new Error(`La ficha «${nbNombreDe(obj)}» es demasiado grande para la nube incluso sin imágenes.`);
    e.nbGrande = true;
    throw e;
}
function nbRecorrerImagenes(nodo, ruta, cb) {
    if (!nodo || typeof nodo !== 'object') return;
    Object.keys(nodo).forEach(k => {
        const v = nodo[k];
        if (typeof v === 'string') { if (v.length > 1000 && v.startsWith('data:image/')) cb(ruta.concat(k), nodo, k, v); }
        else nbRecorrerImagenes(v, ruta.concat(k), cb);
    });
}
function nbGetRuta(obj, ruta) {
    let o = obj;
    for (const k of String(ruta).split('.')) { if (o == null || typeof o !== 'object') return undefined; o = o[k]; }
    return o;
}
function nbCopiarImagenes(dest, origen, rutas) {
    rutas.forEach(ruta => {
        const partes = String(ruta).split('.');
        let o = origen, d = dest;
        for (let i = 0; i < partes.length - 1; i++) { o = o && o[partes[i]]; d = d && d[partes[i]]; }
        const k = partes[partes.length - 1];
        if (o && d && typeof o[k] === 'string' && o[k].startsWith('data:image/')) d[k] = o[k];
    });
}

function nbManejarError(e) {
    console.warn('Nube:', e);
    const code = (e && e.code) || '';
    const msg = (e && e.message) || String(e);
    if (code === 'permission-denied' || /permission/i.test(code)) {
        nbError = 'La nube ha rechazado la operación (permisos). Comprueba que las reglas de Firestore están publicadas (ver GUIA-NUBE.md).';
    } else if (code === 'resource-exhausted') {
        nbError = 'Se ha agotado la cuota gratuita de Firebase por hoy. Tus fichas siguen guardadas en este navegador y se subirán más tarde.';
    } else if (code === 'unavailable' || code === 'deadline-exceeded' || code === 'cancelled' || /network|offline|unavailable/i.test(msg) || navigator.onLine === false) {
        nbOffline = true; nbError = null;
    } else {
        nbError = 'Error de sincronización: ' + msg;
    }
}

/* ══════════════════════ ESTADO PARA LA INTERFAZ ══════════════════════ */
function nbEstado() {
    if (nbMotivoInactivo) return nbMotivoInactivo;
    if (!nbUser) return 'sin-sesion';
    if (nbError) return 'error';
    if (nbOffline) return 'sin-conexion';
    if (!nbPrimeraHecha) return 'conectando';
    if (nbSubiendo) return 'sincronizando';
    if (nbPendientes()) return 'pendiente';
    return 'ok';
}
function nbNombreCorto() {
    if (!nbUser) return '';
    const n = nbUser.displayName || (nbUser.email || '').split('@')[0] || 'cuenta';
    return n.length > 14 ? n.slice(0, 13) + '…' : n;
}
function nbPintarBoton() {
    const b = document.getElementById('btn-nube');
    if (!b) return;
    const e = nbEstado(), p = nbPendientes();
    const textos = {
        'sin-config': ['☁ Cuenta', 'Cuenta y guardado en la nube (sin configurar)'],
        'sin-http': ['☁ Cuenta', 'Cuenta y guardado en la nube (necesita abrir la web desde http)'],
        'sin-sdk': ['☁ Cuenta', 'Cuenta y guardado en la nube (sin conexión con Firebase)'],
        'sin-sesion': ['☁ Iniciar sesión', 'Inicia sesión para guardar tus fichas en la nube'],
        'conectando': ['☁ Conectando…', 'Conectando con la nube'],
        'sincronizando': ['☁ Sincronizando…', 'Subiendo cambios a la nube'],
        'pendiente': [`☁ Pendiente (${p})`, `${p} cambio${p === 1 ? '' : 's'} por subir a la nube`],
        'sin-conexion': ['☁ Sin conexión', 'Sin conexión con la nube: los cambios se subirán al volver'],
        'error': ['☁ ⚠ Error', nbError || 'Error de sincronización'],
        'ok': ['☁ ✓ ' + nbNombreCorto(), 'Fichas sincronizadas con tu cuenta ' + (nbUser && nbUser.email || '')]
    };
    const [txt, tit] = textos[e] || textos['sin-sesion'];
    if (b.textContent !== txt) b.textContent = txt;
    b.title = tit;
    b.dataset.estado = e;
    // La ventana de cuenta solo se repinta si algo ha cambiado (para no quitarle el foco a quien escribe)
    if (nbRenderModal && nbFirma() !== nbFirmaModal) nbRenderModal();
}
function nbFirma() {
    return [nbEstado(), nbUser && nbUser.uid, nbPendientes(), nbConteoRemoto, nbSync.t, nbError, nbMotivoInactivo].join('|');
}

/* ══════════════════════ VENTANAS ══════════════════════ */
const NB_EST = {
    overlay: 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:12px;',
    caja: 'background:#1a202c;border:2px solid #4a90d9;border-radius:12px;padding:16px 20px;width:min(440px,100%);max-height:92vh;overflow-y:auto;box-shadow:0 8px 32px rgba(0,0,0,0.6);color:#e2e8f0;font-family:inherit;font-size:13px;box-sizing:border-box;line-height:1.45;',
    btn: 'padding:7px 12px;background:#2d3748;border:1.5px solid #718096;border-radius:6px;color:#e2e8f0;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;',
    primario: 'background:#2c5282;border-color:#4299e1;',
    input: 'width:100%;padding:7px 9px;background:#2d3748;border:1.5px solid #718096;border-radius:6px;color:#e2e8f0;font-family:inherit;font-size:13px;box-sizing:border-box;margin-top:3px;',
    etiqueta: 'display:block;margin-top:8px;font-size:12px;font-weight:700;color:#cbd5e0;',
    sub: 'font-size:12px;color:#a0aec0;',
};
function nbEl(tag, css, txt) { const e = document.createElement(tag); if (css) e.style.cssText = css; if (txt != null) e.textContent = txt; return e; }
function nbBtn(txt, fn, extra) { const b = nbEl('button', NB_EST.btn + (extra || ''), txt); b.type = 'button'; b.addEventListener('click', fn); return b; }

/* Cuadro de diálogo con botones → Promise con el valor del botón pulsado (null si se cierra) */
function nbDialogo({ titulo, texto, botones }) {
    return new Promise(resolve => {
        const previo = document.activeElement;
        const overlay = nbEl('div', NB_EST.overlay.replace('z-index:10000', 'z-index:10002'));
        overlay.id = 'modal-nube-dialogo';
        const caja = nbEl('div', NB_EST.caja);
        caja.setAttribute('role', 'alertdialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'nb-dlg-tit'); caja.setAttribute('aria-describedby', 'nb-dlg-txt');
        const t = nbEl('div', 'font-size:14px;font-weight:800;color:#90cdf4;margin-bottom:8px;', titulo); t.id = 'nb-dlg-tit';
        const p = nbEl('div', 'margin-bottom:12px;', texto); p.id = 'nb-dlg-txt';
        const fila = nbEl('div', 'display:flex;flex-direction:column;gap:6px;');
        const cerrar = v => { document.removeEventListener('keydown', teclas, true); overlay.remove(); try { previo && previo.focus && previo.focus(); } catch (_) {} resolve(v); };
        function teclas(e) {
            if (e.key === 'Escape') { e.stopPropagation(); cerrar(null); }
            else if (e.key === 'Tab') {
                const foco = Array.from(caja.querySelectorAll('button')).filter(x => x.offsetParent !== null);
                const i = foco.indexOf(document.activeElement);
                if (e.shiftKey && i <= 0) { e.preventDefault(); foco[foco.length - 1].focus(); }
                else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
            }
        }
        botones.forEach(b => fila.appendChild(nbBtn(b.t, () => cerrar(b.v), b.primario ? NB_EST.primario : '')));
        caja.append(t, p, fila);
        overlay.appendChild(caja);
        document.addEventListener('keydown', teclas, true);
        document.body.appendChild(overlay);
        (fila.querySelector('button') || caja).focus();
    });
}

function nbCerrarCuenta() {
    const o = document.getElementById('modal-nube');
    if (o && o._cerrar) o._cerrar();
}

/* Ventana de cuenta: iniciar sesión / estado de la sincronización */
function nbAbrirCuenta() {
    if (document.getElementById('modal-nube')) return;
    const previo = document.activeElement;
    const overlay = nbEl('div', NB_EST.overlay);
    overlay.id = 'modal-nube';
    const caja = nbEl('div', NB_EST.caja);
    caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'nb-titulo');
    overlay.appendChild(caja);

    let ocupado = false, mensaje = null;   // mensaje = { texto, ok }
    const campos = { email: '', pass: '' };

    function cerrar() {
        document.removeEventListener('keydown', teclas, true);
        nbRenderModal = null;
        overlay.remove();
        try { previo && previo.focus && previo.focus(); } catch (_) {}
    }
    overlay._cerrar = cerrar;
    function teclas(e) {
        if (document.getElementById('modal-nube-dialogo')) return;
        if (e.key === 'Escape') { e.stopPropagation(); cerrar(); }
        else if (e.key === 'Tab') {
            const foco = Array.from(caja.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href]')).filter(x => x.offsetParent !== null);
            if (!foco.length) return;
            const i = foco.indexOf(document.activeElement);
            if (e.shiftKey && i <= 0) { e.preventDefault(); foco[foco.length - 1].focus(); }
            else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
        }
    }

    async function accion(fn) {
        if (ocupado) return;
        ocupado = true; mensaje = null; pintar();
        try { await fn(); }
        catch (e) { const m = nbMensajeAuth(e); mensaje = m ? { texto: m, ok: false } : null; }
        ocupado = false; pintar();
    }

    function cabecera(titulo) {
        const cab = nbEl('div', 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;');
        const t = nbEl('div', 'font-size:14px;font-weight:800;color:#90cdf4;text-transform:uppercase;letter-spacing:0.5px;', titulo); t.id = 'nb-titulo';
        const x = nbBtn('✕', cerrar, 'padding:2px 9px;'); x.setAttribute('aria-label', 'Cerrar');
        cab.append(t, x);
        return { cab, x };
    }
    function bloqueMensaje() {
        if (!mensaje) return null;
        const m = nbEl('div', `margin-top:10px;padding:8px 10px;border-radius:6px;font-weight:600;background:${mensaje.ok ? '#22543d' : '#742a2a'};color:${mensaje.ok ? '#c6f6d5' : '#fed7d7'};`, mensaje.texto);
        m.setAttribute('role', mensaje.ok ? 'status' : 'alert');
        return m;
    }

    function pintar() {
        nbFirmaModal = nbFirma();
        // conservar lo que se está escribiendo y dónde está el cursor
        const ie = caja.querySelector('#nb-email'), ip = caja.querySelector('#nb-pass');
        if (ie) campos.email = ie.value;
        if (ip) campos.pass = ip.value;
        const act = document.activeElement;
        const idAct = act && caja.contains(act) ? act.id : '';
        const sel = idAct && act.selectionStart != null ? [act.selectionStart, act.selectionEnd] : null;
        caja.replaceChildren();

        const estado = nbEstado();
        let foco;
        if (estado === 'sin-config') foco = pintarSinConfig();
        else if (estado === 'sin-http') foco = pintarSinHttp();
        else if (!nbUser) foco = pintarLogin(estado === 'sin-sdk');
        else foco = pintarCuenta(estado);

        const previo = idAct && caja.querySelector('#' + idAct);
        if (previo && !previo.disabled) { previo.focus(); if (sel) { try { previo.setSelectionRange(sel[0], sel[1]); } catch (_) {} } }
        else if (foco) foco.focus();
    }

    function pintarSinConfig() {
        const { cab, x } = cabecera('☁ Cuenta y nube');
        caja.append(cab,
            nbEl('p', 'margin:0 0 8px;', 'El guardado en la nube todavía no está configurado en esta copia de la web.'),
            nbEl('p', 'margin:0 0 8px;' + NB_EST.sub, 'Hasta entonces tus fichas se guardan solo en este navegador (como siempre). Para activar las cuentas hay que crear un proyecto gratuito de Firebase y pegar sus datos en el archivo firebase-config.js. Los pasos están en GUIA-NUBE.md.'));
        return x;
    }
    function pintarSinHttp() {
        const { cab, x } = cabecera('☁ Cuenta y nube');
        caja.append(cab,
            nbEl('p', 'margin:0 0 8px;', 'El inicio de sesión no funciona si abres la web como archivo (file://).'),
            nbEl('p', 'margin:0 0 8px;' + NB_EST.sub, 'Ábrela desde su dirección de GitHub Pages o desde un servidor local (por ejemplo http://localhost:8000). Tus fichas siguen guardándose en este navegador.'));
        return x;
    }

    function pintarLogin(sinSDK) {
        const { cab, x } = cabecera('☁ Guarda tus fichas en la nube');
        caja.append(cab, nbEl('p', 'margin:0 0 10px;' + NB_EST.sub, 'Inicia sesión para tener tus fichas en cualquier navegador. Cada persona ve solo las suyas. Sin cuenta, la web sigue funcionando y guardando en este navegador.'));
        if (sinSDK) caja.appendChild(nbEl('div', 'margin-bottom:10px;padding:8px 10px;border-radius:6px;background:#744210;color:#feebc8;font-weight:600;', 'No hay conexión con Firebase. Comprueba tu internet e inténtalo de nuevo.'));

        const g = nbBtn('Continuar con Google', () => accion(nbEntrarGoogle), 'width:100%;background:#fff;color:#1a202c;border-color:#fff;');
        g.disabled = ocupado;
        caja.appendChild(g);
        caja.appendChild(nbEl('div', 'text-align:center;margin:10px 0 2px;' + NB_EST.sub, '— o con email y contraseña —'));

        const form = nbEl('form');
        form.noValidate = true;
        const l1 = nbEl('label', NB_EST.etiqueta, 'Email'); l1.htmlFor = 'nb-email';
        const i1 = nbEl('input', NB_EST.input); i1.id = 'nb-email'; i1.type = 'email'; i1.autocomplete = 'email'; i1.value = campos.email; i1.disabled = ocupado;
        const l2 = nbEl('label', NB_EST.etiqueta, 'Contraseña (mínimo 6 caracteres)'); l2.htmlFor = 'nb-pass';
        const i2 = nbEl('input', NB_EST.input); i2.id = 'nb-pass'; i2.type = 'password'; i2.autocomplete = 'current-password'; i2.value = campos.pass; i2.disabled = ocupado;
        const fila = nbEl('div', 'display:flex;gap:8px;margin-top:12px;');
        const entrar = nbBtn('Entrar', () => {}, NB_EST.primario + 'flex:1;'); entrar.type = 'submit'; entrar.disabled = ocupado;
        const crear = nbBtn('Crear cuenta', () => accion(() => nbRegistrar(i1.value, i2.value)), 'flex:1;'); crear.disabled = ocupado;
        fila.append(entrar, crear);
        form.append(l1, i1, l2, i2, fila);
        form.addEventListener('submit', ev => { ev.preventDefault(); accion(() => nbEntrarEmail(i1.value, i2.value)); });
        caja.appendChild(form);

        const olvido = nbBtn('¿Has olvidado la contraseña?', () => accion(async () => {
            await nbRecuperar(i1.value);
            mensaje = { texto: 'Te hemos enviado un email para cambiar la contraseña (mira también en spam).', ok: true };
        }), 'margin-top:10px;background:transparent;border-color:transparent;color:#90cdf4;text-decoration:underline;padding:4px 0;font-weight:600;');
        olvido.disabled = ocupado;
        caja.appendChild(olvido);

        const m = bloqueMensaje(); if (m) caja.appendChild(m);
        if (ocupado) caja.appendChild(nbEl('div', 'margin-top:8px;' + NB_EST.sub, 'Un momento…'));
        return sinSDK ? x : i1;
    }

    function pintarCuenta(estado) {
        const { cab, x } = cabecera('☁ Tu cuenta');
        caja.appendChild(cab);
        caja.appendChild(nbEl('div', 'font-weight:700;font-size:14px;', nbUser.displayName || nbUser.email || 'Cuenta'));
        if (nbUser.displayName && nbUser.email) caja.appendChild(nbEl('div', NB_EST.sub, nbUser.email));

        const frases = {
            'conectando': 'Conectando con la nube…',
            'sincronizando': 'Sincronizando…',
            'pendiente': `Hay ${nbPendientes()} cambio${nbPendientes() === 1 ? '' : 's'} por subir. Se subirán en unos segundos.`,
            'sin-conexion': 'Sin conexión con la nube. Tus fichas se guardan en este navegador y se subirán al volver internet.',
            'error': nbError || 'Error de sincronización.',
            'ok': nbSync.t ? `✓ Todo sincronizado (última vez: ${new Date(nbSync.t).toLocaleString('es-ES')}).` : '✓ Todo sincronizado.'
        };
        const bueno = estado === 'ok';
        caja.appendChild(nbEl('div', `margin-top:10px;padding:8px 10px;border-radius:6px;font-weight:600;background:${bueno ? '#22543d' : (estado === 'error' ? '#742a2a' : '#2d3748')};color:${bueno ? '#c6f6d5' : (estado === 'error' ? '#fed7d7' : '#e2e8f0')};`, frases[estado] || ''));
        if (nbConteoRemoto != null) caja.appendChild(nbEl('div', 'margin-top:8px;' + NB_EST.sub, `Fichas en la nube: ${nbConteoRemoto}.`));
        caja.appendChild(nbEl('div', 'margin-top:8px;' + NB_EST.sub, 'El historial de versiones, la papelera y el fondo personalizado se guardan solo en este navegador.'));

        const fila = nbEl('div', 'display:flex;flex-direction:column;gap:6px;margin-top:12px;');
        const ahora = nbBtn('↻ Sincronizar ahora', async () => { nbOffline = false; if (!nbUnsub) nbIniciarListener(); await nbSubirPendientes(true); }, NB_EST.primario);
        ahora.disabled = estado === 'conectando' || estado === 'sincronizando';
        fila.append(ahora, nbBtn('Cerrar sesión', () => nbCerrarSesion()));
        caja.appendChild(fila);
        const m = bloqueMensaje(); if (m) caja.appendChild(m);
        return x;
    }

    overlay.addEventListener('mousedown', e => { if (e.target === overlay) cerrar(); });
    document.addEventListener('keydown', teclas, true);
    nbRenderModal = pintar;
    document.body.appendChild(overlay);
    pintar();
}

/* ══════════════════════ INICIO DE SESIÓN ══════════════════════ */
async function nbEntrarGoogle() {
    if (!(await nbIntentarSDK())) throw { code: 'nb/sin-sdk' };
    const p = new firebase.auth.GoogleAuthProvider();
    p.setCustomParameters({ prompt: 'select_account' });
    await nbAuth.signInWithPopup(p);
    nbCerrarCuenta();
}
async function nbEntrarEmail(email, pass) {
    email = String(email || '').trim();
    if (!email || !pass) throw { code: 'nb/faltan-datos' };
    if (!(await nbIntentarSDK())) throw { code: 'nb/sin-sdk' };
    await nbAuth.signInWithEmailAndPassword(email, pass);
    nbCerrarCuenta();
}
async function nbRegistrar(email, pass) {
    email = String(email || '').trim();
    if (!email || !pass) throw { code: 'nb/faltan-datos' };
    if (!(await nbIntentarSDK())) throw { code: 'nb/sin-sdk' };
    await nbAuth.createUserWithEmailAndPassword(email, pass);
    nbCerrarCuenta();
}
async function nbRecuperar(email) {
    email = String(email || '').trim();
    if (!email) throw { code: 'nb/falta-email' };
    if (!(await nbIntentarSDK())) throw { code: 'nb/sin-sdk' };
    await nbAuth.sendPasswordResetEmail(email);
}

/* Errores de Firebase Auth → mensaje claro en español (null = no mostrar nada) */
function nbMensajeAuth(e) {
    const code = (e && e.code) || '';
    console.warn('Nube (login):', e);
    const mapa = {
        'nb/faltan-datos': 'Escribe tu email y tu contraseña.',
        'nb/falta-email': 'Escribe primero tu email y luego pulsa «¿Has olvidado la contraseña?».',
        'nb/sin-sdk': 'No hay conexión con Firebase. Comprueba tu internet e inténtalo de nuevo.',
        'auth/invalid-email': 'El email no es válido.',
        'auth/missing-email': 'Escribe tu email.',
        'auth/user-not-found': 'Email o contraseña incorrectos.',
        'auth/wrong-password': 'Email o contraseña incorrectos.',
        'auth/invalid-credential': 'Email o contraseña incorrectos.',
        'auth/invalid-login-credentials': 'Email o contraseña incorrectos.',
        'auth/email-already-in-use': 'Ya existe una cuenta con ese email. Prueba a entrar (o usa «Continuar con Google» si te registraste con Google).',
        'auth/weak-password': 'La contraseña es demasiado débil: usa al menos 6 caracteres.',
        'auth/too-many-requests': 'Demasiados intentos. Espera unos minutos e inténtalo de nuevo.',
        'auth/user-disabled': 'Esta cuenta está desactivada.',
        'auth/network-request-failed': 'No hay conexión con Firebase. Comprueba tu internet e inténtalo de nuevo.',
        'auth/popup-blocked': 'El navegador ha bloqueado la ventana de Google. Permite las ventanas emergentes para esta página e inténtalo de nuevo.',
        'auth/unauthorized-domain': `Este sitio (${location.hostname}) no está autorizado en Firebase. Añádelo en Authentication → Configuración → Dominios autorizados.`,
        'auth/operation-not-allowed': 'Este método de acceso no está activado en Firebase (Authentication → Método de acceso).',
        'auth/operation-not-supported-in-this-environment': 'El inicio de sesión no funciona en este entorno: abre la web desde http://localhost o desde GitHub Pages, no como archivo.',
        'auth/account-exists-with-different-credential': 'Ya existe una cuenta con ese email creada con otro método (por ejemplo, email y contraseña). Entra con ese método.',
        'auth/internal-error': 'Error interno de Firebase. Inténtalo de nuevo en un momento.',
        'auth/invalid-api-key': 'La clave de Firebase de firebase-config.js no es válida.',
        'auth/configuration-not-found': 'Falta activar Authentication en el proyecto de Firebase.',
    };
    if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request' || code === 'auth/user-cancelled') return null;
    return mapa[code] || ('No se pudo completar la operación: ' + (e && e.message || code || 'error desconocido'));
}
