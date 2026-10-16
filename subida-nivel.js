/* ═══════════════════════════════════════════════════════════════════
   subida-nivel.js — Asistente de subida de nivel (fase 2)
   Depende de: subida-datos.js, atributos-gen.js (AG_ATRS, AG_ABREV, AG_NOMBRE, agFmt),
               caracteristicas.js (DND_CLASES, DND_DOTES, _TIPO_ETIQUETA, mcAddTab),
               script.js (leerMulticlases, calcularHPMax, calcularHPMaxAuto, hxGuardarVersion…)
   Pasos: Clase → Vida → Rasgos → Mejoras (solo si toca) → Resumen.
   Al aplicar usa las mismas funciones que cuando se cambia el nivel a mano
   (selector de nivel de Características), así que PB, dados de golpe, espacios de
   conjuro y rasgos se recalculan solos.
═══════════════════════════════════════════════════════════════════ */

/* ══════ Funciones puras ══════ */
const snMod = n => Math.floor(((parseInt(n) || 10) - 10) / 2);

function snNivelesAsi(clase) { return SUBIDA_ASI[clase] || SUBIDA_ASI.base; }
function snEsAsi(clase, nivelClase) { return snNivelesAsi(clase).includes(nivelClase); }
function snDadoGolpe(clase) {
    try { return (_getClaseData(clase).diceHit) || 'd8'; } catch (e) { return 'd8'; }
}
function snCaras(dado) { return parseInt(String(dado).replace('d', '')) || 8; }
function snMedia(dado) { return Math.ceil((snCaras(dado) + 1) / 2); }

/* Dado de n caras (crypto con rechazo para no sesgar) */
function snDado(caras) {
    const n = Math.max(2, parseInt(caras) || 6);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        const a = new Uint32Array(1), lim = Math.floor(4294967296 / n) * n;
        do { crypto.getRandomValues(a); } while (a[0] >= lim);
        return (a[0] % n) + 1;
    }
    return Math.floor(Math.random() * n) + 1;
}

/* Requisito de multiclase de una clase frente a unas características → {ok, texto, datos} */
function snReqMulticlase(clase, scores) {
    const r = SUBIDA_MULTICLASE[clase];
    if (!r) return { ok: true, sinDatos: true, texto: '' };
    const par = ([s, m]) => `${AG_ABREV[s]} ${m}`;
    const cumple = ([s, m]) => (parseInt(scores[s]) || 10) >= m;
    if (r.y) return { ok: r.y.every(cumple), texto: r.y.map(par).join(' y '), tiene: r.y.map(([s]) => `${AG_ABREV[s]} ${parseInt(scores[s]) || 10}`).join(', ') };
    return { ok: r.o.some(cumple), texto: r.o.map(par).join(' o '), tiene: r.o.map(([s]) => `${AG_ABREV[s]} ${parseInt(scores[s]) || 10}`).join(', ') };
}

/* Avisos (sin bloquear) al añadir una clase nueva: hay que cumplir el requisito de la clase nueva y el de las actuales */
function snAvisosMulticlase(clasesActuales, nueva, scores) {
    const av = [];
    [nueva].concat(clasesActuales).forEach((c, i) => {
        const q = snReqMulticlase(c, scores);
        if (q.sinDatos) { if (i === 0) av.push(`No tengo el requisito de multiclase de ${c}: confírmalo con tu DM.`); return; }
        if (!q.ok) av.push(`${i === 0 ? 'Clase nueva' : 'Clase actual'} ${c}: para multiclasear hacen falta ${q.texto} (mínimo 13); ahora tienes ${q.tiene}.`);
    });
    return av;
}

/* Frase «Req. …» al principio del texto de una dote */
function snReqTexto(dote) {
    const m = /^Req\.\s+(.*?)\.(?:\s|$)/.exec(dote && dote.d || '');
    return m ? m[1] : '';
}

/* ¿Cumple el personaje los requisitos que se pueden comprobar? → {ok, falta[], noVerif} */
function snDoteEstado(dote, nivelTotal, scores) {
    const e = (typeof SUBIDA_DOTES !== 'undefined' && SUBIDA_DOTES[dote.n]) || null;
    const falta = [];
    let noVerif = !!(e && e.o);
    if (!e) { if (snReqTexto(dote)) noVerif = true; return { ok: true, falta, noVerif }; }
    if (e.nv && nivelTotal < e.nv) falta.push(`nivel ${e.nv}+`);
    if (e.alt && e.alt.length) {
        const algunaOk = e.alt.some(al => al.every(([s, m]) => (parseInt(scores[s]) || 10) >= m));
        if (!algunaOk) falta.push(e.alt.map(al => al.map(([s, m]) => `${AG_ABREV[s]} ${m}`).join(' y ')).join(' o '));
    }
    return { ok: falta.length === 0, falta, noVerif };
}

/* Efecto de una mejora de característica/dote sobre unas características → {scores, cambios[], ok, msg} */
function snEfectoMejora(m, scoresIn) {
    const sc = Object.assign({}, scoresIn), cambios = [];
    const sube = (s, n, tope) => {
        const antes = sc[s]; sc[s] = Math.min(tope, antes + n);
        if (sc[s] !== antes) cambios.push({ s, de: antes, a: sc[s] });
        return antes + n <= tope;
    };
    if (m.modo === 'luego') return { scores: sc, cambios, ok: true, msg: '' };
    if (m.modo === 'asi') {
        if (m.asiModo === '2') {
            if (!m.a) return { scores: sc, cambios, ok: false, msg: 'Elige la característica que sube +2.' };
            if (!sube(m.a, 2, 20)) return { scores: sc, cambios, ok: false, msg: `${AG_NOMBRE[m.a]} no puede pasar de 20.` };
        } else {
            if (!m.a || !m.b) return { scores: sc, cambios, ok: false, msg: 'Elige las dos características que suben +1.' };
            if (m.a === m.b) return { scores: sc, cambios, ok: false, msg: 'Las dos características deben ser distintas.' };
            const okA = sube(m.a, 1, 20), okB = sube(m.b, 1, 20);
            if (!okA || !okB) return { scores: sc, cambios, ok: false, msg: 'Una característica no puede pasar de 20.' };
        }
        return { scores: sc, cambios, ok: true, msg: '' };
    }
    // dote
    const dote = m.dote ? DND_DOTES.find(d => d.n === m.dote) : null;
    if (!dote) return { scores: sc, cambios, ok: false, msg: 'Elige una dote.' };
    const e = (typeof SUBIDA_DOTES !== 'undefined' && SUBIDA_DOTES[dote.n]) || null;
    const mas = e && e.mas;
    if (mas) {
        const tope = mas.max || 20;
        (mas.f || []).forEach(([s, n]) => sube(s, n, tope));
        if (mas.e) {
            const libres = mas.e.filter(s => sc[s] < tope);
            if (!m.mas && libres.length) return { scores: sc, cambios, ok: false, msg: 'Elige la característica que sube +1.' };
            if (m.mas) { if (!mas.e.includes(m.mas)) return { scores: sc, cambios, ok: false, msg: 'Esa característica no la permite la dote.' }; sube(m.mas, 1, tope); }
        }
    }
    return { scores: sc, cambios, ok: true, msg: '' };
}

/* Rasgos nuevos de clase/subclase entre dos niveles (desde exclusivo, hasta inclusivo) */
function snRasgosNuevos(clase, subclase, desde, hasta, desdeSub) {
    if (desdeSub == null) desdeSub = desde;
    const out = [];
    const data = (typeof DND_CLASES !== 'undefined') ? DND_CLASES[clase] : null;
    if (!data) return out;
    (data.rasgos || []).forEach(r => { const nv = r.nv || 1; if (nv > desde && nv <= hasta) out.push({ n: r.n, nv, d: r.d, de: 'clase' }); });
    const sub = subclase && data.subclases && data.subclases[subclase];
    if (sub) sub.forEach(r => {
        const nv = r.nv || 1;
        if (nv > desdeSub && nv <= hasta) out.push({ n: r.n, nv, d: r.d, de: 'subclase' });
    });
    return out.sort((a, b) => a.nv - b.nv);
}

/* Rasgos nuevos agrupados por nivel de clase de la subida (la subclase recién elegida aporta todo lo que ya le toca) */
function snRasgosPorNivel(E) {
    const mc = snMcActual(E);
    const nuevaSub = !!E.subclase && !(mc && mc.subclase);
    const sub = snSubclaseVigente(E);
    return E.pg.map((f, i) => ({
        nvClase: f.nvClase,
        rasgos: snRasgosNuevos(E.clase, sub, f.nvClase - 1, f.nvClase, (nuevaSub && i === 0) ? 0 : f.nvClase - 1),
    }));
}

/* ══════ Estado ══════ */
function snEstadoInicial(panel, claseInicial) {
    const mcs = leerMulticlases(panel).filter(m => m.clase).map(m => ({ clase: m.clase, nivel: parseInt(m.nivel) || 1, subclase: m.subclase || '' }));
    const scores = {};
    AG_ATRS.forEach(a => { scores[a] = parseInt(panel.querySelector(`.stat-score[data-stat="${a}"]`)?.value) || 10; });
    const E = {
        panel, mcs, scores,
        nivelTotal: mcs.reduce((t, m) => t + m.nivel, 0),
        clase: '', nueva: false, nNiv: 1,
        pgModo: 'media', pg: [],
        subclase: '',
        mejoras: [],
        paso: 1, pasos: ['clase', 'vida', 'rasgos', 'resumen'],
    };
    const ini = claseInicial && mcs.find(m => m.clase === claseInicial) ? claseInicial : (mcs[0] && mcs[0].clase) || '';
    E.clase = ini;
    snPrepararNiveles(E);
    return E;
}

function snMcActual(E) { return E.mcs.find(m => m.clase === E.clase) || null; }
function snNivelClaseAntes(E) { const m = snMcActual(E); return m ? m.nivel : 0; }
function snMaxNiveles(E) {
    const antes = snNivelClaseAntes(E);
    return Math.max(0, Math.min(20 - E.nivelTotal, 20 - antes));
}

/* Recalcula las filas de PG, la subclase y las mejoras cuando cambia la clase o el nº de niveles */
function snPrepararNiveles(E) {
    const antes = snNivelClaseAntes(E);
    E.nNiv = Math.max(1, Math.min(E.nNiv, Math.max(1, snMaxNiveles(E))));
    const dado = snDadoGolpe(E.clase);
    E.pg = [];
    for (let i = 0; i < E.nNiv; i++) E.pg.push({ nvClase: antes + i + 1, dado: null });
    E.mejoras = [];
    for (let i = 0; i < E.nNiv; i++) {
        const nvClase = antes + i + 1;
        if (snEsAsi(E.clase, nvClase)) E.mejoras.push({ clase: E.clase, nvClase, nvTotal: E.nivelTotal + i + 1, modo: 'asi', asiModo: '2', a: '', b: '', dote: '', mas: '', q: '', soloCumplo: true, otras: false });
    }
    const hayAsi = E.mejoras.length > 0;
    E.pasos = ['clase', 'vida', 'rasgos'].concat(hayAsi ? ['mejoras'] : []).concat(['resumen']);
    // La subclase elegida en la ficha se conserva; si no hay y se alcanza el nivel 3 se puede elegir
    const mc = snMcActual(E);
    if (!mc || mc.subclase) E.subclase = '';
    E._dado = dado;
}

function snSubclaseVigente(E) { const mc = snMcActual(E); return (mc && mc.subclase) || E.subclase || ''; }
function snPuedeElegirSubclase(E) {
    const mc = snMcActual(E);
    const hasta = snNivelClaseAntes(E) + E.nNiv;
    const data = typeof DND_CLASES !== 'undefined' ? DND_CLASES[E.clase] : null;
    return !!(data && data.subclases && Object.keys(data.subclases).length && (!mc || !mc.subclase) && hasta >= SUBIDA_SUBCLASE_NV);
}

/* Características tras aplicar las mejoras elegidas hasta la i-ésima (exclusiva) */
function snScoresTras(E, hasta) {
    let sc = Object.assign({}, E.scores);
    for (let i = 0; i < hasta && i < E.mejoras.length; i++) sc = snEfectoMejora(E.mejoras[i], sc).scores;
    return sc;
}

/* ¿Alguna dote elegida es Tough/Robusto? */
function snEligeTough(E) {
    return E.mejoras.some(m => m.modo === 'dote' && /^(Tough|Robusto)\b/i.test(m.dote || ''));
}

/* PG y PG actuales antes/después */
function snResumenPG(E) {
    const panel = E.panel;
    const hpEl = panel.querySelector('.hp-max'), actEl = panel.querySelector('.hp-actual');
    const auto = hpEl ? hpEl.dataset.hpAuto !== 'false' : true;
    const maxAntes = parseInt(hpEl && hpEl.value) || 0;
    const actAntes = parseInt(actEl && actEl.value);
    const scFin = snScoresTras(E, E.mejoras.length);
    const conAntes = snMod(E.scores.con), conDesp = snMod(scFin.con);
    const dado = snDadoGolpe(E.clase), antes = snNivelClaseAntes(E);
    const valores = E.pg.map(f => (E.pgModo === 'media' || !f.dado) ? snMedia(dado) : f.dado);
    const bonoActual = _hpBonusPorNivel(panel).porNivel;
    const toughNuevo = (snEligeTough(E) && !/^\s*(Tough|Robusto)\b/im.test(panel.querySelector('.caract-dotes')?.value || '')) ? 2 : 0;
    const totalDesp = E.nivelTotal + E.nNiv;
    let nuevoMax;
    if (auto) {
        const mcsDesp = E.mcs.map(m => ({ clase: m.clase, nivel: m.clase === E.clase ? m.nivel + E.nNiv : m.nivel }));
        if (!E.mcs.some(m => m.clase === E.clase)) mcsDesp.push({ clase: E.clase, nivel: E.nNiv });
        const hn = snHpNivelesDespues(E);
        nuevoMax = calcularHPMax(mcsDesp, conDesp, hn) + (bonoActual + toughNuevo) * totalDesp;
    } else {
        nuevoMax = maxAntes + valores.reduce((t, v) => t + v, 0) + E.nNiv * (conDesp + bonoActual) + (conDesp - conAntes) * E.nivelTotal + toughNuevo * totalDesp;
    }
    const estabaLleno = isNaN(actAntes) || maxAntes <= 0 || actAntes >= maxAntes;
    const actDesp = estabaLleno ? nuevoMax : Math.max(0, Math.min(nuevoMax, actAntes + (nuevoMax - maxAntes)));
    return { auto, maxAntes, nuevoMax, actAntes: isNaN(actAntes) ? maxAntes : actAntes, actDesp, valores, conAntes, conDesp, bonoActual, toughNuevo };
}

/* hpNiveles tal como quedará (las tiradas/escrituras de los niveles nuevos; las medias se guardan como null) */
function snHpNivelesDespues(E) {
    const hn = JSON.parse(JSON.stringify(_leerHpNiveles(E.panel)));
    const antes = snNivelClaseAntes(E);
    const arr = Array.isArray(hn[E.clase]) ? hn[E.clase].slice() : [];
    while (arr.length < antes) arr.push(null);
    E.pg.forEach((f, i) => { arr[antes + i] = (E.pgModo !== 'media' && f.dado) ? f.dado : null; });
    hn[E.clase] = arr;
    return hn;
}

/* ══════ Aplicar ══════ */
function snLog(titulo, grande, detalle) {
    const log = document.getElementById('log-lista');
    if (!log) return;
    const div = document.createElement('div'); div.className = 'log-entrada';
    const t = document.createElement('strong'); t.textContent = titulo;
    const r = document.createElement('div'); r.className = 'res';
    const big = document.createElement('span'); big.textContent = grande;
    const small = document.createElement('small'); small.textContent = detalle;
    r.append(big, small); div.append(t, r); log.prepend(div);
}

function snPaginaDe(panel, clase) {
    return Array.from(panel.querySelectorAll('.caract-mc-body .mc-pagina')).find(p => p.querySelector('.mc-sel-clase')?.value === clase) || null;
}
function snDisparar(el, tipo) { el.dispatchEvent(new Event(tipo, { bubbles: true })); }

async function snAplicar(E) {
    const panel = E.panel;
    const nuevoTotal = E.nivelTotal + E.nNiv;
    const antesNv = snNivelClaseAntes(E);
    const hpEl = panel.querySelector('.hp-max'), actEl = panel.querySelector('.hp-actual');
    const res = snResumenPG(E);
    const scFin = snScoresTras(E, E.mejoras.length);

    // 1. Seguridad: versión en el Historial antes de tocar nada
    try {
        const f = (typeof fichas !== 'undefined') ? fichas.find(x => x.panel === panel) : null;
        if (f && typeof hxGuardarVersion === 'function') await hxGuardarVersion(f, `Antes de subir a nivel ${nuevoTotal}`);
    } catch (e) { console.warn('Subida de nivel: no se pudo guardar la versión previa', e); }

    // 2. PG de los niveles tirados/escritos
    panel.dataset.hpNiveles = JSON.stringify(snHpNivelesDespues(E));

    // 3. Mejoras: características y dotes
    const dotesAnadidas = [], cambiosAtr = [];
    E.mejoras.forEach(m => {
        if (m.modo === 'dote') {
            const d = DND_DOTES.find(x => x.n === m.dote);
            const ta = panel.querySelector('.caract-dotes');
            if (d && ta) {
                const etq = (typeof _TIPO_ETIQUETA !== 'undefined' && _TIPO_ETIQUETA[d.tipo]) || d.tipo || 'General';
                const linea = `${d.n} [${etq}]: ${d.d}`;
                ta.value = ta.value ? ta.value + '\n\n' + linea : linea;
                dotesAnadidas.push(d.n);
            }
        }
    });
    AG_ATRS.forEach(a => {
        if (scFin[a] !== E.scores[a]) {
            const inp = panel.querySelector(`.stat-score[data-stat="${a}"]`);
            if (inp) { inp.value = scFin[a]; actualizarAtributo(inp); cambiosAtr.push(`${AG_ABREV[a]} ${E.scores[a]}→${scFin[a]}`); }
        }
    });

    // 4. Clase y nivel (igual que si se cambiara a mano el selector de nivel de Características)
    if (E.nueva) {
        const btn = panel.querySelector('.caract-mc-add');
        if (btn && typeof mcAddTab === 'function') mcAddTab(btn);
        const pags = panel.querySelectorAll('.caract-mc-body .mc-pagina');
        const pag = pags[pags.length - 1];
        const sel = pag && pag.querySelector('.mc-sel-clase');
        if (sel) { sel.value = E.clase; snDisparar(sel, 'change'); }
    }
    const pag = snPaginaDe(panel, E.clase);
    if (!pag) {
        // Ficha cuyo widget de Características no tiene esa clase: se sube desde el selector de la cabecera
        const fila = Array.from(panel.querySelectorAll('.multiclase-fila')).find(f => f.querySelector('.multiclase-sel')?.value === E.clase);
        const ns = fila && fila.querySelector('.multiclase-nivel');
        if (ns) { ns.value = String(antesNv + E.nNiv); snDisparar(ns, 'change'); }
    } else {
        const nsel = pag.querySelector('.mc-nivel-sel');
        nsel.value = String(antesNv + E.nNiv);
        snDisparar(nsel, 'change');
        if (E.subclase) {
            // Cambiar el nivel reconstruye los widgets de clase: se vuelve a buscar la página
            const pag2 = snPaginaDe(panel, E.clase);
            const ss = pag2 && pag2.querySelector('.mc-sel-subclase');
            if (ss) { ss.value = E.subclase; snDisparar(ss, 'change'); }
        }
    }

    // 5. Vida: recálculo y PG actuales
    if (res.auto) {
        calcularHPMaxAuto(panel);
    } else if (hpEl) {
        hpEl.value = res.nuevoMax;
    }
    if (hpEl && actEl) {
        const fin = parseInt(hpEl.value) || 0;
        const estabaLleno = isNaN(res.actAntes) || res.maxAntes <= 0 || res.actAntes >= res.maxAntes;
        actEl.value = estabaLleno ? fin : Math.max(0, Math.min(fin, res.actAntes + (fin - res.maxAntes)));
        actualizarVidaPanel(hpEl);
    }

    // 6. Registro y aviso
    const partes = [`${E.clase} ${antesNv} → ${antesNv + E.nNiv}`, `PG máx. ${res.maxAntes} → ${hpEl ? hpEl.value : res.nuevoMax}`];
    if (cambiosAtr.length) partes.push(cambiosAtr.join(', '));
    if (dotesAnadidas.length) partes.push('Dote: ' + dotesAnadidas.join(', '));
    if (E.subclase) partes.push('Subclase: ' + E.subclase);
    const pend = E.mejoras.filter(m => m.modo === 'luego').length;
    if (pend) partes.push(`${pend} mejora(s) sin decidir`);
    snLog('Subida de nivel', `Nv. ${nuevoTotal}`, partes.join(' · '));
    if (typeof guardarDebounced === 'function') guardarDebounced();
    if (typeof _mostrarToast === 'function') _mostrarToast(`✔ ${E.clase} sube a nivel ${antesNv + E.nNiv} (nivel total ${nuevoTotal})`);
    return true;
}

/* ══════ Ventana ══════ */
function abrirSubidaNivel(origen, claseInicial) {
    const panel = origen && origen.closest ? origen.closest('.ficha-panel') : origen;
    if (!panel || document.getElementById('modal-subida-nivel')) return;
    const E = snEstadoInicial(panel, claseInicial);
    const previo = document.activeElement;
    const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
    const nombre = (panel.querySelector('.input-nombre')?.value || '').trim();

    const overlay = el('div', 'ag-overlay sn-overlay'); overlay.id = 'modal-subida-nivel';
    const caja = el('div', 'ag-caja');
    caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'sn-titulo');
    overlay.appendChild(caja);
    const cab = el('div', 'ag-cab');
    const titulo = el('div', 'ag-titulo', '⬆ Subir de nivel'); titulo.id = 'sn-titulo';
    cab.append(titulo, el('div', 'ag-sub', [nombre, E.mcs.map(m => `${m.clase} ${m.nivel}`).join(' / ')].filter(Boolean).join(' · ') || 'Personaje sin nombre'));
    caja.appendChild(cab);

    const lista = el('ol', 'ag-pasos'); caja.appendChild(lista);
    const cuerpo = el('div', 'ag-cuerpo'); caja.appendChild(cuerpo);
    const aviso = el('div', 'ag-aviso'); aviso.setAttribute('aria-live', 'polite'); caja.appendChild(aviso);
    const pie = el('div', 'ag-pie');
    const bCancelar = el('button', 'ag-btn ag-btn-sec', 'Cancelar'); bCancelar.type = 'button';
    const bAtras = el('button', 'ag-btn ag-btn-sec', '← Atrás'); bAtras.type = 'button';
    const bSig = el('button', 'ag-btn ag-btn-pri', 'Siguiente →'); bSig.type = 'button';
    pie.append(bCancelar, bAtras, bSig); caja.appendChild(pie);

    let refrescadores = [];
    let aplicando = false;
    const NOMBRES = { clase: 'Clase', vida: 'Vida', rasgos: 'Rasgos', mejoras: 'Mejoras', resumen: 'Resumen' };

    function cerrar() {
        document.removeEventListener('keydown', teclas, true);
        overlay.remove();
        if (previo && previo.focus) try { previo.focus(); } catch (e) {}
    }
    function teclas(e) {
        if (e.key === 'Escape') { e.stopPropagation(); if (!aplicando) cerrar(); }
        else if (e.key === 'Tab') {
            const foco = Array.from(caja.querySelectorAll('button:not([disabled]),input:not([type="hidden"]):not([disabled]),select:not([disabled]),summary')).filter(x => x.offsetParent !== null);
            if (!foco.length) return;
            const i = foco.indexOf(document.activeElement);
            if (e.shiftKey && i <= 0) { e.preventDefault(); foco[foco.length - 1].focus(); }
            else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
        }
    }

    /* ── Validación de cada paso ── */
    function validoPaso(nombrePaso) {
        if (nombrePaso === 'clase') {
            if (!E.mcs.length) return { ok: false, msg: 'Elige primero una clase en la ficha (Clase y Nivel).' };
            if (!E.clase) return { ok: false, msg: 'Elige la clase que sube.' };
            if (E.nivelTotal >= 20) return { ok: false, msg: 'El personaje ya está en el nivel 20.' };
            if (snMaxNiveles(E) < 1) return { ok: false, msg: 'Esa clase ya está en el nivel 20.' };
            return { ok: true, msg: '' };
        }
        if (nombrePaso === 'vida') {
            if (E.pgModo !== 'media') {
                const caras = snCaras(E._dado);
                const mal = E.pg.some(f => !(f.dado >= 1 && f.dado <= caras));
                if (mal) return { ok: false, msg: E.pgModo === 'tirar' ? 'Tira el dado de cada nivel.' : `Escribe un resultado entre 1 y ${caras} en cada nivel.` };
            }
            return { ok: true, msg: '' };
        }
        if (nombrePaso === 'mejoras') {
            let sc = Object.assign({}, E.scores);
            for (let i = 0; i < E.mejoras.length; i++) {
                const r = snEfectoMejora(E.mejoras[i], sc);
                if (!r.ok) return { ok: false, msg: `Nivel ${E.mejoras[i].nvClase} de ${E.mejoras[i].clase}: ${r.msg}` };
                sc = r.scores;
            }
            return { ok: true, msg: '' };
        }
        return { ok: true, msg: '' };
    }
    const nombrePasoActual = () => E.pasos[E.paso - 1];
    function puedeIr(n) { for (let i = 1; i < n; i++) if (!validoPaso(E.pasos[i - 1]).ok) return false; return true; }

    function construirStepper() {
        lista.textContent = '';
        E.pasos.forEach((p, i) => {
            const li = el('li', 'ag-paso'); const b = el('button', 'ag-paso-btn', `${i + 1} · ${NOMBRES[p]}`); b.type = 'button';
            b.addEventListener('click', () => { if (i + 1 < E.paso || puedeIr(i + 1)) irPaso(i + 1); });
            li.appendChild(b); lista.appendChild(li);
        });
    }

    function irPaso(n) {
        E.paso = Math.max(1, Math.min(E.pasos.length, n));
        cuerpo.textContent = ''; refrescadores = [];
        construirStepper();
        ({ clase: renderClase, vida: renderVida, rasgos: renderRasgos, mejoras: renderMejoras, resumen: renderResumen })[nombrePasoActual()]();
        actualizar();
        const primero = cuerpo.querySelector('input:not([disabled]),select:not([disabled]),button:not([disabled])');
        if (primero && E.paso !== 1) { try { primero.focus({ preventScroll: true }); } catch (e) {} }
    }

    function actualizar() {
        refrescadores.forEach(f => f());
        Array.from(lista.children).forEach((li, i) => {
            li.classList.toggle('activo', i + 1 === E.paso);
            li.classList.toggle('hecho', i + 1 < E.paso);
            const b = li.firstChild;
            b.disabled = !(i + 1 <= E.paso || puedeIr(i + 1));
            if (i + 1 === E.paso) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
        });
        const v = validoPaso(nombrePasoActual());
        aviso.textContent = v.ok ? '' : v.msg;
        const ultimo = E.paso === E.pasos.length;
        bSig.textContent = ultimo ? `⬆ Subir a nivel ${E.nivelTotal + E.nNiv}` : 'Siguiente →';
        bSig.disabled = !v.ok || aplicando;
        bAtras.style.visibility = E.paso === 1 ? 'hidden' : 'visible';
    }

    /* ═════ PASO: clase ═════ */
    function renderClase() {
        cuerpo.appendChild(el('p', 'ag-ayuda', 'Elige qué clase sube. Los rasgos, los dados de golpe, el bono de competencia y los espacios de conjuro se actualizan solos al terminar.'));
        const sec = el('div', 'ag-sec');
        sec.appendChild(el('div', 'ag-sec-tit', '¿Qué clase sube?'));
        const sel = el('select', 'ag-select sn-clase'); sel.setAttribute('aria-label', 'Clase que sube');
        const gActuales = document.createElement('optgroup'); gActuales.label = 'Tus clases';
        E.mcs.forEach(m => { const o = el('option', '', `${m.clase} — Nv. ${m.nivel}`); o.value = 'c:' + m.clase; gActuales.appendChild(o); });
        if (E.mcs.length) sel.appendChild(gActuales);
        const gNuevas = document.createElement('optgroup'); gNuevas.label = 'Añadir una clase nueva (multiclase)';
        const tomadas = new Set(E.mcs.map(m => m.clase));
        Object.keys(DND_CLASES).sort(_ordenES).filter(c => !tomadas.has(c)).forEach(c => { const o = el('option', '', `${c} (nueva)`); o.value = 'n:' + c; gNuevas.appendChild(o); });
        if (gNuevas.children.length && E.mcs.length) sel.appendChild(gNuevas);
        sel.value = (E.nueva ? 'n:' : 'c:') + E.clase;
        sec.appendChild(sel);

        const fN = el('label', 'ag-fila-opc sn-nniv');
        fN.appendChild(el('span', '', 'Niveles a subir:'));
        const selN = el('select', 'ag-select sn-nniv-sel'); selN.setAttribute('aria-label', 'Niveles a subir');
        fN.appendChild(selN); sec.appendChild(fN);
        const info = el('div', 'sn-info'); sec.appendChild(info);
        const msgs = el('ul', 'ag-msgs sn-msgs'); sec.appendChild(msgs);
        cuerpo.appendChild(sec);

        const pintarN = () => {
            selN.textContent = '';
            const max = Math.max(1, snMaxNiveles(E));
            for (let i = 1; i <= max; i++) { const o = el('option', '', String(i)); o.value = String(i); selN.appendChild(o); }
            selN.value = String(Math.min(E.nNiv, max));
        };
        pintarN();
        sel.addEventListener('change', () => {
            const [tipo, c] = [sel.value.slice(0, 1), sel.value.slice(2)];
            E.clase = c; E.nueva = tipo === 'n'; E.nNiv = 1; E.subclase = '';
            snPrepararNiveles(E);
            irPaso(1);
        });
        selN.addEventListener('change', () => { E.nNiv = parseInt(selN.value) || 1; snPrepararNiveles(E); construirStepper(); actualizar(); });
        refrescadores.push(() => {
            const antes = snNivelClaseAntes(E), nv = E.nNiv;
            const pbA = calcPB(E.nivelTotal), pbD = calcPB(E.nivelTotal + nv);
            info.textContent = `${E.clase}: nivel ${antes} → ${antes + nv}  ·  Nivel total ${E.nivelTotal} → ${E.nivelTotal + nv}  ·  Bono de competencia +${pbA}${pbA !== pbD ? ' → +' + pbD : ' (igual)'}  ·  +${nv}${snDadoGolpe(E.clase)} de golpe`;
            msgs.textContent = '';
            if (E.nueva) snAvisosMulticlase(E.mcs.map(m => m.clase), E.clase, E.scores).forEach(t => msgs.appendChild(el('li', 'ag-msg-aviso', t)));
            if (E.nueva) msgs.appendChild(el('li', '', 'Como multiclase solo ganas las competencias parciales de la clase nueva (mira la tabla de multiclase de tu libro): revisa el rasgo «Competencias» que se añadirá.'));
            if (E.nNiv > 1) msgs.appendChild(el('li', '', `Se suben ${nv} niveles seguidos: los pasos siguientes recogen cada nivel.`));
        });
    }

    /* ═════ PASO: vida ═════ */
    function renderVida() {
        const dado = E._dado, caras = snCaras(dado), res = () => snResumenPG(E);
        cuerpo.appendChild(el('p', 'ag-ayuda', `Dado de golpe de ${E.clase}: ${dado}. Elige cómo sumar los puntos de golpe de cada nivel nuevo.`));
        const modos = el('div', 'ag-modos');
        [['media', 'Media fija', `${snMedia(dado)} por nivel`], ['tirar', 'Tirar el dado', `1${dado} por nivel`], ['escribir', 'Escribir el resultado', 'ya lo tiraste en la mesa']].forEach(([v, t, s]) => {
            const lab = el('label', 'ag-modo');
            const r = document.createElement('input'); r.type = 'radio'; r.name = 'sn-pgmodo'; r.value = v; r.checked = E.pgModo === v;
            const tx = el('span', 'ag-modo-tx'); tx.append(el('strong', '', t), el('span', '', s));
            lab.append(r, tx); modos.appendChild(lab);
            r.addEventListener('change', () => {
                E.pgModo = v;
                if (v === 'tirar') E.pg.forEach(f => { if (!f.dado) f.dado = snDado(caras); });
                if (v === 'escribir') E.pg.forEach(f => { f.dado = null; });
                irPaso(E.paso);
            });
        });
        cuerpo.appendChild(modos);

        const tabla = el('table', 'ag-tabla sn-pg-tabla');
        const cab = el('tr'); ['Nivel', 'Dado', 'CON', 'Total'].forEach((t, i) => cab.appendChild(el('th', i ? 'n' : '', t)));
        const thead = el('thead'); thead.appendChild(cab); tabla.appendChild(thead);
        const tb = el('tbody'); tabla.appendChild(tb); cuerpo.appendChild(tabla);
        const celdasTotal = [];
        E.pg.forEach((f, i) => {
            const tr = el('tr');
            tr.appendChild(el('td', '', `${E.clase} ${f.nvClase}`));
            const tdD = el('td', 'n');
            if (E.pgModo === 'media') tdD.textContent = String(snMedia(dado));
            else if (E.pgModo === 'tirar') {
                const sp = el('output', 'ag-valor sn-pg-valor', String(f.dado || '–'));
                const b = el('button', 'ag-btn ag-btn-mini', '🎲'); b.type = 'button'; b.title = 'Tirar de nuevo'; b.setAttribute('aria-label', `Tirar de nuevo el dado del nivel ${f.nvClase}`);
                b.addEventListener('click', () => { f.dado = snDado(caras); sp.textContent = String(f.dado); actualizar(); });
                tdD.append(sp, b);
            } else {
                const inp = document.createElement('input'); inp.type = 'number'; inp.className = 'ag-num sn-pg-input'; inp.min = 1; inp.max = caras;
                inp.setAttribute('aria-label', `Resultado del dado del nivel ${f.nvClase}`);
                if (f.dado) inp.value = f.dado;
                inp.addEventListener('input', () => { const n = parseInt(inp.value); f.dado = (n >= 1 && n <= caras) ? n : null; actualizar(); });
                tdD.appendChild(inp);
            }
            tr.appendChild(tdD);
            const tdC = el('td', 'n'); tr.appendChild(tdC);
            const tdT = el('td', 'n ag-total'); tr.appendChild(tdT); celdasTotal.push([tdC, tdT]);
            tb.appendChild(tr);
        });
        const resumen = el('div', 'sn-info'); cuerpo.appendChild(resumen);
        const notas = el('ul', 'ag-msgs'); cuerpo.appendChild(notas);
        refrescadores.push(() => {
            const r = res();
            E.pg.forEach((f, i) => {
                const v = r.valores[i];
                celdasTotal[i][0].textContent = agFmt(r.conDesp);
                celdasTotal[i][1].textContent = `${v + r.conDesp + r.bonoActual + r.toughNuevo}`;
            });
            const gan = r.nuevoMax - r.maxAntes;
            resumen.textContent = `PG máximos: ${r.maxAntes} → ${r.nuevoMax} (${agFmt(gan)})  ·  PG actuales: ${r.actAntes} → ${r.actDesp}`;
            notas.textContent = '';
            if (r.bonoActual) notas.appendChild(el('li', '', `Incluye +${r.bonoActual} por nivel (Dote Tough/Robusto o Dureza Enana).`));
            if (!r.auto) notas.appendChild(el('li', 'ag-msg-aviso', 'Tus PG máximos están en manual: el asistente sumará la ganancia a tu valor actual (puedes reactivar el cálculo automático con ⟳ junto a los PG).'));
            if (r.conAntes !== r.conDesp) notas.appendChild(el('li', '', `El modificador de CON cambia (${agFmt(r.conAntes)} → ${agFmt(r.conDesp)}) y se aplica a todos los niveles.`));
            else notas.appendChild(el('li', 'ag-tenue', 'Si subes CON en el paso Mejoras, los PG se recalculan con efecto retroactivo.'));
        });
    }

    /* ═════ PASO: rasgos ═════ */
    function renderRasgos() {
        cuerpo.appendChild(el('p', 'ag-ayuda', 'Estos rasgos se añadirán al texto de Características sin tocar lo que ya hayas escrito.'));
        const data = DND_CLASES[E.clase];
        if (!data) { cuerpo.appendChild(el('p', 'ag-nota', `No hay rasgos guardados para ${E.clase}: se sube el nivel y los escribes tú.`)); return; }

        if (snPuedeElegirSubclase(E)) {
            const sec = el('div', 'ag-sec');
            sec.appendChild(el('div', 'ag-sec-tit', 'Subclase'));
            sec.appendChild(el('p', 'ag-ayuda', `En 5.5e todas las clases eligen subclase en el nivel ${SUBIDA_SUBCLASE_NV}. Puedes dejarla sin elegir y hacerlo después en Características.`));
            const s = el('select', 'ag-select sn-subclase'); s.setAttribute('aria-label', 'Subclase');
            const o0 = el('option', '', '— Elegir después —'); o0.value = ''; s.appendChild(o0);
            Object.keys(data.subclases).sort(_ordenES).forEach(k => { const o = el('option', '', k); o.value = k; s.appendChild(o); });
            s.value = E.subclase;
            s.addEventListener('change', () => { E.subclase = s.value; irPaso(E.paso); });
            sec.appendChild(s);
            cuerpo.appendChild(sec);
        }
        snRasgosPorNivel(E).forEach(g => {
            const sec = el('div', 'ag-sec');
            sec.appendChild(el('div', 'ag-sec-tit', `${E.clase}, nivel ${g.nvClase}`));
            if (!g.rasgos.length) sec.appendChild(el('p', 'ag-nota-peq', 'Sin rasgos nuevos en este nivel.'));
            g.rasgos.forEach(r => {
                const det = el('details', 'sn-rasgo');
                const sm = el('summary', '', `${r.n}${r.de === 'subclase' ? ' (subclase)' : ''}`);
                det.append(sm, el('p', 'sn-rasgo-d', r.d));
                sec.appendChild(det);
            });
            cuerpo.appendChild(sec);
        });
        if (E.mejoras.length) cuerpo.appendChild(el('p', 'ag-nota-peq', `Mejora de Característica o dote en: ${E.mejoras.map(m => 'nivel ' + m.nvClase).join(', ')} (siguiente paso).`));
    }

    /* ═════ PASO: mejoras ═════ */
    function renderMejoras() {
        cuerpo.appendChild(el('p', 'ag-ayuda', 'En estos niveles tocan Mejora de Característica o una dote. Las dotes que dan +1 lo aplican solas. Los aumentos no pasan de 20 (30 en los Dones Épicos).'));
        const contenedor = el('div', 'sn-mejoras'); cuerpo.appendChild(contenedor);
        // Cada tarjeta depende de las características tras las anteriores: al cambiar una se rehacen las siguientes
        const pintar = (desde) => {
            Array.from(contenedor.children).slice(desde).forEach(c => c.remove());
            for (let i = desde; i < E.mejoras.length; i++) contenedor.appendChild(tarjetaMejora(E.mejoras[i], i, () => pintar(i + 1)));
            actualizar();
        };
        pintar(0);
    }

    function tarjetaMejora(m, i, alCambiar) {
        const scAntes = snScoresTras(E, i);
        const sec = el('div', 'ag-sec sn-mejora');
        sec.appendChild(el('div', 'ag-sec-tit', `${m.clase}, nivel ${m.nvClase}${m.nvClase >= 19 ? ' — Don Épico (2024) o mejora' : ''}`));
        const modos = el('div', 'ag-modos');
        [['asi', 'Mejora de característica', '+2 a una o +1 a dos'], ['dote', 'Dote', 'elige una de la lista'], ['luego', 'Decidir más tarde', 'no se cambia nada']].forEach(([v, t, s]) => {
            const lab = el('label', 'ag-modo');
            const r = document.createElement('input'); r.type = 'radio'; r.name = `sn-modo-${i}`; r.value = v; r.checked = m.modo === v;
            const tx = el('span', 'ag-modo-tx'); tx.append(el('strong', '', t), el('span', '', s));
            lab.append(r, tx); modos.appendChild(lab);
            r.addEventListener('change', () => { m.modo = v; reconstruir(); alCambiar(); });
        });
        sec.appendChild(modos);
        const cuerpoM = el('div', 'sn-mejora-cuerpo'); sec.appendChild(cuerpoM);
        const prev = el('div', 'sn-info'); sec.appendChild(prev);

        const opcionesAtr = (sel, actual, minimo) => {
            sel.textContent = '';
            const o0 = el('option', '', '— elige —'); o0.value = ''; sel.appendChild(o0);
            AG_ATRS.forEach(a => { const o = el('option', '', `${AG_NOMBRE[a]} (${scAntes[a]})`); o.value = a; if (scAntes[a] + minimo > 20) o.disabled = true; sel.appendChild(o); });
            sel.value = actual || '';
        };
        const cambio = () => { actualizarPrev(); alCambiar(); };
        const actualizarPrev = () => {
            const r = snEfectoMejora(m, scAntes);
            if (m.modo === 'luego') prev.textContent = 'Se queda pendiente: podrás subir la característica o añadir la dote a mano.';
            else if (!r.ok) prev.textContent = r.msg;
            else prev.textContent = r.cambios.length ? r.cambios.map(c => `${AG_ABREV[c.s]} ${c.de} → ${c.a} (${agFmt(snMod(c.a))})`).join('  ·  ') : 'Sin cambio de características.';
            actualizar();
        };
        function reconstruir() { cuerpoM.textContent = ''; construirModo(); actualizarPrev(); }

        function construirModo() {
            if (m.modo === 'asi') {
                const f1 = el('div', 'ag-fila-opc');
                const r2 = document.createElement('input'); r2.type = 'radio'; r2.name = `sn-asi-${i}`; r2.checked = m.asiModo === '2';
                const l2 = el('label', 'ag-check'); l2.append(r2, el('span', '', '+2 a una característica'));
                const r11 = document.createElement('input'); r11.type = 'radio'; r11.name = `sn-asi-${i}`; r11.checked = m.asiModo === '11';
                const l11 = el('label', 'ag-check'); l11.append(r11, el('span', '', '+1 a dos características'));
                f1.append(l2, l11); cuerpoM.appendChild(f1);
                const f2 = el('div', 'ag-fila-opc');
                const sa = el('select', 'ag-select'); sa.setAttribute('aria-label', 'Primera característica');
                const sb = el('select', 'ag-select'); sb.setAttribute('aria-label', 'Segunda característica');
                f2.append(sa, sb); cuerpoM.appendChild(f2);
                const pinta = () => {
                    opcionesAtr(sa, m.a, m.asiModo === '2' ? 2 : 1);
                    opcionesAtr(sb, m.b, 1);
                    sb.style.display = m.asiModo === '11' ? '' : 'none';
                };
                pinta();
                r2.addEventListener('change', () => { if (r2.checked) { m.asiModo = '2'; m.b = ''; pinta(); cambio(); } });
                r11.addEventListener('change', () => { if (r11.checked) { m.asiModo = '11'; pinta(); cambio(); } });
                sa.addEventListener('change', () => { m.a = sa.value; cambio(); });
                sb.addEventListener('change', () => { m.b = sb.value; cambio(); });
            } else if (m.modo === 'dote') {
                construirDote();
            }
        }

        function construirDote() {
            const barra = el('div', 'ag-fila-opc sn-dote-filtro');
            const q = document.createElement('input'); q.type = 'search'; q.className = 'ag-num sn-dote-q'; q.placeholder = 'Buscar dote…'; q.value = m.q; q.setAttribute('aria-label', 'Buscar dote');
            const c1 = document.createElement('input'); c1.type = 'checkbox'; c1.checked = m.soloCumplo;
            const l1 = el('label', 'ag-check'); l1.append(c1, el('span', '', 'Solo las que cumplo'));
            const c2 = document.createElement('input'); c2.type = 'checkbox'; c2.checked = m.otras;
            const l2 = el('label', 'ag-check'); l2.append(c2, el('span', '', 'Incluir estilos de combate, Dragonmarks y Dones Oscuros'));
            barra.append(q, l1, l2); cuerpoM.appendChild(barra);
            const lst = el('select', 'ag-select sn-dote-lista'); lst.size = 7; lst.setAttribute('aria-label', 'Dotes disponibles');
            cuerpoM.appendChild(lst);
            const det = el('div', 'sn-dote-det'); cuerpoM.appendChild(det);
            const masWrap = el('div', 'ag-fila-opc sn-dote-mas'); cuerpoM.appendChild(masWrap);

            const esExtra = t => /^(Estilo de Combate|Dragonmark|Dark Gift)/.test(t || '');
            const pintaLista = () => {
                lst.textContent = '';
                const grupos = new Map();
                DND_DOTES.slice().sort((a, b) => _ordenES(a.n, b.n)).forEach(d => {
                    if (d.n === 'Ability Score Improvement [PHB 2024]') return;       // ya está como «Mejora de característica»
                    if (!m.otras && esExtra(d.tipo)) return;
                    const est = snDoteEstado(d, m.nvTotal, scAntes);
                    if (m.soloCumplo && !est.ok) return;
                    if (m.q && !_coincideBusq(d.n + ' ' + d.d, m.q)) return;
                    if (!grupos.has(d.tipo)) grupos.set(d.tipo, []);
                    grupos.get(d.tipo).push({ d, est });
                });
                const orden = Array.from(grupos.keys()).sort((a, b) => {
                    const pri = t => (m.nvClase >= 19 && /^Boon/.test(t) ? 0 : /^General/.test(t) ? 1 : /^Origen/.test(t) ? 2 : /^Boon/.test(t) ? 3 : 4);
                    return pri(a) - pri(b) || _ordenES(a, b);
                });
                orden.forEach(t => {
                    const g = document.createElement('optgroup'); g.label = t;
                    grupos.get(t).forEach(({ d, est }) => { const o = el('option', '', d.n + (est.ok ? '' : '  (no cumples)')); o.value = d.n; g.appendChild(o); });
                    lst.appendChild(g);
                });
                if (!lst.children.length) { const o = el('option', '', 'Ninguna dote coincide'); o.disabled = true; lst.appendChild(o); }
                if (m.dote && Array.from(lst.options).some(o => o.value === m.dote)) lst.value = m.dote; else if (m.dote && !grupos.size) { /* sin coincidencias */ }
            };
            const pintaDetalle = () => {
                det.textContent = ''; masWrap.textContent = '';
                const d = m.dote ? DND_DOTES.find(x => x.n === m.dote) : null;
                if (!d) { det.appendChild(el('p', 'ag-nota-peq', 'Selecciona una dote para ver su descripción.')); return; }
                const est = snDoteEstado(d, m.nvTotal, scAntes);
                det.appendChild(el('div', 'sn-dote-t', `${d.n}  —  ${d.tipo}`));
                if (!est.ok) det.appendChild(el('p', 'ag-nota', `No cumples: ${est.falta.join('; ')}. Puedes elegirla igualmente si tu DM lo permite.`));
                if (est.noVerif) det.appendChild(el('p', 'ag-nota-peq', `Requisito que no se comprueba solo: ${snReqTexto(d) || 'consulta la dote'}.`));
                det.appendChild(el('p', 'sn-dote-d', d.d));
                const e = (typeof SUBIDA_DOTES !== 'undefined' && SUBIDA_DOTES[d.n]) || null;
                if (e && e.mas && e.mas.e) {
                    masWrap.appendChild(el('span', '', `+1 a (máx. ${e.mas.max || 20}):`));
                    const s = el('select', 'ag-select'); s.setAttribute('aria-label', 'Característica que sube +1');
                    const o0 = el('option', '', '— elige —'); o0.value = ''; s.appendChild(o0);
                    e.mas.e.forEach(a => { const o = el('option', '', `${AG_NOMBRE[a]} (${scAntes[a]})`); o.value = a; if (scAntes[a] >= (e.mas.max || 20)) o.disabled = true; s.appendChild(o); });
                    s.value = m.mas || '';
                    s.addEventListener('change', () => { m.mas = s.value; cambio(); });
                    masWrap.appendChild(s);
                } else if (e && e.mas && e.mas.f) {
                    masWrap.appendChild(el('span', 'ag-tenue', 'Aumento automático: ' + e.mas.f.map(([a, n]) => `${AG_ABREV[a]} +${n}`).join(', ')));
                }
            };
            pintaLista(); pintaDetalle();
            q.addEventListener('input', () => { m.q = q.value; pintaLista(); });
            c1.addEventListener('change', () => { m.soloCumplo = c1.checked; pintaLista(); });
            c2.addEventListener('change', () => { m.otras = c2.checked; pintaLista(); });
            lst.addEventListener('change', () => { m.dote = lst.value; m.mas = ''; pintaDetalle(); cambio(); });
        }
        construirModo(); actualizarPrev();
        return sec;
    }

    /* ═════ PASO: resumen ═════ */
    function renderResumen() {
        cuerpo.appendChild(el('p', 'ag-ayuda', 'Revisa los cambios. Al confirmar se guarda antes una versión en el Historial («Antes de subir a nivel N») por si quieres deshacerlo.'));
        const r = snResumenPG(E);
        const antes = snNivelClaseAntes(E);
        const filas = [];
        filas.push(['Clase', `${E.clase}: ${antes} → ${antes + E.nNiv}${E.nueva ? ' (clase nueva)' : ''}`]);
        filas.push(['Nivel total', `${E.nivelTotal} → ${E.nivelTotal + E.nNiv}`]);
        const pbA = calcPB(E.nivelTotal), pbD = calcPB(E.nivelTotal + E.nNiv);
        filas.push(['Bono de competencia', pbA === pbD ? `+${pbA} (sin cambio)` : `+${pbA} → +${pbD}`]);
        filas.push(['Puntos de golpe', `máx. ${r.maxAntes} → ${r.nuevoMax}  ·  actuales ${r.actAntes} → ${r.actDesp}`]);
        filas.push(['Dados de golpe', `+${E.nNiv}${E._dado}`]);
        const rasgos = [];
        snRasgosPorNivel(E).forEach(g => g.rasgos.forEach(x => rasgos.push(x.n)));
        filas.push(['Rasgos nuevos', rasgos.length ? Array.from(new Set(rasgos)).join(', ') : 'ninguno']);
        if (E.subclase) filas.push(['Subclase', E.subclase]);
        E.mejoras.forEach((m, i) => {
            const sc = snScoresTras(E, i), ef = snEfectoMejora(m, sc);
            let t;
            if (m.modo === 'luego') t = 'pendiente (sin cambios)';
            else if (m.modo === 'asi') t = ef.cambios.map(c => `${AG_ABREV[c.s]} ${c.de}→${c.a}`).join(', ');
            else t = `Dote: ${m.dote}` + (ef.cambios.length ? ' · ' + ef.cambios.map(c => `${AG_ABREV[c.s]} ${c.de}→${c.a}`).join(', ') : '');
            filas.push([`Mejora nv. ${m.nvClase}`, t]);
        });
        const tabla = el('table', 'ag-tabla sn-resumen');
        const tb = el('tbody'); tabla.appendChild(tb);
        filas.forEach(([k, v]) => { const tr = el('tr'); tr.append(el('th', '', k), el('td', '', v)); tb.appendChild(tr); });
        cuerpo.appendChild(tabla);
        const notas = el('ul', 'ag-msgs');
        if (E.nueva) notas.appendChild(el('li', 'ag-msg-aviso', 'Clase nueva: revisa en Características las competencias que realmente ganas por multiclase.'));
        if (!r.auto) notas.appendChild(el('li', 'ag-msg-aviso', 'PG máximos en manual: se suma la ganancia a tu valor actual.'));
        notas.appendChild(el('li', '', 'Los espacios de conjuro, trucos y conjuros preparados se actualizan solos; los conjuros nuevos los eliges tú en la pestaña de hechizos.'));
        cuerpo.appendChild(notas);
    }

    /* ── Botones ── */
    bCancelar.addEventListener('click', () => { if (!aplicando) cerrar(); });
    bAtras.addEventListener('click', () => { if (E.paso > 1) irPaso(E.paso - 1); });
    bSig.addEventListener('click', async () => {
        if (!validoPaso(nombrePasoActual()).ok) return;
        if (E.paso < E.pasos.length) { irPaso(E.paso + 1); return; }
        aplicando = true; actualizar();
        try { await snAplicar(E); cerrar(); }
        catch (e) { console.error('Subida de nivel', e); aplicando = false; aviso.textContent = 'No se pudo completar: ' + (e && e.message ? e.message : e); actualizar(); }
    });
    overlay.addEventListener('mousedown', e => { if (e.target === overlay && !aplicando) cerrar(); });

    document.addEventListener('keydown', teclas, true);
    document.body.appendChild(overlay);
    irPaso(1);
    (cuerpo.querySelector('select') || bSig).focus();
}
