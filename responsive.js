/* ═══════════════════════════════════════════════════════════════════
   RESPONSIVE — la ficha en tablet y móvil

   Tres modos, que se guardan como clase en <html> (vista-escritorio /
   vista-tablet / vista-movil) y en html.dataset.vista:
     · escritorio  (≥ 1240 px)  → igual que siempre (hoja de 1100 px, con escala).
     · tablet      (700–1239)   → la hoja ocupa todo el ancho, en dos columnas.
     · móvil       (< 700)      → una sola columna, barra fija arriba con PG / CA /
                                  Iniciativa y barra inferior con las secciones
                                  (Combate · Habilidades · Conjuros · Inventario · Historia).

   Todo lo visual está en responsive.css. Aquí solo hay lo que el CSS no puede hacer:
     1. Decidir el modo y reaccionar a los cambios de tamaño / orientación.
     2. Etiquetar cada bloque de la ficha con su sección (data-sec) para que, en móvil,
        el CSS enseñe solo los de la sección activa.
     3. Mover CA, Iniciativa y PG (los elementos reales, con todos sus eventos) a la
        barra fija del móvil y devolverlos a su sitio al salir.
     4. Barra inferior, menú «⋯» de la barra de pestañas, botón de acciones rápidas
        y registro de tiradas en forma de aviso.
     5. Dejar que el PDF se haga siempre con el diseño de escritorio.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    var html = document.documentElement;
    var BP_MOVIL = 700;
    var BP_ESCRITORIO = 1240;
    var LADO_TELEFONO = 520;             // pantalla cuyo lado corto mide menos de esto = teléfono
    var ANCHO_MOVIL_APAISADO = 1000;     // un teléfono apaisado usa también el diseño de móvil

    var SECCIONES = [
        { id: 'combate',     ico: '⚔️', txt: 'Combate' },
        { id: 'habilidades', ico: '🎯', txt: 'Habilidades' },
        { id: 'conjuros',    ico: '✨', txt: 'Conjuros' },
        { id: 'inventario',  ico: '🎒', txt: 'Inventario' },
        { id: 'historia',    ico: '📖', txt: 'Historia' }
    ];

    /* ───────────── 1. Modo de vista ───────────── */
    // ¿Es un teléfono (aunque esté apaisado)? Se mira el tamaño de la PANTALLA, no el de la ventana,
    // para que abrir el teclado o redimensionar no cambie el diseño mientras se escribe.
    function esTelefono() {
        var sc = window.screen || {}, lado = Math.min(sc.width || 9999, sc.height || 9999);
        return lado < LADO_TELEFONO;
    }

    function calcularVista() {
        var w = window.innerWidth || html.clientWidth;
        if (w < BP_MOVIL || (w < ANCHO_MOVIL_APAISADO && esTelefono())) return 'movil';
        return w < BP_ESCRITORIO ? 'tablet' : 'escritorio';
    }

    function paneles() {
        return [].slice.call(document.querySelectorAll('#fichas-contenedor > .ficha-panel'));
    }

    function fijarVista(v) {
        ['escritorio', 'tablet', 'movil'].forEach(function (n) { html.classList.toggle('vista-' + n, n === v); });
        html.dataset.vista = v;
        paneles().forEach(function (p) { v === 'movil' ? entrarMovil(p) : salirMovil(p); });
        if (v !== 'movil') { html.classList.remove('mv-menu-abierto', 'mv-fab-abierto'); }
        if (typeof window.aplicarEscalaFicha === 'function') window.aplicarEscalaFicha();
    }

    var _rafResize = 0;
    function alCambiarTamano() {
        if (_rafResize) return;
        _rafResize = requestAnimationFrame(function () {
            _rafResize = 0;
            var v = calcularVista();
            if (v !== html.dataset.vista) fijarVista(v);
        });
    }

    /* ───────────── 2. Etiquetas de sección ───────────── */
    function etiquetar(panel) {
        if (panel._mvEtiquetado) return;
        panel._mvEtiquetado = true;
        var marca = function (sel, sec, raiz) {
            [].forEach.call((raiz || panel).querySelectorAll(sel), function (el) { el.setAttribute('data-sec', sec); });
        };
        marca(':scope > .cabecera-principal', 'historia');
        marca(':scope > .controles-accion', 'combate');
        marca(':scope > .rejilla-ficha .columna-stats', 'habilidades');
        marca(':scope > .rejilla-ficha .columna-habilidades', 'habilidades');
        marca(':scope > .rejilla-ficha .seccion-resistencias', 'combate');
        marca(':scope > .rejilla-ficha .fila-dados-muerte', 'combate');
        marca(':scope > .rejilla-ficha .seccion-condiciones', 'combate');
        marca(':scope > .rejilla-ficha .seccion-inventario', 'inventario');
        var acc = panel.querySelector('.caja-acciones');
        if (acc && acc.parentElement && acc.parentElement !== panel) acc.parentElement.setAttribute('data-sec', 'combate');
        // Página de características: todo en «Habilidades», salvo los Recursos, que se usan en combate
        var carac = panel.querySelector('.tercera-pagina');
        if (carac) {
            carac.setAttribute('data-sec', 'habilidades combate');
            [].forEach.call(carac.querySelectorAll('.caja-caracteristicas > .caract-fila'), function (f) {
                f.setAttribute('data-sec', f.querySelector('.recursos-grid') ? 'combate' : 'habilidades');
            });
        }
        marca(':scope > .cuarta-pagina', 'conjuros');
        marca(':scope > .quinta-pagina', 'historia');
    }

    /* ───────────── 3. Barra fija del móvil ───────────── */
    // Elementos reales que viajan a la barra fija (se devuelven a su sitio con un marcador)
    function elementosBarra(panel) {
        var ca = panel.querySelectorAll('.combate-inline > .caja-stat-inline');
        var vida = panel.querySelector('.seccion-vida');
        var out = [];
        [].forEach.call(ca, function (e) { out.push(e); });
        if (vida) out.push(vida);
        return out;
    }

    function crearBarra(panel) {
        var barra = panel.querySelector(':scope > .mv-barra');
        if (barra) return barra;
        barra = document.createElement('div');
        barra.className = 'mv-barra';
        barra.innerHTML = '<button type="button" class="mv-vida-toggle" aria-expanded="false" ' +
            'title="Daño, curación y PG temporales">❤ <span class="mv-vida-toggle-flecha">▾</span></button>';
        panel.insertBefore(barra, panel.firstChild);
        barra.querySelector('.mv-vida-toggle').addEventListener('click', function () {
            var abierta = barra.classList.toggle('vida-abierta');
            this.setAttribute('aria-expanded', abierta ? 'true' : 'false');
        });
        return barra;
    }

    function entrarMovil(panel) {
        etiquetar(panel);
        var barra = crearBarra(panel);
        if (panel._mvMovidos) return;
        panel._mvMovidos = [];
        elementosBarra(panel).forEach(function (el) {
            var marcador = document.createComment('mv');
            el.parentNode.insertBefore(marcador, el);
            panel._mvMovidos.push({ el: el, marcador: marcador });
            barra.appendChild(el);
        });
    }

    function salirMovil(panel) {
        if (!panel._mvMovidos) return;
        panel._mvMovidos.forEach(function (m) {
            if (m.marcador.parentNode) { m.marcador.parentNode.insertBefore(m.el, m.marcador); m.marcador.remove(); }
        });
        panel._mvMovidos = null;
        var barra = panel.querySelector(':scope > .mv-barra');
        if (barra) barra.classList.remove('vida-abierta');
    }

    /* ───────────── 4a. Barra inferior de secciones ───────────── */
    var _scrollPorSeccion = {};

    function cambiarSeccion(id, sinScroll) {
        if (!SECCIONES.some(function (s) { return s.id === id; })) id = 'combate';
        var antes = html.dataset.seccion;
        if (antes) _scrollPorSeccion[antes] = window.pageYOffset;
        html.dataset.seccion = id;
        [].forEach.call(document.querySelectorAll('#mv-nav .mv-nav-btn'), function (b) {
            var on = b.dataset.ir === id;
            b.classList.toggle('activo', on);
            b.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        if (!sinScroll && html.dataset.vista === 'movil') {
            window.scrollTo(0, _scrollPorSeccion[id] || 0);
        }
    }
    window._mvSeccion = cambiarSeccion;

    function crearNav() {
        if (document.getElementById('mv-nav')) return;
        var nav = document.createElement('nav');
        nav.id = 'mv-nav';
        nav.setAttribute('aria-label', 'Secciones de la ficha');
        nav.setAttribute('role', 'tablist');
        nav.innerHTML = SECCIONES.map(function (s) {
            return '<button type="button" class="mv-nav-btn" role="tab" data-ir="' + s.id + '" aria-label="' + s.txt + '" title="' + s.txt + '">' +
                '<span class="mv-nav-ico" aria-hidden="true">' + s.ico + '</span>' +
                '<span class="mv-nav-txt">' + s.txt + '</span></button>';
        }).join('');
        document.body.appendChild(nav);
        nav.addEventListener('click', function (e) {
            var b = e.target.closest('.mv-nav-btn');
            if (b) cambiarSeccion(b.dataset.ir);
        });
    }

    /* ───────────── 4b. Menú «⋯» de la barra de pestañas ───────────── */
    function crearMenuBarra() {
        var barra = document.getElementById('barra-pestanas');
        if (!barra || document.getElementById('mv-btn-menu')) return;
        var b = document.createElement('button');
        b.type = 'button';
        b.id = 'mv-btn-menu';
        b.className = 'mv-btn-menu';
        b.setAttribute('aria-label', 'Más acciones');
        b.setAttribute('aria-expanded', 'false');
        b.textContent = '⋯';
        barra.insertBefore(b, barra.querySelector('.barra-acciones-globales'));
        b.addEventListener('click', function (e) {
            e.stopPropagation();
            var abierto = html.classList.toggle('mv-menu-abierto');
            b.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });
        document.addEventListener('click', function (e) {
            if (!html.classList.contains('mv-menu-abierto')) return;
            if (e.target.closest('.barra-acciones-globales') && (!e.target.closest('.btn-tema-global, .btn-global') || e.target.closest('.btn-importar'))) return;
            html.classList.remove('mv-menu-abierto');
            b.setAttribute('aria-expanded', 'false');
        });
    }

    /* ───────────── 4c. Acciones rápidas (ventaja, desventaja, descansos…) ───────────── */
    function crearFab() {
        var panel = document.getElementById('panel-flotante-acciones');
        if (!panel || document.getElementById('mv-fab')) return;
        var fab = document.createElement('button');
        fab.type = 'button';
        fab.id = 'mv-fab';
        fab.setAttribute('aria-label', 'Acciones rápidas: ventaja, desventaja y descansos');
        fab.setAttribute('aria-expanded', 'false');
        fab.innerHTML = '<span class="mv-fab-ico" aria-hidden="true">⚡</span><span class="mv-fab-badge" aria-hidden="true"></span>';
        document.body.appendChild(fab);
        // Botón extra del menú: abrir el registro de tiradas completo (solo se ve en móvil)
        var btnLog = document.createElement('button');
        btnLog.type = 'button';
        btnLog.className = 'btn-flotante btn-log-f';
        btnLog.textContent = '📜 Registro';
        btnLog.addEventListener('click', function () {
            var log = document.getElementById('log-tiradas');
            if (log) { log.classList.remove('mv-log-reciente'); log.classList.toggle('mv-log-abierto'); }
        });
        panel.appendChild(btnLog);
        fab.addEventListener('click', function (e) {
            e.stopPropagation();
            var abierto = html.classList.toggle('mv-fab-abierto');
            fab.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });
        // Un toque fuera lo cierra; pulsar Ventaja/Desventaja también (para tirar ya)
        document.addEventListener('click', function (e) {
            if (!html.classList.contains('mv-fab-abierto')) return;
            var dentro = e.target.closest('#panel-flotante-acciones');
            var cierra = e.target.closest('.btn-ventaja-f, .btn-desventaja-f, .btn-descanso-corto-f, .btn-descanso-largo-f, .btn-log-f');
            if (dentro && !cierra) return;
            html.classList.remove('mv-fab-abierto');
            fab.setAttribute('aria-expanded', 'false');
        });
        // El botón redondo avisa de lo que está activo aunque el menú esté cerrado
        var actualizar = function () {
            var v = panel.querySelector('.btn-ventaja-f.activo'), d = panel.querySelector('.btn-desventaja-f.activo');
            var c = panel.querySelector('.btn-cond-f:not([hidden])');
            var ign = panel.querySelector('.btn-cond-f.activo');
            fab.dataset.vd = v ? 'v' : (d ? 'd' : '');
            fab.dataset.cond = c ? (ign ? 'ign' : 'si') : '';
            fab.querySelector('.mv-fab-badge').textContent = (v ? '▲' : d ? '▼' : '') + (c ? '⚠' : '');
        };
        new MutationObserver(actualizar).observe(panel, { subtree: true, attributes: true, attributeFilter: ['class', 'hidden'] });
        actualizar();
    }

    /* ───────────── 4d. Registro de tiradas como aviso ───────────── */
    function iniciarLog() {
        var lista = document.getElementById('log-lista');
        var cont = document.getElementById('log-tiradas');
        if (!lista || !cont) return;
        var t = 0;
        new MutationObserver(function (muts) {
            if (html.dataset.vista !== 'movil') return;
            var nueva = muts.some(function (m) { return m.addedNodes && m.addedNodes.length; });
            if (!nueva) return;
            cont.classList.add('mv-log-reciente');
            clearTimeout(t);
            t = setTimeout(function () { cont.classList.remove('mv-log-reciente'); }, 6000);
        }).observe(lista, { childList: true });
        // En móvil, tocar la cabecera abre/cierra el historial completo
        cont.addEventListener('click', function (e) {
            if (html.dataset.vista !== 'movil') return;
            if (e.target.closest('.log-cabecera button')) { cont.classList.remove('mv-log-abierto', 'mv-log-reciente'); return; }
            if (e.target.closest('.log-cabecera')) cont.classList.toggle('mv-log-abierto');
        });
    }

    /* ───────────── 5. PDF: siempre con el diseño de escritorio ───────────── */
    window._vistaForzarEscritorio = function () {
        var antes = html.dataset.vista;
        if (antes === 'escritorio') return function () {};
        fijarVista('escritorio');
        return function () { fijarVista(calcularVista()); };
    };

    /* ───────────── Arranque ───────────── */
    function iniciar() {
        crearNav();
        crearMenuBarra();
        crearFab();
        iniciarLog();
        cambiarSeccion('combate', true);

        // Cada ficha que se cree (al arrancar, «＋», importar, nube, historial…) se prepara sola
        var cont = document.getElementById('fichas-contenedor');
        if (cont) {
            new MutationObserver(function (muts) {
                muts.forEach(function (m) {
                    [].forEach.call(m.addedNodes, function (n) {
                        if (n.nodeType === 1 && n.classList.contains('ficha-panel')) {
                            etiquetar(n);
                            if (html.dataset.vista === 'movil') entrarMovil(n);
                        }
                    });
                });
            }).observe(cont, { childList: true });
        }
        fijarVista(calcularVista());
        window.addEventListener('resize', alCambiarTamano);
        window.addEventListener('orientationchange', alCambiarTamano);
    }

    window._responsive = { calcularVista: calcularVista, fijarVista: fijarVista, SECCIONES: SECCIONES, BP_MOVIL: BP_MOVIL, BP_ESCRITORIO: BP_ESCRITORIO, LADO_TELEFONO: LADO_TELEFONO, ANCHO_MOVIL_APAISADO: ANCHO_MOVIL_APAISADO };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();
})();
