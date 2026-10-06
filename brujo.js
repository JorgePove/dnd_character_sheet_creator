/* ══════════════════════════════════════════════════════════════════
   brujo.js — Brujo: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · XGtE · SCAG · TCE · VRGtR · PHB 2024 · THW 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     El Archidiablo               [PHB 2014] / [PHB 2024]
     La Reina de las Hadas        [PHB 2014] / [PHB 2024]
     El Gran Antiguo              [PHB 2014] / [PHB 2024]
     El Celestial                 [XGtE] / [PHB 2024]
     El Hexblade                  [XGtE]
     El Inmortal                  [SCAG]
     El Genio                     [TCE]
     El Insondable                [TCE]
     El No-Muerto                 [VRGtR] / [THW 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_BRUJO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d8. Salvaciones: SAB y CAR. Armaduras: ligeras. Armas: simples. Habilidades: elige 2 entre Arcanos, Engaño, Historia, Intimidación, Investigación, Naturaleza y Religión."
    },
    {
      n: "Patrón Sobrenatural (Otherworldly Patron)",
      nv: 1,
      d: "[Sólo 2014] Eliges subclase (Patrón) al Nv.1; concede rasgos en Nv.1, 6, 10 y 14 y amplía la lista de conjuros del Brujo. [2024: la subclase se elige en Nv.3 y sus conjuros se tienen siempre preparados]"
    },
    {
      n: "Magia de Pacto (Pact Magic)",
      nv: 1,
      d: "CAR es tu característica de conjuros (CD = 8 + comp. + mod. CAR). Puedes usar un foco arcano. Trucos: 2 (3 en Nv.4, 4 en Nv.10). Conjuros preparados: 2 en Nv.1 (3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15 en Nv.2-20); cambias uno al subir de nivel. Espacios de Pacto, todos del mismo nivel: Nv.1: 1 de nv.1; Nv.2: 2 de nv.1; Nv.3: 2 de nv.2; Nv.5: 2 de nv.3; Nv.7: 2 de nv.4; Nv.9: 2 de nv.5; Nv.11: 3 de nv.5; Nv.17: 4 de nv.5. Recuperas todos con un descanso corto o largo. [2014: conoces conjuros en lugar de prepararlos]"
    },
    {
      n: "Invocaciones Sobrenaturales (Eldritch Invocations)",
      nv: 1,
      d: "Ganas 1 invocación en Nv.1 (3 en Nv.2, 5 en Nv.5, 6 en Nv.7, 7 en Nv.9, 8 en Nv.12, 9 en Nv.15, 10 en Nv.18); cada una puede tener requisitos (nivel, truco, Pacto…). Al subir de nivel de Brujo puedes cambiar una por otra para la que cumplas requisitos (no una que sea requisito de otra). Algunas de 2024: Pacto de la Hoja / de la Cadena / del Tomo, Explosión Agónica (Agonizing Blast: sumas CAR al daño de un truco), Armadura de Sombras (Armor of Shadows), Visión del Diablo (Devil's Sight), Mente Sobrenatural (Eldritch Mind: ventaja en salvaciones de CON para concentración), Lanza Sobrenatural (Eldritch Spear), Vigor Infernal (Fiendish Vigor), Mirada de Dos Mentes (Gaze of Two Minds), Lecciones de los Primeros (Lessons of the First Ones: una dote de Origen), Máscara de Mil Rostros (Mask of Many Faces), Visiones Brumosas (Misty Visions), Salto Sobrenatural (Otherworldly Leap), Explosión Repelente (Repelling Blast), Susurros de la Tumba (Whispers of the Grave), Visión de la Bruja (Witch Sight). [2014: Nv.2 con 2 invocaciones (3 en Nv.5, 4 en Nv.7, 5 en Nv.9, 6 en Nv.12, 7 en Nv.15, 8 en Nv.18); puedes cambiar una al subir de nivel]"
    },
    {
      n: "Astucia Mágica (Magical Cunning)",
      nv: 2,
      a: "O",
      d: "Realizas un rito esotérico de 1 minuto y recuperas espacios de Pacto gastados hasta la mitad de tu máximo (redondeado hacia arriba). Una vez por descanso largo. [Sólo 2024; en 2014 el Maestro Sobrenatural de Nv.20 permite un rito similar que recupera todos]"
    },
    {
      n: "Subclase de Brujo (Patrón Sobrenatural)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6, 10 y 14 y conjuros que siempre tienes preparados. [2014: Patrón Sobrenatural, se elige en Nv.1]"
    },
    {
      n: "Dádiva del Pacto (Pact Boon)",
      nv: 3,
      d: "[Sólo 2014] Tu patrón te da una dádiva: Pacto de la Cadena (Encontrar Familiar con formas especiales: diablillo, pseudodragón, quasit o sprite; el familiar puede atacar usando tu reacción), Pacto de la Hoja (creas un arma de pacto como acción; eres competente con ella, cuenta como mágica y puedes vincular un arma mágica), Pacto del Tomo (Libro de las Sombras con 3 trucos de cualquier clase), Pacto del Talismán [TCE] (amuleto: el portador suma 1d4 a una prueba de característica fallida; comp. veces por descanso largo). [2024: son invocaciones]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra en Nv.19]"
    },
    {
      n: "Contacto con el Patrón (Contact Patron)",
      nv: 9,
      a: "O",
      d: "Siempre tienes preparado Contact Other Plane. Puedes lanzarlo sin gastar espacio para contactar a tu patrón y superas automáticamente su salvación. Una vez por descanso largo. [Sólo 2024]"
    },
    {
      n: "Arcano Místico (Mystic Arcanum)",
      nv: 11,
      a: "O",
      d: "Eliges un conjuro de Brujo de nivel 6 como arcano: puedes lanzarlo una vez sin gastar espacio por descanso largo. Ganas otro arcano en Nv.13 (nivel 7), Nv.15 (nivel 8) y Nv.17 (nivel 9). Al subir de nivel puedes cambiar un arcano por otro del mismo nivel."
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Maestro Sobrenatural (Eldritch Master)",
      nv: 20,
      a: "O",
      d: "Cuando usas Astucia Mágica recuperas todos tus espacios de Pacto gastados. [2014: puedes dedicar 1 minuto a suplicar a tu patrón para recuperar todos tus espacios de Pacto, una vez por descanso largo]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "El Archidiablo [PHB 2014]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Burning Hands, Command. Nv.2: Blindness/Deafness, Scorching Ray. Nv.3: Fireball, Stinking Cloud. Nv.4: Fire Shield, Wall of Fire. Nv.5: Flame Strike, Hallow."
      },
      {
        n: "Bendición del Oscuro (Dark One's Blessing)",
        nv: 1,
        d: "Cuando reduces a 0 PG a una criatura hostil, ganas PG temporales = mod. CAR + nivel de Brujo (mínimo 1)."
      },
      {
        n: "Suerte Propia del Oscuro (Dark One's Own Luck)",
        nv: 6,
        a: "O",
        d: "Cuando haces una prueba de característica o una salvación, puedes sumar 1d10 a la tirada (tras verla, antes de sus efectos). Una vez por descanso corto o largo."
      },
      {
        n: "Resistencia Infernal (Fiendish Resilience)",
        nv: 10,
        d: "Al terminar un descanso corto o largo eliges un tipo de daño: tienes resistencia a él hasta que elijas otro. Los daños de armas mágicas o de plata ignoran esta resistencia."
      },
      {
        n: "Lanzar a Través del Infierno (Hurl Through Hell)",
        nv: 14,
        a: "O",
        d: "Cuando impactas a una criatura con un ataque, puedes enviarla a través de los planos inferiores: desaparece y regresa al final de tu siguiente turno al mismo espacio (o el más cercano). Si no es un infernal, sufre 10d10 de daño psíquico. Una vez por descanso largo."
      },
    ],

    "La Reina de las Hadas [PHB 2014]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Faerie Fire, Sleep. Nv.2: Calm Emotions, Phantasmal Force. Nv.3: Blink, Plant Growth. Nv.4: Dominate Beast, Greater Invisibility. Nv.5: Dominate Person, Seeming."
      },
      {
        n: "Presencia Feérica (Fey Presence)",
        nv: 1,
        a: "A",
        d: "Como acción, las criaturas en un cubo de 10 pies originado en ti hacen una salvación de SAB (tu CD de conjuros); si fallan quedan Hechizadas o Asustadas (a tu elección) hasta el final de tu siguiente turno. Una vez por descanso corto o largo."
      },
      {
        n: "Escape Brumoso (Misty Escape)",
        nv: 6,
        a: "R",
        d: "Cuando recibes daño puedes usar tu reacción para volverte invisible y teletransportarte hasta 60 pies a un espacio libre que veas. Invisible hasta el inicio de tu siguiente turno o hasta que ataques o lances un conjuro. Una vez por descanso corto o largo."
      },
      {
        n: "Defensas Seductoras (Beguiling Defenses)",
        nv: 10,
        a: "R",
        d: "Inmunidad a Hechizado. Cuando otra criatura intenta hechizarte, puedes usar tu reacción para devolverle el hechizo: debe superar una salvación de SAB (tu CD) o queda Hechizada 1 minuto o hasta que reciba daño."
      },
      {
        n: "Delirio Oscuro (Dark Delirium)",
        nv: 14,
        a: "A",
        d: "Como acción, una criatura a 60 pies hace una salvación de SAB (tu CD); si falla queda Hechizada o Asustada (a tu elección) 1 minuto o hasta que se rompa tu concentración. Cree estar en un reino brumoso que sólo contiene a ella, a ti y su entorno ilusorio; termina si recibe daño. Una vez por descanso corto o largo."
      },
    ],

    "El Gran Antiguo [PHB 2014]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Dissonant Whispers, Tasha's Hideous Laughter. Nv.2: Detect Thoughts, Phantasmal Force. Nv.3: Clairvoyance, Sending. Nv.4: Dominate Beast, Evard's Black Tentacles. Nv.5: Dominate Person, Telekinesis."
      },
      {
        n: "Mente Despierta (Awakened Mind)",
        nv: 1,
        d: "Puedes hablar telepáticamente con cualquier criatura que veas a 30 pies (no necesitáis idioma común, pero la criatura debe entender al menos un idioma)."
      },
      {
        n: "Escudo Entrópico (Entropic Ward)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura hace una tirada de ataque contra ti, puedes usar tu reacción para imponerle desventaja. Si el ataque falla, tienes ventaja en tu siguiente tirada de ataque contra ella antes del final de tu siguiente turno. Una vez por descanso corto o largo."
      },
      {
        n: "Escudo de Pensamiento (Thought Shield)",
        nv: 10,
        d: "Tus pensamientos no pueden ser leídos por telepatía ni otros medios salvo que lo permitas. Resistencia al daño psíquico; cuando una criatura te inflige daño psíquico, sufre el mismo daño."
      },
      {
        n: "Crear Siervo (Create Thrall)",
        nv: 14,
        a: "A",
        d: "Como acción tocas a un humanoide Incapacitado: queda Hechizado por ti hasta que se lance Remove Curse sobre él, se le elimine la condición o uses este rasgo de nuevo. Puedes comunicarte telepáticamente con él mientras estéis en el mismo plano."
      },
    ],


    /* ── XGtE ── */
    "El Celestial [XGtE]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Cure Wounds, Guiding Bolt. Nv.2: Flaming Sphere, Lesser Restoration. Nv.3: Daylight, Revivify. Nv.4: Guardian of Faith, Wall of Fire. Nv.5: Flame Strike, Greater Restoration."
      },
      {
        n: "Trucos Adicionales (Bonus Cantrips)",
        nv: 1,
        d: "Aprendes los trucos Light y Sacred Flame; cuentan como trucos de Brujo y no cuentan para tu límite."
      },
      {
        n: "Luz Sanadora (Healing Light)",
        nv: 1,
        a: "B",
        d: "Tienes una reserva de d6 = 1 + nivel de Brujo. Como Acción Adicional curas a una criatura a 60 pies gastando hasta mod. CAR (mínimo 1) dados de la reserva; tiras los dados y recupera PG = el total. La reserva se recupera con un descanso largo."
      },
      {
        n: "Alma Radiante (Radiant Soul)",
        nv: 6,
        d: "Resistencia al daño radiante. Cuando lanzas un conjuro que inflige daño radiante o de fuego, sumas tu mod. CAR a una tirada de daño de ese conjuro contra un objetivo."
      },
      {
        n: "Resistencia Celestial (Celestial Resilience)",
        nv: 10,
        d: "Al terminar un descanso corto o largo ganas PG temporales = nivel de Brujo + mod. CAR, y hasta 5 criaturas que veas ganan PG temporales = la mitad de tu nivel de Brujo + mod. CAR."
      },
      {
        n: "Venganza Abrasadora (Searing Vengeance)",
        nv: 14,
        a: "O",
        d: "Cuando debes hacer una salvación de muerte al inicio de tu turno, puedes en su lugar levantarte en una explosión radiante: recuperas PG = la mitad de tus PG máximos y puedes ponerte de pie. Las criaturas de tu elección a 30 pies sufren 2d8 + mod. CAR de daño radiante y quedan Cegadas hasta el final del turno. Una vez por descanso largo."
      },
    ],

    "El Hexblade [XGtE]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Shield, Wrathful Smite. Nv.2: Blur, Branding Smite. Nv.3: Blink, Elemental Weapon. Nv.4: Phantasmal Killer, Staggering Smite. Nv.5: Banishing Smite, Cone of Cold."
      },
      {
        n: "Maldición del Hexblade (Hexblade's Curse)",
        nv: 1,
        a: "B",
        d: "Como Acción Adicional maldices a una criatura a 30 pies durante 1 minuto (termina si muere, si mueres o si quedas Incapacitado): sumas tu bonificador de competencia al daño de tus ataques contra ella; tus ataques contra ella son críticos con 19-20; y si muere recuperas PG = nivel de Brujo + mod. CAR (mínimo 1). Una vez por descanso corto o largo."
      },
      {
        n: "Guerrero Hex (Hex Warrior)",
        nv: 1,
        d: "Ganas competencia con armaduras medias, escudos y armas marciales. Tras un descanso largo, tocas un arma en la que seas competente que no sea de dos manos: al atacar con ella usas CAR en lugar de FUE o DES para ataque y daño hasta el siguiente descanso largo. Se aplica a tus armas de pacto si luego obtienes Pacto de la Hoja."
      },
      {
        n: "Espectro Maldito (Accursed Specter)",
        nv: 6,
        a: "O",
        d: "Cuando matas a un humanoide puedes hacer que su espíritu se alce como un espectro (ficha de Espectro) bajo tu control: gana PG temporales = la mitad de tu nivel de Brujo, tira su propia iniciativa, obedece tus órdenes verbales y suma tu mod. CAR a sus tiradas de ataque. Desaparece tras tu siguiente descanso largo. Una vez por descanso largo."
      },
      {
        n: "Armadura de Maleficios (Armor of Hexes)",
        nv: 10,
        a: "R",
        d: "Si la criatura maldita por tu Maldición del Hexblade te impacta con un ataque, puedes usar tu reacción para tirar 1d6: con 4 o más el ataque falla, sea cual sea su tirada."
      },
      {
        n: "Maestro de Maleficios (Master of Hexes)",
        nv: 14,
        a: "O",
        d: "Cuando muere la criatura maldita por tu Maldición del Hexblade, puedes aplicar la maldición a otra criatura a 30 pies (si no estás Incapacitado) sin gastar el uso; no recuperas PG por la muerte de la anterior."
      },
    ],


    /* ── SCAG ── */
    "El Inmortal [SCAG]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: False Life, Ray of Sickness. Nv.2: Blindness/Deafness, Silence. Nv.3: Feign Death, Speak with Dead. Nv.4: Aura of Life, Death Ward. Nv.5: Contagion, Legend Lore."
      },
      {
        n: "Entre los Muertos (Among the Dead)",
        nv: 1,
        d: "Aprendes el truco Spare the Dying (no cuenta para tu límite) y tienes ventaja en salvaciones contra enfermedades. Si un no-muerto te elige directamente como objetivo de un ataque o conjuro dañino, debe superar una salvación de SAB (tu CD) o elegir otro objetivo/perder el ataque; si la supera, es inmune a este efecto 24 horas. No protege contra efectos de área."
      },
      {
        n: "Burlar a la Muerte (Defy Death)",
        nv: 6,
        a: "O",
        d: "Cuando superas una salvación de muerte o estabilizas a una criatura con Spare the Dying, recuperas 1d8 + mod. CON PG (mínimo 1). Una vez por descanso largo."
      },
      {
        n: "Naturaleza Inmortal (Undying Nature)",
        nv: 10,
        d: "Puedes contener la respiración indefinidamente; no necesitas comer, beber ni dormir (aun así el descanso reduce el agotamiento); envejeces a una décima parte del ritmo y eres inmune al envejecimiento mágico."
      },
      {
        n: "Vida Indestructible (Indestructible Life)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional recuperas 1d8 + nivel de Brujo PG y se reacoplan las partes del cuerpo seccionadas. Una vez por descanso corto o largo."
      },
    ],


    /* ── TCE ── */
    "El Genio [TCE]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Eliges tipo de genio (Dao, Djinni, Efreeti o Marid) y se añaden a la lista del Brujo — Nv.1: Detect Evil and Good + (Dao: Sanctuary; Djinni: Thunderwave; Efreeti: Burning Hands; Marid: Fog Cloud). Nv.2: Phantasmal Force + (Spike Growth; Gust of Wind; Scorching Ray; Blur). Nv.3: Create Food and Water + (Meld into Stone; Wind Wall; Fireball; Sleet Storm). Nv.4: Phantasmal Killer + (Stone Shape; Greater Invisibility; Fire Shield; Control Water). Nv.5: Creation + (Wall of Stone; Seeming; Flame Strike; Cone of Cold)."
      },
      {
        n: "Vasija del Genio (Genie's Vessel)",
        nv: 1,
        a: "A",
        d: "Recibes una vasija Diminuta que sirve de foco de conjuros (CA = tu CD de conjuros; PG = nivel de Brujo + comp.). Reposo en la Botella (Bottled Respite): como acción entras en la vasija (espacio extradimensional cilíndrico de 20 pies) hasta 2 × comp. horas, oyendo el exterior. Ira del Genio (Genie's Wrath): una vez por turno al impactar con un ataque infliges daño adicional = comp. (Dao: contundente; Djinni: trueno; Efreeti: fuego; Marid: frío)."
      },
      {
        n: "Don Elemental (Elemental Gift)",
        nv: 6,
        a: "B",
        d: "Resistencia al daño de tu tipo de genio (Dao: contundente; Djinni: trueno; Efreeti: fuego; Marid: frío). Además, como Acción Adicional obtienes Velocidad de vuelo 30 pies (puedes flotar) durante 10 minutos; comp. veces por descanso largo."
      },
      {
        n: "Vasija Santuario (Sanctuary Vessel)",
        nv: 10,
        a: "O",
        d: "Al entrar en tu vasija con Reposo en la Botella puedes llevar hasta 5 criaturas voluntarias a 30 pies. Quien permanezca 10 minutos o más obtiene los beneficios de un descanso corto (una vez por descanso largo) y suma tu comp. a la curación de sus Dados de Golpe."
      },
      {
        n: "Deseo Limitado (Limited Wish)",
        nv: 14,
        a: "A",
        d: "Como acción pronuncias un deseo y obtienes el efecto de un conjuro de nivel 6 o inferior con tiempo de lanzamiento de 1 acción de la lista de cualquier clase (sin requisitos ni componentes con coste). Después no puedes volver a usarlo hasta terminar 1d4 descansos largos."
      },
    ],

    "El Insondable [TCE]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Create or Destroy Water, Thunderwave. Nv.2: Gust of Wind, Silence. Nv.3: Lightning Bolt, Sleet Storm. Nv.4: Control Water, Summon Elemental. Nv.5: Bigby's Hand (en forma de tentáculo), Cone of Cold."
      },
      {
        n: "Tentáculo de las Profundidades (Tentacle of the Deeps)",
        nv: 1,
        a: "B",
        d: "Como Acción Adicional creas un tentáculo espectral de 10 pies en un punto que veas a 60 pies (1 minuto). Al crearlo y como Acción Adicional en tus turnos puedes moverlo 30 pies y hacer un ataque cuerpo a cuerpo de conjuro: 1d8 de frío (2d8 en Nv.10) y la Velocidad del objetivo baja 10 pies hasta el inicio de tu siguiente turno. Usos = comp.; se recuperan con un descanso largo."
      },
      {
        n: "Don del Mar (Gift of the Sea)",
        nv: 1,
        d: "Velocidad de nadar de 40 pies y respiras bajo el agua."
      },
      {
        n: "Alma Oceánica (Oceanic Soul)",
        nv: 6,
        d: "Resistencia al daño de frío. Cuando estás completamente sumergido, las criaturas también sumergidas pueden entender tu habla y tú la suya."
      },
      {
        n: "Espiral Guardiana (Guardian Coil)",
        nv: 6,
        a: "R",
        d: "Cuando tú o una criatura que veas a 10 pies de tu tentáculo recibe daño, puedes usar tu reacción para reducirlo 1d8 (2d8 en Nv.10; el tentáculo debe estar activo)."
      },
      {
        n: "Tentáculos Aprehensores (Grasping Tentacles)",
        nv: 10,
        a: "O",
        d: "Aprendes Evard's Black Tentacles (cuenta como conjuro de Brujo); puedes lanzarlo una vez sin espacio por descanso largo y ganas PG temporales = nivel de Brujo al hacerlo."
      },
      {
        n: "Zambullida Insondable (Fathomless Plunge)",
        nv: 14,
        a: "A",
        d: "Como acción, tú y hasta 5 criaturas voluntarias a 30 pies os teletransportáis hasta 1 milla a un espacio visible de agua que conozcas (debes haberlo visto). Una vez por descanso corto o largo."
      },
    ],


    /* ── VRGtR ── */
    "El No-Muerto [VRGtR]": [
      {
        n: "Lista de Conjuros del Patrón (Expanded Spell List)",
        nv: 1,
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Bane, False Life. Nv.2: Blindness/Deafness, Phantasmal Force. Nv.3: Phantom Steed, Speak with Dead. Nv.4: Death Ward, Greater Invisibility. Nv.5: Antilife Shell, Cloudkill."
      },
      {
        n: "Forma de Terror (Form of Dread)",
        nv: 1,
        a: "B",
        d: "Como Acción Adicional te transformas durante 1 minuto: ganas 1d10 + nivel de Brujo PG temporales; una vez por turno, al impactar a una criatura puedes obligarla a una salvación de SAB (tu CD) o queda Asustada hasta el final de tu siguiente turno; e inmunidad a Asustado. Usos = comp.; se recuperan con un descanso largo."
      },
      {
        n: "Tocado por la Tumba (Grave Touched)",
        nv: 6,
        d: "No necesitas comer, beber ni respirar. Una vez por turno, cuando infliges daño con un ataque o conjuro puedes cambiar el tipo de daño a necrótico; durante Forma de Terror, tiras 1 dado de daño adicional al calcular el daño necrótico."
      },
      {
        n: "Caparazón Necrótico (Necrotic Husk)",
        nv: 10,
        a: "O",
        d: "Resistencia al daño necrótico (inmunidad durante Forma de Terror). Cuando caes a 0 PG, puedes quedarte en 1 PG y las criaturas de tu elección a 30 pies sufren 2d10 + nivel de Brujo de daño necrótico; ganas 1 nivel de agotamiento. Una vez cada 1d4 descansos largos."
      },
      {
        n: "Proyección Espiritual (Spirit Projection)",
        nv: 14,
        a: "A",
        d: "Como acción proyectas tu espíritu durante hasta 1 hora (concentración): resistencia al daño contundente, perforante y cortante; lanzas conjuros de conjuración o nigromancia sin componentes (salvo los que tengan coste en oro); Velocidad de vuelo = tu Velocidad; atravesar criaturas u objetos inflige 1d10 de fuerza; y recuperas PG = la mitad del daño necrótico que causes. Una vez por descanso largo."
      },
    ],


    /* ── PHB 2024 ── */
    "El Archidiablo [PHB 2024]": [
      {
        n: "Bendición del Oscuro (Dark One's Blessing)",
        nv: 3,
        d: "Cuando reduces a un enemigo a 0 PG ganas PG temporales = mod. CAR + nivel de Brujo (mínimo 1). También ganas esto si otro reduce a 0 PG a un enemigo a 10 pies de ti."
      },
      {
        n: "Conjuros del Infernal (Fiend Spells)",
        nv: 3,
        d: "Siempre tienes preparados — Nv.3: Burning Hands, Command, Scorching Ray, Suggestion. Nv.5: Fireball, Stinking Cloud. Nv.7: Fire Shield, Wall of Fire. Nv.9: Geas, Insect Plague."
      },
      {
        n: "Suerte Propia del Oscuro (Dark One's Own Luck)",
        nv: 6,
        a: "O",
        d: "Cuando haces una prueba de característica o una salvación, puedes sumar 1d10 a la tirada (tras verla, antes de sus efectos). Usos = mod. CAR (mínimo 1) por descanso largo; sólo uno por tirada."
      },
      {
        n: "Resistencia Infernal (Fiendish Resilience)",
        nv: 10,
        d: "Al terminar un descanso corto o largo eliges un tipo de daño (excepto Fuerza): tienes resistencia a él hasta que elijas otro."
      },
      {
        n: "Lanzar a Través del Infierno (Hurl Through Hell)",
        nv: 14,
        a: "O",
        d: "Una vez por turno, tras impactar con una tirada de ataque, obligas al objetivo a una salvación de CAR (tu CD): si falla, es enviado a los planos inferiores y queda Incapacitado hasta el final de tu siguiente turno; sufre 8d10 de daño psíquico si no es un infernal. Una vez por descanso largo, o gastando un espacio de Pacto."
      },
    ],

    "La Reina de las Hadas [PHB 2024]": [
      {
        n: "Conjuros de las Hadas (Archfey Spells)",
        nv: 3,
        d: "Siempre tienes preparados — Nv.3: Calm Emotions, Faerie Fire, Misty Step, Phantasmal Force, Sleep. Nv.5: Blink, Plant Growth. Nv.7: Dominate Beast, Greater Invisibility. Nv.9: Dominate Person, Seeming."
      },
      {
        n: "Pasos Feéricos (Steps of the Fey)",
        nv: 3,
        a: "B",
        d: "Puedes lanzar Misty Step sin gastar espacio mod. CAR veces (mínimo 1) por descanso largo. Cada vez que lo haces eliges un efecto adicional: Paso Reconfortante: tú o una criatura a 10 pies ganáis 1d10 PG temporales. Paso Provocador: las criaturas a 5 pies del punto de partida hacen una salvación de SAB o tienen desventaja en ataques contra objetivos que no seas tú hasta el inicio de tu siguiente turno."
      },
      {
        n: "Escape Brumoso (Misty Escape)",
        nv: 6,
        a: "R",
        d: "Puedes lanzar Misty Step como reacción cuando recibes daño. Nuevos efectos de Pasos Feéricos: Paso Desvanecedor: quedas Invisible hasta el inicio de tu siguiente turno o hasta que ataques, dañes o lances un conjuro. Paso Aterrador: las criaturas a 5 pies del punto de salida o de llegada (a tu elección) hacen una salvación de SAB o sufren 2d10 de daño psíquico."
      },
      {
        n: "Defensas Seductoras (Beguiling Defenses)",
        nv: 10,
        a: "R",
        d: "Inmunidad a Hechizado. Cuando un ataque te impacta, puedes usar tu reacción para reducir el daño a la mitad (redondeado hacia abajo) y obligar al atacante a una salvación de SAB (tu CD): si falla, sufre daño psíquico = el daño que recibiste. Una vez por descanso largo, o gastando un espacio de Pacto."
      },
      {
        n: "Magia Embrujadora (Bewitching Magic)",
        nv: 14,
        a: "O",
        d: "Cuando lanzas un conjuro de Encantamiento o Ilusión con un espacio y con tiempo de lanzamiento de una acción, puedes lanzar Misty Step como parte de la misma acción sin gastar espacio."
      },
    ],

    "El Gran Antiguo [PHB 2024]": [
      {
        n: "Mente Despierta (Awakened Mind)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional eliges una criatura que veas a 30 pies: podéis comunicaros telepáticamente mientras estéis a una distancia en millas = mod. CAR (mínimo 1). Dura minutos = nivel de Brujo y termina al conectar con otra criatura."
      },
      {
        n: "Conjuros del Gran Antiguo (Great Old One Spells)",
        nv: 3,
        d: "Siempre tienes preparados — Nv.3: Detect Thoughts, Dissonant Whispers, Phantasmal Force, Tasha's Hideous Laughter. Nv.5: Clairvoyance, Hunger of Hadar. Nv.7: Confusion, Summon Aberration. Nv.9: Modify Memory, Telekinesis."
      },
      {
        n: "Conjuros Psíquicos (Psychic Spells)",
        nv: 3,
        d: "Cuando lanzas un conjuro de Brujo que inflige daño, puedes cambiar su tipo a psíquico. Además, cuando lanzas un conjuro de Brujo de Encantamiento o Ilusión, puedes lanzarlo sin componentes verbales ni somáticos."
      },
      {
        n: "Combatiente Clarividente (Clairvoyant Combatant)",
        nv: 6,
        a: "O",
        d: "Cuando conectas con una criatura mediante Mente Despierta, puedes forzarla a una salvación de SAB (tu CD): si falla, tiene desventaja en tiradas de ataque contra ti y tú tienes ventaja en las tuyas contra ella mientras dure la conexión. Una vez por descanso corto o largo, o gastando un espacio de Pacto."
      },
      {
        n: "Maleficio Sobrenatural (Eldritch Hex)",
        nv: 10,
        d: "Siempre tienes preparado Hex. Cuando lo lanzas y eliges una característica, el objetivo tiene además desventaja en las salvaciones de esa característica mientras dure el conjuro."
      },
      {
        n: "Escudo de Pensamiento (Thought Shield)",
        nv: 10,
        d: "Tus pensamientos no pueden ser leídos por telepatía ni otros medios salvo que lo permitas. Resistencia al daño psíquico; cuando una criatura te inflige daño psíquico, sufre la misma cantidad."
      },
      {
        n: "Crear Siervo (Create Thrall)",
        nv: 14,
        d: "Cuando lanzas Summon Aberration puedes eliminar el requisito de concentración (duración 1 minuto); la aberración invocada gana PG temporales = nivel de Brujo + mod. CAR, y su primer impacto en cada turno contra una criatura afectada por tu Hex inflige daño psíquico adicional igual al bonificador de daño de ese conjuro."
      },
    ],

    "El Celestial [PHB 2024]": [
      {
        n: "Conjuros Celestiales (Celestial Spells)",
        nv: 3,
        d: "Siempre tienes preparados — Nv.3: Aid, Cure Wounds, Guiding Bolt, Lesser Restoration, Light, Sacred Flame. Nv.5: Daylight, Revivify. Nv.7: Guardian of Faith, Wall of Fire. Nv.9: Greater Restoration, Summon Celestial."
      },
      {
        n: "Luz Sanadora (Healing Light)",
        nv: 3,
        a: "B",
        d: "Tienes una reserva de d6 = 1 + nivel de Brujo. Como Acción Adicional curas a ti mismo o a una criatura a 60 pies gastando hasta mod. CAR (mínimo 1) dados de la reserva; tiras los dados y recupera PG = el total. La reserva se recupera con un descanso largo."
      },
      {
        n: "Alma Radiante (Radiant Soul)",
        nv: 6,
        d: "Resistencia al daño radiante. Una vez por turno, cuando un conjuro tuyo de daño radiante o de fuego impacta a un objetivo, sumas tu mod. CAR al daño contra uno de sus objetivos."
      },
      {
        n: "Resistencia Celestial (Celestial Resilience)",
        nv: 10,
        d: "Ganas PG temporales cuando usas Astucia Mágica o terminas un descanso corto o largo: nivel de Brujo + mod. CAR. Además hasta 5 criaturas que veas ganan PG temporales = la mitad de tu nivel de Brujo + mod. CAR."
      },
      {
        n: "Venganza Abrasadora (Searing Vengeance)",
        nv: 14,
        a: "O",
        d: "Cuando tú o una criatura aliada a 60 pies hace una salvación de muerte, puedes liberar energía radiante: la criatura recupera PG = la mitad de sus PG máximos y puede terminar la condición Tumbado. Las criaturas de tu elección a 30 pies sufren 2d8 + mod. CAR de daño radiante y quedan Cegadas hasta el final del turno. Una vez por descanso largo."
      },
    ],


    /* ── THW 2024 ── */
    "El No-Muerto [THW 2024]": [
      {
        n: "Forma de Terror (Form of Dread)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional te transformas durante 1 minuto (hasta que quedes Incapacitado o decidas terminarla, sin acción). Usos = mod. CAR (mínimo 1); se recuperan con un descanso largo. Efectos: Facsímil de Vida: ganas PG temporales = 1d10 + nivel de Brujo. Forma Intrépida: inmunidad a Asustado (si ya lo estabas, termina). Avatar Terrorífico: una vez por turno, al impactar con una tirada de ataque, la criatura hace una salvación de SAB (tu CD) o queda Asustada hasta el final de tu siguiente turno."
      },
      {
        n: "Conjuros del No-Muerto (Undead Spells)",
        nv: 3,
        d: "Siempre tienes preparados — Nv.3: Bane, Blindness/Deafness, Phantasmal Force, Ray of Sickness. Nv.5: Speak with Dead, Summon Undead. Nv.7: Greater Invisibility, Phantasmal Killer. Nv.9: Antilife Shell, Cloudkill."
      },
      {
        n: "Tocado por la Tumba (Grave Touched)",
        nv: 6,
        d: "Necrosis Arcana: tu daño necrótico ignora resistencias; una vez por turno puedes cambiar el tipo de daño de un conjuro a necrótico. Necrosis Aterradora: durante Forma de Terror, una vez por turno tiras 1 dado de daño adicional al calcular el daño necrótico. Resistencia de No-Muerto: no sufres agotamiento por deshidratación, desnutrición o asfixia, no necesitas dormir y la magia no puede obligarte a dormir."
      },
      {
        n: "Caparazón Necrótico (Necrotic Husk)",
        nv: 10,
        a: "O",
        d: "Resiliencia Necrótica: resistencia al daño necrótico (inmunidad mientras usas Forma de Terror). Resucitación Impía: cuando caes a 0 PG, las criaturas de tu elección a 30 pies hacen una salvación de CON o sufren 2d10 + mod. CAR de daño necrótico (mitad si superan); tus PG pasan a ser el doble de tu nivel de Brujo y ganas 1 nivel de agotamiento. Se recupera con un descanso corto o largo."
      },
      {
        n: "Pavor Superior (Superior Dread)",
        nv: 14,
        d: "Durante Forma de Terror: Resistencia al Pavor: resistencia al daño contundente, perforante y cortante. Vuelo Fantasmal: Velocidad de vuelo = tu Velocidad (flotas); moverte a través de criaturas u objetos es terreno difícil y sufres 1d10 de fuerza si terminas el turno dentro. Lanzamiento Profano: lanzas conjuros de conjuración o nigromancia de Brujo sin componentes verbales, somáticos ni materiales sin coste."
      },
    ],
  },
};
