/* ══════════════════════════════════════════════════════════════════
   creacion-aplicar.js — Escribe en la ficha lo que eligió el asistente de creación
   ──────────────────────────────────────────────────────────────────
   · crAplicarBase(C): nombre, especie, trasfondo, velocidad, idiomas, herramientas,
     competencias de armas/armaduras, habilidades y pericias, dotes de origen y sus
     conjuros, inventario, monedas, armadura y escudo. Se llama al pasar de la
     creación a la progresión (la clase y el nivel los aplica el asistente de
     subida de nivel).
   · crAplicarFinal(C, E): filas de ataque (necesitan el bono de competencia final)
     y CA sin armadura (Bárbaro/Monje). Se llama al terminar la progresión.
   · crNuevaFichaVacia / crDescartarFicha: ciclo de vida de la ficha temporal.
══════════════════════════════════════════════════════════════════ */

/* ───────── Ciclo de vida de la ficha ───────── */
function crNuevaFichaVacia(C) {
  const r = nuevaFicha();
  C.panel = r.panel; C.fichaId = r.id;
  // Atributos ya generados: se restauran para no perderlos al volver atrás
  if (C.atr && C.atr.scores) {
    CR_ATR.forEach(a => {
      const inp = C.panel.querySelector(`.stat-score[data-stat="${a}"]`);
      if (inp && C.atr.scores[a] != null) { inp.value = C.atr.scores[a]; if (typeof actualizarAtributo === 'function') actualizarAtributo(inp); }
    });
    if (C.atr.atrGen) C.panel.dataset.atrGen = C.atr.atrGen;
  }
  return C.panel;
}

function crDescartarFicha(C) {
  try {
    const f = (typeof fichas !== 'undefined') ? fichas.find(x => x.id === C.fichaId) : null;
    if (f && typeof nbBorrada === 'function') { try { nbBorrada(f.panel.dataset.sid); } catch (e) { /* la nube no es esencial aquí */ } }
    if (typeof _quitarFicha === 'function') _quitarFicha(C.fichaId);
  } catch (e) { console.warn('Creación: no se pudo descartar la ficha', e); }
  C.panel = null; C.fichaId = null;
  if (typeof guardarDebounced === 'function') guardarDebounced();
}

/* Vuelve a empezar la ficha desde cero conservando lo elegido (se usa al volver de la progresión a la creación) */
function crReiniciarFicha(C) {
  const vieja = { id: C.fichaId, panel: C.panel };
  crNuevaFichaVacia(C);
  try {
    const f = (typeof fichas !== 'undefined') ? fichas.find(x => x.id === vieja.id) : null;
    if (f && typeof nbBorrada === 'function') { try { nbBorrada(f.panel.dataset.sid); } catch (e) { /* idem */ } }
    if (typeof _quitarFicha === 'function') _quitarFicha(vieja.id);
  } catch (e) { console.warn('Creación: no se pudo quitar la ficha anterior', e); }
  if (typeof activarFicha === 'function') activarFicha(C.fichaId);
  if (typeof guardarDebounced === 'function') guardarDebounced();
}

/* ───────── Resultados agregados de las elecciones ───────── */
function crHabilidadesFinales(C) {
  const s = new Set();
  crHabFijas(C).forEach(h => s.add(h));
  (C.tfOp.hab || []).forEach(h => { if (h) s.add(h); });
  (C.espHabLibres || []).forEach(h => { if (h) s.add(h); });
  (C.hab || []).forEach(h => s.add(h));
  ['tf', 'esp'].forEach(q => (((C.tfDote || {})[q] || {}).habherr || []).forEach(h => { if (CR_HAB_NOMBRES.includes(h)) s.add(h); }));
  return s;
}
function crHerramientasFinales(C) {
  const out = [];
  const add = x => { if (x && !out.includes(x)) out.push(x); };
  const hc = crHerrClase(C); hc.fijas.forEach(add); hc.picks.forEach((p, i) => add(C.herr[i]));
  const ht = crHerrTrasfondo(C); ht.fijas.forEach(add); ht.picks.forEach((p, i) => add(C.tfOp['herr' + i]));
  ['tf', 'esp'].forEach(q => {
    const st = (C.tfDote || {})[q] || {};
    (st.habherr || []).forEach(h => { if (!CR_HAB_NOMBRES.includes(h)) add(h); });
    (st.instr || []).forEach(add); (st.art || []).forEach(add);
  });
  return out;
}
function crIdiomasFinales(C) {
  const out = [];
  crCupoIdiomas(C).fijos.concat(C.idiomas || []).forEach(i => { if (i && !out.includes(i)) out.push(i); });
  return out;
}
/* Velocidad y visión según la especie y el linaje elegido */
function crVelocidad(C) {
  if (!C.esp) return 30;
  const e24 = CR_ESP24[C.esp];
  let vel = e24 ? e24.vel : crBasicosEspecie(C.esp).vel;
  if (e24) (e24.eleg || []).forEach(g => { if (g.op) { const o = g.op.find(x => x.v === C.espOp[g.id]); if (o && o.vel) vel = o.vel; } });
  return vel || 30;
}
function crVision(C) {
  if (!C.esp) return '';
  let v = crBasicosEspecie(C.esp).visionOsc;
  if (C.esp === 'Elfo [PHB 2024]' && C.espOp.lin === 'Drow') v = '120';
  return v ? `Visión en la Oscuridad ${v} ft` : '';
}
/* Conjuros que concede la especie (y el linaje) al nivel dado: [id] */
function crConjurosEspecie(C) {
  const e = C.esp && CR_ESP24[C.esp]; if (!e) return [];
  const res = [];
  const sumar = lst => (lst || []).forEach(([req, id]) => { if (req <= C.nivel) res.push(id); });
  sumar(e.sp);
  (e.eleg || []).forEach(g => { if (g.op) { const o = g.op.find(x => x.v === C.espOp[g.id]); if (o) sumar(o.sp); } });
  return crUnicos(res);
}
/* Conjuros de las dotes de origen (Magic Initiate) */
function crConjurosDotes(C) {
  const res = [];
  ['tf', 'esp'].forEach(q => {
    const nombre = crDoteElegida(C, q);
    if (!nombre || !/^Magic Initiate/.test(nombre)) return;
    const st = (C.tfDote || {})[q] || {};
    (st.trucos || []).concat(st.conj || []).forEach(id => res.push(id));
  });
  return crUnicos(res);
}
/* Dotes de origen que lleva el personaje: [{quien, dote (entrada de DND_DOTES), estado}] */
function crDotesElegidas(C) {
  const out = [];
  ['tf', 'esp'].forEach(q => {
    const nombre = crDoteElegida(C, q); if (!nombre) return;
    const dote = DND_DOTES.find(d => d.n === nombre) || crDotePorNombre(nombre, C.ed);
    if (dote) out.push({ quien: q, dote, st: (C.tfDote || {})[q] || {} });
  });
  return out;
}

/* ───────── Utilidades de ficha ───────── */
function crFilaHab(panel, nombre) {
  return Array.from(panel.querySelectorAll('.fila-skill')).find(f => {
    const l = f.querySelector('label'); if (!l) return false;
    const t = (l.childNodes[0] ? l.childNodes[0].textContent : l.textContent) || '';
    return t.trim() === nombre;
  }) || null;
}
function crAnadirTexto(ta, texto, alPrincipio) {
  if (!ta || !texto) return;
  const v = ta.value.trim();
  ta.value = !v ? texto : (alPrincipio ? texto + '\n\n' + v : v + '\n\n' + texto);
}
function crCompTextareas(panel) {
  const bl = panel.querySelectorAll('.seccion-competencias .bloque-competencia');
  return { idiomas: bl[0] && bl[0].querySelector('textarea'), herr: bl[1] && bl[1].querySelector('textarea'), armas: bl[2] && bl[2].querySelector('textarea') };
}
function crFilaInventario(panel, n, q, desc, equipado) {
  const cont = panel.querySelector('.contenedor-items'); if (!cont) throw new Error('No se encuentra el Inventario.');
  let fila = Array.from(cont.querySelectorAll('.item-fila')).find(f => !f.querySelector('.input-item').value && !f.querySelector('.input-item-cant').value && !f.querySelector('.input-item-desc').value);
  if (!fila) {
    fila = document.createElement('div'); fila.className = 'item-fila';
    fila.innerHTML = `
        <input type="text" placeholder="Nombre..." class="input-item" onkeypress="checkInventarioPanel(event)" oninput="guardarDebounced()">
        <input type="number" placeholder="1" class="input-item-cant" min="0" oninput="guardarDebounced()">
        <input type="text" placeholder="Descripción o notas..." class="input-item-desc" onkeypress="checkInventarioPanel(event)" oninput="this.classList.toggle('tiene-texto',this.value.length>0);guardarDebounced()">
        <input type="checkbox" class="chk-equipado" title="Equipado" onchange="guardarDebounced()">
        <input type="checkbox" class="chk-sintonizado" title="Sintonizado" onchange="validarSintonizados(this);guardarDebounced()">
        <button class="btn-borrar-item" onclick="borrarItemInventario(this)" title="Eliminar">×</button>`;
    cont.appendChild(fila);
  }
  fila.querySelector('.input-item').value = n;
  fila.querySelector('.input-item-cant').value = q > 0 ? q : '';
  const d = fila.querySelector('.input-item-desc'); d.value = desc || ''; d.classList.toggle('tiene-texto', !!desc);
  fila.querySelector('.chk-equipado').checked = !!equipado;
  return fila;
}

/* Opción del desplegable de armadura de la ficha */
function crOpcionArmadura(panel, clave) {
  const sel = panel.querySelector('.armadura-sel'); if (!sel) return null;
  return Array.from(sel.options).find(o => o.value.split('|')[0] === clave) || null;
}

/* Línea de «Elecciones» de especie y de trasfondo para los cuadros de texto de Características */
function crLineaEspecie(C) {
  const e = CR_ESP24[C.esp]; const p = [];
  if (e) {
    (e.eleg || []).forEach(g => {
      const v = C.espOp[g.id]; if (!v) return;
      if (g.dote) p.push(`${g.t}: ${v.replace(/\s*\[[^\]]+\]\s*$/, '')}`);
      else p.push(`${g.t.replace(/\s*\(.*\)$/, '')}: ${v}`);
    });
  } else if (C.esp) {
    const asi = crBonoEspecie(C);
    const a = CR_ATR.filter(k => asi[k]).map(k => `${CR_ATR_ABREV[k]} +${asi[k]}`);
    if (a.length) p.push('Aumentos de característica: ' + a.join(', '));
    const hl = (C.espHabLibres || []).filter(Boolean); if (hl.length) p.push('Habilidades: ' + hl.join(', '));
  }
  return p.length ? '▶ Elecciones del asistente — ' + p.join(' · ') : '';
}
function crLineaDote(C, q) {
  const nombre = crDoteElegida(C, q); const st = (C.tfDote || {})[q] || {}; const p = [];
  if (/^Magic Initiate/.test(nombre)) {
    const fija = q === 'tf' ? (crDoteDeTrasfondo(C) || {}).lista : '';
    const nm = id => (typeof snIdxConjuros === 'function' && snIdxConjuros().get(id) ? snIdxConjuros().get(id).sp.n : id);
    p.push('Lista: ' + (fija || st.lista || '?'));
    if ((st.trucos || []).length) p.push('Trucos: ' + st.trucos.map(nm).join(', '));
    if ((st.conj || []).length) p.push('Conjuro: ' + st.conj.map(nm).join(', '));
    if (st.car) p.push('Característica de lanzamiento: ' + st.car);
  } else {
    if ((st.habherr || []).length) p.push('Competencias: ' + st.habherr.join(', '));
    if ((st.instr || []).length) p.push('Instrumentos: ' + st.instr.join(', '));
    if ((st.art || []).length) p.push('Herramientas: ' + st.art.join(', '));
  }
  return p.length ? '   ▶ ' + p.join(' · ') : '';
}
function crLineaTrasfondo(C) {
  const p = [];
  const ht = crHerrTrasfondo(C);
  const hs = ht.picks.map((_, i) => C.tfOp['herr' + i]).filter(Boolean); if (hs.length) p.push('Herramienta: ' + hs.join(', '));
  const hb = (C.tfOp.hab || []).filter(Boolean); if (hb.length) p.push('Habilidades: ' + hb.join(', '));
  return p.length ? '▶ Elecciones del asistente — ' + p.join(' · ') : '';
}

/* ───────── Ataques: orden de preferencia de las armas que se anotan como equipadas ───────── */
function crArmasEquipadas(C, res) {
  const ids = Object.keys(res.armas);
  const mel = ids.find(id => { const a = crArma(id, C.ed); return a && !a.r && crArmaCompetente(C.clase, C.ed, id); }) || ids.find(id => { const a = crArma(id, C.ed); return a && !a.r; });
  const dist = ids.find(id => { const a = crArma(id, C.ed); return a && a.r && crArmaCompetente(C.clase, C.ed, id); });
  return new Set([mel, dist].filter(Boolean));
}

/* ═════ BASE: todo lo que no depende del nivel de clase ═════ */
function crAplicarBase(C) {
  const panel = C.panel; const avisos = [];
  const intentar = (que, fn) => { try { fn(); } catch (e) { console.error('Creación (' + que + ')', e); avisos.push(`${que}: ${e && e.message ? e.message : e}`); } };
  if (!panel) throw new Error('No hay ficha donde aplicar el personaje.');
  const ta = crCompTextareas(panel);

  intentar('Nombre', () => {
    const inp = panel.querySelector('.input-nombre');
    if (inp && C.nombre) { inp.value = C.nombre; onNombreCambia(inp); }
  });

  intentar('Especie', () => {
    const cab = panel.querySelector('.sel-especie-cab'); if (!cab) throw new Error('No se encuentra el selector de especie.');
    cab.value = C.esp;
    if (cab.value !== C.esp) throw new Error(`«${C.esp}» no está en el desplegable de especies.`);
    onEspecieCabChange(cab);
    const t = panel.querySelector('.caract-especie');
    if (!t || !t.value) throw new Error('La especie no rellenó el cuadro de Características.');
    const linea = crLineaEspecie(C); if (linea) crAnadirTexto(t, linea, true);
  });

  intentar('Trasfondo', () => {
    const cab = panel.querySelector('.sel-trasfondo-cab'); if (!cab) throw new Error('No se encuentra el selector de trasfondo.');
    cab.value = C.tf;
    if (cab.value !== C.tf) throw new Error(`«${C.tf}» no está en el desplegable de trasfondos.`);
    onTrasfondoCabChange(cab);
    if (C.tf !== '__personalizado__') {
      const t = panel.querySelector('.caract-trasfondo-txt');
      const linea = crLineaTrasfondo(C); if (t && linea) crAnadirTexto(t, linea, true);
      // Texto del equipo elegido (no el del libro, que ofrece A/B)
    }
  });

  intentar('Velocidad y sentidos', () => {
    const v = panel.querySelector('.vel-grande'); if (v) v.value = `${crVelocidad(C)} ft`;
    const vision = crVision(C); const s = panel.querySelector('.sentidos-extra');
    if (s && vision && !s.value) s.value = vision;
  });

  intentar('Idiomas', () => { if (ta.idiomas) ta.idiomas.value = crIdiomasFinales(C).join(', '); });

  intentar('Herramientas', () => { if (ta.herr) ta.herr.value = crHerramientasFinales(C).join(', '); });

  intentar('Competencias de armas y armaduras', () => {
    const c = crCompClase(C.clase, C.ed); if (!c || !ta.armas) return;
    let txt = c.texto;
    const o = crOrdenOpcion(C); if (o && o.arm) txt += ` ${crOrdenDe(C).t.replace(/\s*\(.*\)/, '')} (${o.v}): ${o.arm}.`;
    if (C.ed === '24' && (C.maestrias || []).length) txt += ' Maestría con armas: ' + C.maestrias.map(id => CR_ARMAS[id].n.replace(/\s*\(.*\)/, '')).join(', ') + '.';
    ta.armas.value = txt;
  });

  intentar('Habilidades', () => {
    const fin = crHabilidadesFinales(C);
    fin.forEach(h => { const f = crFilaHab(panel, h); if (!f) throw new Error(`No se encuentra la habilidad «${h}».`); f.querySelector('.dot.prof').checked = true; });
    (C.pericias || []).forEach(h => { const f = crFilaHab(panel, h); if (f) { f.querySelector('.dot.prof').checked = true; f.querySelector('.dot.exp').checked = true; } });
  });

  intentar('Dotes de origen', () => {
    const t = panel.querySelector('.caract-dotes');
    crDotesElegidas(C).forEach(({ quien, dote }) => {
      const etq = (typeof _TIPO_ETIQUETA !== 'undefined' && _TIPO_ETIQUETA[dote.tipo]) || dote.tipo || 'Origen';
      crAnadirTexto(t, `${dote.n} [${etq}]: ${dote.d}` + (crLineaDote(C, quien) ? '\n' + crLineaDote(C, quien) : ''));
    });
  });

  intentar('Conjuros de especie y dotes', () => {
    crUnicos(crConjurosEspecie(C).concat(crConjurosDotes(C))).forEach(id => {
      try { snAnadirConjuroFicha(panel, id, false); } catch (e) { avisos.push(`Conjuro ${id}: ${e.message}`); }
    });
    if (typeof spbActualizarContador === 'function') spbActualizarContador(panel);
  });

  const res = crResolverEquipo(C);
  intentar('Inventario', () => {
    const eqs = crArmasEquipadas(C, res);
    const arm = res.armaduras.length ? crMejorArmadura(C, res.armaduras, crPuntuaciones(C)) : null;
    res.filas.forEach(f => {
      if (f.cab) return;
      const equipado = f.tipo === 'arma' ? eqs.has(f.ref) : f.tipo === 'armadura' ? f.ref === arm : f.tipo === 'escudo';
      crFilaInventario(panel, f.n, f.q, f.desc || (f.tipo === 'arma' ? crResumenArma(C, f.ref) : ''), equipado);
    });
  });

  intentar('Monedas', () => {
    const po = Math.max(0, Math.floor(res.po));
    const oro = panel.querySelector('.dinero-barra .moneda.oro input'); if (oro) oro.value = po || '';
  });

  intentar('Armadura', () => {
    const sc = crPuntuaciones(C);
    const arm = res.armaduras.length ? crMejorArmadura(C, res.armaduras, sc) : null;
    const armSel = panel.querySelector('.armadura-sel');
    const opt = crOpcionArmadura(panel, arm ? CR_ARM[arm].sel : 'sinarmadura');
    if (!opt) throw new Error('No se encuentra la armadura en el desplegable de la ficha.');
    armSel.value = opt.value; onArmaduraChange(armSel);
    if (res.escudo) { const esc = panel.querySelector('.escudo-sel'); esc.value = '2'; onArmaduraChange(esc); }
  });

  intentar('Recalcular', () => { if (typeof actualizarTodoPanel === 'function') actualizarTodoPanel(panel); });
  if (typeof guardarDebounced === 'function') guardarDebounced();
  return avisos;
}

/* Puntuaciones actuales de la ficha */
function crPuntuaciones(C) {
  const s = {};
  CR_ATR.forEach(a => { s[a] = parseInt(C.panel && C.panel.querySelector(`.stat-score[data-stat="${a}"]`)?.value) || 10; });
  return s;
}

/* ═════ FINAL: filas de ataque y CA, con el nivel y las características definitivas ═════ */
function crAplicarFinal(C) {
  const panel = C.panel; const avisos = [];
  const intentar = (que, fn) => { try { fn(); } catch (e) { console.error('Creación (' + que + ')', e); avisos.push(`${que}: ${e && e.message ? e.message : e}`); } };
  if (typeof actualizarTodoPanel === 'function') actualizarTodoPanel(panel);   // PB al día
  const sc = crPuntuaciones(C);
  const res = crResolverEquipo(C);

  intentar('Ataques', () => {
    const lista = panel.querySelector('.armas-lista'); if (!lista) throw new Error('No se encuentra la lista de armas.');
    Object.keys(res.armas).forEach(id => {
      const d = crFilaAtaque(C, id, sc); if (!d) return;
      let fila = Array.from(lista.querySelectorAll('.arma-fila')).find(f => !f.querySelector('.arma-nombre-input').value.trim());
      if (!fila) { lista.insertAdjacentHTML('beforeend', _htmlArmaFila()); fila = lista.lastElementChild; }
      fila.querySelector('.arma-nombre-input').value = d.nombre;
      fila.querySelector('.arma-stat-sel').value = d.stat;
      fila.querySelector('.arma-bono-extra').value = d.extra;
      fila.querySelector('.arma-dado-qty').value = d.qty;
      fila.querySelector('.arma-dado-tipo').value = d.dado;
      const tipo = fila.querySelector('.arma-tipo-daño'); tipo.value = d.tipo;
      fila.querySelector('.arma-alcance-input').value = d.alcance;
      fila.querySelector('.arma-notas-input').value = (res.armas[id] > 1 ? `×${res.armas[id]} · ` : '') + d.notas;
      recalcArma(fila.querySelector('.arma-stat-sel'));
    });
  });

  intentar('CA', () => {
    const ca = panel.querySelector('.csi-input');
    const armSel = panel.querySelector('.armadura-sel');
    const r = crCalcularCA(C, sc, res);
    // Defensa sin armadura (Bárbaro/Monje): la ficha calcula 10 + DES y el resto va como ajuste
    if (armSel && armSel.value && armSel.value.split('|')[0] === 'sinarmadura' && !r.arm) {
      const extra = r.ca - (10 + crMod(sc.dex)) - (res.escudo && crArmaduraCompetente(C.clase, C.ed, 'shield') ? 2 : 0);
      if (ca) { ca.dataset.caBonus = extra; if (typeof _recalcularCA === 'function') _recalcularCA(panel); }
    }
  });

  intentar('Orden de clase', () => {
    const o = crOrdenOpcion(C); if (!o) return;
    const ord = crOrdenDe(C);
    const t = panel.querySelector('.caract-clase');
    crAnadirTexto(t, `▶ ${ord.t.replace(/\s*\(.*\)/, '')} elegido: ${o.v} — ${o.d}`);
  });

  if (typeof actualizarTodoPanel === 'function') actualizarTodoPanel(panel);
  if (typeof regenerarAccionesAuto === 'function') regenerarAccionesAuto(panel);
  if (typeof guardarDebounced === 'function') guardarDebounced();
  return avisos;
}
