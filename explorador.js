/* ══════════════════════════════════════════════════════════════════
   explorador.js — Explorador (Ranger): rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Fizban's Treasury of Dragons (FToD)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (12 entradas):
     Cazador               [PHB 2014] / [PHB 2024]
     Amo de Bestias        [PHB 2014] / [PHB 2024]
     Acechador Tenebroso   [XGtE]     / [PHB 2024]
     Caminante del Horizonte [XGtE]
     Cazador de Monstruos  [XGtE]
     Viajero Feérico       [TCE]      / [PHB 2024]
     Guardián del Enjambre [TCE]
     Guardián del Drake    [FToD]
══════════════════════════════════════════════════════════════════ */

const CLASE_EXPLORADOR = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras y medias, escudos. Armas simples y marciales. Salvaciones: FUE y DES. Habilidades: elige 3 entre Manejo de Animales, Atletismo, Perspicacia, Investigación, Naturaleza, Percepción, Sigilo y Supervivencia."
    },
    {
      n: "Enemigo Favorito [PHB 2014]",
      nv: 1,
      d: "(PHB 2014) Elige un tipo de criatura (bestias, constructos, dragones, elementales, hadas, fiends, gigantes, humanoides, monstruosidades, no-muertos, oozes, plantas o no-muertos). Tienes ventaja en tiradas de Supervivencia para rastrear ese tipo, y en pruebas de INT para recordar información sobre ellos. Aprendes un idioma adicional hablado por ese tipo. Puedes elegir un segundo tipo en Nv.6 y un tercero en Nv.14."
    },
    {
      n: "Entorno Natural [PHB 2014]",
      nv: 1,
      d: "(PHB 2014) Elige un tipo de terreno (ártico, costa, desierto, bosque, pradera, montaña, pantano, subterráneo o Underdark). En ese terreno: terreno difícil no consume movimiento extra al viajar, no puedes perderte salvo por magia, puedes moverse sigilosamente a velocidad normal, buscas comida doble al forrajear, notas rasgos geográficos o naturales relevantes que normalmente pasarían desapercibidos. En Nv.6 y Nv.10 eliges un entorno adicional."
    },
    {
      n: "Cazador de Presas [PHB 2024]",
      nv: 1,
      d: "(PHB 2024) Sustituye a Enemigo Favorito y Entorno Natural. Conoces el conjuro Marca del Cazador (Hunter's Mark); siempre está preparado y no cuenta contra tu límite. Puedes lanzarlo sin gastar espacio de conjuro un número de veces = bonificador de competencia por Descanso Largo. Además tienes ventaja en pruebas de SAB (Percepción, Supervivencia) para detectar o rastrear a la criatura marcada."
    },
    {
      n: "Estilo de Combate",
      nv: 2,
      d: "Elige un estilo: Arquería (+2 a tiradas de ataque a distancia), Defensa (+1 CA con armadura), Duelo (+2 daño con arma de una mano sin otra arma), Combate con Dos Armas (añades mod característica al daño de la mano secundaria), Guerrero Druídico [TCE] (aprendes 2 trucos de Druida usando SAB), Cegador [TCE] (lanzas un truco de daño como parte de Ataque Extra)."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 2,
      d: "SAB es tu característica de conjuro (CD = 8 + comp + mod SAB). El Explorador es un lanzador de medio nivel (espacios hasta Nv.5). Conjuros conocidos: 2 (Nv.2) → escala hasta 11 (Nv.20). Puede cambiar 1 conjuro conocido al subir de nivel."
    },
    {
      n: "Conciencia Primigenia",
      nv: 3,
      d: "(PHB 2014) Gastas un espacio de conjuro para concentrarte durante 1 minuto por nivel del espacio y detectar si hay aberraciones, celestiales, dragones, elementales, hadas, fiends o no-muertos en un radio de 1 milla (o 6 millas en tu Entorno Natural favorito). No revela la localización ni número exacto."
    },
    {
      n: "Arquetipo de Explorador",
      nv: 3,
      d: "Eliges tu subclase (Arquetipo de Explorador / Conclave de Exploradores). Otorga rasgos en Nv.3, 7, 11 y 15."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Ataque Extra",
      nv: 5,
      d: "Atacas dos veces cuando usas la acción de Atacar."
    },
    {
      n: "Paso sin Rastro",
      nv: 8,
      d: "Puedes lanzar Pasar sin Rastro a voluntad sin gastar espacio de conjuro."
    },
    {
      n: "Ocultar la Mente [PHB 2014]",
      nv: 10,
      d: "(PHB 2014) No puedes ser encantado ni asustado y eres inmune a la magia que te permita leer pensamientos, determinar si mientes o conocer tu alineamiento o tipo de criatura."
    },
    {
      n: "Desvanecerse",
      nv: 14,
      d: "Puedes usar la acción de Ocultarse como Acción Adicional en tu turno. Además, no puedes ser rastreado por medios no mágicos a menos que decidas dejar un rastro."
    },
    {
      n: "Sentidos Feroces",
      nv: 18,
      d: "No tienes desventaja en tiradas de ataque contra criaturas invisibles."
    },
    {
      n: "Cazador Enemigo",
      nv: 20,
      d: "(PHB 2014) Una vez en tu turno, puedes añadir 10 de daño adicional cuando golpeas a un Enemigo Favorito con arma."
    },
    {
      n: "Cazador Feral [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Ganas un bono de +10 a tiradas de Iniciativa. Tienes ventaja en tiradas de ataque contra criaturas que estén bajo el efecto de tu Marca del Cazador."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (ARQUETIPOS / CONCLAVES DE EXPLORADOR)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Cazador [PHB 2014]": [
      {
        n: "Presa del Cazador",
        nv: 3,
        d: "Elige uno: Matador de Colosales — 1/turno cuando golpeas a un enemigo que no esté a PG máximos, +1d8 daño; Rompe-Hordas — cuando golpeas, puedes atacar a un segundo enemigo a 5 pies del original con el mismo ataque; Asesino de Gigantes — cuando un enemigo Grande o mayor te ataca y falla, puedes usar Reacción para atacarle."
      },
      {
        n: "Tácticas Defensivas",
        nv: 7,
        d: "Elige uno: Huida de los Multitudinarios — ataques de oportunidad contra ti tienen desventaja; Defensa Múltiple de Ataques — cuando te golpean, +4 CA contra el siguiente ataque de esa criatura; Voluntad de Acero — ventaja en salvaciones contra condiciones Asustado."
      },
      {
        n: "Ataque Multiple",
        nv: 11,
        d: "Elige uno: Descarga — cuando usas la acción de Atacar con arma a distancia, puedes disparar a hasta 3 criaturas a 10 pies entre sí (un ataque por criatura, con todos los bonificadores normales); Ataque Barreedor — cuando usas la acción de Atacar con arma cuerpo a cuerpo, puedes atacar a todas las criaturas a 5 pies de ti (sin bonificadores de Estilo de Combate; solo 1 tirada de ataque aplicada a todos)."
      },
      {
        n: "Defensa Superior del Cazador",
        nv: 15,
        d: "Elige uno: Evasión — cuando fallas una salvación de DES que normalmente reduce el daño a la mitad, no recibes daño; si superas la salvación, sigues sin recibir daño; Mente de Hierro — ventaja en salvaciones de SAB; Esquiva Escurridiza — cuando una criatura te golpea, puedes usar Reacción para que el ataque falle."
      },
    ],

    "Amo de Bestias [PHB 2014]": [
      {
        n: "Compañero Bestia",
        nv: 3,
        d: "Obtienes un animal compañero bestia (CR ≤ 1/4, sin velocidad de vuelo) que actúa en tu misma iniciativa. Sus PG = 4 × nivel de Explorador. Mientras estés vivo, el compañero obedece tus órdenes. Puedes usar tu Acción para ordenarle Atacar; si usas tu Acción para hacer otra cosa, solo puede usar Dash, Disengage o Dodge. En Nv.7 añade tu bonificador de competencia a sus tiradas de ataque y daño; en Nv.11 puede hacer dos ataques; en Nv.15 obtiene una salvación de característica adicional."
      },
      {
        n: "Entrenamiento Excepcional",
        nv: 7,
        d: "Puedes usar tu Acción Adicional para ordenarle Atacar (en lugar de la Acción completa). Además, los ataques de tu compañero cuentan como mágicos."
      },
      {
        n: "Furia Bestial",
        nv: 11,
        d: "Tu compañero puede atacar dos veces cuando toma la acción de Atacar."
      },
      {
        n: "Compartir Conjuros",
        nv: 15,
        d: "Cuando lanzas un conjuro que te afecte solo a ti, también puede afectar a tu compañero bestia si está a 30 pies de ti."
      },
    ],

    /* ── PHB 2024 ── */
    "Cazador [PHB 2024]": [
      {
        n: "Presa del Cazador",
        nv: 3,
        d: "Al elegir este conclave, eliges una opción de Hunter's Prey: Colossus Slayer (1/turno +1d8 al golpear un enemigo que no esté a PG máximos), Horde Breaker (atacas un segundo enemigo a 5 pies del original con el mismo ataque), o Giant Killer (Reacción cuando un Grande o mayor te falla: le atacas). También ganas Conocimiento del Cazador: aprendes si la criatura marcada tiene resistencias, vulnerabilidades o inmunidades al daño."
      },
      {
        n: "Tácticas Defensivas",
        nv: 7,
        d: "Elige: Escape de los Muchos (desventaja en ataques de oportunidad contra ti), Defensa Multiataques (+4 CA después de ser golpeado una vez por turno), Voluntad de Hierro (ventaja en salvaciones de SAB contra Asustado y Encantado)."
      },
      {
        n: "Presa Superior",
        nv: 11,
        d: "Cuando dañas a una criatura afectada por tu Marca del Cazador, puedes aplicar el daño extra de la Marca a una segunda criatura a 30 pies de la primera (1/turno)."
      },
      {
        n: "Defensa Superior del Cazador",
        nv: 15,
        d: "Elige: Evasión (DES para evitar daño total en área), Mente de Hierro (ventaja en salvaciones SAB), o Esquiva Escurridiza (Reacción: el ataque que te golpeó falla; luego teletransportas 30 pies a espacio visible)."
      },
    ],

    "Amo de Bestias [PHB 2024]": [
      {
        n: "Compañero Primigenio",
        nv: 3,
        d: "Tu compañero bestia usa el bloque de estadísticas de Compañero Primigenio (Beast of the Land, Sky o Sea): CA = 13 + bonificador de competencia, PG = 5 × nivel de Explorador + mod CON, ataques con bonificador de competencia. En tu turno, puede usar la acción de Atacar como AA tuya (sin coste de acción) si le das la orden. Puedes revivir al compañero gastando un espacio de conjuro de Nv.1 si muere (recupera PG = 2 × nivel de Explorador)."
      },
      {
        n: "Entrenamiento Excepcional",
        nv: 7,
        d: "Los ataques de tu compañero cuentan como mágicos. Además, cuando le ordenas atacar como AA, puede hacer la acción de Atacar completa (dos ataques)."
      },
      {
        n: "Furia Bestial",
        nv: 11,
        d: "Cuando tu compañero golpea a una criatura afectada por tu Marca del Cazador, inflige el daño extra de la Marca."
      },
      {
        n: "Compartir Conjuros",
        nv: 15,
        d: "Los conjuros que te afecten solo a ti también pueden afectar a tu compañero si está a 30 pies."
      },
    ],

    "Acechador Tenebroso [XGtE]": [
      {
        n: "Magia del Acechador Tenebroso",
        nv: 3,
        d: "Conjuros adicionales siempre conocidos: Nv.3: Disfrazarse, Visión en la Oscuridad. Nv.5: Paso Brumoso, Silencio. Nv.9: No-Detección, Miedo. Nv.13: Gran Invisibilidad, Viaje Etéreo. Nv.17: Scrying, Correr entre Sombras."
      },
      {
        n: "Emboscador Temible",
        nv: 3,
        d: "Ganas mod SAB a la Iniciativa. En el primer turno de cada combate, tu velocidad aumenta 10 pies y si atacas con arma puedes hacer un ataque adicional como parte de esa acción (daño extra = 1d8). Usos del ataque extra = mod SAB (mínimo 1) por Descanso Largo. Además eres invisible para criaturas que dependen de la visión en la oscuridad (visión en la oscuridad) cuando tú estás en oscuridad."
      },
      {
        n: "Presencia Espectral",
        nv: 7,
        d: "Ventaja en salvaciones de SAB."
      },
      {
        n: "Flurry del Acechador",
        nv: 11,
        d: "El daño extra de Emboscador Temible aumenta a 2d8. Cuando usas el ataque extra de Emboscador Temible: si fallas, puedes realizar otro ataque adicional contra esa criatura o contra una criatura diferente a 5 pies (1/turno)."
      },
      {
        n: "Esquiva Sombría",
        nv: 15,
        d: "Reacción: cuando una criatura te golpea, puedes imponerle desventaja en la tirada de ataque. Tras resolver el ataque, te teletransportas hasta 30 pies a un espacio que puedas ver."
      },
    ],

    "Acechador Tenebroso [PHB 2024]": [
      {
        n: "Magia del Acechador Tenebroso",
        nv: 3,
        d: "Conjuros adicionales siempre preparados: Nv.3: Disfrazarse, Visión en la Oscuridad. Nv.5: Paso Brumoso, Silencio. Nv.9: No-Detección, Miedo. Nv.13: Gran Invisibilidad, Viaje Etéreo. Nv.17: Doomilack, Correr entre Sombras."
      },
      {
        n: "Emboscador Temible",
        nv: 3,
        d: "+mod SAB a Iniciativa. Primer turno de combate: velocidad +10 pies; cuando golpeas con arma, puedes infligir 2d6 daño psíquico extra (usos = mod SAB por Descanso Largo). Invisible para criaturas con visión en oscuridad cuando estás en oscuridad."
      },
      {
        n: "Presencia Espectral",
        nv: 7,
        d: "Ventaja en salvaciones de SAB."
      },
      {
        n: "Flurry del Acechador",
        nv: 11,
        d: "El daño extra de Emboscador Temible aumenta a 2d8. Si fallas con ese ataque, puedes realizar otro contra la misma criatura o una diferente a 5 pies."
      },
      {
        n: "Esquiva Sombría",
        nv: 15,
        d: "Reacción: impones desventaja al ataque que te golpea. Tras el ataque, te teletransportas 30 pies a espacio visible."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Caminante del Horizonte [XGtE]": [
      {
        n: "Magia del Caminante del Horizonte",
        nv: 3,
        d: "Conjuros adicionales siempre conocidos: Nv.3: Protección contra el Bien y el Mal. Nv.5: Paso Brumoso. Nv.9: Proyección en la Distancia. Nv.13: Destierro. Nv.17: Desplazamiento entre Planos."
      },
      {
        n: "Detectar Portal",
        nv: 3,
        d: "Puedes detectar la presencia de portales planares: al gastar una acción sientes si hay algún portal a 1 milla (dirección aproximada y distancia). 1/descanso largo."
      },
      {
        n: "Luchador Planar",
        nv: 3,
        d: "AA: te envuelves en energía planar durante 1 turno. Cuando golpeas por primera vez a una criatura en ese turno con arma, infligas 1d8 de daño de fuerza extra. Criaturas fuera de su plano de origen reciben el doble (2d8). El daño extra aumenta a 2d8 (4d8 para criaturas foráneas) en Nv.11."
      },
      {
        n: "Paso Etéreo",
        nv: 7,
        d: "Puedes usar Misty Step sin gastar espacio de conjuro (1/descanso corto o largo) pero la versión de Plano Etéreo: te mueves hasta 30 pies a través del Plano Etéreo y apareces en el espacio equivalente en el plano material."
      },
      {
        n: "Guerrero Distante",
        nv: 11,
        d: "El daño extra de Luchador Planar aumenta. Además, cuando atacas a una criatura en el primer turno de combate, puedes atacar también a cualquier criatura invisible a 30 pies (si la sospechas ahí)."
      },
      {
        n: "Defensa del Portal",
        nv: 15,
        d: "Puedes lanzar Destierro sin espacio de conjuro (1/descanso largo). Criaturas desterradas por ti van permanentemente a su plano nativo si fallan la salvación por 2 turnos consecutivos."
      },
    ],

    "Cazador de Monstruos [XGtE]": [
      {
        n: "Magia del Cazador de Monstruos",
        nv: 3,
        d: "Conjuros adicionales siempre conocidos: Nv.3: Protección contra el Bien y el Mal. Nv.5: Zona de Verdad. Nv.9: Círculo Mágico. Nv.13: Destierro. Nv.17: Mantener Monstruo."
      },
      {
        n: "Presa del Cazador de Monstruos",
        nv: 3,
        d: "Cuando marcas a una criatura con Marca del Cazador, aprendes sus resistencias, vulnerabilidades e inmunidades al daño y a condiciones. La primera vez que le impactes cada turno inflige +1d6 extra de daño del tipo al que sea vulnerable (si lo es), o daño radiante si no tiene vulnerabilidades."
      },
      {
        n: "Defensa Sobrenatural",
        nv: 7,
        d: "Cuando la criatura marcada te obliga a hacer una salvación o te golpea en un ataque, añades 1d6 a tu salvación o CA respectivamente."
      },
      {
        n: "Ojo Mágico",
        nv: 11,
        d: "Puedes lanzar Ojo Arcano sin gastar espacio de conjuro. 1/descanso largo."
      },
      {
        n: "Némesis del Mago",
        nv: 15,
        d: "Cuando ves a una criatura a 60 pies lanzar un conjuro o teletransportarse, puedes usar Reacción para ganar ventaja en el próximo ataque contra esa criatura o forzarle a repetir el conjuro con desventaja (1/descanso corto o largo)."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Viajero Feérico [TCE]": [
      {
        n: "Magia del Viajero Feérico",
        nv: 3,
        d: "Conjuros adicionales siempre conocidos: Nv.3: Encantar Persona. Nv.5: Paso Brumoso. Nv.9: Dispersar Magia. Nv.13: Dimensión Puerta. Nv.17: Invocar Hada. Además recibes un Don Feérico de la tabla (p.ej. nunca te extravías, entiendes todos los idiomas de hadas, ves criaturas invisibles de la Feywild, etc.)."
      },
      {
        n: "Golpes Espantosos",
        nv: 3,
        d: "Cuando golpeas a una criatura con arma, puedes infligir 1d4 extra de daño psíquico (1d6 desde Nv.11). Cada criatura solo puede tomar este daño una vez por turno."
      },
      {
        n: "Glamour Exótico",
        nv: 3,
        d: "Ganas competencia en Engaño, Actuación o Persuasión (elige 1). Cuando haces una prueba de CAR, añades mod SAB al resultado."
      },
      {
        n: "Giro Seductor",
        nv: 7,
        d: "Ventaja en salvaciones contra ser Encantado o Asustado. Cuando tú o una criatura a 120 pies supera esa salvación, puedes usar Reacción para forzar a otra criatura a 120 pies a superar salvación SAB (CD conjuro) o quedar Encantada o Asustada (tu elección) durante 1 minuto."
      },
      {
        n: "Refuerzos Feéricos",
        nv: 11,
        d: "Aprendes Invocar Hada (Summon Fey). No cuenta contra tus conjuros conocidos, sin componentes materiales, y puedes lanzarlo sin espacio 1/descanso largo. Puedes modificarlo para que no requiera concentración (duración 1 minuto en ese caso)."
      },
      {
        n: "Viajero Brumoso",
        nv: 15,
        d: "Puedes lanzar Paso Brumoso sin espacio de conjuro un número de veces = mod SAB (mínimo 1) por Descanso Largo. Al hacerlo, puedes llevar a una criatura voluntaria a 5 pies contigo a un espacio a 5 pies de tu destino."
      },
    ],

    "Viajero Feérico [PHB 2024]": [
      {
        n: "Magia del Viajero Feérico",
        nv: 3,
        d: "Conjuros siempre preparados: Nv.3: Encantar Persona. Nv.5: Paso Brumoso. Nv.9: Dispersar Magia. Nv.13: Dimensión Puerta. Nv.17: Invocar Hada."
      },
      {
        n: "Golpes Espantosos",
        nv: 3,
        d: "Al golpear con arma: +1d4 daño psíquico (→1d6 en Nv.11). Una vez por turno por criatura."
      },
      {
        n: "Glamour Exótico",
        nv: 3,
        d: "Competencia en Engaño, Actuación o Persuasión. Añades mod SAB a pruebas de CAR."
      },
      {
        n: "Giro Seductor",
        nv: 7,
        d: "Ventaja en salvaciones contra Encantado y Asustado. Reacción: cuando tú o una criatura a 120 pies supera esa salvación, otra criatura a 120 pies supera SAB o queda Encantada o Asustada (tu elección)."
      },
      {
        n: "Refuerzos Feéricos",
        nv: 11,
        d: "Invocar Hada: sin materiales ni espacio 1/descanso largo. Sin concentración con duración de 1 minuto."
      },
      {
        n: "Viajero Brumoso",
        nv: 15,
        d: "Paso Brumoso sin espacio = mod SAB veces/descanso largo. Puedes llevar a una criatura voluntaria a 5 pies contigo."
      },
    ],

    "Guardián del Enjambre [TCE]": [
      {
        n: "Enjambre Reunido",
        nv: 3,
        d: "Te rodea un enjambre de espíritus de naturaleza. Al golpear con un arma, el enjambre inflige 1d6 de daño extra (→1d8 en Nv.11) del tipo que elijas (perforante, cortante o contundente). Además elige uno de estos efectos adicionales cuando el objetivo falla una tirada de salvación de FUE (CD conjuro): el objetivo es empujado hasta 15 pies horizontalmente; tú te mueves hasta 5 pies horizontalmente en la dirección que elijas; el objetivo cae Tumbado."
      },
      {
        n: "Magia del Guardián del Enjambre",
        nv: 3,
        d: "Aprendes el truco Mano de Mago (el enjambre toma la forma de las criaturas del enjambre). Conjuros adicionales siempre conocidos: Nv.3: Enredar. Nv.5: Web. Nv.9: Convocar Insectos. Nv.13: Infestación de Gusanos. Nv.17: Plaga de Insectos."
      },
      {
        n: "Marea Revuelta",
        nv: 7,
        d: "Cuando el enjambre te mueve como efecto de Enjambre Reunido, el enjambre te rodea de forma protectora: ganas media cobertura (+2 CA y tiradas de salvación de DES) hasta el inicio de tu siguiente turno. Además, el enjambre puede llevarte volando 5 pies."
      },
      {
        n: "Enjambre Poderoso",
        nv: 11,
        d: "El daño de Enjambre Reunido aumenta a 1d8. Si el objetivo falla la salvación de FUE y eliges el empuje, queda además Tumbado. Cuando el enjambre te mueve, ganas media cobertura."
      },
      {
        n: "Guerrero del Enjambre",
        nv: 15,
        d: "Puedes gastar un espacio de conjuro de Nv.1 o superior como AA para teletransportarte hasta 30 pies a un espacio que puedas ver (el enjambre te lleva). También puedes lanzar Plaga de Insectos sin espacio 1/descanso largo."
      },
    ],

    /* ── Fizban's Treasury of Dragons ── */
    "Guardián del Drake [FToD]": [
      {
        n: "Lazo con el Drake",
        nv: 3,
        d: "Como Acción puedes invocar un Drake Compañero (estadísticas propias en FToD). Su CA = 14 + bonificador de competencia. Sus PG = 5 × nivel de Explorador + mod CON. Actúa en tu iniciativa. Como AA puedes ordenarle Atacar, Dash, Disengage o Dodge. Si muere, puedes revivir gastando un espacio de conjuro de Nv.1 (recupera PG = 2 × nivel Explorador). Puedes elegir el tipo de daño elemental del drake (ácido, frío, fuego, rayo, veneno) al invocarlo o al terminar Descanso Largo."
      },
      {
        n: "Vínculo del Drake",
        nv: 3,
        d: "Mientras el drake esté activo, obtienes resistencia al tipo de daño elemental del drake."
      },
      {
        n: "Golpes Infundidos",
        nv: 7,
        d: "Cuando ordenas al drake atacar y golpea, el ataque inflige 1d6 extra del tipo elemental del drake. Tus propios ataques también infligen 1d6 extra del tipo elemental del drake mientras esté a 30 pies."
      },
      {
        n: "Guardián del Aliento",
        nv: 11,
        d: "Puedes ordenar al drake usar su Aliento como Acción (en lugar de Atacar): cono de 30 pies, daño = 4d6 del tipo elemental del drake (DEX o CON para reducir a la mitad, CD = 8 + comp + mod SAB). Usos = bonificador de competencia por Descanso Largo."
      },
      {
        n: "Montura del Drake",
        nv: 15,
        d: "El drake crece a tamaño Grande y puedes montarlo. Mientras estés montado, el drake puede usar su Aliento como Reacción cuando recibe daño. Además, cuando el drake mueve a tu orden, no provoca ataques de oportunidad."
      },
    ],

  }, // fin subclases
}; // fin CLASE_EXPLORADOR
