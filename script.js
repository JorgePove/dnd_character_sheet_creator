/* ═══════════════════════════════════════════════════════
   SISTEMA DE PESTAÑAS
═══════════════════════════════════════════════════════ */
let fichas = [];
let fichaActual = null;
let _syncingWidgets = false;
let contadorFichas = 0;
let fichaABorrar = null;
let _guardandoTimeout = null;

function panelActual() {
    return fichas.find(f => f.id === fichaActual)?.panel || null;
}

/* ── Identificadores de ficha ──
   Un id solo se reutiliza (al cargar desde localStorage) si es válido y no
   está ya en uso. Al importar o abrir un enlace compartido se genera SIEMPRE
   uno nuevo (opciones.nuevoId), de modo que jamás puedan existir dos fichas
   con el mismo id. */
function _idFichaValido(id) {
    return typeof id === 'string' && /^[A-Za-z0-9_-]{1,64}$/.test(id);
}
function _idFichaLibre(id) {
    return !fichas.some(f => f.id === id)
        && !document.querySelector(`.pestana[data-ficha-id="${id}"]`)
        && !document.querySelector(`.ficha-panel[data-ficha-id="${id}"]`);
}

/* nuevaFicha(datosGuardados?, opciones?)
   opciones.nuevoId → ignora el id que traigan los datos y genera uno nuevo.
   Devuelve { id, panel, errores } donde errores lista las secciones de los
   datos que no se pudieron restaurar (nunca lanza por datos mal formados). */
function nuevaFicha(datosGuardados, opciones) {
    opciones = opciones || {};
    contadorFichas++;
    let id = datosGuardados && datosGuardados.id;
    if (opciones.nuevoId || !_idFichaValido(id) || !_idFichaLibre(id)) {
        id = 'ficha-' + contadorFichas;
        while (!_idFichaLibre(id)) { contadorFichas++; id = 'ficha-' + contadorFichas; }
    }
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
    tab.addEventListener('click', () => { activarFicha(id); guardarDebounced(); });
    barra.insertBefore(tab, btnNueva);

    // Init primer grupo dados de golpe
    (function(){
        const wrap = panel.querySelector('.dg-grupos-wrap');
        if (wrap && wrap.children.length === 0) {
            const g = dgCrearGrupo('d8', 1);
            g.dataset.auto = '1';   // lo gestionan las clases: se ajusta/borra al elegir clase
            wrap.appendChild(g);
            actualizarDadosGolpePanel(g.querySelector('.dg-total'));
        }
    })();
    if (typeof initCaractSelectores === 'function') initCaractSelectores(panel);
    if (typeof initMcWidget === 'function') initMcWidget(panel);
    if (typeof initSpellcasting === 'function') initSpellcasting(panel);
    initNotasSubpags(panel);
    _initAutoAccionesBloque(panel);
    initMulticlaseWidget(panel);
    _hookAutoAcciones(panel);
    activarFicha(id);

    const errores = datosGuardados ? cargarDatosEnPanel(panel, datosGuardados) : [];
    return { id, panel, errores };
}

function activarFicha(id) {
    fichaActual = id;
    fichas.forEach(f => f.panel.classList.toggle('activa', f.id === id));
    document.querySelectorAll('.pestana').forEach(tab => tab.classList.toggle('activa', tab.dataset.fichaId === id));
}

/* ── Modal de borrado global ──
   Se crea en DOMContentLoaded para garantizar que body existe.
   confirmarBorrado guarda el id ANTES de cerrar el modal. ── */
function _crearModalBorrado() {
    if (document.getElementById('modal-borrado-global')) return;
    const m = document.createElement('div');
    m.id = 'modal-borrado-global';
    m.innerHTML = `
        <div class="modal-caja">
            <div class="modal-icono">⚠️</div>
            <h3 class="modal-titulo">¿Borrar esta ficha?</h3>
            <p class="modal-texto">Se eliminará permanentemente la ficha <strong id="modal-borrado-nombre"></strong>. Esta acción es irreversible.</p>
            <div class="modal-botones">
                <button class="modal-btn cancelar" onclick="cerrarModal()">No, Mantener</button>
                <button class="modal-btn confirmar" onclick="confirmarBorrado()">Sí, Borrar</button>
            </div>
        </div>`;
    document.body.appendChild(m);
}
// Crear inmediatamente si el DOM ya está listo, si no esperar al evento
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _crearModalBorrado);
} else {
    _crearModalBorrado();
}

function cerrarFicha(event, id) {
    event.stopPropagation();
    if (fichas.length <= 1) return;
    const ficha = fichas.find(f => f.id === id);
    const nombre = ficha?.panel.querySelector('.input-nombre')?.value.trim()
        || `Personaje ${fichas.findIndex(f => f.id === id) + 1}`;
    fichaABorrar = id;
    const modal = document.getElementById('modal-borrado-global');
    if (!modal) return;
    document.getElementById('modal-borrado-nombre').textContent = `"${nombre}"`;
    modal.classList.add('modal-activo');
}

function cerrarModal() {
    const modal = document.getElementById('modal-borrado-global');
    if (modal) modal.classList.remove('modal-activo');
    // NO ponemos fichaABorrar = null aquí — lo hace confirmarBorrado tras usarlo
}

function confirmarBorrado() {
    // 1. Capturar el id ANTES de cerrar el modal
    const id = fichaABorrar;
    fichaABorrar = null;
    // 2. Cerrar el modal
    cerrarModal();
    // 3. Borrar
    if (!id) return;
    const idx = fichas.findIndex(f => f.id === id);
    if (idx === -1) return;
    fichas[idx].panel.remove();
    document.querySelector(`.pestana[data-ficha-id="${id}"]`)?.remove();
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
    _ajustarFuenteNombre(input);
    guardarDebounced();
}

function _ajustarFuenteNombre(input) {
    if (!input.value) { input.style.fontSize = '50px'; return; }
    // Empezamos desde el máximo y reducimos hasta que el texto quepa
    const MAX_FS = 50;
    const MIN_FS = 12;
    input.style.fontSize = MAX_FS + 'px';
    // scrollWidth > offsetWidth significa que el texto se desborda
    let fs = MAX_FS;
    while (input.scrollWidth > input.offsetWidth && fs > MIN_FS) {
        fs -= 1;
        input.style.fontSize = fs + 'px';
    }
}

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
function getPanel(el) { return el.closest('.ficha-panel'); }
function fmtMod(n) { return (n >= 0 ? '+' : '') + n; }
function _esc(str) {
    // Acepta cualquier tipo (número, null, undefined…) sin lanzar
    return String(str == null ? '' : str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
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
    // La iniciativa y la CA con armadura se recalculan dentro de actualizarTodoPanel
    actualizarTodoPanel(panel);
    if (stat === 'con') calcularHPMaxAuto(panel);
    guardarDebounced();
}

/* ── Modificador de DES de un panel ── */
function _modDes(panel) {
    const score = parseInt(panel.querySelector('.stat-score[data-stat="dex"]')?.value) || 10;
    return Math.floor((score - 10) / 2);
}

/* ── Iniciativa = mod. DES + bono propio (data-ini-bonus) ──
   El bono solo cambia cuando el jugador escribe en el campo (actualizarIniBonus);
   el total se recalcula siempre que cambia la DES, desde cualquier sitio. */
function _sincronizarIniciativa(panel) {
    const iniEl = panel.querySelector('.ini-val');
    if (!iniEl) return;
    const bonus = parseInt(iniEl.dataset.iniBonus) || 0;
    iniEl.dataset.iniBonus = bonus;
    iniEl.value = _modDes(panel) + bonus;
}

function validarExpertise(chk) {
    if (chk.checked) chk.closest('.fila-skill').querySelector('.dot.prof').checked = true;
    actualizarTodoPanel(getPanel(chk));
    guardarDebounced();
}

function actualizarTodo(el) { actualizarTodoPanel(getPanel(el)); guardarDebounced(); }

/* ═══════════════════════════════════════════════════════
   SISTEMA DE OFFSET MANUAL
   ─────────────────────────────────────────────────────
   En vez de bloquear el recálculo, guardamos un "offset"
   (ajuste manual) que se SUMA al valor calculado automáticamente.
   Así, si el auto-calc cambia, el total refleja el cambio + offset.

   Salvaciones: data-salv-offset  (número, puede ser negativo)
   Habilidades: data-mod-offset   (número, puede ser negativo)

   Tooltip de ayuda: "Offset manual: +N. Doble clic para resetear."
═══════════════════════════════════════════════════════ */

function _calcSalvBase(panel, stat) {
    const pb     = parseInt(panel.querySelector('.pb-input').value) || 0;
    const score  = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`).value) || 10;
    const modBase = Math.floor((score - 10) / 2);
    const dotEl  = panel.querySelector(`.salv-dot[data-stat="${stat}"]`);
    return modBase + (dotEl?.checked ? pb : 0);
}

function _calcSkillBase(panel, fila) {
    const pb     = parseInt(panel.querySelector('.pb-input').value) || 0;
    const stat   = fila.dataset.stat;
    const score  = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`).value) || 10;
    const modBase = Math.floor((score - 10) / 2);
    const isProf = fila.querySelector('.dot.prof').checked;
    const isExp  = fila.querySelector('.dot.exp')?.checked || false;
    return modBase + (isProf ? pb : 0) + (isExp ? pb : 0);
}

function _updateSalvTitle(salvEl, base, offset) {
    if (offset !== 0) {
        salvEl.title = `Auto: ${base >= 0 ? '+' : ''}${base}  Ajuste manual: ${offset >= 0 ? '+' : ''}${offset}  →  Total: ${base + offset}
Doble clic para resetear ajuste`;
    } else {
        salvEl.title = 'Editar · Doble clic restaura';
    }
}

function _updateModTitle(modEl, base, offset) {
    if (offset !== 0) {
        modEl.title = `Auto: ${base >= 0 ? '+' : ''}${base}  Ajuste: ${offset >= 0 ? '+' : ''}${offset}  →  ${base + offset}
Doble clic para resetear ajuste`;
    } else {
        modEl.title = 'Doble clic: restaurar cálculo automático';
    }
}

function actualizarTodoPanel(panel) {
    if (!panel) return;
    const stats = ['str','dex','con','int','wis','cha'];

    stats.forEach(stat => {
        const score = parseInt(panel.querySelector(`.stat-score[data-stat="${stat}"]`).value) || 10;
        const mod = Math.floor((score - 10) / 2);
        panel.querySelector(`[data-mod="${stat}"]`).innerText = fmtMod(mod);
    });

    // Iniciativa (sigue siempre a la DES) y CA derivada de la armadura equipada
    _sincronizarIniciativa(panel);
    _recalcularCA(panel);

    // Salvaciones: base + offset
    stats.forEach(stat => {
        const salvEl = panel.querySelector(`[data-salv="${stat}"]`);
        if (!salvEl) return;
        const base   = _calcSalvBase(panel, stat);
        const offset = parseInt(salvEl.dataset.salvOffset) || 0;
        salvEl.value = base + offset;
        if (offset !== 0) salvEl.classList.add('salv-override');
        else              salvEl.classList.remove('salv-override');
        _updateSalvTitle(salvEl, base, offset);
    });

    // Habilidades: base + offset
    panel.querySelectorAll('.fila-skill').forEach(fila => {
        const modEl = fila.querySelector('.mod-valor');
        if (!modEl) return;
        const base   = _calcSkillBase(panel, fila);
        const offset = parseInt(modEl.dataset.modOffset) || 0;
        modEl.value = base + offset;
        if (offset !== 0) modEl.classList.add('mod-override');
        else              modEl.classList.remove('mod-override');
        _updateModTitle(modEl, base, offset);
    });

    const perEl  = panel.querySelector('.fila-percepcion .mod-valor');
    const persEl = panel.querySelector('.fila-perspicacia .mod-valor');
    const invEl  = panel.querySelector('.fila-investigacion .mod-valor');
    panel.querySelector('.percepcion-pasiva').innerText  = 10 + (parseInt(perEl?.value)  || 0);
    panel.querySelector('.perspicacia-pasiva').innerText = 10 + (parseInt(persEl?.value) || 0);
    panel.querySelector('.investigacion-pasiva').innerText = 10 + (parseInt(invEl?.value) || 0);

    const hpActualEl = panel.querySelector('.hp-actual');
    if (hpActualEl) actualizarVidaPanel(hpActualEl);

    // Recalcular DC y bono de ataque de spellcasting si la función ya está disponible
    if (typeof recalcSpellcasting === 'function') recalcSpellcasting(panel);
}

/* El jugador escribe directamente en el input de habilidad.
   Calculamos el offset = valorEscrito - base y lo guardamos. */
function onModValorEdit(input) {
    const panel  = getPanel(input);
    if (!panel) return;
    const fila   = input.closest('.fila-skill');
    if (!fila) return;
    const base   = _calcSkillBase(panel, fila);
    const written = parseInt(input.value);
    if (isNaN(written)) return;
    const offset = written - base;
    input.dataset.modOffset = offset;
    if (offset !== 0) input.classList.add('mod-override');
    else              input.classList.remove('mod-override');
    _updateModTitle(input, base, offset);
    // Actualizar pasivas
    const perEl  = panel.querySelector('.fila-percepcion .mod-valor');
    const persEl = panel.querySelector('.fila-perspicacia .mod-valor');
    const invEl  = panel.querySelector('.fila-investigacion .mod-valor');
    panel.querySelector('.percepcion-pasiva').innerText  = 10 + (parseInt(perEl?.value)  || 0);
    panel.querySelector('.perspicacia-pasiva').innerText = 10 + (parseInt(persEl?.value) || 0);
    panel.querySelector('.investigacion-pasiva').innerText = 10 + (parseInt(invEl?.value) || 0);
    guardarDebounced();
}

/* Doble clic: resetear offset a 0 */
function onModValorReset(input) {
    input.dataset.modOffset = 0;
    input.classList.remove('mod-override');
    actualizarTodoPanel(getPanel(input));
    guardarDebounced();
}

/* El jugador escribe en el input de salvación.
   Calculamos offset = valorEscrito - base. */
function onSalvValorEdit(input) {
    const panel = getPanel(input);
    if (!panel) return;
    const stat  = input.dataset.salv;
    if (!stat) return;
    const base  = _calcSalvBase(panel, stat);
    const written = parseInt(input.value);
    if (isNaN(written)) return;
    const offset = written - base;
    input.dataset.salvOffset = offset;
    if (offset !== 0) input.classList.add('salv-override');
    else              input.classList.remove('salv-override');
    _updateSalvTitle(input, base, offset);
    guardarDebounced();
}

/* Doble clic: resetear offset a 0 */
function onSalvValorReset(input) {
    input.dataset.salvOffset = 0;
    input.classList.remove('salv-override');
    actualizarTodoPanel(getPanel(input));
    guardarDebounced();
}

/* Flechas ▲▼ — ajustan el offset en ±1 */
function ajustarSalv(btn, delta) {
    const input = btn.closest('.salv-ajuste').querySelector('.salv-valor');
    if (!input) return;
    const panel = getPanel(input);
    const stat  = input.dataset.salv;
    const base  = (panel && stat) ? _calcSalvBase(panel, stat) : 0;
    const currentOffset = parseInt(input.dataset.salvOffset) || 0;
    const newOffset = currentOffset + delta;
    input.dataset.salvOffset = newOffset;
    input.value = base + newOffset;
    if (newOffset !== 0) input.classList.add('salv-override');
    else                 input.classList.remove('salv-override');
    if (panel && stat) _updateSalvTitle(input, base, newOffset);
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   TIRADAS
═══════════════════════════════════════════════════════ */
function toggleDadosGlobal(modo) {
    const btnV = document.querySelector('.btn-ventaja-f');
    const btnD = document.querySelector('.btn-desventaja-f');
    if (!btnV || !btnD) return;
    if (modo === 'ventaja') {
        btnV.classList.toggle('activo');
        btnD.classList.remove('activo');
    } else {
        btnD.classList.toggle('activo');
        btnV.classList.remove('activo');
    }
}

function realizarTiradaStat(el, nombre) {
    const panel = getPanel(el);
    lanzarConPanel(panel, nombre, parseInt(el.querySelector('.stat-mod-circulo')?.innerText) || 0);
}

function tirarSalvacionStat(el, nombre) {
    const panel = getPanel(el);
    lanzarConPanel(panel, nombre, parseInt(el.querySelector('.salv-valor')?.value) || 0);
}

function actualizarIniBonus(input) {
    const panel = getPanel(input);
    // Lo que escribe el jugador = mod. DES + bono propio → se guarda el bono
    input.dataset.iniBonus = (parseInt(input.value) || 0) - _modDes(panel);
    guardarDebounced();
}

function realizarTiradaInput(el, nombre) {
    const panel = getPanel(el);
    lanzarConPanel(panel, nombre, parseInt(panel.querySelector('.ini-val')?.value) || 0);
}

function tirarDesdeFila(el, nombre) {
    const panel = getPanel(el);
    const toggle = el.querySelector('.adv-toggle');
    const advEstado = toggle ? parseInt(toggle.dataset.adv) : 0;
    lanzarConPanel(panel, nombre, parseInt(el.querySelector('.mod-valor')?.value) || 0, advEstado);
}

/* Lee el estado de ventaja/desventaja del panel flotante global */
function _leerEstadoAdv() {
    const btnV = document.querySelector('.btn-ventaja-f');
    const btnD = document.querySelector('.btn-desventaja-f');
    return {
        ventaja:    btnV?.classList.contains('activo') || false,
        desventaja: btnD?.classList.contains('activo') || false,
    };
}
function _resetAdv() {
    document.querySelector('.btn-ventaja-f')?.classList.remove('activo');
    document.querySelector('.btn-desventaja-f')?.classList.remove('activo');
}

function lanzarConPanel(panel, nombre, mod, forzarAdv) {
    const estado = _leerEstadoAdv();
    let mV, mD;
    if      (forzarAdv === 1) { mV = true;  mD = false; }
    else if (forzarAdv === 2) { mV = false; mD = true; }
    else                      { mV = estado.ventaja; mD = estado.desventaja; }

    const d1 = Math.floor(Math.random() * 20) + 1;
    const d2 = Math.floor(Math.random() * 20) + 1;
    let resultado, detalle, clase = '';

    if (mV)      { resultado = Math.max(d1,d2); detalle = `[${d1}, ${d2}] ➔ ${resultado}`; clase = 'ventaja'; }
    else if (mD) { resultado = Math.min(d1,d2); detalle = `[${d1}, ${d2}] ➔ ${resultado}`; clase = 'desventaja'; }
    else         { resultado = d1; detalle = `${d1}`; }

    registrarLog(nombre, resultado + mod, detalle, mod, clase);
    _resetAdv();
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
    const max = Math.max(parseInt(panel.querySelector('.hp-max').value) || 0, 1);
    const tmp = Math.max(parseInt(panel.querySelector('.hp-temp-val').value) || 0, 0);
    const pct = act / max;

    const barra = panel.querySelector('.barra-relleno.verde');
    barra.style.width = Math.min((act / max) * 100, 100) + '%';
    panel.querySelector('.barra-relleno.azul').style.width = Math.min((tmp / max) * 100, 100) + '%';

    barra.classList.remove('hp-media', 'hp-baja');
    if (pct <= 0.25)     barra.classList.add('hp-baja');
    else if (pct <= 0.5) barra.classList.add('hp-media');
    guardarDebounced();   // la vida actual/temporal/máx. también se persiste al instante
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
    const hpA = panel.querySelector('.hp-actual');
    const hpT = panel.querySelector('.hp-temp-val');
    if (hpA) hpA.value = act;
    if (hpT) hpT.value = Math.max(tmp, 0);
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
    // Si el jugador cambia el tipo a mano, el grupo deja de estar gestionado por las clases
    delete grupo.dataset.auto;
    grupo.dataset.manual = '1';
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
    const nat20 = resultado === 20;
    const nat1  = resultado === 1;
    const exito = resultado >= 10;

    if (nat20) {
        // Natural 20: marcar los 3 éxitos y dar 1 PG
        panel.querySelectorAll('.circulos-exito .circulo-muerte').forEach(c => c.classList.add('activo'));
        const hpEl = panel.querySelector('.hp-actual');
        if (hpEl) { hpEl.value = (parseInt(hpEl.value) || 0) + 1; actualizarVidaPanel(hpEl); }
        btn.classList.add('flash-exito');
        setTimeout(() => btn.classList.remove('flash-exito'), 500);
    } else if (nat1) {
        // Natural 1: marcar 2 fallos
        let marcados = 0;
        panel.querySelectorAll('.circulos-fallo .circulo-muerte').forEach(c => {
            if (marcados < 2 && !c.classList.contains('activo')) { c.classList.add('activo'); marcados++; }
        });
        btn.classList.add('flash-fallo');
        setTimeout(() => btn.classList.remove('flash-fallo'), 500);
    } else if (exito) {
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
    div.className = `log-entrada ${(exito || nat20) ? 'exito-muerte' : 'fallo-muerte'}`;
    const etiqueta = nat20 ? '✨ ¡Natural 20! +1 PG' : nat1 ? '💀 ¡Natural 1! ×2 Fallos' : exito ? '✔ Éxito (≥10)' : '✖ Fallo (<10)';
    div.innerHTML = `<strong>Salvación de Muerte</strong><div class="res"><span>${resultado}</span><small>${etiqueta}</small></div>`;
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
    _descansoLargoPanel(getPanel(btn));
}

function _descansoLargoPanel(panel) {
    if (!panel) return;
    const max = parseInt(panel.querySelector('.hp-max').value) || 0;
    const hpActEl = panel.querySelector('.hp-actual');
    const hpTmpEl = panel.querySelector('.hp-temp-val');
    if (hpActEl) hpActEl.value = max;
    if (hpTmpEl) hpTmpEl.value = 0;
    actualizarVidaPanel(panel.querySelector('.hp-actual'));
    panel.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]').forEach(chk => { chk.checked = true; });
    if (typeof recargaRecursosPorDescanso === 'function') recargaRecursosPorDescanso(panel, 'largo');
    panel.querySelectorAll('.slot-chk').forEach(chk => { chk.checked = true; });
    guardarDebounced();
}

function descansoCortoGlobal() {
    const panel = panelActual();
    if (!panel) return;
    _descansoCortoPanel(panel);
}
function descansoLargoGlobal() {
    const panel = panelActual();
    if (!panel) return;
    _descansoLargoPanel(panel);
}

function descansoCorto(btn) {
    _descansoCortoPanel(getPanel(btn));
}

function _descansoCortoPanel(panel) {
    if (!panel) return;
    if (typeof recargaRecursosPorDescanso === 'function') recargaRecursosPorDescanso(panel, 'corto');
    // Warlock: Pact Magic se recarga en descanso corto
    if (typeof leerMulticlases === 'function' && typeof _getClaseData === 'function') {
        const mcs = leerMulticlases(panel).filter(mc => mc.clase);
        const warlockMC = mcs.find(mc => _getClaseData(mc.clase).casting === 'warlock');
        if (warlockMC) {
            panel.querySelectorAll('.slot-check-wrap.slot-warlock .slot-chk').forEach(chk => { chk.checked = true; });
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
        <input type="text" placeholder="Descripción o notas..." class="input-item-desc" onkeypress="checkInventarioPanel(event)" oninput="this.classList.toggle('tiene-texto',this.value.length>0);guardarDebounced()">
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
    div.innerHTML = `<strong>${_esc(nombre)}</strong><div class="res"><span>${total}</span><small>(${detalle}) ${mod >= 0 ? '+' : ''}${mod}</small></div>`;
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
    caja.querySelector(`.accion-panel[data-panel="${tabId}"]`)?.classList.add('activo');
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
        ${!esExtra ? `<span class="arma-daño-sep">+</span><input type="number" class="arma-bono-daño" value="0" title="Bono de daño. Edítalo para fijarlo manualmente; doble clic para restaurar el cálculo automático." oninput="armaBonoDañoManual(this);guardarDebounced()" ondblclick="armaBonoDañoReset(this)">` : ''}
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
        pb = parseInt(panel.querySelector('.pb-input')?.value) || 0;
    }
    const total = statMod + pb + extra;
    const bonTotalEl = fila.querySelector('.arma-bono-total');
    if (bonTotalEl) bonTotalEl.textContent = (total >= 0 ? '+' : '') + total;

    const bonoDañoEl = fila.querySelector('.arma-bono-daño');
    if (bonoDañoEl && !bonoDañoEl.dataset.manual) bonoDañoEl.value = statMod;
}

/* El jugador edita manualmente el bono de daño → marcarlo para que
   recalcArma no lo sobreescriba. */
function armaBonoDañoManual(input) {
    input.dataset.manual = 'true';
    input.classList.add('bono-daño-manual');
    input.title = 'Bono fijado manualmente. Doble clic para restaurar el cálculo automático.';
}

/* Doble clic → volver al cálculo automático (statMod). */
function armaBonoDañoReset(input) {
    delete input.dataset.manual;
    input.classList.remove('bono-daño-manual');
    input.title = 'Bono de daño. Edítalo para fijarlo manualmente; doble clic para restaurar el cálculo automático.';
    recalcArma(input.closest('.arma-fila').querySelector('.arma-stat-sel'));
    guardarDebounced();
}

function tirarArma(iconEl) {
    const fila = iconEl.closest('.arma-fila');
    const panel = getPanel(fila);
    if (!panel) return;

    const nombre    = fila.querySelector('.arma-nombre-input').value.trim() || 'Arma';
    const bonoTotal = parseInt(fila.querySelector('.arma-bono-total').textContent) || 0;

    const gV = _leerEstadoAdv().ventaja;
    const gD = _leerEstadoAdv().desventaja;
    const d1 = Math.floor(Math.random() * 20) + 1;
    const d2 = Math.floor(Math.random() * 20) + 1;
    let dImpacto, detalleImpacto;
    if (gV)      { dImpacto = Math.max(d1,d2); detalleImpacto = `[${d1},${d2}]→${dImpacto}`; }
    else if (gD) { dImpacto = Math.min(d1,d2); detalleImpacto = `[${d1},${d2}]→${dImpacto}`; }
    else         { dImpacto = d1; detalleImpacto = `${d1}`; }

    const totalImpacto = dImpacto + bonoTotal;
    const esCrit  = dImpacto === 20;
    const esFallo = dImpacto === 1;

    _resetAdv();
    // desventaja reset ya hecho por _resetAdv()

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
        <strong>${_esc(nombre)}${esCrit?' — ¡CRÍTICO!':''}</strong>
        <div class="res"><span class="${impColor}">${totalImpacto}</span><small>🎯 ${impLabel} (${detalleImpacto} ${bonoStr})</small></div>
        <hr class="log-sep">${dañoHTML}`;
    log.prepend(div);
}

function añadirAccion(btn, tipo) {
    const panelAcc = btn.closest('.accion-panel');
    const lista = panelAcc
        ? panelAcc.querySelector('.acciones-lista')
        : btn.previousElementSibling;
    if (!lista) return;
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
/* ══════════════════════════════════════════════════════════════
   SINCRONIZACIÓN ESPECIE / TRASFONDO: cabecera ↔ Características
══════════════════════════════════════════════════════════════ */
function onEspecieCabChange(sel) {
    const panel = getPanel(sel);
    const val = sel.value;
    // Espejo en Características
    const selCaract = panel.querySelector('.sel-especie');
    if (selCaract && selCaract.value !== val) {
        selCaract.value = val;
        // Actualizar el trigger visual del custom dropdown
        _syncEspecieDropdownTrigger(panel, val);
        if (typeof onEspecieChange === 'function') onEspecieChange(selCaract);
    }
    guardarDebounced();
}
function onTrasfondoCabChange(sel) {
    const panel = getPanel(sel);
    const val = sel.value;
    // Espejo en Características
    const selCaract = panel.querySelector('.sel-trasfondo');
    if (selCaract && selCaract.value !== val) {
        selCaract.value = val;
        selCaract.dispatchEvent(new Event('change'));
    }
    guardarDebounced();
}

/* Sincroniza el trigger visual del custom dropdown de especie con el valor dado */
function _syncEspecieDropdownTrigger(panel, valor) {
    const wrapper = panel.querySelector('.especie-custom-dropdown');
    if (!wrapper) return;
    const trigger  = wrapper.querySelector('.especie-dropdown-trigger');
    const listbox  = wrapper.querySelector('.especie-dropdown-listbox');
    if (!trigger) return;
    if (valor) {
        trigger.textContent = valor;
        trigger.classList.add('has-value');
        wrapper.dataset.selectedName = valor;
    } else {
        trigger.textContent = trigger.dataset.placeholder || '— Selecciona una especie —';
        trigger.classList.remove('has-value');
        wrapper.dataset.selectedName = '';
    }
    // Marcar el item correspondiente en el listbox
    if (listbox) {
        listbox.querySelectorAll('.especie-dropdown-item').forEach(i => {
            i.classList.toggle('selected', i.dataset.especieName === valor);
        });
    }
}

/* Poblar selectores de cabecera con las mismas opciones que en Características */
function _poblarSelectoresCabecera(panel) {
    const selECab = panel.querySelector('.sel-especie-cab');
    const selTCab = panel.querySelector('.sel-trasfondo-cab');
    if (selECab && selECab.options.length <= 1) {
        if (typeof DND_ESPECIES !== 'undefined') {
            Object.keys(DND_ESPECIES).forEach(e => {
                const opt = document.createElement('option');
                opt.value = e; opt.textContent = e;
                selECab.appendChild(opt);
            });
        }
    }
    if (selTCab && selTCab.options.length <= 1) {
        if (typeof DND_TRASFONDOS !== 'undefined') {
            Object.keys(DND_TRASFONDOS).forEach(t => {
                const opt = document.createElement('option');
                opt.value = t; opt.textContent = t;
                selTCab.appendChild(opt);
            });
            // Opción Personalizado
            const optP = document.createElement('option');
            optP.value = '__personalizado__'; optP.textContent = 'Personalizado';
            selTCab.appendChild(optP);
        }
    }
}

/* ═══════════════════════════════════════════════════════
   GUARDADO AUTOMÁTICO (localStorage)
   ─────────────────────────────────────────────────────
   · guardarDebounced() agenda un guardado a los 600 ms.
   · Si la pestaña se cierra/oculta con un guardado pendiente, se
     vuelca inmediatamente (pagehide / visibilitychange / beforeunload).
   · Nunca se escribe una lista vacía de fichas ni se sobrescribe un
     almacenamiento ilegible sin haber conservado antes una copia.
   · Los fallos (cuota llena, almacenamiento bloqueado…) se avisan UNA
     sola vez en un panel con botón de copia de seguridad completa.
═══════════════════════════════════════════════════════ */
let _guardadoPendiente = false;
let _guardadoBloqueado = false;   // true si el almacenamiento original no se pudo respaldar
let _ultimoGuardado    = null;    // último JSON escrito (evita reescrituras idénticas)

function guardarDebounced() {
    _guardadoPendiente = true;
    clearTimeout(_guardandoTimeout);
    _guardandoTimeout = setTimeout(guardarTodo, 600);
}

/* Vuelca ya el guardado pendiente (cierre de pestaña, cambio a otra app…) */
function _volcarGuardadoPendiente() {
    if (_guardadoPendiente) guardarTodo();
}

/* ── Avisos flotantes (contenedor único → nunca se apilan duplicados) ── */
function _mostrarAviso(id, mensaje, botones, color) {
    let cont = document.getElementById('avisos-app');
    if (!cont) {
        cont = document.createElement('div');
        cont.id = 'avisos-app';
        cont.style.cssText = 'position:fixed;right:20px;bottom:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;max-width:440px';
        document.body.appendChild(cont);
    }
    let el = document.getElementById(id);
    if (!el) { el = document.createElement('div'); el.id = id; cont.appendChild(el); }
    el.style.cssText = `background:${color || '#e53e3e'};color:#fff;padding:10px 14px;border-radius:8px;font-size:13px;font-weight:600;line-height:1.4;box-shadow:0 2px 10px rgba(0,0,0,0.35)`;
    el.textContent = '';
    const txt = document.createElement('div');
    txt.textContent = mensaje;
    el.appendChild(txt);
    if (botones && botones.length) {
        const fila = document.createElement('div');
        fila.style.cssText = 'margin-top:8px;display:flex;gap:6px;flex-wrap:wrap';
        botones.forEach(b => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = b.texto;
            btn.style.cssText = 'background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.55);color:#fff;border-radius:6px;padding:3px 10px;font-size:12px;font-weight:700;cursor:pointer';
            btn.addEventListener('click', () => { try { b.accion(el); } catch (e) { console.warn(e); } });
            fila.appendChild(btn);
        });
        el.appendChild(fila);
    }
    return el;
}
function _quitarAviso(id) { document.getElementById(id)?.remove(); }

/* ── Descargas de copias de seguridad ── */
function _descargarTexto(texto, nombreArchivo) {
    const blob = new Blob([texto], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function _sufijoFecha() { return new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-'); }

/* Copia de seguridad de TODAS las fichas abiertas (se puede volver a importar) */
function descargarCopiaCompleta() {
    try {
        const datos = fichas.map(f => leerFicha(f.panel));
        _descargarTexto(JSON.stringify(datos, null, 2), `dnd_fichas_copia_${_sufijoFecha()}.json`);
    } catch (e) {
        _mostrarToast('No se pudo crear la copia: ' + e.message, 'error');
    }
}

function _mensajeFalloGuardado(e) {
    const cuota = e && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED' || e.code === 22 || e.code === 1014);
    return cuota
        ? '⚠ No se pudo guardar: el almacenamiento del navegador está lleno. Tus últimos cambios NO están guardados. Descarga una copia y libera espacio (por ejemplo, quitando imágenes grandes).'
        : '⚠ No se pudo guardar en el navegador (' + (e && e.name ? e.name : 'error desconocido') + '). Tus últimos cambios NO están guardados. Descarga una copia de seguridad.';
}

function guardarTodo() {
    clearTimeout(_guardandoTimeout);
    _guardandoTimeout = null;
    _guardadoPendiente = false;
    // Nunca escribir "nada": evita borrar los datos si la carga falló o aún no terminó
    if (_guardadoBloqueado || fichas.length === 0) return false;

    // 1. Serializar (si UNA ficha falla al leerse, se conserva su última versión guardada)
    let json;
    try {
        let previas = null;
        const datos = fichas.map(f => {
            try {
                return leerFicha(f.panel);
            } catch (err) {
                console.warn('No se pudo leer la ficha', f.id, err);
                if (previas === null) {
                    try { previas = JSON.parse(_ultimoGuardado || localStorage.getItem('dnd_fichas') || '[]'); }
                    catch (_) { previas = []; }
                }
                const anterior = Array.isArray(previas) ? previas.find(p => p && p.id === f.id) : null;
                if (anterior) return anterior;
                throw err;
            }
        });
        json = JSON.stringify(datos);
    } catch (e) {
        console.warn('No se pudo preparar el guardado:', e);
        _mostrarAviso('aviso-guardado', '⚠ No se pudo guardar: error al leer una ficha (' + e.message + ').',
            [{ texto: '⬇ Descargar copia', accion: descargarCopiaCompleta }]);
        return false;
    }

    // 2. Escribir
    try {
        if (json !== _ultimoGuardado) localStorage.setItem('dnd_fichas', json);
        localStorage.setItem('dnd_contador', String(contadorFichas));
        localStorage.setItem('dnd_activa', fichaActual);
        _ultimoGuardado = json;
        _quitarAviso('aviso-guardado');
        return true;
    } catch (e) {
        console.warn('No se pudo guardar:', e);
        _mostrarAviso('aviso-guardado', _mensajeFalloGuardado(e), [
            { texto: '⬇ Descargar copia de todas las fichas', accion: descargarCopiaCompleta },
            { texto: 'Cerrar', accion: () => _quitarAviso('aviso-guardado') },
        ]);
        return false;
    }
}

function leerFicha(panel) {
    const d = {};
    d.id = panel.dataset.fichaId;

    // Cabecera
    d.nombre      = panel.querySelector('.input-nombre')?.value || '';
    d.especie     = panel.querySelector('.sel-especie-cab')?.value || '';
    d.trasfondo   = panel.querySelector('.sel-trasfondo-cab')?.value || '';
    d.retratoCab  = panel.querySelector('.retrato-cab-img')?.src?.startsWith('data:') ? panel.querySelector('.retrato-cab-img').src : '';
    d.pb          = panel.querySelector('.pb-input')?.value || '2';
    d.inspiracion = panel.querySelector('.bloque-inspiracion')?.classList.contains('activo') || false;
    // Multiclase (solo clase y nivel; la subclase se guarda en caract.mcClases)
    d.multiclases = leerMulticlases(panel).map(mc => ({ clase: mc.clase, nivel: mc.nivel }));

    // Stats y salvaciones
    d.stats = {}; d.salvs = {}; d.salvOffsets = {};
    ['str','dex','con','int','wis','cha'].forEach(s => {
        d.stats[s] = panel.querySelector(`.stat-score[data-stat="${s}"]`)?.value || '10';
        d.salvs[s] = panel.querySelector(`.salv-dot[data-stat="${s}"]`)?.checked || false;
        const salvEl = panel.querySelector(`[data-salv="${s}"]`);
        const off = parseInt(salvEl?.dataset.salvOffset) || 0;
        if (off !== 0) d.salvOffsets[s] = off;
    });

    // Habilidades
    d.habilidades = [];
    panel.querySelectorAll('.fila-skill').forEach(fila => {
        const adv   = fila.querySelector('.adv-toggle');
        const modEl = fila.querySelector('.mod-valor');
        d.habilidades.push({
            prof:        fila.querySelector('.dot.prof')?.checked || false,
            exp:         fila.querySelector('.dot.exp')?.checked  || false,
            adv:         adv ? parseInt(adv.dataset.adv) : 0,
            advArmadura: adv?.dataset.advArmadura === '1' || false,
            modOffset:   parseInt(modEl?.dataset.modOffset) || 0
        });
    });

    // Combate inline
    const csis = panel.querySelectorAll('.csi-input');
    d.ca  = csis[0]?.value || '10';
    d.caBonus  = csis[0]?.dataset.caBonus ?? '0';   // ajuste manual sobre la CA calculada por armadura
    d.ini      = csis[1]?.value || '0';
    d.iniBonus = csis[1]?.dataset.iniBonus ?? '0';
    d.vels = Array.from(panel.querySelectorAll('.vel-inline-input')).map(v => v.value);

    // Vida
    d.hpActual = panel.querySelector('.hp-actual')?.value   || '10';
    d.hpMax    = panel.querySelector('.hp-max')?.value      || '10';
    d.hpTemp   = panel.querySelector('.hp-temp-val')?.value || '0';
    d.hpAuto   = panel.querySelector('.hp-max')?.dataset.hpAuto !== 'false';

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
        checks: Array.from(g.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]')).map(c => c.checked),
        auto:   g.dataset.auto === '1'      // grupo gestionado por las clases (no añadido a mano)
    }));

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
            if (idx === 0) {
                const bonoDañoEl = bloque.querySelector('.arma-bono-daño');
                b.bonoDaño       = bonoDañoEl?.value || '0';
                b.bonoDañoManual = bonoDañoEl?.dataset.manual === 'true';
            }
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
        mcClases:        (typeof leerMcDatos === 'function') ? leerMcDatos(panel) : [],
    };

    d.roleplay = leerRoleplay(panel);
    d.autoNotas = leerAutoNotas(panel);

    // Spellcasting
    Object.assign(d, leerSpellcasting(panel));

    // Armadura
    d.armaduraSel = panel.querySelector('.armadura-sel')?.value || '';
    d.escudoSel   = panel.querySelector('.escudo-sel')?.value  || '0';

    return d;
}

/* Traduce una clave guardada con un nombre antiguo (subclase, especie o trasfondo
   renombrados al revisar el contenido contra el material oficial) a la clave actual.
   Si no hay equivalencia, devuelve el valor tal cual. */
function _traducirClaveVieja(tipo, valor, clase) {
    return (typeof resolverAlias === 'function') ? resolverAlias(tipo, valor, clase) : valor;
}

/* Restaura una ficha desde sus datos guardados. Cada sección se carga por separado:
   si una está mal formada (p. ej. un campo con un tipo inesperado) se anota y las
   demás se cargan igualmente. Devuelve la lista de secciones que fallaron (vacía = todo bien). */
function cargarDatosEnPanel(panel, d) {
    const errores = [];
    const _secc = (nombre, fn) => {
        try { fn(); }
        catch (e) {
            console.warn('Error cargando la sección "' + nombre + '":', e);
            errores.push(nombre + ': ' + (e && e.message ? e.message : e));
        }
    };

    _secc('cabecera', () => {
    // Cabecera
    if (d.nombre) { panel.querySelector('.input-nombre').value = d.nombre; onNombreCambia(panel.querySelector('.input-nombre')); }
    // Selectores especie y trasfondo en cabecera
    if (d.especie) {
        const selE = panel.querySelector('.sel-especie-cab');
        if (selE) { selE.value = _traducirClaveVieja('especie', d.especie); }
    }
    if (d.trasfondo) {
        const selT = panel.querySelector('.sel-trasfondo-cab');
        if (selT) { selT.value = _traducirClaveVieja('trasfondo', d.trasfondo); }
    }
    // Retrato de cabecera
    if (d.retratoCab) {
        const cont = panel.querySelector('.retrato-cab-contenedor');
        if (cont) _retratoSetImagen(cont, d.retratoCab);
    }
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
    });

    _secc('atributos', () => {
    // Stats y salvaciones
    if (d.stats) ['str','dex','con','int','wis','cha'].forEach(s => {
        const el = panel.querySelector(`.stat-score[data-stat="${s}"]`);
        if (el) el.value = d.stats[s] || '10';
    });
    if (d.salvs) ['str','dex','con','int','wis','cha'].forEach(s => {
        const el = panel.querySelector(`.salv-dot[data-stat="${s}"]`);
        if (el) el.checked = d.salvs[s] || false;
    });
    if (d.salvOffsets) ['str','dex','con','int','wis','cha'].forEach(s => {
        const off = d.salvOffsets[s];
        if (!off) return;
        const salvEl = panel.querySelector(`[data-salv="${s}"]`);
        if (salvEl) salvEl.dataset.salvOffset = off;
    });
    });

    _secc('habilidades', () => {
    // Habilidades
    if (d.habilidades) panel.querySelectorAll('.fila-skill').forEach((fila, i) => {
        const h = d.habilidades[i]; if (!h) return;
        const prof  = fila.querySelector('.dot.prof');
        const exp   = fila.querySelector('.dot.exp');
        const adv   = fila.querySelector('.adv-toggle');
        const modEl = fila.querySelector('.mod-valor');
        if (prof) prof.checked = h.prof;
        if (exp)  exp.checked  = h.exp;
        if (adv) {
            adv.dataset.adv = h.adv;
            adv.textContent = h.adv===1?'▲':h.adv===2?'▼':'';
            if (h.advArmadura) {
                adv.dataset.advArmadura = '1';
                adv.classList.add('adv-armadura');
                adv.title = 'Desventaja (por armadura)';
            }
        }
        if (modEl && h.modOffset) modEl.dataset.modOffset = h.modOffset;
    });
    });

    _secc('combate', () => {
    // Combate
    const csis = panel.querySelectorAll('.csi-input');
    if (d.ca  && csis[0]) csis[0].value = d.ca;
    if (csis[1]) {
        // La iniciativa = mod. DES + bono propio. Se guarda solo el bono y el total se recalcula siempre.
        const _dexMod = _modDes(panel);
        let _bonus = d.iniBonus !== undefined ? parseInt(d.iniBonus)
                   : (d.ini !== undefined ? (parseInt(d.ini) || 0) - _dexMod : 0);
        if (isNaN(_bonus)) _bonus = 0;
        csis[1].dataset.iniBonus = _bonus;
        csis[1].value = _dexMod + _bonus;
    }
    if (d.vels) panel.querySelectorAll('.vel-inline-input').forEach((v,i) => { if (d.vels[i]!==undefined) v.value=d.vels[i]; });
    });

    _secc('vida', () => {
    // Vida
    if (d.hpActual) panel.querySelector('.hp-actual').value    = d.hpActual;
    if (d.hpMax)    panel.querySelector('.hp-max').value       = d.hpMax;
    if (d.hpTemp)   panel.querySelector('.hp-temp-val').value  = d.hpTemp;
    // Restaurar flag auto (por defecto true si no hay dato guardado)
    const hpMaxEl = panel.querySelector('.hp-max');
    if (hpMaxEl) {
        const esAuto = d.hpAuto !== false;
        hpMaxEl.dataset.hpAuto = esAuto ? 'true' : 'false';
        _hpAutoLabelVisible(panel, esAuto);
    }
    });

    _secc('resistencias', () => {
    // Resistencias (3 textareas separadas)
    const resTasLoad = panel.querySelectorAll('.res-textarea');
    if (resTasLoad[0] && d.resistenciaDaño      !== undefined) resTasLoad[0].value = d.resistenciaDaño;
    if (resTasLoad[1] && d.inmunidadDaño        !== undefined) resTasLoad[1].value = d.inmunidadDaño;
    if (resTasLoad[2] && d.inmunidadCondiciones !== undefined) resTasLoad[2].value = d.inmunidadCondiciones;
    });

    _secc('condiciones', () => {
    // Condiciones
    if (d.condiciones) panel.querySelectorAll('.condicion-chk').forEach((c,i) => { c.checked = d.condiciones[i]||false; });
    if (d.agotamiento) panel.querySelectorAll('.agotamiento-bolita').forEach((b,i) => { b.classList.toggle('activo', !!d.agotamiento[i]); });
    });

    _secc('dados de golpe', () => {
    // Dados de golpe — restaurar grupos
    (function() {
        const wrap = panel.querySelector('.dg-grupos-wrap');
        if (!wrap) return;
        wrap.innerHTML = '';
        const grupos = (Array.isArray(d.dgGrupos) && d.dgGrupos.length)
            ? d.dgGrupos
            : [{ tipo: d.dgTipo || 'd8', total: d.dgTotal || '1', checks: d.dgChecks || [] }];
        grupos.forEach(gd => {
            const g = dgCrearGrupo(gd.tipo || 'd8', gd.total || '1');
            // Sin dato (fichas de versiones antiguas, donde TODOS los grupos los reconstruía la clase)
            // se consideran gestionados por la clase; solo se respeta un «false» explícito.
            if (gd.auto === undefined || gd.auto) g.dataset.auto = '1';
            wrap.appendChild(g);
            actualizarDadosGolpePanel(g.querySelector('.dg-total'));
            const chks = g.querySelectorAll('.dg-checks-contenedor input[type="checkbox"]');
            if (Array.isArray(gd.checks)) chks.forEach((c,i) => { c.checked = gd.checks[i] !== undefined ? !!gd.checks[i] : true; });
        });
    })();
    });

    _secc('salvaciones de muerte', () => {
    // Salvaciones de muerte
    if (d.exitosMuerte) panel.querySelectorAll('.circulos-exito .circulo-muerte').forEach((c,i) => c.classList.toggle('activo', d.exitosMuerte[i]||false));
    if (d.fallosMuerte) panel.querySelectorAll('.circulos-fallo .circulo-muerte').forEach((c,i) => c.classList.toggle('activo', d.fallosMuerte[i]||false));
    });

    _secc('monedas', () => {
    // Monedas
    if (d.monedas) ['cobre','plata','oro','platino'].forEach(m => {
        const el = panel.querySelector(`.moneda.${m} input`); if (el) el.value = d.monedas[m]||'0';
    });
    });

    _secc('inventario', () => {
    // Items
    if (Array.isArray(d.items) && d.items.length > 0) {
        const cont = panel.querySelector('.contenedor-items');
        cont.innerHTML = '';
        d.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item-fila';
            div.innerHTML = `
                <input type="text" placeholder="Nombre..." class="input-item" onkeypress="checkInventarioPanel(event)" oninput="guardarDebounced()" value="${_esc(item.nombre)}">
                <input type="number" placeholder="1" class="input-item-cant" min="0" oninput="guardarDebounced()" value="${_esc(item.cant)}">
                <input type="text" placeholder="Descripción o notas..." class="input-item-desc${item.desc?' tiene-texto':''}" onkeypress="checkInventarioPanel(event)" oninput="this.classList.toggle('tiene-texto',this.value.length>0);guardarDebounced()" value="${_esc(item.desc)}">
                <input type="checkbox" class="chk-equipado" title="Equipado" onchange="guardarDebounced()" ${item.equip?'checked':''}>
                <input type="checkbox" class="chk-sintonizado" title="Sintonizado" onchange="validarSintonizados(this);guardarDebounced()" ${item.sint?'checked':''}>
                <button class="btn-borrar-item" onclick="borrarItemInventario(this)" title="Eliminar">×</button>`;
            cont.appendChild(div);
        });
    }
    });

    _secc('sentidos y competencias', () => {
    // Sentidos
    const se = panel.querySelector('.sentidos-extra');
    if (se && d.sentidosExtra) se.value = d.sentidosExtra;

    // Competencias
    const tas = panel.querySelectorAll('.bloque-competencia textarea');
    if (tas[0]) tas[0].value = d.idiomas        || '';
    if (tas[1]) tas[1].value = d.herramientas   || '';
    if (tas[2]) tas[2].value = d.armasArmaduras || '';
    });

    _secc('armas', () => {
    // Armas
    if (Array.isArray(d.armas) && d.armas.length > 0) {
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

            if (Array.isArray(arma.bloques) && arma.bloques.length > 0) {
                const wrap    = fila.querySelector('.arma-daños-wrap');
                const primero = wrap.querySelector('.arma-daño-bloque');
                const b0 = arma.bloques[0];
                primero.querySelector('.arma-dado-qty').value  = b0.qty  || '1';
                primero.querySelector('.arma-dado-tipo').value = b0.dado || 'd8';
                primero.querySelector('.arma-tipo-daño').value = b0.tipo || 'Cortante';
                const bonoDEl = primero.querySelector('.arma-bono-daño');
                if (bonoDEl) {
                    bonoDEl.value = b0.bonoDaño || '0';
                    // Restaurar flag manual: si el jugador lo editó a mano,
                    // marcar para que recalcArma (llamado más abajo) no lo sobreescriba.
                    if (b0.bonoDañoManual) {
                        bonoDEl.dataset.manual = 'true';
                        bonoDEl.classList.add('bono-daño-manual');
                        bonoDEl.title = 'Bono fijado manualmente. Doble clic para restaurar el cálculo automático.';
                    }
                }

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
    });

    _secc('acciones', () => {
    // Acciones
    ['actions','bonus','reactions','otros'].forEach(tipo => {
        const arr = d[`acciones_${tipo}`];
        if (!Array.isArray(arr) || arr.length === 0) return;
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
    });

    _secc('recursos', () => {
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
    });

    _secc('características', () => {
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
                    if (c.subclaseSelect) selSub.value = _traducirClaveVieja('subclase', c.subclaseSelect, c.claseSelect);
                }
            }
        }
        if (c.especieSelect) {
            const sel = panel.querySelector('.sel-especie');
            if (sel) {
                const _esp = _traducirClaveVieja('especie', c.especieSelect);
                sel.value = _esp;
                _syncEspecieDropdownTrigger(panel, _esp);
            }
        }
        if (c.trasfondoSelect) {
            const sel = panel.querySelector('.sel-trasfondo');
            if (sel) sel.value = _traducirClaveVieja('trasfondo', c.trasfondoSelect);
        }

        // Restaurar datos multiclase
        if (c.mcClases && c.mcClases.length > 0 && typeof cargarMcDatos === 'function') {
            cargarMcDatos(panel, c.mcClases);
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
    });

    _secc('recálculo', () => {
    // Recalcular todo al final
    actualizarTodoPanel(panel);
    });

    _secc('multiclase y conjuros', () => {
    // Spellcasting: primero ejecutar multiclaseActualizar para que
    // _sincronizarSpellCounts genere los .spell-prep-bloque, luego
    // cargarSpellcasting restaura los valores guardados en ellos.
    multiclaseActualizar(panel);
    cargarSpellcasting(panel, d);
    });

    _secc('armadura', () => {
    // Armadura y CA
    const armSel = panel.querySelector('.armadura-sel');
    const escSel = panel.querySelector('.escudo-sel');
    const caInput = panel.querySelector('.csi-input');
    if (armSel && d.armaduraSel !== undefined) _seleccionarArmaduraGuardada(armSel, d.armaduraSel);
    if (escSel && d.escudoSel   !== undefined) escSel.value = d.escudoSel;
    if (armSel && armSel.value && caInput) {
        // CA derivada de armadura + DES + escudo + ajuste manual (caBonus)
        let bonus;
        if (d.caBonus !== undefined) {
            bonus = parseInt(d.caBonus);
        } else if (d.ca !== undefined) {
            // Fichas guardadas antes de existir caBonus: conservar la CA que tenía
            // la ficha (calculada con los valores de armadura con los que se guardó)
            bonus = (parseInt(d.ca) || 0) - _caFormula(panel, d.armaduraSel);
        }
        if (isNaN(bonus) || bonus === undefined) bonus = 0;
        caInput.dataset.caBonus = bonus;
        _aplicarArmadura(panel);
    } else if (d.ca && caInput) {
        caInput.value = d.ca;   // sin armadura elegida: la CA es manual
    }
    });

    _secc('roleplay', () => { cargarRoleplay(panel, d.roleplay); });

    _secc('bonos de armas', () => {
    // Recalcular bono de ataque de todas las armas DESPUÉS de que
    // multiclaseActualizar haya fijado el PB definitivo. Sin esto,
    // el arma-bono-total podría haberse calculado con el PB provisional
    // del momento de carga, y quedar desactualizado.
    panel.querySelectorAll('.arma-fila').forEach(fila => {
        const sel = fila.querySelector('.arma-stat-sel');
        if (sel) recalcArma(sel);
    });
    });

    setTimeout(() => {
        try {
            regenerarAccionesAuto(panel);
            cargarAutoNotas(panel, d.autoNotas);
        } catch (e) { console.warn('Error cargando acciones/notas automáticas:', e); }
    }, 0);

    return errores;
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
/* ── Rescate de datos que no se pudieron cargar ──────────────────────
   Si al arrancar alguna ficha guardada está dañada o incompleta, sus datos
   ORIGINALES se conservan en localStorage ('dnd_rescate') y se ofrece
   descargarlos, de modo que el autosave no los pise sin dejar rastro. */
let _rescateActual = null;   // { fecha, items:[{indice, motivo, datos}], raw? }

function _descargarRescate() {
    if (!_rescateActual) return;
    const r = _rescateActual;
    if (typeof r.raw === 'string') {
        _descargarTexto(r.raw, `dnd_rescate_almacenamiento_${_sufijoFecha()}.json`);
    } else {
        _descargarTexto(JSON.stringify(r.items.map(i => i.datos), null, 2), `dnd_rescate_fichas_${_sufijoFecha()}.json`);
    }
}

function _mostrarAvisoRescate() {
    const r = _rescateActual;
    if (!r) return;
    const n = r.items ? r.items.length : 0;
    const msg = typeof r.raw === 'string'
        ? '⚠ Los datos guardados estaban dañados y no se pudieron leer. Se ha conservado una copia de seguridad. Descárgala por si quieres recuperarla.'
        : `⚠ ${n} ficha${n === 1 ? '' : 's'} no se ${n === 1 ? 'pudo' : 'pudieron'} cargar por completo. Se conservan los datos originales: descárgalos y, si quieres, impórtalos desde "Importar".`;
    _mostrarAviso('aviso-rescate', msg, [
        { texto: '⬇ Descargar datos originales', accion: () => {
            _descargarRescate();
            _guardadoBloqueado = false;   // ya hay copia: se puede guardar con normalidad
        } },
        { texto: 'Descartar copia', accion: () => {
            try { localStorage.removeItem('dnd_rescate'); } catch (_) {}
            _rescateActual = null;
            _guardadoBloqueado = false;
            _quitarAviso('aviso-rescate');
        } },
    ], '#c05621');
}

function _guardarRescate(payload) {
    _rescateActual = payload;
    try {
        localStorage.setItem('dnd_rescate', JSON.stringify(payload));
    } catch (e) {
        // Sin sitio para la copia: no se sobrescribe nada hasta que el usuario la descargue
        if (typeof payload.raw === 'string') _guardadoBloqueado = true;
        console.warn('No se pudo guardar la copia de rescate:', e);
    }
    _mostrarAvisoRescate();
}

/* Carga las fichas de localStorage. Devuelve cuántas fichas quedaron abiertas.
   Una ficha dañada NUNCA impide cargar las demás. */
function _cargarFichasGuardadas() {
    let guardado = null, contador = null, activa = null;
    try {
        guardado = localStorage.getItem('dnd_fichas');
        contador = localStorage.getItem('dnd_contador');
        activa   = localStorage.getItem('dnd_activa');
    } catch (e) {
        console.warn('No se pudo acceder al almacenamiento:', e);
        return 0;
    }

    // Copia de rescate pendiente de una sesión anterior → volver a avisar
    try {
        const prev = localStorage.getItem('dnd_rescate');
        if (prev) { _rescateActual = JSON.parse(prev); _mostrarAvisoRescate(); }
    } catch (_) {}

    if (!guardado) return 0;

    let datos;
    try {
        datos = JSON.parse(guardado);
    } catch (e) {
        console.warn('Datos guardados ilegibles:', e);
        _guardarRescate({ fecha: new Date().toISOString(), raw: guardado, items: [] });
        return 0;
    }
    if (datos && !Array.isArray(datos) && typeof datos === 'object') datos = [datos];
    if (!Array.isArray(datos) || datos.length === 0) return 0;

    const n = parseInt(contador);
    contadorFichas = (!isNaN(n) && n >= datos.length) ? n - datos.length : 0;

    const rescate = [];
    datos.forEach((d, i) => {
        if (!d || typeof d !== 'object' || Array.isArray(d)) {
            rescate.push({ indice: i, motivo: 'Entrada no válida', datos: d });
            return;
        }
        try {
            const r = nuevaFicha(d);
            if (r && r.errores && r.errores.length) {
                rescate.push({ indice: i, motivo: r.errores.join('; '), datos: d });
            }
        } catch (e) {
            console.warn('Error cargando la ficha', i, e);
            rescate.push({ indice: i, motivo: e.message, datos: d });
        }
    });

    if (activa && fichas.find(f => f.id === activa)) activarFicha(activa);

    if (rescate.length) {
        const previos = (_rescateActual && Array.isArray(_rescateActual.items)) ? _rescateActual.items : [];
        // Evitar duplicar la misma ficha si se recarga varias veces sin que se llegue a guardar
        const firmas = new Set(previos.map(it => JSON.stringify(it.datos)));
        const nuevos = rescate.filter(it => !firmas.has(JSON.stringify(it.datos)));
        if (nuevos.length || !_rescateActual) {
            _guardarRescate({ fecha: new Date().toISOString(), items: previos.concat(nuevos) });
        }
    }
    return fichas.length;
}

/* Guardado robusto: captura cualquier cambio dentro de las fichas (aunque un
   control no tenga su propio handler) y vuelca el guardado al cerrar/ocultar. */
function _initGuardadoRobusto() {
    const cont = document.getElementById('fichas-contenedor');
    if (cont) {
        ['input', 'change', 'click'].forEach(ev =>
            cont.addEventListener(ev, () => guardarDebounced()));
    }
    window.addEventListener('pagehide', _volcarGuardadoPendiente);
    window.addEventListener('beforeunload', _volcarGuardadoPendiente);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') _volcarGuardadoPendiente();
    });
}

window.onload = function () {
    _initGuardadoRobusto();
    const hayCompartida = location.hash.startsWith('#ficha=');
    // Las fichas guardadas se cargan SIEMPRE; una ficha compartida se añade como pestaña nueva
    const cargadas = _cargarFichasGuardadas();
    if (hayCompartida) {
        _detectarFichaCompartida();
    } else if (cargadas === 0) {
        nuevaFicha();
    }
};
// DND_SPELLS cargado desde hechizos.js

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — INICIALIZACIÓN
═══════════════════════════════════════════════════════ */
function initSpellcasting(panel) {
    panel.querySelectorAll('.spell-nivel-bloque').forEach(bloque => {
        const nivel = parseInt(bloque.dataset.nivel);
        const añadirDiv = bloque.querySelector('.spell-nivel-añadir');
        if (!añadirDiv) return;
        const selViejo = añadirDiv.querySelector('.spell-sel-hechizo');
        if (selViejo) selViejo.remove();
        if (añadirDiv.querySelector('.spell-custom-dropdown')) return;
        const placeholder = nivel === 0 ? '— Añadir cantrip —' : '— Añadir hechizo —';
        const wrapper = document.createElement('div');
        wrapper.className = 'spell-custom-dropdown';
        wrapper.dataset.nivel = nivel;
        wrapper.dataset.selectedId = '';
        const trigger = document.createElement('div');
        trigger.className = 'spell-dropdown-trigger';
        trigger.textContent = placeholder;
        trigger.dataset.placeholder = placeholder;
        const listbox = document.createElement('div');
        listbox.className = 'spell-dropdown-listbox';
        const spells = DND_SPELLS[nivel] || [];
        spells.forEach(sp => {
            const item = document.createElement('div');
            item.className = 'spell-dropdown-item';
            item.dataset.spellId = sp.id;
            item.textContent = sp.n;
            item.addEventListener('mouseenter', () => spellCardShow(sp));
            item.addEventListener('mouseleave', () => spellCardHide());
            item.addEventListener('mousedown', (e) => {
                e.preventDefault();
                listbox.querySelectorAll('.spell-dropdown-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                wrapper.dataset.selectedId = sp.id;
                trigger.textContent = sp.n;
                trigger.classList.add('has-value');
                _cerrarDropdown(wrapper);
                spellCardHide();
            });
            listbox.appendChild(item);
        });
        wrapper.appendChild(trigger);
        wrapper.appendChild(listbox);
        const btnAdd = añadirDiv.querySelector('.btn-spell-add');
        añadirDiv.insertBefore(wrapper, btnAdd);
        trigger.addEventListener('click', () => {
            const estaAbierto = wrapper.classList.contains('open');
            panel.querySelectorAll('.spell-custom-dropdown.open').forEach(d => {
                if (d !== wrapper) _cerrarDropdown(d);
            });
            estaAbierto ? _cerrarDropdown(wrapper) : _abrirDropdown(wrapper);
        });
    });
}

function _abrirDropdown(wrapper) {
    wrapper.classList.add('open');
    const listbox = wrapper.querySelector('.spell-dropdown-listbox');
    if (!listbox) return;
    const rect = wrapper.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    if (spaceBelow < 220 && rect.top > 220) {
        listbox.style.top = 'auto'; listbox.style.bottom = '100%';
    } else {
        listbox.style.top = '100%'; listbox.style.bottom = 'auto';
    }
}
function _cerrarDropdown(wrapper) { wrapper.classList.remove('open'); }

document.addEventListener('click', (e) => {
    if (!e.target.closest('.spell-custom-dropdown')) {
        document.querySelectorAll('.spell-custom-dropdown.open').forEach(d => _cerrarDropdown(d));
    }
    if (!e.target.closest('.dote-custom-dropdown')) {
        document.querySelectorAll('.dote-custom-dropdown.open').forEach(d => d.classList.remove('open'));
    }
    if (!e.target.closest('.especie-custom-dropdown')) {
        document.querySelectorAll('.especie-custom-dropdown.open').forEach(d => d.classList.remove('open'));
    }
});

function _nivelMaxHechizo(nivelEfectivo) {
    if (nivelEfectivo <= 0) return 0;
    const slots = SLOTS_POR_NIVEL[Math.min(nivelEfectivo, 20) - 1];
    for (let i = 8; i >= 0; i--) { if (slots[i] > 0) return i + 1; }
    return 0;
}

function _refrescarFiltroNivelHechizos(fichaPanel) {
    const mcs = leerMulticlases(fichaPanel).filter(mc => mc.clase);
    const hayLanzador = mcs.some(mc => _castingDe(mc) !== 'none');
    const nivelEfectivo = calcNivelEfectivoSpell(mcs);
    const warlockMC = mcs.find(mc => _getClaseData(mc.clase).casting === 'warlock');
    let maxWarlock = 0;
    if (warlockMC) {
        const wNv = Math.min(parseInt(warlockMC.nivel) - 1, 19);
        maxWarlock = WARLOCK_SLOTS[wNv][1] + 1;
    }
    const maxNivel = Math.max(_nivelMaxHechizo(nivelEfectivo), maxWarlock);
    fichaPanel.querySelectorAll('.spell-nivel-bloque').forEach(bloque => {
        const nivel = parseInt(bloque.dataset.nivel);
        if (nivel === 0) return;
        const wrapper = bloque.querySelector('.spell-custom-dropdown');
        if (!wrapper) return;
        const esAccesible = hayLanzador && nivel <= maxNivel;

        // Gestionar checkbox de desbloqueo manual
        const chkDesbloq = bloque.querySelector('.spell-unlock-chk');
        const desbloqueadoManual = chkDesbloq?.checked || false;

        if (esAccesible) {
            // Nivel accesible: ocultar checkbox de desbloqueo (no hace falta)
            if (chkDesbloq) chkDesbloq.closest('.spell-unlock-wrap')?.classList.add('spell-unlock-oculto');
            wrapper.classList.remove('spell-dropdown-disabled');
            const trigger = wrapper.querySelector('.spell-dropdown-trigger');
            if (trigger) trigger.title = '';
        } else {
            // Nivel bloqueado por nivel/clase: mostrar checkbox
            if (chkDesbloq) chkDesbloq.closest('.spell-unlock-wrap')?.classList.remove('spell-unlock-oculto');
            const activar = desbloqueadoManual;
            wrapper.classList.toggle('spell-dropdown-disabled', !activar);
            const trigger = wrapper.querySelector('.spell-dropdown-trigger');
            if (trigger) trigger.title = activar ? `Nivel ${nivel} desbloqueado manualmente` : `Nivel ${nivel} no disponible con tus clases/nivel actuales`;
        }
    });
}

/* Llamado cuando el jugador marca/desmarca el checkbox de desbloqueo de nivel */
function toggleSpellNivelDesbloqueado(chk) {
    const bloque = chk.closest('.spell-nivel-bloque');
    if (!bloque) return;
    const fichaPanel = chk.closest('.ficha-panel');
    _refrescarFiltroNivelHechizos(fichaPanel);
    guardarDebounced();
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
    const bloque  = btn.closest('.spell-nivel-bloque');
    const nivel   = parseInt(bloque.dataset.nivel);
    const wrapper = bloque.querySelector('.spell-custom-dropdown');
    const spId    = wrapper?.dataset.selectedId || '';
    if (!spId) return;
    const sp = (DND_SPELLS[nivel] || []).find(s => s.id === spId);
    if (!sp) return;
    const lista = bloque.querySelector('.spell-lista-hechizos');
    if (lista.querySelector(`[data-spell-id="${spId}"]`)) { _resetDropdown(wrapper); return; }
    _renderSpellEntry(lista, sp);
    _resetDropdown(wrapper);
    guardarDebounced();
    const fichaPanel = btn.closest('.ficha-panel');
    if (fichaPanel) setTimeout(() => regenerarAccionesAuto(fichaPanel), 0);
}
function _resetDropdown(wrapper) {
    if (!wrapper) return;
    wrapper.dataset.selectedId = '';
    const trigger = wrapper.querySelector('.spell-dropdown-trigger');
    if (trigger) { trigger.textContent = trigger.dataset.placeholder; trigger.classList.remove('has-value'); }
    wrapper.querySelectorAll('.spell-dropdown-item.selected').forEach(i => i.classList.remove('selected'));
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
    chkPrep.addEventListener('change', function() {
        if (this.checked) {
            const fichaPanel = this.closest('.ficha-panel');
            if (fichaPanel) {
                // Sumar todos los valores de Preparados de todas las clases
                let maxPrep = 0;
                fichaPanel.querySelectorAll('.spell-prep-bloque input').forEach(inp => {
                    maxPrep += parseInt(inp.value) || 0;
                });
                // Contar cuántos están ya marcados (incluyendo este)
                const marcados = fichaPanel.querySelectorAll('.spell-prep-chk:checked').length;
                if (marcados > maxPrep) {
                    this.checked = false;
                    // Feedback visual breve en el bloque de Preparados
                    const container = fichaPanel.querySelector('.spell-preparados-container');
                    if (container) {
                        container.classList.add('prep-limite-alcanzado');
                        setTimeout(() => container.classList.remove('prep-limite-alcanzado'), 900);
                    }
                    return;
                }
            }
        }
        guardarDebounced();
    });

    // Nombre con tooltip
    const nombreWrap = document.createElement('div');
    nombreWrap.className = 'spell-entry-nombre-wrap';

    const nombre = document.createElement('span');
    nombre.className = 'spell-entry-nombre rollable-spell';
    nombre.title = 'Clic para tirar · Mantén para ver descripción';
    nombre.textContent = sp.n;
    nombre.addEventListener('mouseenter', () => spellCardShow(sp));
    nombre.addEventListener('mouseleave', () => spellCardHide());

    // Detectar si el hechizo es de concentración por sus datos
    const esConc = _esConcentracion(sp);

    // Tag "Concentración" — visible estáticamente si el hechizo lo requiere
    if (esConc) {
        const concTag = document.createElement('span');
        concTag.className = 'spell-conc-tag';
        concTag.textContent = 'Concentración';
        nombreWrap.appendChild(nombre);
        nombreWrap.appendChild(concTag);
    } else {
        nombreWrap.appendChild(nombre);
    }

    // Lógica de click: si es concentración, gestionar glow; si no, tirar directamente
    nombre.addEventListener('click', async (e) => {
        e.stopPropagation();
        spellCardHide();
        const panel = nombre.closest('.ficha-panel');
        if (!panel) return;

        if (esConc) {
            const yaConcentrando = entry.classList.contains('concentrando');
            if (yaConcentrando) {
                // Apagar glow → deja de concentrarse, sin tirar
                entry.classList.remove('concentrando');
                guardarDebounced();
                return;
            }
            // Comprobar si hay otro hechizo con glow activo
            const otroConcentrando = _getHechizoConcActivo(panel);
            if (otroConcentrando && otroConcentrando !== entry) {
                const nombreActivo = otroConcentrando.querySelector('.spell-entry-nombre')?.textContent || '?';
                const confirmar = await _modalConcentracion(nombreActivo, sp.n);
                if (!confirmar) return;
                // Apagar glow del anterior
                otroConcentrando.classList.remove('concentrando');
            }
            // Lanzar hechizo y activar glow SOLO si no se canceló el modal
            const lanzado = await tirarHechizo(sp, panel);
            if (lanzado !== false) entry.classList.add('concentrando');
        } else {
            tirarHechizo(sp, panel);
        }
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
    entry.appendChild(delBtn);
    lista.appendChild(entry);
}

/* ═══════════════════════════════════════════════════════
   SPELL CARD — tarjeta flotante global (fuera del template)
═══════════════════════════════════════════════════════ */
let _scTimer  = null;   // timer para mostrar
let _scMX = 0, _scMY = 0; // posición actual del ratón

(function _initSpellCard() {
    // Crear la card si no existe
    if (document.getElementById('spell-card-global')) return;
    const card = document.createElement('div');
    card.id = 'spell-card-global';
    card.innerHTML = `
        <div class="sc-header">
            <span class="sc-name"></span>
            <span class="sc-school"></span>
        </div>
        <div class="sc-grid">
            <div class="sc-row"><span class="sc-lbl">Lanzamiento</span><span class="sc-val sc-casting"></span></div>
            <div class="sc-row"><span class="sc-lbl">Alcance</span><span class="sc-val sc-range"></span></div>
            <div class="sc-row"><span class="sc-lbl">Componentes</span><span class="sc-val sc-components"></span></div>
            <div class="sc-row"><span class="sc-lbl">Duración</span><span class="sc-val sc-duration"></span></div>
        </div>
        <div class="sc-desc"></div>
        <div class="sc-damage-wrap" style="display:none">
            <span class="sc-lbl">Daño / Efecto</span>
            <span class="sc-damage"></span>
        </div>
        <div class="sc-extra-wrap" style="display:none">
            <span class="sc-extra"></span>
        </div>`;
    document.body.appendChild(card);

    // Mover con el ratón
    document.addEventListener('mousemove', (e) => {
        _scMX = e.clientX;
        _scMY = e.clientY;
        if (card.classList.contains('sc-visible')) {
            _scPosition(card, e.clientX, e.clientY);
        }
    });
})();

function _scPosition(card, cx, cy) {
    const W = window.innerWidth, H = window.innerHeight;
    const TW = card.offsetWidth  || 380;
    const TH = card.offsetHeight || 300;
    let x = cx + 18, y = cy + 14;
    if (x + TW > W - 8) x = cx - TW - 14;
    if (y + TH > H - 8) y = H  - TH - 8;
    if (x < 4) x = 4;
    if (y < 4) y = 4;
    card.style.left = x + 'px';
    card.style.top  = y + 'px';
}

function spellCardShow(sp) {
    clearTimeout(_scTimer);
    _scTimer = setTimeout(() => {
        const card = document.getElementById('spell-card-global');
        if (!card) return;

        card.querySelector('.sc-name').textContent    = sp.n;
        card.querySelector('.sc-school').textContent  = `${sp.nivel} · ${sp.escuela}`;
        card.querySelector('.sc-casting').textContent = sp.casting    || '—';
        card.querySelector('.sc-range').textContent   = sp.range      || '—';
        card.querySelector('.sc-components').textContent = sp.components || '—';
        card.querySelector('.sc-duration').textContent   = sp.duration   || '—';
        card.querySelector('.sc-desc').textContent       = sp.desc       || '';

        const dmgWrap = card.querySelector('.sc-damage-wrap');
        if (sp.damage) {
            card.querySelector('.sc-damage').textContent = sp.damage;
            dmgWrap.style.display = '';
        } else {
            dmgWrap.style.display = 'none';
        }

        const extWrap = card.querySelector('.sc-extra-wrap');
        if (sp.extra) {
            card.querySelector('.sc-extra').textContent = sp.extra;
            extWrap.style.display = '';
        } else {
            extWrap.style.display = 'none';
        }

        _scPosition(card, _scMX, _scMY);
        card.classList.add('sc-visible');
    }, 220);
}

function spellCardHide() {
    clearTimeout(_scTimer);
    const card = document.getElementById('spell-card-global');
    if (card) card.classList.remove('sc-visible');
}

// Compatibilidad con código que aún llame a las funciones viejas
function mostrarTooltipHechizo(sp, evt) { spellCardShow(sp); }
function ocultarTooltipHechizo()        { spellCardHide();   }

/* ═══════════════════════════════════════════════════════
   DOTE CARD — tarjeta flotante de información de dotes
   Misma arquitectura que spell-card-global.
═══════════════════════════════════════════════════════ */
let _dcTimer = null;
let _dcMX = 0, _dcMY = 0;

(function _initDoteCard() {
    if (document.getElementById('dote-card-global')) return;
    const card = document.createElement('div');
    card.id = 'dote-card-global';
    card.innerHTML = `
        <div class="dc-header">
            <span class="dc-name"></span>
            <span class="dc-tipo"></span>
        </div>
        <div class="dc-desc"></div>`;
    document.body.appendChild(card);

    document.addEventListener('mousemove', (e) => {
        _dcMX = e.clientX;
        _dcMY = e.clientY;
        if (card.classList.contains('dc-visible')) {
            _dcPosition(card, e.clientX, e.clientY);
        }
    });
})();

function _dcPosition(card, cx, cy) {
    const W = window.innerWidth, H = window.innerHeight;
    const TW = card.offsetWidth  || 340;
    const TH = card.offsetHeight || 200;
    let x = cx + 18, y = cy + 14;
    if (x + TW > W - 8) x = cx - TW - 14;
    if (y + TH > H - 8) y = H  - TH - 8;
    if (x < 4) x = 4;
    if (y < 4) y = 4;
    card.style.left = x + 'px';
    card.style.top  = y + 'px';
}

const _DOTE_TIPO_LABEL = {
    'Origen': 'Dote de Origen',
    'General': 'Dote General',
    'Estilo de Combate': 'Estilo de Combate',
    'Epic Boon': 'Epic Boon (Nv. 19+)',
};

window.doteCardShow = function(dote) {
    clearTimeout(_dcTimer);
    _dcTimer = setTimeout(() => {
        const card = document.getElementById('dote-card-global');
        if (!card) return;
        card.querySelector('.dc-name').textContent = dote.n || '';
        // Determinar etiqueta de tipo
        const tipo = dote.tipo || '';
        const etqKey = Object.keys(_DOTE_TIPO_LABEL).find(k =>
            tipo === k || tipo.startsWith(k) || tipo.includes(k)
        );
        card.querySelector('.dc-tipo').textContent = _DOTE_TIPO_LABEL[etqKey] || tipo || 'Dote';
        card.querySelector('.dc-desc').textContent = dote.d || '';
        _dcPosition(card, _dcMX, _dcMY);
        card.classList.add('dc-visible');
    }, 220);
};

window.doteCardHide = function() {
    clearTimeout(_dcTimer);
    const card = document.getElementById('dote-card-global');
    if (card) card.classList.remove('dc-visible');
};

/* ═══════════════════════════════════════════════════════
   ESPECIE CARD — tarjeta flotante de información de especie
═══════════════════════════════════════════════════════ */
let _ecTimer = null;
let _ecMX = 0, _ecMY = 0;

(function _initEspecieCard() {
    if (document.getElementById('especie-card-global')) return;
    const card = document.createElement('div');
    card.id = 'especie-card-global';
    card.innerHTML = `
        <div class="ec-header">
            <span class="ec-name"></span>
        </div>
        <div class="ec-rasgos"></div>`;
    document.body.appendChild(card);

    document.addEventListener('mousemove', (e) => {
        _ecMX = e.clientX;
        _ecMY = e.clientY;
        if (card.classList.contains('ec-visible')) {
            _ecPosition(card, e.clientX, e.clientY);
        }
    });
})();

function _ecPosition(card, cx, cy) {
    const W = window.innerWidth, H = window.innerHeight;
    const TW = card.offsetWidth  || 340;
    const TH = card.offsetHeight || 220;
    let x = cx + 18, y = cy + 14;
    if (x + TW > W - 8) x = cx - TW - 14;
    if (y + TH > H - 8) y = H  - TH - 8;
    if (x < 4) x = 4;
    if (y < 4) y = 4;
    card.style.left = x + 'px';
    card.style.top  = y + 'px';
}

window.especieCardShow = function(nombre, rasgos) {
    clearTimeout(_ecTimer);
    _ecTimer = setTimeout(() => {
        const card = document.getElementById('especie-card-global');
        if (!card) return;
        card.querySelector('.ec-name').textContent = nombre || '';
        const rasgosEl = card.querySelector('.ec-rasgos');
        rasgosEl.innerHTML = '';
        if (rasgos && rasgos.length) {
            rasgos.forEach(r => {
                const fila = document.createElement('div');
                fila.className = 'ec-rasgo';
                fila.innerHTML = `<span class="ec-rasgo-n">${_esc(r.n)}</span><span class="ec-rasgo-d">${_esc(r.d)}</span>`;
                rasgosEl.appendChild(fila);
            });
        }
        _ecPosition(card, _ecMX, _ecMY);
        card.classList.add('ec-visible');
    }, 220);
};

window.especieCardHide = function() {
    clearTimeout(_ecTimer);
    const card = document.getElementById('especie-card-global');
    if (card) card.classList.remove('ec-visible');
};

/* ═══════════════════════════════════════════════════════
   SPELLCASTING — PERSISTENCIA
═══════════════════════════════════════════════════════ */
function leerSpellcasting(panel) {
    const d = {};
    const statEl = panel.querySelector('.spell-stat-sel');
    d.spellStat      = statEl?.value || '';
    d.spellDcExtra   = panel.querySelector('.spell-dc-extra')?.value  || '0';
    d.spellAtkExtra  = panel.querySelector('.spell-atk-extra')?.value || '0';
    d.spellCantrips  = panel.querySelector('.spell-cantrips-input')?.value || '0';
    // Guardar preparados como objeto {clase: valor}
    d.spellPreparadosPorClase = {};
    panel.querySelectorAll('.spell-prep-bloque').forEach(bloque => {
        const clase = bloque.dataset.clase || '_default';
        d.spellPreparadosPorClase[clase] = bloque.querySelector('input')?.value || '0';
    });

    d.spellNiveles = [];
    panel.querySelectorAll('.spell-nivel-bloque').forEach(bloque => {
        const nivel = parseInt(bloque.dataset.nivel);
        // Slots
        const slots = Array.from(bloque.querySelectorAll('.slot-chk')).map(c => c.checked);
        // Hechizos
        const hechizos = Array.from(bloque.querySelectorAll('.spell-entry')).map(entry => ({
            id:          entry.dataset.spellId,
            prep:        entry.querySelector('.spell-prep-chk')?.checked || false,
            concentrando: entry.classList.contains('concentrando'),
        }));
        // Desbloqueo manual
        const desbloqueado = bloque.querySelector('.spell-unlock-chk')?.checked || false;
        d.spellNiveles.push({ nivel, slots, hechizos, desbloqueado });
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

    const cantripInput = panel.querySelector('.spell-cantrips-input');
    if (cantripInput) cantripInput.value = d.spellCantrips || '0';

    // Restaurar preparados por clase (los campos se habrán generado ya por _sincronizarSpellCounts)
    if (d.spellPreparadosPorClase) {
        panel.querySelectorAll('.spell-prep-bloque').forEach(bloque => {
            const clase = bloque.dataset.clase || '_default';
            if (d.spellPreparadosPorClase[clase] !== undefined) {
                const inp = bloque.querySelector('input');
                if (inp) inp.value = d.spellPreparadosPorClase[clase];
            }
        });
    } else if (d.spellPreparados) {
        // Compatibilidad con fichas antiguas: volcar en el primer campo
        const primer = panel.querySelector('.spell-prep-bloque input');
        if (primer) primer.value = d.spellPreparados;
    }

    d.spellNiveles.forEach(nd => {
        const bloque = panel.querySelector(`.spell-nivel-bloque[data-nivel="${nd.nivel}"]`);
        if (!bloque) return;

        // Restaurar desbloqueo manual
        const chkDesbloq = bloque.querySelector('.spell-unlock-chk');
        if (chkDesbloq && nd.desbloqueado) chkDesbloq.checked = true;

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
                if (h.concentrando) entry.classList.add('concentrando');
            });
        }
    });

    recalcSpellcasting(panel);

    // Aplicar filtro de nivel máximo de hechizos DESPUÉS de reconstruir los slots/hechizos
    // Sin esto, al recargar la página todos los niveles aparecen habilitados hasta que
    // el jugador cambia algo manualmente.
    setTimeout(() => _refrescarFiltroNivelHechizos(panel), 0);
}

/* ═══════════════════════════════════════════════════════
   EXPORTAR / IMPORTAR JSON
═══════════════════════════════════════════════════════ */
function exportarFichasJSON() {
    guardarTodo();
    const fichaActiva = fichas.find(f => f.id === fichaActual);
    if (!fichaActiva) return;
    const datos = leerFicha(fichaActiva.panel);
    const json = JSON.stringify(datos, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const nombre = datos?.nombre?.trim() || 'personaje';
    a.download = `dnd_ficha_${nombre.replace(/\s+/g,'_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

/* ¿Tiene pinta de ser una ficha de este programa? */
function _pareceFicha(d) {
    return !!d && typeof d === 'object' && !Array.isArray(d)
        && ['stats', 'multiclases', 'nombre', 'caract', 'hpMax', 'dgGrupos', 'habilidades', 'armas']
            .some(k => d[k] !== undefined);
}

/* Importar: cada ficha del archivo se añade como una PESTAÑA NUEVA con un id nuevo.
   Nunca toca ni sustituye las fichas que ya estén abiertas. */
function importarFichasJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const raw = JSON.parse(e.target.result);
            const lista = (Array.isArray(raw) ? raw : [raw]).filter(_pareceFicha);
            if (!lista.length) throw new Error('No se encontró ninguna ficha en el archivo.');
            let importadas = 0, conAvisos = 0;
            lista.forEach(d => {
                try {
                    const r = nuevaFicha(d, { nuevoId: true });
                    importadas++;
                    if (r && r.errores && r.errores.length) conAvisos++;
                } catch (errFicha) {
                    console.warn('No se pudo importar una ficha:', errFicha);
                }
            });
            if (!importadas) throw new Error('No se pudo importar ninguna ficha.');
            guardarTodo();
            _mostrarToast(
                `✔ ${importadas} ficha${importadas === 1 ? '' : 's'} importada${importadas === 1 ? '' : 's'} en pestaña${importadas === 1 ? ' nueva' : 's nuevas'}.` +
                (conAvisos ? ` (${conAvisos} con datos que no se pudieron restaurar del todo)` : ''),
                conAvisos ? 'error' : undefined);
        } catch(err) {
            alert('Error al importar: el archivo no es válido.\n' + err.message);
        }
    };
    reader.onerror = function() { alert('Error al importar: no se pudo leer el archivo.'); };
    reader.readAsText(file);
    event.target.value = '';
}


/* ═══════════════════════════════════════════════════════
   COMPARTIR FICHA — URL con datos comprimidos en el hash
═══════════════════════════════════════════════════════ */

/* Comprime un string con DeflateRaw y devuelve base64url */
async function _comprimirABase64(str) {
    const bytes = new TextEncoder().encode(str);
    const cs = new CompressionStream('deflate-raw');
    const writer = cs.writable.getWriter();
    writer.write(bytes);
    writer.close();
    const chunks = [];
    const reader = cs.readable.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
    }
    const totalLen = chunks.reduce((s, c) => s + c.length, 0);
    const out = new Uint8Array(totalLen);
    let offset = 0;
    for (const chunk of chunks) { out.set(chunk, offset); offset += chunk.length; }
    // Convertir a base64url (sin +/= para uso seguro en URL).
    // Por bloques: String.fromCharCode(...out) revienta la pila con fichas grandes.
    let bin = '';
    const BLOQUE = 0x8000;
    for (let i = 0; i < out.length; i += BLOQUE) {
        bin += String.fromCharCode.apply(null, out.subarray(i, i + BLOQUE));
    }
    let b64 = btoa(bin);
    return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/* Descomprime base64url → string original */
async function _descomprimirDeBase64(b64url) {
    let b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const ds = new DecompressionStream('deflate-raw');
    const writer = ds.writable.getWriter();
    writer.write(bytes);
    writer.close();
    const chunks = [];
    const reader = ds.readable.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
    }
    const totalLen = chunks.reduce((s, c) => s + c.length, 0);
    const out = new Uint8Array(totalLen);
    let offset = 0;
    for (const chunk of chunks) { out.set(chunk, offset); offset += chunk.length; }
    return new TextDecoder().decode(out);
}

/* Muestra un toast de confirmación */
function _mostrarToast(msg, tipo) {
    let toast = document.getElementById('share-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'share-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'share-toast-visible' + (tipo === 'error' ? ' share-toast-error' : '');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => { toast.className = ''; }, 3200);
}

async function compartirFicha() {
    guardarTodo();
    const fichaActiva = fichas.find(f => f.id === fichaActual);
    if (!fichaActiva) { _mostrarToast('No hay ficha activa.', 'error'); return; }

    const datos = leerFicha(fichaActiva.panel);

    // Eliminar imágenes (base64 muy grandes, no caben en URL)
    const datosLimpios = JSON.parse(JSON.stringify(datos));
    datosLimpios.retratoCab = '';
    if (datosLimpios.roleplay) {
        datosLimpios.roleplay.imagen = '';
        if (Array.isArray(datosLimpios.roleplay.imagenes)) {
            datosLimpios.roleplay.imagenes = [];
        }
    }

    try {
        const json = JSON.stringify(datosLimpios);
        const comprimido = await _comprimirABase64(json);
        const url = location.href.split('#')[0] + '#ficha=' + comprimido;

        if (url.length > 1_900_000) {
            _mostrarToast('⚠ La ficha es demasiado grande para compartir por URL.', 'error');
            return;
        }

        if (await _copiarAlPortapapeles(url)) {
            _mostrarToast('✔ URL copiada al portapapeles. Las imágenes no se incluyen.');
        } else {
            // Sin acceso al portapapeles (p. ej. abierto como archivo local): mostrar el enlace para copiarlo a mano
            window.prompt('No se pudo copiar automáticamente. Copia este enlace (Ctrl+C):', url);
        }
    } catch (err) {
        _mostrarToast('Error al generar la URL: ' + err.message, 'error');
    }
}

/* Copia texto al portapapeles; devuelve true/false (con alternativa para contextos no seguros) */
async function _copiarAlPortapapeles(texto) {
    try {
        if (navigator.clipboard && window.isSecureContext !== false) {
            await navigator.clipboard.writeText(texto);
            return true;
        }
    } catch (_) { /* seguir con la alternativa */ }
    try {
        const ta = document.createElement('textarea');
        ta.value = texto;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        ta.remove();
        return !!ok;
    } catch (_) {
        return false;
    }
}

/* Al cargar la página, detectar hash con datos de ficha compartida */
async function _detectarFichaCompartida() {
    const hash = location.hash;
    if (!hash.startsWith('#ficha=')) { if (fichas.length === 0) nuevaFicha(); return; }
    const b64 = hash.slice('#ficha='.length);
    // Limpiar el hash de la URL sin recargar
    try { history.replaceState(null, '', location.pathname + location.search); } catch (_) {}
    if (!b64) { if (fichas.length === 0) nuevaFicha(); return; }
    try {
        const json = await _descomprimirDeBase64(b64);
        const datos = JSON.parse(json);
        if (!_pareceFicha(datos)) throw new Error('el enlace no contiene una ficha válida');
        // Pestaña NUEVA con id propio: las fichas que ya tengas no se tocan
        const r = nuevaFicha(datos, { nuevoId: true });
        guardarTodo();
        if (r && r.errores && r.errores.length) {
            _mostrarToast('Ficha compartida cargada, pero algunos datos no se pudieron restaurar.', 'error');
        } else {
            _mostrarToast('✔ Ficha compartida añadida en una pestaña nueva.');
        }
    } catch (err) {
        _mostrarToast('Error al cargar la ficha compartida: ' + err.message, 'error');
        if (fichas.length === 0) nuevaFicha();   // nunca dejar la app sin ninguna ficha
    }
}

/* ═══════════════════════════════════════════════════════
   PÁGINA DE ROLEPLAY
═══════════════════════════════════════════════════════ */

// ── Compresión de imágenes antes de guardar en localStorage ──────────
// Redimensiona a máx. 600px en el lado mayor y comprime a JPEG 0.75
// para evitar QuotaExceededError con imágenes grandes.
function _comprimirImagen(dataURL, callback) {
    const MAX = 600;
    const QUALITY = 0.75;
    const img = new Image();
    img.onload = function() {
        let w = img.width, h = img.height;
        if (w > MAX || h > MAX) {
            if (w >= h) { h = Math.round(h * MAX / w); w = MAX; }
            else        { w = Math.round(w * MAX / h); h = MAX; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        callback(canvas.toDataURL('image/jpeg', QUALITY));
    };
    img.src = dataURL;
}

// ── Imagen de apariencia ──────────────────────────────
function roleplayCargarImagen(event, input) {
    const file = event.target.files[0];
    if (!file) return;
    const contenedor = input.closest('.apariencia-contenedor');
    const reader = new FileReader();
    reader.onload = function(e) {
        _comprimirImagen(e.target.result, function(compressed) {
            _roleplaySetImagen(contenedor, compressed);
            guardarDebounced();
        });
    };
    reader.readAsDataURL(file);
}

function roleplayDropImagen(event, contenedor) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        _comprimirImagen(e.target.result, function(compressed) {
            _roleplaySetImagen(contenedor, compressed);
            guardarDebounced();
        });
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
/* Claves = nombres EXACTOS de DND_CLASES en caracteristicas.js */
const CLASE_DATA = {
    'Artificer':    { diceHit:'d8',  casting:'half',    spellStat:'INT', knownCaster:false,
                      preparedFormula:(nv,mod) => Math.floor(nv/2) + mod },
    'Bárbaro':      { diceHit:'d12', casting:'none' },
    'Bardo':        { diceHit:'d8',  casting:'full',    spellStat:'CAR', knownCaster:true  },
    'Blood Hunter': { diceHit:'d10', casting:'none' },
    'Brujo':        { diceHit:'d8',  casting:'warlock', spellStat:'CAR', knownCaster:true  },
    'Clérigo':      { diceHit:'d8',  casting:'full',    spellStat:'SAB', knownCaster:false,
                      preparedFormula:(nv,mod) => nv + mod },
    'Druida':       { diceHit:'d8',  casting:'full',    spellStat:'SAB', knownCaster:false,
                      preparedFormula:(nv,mod) => nv + mod },
    'Explorador':   { diceHit:'d10', casting:'half',    spellStat:'SAB', knownCaster:true  },
    // Caballero Arcano: lanzador de un tercio (solo con esa subclase)
    'Guerrero':     { diceHit:'d10', casting:'none',    spellStat:'INT', knownCaster:true,
                      subclaseCasting:{ 'Caballero Arcano':'third' } },
    'Hechicero':    { diceHit:'d6',  casting:'full',    spellStat:'CAR', knownCaster:true  },
    'Mago':         { diceHit:'d6',  casting:'full',    spellStat:'INT', knownCaster:true,
                      preparedFormula:(nv,mod) => nv + mod },
    'Monje':        { diceHit:'d8',  casting:'none' },
    'Paladín':      { diceHit:'d10', casting:'half',    spellStat:'CAR', knownCaster:false,
                      preparedFormula:(nv,mod) => Math.floor(nv/2) + mod },
    // Tramposo Arcano: lanzador de un tercio (solo con esa subclase)
    'Pícaro':       { diceHit:'d8',  casting:'none',    spellStat:'INT', knownCaster:true,
                      subclaseCasting:{ 'Tramposo Arcano':'third' } },
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
/* Warlock Pact Magic PHB 2024: [cantidad_slots, nivel_max_idx_0based]
   Nivel idx 0=nivel1, 1=nivel2, 2=nivel3, 3=nivel4, 4=nivel5 */
const WARLOCK_SLOTS = [
    [1,0],  // Nv1:  1 slot nivel 1
    [2,0],  // Nv2:  2 slots nivel 1
    [2,1],  // Nv3:  2 slots nivel 2
    [2,1],  // Nv4:  2 slots nivel 2
    [2,2],  // Nv5:  2 slots nivel 3
    [2,2],  // Nv6:  2 slots nivel 3
    [2,3],  // Nv7:  2 slots nivel 4
    [2,3],  // Nv8:  2 slots nivel 4
    [2,4],  // Nv9:  2 slots nivel 5
    [2,4],  // Nv10: 2 slots nivel 5
    [3,4],  // Nv11: 3 slots nivel 5
    [3,4],  // Nv12: 3 slots nivel 5
    [3,4],  // Nv13: 3 slots nivel 5
    [3,4],  // Nv14: 3 slots nivel 5
    [3,4],  // Nv15: 3 slots nivel 5
    [3,4],  // Nv16: 3 slots nivel 5
    [4,4],  // Nv17: 4 slots nivel 5
    [4,4],  // Nv18: 4 slots nivel 5
    [4,4],  // Nv19: 4 slots nivel 5
    [4,4],  // Nv20: 4 slots nivel 5
];

/* Cantrips conocidos por clase y nivel (tabla PHB 2024) */
const CANTRIPS_CONOCIDOS = {
    // Índice 0 = nivel 1 … índice 19 = nivel 20  (PHB 2024, tablas oficiales)
    // Artificer: 2,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4
    'Artificer': [2,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4],
    // Bardo: 2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4
    'Bardo':     [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
    // Brujo: 2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4
    'Brujo':     [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
    // Clérigo: 3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5
    'Clérigo':   [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
    // Druida: 2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4
    'Druida':    [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
    // Explorador: sin cantrips
    'Explorador':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // Hechicero: 4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6
    'Hechicero': [4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6],
    // Mago: 3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5
    'Mago':      [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
    // Paladín: sin cantrips
    'Paladín':   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // Guerrero (solo subclase Caballero Arcano, nv.3+): 2 trucos, 3 a nivel 10
    'Guerrero':  [0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3],
    // Pícaro (solo subclase Tramposo Arcano, nv.3+): 3 trucos (incl. Mano de Mago), 4 a nivel 10
    'Pícaro':    [0,0,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
};

/* Hechizos Preparados por clase y nivel (PHB 2024, tablas oficiales de capturas) */
const HECHIZOS_PREPARADOS_2024 = {
    // Artificer: 2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15
    'Artificer': [2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15],
    // Bardo: 4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22
    'Bardo':     [4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
    // Brujo: 2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15
    'Brujo':     [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15],
    // Clérigo: 4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22
    'Clérigo':   [4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
    // Druida: 4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22
    'Druida':    [4,5,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
    // Explorador: 2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15
    'Explorador':[2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15],
    // Hechicero: 2,4,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22
    'Hechicero': [2,4,6,7,9,10,11,12,14,15,16,16,17,17,18,18,19,20,21,22],
    // Mago: 4,5,6,7,9,10,11,12,14,15,16,16,17,18,19,21,22,23,24,25
    'Mago':      [4,5,6,7,9,10,11,12,14,15,16,16,17,18,19,21,22,23,24,25],
    // Paladín: 2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15
    'Paladín':   [2,3,4,5,6,6,7,7,9,9,10,10,11,11,12,12,14,14,15,15],
    // Guerrero (Caballero Arcano) y Pícaro (Tramposo Arcano), nv.3+: 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
    'Guerrero':  [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13],
    'Pícaro':    [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13],
};

/* ── Bono de Competencia por nivel total ── */
function calcPB(nivelTotal) {
    if (nivelTotal >= 17) return 6;
    if (nivelTotal >= 13) return 5;
    if (nivelTotal >= 9)  return 4;
    if (nivelTotal >= 5)  return 3;
    return 2;
}

/* Tipo de lanzamiento EFECTIVO de una entrada {clase, nivel, subclase}:
   Guerrero y Pícaro solo lanzan conjuros con la subclase adecuada. */
function _castingDe(mc) {
    if (!mc || !mc.clase) return 'none';
    const data = _getClaseData(mc.clase);
    if (data.subclaseCasting) {
        const sub = String(mc.subclase || '');
        for (const [prefijo, tipo] of Object.entries(data.subclaseCasting)) {
            if (sub.startsWith(prefijo)) return tipo;
        }
    }
    return data.casting;
}

/* ── Nivel efectivo de lanzamiento (PHB 2024) ──
   · Lanzadores completos: todos sus niveles.
   · Mitad (Paladín, Explorador, Artificer): mitad de sus niveles REDONDEADA HACIA ARRIBA.
   · Tercio (Caballero Arcano, Tramposo Arcano): empiezan a lanzar en nivel 3;
       con UNA sola clase lanzadora se usa su tabla de clase (= tercio hacia arriba);
       en multiclase cuentan un tercio de sus niveles redondeado HACIA ABAJO.
   · Brujo (Magia de Pacto) se trata aparte. */
function calcNivelEfectivoSpell(multiclases) {
    const lanzadoras = multiclases.filter(mc => {
        const t = _castingDe(mc);
        return t === 'full' || t === 'half' || (t === 'third' && (parseInt(mc.nivel) || 0) >= 3);
    });
    const unica = lanzadoras.length === 1;
    let efectivo = 0;
    lanzadoras.forEach(mc => {
        const tipo = _castingDe(mc);
        const nv   = parseInt(mc.nivel) || 0;
        if (tipo === 'full')      efectivo += nv;
        else if (tipo === 'half') efectivo += Math.ceil(nv / 2);
        else                      efectivo += unica ? Math.ceil(nv / 3) : Math.floor(nv / 3);
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

/* ── Añadir nueva clase al widget superior ──
   Si NO estamos en una sincronización, también crea pestaña en el inferior. ── */
function multiclaseAñadir(btn) {
    const lista = btn.closest('.multiclase-widget').querySelector('.multiclase-lista');
    const fila = _multiclaseFila('', 1);
    lista.appendChild(fila);
    fila.querySelector('.multiclase-sel').focus();
    const fichaPanel = btn.closest('.ficha-panel');
    // Sincronizar widget inferior si no estamos ya en un sync
    if (fichaPanel && !_syncingWidgets) {
        if (typeof mcAddTab === 'function') {
            const addBtnInf = fichaPanel.querySelector('.caract-mc-add');
            if (addBtnInf) {
                _syncingWidgets = true;
                try { mcAddTab(addBtnInf); } finally { _syncingWidgets = false; }
            }
        }
    }
    if (fichaPanel) multiclaseActualizar(fichaPanel);
}

/* ── Leer datos actuales — widget superior es la fuente de verdad.
   Si el superior está vacío, leer del inferior (Características) como fallback.
   Esto garantiza que siempre hay datos disponibles. ── */
/* Subclase elegida para cada clase (se elige en el widget inferior, Características) */
function _mapaSubclases(fichaPanel) {
    const mapa = {};
    fichaPanel.querySelectorAll('.caract-mc-body .mc-pagina').forEach(pag => {
        const c = pag.querySelector('.mc-sel-clase')?.value;
        if (c) mapa[c] = pag.querySelector('.mc-sel-subclase')?.value || '';
    });
    return mapa;
}

function leerMulticlases(fichaPanel) {
    const filas = fichaPanel.querySelectorAll('.multiclase-fila');
    const subs  = _mapaSubclases(fichaPanel);
    const desdeSup = Array.from(filas).map(f => {
        const clase = f.querySelector('.multiclase-sel')?.value || '';
        return {
            clase,
            nivel: parseInt(f.querySelector('.multiclase-nivel')?.value) || 1,
            subclase: subs[clase] || '',
        };
    }).filter(mc => mc.clase);

    if (desdeSup.length > 0) return desdeSup;

    // Fallback: leer del widget inferior (caract-mc-body) si el superior está vacío
    const mcBody = fichaPanel.querySelector('.caract-mc-body');
    if (mcBody) {
        const paginas = mcBody.querySelectorAll('.mc-pagina');
        const desdeInf = Array.from(paginas).map(pag => ({
            clase: pag.querySelector('.mc-sel-clase')?.value  || '',
            nivel: parseInt(pag.querySelector('.mc-nivel-sel')?.value) || 1,
            subclase: pag.querySelector('.mc-sel-subclase')?.value || '',
        })).filter(mc => mc.clase);
        if (desdeInf.length > 0) return desdeInf;
    }

    // Devolver la fila vacía del superior para que el resto del código no rompa
    return Array.from(filas).map(f => ({
        clase: f.querySelector('.multiclase-sel')?.value || '',
        nivel: parseInt(f.querySelector('.multiclase-nivel')?.value) || 1,
    }));
}

/* ── Sincronizar widget inferior (caract-mc-body) con el superior ──
   Llamar siempre después de cualquier cambio en el widget superior.
   _syncing evita bucles de retroalimentación. ── */
function syncWidgetsSupToInf(fichaPanel) {
    if (_syncingWidgets) return;
    _syncingWidgets = true;
    try {
        const mcs = leerMulticlases(fichaPanel); // lee del superior
        if (typeof cargarMcDatos === 'function') {
            const mcBody = fichaPanel.querySelector('.caract-mc-body');
            // Recordar qué clase estaba activa antes de reconstruir
            const claseActiva = mcBody
                ? mcBody.querySelector('.mc-pagina.mc-activa .mc-sel-clase')?.value || null
                : null;

            // Snapshot del estado actual del panel inferior ANTES de reconstruir,
            // indexado por posición (no por clase) para sobrevivir cambios de clase
            const paginas = mcBody ? Array.from(mcBody.querySelectorAll('.mc-pagina')) : [];
            const datosConTexto = mcs.map((mc, i) => {
                // Primero intentar encontrar por clase (clase que no cambió)
                let pagExistente = paginas.find(p =>
                    p.querySelector('.mc-sel-clase')?.value === mc.clase);
                // Si no coincide por clase (la clase cambió), usar la página en la misma posición
                if (!pagExistente && paginas[i]) pagExistente = paginas[i];
                const claseTextoActual = pagExistente?.querySelector('.mc-ta-clase')?.value || '';
                const subclaseActual   = pagExistente?.querySelector('.mc-sel-subclase')?.value || '';
                const subclaseTexto    = pagExistente?.querySelector('.mc-ta-subclase')?.value  || '';
                const claseAnterior    = pagExistente?.querySelector('.mc-sel-clase')?.value || '';
                return {
                    clase:         mc.clase,
                    nivel:         mc.nivel,
                    // Preservar texto solo si la clase NO cambió; si cambió, dejar vacío
                    // para que el onchange lo rellene automáticamente
                    claseTexto:    (claseAnterior === mc.clase) ? claseTextoActual : '',
                    subclase:      (claseAnterior === mc.clase) ? subclaseActual   : '',
                    subclaseTexto: (claseAnterior === mc.clase) ? subclaseTexto    : '',
                };
            });
            cargarMcDatos(fichaPanel, datosConTexto);

            // Disparar onchange en páginas cuya textarea de clase esté vacía
            // (clase nueva → auto-rellenar rasgos como si el usuario la seleccionara)
            const paginas2 = mcBody ? mcBody.querySelectorAll('.mc-pagina') : [];
            paginas2.forEach(pag => {
                const sel = pag.querySelector('.mc-sel-clase');
                const ta  = pag.querySelector('.mc-ta-clase');
                if (sel && sel.value && ta && ta.value === '') {
                    // El onchange de la clase borra la subclase (pensado para un cambio de clase).
                    // Aquí la clase no ha cambiado, solo falta rellenar su texto: se conserva la
                    // subclase elegida (y su texto) para no perderla al recargar o sincronizar.
                    const selSub = pag.querySelector('.mc-sel-subclase');
                    const taSub  = pag.querySelector('.mc-ta-subclase');
                    const subPrev = selSub ? selSub.value : '';
                    const subTxtPrev = taSub ? taSub.value : '';
                    sel.dispatchEvent(new Event('change'));
                    if (selSub && subPrev && Array.from(selSub.options).some(o => o.value === subPrev)) {
                        selSub.value = subPrev;
                        if (subTxtPrev) { if (taSub) taSub.value = subTxtPrev; }
                        else selSub.dispatchEvent(new Event('change'));
                    } else if (taSub && subTxtPrev) {
                        taSub.value = subTxtPrev;
                    }
                }
            });

            // Restaurar la pestaña que estaba activa (si sigue existiendo)
            if (mcBody) {
                const paginas3 = mcBody.querySelectorAll('.mc-pagina');
                const objetivo = claseActiva
                    ? Array.from(paginas3).find(p =>
                        p.querySelector('.mc-sel-clase')?.value === claseActiva)
                    : null;
                if (objetivo) {
                    paginas3.forEach(p => p.classList.remove('mc-activa'));
                    objetivo.classList.add('mc-activa');
                }
                if (typeof _mcRenderTabs === 'function') _mcRenderTabs(fichaPanel);
            }
        }
    } finally {
        _syncingWidgets = false;
    }
}

/* ── Sincronizar widget superior con el inferior (cuando cambia Características) ── */
function syncWidgetsInfToSup(fichaPanel) {
    if (_syncingWidgets) return;
    _syncingWidgets = true;
    try {
        const mcBody = fichaPanel.querySelector('.caract-mc-body');
        if (!mcBody) return;
        const paginas = mcBody.querySelectorAll('.mc-pagina');
        const datos = [];
        paginas.forEach(pag => {
            const clase = pag.querySelector('.mc-sel-clase')?.value  || '';
            const nivel = parseInt(pag.querySelector('.mc-nivel-sel')?.value) || 1;
            if (clase) datos.push({ clase, nivel });
        });
        if (!datos.length) return;

        const lista = fichaPanel.querySelector('.multiclase-lista');
        if (!lista) return;
        lista.innerHTML = '';
        datos.forEach(mc => {
            const fila = _multiclaseFila(mc.clase, mc.nivel);
            lista.appendChild(fila);
        });
    } finally {
        _syncingWidgets = false;
    }
}

/* ── Cargar multiclases en AMBOS widgets (desde guardado) ── */
function cargarMulticlases(fichaPanel, datos) {
    const lista = fichaPanel.querySelector('.multiclase-lista');
    if (!lista) return;
    lista.innerHTML = '';
    const arr = Array.isArray(datos) && datos.length ? datos : [{ clase:'', nivel:1 }];
    arr.forEach(mc => lista.appendChild(_multiclaseFila(mc.clase, mc.nivel)));
    // Sincronizar también el widget inferior
    if (typeof cargarMcDatos === 'function') {
        _syncingWidgets = true;
        try { cargarMcDatos(fichaPanel, arr); } finally { _syncingWidgets = false; }
    }
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

    // 2. Sincronizar widget de Características con el widget superior
    syncWidgetsSupToInf(fichaPanel);

    // 3. Dados de Golpe — sincronizar grupos
    _sincronizarDadosGolpe(fichaPanel, mcs);

    // 4. Spell slots
    _sincronizarSpellSlots(fichaPanel, mcs, nivelTotal);

    // 5. Aprendidos y Preparados
    _sincronizarSpellCounts(fichaPanel, mcs);

    // 5b. Filtrar desplegable de hechizos según nivel máximo disponible
    _refrescarFiltroNivelHechizos(fichaPanel);

    // 6. HP máximo automático
    calcularHPMaxAuto(fichaPanel);

    // 7. Regenerar acciones auto
    setTimeout(() => regenerarAccionesAuto(fichaPanel), 50);

    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   HP MÁXIMO AUTO-CALCULADO
═══════════════════════════════════════════════════════ */

/* Valor medio de un dado (redondeado arriba, fórmula oficial):
   d6→4, d8→5, d10→6, d12→7 */
function _avgDado(diceStr) {
    const faces = parseInt(diceStr.replace('d','')) || 8;
    return Math.ceil((faces + 1) / 2);
}
function _maxDado(diceStr) {
    return parseInt(diceStr.replace('d','')) || 8;
}

/* Calcula el HP máximo según las reglas PHB 2024:
   - Nivel 1 (primera clase, primer nivel): máximo del dado + mod CON
   - Cada nivel adicional: average del dado + mod CON
   - Multiclase: orden de entrada no importa para el cálculo total */
function calcularHPMax(mcs, conMod) {
    if (!mcs || !mcs.length) return 0;
    let total = 0;
    let primerNivel = true;

    mcs.forEach(mc => {
        const data = _getClaseData(mc.clase);
        const nv   = parseInt(mc.nivel) || 0;
        if (nv <= 0) return;
        const dado = data.diceHit || 'd8';

        for (let i = 0; i < nv; i++) {
            if (primerNivel) {
                total += _maxDado(dado) + conMod;
                primerNivel = false;
            } else {
                total += _avgDado(dado) + conMod;
            }
        }
    });

    return Math.max(total, 1);
}

/* Lee mod CON del panel */
function _getConMod(fichaPanel) {
    const conScore = parseInt(fichaPanel.querySelector('.stat-score[data-stat="con"]')?.value) || 10;
    return Math.floor((conScore - 10) / 2);
}

/* Aplica el HP calculado al input si el auto está activado */
function calcularHPMaxAuto(fichaPanel) {
    const hpMaxInput = fichaPanel.querySelector('.hp-max');
    if (!hpMaxInput) return;
    if (hpMaxInput.dataset.hpAuto !== 'true') return; // manual override activo

    const mcs = leerMulticlases(fichaPanel).filter(mc => mc.clase);
    if (!mcs.length) return;

    const conMod = _getConMod(fichaPanel);
    const nuevo  = calcularHPMax(mcs, conMod);

    // Si el personaje tenía la vida llena (o la ficha estaba en blanco), se mantiene llena con el
    // nuevo máximo; si estaba herido se respeta, sin pasar nunca del máximo.
    const maxAnterior = parseInt(hpMaxInput.value) || 0;
    hpMaxInput.value = nuevo;
    const hpActEl = fichaPanel.querySelector('.hp-actual');
    if (hpActEl) {
        const act = parseInt(hpActEl.value);
        const estabaLleno = isNaN(act) || maxAnterior <= 0 || act >= maxAnterior;
        if (estabaLleno || act > nuevo) hpActEl.value = nuevo;
    }
    _hpAutoLabelVisible(fichaPanel, true);
    actualizarVidaPanel(hpMaxInput);
}

/* Muestra/oculta el label "calculado automáticamente" y el botón ⟳ */
function _hpAutoLabelVisible(fichaPanel, esAuto) {
    const label  = fichaPanel.querySelector('.hp-auto-label');
    const btnRst = fichaPanel.querySelector('.hp-auto-btn');
    if (label)  label.style.display  = esAuto ? '' : 'none';
    if (btnRst) btnRst.style.display = esAuto ? 'none' : '';
}

/* Llamado cuando el jugador edita hp-max manualmente */
function onHpMaxEdita(input) {
    input.dataset.hpAuto = 'false';
    const fichaPanel = getPanel(input);
    _hpAutoLabelVisible(fichaPanel, false);
    actualizarVidaPanel(input);
    guardarDebounced();
}

/* Botón ⟳ — reactiva el cálculo automático */
function hpReactivarAuto(btn) {
    const fichaPanel = getPanel(btn);
    const hpMaxInput = fichaPanel.querySelector('.hp-max');
    if (!hpMaxInput) return;
    hpMaxInput.dataset.hpAuto = 'true';
    calcularHPMaxAuto(fichaPanel);
}

/* ── Sincronizar dados de golpe ──
   Reconcilia los grupos con las clases SIN reconstruir lo que ya existe:
   · se conservan los dados gastados (checks) de cada grupo,
   · los grupos añadidos a mano (sin data-auto) no se tocan,
   · solo se crean/borran/redimensionan los grupos gestionados por las clases (data-auto="1"). */
function _sincronizarDadosGolpe(fichaPanel, mcs) {
    const wrap = fichaPanel.querySelector('.dg-grupos-wrap');
    if (!wrap) return;

    // Total de dados por tipo según las clases (las que comparten tipo se fusionan)
    const deseado = {};
    mcs.forEach(mc => {
        const tipo = _getClaseData(mc.clase).diceHit || 'd8';
        const nv = parseInt(mc.nivel) || 1;
        deseado[tipo] = (deseado[tipo] || 0) + nv;
    });

    const grupos = Array.from(wrap.querySelectorAll('.dg-grupo'));
    const tipoDe = g => g.querySelector('.dg-tipo')?.value;
    const usados = new Set();   // grupos que ya cubren un tipo deseado

    // Bloque d8 por defecto de una ficha vacía que no llegó marcado como «gestionado por la clase»
    // (fichas guardadas con versiones antiguas): si es el único grupo, es un solo dado y nadie lo ha
    // tocado a mano, es el marcador de la ficha en blanco → pasa a ser gestionado por la clase,
    // de modo que se sustituye por el de la clase elegida en vez de quedarse al lado.
    if (grupos.length === 1 && !grupos[0].dataset.auto && grupos[0].dataset.manual !== '1'
        && tipoDe(grupos[0]) === 'd8' && (parseInt(grupos[0].querySelector('.dg-total')?.value) || 0) === 1) {
        grupos[0].dataset.auto = '1';
    }

    Object.entries(deseado).forEach(([tipo, total]) => {
        // 1º un grupo ya gestionado por las clases con ese tipo; 2º uno sin marcar con ese tipo
        // (fichas guardadas antes de existir la marca: se "adopta" en lugar de duplicarlo)
        let g = grupos.find(x => !usados.has(x) && x.dataset.auto === '1' && tipoDe(x) === tipo)
             || grupos.find(x => !usados.has(x) && x.dataset.auto !== '1' && tipoDe(x) === tipo && x.dataset.manual !== '1');
        if (!g) {
            g = dgCrearGrupo(tipo, total);
            wrap.appendChild(g);
        }
        g.dataset.auto = '1';
        usados.add(g);
        const inp = g.querySelector('.dg-total');
        inp.value = total;
        actualizarDadosGolpePanel(inp);   // añade casillas marcadas o quita las sobrantes; conserva el resto
    });

    // Grupos gestionados por las clases que ya no corresponden a ninguna clase → fuera
    grupos.forEach(g => {
        if (!usados.has(g) && g.dataset.auto === '1') g.remove();
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

        // ¿Es un slot warlock este nivel?
        const esWarlock = warlockMC && nivel === warlockNivel + 1 && warlockSlots > 0;

        // Limpiar y reconstruir slots (conservando cuáles estaban gastados, por posición)
        const gastadosPrevios = Array.from(checksDiv.querySelectorAll('.slot-chk')).map(c => c.checked);
        checksDiv.innerHTML = '';
        for (let i = 0; i < Math.min(cantidad, 9); i++) {
            const wrap = document.createElement('div');
            wrap.className = 'slot-check-wrap' + (esWarlock ? ' slot-warlock' : '');
            const chk = document.createElement('input');
            chk.type = 'checkbox'; chk.className = 'slot-chk';
            chk.checked = gastadosPrevios[i] !== undefined ? gastadosPrevios[i] : true;
            chk.addEventListener('change', () => guardarDebounced());
            const del = document.createElement('button');
            del.className = 'slot-del-btn'; del.textContent = '×'; del.title = 'Quitar slot';
            del.addEventListener('click', e => { e.stopPropagation(); wrap.remove(); guardarDebounced(); });
            wrap.appendChild(chk); wrap.appendChild(del);
            checksDiv.appendChild(wrap);
        }
    }
}

/* ── Sincronizar Cantrips Conocidos y Preparados dinámicos (2024) ── */
function _sincronizarSpellCounts(fichaPanel, mcs) {
    const cantripInput = fichaPanel.querySelector('.spell-cantrips-input');
    const container    = fichaPanel.querySelector('.spell-preparados-container');
    if (!cantripInput || !container) return;

    // ── Cantrips: suma de todas las clases lanzadoras ──
    let totalCantrips = 0;
    mcs.forEach(mc => {
        const nv = Math.max(1, Math.min(20, parseInt(mc.nivel) || 0));
        if (_castingDe(mc) === 'none') return;
        const tabla = CANTRIPS_CONOCIDOS[mc.clase] || [];
        totalCantrips += tabla[nv - 1] || 0;
    });
    cantripInput.value = totalCantrips;

    // ── Preparados dinámicos: un campo por cada clase lanzadora ──
    // Guardamos valor, nivel calculado y si fue editado manualmente
    const prevValues = {};
    container.querySelectorAll('.spell-prep-bloque').forEach(el => {
        prevValues[el.dataset.clase] = {
            valor:     el.querySelector('input').value,
            nivelCalc: el.dataset.nivelCalc,
            esManual:  el.dataset.esManual === 'true'
        };
    });

    container.innerHTML = '';

    const clasesLanzadoras = mcs.filter(mc => mc.clase && _castingDe(mc) !== 'none');

    clasesLanzadoras.forEach(mc => {
        const nv    = Math.max(1, Math.min(20, parseInt(mc.nivel) || 0));
        const tabla = HECHIZOS_PREPARADOS_2024[mc.clase] || [];
        const calc  = tabla[nv - 1] || 0;

        const labelTxt = clasesLanzadoras.length === 1
            ? 'Preparados'
            : `Prep. ${mc.clase}`;

        const bloque = document.createElement('div');
        bloque.className = 'spell-val-bloque spell-count-bloque spell-prep-bloque';
        bloque.dataset.clase = mc.clase;
        bloque.dataset.nivelCalc = nv;

        const lbl = document.createElement('label');
        lbl.className = 'spell-val-label';
        lbl.textContent = labelTxt;

        const inp = document.createElement('input');
        inp.type = 'number';
        inp.className = 'spell-count-input';
        inp.min = '0';

        const prev = prevValues[mc.clase];
        if (prev && prev.esManual && parseInt(prev.nivelCalc) === nv) {
            // Mismo nivel + edición manual previa → respetar el valor del usuario
            inp.value = prev.valor;
            bloque.dataset.esManual = 'true';
        } else {
            // Nivel cambió o clase nueva → recalcular automáticamente
            inp.value = calc;
            bloque.dataset.esManual = 'false';
        }

        // Marcar como manual en cuanto el usuario lo edite
        inp.addEventListener('input', () => {
            bloque.dataset.esManual = 'true';
            guardarDebounced();
        });

        bloque.appendChild(lbl);
        bloque.appendChild(inp);
        container.appendChild(bloque);
    });

    // Sin clase lanzadora → campo vacío por defecto
    if (clasesLanzadoras.length === 0) {
        const bloque = document.createElement('div');
        bloque.className = 'spell-val-bloque spell-count-bloque spell-prep-bloque';
        bloque.dataset.clase = '';
        bloque.dataset.nivelCalc = '0';
        bloque.dataset.esManual = 'false';
        const lbl = document.createElement('label');
        lbl.className = 'spell-val-label';
        lbl.textContent = 'Preparados';
        const inp = document.createElement('input');
        inp.type = 'number'; inp.className = 'spell-count-input'; inp.min = '0'; inp.value = '0';
        inp.addEventListener('input', () => { bloque.dataset.esManual = 'true'; guardarDebounced(); });
        bloque.appendChild(lbl); bloque.appendChild(inp);
        container.appendChild(bloque);
    }
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

let _subpagCounter = 0;
function _subpagId() { return 'sp-' + Date.now() + '-' + (++_subpagCounter); }

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
    return /ataque\s+de\s+conjuro|ataque\s+a\s+distancia|ataque\s+cuerpo\s+a\s+cuerpo|tirada\s+de\s+ataque|melee\s+spell\s+attack|ranged\s+spell\s+attack/i.test(sp.desc);
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
        if (res === null) return false;
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
        if (res === null) return false;
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
    const gV = _leerEstadoAdv().ventaja;
    const gD = _leerEstadoAdv().desventaja;

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
        _resetAdv();
        // desventaja reset ya hecho por _resetAdv()
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
    _resetAdv();
    // desventaja reset ya hecho por _resetAdv()
}

/* ═══════════════════════════════════════════════════════
   ACCIONES AUTO-GENERADAS DESDE CARACTERÍSTICAS Y HECHIZOS
═══════════════════════════════════════════════════════ */

/* ── Tipo de acción de cada rasgo ───────────────────────
   Cada rasgo de los archivos de datos (clases, subclases, especies, dotes) lleva
   su propio campo `a`, escrito a mano tras contrastarlo con las reglas oficiales:
       a: "A"  → Acción (incluye la acción Mágica)
       a: "B"  → Acción Adicional
       a: "R"  → Reacción
       a: "O"  → Otros: no gasta acción (uso gratuito, con usos limitados, o un
                 momento concreto en que decides usarlo: repetir una salvación, etc.)
       Se pueden combinar si el rasgo se usa de varias formas: a: "AB".
   Sin campo `a` el rasgo es pasivo (competencias, bonos fijos, resistencias, elegir
   subclase...) y no se lista en este panel; ya aparece completo en «Características».
   Nada se deduce del texto de la descripción: así no hay falsos positivos. */
const _PANEL_DE_TIPO = { A: 'actions', B: 'bonus', R: 'reactions', O: 'otros' };
function _panelesDeRasgo(r) {
    if (!r || typeof r.a !== 'string') return [];
    const paneles = [];
    for (const c of r.a.toUpperCase()) {
        const p = _PANEL_DE_TIPO[c];
        if (p && !paneles.includes(p)) paneles.push(p);
    }
    return paneles;
}

/* Clasifica un hechizo según su tiempo de lanzamiento */
function _clasificarCasting(castingStr) {
    const c = String(castingStr || '').toLowerCase();
    if (/^1\s*acci[oó]n\s+adicional|^1\s*bonus/.test(c)) return 'bonus';
    if (/^1\s*reacci[oó]n/.test(c)) return 'reactions';
    if (/^1\s*acci[oó]n/.test(c)) return 'actions';
    return c ? 'otros' : 'actions';   // 1 minuto, 10 minutos, 1 hora...: no es una acción de combate
}

/* ── Construye la lista de entradas auto desde la ficha ──
   Devuelve array de { nombre, desc, origen, tipo }
   Lee TODAS las clases multiclase y filtra por nivel seleccionado. */
function _recogerEntradasAuto(fichaPanel) {
    const entradas = [];
    const añadir = (r, origen) => {
        _panelesDeRasgo(r).forEach(tipo => entradas.push({ nombre: r.n, desc: r.d, origen, tipo }));
    };

    // ── Todas las clases multiclase (con filtro de nivel) ────────
    if (typeof DND_CLASES !== 'undefined' && typeof leerMcDatos === 'function') {
        const mcDatos = leerMcDatos(fichaPanel);
        const vistos = new Set();

        mcDatos.forEach(mc => {
            const claseKey = mc.clase;
            const nivelMax = parseInt(mc.nivel) || 1;
            if (!claseKey || !DND_CLASES[claseKey]) return;

            // Rasgos de clase — solo hasta nivelMax
            (DND_CLASES[claseKey].rasgos || []).forEach(r => {
                if ((r.nv || 1) > nivelMax) return;
                const unico = `${claseKey}::${r.n}`;
                if (vistos.has(unico)) return;
                vistos.add(unico);
                añadir(r, claseKey);
            });

            // Rasgos de subclase — solo hasta nivelMax
            const subKey = mc.subclase;
            if (subKey && DND_CLASES[claseKey]?.subclases?.[subKey]) {
                (DND_CLASES[claseKey].subclases[subKey] || []).forEach(r => {
                    if ((r.nv || 1) > nivelMax) return;
                    const unico = `${claseKey}::${subKey}::${r.n}`;
                    if (vistos.has(unico)) return;
                    vistos.add(unico);
                    añadir(r, subKey);
                });
            }
        });
    }

    // ── Especie ────────────────────────────────────────
    const especieKey = fichaPanel.querySelector('.sel-especie')?.value || '';
    if (especieKey && typeof DND_ESPECIES !== 'undefined' && DND_ESPECIES[especieKey]) {
        (DND_ESPECIES[especieKey] || []).forEach(r => añadir(r, especieKey));
    }

    // ── Dotes (se leen del cuadro de dotes: cada una empieza una línea con «Nombre [Tipo]:») ──
    if (typeof DND_DOTES !== 'undefined' && Array.isArray(DND_DOTES)) {
        const dotesTxt = fichaPanel.querySelector('.caract-dotes')?.value || '';
        const lineas = dotesTxt.split('\n').map(l => l.trim());
        const añadidas = new Set();
        DND_DOTES.forEach(dote => {
            // Se reconoce también por los nombres antiguos (alias) para no perder dotes de fichas ya guardadas
            const nombres = [dote.n].concat(Array.isArray(dote.alias) ? dote.alias : []);
            if (lineas.some(l => nombres.some(nm => l.startsWith(nm + ' [') || l.startsWith(nm + ':')))) {
                añadir(dote, 'Dote'); añadidas.add(dote.n);
            }
        });
        // Líneas escritas a mano con el nombre "pelado" («Sentinel: …» o «Sentinel [General]: …»):
        // se asocian a la dote con ese nombre, prefiriendo la versión de 2024 (5.5e).
        const _base = n => String(n).replace(/\s*\[.*$/, '').trim().toLowerCase();
        lineas.forEach(l => {
            const m = l.match(/^([^\[:]+?)\s*(?:\[[^\]]*\])?\s*:/) || l.match(/^([^\[:]+?)\s*\[/);
            if (!m) return;
            const base = m[1].trim().toLowerCase();
            if (!base) return;
            const cand = DND_DOTES.filter(d => _base(d.n) === base);
            if (!cand.length || cand.some(d => añadidas.has(d.n))) return;   // sin coincidencia, o ya reconocida
            const elegida = cand.find(d => /2024/.test(d.n)) || cand[0];
            añadir(elegida, 'Dote'); añadidas.add(elegida.n);
        });
    }

    // ── Hechizos ───────────────────────────────────────
    fichaPanel.querySelectorAll('.spell-entry').forEach(entry => {
        const spId = entry.dataset.spellId;
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

        const key = `${e.tipo}::${e.origen}::${e.nombre}`;
        const div = document.createElement('div');
        div.className = 'auto-entrada';
        div.dataset.autoKey = key;
        div.dataset.autoKeyAntigua = `${e.tipo}::${e.nombre}`;   // formato de fichas guardadas antes

        const notaGuardada = notasGuardadas[key] || notasGuardadas[div.dataset.autoKeyAntigua] || '';
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
            const nota = notasData[el.dataset.autoKey] || notasData[el.dataset.autoKeyAntigua];
            if (nota) {
                const ta = el.querySelector('.auto-nota');
                if (ta) { ta.value = nota; ta.classList.add('tiene-contenido'); }
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════
   CA AUTOMÁTICA — SELECTOR DE ARMADURA
═══════════════════════════════════════════════════════ */

/* Armaduras que imponen desventaja en Sigilo (PHB 2024 / 5.5e) */
const ARMADURAS_SIGILO_DESVENTAJA = new Set([
    'acolchada',   // Armadura ligera
    'escamas',     // Armadura media
    'semiplaca',   // Armadura media
    'anillos',     // Armadura pesada
    'cota',        // Armadura pesada
    'segmentada',  // Armadura pesada
    'placas',      // Armadura pesada
]);

/* El value de cada <option> de armadura es "clave|CA base|tipo DES|0".
   Tipo DES: 'dex' = suma todo el mod., 'dex2' = máx. +2 (media), 'none' = no suma (pesada). */
function _parseArmaduraValor(val) {
    const p = String(val || '').split('|');
    return { clave: p[0] || '', base: parseInt(p[1]) || 10, dexType: p[2] || 'dex' };
}

/* CA que da la armadura + DES (con su tope) + escudo, SIN el ajuste manual.
   valorArmadura permite calcular con el valor con el que se guardó una ficha antigua. */
function _caFormula(panel, valorArmadura) {
    const armSel = panel.querySelector('.armadura-sel');
    const escSel = panel.querySelector('.escudo-sel');
    const a = _parseArmaduraValor(valorArmadura !== undefined ? valorArmadura : armSel?.value);
    const dexMod = _modDes(panel);
    let dexBonus = 0;
    if (a.dexType === 'dex')  dexBonus = dexMod;
    if (a.dexType === 'dex2') dexBonus = Math.min(dexMod, 2);
    return a.base + dexBonus + (parseInt(escSel?.value) || 0);
}

/* Recalcula la CA si hay una armadura elegida: fórmula + ajuste manual (data-ca-bonus).
   Se llama desde actualizarTodoPanel, así que cualquier cambio de DES la actualiza.
   Sin armadura elegida la CA es manual y no se toca. */
function _recalcularCA(panel) {
    const armSel  = panel.querySelector('.armadura-sel');
    const caInput = panel.querySelector('.csi-input');
    if (!armSel || !armSel.value || !caInput) return;
    caInput.value = _caFormula(panel) + (parseInt(caInput.dataset.caBonus) || 0);
}

function _aplicarArmadura(panel) {
    const armSel = panel.querySelector('.armadura-sel');
    if (!armSel || !armSel.value) return;
    _recalcularCA(panel);
    _aplicarDesventajaSigilo(panel, ARMADURAS_SIGILO_DESVENTAJA.has(_parseArmaduraValor(armSel.value).clave));
}

/* Al cargar: si el value guardado ya no existe tal cual (la tabla de armaduras se corrigió),
   buscar la misma armadura por su clave. */
function _seleccionarArmaduraGuardada(sel, guardado) {
    sel.value = guardado;
    if (sel.value === guardado) return;
    const clave = String(guardado || '').split('|')[0];
    const opt = clave ? Array.from(sel.options).find(o => o.value.split('|')[0] === clave) : null;
    sel.value = opt ? opt.value : '';
}

function onArmaduraChange(el) {
    const panel = getPanel(el);
    if (!panel) return;
    const armSel  = panel.querySelector('.armadura-sel');
    const caInput = panel.querySelector('.csi-input');
    if (!armSel || !caInput) return;

    // Al cambiar de ARMADURA el ajuste manual (p. ej. +1 mágico) no se arrastra a la nueva;
    // al cambiar solo el escudo sí se mantiene.
    if (el === armSel) caInput.dataset.caBonus = 0;

    if (!armSel.value) {
        // Sin armadura elegida: CA manual y se quita la desventaja de Sigilo que pusiera la armadura
        _aplicarDesventajaSigilo(panel, false);
    } else {
        _aplicarArmadura(panel);
    }
    guardarDebounced();
}

/* El jugador escribe la CA a mano: con armadura elegida se guarda la diferencia con
   la CA calculada (ajuste manual), para que siga a la DES sin perder su ajuste. */
function onCAManual(input) {
    const panel = getPanel(input);
    const armSel = panel?.querySelector('.armadura-sel');
    if (armSel && armSel.value) {
        input.dataset.caBonus = (parseInt(input.value) || 0) - _caFormula(panel);
    }
    guardarDebounced();
}

/**
 * Aplica o quita la desventaja por armadura en la fila de Sigilo.
 * Usa un dataset flag 'data-adv-armadura' para no pisar ajustes manuales
 * del jugador — solo gestiona el estado impuesto por la armadura.
 */
function _aplicarDesventajaSigilo(panel, tieneDesventaja) {
    const filasSigilo = panel.querySelectorAll('.fila-skill');
    let filaSigilo = null;
    filasSigilo.forEach(f => {
        const label = f.querySelector('label');
        if (label && label.textContent.trim().startsWith('Sigilo')) filaSigilo = f;
    });
    if (!filaSigilo) return;

    const toggle = filaSigilo.querySelector('.adv-toggle');
    if (!toggle) return;

    const advActual = parseInt(toggle.dataset.adv) || 0;

    if (tieneDesventaja) {
        // Solo forzar si el jugador no había puesto ya desventaja (2) o ventaja (1)
        // Marcamos con flag para saber que fue la armadura quien lo puso
        toggle.dataset.advArmadura = '1';
        if (advActual !== 2) { // no sobreescribir si el jugador puso desventaja ya
            toggle.dataset.adv = '2';
            toggle.textContent = '▼';
            toggle.title = 'Desventaja (por armadura)';
            toggle.classList.add('adv-armadura');
        }
    } else {
        // Solo quitar si fue la armadura quien lo puso
        if (toggle.dataset.advArmadura === '1' && advActual === 2) {
            toggle.dataset.adv = '0';
            toggle.textContent = '';
            toggle.title = '';
            toggle.classList.remove('adv-armadura');
        }
        delete toggle.dataset.advArmadura;
    }
}

/* ═══════════════════════════════════════════════════════
   CONCENTRACIÓN — ALERTA AL LANZAR SEGUNDO HECHIZO
═══════════════════════════════════════════════════════ */

/* Devuelve la entry con glow de concentración activo en el panel, o null */
function _getHechizoConcActivo(panel) {
    return panel.querySelector('.spell-entry.concentrando') || null;
}

/* Comprueba si un hechizo requiere concentración según su DURACIÓN.
   Solo se mira el campo "duration": la descripción puede mencionar la palabra
   (p. ej. "Sin concentración") sin que el hechizo la requiera.
   Normaliza tildes para cubrir variantes de escritura en hechizos.js */
function _esConcentracion(sp) {
    if (!sp) return false;
    const _norm = s => String(s == null ? '' : s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return /concentraci.n|concentration|conc\b/.test(_norm(sp.duration));
}

/* Modal de alerta de concentración — devuelve Promise<bool> */
function _modalConcentracion(nombreActivo, nombreNuevo) {
    return new Promise(resolve => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position:fixed;inset:0;background:rgba(0,0,0,0.6);
            z-index:10000;display:flex;align-items:center;justify-content:center;`;

        const caja = document.createElement('div');
        caja.style.cssText = `
            background:#1a202c;border:2px solid #d69e2e;border-radius:12px;
            padding:22px 26px;min-width:280px;max-width:360px;
            box-shadow:0 8px 32px rgba(0,0,0,0.7);color:#e2e8f0;font-family:inherit;`;

        caja.innerHTML = `
            <div style="font-size:22px;text-align:center;margin-bottom:10px;">⚠️</div>
            <div style="font-size:13px;font-weight:700;color:#f6e05e;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;text-align:center;">
                ¡Ya estás concentrado!
            </div>
            <p style="font-size:12px;color:#cbd5e0;line-height:1.5;margin-bottom:6px;text-align:center;">
                Ya tienes activo <strong style="color:#fbd38d">${_esc(nombreActivo)}</strong>
            </p>
            <p style="font-size:12px;color:#cbd5e0;line-height:1.5;margin-bottom:18px;text-align:center;">
                Si lanzas <strong style="color:#90cdf4">${_esc(nombreNuevo)}</strong>, perderás la concentración anterior.
            </p>
            <div style="display:flex;gap:10px;">
                <button id="_conc_cancelar" style="
                    flex:1;padding:9px;background:transparent;border:1.5px solid #4a5568;
                    border-radius:7px;color:#a0aec0;font-size:13px;cursor:pointer;font-family:inherit;">
                    Cancelar
                </button>
                <button id="_conc_confirmar" style="
                    flex:1;padding:9px;background:#744210;border:1.5px solid #d69e2e;
                    border-radius:7px;color:#fefcbf;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">
                    Sí, lanzar
                </button>
            </div>`;

        overlay.appendChild(caja);
        document.body.appendChild(overlay);

        caja.querySelector('#_conc_cancelar').addEventListener('click', () => {
            document.body.removeChild(overlay); resolve(false);
        });
        caja.querySelector('#_conc_confirmar').addEventListener('click', () => {
            document.body.removeChild(overlay); resolve(true);
        });
        overlay.addEventListener('click', e => {
            if (e.target === overlay) { document.body.removeChild(overlay); resolve(false); }
        });
    });
}

/* ═══════════════════════════════════════════════════════
   TOOLTIPS DE CONDICIONES
═══════════════════════════════════════════════════════ */

const CONDICION_TOOLTIPS = {
    'Agarrado':     'Tu velocidad se reduce a 0 y no puedes beneficiarte de bonificaciones a la velocidad. La condición termina si quien te agarra queda Incapacitado o si un efecto te saca de su alcance.',
    'Asustado':     'Tienes Desventaja en pruebas de característica y tiradas de ataque mientras puedas ver la fuente de tu miedo. No puedes moverte voluntariamente hacia ella.',
    'Aturdido':     'Estás Incapacitado, no puedes moverte y solo puedes hablar de manera entrecortada. Fallas automáticamente las salvaciones de FUE y DES. Las tiradas de ataque contra ti tienen Ventaja.',
    'Cegado':       'No puedes ver. Las tiradas de ataque contra ti tienen Ventaja y tus tiradas de ataque tienen Desventaja.',
    'Derribado':    'Solo puedes moverte arrastrándote (coste doble de movimiento). Tienes Desventaja en tus tiradas de ataque. Los ataques cuerpo a cuerpo contra ti tienen Ventaja; los ataques a distancia tienen Desventaja.',
    'Encantado':    'No puedes atacar al encantador ni elegirle como objetivo de efectos perjudiciales. El encantador tiene Ventaja en pruebas de Carisma para interactuar socialmente contigo.',
    'Ensordecido':  'No puedes oír. Fallas automáticamente cualquier prueba que requiera el oído.',
    'Envenenado':   'Tienes Desventaja en tiradas de ataque y pruebas de característica.',
    'Incapacitado': 'No puedes realizar acciones ni reacciones.',
    'Inconsciente': 'Estás Incapacitado, no puedes moverte ni hablar y no eres consciente de lo que te rodea. Sueltas lo que sostienes y caes al suelo (Derribado). Fallas automáticamente las salvaciones de FUE y DES. Los ataques contra ti tienen Ventaja. Cualquier ataque que te impacte desde 1,5 m es un golpe crítico.',
    'Invisible':    'No puedes ser visto sin magia u otros sentidos especiales. Tus tiradas de ataque tienen Ventaja. Las tiradas de ataque contra ti tienen Desventaja.',
    'Paralizado':   'Estás Incapacitado y no puedes moverte ni hablar. Fallas automáticamente las salvaciones de FUE y DES. Los ataques contra ti tienen Ventaja. Cualquier ataque que te impacte desde 1,5 m es un golpe crítico.',
    'Petrificado':  'Te transformas en una sustancia sólida e inanimada. Estás Incapacitado, no puedes moverte ni hablar, y no eres consciente de lo que te rodea. Tienes Resistencia a todo el daño. Eres inmune a veneno y enfermedad. Las condiciones de veneno o enfermedad quedan en suspenso.',
    'Restringido':  'Tu velocidad se reduce a 0. Tienes Desventaja en tiradas de ataque. Las tiradas de ataque contra ti tienen Ventaja. Desventaja en salvaciones de DES.',
};

function _initTooltipsCondiciones(panel) {
    panel.querySelectorAll('.condicion-item').forEach(item => {
        const nombreEl = item.querySelector('.condicion-nombre');
        if (!nombreEl) return;
        const nombre = nombreEl.textContent.trim();
        const texto = CONDICION_TOOLTIPS[nombre];
        if (!texto) return;

        // Crear tooltip
        const tt = document.createElement('div');
        tt.className = 'condicion-tooltip';
        tt.textContent = texto;
        item.appendChild(tt);
    });
}

/* Inicializar tooltips al crear cada ficha — patch de nuevaFicha */
const _nuevaFichaOrig = nuevaFicha;
nuevaFicha = function(datosGuardados, opciones) {
    const resultado = _nuevaFichaOrig(datosGuardados, opciones);
    // El panel recién creado es el último
    const panel = fichas[fichas.length - 1]?.panel;
    if (panel) _initTooltipsCondiciones(panel);
    return resultado;
};

/* ═══════════════════════════════════════════════════════
   RESPONSIVO — ESCALA DINÁMICA DE LA FICHA
   La ficha tiene 1100px de ancho fijo. En pantallas más
   pequeñas la escalamos con transform: scale() para que
   quepa sin romper el layout interno.
═══════════════════════════════════════════════════════ */

const FICHA_ANCHO = 1100;   // ancho fijo de la ficha en px
const FICHA_PADDING = 56;   // padding lateral del contenedor (28px × 2)
const WIDGET_DADOS_ANCHO = 270; // ancho del widget de dados fijo (izquierda) + margen

function _calcularEscalaFicha() {
    const anchoVP = window.innerWidth;

    // Descontar el widget de dados si está visible (no en móvil pequeño)
    const widgetDados = document.getElementById('dados-widget');
    const anchoWidget = (widgetDados && anchoVP >= 600) ? WIDGET_DADOS_ANCHO : 0;

    const espacioDisponible = anchoVP - FICHA_PADDING - anchoWidget;
    if (espacioDisponible >= FICHA_ANCHO) return 1;

    // Mínimo: 0.25 en móvil, 0.55 en tablet/desktop (no reducir más por legibilidad)
    const minEscala = anchoVP < 600 ? 0.25 : 0.55;
    return Math.max(minEscala, espacioDisponible / FICHA_ANCHO);
}

function aplicarEscalaFicha() {
    const escala = _calcularEscalaFicha();
    const alturaOriginal = FICHA_ANCHO * 1; // base — se recalcula por panel activo

    document.querySelectorAll('.ficha-panel.activa').forEach(panel => {
        panel.style.setProperty('--ficha-scale', escala);
        // Ajustar el margen inferior para compensar el espacio "perdido"
        // por el transform (que no afecta al flow del documento)
        if (escala < 1) {
            // Altura visual del panel escalado
            const alturaReal = panel.scrollHeight;
            const alturaVisual = alturaReal * escala;
            const delta = alturaReal - alturaVisual;
            panel.style.marginBottom = `-${delta}px`;
        } else {
            panel.style.marginBottom = '';
        }
    });

    // Aplicar también a los paneles inactivos para cuando se activen
    document.querySelectorAll('.ficha-panel:not(.activa)').forEach(panel => {
        panel.style.setProperty('--ficha-scale', escala);
    });
}

// Ejecutar al cargar y al redimensionar (con debounce)
let _resizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(aplicarEscalaFicha, 80);
});

// Ejecutar después de que el DOM esté listo
window.addEventListener('load', () => {
    setTimeout(aplicarEscalaFicha, 100);
});

// También re-aplicar cuando se cambia de pestaña (por si el panel
// recién activado no tenía la escala calculada aún)
const _activarFichaOrig = activarFicha;
activarFicha = function(id) {
    _activarFichaOrig(id);
    setTimeout(aplicarEscalaFicha, 50);
};


/* ═══════════════════════════════════════════════════════
   RETRATO DE PERSONAJE — cabecera
═══════════════════════════════════════════════════════ */
function retratoDropImagen(event, contenedor) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
        _comprimirImagen(e.target.result, function(compressed) {
            _retratoSetImagen(contenedor, compressed); guardarDebounced();
        });
    };
    reader.readAsDataURL(file);
}
function retratoCargarImagen(event, input) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        const contenedor = input.closest('.retrato-cab-contenedor');
        _comprimirImagen(e.target.result, function(compressed) {
            _retratoSetImagen(contenedor, compressed); guardarDebounced();
        });
    };
    reader.readAsDataURL(file);
}
function _retratoSetImagen(contenedor, src) {
    const img         = contenedor.querySelector('.retrato-cab-img');
    const placeholder = contenedor.querySelector('.retrato-cab-placeholder');
    const btnBorrar   = contenedor.querySelector('.retrato-cab-borrar');
    img.src = src; img.style.display = 'block';
    placeholder.style.display = 'none';
    btnBorrar.style.display   = 'flex';
    contenedor.style.borderStyle = 'solid';
    contenedor.style.borderColor = '#b794f4';
}
function retratoBorrarImagen(btn) {
    const contenedor  = btn.closest('.retrato-cab-contenedor');
    const img         = contenedor.querySelector('.retrato-cab-img');
    const placeholder = contenedor.querySelector('.retrato-cab-placeholder');
    img.src = ''; img.style.display = 'none';
    placeholder.style.display = 'flex';
    btn.style.display = 'none';
    contenedor.style.borderStyle = 'dashed';
    contenedor.style.borderColor = '';
    const fileInput = contenedor.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
    guardarDebounced();
}

/* ═══════════════════════════════════════════════════════
   EXPORTAR A PDF
   Genera un PDF A4 (vertical) con TODA la ficha activa tal y como está:
   · Cada "página" de la ficha (principal, acciones, características,
     hechizos, roleplay) va en su propia hoja. Si una es más larga que un
     A4 se parte por una franja en blanco, nunca por mitad de una línea.
   · Incluye el contenido de todas las pestañas que tengan algo escrito
     (Actions, Bonus, Reactions, Otros, cada clase y todas las notas),
     no sólo la que esté abierta en pantalla.
   · Los cambios temporales sobre la ficha (expandir cuadros, mostrar
     pestañas...) se deshacen SIEMPRE, incluso si algo falla, y mientras
     dura se tapa la pantalla con un aviso «Generando PDF…».
═══════════════════════════════════════════════════════ */
const PDF_CFG = {
    hojaW: 210, hojaH: 297,   // A4 vertical (mm)
    margen: 5,                // mm de margen a izquierda, derecha y arriba
    pie: 8,                   // mm reservados abajo para «Página x / y»
    escalaMax: 2,             // píxeles de imagen por px CSS (calidad)
    escalaMin: 1,
    pixelesMax: 14e6,         // píxeles máximos por lienzo (Safari/iOS ≈ 16,7 M)
    ladoMax: 12000,           // lado máximo de un lienzo
    calidadJpeg: 0.92,
};

const PDF_LIBS = {
    html2canvas: {
        ok:   () => typeof window.html2canvas === 'function',
        urls: ['https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
               'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js'],
    },
    jspdf: {
        ok:   () => !!(window.jspdf && window.jspdf.jsPDF),
        urls: ['https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
               'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js'],
    },
};

let _pdfEnCurso = false;

function _pdfCargarScript(url) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.onload = () => resolve();
        s.onerror = () => { s.remove(); reject(new Error('No se pudo cargar ' + url)); };
        document.head.appendChild(s);
    });
}

/* Si las librerías no se cargaron con la página (sin conexión puntual, CDN
   caído...), se intenta de nuevo y con un CDN alternativo. */
async function _pdfAsegurarLibrerias() {
    for (const lib of Object.values(PDF_LIBS)) {
        for (let i = 0; i < lib.urls.length && !lib.ok(); i++) {
            try { await _pdfCargarScript(lib.urls[i]); } catch (e) { /* probar el siguiente */ }
        }
        if (!lib.ok()) {
            throw new Error('No se pudieron cargar las librerías para crear el PDF. ' +
                            'Comprueba tu conexión a internet y vuelve a intentarlo.');
        }
    }
}

/* Color de las zonas fuera de la ficha (márgenes de la hoja y esquinas redondeadas):
   blanco con tema claro; con un tema oscuro, el propio color de la ficha para que no haya
   un marco blanco alrededor. */
function _pdfColorFondo(panel) {
    const m = getComputedStyle(panel).backgroundColor.match(/rgba?\(([^)]+)\)/);
    if (m) {
        const p = m[1].split(',').map(parseFloat);
        if ((p.length < 4 || p[3] > 0.5) && (p[0] * 0.299 + p[1] * 0.587 + p[2] * 0.114) < 110) return [p[0] | 0, p[1] | 0, p[2] | 0];
    }
    return [255, 255, 255];
}

function _pdfNombreArchivo(nombre) {
    const limpio = String(nombre || '').replace(/[\\/:*?"<>|\u0000-\u001f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 80);
    return (limpio || 'personaje') + '.pdf';
}

function _pdfMostrarAviso(texto) {
    let ov = document.getElementById('pdf-aviso');
    if (!ov) {
        ov = document.createElement('div');
        ov.id = 'pdf-aviso';
        ov.setAttribute('role', 'status');
        ov.style.cssText = 'position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;' +
            'justify-content:center;background:rgba(0,0,0,.6);color:#fff;font:600 18px/1.4 system-ui,sans-serif;' +
            'text-align:center;padding:24px;cursor:progress;';
        const caja = document.createElement('div');
        caja.style.cssText = 'background:#222;border-radius:12px;padding:22px 30px;box-shadow:0 8px 30px rgba(0,0,0,.5);max-width:420px;';
        ov.appendChild(caja);
        document.body.appendChild(ov);
    }
    ov.firstChild.innerHTML = '';
    const t = document.createElement('div'); t.textContent = '⏳ ' + texto;
    const s = document.createElement('div'); s.style.cssText = 'font:400 13px/1.4 system-ui,sans-serif;opacity:.75;margin-top:8px;';
    s.textContent = 'No cierres ni toques la ficha hasta que termine.';
    ov.firstChild.append(t, s);
}
function _pdfQuitarAviso() { document.getElementById('pdf-aviso')?.remove(); }

/* Sustituye (temporalmente) los campos de formulario visibles por un <div> con el mismo
   aspecto y su valor como texto. */
function _pdfSustituirCampos(panel, estilo, deshacer) {
    const PROPS = ['position', 'top', 'right', 'bottom', 'left', 'z-index', 'box-sizing', 'width', 'height',
        'min-width', 'max-width', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
        'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
        'border-top-width', 'border-top-style', 'border-top-color', 'border-right-width', 'border-right-style',
        'border-right-color', 'border-bottom-width', 'border-bottom-style', 'border-bottom-color',
        'border-left-width', 'border-left-style', 'border-left-color',
        'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius',
        'background-color', 'background-image', 'background-repeat', 'background-position', 'background-size',
        'box-shadow', 'opacity', 'color', 'font-family', 'font-size', 'font-weight', 'font-style',
        'letter-spacing', 'text-transform', 'text-shadow', 'vertical-align',
        'flex-grow', 'flex-shrink', 'flex-basis', 'align-self', 'justify-self', 'grid-column-start', 'grid-column-end',
        'grid-row-start', 'grid-row-end'];
    const NO_TEXTO = /^(hidden|file|checkbox|radio|range|color|button|submit|reset|image)$/;
    const campos = [];
    panel.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.tagName === 'INPUT' && NO_TEXTO.test(el.type)) return;
        if (!el.getClientRects().length) return;                 // oculto
        const cs = getComputedStyle(el);
        const esTA = el.tagName === 'TEXTAREA', esSel = el.tagName === 'SELECT';
        let texto;
        if (esSel) texto = el.value === '' ? '' : (el.options[el.selectedIndex]?.text || '');
        else texto = el.value || '';
        const props = {};
        PROPS.forEach(p => { props[p] = cs.getPropertyValue(p); });
        const ta = cs.textAlign;
        campos.push({
            el, texto, props, esTA,
            bloque: cs.display === 'block' || cs.display === 'flex' || cs.display === 'grid',
            alinea: (ta === 'center') ? 'center' : (ta === 'right' || ta === 'end') ? 'flex-end' : 'flex-start',
            alto: el.offsetHeight, tam: parseFloat(cs.fontSize) || 14,
            alturaInterior: el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom),
        });
    });
    campos.forEach(c => {
        const d = document.createElement('div');
        d.className = 'pdf-tmp-valor';
        Object.keys(c.props).forEach(p => d.style.setProperty(p, c.props[p]));
        d.style.setProperty('display', c.esTA ? (c.bloque ? 'block' : 'inline-block') : (c.bloque ? 'flex' : 'inline-flex'));
        d.style.setProperty('background-image', 'none');   // sin la flechita del desplegable (html2canvas no entiende su posición)
        d.style.setProperty('flex-shrink', '0');
        d.style.setProperty('max-width', 'none');
        d.style.setProperty('text-align', c.alinea === 'center' ? 'center' : c.alinea === 'flex-end' ? 'right' : 'left');
        if (c.esTA) {
            // El textarea crece con su contenido (antes sólo hacía scroll) y mantiene al menos su altura
            d.style.setProperty('white-space', 'pre-wrap');
            d.style.setProperty('overflow-wrap', 'anywhere');
            d.style.setProperty('line-height', '1.4');
            d.style.setProperty('height', 'auto');
            d.style.setProperty('min-height', c.alto + 'px');
            d.style.setProperty('vertical-align', 'top');
            d.style.setProperty('overflow', 'visible');
        } else {
            d.style.setProperty('align-items', 'center');
            d.style.setProperty('justify-content', c.alinea);
            d.style.setProperty('white-space', 'pre');
            d.style.setProperty('line-height', c.tam * 1.25 <= c.alturaInterior ? '1.25' : '1');
            d.style.setProperty('overflow', c.tam * 1.25 <= c.alturaInterior ? 'hidden' : 'visible');
        }
        d.textContent = c.texto;
        c.el.parentNode.insertBefore(d, c.el);
        deshacer.push(() => d.remove());
        estilo(c.el, 'display', 'none');
    });
}

/* Prepara la ficha para fotografiarla entera. Devuelve una función que
   deshace TODOS los cambios (se ejecuta siempre en un `finally`). */
function _pdfPrepararPanel(panel) {
    const deshacer = [];

    // Cambia una propiedad de estilo en línea (con !important) y recuerda cómo estaba
    const originales = new Map();   // atributo style tal cual estaba (se repone idéntico al final)
    const estilo = (el, prop, valor) => {
        if (!el) return;
        if (!originales.has(el)) {
            originales.set(el, el.getAttribute('style'));
            deshacer.push(() => { const a = originales.get(el); if (a === null) el.removeAttribute('style'); else el.setAttribute('style', a); });
        }
        const antes = el.style.getPropertyValue(prop), prio = el.style.getPropertyPriority(prop);
        el.style.setProperty(prop, valor, 'important');
        deshacer.push(() => {
            el.style.removeProperty(prop);
            if (antes) el.style.setProperty(prop, antes, prio);
            if (!el.getAttribute('style')) el.removeAttribute('style');
        });
    };
    const atributo = (el, nombre, valor) => {
        const antes = el.getAttribute(nombre);
        el.setAttribute(nombre, valor);
        deshacer.push(() => { if (antes === null) el.removeAttribute(nombre); else el.setAttribute(nombre, antes); });
    };
    const etiqueta = (contenedor, texto, antesDe) => {
        const d = document.createElement('div');
        d.className = 'pdf-tmp-etiqueta';
        d.textContent = texto;
        d.style.cssText = 'font:700 11px/1.2 inherit;letter-spacing:.08em;text-transform:uppercase;' +
            'color:var(--color-texto-med,#555);margin:10px 0 6px;padding-bottom:3px;' +
            'border-bottom:1px solid var(--color-borde,#bbb);';
        contenedor.insertBefore(d, antesDe === undefined ? contenedor.firstChild : antesDe);
        deshacer.push(() => d.remove());
    };
    const sinTexto = (contenedor) =>
        !contenedor.querySelector('.auto-entrada') &&
        ![...contenedor.querySelectorAll('input[type="text"], textarea')].some(i => i.value.trim());

    // 1. Sin la escala responsiva: la ficha se fotografía a su tamaño real (1100 px)
    estilo(panel, 'transform', 'none');
    estilo(panel, 'margin-bottom', '0px');

    // 2. Fuera tooltips y ventanas emergentes
    panel.querySelectorAll('.modal-overlay, .spell-tooltip, .condicion-tooltip').forEach(el => estilo(el, 'visibility', 'hidden'));

    // 3. Pestañas de ACCIONES: se muestran todas las que tengan contenido, con su título
    panel.querySelectorAll('.caja-acciones').forEach(caja => {
        const paneles = [...caja.querySelectorAll('.accion-panel')];
        let visibles = paneles.filter(p => !sinTexto(p));
        if (!visibles.length) visibles = paneles.filter(p => p.classList.contains('activo'));
        paneles.forEach(p => {
            if (!visibles.includes(p)) { estilo(p, 'display', 'none'); return; }
            estilo(p, 'display', 'block');
            const tab = caja.querySelector(`.accion-tab[data-tab="${p.dataset.panel}"]`);
            if (tab) etiqueta(p, tab.textContent.trim());
        });
        estilo(caja.querySelector('.acciones-tabs'), 'display', 'none');
        estilo(caja, 'min-height', '0px');
    });

    // 4. Pestañas de CLASES (multiclase en Características): todas las clases, con su nombre
    panel.querySelectorAll('.caract-mc-wrap').forEach(wrap => {
        const paginas = [...wrap.querySelectorAll('.mc-pagina')];
        paginas.forEach((pag, i) => {
            estilo(pag, 'display', 'flex');
            if (paginas.length > 1) {
                const nombre = pag.querySelector('.mc-sel-clase')?.value || `Clase ${i + 1}`;
                etiqueta(pag.parentNode, nombre, pag);
            }
        });
        estilo(wrap.querySelector('.caract-mc-header'), 'display', 'none');
    });

    // 5. NOTAS: pestañas fijas y personalizadas, cada una con sus páginas escritas
    panel.querySelectorAll('.roleplay-notas').forEach(notas => {
        const paneles = [...notas.querySelectorAll('.notas-panel')];
        const nombrePestana = (p) => {
            const tab = notas.querySelector(`.notas-tab[data-tab-id="${p.dataset.panelId}"]`);
            return (tab?.querySelector('.notas-tab-nombre-edit')?.value || tab?.textContent || 'Notas').trim();
        };
        let algo = false;
        paneles.forEach(p => {
            const subs = [...p.querySelectorAll('.notas-subpag-panel')];
            // Panel sin sub-páginas (estructura antigua): el propio panel cuenta como una
            const unidades = subs.length ? subs : [p];
            const conTexto = unidades.filter(u => [...u.querySelectorAll('textarea')].some(t => t.value.trim()));
            if (!conTexto.length) { estilo(p, 'display', 'none'); return; }
            algo = true;
            estilo(p, 'display', 'flex');
            estilo(p.querySelector('.notas-subpags-barra'), 'display', 'none');
            subs.forEach(sp => {
                if (!conTexto.includes(sp)) { estilo(sp, 'display', 'none'); return; }
                estilo(sp, 'display', 'flex');
                const sub = p.querySelector(`.notas-subpag-tab[data-sp-id="${sp.dataset.spId}"] .notas-subpag-nombre`)?.value;
                etiqueta(sp, subs.length > 1 && sub ? `${nombrePestana(p)} · ${sub}` : nombrePestana(p));
            });
            if (!subs.length) etiqueta(p, nombrePestana(p));
        });
        if (algo) estilo(notas.querySelector('.notas-tabs-barra'), 'display', 'none');
        else {   // no hay nada escrito: se deja tal como está en pantalla (sólo se quita la barra de pestañas)
            paneles.forEach(p => { if (p.classList.contains('activo')) { estilo(p, 'display', 'flex'); } });
        }
    });

    // 6. Botones que sólo sirven para editar (añadir / quitar / limpiar): fuera
    const SEL_EDICION = '.multiclase-add-btn, .hp-auto-btn, .dg-add-grupo-btn, .btn-borrar-item, .btn-borrar-arma, ' +
        '.btn-añadir-arma, .btn-añadir-accion, .arma-btn-extra-daño, .caract-mc-add, .caract-btn-limpiar, ' +
        '.caract-btn-add, .recursos-add-btn, .btn-spell-add, .btn-slot-add, .retrato-cab-borrar, ' +
        '.apariencia-btn-borrar, .notas-tab-add, .notas-subpag-add, .notas-subpag-del, .notas-tab-cerrar, ' +
        '.mc-del-btn, .salv-arrow';
    panel.querySelectorAll(SEL_EDICION).forEach(b => estilo(b, 'visibility', 'hidden'));
    panel.querySelectorAll('button').forEach(b => {
        if (/^[+＋×✕✖]$/.test((b.textContent || '').trim())) estilo(b, 'visibility', 'hidden');
    });

    // 7. Campos de formulario (input / select / textarea) → texto normal con el mismo aspecto.
    //    html2canvas recorta el texto dentro de los campos y no parte las líneas de los
    //    textarea; como texto normal sale idéntico a lo que se ve en pantalla.
    _pdfSustituirCampos(panel, estilo, deshacer);

    // 8. Cuadros con scroll interno o texto cortado: se agrandan para mostrar todo su contenido
    const crecer = [];
    panel.querySelectorAll('*').forEach(el => {
        if (el.scrollHeight <= el.clientHeight + 1) return;
        if (el.tagName === 'TEXTAREA') { crecer.push({ el, ta: true }); return; }
        const cs = getComputedStyle(el);
        const scroll = /(auto|scroll)/.test(cs.overflowY);
        const cortado = cs.overflowY === 'hidden' && cs.maxHeight !== 'none';
        if (scroll || cortado) crecer.push({ el, ta: false });
    });
    crecer.forEach(({ el, ta }) => {
        estilo(el, 'max-height', 'none');
        if (ta) {
            estilo(el, 'height', (el.scrollHeight + (el.offsetHeight - el.clientHeight)) + 'px');
            estilo(el, 'overflow', 'hidden');
        } else {
            estilo(el, 'height', 'auto');
            estilo(el, 'overflow', 'visible');
        }
    });

    return () => { for (let i = deshacer.length - 1; i >= 0; i--) { try { deshacer[i](); } catch (e) { /* seguir restaurando */ } } };
}

/* Divide la ficha en «páginas» lógicas (y en px CSS desde el borde superior de la ficha):
   la primera hoja (cabecera + rejilla) y cada .segunda-pagina. Los cortes caen en
   mitad del hueco que hay entre ellas. */
function _pdfSegmentos(panel) {
    const top0 = panel.getBoundingClientRect().top;
    const alto = Math.ceil(panel.getBoundingClientRect().height);
    const bloques = [...panel.children].filter(el => el.classList.contains('segunda-pagina') && el.offsetHeight > 0);
    if (!bloques.length) return [{ y0: 0, y1: alto }];
    const cortes = [0];
    const previo = bloques[0].previousElementSibling;   // la rejilla principal: la primera hoja acaba ahí
    if (previo) cortes.push(Math.round(((previo.getBoundingClientRect().bottom - top0) + (bloques[0].getBoundingClientRect().top - top0)) / 2));
    for (let i = 0; i < bloques.length - 1; i++) {
        const fin  = bloques[i].getBoundingClientRect().bottom - top0;
        const ini  = bloques[i + 1].getBoundingClientRect().top - top0;
        cortes.push(Math.round((fin + ini) / 2));
    }
    cortes.push(alto);
    const segs = [];
    for (let i = 0; i < cortes.length - 1; i++) if (cortes[i + 1] - cortes[i] > 4) segs.push({ y0: cortes[i], y1: cortes[i + 1] });
    return segs;
}

/* Busca, entre las filas [desde, hasta) del lienzo, la más baja que no corte ninguna línea
   de texto ni dibujo (una fila con casi nada distinto del color de fondo de esa fila). */
function _pdfCorteLimpio(canvas, desde, hasta) {
    desde = Math.max(0, Math.floor(desde)); hasta = Math.min(canvas.height, Math.floor(hasta));
    if (hasta - desde < 2) return hasta;
    const w = canvas.width, filas = hasta - desde;
    let datos;
    try { datos = canvas.getContext('2d', { willReadFrequently: true }).getImageData(0, desde, w, filas).data; }
    catch (e) { return hasta; }
    let mejor = hasta, mejorTinta = Infinity;
    for (let r = filas - 1; r >= 0; r--) {
        const cuenta = new Map();
        let modo = 0, modoN = 0;
        for (let x = 0; x < w; x += 2) {
            const i = (r * w + x) * 4;
            const k = ((datos[i] >> 4) << 8) | ((datos[i + 1] >> 4) << 4) | (datos[i + 2] >> 4);
            const n = (cuenta.get(k) || 0) + 1;
            cuenta.set(k, n);
            if (n > modoN) { modoN = n; modo = k; }
        }
        const mr = (modo >> 8) & 15, mg = (modo >> 4) & 15, mb = modo & 15;
        let tinta = 0;
        for (let x = 0; x < w; x += 2) {
            const i = (r * w + x) * 4;
            if (Math.abs((datos[i] >> 4) - mr) + Math.abs((datos[i + 1] >> 4) - mg) + Math.abs((datos[i + 2] >> 4) - mb) > 2) tinta++;
        }
        if (tinta < mejorTinta) { mejorTinta = tinta; mejor = desde + r; }
        if (tinta <= 6) return desde + r;   // fila en blanco (salvo los bordes laterales de las cajas)
    }
    return mejor;
}

async function exportarFichaPDF() {
    if (_pdfEnCurso) return;
    const ficha = fichas.find(f => f.id === fichaActual);
    if (!ficha) return;
    const panel = ficha.panel;
    const nombre = panel.querySelector('.input-nombre')?.value.trim() || '';

    _pdfEnCurso = true;
    const btnPdf = document.querySelector('.btn-pdf');
    const textoOrig = btnPdf ? btnPdf.textContent : '';
    const progreso = (txt) => { if (btnPdf) btnPdf.textContent = '⏳ ' + txt; _pdfMostrarAviso(txt); };
    if (btnPdf) btnPdf.disabled = true;

    const scrollX = window.scrollX, scrollY = window.scrollY;
    let restaurar = null;

    try {
        progreso('Preparando…');
        await _pdfAsegurarLibrerias();
        const { jsPDF } = window.jspdf;
        const H2C = window.html2canvas;
        if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) {} }

        window.scrollTo(0, 0);
        restaurar = _pdfPrepararPanel(panel);
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        await new Promise(r => setTimeout(r, 150));   // que el navegador termine de recolocar todo

        const W = Math.round(panel.getBoundingClientRect().width);
        const segs = _pdfSegmentos(panel);
        const fondo = _pdfColorFondo(panel);
        const fondoCss = `rgb(${fondo.join(',')})`;
        const oscuro = (fondo[0] * 0.299 + fondo[1] * 0.587 + fondo[2] * 0.114) < 110;

        // Agrupar páginas lógicas en lotes que quepan en un lienzo de tamaño seguro
        const S0 = PDF_CFG.escalaMax;
        const maxAltoLote = Math.floor(Math.min(PDF_CFG.pixelesMax / (W * S0 * S0), PDF_CFG.ladoMax / S0));
        const lotes = [];
        segs.forEach(s => {
            const h = s.y1 - s.y0, ult = lotes[lotes.length - 1];
            if (ult && (s.y1 - ult.y0) <= maxAltoLote) { ult.segs.push(s); ult.y1 = s.y1; }
            else lotes.push({ y0: s.y0, y1: s.y1, segs: [s] });
        });

        // Medidas de la hoja
        const anchoMm = PDF_CFG.hojaW - 2 * PDF_CFG.margen;
        const altoMm  = PDF_CFG.hojaH - PDF_CFG.margen - PDF_CFG.pie;
        const mmPorPx = anchoMm / W;
        const altoPaginaPx = altoMm / mmPorPx;      // alto máximo de una hoja, en px CSS

        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
        let hojas = 0;

        for (let li = 0; li < lotes.length; li++) {
            const lote = lotes[li];
            const alto = lote.y1 - lote.y0;
            progreso(`Capturando la ficha (${li + 1}/${lotes.length})…`);

            let escala = Math.min(S0, Math.sqrt(PDF_CFG.pixelesMax / (W * alto)), PDF_CFG.ladoMax / alto);
            escala = Math.max(0.6, escala);
            let canvas = null, ultimoError = null;
            for (let intento = 0; intento < 3 && !canvas; intento++) {
                try {
                    const c = await H2C(panel, {
                        x: 0, y: lote.y0, width: W, height: alto,
                        scale: escala, backgroundColor: fondoCss, logging: false,
                        useCORS: true, allowTaint: false, imageTimeout: 8000,
                        scrollX: 0, scrollY: 0, windowWidth: Math.max(1280, W + 100),
                    });
                    if (!c || !c.width || !c.height) throw new Error('El navegador no pudo crear la imagen de la ficha (memoria insuficiente).');
                    canvas = c;
                } catch (e) { ultimoError = e; escala = Math.max(0.6, escala * 0.7); }
            }
            if (!canvas) throw ultimoError || new Error('No se pudo capturar la ficha.');

            const px = canvas.width / W;   // píxeles de imagen por px CSS
            for (const s of lote.segs) {
                let cursor = (s.y0 - lote.y0) * px;
                const fin = (s.y1 - lote.y0) * px;
                const hoja = altoPaginaPx * px;
                const trozos = [];
                // Una hoja lógica más larga que un A4 se parte por un hueco en blanco
                while (fin - cursor > hoja * 1.03) {
                    let corte = _pdfCorteLimpio(canvas, cursor + hoja * 0.55, cursor + hoja);
                    if (corte <= cursor + hoja * 0.2) corte = cursor + hoja;
                    trozos.push([cursor, corte]);
                    cursor = corte;
                }
                trozos.push([cursor, fin]);

                for (const [a, b] of trozos) {
                    const sy = Math.round(a), sh = Math.max(1, Math.round(b) - sy);
                    const tmp = document.createElement('canvas');
                    tmp.width = canvas.width; tmp.height = sh;
                    const ctx = tmp.getContext('2d');
                    ctx.fillStyle = fondoCss; ctx.fillRect(0, 0, tmp.width, tmp.height);
                    ctx.drawImage(canvas, 0, sy, canvas.width, sh, 0, 0, canvas.width, sh);
                    const dataUrl = tmp.toDataURL('image/jpeg', PDF_CFG.calidadJpeg);
                    tmp.width = tmp.height = 0;

                    let wMm = anchoMm, hMm = (sh / px) * mmPorPx;
                    if (hMm > altoMm) { const k = altoMm / hMm; wMm *= k; hMm = altoMm; }   // ajuste fino (≤3 %)
                    if (hojas > 0) pdf.addPage();
                    hojas++;
                    pdf.setFillColor(fondo[0], fondo[1], fondo[2]);
                    pdf.rect(0, 0, PDF_CFG.hojaW, PDF_CFG.hojaH, 'F');
                    pdf.addImage(dataUrl, 'JPEG', (PDF_CFG.hojaW - wMm) / 2, PDF_CFG.margen, wMm, hMm, undefined, 'FAST');
                }
            }
            canvas.width = canvas.height = 0;   // liberar memoria
        }

        // Pie de página: nombre y numeración
        progreso('Montando el PDF…');
        const nombreLatin = /^[\x20-\x7E -ÿ]+$/.test(nombre) ? nombre : '';
        pdf.setFontSize(7);
        pdf.setTextColor(oscuro ? 190 : 110);
        for (let i = 1; i <= hojas; i++) {
            pdf.setPage(i);
            pdf.text(`${nombreLatin ? nombreLatin + '  ·  ' : ''}Página ${i} / ${hojas}`,
                     PDF_CFG.hojaW / 2, PDF_CFG.hojaH - 3.5, { align: 'center' });
        }
        try {
            pdf.setProperties({ title: (nombre || 'Personaje') + ' — Ficha de D&D', creator: 'Creador de fichas de D&D' });
        } catch (e) {}

        pdf.save(_pdfNombreArchivo(nombre));

    } catch (err) {
        console.error('Error generando PDF:', err);
        alert('No se pudo generar el PDF: ' + (err && err.message ? err.message : err));
    } finally {
        if (restaurar) { try { restaurar(); } catch (e) { console.error(e); } }
        _pdfQuitarAviso();
        try { window.scrollTo(scrollX, scrollY); } catch (e) {}
        try { aplicarEscalaFicha(); } catch (e) {}
        if (btnPdf) { btnPdf.textContent = textoOrig || '🖨 PDF'; btnPdf.disabled = false; }
        _pdfEnCurso = false;
    }
}

/* ═══════════════════════════════════════════════════════
   TEMAS / MODOS DE COLOR
   Para añadir más temas: agregar entrada en TEMAS_DISPONIBLES
   y sus reglas CSS en style.css bajo .tema-<id>
═══════════════════════════════════════════════════════ */
const TEMAS_DISPONIBLES = [
    { id: 'claro',  label: '☀️',  title: 'Modo claro'  },
    { id: 'oscuro', label: '🌙',  title: 'Modo oscuro' },
];
const TEMA_KEY = 'dnd_tema';

function _aplicarTema(id) {
    TEMAS_DISPONIBLES.forEach(t => document.documentElement.classList.remove('tema-' + t.id));
    if (id && id !== 'claro') document.documentElement.classList.add('tema-' + id);
    document.querySelectorAll('.btn-tema-global').forEach(btn => {
        const idx    = TEMAS_DISPONIBLES.findIndex(t => t.id === id);
        const sig    = TEMAS_DISPONIBLES[(idx + 1) % TEMAS_DISPONIBLES.length];
        btn.textContent = TEMAS_DISPONIBLES[idx]?.label ?? '☀️';
        btn.title = `Cambiar a ${sig.title}`;
    });
    try { localStorage.setItem(TEMA_KEY, id); } catch(e) {}
}

function toggleTema() {
    const actual  = (() => { try { return localStorage.getItem(TEMA_KEY); } catch(e) { return null; } })() || 'claro';
    const idx     = TEMAS_DISPONIBLES.findIndex(t => t.id === actual);
    const siguiente = TEMAS_DISPONIBLES[(idx + 1) % TEMAS_DISPONIBLES.length];
    _aplicarTema(siguiente.id);
}

(function initTema() {
    const guardado = (() => { try { return localStorage.getItem(TEMA_KEY); } catch(e) { return null; } })();
    _aplicarTema(guardado || 'claro');
})();

/* ═══════════════════════════════════════════════════════
   IMAGEN DE FONDO DE LA FICHA
   - Se guarda en localStorage por separado (clave dnd_fondo)
     para no contaminar el JSON de fichas ni consumir su quota.
   - Se comprime igual que las demás imágenes.
   - Lleva blur + filtro de opacidad/contraste sobre un pseudo-
     elemento gestionado por JS (elemento <div id="fondo-bg">).
═══════════════════════════════════════════════════════ */
const FONDO_KEY = 'dnd_fondo';

// Crea (o recupera) el elemento de fondo
function _getFondoEl() {
    let el = document.getElementById('fondo-bg');
    if (!el) {
        el = document.createElement('div');
        el.id = 'fondo-bg';
        document.body.insertBefore(el, document.body.firstChild);
    }
    return el;
}

// Aplica la imagen al elemento de fondo
function _aplicarFondo(src) {
    const el = _getFondoEl();
    if (src) {
        el.style.backgroundImage = `url(${src})`;
        el.classList.add('tiene-fondo');
    } else {
        el.style.backgroundImage = '';
        el.classList.remove('tiene-fondo');
    }
}

// Carga imagen desde input file
window.fondoCargarImagen = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        // Para el fondo usamos resolución algo mayor (1200px) y calidad 0.7
        const MAX = 1200, QUALITY = 0.7;
        const img = new Image();
        img.onload = function() {
            let w = img.width, h = img.height;
            if (w > MAX || h > MAX) {
                if (w >= h) { h = Math.round(h * MAX / w); w = MAX; }
                else        { w = Math.round(w * MAX / h); h = MAX; }
            }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            const compressed = canvas.toDataURL('image/jpeg', QUALITY);
            _aplicarFondo(compressed);
            try { localStorage.setItem(FONDO_KEY, compressed); } catch(e) {
                console.warn('No se pudo guardar el fondo:', e);
            }
            _actualizarBtnFondo(true);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    // Reset input para permitir cargar la misma imagen de nuevo
    event.target.value = '';
};

// Quita la imagen de fondo
window.fondoEliminar = function() {
    _aplicarFondo(null);
    try { localStorage.removeItem(FONDO_KEY); } catch(e) {}
    _actualizarBtnFondo(false);
};

// Actualiza el botón de la barra de acciones
function _actualizarBtnFondo(tieneFondo) {
    const btn = document.getElementById('btn-fondo-global');
    if (!btn) return;
    btn.title = tieneFondo ? 'Cambiar o quitar imagen de fondo' : 'Añadir imagen de fondo';
    btn.classList.toggle('activo', tieneFondo);
    // Mostrar/ocultar botón de quitar dentro del label/btn
    const btnQuitar = document.getElementById('btn-fondo-quitar');
    if (btnQuitar) btnQuitar.style.display = tieneFondo ? 'inline-flex' : 'none';
}

// Init: restaurar fondo guardado y crear el botón en la barra
(function initFondo() {
    // Restaurar fondo
    let guardado = null;
    try { guardado = localStorage.getItem(FONDO_KEY); } catch(e) {}
    if (guardado) {
        _aplicarFondo(guardado);
    }

    // Inyectar botón en la barra de acciones globales, al lado del tema
    function _inyectarBotonFondo() {
        const barra = document.querySelector('.barra-acciones-globales');
        if (!barra) return;
        if (document.getElementById('btn-fondo-global')) return;

        // Wrapper que contiene el label-upload y el btn-quitar
        const wrap = document.createElement('div');
        wrap.className = 'btn-fondo-wrap';
        wrap.id = 'btn-fondo-global';
        wrap.title = guardado ? 'Cambiar o quitar imagen de fondo' : 'Añadir imagen de fondo';
        if (guardado) wrap.classList.add('activo');

        // Label que actúa como botón de carga
        const label = document.createElement('label');
        label.className = 'btn-global btn-fondo-label';
        label.title = 'Seleccionar imagen de fondo';
        label.innerHTML = '🖼 Fondo';
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';
        fileInput.addEventListener('change', window.fondoCargarImagen);
        label.appendChild(fileInput);

        // Botón de quitar (solo visible cuando hay fondo)
        const btnQ = document.createElement('button');
        btnQ.id = 'btn-fondo-quitar';
        btnQ.className = 'btn-fondo-quitar';
        btnQ.title = 'Quitar imagen de fondo';
        btnQ.textContent = '×';
        btnQ.style.display = guardado ? 'inline-flex' : 'none';
        btnQ.addEventListener('click', function(e) {
            e.stopPropagation();
            window.fondoEliminar();
        });

        wrap.appendChild(label);
        wrap.appendChild(btnQ);

        // Insertar antes del botón de tema
        const btnTema = barra.querySelector('.btn-tema-global');
        if (btnTema) barra.insertBefore(wrap, btnTema);
        else barra.appendChild(wrap);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', _inyectarBotonFondo);
    } else {
        _inyectarBotonFondo();
    }
})();
