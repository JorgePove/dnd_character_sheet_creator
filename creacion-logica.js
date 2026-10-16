/* ══════════════════════════════════════════════════════════════════
   creacion-logica.js — Lógica (sin interfaz) del asistente de creación
   ──────────────────────────────────────────────────────────────────
   Funciones puras sobre el estado C del asistente y los datos de
   creacion-datos.js, especies.js, trasfondos.js y dotes.js.
   El estado C (lo crea crNuevoEstado):
     ed        '24' (5.5e) | '14' (5e)
     nombre, nivel, clase
     esp, espOp {id: valor}, espAsi {grupos: [..]}, espIdioma/espHab: elecciones libres
     tf, tfOp {id: valor}, tfDote {…}   (dote de origen y sus elecciones)
     hab[], pericias[], idiomas[], herr[], maestrias[], orden
     eq {…}, oroExtra
══════════════════════════════════════════════════════════════════ */

const CR_ABREV = { FUE: 'str', DES: 'dex', CON: 'con', INT: 'int', SAB: 'wis', CAR: 'cha' };
const CR_ATR = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const CR_ATR_NOMBRE = { str: 'Fuerza', dex: 'Destreza', con: 'Constitución', int: 'Inteligencia', wis: 'Sabiduría', cha: 'Carisma' };
const CR_ATR_ABREV = { str: 'FUE', dex: 'DES', con: 'CON', int: 'INT', wis: 'SAB', cha: 'CAR' };
const CR_STAT_HAB = {};   // nombre de habilidad → característica
CR_HAB.forEach(h => { CR_STAT_HAB[h.n] = h.st; });

const crMod = v => Math.floor(((parseInt(v) || 10) - 10) / 2);
const crFmt = n => (n >= 0 ? '+' : '−') + Math.abs(n);
const crUnicos = a => a.filter((x, i) => a.indexOf(x) === i);

/* Normaliza para comparar nombres (sin tildes ni mayúsculas) */
const crNorm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

/* ───────── Estado ───────── */
function crNuevoEstado() {
  return {
    ed: '24', nombre: '', nivel: 1, clase: '',
    esp: '', espOp: {}, espAsi: { alt: 0, picks: [] }, espHabLibres: [], espIdiomas: [],
    tf: '', tfOp: {}, tfDote: {},
    atr: null,                 // { aplicado: bool, omitido: bool, sig: string }
    hab: [], pericias: [], idiomas: [], herr: [], maestrias: [], orden: '',
    habSkilled: [],
    eq: { kit: '', grupos: {}, oro14: null, oroTirado: null, sel: {}, tf: 'A', selTf: {} },
    oroExtra: 0,
    verTodas: false,
  };
}

/* ───────── Ediciones de especies/trasfondos ───────── */
function crEdDeClave(k) {
  const m = String(k).match(/\[([^\]]+)\]\s*$/);
  return m && /2024/.test(m[1]) ? '24' : '14';
}
function crFuenteDeClave(k) {
  const m = String(k).match(/\[([^\]]+)\]\s*$/);
  return m ? m[1] : '';
}
function crNombreCorto(k) { return String(k).replace(/\s*\[[^\]]+\]\s*$/, ''); }

function crListaEspecies(C) {
  return Object.keys(DND_ESPECIES).filter(k => C.verTodas || crEdDeClave(k) === C.ed).sort(_ordenES);
}
function crListaTrasfondos(C) {
  return Object.keys(DND_TRASFONDOS).filter(k => k !== 'Personalizado' && (C.verTodas || crEdDeClave(k) === C.ed)).sort(_ordenES);
}

/* ───────── Texto de una especie → datos básicos ───────── */
function crBasicosEspecie(key) {
  const rasgos = DND_ESPECIES[key] || [];
  const b = rasgos.find(r => r.n === 'Rasgos Básicos');
  const t = b ? b.d : '';
  const out = { vel: 30, tam: [], idiomas: [], idiomasLibres: 0, asiTxt: '', visionOsc: '' };
  const v = t.match(/Velocidad (\d+) pies/); if (v) out.vel = parseInt(v[1]);
  const tam = t.match(/\b(Diminuto|Pequeño|Mediano|Grande|Enorme)\b/g); if (tam) out.tam = crUnicos(tam);
  const vo = t.match(/Visión en la Oscuridad (\d+) pies/); if (vo) out.visionOsc = vo[1];
  const mi = t.match(/Idiomas?:\s*([^.]*)\./);
  if (mi) {
    let s = mi[1].replace(/\([^)]*\)/g, '').replace(/ligado a tu trasfondo/gi, '').replace(/a tu elección/gi, '');
    const libres = { uno: 1, un: 1, dos: 2, tres: 3 };
    const ml = s.match(/\b(uno|un|dos|tres) más/i);
    if (ml) { out.idiomasLibres = libres[ml[1].toLowerCase()]; s = s.replace(/\b(uno|un|dos|tres) más/ig, ''); }
    s.split(/,| y | e | o /).map(x => x.trim()).filter(x => /^[A-ZÁÉÍÓÚÑ]/.test(x)).forEach(x => { if (!out.idiomas.includes(x)) out.idiomas.push(x); });
  }
  const ma = t.match(/Aumentos?[^:]*:\s*([^.]*)\./);
  if (ma) out.asiTxt = ma[1].trim();
  return out;
}

/* Competencias en habilidades que da el texto de los rasgos (especies que no son de PHB 2024):
   «Competencia en Percepción.» → fija; «Competencia en dos habilidades a tu elección» → N libres */
function crHabilidadesEspecie(key) {
  const out = { fijas: [], libres: 0 };
  (DND_ESPECIES[key] || []).forEach(r => {
    const d = String(r.d || '');
    let m = d.match(/^Competencia en ([^.;]+?)(?:\.|;|$)/);
    if (m) {
      const nombres = m[1].split(/,| y | e /).map(x => x.trim());
      const reconocidas = nombres.filter(x => CR_HAB_NOMBRES.includes(x));
      if (reconocidas.length === nombres.length) { reconocidas.forEach(x => { if (!out.fijas.includes(x)) out.fijas.push(x); }); return; }
      const mn = d.match(/Competencia en (una|dos|tres|1|2|3)\s+habilidad(?:es)?/i);
      if (mn) out.libres += { una: 1, dos: 2, tres: 3, 1: 1, 2: 2, 3: 3 }[mn[1].toLowerCase()];
    }
  });
  return out;
}

/* ───────── Aumentos de característica de las especies de 5e (2014) ─────────
   → { ok, fijos: {str:2,…}, libres: [{n, perm:[…]|null}], alt: [[2,1],[1,1,1]]|null, nota } */
function crParseAsi(txt) {
  const t = String(txt || '').trim();
  const r = { ok: true, fijos: {}, libres: [], alt: null, nota: t };
  if (!t) return r;
  const ab = s => CR_ABREV[s];
  const permDe = s => { const l = (String(s || '').match(/\b(FUE|DES|CON|INT|SAB|CAR)\b/g) || []).map(ab); return l.length ? l : null; };
  let m;
  if (/^\+1 a todas las características$/i.test(t)) { CR_ATR.forEach(a => { r.fijos[a] = 1; }); return r; }
  if (/^\+2\/\+1 o \+1\/\+1\/\+1$/.test(t)) { r.libres = [{ n: 2, perm: null }, { n: 1, perm: null }]; r.alt = [[2, 1], [1, 1, 1]]; return r; }
  if (/^\+1 a dos características distintas a tu elección$/i.test(t)) { r.libres = [{ n: 1, perm: null }, { n: 1, perm: null }]; return r; }
  if (/^\+2 a una característica y \+1 a otra$/i.test(t)) { r.libres = [{ n: 2, perm: null }, { n: 1, perm: null }]; return r; }
  if (/^\+2 a una característica a tu elección$/i.test(t)) { r.libres = [{ n: 2, perm: null }]; return r; }
  if (/^no tiene aumento/i.test(t)) return r;
  m = t.match(/^(FUE|DES|CON|INT|SAB|CAR) \+(\d) y \+(\d) a (otra|otras dos) características?( distintas)?( a tu elección)?\s*(\(([^)]*)\))?$/i);
  if (m) {
    const base = ab(m[1]); r.fijos[base] = parseInt(m[2]);
    const perm = (permDe(m[8]) || CR_ATR).filter(a => a !== base);
    const veces = /dos/i.test(m[4]) ? 2 : 1;
    for (let i = 0; i < veces; i++) r.libres.push({ n: parseInt(m[3]), perm });
    return r;
  }
  // Pares fijos: «DES +2, SAB +1», «CON +2» … (cualquier otra cosa con paréntesis o texto libre no se interpreta)
  if (/^((FUE|DES|CON|INT|SAB|CAR) \+\d)(, (FUE|DES|CON|INT|SAB|CAR) \+\d)*$/.test(t)) {
    [...t.matchAll(/(FUE|DES|CON|INT|SAB|CAR) \+(\d)/g)].forEach(x => { r.fijos[ab(x[1])] = (r.fijos[ab(x[1])] || 0) + parseInt(x[2]); });
    return r;
  }
  r.ok = false;   // formato raro: no se aplica solo
  return r;
}

/* Bonos de característica de la especie (solo en 5e/2014) → {str:n,…} */
function crBonoEspecie(C) {
  const z = {}; CR_ATR.forEach(a => { z[a] = 0; });
  if (C.ed !== '14' || !C.esp || crEdDeClave(C.esp) !== '14') return z;
  const b = crBasicosEspecie(C.esp), asi = crParseAsi(b.asiTxt);
  if (!asi.ok) return z;
  Object.entries(asi.fijos).forEach(([a, n]) => { z[a] += n; });
  const grupos = crGruposAsi(C);
  grupos.forEach((g, i) => { const p = C.espAsi.picks[i]; if (p) z[p] += g.n; });
  return z;
}
/* Grupos libres de aumento según la alternativa elegida */
function crGruposAsi(C) {
  if (!C.esp) return [];
  const asi = crParseAsi(crBasicosEspecie(C.esp).asiTxt);
  if (!asi.ok) return [];
  if (asi.alt) { const alt = asi.alt[C.espAsi.alt] || asi.alt[0]; return alt.map(n => ({ n, perm: null })); }
  return asi.libres;
}
function crAsiCompleto(C) {
  if (C.ed !== '14' || !C.esp || crEdDeClave(C.esp) !== '14') return true;
  const g = crGruposAsi(C);
  const p = C.espAsi.picks.slice(0, g.length);
  if (p.length < g.length || p.some(x => !x)) return false;
  return crUnicos(p).length === p.length;
}

/* ───────── Habilidades ───────── */
/* «Perspicacia, y una de Arcana, Naturaleza o Religión» → { fijas, elige: {n, de|null} } */
function crParseComp(txt) {
  const t = String(txt || '').trim();
  const r = { fijas: [], elige: { n: 0, de: null } };
  if (!t) return r;
  const nombres = s => (s.match(/[A-ZÁÉÍÓÚ][a-záéíóúñ]+(?: [a-záéíóúñ]+(?: [A-Za-záéíóú]+)?)?/g) || []).map(x => x.trim()).filter(x => CR_HAB_NOMBRES.includes(x));
  const conocidas = s => CR_HAB_NOMBRES.filter(h => new RegExp('(^|[^A-Za-zÁÉÍÓÚáéíóúñ])' + h.replace(/ /g, '\\s+') + '(?![A-Za-zÁÉÍÓÚáéíóúñ])').test(s));
  let m = t.match(/^(\d) a elegir(?: entre (.+))?$/);
  if (m) { r.elige.n = parseInt(m[1]); r.elige.de = m[2] ? conocidas(m[2]) : null; return r; }
  m = t.match(/^(.*?),?\s+y (?:una|uno|1)(?: habilidad)?(?: de (.+?))?(?: a elegir.*)?(?:,\s*según.*)?$/);
  if (m && /una|uno|1/.test(t)) {
    r.fijas = conocidas(m[1]);
    r.elige.n = 1;
    const lista = m[2] || '';
    const stats = lista.match(/\b(FUE|DES|CON|INT|SAB|CAR)\b/g);
    if (stats) { const sts = stats.map(s => CR_ABREV[s]); r.elige.de = CR_HAB_NOMBRES.filter(h => sts.includes(CR_STAT_HAB[h])); }
    else r.elige.de = lista ? conocidas(lista) : null;
    return r;
  }
  m = t.match(/^(.*?),?\s+y la habilidad asociada.*o 1 a elegir$/);
  if (m) { r.fijas = conocidas(m[1]); r.elige.n = 1; r.elige.de = null; return r; }
  r.fijas = conocidas(t);
  return r;
}

/* Habilidades que el personaje ya tiene por otras vías (para no ofrecerlas dos veces).
   excluir: clave/s de la fuente que se está editando — 'tf-fijas', 'tf-elige', 'esp-fijas', 'esp-24', 'esp-libres', 'clase', 'skilled-tf', 'skilled-esp' */
function crHabOtras(C, excluir) {
  const ex = new Set([].concat(excluir || []));
  const s = new Set();
  const add = (k, arr) => { if (!ex.has(k)) (arr || []).forEach(h => { if (h) s.add(h); }); };
  if (C.tf && DND_TRASFONDOS[C.tf]) add('tf-fijas', crParseComp(DND_TRASFONDOS[C.tf].comp).fijas);
  add('tf-elige', C.tfOp.hab);
  if (C.esp) {
    if (CR_ESP24[C.esp]) (CR_ESP24[C.esp].eleg || []).forEach(g => { if (g.hab) add('esp-24', [C.espOp[g.id]]); });
    else add('esp-fijas', crHabilidadesEspecie(C.esp).fijas);
  }
  add('esp-libres', C.espHabLibres);
  add('clase', C.hab);
  ['tf', 'esp'].forEach(q => add('skilled-' + q, (((C.tfDote || {})[q] || {}).habherr || []).filter(h => CR_HAB_NOMBRES.includes(h))));
  return s;
}
function crHabFijas(C) {
  const s = new Set();
  if (C.tf && DND_TRASFONDOS[C.tf]) crParseComp(DND_TRASFONDOS[C.tf].comp).fijas.forEach(h => s.add(h));
  if (C.esp) {
    if (CR_ESP24[C.esp]) {
      // Humano/Elfo de PHB 2024: la habilidad elegida cuenta como tomada
      (CR_ESP24[C.esp].eleg || []).forEach(g => { if (g.hab) { const v = C.espOp[g.id]; if (v) s.add(v); } });
    } else crHabilidadesEspecie(C.esp).fijas.forEach(h => s.add(h));
  }
  return s;
}
/* Habilidades que elige el jugador por razones del trasfondo/especie (no de clase): [{id, n, de|null, etq}] */
function crHabLibresFuera(C) {
  const out = [];
  if (C.tf && DND_TRASFONDOS[C.tf]) {
    const p = crParseComp(DND_TRASFONDOS[C.tf].comp);
    if (p.elige.n) out.push({ id: 'tf', n: p.elige.n, de: p.elige.de, etq: 'Trasfondo' });
  }
  if (C.esp && !CR_ESP24[C.esp]) {
    const e = crHabilidadesEspecie(C.esp);
    if (e.libres) out.push({ id: 'esp', n: e.libres, de: null, etq: 'Especie' });
  }
  return out;
}
function crClaseHab(C) {
  const d = C.clase && CR_CLASES[C.clase] && CR_CLASES[C.clase][C.ed];
  return d ? d.hab : { n: 0, de: [] };
}

/* ───────── Dotes de origen ───────── */
function crDotePorNombre(nombre, ed) {
  const base = String(nombre || '').replace(/\s*\(.*\)\s*$/, '').trim();
  const todas = (typeof DND_DOTES !== 'undefined') ? DND_DOTES : [];
  return todas.find(d => d.n === base + ' [PHB 2024]') || todas.find(d => d.n.startsWith(base + ' [')) || todas.find(d => d.n === base) || null;
}
/* Las dotes de Origen de PHB 2024 que se pueden elegir (Humano versátil) */
function crDotesOrigen() {
  return (typeof DND_DOTES !== 'undefined' ? DND_DOTES : []).filter(d => d.tipo === 'Origen' && /\[PHB 2024\]/.test(d.n));
}
/* Dote de origen que da el trasfondo (solo 2024) → { base, lista } */
function crDoteDeTrasfondo(C) {
  const t = C.tf && CR_TF24[C.tf];
  if (t && t.dote) return t.dote;
  const raw = C.tf && DND_TRASFONDOS[C.tf] && DND_TRASFONDOS[C.tf].dote;
  if (raw && crEdDeClave(C.tf) === '24') {   // los trasfondos de 2024 dan una dote de Origen; los de 2014 no
    const m = String(raw).match(/^(.*?)\s*(?:\((.+)\))?$/);
    const n = m[1].trim();
    return crDotePorNombre(n) ? { n, lista: m[2] || '' } : null;
  }
  return null;
}
/* ¿Cuántos elementos pide la dote? */
function crDoteOpciones(nombreDote) {
  const base = String(nombreDote || '').replace(/\s*\[.*$/, '').replace(/\s*\(.*\)\s*$/, '').trim();
  return CR_DOTE_OP[base] || null;
}

/* ───────── Armas ───────── */
function crArma(id, ed) {
  const a = CR_ARMAS[id]; if (!a) return null;
  if (ed === '14') {
    if (a.s24) return null;
    const x = Object.assign({}, a, a.e14 || {});
    if (a.e14 && a.e14.v === null) delete x.v;
    delete x.m;
    return x;
  }
  if (a.s14) return null;
  return a;
}
function crArmasLista(C, filtro) {
  const out = [];
  Object.keys(CR_ARMAS).forEach(id => {
    const a = crArma(id, C.ed); if (!a) return;
    if (filtro === '@wS' && a.c !== 's') return;
    if (filtro === '@wM' && a.c !== 'm') return;
    if (filtro === '@wSC' && (a.c !== 's' || a.r)) return;
    if (filtro === '@wMC' && (a.c !== 'm' || a.r)) return;
    out.push({ id, n: a.n });
  });
  return out.sort((x, y) => _ordenES(x.n, y.n));
}

/* Competencias de armas y armaduras de la clase → { ar:[letras], s, m:false|true|'L'|'FL', ids:[…], texto } */
function crParseW(w) {
  const r = { s: false, m: false, ids: [] };
  String(w || '').split('|').forEach(parte => {
    if (/^[SM]+$/.test(parte)) { if (parte.includes('S')) r.s = true; if (parte.includes('M')) r.m = true; }
    else if (parte === '+ML') r.m = 'L';
    else if (parte === '+MFL') r.m = 'FL';
    else if (parte) r.ids = r.ids.concat(parte.split(','));
  });
  return r;
}
function crCompClase(clase, ed) {
  const c = CR_COMP[clase]; if (!c) return null;
  const A = typeof c.A === 'object' ? c.A[ed] : c.A;
  const w = crParseW(c.W[ed]);
  const ar = A.split('').map(l => CR_ARM_TXT[l]);
  const partes = [];
  if (ar.length) partes.push('Armaduras: ' + ar.join(', ') + (ed === '14' && c.nota && c.nota[14] ? ' (' + c.nota[14] + ')' : '') + '.');
  else partes.push('Armaduras: ninguna.');
  const armas = [];
  if (w.s) armas.push('simples');
  if (w.m === true) armas.push('marciales');
  else if (w.m === 'L') armas.push('marciales con la propiedad Ligera');
  else if (w.m === 'FL') armas.push('marciales con la propiedad Sutil o Ligera');
  w.ids.forEach(id => { const a = CR_ARMAS[id]; if (a) armas.push(a.n.replace(/\s*\(.*\)/, '').toLowerCase()); });
  partes.push('Armas: ' + armas.join(', ') + '.');
  return { A, w, texto: partes.join(' ') };
}
function crArmaCompetente(clase, ed, id) {
  const c = crCompClase(clase, ed); const a = crArma(id, ed);
  if (!c || !a) return true;
  if (c.w.ids.includes(id)) return true;
  if (a.c === 's') return c.w.s;
  if (c.w.m === true) return true;
  if (c.w.m === 'L') return (a.p || []).includes('L');
  if (c.w.m === 'FL') return (a.p || []).includes('L') || (a.p || []).includes('F');
  return false;
}
function crArmaduraCompetente(clase, ed, idArm) {
  const c = crCompClase(clase, ed); const a = CR_ARM[idArm];
  if (!c || !a) return true;
  return a.es ? c.A.includes('E') : c.A.includes(a.k);
}

/* ───────── Pericias, maestrías, idiomas, herramientas ───────── */
function crCupoPericias(C) {
  const t = CR_PERICIA[C.clase]; if (!t) return { n: 0, solo: null };
  const n = (t[C.ed] || []).filter(([nv]) => nv <= C.nivel).reduce((s, [, k]) => s + k, 0);
  return { n, solo: n && t.solo && C.ed === '24' ? t.solo : null };
}
function crCupoMaestrias(C) {
  const t = C.ed === '24' && CR_MAESTRIAS[C.clase]; if (!t) return { n: 0, cuerpo: false };
  return { n: t.n.filter(([nv]) => nv <= C.nivel).reduce((m, [, k]) => Math.max(m, k), 0), cuerpo: !!t.cuerpo };
}
/* Armas con maestría que puede elegir el jugador */
function crArmasMaestria(C) {
  const q = crCupoMaestrias(C);
  return Object.keys(CR_ARMAS).filter(id => {
    const a = crArma(id, C.ed); if (!a || !a.m) return false;
    if (q.cuerpo && a.r) return false;
    return crArmaCompetente(C.clase, C.ed, id);
  }).map(id => ({ id, n: CR_ARMAS[id].n, m: CR_ARMAS[id].m })).sort((x, y) => _ordenES(x.n, y.n));
}
function crCupoIdiomas(C) {
  // → { fijos: [..], libres: n }
  const fijos = ['Común'];
  let libres = 0;
  if (C.ed === '24') libres += 2;      // 5.5e: el personaje elige 2 idiomas al crearlo
  if (C.esp) {
    const b = crBasicosEspecie(C.esp);
    b.idiomas.forEach(i => { if (!fijos.includes(i)) fijos.push(i); });   // los idiomas fijos de la especie se conservan en ambas ediciones
    if (C.ed === '14') libres += b.idiomasLibres;
  }
  if (C.tf && DND_TRASFONDOS[C.tf] && C.ed === '14') {
    const idi = String(DND_TRASFONDOS[C.tf].idiomas || '');
    const m = idi.match(/^(\d) a elegir/); if (m) libres += parseInt(m[1]);
    const m2 = idi.match(/^(1|un) a elegir|^1 idioma/i); if (!m && m2) libres += 1;
  }
  const ci = C.clase && CR_CLASES[C.clase];
  if (ci && ci.idi) {
    (ci.idi.fijos || []).forEach(i => { if (!fijos.includes(i)) fijos.push(i); });
    ((ci.idi.libres && ci.idi.libres[C.ed]) || []).forEach(([nv, n]) => { if (nv <= C.nivel) libres += n; });
  }
  return { fijos, libres };
}
function crListaIdiomas() { return CR_IDIOMAS.est.concat(CR_IDIOMAS.raros); }

/* Herramientas: lo que da la clase / el trasfondo → { fijas:[…], picks:[{id, tipo, etq}] } */
function crParseHerr(txt) {
  const out = { fijas: [], picks: [] };
  const t = String(txt || '').trim();
  if (!t) return out;
  t.split(/,\s*(?![^()]*\))/).forEach(parte => {
    const p = parte.trim(); if (!p) return;
    const m = p.match(/^(\d)\s+(.*)$/);
    if (m) {
      const n = parseInt(m[1]), rest = m[2];
      const tipo = /artesano/i.test(rest) ? 'art' : /instrumento/i.test(rest) ? 'instr' : /juego/i.test(rest) ? 'juego' : 'libre';
      for (let i = 0; i < n; i++) out.picks.push({ tipo, etq: rest.replace(/\s*\(.*\)\s*$/, '') });
    } else out.fijas.push(p.replace(/\.$/, ''));
  });
  return out;
}
function crHerrClase(C) {
  const c = C.clase && CR_CLASES[C.clase] && CR_CLASES[C.clase].herr;
  const fijas = c && c.fija ? c.fija.slice() : [];
  const picks = [];
  if (c && c.pick) c.pick.forEach(([tipo, n]) => { for (let i = 0; i < n; i++) picks.push({ tipo, etq: tipo === 'art' ? 'Herramienta de artesano' : tipo === 'instr' ? 'Instrumento musical' : 'Instrumento o herramienta de artesano', de: 'clase' }); });
  return { fijas, picks };
}
function crHerrTrasfondo(C) {
  if (!C.tf || !DND_TRASFONDOS[C.tf]) return { fijas: [], picks: [] };
  const t24 = CR_TF24[C.tf];
  if (t24) {
    return { fijas: (t24.herr || []).slice(), picks: t24.pick ? [{ tipo: t24.pick, etq: t24.pick === 'art' ? 'Herramienta de artesano' : t24.pick === 'instr' ? 'Instrumento musical' : 'Juego de mesa', de: 'trasfondo' }] : [] };
  }
  const r = crParseHerr(DND_TRASFONDOS[C.tf].herr);
  r.picks.forEach(p => { p.de = 'trasfondo'; });
  return r;
}
function crListaHerr(tipo) {
  if (tipo === 'art') return CR_HERR.art;
  if (tipo === 'instr') return CR_HERR.instr;
  if (tipo === 'juego') return CR_HERR.juego;
  if (tipo === 'instrArt') return CR_HERR.instr.concat(CR_HERR.art);
  return CR_HERR.art.concat(CR_HERR.instr, CR_HERR.juego, CR_HERR.otras);
}

/* ───────── Equipo ───────── */
function crEqClase(C) {
  const d = C.clase && CR_CLASES[C.clase] && CR_CLASES[C.clase][C.ed];
  return d ? d.eq : null;
}
function crEs24Opciones(C) { const e = crEqClase(C); return !!(e && e.A); }

/* Lista de [ref, cantidad, clave-de-selección] del kit de clase elegido (sin resolver los comodines) */
function crItemsKitClase(C) {
  const e = crEqClase(C); if (!e) return [];
  const out = [];
  if (e.A) {
    const op = e[C.eq.kit]; if (!op) return [];
    op.it.forEach((it, i) => out.push([it[0], it[1], 'k' + i]));
  } else if (e.g) {
    if (C.eq.oro14 === 'oro') return [];
    e.g.forEach((g, gi) => {
      const lst = g.f || g[C.eq.grupos[gi]];
      if (lst) lst.forEach((it, i) => out.push([it[0], it[1], 'g' + gi + '_' + i]));
    });
  }
  return out;
}
function crOroKitClase(C) {
  const e = crEqClase(C); if (!e) return 0;
  if (e.A) return e[C.eq.kit] ? e[C.eq.kit].po : 0;
  if (C.eq.oro14 === 'oro') return parseInt(C.eq.oroTirado) || 0;
  return 0;
}
/* Items del trasfondo (24 con CR_TF24 / otros: texto) → { items:[[ref,q,clave]], po, texto:[…] } */
/* Trasfondos con «A: … · B: 50 po» en el texto del equipo → { a, b } */
function crTfAB(C) {
  const t = C.tf && DND_TRASFONDOS[C.tf]; if (!t) return null;
  const m = String(t.equipo || '').match(/^A:\s*(.*?)\s*·\s*B:\s*(.*)$/);
  return m ? { a: m[1], b: m[2] } : null;
}
function crItemsKitTf(C) {
  const out = { items: [], po: 0, texto: [] };
  if (!C.tf || !DND_TRASFONDOS[C.tf] || C.tf === '__personalizado__') return out;
  const t = CR_TF24[C.tf];
  if (t) {
    if (C.eq.tf === 'B') { out.po = 50; return out; }
    t.eq.it.forEach((it, i) => out.items.push([it[0], it[1], 't' + i]));
    out.po = t.eq.po;
    return out;
  }
  // básico: del texto «Ropa fina, kit de disfraz, bolsa con 15 po.»
  const ab = crTfAB(C);
  if (ab && C.eq.tf === 'B') { out.po = parseInt((ab.b.match(/(\d+)\s*po/) || [])[1]) || 0; return out; }
  let txt = ab ? ab.a : String(DND_TRASFONDOS[C.tf].equipo || '');
  txt = txt.replace(/\.$/, '');
  const mpo = txt.match(/(?:,|\sy)?\s*(?:una )?(?:bolsa|bolsita) con (\d+) po(?: y (?:una|un) ([^,]*))?/i);
  if (mpo) { out.po = parseInt(mpo[1]); txt = txt.replace(mpo[0], ''); if (mpo[2]) out.texto.push(mpo[2].trim()); }
  else { const m2 = txt.match(/(?:,|\sy)?\s*(\d+) po\b/); if (m2) { out.po = parseInt(m2[1]); txt = txt.replace(m2[0], ''); } }
  txt.split(/,\s*(?![^()]*\))/).forEach(x => {
    const s = x.trim().replace(/^(?:y|e)\s+/i, '').replace(/^(?:un|una|unos|unas)\s+/i, ''); if (!s) return;
    out.texto.push(s.charAt(0).toUpperCase() + s.slice(1));
  });
  return out;
}

/* Un comodín → lista de opciones [{v (valor guardado), n (nombre)}] */
function crOpcionesComodin(ref, C) {
  if (ref === '@wS' || ref === '@wM' || ref === '@wSC' || ref === '@wMC') return crArmasLista(C, ref).map(a => ({ v: a.id, n: a.n }));
  if (ref === '@instr') return CR_HERR.instr.map(x => ({ v: x, n: x }));
  if (ref === '@art') return CR_HERR.art.map(x => ({ v: x, n: x }));
  if (ref === '@instrArt') return CR_HERR.instr.concat(CR_HERR.art).map(x => ({ v: x, n: x }));
  if (ref === '@juego') return CR_HERR.juego.map(x => ({ v: x, n: x }));
  if (ref === '@fSag') return CR_FOCOS.fSag.map(x => ({ v: x, n: 'Símbolo sagrado (' + x + ')' }));
  if (ref === '@fArc') return CR_FOCOS.fArc.map(x => ({ v: x, n: 'Foco arcano (' + x + ')' }));
  if (ref === '@fDru') return CR_FOCOS.fDru.map(x => ({ v: x, n: 'Foco druídico (' + x + ')' }));
  return [];
}
const crEsComodin = ref => String(ref).startsWith('@');
const crEsArmaRef = ref => !!CR_ARMAS[ref];

/* Resuelve todo el equipo elegido → { filas:[{n, q, ref, tipo}], po, armas:{id: cantidad}, armadura:{id}|null, escudo:bool, faltan:[…] } */
function crResolverEquipo(C) {
  const res = { filas: [], po: 0, armas: {}, armaduras: [], escudo: false, faltan: [] };
  const sumar = (nombre, q, extra) => {
    const f = res.filas.find(x => x.n === nombre && !x.ref);
    if (f && !extra) f.q += q; else res.filas.push(Object.assign({ n: nombre, q }, extra || {}));
  };
  const anadir = (ref, q, clave, sel, etq) => {
    if (crEsComodin(ref)) {
      const v = sel[clave];
      if (!v) { res.faltan.push(etq || ref); return; }
      if (ref[1] === 'w') return anadir(v, q, clave, sel, etq);
      const op = crOpcionesComodin(ref, C).find(o => o.v === v);
      sumar(op ? op.n : v, q);
      return;
    }
    if (CR_PAQ[ref]) {
      const p = CR_PAQ[ref];
      p[C.ed].forEach(([n, nombre]) => res.filas.push({ n: nombre, q: n * q, desc: p.n }));
      return;
    }
    if (CR_ARMAS[ref]) {
      const a = crArma(ref, C.ed); if (!a) return;
      res.armas[ref] = (res.armas[ref] || 0) + q;
      res.filas.push({ n: a.n, q, ref, tipo: 'arma' });
      return;
    }
    if (CR_ARM[ref]) {
      const a = CR_ARM[ref];
      if (a.es) res.escudo = true; else res.armaduras.push(ref);
      res.filas.push({ n: a.n, q, ref, tipo: a.es ? 'escudo' : 'armadura' });
      return;
    }
    if (CR_OBJ[ref]) { const o = CR_OBJ[ref]; sumar(o[0], q * (o[1] || 1)); return; }
    sumar(ref, q);
  };
  crItemsKitClase(C).forEach(([ref, q, k]) => anadir(ref, q, 'c_' + k, C.eq.sel, 'Equipo de clase'));
  res.po += crOroKitClase(C);
  const tf = crItemsKitTf(C);
  // La herramienta/instrumento/juego que da el trasfondo es el mismo objeto que viene en su equipo
  const selTf = Object.assign({}, C.eq.selTf);
  tf.items.forEach(([ref, q, k]) => { if (['@art', '@instr', '@juego'].includes(ref) && !selTf['b_' + k] && C.tfOp.herr0) selTf['b_' + k] = C.tfOp.herr0; });
  tf.items.forEach(([ref, q, k]) => anadir(ref, q, 'b_' + k, selTf, 'Equipo de trasfondo'));
  tf.texto.forEach(t => sumar(t, 1));
  res.po += tf.po + (parseInt(C.oroExtra) || 0);
  // «el Instrumento elegido» de la clase (Bardo/Monje) y las herramientas elegidas ya están en las filas;
  return res;
}

/* Mejor armadura de las que lleva (la de más CA con la DES dada) */
function crMejorArmadura(C, ids, scores) {
  const dex = crMod(scores.dex);
  const ca = id => { const a = CR_ARM[id]; const bono = a.k === 'L' ? dex : a.k === 'M' ? Math.min(dex, 2) : 0; return a.ca + bono; };
  const ok = ids.filter(id => crArmaduraCompetente(C.clase, C.ed, id));
  const lista = ok.length ? ok : ids;
  return lista.slice().sort((x, y) => ca(y) - ca(x))[0] || null;
}

/* Fila de ataque de un arma → { nombre, stat, extra, qty, dado, tipo, alcance, notas } o null */
function crFilaAtaque(C, id, scores) {
  const a = crArma(id, C.ed); if (!a) return null;
  const m = String(a.d).match(/^(\d+)d(\d+)$/); if (!m) return null;   // daño fijo (cerbatana): sin fila
  const props = a.p || [];
  const fue = crMod(scores.str), des = crMod(scores.dex);
  let stat;
  if (a.r) stat = 'dex';
  else if (props.includes('F')) stat = des >= fue ? 'dex' : 'str';
  else stat = 'str';
  if (C.clase === 'Monje' && !a.r && ((a.c === 's' && !props.includes('2H') && !props.includes('H')) || props.includes('L'))) stat = des >= fue ? 'dex' : 'str';
  const pb = (typeof calcPB === 'function') ? calcPB(C.nivel) : 2;
  const comp = crArmaCompetente(C.clase, C.ed, id);
  const notas = [];
  props.filter(p => CR_PROP[p] && p !== 'A' && p !== 'LD' || p === 'LD' || p === 'A').forEach(p => {
    let t = CR_PROP[p]; if (p === 'V' && a.v) t += ' (' + a.v + ')'; notas.push(t);
  });
  if (C.ed === '24' && a.m && C.maestrias.includes(id)) notas.push('Maestría: ' + CR_MAESTRIA[a.m]);
  else if (C.ed === '24' && a.m) notas.push('(maestría: ' + CR_MAESTRIA[a.m] + ')');
  if (!comp) notas.push('SIN competencia');
  let alcance = a.r ? (a.a || '') : (props.includes('R') ? '10' : '5');
  if (a.r) alcance = alcance + ' ft'; else if (props.includes('T') && a.a) alcance = alcance + ' ft (arrojadiza ' + a.a + ')'; else alcance += ' ft';
  return { nombre: a.n, stat, extra: comp ? 0 : -pb, qty: parseInt(m[1]), dado: 'd' + m[2], tipo: a.t, alcance, notas: notas.join(' · ') };
}

/* Texto breve de un arma para la vista previa del equipo */
function crResumenArma(C, id) {
  const a = crArma(id, C.ed); if (!a) return '';
  const partes = [`${a.d} ${a.t.toLowerCase()}`];
  (a.p || []).forEach(p => { if (CR_PROP[p]) partes.push(CR_PROP[p] + (p === 'V' && a.v ? ' (' + a.v + ')' : '')); });
  if (a.a) partes.push(a.a + ' ft');
  if (C.ed === '24' && a.m) partes.push('Maestría: ' + CR_MAESTRIA[a.m]);
  return partes.join(' · ');
}

/* CA que tendrá el personaje (para la vista previa) */
function crCalcularCA(C, scores, res) {
  const arm = crMejorArmadura(C, res.armaduras, scores);
  const dex = crMod(scores.dex);
  let ca, desc;
  if (arm) {
    const a = CR_ARM[arm]; const bono = a.k === 'L' ? dex : a.k === 'M' ? Math.min(dex, 2) : 0;
    ca = a.ca + bono; desc = a.n.replace(/\s*\(.*\)/, '');
  } else if (C.clase === 'Bárbaro') { ca = 10 + dex + crMod(scores.con); desc = 'Defensa sin armadura (Bárbaro)'; }
  else if (C.clase === 'Monje' && !res.escudo) { ca = 10 + dex + crMod(scores.wis); desc = 'Defensa sin armadura (Monje)'; }
  else { ca = 10 + dex; desc = 'Sin armadura'; }
  if (res.escudo && crArmaduraCompetente(C.clase, C.ed, 'shield')) { ca += 2; desc += ' + escudo'; }
  return { ca, desc, arm };
}

/* Primera clase lanzadora, tipo de lanzamiento: ¿tiene truco extra por Orden? */
function crOrdenDe(C) { return C.ed === '24' && CR_ORDEN[C.clase] ? CR_ORDEN[C.clase] : null; }
function crOrdenOpcion(C) { const o = crOrdenDe(C); return o ? (o.op.find(x => x.v === C.orden) || null) : null; }

/* ───────── Validación de cada paso → { ok, msg } ───────── */
function crValidoPersonaje(C) {
  if (!C.clase) return { ok: false, msg: 'Elige una clase.' };
  if (!(C.nivel >= 1 && C.nivel <= 20)) return { ok: false, msg: 'El nivel va de 1 a 20.' };
  return { ok: true, msg: '' };
}
function crValidoEspecie(C) {
  if (!C.esp) return { ok: false, msg: 'Elige una especie.' };
  const e = CR_ESP24[C.esp];
  if (e) {
    for (const g of (e.eleg || [])) {
      if (g.dote) { const v = C.espOp.dote; if (!v) return { ok: false, msg: 'Elige la dote de Origen de Versátil.' }; const q = crDoteValida(C, 'esp'); if (!q.ok) return q; continue; }
      if (!C.espOp[g.id]) return { ok: false, msg: `Falta elegir: ${g.t}.` };
    }
  } else {
    if (!crAsiCompleto(C)) return { ok: false, msg: 'Reparte los aumentos de característica de la especie (cada uno a una característica distinta).' };
    const libres = crHabilidadesEspecie(C.esp).libres;
    if (libres && (C.espHabLibres || []).filter(Boolean).length < libres) return { ok: false, msg: `Elige ${libres} habilidad(es) de la especie.` };
  }
  return { ok: true, msg: '' };
}
/* Dote de origen con elecciones: 'tf' (trasfondo) o 'esp' (Humano) */
function crDoteElegida(C, quien) {
  if (quien === 'tf') { const d = crDoteDeTrasfondo(C); return d ? d.n : ''; }
  return C.espOp.dote || '';
}
function crDoteValida(C, quien) {
  const nombre = crDoteElegida(C, quien); if (!nombre) return { ok: true, msg: '' };
  const op = crDoteOpciones(nombre);
  const st = (C.tfDote[quien] = C.tfDote[quien] || {});
  if (!op) return { ok: true, msg: '' };
  if (op.listas) {
    const fija = quien === 'tf' ? (crDoteDeTrasfondo(C) || {}).lista : '';
    const lista = fija || st.lista;
    if (!lista) return { ok: false, msg: 'Magic Initiate: elige la lista de conjuros.' };
    if ((st.trucos || []).length < op.trucos) return { ok: false, msg: `Magic Initiate: elige ${op.trucos} trucos.` };
    if ((st.conj || []).length < op.conj) return { ok: false, msg: 'Magic Initiate: elige un conjuro de nivel 1.' };
    if (!st.car) return { ok: false, msg: 'Magic Initiate: elige la característica de lanzamiento.' };
  }
  if (op.habherr && (st.habherr || []).length < op.habherr) return { ok: false, msg: `Skilled: elige ${op.habherr} competencias (habilidades o herramientas).` };
  if (op.instr && (st.instr || []).length < op.instr) return { ok: false, msg: `Musician: elige ${op.instr} instrumentos.` };
  if (op.art && (st.art || []).length < op.art) return { ok: false, msg: `Crafter: elige ${op.art} herramientas de artesano.` };
  return { ok: true, msg: '' };
}
function crValidoTrasfondo(C) {
  if (!C.tf) return { ok: false, msg: 'Elige un trasfondo.' };
  if (C.tf === '__personalizado__') return { ok: true, msg: '' };
  const t = crHerrTrasfondo(C);
  if (t.picks.some((p, i) => !(C.tfOp['herr' + i]))) return { ok: false, msg: 'Elige la herramienta, el instrumento o el juego del trasfondo.' };
  { const v = crDoteValida(C, 'tf'); if (!v.ok) return v; }
  const lib = crHabLibresFuera(C).find(x => x.id === 'tf');
  if (lib && (C.tfOp.hab || []).filter(Boolean).length < lib.n) return { ok: false, msg: `Elige ${lib.n} habilidad(es) del trasfondo.` };
  return { ok: true, msg: '' };
}
function crValidoAtributos(C) {
  if (C.atr && C.atr.omitido) return { ok: true, msg: '' };
  if (C.atr && C.atr.aplicado) {
    if (C.atr.sig !== crSigAtr(C)) return { ok: false, msg: 'Cambiaste la especie, el trasfondo o las reglas después de generar los atributos: vuelve a abrir el generador para aplicar los aumentos correctos.' };
    return { ok: true, msg: '' };
  }
  return { ok: false, msg: 'Genera los atributos con el generador (o márcalos como «los pondré a mano»).' };
}
function crValidoHabilidades(C) {
  const h = crClaseHab(C);
  if ((C.hab || []).length < h.n) return { ok: false, msg: `Elige ${h.n} habilidades de clase (te faltan ${h.n - C.hab.length}).` };
  const cp = crCupoPericias(C);
  if (cp.n && (C.pericias || []).length < cp.n) return { ok: false, msg: `Elige ${cp.n} pericia(s) (te faltan ${cp.n - C.pericias.length}).` };
  const ci = crCupoIdiomas(C);
  const nId = (C.idiomas || []).filter(Boolean).length;
  if (nId < ci.libres) return { ok: false, msg: `Elige ${ci.libres} idioma(s) (te faltan ${ci.libres - nId}).` };
  const hc = crHerrClase(C);
  if (hc.picks.some((p, i) => !C.herr[i])) return { ok: false, msg: 'Elige las herramientas o instrumentos de la clase.' };
  const mq = crCupoMaestrias(C);
  if (mq.n && (C.maestrias || []).length < mq.n) return { ok: false, msg: `Elige ${mq.n} armas para la Maestría (te faltan ${mq.n - C.maestrias.length}).` };
  if (crOrdenDe(C) && !C.orden) return { ok: false, msg: `Elige ${crOrdenDe(C).t}.` };
  return { ok: true, msg: '' };
}
function crValidoEquipo(C) {
  const e = crEqClase(C);
  if (!e) return { ok: true, msg: '' };
  if (e.A) { if (!C.eq.kit) return { ok: false, msg: 'Elige la opción de equipo de tu clase.' }; }
  else {
    if (C.eq.oro14 === 'oro') { if (!(parseInt(C.eq.oroTirado) > 0)) return { ok: false, msg: 'Tira o escribe el oro inicial.' }; }
    else {
      if (!C.eq.oro14) return { ok: false, msg: 'Elige entre el equipo de la clase y el oro inicial.' };
      for (let i = 0; i < e.g.length; i++) if (!e.g[i].f && !C.eq.grupos[i]) return { ok: false, msg: `Elige una opción en el grupo ${i + 1} del equipo.` };
    }
  }
  if (C.tf && C.tf !== '__personalizado__' && (CR_TF24[C.tf] || crTfAB(C)) && !['A', 'B'].includes(C.eq.tf)) return { ok: false, msg: 'Elige el equipo del trasfondo.' };
  const r = crResolverEquipo(C);
  if (r.faltan.length) return { ok: false, msg: 'Falta elegir: ' + crUnicos(r.faltan).join(', ') + '.' };
  return { ok: true, msg: '' };
}


/* ───────── Estado: limpiezas y ajustes ───────── */
function crLimpiarEspecie(C) { C.esp = ''; C.espOp = {}; C.espAsi = { alt: 0, picks: [] }; C.espHabLibres = []; delete C.tfDote.esp; }
function crLimpiarTrasfondo(C) { C.tf = ''; C.tfOp = {}; delete C.tfDote.tf; C.eq.tf = 'A'; C.eq.selTf = {}; }
function crLimpiarClase(C) {
  C.hab = []; C.pericias = []; C.idiomas = []; C.herr = []; C.maestrias = []; C.orden = '';
  C.eq.kit = ''; C.eq.grupos = {}; C.eq.oro14 = null; C.eq.oroTirado = null; C.eq.sel = {};
}
/* Cambia las reglas (5.5e / 5e): lo que dependía de la edición se vuelve a elegir */
function crCambiarEdicion(C, ed) {
  if (C.ed === ed) return;
  C.ed = ed;
  if (!C.verTodas) {
    if (C.esp && crEdDeClave(C.esp) !== ed) crLimpiarEspecie(C);
    if (C.tf && C.tf !== '__personalizado__' && crEdDeClave(C.tf) !== ed) crLimpiarTrasfondo(C);
  }
  crLimpiarClase(C);
  C.idiomas = [];
}
/* Firma de lo que influye en los aumentos de característica (si cambia, hay que regenerar los atributos) */
function crSigAtr(C) { return [C.ed, C.tf, JSON.stringify(crBonoEspecie(C))].join('|'); }
/* Recorta las elecciones a los cupos actuales (cambió el nivel o desapareció una habilidad) */
function crAjustarCupos(C) {
  const cp = crCupoPericias(C); const fin = typeof crHabilidadesFinales === 'function' ? crHabilidadesFinales(C) : null;
  C.pericias = (C.pericias || []).filter(h => (!fin || fin.has(h)) && (!cp.solo || cp.solo.includes(h))).slice(0, cp.n);
  C.maestrias = (C.maestrias || []).filter(id => crArmasMaestria(C).some(a => a.id === id)).slice(0, crCupoMaestrias(C).n);
  const ci = crCupoIdiomas(C);
  C.idiomas = (C.idiomas || []).filter(i => !ci.fijos.includes(i)).slice(0, ci.libres);
  const h = crClaseHab(C);
  C.hab = (C.hab || []).filter(x => !h.de || h.de.includes(x)).slice(0, h.n);
}
/* Quita de las habilidades de clase las que ya llegan por especie, trasfondo o dote */
function crLimpiarHabDup(C) {
  const otras = crHabOtras(C, 'clase');
  C.hab = (C.hab || []).filter(h => !otras.has(h));
}
