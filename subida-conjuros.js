/* ═══════════════════════════════════════════════════════════════
   subida-conjuros.js — Conjuros dentro del asistente de subida de nivel

   Qué hace
   · Calcula qué gana la clase que sube (trucos, conjuros preparados, libro del
     Mago, nivel máximo de conjuro, sustituciones permitidas al subir) con las
     mismas tablas que usa la ficha (CANTRIPS_CONOCIDOS, HECHIZOS_PREPARADOS_2024).
   · Ofrece un buscador de conjuros filtrado por la lista de la clase y por el
     nivel máximo que ya se puede lanzar, con la descripción a la vista.
   · Añade a la ficha los conjuros elegidos (preparados si toca) y quita los sustituidos.

   Depende de: script.js (CANTRIPS_CONOCIDOS, HECHIZOS_PREPARADOS_2024, SLOTS_POR_NIVEL,
   WARLOCK_SLOTS, _castingDe, calcNivelEfectivoSpell, _nivelMaxHechizo, _renderSpellEntry,
   _esConcentracion, regenerarAccionesAuto), hechizos-clases.js (HECHIZOS_CLASES),
   caracteristicas.js (DND_SPELLS, _ordenES, _coincideBusq), subida-nivel.js (snMcActual…).
═══════════════════════════════════════════════════════════════ */

/* Reglas 2024 (texto de «Lanzamiento de Conjuros» de cada clase): al SUBIR de nivel se puede sustituir… */
const SN_SUST_TRUCO = ['Bardo', 'Brujo', 'Hechicero', 'Clérigo', 'Druida'];   // un truco por nivel
const SN_SUST_PREP  = ['Bardo', 'Brujo', 'Hechicero'];                        // un conjuro preparado por nivel
const SN_SP_MAX_FILAS = 120;

/* Lista de conjuros de la clase (Caballero Arcano y Tramposo Arcano usan la de Mago) */
function snListaConjuros(clase) { return (clase === 'Guerrero' || clase === 'Pícaro') ? 'Mago' : clase; }

/* Índice id → { sp, nv } de todos los conjuros */
let _snSpIdx = null;
function snIdxConjuros() {
    if (_snSpIdx) return _snSpIdx;
    _snSpIdx = new Map();
    Object.keys(DND_SPELLS).forEach(k => (DND_SPELLS[k] || []).forEach(sp => _snSpIdx.set(sp.id, { sp, nv: parseInt(k) })));
    return _snSpIdx;
}

/* Nivel máximo de conjuro que da un conjunto de clases [{clase, nivel, subclase}] (espacios normales + Magia de Pacto) */
function snNivelMaxConjuro(mcs) {
    const lanz = mcs.filter(m => m.clase && _castingDe(m) !== 'none');
    if (!lanz.length) return 0;
    let max = _nivelMaxHechizo(calcNivelEfectivoSpell(mcs));
    const w = mcs.find(m => m.clase && _getClaseData(m.clase).casting === 'warlock');
    if (w) max = Math.max(max, WARLOCK_SLOTS[Math.min(Math.max(parseInt(w.nivel) - 1, 0), 19)][1] + 1);
    return max;
}

/* Clases tal como quedarán tras la subida */
function snMcsDespues(E) {
    const sub = snSubclaseVigente(E);
    const out = E.mcs.map(m => m.clase === E.clase
        ? { clase: m.clase, nivel: m.nivel + E.nNiv, subclase: m.subclase || sub }
        : { clase: m.clase, nivel: m.nivel, subclase: m.subclase });
    if (!E.mcs.some(m => m.clase === E.clase)) out.push({ clase: E.clase, nivel: E.nNiv, subclase: sub });
    return out;
}

/* Espacios de conjuro tras la subida, como texto («1.º 4 · 2.º 3 · Pacto: 2 de 3.º») */
function snEspaciosTexto(E) {
    const mcs = snMcsDespues(E);
    const ef = calcNivelEfectivoSpell(mcs);
    const partes = [];
    if (ef > 0) {
        SLOTS_POR_NIVEL[Math.min(ef, 20) - 1].forEach((n, i) => { if (n > 0) partes.push(`${i + 1}.º ×${n}`); });
    }
    const w = mcs.find(m => m.clase && _getClaseData(m.clase).casting === 'warlock');
    if (w) {
        const [n, nv] = WARLOCK_SLOTS[Math.min(Math.max(parseInt(w.nivel) - 1, 0), 19)];
        partes.push(`Pacto: ${n} de ${nv + 1}.º`);
    }
    return partes.join(' · ');
}

/* ¿Qué gana la clase que sube? */
function snPlanConjuros(E) {
    const clase = E.clase;
    if (!clase || typeof _castingDe !== 'function' || typeof CANTRIPS_CONOCIDOS === 'undefined') return { hay: false };
    const antes = snNivelClaseAntes(E), despues = antes + E.nNiv;
    const mc = snMcActual(E);
    const subA = mc ? mc.subclase : '', subD = snSubclaseVigente(E);
    const castA = antes ? _castingDe({ clase, nivel: antes, subclase: subA }) : 'none';
    const castD = _castingDe({ clase, nivel: despues, subclase: subD });
    if (castD === 'none') return { hay: false };
    const val = (tabla, nv, cast) => (nv > 0 && cast !== 'none') ? ((tabla[clase] || [])[Math.min(nv, 20) - 1] || 0) : 0;
    const trucos = Math.max(0, val(CANTRIPS_CONOCIDOS, despues, castD) - val(CANTRIPS_CONOCIDOS, antes, castA));
    const prep = Math.max(0, val(HECHIZOS_PREPARADOS_2024, despues, castD) - val(HECHIZOS_PREPARADOS_2024, antes, castA));
    const libro = clase === 'Mago' ? (antes === 0 ? 6 + 2 * (E.nNiv - 1) : 2 * E.nNiv) : 0;
    const maxA = snNivelMaxConjuro(E.mcs), maxD = snNivelMaxConjuro(snMcsDespues(E));
    const cambTruco = (SN_SUST_TRUCO.includes(clase) && antes > 0) ? E.nNiv : 0;
    const cambPrep = (SN_SUST_PREP.includes(clase) && antes > 0) ? E.nNiv : 0;
    return {
        hay: trucos > 0 || prep > 0 || libro > 0 || cambTruco > 0 || cambPrep > 0,
        clase, lista: snListaConjuros(clase), castD, antes, despues,
        trucos, prep, libro, maxA, maxD, cambTruco, cambPrep,
        mago: clase === 'Mago',
    };
}

/* Conjuros que ya hay en la ficha: id → { nivel, prep, el } */
function snConjurosFicha(panel) {
    const m = new Map();
    panel.querySelectorAll('.spell-nivel-bloque').forEach(b => {
        const nv = parseInt(b.dataset.nivel);
        b.querySelectorAll('.spell-entry[data-spell-id]').forEach(en => {
            m.set(en.dataset.spellId, { nivel: nv, prep: !!en.querySelector('.spell-prep-chk')?.checked, el: en });
        });
    });
    return m;
}

/* Elecciones del asistente: se ajustan a lo que toca (si cambia la clase, los niveles o la subclase) */
function snConjAjustar(E, plan) {
    const c = E.conj || (E.conj = { trucos: [], libro: [], prep: [], cT: [], cP: [] });
    c.trucos.length = Math.min(c.trucos.length, plan.trucos);
    c.libro.length = Math.min(c.libro.length, plan.libro);
    c.prep.length = Math.min(c.prep.length, plan.prep);
    while (c.cT.length < plan.cambTruco) c.cT.push({ viejo: '', nuevo: [] });
    c.cT.length = plan.cambTruco;
    while (c.cP.length < plan.cambPrep) c.cP.push({ viejo: '', nuevo: [] });
    c.cP.length = plan.cambPrep;
    return c;
}
/* Todos los ids ya elegidos en cualquier sección (salvo los arrays indicados) */
function snConjUsados(E, ...salvos) {
    const c = E.conj; const s = new Set();
    if (!c) return s;
    const ok = a => !salvos.includes(a);
    [c.trucos, c.libro, c.prep].forEach(a => { if (ok(a)) a.forEach(i => s.add(i)); });
    [c.cT, c.cP].forEach(arr => arr.forEach(f => { if (ok(f.nuevo)) f.nuevo.forEach(i => s.add(i)); }));
    return s;
}

/* Candidatos de una sección: [{ sp, nv }] ordenados por nivel y nombre.
   cual: 'truco' | 'libro' | 'prep' | 'prepMago'; propio: el array de elecciones de esa sección (sus elegidos siguen saliendo) */
function snCandidatosConjuros(E, plan, cual, propio) {
    const ficha = snConjurosFicha(E.panel);
    const c = E.conj;
    const deClase = (id) => (HECHIZOS_CLASES[id] || []).includes(plan.lista);
    const out = [];
    const push = (id) => { const it = snIdxConjuros().get(id); if (it) out.push(it); };
    if (cual === 'truco') {
        const usados = snConjUsados(E, propio);
        (DND_SPELLS[0] || []).forEach(sp => { if (deClase(sp.id) && !ficha.has(sp.id) && !usados.has(sp.id)) push(sp.id); });
    } else if (cual === 'prepMago') {
        // el Mago prepara de su libro: lo que ya tiene sin preparar + lo que añade ahora
        const usados = snConjUsados(E, propio, c.libro);
        ficha.forEach((f, id) => { if (f.nivel >= 1 && f.nivel <= plan.maxD && !f.prep && !usados.has(id)) push(id); });
        c.libro.forEach(id => { if (!usados.has(id)) push(id); });
    } else if (cual === 'libro') {
        const usados = snConjUsados(E, propio, c.prep);   // lo que se prepara sale del libro: no cuenta como «ya elegido»
        for (let nv = 1; nv <= plan.maxD; nv++) (DND_SPELLS[nv] || []).forEach(sp => { if (deClase(sp.id) && !ficha.has(sp.id) && !usados.has(sp.id)) push(sp.id); });
    } else {   // 'prep': lista de la clase hasta el nivel máximo, sin los que ya están preparados
        const usados = snConjUsados(E, propio);
        for (let nv = 1; nv <= plan.maxD; nv++) (DND_SPELLS[nv] || []).forEach(sp => {
            const f = ficha.get(sp.id);
            if (deClase(sp.id) && !(f && f.prep) && !usados.has(sp.id)) push(sp.id);
        });
    }
    const vistos = new Set();
    return out.filter(x => !vistos.has(x.sp.id) && vistos.add(x.sp.id))
        .sort((a, b) => a.nv - b.nv || _ordenES(a.sp.n, b.sp.n));
}

/* ═════ Selector con buscador y vista previa ═════
   cfg = { max, nivelMin, nivelMax, candidatos: () => [{sp,nv}], sel: [ids] (se modifica), onChange: () => {}, etiqueta } */
function snSelectorConjuros(cfg) {
    const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
    const raiz = el('div', 'sn-sp');
    const chips = el('div', 'sn-sp-chips'); raiz.appendChild(chips);
    const filtros = el('div', 'sn-sp-filtros'); raiz.appendChild(filtros);
    const q = el('input', 'ag-num sn-sp-buscar'); q.type = 'text'; q.placeholder = 'Buscar conjuro…'; q.autocomplete = 'off'; q.spellcheck = false;
    q.setAttribute('aria-label', 'Buscar conjuro' + (cfg.etiqueta ? ' (' + cfg.etiqueta + ')' : ''));
    filtros.appendChild(q);
    let selNv = null;
    if (cfg.nivelMax > cfg.nivelMin) {
        selNv = el('select', 'ag-select sn-sp-nivel'); selNv.setAttribute('aria-label', 'Filtrar por nivel de conjuro');
        const o0 = el('option', '', 'Nivel: todos'); o0.value = ''; selNv.appendChild(o0);
        for (let n = cfg.nivelMin; n <= cfg.nivelMax; n++) { const o = el('option', '', 'Nivel ' + n); o.value = String(n); selNv.appendChild(o); }
        filtros.appendChild(selNv);
    }
    const selEsc = el('select', 'ag-select sn-sp-escuela'); selEsc.setAttribute('aria-label', 'Filtrar por escuela');
    const e0 = el('option', '', 'Escuela: todas'); e0.value = ''; selEsc.appendChild(e0);
    (typeof SPB_ESCUELAS !== 'undefined' ? SPB_ESCUELAS : []).forEach(x => { const o = el('option', '', x); o.value = x; selEsc.appendChild(o); });
    filtros.appendChild(selEsc);
    const lista = el('div', 'sn-sp-lista'); lista.tabIndex = 0; lista.setAttribute('role', 'listbox');
    lista.setAttribute('aria-multiselectable', cfg.max > 1 ? 'true' : 'false'); lista.setAttribute('aria-label', 'Conjuros disponibles');
    raiz.appendChild(lista);
    const nota = el('div', 'sn-sp-nota'); raiz.appendChild(nota);
    const vista = el('div', 'sn-sp-vista'); raiz.appendChild(vista);
    const pistaVista = 'Pasa el cursor o muévete con las flechas por un conjuro para ver su descripción. Pulsa para elegirlo.';
    vista.textContent = pistaVista; vista.classList.add('vacia');

    let activo = -1, filas = [];
    const completo = () => cfg.sel.length >= cfg.max;

    function pintarVista(it) {
        vista.textContent = '';
        if (!it) { vista.textContent = pistaVista; vista.classList.add('vacia'); return; }
        vista.classList.remove('vacia');
        const sp = it.sp;
        const cab = el('div', 'sn-sp-vista-cab');
        cab.appendChild(el('strong', '', sp.n));
        cab.appendChild(el('span', 'opc-etq', it.nv === 0 ? 'Truco' : 'Nivel ' + it.nv));
        if (sp.escuela) cab.appendChild(el('span', 'opc-etq', sp.escuela));
        if (typeof _esConcentracion === 'function' && _esConcentracion(sp)) cab.appendChild(el('span', 'opc-etq', 'Concentración'));
        if (/ritual/i.test(sp.casting || '') || /ritual/i.test(sp.extra || '')) cab.appendChild(el('span', 'opc-etq', 'Ritual'));
        vista.appendChild(cab);
        vista.appendChild(el('div', 'sn-sp-vista-datos', [sp.casting, sp.range, sp.components, sp.duration].filter(Boolean).join(' · ')));
        vista.appendChild(el('div', 'sn-sp-vista-desc', sp.desc || ''));
        if (sp.damage) vista.appendChild(el('div', 'sn-sp-vista-datos', 'Daño: ' + sp.damage));
        if (sp.extra) vista.appendChild(el('div', 'sn-sp-vista-datos', sp.extra));
    }

    function alternar(id) {
        const i = cfg.sel.indexOf(id);
        if (i >= 0) cfg.sel.splice(i, 1);
        else if (cfg.max === 1) { cfg.sel.length = 0; cfg.sel.push(id); }
        else if (!completo()) cfg.sel.push(id);
        else return;
        cfg.onChange();
    }

    function pintarChips() {
        chips.textContent = '';
        const ids = cfg.sel.slice();
        if (!ids.length) { chips.appendChild(el('span', 'sn-sp-sinelegir', cfg.max === 1 ? 'Ninguno elegido todavía' : 'Ninguno elegido todavía')); return; }
        ids.forEach(id => {
            const it = snIdxConjuros().get(id); if (!it) return;
            const c = el('span', 'sn-sp-chip');
            const t = el('button', 'sn-sp-chip-nom', it.sp.n); t.type = 'button'; t.title = 'Ver descripción';
            t.addEventListener('click', () => pintarVista(it));
            const x = el('button', 'sn-sp-chip-x', '✕'); x.type = 'button'; x.title = 'Quitar'; x.setAttribute('aria-label', 'Quitar ' + it.sp.n);
            x.addEventListener('click', () => alternar(id));
            c.append(t, x); chips.appendChild(c);
        });
    }

    function pintarLista() {
        const scroll = lista.scrollTop;
        lista.textContent = ''; filas = [];
        const todos = cfg.candidatos();
        const lleno = completo() && cfg.max > 1;
        const nvF = selNv && selNv.value !== '' ? parseInt(selNv.value) : null;
        const escF = selEsc.value;
        let vis = todos.filter(it => (nvF == null || it.nv === nvF) && (!escF || it.sp.escuela === escF) && (!q.value.trim() || _coincideBusq(it.sp.n + ' ' + (it.sp.escuela || ''), q.value)));
        // los elegidos que ya no son candidatos (están en cfg.sel) se muestran siempre arriba
        const total = vis.length;
        const mostrar = vis.slice(0, SN_SP_MAX_FILAS);
        mostrar.forEach(it => {
            const sel = cfg.sel.includes(it.sp.id);
            const f = el('div', 'sn-sp-fila' + (sel ? ' sel' : '') + (lleno && !sel ? ' off' : ''));
            f.setAttribute('role', 'option'); f.setAttribute('aria-selected', sel ? 'true' : 'false'); if (lleno && !sel) f.setAttribute('aria-disabled', 'true');
            f.id = 'sn-sp-' + it.sp.id + '-' + Math.random().toString(36).slice(2, 7);
            f.dataset.id = it.sp.id;
            f.appendChild(el('span', 'sn-sp-marca', sel ? '☑' : '☐'));
            f.appendChild(el('span', 'sn-sp-nom', it.sp.n));
            const meta = [it.nv === 0 ? 'Truco' : 'Nv. ' + it.nv, it.sp.escuela].filter(Boolean).join(' · ');
            f.appendChild(el('span', 'sn-sp-meta', meta));
            if (typeof _esConcentracion === 'function' && _esConcentracion(it.sp)) { const t = el('span', 'sn-sp-tag', 'C'); t.title = 'Concentración'; f.appendChild(t); }
            if (/ritual/i.test(it.sp.casting || '')) { const t = el('span', 'sn-sp-tag', 'R'); t.title = 'Ritual'; f.appendChild(t); }
            f.addEventListener('mouseenter', () => { activo = filas.findIndex(x => x.f === f); pintarVista(it); });
            f.addEventListener('mousedown', e => e.preventDefault());
            f.addEventListener('click', () => { if (!(lleno && !sel)) alternar(it.sp.id); });
            lista.appendChild(f); filas.push({ f, it });
        });
        if (!mostrar.length) lista.appendChild(el('div', 'sn-sp-vacio', todos.length ? 'Ningún conjuro coincide con la búsqueda.' : 'No hay conjuros disponibles con estos requisitos.'));
        nota.textContent = total > mostrar.length ? `Se muestran ${mostrar.length} de ${total}: afina la búsqueda o los filtros.` : (lleno ? 'Ya has elegido todos: quita uno para cambiar.' : '');
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
    if (selNv) selNv.addEventListener('change', () => { activo = -1; pintarLista(); });
    selEsc.addEventListener('change', () => { activo = -1; pintarLista(); });

    const api = {
        el: raiz,
        refrescar() { pintarChips(); pintarLista(); },
    };
    api.refrescar();
    return api;
}

/* ═════ Aplicar a la ficha ═════ */
/* Añade un conjuro a su nivel; si preparar, lo marca como preparado. Devuelve 'ok' | 'limite' */
function snAnadirConjuroFicha(panel, id, preparar) {
    const it = snIdxConjuros().get(id);
    if (!it) throw new Error('Conjuro desconocido: ' + id);
    const bloque = panel.querySelector(`.spell-nivel-bloque[data-nivel="${it.nv}"]`);
    const lista = bloque && bloque.querySelector('.spell-lista-hechizos');
    if (!lista) throw new Error(`No hay bloque de conjuros de nivel ${it.nv} en la ficha`);
    let en = lista.querySelector(`[data-spell-id="${id}"]`);
    if (!en) { _renderSpellEntry(lista, it.sp); en = lista.querySelector(`[data-spell-id="${id}"]`); }
    if (preparar && it.nv > 0) {
        const chk = en && en.querySelector('.spell-prep-chk');
        if (chk && !chk.checked) {
            chk.checked = true;
            chk.dispatchEvent(new Event('change', { bubbles: true }));
            if (!chk.checked) return 'limite';
        }
    }
    return 'ok';
}

/* Aplica todas las elecciones de conjuros. Devuelve { lineas: [texto], avisos: [texto] } */
function snAplicarConjuros(E) {
    const panel = E.panel;
    const res = { lineas: [], avisos: [] };
    if (!E.conj) return res;
    const plan = snPlanConjuros(E);
    if (!plan.hay) return res;
    const c = snConjAjustar(E, plan);
    const nom = id => (snIdxConjuros().get(id) || { sp: { n: id } }).sp.n;
    const ficha0 = snConjurosFicha(panel);

    // Sustituciones primero (quitan los viejos para que cuenten bien los límites)
    const sust = [];
    c.cT.forEach(f => { if (f.viejo && f.nuevo[0]) sust.push({ viejo: f.viejo, nuevo: f.nuevo[0], prep: false }); });
    c.cP.forEach(f => { if (f.viejo && f.nuevo[0]) sust.push({ viejo: f.viejo, nuevo: f.nuevo[0], prep: true }); });
    sust.forEach(s => {
        const f = ficha0.get(s.viejo);
        if (f && f.el && f.el.parentNode) f.el.remove();
    });
    if (typeof spbActualizarContador === 'function') spbActualizarContador(panel);
    sust.forEach(s => {
        const r = snAnadirConjuroFicha(panel, s.nuevo, s.prep);
        res.lineas.push(`${nom(s.viejo)} → ${nom(s.nuevo)}`);
        if (r === 'limite') res.avisos.push(`${nom(s.nuevo)} se añadió pero no se pudo marcar como preparado (límite de preparados)`);
    });

    const lote = (ids, preparar, etq) => {
        ids.forEach(id => {
            const r = snAnadirConjuroFicha(panel, id, preparar);
            if (r === 'limite') res.avisos.push(`${nom(id)} se añadió pero no se pudo marcar como preparado (límite de preparados)`);
        });
        if (ids.length) res.lineas.push(`${etq}: ${ids.map(nom).join(', ')}`);
    };
    lote(c.trucos, false, 'Trucos');
    lote(c.libro, false, 'Libro de conjuros');
    lote(c.prep, true, 'Preparados');

    if (typeof spbActualizarContador === 'function') spbActualizarContador(panel);
    if (typeof regenerarAccionesAuto === 'function') setTimeout(() => regenerarAccionesAuto(panel), 0);
    return res;
}

/* Filas del resumen: [[etiqueta, texto]] */
function snResumenConjuros(E, plan) {
    const c = E.conj; const filas = [];
    if (!plan || !plan.hay) return filas;
    const nom = id => (snIdxConjuros().get(id) || { sp: { n: id } }).sp.n;
    const pen = (n, hechos) => n > hechos ? ` (faltan ${n - hechos}, sin decidir)` : '';
    const lista = (ids) => ids.length ? ids.map(nom).join(', ') : 'ninguno';
    if (plan.trucos) filas.push(['Trucos nuevos', lista(c ? c.trucos : []) + pen(plan.trucos, c ? c.trucos.length : 0)]);
    if (plan.libro) filas.push(['Libro de conjuros', lista(c ? c.libro : []) + pen(plan.libro, c ? c.libro.length : 0)]);
    if (plan.prep) filas.push(['Conjuros preparados nuevos', lista(c ? c.prep : []) + pen(plan.prep, c ? c.prep.length : 0)]);
    const sT = c ? c.cT.filter(f => f.viejo && f.nuevo[0]) : [];
    const sP = c ? c.cP.filter(f => f.viejo && f.nuevo[0]) : [];
    if (sT.length) filas.push(['Trucos sustituidos', sT.map(f => `${nom(f.viejo)} → ${nom(f.nuevo[0])}`).join('; ')]);
    if (sP.length) filas.push(['Conjuros sustituidos', sP.map(f => `${nom(f.viejo)} → ${nom(f.nuevo[0])}`).join('; ')]);
    if (plan.maxD !== plan.maxA) filas.push(['Nivel máximo de conjuro', `${plan.maxA || '–'} → ${plan.maxD}`]);
    const esp = snEspaciosTexto(E);
    if (esp) filas.push(['Espacios de conjuro', esp]);
    return filas;
}
