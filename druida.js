/* ═══════════════════════════════════════════════════════
   druida.js — Druida: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_DRUIDA = {
  rasgos: [
    { n:"Conjuración", nv:1, d:"Lanzador completo (SAB). Lista de Druida." },
    { n:"Lenguaje Druídico", nv:1, d:"Conoces el lenguaje secreto de los druidas y puedes dejar mensajes ocultos en la naturaleza." },
    { n:"Forma Salvaje", nv:2, d:"Transfórmate en bestia 2 veces/descanso corto. CR máximo escala con nivel." },
    { n:"Círculo Druídico", nv:3, d:"Elige tu subclase (Círculo)." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Paso por la Tierra", nv:6, d:"El terreno difícil de origen natural no te afecta ni ralentiza." },
    { n:"Cuerpo de Naturaleza", nv:18, d:"En Forma Salvaje, resistes al daño contundente, perforante y cortante no mágico." },
    { n:"Archidruida", nv:20, d:"Puedes usar Forma Salvaje un número ilimitado de veces." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Círculo de la Luna [PHB 2014]": [
      { n:"Formas de Combate", nv:2, d:"Forma Salvaje incluye bestias de CR hasta nivel/3 (mínimo CR 1). Incluye criaturas con natación/escalada." },
      { n:"Golpes de Bestia", nv:6, d:"Tus ataques en Forma Salvaje se consideran mágicos a efectos de resistencias." },
      { n:"Forma Elemental", nv:10, d:"Gasta 2 usos de Forma Salvaje para transformarte en un elemental de Agua, Tierra, Fuego o Aire." },
      { n:"Bestia Mítica", nv:14, d:"En Forma Salvaje puedes añadir INT, SAB o CAR a un ataque cuerpo a cuerpo." },
    ],
    "Círculo de la Tierra [PHB 2014]": [
      { n:"Truco Adicional", nv:2, d:"Aprende 1 truco de Druida adicional." },
      { n:"Recuperación Natural", nv:2, d:"1/descanso largo, tras un descanso corto recuperas espacios de conjuro de nivel total ≤ mitad nivel." },
      { n:"Conjuros de Círculo", nv:3, d:"Conjuros adicionales siempre preparados según terreno elegido (Ártico, Costa, Desierto, Bosque, Llanura, Montaña, Pantano, Inframundo)." },
      { n:"Paso por la Tierra", nv:6, d:"El terreno difícil natural no te afecta; evitas trampas de origen natural o mágico." },
      { n:"Mente Esquiva", nv:10, d:"Ventaja en tiradas de salvación de CON para mantener concentración." },
      { n:"Santuario de la Naturaleza", nv:14, d:"Los animales salvajes y las plantas no te atacan salvo compulsión mágica." },
    ],

    /* ── PHB 2024 ── */
    "Círculo de la Luna [PHB 2024]": [
      { n:"Formas de Combate", nv:2, d:"Forma Salvaje incluye bestias de CR hasta nivel/3 (mínimo CR 1). Vuelo permitido antes." },
      { n:"Golpes de Bestia", nv:6, d:"Tus ataques en Forma Salvaje se consideran mágicos." },
      { n:"Forma Elemental", nv:10, d:"Transformación en elemental sin gastar usos adicionales de Forma Salvaje." },
      { n:"Bestia Mítica", nv:14, d:"Forma Salvaje gana una característica de cada bestia que hayas sido anteriormente en la sesión." },
    ],
    "Círculo de la Tierra [PHB 2024]": [
      { n:"Truco Adicional", nv:2, d:"Aprende 1 truco de Druida adicional." },
      { n:"Recuperación Natural", nv:2, d:"1/descanso largo, recupera espacios de conjuro de nivel total ≤ mitad nivel." },
      { n:"Conjuros de Círculo", nv:3, d:"Conjuros adicionales según terreno elegido (Ártico, Costa, Desierto, Bosque, Llanura, Montaña, Pantano, Inframundo)." },
      { n:"Deambulante de la Tierra", nv:6, d:"El terreno difícil natural no te cuesta movimiento adicional." },
      { n:"Magia Inagotable", nv:10, d:"Cuando lanzas un conjuro de Círculo, recuperas 1 uso de Forma Salvaje." },
      { n:"Guardián de la Naturaleza", nv:14, d:"Cuando uses Forma Salvaje en área de tu terreno, puedes afectar a criaturas hostiles a 30 pies." },
    ],
    "Círculo del Mar [PHB 2024]": [
      { n:"Conjuros del Mar", nv:3, d:"Nebulina, Paso del Trueno, Conjurar Relámpagos, Control del Tiempo, Marea Alta... siempre preparados." },
      { n:"Furia de la Tormenta", nv:3, d:"Reacción al ser golpeado: el atacante sufre 1d6 de rayo (DEX para reducir a la mitad). Escala a 2d6 en Nv.10." },
      { n:"Desplazamiento del Océano", nv:6, d:"Como Acción Adicional, teletransportas a un objetivo a 60 pies dentro del agua o a una corriente." },
      { n:"Forma Oceánica", nv:10, d:"Gasta 1 uso de Forma Salvaje: te transformas en un Elementar de Agua por 10 minutos." },
      { n:"Marejada", nv:14, d:"Una vez por turno, cuando golpeas en Forma Oceánica, empujas al objetivo 15 pies y lo tumbas." },
    ],

    /* ── XGE ── */
    "Círculo de los Sueños [XGE]": [
      { n:"Bálsamo del Tribunal de Verano", nv:2, d:"Pool de curación = nivel. Como Acción Adicional, gasta para curar a 1 criatura a 5 pies PG + Dado de Vida." },
      { n:"Paso de los Sueños", nv:6, d:"Teletransportación de 60 pies hacia zona de luz brillante o luz de luna (1/descanso corto)." },
      { n:"Bálsamo Durmiente", nv:10, d:"Al usar Bálsamo, el objetivo también gana ventaja en la próxima tirada que haga." },
      { n:"Tierra de los Sueños", nv:14, d:"Lanzas Sueño sin espacio de conjuro (1/descanso largo); en el sueño puedes comunicarte telepáticamente." },
    ],
    "Círculo del Pastor [XGE]": [
      { n:"Lenguaje del Espíritu", nv:2, d:"Hablas con bestias; competencia doble en Trato con Animales; aprendes Hablar con Animales (siempre activo)." },
      { n:"Tótem del Espíritu", nv:2, d:"Como Acción Adicional, invocas un tótem espiritual visible (Halcón, Unicornio o Oso). Beneficia a criaturas cercanas. 1 minuto (1/descanso corto)." },
      { n:"Invocación Poderosa", nv:6, d:"Las criaturas invocadas por tus conjuros obtienen PG adicionales = nivel y +bono competencia a daño." },
      { n:"Guardián del Rebaño", nv:10, d:"Tu Tótem del Espíritu puede reanimar criaturas invocadas que caigan a 0 PG (1 vez/tótem)." },
      { n:"Santuario Místico", nv:14, d:"Las criaturas invocadas dentro del aura del tótem son inmunes al encantamiento." },
    ],

    /* ── TCE ── */
    "Círculo de las Esporas [TCE]": [
      { n:"Halo de Esporas", nv:2, d:"Reacción cuando una criatura a 10 pies falla mover o atacar: recibe 1d4 de daño necrótico (escala)." },
      { n:"Infusión de Esporas", nv:2, d:"Gastas usos de Forma Salvaje: te conviertes en zombie simbiótico con PG temporales y ataques alterados." },
      { n:"Fungal Infestation", nv:6, d:"Cuando un Humanoide o Bestia muere a 10 pies, puedes animarlo como zombi fúngico (SAB/descanso largo)." },
      { n:"Proliferación de Esporas", nv:10, d:"Al usar Halo de Esporas o Infusión, puedes afectar a criaturas adicionales." },
      { n:"Forma Fúngica", nv:14, d:"En Forma Salvaje puedes adoptar la Forma de Zombie Esporal con resistencias adicionales." },
    ],
    "Círculo de las Estrellas [TCE]": [
      { n:"Mapa de Estrellas", nv:2, d:"Creas un Mapa Estelar (enfoque); mientras lo sostienes: truco Guía, 1 conjuro adicional y ventaja en Arcana." },
      { n:"Forma Estelar", nv:2, d:"Gasta 1 uso de Forma Salvaje: no te transformas, pero tu cuerpo emite constelaciones. Elige modo: Arquero, Cáliz o Dragón." },
      { n:"Alma Cósmica", nv:6, d:"Tu Forma Estelar puede curar a un aliado visible como Acción Adicional (dado de curación = dado de Artes Marciales)." },
      { n:"Guía del Cosmos", nv:10, d:"Mientras sostienes el Mapa Estelar, lanzas Augur sin espacio (2/descanso largo)." },
      { n:"Forma Estelar Completa", nv:14, d:"Al usar Forma Estelar, activas automáticamente los tres modos simultáneamente." },
    ],

    /* ── TDCSR ── */
    "Círculo de la Tundra [TDCSR]": [
      { n:"Conjuros de Tundra", nv:2, d:"Conjuros siempre preparados según nivel: Rociada Helada, Ráfaga de Nieve, Tormenta de Granizo, Piel de Piedra, Cono de Frío..." },
      { n:"Corazón de Permafrost", nv:2, d:"En Forma Salvaje ganas resistencia al frío y puedes crear terreno helado (terreno difícil) a tu alrededor." },
      { n:"Rugido del Glaciar", nv:6, d:"Cuando entras en Forma Salvaje, criaturas a 30 pies reciben 2d6 de daño frío (CON para reducir a la mitad)." },
      { n:"Abrazo Glacial", nv:10, d:"Lanzas Esfera Congelante de Otiluke sin espacio de conjuro 1 vez/descanso largo." },
      { n:"Tundra Eterna", nv:14, d:"Resistencia permanente al frío; inmunidad a la condición Paralizado." },
    ],
    "Círculo de la Putrefacción [TDCSR]": [
      { n:"Conjuros de Putrefacción", nv:2, d:"Conjuros adicionales: Rayo de Enfermedad, Nube Apestosa, Toque de Animación, Contagio, Plaga de Insectos..." },
      { n:"Infección de Esporas", nv:2, d:"Forma Salvaje alternativa: en lugar de transformarte, te infestas de esporas. Ganas PG temporales y tus ataques infligen daño necrótico adicional." },
      { n:"Miasma Tóxico", nv:6, d:"Criaturas que fallen salvaciones contra tus conjuros de veneno o necrótico también quedan Envenenadas." },
      { n:"Proliferación de la Putrefacción", nv:10, d:"Al matar a una criatura, puedes usar Reacción para hacer que explote: 2d8 necrótico en 5 pies." },
      { n:"Forma de Plaga", nv:14, d:"En Forma Salvaje de esporas, eres inmune a veneno y necrótico; criaturas que te toquen reciben 1d6 necrótico." },
    ],
  }
};
