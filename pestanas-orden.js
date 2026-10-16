/* ═══════════════════════════════════════════════════════
   REORDENAR LAS PESTAÑAS DE LAS FICHAS
   · Ratón: clic y arrastrar la pestaña (a partir de 6 px de movimiento).
   · Táctil: mantener pulsada la pestaña (~⅓ de segundo) y arrastrar.
   · Teclado: con la pestaña enfocada, Alt + ← / → la mueve; Intro o espacio la activa.
   · Esc durante el arrastre lo cancela y deja el orden como estaba.
   El orden se guarda con las fichas (el array `fichas` sigue el orden de la barra).
   Mientras se arrastra, la pestaña sale del flujo (position: fixed, sigue al puntero) y un
   HUECO marca dónde caerá. La pestaña nunca se quita del DOM durante el gesto (así no se
   pierde el puntero) y el hueco hace estable el reordenado aunque la barra tenga varias filas.
═══════════════════════════════════════════════════════ */
(function () {
    'use strict';

    const UMBRAL_PX = 6;       // movimiento del ratón para empezar a arrastrar
    const TOLERANCIA_PX = 10;  // en táctil, si el dedo se mueve antes de la pulsación larga es un scroll
    const PULSACION_MS = 320;
    const BORDE_SCROLL = 36;   // zona junto al borde de la barra que la desplaza al arrastrar

    let st = null;             // gesto en curso
    let suprimirClicHasta = 0; // para que soltar una pestaña arrastrada no la «clique»

    const barra = () => document.getElementById('barra-pestanas');
    const pestanas = () => [...(barra()?.querySelectorAll('.pestana') || [])];
    const reducirMov = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    function ordenActual() { return pestanas().map(t => t.dataset.fichaId); }

    /* Anima un elemento desde su posición anterior (FLIP) */
    function animarDesde(el, antes) {
        if (reducirMov() || !el.animate) return;
        const ahora = el.getBoundingClientRect();
        const dx = antes.left - ahora.left, dy = antes.top - ahora.top;
        if (!dx && !dy) return;
        try { el.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 140, easing: 'ease-out' }); } catch (_) {}
    }

    /* Mueve una pestaña «vecina» al otro lado de la pestaña `ref` (que no sale del DOM):
       vaAntes = true → la vecina pasa a ir justo antes de `ref`; false → justo después */
    function pasarVecinaAlOtroLado(vecina, ref, vaAntes) {
        const antes = vecina.getBoundingClientRect();
        if (vaAntes) ref.parentNode.insertBefore(vecina, ref);
        else ref.parentNode.insertBefore(vecina, ref.nextSibling);
        animarDesde(vecina, antes);
    }

    /* Vuelca el orden de la barra al array `fichas` y guarda */
    function confirmarOrden(ordenAntes) {
        const orden = ordenActual();
        if (ordenAntes && orden.join('|') === ordenAntes.join('|')) return false;
        if (typeof fichas !== 'undefined') {
            fichas.sort((a, b) => orden.indexOf(a.id) - orden.indexOf(b.id));
        }
        if (typeof guardarTodo === 'function') guardarTodo();
        return true;
    }

    /* ── Gesto de arrastre ── */
    function empezar() {
        if (!st || st.activo) return;
        clearTimeout(st.timer);
        st.activo = true;
        const tab = st.tab, bar = barra();
        st.ordenAntes = ordenActual();
        if (typeof activarFicha === 'function') activarFicha(tab.dataset.fichaId);
        const r = tab.getBoundingClientRect();
        st.gx = st.x0 - r.left;           // dónde se agarró dentro de la pestaña
        st.gy = st.y0 - r.top;
        st.w = r.width; st.h = r.height;
        // el hueco ocupa el sitio de la pestaña, que pasa a flotar sobre la barra
        const ph = document.createElement('div');
        ph.className = 'pestana-hueco';
        ph.style.width = r.width + 'px'; ph.style.height = r.height + 'px';
        tab.parentNode.insertBefore(ph, tab);
        st.ph = ph;
        tab.classList.add('arrastrando');
        Object.assign(tab.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', margin: '0', bottom: 'auto', boxSizing: 'border-box', pointerEvents: 'none' });
        bar.classList.add('reordenando');
        if (st.tipo === 'touch' && navigator.vibrate) { try { navigator.vibrate(12); } catch (_) {} }
        colocar(st.px, st.py);
        bucleScroll();
    }

    /* Vecino directo de `el` ignorando la pestaña que se arrastra */
    function vecino(el, siguiente) {
        let v = siguiente ? el.nextElementSibling : el.previousElementSibling;
        if (v === st.tab) v = siguiente ? v.nextElementSibling : v.previousElementSibling;
        return v;
    }

    /* La pestaña sigue al puntero y el hueco se mueve según qué pestaña quede bajo su centro */
    function colocar(px, py) {
        const tab = st.tab, bar = barra(), br = bar.getBoundingClientRect(), w = st.w, h = st.h;
        const left = Math.min(Math.max(px - st.gx, br.left), Math.max(br.left, br.right - w));
        const top = Math.min(Math.max(py - st.gy, br.top), Math.max(br.top, br.bottom - h));
        tab.style.left = left + 'px'; tab.style.top = top + 'px';
        const cx = left + w / 2, cy = top + h / 2;
        const otras = pestanas().filter(t => t !== tab);
        const rects = new Map(otras.map(t => [t, t.getBoundingClientRect()]));
        let destino = null, antes = true;
        for (const t of otras) {
            const r = rects.get(t);
            if (cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom) { destino = t; antes = cx < r.left + r.width / 2; break; }
        }
        if (!destino) {
            // fuera de toda pestaña: antes de la primera / después de la última de esa fila
            const fila = otras.filter(t => { const r = rects.get(t); return cy >= r.top && cy <= r.bottom; });
            if (fila.length) {
                if (cx < rects.get(fila[0]).left) { destino = fila[0]; antes = true; }
                else if (cx > rects.get(fila[fila.length - 1]).right) { destino = fila[fila.length - 1]; antes = false; }
            }
        }
        if (!destino) return;
        const ph = st.ph;
        if (vecino(destino, !antes) === ph) return;            // el hueco ya está ahí
        if (antes) destino.parentNode.insertBefore(ph, destino);
        else destino.parentNode.insertBefore(ph, destino.nextSibling);
        otras.forEach(t => animarDesde(t, rects.get(t)));
    }

    /* Si la barra se desplaza (móvil) y el puntero está cerca de un borde, la mueve */
    function bucleScroll() {
        if (!st || !st.activo) return;
        const bar = barra();
        if (bar.scrollWidth > bar.clientWidth + 1) {
            const br = bar.getBoundingClientRect();
            let v = 0;
            if (st.px < br.left + BORDE_SCROLL) v = -Math.ceil((br.left + BORDE_SCROLL - st.px) / 4);
            else if (st.px > br.right - BORDE_SCROLL) v = Math.ceil((st.px - (br.right - BORDE_SCROLL)) / 4);
            if (v) { const antes = bar.scrollLeft; bar.scrollLeft += Math.max(-16, Math.min(16, v)); if (bar.scrollLeft !== antes) colocar(st.px, st.py); }
        }
        st.raf = requestAnimationFrame(bucleScroll);
    }

    function terminar(cancelar) {
        if (!st) return;
        const s = st; st = null;
        clearTimeout(s.timer); cancelAnimationFrame(s.raf);
        document.removeEventListener('pointermove', onMove, true);
        document.removeEventListener('pointerup', onUp, true);
        document.removeEventListener('pointercancel', onCancel, true);
        document.removeEventListener('keydown', onTecla, true);
        document.removeEventListener('touchmove', onTouchMove, { capture: true });
        if (!s.activo) return;
        const tab = s.tab, bar = barra();
        const desde = tab.getBoundingClientRect();
        ['position', 'left', 'top', 'width', 'height', 'margin', 'bottom', 'boxSizing', 'pointerEvents'].forEach(k => { tab.style[k] = ''; });
        tab.classList.remove('arrastrando');
        bar.classList.remove('reordenando');
        suprimirClicHasta = Date.now() + 350;
        if (s.ph && s.ph.parentNode) {
            if (!cancelar) s.ph.parentNode.insertBefore(tab, s.ph);   // cae en el hueco
            s.ph.remove();
        }
        animarDesde(tab, desde);                                       // «cae» desde donde la soltaste
        if (!cancelar) confirmarOrden(s.ordenAntes);
    }

    function onMove(e) {
        if (!st || e.pointerId !== st.id) return;
        st.px = e.clientX; st.py = e.clientY;
        if (!st.activo) {
            const d = Math.hypot(e.clientX - st.x0, e.clientY - st.y0);
            if (st.tipo === 'touch') { if (d > TOLERANCIA_PX) terminar(true); }   // es un scroll, no un arrastre
            else if (d >= UMBRAL_PX) empezar();
            return;
        }
        e.preventDefault();
        colocar(e.clientX, e.clientY);
    }
    function onUp(e) { if (st && e.pointerId === st.id) terminar(false); }
    function onCancel(e) { if (st && e.pointerId === st.id) terminar(true); }
    function onTecla(e) { if (e.key === 'Escape' && st && st.activo) { e.preventDefault(); e.stopPropagation(); terminar(true); } }
    /* En táctil, una vez levantada la pestaña, el dedo no debe desplazar la página ni la barra */
    function onTouchMove(e) { if (st && st.activo && e.cancelable) e.preventDefault(); }

    function onDown(e) {
        if (st) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        const tab = e.target.closest && e.target.closest('.pestana');
        if (!tab || e.target.closest('.pestana-cerrar')) return;
        if (pestanas().length < 2) return;
        st = { tab, id: e.pointerId, x0: e.clientX, y0: e.clientY, px: e.clientX, py: e.clientY, tipo: e.pointerType === 'touch' ? 'touch' : 'raton', activo: false, timer: null, raf: 0 };
        if (st.tipo === 'touch') st.timer = setTimeout(empezar, PULSACION_MS);
        document.addEventListener('pointermove', onMove, true);
        document.addEventListener('pointerup', onUp, true);
        document.addEventListener('pointercancel', onCancel, true);
        document.addEventListener('keydown', onTecla, true);
        document.addEventListener('touchmove', onTouchMove, { capture: true, passive: false });
    }

    /* ── Teclado: Alt + ← / → mueve la pestaña enfocada ── */
    function moverConTeclado(tab, dir) {
        const ts = pestanas(), i = ts.indexOf(tab), j = i + dir;
        if (i < 0 || j < 0 || j >= ts.length) return;
        const ordenAntes = ordenActual();
        pasarVecinaAlOtroLado(ts[j], tab, dir > 0);   // la vecina salta al otro lado de `tab`
        tab.focus({ preventScroll: false });
        confirmarOrden(ordenAntes);
    }
    function onTeclaBarra(e) {
        const tab = e.target.closest && e.target.closest('.pestana');
        if (!tab || e.target.closest('.pestana-cerrar')) return;
        if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            e.preventDefault();
            moverConTeclado(tab, e.key === 'ArrowLeft' ? -1 : 1);
        } else if ((e.key === 'Enter' || e.key === ' ') && e.target === tab) {
            e.preventDefault();
            tab.click();
        }
    }

    function iniciar() {
        const bar = barra();
        if (!bar || bar.dataset.ordenIniciado) return;
        bar.dataset.ordenIniciado = '1';
        bar.addEventListener('pointerdown', onDown);
        bar.addEventListener('keydown', onTeclaBarra);
        // soltar una pestaña arrastrada no debe activarla/«clicarla» de nuevo
        bar.addEventListener('click', e => { if (Date.now() < suprimirClicHasta) { e.stopPropagation(); e.preventDefault(); } }, true);
        // la pulsación larga del móvil abre el menú contextual del sistema: fuera
        bar.addEventListener('contextmenu', e => { if (e.target.closest && e.target.closest('.pestana') && (st || e.pointerType === 'touch')) e.preventDefault(); });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();

    // Para las pruebas
    window._pestanasOrden = { ordenActual, moverConTeclado };
})();
