/* ═══════════════════════════════════════════════════════
   DADOS DE GOLPE — COLORES POR TIPO
═══════════════════════════════════════════════════════ */
const DG_COLOR_POR_TIPO = {
    d6:  { bg: '#f6ad55', border: '#c05621', accent: '#dd6b20' }, // naranja
    d8:  { bg: '#68d391', border: '#276749', accent: '#38a169' }, // verde
    d10: { bg: '#63b3ed', border: '#2b6cb0', accent: '#3182ce' }, // azul
    d12: { bg: '#b794f4', border: '#553c9a', accent: '#805ad5' }, // morado
};
// Fallback para grupos extra (por índice, por si el usuario crea más de 4)
const DG_COLORES = [
    { bg: '#63b3ed', border: '#2b6cb0' },
    { bg: '#68d391', border: '#276749' },
    { bg: '#b794f4', border: '#553c9a' },
    { bg: '#f6ad55', border: '#c05621' },
    { bg: '#fc8181', border: '#9b2c2c' },
    { bg: '#76e4f7', border: '#086f83' },
];

/* ═══════════════════════════════════════════════════════
   SISTEMA DE PESTAÑAS
═══════════════════════════════════════════════════════ */
let fichas = [];
let fichaActual = null;
let contadorFichas = 0;
let fichaABorrar = null;
let _guardandoTimeout = null;

function panelActual() {
    return fichas.find(f => f.id === fichaActual)?.panel || null;
}

function nuevaFicha(datosGuardados) {
    contadorFichas++;
    const id = datosGuardados?.id || ('ficha-' + contadorFichas);
    const tpl = document.getElementById('plantilla-ficha');
    const clone = tpl.content.cloneNode(true);
    const panel = clone.querySelector('.ficha-panel');
    panel.dataset.fichaId = id;
    document.getElementById('fichas-contenedor').appendChild(panel);
    fichas.push({ id, panel });

    const barra = document.getElementById('barra-pestanas');
    const btnNueva = document.getElementById('btn-nueva-pestana');
    const tab = document.createElement('div');
    tab.className = 'pestana';
    tab.dataset.fichaId = id;
    tab.innerHTML = `<span class="pestana-nombre">Personaje ${contadorFichas}</span><button class="pestana-cerrar" onclick="cerrarFicha(event,'${id}')" title="Cerrar ficha">✕</button>`;
    tab.addEventListener('click', () => activarFicha(id));
    barra.insertBefore(tab, btnNueva);

    actualizarDadosGolpePanel(panel.querySelector('.dg-total'));
    if (typeof initCaractSelectores === 'function') initCaractSelectores(panel);
    if (typeof initSpellcasting === 'function') initSpellcasting(panel);
    activarFicha(id);

    if (datosGuardados) cargarDatosEnPanel(panel, datosGuardados);
}

function activarFicha(id) {
    fichaActual = id;
    fichas.forEach(f => f.panel.classList.toggle('activa', f.id === id));
    document.querySelectorAll('.pestana').forEach(tab => tab.classList.toggle('activa', tab.dataset.fichaId === id));
}

function cerrarFicha(event, id) {
    event.stopPropagation();
    if (fichas.length <= 1) return;
    const ficha = fichas.find(f => f.id === id);
    const nombre = ficha?.panel.querySelector('.input-nombre')?.value.trim()
        || `Personaje ${fichas.findIndex(f => f.id === id) + 1}`;
    fichaABorrar = id;
    const panel = ficha.panel;
    const modal = panel.querySelector('.modal-overlay');
    panel.querySelector('.modal-nombre-personaje').textContent = `"${nombre}"`;
    modal.style.display = '';
}

function cerrarModal() {
    const panel = panelActual();
    if (panel) panel.querySelector('.modal-overlay').style.display = 'none';
    fichaABorrar = null;
}

function confirmarBorrado() {
    if (!fichaABorrar) return;
    const id = fichaABorrar;
    fichaABorrar = null;
    const idx = fichas.findIndex(f => f.id === id);
    fichas[idx].panel.remove();
    document.querySelector(`.pestana[data-ficha-id="${id}"]`).remove();
    fichas.splice(idx, 1);
    if (fichaActual === id) activarFicha(fichas[Math.max(0, idx - 1)].id);
    guardarTodo();
}

function onNombreCambia(input) {
    const panel = input.closest('.ficha-panel');
    const id = panel.dataset.fichaId;
    const tab = document.querySelector(`.pestana[data-ficha-id="${id}"] .pestana-nombre`);
    if (tab) {
        const val = input.value.trim();
        tab.textContent = val || `Personaje ${fichas.findIndex(f => f.id === id) + 1}`;
    }
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
function getPanel(el) { return el.closest('.ficha-panel'); }
function fmtMod(n) { return (n >= 0 ? '+' : '') + n; }
function _esc(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ═══════════════════════════════════════════════════════
   ATRIBUTOS
═══════════════════════════════════════════════════════ */
function actualizarAtributo(input) {
    const panel = getPanel(input);
    const stat  = input.dataset.stat;
    const score = parseInt(input.value) || 10;
    const mod   = Math.floor((score - 10) / 2);
    panel.querySelector(`[data-mod="${stat}"]`).innerText = fmtMod(mod);
    if (stat === 'dex') {
        var iniEl = panel.querySelector('.ini-val');
        var prevMod = iniEl.dataset.prevDexMod !== undefined ? parseInt(iniEl.dataset.prevDexMod) : mod;
        var curIni = parseInt(iniEl.value) || 0;
        var bonus = iniEl.dataset.iniBonus !== undefined ? parseInt(iniEl.dataset.iniBonus) : (curIni - prevMod);
        if (isNaN(bonus)) bonus = 0;
        iniEl.dataset.iniBonus = bonus;
        iniEl.dataset.prevDexMod = mod;
        iniEl.value = mod + bonus;
    }
    actualizarTodoPanel(panel);
    guardarDebounced();
}

function validarExpertise(chk) {
    if (chk.checked) chk.closest('.fila-skill').querySelector('.dot.prof').checked = true;
    actualizarTodoPanel(getPanel(chk));
    guardarDebounced();
}

function actualizarTodo(el) { actualizarTodoPanel(getPanel(el)); guardarDebounced(); }

function actualizarTodoPanel(panel) {
    const pb = parseInt(panel.querySelector('.pb-input').value) || 0;
    const stats = ['str','dex','con','int','wis','cha'];

    stats.forEach(stat => {
        const score = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`).value) || 10;
        const mod = Math.floor((score - 10) / 2);
        panel.querySelector(`[data-mod="${stat}"]`).innerText = fmtMod(mod);
    });

    stats.forEach(stat => {
        const score = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`).value) || 10;
        const modBase = Math.floor((score - 10) / 2);
        const dotEl = panel.querySelector(`.salv-dot[data-stat="${stat}"]`);
        const total = modBase + (dotEl?.checked ? pb : 0);
        panel.querySelector(`[data-salv="${stat}"]`).innerText = fmtMod(total);
    });

    panel.querySelectorAll('.fila-skill').forEach(fila => {
        const stat = fila.dataset.stat;
        const score = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`).value) || 10;
        const modBase = Math.floor((score - 10) / 2);
        const isProf = fila.querySelector('.dot.prof').checked;
        const isExp  = fila.querySelector('.dot.exp')?.checked || false;
        const total  = modBase + (isProf ? pb : 0) + (isExp ? pb : 0);
        fila.querySelector('.mod-valor').innerText = fmtMod(total);
    });

    const bonusPer  = parseInt(panel.querySelector('.fila-percepcion .mod-valor').innerText) || 0;
    panel.querySelector('.percepcion-pasiva').innerText = 10 + bonusPer;
    const bonusPers = parseInt(panel.querySelector('.fila-perspicacia .mod-valor').innerText) || 0;
    panel.querySelector('.perspicacia-pasiva').innerText = 10 + bonusPers;
    const bonusInv  = parseInt(panel.querySelector('.fila-investigacion .mod-valor').innerText) || 0;
    panel.querySelector('.investigacion-pasiva').innerText = 10 + bonusInv;

    actualizarVidaPanel(panel.querySelector('.hp-actual'));
}

/* ═══════════════════════════════════════════════════════
   TIRADAS
═══════════════════════════════════════════════════════ */
function toggleDados(btn, modo) {
    const panel = getPanel(btn);
    const btnV = panel.querySelector('.btn-ventaja');
    const btnD = panel.querySelector('.btn-desventaja');
    if (modo === 'ventaja') {
        btnV.classList.toggle('activo-ventaja');
        btnD.classList.remove('activo-desventaja');
    } else {
        btnD.classList.toggle('activo-desventaja');
        btnV.classList.remove('activo-ventaja');
    }
}

function realizarTiradaStat(el, nombre) {
    const panel = getPanel(el);
    lanzarConPanel(panel, nombre, parseInt(el.querySelector('.stat-mod-circulo')?.innerText) || 0);
}

function tirarSalvacionStat(el, nombre) {
    const panel = getPanel(el);
    lanzarConPanel(panel, nombre, parseInt(el.querySelector('.salv-valor')?.innerText) || 0);
}

function actualizarIniBonus(input) {
    var panel = getPanel(input);
    var dexEl = panel.querySelector('.stat-score[data-stat="dex"]');
    var dexMod = Math.floor(((parseInt(dexEl ? dexEl.value : '10') || 10) - 10) / 2);
    input.dataset.iniBonus = (parseInt(input.value) || 0) - dexMod;
    input.dataset.prevDexMod = dexMod;
    guardarDebounced();
}

function realizarTiradaInput(el, nombre) {
    const panel = getPanel(el);
    lanzarConPanel(panel, nombre, parseInt(panel.querySelector('.ini-val').value) || 0);
}

function tirarDesdeFila(el, nombre) {
    const panel = getPanel(el);
    const toggle = el.querySelector('.adv-toggle');
    const advEstado = toggle ? parseInt(toggle.dataset.adv) : 0;
    lanzarConPanel(panel, nombre, parseInt(el.querySelector('.mod-valor').innerText) || 0, advEstado);
}

function lanzarConPanel(panel, nombre, mod, forzarAdv) {
    const btnV = panel.querySelector('.btn-ventaja');
    const btnD = panel.querySelector('.btn-desventaja');
    const gV = btnV.classList.contains('activo-ventaja');
    const gD = btnD.classList.contains('activo-desventaja');

    let mV, mD;
    if      (forzarAdv === 1) { mV = true;  mD = false; }
    else if (forzarAdv === 2) { mV = false; mD = true; }
    else                      { mV = gV;    mD = gD; }

    const d1 = Math.floor(Math.random() * 20) + 1;
    const d2 = Math.floor(Math.random() * 20) + 1;
    let resultado, detalle, clase = '';

    if (mV)      { resultado = Math.max(d1,d2); detalle = `[${d1}, ${d2}] ➔ ${resultado}`; clase = 'ventaja'; }
    else if (mD) { resultado = Math.min(d1,d2); detalle = `[${d1}, ${d2}] ➔ ${resultado}`; clase = 'desventaja'; }
    else         { resultado = d1; detalle = `${d1}`; }

    registrarLog(nombre, resultado + mod, detalle, mod, clase);
    btnV.classList.remove('activo-ventaja');
    btnD.classList.remove('activo-desventaja');
}

/* ═══════════════════════════════════════════════════════
   INSPIRACIÓN HEROICA
═══════════════════════════════════════════════════════ */
function toggleInspiracion(el) { el.classList.toggle('activo'); guardarDebounced(); }

/* ═══════════════════════════════════════════════════════
   VENTAJA POR HABILIDAD
═══════════════════════════════════════════════════════ */
function toggleAdv(el) {
    const estado = (parseInt(el.dataset.adv) + 1) % 3;
    el.dataset.adv = estado;
    el.textContent = estado === 1 ? '▲' : estado === 2 ? '▼' : '';
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   SALUD
═══════════════════════════════════════════════════════ */
function actualizarVidaPanel(input) {
    const panel = getPanel(input);
    const act = parseInt(panel.querySelector('.hp-actual').value) || 0;
    const max = parseInt(panel.querySelector('.hp-max').value) || 1;
    const tmp = parseInt(panel.querySelector('.hp-temp-val').value) || 0;
    const pct = act / max;

    const barra = panel.querySelector('.barra-relleno.verde');
    barra.style.width = Math.min((act / max) * 100, 100) + '%';
    panel.querySelector('.barra-relleno.azul').style.width = Math.min((tmp / max) * 100, 100) + '%';

    barra.classList.remove('hp-media', 'hp-baja');
    if (pct <= 0.25)     barra.classList.add('hp-baja');
    else if (pct <= 0.5) barra.classList.add('hp-media');
}

function modificarVidaPanel(btn, tipo) {
    const panel = getPanel(btn);
    const val = parseInt(panel.querySelector('.hp-mod').value) || 0;
    let act = parseInt(panel.querySelector('.hp-actual').value) || 0;
    let tmp = parseInt(panel.querySelector('.hp-temp-val').value) || 0;
    const max = parseInt(panel.querySelector('.hp-max').value) || 0;

    if (tipo === 'cura') {
        act = Math.min(act + val, max);
    } else {
        let daño = val;
        if (tmp > 0) {
            if (tmp >= daño) { tmp -= daño; daño = 0; }
            else { daño -= tmp; tmp = 0; }
        }
        act = Math.max(act - daño, 0);
    }
    panel.querySelector('.hp-actual').value = act;
    panel.querySelector('.hp-temp-val').value = tmp;
    actualizarVidaPanel(panel.querySelector('.hp-actual'));
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   DADOS DE GOLPE — HELPERS DE COLOR
═══════════════════════════════════════════════════════ */
function _colorParaTipo(tipo) {
    return DG_COLOR_POR_TIPO[tipo] || { bg: '#a0aec0', border: '#4a5568', accent: '#718096' };
}

function _aplicarColorGrupo(grupo) {
    const tipo = grupo.querySelector('.dg-tipo')?.value || 'd10';
    const col = _colorParaTipo(tipo);
    const header = grupo.querySelector('.dg-grupo-header');
    if (header) header.style.borderTopColor = col.border;
    const dot = grupo.querySelector('.dg-grupo-dot');
    if (dot) { dot.style.background = col.bg; dot.style.boxShadow = `0 0 0 2px ${col.border}`; }
    grupo.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]').forEach(c => {
        c.style.setProperty('--dg-color', col.bg);
        c.style.setProperty('--dg-border', col.border);
        c.dataset.dgColor = col.bg;
        c.dataset.dgBorder = col.border;
    });
    // Color del badge de tipo
    const badge = grupo.querySelector('.dg-tipo-badge');
    if (badge) { badge.style.background = col.bg; badge.style.color = col.border; }
}

/* ═══════════════════════════════════════════════════════
   DADOS DE GOLPE — RENDERIZAR CHECKS
═══════════════════════════════════════════════════════ */
function actualizarDadosGolpePanel(input) {
    const grupo = input.closest('.dg-grupo') || input.closest('.dados-golpe');
    if (!grupo) return;

    const total      = Math.max(0, Math.min(20, parseInt(grupo.querySelector('.dg-total').value) || 0));
    const contenedor = grupo.querySelector('.dg-checks-contenedor');
    const actuales   = contenedor.querySelectorAll('.dg-check-item').length;
    const tipo       = grupo.querySelector('.dg-tipo')?.value || 'd10';
    const col        = _colorParaTipo(tipo);

    if (total > actuales) {
        for (let i = actuales; i < total; i++) {
            const item = document.createElement('div');
            item.className = 'dg-check-item';
            const chk = document.createElement('input');
            chk.type = 'checkbox';
            chk.checked = true;
            chk.dataset.dgColor  = col.bg;
            chk.dataset.dgBorder = col.border;
            _estilizarCheckDG(chk, col);
            chk.addEventListener('change', function() {
                if (!this.checked) _usarDadoGolpeGrupo(grupo);
                guardarDebounced();
            });
            item.appendChild(chk);
            contenedor.appendChild(item);
        }
    } else {
        const items = contenedor.querySelectorAll('.dg-check-item');
        for (let i = actuales - 1; i >= total; i--) items[i].remove();
    }

    // Actualizar grid-template-rows según total (máx 3 filas, pero si total < 3 ajustar)
    const filas = Math.min(total || 1, 3);
    contenedor.style.gridTemplateRows = `repeat(${filas}, 18px)`;

    _aplicarColorGrupo(grupo);
    guardarDebounced();
}

function _estilizarCheckDG(chk, col) {
    chk.style.setProperty('background', chk.checked ? col.bg : '#e2e8f0');
    chk.style.setProperty('border-color', chk.checked ? col.border : '#a0aec0');
    chk.style.setProperty('--dg-bg', col.bg);
    chk.style.setProperty('--dg-border', col.border);
}

/* ═══════════════════════════════════════════════════════
   DADOS DE GOLPE — USO (curación)
═══════════════════════════════════════════════════════ */
function _usarDadoGolpeGrupo(grupo) {
    const panel  = getPanel(grupo);
    const tipo   = grupo.querySelector('.dg-tipo').value;
    const caras  = parseInt(tipo.replace('d','')) || 6;
    const tirada = Math.floor(Math.random() * caras) + 1;
    const conScore = parseInt(panel.querySelector('.stat-score[data-stat="con"]').value) || 10;
    const conMod   = Math.floor((conScore - 10) / 2);
    const curacion = Math.max(1, tirada + conMod);

    let act = parseInt(panel.querySelector('.hp-actual').value) || 0;
    const max = parseInt(panel.querySelector('.hp-max').value) || 0;
    act = Math.min(act + curacion, max);
    panel.querySelector('.hp-actual').value = act;
    actualizarVidaPanel(panel.querySelector('.hp-actual'));

    const log = document.getElementById('log-lista');
    const div = document.createElement('div');
    div.className = 'log-entrada';
    div.innerHTML = `<strong>Dado de Golpe (${tipo})</strong><div class="res"><span>+${curacion}</span><small>${tirada} ${fmtMod(conMod)} CON → PG: ${act}/${max}</small></div>`;
    log.prepend(div);
    guardarDebounced();
}

// Alias legacy (por si algo lo llama con el parámetro input)
function usarDadoGolpePanel(panel) {
    const grupo = panel.querySelector('.dg-grupo');
    if (grupo) _usarDadoGolpeGrupo(grupo);
}

/* ═══════════════════════════════════════════════════════
   DADOS DE GOLPE — MULTICLASE
═══════════════════════════════════════════════════════ */
function _crearGrupoDG(contenedor) {
    const idx = contenedor.querySelectorAll('.dg-grupo').length;
    const grupo = document.createElement('div');
    grupo.className = 'dg-grupo';
    grupo.dataset.dgIdx = idx;

    // Color inicial (d10 por defecto)
    const colInicial = _colorParaTipo('d10');

    grupo.innerHTML = `
        <div class="dg-grupo-header" style="border-top:2px solid ${colInicial.border}">
            <span class="dg-grupo-dot" style="background:${colInicial.bg};box-shadow:0 0 0 2px ${colInicial.border}"></span>
            <span class="dg-grupo-label" style="font-size:10px;color:#718096;font-weight:700;">Grupo ${idx + 1}</span>
            <button class="dg-del-grupo-btn" onclick="eliminarGrupoDadosGolpe(this)" title="Quitar grupo">×</button>
        </div>
        <div class="dg-grupo-body">
            <div class="dg-controles">
                <div class="dg-selector"><label>Tipo</label>
                    <select class="dg-tipo" onchange="onDgTipoChange(this);guardarDebounced()">
                        <option>d6</option>
                        <option>d8</option>
                        <option selected>d10</option>
                        <option>d12</option>
                    </select>
                </div>
                <div class="dg-selector"><label>Total</label>
                    <input type="number" class="dg-total" value="1" min="0" max="20"
                        oninput="actualizarDadosGolpePanel(this)">
                </div>
            </div>
            <div class="dg-checks-contenedor"></div>
        </div>`;

    contenedor.appendChild(grupo);
    return grupo;
}

function onDgTipoChange(sel) {
    const grupo = sel.closest('.dg-grupo');
    if (!grupo) return;
    const col = _colorParaTipo(sel.value);
    // Actualizar colores de todos los checks existentes
    grupo.querySelectorAll('.dg-checks-contenedor .dg-check-item input').forEach(chk => {
        chk.dataset.dgColor  = col.bg;
        chk.dataset.dgBorder = col.border;
        _estilizarCheckDG(chk, col);
    });
    _aplicarColorGrupo(grupo);
}

function añadirGrupoDadosGolpe(btn) {
    const panel = getPanel(btn);
    const contenedor = panel.querySelector('.dg-grupos-contenedor');
    const grupo = _crearGrupoDG(contenedor);
    actualizarDadosGolpePanel(grupo.querySelector('.dg-total'));
    guardarDebounced();
}

function eliminarGrupoDadosGolpe(btn) {
    const grupo = btn.closest('.dg-grupo');
    const contenedor = grupo.closest('.dg-grupos-contenedor');
    if (contenedor.querySelectorAll('.dg-grupo').length <= 1) return;
    grupo.remove();
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   SALVACIÓN DE MUERTE
═══════════════════════════════════════════════════════ */
function tirarSalvacionMuertePanel(btn) {
    const panel = getPanel(btn);
    const resultado = Math.floor(Math.random() * 20) + 1;
    const exito = resultado >= 10;

    if (exito) {
        const c = [...panel.querySelectorAll('.circulos-exito .circulo-muerte')].find(c => !c.classList.contains('activo'));
        if (c) c.classList.add('activo');
        btn.classList.add('flash-exito');
        setTimeout(() => btn.classList.remove('flash-exito'), 500);
    } else {
        const c = [...panel.querySelectorAll('.circulos-fallo .circulo-muerte')].find(c => !c.classList.contains('activo'));
        if (c) c.classList.add('activo');
        btn.classList.add('flash-fallo');
        setTimeout(() => btn.classList.remove('flash-fallo'), 500);
    }

    const log = document.getElementById('log-lista');
    const div = document.createElement('div');
    div.className = `log-entrada ${exito ? 'exito-muerte' : 'fallo-muerte'}`;
    div.innerHTML = `<strong>Salvación de Muerte</strong><div class="res"><span>${resultado}</span><small>${exito ? '✔ Éxito' : '✖ Fallo'} (≥10)</small></div>`;
    log.prepend(div);
    guardarDebounced();
}

function toggleCirculo(el) { el.classList.toggle('activo'); guardarDebounced(); }

/* ═══════════════════════════════════════════════════════
   DESCANSO
═══════════════════════════════════════════════════════ */
function descansoLargo(btn) {
    const panel = getPanel(btn);
    const max = parseInt(panel.querySelector('.hp-max').value) || 0;
    panel.querySelector('.hp-actual').value = max;
    panel.querySelector('.hp-temp-val').value = 0;
    actualizarVidaPanel(panel.querySelector('.hp-actual'));
    panel.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]').forEach(chk => {
        chk.checked = true;
        const col = _colorParaTipo(chk.closest('.dg-grupo')?.querySelector('.dg-tipo')?.value || 'd10');
        _estilizarCheckDG(chk, col);
    });
    btn.style.background = '#c6f6d5'; btn.style.borderColor = '#38a169';
    setTimeout(() => { btn.style.background = ''; btn.style.borderColor = ''; }, 600);
    if (typeof recargaRecursosPorDescanso === 'function') recargaRecursosPorDescanso(panel, 'largo');
    panel.querySelectorAll('.slot-chk').forEach(chk => { chk.checked = true; });
    guardarDebounced();
}

function descansoCorto(btn) {
    const panel = getPanel(btn);
    btn.style.background = '#bee3f8'; btn.style.borderColor = '#3182ce';
    setTimeout(() => { btn.style.background = ''; btn.style.borderColor = ''; }, 600);
    if (typeof recargaRecursosPorDescanso === 'function') recargaRecursosPorDescanso(panel, 'corto');
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   INVENTARIO
═══════════════════════════════════════════════════════ */
function checkInventarioPanel(e) {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    añadirFilaInventario(e.target.closest('.contenedor-items'));
}

function añadirFilaInventario(contenedor) {
    const div = document.createElement('div');
    div.className = 'item-fila';
    div.innerHTML = `
        <input type="text" placeholder="Nombre..." class="input-item" onkeypress="checkInventarioPanel(event)" oninput="guardarDebounced()">
        <input type="number" placeholder="1" class="input-item-cant" min="0" oninput="guardarDebounced()">
        <input type="text" placeholder="Descripción o notas..." class="input-item-desc" onkeypress="checkInventarioPanel(event)" oninput="guardarDebounced()">
        <input type="checkbox" title="Equipado" onchange="guardarDebounced()">
        <button class="btn-borrar-item" onclick="borrarItemInventario(this)" title="Eliminar">×</button>
    `;
    contenedor.appendChild(div);
    div.querySelector('.input-item').focus();
    contenedor.scrollTop = contenedor.scrollHeight;
}

function borrarItemInventario(btn) {
    const fila = btn.closest('.item-fila');
    const contenedor = fila.closest('.contenedor-items');
    if (contenedor.querySelectorAll('.item-fila').length <= 1) {
        fila.querySelectorAll('input[type="text"], input[type="number"]').forEach(i => i.value = '');
        fila.querySelector('input[type="checkbox"]').checked = false;
    } else {
        fila.remove();
    }
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   LOG GLOBAL
═══════════════════════════════════════════════════════ */
function registrarLog(nombre, total, detalle, mod, clase) {
    const log = document.getElementById('log-lista');
    const div = document.createElement('div');
    div.className = `log-entrada ${clase}`;
    div.innerHTML = `<strong>${nombre}</strong><div class="res"><span>${total}</span><small>(${detalle}) ${mod >= 0 ? '+' : ''}${mod}</small></div>`;
    log.prepend(div);
}

function limpiarLog() { document.getElementById('log-lista').innerHTML = ''; }

/* ═══════════════════════════════════════════════════════
   TABS DE ACCIONES
═══════════════════════════════════════════════════════ */
function cambiarTab(btn) {
    const caja = btn.closest('.caja-acciones');
    const tabId = btn.dataset.tab;
    caja.querySelectorAll('.accion-tab').forEach(t => t.classList.remove('activo'));
    btn.classList.add('activo');
    caja.querySelectorAll('.accion-panel').forEach(p => p.classList.remove('activo'));
    caja.querySelector(`.accion-panel[data-panel="${tabId}"]`).classList.add('activo');
}

/* ═══════════════════════════════════════════════════════
   ARMAS / SPELLS
═══════════════════════════════════════════════════════ */
function _htmlArmaFila() {
    return `
    <div class="arma-fila">
        <div class="arma-nombre-wrap">
            <span class="arma-nombre-txt rollable-arma" onclick="tirarArma(this)" title="Clicar para tirar">⚔</span>
            <input type="text" class="arma-input arma-nombre-input" placeholder="Nombre del arma..." oninput="guardarDebounced()">
        </div>
        <div class="arma-bono-wrap">
            <select class="arma-stat-sel" onchange="recalcArma(this);guardarDebounced()">
                <option value="str">Fuerza</option>
                <option value="dex">Destreza</option>
                <option value="con">Constitución</option>
                <option value="int">Inteligencia</option>
                <option value="wis">Sabiduría</option>
                <option value="cha">Carisma</option>
                <option value="ninguno">— Ninguna —</option>
            </select>
            <input type="number" class="arma-bono-extra" value="0" title="Bono extra manual" onchange="recalcArma(this);guardarDebounced()">
            <span class="arma-bono-total">+2</span>
        </div>
        <div class="arma-daños-wrap">
            <div class="arma-daño-bloque">
                ${_htmlDañoBloque(false)}
            </div>
        </div>
        <input type="text" class="arma-input arma-alcance-input" placeholder="5 ft" oninput="guardarDebounced()">
        <input type="text" class="arma-input arma-notas-input" placeholder="Notas..." oninput="guardarDebounced()">
        <button class="btn-borrar-arma" onclick="this.closest('.arma-fila').remove();guardarDebounced()" title="Eliminar">×</button>
    </div>`;
}

function _htmlDañoBloque(esExtra) {
    return `
        <input type="number" class="arma-dado-qty" value="1" min="1" max="20" oninput="guardarDebounced()">
        <select class="arma-dado-tipo" onchange="guardarDebounced()">
            <option>d4</option><option>d6</option>
            <option selected>d8</option><option>d10</option>
            <option>d12</option><option>d20</option>
        </select>
        ${!esExtra ? `<span class="arma-daño-sep">+</span><input type="number" class="arma-bono-daño" value="0" title="Bono de daño" oninput="guardarDebounced()">` : ''}
        <select class="arma-tipo-daño" onchange="guardarDebounced()">
            <option>Contundente</option><option>Cortante</option><option>Perforante</option>
            <option>Ácido</option><option>Frío</option><option>Fuego</option>
            <option>Fuerza</option><option>Relámpago</option><option>Necrótico</option>
            <option>Veneno</option><option>Psíquico</option><option>Radiante</option>
            <option>Trueno</option>
        </select>
        ${esExtra
            ? `<button class="arma-btn-quitar-daño" onclick="quitarDañoExtra(this)" title="Quitar">−</button>`
            : `<button class="arma-btn-extra-daño" onclick="añadirDañoExtra(this)" title="Añadir daño extra">＋</button>`
        }`;
}

function añadirArma(btn) {
    const lista = btn.previousElementSibling;
    lista.insertAdjacentHTML('beforeend', _htmlArmaFila());
    const nueva = lista.lastElementChild;
    recalcArma(nueva.querySelector('.arma-stat-sel'));
    nueva.querySelector('.arma-nombre-input').focus();
    guardarDebounced();
}

function añadirDañoExtra(btn) {
    const wrap = btn.closest('.arma-daños-wrap');
    btn.style.display = 'none';
    const extraDiv = document.createElement('div');
    extraDiv.className = 'arma-daño-bloque extra';
    extraDiv.innerHTML = _htmlDañoBloque(true);
    wrap.appendChild(extraDiv);
    guardarDebounced();
}

function quitarDañoExtra(btn) {
    const wrap = btn.closest('.arma-daños-wrap');
    btn.closest('.arma-daño-bloque.extra').remove();
    const primerBtn = wrap.querySelector('.arma-btn-extra-daño');
    if (primerBtn) primerBtn.style.display = '';
    guardarDebounced();
}

function recalcArma(el) {
    const fila = el.closest('.arma-fila');
    const panel = getPanel(fila);
    if (!panel) return;
    const stat = fila.querySelector('.arma-stat-sel').value;
    const extra = parseInt(fila.querySelector('.arma-bono-extra').value) || 0;

    let statMod = 0, pb = 0;
    if (stat !== 'ninguno') {
        const score = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`)?.value) || 10;
        statMod = Math.floor((score - 10) / 2);
        pb = parseInt(panel.querySelector('.pb-input').value) || 0;
    }
    const total = statMod + pb + extra;
    fila.querySelector('.arma-bono-total').textContent = (total >= 0 ? '+' : '') + total;

    const bonoDañoEl = fila.querySelector('.arma-bono-daño');
    if (bonoDañoEl && !bonoDañoEl.dataset.manual) bonoDañoEl.value = statMod;
}

function tirarArma(iconEl) {
    const fila = iconEl.closest('.arma-fila');
    const panel = getPanel(fila);
    if (!panel) return;

    const nombre    = fila.querySelector('.arma-nombre-input').value.trim() || 'Arma';
    const bonoTotal = parseInt(fila.querySelector('.arma-bono-total').textContent) || 0;

    const gV = panel.querySelector('.btn-ventaja').classList.contains('activo-ventaja');
    const gD = panel.querySelector('.btn-desventaja').classList.contains('activo-desventaja');
    const d1 = Math.floor(Math.random() * 20) + 1;
    const d2 = Math.floor(Math.random() * 20) + 1;
    let dImpacto, detalleImpacto;
    if (gV)      { dImpacto = Math.max(d1,d2); detalleImpacto = `[${d1},${d2}]→${dImpacto}`; }
    else if (gD) { dImpacto = Math.min(d1,d2); detalleImpacto = `[${d1},${d2}]→${dImpacto}`; }
    else         { dImpacto = d1; detalleImpacto = `${d1}`; }

    const totalImpacto = dImpacto + bonoTotal;
    const esCrit  = dImpacto === 20;
    const esFallo = dImpacto === 1;

    panel.querySelector('.btn-ventaja').classList.remove('activo-ventaja');
    panel.querySelector('.btn-desventaja').classList.remove('activo-desventaja');

    const bloques   = fila.querySelectorAll('.arma-daño-bloque');
    const bonoDaño  = parseInt(fila.querySelector('.arma-bono-daño')?.value) || 0;
    let lineasDaño  = [], sumaTotalDaño = 0;

    bloques.forEach((bloque, idx) => {
        const qty      = parseInt(bloque.querySelector('.arma-dado-qty').value) || 1;
        const tipoD    = bloque.querySelector('.arma-dado-tipo').value;
        const caras    = parseInt(tipoD.replace('d','')) || 6;
        const tipoDaño = bloque.querySelector('.arma-tipo-daño').value;
        const numDados = esCrit ? qty * 2 : qty;
        const rolls    = Array.from({length:numDados}, () => Math.floor(Math.random()*caras)+1);
        const suma     = rolls.reduce((a,b)=>a+b,0);
        const bono     = idx === 0 ? bonoDaño : 0;
        const total    = suma + bono;
        sumaTotalDaño += total;
        const bonoStr  = bono !== 0 ? (bono > 0 ? ` +${bono}` : ` ${bono}`) : '';
        const critStr  = esCrit ? ` ✦CRIT(${qty}d→${numDados}d)` : '';
        lineasDaño.push({ total, tipoDaño, detalle: `${rolls.join('+')}${bonoStr}${critStr}` });
    });

    const impColor = esCrit ? 'crit-verde' : esFallo ? 'crit-rojo' : '';
    const impLabel = esCrit ? '¡CRÍTICO!' : esFallo ? 'Pifia' : 'impacto';
    const bonoStr  = bonoTotal >= 0 ? `+${bonoTotal}` : `${bonoTotal}`;

    const dañoHTML = lineasDaño.length === 1
        ? `<div class="log-daño-linea"><span>${sumaTotalDaño}</span><small>${lineasDaño[0].tipoDaño} (${lineasDaño[0].detalle})</small></div>`
        : `<div class="log-daño-linea log-daño-total"><span>${sumaTotalDaño}</span><small>daño total</small></div>
           ${lineasDaño.map(l=>`<div class="log-daño-sub"><span>${l.total}</span><small>${l.tipoDaño} (${l.detalle})</small></div>`).join('')}`;

    const log = document.getElementById('log-lista');
    const div = document.createElement('div');
    div.className = `log-entrada arma${esCrit?' critico':''}`;
    div.innerHTML = `
        <strong>${nombre}${esCrit?' — ¡CRÍTICO!':''}</strong>
        <div class="res"><span class="${impColor}">${totalImpacto}</span><small>🎯 ${impLabel} (${detalleImpacto} ${bonoStr})</small></div>
        <hr class="log-sep">${dañoHTML}`;
    log.prepend(div);
}

function añadirAccion(btn) {
    const lista = btn.previousElementSibling;
    const div = document.createElement('div');
    div.className = 'entrada-accion';
    div.innerHTML = `
        <input type="text" class="accion-nombre" placeholder="Nombre..." oninput="guardarDebounced()">
        <textarea class="accion-desc" placeholder="Descripción, tirada, efecto..." oninput="guardarDebounced()"></textarea>
    `;
    lista.appendChild(div);
    div.querySelector('.accion-nombre').focus();
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   PERSISTENCIA — localStorage
═══════════════════════════════════════════════════════ */
function guardarDebounced() {
    clearTimeout(_guardandoTimeout);
    _guardandoTimeout = setTimeout(guardarTodo, 600);
}

function guardarTodo() {
    try {
        const datos = fichas.map(f => leerFicha(f.panel));
        localStorage.setItem('dnd_fichas', JSON.stringify(datos));
        localStorage.setItem('dnd_contador', contadorFichas);
        localStorage.setItem('dnd_activa', fichaActual);
    } catch(e) { console.warn('No se pudo guardar:', e); }
}

function leerFicha(panel) {
    const d = {};
    d.id = panel.dataset.fichaId;

    d.nombre      = panel.querySelector('.input-nombre')?.value || '';
    const campos  = panel.querySelectorAll('.campo-sm input');
    d.clase       = campos[0]?.value || '';
    d.especie     = campos[1]?.value || '';
    d.trasfondo   = campos[2]?.value || '';
    d.pb          = panel.querySelector('.pb-input')?.value || '2';
    d.inspiracion = panel.querySelector('.bloque-inspiracion')?.classList.contains('activo') || false;

    d.stats = {}; d.salvs = {};
    ['str','dex','con','int','wis','cha'].forEach(s => {
        d.stats[s] = panel.querySelector(`.stat-score[data-stat="${s}"]`)?.value || '10';
        d.salvs[s] = panel.querySelector(`.salv-dot[data-stat="${s}"]`)?.checked || false;
    });

    d.habilidades = [];
    panel.querySelectorAll('.fila-skill').forEach(fila => {
        const adv = fila.querySelector('.adv-toggle');
        d.habilidades.push({
            prof: fila.querySelector('.dot.prof')?.checked || false,
            exp:  fila.querySelector('.dot.exp')?.checked  || false,
            adv:  adv ? parseInt(adv.dataset.adv) : 0
        });
    });

    const csis = panel.querySelectorAll('.csi-input');
    d.ca       = csis[0]?.value || '10';
    d.ini      = csis[1]?.value || '0';
    d.iniBonus = csis[1]?.dataset.iniBonus ?? '0';
    d.vels     = Array.from(panel.querySelectorAll('.vel-inline-input')).map(v => v.value);

    d.hpActual = panel.querySelector('.hp-actual')?.value   || '10';
    d.hpMax    = panel.querySelector('.hp-max')?.value      || '10';
    d.hpTemp   = panel.querySelector('.hp-temp-val')?.value || '0';

    const resTas = panel.querySelectorAll('.res-textarea');
    d.resistenciaDaño      = resTas[0]?.value || '';
    d.inmunidadDaño        = resTas[1]?.value || '';
    d.inmunidadCondiciones = resTas[2]?.value || '';

    d.condiciones = Array.from(panel.querySelectorAll('.condicion-chk')).map(c => c.checked);

    // Dados de golpe — múltiples grupos
    d.dgGrupos = [];
    panel.querySelectorAll('.dg-grupo').forEach(grupo => {
        d.dgGrupos.push({
            tipo:   grupo.querySelector('.dg-tipo')?.value  || 'd8',
            total:  grupo.querySelector('.dg-total')?.value || '0',
            checks: Array.from(grupo.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]')).map(c => c.checked)
        });
    });

    d.exitosMuerte = Array.from(panel.querySelectorAll('.circulos-exito .circulo-muerte')).map(c => c.classList.contains('activo'));
    d.fallosMuerte = Array.from(panel.querySelectorAll('.circulos-fallo .circulo-muerte')).map(c => c.classList.contains('activo'));

    d.monedas = {};
    ['cobre','plata','oro','platino'].forEach(m => {
        d.monedas[m] = panel.querySelector(`.moneda.${m} input`)?.value || '0';
    });

    d.items = [];
    panel.querySelectorAll('.item-fila').forEach(fila => {
        const ins = fila.querySelectorAll('input');
        d.items.push({ nombre: ins[0]?.value||'', cant: ins[1]?.value||'', desc: ins[2]?.value||'', equip: ins[3]?.checked||false });
    });

    d.sentidosExtra  = panel.querySelector('.sentidos-extra')?.value || '';

    const tas = panel.querySelectorAll('.bloque-competencia textarea');
    d.idiomas        = tas[0]?.value || '';
    d.herramientas   = tas[1]?.value || '';
    d.armasArmaduras = tas[2]?.value || '';

    d.armas = [];
    panel.querySelectorAll('.arma-fila').forEach(fila => {
        const arma = {
            nombre:    fila.querySelector('.arma-nombre-input')?.value  || '',
            stat:      fila.querySelector('.arma-stat-sel')?.value      || 'str',
            bonoExtra: fila.querySelector('.arma-bono-extra')?.value    || '0',
            alcance:   fila.querySelector('.arma-alcance-input')?.value || '',
            notas:     fila.querySelector('.arma-notas-input')?.value   || '',
            bloques:   []
        };
        fila.querySelectorAll('.arma-daño-bloque').forEach((bloque, idx) => {
            const b = {
                qty:  bloque.querySelector('.arma-dado-qty')?.value  || '1',
                dado: bloque.querySelector('.arma-dado-tipo')?.value || 'd8',
                tipo: bloque.querySelector('.arma-tipo-daño')?.value || 'Cortante'
            };
            if (idx === 0) b.bonoDaño = bloque.querySelector('.arma-bono-daño')?.value || '0';
            arma.bloques.push(b);
        });
        d.armas.push(arma);
    });

    ['actions','bonus','reactions','otros'].forEach(tipo => {
        d[`acciones_${tipo}`] = [];
        panel.querySelectorAll(`.accion-panel[data-panel="${tipo}"] .entrada-accion`).forEach(e => {
            d[`acciones_${tipo}`].push({
                nombre: e.querySelector('.accion-nombre')?.value || '',
                desc:   e.querySelector('.accion-desc')?.value   || ''
            });
        });
    });

    d.recursos = Array.from(panel.querySelectorAll('.recurso-caja')).map(caja => ({
        nombre:       caja.querySelector('.recurso-nombre')?.textContent || '',
        actual:       caja.querySelector('.recurso-actual')?.value || '0',
        max:          caja.querySelector('.recurso-max')?.value || '0',
        recargaCorto: caja.querySelector('.recurso-recarga-btn[data-tipo="corto"]')?.classList.contains('activo-corto') || false,
        recargaLargo: caja.querySelector('.recurso-recarga-btn[data-tipo="largo"]')?.classList.contains('activo-largo') || false,
    }));

    d.caract = {
        claseSelect:     panel.querySelector('.sel-clase')?.value      || '',
        subclaseSelect:  panel.querySelector('.sel-subclase')?.value   || '',
        especieSelect:   panel.querySelector('.sel-especie')?.value    || '',
        trasfondoSelect: panel.querySelector('.sel-trasfondo')?.value  || '',
        claseTxt:        panel.querySelector('.caract-clase')?.value   || '',
        subclaseTxt:     panel.querySelector('.caract-subclase')?.value || '',
        especieTxt:      panel.querySelector('.caract-especie')?.value  || '',
        dotesTxt:        panel.querySelector('.caract-dotes')?.value    || '',
        trasfondoTxt:    panel.querySelector('.caract-trasfondo-txt')?.value || '',
        tfPersonalizado: panel.querySelector('.trasfondo-personalizado')?.style.display !== 'none',
        tfStat2:         panel.querySelector('.tf-stat2-sel')?.value   || '',
        tfStat1:         panel.querySelector('.tf-stat1-sel')?.value   || '',
        tfHab1:          panel.querySelector('.tf-hab1-sel')?.value    || '',
        tfHab2:          panel.querySelector('.tf-hab2-sel')?.value    || '',
        tfPrevBonos:     panel.querySelector('.trasfondo-personalizado')?.dataset.prevBonos || '',
    };

    return d;
}

function cargarDatosEnPanel(panel, d) {
    if (d.nombre) { panel.querySelector('.input-nombre').value = d.nombre; onNombreCambia(panel.querySelector('.input-nombre')); }
    const campos = panel.querySelectorAll('.campo-sm input');
    if (campos[0]) campos[0].value = d.clase     || '';
    if (campos[1]) campos[1].value = d.especie   || '';
    if (campos[2]) campos[2].value = d.trasfondo || '';
    if (d.pb) panel.querySelector('.pb-input').value = d.pb;
    if (d.inspiracion) panel.querySelector('.bloque-inspiracion').classList.add('activo');

    if (d.stats) ['str','dex','con','int','wis','cha'].forEach(s => {
        const el = panel.querySelector(`.stat-score[data-stat="${s}"]`);
        if (el) el.value = d.stats[s] || '10';
    });
    if (d.salvs) ['str','dex','con','int','wis','cha'].forEach(s => {
        const el = panel.querySelector(`.salv-dot[data-stat="${s}"]`);
        if (el) el.checked = d.salvs[s] || false;
    });

    if (d.habilidades) panel.querySelectorAll('.fila-skill').forEach((fila, i) => {
        const h = d.habilidades[i]; if (!h) return;
        const prof = fila.querySelector('.dot.prof');
        const exp  = fila.querySelector('.dot.exp');
        const adv  = fila.querySelector('.adv-toggle');
        if (prof) prof.checked = h.prof;
        if (exp)  exp.checked  = h.exp;
        if (adv)  { adv.dataset.adv = h.adv; adv.textContent = h.adv===1?'▲':h.adv===2?'▼':''; }
    });

    const csis = panel.querySelectorAll('.csi-input');
    if (d.ca  && csis[0]) csis[0].value = d.ca;
    if (d.ini && csis[1]) {
        csis[1].value = d.ini;
        var _dexScore = parseInt(panel.querySelector('.stat-score[data-stat="dex"]')?.value) || 10;
        var _dexMod = Math.floor((_dexScore - 10) / 2);
        var _bonus = d.iniBonus !== undefined ? parseInt(d.iniBonus) : (parseInt(d.ini) - _dexMod);
        if (isNaN(_bonus)) _bonus = 0;
        csis[1].dataset.iniBonus = _bonus;
        csis[1].dataset.prevDexMod = _dexMod;
    }
    if (d.vels) panel.querySelectorAll('.vel-inline-input').forEach((v,i) => { if (d.vels[i]!==undefined) v.value=d.vels[i]; });

    if (d.hpActual) panel.querySelector('.hp-actual').value   = d.hpActual;
    if (d.hpMax)    panel.querySelector('.hp-max').value      = d.hpMax;
    if (d.hpTemp)   panel.querySelector('.hp-temp-val').value = d.hpTemp;

    const resTasLoad = panel.querySelectorAll('.res-textarea');
    if (resTasLoad[0] && d.resistenciaDaño      !== undefined) resTasLoad[0].value = d.resistenciaDaño;
    if (resTasLoad[1] && d.inmunidadDaño        !== undefined) resTasLoad[1].value = d.inmunidadDaño;
    if (resTasLoad[2] && d.inmunidadCondiciones !== undefined) resTasLoad[2].value = d.inmunidadCondiciones;
    if (d.resistencias && !d.resistenciaDaño) {
        if (resTasLoad[0]) resTasLoad[0].value = d.resistencias;
    }

    if (d.condiciones) panel.querySelectorAll('.condicion-chk').forEach((c,i) => { c.checked = d.condiciones[i]||false; });

    // Dados de golpe — restaurar grupos
    const gruposContenedor = panel.querySelector('.dg-grupos-contenedor');
    if (d.dgGrupos && d.dgGrupos.length > 0) {
        // Crear grupos adicionales si hacen falta
        while (gruposContenedor.querySelectorAll('.dg-grupo').length < d.dgGrupos.length) {
            _crearGrupoDG(gruposContenedor);
        }
        gruposContenedor.querySelectorAll('.dg-grupo').forEach((grupo, i) => {
            const gData = d.dgGrupos[i]; if (!gData) return;
            grupo.querySelector('.dg-tipo').value  = gData.tipo;
            grupo.querySelector('.dg-total').value = gData.total;
            actualizarDadosGolpePanel(grupo.querySelector('.dg-total'));
            grupo.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]').forEach((c, j) => {
                c.checked = gData.checks?.[j] ?? true;
                const col = _colorParaTipo(gData.tipo);
                _estilizarCheckDG(c, col);
            });
            _aplicarColorGrupo(grupo);
        });
    } else if (d.dgTotal) {
        // Compatibilidad con datos guardados antes del nuevo sistema
        const primerGrupo = gruposContenedor.querySelector('.dg-grupo');
        if (primerGrupo) {
            if (d.dgTipo) primerGrupo.querySelector('.dg-tipo').value = d.dgTipo;
            primerGrupo.querySelector('.dg-total').value = d.dgTotal;
            actualizarDadosGolpePanel(primerGrupo.querySelector('.dg-total'));
            if (d.dgChecks) primerGrupo.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]').forEach((c,i) => {
                c.checked = d.dgChecks[i] ?? true;
                _estilizarCheckDG(c, _colorParaTipo(d.dgTipo || 'd8'));
            });
        }
    }

    if (d.exitosMuerte) panel.querySelectorAll('.circulos-exito .circulo-muerte').forEach((c,i) => c.classList.toggle('activo', d.exitosMuerte[i]||false));
    if (d.fallosMuerte) panel.querySelectorAll('.circulos-fallo .circulo-muerte').forEach((c,i) => c.classList.toggle('activo', d.fallosMuerte[i]||false));

    if (d.monedas) ['cobre','plata','oro','platino'].forEach(m => {
        const el = panel.querySelector(`.moneda.${m} input`); if (el) el.value = d.monedas[m]||'0';
    });

    if (d.items && d.items.length > 0) {
        const cont = panel.querySelector('.contenedor-items');
        cont.innerHTML = '';
        d.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item-fila';
            div.innerHTML = `
                <input type="text" placeholder="Nombre..." class="input-item" onkeypress="checkInventarioPanel(event)" oninput="guardarDebounced()" value="${_esc(item.nombre)}">
                <input type="number" placeholder="1" class="input-item-cant" min="0" oninput="guardarDebounced()" value="${_esc(item.cant)}">
                <input type="text" placeholder="Descripción o notas..." class="input-item-desc" onkeypress="checkInventarioPanel(event)" oninput="guardarDebounced()" value="${_esc(item.desc)}">
                <input type="checkbox" title="Equipado" onchange="guardarDebounced()" ${item.equip?'checked':''}>
                <button class="btn-borrar-item" onclick="borrarItemInventario(this)" title="Eliminar">×</button>`;
            cont.appendChild(div);
        });
    }

    const se = panel.querySelector('.sentidos-extra');
    if (se && d.sentidosExtra) se.value = d.sentidosExtra;

    const tas = panel.querySelectorAll('.bloque-competencia textarea');
    if (tas[0]) tas[0].value = d.idiomas        || '';
    if (tas[1]) tas[1].value = d.herramientas   || '';
    if (tas[2]) tas[2].value = d.armasArmaduras || '';

    if (d.armas && d.armas.length > 0) {
        const lista = panel.querySelector('.armas-lista');
        lista.innerHTML = '';
        d.armas.forEach(arma => {
            lista.insertAdjacentHTML('beforeend', _htmlArmaFila());
            const fila = lista.lastElementChild;
            fila.querySelector('.arma-nombre-input').value   = arma.nombre    || '';
            fila.querySelector('.arma-stat-sel').value       = arma.stat      || 'str';
            fila.querySelector('.arma-bono-extra').value     = arma.bonoExtra || '0';
            fila.querySelector('.arma-alcance-input').value  = arma.alcance   || '';
            fila.querySelector('.arma-notas-input').value    = arma.notas     || '';

            if (arma.bloques && arma.bloques.length > 0) {
                const wrap    = fila.querySelector('.arma-daños-wrap');
                const primero = wrap.querySelector('.arma-daño-bloque');
                const b0 = arma.bloques[0];
                primero.querySelector('.arma-dado-qty').value  = b0.qty  || '1';
                primero.querySelector('.arma-dado-tipo').value = b0.dado || 'd8';
                primero.querySelector('.arma-tipo-daño').value = b0.tipo || 'Cortante';
                const bonoDEl = primero.querySelector('.arma-bono-daño');
                if (bonoDEl) bonoDEl.value = b0.bonoDaño || '0';

                for (let i = 1; i < arma.bloques.length; i++) {
                    const btnPlus = primero.querySelector('.arma-btn-extra-daño');
                    if (btnPlus) btnPlus.style.display = 'none';
                    const extra = document.createElement('div');
                    extra.className = 'arma-daño-bloque extra';
                    extra.innerHTML = _htmlDañoBloque(true);
                    wrap.appendChild(extra);
                    const bx = arma.bloques[i];
                    extra.querySelector('.arma-dado-qty').value  = bx.qty  || '1';
                    extra.querySelector('.arma-dado-tipo').value = bx.dado || 'd8';
                    extra.querySelector('.arma-tipo-daño').value = bx.tipo || 'Cortante';
                }
            }
            recalcArma(fila.querySelector('.arma-stat-sel'));
        });
    }

    ['actions','bonus','reactions','otros'].forEach(tipo => {
        const arr = d[`acciones_${tipo}`];
        if (!arr || arr.length === 0) return;
        const panelAcc = panel.querySelector(`.accion-panel[data-panel="${tipo}"]`);
        if (!panelAcc) return;
        const lista = panelAcc.querySelector('.acciones-lista');
        lista.innerHTML = '';
        arr.forEach(ac => {
            const div = document.createElement('div');
            div.className = 'entrada-accion';
            div.innerHTML = `
                <input type="text" class="accion-nombre" placeholder="Nombre..." oninput="guardarDebounced()" value="${_esc(ac.nombre)}">
                <textarea class="accion-desc" placeholder="Descripción..." oninput="guardarDebounced()">${_esc(ac.desc)}</textarea>`;
            lista.appendChild(div);
        });
    });

    if (d.recursos && Array.isArray(d.recursos)) {
        const recContenedor = panel.querySelector('.recursos-filas-contenedor');
        const filasPorFila = 4;
        const filasNecesarias = Math.ceil(d.recursos.length / filasPorFila);
        if (recContenedor) {
            const filasActuales = recContenedor.querySelectorAll('.recursos-grid').length;
            for (let f = filasActuales; f < filasNecesarias; f++) {
                const addBtn = panel.querySelector('.recursos-add-btn');
                if (addBtn) añadirFilaRecursos(addBtn);
            }
        }
        panel.querySelectorAll('.recurso-caja').forEach((caja, i) => {
            const r = d.recursos[i]; if (!r) return;
            const nombre = caja.querySelector('.recurso-nombre');
            const actual = caja.querySelector('.recurso-actual');
            const max    = caja.querySelector('.recurso-max');
            const btnC   = caja.querySelector('.recurso-recarga-btn[data-tipo="corto"]');
            const btnL   = caja.querySelector('.recurso-recarga-btn[data-tipo="largo"]');
            if (nombre && r.nombre) nombre.textContent = r.nombre;
            if (actual) actual.value = r.actual || '0';
            if (max)    max.value    = r.max    || '0';
            if (btnC)   btnC.classList.toggle('activo-corto', !!r.recargaCorto);
            if (btnL)   btnL.classList.toggle('activo-largo',  !!r.recargaLargo);
        });
    }

    if (d.caract && typeof initCaractSelectores === 'function') {
        const c = d.caract;
        if (c.claseSelect) {
            const selClase = panel.querySelector('.sel-clase');
            if (selClase) {
                selClase.value = c.claseSelect;
                const selSub = panel.querySelector('.sel-subclase');
                if (selSub && DND_CLASES[c.claseSelect]) {
                    selSub.innerHTML = '<option value="">— Selecciona una subclase —</option>';
                    Object.keys(DND_CLASES[c.claseSelect].subclases).forEach(sub => {
                        const opt = document.createElement('option');
                        opt.value = sub; opt.textContent = sub;
                        selSub.appendChild(opt);
                    });
                    if (c.subclaseSelect) selSub.value = c.subclaseSelect;
                }
            }
        }
        if (c.especieSelect) { const sel = panel.querySelector('.sel-especie'); if (sel) sel.value = c.especieSelect; }
        if (c.trasfondoSelect) { const sel = panel.querySelector('.sel-trasfondo'); if (sel) sel.value = c.trasfondoSelect; }

        const set = (cls, val) => { const el = panel.querySelector(cls); if (el && val) el.value = val; };
        set('.caract-clase',         c.claseTxt);
        set('.caract-subclase',      c.subclaseTxt);
        set('.caract-especie',       c.especieTxt);
        set('.caract-dotes',         c.dotesTxt);
        set('.caract-trasfondo-txt', c.trasfondoTxt);

        const tfWrap = panel.querySelector('.trasfondo-personalizado');
        if (tfWrap && c.tfPersonalizado) {
            tfWrap.style.display = '';
            if (c.tfStat2) { const s = tfWrap.querySelector('.tf-stat2-sel'); if(s) s.value = c.tfStat2; }
            if (c.tfStat1) { const s = tfWrap.querySelector('.tf-stat1-sel'); if(s) s.value = c.tfStat1; }
            if (c.tfHab1)  { const s = tfWrap.querySelector('.tf-hab1-sel');  if(s) s.value = c.tfHab1; }
            if (c.tfHab2)  { const s = tfWrap.querySelector('.tf-hab2-sel');  if(s) s.value = c.tfHab2; }
            if (c.tfPrevBonos) tfWrap.dataset.prevBonos = c.tfPrevBonos;
        }
    }

    actualizarTodoPanel(panel);
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
window.onload = function () {
    try {
        const guardado = localStorage.getItem('dnd_fichas');
        const contador = localStorage.getItem('dnd_contador');
        const activa   = localStorage.getItem('dnd_activa');
        if (guardado) {
            const datos = JSON.parse(guardado);
            if (datos && datos.length > 0) {
                if (contador) contadorFichas = parseInt(contador);
                datos.forEach(d => nuevaFicha(d));
                if (activa && fichas.find(f => f.id === activa)) activarFicha(activa);
                return;
            }
        }
    } catch(e) { console.warn('Error cargando datos:', e); }
    nuevaFicha();
};

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — INICIALIZACIÓN
═══════════════════════════════════════════════════════ */
function initSpellcasting(panel) {
    panel.querySelectorAll('.spell-nivel-bloque').forEach(bloque => {
        const nivel = parseInt(bloque.dataset.nivel);
        const sel = bloque.querySelector('.spell-sel-hechizo');
        if (!sel) return;
        sel.innerHTML = `<option value="">— Añadir ${nivel === 0 ? 'cantrip' : 'hechizo'} —</option>`;
        const lista = DND_SPELLS[nivel] || [];
        lista.forEach(sp => {
            const opt = document.createElement('option');
            opt.value = sp.id;
            opt.textContent = sp.n;
            sel.appendChild(opt);
        });
    });
}

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — RECALCULAR DC Y BONO ATAQUE
═══════════════════════════════════════════════════════ */
function recalcSpellcasting(panel) {
    if (!panel) return;
    const statEl = panel.querySelector('.spell-stat-sel');
    if (!statEl) return;
    const stat = statEl.value;
    const pb = parseInt(panel.querySelector('.pb-input')?.value) || 0;

    let statMod = 0;
    if (stat) {
        const score = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`)?.value) || 10;
        statMod = Math.floor((score - 10) / 2);
    }

    const dcExtra  = parseInt(panel.querySelector('.spell-dc-extra')?.value)  || 0;
    const atkExtra = parseInt(panel.querySelector('.spell-atk-extra')?.value) || 0;

    const dc  = 8 + pb + statMod + dcExtra;
    const atk = pb + statMod + atkExtra;

    const dcEl  = panel.querySelector('.spell-dc-display');
    const atkEl = panel.querySelector('.spell-atk-display');
    if (dcEl)  dcEl.textContent  = dc;
    if (atkEl) atkEl.textContent = (atk >= 0 ? '+' : '') + atk;
}

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — SLOTS
═══════════════════════════════════════════════════════ */
function añadirSlot(btn) {
    const checksDiv = btn.previousElementSibling;
    const wrap = document.createElement('div');
    wrap.className = 'slot-check-wrap';

    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.className = 'slot-chk';
    chk.checked = true;
    chk.addEventListener('change', () => guardarDebounced());

    const del = document.createElement('button');
    del.className = 'slot-del-btn';
    del.textContent = '×';
    del.title = 'Quitar slot';
    del.addEventListener('click', (e) => {
        e.stopPropagation();
        wrap.remove();
        guardarDebounced();
    });

    wrap.appendChild(chk);
    wrap.appendChild(del);
    checksDiv.appendChild(wrap);
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — AÑADIR / BORRAR HECHIZO
═══════════════════════════════════════════════════════ */
function añadirHechizo(btn) {
    const bloque = btn.closest('.spell-nivel-bloque');
    const nivel  = parseInt(bloque.dataset.nivel);
    const sel    = bloque.querySelector('.spell-sel-hechizo');
    const spId   = sel.value;
    if (!spId) return;

    const sp = (DND_SPELLS[nivel] || []).find(s => s.id === spId);
    if (!sp) return;

    const lista = bloque.querySelector('.spell-lista-hechizos');
    if (lista.querySelector(`[data-spell-id="${spId}"]`)) { sel.value = ''; return; }

    _renderSpellEntry(lista, sp);
    sel.value = '';
    guardarDebounced();
}

function _renderSpellEntry(lista, sp) {
    const entry = document.createElement('div');
    entry.className = 'spell-entry';
    entry.dataset.spellId = sp.id;

    const chkPrep = document.createElement('input');
    chkPrep.type = 'checkbox';
    chkPrep.className = 'spell-prep-chk';
    chkPrep.title = 'Preparado';
    chkPrep.addEventListener('change', () => guardarDebounced());

    const nombreWrap = document.createElement('div');
    nombreWrap.className = 'spell-entry-nombre-wrap';

    const nombre = document.createElement('span');
    nombre.className = 'spell-entry-nombre';
    nombre.textContent = sp.n;
    nombre.addEventListener('mouseenter', (e) => {
        clearTimeout(_tooltipShowTimeout);
        clearTimeout(_tooltipTimeout);
        _tooltipShowTimeout = setTimeout(() => mostrarTooltipHechizo(sp, e), 1000);
    });
    nombre.addEventListener('mouseleave', () => {
        clearTimeout(_tooltipShowTimeout);
        ocultarTooltipHechizo();
    });

    const concTag = document.createElement('span');
    concTag.className = 'spell-conc-tag';
    concTag.textContent = 'C';

    nombreWrap.appendChild(nombre);
    nombreWrap.appendChild(concTag);

    const concBtn = document.createElement('button');
    concBtn.className = 'spell-conc-btn';
    concBtn.title = 'Concentración';
    concBtn.addEventListener('click', () => {
        concBtn.classList.toggle('activo');
        concTag.style.display = concBtn.classList.contains('activo') ? 'inline' : 'none';
        guardarDebounced();
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-spell-del';
    delBtn.textContent = '×';
    delBtn.title = 'Eliminar hechizo';
    delBtn.addEventListener('click', () => { entry.remove(); guardarDebounced(); });

    entry.appendChild(chkPrep);
    entry.appendChild(nombreWrap);
    entry.appendChild(concBtn);
    entry.appendChild(delBtn);
    lista.appendChild(entry);
}

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — TOOLTIP
═══════════════════════════════════════════════════════ */
let _tooltipTimeout = null;
let _tooltipShowTimeout = null;

function _positionTooltip(tt, cx, cy) {
    const W = window.innerWidth, H = window.innerHeight;
    const TW = tt.offsetWidth  || 390;
    const TH = tt.offsetHeight || 360;
    let x = cx + 20, y = cy + 16;
    if (x + TW > W - 8) x = cx - TW - 16;
    if (y + TH > H - 8) y = H  - TH - 8;
    if (x < 4) x = 4;
    if (y < 4) y = 4;
    tt.style.left = x + 'px';
    tt.style.top  = y + 'px';
}
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.spell-tooltip.visible').forEach(tt => {
        _positionTooltip(tt, e.clientX, e.clientY);
    });
});

function mostrarTooltipHechizo(sp, evt) {
    clearTimeout(_tooltipTimeout);
    const panel = fichas.find(f => f.id === fichaActual)?.panel;
    if (!panel) return;
    const tt = panel.querySelector('.spell-tooltip');
    if (!tt) return;

    tt.querySelector('.stt-nombre').textContent        = sp.n;
    tt.querySelector('.stt-nivel-escuela').textContent = `${sp.nivel} · ${sp.escuela}`;
    tt.querySelector('.stt-casting').textContent       = sp.casting;
    tt.querySelector('.stt-range').textContent         = sp.range;
    tt.querySelector('.stt-components').textContent    = sp.components;
    tt.querySelector('.stt-duration').textContent      = sp.duration;
    tt.querySelector('.stt-desc').textContent          = sp.desc;

    const dañoWrap = tt.querySelector('.stt-daño-wrap');
    if (sp.damage) { tt.querySelector('.stt-damage').textContent = sp.damage; dañoWrap.style.display = ''; }
    else             dañoWrap.style.display = 'none';

    const extraWrap = tt.querySelector('.stt-extra-wrap');
    const extraEl   = tt.querySelector('.stt-extra');
    if (sp.extra) { extraEl.textContent = sp.extra; extraWrap.style.display = ''; }
    else            extraWrap.style.display = 'none';

    if (evt) _positionTooltip(tt, evt.clientX, evt.clientY);
    tt.classList.add('visible');
}

function ocultarTooltipHechizo() {
    _tooltipTimeout = setTimeout(() => {
        document.querySelectorAll('.spell-tooltip').forEach(tt => tt.classList.remove('visible'));
    }, 120);
}

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — PERSISTENCIA
═══════════════════════════════════════════════════════ */
function leerSpellcasting(panel) {
    const d = {};
    d.spellStat     = panel.querySelector('.spell-stat-sel')?.value || '';
    d.spellDcExtra  = panel.querySelector('.spell-dc-extra')?.value  || '0';
    d.spellAtkExtra = panel.querySelector('.spell-atk-extra')?.value || '0';
    const counts    = panel.querySelectorAll('.spell-count-input');
    d.spellAprendidos = counts[0]?.value || '0';
    d.spellPreparados = counts[1]?.value || '0';

    d.spellNiveles = [];
    panel.querySelectorAll('.spell-nivel-bloque').forEach(bloque => {
        const nivel    = parseInt(bloque.dataset.nivel);
        const slots    = Array.from(bloque.querySelectorAll('.slot-chk')).map(c => c.checked);
        const hechizos = Array.from(bloque.querySelectorAll('.spell-entry')).map(entry => ({
            id:   entry.dataset.spellId,
            prep: entry.querySelector('.spell-prep-chk')?.checked || false,
            conc: entry.querySelector('.spell-conc-btn')?.classList.contains('activo') || false,
        }));
        d.spellNiveles.push({ nivel, slots, hechizos });
    });
    return d;
}

function cargarSpellcasting(panel, d) {
    if (!d || !d.spellNiveles) return;
    const statEl = panel.querySelector('.spell-stat-sel');
    if (statEl && d.spellStat) statEl.value = d.spellStat;
    const dcExtra = panel.querySelector('.spell-dc-extra');
    if (dcExtra) dcExtra.value = d.spellDcExtra || '0';
    const atkExtra = panel.querySelector('.spell-atk-extra');
    if (atkExtra) atkExtra.value = d.spellAtkExtra || '0';
    const counts = panel.querySelectorAll('.spell-count-input');
    if (counts[0]) counts[0].value = d.spellAprendidos || '0';
    if (counts[1]) counts[1].value = d.spellPreparados || '0';

    d.spellNiveles.forEach(nd => {
        const bloque = panel.querySelector(`.spell-nivel-bloque[data-nivel="${nd.nivel}"]`);
        if (!bloque) return;
        const checksDiv = bloque.querySelector('.spell-slots-checks');
        if (checksDiv && nd.slots && nd.slots.length > 0) {
            checksDiv.innerHTML = '';
            nd.slots.forEach(checked => {
                const wrap = document.createElement('div');
                wrap.className = 'slot-check-wrap';
                const chk = document.createElement('input');
                chk.type = 'checkbox'; chk.className = 'slot-chk'; chk.checked = checked;
                chk.addEventListener('change', () => guardarDebounced());
                const del = document.createElement('button');
                del.className = 'slot-del-btn'; del.textContent = '×';
                del.addEventListener('click', (e) => { e.stopPropagation(); wrap.remove(); guardarDebounced(); });
                wrap.appendChild(chk); wrap.appendChild(del); checksDiv.appendChild(wrap);
            });
        }
        const lista = bloque.querySelector('.spell-lista-hechizos');
        if (lista && nd.hechizos && nd.hechizos.length > 0) {
            lista.innerHTML = '';
            nd.hechizos.forEach(h => {
                const sp = (DND_SPELLS[nd.nivel] || []).find(s => s.id === h.id);
                if (!sp) return;
                _renderSpellEntry(lista, sp);
                const entry = lista.lastElementChild;
                const prepChk = entry.querySelector('.spell-prep-chk');
                if (prepChk) prepChk.checked = h.prep || false;
                const concBtn = entry.querySelector('.spell-conc-btn');
                const concTag = entry.querySelector('.spell-conc-tag');
                if (concBtn && h.conc) { concBtn.classList.add('activo'); if (concTag) concTag.style.display = 'inline'; }
            });
        }
    });
    recalcSpellcasting(panel);
}

/* ═══════════════════════════════════════════════════════
   PATCH: integrar spellcasting en guardar/cargar
═══════════════════════════════════════════════════════ */
const _leerFichaOrig = leerFicha;
leerFicha = function(panel) {
    const d = _leerFichaOrig(panel);
    Object.assign(d, leerSpellcasting(panel));
    return d;
};

const _cargarDatosEnPanelOrig = cargarDatosEnPanel;
cargarDatosEnPanel = function(panel, d) {
    _cargarDatosEnPanelOrig(panel, d);
    cargarSpellcasting(panel, d);
};

const _actualizarTodoPanelOrig = actualizarTodoPanel;
actualizarTodoPanel = function(panel) {
    _actualizarTodoPanelOrig(panel);
    recalcSpellcasting(panel);
};

/* ═══════════════════════════════════════════════════════
   RECURSOS — FILAS ADICIONALES
═══════════════════════════════════════════════════════ */
function _htmlRecursoCaja(idx) {
    return `<div class="recurso-caja" data-recurso="${idx}">
        <div class="recurso-top">
            <button class="recurso-recarga-btn" data-tipo="corto" onclick="toggleRecargaRecurso(this)" title="Descanso Corto">C</button>
            <div class="recurso-total-wrap">
                <span class="recurso-total-label">Total</span>
                <input type="number" class="recurso-max" value="0" min="0" step="1" oninput="guardarDebounced()">
            </div>
            <button class="recurso-recarga-btn" data-tipo="largo" onclick="toggleRecargaRecurso(this)" title="Descanso Largo">L</button>
        </div>
        <input type="number" class="recurso-actual" value="0" min="0" step="1" oninput="guardarDebounced()">
        <div class="recurso-nombre" contenteditable="true" spellcheck="false"
             oninput="guardarDebounced()" data-placeholder="Recurso ${idx+1}">Recurso ${idx+1}</div>
    </div>`;
}

function añadirFilaRecursos(btn) {
    const panel = getPanel(btn);
    const contenedor = panel.querySelector('.recursos-filas-contenedor');
    const totalActual = contenedor.querySelectorAll('.recurso-caja').length;
    const nuevaFila = document.createElement('div');
    nuevaFila.className = 'recursos-grid recursos-grid-extra';
    for (let i = 0; i < 4; i++) nuevaFila.innerHTML += _htmlRecursoCaja(totalActual + i);
    const delBtn = document.createElement('button');
    delBtn.className = 'recursos-del-fila-btn';
    delBtn.title = 'Quitar esta fila';
    delBtn.textContent = '×';
    delBtn.onclick = function() { nuevaFila.remove(); guardarDebounced(); };
    nuevaFila.appendChild(delBtn);
    contenedor.appendChild(nuevaFila);
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   WIDGET DADOS
═══════════════════════════════════════════════════════ */
function toggleDadosWidget() {
    var w = document.getElementById('dados-widget');
    if (!w) return;
    var isMin = w.classList.toggle('minimizado');
    try { localStorage.setItem('dnd_dados_min', isMin ? '1' : '0'); } catch(e) {}
}
function dadosInitWidget() {
    var c = document.getElementById('dados-filas');
    if (!c || c.children.length > 0) return;
    dadosAddFila(true);
    try {
        if (localStorage.getItem('dnd_dados_min') === '1') {
            var w = document.getElementById('dados-widget');
            if (w) w.classList.add('minimizado');
        }
    } catch(e) {}
}
function dadosAddFila(primera) {
    var c = document.getElementById('dados-filas');
    if (!c) return;
    var idx = c.children.length;
    var fila = document.createElement('div');
    fila.className = 'dados-fila';
    var h = '<label>' + (idx + 1) + '.</label>';
    h += '<select class="dados-tipo">';
    h += '<option value="4">d4</option>';
    h += '<option value="6">d6</option>';
    h += '<option value="8">d8</option>';
    h += '<option value="10">d10</option>';
    h += '<option value="12">d12</option>';
    h += '<option value="20" selected>d20</option>';
    h += '<option value="100">d%</option>';
    h += '</select>';
    h += '<input type="number" class="dados-num" value="1" min="1" max="20">';
    h += '<span class="dados-bono-label">+</span>';
    h += '<input type="number" class="dados-bono" value="0" min="-99" max="99">';
    if (!primera) h += '<button class="dados-del-btn" onclick="dadosDelFila(this)">×</button>';
    fila.innerHTML = h;
    c.appendChild(fila);
    _dadosRenumerar();
}
function dadosDelFila(btn) {
    btn.closest('.dados-fila').remove();
    _dadosRenumerar();
}
function _dadosRenumerar() {
    var fs = document.querySelectorAll('#dados-filas .dados-fila');
    for (var i = 0; i < fs.length; i++) { var l = fs[i].querySelector('label'); if (l) l.textContent = (i + 1) + '.'; }
}
function dadosRealizarTirada() {
    var fs = document.querySelectorAll('#dados-filas .dados-fila');
    if (!fs.length) return;
    var total = 0, partes = [];
    for (var i = 0; i < fs.length; i++) {
        var caras  = parseInt(fs[i].querySelector('.dados-tipo').value) || 20;
        var num    = Math.max(1, Math.min(20, parseInt(fs[i].querySelector('.dados-num').value) || 1));
        var bonus  = parseInt(fs[i].querySelector('.dados-bono').value) || 0;
        var rolls  = [];
        for (var r = 0; r < num; r++) rolls.push(Math.floor(Math.random() * caras) + 1);
        var sd = rolls.reduce(function(a, b) { return a + b; }, 0);
        total += sd + bonus;
        var p = num + 'd' + caras + ' [' + rolls.join(', ') + ']';
        if (bonus > 0) p += '+' + bonus; else if (bonus < 0) p += bonus;
        partes.push(p);
    }
    var log = document.getElementById('log-lista');
    if (!log) return;
    var div = document.createElement('div');
    div.className = 'log-entrada dados-custom';
    div.innerHTML = '<strong>🎲 Tirada personalizada</strong><div class="res"><span>' + total + '</span><small>' + partes.join(' + ') + '</small></div>';
    log.prepend(div);
}
dadosInitWidget();
