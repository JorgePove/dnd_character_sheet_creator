/* ══════════════════════════════════════════════════════════
   historial.js — Papelera y versiones anteriores de las fichas

   PAPELERA (localStorage «dnd_papelera»)
   · Al borrar una ficha se guarda aquí (con sus imágenes si caben) y
     aparece un aviso «Deshacer». Se conservan 10 fichas, 30 días.
   VERSIONES (localStorage «dnd_historial»)
   · Mientras editas, cada 5 min se guarda una versión de cada ficha
     (comprimida y SIN imágenes, para no llenar el almacenamiento).
     Se conservan las 12 más recientes + hasta 6 más antiguas (≥ 6 h
     entre ellas). Las versiones guardadas a mano («Guardar versión
     ahora») no se podan (máx. 10 por ficha).
   · Restaurar una versión crea la ficha restaurada en el mismo sitio
     y manda la ficha actual a la papelera: nada se pierde.

   El guardado principal tiene prioridad: si el navegador se queda sin
   espacio, guardarTodo() llama a hxLiberarEspacio() (vacía versiones y
   luego papelera) y reintenta.

   Usa de script.js: fichas, leerFicha, nuevaFicha, activarFicha,
   _quitarFicha, guardarTodo, _mostrarAviso, _quitarAviso, _mostrarToast,
   _comprimirABase64, _descomprimirDeBase64.
══════════════════════════════════════════════════════════ */

const HX_PAPELERA = 'dnd_papelera';
const HX_HIST     = 'dnd_historial';
const HX_INTERVALO_MS    = 5 * 60 * 1000;
const HX_RECIENTES       = 12;
const HX_ANTIGUAS        = 6;
const HX_SEPARACION_MS   = 6 * 60 * 60 * 1000;
const HX_MANUALES        = 10;
const HX_PAPELERA_MAX    = 10;
const HX_PAPELERA_DIAS   = 30;
const HX_LIMITE_HIST     = 900000;     // caracteres máx. del historial entero
const HX_LIMITE_PAPELERA = 2500000;    // caracteres máx. de la papelera entera

/* ── Almacenamiento ───────────────────────────────────────── */
function hxLeer(clave, defecto) {
    try { const s = localStorage.getItem(clave); return s ? JSON.parse(s) : defecto; }
    catch (e) { return defecto; }
}
function hxEscribir(clave, valor) {
    try { localStorage.setItem(clave, JSON.stringify(valor)); return true; }
    catch (e) { return false; }
}
function hxTamano(clave) {
    try { return (localStorage.getItem(clave) || '').length; } catch (e) { return 0; }
}
const hxLeerHist = () => { const h = hxLeer(HX_HIST, {}); return (h && typeof h === 'object' && !Array.isArray(h)) ? h : {}; };
const hxLeerPapelera = () => { const p = hxLeer(HX_PAPELERA, []); return Array.isArray(p) ? p : []; };

/* ── Empaquetado (compresión si el navegador la tiene) ───── */
async function hxEmpaquetar(json) {
    try {
        if (typeof CompressionStream !== 'undefined' && typeof _comprimirABase64 === 'function') {
            return 'gz:' + await _comprimirABase64(json);
        }
    } catch (e) { /* sin compresión */ }
    return 'raw:' + json;
}
async function hxDesempaquetar(s) {
    if (typeof s !== 'string') throw new Error('Datos no válidos');
    if (s.startsWith('gz:')) return JSON.parse(await _descomprimirDeBase64(s.slice(3)));
    if (s.startsWith('raw:')) return JSON.parse(s.slice(4));
    throw new Error('Formato desconocido');
}

/* ── Utilidades de datos ──────────────────────────────────── */
/* Copia sin imágenes (cadenas «data:» largas): el historial no debe llenar el almacenamiento */
function hxSinImagenes(datos) {
    const limpiar = v => {
        if (typeof v === 'string') return (v.length > 20000 && v.startsWith('data:')) ? '' : v;
        if (Array.isArray(v)) return v.map(limpiar);
        if (v && typeof v === 'object') { const o = {}; for (const k in v) o[k] = limpiar(v[k]); return o; }
        return v;
    };
    const d = limpiar(datos);
    if (d && d.roleplay && Array.isArray(d.roleplay.imagenes)) d.roleplay.imagenes = d.roleplay.imagenes.filter(x => x);
    return d;
}
function hxHash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(36) + s.length.toString(36);
}
function hxResumen(d) {
    const cl = (Array.isArray(d.multiclases) ? d.multiclases : []).filter(m => m && m.clase)
        .map(m => `${m.clase} ${m.nivel || ''}`.trim()).join(' / ');
    let nHech = 0;
    (Array.isArray(d.spellNiveles) ? d.spellNiveles : []).forEach(n => { nHech += (n && Array.isArray(n.hechizos)) ? n.hechizos.length : 0; });
    return { n: String(d.nombre || '').slice(0, 80), c: cl.slice(0, 80), pg: `${d.hpActual ?? '?'}/${d.hpMax ?? '?'}`, h: nHech };
}
function hxTextoResumen(r) {
    if (!r) return '';
    const p = [];
    if (r.c) p.push(r.c);
    if (r.pg && r.pg !== '?/?') p.push(`PG ${r.pg}`);
    if (r.h) p.push(`${r.h} conjuro${r.h === 1 ? '' : 's'}`);
    return p.join(' · ');
}
function hxHace(ts) {
    const s = Math.max(0, Math.round((Date.now() - ts) / 1000));
    if (s < 60) return 'hace un momento';
    if (s < 3600) return `hace ${Math.round(s / 60)} min`;
    if (s < 86400) return `hace ${Math.round(s / 3600)} h`;
    return `hace ${Math.round(s / 86400)} d`;
}
function hxFecha(ts) {
    try { return new Date(ts).toLocaleString('es-ES', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }); }
    catch (e) { return new Date(ts).toISOString().slice(0, 16).replace('T', ' '); }
}
function hxPeso(chars) { return chars < 1024 ? `${chars} B` : chars < 1048576 ? `${Math.round(chars / 1024)} KB` : `${(chars / 1048576).toFixed(1)} MB`; }

/* ══════════════════════ PAPELERA ══════════════════════ */
function hxPodarPapelera(lista) {
    const limite = Date.now() - HX_PAPELERA_DIAS * 86400000;
    return lista.filter(e => e && e.borrada >= limite).slice(0, HX_PAPELERA_MAX);
}

/* Guarda la papelera. Si no cabe: 1.º quita imágenes (empezando por la más nueva),
   2.º descarta las entradas más antiguas, 3.º libera el historial de versiones. */
function hxGuardarPapelera(lista) {
    lista = hxPodarPapelera(lista);
    const cabe = () => JSON.stringify(lista).length <= HX_LIMITE_PAPELERA && hxEscribir(HX_PAPELERA, lista);
    if (cabe()) return lista;
    for (const e of lista) {
        if (e.sinImagenes || typeof e.datos !== 'string' || !e.datos.startsWith('raw:')) continue;
        try { e.datos = 'raw:' + JSON.stringify(hxSinImagenes(JSON.parse(e.datos.slice(4)))); e.sinImagenes = true; } catch (_) { continue; }
        if (cabe()) return lista;
    }
    while (lista.length > 1) { lista.pop(); if (cabe()) return lista; }
    try { localStorage.removeItem(HX_HIST); } catch (_) {}
    if (cabe()) return lista;
    lista.length = 0; hxEscribir(HX_PAPELERA, []);
    return lista;
}

/* Mueve una ficha abierta (objeto de `fichas`) a la papelera. No la quita de la pantalla. */
function hxMoverAPapelera(ficha, opciones) {
    opciones = opciones || {};
    const datos = leerFicha(ficha.panel);
    const entrada = {
        k: 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        nombre: String(datos.nombre || '').trim() || 'Sin nombre',
        r: hxResumen(datos),
        borrada: Date.now(),
        motivo: opciones.motivo || '',
        datos: 'raw:' + JSON.stringify(datos),
    };
    const lista = hxGuardarPapelera([entrada].concat(hxLeerPapelera()));
    const guardada = lista.some(e => e.k === entrada.k);
    if (!opciones.conservarHist) {
        const h = hxLeerHist();
        if (h[ficha.id]) { delete h[ficha.id]; hxEscribir(HX_HIST, h); }
        delete hxUltimaVez[ficha.id];
    }
    setTimeout(hxCompactarPapelera, 50);
    return guardada ? entrada : null;
}

/* Pasa a gz: las entradas guardadas en bruto (se hace aparte para no retrasar el borrado) */
let _hxCompactando = false;
async function hxCompactarPapelera() {
    if (_hxCompactando) return;
    _hxCompactando = true;
    try {
        if (typeof CompressionStream === 'undefined') return;
        let lista = hxLeerPapelera();
        let cambios = false;
        for (const e of lista) {
            if (typeof e.datos === 'string' && e.datos.startsWith('raw:') && e.datos.length > 2000) {
                e.datos = 'gz:' + await _comprimirABase64(e.datos.slice(4));
                cambios = true;
            }
        }
        if (cambios) hxEscribir(HX_PAPELERA, hxLeerPapelera().map(x => lista.find(y => y.k === x.k) || x));
    } catch (e) { /* se queda en bruto */ }
    finally { _hxCompactando = false; }
}

async function hxRestaurarDePapelera(k) {
    const lista = hxLeerPapelera();
    const e = lista.find(x => x.k === k);
    if (!e) { _mostrarToast('Esa ficha ya no está en la papelera.', 'error'); return null; }
    let datos;
    try { datos = await hxDesempaquetar(e.datos); }
    catch (err) { _mostrarToast('No se pudo leer la ficha de la papelera: ' + err.message, 'error'); return null; }
    const r = nuevaFicha(datos, { nuevoId: true });
    hxEscribir(HX_PAPELERA, lista.filter(x => x.k !== k));
    guardarTodo();
    _mostrarToast(`✔ Ficha «${e.nombre}» restaurada` + (e.sinImagenes ? ' (sin imágenes).' : '.'));
    return r;
}

function hxEliminarDePapelera(k) {
    hxEscribir(HX_PAPELERA, hxLeerPapelera().filter(x => x.k !== k));
}
function hxVaciarPapelera() { hxEscribir(HX_PAPELERA, []); }

/* Aviso «Ficha borrada · Deshacer» */
function hxAvisoBorrado(entrada) {
    if (!entrada) {
        _mostrarAviso('aviso-papelera', '⚠ La ficha se ha borrado y no cabía en la papelera (almacenamiento lleno).', [{ texto: 'Cerrar', accion: () => _quitarAviso('aviso-papelera') }]);
        return;
    }
    const el = _mostrarAviso('aviso-papelera', `Ficha «${entrada.nombre}» movida a la papelera.`, [
        { texto: '↩ Deshacer', accion: async () => { _quitarAviso('aviso-papelera'); await hxRestaurarDePapelera(entrada.k); } },
        { texto: 'Cerrar', accion: () => _quitarAviso('aviso-papelera') },
    ], '#2D3748');
    clearTimeout(hxAvisoBorrado._t);
    hxAvisoBorrado._t = setTimeout(() => { if (el && el.isConnected) _quitarAviso('aviso-papelera'); }, 15000);
}

/* ══════════════════════ VERSIONES ══════════════════════ */
const hxUltimaVez = {};      // id de ficha → marca de tiempo de su última versión
let _hxOcupado = false;

/* Reglas de retención. `lista` va de la más nueva a la más antigua. */
function hxPodar(lista) {
    const manuales = lista.filter(v => v.m);
    const autos = lista.filter(v => !v.m);
    const mantener = new Set(manuales.slice(0, HX_MANUALES));
    autos.slice(0, HX_RECIENTES).forEach(v => mantener.add(v));
    let ultima = autos[Math.min(HX_RECIENTES, autos.length) - 1], extra = 0;
    for (const v of autos.slice(HX_RECIENTES)) {
        if (extra >= HX_ANTIGUAS) break;
        if (ultima && ultima.t - v.t >= HX_SEPARACION_MS) { mantener.add(v); ultima = v; extra++; }
    }
    return lista.filter(v => mantener.has(v));
}

/* Guarda el historial respetando el tope de tamaño (quita primero lo más antiguo) */
function hxGuardarHist(hist) {
    const total = () => JSON.stringify(hist).length;
    const quitarMasAntigua = () => {
        let pe = null, pi = -1, pt = Infinity;
        for (const id in hist) hist[id].forEach((v, i) => { if (!v.m && v.t < pt) { pt = v.t; pe = id; pi = i; } });
        if (pe === null) for (const id in hist) hist[id].forEach((v, i) => { if (v.t < pt) { pt = v.t; pe = id; pi = i; } });
        if (pe === null) return false;
        hist[pe].splice(pi, 1); if (!hist[pe].length) delete hist[pe];
        return true;
    };
    while (total() > HX_LIMITE_HIST && quitarMasAntigua()) { /* recortar */ }
    while (!hxEscribir(HX_HIST, hist)) { if (!quitarMasAntigua()) { hxEscribir(HX_HIST, {}); return false; } }
    return true;
}

/* Llamado tras cada guardado correcto (script.js › guardarTodo) */
function hxTrasGuardar() {
    if (_hxOcupado) return;
    const ahora = Date.now();
    const sinDato = fichas.filter(f => hxUltimaVez[f.id] === undefined);
    if (sinDato.length) {
        const hist = hxLeerHist();
        sinDato.forEach(f => { hxUltimaVez[f.id] = (hist[f.id] && hist[f.id][0] && hist[f.id][0].t) || 0; });
    }
    if (fichas.some(f => ahora - hxUltimaVez[f.id] >= HX_INTERVALO_MS)) hxRevisarVersiones();
}

async function hxRevisarVersiones() {
    if (_hxOcupado) return;
    _hxOcupado = true;
    try {
        const ahora = Date.now();
        for (const f of fichas.slice()) {
            if (ahora - (hxUltimaVez[f.id] || 0) < HX_INTERVALO_MS) continue;
            await hxGuardarVersion(f, null);
        }
    } catch (e) { console.warn('Historial:', e); }
    finally { _hxOcupado = false; }
}

/* Guarda una versión de la ficha (etiqueta ≠ null → versión manual). Devuelve true si guardó. */
async function hxGuardarVersion(ficha, etiqueta) {
    const datos = hxSinImagenes(leerFicha(ficha.panel));
    const json = JSON.stringify(datos);
    const h = hxHash(json);
    const hist = hxLeerHist();
    const lista = hist[ficha.id] || [];
    hxUltimaVez[ficha.id] = Date.now();
    if (lista[0] && lista[0].h === h && etiqueta === null) return false;       // sin cambios desde la última
    if (lista[0] && lista[0].h === h && lista[0].m && etiqueta !== null) return false;
    const v = { t: Date.now(), h, d: await hxEmpaquetar(json), r: hxResumen(datos) };
    if (etiqueta !== null) v.m = String(etiqueta).slice(0, 60) || 'Versión guardada a mano';
    // la lectura anterior pudo quedar vieja durante la compresión
    const hist2 = hxLeerHist();
    hist2[ficha.id] = hxPodar([v].concat(hist2[ficha.id] || []));
    return hxGuardarHist(hist2);
}

/* Restaura una versión: crea la ficha restaurada en el mismo sitio y manda la actual a la papelera */
async function hxRestaurarVersion(idFicha, t) {
    const hist = hxLeerHist();
    const v = (hist[idFicha] || []).find(x => x.t === t);
    const actual = fichas.find(f => f.id === idFicha);
    if (!v || !actual) { _mostrarToast('No se encontró esa versión.', 'error'); return null; }
    let datos;
    try { datos = await hxDesempaquetar(v.d); }
    catch (e) { _mostrarToast('No se pudo leer esa versión: ' + e.message, 'error'); return null; }

    // Las versiones no llevan imágenes: se conservan las de la ficha actual
    const act = leerFicha(actual.panel);
    if (!datos.retratoCab && act.retratoCab) datos.retratoCab = act.retratoCab;
    if (act.roleplay) {
        datos.roleplay = datos.roleplay || {};
        if (!datos.roleplay.imagen && act.roleplay.imagen) datos.roleplay.imagen = act.roleplay.imagen;
        if ((!datos.roleplay.imagenes || !datos.roleplay.imagenes.length) && act.roleplay.imagenes) datos.roleplay.imagenes = act.roleplay.imagenes;
    }

    const idx = fichas.findIndex(f => f.id === idFicha);
    const antes = hxMoverAPapelera(actual, { motivo: `Antes de restaurar la versión de ${hxFecha(v.t)}`, conservarHist: true });
    const r = nuevaFicha(datos, { nuevoId: true });
    // misma posición que la ficha sustituida
    const tabNueva = document.querySelector(`.pestana[data-ficha-id="${r.id}"]`);
    const tabVieja = document.querySelector(`.pestana[data-ficha-id="${idFicha}"]`);
    if (tabNueva && tabVieja) tabVieja.parentNode.insertBefore(tabNueva, tabVieja);
    const entN = fichas.splice(fichas.findIndex(f => f.id === r.id), 1)[0];
    fichas.splice(idx, 0, entN);
    // el historial sigue con la ficha nueva
    const h2 = hxLeerHist();
    if (h2[idFicha]) { h2[r.id] = h2[idFicha]; delete h2[idFicha]; hxEscribir(HX_HIST, h2); }
    hxUltimaVez[r.id] = Date.now(); delete hxUltimaVez[idFicha];
    _quitarFicha(idFicha);
    activarFicha(r.id);
    guardarTodo();
    _mostrarToast(`✔ Versión del ${hxFecha(v.t)} restaurada. La anterior está en la papelera.`);
    return { ficha: r, antes };
}

async function hxBorrarVersion(idFicha, t) {
    const hist = hxLeerHist();
    if (!hist[idFicha]) return;
    hist[idFicha] = hist[idFicha].filter(v => v.t !== t);
    if (!hist[idFicha].length) delete hist[idFicha];
    hxEscribir(HX_HIST, hist);
}

/* Lo llama guardarTodo cuando el navegador se queda sin espacio: libera lo prescindible */
function hxLiberarEspacio() {
    let libero = false;
    try {
        if (localStorage.getItem(HX_HIST)) { localStorage.removeItem(HX_HIST); libero = true; for (const k in hxUltimaVez) delete hxUltimaVez[k]; }
        else if (localStorage.getItem(HX_PAPELERA)) { localStorage.removeItem(HX_PAPELERA); libero = true; }
    } catch (e) { /* nada */ }
    if (libero && typeof _mostrarToast === 'function') _mostrarToast('Almacenamiento lleno: se ha vaciado parte del historial para poder guardar tu ficha.', 'error');
    return libero;
}

/* ══════════════════════ VENTANA ══════════════════════ */
function abrirHistorial(pestana) {
    if (document.getElementById('modal-historial')) return;
    const previo = document.activeElement;
    const el = (tag, css, txt) => { const e = document.createElement(tag); if (css) e.style.cssText = css; if (txt != null) e.textContent = txt; return e; };
    const btn = (txt, css, fn, aria) => { const b = el('button', 'padding:5px 11px;background:#2d3748;border:1.5px solid #718096;border-radius:6px;color:#e2e8f0;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;' + (css || ''), txt); b.type = 'button'; if (aria) b.setAttribute('aria-label', aria); b.addEventListener('click', fn); return b; };

    const overlay = el('div', 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:12px;');
    overlay.id = 'modal-historial';
    const caja = el('div', 'background:#1a202c;border:2px solid #4a90d9;border-radius:12px;padding:16px 20px;width:min(560px,100%);max-height:90vh;display:flex;flex-direction:column;box-shadow:0 8px 32px rgba(0,0,0,0.6);color:#e2e8f0;font-family:inherit;font-size:13px;box-sizing:border-box;');
    caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'hx-titulo');
    overlay.appendChild(caja);

    const cab = el('div', 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;');
    const tit = el('div', 'font-size:14px;font-weight:800;color:#90cdf4;text-transform:uppercase;letter-spacing:0.5px;', '🕘 Historial'); tit.id = 'hx-titulo';
    const cerrarBtn = btn('✕', 'padding:2px 9px;', () => cerrar(), 'Cerrar');
    cab.append(tit, cerrarBtn);
    caja.appendChild(cab);

    const tabs = el('div', 'display:flex;gap:6px;margin-bottom:10px;');
    const tVer = btn('Versiones de esta ficha', '', () => mostrar('v'));
    const tPap = btn('Papelera', '', () => mostrar('p'));
    tabs.append(tVer, tPap);
    caja.appendChild(tabs);

    const cuerpo = el('div', 'overflow-y:auto;flex:1;min-height:120px;');
    caja.appendChild(cuerpo);
    const pie = el('div', 'margin-top:10px;padding-top:8px;border-top:1px solid #2d3748;font-size:11px;color:#a0aec0;');
    caja.appendChild(pie);

    let vista = pestana === 'p' ? 'p' : 'v';
    function fila(titulo, sub, botones, resaltar) {
        const f = el('div', 'display:flex;gap:10px;align-items:center;padding:8px 6px;border-top:1px solid #2d3748;' + (resaltar ? 'background:#22304a;' : ''));
        const txt = el('div', 'flex:1;min-width:0;');
        txt.appendChild(el('div', 'font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;', titulo));
        if (sub) txt.appendChild(el('div', 'font-size:12px;color:#a0aec0;', sub));
        f.appendChild(txt);
        botones.forEach(b => f.appendChild(b));
        return f;
    }
    function vacio(msg) { return el('div', 'color:#a0aec0;padding:18px 6px;text-align:center;', msg); }

    async function pintarVersiones() {
        cuerpo.replaceChildren();
        const ficha = fichas.find(f => f.id === fichaActual);
        if (!ficha) { cuerpo.appendChild(vacio('No hay ficha activa.')); return; }
        const nombre = (ficha.panel.querySelector('.input-nombre')?.value || '').trim() || 'esta ficha';
        cuerpo.appendChild(el('div', 'color:#cbd5e0;font-size:12px;margin-bottom:8px;', `Versiones de «${nombre}». Se guarda una cada 5 minutos de edición (sin imágenes). Al restaurar, la ficha actual va a la papelera.`));
        const guardar = el('div', 'display:flex;gap:6px;margin-bottom:8px;');
        const etiqueta = el('input', 'flex:1;padding:5px 8px;background:#2d3748;border:1.5px solid #718096;border-radius:6px;color:#e2e8f0;font-family:inherit;font-size:12px;');
        etiqueta.type = 'text'; etiqueta.placeholder = 'Nombre de la versión (opcional): «antes de subir a nivel 6»'; etiqueta.maxLength = 60;
        etiqueta.setAttribute('aria-label', 'Nombre de la versión');
        const bGuardar = btn('＋ Guardar versión ahora', '', async () => {
            bGuardar.disabled = true;
            const ok = await hxGuardarVersion(ficha, etiqueta.value.trim());
            _mostrarToast(ok ? '✔ Versión guardada.' : 'No hay cambios desde la última versión guardada a mano.');
            pintarVersiones();
        });
        guardar.append(etiqueta, bGuardar);
        cuerpo.appendChild(guardar);
        const lista = (hxLeerHist()[ficha.id] || []);
        if (!lista.length) { cuerpo.appendChild(vacio('Todavía no hay versiones. Aparecerán solas mientras editas.')); }
        lista.forEach((v, i) => {
            const bRest = btn('Restaurar', 'background:#2c5282;border-color:#4299e1;', async () => {
                if (bRest.dataset.seguro !== '1') { bRest.dataset.seguro = '1'; bRest.textContent = '¿Seguro?'; bRest.style.background = '#b7791f'; bRest.style.color = '#1a202c'; setTimeout(() => { if (bRest.isConnected) { bRest.dataset.seguro = ''; bRest.textContent = 'Restaurar'; bRest.style.background = '#2c5282'; bRest.style.color = '#e2e8f0'; } }, 4000); return; }
                const r = await hxRestaurarVersion(ficha.id, v.t);
                if (r) cerrar();
            });
            const bDel = btn('✕', 'padding:4px 8px;', async () => { await hxBorrarVersion(ficha.id, v.t); pintarVersiones(); }, 'Borrar esta versión');
            cuerpo.appendChild(fila(
                `${v.m ? '★ ' + v.m : hxFecha(v.t)}${v.m ? ' · ' + hxFecha(v.t) : ''}  ·  ${hxHace(v.t)}`,
                hxTextoResumen(v.r), [bRest, bDel], i === 0));
        });
        pie.textContent = `Espacio del historial: ${hxPeso(hxTamano(HX_HIST))} · tope ${hxPeso(HX_LIMITE_HIST)}`;
    }

    function pintarPapelera() {
        cuerpo.replaceChildren();
        const lista = hxPodarPapelera(hxLeerPapelera());
        cuerpo.appendChild(el('div', 'color:#cbd5e0;font-size:12px;margin-bottom:8px;', `Las fichas que borras se guardan aquí ${HX_PAPELERA_DIAS} días (máximo ${HX_PAPELERA_MAX}).`));
        if (!lista.length) cuerpo.appendChild(vacio('La papelera está vacía.'));
        lista.forEach(e => {
            const bRest = btn('Restaurar', 'background:#2c5282;border-color:#4299e1;', async () => { const r = await hxRestaurarDePapelera(e.k); if (r) cerrar(); });
            const bDel = btn('Eliminar', 'padding:4px 8px;', () => {
                if (bDel.dataset.seguro !== '1') { bDel.dataset.seguro = '1'; bDel.textContent = '¿Seguro?'; bDel.style.background = '#c53030'; return; }
                hxEliminarDePapelera(e.k); pintarPapelera(); actualizarTab();
            });
            const sub = [hxTextoResumen(e.r), `borrada ${hxHace(e.borrada)}`, e.motivo || '', e.sinImagenes ? 'sin imágenes' : ''].filter(Boolean).join(' · ');
            cuerpo.appendChild(fila(e.nombre, sub, [bRest, bDel]));
        });
        if (lista.length) {
            const vaciar = btn('Vaciar papelera', 'margin-top:10px;', () => {
                if (vaciar.dataset.seguro !== '1') { vaciar.dataset.seguro = '1'; vaciar.textContent = '¿Seguro? Se borrarán definitivamente'; vaciar.style.background = '#c53030'; return; }
                hxVaciarPapelera(); pintarPapelera(); actualizarTab();
            });
            cuerpo.appendChild(vaciar);
        }
        pie.textContent = `Espacio de la papelera: ${hxPeso(hxTamano(HX_PAPELERA))}`;
    }

    function actualizarTab() {
        const n = hxPodarPapelera(hxLeerPapelera()).length;
        tPap.textContent = n ? `Papelera (${n})` : 'Papelera';
        [[tVer, 'v'], [tPap, 'p']].forEach(([b, k]) => {
            b.style.background = vista === k ? '#2c5282' : '#2d3748';
            b.style.borderColor = vista === k ? '#4299e1' : '#718096';
            b.setAttribute('aria-pressed', vista === k ? 'true' : 'false');
        });
    }
    function mostrar(v) { vista = v; actualizarTab(); if (v === 'v') pintarVersiones(); else pintarPapelera(); }

    function cerrar() {
        document.removeEventListener('keydown', teclas, true);
        overlay.remove();
        if (previo && previo.focus) try { previo.focus(); } catch (e) {}
    }
    function teclas(e) {
        if (e.key === 'Escape') { e.stopPropagation(); cerrar(); }
        else if (e.key === 'Tab') {
            const foco = Array.from(caja.querySelectorAll('button:not([disabled]),input')).filter(x => x.offsetParent !== null);
            if (!foco.length) return;
            const i = foco.indexOf(document.activeElement);
            if (e.shiftKey && i <= 0) { e.preventDefault(); foco[foco.length - 1].focus(); }
            else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
        }
    }
    overlay.addEventListener('mousedown', e => { if (e.target === overlay) cerrar(); });
    document.addEventListener('keydown', teclas, true);
    document.body.appendChild(overlay);
    mostrar(vista);
    cerrarBtn.focus();
}
