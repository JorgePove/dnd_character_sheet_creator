/* ═══════════════════════════════════════════════════════
   ACCIONES ESTÁNDAR — referencia plegable en las pestañas de Acciones
   · Un bloque «📖 Acciones estándar» de solo lectura al principio de cada pestaña
     (Actions, Bonus Actions, Reactions, Otros). Cierra por defecto y no se guarda ni
     sale en el PDF.
   · El botón «＋» de cada acción la copia a la lista editable de esa pestaña.
   · Texto: Reglas básicas 5.5e (PHB 2024); la nota «2014» recoge lo que cambia respecto
     al PHB de 2014. Resúmenes en español a partir de los datos de 5etools (XPHB / PHB).
═══════════════════════════════════════════════════════ */
(function () {
    'use strict';

    // n = nombre · en = nombre inglés · t = texto 5.5e · n14 = nota sobre 2014
    const ACC = {
        actions: [
            { n: 'Atacar', en: 'Attack',
              t: 'Haces un ataque con un arma o un Ataque Desarmado (daño, Agarrar o Empujar). Si tienes Ataque Extra, puedes moverte entre los ataques. Puedes equipar o guardar un arma como parte de uno de los ataques.',
              n14: 'Agarrar y Empujar eran ataques especiales que sustituían a uno de tus ataques (prueba de Atletismo enfrentada).' },
            { n: 'Correr', en: 'Dash',
              t: 'Ganas movimiento extra este turno igual a tu Velocidad (ya con sus modificadores). Si tienes otra velocidad (volar, nadar…), puedes usarla en lugar de la normal; eliges cada vez.' },
            { n: 'Destrabarse', en: 'Disengage',
              t: 'Tu movimiento no provoca ataques de oportunidad durante el resto del turno.' },
            { n: 'Esquivar', en: 'Dodge',
              t: 'Hasta el inicio de tu siguiente turno, las tiradas de ataque contra ti tienen desventaja si ves al atacante, y tus salvaciones de Destreza tienen ventaja. Lo pierdes si quedas Incapacitado o tu Velocidad es 0.' },
            { n: 'Ayudar', en: 'Help',
              t: 'Una de dos: (1) Ayudar con una prueba: eliges una competencia (habilidad o herramienta) y un aliado cercano; su próxima prueba con ella tiene ventaja. (2) Ayudar con un ataque: distraes a un enemigo a 5 pies de ti y el próximo ataque de un aliado contra él tiene ventaja. Ambos efectos caducan al inicio de tu siguiente turno. También sirve para estabilizar a una criatura.',
              n14: 'Ayudabas con una tarea concreta (sin elegir una competencia); la ayuda a un ataque funcionaba igual.' },
            { n: 'Esconderse', en: 'Hide',
              t: 'Prueba de Destreza (Sigilo) CD 15, estando muy oscurecido o tras cobertura de tres cuartos o total, y fuera de la línea de visión de los enemigos. Si tienes éxito, tienes la condición Invisible mientras sigas oculto; tu total es la CD para encontrarte (Sabiduría, Percepción). Dejas de estarlo si haces un ruido mayor que un susurro, un enemigo te encuentra, haces una tirada de ataque o lanzas un conjuro con componente verbal.',
              n14: 'Prueba de Sigilo sin CD fija ni condición Invisible; los efectos están en «Atacantes y objetivos no vistos» del PHB 2014.' },
            { n: 'Influir', en: 'Influence',
              t: 'Instas a un monstruo a hacer algo (engañar, intimidar, divertir o persuadir). El DM decide si está dispuesto (lo hace, sin tirada), reacio (no lo hace, sin tirada) o dubitativo (prueba de característica; CD por defecto 15 o la Inteligencia del monstruo, la mayor; si fallas, esperas 24 horas para insistir igual). Pruebas habituales: Carisma (Engaño, Intimidación, Interpretación o Persuasión) y Sabiduría (Trato con Animales) para bestias y monstruosidades.',
              n14: 'No existe como acción: se resolvía con pruebas de Carisma sueltas.' },
            { n: 'Magia', en: 'Magic',
              t: 'Lanzas un conjuro con tiempo de lanzamiento de 1 acción, o usas un rasgo u objeto mágico que pida la acción Magia. Si el conjuro tarda 1 minuto o más, tomas la acción Magia en cada turno de lanzamiento y mantienes la Concentración; si se rompe, el conjuro falla pero no gastas el espacio.',
              n14: '«Lanzar un conjuro» (Cast a Spell).' },
            { n: 'Preparar', en: 'Ready',
              t: 'Esperas una circunstancia perceptible para actuar con tu Reacción antes del inicio de tu siguiente turno: decides el desencadenante y la acción (o mover hasta tu Velocidad). Cuando ocurre, actúas justo después o lo ignoras. Si preparas un conjuro, lo lanzas ya (gastando sus recursos) pero retienes su energía con Concentración hasta soltarla con tu Reacción; debe tener tiempo de lanzamiento de 1 acción.' },
            { n: 'Buscar', en: 'Search',
              t: 'Prueba de Sabiduría para descubrir algo que no es obvio: Perspicacia (estado de ánimo de una criatura), Medicina (dolencia o causa de muerte), Percepción (criatura u objeto oculto) o Supervivencia (rastros o comida).',
              n14: 'Prueba de Sabiduría (Percepción) o Inteligencia (Investigación), a criterio del DM.' },
            { n: 'Estudiar', en: 'Study',
              t: 'Prueba de Inteligencia para recordar o deducir información: Arcanos (conjuros, objetos mágicos, planos, ciertas criaturas), Historia, Investigación (trampas, cifrados, acertijos), Naturaleza o Religión.',
              n14: 'No existe como acción: eran pruebas de Inteligencia sueltas.' },
            { n: 'Utilizar', en: 'Utilize',
              t: 'Usas un objeto que requiere una acción para funcionar. Normalmente interactúas con objetos mientras haces otra cosa (por ejemplo, desenvainar al Atacar).',
              n14: '«Usar un objeto» (Use an Object).' },
            { n: 'Ponerse o quitarse un escudo', en: 'Don or Doff a Shield',
              t: 'Ponerse o quitarse un escudo requiere una acción.' },
            { n: 'Escapar de un agarre', en: 'Escape a Grapple',
              t: 'Prueba de Fuerza (Atletismo) o Destreza (Acrobacias) contra la CD de escape del agarre; si la superas, termina la condición. También termina si el que agarra queda Incapacitado o si la distancia supera el alcance del agarre.' },
            { n: 'Improvisar una acción', en: 'Improvising an Action',
              t: 'Puedes describir una acción que no aparece en las reglas. El DM dice si es posible y qué prueba de d20 (si alguna) requiere.' }
        ],
        bonus: [
            { n: 'Combatir con dos armas', en: 'Two-Weapon Fighting',
              t: 'Si haces la acción Atacar con un arma Ligera, puedes hacer un ataque extra como Acción Adicional más tarde en el mismo turno, con un arma Ligera distinta. No sumas tu modificador de característica al daño de ese ataque, salvo que sea negativo.',
              n14: 'Eran dos armas cuerpo a cuerpo Ligeras, una en cada mano; si tenían la propiedad Arrojadiza, podías lanzarlas.' }
        ],
        reactions: [
            { n: 'Ataque de oportunidad', en: 'Opportunity Attack',
              t: 'Cuando una criatura que ves sale de tu alcance usando su acción, su Acción Adicional, su Reacción o una de sus velocidades, puedes gastar tu Reacción para hacer un ataque cuerpo a cuerpo (con un arma o un Ataque Desarmado) contra ella, justo antes de que salga de tu alcance. Destrabarse evita provocarlo.',
              n14: 'Se provocaba cuando una criatura hostil que ves sale de tu alcance al moverse.' }
        ],
        otros: [
            { n: 'Terminar la Concentración', en: 'End Concentration',
              t: 'Puedes terminar tu Concentración en cualquier momento; no requiere ninguna acción.' }
        ]
    };

    const TITULO = { actions: 'Acciones', bonus: 'Acciones adicionales', reactions: 'Reacciones', otros: 'Otras' };

    function crear(tag, clase, texto) {
        const e = document.createElement(tag);
        if (clase) e.className = clase;
        if (texto != null) e.textContent = texto;
        return e;
    }

    function nombreCompleto(a) { return `${a.n} (${a.en})`; }

    /* ¿Ya hay en la lista editable una entrada con ese nombre? */
    function yaEsta(lista, nombre) {
        const norm = s => String(s || '').trim().toLowerCase();
        return [...lista.querySelectorAll('.entrada-accion .accion-nombre')].some(i => norm(i.value) === norm(nombre));
    }

    /* Copia una acción a la lista editable: usa la primera fila vacía o añade una nueva */
    function copiar(panelAcc, tipo, a, boton) {
        const lista = panelAcc.querySelector('.acciones-lista');
        if (!lista) return;
        const nombre = nombreCompleto(a);
        if (yaEsta(lista, nombre)) {
            if (typeof _mostrarToast === 'function') _mostrarToast(`«${a.n}» ya está en tu lista`);
            return;
        }
        let fila = [...lista.querySelectorAll('.entrada-accion')].find(e =>
            !(e.querySelector('.accion-nombre')?.value || '').trim() && !(e.querySelector('.accion-desc')?.value || '').trim());
        if (!fila) {
            const btnAdd = panelAcc.querySelector('.btn-añadir-accion');
            if (typeof añadirAccion === 'function' && btnAdd) añadirAccion(btnAdd, tipo);
            const filas = lista.querySelectorAll('.entrada-accion');
            fila = filas[filas.length - 1];
        }
        if (!fila) return;
        fila.querySelector('.accion-nombre').value = nombre;
        fila.querySelector('.accion-desc').value = a.t;
        if (typeof guardarDebounced === 'function') guardarDebounced();
        if (boton) { boton.textContent = '✓'; boton.classList.add('hecho'); boton.title = 'Ya está en tu lista'; }
        if (typeof _mostrarToast === 'function') _mostrarToast(`✔ «${a.n}» añadida a tu lista`);
    }

    function marcarYaAnadidas(panelAcc) {
        const lista = panelAcc.querySelector('.acciones-lista');
        if (!lista) return;
        panelAcc.querySelectorAll('.acc-ref-item').forEach(it => {
            const b = it.querySelector('.acc-ref-add');
            const esta = yaEsta(lista, it.dataset.nombre);
            b.textContent = esta ? '✓' : '＋';
            b.classList.toggle('hecho', esta);
            b.title = esta ? 'Ya está en tu lista' : 'Añadir a mi lista';
        });
    }

    function construirItem(panelAcc, tipo, a) {
        const item = crear('div', 'acc-ref-item');
        item.dataset.nombre = nombreCompleto(a);
        const fila = crear('div', 'acc-ref-fila');
        const nom = crear('button', 'acc-ref-nom');
        nom.type = 'button';
        nom.setAttribute('aria-expanded', 'false');
        nom.append(crear('span', 'acc-ref-flecha', '▸'), crear('span', 'acc-ref-n', a.n), crear('span', 'acc-ref-en', `(${a.en})`));
        const add = crear('button', 'acc-ref-add', '＋');
        add.type = 'button';
        add.title = 'Añadir a mi lista';
        add.setAttribute('aria-label', `Añadir «${a.n}» a mi lista`);
        fila.append(nom, add);
        const cuerpo = crear('div', 'acc-ref-cuerpo');
        cuerpo.hidden = true;
        cuerpo.append(crear('p', 'acc-ref-txt', a.t));
        if (a.n14) {
            const p = crear('p', 'acc-ref-n14');
            p.append(crear('b', null, '2014: '), document.createTextNode(a.n14));
            cuerpo.append(p);
        }
        item.append(fila, cuerpo);
        nom.addEventListener('click', () => {
            const abierto = cuerpo.hidden;
            cuerpo.hidden = !abierto;
            nom.setAttribute('aria-expanded', String(abierto));
            item.classList.toggle('abierto', abierto);
        });
        add.addEventListener('click', e => { e.stopPropagation(); copiar(panelAcc, tipo, a, add); marcarYaAnadidas(panelAcc); });
        return item;
    }

    /* Inserta el bloque de referencia en cada pestaña de acciones de la ficha */
    window.initAccionesEstandar = function (fichaPanel) {
        Object.keys(ACC).forEach(tipo => {
            const panelAcc = fichaPanel.querySelector(`.accion-panel[data-panel="${tipo}"]`);
            if (!panelAcc || panelAcc.querySelector('.acc-ref')) return;
            const det = crear('details', 'acc-ref');
            const sum = crear('summary', 'acc-ref-resumen');
            sum.append(crear('span', 'acc-ref-ico', '📖'), document.createTextNode(` Acciones estándar · ${TITULO[tipo]} `), crear('small', null, '(referencia 5.5e)'));
            const lista = crear('div', 'acc-ref-lista');
            ACC[tipo].forEach(a => lista.appendChild(construirItem(panelAcc, tipo, a)));
            det.append(sum, lista);
            det.addEventListener('toggle', () => { if (det.open) marcarYaAnadidas(panelAcc); });
            panelAcc.insertBefore(det, panelAcc.firstChild);
        });
    };

    window._ACCIONES_ESTANDAR = ACC;   // para las pruebas
})();
