/* ══════════════════════════════════════════════════════════════════
   brujo.js — Brujo: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Sword Coast Adventurer's Guide (SCAG)
     Explorer's Guide to Wildemount (EGtW)
     Guildmasters' Guide to Ravnica (GGtR)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (13 entradas):
     El Archidiablo           [PHB 2014] / [PHB 2024]
     El Gran Antiguo          [PHB 2014] / [PHB 2024]
     La Reina de las Hadas    [PHB 2014] / [PHB 2024]
     El Inmortal              [XGtE]
     El Celestial             [XGtE]     / [PHB 2024]
     El Genio                 [TCE]
     El Guerrero Hexblade     [SCAG]
     La Entidad de la Profundidad  [EGtW]
     El Ojo Supremo           [GGtR]
══════════════════════════════════════════════════════════════════ */

const CLASE_BRUJO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras. Armas simples. Salvaciones: SAB y CAR. Habilidades: elige 2 entre Arcanos, Engaño, Historia, Intimidación, Investigación, Naturaleza y Religión."
    },
    {
      n: "Patrón Sobrenatural",
      nv: 1,
      d: "Eliges tu subclase (Patrón Sobrenatural) al Nv.1. Otorga conjuros de patrón (siempre preparados, no cuentan contra el límite), y rasgos en Nv.1, 6, 10 y 14."
    },
    {
      n: "Magia de Pacto",
      nv: 1,
      d: "CAR es tu característica de conjuro (CD = 8 + comp + mod CAR). El Brujo tiene muy pocos espacios de conjuro pero todos son del nivel máximo disponible. Espacios de Pacto: 1 (Nv.1) → 2 (Nv.2) → 2 de Nv.2 (Nv.3) → 2 de Nv.3 (Nv.5) → 2 de Nv.4 (Nv.7) → 2 de Nv.5 (Nv.9) → 3 de Nv.5 (Nv.11) → 4 de Nv.5 (Nv.17). Los espacios se recuperan con descanso corto o largo. Conjuros conocidos: 2 (Nv.1) → escala hasta 15 (Nv.20). Trucos conocidos: 2 → 3 (Nv.4) → 4 (Nv.10)."
    },
    {
      n: "Invocaciones Sobrenaturales",
      nv: 2,
      d: "Aprendes invocaciones de una lista extensa que potencian tus capacidades. Número de invocaciones: 2 (Nv.2) → 3 (Nv.5) → 4 (Nv.7) → 5 (Nv.9) → 6 (Nv.12) → 7 (Nv.15) → 8 (Nv.18). Puedes cambiar una invocación al subir de nivel. Ejemplos: Visión del Diablo (visión en oscuridad hasta 120 pies), Engaño de Armadura (lanzas Armadura de Mago a voluntad), Ojo Ávido (lanzas Identificar como ritual), Reprensión Oscura (contraataque que inflige daño)."
    },
    {
      n: "Merced del Pacto",
      nv: 3,
      d: "Eliges el tipo de vínculo sobrenatural con tu patrón: Pacto de la Cadena — lanzas Encontrar Familiar; tu familiar puede ser un Impling, Pseudodragón, Quasit o Sprite; puede atacar en tu lugar con su Reacción cuando lanzas un conjuro. Pacto de la Hoja — recibes un libro que contiene dos conjuros de trucos de cualquier clase; también copias conjuros rituales en él. Pacto de la Cuchilla — convocas un arma mágica en tu mano como Acción; cuenta como mágica y usas CAR para atacar; desaparece si sueltas o muere. Pacto del Talismán [TCE] — creas un amuleto que otorga a su portador un bonus = mod PB a pruebas de característica fallidas una vez por descanso largo."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Conocimiento Místico",
      nv: 11,
      d: "Aprendes un conjuro de Mago de Nv.6 o inferior. Puedes lanzarlo una vez sin gastar espacio de conjuro. Se recupera con descanso largo. En Nv.13 aprendes un conjuro de Nv.7 o inferior, en Nv.15 uno de Nv.8 o inferior y en Nv.17 uno de Nv.9 o inferior (cada uno 1/descanso largo)."
    },
    {
      n: "Arcanum Místico",
      nv: 11,
      d: "(PHB 2014) Elige un conjuro de Nv.6 de la lista del Brujo. Puedes lanzarlo una vez sin espacio (se recupera con descanso largo). En Nv.13: conjuro Nv.7. Nv.15: Nv.8. Nv.17: Nv.9."
    },
    {
      n: "Maestría del Brujo",
      nv: 20,
      d: "(PHB 2014) Puedes elegir cuatro invocaciones menores: Engaño de Armadura, Ojos del Hechicero Perverso, Signos del Paso del Antiguo y Visión del Diablo. Puedes usarlas a voluntad sin coste."
    },
    {
      n: "Épico del Patrón [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Puedes lanzar el conjuro de Nv.9 de tu patrón una vez sin gastar espacio. Además, cuando lanzas un conjuro con un espacio de Nv.5, puedes lanzar un segundo conjuro de Nv.5 o inferior como Acción Adicional sin coste. 1/descanso largo."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (PATRONES SOBRENATURALES)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "El Archidiablo [PHB 2014]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Orden del Campo de Batalla, Reprensión Infernal. Nv.2: Visión en la Oscuridad, Rayo de Debilidad. Nv.3: Bola de Fuego, Muro de Fuego. Nv.4: Muro de Fuego, Mano Arcana de Evard. Nv.5: Llama, Escudriñar."
      },
      {
        n: "Bendición del Diablo",
        nv: 1,
        d: "Cuando reduces a una criatura a 0 PG, ganas PG temporales = mod CAR + nivel de Brujo."
      },
      {
        n: "Fortuna del Diablo",
        nv: 6,
        d: "Puedes añadir tu bonificador de competencia a cualquier tirada de salvación donde no lo tuvieras ya. 1/descanso corto o largo."
      },
      {
        n: "Regateo Infernal",
        nv: 10,
        d: "Cuando una criatura lanza un conjuro en un aliado visible a 60 pies, puedes usar tu Reacción para imponerle desventaja en la tirada de ataque o dar ventaja a la tirada de salvación del aliado."
      },
      {
        n: "Inmunidad al Fuego",
        nv: 10,
        d: "Eres inmune al daño de fuego."
      },
      {
        n: "Marca del Diablo",
        nv: 14,
        d: "Puedes lanzar Verdadera Forma Polimorfista sobre ti mismo (transformándote en un Archidiablo de CR 13 o inferior). Mientras dures transformado mantienes tu alineación y personalidad. 1/descanso largo."
      },
    ],

    "El Gran Antiguo [PHB 2014]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Detección de Pensamientos, Proyectil Mágico Dissonant. Nv.2: Detección de Pensamientos, Susurros Fantasmales. Nv.3: Verborrea, Miedo. Nv.4: Dominar Bestia, Mano Arcana de Evard. Nv.5: Dominar Persona, Telekinesis."
      },
      {
        n: "Mente Despierta",
        nv: 1,
        d: "Tu poder alienígena te da la capacidad de hablar telepáticamente con cualquier criatura a 30 pies que conozcas un idioma. No necesitas compartir idioma. La criatura puede responderte telepáticamente si decide hacerlo."
      },
      {
        n: "Defensa Anímica",
        nv: 6,
        d: "Cuando una criatura que puedas ver intenta leer tu mente o cuando sufres daño psíquico, puedes usar tu Reacción para crear un escudo mental. La criatura sufre daño psíquico = 5 × nivel de Brujo y queda Aturdida hasta el final de su siguiente turno. 1/descanso corto o largo."
      },
      {
        n: "Hilo de Conciencia",
        nv: 10,
        d: "Puedes lanzar Telepatía (sin componentes) a voluntad. Además, mientras el conjuro esté activo, puedes usar una Acción Adicional para percibir a través de los sentidos de tu objetivo telepático."
      },
      {
        n: "Crea la Locura",
        nv: 14,
        d: "Puedes irradiar una ola de locura alienígena. Como Acción, cada criatura a 30 pies debe superar una salvación CAR (CD conjuro) o quedará bajo un efecto de locura a corto plazo (d10 en la tabla de Locura a Corto Plazo del DMG) durante 1 minuto. 1/descanso largo."
      },
    ],

    "La Reina de las Hadas [PHB 2014]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Imagen Silenciosa, Dormir. Nv.2: Luz de las Hadas, Phantasmal Force. Nv.3: Parpadeo, Planta Vegetal. Nv.4: Dominar Bestia, Confusión. Nv.5: Dominar Persona, Seeming."
      },
      {
        n: "Fey Presence",
        nv: 1,
        d: "Como Acción, tu presencia feérica irradia en un cubo de 10 pies desde ti. Cada criatura en el área debe superar una salvación SAB (CD conjuro) o quedará Encantada o Asustada por ti hasta el final de tu siguiente turno. 1/descanso corto o largo."
      },
      {
        n: "Paso Fantasmal",
        nv: 6,
        d: "Como Acción Adicional puedes teletransportarte hasta 30 pies a un espacio desocupado visible. Usos = mod CAR (mínimo 1). Se recuperan con descanso largo."
      },
      {
        n: "Beguiling Defenses",
        nv: 10,
        d: "Eres inmune a ser Encantado. Cuando una criatura intenta encantarte, puedes usar tu Reacción para reflejar el efecto: la criatura debe superar la misma salvación o quedará Encantada por ti durante 1 minuto."
      },
      {
        n: "Dark Delirium",
        nv: 14,
        d: "Como Acción, hundes a una criatura visible a 60 pies en una fantasía ilusoria. Debe superar una salvación SAB (CD conjuro) o quedará Encantada o Asustada (a tu elección) durante 1 minuto. Al inicio de cada turno la criatura se encuentra en una ilusión que la incapacita; puede repetir la salvación al final de cada turno. 1/descanso largo."
      },
    ],

    /* ── PHB 2024 ── */
    "El Archidiablo [PHB 2024]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Reprensión Infernal, Orden del Campo de Batalla. Nv.2: Marca del Cazador, Rayo de Debilidad. Nv.3: Bola de Fuego, Escudriñar. Nv.4: Muro de Fuego, Destierro. Nv.5: Llama, Dominar Persona."
      },
      {
        n: "Bendición del Diablo",
        nv: 1,
        d: "Cuando reduces a 0 PG a una criatura, ganas PG temporales = mod CAR + nivel de Brujo (mínimo 1)."
      },
      {
        n: "Fortuna del Diablo",
        nv: 6,
        d: "Añades tu bonificador de competencia a cualquier tirada de salvación en la que no lo tengas ya. 1/descanso corto o largo."
      },
      {
        n: "Inmunidad al Fuego",
        nv: 10,
        d: "Eres inmune al daño de fuego."
      },
      {
        n: "Regateo Infernal",
        nv: 10,
        d: "Reacción: cuando un aliado visible a 60 pies es atacado por un conjuro, le concedes ventaja en la salvación o impones desventaja en la tirada de ataque del lanzador."
      },
      {
        n: "Forma del Diablo",
        nv: 14,
        d: "Como Acción te transformas en forma diabólica (como el rasgo anterior Verdadera Forma Polimorfista sobre ti mismo, Archidiablo CR 13 o inferior). Mantienes personalidad. 1/descanso largo."
      },
    ],

    "El Gran Antiguo [PHB 2024]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Detectar Pensamientos, Susurros Fantasmales. Nv.2: Detectar Pensamientos, Fantasía Brutal. Nv.3: Clairvoyance, Miedo. Nv.4: Dominar Bestia, Tentáculos de Evard. Nv.5: Dominar Persona, Telekinesis."
      },
      {
        n: "Mente Despierta",
        nv: 1,
        d: "Hablas telepáticamente con cualquier criatura a 30 pies que conozcas un idioma. No necesitáis compartir idioma. La criatura puede responderte si lo desea."
      },
      {
        n: "Comprensión Entrópica",
        nv: 1,
        d: "Cuando una criatura realiza una tirada de ataque contra ti, puedes usar tu Reacción para imponer desventaja en esa tirada. 1/descanso corto o largo."
      },
      {
        n: "Defensa Anímica",
        nv: 6,
        d: "Reacción: cuando sufres daño psíquico o una criatura lee tu mente, le infligen daño psíquico = 5 × nivel Brujo y la Aturdes hasta el final de su siguiente turno. 1/descanso corto o largo."
      },
      {
        n: "Hilo de Conciencia",
        nv: 10,
        d: "Lanzas Telepatía a voluntad sin componentes. Como AA puedes percibir a través de los sentidos de tu objetivo telepático."
      },
      {
        n: "Crea la Locura",
        nv: 14,
        d: "Acción: criaturas a 30 pies superan salvación CAR (CD conjuro) o reciben un efecto de locura a corto plazo durante 1 minuto. 1/descanso largo."
      },
    ],

    "La Reina de las Hadas [PHB 2024]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Dormir, Imagen Silenciosa. Nv.2: Luz de las Hadas, Phantasmal Force. Nv.3: Planta Vegetal, Parpadeo. Nv.4: Confusión, Dominar Bestia. Nv.5: Dominar Persona, Seeming."
      },
      {
        n: "Presencia Feérica",
        nv: 1,
        d: "Acción: criaturas en cubo de 10 pies desde ti superan salvación SAB (CD conjuro) o quedan Encantadas o Asustadas hasta el fin de tu siguiente turno. 1/descanso corto o largo."
      },
      {
        n: "Paso Fantasmal",
        nv: 6,
        d: "Como AA: teletransportación hasta 30 pies a espacio visible. Usos = mod CAR (mínimo 1). Recarga con descanso largo."
      },
      {
        n: "Defensas Seductoras",
        nv: 10,
        d: "Inmunidad a Encantamiento. Reacción: cuando intentan encantarte, refleja el efecto al lanzador (salvación SAB o queda Encantado por ti 1 minuto)."
      },
      {
        n: "Delirio Oscuro",
        nv: 14,
        d: "Acción: una criatura a 60 pies (salvación SAB o Encantada/Asustada 1 minuto, incapacitada en su ilusión). Puede repetir la salvación al final de cada turno. 1/descanso largo."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "El Inmortal [XGtE]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Palabra de Curación, Falso Vida. Nv.2: Blindness/Deafness, Silencio. Nv.3: Aura de Vitalidad, Hablar con los Muertos. Nv.4: Muerte Apacible, Piel de Piedra. Nv.5: Muerte Apacible en Masa, Modificar Memoria."
      },
      {
        n: "Entre la Vida y la Muerte",
        nv: 1,
        d: "Tus PG máximos aumentan en 1 por cada nivel de Brujo. Cuando lanzas un conjuro de Nv.1+ que restaure PG a una criatura, esa criatura recupera PG adicionales = 2 + el nivel del espacio."
      },
      {
        n: "Maldición Inmortal",
        nv: 6,
        d: "Cuando una criatura cae a 0 PG a 60 pies, puedes usar tu Reacción para que recupere PG = dado de vida del Brujo (d8) + mod CAR. Alternatively, puedes hacer que otra criatura a 60 pies pierda esa misma cantidad de PG (salvación CON CD conjuro para reducir a la mitad). Usos = mod CAR. Recarga con descanso largo."
      },
      {
        n: "Tocado por la Muerte",
        nv: 10,
        d: "Cuando golpeas a una criatura con un ataque de arma, puedes gastar un espacio de Pacto para infligir daño necrótico adicional = 2d8 × nivel del espacio. 1/turno."
      },
      {
        n: "Inmortalidad",
        nv: 14,
        d: "Cuando caes a 0 PG, puedes usar tu Reacción para quedarte en 1 PG. La criatura que te golpeó recibe daño necrótico = 2d10 + nivel de Brujo. 1/descanso largo. Además, envejeces a décima parte de la velocidad normal."
      },
    ],

    "El Celestial [XGtE]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Curar Heridas, Luz de las Hadas. Nv.2: Llama, Restauración Menor. Nv.3: Aura de Vitalidad, Luz del Día. Nv.4: Guardián de la Fe, Muro de Fuego. Nv.5: Llama (5º), Curar Heridas en Masa."
      },
      {
        n: "Llama Curativa",
        nv: 1,
        d: "Cuando lanzas un conjuro de Nv.1+ de la lista del Brujo, ganas PG temporales = nivel del espacio + mod CAR."
      },
      {
        n: "Trucos de Luz",
        nv: 1,
        d: "Aprendes los trucos Luz y Luz de las Hadas (además de los trucos normales del Brujo). Cuentan como conjuros de Brujo para ti."
      },
      {
        n: "Presencia Radiante",
        nv: 6,
        d: "Como Acción Adicional gastas un uso de Inspiración Bárdica (o un espacio de Pacto) para curar a una criatura a 60 pies = 1d6 × nivel de Brujo. Usos = mod CAR. Recarga con descanso largo."
      },
      {
        n: "Alma Celestial",
        nv: 10,
        d: "Resistencia a daño radiante y necrótico. Cuando lanzas un conjuro curativo de Nv.1+ sobre una criatura que no seas tú, puedes también curarte a ti mismo la misma cantidad."
      },
      {
        n: "Fulgor Celestial",
        nv: 14,
        d: "Como Acción emites un fulgor de luz celestial. Cada criatura hostil a 30 pies sufre daño radiante = nivel de Brujo + mod CAR (salvación CON para reducir a la mitad). Los aliados a 30 pies recuperan PG = la mitad del daño infligido. 1/descanso largo."
      },
    ],

    /* ── PHB 2024 ── */
    "El Celestial [PHB 2024]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Curar Heridas, Luz de las Hadas. Nv.2: Restauración Menor, Llama. Nv.3: Aura de Vitalidad, Luz del Día. Nv.4: Guardián de la Fe, Muro de Fuego. Nv.5: Curar Heridas en Masa, Llama (5°)."
      },
      {
        n: "Llama Curativa",
        nv: 1,
        d: "Al lanzar un conjuro de Brujo de Nv.1+, ganas PG temporales = nivel del espacio + mod CAR."
      },
      {
        n: "Trucos Celestiales",
        nv: 1,
        d: "Aprendes los trucos Luz y Luz de las Hadas, que no cuentan contra tu límite de trucos conocidos."
      },
      {
        n: "Curación Celestial",
        nv: 6,
        d: "Gastas un espacio de Pacto como AA para curar a una criatura a 60 pies = 1d8 × nivel del espacio + mod CAR."
      },
      {
        n: "Alma Celestial",
        nv: 10,
        d: "Resistencia a daño radiante y necrótico. Al lanzar un conjuro curativo de Nv.1+ sobre otro, también te curas a ti mismo la misma cantidad."
      },
      {
        n: "Fulgor Celestial",
        nv: 14,
        d: "Acción: daño radiante a criaturas hostiles a 30 pies = nivel Brujo + mod CAR (salvación CON para reducir); aliados a 30 pies recuperan PG = mitad del daño. 1/descanso largo."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "El Genio [TCE]": [
      {
        n: "Tipo de Genio y Conjuros de Patrón",
        nv: 1,
        d: "Elige el tipo de genio (determina el daño base y los conjuros): Dao (perforante/contundente) — Nv.1: Detectar el Mal y el Bien, Piel de Piedra. Nv.2: Manos de Piedra, Piel de Piedra. Nv.3: Planta Vegetal, Muro de Piedra. Nv.4: Fabricar, Moldear Piedra. Nv.5: Creación, Muro de Piedra. Djinn (trueno/rayo) — conjuros de viento y relámpago. Efreeti (fuego) — conjuros de fuego y calor. Marid (frío) — conjuros de agua y frío."
      },
      {
        n: "Vasija del Genio",
        nv: 1,
        d: "Creas una vasija mágica especial (tu foco de pacto). Como Acción Adicional puedes entrar en la vasija si eres Mediano o menor y el espacio es suficiente. Dentro tienes velocidad 0 pero te beneficias de cobertura total. Puedes salir como AA. La vasija tiene CA = 10 + mod CAR y PG = nivel Brujo + mod CAR. Si se destruye puedes crear otra en 1 hora."
      },
      {
        n: "Conocimiento del Genio",
        nv: 1,
        d: "Ganas competencia con una habilidad o herramienta de tu elección. Al subir de nivel puedes cambiarla."
      },
      {
        n: "Invocación del Genio",
        nv: 6,
        d: "Como Acción puedes invocar el poder de tu patrón para rodear a un aliado (o a ti) de energía del tipo de tu genio. La criatura gana resistencia al tipo de daño de tu genio durante 1 hora. Usos = mod CAR. Recarga con descanso largo."
      },
      {
        n: "Cuerpo de Genio",
        nv: 10,
        d: "Ganas resistencia permanente al tipo de daño de tu genio. Además, mientras estés dentro de tu vasija, eres inmune a ese tipo de daño."
      },
      {
        n: "Verdadero Nombre del Genio",
        nv: 14,
        d: "Has aprendido el verdadero nombre de tu patrón. Puedes lanzar Deseo una vez sin gastar espacio de conjuro. 1/1d4 descansos largos."
      },
    ],

    /* ── Sword Coast Adventurer's Guide ── */
    "El Guerrero Hexblade [SCAG]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Escudo, Marcado por el Conjuro. Nv.2: Arma Espiritual, Ceguera/Sordera. Nv.3: Golpe de Relámpago, Escudo del Guardián. Nv.4: Fantoche, Piel de Piedra. Nv.5: Cono de Frío, Escudriñar."
      },
      {
        n: "Maldición del Hexblade",
        nv: 1,
        d: "Como Acción Adicional maldices a una criatura visible a 30 pies durante 1 minuto. Mientras esté maldita: bonus de competencia a tiradas de daño contra ella, golpe crítico en 19-20 con ataques contra ella, y si muere mientras la maldición está activa recuperas PG = nivel Brujo + mod CAR. 1/descanso corto o largo."
      },
      {
        n: "Combatiente Hexblade",
        nv: 1,
        d: "Ganas competencia con armas marciales, escudos y armaduras medias. Cuando atacas con un arma de una sola mano (o con tu Pacto de la Cuchilla), puedes usar CAR en lugar de FUE o DES para la tirada de ataque y de daño."
      },
      {
        n: "Maldición Hexblade Mejorada",
        nv: 6,
        d: "Cuando aplicas la Maldición del Hexblade, el objetivo también recibe 1d6 de daño psíquico al inicio de cada uno de sus turnos (salvación CAR CD conjuro para evitarlo)."
      },
      {
        n: "Armadura del Hexes",
        nv: 10,
        d: "Aprendes el conjuro Armadura de Agathys. Puedes lanzarlo sin gastar espacio una vez por descanso largo. Mientras la armadura esté activa, eres inmune a los efectos de Asustado."
      },
      {
        n: "Maestro del Hexblade",
        nv: 14,
        d: "Cuando lanzas la Maldición del Hexblade, puedes gastar un espacio de Pacto para potenciarla: el daño al inicio de turno sube a 3d6 y el rango crítico se expande a 18-20. Además, cuando la maldición se transfiere a una nueva criatura, el objetivo anterior recibe 3d6 de daño psíquico sin salvación."
      },
    ],

    /* ── Explorer's Guide to Wildemount ── */
    "La Entidad de la Profundidad [EGtW]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Crear o Destruir Agua, Rayo de Debilidad. Nv.2: Oscuridad, Silencio. Nv.3: Hablar con los Muertos, Caminar por el Agua. Nv.4: Dominar Bestia, Evard's Black Tentacles. Nv.5: Comunión con la Naturaleza, Conjuro de Nube."
      },
      {
        n: "Susurros de las Profundidades",
        nv: 1,
        d: "Puedes respirar bajo el agua. Tienes velocidad de natación = tu velocidad de caminar. Aprendes el idioma Profundo (Deep Speech)."
      },
      {
        n: "Maldición de la Entidad",
        nv: 1,
        d: "Como Acción Adicional maldices a una criatura visible a 30 pies durante 1 hora. Las criaturas que golpeen al maldito reciben 1d6 de daño psíquico (el objetivo lo sufre). La maldición termina si el objetivo cae inconsciente. Usos = mod CAR. Recarga con descanso largo."
      },
      {
        n: "Presencia de la Profundidad",
        nv: 6,
        d: "Como Acción irradias una aura de terror oceánico en 30 pies durante 1 minuto. Criaturas hostiles en el área al inicio de su turno deben superar salvación SAB (CD conjuro) o quedar Asustadas hasta el final de ese turno. 1/descanso largo."
      },
      {
        n: "Resistencia de las Profundidades",
        nv: 10,
        d: "Eres inmune a la presión del agua y al daño de frío. Tienes visión en la oscuridad total hasta 120 pies bajo el agua. Puedes lanzar Control del Agua a voluntad (1/descanso largo sin espacio)."
      },
      {
        n: "Forma de la Entidad",
        nv: 14,
        d: "Como Acción te transformas en una forma tentacular de las profundidades durante 1 minuto. Tu tamaño se convierte en Grande, ganas PG temporales = nivel Brujo × 2, alcance 10 pies en ataques cuerpo a cuerpo e infligen daño de frío o perforante adicional = 1d12. 1/descanso largo."
      },
    ],

    /* ── Guildmasters' Guide to Ravnica ── */
    "El Ojo Supremo [GGtR]": [
      {
        n: "Conjuros de Patrón",
        nv: 1,
        d: "Conjuros siempre preparados — Nv.1: Identificar, Detectar Magia. Nv.2: Detectar Pensamientos, Escudo. Nv.3: Clairvoyance, Contraconjuro. Nv.4: Confusión, Tentáculos de Evard. Nv.5: Leyenda Lore, Telekinesis."
      },
      {
        n: "Mente Expandida",
        nv: 1,
        d: "Puedes lanzar Detectar Magia y Detectar Pensamientos a voluntad sin gastar espacio de conjuro."
      },
      {
        n: "Ojos de Ultraloth",
        nv: 1,
        d: "Ganas visión en oscuridad hasta 30 pies (o la extiendes 30 pies si ya la tenías). Además, puedes lanzar Identidad Verdadera (True Seeing) una vez sin espacio. Recarga con descanso largo."
      },
      {
        n: "Mente Inviolable",
        nv: 6,
        d: "Cuando una criatura intenta leer tu mente o te afecta con un conjuro de Encantamiento, puedes usar tu Reacción para que la criatura realice una tirada de salvación de INT (CD conjuro) o quedará Aturdida hasta el final de su siguiente turno."
      },
      {
        n: "Mirada Teletransportadora",
        nv: 10,
        d: "Cuando lanzas un conjuro que requiera que veas el objetivo, si tienes visión de él a través de Clairvoyance o Detectar Pensamientos, el conjuro funciona como si tuvieras línea de visión directa."
      },
      {
        n: "Trascendencia del Ojo",
        nv: 14,
        d: "Como Acción puedes proyectar tu consciencia: lanzas Viaje Astral sobre ti mismo sin coste (sólo tu mente viaja, tu cuerpo permanece). Durante la proyección puedes lanzar conjuros de Brujo que no requieran componentes materiales. 1/descanso largo."
      },
    ],

  }, // fin subclases
}; // fin CLASE_BRUJO
