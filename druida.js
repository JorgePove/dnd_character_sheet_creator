/* ══════════════════════════════════════════════════════════════════
   druida.js — Druida: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · XGtE · GGtR/TCE · TCE · PHB 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (11 entradas):
     Círculo de la Tierra         [PHB 2014] / [PHB 2024]
     Círculo de la Luna           [PHB 2014] / [PHB 2024]
     Círculo del Sueño            [XGtE]
     Círculo del Pastor           [XGtE]
     Círculo de las Esporas       [GGtR/TCE]
     Círculo de las Estrellas     [TCE] / [PHB 2024]
     Círculo de los Incendios     [TCE]
     Círculo del Mar              [PHB 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_DRUIDA = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d8. Salvaciones: INT y SAB. Armaduras: ligeras y escudos (los druidas no llevan armadura ni escudos de metal por tradición). Armas: simples. Herramientas: kit de herboristería. Habilidades: elige 2 entre Arcanos, Trato con Animales, Perspicacia, Medicina, Naturaleza, Percepción, Religión y Supervivencia."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador completo. SAB es tu característica de conjuros (CD = 8 + comp. + mod. SAB); usas un foco druídico. Trucos: 2 (3 en Nv.4, 4 en Nv.10). Preparas conjuros de la lista de Druida: 4 en Nv.1 (5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22 en Nv.2-20); cambias la lista tras un descanso largo. [2014: preparas SAB + nivel de Druida conjuros (mín. 1)]"
    },
    {
      n: "Druídico (Druidic)",
      nv: 1,
      d: "Conoces Druídico, el idioma secreto de los druidas, y siempre tienes preparado Speak with Animals. Puedes dejar mensajes ocultos: los hablantes de Druídico los detectan; otros necesitan una prueba de INT (Investigación) CD 15 y no pueden descifrarlos sin magia."
    },
    {
      n: "Orden Primigenio (Primal Order)",
      nv: 1,
      d: "Eliges un papel. Mago (Magician): conoces 1 truco de Druida adicional y sumas tu mod. SAB (mínimo +1) a tus pruebas de INT (Arcanos o Naturaleza). Guardián (Warden): competencia con armas marciales y entrenamiento con armadura media. [Sólo 2024]"
    },
    {
      n: "Forma Salvaje (Wild Shape)",
      nv: 2,
      a: "B",
      d: "Como Acción Adicional adoptas la forma de una Bestia que hayas aprendido, durante horas = la mitad de tu nivel de Druida (o hasta que uses Forma Salvaje de nuevo, quedes Incapacitado o mueras; puedes salir como Acción Adicional). Usos: 2 (3 en Nv.6, 4 en Nv.17); recuperas 1 con un descanso corto y todos con uno largo. Formas conocidas: 4 (6 en Nv.4, 8 en Nv.8) con CR máximo 1/4 sin Velocidad de vuelo (1/2 en Nv.4; 1 en Nv.8 con vuelo); cambias una forma tras un descanso largo. Ganas PG temporales = tu nivel de Druida. Mantienes tipo de criatura, PG, INT/SAB/CAR, rasgos de clase, idiomas y dotes; usas las competencias o las de la Bestia (la mayor); no puedes lanzar conjuros pero conservas la concentración; el equipo cae, se fusiona o lo llevas. [2014: es una acción; sin PG temporales; al volver a tu forma recuperas tus PG previos y el exceso de daño pasa a ti; CR 1/4 sin nadar ni volar (1/2 sin volar en Nv.4, 1 en Nv.8); 2 usos por descanso corto o largo; no puedes lanzar conjuros]"
    },
    {
      n: "Compañero Salvaje (Wild Companion)",
      nv: 2,
      a: "A",
      d: "Como acción Mágica gastas un espacio de conjuro o un uso de Forma Salvaje para lanzar Find Familiar sin componentes materiales; el familiar es feérico y desaparece cuando terminas un descanso largo. [2014: rasgo opcional de TCE, gastando un uso de Forma Salvaje]"
    },
    {
      n: "Subclase de Druida (Círculo Druídico)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6, 10 y 14. [2014: Círculo Druídico, se elige en Nv.2 y concede rasgos en Nv.2, 6, 10 y 14]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Resurgimiento Salvaje (Wild Resurgence)",
      nv: 5,
      a: "O",
      d: "Una vez en cada uno de tus turnos, si no te quedan usos de Forma Salvaje, puedes gastar un espacio de conjuro (sin acción) para recuperar un uso. Además puedes gastar un uso de Forma Salvaje (sin acción) para obtener un espacio de nivel 1, pero no puedes volver a hacerlo hasta un descanso largo. [Sólo 2024]"
    },
    {
      n: "Furia Elemental (Elemental Fury)",
      nv: 7,
      d: "Eliges una opción. Lanzamiento Potente: sumas tu mod. SAB al daño de tus trucos de Druida. Golpe Primigenio: una vez por turno, cuando impactas con un ataque con arma o con el ataque de una forma de Bestia en Forma Salvaje, infliges 1d8 de daño de frío, fuego, rayo o trueno adicional (a tu elección). [Sólo 2024]"
    },
    {
      n: "Furia Elemental Mejorada (Improved Elemental Fury)",
      nv: 15,
      d: "Lanzamiento Potente: cuando lanzas un truco de Druida con alcance de 10 pies o más, su alcance aumenta 300 pies. Golpe Primigenio: el daño adicional pasa a 2d8. [Sólo 2024]"
    },
    {
      n: "Conjuros de Bestia (Beast Spells)",
      nv: 18,
      d: "Mientras usas Forma Salvaje puedes lanzar conjuros, salvo los que tengan componentes materiales con coste indicado o que consuman su componente material. [2014: puedes realizar los componentes somáticos y verbales de tus conjuros de Druida en Forma Salvaje, y además Cuerpo Atemporal: envejeces 1 año por cada 10]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Archidruida (Archdruid)",
      nv: 20,
      a: "O",
      d: "Forma Salvaje Perenne: cuando tiras Iniciativa y no te quedan usos de Forma Salvaje, recuperas 1. Mago de la Naturaleza: una vez por descanso largo conviertes usos sin gastar de Forma Salvaje en un espacio de conjuro (sin acción; cada uso aporta 2 niveles). Longevidad: envejeces 1 año por cada 10. [2014: usos ilimitados de Forma Salvaje y puedes ignorar componentes verbales, somáticos y materiales sin coste de tus conjuros de Druida]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Círculo de la Tierra [PHB 2014]": [
      {
        n: "Truco Adicional (Bonus Cantrip)",
        nv: 2,
        d: "Aprendes un truco de Druida adicional (no cuenta para tu límite)."
      },
      {
        n: "Recuperación Natural (Natural Recovery)",
        nv: 2,
        a: "O",
        d: "Durante un descanso corto recuperas espacios de conjuro gastados con nivel combinado ≤ la mitad de tu nivel de Druida (redondeado hacia arriba); ninguno de nivel 6 o superior. Una vez por descanso largo."
      },
      {
        n: "Conjuros del Círculo (Circle Spells)",
        nv: 3,
        d: "Eliges un tipo de terreno; ganas siempre preparados — Ártico: Nv.3 Hold Person, Spike Growth; Nv.5 Sleet Storm, Slow; Nv.7 Freedom of Movement, Ice Storm; Nv.9 Commune with Nature, Cone of Cold. Costa: Mirror Image, Misty Step; Water Breathing, Water Walk; Control Water, Freedom of Movement; Conjure Elemental, Scrying. Desierto: Blur, Silence; Create Food and Water, Protection from Energy; Blight, Hallucinatory Terrain; Insect Plague, Wall of Stone. Bosque: Barkskin, Spider Climb; Call Lightning, Plant Growth; Divination, Freedom of Movement; Commune with Nature, Tree Stride. Pradera: Invisibility, Pass without Trace; Daylight, Haste; Divination, Freedom of Movement; Dream, Insect Plague. Montaña: Spider Climb, Spike Growth; Lightning Bolt, Meld into Stone; Stone Shape, Stoneskin; Passwall, Wall of Stone. Pantano: Darkness, Melf's Acid Arrow; Water Walk, Stinking Cloud; Freedom of Movement, Locate Creature; Insect Plague, Scrying. Underdark: Spider Climb, Web; Gaseous Form, Stinking Cloud; Greater Invisibility, Stone Shape; Cloudkill, Insect Plague."
      },
      {
        n: "Paso por la Tierra (Land's Stride)",
        nv: 6,
        d: "Moverte por terreno difícil no mágico no cuesta movimiento adicional; atraviesas plantas no mágicas sin ralentizarte ni sufrir daño; ventaja en salvaciones contra plantas creadas o manipuladas mágicamente que impidan el movimiento."
      },
      {
        n: "Resguardo de la Naturaleza (Nature's Ward)",
        nv: 10,
        d: "No puedes ser Hechizado ni Asustado por elementales o feéricos, y eres inmune al veneno y a las enfermedades."
      },
      {
        n: "Santuario de la Naturaleza (Nature's Sanctuary)",
        nv: 14,
        d: "Cuando una bestia o planta te ataca, debe hacer una salvación de SAB (tu CD): si falla, debe elegir otro objetivo o el ataque falla; si la supera, es inmune a este efecto 24 horas."
      },
    ],

    "Círculo de la Luna [PHB 2014]": [
      {
        n: "Forma Salvaje de Combate (Combat Wild Shape)",
        nv: 2,
        a: "B",
        d: "Puedes usar Forma Salvaje como Acción Adicional. Mientras estés transformado, puedes gastar un espacio de conjuro como Acción Adicional para recuperar 1d8 PG por nivel del espacio."
      },
      {
        n: "Formas del Círculo (Circle Forms)",
        nv: 2,
        d: "Puedes transformarte en bestias de CR hasta 1 (ignorando la columna de CR máximo de las Formas de Bestia); desde Nv.6 el CR máximo es tu nivel de Druida ÷ 3 (redondeado hacia abajo)."
      },
      {
        n: "Golpe Primigenio (Primal Strike)",
        nv: 6,
        d: "Tus ataques en forma de bestia cuentan como mágicos para superar resistencias e inmunidades a ataques no mágicos."
      },
      {
        n: "Forma Salvaje Elemental (Elemental Wild Shape)",
        nv: 10,
        a: "B",
        d: "Puedes gastar 2 usos de Forma Salvaje a la vez para transformarte en un elemental de aire, tierra, fuego o agua."
      },
      {
        n: "Mil Formas (Thousand Forms)",
        nv: 14,
        d: "Puedes lanzar Alter Self a voluntad."
      },
    ],


    /* ── XGtE ── */
    "Círculo del Sueño [XGtE]": [
      {
        n: "Bálsamo de la Corte de Verano (Balm of the Summer Court)",
        nv: 2,
        a: "B",
        d: "Tienes una reserva de d6 = tu nivel de Druida. Como Acción Adicional eliges a un aliado que veas a 120 pies y gastas hasta la mitad de tu nivel de Druida en dados: tira y suma; el aliado recupera ese total de PG y gana 1 PG temporal por dado gastado. La reserva se recupera con un descanso largo."
      },
      {
        n: "Hogar de Luz de Luna y Sombra (Hearth of Moonlight and Shadow)",
        nv: 6,
        a: "O",
        d: "Durante un descanso corto o largo, tocas un punto y aparece una esfera invisible de 30 pies de radio: los aliados dentro tienen +5 a las pruebas de DES (Sigilo) y SAB (Percepción) y la luz de llamas abiertas no se ve fuera de ella."
      },
      {
        n: "Caminos Ocultos (Hidden Paths)",
        nv: 10,
        a: "BA",
        d: "Como Acción Adicional te teletransportas hasta 60 pies a un espacio libre que veas; o como acción teletransportas a una criatura voluntaria que toques hasta 30 pies. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Caminante en Sueños (Walker in Dreams)",
        nv: 14,
        a: "O",
        d: "Al terminar un descanso corto o largo puedes lanzar sin gastar espacio ni componentes materiales uno de estos: Dream (tú como mensajero), Scrying o Teleportation Circle. Una vez por descanso largo."
      },
    ],

    "Círculo del Pastor [XGtE]": [
      {
        n: "Habla del Bosque (Speech of the Woods)",
        nv: 2,
        d: "Aprendes Silvano; las bestias entienden tu habla y descifras sus sonidos y movimientos."
      },
      {
        n: "Tótem Espiritual (Spirit Totem)",
        nv: 2,
        a: "BR",
        d: "Como Acción Adicional invocas un espíritu incorpóreo en un punto a 60 pies que crea un aura de 30 pies durante 1 minuto (puedes moverlo 60 pies como Acción Adicional). Espíritu del Oso: las criaturas de tu elección en el aura ganan PG temporales = 5 + nivel de Druida y tienen ventaja en pruebas y salvaciones de FUE. Espíritu del Halcón: reacción para dar ventaja a la tirada de ataque de una criatura del aura; ventaja en Percepción. Espíritu del Unicornio: ventaja en pruebas para detectar criaturas; tus conjuros de curación con espacio también curan a las criaturas del aura PG = nivel de Druida. Una vez por descanso corto o largo."
      },
      {
        n: "Invocador Poderoso (Mighty Summoner)",
        nv: 6,
        d: "Las bestias y feéricos que invocas con un conjuro tienen 2 PG adicionales por Dado de Golpe y sus ataques naturales cuentan como mágicos."
      },
      {
        n: "Espíritu Guardián (Guardian Spirit)",
        nv: 10,
        d: "Las bestias y feéricos que invocas recuperan PG = la mitad de tu nivel de Druida al final de su turno si están en el aura de tu Tótem Espiritual."
      },
      {
        n: "Invocaciones Fieles (Faithful Summons)",
        nv: 14,
        a: "O",
        d: "Cuando caes a 0 PG o quedas Incapacitado, ganas el efecto de Conjure Animals de nivel 9: invoca 4 bestias de CR 2 o menos a 20 pies que te protegen sin concentración durante 1 hora. Una vez por descanso largo."
      },
    ],


    /* ── GGtR/TCE ── */
    "Círculo de las Esporas [GGtR/TCE]": [
      {
        n: "Conjuros del Círculo (Circle Spells)",
        nv: 2,
        d: "Aprendes el truco Chill Touch. Siempre preparados (no cuentan para tu límite) — Nv.3: Blindness/Deafness, Gentle Repose. Nv.5: Animate Dead, Gaseous Form. Nv.7: Blight, Confusion. Nv.9: Cloudkill, Contagion."
      },
      {
        n: "Halo de Esporas (Halo of Spores)",
        nv: 2,
        a: "R",
        d: "Cuando una criatura que veas entra a 10 pies de ti o empieza su turno allí, puedes usar tu reacción para infligirle 1d4 de daño necrótico (salvación de CON para evitarlo); 1d6 en Nv.6, 1d8 en Nv.10, 1d10 en Nv.14."
      },
      {
        n: "Entidad Simbiótica (Symbiotic Entity)",
        nv: 2,
        a: "A",
        d: "Como acción gastas un uso de Forma Salvaje para despertar las esporas: ganas 4 PG temporales por nivel de Druida, tiras dos veces el daño de Halo de Esporas y tus ataques cuerpo a cuerpo infligen 1d6 de daño necrótico adicional. Dura 10 minutos o hasta que pierdas los PG temporales."
      },
      {
        n: "Infestación Fúngica (Fungal Infestation)",
        nv: 6,
        a: "R",
        d: "Cuando una bestia o humanoide Pequeño o Mediano muere a 10 pies de ti, puedes usar tu reacción para animarlo como zombi con 1 PG que te obedece (sólo puede Atacar) y dura 1 hora. Usos = mod. SAB por descanso largo."
      },
      {
        n: "Esporas Expansivas (Spreading Spores)",
        nv: 10,
        a: "B",
        d: "Mientras Entidad Simbiótica está activa, como Acción Adicional lanzas esporas a 30 pies que forman un cubo de 10 pies durante 1 minuto; las criaturas que entren o empiecen allí su turno sufren el daño de Halo. No puedes usar la reacción de Halo mientras esté activo."
      },
      {
        n: "Cuerpo Fúngico (Fungal Body)",
        nv: 14,
        d: "No puedes ser Cegado, Ensordecido, Asustado ni Envenenado, y cualquier golpe crítico contra ti cuenta como normal, salvo que estés Incapacitado."
      },
    ],


    /* ── TCE ── */
    "Círculo de las Estrellas [TCE]": [
      {
        n: "Mapa Estelar (Star Map)",
        nv: 2,
        d: "Creas un mapa estelar Diminuto que sirve de foco de conjuros. Mientras lo sostienes conoces Guidance y tienes preparado Guiding Bolt (no cuenta para tu límite), que puedes lanzar sin espacio comp. veces por descanso largo. Si lo pierdes, lo rehaces con un ritual de 1 hora."
      },
      {
        n: "Forma Estelar (Starry Form)",
        nv: 2,
        a: "B",
        d: "Como Acción Adicional gastas un uso de Forma Salvaje para adoptar forma estelar (conservas tus estadísticas): emites luz brillante 10 pies y tenue 10 pies más durante 10 minutos. Eliges constelación: Arquero: como Acción Adicional haces un ataque de conjuro a distancia a 60 pies, 1d8 + mod. SAB radiante. Cáliz: cuando lanzas un conjuro de curación con espacio, tú o una criatura a 30 pies recuperáis 1d8 + mod. SAB PG. Dragón: un 9 o menos en el d20 cuenta como 10 en pruebas de INT y SAB y en salvaciones de CON para concentración."
      },
      {
        n: "Presagio Cósmico (Cosmic Omen)",
        nv: 6,
        a: "R",
        d: "Tras un descanso largo tiras un dado: par = Prosperidad (reacción: sumas 1d6 a una tirada de d20 de una criatura a 30 pies); impar = Infortunio (restas 1d6). Usos = comp. por descanso largo."
      },
      {
        n: "Constelaciones Centelleantes (Twinkling Constellations)",
        nv: 10,
        d: "El daño del Arquero y la curación del Cáliz pasan a 2d8. El Dragón concede Velocidad de vuelo 20 pies (flotando). Puedes cambiar de constelación al inicio de cada uno de tus turnos."
      },
      {
        n: "Lleno de Estrellas (Full of Stars)",
        nv: 14,
        d: "Mientras estás en forma estelar tienes resistencia al daño contundente, perforante y cortante."
      },
    ],

    "Círculo de los Incendios [TCE]": [
      {
        n: "Conjuros del Círculo (Circle Spells)",
        nv: 2,
        d: "Siempre preparados (no cuentan para tu límite) — Nv.2: Burning Hands, Cure Wounds. Nv.3: Flaming Sphere, Scorching Ray. Nv.5: Plant Growth, Revivify. Nv.7: Aura of Life, Fire Shield. Nv.9: Flame Strike, Mass Cure Wounds."
      },
      {
        n: "Invocar Espíritu de Fuego (Summon Wildfire Spirit)",
        nv: 2,
        a: "A",
        d: "Como acción gastas un uso de Forma Salvaje para invocar un espíritu de fuego a 30 pies; las criaturas a 10 pies hacen una salvación de DES (tu CD) o sufren 2d6 de fuego. El espíritu comparte tu iniciativa, usa Esquivar por defecto, obedece órdenes como Acción Adicional y dura 1 hora. Estadísticas: CA 13, PG 5 + 5 × nivel de Druida, Velocidad 30 pies/vuelo 30 pies (flotando), inmune al fuego e inmune a Hechizado, Asustado, Agarrado, Derribado y Apresado; Semilla de Llama (a distancia 60 pies, 1d6 + comp. de fuego) y Teletransporte Ígneo (15 pies; 1d6 + comp. de fuego a las criaturas cercanas)."
      },
      {
        n: "Vínculo Reforzado (Enhanced Bond)",
        nv: 6,
        d: "Cuando lanzas un conjuro de fuego o curación mientras el espíritu está invocado, sumas 1d8 a una tirada de daño o curación. Un conjuro con alcance distinto de Personal puede originarse en ti o en el espíritu."
      },
      {
        n: "Llamas Cauterizantes (Cauterizing Flames)",
        nv: 10,
        a: "R",
        d: "Cuando una criatura muere a 30 pies de ti o del espíritu, aparecen llamas espectrales en su espacio durante 1 minuto. Cuando una criatura entra en ellas, puedes usar tu reacción para curarla o dañarla con fuego 2d10 + mod. SAB. Usos = comp. por descanso largo."
      },
      {
        n: "Renacimiento Ígneo (Blazing Revival)",
        nv: 14,
        a: "O",
        d: "Si caes a 0 PG con el espíritu a 120 pies, puedes hacer que el espíritu pase a 0 PG: recuperas la mitad de tus PG máximos y te levantas si estás Derribado. Una vez por descanso largo."
      },
    ],


    /* ── PHB 2024 ── */
    "Círculo de la Tierra [PHB 2024]": [
      {
        n: "Conjuros del Círculo de la Tierra",
        nv: 3,
        d: "Tras cada descanso largo eliges un tipo de terreno; siempre tienes preparados — Árido: Nv.3 Blur, Burning Hands, Fire Bolt; Nv.5 Fireball; Nv.7 Blight; Nv.9 Wall of Stone. Polar: Fog Cloud, Hold Person, Ray of Frost; Sleet Storm; Ice Storm; Cone of Cold. Templado: Misty Step, Shocking Grasp, Sleep; Lightning Bolt; Freedom of Movement; Tree Stride. Tropical: Acid Splash, Ray of Sickness, Web; Stinking Cloud; Polymorph; Insect Plague."
      },
      {
        n: "Ayuda de la Tierra (Land's Aid)",
        nv: 3,
        a: "A",
        d: "Como acción Mágica gastas un uso de Forma Salvaje y eliges un punto a 60 pies: Esfera de 10 pies de radio; las criaturas de tu elección hacen una salvación de CON (tu CD): sufren 2d6 de daño necrótico (mitad si superan); y una criatura de tu elección en el área recupera 2d6 PG. Daño y curación: 3d6 en Nv.10, 4d6 en Nv.14."
      },
      {
        n: "Recuperación Natural (Natural Recovery)",
        nv: 6,
        a: "O",
        d: "Puedes lanzar uno de tus conjuros de círculo preparados de nivel 1+ sin gastar espacio, una vez por descanso largo. Además, tras un descanso corto recuperas espacios de conjuro con nivel combinado ≤ la mitad de tu nivel de Druida (redondeado hacia arriba), sin nivel 6+; una vez por descanso largo."
      },
      {
        n: "Resguardo de la Naturaleza (Nature's Ward)",
        nv: 10,
        d: "Inmunidad a Envenenado. Resistencia al daño según tu terreno actual: fuego (árido), frío (polar), rayo (templado) o veneno (tropical)."
      },
      {
        n: "Santuario de la Naturaleza (Nature's Sanctuary)",
        nv: 14,
        a: "A",
        d: "Como acción Mágica gastas un uso de Forma Salvaje: creas un Cubo de 15 pies de terreno espectral a 120 pies durante 1 minuto. Tú y tus aliados tenéis cobertura media en él; los aliados ganan tu resistencia de Resguardo de la Naturaleza. Puedes mover el cubo 60 pies como Acción Adicional."
      },
    ],

    "Círculo de la Luna [PHB 2024]": [
      {
        n: "Formas del Círculo (Circle Forms)",
        nv: 3,
        d: "Al usar Forma Salvaje: el CR máximo de la forma = tu nivel de Druida ÷ 3 (redondeado hacia abajo); tu CA es 13 + mod. SAB si supera la de la Bestia; y ganas PG temporales = 3 × tu nivel de Druida."
      },
      {
        n: "Conjuros del Círculo de la Luna",
        nv: 3,
        d: "Siempre preparados — Nv.3: Cure Wounds, Moonbeam, Starry Wisp. Nv.5: Conjure Animals. Nv.7: Fount of Moonlight. Nv.9: Mass Cure Wounds. Puedes lanzar estos conjuros en Forma Salvaje."
      },
      {
        n: "Formas del Círculo Mejoradas (Improved Circle Forms)",
        nv: 6,
        d: "En Forma Salvaje tus ataques pueden infligir daño radiante en lugar del normal (eliges cada impacto) y sumas tu mod. SAB a tus salvaciones de CON."
      },
      {
        n: "Paso Lunar (Moonlight Step)",
        nv: 10,
        a: "B",
        d: "Como Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas y tienes ventaja en tu siguiente tirada de ataque antes del final de ese turno. Usos = mod. SAB (mínimo 1); se recuperan con un descanso largo o gastando un espacio de nivel 2+ (sin acción)."
      },
      {
        n: "Forma Lunar (Lunar Form)",
        nv: 14,
        d: "Una vez por turno, un ataque de tu Forma Salvaje inflige 2d10 de daño radiante adicional. Cuando usas Paso Lunar, puedes teletransportar también a una criatura voluntaria a 10 pies a un espacio libre a 10 pies de tu destino."
      },
    ],

    "Círculo del Mar [PHB 2024]": [
      {
        n: "Conjuros del Círculo del Mar",
        nv: 3,
        d: "Siempre preparados — Nv.3: Fog Cloud, Gust of Wind, Ray of Frost, Thunderwave. Nv.5: Lightning Bolt, Water Breathing. Nv.7: Control Water, Ice Storm. Nv.9: Conjure Elemental, Hold Monster."
      },
      {
        n: "Ira del Mar (Wrath of the Sea)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas un uso de Forma Salvaje para manifestar una Emanación de 5 pies durante 10 minutos. En cada turno, como Acción Adicional, eliges a una criatura que veas en ella: hace una salvación de CON o sufre daño de frío (tiras mod. SAB d6, mínimo 1) y, si es Grande o menor, es empujada 15 pies."
      },
      {
        n: "Afinidad Acuática (Aquatic Affinity)",
        nv: 6,
        d: "La emanación aumenta a 10 pies y ganas Velocidad de nadar = tu Velocidad."
      },
      {
        n: "Nacido de la Tormenta (Stormborn)",
        nv: 10,
        d: "Mientras Ira del Mar está activa, tienes Velocidad de vuelo = tu Velocidad y resistencia al daño de frío, rayo y trueno."
      },
      {
        n: "Don Oceánico (Oceanic Gift)",
        nv: 14,
        a: "O",
        d: "Puedes manifestar la emanación alrededor de una criatura voluntaria a 60 pies en lugar de ti, o alrededor de ambos (gastando 2 usos de Forma Salvaje). La criatura obtiene todos los beneficios y usa tu CD de conjuros y tu mod. SAB."
      },
    ],

    "Círculo de las Estrellas [PHB 2024]": [
      {
        n: "Mapa Estelar (Star Map)",
        nv: 3,
        d: "Creas un mapa estelar Diminuto que sirve de foco. Mientras lo sostienes tienes preparados Guidance y Guiding Bolt, y puedes lanzar Guiding Bolt sin espacio mod. SAB veces (mínimo 1) por descanso largo. Lo rehaces con una ceremonia de 1 hora."
      },
      {
        n: "Forma Estelar (Starry Form)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas un uso de Forma Salvaje para volverte luminoso 10 minutos (luz brillante 10 pies, tenue 10 pies más). Eliges constelación: Arquero: ataque de conjuro a distancia a 60 pies, 1d8 + mod. SAB radiante (al activarla y como Acción Adicional en turnos posteriores). Cáliz: al lanzar un conjuro de curación, tú o una criatura a 30 pies recuperáis 1d8 + mod. SAB PG. Dragón: un 9 o menos en el d20 cuenta como 10 en pruebas de INT y SAB y salvaciones de CON para concentración."
      },
      {
        n: "Presagio Cósmico (Cosmic Omen)",
        nv: 6,
        a: "R",
        d: "Tras un descanso largo tiras un dado: par = Prosperidad (reacción: sumas 1d6 a una tirada de d20 de una criatura cercana); impar = Infortunio (restas 1d6). Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Constelaciones Centelleantes (Twinkling Constellations)",
        nv: 10,
        d: "El daño del Arquero y la curación del Cáliz pasan a 2d8. El Dragón concede Velocidad de vuelo 20 pies (flotando). Puedes cambiar de constelación al inicio de cada turno."
      },
      {
        n: "Lleno de Estrellas (Full of Stars)",
        nv: 14,
        d: "Mientras estás en forma estelar tienes resistencia al daño contundente, perforante y cortante."
      },
    ],
  },
};
