/* ═══════════════════════════════════════════════════════════════
   caracteristicas.js — Ensamblador de datos + UI de características
   Depende de (cargados antes en index.html):
     barbaro.js · bardo.js · brujo.js · clerigo.js · druida.js
     explorador.js · guerrero.js · hechicero.js · mago.js · monje.js
     paladin.js · picaro.js · artificer.js · bloodhunter.js
     especies.js · dotes.js · trasfondos.js
     hechizos-nivel-0.js … hechizos-nivel-9.js
═══════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════
   1. ENSAMBLAR DND_CLASES
   Cada archivo de clase exporta su constante CLASE_X con la forma:
   { rasgos: [{n, nv, d}], subclases: { "Nombre [Fuente]": [{n,nv,d}] } }
══════════════════════════════════════════════════════════════ */
const DND_CLASES = {};

// Registro seguro: solo asigna si la constante existe en el contexto global
(function ensamblarClases() {
    const mapa = {
        'Artificer':    typeof CLASE_ARTIFICER    !== 'undefined' ? CLASE_ARTIFICER    : null,
        'Bárbaro':      typeof CLASE_BARBARO      !== 'undefined' ? CLASE_BARBARO      : null,
        'Bardo':        typeof CLASE_BARDO        !== 'undefined' ? CLASE_BARDO        : null,
        'Blood Hunter': typeof CLASE_BLOODHUNTER  !== 'undefined' ? CLASE_BLOODHUNTER  : null,
        'Brujo':        typeof CLASE_BRUJO        !== 'undefined' ? CLASE_BRUJO        : null,
        'Clérigo':      typeof CLASE_CLERIGO      !== 'undefined' ? CLASE_CLERIGO      : null,
        'Druida':       typeof CLASE_DRUIDA       !== 'undefined' ? CLASE_DRUIDA       : null,
        'Explorador':   typeof CLASE_EXPLORADOR   !== 'undefined' ? CLASE_EXPLORADOR   : null,
        'Guerrero':     typeof CLASE_GUERRERO     !== 'undefined' ? CLASE_GUERRERO     : null,
        'Hechicero':    typeof CLASE_HECHICERO    !== 'undefined' ? CLASE_HECHICERO    : null,
        'Mago':         typeof CLASE_MAGO         !== 'undefined' ? CLASE_MAGO         : null,
        'Monje':        typeof CLASE_MONJE        !== 'undefined' ? CLASE_MONJE        : null,
        'Paladín':      typeof CLASE_PALADIN      !== 'undefined' ? CLASE_PALADIN      : null,
        'Pícaro':       typeof CLASE_PICARO       !== 'undefined' ? CLASE_PICARO       : null,
    };
    for (const [nombre, datos] of Object.entries(mapa)) {
        if (datos) DND_CLASES[nombre] = datos;
    }
})();

/* ══════════════════════════════════════════════════════════════
   2. ENSAMBLAR DND_SPELLS
══════════════════════════════════════════════════════════════ */
const DND_SPELLS = {};
(function ensamblarHechizos() {
    const niveles = [
        [0, typeof HECHIZOS_NIVEL_0 !== 'undefined' ? HECHIZOS_NIVEL_0 : []],
        [1, typeof HECHIZOS_NIVEL_1 !== 'undefined' ? HECHIZOS_NIVEL_1 : []],
        [2, typeof HECHIZOS_NIVEL_2 !== 'undefined' ? HECHIZOS_NIVEL_2 : []],
        [3, typeof HECHIZOS_NIVEL_3 !== 'undefined' ? HECHIZOS_NIVEL_3 : []],
        [4, typeof HECHIZOS_NIVEL_4 !== 'undefined' ? HECHIZOS_NIVEL_4 : []],
        [5, typeof HECHIZOS_NIVEL_5 !== 'undefined' ? HECHIZOS_NIVEL_5 : []],
        [6, typeof HECHIZOS_NIVEL_6 !== 'undefined' ? HECHIZOS_NIVEL_6 : []],
        [7, typeof HECHIZOS_NIVEL_7 !== 'undefined' ? HECHIZOS_NIVEL_7 : []],
        [8, typeof HECHIZOS_NIVEL_8 !== 'undefined' ? HECHIZOS_NIVEL_8 : []],
        [9, typeof HECHIZOS_NIVEL_9 !== 'undefined' ? HECHIZOS_NIVEL_9 : []],
    ];
    for (const [nv, arr] of niveles) DND_SPELLS[nv] = arr;
})();

/* ══════════════════════════════════════════════════════════════
   3. REFERENCIAS SEGURAS A DATOS EXTRA
══════════════════════════════════════════════════════════════ */
// DND_ESPECIES, DND_DOTES, DND_TRASFONDOS se usan directamente por nombre
// en las funciones de abajo; si sus archivos no están cargados, se
// comprueba con typeof antes de usarlos.

/* ══════════════════════════════════════════════════════════════
   4. HELPERS DE FORMATO
══════════════════════════════════════════════════════════════ */
function _rasgosTxt(arr, nivelMax) {
    if (!arr || !arr.length) return '';
    const filtrado = (nivelMax != null)
        ? arr.filter(r => (r.nv || 1) <= nivelMax)
        : arr;
    return filtrado.map(r => `[Nv.${r.nv}] ${r.n}: ${r.d}`).join('\n\n');
}

/* Ajusta el texto de rasgos al cambiar de nivel SIN borrar lo que el jugador haya escrito:
   · al subir, añade al final solo los rasgos de los niveles nuevos (si no están ya);
   · al bajar, quita únicamente los bloques sin editar de los niveles que se pierden. */
function _rasgosAjustarNivel(texto, arr, nvViejo, nvNuevo) {
    let t = texto || '';
    if (!arr || !arr.length || !nvViejo || !nvNuevo || nvViejo === nvNuevo) return t;
    const bloque = r => `[Nv.${r.nv}] ${r.n}: ${r.d}`;
    const nv = r => r.nv || 1;
    if (nvNuevo > nvViejo) {
        const nuevos = arr.filter(r => nv(r) > nvViejo && nv(r) <= nvNuevo && !t.includes(`[Nv.${r.nv}] ${r.n}:`));
        if (nuevos.length) t = (t.trim() ? t.replace(/\s+$/, '') + '\n\n' : '') + nuevos.map(bloque).join('\n\n');
    } else {
        let cambio = false;
        arr.filter(r => nv(r) > nvNuevo && nv(r) <= nvViejo).forEach(r => {
            const b = bloque(r);
            if (t.includes(b)) { t = t.replace(b, () => ''); cambio = true; }
        });
        if (cambio) t = t.replace(/\n{3,}/g, '\n\n').trim();
    }
    return t;
}

function _especieTxt(arr) {
    if (!arr || !arr.length) return '';
    return arr.map(r => `${r.n}: ${r.d}`).join('\n\n');
}

const _TIPO_ETIQUETA = { O: 'Origen', G: 'General', F: 'Combate', E: 'Boon Épico' };

/* ══════════════════════════════════════════════════════════════
   ALIAS — nombres antiguos de subclases, especies y trasfondos
   Las fichas guardadas (o importadas) con una clave que fue renombrada
   o fusionada en la revisión de datos de 2026 siguen cargando: la clave
   antigua se traduce a la nueva. Las claves que se eliminaron por no
   existir en ningún libro oficial no tienen alias (el desplegable queda
   en blanco, pero el texto ya escrito en la ficha se conserva).
══════════════════════════════════════════════════════════════ */
const DND_ALIAS = {
    subclase: {
        'Brujo': {
            'El Inmortal [XGtE]': 'El Inmortal [SCAG]',
            'El Guerrero Hexblade [SCAG]': 'El Hexblade [XGtE]',
            'La Entidad de la Profundidad [EGtW]': 'El Insondable [TCE]'
        },
        'Clérigo': {
            'Dominio de la Muerte [PHB 2014]': 'Dominio de la Muerte [DMG]',
            'Dominio del Conocimiento [PHB 2024]': 'Dominio del Conocimiento [HoF 2024]'
        },
        'Guerrero': {
            'Caballero del Psi [PHB 2024]': 'Guerrero Psíquico [PHB 2024]',
            'Guerrero Rúnico [PHB 2024]': 'Guerrero Rúnico [TCE]'
        },
        'Mago': {
            'Maestro de Orden [TCE]': 'Orden de los Escribas [TCE]',
            'Conjurador [PHB 2024]': 'Escuela de Conjuración [PHB 2014]',
            'Encantador [PHB 2024]': 'Escuela de Encantamiento [PHB 2014]',
            'Nigromante [PHB 2024]': 'Escuela de Nigromancia [PHB 2014]',
            'Transmutador [PHB 2024]': 'Escuela de Transmutación [PHB 2014]'
        },
        'Paladín': {
            'Juramento de Gloria [MOoT/TCE/PHB 2024]': 'Juramento de Gloria [PHB 2024]'
        }
    },
    especie: {
        'Humano [PHB24]': 'Humano [PHB 2024]',
        'Elfo [PHB24]': 'Elfo [PHB 2024]',
        'Enano [PHB24]': 'Enano [PHB 2024]',
        'Mediano [PHB24]': 'Mediano [PHB 2024]',
        'Gnomo [PHB24]': 'Gnomo [PHB 2024]',
        'Tiefling [PHB24]': 'Tiefling [PHB 2024]',
        'Draconido [PHB24]': 'Dracónido [PHB 2024]',
        'Semielfo [PHB24]': 'Semielfo [PHB 2014]',
        'Semiorco [PHB24]': 'Semiorco [PHB 2014]',
        'Enano Gris (Duergar) [SCAG]': 'Duergar [MotM]',
        'Tiefling Variante [SCAG]': 'Tiefling Variante [SCAG/MTF]',
        'Elfo Eladrin [MTF/MotM]': 'Eladrin [MotM]',
        'Githyanki [MTF/MotM]': 'Githyanki [MotM]',
        'Githzerai [MTF/MotM]': 'Githzerai [MotM]',
        'Yuan-ti [MTF/MotM]': 'Yuan-ti [MotM]',
        'Kenku [MTF/MotM]': 'Kenku [MotM]',
        'Lizardfolk [MTF/MotM]': 'Lizardfolk [MotM]',
        'Aasimar [MTF/MotM]': 'Aasimar [MotM]',
        'Bugbear [MTF/MotM]': 'Bugbear [MotM]',
        'Firbolg [MTF/MotM]': 'Firbolg [MotM]',
        'Goblin [MTF/MotM]': 'Goblin [MotM]',
        'Hobgoblin [MTF/MotM]': 'Hobgoblin [MotM]',
        'Kobold [MTF/MotM]': 'Kobold [MotM]',
        'Orc [MTF/MotM]': 'Orco [MotM]',
        'Shadar-kai [MTF/MotM]': 'Shadar-kai [MotM]',
        'Triton [MotM]': 'Tritón [MotM]',
        'Satiro [MotM]': 'Sátiro [MotM]',
        'Minotauro [MOoT]': 'Minotauro [MotM]',
        'Centauro [GGtR]': 'Centauro [MotM]',
        'Draconido Gema [FTD]': 'Dracónido Gema [FTD]',
        'Draconido Cromático [FTD]': 'Dracónido Cromático [FTD]',
        'Draconido Metálico [FTD]': 'Dracónido Metálico [FTD]',
        'Pallid Elf [EGW]': 'Elfo Pálido [EGtW]',
        'Lotusden Halfling [EGW]': 'Mediano Lotusden [EGtW]',
        'Kalashtar [ERLtLW]': 'Kalashtar [ERftLW 2014]',
        'Changeling [ERLtLW]': 'Changeling [MotM]',
        'Warforged [ERLtLW]': 'Warforged [ERftLW 2014]',
        'Shifter [ERLtLW]': 'Shifter [MotM]'
    },
    trasfondo: {
        'Acólito': 'Acólito (Acolyte) [PHB 2014]',
        'Charlatán': 'Charlatán (Charlatan) [PHB 2014]',
        'Criminal': 'Criminal [PHB 2014]',
        'Entretenido': 'Artista (Entertainer) [PHB 2014]',
        'Forastero': 'Forastero (Outlander) [PHB 2014]',
        'Gremial': 'Artesano de Gremio (Guild Artisan) [PHB 2014]',
        'Héroe del Pueblo': 'Héroe del Pueblo (Folk Hero) [PHB 2014]',
        'Marino': 'Marinero (Sailor) [PHB 2014]',
        'Marinero Pirata': 'Marinero (Sailor) [PHB 2014]',
        'Noble': 'Noble [PHB 2014]',
        'Sabio': 'Sabio (Sage) [PHB 2014]',
        'Clarividente': 'Sabio (Sage) [PHB 2014]',
        'Augurador': 'Sabio (Sage) [PHB 2014]',
        'Soldado': 'Soldado (Soldier) [PHB 2014]',
        'Urdidor': 'Pilluelo (Urchin) [PHB 2014]',
        'Ermitaño': 'Ermitaño (Hermit) [PHB 2014]',
        'Investigador': 'Guardia de la Ciudad (City Watch) [SCAG]',
        'Contrabandista': 'Contrabandista (Smuggler) [GoS]'
    }
};

/* Traduce una clave antigua a la actual. tipo: 'subclase' | 'especie' | 'trasfondo'.
   Para 'subclase' hay que pasar también el nombre de la clase. Si no hay alias,
   devuelve el valor tal cual. */
function resolverAlias(tipo, valor, clase) {
    if (!valor) return valor;
    const tabla = DND_ALIAS[tipo];
    if (!tabla) return valor;
    const t = (tipo === 'subclase') ? (tabla[clase] || {}) : tabla;
    return Object.prototype.hasOwnProperty.call(t, valor) ? t[valor] : valor;
}



const _HABILIDADES = [
    'Acrobacias','Arcana','Atletismo','Engaño','Historia','Intimidación',
    'Investigación','Juego de Manos','Medicina','Naturaleza','Percepción',
    'Perspicacia','Interpretación','Persuasión','Religión','Sigilo',
    'Supervivencia','Trato con Animales'
];

const _STAT_KEY = {
    'Fuerza':'str','Destreza':'dex','Constitución':'con',
    'Inteligencia':'int','Sabiduría':'wis','Carisma':'cha'
};

/* ══════════════════════════════════════════════════════════════
   ORDEN ALFABÉTICO Y BÚSQUEDA EN DESPLEGABLES
   · _ordenES: orden alfabético en español (Ñ, tildes…).
   · hacerSelectBuscable(select): sustituye a la vista un <select> por un desplegable con
     cuadro de búsqueda. El <select> original sigue siendo la fuente de verdad (su .value,
     sus eventos "change" y los atributos onchange funcionan igual que siempre).
   · _ddAnadirBuscador: añade el cuadro de búsqueda a los desplegables propios (especie, dotes).
══════════════════════════════════════════════════════════════ */
const _ordenES = (a, b) => String(a).localeCompare(String(b), 'es', { sensitivity: 'base' });
const _normBusq = t => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const _coincideBusq = (texto, consulta) => {
    const palabras = _normBusq(consulta).split(/\s+/).filter(Boolean);
    const t = _normBusq(texto);
    return palabras.every(w => t.includes(w));
};

function hacerSelectBuscable(sel) {
    if (!sel || sel._sb || !sel.parentNode) return;
    sel._sb = true;
    const aspecto = ['cab-select', 'caract-select', 'multiclase-sel'].filter(c => sel.classList.contains(c));
    const wrap = document.createElement('div');
    wrap.className = 'sb-wrap';
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'sb-trigger ' + aspecto.join(' ');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    wrap.appendChild(trigger);
    sel.parentNode.insertBefore(wrap, sel);
    sel.classList.add('sb-oculto');

    const refrescar = () => {
        const o = sel.selectedIndex >= 0 ? sel.options[sel.selectedIndex] : null;
        const txt = o ? o.textContent : '';
        trigger.textContent = txt;
        trigger.title = txt;
        trigger.classList.toggle('sb-sin-valor', !sel.value);
    };
    // El resto del programa asigna select.value / selectedIndex por código (sin evento): se refleja aquí
    const dV = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');
    const dI = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'selectedIndex');
    Object.defineProperty(sel, 'value', { configurable: true, get() { return dV.get.call(this); }, set(v) { dV.set.call(this, v); refrescar(); } });
    Object.defineProperty(sel, 'selectedIndex', { configurable: true, get() { return dI.get.call(this); }, set(v) { dI.set.call(this, v); refrescar(); } });
    sel.addEventListener('change', refrescar);
    new MutationObserver(refrescar).observe(sel, { childList: true, subtree: true, attributes: true, attributeFilter: ['selected'] });
    refrescar();
    sel._sbRefrescar = refrescar;

    let panel = null, inp = null, lista = null, activo = -1;
    const visibles = () => lista ? [...lista.querySelectorAll('.sb-item')] : [];

    function marcarActivo(i, desplazar) {
        const v = visibles();
        v.forEach(el => el.classList.remove('activo'));
        activo = v.length ? Math.max(0, Math.min(i, v.length - 1)) : -1;
        if (activo >= 0) {
            const el = v[activo];
            el.classList.add('activo');
            if (desplazar) {   // desplazamiento manual de la lista (scrollIntoView movería también la página)
                const arriba = el.offsetTop, abajo = arriba + el.offsetHeight;
                if (arriba < lista.scrollTop) lista.scrollTop = arriba;
                else if (abajo > lista.scrollTop + lista.clientHeight) lista.scrollTop = abajo - lista.clientHeight;
            }
        }
    }
    function construir(q) {
        lista.innerHTML = '';
        const hayConsulta = !!_normBusq(q).trim();
        const addItem = (o, destino) => {
            if (hayConsulta && (!o.value || !_coincideBusq(o.textContent, q))) return false;
            const it = document.createElement('div');
            it.className = 'sb-item' + (o.value === sel.value ? ' sel' : '') + (!o.value ? ' sb-item-vacio' : '');
            it.setAttribute('role', 'option');
            it.setAttribute('aria-selected', o.value === sel.value ? 'true' : 'false');
            it.dataset.valor = o.value;
            it.textContent = o.textContent;
            it.addEventListener('mousedown', e => e.preventDefault());
            it.addEventListener('click', () => elegir(o.value));
            it.addEventListener('mousemove', () => { const i = visibles().indexOf(it); if (i !== activo) marcarActivo(i, false); });
            destino.appendChild(it);
            return true;
        };
        let total = 0;
        [...sel.children].forEach(ch => {
            if (ch.tagName === 'OPTGROUP') {
                const cab = document.createElement('div');
                cab.className = 'sb-grupo'; cab.textContent = ch.label;
                const tmp = document.createDocumentFragment();
                let n = 0;
                [...ch.children].forEach(o => { if (addItem(o, tmp)) n++; });
                if (n) { lista.appendChild(cab); lista.appendChild(tmp); total += n; }
            } else if (ch.tagName === 'OPTION') {
                if (addItem(ch, lista)) total++;
            }
        });
        if (!total) {
            const v = document.createElement('div');
            v.className = 'sb-sin-resultados'; v.textContent = 'Sin resultados';
            lista.appendChild(v);
        }
        const selIdx = visibles().findIndex(el => el.classList.contains('sel'));
        marcarActivo(hayConsulta ? 0 : Math.max(selIdx, 0), !hayConsulta);
    }
    function posicionar() {
        const r = trigger.getBoundingClientRect();
        panel.style.minWidth = Math.max(r.width, 200) + 'px';
        const ancho = panel.offsetWidth || 220;
        panel.style.left = Math.max(8, Math.min(r.left, window.innerWidth - ancho - 8)) + 'px';
        const abajo = window.innerHeight - r.bottom - 12, arriba = r.top - 12;
        if (abajo < 240 && arriba > abajo) {
            panel.style.top = 'auto'; panel.style.bottom = (window.innerHeight - r.top + 2) + 'px';
            lista.style.maxHeight = Math.max(120, Math.min(300, arriba - 50)) + 'px';
        } else {
            panel.style.bottom = 'auto'; panel.style.top = (r.bottom + 2) + 'px';
            lista.style.maxHeight = Math.max(120, Math.min(300, abajo - 50)) + 'px';
        }
    }
    function elegir(valor) {
        cerrar();
        if (sel.value !== valor) {
            sel.value = valor;
            sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
        trigger.focus();
    }
    const fuera = e => { if (panel && !panel.contains(e.target) && !trigger.contains(e.target)) cerrar(); };
    const alDesplazar = e => { if (panel && !panel.contains(e.target)) cerrar(); };
    function cerrar() {
        if (!panel) return;
        panel.remove(); panel = inp = lista = null; activo = -1;
        trigger.setAttribute('aria-expanded', 'false');
        document.removeEventListener('mousedown', fuera, true);
        window.removeEventListener('scroll', alDesplazar, true);
        window.removeEventListener('resize', cerrar);
    }
    function abrir() {
        if (panel) { cerrar(); return; }
        refrescar();
        panel = document.createElement('div');
        panel.className = 'sb-panel';
        inp = document.createElement('input');
        inp.type = 'text'; inp.className = 'sb-buscar'; inp.placeholder = 'Buscar…';
        inp.autocomplete = 'off'; inp.spellcheck = false; inp.setAttribute('aria-label', 'Buscar');
        lista = document.createElement('div');
        lista.className = 'sb-lista'; lista.setAttribute('role', 'listbox');
        panel.appendChild(inp); panel.appendChild(lista);
        panel.style.visibility = 'hidden';
        document.body.appendChild(panel);
        trigger.setAttribute('aria-expanded', 'true');
        construir('');
        posicionar();
        panel.style.visibility = '';
        inp.addEventListener('input', () => construir(inp.value));
        inp.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); marcarActivo(activo + 1, true); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); marcarActivo(activo - 1, true); }
            else if (e.key === 'Enter') { e.preventDefault(); const v = visibles()[activo]; if (v) elegir(v.dataset.valor); }
            else if (e.key === 'Escape') { e.preventDefault(); cerrar(); trigger.focus(); }
            else if (e.key === 'Tab') { cerrar(); }
        });
        document.addEventListener('mousedown', fuera, true);
        window.addEventListener('resize', cerrar);
        inp.focus({ preventScroll: true });
        // El desplazamiento de la página cierra el desplegable (se ignora el que provoca la propia apertura)
        setTimeout(() => { if (panel) window.addEventListener('scroll', alDesplazar, true); }, 150);
    }
    trigger.addEventListener('click', abrir);
    trigger.addEventListener('keydown', e => {
        if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !panel) { e.preventDefault(); abrir(); }
    });
    sel._sbCerrar = cerrar;
}

/* Cuadro de búsqueda dentro de un desplegable propio (listbox con .xxx-dropdown-item y, opcional, etiquetas de grupo) */
function _ddAnadirBuscador(wrapper, listbox, claseGrupo) {
    const inp = document.createElement('input');
    inp.type = 'text'; inp.className = 'dd-buscar'; inp.placeholder = 'Buscar…';
    inp.autocomplete = 'off'; inp.spellcheck = false; inp.setAttribute('aria-label', 'Buscar');
    listbox.insertBefore(inp, listbox.firstChild);
    const vacio = document.createElement('div');
    vacio.className = 'sb-sin-resultados'; vacio.textContent = 'Sin resultados'; vacio.style.display = 'none';
    listbox.appendChild(vacio);
    const items = () => [...listbox.children].filter(c => c !== inp && c !== vacio && !(claseGrupo && c.classList.contains(claseGrupo)));
    const filtrar = () => {
        let grupo = null, total = 0;
        const grupos = [];
        [...listbox.children].forEach(el => {
            if (el === inp || el === vacio) return;
            if (claseGrupo && el.classList.contains(claseGrupo)) { grupo = { el, n: 0 }; grupos.push(grupo); return; }
            const ok = _coincideBusq(el.textContent, inp.value);
            el.style.display = ok ? '' : 'none';
            if (ok) { total++; if (grupo) grupo.n++; }
        });
        grupos.forEach(g => { g.el.style.display = g.n ? '' : 'none'; });
        vacio.style.display = total ? 'none' : '';
    };
    inp.addEventListener('input', filtrar);
    inp.addEventListener('click', e => e.stopPropagation());
    inp.addEventListener('keydown', e => {
        e.stopPropagation();
        if (e.key === 'Enter') { e.preventDefault(); const p = items().find(el => el.style.display !== 'none'); if (p) p.click(); }
        else if (e.key === 'Escape') { wrapper.classList.remove('open'); wrapper.querySelector('button')?.focus(); }
    });
    // Al abrir el desplegable: limpiar el filtro y dejar el cursor en el buscador
    new MutationObserver(() => {
        if (wrapper.classList.contains('open')) { inp.value = ''; filtrar(); listbox.scrollTop = 0; inp.focus({ preventScroll: true }); }
    }).observe(wrapper, { attributes: true, attributeFilter: ['class'] });
}

/* ══════════════════════════════════════════════════════════════
   5. initCaractSelectores — poblar todos los <select> de la ficha
══════════════════════════════════════════════════════════════ */
function initCaractSelectores(panel) {

    // ── Clase ──────────────────────────────────────────────────
    const selClase = panel.querySelector('.sel-clase');
    if (selClase) {
        selClase.innerHTML = '<option value="">— Selecciona una clase —</option>';
        Object.keys(DND_CLASES).sort(_ordenES).forEach(c => {
            const opt = document.createElement('option');
            opt.value = c; opt.textContent = c;
            selClase.appendChild(opt);
        });
    }

    // ── Subclase: vacía hasta que se elija clase ───────────────
    const selSub = panel.querySelector('.sel-subclase');
    if (selSub) {
        selSub.innerHTML = '<option value="">— Selecciona primero una clase —</option>';
    }

    // ── Especie ────────────────────────────────────────────────
    // Custom dropdown con tooltip flotante al hacer hover, igual que Dotes.
    const selEspecieNativo = panel.querySelector('.sel-especie');
    if (selEspecieNativo && typeof DND_ESPECIES !== 'undefined') {
        // Poblar el select nativo con todas las opciones (necesario para que .value se pueda asignar)
        selEspecieNativo.innerHTML = '<option value="">— Selecciona una especie —</option>';
        Object.keys(DND_ESPECIES).sort(_ordenES).forEach(e => {
            const opt = document.createElement('option');
            opt.value = e; opt.textContent = e;
            selEspecieNativo.appendChild(opt);
        });

        // Evitar doble inicialización del dropdown custom
        if (!selEspecieNativo.parentElement.querySelector('.especie-custom-dropdown')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'especie-custom-dropdown';
            wrapper.dataset.selectedName = '';

            const trigger = document.createElement('button');
            trigger.type = 'button';
            trigger.className = 'especie-dropdown-trigger';
            trigger.dataset.placeholder = '— Selecciona una especie —';
            trigger.textContent = '— Selecciona una especie —';

            const listbox = document.createElement('div');
            listbox.className = 'especie-dropdown-listbox';

            Object.keys(DND_ESPECIES).sort(_ordenES).forEach(nombreEspecie => {
                const item = document.createElement('div');
                item.className = 'especie-dropdown-item';
                item.dataset.especieName = nombreEspecie;
                item.textContent = nombreEspecie;

                item.addEventListener('mouseenter', () => {
                    if (typeof especieCardShow === 'function') {
                        especieCardShow(nombreEspecie, DND_ESPECIES[nombreEspecie]);
                    }
                });
                item.addEventListener('mouseleave', () => {
                    if (typeof especieCardHide === 'function') especieCardHide();
                });

                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    listbox.querySelectorAll('.especie-dropdown-item').forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                    wrapper.dataset.selectedName = nombreEspecie;
                    trigger.textContent = nombreEspecie;
                    trigger.classList.add('has-value');
                    wrapper.classList.remove('open');
                    if (typeof especieCardHide === 'function') especieCardHide();
                    // Asignar valor al select nativo (tiene las opciones, así que persiste)
                    selEspecieNativo.value = nombreEspecie;
                    // Rellenar textarea directamente (no depender de que onEspecieChange esté en scope)
                    const fichaPanel = selEspecieNativo.closest('.ficha-panel');
                    if (fichaPanel) {
                        const ta = fichaPanel.querySelector('.caract-especie');
                        if (ta) ta.value = _especieTxt(DND_ESPECIES[nombreEspecie] || []);
                        // Sincronizar selector de cabecera
                        const selCab = fichaPanel.querySelector('.sel-especie-cab');
                        if (selCab && selCab.value !== nombreEspecie) selCab.value = nombreEspecie;
                    }
                    // También disparar el handler por si hay lógica extra
                    if (typeof onEspecieChange === 'function') onEspecieChange(selEspecieNativo);
                    if (typeof guardarDebounced === 'function') guardarDebounced();
                });

                listbox.appendChild(item);
            });

            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const estaAbierto = wrapper.classList.contains('open');
                document.querySelectorAll('.especie-custom-dropdown.open').forEach(d => d.classList.remove('open'));
                if (!estaAbierto) wrapper.classList.add('open');
            });

            _ddAnadirBuscador(wrapper, listbox, null);
            wrapper.appendChild(trigger);
            wrapper.appendChild(listbox);
            selEspecieNativo.parentElement.insertBefore(wrapper, selEspecieNativo);
            selEspecieNativo.style.display = 'none';
        }
    } else if (selEspecieNativo) {
        // Fallback si DND_ESPECIES no está cargado: mantener select nativo
        selEspecieNativo.innerHTML = '<option value="">— Selecciona una especie —</option>';
    }

    // ── Dotes ─────────────────────────────────────────────────
    // Convertimos el <select> nativo en un custom dropdown para poder
    // mostrar tooltips flotantes al hacer hover sobre cada dote.
    const selDoteNativo = panel.querySelector('.sel-dote');
    if (selDoteNativo && typeof DND_DOTES !== 'undefined') {
        // Evitar doble inicialización
        if (!selDoteNativo.parentElement.querySelector('.dote-custom-dropdown')) {
            // Construir grupos de dotes
            const grupos = {};
            DND_DOTES.forEach(d => {
                const etq = _TIPO_ETIQUETA[d.tipo] || d.tipo || 'General';
                if (!grupos[etq]) grupos[etq] = [];
                grupos[etq].push(d);
            });

            // Crear wrapper del dropdown custom
            const wrapper = document.createElement('div');
            wrapper.className = 'dote-custom-dropdown';
            wrapper.dataset.selectedName = '';

            const trigger = document.createElement('button');
            trigger.type = 'button';
            trigger.className = 'dote-dropdown-trigger';
            trigger.dataset.placeholder = '— Añadir dote —';
            trigger.textContent = '— Añadir dote —';

            const listbox = document.createElement('div');
            listbox.className = 'dote-dropdown-listbox';

            // Poblar listbox con grupos e items
            Object.entries(grupos).forEach(([etq, dotes]) => {
                const groupLabel = document.createElement('div');
                groupLabel.className = 'dote-dropdown-group-label';
                groupLabel.textContent = etq;
                listbox.appendChild(groupLabel);

                dotes.slice().sort((a, b) => _ordenES(a.n, b.n)).forEach(d => {
                    const item = document.createElement('div');
                    item.className = 'dote-dropdown-item';
                    item.dataset.doteName = d.n;
                    item.textContent = d.n;

                    // Tooltip flotante al hacer hover
                    item.addEventListener('mouseenter', () => {
                        if (typeof doteCardShow === 'function') doteCardShow(d);
                    });
                    item.addEventListener('mouseleave', () => {
                        if (typeof doteCardHide === 'function') doteCardHide();
                    });

                    // Seleccionar item al hacer clic
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        listbox.querySelectorAll('.dote-dropdown-item').forEach(i => i.classList.remove('selected'));
                        item.classList.add('selected');
                        wrapper.dataset.selectedName = d.n;
                        trigger.textContent = d.n;
                        trigger.classList.add('has-value');
                        wrapper.classList.remove('open');
                        if (typeof doteCardHide === 'function') doteCardHide();
                        // Sincronizar con el <select> nativo oculto
                        selDoteNativo.value = d.n;
                    });

                    listbox.appendChild(item);
                });
            });

            // Abrir/cerrar al hacer clic en trigger
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const estaAbierto = wrapper.classList.contains('open');
                // Cerrar todos los demás dropdowns de dotes abiertos
                document.querySelectorAll('.dote-custom-dropdown.open').forEach(d => d.classList.remove('open'));
                if (!estaAbierto) wrapper.classList.add('open');
            });

            _ddAnadirBuscador(wrapper, listbox, 'dote-dropdown-group-label');
            wrapper.appendChild(trigger);
            wrapper.appendChild(listbox);

            // Insertar el dropdown custom antes del select nativo y ocultar el select
            selDoteNativo.parentElement.insertBefore(wrapper, selDoteNativo);
            selDoteNativo.style.display = 'none';
        }
    }

    // ── Trasfondo ─────────────────────────────────────────────
    const selTf = panel.querySelector('.sel-trasfondo');
    if (selTf) {
        selTf.innerHTML = '<option value="">— Selecciona un trasfondo —</option>';
        const optCustom = document.createElement('option');
        optCustom.value = '__personalizado__';
        optCustom.textContent = '✦ Personalizado';
        selTf.appendChild(optCustom);
        if (typeof DND_TRASFONDOS !== 'undefined') {
            Object.keys(DND_TRASFONDOS).sort(_ordenES).forEach(t => {
                if (t === 'Personalizado') return; // evitar duplicado con ✦ Personalizado
                const opt = document.createElement('option');
                opt.value = t; opt.textContent = t;
                selTf.appendChild(opt);
            });
        }
    }

    // ── Trasfondo personalizado: selectores internos ───────────
    _initTrasfondoPersonalizado(panel);
    if (typeof _poblarSelectoresCabecera === 'function') _poblarSelectoresCabecera(panel);
    // Desplegables con buscador (los datos ya están ordenados alfabéticamente)
    hacerSelectBuscable(panel.querySelector('.sel-trasfondo'));
    hacerSelectBuscable(panel.querySelector('.sel-especie-cab'));
    hacerSelectBuscable(panel.querySelector('.sel-trasfondo-cab'));
    hacerSelectBuscable(panel.querySelector('.tf-dote-sel'));
}

/* ══════════════════════════════════════════════════════════════
   6. HANDLERS DE SELECTORES
══════════════════════════════════════════════════════════════ */

function onClaseChange(sel) {
    const panel    = sel.closest('.ficha-panel');
    const claseKey = sel.value;
    const selSub   = panel.querySelector('.sel-subclase');
    const taClase  = panel.querySelector('.caract-clase');
    const taSub    = panel.querySelector('.caract-subclase');
    const nivelMax = parseInt(panel.querySelector('.mc-nivel-sel')?.value) || 20;

    // Reconstruir opciones de subclase
    if (selSub) {
        selSub.innerHTML = '<option value="">— Selecciona una subclase —</option>';
        if (claseKey && DND_CLASES[claseKey]) {
            Object.keys(DND_CLASES[claseKey].subclases || {}).sort(_ordenES).forEach(sub => {
                const opt = document.createElement('option');
                opt.value = sub; opt.textContent = sub;
                selSub.appendChild(opt);
            });
        }
    }

    // Rellenar textarea de clase
    if (taClase) {
        taClase.value = (claseKey && DND_CLASES[claseKey])
            ? _rasgosTxt(DND_CLASES[claseKey].rasgos, nivelMax)
            : '';
    }

    // Limpiar subclase
    if (taSub) taSub.value = '';

    if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function onSubclaseChange(sel) {
    const panel    = sel.closest('.ficha-panel');
    const claseKey = panel.querySelector('.sel-clase')?.value;
    const subKey   = sel.value;
    const taSub    = panel.querySelector('.caract-subclase');
    const nivelMax = parseInt(panel.querySelector('.mc-nivel-sel')?.value) || 20;

    if (taSub) {
        taSub.value = (claseKey && subKey && DND_CLASES[claseKey]?.subclases?.[subKey])
            ? _rasgosTxt(DND_CLASES[claseKey].subclases[subKey], nivelMax)
            : '';
    }

    if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function onEspecieChange(sel) {
    const panel      = sel.closest('.ficha-panel');
    const especieKey = sel.value;
    const taEspecie  = panel.querySelector('.caract-especie');

    if (taEspecie) {
        taEspecie.value = (especieKey && typeof DND_ESPECIES !== 'undefined' && DND_ESPECIES[especieKey])
            ? _especieTxt(DND_ESPECIES[especieKey])
            : '';
    }

    // Sincronizar con selector de cabecera
    const selCab = panel.querySelector('.sel-especie-cab');
    if (selCab && selCab.value !== especieKey) selCab.value = especieKey;

    // El desplegable de especie y el selector de cabecera llaman a esta función directamente
    // (sin evento "change"), así que el panel de Acciones se refresca aquí.
    if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function onDoteAdd(btn) {
    const panel  = btn.closest('.ficha-panel');
    const sel    = panel.querySelector('.sel-dote');
    const ta     = panel.querySelector('.caract-dotes');
    // Leer del custom dropdown si existe, si no del select nativo
    const wrapper = panel.querySelector('.dote-custom-dropdown');
    const nombre  = wrapper ? wrapper.dataset.selectedName : sel?.value;
    if (!nombre || !ta || typeof DND_DOTES === 'undefined') return;

    const dote = DND_DOTES.find(d => d.n === nombre);
    if (!dote) return;

    const etq   = _TIPO_ETIQUETA[dote.tipo] || dote.tipo || 'General';
    const linea = `${dote.n} [${etq}]: ${dote.d}`;
    ta.value    = ta.value ? ta.value + '\n\n' + linea : linea;

    // Resetear el custom dropdown
    if (wrapper) {
        wrapper.dataset.selectedName = '';
        const trigger = wrapper.querySelector('.dote-dropdown-trigger');
        if (trigger) { trigger.textContent = trigger.dataset.placeholder; trigger.classList.remove('has-value'); }
        wrapper.querySelectorAll('.dote-dropdown-item.selected').forEach(i => i.classList.remove('selected'));
    }
    if (sel) sel.value = '';

    // Las dotes se escriben por código (no hay evento "input"): refrescar el panel de Acciones
    if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function onDoteOrigenAdd(btn) {
    const panel  = btn.closest('.ficha-panel');
    const sel    = panel.querySelector('.tf-dote-sel');
    const ta     = panel.querySelector('.caract-dotes');
    const nombre = sel?.value;
    if (!nombre || !ta || typeof DND_DOTES === 'undefined') return;

    const dote = DND_DOTES.find(d => d.n === nombre);
    if (!dote) return;

    const linea = `${dote.n} [Origen]: ${dote.d}`;
    ta.value    = ta.value ? ta.value + '\n\n' + linea : linea;
    sel.value   = '';

    if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function onTrasfondoChange(sel) {
    const panel  = sel.closest('.ficha-panel');
    const key    = sel.value;
    const ta     = panel.querySelector('.caract-trasfondo-txt');
    const tfWrap = panel.querySelector('.trasfondo-personalizado');

    if (tfWrap) tfWrap.style.display = 'none';

    if (key === '__personalizado__') {
        if (tfWrap) tfWrap.style.display = '';
        if (ta)     ta.value = '';
        return;
    }

    if (!key || typeof DND_TRASFONDOS === 'undefined' || !DND_TRASFONDOS[key]) {
        if (ta) ta.value = '';
        return;
    }

    const tf = DND_TRASFONDOS[key];
    const lineas = [];
    if (tf.asi)     lineas.push(`Aumento de característica: ${tf.asi} (+2/+1 o +1/+1/+1)`);
    if (tf.dote)    lineas.push(`Dote de origen: ${tf.dote}`);
    if (tf.comp)    lineas.push(`Competencias en habilidades: ${tf.comp}`);
    if (tf.herr)    lineas.push(`Herramientas: ${tf.herr}`);
    if (tf.idiomas) lineas.push(`Idiomas: ${tf.idiomas}`);
    if (tf.equipo)  lineas.push(`Equipo: ${tf.equipo}`);
    if (tf.rasgo)   lineas.push(`\nRasgo especial: ${tf.rasgo}`);
    if (tf.rasgos && Array.isArray(tf.rasgos)) {
        lineas.push('\n' + tf.rasgos.map(r => `${r.n}: ${r.d}`).join('\n\n'));
    }

    if (ta) ta.value = lineas.join('\n');

    // Sincronizar con selector de cabecera
    const selCabTf = panel.querySelector('.sel-trasfondo-cab');
    if (selCabTf && selCabTf.value !== key) selCabTf.value = key;

    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function limpiarCaract(btn, tipo) {
    const panel = btn.closest('.ficha-panel');
    const mapa  = {
        'clase':     { sel: '.sel-clase',     ta: '.caract-clase' },
        'subclase':  { sel: '.sel-subclase',  ta: '.caract-subclase' },
        'especie':   { sel: '.sel-especie',   ta: '.caract-especie' },
        'dotes':     { sel: '.sel-dote',      ta: '.caract-dotes' },
        'trasfondo': { sel: '.sel-trasfondo', ta: '.caract-trasfondo-txt' },
    };
    const cfg = mapa[tipo];
    if (!cfg) return;

    const sel = panel.querySelector(cfg.sel);
    const ta  = panel.querySelector(cfg.ta);
    if (sel) sel.value = '';
    if (ta)  ta.value  = '';

    // Resetear custom dropdowns si existen (especie, dotes)
    if (tipo === 'especie') {
        const wd = panel.querySelector('.especie-custom-dropdown');
        if (wd) {
            wd.dataset.selectedName = '';
            const tr = wd.querySelector('.especie-dropdown-trigger');
            if (tr) { tr.textContent = tr.dataset.placeholder; tr.classList.remove('has-value'); }
            wd.querySelectorAll('.especie-dropdown-item.selected').forEach(i => i.classList.remove('selected'));
        }
    }
    if (tipo === 'dotes') {
        const wd = panel.querySelector('.dote-custom-dropdown');
        if (wd) {
            wd.dataset.selectedName = '';
            const tr = wd.querySelector('.dote-dropdown-trigger');
            if (tr) { tr.textContent = tr.dataset.placeholder; tr.classList.remove('has-value'); }
            wd.querySelectorAll('.dote-dropdown-item.selected').forEach(i => i.classList.remove('selected'));
        }
    }

    if (tipo === 'clase') {
        const selSub = panel.querySelector('.sel-subclase');
        const taSub  = panel.querySelector('.caract-subclase');
        if (selSub) selSub.innerHTML = '<option value="">— Selecciona primero una clase —</option>';
        if (taSub)  taSub.value = '';
    }

    if (tipo === 'trasfondo') {
        const tfWrap = panel.querySelector('.trasfondo-personalizado');
        if (tfWrap) tfWrap.style.display = 'none';
        const selCabTf = panel.querySelector('.sel-trasfondo-cab');
        if (selCabTf) selCabTf.value = '';
    }
    if (tipo === 'especie') {
        const selCabE = panel.querySelector('.sel-especie-cab');
        if (selCabE) selCabE.value = '';
    }

    // Vaciar clase/subclase/especie/dotes cambia lo que debe mostrar el panel de Acciones
    if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

/* ══════════════════════════════════════════════════════════════
   7. TRASFONDO PERSONALIZADO
══════════════════════════════════════════════════════════════ */
function _initTrasfondoPersonalizado(panel) {
    const tfWrap = panel.querySelector('.trasfondo-personalizado');
    if (!tfWrap) return;

    // Poblar selectores de habilidad
    ['.tf-hab1-sel', '.tf-hab2-sel'].forEach(cls => {
        const s = tfWrap.querySelector(cls);
        if (!s) return;
        s.innerHTML = '<option value="">— Selecciona —</option>';
        _HABILIDADES.forEach(h => {
            const opt = document.createElement('option');
            opt.value = h; opt.textContent = h;
            s.appendChild(opt);
        });
    });

    // Poblar TODAS las dotes (no solo Origen)
    const selDote = tfWrap.querySelector('.tf-dote-sel');
    if (selDote) {
        selDote.innerHTML = '<option value="">— Selecciona dote —</option>';
        if (typeof DND_DOTES !== 'undefined') {
            const grupos = {};
            DND_DOTES.forEach(d => {
                const etq = { O:'Origen', G:'General', F:'Combate', E:'Boon Épico' }[d.tipo] || d.tipo || 'General';
                if (!grupos[etq]) grupos[etq] = [];
                grupos[etq].push(d);
            });
            Object.entries(grupos).forEach(([etq, dotes]) => {
                const grp = document.createElement('optgroup');
                grp.label = etq;
                dotes.slice().sort((a, b) => _ordenES(a.n, b.n)).forEach(d => {
                    const opt = document.createElement('option');
                    opt.value = d.n; opt.textContent = d.n;
                    grp.appendChild(opt);
                });
                selDote.appendChild(grp);
            });
        }
    }
}

function aplicarTrasfondoPersonalizado(panel) {
    if (!panel) return;
    const tfWrap = panel.querySelector('.trasfondo-personalizado');
    if (!tfWrap) return;

    const stat2 = tfWrap.querySelector('.tf-stat2-sel')?.value;
    const stat1 = tfWrap.querySelector('.tf-stat1-sel')?.value;
    const hab1  = tfWrap.querySelector('.tf-hab1-sel')?.value;
    const hab2  = tfWrap.querySelector('.tf-hab2-sel')?.value;

    // Revertir bonos anteriores
    const prevRaw = tfWrap.dataset.prevBonos;
    if (prevRaw) {
        try {
            const prev = JSON.parse(prevRaw);
            if (prev.stat2) _ajustarStat(panel, _STAT_KEY[prev.stat2], -2);
            if (prev.stat1) _ajustarStat(panel, _STAT_KEY[prev.stat1], -1);
            if (prev.hab1)  _setHabProf(panel, prev.hab1, false);
            if (prev.hab2)  _setHabProf(panel, prev.hab2, false);
        } catch(e) {}
    }

    // Aplicar nuevos bonos
    if (stat2 && _STAT_KEY[stat2]) _ajustarStat(panel, _STAT_KEY[stat2], +2);
    if (stat1 && _STAT_KEY[stat1]) _ajustarStat(panel, _STAT_KEY[stat1], +1);
    if (hab1)  _setHabProf(panel, hab1, true);
    if (hab2)  _setHabProf(panel, hab2, true);

    tfWrap.dataset.prevBonos = JSON.stringify({ stat2, stat1, hab1, hab2 });

    if (typeof actualizarTodoPanel === 'function') actualizarTodoPanel(panel);
    if (typeof guardarDebounced    === 'function') guardarDebounced();
}

function _ajustarStat(panel, statKey, delta) {
    const input = panel.querySelector(`.stat-score[data-stat="${statKey}"]`);
    if (!input) return;
    input.value = Math.max(1, (parseInt(input.value) || 10) + delta);
    if (typeof actualizarAtributo === 'function') actualizarAtributo(input);
}

function _setHabProf(panel, nombreHab, activar) {
    panel.querySelectorAll('.fila-skill').forEach(fila => {
        const label = fila.querySelector('label');
        if (!label) return;
        const texto = label.childNodes[0]?.textContent?.trim() || '';
        if (texto === nombreHab) {
            const dot = fila.querySelector('.dot.prof');
            if (dot) { dot.checked = activar; }
        }
    });
    // Recalcular bonos para que el bono de competencia se aplique
    if (typeof actualizarTodoPanel === 'function') actualizarTodoPanel(panel);
}

/* Nota: getPanel(el) está definido en script.js */


/* ══════════════════════════════════════════════════════════════
   8. SISTEMA DE PESTAÑAS MULTICLASE (Características)
   ─────────────────────────────────────────────────────────────
   Cada ficha tiene N "páginas" de clase, cada una con:
     - select de clase  +  textarea de rasgos
     - select de subclase + textarea de rasgos
   El botón ＋ añade una nueva página.
   La primera página no tiene botón de cerrar.
══════════════════════════════════════════════════════════════ */

function _mcCrearPagina(panel, idx, datos) {
    const pag = document.createElement('div');
    pag.className = 'mc-pagina';
    pag.dataset.mcIdx = idx;

    // ── Lado Clase ──
    const ladoClase = document.createElement('div');
    ladoClase.className = 'mc-mitad';

    const hClase = document.createElement('div');
    hClase.className = 'mc-mitad-header';

    const tituloSpan = document.createElement('span');
    tituloSpan.className = 'mc-mitad-titulo';
    tituloSpan.textContent = 'Clase';
    hClase.appendChild(tituloSpan);

    // Selector de nivel integrado en el header
    const nivelWrap = document.createElement('div');
    nivelWrap.className = 'mc-nivel-wrap';
    const nivelLabel = document.createElement('span');
    nivelLabel.className = 'mc-nivel-label';
    nivelLabel.textContent = 'Nv.';
    const nivelSel = document.createElement('select');
    nivelSel.className = 'mc-nivel-sel';
    for (let n = 1; n <= 20; n++) {
        const opt = document.createElement('option');
        opt.value = n; opt.textContent = n;
        nivelSel.appendChild(opt);
    }
    if (datos?.nivel) nivelSel.value = datos.nivel;
    nivelSel.dataset.prev = nivelSel.value;
    nivelSel.addEventListener('change', () => {
        const claseKey = selClase.value;
        const subKey   = selSubclase.value;
        const nivelMax = parseInt(nivelSel.value) || 1;
        const nivelAntes = parseInt(nivelSel.dataset.prev) || nivelMax;
        nivelSel.dataset.prev = String(nivelMax);
        // Subir/bajar de nivel añade o quita solo los rasgos de esos niveles; las notas escritas se respetan
        if (claseKey && DND_CLASES?.[claseKey]) {
            taClase.value = _rasgosAjustarNivel(taClase.value, DND_CLASES[claseKey].rasgos, nivelAntes, nivelMax);
        }
        if (claseKey && subKey && DND_CLASES?.[claseKey]?.subclases?.[subKey]) {
            taSubclase.value = _rasgosAjustarNivel(taSubclase.value, DND_CLASES[claseKey].subclases[subKey], nivelAntes, nivelMax);
        }
        if (typeof syncWidgetsInfToSup === 'function') syncWidgetsInfToSup(panel);
        if (typeof multiclaseActualizar === 'function') multiclaseActualizar(panel);
        _mcRenderTabs(panel);
        if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
        if (typeof guardarDebounced === 'function') guardarDebounced();
    });
    nivelWrap.appendChild(nivelLabel);
    nivelWrap.appendChild(nivelSel);
    hClase.appendChild(nivelWrap);

    if (idx > 0) {
        const btnDel = document.createElement('button');
        btnDel.className = 'mc-del-btn';
        btnDel.textContent = '✕';
        btnDel.title = 'Eliminar esta clase';
        btnDel.onclick = () => mcRemoveTab(panel, idx);
        hClase.appendChild(btnDel);
    }

    const selClaseWrap = document.createElement('div');
    selClaseWrap.className = 'caract-selector-wrap';

    const selClase = document.createElement('select');
    selClase.className = 'caract-select sel-clase mc-sel-clase';
    selClase.innerHTML = '<option value="">— Selecciona una clase —</option>';
    if (typeof DND_CLASES !== 'undefined') {
        Object.keys(DND_CLASES).sort(_ordenES).forEach(c => {
            const opt = document.createElement('option');
            opt.value = c; opt.textContent = c;
            selClase.appendChild(opt);
        });
    }
    if (datos?.clase) selClase.value = datos.clase;

    const taClase = document.createElement('textarea');
    taClase.className = 'caract-textarea caract-clase mc-ta-clase';
    taClase.placeholder = 'Selecciona una clase arriba, o escribe libremente...';
    taClase.oninput = () => { if (typeof guardarDebounced === 'function') guardarDebounced(); };
    if (datos?.claseTexto) taClase.value = datos.claseTexto;

    selClase.onchange = function() {
        const claseKey = selClase.value;
        const nivelMax = parseInt(nivelSel.value) || 1;
        // Actualizar textarea con filtro de nivel
        taClase.value = (claseKey && DND_CLASES?.[claseKey])
            ? _rasgosTxt(DND_CLASES[claseKey].rasgos, nivelMax) : '';
        // Reconstruir subclase select
        selSubclase.innerHTML = '<option value="">— Selecciona una subclase —</option>';
        if (claseKey && DND_CLASES?.[claseKey]?.subclases) {
            Object.keys(DND_CLASES[claseKey].subclases).sort(_ordenES).forEach(sub => {
                const opt = document.createElement('option');
                opt.value = sub; opt.textContent = sub;
                selSubclase.appendChild(opt);
            });
        }
        taSubclase.value = '';
        // Sincronizar hacia el widget superior y recalcular todo
        if (typeof syncWidgetsInfToSup === 'function') syncWidgetsInfToSup(panel);
        if (typeof multiclaseActualizar === 'function') multiclaseActualizar(panel);
        _mcRenderTabs(panel);
        if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
        if (typeof guardarDebounced === 'function') guardarDebounced();
    };

    selClaseWrap.appendChild(selClase);
    ladoClase.appendChild(hClase);
    ladoClase.appendChild(selClaseWrap);
    ladoClase.appendChild(taClase);

    // ── Lado Subclase ──
    const ladoSub = document.createElement('div');
    ladoSub.className = 'mc-mitad';

    const hSub = document.createElement('div');
    hSub.className = 'mc-mitad-header';
    hSub.innerHTML = `<span class="mc-mitad-titulo">Subclase</span>`;

    const selSubWrap = document.createElement('div');
    selSubWrap.className = 'caract-selector-wrap';

    const selSubclase = document.createElement('select');
    selSubclase.className = 'caract-select sel-subclase mc-sel-subclase';
    selSubclase.innerHTML = '<option value="">— Selecciona primero una clase —</option>';

    // Si restaurando con clase ya seleccionada, poblar subclases
    if (datos?.clase && DND_CLASES?.[datos.clase]?.subclases) {
        selSubclase.innerHTML = '<option value="">— Selecciona una subclase —</option>';
        Object.keys(DND_CLASES[datos.clase].subclases).sort(_ordenES).forEach(sub => {
            const opt = document.createElement('option');
            opt.value = sub; opt.textContent = sub;
            selSubclase.appendChild(opt);
        });
        if (datos.subclase) selSubclase.value = datos.subclase;
    }

    const taSubclase = document.createElement('textarea');
    taSubclase.className = 'caract-textarea caract-subclase mc-ta-subclase';
    taSubclase.placeholder = 'Selecciona una subclase arriba, o escribe libremente...';
    taSubclase.oninput = () => { if (typeof guardarDebounced === 'function') guardarDebounced(); };
    if (datos?.subclaseTexto) taSubclase.value = datos.subclaseTexto;

    selSubclase.onchange = function() {
        const claseKey = selClase.value;
        const subKey   = selSubclase.value;
        const nivelMax = parseInt(nivelSel.value) || 1;
        taSubclase.value = (claseKey && subKey && DND_CLASES?.[claseKey]?.subclases?.[subKey])
            ? _rasgosTxt(DND_CLASES[claseKey].subclases[subKey], nivelMax) : '';
        // Guerrero (Caballero Arcano) y Pícaro (Tramposo Arcano) solo lanzan conjuros con esa
        // subclase: recalcular espacios de conjuro, trucos y preparados al cambiarla.
        if (typeof CLASE_DATA !== 'undefined' && CLASE_DATA[claseKey]?.subclaseCasting
            && typeof multiclaseActualizar === 'function') {
            multiclaseActualizar(panel);
        }
        if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
        if (typeof guardarDebounced === 'function') guardarDebounced();
    };

    selSubWrap.appendChild(selSubclase);
    hacerSelectBuscable(selSubclase);
    ladoSub.appendChild(hSub);
    ladoSub.appendChild(selSubWrap);
    ladoSub.appendChild(taSubclase);

    // ── Ensamblar ──
    pag.appendChild(ladoClase);
    pag.appendChild(ladoSub);
    return pag;
}

function _mcRenderTabs(panel) {
    const wrap    = panel.querySelector('.caract-mc-wrap');
    if (!wrap) return;
    const tabsEl  = wrap.querySelector('.caract-mc-tabs');
    const bodyEl  = wrap.querySelector('.caract-mc-body');
    const paginas = bodyEl.querySelectorAll('.mc-pagina');
    tabsEl.innerHTML = '';

    paginas.forEach((pag, i) => {
        const tab = document.createElement('button');
        tab.className = 'mc-tab' + (pag.classList.contains('mc-activa') ? ' mc-tab-activa' : '');
        const claseNombre = pag.querySelector('.mc-sel-clase')?.value || `Clase ${i + 1}`;
        tab.textContent = claseNombre || `Clase ${i + 1}`;
        tab.onclick = () => {
            bodyEl.querySelectorAll('.mc-pagina').forEach(p => p.classList.remove('mc-activa'));
            pag.classList.add('mc-activa');
            _mcRenderTabs(panel);
        };
        tabsEl.appendChild(tab);
    });
}

function mcAddTab(btn) {
    const panel  = btn.closest('.ficha-panel');
    const bodyEl = panel.querySelector('.caract-mc-body');
    const idx    = bodyEl.querySelectorAll('.mc-pagina').length;
    const pag    = _mcCrearPagina(panel, idx, null);

    // Desactivar la página actual
    bodyEl.querySelectorAll('.mc-pagina').forEach(p => p.classList.remove('mc-activa'));
    pag.classList.add('mc-activa');
    bodyEl.appendChild(pag);

    // Escuchar cambios de clase para actualizar la pestaña
    pag.querySelector('.mc-sel-clase')?.addEventListener('change', () => _mcRenderTabs(panel));

    // Añadir también fila vacía al widget superior
    if (typeof multiclaseAñadir === 'function' && !_syncingWidgets) {
        const addBtn = panel.querySelector('.multiclase-add-btn');
        if (addBtn) {
            _syncingWidgets = true;
            try { multiclaseAñadir(addBtn); } finally { _syncingWidgets = false; }
        }
    }

    _mcRenderTabs(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function mcRemoveTab(panel, idx) {
    const bodyEl = panel.querySelector('.caract-mc-body');
    const pag    = bodyEl.querySelector(`.mc-pagina[data-mc-idx="${idx}"]`);
    if (!pag) return;
    const eraActiva = pag.classList.contains('mc-activa');
    pag.remove();
    // Re-indexar
    bodyEl.querySelectorAll('.mc-pagina').forEach((p, i) => p.dataset.mcIdx = i);
    if (eraActiva) {
        const restantes = bodyEl.querySelectorAll('.mc-pagina');
        if (restantes.length > 0) restantes[restantes.length - 1].classList.add('mc-activa');
    }
    // Sincronizar widget superior
    if (typeof syncWidgetsInfToSup === 'function') syncWidgetsInfToSup(panel);
    if (typeof multiclaseActualizar === 'function') multiclaseActualizar(panel);
    _mcRenderTabs(panel);
    if (typeof guardarDebounced === 'function') guardarDebounced();
}

/* Inicializar el widget en un panel nuevo */
function initMcWidget(panel) {
    const bodyEl = panel.querySelector('.caract-mc-body');
    if (!bodyEl || bodyEl.querySelector('.mc-pagina')) return; // ya inicializado
    const pag = _mcCrearPagina(panel, 0, null);
    pag.classList.add('mc-activa');
    bodyEl.appendChild(pag);
    pag.querySelector('.mc-sel-clase')?.addEventListener('change', () => _mcRenderTabs(panel));
    _mcRenderTabs(panel);
}

/* Leer datos multiclase para guardar */
function leerMcDatos(panel) {
    const bodyEl = panel.querySelector('.caract-mc-body');
    if (!bodyEl) return [];
    return Array.from(bodyEl.querySelectorAll('.mc-pagina')).map(pag => ({
        clase:         pag.querySelector('.mc-sel-clase')?.value   || '',
        nivel:         parseInt(pag.querySelector('.mc-nivel-sel')?.value) || 1,
        claseTexto:    pag.querySelector('.mc-ta-clase')?.value    || '',
        subclase:      pag.querySelector('.mc-sel-subclase')?.value || '',
        subclaseTexto: pag.querySelector('.mc-ta-subclase')?.value || '',
    }));
}

/* Restaurar datos multiclase al cargar */
function cargarMcDatos(panel, datos) {
    if (!datos || !datos.length) { initMcWidget(panel); return; }
    // Traducir subclases guardadas con claves antiguas (ver DND_ALIAS)
    datos = datos.map(d => Object.assign({}, d, { subclase: resolverAlias('subclase', d.subclase, d.clase) }));
    const bodyEl = panel.querySelector('.caract-mc-body');
    if (!bodyEl) return;
    bodyEl.innerHTML = '';
    datos.forEach((d, i) => {
        const pag = _mcCrearPagina(panel, i, d);
        if (i === 0) pag.classList.add('mc-activa');
        bodyEl.appendChild(pag);
        pag.querySelector('.mc-sel-clase')?.addEventListener('change', () => _mcRenderTabs(panel));
    });
    _mcRenderTabs(panel);
}
