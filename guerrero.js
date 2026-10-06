/* ══════════════════════════════════════════════════════════════════
   guerrero.js — Guerrero: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · PHB 2024 · XGtE · SCAG · EGtW · TCE
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Campeón                      [PHB 2014] / [PHB 2024]
     Maestro de Batalla           [PHB 2014] / [PHB 2024]
     Caballero Arcano             [PHB 2014] / [PHB 2024]
     Guerrero Psíquico            [PHB 2024] / [TCE]
     Tirador Arcano               [XGtE]
     Jinete                       [XGtE]
     Caballero Samurái            [XGtE]
     Caballero Banneret           [SCAG]
     Caballero Eco                [EGtW]
     Guerrero Rúnico              [TCE]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_GUERRERO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d10. Salvaciones: FUE y CON. Armaduras: ligeras, medias, pesadas y escudos. Armas: simples y marciales. Habilidades: elige 2 entre Acrobacias, Atletismo, Historia, Intimidación, Percepción, Perspicacia, Persuasión, Supervivencia y Trato con Animales. [2014: sin Persuasión en la lista]"
    },
    {
      n: "Estilo de Combate",
      nv: 1,
      d: "Ganas una dote de Estilo de Combate de tu elección (Arquería, Combate a Ciegas, Defensa, Duelo, Combate con Armas a Dos Manos, Interceptación, Protección, Combate con Armas Arrojadizas, Combate con Dos Armas, Combate sin Armas). Al subir de nivel de Guerrero puedes cambiarla por otra. [2014: eliges un Estilo de la lista del PHB; TCE añade Combate a Ciegas, Interceptación, Técnica Superior, Armas Arrojadizas y Combate sin Armas]. Los efectos están en Dotes."
    },
    {
      n: "Segundo Aliento",
      nv: 1,
      a: "B",
      d: "Como Acción Adicional recuperas 1d10 + tu nivel de Guerrero PG. Tienes 2 usos (3 en Nv.4, 4 en Nv.10); recuperas 1 uso gastado con un descanso corto y todos con un descanso largo. [2014: 1 uso, se recupera con descanso corto o largo]"
    },
    {
      n: "Maestría con Armas (Weapon Mastery)",
      nv: 1,
      d: "Puedes usar la propiedad de maestría de 3 armas simples o marciales de tu elección (4 en Nv.4, 5 en Nv.10, 6 en Nv.16). Tras un descanso largo puedes cambiar una de las elegidas. [Sólo 2024]"
    },
    {
      n: "Oleada de Acción (Action Surge)",
      nv: 2,
      a: "O",
      d: "En tu turno puedes realizar una acción adicional (excepto la acción Mágica). Un uso (2 en Nv.17, pero sólo uno por turno); recuperas los usos con un descanso corto o largo. [2014: 1 uso (2 en Nv.17); cualquier acción adicional]"
    },
    {
      n: "Mente Táctica (Tactical Mind)",
      nv: 2,
      a: "O",
      d: "Cuando fallas una prueba de característica puedes gastar un uso de Segundo Aliento: tiras 1d10 y lo sumas a la prueba, que puede pasar a éxito. Si la prueba sigue fallando, no se gasta el uso. [Sólo 2024]"
    },
    {
      n: "Subclase de Guerrero (Arquetipo Marcial)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 7, 10, 15 y 18. [2014: Arquetipo Marcial]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 6, 8, 12, 14 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]. El Guerrero tiene más mejoras que cualquier otra clase."
    },
    {
      n: "Ataque Extra",
      nv: 5,
      a: "A",
      d: "Cuando realizas la acción de Atacar en tu turno puedes atacar dos veces en lugar de una (3 veces en Nv.11 y 4 veces en Nv.20)."
    },
    {
      n: "Cambio Táctico (Tactical Shift)",
      nv: 5,
      d: "Cuando usas Segundo Aliento puedes moverte hasta la mitad de tu Velocidad sin provocar ataques de oportunidad. [Sólo 2024]"
    },
    {
      n: "Indomable",
      nv: 9,
      a: "O",
      d: "Si fallas una tirada de salvación puedes repetirla con un bonificador igual a tu nivel de Guerrero y debes usar el nuevo resultado. 1 uso (2 en Nv.13, 3 en Nv.17); recuperas todos los usos con un descanso largo. [2014: sin bonificador a la repetición]"
    },
    {
      n: "Maestro Táctico (Tactical Master)",
      nv: 9,
      d: "Al atacar con un arma de la que tengas maestría puedes sustituir su propiedad de maestría por Empujar (Push), Debilitar (Sap) o Ralentizar (Slow) en ese ataque. [Sólo 2024]"
    },
    {
      n: "Ataques Estudiados (Studied Attacks)",
      nv: 13,
      d: "Si fallas una tirada de ataque contra una criatura, tienes Ventaja en tu siguiente tirada de ataque contra ella antes del final de tu siguiente turno. [Sólo 2024]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es la mejora de característica de Nv.19]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Campeón [PHB 2014]": [
      {
        n: "Crítico Mejorado",
        nv: 3,
        d: "Tus ataques con arma consiguen un golpe crítico con 19-20 en el d20."
      },
      {
        n: "Atleta Extraordinario",
        nv: 7,
        d: "Añades la mitad de tu bonificador de competencia (redondeado arriba) a las pruebas de FUE, DES o CON que no tengan ya competencia. Además, tu salto de longitud con carrera aumenta en pies = tu mod. de FUE."
      },
      {
        n: "Estilo de Combate Adicional",
        nv: 10,
        d: "Aprendes un segundo Estilo de Combate de los disponibles para el Guerrero."
      },
      {
        n: "Crítico Superior",
        nv: 15,
        d: "Tus ataques con arma consiguen un golpe crítico con 18-20 en el d20."
      },
      {
        n: "Superviviente",
        nv: 18,
        d: "Al inicio de cada uno de tus turnos recuperas PG = 5 + mod. de CON si tienes menos de la mitad de tus PG máximos y al menos 1 PG."
      },
    ],

    "Maestro de Batalla [PHB 2014]": [
      {
        n: "Superioridad de Combate",
        nv: 3,
        a: "O",
        d: "Aprendes 3 maniobras (5 en Nv.7, 7 en Nv.10, 9 en Nv.15); al subir de nivel de Guerrero puedes cambiar una. Tienes 4 Dados de Superioridad d8 (5 en Nv.7, 6 en Nv.15), que recuperas con un descanso corto o largo. CD de las maniobras = 8 + BC + mod. FUE o DES (a tu elección). Maniobras del PHB: Orden de Comandante (renuncias a un ataque y, con AA, un aliado ataca con su reacción: +dado al daño), Ataque Desarmador (+dado al daño; salvación FUE o suelta el objeto), Ataque Distractor (+dado al daño; el siguiente ataque de otro contra él tiene ventaja), Paso Evasivo (+dado a la CA mientras te mueves), Ataque de Finta (AA: ventaja en tu siguiente ataque contra una criatura a 5 pies, +dado al daño), Ataque Provocador (+dado al daño; salvación SAB o desventaja contra otros), Ataque de Embestida (+dado al daño si te moviste 5+ pies en línea recta), Ataque Maniobrado (+dado al daño; un aliado se mueve media velocidad sin provocar), Ataque Amenazante (+dado al daño; salvación SAB o asustado), Parada (Reacción: reduce el daño cuerpo a cuerpo en dado + mod. DES), Ataque Certero (+dado al ataque), Ataque de Empuje (+dado al daño; salvación FUE o 15 pies de empuje), Reagrupar (AA: aliado gana PGT = dado + mod. CAR), Contraataque (Reacción al fallarte un ataque cuerpo a cuerpo: atacas con +dado al daño), Ataque Barredor (daño = dado a otra criatura a 5 pies del objetivo) y Ataque de Derribo (+dado al daño; salvación FUE o derribado)."
      },
      {
        n: "Estudiante de la Guerra",
        nv: 3,
        d: "Ganas competencia con un tipo de herramientas de artesano a tu elección."
      },
      {
        n: "Conoce a tu Enemigo",
        nv: 7,
        a: "O",
        d: "Si observas o interactúas con una criatura durante al menos 1 minuto fuera de combate, el DM te dice si es igual, superior o inferior a ti en dos de estas características a tu elección: FUE, DES, CON, CA, PG actuales, niveles totales de clase o niveles de Guerrero."
      },
      {
        n: "Superioridad de Combate Mejorada",
        nv: 10,
        d: "Tus Dados de Superioridad pasan a ser d10 (d12 en Nv.18)."
      },
      {
        n: "Implacable",
        nv: 15,
        d: "Cuando tiras iniciativa y no te quedan Dados de Superioridad, recuperas 1."
      },
    ],

    "Caballero Arcano [PHB 2014]": [
      {
        n: "Lanzamiento de Conjuros",
        nv: 3,
        d: "INT es tu característica de lanzamiento (CD = 8 + BC + mod. INT; foco arcano). Lista del Mago; lanzador de un tercio. Trucos: 2 (3 en Nv.10). Conjuros conocidos: 3 en Nv.3, 4 en Nv.4, 5 en Nv.7, 6 en Nv.8, 7 en Nv.10, 8 en Nv.11, 9 en Nv.13, 10 en Nv.14, 11 en Nv.16, 12 en Nv.19 y 13 en Nv.20. Los conjuros de Nv.1+ deben ser de Abjuración o Evocación, salvo 1 de los 3 iniciales y los que aprendas en Nv.8, 14 y 20 (cualquier escuela). Al subir de nivel puedes cambiar uno conocido."
      },
      {
        n: "Vínculo con Arma",
        nv: 3,
        a: "B",
        d: "Ritual de 1 hora (puede hacerse en un descanso corto) para vincularte a un arma. Un arma vinculada no te puede ser desarmada salvo que estés incapacitado, y como Acción Adicional puedes hacer que vuelva a tu mano si está en el mismo plano. Hasta 2 armas vinculadas (sólo invocas una por turno)."
      },
      {
        n: "Magia de Guerra",
        nv: 7,
        a: "B",
        d: "Cuando usas tu acción para lanzar un truco, puedes hacer un ataque con arma como Acción Adicional."
      },
      {
        n: "Golpe Sobrenatural",
        nv: 10,
        d: "Cuando impactas a una criatura con un ataque con arma, tiene desventaja en la siguiente salvación que haga contra un conjuro tuyo antes del final de tu siguiente turno."
      },
      {
        n: "Carga Arcana",
        nv: 15,
        a: "O",
        d: "Cuando usas Oleada de Acción puedes teletransportarte hasta 30 pies a un espacio libre que veas, antes o después de la acción adicional."
      },
      {
        n: "Magia de Guerra Mejorada",
        nv: 18,
        a: "B",
        d: "Cuando usas tu acción para lanzar un conjuro, puedes hacer un ataque con arma como Acción Adicional."
      },
    ],


    /* ── PHB 2024 ── */
    "Campeón [PHB 2024]": [
      {
        n: "Crítico Mejorado",
        nv: 3,
        d: "Tus ataques con arma y desarmados consiguen un golpe crítico con 19-20 en el d20."
      },
      {
        n: "Atleta Extraordinario",
        nv: 3,
        d: "Tienes ventaja en las tiradas de Iniciativa y en las pruebas de Fuerza (Atletismo). Inmediatamente después de conseguir un crítico, puedes moverte hasta la mitad de tu Velocidad sin provocar ataques de oportunidad."
      },
      {
        n: "Estilo de Combate Adicional",
        nv: 7,
        d: "Ganas una segunda dote de Estilo de Combate."
      },
      {
        n: "Guerrero Heroico (Heroic Warrior)",
        nv: 10,
        a: "O",
        d: "Durante un combate, al inicio de cada uno de tus turnos puedes darte Inspiración Heroica si no la tienes."
      },
      {
        n: "Crítico Superior",
        nv: 15,
        d: "Tus ataques con arma y desarmados consiguen un golpe crítico con 18-20 en el d20."
      },
      {
        n: "Superviviente",
        nv: 18,
        d: "Desafiar a la Muerte: tienes ventaja en las salvaciones de muerte y un 18-20 cuenta como un 20. Reanimación Heroica: al inicio de cada uno de tus turnos recuperas PG = 5 + mod. de CON si estás Ensangrentado (mitad de PG o menos) y tienes al menos 1 PG."
      },
    ],

    "Maestro de Batalla [PHB 2024]": [
      {
        n: "Superioridad de Combate",
        nv: 3,
        a: "O",
        d: "Aprendes 3 maniobras (5 en Nv.7, 7 en Nv.10, 9 en Nv.15); al subir de nivel de Guerrero puedes cambiar una. Tienes 4 Dados de Superioridad d8 (5 en Nv.7, 6 en Nv.15), que recuperas con un descanso corto o largo. CD = 8 + BC + mod. FUE o DES. Maniobras (2024): Emboscada, Cambiazo, Orden de Comandante, Presencia Imponente, Ataque Desarmador, Ataque Distractor, Paso Evasivo, Ataque de Finta, Ataque Provocador, Ataque de Embestida, Ataque Maniobrado, Ataque Amenazante, Parada, Ataque Certero, Ataque de Empuje, Reagrupar, Contraataque, Ataque Barredor, Evaluación Táctica y Ataque de Derribo. La mayoría añaden el dado al daño del ataque con un efecto adicional (salvación o movimiento); Parada y Contraataque son Reacciones."
      },
      {
        n: "Estudiante de la Guerra",
        nv: 3,
        d: "Ganas competencia con un tipo de herramientas de artesano y con una habilidad de la lista de Guerrero."
      },
      {
        n: "Conoce a tu Enemigo",
        nv: 7,
        a: "B",
        d: "Como Acción Adicional averiguas si una criatura que veas a 30 pies o menos tiene inmunidades, resistencias o vulnerabilidades, y cuáles son. Una vez usado, recuperas el uso con un descanso largo o gastando un Dado de Superioridad."
      },
      {
        n: "Superioridad de Combate Mejorada",
        nv: 10,
        d: "Tus Dados de Superioridad pasan a ser d10."
      },
      {
        n: "Implacable",
        nv: 15,
        d: "Una vez por turno, al usar una maniobra, puedes tirar 1d8 y usar ese resultado en lugar de gastar un Dado de Superioridad."
      },
      {
        n: "Superioridad de Combate Suprema",
        nv: 18,
        d: "Tus Dados de Superioridad pasan a ser d12."
      },
    ],

    "Caballero Arcano [PHB 2024]": [
      {
        n: "Lanzamiento de Conjuros",
        nv: 3,
        d: "INT es tu característica de lanzamiento (CD = 8 + BC + mod. INT; foco arcano). Lista del Mago; lanzador de un tercio. Trucos: 2 (3 en Nv.10). Conjuros preparados: 3 en Nv.3, hasta 13 en Nv.20 (según la tabla de la subclase); al subir de nivel de Guerrero puedes cambiar uno. Espacios de conjuro como lanzador de un tercio (2 de Nv.1 en Nv.3; 4/3/3/1 en Nv.19)."
      },
      {
        n: "Vínculo de Guerra (War Bond)",
        nv: 3,
        a: "B",
        d: "Ritual de 1 hora (puede hacerse en un descanso corto) para vincularte a un arma. Un arma vinculada no te puede ser desarmada salvo que estés incapacitado, y como Acción Adicional la haces aparecer en tu mano si está en el mismo plano. Hasta 2 armas vinculadas (sólo invocas una por turno)."
      },
      {
        n: "Magia de Guerra",
        nv: 7,
        a: "A",
        d: "Cuando realizas la acción de Atacar, puedes sustituir uno de los ataques por el lanzamiento de uno de tus trucos de Mago con tiempo de lanzamiento de una acción."
      },
      {
        n: "Golpe Sobrenatural",
        nv: 10,
        d: "Cuando impactas a una criatura con un ataque con arma, tiene desventaja en la siguiente salvación que haga contra un conjuro tuyo antes del final de tu siguiente turno."
      },
      {
        n: "Carga Arcana",
        nv: 15,
        a: "O",
        d: "Cuando usas Oleada de Acción puedes teletransportarte hasta 30 pies a un espacio libre que veas, antes o después de la acción adicional."
      },
      {
        n: "Magia de Guerra Mejorada",
        nv: 18,
        a: "A",
        d: "Cuando realizas la acción de Atacar, puedes sustituir dos de los ataques por el lanzamiento de un conjuro de Nv.1 o 2 de Mago con tiempo de lanzamiento de una acción."
      },
    ],

    "Guerrero Psíquico [PHB 2024]": [
      {
        n: "Poder Psiónico",
        nv: 3,
        a: "R",
        d: "Tienes Dados de Energía Psiónica: 4 d6 en Nv.3, 6 d8 en Nv.5, 8 d8 en Nv.9, 8 d10 en Nv.11, 10 d10 en Nv.13 y 12 d12 en Nv.17. Recuperas 1 dado con un descanso corto y todos con uno largo. Campo Protector (Reacción): cuando tú u otra criatura a 30 pies recibe daño, gastas 1 dado y reduces el daño en dado + mod. INT (mín. 1). Golpe Psiónico: una vez por turno, justo tras impactar con un arma a un objetivo a 30 pies, gastas 1 dado y causas daño de fuerza = dado + mod. INT. Movimiento Telequinético (acción Mágica): mueves hasta 30 pies un objeto Grande o menor, o una criatura voluntaria; 1 vez por descanso corto o largo (o gastando un dado)."
      },
      {
        n: "Adepto Telequinético",
        nv: 7,
        a: "B",
        d: "Salto Psiónico (Acción Adicional): ganas una Velocidad de vuelo igual al doble de tu Velocidad hasta el final del turno; 1 vez por descanso corto o largo (o gastando un dado). Empuje Telequinético: cuando causas daño con Golpe Psiónico, el objetivo hace salvación FUE (CD 8 + BC + mod. INT) o queda derribado o lo empujas hasta 10 pies en horizontal."
      },
      {
        n: "Mente Protegida",
        nv: 10,
        a: "O",
        d: "Resistencia al daño psíquico. Si empiezas tu turno hechizado o asustado, puedes gastar 1 dado de Energía Psiónica para terminar esas condiciones en ti."
      },
      {
        n: "Baluarte de Fuerza",
        nv: 15,
        a: "B",
        d: "Como Acción Adicional eliges hasta tu mod. de INT criaturas (mín. 1, puedes incluirte) que veas a 30 pies: tienen cobertura media durante 1 minuto o hasta que estés incapacitado. 1 vez por descanso largo (o gastando un dado)."
      },
      {
        n: "Maestro Telequinético",
        nv: 18,
        a: "A",
        d: "Siempre tienes preparado el conjuro Telequinesis y puedes lanzarlo sin espacio ni componentes, con INT como característica. Mientras mantienes concentración en él, puedes hacer 1 ataque con arma como Acción Adicional cada turno. 1 vez por descanso largo (o gastando un dado)."
      },
    ],


    /* ── XGtE ── */
    "Tirador Arcano [XGtE]": [
      {
        n: "Saber del Tirador Arcano",
        nv: 3,
        d: "Ganas competencia en Arcanos o Naturaleza y aprendes el truco Prestidigitación o Druidismo."
      },
      {
        n: "Disparo Arcano",
        nv: 3,
        a: "O",
        d: "Aprendes 2 opciones de Disparo Arcano (3 en Nv.7, 4 en Nv.10, 5 en Nv.15 y 6 en Nv.18). Una vez por turno, al disparar una flecha con arco corto o largo como parte de la acción de Atacar, puedes aplicarle una opción. Decides usarla al impactar (salvo que no requiera tirada de ataque). 2 usos; los recuperas con un descanso corto o largo. CD = 8 + BC + mod. INT. Opciones: Flecha Desterradora, Seductora, Explosiva, Debilitante, Aprehensora, Perforadora, Buscadora y Sombría. En Nv.18 los dados de daño de las opciones se duplican (2d6 → 4d6; 1d6 → 2d6)."
      },
      {
        n: "Flecha Mágica",
        nv: 7,
        d: "Cuando disparas una flecha no mágica con arco corto o largo, puedes hacerla mágica a efectos de superar resistencia e inmunidad a ataques no mágicos."
      },
      {
        n: "Disparo Curvo",
        nv: 7,
        a: "B",
        d: "Cuando haces un ataque con una flecha mágica y fallas, puedes usar una Acción Adicional para repetir la tirada contra otro objetivo a 60 pies o menos del original."
      },
      {
        n: "Disparo Siempre Listo",
        nv: 15,
        d: "Cuando tiras iniciativa y no te quedan usos de Disparo Arcano, recuperas 1 uso."
      },
    ],

    "Jinete [XGtE]": [
      {
        n: "Competencia Adicional",
        nv: 3,
        d: "Ganas competencia en una habilidad entre Trato con Animales, Historia, Perspicacia, Interpretación y Persuasión, o aprendes un idioma."
      },
      {
        n: "Nacido para la Silla",
        nv: 3,
        d: "Ventaja en las salvaciones para no caer de la montura. Si caes y la caída es de 10 pies o menos, aterrizas de pie (si no estás incapacitado). Montar o desmontar sólo cuesta 5 pies de movimiento."
      },
      {
        n: "Marca Inquebrantable",
        nv: 3,
        a: "O",
        d: "Cuando impactas a una criatura con un ataque cuerpo a cuerpo, la marcas hasta el final de tu siguiente turno: tiene desventaja en los ataques contra otros que no seas tú mientras esté a 5 pies de ti, y si daña a otro, puedes hacer como Acción Adicional un ataque cuerpo a cuerpo con ventaja contra ella con daño extra = mitad de tu nivel de Guerrero. Usos: tu mod. de FUE (mín. 1) por descanso largo."
      },
      {
        n: "Maniobra Protectora",
        nv: 7,
        a: "R",
        d: "Cuando tú u otra criatura a 5 pies recibe un impacto, y llevas un arma cuerpo a cuerpo o escudo, tiras 1d8 con tu Reacción y lo sumas a la CA del objetivo; si aun así impacta, el objetivo tiene resistencia a ese daño. Usos: tu mod. de CON (mín. 1) por descanso largo."
      },
      {
        n: "Mantener la Línea",
        nv: 10,
        d: "Las criaturas provocan ataques de oportunidad tuyos al moverse 5 pies o más dentro de tu alcance. Si impactas con un ataque de oportunidad, la Velocidad del objetivo es 0 hasta el final del turno."
      },
      {
        n: "Cargador Feroz",
        nv: 15,
        d: "Si te mueves al menos 10 pies en línea recta hacia una criatura y la impactas con un ataque cuerpo a cuerpo en el mismo turno, debe superar una salvación de FUE (CD 8 + BC + mod. FUE) o queda derribada. Una vez por turno."
      },
      {
        n: "Defensor Vigilante",
        nv: 18,
        a: "R",
        d: "En cada turno que no sea el tuyo dispones de una reacción adicional que sólo puedes usar para un ataque de oportunidad."
      },
    ],

    "Caballero Samurái [XGtE]": [
      {
        n: "Competencia Adicional",
        nv: 3,
        d: "Ganas competencia en Historia, Perspicacia, Interpretación o Persuasión, o aprendes un idioma."
      },
      {
        n: "Espíritu Combativo",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional ganas ventaja en todas tus tiradas de ataque con arma hasta el final del turno y 5 PG temporales (10 en Nv.10, 15 en Nv.15). 3 usos; los recuperas con un descanso largo."
      },
      {
        n: "Cortesano Elegante",
        nv: 7,
        d: "Sumas tu mod. de SAB a las pruebas de Carisma (Persuasión). Ganas competencia en salvaciones de SAB (o de INT o CAR si ya la tenías)."
      },
      {
        n: "Espíritu Incansable",
        nv: 10,
        d: "Cuando tiras iniciativa y no te quedan usos de Espíritu Combativo, recuperas 1 uso."
      },
      {
        n: "Golpe Rápido",
        nv: 15,
        d: "Si realizas la acción de Atacar y tienes ventaja en una tirada de ataque contra un objetivo, puedes renunciar a la ventaja para hacer un ataque adicional con arma contra ese objetivo. Una vez por turno."
      },
      {
        n: "Fuerza antes de la Muerte",
        nv: 18,
        a: "R",
        d: "Si recibes daño que te reduciría a 0 PG, puedes usar tu Reacción para retrasar la caída inconsciente y realizar inmediatamente un turno extra (puedes curarte durante él). Una vez por descanso largo."
      },
    ],


    /* ── SCAG ── */
    "Caballero Banneret [SCAG]": [
      {
        n: "Grito de Guerra",
        nv: 3,
        d: "Cuando usas Segundo Aliento, hasta 3 aliados a 60 pies recuperan PG = tu nivel de Guerrero (además de lo que recuperas tú)."
      },
      {
        n: "Enviado Real",
        nv: 7,
        d: "Ganas competencia en Persuasión; si ya la tenías, la sustituyes por competencia en Trato con Animales, Perspicacia, Intimidación o Interpretación. Tu bonificador de competencia se duplica en pruebas de Persuasión."
      },
      {
        n: "Oleada Inspiradora",
        nv: 10,
        a: "O",
        d: "Cuando usas Oleada de Acción, un aliado a 60 pies que te vea u oiga puede hacer un ataque cuerpo a cuerpo o a distancia con su reacción (2 aliados en Nv.18)."
      },
      {
        n: "Baluarte",
        nv: 15,
        a: "O",
        d: "Cuando usas Indomable para repetir una salvación de INT, SAB o CAR, un aliado a 60 pies que también la haya fallado contra el mismo efecto puede repetirla si te ve u oye, y debe usar el nuevo resultado."
      },
    ],


    /* ── EGtW ── */
    "Caballero Eco [EGtW]": [
      {
        n: "Manifestar Eco",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional creas un eco en un espacio libre a 15 pies (CA 14 + BC, 1 PG, inmune a todas las condiciones; usa tus salvaciones, y su ataque cuenta como tuyo). Dura hasta que se destruya, lo descartes (AA), crees otro o quedes incapacitado. Puedes mover el eco 30 pies en tu turno (mentalmente) e intercambiar posición con él (gasta 15 pies de movimiento). Puedes atacar y lanzar conjuros desde su espacio y hacer un ataque de oportunidad desde el eco."
      },
      {
        n: "Desatar Encarnación",
        nv: 3,
        a: "O",
        d: "Cuando realizas la acción de Atacar, puedes hacer un ataque cuerpo a cuerpo adicional desde el espacio del eco. Usos: tu mod. de CON (mín. 1) por descanso largo."
      },
      {
        n: "Avatar del Eco",
        nv: 7,
        a: "A",
        d: "Como acción, ves y oyes a través de tu eco hasta 10 minutos (quedas cegado y ensordecido) y el eco puede estar a hasta 1.000 pies; puedes terminar el efecto en cualquier momento."
      },
      {
        n: "Mártir de la Sombra",
        nv: 10,
        a: "R",
        d: "Cuando una criatura que veas hace una tirada de ataque contra otra criatura que no seas tú, usas tu Reacción para teletransportar el eco a 5 pies del objetivo, y el ataque se resuelve contra el eco. Una vez por descanso corto o largo."
      },
      {
        n: "Reclamar Potencial",
        nv: 15,
        d: "Cuando un eco es destruido por daño, ganas 2d6 + mod. de CON PG temporales (si no tienes ya PGT). Usos: tu mod. de CON (mín. 1) por descanso largo."
      },
      {
        n: "Legión de Uno",
        nv: 18,
        a: "B",
        d: "Como Acción Adicional creas 2 ecos (el tercero destruye los anteriores); todos los rasgos de Eco funcionan desde cualquiera. Cuando tiras iniciativa y no te quedan usos de Desatar Encarnación, recuperas 1."
      },
    ],


    /* ── TCE ── */
    "Guerrero Psíquico [TCE]": [
      {
        n: "Poder Psiónico",
        nv: 3,
        a: "R",
        d: "Tienes Dados de Energía Psiónica = 2 × BC (d6 en Nv.3, d8 en Nv.5, d10 en Nv.11, d12 en Nv.17). Los recuperas todos con un descanso largo, y puedes recuperar 1 como Acción Adicional (una vez por descanso corto o largo). Campo Protector (Reacción): cuando tú u otra criatura a 30 pies recibe daño, gastas 1 dado y reduces el daño en dado + mod. INT (mín. 1). Golpe Psiónico: una vez por turno, tras impactar con un arma a un objetivo a 30 pies, gastas 1 dado y causas daño de fuerza = dado + mod. INT. Movimiento Telequinético (acción): mueves hasta 30 pies un objeto Grande o menor o una criatura voluntaria; 1 vez por descanso corto o largo (o gastando un dado)."
      },
      {
        n: "Adepto Telequinético",
        nv: 7,
        a: "B",
        d: "Salto Psiónico (Acción Adicional): Velocidad de vuelo igual al doble de tu Velocidad hasta el final del turno; 1 vez por descanso corto o largo (o gastando un dado). Empuje Telequinético: al causar daño con Golpe Psiónico, el objetivo hace salvación FUE (CD 8 + BC + mod. INT) o queda derribado o lo empujas hasta 10 pies en horizontal."
      },
      {
        n: "Mente Protegida",
        nv: 10,
        a: "O",
        d: "Resistencia al daño psíquico. Si empiezas tu turno hechizado o asustado, puedes gastar 1 dado de Energía Psiónica para terminar esas condiciones en ti."
      },
      {
        n: "Baluarte de Fuerza",
        nv: 15,
        a: "B",
        d: "Como Acción Adicional eliges hasta tu mod. de INT criaturas (mín. 1, puedes incluirte) a 30 pies: cobertura media durante 1 minuto o hasta que estés incapacitado. 1 vez por descanso largo (o gastando un dado)."
      },
      {
        n: "Maestro Telequinético",
        nv: 18,
        a: "A",
        d: "Puedes lanzar Telequinesis sin componentes, con INT como característica. Mientras mantienes concentración en él, puedes hacer 1 ataque con arma como Acción Adicional cada turno. 1 vez por descanso largo (o gastando un dado)."
      },
    ],

    "Guerrero Rúnico [TCE]": [
      {
        n: "Competencias Adicionales",
        nv: 3,
        d: "Ganas competencia con herramientas de herrero y aprendes a hablar, leer y escribir Gigante."
      },
      {
        n: "Tallador de Runas",
        nv: 3,
        a: "O",
        d: "Conoces 2 runas (3 en Nv.7, 4 en Nv.10, 5 en Nv.15) y puedes cambiar una al subir de nivel de Guerrero. Tras un descanso largo inscribes cada runa conocida en un objeto (arma, armadura, escudo, joya...; una runa por objeto, 24 horas). Cada runa da un beneficio pasivo y otro activo, usable 1 vez por descanso corto o largo (CD = 8 + BC + mod. CON): Nube (Reacción: rediriges un ataque contra un aliado a otra criatura a 30 pies del atacante), Fuego (daño extra 2d6 de fuego y salvación FUE o apresado 1 min), Escarcha (AA: +2 a pruebas y salvaciones de FUE y CON 10 min), Piedra (Reacción: al acabar su turno una criatura a 60 pies, salvación SAB o hechizada 1 min con Velocidad 0 e incapacitada), Colina (Nv.7, AA: resistencia a daño contundente, perforante y cortante 1 min), Tormenta (Nv.7, AA: 1 min en que como Reacción das ventaja o desventaja a una tirada cercana)."
      },
      {
        n: "Fuerza de Gigante",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional te vuelves Grande (si hay espacio) durante 1 minuto: ventaja en pruebas y salvaciones de FUE y, una vez por turno, un ataque con arma o desarmado causa 1d6 de daño extra. Usos: BC por descanso largo."
      },
      {
        n: "Escudo Rúnico",
        nv: 7,
        a: "R",
        d: "Cuando otra criatura que veas a 60 pies es impactada por una tirada de ataque, usas tu Reacción para obligar al atacante a repetir el d20. Usos: BC por descanso largo."
      },
      {
        n: "Gran Estatura",
        nv: 10,
        d: "Creces 3d4 pulgadas. El daño extra de Fuerza de Gigante pasa a 1d8."
      },
      {
        n: "Maestro de Runas",
        nv: 15,
        d: "Puedes invocar cada una de tus runas conocidas dos veces por descanso en lugar de una (se recuperan con descanso corto o largo)."
      },
      {
        n: "Juggernaut Rúnico",
        nv: 18,
        d: "El daño extra de Fuerza de Gigante pasa a 1d10 y, mientras está activa, puedes ser Enorme (si hay espacio) y tu alcance aumenta 5 pies."
      },
    ],
  },
};
