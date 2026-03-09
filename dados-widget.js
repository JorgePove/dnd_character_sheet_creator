/* ═══════════════════════════════════════════════════════
   dados-widget.js — Lanzador de Dados Personalizados
   Widget fijo esquina superior izquierda.
   Autónomo: gestiona su propio log directamente en #log-lista.
═══════════════════════════════════════════════════════ */

(function() {

/* ── Configuración de dados disponibles ─────────────── */
const TIPOS_DADO = ['d4','d6','d8','d10','d12','d20','d100'];

/* ── Colores de acento por tipo de dado ─────────────── */
const COLOR_DADO = {
    d4:   '#f6ad55',
    d6:   '#68d391',
    d8:   '#63b3ed',
    d10:  '#b794f4',
    d12:  '#fc8181',
    d20:  '#f6e05e',
    d100: '#76e4f7',
};

/* ── Crear HTML del widget ──────────────────────────── */
function _crearWidget() {
    if (document.getElementById('dados-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'dados-widget';
    widget.innerHTML = `
        <div class="dados-widget-cab" onclick="dadosWidgetToggle()">
            <div class="dados-widget-titulo">
                <span class="dw-icono">⚄</span>
                Lanzador de Dados
            </div>
            <button class="dados-widget-colapsar" title="Colapsar/Expandir" onclick="dadosWidgetToggle();event.stopPropagation()">▲</button>
        </div>
        <div class="dados-widget-cuerpo">
            <div id="dw-filas-lista"></div>
            <button id="dw-btn-add" onclick="dadosWidgetAddFila()">＋ Añadir dado</button>
            <div class="dw-divider"></div>
            <div class="dw-acciones">
                <button id="dw-btn-tirar" onclick="dadosWidgetTirar()">
                    <span class="dw-dado-icono">⚄</span>
                    Realizar Tirada
                </button>
                <button id="dw-btn-reset" onclick="dadosWidgetReset()">↺ Reiniciar Dados</button>
            </div>
        </div>`;

    document.body.appendChild(widget);

    // Añadir fila inicial por defecto
    _addFila('d20', 1, 0);
}

/* ── Crear HTML de una fila de dado ─────────────────── */
function _htmlTipoOpts(seleccionado) {
    return TIPOS_DADO.map(t =>
        `<option value="${t}" ${t === seleccionado ? 'selected' : ''}>${t}</option>`
    ).join('');
}

function _addFila(tipo, qty, bono) {
    tipo = tipo || 'd20';
    qty  = qty  !== undefined ? qty  : 1;
    bono = bono !== undefined ? bono : 0;

    const lista = document.getElementById('dw-filas-lista');
    if (!lista) return;

    const fila = document.createElement('div');
    fila.className = 'dw-fila';
    fila.dataset.tipo = tipo;
    fila.innerHTML = `
        <div class="dw-fila-color"></div>
        <div class="dw-spinner-wrap">
            <button class="dw-spin-btn dw-spin-up" tabindex="-1">▲</button>
            <input type="number" class="dw-qty" value="${qty}" min="1" max="99" title="Cantidad de dados">
            <button class="dw-spin-btn dw-spin-dn" tabindex="-1">▼</button>
        </div>
        <span class="dw-sep-d">×</span>
        <select class="dw-tipo" title="Tipo de dado">${_htmlTipoOpts(tipo)}</select>
        <span class="dw-sep-bono">+</span>
        <div class="dw-spinner-wrap">
            <button class="dw-spin-btn dw-spin-up" tabindex="-1">▲</button>
            <input type="number" class="dw-bono" value="${bono}" min="-99" max="99" title="Bono">
            <button class="dw-spin-btn dw-spin-dn" tabindex="-1">▼</button>
        </div>
        <button class="dw-btn-borrar" onclick="dadosWidgetBorrarFila(this)" title="Eliminar fila">×</button>`;

    // Spinners: cantidad
    const qtyInput  = fila.querySelector('.dw-qty');
    const qtyWrap   = fila.querySelectorAll('.dw-spinner-wrap')[0];
    qtyWrap.querySelector('.dw-spin-up').addEventListener('click', () => {
        qtyInput.value = Math.min(99, (parseInt(qtyInput.value) || 1) + 1);
    });
    qtyWrap.querySelector('.dw-spin-dn').addEventListener('click', () => {
        qtyInput.value = Math.max(1, (parseInt(qtyInput.value) || 1) - 1);
    });

    // Spinners: bono
    const bonoInput = fila.querySelector('.dw-bono');
    const bonoWrap  = fila.querySelectorAll('.dw-spinner-wrap')[1];
    bonoWrap.querySelector('.dw-spin-up').addEventListener('click', () => {
        bonoInput.value = Math.min(99, (parseInt(bonoInput.value) || 0) + 1);
    });
    bonoWrap.querySelector('.dw-spin-dn').addEventListener('click', () => {
        bonoInput.value = Math.max(-99, (parseInt(bonoInput.value) || 0) - 1);
    });

    // Actualizar data-tipo al cambiar el select
    fila.querySelector('.dw-tipo').addEventListener('change', function() {
        fila.dataset.tipo = this.value;
    });

    lista.appendChild(fila);
    // Pequeño scroll para mostrar la nueva fila
    lista.scrollTop = lista.scrollHeight;
}

/* ── Toggle colapsar/expandir ───────────────────────── */
window.dadosWidgetToggle = function() {
    const widget = document.getElementById('dados-widget');
    if (!widget) return;
    const colapsado = widget.classList.toggle('colapsado');
    const btn = widget.querySelector('.dados-widget-colapsar');
    if (btn) btn.textContent = colapsado ? '▼' : '▲';
};

/* ── Añadir fila ────────────────────────────────────── */
window.dadosWidgetAddFila = function() {
    _addFila('d6', 1, 0);
};

/* ── Borrar fila ────────────────────────────────────── */
window.dadosWidgetBorrarFila = function(btn) {
    const lista = document.getElementById('dw-filas-lista');
    if (!lista) return;
    if (lista.querySelectorAll('.dw-fila').length <= 1) return; // mínimo 1 fila
    btn.closest('.dw-fila').remove();
};

/* ── Realizar Tirada ────────────────────────────────── */
window.dadosWidgetTirar = function() {
    const lista = document.getElementById('dw-filas-lista');
    if (!lista) return;

    const filas = lista.querySelectorAll('.dw-fila');
    if (!filas.length) return;

    // Animación del botón
    const btnTirar = document.getElementById('dw-btn-tirar');
    if (btnTirar) {
        btnTirar.classList.add('girando');
        setTimeout(() => btnTirar.classList.remove('girando'), 400);
    }

    // Calcular todas las filas
    let granTotal = 0;
    const resultadosPorFila = [];

    filas.forEach(fila => {
        const tipo  = fila.dataset.tipo || 'd20';
        const qty   = Math.max(1, parseInt(fila.querySelector('.dw-qty')?.value) || 1);
        const bono  = parseInt(fila.querySelector('.dw-bono')?.value) || 0;
        const caras = parseInt(tipo.replace('d', '')) || 20;

        const rolls = [];
        for (let i = 0; i < qty; i++) {
            rolls.push(Math.floor(Math.random() * caras) + 1);
        }
        const sumaDados = rolls.reduce((a, b) => a + b, 0);
        const totalFila = sumaDados + bono;
        granTotal += totalFila;

        resultadosPorFila.push({ tipo, qty, bono, rolls, sumaDados, totalFila });
    });

    // Registrar en el log
    _registrarEnLog(resultadosPorFila, granTotal);
};

/* ── Construir entrada de log ───────────────────────── */
function _registrarEnLog(filas, granTotal) {
    const logLista = document.getElementById('log-lista');
    if (!logLista) return;

    const div = document.createElement('div');
    div.className = 'log-entrada dados-custom';
    div.style.cssText = 'border-left-color: #f6ad55;';

    // Título
    const nombreTirada = filas.length === 1
        ? `${filas[0].qty}${filas[0].tipo}${filas[0].bono !== 0 ? (filas[0].bono > 0 ? ' +' + filas[0].bono : ' ' + filas[0].bono) : ''}`
        : `Tirada personalizada (${filas.length} grupos)`;

    // Detalle de cada fila
    let detalleHTML = '';
    filas.forEach(f => {
        const rollsStr = f.rolls.join(' + ');
        const bonoStr  = f.bono !== 0 ? (f.bono > 0 ? ` <span style="color:#68d391">+${f.bono}</span>` : ` <span style="color:#fc8181">${f.bono}</span>`) : '';
        const color    = COLOR_DADO[f.tipo] || '#f6ad55';
        detalleHTML += `
            <div class="log-daño-linea" style="margin-top:3px">
                <span style="color:${color}">${f.totalFila}</span>
                <small style="color:#a0aec0">${f.qty}${f.tipo} [${rollsStr}]${bonoStr}</small>
            </div>`;
    });

    // Si hay múltiples filas, mostrar gran total
    const totalHTML = filas.length > 1
        ? `<div class="res" style="margin-bottom:3px"><span>${granTotal}</span><small>total</small></div>`
        : `<div class="res"><span>${granTotal}</span><small>${filas[0].rolls.join('+')}</small></div>`;

    div.innerHTML = `
        <strong style="color:#fbd38d">⚄ ${_esc(nombreTirada)}</strong>
        ${filas.length > 1 ? totalHTML : ''}
        ${filas.length > 1 ? detalleHTML : detalleHTML}`;

    logLista.prepend(div);

    // Mostrar el log si está oculto (por si el usuario lo ha cerrado)
    const logContenedor = document.getElementById('log-tiradas');
    if (logContenedor && logContenedor.style.display === 'none') {
        logContenedor.style.display = '';
    }
}

/* ── Helper para escapar HTML (misma que script.js) ─── */
function _esc(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ── Reiniciar dados ────────────────────────────────── */
window.dadosWidgetReset = function() {
    const lista = document.getElementById('dw-filas-lista');
    if (!lista) return;

    // Animación de salida
    lista.querySelectorAll('.dw-fila').forEach((f, i) => {
        setTimeout(() => {
            f.style.transition = 'opacity 0.15s, transform 0.15s';
            f.style.opacity = '0';
            f.style.transform = 'translateX(-8px)';
        }, i * 30);
    });

    setTimeout(() => {
        lista.innerHTML = '';
        _addFila('d20', 1, 0);
    }, lista.querySelectorAll('.dw-fila').length * 30 + 160);
};

/* ── Init ───────────────────────────────────────────── */
function init() {
    _crearWidget();
}

// Lanzar tras el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

})();
