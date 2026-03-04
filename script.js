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

    // Init primer grupo dados de golpe
    (function(){
        const wrap = panel.querySelector('.dg-grupos-wrap');
        if (wrap && wrap.children.length === 0) {
            const g = dgCrearGrupo('d8', 1);
            wrap.appendChild(g);
            actualizarDadosGolpePanel(g.querySelector('.dg-total'));
        }
    })();
    if (typeof initCaractSelectores === 'function') initCaractSelectores(panel);
    if (typeof initSpellcasting === 'function') initSpellcasting(panel);
    initNotasSubpags(panel);
    _initAutoAccionesBloque(panel);
    initMulticlaseWidget(panel);
    _hookAutoAcciones(panel);
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
    if (!panel) return;
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
   DADOS DE GOLPE
═══════════════════════════════════════════════════════ */
/* ── Dados de Golpe multi-grupo ─────────────────────── */
const DG_COLORES = {
    d4:  { borde:'#a0aec0', fondo:'#f7fafc', chk:'#718096', txt:'#4a5568' },
    d6:  { borde:'#38a169', fondo:'#f0fff4', chk:'#38a169', txt:'#276749' },
    d8:  { borde:'#3182ce', fondo:'#ebf8ff', chk:'#3182ce', txt:'#2b6cb0' },
    d10: { borde:'#805ad5', fondo:'#faf5ff', chk:'#805ad5', txt:'#553c9a' },
    d12: { borde:'#dd6b20', fondo:'#fffaf0', chk:'#dd6b20', txt:'#c05621' },
};

function dgColorCSS(tipo) {
    const c = DG_COLORES[tipo] || DG_COLORES.d8;
    return `--dg-borde:${c.borde};--dg-fondo:${c.fondo};--dg-chk:${c.chk};--dg-txt:${c.txt}`;
}

function dgCrearGrupo(tipo, total) {
    tipo  = tipo  || 'd8';
    total = total || 1;
    const grupo = document.createElement('div');
    grupo.className = 'dg-grupo';
    grupo.setAttribute('style', dgColorCSS(tipo));
    grupo.innerHTML = `
        <div class="dg-grupo-head">
            <div class="dg-left-col">
                <label class="dg-lbl">Tipo</label>
                <select class="dg-tipo" onchange="dgTipoCambia(this)">
                    <option value="d4" ${tipo==='d4'?'selected':''}>d4</option>
                    <option value="d6" ${tipo==='d6'?'selected':''}>d6</option>
                    <option value="d8" ${tipo==='d8'?'selected':''}>d8</option>
                    <option value="d10" ${tipo==='d10'?'selected':''}>d10</option>
                    <option value="d12" ${tipo==='d12'?'selected':''}>d12</option>
                </select>
                <label class="dg-lbl" style="margin-top:4px">Dados</label>
                <input type="number" class="dg-total" value="${total}" min="0" max="20"
                    oninput="actualizarDadosGolpePanel(this)">
            </div>
            <div class="dg-checks-contenedor"></div>
            <button class="dg-del-btn" onclick="dgBorrarGrupo(this)" title="Eliminar este grupo">×</button>
        </div>`;
    return grupo;
}

function dgTipoCambia(sel) {
    const grupo = sel.closest('.dg-grupo');
    grupo.setAttribute('style', dgColorCSS(sel.value));
    // Recolorear los checkboxes existentes
    grupo.querySelectorAll('.dg-check-item input').forEach(c => {
        c.style.setProperty('--chk', DG_COLORES[sel.value]?.chk || '#3182ce');
    });
    guardarDebounced();
}

function dgBorrarGrupo(btn) {
    const wrap = btn.closest('.dg-grupos-wrap');
    if (wrap.querySelectorAll('.dg-grupo').length <= 1) return;
    btn.closest('.dg-grupo').remove();
    guardarDebounced();
}

function dgAñadirGrupo(btn) {
    const wrap = getPanel(btn).querySelector('.dg-grupos-wrap');
    const g = dgCrearGrupo('d8', 1);
    wrap.appendChild(g);
    actualizarDadosGolpePanel(g.querySelector('.dg-total'));
}

function actualizarDadosGolpePanel(input) {
    const grupo      = input.closest('.dg-grupo');
    const panel      = getPanel(input);
    const total      = Math.max(0, Math.min(20, parseInt(input.value) || 0));
    const contenedor = grupo.querySelector('.dg-checks-contenedor');
    const actuales   = contenedor.querySelectorAll('.dg-check-item').length;
    const tipo       = grupo.querySelector('.dg-tipo').value;
    const chkColor   = DG_COLORES[tipo]?.chk || '#3182ce';

    if (total > actuales) {
        for (let i = actuales; i < total; i++) {
            const item = document.createElement('div');
            item.className = 'dg-check-item';
            const chk = document.createElement('input');
            chk.type = 'checkbox'; chk.checked = true;
            chk.style.setProperty('--chk', chkColor);
            chk.addEventListener('change', function() {
                if (!this.checked) dgUsarDado(this.closest('.dg-grupo'), panel);
                guardarDebounced();
            });
            item.appendChild(chk);
            contenedor.appendChild(item);
        }
    } else {
        const items = contenedor.querySelectorAll('.dg-check-item');
        for (let i = actuales - 1; i >= total; i--) items[i].remove();
    }
    guardarDebounced();
}

function dgUsarDado(grupo, panel) {
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

/* ═══════════════════════════════════════════════════
   AGOTAMIENTO
═══════════════════════════════════════════════════ */
function toggleAgotamiento(bolita) {
    const nivel = parseInt(bolita.dataset.nivel);
    const panel = getPanel(bolita);
    const todas = panel.querySelectorAll('.agotamiento-bolita');
    const estaActivo = bolita.classList.contains('activo');

    // Si clicas la bolita ya activa y es la última activa → desmarcar todas hasta esa
    // Comportamiento: marcar hasta el nivel clicado, o desmarcar si ya estaba todo marcado hasta ahí
    const nivelActual = [...todas].filter(b => b.classList.contains('activo')).length;

    if (nivel === nivelActual && estaActivo) {
        // Desmarcar solo esta (bajar un nivel)
        bolita.classList.remove('activo');
    } else {
        // Marcar todas hasta este nivel
        todas.forEach(b => {
            const n = parseInt(b.dataset.nivel);
            b.classList.toggle('activo', n <= nivel);
        });
    }
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   DESCANSO
═══════════════════════════════════════════════════════ */
function descansoLargo(btn) {
    const panel = getPanel(btn);
    const max = parseInt(panel.querySelector('.hp-max').value) || 0;
    panel.querySelector('.hp-actual').value = max;
    panel.querySelector('.hp-temp-val').value = 0;
    actualizarVidaPanel(panel.querySelector('.hp-actual'));
    panel.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]').forEach(chk => { chk.checked = true; }); // recarga todos los grupos
    btn.style.background = '#c6f6d5'; btn.style.borderColor = '#38a169';
    setTimeout(() => { btn.style.background = ''; btn.style.borderColor = ''; }, 600);
    // Recargar recursos marcados con L (o C, ya que largo recarga todo)
    if (typeof recargaRecursosPorDescanso === 'function') recargaRecursosPorDescanso(panel, 'largo');
    // Recargar todos los slots de spellcasting
    panel.querySelectorAll('.slot-chk').forEach(chk => { chk.checked = true; });
    guardarDebounced();
}

function descansoCorto(btn) {
    const panel = getPanel(btn);
    btn.style.background = '#bee3f8'; btn.style.borderColor = '#3182ce';
    setTimeout(() => { btn.style.background = ''; btn.style.borderColor = ''; }, 600);
    if (typeof recargaRecursosPorDescanso === 'function') recargaRecursosPorDescanso(panel, 'corto');
    // Warlock: Pact Magic se recarga en descanso corto
    if (typeof leerMulticlases === 'function' && typeof _getClaseData === 'function') {
        const mcs = leerMulticlases(panel).filter(mc => mc.clase);
        const warlockMC = mcs.find(mc => _getClaseData(mc.clase).casting === 'warlock');
        if (warlockMC) {
            const wNv = Math.min((parseInt(warlockMC.nivel) || 1) - 1, 19);
            const warlockNivel = WARLOCK_SLOTS[wNv][1] + 1;
            const bloque = panel.querySelector(`.spell-nivel-bloque[data-nivel="${warlockNivel}"]`);
            if (bloque) bloque.querySelectorAll('.slot-chk').forEach(chk => { chk.checked = true; });
        }
    }
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
        <input type="checkbox" class="chk-equipado" title="Equipado" onchange="guardarDebounced()">
        <input type="checkbox" class="chk-sintonizado" title="Sintonizado" onchange="validarSintonizados(this);guardarDebounced()">
        <button class="btn-borrar-item" onclick="borrarItemInventario(this)" title="Eliminar">×</button>
    `;
    contenedor.appendChild(div);
    div.querySelector('.input-item').focus();
    contenedor.scrollTop = contenedor.scrollHeight;
}

function validarSintonizados(chk) {
    const panel = getPanel(chk);
    const todos = panel.querySelectorAll('.chk-sintonizado:checked');
    if (todos.length > 3) {
        chk.checked = false;
        // Feedback visual breve
        const fila = chk.closest('.item-fila');
        fila.style.outline = '2px solid #e53e3e';
        fila.title = 'Máximo 3 objetos sintonizados';
        setTimeout(() => { fila.style.outline = ''; fila.title = ''; }, 1200);
    }
}

function borrarItemInventario(btn) {
    const fila = btn.closest('.item-fila');
    const contenedor = fila.closest('.contenedor-items');
    if (contenedor.querySelectorAll('.item-fila').length <= 1) {
        fila.querySelectorAll('input[type="text"], input[type="number"]').forEach(i => i.value = '');
        fila.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
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
    } catch(e) {
        console.warn('No se pudo guardar:', e);
        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            const aviso = document.createElement('div');
            aviso.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#e53e3e;color:#fff;padding:10px 16px;border-radius:8px;font-size:13px;font-weight:700;z-index:9999;box-shadow:0 2px 10px rgba(0,0,0,0.3)';
            aviso.textContent = '⚠ No se pudo guardar: almacenamiento lleno. Exporta tus fichas a JSON como copia de seguridad.';
            document.body.appendChild(aviso);
            setTimeout(() => aviso.remove(), 6000);
        }
    }
}

function leerFicha(panel) {
    const d = {};
    d.id = panel.dataset.fichaId;

    // Cabecera
    d.nombre      = panel.querySelector('.input-nombre')?.value || '';
    const campos  = panel.querySelectorAll('.campo-sm input');
    d.especie     = campos[0]?.value || '';
    d.trasfondo   = campos[1]?.value || '';
    d.pb          = panel.querySelector('.pb-input')?.value || '2';
    d.inspiracion = panel.querySelector('.bloque-inspiracion')?.classList.contains('activo') || false;
    // Multiclase
    d.multiclases = leerMulticlases(panel);

    // Stats y salvaciones
    d.stats = {}; d.salvs = {};
    ['str','dex','con','int','wis','cha'].forEach(s => {
        d.stats[s] = panel.querySelector(`.stat-score[data-stat="${s}"]`)?.value || '10';
        d.salvs[s] = panel.querySelector(`.salv-dot[data-stat="${s}"]`)?.checked || false;
    });

    // Habilidades
    d.habilidades = [];
    panel.querySelectorAll('.fila-skill').forEach(fila => {
        const adv = fila.querySelector('.adv-toggle');
        d.habilidades.push({
            prof: fila.querySelector('.dot.prof')?.checked || false,
            exp:  fila.querySelector('.dot.exp')?.checked  || false,
            adv:  adv ? parseInt(adv.dataset.adv) : 0
        });
    });

    // Combate inline
    const csis = panel.querySelectorAll('.csi-input');
    d.ca  = csis[0]?.value || '10';
    d.ini      = csis[1]?.value || '0';
    d.iniBonus = csis[1]?.dataset.iniBonus ?? '0';
    d.vels = Array.from(panel.querySelectorAll('.vel-inline-input')).map(v => v.value);

    // Vida
    d.hpActual = panel.querySelector('.hp-actual')?.value   || '10';
    d.hpMax    = panel.querySelector('.hp-max')?.value      || '10';
    d.hpTemp   = panel.querySelector('.hp-temp-val')?.value || '0';

    // Resistencias (3 textareas separadas)
    const resTas = panel.querySelectorAll('.res-textarea');
    d.resistenciaDaño        = resTas[0]?.value || '';
    d.inmunidadDaño          = resTas[1]?.value || '';
    d.inmunidadCondiciones   = resTas[2]?.value || '';

    // Condiciones
    d.condiciones = Array.from(panel.querySelectorAll('.condicion-chk')).map(c => c.checked);
    d.agotamiento = Array.from(panel.querySelectorAll('.agotamiento-bolita')).map(b => b.classList.contains('activo'));

    // Dados de golpe — array de grupos (con compat. legacy)
    d.dgGrupos = Array.from(panel.querySelectorAll('.dg-grupo')).map(g => ({
        tipo:   g.querySelector('.dg-tipo')?.value || 'd8',
        total:  g.querySelector('.dg-total')?.value || '0',
        checks: Array.from(g.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]')).map(c => c.checked)
    }));
    d.dgTotal  = d.dgGrupos[0]?.total  || '0'; // compat legacy
    d.dgTipo   = d.dgGrupos[0]?.tipo   || 'd8';
    d.dgChecks = d.dgGrupos[0]?.checks || [];

    // Salvaciones de muerte
    d.exitosMuerte = Array.from(panel.querySelectorAll('.circulos-exito .circulo-muerte')).map(c => c.classList.contains('activo'));
    d.fallosMuerte = Array.from(panel.querySelectorAll('.circulos-fallo .circulo-muerte')).map(c => c.classList.contains('activo'));

    // Monedas
    d.monedas = {};
    ['cobre','plata','oro','platino'].forEach(m => {
        d.monedas[m] = panel.querySelector(`.moneda.${m} input`)?.value || '0';
    });

    // Items inventario
    d.items = [];
    panel.querySelectorAll('.item-fila').forEach(fila => {
        const ins = fila.querySelectorAll('input');
        d.items.push({
            nombre: ins[0]?.value||'',
            cant:   ins[1]?.value||'',
            desc:   ins[2]?.value||'',
            equip:  fila.querySelector('.chk-equipado')?.checked||false,
            sint:   fila.querySelector('.chk-sintonizado')?.checked||false
        });
    });

    // Sentidos
    d.sentidosExtra = panel.querySelector('.sentidos-extra')?.value || '';

    // Competencias
    const tas = panel.querySelectorAll('.bloque-competencia textarea');
    d.idiomas        = tas[0]?.value || '';
    d.herramientas   = tas[1]?.value || '';
    d.armasArmaduras = tas[2]?.value || '';

    // Armas
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

    // Acciones
    ['actions','bonus','reactions','otros'].forEach(tipo => {
        d[`acciones_${tipo}`] = [];
        panel.querySelectorAll(`.accion-panel[data-panel="${tipo}"] .entrada-accion`).forEach(e => {
            d[`acciones_${tipo}`].push({
                nombre: e.querySelector('.accion-nombre')?.value || '',
                desc:   e.querySelector('.accion-desc')?.value   || ''
            });
        });
    });

    // Recursos
    d.recursos = Array.from(panel.querySelectorAll('.recurso-caja')).map(caja => ({
        nombre:       caja.querySelector('.recurso-nombre')?.textContent || '',
        actual:       caja.querySelector('.recurso-actual')?.value || '0',
        max:          caja.querySelector('.recurso-max')?.value || '0',
        recargaCorto: caja.querySelector('.recurso-recarga-btn[data-tipo="corto"]')?.classList.contains('activo-corto') || false,
        recargaLargo: caja.querySelector('.recurso-recarga-btn[data-tipo="largo"]')?.classList.contains('activo-largo') || false,
    }));

    // Características de personaje
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
        // Trasfondo personalizado
        tfPersonalizado: panel.querySelector('.trasfondo-personalizado')?.style.display !== 'none',
        tfStat2:         panel.querySelector('.tf-stat2-sel')?.value   || '',
        tfStat1:         panel.querySelector('.tf-stat1-sel')?.value   || '',
        tfHab1:          panel.querySelector('.tf-hab1-sel')?.value    || '',
        tfHab2:          panel.querySelector('.tf-hab2-sel')?.value    || '',
        tfPrevBonos:     panel.querySelector('.trasfondo-personalizado')?.dataset.prevBonos || '',
    };

    d.roleplay = leerRoleplay(panel);
    d.autoNotas = leerAutoNotas(panel);

    return d;
}

function cargarDatosEnPanel(panel, d) {
    // Cabecera
    if (d.nombre) { panel.querySelector('.input-nombre').value = d.nombre; onNombreCambia(panel.querySelector('.input-nombre')); }
    const campos = panel.querySelectorAll('.campo-sm input');
    if (campos[0]) campos[0].value = d.especie   || '';
    if (campos[1]) campos[1].value = d.trasfondo || '';
    if (d.pb) panel.querySelector('.pb-input').value = d.pb;
    if (d.inspiracion) panel.querySelector('.bloque-inspiracion').classList.add('activo');
    // Multiclase - compat with old d.clase string
    if (d.multiclases && d.multiclases.length) {
        cargarMulticlases(panel, d.multiclases);
    } else if (d.clase) {
        // Legacy: parse "Guerrero 5" or just "Guerrero"
        const m = d.clase.match(/^(.+?)\s+(\d+)$/);
        const claseNombre = m ? m[1].trim() : d.clase.trim();
        const nivel = m ? parseInt(m[2]) : 1;
        cargarMulticlases(panel, [{ clase: claseNombre, nivel }]);
    }

    // Stats y salvaciones
    if (d.stats) ['str','dex','con','int','wis','cha'].forEach(s => {
        const el = panel.querySelector(`.stat-score[data-stat="${s}"]`);
        if (el) el.value = d.stats[s] || '10';
    });
    if (d.salvs) ['str','dex','con','int','wis','cha'].forEach(s => {
        const el = panel.querySelector(`.salv-dot[data-stat="${s}"]`);
        if (el) el.checked = d.salvs[s] || false;
    });

    // Habilidades
    if (d.habilidades) panel.querySelectorAll('.fila-skill').forEach((fila, i) => {
        const h = d.habilidades[i]; if (!h) return;
        const prof = fila.querySelector('.dot.prof');
        const exp  = fila.querySelector('.dot.exp');
        const adv  = fila.querySelector('.adv-toggle');
        if (prof) prof.checked = h.prof;
        if (exp)  exp.checked  = h.exp;
        if (adv)  { adv.dataset.adv = h.adv; adv.textContent = h.adv===1?'▲':h.adv===2?'▼':''; }
    });

    // Combate
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

    // Vida
    if (d.hpActual) panel.querySelector('.hp-actual').value    = d.hpActual;
    if (d.hpMax)    panel.querySelector('.hp-max').value       = d.hpMax;
    if (d.hpTemp)   panel.querySelector('.hp-temp-val').value  = d.hpTemp;

    // Resistencias (3 textareas separadas)
    const resTasLoad = panel.querySelectorAll('.res-textarea');
    if (resTasLoad[0] && d.resistenciaDaño      !== undefined) resTasLoad[0].value = d.resistenciaDaño;
    if (resTasLoad[1] && d.inmunidadDaño        !== undefined) resTasLoad[1].value = d.inmunidadDaño;
    if (resTasLoad[2] && d.inmunidadCondiciones !== undefined) resTasLoad[2].value = d.inmunidadCondiciones;
    // Compatibilidad con datos guardados antes del fix (campo único antiguo)
    if (d.resistencias && !d.resistenciaDaño) {
        if (resTasLoad[0]) resTasLoad[0].value = d.resistencias;
    }

    // Condiciones
    if (d.condiciones) panel.querySelectorAll('.condicion-chk').forEach((c,i) => { c.checked = d.condiciones[i]||false; });
    if (d.agotamiento) panel.querySelectorAll('.agotamiento-bolita').forEach((b,i) => { b.classList.toggle('activo', !!d.agotamiento[i]); });

    // Dados de golpe — restaurar grupos
    (function() {
        const wrap = panel.querySelector('.dg-grupos-wrap');
        if (!wrap) return;
        wrap.innerHTML = '';
        const grupos = (d.dgGrupos && d.dgGrupos.length)
            ? d.dgGrupos
            : [{ tipo: d.dgTipo || 'd8', total: d.dgTotal || '1', checks: d.dgChecks || [] }];
        grupos.forEach(gd => {
            const g = dgCrearGrupo(gd.tipo || 'd8', gd.total || '1');
            wrap.appendChild(g);
            actualizarDadosGolpePanel(g.querySelector('.dg-total'));
            const chks = g.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]');
            if (gd.checks) chks.forEach((c,i) => { c.checked = gd.checks[i] !== undefined ? gd.checks[i] : true; });
        });
    })();

    // Salvaciones de muerte
    if (d.exitosMuerte) panel.querySelectorAll('.circulos-exito .circulo-muerte').forEach((c,i) => c.classList.toggle('activo', d.exitosMuerte[i]||false));
    if (d.fallosMuerte) panel.querySelectorAll('.circulos-fallo .circulo-muerte').forEach((c,i) => c.classList.toggle('activo', d.fallosMuerte[i]||false));

    // Monedas
    if (d.monedas) ['cobre','plata','oro','platino'].forEach(m => {
        const el = panel.querySelector(`.moneda.${m} input`); if (el) el.value = d.monedas[m]||'0';
    });

    // Items
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
                <input type="checkbox" class="chk-equipado" title="Equipado" onchange="guardarDebounced()" ${item.equip?'checked':''}>
                <input type="checkbox" class="chk-sintonizado" title="Sintonizado" onchange="validarSintonizados(this);guardarDebounced()" ${item.sint?'checked':''}>
                <button class="btn-borrar-item" onclick="borrarItemInventario(this)" title="Eliminar">×</button>`;
            cont.appendChild(div);
        });
    }

    // Sentidos
    const se = panel.querySelector('.sentidos-extra');
    if (se && d.sentidosExtra) se.value = d.sentidosExtra;

    // Competencias
    const tas = panel.querySelectorAll('.bloque-competencia textarea');
    if (tas[0]) tas[0].value = d.idiomas        || '';
    if (tas[1]) tas[1].value = d.herramientas   || '';
    if (tas[2]) tas[2].value = d.armasArmaduras || '';

    // Armas
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

    // Acciones
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

    // Restaurar Recursos (crear filas extra si había más de 4)
    if (d.recursos && Array.isArray(d.recursos)) {
        const _wrap = panel.querySelector('.recursos-extra-wrap');
        if (_wrap && typeof _recursosCajaHTML === 'function') {
            _wrap.innerHTML = ''; // limpiar filas extra previas
            const _base4 = panel.querySelector('.recursos-grid')?.querySelectorAll('.recurso-caja').length || 4;
            const _extras = d.recursos.length - _base4;
            const _nfilas = Math.ceil(_extras / 4);
            for (let _f = 0; _f < _nfilas; _f++) {
                const _fila = document.createElement('div');
                _fila.className = 'recursos-extra-fila';
                const _b = _base4 + _f * 4;
                let _h = '';
                for (let _i = 0; _i < 4; _i++) _h += _recursosCajaHTML(_b + _i);
                _fila.innerHTML = _h;
                const _del = document.createElement('button');
                _del.className = 'recursos-fila-del-btn';
                _del.textContent = '× Eliminar esta fila';
                _del.onclick = (function(el){ return function(){ el.remove(); guardarDebounced(); }; })(_fila);
                _fila.appendChild(_del);
                _wrap.appendChild(_fila);
            }
        }
        panel.querySelectorAll('.recurso-caja').forEach((caja, i) => {
            const r = d.recursos[i];
            if (!r) return;
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

    // Características de personaje
    if (d.caract && typeof initCaractSelectores === 'function') {
        // Los selectores ya están inicializados por nuevaFicha→initCaractSelectores
        const c = d.caract;

        // Restaurar clase y rellenar subclase select
        if (c.claseSelect) {
            const selClase = panel.querySelector('.sel-clase');
            if (selClase) {
                selClase.value = c.claseSelect;
                // Rebuild subclase options
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
        if (c.especieSelect) {
            const sel = panel.querySelector('.sel-especie');
            if (sel) sel.value = c.especieSelect;
        }
        if (c.trasfondoSelect) {
            const sel = panel.querySelector('.sel-trasfondo');
            if (sel) sel.value = c.trasfondoSelect;
        }

        // Restaurar textos (el jugador puede haber editado después de cargar)
        const set = (cls, val) => { const el = panel.querySelector(cls); if (el && val) el.value = val; };
        set('.caract-clase',         c.claseTxt);
        set('.caract-subclase',      c.subclaseTxt);
        set('.caract-especie',       c.especieTxt);
        set('.caract-dotes',         c.dotesTxt);
        set('.caract-trasfondo-txt', c.trasfondoTxt);

        // Restaurar trasfondo personalizado
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

    // Recalcular todo al final
    actualizarTodoPanel(panel);

    cargarRoleplay(panel, d.roleplay);
    // Regenerar acciones auto tras cargar todos los datos (clase, especie, hechizos ya restaurados)
    // Usamos setTimeout para esperar a que el DOM esté completamente actualizado
    setTimeout(() => {
        regenerarAccionesAuto(panel);
        cargarAutoNotas(panel, d.autoNotas);
    }, 0);
}


/* ── Recursos expandibles ──────────────────────────── */
function toggleRecargaRecurso(btn) {
    const tipo = btn.dataset.tipo;
    if (tipo === 'corto') {
        const eraActivo = btn.classList.contains('activo-corto');
        btn.classList.toggle('activo-corto', !eraActivo);
        // Si se activa corto, desactivar largo (corto ⊂ largo)
        if (!eraActivo) {
            const btnLargo = btn.closest('.recurso-caja').querySelector('.recurso-recarga-btn[data-tipo="largo"]');
            if (btnLargo) btnLargo.classList.remove('activo-largo');
        }
    } else {
        btn.classList.toggle('activo-largo');
    }
    guardarDebounced();
}

function recargaRecursosPorDescanso(panel, tipo) {
    panel.querySelectorAll('.recurso-caja').forEach(caja => {
        const btnC = caja.querySelector('.recurso-recarga-btn[data-tipo="corto"]');
        const btnL = caja.querySelector('.recurso-recarga-btn[data-tipo="largo"]');
        const recargaCorto = btnC?.classList.contains('activo-corto');
        const recargaLargo = btnL?.classList.contains('activo-largo');
        const actualEl = caja.querySelector('.recurso-actual');
        const maxEl    = caja.querySelector('.recurso-max');
        if (!actualEl || !maxEl) return;
        if (tipo === 'largo' && (recargaLargo || recargaCorto)) {
            actualEl.value = maxEl.value;
        } else if (tipo === 'corto' && recargaCorto) {
            actualEl.value = maxEl.value;
        }
    });
    guardarDebounced();
}

function _recursosCajaHTML(idx) {
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

function recursosAñadirFila(btn) {
    const seccion = btn.closest('.seccion-caja');
    const wrap    = seccion.querySelector('.recursos-extra-wrap');
    const base    = seccion.querySelectorAll('.recurso-caja').length;
    const fila    = document.createElement('div');
    fila.className = 'recursos-extra-fila';
    let html = '';
    for (let i = 0; i < 4; i++) html += _recursosCajaHTML(base + i);
    fila.innerHTML = html;
    // Botón borrar fila
    const delBtn = document.createElement('button');
    delBtn.className = 'recursos-fila-del-btn';
    delBtn.textContent = '× Eliminar esta fila';
    delBtn.onclick = function() { fila.remove(); guardarDebounced(); };
    fila.appendChild(delBtn);
    wrap.appendChild(fila);
    guardarDebounced();
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
                if (contador) contadorFichas = parseInt(contador) - datos.length;
                datos.forEach(d => nuevaFicha(d));
                if (activa && fichas.find(f => f.id === activa)) activarFicha(activa);
                return;
            }
        }
    } catch(e) { console.warn('Error cargando datos:', e); }
    nuevaFicha();
};
// DND_SPELLS cargado desde hechizos.js

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — INICIALIZACIÓN
═══════════════════════════════════════════════════════ */
function initSpellcasting(panel) {
    // Rellenar cada selector de hechizos según su nivel
    panel.querySelectorAll('.spell-nivel-bloque').forEach(bloque => {
        const nivel = parseInt(bloque.dataset.nivel);
        const sel = bloque.querySelector('.spell-sel-hechizo');
        if (!sel) return;
        // Limpiar excepto placeholder
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
    const bloque = btn.closest('.spell-nivel-bloque');
    const checks = bloque.querySelectorAll('.slot-chk');
    if (checks.length >= 4) return;
    const checksDiv = bloque.querySelector('.spell-slots-checks');
    if (!checksDiv) return;
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

    // Buscar datos del hechizo
    const sp = (DND_SPELLS[nivel] || []).find(s => s.id === spId);
    if (!sp) return;

    // Evitar duplicados
    const lista = bloque.querySelector('.spell-lista-hechizos');
    if (lista.querySelector(`[data-spell-id="${spId}"]`)) {
        sel.value = '';
        return;
    }

    _renderSpellEntry(lista, sp);
    sel.value = '';
    guardarDebounced();
    const fichaPanel = btn.closest('.ficha-panel');
    if (fichaPanel) setTimeout(() => regenerarAccionesAuto(fichaPanel), 0);
}

function _renderSpellEntry(lista, sp) {
    const entry = document.createElement('div');
    entry.className = 'spell-entry';
    entry.dataset.spellId = sp.id;

    // Checkbox preparado
    const chkPrep = document.createElement('input');
    chkPrep.type = 'checkbox';
    chkPrep.className = 'spell-prep-chk';
    chkPrep.title = 'Preparado';
    chkPrep.addEventListener('change', () => guardarDebounced());

    // Nombre con tooltip
    const nombreWrap = document.createElement('div');
    nombreWrap.className = 'spell-entry-nombre-wrap';

    const nombre = document.createElement('span');
    nombre.className = 'spell-entry-nombre rollable-spell';
    nombre.title = 'Clic para tirar · Mantén para ver descripción';
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
    // Clic → tirar hechizo
    nombre.addEventListener('click', (e) => {
        e.stopPropagation();
        clearTimeout(_tooltipShowTimeout);
        ocultarTooltipHechizo();
        const panel = nombre.closest('.ficha-panel');
        if (panel) tirarHechizo(sp, panel);
    });

    // Tag de concentración (oculto hasta que se active)
    const concTag = document.createElement('span');
    concTag.className = 'spell-conc-tag';
    concTag.textContent = 'C';

    nombreWrap.appendChild(nombre);
    nombreWrap.appendChild(concTag);

    // Bolita concentración
    const concBtn = document.createElement('button');
    concBtn.className = 'spell-conc-btn';
    concBtn.title = 'Concentración';
    concBtn.addEventListener('click', () => {
        concBtn.classList.toggle('activo');
        // Mostrar/ocultar tag C
        concTag.style.display = concBtn.classList.contains('activo') ? 'inline' : 'none';
        guardarDebounced();
    });

    // Botón borrar
    const delBtn = document.createElement('button');
    delBtn.className = 'btn-spell-del';
    delBtn.textContent = '×';
    delBtn.title = 'Eliminar hechizo';
    delBtn.addEventListener('click', () => {
        const fichaPanel = entry.closest('.ficha-panel');
        entry.remove();
        guardarDebounced();
        if (fichaPanel) setTimeout(() => regenerarAccionesAuto(fichaPanel), 0);
    });

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
    // Buscar el tooltip dentro del panel activo
    const panel = fichas.find(f => f.id === fichaActual)?.panel;
    if (!panel) return;
    const tt = panel.querySelector('.spell-tooltip');
    if (!tt) return;

    tt.querySelector('.stt-nombre').textContent       = sp.n;
    tt.querySelector('.stt-nivel-escuela').textContent = `${sp.nivel} · ${sp.escuela}`;
    tt.querySelector('.stt-casting').textContent       = sp.casting;
    tt.querySelector('.stt-range').textContent         = sp.range;
    tt.querySelector('.stt-components').textContent    = sp.components;
    tt.querySelector('.stt-duration').textContent      = sp.duration;
    tt.querySelector('.stt-desc').textContent          = sp.desc;

    const dañoWrap = tt.querySelector('.stt-daño-wrap');
    if (sp.damage) {
        tt.querySelector('.stt-damage').textContent = sp.damage;
        dañoWrap.style.display = '';
    } else {
        dañoWrap.style.display = 'none';
    }

    const extraWrap = tt.querySelector('.stt-extra-wrap');
    const extraEl   = tt.querySelector('.stt-extra');
    if (sp.extra) {
        extraEl.textContent = sp.extra;
        extraWrap.style.display = '';
    } else {
        extraWrap.style.display = 'none';
    }

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
    const statEl = panel.querySelector('.spell-stat-sel');
    d.spellStat      = statEl?.value || '';
    d.spellDcExtra   = panel.querySelector('.spell-dc-extra')?.value  || '0';
    d.spellAtkExtra  = panel.querySelector('.spell-atk-extra')?.value || '0';
    const counts = panel.querySelectorAll('.spell-count-input');
    d.spellAprendidos = counts[0]?.value || '0';
    d.spellPreparados = counts[1]?.value || '0';

    d.spellNiveles = [];
    panel.querySelectorAll('.spell-nivel-bloque').forEach(bloque => {
        const nivel = parseInt(bloque.dataset.nivel);
        // Slots
        const slots = Array.from(bloque.querySelectorAll('.slot-chk')).map(c => c.checked);
        // Hechizos
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

        // Restaurar slots
        const checksDiv = bloque.querySelector('.spell-slots-checks');
        if (checksDiv && nd.slots && nd.slots.length > 0) {
            checksDiv.innerHTML = '';
            nd.slots.forEach(checked => {
                const wrap = document.createElement('div');
                wrap.className = 'slot-check-wrap';
                const chk = document.createElement('input');
                chk.type = 'checkbox';
                chk.className = 'slot-chk';
                chk.checked = checked;
                chk.addEventListener('change', () => guardarDebounced());
                const del = document.createElement('button');
                del.className = 'slot-del-btn';
                del.textContent = '×';
                del.addEventListener('click', (e) => { e.stopPropagation(); wrap.remove(); guardarDebounced(); });
                wrap.appendChild(chk);
                wrap.appendChild(del);
                checksDiv.appendChild(wrap);
            });
        }

        // Restaurar hechizos
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
                if (concBtn && h.conc) {
                    concBtn.classList.add('activo');
                    if (concTag) concTag.style.display = 'inline';
                }
            });
        }
    });

    recalcSpellcasting(panel);
}

/* ═══════════════════════════════════════════════════════
   PATCH: integrar en guardarTodo / cargarDatosEnPanel
═══════════════════════════════════════════════════════ */
// Sobreescribir leerFicha para incluir spellcasting
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

// recalcSpellcasting se llama ya desde actualizarTodoPanel (ver patch abajo)

// Sobreescribir actualizarTodoPanel para recalcular spell stats
const _actualizarTodoPanelOrig = actualizarTodoPanel;
actualizarTodoPanel = function(panel) {
    _actualizarTodoPanelOrig(panel);
    recalcSpellcasting(panel);
};

/* WIDGET DADOS */
function toggleDadosWidget() {
    var w = document.getElementById('dados-widget');
    if (!w) return;
    var min = w.classList.toggle('is-min');
    try { localStorage.setItem('dnd_dados_min', min ? '1' : '0'); } catch(e) {}
}
function dadosInitWidget(){
    var c=document.getElementById('dados-filas');
    if(!c||c.children.length>0)return;
    dadosAddFila(true);
    try {
        if (localStorage.getItem('dnd_dados_min') === '1') {
            var w = document.getElementById('dados-widget');
            if (w) w.classList.add('is-min');
        }
    } catch(e) {}
}
function dadosAddFila(primera){
    var c=document.getElementById('dados-filas');
    if(!c)return;
    var idx=c.children.length;
    var fila=document.createElement('div');
    fila.className='dados-fila';
    var h='<label>'+(idx+1)+'.</label>';
    h+='<select class="dados-tipo">';
    h+='<option value="4">d4</option>';
    h+='<option value="6">d6</option>';
    h+='<option value="8">d8</option>';
    h+='<option value="10">d10</option>';
    h+='<option value="12">d12</option>';
    h+='<option value="20" selected>d20</option>';
    h+='<option value="100">d%</option>';
    h+='</select>';
    h+='<input type="number" class="dados-num" value="1" min="1" max="20">';
    h+='<span class="dados-bono-label">+</span>';
    h+='<input type="number" class="dados-bono" value="0" min="-99" max="99">';
    if(!primera)h+='<button class="dados-del-btn" onclick="dadosDelFila(this)">×</button>';
    fila.innerHTML=h;
    c.appendChild(fila);
    _dadosRenumerar();
}
function dadosDelFila(btn){
    btn.closest('.dados-fila').remove();
    _dadosRenumerar();
}
function _dadosRenumerar(){
    var fs=document.querySelectorAll('#dados-filas .dados-fila');
    for(var i=0;i<fs.length;i++){var l=fs[i].querySelector('label');if(l)l.textContent=(i+1)+'.';}
}
function dadosRealizarTirada(){
    var fs=document.querySelectorAll('#dados-filas .dados-fila');
    if(!fs.length)return;
    var total=0,partes=[];
    for(var i=0;i<fs.length;i++){
        var caras=parseInt(fs[i].querySelector('.dados-tipo').value)||20;
        var num=Math.max(1,Math.min(20,parseInt(fs[i].querySelector('.dados-num').value)||1));
        var bonus=parseInt(fs[i].querySelector('.dados-bono').value)||0;
        var rolls=[];
        for(var r=0;r<num;r++)rolls.push(Math.floor(Math.random()*caras)+1);
        var sd=rolls.reduce(function(a,b){return a+b;},0);
        total+=sd+bonus;
        var p=num+'d'+caras+' ['+rolls.join(', ')+']';
        if(bonus>0)p+='+'+bonus;else if(bonus<0)p+=bonus;
        partes.push(p);
    }
    var log=document.getElementById('log-lista');
    if(!log)return;
    var div=document.createElement('div');
    div.className='log-entrada dados-custom';
    div.innerHTML='<strong>🎲 Tirada personalizada</strong><div class="res"><span>'+total+'</span><small>'+partes.join(' + ')+'</small></div>';
    log.prepend(div);
}
dadosInitWidget(); // Script al final de <body>: DOM ya listo

/* ═══════════════════════════════════════════════════════
   EXPORTAR / IMPORTAR JSON
═══════════════════════════════════════════════════════ */
function exportarFichasJSON() {
    guardarTodo();
    const datos = fichas.map(f => leerFicha(f.panel));
    const json = JSON.stringify(datos, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const nombre = datos[0]?.nombre?.trim() || 'personaje';
    a.download = `dnd_fichas_${nombre.replace(/\s+/g,'_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importarFichasJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const datos = JSON.parse(e.target.result);
            if (!Array.isArray(datos)) throw new Error('Formato inválido');
            // Cerrar fichas actuales y recrear
            [...fichas].forEach(f => {
                f.panel.remove();
                const tab = document.querySelector(`.pestana[data-ficha-id="${f.id}"]`);
                if (tab) tab.remove();
            });
            fichas = [];
            fichaActual = null;
            contadorFichas = 0;
            datos.forEach(d => nuevaFicha(d));
            guardarTodo();
        } catch(err) {
            alert('Error al importar: el archivo no es válido.\n' + err.message);
        }
    };
    reader.readAsText(file);
    // Reset input para poder reimportar el mismo archivo
    event.target.value = '';
}

/* ═══════════════════════════════════════════════════════
   PÁGINA DE ROLEPLAY
═══════════════════════════════════════════════════════ */

// ── Imagen de apariencia ──────────────────────────────
function roleplayCargarImagen(event, input) {
    const file = event.target.files[0];
    if (!file) return;
    const contenedor = input.closest('.apariencia-contenedor');
    const reader = new FileReader();
    reader.onload = function(e) {
        _roleplaySetImagen(contenedor, e.target.result);
        guardarDebounced();
    };
    reader.readAsDataURL(file);
}

function roleplayDropImagen(event, contenedor) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        _roleplaySetImagen(contenedor, e.target.result);
        guardarDebounced();
    };
    reader.readAsDataURL(file);
}

function _roleplaySetImagen(contenedor, src) {
    const img = contenedor.querySelector('.apariencia-img');
    const placeholder = contenedor.querySelector('.apariencia-placeholder');
    const btnBorrar = contenedor.querySelector('.apariencia-btn-borrar');
    img.src = src;
    img.style.display = 'block';
    placeholder.style.display = 'none';
    btnBorrar.style.display = 'flex';
    contenedor.style.borderStyle = 'solid';
}

function roleplayBorrarImagen(btn) {
    const contenedor = btn.closest('.apariencia-contenedor');
    const img = contenedor.querySelector('.apariencia-img');
    const placeholder = contenedor.querySelector('.apariencia-placeholder');
    img.src = '';
    img.style.display = 'none';
    placeholder.style.display = 'flex';
    btn.style.display = 'none';
    contenedor.style.borderStyle = 'dashed';
    // Reset file input
    const fileInput = contenedor.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
    guardarDebounced();
}

// ── Inicialización de sub-tabs en paneles fijos del template ─────────
/* Convierte los paneles fijos del HTML (que tienen un textarea suelto)
   en paneles con barra de sub-tabs. Se llama una sola vez al crear la ficha. */
/* Engancha listeners en selectores de clase/subclase/especie y textarea de dotes
   para regenerar acciones auto cuando cambian. */
/* ═══════════════════════════════════════════════════════
   MULTICLASE — SELECTOR DE CLASE Y NIVEL EN CABECERA
═══════════════════════════════════════════════════════ */

/* ── Tablas de datos por clase ──────────────────────────
   diceHit: dado de golpe
   casting: 'full' | 'half' | 'third' | 'none' | 'warlock'
   spellStat: estadística de lanzamiento por defecto
   knownCaster: true si aprende conjuros (Bardo, Mago, etc.)
   preparedFormula: función (nivel, mod) => nº de hechizos preparados
──────────────────────────────────────────────────────── */
const CLASE_DATA = {
    'Bárbaro':    { diceHit:'d12', casting:'none' },
    'Bardo':      { diceHit:'d8',  casting:'full',    spellStat:'CAR', knownCaster:true  },
    'Clérigo':    { diceHit:'d8',  casting:'full',    spellStat:'SAB', knownCaster:false,
                    preparedFormula:(nv,mod) => nv + mod },
    'Druida':     { diceHit:'d8',  casting:'full',    spellStat:'SAB', knownCaster:false,
                    preparedFormula:(nv,mod) => nv + mod },
    'Guerrero':   { diceHit:'d10', casting:'none' },
    'Explorador': { diceHit:'d10', casting:'half',    spellStat:'SAB', knownCaster:true  },
    'Monje':      { diceHit:'d8',  casting:'none' },
    'Paladín':    { diceHit:'d10', casting:'half',    spellStat:'CAR', knownCaster:false,
                    preparedFormula:(nv,mod) => Math.floor(nv/2) + mod },
    'Pícaro':     { diceHit:'d8',  casting:'none' },
    'Hechicero':  { diceHit:'d6',  casting:'full',    spellStat:'CAR', knownCaster:true  },
    'Warlock':    { diceHit:'d8',  casting:'warlock', spellStat:'CAR', knownCaster:true  },
    'Mago':       { diceHit:'d6',  casting:'full',    spellStat:'INT', knownCaster:true  },
    'Ranger':     { diceHit:'d10', casting:'half',    spellStat:'SAB', knownCaster:true  },
};

/* ── Tabla de slots por nivel efectivo (PHB 2024 multiclase) ──
   Índices [0..9] = slots nivel 1..9 para nivel efectivo 1..20 */
const SLOTS_POR_NIVEL = [
  //  1   2   3   4   5   6   7   8   9
    [ 2,  0,  0,  0,  0,  0,  0,  0,  0], // nivel efectivo 1
    [ 3,  0,  0,  0,  0,  0,  0,  0,  0], // 2
    [ 4,  2,  0,  0,  0,  0,  0,  0,  0], // 3
    [ 4,  3,  0,  0,  0,  0,  0,  0,  0], // 4
    [ 4,  3,  2,  0,  0,  0,  0,  0,  0], // 5
    [ 4,  3,  3,  0,  0,  0,  0,  0,  0], // 6
    [ 4,  3,  3,  1,  0,  0,  0,  0,  0], // 7
    [ 4,  3,  3,  2,  0,  0,  0,  0,  0], // 8
    [ 4,  3,  3,  3,  1,  0,  0,  0,  0], // 9
    [ 4,  3,  3,  3,  2,  0,  0,  0,  0], // 10
    [ 4,  3,  3,  3,  2,  1,  0,  0,  0], // 11
    [ 4,  3,  3,  3,  2,  1,  0,  0,  0], // 12
    [ 4,  3,  3,  3,  2,  1,  1,  0,  0], // 13
    [ 4,  3,  3,  3,  2,  1,  1,  0,  0], // 14
    [ 4,  3,  3,  3,  2,  1,  1,  1,  0], // 15
    [ 4,  3,  3,  3,  2,  1,  1,  1,  0], // 16
    [ 4,  3,  3,  3,  2,  1,  1,  1,  1], // 17
    [ 4,  3,  3,  3,  3,  1,  1,  1,  1], // 18
    [ 4,  3,  3,  3,  3,  2,  1,  1,  1], // 19
    [ 4,  3,  3,  3,  3,  2,  2,  1,  1], // 20
];

/* Slots de Warlock (Pact Magic) - siempre de nivel máximo disponible, pocos pero recuperables */
const WARLOCK_SLOTS = [
    [1,0],[2,0],[2,1],[2,1],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],
    [3,2],[3,2],[3,2],[3,2],[3,2],[3,2],[4,3],[4,3],[4,3],[4,3]
]; // [cantidad, nivel_max_idx_0=1] para niveles 1-20

/* Cantrips conocidos por clase y nivel (tabla PHB 2024) */
const CANTRIPS_CONOCIDOS = {
    full:    [0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4],
    half:    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    warlock: [0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4],
    Bardo:   [0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4],
    Mago:    [0,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5],
    Clérigo: [0,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5],
    Druida:  [0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4],
};

/* Hechizos conocidos por clase known-casters (Bardo, Hechicero, etc.) */
const HECHIZOS_CONOCIDOS = {
    Bardo:      [0,4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22],
    Hechicero:  [0,2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,15],
    Warlock:    [0,2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15],
    Ranger:     [0,0,2,3,4,5,6,7,8,9,10,11,11,12,13,13,14,14,15,15],
    Explorador: [0,0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,12,13],
};

/* ── Bono de Competencia por nivel total ── */
function calcPB(nivelTotal) {
    if (nivelTotal >= 17) return 6;
    if (nivelTotal >= 13) return 5;
    if (nivelTotal >= 9)  return 4;
    if (nivelTotal >= 5)  return 3;
    return 2;
}

/* ── Nivel efectivo de lanzamiento multiclase ── */
function calcNivelEfectivoSpell(multiclases) {
    let efectivo = 0;
    multiclases.forEach(mc => {
        const data = _getClaseData(mc.clase);
        const nv   = parseInt(mc.nivel) || 0;
        if (data.casting === 'full')    efectivo += nv;
        else if (data.casting === 'half')  efectivo += Math.floor(nv / 2);
        else if (data.casting === 'third') efectivo += Math.floor(nv / 3);
        // warlock se trata aparte; none no suma
    });
    return Math.min(efectivo, 20);
}

/* Obtiene datos de clase — busca en CLASE_DATA o devuelve defaults */
function _getClaseData(nombreClase) {
    if (!nombreClase) return { diceHit:'d8', casting:'none' };
    // Búsqueda exacta primero, luego parcial
    if (CLASE_DATA[nombreClase]) return CLASE_DATA[nombreClase];
    const lower = nombreClase.toLowerCase();
    for (const [key, val] of Object.entries(CLASE_DATA)) {
        if (key.toLowerCase() === lower || lower.includes(key.toLowerCase())) return val;
    }
    return { diceHit:'d8', casting:'none' };
}

/* ── Construye una fila de clase en el widget ── */
function _multiclaseFila(claseNombre, nivel) {
    const fila = document.createElement('div');
    fila.className = 'multiclase-fila';

    // Selector de clase
    const sel = document.createElement('select');
    sel.className = 'multiclase-sel';
    sel.innerHTML = '<option value="">— Clase —</option>';
    // Poblar con DND_CLASES si disponible, sino con CLASE_DATA
    const opciones = typeof DND_CLASES !== 'undefined'
        ? Object.keys(DND_CLASES)
        : Object.keys(CLASE_DATA);
    opciones.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        if (c === claseNombre) opt.selected = true;
        sel.appendChild(opt);
    });

    // Selector de nivel 1-20
    const selNv = document.createElement('select');
    selNv.className = 'multiclase-nivel';
    for (let i = 1; i <= 20; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `Nv. ${i}`;
        if (i === (parseInt(nivel) || 1)) opt.selected = true;
        selNv.appendChild(opt);
    }

    // Botón eliminar
    const delBtn = document.createElement('button');
    delBtn.className = 'multiclase-del';
    delBtn.textContent = '×';
    delBtn.title = 'Eliminar clase';

    fila.appendChild(sel);
    fila.appendChild(selNv);
    fila.appendChild(delBtn);

    // Eventos
    const onChange = () => {
        const fichaPanel = fila.closest('.ficha-panel');
        if (fichaPanel) multiclaseActualizar(fichaPanel);
    };
    sel.addEventListener('change', onChange);
    selNv.addEventListener('change', onChange);
    delBtn.addEventListener('click', () => {
        // No borrar si es la única fila
        const lista = fila.closest('.multiclase-lista');
        if (lista && lista.querySelectorAll('.multiclase-fila').length <= 1) return;
        fila.remove();
        const fichaPanel = delBtn.closest('.ficha-panel');
        if (fichaPanel) multiclaseActualizar(fichaPanel);
    });

    return fila;
}

/* ── Añadir nueva clase al widget ── */
function multiclaseAñadir(btn) {
    const lista = btn.closest('.multiclase-widget').querySelector('.multiclase-lista');
    const fila = _multiclaseFila('', 1);
    lista.appendChild(fila);
    fila.querySelector('.multiclase-sel').focus();
    const fichaPanel = btn.closest('.ficha-panel');
    if (fichaPanel) multiclaseActualizar(fichaPanel);
}

/* ── Leer datos actuales del widget ── */
function leerMulticlases(fichaPanel) {
    const filas = fichaPanel.querySelectorAll('.multiclase-fila');
    return Array.from(filas).map(f => ({
        clase: f.querySelector('.multiclase-sel')?.value || '',
        nivel: parseInt(f.querySelector('.multiclase-nivel')?.value) || 1,
    }));
}

/* ── Cargar multiclases en el widget (desde guardado) ── */
function cargarMulticlases(fichaPanel, datos) {
    const lista = fichaPanel.querySelector('.multiclase-lista');
    if (!lista) return;
    lista.innerHTML = '';
    const arr = Array.isArray(datos) && datos.length ? datos : [{ clase:'', nivel:1 }];
    arr.forEach(mc => lista.appendChild(_multiclaseFila(mc.clase, mc.nivel)));
    // No llamar a multiclaseActualizar aquí — se llama desde cargarDatosEnPanel después
}

/* ── ACTUALIZACIÓN CENTRAL: recalcula todo al cambiar clase/nivel ── */
function multiclaseActualizar(fichaPanel) {
    const mcs = leerMulticlases(fichaPanel).filter(mc => mc.clase);
    if (!mcs.length) return;

    const nivelTotal = mcs.reduce((s, mc) => s + (parseInt(mc.nivel)||0), 0);

    // 1. Bono de Competencia
    const pb = calcPB(nivelTotal);
    const pbInput = fichaPanel.querySelector('.pb-input');
    if (pbInput) {
        pbInput.value = pb;
        actualizarTodoPanel(fichaPanel);
    }

    // 2. Sincronizar con selector de clase de Características (primera clase)
    const selClaseCaract = fichaPanel.querySelector('.sel-clase');
    if (selClaseCaract && mcs[0]?.clase) {
        if (selClaseCaract.querySelector(`option[value="${mcs[0].clase}"]`)) {
            selClaseCaract.value = mcs[0].clase;
            // Disparar evento para que onClaseChange actualice subclases
            selClaseCaract.dispatchEvent(new Event('change'));
        }
    }

    // 3. Dados de Golpe — sincronizar grupos
    _sincronizarDadosGolpe(fichaPanel, mcs);

    // 4. Spell slots
    _sincronizarSpellSlots(fichaPanel, mcs, nivelTotal);

    // 5. Aprendidos y Preparados
    _sincronizarSpellCounts(fichaPanel, mcs);

    // 6. Regenerar acciones auto
    setTimeout(() => regenerarAccionesAuto(fichaPanel), 50);

    guardarDebounced();
}

/* ── Sincronizar dados de golpe ── */
function _sincronizarDadosGolpe(fichaPanel, mcs) {
    const wrap = fichaPanel.querySelector('.dg-grupos-wrap');
    if (!wrap) return;

    // Leer checks actuales para preservarlos
    const checksPrevios = {};
    wrap.querySelectorAll('.dg-grupo').forEach(g => {
        const tipo = g.querySelector('.dg-tipo')?.value;
        const chks = Array.from(g.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]')).map(c => c.checked);
        if (tipo) checksPrevios[tipo] = chks;
    });

    wrap.innerHTML = '';

    mcs.forEach(mc => {
        const data = _getClaseData(mc.clase);
        const tipo = data.diceHit || 'd8';
        const total = parseInt(mc.nivel) || 1;
        const g = dgCrearGrupo(tipo, total);
        wrap.appendChild(g);
        // Restaurar checks si los había
        if (checksPrevios[tipo]) {
            const chkEls = g.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]');
            checksPrevios[tipo].forEach((val, i) => { if (chkEls[i]) chkEls[i].checked = val; });
        }
        actualizarDadosGolpePanel(g.querySelector('.dg-total'));
    });
}

/* ── Sincronizar spell slots ── */
function _sincronizarSpellSlots(fichaPanel, mcs, nivelTotal) {
    // Calcular nivel efectivo (excluye warlock, suma full/half/third)
    const nivelEfectivo = calcNivelEfectivoSpell(mcs);

    // Slots de la tabla multiclase (niveles 1-9)
    const slots = nivelEfectivo > 0
        ? SLOTS_POR_NIVEL[Math.min(nivelEfectivo, 20) - 1]
        : Array(9).fill(0);

    // Warlock: añadir Pact Magic por encima
    const warlockMC = mcs.find(mc => _getClaseData(mc.clase).casting === 'warlock');
    let warlockSlots = 0, warlockNivel = 0;
    if (warlockMC) {
        const wNv = parseInt(warlockMC.nivel) - 1; // 0-indexed
        warlockSlots = WARLOCK_SLOTS[Math.min(wNv, 19)][0];
        warlockNivel = WARLOCK_SLOTS[Math.min(wNv, 19)][1];
    }

    // Actualizar cada bloque de nivel
    for (let nivel = 1; nivel <= 9; nivel++) {
        const bloque = fichaPanel.querySelector(`.spell-nivel-bloque[data-nivel="${nivel}"]`);
        if (!bloque) continue;
        const checksDiv = bloque.querySelector('.spell-slots-checks');
        if (!checksDiv) continue;

        // Calcular cuántos slots queremos
        let cantidad = slots[nivel - 1] || 0;
        // Sumar warlock si aplica
        if (warlockMC && nivel === warlockNivel + 1) cantidad += warlockSlots;

        // Limpiar y reconstruir slots
        checksDiv.innerHTML = '';
        for (let i = 0; i < Math.min(cantidad, 4); i++) {
            const wrap = document.createElement('div');
            wrap.className = 'slot-check-wrap';
            const chk = document.createElement('input');
            chk.type = 'checkbox'; chk.className = 'slot-chk'; chk.checked = true;
            chk.addEventListener('change', () => guardarDebounced());
            const del = document.createElement('button');
            del.className = 'slot-del-btn'; del.textContent = '×'; del.title = 'Quitar slot';
            del.addEventListener('click', e => { e.stopPropagation(); wrap.remove(); guardarDebounced(); });
            wrap.appendChild(chk); wrap.appendChild(del);
            checksDiv.appendChild(wrap);
        }
    }
}

/* ── Sincronizar aprendidos y preparados ── */
function _sincronizarSpellCounts(fichaPanel, mcs) {
    const counts = fichaPanel.querySelectorAll('.spell-count-input');
    if (counts.length < 2) return;

    // Stat mod del lanzador principal
    const spellStatSel = fichaPanel.querySelector('.spell-stat-sel');
    const statKey = spellStatSel?.value || 'INT';
    const statMap = { STR:'str', DEX:'dex', CON:'con', INT:'int', WIS:'wis', CHA:'cha',
                      FUE:'str', DES:'dex', SAB:'wis', CAR:'cha',
                      SABIDURÍA:'wis', INTELIGENCIA:'int', CARISMA:'cha',
                      FUERZA:'str', DESTREZA:'dex', CONSTITUCIÓN:'con' };
    const statEl = fichaPanel.querySelector(`.stat-score[data-stat="${statMap[statKey] || 'int'}"]`);
    const statVal = parseInt(statEl?.value) || 10;
    const mod = Math.floor((statVal - 10) / 2);

    // Calcular totales sumando todas las clases lanzadoras
    let totalAprendidos = 0, totalPreparados = 0;
    mcs.forEach(mc => {
        const data = _getClaseData(mc.clase);
        const nv = parseInt(mc.nivel) || 0;
        if (data.casting === 'none') return;

        // Cantrips para aprendidos
        const cantripTable = CANTRIPS_CONOCIDOS[mc.clase] || CANTRIPS_CONOCIDOS[data.casting] || [];
        totalAprendidos += cantripTable[Math.min(nv, 20) - 1] || 0;

        if (data.knownCaster && HECHIZOS_CONOCIDOS[mc.clase]) {
            totalAprendidos += HECHIZOS_CONOCIDOS[mc.clase][Math.min(nv, 20) - 1] || 0;
        }

        if (data.preparedFormula) {
            totalPreparados += Math.max(1, data.preparedFormula(nv, mod));
        } else if (data.knownCaster && HECHIZOS_CONOCIDOS[mc.clase]) {
            totalPreparados += HECHIZOS_CONOCIDOS[mc.clase][Math.min(nv, 20) - 1] || 0;
        }
    });

    if (totalAprendidos > 0) counts[0].value = totalAprendidos;
    if (totalPreparados > 0) counts[1].value = totalPreparados;
}

/* ── Init: crear fila inicial vacía si el widget está vacío ── */
function initMulticlaseWidget(fichaPanel) {
    const lista = fichaPanel.querySelector('.multiclase-lista');
    if (!lista) return;
    if (lista.children.length === 0) {
        lista.appendChild(_multiclaseFila('', 1));
    }
}

function _hookAutoAcciones(fichaPanel) {
    const re = () => regenerarAccionesAuto(fichaPanel);
    const delay = () => setTimeout(re, 50); // pequeño delay para que onClaseChange actualice primero

    const sels = ['.sel-clase', '.sel-subclase', '.sel-especie', '.sel-trasfondo'];
    sels.forEach(sel => {
        const el = fichaPanel.querySelector(sel);
        if (el) el.addEventListener('change', delay);
    });
    // Textarea de dotes: regenerar al escribir (con debounce implícito de guardarDebounced)
    const dotesTa = fichaPanel.querySelector('.caract-dotes');
    if (dotesTa) dotesTa.addEventListener('input', delay);
}

function initNotasSubpags(fichaPanel) {
    const IDS_FIJOS = ['diario','personas','lugares','objetos','sucesos','pistas'];
    IDS_FIJOS.forEach(id => {
        const panelEl = fichaPanel.querySelector(`.notas-panel[data-panel-id="${id}"]`);
        if (!panelEl) return;
        // Si ya fue inicializado (tiene sub-barra), saltar
        if (panelEl.querySelector('.notas-subpags-barra')) return;

        // Rescatar texto existente del textarea suelto (si lo hubiera)
        const textoExistente = panelEl.querySelector('.notas-textarea')?.value || '';
        panelEl.innerHTML = '';

        const subBarra = document.createElement('div');
        subBarra.className = 'notas-subpags-barra';

        const subLista = document.createElement('div');
        subLista.className = 'notas-subpags-lista';
        subBarra.appendChild(subLista);

        const addBtn = document.createElement('button');
        addBtn.className = 'notas-subpag-add';
        addBtn.title = 'Nueva página';
        addBtn.textContent = '+';
        addBtn.addEventListener('click', () => notasAñadirSubpag(panelEl));
        subBarra.appendChild(addBtn);
        panelEl.appendChild(subBarra);

        const subContenido = document.createElement('div');
        subContenido.className = 'notas-subpags-contenido';
        panelEl.appendChild(subContenido);

        _notasCrearSubpag(panelEl, _subpagId(), 'Página 1', textoExistente, true);
    });
}

// ── Tabs de notas ─────────────────────────────────────

/* Crea la estructura interna de un panel de notas:
   una barra de sub-tabs + los sub-paneles correspondientes.
   tabId: id de la tab padre (ej: "diario").
   páginas: array de { id, nombre, contenido } — si null, crea una página por defecto. */
function _notasConstruirPanel(tabId, paginas) {
    const panelEl = document.createElement('div');
    panelEl.className = 'notas-panel';
    panelEl.dataset.panelId = tabId;

    const subBarra = document.createElement('div');
    subBarra.className = 'notas-subpags-barra';

    const subLista = document.createElement('div');
    subLista.className = 'notas-subpags-lista';
    subBarra.appendChild(subLista);

    const addBtn = document.createElement('button');
    addBtn.className = 'notas-subpag-add';
    addBtn.title = 'Nueva página';
    addBtn.textContent = '+';
    addBtn.addEventListener('click', () => notasAñadirSubpag(panelEl));
    subBarra.appendChild(addBtn);

    panelEl.appendChild(subBarra);

    const subContenido = document.createElement('div');
    subContenido.className = 'notas-subpags-contenido';
    panelEl.appendChild(subContenido);

    // Crear páginas
    const lista = paginas && paginas.length ? paginas : [{ id: _subpagId(), nombre: 'Página 1', contenido: '' }];
    lista.forEach((pg, i) => _notasCrearSubpag(panelEl, pg.id, pg.nombre, pg.contenido, i === 0));

    return panelEl;
}

function _subpagId() { return 'sp-' + Date.now() + '-' + Math.random().toString(36).slice(2,6); }

/* Crea una sub-tab + sub-panel dentro de un panel de notas. */
function _notasCrearSubpag(panelEl, spId, nombre, contenido, activo) {
    const lista = panelEl.querySelector('.notas-subpags-lista');
    const contenedor = panelEl.querySelector('.notas-subpags-contenido');

    // Sub-tab
    const tab = document.createElement('div');
    tab.className = 'notas-subpag-tab' + (activo ? ' activo' : '');
    tab.dataset.spId = spId;

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'notas-subpag-nombre';
    nameInput.value = nombre;
    nameInput.addEventListener('click', (e) => { e.stopPropagation(); });
    nameInput.addEventListener('input', () => guardarDebounced());

    const delBtn = document.createElement('button');
    delBtn.className = 'notas-subpag-del';
    delBtn.textContent = '×';
    delBtn.title = 'Borrar página';
    delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notasBorrarSubpag(panelEl, spId);
    });

    tab.appendChild(nameInput);
    tab.appendChild(delBtn);
    tab.addEventListener('click', () => notasCambiarSubpag(panelEl, spId));
    lista.appendChild(tab);

    // Sub-panel
    const sp = document.createElement('div');
    sp.className = 'notas-subpag-panel' + (activo ? ' activo' : '');
    sp.dataset.spId = spId;

    const ta = document.createElement('textarea');
    ta.className = 'notas-textarea';
    ta.placeholder = 'Escribe aquí...';
    ta.value = contenido || '';
    ta.addEventListener('input', () => guardarDebounced());
    sp.appendChild(ta);
    contenedor.appendChild(sp);
}

function notasCambiarSubpag(panelEl, spId) {
    panelEl.querySelectorAll('.notas-subpag-tab').forEach(t => t.classList.toggle('activo', t.dataset.spId === spId));
    panelEl.querySelectorAll('.notas-subpag-panel').forEach(p => p.classList.toggle('activo', p.dataset.spId === spId));
    guardarDebounced();
}

function notasAñadirSubpag(panelEl) {
    const existentes = panelEl.querySelectorAll('.notas-subpag-tab').length;
    const spId = _subpagId();
    const nombre = 'Página ' + (existentes + 1);
    _notasCrearSubpag(panelEl, spId, nombre, '', false);
    notasCambiarSubpag(panelEl, spId);
    guardarDebounced();
}

function notasBorrarSubpag(panelEl, spId) {
    const tabs = panelEl.querySelectorAll('.notas-subpag-tab');
    if (tabs.length <= 1) return; // no borrar la última
    const eraActivo = panelEl.querySelector(`.notas-subpag-tab[data-sp-id="${spId}"]`)?.classList.contains('activo');
    panelEl.querySelector(`.notas-subpag-tab[data-sp-id="${spId}"]`)?.remove();
    panelEl.querySelector(`.notas-subpag-panel[data-sp-id="${spId}"]`)?.remove();
    if (eraActivo) {
        const primera = panelEl.querySelector('.notas-subpag-tab');
        if (primera) notasCambiarSubpag(panelEl, primera.dataset.spId);
    }
    guardarDebounced();
}

/* Lee las sub-páginas de un panel como array de { id, nombre, contenido }. */
function _notasLeerSubpags(panelEl) {
    const pags = [];
    panelEl.querySelectorAll('.notas-subpag-tab').forEach(tab => {
        const spId = tab.dataset.spId;
        const nombre = tab.querySelector('.notas-subpag-nombre')?.value || '';
        const sp = panelEl.querySelector(`.notas-subpag-panel[data-sp-id="${spId}"] .notas-textarea`);
        pags.push({ id: spId, nombre, contenido: sp?.value || '' });
    });
    return pags;
}

function notasCambiarTab(btn) {
    const notas = btn.closest('.roleplay-notas');
    const tabId = btn.dataset.tabId;
    notas.querySelectorAll('.notas-tab').forEach(t => t.classList.remove('activo'));
    btn.classList.add('activo');
    notas.querySelectorAll('.notas-panel').forEach(p => p.classList.remove('activo'));
    const panel = notas.querySelector(`.notas-panel[data-panel-id="${tabId}"]`)
               || notas.querySelector(`.notas-paneles-custom .notas-panel[data-panel-id="${tabId}"]`);
    if (panel) panel.classList.add('activo');
}

function notasAñadirTab(btn) {
    const notas = btn.closest('.roleplay-notas');
    const tabId = 'custom-' + Date.now();

    // Tab principal
    const tab = document.createElement('button');
    tab.className = 'notas-tab';
    tab.dataset.tabId = tabId;
    tab.onclick = function() { notasCambiarTab(this); };
    tab.innerHTML = `<input class="notas-tab-nombre-edit" type="text" value="Nueva tab"
        onclick="event.stopPropagation()"
        onchange="guardarDebounced()"
        oninput="guardarDebounced()">
        <button class="notas-tab-cerrar" onclick="notasBorrarTab(event,this)" title="Eliminar tab">×</button>`;
    notas.querySelector('.notas-tabs-lista').appendChild(tab);

    // Panel con sub-tabs
    const panelEl = _notasConstruirPanel(tabId, null);
    notas.querySelector('.notas-paneles-custom').appendChild(panelEl);

    notasCambiarTab(tab);
    guardarDebounced();
}

function notasBorrarTab(event, btn) {
    event.stopPropagation();
    const tab = btn.closest('.notas-tab');
    const notas = tab.closest('.roleplay-notas');
    const tabId = tab.dataset.tabId;
    if (tab.classList.contains('activo')) {
        const primerTab = notas.querySelector('.notas-tab:not(.borrado-pendiente)');
        if (primerTab && primerTab !== tab) notasCambiarTab(primerTab);
    }
    const panel = notas.querySelector(`.notas-panel[data-panel-id="${tabId}"]`);
    if (panel) panel.remove();
    tab.remove();
    guardarDebounced();
}

// ── Guardar/cargar roleplay dentro de leerFicha/cargarDatosEnPanel ────
function leerRoleplay(panel) {
    const pag = panel.querySelector('.quinta-pagina');
    if (!pag) return null;
    const img = pag.querySelector('.apariencia-img');
    const historia = pag.querySelector('.roleplay-textarea-historia');

    // Tabs fijas — ahora cada una tiene sub-páginas
    const notas = {};
    ['diario','personas','lugares','objetos','sucesos','pistas'].forEach(id => {
        const panelEl = pag.querySelector(`.notas-panel[data-panel-id="${id}"]`);
        notas[id] = panelEl ? _notasLeerSubpags(panelEl) : [];
    });

    // Tabs custom
    const custom = [];
    pag.querySelectorAll('.notas-paneles-custom .notas-panel').forEach(p => {
        const tabId = p.dataset.panelId;
        const tabBtn = pag.querySelector(`.notas-tab[data-tab-id="${tabId}"]`);
        const nombre = tabBtn?.querySelector('.notas-tab-nombre-edit')?.value || 'Tab';
        custom.push({ id: tabId, nombre, paginas: _notasLeerSubpags(p) });
    });

    return {
        imagen: (img && img.src && img.style.display !== 'none') ? img.src : '',
        historia: historia ? historia.value : '',
        notas,
        custom
    };
}

function cargarRoleplay(panel, data) {
    if (!data) return;
    const pag = panel.querySelector('.quinta-pagina');
    if (!pag) return;

    if (data.imagen) {
        const contenedor = pag.querySelector('.apariencia-contenedor');
        if (contenedor) _roleplaySetImagen(contenedor, data.imagen);
    }
    const historia = pag.querySelector('.roleplay-textarea-historia');
    if (historia && data.historia) historia.value = data.historia;

    if (data.notas) {
        ['diario','personas','lugares','objetos','sucesos','pistas'].forEach(id => {
            const panelEl = pag.querySelector(`.notas-panel[data-panel-id="${id}"]`);
            if (!panelEl) return;
            const paginas = data.notas[id];
            // Compatibilidad con formato antiguo (string)
            if (typeof paginas === 'string') {
                const ta = panelEl.querySelector('.notas-textarea');
                if (ta) ta.value = paginas;
                return;
            }
            if (Array.isArray(paginas) && paginas.length) {
                // Limpiar y reconstruir sub-tabs
                panelEl.querySelector('.notas-subpags-lista').innerHTML = '';
                panelEl.querySelector('.notas-subpags-contenido').innerHTML = '';
                paginas.forEach((pg, i) => _notasCrearSubpag(panelEl, pg.id || _subpagId(), pg.nombre, pg.contenido, i === 0));
            }
        });
    }

    if (data.custom && Array.isArray(data.custom)) {
        data.custom.forEach(c => {
            const notasEl = pag.querySelector('.roleplay-notas');
            const tabId = c.id || ('custom-' + Date.now());
            const tab = document.createElement('button');
            tab.className = 'notas-tab';
            tab.dataset.tabId = tabId;
            tab.onclick = function() { notasCambiarTab(this); };
            tab.innerHTML = `<input class="notas-tab-nombre-edit" type="text" value="${_esc(c.nombre)}"
                onclick="event.stopPropagation()"
                onchange="guardarDebounced()"
                oninput="guardarDebounced()">
                <button class="notas-tab-cerrar" onclick="notasBorrarTab(event,this)" title="Eliminar tab">×</button>`;
            notasEl.querySelector('.notas-tabs-lista').appendChild(tab);

            // Compatibilidad con formato antiguo (contenido string)
            let paginas = c.paginas;
            if (!paginas && c.contenido !== undefined) {
                paginas = [{ id: _subpagId(), nombre: 'Página 1', contenido: c.contenido }];
            }
            const panelEl = _notasConstruirPanel(tabId, paginas);
            notasEl.querySelector('.notas-paneles-custom').appendChild(panelEl);
        });
    }
}


/* ═══════════════════════════════════════════════════════
   SPELLCASTING — TIRADAS DE HECHIZOS
   ═══════════════════════════════════════════════════════ */

/* ── Parser de dados ─────────────────────────────────────
   Extrae { qty, faces, tipo } del campo damage de un hechizo.
   Formato esperado: "XdY Tipo (escala...)" o "XdY Tipo"
   Devuelve null si no hay dados reales (ej: "+5 CA").
──────────────────────────────────────────────────────── */
function _parseDamageBase(damageStr) {
    if (!damageStr) return null;
    const m = damageStr.match(/^(\d+)d(\d+)\s+([A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)/i);
    if (!m) return null;
    return { qty: parseInt(m[1]), faces: parseInt(m[2]), tipo: m[3] };
}

/* Escalado de cantrips: tablas estándar D&D 5e 2024
   Devuelve multiplicador de dados según nivel de personaje. */
function _cantripScale(nivelPersonaje) {
    if (nivelPersonaje >= 17) return 4;
    if (nivelPersonaje >= 11) return 3;
    if (nivelPersonaje >= 5)  return 2;
    return 1;
}

/* Escalado de hechizos de nivel.
   Intenta parsear el patrón "(escala: +XdY/nivel)" o "(escala: +X/nivel)".
   Devuelve { qty, faces } de dados extra por nivel sobre el base, o null. */
function _parseEscalaHechizo(damageStr) {
    if (!damageStr) return null;
    // Patrón: "+1d6/nivel" o "+1d8/nivel"
    const mDice = damageStr.match(/escala:\s*\+(\d+)d(\d+)\/nivel/i);
    if (mDice) return { qty: parseInt(mDice[1]), faces: parseInt(mDice[2]), flat: 0 };
    // Patrón: "+1/nivel" (bono plano)
    const mFlat = damageStr.match(/escala:\s*\+(\d+)\/nivel/i);
    if (mFlat) return { qty: 0, faces: 0, flat: parseInt(mFlat[1]) };
    return null;
}

/* Escalado de cantrips con tabla propia: "(2dY Nv.5, 3dY Nv.11, 4dY Nv.17)"
   Devuelve qty de dados para el nivel dado o null si no hay tabla. */
function _cantripTableScale(damageStr, nivelPersonaje) {
    if (!damageStr || !damageStr.includes('Nv.')) return null;
    // Extraer todas las entradas Nv.XX
    const entradas = [];
    const re = /(\d+)d\d+\s+Nv\.(\d+)/gi;
    let m;
    while ((m = re.exec(damageStr)) !== null) {
        entradas.push({ qty: parseInt(m[1]), desde: parseInt(m[2]) });
    }
    if (!entradas.length) return null;
    // Ordenar descendente y coger la primera que aplique
    entradas.sort((a, b) => b.desde - a.desde);
    for (const e of entradas) {
        if (nivelPersonaje >= e.desde) return e.qty;
    }
    return null;
}

/* Detecta si un hechizo requiere tirada de ataque */
function _spellRequiereAtaque(sp) {
    if (!sp.desc) return false;
    return /ataque\s+a\s+distancia|ataque\s+cuerpo\s+a\s+cuerpo|tirada\s+de\s+ataque|melee\s+spell\s+attack|ranged\s+spell\s+attack/i.test(sp.desc);
}

/* Detecta si un hechizo requiere salvación y qué stat */
function _spellSalvacion(sp) {
    if (!sp.desc) return null;
    const m = sp.desc.match(/salvaci[oó]n\s+(?:de\s+)?([A-ZÁÉÍÓÚ]{3}|Fuerza|Destreza|Constituci[oó]n|Inteligencia|Sabidur[ií]a|Carisma)/i);
    if (!m) return null;
    const raw = m[1].toUpperCase();
    const mapa = { FUE:'Fuerza', DES:'Destreza', CON:'Constitución', INT:'Inteligencia',
                   SAB:'Sabiduría', CAR:'Carisma', STR:'Fuerza', DEX:'Destreza',
                   CONSTITUCIÓN:'Constitución', FUERZA:'Fuerza', DESTREZA:'Destreza',
                   INTELIGENCIA:'Inteligencia', SABIDURÍA:'Sabiduría', CARISMA:'Carisma' };
    return mapa[raw] || m[1];
}

/* ── Modal de nivel ──────────────────────────────────────
   Muestra un modal centrado con opciones de nivel y devuelve
   una Promise que resuelve al número elegido o null si cancela.
──────────────────────────────────────────────────────── */
function _modalNivel(titulo, opciones) {
    return new Promise(resolve => {
        // Overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position:fixed;inset:0;background:rgba(0,0,0,0.55);
            z-index:10000;display:flex;align-items:center;justify-content:center;`;

        const caja = document.createElement('div');
        caja.style.cssText = `
            background:#1a202c;border:2px solid #553c9a;border-radius:12px;
            padding:20px 24px;min-width:260px;max-width:340px;
            box-shadow:0 8px 32px rgba(0,0,0,0.6);color:#e2e8f0;font-family:inherit;`;

        const h = document.createElement('div');
        h.style.cssText = 'font-size:13px;font-weight:700;color:#b794f4;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:14px;';
        h.textContent = titulo;
        caja.appendChild(h);

        const grid = document.createElement('div');
        grid.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;';

        opciones.forEach(op => {
            const btn = document.createElement('button');
            btn.textContent = op.label;
            btn.style.cssText = `
                padding:8px 14px;background:#2d3748;border:1.5px solid #4a5568;
                border-radius:7px;color:#e2e8f0;font-size:13px;font-weight:600;
                cursor:pointer;transition:background 0.15s,border-color 0.15s;font-family:inherit;`;
            btn.addEventListener('mouseenter', () => { btn.style.background='#553c9a'; btn.style.borderColor='#805ad5'; });
            btn.addEventListener('mouseleave', () => { btn.style.background='#2d3748'; btn.style.borderColor='#4a5568'; });
            btn.addEventListener('click', () => { document.body.removeChild(overlay); resolve(op.value); });
            grid.appendChild(btn);
        });
        caja.appendChild(grid);

        const cancelar = document.createElement('button');
        cancelar.textContent = 'Cancelar';
        cancelar.style.cssText = `
            width:100%;padding:7px;background:transparent;border:1px solid #4a5568;
            border-radius:6px;color:#718096;font-size:12px;cursor:pointer;font-family:inherit;`;
        cancelar.addEventListener('click', () => { document.body.removeChild(overlay); resolve(null); });
        caja.appendChild(cancelar);

        overlay.appendChild(caja);
        // Cerrar al clicar fuera
        overlay.addEventListener('click', e => { if (e.target === overlay) { document.body.removeChild(overlay); resolve(null); } });
        document.body.appendChild(overlay);
    });
}

/* ── Gasta un slot del nivel indicado ───────────────────
   Busca el primer slot marcado (checked) en el bloque de ese nivel y lo desmarca.
   Devuelve true si lo encontró, false si no había slots disponibles.
──────────────────────────────────────────────────────── */
function _gastarSlot(panel, nivel) {
    const bloque = panel.querySelector(`.spell-nivel-bloque[data-nivel="${nivel}"]`);
    if (!bloque) return false;
    const slot = [...bloque.querySelectorAll('.slot-chk')].find(c => c.checked);
    if (!slot) return false;
    slot.checked = false;
    guardarDebounced();
    return true;
}

/* ── Tirar dados ─────────────────────────────────────────
   Tira qty dados de `faces` caras. Si esCrit, dobla qty.
   Devuelve { rolls, suma }.
──────────────────────────────────────────────────────── */
function _tirarDados(qty, faces, esCrit) {
    const n = esCrit ? qty * 2 : qty;
    const rolls = Array.from({ length: n }, () => Math.floor(Math.random() * faces) + 1);
    return { rolls, suma: rolls.reduce((a, b) => a + b, 0) };
}

/* ── Función principal: clic en nombre de hechizo ───────────────── */
async function tirarHechizo(sp, panel) {
    if (!sp || !panel) return;
    const esCantrip = sp.nivel === 'Truco';
    const base = _parseDamageBase(sp.damage);

    // ── Elegir nivel ─────────────────────────────────────
    let nivelLanzado = null;
    let nivelPersonaje = null;

    if (esCantrip) {
        const res = await _modalNivel('¿Nivel del personaje?', [
            {label:'1-4', value:1}, {label:'5-10', value:5},
            {label:'11-16', value:11}, {label:'17-20', value:17}
        ]);
        if (res === null) return;
        nivelPersonaje = res;
    } else {
        // Nivel base del hechizo (extraer número)
        const nivelBase = parseInt((sp.nivel || '').replace(/\D/g,'')) || 1;
        // Opciones: desde nivel base hasta 9
        const opts = [];
        for (let i = nivelBase; i <= 9; i++) {
            opts.push({ label: `Nivel ${i}`, value: i });
        }
        const res = await _modalNivel(`¿A qué nivel lanzar ${sp.n}?`, opts);
        if (res === null) return;
        nivelLanzado = res;
        const nivelBase2 = nivelBase; // alias para escalado

        // ── Gastar slot ───────────────────────────────────
        const slotGastado = _gastarSlot(panel, nivelLanzado);
        if (!slotGastado) {
            // Aviso pero sigue (puede haber usado magia innata, etc.)
            const aviso = document.createElement('div');
            aviso.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#744210;color:#fefcbf;padding:9px 14px;border-radius:8px;font-size:12px;font-weight:700;z-index:9999;border:1px solid #d69e2e;';
            aviso.textContent = `⚠ No hay slots de nivel ${nivelLanzado} disponibles`;
            document.body.appendChild(aviso);
            setTimeout(() => aviso.remove(), 3000);
        }
    }

    // ── Construir log ────────────────────────────────────
    const log = document.getElementById('log-lista');
    const div = document.createElement('div');
    const gV = panel.querySelector('.btn-ventaja').classList.contains('activo-ventaja');
    const gD = panel.querySelector('.btn-desventaja').classList.contains('activo-desventaja');

    // Etiqueta de nivel para el log
    const labelNivel = esCantrip
        ? `Truco (Nv. personaje ${nivelPersonaje === 17 ? '17-20' : nivelPersonaje === 11 ? '11-16' : nivelPersonaje === 5 ? '5-10' : '1-4'})`
        : `Nivel ${nivelLanzado}`;

    // ── Sin daño real ─────────────────────────────────────
    if (!base) {
        div.className = 'log-entrada spell-lanzado';
        div.innerHTML = `
            <strong>✨ ${sp.n} — ${labelNivel}</strong>
            <div class="res"><span style="font-size:13px;color:#b794f4">Lanzado</span>
            <small>${sp.damage || 'Sin daño'} · ${sp.casting}</small></div>`;
        log.prepend(div);
        panel.querySelector('.btn-ventaja').classList.remove('activo-ventaja');
        panel.querySelector('.btn-desventaja').classList.remove('activo-desventaja');
        return;
    }

    // ── Calcular dados finales ────────────────────────────
    let qtyFinal = base.qty;
    let flatBonus = 0;

    if (esCantrip) {
        // Intentar tabla propia primero, luego escala estándar
        const tablaQty = _cantripTableScale(sp.damage, nivelPersonaje);
        qtyFinal = tablaQty !== null ? tablaQty : base.qty * _cantripScale(nivelPersonaje);
    } else {
        const escala = _parseEscalaHechizo(sp.damage);
        const nivelBase = parseInt((sp.nivel || '').replace(/\D/g,'')) || 1;
        const nivelesExtra = nivelLanzado - nivelBase;
        if (escala && nivelesExtra > 0) {
            if (escala.qty > 0) {
                qtyFinal += escala.qty * nivelesExtra;
            } else {
                flatBonus += escala.flat * nivelesExtra;
            }
        }
    }

    const tieneAtaque = _spellRequiereAtaque(sp);
    const salvStat    = _spellSalvacion(sp);

    // ── Obtener bono de ataque / DC del panel ─────────────
    const spellAtkEl = panel.querySelector('.spell-atk-display');
    const spellDcEl  = panel.querySelector('.spell-dc-display');
    const spellAtk   = parseInt(spellAtkEl?.textContent) || 0;
    const spellDc    = parseInt(spellDcEl?.textContent)  || 8;

    // ── Hechizo con tirada de ataque ──────────────────────
    if (tieneAtaque) {
        const d1 = Math.floor(Math.random() * 20) + 1;
        const d2 = Math.floor(Math.random() * 20) + 1;
        let dImpacto, detalleImpacto, claseAdv = '';
        if      (gV) { dImpacto = Math.max(d1,d2); detalleImpacto = `[${d1},${d2}]→${dImpacto}`; claseAdv = 'ventaja'; }
        else if (gD) { dImpacto = Math.min(d1,d2); detalleImpacto = `[${d1},${d2}]→${dImpacto}`; claseAdv = 'desventaja'; }
        else         { dImpacto = d1; detalleImpacto = `${d1}`; }

        const totalImpacto = dImpacto + spellAtk;
        const esCrit  = dImpacto === 20;
        const esFallo = dImpacto === 1;

        const { rolls, suma } = _tirarDados(qtyFinal, base.faces, esCrit);
        const totalDaño = suma + flatBonus;
        const bonStr = spellAtk >= 0 ? `+${spellAtk}` : `${spellAtk}`;
        const critStr = esCrit ? ` ✦CRIT(${qtyFinal}d→${qtyFinal*2}d)` : '';
        const flatStr = flatBonus ? ` +${flatBonus}` : '';

        const impColor = esCrit ? 'crit-verde' : esFallo ? 'crit-rojo' : '';
        const impLabel = esCrit ? '¡CRÍTICO!' : esFallo ? 'Pifia' : 'impacto';

        div.className = `log-entrada spell-ataque${esCrit?' critico':''}`;
        div.innerHTML = `
            <strong>✨ ${sp.n} — ${labelNivel}</strong>
            <div class="res">
                <span class="${impColor}">${totalImpacto}</span>
                <small>🎯 ${impLabel} (${detalleImpacto} ${bonStr})</small>
            </div>
            <hr class="log-sep">
            <div class="log-daño-linea">
                <span>${totalDaño}</span>
                <small>${base.tipo} (${rolls.join('+')}${flatStr}${critStr})</small>
            </div>`;

    // ── Hechizo con salvación ──────────────────────────────
    } else if (salvStat) {
        const { rolls, suma } = _tirarDados(qtyFinal, base.faces, false);
        const totalDaño = suma + flatBonus;
        const flatStr = flatBonus ? ` +${flatBonus}` : '';

        div.className = 'log-entrada spell-salv';
        div.innerHTML = `
            <strong>✨ ${sp.n} — ${labelNivel}</strong>
            <div class="res" style="margin-bottom:4px">
                <span style="font-size:13px;font-weight:700;color:#f6e05e">CD ${spellDc}</span>
                <small>🛡 Salvación de ${salvStat}</small>
            </div>
            <hr class="log-sep">
            <div class="log-daño-linea">
                <span>${totalDaño}</span>
                <small>${base.tipo} (${rolls.join('+')}${flatStr}) · mitad en éxito</small>
            </div>`;

    // ── Hechizo solo daño (sin ataque ni salvación explícita) ─
    } else {
        const { rolls, suma } = _tirarDados(qtyFinal, base.faces, false);
        const totalDaño = suma + flatBonus;
        const flatStr = flatBonus ? ` +${flatBonus}` : '';

        div.className = 'log-entrada spell-daño';
        div.innerHTML = `
            <strong>✨ ${sp.n} — ${labelNivel}</strong>
            <div class="log-daño-linea">
                <span>${totalDaño}</span>
                <small>${base.tipo} (${rolls.join('+')}${flatStr})</small>
            </div>`;
    }

    log.prepend(div);
    panel.querySelector('.btn-ventaja').classList.remove('activo-ventaja');
    panel.querySelector('.btn-desventaja').classList.remove('activo-desventaja');
}

/* ═══════════════════════════════════════════════════════
   ACCIONES AUTO-GENERADAS DESDE CARACTERÍSTICAS Y HECHIZOS
═══════════════════════════════════════════════════════ */

/* ── Clasificador de tipo de acción ─────────────────────
   Devuelve 'actions' | 'bonus' | 'reactions' | 'otros'
   según palabras clave en el texto de descripción.       */
function _clasificarAccion(texto) {
    if (!texto) return 'otros';
    const t = texto.toLowerCase();
    // Bonus action primero (más específico)
    if (/acci[oó]n adicional|bonus action|acción bonus/.test(t)) return 'bonus';
    // Reaction
    if (/reacci[oó]n|reaction/.test(t)) return 'reactions';
    // Action
    if (/acci[oó]n\b|acción\b|action\b/.test(t)) return 'actions';
    return 'otros';
}

/* Clasifica un hechizo según su campo casting */
function _clasificarCasting(castingStr) {
    if (!castingStr) return 'actions';
    const c = castingStr.toLowerCase();
    if (/adicional|bonus/.test(c)) return 'bonus';
    if (/reacci[oó]n|reaction/.test(c)) return 'reactions';
    return 'actions';
}

/* ── Construye la lista de entradas auto desde la ficha ──
   Devuelve array de { nombre, desc, origen, tipo }        */
function _recogerEntradasAuto(fichaPanel) {
    const entradas = [];

    // ── Clase ──────────────────────────────────────────
    const claseKey = fichaPanel.querySelector('.sel-clase')?.value || '';
    if (claseKey && typeof DND_CLASES !== 'undefined' && DND_CLASES[claseKey]) {
        (DND_CLASES[claseKey].rasgos || []).forEach(r => {
            const tipo = _clasificarAccion(r.d);
            entradas.push({ nombre: r.n, desc: r.d, origen: claseKey, tipo });
        });
    }

    // ── Subclase ───────────────────────────────────────
    const subKey = fichaPanel.querySelector('.sel-subclase')?.value || '';
    if (claseKey && subKey && typeof DND_CLASES !== 'undefined') {
        const subRasgos = DND_CLASES[claseKey]?.subclases?.[subKey] || [];
        subRasgos.forEach(r => {
            const tipo = _clasificarAccion(r.d);
            entradas.push({ nombre: r.n, desc: r.d, origen: subKey, tipo });
        });
    }

    // ── Especie ────────────────────────────────────────
    const especieKey = fichaPanel.querySelector('.sel-especie')?.value || '';
    if (especieKey && typeof DND_ESPECIES !== 'undefined' && DND_ESPECIES[especieKey]) {
        (DND_ESPECIES[especieKey] || []).forEach(r => {
            const tipo = _clasificarAccion(r.d);
            entradas.push({ nombre: r.n, desc: r.d, origen: especieKey, tipo });
        });
    }

    // ── Dotes (parseamos el textarea de dotes) ─────────
    if (typeof DND_DOTES !== 'undefined' && Array.isArray(DND_DOTES)) {
        const dotesTxt = fichaPanel.querySelector('.caract-dotes')?.value || '';
        // Cada dote está en una línea con formato "NombreDote: descripción"
        // Buscamos todas las dotes que aparezcan en el textarea
        DND_DOTES.forEach(dote => {
            if (dotesTxt.includes(dote.n)) {
                const tipo = _clasificarAccion(dote.d);
                entradas.push({ nombre: dote.n, desc: dote.d, origen: 'Dote', tipo });
            }
        });
    }

    // ── Hechizos ───────────────────────────────────────
    fichaPanel.querySelectorAll('.spell-entry').forEach(entry => {
        const spId = entry.dataset.spellId;
        // Buscar en todos los niveles de DND_SPELLS
        if (typeof DND_SPELLS === 'undefined') return;
        let sp = null;
        for (const nivel of Object.keys(DND_SPELLS)) {
            sp = DND_SPELLS[nivel].find(s => s.id === spId);
            if (sp) break;
        }
        if (!sp) return;
        const tipo = _clasificarCasting(sp.casting);
        const desc = `${sp.casting} · ${sp.range} · ${sp.duration}${sp.damage ? ' · ' + sp.damage : ''}`;
        entradas.push({ nombre: sp.n, desc, origen: 'Hechizo', tipo });
    });

    return entradas;
}

/* ── Inicializar bloque auto en todos los panels de acción ── */
function _initAutoAccionesBloque(fichaPanel) {
    ['actions','bonus','reactions','otros'].forEach(tipo => {
        const panelAcc = fichaPanel.querySelector(`.accion-panel[data-panel="${tipo}"]`);
        if (!panelAcc) return;
        // Insertar bloque auto antes de la lista manual
        const lista = panelAcc.querySelector('.acciones-lista');
        if (!lista) return;
        if (panelAcc.querySelector('.auto-acciones-bloque')) return; // ya existe
        const bloque = document.createElement('div');
        bloque.className = 'auto-acciones-bloque';
        bloque.innerHTML = '<div class="auto-acciones-header"><span>⚙ Automáticas</span></div><div class="auto-acciones-lista"></div>';
        panelAcc.insertBefore(bloque, lista);
    });
}

/* ── Regenerar el bloque auto completo ────────────────────
   Lee las notas adicionales guardadas, destruye y reconstruye. */
function regenerarAccionesAuto(fichaPanel) {
    _initAutoAccionesBloque(fichaPanel);

    // Guardar notas adicionales existentes por (tipo, nombre)
    const notasGuardadas = {};
    ['actions','bonus','reactions','otros'].forEach(tipo => {
        const bloque = fichaPanel.querySelector(`.accion-panel[data-panel="${tipo}"] .auto-acciones-lista`);
        if (!bloque) return;
        bloque.querySelectorAll('.auto-entrada').forEach(el => {
            const key = el.dataset.autoKey;
            const nota = el.querySelector('.auto-nota')?.value || '';
            if (nota) notasGuardadas[key] = nota;
        });
    });

    // Limpiar bloques
    fichaPanel.querySelectorAll('.auto-acciones-lista').forEach(b => { b.innerHTML = ''; });

    // Reconstruir
    const entradas = _recogerEntradasAuto(fichaPanel);
    const contadores = { actions: 0, bonus: 0, reactions: 0, otros: 0 };

    entradas.forEach(e => {
        const bloque = fichaPanel.querySelector(`.accion-panel[data-panel="${e.tipo}"] .auto-acciones-lista`);
        if (!bloque) return;
        contadores[e.tipo]++;

        const key = `${e.tipo}::${e.nombre}`;
        const div = document.createElement('div');
        div.className = 'auto-entrada';
        div.dataset.autoKey = key;

        const notaGuardada = notasGuardadas[key] || '';
        div.innerHTML = `
            <div class="auto-entrada-cabecera">
                <span class="auto-entrada-nombre">${_esc(e.nombre)}</span>
                <span class="auto-entrada-origen">${_esc(e.origen)}</span>
            </div>
            <div class="auto-entrada-desc">${_esc(e.desc)}</div>
            <textarea class="auto-nota" placeholder="Notas adicionales..." oninput="guardarDebounced()">${_esc(notaGuardada)}</textarea>`;
        // Marcar clase si tiene contenido (para mostrarla aunque no haga hover)
        if (notaGuardada) {
            setTimeout(() => div.querySelector('.auto-nota')?.classList.add('tiene-contenido'), 0);
        }
        div.querySelector?.('.auto-nota')?.addEventListener?.('input', function() {
            this.classList.toggle('tiene-contenido', this.value.length > 0);
        });
        bloque.appendChild(div);
    });

    // Mostrar/ocultar cabecera según haya entradas
    ['actions','bonus','reactions','otros'].forEach(tipo => {
        const bloque = fichaPanel.querySelector(`.accion-panel[data-panel="${tipo}"] .auto-acciones-bloque`);
        if (!bloque) return;
        const tiene = contadores[tipo] > 0;
        bloque.style.display = tiene ? '' : 'none';
    });

    guardarDebounced();
}

/* ── Leer notas auto para persistencia ────────────────── */
function leerAutoNotas(fichaPanel) {
    const result = {};
    ['actions','bonus','reactions','otros'].forEach(tipo => {
        const bloque = fichaPanel.querySelector(`.accion-panel[data-panel="${tipo}"] .auto-acciones-lista`);
        if (!bloque) return;
        bloque.querySelectorAll('.auto-entrada').forEach(el => {
            const key = el.dataset.autoKey;
            const nota = el.querySelector('.auto-nota')?.value || '';
            if (nota) result[key] = nota;
        });
    });
    return result;
}

/* ── Restaurar notas auto desde datos guardados ───────── */
function cargarAutoNotas(fichaPanel, notasData) {
    if (!notasData) return;
    ['actions','bonus','reactions','otros'].forEach(tipo => {
        const bloque = fichaPanel.querySelector(`.accion-panel[data-panel="${tipo}"] .auto-acciones-lista`);
        if (!bloque) return;
        bloque.querySelectorAll('.auto-entrada').forEach(el => {
            const key = el.dataset.autoKey;
            if (notasData[key]) {
                const ta = el.querySelector('.auto-nota');
                if (ta) ta.value = notasData[key];
            }
        });
    });
}
