/* ══════════════════════════════════════════════════════════════════
   mago.js — Mago: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Sword Coast Adventurer's Guide (SCAG)
     Explorer's Guide to Wildemount (EGtW)
     Tal'Dorei Campaign Setting Reborn (TCSR)
     Forgotten Realms: Heroes of Faerun (HoF 2024)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (20 entradas):
     Escuela de Abjuración      [PHB 2014] / Abjurador       [PHB 2024]
     Escuela de Conjuración     [PHB 2014] / Conjurador      [PHB 2024]
     Escuela de Adivinación     [PHB 2014] / Adivino         [PHB 2024]
     Escuela de Encantamiento   [PHB 2014] / Encantador      [PHB 2024]
     Escuela de Evocación       [PHB 2014] / Evocador        [PHB 2024]
     Escuela de Ilusión         [PHB 2014] / Ilusionista     [PHB 2024]
     Escuela de Nigromancia     [PHB 2014] / Nigromante      [PHB 2024]
     Escuela de Transmutación   [PHB 2014] / Transmutador    [PHB 2024]
     Guerra Mágica              [XGtE]
     Maestro de Orden           [TCE]
     Cronurgia                  [EGtW]
     Graviturgia                [EGtW]
     Magia de la Sangre         [TCSR]
     Cantor de Espadas          [SCAG/TCE] / [HoF 2024]
══════════════════════════════════════════════════════════════════ */

const CLASE_MAGO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras: ninguna. Armas: dagas, dardos, hondas, bastones, ballestas ligeras. Salvaciones: INT y SAB. Habilidades: elige 2 entre Arcanos, Historia, Perspicacia, Investigación, Medicina y Religión."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "INT es tu característica de conjuro (CD = 8 + comp + mod INT). El Mago prepara conjuros de su libro de hechizos. Trucos conocidos: 3 (Nv.1) → 4 (Nv.4) → 5 (Nv.10). Conjuros preparados = mod INT + nivel de Mago (mínimo 1). El libro contiene 6 conjuros al inicio + 2 nuevos por nivel. Al subir de nivel puede copiar conjuros encontrados (1h y 50po por nivel del conjuro)."
    },
    {
      n: "Recuperación Arcana",
      nv: 1,
      d: "Una vez por día, al terminar un Descanso Corto, recuperas espacios de conjuro gastados. Los espacios recuperados suman niveles ≤ mitad del nivel de Mago (redondeado arriba). No puedes recuperar espacios de Nv.6 o superior."
    },
    {
      n: "Tradición Arcana",
      nv: 2,
      d: "Eliges tu subclase (Tradición Arcana). Otorga rasgos en Nv.2, 6, 10 y 14."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Maestría de Conjuro [PHB 2014]",
      nv: 18,
      d: "(PHB 2014) Elige un conjuro de Mago de Nv.1 y otro de Nv.2 de tu libro. Puedes lanzarlos sin gastar espacio el número de veces que desees (a su nivel base, sin potenciar)."
    },
    {
      n: "Conjuro de Firma [PHB 2014]",
      nv: 20,
      d: "(PHB 2014) Elige dos conjuros de Mago de Nv.3 de tu libro como Conjuros de Firma. Siempre los tienes preparados (no cuentan contra el límite) y puedes lanzar cada uno sin espacio una vez por Descanso Corto o Largo."
    },
    {
      n: "Conjuro de Firma [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Elige dos conjuros de tu libro de cualquier nivel como Conjuros de Firma. Siempre preparados, sin coste de espacio una vez por Descanso Corto o Largo cada uno."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (TRADICIONES ARCANAS)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Escuela de Abjuración [PHB 2014]": [
      {
        n: "Estudioso de la Abjuración",
        nv: 2,
        d: "El oro y el tiempo necesarios para copiar un conjuro de Abjuración en tu libro se reducen a la mitad."
      },
      {
        n: "Escudo Arcano",
        nv: 2,
        d: "Puedes tejer magia de protección alrededor de ti mismo. Al preparar conjuros, ganas un Escudo Arcano con PG temporales = 2 + mod INT. Los PG del escudo se recargan cuando preparas conjuros de nuevo. Cuando recibes daño, el escudo lo absorbe primero. Si el escudo llega a 0, el exceso de daño pasa a tus PG reales."
      },
      {
        n: "Abjuración Proyectada",
        nv: 6,
        d: "Cuando lanzas un conjuro de abjuración que protege a una criatura distinta de ti (como Escudo de Magia o Armadura de Mago), el Escudo Arcano del receptor gana PG temporales adicionales = tu nivel de Mago."
      },
      {
        n: "Purga Mágica",
        nv: 10,
        d: "Puedes usar el rasgo Dispersar Magia (Dispel Magic) o Contraconjuro sin gastar espacio de conjuro. 1/descanso largo. Además, cuando utilizas estos conjuros, añades tu mod INT a la tirada de prueba de INT para disipar conjuros de nivel superior."
      },
      {
        n: "Escudo Mejorado",
        nv: 14,
        d: "Tu Escudo Arcano reacciona: cuando una criatura que veas a 30 pies recibe daño, puedes usar tu Reacción para transferir hasta 2d8 + mod INT de PG de tu escudo como reducción del daño de esa criatura."
      },
    ],

    "Escuela de Conjuración [PHB 2014]": [
      {
        n: "Estudioso de la Conjuración",
        nv: 2,
        d: "El oro y el tiempo para copiar conjuros de Conjuración en tu libro se reducen a la mitad."
      },
      {
        n: "Conjuración Menor",
        nv: 2,
        d: "Como Acción puedes conjurar un objeto inanimado no mágico de hasta tamaño Pequeño en un espacio vacío a 10 pies. El objeto no puede valer más de 25 po y debe caber en un cubo de 3 pies. Desaparece al cabo de 1 hora, cuando lanzas este rasgo de nuevo o si se aleja más de 5 pies de ti."
      },
      {
        n: "Paso Borroso",
        nv: 6,
        d: "Como Acción Adicional puedes teletransportarte hasta 30 pies a un espacio vacío visible. No puedes usar este rasgo de nuevo hasta que lances un conjuro de Conjuración de Nv.1 o superior."
      },
      {
        n: "Conjuración Enfocada",
        nv: 10,
        d: "Mientras mantienes concentración en un conjuro de Conjuración, tu concentración no puede ser interrumpida por recibir daño (no tienes que hacer tiradas de salvación de concentración por daño)."
      },
      {
        n: "Invocación Duradera",
        nv: 14,
        d: "Las criaturas que conjuras o creas con un conjuro de Conjuración duran el doble de lo normal. Si el conjuro requiere concentración, la duración máxima es el doble (hasta 2 horas para conjuros de concentración)."
      },
    ],

    "Escuela de Adivinación [PHB 2014]": [
      {
        n: "Estudioso de la Adivinación",
        nv: 2,
        d: "El oro y el tiempo para copiar conjuros de Adivinación en tu libro se reducen a la mitad."
      },
      {
        n: "Presagio",
        nv: 2,
        d: "Al terminar un Descanso Largo, lanzas dos d20 y anota los resultados. Puedes sustituir cualquier tirada de ataque, prueba de característica o tirada de salvación hecha por ti o por una criatura visible, usando uno de estos resultados pre-tirados (decides antes de la tirada). Cada resultado puede usarse una vez. Se reinician con Descanso Largo."
      },
      {
        n: "Adivinación del Experto",
        nv: 6,
        d: "Lanzar conjuros de Adivinación te resulta tan sencillo que apenas gastas recursos: cuando lanzas un conjuro de Adivinación de Nv.2 o inferior, recuperas un espacio de conjuro de Nv.1."
      },
      {
        n: "El Tercer Ojo",
        nv: 10,
        d: "Como Acción puedes abrir una percepción sobrenatural que dura hasta que seas incapacitado o termines un Descanso Largo. Elige uno: Visión Etérea (ves el Plano Etéreo hasta 60 pies), Mente Inquisitiva (lees los labios y comprendes el lenguaje corporal — ventaja en Perspicacia), Ver la Invisibilidad (ves criaturas y objetos invisibles hasta 10 pies como si fueran visibles), Visión en la Oscuridad (visión en la oscuridad hasta 60 pies). 1/Descanso Largo."
      },
      {
        n: "Presagio Mayor",
        nv: 14,
        d: "Al terminar un Descanso Largo, lanzas tres d20 para el rasgo Presagio (en lugar de dos)."
      },
    ],

    "Escuela de Encantamiento [PHB 2014]": [
      {
        n: "Estudioso del Encantamiento",
        nv: 2,
        d: "El oro y el tiempo para copiar conjuros de Encantamiento en tu libro se reducen a la mitad."
      },
      {
        n: "Mirada Hipnótica",
        nv: 2,
        d: "Como Acción puedes encantar a una criatura que puedas ver a 5 pies. La criatura supera una salvación SAB (CD conjuro) o queda Encantada hasta el final de tu siguiente turno; mientras esté encantada, su velocidad es 0 y está incapacitada. Puedes mantener el efecto gastando tu Acción en turnos sucesivos. No puede usarse contra una criatura que ya hayas intentado hipnotizar en las últimas 24 horas."
      },
      {
        n: "Encantamiento Instintivo",
        nv: 6,
        d: "Cuando lanzas un conjuro de Encantamiento de Nv.1 o superior, puedes intentar redirigir el efecto de los conjuros fallados: si un objetivo tiene éxito en su salvación, puedes usar tu Reacción para redirigir el efecto a una nueva criatura a 30 pies del objetivo original (que no sea tú y sin tirada de salvación)."
      },
      {
        n: "Presencia Dividida",
        nv: 10,
        d: "Puedes lanzar conjuros de Encantamiento con objetivo único sobre dos criaturas simultáneamente. Si el conjuro tiene duración, debes mantener concentración sobre ambas de forma independiente. Solo funciona con conjuros que afectan a un único objetivo."
      },
      {
        n: "Alteración de la Mente",
        nv: 14,
        d: "Puedes alterar los recuerdos de una criatura que hayas Encantado previamente. Al final del efecto de Encantamiento, puedes lanzar Modificar Recuerdos sobre esa criatura sin gastar espacio de conjuro."
      },
    ],

    "Escuela de Evocación [PHB 2014]": [
      {
        n: "Estudioso de la Evocación",
        nv: 2,
        d: "El oro y el tiempo para copiar conjuros de Evocación en tu libro se reducen a la mitad."
      },
      {
        n: "Esculpir Conjuros",
        nv: 2,
        d: "Cuando lanzas un conjuro de Evocación que afecte a un área, puedes excluir a un número de criaturas que veas = 1 + nivel del conjuro. Las criaturas excluidas superan automáticamente la salvación y no reciben daño del conjuro."
      },
      {
        n: "Trucos Potentes",
        nv: 6,
        d: "Añades mod INT al daño de tus trucos de Mago."
      },
      {
        n: "Evocación Potenciada",
        nv: 10,
        d: "Añades mod INT al daño de cualquier conjuro de Evocación de Mago de Nv.1 o superior."
      },
      {
        n: "Sobrecarga de Conjuro",
        nv: 14,
        d: "Puedes aumentar el poder de tus conjuros de Evocación. Cuando lanzas un conjuro de Evocación de Nv.1-5, puedes lanzarlo como si usases un espacio de 1 nivel superior sin gastar un espacio superior. 1/Descanso Largo."
      },
    ],

    "Escuela de Ilusión [PHB 2014]": [
      {
        n: "Estudioso de la Ilusión",
        nv: 2,
        d: "El oro y el tiempo para copiar conjuros de Ilusión en tu libro se reducen a la mitad."
      },
      {
        n: "Ilusionista Improvisado",
        nv: 2,
        d: "Puedes lanzar Imagen Menor a voluntad sin gastar espacio de conjuro."
      },
      {
        n: "Ilusiones Maleables",
        nv: 6,
        d: "Cuando lanzas un conjuro de Ilusión que tenga duración de 1 minuto o más, puedes usar tu Acción para cambiar la naturaleza de la ilusión (su apariencia visual o sonido), siempre dentro de los límites normales del conjuro."
      },
      {
        n: "Sombra Ilusoria",
        nv: 10,
        d: "Puedes crear una sombra ilusoria de una criatura de tamaño Mediano o menor que hayas visto. La sombra usa las estadísticas del conjuro Imagen Menor pero puede moverse a tu orden. Si la sombra ataca, usa tu modificador de ataque de conjuro y hace 1d6 de daño psíquico. Una criatura que crea que la sombra es real recibe el daño completo; si no lo cree, recibe la mitad. 1/Descanso Largo."
      },
      {
        n: "Ilusiones Reales",
        nv: 14,
        d: "Cuando lanzas un conjuro de ilusión de Nv.1 o superior, las criaturas que interactúen con la ilusión pueden recibir efectos reales: si la ilusión representa fuego y una criatura la toca, puede recibir daño de fuego = nivel del espacio × 1d6 (salvación INT para no recibir daño al creer que es ilusión)."
      },
    ],

    "Escuela de Nigromancia [PHB 2014]": [
      {
        n: "Estudioso de la Nigromancia",
        nv: 2,
        d: "El oro y el tiempo para copiar conjuros de Nigromancia en tu libro se reducen a la mitad."
      },
      {
        n: "Cosecha Siniestra",
        nv: 2,
        d: "Cuando matas a una criatura que no sea un constructo o no-muerto con un conjuro de Nv.1 o superior, recuperas PG = nivel del espacio + mod INT (mínimo 1 PG)."
      },
      {
        n: "No-Muerto Resistente",
        nv: 6,
        d: "Los no-muertos que controles tienen los PG máximos en lugar de tirarlos y añaden tu bonificador de competencia a sus tiradas de daño."
      },
      {
        n: "Magia Macabra",
        nv: 10,
        d: "Puedes lanzar Animación de Muertos o Crear No-Muertos sin gastar espacio de conjuro. 1/Descanso Largo. Además, cuando lanzas estos conjuros, puedes crear una criatura adicional sin gastar espacio de nivel superior."
      },
      {
        n: "Señor de los No-Muertos",
        nv: 14,
        d: "Cuando lanzas Animación de Muertos, puedes afectar a hasta cuatro cadáveres adicionales (en lugar de la cantidad normal). Los no-muertos que controles son inmunes al rasgo Expulsar No-Muertos de los Clérigos."
      },
    ],

    "Escuela de Transmutación [PHB 2014]": [
      {
        n: "Estudioso de la Transmutación",
        nv: 2,
        d: "El oro y el tiempo para copiar conjuros de Transmutación en tu libro se reducen a la mitad."
      },
      {
        n: "Alquimia Menor",
        nv: 2,
        d: "Puedes alterar temporalmente la composición física de un objeto no mágico: transmutas un volumen de madera, piedra, hierro, cobre o plata en otro de esos materiales. El objeto debe tener un cubo de 1 pie por cada 10 minutos de trabajo. La transmutación dura hasta que te concentres o hasta 1 hora."
      },
      {
        n: "Piedra del Transmutor",
        nv: 6,
        d: "Puedes pasar 8 horas creando una Piedra del Transmutor que almacena magia de transmutación. Puedes dársela a otro. Su portador obtiene uno de los siguientes beneficios (a tu elección al crearla): visión en oscuridad 60 pies, +10 pies a velocidad de caminar, competencia en tiradas de salvación CON, resistencia al ácido, frío, fuego, rayo o trueno. Puedes cambiar el beneficio con 8 horas de trabajo. Si creas una nueva piedra, la anterior deja de funcionar."
      },
      {
        n: "Transmutar Forma",
        nv: 10,
        d: "Puedes lanzar Polimorfismo a voluntad sin gastar espacio de conjuro, pero solo para transformarte a ti mismo. Al usar este rasgo, el polimorfismo no requiere concentración."
      },
      {
        n: "Maestro del Transmutor",
        nv: 14,
        d: "Puedes usar tu Piedra del Transmutor para uno de los siguientes efectos (1/Descanso Largo): Aumentar (aumentas el tamaño de una criatura dispuesta a Grande durante 10 minutos), Restaurar (curas 10d10 PG a una criatura), Revertir Vejez (reduces la edad biológica de una criatura entre 3d10 años, hasta un mínimo de 13), Transmutar Materia (transmuta hasta un cubo de 5 pies de material no mágico en otro)."
      },
    ],

    /* ── PHB 2024 ── */
    "Abjurador [PHB 2024]": [
      {
        n: "Estudioso de la Abjuración",
        nv: 2,
        d: "Copiar conjuros de Abjuración en tu libro cuesta la mitad de tiempo y oro. Tienes siempre preparado Escudo Arcano (Mage Armor), que no cuenta contra tu límite."
      },
      {
        n: "Escudo Arcano",
        nv: 2,
        d: "Al preparar conjuros, creas un Escudo Arcano con PG temporales = 2 + mod INT (→ nivel de Mago + mod INT en Nv.10). Absorbe daño antes que tus PG. Se recarga al preparar conjuros o al terminar Descanso Largo."
      },
      {
        n: "Abjuración Proyectada",
        nv: 6,
        d: "Cuando lanzas un conjuro de abjuración que proteja a otra criatura, su Escudo Arcano gana PG temporales = tu nivel de Mago."
      },
      {
        n: "Purga Mágica",
        nv: 10,
        d: "Dispersar Magia y Contraconjuro sin gastar espacio 1/descanso largo. Añades mod INT a la tirada para contrarrestar conjuros superiores."
      },
      {
        n: "Escudo Perfeccionado",
        nv: 14,
        d: "Reacción: cuando una criatura a 30 pies recibe daño, transfiere hasta 2d8 + mod INT de PG de tu Escudo Arcano como reducción de ese daño."
      },
    ],

    "Conjurador [PHB 2024]": [
      {
        n: "Estudioso de la Conjuración",
        nv: 2,
        d: "Copiar conjuros de Conjuración cuesta la mitad. Tienes siempre preparado Misty Step, sin contar contra el límite."
      },
      {
        n: "Conjuración Menor",
        nv: 2,
        d: "Acción: conjuras un objeto no mágico (cubo de 3 pies, ≤ 25 po) en espacio libre a 10 pies. Dura 1 hora o hasta que uses el rasgo de nuevo."
      },
      {
        n: "Paso Borroso",
        nv: 6,
        d: "AA: teletransportación hasta 30 pies a espacio visible. Recarga: al lanzar un conjuro de Conjuración de Nv.1+."
      },
      {
        n: "Conjuración Enfocada",
        nv: 10,
        d: "Concentración en conjuro de Conjuración: inmunidad a interrupciones de concentración por daño."
      },
      {
        n: "Invocación Duradera",
        nv: 14,
        d: "Criaturas conjuradas duran el doble (máx. 2 horas para concentración)."
      },
    ],

    "Adivino [PHB 2024]": [
      {
        n: "Estudioso de la Adivinación",
        nv: 2,
        d: "Copiar conjuros de Adivinación cuesta la mitad. Tienes siempre preparado Detectar Magia, sin contar contra el límite."
      },
      {
        n: "Presagio",
        nv: 2,
        d: "Al terminar Descanso Largo, tiras 2 d20 (→3 en Nv.14) y anota los resultados. Puedes sustituir cualquier tirada de ataque, prueba de característica o salvación (de cualquier criatura visible) con uno de estos valores pre-tirados. Decide antes de tirar el d20."
      },
      {
        n: "Adivinación del Experto",
        nv: 6,
        d: "Lanzar un conjuro de Adivinación de Nv.2 o inferior recupera un espacio de Nv.1."
      },
      {
        n: "El Tercer Ojo",
        nv: 10,
        d: "Acción: activa una percepción sobrenatural (elige una): Visión Etérea, Mente Inquisitiva, Ver la Invisibilidad o Visión en la Oscuridad. Dura hasta que seas incapacitado o termines Descanso Largo. 1/descanso largo."
      },
      {
        n: "Presagio Mayor",
        nv: 14,
        d: "Tiras 3 d20 para el rasgo Presagio."
      },
    ],

    "Encantador [PHB 2024]": [
      {
        n: "Estudioso del Encantamiento",
        nv: 2,
        d: "Copiar conjuros de Encantamiento cuesta la mitad. Tienes siempre preparado Encanto de Personas (Charm Person), sin contar contra el límite."
      },
      {
        n: "Mirada Hipnótica",
        nv: 2,
        d: "Acción: una criatura a 5 pies supera salvación SAB (CD conjuro) o queda Incapacitada hasta el fin de tu siguiente turno. Puedes mantenerla gastando tu Acción en turnos sucesivos. Sin reúso en 24h contra la misma criatura."
      },
      {
        n: "Encantamiento Instintivo",
        nv: 6,
        d: "Reacción: cuando un objetivo supera la salvación de un conjuro de Encantamiento tuyo, puedes redirigir el efecto a una criatura distinta a 30 pies (sin nueva salvación)."
      },
      {
        n: "Presencia Dividida",
        nv: 10,
        d: "Puedes afectar a dos objetivos con conjuros de Encantamiento de un solo blanco."
      },
      {
        n: "Alteración de la Mente",
        nv: 14,
        d: "Al terminar un Encantamiento sobre una criatura, puedes lanzar Modificar Recuerdos sobre ella sin espacio."
      },
    ],

    "Evocador [PHB 2024]": [
      {
        n: "Estudioso de la Evocación",
        nv: 2,
        d: "Copiar conjuros de Evocación cuesta la mitad. Tienes siempre preparado Proyectil Mágico (Magic Missile), sin contar contra el límite."
      },
      {
        n: "Esculpir Conjuros",
        nv: 2,
        d: "Al lanzar un conjuro de Evocación en área, excluyes a 1 + nivel del conjuro criaturas visibles. Las excluidas superan automáticamente la salvación y no reciben daño."
      },
      {
        n: "Trucos Potentes",
        nv: 6,
        d: "Añades mod INT al daño de tus trucos de Mago."
      },
      {
        n: "Evocación Potenciada",
        nv: 10,
        d: "Añades mod INT al daño de cualquier conjuro de Evocación de Mago de Nv.1+."
      },
      {
        n: "Sobrecarga de Conjuro",
        nv: 14,
        d: "Lanzas un conjuro de Evocación de Nv.1-5 como si usases un espacio 1 nivel superior sin gastar uno superior. 1/descanso largo."
      },
    ],

    "Ilusionista [PHB 2024]": [
      {
        n: "Estudioso de la Ilusión",
        nv: 2,
        d: "Copiar conjuros de Ilusión cuesta la mitad. Tienes siempre preparado Imagen Menor (Minor Illusion), sin contar contra el límite."
      },
      {
        n: "Ilusionista Improvisado",
        nv: 2,
        d: "Lanzas Imagen Menor a voluntad sin gastar espacio."
      },
      {
        n: "Ilusiones Maleables",
        nv: 6,
        d: "Acción: cambias la naturaleza de cualquier ilusión tuya activa de duración ≥ 1 minuto, dentro de los límites normales del conjuro."
      },
      {
        n: "Sombra Ilusoria",
        nv: 10,
        d: "Creas una sombra ilusoria de una criatura vista. Puede atacar (tu mod de ataque, 1d6 psíquico) y moverse a tu orden. Si el objetivo cree en la ilusión recibe daño completo; si no, la mitad. 1/descanso largo."
      },
      {
        n: "Ilusiones Reales",
        nv: 14,
        d: "Criaturas que interactúen con ilusiones tuyas de Nv.1+ pueden recibir efectos reales: daño = nivel del espacio × 1d6 (salvación INT para evitarlo al creer que es ilusión)."
      },
    ],

    "Nigromante [PHB 2024]": [
      {
        n: "Estudioso de la Nigromancia",
        nv: 2,
        d: "Copiar conjuros de Nigromancia cuesta la mitad. Tienes siempre preparado Palabra Falsa de los Muertos (False Life), sin contar contra el límite."
      },
      {
        n: "Cosecha Siniestra",
        nv: 2,
        d: "Al matar con un conjuro de Nv.1+ a una criatura que no sea constructo ni no-muerto, recuperas PG = nivel del espacio + mod INT."
      },
      {
        n: "No-Muerto Resistente",
        nv: 6,
        d: "Tus no-muertos controlados tienen PG máximos y añaden tu bonificador de competencia a sus tiradas de daño."
      },
      {
        n: "Magia Macabra",
        nv: 10,
        d: "Lanzas Animación de Muertos o Crear No-Muertos sin espacio 1/descanso largo, pudiendo crear una criatura adicional sin espacio extra."
      },
      {
        n: "Señor de los No-Muertos",
        nv: 14,
        d: "Animar Muertos puede afectar a cuatro cadáveres adicionales. Tus no-muertos son inmunes a Expulsar No-Muertos."
      },
    ],

    "Transmutador [PHB 2024]": [
      {
        n: "Estudioso de la Transmutación",
        nv: 2,
        d: "Copiar conjuros de Transmutación cuesta la mitad. Tienes siempre preparado Alterar el Mundo (Alter Self), sin contar contra el límite."
      },
      {
        n: "Alquimia Menor",
        nv: 2,
        d: "En 10 minutos transmutes temporalmente hasta 1 pie cúbico de un material (madera, piedra, hierro, cobre, plata) en otro de esa lista. Dura hasta que te concentres o 1 hora."
      },
      {
        n: "Piedra del Transmutor",
        nv: 6,
        d: "En 8 horas creas una Piedra del Transmutor que otorga a su portador uno de estos beneficios: visión oscuridad 60 pies, +10 pies de velocidad, competencia en salvaciones CON, o resistencia a un tipo de daño elemental. Solo una piedra activa a la vez."
      },
      {
        n: "Transmutar Forma",
        nv: 10,
        d: "Lanzas Polimorfismo sobre ti mismo a voluntad sin espacio, sin concentración."
      },
      {
        n: "Maestro del Transmutor",
        nv: 14,
        d: "1/descanso largo: usa la Piedra para Aumentar, Restaurar (10d10 PG), Revertir Vejez (3d10 años) o Transmutar Materia (cubo 5 pies)."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Guerra Mágica [XGtE]": [
      {
        n: "Truco de Guerra",
        nv: 2,
        d: "Cuando realizas el ataque extra de Oleada de Acción (si tienes niveles de Guerrero) o como parte de un ataque con arma, puedes lanzar un truco de Mago que tenga tiempo de lanzamiento de 1 acción. El truco forma parte del ataque."
      },
      {
        n: "Conjuros de Guerra",
        nv: 2,
        d: "Cuando usas tu acción para lanzar un conjuro, puedes realizar un ataque con arma como Acción Adicional. Esto se aplica a cualquier conjuro de Nv.1 o superior con tiempo de lanzamiento de 1 acción."
      },
      {
        n: "Defensa Arcana",
        nv: 6,
        d: "Puedes usar Escudo (Shield) como Reacción sin gastar espacio de conjuro. 1/descanso corto o largo."
      },
      {
        n: "Magia de Poder",
        nv: 10,
        d: "Cuando usas Oleada de Acción (si tienes niveles de Guerrero) y lanzas un conjuro, puedes gastar un espacio de conjuro adicional para potenciarlo: el conjuro inflige daño adicional = 2d6 × nivel del espacio adicional gastado."
      },
      {
        n: "Resistencia Arcana",
        nv: 14,
        d: "Cuando eres el objetivo de un conjuro que requiere tirada de salvación, si superas la salvación igualmente sufres solo la mitad del daño o efecto (reduces a la mitad el daño aunque ya lo fuera). Si fallas, reduces el daño a la mitad."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Maestro de Orden [TCE]": [
      {
        n: "Encarnación del Orden",
        nv: 2,
        d: "Aprendes el idioma Modron. Cuando lanzas un conjuro de Nv.1 o superior usando un espacio de conjuro, puedes hacer que uno de tus aliados a 60 pies que pueda verte realice un ataque con arma como Reacción."
      },
      {
        n: "Voz del Orden",
        nv: 2,
        d: "Tienes ventaja en pruebas de Persuasión con Constructos y con criaturas del Plano Mecánico. Además, puedes lanzar Alarma sin espacio y sin materiales como ritual."
      },
      {
        n: "Impulso del Orden",
        nv: 6,
        d: "Cuando lanzas un conjuro de Nv.1+ y no requiere tirada de ataque ni salvación, puedes dar a un aliado a 60 pies ventaja en su siguiente tirada de ataque antes del fin de tu siguiente turno."
      },
      {
        n: "Mente del Orden",
        nv: 10,
        d: "Puedes lanzar Telepatía sin componentes ni espacio. Mientras la telepatía esté activa, tienes ventaja en tiradas de INT y eres inmune a Encantamiento."
      },
      {
        n: "Orden Perfecta",
        nv: 14,
        d: "Cuando lanzas un conjuro de daño que afecte a varios objetivos, todos los objetivos que fallen su salvación reciben el daño máximo posible (no tiras los dados de daño)."
      },
    ],

    /* ── Explorer's Guide to Wildemount ── */
    "Cronurgia [EGtW]": [
      {
        n: "Ajuste Temporal",
        nv: 2,
        d: "Como Reacción cuando tú o una criatura visible a 60 pies realiza una tirada de ataque, prueba de característica o salvación, puedes añadir o restar 1d4 al resultado (decides después de ver el d20, antes de saber si tiene éxito). Usos = mod INT (mínimo 1). Recarga con descanso largo."
      },
      {
        n: "Magia Temporal",
        nv: 2,
        d: "Puedes lanzar Slow y Haste sin gastar espacio (uno de cada uno por Descanso Largo). Además, cuando lanzas uno de estos conjuros, la concentración no puede ser interrumpida por daño."
      },
      {
        n: "Suspensión Temporal",
        nv: 6,
        d: "Como Acción puedes paralizar brevemente el tiempo alrededor de una criatura visible a 60 pies: la criatura queda Paralizada hasta el inicio de tu siguiente turno (salvación CON CD conjuro para resistir). 1/descanso corto o largo."
      },
      {
        n: "Guardia Temporal",
        nv: 10,
        d: "Como Reacción cuando tú o un aliado a 30 pies caéis a 0 PG, podéis usar la Reacción para que esa criatura quede suspendida en el tiempo hasta el inicio de tu siguiente turno: no recibe más daño, no puede actuar, pero tampoco puede morir hasta que el efecto termine. Al terminar, la criatura tiene 1 PG si tenía 0. 1/descanso largo."
      },
      {
        n: "Maestro del Tiempo",
        nv: 14,
        d: "Cuando usas Ajuste Temporal, puedes gastar un uso adicional para añadir o restar 1d6 (en lugar de 1d4) y puedes aplicarlo a dos criaturas distintas con el mismo uso de Reacción."
      },
    ],

    "Graviturgia [EGtW]": [
      {
        n: "Manipulación de la Densidad",
        nv: 2,
        d: "Como Acción puedes aumentar o disminuir la gravedad de una criatura u objeto a 30 pies durante 1 minuto. Densidad Alta: -10 pies a velocidad, ventaja en tiradas de FUE, desventaja en DES, +1d10 de daño contundente a sus ataques. Densidad Baja: +10 pies a velocidad, desventaja en FUE, ventaja en DES, -1d4 de daño de sus ataques. La criatura puede repetir la salvación CON (CD conjuro) al inicio de cada turno. Usos = mod INT (mínimo 1). Recarga con descanso largo."
      },
      {
        n: "Ajuste de Masa",
        nv: 2,
        d: "Puedes lanzar Levitar a voluntad sin espacio (solo sobre ti mismo, 10 minutos 1/descanso largo)."
      },
      {
        n: "Escudo de Gravedad",
        nv: 6,
        d: "Reacción: cuando eres golpeado por un ataque, reduces el daño en 1d10 + mod INT. Si el atacante está a 5 pies, es empujado 10 pies lejos de ti."
      },
      {
        n: "Empuje Gravitatorio",
        nv: 10,
        d: "Cuando dañas a una criatura con un conjuro de Mago, puedes moverla hasta 10 pies horizontal o verticalmente (salvación FUE CD conjuro para resistir). Si la mueves verticalmente y cae, recibe daño de caída normal."
      },
      {
        n: "Maestro de la Graviturgia",
        nv: 14,
        d: "Puedes volar a 30 pies de forma permanente (sin concentración). Además, cuando lanzas un conjuro de daño de Mago puedes hacer que ignore la resistencia al tipo de daño de fuerza de una criatura durante ese lanzamiento."
      },
    ],

    /* ── Tal'Dorei Campaign Setting Reborn ── */
    "Magia de la Sangre [TCSR]": [
      {
        n: "Conjuros de la Sangre",
        nv: 2,
        d: "Aprendes False Life y Ray of Sickness; siempre preparados, sin contar contra el límite. Puedes copiar conjuros de Nigromancia en tu libro a la mitad de coste."
      },
      {
        n: "Sacrificio Hemático",
        nv: 2,
        d: "Cuando lanzas un conjuro de Mago de Nv.1 o superior, puedes perder PG = 2 × nivel del espacio para lanzarlo sin gastar espacio de conjuro. Esta pérdida no puede reducirte a 0 PG."
      },
      {
        n: "Rastreo Sanguíneo",
        nv: 6,
        d: "Cuando tocas a una criatura (o la golpeas con un ataque), puedes marcarla con magia de sangre durante 1 hora. Mientras esté marcada: sabes su ubicación exacta, tienes ventaja en tiradas de ataque contra ella, y cuando la dañas con un conjuro añades mod INT al daño. Usos = mod INT. Recarga con descanso largo."
      },
      {
        n: "Maldición de la Sangre",
        nv: 10,
        d: "Cuando dañas a una criatura con un conjuro de Nv.1+, puedes maldecirla: pierde PG = mod INT al inicio de cada turno durante 1 minuto (salvación CON CD conjuro para terminar). Si la criatura muere bajo la maldición, recuperas un espacio de conjuro de Nv.1. 1/descanso largo."
      },
      {
        n: "Maestro de la Sangre",
        nv: 14,
        d: "Puedes gastar PG (hasta la mitad de tu máximo) para obtener espacios de conjuro: cada 4 PG gastados = 1 espacio de Nv.1 (máximo espacios de Nv.5, calculados acumulativamente). Los espacios creados así desaparecen al terminar el Descanso Largo siguiente. 1/descanso largo."
      },
    ],

    /* ── Sword Coast Adventurer's Guide (original) / Tasha's Cauldron of Everything (revisión) ── */
    "Cantor de Espadas [SCAG/TCE]": [
      {
        n: "Entrenamiento en Guerra y Canto",
        nv: 2,
        d: "Ganas competencia en armadura ligera y con un tipo de arma cuerpo a cuerpo de una mano a tu elección (p.ej. Rapieras, Espadas Cortas). También ganas competencia en la habilidad Actuación si no la tenías. No puedes usar las habilidades de esta subclase si llevas armadura media o pesada o usas escudo. Nota: la versión original de SCAG restringía esta subclase a elfos y semielfos; la revisión de TCE elimina esa restricción racial."
      },
      {
        n: "Canción de Espadas",
        nv: 2,
        d: "Puedes invocar la magia élfica de la Canción de Espadas como AA, siempre que no lleves armadura media/pesada ni escudo. Mientras esté activa (dura 1 minuto): +mod INT a tu CA, +10 pies a tu velocidad de caminar, ventaja en tiradas de salvación de CON para mantener concentración. Termina si caes Incapacitado, si vistes armadura prohibida o si usas un escudo. Usos = bonificador de competencia. Recarga con descanso largo."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        d: "Atacas dos veces cuando usas la acción de Atacar. Además, puedes sustituir uno de esos ataques por un truco de Mago con tiempo de lanzamiento de 1 acción."
      },
      {
        n: "Canción de Defensa",
        nv: 10,
        d: "Mientras tu Canción de Espadas esté activa, puedes usar tu Reacción cuando recibes daño para gastar un espacio de conjuro y reducir ese daño en una cantidad = 5 × nivel del espacio."
      },
      {
        n: "Canción de Victoria",
        nv: 14,
        d: "Mientras tu Canción de Espadas esté activa, añades tu modificador de INT (mínimo +1) al daño de tus ataques de arma cuerpo a cuerpo."
      },
    ],

    /* ── Forgotten Realms: Heroes of Faerun / PHB 2024 (Nov 2025) ── */
    "Cantor de Espadas [HoF 2024]": [
      {
        n: "Entrenamiento en Guerra y Canto",
        nv: 3,
        d: "Ganas competencia en armadura ligera y con una categoría de arma cuerpo a cuerpo de una mano a tu elección. Ganas competencia en Actuación si no la tenías. También ganas un segundo Estilo de Combate (elige entre Duelo, Armas a Dos Manos o el nuevo Estilo de Defensa Arcana: +1 CA cuando llevas un arma en una mano y no llevas escudo). No puedes activar rasgos de la subclase con armadura media/pesada ni escudo equipado."
      },
      {
        n: "Canción de Espadas",
        nv: 3,
        d: "AA: invocas la Canción de Espadas. Dura 1 minuto. Mientras esté activa: +mod INT a tu CA, +10 pies a velocidad de caminar, ventaja en tiradas de CON para concentración, y añades mod INT a las tiradas de Acrobacias. Termina si caes Incapacitado, si usas escudo o armadura prohibida. Usos = bonificador de competencia. Recarga con descanso largo."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        d: "Atacas dos veces cuando usas la acción de Atacar. Puedes sustituir uno de esos ataques por un truco de Mago con tiempo de lanzamiento de 1 acción."
      },
      {
        n: "Canción de Defensa",
        nv: 10,
        d: "Mientras tu Canción de Espadas esté activa, como Reacción cuando recibes daño puedes gastar un espacio de conjuro para reducir ese daño en 5 × nivel del espacio."
      },
      {
        n: "Canción de Victoria",
        nv: 14,
        d: "Siempre que lanzas un conjuro con tiempo de lanzamiento de 1 acción, puedes realizar un ataque con arma como AA. Este ataque puede hacerse antes o después de lanzar el conjuro. (En la versión TCE/SCAG este rasgo añadía INT al daño; en la versión HoF 2024 se convierte en un ataque adicional completo para reflejar mejor la fantasía del 'gish'.)"
      },
    ],

  }, // fin subclases
}; // fin CLASE_MAGO
