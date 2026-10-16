/* ═══════════════════════════════════════════════════════════════
   subida-opciones.js — Opciones de clase dentro del asistente de subida de nivel
   (invocaciones, metamagia, maniobras, disciplinas elementales, runas,
   disparos arcanos, infusiones y dádivas del Pacto)

   Qué hace
   · Calcula con las tablas de opciones.js (DND_OPCIONES_LIMITES) cuántas opciones
     gana la clase que sube y cuántas puede sustituir (regla de cada rasgo en 5etools).
   · Ofrece un selector con buscador y vista previa, filtrado por clase, subclase,
     edición (5.5e / 5e) y nivel, y respetando los requisitos que son otra opción
     (Pacto de la Hoja → Hoja Sedienta…).
   · Anota las elegidas en el cuadro «Opciones de clase» de Características
     («Nombre: descripción»), igual que el botón ＋ del panel, y quita las sustituidas.

   Depende de: opciones.js (DND_OPCIONES, DND_OPCIONES_TIPOS, DND_OPCIONES_LIMITES),
   opciones-ui.js (_opcElegidas, _opcSubOk, _opcEdicion, _opcReqOpcion, _opcLineaDe,
   _opcNorm, opcionesRefrescar, _OPC_USO), subida-nivel.js (snMcsDespues…, snNivelClaseAntes),
   script.js (regenerarAccionesAuto, guardarDebounced), caracteristicas.js (_ordenES, _coincideBusq).
═══════════════════════════════════════════════════════════════ */

/* Cuándo se puede sustituir una opción al subir de nivel (texto del rasgo en 5etools):
     'nivel'  → una por cada nivel de la clase que se gana (Invocaciones, Metamagia 2024, Infusiones, Runas)
     'nuevas' → una cada vez que se aprenden opciones nuevas (Maniobras, Disciplinas Elementales)
     null     → no se sustituyen (Disparo Arcano de XGtE, Dádiva del Pacto)
   soloEd: la sustitución solo existe en esa edición (la Metamagia de 5e no se cambia al subir). */
const SN_OPC_REGLAS = {
    'Invocación Sobrenatural': { cambio: 'nivel',  nom: ['invocación', 'invocaciones'] },
    'Dádiva del Pacto':        { cambio: null,     nom: ['dádiva del Pacto', 'dádivas del Pacto'] },
    'Metamagia':               { cambio: 'nivel',  soloEd: '2024', nom: ['opción de Metamagia', 'opciones de Metamagia'] },
    'Maniobra':                { cambio: 'nuevas', nom: ['maniobra', 'maniobras'] },
    'Infusión':                { cambio: 'nivel',  nom: ['infusión', 'infusiones'] },
    'Runa':                    { cambio: 'nivel',  nom: ['runa', 'runas'] },
    'Disciplina Elemental':    { cambio: 'nuevas', nom: ['disciplina elemental', 'disciplinas elementales'] },
    'Disparo Arcano':          { cambio: null,     nom: ['disparo arcano', 'disparos arcanos'] },
};
const SN_OP_MAX_FILAS = 120;

const snOpCap = t => t.charAt(0).toUpperCase() + t.slice(1);
/* «Explosión Agónica (Agonizing Blast) [PHB 2024]» → «Explosión Agónica» */
const snOpCorto = n => String(n).split(' (')[0].replace(/\s*\[[^\]]*\]\s*$/, '');
const snOpFuente = n => ((String(n).match(/\[([^\]]+)\]\s*$/) || [])[1]) || '';

function snOpcHay() {
    return typeof DND_OPCIONES !== 'undefined' && typeof DND_OPCIONES_TIPOS !== 'undefined' &&
        typeof DND_OPCIONES_LIMITES !== 'undefined' && typeof _opcElegidas === 'function';
}

let _snOpPorNombre = null;
function snOpPorNombre() {
    if (!_snOpPorNombre) _snOpPorNombre = new Map(DND_OPCIONES.map(o => [o.n, o]));
    return _snOpPorNombre;
}

/* Edición que indica la etiqueta de una subclase («… [PHB 2024]» → 2024; cualquier otra fuente → 5e); '' si no hay etiqueta */
function snOpcEdSub(sub) {
    const s = String(sub || '');
    if (/2024/.test(s)) return '2024';
    return /\[[^\]]+\]/.test(s) ? '2014' : '';
}

/* Opciones que cuenta la ficha de un tipo con la clase en un nivel dado (misma cuenta que los contadores del panel) */
function snOpcMax(tipo, ed, mcs) {
    const T = DND_OPCIONES_TIPOS[tipo], tabs = DND_OPCIONES_LIMITES[tipo];
    if (!T || !tabs || !tabs[ed]) return null;
    const aplican = mcs.filter(m => m.clase && (T.clases || []).includes(m.clase) && _opcSubOk(T.sub, m.subclase));
    if (!aplican.length) return null;
    const nivel = aplican.reduce((s, m) => s + (parseInt(m.nivel) || 1), 0);
    return tabs[ed][Math.min(Math.max(nivel, 1), 20) - 1];
}

/* Las clases de la ficha con la que sube a un nivel concreto (0 = todavía no la tiene) */
function snOpcMcsNivel(E, nivelClase, sub) {
    const out = E.mcs.filter(m => m.clase !== E.clase).map(m => ({ clase: m.clase, nivel: m.nivel, subclase: m.subclase }));
    if (nivelClase > 0) out.push({ clase: E.clase, nivel: nivelClase, subclase: sub });
    return out;
}

/* Edición con la que se cuentan las opciones de un tipo: la de lo ya anotado, si no la de la subclase, si no la que elija la persona */
function snOpcEd(E, tipo, T, delTipo, subD) {
    const tabs = DND_OPCIONES_LIMITES[tipo] || {};
    const eds = Object.keys(tabs).sort((a, b) => b - a);   // 5.5e (2024) primero
    let ed, fija = false;
    if (delTipo.some(o => _opcEdicion(o) === '2024')) { ed = '2024'; fija = true; }
    else if (delTipo.length) { ed = '2014'; fija = true; }
    else {
        const deSub = T.sub ? snOpcEdSub(subD) : '';
        if (deSub) { ed = deSub; fija = true; }
        else ed = (E.opc && E.opc.ed && E.opc.ed[tipo]) || '2024';
    }
    if (!tabs[ed]) { ed = eds[0]; fija = true; }
    if (eds.length < 2) fija = true;
    return { ed, fija, eds };
}

function snOpcSeccion(E, tipo, ed, ctx, delTipo) {
    const regla = SN_OPC_REGLAS[tipo];
    const maxD = snOpcMax(tipo, ed, ctx.mcsD);
    if (maxD == null) return null;
    const maxA = ctx.antes > 0 ? snOpcMax(tipo, ed, ctx.mcsA) : null;   // null: aún no tenía el rasgo
    const gan = Math.max(0, maxD - (maxA || 0));
    const n = delTipo.length;
    const nuevas = gan > 0 ? Math.max(0, maxD - n) : 0;
    let cambios = 0;
    if (regla.cambio && n > 0 && ctx.antes > 0 && (!regla.soloEd || regla.soloEd === ed)) {
        for (let i = 1; i <= E.nNiv; i++) {
            const prev = snOpcMax(tipo, ed, snOpcMcsNivel(E, ctx.antes + i - 1, ctx.subD)) || 0;
            const cur = snOpcMax(tipo, ed, snOpcMcsNivel(E, ctx.antes + i, ctx.subD)) || 0;
            if (prev > 0 && (regla.cambio === 'nivel' || cur > prev)) cambios++;
        }
        cambios = Math.min(cambios, n);
    }
    return { tipo, ed, maxA, maxD, gan, n, nuevas, cambios };
}

/* ¿Qué opciones de clase gana o puede cambiar la clase que sube? → { hay, secs: [...] } */
function snPlanOpciones(E) {
    if (!snOpcHay() || !E.clase) return { hay: false, secs: [] };
    const mcsA = E.mcs, mcsD = snMcsDespues(E);
    const antes = snNivelClaseAntes(E), despues = antes + E.nNiv;
    const subD = snSubclaseVigente(E);
    const elegidas = _opcElegidas(E.panel);
    const ctx = { mcsA, mcsD, antes, despues, subD };
    const secs = [];
    Object.keys(SN_OPC_REGLAS).forEach(tipo => {
        const T = DND_OPCIONES_TIPOS[tipo];
        if (!T || !(T.clases || []).includes(E.clase) || !_opcSubOk(T.sub, subD)) return;
        const delTipo = elegidas.filter(o => o.tipo === tipo);
        // En 5.5e los Pactos son invocaciones: la Dádiva del Pacto solo sale si se juega con invocaciones de 5e
        if (tipo === 'Dádiva del Pacto' && !delTipo.length) {
            const tInv = DND_OPCIONES_TIPOS['Invocación Sobrenatural'];
            const edInv = snOpcEd(E, 'Invocación Sobrenatural', tInv, elegidas.filter(o => o.tipo === 'Invocación Sobrenatural'), subD).ed;
            if (edInv !== '2014') return;
        }
        const r = snOpcEd(E, tipo, T, delTipo, subD);
        const s = snOpcSeccion(E, tipo, r.ed, ctx, delTipo);
        if (!s) return;
        s.fija = r.fija; s.eds = r.eds;
        // Las infusiones son de 5e (TCE): en 5.5e el Artificer usa Replicar Objeto Mágico. Se piden solo si la persona lo confirma
        s.dudosa = tipo === 'Infusión' && !delTipo.length;
        s.optin = !!(E.opc && E.opc.optin && E.opc.optin[tipo]);
        s.alt = !r.fija ? snOpcSeccion(E, tipo, r.eds.find(x => x !== r.ed), ctx, delTipo) : null;
        if (s.dudosa && !s.optin) { s.nuevas = 0; s.cambios = 0; }
        s.nivelD = despues;
        s.hay = s.nuevas > 0 || s.cambios > 0 || (s.dudosa && !s.optin && s.gan > 0) ||
            !!(s.alt && (s.alt.nuevas > 0 || s.alt.cambios > 0));
        if (s.hay) secs.push(s);
    });
    return { hay: secs.length > 0, secs, nivelD: despues, subD, ctx };
}

/* Elecciones del asistente: se ajustan a lo que toca (cambia la clase, los niveles, la subclase o la edición) */
function snOpcAjustar(E, plan) {
    const O = E.opc || (E.opc = { ed: {}, optin: {}, sec: {} });
    const vivos = new Set();
    plan.secs.forEach(s => {
        vivos.add(s.tipo);
        const st = O.sec[s.tipo] || (O.sec[s.tipo] = { picks: [], cambios: [] });
        st.picks.length = Math.min(st.picks.length, s.nuevas);
        while (st.cambios.length < s.cambios) st.cambios.push({ viejo: '', nuevo: [] });
        st.cambios.length = s.cambios;
    });
    Object.keys(O.sec).forEach(k => { if (!vivos.has(k)) delete O.sec[k]; });
    return O;
}

/* Opciones que puede elegir la clase en esta sección (clase, subclase, edición y nivel) */
function snOpcBase(E, plan, s) {
    return DND_OPCIONES.filter(o => o.tipo === s.tipo && _opcEdicion(o) === s.ed && (o.clases || []).includes(E.clase) &&
        _opcSubOk(o.sub, plan.subD) && (!o.nv || o.nv <= plan.nivelD));
}

/* Nombres de las opciones que tendrá la ficha al aplicar (anotadas − sustituidas + elegidas) */
function snOpcNombresFinales(E) {
    const res = _opcElegidas(E.panel).map(o => o.n);
    const O = E.opc;
    if (!O) return res;
    Object.values(O.sec).forEach(st => {
        st.cambios.forEach(c => {
            if (!(c.viejo && c.nuevo[0])) return;
            const i = res.indexOf(c.viejo); if (i >= 0) res.splice(i, 1);
            res.push(c.nuevo[0]);
        });
        st.picks.forEach(n => res.push(n));
    });
    return res;
}
/* Nombre que exige un requisito que es otra opción (un Pacto, la Hoja Sedienta) o '' */
function snOpcReqOpcion(o) { return (typeof _opcReqOpcion === 'function' ? _opcReqOpcion(o.req) : null) || ''; }
function snOpcCumpleReq(o, nombres) {
    const r = snOpcReqOpcion(o);
    return !r || nombres.some(n => _opcNorm(n).startsWith(_opcNorm(r)));
}
/* ¿Otra opción de la lista necesita a esta? (no se puede sustituir una que es requisito de otra) */
function snOpcEsRequisito(o, nombres) {
    return nombres.some(n => {
        if (n === o.n) return false;
        const x = snOpPorNombre().get(n);
        const r = x ? snOpcReqOpcion(x) : '';
        return !!r && _opcNorm(o.n).startsWith(_opcNorm(r));
    });
}

/* Quita las elecciones que ya no son válidas (se quitó el Pacto del que dependían, cambió la subclase…) */
function snOpcLimpiar(E, plan) {
    const O = E.opc; if (!O) return;
    let cambio = true, vueltas = 0;
    while (cambio && vueltas++ < 20) {
        cambio = false;
        const finales = snOpcNombresFinales(E);
        plan.secs.forEach(s => {
            const st = O.sec[s.tipo]; if (!st) return;
            const base = new Set(snOpcBase(E, plan, s).map(o => o.n));
            const ok = n => base.has(n) && snOpcCumpleReq(snOpPorNombre().get(n), finales.filter(x => x !== n));
            for (let i = st.picks.length - 1; i >= 0; i--) if (!ok(st.picks[i])) { st.picks.splice(i, 1); cambio = true; }
            st.cambios.forEach(c => {
                for (let i = c.nuevo.length - 1; i >= 0; i--) if (!ok(c.nuevo[i])) { c.nuevo.splice(i, 1); cambio = true; }
                if (c.viejo) {
                    // no se puede quitar una opción que es requisito de otra que se queda
                    const o = snOpPorNombre().get(c.viejo);
                    const resto = finales.slice();
                    const k = resto.indexOf(c.viejo); if (k >= 0) resto.splice(k, 1);
                    if (!o || snOpcEsRequisito(o, resto)) { c.viejo = ''; c.nuevo.length = 0; cambio = true; }
                }
            });
        });
    }
}

/* Candidatas de una sección: [{ o, bloq }] ordenadas.  propio: el array de elecciones de ese selector (sus elegidas siguen saliendo) */
function snOpcCandidatas(E, plan, s, propio) {
    const O = E.opc;
    const st = O.sec[s.tipo];
    const anotadas = new Set(_opcElegidas(E.panel).map(o => o.n));
    const usadas = new Set();
    const sumar = a => { if (a !== propio) a.forEach(n => usadas.add(n)); };
    sumar(st.picks); st.cambios.forEach(c => sumar(c.nuevo));
    const finales = snOpcNombresFinales(E);
    return snOpcBase(E, plan, s)
        .filter(o => o.rep || (!anotadas.has(o.n) && !usadas.has(o.n)))
        .map(o => ({ o, bloq: snOpcCumpleReq(o, finales.filter(n => n !== o.n)) ? '' : 'Requiere ' + snOpcReqOpcion(o) }))
        .sort((a, b) => _ordenES(a.o.n, b.o.n));
}

/* ═════ Selector con buscador y vista previa ═════
   cfg = { sel: [nombres] (se modifica), max, candidatos: () => [{o, bloq}], onChange: () => {}, etiqueta, buscar?: nombre => elemento } */
function snSelectorOpciones(cfg) {
    const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
    const raiz = el('div', 'sn-sp');
    const chips = el('div', 'sn-sp-chips'); raiz.appendChild(chips);
    const filtros = el('div', 'sn-sp-filtros'); raiz.appendChild(filtros);
    const q = el('input', 'ag-num sn-sp-buscar'); q.type = 'text'; q.placeholder = 'Buscar opción…'; q.autocomplete = 'off'; q.spellcheck = false;
    q.setAttribute('aria-label', 'Buscar opción' + (cfg.etiqueta ? ' (' + cfg.etiqueta + ')' : ''));
    filtros.appendChild(q);
    const selFuente = el('select', 'ag-select sn-sp-nivel'); selFuente.setAttribute('aria-label', 'Filtrar por fuente');
    const f0 = el('option', '', 'Fuente: todas'); f0.value = ''; selFuente.appendChild(f0);
    selFuente.hidden = true; filtros.appendChild(selFuente);
    const lista = el('div', 'sn-sp-lista'); lista.tabIndex = 0; lista.setAttribute('role', 'listbox');
    lista.setAttribute('aria-multiselectable', cfg.max > 1 ? 'true' : 'false'); lista.setAttribute('aria-label', 'Opciones disponibles');
    raiz.appendChild(lista);
    const nota = el('div', 'sn-sp-nota'); raiz.appendChild(nota);
    const vista = el('div', 'sn-sp-vista'); raiz.appendChild(vista);
    const pistaVista = 'Pasa el cursor o muévete con las flechas por una opción para ver su descripción. Pulsa para elegirla.';
    vista.textContent = pistaVista; vista.classList.add('vacia');

    let activo = -1, filas = [], fuentesPuestas = '';
    const completo = () => cfg.sel.length >= cfg.max;
    const buscaOp = n => (cfg.buscar ? cfg.buscar(n) : null) || snOpPorNombre().get(n);   // cfg.buscar: para elementos que no son de DND_OPCIONES (las dotes de Estilo de Combate)

    function pintarVista(it) {
        vista.textContent = '';
        if (!it) { vista.textContent = pistaVista; vista.classList.add('vacia'); return; }
        vista.classList.remove('vacia');
        const o = it.o;
        const cab = el('div', 'sn-sp-vista-cab');
        cab.appendChild(el('strong', '', snOpCorto(o.n)));
        const fu = snOpFuente(o.n); if (fu) cab.appendChild(el('span', 'opc-etq', fu));
        if (o.nv) cab.appendChild(el('span', 'opc-etq', 'Nv. ' + o.nv));
        if (o.sub) cab.appendChild(el('span', 'opc-etq', o.sub));
        const uso = o.a ? [...String(o.a).toUpperCase()].map(c => (typeof _OPC_USO !== 'undefined' ? _OPC_USO[c] : '')).filter(Boolean) : [];
        cab.appendChild(el('span', 'opc-etq', uso.length ? uso.join(' / ') : 'Pasiva'));
        if (o.rep) cab.appendChild(el('span', 'opc-etq', 'Repetible'));
        vista.appendChild(cab);
        if (o.req) vista.appendChild(el('div', 'sn-sp-vista-datos', 'Requisito: ' + o.req));
        vista.appendChild(el('div', 'sn-sp-vista-desc', o.d || ''));
        if (it.bloq) vista.appendChild(el('div', 'sn-sp-vista-datos', '⚠ ' + it.bloq + ' (elígelo antes o anótalo en el panel de opciones).'));
        if (o.rep) vista.appendChild(el('div', 'sn-sp-vista-datos', 'Repetible: cada vez con un truco o una dote distintos; anótalo en su línea del cuadro de opciones.'));
    }

    function alternar(n) {
        const i = cfg.sel.indexOf(n);
        if (i >= 0) cfg.sel.splice(i, 1);
        else if (cfg.max === 1) { cfg.sel.length = 0; cfg.sel.push(n); }
        else if (!completo()) cfg.sel.push(n);
        else return;
        cfg.onChange();
    }

    function pintarChips() {
        chips.textContent = '';
        if (!cfg.sel.length) { chips.appendChild(el('span', 'sn-sp-sinelegir', 'Ninguna elegida todavía')); return; }
        cfg.sel.slice().forEach(n => {
            const o = buscaOp(n); if (!o) return;
            const c = el('span', 'sn-sp-chip');
            const t = el('button', 'sn-sp-chip-nom', snOpCorto(n)); t.type = 'button'; t.title = 'Ver descripción';
            t.addEventListener('click', () => pintarVista({ o, bloq: '' }));
            const x = el('button', 'sn-sp-chip-x', '✕'); x.type = 'button'; x.title = 'Quitar'; x.setAttribute('aria-label', 'Quitar ' + snOpCorto(n));
            x.addEventListener('click', () => alternar(n));
            c.append(t, x); chips.appendChild(c);
        });
    }

    function ponerFuentes(todos) {
        const fu = Array.from(new Set(todos.map(it => snOpFuente(it.o.n)).filter(Boolean))).sort();
        const clave = fu.join('|');
        if (clave === fuentesPuestas) return;
        fuentesPuestas = clave;
        const prev = selFuente.value;
        while (selFuente.options.length > 1) selFuente.remove(1);
        fu.forEach(x => { const o = el('option', '', x); o.value = x; selFuente.appendChild(o); });
        selFuente.value = fu.includes(prev) ? prev : '';
        selFuente.hidden = fu.length < 2;
    }

    function pintarLista() {
        const scroll = lista.scrollTop;
        lista.textContent = ''; filas = [];
        const todos = cfg.candidatos();
        ponerFuentes(todos);
        const lleno = completo() && cfg.max > 1;
        const fuF = selFuente.value;
        const vis = todos.filter(it => (!fuF || snOpFuente(it.o.n) === fuF) &&
            (!q.value.trim() || _coincideBusq(it.o.n + ' ' + (it.o.d || ''), q.value)));
        const mostrar = vis.slice(0, SN_OP_MAX_FILAS);
        mostrar.forEach(it => {
            const sel = cfg.sel.includes(it.o.n);
            const off = (!sel && (it.bloq || lleno));
            const f = el('div', 'sn-sp-fila' + (sel ? ' sel' : '') + (off ? ' off' : ''));
            f.setAttribute('role', 'option'); f.setAttribute('aria-selected', sel ? 'true' : 'false'); if (off) f.setAttribute('aria-disabled', 'true');
            f.id = 'sn-op-' + Math.random().toString(36).slice(2, 9);
            f.dataset.nombre = it.o.n;
            f.appendChild(el('span', 'sn-sp-marca', sel ? '☑' : '☐'));
            f.appendChild(el('span', 'sn-sp-nom', snOpCorto(it.o.n)));
            const meta = [it.bloq || '', snOpFuente(it.o.n), it.o.nv ? 'Nv. ' + it.o.nv : ''].filter(Boolean).join(' · ');
            f.appendChild(el('span', 'sn-sp-meta', meta));
            if (it.o.rep) { const t = el('span', 'sn-sp-tag', '∞'); t.title = 'Repetible'; f.appendChild(t); }
            if (it.bloq) { const t = el('span', 'sn-sp-tag', '🔒'); t.title = it.bloq; f.appendChild(t); f.title = it.bloq; }
            f.addEventListener('mouseenter', () => { activo = filas.findIndex(x => x.f === f); pintarVista(it); });
            f.addEventListener('mousedown', e => e.preventDefault());
            f.addEventListener('click', () => { if (!off) alternar(it.o.n); });
            lista.appendChild(f); filas.push({ f, it });
        });
        if (!mostrar.length) lista.appendChild(el('div', 'sn-sp-vacio', todos.length ? 'Ninguna opción coincide con la búsqueda.' : 'No hay opciones disponibles con estos requisitos.'));
        nota.textContent = vis.length > mostrar.length ? `Se muestran ${mostrar.length} de ${vis.length}: afina la búsqueda o la fuente.` : (lleno ? 'Ya has elegido todas: quita una para cambiar.' : '');
        activo = Math.min(activo, filas.length - 1);
        marcar(activo, false);
        lista.scrollTop = scroll;
    }
    function marcar(i, ver) {
        filas.forEach(x => x.f.classList.remove('activa'));
        if (i < 0 || !filas[i]) { lista.removeAttribute('aria-activedescendant'); return; }
        activo = i;
        const x = filas[i]; x.f.classList.add('activa'); lista.setAttribute('aria-activedescendant', x.f.id);
        const top = x.f.offsetTop, bot = top + x.f.offsetHeight;
        if (top < lista.scrollTop) lista.scrollTop = top; else if (bot > lista.scrollTop + lista.clientHeight) lista.scrollTop = bot - lista.clientHeight;
        if (ver) pintarVista(x.it);
    }
    lista.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); marcar(Math.min(activo + 1, filas.length - 1), true); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); marcar(Math.max(activo - 1, 0), true); }
        else if (e.key === 'Home') { e.preventDefault(); marcar(0, true); }
        else if (e.key === 'End') { e.preventDefault(); marcar(filas.length - 1, true); }
        else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); const x = filas[activo]; if (x) x.f.click(); }
    });
    q.addEventListener('input', () => { activo = -1; pintarLista(); });
    q.addEventListener('keydown', e => { if (e.key === 'ArrowDown') { e.preventDefault(); lista.focus(); marcar(Math.max(activo, 0), true); } });
    selFuente.addEventListener('change', () => { activo = -1; pintarLista(); });

    const api = { el: raiz, refrescar() { pintarChips(); pintarLista(); } };
    api.refrescar();
    return api;
}

/* ═════ Aplicar a la ficha ═════ */
/* Quita del texto del panel la línea de una opción (y sus líneas de continuación). Devuelve el texto nuevo o null si no está */
function snOpcQuitarLinea(texto, nombre) {
    const L = texto.split('\n');
    const i = L.findIndex(l => { const o = _opcLineaDe(l.trim()); return !!o && o.n === nombre; });
    if (i < 0) return null;
    let j = i + 1;
    while (j < L.length && L[j].trim() !== '' && !_opcLineaDe(L[j].trim())) j++;
    L.splice(i, j - i);
    if (L[i] !== undefined && L[i].trim() === '') L.splice(i, 1);
    else if (i > 0 && L[i - 1].trim() === '') L.splice(i - 1, 1);
    return L.join('\n').replace(/^\s+|\s+$/g, '');
}

/* Aplica las elecciones. Devuelve { lineas: [texto], avisos: [texto] } */
function snAplicarOpciones(E) {
    const res = { lineas: [], avisos: [] };
    if (!E.opc) return res;
    const plan = snPlanOpciones(E);
    if (!plan.hay) return res;
    snOpcAjustar(E, plan);
    snOpcLimpiar(E, plan);
    const panel = E.panel;
    const ta = panel.querySelector('.caract-opciones');
    if (!ta) throw new Error('No encuentro el cuadro «Opciones de clase» de la ficha');
    let texto = ta.value;
    const nuevas = [];
    plan.secs.forEach(s => {
        const st = E.opc.sec[s.tipo]; if (!st) return;
        const nom = SN_OPC_REGLAS[s.tipo].nom[1];
        // 1) sustituciones: se quita la vieja
        const sust = st.cambios.filter(c => c.viejo && c.nuevo[0]);
        sust.forEach(c => {
            const t = snOpcQuitarLinea(texto, c.viejo);
            if (t == null) { res.avisos.push(`${snOpCorto(c.viejo)} no estaba anotada en el cuadro de opciones: se añadió ${snOpCorto(c.nuevo[0])} pero no se quitó nada`); }
            else texto = t;
            nuevas.push(c.nuevo[0]);
        });
        if (sust.length) res.lineas.push(`${snOpCap(nom)} sustituidas: ` + sust.map(c => `${snOpCorto(c.viejo)} → ${snOpCorto(c.nuevo[0])}`).join('; '));
        // 2) nuevas
        st.picks.forEach(n => nuevas.push(n));
        if (st.picks.length) res.lineas.push(`${snOpCap(nom)} nuevas: ` + st.picks.map(snOpCorto).join(', '));
    });
    nuevas.forEach(n => {
        const o = snOpPorNombre().get(n);
        if (!o) { res.avisos.push('Opción desconocida: ' + n); return; }
        const linea = `${o.n}: ${o.d}`;
        texto = texto.trim() ? texto.replace(/\s+$/, '') + '\n\n' + linea : linea;
    });
    ta.value = texto;
    if (typeof opcionesRefrescar === 'function') opcionesRefrescar(panel);
    if (typeof regenerarAccionesAuto === 'function') setTimeout(() => regenerarAccionesAuto(panel), 0);
    return res;
}

/* Filas del resumen: [[etiqueta, texto]] */
function snResumenOpciones(E, plan) {
    const filas = [];
    if (!plan || !plan.hay || !E.opc) return filas;
    plan.secs.forEach(s => {
        const st = E.opc.sec[s.tipo]; if (!st) return;
        const nom = SN_OPC_REGLAS[s.tipo].nom[1];
        if (s.nuevas > 0) {
            const falta = s.nuevas - st.picks.length;
            filas.push([snOpCap(nom) + ' nuevas', (st.picks.length ? st.picks.map(snOpCorto).join(', ') : 'ninguna') + (falta > 0 ? ` (faltan ${falta}, sin decidir)` : '')]);
        }
        const sust = st.cambios.filter(c => c.viejo && c.nuevo[0]);
        if (sust.length) filas.push([snOpCap(nom) + ' sustituidas', sust.map(c => `${snOpCorto(c.viejo)} → ${snOpCorto(c.nuevo[0])}`).join('; ')]);
    });
    return filas;
}

/* ═════ Paso del asistente ═════
   cuerpo: contenedor del paso · el: crea elementos · rehacer: vuelve a pintar el paso */
function snRenderOpciones(E, cuerpo, el, rehacer) {
    const plan = snPlanOpciones(E);
    snOpcAjustar(E, plan);
    snOpcLimpiar(E, plan);
    const O = E.opc;

    cuerpo.appendChild(el('p', 'ag-ayuda', `Opciones de clase de ${E.clase} (invocaciones, metamagia, maniobras…). Se anotan con su descripción en el cuadro «Opciones de clase» de Características. Puedes dejar elecciones para más tarde.`));
    const pendiente = el('div', 'ag-nota-peq sn-sp-pend');
    const refs = [];
    const estado = () => {
        const falta = [];
        plan.secs.forEach(s => {
            const st = O.sec[s.tipo]; if (!st) return;
            const f = s.nuevas - st.picks.length;
            if (f > 0) falta.push(`${f} ${SN_OPC_REGLAS[s.tipo].nom[f > 1 ? 1 : 0]}`);
            const med = st.cambios.filter(c => (c.viejo && !c.nuevo[0]) || (!c.viejo && c.nuevo[0])).length;
            if (med) falta.push(`${med} sustitución${med > 1 ? 'es' : ''} a medias (se ignoran)`);
        });
        pendiente.textContent = falta.length ? 'Pendiente de elegir: ' + falta.join(', ') + '. No bloquea: puedes continuar.' : 'Todo elegido.';
    };
    const refrescarTodas = () => { snOpcLimpiar(E, plan); refs.forEach(f => f()); estado(); };

    plan.secs.forEach(s => {
        const st = O.sec[s.tipo];
        const nom = SN_OPC_REGLAS[s.tipo].nom;
        const sec = el('div', 'ag-sec sn-sp-sec');
        const tit = el('div', 'ag-sec-tit'); tit.appendChild(document.createTextNode(snOpCap(nom[1]) + ' '));
        const cont = el('span', 'sn-sp-cont'); tit.appendChild(cont); sec.appendChild(tit);
        const info = el('div', 'sn-info');
        const edTxt = s.ed === '2024' ? '5.5e (2024)' : '5e (2014)';
        info.textContent = `${E.clase} nivel ${s.nivelD} · reglas ${edTxt} · tienes ${s.n} anotada${s.n === 1 ? '' : 's'} · te tocan ${s.maxD}` + (s.gan > 0 ? ` (+${s.gan} con esta subida)` : '');
        sec.appendChild(info);

        // Edición dudosa (nada anotado y la subclase no la indica): se pregunta
        if (!s.fija) {
            const fila = el('div', 'ag-fila-opc sn-op-ed');
            fila.appendChild(el('span', '', 'Reglas:'));
            s.eds.forEach(ed => {
                const lab = el('label', 'ag-check');
                const r = document.createElement('input'); r.type = 'radio'; r.name = 'sn-op-ed-' + s.tipo; r.checked = ed === s.ed;
                lab.append(r, el('span', '', ed === '2024' ? '5.5e (2024)' : '5e (2014 / TCE / XGtE)'));
                r.addEventListener('change', () => { if (!r.checked) return; O.ed[s.tipo] = ed; st.picks.length = 0; st.cambios.length = 0; rehacer(); });
                fila.appendChild(lab);
            });
            sec.appendChild(fila);
            if (s.nuevas === 0 && s.alt && s.alt.nuevas > 0) sec.appendChild(el('p', 'ag-nota-peq', `Con las reglas ${s.ed === '2024' ? '5.5e' : '5e'} no ganas ${nom[1]} en este nivel. Si juegas con ${s.ed === '2024' ? '5e (2014)' : '5.5e (2024)'}, ganarías ${s.alt.nuevas}: cambia las reglas aquí arriba.`));
        }

        if (s.dudosa) {
            const fila = el('div', 'ag-fila-opc');
            const lab = el('label', 'ag-check');
            const c = document.createElement('input'); c.type = 'checkbox'; c.checked = s.optin;
            lab.append(c, el('span', '', 'Mi Artificer usa Infundir Objeto (5e, TCE) en vez de Replicar Objeto Mágico'));
            c.addEventListener('change', () => { O.optin[s.tipo] = c.checked; st.picks.length = 0; st.cambios.length = 0; rehacer(); });
            fila.appendChild(lab); sec.appendChild(fila);
            if (!s.optin) { sec.appendChild(el('p', 'ag-nota-peq', 'Con las reglas 5.5e (2024) el Artificer no elige infusiones: usa Replicar Objeto Mágico, que no necesita elecciones aquí.')); cuerpo.appendChild(sec); return; }
        }

        let apiPicks = null;
        if (s.nuevas > 0) {
            sec.appendChild(el('p', 'ag-ayuda', `Elige ${s.nuevas} ${nom[s.nuevas > 1 ? 1 : 0]} de ${E.clase}.`));
            apiPicks = snSelectorOpciones({
                sel: st.picks, max: s.nuevas, etiqueta: nom[1],
                candidatos: () => snOpcCandidatas(E, plan, s, st.picks), onChange: refrescarTodas
            });
            sec.appendChild(apiPicks.el);
        } else if (s.gan > 0) {
            sec.appendChild(el('p', 'ag-nota-peq', `Ya tienes anotadas todas las que te tocan (${s.n} de ${s.maxD}).`));
        }
        refs.push(() => {
            cont.textContent = s.nuevas > 0 ? `${st.picks.length}/${s.nuevas}` : ''; cont.classList.toggle('completo', s.nuevas > 0 && st.picks.length >= s.nuevas);
            if (apiPicks) apiPicks.refrescar();
        });

        // Sustituciones (opcionales): plegadas, para que subir de nivel no cueste un clic de más
        if (s.cambios > 0) {
            const det = el('details', 'sn-op-sust');
            if (st.cambios.some(c => c.viejo)) det.open = true;
            det.appendChild(el('summary', '', `Sustituir una ${nom[0]} (opcional${s.cambios > 1 ? ', hasta ' + s.cambios : ''})`));
            const regla = SN_OPC_REGLAS[s.tipo].cambio === 'nuevas'
                ? `Al aprender ${nom[1]} nuevas puedes cambiar una que ya tengas por otra.`
                : `Al subir de nivel puedes cambiar una por otra para la que cumplas los requisitos (no una que sea requisito de otra).`;
            det.appendChild(el('p', 'ag-ayuda', regla));
            st.cambios.forEach((c, i) => {
                const blk = el('div', 'sn-op-cambio');
                const fila = el('label', 'ag-fila-opc'); fila.appendChild(el('span', '', 'Quitar:'));
                const sv = el('select', 'ag-select sn-sp-viejo'); sv.setAttribute('aria-label', 'Opción que quitas');
                fila.appendChild(sv); blk.appendChild(fila);
                blk.appendChild(el('div', 'sn-sp-sub', 'Por:'));
                const api = snSelectorOpciones({
                    sel: c.nuevo, max: 1, etiqueta: 'nueva',
                    candidatos: () => snOpcCandidatas(E, plan, s, c.nuevo), onChange: refrescarTodas
                });
                blk.appendChild(api.el);
                det.appendChild(blk);
                const pintarViejo = () => {
                    const anotadas = _opcElegidas(E.panel).filter(o => o.tipo === s.tipo);
                    const finales = snOpcNombresFinales(E);
                    const otrosViejos = new Set(st.cambios.filter(x => x !== c).map(x => x.viejo).filter(Boolean));
                    const yaVistas = new Set();
                    const opciones = anotadas.filter(o => {
                        if (yaVistas.has(o.n) || otrosViejos.has(o.n)) return false;
                        yaVistas.add(o.n);
                        return !snOpcEsRequisito(o, finales.filter(n => n !== o.n));
                    }).sort((a, b) => _ordenES(a.n, b.n));
                    sv.textContent = '';
                    const o0 = el('option', '', '— ninguna —'); o0.value = ''; sv.appendChild(o0);
                    opciones.forEach(o => { const op = el('option', '', snOpCorto(o.n) + (snOpFuente(o.n) ? ' [' + snOpFuente(o.n) + ']' : '')); op.value = o.n; sv.appendChild(op); });
                    sv.value = c.viejo; if (sv.value !== c.viejo) { c.viejo = ''; sv.value = ''; }
                };
                sv.addEventListener('change', () => { c.viejo = sv.value; refrescarTodas(); });
                refs.push(() => { pintarViejo(); api.refrescar(); });
            });
            sec.appendChild(det);
        }
        cuerpo.appendChild(sec);
    });
    cuerpo.appendChild(pendiente);
    refrescarTodas();
}
