/* ══════════════════════════════════════════════════════════════════
   paladin.js — Paladín: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · SCAG · XGtE · TCE · DMG · MOoT/TCE · PHB 2024 · HoF 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Juramento de Devoción        [PHB 2014] / [PHB 2024]
     Juramento de los Ancestros   [PHB 2014] / [PHB 2024]
     Juramento de Venganza        [PHB 2014] / [PHB 2024]
     Juramento de la Corona       [SCAG]
     Juramento de Conquista       [XGtE]
     Juramento de Redención       [XGtE]
     Juramento de los Vigilantes  [TCE]
     Paladín Apóstata             [DMG]
     Juramento de Gloria          [MOoT/TCE] / [PHB 2024]
     Juramento de los Nobles Genios [HoF 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_PALADIN = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d10. Salvaciones: SAB y CAR. Armaduras: ligeras, medias, pesadas y escudos. Armas: simples y marciales. Habilidades: elige 2 entre Atletismo, Perspicacia, Intimidación, Medicina, Persuasión y Religión."
    },
    {
      n: "Imponer Manos (Lay On Hands)",
      nv: 1,
      a: "B",
      d: "Tienes una reserva de poder curativo = 5 × tu nivel de Paladín (se rellena con un descanso largo). Como Acción Adicional tocas a una criatura y le restauras PG a gastar de la reserva, o gastas 5 PG de la reserva para terminar su condición de Envenenado. [2014: es una acción; por cada 5 puntos de la reserva curas una enfermedad o neutralizas un veneno]"
    },
    {
      n: "Sentido Divino (Divine Sense)",
      nv: 1,
      a: "B",
      d: "Como Acción Adicional detectas hasta el final de tu siguiente turno la ubicación de celestiales, infernales y no-muertos a 60 pies y sabes su tipo, y también lugares consagrados o profanados. [2024: es una opción de Canalizar Divinidad (Nv.3) y gasta un uso; 2014: es una acción con 1 + mod. CAR usos por descanso largo, desde Nv.1]"
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador mitad. CAR es tu característica de conjuros (CD = 8 + comp. + mod. CAR); usas un símbolo sagrado. Preparas conjuros de la lista de Paladín: 2 en Nv.1 (3, 4, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15 en Nv.2-20). Espacios como lanzador mitad (Nv.1: 2 espacios de nivel 1). [2014: lanzas conjuros desde Nv.2; preparas mod. CAR + la mitad de tu nivel de Paladín (redondeado hacia abajo, mín. 1); sin trucos]"
    },
    {
      n: "Maestría con Armas (Weapon Mastery)",
      nv: 1,
      d: "Puedes usar las propiedades de maestría de 2 tipos de armas simples o marciales a tu elección; puedes cambiar uno tras un descanso largo. [Sólo 2024]"
    },
    {
      n: "Estilo de Combate (Fighting Style)",
      nv: 2,
      d: "Ganas una dote de Estilo de Combate (p. ej. Defensa, Duelo, Armas Grandes, Protección) o Guerrero Bendecido (Blessed Warrior: 2 trucos de Clérigo). [2014: eliges un estilo: Defensa, Duelo, Combate con Armas Grandes o Protección; opciones de TCE: Guerrero Bendecido, Combate a Ciegas, Interceptación, Lucha con Armas Arrojadizas, Lucha Sin Armas, Superior…]"
    },
    {
      n: "Golpe Divino del Paladín (Paladin's Smite)",
      nv: 2,
      a: "B",
      d: "Siempre tienes preparado el conjuro Divine Smite (Acción Adicional, tras impactar con un arma cuerpo a cuerpo: 2d8 radiante +1d8 por nivel de espacio superior a 1, +1d8 contra infernales y no-muertos). Además puedes lanzarlo una vez sin gastar espacio (recuperas el uso con un descanso largo). [2014: Golpe Divino: tras impactar con un arma cuerpo a cuerpo gastas un espacio de conjuro (sin acción) para infligir 2d8 radiante (+1d8 por nivel superior a 1, máx. 5d8; +1d8 contra infernales y no-muertos)]"
    },
    {
      n: "Canalizar Divinidad (Channel Divinity)",
      nv: 3,
      d: "Tienes 2 usos de Canalizar Divinidad (3 en Nv.11): recuperas 1 con un descanso corto y todos con uno largo. Con Sentido Divino y las opciones de tu subclase. [2014: 1 uso que recuperas con un descanso corto o largo; opcional de TCE: Aprovechar el Poder Divino]"
    },
    {
      n: "Subclase de Paladín (Juramento Sagrado)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 7, 15 y 20. [2014: Juramento Sagrado, mismos niveles]"
    },
    {
      n: "Salud Divina (Divine Health)",
      nv: 3,
      d: "La magia divina que fluye en ti te hace inmune a las enfermedades. [Sólo 2014]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Ataque Extra (Extra Attack)",
      nv: 5,
      a: "A",
      d: "Atacas dos veces al realizar la acción Atacar."
    },
    {
      n: "Montura Fiel (Faithful Steed)",
      nv: 5,
      d: "Siempre tienes preparado el conjuro Find Steed y puedes lanzarlo una vez sin gastar espacio (recuperas el uso con un descanso largo). [Sólo 2024]"
    },
    {
      n: "Aura de Protección (Aura of Protection)",
      nv: 6,
      d: "Tú y los aliados en tu aura (emanación de 10 pies; 30 pies en Nv.18) sumáis tu mod. CAR (mín. +1) a todas las salvaciones. Deja de funcionar si quedas Incapacitado."
    },
    {
      n: "Expulsar a los Enemigos (Abjure Foes)",
      nv: 9,
      a: "A",
      d: "Con una acción Mágica gastas 1 uso de Canalizar Divinidad y presentas tu símbolo sagrado: hasta mod. CAR (mín. 1) criaturas que veas a 60 pies hacen una salvación de SAB o quedan Asustadas durante 1 minuto o hasta que sufran daño; mientras estén asustadas así, en su turno sólo pueden mover, usar una acción o una Acción Adicional. [Sólo 2024]"
    },
    {
      n: "Aura de Valentía (Aura of Courage)",
      nv: 10,
      d: "Tú y los aliados en tu aura de protección sois inmunes a la condición de Asustado mientras estés consciente."
    },
    {
      n: "Golpes Radiantes (Radiant Strikes)",
      nv: 11,
      d: "Cuando impactas con un arma cuerpo a cuerpo o un golpe sin arma, infliges 1d8 de daño radiante adicional. [2014: Golpe Divino Mejorado: 1d8 radiante extra en cada impacto cuerpo a cuerpo]"
    },
    {
      n: "Toque Restaurador (Restoring Touch)",
      nv: 14,
      d: "Al usar Imponer Manos, puedes quitar también una o más de estas condiciones por 5 PG cada una de la reserva: Cegado, Hechizado, Ensordecido, Asustado, Paralizado o Aturdido. [2014: Toque Purificador: con una acción terminas un conjuro sobre ti o una criatura voluntaria que toques; mod. CAR (mín. 1) usos por descanso largo]"
    },
    {
      n: "Expansión del Aura (Aura Expansion)",
      nv: 18,
      d: "El radio de tus auras de Paladín (Protección, Valentía y las de subclase) aumenta a 30 pies."
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Juramento de Devoción [PHB 2014]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Protection from Evil and Good, Sanctuary. Nv.5: Lesser Restoration, Zone of Truth. Nv.9: Beacon of Hope, Dispel Magic. Nv.13: Freedom of Movement, Guardian of Faith. Nv.17: Commune, Flame Strike."
      },
      {
        n: "Canalizar Divinidad: Arma Sagrada (Sacred Weapon)",
        nv: 3,
        a: "A",
        d: "Con una acción imbuyes un arma que lleves durante 1 minuto: sumas tu mod. CAR (mín. +1) a las tiradas de ataque con ella, emite luz brillante 20 pies y tenue otros 20 pies, y es mágica si no lo era. Termina si la sueltas o quedas inconsciente."
      },
      {
        n: "Canalizar Divinidad: Expulsar al Impío (Turn the Unholy)",
        nv: 3,
        a: "A",
        d: "Con una acción presentas tu símbolo sagrado: infernales y no-muertos a 30 pies que te oigan hacen una salvación de SAB o quedan expulsados 1 minuto o hasta sufrir daño (se alejan, no pueden acercarse a 30 pies, ni usar Reacciones; sólo Correr o escapar)."
      },
      {
        n: "Aura de Devoción (Aura of Devotion)",
        nv: 7,
        d: "Tú y los aliados a 10 pies no podéis ser hechizados mientras estés consciente (30 pies en Nv.18)."
      },
      {
        n: "Pureza de Espíritu (Purity of Spirit)",
        nv: 15,
        d: "Siempre estás bajo el efecto de Protection from Evil and Good."
      },
      {
        n: "Nimbo Sagrado (Holy Nimbus)",
        nv: 20,
        a: "A",
        d: "Con una acción emanas un aura de luz solar 1 minuto: luz brillante 30 pies y tenue 30 pies más; los enemigos que empiecen su turno en la luz brillante sufren 10 de daño radiante; tienes Ventaja en salvaciones contra conjuros de infernales y no-muertos. Una vez por descanso largo."
      },
    ],

    "Juramento de los Ancestros [PHB 2014]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Ensnaring Strike, Speak with Animals. Nv.5: Moonbeam, Misty Step. Nv.9: Plant Growth, Protection from Energy. Nv.13: Ice Storm, Stoneskin. Nv.17: Commune with Nature, Tree Stride."
      },
      {
        n: "Canalizar Divinidad: Ira de la Naturaleza (Nature's Wrath)",
        nv: 3,
        a: "A",
        d: "Con una acción, enredaderas espectrales sujetan a una criatura a 10 pies: salvación de FUE o DES (a su elección) o queda Apresada; repite la salvación al final de sus turnos."
      },
      {
        n: "Canalizar Divinidad: Expulsar a los Infieles (Turn the Faithless)",
        nv: 3,
        a: "A",
        d: "Con una acción presentas tu símbolo sagrado: feéricos e infernales a 30 pies que te oigan hacen una salvación de SAB o quedan expulsados 1 minuto o hasta sufrir daño; si la verdadera forma de una criatura está oculta por una ilusión o un cambio de forma, se revela mientras esté expulsada."
      },
      {
        n: "Aura de Protección Ancestral (Aura of Warding)",
        nv: 7,
        d: "Tú y los aliados a 10 pies tenéis resistencia al daño de conjuros (30 pies en Nv.18)."
      },
      {
        n: "Centinela Inmortal (Undying Sentinel)",
        nv: 15,
        a: "O",
        d: "Cuando caes a 0 PG sin morir, puedes quedar a 1 PG en su lugar. Una vez por descanso largo. Además no sufres los efectos de la edad ni puedes envejecer por magia."
      },
      {
        n: "Campeón Ancestral (Elder Champion)",
        nv: 20,
        a: "A",
        d: "Con una acción te transformas 1 minuto: recuperas 10 PG al inicio de cada uno de tus turnos; lanzas conjuros de Paladín de 1 acción como Acción Adicional; los enemigos a 10 pies tienen Desventaja en las salvaciones contra tus conjuros y opciones de Canalizar Divinidad. Una vez por descanso largo."
      },
    ],

    "Juramento de Venganza [PHB 2014]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Bane, Hunter's Mark. Nv.5: Hold Person, Misty Step. Nv.9: Haste, Protection from Energy. Nv.13: Banishment, Dimension Door. Nv.17: Hold Monster, Scrying."
      },
      {
        n: "Canalizar Divinidad: Abjurar al Enemigo (Abjure Enemy)",
        nv: 3,
        a: "A",
        d: "Con una acción presentas tu símbolo sagrado contra una criatura a 60 pies: salvación de SAB (Desventaja si es infernal o no-muerto); si falla queda Asustada 1 minuto o hasta sufrir daño y su Velocidad es 0; si la supera, su Velocidad se reduce a la mitad durante 1 minuto o hasta sufrir daño."
      },
      {
        n: "Canalizar Divinidad: Voto de Enemistad (Vow of Enmity)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional eliges a una criatura a 10 pies: tienes Ventaja en las tiradas de ataque contra ella durante 1 minuto o hasta que caiga a 0 PG o quede inconsciente."
      },
      {
        n: "Vengador Implacable (Relentless Avenger)",
        nv: 7,
        d: "Cuando impactas con un ataque de oportunidad, puedes moverte hasta la mitad de tu Velocidad inmediatamente después, como parte de la misma Reacción (sin provocar ataques de oportunidad)."
      },
      {
        n: "Alma de Venganza (Soul of Vengeance)",
        nv: 15,
        a: "R",
        d: "Cuando una criatura bajo tu Voto de Enemistad ataca, usas tu Reacción para hacerle un ataque cuerpo a cuerpo con arma si está a tu alcance."
      },
      {
        n: "Ángel Vengador (Avenging Angel)",
        nv: 20,
        a: "A",
        d: "Con una acción te transformas 1 hora: Velocidad de vuelo 60 pies y un aura de amenaza de 30 pies; los enemigos que entren o empiecen su turno en ella hacen una salvación de SAB o quedan Asustados 1 minuto o hasta sufrir daño; las tiradas de ataque contra criaturas Asustadas por ti tienen Ventaja. Una vez por descanso largo."
      },
    ],


    /* ── SCAG ── */
    "Juramento de la Corona [SCAG]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Command, Compelled Duel. Nv.5: Warding Bond, Zone of Truth. Nv.9: Aura of Vitality, Spirit Guardians. Nv.13: Banishment, Guardian of Faith. Nv.17: Circle of Power, Geas."
      },
      {
        n: "Canalizar Divinidad: Desafío del Campeón (Champion Challenge)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional, las criaturas que elijas a 30 pies hacen una salvación de SAB o no pueden alejarse voluntariamente más de 30 pies de ti (termina si quedas Incapacitado o a más de 30 pies)."
      },
      {
        n: "Canalizar Divinidad: Girar la Marea (Turn the Tide)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional, cada criatura que elijas a 30 pies con menos de la mitad de sus PG recupera 1d6 + mod. CAR (mín. 1) PG."
      },
      {
        n: "Lealtad Divina (Divine Allegiance)",
        nv: 7,
        a: "R",
        d: "Cuando una criatura a 5 pies de ti sufre daño, usas tu Reacción para sufrir tú ese daño en su lugar."
      },
      {
        n: "Santo Inquebrantable (Unyielding Saint)",
        nv: 15,
        d: "Ventaja en salvaciones contra estar paralizado o aturdido."
      },
      {
        n: "Campeón Exaltado (Exalted Champion)",
        nv: 20,
        a: "A",
        d: "Con una acción te vuelves un campeón 1 hora: resistencia al daño contundente, perforante y cortante no mágico; tú y tus aliados a 30 pies tenéis Ventaja en las salvaciones contra muerte y en salvaciones de SAB. Una vez por descanso largo."
      },
    ],


    /* ── XGtE ── */
    "Juramento de Conquista [XGtE]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Armor of Agathys, Command. Nv.5: Hold Person, Spiritual Weapon. Nv.9: Bestow Curse, Fear. Nv.13: Dominate Beast, Stoneskin. Nv.17: Cloudkill, Dominate Person."
      },
      {
        n: "Canalizar Divinidad: Presencia Conquistadora (Conquering Presence)",
        nv: 3,
        a: "A",
        d: "Con una acción, cada criatura que elijas a 30 pies hace una salvación de SAB o queda Asustada de ti 1 minuto (repite la salvación al final de cada uno de sus turnos)."
      },
      {
        n: "Canalizar Divinidad: Golpe Guiado (Guided Strike)",
        nv: 3,
        a: "O",
        d: "Al hacer una tirada de ataque, ganas +10 a ella (decides tras ver la tirada, antes de saber si impacta)."
      },
      {
        n: "Aura de Conquista (Aura of Conquest)",
        nv: 7,
        d: "Aura de 10 pies (30 pies en Nv.18): las criaturas Asustadas de ti en el aura tienen Velocidad 0 y sufren daño psíquico = la mitad de tu nivel de Paladín al inicio de sus turnos."
      },
      {
        n: "Reprimenda Desdeñosa (Scornful Rebuke)",
        nv: 15,
        d: "Cuando una criatura te impacta con un ataque, sufre daño psíquico = mod. CAR (mín. 1), si no estás Incapacitado."
      },
      {
        n: "Conquistador Invencible (Invincible Conqueror)",
        nv: 20,
        a: "A",
        d: "Con una acción te conviertes 1 minuto en un avatar de la conquista: resistencia a todo daño; un ataque adicional al realizar la acción Atacar; tus ataques con arma son críticos con 19-20. Una vez por descanso largo."
      },
    ],

    "Juramento de Redención [XGtE]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Sanctuary, Sleep. Nv.5: Calm Emotions, Hold Person. Nv.9: Counterspell, Hypnotic Pattern. Nv.13: Otiluke's Resilient Sphere, Stoneskin. Nv.17: Hold Monster, Wall of Force."
      },
      {
        n: "Canalizar Divinidad: Emisario de la Paz (Emissary of Peace)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional ganas +5 a las pruebas de CAR (Persuasión) durante 10 minutos."
      },
      {
        n: "Canalizar Divinidad: Reprender al Violento (Rebuke the Violent)",
        nv: 3,
        a: "R",
        d: "Cuando una criatura a 30 pies que veas inflige daño con un ataque a otra criatura que no seas tú, usas tu Reacción: el atacante hace una salvación de SAB o sufre daño radiante igual al daño que infligió (la mitad si la supera)."
      },
      {
        n: "Aura del Guardián (Aura of the Guardian)",
        nv: 7,
        a: "R",
        d: "Cuando una criatura a 10 pies de ti sufre daño, usas tu Reacción para sufrir tú ese daño en su lugar (no se reduce por resistencia o inmunidad). Radio 30 pies en Nv.18."
      },
      {
        n: "Espíritu Protector (Protective Spirit)",
        nv: 15,
        d: "Al final de tu turno, si estás por debajo de la mitad de tus PG y no Incapacitado, recuperas 1d6 + la mitad de tu nivel de Paladín en PG."
      },
      {
        n: "Emisario de la Redención (Emissary of Redemption)",
        nv: 20,
        d: "Tienes resistencia a todo daño infligido por otras criaturas; además, cuando una criatura te daña, sufre daño radiante igual a la mitad del daño que sufres. El rasgo termina si atacas o infliges daño con un conjuro a otra criatura."
      },
    ],


    /* ── TCE ── */
    "Juramento de los Vigilantes [TCE]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Alarm, Detect Magic. Nv.5: Moonbeam, See Invisibility. Nv.9: Counterspell, Nondetection. Nv.13: Aura of Purity, Banishment. Nv.17: Hold Monster, Scrying."
      },
      {
        n: "Canalizar Divinidad: Voluntad del Vigilante (Watcher's Will)",
        nv: 3,
        a: "A",
        d: "Con una acción eliges hasta mod. CAR criaturas (incluido tú) a 30 pies: durante 1 minuto tienen Ventaja en salvaciones de INT, SAB y CAR."
      },
      {
        n: "Canalizar Divinidad: Abjurar a los Extraplanares (Abjure the Extraplanar)",
        nv: 3,
        a: "A",
        d: "Con una acción presentas tu símbolo sagrado: aberraciones, celestiales, elementales, feéricos e infernales a 30 pies que te oigan hacen una salvación de SAB o quedan expulsados 1 minuto o hasta sufrir daño."
      },
      {
        n: "Aura del Centinela (Aura of the Sentinel)",
        nv: 7,
        d: "Tú y las criaturas que elijas a 10 pies sumáis tu bonificador de competencia a la iniciativa (30 pies en Nv.18)."
      },
      {
        n: "Reprimenda Vigilante (Vigilant Rebuke)",
        nv: 15,
        a: "R",
        d: "Cuando tú o una criatura que veas a 30 pies superáis una salvación de INT, SAB o CAR, usas tu Reacción para infligir 2d8 + mod. CAR de daño de fuerza a la criatura que la provocó."
      },
      {
        n: "Baluarte Mortal (Mortal Bulwark)",
        nv: 20,
        a: "B",
        d: "Como Acción Adicional ganas 1 minuto: Visión verdadera 120 pies; Ventaja en ataques contra aberraciones, celestiales, elementales, feéricos e infernales; y al impactar a uno puedes forzar una salvación de CAR o es desterrado a su plano natal. Una vez por descanso largo o gastando un espacio de Nv.5."
      },
    ],


    /* ── DMG ── */
    "Paladín Apóstata [DMG]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Hellish Rebuke, Inflict Wounds. Nv.5: Crown of Madness, Darkness. Nv.9: Animate Dead, Bestow Curse. Nv.13: Blight, Confusion. Nv.17: Contagion, Dominate Person."
      },
      {
        n: "Canalizar Divinidad: Controlar No-Muertos (Control Undead)",
        nv: 3,
        a: "A",
        d: "Con una acción eliges un no-muerto a 30 pies: salvación de SAB (inmune si su CR ≥ tu nivel de Paladín); si falla, te obedece 24 horas."
      },
      {
        n: "Canalizar Divinidad: Aspecto Pavoroso (Dreadful Aspect)",
        nv: 3,
        a: "A",
        d: "Con una acción, cada criatura que elijas a 30 pies que pueda verte hace una salvación de SAB o queda Asustada 1 minuto (puede repetir la salvación si termina su turno a más de 30 pies)."
      },
      {
        n: "Aura de Odio (Aura of Hate)",
        nv: 7,
        d: "Tú y los infernales y no-muertos a 10 pies sumáis tu mod. CAR (mín. +1) al daño de armas cuerpo a cuerpo (30 pies en Nv.18). Sólo un aura de este tipo por criatura."
      },
      {
        n: "Resistencia Sobrenatural (Supernatural Resistance)",
        nv: 15,
        d: "Resistencia al daño contundente, perforante y cortante de armas no mágicas."
      },
      {
        n: "Señor Tenebroso (Dread Lord)",
        nv: 20,
        a: "AB",
        d: "Con una acción te rodeas de un aura de pesadumbre 1 minuto (30 pies): la luz brillante pasa a tenue; los enemigos Asustados que empiecen su turno en ella sufren 4d10 de daño psíquico; los ataques contra ti y las criaturas que elijas en el aura tienen Desventaja. Mientras dure, como Acción Adicional las sombras atacan: ataque cuerpo a cuerpo de conjuro contra una criatura del aura, 3d10 + mod. CAR de daño necrótico. Una vez por descanso largo."
      },
    ],


    /* ── MOoT/TCE ── */
    "Juramento de Gloria [MOoT/TCE]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Guiding Bolt, Heroism. Nv.5: Enhance Ability, Magic Weapon. Nv.9: Haste, Protection from Energy. Nv.13: Compulsion, Freedom of Movement. Nv.17: Commune, Flame Strike."
      },
      {
        n: "Canalizar Divinidad: Atleta sin Igual (Peerless Athlete)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional, durante 10 minutos tienes Ventaja en Atletismo (FUE) y Acrobacias (DES), tu capacidad de carga se duplica y tus saltos de longitud y altura aumentan 10 pies."
      },
      {
        n: "Canalizar Divinidad: Golpe Inspirador (Inspiring Smite)",
        nv: 3,
        a: "O",
        d: "Tras lanzar Golpe Divino, usas Canalizar Divinidad para repartir 2d8 + tu nivel de Paladín PG temporales entre criaturas a 30 pies (a tu elección)."
      },
      {
        n: "Aura de Celeridad (Aura of Alacrity)",
        nv: 7,
        d: "Tu Velocidad aumenta 10 pies. Los aliados que empiezan su turno en tu aura (5 pies; 10 pies en Nv.18) ganan +10 pies de Velocidad hasta el final de ese turno."
      },
      {
        n: "Defensa Gloriosa (Glorious Defense)",
        nv: 15,
        a: "R",
        d: "Cuando tú o un aliado a 10 pies sois impactados, usas tu Reacción para dar +mod. CAR (mín. +1) a la CA contra ese ataque; si falla, puedes hacer un ataque con arma contra el atacante. Usos = mod. CAR (mín. 1) por descanso largo."
      },
      {
        n: "Leyenda Viviente (Living Legend)",
        nv: 20,
        a: "B",
        d: "Como Acción Adicional ganas 1 minuto: Ventaja en pruebas de CAR; una vez por turno, un ataque con arma fallado pasa a impactar; y puedes usar tu Reacción para repetir una salvación fallida. Una vez por descanso largo o gastando un espacio de Nv.5."
      },
    ],


    /* ── PHB 2024 ── */
    "Juramento de Devoción [PHB 2024]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Protection from Evil and Good, Shield of Faith. Nv.5: Aid, Zone of Truth. Nv.9: Beacon of Hope, Dispel Magic. Nv.13: Freedom of Movement, Guardian of Faith. Nv.17: Commune, Flame Strike."
      },
      {
        n: "Arma Sagrada (Sacred Weapon)",
        nv: 3,
        a: "O",
        d: "Al realizar la acción Atacar, puedes gastar 1 uso de Canalizar Divinidad para imbuir un arma cuerpo a cuerpo que lleves durante 10 minutos: sumas tu mod. CAR (mín. +1) a las tiradas de ataque con ella; sus impactos infligen daño normal o radiante (a tu elección); emite luz brillante 20 pies y tenue otros 20 pies."
      },
      {
        n: "Aura de Devoción (Aura of Devotion)",
        nv: 7,
        d: "Tú y tus aliados sois inmunes a la condición de Hechizado mientras estéis en tu aura de protección."
      },
      {
        n: "Golpe de Protección (Smite of Protection)",
        nv: 15,
        d: "Cuando lanzas Divine Smite, tú y tus aliados tenéis Cobertura media en tu aura de protección hasta el inicio de tu siguiente turno."
      },
      {
        n: "Nimbo Sagrado (Holy Nimbus)",
        nv: 20,
        a: "B",
        d: "Como Acción Adicional imbuyes tu aura de protección 10 minutos: Protección Sagrada (Ventaja en salvaciones contra infernales y no-muertos); Daño Radiante (los enemigos que empiezan su turno en el aura sufren daño radiante = mod. CAR + bonificador de competencia); Luz Solar (el aura se llena de luz brillante solar). Una vez por descanso largo o gastando un espacio de Nv.5."
      },
    ],

    "Juramento de los Ancestros [PHB 2024]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Ensnaring Strike, Speak with Animals. Nv.5: Misty Step, Moonbeam. Nv.9: Plant Growth, Protection from Energy. Nv.13: Ice Storm, Stoneskin. Nv.17: Commune with Nature, Tree Stride."
      },
      {
        n: "Ira de la Naturaleza (Nature's Wrath)",
        nv: 3,
        a: "A",
        d: "Con una acción Mágica gastas 1 uso de Canalizar Divinidad: cada criatura que elijas a 15 pies hace una salvación de FUE o queda Apresada 1 minuto (repite la salvación al final de sus turnos)."
      },
      {
        n: "Aura de Protección Ancestral (Aura of Warding)",
        nv: 7,
        d: "Tú y tus aliados tenéis resistencia al daño necrótico, psíquico y radiante mientras estéis en tu aura de protección."
      },
      {
        n: "Centinela Inmortal (Undying Sentinel)",
        nv: 15,
        a: "O",
        d: "Cuando caes a 0 PG sin morir, quedas a 1 PG y recuperas PG = 3 × tu nivel de Paladín. Una vez por descanso largo. Además no puedes envejecer por magia ni muestras envejecimiento."
      },
      {
        n: "Campeón Ancestral (Elder Champion)",
        nv: 20,
        a: "B",
        d: "Como Acción Adicional potencias tu aura de protección 1 minuto: Disminuir Desafío (los enemigos tienen Desventaja en salvaciones contra tus conjuros y Canalizar Divinidad); Regeneración (recuperas 10 PG al inicio de tu turno); Conjuros Veloces (lanzas conjuros de acción con Acción Adicional). Una vez por descanso largo o gastando un espacio de Nv.5."
      },
    ],

    "Juramento de Venganza [PHB 2024]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Bane, Hunter's Mark. Nv.5: Hold Person, Misty Step. Nv.9: Haste, Protection from Energy. Nv.13: Banishment, Dimension Door. Nv.17: Hold Monster, Scrying."
      },
      {
        n: "Voto de Enemistad (Vow of Enmity)",
        nv: 3,
        a: "O",
        d: "Al realizar la acción Atacar, puedes gastar 1 uso de Canalizar Divinidad para pronunciar un voto contra una criatura que veas a 30 pies: Ventaja en las tiradas de ataque contra ella durante 1 minuto o hasta que lo uses de nuevo. Si cae a 0 PG, transfieres el voto (sin acción) a otra criatura a 30 pies."
      },
      {
        n: "Vengador Implacable (Relentless Avenger)",
        nv: 7,
        d: "Cuando impactas con un ataque de oportunidad, puedes reducir su Velocidad a 0 hasta el final del turno y moverte hasta la mitad de tu Velocidad como parte de la misma Reacción (sin provocar ataques de oportunidad)."
      },
      {
        n: "Alma de Venganza (Soul of Vengeance)",
        nv: 15,
        a: "R",
        d: "Inmediatamente después de que una criatura bajo tu Voto de Enemistad impacte o falle con una tirada de ataque, usas tu Reacción para hacerle un ataque cuerpo a cuerpo si está a tu alcance."
      },
      {
        n: "Ángel Vengador (Avenging Angel)",
        nv: 20,
        a: "B",
        d: "Como Acción Adicional te transformas 10 minutos: Vuelo (Velocidad de vuelo 60 pies, flotas) y Aura Aterradora (los enemigos que empiezan su turno en tu aura de protección hacen una salvación de SAB o quedan Asustados 1 minuto o hasta sufrir daño; las tiradas de ataque contra criaturas Asustadas tienen Ventaja). Una vez por descanso largo o gastando un espacio de Nv.5."
      },
    ],

    "Juramento de Gloria [PHB 2024]": [
      {
        n: "Conjuros de Juramento (Oath Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Guiding Bolt, Heroism. Nv.5: Enhance Ability, Magic Weapon. Nv.9: Haste, Protection from Energy. Nv.13: Compulsion, Freedom of Movement. Nv.17: Legend Lore, Yolande's Regal Presence."
      },
      {
        n: "Golpe Inspirador (Inspiring Smite)",
        nv: 3,
        a: "O",
        d: "Tras lanzar Divine Smite, puedes gastar 1 uso de Canalizar Divinidad para repartir PG temporales entre criaturas a 30 pies (a tu elección): total = 2d8 + tu nivel de Paladín."
      },
      {
        n: "Atleta sin Igual (Peerless Athlete)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas 1 uso de Canalizar Divinidad: durante 1 hora tienes Ventaja en Atletismo (FUE) y Acrobacias (DES) y tus saltos de longitud y altura aumentan 10 pies."
      },
      {
        n: "Aura de Celeridad (Aura of Alacrity)",
        nv: 7,
        d: "Tu Velocidad aumenta 10 pies. Cuando un aliado entra en tu aura de protección o empieza su turno en ella, su Velocidad aumenta 10 pies hasta el final de su siguiente turno."
      },
      {
        n: "Defensa Gloriosa (Glorious Defense)",
        nv: 15,
        a: "R",
        d: "Cuando una criatura a 10 pies de ti es impactada por un ataque, usas tu Reacción para dar un bonificador a su CA = mod. CAR (mín. +1) contra ese ataque; si falla, puedes hacer un ataque con arma contra el atacante. Usos = mod. CAR (mín. 1) por descanso largo."
      },
      {
        n: "Leyenda Viviente (Living Legend)",
        nv: 20,
        a: "B",
        d: "Como Acción Adicional ganas 10 minutos: Ventaja en todas las pruebas de CAR; puedes repetir una salvación fallida con tu Reacción; y una vez por turno un ataque con arma fallado pasa a impactar. Una vez por descanso largo o gastando un espacio de Nv.5."
      },
    ],


    /* ── HoF 2024 ── */
    "Juramento de los Nobles Genios [HoF 2024]": [
      {
        n: "Conjuros de Genio (Genie Spells)",
        nv: 3,
        d: "Siempre tienes preparados: Nv.3: Chromatic Orb, Elementalism, Thunderous Smite. Nv.5: Mirror Image, Phantasmal Force. Nv.9: Fly, Gaseous Form. Nv.13: Conjure Minor Elementals, Summon Elemental. Nv.17: Banishing Smite, Contact Other Plane."
      },
      {
        n: "Golpe Elemental (Elemental Smite)",
        nv: 3,
        a: "O",
        d: "Tras lanzar Divine Smite, puedes gastar 1 uso de Canalizar Divinidad para uno de estos efectos: Aplastamiento del Dao: el objetivo queda Agarrado (CD de escape = CD de tus conjuros) y Apresado mientras esté agarrado. Escape del Djinni: te teletransportas 30 pies y quedas semi-incorpóreo hasta el final de tu siguiente turno (resistencia a daño contundente, perforante y cortante; inmune a Agarrado, Derribado y Apresado). Furia del Efreeti: el objetivo sufre 2d4 de fuego y otra criatura a 30 pies sufre 2d4 de fuego. Oleada del Marid: el objetivo y las criaturas en una emanación de 10 pies hacen una salvación de FUE o son empujados 15 pies y quedan Derribados."
      },
      {
        n: "Esplendor del Genio (Genie's Splendor)",
        nv: 3,
        d: "Sin armadura, tu CA base = 10 + mod. DES + mod. CAR (puedes usar escudo). Ganas competencia en Acrobacias, Intimidación, Interpretación o Persuasión."
      },
      {
        n: "Aura de Protección Elemental (Aura of Elemental Shielding)",
        nv: 7,
        d: "Eliges resistencia a ácido, frío, fuego, rayo o trueno para ti y tus aliados en tu aura de protección; cambias el tipo al inicio de tu turno (sin acción)."
      },
      {
        n: "Réplica Elemental (Elemental Rebuke)",
        nv: 15,
        a: "R",
        d: "Cuando te impactan, usas tu Reacción para reducir a la mitad el daño; el atacante hace una salvación de DES (CD de tus conjuros) o sufre 2d10 + mod. CAR de daño de ácido, frío, fuego, rayo o trueno (a tu elección). Usos = mod. CAR (mín. 1) por descanso largo."
      },
      {
        n: "Noble Descendiente (Noble Scion)",
        nv: 20,
        a: "B",
        d: "Como Acción Adicional ganas 10 minutos: Velocidad de vuelo 60 pies (flotas); y cuando un aliado falla una Tirada de d20, usas tu Reacción para hacer que la supere. Una vez por descanso largo o gastando un espacio de Nv.5."
      },
    ],
  },
};
