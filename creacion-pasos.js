/* ══════════════════════════════════════════════════════════════════
   creacion-pasos.js — Pasos de la Parte 1 del asistente de creación
   Cada paso: CR_RENDER[paso](C, cuerpo, ctx). ctx = { actualizar, rehacer, ref, ir }.
   Depende de creacion-ui.js (widgets), creacion-logica.js y creacion-aplicar.js.
══════════════════════════════════════════════════════════════════ */

const CR_COMODIN_TXT = {
  '@wS': 'un arma simple', '@wM': 'un arma marcial', '@wSC': 'un arma simple cuerpo a cuerpo', '@wMC': 'un arma marcial cuerpo a cuerpo',
  '@instr': 'un instrumento musical', '@art': 'una herramienta de artesano', '@instrArt': 'un instrumento o herramienta de artesano',
  '@juego': 'un juego', '@fSag': 'un símbolo sagrado', '@fArc': 'un foco arcano', '@fDru': 'un foco druídico',
};
/* Nombre en español de una referencia de equipo (sin el inglés entre paréntesis) */
function crNombreRef(ref) {
  if (CR_COMODIN_TXT[ref]) return CR_COMODIN_TXT[ref];
  if (CR_PAQ[ref]) return CR_PAQ[ref].n;
  if (CR_ARMAS[ref]) return CR_ARMAS[ref].n.replace(/\s*\(.*\)\s*$/, '');
  if (CR_ARM[ref]) return CR_ARM[ref].n.replace(/\s*\(.*\)\s*$/, '');
  if (CR_OBJ[ref]) return CR_OBJ[ref][0].replace(/\s*\(.*\)\s*$/, '');
  return ref;
}
function crTextoItems(items) {
  return (items || []).map(([ref, q]) => {
    const n = crNombreRef(ref); const cant = CR_OBJ[ref] && CR_OBJ[ref][1] && q === 1 ? CR_OBJ[ref][1] : q;
    return (cant > 1 ? cant + '× ' : '') + n;
  }).join(', ');
}

/* ═════════════════ PASO 1 · PERSONAJE ═════════════════ */
function crInfoClaseNodo(C) {
  const d = crEl('div', 'cr-clase-info');
  if (!C.clase) { d.appendChild(crAyuda('Elige una clase para ver su resumen.', 'ag-nota-peq')); return d; }
  const cd = _getClaseData(C.clase); const f = (k, v) => { if (v) { const p = crEl('div', 'cr-prev-r'); p.append(crEl('b', '', k + ': '), document.createTextNode(v)); d.appendChild(p); } };
  f('Dado de golpe', cd.diceHit || 'd8');
  f('Salvaciones', (CLASE_SALVACIONES[C.clase] || []).map(a => CR_ATR_NOMBRE[a]).join(' y '));
  f('Características principales', (AG_PRINCIPALES[C.clase] || []).map(a => CR_ATR_NOMBRE[a]).join(' y '));
  const cast = { full: 'lanzador completo', half: 'semilanzador', third: 'lanzador de un tercio', warlock: 'Magia de Pacto', none: 'no lanza conjuros' }[cd.casting] || '';
  f('Conjuros', cast + (cd.spellStat && cd.casting !== 'none' ? ` (${cd.spellStat})` : ''));
  const comp = crCompClase(C.clase, C.ed); if (comp) f('Competencias', comp.texto);
  const h = crClaseHab(C); if (h.n) f('Habilidades', `elige ${h.n}` + (h.de ? ': ' + h.de.join(', ') : ' (a tu elección)'));
  const rasgos = ((DND_CLASES[C.clase] || {}).rasgos || []).filter(r => (r.nv || 1) === 1 && !(C.ed === '14' && /Maestría con Armas|Weapon Mastery/.test(r.n))).map(r => r.n);
  if (rasgos.length) f('Rasgos de nivel 1', rasgos.join(', '));
  if (C.clase === 'Blood Hunter' || C.clase === 'Artificer') d.appendChild(crAyuda(C.clase === 'Blood Hunter'
    ? 'Blood Hunter no está en el Manual del Jugador: el equipo inicial es una propuesta aproximada (comprueba el tuyo con el DM).'
    : (C.ed === '14' ? 'Artificer (Tasha): el equipo inicial de 5e es una propuesta aproximada.' : ''), 'ag-nota-peq'));
  return d;
}

function crRenderBase(C, cuerpo, ctx) {
  cuerpo.appendChild(crAyuda('Vas a crear tu personaje paso a paso: primero lo básico (reglas, clase y nivel), después especie, trasfondo, atributos, competencias y equipo. Al final se elige la vida, los rasgos, las mejoras y los conjuros de cada nivel. Puedes volver atrás en cualquier momento.'));
  cuerpo.appendChild(crSec('Reglas', crRadios({
    name: 'cr-ed', valor: C.ed, fid: 'ed',
    items: [
      { v: '24', t: '5.5e (2024)', d: 'Manual del Jugador 2024: especies y trasfondos nuevos; los aumentos de característica los da el trasfondo.' },
      { v: '14', t: '5e (2014)', d: 'Manual del Jugador 2014 y suplementos: los aumentos los da la especie; el trasfondo da equipo y un rasgo.' },
    ],
    alCambiar: v => { crCambiarEdicion(C, v); ctx.rehacer(); },
  })));

  const nom = document.createElement('input'); nom.type = 'text'; nom.className = 'ag-num cr-nombre'; nom.placeholder = 'Nombre del personaje (opcional)'; nom.value = C.nombre; nom.maxLength = 80;
  nom.setAttribute('aria-label', 'Nombre del personaje'); nom.dataset.fid = 'nombre';
  nom.addEventListener('input', () => { C.nombre = nom.value; ctx.actualizar(); });

  const selClase = crSelect({
    opciones: Object.keys(DND_CLASES).sort(_ordenES).map(c => ({ v: c, n: c })), valor: C.clase, vacio: '— Elige una clase —', etq: 'Clase', fid: 'clase',
    alCambiar: v => { if (v !== C.clase) { C.clase = v; crLimpiarClase(C); } ctx.rehacer(); },
  });
  const selNivel = crSelect({
    opciones: Array.from({ length: 20 }, (_, i) => ({ v: String(i + 1), n: String(i + 1) })), valor: String(C.nivel), etq: 'Nivel inicial', fid: 'nivel',
    alCambiar: v => { C.nivel = parseInt(v) || 1; crAjustarCupos(C); ctx.rehacer(); },
  });
  cuerpo.appendChild(crSec('Personaje', crFila('Nombre:', nom), crFila('Clase:', selClase), crFila('Nivel inicial:', selNivel),
    C.nivel > 1 ? crAyuda(`Empiezas en nivel ${C.nivel}: tendrás el equipo inicial de nivel 1 (con oro extra editable en el paso Equipo) y en la Parte 2 elegirás los puntos de golpe, los rasgos, las mejoras de característica y los conjuros de cada nivel hasta el ${C.nivel}.`, 'ag-nota-peq') : null));
  cuerpo.appendChild(crSec('Resumen de la clase', crInfoClaseNodo(C)));
}

/* ═════════════════ PASO 2 · ESPECIE ═════════════════ */
function crSelTam(C, g, ctx) {
  if (!C.espOp[g.id]) C.espOp[g.id] = g.tam[0];
  return crFila(g.t + ':', crSelect({ opciones: g.tam.map(t => ({ v: t, n: t })), valor: C.espOp[g.id], etq: g.t, fid: 'esp-' + g.id, alCambiar: v => { C.espOp[g.id] = v; ctx.actualizar(); } }));
}

function crPanelEspecie(C, cont, ctx) {
  cont.textContent = '';
  if (!C.esp) { cont.appendChild(crAyuda('Elige una especie de la lista para ver y decidir sus opciones.', 'ag-nota-peq')); return; }
  const key = C.esp, e24 = CR_ESP24[key], b = crBasicosEspecie(key);
  const repintar = () => { crPanelEspecie(C, cont, ctx); ctx.actualizar(); };
  const sec = crEl('div', 'ag-sec'); sec.appendChild(crEl('div', 'ag-sec-tit', 'Tus elecciones de especie'));
  sec.appendChild(crAyuda(`Velocidad ${crVelocidad(C)} pies` + (b.tam.length ? ` · Tamaño: ${b.tam.join(' o ')}` : '') + (crVision(C) ? ` · ${crVision(C)}` : '') +
    (b.idiomas.length ? ` · Idiomas: ${b.idiomas.join(', ')}` : ''), 'ag-nota-peq'));
  if (e24) {
    (e24.eleg || []).forEach(g => {
      if (g.tam) sec.appendChild(crSelTam(C, g, ctx));
      else if (g.op) {
        sec.appendChild(crEl('div', 'cr-sub', g.t));
        sec.appendChild(crRadios({ name: 'cr-esp-' + g.id, valor: C.espOp[g.id], fid: 'esp-' + g.id, items: g.op.map(o => ({ v: o.v, t: o.v, d: o.d })), alCambiar: v => { C.espOp[g.id] = v; repintar(); } }));
      } else if (g.car) {
        sec.appendChild(crFila(g.t + ':', crSelect({ opciones: g.car.map(c => ({ v: c, n: CR_ATR_NOMBRE[CR_ABREV[c]] + ' (' + c + ')' })), valor: C.espOp[g.id], vacio: '— elige —', etq: g.t, fid: 'esp-' + g.id, alCambiar: v => { C.espOp[g.id] = v; ctx.actualizar(); } })));
      } else if (g.hab) {
        const lista = g.hab === 'cualquiera' ? CR_HAB_NOMBRES : g.hab; const otras = crHabOtras(C, 'esp-24');
        sec.appendChild(crFila(g.t + ':', crSelect({ opciones: lista.map(h => ({ v: h, n: h, off: otras.has(h) })), valor: C.espOp[g.id], vacio: '— elige —', etq: g.t, fid: 'esp-' + g.id, alCambiar: v => { C.espOp[g.id] = v; ctx.actualizar(); } })));
      } else if (g.dote) {
        sec.appendChild(crFila(g.t + ':', crSelect({
          opciones: crDotesOrigen().map(d => ({ v: d.n, n: d.n.replace(/\s*\[[^\]]+\]\s*$/, '') })), valor: C.espOp.dote, vacio: '— elige una dote de Origen —', etq: 'Dote de Origen', fid: 'esp-dote',
          alCambiar: v => { C.espOp.dote = v; C.tfDote.esp = {}; repintar(); },
        })));
        const dcont = crEl('div', 'cr-dote'); sec.appendChild(dcont);
        crDoteUI(C, 'esp', dcont, ctx);
      }
    });
    if (!(e24.eleg || []).length) sec.appendChild(crAyuda('Esta especie no tiene elecciones: sus rasgos se anotan tal cual en la ficha.', 'ag-nota-peq'));
    const sp = crConjurosEspecie(C);
    if (sp.length) sec.appendChild(crAyuda('Se anotarán en la ficha los conjuros: ' + sp.map(id => (snIdxConjuros().get(id) || { sp: { n: id } }).sp.n).join(', ') + '.', 'ag-nota-peq'));
  } else {
    // Otras fuentes: aumentos (solo 5e), habilidades libres y el texto de rasgos
    const asi = crParseAsi(b.asiTxt);
    if (C.ed === '14') {
      sec.appendChild(crEl('div', 'cr-sub', 'Aumentos de característica'));
      if (!b.asiTxt) sec.appendChild(crAyuda('Esta especie no indica aumentos de característica: si los tiene, añádelos como «Bonos extra» en el generador de atributos.', 'ag-nota-peq'));
      else if (!asi.ok) sec.appendChild(crAyuda(`No he podido interpretar los aumentos («${b.asiTxt}»): añádelos tú como «Bonos extra» en el generador de atributos.`, 'ag-nota'));
      else {
        const fij = Object.entries(asi.fijos).map(([a, n]) => `${CR_ATR_NOMBRE[a]} +${n}`);
        if (fij.length) sec.appendChild(crAyuda('Fijos: ' + fij.join(', '), 'ag-nota-peq'));
        if (asi.alt) sec.appendChild(crRadios({ name: 'cr-asi-alt', valor: String(C.espAsi.alt), fid: 'asi-alt', items: [{ v: '0', t: '+2 / +1', d: 'una característica +2 y otra +1' }, { v: '1', t: '+1 / +1 / +1', d: 'tres características +1' }], alCambiar: v => { C.espAsi.alt = parseInt(v); C.espAsi.picks = []; repintar(); } }));
        const grupos = crGruposAsi(C);
        C.espAsi.picks.length = grupos.length; for (let i = 0; i < grupos.length; i++) C.espAsi.picks[i] = C.espAsi.picks[i] || '';
        grupos.forEach((g, i) => {
          const perm = g.perm || CR_ATR; const otros = new Set(C.espAsi.picks.filter((x, j) => j !== i && x));
          sec.appendChild(crFila(`+${g.n} a:`, crSelect({
            opciones: perm.map(a => ({ v: a, n: CR_ATR_NOMBRE[a], off: otros.has(a) || asi.fijos[a] > 0 })), valor: C.espAsi.picks[i], vacio: '— elige —', etq: `Aumento +${g.n}`, fid: 'asi-' + i,
            alCambiar: v => { C.espAsi.picks[i] = v; repintar(); },
          })));
        });
        if (!grupos.length && !fij.length) sec.appendChild(crAyuda('Esta especie no da aumentos de característica.', 'ag-nota-peq'));
      }
    } else {
      sec.appendChild(crAyuda('Con las reglas de 5.5e los aumentos de característica los da el trasfondo: los de esta especie (de 5e) no se aplican.', 'ag-nota-peq'));
    }
    const hs = crHabilidadesEspecie(key);
    if (hs.fijas.length) sec.appendChild(crAyuda('Competencia en: ' + hs.fijas.join(', ') + '.', 'ag-nota-peq'));
    if (hs.libres) {
      sec.appendChild(crEl('div', 'cr-sub', `Habilidades a tu elección (${hs.libres})`));
      sec.appendChild(crSelectsN({
        n: hs.libres, sel: C.espHabLibres, etq: i => 'Habilidad de especie ' + (i + 1), fid: 'esp-hab',
        opciones: () => { const otras = crHabOtras(C, 'esp-libres'); return CR_HAB_NOMBRES.map(h => ({ v: h, n: h, off: otras.has(h) })); },
        alCambiar: () => { ctx.actualizar(); },
      }));
    }
    if (b.idiomasLibres && C.ed === '14') sec.appendChild(crAyuda(`Idiomas: ${b.idiomasLibres} más a tu elección (paso Competencias).`, 'ag-nota-peq'));
    sec.appendChild(crAyuda('El resto de rasgos de la especie se anotan como texto en la ficha (Características → Especie).', 'ag-nota-peq'));
  }
  cont.appendChild(sec);
}

function crRenderEsp(C, cuerpo, ctx) {
  cuerpo.appendChild(crAyuda(C.ed === '24'
    ? 'Elige tu especie. Las 10 del Manual del Jugador 2024 incluyen todas sus elecciones (linaje, ascendencia, tamaño, característica de lanzamiento…).'
    : 'Elige tu especie (o raza). Se muestran las de 5e: en las del Manual del Jugador 2014 y suplementos se aplican velocidad, aumentos, idiomas y habilidades; el resto de rasgos queda como texto.'));
  const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = C.verTodas; cb.dataset.fid = 'ver-todas';
  const lab = crEl('label', 'ag-check'); lab.append(cb, crEl('span', '', 'Mostrar también las de otras ediciones y fuentes'));
  const cont = crEl('div', 'cr-panel');
  const sel = crSelectorLista({
    items: crListaEspecies(C).map(k => ({ v: k, n: crNombreCorto(k), sub: crFuenteDeClave(k) })), valor: C.esp, etq: 'Especies', buscar: 'Buscar especie…', fid: 'esp',
    vista: crNodoEspecie,
    alElegir: v => { if (v !== C.esp) { crLimpiarEspecie(C); C.esp = v; } crPanelEspecie(C, cont, ctx); ctx.actualizar(); },
  });
  cb.addEventListener('change', () => { C.verTodas = cb.checked; ctx.rehacer(); });
  cuerpo.append(lab, sel.el, cont);
  crPanelEspecie(C, cont, ctx);
}

/* ═════════════════ Dotes de origen con elecciones ═════════════════ */
function crCandidatosDote(C, quien, tipo) {
  const st = (C.tfDote[quien] = C.tfDote[quien] || {});
  const fija = quien === 'tf' ? (crDoteDeTrasfondo(C) || {}).lista : '';
  const lista = fija || st.lista; if (!lista) return [];
  // conjuros ya elegidos en otra dote o que concede la especie
  const usados = new Set(crConjurosEspecie(C));
  ['tf', 'esp'].forEach(q => { const o = (C.tfDote || {})[q] || {}; if (q !== quien && /^Magic Initiate/.test(crDoteElegida(C, q))) (o.trucos || []).concat(o.conj || []).forEach(i => usados.add(i)); });
  const propios = new Set((st.trucos || []).concat(st.conj || []));
  const out = [];
  (DND_SPELLS[tipo === 'truco' ? 0 : 1] || []).forEach(sp => {
    if (!(HECHIZOS_CLASES[sp.id] || []).includes(lista)) return;
    if (usados.has(sp.id) && !propios.has(sp.id)) return;
    out.push({ sp, nv: tipo === 'truco' ? 0 : 1 });
  });
  return out.sort((a, b) => _ordenES(a.sp.n, b.sp.n));
}

function crDoteUI(C, quien, cont, ctx) {
  cont.textContent = '';
  const nombre = crDoteElegida(C, quien); if (!nombre) return;
  const dote = DND_DOTES.find(d => d.n === nombre) || crDotePorNombre(nombre, C.ed);
  if (!dote) { cont.appendChild(crAyuda(`No encuentro la dote «${nombre}».`, 'ag-nota')); return; }
  const op = crDoteOpciones(dote.n);
  const st = (C.tfDote[quien] = C.tfDote[quien] || {});
  const repintar = () => { crDoteUI(C, quien, cont, ctx); ctx.actualizar(); };
  const cab = crEl('div', 'cr-dote-cab'); cab.append(crEl('strong', '', 'Dote de Origen: ' + dote.n.replace(/\s*\[[^\]]+\]\s*$/, '')), crEl('span', 'opc-etq', 'Origen'));
  cont.appendChild(cab);
  const det = crEl('details', 'sn-rasgo'); det.appendChild(crEl('summary', '', 'Ver descripción')); det.appendChild(crEl('p', 'sn-rasgo-d', dote.d)); cont.appendChild(det);
  if (!op) return;

  if (op.listas) {
    const fija = quien === 'tf' ? (crDoteDeTrasfondo(C) || {}).lista : '';
    if (fija) { st.lista = fija; cont.appendChild(crAyuda('Lista de conjuros: ' + fija + ' (la fija tu trasfondo).', 'ag-nota-peq')); }
    else cont.appendChild(crFila('Lista de conjuros:', crSelect({
      opciones: op.listas.map(l => ({ v: l, n: l })), valor: st.lista, vacio: '— elige —', etq: 'Lista de conjuros', fid: 'dote-' + quien + '-lista',
      alCambiar: v => { st.lista = v; st.trucos = []; st.conj = []; repintar(); },
    })));
    cont.appendChild(crFila('Característica de lanzamiento:', crSelect({
      opciones: op.car.map(c => ({ v: c, n: CR_ATR_NOMBRE[CR_ABREV[c]] + ' (' + c + ')' })), valor: st.car, vacio: '— elige —', etq: 'Característica de lanzamiento', fid: 'dote-' + quien + '-car',
      alCambiar: v => { st.car = v; ctx.actualizar(); },
    })));
    st.trucos = st.trucos || []; st.conj = st.conj || [];
    if (st.lista) {
      const apis = [];
      const alCambiar = () => { apis.forEach(a => a.refrescar()); ctx.actualizar(); };
      const mk = (tit, sel, max, tipo, nv) => {
        const s = crEl('div', 'ag-sec sn-sp-sec'); s.appendChild(crEl('div', 'ag-sec-tit', `${tit} (${sel.length}/${max})`));
        const api = snSelectorConjuros({ sel, max, nivelMin: nv, nivelMax: nv, etiqueta: tit, candidatos: () => crCandidatosDote(C, quien, tipo), onChange: alCambiar });
        s.appendChild(api.el); apis.push({ refrescar: () => { s.firstChild.textContent = `${tit} (${sel.length}/${max})`; api.refrescar(); } }); return s;
      };
      cont.appendChild(mk(`Trucos de ${st.lista}`, st.trucos, op.trucos, 'truco', 0));
      cont.appendChild(mk(`Conjuro de nivel 1 de ${st.lista}`, st.conj, op.conj, 'conj', 1));
    }
  }
  if (op.habherr) {
    st.habherr = st.habherr || [];
    const otras = crHabOtras(C, 'skilled-' + quien);
    cont.appendChild(crEl('div', 'cr-sub', `Elige ${op.habherr} competencias (habilidades o herramientas): ${st.habherr.length}/${op.habherr}`));
    cont.appendChild(crChecks({
      items: CR_HAB_NOMBRES.map(h => ({ v: h, n: h, off: otras.has(h) })).concat(crListaHerr('libre').map(h => ({ v: h, n: h }))),
      sel: st.habherr, max: op.habherr, fid: 'dote-' + quien + '-hh', alCambiar: repintar,
    }));
  }
  if (op.instr) {
    st.instr = st.instr || [];
    cont.appendChild(crEl('div', 'cr-sub', `Elige ${op.instr} instrumentos musicales: ${st.instr.length}/${op.instr}`));
    cont.appendChild(crChecks({ items: CR_HERR.instr.map(h => ({ v: h, n: h })), sel: st.instr, max: op.instr, fid: 'dote-' + quien + '-in', alCambiar: repintar }));
  }
  if (op.art) {
    st.art = st.art || [];
    cont.appendChild(crEl('div', 'cr-sub', `Elige ${op.art} herramientas de artesano: ${st.art.length}/${op.art}`));
    cont.appendChild(crChecks({ items: CR_HERR.art.map(h => ({ v: h, n: h })), sel: st.art, max: op.art, fid: 'dote-' + quien + '-ar', alCambiar: repintar }));
  }
}

/* ═════════════════ PASO 3 · TRASFONDO ═════════════════ */
function crPanelTrasfondo(C, cont, ctx) {
  cont.textContent = '';
  if (!C.tf) { cont.appendChild(crAyuda('Elige un trasfondo de la lista para ver y decidir sus opciones.', 'ag-nota-peq')); return; }
  const repintar = () => { crPanelTrasfondo(C, cont, ctx); ctx.actualizar(); };
  const sec = crEl('div', 'ag-sec'); sec.appendChild(crEl('div', 'ag-sec-tit', 'Tus elecciones de trasfondo'));
  if (C.tf === '__personalizado__') {
    sec.appendChild(crAyuda('Trasfondo personalizado: sus aumentos de característica, dos habilidades y la dote los rellenas tú en la ficha (Características → Trasfondo). En el generador de atributos podrás repartir el +2/+1 libremente.', 'ag-nota-peq'));
    cont.appendChild(sec); return;
  }
  const t = DND_TRASFONDOS[C.tf]; const ed = crEdDeClave(C.tf);
  if (t.asi) sec.appendChild(crAyuda(`Aumentos de característica: ${t.asi} (+2/+1 o +1/+1/+1). Se reparten en el paso Atributos.` + (C.ed === '14' && ed === '24' ? ' (Las reglas 5e normalmente no los usan.)' : ''), 'ag-nota-peq'));
  else if (C.ed === '24') sec.appendChild(crAyuda('Este trasfondo es de 2014 y no da aumentos de característica: en el generador de atributos puedes añadir lo que decida tu mesa como «Bonos extra».', 'ag-nota-peq'));
  const comp = crParseComp(t.comp);
  if (comp.fijas.length) sec.appendChild(crAyuda('Competencia en: ' + comp.fijas.join(', ') + '.', 'ag-nota-peq'));
  if (comp.elige.n) {
    sec.appendChild(crEl('div', 'cr-sub', `Habilidades a tu elección (${comp.elige.n})`));
    sec.appendChild(crSelectsN({
      n: comp.elige.n, sel: (C.tfOp.hab = C.tfOp.hab || []), etq: i => 'Habilidad de trasfondo ' + (i + 1), fid: 'tf-hab',
      opciones: () => { const otras = crHabOtras(C, 'tf-elige'); return (comp.elige.de || CR_HAB_NOMBRES).map(h => ({ v: h, n: h, off: otras.has(h) })); },
      alCambiar: () => ctx.actualizar(),
    }));
  }
  const ht = crHerrTrasfondo(C);
  if (ht.fijas.length) sec.appendChild(crAyuda('Competencia con herramientas: ' + ht.fijas.join(', ') + '.', 'ag-nota-peq'));
  ht.picks.forEach((p, i) => {
    sec.appendChild(crFila(`${p.etq}:`, crSelect({
      opciones: crListaHerr(p.tipo).map(h => ({ v: h, n: h })), valor: C.tfOp['herr' + i], vacio: '— elige —', etq: p.etq, fid: 'tf-herr-' + i,
      alCambiar: v => { C.tfOp['herr' + i] = v; ctx.actualizar(); },
    })));
  });
  if (t.idiomas && C.ed === '14') sec.appendChild(crAyuda('Idiomas: ' + t.idiomas + ' (paso Competencias).', 'ag-nota-peq'));
  else if (C.ed === '24') sec.appendChild(crAyuda('Idiomas: Común y 2 más a tu elección (paso Competencias).', 'ag-nota-peq'));
  if (crDoteElegida(C, 'tf')) { const dcont = crEl('div', 'cr-dote'); sec.appendChild(dcont); crDoteUI(C, 'tf', dcont, ctx); }
  if (t.rasgo) sec.appendChild(crAyuda('Rasgo: ' + t.rasgo.slice(0, 140) + (t.rasgo.length > 140 ? '…' : ''), 'ag-nota-peq'));
  cont.appendChild(sec);
}

function crRenderTf(C, cuerpo, ctx) {
  cuerpo.appendChild(crAyuda(C.ed === '24'
    ? 'Elige tu trasfondo. En 5.5e da aumentos de característica, una dote de Origen, dos competencias en habilidades, una herramienta y equipo.'
    : 'Elige tu trasfondo. En 5e da competencias, idiomas, equipo y un rasgo.'));
  const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = C.verTodas; cb.dataset.fid = 'ver-todas';
  const lab = crEl('label', 'ag-check'); lab.append(cb, crEl('span', '', 'Mostrar también los de otras ediciones y fuentes'));
  const cont = crEl('div', 'cr-panel');
  const items = [{ v: '__personalizado__', n: '✦ Personalizado', sub: 'lo rellenas en la ficha' }].concat(crListaTrasfondos(C).map(k => ({ v: k, n: crNombreCorto(k), sub: crFuenteDeClave(k) })));
  const sel = crSelectorLista({
    items, valor: C.tf, etq: 'Trasfondos', buscar: 'Buscar trasfondo…', fid: 'tf',
    vista: v => v === '__personalizado__' ? crAyuda('Un trasfondo hecho a medida: eliges tú los aumentos de característica, dos habilidades y una dote de Origen directamente en la ficha.', 'cr-prev') : crNodoTrasfondo(v),
    alElegir: v => { if (v !== C.tf) { crLimpiarTrasfondo(C); C.tf = v; } crPanelTrasfondo(C, cont, ctx); ctx.actualizar(); },
  });
  cb.addEventListener('change', () => { C.verTodas = cb.checked; ctx.rehacer(); });
  cuerpo.append(lab, sel.el, cont);
  crPanelTrasfondo(C, cont, ctx);
}

/* ═════════════════ PASO 4 · ATRIBUTOS ═════════════════ */
function crRenderAtr(C, cuerpo, ctx) {
  cuerpo.appendChild(crAyuda('Los atributos se generan con el generador de la web (array estándar, compra de puntos, tirada 4d6 o valores a mano). Se abrirá con tu clase' + (C.ed === '24'
    ? ' y tu trasfondo: los aumentos de característica del trasfondo se reparten en su paso «Bonos».'
    : ': los aumentos de característica de tu especie (5e) ya se añaden como «Bonos extra».')));
  const bono = crBonoEspecie(C); const extras = CR_ATR.filter(a => bono[a]).map(a => `${CR_ATR_NOMBRE[a]} +${bono[a]}`);
  if (extras.length) cuerpo.appendChild(crAyuda('Aumentos de tu especie (5e), que el generador pondrá en «Bonos extra»: ' + extras.join(', ') + '.', 'ag-nota-peq'));
  if (C.ed === '14' && C.esp && crEdDeClave(C.esp) === '14') {
    const asi = crParseAsi(crBasicosEspecie(C.esp).asiTxt);
    if (!asi.ok) cuerpo.appendChild(crAyuda('No he podido interpretar los aumentos de la especie: añádelos tú como «Bonos extra» en el generador.', 'ag-nota'));
  }
  const sc = crPuntuaciones(C);
  const hecho = !!(C.atr && C.atr.aplicado && C.atr.sig === crSigAtr(C));
  const caja = crEl('div', 'cr-atr-caja');
  CR_ATR.forEach(a => {
    const c = crEl('div', 'cr-atr' + ((AG_PRINCIPALES[C.clase] || []).includes(a) ? ' princ' : ''));
    c.append(crEl('div', 'cr-atr-n', CR_ATR_ABREV[a]), crEl('div', 'cr-atr-v', String(sc[a])), crEl('div', 'cr-atr-m', crFmt(crMod(sc[a]))));
    caja.appendChild(c);
  });
  cuerpo.appendChild(crSec('Características actuales', caja,
    hecho ? crAyuda('✔ Atributos generados y aplicados a la ficha. Puedes abrir el generador otra vez para cambiarlos.', 'ag-nota-peq')
      : (C.atr && C.atr.aplicado ? crAyuda('⚠ Cambiaste la especie, el trasfondo o las reglas después de generarlos: vuelve a abrir el generador.', 'ag-nota') : crAyuda('Todavía no has generado los atributos.', 'ag-nota-peq'))));
  const b = crEl('button', 'ag-btn ag-btn-pri cr-btn-gen', hecho || (C.atr && C.atr.aplicado) ? '🎲 Abrir el generador otra vez' : '🎲 Abrir el generador de atributos'); b.type = 'button'; b.dataset.fid = 'gen';
  b.addEventListener('click', () => {
    abrirGeneradorAtributos(C.panel, 1, {
      crear: { clase: C.clase, tfClave: C.tf || '', extra: crBonoEspecie(C) },
      alAplicar: () => { C.atr = { aplicado: true, omitido: false, scores: crPuntuaciones(C), atrGen: C.panel.dataset.atrGen || '', sig: crSigAtr(C) }; },
      alCerrar: () => { ctx.rehacer(); },
    });
  });
  const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = !!(C.atr && C.atr.omitido); cb.dataset.fid = 'omitir';
  const lab = crEl('label', 'ag-check'); lab.append(cb, crEl('span', '', 'Prefiero dejarlos como están y escribirlos a mano en la ficha'));
  cb.addEventListener('change', () => { C.atr = cb.checked ? { omitido: true, aplicado: !!(C.atr && C.atr.aplicado), scores: crPuntuaciones(C), atrGen: (C.atr && C.atr.atrGen) || '', sig: C.atr && C.atr.sig } : (C.atr && C.atr.aplicado ? { aplicado: true, scores: C.atr.scores, atrGen: C.atr.atrGen, sig: C.atr.sig } : null); ctx.rehacer(); });
  const fila = crEl('div', 'ag-acciones'); fila.appendChild(b);
  cuerpo.append(fila, lab);
}

/* ═════════════════ PASO 5 · COMPETENCIAS ═════════════════ */
function crRenderHab(C, cuerpo, ctx) {
  crLimpiarHabDup(C); crAjustarCupos(C);
  const repintar = () => { crAjustarCupos(C); ctx.rehacer(); };
  cuerpo.appendChild(crAyuda('Habilidades, pericias, idiomas, herramientas y maestrías de tu clase. Lo que ya te dan la especie y el trasfondo aparece marcado y no se puede elegir otra vez.'));
  const fijas = crHabOtras(C, 'clase');
  if (fijas.size) {
    const chips = crEl('div', 'sn-sp-chips'); Array.from(fijas).sort(_ordenES).forEach(h => chips.appendChild(crEl('span', 'sn-sp-chip cr-chip', h)));
    cuerpo.appendChild(crSec('Ya tienes (especie, trasfondo y dotes)', chips));
  }
  const h = crClaseHab(C);
  if (h.n) {
    const lista = (h.de || CR_HAB_NOMBRES);
    cuerpo.appendChild(crSec(`Habilidades de ${C.clase} (${C.hab.length}/${h.n})`,
      crAyuda(`Elige ${h.n}${h.de ? '' : ' a tu elección'}.`, 'ag-nota-peq'),
      crChecks({ items: lista.map(x => ({ v: x, n: x, off: fijas.has(x), title: CR_ATR_NOMBRE[CR_STAT_HAB[x]] })), sel: C.hab, max: h.n, fid: 'hab', alCambiar: repintar })));
  }
  const cp = crCupoPericias(C);
  if (cp.n) {
    const fin = crHabilidadesFinales(C); let pool = Array.from(fin);
    if (cp.solo) pool = pool.filter(x => cp.solo.includes(x));
    pool.sort(_ordenES);
    cuerpo.appendChild(crSec(`Pericia (doble bono de competencia) (${C.pericias.length}/${cp.n})`,
      crAyuda(`Elige ${cp.n} habilidades en las que ya seas competente${cp.solo ? ' (para el Mago: de Arcana, Historia, Investigación, Medicina, Naturaleza o Religión)' : ''}.`, 'ag-nota-peq'),
      pool.length ? crChecks({ items: pool.map(x => ({ v: x, n: x })), sel: C.pericias, max: cp.n, fid: 'per', alCambiar: () => ctx.rehacer() }) : crAyuda('Elige primero tus habilidades de clase.', 'ag-nota')));
  }
  const mq = crCupoMaestrias(C);
  if (mq.n) {
    const armas = crArmasMaestria(C);
    cuerpo.appendChild(crSec(`Maestría con armas (${C.maestrias.length}/${mq.n})`,
      crAyuda(`Elige ${mq.n} armas${mq.cuerpo ? ' cuerpo a cuerpo' : ''} con las que dominar su propiedad de maestría (se pueden cambiar tras un Descanso Largo).`, 'ag-nota-peq'),
      crChecks({ items: armas.map(a => ({ v: a.id, n: `${a.n.replace(/\s*\(.*\)\s*$/, '')} — ${CR_MAESTRIA[a.m].replace(/\s*\(.*\)\s*$/, '')}` })), sel: C.maestrias, max: mq.n, fid: 'mae', alCambiar: () => ctx.rehacer() })));
  }
  const ord = crOrdenDe(C);
  if (ord) cuerpo.appendChild(crSec(ord.t.replace(/\s*\(.*\)/, ''), crRadios({ name: 'cr-orden', valor: C.orden, fid: 'orden', items: ord.op.map(o => ({ v: o.v, t: o.v, d: o.d })), alCambiar: v => { C.orden = v; ctx.rehacer(); } })));

  const ci = crCupoIdiomas(C);
  const sIdi = crSec('Idiomas');
  sIdi.appendChild(crAyuda('Ya hablas: ' + ci.fijos.join(', ') + '.', 'ag-nota-peq'));
  if (ci.libres) {
    sIdi.appendChild(crAyuda(`Elige ${ci.libres} idioma${ci.libres > 1 ? 's' : ''} más.`, 'ag-nota-peq'));
    sIdi.appendChild(crSelectsN({
      n: ci.libres, sel: C.idiomas, etq: i => 'Idioma ' + (i + 1), fid: 'idi',
      opciones: () => crListaIdiomas().filter(i => !ci.fijos.includes(i)).map(i => ({ v: i, n: i + (CR_IDIOMAS.raros.includes(i) ? ' (raro)' : '') })),
      alCambiar: () => ctx.actualizar(),
    }));
  }
  cuerpo.appendChild(sIdi);

  const hc = crHerrClase(C);
  if (hc.fijas.length || hc.picks.length) {
    const sH = crSec('Herramientas de la clase');
    if (hc.fijas.length) sH.appendChild(crAyuda('Competencia con: ' + hc.fijas.join(', ') + '.', 'ag-nota-peq'));
    const usadas = () => new Set(C.herr.filter(Boolean));
    hc.picks.forEach((p, i) => {
      sH.appendChild(crFila(`${p.etq}:`, crSelect({
        opciones: crListaHerr(p.tipo).map(x => ({ v: x, n: x, off: usadas().has(x) && C.herr[i] !== x })), valor: C.herr[i], vacio: '— elige —', etq: p.etq + ' ' + (i + 1), fid: 'herr-' + i,
        alCambiar: v => { C.herr[i] = v; ctx.rehacer(); },
      })));
    });
    cuerpo.appendChild(sH);
  }
  const comp = crCompClase(C.clase, C.ed);
  if (comp) cuerpo.appendChild(crSec('Armas y armaduras', crAyuda(comp.texto, 'ag-nota-peq')));
}

/* ═════════════════ PASO 6 · EQUIPO ═════════════════ */
function crSelectsComodin(C, items, prefijo, sel, cont, ctx, vinculo) {
  items.forEach(([ref, q, k]) => {
    if (!crEsComodin(ref)) return;
    const clave = prefijo + k;
    if (vinculo && vinculo(ref) && C.tfOp.herr0) { cont.appendChild(crAyuda(`${crNombreRef(ref).replace(/^un[ao]? /, '')}: ${C.tfOp.herr0} (la que elegiste en Trasfondo).`, 'ag-nota-peq')); return; }
    const ops = crOpcionesComodin(ref, C);
    cont.appendChild(crFila(`Elige ${crNombreRef(ref)}:`, crSelect({
      opciones: ops.map(o => ({ v: o.v, n: o.n })), valor: sel[clave], vacio: '— elige —', etq: 'Elige ' + crNombreRef(ref), fid: 'eq-' + clave,
      alCambiar: v => { sel[clave] = v; ctx.rehacer(); },
    })));
  });
}

function crRenderEq(C, cuerpo, ctx) {
  const e = crEqClase(C);
  cuerpo.appendChild(crAyuda('Equipo inicial de tu clase y de tu trasfondo. Los objetos van al Inventario con su cantidad; las armas y la armadura se equipan y se crean sus ataques y la CA.'));
  if (!e) { cuerpo.appendChild(crAyuda('Elige primero una clase.', 'ag-nota')); return; }
  const secC = crSec(`Equipo de ${C.clase}`);
  if (e.A) {
    secC.appendChild(crRadios({
      name: 'cr-kit', valor: C.eq.kit, fid: 'kit',
      items: ['A', 'B', 'C'].filter(k => e[k]).map(k => ({ v: k, t: `Opción ${k}`, d: (e[k].it.length ? crTextoItems(e[k].it) + ' y ' : '') + e[k].po + ' po' })),
      alCambiar: v => { C.eq.kit = v; C.eq.sel = {}; ctx.rehacer(); },
    }));
  } else {
    secC.appendChild(crRadios({
      name: 'cr-oro14', valor: C.eq.oro14, fid: 'oro14',
      items: [{ v: 'equipo', t: 'Equipo de la clase', d: 'Eliges entre las opciones de cada grupo' }, { v: 'oro', t: 'Oro inicial', d: `${e.dado[0]}d${e.dado[1]} × ${e.dado[2]} po, para comprar tu equipo` }],
      alCambiar: v => { C.eq.oro14 = v; C.eq.sel = {}; ctx.rehacer(); },
    }));
    if (C.eq.oro14 === 'oro') {
      const inp = document.createElement('input'); inp.type = 'number'; inp.className = 'ag-num'; inp.min = 0; inp.value = C.eq.oroTirado || ''; inp.setAttribute('aria-label', 'Oro inicial'); inp.dataset.fid = 'oro-tirado';
      inp.addEventListener('input', () => { C.eq.oroTirado = parseInt(inp.value) || null; ctx.actualizar(); });
      const bT = crEl('button', 'ag-btn ag-btn-mini', `🎲 Tirar ${e.dado[0]}d${e.dado[1]}`); bT.type = 'button';
      bT.addEventListener('click', () => { let t = 0; for (let i = 0; i < e.dado[0]; i++) t += snDado(e.dado[1]); C.eq.oroTirado = t * e.dado[2]; ctx.rehacer(); });
      secC.appendChild(crFila('Oro inicial (po):', inp, bT));
    } else if (C.eq.oro14 === 'equipo') {
      e.g.forEach((g, gi) => {
        if (g.f) { secC.appendChild(crAyuda('Siempre: ' + crTextoItems(g.f) + '.', 'ag-nota-peq')); return; }
        secC.appendChild(crEl('div', 'cr-sub', `Grupo ${gi + 1}`));
        secC.appendChild(crRadios({
          name: 'cr-g' + gi, valor: C.eq.grupos[gi], fid: 'g' + gi,
          items: ['a', 'b', 'c'].filter(k => g[k]).map(k => ({ v: k, t: k.toUpperCase(), d: crTextoItems(g[k]) })),
          alCambiar: v => { C.eq.grupos[gi] = v; Object.keys(C.eq.sel).forEach(x => { if (x.startsWith('c_g' + gi + '_')) delete C.eq.sel[x]; }); ctx.rehacer(); },
        }));
      });
    }
  }
  crSelectsComodin(C, crItemsKitClase(C), 'c_', C.eq.sel, secC, ctx);
  cuerpo.appendChild(secC);

  // Equipo del trasfondo
  if (C.tf && C.tf !== '__personalizado__') {
    const secT = crSec(`Equipo de ${crNombreCorto(C.tf)}`);
    const t24 = CR_TF24[C.tf], ab = crTfAB(C);
    if (t24 || ab) {
      const dA = t24 ? crTextoItems(t24.eq.it) + ' y ' + t24.eq.po + ' po' : ab.a;
      const dB = t24 ? '50 po' : ab.b;
      secT.appendChild(crRadios({ name: 'cr-tfkit', valor: C.eq.tf, fid: 'tfkit', items: [{ v: 'A', t: 'Opción A', d: dA }, { v: 'B', t: 'Opción B', d: dB }], alCambiar: v => { C.eq.tf = v; ctx.rehacer(); } }));
      if (t24 && C.eq.tf === 'A') crSelectsComodin(C, crItemsKitTf(C).items, 'b_', C.eq.selTf, secT, ctx, ref => ['@art', '@instr', '@juego'].includes(ref));
    } else {
      const k = crItemsKitTf(C);
      secT.appendChild(crAyuda('Equipo: ' + k.texto.concat(k.po ? [k.po + ' po'] : []).join(', ') + '.', 'ag-nota-peq'));
      secT.appendChild(crAyuda('Los objetos de este trasfondo se anotan en el Inventario tal como los describe el libro.', 'ag-nota-peq'));
    }
    cuerpo.appendChild(secT);
  }

  // Oro extra
  const ex = document.createElement('input'); ex.type = 'number'; ex.min = 0; ex.className = 'ag-num'; ex.value = C.oroExtra || ''; ex.placeholder = '0'; ex.setAttribute('aria-label', 'Oro extra'); ex.dataset.fid = 'oro-extra';
  ex.addEventListener('input', () => { C.oroExtra = Math.max(0, parseInt(ex.value) || 0); ctx.actualizar(); });
  cuerpo.appendChild(crSec('Oro extra', crAyuda(C.nivel > 1 ? `Empiezas en nivel ${C.nivel}: el equipo es el de nivel 1. Pregunta a tu DM cuánto oro (y objetos mágicos) te corresponde de más y anótalo aquí.` : 'Si tu DM te da oro adicional, anótalo aquí (opcional).', 'ag-nota-peq'), crFila('Oro extra (po):', ex)));

  // Vista previa del resultado
  const prev = crEl('div', 'ag-sec cr-eq-prev'); cuerpo.appendChild(prev);
  ctx.ref(() => {
    prev.textContent = ''; prev.appendChild(crEl('div', 'ag-sec-tit', 'Así quedará tu ficha'));
    const r = crResolverEquipo(C);
    if (r.faltan.length) prev.appendChild(crAyuda('Falta elegir: ' + crUnicos(r.faltan).join(', ') + '.', 'ag-nota'));
    const sc = crPuntuaciones(C); const ca = crCalcularCA(C, sc, r);
    prev.appendChild(crEl('div', 'sn-info', `CA ${ca.ca} (${ca.desc})  ·  Oro: ${Math.floor(r.po)} po`));
    const ul = crEl('ul', 'ag-msgs cr-eq-lista');
    r.filas.forEach(f => {
      const li = crEl('li', '', `${f.q > 1 ? f.q + '× ' : ''}${f.n.replace(/\s*\(.*\)\s*$/, '')}${f.desc ? ' — ' + f.desc : ''}`);
      if (f.tipo === 'arma') {
        const at = crFilaAtaque(C, f.ref, sc);
        if (at) li.textContent = `${f.q > 1 ? f.q + '× ' : ''}${at.nombre.replace(/\s*\(.*\)\s*$/, '')} — ataque ${crFmt(crMod(sc[at.stat]) + (crArmaCompetente(C.clase, C.ed, f.ref) ? calcPB(C.nivel) : 0))}, daño ${at.qty}${at.dado}${crMod(sc[at.stat]) ? crFmt(crMod(sc[at.stat])) : ''} ${at.tipo.toLowerCase()}${at.notas ? ' · ' + at.notas : ''}`;
      }
      ul.appendChild(li);
    });
    prev.appendChild(ul);
  });
}

/* ═════════════════ PASO 7 · RESUMEN ═════════════════ */
function crRenderResumen(C, cuerpo, ctx) {
  cuerpo.appendChild(crAyuda('Repaso de la Parte 1. Al continuar se escribe todo esto en la ficha y se abre la Parte 2: puntos de golpe, rasgos, mejoras, conjuros y opciones de clase de cada nivel.'));
  const sc = crPuntuaciones(C), r = crResolverEquipo(C);
  const filas = [];
  filas.push(['Reglas', C.ed === '24' ? '5.5e (2024)' : '5e (2014)']);
  filas.push(['Personaje', `${C.nombre || '(sin nombre)'} · ${C.clase} nivel ${C.nivel}`]);
  filas.push(['Especie', C.esp ? crNombreCorto(C.esp) + (crLineaEspecie(C) ? ' — ' + crLineaEspecie(C).replace('▶ Elecciones del asistente — ', '') : '') : '—']);
  filas.push(['Trasfondo', C.tf === '__personalizado__' ? 'Personalizado (lo rellenas en la ficha)' : crNombreCorto(C.tf) + (crLineaTrasfondo(C) ? ' — ' + crLineaTrasfondo(C).replace('▶ Elecciones del asistente — ', '') : '')]);
  filas.push(['Atributos', CR_ATR.map(a => `${CR_ATR_ABREV[a]} ${sc[a]} (${crFmt(crMod(sc[a]))})`).join(' · ') + (C.atr && C.atr.omitido && !C.atr.aplicado ? '  — a mano' : '')]);
  const hab = Array.from(crHabilidadesFinales(C)).sort(_ordenES);
  filas.push(['Habilidades', hab.length ? hab.map(h => h + ((C.pericias || []).includes(h) ? ' (pericia)' : '')).join(', ') : 'ninguna']);
  filas.push(['Idiomas', crIdiomasFinales(C).join(', ')]);
  const herr = crHerramientasFinales(C); if (herr.length) filas.push(['Herramientas', herr.join(', ')]);
  const comp = crCompClase(C.clase, C.ed); if (comp) filas.push(['Armas y armaduras', comp.texto]);
  if ((C.maestrias || []).length) filas.push(['Maestría con armas', C.maestrias.map(id => CR_ARMAS[id].n.replace(/\s*\(.*\)\s*$/, '')).join(', ')]);
  const o = crOrdenOpcion(C); if (o) filas.push([crOrdenDe(C).t.replace(/\s*\(.*\)/, ''), o.v]);
  const dotes = crDotesElegidas(C); if (dotes.length) filas.push(['Dotes de origen', dotes.map(d => d.dote.n.replace(/\s*\[[^\]]+\]\s*$/, '')).join(', ')]);
  const spE = crUnicos(crConjurosEspecie(C).concat(crConjurosDotes(C))); if (spE.length) filas.push(['Conjuros de especie y dotes', spE.map(id => (snIdxConjuros().get(id) || { sp: { n: id } }).sp.n).join(', ')]);
  const ca = crCalcularCA(C, sc, r);
  filas.push(['CA', `${ca.ca} (${ca.desc})`]);
  filas.push(['Equipo', r.filas.map(f => (f.q > 1 ? f.q + '× ' : '') + f.n.replace(/\s*\(.*\)\s*$/, '')).join(', ') || 'ninguno']);
  filas.push(['Oro', Math.floor(r.po) + ' po']);
  const tabla = crEl('table', 'ag-tabla sn-resumen'); const tb = crEl('tbody'); tabla.appendChild(tb);
  filas.forEach(([k, v]) => { const tr = crEl('tr'); tr.append(crEl('th', '', k), crEl('td', '', v)); tb.appendChild(tr); });
  cuerpo.appendChild(tabla);
  const notas = crEl('ul', 'ag-msgs');
  if (C.atr && C.atr.omitido && !(C.atr.aplicado && C.atr.sig === crSigAtr(C))) notas.appendChild(crEl('li', 'ag-msg-aviso', 'Los atributos están sin generar (todo a 10): los puntos de golpe de la Parte 2 se calcularán con CON 10 y se recalculan solos si luego los cambias.'));
  if (C.ed === '14') notas.appendChild(crEl('li', 'ag-tenue', 'Con las reglas de 5e, los conjuros preparados y los trucos que muestra el asistente siguen las tablas de la ficha (5.5e).'));
  cuerpo.appendChild(notas);
}

const CR_RENDER = { base: crRenderBase, esp: crRenderEsp, tf: crRenderTf, atr: crRenderAtr, hab: crRenderHab, eq: crRenderEq, resumen: crRenderResumen };
