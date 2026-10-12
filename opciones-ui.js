/* ═══════════════════════════════════════════════════════════════
   opciones-ui.js — Panel «Opciones de clase» (página Características)
   Invocaciones sobrenaturales, dádivas del pacto, metamagia, maniobras,
   infusiones, runas, disciplinas elementales, disparos arcanos, estilos de
   combate (2014) y privilegios de Renombre de Casa.

   Datos:      opciones.js  (DND_OPCIONES, DND_OPCIONES_TIPOS, DND_OPCIONES_LIMITES)
   Depende de: caracteristicas.js (leerMcDatos, hacerSelectBuscable, _ordenES)
               script.js (regenerarAccionesAuto, guardarDebounced)

   Cómo funciona
   · El desplegable (con buscador) lista las opciones de las clases de la ficha.
     Filtro: «Mi clase» (todas las de tu clase/subclase), «Disponibles ahora»
     (sólo las que cumplen el nivel) o «Todas».
   · El botón ＋ escribe «Nombre: descripción» en el cuadro de texto de abajo.
     Si no cumples nivel, subclase o requisito se AVISA, pero no se bloquea.
   · El cuadro es texto libre y es lo que se guarda (caract.opcionesTxt). Cada línea
     que empieza por el nombre de una opción se reconoce: cuenta para los
     contadores y las que se usan en combate aparecen en el panel de Acciones.
═══════════════════════════════════════════════════════════════ */

const _OPC_USO = { A: 'Acción', B: 'Acción adicional', R: 'Reacción', O: 'Otro' };

function _opcNorm(t) {
    return String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}
function _opcHayDatos() {
    return typeof DND_OPCIONES !== 'undefined' && Array.isArray(DND_OPCIONES);
}
/* La subclase elegida empieza por el nombre pedido («Maestro de Batalla [PHB]» cumple «Maestro de Batalla») */
function _opcSubOk(sub, subclase) {
    return !sub || _opcNorm(subclase).startsWith(_opcNorm(sub));
}
/* Edición de una opción: las de 2024 llevan «2024» en la fuente; el resto (PHB 2014, XGtE, TCE) son de 5e */
function _opcEdicion(o) { return /2024/.test(o.n) ? '2024' : '2014'; }

function _opcClases(panel) {
    return (typeof leerMcDatos === 'function' ? leerMcDatos(panel) : []).filter(m => m.clase);
}
/* ¿Esta clase (y subclase) puede elegir la opción? Las «libres» (clases vacías) no son de ninguna clase */
function _opcDeClase(o, mc) {
    const cl = o.clases || [];
    return cl.length > 0 && cl.includes(mc.clase) && _opcSubOk(o.sub, mc.subclase);
}

/* Opción a la que corresponde una línea del cuadro (empieza por su nombre), o null */
function _opcLineaDe(linea) {
    for (const o of DND_OPCIONES) {
        if (!linea.startsWith(o.n)) continue;
        const sig = linea.charAt(o.n.length);
        if (!sig || /[\s:(,;–—-]/.test(sig)) return o;
    }
    return null;
}
/* Opciones anotadas en el cuadro (con repeticiones, en orden) */
function _opcElegidas(panel) {
    if (!_opcHayDatos()) return [];
    const texto = panel.querySelector('.caract-opciones')?.value || '';
    const res = [];
    texto.split('\n').forEach(l => {
        l = l.trim();
        if (!l) return;
        const o = _opcLineaDe(l);
        if (o) res.push(o);
    });
    return res;
}

/* Cuántas opciones de ese tipo se tienen y cuántas toca según el nivel.
   Edición: se deduce de lo elegido (una de 2024 → tabla 5.5e; sólo 2014 → tabla 5e; nada → 5.5e). */
function _opcLimite(tipo, elegidasTipo, mcs) {
    const T = DND_OPCIONES_TIPOS[tipo];
    const tabs = typeof DND_OPCIONES_LIMITES !== 'undefined' ? DND_OPCIONES_LIMITES[tipo] : null;
    if (!T || !tabs) return null;
    const aplican = mcs.filter(m => (T.clases || []).includes(m.clase) && _opcSubOk(T.sub, m.subclase));
    if (!aplican.length) return null;
    const nivel = aplican.reduce((s, m) => s + (parseInt(m.nivel) || 1), 0);
    const val = ed => tabs[ed] ? tabs[ed][Math.min(Math.max(nivel, 1), 20) - 1] : null;
    const n = elegidasTipo.length;
    let ed = elegidasTipo.some(o => _opcEdicion(o) === '2024') ? '2024' : (n ? '2014' : '2024');
    if (!tabs[ed]) ed = Object.keys(tabs)[0];
    const otra = ed === '2024' ? '2014' : '2024';
    return {
        n, nivel, ed, max: val(ed),
        otraEd: tabs[otra] ? otra : null, otraMax: tabs[otra] ? val(otra) : null,
        clase: aplican[0].clase,
    };
}

/* Requisito que es otra opción (un Pacto o la Hoja Sedienta): se puede comprobar contra lo anotado */
function _opcReqOpcion(req) {
    const r = String(req || '').replace(/^Invocación\s+/i, '').trim();
    return (/^Pacto d[eo]l?\s/i.test(r) || /^Hoja Sedienta/i.test(r)) ? r : null;
}

/* Avisos (no bloquean) al elegir una opción */
function _opcAvisos(o, elegidas, mcs) {
    const av = [];
    const aplican = mcs.filter(m => _opcDeClase(o, m));
    if ((o.clases || []).length) {
        if (!aplican.length) {
            if (o.sub && mcs.some(m => o.clases.includes(m.clase))) av.push(`requiere la subclase «${o.sub}»`);
            else av.push(`es una opción de ${o.clases.join(' / ')}`);
        } else if (o.nv) {
            const nivel = Math.max(...aplican.map(m => parseInt(m.nivel) || 1));
            if (nivel < o.nv) av.push(`requiere nivel ${o.nv} de ${aplican[0].clase} (tienes ${nivel})`);
        }
    }
    const reqOp = _opcReqOpcion(o.req);
    if (reqOp && !elegidas.some(x => _opcNorm(x.n).startsWith(_opcNorm(reqOp)))) {
        av.push(`requisito: ${o.req} (no lo tienes anotado)`);
    }
    const lim = _opcLimite(o.tipo, elegidas.filter(x => x.tipo === o.tipo).concat(o), mcs);
    if (lim && lim.max != null && lim.n > lim.max) {
        const corto = DND_OPCIONES_TIPOS[o.tipo].corto || o.tipo;
        av.push(`con esta tendrías ${lim.n} de ${lim.max} ${corto.toLowerCase()} para tu nivel`);
    }
    return av;
}

function _opcEl(tag, clase, texto) {
    const e = document.createElement(tag);
    if (clase) e.className = clase;
    if (texto != null) e.textContent = texto;
    return e;
}

/* Mensaje bajo el selector («Añadida: …», «Ya la tienes…»). tipo: 'ok' | 'aviso' | '' (borrar) */
function _opcMensaje(panel, texto, tipo) {
    const m = panel.querySelector('.opc-aviso');
    if (!m) return;
    m.textContent = texto || '';
    m.className = 'opc-aviso' + (tipo ? ' opc-aviso-' + tipo : '');
    m.hidden = !texto;
}

/* Tarjeta con la descripción de la opción elegida en el desplegable (antes de añadirla) */
function _opcVista(panel) {
    const box = panel.querySelector('.opc-vista');
    if (!box) return;
    const sel = panel.querySelector('.sel-opcion');
    const o = _opcHayDatos() && sel ? DND_OPCIONES.find(x => x.n === sel.value) : null;
    box.textContent = '';
    if (!o) { box.hidden = true; return; }

    const cab = _opcEl('div', 'opc-vista-cab');
    cab.appendChild(_opcEl('span', 'opc-vista-nombre', o.n));
    cab.appendChild(_opcEl('span', 'opc-etq', o.tipo));
    if (o.nv) cab.appendChild(_opcEl('span', 'opc-etq', 'Nv. ' + o.nv));
    if (o.sub) cab.appendChild(_opcEl('span', 'opc-etq', o.sub));
    const uso = o.a ? [...String(o.a).toUpperCase()].map(c => _OPC_USO[c]).filter(Boolean) : [];
    cab.appendChild(_opcEl('span', 'opc-etq', uso.length ? uso.join(' / ') : 'Pasiva'));
    if (o.rep) cab.appendChild(_opcEl('span', 'opc-etq', 'Repetible'));
    box.appendChild(cab);
    if (o.req) box.appendChild(_opcEl('div', 'opc-vista-req', 'Requisito: ' + o.req));
    box.appendChild(_opcEl('div', 'opc-vista-desc', o.d));
    const av = _opcAvisos(o, _opcElegidas(panel), _opcClases(panel));
    if (av.length) box.appendChild(_opcEl('div', 'opc-vista-aviso', '⚠ ' + av.join(' · ')));
    box.hidden = false;
}

/* Contadores por tipo («Invocaciones 3/5»). Verde = completo, rojo = te pasas. */
function _opcContadores(panel, elegidas, mcs) {
    const cont = panel.querySelector('.opc-contadores');
    if (!cont) return;
    cont.textContent = '';
    Object.keys(DND_OPCIONES_TIPOS).forEach(tipo => {
        const de = elegidas.filter(o => o.tipo === tipo);
        const lim = _opcLimite(tipo, de, mcs);
        const n = de.length;
        // La Dádiva del Pacto es de 5e: en una ficha que ya usa invocaciones de 2024 no se pide
        if (tipo === 'Dádiva del Pacto' && !n &&
            elegidas.some(o => o.tipo === 'Invocación Sobrenatural' && _opcEdicion(o) === '2024')) return;
        if (!n && !(lim && lim.max > 0)) return;
        const T = DND_OPCIONES_TIPOS[tipo];
        const corto = T.corto || tipo;
        const chip = _opcEl('span', 'opc-cont');
        chip.dataset.tipo = tipo;
        chip.appendChild(document.createTextNode(corto + ' '));
        const b = _opcEl('b', null, String(n));
        chip.appendChild(b);
        if (lim && lim.max != null) {
            chip.appendChild(document.createTextNode('/' + lim.max));
            if (n > lim.max) chip.classList.add('opc-cont-exceso');
            else if (n === lim.max) chip.classList.add('opc-cont-completo');
            const tip = [`${corto}: tienes ${n}`, `Según tu nivel (${lim.clase} ${lim.nivel}): `];
            const e24 = lim.ed === '2024' ? lim.max : lim.otraMax, e14 = lim.ed === '2014' ? lim.max : lim.otraMax;
            const partes = [];
            if (e24 != null) partes.push(`5.5e → ${e24}`);
            if (e14 != null) partes.push(`5e → ${e14}`);
            chip.title = tip[0] + '. ' + tip[1] + partes.join(', ') + '.';
            // Sin nada elegido todavía se enseñan las dos ediciones si difieren
            if (!n && lim.otraMax != null && lim.otraMax !== lim.max) {
                chip.appendChild(_opcEl('small', null, `(${lim.otraEd === '2014' ? '5e' : '5.5e'}: ${lim.otraMax})`));
            }
        } else {
            chip.title = `${corto}: tienes ${n}`;
        }
        cont.appendChild(chip);
    });
}

/* Reconstruye el desplegable según el filtro, las clases y el nivel, y los contadores.
   Se llama al cambiar clase, subclase, nivel, el texto del cuadro o el filtro. */
function opcionesRefrescar(panel) {
    if (!panel || !_opcHayDatos()) return;
    const sel = panel.querySelector('.sel-opcion');
    if (!sel) return;
    const modo = panel.querySelector('.opc-filtro')?.value || 'mi';
    const mcs = _opcClases(panel);
    const elegidas = _opcElegidas(panel);
    const cuenta = new Map();
    elegidas.forEach(o => cuenta.set(o.n, (cuenta.get(o.n) || 0) + 1));

    const nivelDe = o => {
        const ap = mcs.filter(m => _opcDeClase(o, m));
        return ap.length ? Math.max(...ap.map(m => parseInt(m.nivel) || 1)) : 0;
    };
    const lista = DND_OPCIONES.filter(o => {
        if (modo === 'todas') return true;
        if (!mcs.some(m => _opcDeClase(o, m))) return false;
        return modo !== 'disp' || !o.nv || nivelDe(o) >= o.nv;
    });

    const previo = sel.value;
    let ph = '— Añadir opción de clase —';
    if (!lista.length) {
        ph = modo === 'disp' ? '— Aún no hay opciones disponibles (prueba «Mi clase») —'
            : !mcs.length ? '— Elige una clase arriba (o usa el filtro «Todas») —'
            : '— Tu clase no tiene opciones (usa el filtro «Todas») —';
    }
    const frag = document.createDocumentFragment();
    const op0 = document.createElement('option');
    op0.value = ''; op0.textContent = ph;
    frag.appendChild(op0);
    Object.keys(DND_OPCIONES_TIPOS).forEach(tipo => {
        const delTipo = lista.filter(o => o.tipo === tipo).sort((a, b) => _ordenES(a.n, b.n));
        if (!delTipo.length) return;
        const g = document.createElement('optgroup');
        g.label = tipo;
        delTipo.forEach(o => {
            const op = document.createElement('option');
            op.value = o.n;
            let txt = o.n;
            if (cuenta.has(o.n)) txt += ' ✓';
            if (o.nv && nivelDe(o) < o.nv) txt += ' · nv. ' + o.nv;
            op.textContent = txt;
            g.appendChild(op);
        });
        frag.appendChild(g);
    });
    sel.textContent = '';
    sel.appendChild(frag);
    sel.value = lista.some(o => o.n === previo) ? previo : '';

    _opcContadores(panel, elegidas, mcs);
    _opcVista(panel);
}

/* Botón ＋: añade la opción elegida al cuadro de texto */
function onOpcionAdd(btn) {
    const panel = btn.closest('.ficha-panel');
    const sel = panel.querySelector('.sel-opcion');
    const ta = panel.querySelector('.caract-opciones');
    if (!sel || !ta || !_opcHayDatos()) return;
    const o = DND_OPCIONES.find(x => x.n === sel.value);
    if (!o) { _opcMensaje(panel, 'Elige primero una opción en el desplegable.', 'aviso'); return; }

    const elegidas = _opcElegidas(panel);
    if (!o.rep && elegidas.some(x => x.n === o.n)) {
        _opcMensaje(panel, `Ya tienes «${o.n}» anotada.`, 'aviso');
        return;
    }
    const avisos = _opcAvisos(o, elegidas, _opcClases(panel));
    const linea = `${o.n}: ${o.d}`;
    ta.value = ta.value.trim() ? ta.value.replace(/\s+$/, '') + '\n\n' + linea : linea;
    sel.value = '';
    opcionesRefrescar(panel);
    _opcMensaje(panel, `Añadida: ${o.n}` + (avisos.length ? ` — ⚠ ${avisos.join(' · ')}` : ''), avisos.length ? 'aviso' : 'ok');

    // Se escribe por código (no hay evento «input»): refrescar el panel de Acciones y guardar
    if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

/* Enganches de un panel de ficha nuevo */
function initOpciones(panel) {
    const sel = panel && panel.querySelector('.sel-opcion');
    if (!sel || sel._opcInit) return;
    sel._opcInit = true;
    if (typeof hacerSelectBuscable === 'function') hacerSelectBuscable(sel);

    sel.addEventListener('change', () => { _opcMensaje(panel, ''); _opcVista(panel); });

    const filtro = panel.querySelector('.opc-filtro');
    if (filtro) filtro.addEventListener('change', () => {
        opcionesRefrescar(panel);
        if (typeof guardarDebounced === 'function') guardarDebounced();
    });

    // Texto editado a mano: contadores y panel de Acciones al día
    const ta = panel.querySelector('.caract-opciones');
    let t = null;
    if (ta) ta.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => {
            opcionesRefrescar(panel);
            if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
        }, 300);
    });

    // Cambios de clase, subclase o nivel (los selectores del bloque de clases burbujean su «change»)
    const mc = panel.querySelector('.caract-mc-wrap');
    if (mc) mc.addEventListener('change', () => opcionesRefrescar(panel));

    opcionesRefrescar(panel);
}
