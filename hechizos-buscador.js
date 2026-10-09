/* ══════════════════════════════════════════════════════════
   hechizos-buscador.js — Buscador, filtros y favoritos de conjuros

   Se engancha al desplegable «Añadir hechizo / cantrip» de cada nivel
   (initSpellcasting en script.js crea el desplegable; _abrirDropdown
   llama a spbAlAbrir al abrirlo).

   · Búsqueda por texto (nombre, fuente [PHB]… y, con 3+ letras, también
     descripción y daño: así se puede buscar en español, p. ej. «curar»).
   · Filtros: clase (datos en hechizos-clases.js), escuela, duración,
     concentración, ritual, componentes V/S/M y favoritos.
     Los filtros estructurados se comparten entre los desplegables de la
     misma ficha y se limpian con «Limpiar». El texto se borra al abrir.
   · Favoritos: estrella ★ en cada conjuro. Se guardan en la ficha
     (spellFavoritos) y salen los primeros de la lista.
   · Teclado: ↑ ↓ para moverse, Intro para elegir, Esc para cerrar.
   · Contador «Preparados X/Y» (spbActualizarContador).
══════════════════════════════════════════════════════════ */

const SPB_ESCUELAS = ['Abjuración', 'Adivinación', 'Conjuración', 'Encantamiento', 'Evocación', 'Ilusión', 'Nigromancia', 'Transmutación'];
const SPB_CLASES   = ['Artificer', 'Bardo', 'Brujo', 'Clérigo', 'Druida', 'Explorador', 'Hechicero', 'Mago', 'Paladín'];
const SPB_DURACIONES = [
    ['',     'Duración: todas'],
    ['inst', 'Instantáneo'],
    ['1m',   '1 turno – 1 minuto'],
    ['10m',  'Hasta 10 minutos'],
    ['1h',   'Hasta 1 hora'],
    ['8h',   '2 – 8 horas'],
    ['dia',  '1 día o más'],
    ['esp',  'Hasta disipar / especial'],
];
/* Chips: tri = true → tres estados (indiferente → con → sin); tri = false → activado / desactivado */
const SPB_CHIPS = [
    { k: 'conc',   txt: 'Conc.',  tri: true,  tip: 'Concentración' },
    { k: 'ritual', txt: 'Ritual', tri: false, tip: 'Se puede lanzar como ritual' },
    { k: 'V',      txt: 'V',      tri: true,  tip: 'Componente verbal' },
    { k: 'S',      txt: 'S',      tri: true,  tip: 'Componente somático' },
    { k: 'M',      txt: 'M',      tri: true,  tip: 'Componente material' },
    { k: 'fav',    txt: '★ Fav.', tri: false, tip: 'Solo favoritos' },
];

/* ── Metadatos calculados por conjuro (con caché) ───────────── */
const _spbCache = new Map();
function spbMeta(sp) {
    let m = _spbCache.get(sp.id);
    if (m) return m;
    const norm = s => String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const base = String(sp.components || '').split('(')[0];
    m = {
        conc:   typeof _esConcentracion === 'function' ? _esConcentracion(sp) : /conc/i.test(sp.duration || ''),
        ritual: /\(ritual\)/i.test(sp.casting || '') || /ritual/i.test(sp.extra || ''),
        V: /\bV\b/.test(base), S: /\bS\b/.test(base), M: /\bM\b/.test(base),
        dur: spbBinsDuracion(sp.duration),
        clases: (typeof HECHIZOS_CLASES !== 'undefined' && HECHIZOS_CLASES[sp.id]) || [],
        nom:  norm(sp.n),
        desc: norm((sp.desc || '') + ' ' + (sp.damage || '')),
    };
    _spbCache.set(sp.id, m);
    return m;
}

/* Duración → lista de cubos ('inst', '1m', '10m', '1h', '8h', 'dia', 'esp') */
function spbBinsDuracion(texto) {
    const t = String(texto || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const bins = [];
    if (/instant/.test(t)) bins.push('inst');
    if (/disipar|especial/.test(t)) bins.push('esp');
    const re = /(\d+)\s*(turno|min|hora|dia)/g;
    let m;
    while ((m = re.exec(t))) {
        const n = parseInt(m[1], 10);
        const min = m[2] === 'turno' ? n * 0.1 : m[2] === 'min' ? n : m[2] === 'hora' ? n * 60 : n * 1440;
        bins.push(min <= 1 ? '1m' : min <= 10 ? '10m' : min <= 60 ? '1h' : min <= 480 ? '8h' : 'dia');
    }
    if (!bins.length) bins.push('esp');
    return bins;
}

/* ── Estado por ficha ───────────────────────────────────────── */
function spbEstado(panel) {
    if (!panel._spbF) panel._spbF = spbEstadoVacio();
    return panel._spbF;
}
function spbEstadoVacio() {
    return { q: '', clase: '', escuela: '', dur: '', conc: 0, ritual: 0, V: 0, S: 0, M: 0, fav: 0 };
}
function spbFiltrosActivos(F) {
    return ['clase', 'escuela', 'dur'].filter(k => F[k]).length + ['conc', 'ritual', 'V', 'S', 'M', 'fav'].filter(k => F[k]).length;
}
function spbFavs(panel) {
    if (!panel._spbFavs) panel._spbFavs = new Set();
    return panel._spbFavs;
}
function spbLeerFavoritos(panel) { return Array.from(spbFavs(panel)); }
function spbCargarFavoritos(panel, lista) {
    panel._spbFavs = new Set(Array.isArray(lista) ? lista.filter(x => typeof x === 'string').slice(0, 1000) : []);
}

/* Clases lanzadoras del personaje, con los nombres que usa hechizos-clases.js */
function spbMisClases(panel) {
    if (typeof leerMulticlases !== 'function') return [];
    const res = new Set();
    leerMulticlases(panel).forEach(mc => {
        if (!mc.clase || _castingDe(mc) === 'none') return;
        // Caballero Arcano / Tramposo Arcano lanzan con la lista del Mago
        res.add(mc.clase === 'Guerrero' || mc.clase === 'Pícaro' ? 'Mago' : mc.clase);
    });
    return Array.from(res);
}

/* Palabra → formas con las que buscarla en la descripción («curar» también encuentra «cura») */
function spbRaices(w) { return w.length >= 5 ? [w, w.slice(0, -1)] : [w]; }

/* ── ¿Pasa el conjuro los filtros? ─────────────────────────── */
function spbPasa(sp, F, ctx) {
    const m = spbMeta(sp);
    if (ctx.clases && !m.clases.some(c => ctx.clases.includes(c))) return false;
    if (F.escuela && sp.escuela !== F.escuela) return false;
    if (F.dur && !m.dur.includes(F.dur)) return false;
    if (F.conc   && (F.conc   === 1) !== m.conc)   return false;
    if (F.ritual && !m.ritual) return false;
    for (const k of ['V', 'S', 'M']) if (F[k] && (F[k] === 1) !== m[k]) return false;
    if (F.fav && !ctx.favs.has(sp.id)) return false;
    return true;
}

/* ── Construcción de la cabecera (una vez por desplegable) ──── */
function spbPrepararDropdown(wrapper, listbox, trigger) {
    if (wrapper._spb) return;
    wrapper._spb = true;
    listbox.classList.add('sp-rico');
    listbox.innerHTML = '';

    const cab = document.createElement('div');
    cab.className = 'sp-cab';

    const inp = document.createElement('input');
    inp.type = 'text'; inp.className = 'sp-buscar'; inp.placeholder = 'Buscar conjuro…';
    inp.autocomplete = 'off'; inp.spellcheck = false;
    inp.setAttribute('aria-label', 'Buscar conjuro');
    cab.appendChild(inp);

    const fila1 = document.createElement('div'); fila1.className = 'sp-fila';
    const mkSel = (clave, etiqueta, opciones) => {
        const s = document.createElement('select');
        s.className = 'sp-sel'; s.dataset.k = clave; s.setAttribute('aria-label', etiqueta); s.title = etiqueta;
        opciones.forEach(([v, t]) => { const o = document.createElement('option'); o.value = v; o.textContent = t; s.appendChild(o); });
        fila1.appendChild(s);
        return s;
    };
    mkSel('clase', 'Filtrar por clase', [['', 'Clase: todas'], ['__mias', 'Mis clases'], ...SPB_CLASES.map(c => [c, c])]);
    mkSel('escuela', 'Filtrar por escuela', [['', 'Escuela: todas'], ...SPB_ESCUELAS.map(c => [c, c])]);
    mkSel('dur', 'Filtrar por duración', SPB_DURACIONES);
    cab.appendChild(fila1);

    const fila2 = document.createElement('div'); fila2.className = 'sp-fila sp-chips';
    SPB_CHIPS.forEach(c => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'sp-chip'; b.dataset.k = c.k; b.dataset.e = '0'; b.textContent = c.txt;
        fila2.appendChild(b);
    });
    const limpiar = document.createElement('button');
    limpiar.type = 'button'; limpiar.className = 'sp-limpiar'; limpiar.textContent = 'Limpiar';
    limpiar.title = 'Quitar todos los filtros';
    fila2.appendChild(limpiar);
    cab.appendChild(fila2);

    const info = document.createElement('div'); info.className = 'sp-info'; info.setAttribute('aria-live', 'polite');
    cab.appendChild(info);

    const lista = document.createElement('div'); lista.className = 'sp-lista'; lista.setAttribute('role', 'listbox');
    listbox.appendChild(cab);
    listbox.appendChild(lista);

    const panel = () => wrapper.closest('.ficha-panel');
    const refrescar = () => spbRender(wrapper);

    // Eventos del texto
    inp.addEventListener('input', () => { spbEstado(panel()).q = inp.value; refrescar(); });
    inp.addEventListener('click', e => e.stopPropagation());
    inp.addEventListener('keydown', e => {
        e.stopPropagation();
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); spbMover(wrapper, e.key === 'ArrowDown' ? 1 : -1); }
        else if (e.key === 'Enter') {
            e.preventDefault();
            const it = lista.querySelector('.spell-dropdown-item.sp-activo') || lista.querySelector('.spell-dropdown-item');
            if (it) { spbElegir(wrapper, it._sp); wrapper.closest('.spell-nivel-añadir')?.querySelector('.btn-spell-add')?.focus(); }
        }
        else if (e.key === 'Escape') { _cerrarDropdown(wrapper); trigger.focus(); }
    });

    // Selects de filtro
    fila1.addEventListener('change', e => {
        const k = e.target.dataset.k; if (!k) return;
        spbEstado(panel())[k] = e.target.value; refrescar();
    });
    // Chips
    fila2.addEventListener('click', e => {
        e.stopPropagation();
        const b = e.target.closest('.sp-chip');
        if (b) {
            const def = SPB_CHIPS.find(c => c.k === b.dataset.k); const F = spbEstado(panel());
            F[def.k] = def.tri ? (F[def.k] === 0 ? 1 : F[def.k] === 1 ? -1 : 0) : (F[def.k] ? 0 : 1);
            refrescar(); return;
        }
        if (e.target.closest('.sp-limpiar')) {
            const F = spbEstado(panel()); const q = F.q;
            Object.assign(F, spbEstadoVacio(), { q }); refrescar();
        }
    });
    cab.addEventListener('mousedown', e => { if (!e.target.closest('input,select')) e.preventDefault(); });

    // Elegir / marcar favorito / hover (delegación)
    lista.addEventListener('mousedown', e => {
        const it = e.target.closest('.spell-dropdown-item'); if (!it) return;
        e.preventDefault();
        if (e.target.closest('.sp-fav')) {
            const favs = spbFavs(panel()); const id = it._sp.id;
            favs.has(id) ? favs.delete(id) : favs.add(id);
            const on = favs.has(id);
            it.classList.toggle('sp-es-fav', on);
            const star = it.querySelector('.sp-fav'); star.textContent = on ? '★' : '☆'; star.setAttribute('aria-pressed', String(on));
            star.title = on ? 'Quitar de favoritos' : 'Marcar como favorito';
            if (spbEstado(panel()).fav) refrescar();   // con «solo favoritos» el conjuro desaparece
            guardarDebounced();
            return;
        }
        spbElegir(wrapper, it._sp);
    });
    lista.addEventListener('mouseover', e => {
        const it = e.target.closest('.spell-dropdown-item');
        if (it === lista._hover) return;
        lista._hover = it || null;
        if (it) spellCardShow(it._sp); else spellCardHide();
    });
    lista.addEventListener('mouseleave', () => { lista._hover = null; spellCardHide(); });
}

/* Elegir un conjuro (equivale al clic de antes: queda en el botón y se añade con «＋») */
function spbElegir(wrapper, sp) {
    const trigger = wrapper.querySelector('.spell-dropdown-trigger');
    wrapper.dataset.selectedId = sp.id;
    trigger.textContent = sp.n;
    trigger.classList.add('has-value');
    wrapper.querySelectorAll('.spell-dropdown-item.selected').forEach(i => i.classList.remove('selected'));
    wrapper.querySelectorAll('.spell-dropdown-item').forEach(i => { if (i._sp && i._sp.id === sp.id) i.classList.add('selected'); });
    _cerrarDropdown(wrapper);
    spellCardHide();
}

/* Mover el resaltado con el teclado */
function spbMover(wrapper, dir) {
    const lista = wrapper.querySelector('.sp-lista');
    const items = Array.from(lista.querySelectorAll('.spell-dropdown-item'));
    if (!items.length) return;
    let i = items.findIndex(x => x.classList.contains('sp-activo'));
    items.forEach(x => x.classList.remove('sp-activo'));
    i = i < 0 ? (dir > 0 ? 0 : items.length - 1) : Math.max(0, Math.min(items.length - 1, i + dir));
    const it = items[i];
    it.classList.add('sp-activo');
    // desplazamiento manual (scrollIntoView podría mover toda la página)
    if (it.offsetTop < lista.scrollTop) lista.scrollTop = it.offsetTop - 4;
    else if (it.offsetTop + it.offsetHeight > lista.scrollTop + lista.clientHeight) lista.scrollTop = it.offsetTop + it.offsetHeight - lista.clientHeight + 4;
    spellCardShow(it._sp);
}

/* ── Pintar la lista según los filtros ──────────────────────── */
function spbRender(wrapper) {
    const panel = wrapper.closest('.ficha-panel'); if (!panel) return;
    const nivel = parseInt(wrapper.dataset.nivel, 10);
    const F = spbEstado(panel), favs = spbFavs(panel);
    const lista = wrapper.querySelector('.sp-lista'), cab = wrapper.querySelector('.sp-cab');
    const spells = (typeof DND_SPELLS !== 'undefined' && DND_SPELLS[nivel]) || [];

    // Cabecera ← estado
    cab.querySelector('.sp-buscar').value = F.q;
    cab.querySelectorAll('.sp-sel').forEach(s => { s.value = F[s.dataset.k]; s.classList.toggle('sp-sel-on', !!F[s.dataset.k]); });
    cab.querySelectorAll('.sp-chip').forEach(b => {
        const def = SPB_CHIPS.find(c => c.k === b.dataset.k), v = F[def.k];
        b.dataset.e = String(v);
        b.setAttribute('aria-pressed', v === 0 ? 'false' : 'true');
        const est = v === 0 ? 'indiferente' : v === 1 ? (def.tri ? 'solo con' : 'activado') : 'solo sin';
        b.title = `${def.tip}: ${est}` + (def.tri ? ' (clic para cambiar: indiferente → con → sin)' : '');
        b.setAttribute('aria-label', b.title);
    });
    const nAct = spbFiltrosActivos(F);
    const bl = cab.querySelector('.sp-limpiar');
    bl.disabled = nAct === 0; bl.textContent = nAct ? `Limpiar (${nAct})` : 'Limpiar';
    wrapper.classList.toggle('sp-con-filtros', nAct > 0);

    // Filtrado
    const ctx = {
        favs,
        clases: F.clase === '__mias' ? (spbMisClases(panel).length ? spbMisClases(panel) : null) : (F.clase ? [F.clase] : null),
    };
    const consulta = _normBusq(F.q).trim();
    const palabras = consulta.split(/\s+/).filter(Boolean);
    const conDesc = consulta.length >= 3;
    let res = [];
    spells.forEach((sp, idx) => {
        if (!spbPasa(sp, F, ctx)) return;
        let rango = 0;                       // 0 = sin texto · 1 = coincide por nombre · 2 = por descripción
        if (palabras.length) {
            const m = spbMeta(sp);
            if (palabras.every(w => m.nom.includes(w))) rango = 1;
            else if (conDesc && palabras.every(w => m.nom.includes(w) || spbRaices(w).some(r => m.desc.includes(r)))) rango = 2;
            else return;
        }
        res.push({ sp, idx, rango, fav: favs.has(sp.id) ? 0 : 1 });
    });
    res.sort((a, b) => (a.rango - b.rango) || (a.fav - b.fav) || (a.idx - b.idx));

    // Pintado
    const bloque = wrapper.closest('.spell-nivel-bloque');
    const yaEn = new Set(Array.from(bloque?.querySelectorAll('.spell-lista-hechizos .spell-entry') || []).map(e => e.dataset.spellId));
    const selId = wrapper.dataset.selectedId;
    const frag = document.createDocumentFragment();
    let ultimoFav = -1;
    res.forEach((r, i) => { if (r.fav === 0 && !palabras.length) ultimoFav = i; });
    res.forEach((r, i) => {
        const sp = r.sp, m = spbMeta(sp);
        const it = document.createElement('div');
        it.className = 'spell-dropdown-item' + (r.fav === 0 ? ' sp-es-fav' : '') + (sp.id === selId ? ' selected' : '') + (i === ultimoFav ? ' sp-fin-favs' : '');
        it.dataset.spellId = sp.id; it._sp = sp; it.setAttribute('role', 'option');
        const star = document.createElement('span');
        star.className = 'sp-fav'; star.textContent = r.fav === 0 ? '★' : '☆';
        star.setAttribute('role', 'button'); star.setAttribute('aria-pressed', String(r.fav === 0));
        star.title = r.fav === 0 ? 'Quitar de favoritos' : 'Marcar como favorito';
        const nom = document.createElement('span'); nom.className = 'sp-nom'; nom.textContent = sp.n;
        const tags = document.createElement('span'); tags.className = 'sp-tags';
        const tag = (cls, txt, tip) => { const t = document.createElement('span'); t.className = 'sp-tag ' + cls; t.textContent = txt; t.title = tip; tags.appendChild(t); };
        if (r.rango === 2) tag('sp-t-desc', 'desc.', 'Coincide en la descripción');
        if (m.conc) tag('sp-t-c', 'C', 'Concentración');
        if (m.ritual) tag('sp-t-r', 'R', 'Ritual');
        if (yaEn.has(sp.id)) tag('sp-t-ya', '✓', 'Ya está en tu lista');
        it.append(star, nom, tags);
        frag.appendChild(it);
    });
    lista.replaceChildren(frag);
    lista.scrollTop = 0;
    lista._hover = null;

    const info = cab.querySelector('.sp-info');
    info.textContent = res.length === spells.length && !nAct && !palabras.length
        ? `${spells.length} conjuros`
        : `${res.length} de ${spells.length} conjuros` + (res.length ? '' : ' — prueba a quitar algún filtro');
}

/* Espacio libre sobre y bajo el desplegable, descontando los contenedores que recortan (overflow) */
function spbEspacio(wrapper) {
    const r = wrapper.getBoundingClientRect();
    let techo = 0, suelo = window.innerHeight;
    for (let el = wrapper.parentElement; el && el !== document.body; el = el.parentElement) {
        if (/(hidden|auto|scroll|clip)/.test(getComputedStyle(el).overflowY)) {
            const b = el.getBoundingClientRect();
            techo = Math.max(techo, b.top); suelo = Math.min(suelo, b.bottom);
        }
    }
    const k = wrapper.offsetWidth ? r.width / wrapper.offsetWidth : 1;   // por si la ficha está escalada
    return { arriba: (r.top - techo) / k, abajo: (suelo - r.bottom) / k };
}

/* Abre hacia donde haya más sitio y ajusta la altura de la lista para que no se recorte */
function spbColocar(wrapper) {
    const listbox = wrapper.querySelector('.spell-dropdown-listbox');
    const cab = wrapper.querySelector('.sp-cab'), lista = wrapper.querySelector('.sp-lista');
    if (!listbox || !cab || !lista) return;
    const { arriba, abajo } = spbEspacio(wrapper);
    const cabH = cab.offsetHeight + 8;
    const ideal = cabH + 230;
    const hacia = abajo >= ideal || abajo >= arriba ? 'abajo' : 'arriba';
    const sitio = (hacia === 'abajo' ? abajo : arriba) - 12;
    lista.style.maxHeight = Math.max(110, Math.min(230, sitio - cabH)) + 'px';
    if (hacia === 'abajo') { listbox.style.top = '100%'; listbox.style.bottom = 'auto'; }
    else { listbox.style.top = 'auto'; listbox.style.bottom = '100%'; }
}

/* Llamado desde _abrirDropdown */
function spbAlAbrir(wrapper) {
    const panel = wrapper.closest('.ficha-panel'); if (!panel) return;
    spbEstado(panel).q = '';
    spbRender(wrapper);
    spbColocar(wrapper);
    const inp = wrapper.querySelector('.sp-buscar');
    if (inp) inp.focus({ preventScroll: true });
}

/* ══════════════════════════════════════════════════════════════
   Contador «Preparados X/Y»
   X = conjuros de nivel 1+ marcados como preparados (los trucos no cuentan)
   Y = suma de los límites de «Preparados» de todas las clases lanzadoras
══════════════════════════════════════════════════════════════ */
function spbContarPreparados(panel) {
    return panel.querySelectorAll('.spell-nivel-bloque:not([data-nivel="0"]) .spell-prep-chk:checked').length;
}
function spbMaxPreparados(panel) {
    let y = 0;
    panel.querySelectorAll('.spell-prep-bloque input').forEach(inp => { y += parseInt(inp.value, 10) || 0; });
    return y;
}
function spbActualizarContador(panel) {
    if (!panel) return;
    const el = panel.querySelector('.spell-prep-resumen');
    if (!el) return;
    const x = spbContarPreparados(panel), y = spbMaxPreparados(panel);
    el.querySelector('.prep-x').textContent = x;
    el.querySelector('.prep-y').textContent = y;
    el.classList.toggle('prep-lleno', y > 0 && x === y);
    el.classList.toggle('prep-excedido', x > y);
    el.title = x > y
        ? `Tienes ${x - y} conjuro(s) preparado(s) de más: desmarca alguno o sube el límite.`
        : 'Conjuros preparados / máximo (suma de todas tus clases). Los trucos no cuentan.';
}
