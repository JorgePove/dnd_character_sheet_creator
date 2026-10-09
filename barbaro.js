/* ══════════════════════════════════════════════════════════════════
   barbaro.js — Bárbaro: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · PHB 2024 · XGtE · SCAG · TCE · BGotG
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (13 entradas):
     Camino del Berserker         [PHB 2014] / [PHB 2024]
     Camino del Guerrero Tótem    [PHB 2014]
     Camino del Corazón Salvaje   [PHB 2024]
     Camino del Árbol del Mundo   [PHB 2024]
     Camino del Fanático          [PHB 2024] / [XGtE]
     Camino del Guardián Ancestral [XGtE]
     Heraldo de la Tormenta       [XGtE]
     Camino del Berserker Osado   [SCAG]
     Camino de la Bestia          [TCE]
     Camino de la Magia Salvaje   [TCE]
     Camino del Gigante           [BGotG]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_BARBARO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d12. Salvaciones: FUE y CON. Armaduras: ligeras, medias y escudos. Armas: simples y marciales. Habilidades: elige 2 entre Atletismo, Intimidación, Naturaleza, Percepción, Supervivencia y Trato con Animales."
    },
    {
      n: "Furia (Rage)",
      nv: 1,
      a: "B",
      d: "Como Acción Adicional entras en Furia (no puedes si llevas armadura pesada). Usos: 2 (3 en Nv.3, 4 en Nv.6, 5 en Nv.12, 6 en Nv.17); recuperas 1 uso con un descanso corto y todos con uno largo. Mientras dura: resistencia al daño contundente, perforante y cortante; daño adicional de Furia (+2; +3 en Nv.9; +4 en Nv.16) en ataques con FUE (armas o desarmados); ventaja en pruebas y salvaciones de FUE; no puedes mantener concentración ni lanzar conjuros. Dura hasta el final de tu siguiente turno y termina antes si te pones armadura pesada o quedas Incapacitado. Para prolongarla al turno siguiente debes: hacer una tirada de ataque contra un enemigo, obligar a un enemigo a hacer una salvación, o usar una Acción Adicional. Máximo 10 minutos. [2014: dura 1 minuto y termina si te quedas inconsciente o si al acabar tu turno no has atacado ni recibido daño desde el anterior; la bonificación de daño sólo vale para ataques cuerpo a cuerpo con FUE; usos ilimitados en Nv.20]"
    },
    {
      n: "Defensa sin Armadura",
      nv: 1,
      d: "Si no llevas armadura, tu CA base = 10 + mod. DES + mod. CON. Puedes usar escudo y seguir beneficiándote."
    },
    {
      n: "Maestría con Armas (Weapon Mastery)",
      nv: 1,
      d: "Puedes usar la propiedad de maestría de 2 tipos de armas cuerpo a cuerpo simples o marciales de tu elección (3 en Nv.4, 4 en Nv.10). Tras un descanso largo puedes cambiar una de las elegidas. [Sólo 2024]"
    },
    {
      n: "Sentido del Peligro (Danger Sense)",
      nv: 2,
      d: "Tienes ventaja en las salvaciones de DES salvo que estés Incapacitado. [2014: sólo contra efectos que puedas ver, y no si estás Cegado, Ensordecido o Incapacitado]"
    },
    {
      n: "Ataque Imprudente (Reckless Attack)",
      nv: 2,
      a: "O",
      d: "Cuando haces tu primera tirada de ataque en tu turno puedes atacar de forma imprudente: tienes ventaja en las tiradas de ataque con FUE hasta el inicio de tu siguiente turno, pero las tiradas de ataque contra ti tienen ventaja durante ese tiempo. [2014: sólo ataques cuerpo a cuerpo con arma usando FUE]"
    },
    {
      n: "Subclase de Bárbaro (Camino Primal)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6, 10 y 14. [2014: Camino Primal]"
    },
    {
      n: "Conocimiento Primigenio (Primal Knowledge)",
      nv: 3,
      d: "Ganas competencia en otra habilidad de la lista de Bárbaro. Además, mientras tu Furia está activa, cuando haces una prueba con Acrobacias, Intimidación, Percepción, Sigilo o Supervivencia puedes hacerla como prueba de FUE. [2014: rasgo opcional de TCE (otra habilidad en Nv.3 y en Nv.10)]"
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
      n: "Movimiento Rápido (Fast Movement)",
      nv: 5,
      d: "Tu Velocidad aumenta 10 pies mientras no lleves armadura pesada."
    },
    {
      n: "Instinto Feral (Feral Instinct)",
      nv: 7,
      d: "Tienes ventaja en las tiradas de Iniciativa. [2014: además, si te sorprenden, puedes actuar con normalidad en tu primer turno siempre que entres en Furia antes de hacer nada]"
    },
    {
      n: "Abalanzarse Instintivo (Instinctive Pounce)",
      nv: 7,
      d: "Como parte de la Acción Adicional con la que entras en Furia, puedes moverte hasta la mitad de tu Velocidad. [2014: rasgo opcional de TCE, con el mismo efecto]"
    },
    {
      n: "Golpe Brutal (Brutal Strike)",
      nv: 9,
      a: "O",
      d: "Si usas Ataque Imprudente, puedes renunciar a la ventaja en una tirada de ataque con FUE de tu turno (no puede tener desventaja). Si impacta, el objetivo sufre 1d10 de daño adicional del mismo tipo que el arma/ataque desarmado y además aplicas un efecto: Golpe Contundente (Forceful Blow): lo empujas 15 pies en línea recta y puedes moverte hasta la mitad de tu Velocidad hacia él sin provocar ataques de oportunidad; Golpe Desjarretador (Hamstring Blow): su Velocidad se reduce 15 pies hasta el inicio de tu siguiente turno (no se acumula). [Sólo 2024. En 2014 el Nv.9 da Crítico Brutal: en un crítico cuerpo a cuerpo tiras 1 dado de daño del arma adicional (2 en Nv.13, 3 en Nv.17)]"
    },
    {
      n: "Furia Implacable (Relentless Rage)",
      nv: 11,
      a: "O",
      d: "Si caes a 0 PG con la Furia activa y no mueres directamente, puedes hacer una salvación de CON CD 10; si la superas, tus PG pasan a ser el doble de tu nivel de Bárbaro. Cada vez que lo usas después de la primera, la CD sube 5; con un descanso corto o largo vuelve a 10. [2014: recuperas PG = tu nivel de Bárbaro]"
    },
    {
      n: "Golpe Brutal Mejorado (Improved Brutal Strike)",
      nv: 13,
      a: "O",
      d: "Nuevos efectos de Golpe Brutal: Golpe Aturdidor (Staggering Blow): el objetivo tiene desventaja en su siguiente salvación y no puede hacer ataques de oportunidad hasta el inicio de tu siguiente turno; Golpe Demoledor (Sundering Blow): la siguiente tirada de ataque de otra criatura contra el objetivo (antes del inicio de tu siguiente turno) recibe +5 (un solo bonificador de este tipo). [Sólo 2024]"
    },
    {
      n: "Furia Persistente (Persistent Rage)",
      nv: 15,
      a: "O",
      d: "Cuando tiras Iniciativa puedes recuperar todos los usos gastados de Furia (una vez; no puedes volver a hacerlo hasta un descanso largo). Además tu Furia dura 10 minutos sin necesidad de prolongarla; sólo termina antes si quedas Inconsciente o te pones armadura pesada (o si decides terminarla). [2014: sólo termina si caes inconsciente o decides terminarla; sin recuperación de usos]"
    },
    {
      n: "Golpe Brutal Mejorado (Nv.17)",
      nv: 17,
      d: "Tu Golpe Brutal inflige 2d10 de daño adicional y puedes aplicar dos efectos diferentes a la vez. [Sólo 2024]"
    },
    {
      n: "Poder Indomable (Indomitable Might)",
      nv: 18,
      d: "Si tu total en una prueba o salvación de FUE es menor que tu puntuación de FUE, puedes usar tu puntuación en su lugar."
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Campeón Primigenio (Primal Champion)",
      nv: 20,
      d: "Tu FUE y CON aumentan 4 (máximo 25). [2014: máximo 24, y Furias ilimitadas]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Camino del Berserker [PHB 2014]": [
      {
        n: "Frenesí",
        nv: 3,
        a: "B",
        d: "Al entrar en Furia puedes optar por un frenesí. Mientras dura la Furia puedes hacer un ataque cuerpo a cuerpo con arma como Acción Adicional en cada uno de tus turnos tras este. Cuando termina la Furia sufres 1 nivel de agotamiento."
      },
      {
        n: "Furia sin Sentido (Mindless Rage)",
        nv: 6,
        d: "No puedes ser Hechizado ni Asustado mientras estés en Furia. Si ya lo estabas al entrar, el efecto queda suspendido durante la Furia."
      },
      {
        n: "Presencia Intimidatoria",
        nv: 10,
        a: "A",
        d: "Con una acción, elige una criatura a 30 pies que puedas ver; si puede verte u oírte debe superar una salvación de SAB (CD 8 + comp. + mod. CAR) o queda Asustada hasta el final de tu siguiente turno. En turnos posteriores puedes usar tu acción para prolongarlo. Termina si la criatura acaba su turno sin línea de visión o a más de 60 pies. Si supera la salvación, no puedes usarlo contra ella en 24 horas."
      },
      {
        n: "Represalia",
        nv: 14,
        a: "R",
        d: "Cuando recibes daño de una criatura a 5 pies de ti, puedes usar tu reacción para hacerle un ataque cuerpo a cuerpo con arma."
      },
    ],

    "Camino del Guerrero Tótem [PHB 2014]": [
      {
        n: "Buscador de Espíritus (Spirit Seeker)",
        nv: 3,
        d: "Puedes lanzar Beast Sense y Speak with Animals, pero sólo como rituales."
      },
      {
        n: "Espíritu Tótem (Totem Spirit)",
        nv: 3,
        a: "B",
        d: "Eliges un espíritu tótem y obtienes su rasgo mientras estás en Furia. Oso: resistencia a todo el daño salvo psíquico. Águila (sin armadura pesada): las criaturas tienen desventaja en ataques de oportunidad contra ti y puedes usar Correr como Acción Adicional. Lobo: tus aliados tienen ventaja en ataques cuerpo a cuerpo contra criaturas hostiles a 5 pies de ti. Alce (XGtE; sin armadura pesada): +15 pies a tu Velocidad. Tigre (XGtE): +10 pies a tu salto de longitud y +3 a tu salto de altura."
      },
      {
        n: "Aspecto de la Bestia (Aspect of the Beast)",
        nv: 6,
        d: "Ganas un beneficio mágico según un tótem (puede ser distinto). Oso: capacidad de carga doble y ventaja en pruebas de FUE para empujar, tirar, levantar o romper. Águila: ves hasta 1 milla con gran detalle y la luz tenue no te da desventaja en Percepción. Lobo: rastreas a ritmo rápido y te mueves sigilosamente a ritmo normal. Alce (XGtE): tu ritmo de viaje (y el de hasta 10 compañeros a 60 pies) se duplica. Tigre (XGtE): competencia en 2 entre Atletismo, Acrobacias, Sigilo y Supervivencia."
      },
      {
        n: "Caminante Espiritual (Spirit Walker)",
        nv: 10,
        a: "O",
        d: "Puedes lanzar Commune with Nature como ritual; un espíritu animal etéreo te transmite la información."
      },
      {
        n: "Sintonía Totémica (Totemic Attunement)",
        nv: 14,
        a: "B",
        d: "Ganas un beneficio mágico según un tótem (puede ser distinto) mientras estás en Furia. Oso: las criaturas hostiles a 5 pies tienen desventaja en ataques contra otros objetivos que no seas tú (u otro con este rasgo). Águila: Velocidad de vuelo = tu Velocidad (caes si terminas el turno en el aire). Lobo: como Acción Adicional derribas a una criatura Grande o menor al impactarla con un ataque cuerpo a cuerpo. Alce (XGtE): como Acción Adicional durante tu movimiento atraviesas el espacio de una criatura Grande o menor (salvación FUE CD 8 + FUE + comp.; si falla cae Tumbada y sufre 1d12 + mod. FUE contundente). Tigre (XGtE): si te mueves 20 pies en línea recta hacia un objetivo Grande o menor justo antes de atacarlo cuerpo a cuerpo, haces un ataque adicional como Acción Adicional."
      },
    ],


    /* ── PHB 2024 ── */
    "Camino del Berserker [PHB 2024]": [
      {
        n: "Frenesí",
        nv: 3,
        d: "Si usas Ataque Imprudente con la Furia activa, el primer objetivo al que impactes en tu turno con un ataque de FUE sufre daño adicional: tiras tantos d6 como tu bonificador de daño de Furia (del tipo del arma o ataque desarmado)."
      },
      {
        n: "Furia sin Sentido (Mindless Rage)",
        nv: 6,
        d: "Tienes inmunidad a Hechizado y Asustado mientras tu Furia esté activa. Si estás Hechizado o Asustado al entrar en Furia, la condición termina."
      },
      {
        n: "Represalia (Retaliation)",
        nv: 10,
        a: "R",
        d: "Cuando recibes daño de una criatura a 5 pies de ti, puedes usar tu reacción para hacerle un ataque cuerpo a cuerpo con un arma o un ataque desarmado."
      },
      {
        n: "Presencia Intimidatoria (Intimidating Presence)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional, las criaturas de tu elección en una Emanación de 30 pies deben superar una salvación de SAB (CD 8 + mod. FUE + comp.) o quedar Asustadas 1 minuto (repiten la salvación al final de cada uno de sus turnos). Una vez usado, no puedes volver a hacerlo hasta un descanso largo, salvo que gastes un uso de Furia (sin acción) para recuperarlo."
      },
    ],

    "Camino del Corazón Salvaje [PHB 2024]": [
      {
        n: "Hablante Animal (Animal Speaker)",
        nv: 3,
        d: "Puedes lanzar Beast Sense y Speak with Animals como rituales (la característica de lanzamiento es SAB)."
      },
      {
        n: "Furia de lo Salvaje (Rage of the Wilds)",
        nv: 3,
        a: "BO",
        d: "Al activar la Furia eliges una opción. Oso: resistencia a todo el daño salvo Fuerza, Necrótico, Psíquico y Radiante. Águila: realizas Correr y Retirarse como parte de la Acción Adicional de la Furia, y mientras dure puedes volver a hacerlo como Acción Adicional. Lobo: mientras dure, tus aliados tienen ventaja en ataques contra enemigos tuyos a 5 pies de ti."
      },
      {
        n: "Aspecto de lo Salvaje (Aspect of the Wilds)",
        nv: 6,
        d: "Eliges una opción (cambiable tras un descanso largo). Búho: visión en la oscuridad 60 pies (o +60 pies si ya la tienes). Pantera: Velocidad de trepar = tu Velocidad. Salmón: Velocidad de nadar = tu Velocidad."
      },
      {
        n: "Hablante de la Naturaleza (Nature Speaker)",
        nv: 10,
        d: "Puedes lanzar Commune with Nature como ritual (la característica de lanzamiento es SAB)."
      },
      {
        n: "Poder de lo Salvaje (Power of the Wilds)",
        nv: 14,
        a: "O",
        d: "Al activar la Furia eliges una opción. Halcón: Velocidad de vuelo = tu Velocidad mientras no lleves armadura. León: tus enemigos a 5 pies tienen desventaja en ataques contra objetivos que no seas tú (u otro Bárbaro con esta opción). Carnero: al impactar con un ataque cuerpo a cuerpo puedes derribar a una criatura Grande o menor."
      },
    ],

    "Camino del Árbol del Mundo [PHB 2024]": [
      {
        n: "Vitalidad del Árbol (Vitality of the Tree)",
        nv: 3,
        a: "O",
        d: "Oleada de Vitalidad: al activar la Furia ganas PG temporales = tu nivel de Bárbaro. Fuerza Vivificante: al inicio de cada uno de tus turnos con la Furia activa puedes elegir a otra criatura a 10 pies: tiras tantos d6 como tu bonificador de daño de Furia y la criatura gana esa cantidad de PG temporales (desaparecen al terminar tu Furia)."
      },
      {
        n: "Ramas del Árbol (Branches of the Tree)",
        nv: 6,
        a: "R",
        d: "Con la Furia activa, cuando una criatura que puedas ver empieza su turno a 30 pies de ti, puedes usar tu reacción: salvación de FUE (CD 8 + mod. FUE + comp.); si falla, la teletransportas a un espacio libre a 5 pies de ti (o el más cercano) y puedes reducir su Velocidad a 0 hasta el final del turno."
      },
      {
        n: "Raíces Percutoras (Battering Roots)",
        nv: 10,
        d: "Durante tu turno, tu alcance con armas cuerpo a cuerpo con las propiedades Pesada o Versátil aumenta 10 pies. Cuando impactas con una de ellas, puedes activar además la maestría Empujar o Derribar junto con su otra propiedad de maestría."
      },
      {
        n: "Viajar por el Árbol (Travel along the Tree)",
        nv: 14,
        a: "B",
        d: "Al activar la Furia y como Acción Adicional mientras esté activa, te teletransportas hasta 60 pies a un espacio libre que veas. Una vez por Furia puedes ampliar ese alcance a 150 pies y llevar contigo hasta 6 criaturas voluntarias a 10 pies de ti, que aparecen a 10 pies del destino."
      },
    ],

    "Camino del Fanático [PHB 2024]": [
      {
        n: "Furia Divina (Divine Fury)",
        nv: 3,
        d: "En cada uno de tus turnos con la Furia activa, la primera criatura que impactes con un arma o ataque desarmado sufre daño adicional = 1d6 + la mitad de tu nivel de Bárbaro (redondeado hacia abajo), Necrótico o Radiante (eliges el tipo cada vez)."
      },
      {
        n: "Guerrero de los Dioses (Warrior of the Gods)",
        nv: 3,
        a: "B",
        d: "Tienes una reserva de 4d12 para curarte. Como Acción Adicional puedes gastar dados de la reserva, tirarlos y recuperar PG = el total. La reserva se recupera con un descanso largo. Aumenta a 5d12 en Nv.6, 6d12 en Nv.12 y 7d12 en Nv.17."
      },
      {
        n: "Foco Fanático (Fanatical Focus)",
        nv: 6,
        a: "O",
        d: "Una vez por Furia activa, si fallas una salvación puedes repetirla con un bonificador igual a tu bonificador de daño de Furia y debes usar el nuevo resultado."
      },
      {
        n: "Presencia Entusiasta (Zealous Presence)",
        nv: 10,
        a: "B",
        d: "Como Acción Adicional, hasta 10 criaturas de tu elección a 60 pies tienen ventaja en tiradas de ataque y salvaciones hasta el inicio de tu siguiente turno. Una vez usado, no puedes volver a hacerlo hasta un descanso largo, salvo que gastes un uso de Furia (sin acción) para recuperarlo."
      },
      {
        n: "Furia de los Dioses (Rage of the Gods)",
        nv: 14,
        a: "OR",
        d: "Al activar la Furia puedes adoptar una forma divina durante 1 minuto o hasta quedar Incapacitado o morir (una vez por descanso largo). Mientras tanto: Velocidad de vuelo = tu Velocidad (flotas); resistencia al daño Necrótico, Psíquico y Radiante; Revivificación: cuando una criatura a 30 pies fuese a caer a 0 PG, puedes usar tu reacción y gastar un uso de Furia para que sus PG pasen a ser igual a tu nivel de Bárbaro."
      },
    ],


    /* ── XGtE ── */
    "Camino del Guardián Ancestral [XGtE]": [
      {
        n: "Protectores Ancestrales (Ancestral Protectors)",
        nv: 3,
        d: "Aparecen guerreros espectrales al entrar en Furia. La primera criatura que golpees en tu turno durante la Furia queda marcada: hasta el inicio de tu siguiente turno tiene desventaja en tiradas de ataque que no sean contra ti, y cuando impacta a otra criatura distinta de ti, esa criatura tiene resistencia al daño de ese ataque."
      },
      {
        n: "Escudo Espiritual (Spirit Shield)",
        nv: 6,
        a: "R",
        d: "Si estás en Furia y otra criatura que puedas ver a 30 pies recibe daño, puedes usar tu reacción para reducirlo 2d6 (3d6 en Nv.10, 4d6 en Nv.14)."
      },
      {
        n: "Consultar a los Espíritus (Consult the Spirits)",
        nv: 10,
        a: "O",
        d: "Puedes lanzar Augury o Clairvoyance sin gastar espacio de conjuro ni componentes materiales (SAB); el espíritu se manifiesta de forma invisible en el lugar elegido. Una vez por descanso corto o largo."
      },
      {
        n: "Ancestros Vengativos (Vengeful Ancestors)",
        nv: 14,
        d: "Cuando usas Escudo Espiritual para reducir el daño, el atacante sufre daño de fuerza igual a la cantidad que ha evitado el Escudo Espiritual."
      },
    ],

    "Heraldo de la Tormenta [XGtE]": [
      {
        n: "Aura de Tormenta (Storm Aura)",
        nv: 3,
        a: "B",
        d: "Mientras estás en Furia emanas un aura tormentosa de 10 pies (no atraviesa cobertura total). Se activa al entrar en Furia y como Acción Adicional en cada turno; eliges Desierto, Mar o Tundra (cambiable al subir de nivel). CD = 8 + comp. + mod. CON. Desierto: las demás criaturas del aura sufren 2 de daño de fuego (3 en Nv.5, 4 en Nv.10, 5 en Nv.15, 6 en Nv.20). Mar: una criatura que veas en el aura hace salvación de DES; sufre 1d6 de daño de rayo (mitad si supera) — 2d6 en Nv.10, 3d6 en Nv.15, 4d6 en Nv.20. Tundra: cada criatura de tu elección en el aura gana 2 PG temporales (3 en Nv.5, 4 en Nv.10, 5 en Nv.15, 6 en Nv.20)."
      },
      {
        n: "Alma de la Tormenta (Storm Soul)",
        nv: 6,
        d: "Beneficio permanente según tu entorno. Desierto: resistencia al fuego, inmunidad al calor extremo y puedes prender como acción un objeto inflamable no llevado por nadie. Mar: resistencia al rayo, respiras bajo el agua y Velocidad de nadar 30 pies. Tundra: resistencia al frío, inmunidad al frío extremo y puedes convertir como acción un cubo de agua de 5 pies en hielo (se derrite en 1 minuto)."
      },
      {
        n: "Tormenta Protectora (Shielding Storm)",
        nv: 10,
        d: "Cada criatura de tu elección en tu Aura de Tormenta tiene la resistencia que obtienes con Alma de la Tormenta."
      },
      {
        n: "Tormenta Furiosa (Raging Storm)",
        nv: 14,
        a: "R",
        d: "Según tu entorno. Desierto: cuando una criatura de tu aura te impacta con un ataque, puedes usar tu reacción para forzarla a una salvación de DES; si falla, sufre daño de fuego = mitad de tu nivel de Bárbaro. Mar: cuando impactas a una criatura de tu aura, puedes usar tu reacción para forzarla a una salvación de FUE; si falla, cae Tumbada. Tundra: cuando tu aura da PG temporales a una criatura, puedes obligarla a una salvación de FUE; si falla, su Velocidad pasa a 0 hasta el inicio de tu siguiente turno."
      },
    ],

    "Camino del Fanático [XGtE]": [
      {
        n: "Furia Divina (Divine Fury)",
        nv: 3,
        d: "Mientras estás en Furia, la primera criatura que impactes en cada uno de tus turnos con un ataque de arma sufre daño adicional = 1d6 + la mitad de tu nivel de Bárbaro. El tipo (Necrótico o Radiante) se elige al obtener el rasgo."
      },
      {
        n: "Guerrero de los Dioses (Warrior of the Gods)",
        nv: 3,
        d: "Si un conjuro como Raise Dead tiene como único efecto devolverte a la vida (no como no-muerto), el lanzador no necesita componentes materiales."
      },
      {
        n: "Foco Fanático (Fanatical Focus)",
        nv: 6,
        a: "O",
        d: "Si fallas una salvación mientras estás en Furia, puedes repetirla y debes usar el nuevo resultado. Sólo una vez por Furia."
      },
      {
        n: "Presencia Entusiasta (Zealous Presence)",
        nv: 10,
        a: "B",
        d: "Como Acción Adicional lanzas un grito de guerra: hasta 10 criaturas de tu elección a 60 pies que puedan oírte tienen ventaja en tiradas de ataque y salvaciones hasta el inicio de tu siguiente turno. Una vez por descanso largo."
      },
      {
        n: "Furia más Allá de la Muerte (Rage Beyond Death)",
        nv: 14,
        d: "Mientras estás en Furia, tener 0 PG no te deja Inconsciente. Las salvaciones de muerte y los efectos de daño a 0 PG se aplican normal, pero si fallaras las salvaciones de muerte no mueres hasta que termine tu Furia, y sólo entonces si sigues a 0 PG."
      },
    ],


    /* ── SCAG ── */
    "Camino del Berserker Osado [SCAG]": [
      {
        n: "Armadura de Rabioso (Battlerager Armor)",
        nv: 3,
        a: "B",
        d: "Camino Battlerager: sólo los enanos pueden seguirlo. Mientras vistas armadura de pinchos y estés en Furia, puedes usar una Acción Adicional para atacar cuerpo a cuerpo con los pinchos a un objetivo a 5 pies (usa FUE); si impacta, inflige 1d4 perforante. Además, cuando usas la acción de Atacar para agarrar a una criatura y lo consigues, el objetivo sufre 3 de daño perforante."
      },
      {
        n: "Abandono Imprudente (Reckless Abandon)",
        nv: 6,
        d: "Cuando usas Ataque Imprudente en Furia, ganas PG temporales = mod. CON (mínimo 1). Desaparecen al terminar la Furia."
      },
      {
        n: "Carga del Rabioso (Battlerager Charge)",
        nv: 10,
        a: "B",
        d: "Puedes usar Correr como Acción Adicional mientras estás en Furia."
      },
      {
        n: "Represalia de Pinchos (Spiked Retribution)",
        nv: 14,
        d: "Cuando una criatura a 5 pies te impacta con un ataque cuerpo a cuerpo, el atacante sufre 3 de daño perforante si estás en Furia, no estás Incapacitado y vistes armadura de pinchos."
      },
    ],


    /* ── TCE ── */
    "Camino de la Bestia [TCE]": [
      {
        n: "Forma de la Bestia (Form of the Beast)",
        nv: 3,
        a: "OR",
        d: "Al entrar en Furia puedes manifestar un arma natural (eliges cada vez). Mordisco: 1d8 perforante; una vez por turno, al dañar a una criatura recuperas PG = comp. si tienes menos de la mitad de tus PG máximos. Garras: 1d6 cortante; una vez por turno al atacar con garra con la acción de Atacar haces un ataque adicional con ella. Cola: 1d8 perforante con alcance; cuando una criatura a 10 pies te impacta con un ataque puedes usar tu reacción para tirar 1d8 y sumarlo a tu CA, quizá haciéndole fallar."
      },
      {
        n: "Alma Bestial (Bestial Soul)",
        nv: 6,
        d: "Tus armas naturales de Forma de la Bestia cuentan como mágicas. Tras un descanso corto o largo eliges un beneficio hasta el siguiente descanso: Nadar (Velocidad de nadar = tu Velocidad y respiras bajo el agua); Trepar (Velocidad de trepar = tu Velocidad, incluso por techos); Saltar (al saltar sumas el resultado de una prueba de Atletismo a la distancia)."
      },
      {
        n: "Furia Infecciosa (Infectious Fury)",
        nv: 10,
        a: "O",
        d: "Cuando impactas con tus armas naturales en Furia, el objetivo debe superar una salvación de SAB (CD 8 + mod. CON + comp.) o sufrir un efecto a tu elección: usar su reacción para atacar cuerpo a cuerpo a otra criatura que elijas, o sufrir 2d12 de daño psíquico. Usos = comp.; se recuperan con un descanso largo."
      },
      {
        n: "Llamada de la Caza (Call the Hunt)",
        nv: 14,
        a: "O",
        d: "Al entrar en Furia eliges hasta mod. CON (mínimo 1) criaturas voluntarias que veas a 30 pies: ganas 5 PG temporales por cada una. Hasta que acabe la Furia, una vez por turno cada criatura elegida puede tirar 1d6 y sumarlo al daño cuando impacta y daña. Usos = comp.; se recuperan con un descanso largo."
      },
    ],

    "Camino de la Magia Salvaje [TCE]": [
      {
        n: "Conciencia Mágica (Magic Awareness)",
        nv: 3,
        a: "A",
        d: "Con una acción abres tu conciencia a la magia concentrada: hasta el final de tu siguiente turno sabes dónde hay conjuros u objetos mágicos a 60 pies sin cobertura total (sabes su tipo/escuela si es un conjuro). Usos = comp.; se recuperan con un descanso largo."
      },
      {
        n: "Oleada Salvaje (Wild Surge)",
        nv: 3,
        a: "O",
        d: "Al entrar en Furia tiras 1d8 en la tabla de Magia Salvaje (CD = 8 + comp. + mod. CON): 1 Tentáculos de sombra (salvación CON a criaturas a 30 pies o 1d12 necrótico; ganas 1d12 PG temporales). 2 Teletransporte hasta 30 pies (repetible como Acción Adicional). 3 Espíritu intangible que explota (salvación DES o 1d6 fuerza a 5 pies; repetible como Acción Adicional). 4 Un arma pasa a daño de fuerza con propiedades ligera y arrojadiza (20/60) y vuelve a tu mano. 5 Quien te impacta sufre 1d6 de fuerza. 6 +1 CA para ti y aliados a 10 pies. 7 Terreno difícil para tus enemigos a 15 pies. 8 Rayo de luz (salvación CON o 1d6 radiante y Cegado; repetible como Acción Adicional)."
      },
      {
        n: "Magia Reforzante (Bolstering Magic)",
        nv: 6,
        a: "A",
        d: "Con una acción tocas a otra criatura para darle uno de estos beneficios: durante 10 minutos suma 1d3 a sus tiradas de ataque y pruebas de característica; o recupera un espacio de conjuro gastado de nivel igual o inferior a 1d3 (mínimo nivel 1). Una criatura no puede recibir de nuevo un beneficio hasta un descanso largo. Usos = comp.; se recuperan con un descanso largo."
      },
      {
        n: "Reacción Inestable (Unstable Backlash)",
        nv: 10,
        a: "R",
        d: "Inmediatamente después de recibir daño o fallar una salvación estando en Furia, puedes usar tu reacción para tirar en la tabla de Magia Salvaje y reemplazar el efecto actual."
      },
      {
        n: "Oleada Controlada (Controlled Surge)",
        nv: 14,
        d: "Cuando tiras en la tabla de Magia Salvaje puedes tirar el dado dos veces y elegir uno de los efectos; si sale el mismo número, eliges cualquier efecto."
      },
    ],


    /* ── BGotG ── */
    "Camino del Gigante [BGotG]": [
      {
        n: "Poder del Gigante (Giant's Power)",
        nv: 3,
        d: "Aprendes a hablar, leer y escribir Gigante (o otro idioma si ya lo conoces) y el truco Druidcraft o Thaumaturgy (la característica es SAB)."
      },
      {
        n: "Estragos del Gigante (Giant's Havoc)",
        nv: 3,
        d: "Mientras estás en Furia: Lanzamiento Aplastante: sumas tu bonificador de daño de Furia al daño de tus ataques a distancia con arma arrojadiza con FUE. Estatura de Gigante: tu alcance aumenta 5 pies y, si eres más pequeño que Grande, pasas a ser Grande con tu equipo (si no hay espacio, no cambia)."
      },
      {
        n: "Cuchilla Elemental (Elemental Cleaver)",
        nv: 6,
        a: "B",
        d: "Al entrar en Furia infundes un arma que sostengas con ácido, frío, fuego, trueno o rayo: cambia su tipo de daño, inflige 1d6 adicional de ese tipo y gana la propiedad arrojadiza (20/60 pies); si la lanzas, vuelve a tu mano tras impactar o fallar. Mientras estás en Furia puedes cambiar el tipo de daño como Acción Adicional."
      },
      {
        n: "Impulso Poderoso (Mighty Impel)",
        nv: 10,
        a: "B",
        d: "Como Acción Adicional en Furia, mueves a una criatura Mediana o menor a tu alcance a un espacio libre que veas a 30 pies. Una criatura involuntaria debe superar una salvación de FUE (CD 8 + comp. + mod. FUE). Si acaba en el aire, cae con normalidad."
      },
      {
        n: "Coloso Demiurgo (Demiurgic Colossus)",
        nv: 14,
        d: "Mientras estás en Furia tu alcance aumenta 10 pies, tu tamaño puede ser Grande o Enorme (a tu elección), Impulso Poderoso afecta a criaturas Grandes o menores y el daño adicional de Cuchilla Elemental pasa a 2d6."
      },
    ],
  },
};
