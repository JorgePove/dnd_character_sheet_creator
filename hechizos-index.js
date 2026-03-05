/* ══════════════════════════════════════════════════════════════════
   hechizos-index.js — Ensamblador principal de DND_SPELLS
   D&D 5e · 448 conjuros · Actualizado 2024
   ──────────────────────────────────────────────────────────────────
   Fuentes incluidas:
     PHB 2014 · PHB 2024 · XGE · TCE · SCAG · EGW · FTD
     IDRotF · GGtR · SAiS
   ──────────────────────────────────────────────────────────────────
   Distribución por nivel:
     Trucos (Nv.0) ·  49   Nivel 1 ·  69   Nivel 2 ·  61
     Nivel 3       ·  66   Nivel 4 ·  47   Nivel 5 ·  52
     Nivel 6       ·  40   Nivel 7 ·  24   Nivel 8 ·  22
     Nivel 9       ·  18   TOTAL   · 448
   ──────────────────────────────────────────────────────────────────
   USO (script tags — cargar ANTES de este archivo):
     <script src="data/hechizos/hechizos-nivel-0.js"></script>
     <script src="data/hechizos/hechizos-nivel-1.js"></script>
     <script src="data/hechizos/hechizos-nivel-2.js"></script>
     <script src="data/hechizos/hechizos-nivel-3.js"></script>
     <script src="data/hechizos/hechizos-nivel-4.js"></script>
     <script src="data/hechizos/hechizos-nivel-5.js"></script>
     <script src="data/hechizos/hechizos-nivel-6.js"></script>
     <script src="data/hechizos/hechizos-nivel-7.js"></script>
     <script src="data/hechizos/hechizos-nivel-8.js"></script>
     <script src="data/hechizos/hechizos-nivel-9.js"></script>
     <script src="data/hechizos-index.js"></script>
══════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────────
   1. ARRAY UNIFICADO
─────────────────────────────────────────────────────────────────── */
const DND_SPELLS = [
  ...HECHIZOS_NIVEL_0,   //  49 trucos
  ...HECHIZOS_NIVEL_1,   //  69 conjuros
  ...HECHIZOS_NIVEL_2,   //  61 conjuros
  ...HECHIZOS_NIVEL_3,   //  66 conjuros
  ...HECHIZOS_NIVEL_4,   //  47 conjuros
  ...HECHIZOS_NIVEL_5,   //  52 conjuros
  ...HECHIZOS_NIVEL_6,   //  40 conjuros
  ...HECHIZOS_NIVEL_7,   //  24 conjuros
  ...HECHIZOS_NIVEL_8,   //  22 conjuros
  ...HECHIZOS_NIVEL_9,   //  18 conjuros
];

/* ──────────────────────────────────────────────────────────────────
   2. ÍNDICES DE ACCESO RÁPIDO
─────────────────────────────────────────────────────────────────── */

/** Por ID:     DND_SPELLS_BY_ID["fireball"]      → objeto conjuro  */
const DND_SPELLS_BY_ID = Object.fromEntries(
  DND_SPELLS.map(s => [s.id, s])
);

/** Por nivel:  DND_SPELLS_BY_LEVEL["Nivel 3"]    → array conjuros  */
const DND_SPELLS_BY_LEVEL = DND_SPELLS.reduce((acc, s) => {
  if (!acc[s.nivel]) acc[s.nivel] = [];
  acc[s.nivel].push(s);
  return acc;
}, {});

/** Por escuela: DND_SPELLS_BY_SCHOOL["Evocación"] → array conjuros */
const DND_SPELLS_BY_SCHOOL = DND_SPELLS.reduce((acc, s) => {
  if (!acc[s.escuela]) acc[s.escuela] = [];
  acc[s.escuela].push(s);
  return acc;
}, {});

/* ──────────────────────────────────────────────────────────────────
   3. UTILIDADES DE BÚSQUEDA Y FILTRADO
─────────────────────────────────────────────────────────────────── */

/**
 * Busca conjuros por texto en nombre o descripción.
 * @param {string} query
 * @returns {Array}
 * @example searchSpells("fuego") → todos los conjuros con "fuego"
 */
function searchSpells(query) {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return DND_SPELLS.filter(s => {
    const nombre = s.n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const desc   = (s.desc || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return nombre.includes(q) || desc.includes(q);
  });
}

/**
 * Filtra conjuros por nivel (0–9 o "Truco").
 * @param {number|string} nivel — número 0-9, "Truco", o "Nivel X"
 * @returns {Array}
 * @example getSpellsByLevel(3) → array de nivel 3
 */
function getSpellsByLevel(nivel) {
  if (nivel === 0 || nivel === "0" || nivel === "Truco" || nivel === "truco") {
    return DND_SPELLS_BY_LEVEL["Truco"] || [];
  }
  const key = typeof nivel === "number" ? `Nivel ${nivel}` : nivel;
  return DND_SPELLS_BY_LEVEL[key] || [];
}

/**
 * Filtra conjuros por escuela de magia.
 * @param {string} escuela
 * @returns {Array}
 * @example getSpellsBySchool("Nigromancia")
 */
function getSpellsBySchool(escuela) {
  return DND_SPELLS_BY_SCHOOL[escuela] || [];
}

/**
 * Devuelve conjuros que infligen daño.
 * @returns {Array}
 */
function getDamageSpells() {
  return DND_SPELLS.filter(s => s.damage !== null);
}

/**
 * Devuelve conjuros que pueden lanzarse como ritual.
 * @returns {Array}
 */
function getRitualSpells() {
  return DND_SPELLS.filter(s =>
    s.extra && s.extra.toLowerCase().includes("ritual")
  );
}

/**
 * Devuelve conjuros de una fuente determinada.
 * @param {string} fuente — "PHB", "XGE", "TCE", "SCAG", "EGW", etc.
 * @returns {Array}
 * @example getSpellsBySource("XGE")
 */
function getSpellsBySource(fuente) {
  const f = fuente.toUpperCase();
  return DND_SPELLS.filter(s => s.n.toUpperCase().includes(`[${f}`));
}

/**
 * Devuelve conjuros que requieren concentración.
 * @returns {Array}
 */
function getConcentrationSpells() {
  return DND_SPELLS.filter(s =>
    s.duration && s.duration.toLowerCase().includes("conc")
  );
}

/**
 * Devuelve conjuros de curación (recuperan PG).
 * @returns {Array}
 */
function getHealingSpells() {
  return DND_SPELLS.filter(s =>
    s.damage && s.damage.toLowerCase().includes("cura")
  );
}

/**
 * Obtiene un conjuro por ID exacto.
 * @param {string} id
 * @returns {Object|undefined}
 */
function getSpellById(id) {
  return DND_SPELLS_BY_ID[id];
}

/* ──────────────────────────────────────────────────────────────────
   4. ESTADÍSTICAS Y DEBUG
─────────────────────────────────────────────────────────────────── */
const DND_SPELLS_STATS = {
  total: DND_SPELLS.length,
  porNivel: Object.fromEntries(
    Object.entries(DND_SPELLS_BY_LEVEL).map(([k, v]) => [k, v.length])
  ),
  porEscuela: Object.fromEntries(
    Object.entries(DND_SPELLS_BY_SCHOOL).map(([k, v]) => [k, v.length])
  ),
  conDaño:        getDamageSpells().length,
  rituales:       getRitualSpells().length,
  concentracion:  getConcentrationSpells().length,
  curación:       getHealingSpells().length,
};

// Descomenta para verificar carga en consola:
// console.log(`✅ Hechizos cargados: ${DND_SPELLS_STATS.total}`);
// console.table(DND_SPELLS_STATS.porNivel);

/* ──────────────────────────────────────────────────────────────────
   5. CONSTANTES DE REFERENCIA
─────────────────────────────────────────────────────────────────── */

/** Escuelas de magia disponibles */
const ESCUELAS_MAGIA = [
  "Abjuración", "Adivinación", "Conjuración", "Encantamiento",
  "Evocación", "Ilusión", "Nigromancia", "Transmutación"
];

/** Niveles de conjuro disponibles */
const NIVELES_CONJURO = [
  "Truco", "Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4",
  "Nivel 5", "Nivel 6", "Nivel 7", "Nivel 8", "Nivel 9"
];

/** Fuentes incluidas */
const FUENTES_HECHIZOS = [
  "PHB", "XGE", "TCE", "SCAG", "EGW", "FTD", "IDRotF", "GGtR", "SAiS"
];

/* ──────────────────────────────────────────────────────────────────
   6. RENDERIZADO UI — Tarjeta de conjuro
─────────────────────────────────────────────────────────────────── */

/**
 * Genera el HTML de una tarjeta de conjuro.
 * @param {Object} spell
 * @returns {string} HTML
 */
function renderSpellCard(spell) {
  const damageTag = spell.damage
    ? `<span class="spell-damage">${spell.damage}</span>`
    : "";
  const ritualTag = (spell.extra && spell.extra.toLowerCase().includes("ritual"))
    ? `<span class="spell-tag ritual">Ritual</span>`
    : "";
  const concTag = (spell.duration && spell.duration.toLowerCase().includes("conc"))
    ? `<span class="spell-tag concentration">Conc.</span>`
    : "";

  return `
    <div class="spell-card" data-id="${spell.id}" data-level="${spell.nivel}" data-school="${spell.escuela}">
      <div class="spell-header">
        <h3 class="spell-name">${spell.n}</h3>
        <div class="spell-tags">${ritualTag}${concTag}</div>
      </div>
      <div class="spell-meta">
        <span class="spell-level">${spell.nivel}</span>
        <span class="spell-school">${spell.escuela}</span>
      </div>
      <div class="spell-stats">
        <div><strong>Lanzamiento:</strong> ${spell.casting}</div>
        <div><strong>Alcance:</strong> ${spell.range}</div>
        <div><strong>Componentes:</strong> ${spell.components}</div>
        <div><strong>Duración:</strong> ${spell.duration}</div>
      </div>
      <p class="spell-desc">${spell.desc}</p>
      ${damageTag}
      ${spell.extra ? `<p class="spell-extra">${spell.extra}</p>` : ""}
    </div>
  `.trim();
}

/**
 * Renderiza una lista de conjuros como tarjetas en un contenedor.
 * @param {Array}       spells     — array de conjuros
 * @param {HTMLElement} container  — elemento DOM destino
 */
function renderSpellList(spells, container) {
  if (!container) return;
  container.innerHTML = spells.length > 0
    ? spells.map(renderSpellCard).join("")
    : `<p class="no-results">No se encontraron conjuros.</p>`;
}

/**
 * Renderiza opciones de nivel en un <select>.
 * @param {HTMLSelectElement} selectEl
 * @param {boolean} includeAll — si true añade opción "Todos"
 */
function populateLevelSelect(selectEl, includeAll = true) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  if (includeAll) {
    const all = document.createElement("option");
    all.value = ""; all.textContent = "Todos los niveles";
    selectEl.appendChild(all);
  }
  NIVELES_CONJURO.forEach(nivel => {
    const opt = document.createElement("option");
    opt.value = nivel; opt.textContent = nivel;
    selectEl.appendChild(opt);
  });
}

/**
 * Renderiza opciones de escuela en un <select>.
 * @param {HTMLSelectElement} selectEl
 * @param {boolean} includeAll
 */
function populateSchoolSelect(selectEl, includeAll = true) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  if (includeAll) {
    const all = document.createElement("option");
    all.value = ""; all.textContent = "Todas las escuelas";
    selectEl.appendChild(all);
  }
  ESCUELAS_MAGIA.forEach(esc => {
    const opt = document.createElement("option");
    opt.value = esc; opt.textContent = esc;
    selectEl.appendChild(opt);
  });
}
