/* ══════════════════════════════════════════════════════════════════
   picaro.js — Pícaro: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · SCAG/XGtE · XGtE · TCE · PHB 2024 · THW 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Ladrón                       [PHB 2014] / [PHB 2024]
     Asesino                      [PHB 2014] / [PHB 2024]
     Tramposo Arcano              [PHB 2014] / [PHB 2024]
     Maestro de Intrigas          [SCAG/XGtE]
     Explorador                   [XGtE]
     Espadachín                   [XGtE]
     Inquisitivo                  [XGtE]
     Fantasma                     [TCE] / [THW 2024]
     Cuchillo de Alma             [TCE] / [PHB 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_PICARO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d8. Salvaciones: DES e INT. Armaduras: ligeras. Armas: simples y marciales con la propiedad Sutil o Ligera. Herramientas: herramientas de ladrón. Habilidades: elige 4 entre Acrobacias, Atletismo, Engaño, Perspicacia, Intimidación, Investigación, Percepción, Persuasión, Juego de Manos y Sigilo. [2014: armas: simples, ballestas de mano, espadas largas, estoques y espadas cortas; también Interpretación entre las habilidades]"
    },
    {
      n: "Pericia (Expertise)",
      nv: 1,
      d: "Ganas Pericia en 2 de tus habilidades competentes (duplicas tu bonificador de competencia en ellas); otras 2 en Nv.6. [2014: puedes elegir también herramientas de ladrón]"
    },
    {
      n: "Ataque Furtivo (Sneak Attack)",
      nv: 1,
      d: "Una vez por turno infliges 1d6 de daño adicional a una criatura que impactes con una tirada de ataque si tienes Ventaja en ella y el ataque usa un arma Sutil o a distancia. No necesitas Ventaja si otro enemigo del objetivo está a 5 pies de él, no está Incapacitado y no tienes Desventaja. Dados: 1d6 (Nv.1), 2d6 (3), 3d6 (5), 4d6 (7), 5d6 (9), 6d6 (11), 7d6 (13), 8d6 (15), 9d6 (17), 10d6 (19)."
    },
    {
      n: "Jerga de Ladrones (Thieves' Cant)",
      nv: 1,
      d: "Conoces la Jerga de Ladrones y otro idioma a tu elección."
    },
    {
      n: "Maestría con Armas (Weapon Mastery)",
      nv: 1,
      d: "Puedes usar las propiedades de maestría de 2 tipos de armas a tu elección; puedes cambiar uno tras un descanso largo. [Sólo 2024]"
    },
    {
      n: "Acción Astuta (Cunning Action)",
      nv: 2,
      a: "B",
      d: "En tu turno puedes usar una Acción Adicional para Correr, Retirarte o Esconderte."
    },
    {
      n: "Subclase de Pícaro (Arquetipo Pícaro)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 9, 13 y 17. [2014: Arquetipo Pícaro, mismos niveles]"
    },
    {
      n: "Puntería Firme (Steady Aim)",
      nv: 3,
      a: "B",
      d: "Como Acción Adicional te das Ventaja en tu siguiente tirada de ataque de este turno. Sólo si no te has movido este turno; después tu Velocidad es 0 hasta el final del turno. [2014: opcional de TCE]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 10, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote en Nv.4, 8, 10, 12, 16 y 19]"
    },
    {
      n: "Golpe Astuto (Cunning Strike)",
      nv: 5,
      a: "O",
      d: "Cuando infliges Ataque Furtivo, puedes renunciar a dados de daño para aplicar un efecto (CD de salvación = 8 + mod. DES + comp.): Veneno (1d6): salvación de CON o Envenenado 1 minuto (repite al final de sus turnos; requiere equipo de envenenador). Derribo (1d6): criatura Grande o menor, salvación de DES o Derribada. Retirada (1d6): tras el ataque te mueves hasta la mitad de tu Velocidad sin provocar ataques de oportunidad. [Sólo 2024]"
    },
    {
      n: "Esquiva Asombrosa (Uncanny Dodge)",
      nv: 5,
      a: "R",
      d: "Cuando un atacante que veas te impacta con una tirada de ataque, usas tu Reacción para reducir a la mitad el daño."
    },
    {
      n: "Evasión (Evasion)",
      nv: 7,
      d: "Cuando una salvación de DES permite la mitad de daño, no sufres daño si la superas y sólo la mitad si fallas (no funciona si estás Incapacitado)."
    },
    {
      n: "Talento Fiable (Reliable Talent)",
      nv: 7,
      d: "Cuando haces una prueba de característica con competencia en una habilidad o herramienta, un resultado de 9 o menos en el d20 cuenta como 10. [2014: se obtiene en Nv.11]"
    },
    {
      n: "Golpe Astuto Mejorado (Improved Cunning Strike)",
      nv: 11,
      d: "Puedes aplicar hasta 2 efectos de Golpe Astuto al infligir Ataque Furtivo (pagando el coste de ambos). [Sólo 2024]"
    },
    {
      n: "Golpes Pérfidos (Devious Strikes)",
      nv: 14,
      a: "O",
      d: "Nuevas opciones de Golpe Astuto: Aturdir (Daze, 2d6): salvación de CON o su siguiente turno sólo puede mover, usar acción o Acción Adicional (una sola cosa). Dejar Inconsciente (Knock Out, 6d6): salvación de CON o Inconsciente 1 minuto o hasta sufrir daño (repite al final de turnos). Cegar (Obscure, 3d6): salvación de DES o Cegado hasta el final de su siguiente turno. [Sólo 2024]"
    },
    {
      n: "Sentido Ciego (Blindsense)",
      nv: 14,
      d: "Si puedes oír, conoces la ubicación de cualquier criatura oculta o invisible a 10 pies. [Sólo 2014]"
    },
    {
      n: "Mente Escurridiza (Slippery Mind)",
      nv: 15,
      d: "Ganas competencia en las salvaciones de SAB y CAR. [2014: sólo salvaciones de SAB]"
    },
    {
      n: "Elusivo (Elusive)",
      nv: 18,
      d: "Ninguna tirada de ataque tiene Ventaja contra ti mientras no estés Incapacitado."
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Golpe de Suerte (Stroke of Luck)",
      nv: 20,
      a: "O",
      d: "Si fallas una Tirada de d20, puedes convertir el resultado en un 20. Una vez por descanso corto o largo. [2014: puedes convertir un ataque fallado en impacto o tratar el d20 de una prueba fallada como un 20]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Ladrón [PHB 2014]": [
      {
        n: "Manos Rápidas (Fast Hands)",
        nv: 3,
        a: "B",
        d: "Puedes usar la Acción Adicional de Acción Astuta para hacer una prueba de DES (Juego de Manos), usar herramientas de ladrón para abrir una cerradura o desarmar una trampa, o realizar la acción Usar un Objeto."
      },
      {
        n: "Trabajo en el Segundo Piso (Second-Story Work)",
        nv: 3,
        d: "Trepar no te cuesta movimiento adicional. En un salto con carrerilla, la distancia aumenta en pies = tu mod. DES."
      },
      {
        n: "Sigilo Supremo (Supreme Sneak)",
        nv: 9,
        d: "Tienes Ventaja en las pruebas de DES (Sigilo) si te mueves como máximo la mitad de tu Velocidad ese turno."
      },
      {
        n: "Usar Objetos Mágicos (Use Magic Device)",
        nv: 13,
        d: "Ignoras todos los requisitos de clase, raza y nivel para usar objetos mágicos."
      },
      {
        n: "Reflejos del Ladrón (Thief's Reflexes)",
        nv: 17,
        d: "En la primera ronda de cada combate haces dos turnos: uno con tu iniciativa normal y otro con tu iniciativa −10. No se aplica si estás sorprendido."
      },
    ],

    "Asesino [PHB 2014]": [
      {
        n: "Competencias Adicionales (Bonus Proficiencies)",
        nv: 3,
        d: "Ganas competencia con el kit de disfraz y el kit de envenenador."
      },
      {
        n: "Asesinar (Assassinate)",
        nv: 3,
        d: "Tienes Ventaja en las tiradas de ataque contra criaturas que aún no han actuado en el combate. Cualquier impacto contra una criatura sorprendida es un golpe crítico."
      },
      {
        n: "Pericia de Infiltración (Infiltration Expertise)",
        nv: 9,
        d: "Tras 7 días y 25 po estableces una identidad falsa con historial, profesión y afiliaciones: quienes la conozcan creen que eres esa persona salvo motivo evidente."
      },
      {
        n: "Impostor (Impostor)",
        nv: 13,
        d: "Tras estudiar 3 horas el habla, la escritura y los modales de una persona, puedes imitarla. Tienes Ventaja en las pruebas de CAR (Engaño) para evitar ser descubierto por una criatura recelosa."
      },
      {
        n: "Golpe de Muerte (Death Strike)",
        nv: 17,
        d: "Cuando impactas a una criatura sorprendida, esta hace una salvación de CON (CD 8 + mod. DES + comp.) o el daño del ataque se duplica."
      },
    ],

    "Tramposo Arcano [PHB 2014]": [
      {
        n: "Lanzamiento de Conjuros (Spellcasting)",
        nv: 3,
        d: "Lanzador de un tercio con INT como característica de conjuros (CD = 8 + comp. + mod. INT); usas un foco arcano. Trucos: Mage Hand + 2 de la lista de Mago (3; 4 en Nv.10). Conjuros conocidos de la lista de Mago (3 en Nv.3, hasta 13 en Nv.20); la mayoría deben ser de encantamiento o ilusión, salvo 1 en Nv.3, 8, 14 y 20 (cualquier escuela)."
      },
      {
        n: "Mano de Mago Prestidigitadora (Mage Hand Legerdemain)",
        nv: 3,
        d: "Al lanzar Mage Hand, puedes hacer la mano invisible y usarla además para: guardar un objeto que sostenga en un recipiente llevado por otra criatura, recuperar un objeto de un recipiente así, o usar herramientas de ladrón para abrir cerraduras y desarmar trampas a distancia. Puedes hacerlo sin ser notado si superas una prueba de DES (Juego de Manos) contra la SAB (Percepción) de la criatura. Además, puedes usar la Acción Adicional de Acción Astuta para controlar la mano."
      },
      {
        n: "Emboscada Mágica (Magical Ambush)",
        nv: 9,
        d: "Si estás Escondido de una criatura cuando le lanzas un conjuro, tiene Desventaja en cualquier salvación contra él este turno."
      },
      {
        n: "Embaucador Versátil (Versatile Trickster)",
        nv: 13,
        a: "B",
        d: "Como Acción Adicional designas una criatura a 5 pies de tu mano espectral de Mage Hand: tienes Ventaja en las tiradas de ataque contra ella este turno."
      },
      {
        n: "Ladrón de Conjuros (Spell Thief)",
        nv: 17,
        a: "R",
        d: "Inmediatamente después de que una criatura lance un conjuro que te tenga como objetivo o te incluya en su área, usas tu Reacción: hace una salvación (característica de lanzamiento de la criatura, CD de tus conjuros); si falla, el conjuro no te afecta y le robas el conjuro (si es de Nv.1+ y puedes lanzarlo): lo conoces 8 horas y la criatura no puede lanzarlo ese tiempo. Una vez por descanso largo."
      },
    ],


    /* ── SCAG/XGtE ── */
    "Maestro de Intrigas [SCAG/XGtE]": [
      {
        n: "Maestro de la Intriga (Master of Intrigue)",
        nv: 3,
        d: "Ganas competencia con kit de disfraz, kit de falsificación y un juego; aprendes 2 idiomas. Puedes imitar sin error el habla y acento de una criatura que hayas oído durante al menos 1 minuto."
      },
      {
        n: "Maestro de Tácticas (Master of Tactics)",
        nv: 3,
        a: "B",
        d: "Puedes usar la acción Ayudar como Acción Adicional. Cuando ayudas a un aliado a atacar, el objetivo puede estar a 30 pies de ti (si te ve u oye) en lugar de 5 pies."
      },
      {
        n: "Manipulador Perspicaz (Insightful Manipulator)",
        nv: 9,
        d: "Tras observar o interactuar con una criatura fuera de combate al menos 1 minuto, el DM te dice si es igual, superior o inferior a ti en dos de estas categorías (a tu elección): puntuación de INT, de SAB, de CAR o niveles de clase. Opcionalmente, un dato de su historia o personalidad."
      },
      {
        n: "Desvío (Misdirection)",
        nv: 13,
        a: "R",
        d: "Cuando eres objetivo de un ataque y una criatura a 5 pies te da cobertura, usas tu Reacción para que el ataque apunte a esa criatura en su lugar."
      },
      {
        n: "Alma de Embaucador (Soul of Deceit)",
        nv: 17,
        d: "Tus pensamientos no pueden leerse por telepatía salvo que lo permitas (el lector hace una prueba opuesta de SAB (Perspicacia) contra tu CAR (Engaño)). La magia que detecta mentiras te muestra como veraz si quieres, y no pueden obligarte a decir la verdad."
      },
    ],


    /* ── XGtE ── */
    "Explorador [XGtE]": [
      {
        n: "Escaramuzador (Skirmisher)",
        nv: 3,
        a: "R",
        d: "Cuando un enemigo termina su turno a 5 pies de ti, usas tu Reacción para moverte hasta la mitad de tu Velocidad sin provocar ataques de oportunidad."
      },
      {
        n: "Superviviente (Survivalist)",
        nv: 3,
        d: "Ganas competencia en Naturaleza y Supervivencia y duplicas tu bonificador de competencia en ellas."
      },
      {
        n: "Movilidad Superior (Superior Mobility)",
        nv: 9,
        d: "Tu Velocidad aumenta 10 pies (también tu Velocidad de trepar o nadar, si la tienes)."
      },
      {
        n: "Maestro de la Emboscada (Ambush Master)",
        nv: 13,
        d: "Ventaja en las tiradas de iniciativa. La primera criatura que impactes en la primera ronda de un combate es más fácil de golpear: las tiradas de ataque contra ella tienen Ventaja hasta el inicio de tu siguiente turno."
      },
      {
        n: "Golpe Repentino (Sudden Strike)",
        nv: 17,
        a: "B",
        d: "Si realizas la acción Atacar, puedes hacer un ataque adicional como Acción Adicional; este ataque puede beneficiarse del Ataque Furtivo aunque ya lo hayas usado este turno, pero no contra la misma criatura más de una vez por turno."
      },
    ],

    "Espadachín [XGtE]": [
      {
        n: "Juego de Pies (Fancy Footwork)",
        nv: 3,
        d: "Durante tu turno, si haces un ataque cuerpo a cuerpo contra una criatura, esta no puede hacerte ataques de oportunidad el resto de tu turno."
      },
      {
        n: "Audacia Pícara (Rakish Audacity)",
        nv: 3,
        d: "Sumas tu mod. CAR a la iniciativa. Además puedes usar Ataque Furtivo sin Ventaja si estás a 5 pies de la criatura, ninguna otra criatura está a 5 pies de ti y no tienes Desventaja."
      },
      {
        n: "Panache (Panache)",
        nv: 9,
        a: "A",
        d: "Con una acción haces una prueba de CAR (Persuasión) contra su SAB (Perspicacia). Si es hostil y la superas, tiene Desventaja en ataques contra criaturas que no seas tú y no puede hacer ataques de oportunidad contra otras 1 minuto (termina si quedas Incapacitado o te alejas más de 60 pies de ella). Si no es hostil, queda hechizada 1 minuto."
      },
      {
        n: "Maniobra Elegante (Elegant Maneuver)",
        nv: 13,
        a: "B",
        d: "Como Acción Adicional ganas Ventaja en tu siguiente prueba de DES (Acrobacias) o FUE (Atletismo) este turno."
      },
      {
        n: "Maestro Duelista (Master Duelist)",
        nv: 17,
        a: "O",
        d: "Si fallas una tirada de ataque, puedes repetirla con Ventaja. Una vez por descanso corto o largo."
      },
    ],

    "Inquisitivo [XGtE]": [
      {
        n: "Oído para el Engaño (Ear for Deceit)",
        nv: 3,
        d: "Al hacer una prueba de SAB (Perspicacia) para saber si una criatura miente, un resultado de 7 o menos en el d20 cuenta como 8."
      },
      {
        n: "Ojo para el Detalle (Eye for Detail)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional haces una prueba de SAB (Percepción) para descubrir a una criatura u objeto oculto, o de INT (Investigación) para descubrir o descifrar pistas."
      },
      {
        n: "Combate Perspicaz (Insightful Fighting)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional haces una prueba de SAB (Perspicacia) contra el CAR (Engaño) de una criatura que veas y no esté Incapacitada. Si la superas, puedes usar Ataque Furtivo contra ella sin Ventaja (pero no con Desventaja) durante 1 minuto o hasta usarlo contra otra."
      },
      {
        n: "Mirada Firme (Steady Eye)",
        nv: 9,
        d: "Ventaja en pruebas de SAB (Percepción) o INT (Investigación) si te mueves como máximo la mitad de tu Velocidad ese turno."
      },
      {
        n: "Ojo Infalible (Unerring Eye)",
        nv: 13,
        a: "A",
        d: "Con una acción sientes ilusiones, cambiaformas y magia engañosa a 30 pies (si no estás cegado ni ensordecido). Usos = mod. SAB (mín. 1) por descanso largo."
      },
      {
        n: "Ojo para la Debilidad (Eye for Weakness)",
        nv: 17,
        d: "Mientras se aplique tu Combate Perspicaz a una criatura, tu Ataque Furtivo contra ella inflige 3d6 adicionales."
      },
    ],


    /* ── TCE ── */
    "Fantasma [TCE]": [
      {
        n: "Susurros de los Muertos (Whispers of the Dead)",
        nv: 3,
        d: "Cada vez que terminas un descanso corto o largo, ganas una competencia en una habilidad o herramienta a tu elección (una presencia fantasmal comparte su conocimiento); la pierdes al elegir otra."
      },
      {
        n: "Lamentos desde la Tumba (Wails from the Grave)",
        nv: 3,
        a: "O",
        d: "Inmediatamente después de infligir Ataque Furtivo en tu turno, eliges una segunda criatura que veas a 30 pies de la primera: tiras la mitad de tus dados de Ataque Furtivo (redondeando hacia arriba) y sufre ese daño necrótico. Usos = bonificador de competencia por descanso largo."
      },
      {
        n: "Fichas de los Difuntos (Tokens of the Departed)",
        nv: 9,
        a: "R",
        d: "Cuando una criatura muere a 30 pies de ti, usas tu Reacción para crear una ficha de alma (máx. = bonificador de competencia). Con al menos una: Ventaja en salvaciones de muerte y de CON. Puedes destruir una para usar Lamentos desde la Tumba sin gastar uso, o para preguntar una cosa al espíritu asociado."
      },
      {
        n: "Caminar Fantasmal (Ghost Walk)",
        nv: 13,
        a: "B",
        d: "Como Acción Adicional adoptas una forma espectral 10 minutos: Velocidad de vuelo 10 pies (flotas), los ataques contra ti tienen Desventaja y atraviesas criaturas y objetos como terreno difícil (1d10 de daño de fuerza si terminas tu turno dentro). Una vez por descanso largo o destruyendo una ficha de alma."
      },
      {
        n: "Amigo de la Muerte (Death's Friend)",
        nv: 17,
        d: "Lamentos desde la Tumba inflige daño necrótico a ambas criaturas. Al final de cada descanso largo, si no tienes fichas de alma, ganas una."
      },
    ],

    "Cuchillo de Alma [TCE]": [
      {
        n: "Poder Psiónico (Psionic Power)",
        nv: 3,
        a: "O",
        d: "Tienes dados de energía psiónica = 2 × tu bonificador de competencia (d6; d8 en Nv.5, d10 en Nv.11, d12 en Nv.17); recuperas todos con un descanso largo, y uno como Acción Adicional (una vez por descanso corto o largo). Conocimiento Psi-Reforzado: al fallar una prueba con una competencia, tiras un dado y lo sumas (se gasta sólo si logras el éxito). Susurros Psíquicos: con una acción, telepatía con hasta tu bonificador de competencia de criaturas que veas durante horas = un dado, a 1 milla."
      },
      {
        n: "Cuchillas Psíquicas (Psychic Blades)",
        nv: 3,
        a: "O",
        d: "Al realizar la acción Atacar, manifiestas cuchillas psíquicas (arma simple cuerpo a cuerpo, Sutil, Arrojadiza 60 pies) que infligen 1d6 + mod. del ataque de daño psíquico. Puedes hacer un segundo ataque como Acción Adicional con otra cuchilla en la mano libre (1d4)."
      },
      {
        n: "Cuchillas del Alma (Soul Blades)",
        nv: 9,
        a: "B",
        d: "Golpes Teledirigidos: si fallas con una cuchilla psíquica, tiras un dado de energía y lo sumas al ataque (se gasta si ahora impacta). Teletransporte Psíquico: como Acción Adicional lanzas una cuchilla a un espacio libre que veas a hasta 10 × el dado tirado pies (gastando un dado) y te teletransportas allí."
      },
      {
        n: "Velo Psíquico (Psychic Veil)",
        nv: 13,
        a: "A",
        d: "Con una acción te vuelves invisible junto con lo que llevas 1 hora o hasta que lo descartes (termina si infliges daño o fuerzas una salvación). Una vez por descanso largo, o gastando un dado de energía psiónica."
      },
      {
        n: "Rasgar la Mente (Rend Mind)",
        nv: 17,
        a: "O",
        d: "Al infligir Ataque Furtivo con las cuchillas psíquicas, fuerzas una salvación de SAB (CD 8 + mod. DES + comp.): si falla queda Aturdida 1 minuto (repite al final de sus turnos). Una vez por descanso largo, o gastando 3 dados de energía psiónica."
      },
    ],


    /* ── PHB 2024 ── */
    "Ladrón [PHB 2024]": [
      {
        n: "Manos Rápidas (Fast Hands)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional puedes: Juego de Manos (prueba de DES (Juego de Manos) para abrir una cerradura o desarmar una trampa con herramientas de ladrón, o robar una bolsa) o Usar un Objeto (acción Utilizar, o acción Mágica para usar un objeto mágico que la requiera)."
      },
      {
        n: "Trabajo en el Segundo Piso (Second-Story Work)",
        nv: 3,
        d: "Ganas Velocidad de trepar igual a tu Velocidad y puedes usar tu mod. DES (en lugar de FUE) para determinar la distancia de salto."
      },
      {
        n: "Sigilo Supremo (Supreme Sneak)",
        nv: 9,
        a: "O",
        d: "Nueva opción de Golpe Astuto: Ataque Sigiloso (coste 1d6): si tienes la condición Invisible por la acción Esconderse, este ataque no la termina si acabas el turno tras cobertura de tres cuartos o total."
      },
      {
        n: "Usar Dispositivos Mágicos (Use Magic Device)",
        nv: 13,
        d: "Puedes sintonizar con hasta 4 objetos mágicos. Al usar un objeto con cargas, tiras 1d6: con un 6 no gastas cargas. Puedes usar cualquier Pergamino de Conjuro con INT como característica de lanzamiento: los trucos y conjuros de Nv.1 funcionan; los de nivel superior requieren una prueba de INT (Arcanos) CD 10 + nivel del conjuro."
      },
      {
        n: "Reflejos del Ladrón (Thief's Reflexes)",
        nv: 17,
        d: "Haces dos turnos en la primera ronda de cada combate: el primero con tu iniciativa normal y el segundo con tu iniciativa −10."
      },
    ],

    "Asesino [PHB 2024]": [
      {
        n: "Asesinar (Assassinate)",
        nv: 3,
        d: "Ventaja en las tiradas de iniciativa. Durante la primera ronda de cada combate, tienes Ventaja en las tiradas de ataque contra cualquier criatura que no haya actuado; y si tu Ataque Furtivo impacta durante esa ronda, el objetivo sufre daño adicional del tipo del arma igual a tu nivel de Pícaro."
      },
      {
        n: "Herramientas de Asesino (Assassin's Tools)",
        nv: 3,
        d: "Ganas competencia con el kit de disfraz y el kit de envenenador."
      },
      {
        n: "Pericia de Infiltración (Infiltration Expertise)",
        nv: 9,
        d: "Mímica Magistral: puedes imitar sin error el habla, la escritura o ambas de otra persona si la estudiaste al menos 1 hora. Puntería Errante: Puntería Firme no reduce tu Velocidad a 0."
      },
      {
        n: "Envenenar Armas (Envenom Weapons)",
        nv: 13,
        d: "Cuando usas la opción Veneno de Golpe Astuto, el objetivo que falla la salvación sufre además 2d6 de daño de veneno, que ignora la resistencia al veneno."
      },
      {
        n: "Golpe de Muerte (Death Strike)",
        nv: 17,
        d: "Cuando impactas con tu Ataque Furtivo en la primera ronda de un combate, el objetivo debe superar una salvación de CON (CD 8 + mod. DES + comp.) o el daño del ataque se duplica."
      },
    ],

    "Tramposo Arcano [PHB 2024]": [
      {
        n: "Lanzamiento de Conjuros (Spellcasting)",
        nv: 3,
        d: "Lanzador de un tercio; INT es tu característica de conjuros (CD = 8 + comp. + mod. INT); usas un foco arcano. Trucos: Mage Hand + 2 de la lista de Mago (recomendados Mind Sliver y Minor Illusion); aprendes otro en Nv.10 y puedes cambiar uno (salvo Mage Hand) al subir de nivel de Pícaro. Preparas conjuros de Mago de nivel con espacios: 3 en Nv.3 (recomendados Charm Person, Disguise Self, Fog Cloud), hasta 13 en Nv.20, y cambias uno al subir de nivel de Pícaro."
      },
      {
        n: "Mano de Mago Prestidigitadora (Mage Hand Legerdemain)",
        nv: 3,
        a: "B",
        d: "Al lanzar Mage Hand, puedes lanzarlo como Acción Adicional y hacer invisible la mano espectral. La controlas como Acción Adicional para hacer pruebas de DES (Juego de Manos)."
      },
      {
        n: "Emboscada Mágica (Magical Ambush)",
        nv: 9,
        d: "Si tienes la condición Invisible cuando lanzas un conjuro sobre una criatura, esta tiene Desventaja en cualquier salvación contra él."
      },
      {
        n: "Embaucador Versátil (Versatile Trickster)",
        nv: 13,
        d: "Cuando usas la opción Derribo de Golpe Astuto sobre una criatura, puedes usarla también sobre otra criatura a 5 pies de tu mano espectral."
      },
      {
        n: "Ladrón de Conjuros (Spell Thief)",
        nv: 17,
        a: "R",
        d: "Después de que una criatura lance un conjuro que te tenga como objetivo o te incluya, usas tu Reacción: salvación de INT de la criatura (CD de tus conjuros); si falla, el efecto del conjuro se anula para ti y, si es de Nv.1+ y puedes lanzarlo, lo robas: durante 8 horas lo tienes preparado. Una vez por descanso largo."
      },
    ],

    "Cuchillo de Alma [PHB 2024]": [
      {
        n: "Poder Psiónico (Psionic Power)",
        nv: 3,
        a: "O",
        d: "Tienes dados de energía psiónica: 4d6 (Nv.3), 6d8 (Nv.5), 8d8 (Nv.9), 8d10 (Nv.11), 10d10 (Nv.13), 12d12 (Nv.17); recuperas 1 con un descanso corto y todos con uno largo. Conocimiento Psi-Reforzado: al fallar una prueba con una competencia, tiras un dado y lo sumas (se gasta sólo si logras el éxito). Susurros Psíquicos: con una acción Mágica, telepatía con criaturas que veas (hasta tu bonificador de competencia) durante horas = un dado, a 1 milla."
      },
      {
        n: "Cuchillas Psíquicas (Psychic Blades)",
        nv: 3,
        a: "O",
        d: "Al realizar la acción Atacar u ataque de oportunidad, manifiestas cuchillas psíquicas: 1d6 de daño psíquico + mod. (ataque principal) y 1d4 + mod. (ataque adicional con la mano libre, como Acción Adicional); Sutil, Arrojadiza (60/120 pies), maestría Vex."
      },
      {
        n: "Cuchillas del Alma (Soul Blades)",
        nv: 9,
        a: "B",
        d: "Golpes Teledirigidos: si fallas con una cuchilla psíquica, tiras un dado de energía y lo sumas a la tirada (se gasta si ahora impacta). Teletransporte Psíquico: como Acción Adicional manifiestas una cuchilla, gastas un dado y la lanzas a un espacio libre a hasta 10 × el resultado pies; te teletransportas allí y la cuchilla desaparece."
      },
      {
        n: "Velo Psíquico (Psychic Veil)",
        nv: 13,
        a: "A",
        d: "Con una acción Mágica obtienes la condición Invisible 1 hora o hasta que la descartes (termina si infliges daño o fuerzas una salvación). Una vez por descanso largo, o gastando un dado de energía psiónica."
      },
      {
        n: "Rasgar la Mente (Rend Mind)",
        nv: 17,
        a: "O",
        d: "Al infligir Ataque Furtivo, fuerzas una salvación de SAB (CD 8 + mod. DES + comp.): si falla queda Aturdida 1 minuto (repite al final de sus turnos). Una vez por descanso largo, o gastando 3 dados de energía psiónica."
      },
    ],


    /* ── THW 2024 ── */
    "Fantasma [THW 2024]": [
      {
        n: "Lamentos desde la Tumba (Wails from the Grave)",
        nv: 3,
        a: "O",
        d: "Inmediatamente después de infligir Ataque Furtivo en tu turno, eliges una segunda criatura que veas a 30 pies de la primera: tiras la mitad de tus dados de Ataque Furtivo (redondeando hacia arriba) y sufre ese daño necrótico. Usos = mod. DES (mín. 1) por descanso largo."
      },
      {
        n: "Susurros de los Muertos (Whispers of the Dead)",
        nv: 3,
        d: "Al terminar un descanso corto o largo, eliges una competencia en habilidad o herramienta que no tengas y la ganas; la pierdes al elegir otra con este rasgo."
      },
      {
        n: "Fichas de los Difuntos (Tokens of the Departed)",
        nv: 9,
        a: "R",
        d: "Tienes 2 fichas de alma (objetos Diminutos; se teletransportan a ti si se alejan más de 30 pies; hasta 3 en Nv.13 y 4 en Nv.17). Destruyendo una al infligir Ataque Furtivo usas Lamentos sin gastar uso. Con al menos una: Ventaja en salvaciones de muerte y de CON. Destruyendo una con una acción Mágica lanzas Augury o interrogas al espíritu asociado. Cuando una criatura muere a 30 pies, ganas una ficha con tu Reacción."
      },
      {
        n: "Voz de la Muerte (Voice of Death)",
        nv: 9,
        d: "Una vez por descanso corto o largo puedes lanzar Speak with Dead sin espacio, usando tus fichas de alma en lugar de un cadáver."
      },
      {
        n: "Caminar Fantasmal (Ghost Walk)",
        nv: 13,
        a: "B",
        d: "Como Acción Adicional adoptas una forma espectral 10 minutos: Velocidad de vuelo 10 pies, los ataques contra ti tienen Desventaja y atraviesas criaturas y objetos como terreno difícil (1d10 de daño de fuerza si terminas tu turno dentro). Una vez por descanso largo o destruyendo una ficha de alma."
      },
      {
        n: "Amigo de la Muerte (Death's Friend)",
        nv: 17,
        d: "Lamento de la Muerte: Lamentos desde la Tumba inflige daño necrótico a ambas criaturas. Atracción de la Muerte: al tirar iniciativa sin fichas de alma, ganas una."
      },
    ],
  },
};
