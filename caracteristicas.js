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

function _especieTxt(arr) {
    if (!arr || !arr.length) return '';
    return arr.map(r => `${r.n}: ${r.d}`).join('\n\n');
}

const _TIPO_ETIQUETA = { O: 'Origen', G: 'General', F: 'Combate', E: 'Boon Épico' };

const _HABILIDADES = [
    'Acrobacias','Arcanos','Atletismo','Engaño','Historia','Intimidación',
    'Investigación','Juego de Manos','Medicina','Naturaleza','Percepción',
    'Perspicacia','Interpretación','Persuasión','Religión','Sigilo',
    'Supervivencia','Trato con Animales'
];

const _STAT_KEY = {
    'Fuerza':'str','Destreza':'dex','Constitución':'con',
    'Inteligencia':'int','Sabiduría':'wis','Carisma':'cha'
};

/* ══════════════════════════════════════════════════════════════
   5. initCaractSelectores — poblar todos los <select> de la ficha
══════════════════════════════════════════════════════════════ */
function initCaractSelectores(panel) {

    // ── Clase ──────────────────────────────────────────────────
    const selClase = panel.querySelector('.sel-clase');
    if (selClase) {
        selClase.innerHTML = '<option value="">— Selecciona una clase —</option>';
        Object.keys(DND_CLASES).forEach(c => {
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
    const selEspecie = panel.querySelector('.sel-especie');
    if (selEspecie) {
        selEspecie.innerHTML = '<option value="">— Selecciona una especie —</option>';
        if (typeof DND_ESPECIES !== 'undefined') {
            Object.keys(DND_ESPECIES).forEach(e => {
                const opt = document.createElement('option');
                opt.value = e; opt.textContent = e;
                selEspecie.appendChild(opt);
            });
        }
    }

    // ── Dotes ─────────────────────────────────────────────────
    const selDote = panel.querySelector('.sel-dote');
    if (selDote && typeof DND_DOTES !== 'undefined') {
        selDote.innerHTML = '<option value="">— Añadir dote —</option>';
        const grupos = {};
        DND_DOTES.forEach(d => {
            const etq = _TIPO_ETIQUETA[d.tipo] || d.tipo || 'General';
            if (!grupos[etq]) grupos[etq] = [];
            grupos[etq].push(d);
        });
        Object.entries(grupos).forEach(([etq, dotes]) => {
            const grp = document.createElement('optgroup');
            grp.label = etq;
            dotes.forEach(d => {
                const opt = document.createElement('option');
                opt.value = d.n; opt.textContent = d.n;
                grp.appendChild(opt);
            });
            selDote.appendChild(grp);
        });
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
            Object.keys(DND_TRASFONDOS).forEach(t => {
                const opt = document.createElement('option');
                opt.value = t; opt.textContent = t;
                selTf.appendChild(opt);
            });
        }
    }

    // ── Trasfondo personalizado: selectores internos ───────────
    _initTrasfondoPersonalizado(panel);
    if (typeof _poblarSelectoresCabecera === 'function') _poblarSelectoresCabecera(panel);
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
            Object.keys(DND_CLASES[claseKey].subclases || {}).forEach(sub => {
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

    if (typeof guardarDebounced === 'function') guardarDebounced();
}

function onDoteAdd(btn) {
    const panel  = btn.closest('.ficha-panel');
    const sel    = panel.querySelector('.sel-dote');
    const ta     = panel.querySelector('.caract-dotes');
    const nombre = sel?.value;
    if (!nombre || !ta || typeof DND_DOTES === 'undefined') return;

    const dote = DND_DOTES.find(d => d.n === nombre);
    if (!dote) return;

    const etq   = _TIPO_ETIQUETA[dote.tipo] || dote.tipo || 'General';
    const linea = `${dote.n} [${etq}]: ${dote.d}`;
    ta.value    = ta.value ? ta.value + '\n\n' + linea : linea;
    sel.value   = '';

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
    if (tf.comp)    lineas.push(`Competencias en habilidades: ${tf.comp}`);
    if (tf.idiomas) lineas.push(`Idiomas: ${tf.idiomas}`);
    if (tf.herr)    lineas.push(`Herramientas: ${tf.herr}`);
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
                dotes.forEach(d => {
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
    nivelSel.addEventListener('change', () => {
        const claseKey = selClase.value;
        const subKey   = selSubclase.value;
        const nivelMax = parseInt(nivelSel.value) || 1;
        // Refrescar textarea de clase con filtro de nivel
        if (claseKey && DND_CLASES?.[claseKey]) {
            taClase.value = _rasgosTxt(DND_CLASES[claseKey].rasgos, nivelMax);
        }
        // Refrescar textarea de subclase con filtro de nivel
        if (claseKey && subKey && DND_CLASES?.[claseKey]?.subclases?.[subKey]) {
            taSubclase.value = _rasgosTxt(DND_CLASES[claseKey].subclases[subKey], nivelMax);
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
        Object.keys(DND_CLASES).forEach(c => {
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
            Object.keys(DND_CLASES[claseKey].subclases).forEach(sub => {
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
        Object.keys(DND_CLASES[datos.clase].subclases).forEach(sub => {
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
        if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
        if (typeof guardarDebounced === 'function') guardarDebounced();
    };

    selSubWrap.appendChild(selSubclase);
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
