/* ══════════════════════════════════════════════════════════════════
   guerrero.js — Guerrero: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Explorer's Guide to Wildemount (EGtW)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Campeón                  [PHB 2014] / [PHB 2024]
     Maestro de Batalla       [PHB 2014] / [PHB 2024]
     Caballero Arcano         [PHB 2014] / [PHB 2024]
     Caballero del Psi        [TCE]      / [PHB 2024]
     Guerrero Rúnico          [TCE]      / [PHB 2024]
     Caballero Samurai        [XGtE]
     Tirador Arcano           [XGtE]
     Caballero Banneret       [SCAG]
     Caballero Echo           [EGtW]
     Caballero Graviturgo     [EGtW]
══════════════════════════════════════════════════════════════════ */

const CLASE_GUERRERO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Todas las armaduras y escudos. Todas las armas simples y marciales. Salvaciones: FUE y CON. Habilidades: elige 2 entre Acrobacias, Atletismo, Historia, Perspicacia, Intimidación, Percepción, Supervivencia y Trato con Animales."
    },
    {
      n: "Estilo de Combate",
      nv: 1,
      d: "Elige un estilo de combate especializado: Arquería (+2 a tiradas de ataque a distancia), Defensa (+1 CA con armadura), Duelo (+2 daño con arma de una mano si no empuñas otra arma), Armas a Dos Manos (repite 1 o 2 en dados de daño de armas a dos manos), Combate con Dos Armas (añades mod de característica al daño del ataque adicional de mano secundaria), Protección (Reacción: impones desventaja en ataque contra aliado a 5 pies si llevas escudo), Disparo Cegador [PHB 2024] (ignoras cobertura de la mitad y tres cuartos en ataques a distancia), Interposición [PHB 2024] (al ser golpeado, como Reacción reduces el daño en 1d10 + CON)."
    },
    {
      n: "Segundo Aliento",
      nv: 1,
      d: "Como Acción Adicional recuperas PG = 1d10 + nivel de Guerrero. 1/descanso corto o largo."
    },
    {
      n: "Oleada de Acción",
      nv: 2,
      d: "Puedes tomar una acción adicional en tu turno (además de la acción normal y la AA). 1/descanso corto o largo (→2/descanso corto o largo en Nv.17)."
    },
    {
      n: "Arquetipo Marcial",
      nv: 3,
      d: "Eliges tu subclase (Arquetipo Marcial). Otorga rasgos en Nv.3, 7, 10, 15 y 18."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.6, 8, 12, 14, 16 y 19. Puedes tomar una dote en su lugar. (El Guerrero tiene más ASIs que cualquier otra clase.)"
    },
    {
      n: "Ataque Extra",
      nv: 5,
      d: "Atacas dos veces con la acción de Atacar (→3 veces en Nv.11, →4 veces en Nv.20)."
    },
    {
      n: "Indomable",
      nv: 9,
      d: "Puedes repetir una tirada de salvación fallida. Debes usar el nuevo resultado. 1/descanso largo (→2 en Nv.13, →3 en Nv.17)."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (ARQUETIPOS MARCIALES)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Campeón [PHB 2014]": [
      {
        n: "Crítico Mejorado",
        nv: 3,
        d: "Tus ataques con arma consiguen un crítico con 19-20 en lugar de solo 20."
      },
      {
        n: "Atleta Extraordinario",
        nv: 7,
        d: "Añades la mitad de tu bonificador de competencia (redondeado arriba) a pruebas de FUE, DES o CON que no tengan ya competencia. Además, tu distancia de salto con carrera aumenta en pies = mod FUE."
      },
      {
        n: "Estilo de Combate Adicional",
        nv: 10,
        d: "Aprendes un segundo Estilo de Combate de los disponibles para el Guerrero."
      },
      {
        n: "Crítico Superior",
        nv: 15,
        d: "Tus ataques con arma consiguen un crítico con 18-20."
      },
      {
        n: "Superviviente",
        nv: 18,
        d: "Al inicio de cada uno de tus turnos, si tienes 1 PG o más pero igual o menos de la mitad de tus PG máximos, recuperas PG = 5 + mod CON."
      },
    ],

    "Maestro de Batalla [PHB 2014]": [
      {
        n: "Competencias del Estudiante de la Guerra",
        nv: 3,
        d: "Ganas competencia con una herramienta de artesano a tu elección. También aprendes a leer y escribir si no podías."
      },
      {
        n: "Superioridad de Combate",
        nv: 3,
        d: "Aprendes maniobras de combate que gastas con Dados de Superioridad (d8 → d10 Nv.10 → d12 Nv.18). Maniobras conocidas: 3 (Nv.3) → 5 (Nv.7) → 7 (Nv.10) → 9 (Nv.15). Dados de Superioridad: 4 (Nv.3) → 5 (Nv.7) → 6 (Nv.15). Se recuperan con descanso corto o largo. Ejemplos de maniobras: Ataque Que Desvía (añade el dado al daño y el objetivo debe superar FUE o moverse), Maniobra Distrayente (ventaja al próximo aliado que ataque al objetivo), Empujar (ataque que empuja), Desarmar, Provocar (compele al objetivo a atacarte), Esquivar en Terreno Difícil (muévete sin provocar), Instrucción Táctica (da el dado a un aliado), Menazar, Precisión Exacta (+dado a ataque), Contraataque (Reacción al ser atacado), Golpe Barredor, Maniobra de Finta, Golpe de Trompa, Golpe Preciso, Golpe Desarmador."
      },
      {
        n: "Conocer tu Enemigo",
        nv: 7,
        d: "Si observas a una criatura fuera del combate durante al menos 1 minuto, el DM te dice si es igual, superior o inferior a ti en: nivel/CR, FUE, DES, CON, CA, PG máximos y maniobras de clase si las tiene."
      },
      {
        n: "Superioridad de Combate Mejorada",
        nv: 10,
        d: "Tus Dados de Superioridad mejoran de d8 a d10."
      },
      {
        n: "Implacable",
        nv: 15,
        d: "Al usar Indomable para repetir una tirada fallida, también recuperas 1 Dado de Superioridad."
      },
      {
        n: "Superioridad de Combate Suprema",
        nv: 18,
        d: "Tus Dados de Superioridad mejoran de d10 a d12."
      },
    ],

    "Caballero Arcano [PHB 2014]": [
      {
        n: "Lanzamiento de Conjuros",
        nv: 3,
        d: "INT es tu característica de conjuro. Aprendes conjuros de la lista del Mago (un tercio lanzador). Trucos: 2 (Nv.3) → 3 (Nv.10). Conjuros conocidos: 3 (Nv.3) → escala hasta 13 (Nv.20). Al menos dos tercios deben ser de las escuelas de Abjuración y Evocación; el resto pueden ser de cualquier escuela. Espacios de conjuro: progresión de un tercio de lanzador."
      },
      {
        n: "Enlace con Arma",
        nv: 3,
        d: "Realizas un ritual de 1 hora para vincularte a hasta 2 armas. Un arma vinculada no puede ser desarmada y puedes invocarla a tu mano como AA a cualquier distancia (incluso entre planos)."
      },
      {
        n: "Golpe de Guerra",
        nv: 7,
        d: "Cuando usas tu acción para atacar, puedes lanzar un truco que tenga tiempo de lanzamiento de 1 acción como Acción Adicional."
      },
      {
        n: "Conjuro Evocado",
        nv: 10,
        d: "Cuando lanzas un conjuro de Abjuración de Nv.1+, ganas PG temporales = nivel del espacio + mod INT."
      },
      {
        n: "Golpe Arcano",
        nv: 15,
        d: "Cuando golpeas a una criatura con un ataque con arma, puedes gastar un espacio de conjuro para lanzar un conjuro de Nv.1-4 sobre ella como parte del mismo ataque. El conjuro surte efecto inmediatamente."
      },
      {
        n: "Carga de Conjuro",
        nv: 18,
        d: "Cuando usas Oleada de Acción, también puedes lanzar un conjuro cuyo tiempo de lanzamiento sea 1 acción como parte de esa misma oleada."
      },
    ],

    /* ── PHB 2024 ── */
    "Campeón [PHB 2024]": [
      {
        n: "Crítico Mejorado",
        nv: 3,
        d: "Tus ataques con arma consiguen un crítico con 19-20."
      },
      {
        n: "Atleta Extraordinario",
        nv: 7,
        d: "Tienes ventaja en pruebas de Iniciativa. Además, cuando saltas con carrera puedes añadir tu puntuación de FUE (no solo el modificador) a la distancia."
      },
      {
        n: "Estilo de Combate Adicional",
        nv: 10,
        d: "Aprendes un segundo Estilo de Combate."
      },
      {
        n: "Crítico Superior",
        nv: 15,
        d: "Tus ataques con arma consiguen un crítico con 18-20."
      },
      {
        n: "Superviviente",
        nv: 18,
        d: "Al inicio de tu turno con PG entre 1 y la mitad de tu máximo, recuperas PG = 5 + mod CON."
      },
    ],

    "Maestro de Batalla [PHB 2024]": [
      {
        n: "Superioridad de Combate",
        nv: 3,
        d: "Aprendes maniobras que gastas con Dados de Superioridad (d8 → d10 Nv.10 → d12 Nv.18). Maniobras conocidas: 3 (Nv.3) → 5 (Nv.7) → 7 (Nv.10) → 9 (Nv.15). Dados: 4 → 5 (Nv.7) → 6 (Nv.15). Recuperas todos con descanso corto o largo."
      },
      {
        n: "Estudiante de la Guerra",
        nv: 3,
        d: "Aprendes una habilidad o herramienta adicional a tu elección (puede ser cualquier herramienta de artesano o competencia de habilidad de la lista del Guerrero)."
      },
      {
        n: "Conocer tu Enemigo",
        nv: 7,
        d: "Como AA, analizas a una criatura visible: el DM te dice si es igual, superior o inferior a ti en dos características (FUE, DES, CON, INT, SAB, CAR, CA, PG, velocidad) de tu elección."
      },
      {
        n: "Superioridad de Combate Mejorada",
        nv: 10,
        d: "Dados de Superioridad mejoran a d10."
      },
      {
        n: "Implacable",
        nv: 15,
        d: "Cuando usas Indomable, recuperas también 1 Dado de Superioridad."
      },
      {
        n: "Superioridad de Combate Suprema",
        nv: 18,
        d: "Dados de Superioridad mejoran a d12."
      },
    ],

    "Caballero Arcano [PHB 2024]": [
      {
        n: "Lanzamiento de Conjuros",
        nv: 3,
        d: "INT es tu característica de conjuro. Un tercio lanzador (lista del Mago). Trucos: 2 (Nv.3) → 3 (Nv.10). Los conjuros de las escuelas de Abjuración y Evocación no cuentan contra el límite de conjuros conocidos."
      },
      {
        n: "Enlace con Arma",
        nv: 3,
        d: "Vinculo ritual a hasta 2 armas: no pueden ser desarmadas y puedes invocarlas a tu mano como AA."
      },
      {
        n: "Golpe de Guerra",
        nv: 7,
        d: "Cuando atacas con tu acción, puedes lanzar un truco de Mago como AA."
      },
      {
        n: "Conjuro Evocado",
        nv: 10,
        d: "Al lanzar un conjuro de Abjuración de Nv.1+, ganas PG temporales = nivel del espacio + mod INT."
      },
      {
        n: "Golpe Arcano",
        nv: 15,
        d: "Al golpear con un arma, puedes gastar un espacio para lanzar un conjuro de Nv.1-4 que surta efecto inmediatamente."
      },
      {
        n: "Carga de Conjuro",
        nv: 18,
        d: "Al usar Oleada de Acción, también puedes lanzar un conjuro de 1 acción como parte de la misma."
      },
    ],

    "Caballero del Psi [PHB 2024]": [
      {
        n: "Poderes Psíónicos",
        nv: 3,
        d: "INT es tu característica de conjuro para estos poderes. Ganas un Dado de Energía Psíónica (d6 → d8 Nv.5 → d10 Nv.11 → d12 Nv.17). Dados totales = mod INT + nivel Guerrero ÷ 2 (redondeado abajo). Se recuperan con descanso largo (recuperas uno con descanso corto). Poderes básicos gratuitos: Martillo Psíónico (ataque a distancia de fuerza 60 pies, 1d6 fuerza, INT para atacar), Escudo Telequinético (Reacción: +2 CA contra un ataque)."
      },
      {
        n: "Teletransporte Psíónico",
        nv: 3,
        d: "Cuando das un golpe con un arma, puedes gastar 1 Dado de Energía para teletransportarte hasta 30 pies a un espacio visible como parte del mismo ataque."
      },
      {
        n: "Protección Telequinética",
        nv: 7,
        d: "Puedes gastar 1 Dado de Energía como Reacción para añadir el resultado a la CA de un aliado a 30 pies contra un ataque. Además, al inicio de cada turno, si tienes Dados de Energía, ganas PG temporales = 1 Dado de Energía (sin gastarlo)."
      },
      {
        n: "Agarre Psíónico",
        nv: 10,
        d: "Como AA puedes gastar 2 Dados de Energía para aferrar telequinéticamente a una criatura a 30 pies: queda Aferrada durante 1 minuto (salvación INT CD = 8 + comp + mod INT para liberarse al inicio de cada turno). Mientras esté Aferrada puedes moverla hasta 30 pies como AA."
      },
      {
        n: "Explosión Psíónica",
        nv: 15,
        d: "Cuando golpeas con un ataque de arma, puedes gastar hasta 3 Dados de Energía: el ataque inflige daño de fuerza adicional = suma de los dados. Si el objetivo falla una salvación INT (CD = 8 + comp + mod INT), queda Aturdido hasta el inicio de tu siguiente turno."
      },
      {
        n: "Maestría Psíónica",
        nv: 18,
        d: "Recuperas todos tus Dados de Energía Psíónica al terminar un descanso corto (en lugar de solo uno). Además, cuando lanzas Proyectil Psíónico, puedes hacer que impacte a todos los enemigos en una línea de 30 pies (DEX CD para reducir a la mitad)."
      },
    ],

    "Guerrero Rúnico [PHB 2024]": [
      {
        n: "Forja de Runas",
        nv: 3,
        d: "Aprendes el idioma Gigante y aprendes a tallar 2 runas mágicas en armas, armaduras o escudos al terminar un Descanso Largo. Runas conocidas: 2 (Nv.3) → 3 (Nv.7) → 4 (Nv.10) → 5 (Nv.15). Ejemplos de runas: Runa del Fuego Gigante (bonificador de daño de fuego), Runa del Hielo Glacial (inmunidad a frío), Runa del Colmillo de Piedra (bonus a Atletismo), Runa de la Tormenta de la Colina (bonus a Intimidación y a empujar), Runa de la Nube de Tormenta (bonus a Engaño y posibilidad de vuelo), Runa de la Piedra de la Montaña (bonus a Perspicacia y resistencia). Cada runa también tiene un poder activo 1/descanso corto o largo."
      },
      {
        n: "Gigante de Combate",
        nv: 3,
        d: "Como AA puedes crecer a tamaño Grande (si el espacio lo permite) durante 1 minuto. Mientras eres Grande: ventaja en FUE, +1d6 al daño de ataques de FUE y puedes agarrar criaturas de tamaño Grande o menor. Usos = bonificador de competencia. Recarga con descanso largo."
      },
      {
        n: "Escudo de Runas",
        nv: 7,
        d: "Reacción: cuando un aliado a 60 pies es golpeado por un ataque, puedes obligar al atacante a repetir la tirada (debe usar el nuevo resultado). Usos = bonificador de competencia. Recarga con descanso largo."
      },
      {
        n: "Vigor Rúnico",
        nv: 10,
        d: "Las runas inscritas en tus objetos potencian tu cuerpo: ganas PG temporales = nivel Guerrero al activar Gigante de Combate. Además, mientras estés en forma de Gigante de Combate, ganas resistencia al tipo de daño de una runa inscrita (a tu elección)."
      },
      {
        n: "Maestro de Runas",
        nv: 15,
        d: "Puedes usar los poderes activos de tus runas dos veces por descanso corto o largo (en lugar de una)."
      },
      {
        n: "Runas del Titán",
        nv: 18,
        d: "Tu Gigante de Combate puede llevarte a tamaño Enorme. Siendo Enorme: alcance +5 pies adicional, +1d8 extra al daño de FUE y puedes agarrar criaturas de tamaño Enorme o menor."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Caballero Samurái [XGtE]": [
      {
        n: "Competencias Extra",
        nv: 3,
        d: "Ganas competencia en Historia, Perspicacia, Actuación o Persuasión (elige 1). También aprendes un idioma adicional a tu elección."
      },
      {
        n: "Espíritu de Combate",
        nv: 3,
        d: "Como Acción Adicional puedes otorgarte ventaja en todas las tiradas de ataque con arma hasta el final del turno actual. Si golpeas a una criatura con ese espíritu activo, ganas PG temporales = 5 + mod SAB. Usos = bonificador de competencia. Recarga con descanso largo."
      },
      {
        n: "Compostura Elegante",
        nv: 7,
        d: "Cuando haces una prueba de CAR, puedes usar SAB en su lugar."
      },
      {
        n: "Indomable Determinación",
        nv: 10,
        d: "Cuando usas Indomable para repetir una salvación fallida, también ganas ventaja en esa salvación repetida."
      },
      {
        n: "Rápido como el Rayo",
        nv: 15,
        d: "Cuando usas Oleada de Acción, también puedes hacer un ataque con arma adicional con esa Acción Adicional. Este ataque puede ser parte de la misma acción de Atacar o del Espíritu de Combate."
      },
      {
        n: "Resistencia del Samurái",
        nv: 18,
        d: "Si comienzas tu turno con 0 PG y no estás muerto, puedes recuperar PG = 5 × bonificador de competencia. No puedes usar este rasgo si caíste a 0 PG en el turno anterior. 1/descanso largo."
      },
    ],

    "Tirador Arcano [XGtE]": [
      {
        n: "Trucos del Tirador Arcano",
        nv: 3,
        d: "Aprendes 2 trucos de Tirador Arcano (los conocidos aumentan a 4 en Nv.7, 6 en Nv.15, 8 en Nv.18). Los trucos se usan como AA cuando haces un ataque a distancia con arma, modificando ese ataque. Ejemplos: Flecha Errante (ignora cobertura y puede doblar esquinas), Flecha Anestésica (objetivo supera CON o cae Incapacitado 1 minuto), Flecha de Grilletes (objetivo supera FUE o queda Aferrado), Flecha de Sombras (objetivo queda Cegado), Flecha Explosiva (explosión en radio 10 pies, DEX para resistir), Flecha de Búsqueda (rastrear al objetivo 24h), Flecha Temblorosa (el objetivo pierde el movimiento en su próximo turno), Flecha Cortante (otro objetivo a 5 pies del primero recibe daño)."
      },
      {
        n: "Magia Curvilínea",
        nv: 3,
        d: "Cuando atacas a distancia y un aliado está adyacente al objetivo, no tienes desventaja por esa cercanía. Además ignoras la cobertura de la mitad y tres cuartos en ataques a distancia."
      },
      {
        n: "Siempre Preparado",
        nv: 7,
        d: "Cuando lanzas la iniciativa y no tienes Dados de Tirador Arcano disponibles, recuperas 1d4 de ellos."
      },
      {
        n: "Trucos del Tirador Arcano Mejorados",
        nv: 7,
        d: "Los dados de daño adicionales de tus trucos aumentan. Aquellos que daban 2d6 ahora dan 4d6; los que daban 1d8 ahora dan 2d8."
      },
      {
        n: "Flecha Mágica",
        nv: 10,
        d: "Tus ataques a distancia con arma cuentan como mágicos a efectos de superar resistencias e inmunidades."
      },
      {
        n: "Maestro del Tirador Arcano",
        nv: 15,
        d: "Puedes usar dos trucos de Tirador Arcano distintos con el mismo ataque (ambos efectos se aplican al mismo proyectil)."
      },
      {
        n: "Flecha del Destino",
        nv: 18,
        d: "Ganas 2 Dados de Tirador Arcano adicionales. Además, tus trucos que requieren salvación tienen la CD incrementada en 2 permanentemente."
      },
    ],

    /* ── Sword Coast Adventurer's Guide ── */
    "Caballero Banneret [SCAG]": [
      {
        n: "Límite de Maniobras",
        nv: 3,
        d: "Cuando uses Segundo Aliento, también puedes otorgar a criaturas amistosas que te puedan ver a 60 pies PG temporales = tu tirada de Segundo Aliento ÷ 2. Además, aprendes una maniobra de Maestro de Batalla (Instrucción Táctica o Maniobra Distrayente), con 1 Dado de Superioridad d6 que se recupera con descanso corto."
      },
      {
        n: "Grito de Batalla",
        nv: 3,
        d: "Como Acción Adicional puedes gritar inspirando a aliados amistosos a 60 pies que puedan oírte: hasta mod CAR (mínimo 1) de ellos pueden usar su Reacción para realizar un ataque con arma. Usos = mod CAR. Recarga con descanso largo."
      },
      {
        n: "Escudo del Liderazgo",
        nv: 7,
        d: "Cuando usas Grito de Batalla, también puedes darte a ti mismo o a un aliado a 30 pies PG temporales = nivel Guerrero + mod CAR. Estos PG temporales duran 1 hora."
      },
      {
        n: "Presencia Inspiradora",
        nv: 10,
        d: "Los aliados que realizaron el ataque gracias a tu Grito de Batalla añaden tu mod CAR al daño de ese ataque."
      },
      {
        n: "Mando Vigorizante",
        nv: 15,
        d: "Cuando usas Oleada de Acción, puedes otorgar a un aliado visible a 60 pies la posibilidad de tomar también una acción adicional en su próximo turno (la próxima vez que actúe en este combate)."
      },
      {
        n: "Mando Maestro",
        nv: 18,
        d: "Los usos de Grito de Batalla son ilimitados. Además, cuando un aliado ataca gracias a Grito de Batalla, si consigue un crítico o reduce al objetivo a 0 PG, tú recuperas 1 uso de Segundo Aliento."
      },
    ],

    /* ── Explorer's Guide to Wildemount ── */
    "Caballero Eco [EGtW]": [
      {
        n: "Avatar del Eco",
        nv: 3,
        d: "Como Acción Adicional puedes invocar un eco místico en un espacio vacío a 15 pies. El eco es inmaterial (CA = 13, PG = 1 — cualquier daño lo destruye), tiene tu apariencia y actúa en tu iniciativa. Puedes teletransportarte al espacio del eco como AA (o como parte de moverte hacia él). El eco dura hasta que lo destruyan, lo desconvoques como Acción Adicional, o estés Incapacitado. 1/descanso corto o largo (adicionales gastan un uso de Indomable)."
      },
      {
        n: "Ataque del Eco",
        nv: 3,
        d: "Cuando realizas el ataque de oportunidad, puedes en su lugar atacar desde la posición del eco (usando el eco como origen). Además, cuando usas la acción de Atacar, puedes hacer que uno de los ataques se origine desde el espacio del eco."
      },
      {
        n: "Legión de Uno",
        nv: 7,
        d: "Puedes invocar dos ecos simultáneamente. Si ambos están activos cuando muere uno, el otro sobrevive. Cuando uno de tus ecos recibe daño, puedes usar tu Reacción para destruirlo antes de que muera, absorbiendo la energía: ganas PG temporales = 2d6 + nivel Guerrero."
      },
      {
        n: "Desvanecerse en lo No-Visto",
        nv: 10,
        d: "Cuando te teletransportas al espacio del eco, puedes volverte Invisible hasta el inicio de tu siguiente turno."
      },
      {
        n: "Presencia Inquietante",
        nv: 15,
        d: "Cuando atacas a una criatura, puedes gastar un uso de Indomable para hacer que esa criatura tenga desventaja en la próxima tirada de ataque o salvación que haga antes del fin de su siguiente turno."
      },
      {
        n: "Legado del Eco",
        nv: 18,
        d: "Puedes teletransportarte al espacio del eco sin límite de veces por turno como parte de tu movimiento. Cada vez que te teletransportas a un eco, puedes hacer que todos los ataques que realices hasta el inicio de tu siguiente turno ignoren la cobertura."
      },
    ],

    "Caballero Graviturgo [EGtW]": [
      {
        n: "Conjuros del Graviturgo",
        nv: 3,
        d: "INT es tu característica de conjuro para estos poderes. Conjuros siempre preparados — Nv.3: Detect Magic, Slow. Nv.5: Levitate, Misty Step. Nv.9: Fly, Haste. Nv.13: Otiluke's Resilient Sphere, Gravity Sinkhole. Nv.17: Bigby's Hand, Temporal Shunt."
      },
      {
        n: "Manipulación Gravitatoria",
        nv: 3,
        d: "Aprendes el truco Mage Hand. Además, como AA puedes aumentar o disminuir la gravedad en torno a una criatura a 30 pies: si aumentas (Gravity Surge) inflige 1d10 de fuerza al inicio de su turno durante 1 minuto; si disminuyes (Gravity Lapse) la criatura queda suspendida (vuelo 0, velocidad de caminar 0) durante 1 minuto. Ambos efectos permiten tirada de salvación CON (CD = 8 + comp + mod INT) al inicio de cada turno. 1/descanso corto o largo."
      },
      {
        n: "Paso Gravitatorio",
        nv: 7,
        d: "Como AA puedes lanzar Misty Step sin gastar espacio de conjuro. 1/descanso largo. Además, cuando lanzas Misty Step de cualquier forma, criaturas a 5 pies de tu punto de origen o destino reciben 2d8 de daño de fuerza (DEX para reducir a la mitad)."
      },
      {
        n: "Barrera de Masa",
        nv: 10,
        d: "Reacción: cuando tú o un aliado a 30 pies vais a recibir daño contundente, de fuerza o de trueno, podéis usar Reacción para reducirlo en 1d10 + INT. 1/descanso corto o largo."
      },
      {
        n: "Maestro de la Gravedad",
        nv: 15,
        d: "Puedes lanzar Fly sobre ti mismo a voluntad sin gastar espacio (duración 10 minutos). Además, los ataques a distancia contra ti tienen desventaja mientras vueles con este rasgo."
      },
      {
        n: "Singularidad de la Gravedad",
        nv: 18,
        d: "Como Acción creas una singularidad gravitatoria en un punto a 60 pies. Durante 1 minuto: criaturas en radio 20 pies al inicio de su turno superan salvación FUE (CD = 8 + comp + mod INT) o son arrastradas 10 pies hacia el centro y reciben 4d10 de fuerza. El terreno en el área es difícil. 1/descanso largo."
      },
    ],

  }, // fin subclases
}; // fin CLASE_GUERRERO
