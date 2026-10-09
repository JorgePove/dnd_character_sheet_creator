/* ══════════════════════════════════════════════════════════════════
   explorador.js — Explorador: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · XGtE · TCE · FToD · PHB 2024 · HoF 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (13 entradas):
     Cazador                      [PHB 2014] / [PHB 2024]
     Amo de Bestias               [PHB 2014] / [PHB 2024]
     Acechador Tenebroso          [XGtE] / [PHB 2024]
     Caminante del Horizonte      [XGtE]
     Cazador de Monstruos         [XGtE]
     Viajero Feérico              [TCE] / [PHB 2024]
     Guardián del Enjambre        [TCE]
     Guardián del Drake           [FToD]
     Caminante del Invierno       [HoF 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_EXPLORADOR = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d10. Salvaciones: FUE y DES. Armaduras: ligeras, medias y escudos. Armas: simples y marciales. Habilidades: elige 3 entre Trato con Animales, Atletismo, Perspicacia, Investigación, Naturaleza, Percepción, Sigilo y Supervivencia. [2014: elige 3 entre Trato con Animales, Atletismo, Perspicacia, Investigación, Naturaleza, Percepción, Sigilo, Supervivencia; lista equivalente]"
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador a medias. SAB es tu característica de conjuros (CD = 8 + comp. + mod. SAB); usas un foco druídico. No conoces trucos. Preparas 2 conjuros de Explorador en Nv.1 (3, 4, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15 en Nv.2-20); cambias uno al subir de nivel. [2014: empiezas a lanzar en Nv.2 y conoces conjuros en lugar de prepararlos]"
    },
    {
      n: "Enemigo Predilecto (Favored Enemy)",
      nv: 1,
      a: "O",
      d: "Siempre tienes preparado Hunter's Mark y puedes lanzarlo sin gastar espacio 2 veces (3 en Nv.5, 4 en Nv.9, 5 en Nv.13, 6 en Nv.17); recuperas todos los usos con un descanso largo. [2014: eliges un tipo de criatura enemiga: ventaja en pruebas de Supervivencia para rastrearla y de INT para recordar información sobre ella; un idioma; más tipos en Nv.6 y 14]"
    },
    {
      n: "Maestría con Armas (Weapon Mastery)",
      nv: 1,
      d: "Puedes usar la propiedad de maestría de 2 tipos de armas con las que tengas competencia; tras un descanso largo puedes cambiarlas. [Sólo 2024]"
    },
    {
      n: "Explorador Natural (Natural Explorer)",
      nv: 1,
      d: "[Sólo 2014] Eliges un tipo de terreno predilecto (ártico, costa, desierto, bosque, pradera, montaña, pantano, Underdark): el doble de competencia en pruebas de INT y SAB relacionadas con él, no te pierdes, no te ralentiza el terreno difícil, alerta ante peligros, forrajeas el doble y rastreas con precisión. Más terrenos en Nv.6 y 10. [2024: sustituido por Explorador Diestro]"
    },
    {
      n: "Explorador Diestro (Deft Explorer)",
      nv: 2,
      d: "Ganas Pericia en una habilidad en la que seas competente y conoces 2 idiomas a tu elección. [Sólo 2024]"
    },
    {
      n: "Estilo de Combate",
      nv: 2,
      d: "Ganas una dote de Estilo de Combate de tu elección (o la opción Guerrero Druídico: 2 trucos de Druida que cuentan como de Explorador, con SAB). Puedes cambiarla al subir de nivel de Explorador. [2014: eliges un Estilo de la lista del Explorador]"
    },
    {
      n: "Subclase de Explorador (Arquetipo / Conclave)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 7, 11 y 15. [2014: Arquetipo de Explorador]"
    },
    {
      n: "Consciencia Primigenia (Primeval Awareness)",
      nv: 3,
      d: "[Sólo 2014] Gastando un espacio de conjuro y 1 minuto por nivel del espacio, percibes la presencia de ciertas criaturas a 1 milla (6 millas en su terreno predilecto). [2014: rasgo de Nv.3]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Ataque Extra",
      nv: 5,
      a: "A",
      d: "Cuando realizas la acción de Atacar en tu turno puedes atacar dos veces en lugar de una."
    },
    {
      n: "Vagabundo (Roving)",
      nv: 6,
      d: "Tu Velocidad aumenta 10 pies mientras no lleves armadura pesada, y ganas Velocidad de trepar y de nadar = tu Velocidad. [Sólo 2024; en 2014 Nv.6 mejora Enemigo Predilecto y Explorador Natural]"
    },
    {
      n: "Paso por la Tierra (Land's Stride)",
      nv: 8,
      d: "[Sólo 2014] Moverte por terreno difícil no mágico no cuesta movimiento adicional; atraviesas plantas no mágicas sin ralentizarte ni sufrir daño; ventaja en salvaciones contra plantas mágicas que impidan el movimiento."
    },
    {
      n: "Pericia (Expertise)",
      nv: 9,
      d: "Ganas Pericia en 2 habilidades en las que seas competente. [Sólo 2024]"
    },
    {
      n: "Incansable (Tireless)",
      nv: 10,
      a: "A",
      d: "Como acción Mágica ganas 1d8 + mod. SAB PG temporales (mínimo 1). Usos = mod. SAB (mínimo 1) por descanso largo. Además, al terminar un descanso corto reduces tu agotamiento en 1 nivel. [Sólo 2024; en 2014 Nv.10 da Esconderse a Plena Vista: camuflaje de 1 minuto para mimetizarte con el terreno]"
    },
    {
      n: "Cazador Implacable (Relentless Hunter)",
      nv: 13,
      d: "Recibir daño no rompe tu concentración en Hunter's Mark. [Sólo 2024]"
    },
    {
      n: "Velo de la Naturaleza (Nature's Veil)",
      nv: 14,
      a: "B",
      d: "Como Acción Adicional quedas Invisible hasta el final de tu siguiente turno. Usos = mod. SAB (mínimo 1) por descanso largo. [2014: Desvanecerse: puedes Esconderte como Acción Adicional y no puedes ser rastreado por medios no mágicos]"
    },
    {
      n: "Cazador Preciso (Precise Hunter)",
      nv: 17,
      d: "Tienes ventaja en las tiradas de ataque contra criaturas marcadas por tu Hunter's Mark. [Sólo 2024]"
    },
    {
      n: "Sentidos Feroces (Feral Senses)",
      nv: 18,
      d: "Ganas Vista ciega a 30 pies. [2014: sin ataque a ciegas: no tienes desventaja al atacar a criaturas que no veas, si no estás Cegado, y sabes dónde están las criaturas invisibles a 30 pies]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Cazador de Enemigos (Foe Slayer)",
      nv: 20,
      d: "El dado de daño de Hunter's Mark pasa de d6 a d10. [2014: una vez por turno sumas tu mod. SAB a la tirada de ataque o de daño contra uno de tus enemigos predilectos]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Cazador [PHB 2014]": [
      {
        n: "Presa del Cazador (Hunter's Prey)",
        nv: 3,
        a: "R",
        d: "Eliges una opción. Asesino de Colosos: una vez por turno, al impactar con un ataque con arma a una criatura que no tenga todos sus PG, infliges 1d8 adicionales. Matagigantes: cuando una criatura Grande o mayor a 5 pies te impacta o falla, puedes usar tu reacción para atacarla inmediatamente. Rompe-Hordas: una vez por turno, al hacer un ataque con arma, puedes hacer otro con la misma arma contra una criatura distinta a 5 pies del objetivo original."
      },
      {
        n: "Tácticas Defensivas (Defensive Tactics)",
        nv: 7,
        d: "Eliges una opción. Escapar de la Horda: los ataques de oportunidad contra ti tienen desventaja. Defensa contra Ataques Múltiples: cuando una criatura te impacta, tienes +4 a la CA contra los siguientes ataques de esa criatura este turno. Voluntad de Acero: ventaja en salvaciones contra Asustado."
      },
      {
        n: "Ataques Múltiples (Multiattack)",
        nv: 11,
        a: "A",
        d: "Eliges una opción. Descarga (Volley): como acción haces un ataque a distancia contra cualquier número de criaturas a 10 pies de un punto que veas dentro del alcance (con munición para cada una). Torbellino (Whirlwind Attack): como acción haces ataques cuerpo a cuerpo contra cualquier número de criaturas a 5 pies de ti."
      },
      {
        n: "Defensa Superior del Cazador (Superior Hunter's Defense)",
        nv: 15,
        a: "R",
        d: "Eliges una opción. Evasión: en salvaciones de DES para mitad de daño, no sufres daño si la superas y la mitad si fallas. Resistir la Marea: cuando una criatura hostil falla un ataque cuerpo a cuerpo contra ti, puedes usar tu reacción para obligarla a repetirlo contra otra criatura que elijas. Esquiva Asombrosa: cuando un atacante que veas te impacta, puedes usar tu reacción para reducir el daño a la mitad."
      },
    ],

    "Amo de Bestias [PHB 2014]": [
      {
        n: "Compañero del Explorador (Ranger's Companion)",
        nv: 3,
        d: "Ganas un compañero bestia de CR 1/4 o menos y tamaño Mediano o menor. Sumas tu comp. a su CA, tiradas de ataque y daño, salvaciones y habilidades; sus PG = el máximo normal o 4 × tu nivel de Explorador (el mayor). Actúa en tu iniciativa; las órdenes verbales no cuestan acción y, con Ataque Extra, puedes atacar tú cuando le ordenas atacar. Si muere, domas otra bestia con 8 horas de vínculo. [Opcional TCE: Compañero Primigenio (Primal Companion): bestia de la Tierra, el Mar o el Cielo]"
      },
      {
        n: "Entrenamiento Excepcional (Exceptional Training)",
        nv: 7,
        a: "B",
        d: "En tus turnos en que tu bestia no ataque, puedes usar una Acción Adicional para ordenarle Correr, Retirarse o Ayudar. Sus ataques cuentan como mágicos."
      },
      {
        n: "Furia Bestial (Bestial Fury)",
        nv: 11,
        d: "Cuando le ordenas a tu bestia Atacar, puede hacer dos ataques o usar Multiataque si lo tiene."
      },
      {
        n: "Compartir Conjuros (Share Spells)",
        nv: 15,
        d: "Cuando lanzas un conjuro sobre ti mismo, también puede afectar a tu bestia si está a 30 pies de ti."
      },
    ],


    /* ── XGtE ── */
    "Acechador Tenebroso [XGtE]": [
      {
        n: "Magia del Acechador Tenebroso (Gloom Stalker Magic)",
        nv: 3,
        d: "Siempre preparados (no cuentan para tu límite) — Nv.3: Disguise Self. Nv.5: Rope Trick. Nv.9: Fear. Nv.13: Greater Invisibility. Nv.17: Seeming."
      },
      {
        n: "Emboscador Temible (Dread Ambusher)",
        nv: 3,
        d: "Sumas tu mod. SAB a tus tiradas de iniciativa. En tu primer turno de cada combate tu Velocidad aumenta 10 pies hasta el final de ese turno y, si usas la acción de Atacar, haces un ataque con arma adicional que, si impacta, inflige 1d8 de daño del tipo del arma adicional."
      },
      {
        n: "Visión Umbral (Umbral Sight)",
        nv: 3,
        d: "Visión en la oscuridad 60 pies (o +30 pies si ya la tenías). Mientras estás en oscuridad, eres invisible para criaturas que dependan de visión en la oscuridad para verte."
      },
      {
        n: "Mente de Hierro (Iron Mind)",
        nv: 7,
        d: "Ganas competencia en salvaciones de SAB (si ya la tienes, en INT o CAR)."
      },
      {
        n: "Ráfaga del Acechador (Stalker's Flurry)",
        nv: 11,
        d: "Una vez por turno, cuando fallas un ataque con arma, puedes hacer otro ataque con arma como parte de la misma acción."
      },
      {
        n: "Esquiva Sombría (Shadowy Dodge)",
        nv: 15,
        a: "R",
        d: "Cuando una criatura te hace una tirada de ataque sin ventaja, puedes usar tu reacción para imponerle desventaja."
      },
    ],

    "Caminante del Horizonte [XGtE]": [
      {
        n: "Magia del Caminante del Horizonte (Horizon Walker Magic)",
        nv: 3,
        d: "Siempre preparados (no cuentan para tu límite) — Nv.3: Protection from Evil and Good. Nv.5: Misty Step. Nv.9: Haste. Nv.13: Banishment. Nv.17: Teleportation Circle."
      },
      {
        n: "Detectar Portal (Detect Portal)",
        nv: 3,
        a: "A",
        d: "Como acción detectas la distancia y dirección al portal planar más cercano a 1 milla. Una vez por descanso corto o largo."
      },
      {
        n: "Guerrero Planar (Planar Warrior)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional eliges una criatura que veas a 30 pies: la próxima vez que la impactes este turno con un ataque con arma, todo el daño pasa a ser de fuerza y sufre 1d8 de fuerza adicional (2d8 en Nv.11)."
      },
      {
        n: "Paso Etéreo (Ethereal Step)",
        nv: 7,
        a: "B",
        d: "Como Acción Adicional lanzas Etherealness sin gastar espacio; el conjuro termina al final de tu turno. Una vez por descanso corto o largo."
      },
      {
        n: "Golpe Distante (Distant Strike)",
        nv: 11,
        d: "Cuando usas la acción de Atacar, puedes teletransportarte hasta 10 pies antes de cada ataque a un espacio libre que veas. Si atacas al menos a dos criaturas distintas con la acción, haces un ataque adicional contra una tercera."
      },
      {
        n: "Defensa Espectral (Spectral Defense)",
        nv: 15,
        a: "R",
        d: "Cuando recibes daño de un ataque, puedes usar tu reacción para obtener resistencia a todo el daño de ese ataque."
      },
    ],

    "Cazador de Monstruos [XGtE]": [
      {
        n: "Magia del Cazador de Monstruos (Monster Slayer Magic)",
        nv: 3,
        d: "Siempre preparados (no cuentan para tu límite) — Nv.3: Protection from Evil and Good. Nv.5: Zone of Truth. Nv.9: Magic Circle. Nv.13: Banishment. Nv.17: Hold Monster."
      },
      {
        n: "Sentido del Cazador (Hunter's Sense)",
        nv: 3,
        a: "A",
        d: "Como acción eliges una criatura que veas a 60 pies y sabes si tiene inmunidades, resistencias o vulnerabilidades al daño y cuáles. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Presa del Cazador de Monstruos (Slayer's Prey)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional designas una criatura que veas a 60 pies: la primera vez cada turno que la impactas con un ataque con arma, sufre 1d6 de daño adicional. Dura hasta un descanso corto o largo o hasta que designes a otra."
      },
      {
        n: "Defensa Sobrenatural (Supernatural Defense)",
        nv: 7,
        d: "Cuando tu presa te obliga a hacer una salvación o cuando haces una prueba para escapar de su presa, sumas 1d6 a la tirada."
      },
      {
        n: "Némesis del Mago (Magic-User's Nemesis)",
        nv: 11,
        a: "R",
        d: "Cuando ves a una criatura lanzar un conjuro o teletransportarse a 60 pies, puedes usar tu reacción para intentar frustrarlo: hace una salvación de SAB (tu CD) o el conjuro o teletransporte fracasa. Una vez por descanso corto o largo."
      },
      {
        n: "Contraataque del Cazador (Slayer's Counter)",
        nv: 15,
        a: "R",
        d: "Si tu presa te obliga a hacer una salvación, puedes usar tu reacción para hacerle un ataque con arma antes de la salvación; si impacta, tu salvación tiene éxito automáticamente (y el efecto de la salvación se aplica normal)."
      },
    ],


    /* ── TCE ── */
    "Viajero Feérico [TCE]": [
      {
        n: "Golpes Aterradores (Dreadful Strikes)",
        nv: 3,
        d: "Una vez por turno, al impactar con un arma, infliges 1d4 de daño psíquico adicional (1d6 en Nv.11)."
      },
      {
        n: "Magia del Viajero Feérico (Fey Wanderer Magic)",
        nv: 3,
        d: "Siempre preparados (no cuentan para tu límite) — Nv.3: Charm Person. Nv.5: Misty Step. Nv.9: Dispel Magic. Nv.13: Dimension Door. Nv.17: Mislead."
      },
      {
        n: "Glamour de Otro Mundo (Otherworldly Glamour)",
        nv: 3,
        d: "Sumas tu mod. SAB (mínimo +1) a tus pruebas de CAR y ganas competencia en Engaño, Interpretación o Persuasión (a tu elección)."
      },
      {
        n: "Giro Seductor (Beguiling Twist)",
        nv: 7,
        a: "R",
        d: "Ventaja en salvaciones contra Hechizado y Asustado. Cuando tú o una criatura a 120 pies supera una salvación contra esas condiciones, puedes usar tu reacción para obligar a otra criatura a 120 pies a una salvación de SAB (tu CD): si falla, queda Hechizada o Asustada de ti 1 minuto (repite la salvación al final de cada turno)."
      },
      {
        n: "Refuerzos Feéricos (Fey Reinforcements)",
        nv: 11,
        a: "O",
        d: "Conoces Summon Fey (no cuenta para tu límite) y puedes lanzarlo sin componente material y una vez por descanso largo sin espacio. Puedes lanzarlo sin concentración (duración 1 minuto)."
      },
      {
        n: "Viajero Brumoso (Misty Wanderer)",
        nv: 15,
        a: "B",
        d: "Puedes lanzar Misty Step sin espacio mod. SAB veces (mínimo 1) por descanso largo; al hacerlo puedes llevar a una criatura voluntaria a 5 pies que aparece a 5 pies de tu destino."
      },
    ],

    "Guardián del Enjambre [TCE]": [
      {
        n: "Enjambre Reunido (Gathered Swarm)",
        nv: 3,
        a: "O",
        d: "Un enjambre de espíritus de la naturaleza te acompaña en tu espacio. Una vez por turno, al impactar con un ataque, eliges un efecto: el objetivo sufre 1d6 de daño perforante; el objetivo hace una salvación de FUE (tu CD) o lo mueves 15 pies horizontalmente; o tú te mueves 5 pies horizontalmente sin provocar ataques de oportunidad."
      },
      {
        n: "Magia del Guardián del Enjambre (Swarmkeeper Magic)",
        nv: 3,
        d: "Aprendes el truco Mage Hand (el enjambre la ejecuta). Siempre preparados (no cuentan para tu límite) — Nv.3: Faerie Fire. Nv.5: Web. Nv.9: Gaseous Form. Nv.13: Arcane Eye. Nv.17: Insect Plague."
      },
      {
        n: "Marea Revuelta (Writhing Tide)",
        nv: 7,
        a: "B",
        d: "Como Acción Adicional ganas Velocidad de vuelo 10 pies y flotas durante 1 minuto o hasta quedar Incapacitado. Usos = comp. por descanso largo."
      },
      {
        n: "Enjambre Poderoso (Mighty Swarm)",
        nv: 11,
        d: "El daño de Enjambre Reunido pasa a 1d8; si el objetivo falla la salvación de FUE también cae Tumbado; y cuando el enjambre te mueve, tienes cobertura media hasta el inicio de tu siguiente turno."
      },
      {
        n: "Dispersión del Enjambre (Swarming Dispersal)",
        nv: 15,
        a: "R",
        d: "Cuando recibes daño, puedes usar tu reacción para obtener resistencia a ese daño y desaparecer y reaparecer en un espacio libre a 30 pies. Usos = comp. por descanso largo."
      },
    ],


    /* ── FToD ── */
    "Guardián del Drake [FToD]": [
      {
        n: "Don Dracónico (Draconic Gift)",
        nv: 3,
        d: "Aprendes el truco Thaumaturgy (cuenta como de Explorador) y a hablar, leer y escribir Dracónico (u otro idioma si ya lo conoces)."
      },
      {
        n: "Drake Compañero (Drake Companion)",
        nv: 3,
        a: "A",
        d: "Como acción invocas a tu drake (elige esencia: ácido, frío, fuego, rayo o veneno) en un espacio libre a 30 pies. Comparte tu iniciativa y actúa tras ti; sólo Esquiva salvo que le ordenes algo con una Acción Adicional. CA 14 + comp., PG 5 + 5 × nivel de Explorador, Velocidad 40 pies, inmune a su tipo de daño; Mordisco: ataque +3 + comp., 1d6 + comp. perforante. Reacción: Golpes Infundidos (+1d6 de daño de la esencia a los golpes de tus aliados cercanos). Lo reinvocas tras un descanso largo o gastando un espacio de nivel 1+."
      },
      {
        n: "Vínculo de Colmillo y Escama (Bond of Fang and Scale)",
        nv: 7,
        d: "El drake gana alas y Velocidad de vuelo = su Velocidad, pasa a ser Mediano y puedes montarlo; su Mordisco inflige +1d6 de daño de la esencia. Ganas resistencia al tipo de daño de tu drake."
      },
      {
        n: "Aliento del Drake (Drake's Breath)",
        nv: 11,
        a: "A",
        d: "Como acción tú o tu drake exhaláis un cono de 30 pies: salvación de DES; 8d6 de daño de la esencia (10d6 en Nv.15), mitad si superan. Una vez por descanso largo, o gastando un espacio de nivel 3+."
      },
      {
        n: "Vínculo Perfecto (Perfected Bond)",
        nv: 15,
        a: "R",
        d: "El Mordisco del drake inflige 2d6 de daño de esencia adicional en total; pasa a ser Grande y vuela con jinete. Resistencia Refleja: puede usar su reacción para darse resistencia al daño de un ataque (comp. veces por descanso)."
      },
    ],


    /* ── PHB 2024 ── */
    "Cazador [PHB 2024]": [
      {
        n: "Conocimiento del Cazador (Hunter's Lore)",
        nv: 3,
        d: "Mientras una criatura está marcada por tu Hunter's Mark, sabes si tiene inmunidades, resistencias o vulnerabilidades y cuáles."
      },
      {
        n: "Presa del Cazador (Hunter's Prey)",
        nv: 3,
        d: "Eliges una opción (cambiable tras un descanso corto o largo). Asesino de Colosos: una vez por turno, al impactar con un arma a una criatura a la que le falten PG, infliges 1d8 adicionales. Rompe-Hordas: una vez por turno, al atacar con un arma, puedes hacer otro ataque con la misma arma contra otra criatura a 5 pies del objetivo original (dentro del alcance y no atacada este turno)."
      },
      {
        n: "Tácticas Defensivas (Defensive Tactics)",
        nv: 7,
        d: "Eliges una opción (cambiable tras un descanso corto o largo). Escapar de la Horda: los ataques de oportunidad contra ti tienen desventaja. Defensa contra Ataques Múltiples: cuando una criatura te impacta, tiene desventaja en las demás tiradas de ataque contra ti este turno."
      },
      {
        n: "Presa Superior del Cazador (Superior Hunter's Prey)",
        nv: 11,
        a: "O",
        d: "Una vez por turno, cuando infliges daño a una criatura marcada por tu Hunter's Mark, también infliges el daño adicional de ese conjuro a otra criatura que veas a 30 pies de la primera."
      },
      {
        n: "Defensa Superior del Cazador (Superior Hunter's Defense)",
        nv: 15,
        a: "R",
        d: "Cuando recibes daño, puedes usar tu reacción para obtener resistencia a ese daño y a cualquier otro del mismo tipo hasta el final del turno."
      },
    ],

    "Amo de Bestias [PHB 2024]": [
      {
        n: "Compañero Primigenio (Primal Companion)",
        nv: 3,
        a: "B",
        d: "Invocas una bestia primigenia amistosa (de la Tierra, el Mar o el Cielo) que actúa en tu turno, se mueve y usa su reacción por sí misma y sólo Esquiva salvo que le ordenes con una Acción Adicional (puedes sacrificar uno de tus ataques para ordenarle Golpe de Bestia). Tierra: Mediana, CA 13 + SAB, PG 5 + 5 × nivel, Velocidad 40/trepar 40, Golpe 1d8 + 2 + SAB y +1d6 si se movió 20 pies (Derriba a Grandes o menores). Cielo: Pequeña, PG 4 + 4 × nivel, Velocidad 10/vuelo 60, Golpe 1d4 + 3 + SAB cortante, sin ataques de oportunidad al volar. Mar: Mediana, PG 5 + 5 × nivel, Velocidad 5/nadar 60, anfibia, Golpe 1d6 + 2 + SAB y la agarra. Si muere (en la última hora), puedes revivirla con un espacio de conjuro y una acción Mágica. Cambias de bestia tras un descanso largo."
      },
      {
        n: "Entrenamiento Excepcional (Exceptional Training)",
        nv: 7,
        d: "Cuando le ordenas a la bestia con una Acción Adicional, también puede usar Correr, Retirarse, Esquivar o Ayudar con su propia Acción Adicional. Sus ataques pueden infligir daño de fuerza."
      },
      {
        n: "Furia Bestial (Bestial Fury)",
        nv: 11,
        d: "Cuando le ordenas Golpe de Bestia, la bestia puede usarlo dos veces. El primer impacto de cada turno contra una criatura bajo tu Hunter's Mark inflige el daño de fuerza adicional de ese conjuro."
      },
      {
        n: "Compartir Conjuros (Share Spells)",
        nv: 15,
        d: "Cuando lanzas un conjuro sobre ti mismo, también puede afectar a tu bestia si está a 30 pies."
      },
    ],

    "Acechador Tenebroso [PHB 2024]": [
      {
        n: "Emboscador Temible (Dread Ambusher)",
        nv: 3,
        a: "O",
        d: "Salto del Emboscador: al inicio de tu primer turno de cada combate, tu Velocidad aumenta 10 pies hasta el final del turno. Golpe Aterrador: una vez por turno, al impactar con un ataque con arma, infliges 2d6 de daño psíquico adicional; usos = mod. SAB (mínimo 1) por descanso largo. Bonificador de Iniciativa: sumas tu mod. SAB a tus tiradas de iniciativa."
      },
      {
        n: "Conjuros del Acechador Tenebroso",
        nv: 3,
        d: "Siempre preparados — Nv.3: Disguise Self. Nv.5: Rope Trick. Nv.9: Fear. Nv.13: Greater Invisibility. Nv.17: Seeming."
      },
      {
        n: "Visión Umbral (Umbral Sight)",
        nv: 3,
        d: "Visión en la oscuridad 60 pies (o +60 pies si ya la tenías). Mientras estás totalmente en oscuridad, eres invisible para cualquier criatura que dependa de visión en la oscuridad para verte."
      },
      {
        n: "Mente de Hierro (Iron Mind)",
        nv: 7,
        d: "Ganas competencia en salvaciones de SAB (si ya la tienes, en INT o CAR)."
      },
      {
        n: "Ráfaga del Acechador (Stalker's Flurry)",
        nv: 11,
        a: "O",
        d: "El daño de Golpe Aterrador pasa a 2d8 y gana un efecto a tu elección al usarlo: Golpe Súbito: haces otro ataque con la misma arma contra una criatura distinta a 5 pies y dentro del alcance. Miedo Colectivo: el objetivo y las criaturas a 10 pies hacen una salvación de SAB (tu CD) o quedan Asustadas hasta el inicio de tu siguiente turno."
      },
      {
        n: "Esquiva Sombría (Shadowy Dodge)",
        nv: 15,
        a: "R",
        d: "Cuando una criatura te hace una tirada de ataque, puedes usar tu reacción para imponerle desventaja y, acierte o falle, te teletransportas hasta 30 pies a un espacio libre que veas."
      },
    ],

    "Viajero Feérico [PHB 2024]": [
      {
        n: "Golpes Aterradores (Dreadful Strikes)",
        nv: 3,
        d: "Una vez por turno, al impactar con un arma, infliges 1d4 de daño psíquico adicional (1d6 en Nv.11)."
      },
      {
        n: "Conjuros del Viajero Feérico",
        nv: 3,
        d: "Siempre preparados — Nv.3: Charm Person. Nv.5: Misty Step. Nv.9: Summon Fey. Nv.13: Dimension Door. Nv.17: Mislead."
      },
      {
        n: "Glamour de Otro Mundo (Otherworldly Glamour)",
        nv: 3,
        d: "Sumas tu mod. SAB (mínimo +1) a tus pruebas de CAR y ganas competencia en Engaño, Interpretación o Persuasión (a tu elección)."
      },
      {
        n: "Dones del Feywild (Feywild Gifts)",
        nv: 3,
        d: "Eliges (o tiras) un don cosmético: mariposas ilusorias, flores que brotan, aroma de hierbas, sombra danzante, cuernos/astas o piel/pelo que cambia de color."
      },
      {
        n: "Giro Seductor (Beguiling Twist)",
        nv: 7,
        a: "R",
        d: "Ventaja en salvaciones para evitar o terminar Hechizado o Asustado. Cuando tú o una criatura a 120 pies supera una salvación contra esas condiciones, puedes usar tu reacción para obligar a otra criatura a 120 pies a una salvación de SAB (tu CD): si falla queda Hechizada o Asustada 1 minuto (repite la salvación al final de cada turno)."
      },
      {
        n: "Refuerzos Feéricos (Fey Reinforcements)",
        nv: 11,
        a: "O",
        d: "Puedes lanzar Summon Fey sin componente material y una vez por descanso largo sin espacio. Puedes lanzarlo sin concentración (duración 1 minuto)."
      },
      {
        n: "Viajero Brumoso (Misty Wanderer)",
        nv: 15,
        a: "B",
        d: "Puedes lanzar Misty Step sin espacio mod. SAB veces (mínimo 1) por descanso largo; al hacerlo puedes llevar a una criatura voluntaria a 5 pies, que aparece a 5 pies de tu destino."
      },
    ],


    /* ── HoF 2024 ── */
    "Caminante del Invierno [HoF 2024]": [
      {
        n: "Explorador Gélido (Frigid Explorer)",
        nv: 3,
        d: "Frío Mordiente: tus ataques con arma, conjuros y rasgos de Explorador ignoran la resistencia al frío. Resistencia al Hielo: resistencia al daño de frío. Golpes Polares: una vez por turno, tus ataques con arma infligen 1d4 de frío adicional (1d6 en Nv.11)."
      },
      {
        n: "Escarcha del Cazador (Hunter's Rime)",
        nv: 3,
        d: "Cuando lanzas Hunter's Mark ganas PG temporales = 1d10 + nivel de Explorador, y las criaturas marcadas no pueden usar Retirarse."
      },
      {
        n: "Conjuros del Caminante del Invierno",
        nv: 3,
        d: "Siempre preparados — Nv.3: Ice Knife. Nv.5: Hold Person. Nv.9: Remove Curse. Nv.13: Ice Storm. Nv.17: Cone of Cold."
      },
      {
        n: "Alma Fortificadora (Fortifying Soul)",
        nv: 7,
        a: "A",
        d: "Como acción Mágica eliges hasta mod. SAB criaturas (mínimo 1): cada una recupera 1d10 + nivel de Explorador PG y tiene ventaja en salvaciones contra Asustado durante 1 hora. Una vez por descanso largo."
      },
      {
        n: "Represalia Gélida (Chilling Retribution)",
        nv: 11,
        a: "R",
        d: "Cuando te impacta un ataque, puedes usar tu reacción para que el atacante haga una salvación de SAB (tu CD): si falla queda Aturdido hasta el final de tu siguiente turno y su Velocidad pasa a 0. Usos = mod. SAB por descanso largo."
      },
      {
        n: "Aparición Helada (Frozen Haunt)",
        nv: 15,
        a: "O",
        d: "Al lanzar Hunter's Mark adoptas una forma fantasmal y nevada hasta que termine el conjuro: inmunidad al frío; al final de cada uno de tus turnos las criaturas a 15 pies sufren 2d4 de frío; inmunidad a Agarrado, Derribado y Apresado; atraviesas criaturas y objetos como terreno difícil (sufres 1d10 de fuerza si terminas dentro). Una vez por descanso largo, o gastando un espacio de nivel 4+."
      },
    ],
  },
};
