/* ══════════════════════════════════════════════════════════════════
   creacion-ui.js — Asistente de creación de personaje: ventana, diálogo del «＋» y widgets
   ──────────────────────────────────────────────────────────────────
   Flujo
     «＋» → abrirNuevaFicha(): «Usar el asistente» / «Hacerlo a mano»
     asistente → crIniciar(): crea la ficha vacía y abre la Parte 1 (esta ventana: crAbrirVentana)
     Parte 1 (creacion-pasos.js): Personaje → Especie → Trasfondo → Atributos → Competencias → Equipo → Resumen
     «Continuar» → crAplicarBase(C) y se abre la Parte 2: el asistente de subida de nivel en modo creación
     (vida, rasgos, mejoras, estilo, conjuros, opciones) → snAplicar → crAplicarFinal.
   Depende de: creacion-datos.js, creacion-logica.js, creacion-aplicar.js, creacion-pasos.js,
   subida-nivel.js (abrirSubidaNivel), atributos-gen.js, script.js (nuevaFicha…).
══════════════════════════════════════════════════════════════════ */

const crEl = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };

/* ═════ Widgets ═════ */
/* Desplegable: opciones [{v, n, off}] */
function crSelect(cfg) {
  const s = crEl('select', 'ag-select' + (cfg.cls ? ' ' + cfg.cls : ''));
  if (cfg.etq) s.setAttribute('aria-label', cfg.etq);
  if (cfg.fid) s.dataset.fid = cfg.fid;
  if (cfg.vacio != null) { const o = crEl('option', '', cfg.vacio); o.value = ''; s.appendChild(o); }
  (cfg.opciones || []).forEach(x => { const o = crEl('option', '', x.n); o.value = x.v; if (x.off) o.disabled = true; s.appendChild(o); });
  s.value = cfg.valor || '';
  if (s.value !== (cfg.valor || '')) s.value = '';
  s.addEventListener('change', () => cfg.alCambiar(s.value));
  return s;
}

/* N desplegables que no repiten valores: cfg.sel es un array que se modifica */
function crSelectsN(cfg) {
  const wrap = crEl('div', 'cr-selsn');
  cfg.sel.length = cfg.n; for (let i = 0; i < cfg.n; i++) cfg.sel[i] = cfg.sel[i] || '';
  for (let i = 0; i < cfg.n; i++) {
    const otros = new Set(cfg.sel.filter((x, j) => j !== i && x));
    const s = crSelect({
      opciones: cfg.opciones(i).map(o => ({ v: o.v, n: o.n, off: !!o.off || otros.has(o.v) })),
      valor: cfg.sel[i], vacio: cfg.vacio || '— elige —', etq: cfg.etq ? cfg.etq(i) : '', fid: (cfg.fid || 'sn') + '-' + i,
      alCambiar: v => { cfg.sel[i] = v; cfg.alCambiar(); },
    });
    wrap.appendChild(s);
  }
  return wrap;
}

/* Casillas con tope: items [{v, n, off, title}], sel (array que se modifica), max */
function crChecks(cfg) {
  const wrap = crEl('div', 'ag-checks cr-checks');
  const cajas = [];
  const refrescar = () => {
    const lleno = cfg.sel.length >= cfg.max;
    cajas.forEach(({ inp, it }) => { inp.disabled = !inp.checked && (lleno || !!it.off); });
  };
  cfg.items.forEach(it => {
    const lab = crEl('label', 'ag-check' + (it.off ? ' cr-off' : '')); if (it.title) lab.title = it.title;
    const inp = document.createElement('input'); inp.type = 'checkbox'; inp.checked = cfg.sel.includes(it.v);
    if (cfg.fid) inp.dataset.fid = cfg.fid + '-' + it.v;
    inp.addEventListener('change', () => {
      const i = cfg.sel.indexOf(it.v);
      if (inp.checked) { if (i < 0) cfg.sel.push(it.v); } else if (i >= 0) cfg.sel.splice(i, 1);
      refrescar(); cfg.alCambiar();
    });
    lab.append(inp, crEl('span', '', it.n));
    wrap.appendChild(lab); cajas.push({ inp, it });
  });
  refrescar();
  return wrap;
}

/* Tarjetas de opción excluyente: items [{v, t, d, off}] */
function crRadios(cfg) {
  const modos = crEl('div', 'ag-modos cr-modos');
  cfg.items.forEach(it => {
    const lab = crEl('label', 'ag-modo' + (it.off ? ' cr-off' : ''));
    const r = document.createElement('input'); r.type = 'radio'; r.name = cfg.name; r.value = it.v; r.checked = cfg.valor === it.v;
    if (it.off) r.disabled = true;
    if (cfg.fid) r.dataset.fid = cfg.fid + '-' + it.v;
    const tx = crEl('span', 'ag-modo-tx'); tx.appendChild(crEl('strong', '', it.t)); if (it.d) tx.appendChild(crEl('span', '', it.d));
    lab.append(r, tx);
    r.addEventListener('change', () => { if (r.checked) cfg.alCambiar(it.v); });
    modos.appendChild(lab);
  });
  return modos;
}

/* Lista con buscador y vista previa de lo que se señala: items [{v, n, sub}], vista(v) → Node */
function crSelectorLista(cfg) {
  const raiz = crEl('div', 'sn-sp cr-lista');
  const q = crEl('input', 'ag-num sn-sp-buscar'); q.type = 'text'; q.placeholder = cfg.buscar || 'Buscar…'; q.autocomplete = 'off'; q.spellcheck = false;
  q.setAttribute('aria-label', cfg.etq || 'Buscar'); q.dataset.fid = (cfg.fid || 'lista') + '-q';
  raiz.appendChild(q);
  const lista = crEl('div', 'sn-sp-lista'); lista.tabIndex = 0; lista.setAttribute('role', 'listbox'); lista.setAttribute('aria-label', cfg.etq || 'Lista');
  lista.dataset.fid = (cfg.fid || 'lista') + '-l';
  raiz.appendChild(lista);
  const vista = crEl('div', 'sn-sp-vista cr-vista'); raiz.appendChild(vista);
  let activo = -1, filas = [], valor = cfg.valor || '';
  const pinta = v => {
    vista.textContent = '';
    const it = v && cfg.items.find(x => x.v === v);
    if (!it) { vista.textContent = cfg.pista || 'Pasa el cursor o muévete con las flechas por un elemento para ver su descripción. Pulsa para elegirlo.'; vista.classList.add('vacia'); return; }
    vista.classList.remove('vacia'); vista.appendChild(cfg.vista(it.v));
  };
  const dibuja = () => {
    const scroll = lista.scrollTop; lista.textContent = ''; filas = [];
    const vis = cfg.items.filter(it => !q.value.trim() || _coincideBusq(it.n + ' ' + (it.sub || ''), q.value));
    vis.forEach(it => {
      const sel = it.v === valor;
      const f = crEl('div', 'sn-sp-fila' + (sel ? ' sel' : '')); f.setAttribute('role', 'option'); f.setAttribute('aria-selected', sel ? 'true' : 'false');
      f.id = 'cr-l-' + Math.random().toString(36).slice(2, 8); f.dataset.v = it.v;
      f.append(crEl('span', 'sn-sp-marca', sel ? '◉' : '○'), crEl('span', 'sn-sp-nom', it.n));
      if (it.sub) f.appendChild(crEl('span', 'sn-sp-meta', it.sub));
      f.addEventListener('mouseenter', () => { activo = filas.findIndex(x => x.f === f); pinta(it.v); });
      f.addEventListener('mouseleave', () => pinta(valor));
      f.addEventListener('mousedown', e => e.preventDefault());
      f.addEventListener('click', () => { valor = it.v; cfg.alElegir(it.v); dibuja(); pinta(valor); });
      lista.appendChild(f); filas.push({ f, it });
    });
    if (!vis.length) lista.appendChild(crEl('div', 'sn-sp-vacio', 'Nada coincide con la búsqueda.'));
    activo = Math.min(activo, filas.length - 1);
    lista.scrollTop = scroll;
    const sel = lista.querySelector('.sel'); if (sel && !scroll) { const top = sel.offsetTop; if (top > lista.clientHeight - 30) lista.scrollTop = top - 40; }
  };
  const marcar = (i, ver) => {
    filas.forEach(x => x.f.classList.remove('activa'));
    if (i < 0 || !filas[i]) { lista.removeAttribute('aria-activedescendant'); return; }
    activo = i; const x = filas[i]; x.f.classList.add('activa'); lista.setAttribute('aria-activedescendant', x.f.id);
    const top = x.f.offsetTop, bot = top + x.f.offsetHeight;
    if (top < lista.scrollTop) lista.scrollTop = top; else if (bot > lista.scrollTop + lista.clientHeight) lista.scrollTop = bot - lista.clientHeight;
    if (ver) pinta(x.it.v);
  };
  lista.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); marcar(Math.min(activo + 1, filas.length - 1), true); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); marcar(Math.max(activo - 1, 0), true); }
    else if (e.key === 'Home') { e.preventDefault(); marcar(0, true); }
    else if (e.key === 'End') { e.preventDefault(); marcar(filas.length - 1, true); }
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); const x = filas[activo]; if (x) x.f.click(); }
  });
  q.addEventListener('input', () => { activo = -1; dibuja(); });
  q.addEventListener('keydown', e => { if (e.key === 'ArrowDown') { e.preventDefault(); lista.focus(); marcar(Math.max(activo, 0), true); } });
  dibuja(); pinta(valor);
  return { el: raiz };
}

/* Párrafo de ayuda / nota */
const crAyuda = (txt, cls) => crEl('p', cls || 'ag-ayuda', txt);
function crSec(titulo, ...hijos) {
  const s = crEl('div', 'ag-sec');
  if (titulo) s.appendChild(crEl('div', 'ag-sec-tit', titulo));
  hijos.forEach(h => { if (h) s.appendChild(h); });
  return s;
}
function crFila(etq, ...ctrl) { const f = crEl('label', 'ag-fila-opc cr-fila'); if (etq) f.appendChild(crEl('span', 'cr-fila-etq', etq)); ctrl.forEach(c => f.appendChild(c)); return f; }

/* Texto de una especie o trasfondo para la vista previa */
function crNodoEspecie(key) {
  const d = crEl('div', 'cr-prev');
  d.appendChild(crEl('div', 'sn-sp-vista-cab')).appendChild(crEl('strong', '', crNombreCorto(key)));
  d.firstChild.appendChild(crEl('span', 'opc-etq', crFuenteDeClave(key)));
  (DND_ESPECIES[key] || []).forEach(r => { const p = crEl('div', 'cr-prev-r'); p.append(crEl('b', '', r.n + ': '), document.createTextNode(r.d || '')); d.appendChild(p); });
  return d;
}
function crNodoTrasfondo(key) {
  const t = DND_TRASFONDOS[key]; const d = crEl('div', 'cr-prev');
  d.appendChild(crEl('div', 'sn-sp-vista-cab')).appendChild(crEl('strong', '', crNombreCorto(key)));
  d.firstChild.appendChild(crEl('span', 'opc-etq', crFuenteDeClave(key)));
  if (!t) return d;
  [['Aumento de característica', t.asi], ['Dote de origen', t.dote], ['Habilidades', t.comp], ['Herramientas', t.herr], ['Idiomas', t.idiomas], ['Equipo', t.equipo], ['Rasgo', t.rasgo]].forEach(([k, v]) => {
    if (v) { const p = crEl('div', 'cr-prev-r'); p.append(crEl('b', '', k + ': '), document.createTextNode(v)); d.appendChild(p); }
  });
  if (Array.isArray(t.rasgos)) t.rasgos.forEach(r => { const p = crEl('div', 'cr-prev-r'); p.append(crEl('b', '', r.n + ': '), document.createTextNode(r.d || '')); d.appendChild(p); });
  return d;
}

/* ═════ Diálogo del «＋»: asistente o a mano ═════ */
function abrirNuevaFicha() {
  if (document.getElementById('modal-cr-eleccion') || document.getElementById('modal-creacion') || document.getElementById('modal-subida-nivel')) return;
  const previo = document.activeElement;
  const overlay = crEl('div', 'ag-overlay'); overlay.id = 'modal-cr-eleccion';
  const caja = crEl('div', 'ag-caja cr-caja-chica');
  caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'cr-el-titulo');
  const cab = crEl('div', 'ag-cab');
  const tit = crEl('div', 'ag-titulo', '＋ Nueva ficha'); tit.id = 'cr-el-titulo';
  cab.append(tit, crEl('div', 'ag-sub', '¿Cómo quieres crear tu personaje?'));
  const ops = crEl('div', 'cr-opciones');
  const mk = (cls, titulo, txt) => { const b = crEl('button', 'cr-opcion ' + cls); b.type = 'button'; b.append(crEl('strong', '', titulo), crEl('span', '', txt)); return b; };
  const bAsist = mk('cr-op-asist', '🧙 Usar el asistente de creación', 'Te guía paso a paso: reglas, clase y nivel, especie, trasfondo, atributos, competencias, equipo inicial y conjuros. Al terminar la ficha queda rellena.');
  const bMano = mk('cr-op-mano', '✍ Hacerlo a mano', 'Se crea una ficha en blanco y la rellenas tú como siempre.');
  ops.append(bAsist, bMano);
  const pie = crEl('div', 'ag-pie');
  const bCan = crEl('button', 'ag-btn ag-btn-sec', 'Cancelar'); bCan.type = 'button';
  pie.appendChild(bCan);
  caja.append(cab, ops, pie); overlay.appendChild(caja);

  function cerrar() { document.removeEventListener('keydown', teclas, true); overlay.remove(); if (previo && previo.focus) try { previo.focus(); } catch (e) {} }
  function teclas(e) {
    if (e.key === 'Escape') { e.stopPropagation(); cerrar(); }
    else if (e.key === 'Tab') {
      const foco = Array.from(caja.querySelectorAll('button:not([disabled])'));
      const i = foco.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); foco[foco.length - 1].focus(); }
      else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
    }
  }
  bCan.addEventListener('click', cerrar);
  bMano.addEventListener('click', () => { cerrar(); nuevaFicha(); });
  bAsist.addEventListener('click', () => { cerrar(); crIniciar(); });
  overlay.addEventListener('mousedown', e => { if (e.target === overlay) cerrar(); });
  document.addEventListener('keydown', teclas, true);
  document.body.appendChild(overlay);
  bAsist.focus();
}

/* ═════ Parte 1 ═════ */
const CR_PASOS = ['base', 'esp', 'tf', 'atr', 'hab', 'eq', 'resumen'];
const CR_NOMBRES = { base: 'Personaje', esp: 'Especie', tf: 'Trasfondo', atr: 'Atributos', hab: 'Competencias', eq: 'Equipo', resumen: 'Resumen' };

function crValidoPaso(C, paso) {
  switch (paso) {
    case 'base': return crValidoPersonaje(C);
    case 'esp': return crValidoEspecie(C);
    case 'tf': return crValidoTrasfondo(C);
    case 'atr': return crValidoAtributos(C);
    case 'hab': return crValidoHabilidades(C);
    case 'eq': return crValidoEquipo(C);
    default: return { ok: true, msg: '' };
  }
}

function crIniciar() {
  const C = crNuevoEstado();
  crNuevaFichaVacia(C);
  crAbrirVentana(C, 1);
  return C;
}

function crToast(txt, tipo) { if (typeof _mostrarToast === 'function') { try { _mostrarToast(txt, tipo); } catch (e) { /* aviso no esencial */ } } }

function crAbrirVentana(C, pasoIni) {
  if (document.getElementById('modal-creacion')) return;
  const previo = document.activeElement;
  const overlay = crEl('div', 'ag-overlay cr-overlay'); overlay.id = 'modal-creacion';
  const caja = crEl('div', 'ag-caja cr-caja');
  caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'cr-titulo');
  overlay.appendChild(caja);
  const cab = crEl('div', 'ag-cab');
  const titulo = crEl('div', 'ag-titulo', '🧙 Creación de personaje · Parte 1: tu personaje'); titulo.id = 'cr-titulo';
  const sub = crEl('div', 'ag-sub');
  cab.append(titulo, sub); caja.appendChild(cab);
  const lista = crEl('ol', 'ag-pasos'); caja.appendChild(lista);
  const cuerpo = crEl('div', 'ag-cuerpo cr-cuerpo'); caja.appendChild(cuerpo);
  const aviso = crEl('div', 'ag-aviso'); aviso.setAttribute('aria-live', 'polite'); caja.appendChild(aviso);
  const pie = crEl('div', 'ag-pie');
  const bCancelar = crEl('button', 'ag-btn ag-btn-sec', 'Descartar'); bCancelar.type = 'button';
  const bAtras = crEl('button', 'ag-btn ag-btn-sec', '← Atrás'); bAtras.type = 'button';
  const bSig = crEl('button', 'ag-btn ag-btn-pri', 'Siguiente →'); bSig.type = 'button';
  pie.append(bCancelar, bAtras, bSig); caja.appendChild(pie);

  let refrescadores = [];
  let errorFatal = '';
  const paso = () => CR_PASOS[C.paso - 1];

  /* Ganchos que usa la Parte 2 (asistente de subida de nivel en modo creación) */
  C.volver = () => { crReiniciarFicha(C); C.baseAplicada = false; crAbrirVentana(C, CR_PASOS.length); };
  C.descartar = () => { crDescartarFicha(C); crToast('Creación de personaje cancelada: la ficha se ha descartado.'); };
  C.alTerminar = () => { C.terminado = true; if (C.fichaId && typeof activarFicha === 'function') activarFicha(C.fichaId); };

  function cerrar() { document.removeEventListener('keydown', teclas, true); overlay.remove(); if (previo && previo.focus) try { previo.focus(); } catch (e) {} }

  function pedirDescarte() {
    if (pie.dataset.confirmando) return;
    pie.dataset.confirmando = '1';
    const previos = Array.from(pie.children);
    pie.textContent = '';
    const msg = crEl('div', 'cr-confirma', '¿Descartar el personaje? Se borrará la ficha que se está creando.');
    const bNo = crEl('button', 'ag-btn ag-btn-sec', 'No, seguir'); bNo.type = 'button';
    const bSi = crEl('button', 'ag-btn ag-btn-pri cr-btn-descartar', 'Sí, descartar'); bSi.type = 'button';
    pie.append(msg, bNo, bSi);
    bNo.addEventListener('click', () => { pie.textContent = ''; previos.forEach(x => pie.appendChild(x)); delete pie.dataset.confirmando; });
    bSi.addEventListener('click', () => { cerrar(); C.descartar(); });
    bNo.focus();
  }
  function teclas(e) {
    if (document.getElementById('modal-gen-atributos')) return;          // el generador de atributos tiene su propio manejo de teclas
    if (e.key === 'Escape') { e.stopPropagation(); pedirDescarte(); }
    else if (e.key === 'Tab') {
      const foco = Array.from(caja.querySelectorAll('button:not([disabled]),input:not([type="hidden"]):not([disabled]),select:not([disabled]),summary,[tabindex="0"]')).filter(x => x.offsetParent !== null);
      if (!foco.length) return;
      const i = foco.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); foco[foco.length - 1].focus(); }
      else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
    }
  }

  const valido = n => crValidoPaso(C, CR_PASOS[n - 1]);
  const puedeIr = n => { for (let i = 1; i < n; i++) if (!valido(i).ok) return false; return true; };

  function construirStepper() {
    lista.textContent = '';
    CR_PASOS.forEach((p, i) => {
      const li = crEl('li', 'ag-paso'); const b = crEl('button', 'ag-paso-btn', `${i + 1} · ${CR_NOMBRES[p]}`); b.type = 'button';
      b.addEventListener('click', () => { if (i + 1 < C.paso || puedeIr(i + 1)) irPaso(i + 1); });
      li.appendChild(b); lista.appendChild(li);
    });
  }

  const ctx = {
    C, el: crEl,
    ref: fn => refrescadores.push(fn),
    actualizar: () => actualizar(),
    rehacer: () => rehacer(),
    ir: n => irPaso(n),
  };

  function irPaso(n) {
    errorFatal = '';
    C.paso = Math.max(1, Math.min(CR_PASOS.length, n));
    cuerpo.textContent = ''; refrescadores = [];
    construirStepper();
    CR_RENDER[paso()](C, cuerpo, ctx);
    actualizar();
    const primero = cuerpo.querySelector('input:not([disabled]),select:not([disabled]),button:not([disabled])');
    if (primero && C.paso !== 1) { try { primero.focus({ preventScroll: true }); } catch (e) {} }
  }
  /* Vuelve a pintar el paso conservando el desplazamiento y el elemento con el foco */
  function rehacer() {
    const sc = cuerpo.scrollTop; const fid = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.fid : null;
    const nombre = C.nombre;
    cuerpo.textContent = ''; refrescadores = [];
    CR_RENDER[paso()](C, cuerpo, ctx);
    actualizar();
    cuerpo.scrollTop = sc;
    if (fid) { const el = cuerpo.querySelector(`[data-fid="${CSS.escape(fid)}"]`); if (el) try { el.focus({ preventScroll: true }); } catch (e) {} }
  }
  function actualizar() {
    refrescadores.forEach(f => f());
    Array.from(lista.children).forEach((li, i) => {
      li.classList.toggle('activo', i + 1 === C.paso);
      li.classList.toggle('hecho', i + 1 < C.paso);
      const b = li.firstChild; b.disabled = !(i + 1 <= C.paso || puedeIr(i + 1));
      if (i + 1 === C.paso) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    });
    sub.textContent = [C.nombre, C.clase ? `${C.clase} nivel ${C.nivel}` : '', C.esp ? crNombreCorto(C.esp) : '', C.tf && C.tf !== '__personalizado__' ? crNombreCorto(C.tf) : '', C.ed === '24' ? 'Reglas 5.5e' : 'Reglas 5e'].filter(Boolean).join(' · ');
    const v = valido(C.paso);
    aviso.textContent = errorFatal || (v.ok ? '' : v.msg);
    aviso.classList.toggle('ag-aviso-error', !!errorFatal);
    const ultimo = C.paso === CR_PASOS.length;
    bSig.textContent = ultimo ? 'Continuar: vida, rasgos y conjuros →' : 'Siguiente →';
    bSig.disabled = !v.ok;
    bAtras.style.visibility = C.paso === 1 ? 'hidden' : 'visible';
  }

  bCancelar.addEventListener('click', pedirDescarte);
  bAtras.addEventListener('click', () => { if (C.paso > 1) irPaso(C.paso - 1); });
  bSig.addEventListener('click', () => {
    if (!valido(C.paso).ok) return;
    if (C.paso < CR_PASOS.length) { irPaso(C.paso + 1); return; }
    // Paso final de la Parte 1: se escribe la base en la ficha y se abre la progresión
    let avisos = [];
    try { avisos = crAplicarBase(C); }
    catch (e) { console.error('Creación', e); errorFatal = 'No se pudo aplicar el personaje a la ficha: ' + (e && e.message ? e.message : e); actualizar(); return; }
    C.baseAplicada = true;
    cerrar();
    if (avisos.length) crToast('⚠ Avisos al preparar la ficha: ' + avisos.join(' · '), 'error');
    abrirSubidaNivel(C.panel, C.clase, { crear: C });
  });
  overlay.addEventListener('mousedown', e => { /* no se cierra al pulsar fuera: se perdería lo elegido */ });

  document.addEventListener('keydown', teclas, true);
  document.body.appendChild(overlay);
  irPaso(pasoIni || 1);
  (cuerpo.querySelector('select,input') || bSig).focus();
  return ctx;
}
