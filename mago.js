/* ══════════════════════════════════════════════════════════════════
   mago.js — Mago: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · PHB 2024 · XGtE · TCE · SCAG/TCE · HoF 2024 · EGtW
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (18 entradas):
     Escuela de Abjuración        [PHB 2014]
     Escuela de Conjuración       [PHB 2014]
     Escuela de Adivinación       [PHB 2014]
     Escuela de Encantamiento     [PHB 2014]
     Escuela de Evocación         [PHB 2014]
     Escuela de Ilusión           [PHB 2014]
     Escuela de Nigromancia       [PHB 2014]
     Escuela de Transmutación     [PHB 2014]
     Abjurador                    [PHB 2024]
     Adivino                      [PHB 2024]
     Evocador                     [PHB 2024]
     Ilusionista                  [PHB 2024]
     Guerra Mágica                [XGtE]
     Orden de los Escribas        [TCE]
     Cantor de Espadas            [SCAG/TCE] / [HoF 2024]
     Cronurgia                    [EGtW]
     Graviturgia                  [EGtW]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_MAGO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d6. Salvaciones: INT y SAB. Armaduras: ninguna. Armas: simples. Habilidades: elige 2 entre Arcanos, Historia, Perspicacia, Investigación, Medicina, Naturaleza y Religión. [2014: armas: dagas, dardos, hondas, bastones y ballestas ligeras; sin Naturaleza en la lista de habilidades]"
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador completo. INT es tu característica de conjuros (CD = 8 + comp. + mod. INT); usas un foco arcano o tu libro de conjuros. Trucos: 3 (4 en Nv.4, 5 en Nv.10). Libro de conjuros: empiezas con 6 conjuros de Nv.1 y añades 2 conjuros nuevos por cada nivel; copiar un conjuro nuevo cuesta 50 po y 2 horas por nivel del conjuro. Copiar un conjuro de tu libro a otro libro cuesta solo 1 hora y 10 po por nivel del conjuro; si pierdes tu libro, puedes transcribir con el mismo procedimiento los conjuros que tengas preparados a uno nuevo (el resto de páginas exige encontrar conjuros nuevos). Preparas conjuros de tu libro: 4 en Nv.1 (5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 18, 19, 21, 22, 23, 24, 25 en Nv.2-20); cambias la lista tras un descanso largo. Los conjuros que otro rasgo de Mago te da siempre preparados (p. ej. Maestría de Conjuros, Conjuros de Firma, Rompehechizos) no cuentan para tu límite de conjuros preparados, pero se consideran conjuros de Mago para ti. Al terminar un Descanso Largo puedes sustituir uno de tus trucos de este rasgo por otro truco de Mago. [2014: preparas mod. INT + nivel de Mago conjuros (mín. 1); los trucos solo se cambian con el rasgo opcional Fórmulas de Trucos de TCE]"
    },
    {
      n: "Adepto de Rituales (Ritual Adept)",
      nv: 1,
      d: "Puedes lanzar como ritual cualquier conjuro con la etiqueta Ritual que esté en tu libro de conjuros. No necesitas tenerlo preparado, pero debes leerlo del libro para lanzarlo así. [2014: Lanzamiento de Rituales; basta con que el conjuro esté en tu libro de conjuros]"
    },
    {
      n: "Recuperación Arcana (Arcane Recovery)",
      nv: 1,
      d: "Una vez al día, al terminar un descanso corto, recuperas espacios de conjuro gastados cuyo nivel combinado sea como máximo la mitad de tu nivel de Mago (redondeando hacia arriba); ninguno puede ser de Nv.6 o superior."
    },
    {
      n: "Erudito (Scholar)",
      nv: 2,
      d: "Eliges una de estas habilidades en la que seas competente: Arcanos, Historia, Investigación, Medicina, Naturaleza o Religión; ganas Pericia en ella. [Sólo 2024]"
    },
    {
      n: "Subclase de Mago (Tradición Arcana)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6, 10 y 14. [2014: Tradición Arcana, se elige en Nv.2 y concede rasgos en Nv.2, 6, 10 y 14]"
    },
    {
      n: "Fórmulas de Trucos (Cantrip Formulas)",
      nv: 3,
      d: "Al terminar un descanso largo y consultar tu libro, puedes sustituir un truco de Mago que conozcas por otro truco de la lista de Mago. [Sólo 2014, opcional de TCE]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Memorizar Conjuro (Memorize Spell)",
      nv: 5,
      d: "Al terminar un descanso corto, puedes estudiar tu libro de conjuros y reemplazar uno de los conjuros de Mago de Nv.1+ que tengas preparados por otro de tu libro. [Sólo 2024]"
    },
    {
      n: "Maestría de Conjuros (Spell Mastery)",
      nv: 18,
      d: "Eliges un conjuro de Nv.1 y otro de Nv.2 de tu libro de conjuros que tengan tiempo de lanzamiento de 1 acción; siempre los tienes preparados y puedes lanzarlos a su nivel más bajo sin gastar espacio. Para lanzar cualquiera a un nivel superior debes gastar un espacio. Al terminar un Descanso Largo puedes estudiar tu libro y sustituir uno de ellos por otro conjuro elegible del mismo nivel de tu libro. [2014: sin requisito de tiempo de lanzamiento; solo los lanzas sin espacio si los tienes preparados; cambias uno o ambos con 8 horas de estudio]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Conjuros de Firma (Signature Spells)",
      nv: 20,
      d: "Eliges dos conjuros de Nv.3 de tu libro como conjuros de firma: siempre los tienes preparados y puedes lanzar cada uno una vez a Nv.3 sin gastar espacio; recuperas ambos usos con un descanso corto o largo."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Escuela de Abjuración [PHB 2014]": [
      {
        n: "Erudito de la Abjuración (Abjuration Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de abjuración en tu libro se reducen a la mitad."
      },
      {
        n: "Guardia Arcana (Arcane Ward)",
        nv: 2,
        a: "O",
        d: "Al lanzar un conjuro de abjuración de Nv.1+, creas una protección mágica sobre ti hasta el próximo descanso largo, con PG = 2 × tu nivel de Mago + mod. INT. Absorbe el daño que sufres (el sobrante pasa a ti); a 0 PG ya no absorbe pero sigue activa. Al lanzar otro conjuro de abjuración de Nv.1+, recupera PG = 2 × el nivel del conjuro. Sólo puedes crearla una vez por descanso largo."
      },
      {
        n: "Protección Proyectada (Projected Ward)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura que veas a 30 pies sufre daño, usas tu Reacción para que tu Guardia Arcana absorba ese daño; el sobrante va a la criatura."
      },
      {
        n: "Abjuración Mejorada (Improved Abjuration)",
        nv: 10,
        d: "Al lanzar un conjuro de abjuración que requiere una prueba de característica (como Counterspell o Dispel Magic), sumas tu bonificador de competencia a esa prueba."
      },
      {
        n: "Resistencia a Conjuros (Spell Resistance)",
        nv: 14,
        d: "Ventaja en las salvaciones contra conjuros y resistencia al daño de los conjuros."
      },
    ],

    "Escuela de Conjuración [PHB 2014]": [
      {
        n: "Erudito de la Conjuración (Conjuration Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de conjuración en tu libro se reducen a la mitad."
      },
      {
        n: "Conjuración Menor (Minor Conjuration)",
        nv: 2,
        a: "A",
        d: "Con una acción conjuras un objeto inanimado en tu mano o en un espacio libre que veas a 10 pies (hasta 3 pies por lado y 10 libras; con la forma de un objeto no mágico que hayas visto). Es visiblemente mágico y emite luz tenue en 5 pies. Desaparece tras 1 hora, si vuelves a usar este rasgo, si sufre cualquier daño o si inflige cualquier daño."
      },
      {
        n: "Transposición Benigna (Benign Transposition)",
        nv: 6,
        a: "A",
        d: "Con una acción te teletransportas hasta 30 pies a un espacio libre que veas, o intercambias lugar con una criatura Pequeña o Mediana voluntaria a 30 pies. Se recupera tras un descanso largo o al lanzar un conjuro de conjuración de Nv.1+."
      },
      {
        n: "Conjuración Enfocada (Focused Conjuration)",
        nv: 10,
        d: "Mientras te concentras en un conjuro de conjuración, recibir daño no rompe tu concentración."
      },
      {
        n: "Invocaciones Duraderas (Durable Summons)",
        nv: 14,
        d: "Cualquier criatura que invoques o crees con un conjuro de conjuración tiene 30 PG temporales."
      },
    ],

    "Escuela de Adivinación [PHB 2014]": [
      {
        n: "Erudito de la Adivinación (Divination Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de adivinación en tu libro se reducen a la mitad."
      },
      {
        n: "Presagio (Portent)",
        nv: 2,
        a: "O",
        d: "Tras un descanso largo tiras 2d20 y anotas los resultados. Antes de una tirada de ataque, prueba de característica o salvación hecha por ti o por una criatura que veas, puedes sustituirla por uno de esos resultados (cada uno se usa una vez; sólo 1 por turno). Los no usados se pierden al siguiente descanso largo."
      },
      {
        n: "Adivinación del Experto (Expert Divination)",
        nv: 6,
        d: "Al lanzar un conjuro de adivinación de Nv.2+ con un espacio, recuperas un espacio gastado de nivel inferior al usado y de Nv.5 como máximo."
      },
      {
        n: "El Tercer Ojo (The Third Eye)",
        nv: 10,
        a: "A",
        d: "Con una acción obtienes un beneficio hasta que quedes Incapacitado o descanses (una vez por descanso corto o largo): Visión en la oscuridad 60 pies; ver el Plano Etéreo a 60 pies; leer cualquier idioma; o ver criaturas y objetos invisibles a 10 pies en tu línea de visión."
      },
      {
        n: "Presagio Mayor (Greater Portent)",
        nv: 14,
        d: "Tiras 3d20 en lugar de 2 para tu Presagio."
      },
    ],

    "Escuela de Encantamiento [PHB 2014]": [
      {
        n: "Erudito del Encantamiento (Enchantment Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de encantamiento en tu libro se reducen a la mitad."
      },
      {
        n: "Mirada Hipnótica (Hypnotic Gaze)",
        nv: 2,
        a: "A",
        d: "Con una acción eliges a una criatura que veas a 5 pies; si puede verte u oírte, hace una salvación de SAB (CD de tus conjuros de Mago) o queda hechizada por ti hasta el final de tu siguiente turno: Velocidad 0 e Incapacitada (visiblemente aturdida, sin ser la condición Aturdido). En turnos posteriores puedes usar tu acción para mantener el efecto hasta el final de tu siguiente turno; termina si te alejas más de 5 pies, si no puede verte ni oírte, o si sufre daño. Cuando termina, o si supera la salvación inicial, no puedes usarlo sobre ella hasta terminar un Descanso Largo."
      },
      {
        n: "Encanto Instintivo (Instinctive Charm)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura que veas a 30 pies hace una tirada de ataque contra ti, usas tu Reacción para desviar el ataque, siempre que haya otra criatura en el alcance del ataque. El atacante hace una salvación de SAB (CD de tus conjuros de Mago); si falla, debe atacar a la criatura más cercana a él distinta de ti y de sí mismo (si hay varias igual de cercanas, elige el atacante). Si la supera, no puedes volver a usarlo sobre él hasta terminar un Descanso Largo. Debes decidir usarlo antes de saber si el ataque impacta o falla. Las criaturas inmunes a ser hechizadas son inmunes a este efecto."
      },
      {
        n: "Encantamiento Dividido (Split Enchantment)",
        nv: 10,
        d: "Al lanzar un conjuro de encantamiento de Nv.1+ que sólo apunte a una criatura, puedes hacer que apunte a una segunda criatura."
      },
      {
        n: "Alterar Recuerdos (Alter Memories)",
        nv: 14,
        a: "A",
        d: "Al lanzar un conjuro de encantamiento que hechice a una o más criaturas, puedes hacer que una de ellas no sepa que está hechizada. Además, una vez antes de que termine el conjuro, con una acción puedes intentar que esa criatura olvide parte del tiempo que pasó hechizada: hace una salvación de INT contra la CD de tus conjuros de Mago o pierde horas de recuerdos = 1 + tu mod. CAR (mín. 1). Puedes hacer que olvide menos tiempo, y el total no puede exceder la duración de tu conjuro de encantamiento."
      },
    ],

    "Escuela de Evocación [PHB 2014]": [
      {
        n: "Erudito de la Evocación (Evocation Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de evocación en tu libro se reducen a la mitad."
      },
      {
        n: "Esculpir Conjuros (Sculpt Spells)",
        nv: 2,
        d: "Al lanzar un conjuro de evocación que afecte a otras criaturas que veas, eliges 1 + el nivel del conjuro de ellas: superan automáticamente su salvación y no sufren daño si normalmente sufrirían la mitad."
      },
      {
        n: "Truco Potente (Potent Cantrip)",
        nv: 6,
        d: "Cuando una criatura supera la salvación contra uno de tus trucos, sufre la mitad del daño del truco (si lo hay) pero ningún efecto adicional."
      },
      {
        n: "Evocación Potenciada (Empowered Evocation)",
        nv: 10,
        d: "Sumas tu mod. INT a una tirada de daño de cualquier conjuro de evocación de Mago que lances."
      },
      {
        n: "Sobrecanalización (Overchannel)",
        nv: 14,
        a: "O",
        d: "Al lanzar un conjuro de Mago de Nv.1-5 que cause daño, puedes infligir el daño máximo. La primera vez no hay penalización; cada uso posterior antes de un descanso largo te inflige 2d12 de daño necrótico por nivel del conjuro (+1d12 por cada uso adicional), que ignora resistencia e inmunidad."
      },
    ],

    "Escuela de Ilusión [PHB 2014]": [
      {
        n: "Erudito de la Ilusión (Illusion Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de ilusión en tu libro se reducen a la mitad."
      },
      {
        n: "Ilusión Menor Mejorada (Improved Minor Illusion)",
        nv: 2,
        d: "Aprendes el truco Minor Illusion (o otro truco de Mago si ya lo conocías); no cuenta en tus trucos conocidos. Al lanzarlo puedes crear a la vez un sonido y una imagen."
      },
      {
        n: "Ilusiones Maleables (Malleable Illusions)",
        nv: 6,
        a: "A",
        d: "Al lanzar un conjuro de ilusión de duración 1 minuto o más, puedes usar tu acción para cambiar su naturaleza (dentro de los parámetros del conjuro) mientras veas la ilusión."
      },
      {
        n: "Yo Ilusorio (Illusory Self)",
        nv: 10,
        a: "R",
        d: "Cuando una criatura hace una tirada de ataque contra ti, usas tu Reacción para interponer un doble ilusorio: el ataque falla automáticamente y la ilusión se disipa. Una vez por descanso corto o largo."
      },
      {
        n: "Realidad Ilusoria (Illusory Reality)",
        nv: 14,
        a: "B",
        d: "Al lanzar un conjuro de ilusión de Nv.1+, puedes elegir un objeto inanimado no mágico que sea parte de la ilusión y hacerlo real (Acción Adicional mientras dure el conjuro); permanece real 1 minuto y no puede infligir daño."
      },
    ],

    "Escuela de Nigromancia [PHB 2014]": [
      {
        n: "Erudito de la Nigromancia (Necromancy Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de nigromancia en tu libro se reducen a la mitad."
      },
      {
        n: "Cosecha Siniestra (Grim Harvest)",
        nv: 2,
        a: "O",
        d: "Una vez por turno, cuando matas a una o más criaturas con un conjuro de Nv.1+, recuperas PG = 2 × el nivel del conjuro (3 × si es de nigromancia). No funciona con constructos ni no-muertos."
      },
      {
        n: "Siervos No-Muertos (Undead Thralls)",
        nv: 6,
        d: "Añades Animate Dead a tu libro. Al lanzarlo puedes apuntar a un cadáver o montón de huesos adicional. Los no-muertos que crees tienen PG máx. aumentados en tu nivel de Mago y suman tu bonificador de competencia al daño con arma."
      },
      {
        n: "Inmunizado a la No-Muerte (Inured to Undeath)",
        nv: 10,
        d: "Resistencia al daño necrótico y tus PG máximos no pueden reducirse."
      },
      {
        n: "Mando sobre los No-Muertos (Command Undead)",
        nv: 14,
        a: "A",
        d: "Con una acción eliges un no-muerto que veas a 60 pies (incluso uno creado por otro mago): hace una salvación de CAR (CD de tus conjuros de Mago). Si la supera, no puedes usar este rasgo sobre él de nuevo. Si falla, queda amistoso hacia ti y obedece tus órdenes hasta que vuelvas a usar este rasgo. Si su INT es 8+, tiene Ventaja en la salvación; si falla y su INT es 12+, repite la salvación al final de cada hora hasta superarla y liberarse."
      },
    ],

    "Escuela de Transmutación [PHB 2014]": [
      {
        n: "Erudito de la Transmutación (Transmutation Savant)",
        nv: 2,
        d: "El oro y el tiempo para copiar un conjuro de transmutación en tu libro se reducen a la mitad."
      },
      {
        n: "Alquimia Menor (Minor Alchemy)",
        nv: 2,
        d: "Puedes alterar un objeto no mágico de madera, piedra (no gemas), hierro, cobre o plata, transformándolo en otro de esos materiales. Por cada 10 minutos de trabajo transformas hasta 1 pie cúbico. Dura 1 hora o hasta que pierdas la concentración (como en un conjuro), y luego revierte."
      },
      {
        n: "Piedra del Transmutador (Transmuter's Stone)",
        nv: 6,
        d: "Con 8 horas de trabajo creas una piedra que concede un beneficio a su portador: Visión en la oscuridad 60 pies; +10 pies de Velocidad sin sobrecarga; competencia en salvaciones de CON; o resistencia al daño de ácido, frío, fuego, rayo o trueno. Cada vez que lanzas un conjuro de transmutación de Nv.1+ puedes cambiar el beneficio si la llevas. Crear otra desactiva la anterior."
      },
      {
        n: "Cambiaformas (Shapechanger)",
        nv: 10,
        a: "A",
        d: "Añades Polymorph a tu libro. Puedes lanzarlo sobre ti mismo sin espacio de conjuro para transformarte en una bestia de CR 1 o inferior. Se recupera tras un descanso corto o largo."
      },
      {
        n: "Maestro Transmutador (Master Transmuter)",
        nv: 14,
        a: "A",
        d: "Con una acción consumes tu piedra del transmutador (queda destruida hasta el próximo Descanso Largo) para un efecto: Transformación Mayor (transmutas un objeto no mágico de hasta un cubo de 5 pies de lado en otro objeto no mágico de tamaño y masa similares y de valor igual o menor, manejándolo 10 minutos); Panacea (quitas maldiciones, enfermedades y venenos y restauras todos los PG de la criatura que toques con la piedra); Restaurar la Vida (lanzas Raise Dead sobre una criatura que toques con la piedra, sin gastar espacio ni necesitar el conjuro en tu libro); Restaurar la Juventud (reduces la edad aparente de una criatura voluntaria que toques en 3d10 años, mínimo 13; no alarga su vida)."
      },
    ],


    /* ── PHB 2024 ── */
    "Abjurador [PHB 2024]": [
      {
        n: "Erudito de la Abjuración (Abjuration Savant)",
        nv: 3,
        d: "Eliges dos conjuros de abjuración de Mago de Nv.2 o inferior y los añades gratis a tu libro. Cada vez que obtienes acceso a un nivel nuevo de espacios de conjuro, puedes añadir gratis un conjuro de abjuración de ese nivel."
      },
      {
        n: "Guardia Arcana (Arcane Ward)",
        nv: 3,
        a: "O",
        d: "Al lanzar un conjuro de abjuración con un espacio, puedes crear a la vez una protección sobre ti que dura hasta que termines un descanso largo, con PG = 2 × tu nivel de Mago + mod. INT. Absorbe el daño que sufres (aplicadas antes resistencias y vulnerabilidades; el sobrante pasa a ti); a 0 PG ya no absorbe pero sigue activa. Al lanzar un conjuro de abjuración con espacio, recupera PG = 2 × el nivel del espacio; también puedes, como Acción Adicional, gastar un espacio para restaurar 2 × su nivel. Sólo puedes crearla una vez por descanso largo."
      },
      {
        n: "Protección Proyectada (Projected Ward)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura que veas a 30 pies sufre daño, usas tu Reacción para que tu Guardia Arcana absorba ese daño; el sobrante va a la criatura (tras sus resistencias y vulnerabilidades)."
      },
      {
        n: "Rompehechizos (Spell Breaker)",
        nv: 10,
        d: "Siempre tienes preparados Counterspell y Dispel Magic. Puedes lanzar Dispel Magic como Acción Adicional y sumar tu bonificador de competencia a su prueba de característica. Si lanzas cualquiera de los dos con un espacio y no detiene un conjuro, el espacio no se gasta."
      },
      {
        n: "Resistencia a Conjuros (Spell Resistance)",
        nv: 14,
        d: "Ventaja en las salvaciones contra conjuros y resistencia al daño de los conjuros."
      },
    ],

    "Adivino [PHB 2024]": [
      {
        n: "Erudito de la Adivinación (Divination Savant)",
        nv: 3,
        d: "Eliges dos conjuros de adivinación de Mago de Nv.2 o inferior y los añades gratis a tu libro. Cada vez que obtienes acceso a un nivel nuevo de espacios de conjuro, puedes añadir gratis un conjuro de adivinación de ese nivel."
      },
      {
        n: "Presagio (Portent)",
        nv: 3,
        a: "O",
        d: "Tras un descanso largo tiras 2d20 y anotas los resultados. Puedes sustituir cualquier Tirada de d20 hecha por ti o por una criatura que veas por uno de esos resultados; decides antes de la tirada y cada uno se usa una vez (sólo 1 por turno). Los no usados se pierden al terminar un descanso largo."
      },
      {
        n: "Adivinación del Experto (Expert Divination)",
        nv: 6,
        d: "Al lanzar un conjuro de adivinación con un espacio de Nv.2+, recuperas un espacio gastado de nivel inferior al usado y de Nv.5 como máximo."
      },
      {
        n: "El Tercer Ojo (The Third Eye)",
        nv: 10,
        a: "B",
        d: "Como Acción Adicional eliges un beneficio que dura hasta tu siguiente descanso (una vez por descanso corto o largo): Visión en la oscuridad 120 pies; leer cualquier idioma; o lanzar See Invisibility sin gastar espacio."
      },
      {
        n: "Presagio Mayor (Greater Portent)",
        nv: 14,
        d: "Tiras 3d20 en lugar de 2 para tu Presagio."
      },
    ],

    "Evocador [PHB 2024]": [
      {
        n: "Erudito de la Evocación (Evocation Savant)",
        nv: 3,
        d: "Eliges dos conjuros de evocación de Mago de Nv.2 o inferior y los añades gratis a tu libro. Cada vez que obtienes acceso a un nivel nuevo de espacios de conjuro, puedes añadir gratis un conjuro de evocación de ese nivel."
      },
      {
        n: "Truco Potente (Potent Cantrip)",
        nv: 3,
        d: "Cuando lanzas un truco contra una criatura y fallas la tirada de ataque, o la criatura supera la salvación contra el truco, sufre la mitad del daño del truco (si lo hay) pero ningún efecto adicional."
      },
      {
        n: "Esculpir Conjuros (Sculpt Spells)",
        nv: 6,
        d: "Al lanzar un conjuro de evocación que afecte a otras criaturas que veas, eliges 1 + el nivel del conjuro de ellas: superan automáticamente su salvación y no sufren daño si normalmente sufrirían la mitad."
      },
      {
        n: "Evocación Potenciada (Empowered Evocation)",
        nv: 10,
        d: "Al lanzar un conjuro de Mago de la escuela de evocación, sumas tu mod. INT a una tirada de daño de ese conjuro."
      },
      {
        n: "Sobrecanalización (Overchannel)",
        nv: 14,
        a: "O",
        d: "Al lanzar un conjuro de Mago con un espacio de Nv.1-5 que cause daño, puedes infligir el daño máximo con ese conjuro en el turno en que lo lanzas. La primera vez no hay penalización; cada uso posterior antes de un Descanso Largo te inflige 2d12 de daño necrótico por nivel del espacio justo después de lanzarlo (+1d12 por nivel por cada uso adicional), que ignora resistencia e inmunidad."
      },
    ],

    "Ilusionista [PHB 2024]": [
      {
        n: "Erudito de la Ilusión (Illusion Savant)",
        nv: 3,
        d: "Eliges dos conjuros de ilusión de Mago de Nv.2 o inferior y los añades gratis a tu libro. Cada vez que obtienes acceso a un nivel nuevo de espacios de conjuro, puedes añadir gratis un conjuro de ilusión de ese nivel."
      },
      {
        n: "Ilusiones Mejoradas (Improved Illusions)",
        nv: 3,
        d: "Puedes lanzar conjuros de ilusión sin componente verbal. Si un conjuro de ilusión tiene alcance de 10 pies o más, su alcance aumenta 60 pies. Aprendes Minor Illusion (o otro truco de Mago si ya lo conocías); puedes lanzarlo con una Acción Adicional y crear sonido e imagen a la vez."
      },
      {
        n: "Criaturas Fantasmales (Phantasmal Creatures)",
        nv: 6,
        d: "Siempre tienes preparados Summon Beast y Summon Fey. Al lanzar cualquiera de ellos puedes cambiar su escuela a ilusión, y la criatura invocada parece espectral. Puedes lanzar la versión de ilusión de cada conjuro sin gastar espacio, pero entonces la criatura tiene la mitad de sus PG. Tras lanzar uno de ellos sin espacio, debes terminar un Descanso Largo antes de volver a lanzar ese conjuro así."
      },
      {
        n: "Yo Ilusorio (Illusory Self)",
        nv: 10,
        a: "R",
        d: "Cuando una criatura te impacta con una tirada de ataque, usas tu Reacción para interponer un doble ilusorio entre el atacante y tú: el ataque falla automáticamente y la ilusión se disipa. Tras usarlo no puedes volver a hacerlo hasta terminar un Descanso Corto o Largo; también puedes recuperar el uso gastando un espacio de conjuro de Nv.2+ (sin acción)."
      },
      {
        n: "Realidad Ilusoria (Illusory Reality)",
        nv: 14,
        a: "B",
        d: "Al lanzar un conjuro de ilusión con un espacio, puedes elegir un objeto inanimado no mágico que sea parte de la ilusión y hacerlo real (Acción Adicional); permanece real 1 minuto y no puede infligir daño ni imponer condiciones."
      },
    ],


    /* ── XGtE ── */
    "Guerra Mágica [XGtE]": [
      {
        n: "Desviación Arcana (Arcane Deflection)",
        nv: 2,
        a: "R",
        d: "Cuando te impacta un ataque o fallas una salvación, usas tu Reacción para ganar +2 a la CA contra ese ataque o +4 a esa salvación. Después sólo puedes lanzar trucos hasta el final de tu siguiente turno."
      },
      {
        n: "Ingenio Táctico (Tactical Wit)",
        nv: 2,
        d: "Sumas tu mod. INT a tus tiradas de iniciativa."
      },
      {
        n: "Oleada de Poder (Power Surge)",
        nv: 6,
        a: "O",
        d: "Almacenas energía mágica: hasta tu mod. INT (mín. 1) cargas; empiezas con 1 tras cada descanso largo. Ganas una carga al contrarrestar o disipar con éxito un conjuro (Counterspell o Dispel Magic) o al terminar un descanso corto sin cargas. Una vez por turno, cuando dañas a una criatura u objeto con un conjuro de Mago, puedes gastar una carga para infligir daño de fuerza adicional = mitad de tu nivel de Mago."
      },
      {
        n: "Magia Duradera (Durable Magic)",
        nv: 10,
        d: "Mientras mantienes concentración en un conjuro, tienes +2 a la CA y a todas las salvaciones."
      },
      {
        n: "Manto Desviador (Deflecting Shroud)",
        nv: 14,
        d: "Cuando usas Desviación Arcana, la energía mágica salta hacia afuera: hasta 3 criaturas que elijas a 60 pies sufren daño de fuerza igual a la mitad de tu nivel de Mago."
      },
    ],


    /* ── TCE ── */
    "Orden de los Escribas [TCE]": [
      {
        n: "Pluma Mágica (Wizardly Quill)",
        nv: 2,
        a: "B",
        d: "Como Acción Adicional creas una pluma Diminuta: escribe en el color que elijas sin tinta; copiar un conjuro en tu libro lleva 2 minutos por nivel del conjuro (en lugar de 2 horas); como Acción Adicional borras texto a 5 pies. Desaparece si creas otra o al morir."
      },
      {
        n: "Libro de Conjuros Despierto (Awakened Spellbook)",
        nv: 2,
        d: "Mientras lo sostienes, tu libro es foco para tus conjuros de Mago. Al lanzar un conjuro de Mago con un espacio, puedes sustituir temporalmente su tipo de daño por otro de un conjuro de tu libro de ese mismo nivel. Puedes lanzar rituales de Mago sin añadir 10 minutos (una vez por descanso largo). Puedes transferir tu conciencia a otro libro en un descanso corto con la pluma: los conjuros pasan al nuevo y el anterior los pierde."
      },
      {
        n: "Mente Manifiesta (Manifest Mind)",
        nv: 6,
        a: "B",
        d: "Mientras llevas contigo tu libro, como Acción Adicional creas una mente espectral Diminuta e intangible en un espacio libre a 60 pies (luz tenue 10 pies, Visión en la oscuridad 60 pies; te comparte por telepatía lo que ve y oye). Cuando lances un conjuro de Mago en tu turno, puedes lanzarlo como si estuvieras en el espacio de la mente, usando sus sentidos, un número de veces por día igual a tu bonificador de competencia (se recuperan con un Descanso Largo). Como Acción Adicional la mueves hasta 30 pies a un espacio libre visible para ti o para ella; puede atravesar criaturas, no objetos. Se disipa si está a más de 300 pies de ti, si alguien le lanza Dispel Magic, si el libro es destruido, si mueres o si la descartas con una Acción Adicional. Una vez creada, no puedes volver a crearla hasta terminar un Descanso Largo, salvo que gastes un espacio de conjuro de cualquier nivel."
      },
      {
        n: "Maestro Escribano (Master Scrivener)",
        nv: 10,
        d: "Tras un Descanso Largo puedes crear un pergamino mágico tocando tu Pluma Mágica a papel o pergamino en blanco y copiando en él un conjuro de tu Libro de Conjuros Despierto (el libro debe estar a 5 pies). El conjuro debe ser de Nv.1 o 2 y tener tiempo de lanzamiento de 1 acción; en el pergamino cuenta como un nivel superior. Lo lanzas leyéndolo con una acción; solo tú puedes entenderlo y el conjuro desaparece al lanzarlo o al terminar tu siguiente Descanso Largo. Además, el oro y el tiempo para crear pergaminos de conjuro se reducen a la mitad si usas tu Pluma Mágica."
      },
      {
        n: "Uno con la Palabra (One with the Word)",
        nv: 14,
        a: "R",
        d: "Ventaja en todas las pruebas de INT (Arcanos) mientras llevas contigo el libro. Si sufres daño con la mente manifestada, puedes usar tu Reacción para descartar la mente y evitar todo ese daño. Luego tiras 3d6: tu libro pierde temporalmente conjuros de tu elección cuyos niveles sumen igual o más que el resultado (con un 9: un conjuro de Nv.9, tres de Nv.3 u otra combinación). Si el libro no tiene conjuros suficientes, caes a 0 PG. Hasta que termines 1d6 Descansos Largos no puedes lanzar los conjuros perdidos, ni siquiera desde un pergamino u otro libro; después reaparecen. Una vez por Descanso Largo."
      },
    ],


    /* ── SCAG/TCE ── */
    "Cantor de Espadas [SCAG/TCE]": [
      {
        n: "Entrenamiento en Guerra y Canto (Training in War and Song)",
        nv: 2,
        d: "Ganas competencia con armadura ligera, con un tipo de arma cuerpo a cuerpo a una mano de tu elección y con Interpretación (si no la tenías). [SCAG: restringido a elfos]"
      },
      {
        n: "Canto de Espadas (Bladesong)",
        nv: 2,
        a: "B",
        d: "Como Acción Adicional inicias el Canto de Espadas durante 1 minuto (termina si quedas Incapacitado, te pones armadura media/pesada o escudo, o usas dos manos para atacar con un arma). Mientras dura: +mod. INT (mín. +1) a la CA, +10 pies de Velocidad, Ventaja en Acrobacias (DES) y +mod. INT (mín. +1) a las salvaciones de CON para mantener la concentración. Usos = tu bonificador de competencia por descanso largo."
      },
      {
        n: "Ataque Extra (Extra Attack)",
        nv: 6,
        a: "A",
        d: "Atacas dos veces, en lugar de una, al realizar la acción Atacar en tu turno. Además puedes lanzar uno de tus trucos en lugar de uno de esos ataques."
      },
      {
        n: "Canción de Defensa (Song of Defense)",
        nv: 10,
        a: "R",
        d: "Mientras el Canto de Espadas está activo, cuando sufres daño usas tu Reacción para gastar un espacio de conjuro y reducir ese daño en 5 × el nivel del espacio."
      },
      {
        n: "Canción de Victoria (Song of Victory)",
        nv: 14,
        d: "Mientras el Canto de Espadas está activo, sumas tu mod. INT (mín. +1) al daño de tus ataques cuerpo a cuerpo con arma."
      },
    ],


    /* ── HoF 2024 ── */
    "Cantor de Espadas [HoF 2024]": [
      {
        n: "Canto de Espadas (Bladesong)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional (sin armadura ni escudo) inicias el Canto de Espadas durante 1 minuto (termina si quedas Incapacitado, te pones armadura o escudo, o usas dos manos con un arma). Usos = mod. INT (mín. 1) por descanso largo; recuperas un uso con Recuperación Arcana. Mientras dura: Agilidad: bonificador a la CA = mod. INT (mín. +1), +10 pies de Velocidad y Ventaja en Acrobacias (DES). Trabajo de Espada: usas tu mod. INT en las tiradas de ataque y daño con armas con las que seas competente. Concentración: sumas tu mod. INT a las salvaciones de CON para mantener la concentración."
      },
      {
        n: "Entrenamiento en Guerra y Canto (Training in War and Song)",
        nv: 3,
        d: "Competencia con armas marciales cuerpo a cuerpo sin las propiedades A dos manos ni Pesada. Puedes usar un arma cuerpo a cuerpo con la que seas competente como foco de lanzamiento. Ganas competencia en una habilidad: Acrobacias, Atletismo, Interpretación o Persuasión."
      },
      {
        n: "Ataque Extra (Extra Attack)",
        nv: 6,
        a: "A",
        d: "Atacas dos veces al realizar la acción Atacar; puedes sustituir uno de esos ataques por un truco de Mago de 1 acción de tiempo de lanzamiento."
      },
      {
        n: "Canción de Defensa (Song of Defense)",
        nv: 10,
        a: "R",
        d: "Mientras el Canto de Espadas está activo, cuando sufres daño usas tu Reacción y gastas un espacio de conjuro para reducir ese daño en 5 × el nivel del espacio."
      },
      {
        n: "Canción de Victoria (Song of Victory)",
        nv: 14,
        d: "Tras lanzar un conjuro con tiempo de lanzamiento de 1 acción, puedes realizar un ataque con arma como Acción Adicional."
      },
    ],


    /* ── EGtW ── */
    "Cronurgia [EGtW]": [
      {
        n: "Cambio Cronal (Chronal Shift)",
        nv: 2,
        a: "R",
        d: "Tras una tirada de ataque, prueba de característica o salvación hecha por ti o por una criatura que veas a 30 pies, usas tu Reacción para obligarla a repetir la tirada y usar el nuevo resultado. 2 usos por descanso largo."
      },
      {
        n: "Conciencia Temporal (Temporal Awareness)",
        nv: 2,
        d: "Sumas tu mod. INT a tus tiradas de iniciativa."
      },
      {
        n: "Éxtasis Momentáneo (Momentary Stasis)",
        nv: 6,
        a: "A",
        d: "Con una acción obligas a una criatura Grande o menor que veas a 60 pies a hacer una salvación de CON (CD de tus conjuros): si falla, queda Incapacitada con Velocidad 0 hasta el final de tu siguiente turno o hasta que sufra daño. Usos = mod. INT (mín. 1) por descanso largo."
      },
      {
        n: "Suspensión Arcana (Arcane Abeyance)",
        nv: 10,
        d: "Al lanzar un conjuro con un espacio de Nv.4 o inferior, puedes condensar su magia en una cuenta gris Diminuta (CA 15, 1 PG, inmune a veneno y psíquico) que retiene el conjuro 1 hora; si el tiempo termina o la cuenta se destruye, se desvanece y el conjuro se pierde. Una criatura que la sostenga puede usar una acción para liberar el conjuro: usa tu bonificador de ataque de conjuro y tu CD, pero esa criatura cuenta como lanzadora a todos los demás efectos. Una cuenta por Descanso Corto o Largo."
      },
      {
        n: "Futuro Convergente (Convergent Future)",
        nv: 14,
        a: "R",
        d: "Cuando tú o una criatura que veas a 60 pies hacéis una tirada de ataque, prueba de característica o salvación, usas tu Reacción para ignorar el dado y decidir si el resultado es el mínimo necesario para tener éxito o uno menos. Ganas un nivel de agotamiento que sólo un descanso largo elimina."
      },
    ],

    "Graviturgia [EGtW]": [
      {
        n: "Ajustar la Densidad (Adjust Density)",
        nv: 2,
        a: "A",
        d: "Con una acción eliges una criatura u objeto Grande o menor a 30 pies: durante 1 minuto (concentración) su peso se reduce a la mitad (+10 pies de Velocidad, salto doble, Desventaja en pruebas y salvaciones de FUE) o se duplica (−10 pies de Velocidad, Ventaja en pruebas y salvaciones de FUE). En Nv.10, criaturas Enormes o menores."
      },
      {
        n: "Pozo de Gravedad (Gravity Well)",
        nv: 6,
        d: "Al lanzar un conjuro sobre una criatura, puedes mover al objetivo 5 pies a un espacio libre si es voluntario, el ataque impacta o falla la salvación."
      },
      {
        n: "Atracción Violenta (Violent Attraction)",
        nv: 10,
        a: "R",
        d: "Una criatura a 60 pies de ti que impacta con un arma: usas tu Reacción para sumar 1d10 de daño (del tipo del arma); o cuando una criatura a 60 pies sufre daño de caída, aumentas el daño en 2d10. Usos = mod. INT (mín. 1) por descanso largo."
      },
      {
        n: "Horizonte de Sucesos (Event Horizon)",
        nv: 14,
        a: "A",
        d: "Con una acción creas durante hasta 1 minuto (concentración) un campo de 30 pies: las criaturas hostiles que empiezan su turno en él hacen una salvación de FUE (CD de tus conjuros); si fallan, 2d10 de daño de fuerza y Velocidad 0 hasta tu siguiente turno; si la superan, la mitad del daño y cada pie de movimiento les cuesta 2 pies adicionales. Se recupera con un descanso largo o gastando un espacio de Nv.3+."
      },
    ],
  },
};
