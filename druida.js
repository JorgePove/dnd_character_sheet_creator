/* ══════════════════════════════════════════════════════════════════
   druida.js — Druida: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Guildmasters' Guide to Ravnica (GGtR)
     Tal'Dorei Campaign Setting Reborn (TCSR)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (12 entradas):
     Círculo de la Tierra       [PHB 2014] / [PHB 2024]
     Círculo de la Luna         [PHB 2014] / [PHB 2024]
     Círculo del Sueño          [XGtE]
     Círculo del Pastor         [XGtE]
     Círculo de las Esporas     [GGtR]     (📌 reimpreso en TCE)
     Círculo de las Estrellas   [TCE]
     Círculo de los Incendios   [TCE]
     Círculo de la Ciudad       [TCE]
     Círculo Marchito           [TCSR]
══════════════════════════════════════════════════════════════════ */

const CLASE_DRUIDA = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras y medias, escudos (no metálicos). Garrote, daga, dardo, jabalina, maza, bastón, cimitarra, hoz, honda, lanza. Herramientas de herborista. Salvaciones: INT y SAB. Habilidades: elige 2 entre Arcanos, Manejo de Animales, Medicina, Naturaleza, Percepción, Perspicacia, Religión y Supervivencia."
    },
    {
      n: "Druídico",
      nv: 1,
      d: "Conoces el idioma secreto Druídico, usado para comunicarte con otros druidas. Puedes dejar mensajes ocultos en la naturaleza que solo otros druidas reconocen."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "SAB es tu característica de conjuro (CD = 8 + comp + mod SAB). El Druida es un lanzador completo. Prepara conjuros diariamente: mod SAB + nivel de Druida (mínimo 1) de la lista de Druida. Puede cambiar todos los conjuros preparados al terminar un Descanso Largo. Trucos conocidos: 2 (Nv.1) → 3 (Nv.4) → 4 (Nv.10)."
    },
    {
      n: "Forma Salvaje",
      nv: 2,
      d: "Como Acción (o AA desde Nv.2 con PHB 2024) puedes transformarte en una bestia que hayas visto. CR máximo: 1/4 sin velocidades especiales (Nv.2), 1/2 con velocidad de natación (Nv.4), 1 con velocidad de vuelo (Nv.8). Puedes transformarte 2 veces por Descanso Corto o Largo. La transformación dura hasta que caigas a 0 PG, hasta que lo decidas, o hasta el amanecer. Mientras estás transformado: usas los atributos físicos de la bestia (FUE, DES, CON) pero mantienes INT, SAB y CAR; mantienes tus competencias de habilidades; conservas rasgos de clase que no requieran forma humanoide; no puedes lanzar conjuros (salvo rasgos específicos); si llevas equipo, se funde con la nueva forma."
    },
    {
      n: "Círculo Druídico",
      nv: 2,
      d: "Eliges tu subclase (Círculo Druídico). Otorga rasgos en Nv.2, 6, 10 y 14."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Paso por el Bosque",
      nv: 6,
      d: "Moviéndote por vegetación no mágica no recibes penalización al movimiento ni daño aunque normalmente lo haría (zarzas, espinos, etc.)."
    },
    {
      n: "Sentido del Bosque",
      nv: 6,
      d: "(PHB 2014) Nunca puedes quedar perdido en terreno natural. En terreno natural siempre sabes exactamente dónde estás."
    },
    {
      n: "Lengua de Bestias y Hojas",
      nv: 10,
      d: "Puedes comunicarte con bestias y plantas. Ellas pueden entenderte pero responden de forma limitada. Tienes ventaja en pruebas de CAR con bestias y plantas."
    },
    {
      n: "Forma Salvaje Mejorada",
      nv: 18,
      d: "Puedes usar Forma Salvaje para asumir la forma de una planta o elemental (además de bestias). CR máximo = nivel Druida ÷ 3 (redondeado abajo)."
    },
    {
      n: "Archidruida",
      nv: 20,
      d: "(PHB 2014) Puedes usar Forma Salvaje un número ilimitado de veces. Además, ignoras los requisitos de componentes verbales y gestuales para los conjuros de Druida mientras estés en Forma Salvaje."
    },
    {
      n: "Archidruida [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Al usar Forma Salvaje, ganas PG temporales = 4 × nivel de Druida. Puedes lanzar conjuros de Druida de Nv.1-2 en Forma Salvaje sin recuperar la forma humanoide."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (CÍRCULOS DRUÍDICOS)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Círculo de la Tierra [PHB 2014]": [
      {
        n: "Truco Adicional",
        nv: 2,
        d: "Aprendes un truco de Druida adicional a tu elección."
      },
      {
        n: "Recuperación Natural",
        nv: 2,
        d: "Una vez por Descanso Largo, durante un Descanso Corto puedes recuperar espacios de conjuro gastados. Los espacios recuperados suman un total de niveles ≤ la mitad de tu nivel de Druida (redondeado arriba). No puedes recuperar espacios de Nv.6 o superior."
      },
      {
        n: "Conjuros del Círculo",
        nv: 3,
        d: "Tu vínculo místico con la tierra te concede acceso a conjuros según el terreno elegido al unirte al Círculo. Estos conjuros están siempre preparados y no cuentan contra tu límite. Terrenos disponibles: Ártico, Costa, Desierto, Bosque, Pradera, Montaña, Pantano, Subterráneo (Underdark). Nv.3: 2 conjuros; Nv.5: 2 más; Nv.7: 2 más; Nv.9: 2 más."
      },
      {
        n: "Paso por la Tierra",
        nv: 6,
        d: "Moverse a través de vegetación no mágica no requiere movimiento extra y no recibes daño por terreno natural difícil."
      },
      {
        n: "Mente de la Naturaleza",
        nv: 10,
        d: "No puedes ser Encantado ni Asustado por elementales o feroces. Además, eres inmune a veneno y enfermedad."
      },
      {
        n: "Santuario de la Naturaleza",
        nv: 14,
        d: "Las bestias y plantas deben superar una salvación SAB (CD conjuro) o no podrán atacarte. Las criaturas que fallen son compelidas a elegir otro objetivo."
      },
    ],

    "Círculo de la Luna [PHB 2014]": [
      {
        n: "Formas de Combate",
        nv: 2,
        d: "Puedes usar Forma Salvaje como Acción Adicional (no como Acción completa). Puedes transformarte en bestias con CR hasta 1 desde Nv.2 (en lugar de 1/4). El CR máximo sube = nivel Druida ÷ 3 (redondeado abajo). Puedes transformarte en elementales (Aire, Tierra, Fuego, Agua) desde Nv.10."
      },
      {
        n: "Luna Llena",
        nv: 2,
        d: "Mientras estás en Forma Salvaje, puedes gastar espacios de conjuro para recuperar PG: cada espacio gastado restaura 1d8 PG por nivel del espacio."
      },
      {
        n: "Forma Elemental",
        nv: 10,
        d: "Puedes usar 2 usos de Forma Salvaje para transformarte en un elemental (Elemental de Aire, Tierra, Fuego o Agua) en lugar de una bestia."
      },
      {
        n: "Golpe Místico",
        nv: 6,
        d: "Tus ataques en Forma Salvaje cuentan como mágicos a efectos de superar resistencias e inmunidades."
      },
      {
        n: "Forma Bestial Mejorada",
        nv: 14,
        d: "Puedes lanzar muchos de tus conjuros de Druida mientras estás en Forma Salvaje. Los conjuros que no requieran componentes materiales costosos pueden lanzarse en forma animal (el druida habla/gesticula con la forma bestial)."
      },
    ],

    /* ── PHB 2024 ── */
    "Círculo de la Tierra [PHB 2024]": [
      {
        n: "Truco Adicional",
        nv: 2,
        d: "Aprendes un truco de Druida adicional a tu elección. No cuenta contra tu límite de trucos."
      },
      {
        n: "Recuperación Natural",
        nv: 2,
        d: "1/descanso largo durante un Descanso Corto: recuperas espacios de conjuro cuya suma de niveles ≤ mitad del nivel de Druida (redondeado arriba). Máximo espacio de Nv.5."
      },
      {
        n: "Conjuros del Círculo",
        nv: 3,
        d: "Eliges un terreno (Ártico, Costa, Desierto, Bosque, Pradera, Montaña, Pantano, Subterráneo). Obtienes conjuros específicos de ese terreno siempre preparados que escalan con los niveles de conjuro que puedas lanzar."
      },
      {
        n: "Paso por la Tierra",
        nv: 6,
        d: "Moverte por vegetación no mágica no cuesta movimiento adicional."
      },
      {
        n: "Mente de la Naturaleza",
        nv: 10,
        d: "Inmunidad a veneno y a la condición Envenenado. No puedes ser Encantado por elementales ni bestias."
      },
      {
        n: "Santuario de la Naturaleza",
        nv: 14,
        d: "Bestias y plantas deben superar salvación SAB (CD conjuro) o no pueden atacarte, eligiendo otro objetivo."
      },
    ],

    "Círculo de la Luna [PHB 2024]": [
      {
        n: "Formas de Combate",
        nv: 2,
        d: "Puedes transformarte en Forma Salvaje como AA. CR máximo en Forma Salvaje = nivel Druida ÷ 3 (mínimo CR 1). Las formas bestiales cuentan como mágicas a efectos de resistencias desde el principio."
      },
      {
        n: "Luna Llena",
        nv: 2,
        d: "Mientras estás en Forma Salvaje puedes gastar espacios de conjuro para recuperar PG = 1d8 por nivel del espacio."
      },
      {
        n: "Golpe Místico",
        nv: 6,
        d: "Tus ataques en Forma Salvaje superan resistencias e inmunidades a daño no mágico."
      },
      {
        n: "Forma Elemental",
        nv: 10,
        d: "Puedes usar 2 usos de Forma Salvaje para transformarte en un elemental (Aire, Tierra, Fuego o Agua)."
      },
      {
        n: "Forma Bestial Mejorada",
        nv: 14,
        d: "Puedes lanzar conjuros de Druida que no requieran componentes materiales costosos mientras estás en Forma Salvaje."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Círculo del Sueño [XGtE]": [
      {
        n: "Curación del Sueño",
        nv: 2,
        d: "Cuando una criatura amistosa que puedas ver a 60 pies empieza su turno con 0 PG, puedes usar tu Reacción para gastar un uso de Forma Salvaje y estabilizarla, recuperando PG = 1d6 × (mitad del nivel de Druida) + mod SAB."
      },
      {
        n: "Guardián del Sueño",
        nv: 2,
        d: "Como parte de terminar un Descanso Corto, tú y hasta 5 aliados que descansen contigo recuperáis PG = 1d8 + mod SAB (adicionales al total normal). Si usas este rasgo, gastas un uso de Forma Salvaje."
      },
      {
        n: "Paseo de Sueño Feérico",
        nv: 6,
        d: "Puedes enviar a una criatura dormida de Nv.1+ un mensaje onírico (como el conjuro Mensajero de los Sueños) sin coste ni concentración 1/descanso largo. Además, cuando lanzas el conjuro Mensajero de los Sueños usas SAB como característica."
      },
      {
        n: "Sanador del Bosque",
        nv: 10,
        d: "Cuando una criatura amistosa que puedas ver falla una tirada de salvación, puedes usar tu Reacción y gastar un uso de Forma Salvaje para que repita la tirada. Debe usar el nuevo resultado."
      },
      {
        n: "Visitante de los Sueños",
        nv: 14,
        d: "Puedes entrar físicamente en el espacio onírico de una criatura dormida a 1 milla (como un sueño lúcido). Mientras estás en el sueño: tu cuerpo permanece inconsciente, eres inmune a daño, puedes interactuar con el soñador y lanzar conjuros sobre él sin distancia. Sales del sueño a voluntad o si recibes daño en el mundo real. 1/descanso largo."
      },
    ],

    "Círculo del Pastor [XGtE]": [
      {
        n: "Habla del Pastor",
        nv: 2,
        d: "Hablas con bestias y con espíritus de la naturaleza de forma fluida. Tienes ventaja en pruebas de CAR con bestias y obtienes el idioma Sylvan si no lo conocías."
      },
      {
        n: "Espíritu Invocado",
        nv: 2,
        d: "Cuando conjuras bestias o celestiales con un conjuro de Nv.1+, surge un espíritu en un espacio libre a 30 pies. El espíritu tiene un tipo que afecta a las invocaciones cercanas: Espíritu de Halcón — aliados a 30 pies tienen ventaja en Percepción y en ataques de oportunidad. Espíritu de Unicornio — aliados a 30 pies pueden curar PG adicionales = nivel del conjuro cuando gastan Dados de Golpe o reciben curación. Espíritu de Oso — las criaturas invocadas a 30 pies ganan PG temporales adicionales = nivel de Druida + mod SAB. El espíritu dura hasta que te muevas más de 100 pies de él o hasta que invocas otro."
      },
      {
        n: "Pastor Poderoso",
        nv: 6,
        d: "Las criaturas que invocas o creas con conjuros tienen PG máximos en lugar de tirar dados."
      },
      {
        n: "Guardia del Pastor",
        nv: 10,
        d: "Puedes lanzar Hablar con los Muertos a voluntad sin gastar espacio, pero solo para comunicarte con bestias muertas. Además, tus criaturas invocadas tienen las tiradas de ataque siempre con tu bonificador de competencia (en lugar del de la criatura si fuera menor)."
      },
      {
        n: "Fidelidad Mística",
        nv: 14,
        d: "Las bestias y espíritus invocados por ti tienen ventaja en tiradas de salvación. Cuando una criatura invocada muere a 30 pies, puedes usar tu Reacción para gastar un uso de Forma Salvaje y devolverle 1 PG, reviviendo con el espíritu del pastor guiándola brevemente (actúa 1 turno más antes de morir definitivamente)."
      },
    ],

    /* ── Guildmasters' Guide to Ravnica / Tasha's Cauldron ── */
    "Círculo de las Esporas [GGtR/TCE]": [
      {
        n: "Halo de Esporas",
        nv: 2,
        d: "Reacción: cuando una criatura hostil a 10 pies comienza su turno, le infligas daño necrótico automático que escala: 1d4 (Nv.2), 1d6 (Nv.6), 1d8 (Nv.10), 1d10 (Nv.14). CD = tu CD de conjuro (salvación CON para reducir a la mitad)."
      },
      {
        n: "Forma Simbiótica",
        nv: 2,
        d: "Como AA gastas un uso de Forma Salvaje para activar esporas que te infunden (no te transformas). Durante 10 minutos: ganas PG temporales = 4 × nivel de Druida, tus ataques cuerpo a cuerpo infligen 1d6 de daño necrótico adicional, y no puedes lanzar conjuros (salvo trucos)."
      },
      {
        n: "Fungal Infestation",
        nv: 6,
        d: "Cuando una bestia o humanoide muere a 10 pies, puedes usar tu Reacción para animarlo como un zombie de esporas (PG = 1, actúa en tu iniciativa, puede realizar la acción de Atacar). Dura 1 hora. Solo puedes tener activos un número de zombies = mod SAB (mínimo 1)."
      },
      {
        n: "Esporas Viajeras",
        nv: 10,
        d: "Tu Halo de Esporas alcanza 30 pies. Además, cuando una criatura falla la salvación contra tu Halo, también queda Envenenada hasta el inicio de su siguiente turno."
      },
      {
        n: "Forma Fúngica",
        nv: 14,
        d: "Tu Forma Simbiótica mejora: la duración aumenta a 1 hora, el daño necrótico adicional sube a 2d6, y mientras esté activa eres inmune a Envenenado."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Círculo de las Estrellas [TCE]": [
      {
        n: "Mapa Estelar",
        nv: 2,
        d: "Creas un mapa estelar mágico que sirve como foco de conjuro. Mientras lo llevas: puedes lanzar Orientación (Guidance) y Estrella del Presagio (Guiding Bolt) sin gastar espacio de conjuro (usos = mod SAB; recarga con Descanso Largo). Además, lanzas Adivinación una vez sin espacio por Descanso Largo."
      },
      {
        n: "Forma Estelar",
        nv: 2,
        d: "Cuando usas Forma Salvaje, puedes optar por una Forma Estelar en lugar de transformarte en bestia. En Forma Estelar: tu cuerpo emite luz tenue en 10 pies; ganas un beneficio según la constelación elegida: Arquero — cuando lanzas un truco de Druida, puedes hacer un ataque de conjuro adicional (1d8+mod SAB radiante, alcance 60 pies). Cáliz — cuando lanzas un conjuro curativo de Nv.1+, tú o una criatura a 30 pies recupera PG = 1d8 + mod SAB. Dragón — resistencia a daño de conjuros; concentración no puede ser interrumpida por daño (tirada de salvación con ventaja)."
      },
      {
        n: "Twinkling Constellations",
        nv: 6,
        d: "Los beneficios de tu Forma Estelar mejoran: Arquero — 2d8 en lugar de 1d8. Cáliz — el receptor de la curación gana vuelo 20 pies hasta el inicio de su siguiente turno. Dragón — puedes volar a 20 pies como parte del movimiento cada turno."
      },
      {
        n: "Cosmos Omen",
        nv: 10,
        d: "Al terminar un Descanso Largo, lanzas 1d6. Si es par (Augurio de Plenitud): tú y aliados a 30 pies añadís 1d6 a tiradas de ataque, pruebas de característica y salvaciones una vez cada uno. Si es impar (Augurio de Mengua): cuando una criatura hostil tira para atacar o superar salvación, puedes restarle 1d6 (Reacción). Cada efecto se recupera con Descanso Largo."
      },
      {
        n: "Full of Stars",
        nv: 14,
        d: "Mientras estás en Forma Estelar, eres parcialmente incorpóreo: resistencia al daño contundente, perforante y cortante."
      },
    ],

    "Círculo de los Incendios [TCE]": [
      {
        n: "Conjuros del Círculo",
        nv: 2,
        d: "Conjuros siempre preparados — Nv.3: Manos Ardientes, Ola Tronante. Nv.5: Flecha Ácida de Melf, Escorchar. Nv.7: Bola de Fuego, Planta Vegetal. Nv.9: Muro de Fuego, Plaga de Insectos. Nv.11: Incendiar (Incendiary Cloud), Llama Cremosa."
      },
      {
        n: "Llama Salvaje",
        nv: 2,
        d: "Cuando entras en Forma Salvaje, creas un aura de fuego feérico que dura hasta que salgas. El aura ocupa tu espacio y el de tu nueva forma. Criaturas a 5 pies al inicio de su turno reciben 1d6 de fuego (salvación CON CD conjuro para reducir a la mitad). Las plantas, musgos y madera no mágica se incendian."
      },
      {
        n: "Mejorar Llama Salvaje",
        nv: 6,
        d: "El daño de Llama Salvaje aumenta a 2d6. Además, el fuego feérico ilumina 30 pies de luz brillante y 30 pies más de luz tenue."
      },
      {
        n: "Alma de Fuego",
        nv: 10,
        d: "Inmunidad al daño de fuego. Mientras estás en Forma Salvaje, cualquier criatura que te golpee con ataque cuerpo a cuerpo recibe 1d6 de daño de fuego."
      },
      {
        n: "Renacimiento Ígneo",
        nv: 14,
        d: "Cuando caes a 0 PG en Forma Salvaje, puedes usar tu Reacción para salir de la Forma Salvaje y renacer entre las llamas: vuelves en tu forma normal con PG = 5 × nivel de Druida, y cada criatura a 30 pies recibe 10 de daño de fuego (salvación DEX CD conjuro para reducir a la mitad). 1/descanso largo."
      },
    ],

    "Círculo de la Ciudad [TCE]": [
      {
        n: "Conjuros del Círculo",
        nv: 2,
        d: "Conjuros siempre preparados — Nv.3: Heroísmo, Proyectil Mágico. Nv.5: Invisibilidad, Paso Brumoso. Nv.7: Contrahechizo, Sigilo. Nv.9: Telepatía, Sendero Caminante. Nv.11: Arcane Gate, Visión Verdadera."
      },
      {
        n: "Druida de la Ciudad",
        nv: 2,
        d: "Puedes usar la Forma Salvaje para asumir la forma de una criatura del tipo Bestia que viva en entornos urbanos (ratas, cuervos, palomas, perros callejeros, etc.). Además, cuando lanzas un conjuro mientras estás en Forma Salvaje de ciudad, puedes mantener la concentración aunque recibas daño (tirada de concentración con ventaja)."
      },
      {
        n: "Vista de Alcantarilla",
        nv: 2,
        d: "Como AA puedes ver a través de los ojos de cualquier bestia doméstica o de ciudad que esté a 60 pies y no sea hostil. Puedes percibir así durante 1 minuto. Usos = mod SAB. Recarga con Descanso Largo."
      },
      {
        n: "Naturaleza de la Ciudad",
        nv: 6,
        d: "Tu vínculo con la naturaleza urbana te da ventaja en tiradas de Investigación y Percepción en entornos urbanos. Además, cuando descanses en una ciudad, recuperas Dados de Golpe adicionales = mod SAB."
      },
      {
        n: "Guardián Urbano",
        nv: 10,
        d: "Como Acción puedes manifestar una avatar del espíritu de la ciudad en un radio de 60 pies: durante 1 minuto criaturas hostiles tienen desventaja en ataques contra aliados dentro del área, y aliados tienen ventaja en Sigilo y Juego de Manos. 1/descanso largo."
      },
      {
        n: "Corazón de la Ciudad",
        nv: 14,
        d: "No puedes quedar perdido en ningún asentamiento habitado. Puedes lanzar Leyenda Lore sin espacio una vez por Descanso Largo, pero solo sobre la historia, habitantes o secretos del asentamiento donde te encuentres."
      },
    ],

    /* ── Tal'Dorei Campaign Setting Reborn ── */
    "Círculo Marchito [TCSR]": [
      {
        n: "Conjuros del Círculo",
        nv: 2,
        d: "Conjuros siempre preparados — Nv.3: Rayo de Debilidad, Infestación. Nv.5: Blight, Spike Growth. Nv.7: Marchitar (Wither and Bloom), Compeler Criaturas. Nv.9: Antipatía/Simpatía, Plaga de Insectos. Nv.11: Dedo de la Muerte, Círculo de la Muerte."
      },
      {
        n: "Forma Marchita",
        nv: 2,
        d: "Cuando entras en Forma Salvaje, puedes manifestar una forma marchita en lugar de una bestia normal: tu cuerpo retiene apariencia humanoide pero se vuelve gris y cadavérico. En esta forma: inmunidad a veneno y enfermedad, resistencia al daño necrótico, y tus ataques infligen 1d6 de daño necrótico adicional. Gastas usos de Forma Salvaje normalmente."
      },
      {
        n: "Contacto Marchito",
        nv: 6,
        d: "Cuando tocas a una criatura viva (ataque cuerpo a cuerpo o acción de tocar), puedes drenar su vitalidad: la criatura pierde PG = 3d6 + mod SAB y tú recuperas esa misma cantidad (salvación CON CD conjuro para reducir el daño a la mitad; la curación también se reduce). Usos = mod SAB. Recarga con Descanso Largo."
      },
      {
        n: "Maldición de la Marchitez",
        nv: 10,
        d: "Cuando lanzas un conjuro que cause daño necrótico o de veneno, puedes marcar a uno de los objetivos afectados. La criatura marcada tiene vulnerabilidad al daño necrótico durante 1 minuto (salvación CON CD conjuro al inicio de cada turno para terminar el efecto). 1/descanso largo."
      },
      {
        n: "Naturaleza Muerta",
        nv: 14,
        d: "Tu Forma Marchita ya no requiere usos de Forma Salvaje (puedes activarla libremente). Además, mientras estás en Forma Marchita, cuando reduces a 0 PG a una criatura, recuperas PG = nivel de Druida + mod SAB."
      },
    ],

  }, // fin subclases
}; // fin CLASE_DRUIDA
