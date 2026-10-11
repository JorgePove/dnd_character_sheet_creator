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
      d: "CAR es tu característica de conjuros (CD = 8 + comp. + mod. CAR). Puedes usar un foco arcano. Trucos: 2 (3 en Nv.4, 4 en Nv.10); al subir de nivel de Brujo puedes cambiar un truco por otro truco de Brujo. Conjuros preparados: 2 en Nv.1 (3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15 en Nv.2-20); cambias uno al subir de nivel. Espacios de Pacto, todos del mismo nivel: Nv.1: 1 de nv.1; Nv.2: 2 de nv.1; Nv.3: 2 de nv.2; Nv.5: 2 de nv.3; Nv.7: 2 de nv.4; Nv.9: 2 de nv.5; Nv.11: 3 de nv.5; Nv.17: 4 de nv.5. Recuperas todos con un descanso corto o largo. [2014: conoces conjuros en lugar de prepararlos; los trucos solo se pueden cambiar con el rasgo opcional Versatilidad Sobrenatural de TCE]"
    },
    {
      n: "Invocaciones Sobrenaturales (Eldritch Invocations)",
      nv: 1,
      d: "Ganas 1 invocación en Nv.1 (3 en Nv.2, 5 en Nv.5, 6 en Nv.7, 7 en Nv.9, 8 en Nv.12, 9 en Nv.15, 10 en Nv.18); cada una puede tener requisitos (nivel, truco, Pacto…). Al subir de nivel de Brujo puedes cambiar una por otra para la que cumplas requisitos (no una que sea requisito de otra). No puedes elegir la misma invocación más de una vez salvo que sea Repetible (Explosión Agónica, Lanza Sobrenatural, Explosión Repelente y Lecciones de los Primeros: cada vez con un truco o una dote de Origen distintos). Opciones de 2024: Pacto de la Hoja / de la Cadena / del Tomo, Explosión Agónica (Agonizing Blast: sumas CAR al daño de un truco), Armadura de Sombras (Armor of Shadows), Visión del Diablo (Devil's Sight), Mente Sobrenatural (Eldritch Mind: ventaja en salvaciones de CON para concentración), Lanza Sobrenatural (Eldritch Spear), Vigor Infernal (Fiendish Vigor), Mirada de Dos Mentes (Gaze of Two Minds), Lecciones de los Primeros (Lessons of the First Ones: una dote de Origen), Máscara de Mil Rostros (Mask of Many Faces), Visiones Brumosas (Misty Visions), Salto Sobrenatural (Otherworldly Leap), Explosión Repelente (Repelling Blast), Susurros de la Tumba (Whispers of the Grave), Visión de la Bruja (Witch Sight), Paso Ascendente (Ascendant Step: lanzas Levitate sobre ti sin gastar espacio; Nv.5+), Hoja Sedienta (Thirsting Blade: Ataque Extra solo con tu arma de pacto, atacas dos veces en vez de una; Nv.5+, Pacto de la Hoja), Hoja Devoradora (Devouring Blade: la Hoja Sedienta concede dos ataques extra en vez de uno; Nv.12+, requiere Hoja Sedienta), Castigo Sobrenatural (Eldritch Smite: una vez por turno, al impactar con tu arma de pacto, gastas un espacio de Pacto para infligir 1d8 de fuerza adicional más 1d8 por nivel del espacio y puedes dejar Tumbado a un objetivo Enorme o menor; Nv.5+, Pacto de la Hoja), Sorbevidas (Lifedrinker: una vez por turno, al impactar con tu arma de pacto, +1d6 necrótico, psíquico o radiante y puedes gastar un Dado de Golpe para recuperar PG = su tirada + mod. CON (mín. 1); Nv.9+, Pacto de la Hoja), Don de las Profundidades (Gift of the Depths: respiras bajo el agua, Velocidad de nadar = tu Velocidad y lanzas Water Breathing una vez por descanso largo sin gastar espacio; Nv.5+), Don de los Protectores (Gift of the Protectors: página del Libro de las Sombras con tantos nombres como tu mod. CAR (mín. 1), que una criatura escribe con su permiso; si una criatura anotada cae a 0 PG sin morir, queda a 1 PG, una vez por descanso largo; Nv.9+, Pacto del Tomo), Inversión del Maestro de la Cadena (Investment of the Chain Master: tu familiar de Find Familiar gana Velocidad de vuelo o de nadar de 40 pies, ataca con tu Acción Adicional, puede infligir daño necrótico o radiante en vez del normal, usa tu CD y puedes darle resistencia a un daño con tu reacción; Nv.5+, Pacto de la Cadena), Maestro de Mil Formas (Master of Myriad Forms: lanzas Alter Self sin gastar espacio; Nv.5+), Uno con las Sombras (One with Shadows: en Luz Tenue u Oscuridad lanzas Invisibility sobre ti sin gastar espacio; Nv.5+), Visiones de Reinos Lejanos (Visions of Distant Realms: lanzas Arcane Eye sin gastar espacio; Nv.9+). [2014: Nv.2 con 2 invocaciones (3 en Nv.5, 4 en Nv.7, 5 en Nv.9, 6 en Nv.12, 7 en Nv.15, 8 en Nv.18); puedes cambiar una al subir de nivel; las opciones de 2014 están en el rasgo «Invocaciones Sobrenaturales (opciones 2014)»]"
    },
    {
      n: "Astucia Mágica (Magical Cunning)",
      nv: 2,
      a: "O",
      d: "Realizas un rito esotérico de 1 minuto y recuperas espacios de Pacto gastados hasta la mitad de tu máximo (redondeado hacia arriba). Una vez por descanso largo. [Sólo 2024; en 2014 el Maestro Sobrenatural de Nv.20 permite un rito similar que recupera todos]"
    },
    {
      n: "Invocaciones Sobrenaturales (opciones 2014)",
      nv: 2,
      d: "[Sólo 2014] Opciones de invocación de 2014 (PHB, XGtE y TCE) sin equivalente en 2024. «Nv.» = nivel de Brujo; «Pacto» = tener esa Dádiva del Pacto; «a voluntad» = sin gastar espacio de conjuro. • Aspecto de la Luna (Aspect of the Moon) [XGtE; Pacto del Tomo]: no necesitas dormir ni pueden obligarte a dormir; para obtener los beneficios de un descanso largo basta pasar las 8 horas en actividad ligera (p. ej. leer tu Libro de las Sombras y vigilar). • Habla Bestial (Beast Speech) [PHB]: lanzas Speak with Animals a voluntad. • Influencia Seductora (Beguiling Influence) [PHB]: Competencia en Engaño y Persuasión. • Susurros Hechizantes (Bewitching Whispers) [PHB; Nv.7]: lanzas Compulsion una vez gastando un espacio de Brujo; no puedes repetirlo hasta un descanso largo. • Vínculo del Talismán (Bond of the Talisman) [TCE; Nv.12, Pacto del Talismán]: mientras otra criatura lleva tu talismán, puedes usar tu acción para teletransportarte al espacio libre más cercano a ella (y ella a ti con su acción), si estáis en el mismo plano; usos = comp.; recuperas todos con un descanso largo. • Libro de Secretos Antiguos (Book of Ancient Secrets) [PHB; Pacto del Tomo]: inscribes en tu Libro de las Sombras 2 conjuros de nivel 1 con la etiqueta Ritual de cualquier lista (no cuentan para tus conjuros conocidos y solo los lanzas como ritual); también puedes lanzar como ritual un conjuro de Brujo que conozcas con esa etiqueta. Puedes transcribir más rituales de nivel igual o inferior a la mitad de tu nivel de Brujo (redondeado hacia arriba): 2 horas y 50 po por nivel del conjuro. • Cadenas de Carceri (Chains of Carceri) [PHB; Nv.15, Pacto de la Cadena]: lanzas Hold Monster a voluntad, sin componentes materiales, sobre un celestial, infernal o elemental; no puedes usarlo de nuevo sobre la misma criatura hasta un descanso largo. • Capa de Moscas (Cloak of Flies) [XGtE; Nv.5]: como Acción Adicional te rodeas de un aura de moscas de 5 pies (no atraviesa Cobertura) hasta que quedes Incapacitado o la disipes con una Acción Adicional; Ventaja en pruebas de Intimidación y Desventaja en las demás pruebas de CAR; cualquier otra criatura que empiece su turno en el aura sufre daño de veneno = mod. CAR (mín. 0). Una vez por descanso corto o Largo. • Palabra Espantosa (Dreadful Word) [PHB; Nv.7]: lanzas Confusion una vez gastando un espacio de Brujo; no puedes repetirlo hasta un descanso largo. • Visión Sobrenatural (Eldritch Sight) [PHB]: lanzas Detect Magic a voluntad. • Ojos del Guardián de las Runas (Eyes of the Rune Keeper) [PHB]: puedes leer cualquier escritura. • Escriba Lejano (Far Scribe) [TCE; Nv.5, Pacto del Tomo]: aparece una página nueva en tu Libro de las Sombras en la que, con tu permiso, una criatura puede usar su acción para escribir su nombre (tantos nombres como tu bonificador de competencia). Lanzas Sending sobre una criatura anotada sin espacio ni componentes materiales escribiendo el mensaje en la página; si responde, su mensaje aparece en la página; lo escrito desaparece tras 1 minuto. Como acción puedes borrar un nombre tocándolo. • Mirada Fantasmal (Ghostly Gaze) [XGtE; Nv.7]: como acción ves a través de objetos sólidos hasta 30 pies y tienes Visión en la Oscuridad en ese radio si no la tenías; dura 1 minuto o hasta que se rompa tu concentración; ves los objetos como imágenes fantasmales y transparentes. Una vez por descanso corto o Largo. • Don de los Siempre Vivos (Gift of the Ever-Living Ones) [XGtE; Pacto de la Cadena]: cuando recuperas PG con tu familiar a 100 pies o menos de ti, los dados que tiras para determinar los PG recuperados cuentan como su valor máximo. • Agarre de Hadar (Grasp of Hadar) [XGtE; conocer Eldritch Blast]: una vez por turno, al impactar a una criatura con Eldritch Blast, la mueves 10 pies en línea recta hacia ti. • Arma de Pacto Mejorada (Improved Pact Weapon) [XGtE; Pacto de la Hoja]: cualquier arma que conjures con Pacto de la Hoja sirve de foco para tus conjuros de Brujo; gana +1 a las tiradas de ataque y daño (salvo que sea un arma mágica que ya tenga ese bonificador); además puede ser un arco corto, arco largo, ballesta ligera o ballesta pesada. • Lanza de Letargo (Lance of Lethargy) [XGtE; conocer Eldritch Blast]: una vez por turno, al impactar a una criatura con Eldritch Blast, reduces su Velocidad 10 pies hasta el final de tu siguiente turno. • Maleficio Enloquecedor (Maddening Hex) [XGtE; Nv.5, conjuro Hex o rasgo de Brujo que maldiga]: como Acción Adicional provocas una perturbación psíquica alrededor del objetivo maldito por tu Hex o por un rasgo de Brujo (p. ej. Maldición del Hexblade o Signo de Mal Agüero): ese objetivo y cada criatura de tu elección que veas a 5 pies de él sufren daño psíquico = mod. CAR (mín. 1). Debes ver al objetivo maldito y estar a 30 pies o menos de él. • Esbirros del Caos (Minions of Chaos) [PHB; Nv.9]: lanzas Conjure Elemental una vez gastando un espacio de Brujo; no puedes repetirlo hasta un descanso largo. • Enfangar la Mente (Mire the Mind) [PHB; Nv.5]: lanzas Slow una vez gastando un espacio de Brujo; no puedes repetirlo hasta un descanso largo. • Protección del Talismán (Protection of the Talisman) [TCE; Nv.7, Pacto del Talismán]: cuando quien lleva tu talismán falla una tirada de salvación, puede sumar 1d4 a la tirada y convertirla en éxito; usos = comp.; recuperas todos con un descanso largo. • Reprensión del Talismán (Rebuke of the Talisman) [TCE; Pacto del Talismán]: cuando un atacante que veas a 30 pies de ti impacta a quien lleva tu talismán, puedes usar tu reacción para infligirle daño psíquico = bonificador de competencia y empujarlo hasta 10 pies lejos del portador. • Maleficio Implacable (Relentless Hex) [XGtE; Nv.7, conjuro Hex o rasgo de Brujo que maldiga]: como Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas a 5 pies del objetivo maldito por tu Hex o por un rasgo de Brujo; debes ver al objetivo maldito. • Escultor de Carne (Sculptor of Flesh) [PHB; Nv.7]: lanzas Polymorph una vez gastando un espacio de Brujo; no puedes repetirlo hasta un descanso largo. • Sudario de Sombra (Shroud of Shadow) [XGtE; Nv.15]: lanzas Invisibility a voluntad. • Signo de Mal Agüero (Sign of Ill Omen) [PHB; Nv.5]: lanzas Bestow Curse una vez gastando un espacio de Brujo; no puedes repetirlo hasta un descanso largo. • Ladrón de los Cinco Destinos (Thief of Five Fates) [PHB]: lanzas Bane una vez gastando un espacio de Brujo; no puedes repetirlo hasta un descanso largo. • Tumba de Levistus (Tomb of Levistus) [XGtE; Nv.5]: como reacción al recibir daño te encierras en hielo, que se derrite al final de tu siguiente turno; ganas 10 PG temporales por nivel de Brujo, que absorben todo el daño posible del golpe que lo activó. Justo después de recibir ese daño tienes vulnerabilidad al daño de fuego, Velocidad 0 y estás Incapacitado; esos efectos (y los PG temporales que queden) terminan cuando el hielo se derrite. Una vez por descanso corto o Largo. • Escape del Embaucador (Trickster's Escape) [XGtE; Nv.7]: lanzas Freedom of Movement sobre ti una vez sin gastar espacio; la recuperas con un descanso largo. • Servidumbre Eterna (Undying Servitude) [TCE; Nv.5]: lanzas Animate Dead sin gastar espacio; no puedes volver a hacerlo así hasta un descanso largo. • Voz del Maestro de la Cadena (Voice of the Chain Master) [PHB; Pacto de la Cadena]: te comunicas telepáticamente con tu familiar y percibes a través de sus sentidos mientras estéis en el mismo plano; al hacerlo también puedes hablar a través de él con tu propia voz, aunque normalmente no pueda hablar. Versiones de 2014 distintas de las de 2024: Explosión Agónica (Agonizing Blast), Lanza Sobrenatural (Eldritch Spear) y Explosión Repelente (Repelling Blast) exigen conocer Eldritch Blast y solo la afectan (suma mod. CAR al daño / alcance 300 pies / al impactar empujas a la criatura hasta 10 pies, sin límite de tamaño). Visión del Diablo (Devil's Sight): sin requisito; ves con normalidad en la oscuridad mágica y no mágica hasta 120 pies. Conjuros a voluntad: Armadura de Sombras (Mage Armor sobre ti, sin componentes materiales), Vigor Infernal (False Life sobre ti como conjuro de nivel 1, sin componentes materiales), Máscara de Mil Rostros (Disguise Self), Visiones Brumosas (Silent Image, sin componentes materiales), Salto Sobrenatural (Jump sobre ti, sin componentes materiales; Nv.9), Susurros de la Tumba (Speak with Dead; Nv.9), Paso Ascendente (Levitate sobre ti, sin componentes materiales; Nv.9), Maestro de Mil Formas (Alter Self; Nv.15), Visiones de Reinos Lejanos (Arcane Eye; Nv.15). Visión de la Bruja (Witch Sight, Nv.15): ves la forma verdadera de cambiaformas y de criaturas ocultas por magia de ilusión o transmutación a 30 pies en línea de visión. Mirada de Dos Mentes (Gaze of Two Minds): con tu acción tocas a un humanoide voluntario y percibes con sus sentidos hasta el final de tu siguiente turno (acción en cada turno posterior para mantenerlo); quedas Ciego y Sordo respecto a tu entorno. Uno con las Sombras (One with Shadows, Nv.5): en Luz Tenue u Oscuridad, con tu acción te vuelves Invisible hasta que te muevas o hagas una acción o reacción. Hoja Sedienta (Thirsting Blade, Nv.5, Pacto de la Hoja): atacas dos veces con tu arma de pacto al hacer la acción de Atacar. Sorbevidas (Lifedrinker, Nv.12, Pacto de la Hoja): al impactar con tu arma de pacto, daño necrótico adicional = mod. CAR (mín. 1). Castigo Sobrenatural (Eldritch Smite) [XGtE; Nv.5, Pacto de la Hoja]: como en 2024, gastando un espacio de conjuro de Brujo. Don de las Profundidades (Gift of the Depths) [XGtE; Nv.5]: nadas a tu Velocidad caminando y lanzas Water Breathing una vez sin espacio hasta un descanso largo. Don de los Protectores (Gift of the Protectors) [TCE; Nv.9, Pacto del Tomo]: nombres = bonificador de competencia; escribir y borrar un nombre cuesta una acción. Inversión del Maestro de la Cadena (Investment of the Chain Master) [TCE; Pacto de la Cadena]: sin requisito de nivel; los ataques con arma del familiar cuentan como mágicos (no puede infligir daño necrótico o radiante)."
    },
    {
      n: "Subclase de Brujo (Patrón Sobrenatural)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6, 10 y 14 y conjuros que siempre tienes preparados. [2014: Patrón Sobrenatural, se elige en Nv.1]"
    },
    {
      n: "Dádiva del Pacto (Pact Boon)",
      nv: 3,
      d: "[Sólo 2014] Tu patrón te da una dádiva: Pacto de la Cadena (aprendes Find Familiar y lo lanzas como ritual sin que cuente para tus conjuros conocidos; formas especiales: diablillo, pseudodragón, quasit o sprite; al hacer la acción de Atacar puedes renunciar a uno de tus ataques para que tu familiar haga un ataque con su reacción), Pacto de la Hoja (creas un arma de pacto como acción; eres competente con ella, cuenta como mágica y puedes vincular un arma mágica), Pacto del Tomo (Libro de las Sombras con 3 trucos de cualquier clase), Pacto del Talismán [TCE] (amuleto: el portador suma 1d4 a una prueba de característica fallida; comp. veces por descanso largo). [2024: son invocaciones]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra en Nv.19]"
    },
    {
      n: "Versatilidad Sobrenatural (Eldritch Versatility)",
      nv: 4,
      d: "[Sólo 2014, opcional de TCE] Al alcanzar un nivel de Brujo que concede Mejora de Característica, puedes hacer una de estas cosas: cambiar un truco aprendido con Magia de Pacto por otro truco de la lista de Brujo; cambiar la opción elegida para la Dádiva del Pacto por otra de sus opciones; o, si eres de Nv.12+, cambiar un conjuro de Arcano Místico por otro conjuro de Brujo del mismo nivel. Si este cambio hace que dejes de cumplir los requisitos de alguna de tus invocaciones, debes cambiarlas también por otras para las que cumplas requisitos."
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
      d: "Eliges un conjuro de Brujo de nivel 6 como arcano: puedes lanzarlo una vez sin gastar espacio por descanso largo. Ganas otro arcano en Nv.13 (nivel 7), Nv.15 (nivel 8) y Nv.17 (nivel 9). Al subir de nivel puedes cambiar un arcano por otro del mismo nivel. [2014: no se puede cambiar un arcano, salvo con el rasgo opcional Versatilidad Sobrenatural de TCE]"
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
        d: "Aprendes el truco Spare the Dying (no cuenta para tu límite) y tienes ventaja en salvaciones contra enfermedades. Si un no-muerto te elige directamente como objetivo de un ataque o conjuro dañino, debe superar una salvación de SAB (tu CD) o elegir otro objetivo/perder el ataque; si la supera, es inmune a este efecto 24 horas. No protege contra efectos de área. Un no-muerto también es inmune a este efecto 24 horas si tú lo eliges como objetivo de un ataque o conjuro dañino."
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
        d: "Eliges tipo de genio (Dao, Djinni, Efreeti o Marid) y se añaden a la lista del Brujo — Nv.1: Detect Evil and Good + (Dao: Sanctuary; Djinni: Thunderwave; Efreeti: Burning Hands; Marid: Fog Cloud). Nv.2: Phantasmal Force + (Spike Growth; Gust of Wind; Scorching Ray; Blur). Nv.3: Create Food and Water + (Meld into Stone; Wind Wall; Fireball; Sleet Storm). Nv.4: Phantasmal Killer + (Stone Shape; Greater Invisibility; Fire Shield; Control Water). Nv.5: Creation + (Wall of Stone; Seeming; Flame Strike; Cone of Cold). Nv.9: Wish (para todos los tipos de genio; se puede elegir como Arcano Místico de Nv.17)."
      },
      {
        n: "Vasija del Genio (Genie's Vessel)",
        nv: 1,
        a: "AB",
        d: "Recibes una vasija Diminuta que sirve de foco de conjuros (CA = tu CD de conjuros; PG = nivel de Brujo + comp.; inmune a veneno y psíquico). Reposo en la Botella (Bottled Respite): como acción entras en la vasija (espacio extradimensional cilíndrico de 20 pies de radio y 20 de alto) hasta 2 × comp. horas, oyendo el exterior; sales antes con una Acción Adicional, si mueres o si la vasija es destruida, y apareces en el espacio libre más cercano. Una vez que entras, no puedes volver a entrar hasta terminar un descanso largo. Ira del Genio (Genie's Wrath): una vez por turno al impactar con un ataque infliges daño adicional = comp. (Dao: contundente; Djinni: trueno; Efreeti: fuego; Marid: frío). Si la vasija se destruye o la pierdes, una ceremonia de 1 hora (en un descanso corto o largo) te da otra y destruye la anterior; la vasija se desvanece si mueres."
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
        a: "BO",
        d: "Al entrar en tu vasija con Reposo en la Botella puedes llevar hasta 5 criaturas voluntarias que veas a 30 pies. Como Acción Adicional puedes expulsar a cualquier número de criaturas de la vasija; todos salen si tú sales o mueres o si la vasija es destruida. Quien permanezca (tú incluido) 10 minutos o más obtiene los beneficios de un descanso corto y suma tu comp. a los PG que recupere al gastar Dados de Golpe allí."
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
        d: "Se añaden a la lista de conjuros del Brujo — Nv.1: Create or Destroy Water, Thunderwave. Nv.2: Gust of Wind, Silence. Nv.3: Lightning Bolt, Sleet Storm. Nv.4: Control Water, Summon Elemental (solo agua). Nv.5: Bigby's Hand (en forma de tentáculo), Cone of Cold."
      },
      {
        n: "Tentáculo de las Profundidades (Tentacle of the Deeps)",
        nv: 1,
        a: "B",
        d: "Como Acción Adicional creas un tentáculo espectral de 10 pies en un punto que veas a 60 pies (dura 1 minuto o hasta que crees otro). Al crearlo puedes hacer un ataque cuerpo a cuerpo de conjuro contra una criatura a 10 pies del tentáculo; como Acción Adicional en tus turnos puedes moverlo 30 pies y repetir el ataque. Impacto: 1d8 de frío (2d8 en Nv.10) y la Velocidad del objetivo baja 10 pies hasta el inicio de tu siguiente turno. Usos = comp.; se recuperan con un descanso largo."
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
        d: "Aprendes Evard's Black Tentacles (cuenta como conjuro de Brujo, pero no cuenta para tu número de conjuros conocidos); puedes lanzarlo una vez sin espacio por descanso largo. Cada vez que lo lanzas ganas PG temporales = nivel de Brujo, y el daño no puede romper tu concentración en este conjuro."
      },
      {
        n: "Zambullida Insondable (Fathomless Plunge)",
        nv: 14,
        a: "A",
        d: "Como acción, tú y hasta 5 criaturas voluntarias a 30 pies os teletransportáis hasta 1 milla a una masa de agua que hayas visto (del tamaño de un estanque o mayor) o a 30 pies de ella; cada uno aparece en un espacio libre a 30 pies de los demás. Una vez por descanso corto o largo."
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
        d: "No necesitas comer, beber ni respirar. Una vez por turno, cuando impactas a una criatura con una tirada de ataque (también de conjuro) y tiras daño contra ella, puedes cambiar el tipo de ese daño a necrótico; durante Forma de Terror, tiras 1 dado de daño adicional al calcular ese daño necrótico."
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
        d: "Como acción proyectas tu espíritu fuera de tu cuerpo; el cuerpo queda inconsciente en animación suspendida, tu espíritu replica tus estadísticas (no tus posesiones) y cualquier daño o efecto sobre uno afecta al otro. Dura hasta 1 hora o hasta que se rompa tu concentración; al terminar, tu espíritu vuelve al cuerpo o el cuerpo se teletransporta al espacio de tu espíritu (a tu elección). Mientras proyectas: tu espíritu y tu cuerpo tienen resistencia al daño contundente, perforante y cortante; lanzas conjuros de conjuración o nigromancia sin componentes verbales, somáticos ni materiales sin coste en oro; tienes Velocidad de vuelo = tu Velocidad (puedes flotar) y puedes atravesar criaturas u objetos como terreno difícil, pero sufres 1d10 de fuerza si terminas tu turno dentro de uno; y, mientras usas Forma de Terror, una vez por turno cuando infliges daño necrótico a una criatura recuperas PG = la mitad de ese daño. Una vez por descanso largo."
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
        d: "Una vez por turno, tras impactar con una tirada de ataque, obligas al objetivo a una salvación de CAR (tu CD): si falla, desaparece y es lanzado a través de los planos inferiores; sufre 8d10 de daño psíquico si no es un infernal y queda Incapacitado hasta el final de tu siguiente turno, cuando regresa al espacio que ocupaba (o al libre más cercano). Una vez por descanso largo, o gastando un espacio de Pacto (sin acción)."
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
        d: "Puedes lanzar Misty Step sin gastar espacio mod. CAR veces (mínimo 1) por descanso largo. Además, siempre que lances ese conjuro (con o sin espacio) puedes elegir un efecto adicional: Paso Reconfortante: justo después de teletransportarte, tú o una criatura que veas a 10 pies de ti (a tu elección) gana 1d10 PG temporales. Paso Provocador: las criaturas a 5 pies del espacio que dejaste deben superar una salvación de SAB (tu CD) o tener desventaja en ataques contra criaturas que no seas tú hasta el inicio de tu siguiente turno."
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
        d: "Inmunidad a Hechizado. Además, justo después de que una criatura que veas te impacte con una tirada de ataque, puedes usar tu reacción para reducir el daño que sufres a la mitad (redondeado hacia abajo) y obligar al atacante a una salvación de SAB (tu CD): si falla, sufre daño psíquico igual al daño que sufres tras la reducción. Una vez por descanso largo, o gastando un espacio de Pacto (sin acción)."
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
        d: "Como Acción Adicional eliges una criatura que veas a 30 pies: podéis comunicaros telepáticamente mientras estéis a una distancia en millas = mod. CAR (mínimo 1); para entenderos, ambos debéis usar mentalmente un idioma que el otro conozca. Dura minutos = nivel de Brujo y termina antes si conectas con otra criatura."
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
        d: "Resistencia al daño radiante. Una vez por turno, cuando un conjuro que lanzas inflige daño radiante o de fuego, sumas tu mod. CAR al daño de ese conjuro contra uno de sus objetivos."
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
        d: "Cuando tú o un aliado a 60 pies de ti vais a hacer una salvación de muerte, puedes liberar energía radiante para salvar a la criatura: recupera PG = la mitad de sus PG máximos y puede terminar la condición Tumbado. Las criaturas de tu elección a 30 pies de esa criatura sufren 2d8 + mod. CAR de daño radiante y quedan Cegadas hasta el final del turno actual. Una vez por descanso largo."
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
        d: "Necrosis Arcana: el daño necrótico de tus ataques, de tus conjuros de Brujo y de tus rasgos de Brujo ignora la resistencia al daño necrótico; una vez por turno, al lanzar un conjuro que inflige daño, puedes cambiar su tipo a necrótico. Necrosis Aterradora: al impactar a una criatura con una tirada de ataque e infligir daño necrótico mientras usas Forma de Terror, tiras 1 dado de daño adicional al calcular ese daño (una vez por turno). Resistencia de No-Muerto: no sufres agotamiento por deshidratación, desnutrición o asfixia, no necesitas dormir y la magia no puede obligarte a dormir."
      },
      {
        n: "Caparazón Necrótico (Necrotic Husk)",
        nv: 10,
        a: "O",
        d: "Resiliencia Necrótica: resistencia al daño necrótico (inmunidad mientras usas Forma de Terror). Resucitación Impía: si caes a 0 PG y no mueres de inmediato, puedes hacer que tu cuerpo estalle en energía letal: las criaturas de tu elección en una Emanación de 30 pies originada en ti hacen una salvación de CON (tu CD) o sufren 2d10 + mod. CAR de daño necrótico (mitad si superan); tus PG pasan a ser el doble de tu nivel de Brujo y ganas 1 nivel de agotamiento. Se recupera con un descanso corto o largo."
      },
      {
        n: "Pavor Superior (Superior Dread)",
        nv: 14,
        d: "Durante Forma de Terror: Resistencia al Pavor: resistencia al daño contundente, perforante y cortante. Vuelo Fantasmal: Velocidad de vuelo = tu Velocidad (flotas); moverte a través de criaturas u objetos es terreno difícil y sufres 1d10 de fuerza si terminas el turno dentro. Lanzamiento Profano: lanzas conjuros de conjuración o nigromancia de Brujo sin componentes verbales, somáticos ni materiales, salvo los materiales con coste o que se consumen."
      },
    ],
  },
};
