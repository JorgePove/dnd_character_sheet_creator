/* ══════════════════════════════════════════════════════════════════
   hechicero.js — Hechicero: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · PHB 2024 · XGtE · TCE · SotDQ · HoF 2024 · THW 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Origen Dracónico             [PHB 2014] / [PHB 2024]
     Magia Salvaje                [PHB 2014] / [PHB 2024]
     Magia Aberrante              [PHB 2024] / [TCE]
     Magia del Reloj              [PHB 2024] / [TCE]
     Hechicería Divina            [XGtE]
     Alma de la Sombra            [XGtE]
     Hechicería de Tormenta       [XGtE]
     Magia Lunar                  [SotDQ]
     Hechicería Spellfire         [HoF 2024]
     Hechicería de Sombra         [THW 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_HECHICERO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d6. Salvaciones: CON y CAR. Armaduras: ninguna. Armas: simples. Habilidades: elige 2 entre Arcanos, Engaño, Perspicacia, Intimidación, Persuasión y Religión. [2014: armas: dagas, dardos, hondas, bastones y ballestas ligeras]"
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador completo. CAR es tu característica de conjuros (CD = 8 + comp. + mod. CAR); usas un foco arcano. Trucos: 4 (5 en Nv.4, 6 en Nv.10). Preparas conjuros de la lista de Hechicero: 2 en Nv.1 (4, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22 en Nv.2-20); al subir de nivel puedes cambiar 1 conjuro preparado. [2014: conoces 2 conjuros en Nv.1 (3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15 en Nv.2-20) y cambias 1 al subir de nivel]"
    },
    {
      n: "Hechicería Innata (Innate Sorcery)",
      nv: 1,
      a: "B",
      d: "Como Acción Adicional liberas tu magia durante 1 minuto: la CD de salvación de tus conjuros de Hechicero aumenta en 1 y tienes Ventaja en las tiradas de ataque de los conjuros de Hechicero que lances. Usos: 2; los recuperas todos con un descanso largo. [Sólo 2024]"
    },
    {
      n: "Fuente de Magia (Font of Magic)",
      nv: 2,
      a: "B",
      d: "Tienes Puntos de Hechicería (PH) = tu nivel de Hechicero (mínimo 2 en Nv.2); los recuperas todos con un descanso largo. Como Acción Adicional puedes gastar un espacio de conjuro para ganar PH iguales a su nivel, o gastar PH para crear un espacio: nivel 1 = 2 PH, 2 = 3 PH, 3 = 5 PH, 4 = 6 PH, 5 = 7 PH (mínimo nivel de Hechicero 2, 3, 5, 7 y 9 respectivamente; el espacio desaparece al terminar un descanso largo). [2014: sin nivel mínimo para crear espacios de nivel 1-5; los PH se obtienen en Nv.2 con 2 PH]"
    },
    {
      n: "Metamagia (Metamagic)",
      nv: 2,
      d: "Aprendes 2 opciones de Metamagia (puedes cambiar 1 al subir de nivel). Sólo puedes aplicar 1 opción por conjuro, salvo Conjuro Potenciado (Empowered) y Conjuro Buscador (Seeking), que pueden sumarse a otra. • Cuidadoso (Careful, 1 PH): eliges hasta mod. CAR (mín. 1) criaturas que superan automáticamente la salvación del conjuro y [2024: no sufren daño aunque normalmente sufrirían la mitad]. • Distante (Distant, 1 PH): alcance de 5 pies o más se duplica; alcance de toque pasa a 30 pies. • Potenciado (Empowered, 1 PH): vuelves a tirar hasta mod. CAR (mín. 1) dados de daño y usas los nuevos resultados. • Prolongado (Extended, 1 PH): duración de 1 minuto o más se duplica (máx. 24 h) [2024: además Ventaja en las salvaciones de concentración de ese conjuro]. • Acentuado (Heightened, 2 PH): un objetivo tiene Desventaja en su primera salvación contra el conjuro [2014: 3 PH]. • Acelerado (Quickened, 2 PH): un conjuro de 1 acción se lanza como Acción Adicional [2024: no si ya lanzaste un conjuro de Nv.1+ este turno, ni lanzar uno de Nv.1+ después en ese turno]. • Buscador (Seeking, 1 PH): si fallas la tirada de ataque de un conjuro, repites el d20 y usas el nuevo resultado [2014: opcional de TCE]. • Sutil (Subtle, 1 PH): el conjuro no requiere componentes verbales ni somáticos. • Transmutado (Transmuted, 1 PH): cambias el tipo de daño del conjuro a ácido, frío, fuego, rayo, veneno o trueno [2014: opcional de TCE]. • Gemelo (Twinned, PH = nivel del conjuro, mín. 1): un conjuro que sólo pueda apuntar a una criatura (y no tenga alcance Personal) puede apuntar también a una segunda criatura en alcance. [2014: eliges 2 opciones en Nv.3]"
    },
    {
      n: "Subclase de Hechicero (Origen Hechiceril)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6, 14 y 18. [2014: Origen Hechiceril, se elige en Nv.1 y concede rasgos en Nv.1, 6, 14 y 18]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Restauración Hechiceril (Sorcerous Restoration)",
      nv: 5,
      d: "Al terminar un descanso corto recuperas PH gastados hasta la mitad de tu nivel de Hechicero (redondeando hacia abajo). Una vez por descanso largo. [2024; en 2014 es un rasgo de Nv.20: recuperas 4 PH con un descanso corto]"
    },
    {
      n: "Orientación Mágica (Magical Guidance)",
      nv: 5,
      d: "Cuando fallas una prueba de característica, puedes gastar 1 PH para repetir el d20 y debes usar el nuevo resultado. [2014: rasgo opcional de TCE]"
    },
    {
      n: "Hechicería Encarnada (Sorcery Incarnate)",
      nv: 7,
      d: "Si no te quedan usos de Hechicería Innata, puedes activarla gastando 2 PH. Mientras tu Hechicería Innata está activa, puedes aplicar hasta 2 opciones de Metamagia a cada conjuro que lances. [Sólo 2024]"
    },
    {
      n: "Metamagia (mejora)",
      nv: 10,
      d: "Aprendes 2 opciones de Metamagia más (total 4). [2014: 1 opción más, total 3]"
    },
    {
      n: "Metamagia (mejora)",
      nv: 17,
      d: "Aprendes 2 opciones de Metamagia más (total 6). [2014: 1 opción más, total 4]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Apoteosis Arcana (Arcane Apotheosis)",
      nv: 20,
      d: "Mientras tu Hechicería Innata está activa, puedes usar una opción de Metamagia en cada uno de tus turnos sin gastar PH. [2024; en 2014 el rasgo de Nv.20 es Restauración Hechiceril: recuperas 4 PH con un descanso corto]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Origen Dracónico [PHB 2014]": [
      {
        n: "Ancestro Dracónico (Dragon Ancestor)",
        nv: 1,
        d: "Eliges un dragón ancestro; define el tipo de daño de tus rasgos: Negro y Cobre = ácido; Azul y Bronce = rayo; Latón, Oro y Rojo = fuego; Verde = veneno; Plata y Blanco = frío. Hablas, lees y escribes Dracónico, y tu bonificador de competencia se duplica en las pruebas de CAR al interactuar con dragones."
      },
      {
        n: "Resiliencia Dracónica (Draconic Resilience)",
        nv: 1,
        d: "Tus PG máximos aumentan en 1 y en 1 más con cada nivel de Hechicero. Sin armadura, tu CA = 13 + mod. DES."
      },
      {
        n: "Afinidad Elemental (Elemental Affinity)",
        nv: 6,
        d: "Al lanzar un conjuro que cause daño del tipo de tu ancestro, sumas tu mod. CAR a una tirada de daño de ese conjuro. Además puedes gastar 1 PH para ganar resistencia a ese tipo de daño durante 1 hora."
      },
      {
        n: "Alas Dracónicas (Dragon Wings)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional haces brotar alas de dragón: Velocidad de vuelo igual a tu Velocidad actual; duran hasta que las descartes (Acción Adicional). No puedes manifestarlas con armadura salvo que esté hecha para ellas, y la ropa no preparada puede destruirse."
      },
      {
        n: "Presencia Dracónica (Draconic Presence)",
        nv: 18,
        a: "A",
        d: "Gastas 5 PH y una acción: aura de asombro o miedo (a tu elección) de 60 pies durante 1 minuto o hasta perder la concentración. Cada criatura hostil que empiece su turno en el aura debe superar una salvación de SAB o quedar hechizada (asombro) o asustada (miedo) hasta que termine el aura; quien la supere es inmune a tu aura durante 24 horas."
      },
    ],

    "Magia Salvaje [PHB 2014]": [
      {
        n: "Oleada de Magia Salvaje (Wild Magic Surge)",
        nv: 1,
        d: "Tras lanzar un conjuro de Nv.1 o superior, el DM puede hacerte tirar 1d20 (una vez por turno); con un 1 tiras en la tabla de Oleada de Magia Salvaje (d100) para obtener un efecto mágico."
      },
      {
        n: "Mareas de Caos (Tides of Chaos)",
        nv: 1,
        a: "O",
        d: "Puedes obtener Ventaja en una tirada de ataque, prueba de característica o salvación. Después debes terminar un descanso largo para volver a usarlo; si lanzas un conjuro de Nv.1+ antes de eso, el DM puede hacerte tirar en la tabla de Oleada (y recuperas el uso)."
      },
      {
        n: "Doblar la Suerte (Bend Luck)",
        nv: 6,
        a: "R",
        d: "Cuando otra criatura que veas hace una tirada de ataque, una prueba de característica o una salvación, usas tu Reacción y gastas 2 PH para tirar 1d4 y aplicarlo como bonificador o penalizador (a tu elección) a esa tirada."
      },
      {
        n: "Caos Controlado (Controlled Chaos)",
        nv: 14,
        d: "Cada vez que tiras en la tabla de Oleada de Magia Salvaje, tiras dos veces y usas cualquiera de los dos resultados."
      },
      {
        n: "Bombardeo de Conjuros (Spell Bombardment)",
        nv: 18,
        d: "Cuando tiras el daño de un conjuro y sale el máximo en cualquiera de los dados, eliges uno de esos dados, lo vuelves a tirar y sumas el resultado al daño. Sólo una vez por turno."
      },
    ],


    /* ── PHB 2024 ── */
    "Origen Dracónico [PHB 2024]": [
      {
        n: "Resiliencia Dracónica (Draconic Resilience)",
        nv: 3,
        d: "Tus PG máximos aumentan en 3 y en 1 más con cada nivel de Hechicero que ganes después. Sin armadura, tu CA base = 10 + mod. DES + mod. CAR."
      },
      {
        n: "Conjuros Dracónicos (Draconic Spells)",
        nv: 3,
        d: "Siempre tienes preparados (no cuentan en tu límite): Nv.3: Alter Self, Chromatic Orb, Command, Dragon's Breath. Nv.5: Fear, Fly. Nv.7: Arcane Eye, Charm Monster. Nv.9: Legend Lore, Summon Dragon. Puedes cambiar uno de ellos por otro conjuro de la lista de Hechicero al subir de nivel."
      },
      {
        n: "Afinidad Elemental (Elemental Affinity)",
        nv: 6,
        d: "Eliges un tipo de daño: ácido, frío, fuego, rayo o veneno. Tienes resistencia a ese tipo y, al lanzar un conjuro que cause ese daño, puedes sumar tu mod. CAR a una tirada de daño de ese conjuro."
      },
      {
        n: "Alas Dracónicas (Dragon Wings)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional haces brotar alas durante 1 hora (puedes descartarlas sin acción): Velocidad de vuelo 60 pies. Una vez usado, no puedes volver a usarlo hasta un descanso largo, salvo que gastes 3 PH para recuperarlo."
      },
      {
        n: "Compañero Dragón (Dragon Companion)",
        nv: 18,
        a: "A",
        d: "Puedes lanzar Summon Dragon sin componentes materiales. Una vez por descanso largo puedes lanzarlo sin gastar espacio de conjuro; así lanzado no requiere concentración y dura 1 minuto."
      },
    ],

    "Magia Salvaje [PHB 2024]": [
      {
        n: "Oleada de Magia Salvaje (Wild Magic Surge)",
        nv: 3,
        d: "Una vez por turno, inmediatamente después de lanzar un conjuro de Hechicero con espacio de conjuro, tiras 1d20; con un 20 tiras en la tabla de Oleada de Magia Salvaje para crear un efecto mágico. Si el efecto es un conjuro, es demasiado salvaje para ser afectado por tu Metamagia."
      },
      {
        n: "Mareas de Caos (Tides of Chaos)",
        nv: 3,
        a: "O",
        d: "Puedes obtener Ventaja en una Tirada de d20 antes de tirar el dado. Se recupera al lanzar un conjuro de Hechicero con espacio de conjuro o al terminar un descanso largo; si lanzas un conjuro de Hechicero con espacio antes de terminar un descanso largo, tiras automáticamente en la tabla de Oleada de Magia Salvaje."
      },
      {
        n: "Doblar la Suerte (Bend Luck)",
        nv: 6,
        a: "R",
        d: "Inmediatamente después de que otra criatura que veas tire el d20 de una Tirada de d20, usas tu Reacción y gastas 1 PH para tirar 1d4 y aplicar el resultado como bonificador o penalizador (a tu elección) a esa tirada."
      },
      {
        n: "Caos Controlado (Controlled Chaos)",
        nv: 14,
        d: "Cada vez que tiras en la tabla de Oleada de Magia Salvaje, tiras dos veces y usas cualquiera de los dos resultados."
      },
      {
        n: "Oleada Domada (Tamed Surge)",
        nv: 18,
        a: "O",
        d: "Inmediatamente después de lanzar un conjuro de Hechicero con espacio de conjuro, puedes crear el efecto que elijas de la tabla de Oleada de Magia Salvaje en lugar de tirar (no puedes elegir la última fila, 97-00; resuelves cualquier tirada que implique). Una vez por descanso largo."
      },
    ],

    "Magia Aberrante [PHB 2024]": [
      {
        n: "Conjuros Psiónicos (Psionic Spells)",
        nv: 3,
        d: "Siempre tienes preparados (no cuentan en tu límite): Nv.3: Arms of Hadar, Calm Emotions, Detect Thoughts, Dissonant Whispers, Mind Sliver. Nv.5: Hunger of Hadar, Sending. Nv.7: Evard's Black Tentacles, Summon Aberration. Nv.9: Rary's Telepathic Bond, Telekinesis. Puedes cambiar uno por otro conjuro de adivinación o encantamiento de la lista de Hechicero al subir de nivel."
      },
      {
        n: "Habla Telepática (Telepathic Speech)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional eliges una criatura que veas a 30 pies: podéis hablar telepáticamente mientras estéis a una distancia en millas ≤ tu mod. CAR (mín. 1 milla). Dura minutos = tu nivel de Hechicero y termina si usas el rasgo con otra criatura."
      },
      {
        n: "Hechicería Psiónica (Psionic Sorcery)",
        nv: 6,
        d: "Puedes lanzar cualquier conjuro de Nv.1+ de la tabla de Conjuros Psiónicos gastando PH iguales al nivel del conjuro en lugar de un espacio. Así lanzado no requiere componentes verbales ni somáticos, ni materiales salvo los consumidos o con coste."
      },
      {
        n: "Defensas Psíquicas (Psychic Defenses)",
        nv: 6,
        d: "Resistencia al daño psíquico y Ventaja en las salvaciones contra ser hechizado o asustado."
      },
      {
        n: "Revelación en Carne (Revelation in Flesh)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional gastas 1 o más PH para transformar tu cuerpo durante 10 minutos; cada PH concede un beneficio: Adaptación Acuática (Velocidad de nado = el doble de tu Velocidad, respiras bajo el agua); Vuelo Reluciente (Velocidad de vuelo = tu Velocidad, puedes flotar); Ver lo Invisible (ves criaturas invisibles a 60 pies); Movimiento Vermiforme (pasas por espacios de 1 pulgada sin apretarte; escapas de agarres o ataduras gastando 5 pies de movimiento)."
      },
      {
        n: "Implosión Distorsionante (Warping Implosion)",
        nv: 18,
        a: "A",
        d: "Con una acción Mágica te teletransportas hasta 120 pies a un espacio libre que veas. Cada criatura a 30 pies del espacio que dejas hace una salvación de FUE (CD de tus conjuros): si falla sufre 3d10 de daño de fuerza y es arrastrada hacia ese espacio; si la supera, la mitad del daño y no es arrastrada. Una vez por descanso largo o gastando 5 PH."
      },
    ],

    "Magia del Reloj [PHB 2024]": [
      {
        n: "Conjuros de Relojería (Clockwork Spells)",
        nv: 3,
        d: "Siempre tienes preparados (no cuentan en tu límite): Nv.3: Aid, Alarm, Lesser Restoration, Protection from Evil and Good. Nv.5: Dispel Magic, Protection from Energy. Nv.7: Freedom of Movement, Summon Construct. Nv.9: Greater Restoration, Wall of Force. Puedes cambiar uno por otro conjuro de la lista de Hechicero al subir de nivel. Además, al lanzar conjuros de Hechicero aparecen manifestaciones de orden (tabla d6: engranajes espectrales, tictac de relojes…)."
      },
      {
        n: "Restaurar el Equilibrio (Restore Balance)",
        nv: 3,
        a: "R",
        d: "Cuando una criatura que veas a 60 pies va a tirar un d20 con Ventaja o Desventaja, usas tu Reacción para impedir que la tirada se vea afectada por Ventaja y Desventaja. Usos = mod. CAR (mín. 1) por descanso largo."
      },
      {
        n: "Bastión de la Ley (Bastion of Law)",
        nv: 6,
        a: "A",
        d: "Con una acción Mágica gastas 1-5 PH para crear una protección mágica sobre ti o una criatura que veas a 30 pies: contiene tantos d8 como PH gastados; cuando la criatura protegida sufre daño, puede tirar esos dados (los gasta) y reducir el daño en el total. Dura hasta un descanso largo o hasta que vuelvas a usar el rasgo."
      },
      {
        n: "Trance de Orden (Trance of Order)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional entras 1 minuto en un trance: las tiradas de ataque contra ti no pueden tener Ventaja, y en tus Tiradas de d20 un resultado de 9 o menos cuenta como 10. Una vez por descanso largo o gastando 5 PH."
      },
      {
        n: "Cabalgata de Relojería (Clockwork Cavalcade)",
        nv: 18,
        a: "A",
        d: "Con una acción Mágica invocas espíritus del orden en un cubo de 30 pies originado en ti: restauran hasta 100 PG repartidos entre las criaturas que elijas, reparan todos los objetos dañados y terminan los conjuros de Nv.6 o inferior sobre criaturas y objetos que elijas. Una vez por descanso largo o gastando 7 PH."
      },
    ],


    /* ── XGtE ── */
    "Hechicería Divina [XGtE]": [
      {
        n: "Magia Divina (Divine Magic)",
        nv: 1,
        d: "Al aprender conjuros de Hechicero puedes elegirlos también de la lista de Clérigo. Eliges una afinidad: bien (Cure Wounds), mal (Inflict Wounds), ley (Bless), caos (Bane) o neutralidad (Protection from Evil and Good); aprendes ese conjuro además, sin que cuente en tus conjuros conocidos."
      },
      {
        n: "Favorecido por los Dioses (Favored by the Gods)",
        nv: 1,
        a: "O",
        d: "Si fallas una salvación o una tirada de ataque, puedes tirar 2d4 y sumarlo al total (puede convertir el fallo en éxito). Una vez por descanso corto o largo."
      },
      {
        n: "Curación Potenciada (Empowered Healing)",
        nv: 6,
        a: "O",
        d: "Cuando tú o un aliado a 5 pies tira dados para determinar los PG que recupera un conjuro, puedes gastar 1 PH para repetir cualquier número de esos dados una vez. Una vez por turno."
      },
      {
        n: "Alas Sobrenaturales (Otherworldly Wings)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional manifiestas un par de alas espectrales: Velocidad de vuelo 30 pies hasta que mueras, quedes Incapacitado o las descartes (Acción Adicional). Su aspecto depende de tu afinidad (celestial, demoníaca…)."
      },
      {
        n: "Recuperación Sobrenatural (Unearthly Recovery)",
        nv: 18,
        a: "B",
        d: "Como Acción Adicional, si tienes menos de la mitad de tus PG máximos, recuperas PG iguales a la mitad de tus PG máximos. Una vez por descanso largo."
      },
    ],

    "Alma de la Sombra [XGtE]": [
      {
        n: "Ojos de la Oscuridad (Eyes of the Dark)",
        nv: 1,
        d: "Visión en la oscuridad con alcance 120 pies."
      },
      {
        n: "Fuerza de la Tumba (Strength of the Grave)",
        nv: 1,
        a: "O",
        d: "Cuando un daño te reduciría a 0 PG, haces una salvación de CAR (CD 5 + daño sufrido); si la superas, quedas a 1 PG. No funciona con daño radiante ni con un golpe crítico. Una vez usado, necesitas un descanso largo."
      },
      {
        n: "Ojos de la Oscuridad: Oscuridad (Darkness)",
        nv: 3,
        d: "Aprendes Darkness (no cuenta en tus conjuros conocidos). Puedes lanzarlo gastando 2 PH o un espacio; si lo lanzas con PH, puedes ver a través de la oscuridad que crea."
      },
      {
        n: "Sabueso del Mal Agüero (Hound of Ill Omen)",
        nv: 6,
        a: "B",
        d: "Como Acción Adicional gastas 3 PH para señalar a una criatura que veas a 120 pies: aparece un perro espectral (estadísticas de lobo terrible, monstruosidad Mediana) en un espacio libre a 30 pies del objetivo, con PG temporales = la mitad de tu nivel de Hechicero. Sólo se mueve hacia el objetivo y sólo lo ataca; atraviesa criaturas y objetos (5 de daño de fuerza si termina su turno dentro). Mientras esté a 5 pies del objetivo, este tiene Desventaja en las salvaciones contra tus conjuros. Dura 5 minutos o hasta que tú o el objetivo lleguéis a 0 PG."
      },
      {
        n: "Caminar entre Sombras (Shadow Walk)",
        nv: 14,
        a: "B",
        d: "Mientras estás en luz tenue u oscuridad, como Acción Adicional te teletransportas hasta 120 pies a un espacio libre que veas también en luz tenue u oscuridad."
      },
      {
        n: "Forma Umbral (Umbral Form)",
        nv: 18,
        a: "B",
        d: "Como Acción Adicional gastas 6 PH: durante 1 minuto tienes resistencia a todo daño salvo fuerza y radiante, y atraviesas criaturas y objetos como terreno difícil (5 de daño de fuerza si terminas tu turno dentro de un objeto)."
      },
    ],

    "Hechicería de Tormenta [XGtE]": [
      {
        n: "Hablaviento (Wind Speaker)",
        nv: 1,
        d: "Hablas, lees y escribes Primordial (con sus dialectos Aquan, Auran, Ignan y Terran)."
      },
      {
        n: "Magia Tempestuosa (Tempestuous Magic)",
        nv: 1,
        a: "B",
        d: "Como Acción Adicional, inmediatamente antes o después de lanzar un conjuro de Nv.1+, ráfagas de aire te rodean y vuelas hasta 10 pies sin provocar ataques de oportunidad."
      },
      {
        n: "Corazón de la Tormenta (Heart of the Storm)",
        nv: 6,
        d: "Resistencia al daño de rayo y trueno. Al lanzar un conjuro de Nv.1+ que cause daño de rayo o trueno, una descarga afecta a criaturas de tu elección que veas a 10 pies: sufren daño de rayo o trueno (a tu elección) igual a la mitad de tu nivel de Hechicero."
      },
      {
        n: "Guía de la Tormenta (Storm Guide)",
        nv: 6,
        a: "AB",
        d: "Si llueve, con una acción detienes la lluvia en una esfera de 20 pies de radio centrada en ti (la terminas con una Acción Adicional). Si hay viento, como Acción Adicional eliges la dirección del viento en una esfera de 100 pies de radio centrada en ti hasta el final de tu siguiente turno."
      },
      {
        n: "Furia de la Tormenta (Storm's Fury)",
        nv: 14,
        a: "R",
        d: "Cuando te impacta un ataque cuerpo a cuerpo, usas tu Reacción para infligir daño de rayo al atacante igual a tu nivel de Hechicero; este debe superar una salvación de FUE (CD de tus conjuros) o es empujado hasta 20 pies."
      },
      {
        n: "Alma del Viento (Wind Soul)",
        nv: 18,
        a: "A",
        d: "Inmunidad al daño de rayo y trueno y Velocidad de vuelo mágica 60 pies. Como acción puedes reducir tu vuelo a 30 pies durante 1 hora y dar Velocidad de vuelo 30 pies durante 1 hora a hasta 3 + mod. CAR criaturas que elijas a 30 pies. Después necesitas un descanso corto o largo."
      },
    ],


    /* ── TCE ── */
    "Magia Aberrante [TCE]": [
      {
        n: "Conjuros Psiónicos (Psionic Spells)",
        nv: 1,
        d: "Aprendes conjuros adicionales que no cuentan en tus conjuros conocidos: Nv.1: Arms of Hadar, Dissonant Whispers, Mind Sliver. Nv.3: Calm Emotions, Detect Thoughts. Nv.5: Hunger of Hadar, Sending. Nv.7: Evard's Black Tentacles, Summon Aberration. Nv.9: Rary's Telepathic Bond, Telekinesis. Al ganar un nivel de Hechicero puedes cambiar uno de ellos por otro conjuro de adivinación o encantamiento de Hechicero, Brujo o Mago."
      },
      {
        n: "Habla Telepática (Telepathic Speech)",
        nv: 1,
        a: "B",
        d: "Como Acción Adicional eliges una criatura que veas a 30 pies: podéis hablar telepáticamente mientras estéis a una distancia en millas ≤ tu mod. CAR (mín. 1 milla). Dura minutos = tu nivel de Hechicero."
      },
      {
        n: "Hechicería Psiónica (Psionic Sorcery)",
        nv: 6,
        d: "Puedes lanzar cualquier conjuro psiónico de Nv.1+ gastando PH iguales a su nivel en lugar de un espacio. Así lanzado no requiere componentes verbales ni somáticos, ni materiales salvo los consumidos por el conjuro."
      },
      {
        n: "Defensas Psíquicas (Psychic Defenses)",
        nv: 6,
        d: "Resistencia al daño psíquico y Ventaja en las salvaciones contra ser hechizado o asustado."
      },
      {
        n: "Revelación en Carne (Revelation in Flesh)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional gastas 1 o más PH para transformar tu cuerpo durante 10 minutos; cada PH concede un beneficio: ver criaturas invisibles a 60 pies; Velocidad de vuelo igual a tu Velocidad (flotas); Velocidad de nado el doble de tu Velocidad y respiras bajo el agua; forma viscosa (pasas por espacios de 1 pulgada y escapas de agarres o ataduras gastando 5 pies de movimiento)."
      },
      {
        n: "Implosión Distorsionante (Warping Implosion)",
        nv: 18,
        a: "A",
        d: "Con una acción te teletransportas hasta 120 pies a un espacio libre que veas. Cada criatura a 30 pies del espacio que dejas hace una salvación de FUE (CD de tus conjuros): si falla sufre 3d10 de daño de fuerza y es arrastrada hacia ese espacio; si la supera, la mitad del daño y no es arrastrada. Una vez por descanso largo o gastando 5 PH."
      },
    ],

    "Magia del Reloj [TCE]": [
      {
        n: "Magia de Relojería (Clockwork Magic)",
        nv: 1,
        d: "Aprendes conjuros adicionales que no cuentan en tus conjuros conocidos: Nv.1: Alarm, Protection from Evil and Good. Nv.3: Aid, Lesser Restoration. Nv.5: Dispel Magic, Protection from Energy. Nv.7: Freedom of Movement, Summon Construct. Nv.9: Greater Restoration, Wall of Force. Al ganar un nivel de Hechicero puedes cambiar uno de tus conjuros conocidos por otro de abjuración o transmutación de Hechicero, Brujo o Mago."
      },
      {
        n: "Restaurar el Equilibrio (Restore Balance)",
        nv: 1,
        a: "R",
        d: "Cuando una criatura que veas a 60 pies va a tirar un d20 con Ventaja o Desventaja, usas tu Reacción para impedir que la tirada se vea afectada por ellas. Usos = tu bonificador de competencia por descanso largo."
      },
      {
        n: "Bastión de la Ley (Bastion of Law)",
        nv: 6,
        a: "A",
        d: "Con una acción gastas 1-5 PH para crear una protección sobre ti o una criatura que veas a 30 pies: contiene tantos d8 como PH gastados; cuando la criatura protegida sufre daño, puede tirar esos dados (los gasta) y reducir el daño en el total. Dura hasta un descanso largo o hasta que vuelvas a usar el rasgo."
      },
      {
        n: "Trance de Orden (Trance of Order)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional entras 1 minuto en un trance: las tiradas de ataque contra ti no pueden tener Ventaja, y en tus tiradas de ataque, pruebas de característica y salvaciones un resultado de 9 o menos en el d20 cuenta como 10. Tras usarlo, necesitas un descanso largo o gastar 5 PH."
      },
      {
        n: "Cabalgata de Relojería (Clockwork Cavalcade)",
        nv: 18,
        a: "A",
        d: "Con una acción invocas espíritus del orden en un cubo de 30 pies originado en ti: restauran hasta 100 PG repartidos entre las criaturas que elijas, reparan todos los objetos dañados y terminan los conjuros de Nv.6 o inferior sobre criaturas y objetos que elijas. Tras usarlo, necesitas un descanso largo o gastar 7 PH."
      },
    ],


    /* ── SotDQ ── */
    "Magia Lunar [SotDQ]": [
      {
        n: "Encarnación Lunar (Lunar Embodiment)",
        nv: 1,
        d: "Aprendes conjuros adicionales según la fase lunar (no cuentan en tus conjuros conocidos). Tras cada descanso largo eliges una fase (Luna Llena, Luna Nueva o Luna Creciente); una vez puedes lanzar sin espacio el conjuro de Nv.1 de esa fase. Tabla (Nv.1/3/5/7/9): Llena: Shield, Lesser Restoration, Dispel Magic, Death Ward, Rary's Telepathic Bond. Nueva: Ray of Sickness, Blindness/Deafness, Vampiric Touch, Confusion, Hold Monster. Creciente: Color Spray, Alter Self, Phantom Steed, Hallucinatory Terrain, Mislead."
      },
      {
        n: "Fuego Lunar (Moon Fire)",
        nv: 1,
        d: "Aprendes el truco Sacred Flame (no cuenta en tus trucos); puede apuntar a una criatura o a dos criaturas a 5 pies entre sí."
      },
      {
        n: "Dones Lunares (Lunar Boons)",
        nv: 6,
        d: "Al aplicar Metamagia a un conjuro de las escuelas de tu fase, reduces en 1 los PH gastados (mínimo 0). Usos = tu bonificador de competencia por descanso largo. Llena: Abjuración y Adivinación. Nueva: Encantamiento y Nigromancia. Creciente: Ilusión y Transmutación."
      },
      {
        n: "Crecer y Menguar (Waxing and Waning)",
        nv: 6,
        a: "B",
        d: "Como Acción Adicional gastas 1 PH para cambiar de fase lunar."
      },
      {
        n: "Potenciación Lunar (Lunar Empowerment)",
        nv: 14,
        d: "Beneficio según tu fase: Llena: como Acción Adicional emites luz brillante 10 pies y tenue otros 10 pies (o la apagas); tú y las criaturas que elijas tenéis Ventaja en Investigación y Percepción con luz brillante. Nueva: Ventaja en Sigilo y las tiradas de ataque contra ti tienen Desventaja mientras estás totalmente en la oscuridad. Creciente: resistencia al daño necrótico y radiante."
      },
      {
        n: "Fenómeno Lunar (Lunar Phenomenon)",
        nv: 18,
        a: "B",
        d: "Como Acción Adicional (o al cambiar de fase con Crecer y Menguar) activas el efecto de tu fase. Llena: criaturas a 30 pies hacen salvación de CON o quedan cegadas hasta el final de tu siguiente turno, y una criatura que elijas recupera 3d8 PG. Nueva: criaturas a 30 pies hacen salvación de DES o sufren 3d10 necrótico y su Velocidad pasa a 0 hasta el final de tu siguiente turno; tú quedas invisible hasta el final de tu siguiente turno o hasta que ataques o lances un conjuro. Creciente: te teletransportas hasta 60 pies a un espacio libre y puedes llevar a una criatura voluntaria a 5 pies; ambos tenéis resistencia a todo daño hasta el inicio de tu siguiente turno. Una vez por descanso largo o gastando 5 PH."
      },
    ],


    /* ── HoF 2024 ── */
    "Hechicería Spellfire [HoF 2024]": [
      {
        n: "Estallido de Fuego Hechizado (Spellfire Burst)",
        nv: 3,
        a: "O",
        d: "Una vez por turno, cuando gastas 1 o más PH durante una acción Mágica o Adicional, eliges un efecto: Llamas Fortalecedoras: una criatura a 30 pies gana PG temporales = 1d4 + mod. CAR. Fuego Radiante: una criatura a 30 pies sufre 1d4 de daño de fuego o radiante (a tu elección)."
      },
      {
        n: "Conjuros de Spellfire (Spellfire Spells)",
        nv: 3,
        d: "Siempre tienes preparados (no cuentan en tu límite): Nv.3: Cure Wounds, Guiding Bolt, Lesser Restoration, Scorching Ray. Nv.5: Aura of Vitality, Dispel Magic. Nv.7: Fire Shield, Wall of Fire. Nv.9: Flame Strike, Greater Restoration."
      },
      {
        n: "Absorber Conjuros (Absorb Spells)",
        nv: 6,
        d: "Siempre tienes preparado Counterspell. Cuando una criatura objetivo de tu Counterspell falla la salvación, recuperas 1d4 PH."
      },
      {
        n: "Fuego Hechizado Perfeccionado (Honed Spellfire)",
        nv: 14,
        d: "Estallido de Fuego Hechizado mejora: sumas tu nivel de Hechicero a los PG temporales de Llamas Fortalecedoras y el daño de Fuego Radiante pasa a 1d8."
      },
      {
        n: "Corona de Fuego Hechizado (Crown of Spellfire)",
        nv: 18,
        a: "O",
        d: "Modifica tu Hechicería Innata (una vez por descanso largo o gastando 5 PH): Fuerza Vital Ardiente: una vez por turno, cuando te impactan, gastas Dados de Golpe (hasta tu mod. CAR) para reducir el daño. Vuelo: Velocidad de vuelo 60 pies (flotas). Evitación de Conjuros: en salvaciones de DES contra conjuros, el éxito evita todo el daño y el fallo sufre la mitad."
      },
    ],


    /* ── THW 2024 ── */
    "Hechicería de Sombra [THW 2024]": [
      {
        n: "Conjuros de Sombra (Shadow Spells)",
        nv: 3,
        d: "Siempre tienes preparados (no cuentan en tu límite): Nv.3: Bane, Darkness, Inflict Wounds, Pass Without Trace. Nv.5: Hunger of Hadar, Nondetection. Nv.7: Greater Invisibility, Phantasmal Killer. Nv.9: Contagion, Creation."
      },
      {
        n: "Poder de la Sombra (Power of Shadow)",
        nv: 3,
        a: "O",
        d: "Ojos de la Oscuridad: Visión en la oscuridad 120 pies y Vista ciega 10 pies. Fuerza de la Tumba: cuando caes a 0 PG, haces una salvación de CAR (CD 5 + daño sufrido); si la superas, tus PG pasan a ser tu mod. CAR + tu nivel de Hechicero. Una vez por descanso largo."
      },
      {
        n: "Bestias de Mal Agüero (Beasts of Ill Omen)",
        nv: 6,
        a: "B",
        d: "Como Acción Adicional gastas 3 PH para lanzar Summon Beast sin espacio ni preparación (con aspecto de bestia de sombra). Mientras la bestia esté a 5 pies de un enemigo, este tiene Desventaja en las salvaciones contra tus conjuros. Puedes lanzarlo sin concentración (dura 1 minuto y termina si vuelves a lanzarlo)."
      },
      {
        n: "Caminar entre Sombras (Shadow Walk)",
        nv: 14,
        a: "B",
        d: "Mientras estás en luz tenue u oscuridad, como Acción Adicional te teletransportas hasta 120 pies a un espacio libre que veas también en luz tenue u oscuridad."
      },
      {
        n: "Forma Umbral (Umbral Form)",
        nv: 18,
        a: "B",
        d: "Mientras tu Hechicería Innata está activa, adoptas Movimiento Incorpóreo (atraviesas criaturas y objetos como terreno difícil; 1d10 de daño de fuerza si terminas tu turno dentro) y tienes resistencia a todo daño salvo fuerza y radiante. Una vez por descanso largo o gastando 6 PH."
      },
    ],
  },
};
