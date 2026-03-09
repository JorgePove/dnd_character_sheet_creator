/* ══════════════════════════════════════════════════════════════════
   hechicero.js — Hechicero: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Explorer's Guide to Wildemount (EGtW)
     Dragonlance: Shadow of the Dragon Queen (SotDQ)
     Tal'Dorei Campaign Setting Reborn (TCSR)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (13 entradas):
     Origen Dracónico         [PHB 2014] / [PHB 2024]
     Magia Salvaje            [PHB 2014] / [PHB 2024]
     Alma del Mar             [XGtE]
     Hechicería Divina        [XGtE]
     Alma de la Sombra        [XGtE]
     Magia Aberrante          [TCE]      / [PHB 2024]
     Magia del Reloj          [TCE]      / [PHB 2024]
     Magia Lunar              [SotDQ]
     Sangre Mágica            [TCSR]
══════════════════════════════════════════════════════════════════ */

const CLASE_HECHICERO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras: ninguna. Armas: dagas, dardos, hondas, bastones, ballestas ligeras. Salvaciones: CON y CAR. Habilidades: elige 2 entre Arcanos, Engaño, Perspicacia, Intimidación, Persuasión y Religión."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "CAR es tu característica de conjuro (CD = 8 + comp + mod CAR). El Hechicero conoce sus conjuros (no los prepara). Trucos conocidos: 4 (Nv.1) → 5 (Nv.4) → 6 (Nv.10). Conjuros conocidos: 2 (Nv.1) → escala hasta 15 (Nv.20). Puede cambiar un conjuro al subir de nivel."
    },
    {
      n: "Origen Hechiceril",
      nv: 1,
      d: "Eliges tu subclase (Origen Hechiceril) al Nv.1. Otorga rasgos en Nv.1, 6, 14 y 18."
    },
    {
      n: "Fuente de Magia",
      nv: 2,
      d: "Tienes un pozo de magia llamado Puntos de Hechicería: 2 (Nv.2) → igual a tu nivel (hasta Nv.20). Se recuperan con Descanso Largo. Puedes: convertir espacios en Puntos (Flexibilidad de Conjuros) — un espacio de Nv.X → X Puntos (Nv.5+ → X+1), o crear espacios gastando Puntos (Nv.1: 2p, Nv.2: 3p, Nv.3: 5p, Nv.4: 6p, Nv.5: 7p). Máximo espacio creado: Nv.5."
    },
    {
      n: "Metamagia",
      nv: 3,
      d: "Aprendes 2 opciones de Metamagia (→3 en Nv.10 → 4 en Nv.17). Cada opción cuesta Puntos de Hechicería al usarla. Opciones: Conjuro Cuidadoso (1p — criaturas elegidas superan automáticamente salvaciones de tus conjuros), Conjuro Distante (1p — dobla el rango o 30 pies si el rango es toque), Conjuro Potenciado (1p — repite hasta mod CAR dados de daño, usa el mejor), Conjuro Extendido (1p — dobla la duración, máx. 24h), Conjuro Intensificado (3p — un objetivo tiene desventaja en la primera salvación), Conjuro Rápido (2p — lanza conjuro de 1 acción como AA), Conjuro Sutil (1p — sin componentes verbales ni gestuales), Conjuro Gemelo (igual al coste del nivel — aplica el conjuro a un segundo objetivo), Conjuro Buscador [TCE] (2p — reorienta el conjuro fallado al siguiente turno), Transmutación [TCE] (1p — cambia el tipo de daño del conjuro)."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Recuperación de Hechicería",
      nv: 20,
      d: "(PHB 2014) Al terminar un Descanso Corto, recuperas 4 Puntos de Hechicería gastados."
    },
    {
      n: "Hechicero Épico [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Cuando lanzas un conjuro usando un espacio de Nv.5, puedes lanzar de nuevo ese mismo conjuro sin gastar espacio ni usar acción adicional. 1/descanso largo. Además recuperas 4 Puntos de Hechicería al terminar un Descanso Corto."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (ORÍGENES HECHICERILES)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Origen Dracónico [PHB 2014]": [
      {
        n: "Ancestro Dracónico",
        nv: 1,
        d: "Eliges el tipo de dragón que está en tu linaje (Negro — ácido, Azul — rayo, Latón — fuego, Bronce — rayo, Cobre — ácido, Oro — fuego, Verde — veneno, Plata — frío, Rojo — fuego, Blanco — frío). Ganas la capacidad de hablar, leer y escribir Dracónico. Cuando haces una prueba de CAR relacionada con dragones del tipo elegido, doblas el bonificador de competencia."
      },
      {
        n: "Resistencia Dracónica",
        nv: 1,
        d: "El linaje de dragón se manifiesta físicamente: ganas resistencia al tipo de daño de tu ancestro. Además tu CA base = 13 + mod DES cuando no llevas armadura (escamas dracónicas)."
      },
      {
        n: "Afinidad Elemental",
        nv: 6,
        d: "Cuando lanzas un conjuro que causa el tipo de daño de tu ancestro, añades mod CAR al daño. Además puedes gastar 1 Punto de Hechicería para obtener resistencia a ese tipo de daño durante 1 hora."
      },
      {
        n: "Alas Dracónicas",
        nv: 14,
        d: "Como Acción Adicional manifiestas alas de dragón en tu espalda, ganando velocidad de vuelo = tu velocidad de caminar. Las alas duran hasta que las retraigas (AA)."
      },
      {
        n: "Presencia Dracónica",
        nv: 18,
        d: "Como Acción gastas 5 Puntos de Hechicería para emitir un aura de asombro o terror en radio de 60 pies durante 1 minuto (concentración). Criaturas que entren al área superan salvación SAB (CD conjuro) o quedan Encantadas (asombro) o Asustadas (terror) durante 1 minuto."
      },
    ],

    "Magia Salvaje [PHB 2014]": [
      {
        n: "Oleada de Magia Salvaje",
        nv: 1,
        d: "Inmediatamente después de lanzar un conjuro de Nv.1 o superior, el DM puede pedirte que lances 1d20. Si sacas 1, se produce una oleada de magia salvaje: lanzas 1d100 en la tabla de magia salvaje y aplicas el resultado."
      },
      {
        n: "Marea de Caos",
        nv: 1,
        d: "Puedes manipular las fuerzas del azar para obtener ventaja en una tirada de ataque, prueba de característica o tirada de salvación. Una vez que lo usas, debes terminar un Descanso Largo para volver a usarlo, a menos que se desencadene una Oleada de Magia Salvaje al hacerlo."
      },
      {
        n: "Magia Doblada",
        nv: 6,
        d: "Cuando lanzas un conjuro de Nv.1 o superior, puedes usar inmediatamente Metamagia en él sin gastar Puntos de Hechicería. 1/Descanso Largo (antes de que se desencadene una oleada)."
      },
      {
        n: "Caos Controlado",
        nv: 14,
        d: "Cuando se desencadena una Oleada de Magia Salvaje, puedes tirar dos veces en la tabla y elegir cuál de los dos resultados aplicar."
      },
      {
        n: "Explosión de Magia",
        nv: 18,
        d: "Puedes gastar 5 Puntos de Hechicería para desencadenar una Oleada de Magia Salvaje sin lanzar un conjuro: aplica el resultado como si acabaras de lanzar uno."
      },
    ],

    /* ── PHB 2024 ── */
    "Origen Dracónico [PHB 2024]": [
      {
        n: "Ancestro Dracónico",
        nv: 1,
        d: "Eliges el tipo de dragón de tu linaje (determina el tipo de daño). Ganas el idioma Dracónico. Resistencia permanente al tipo de daño de tu ancestro. CA base = 13 + mod DES sin armadura."
      },
      {
        n: "Afinidad Elemental",
        nv: 6,
        d: "Al lanzar un conjuro que cause el tipo de daño de tu ancestro, añades mod CAR al daño (una vez por lanzamiento). Puedes gastar 1 Punto para ganar resistencia a ese tipo durante 1 hora."
      },
      {
        n: "Alas Dracónicas",
        nv: 14,
        d: "AA: manifiestas alas de dragón, velocidad de vuelo = velocidad de caminar. Las alas duran hasta que las retraigas (AA)."
      },
      {
        n: "Presencia Dracónica",
        nv: 18,
        d: "Acción + 5 Puntos: aura de 60 pies durante 1 minuto (concentración). Criaturas que entren superan salvación SAB o quedan Encantadas o Asustadas."
      },
    ],

    "Magia Salvaje [PHB 2024]": [
      {
        n: "Oleada de Magia Salvaje",
        nv: 1,
        d: "Cuando lanzas un conjuro de Nv.1+ usando un espacio, el DM puede pedirte tirar 1d20. Con 1, se desencadena la oleada (1d100 en la tabla). Además, si tienes Marea de Caos activa, la oleada se desencadena automáticamente al lanzar un conjuro."
      },
      {
        n: "Marea de Caos",
        nv: 1,
        d: "Ventaja en una tirada de ataque, prueba de característica o salvación. 1/descanso largo, salvo que se desencadene una Oleada al usarlo (en cuyo caso se reinicia)."
      },
      {
        n: "Magia Doblada",
        nv: 6,
        d: "Al lanzar un conjuro de Nv.1+, puedes aplicar una opción de Metamagia sin gastar Puntos. 1/descanso largo."
      },
      {
        n: "Caos Controlado",
        nv: 14,
        d: "Cuando se desencadena una Oleada, tiras dos veces en la tabla y eliges cuál aplicar."
      },
      {
        n: "Explosión de Magia",
        nv: 18,
        d: "Gastas 5 Puntos para desencadenar una Oleada de Magia Salvaje directamente."
      },
    ],

    "Magia Aberrante [PHB 2024]": [
      {
        n: "Mente del Más Allá",
        nv: 1,
        d: "Aprendes los trucos Teletransporte Menor (Minor Illusion) y Mensaje (Message). Además, puedes lanzar Detectar Pensamientos sin espacio (CAR como característica) 1/descanso largo."
      },
      {
        n: "Telequinesis Psíónica",
        nv: 1,
        d: "Cuando dañas a una criatura con un conjuro, puedes moverla hasta 10 pies horizontal o verticalmente (salvación FUE CD conjuro para resistir)."
      },
      {
        n: "Forma Aberrante",
        nv: 6,
        d: "Como Acción gastas 1 Punto de Hechicería para manifestar rasgos aberrantes durante 1 minuto: ojos adicionales (ventaja en Percepción), tentáculos (ataque adicional como AA, 1d6 fuerza, alcance 10 pies) o alas vestigiales (velocidad de vuelo 10 pies). Elige el rasgo al activar."
      },
      {
        n: "Mente Sobrenatural",
        nv: 14,
        d: "Puedes comunicarte telepáticamente con cualquier criatura que puedas ver a 30 pies. Puedes lanzar Telepatía sin componentes 1/descanso largo. Mientras la telepatía esté activa, tienes ventaja en tiradas de CAR contra el objetivo."
      },
      {
        n: "Forma del Cuerpo Aberrante",
        nv: 18,
        d: "Gastas 5 Puntos para transformarte en una forma aberrante completamente durante 1 hora (concentración): vuelo 40 pies, inmunidad a psíquico, tentáculos que infligen 2d6 fuerza a criaturas a 10 pies al inicio de su turno (FUE para reducir a la mitad)."
      },
    ],

    "Magia del Reloj [PHB 2024]": [
      {
        n: "Magia del Reloj",
        nv: 1,
        d: "Aprendes los trucos Mage Hand y Mind Sliver. Puedes lanzar Detectar Magia sin espacio 1/descanso largo."
      },
      {
        n: "Interrupción Temporal",
        nv: 1,
        d: "Cuando una criatura a 30 pies tira para atacar o para superar una salvación, puedes usar tu Reacción y gastar 2 Puntos para imponer desventaja en esa tirada (decides antes de conocer el resultado)."
      },
      {
        n: "Magia del Orden",
        nv: 6,
        d: "Cuando lanzas un conjuro de Nv.1+, puedes eliminar el componente verbal o gestual (no ambos) sin gastar Puntos. 1/descanso largo. Además, cuando realizas una tirada de concentración, añades mod INT a la tirada."
      },
      {
        n: "Trance Controlado",
        nv: 14,
        d: "Como AA gastas 1 Punto para entrar en trance: durante 1 minuto, cuando fallas una tirada de salvación puedes usar tu Reacción para repetirla (debes usar el nuevo resultado). Mientras el trance esté activo, no puedes ser Encantado ni Asustado."
      },
      {
        n: "Maestro del Tiempo",
        nv: 18,
        d: "Gastas 5 Puntos para lanzar Parar el Tiempo (Time Stop) sin gastar espacio de conjuro. Además, una vez por Descanso Largo cuando alguien lanza un conjuro en 60 pies, puedes usar tu Reacción para lanzar Contraconjuro sin gastar espacio."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Alma del Mar [XGtE]": [
      {
        n: "Mini-Conjuros del Origen",
        nv: 1,
        d: "Aprendes los conjuros Forma de Niebla (Fog Cloud) y Gust. También puedes hablar, leer y escribir Primordial. Velocidad de natación 30 pies; puedes respirar bajo el agua."
      },
      {
        n: "Ira del Mar",
        nv: 6,
        d: "Cuando lanzas un conjuro que cause daño de rayo, trueno, frío o ácido, puedes gastar 1 Punto de Hechicería para añadir a uno de los objetivos daño adicional = nivel del conjuro + mod CAR del mismo tipo."
      },
      {
        n: "Forma Acuática",
        nv: 14,
        d: "Como AA gastas 1 Punto de Hechicería para adoptar una forma acuática durante 1 hora: puedes moverte a través del espacio de otras criaturas (teniéndolas como terreno difícil), eres inmune a daño de fuego y tienes resistencia a ácido y trueno."
      },
      {
        n: "Maestro del Mar",
        nv: 18,
        d: "Gastas 5 Puntos para invocar a un espíritu del mar que actúa en tu iniciativa y sigue tus órdenes durante 1 hora. El espíritu tiene las estadísticas de un Elemental de Agua pero con PG = tu nivel × 2."
      },
    ],

    "Hechicería Divina [XGtE]": [
      {
        n: "Vínculo Divino",
        nv: 1,
        d: "Tienes un vínculo con los planos superiores. Aprendes un conjuro adicional del Clérigo de Nv.1-9 que siempre está en tu lista (no cuenta contra conjuros conocidos). Además puedes usar un símbolo sagrado como foco de conjuro. Ganas competencia en Religión."
      },
      {
        n: "Favor Celestial",
        nv: 1,
        d: "Puedes gastar 1 Punto de Hechicería como AA para ganar ventaja en todas las tiradas de salvación contra conjuros durante 1 minuto."
      },
      {
        n: "Aura de Protección Divina",
        nv: 6,
        d: "Puedes gastar Puntos de Hechicería para curar: 2 Puntos restituyen PG = 1d4 + mod CAR (a ti o a una criatura que toques). Cuando lanzas un conjuro de curación de Nv.1+, también recuperas PG = nivel del espacio."
      },
      {
        n: "Forma Radiante",
        nv: 14,
        d: "Como Acción gastas 5 Puntos de Hechicería para emitir un aura de luz radiante durante 1 minuto: luz brillante 10 pies + tenue 10 pies más; criaturas hostiles a 10 pies reciben 10 de daño radiante al inicio de su turno; tienes ventaja en tiradas de salvación."
      },
      {
        n: "Llama Sobrenatural",
        nv: 18,
        d: "Cuando lanzas un conjuro de curación de Nv.1+, puedes usarlo para curar a una criatura adicional gratuitamente (sin gastar otro espacio). Además, puedes gastar 5 Puntos para lanzar Restauración Mayor sin espacio."
      },
    ],

    "Alma de la Sombra [XGtE]": [
      {
        n: "Magia de las Sombras",
        nv: 1,
        d: "Tienes visión en la oscuridad hasta 120 pies. Cuando estás en oscuridad o luz tenue, puedes lanzar Levantar los Muertos (False Life) sobre ti mismo sin gastar espacio (1/descanso largo). Además, aprendes el truco Tinieblas."
      },
      {
        n: "Paso entre Sombras",
        nv: 6,
        d: "Puedes gastar 1 Punto de Hechicería como AA para teletransportarte hasta 120 pies a un espacio de oscuridad o luz tenue que puedas ver. Si llegas a la oscuridad, quedas Invisible hasta el inicio de tu siguiente turno o hasta que ataques o lances un conjuro."
      },
      {
        n: "Perder la Forma",
        nv: 14,
        d: "Puedes gastar 1 Punto de Hechicería como Reacción cuando eres atacado para volverte etéreo brevemente: el ataque falla porque atraviesa tu forma semincorpórea. No puedes usar este rasgo si estás a plena luz brillante."
      },
      {
        n: "Formas de la Sombra",
        nv: 18,
        d: "Como Acción gastas 6 Puntos de Hechicería para convocar sombras que adoptan formas aterradoras en radio 30 pies durante 1 minuto. Criaturas hostiles en el área superan salvación SAB (CD conjuro) o quedan Asustadas y deben mover 30 pies lejos de ti al inicio de su turno."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Magia Aberrante [TCE]": [
      {
        n: "Mente del Más Allá",
        nv: 1,
        d: "Aprendes los trucos Teletransporte Menor y Mensaje. Puedes lanzar Detectar Pensamientos sin espacio 1/descanso largo."
      },
      {
        n: "Forma Psíónica",
        nv: 1,
        d: "Cuando dañas a una criatura con un conjuro, puedes moverla hasta 10 pies (FUE CD conjuro para resistir)."
      },
      {
        n: "Caparazón Aberrante",
        nv: 6,
        d: "Cuando fallas una tirada de salvación, puedes usar tu Reacción y gastar 2 Puntos para relanzarla, eligiendo el resultado más favorable."
      },
      {
        n: "Mente Aterradora",
        nv: 14,
        d: "Puedes lanzar Telepatía sin componentes 1/descanso largo. Mientras esté activa, tienes ventaja en ataques de conjuro contra el objetivo."
      },
      {
        n: "Forma del Alien",
        nv: 18,
        d: "Gastas 7 Puntos para transformarte en una forma aberrante durante 1 hora: vuelo, inmunidad a psíquico, tentáculos que atacan criaturas a 10 pies (daño psíquico)."
      },
    ],

    "Magia del Reloj [TCE]": [
      {
        n: "Magia del Reloj",
        nv: 1,
        d: "Aprendes Alarma y Detectar Magia siempre preparados. Puedes lanzar Detectar Magia sin espacio 1/descanso largo."
      },
      {
        n: "Restauración de Hechicería",
        nv: 1,
        d: "Cuando lanzas un conjuro que Encante o Asuste a criaturas, puedes gastar 2 Puntos para terminar todos los efectos de Encantamiento y Asustado sobre criaturas amistosas a 30 pies."
      },
      {
        n: "Bastion of Law",
        nv: 6,
        d: "Como Acción gastas 1-5 Puntos para envolver a una criatura visible a 30 pies en un escudo mágico: gana PG temporales = 5 × Puntos gastados."
      },
      {
        n: "Trance Temporal",
        nv: 14,
        d: "AA + 2 Puntos: te mueves 30 pies sin provocar ataques de oportunidad y puedes pasar a través del espacio de criaturas hostiles (pero no terminar en él)."
      },
      {
        n: "Maestro del Orden",
        nv: 18,
        d: "Gastas 5 Puntos para lanzar Time Stop sin espacio. Además, cuando lanzas un conjuro de Nv.1+ con duración instantánea que cause daño, puedes usar Metamagia en él sin coste. 1/descanso largo."
      },
    ],

    /* ── Dragonlance: Shadow of the Dragon Queen ── */
    "Magia Lunar [SotDQ]": [
      {
        n: "Fases Lunares",
        nv: 1,
        d: "Tu magia fluye con las fases de la luna. Al terminar un Descanso Largo, eliges la fase activa: Luna Llena (magia de protección y curación), Luna Nueva (magia de ilusión y oscuridad) o Cuarto de Luna (magia de transformación y equilibrio). La fase determina los conjuros de bonus disponibles y modifica ciertos rasgos."
      },
      {
        n: "Conjuros Lunares",
        nv: 1,
        d: "Según la fase activa, tienes conjuros adicionales siempre preparados: Luna Llena — Faerie Fire, Moonbeam, Death Ward, Guardian of Faith, Mass Cure Wounds. Luna Nueva — Dissonant Whispers, Darkness, Bestow Curse, Confusion, Mislead. Cuarto de Luna — Alter Self, Misty Step, Blink, Polymorph, Dawn. Puedes cambiar de fase al terminar un Descanso Corto (1/descanso largo)."
      },
      {
        n: "Llamada de la Luna",
        nv: 6,
        d: "Cuando lanzas un conjuro de tu lista lunar, puedes gastar 1 Punto de Hechicería para potenciarlo según la fase: Luna Llena — si el conjuro cura, cura 1d8 PG adicionales. Luna Nueva — si el conjuro daña, añade 1d6 de daño necrótico. Cuarto de Luna — si el conjuro altera la forma o posición, el objetivo puede repetir la salvación con ventaja o desventaja (a tu elección)."
      },
      {
        n: "Forma Lunar",
        nv: 14,
        d: "Como Acción gastas 3 Puntos para transformarte en una forma luminosa lunar durante 1 minuto: luz brillante 10 pies + tenue 10 pies adicionales; eres resistente a daño radiante y necrótico; una vez por turno al golpear infligas 1d10 de daño radiante adicional."
      },
      {
        n: "Magia Lunar Suprema",
        nv: 18,
        d: "Gastas 5 Puntos para lanzar el conjuro de nivel más alto de cualquiera de tus tres listas lunares sin gastar espacio. Además, una vez por descanso largo puedes cambiar de fase como acción gratuita (sin gastar el uso limitado)."
      },
    ],

    /* ── Tal'Dorei Campaign Setting Reborn ── */
    "Sangre Mágica [TCSR]": [
      {
        n: "Magia de la Sangre",
        nv: 1,
        d: "Puedes usar tu propia vitalidad como fuente de magia. Cuando lanzas un conjuro de Nv.1 o superior, puedes perder PG = 2 × nivel del espacio para recuperar ese mismo número de Puntos de Hechicería. Esta pérdida de PG no puede reducirte a 0."
      },
      {
        n: "Precio de la Sangre",
        nv: 1,
        d: "Cuando lanzas un conjuro que requiera una tirada de ataque y falles, puedes perder PG = nivel del espacio para que el conjuro igualmente surta efecto (como si hubieras acertado, pero sin crítico). 1/descanso corto o largo."
      },
      {
        n: "Vínculo Sanguíneo",
        nv: 6,
        d: "Como Reacción cuando una criatura a 30 pies recibe daño, puedes perder PG = la mitad del daño para que ese daño se reduzca en la misma cantidad. Los PG que pierdes no pueden reducirte a 0."
      },
      {
        n: "Hemorragia Mágica",
        nv: 14,
        d: "Cuando lanzas un conjuro de Nv.1+ que cause daño, puedes gastar 3 Puntos de Hechicería para que el objetivo también pierda PG = mod CAR al inicio de cada uno de sus turnos durante 1 minuto (salvación CON CD conjuro para terminar el efecto)."
      },
      {
        n: "Sacrificio Supremo",
        nv: 18,
        d: "Puedes gastar cualquier cantidad de PG (hasta la mitad de tu máximo) para obtener Puntos de Hechicería = PG gastados ÷ 2 (redondeado abajo). Los Puntos obtenidos así pueden superar tu máximo habitual pero se pierden al terminar el siguiente Descanso Largo. 1/descanso largo."
      },
    ],

  }, // fin subclases
}; // fin CLASE_HECHICERO
