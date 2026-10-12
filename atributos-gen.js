/* ═══════════════════════════════════════════════════════════════
   atributos-gen.js — Generador de atributos

   Ventana por pasos que se abre con el botón «🎲 Generar atributos» (caja
   Estadísticas) o desde el trasfondo personalizado:
     1. Método:   array estándar · compra de puntos (27/25/32) · tirada 4d6
                  (también repitiendo los 1 o con dados físicos) · manual.
     2. Valores:  asignar los valores a las seis características (con sugerencia
                  según la clase; ★ = característica principal 5.5e).
     3. Bonos:    aumentos del trasfondo (2024: +2/+1 o +1/+1/+1, máx. 20),
                  bonos extra manuales y cambios posteriores que se conservan.
     4. Aplicar:  vista previa (base + trasfondo + extra + posteriores) y escritura
                  en la ficha. Antes se guarda una versión en el Historial.

   Guarda la base en la ficha (panel.dataset.atrGen → ficha.atrGen) para poder
   reabrirlo sin sumar dos veces. Usa de script.js: actualizarAtributo, registrarLog
   (aquí se escribe a mano), guardarDebounced, _mostrarToast, leerMulticlases, fichas,
   hxGuardarVersion; de caracteristicas.js: _STAT_KEY, DND_TRASFONDOS.
═══════════════════════════════════════════════════════════════ */

const AG_ATRS   = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const AG_NOMBRE = { str: 'Fuerza', dex: 'Destreza', con: 'Constitución', int: 'Inteligencia', wis: 'Sabiduría', cha: 'Carisma' };
const AG_ABREV  = { str: 'FUE', dex: 'DES', con: 'CON', int: 'INT', wis: 'SAB', cha: 'CAR' };
const AG_DE_ABREV = { FUE: 'str', DES: 'dex', CON: 'con', INT: 'int', SAB: 'wis', CAR: 'cha' };
const AG_ARRAY  = [15, 14, 13, 12, 10, 8];
const AG_COSTE  = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };
const AG_PRESUPUESTOS = [27, 25, 32];
const AG_METODOS = {
    array:  ['Array estándar', '15, 14, 13, 12, 10 y 8: asignas cada valor a una característica, una sola vez.'],
    compra: ['Compra de puntos', 'Empiezas con 8 en todo y gastas un presupuesto de puntos (valores de 8 a 15).'],
    tirada: ['Tirada de dados', '4d6 quitando el dado más bajo, seis veces. Tiras aquí o escribes tus dados físicos.'],
    manual: ['Manual', 'Escribes tú los seis valores.'],
};

/* Característica(s) principal(es) de cada clase (PHB 2024) y orden de prioridad para sugerir un
   reparto. Es sólo una ayuda visual: la elección es siempre del jugador. */
const AG_PRINCIPALES = {
    'Artificer': ['int'], 'Bárbaro': ['str'], 'Bardo': ['cha'], 'Brujo': ['cha'], 'Clérigo': ['wis'],
    'Druida': ['wis'], 'Explorador': ['dex', 'wis'], 'Guerrero': ['str', 'dex'], 'Hechicero': ['cha'],
    'Mago': ['int'], 'Monje': ['dex', 'wis'], 'Paladín': ['str', 'cha'], 'Pícaro': ['dex'],
};
const AG_PRIORIDAD = {
    'Artificer':  ['int', 'con', 'dex', 'wis', 'cha', 'str'],
    'Bárbaro':    ['str', 'con', 'dex', 'wis', 'cha', 'int'],
    'Bardo':      ['cha', 'dex', 'con', 'wis', 'int', 'str'],
    'Brujo':      ['cha', 'con', 'dex', 'wis', 'int', 'str'],
    'Clérigo':    ['wis', 'con', 'dex', 'cha', 'str', 'int'],
    'Druida':     ['wis', 'con', 'dex', 'int', 'cha', 'str'],
    'Explorador': ['dex', 'wis', 'con', 'str', 'int', 'cha'],
    'Guerrero':   ['str', 'con', 'dex', 'wis', 'int', 'cha'],
    'Hechicero':  ['cha', 'con', 'dex', 'wis', 'int', 'str'],
    'Mago':       ['int', 'con', 'dex', 'wis', 'cha', 'str'],
    'Monje':      ['dex', 'wis', 'con', 'str', 'cha', 'int'],
    'Paladín':    ['str', 'cha', 'con', 'wis', 'dex', 'int'],
    'Pícaro':     ['dex', 'con', 'wis', 'int', 'cha', 'str'],
};

/* ══════════════ Funciones puras (sin DOM) ══════════════ */
const _agCeros = () => ({ str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 });
const agMod = v => Math.floor((v - 10) / 2);
const agFmt = n => (n >= 0 ? '+' : '−') + Math.abs(n);

/* d6 sin sesgo (rechaza los valores que sobran de la división) */
function agD6() {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        const a = new Uint32Array(1);
        do { crypto.getRandomValues(a); } while (a[0] >= 4294967292);   // 4294967292 = 6 × 715827882
        return (a[0] % 6) + 1;
    }
    return Math.floor(Math.random() * 6) + 1;
}

/* 4d6 quitando el menor. `unos`: cada 1 se repite una vez (se queda con la segunda tirada). */
function agTirar4d6(unos) {
    const dados = [], repetidos = [];
    for (let i = 0; i < 4; i++) {
        let v = agD6(), rep = 0;
        if (unos && v === 1) { rep = 1; v = agD6(); }
        dados.push(v); repetidos.push(rep);
    }
    const quitado = dados.indexOf(Math.min(...dados));
    return { dados, repetidos, quitado, total: dados.reduce((a, b) => a + b, 0) - dados[quitado] };
}
const agTirarConjunto = unos => Array.from({ length: 6 }, () => agTirar4d6(unos));

/* Puntos que cuesta una puntuación de compra de puntos (8–15) */
const agCoste = v => (v in AG_COSTE ? AG_COSTE[v] : NaN);
function agPuntosGastados(compra) { return AG_ATRS.reduce((s, a) => s + (agCoste(compra[a]) || 0), 0); }

/* «INT, SAB o CAR» → ['int','wis','cha'] */
function agParseAsi(texto) {
    return ((String(texto || '').match(/\b(FUE|DES|CON|INT|SAB|CAR)\b/g)) || []).map(x => AG_DE_ABREV[x]);
}

/* Valores base según el método y las asignaciones (null si falta alguno) */
function agBase(E) {
    const b = {};
    for (const a of AG_ATRS) {
        let v;
        if (E.metodo === 'array' || E.metodo === 'tirada') {
            const i = E.asig[a];
            v = (i === null || i === undefined) ? null : E.pool[i];
        } else if (E.metodo === 'compra') v = E.compra[a];
        else v = E.manual[a];
        if (v === null || v === undefined || isNaN(v)) return null;
        b[a] = v;
    }
    return b;
}

/* ¿Son válidos los valores del paso 2? → { ok, msg } */
function agValidarValores(E) {
    if (E.metodo === 'compra') {
        for (const a of AG_ATRS) if (!(E.compra[a] >= 8 && E.compra[a] <= 15)) return { ok: false, msg: 'Los valores de compra de puntos van de 8 a 15.' };
        const g = agPuntosGastados(E.compra);
        if (g > E.presupuesto) return { ok: false, msg: `Te pasas ${g - E.presupuesto} punto(s) del presupuesto.` };
        return { ok: true, msg: '' };
    }
    if (E.metodo === 'manual') {
        for (const a of AG_ATRS) if (!(E.manual[a] >= 1 && E.manual[a] <= 30)) return { ok: false, msg: 'Los valores van de 1 a 30.' };
        return { ok: true, msg: '' };
    }
    if (!agBase(E)) {
        return { ok: false, msg: E.metodo === 'tirada' && E.pool.length < 6 ? 'Tira los dados (o escribe tus seis resultados) y asígnalos.' : 'Asigna un valor a cada característica.' };
    }
    return { ok: true, msg: '' };
}

/* Características entre las que se pueden repartir los aumentos del trasfondo */
const agPermitidas = E => (E.tfInfo && E.tfInfo.permitidas && E.tfInfo.permitidas.length ? E.tfInfo.permitidas : AG_ATRS);

/* ¿Es válida la elección de bonos de trasfondo? */
function agValidarTf(E) {
    const t = E.tf, perm = agPermitidas(E);
    if (t.modo === 'no') return { ok: true, msg: '' };
    if (t.modo === '21') {
        if (!t.mas2 || !t.mas1) return { ok: false, msg: 'Elige la característica del +2 y la del +1.' };
        if (t.mas2 === t.mas1) return { ok: false, msg: 'El +2 y el +1 van a características distintas.' };
        if (!perm.includes(t.mas2) || !perm.includes(t.mas1)) return { ok: false, msg: 'Ese trasfondo sólo permite: ' + perm.map(a => AG_ABREV[a]).join(', ') + '.' };
        return { ok: true, msg: '' };
    }
    const tres = [...new Set(t.tres)];
    if (tres.length !== 3) return { ok: false, msg: 'Elige tres características distintas para el +1.' };
    if (tres.some(a => !perm.includes(a))) return { ok: false, msg: 'Ese trasfondo sólo permite: ' + perm.map(a => AG_ABREV[a]).join(', ') + '.' };
    return { ok: true, msg: '' };
}

/* Bonos de trasfondo ya aplicados (con el tope de 20 sobre la base) */
function agBonoTf(E, base) {
    const r = _agCeros(), t = E.tf;
    const dar = (a, n) => { if (a && base[a] !== undefined) r[a] += Math.min(n, Math.max(0, 20 - base[a])); };
    if (t.modo === '21') { dar(t.mas2, 2); if (t.mas1 !== t.mas2) dar(t.mas1, 1); }
    else if (t.modo === '111') [...new Set(t.tres)].forEach(a => dar(a, 1));
    return r;
}

/* Filas del resumen: base + trasfondo + extra + cambios posteriores (1–30) */
function agCalcular(E) {
    const base = agBase(E);
    if (!base) return null;
    const tf = agBonoTf(E, base);
    return AG_ATRS.map(a => {
        const extra = E.extra[a] || 0, delta = E.conservar ? (E.delta[a] || 0) : 0;
        const crudo = base[a] + tf[a] + extra + delta;
        const total = Math.max(1, Math.min(30, crudo));
        return { abil: a, base: base[a], tf: tf[a], extra, delta, total, mod: agMod(total), actual: E.actual[a], recortado: crudo !== total };
    });
}

/* Orden de las características según la clase (principales primero) */
const agOrdenClase = clase => AG_PRIORIDAD[clase] || null;

/* Sugerir un reparto de los valores del conjunto (array o tirada) → asig {abil: índice} */
function agSugerirAsignacion(pool, clase) {
    const orden = agOrdenClase(clase);
    if (!orden) return null;
    const idx = pool.map((v, i) => i).sort((x, y) => pool[y] - pool[x] || x - y);
    const asig = {};
    orden.forEach((a, k) => { asig[a] = idx[k] !== undefined ? idx[k] : null; });
    return asig;
}

/* Sugerir un reparto de compra de puntos: primero los valores del array estándar por prioridad,
   luego lo que sobre se invierte subiendo de uno en uno por prioridad. */
function agSugerirCompra(presupuesto, clase) {
    const orden = agOrdenClase(clase);
    if (!orden) return null;
    const v = {}; AG_ATRS.forEach(a => { v[a] = 8; });
    let resto = presupuesto;
    orden.forEach((a, k) => {
        for (let t = AG_ARRAY[k]; t > 8; t--) {
            const c = agCoste(t);
            if (c <= resto) { v[a] = t; resto -= c; break; }
        }
    });
    let sube = true;
    while (sube) {
        sube = false;
        for (const a of orden) {
            if (v[a] >= 15) continue;
            const c = agCoste(v[a] + 1) - agCoste(v[a]);
            if (c <= resto) { v[a]++; resto -= c; sube = true; }
        }
    }
    return v;
}

/* ══════════════ Estado inicial según la ficha ══════════════ */
function agLeerActuales(panel) {
    const r = {};
    AG_ATRS.forEach(a => { r[a] = parseInt(panel.querySelector(`.stat-score[data-stat="${a}"]`)?.value) || 10; });
    return r;
}

/* Trasfondo de la ficha: lista (con sus características permitidas), personalizado o ninguno */
function agInfoTrasfondo(panel) {
    const clave = panel.querySelector('.sel-trasfondo')?.value || '';
    if (clave === '__personalizado__') {
        const w = panel.querySelector('.trasfondo-personalizado');
        let prev = {};
        try { prev = JSON.parse(w?.dataset.prevBonos || '{}') || {}; } catch (e) { prev = {}; }
        const k = n => (typeof _STAT_KEY !== 'undefined' ? _STAT_KEY[n] : '') || '';
        return {
            tipo: 'personalizado', clave, nombre: 'Personalizado', permitidas: AG_ATRS.slice(),
            mas2: k(w?.querySelector('.tf-stat2-sel')?.value), mas1: k(w?.querySelector('.tf-stat1-sel')?.value),
            horneado: !!(prev.stat2 || prev.stat1), hornMas2: k(prev.stat2), hornMas1: k(prev.stat1),
        };
    }
    const t = clave && typeof DND_TRASFONDOS !== 'undefined' ? DND_TRASFONDOS[clave] : null;
    if (!t) return { tipo: 'ninguno', clave: '', nombre: '', permitidas: [] };
    const perm = agParseAsi(t.asi);
    return { tipo: 'lista', clave, nombre: clave, permitidas: perm, sinAsi: !perm.length };
}

function agEstadoInicial(panel) {
    const actual = agLeerActuales(panel);
    let guardado = null;
    try { guardado = panel.dataset.atrGen ? JSON.parse(panel.dataset.atrGen) : null; } catch (e) { guardado = null; }
    if (guardado && (typeof guardado !== 'object' || !guardado.base)) guardado = null;
    const tfInfo = agInfoTrasfondo(panel);
    const mcs = (typeof leerMulticlases === 'function' ? leerMulticlases(panel) : []).filter(m => m.clase);
    const E = {
        paso: 1, metodo: 'manual', presupuesto: 27, unos: false, fisico: false,
        pool: [], asig: {}, compra: {}, manual: Object.assign({}, actual),
        historial: [], tirada: null,
        tf: { modo: 'no', mas2: '', mas1: '', tres: [] },
        extra: _agCeros(), delta: _agCeros(), conservar: true,
        actual, tfInfo, clase: mcs[0] ? mcs[0].clase : '', origen: 'nuevo',
    };
    AG_ATRS.forEach(a => { E.asig[a] = null; E.compra[a] = 8; });
    const sinCambios = AG_ATRS.every(a => actual[a] === 10);
    const k = n => (AG_ATRS.includes(n) ? n : '');

    if (guardado) {
        E.origen = 'guardado';
        E.metodo = AG_METODOS[guardado.metodo] ? guardado.metodo : 'manual';
        E.presupuesto = AG_PRESUPUESTOS.includes(guardado.presupuesto) ? guardado.presupuesto : 27;
        E.unos = !!guardado.unos;
        const b = {}; AG_ATRS.forEach(a => { b[a] = parseInt(guardado.base[a]); });
        if (AG_ATRS.some(a => isNaN(b[a]))) { E.metodo = 'manual'; AG_ATRS.forEach(a => { b[a] = actual[a]; }); }
        if (E.metodo === 'array' || E.metodo === 'tirada') {
            E.pool = AG_ATRS.map(a => b[a]);
            AG_ATRS.forEach((a, i) => { E.asig[a] = i; });
        } else if (E.metodo === 'compra') {
            const ok = AG_ATRS.every(a => agCoste(b[a]) >= 0) && agPuntosGastados(b) <= E.presupuesto;
            if (ok) AG_ATRS.forEach(a => { E.compra[a] = b[a]; }); else { E.metodo = 'manual'; }
        }
        if (E.metodo === 'manual') AG_ATRS.forEach(a => { E.manual[a] = b[a]; });
        const g = guardado.tf || {};
        E.tf = { modo: ['no', '21', '111'].includes(g.modo) ? g.modo : 'no', mas2: k(g.mas2), mas1: k(g.mas1), tres: (g.tres || []).filter(x => AG_ATRS.includes(x)) };
        if (tfInfo.tipo === 'personalizado' && E.tf.modo === '21' && (tfInfo.mas2 || tfInfo.mas1)) { E.tf.mas2 = tfInfo.mas2 || E.tf.mas2; E.tf.mas1 = tfInfo.mas1 || E.tf.mas1; }
        AG_ATRS.forEach(a => { E.extra[a] = parseInt((guardado.extra || {})[a]) || 0; });
        if (guardado.aplicado) AG_ATRS.forEach(a => { E.delta[a] = actual[a] - (parseInt(guardado.aplicado[a]) || actual[a]); });
        E.historial = Array.isArray(guardado.historial) ? guardado.historial.slice(0, 8) : [];
    } else if (tfInfo.tipo === 'personalizado' && tfInfo.horneado) {
        // Ficha de una versión anterior: los +2/+1 del trasfondo personalizado ya estaban sumados al número
        E.origen = 'actual'; E.metodo = 'manual';
        const quitar = _agCeros();
        if (tfInfo.hornMas2) quitar[tfInfo.hornMas2] += 2;
        if (tfInfo.hornMas1) quitar[tfInfo.hornMas1] += 1;
        AG_ATRS.forEach(a => { E.manual[a] = Math.max(1, actual[a] - quitar[a]); });
        E.tf = { modo: '21', mas2: tfInfo.hornMas2, mas1: tfInfo.hornMas1, tres: [] };
    } else if (sinCambios) {
        E.origen = 'nuevo'; E.metodo = 'array';
        E.pool = AG_ARRAY.slice();
        // Ficha nueva: con trasfondo (de la lista con aumentos, o personalizado) se propone el reparto +2/+1
        if (tfInfo.tipo === 'personalizado' || (tfInfo.tipo === 'lista' && !tfInfo.sinAsi)) {
            E.tf = { modo: '21', mas2: tfInfo.mas2 || '', mas1: tfInfo.mas1 || '', tres: [] };
        }
    } else {
        // Valores ya tocados y sin base guardada: se parte de ellos como «Manual» (los aumentos del
        // trasfondo se dan por incluidos, para no sumarlos dos veces)
        E.origen = 'actual'; E.metodo = 'manual';
    }
    if (E.tf.modo === '111' && E.tf.tres.length === 0) E.tf.tres = (tfInfo.permitidas || []).slice(0, 3);
    return E;
}

/* Texto del log de una tirada */
function agTextoTirada(conj) {
    return conj.map(r => {
        const d = r.dados.map((v, i) => (i === r.quitado ? '(' + v + ')' : String(v)) + (r.repetidos[i] ? '↻' : '')).join(' ');
        return `${r.total} [${d}]`;
    }).join(' · ');
}
function agLog(titulo, grande, detalle) {
    const log = document.getElementById('log-lista');
    if (!log) return;
    const div = document.createElement('div');
    div.className = 'log-entrada';
    const t = document.createElement('strong'); t.textContent = titulo;
    const r = document.createElement('div'); r.className = 'res';
    const big = document.createElement('span'); big.textContent = grande;
    const small = document.createElement('small'); small.textContent = detalle;
    r.append(big, small);
    div.append(t, r);
    log.prepend(div);
}

/* ══════════════ Aplicar a la ficha ══════════════ */
async function agAplicar(panel, E) {
    const filas = agCalcular(E);
    if (!filas) return false;
    // Seguridad: versión en el Historial antes de tocar nada (si el Historial está disponible)
    try {
        const f = (typeof fichas !== 'undefined') ? fichas.find(x => x.panel === panel) : null;
        if (f && typeof hxGuardarVersion === 'function') await hxGuardarVersion(f, 'Antes del generador de atributos');
    } catch (e) { console.warn('Generador de atributos: no se pudo guardar la versión previa', e); }

    filas.forEach(r => {
        const inp = panel.querySelector(`.stat-score[data-stat="${r.abil}"]`);
        if (!inp) return;
        inp.value = r.total;
        if (typeof actualizarAtributo === 'function') actualizarAtributo(inp);
    });

    const base = agBase(E);
    // «aplicado» = lo que produce el generador por sí solo (sin los cambios posteriores conservados),
    // para que al reabrir la diferencia con el valor actual siga incluyendo esas mejoras
    const aplicado = {}; filas.forEach(r => { aplicado[r.abil] = Math.max(1, Math.min(30, r.base + r.tf + r.extra)); });
    const datos = {
        v: 1, metodo: E.metodo, presupuesto: E.presupuesto, unos: !!E.unos, base,
        tf: { clave: E.tfInfo.clave || '', modo: E.tf.modo, mas2: E.tf.mas2 || '', mas1: E.tf.mas1 || '', tres: E.tf.tres.slice() },
        extra: Object.assign({}, E.extra), aplicado, historial: E.historial.slice(0, 8), t: Date.now(),
    };
    panel.dataset.atrGen = JSON.stringify(datos);

    // Trasfondo personalizado: las elecciones quedan anotadas en sus desplegables y los aumentos
    // ya no están «dentro» del número (el generador es quien los suma)
    const w = panel.querySelector('.trasfondo-personalizado');
    if (w && E.tfInfo.tipo === 'personalizado') {
        let prev = {}; try { prev = JSON.parse(w.dataset.prevBonos || '{}') || {}; } catch (e) { prev = {}; }
        prev.stat2 = ''; prev.stat1 = '';
        w.dataset.prevBonos = JSON.stringify(prev);
        const nom = a => AG_NOMBRE[a] || '';
        const s2 = w.querySelector('.tf-stat2-sel'), s1 = w.querySelector('.tf-stat1-sel');
        if (E.tf.modo === '21') { if (s2) s2.value = nom(E.tf.mas2); if (s1) s1.value = nom(E.tf.mas1); }
        else if (E.tf.modo === 'no') { if (s2) s2.value = ''; if (s1) s1.value = ''; }
        if (typeof _actualizarAvisoTfGen === 'function') _actualizarAvisoTfGen(panel);
    }

    const resumen = filas.map(r => `${AG_ABREV[r.abil]} ${r.total}`).join(' · ');
    agLog('Atributos aplicados', '✔', `${AG_METODOS[E.metodo][0]} → ${resumen}`);
    if (typeof guardarDebounced === 'function') guardarDebounced();
    if (typeof _mostrarToast === 'function') _mostrarToast('✔ Atributos aplicados: ' + resumen);
    return true;
}

/* ══════════════ Ventana ══════════════ */
function abrirGeneradorAtributos(origen, pasoInicial) {
    const panel = origen && origen.closest ? origen.closest('.ficha-panel') : origen;
    if (!panel || document.getElementById('modal-gen-atributos')) return;
    const E = agEstadoInicial(panel);
    const previo = document.activeElement;
    const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
    const sinAnimar = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

    const overlay = el('div', 'ag-overlay'); overlay.id = 'modal-gen-atributos';
    const caja = el('div', 'ag-caja');
    caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'ag-titulo');
    overlay.appendChild(caja);

    const nombre = (panel.querySelector('.input-nombre')?.value || '').trim();
    const cab = el('div', 'ag-cab');
    const titulo = el('div', 'ag-titulo', '🎲 Generador de atributos'); titulo.id = 'ag-titulo';
    cab.append(titulo, el('div', 'ag-sub', [nombre, E.clase].filter(Boolean).join(' · ') || 'Personaje sin nombre'));
    caja.appendChild(cab);

    const NOMBRES_PASO = ['Método', 'Valores', 'Bonos', 'Aplicar'];
    const lista = el('ol', 'ag-pasos');
    const itemsPaso = NOMBRES_PASO.map((n, i) => {
        const li = el('li', 'ag-paso'); const b = el('button', 'ag-paso-btn', `${i + 1} · ${n}`); b.type = 'button';
        b.addEventListener('click', () => { if (i + 1 < E.paso || puedeIr(i + 1)) irPaso(i + 1); });
        li.appendChild(b); lista.appendChild(li); return { li, b };
    });
    caja.appendChild(lista);

    const cuerpo = el('div', 'ag-cuerpo');
    caja.appendChild(cuerpo);
    const aviso = el('div', 'ag-aviso'); aviso.setAttribute('aria-live', 'polite');
    caja.appendChild(aviso);
    const pie = el('div', 'ag-pie');
    const bCancelar = el('button', 'ag-btn ag-btn-sec', 'Cancelar'); bCancelar.type = 'button';
    const bAtras = el('button', 'ag-btn ag-btn-sec', '← Atrás'); bAtras.type = 'button';
    const bSig = el('button', 'ag-btn ag-btn-pri', 'Siguiente →'); bSig.type = 'button';
    pie.append(bCancelar, bAtras, bSig);
    caja.appendChild(pie);

    let refrescadores = [];     // funciones que ponen al día la parte dinámica del paso actual
    let animando = null;

    function cerrar() {
        if (animando) clearInterval(animando);
        document.removeEventListener('keydown', teclas, true);
        overlay.remove();
        if (previo && previo.focus) try { previo.focus(); } catch (e) {}
    }
    function teclas(e) {
        if (e.key === 'Escape') { e.stopPropagation(); cerrar(); }
        else if (e.key === 'Tab') {
            const foco = Array.from(caja.querySelectorAll('button:not([disabled]),input:not([type="hidden"]):not([disabled]),select:not([disabled])')).filter(x => x.offsetParent !== null);
            if (!foco.length) return;
            const i = foco.indexOf(document.activeElement);
            if (e.shiftKey && i <= 0) { e.preventDefault(); foco[foco.length - 1].focus(); }
            else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
        }
    }

    /* ── ¿Se puede avanzar hasta el paso n? ── */
    function validoPaso(n) {
        if (n === 1) return { ok: true, msg: '' };
        if (n === 2) return agValidarValores(E);
        if (n === 3) return agValidarTf(E);
        return { ok: true, msg: '' };
    }
    function puedeIr(n) { for (let i = 1; i < n; i++) if (!validoPaso(i).ok) return false; return true; }

    function irPaso(n) {
        E.paso = Math.max(1, Math.min(4, n));
        if (animando) { clearInterval(animando); animando = null; }
        cuerpo.textContent = ''; refrescadores = [];
        [renderMetodo, renderValores, renderBonos, renderResumen][E.paso - 1]();
        actualizar();
        const primero = cuerpo.querySelector('input:not([disabled]),select:not([disabled]),button:not([disabled])');
        if (primero && n !== 1) { try { primero.focus({ preventScroll: true }); } catch (e) {} }
    }

    function actualizar() {
        refrescadores.forEach(f => f());
        itemsPaso.forEach((it, i) => {
            it.li.classList.toggle('activo', i + 1 === E.paso);
            it.li.classList.toggle('hecho', i + 1 < E.paso);
            it.b.disabled = !(i + 1 <= E.paso || puedeIr(i + 1));
            if (i + 1 === E.paso) it.b.setAttribute('aria-current', 'step'); else it.b.removeAttribute('aria-current');
        });
        bAtras.style.visibility = E.paso === 1 ? 'hidden' : 'visible';
        const v = validoPaso(E.paso);
        bSig.textContent = E.paso === 4 ? '✔ Aplicar a la ficha' : 'Siguiente →';
        if (E.paso === 4) { const f = agCalcular(E); bSig.disabled = !f || !validoPaso(2).ok || !validoPaso(3).ok; }
        else bSig.disabled = !v.ok;
        aviso.textContent = E.paso === 4 ? '' : (v.ok ? '' : v.msg);
        aviso.style.display = aviso.textContent ? '' : 'none';
    }

    bCancelar.addEventListener('click', cerrar);
    bAtras.addEventListener('click', () => irPaso(E.paso - 1));
    bSig.addEventListener('click', async () => {
        if (E.paso < 4) { irPaso(E.paso + 1); return; }
        bSig.disabled = true;
        const ok = await agAplicar(panel, E);
        if (ok) cerrar(); else actualizar();
    });
    overlay.addEventListener('mousedown', e => { if (e.target === overlay) cerrar(); });

    /* ── Helpers de interfaz ── */
    const modTxt = v => `${agFmt(agMod(v))}`;
    const etiquetaAtr = a => {
        const w = el('span', 'ag-atr');
        w.appendChild(el('span', 'ag-atr-nombre', AG_NOMBRE[a]));
        if ((AG_PRINCIPALES[E.clase] || []).includes(a)) { const s = el('span', 'ag-estrella', '★'); s.title = `Característica principal de ${E.clase}`; w.appendChild(s); }
        return w;
    };
    const tablaResumen = (cols) => {
        const t = el('table', 'ag-tabla');
        const cab = el('tr');
        cols.forEach(c => cab.appendChild(el('th', c.cls || '', c.t)));
        const th = el('thead'); th.appendChild(cab); t.appendChild(th);
        const tb = el('tbody'); t.appendChild(tb);
        return { t, tb };
    };

    /* ═════ PASO 1: método ═════ */
    function renderMetodo() {
        cuerpo.appendChild(el('p', 'ag-ayuda', 'Elige cómo quieres generar las características. En el último paso verás el resultado antes de aplicarlo.'));
        if (E.origen === 'guardado') cuerpo.appendChild(el('p', 'ag-nota', 'Se ha reabierto con la base que guardó el generador la última vez. Los cambios hechos a mano desde entonces (mejoras de nivel, objetos…) se conservan.'));
        else if (E.origen === 'actual') cuerpo.appendChild(el('p', 'ag-nota', 'Tus valores actuales se han cargado como base («Manual»). Si eliges otro método, se sustituirán al aplicar.'));
        const grid = el('div', 'ag-metodos');
        grid.setAttribute('role', 'radiogroup'); grid.setAttribute('aria-label', 'Método');
        Object.keys(AG_METODOS).forEach(m => {
            const lab = el('label', 'ag-metodo');
            const r = document.createElement('input'); r.type = 'radio'; r.name = 'ag-metodo'; r.value = m; r.checked = E.metodo === m;
            r.addEventListener('change', () => { cambiarMetodo(m); });
            const tx = el('span', 'ag-metodo-tx');
            tx.append(el('strong', '', AG_METODOS[m][0]), el('span', '', AG_METODOS[m][1]));
            lab.append(r, tx);
            grid.appendChild(lab);
        });
        cuerpo.appendChild(grid);
        const opciones = el('div', 'ag-opciones');
        cuerpo.appendChild(opciones);
        const pintarOpciones = () => {
            opciones.textContent = '';
            if (E.metodo === 'compra') {
                const f = el('label', 'ag-fila-opc'); f.appendChild(el('span', '', 'Presupuesto de puntos'));
                const s = document.createElement('select'); s.className = 'ag-select';
                AG_PRESUPUESTOS.forEach(p => { const o = document.createElement('option'); o.value = p; o.textContent = p + (p === 27 ? ' (estándar)' : p === 25 ? ' (exigente)' : ' (generoso)'); s.appendChild(o); });
                s.value = E.presupuesto;
                s.addEventListener('change', () => { E.presupuesto = parseInt(s.value); actualizar(); });
                f.appendChild(s); opciones.appendChild(f);
            } else if (E.metodo === 'tirada') {
                const f1 = el('label', 'ag-fila-opc ag-chk');
                const c1 = document.createElement('input'); c1.type = 'checkbox'; c1.checked = E.unos;
                c1.addEventListener('change', () => { E.unos = c1.checked; });
                f1.append(c1, el('span', '', 'Repetir una vez cada 1 (variante «4d6 repitiendo 1s»)'));
                const f2 = el('label', 'ag-fila-opc ag-chk');
                const c2 = document.createElement('input'); c2.type = 'checkbox'; c2.checked = E.fisico;
                c2.addEventListener('change', () => { E.fisico = c2.checked; });
                f2.append(c2, el('span', '', 'Tiro yo los dados (escribiré los resultados)'));
                opciones.append(f1, f2);
            }
        };
        const cambiarMetodo = m => {
            E.metodo = m;
            E.asig = {}; AG_ATRS.forEach(a => { E.asig[a] = null; });
            if (m === 'array') E.pool = AG_ARRAY.slice();
            else if (m === 'tirada') E.pool = E.tirada ? E.tirada.map(r => r.total) : [];
            else E.pool = [];
            if (m === 'compra') AG_ATRS.forEach(a => { E.compra[a] = 8; });
            pintarOpciones(); actualizar();
        };
        pintarOpciones();
    }

    /* ═════ PASO 2: valores ═════ */
    function renderValores() {
        const m = E.metodo;
        const cab = el('div', 'ag-valores-cab');
        cuerpo.appendChild(cab);

        /* Barra de acciones */
        const acciones = el('div', 'ag-acciones');
        const btn = (txt, fn, tit) => { const b = el('button', 'ag-btn ag-btn-mini', txt); b.type = 'button'; if (tit) b.title = tit; b.addEventListener('click', fn); return b; };

        /* — Tirada: dados — */
        let zonaDados = null;
        if (m === 'tirada') {
            zonaDados = el('div', 'ag-dados-zona');
            cuerpo.appendChild(zonaDados);
        }
        const pintarDados = (conj, rodando) => {
            zonaDados.textContent = '';
            if (E.fisico) {
                const caja = el('div', 'ag-fisicos');
                caja.appendChild(el('div', 'ag-ayuda', 'Escribe el resultado de cada tirada (3–18, ya quitado el dado más bajo).'));
                const fila = el('div', 'ag-fisicos-fila');
                const inputs = [];
                for (let i = 0; i < 6; i++) {
                    const inp = document.createElement('input'); inp.type = 'number'; inp.min = 3; inp.max = 18; inp.className = 'ag-num';
                    inp.setAttribute('aria-label', `Resultado ${i + 1}`);
                    if (E.pool[i] !== undefined) inp.value = E.pool[i];
                    inputs.push(inp); fila.appendChild(inp);
                }
                const usar = btn('Usar estos valores', () => {
                    const vals = inputs.map(i => parseInt(i.value));
                    if (vals.some(v => !(v >= 3 && v <= 18))) { aviso.textContent = 'Cada resultado debe estar entre 3 y 18.'; aviso.style.display = ''; return; }
                    E.pool = vals; E.tirada = vals.map(v => ({ dados: [], repetidos: [], quitado: -1, total: v, fisico: true }));
                    AG_ATRS.forEach(a => { E.asig[a] = null; });
                    E.historial.unshift({ t: Date.now(), v: vals.slice(), f: 1 }); E.historial = E.historial.slice(0, 8);
                    agLog('Tirada de atributos (dados físicos)', String(vals.reduce((a, b) => a + b, 0)), vals.join(' · '));
                    pintarHistorial(); refrescarFilas(); actualizar();
                });
                caja.append(fila, usar);
                zonaDados.appendChild(caja);
                return;
            }
            const top = el('div', 'ag-dados-top');
            const bT = btn(E.pool.length ? '🎲 Tirar de nuevo' : '🎲 Tirar los dados', () => tirar(), 'Tira 4d6 seis veces y quita el dado más bajo de cada una');
            bT.classList.add('ag-btn-pri');
            top.appendChild(bT);
            if (E.unos) top.appendChild(el('span', 'ag-nota-peq', 'Repitiendo una vez cada 1 (↻)'));
            zonaDados.appendChild(top);
            const cards = el('div', 'ag-cartas');
            (conj || E.pool.map(v => ({ dados: [], repetidos: [], quitado: -1, total: v }))).forEach(r => {
                const c = el('div', 'ag-carta' + (rodando ? ' rodando' : ''));
                const dd = el('div', 'ag-carta-dados');
                r.dados.forEach((v, i) => {
                    const d = el('span', 'ag-dado' + (i === r.quitado && !rodando ? ' quitado' : ''), String(v));
                    if (r.repetidos[i]) { d.classList.add('repetido'); d.title = 'Salió 1 y se repitió'; }
                    dd.appendChild(d);
                });
                c.append(dd, el('div', 'ag-carta-total', rodando ? '…' : String(r.total)));
                cards.appendChild(c);
            });
            zonaDados.appendChild(cards);
        };
        const tirar = () => {
            const final = agTirarConjunto(E.unos);
            const fin = () => {
                E.tirada = final; E.pool = final.map(r => r.total);
                AG_ATRS.forEach(a => { E.asig[a] = null; });
                E.historial.unshift({ t: Date.now(), v: E.pool.slice(), u: E.unos ? 1 : 0, d: final.map(r => r.dados), q: final.map(r => r.quitado), r: final.map(r => r.repetidos) });
                E.historial = E.historial.slice(0, 8);
                agLog('Tirada de atributos (4d6' + (E.unos ? ', repitiendo 1s' : '') + ')', String(E.pool.reduce((a, b) => a + b, 0)), agTextoTirada(final));
                pintarDados(final, false); pintarHistorial(); refrescarFilas(); actualizar();
            };
            if (sinAnimar || window.AG_SIN_ANIMACION) { fin(); return; }
            let n = 0;
            if (animando) clearInterval(animando);
            animando = setInterval(() => {
                n++;
                const falso = agTirarConjunto(false);
                pintarDados(falso, true);
                if (n >= 9) { clearInterval(animando); animando = null; fin(); }
            }, 70);
        };

        /* — Filas de características — */
        const tabla = el('div', 'ag-filas');
        const filas = {};
        const refrescarFilas = () => { AG_ATRS.forEach(a => filas[a] && filas[a].refrescar()); };
        AG_ATRS.forEach(a => {
            const f = el('div', 'ag-fila');
            f.appendChild(etiquetaAtr(a));
            const ctl = el('div', 'ag-ctl');
            const modEl = el('span', 'ag-mod');
            const extra = el('span', 'ag-fila-extra');
            let refrescar;
            if (m === 'array' || m === 'tirada') {
                const s = document.createElement('select'); s.className = 'ag-select';
                s.setAttribute('aria-label', AG_NOMBRE[a]);
                s.addEventListener('change', () => { E.asig[a] = s.value === '' ? null : parseInt(s.value); refrescarFilas(); actualizar(); });
                ctl.appendChild(s);
                refrescar = () => {
                    const usados = new Set(AG_ATRS.filter(x => x !== a).map(x => E.asig[x]).filter(i => i !== null));
                    s.textContent = '';
                    const o0 = document.createElement('option'); o0.value = ''; o0.textContent = E.pool.length ? '— elige —' : '— tira primero —'; s.appendChild(o0);
                    E.pool.map((v, i) => i).sort((x, y) => E.pool[y] - E.pool[x] || x - y).forEach(i => {
                        if (usados.has(i)) return;
                        const o = document.createElement('option'); o.value = i; o.textContent = E.pool[i]; s.appendChild(o);
                    });
                    s.value = E.asig[a] === null || E.asig[a] === undefined ? '' : String(E.asig[a]);
                    const v = E.asig[a] === null || E.asig[a] === undefined ? null : E.pool[E.asig[a]];
                    modEl.textContent = v === null ? '' : modTxt(v);
                };
            } else if (m === 'compra') {
                const menos = el('button', 'ag-btn ag-btn-mini ag-paso-mm', '−'); menos.type = 'button'; menos.setAttribute('aria-label', `Bajar ${AG_NOMBRE[a]}`);
                const val = el('output', 'ag-valor', '8');
                const mas = el('button', 'ag-btn ag-btn-mini ag-paso-mm', '+'); mas.type = 'button'; mas.setAttribute('aria-label', `Subir ${AG_NOMBRE[a]}`);
                const ponr = n => { E.compra[a] = n; refrescarFilas(); actualizar(); };
                menos.addEventListener('click', () => { if (E.compra[a] > 8) ponr(E.compra[a] - 1); });
                mas.addEventListener('click', () => {
                    const v = E.compra[a];
                    if (v < 15 && agPuntosGastados(E.compra) - agCoste(v) + agCoste(v + 1) <= E.presupuesto) ponr(v + 1);
                });
                ctl.append(menos, val, mas);
                refrescar = () => {
                    const v = E.compra[a];
                    val.textContent = v; modEl.textContent = modTxt(v);
                    extra.textContent = `coste ${agCoste(v)}`;
                    menos.disabled = v <= 8;
                    mas.disabled = v >= 15 || agPuntosGastados(E.compra) - agCoste(v) + agCoste(v + 1) > E.presupuesto;
                };
            } else {
                const inp = document.createElement('input'); inp.type = 'number'; inp.min = 1; inp.max = 30; inp.className = 'ag-num';
                inp.setAttribute('aria-label', AG_NOMBRE[a]);
                inp.addEventListener('input', () => { E.manual[a] = inp.value === '' ? NaN : parseInt(inp.value); modEl.textContent = isNaN(E.manual[a]) ? '' : modTxt(E.manual[a]); actualizar(); });
                ctl.appendChild(inp);
                refrescar = () => { if (document.activeElement !== inp) inp.value = isNaN(E.manual[a]) ? '' : E.manual[a]; modEl.textContent = isNaN(E.manual[a]) ? '' : modTxt(E.manual[a]); };
            }
            f.append(ctl, modEl, extra);
            tabla.appendChild(f);
            filas[a] = { refrescar };
        });

        /* — Cabecera, acciones — */
        if (m === 'compra') {
            const pts = el('div', 'ag-puntos');
            cab.appendChild(pts);
            refrescadores.push(() => {
                const g = agPuntosGastados(E.compra), resto = E.presupuesto - g;
                pts.textContent = `Puntos: ${g} / ${E.presupuesto} — te quedan ${resto}`;
                pts.classList.toggle('ag-puntos-ok', resto === 0);
            });
            acciones.appendChild(btn('Todo a 8', () => { AG_ATRS.forEach(a => { E.compra[a] = 8; }); refrescarFilas(); actualizar(); }));
        } else if (m === 'array') {
            cab.appendChild(el('div', 'ag-ayuda', 'Asigna 15, 14, 13, 12, 10 y 8, uno a cada característica.'));
        } else if (m === 'manual') {
            cab.appendChild(el('div', 'ag-ayuda', 'Escribe los seis valores base (antes de los bonos del trasfondo).'));
        } else {
            cab.appendChild(el('div', 'ag-ayuda', E.fisico ? 'Escribe tus seis resultados y asígnalos a las características.' : 'Tira los dados y asigna cada resultado a una característica.'));
        }
        let bOrden = null;
        if (m === 'array' || m === 'tirada') {
            bOrden = btn('En orden', () => { E.pool.forEach((v, i) => { if (i < 6) E.asig[AG_ATRS[i]] = i; }); refrescarFilas(); actualizar(); }, 'Fuerza, Destreza, Constitución… en el orden de los valores');
            acciones.appendChild(bOrden);
        }
        let bSug = null;
        if (m === 'array' || m === 'tirada' || m === 'compra') {
            const hayClase = !!agOrdenClase(E.clase);
            const bS = btn('Sugerir reparto', () => {
                if (m === 'compra') { const v = agSugerirCompra(E.presupuesto, E.clase); if (v) Object.assign(E.compra, v); }
                else { const a = agSugerirAsignacion(E.pool, E.clase); if (a) { AG_ATRS.forEach(x => { E.asig[x] = a[x]; }); } }
                refrescarFilas(); actualizar();
            }, hayClase ? `Pone los valores más altos en las características de ${E.clase}` : 'Elige una clase para recibir una sugerencia');
            bSug = bS;
            acciones.appendChild(bS);
            acciones.appendChild(btn('Vaciar', () => {
                if (m === 'compra') AG_ATRS.forEach(a => { E.compra[a] = 8; }); else AG_ATRS.forEach(a => { E.asig[a] = null; });
                refrescarFilas(); actualizar();
            }));
        }
        cuerpo.appendChild(acciones);
        cuerpo.appendChild(tabla);

        /* — Historial (tirada) — */
        let histEl = null;
        const pintarHistorial = () => {
            if (!histEl) return;
            histEl.textContent = '';
            if (!E.historial.length) return;
            histEl.appendChild(el('div', 'ag-hist-tit', 'Historial de tiradas'));
            E.historial.forEach((h, i) => {
                const fila = el('div', 'ag-hist-fila');
                const hora = new Date(h.t);
                const mods = h.v.reduce((s, v) => s + agMod(v), 0);
                fila.appendChild(el('span', 'ag-hist-t', `${String(hora.getHours()).padStart(2, '0')}:${String(hora.getMinutes()).padStart(2, '0')}${h.f ? ' · físicos' : h.u ? ' · repitiendo 1s' : ''}`));
                fila.appendChild(el('span', 'ag-hist-v', h.v.join(' · ')));
                fila.appendChild(el('span', 'ag-hist-m', `suma ${h.v.reduce((a, b) => a + b, 0)} · mod. ${agFmt(mods)}`));
                const u = btn('Usar', () => {
                    E.pool = h.v.slice();
                    E.tirada = h.d ? h.d.map((d, k) => ({ dados: d, repetidos: (h.r && h.r[k]) || d.map(() => 0), quitado: h.q ? h.q[k] : d.indexOf(Math.min(...d)), total: h.v[k] })) : h.v.map(v => ({ dados: [], repetidos: [], quitado: -1, total: v, fisico: true }));
                    AG_ATRS.forEach(a => { E.asig[a] = null; });
                    if (zonaDados) pintarDados(E.tirada, false);
                    refrescarFilas(); actualizar();
                });
                if (i === 0 && E.pool.join() === h.v.join()) { u.disabled = true; u.textContent = 'En uso'; }
                fila.appendChild(u);
                histEl.appendChild(fila);
            });
        };
        if (m === 'tirada') {
            histEl = el('div', 'ag-hist');
            cuerpo.appendChild(histEl);
            pintarDados(E.tirada, false);
            pintarHistorial();
        }
        if (m === 'array') {
            const chips = el('div', 'ag-chips');
            chips.appendChild(el('span', 'ag-nota-peq', 'Valores: '));
            AG_ARRAY.forEach(v => chips.appendChild(el('span', 'ag-chip', String(v))));
            cab.appendChild(chips);
        }
        refrescarFilas();
        refrescadores.push(refrescarFilas);
        // Botones que dependen del estado (hay valores que repartir)
        refrescadores.push(() => {
            const hayPool = m === 'compra' || E.pool.length >= 6;
            if (bSug) bSug.disabled = !agOrdenClase(E.clase) || !hayPool;
            if (bOrden) bOrden.disabled = !hayPool;
        });
    }

    /* ═════ PASO 3: bonos ═════ */
    function renderBonos() {
        const base = agBase(E) || {};
        const info = E.tfInfo;
        /* Trasfondo */
        const sec1 = el('div', 'ag-sec');
        sec1.appendChild(el('div', 'ag-sec-tit', 'Aumentos del trasfondo'));
        let txtTf;
        if (info.tipo === 'lista') txtTf = info.sinAsi
            ? `«${info.nombre}» es un trasfondo de 2014: no da aumentos de característica (los daba la especie). Si tu mesa los mantiene, anótalos en «Bonos extra».`
            : `«${info.nombre}» permite aumentar: ${info.permitidas.map(a => AG_NOMBRE[a]).join(', ')}.`;
        else if (info.tipo === 'personalizado') txtTf = 'Trasfondo personalizado: elige las características que aumentan.';
        else txtTf = 'Aún no has elegido trasfondo. Puedes repartir los aumentos entre cualquier característica.';
        sec1.appendChild(el('p', 'ag-ayuda', txtTf));
        if (E.origen === 'actual' && E.tf.modo === 'no' && info.tipo !== 'lista') { /* nada */ }
        if (E.origen === 'actual' && E.tf.modo === 'no') sec1.appendChild(el('p', 'ag-nota', 'Se ha dejado en «Sin aumentos» porque tus valores ya estaban cambiados: si ya sumaste a mano los del trasfondo, no los repitas.'));
        cuerpo.appendChild(sec1);

        const modos = el('div', 'ag-modos');
        const bloqueado = info.tipo === 'lista' && info.sinAsi;
        [['no', 'Sin aumentos', 'Ya incluidos, o no aplican'], ['21', '+2 / +1', 'Una característica +2 y otra +1'], ['111', '+1 / +1 / +1', 'Tres características +1']].forEach(([val, t, d]) => {
            const lab = el('label', 'ag-modo');
            const r = document.createElement('input'); r.type = 'radio'; r.name = 'ag-modo'; r.value = val; r.checked = E.tf.modo === val;
            r.disabled = bloqueado && val !== 'no';
            r.addEventListener('change', () => {
                E.tf.modo = val;
                if (val === '111' && E.tf.tres.length === 0) E.tf.tres = agPermitidas(E).slice(0, 3);
                pintarSel(); actualizar();
            });
            const tx = el('span', 'ag-modo-tx'); tx.append(el('strong', '', t), el('span', '', d));
            lab.append(r, tx); modos.appendChild(lab);
        });
        sec1.appendChild(modos);
        const sel = el('div', 'ag-tf-sel'); sec1.appendChild(sel);
        let selRef = [];   // refrescadores de los controles de la elección actual (se renuevan al cambiar de modo)
        refrescadores.push(() => selRef.forEach(f => f()));
        const pintarSel = () => {
            sel.textContent = ''; selRef = [];
            const perm = agPermitidas(E);
            const mk = (rotulo, key) => {
                const l = el('label', 'ag-fila-opc'); l.appendChild(el('span', '', rotulo));
                const s = document.createElement('select'); s.className = 'ag-select';
                const refrescarS = () => {
                    const otro = key === 'mas2' ? E.tf.mas1 : E.tf.mas2;
                    s.textContent = '';
                    const o0 = document.createElement('option'); o0.value = ''; o0.textContent = '— elige —'; s.appendChild(o0);
                    perm.forEach(a => { if (a === otro) return; const o = document.createElement('option'); o.value = a; o.textContent = `${AG_NOMBRE[a]} (${base[a] !== undefined ? base[a] : '?'})`; s.appendChild(o); });
                    s.value = E.tf[key] || '';
                };
                s.addEventListener('change', () => { E.tf[key] = s.value; actualizar(); });
                selRef.push(refrescarS); refrescarS();
                l.appendChild(s); return l;
            };
            if (E.tf.modo === '21') { sel.append(mk('+2 a', 'mas2'), mk('+1 a', 'mas1')); }
            else if (E.tf.modo === '111') {
                const fila = el('div', 'ag-checks');
                perm.forEach(a => {
                    const l = el('label', 'ag-check');
                    const c = document.createElement('input'); c.type = 'checkbox'; c.checked = E.tf.tres.includes(a);
                    c.addEventListener('change', () => {
                        if (c.checked) { if (!E.tf.tres.includes(a)) E.tf.tres.push(a); } else E.tf.tres = E.tf.tres.filter(x => x !== a);
                        actualizar();
                    });
                    selRef.push(() => { c.checked = E.tf.tres.includes(a); c.disabled = !c.checked && E.tf.tres.length >= 3; });
                    l.append(c, el('span', '', AG_NOMBRE[a]));
                    fila.appendChild(l);
                });
                sel.appendChild(fila);
            }
        };
        pintarSel();
        const nota20 = el('p', 'ag-nota-peq', 'Los aumentos del trasfondo no pasan de 20 (el sobrante se pierde).');
        sec1.appendChild(nota20);

        /* Bonos extra */
        const sec2 = el('div', 'ag-sec');
        sec2.appendChild(el('div', 'ag-sec-tit', 'Bonos extra (manual)'));
        sec2.appendChild(el('p', 'ag-ayuda', 'Para lo que no sea del trasfondo: especie de 2014, un objeto mágico o reglas de tu mesa.'));
        const grid = el('div', 'ag-extra-grid');
        AG_ATRS.forEach(a => {
            const c = el('div', 'ag-extra');
            c.appendChild(el('span', 'ag-extra-n', AG_ABREV[a]));
            const menos = el('button', 'ag-btn ag-btn-mini ag-paso-mm', '−'); menos.type = 'button'; menos.setAttribute('aria-label', `Quitar a ${AG_NOMBRE[a]}`);
            const val = el('output', 'ag-valor', '0');
            const mas = el('button', 'ag-btn ag-btn-mini ag-paso-mm', '+'); mas.type = 'button'; mas.setAttribute('aria-label', `Añadir a ${AG_NOMBRE[a]}`);
            const pon = n => { E.extra[a] = Math.max(-10, Math.min(10, n)); val.textContent = E.extra[a] ? agFmt(E.extra[a]) : '0'; actualizar(); };
            menos.addEventListener('click', () => pon((E.extra[a] || 0) - 1));
            mas.addEventListener('click', () => pon((E.extra[a] || 0) + 1));
            val.textContent = E.extra[a] ? agFmt(E.extra[a]) : '0';
            c.append(menos, val, mas); grid.appendChild(c);
        });
        sec2.appendChild(grid);
        cuerpo.appendChild(sec2);

        /* Cambios posteriores */
        const hayDelta = AG_ATRS.some(a => E.delta[a]);
        if (hayDelta) {
            const sec3 = el('div', 'ag-sec');
            sec3.appendChild(el('div', 'ag-sec-tit', 'Cambios hechos después de generar'));
            sec3.appendChild(el('p', 'ag-ayuda', 'Desde la última vez que usaste el generador, estos valores han cambiado a mano (mejoras de nivel, objetos…): ' +
                AG_ATRS.filter(a => E.delta[a]).map(a => `${AG_ABREV[a]} ${agFmt(E.delta[a])}`).join(', ') + '.'));
            const l = el('label', 'ag-fila-opc ag-chk');
            const c = document.createElement('input'); c.type = 'checkbox'; c.checked = E.conservar;
            c.addEventListener('change', () => { E.conservar = c.checked; actualizar(); });
            l.append(c, el('span', '', 'Conservarlos al aplicar'));
            sec3.appendChild(l);
            cuerpo.appendChild(sec3);
        }

        /* Mini-vista previa */
        const { t, tb } = tablaResumen([{ t: '' }, { t: 'Base', cls: 'n' }, { t: 'Trasfondo', cls: 'n' }, { t: 'Extra', cls: 'n' }, { t: 'Total', cls: 'n' }]);
        cuerpo.appendChild(t);
        refrescadores.push(() => {
            tb.textContent = '';
            const filas = agCalcular(E);
            if (!filas) return;
            filas.forEach(r => {
                const tr = el('tr'); const td0 = el('td'); td0.appendChild(etiquetaAtr(r.abil)); tr.appendChild(td0);
                tr.append(el('td', 'n', String(r.base)), el('td', 'n', r.tf ? '+' + r.tf : '–'), el('td', 'n', r.extra ? agFmt(r.extra) : '–'),
                    el('td', 'n ag-total', `${r.total} (${agFmt(r.mod)})`));
                tb.appendChild(tr);
            });
        });
    }

    /* ═════ PASO 4: resumen ═════ */
    function renderResumen() {
        cuerpo.appendChild(el('p', 'ag-ayuda', 'Revisa el resultado. Al aplicar se escriben las seis características en la ficha y se recalcula todo (salvaciones, habilidades, PG, CD…). Antes se guarda una versión en el Historial.'));
        const cols = [{ t: '' }, { t: 'Ahora', cls: 'n' }, { t: 'Base', cls: 'n' }, { t: 'Trasfondo', cls: 'n' }, { t: 'Extra', cls: 'n' }];
        if (AG_ATRS.some(a => E.delta[a] && E.conservar)) cols.push({ t: 'Posterior', cls: 'n' });
        cols.push({ t: 'Nuevo', cls: 'n' }, { t: 'Mod.', cls: 'n' });
        const { t, tb } = tablaResumen(cols);
        cuerpo.appendChild(t);
        const msgs = el('ul', 'ag-msgs'); cuerpo.appendChild(msgs);
        refrescadores.push(() => {
            tb.textContent = ''; msgs.textContent = '';
            const filas = agCalcular(E);
            if (!filas) return;
            const conDelta = cols.some(c => c.t === 'Posterior');
            filas.forEach(r => {
                const tr = el('tr'); const td0 = el('td'); td0.appendChild(etiquetaAtr(r.abil)); tr.appendChild(td0);
                const cambia = r.total !== r.actual;
                const cells = [el('td', 'n ag-tenue', String(r.actual)), el('td', 'n', String(r.base)), el('td', 'n', r.tf ? '+' + r.tf : '–'), el('td', 'n', r.extra ? agFmt(r.extra) : '–')];
                if (conDelta) cells.push(el('td', 'n', r.delta ? agFmt(r.delta) : '–'));
                cells.push(el('td', 'n ag-total' + (cambia ? ' ag-cambia' : ''), String(r.total)), el('td', 'n', agFmt(r.mod)));
                tr.append(...cells); tb.appendChild(tr);
            });
            const m = (txt, cls) => msgs.appendChild(el('li', cls || '', txt));
            if (E.metodo === 'compra') { const resto = E.presupuesto - agPuntosGastados(E.compra); if (resto > 0) m(`Te sobran ${resto} punto(s) de la compra de puntos.`, 'ag-msg-aviso'); }
            const sumaMods = filas.reduce((s, r) => s + r.mod, 0);
            m(`Suma de modificadores: ${agFmt(sumaMods)}.`);
            filas.filter(r => r.recortado).forEach(r => m(`${AG_NOMBRE[r.abil]} se ha limitado a ${r.total} (el máximo es 30 y el mínimo 1).`, 'ag-msg-aviso'));
            filas.filter(r => r.total > 20).forEach(r => m(`${AG_NOMBRE[r.abil]} pasa de 20 (${r.total}): sólo es posible con bonos extra u objetos.`, 'ag-msg-aviso'));
            const base = agBase(E);
            if (base && E.tf.modo !== 'no') {
                const pedido = E.tf.modo === '21' ? [[E.tf.mas2, 2], [E.tf.mas1, 1]] : [...new Set(E.tf.tres)].map(a => [a, 1]);
                const tfr = agBonoTf(E, base);
                pedido.forEach(([a, n]) => { if (a && tfr[a] < n) m(`El aumento de ${AG_NOMBRE[a]} del trasfondo se recorta a +${tfr[a]} (tope de 20).`, 'ag-msg-aviso'); });
            }
            const rep = filas.filter(r => r.total !== r.actual).length;
            m(rep ? `Cambian ${rep} característica(s) respecto a la ficha actual.` : 'No cambia ninguna característica respecto a la ficha actual.');
        });
    }

    document.addEventListener('keydown', teclas, true);
    document.body.appendChild(overlay);
    const ini = Math.max(1, Math.min(4, parseInt(pasoInicial) || 1));
    irPaso(ini > 1 && !puedeIr(ini) ? 1 : ini);
    (cuerpo.querySelector('input:checked') || bSig).focus();
}

/* ══════ Aviso del trasfondo personalizado (qué hacer con los aumentos) ══════ */
function _actualizarAvisoTfGen(panel) {
    const w = panel && panel.querySelector('.trasfondo-personalizado');
    const av = w && w.querySelector('.tf-gen-aviso');
    if (!av) return;
    let prev = {};
    try { prev = JSON.parse(w.dataset.prevBonos || '{}') || {}; } catch (e) { prev = {}; }
    av.style.display = (prev.stat2 || prev.stat1) ? 'none' : '';   // ficha antigua: aún suma ella sola
}
