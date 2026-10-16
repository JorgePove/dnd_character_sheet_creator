/* ═══════════════════════════════════════════════════════════════
   subida-estilo.js — Estilo de Combate dentro del asistente de subida de nivel

   Qué hace
   · Detecta cuándo la clase que sube gana un Estilo de Combate (Guerrero, Paladín,
     Explorador, Campeón, Bardo del Colegio de las Espadas, Blood Hunter) o puede cambiarlo.
   · 5.5e (2024): el estilo es una DOTE de tipo «Estilo de Combate» y se anota en Dotes.
     5e (2014): es una opción y se anota en «Opciones de clase» (como el botón ＋ del panel).
   · Guerrero Bendecido (Paladín) y Guerrero Druídico (Explorador) piden 2 trucos de la lista
     de Clérigo / Druida: se eligen aquí y se añaden a la lista de conjuros de la ficha.
   · Sustituciones (5etools): el Guerrero 5.5e puede cambiar su dote en cada nivel de Guerrero;
     en 5e solo con la Versatilidad Marcial (opcional, TCE) al subir a un nivel con Mejora de
     Característica; Guerrero Bendecido / Druídico cambian un truco por nivel (5.5e y TCE).

   Depende de: dotes.js (DND_DOTES), opciones.js (DND_OPCIONES), opciones-ui.js (_opcElegidas,
   _opcSubOk, _opcLineaDe, opcionesRefrescar), subida-nivel.js (snNivelClaseAntes, snSubclaseVigente,
   snEsAsi), subida-opciones.js (snSelectorOpciones, snOpcQuitarLinea, snOpcEdSub, snOpCorto, snOpCap),
   subida-conjuros.js (snSelectorConjuros, snConjurosFicha, snAnadirConjuroFicha, snIdxConjuros,
   snConjUsados), hechizos-clases.js (HECHIZOS_CLASES), caracteristicas.js (DND_SPELLS, _ordenES).
═══════════════════════════════════════════════════════════════ */

const SN_EST_TIPO14 = 'Estilo de Combate (2014)';
const SN_EST_TIPO24 = 'Estilo de Combate';

/* Cuándo concede cada clase un Estilo de Combate (5etools: class-fighter, class-paladin, class-ranger, class-bard):
     nv   nivel de la clase
     ed   edición en la que existe ese rasgo (sin ed: en las dos)
     sub  subclase que lo concede (sin sub: lo concede la clase)
   Blood Hunter no está en 5etools: se sigue el texto de su propia ficha (nivel 2, solo 5e). */
const SN_EST_CONCEDE = {
    'Guerrero':     [{ nv: 1 }, { nv: 7, ed: '2024', sub: 'Campeón [PHB 2024]' }, { nv: 10, ed: '2014', sub: 'Campeón [PHB 2014]' }],
    'Paladín':      [{ nv: 2 }],
    'Explorador':   [{ nv: 2 }],
    'Bardo':        [{ nv: 3, ed: '2014', sub: 'Colegio de las Espadas' }],
    'Blood Hunter': [{ nv: 2, ed: '2014' }],
};
/* Versatilidad Marcial (TCE, opcional, 5e): al subir a un nivel con Mejora de Característica se puede cambiar un estilo */
const SN_EST_VERS = ['Guerrero', 'Paladín', 'Explorador'];
/* Estilos que dan 2 trucos de otra lista (cuentan como conjuros de la clase) */
const SN_EST_TRUCOS = [
    { re: /Blessed Warrior/, clase: 'Paladín',    lista: 'Clérigo', nom: 'Guerrero Bendecido' },
    { re: /Druidic Warrior/, clase: 'Explorador', lista: 'Druida',  nom: 'Guerrero Druídico' },
];
const snEstTrucoDe = n => SN_EST_TRUCOS.find(x => x.re.test(String(n))) || null;
const SN_EST_MARCA = 'Trucos elegidos:';

function snEstHay() {
    return typeof DND_DOTES !== 'undefined' && typeof DND_OPCIONES !== 'undefined' && typeof _opcElegidas === 'function' &&
        typeof snSelectorOpciones === 'function' && typeof snSelectorConjuros === 'function' && typeof DND_SPELLS !== 'undefined';
}

/* nombre → { o, ed } de todos los estilos de combate (dotes de 5.5e y opciones de 5e) */
let _snEstIdx = null;
function snEstIdx() {
    if (!_snEstIdx) {
        _snEstIdx = new Map();
        DND_DOTES.filter(d => d.tipo === SN_EST_TIPO24).forEach(d => _snEstIdx.set(d.n, { o: d, ed: '2024' }));
        DND_OPCIONES.filter(o => o.tipo === SN_EST_TIPO14).forEach(o => _snEstIdx.set(o.n, { o, ed: '2014' }));
    }
    return _snEstIdx;
}
const snEstBuscar = n => { const x = snEstIdx().get(n); return x ? x.o : null; };

/* Ediciones en las que la clase tiene el rasgo */
function snEstEdiciones(clase) {
    const g = SN_EST_CONCEDE[clase] || [];
    if (g.some(x => !x.ed)) return ['2024', '2014'];
    return ['2024', '2014'].filter(e => g.some(x => x.ed === e));
}

/* ═════ Lo que ya hay en la ficha ═════ */
/* Dotes de Estilo de Combate anotadas en el cuadro de Dotes (primera línea de cada bloque) */
function snEstDotesFicha(panel) {
    const txt = panel.querySelector('.caract-dotes')?.value || '';
    const cand = [];
    snEstIdx().forEach(x => { if (x.ed === '2024') [x.o.n].concat(x.o.alias || []).forEach(nm => cand.push({ d: x.o, nm })); });
    cand.sort((a, b) => b.nm.length - a.nm.length);
    const res = []; let inicio = true;
    txt.split('\n').forEach(l => {
        const t = l.trim();
        if (!t) { inicio = true; return; }
        if (inicio) {
            const c = cand.find(c => t.startsWith(c.nm) && /^(\s|\[|:|$)/.test(t.slice(c.nm.length)));
            if (c && !res.includes(c.d)) res.push(c.d);
        }
        inicio = false;
    });
    return res;
}
/* { f24: [dotes], o14: [opciones] } */
function snEstTiene(panel) {
    return { f24: snEstDotesFicha(panel), o14: _opcElegidas(panel).filter(o => o.tipo === SN_EST_TIPO14) };
}
/* Nombres (canónicos) de todos los estilos que no se pueden repetir: los de la ficha y las dotes elegidas en el paso Mejoras */
function snEstTodosNombres(E, tiene) {
    const s = new Set();
    tiene.f24.forEach(d => s.add(d.n)); tiene.o14.forEach(o => s.add(o.n));
    (E.mejoras || []).forEach(m => { if (m.modo === 'dote' && m.dote) s.add(m.dote); });
    return s;
}

/* Quita de un texto el bloque (líneas hasta la siguiente en blanco) que empieza por alguno de los nombres. null si no está */
function snEstQuitarBloque(texto, nombres) {
    const L = texto.split('\n');
    const i = L.findIndex(l => { const t = l.trim(); return nombres.some(nm => t.startsWith(nm) && /^(\s|\[|:|$)/.test(t.slice(nm.length))); });
    if (i < 0) return null;
    let j = i + 1;
    while (j < L.length && L[j].trim() !== '') j++;
    L.splice(i, j - i);
    if (L[i] !== undefined && L[i].trim() === '') L.splice(i, 1);
    else if (i > 0 && L[i - 1].trim() === '') L.splice(i - 1, 1);
    return L.join('\n').replace(/^\s+|\s+$/g, '');
}

/* ═════ Plan: qué gana o puede cambiar la clase que sube ═════ */
/* Edición con la que se cuenta: la de lo ya anotado, si no la de la subclase, si no la que elija la persona */
function snEstEd(E, subD, tiene) {
    const eds = snEstEdiciones(E.clase);
    let ed, fija = false;
    if (tiene.f24.length && eds.includes('2024')) { ed = '2024'; fija = true; }
    else if (tiene.o14.length && eds.includes('2014')) { ed = '2014'; fija = true; }
    else {
        const deSub = snOpcEdSub(subD);
        if (deSub && eds.includes(deSub)) { ed = deSub; fija = true; }
        else ed = (E.est && E.est.ed && eds.includes(E.est.ed)) ? E.est.ed : eds[0];
    }
    if (eds.length < 2) fija = true;
    return { ed, fija, eds };
}

/* Lo que ocurre con una edición concreta */
function snEstCalc(E, ed, ctx) {
    const { antes, despues, subD, tiene } = ctx;
    const nuevos = SN_EST_CONCEDE[E.clase].filter(g => (!g.ed || g.ed === ed) && (!g.sub || _opcSubOk(g.sub, subD)) && g.nv > antes && g.nv <= despues).length;
    const propios = ed === '2024' ? tiene.f24 : tiene.o14;
    let cambios = 0, vers = null;
    if (antes > 0 && propios.length) {
        if (ed === '2024') {
            if (E.clase === 'Guerrero') cambios = 1;   // «cada vez que ganas un nivel de Guerrero puedes cambiar la dote» (una sola dote del rasgo)
        } else if (SN_EST_VERS.includes(E.clase)) {
            let asi = 0;
            for (let n = antes + 1; n <= despues; n++) if (snEsAsi(E.clase, n)) asi++;
            if (asi > 0) { vers = { asi }; if (E.est && E.est.vers) cambios = Math.min(asi, propios.length); }
        }
    }
    let swapT = 0;
    const cant = SN_EST_TRUCOS.find(x => x.clase === E.clase);
    if (cant && antes > 0 && propios.some(x => cant.re.test(x.n))) swapT = Math.min(E.nNiv, 2);
    return { ed, nuevos, cambios, vers, swapT, hay: nuevos > 0 || cambios > 0 || !!vers || swapT > 0 };
}

function snPlanEstilo(E) {
    if (!snEstHay() || !E.clase || !SN_EST_CONCEDE[E.clase]) return { hay: false };
    const antes = snNivelClaseAntes(E), despues = antes + E.nNiv;
    const subD = snSubclaseVigente(E);
    const tiene = snEstTiene(E.panel);
    const r = snEstEd(E, subD, tiene);
    const ctx = { antes, despues, subD, tiene };
    const plan = Object.assign(snEstCalc(E, r.ed, ctx), { fija: r.fija, eds: r.eds, antes, despues, subD, tiene });
    plan.alt = !r.fija ? snEstCalc(E, r.eds.find(x => x !== r.ed), ctx) : null;
    plan.hay = plan.hay || !!(plan.alt && plan.alt.hay);
    return plan;
}

/* ═════ Elecciones del asistente ═════ */
function snEstAjustar(E, plan) {
    const S = E.est || (E.est = { ed: '', vers: false, picks: [], trucos: [], cambios: [], swapT: [] });
    S.picks.length = Math.min(S.picks.length, plan.nuevos);
    while (S.cambios.length < plan.cambios) S.cambios.push({ viejo: '', nuevo: [] });
    S.cambios.length = plan.cambios;
    while (S.swapT.length < plan.swapT) S.swapT.push({ viejo: '', nuevo: [] });
    S.swapT.length = plan.swapT;
    return S;
}

/* Estilos que se elegirán (nuevos + los que sustituyen) */
function snEstElegidos(E) {
    const S = E.est; if (!S) return [];
    return S.picks.concat(S.cambios.filter(c => c.viejo && c.nuevo[0]).map(c => c.nuevo[0]));
}
/* ¿Alguno de los estilos que se eligen da trucos? → definición (SN_EST_TRUCOS) o null */
function snEstNecesitaTrucos(E) {
    for (const n of snEstElegidos(E)) { const t = snEstTrucoDe(n); if (t && t.clase === E.clase) return t; }
    return null;
}
/* Arrays de ids de trucos que elige este paso (para que el paso Conjuros no los ofrezca otra vez) */
function snEstArraysTrucos(E) {
    const S = E.est; if (!S) return [];
    return [S.trucos].concat(S.swapT.map(f => f.nuevo));
}

/* Estilos que puede elegir la clase: de su lista y de la edición */
function snEstPool(E, plan) {
    const out = [];
    snEstIdx().forEach(x => {
        if (x.ed !== plan.ed) return;
        const o = x.o;
        if (plan.ed === '2014') { if (!(o.clases || []).includes(E.clase)) return; }
        else { const t = snEstTrucoDe(o.n); if (t && t.clase !== E.clase) return; }
        out.push(o);
    });
    return out;
}
/* Candidatas: sin las que la ficha ya tiene ni las elegidas en otro selector. propio: el array de ese selector */
function snEstCandidatas(E, plan, propio) {
    const S = E.est;
    const ya = snEstTodosNombres(E, plan.tiene);
    const usadas = new Set();
    const sumar = a => { if (a !== propio) a.forEach(n => usadas.add(n)); };
    sumar(S.picks); S.cambios.forEach(c => sumar(c.nuevo));
    return snEstPool(E, plan).filter(o => !ya.has(o.n) && !usadas.has(o.n)).sort((a, b) => _ordenES(a.n, b.n));
}

/* Trucos de la lista de la clase que aún no están en la ficha ni elegidos en otro sitio */
function snEstCandTrucos(E, cant, propio) {
    const ficha = snConjurosFicha(E.panel);
    const usados = snConjUsados(E, propio);
    const vistos = new Set(), out = [];
    (DND_SPELLS[0] || []).forEach(sp => {
        if (!(HECHIZOS_CLASES[sp.id] || []).includes(cant.lista) || ficha.has(sp.id) || usados.has(sp.id) || vistos.has(sp.id)) return;
        vistos.add(sp.id); out.push({ sp, nv: 0 });
    });
    return out.sort((a, b) => _ordenES(a.sp.n, b.sp.n));
}

/* Texto «Trucos elegidos: A, B.» de un estilo de la ficha → ids de esos trucos (para saber cuáles se pueden cambiar) */
function snEstTrucosMarcados(panel, cant) {
    const textos = [panel.querySelector('.caract-dotes')?.value || '', panel.querySelector('.caract-opciones')?.value || ''];
    const ids = [];
    textos.forEach(t => t.split('\n').forEach(l => {
        if (!cant.re.test(l)) return;
        const m = new RegExp(SN_EST_MARCA + '\\s*([^.\\n]*)\\.').exec(l);
        if (!m) return;
        m[1].split(',').map(s => s.trim()).filter(Boolean).forEach(nombre => {
            const sp = (DND_SPELLS[0] || []).find(x => x.n === nombre);
            if (sp && !ids.includes(sp.id)) ids.push(sp.id);
        });
    }));
    return ids;
}
/* Trucos de la ficha que se pueden cambiar: los marcados en el estilo; si no hay marca, los de nivel 0 de la lista */
function snEstTrucosCambiables(E, cant) {
    const ficha = snConjurosFicha(E.panel);
    const marcados = snEstTrucosMarcados(E.panel, cant).filter(id => ficha.has(id) && ficha.get(id).nivel === 0);
    if (marcados.length) return marcados;
    const out = [];
    ficha.forEach((f, id) => { if (f.nivel === 0 && (HECHIZOS_CLASES[id] || []).includes(cant.lista)) out.push(id); });
    return out;
}

/* Quita lo que ya no es válido (cambió la clase, la subclase, la edición o lo que se eligió antes) */
function snEstLimpiar(E, plan) {
    const S = E.est; if (!S) return;
    const base = new Set(snEstPool(E, plan).map(o => o.n));
    const ya = snEstTodosNombres(E, plan.tiene);
    const ok = n => base.has(n) && !ya.has(n);
    for (let i = S.picks.length - 1; i >= 0; i--) if (!ok(S.picks[i])) S.picks.splice(i, 1);
    const propios = new Set((plan.ed === '2024' ? plan.tiene.f24 : plan.tiene.o14).map(x => x.n));
    const vistosPicks = new Set(S.picks);
    S.cambios.forEach(c => {
        if (c.viejo && !propios.has(c.viejo)) { c.viejo = ''; c.nuevo.length = 0; }
        for (let i = c.nuevo.length - 1; i >= 0; i--) if (!ok(c.nuevo[i]) || vistosPicks.has(c.nuevo[i])) c.nuevo.splice(i, 1);
        c.nuevo.forEach(n => vistosPicks.add(n));
    });
    // si el estilo que daba los trucos se cambia por otro, ya no hay truco que cambiar
    const cant = SN_EST_TRUCOS.find(x => x.clase === E.clase);
    if (cant && S.cambios.some(c => c.viejo && cant.re.test(c.viejo) && c.nuevo[0])) S.swapT.forEach(f => { f.viejo = ''; f.nuevo.length = 0; });
    // trucos: solo si se elige un estilo que los da
    const t = snEstNecesitaTrucos(E);
    if (!t) S.trucos.length = 0;
    else {
        const cands = new Set(snEstCandTrucos(E, t, S.trucos).map(x => x.sp.id).concat(S.trucos));
        for (let i = S.trucos.length - 1; i >= 0; i--) if (!cands.has(S.trucos[i])) S.trucos.splice(i, 1);
        S.trucos.length = Math.min(S.trucos.length, 2);
    }
    const cambiables = new Set(cant ? snEstTrucosCambiables(E, cant) : []);
    S.swapT.forEach(f => {
        if (f.viejo && !cambiables.has(f.viejo)) { f.viejo = ''; f.nuevo.length = 0; }
        for (let i = f.nuevo.length - 1; i >= 0; i--) if (S.trucos.includes(f.nuevo[i])) f.nuevo.splice(i, 1);
    });
}

/* ═════ Aplicar a la ficha ═════ */
const snEstNomSpell = id => (snIdxConjuros().get(id) || { sp: { n: id } }).sp.n;

/* Aplica las elecciones. Devuelve { lineas: [texto], avisos: [texto] } */
function snAplicarEstilo(E) {
    const res = { lineas: [], avisos: [] };
    if (!E.est) return res;
    const plan = snPlanEstilo(E);
    if (!plan.hay) return res;
    const S = snEstAjustar(E, plan);
    snEstLimpiar(E, plan);
    const panel = E.panel, ed = plan.ed;
    const taDotes = panel.querySelector('.caract-dotes'), taOpc = panel.querySelector('.caract-opciones');
    const ta = ed === '2024' ? taDotes : taOpc;
    const cant = snEstNecesitaTrucos(E);
    const nuevos = [];

    // 1) estilos que se sustituyen: se quita el viejo
    const sust = S.cambios.filter(c => c.viejo && c.nuevo[0]);
    sust.forEach(c => {
        if (!ta) throw new Error(ed === '2024' ? 'No encuentro el cuadro de Dotes de la ficha' : 'No encuentro el cuadro «Opciones de clase» de la ficha');
        const x = snEstIdx().get(c.viejo);
        const nombres = x ? [x.o.n].concat(x.o.alias || []) : [c.viejo];
        const t = snEstQuitarBloque(ta.value, nombres);
        if (t == null) res.avisos.push(`${snOpCorto(c.viejo)} no estaba anotado: se añadió ${snOpCorto(c.nuevo[0])} pero no se quitó nada`);
        else ta.value = t;
        const tr = snEstTrucoDe(c.viejo);
        if (tr) res.avisos.push(`Cambiaste ${tr.nom}: quita de la lista de conjuros los trucos de ${tr.lista} que ya no cuentan`);
        nuevos.push(c.nuevo[0]);
    });
    if (sust.length) res.lineas.push('Estilo sustituido: ' + sust.map(c => `${snOpCorto(c.viejo)} → ${snOpCorto(c.nuevo[0])}`).join('; '));
    // 2) estilos nuevos
    S.picks.forEach(n => nuevos.push(n));
    if (S.picks.length) res.lineas.push('Estilo de combate: ' + S.picks.map(snOpCorto).join(', '));

    // 3) se anotan (los que dan trucos, con la lista de trucos elegidos)
    nuevos.forEach(n => {
        const x = snEstIdx().get(n);
        if (!x) { res.avisos.push('Estilo desconocido: ' + n); return; }
        if (!ta) throw new Error(ed === '2024' ? 'No encuentro el cuadro de Dotes de la ficha' : 'No encuentro el cuadro «Opciones de clase» de la ficha');
        const t = snEstTrucoDe(n);
        const extra = t && S.trucos.length ? ` ${SN_EST_MARCA} ${S.trucos.map(snEstNomSpell).join(', ')}.` : '';
        let linea;
        if (ed === '2024') {
            const etq = (typeof _TIPO_ETIQUETA !== 'undefined' && _TIPO_ETIQUETA[x.o.tipo]) || x.o.tipo || 'General';
            linea = `${x.o.n} [${etq}]: ${x.o.d}${extra}`;
        } else linea = `${x.o.n}: ${x.o.d}${extra}`;
        ta.value = ta.value.trim() ? ta.value.replace(/\s+$/, '') + '\n\n' + linea : linea;
    });

    // 4) trucos de Guerrero Bendecido / Druídico
    if (cant) {
        S.trucos.forEach(id => snAnadirConjuroFicha(panel, id, false));
        if (S.trucos.length) res.lineas.push(`Trucos de ${cant.nom}: ` + S.trucos.map(snEstNomSpell).join(', '));
        if (S.trucos.length < 2) res.avisos.push(`${cant.nom} da 2 trucos de ${cant.lista}: ${S.trucos.length ? 'falta 1' : 'faltan los 2'} por añadir en la pestaña de conjuros`);
    }

    // 5) un truco por nivel de Paladín / Explorador
    const swaps = S.swapT.filter(f => f.viejo && f.nuevo[0]);
    if (swaps.length) {
        const ficha0 = snConjurosFicha(panel);
        swaps.forEach(f => { const en = ficha0.get(f.viejo); if (en && en.el && en.el.parentNode) en.el.remove(); else res.avisos.push(`${snEstNomSpell(f.viejo)} no estaba en la lista de conjuros: se añadió ${snEstNomSpell(f.nuevo[0])} pero no se quitó nada`); });
        swaps.forEach(f => {
            snAnadirConjuroFicha(panel, f.nuevo[0], false);
            const v = snEstNomSpell(f.viejo), n = snEstNomSpell(f.nuevo[0]);
            // la nota «Trucos elegidos: …» del estilo se actualiza
            [taDotes, taOpc].forEach(t => {
                if (!t) return;
                t.value = t.value.replace(new RegExp(SN_EST_MARCA + '[^.\\n]*', 'g'), m => m.includes(v) ? m.split(v).join(n) : m);
            });
        });
        res.lineas.push('Truco sustituido: ' + swaps.map(f => `${snEstNomSpell(f.viejo)} → ${snEstNomSpell(f.nuevo[0])}`).join('; '));
    }

    if (typeof opcionesRefrescar === 'function') opcionesRefrescar(panel);
    if (typeof spbActualizarContador === 'function') spbActualizarContador(panel);
    if (typeof regenerarAccionesAuto === 'function') setTimeout(() => regenerarAccionesAuto(panel), 0);
    return res;
}

/* Filas del resumen: [[etiqueta, texto]] */
function snResumenEstilo(E, plan) {
    const filas = [];
    if (!plan || !plan.hay) return filas;
    const S = snEstAjustar(E, plan);   // si no se pasó por el paso, se cuenta como «sin decidir»
    snEstLimpiar(E, plan);             // lo que ya no es válido (p. ej. una dote que se eligió después en Mejoras) no se muestra
    if (plan.nuevos > 0) {
        const falta = plan.nuevos - S.picks.length;
        filas.push(['Estilo de combate', (S.picks.length ? S.picks.map(snOpCorto).join(', ') : 'ninguno') + (falta > 0 ? ` (faltan ${falta}, sin decidir)` : '')]);
    }
    const sust = S.cambios.filter(c => c.viejo && c.nuevo[0]);
    if (sust.length) filas.push(['Estilo sustituido', sust.map(c => `${snOpCorto(c.viejo)} → ${snOpCorto(c.nuevo[0])}`).join('; ')]);
    const cant = snEstNecesitaTrucos(E);
    if (cant) filas.push([`Trucos de ${cant.nom}`, (S.trucos.length ? S.trucos.map(snEstNomSpell).join(', ') : 'ninguno') + (S.trucos.length < 2 ? ` (faltan ${2 - S.trucos.length}, sin decidir)` : '')]);
    const sw = S.swapT.filter(f => f.viejo && f.nuevo[0]);
    if (sw.length) filas.push(['Truco sustituido', sw.map(f => `${snEstNomSpell(f.viejo)} → ${snEstNomSpell(f.nuevo[0])}`).join('; ')]);
    return filas;
}

/* ═════ Paso del asistente ═════
   cuerpo: contenedor del paso · el: crea elementos · rehacer: vuelve a pintar el paso */
function snRenderEstilo(E, cuerpo, el, rehacer) {
    const plan = snPlanEstilo(E);
    const S = snEstAjustar(E, plan);
    snEstLimpiar(E, plan);
    const edTxt = plan.ed === '2024' ? '5.5e (2024)' : '5e (2014)';
    const donde = plan.ed === '2024' ? 'Dotes' : '«Opciones de clase»';

    cuerpo.appendChild(el('p', 'ag-ayuda', `Estilo de combate de ${E.clase}. En 5.5e es una dote (se anota en Dotes); en 5e es una opción (se anota en «Opciones de clase»). Puedes dejar elecciones para más tarde.`));
    const refs = [];
    const pendiente = el('div', 'ag-nota-peq sn-sp-pend');
    const estado = () => {
        const falta = [];
        const f = plan.nuevos - S.picks.length;
        if (f > 0) falta.push(`${f} estilo${f > 1 ? 's' : ''} de combate`);
        const t = snEstNecesitaTrucos(E);
        if (t && S.trucos.length < 2) falta.push(`${2 - S.trucos.length} truco${S.trucos.length < 1 ? 's' : ''} de ${t.nom}`);
        const med = S.cambios.concat(S.swapT).filter(c => (c.viejo && !c.nuevo[0]) || (!c.viejo && c.nuevo[0])).length;
        if (med) falta.push(`${med} sustitución${med > 1 ? 'es' : ''} a medias (se ignoran)`);
        pendiente.textContent = falta.length ? 'Pendiente de elegir: ' + falta.join(', ') + '. No bloquea: puedes continuar.' : 'Todo elegido.';
    };
    const refrescarTodas = () => { snEstLimpiar(E, plan); refs.forEach(f => f()); estado(); };

    const sec = el('div', 'ag-sec sn-sp-sec');
    const tit = el('div', 'ag-sec-tit'); tit.appendChild(document.createTextNode('Estilo de combate '));
    const cont = el('span', 'sn-sp-cont'); tit.appendChild(cont); sec.appendChild(tit);
    const nProp = (plan.ed === '2024' ? plan.tiene.f24 : plan.tiene.o14).length;
    const info = el('div', 'sn-info');
    info.textContent = `${E.clase} nivel ${plan.despues} · reglas ${edTxt} · tienes ${nProp} anotado${nProp === 1 ? '' : 's'}` + (plan.nuevos > 0 ? ` · ganas ${plan.nuevos} con esta subida` : '');
    sec.appendChild(info);

    // Edición dudosa (no hay nada anotado y la subclase no la indica): se pregunta
    if (!plan.fija) {
        const fila = el('div', 'ag-fila-opc sn-op-ed');
        fila.appendChild(el('span', '', 'Reglas:'));
        plan.eds.forEach(ed => {
            const lab = el('label', 'ag-check');
            const r = document.createElement('input'); r.type = 'radio'; r.name = 'sn-est-ed'; r.checked = ed === plan.ed;
            lab.append(r, el('span', '', ed === '2024' ? '5.5e (2024)' : '5e (2014 / TCE / XGtE)'));
            r.addEventListener('change', () => { if (!r.checked) return; S.ed = ed; S.picks.length = 0; S.trucos.length = 0; S.cambios.length = 0; S.swapT.length = 0; rehacer(); });
            fila.appendChild(lab);
        });
        sec.appendChild(fila);
        if (plan.nuevos === 0 && plan.alt && plan.alt.nuevos > 0) sec.appendChild(el('p', 'ag-nota-peq', `Con las reglas ${plan.ed === '2024' ? '5.5e' : '5e'} no ganas un estilo de combate en este nivel. Si juegas con ${plan.ed === '2024' ? '5e (2014)' : '5.5e (2024)'}, ganarías ${plan.alt.nuevos}: cambia las reglas aquí arriba.`));
    }

    // Estilos nuevos
    let apiPicks = null;
    if (plan.nuevos > 0) {
        sec.appendChild(el('p', 'ag-ayuda', `Elige ${plan.nuevos} ${plan.ed === '2024' ? 'dote' + (plan.nuevos > 1 ? 's' : '') + ' de Estilo de Combate' : 'estilo' + (plan.nuevos > 1 ? 's' : '') + ' de combate'} de ${E.clase} (se anota en ${donde}). No se puede repetir un estilo que ya tienes.`));
        apiPicks = snSelectorOpciones({
            sel: S.picks, max: plan.nuevos, etiqueta: 'estilo de combate', buscar: snEstBuscar,
            candidatos: () => snEstCandidatas(E, plan, S.picks).map(o => ({ o, bloq: '' })), onChange: refrescarTodas
        });
        sec.appendChild(apiPicks.el);
    }
    // Técnica Superior (5e, TCE) da una maniobra: el panel de opciones no la ofrece fuera del Maestro de Batalla, se anota a mano
    const notaTS = el('p', 'ag-nota-peq'); notaTS.hidden = true; sec.appendChild(notaTS);
    notaTS.textContent = 'Técnica Superior te da 1 maniobra de las del Maestro de Batalla y 1 dado de superioridad (d6): escribe el nombre de la maniobra en el cuadro «Opciones de clase» de Características.';
    refs.push(() => {
        cont.textContent = plan.nuevos > 0 ? `${S.picks.length}/${plan.nuevos}` : ''; cont.classList.toggle('completo', plan.nuevos > 0 && S.picks.length >= plan.nuevos);
        if (apiPicks) apiPicks.refrescar();
        notaTS.hidden = !snEstElegidos(E).some(n => /Superior Technique/.test(n));
    });

    // Trucos de Guerrero Bendecido / Druídico (aparecen al elegir ese estilo)
    const cajaTrucos = el('div', 'sn-est-trucos'); sec.appendChild(cajaTrucos);
    let apiTrucos = null, defTrucos = null, contT = null;
    refs.push(() => {
        const t = snEstNecesitaTrucos(E);
        if (!t) { if (apiTrucos) { cajaTrucos.textContent = ''; apiTrucos = null; defTrucos = null; } return; }
        if (!apiTrucos || defTrucos !== t) {
            cajaTrucos.textContent = '';
            const cabT = el('div', 'sn-sp-sub', `${t.nom}: elige 2 trucos de ${t.lista} `);
            contT = el('span', 'sn-sp-cont'); cabT.appendChild(contT);
            cajaTrucos.appendChild(cabT);
            cajaTrucos.appendChild(el('p', 'ag-nota-peq', `Cuentan como conjuros de ${E.clase} (${E.clase === 'Paladín' ? 'Carisma' : 'Sabiduría'}). Se añaden a la lista de conjuros de la ficha.`));
            defTrucos = t;
            apiTrucos = snSelectorConjuros({
                sel: S.trucos, max: 2, nivelMin: 0, nivelMax: 0, etiqueta: 'trucos de ' + t.lista,
                candidatos: () => snEstCandTrucos(E, t, S.trucos), onChange: refrescarTodas
            });
            cajaTrucos.appendChild(apiTrucos.el);
        }
        apiTrucos.refrescar();
        contT.textContent = `${S.trucos.length}/2`; contT.classList.toggle('completo', S.trucos.length >= 2);
    });

    // Versatilidad Marcial (5e, opcional)
    if (plan.vers) {
        const fila = el('div', 'ag-fila-opc');
        const lab = el('label', 'ag-check');
        const c = document.createElement('input'); c.type = 'checkbox'; c.checked = !!S.vers;
        lab.append(c, el('span', '', 'Mi mesa usa la Versatilidad Marcial (opcional, TCE): al subir a un nivel con Mejora de Característica puedo cambiar un estilo de combate'));
        c.addEventListener('change', () => { S.vers = c.checked; S.cambios.length = 0; rehacer(); });
        fila.appendChild(lab); sec.appendChild(fila);
    }

    // Sustituir un estilo (opcional): plegado
    if (plan.cambios > 0) {
        const det = el('details', 'sn-op-sust');
        if (S.cambios.some(c => c.viejo)) det.open = true;
        det.appendChild(el('summary', '', `Cambiar un estilo de combate (opcional${plan.cambios > 1 ? ', hasta ' + plan.cambios : ''})`));
        det.appendChild(el('p', 'ag-ayuda', plan.ed === '2024'
            ? 'Cada vez que ganas un nivel de Guerrero puedes sustituir la dote de Estilo de Combate de este rasgo por otra dote de Estilo de Combate.'
            : 'Con la Versatilidad Marcial puedes cambiar un estilo de combate que conozcas por otro disponible para tu clase.'));
        S.cambios.forEach(c => {
            const blk = el('div', 'sn-op-cambio');
            const fila = el('label', 'ag-fila-opc'); fila.appendChild(el('span', '', 'Quitar:'));
            const sv = el('select', 'ag-select sn-sp-viejo'); sv.setAttribute('aria-label', 'Estilo que quitas');
            fila.appendChild(sv); blk.appendChild(fila);
            blk.appendChild(el('div', 'sn-sp-sub', 'Por:'));
            const api = snSelectorOpciones({
                sel: c.nuevo, max: 1, etiqueta: 'nuevo estilo', buscar: snEstBuscar,
                candidatos: () => snEstCandidatas(E, plan, c.nuevo).map(o => ({ o, bloq: '' })), onChange: refrescarTodas
            });
            blk.appendChild(api.el); det.appendChild(blk);
            const pintarViejo = () => {
                const otros = new Set(S.cambios.filter(x => x !== c).map(x => x.viejo).filter(Boolean));
                const propios = (plan.ed === '2024' ? plan.tiene.f24 : plan.tiene.o14).filter(o => !otros.has(o.n)).sort((a, b) => _ordenES(a.n, b.n));
                sv.textContent = '';
                const o0 = el('option', '', '— ninguno —'); o0.value = ''; sv.appendChild(o0);
                propios.forEach(o => { const op = el('option', '', snOpCorto(o.n)); op.value = o.n; sv.appendChild(op); });
                sv.value = c.viejo; if (sv.value !== c.viejo) { c.viejo = ''; sv.value = ''; }
            };
            sv.addEventListener('change', () => { c.viejo = sv.value; refrescarTodas(); });
            refs.push(() => { pintarViejo(); api.refrescar(); });
        });
        sec.appendChild(det);
    }

    // Cambiar un truco de Guerrero Bendecido / Druídico (opcional): plegado
    if (plan.swapT > 0) {
        const t = SN_EST_TRUCOS.find(x => x.clase === E.clase);
        const det = el('details', 'sn-op-sust');
        if (S.swapT.some(f => f.viejo)) det.open = true;
        det.appendChild(el('summary', '', `Cambiar un truco de ${t.nom} (opcional${plan.swapT > 1 ? ', hasta ' + plan.swapT : ''})`));
        det.appendChild(el('p', 'ag-ayuda', `Cada vez que ganas un nivel de ${E.clase} puedes sustituir uno de esos trucos por otro truco de ${t.lista}.`));
        S.swapT.forEach(f => {
            const blk = el('div', 'sn-op-cambio');
            const fila = el('label', 'ag-fila-opc'); fila.appendChild(el('span', '', 'Quitar:'));
            const sv = el('select', 'ag-select sn-sp-viejo'); sv.setAttribute('aria-label', 'Truco que quitas');
            fila.appendChild(sv); blk.appendChild(fila);
            blk.appendChild(el('div', 'sn-sp-sub', 'Por:'));
            const api = snSelectorConjuros({
                sel: f.nuevo, max: 1, nivelMin: 0, nivelMax: 0, etiqueta: 'truco nuevo',
                candidatos: () => snEstCandTrucos(E, t, f.nuevo), onChange: refrescarTodas
            });
            blk.appendChild(api.el); det.appendChild(blk);
            const pintarViejo = () => {
                const otros = new Set(S.swapT.filter(x => x !== f).map(x => x.viejo).filter(Boolean));
                const ids = snEstTrucosCambiables(E, t).filter(id => !otros.has(id)).sort((a, b) => _ordenES(snEstNomSpell(a), snEstNomSpell(b)));
                sv.textContent = '';
                const o0 = el('option', '', '— ninguno —'); o0.value = ''; sv.appendChild(o0);
                ids.forEach(id => { const op = el('option', '', snEstNomSpell(id)); op.value = id; sv.appendChild(op); });
                sv.value = f.viejo; if (sv.value !== f.viejo) { f.viejo = ''; sv.value = ''; }
            };
            sv.addEventListener('change', () => { f.viejo = sv.value; refrescarTodas(); });
            refs.push(() => { pintarViejo(); api.refrescar(); });
        });
        sec.appendChild(det);
    }

    cuerpo.appendChild(sec);
    cuerpo.appendChild(pendiente);
    refrescarTodas();
}
