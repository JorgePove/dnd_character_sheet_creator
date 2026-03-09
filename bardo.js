/* ══════════════════════════════════════════════════════════════════
   bardo.js — Bardo: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Mythic Odysseys of Theros (MOoT)
     Van Richten's Guide to Ravenloft (VRGtR)
     Tal'Dorei Campaign Setting Reborn (TCSR)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (13 entradas):
     Colegio del Saber          [PHB 2014] / [PHB 2024]
     Colegio del Valor          [PHB 2014] / [PHB 2024]
     Colegio del Glamur         [XGtE]     / [PHB 2024]
     Colegio de las Espadas     [XGtE]
     Colegio de los Susurros    [XGtE]
     Colegio de la Elocuencia   [MOoT]     (📌 reimpreso en TCE)
     Colegio de la Creación     [TCE]
     Colegio de los Espíritus   [VRGtR]
     Colegio de la Danza        [PHB 2024] ← nueva
     Colegio de la Tragedia     [TCSR]
══════════════════════════════════════════════════════════════════ */

const CLASE_BARDO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras. Armas simples, espadas cortas, espadas largas, rapieras, ballestas de mano. Tres instrumentos musicales de tu elección. Salvaciones: DES y CAR. Habilidades: elige 3 de cualquier lista."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "CAR es tu característica de conjuro (CD = 8 + comp + mod CAR). El Bardo es un lanzador completo. Conoce un número fijo de conjuros (no los prepara): trucos: 2 (Nv.1) → 3 (Nv.4) → 4 (Nv.10); conjuros conocidos: 4 (Nv.1) → escala hasta 22 (Nv.20). Puede cambiar un conjuro conocido por otro al subir de nivel."
    },
    {
      n: "Inspiración Bárdica",
      nv: 1,
      d: "Como Acción Adicional puedes inspirar a una criatura distinta de ti que pueda oírte a 60 pies. Esa criatura gana un Dado de Inspiración Bárdica (d6 → d8 Nv.5 → d10 Nv.10 → d12 Nv.15) que puede añadir a una tirada de ataque, prueba de característica o tirada de salvación en los próximos 10 minutos (decide antes de saber si la tirada tuvo éxito o no). Solo puede tenerse un Dado de Inspiración Bárdica a la vez. Usos = mod CAR (mínimo 1). Se recuperan con descanso largo (o corto desde Nv.5 con Fuente de Inspiración)."
    },
    {
      n: "Pluricompetente",
      nv: 1,
      d: "Cuando usas tu dado de habilidades con una habilidad en la que tengas competencia, usas tu dado de competencia dos veces (sin sumar los resultados). Eliges el resultado más favorable. Puedes aplicarlo a cualquier tirada de competencia, no solo de habilidades."
    },
    {
      n: "Colegio Bárdico",
      nv: 3,
      d: "Eliges tu subclase (Colegio Bárdico). Otorga rasgos en Nv.3, 6 y 14."
    },
    {
      n: "Competencia Extra",
      nv: 3,
      d: "Ganas competencia con dos habilidades adicionales de tu elección."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Fuente de Inspiración",
      nv: 5,
      d: "Recuperas todos tus usos de Inspiración Bárdica al terminar un descanso corto o largo (antes solo con largo)."
    },
    {
      n: "Contraencantamiento",
      nv: 6,
      d: "Puedes usar tu acción para comenzar una actuación que dure hasta el final de tu siguiente turno. Durante ese tiempo, tú y cualquier aliado amistoso a 30 pies que pueda oírte tenéis ventaja en tiradas de salvación contra ser Asustados o Encantados. Para mantenerlo, debes concentrarte (como en un conjuro de concentración). La actuación se interrumpe si eres incapacitado."
    },
    {
      n: "Secretos Mágicos",
      nv: 10,
      d: "Aprendes 2 conjuros de cualquier clase (incluidas clases que no tengas). Deben ser de un nivel que puedas lanzar. Cuentan como conjuros de Bardo para ti. Aprendes 2 conjuros adicionales en Nv.14 y otros 2 en Nv.18."
    },
    {
      n: "Secretos Mágicos [PHB 2014]",
      nv: 10,
      d: "(PHB 2014) Aprendes 2 conjuros de cualquier clase en Nv.10, otros 2 en Nv.14 y otros 2 en Nv.18."
    },
    {
      n: "Inspiración Superior [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Al tirar Iniciativa, si te quedan menos de 2 Dados de Inspiración Bárdica, recuperas inmediatamente Dados hasta tener 2. Además, el dado de Inspiración Bárdica es ahora d12."
    },
    {
      n: "Maestría Superior [PHB 2014]",
      nv: 20,
      d: "(PHB 2014) Cuando uses Inspiración Bárdica y el dado muestre su resultado más bajo posible, puedes relanzarlo y usar el nuevo resultado."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (COLEGIOS BÁRDICOS)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Colegio del Saber [PHB 2014]": [
      {
        n: "Competencias Extra",
        nv: 3,
        d: "Ganas competencia con tres habilidades adicionales de tu elección (además de las dos del Bardo base en Nv.3)."
      },
      {
        n: "Palabras Cortantes",
        nv: 3,
        d: "Cuando una criatura que puedas ver a 60 pies realice una tirada de ataque, prueba de característica o tirada de daño, puedes usar tu Reacción y gastar uno de tus Dados de Inspiración Bárdica para restar el resultado del dado + tu mod CAR de esa tirada. Solo puede usarse si la criatura puede oírte y no está inmune al Encanto."
      },
      {
        n: "Secretos Mágicos Adicionales",
        nv: 6,
        d: "Aprendes 2 conjuros de cualquier clase (incluso antes del rasgo estándar de Secretos Mágicos en Nv.10). Deben ser de un nivel que puedas lanzar. Cuentan como conjuros de Bardo."
      },
      {
        n: "Capacidad Incomparable",
        nv: 14,
        d: "Cuando hagas una prueba de habilidad que no tenga competencia, puedes añadir la mitad de tu bonificador de competencia (redondeado abajo). Además, cuando hagas una prueba de habilidad con competencia y tengas Inspiración Bárdica activa, puedes gastar el dado y añadirlo al total aunque el resultado ya se conozca."
      },
    ],

    "Colegio del Valor [PHB 2014]": [
      {
        n: "Competencias Extra",
        nv: 3,
        d: "Ganas competencia con armaduras medias, escudos y armas marciales."
      },
      {
        n: "Inspiración de Combate",
        nv: 3,
        d: "Los aliados que reciban tu Inspiración Bárdica pueden usar el dado para añadirlo también a una tirada de daño con arma, o como Reacción cuando sean atacados, sumarlo a su CA para ese ataque (deciden antes de saber si el ataque impacta)."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        d: "Atacas dos veces cuando usas la acción de Atacar."
      },
      {
        n: "Magia de Batalla",
        nv: 14,
        d: "Cuando usas tu acción para lanzar un conjuro de Bardo, puedes realizar un ataque con arma como Acción Adicional."
      },
    ],

    /* ── PHB 2024 ── */
    "Colegio del Saber [PHB 2024]": [
      {
        n: "Competencias Extra",
        nv: 3,
        d: "Ganas competencia con tres habilidades adicionales de tu elección."
      },
      {
        n: "Palabras Cortantes",
        nv: 3,
        d: "Reacción: cuando una criatura visible a 60 pies realice una tirada de ataque, prueba de característica o tirada de daño, gastas un Dado de Inspiración Bárdica y restas el resultado + mod CAR del total. La criatura debe poder oírte y no estar inmune al Encanto."
      },
      {
        n: "Secretos Mágicos Adicionales",
        nv: 6,
        d: "Aprendes 2 conjuros de cualquier clase que puedas lanzar. Estos conjuros siempre se consideran conocidos para ti y no cuentan contra tu límite de conjuros conocidos."
      },
      {
        n: "Capacidad Incomparable",
        nv: 14,
        d: "Cuando hagas una prueba de habilidad, puedes gastar un Dado de Inspiración Bárdica y añadirlo al resultado (después de ver el d20, antes de conocer el éxito o fallo)."
      },
    ],

    "Colegio del Valor [PHB 2024]": [
      {
        n: "Competencias Extra",
        nv: 3,
        d: "Ganas competencia con armaduras medias, escudos y armas marciales."
      },
      {
        n: "Inspiración de Combate",
        nv: 3,
        d: "Los Dados de Inspiración Bárdica que otorgues pueden usarse también para añadir daño a un ataque con arma, o como Reacción para añadirlo a la CA contra un ataque entrante."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        d: "Atacas dos veces cuando usas la acción de Atacar."
      },
      {
        n: "Magia de Batalla",
        nv: 14,
        d: "Cuando usas tu acción para lanzar un conjuro, puedes hacer un ataque con arma como Acción Adicional."
      },
    ],

    "Colegio del Glamur [PHB 2024]": [
      {
        n: "Velo del Glamur",
        nv: 3,
        d: "Puedes lanzar Disfrazarse a voluntad sin gastar espacio de conjuro."
      },
      {
        n: "Inspiración de las Hadas",
        nv: 3,
        d: "Cuando otorgas Inspiración Bárdica, también puedes otorgar a esa criatura una velocidad de movimiento adicional de 5 pies hasta el final de su próximo turno."
      },
      {
        n: "Encantamiento Mesmerico",
        nv: 3,
        d: "Como Acción puedes encantar a criaturas a 60 pies. Cada una debe superar una salvación SAB (CD conjuro) o quedará Encantada hasta el final de tu siguiente turno, e incapacitada mientras lo esté. Usos = mod CAR (mínimo 1). Se recuperan con descanso largo."
      },
      {
        n: "Presencia de las Hadas",
        nv: 6,
        d: "Cuando una criatura falle contra tu Encantamiento Mesmerico o cuando la criatura encantada tenga que verte actuar, queda fascinada: ventaja en tiradas de CAR (Persuasión) contra ella durante 1 hora."
      },
      {
        n: "Manto del Glamur",
        nv: 14,
        d: "Como Acción puedes envolverte a ti y a aliados voluntarios a 30 pies en un manto de ilusión. Durante 1 hora todos parecen seres mágicos (elfos, hadas, etc.) a elección del Bardo. Las criaturas sospechosas necesitan superar una prueba de INT enfrentada contra tu CD de conjuro para ver la ilusión."
      },
    ],

    "Colegio de la Danza [PHB 2024]": [
      {
        n: "Bailarín Experto",
        nv: 3,
        d: "Ganas competencia en Acrobacias. Si ya la tienes, ganas dominio (doble bonificador de competencia) en esa habilidad. Además, en combate, no provocas ataques de oportunidad cuando usas tu movimiento."
      },
      {
        n: "Paso Inspirador",
        nv: 3,
        d: "Cuando otorgas Inspiración Bárdica, tú o el receptor podéis moveros hasta la mitad de vuestra velocidad como parte de esa misma Acción Adicional. Este movimiento no provoca ataques de oportunidad."
      },
      {
        n: "Danza Encantadora",
        nv: 3,
        d: "Cuando usas Contraencantamiento, añades tu mod CAR a la CA de los aliados afectados hasta el inicio de tu siguiente turno."
      },
      {
        n: "Coreografía Sincronizada",
        nv: 6,
        d: "Cuando un aliado que lleve uno de tus Dados de Inspiración Bárdica sea atacado, puede gastar el dado como Reacción para moverse hasta la mitad de su velocidad sin provocar ataques de oportunidad, haciendo que el ataque falle si sale del alcance del atacante."
      },
      {
        n: "Danza del Fin del Mundo",
        nv: 14,
        d: "Como Acción puedes comenzar una danza mágica que dura hasta 1 minuto (concentración). Mientras dure: tú y los aliados a 30 pies que puedan verte ganan +2 a CA, ventaja en tiradas de salvación de DES y su velocidad de movimiento aumenta 10 pies."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Colegio del Glamur [XGtE]": [
      {
        n: "Maná del Manantial",
        nv: 3,
        d: "Puedes lanzar Disfrazarse a voluntad sin gastar espacio de conjuro."
      },
      {
        n: "Inspiración Cautivadora",
        nv: 3,
        d: "Cuando otorgas Inspiración Bárdica, el receptor también puede añadir el dado a su CA como Reacción cuando sea atacado (antes de conocer si el ataque impacta o no)."
      },
      {
        n: "Presencia Fascinante",
        nv: 3,
        d: "Como Acción gastas un uso de Inspiración Bárdica y te diriges a criaturas a 60 pies (hasta un número = mod CAR). Deben superar una salvación SAB (CD conjuro) o quedar Encantadas o Asustadas por ti durante 1 minuto. Las encantadas se quedan quietas, fascinadas; las asustadas huyen. Al final de cada turno pueden repetir la salvación."
      },
      {
        n: "Majestuosa Presencia",
        nv: 6,
        d: "Cuando una criatura falla contra tu Presencia Fascinante o cuando el efecto termine en ella, queda confundida sobre tu verdadera naturaleza durante 24 horas y tiene desventaja en tiradas de ataque contra ti."
      },
      {
        n: "Manto del Terror",
        nv: 14,
        d: "Como Acción te revelas como ser feérico de terrible belleza. Cada criatura hostil a 60 pies debe superar una salvación SAB (CD conjuro) o quedará Asustada de ti durante 1 minuto. Puede repetir la salvación al final de cada turno. 1/descanso largo."
      },
    ],

    "Colegio de las Espadas [XGtE]": [
      {
        n: "Competencias Extra",
        nv: 3,
        d: "Ganas competencia con armas marciales y armaduras medias. Si ya llevas un instrumento musical como foco, puedes usar un arma con la que tengas competencia también como foco."
      },
      {
        n: "Estilo de Combate",
        nv: 3,
        d: "Elige un Estilo de Combate: Duelo (+2 al daño con arma de una mano si no empuñas otra arma) o Armas a Dos Manos (cuando saques 1 o 2 en un dado de daño de arma con dos manos, puedes repetir el dado y usar el nuevo resultado)."
      },
      {
        n: "Floritura Bárdica",
        nv: 3,
        d: "Cuando realizas un ataque con arma, puedes gastar un Dado de Inspiración Bárdica para aplicar una Floritura. Elige: Floritura Defensiva — añades el dado a la tirada de daño y a tu CA hasta el inicio de tu siguiente turno. Floritura de Cortante — añades el dado al daño y empujas al objetivo 5 pies. Floritura Mágica — añades el dado al daño y al alcance de tu siguiente conjuro o ataque a distancia (en pies, multiplicado por 5)."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        d: "Atacas dos veces cuando usas la acción de Atacar."
      },
      {
        n: "Maestría con la Hoja",
        nv: 14,
        d: "Tu Dado de Inspiración Bárdica al usar Floriturase convierte en 2 dados (tiras ambos y usas la suma). Además, cuando uses Floritura Defensiva puedes aplicar el bonus de CA también a un aliado visible a 5 pies."
      },
    ],

    "Colegio de los Susurros [XGtE]": [
      {
        n: "Palabras de Terror",
        nv: 3,
        d: "Como Acción puedes hablar mágicamente con una criatura Humanoide a 30 pies durante al menos 1 minuto para sembrar en su mente un terror profundo. Al final de la conversación, la criatura debe superar una salvación SAB (CD conjuro) o quedará Asustada de ti durante 1 hora. La criatura no sabe que la has hechizado. Usos = mod CAR (mínimo 1). Se recuperan con descanso largo."
      },
      {
        n: "Puñal Psíquico",
        nv: 3,
        d: "Cuando golpeas a una criatura con un ataque de arma, puedes gastar un Dado de Inspiración Bárdica para añadir daño psíquico adicional = el resultado del dado + mod CAR. No puedes usar este rasgo de nuevo hasta el inicio de tu siguiente turno."
      },
      {
        n: "Manto de los Susurros",
        nv: 6,
        d: "Como Reacción cuando un Humanoide muere a 30 pies de ti, puedes capturar mágicamente su sombra. Como Acción puedes ponerte esa sombra, transformándote en una copia perfecta del muerto (apariencia, voz, recuerdos superficiales). La ilusión dura 1 hora o hasta que uses una AA para terminarla. Criaturas que conocían bien al muerto pueden detectar el engaño (Perspicacia enfrentada a tu Engaño). 1 sombra a la vez."
      },
      {
        n: "Conocimiento de los Susurros",
        nv: 14,
        d: "Cuando usas el Manto de los Susurros, también accedes a los recuerdos del muerto de las últimas 24 horas de su vida (información que sabía, personas que vio, etc.) a criterio del DM."
      },
    ],

    /* ── Mythic Odysseys of Theros / Tasha's Cauldron ── */
    "Colegio de la Elocuencia [MOoT/TCE]": [
      {
        n: "Plata en la Lengua",
        nv: 3,
        d: "Cuando hagas una prueba de CAR (Persuasión) o CAR (Engaño), trata cualquier resultado de 9 o inferior en el d20 como si hubieras sacado 10."
      },
      {
        n: "Palabras Tranquilizadoras",
        nv: 3,
        d: "Como Acción Adicional gastas un Dado de Inspiración Bárdica para restaurar PG = resultado del dado + mod CAR a un aliado que puedas ver a 60 pies."
      },
      {
        n: "Palabras Envenenadas",
        nv: 3,
        d: "Cuando usas Palabras Cortantes y la criatura falla su tirada, recuperas el Dado de Inspiración Bárdica gastado."
      },
      {
        n: "Maestría Universal",
        nv: 6,
        d: "Cuando hagas una prueba de habilidad que use CAR, puedes tratarla como si tuvieras competencia y añadir tu bonificador de competencia al resultado. Si ya tienes competencia, añade el doble (dominio)."
      },
      {
        n: "Perfecto Embaucador",
        nv: 14,
        d: "Cuando hagas una prueba de CAR (Engaño) o CAR (Persuasión), puedes añadir un Dado de Inspiración Bárdica al resultado. Puedes hacerlo después de ver el d20 pero antes de que el DM declare el resultado."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Colegio de la Creación [TCE]": [
      {
        n: "Nota de Potencial",
        nv: 3,
        d: "Cuando otorgas Inspiración Bárdica, el receptor obtiene un efecto adicional según el uso del dado: Tirada de ataque — al impactar inflige daño adicional = el Dado de Inspiración Bárdica. Prueba de característica — si la prueba tiene éxito, el personaje puede empujar a una criatura a 5 pies (sin acción). Tirada de salvación — si supera la salvación, gana PG temporales = el Dado de Inspiración Bárdica."
      },
      {
        n: "Mote de Potencial",
        nv: 3,
        d: "Puedes lanzar Animar Objeto (versión reducida: 1 objeto Pequeño o Diminuto) sin gastar espacio de conjuro. El objeto animado actúa inmediatamente en el mismo turno. Usos = mod CAR (mínimo 1). Se recuperan con descanso largo."
      },
      {
        n: "Actuación de la Creación",
        nv: 6,
        d: "Como Acción (gastando un Dado de Inspiración Bárdica) conjuras un objeto no mágico de hasta tamaño Grande en un espacio libre a 10 pies. El objeto puede tener hasta 10+nivel×5 libras de peso. Dura 1 hora, luego desaparece. Si el objeto requeriría componentes mágicos para ser creado, el coste equivalente determina el tiempo máximo que puede existir (a criterio del DM). 1/descanso largo."
      },
      {
        n: "Inspiración Animada",
        nv: 14,
        d: "Puedes lanzar Animar Objeto (con la lista completa del conjuro) sin gastar espacio de conjuro. Además, los objetos que animas son más resistentes: +2 a CA y daño adicional = mod CAR."
      },
    ],

    /* ── Van Richten's Guide to Ravenloft ── */
    "Colegio de los Espíritus [VRGtR]": [
      {
        n: "Guía Espiritual",
        nv: 3,
        d: "Ganas competencia con Ocultismo o Historia (a tu elección). Si ya las tienes, ganas dominio."
      },
      {
        n: "Relatos de los Espíritus",
        nv: 3,
        d: "Puedes lanzar Hablar con los Muertos sin gastar espacio de conjuro. Se recupera con descanso largo."
      },
      {
        n: "Fábula Espiritual",
        nv: 3,
        d: "Cuando otorgas Inspiración Bárdica, tiras el dado dos veces y aplicas el resultado más alto. Además, si el dado muestra ciertos resultados (ver tabla de Fábulas Espirituales), el receptor puede aplicar efectos adicionales únicos determinados por el espíritu convocado (efectos narrativos o mecánicos adicionales a criterio del DM según una tabla de d6 efectos)."
      },
      {
        n: "Medio Espiritual",
        nv: 6,
        d: "Puedes lanzar Disfrazarse como ritual sin gastar espacio de conjuro. Además, cuando usas Hablar con los Muertos, puedes hacerlo durante un descanso corto para obtener información más detallada."
      },
      {
        n: "Posesión Espectral",
        nv: 14,
        d: "Como Acción gastas un Dado de Inspiración Bárdica y permites que un espíritu te posea. Durante 1 minuto: ganas ventaja en todas las pruebas de característica y salvaciones, y cuando dañas a una criatura añades el dado de Inspiración Bárdica como daño necrótico adicional. Al terminar, el espíritu se marcha y sufres 1 nivel de Agotamiento. 1/descanso largo."
      },
    ],

    /* ── Tal'Dorei Campaign Setting Reborn ── */
    "Colegio de la Tragedia [TCSR]": [
      {
        n: "Herramienta de la Tragedia",
        nv: 3,
        d: "Aprendes el truco Taumaturgia. Cuando usas Inspiración Bárdica, puedes optar por una Inspiración Trágica: el receptor no añade el dado a una tirada sino que lo usa para infligir daño psíquico adicional = resultado del dado + mod CAR al primer objetivo que golpee antes del final de su próximo turno."
      },
      {
        n: "Palabras de Terror",
        nv: 3,
        d: "Como Acción puedes pronunciar palabras oscuras que afectan a un Humanoide a 30 pies. Debe superar una salvación SAB (CD conjuro) o quedará Asustado de ti durante 1 minuto, y recibirá 2d6 de daño psíquico al inicio de cada turno mientras esté asustado. Puede repetir la salvación al final de cada turno. Usos = mod CAR. Se recuperan con descanso largo."
      },
      {
        n: "Patética Sinfónica",
        nv: 6,
        d: "Cuando una criatura a 30 pies falla una tirada de salvación, puedes usar tu Reacción para dar Inspiración Bárdica a un aliado dentro del área de efecto del conjuro o del ataque que causó la salvación. El receptor puede usar ese dado inmediatamente para reducir el daño recibido."
      },
      {
        n: "Muerte del Héroe",
        nv: 14,
        d: "Cuando un aliado cae a 0 PG a 60 pies, puedes usar tu Reacción para pronunciar una elegía poderosa. Todos los aliados a 30 pies del aliado caído recuperan PG = resultado de tu dado de Inspiración Bárdica + mod CAR. Además, el aliado caído se estabiliza automáticamente. 1/descanso largo."
      },
    ],

  }, // fin subclases
}; // fin CLASE_BARDO
