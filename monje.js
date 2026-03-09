/* ══════════════════════════════════════════════════════════════════
   monje.js — Monje: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Sword Coast Adventurer's Guide (SCAG)
     Fizban's Treasury of Dragons (FToD)
     Tal'Dorei Campaign Setting Reborn (TCSR)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (15 entradas):
     Camino de la Mano Abierta    [PHB 2014] / [PHB 2024]
     Camino de las Sombras        [PHB 2014] / [PHB 2024]
     Camino de los Cuatro Elementos [PHB 2014]
     Camino del Guerrero Elemental  [PHB 2024] ← revisión de Cuatro Elementos
     Camino de la Larga Muerte    [SCAG]
     Camino del Alma del Sol      [SCAG]     (📌 reimpreso en XGtE)
     Camino del Maestro Borracho  [XGtE]
     Camino del Kensei            [XGtE]
     Camino de la Misericordia    [TCE]      / [PHB 2024]
     Camino del Ser Astral        [TCE]
     Camino del Dragón Ascendente [FToD]
     Camino del Alma Cobalt       [TCSR]
══════════════════════════════════════════════════════════════════ */

const CLASE_MONJE = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras: ninguna. Armas: armas simples, espadas cortas. Herramientas: un tipo de herramienta artesana o instrumento musical a tu elección. Salvaciones: FUE y DES. Habilidades: elige 2 entre Acrobacias, Atletismo, Historia, Perspicacia, Religión y Sigilo."
    },
    {
      n: "Defensa sin Armadura",
      nv: 1,
      d: "Sin armadura ni escudo: CA = 10 + mod DES + mod SAB."
    },
    {
      n: "Artes Marciales",
      nv: 1,
      d: "Con ataques desarmados o armas de monje (armas simples cuerpo a cuerpo sin la propiedad pesada ni a dos manos, y espadas cortas): puedes usar DES en lugar de FUE para ataque y daño; el dado de daño mínimo es el Dado de Artes Marciales (d4 → d6 Nv.5 → d8 Nv.11 → d10 Nv.17); cuando usas la acción de Atacar con arma de monje o desarmado, puedes hacer un ataque desarmado adicional como AA."
    },
    {
      n: "Ki / Puntos de Enfoque [PHB 2024]",
      nv: 2,
      d: "Tienes un número de puntos de Ki = tu nivel de Monje. Se recuperan con Descanso Corto o Largo. Usos básicos: Lluvia de Golpes (AA: dos ataques desarmados adicionales, 1 Ki), Defensa Paciente (AA: Esquivar, 1 Ki), Viento que Golpea (AA: Desengancharse o Correr, 1 Ki). PHB 2024 renombra 'Ki' como 'Puntos de Enfoque' y añade Golpe Impactante (Ki Fueled Attack): si lanzas un conjuro de monje como AA puedes hacer un ataque desarmado gratuito."
    },
    {
      n: "Movimiento sin Armadura",
      nv: 2,
      d: "+10 pies a velocidad de caminar sin armadura ni escudo (→+15 Nv.6 →+20 Nv.10 →+25 Nv.14 →+30 Nv.18). En Nv.9: puedes correr por superficies verticales y sobre líquidos sin caer durante el movimiento."
    },
    {
      n: "Tradición Monástica",
      nv: 3,
      d: "Eliges tu subclase (Tradición Monástica / Camino Monástico). Otorga rasgos en Nv.3, 6, 11 y 17."
    },
    {
      n: "Desviar Proyectiles",
      nv: 3,
      d: "Reacción: al recibir un ataque de proyectil a distancia, reduces el daño en 1d10 + mod DES + nivel de Monje. Si lo reduces a 0, puedes gastar 1 Ki para devolver el proyectil (ataque a distancia 20/60 con competencia, como arma de monje)."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Golpe Aturdidor",
      nv: 5,
      d: "Al golpear con ataque de arma de monje o desarmado, gastas 1 Ki: el objetivo supera salvación CON (CD = 8 + comp + mod SAB) o queda Aturdido hasta el inicio de tu siguiente turno."
    },
    {
      n: "Golpe Ki",
      nv: 6,
      d: "Tus ataques de arma de monje y desarmados cuentan como mágicos a efectos de superar resistencias e inmunidades."
    },
    {
      n: "Evasión",
      nv: 7,
      d: "Cuando haces una tirada de salvación de DES contra un efecto que causa daño en éxito: si superas no recibes daño; si fallas solo recibes la mitad."
    },
    {
      n: "Calma de la Mente",
      nv: 7,
      d: "No puedes ser Encantado ni Asustado."
    },
    {
      n: "Caída Lenta",
      nv: 4,
      d: "Reacción: reduces el daño de caída en 5 × nivel de Monje."
    },
    {
      n: "Cuerpo Puro",
      nv: 10,
      d: "Inmunidad a enfermedades y veneno."
    },
    {
      n: "Lengua del Sol y la Luna",
      nv: 13,
      d: "Entiendes todos los idiomas hablados y cualquier criatura que hable un idioma puede entenderte."
    },
    {
      n: "Alma de Diamante",
      nv: 14,
      d: "Competencia en todas las tiradas de salvación. Cuando falles una, puedes gastar 1 Ki para repetirla y usar el nuevo resultado."
    },
    {
      n: "Alma Eterna",
      nv: 15,
      d: "No envejeces y no puedes ser envejecido mágicamente."
    },
    {
      n: "Cuerpo Vacío",
      nv: 18,
      d: "Gastas 4 Ki para volverte Invisible durante 1 minuto. Durante ese tiempo tienes resistencia a todo daño excepto el de fuerza. Además, puedes gastar 8 Ki para lanzar Proyección Astral sobre ti mismo (sin gastar espacio ni materiales)."
    },
    {
      n: "Ser Perfecto",
      nv: 20,
      d: "(PHB 2014) Al tirar Iniciativa sin Ki, recuperas Ki = mod SAB (mínimo 4)."
    },
    {
      n: "Ser Perfecto [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Al tirar Iniciativa, si tienes menos de 4 Puntos de Enfoque, recuperas hasta tener 4."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (TRADICIONES MONÁSTICAS)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Camino de la Mano Abierta [PHB 2014]": [
      {
        n: "Técnica de la Mano Abierta",
        nv: 3,
        d: "Cuando golpeas con uno de los ataques de Lluvia de Golpes, puedes imponer uno de los siguientes efectos al objetivo: Derribar (salvación DES o queda Tumbado), Empujar (salvación FUE o es empujado hasta 15 pies), Impedir (no puede usar Reacciones hasta el inicio de tu siguiente turno, sin salvación)."
      },
      {
        n: "Integridad del Cuerpo",
        nv: 6,
        d: "Acción: te curas PG = 3 × nivel de Monje. 1/descanso largo."
      },
      {
        n: "Tranquilidad",
        nv: 11,
        d: "Al terminar un Descanso Largo, ganas el efecto del conjuro Santuario (duración hasta el inicio del siguiente combate o tu próximo Descanso Largo). CD de salvación = 8 + comp + mod SAB."
      },
      {
        n: "Palma Vibrante",
        nv: 17,
        d: "Al golpear con un ataque desarmado, gastas 3 Ki para establecer vibraciones letales que duran días = tu nivel de Monje. Como Acción puedes terminarlas: el objetivo sufre 10d10 de daño (salvación CON CD = 8 + comp + mod SAB para reducir a la mitad). Las vibraciones terminan si usas esta acción, si el objetivo las recibe de nuevo o al acabar su duración."
      },
    ],

    "Camino de las Sombras [PHB 2014]": [
      {
        n: "Artes de las Sombras",
        nv: 3,
        d: "Puedes gastar 2 Ki para lanzar Oscuridad, Darkvision, Pasar sin Rastro o Silencio sin componentes materiales."
      },
      {
        n: "Paso en las Sombras",
        nv: 6,
        d: "AA: cuando estás en oscuridad o luz tenue, te teletransportas hasta 60 pies a otro espacio de oscuridad o luz tenue visible. Luego tienes ventaja en el primer ataque cuerpo a cuerpo del turno."
      },
      {
        n: "Manto de Sombras",
        nv: 11,
        d: "AA + 1 Ki: te vuelves Invisible hasta el inicio de tu siguiente turno."
      },
      {
        n: "Oportunista en las Sombras",
        nv: 17,
        d: "Reacción: cuando una criatura a 5 pies es atacada por otro ser, puedes atacarla con un ataque desarmado."
      },
    ],

    "Camino de los Cuatro Elementos [PHB 2014]": [
      {
        n: "Discípulo de los Elementos",
        nv: 3,
        d: "Aprendes Sintonía Elemental (gratis) y 2 Disciplinas Elementales de la lista. Ganas más disciplinas en Nv.6 (1), Nv.11 (1) y Nv.17 (1). Muchas disciplinas son equivalentes a conjuros que se lanzan gastando Ki (2 Ki = espacio Nv.1; Ki adicional para niveles superiores). Disciplinas disponibles: Sintonía Elemental, Ola de Viento Rugiente, Colmillo de Serpiente de Fuego, Puño del Viento Ininterrumpido, Caballera de Llamas, Forma del Río Fluyente, Latigazo de Agua, Montura del Viento, Muro de Sombras, Golpe de Cuatro Truenos, Llamas del Fénix, Jinete del Viento, Ola de Tierra Rodante, Vuelta del Viento, Toque del Dragón Negro, Control de la Llama, Terremoto, Marejada Helada, Respiración de Invierno."
      },
      {
        n: "Disciplinas adicionales",
        nv: 6,
        d: "Aprendes 1 Disciplina Elemental adicional. Además, puedes gastar Ki adicional para lanzar disciplinas a niveles de conjuro superiores (1 Ki por nivel adicional)."
      },
      {
        n: "Golpe Elemental",
        nv: 11,
        d: "Aprendes 1 Disciplina adicional. Cuando golpeas con un ataque de arma de monje, puedes gastar 1 Ki para infligir 1d6 adicional del tipo elemental de una disciplina conocida."
      },
      {
        n: "Cuerpo del Avatar",
        nv: 17,
        d: "Aprendes 1 Disciplina adicional. Eres inmune al veneno y a la enfermedad. Además, cuentas como elemental para efectos que afecten a elementales."
      },
    ],

    /* ── PHB 2024 ── */
    "Camino de la Mano Abierta [PHB 2024]": [
      {
        n: "Técnica de la Mano Abierta",
        nv: 3,
        d: "Al golpear con un ataque de Lluvia de Golpes, impones uno de los siguientes efectos: Aturdir (sin acción de reacción hasta el inicio de tu siguiente turno), Empujar (salvación FUE o empujado hasta 15 pies), Derribar (salvación DES o cae Tumbado)."
      },
      {
        n: "Integridad del Cuerpo",
        nv: 6,
        d: "AA: tiras tu Dado de Artes Marciales y recuperas PG = resultado + mod SAB (mínimo 1 PG)."
      },
      {
        n: "Tranquilidad",
        nv: 11,
        d: "Al terminar un Descanso Largo, ganas el efecto de Santuario hasta el inicio del siguiente combate. CD = 8 + comp + mod SAB."
      },
      {
        n: "Palma Vibrante",
        nv: 17,
        d: "Al golpear con un ataque desarmado, gastas 3 Ki para establecer vibraciones letales. Como Acción las terminas: el objetivo sufre 10d10 daño (CON para la mitad). Duración = nivel de Monje en días."
      },
    ],

    "Camino de las Sombras [PHB 2024]": [
      {
        n: "Artes de las Sombras",
        nv: 3,
        d: "Aprendes los trucos Tinieblas Menores (Minor Darkness) y Toque de los Muertos (Chill Touch). Puedes gastar 1 Ki para lanzar Oscuridad o Pasar sin Rastro sin componentes materiales."
      },
      {
        n: "Paso en las Sombras",
        nv: 6,
        d: "AA: en oscuridad o luz tenue, teletransportación de hasta 60 pies a otro punto de oscuridad o luz tenue. Tienes ventaja en el primer ataque cuerpo a cuerpo de ese turno."
      },
      {
        n: "Manto de Sombras",
        nv: 11,
        d: "AA + 1 Ki: Invisible hasta el inicio de tu siguiente turno."
      },
      {
        n: "Oportunista en las Sombras",
        nv: 17,
        d: "Reacción: cuando una criatura a 5 pies es atacada por otro ser, puedes hacerle un ataque desarmado."
      },
    ],

    "Camino del Guerrero Elemental [PHB 2024]": [
      {
        n: "Discípulo de los Elementos",
        nv: 3,
        d: "Aprendes el truco Elementalismo (Elementalism) y 2 Disciplinas Elementales. Nuevas disciplinas en Nv.6 (1 total 3), Nv.11 (1 total 4) y Nv.17 (1 total 5). Cada disciplina tiene coste en Ki y produce efectos elementales (ácido, frío, fuego, rayo o trueno). Las disciplinas son versiones simplificadas y mejoradas respecto a la versión 2014: menores costes de Ki y efectos más claros."
      },
      {
        n: "Golpe Elemental",
        nv: 6,
        d: "Cuando golpeas con un ataque de arma de monje o desarmado, puedes gastar 1 Ki para infligir 1d6 adicional de un tipo elemental de una de tus disciplinas conocidas."
      },
      {
        n: "Impulso Elemental",
        nv: 11,
        d: "Cuando dañas a una criatura con una disciplina elemental, puedes empujarla hasta 10 pies o hacerla caer Tumbada (salvación FUE o DES, CD conjuro). Además, aprendes 1 disciplina adicional."
      },
      {
        n: "Cuerpo del Avatar",
        nv: 17,
        d: "Resistencia permanente a ácido, frío, fuego, rayo y trueno. Aprendes 1 disciplina adicional."
      },
    ],

    "Camino de la Misericordia [PHB 2024]": [
      {
        n: "Manos de Curación",
        nv: 3,
        d: "Competencia en Medicina e Introspección (Insight). Cuando usas Lluvia de Golpes, puedes reemplazar uno de los golpes por un toque curativo: el objetivo recupera PG = 1 Dado de Artes Marciales + mod SAB (mínimo 1). No funciona en constructos ni no-muertos."
      },
      {
        n: "Manos de Daño",
        nv: 3,
        d: "Cuando golpeas con un ataque desarmado, puedes gastar 1 Ki para infligir daño necrótico adicional = 1 Dado de Artes Marciales + mod SAB. Además puedes aplicar la condición Envenenado durante 1 minuto (salvación CON para evitarlo)."
      },
      {
        n: "Médico del Alma",
        nv: 6,
        d: "Puedes gastar 5 Ki para lanzar Restauración Menor o Lesser Restoration. Además, cuando usas Manos de Curación, también eliminas una de estas condiciones: Cegado, Ensordecido, Paralizdo, Envenenado o un efecto de reducción de velocidad."
      },
      {
        n: "Toque de la Muerte",
        nv: 11,
        d: "Cuando reduces a 0 PG a una criatura con Manos de Daño, puedes gastar 1 Ki para que un aliado a 30 pies recupere PG = tu Dado de Artes Marciales + mod SAB."
      },
      {
        n: "Médico Misericordioso",
        nv: 17,
        d: "Puedes gastar 10 Ki y 1 acción para lanzar Revivificar sin componentes materiales. Puedes hacerlo una vez por Descanso Largo sin gastar Ki."
      },
    ],

    /* ── Sword Coast Adventurer's Guide ── */
    "Camino de la Larga Muerte [SCAG]": [
      {
        n: "Toque de la Muerte",
        nv: 3,
        d: "Cuando reduces a 0 PG a una criatura a 5 pies (no constructo ni no-muerto), ganas PG temporales = mod SAB + nivel de Monje."
      },
      {
        n: "Hora de la Cosecha",
        nv: 6,
        d: "Acción: cada criatura hostil a 30 pies supera salvación SAB (CD = 8 + comp + mod SAB) o queda Asustada de ti hasta el fin de tu siguiente turno. 1/descanso corto o largo."
      },
      {
        n: "Escudo Maseante de Muerte",
        nv: 11,
        d: "Cuando una criatura a 5 pies te golpea, puedes gastar 1 Ki para reducir el daño en 1d10 + mod SAB. Si el daño se reduce a 0, la criatura recibe ese mismo valor como daño necrótico."
      },
      {
        n: "Toque Superior de la Muerte",
        nv: 17,
        d: "Al principio de cada uno de tus turnos, si tienes 0 PG y no has muerto, puedes gastar Ki para recuperar PG: cada 1 Ki = 5 PG, hasta tu máximo. No puedes usarlo si estás muerto. Además, Toque de la Muerte ya no tiene restricción de tipo (funciona con constructos y no-muertos también)."
      },
    ],

    "Camino del Alma del Sol [SCAG/XGtE]": [
      {
        n: "Rayo Radiante",
        nv: 3,
        d: "Puedes lanzar Lanza de Fuego (Fire Bolt) y Luz de las Hadas (Sacred Flame) a voluntad. Además, cuando haces un ataque de arma de monje desarmado, puedes gastar 1 Ki para que infliga daño radiante en lugar del normal y añadir 1d4 al daño."
      },
      {
        n: "Tormenta Radiante",
        nv: 6,
        d: "Gastas 2 Ki para crear una explosión solar de 20 pies de radio centrada en ti: daño radiante = 2d10 + mod SAB a cada criatura en el área (salvación DEX para reducir a la mitad)."
      },
      {
        n: "Esfera Solar",
        nv: 11,
        d: "Gastas 4 Ki para lanzar una esfera ardiente a un espacio visible a 60 pies: la esfera inflige 20d6 de daño radiante en una explosión de 20 pies (salvación DEX para reducir a la mitad) y permanece durante 1 minuto emitiendo luz. Gastas 2 Ki adicionales para moverla 30 pies como AA."
      },
      {
        n: "Explosión del Sol",
        nv: 17,
        d: "Gastas 4 Ki para lanzar un rayo de luz solar que atraviesa hasta tres criaturas en una línea de 60×5 pies: 10d10 de daño radiante (salvación CON para reducir a la mitad). Las criaturas que fallen quedan Cegadas hasta el inicio de su siguiente turno."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Camino del Maestro Borracho [XGtE]": [
      {
        n: "Borrachera del Arte",
        nv: 3,
        d: "Competencia en Actuación. Cuando usas Lluvia de Golpes, puedes gastar 1 Ki para que parezca accidental e inesperado. Las criaturas a 5 pies de tu objetivo tienen desventaja en ataques de oportunidad contra ti hasta el inicio de tu siguiente turno."
      },
      {
        n: "Tambaleante",
        nv: 3,
        d: "Cuando usas Desengancharse como AA (Viento que Golpea), puedes gastar 1 Ki adicional para hacer que un atacante que te haya fallado este turno no pueda hacer ataques de oportunidad contra ti hasta el inicio de su siguiente turno."
      },
      {
        n: "Golpe Redirigido",
        nv: 6,
        d: "Reacción: cuando fallas un ataque, puedes gastar 2 Ki y redirigir el ataque hacia otra criatura a 5 pies del objetivo original (tirada de ataque enfrentada; si el nuevo objetivo es más fácil de golpear, el ataque impacta automáticamente)."
      },
      {
        n: "Paso de la Grulla Borracha",
        nv: 11,
        d: "Puedes moverte a través de espacios de criaturas hostiles sin penalización. Además, cuando usas Lluvia de Golpes, los ataques no provocan ataques de oportunidad hasta el final de tu turno."
      },
      {
        n: "Jarro Inagotable",
        nv: 17,
        d: "Cuando usas Lluvia de Golpes y golpeas a una criatura, puedes gastar 1 Ki para que esa criatura necesite superar una salvación de CON (CD = 8 + comp + mod SAB) o quede Aturdida hasta el final de su próximo turno (como Golpe Aturdidor, pero sin coste de Ki adicional)."
      },
    ],

    "Camino del Kensei [XGtE]": [
      {
        n: "Armas del Kensei",
        nv: 3,
        d: "Elige 2 tipos de arma (una cuerpo a cuerpo, una a distancia); se convierten en armas de Kensei para ti (tratatadas como armas de monje). Ganas una arma de Kensei adicional en Nv.6, 11 y 17. Si el arma es cuerpo a cuerpo: cuando atacas con ella puedes gastar 1 Ki para añadir 1d4 a la tirada de daño hasta el final del turno. Si es a distancia: puedes usarla como parte de Lluvia de Golpes. Llevar el arma de Kensei: +2 CA hasta el inicio de tu siguiente turno (Destreza del Kensei)."
      },
      {
        n: "Un con la Hoja",
        nv: 3,
        d: "Las armas de Kensei cuentan como armas de monje (puedes usar DES y el Dado de Artes Marciales con ellas). Además, cuando las empuñas, no cuentan como armas de doble mano ni pesadas para ti a efectos de las restricciones del Monje."
      },
      {
        n: "Golpe Afilado",
        nv: 6,
        d: "Tus ataques con armas de Kensei cuentan como mágicos. También puedes usar tu AA después de atacar con arma de Kensei para hacer un ataque desarmado adicional."
      },
      {
        n: "Paso de Viento",
        nv: 11,
        d: "Cuando gastas Ki, tu velocidad de movimiento aumenta 10 pies hasta el final del turno y los ataques de oportunidad tienen desventaja contra ti."
      },
      {
        n: "Maestro de la Espada",
        nv: 17,
        d: "Tus ataques críticos con armas de Kensei hacen el daño máximo en lugar de doblar los dados. Además, cuando realizas Lluvia de Golpes con arma de Kensei, puedes añadir 1d10 de daño del tipo del arma a todos los ataques de esa lluvia."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Camino de la Misericordia [TCE]": [
      {
        n: "Manos de Curación",
        nv: 3,
        d: "Competencia en Medicina e Introspección. Al usar Lluvia de Golpes, puedes reemplazar un golpe por un toque que cura = 1 Dado de Artes Marciales + mod SAB. No funciona en constructos ni no-muertos."
      },
      {
        n: "Manos de Daño",
        nv: 3,
        d: "Al golpear con un ataque desarmado, gastas 1 Ki para infligir 1 Dado de Artes Marciales adicional de daño necrótico, y aplica Envenenado durante 1 minuto (salvación CON para evitarlo)."
      },
      {
        n: "Médico del Alma",
        nv: 6,
        d: "Gastas 5 Ki para lanzar Restauración Menor. Al usar Manos de Curación, también eliminas una de las siguientes condiciones: Cegado, Ensordecido, Paralizado, Envenenado, o reducción de velocidad."
      },
      {
        n: "Toque de la Muerte",
        nv: 11,
        d: "Cuando reduces a 0 PG con Manos de Daño, un aliado a 30 pies recupera PG = Dado de Artes Marciales + mod SAB."
      },
      {
        n: "Médico Misericordioso",
        nv: 17,
        d: "Gastas 10 Ki para lanzar Revivificar sin materiales. 1/descanso largo sin coste."
      },
    ],

    "Camino del Ser Astral [TCE]": [
      {
        n: "Brazos del Ser Astral",
        nv: 3,
        d: "Gastas 1 Ki como AA para invocar brazos astrales que duran 10 minutos. Con ellos: puedes hacer ataques desarmados adicionales a 5 pies (usan SAB para ataque y daño), y el dado de daño es siempre el Dado de Artes Marciales (incluso para ataques a distancia en el rango de 10 pies). Los brazos te permiten usar Lluvia de Golpes con SAB."
      },
      {
        n: "Visage del Ser Astral",
        nv: 6,
        d: "Gastas 1 Ki como AA para invocar el visage de tu ser astral durante 10 minutos: ventaja en Perspicacia e Intimidación, puedes ver criaturas invisibles hasta 30 pies, eres inmune a condiciones de Asustado y Encantado."
      },
      {
        n: "Cuerpo del Ser Astral",
        nv: 11,
        d: "Gastas 1 Ki adicional al invocar los Brazos para manifestar también el torso astral: ganas resistencia a daño contundente, perforante y cortante; cuando una criatura a 5 pies te golpea, puede recibir daño de fuerza = tu Dado de Artes Marciales + mod SAB."
      },
      {
        n: "Ser Astral Completo",
        nv: 17,
        d: "Gastas 10 Ki para manifestar tu ser astral completo durante 10 minutos: obtienes todos los beneficios de Brazos, Visage y Cuerpo del Ser Astral simultáneamente sin coste adicional. Velocidad de vuelo = velocidad de caminar."
      },
    ],

    /* ── Fizban's Treasury of Dragons ── */
    "Camino del Dragón Ascendente [FToD]": [
      {
        n: "Herencia Dracónica",
        nv: 3,
        d: "Aprendes el idioma Dracónico. Eliges un tipo de dragón cromático o metálico que determina el tipo de daño elemental de tus habilidades. Puedes cambiar el tipo al terminar un Descanso Largo."
      },
      {
        n: "Aspecto del Dragón",
        nv: 3,
        d: "Cuando haces Lluvia de Golpes, puedes manifestar rasgos dracónicos: tus ataques infligen tu tipo de daño elemental en lugar del normal, y puedes empujar 10 pies a un objetivo (FUE para resistir). Gastas 1 Ki para que ambos ataques de la Lluvia de Golpes tengan el beneficio elemental."
      },
      {
        n: "Aliento del Dragón",
        nv: 6,
        d: "Gastas 2 Ki como AA para exhalar un cono de 30 pies de energía elemental: daño = 3 Dados de Artes Marciales del tipo de tu herencia (salvación DEX o CON —a tu elección— para reducir a la mitad). CD = 8 + comp + mod SAB."
      },
      {
        n: "Alas del Dragón",
        nv: 11,
        d: "Gastas 2 Ki como AA para manifestar alas de dragón durante 10 minutos: velocidad de vuelo = velocidad de caminar."
      },
      {
        n: "Aspecto del Wyrm",
        nv: 17,
        d: "Gastas 6 Ki para asumir el Aspecto del Wyrm durante 1 minuto: todas las habilidades dracónicas mejoradas simultáneamente; aura de 30 pies que aterra a criaturas hostiles (salvación SAB o Asustadas); resistencia al tipo de daño de tu herencia; criaturas derribadas por tus ataques quedan también Asustadas 1 turno."
      },
    ],

    /* ── Tal'Dorei Campaign Setting Reborn ── */
    "Camino del Alma Cobalt [TCSR]": [
      {
        n: "Erudición Mística",
        nv: 3,
        d: "Aprendes 1 idioma y ganas competencia en una de las siguientes habilidades: Arcanos, Historia, Investigación, Naturaleza o Religión. Si ya tienes competencia en la elegida, puedes doblar tu bonificador de competencia en ella. Repites este rasgo en Nv.6, 11 y 17 (acumulando hasta 4 idiomas y habilidades)."
      },
      {
        n: "Extraer Aspectos",
        nv: 3,
        d: "Cuando golpeas con uno de los ataques de Lluvia de Golpes, aprendes las vulnerabilidades, resistencias, inmunidades al daño e inmunidades a condiciones del objetivo. Además, mientras la criatura esté marcada y te ataque, puedes usar Reacción para hacerle un ataque desarmado cuando falle. Usos = 1 (Nv.3) → 2 (Nv.6) → 3 (Nv.17) por descanso corto o largo."
      },
      {
        n: "Contraataque Preternatural",
        nv: 6,
        d: "Reacción: cuando una criatura falla un ataque contra ti, puedes realizarle inmediatamente un ataque desarmado. Además, al usar Extraer Aspectos sobre una criatura, puedes gastar 1 Ki para que tenga desventaja en la salvación CON de Golpe Aturdidor hasta tu siguiente turno."
      },
      {
        n: "Mente de Mercurio",
        nv: 11,
        d: "Una vez por turno, si ya usaste tu Reacción, puedes gastar 1 Ki para tomar una Reacción adicional. Solo puedes usar una Reacción por desencadenante."
      },
      {
        n: "Descarga Debilitante",
        nv: 17,
        d: "Cuando golpeas con uno de los ataques de Lluvia de Golpes, puedes gastar 3 Ki para imponer vulnerabilidad a un tipo de daño a tu elección durante 1 minuto (o hasta que reciba daño de ese tipo). La criatura debe fallar una salvación de CON (CD = 8 + comp + mod SAB) para ser afectada."
      },
    ],

  }, // fin subclases
}; // fin CLASE_MONJE
