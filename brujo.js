/* ═══════════════════════════════════════════════════════
   brujo.js — Brujo: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_BRUJO = {
  rasgos: [
    { n:"Patrón Ultraterreno", nv:1, d:"Elige tu subclase (Patrón). Define la fuente de tu poder y otorga rasgos únicos." },
    { n:"Magia del Patrón", nv:1, d:"Conjuros adicionales siempre preparados según tu patrón." },
    { n:"Conjuración de Pacto", nv:1, d:"Lanzador de Pacto (CAR). Pocos espacios de conjuro (Nv.1→5) pero se recuperan con descanso corto." },
    { n:"Invocaciones Místicas", nv:2, d:"Aprende 2 Invocaciones (poderes especiales permanentes). Más en Nv.5, 7, 9, 12, 15, 18." },
    { n:"Favor del Pacto", nv:3, d:"Elige tu tipo de Pacto: Cadena (familiar poderoso), Hoja (arma mágica vinculada) o Grimorio (libro de conjuros extra)." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Conocimiento Místico", nv:11, d:"Aprendes un conjuro de Nv.6 de cualquier lista; lanzas 1 vez/descanso largo sin espacio." },
    { n:"Arcanum Místico", nv:11, d:"1 conjuro de Nv.6 sin espacio 1/descanso largo (→Nv.7 en Nv.13, →Nv.8 en Nv.15, →Nv.9 en Nv.17)." },
    { n:"Maestro Místico", nv:20, d:"4 espacios de conjuro de Nv.1-5 recuperables con 1 minuto de súplica a tu patrón (1/descanso largo)." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "El Archifey [PHB 2014]": [
      { n:"Presencia Feérica", nv:1, d:"Acción: criaturas a 10 pies quedan Encantadas o Asustadas (SAB CD) hasta el final de tu siguiente turno (1/descanso corto)." },
      { n:"Escape Brumoso", nv:6, d:"Reacción al recibir daño: te vuelves invisible y teletransportas 60 pies hasta tu siguiente turno." },
      { n:"Beguiling Defenses", nv:10, d:"Inmune a ser Encantado; cuando alguien intenta encantarte, puedes reflejarlo hacia él (SAB CD)." },
      { n:"Magia del Caos Oscuro", nv:14, d:"Al ser golpeado, puedes teletransportar al atacante hasta 60 pies a un espacio vacío (CAR CD)." },
    ],
    "El Gran Antiguo [PHB 2014]": [
      { n:"Mente Despierta", nv:1, d:"Telepatía a 30 pies con cualquier criatura que conozca un idioma." },
      { n:"Protección Entrópica", nv:6, d:"Cuando una criatura te ataca con ventaja, puedes cancelar la ventaja (1/turno)." },
      { n:"Escudo Pensante", nv:10, d:"Si alguien lee tus pensamientos o hace telepátia, puede quedar Aturdido 1 round (INT CD)." },
      { n:"Crear Thrall", nv:14, d:"Tocas a una criatura Incapacitada: queda bajo tu control telepático indefinidamente (no se aplica a inteligentes poderosos)." },
    ],
    "El Infernal [PHB 2014]": [
      { n:"Bendición del Oscuro", nv:1, d:"Al reducir a 0 PG a una criatura, ganas PG temporales = CAR + nivel." },
      { n:"Fortuna del Oscuro", nv:6, d:"Cuando hagas una tirada de ataque o salvación, puedes tirar 1d10 y añadirlo (1/descanso corto)." },
      { n:"Resiliencia Infernal", nv:10, d:"Resistencia a un tipo de daño elegido al inicio de cada descanso largo." },
      { n:"Hechizo del Hades", nv:14, d:"Al lanzar un conjuro que fuerce salvaciones, puedes añadir 1d10 a la CD una vez (1/descanso largo)." },
    ],

    /* ── PHB 2024 ── */
    "El Archifey [PHB 2024]": [
      { n:"Presencia Feérica", nv:1, d:"Acción: criaturas en cubo de 10 pies Encantadas o Asustadas (SAB CD) hasta el final de tu siguiente turno. 1/descanso corto." },
      { n:"Escape Brumoso", nv:6, d:"Reacción al recibir daño: invisible + teletransporte 60 pies hasta tu siguiente turno." },
      { n:"Beguiling Defenses", nv:10, d:"Inmune a Encantado; reflejas intentos de encantamiento hacia el atacante." },
      { n:"Magia del Caos Oscuro", nv:14, d:"Al ser golpeado, teletransportas al atacante hasta 60 pies (CAR CD)." },
    ],
    "El Gran Antiguo [PHB 2024]": [
      { n:"Mente Despierta", nv:1, d:"Telepatía 30 pies con cualquier criatura que tenga idioma." },
      { n:"Protección Entrópica", nv:6, d:"Cancelas ventaja en ataques contra ti (1/turno)." },
      { n:"Escudo Pensante", nv:10, d:"Criaturas que lean tus pensamientos pueden quedar Aturdidas (INT CD)." },
      { n:"Crear Thrall", nv:14, d:"Incapacitada: control telepático indefinido." },
    ],
    "El Infernal [PHB 2024]": [
      { n:"Bendición del Oscuro", nv:1, d:"Al reducir a 0 PG a una criatura, ganas PG temporales = CAR + nivel." },
      { n:"Fortuna del Oscuro", nv:6, d:"Añades 1d10 a tirada de ataque o salvación (1/descanso corto)." },
      { n:"Resiliencia Infernal", nv:10, d:"Resistencia a 1 tipo de daño elegido por descanso largo." },
      { n:"Hechizo del Hades", nv:14, d:"+1d10 a la CD de tu conjuro una vez (1/descanso largo)." },
    ],
    "El Genio [PHB 2024]": [
      { n:"Tipo de Genio", nv:1, d:"Elige: Dao (tierra/físico), Djinn (aire/trueno), Efreet (fuego), Marid (agua/frío). Define tus conjuros y resistencia." },
      { n:"Vasija del Genio", nv:1, d:"Posees una vasija mágica; puedes entrar en ella para descansar (cabe 1 + CAR criaturas)." },
      { n:"Magia del Genio", nv:1, d:"Conjuros de deseo y del tipo de genio siempre preparados." },
      { n:"Expansión de la Vasija", nv:6, d:"Cuando lanzas un conjuro dentro de la vasija, puedes añadir efectos del tipo de tu genio." },
      { n:"Límites Limitados", nv:10, d:"Tus conjuros de convocación ignoran las restricciones de plano de origen." },
      { n:"Deseo", nv:14, d:"1/1d4 descansos largos: lanzas Deseo sin componentes materiales costosos." },
    ],

    /* ── XGE ── */
    "El Celestial [XGE]": [
      { n:"Lista Expandida del Celestial", nv:1, d:"Conjuros de curación y luz siempre preparados (Palabra de Curación, Llama Sagrada, etc.)." },
      { n:"Llama Curativa", nv:1, d:"Pool de curación = nivel + CAR. Puedes gastarla para curar a 1 criatura a 60 pies con Acción Adicional." },
      { n:"Presencia Radiante", nv:6, d:"Al lanzar un conjuro de daño de fuego o radiante, añades CAR al daño de 1 criatura afectada." },
      { n:"Forma Celestial", nv:14, d:"Como Acción, asumes forma angélica: curación al inicio de turno, vuelo 30 pies, inmunidad a Asustado y Encantado (1 minuto, 1/descanso largo)." },
    ],
    "El Sin Nombre [XGE]": [
      { n:"Expansión Sin Nombre", nv:1, d:"Conjuros de horror y locura siempre preparados." },
      { n:"Locura Despertada", nv:1, d:"Cuando reduces a 0 PG a una criatura con un conjuro, criaturas a 30 pies hacen SAB o quedan Asustadas 1 round." },
      { n:"Pensamiento Retorcido", nv:6, d:"Cuando una criatura te fuerza a una salvación de INT, SAB o CAR, puedes usar Reacción para imponer desventaja en su tirada de ataque siguiente." },
      { n:"Presencia Enloquecedora", nv:10, d:"Cuando un objetivo falla una salvación contra tus conjuros, puede quedar Aturdido 1 round (INT CD)." },
      { n:"Magia Retorcida", nv:14, d:"1/descanso largo: cuando un objetivo supera tu salvación, puedes hacer que la supere por poco (toma la mitad del daño de todos modos)." },
    ],

    /* ── TCE ── */
    "El Genio [TCE]": [
      { n:"Tipo de Genio", nv:1, d:"Elige: Dao (físico), Djinn (trueno/rayo), Efreet (fuego), Marid (frío). Define resistencia y conjuros." },
      { n:"Vasija del Genio", nv:1, d:"Vasija mágica personal; puedes entrar en ella para descansar." },
      { n:"Expansión de la Vasija", nv:6, d:"Dentro de la vasija, tus conjuros llevan el tipo elemental de tu genio." },
      { n:"Alma del Genio", nv:10, d:"Tus convocaciones ignorán restricciones planares." },
      { n:"Deseo", nv:14, d:"1/1d4 descansos: lanzas Deseo sin materiales costosos." },
    ],
    "El Fathomless [TCE]": [
      { n:"Tentáculo del Abismo", nv:1, d:"Como Acción Adicional, invocas un tentáculo espectral de 10 pies: 1d8 frío al golpear, y puede dificultar movimiento (FUE CD). Dura 1 minuto (1/descanso corto)." },
      { n:"Dones del Mar", nv:1, d:"Velocidad de natación 40 pies; puedes respirar bajo el agua." },
      { n:"Escudo del Mar", nv:6, d:"Cuando tú o un aliado a 30 pies recibís daño, puedes usar Reacción y el tentáculo reduce ese daño en 1d8 + CAR." },
      { n:"Paso de los Mares", nv:10, d:"Lanzas Caminar sobre el Agua a voluntad; tú y hasta 5 aliados podéis respirar y moveros bajo el agua." },
      { n:"Abrazo del Océano", nv:14, d:"Cuando el tentáculo golpea a un objetivo, puedes sumergirlo: queda Aferrado y bajo el efecto de ahogamiento hasta escapar (FUE CD)." },
    ],

    /* ── EGW ── */
    "El Anfitrión Sin Cuerpo [EGW]": [
      { n:"Susurros del Vacío", nv:1, d:"Conjuros de vacío y mente siempre preparados; +1d6 psíquico al primer ataque de cada turno." },
      { n:"Forma del Vacío", nv:6, d:"Como Acción Adicional, te vuelves semietéreo: resistencia a daño físico, invisible, atraviesas objetos. Dura hasta el final de tu turno." },
      { n:"Escudo Psíquico", nv:10, d:"Inmune a daño psíquico; cuando un objetivo intenta leerte la mente, puede quedar Aturdido." },
      { n:"Devorar el Intelecto", nv:14, d:"Al reducir a 0 PG a un objetivo inteligente, absorbes parte de su conocimiento: ganas competencia temporal en 2 habilidades de INT o SAB (1d4 días)." },
    ],

    /* ── TDCSR ── */
    "El Ojo de la Luna [TDCSR]": [
      { n:"Vista de la Luna", nv:1, d:"Visión en oscuridad 120 pies incluyendo oscuridad mágica; conjuros lunares adicionales siempre preparados." },
      { n:"Bendición Lunar", nv:1, d:"Al reducir a 0 PG a una criatura, puedes curar a un aliado visible PG = CAR (1/turno)." },
      { n:"Forma Lunar", nv:6, d:"Como Acción Adicional, manifiestas energía lunar: resistencia a necrótico y radiante; tus conjuros de daño añaden 1d6 del tipo correspondiente." },
      { n:"Fases de la Luna", nv:10, d:"Tus conjuros pueden alternar entre tipos de daño radiante y necrótico sin coste adicional; añades CAR al daño en ambos casos." },
      { n:"Hija de la Luna", nv:14, d:"1/descanso largo: lanzas Viaje Astral sin componentes materiales; puedes llevar contigo a hasta CAR aliados voluntarios." },
    ],
    "La Reina Vampira [TDCSR]": [
      { n:"Sed de Sangre", nv:1, d:"Al golpear con un ataque cuerpo a cuerpo, puedes drenar vida: el objetivo pierde 1d6 PG adicionales y tú los recuperas (1/turno)." },
      { n:"Resistencia No-muerta", nv:1, d:"Resistencia al daño necrótico; no puedes ser Asustado por no-muertos." },
      { n:"Forma del Murciélago", nv:6, d:"Como Acción Adicional, te transformas en murciélago: vuelo 30 pies, invisibilidad en oscuridad, dura 1 minuto (1/descanso corto)." },
      { n:"Abrazo del No-muerto", nv:10, d:"Cuando Drenas vida, puedes también inmovilizar al objetivo: queda Paralizado hasta el final de su siguiente turno (CON CD)." },
      { n:"Señora de la Noche", nv:14, d:"Inmune al daño necrótico; cuando matas a una criatura, lanzas Animar Muertos sin espacio sobre ella automáticamente." },
    ],
  }
};
