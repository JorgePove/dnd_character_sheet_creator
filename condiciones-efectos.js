/* ═══════════════════════════════════════════════════════
   EFECTOS DE LAS CONDICIONES EN LAS TIRADAS
   Reglas 5.5e (PHB 2024, datos de 5etools XPHB):
   · Ventaja / desventaja automática en ataques, pruebas, salvaciones e iniciativa.
   · Fallo automático en salvaciones de FUE/DES (Aturdido, Paralizado, Inconsciente, Petrificado).
   · Agotamiento: −2 × nivel a todas las tiradas de d20 y −5 × nivel pies de velocidad;
     nivel 6 = muerte. (La tabla de 2014 queda como nota en los tooltips.)
   Combinación (regla oficial): cualquier fuente de ventaja + cualquier fuente de desventaja
   se anulan y se tira un solo d20, da igual cuántas haya de cada.
   Se puede ignorar TODO en la próxima tirada con el botón flotante «Sin condiciones»
   (se consume al tirar, como Ventaja/Desventaja).
═══════════════════════════════════════════════════════ */
(function () {
    'use strict';

    const NOM = { str: 'FUE', dex: 'DES', con: 'CON', int: 'INT', wis: 'SAB', cha: 'CAR' };

    /* t: ataque | prueba | salv | ini   ·   d: V ventaja, D desventaja, F fallo automático
       auto:false → solo aviso (depende del contexto y no se aplica solo) · nota: matiz */
    const EFECTOS = {
        'Cegado':       [{ t: 'ataque', d: 'D' }],
        'Asustado':     [{ t: 'ataque', d: 'D', nota: 'mientras veas la fuente del miedo' }, { t: 'prueba', d: 'D', nota: 'mientras veas la fuente del miedo' }],
        'Envenenado':   [{ t: 'ataque', d: 'D' }, { t: 'prueba', d: 'D' }],
        'Derribado':    [{ t: 'ataque', d: 'D' }],
        'Restringido':  [{ t: 'ataque', d: 'D' }, { t: 'salv', d: 'D', stats: ['dex'] }],
        'Invisible':    [{ t: 'ataque', d: 'V', nota: 'salvo contra quien pueda verte' }, { t: 'ini', d: 'V' }],
        'Agarrado':     [{ t: 'ataque', d: 'D', auto: false, nota: 'contra cualquiera que no sea quien te agarra' }],
        'Incapacitado': [{ t: 'ini', d: 'D' }],
        'Aturdido':     [{ t: 'salv', d: 'F', stats: ['str', 'dex'] }, { t: 'ini', d: 'D' }],
        'Paralizado':   [{ t: 'salv', d: 'F', stats: ['str', 'dex'] }, { t: 'ini', d: 'D' }],
        'Inconsciente': [{ t: 'salv', d: 'F', stats: ['str', 'dex'] }, { t: 'ini', d: 'D' }],
        'Petrificado':  [{ t: 'salv', d: 'F', stats: ['str', 'dex'] }, { t: 'ini', d: 'D' }]
    };
    /* Avisos que no cambian ninguna tirada pero conviene tener a la vista */
    const INFO = {
        'Cegado': 'Cegado: fallas las pruebas que requieran vista; los ataques contra ti tienen ventaja',
        'Ensordecido': 'Ensordecido: fallas las pruebas que requieran oído',
        'Restringido': 'Restringido: velocidad 0; los ataques contra ti tienen ventaja',
        'Derribado': 'Derribado: los ataques contra ti tienen ventaja a ≤5 pies y desventaja a más distancia'
    };

    window._ceIgnorar = false;   // «Sin condiciones» para la próxima tirada

    /* ── Lectura del estado de la ficha ── */
    function condicionesActivas(panel) {
        if (!panel) return [];
        return [...panel.querySelectorAll('.condicion-item')]
            .filter(i => i.querySelector('.condicion-chk')?.checked)
            .map(i => (i.querySelector('.condicion-nombre')?.textContent || '').trim())
            .filter(Boolean);
    }
    function nivelAgotamiento(panel) {
        return panel ? panel.querySelectorAll('.agotamiento-bolita.activo').length : 0;
    }

    /* Efectos que afectan a una tirada de este tipo (y característica, en salvaciones) */
    function calcular(panel, tipo, stat) {
        const tipos = tipo === 'ini' ? ['ini', 'prueba'] : [tipo];   // la iniciativa es una prueba de DES
        const r = { V: [], D: [], F: [], avisos: [], penal: 0, agot: 0 };
        for (const nombre of condicionesActivas(panel)) {
            for (const e of (EFECTOS[nombre] || [])) {
                if (!tipos.includes(e.t)) continue;
                if (e.stats && !e.stats.includes(stat)) continue;
                const etiqueta = nombre;
                if (e.auto === false) { r.avisos.push(`${nombre}: desventaja ${e.nota}`); continue; }
                (e.d === 'V' ? r.V : e.d === 'D' ? r.D : r.F).push(etiqueta);
            }
        }
        const n = nivelAgotamiento(panel);
        if (n > 0 && n < 6) { r.penal = -2 * n; r.agot = n; }
        return r;
    }

    /* Resultado combinado para una tirada.
       manual = { V, D } → Ventaja/Desventaja puestas a mano (botones flotantes o por habilidad) */
    window.ceTirada = function (panel, tipo, stat, manual) {
        manual = manual || {};
        const vacio = { V: !!manual.V, D: !!manual.D, ventaja: !!manual.V && !manual.D, desventaja: !!manual.D && !manual.V, penal: 0, motivo: '', autoFallo: null, ignoradas: false, avisos: [] };
        if (!panel) return vacio;
        const r = calcular(panel, tipo, stat);
        const hayEfectos = r.V.length || r.D.length || r.F.length || r.penal;
        if (window._ceIgnorar) { vacio.ignoradas = !!hayEfectos; if (hayEfectos) vacio.motivo = 'sin condiciones'; return vacio; }
        const V = !!manual.V || r.V.length > 0, D = !!manual.D || r.D.length > 0;
        const partes = [];
        if (r.V.length) partes.push('▲ ' + r.V.join(', '));
        if (r.D.length) partes.push('▼ ' + r.D.join(', '));
        let motivo = partes.join(' · ');
        if (V && D && motivo) motivo += ' (se anulan)';
        return { V, D, ventaja: V && !D, desventaja: D && !V, penal: r.penal, agot: r.agot, motivo, autoFallo: r.F[0] || null, ignoradas: false, avisos: r.avisos };
    };

    /* Entrada de log cuando la salvación falla sola */
    window.ceLogFalloAutomatico = function (nombre, condicion) {
        const log = document.getElementById('log-lista');
        if (!log) return;
        const div = document.createElement('div');
        div.className = 'log-entrada desventaja';
        div.innerHTML = `<strong>${_esc(nombre)}</strong><div class="res"><span>✖</span><small>fallo automático (${_esc(condicion)})</small></div>`;
        log.prepend(div);
    };

    /* ── Resumen visible (chip bajo las condiciones) y botón flotante ── */
    function listar(arr) { return arr.join(', '); }
    function resumen(panel) {
        const lineas = [];
        const A = calcular(panel, 'ataque'), P = calcular(panel, 'prueba'), I = calcular(panel, 'ini');
        const adv = (r) => (r.V.length && r.D.length) ? `se anulan (▲ ${listar(r.V)} / ▼ ${listar(r.D)})` : r.D.length ? `desventaja (${listar(r.D)})` : r.V.length ? `ventaja (${listar(r.V)})` : '';
        const l = (ico, tit, txt) => { if (txt) lineas.push({ ico, tit, txt }); };
        l('⚔', 'Ataques', adv(A));
        A.avisos.forEach(a => lineas.push({ ico: '⚠', tit: 'Ojo', txt: a + ' (no se aplica solo)' }));
        l('🎲', 'Pruebas', adv(P));
        // salvaciones por característica
        const porStat = {};
        Object.keys(NOM).forEach(s => { const r = calcular(panel, 'salv', s); const t = r.F.length ? `fallo automático (${listar(r.F)})` : adv(r); if (t) (porStat[t] = porStat[t] || []).push(NOM[s]); });
        Object.keys(porStat).forEach(t => l('🛡', 'Salv. ' + porStat[t].join('/'), t));
        // iniciativa distinta de las pruebas
        const ti = adv(I); if (ti && ti !== adv(P)) l('⚡', 'Iniciativa', ti);
        const n = nivelAgotamiento(panel);
        if (n >= 6) lineas.push({ ico: '☠', tit: 'Agotamiento 6', txt: 'muerte' });
        else if (n > 0) {
            lineas.push({ ico: '⚠', tit: `Agotamiento ${n}`, txt: `−${2 * n} a todas las tiradas de d20 · velocidad −${5 * n} pies` });
        }
        condicionesActivas(panel).forEach(c => { if (INFO[c]) lineas.push({ ico: 'ℹ', tit: c, txt: INFO[c].replace(c + ': ', '') }); });
        return lineas;
    }
    window.ceResumen = resumen;

    function pintarChip(panel) {
        let chip = panel.querySelector('.cond-efectos');
        if (!chip) {
            const zona = panel.querySelector('.condiciones-y-agotamiento');
            if (!zona) return;
            chip = document.createElement('div');
            chip.className = 'cond-efectos';
            chip.setAttribute('aria-live', 'polite');
            zona.parentNode.insertBefore(chip, zona.nextSibling);
        }
        const lin = resumen(panel);
        chip.hidden = !lin.length;
        chip.textContent = '';
        if (!lin.length) return;
        const tit = document.createElement('div');
        tit.className = 'cond-efectos-tit';
        tit.textContent = 'Efectos en tus tiradas (se aplican solos)';
        chip.appendChild(tit);
        lin.forEach(x => {
            const f = document.createElement('div');
            f.className = 'cond-efectos-fila';
            const b = document.createElement('b'); b.textContent = `${x.ico} ${x.tit}: `;
            f.append(b, document.createTextNode(x.txt));
            chip.appendChild(f);
        });
    }

    function hayEfectosRoll(panel) {
        if (!panel) return false;
        if (nivelAgotamiento(panel) > 0) return true;
        return ['ataque', 'prueba', 'ini'].some(t => { const r = calcular(panel, t); return r.V.length || r.D.length; })
            || Object.keys(NOM).some(s => { const r = calcular(panel, 'salv', s); return r.V.length || r.D.length || r.F.length; });
    }

    window.ceActualizarUI = function () {
        document.querySelectorAll('.ficha-panel').forEach(pintarChip);
        const panel = typeof panelActual === 'function' ? panelActual() : document.querySelector('.ficha-panel.activa');
        const btn = document.getElementById('btn-cond-f');
        if (!btn) return;
        const hay = hayEfectosRoll(panel);
        btn.hidden = !hay;
        if (!hay) window._ceIgnorar = false;
        const ign = !!window._ceIgnorar;
        btn.classList.toggle('activo', ign);
        btn.setAttribute('aria-pressed', String(ign));
        btn.textContent = ign ? '🚫 Sin condiciones' : '⚠ Condiciones';
        const lin = hay ? resumen(panel).map(x => `${x.tit}: ${x.txt}`).join('\n') : '';
        btn.title = ign
            ? 'La próxima tirada ignorará las condiciones y el agotamiento. Clic para volver a aplicarlos.'
            : 'Las condiciones se aplican solas a tus tiradas:\n' + lin + '\n\nClic = ignorarlas en la próxima tirada.';
    };

    window.toggleIgnorarCondiciones = function () {
        window._ceIgnorar = !window._ceIgnorar;
        ceActualizarUI();
    };

    /* ── Ganchos ── */
    let pendiente = false;
    function programar() { if (pendiente) return; pendiente = true; requestAnimationFrame(() => { pendiente = false; ceActualizarUI(); }); }

    function iniciar() {
        const cont = document.getElementById('fichas-contenedor');
        if (cont) {
            cont.addEventListener('change', e => { if (e.target.closest && e.target.closest('.condicion-chk')) programar(); });
            cont.addEventListener('click', e => { if (e.target.closest && e.target.closest('.agotamiento-bolita, .btn-descanso-largo, [onclick*="descansoLargo"]')) setTimeout(programar, 0); });
        }
        // cambio de ficha activa y fin de la tirada (consume «Sin condiciones»)
        if (typeof window.activarFicha === 'function') {
            const orig = window.activarFicha;
            window.activarFicha = function () { const r = orig.apply(this, arguments); programar(); return r; };
        }
        if (typeof window._resetAdv === 'function') {
            const orig = window._resetAdv;
            window._resetAdv = function () { const r = orig.apply(this, arguments); const estaba = window._ceIgnorar; window._ceIgnorar = false; if (estaba) ceActualizarUI(); else programar(); return r; };
        }
        // el descanso largo baja un nivel de agotamiento
        ['_descansoLargoPanel', 'descansoLargoGlobal'].forEach(nom => {
            if (typeof window[nom] === 'function') { const o = window[nom]; window[nom] = function () { const r = o.apply(this, arguments); programar(); return r; }; }
        });
        window.addEventListener('load', programar);
        programar();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();

    window._CE = { EFECTOS, calcular, resumen, condicionesActivas, nivelAgotamiento };   // para las pruebas
})();
