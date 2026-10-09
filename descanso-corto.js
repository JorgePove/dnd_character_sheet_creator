/* ══════════════════════════════════════════════════════════
   descanso-corto.js — Asistente de descanso corto

   Ventana que se abre con el botón «☀ Desc. Corto»:
   · Elegir cuántos dados de golpe gastar de cada grupo (se tiran solos
     o se puede escribir el resultado de los dados físicos).
   · Vista previa de la curación y de lo que se va a recargar.
   · Al confirmar: gasta los dados, cura (sin pasar de los PG máximos),
     recarga los recursos marcados con ☀ (descanso corto) y los espacios
     de Pacto del Brujo, y deja una sola entrada en el log.

   Usa de script.js: panelActual, actualizarVidaPanel, fmtMod,
   _descansoCortoPanel (recargas), leerMulticlases, _getClaseData.
══════════════════════════════════════════════════════════ */

/* PG que cura un dado con una tirada concreta (mínimo 1 por dado, igual que el clic en un dado de golpe) */
function dcCuraPorDado(tirada, conMod) { return Math.max(1, tirada + conMod); }

/* Media exacta de lo que cura un dado de `caras` caras */
function dcMediaPorDado(caras, conMod) {
    let s = 0;
    for (let r = 1; r <= caras; r++) s += dcCuraPorDado(r, conMod);
    return s / caras;
}

/* Lee los datos de la ficha que necesita el asistente (sin tocar nada) */
function dcLeerEstado(panel) {
    const conScore = parseInt(panel.querySelector('.stat-score[data-stat="con"]')?.value) || 10;
    const conMod = Math.floor((conScore - 10) / 2);
    const max = parseInt(panel.querySelector('.hp-max')?.value) || 0;
    const act = parseInt(panel.querySelector('.hp-actual')?.value) || 0;
    const grupos = Array.from(panel.querySelectorAll('.dg-grupo')).map(el => {
        const tipo = el.querySelector('.dg-tipo')?.value || 'd8';
        const checks = Array.from(el.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]'));
        return {
            el, tipo, caras: parseInt(tipo.replace('d', '')) || 6,
            total: checks.length, disp: checks.filter(c => c.checked).length,
            gastar: 0, suma: '',
        };
    }).filter(g => g.total > 0);
    // Recursos que se recargan en descanso corto y no están al máximo
    const recursos = [];
    panel.querySelectorAll('.recurso-caja').forEach(caja => {
        if (!caja.querySelector('.recurso-recarga-btn[data-tipo="corto"]')?.classList.contains('activo-corto')) return;
        const actualEl = caja.querySelector('.recurso-actual'), maxEl = caja.querySelector('.recurso-max');
        if (!actualEl || !maxEl) return;
        const a = parseInt(actualEl.value) || 0, m = parseInt(maxEl.value) || 0;
        if (a >= m) return;
        recursos.push({ nombre: (caja.querySelector('.recurso-nombre')?.textContent || '').trim() || 'Recurso', a, m });
    });
    // Espacios de Pacto (Brujo): gastados / totales
    const pacto = Array.from(panel.querySelectorAll('.slot-check-wrap.slot-warlock .slot-chk'));
    const pactoGastados = pacto.filter(c => !c.checked).length;
    return {
        conMod, max, act, grupos, recursos,
        pacto: { total: pacto.length, gastados: pactoGastados },
        nombre: (panel.querySelector('.input-nombre')?.value || '').trim(),
    };
}

/* Gasta los dados indicados y cura. Devuelve { curado, detalle[], act } */
function dcAplicarDados(panel, est) {
    let curado = 0;
    const detalle = [];
    est.grupos.forEach(g => {
        if (g.gastar <= 0) return;
        const n = Math.min(g.gastar, g.disp);
        // marcar como gastados los primeros n dados disponibles del grupo
        let quitados = 0;
        g.el.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]').forEach(c => {
            if (quitados < n && c.checked) { c.checked = false; quitados++; }
        });
        let tiradas = [], cura = 0;
        if (g.suma !== '' && !isNaN(parseInt(g.suma))) {
            // resultado de dados físicos: suma de las caras (sin CON)
            const suma = Math.max(0, parseInt(g.suma));
            cura = Math.max(n, suma + n * est.conMod);
            detalle.push(`${n}${g.tipo} (manual: ${suma})`);
        } else {
            for (let i = 0; i < n; i++) {
                const t = Math.floor(Math.random() * g.caras) + 1;
                tiradas.push(t); cura += dcCuraPorDado(t, est.conMod);
            }
            detalle.push(`${n}${g.tipo} (${tiradas.join(', ')})`);
        }
        curado += cura;
    });
    let act = est.act;
    if (curado > 0 && est.max > 0) {
        act = Math.min(est.act + curado, est.max);
        const el = panel.querySelector('.hp-actual');
        el.value = act;
        actualizarVidaPanel(el);
    }
    return { curado, detalle, act };
}

/* Entrada única en el log del lanzador de dados */
function dcRegistrarLog(panel, est, res, recargado) {
    const log = document.getElementById('log-lista');
    if (!log) return;
    const div = document.createElement('div');
    div.className = 'log-entrada';
    const t = document.createElement('strong'); t.textContent = 'Descanso corto';
    const r = document.createElement('div'); r.className = 'res';
    const big = document.createElement('span');
    const small = document.createElement('small');
    const partes = [];
    if (res.detalle.length) {
        big.textContent = (res.act - est.act >= 0 ? '+' : '') + (res.act - est.act);
        partes.push(`${res.detalle.join(' + ')} ${fmtMod(est.conMod)} CON/dado → PG: ${res.act}/${est.max}`);
    } else big.textContent = '☀';
    if (recargado.length) partes.push('Recargado: ' + recargado.join(', '));
    if (!partes.length) partes.push('Sin dados gastados ni recursos que recargar');
    small.textContent = partes.join(' · ');
    r.append(big, small);
    div.append(t, r);
    log.prepend(div);
}

/* Descanso corto completo: dados + recargas + log */
function dcConfirmar(panel, est) {
    const res = dcAplicarDados(panel, est);
    const recargado = est.recursos.map(r => r.nombre);
    if (est.pacto.gastados > 0) recargado.push(`Espacios de Pacto (${est.pacto.gastados})`);
    _descansoCortoPanel(panel);   // recursos con ☀ y espacios de Pacto
    dcRegistrarLog(panel, est, res, recargado);
    guardarDebounced();
    return res;
}

/* ══════════════════ Ventana ══════════════════ */
function abrirAsistenteDescansoCorto(panel) {
    if (!panel || document.getElementById('modal-descanso-corto')) return;
    const est = dcLeerEstado(panel);
    const previo = document.activeElement;

    const el = (tag, css, txt) => { const e = document.createElement(tag); if (css) e.style.cssText = css; if (txt != null) e.textContent = txt; return e; };
    const btnCss = 'padding:5px 11px;background:#2d3748;border:1.5px solid #718096;border-radius:6px;color:#e2e8f0;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;';

    const overlay = el('div', 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:12px;');
    overlay.id = 'modal-descanso-corto';
    const caja = el('div', 'background:#1a202c;border:2px solid #b7791f;border-radius:12px;padding:18px 22px;width:min(440px,100%);max-height:92vh;overflow-y:auto;box-shadow:0 8px 32px rgba(0,0,0,0.6);color:#e2e8f0;font-family:inherit;font-size:13px;box-sizing:border-box;');
    caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-labelledby', 'dc-titulo');
    overlay.appendChild(caja);

    const titulo = el('div', 'font-size:14px;font-weight:800;color:#F6C453;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;', '☀ Descanso corto');
    titulo.id = 'dc-titulo';
    caja.appendChild(titulo);
    caja.appendChild(el('div', 'color:#a0aec0;font-size:12px;margin-bottom:12px;', est.nombre ? `${est.nombre} · 1 hora de descanso` : '1 hora de descanso'));

    // ── PG ──
    const pgFila = el('div', 'display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;');
    pgFila.appendChild(el('span', 'font-weight:700;', 'Puntos de golpe'));
    const pgTxt = el('span', 'font-size:16px;font-weight:800;');
    pgFila.appendChild(pgTxt);
    caja.appendChild(pgFila);
    const barra = el('div', 'height:8px;background:#2d3748;border-radius:4px;overflow:hidden;margin-bottom:14px;');
    const relleno = el('div', 'height:100%;background:#68d391;width:0%;transition:width .15s;');
    barra.appendChild(relleno);
    caja.appendChild(barra);

    // ── Dados de golpe ──
    caja.appendChild(el('div', 'font-weight:700;margin-bottom:6px;', 'Dados de golpe'));
    const aviso = el('div', 'color:#fbd38d;font-size:12px;margin:0 0 8px;');
    const filas = [];
    const manualWrap = el('label', 'display:flex;gap:6px;align-items:center;font-size:12px;color:#cbd5e0;margin-top:6px;cursor:pointer;text-transform:none;letter-spacing:normal;font-weight:400;');
    const manualChk = document.createElement('input'); manualChk.type = 'checkbox';
    manualWrap.append(manualChk, document.createTextNode('Tiro yo los dados (escribir el resultado)'));

    if (est.max <= 0) {
        caja.appendChild(el('div', 'color:#fbd38d;font-size:12px;margin-bottom:8px;', 'Indica tus PG máximos en la ficha para poder curar con los dados de golpe.'));
    }
    if (!est.grupos.length) {
        caja.appendChild(el('div', 'color:#a0aec0;font-size:12px;margin-bottom:8px;', 'Esta ficha no tiene dados de golpe.'));
    }
    est.grupos.forEach(g => {
        const fila = el('div', 'display:flex;align-items:center;gap:8px;padding:6px 0;border-top:1px solid #2d3748;flex-wrap:wrap;');
        const etq = el('div', 'min-width:96px;');
        etq.appendChild(el('span', 'font-weight:800;', g.tipo));
        etq.appendChild(el('span', 'color:#a0aec0;font-size:12px;', `  ${g.disp}/${g.total} disp.`));
        const menos = el('button', btnCss + 'width:30px;', '−'); menos.type = 'button'; menos.setAttribute('aria-label', `Gastar un dado ${g.tipo} menos`);
        const val = el('output', 'min-width:24px;text-align:center;font-weight:800;font-size:15px;', '0');
        const mas = el('button', btnCss + 'width:30px;', '+'); mas.type = 'button'; mas.setAttribute('aria-label', `Gastar un dado ${g.tipo} más`);
        const media = el('span', 'color:#a0aec0;font-size:12px;flex:1;', `≈ +${dcMediaPorDado(g.caras, est.conMod).toFixed(1)} c/u`);
        const suma = document.createElement('input');
        suma.type = 'number'; suma.min = '0'; suma.placeholder = 'suma';
        suma.setAttribute('aria-label', `Suma de las tiradas de ${g.tipo}`);
        suma.style.cssText = 'display:none;width:60px;padding:4px;background:#2d3748;border:1.5px solid #718096;border-radius:6px;color:#e2e8f0;font-family:inherit;font-size:13px;';
        const pon = n => { g.gastar = Math.max(0, Math.min(g.disp, n)); val.textContent = g.gastar; if (!g.gastar) { g.suma = ''; suma.value = ''; } refrescar(); };
        menos.addEventListener('click', () => pon(g.gastar - 1));
        mas.addEventListener('click', () => pon(g.gastar + 1));
        suma.addEventListener('input', () => { g.suma = suma.value; refrescar(); });
        if (g.disp === 0 || est.max <= 0) { menos.disabled = mas.disabled = true; menos.style.opacity = mas.style.opacity = '0.4'; }
        fila.append(etq, menos, val, mas, media, suma);
        caja.appendChild(fila);
        filas.push({ g, val, suma, pon });
    });
    if (est.grupos.length && est.max > 0) {
        const acc = el('div', 'display:flex;gap:12px;margin:6px 0 2px;');
        const lnk = (txt, fn) => { const b = el('button', 'background:none;border:none;color:#90cdf4;text-decoration:underline;cursor:pointer;font-size:12px;font-family:inherit;padding:0;', txt); b.type = 'button'; b.addEventListener('click', fn); return b; };
        acc.appendChild(lnk('Los necesarios', () => {
            // gasta dados (media) hasta cubrir los PG que faltan
            let falta = est.max - est.act;
            filas.forEach(f => f.pon(0));
            for (const f of filas) {
                const m = dcMediaPorDado(f.g.caras, est.conMod);
                let n = 0;
                while (falta > 0 && n < f.g.disp) { falta -= m; n++; }
                f.pon(n);
                if (falta <= 0) break;
            }
        }));
        acc.appendChild(lnk('Ninguno', () => filas.forEach(f => f.pon(0))));
        caja.appendChild(acc);
        caja.appendChild(manualWrap);
    }
    const previa = el('div', 'margin:10px 0 2px;font-weight:700;color:#9ae6b4;');
    caja.appendChild(previa);
    caja.appendChild(aviso);

    // ── Recargas ──
    caja.appendChild(el('div', 'font-weight:700;margin:12px 0 6px;border-top:1px solid #2d3748;padding-top:10px;', 'Se recarga con este descanso'));
    const ul = el('div', 'font-size:12px;color:#cbd5e0;display:flex;flex-direction:column;gap:3px;');
    est.recursos.forEach(r => ul.appendChild(el('div', '', `• ${r.nombre}: ${r.a}/${r.m} → ${r.m}/${r.m}`)));
    if (est.pacto.gastados > 0) ul.appendChild(el('div', '', `• Espacios de Pacto: ${est.pacto.total - est.pacto.gastados}/${est.pacto.total} → ${est.pacto.total}/${est.pacto.total}`));
    if (!ul.children.length) ul.appendChild(el('div', 'color:#a0aec0;', 'Nada que recargar. Marca con ☀ los recursos que se recuperan en descanso corto.'));
    caja.appendChild(ul);

    // ── Botones ──
    const botones = el('div', 'display:flex;gap:8px;margin-top:16px;');
    const cancelar = el('button', 'flex:1;padding:8px;background:transparent;border:1px solid #718096;border-radius:6px;color:#cbd5e0;font-size:13px;cursor:pointer;font-family:inherit;', 'Cancelar');
    cancelar.type = 'button';
    const ok = el('button', 'flex:2;padding:8px;background:#b7791f;border:1px solid #d69e2e;border-radius:6px;color:#1a202c;font-size:13px;font-weight:800;cursor:pointer;font-family:inherit;', 'Descansar');
    ok.type = 'button';
    botones.append(cancelar, ok);
    caja.appendChild(botones);

    function cerrar() {
        document.removeEventListener('keydown', teclas, true);
        overlay.remove();
        if (previo && previo.focus) try { previo.focus(); } catch (e) {}
    }
    function teclas(e) {
        if (e.key === 'Escape') { e.stopPropagation(); cerrar(); }
        else if (e.key === 'Tab') {
            const foco = Array.from(caja.querySelectorAll('button:not([disabled]),input:not([type="hidden"]),a[href]')).filter(x => x.offsetParent !== null);
            if (!foco.length) return;
            const i = foco.indexOf(document.activeElement);
            if (e.shiftKey && (i <= 0)) { e.preventDefault(); foco[foco.length - 1].focus(); }
            else if (!e.shiftKey && i === foco.length - 1) { e.preventDefault(); foco[0].focus(); }
        }
    }
    cancelar.addEventListener('click', cerrar);
    overlay.addEventListener('mousedown', e => { if (e.target === overlay) cerrar(); });
    ok.addEventListener('click', () => { dcConfirmar(panel, est); cerrar(); });
    manualChk.addEventListener('change', () => {
        filas.forEach(f => { f.suma.style.display = manualChk.checked && f.g.gastar > 0 ? '' : 'none'; if (!manualChk.checked) { f.g.suma = ''; f.suma.value = ''; } });
        refrescar();
    });

    function refrescar() {
        let esperado = 0, nDados = 0, manualIncompleto = false;
        filas.forEach(f => {
            const g = f.g; nDados += g.gastar;
            f.suma.style.display = manualChk.checked && g.gastar > 0 ? '' : 'none';
            if (g.gastar > 0) {
                if (manualChk.checked) {
                    if (g.suma === '' || isNaN(parseInt(g.suma))) manualIncompleto = true;
                    else esperado += Math.max(g.gastar, parseInt(g.suma) + g.gastar * est.conMod);
                } else esperado += g.gastar * dcMediaPorDado(g.caras, est.conMod);
            }
        });
        const final = est.max > 0 ? Math.min(est.max, est.act + Math.round(esperado)) : est.act;
        pgTxt.textContent = nDados ? `${est.act} → ${final} / ${est.max}` : `${est.act} / ${est.max}`;
        relleno.style.width = (est.max > 0 ? Math.max(0, Math.min(100, final / est.max * 100)) : 0) + '%';
        previa.textContent = nDados && !manualIncompleto
            ? (manualChk.checked ? `Curación: +${Math.round(esperado)} PG` : `Curación prevista: ≈ +${Math.round(esperado)} PG (los dados se tiran al confirmar)`)
            : '';
        const sobra = est.max > 0 && est.act + esperado > est.max;
        aviso.textContent = manualIncompleto ? 'Escribe la suma de las tiradas de cada grupo (sin sumar la CON) o desmarca «Tiro yo los dados».'
            : sobra && nDados ? 'Con esos dados curarías más de lo necesario: el sobrante se pierde.' : '';
        ok.disabled = manualIncompleto; ok.style.opacity = manualIncompleto ? '0.5' : '1';
    }
    refrescar();

    document.addEventListener('keydown', teclas, true);
    document.body.appendChild(overlay);
    ok.focus();
}
