/* ══════════════════════════════════════════════════════════════════
   clerigo.js — Clérigo: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · DMG · SCAG · XGtE · TCE · PHB 2024 · HoF 2024 · THW 2024 · PSA
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (25 entradas):
     Dominio de la Vida                      [PHB 2014] / [PHB 2024]
     Dominio de la Luz                       [PHB 2014] / [PHB 2024]
     Dominio de la Naturaleza                [PHB 2014]
     Dominio de la Tempestad                 [PHB 2014]
     Dominio de la Guerra                    [PHB 2014] / [PHB 2024]
     Dominio del Conocimiento                [PHB 2014] / [HoF 2024] / [PSA]
     Dominio del Engaño                      [PHB 2014] / [PHB 2024]
     Dominio de la Muerte                    [DMG]
     Dominio Arcano                          [SCAG]
     Dominio de la Forja                     [XGtE]
     Dominio de las Tumbas                   [XGtE] / [THW 2024]
     Dominio de la Paz                       [TCE]
     Dominio del Orden                       [TCE]
     Dominio del Crepúsculo                  [TCE]
     Dominio de la Ambición                  [PSA]
     Dominio de la Solidaridad               [PSA]
     Dominio de la Fuerza                    [PSA]
     Dominio del Celo                        [PSA]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_CLERIGO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d8. Salvaciones: SAB y CAR. Armaduras: ligeras, medias y escudos. Armas: simples. Habilidades: elige 2 entre Historia, Perspicacia, Medicina, Persuasión y Religión."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador completo. SAB es tu característica de conjuros (CD = 8 + comp. + mod. SAB); puedes usar un símbolo sagrado como foco. Trucos: 3 (4 en Nv.4, 5 en Nv.10); cada vez que ganas un nivel de Clérigo puedes sustituir uno de tus trucos por otro truco de la lista de Clérigo [2014: solo con la opción de TCE Versatilidad de Trucos]. Preparas conjuros de la lista de Clérigo: 4 en Nv.1 (5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22 en Nv.2-20); al terminar un Descanso Largo puedes cambiar tu lista de conjuros preparados, sustituyendo cualquiera de ellos por otros conjuros de Clérigo de un nivel para el que tengas espacios. [2014: preparas SAB + nivel de Clérigo conjuros (mín. 1) de la lista completa y puedes cambiar la lista entera al terminar un descanso largo; puedes lanzar como ritual un conjuro de Clérigo con la etiqueta ritual si lo tienes preparado]"
    },
    {
      n: "Orden Divino (Divine Order)",
      nv: 1,
      d: "Eliges un papel sagrado. Protector: competencia con armas marciales y entrenamiento con armadura pesada. Taumaturgo: conoces 1 truco más de Clérigo y sumas tu mod. SAB (mínimo +1) a tus pruebas de INT (Arcanos o Religión). [Sólo 2024; en 2014 el dominio se elige en Nv.1]"
    },
    {
      n: "Dominio Divino (Divine Domain)",
      nv: 1,
      d: "[Sólo 2014] Eliges un Dominio (subclase) al Nv.1; concede conjuros de dominio siempre preparados y rasgos en Nv.1, 2, 6, 8 y 17. [2024: la subclase se elige en Nv.3]"
    },
    {
      n: "Canalizar Divinidad (Channel Divinity)",
      nv: 2,
      d: "Canalizas energía divina de los Planos Exteriores. Usos: 2 (3 en Nv.6, 4 en Nv.18); recuperas 1 uso con un descanso corto y todos con uno largo. Opciones de clase: Chispa Divina y Expulsar No-Muertos; tu subclase añade más. [2014: 1 uso (2 en Nv.6, 3 en Nv.18) que se recupera con un descanso corto o largo]"
    },
    {
      n: "Chispa Divina (Divine Spark)",
      nv: 2,
      a: "A",
      d: "Como acción Mágica apuntas tu símbolo sagrado a una criatura que veas a 30 pies: tiras 1d8 + mod. SAB (2d8 en Nv.7, 3d8 en Nv.13, 4d8 en Nv.18) y o bien le restauras esos PG o la obligas a una salvación de CON; si falla sufre ese daño necrótico o radiante (a tu elección), la mitad si la supera. Gasta un uso de Canalizar Divinidad. [Sólo 2024]"
    },
    {
      n: "Expulsar No-Muertos (Turn Undead)",
      nv: 2,
      a: "A",
      d: "Como acción Mágica presentas tu símbolo sagrado: cada no-muerto de tu elección a 30 pies hace una salvación de SAB; si falla queda Asustado e Incapacitado 1 minuto y huye de ti lo más lejos que pueda. El efecto termina si recibe daño, si quedas Incapacitado o si mueres. Gasta un uso de Canalizar Divinidad. [2014: cada no-muerto que pueda verte u oírte hace la salvación; si falla queda Expulsado 1 minuto o hasta recibir daño: gasta sus turnos alejándose de ti lo más posible, no puede moverse voluntariamente a un espacio a 30 pies de ti ni usar reacciones, y como acción sólo puede Correr o intentar escapar de un efecto que le impida moverse (si no puede moverse, puede Esquivar)]"
    },
    {
      n: "Canalizar Divinidad: Aprovechar Poder Divino (Harness Divine Power)",
      nv: 2,
      a: "B",
      d: "[Sólo 2014, opcional de TCE] Puedes gastar un uso de Canalizar Divinidad para alimentar tus conjuros. Como Acción Adicional tocas tu símbolo sagrado, pronuncias una oración y recuperas un espacio de conjuro gastado de nivel igual o inferior a la mitad de tu bonificador de competencia (redondeado hacia arriba). Veces que puedes usarlo: 1 en Nv.2, 2 en Nv.6, 3 en Nv.18; recuperas todos los usos con un Descanso Largo."
    },
    {
      n: "Subclase de Clérigo (Dominio Divino)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6 y 17 y conjuros que siempre tienes preparados. [2014: Dominio Divino, se elige en Nv.1]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Versatilidad de Trucos (Cantrip Versatility)",
      nv: 4,
      d: "[Sólo 2014, opcional de TCE] Cada vez que alcanzas un nivel de Clérigo que concede Mejora de Característica, puedes sustituir un truco aprendido con Lanzamiento de Conjuros por otro truco de la lista de Clérigo."
    },
    {
      n: "Fulgor contra No-Muertos (Sear Undead)",
      nv: 5,
      d: "Cuando usas Expulsar No-Muertos tiras mod. SAB d8 (mínimo 1) y cada no-muerto que falle la salvación sufre ese daño radiante total (sin acabar el efecto). [2014: Destruir No-Muertos: los no-muertos que fallen la salvación son destruidos si su CR ≤ 1/2 (1 en Nv.8, 2 en Nv.11, 3 en Nv.14, 4 en Nv.17)]"
    },
    {
      n: "Golpes Bendecidos (Blessed Strikes)",
      nv: 7,
      d: "Eliges una opción (si una subclase de un libro anterior te da alguna de estas dos opciones, usa solo la que elijas con este rasgo). Golpe Divino: una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño necrótico o radiante adicional (a tu elección). Lanzamiento Potente: sumas tu mod. SAB al daño de tus trucos de Clérigo. [2014: Golpe Divino (Nv.8) o Lanzamiento Potente (Nv.8) los concede el dominio]"
    },
    {
      n: "Golpes Bendecidos de TCE (Blessed Strikes)",
      nv: 8,
      d: "[Sólo 2014, opcional de TCE] En Nv.8 puedes sustituir el Golpe Divino o el Lanzamiento Potente de tu dominio por Golpes Bendecidos: cuando una criatura sufre daño de uno de tus trucos o de un ataque con arma, puedes infligirle además 1d8 de daño radiante; una vez infligido, no puedes volver a usarlo hasta el inicio de tu siguiente turno."
    },
    {
      n: "Intervención Divina (Divine Intervention)",
      nv: 10,
      a: "A",
      d: "Como acción Mágica eliges un conjuro de Clérigo de nivel 5 o inferior que no requiera reacción y lo lanzas sin gastar espacio ni componentes materiales. No puedes volver a usarlo hasta un descanso largo. [2014: imploras ayuda a tu deidad como acción: tiras d100; si sacas ≤ tu nivel de Clérigo, el DM elige la intervención; si tiene éxito, no puedes usarlo en 7 días (si no, tras un descanso largo); en Nv.20 es éxito automático]"
    },
    {
      n: "Golpes Bendecidos Mejorados (Improved Blessed Strikes)",
      nv: 14,
      d: "Golpe Divino: el daño adicional pasa a 2d8. Lanzamiento Potente: cuando lanzas un truco de Clérigo y dañas a una criatura, puedes dar PG temporales = el doble de tu mod. SAB a ti o a otra criatura a 60 pies. [Sólo 2024]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Intervención Divina Mayor (Greater Divine Intervention)",
      nv: 20,
      d: "Al usar Intervención Divina puedes elegir Wish; si lo haces, no puedes volver a usar Intervención Divina hasta terminar 2d4 descansos largos. [Sólo 2024; en 2014 la Intervención Divina tiene éxito automático]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Dominio de la Vida [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Bless, Cure Wounds. Nv.3: Lesser Restoration, Spiritual Weapon. Nv.5: Beacon of Hope, Revivify. Nv.7: Death Ward, Guardian of Faith. Nv.9: Mass Cure Wounds, Raise Dead."
      },
      {
        n: "Competencia Adicional",
        nv: 1,
        d: "Ganas competencia con armadura pesada."
      },
      {
        n: "Discípulo de la Vida (Disciple of Life)",
        nv: 1,
        d: "Cuando un conjuro de nivel 1 o superior restaura PG a una criatura, ésta recupera PG adicionales = 2 + nivel del conjuro."
      },
      {
        n: "Canalizar Divinidad: Preservar Vida (Preserve Life)",
        nv: 2,
        a: "A",
        d: "Como acción presentas tu símbolo sagrado y repartes hasta 5 × nivel de Clérigo PG entre criaturas a 30 pies; ninguna puede quedar con más de la mitad de sus PG máximos. No sirve con no-muertos ni constructos."
      },
      {
        n: "Sanador Bendecido (Blessed Healer)",
        nv: 6,
        d: "Cuando lanzas un conjuro de nivel 1+ que restaura PG a otra criatura, recuperas PG = 2 + nivel del conjuro."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño radiante adicional (2d8 en Nv.14)."
      },
      {
        n: "Curación Suprema (Supreme Healing)",
        nv: 17,
        d: "Cuando tirarías dados para restaurar PG con un conjuro, usas el valor máximo de cada dado."
      },
    ],

    "Dominio de la Luz [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Burning Hands, Faerie Fire. Nv.3: Flaming Sphere, Scorching Ray. Nv.5: Daylight, Fireball. Nv.7: Guardian of Faith, Wall of Fire. Nv.9: Flame Strike, Scrying."
      },
      {
        n: "Truco Adicional",
        nv: 1,
        d: "Aprendes el truco Light (no cuenta para tu límite)."
      },
      {
        n: "Fulgor Protector (Warding Flare)",
        nv: 1,
        a: "R",
        d: "Cuando una criatura que veas a 30 pies te ataca, puedes usar tu reacción para imponerle desventaja en la tirada (las criaturas inmunes a Cegado no se ven afectadas). Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Canalizar Divinidad: Resplandor del Alba (Radiance of the Dawn)",
        nv: 2,
        a: "A",
        d: "Como acción presentas tu símbolo sagrado, disipas la oscuridad mágica a 30 pies y las criaturas hostiles en esa área hacen una salvación de CON: sufren 2d10 + nivel de Clérigo de daño radiante (mitad si superan). Las criaturas con cobertura total no se ven afectadas."
      },
      {
        n: "Fulgor Mejorado (Improved Flare)",
        nv: 6,
        a: "R",
        d: "Puedes usar Fulgor Protector también cuando una criatura a 30 pies ataca a una criatura distinta de ti."
      },
      {
        n: "Lanzamiento Potente (Potent Spellcasting)",
        nv: 8,
        d: "Sumas tu mod. SAB al daño de tus trucos de Clérigo."
      },
      {
        n: "Corona de Luz (Corona of Light)",
        nv: 17,
        a: "A",
        d: "Como acción activas una aura de luz solar durante 1 minuto (o hasta que la termines): luz brillante en 60 pies y tenue 30 pies más. Tus enemigos en la luz brillante tienen desventaja en las salvaciones contra tus conjuros de daño de fuego o radiante."
      },
    ],

    "Dominio de la Naturaleza [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Animal Friendship, Speak with Animals. Nv.3: Barkskin, Spike Growth. Nv.5: Plant Growth, Wind Wall. Nv.7: Dominate Beast, Grasping Vine. Nv.9: Insect Plague, Tree Stride."
      },
      {
        n: "Acólito de la Naturaleza (Acolyte of Nature)",
        nv: 1,
        d: "Aprendes un truco de Druida (cuenta como de Clérigo y no cuenta para tu límite) y ganas competencia en Trato con Animales, Naturaleza o Supervivencia (elige una)."
      },
      {
        n: "Competencia Adicional",
        nv: 1,
        d: "Ganas competencia con armadura pesada."
      },
      {
        n: "Canalizar Divinidad: Hechizar Animales y Plantas (Charm Animals and Plants)",
        nv: 2,
        a: "A",
        d: "Como acción presentas tu símbolo sagrado e invocas el nombre de tu deidad: cada bestia o planta que pueda verte a 30 pies hace una salvación de SAB; si falla queda Hechizada por ti 1 minuto (o hasta recibir daño) y es amistosa contigo y con las criaturas que designes."
      },
      {
        n: "Atenuar Elementos (Dampen Elements)",
        nv: 6,
        a: "R",
        d: "Cuando tú o una criatura a 30 pies recibe daño de ácido, frío, fuego, rayo o trueno, puedes usar tu reacción para otorgarle resistencia a ese daño."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño de frío, fuego o rayo adicional (a tu elección); 2d8 en Nv.14."
      },
      {
        n: "Señor de la Naturaleza (Master of Nature)",
        nv: 17,
        a: "B",
        d: "Mientras criaturas sigan Hechizadas por Hechizar Animales y Plantas, puedes usar una Acción Adicional para ordenarles verbalmente qué hacer en su siguiente turno."
      },
    ],

    "Dominio de la Tempestad [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Fog Cloud, Thunderwave. Nv.3: Gust of Wind, Shatter. Nv.5: Call Lightning, Sleet Storm. Nv.7: Control Water, Ice Storm. Nv.9: Destructive Wave, Insect Plague."
      },
      {
        n: "Competencias Adicionales",
        nv: 1,
        d: "Ganas competencia con armas marciales y armadura pesada."
      },
      {
        n: "Ira de la Tormenta (Wrath of the Storm)",
        nv: 1,
        a: "R",
        d: "Cuando una criatura a 5 pies que veas te impacta con un ataque, puedes usar tu reacción para que haga una salvación de DES: sufre 2d8 de daño de rayo o trueno (a tu elección), la mitad si la supera. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Canalizar Divinidad: Ira Destructiva (Destructive Wrath)",
        nv: 2,
        a: "O",
        d: "Cuando tiras daño de rayo o trueno, puedes usar Canalizar Divinidad para infligir el daño máximo en lugar de tirar."
      },
      {
        n: "Golpe Atronador (Thunderous Strike)",
        nv: 6,
        d: "Cuando infliges daño de rayo a una criatura Grande o menor, puedes empujarla hasta 10 pies lejos de ti."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño de trueno adicional (2d8 en Nv.14)."
      },
      {
        n: "Nacido de la Tormenta (Stormborn)",
        nv: 17,
        d: "Tienes Velocidad de vuelo igual a tu Velocidad actual siempre que no estés bajo tierra ni en interior."
      },
    ],

    "Dominio de la Guerra [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Divine Favor, Shield of Faith. Nv.3: Magic Weapon, Spiritual Weapon. Nv.5: Crusader's Mantle, Spirit Guardians. Nv.7: Freedom of Movement, Stoneskin. Nv.9: Flame Strike, Hold Monster."
      },
      {
        n: "Competencias Adicionales",
        nv: 1,
        d: "Ganas competencia con armas marciales y armadura pesada."
      },
      {
        n: "Sacerdote de Guerra (War Priest)",
        nv: 1,
        a: "B",
        d: "Cuando realizas la acción de Atacar, puedes hacer un ataque con arma como Acción Adicional. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Canalizar Divinidad: Golpe Guiado (Guided Strike)",
        nv: 2,
        a: "O",
        d: "Cuando haces una tirada de ataque, puedes usar Canalizar Divinidad para sumarle +10 (tras ver la tirada, antes de saber si impacta)."
      },
      {
        n: "Canalizar Divinidad: Bendición del Dios de la Guerra (War God's Blessing)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura a 30 pies hace una tirada de ataque, puedes usar tu reacción y Canalizar Divinidad para darle +10 (tras ver la tirada)."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño adicional del mismo tipo que el arma (2d8 en Nv.14)."
      },
      {
        n: "Avatar de la Batalla (Avatar of Battle)",
        nv: 17,
        d: "Resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      },
    ],

    "Dominio del Conocimiento [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Command, Identify. Nv.3: Augury, Suggestion. Nv.5: Nondetection, Speak with Dead. Nv.7: Arcane Eye, Confusion. Nv.9: Legend Lore, Scrying."
      },
      {
        n: "Bendiciones del Conocimiento (Blessings of Knowledge)",
        nv: 1,
        d: "Aprendes 2 idiomas a tu elección y ganas competencia en 2 habilidades entre Arcanos, Historia, Naturaleza y Religión; tu bonificador de competencia se duplica en ellas."
      },
      {
        n: "Canalizar Divinidad: Conocimiento de las Eras (Knowledge of the Ages)",
        nv: 2,
        a: "A",
        d: "Como acción eliges una habilidad o herramienta: durante 10 minutos tienes competencia en ella."
      },
      {
        n: "Canalizar Divinidad: Leer Pensamientos (Read Thoughts)",
        nv: 6,
        a: "A",
        d: "Como acción eliges una criatura que veas a 60 pies: hace una salvación de SAB. Si la supera, no puedes volver a usar este rasgo contra ella hasta un descanso largo. Si falla, durante 1 minuto lees sus pensamientos superficiales mientras esté a 60 pies, y puedes usar tu acción para terminar este efecto y lanzar Suggestion sobre ella sin gastar espacio (falla automáticamente la salvación contra ese conjuro)."
      },
      {
        n: "Lanzamiento Potente (Potent Spellcasting)",
        nv: 8,
        d: "Sumas tu mod. SAB al daño de tus trucos de Clérigo."
      },
      {
        n: "Visiones del Pasado (Visions of the Past)",
        nv: 17,
        a: "O",
        d: "Dedicas al menos 1 minuto a meditar y rezar y recibes visiones oníricas y sombrías de sucesos recientes; puedes meditar tantos minutos como tu puntuación de SAB, manteniendo concentración como con un conjuro. Una vez por descanso corto o largo. Lectura de objeto: sosteniendo un objeto, tras 1 minuto ves a su anterior propietario y sabes cómo lo obtuvo y lo perdió y el suceso importante más reciente que los involucró; si lo tuvo otra criatura en los últimos días (hasta tu SAB), gastas 1 minuto adicional por cada propietario para saber lo mismo. Lectura de zona: ves sucesos recientes en tu entorno inmediato (sala, calle, túnel, claro…, hasta un cubo de 50 pies) de hasta tantos días atrás como tu SAB; por cada minuto conoces un suceso importante, empezando por el más reciente."
      },
    ],

    "Dominio del Engaño [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Charm Person, Disguise Self. Nv.3: Mirror Image, Pass without Trace. Nv.5: Blink, Dispel Magic. Nv.7: Dimension Door, Polymorph. Nv.9: Dominate Person, Modify Memory."
      },
      {
        n: "Bendición del Embaucador (Blessing of the Trickster)",
        nv: 1,
        a: "A",
        d: "Como acción tocas a otra criatura voluntaria: tiene ventaja en pruebas de DES (Sigilo) durante 1 hora o hasta que uses este rasgo de nuevo."
      },
      {
        n: "Canalizar Divinidad: Invocar Duplicidad (Invoke Duplicity)",
        nv: 2,
        a: "A",
        d: "Como acción creas una ilusión perfecta de ti a 30 pies durante 1 minuto (concentración). Puedes moverla 30 pies como Acción Adicional (hasta 120 pies de ti) y lanzar conjuros desde su espacio usando tus sentidos. Tienes ventaja en las tiradas de ataque contra una criatura que vea la ilusión cuando tanto tú como la ilusión estáis a 5 pies de ella."
      },
      {
        n: "Canalizar Divinidad: Manto de Sombras (Cloak of Shadows)",
        nv: 6,
        a: "A",
        d: "Como acción te vuelves invisible hasta el final de tu siguiente turno (terminas si atacas o lanzas un conjuro)."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño de veneno adicional (2d8 en Nv.14)."
      },
      {
        n: "Duplicidad Mejorada (Improved Duplicity)",
        nv: 17,
        d: "Con Invocar Duplicidad creas hasta 4 duplicados en lugar de 1; puedes mover cualquier número de ellos hasta 30 pies como Acción Adicional (hasta 120 pies de ti)."
      },
    ],


    /* ── DMG ── */
    "Dominio de la Muerte [DMG]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: False Life, Ray of Sickness. Nv.3: Blindness/Deafness, Ray of Enfeeblement. Nv.5: Animate Dead, Vampiric Touch. Nv.7: Blight, Death Ward. Nv.9: Antilife Shell, Cloudkill."
      },
      {
        n: "Competencia Adicional",
        nv: 1,
        d: "Ganas competencia con armas marciales."
      },
      {
        n: "Segador (Reaper)",
        nv: 1,
        d: "Aprendes un truco de nigromancia de cualquier lista de conjuros. Cuando lanzas un truco de nigromancia que normalmente tiene un solo objetivo, puede afectar a dos criaturas dentro del alcance y a 5 pies entre sí."
      },
      {
        n: "Canalizar Divinidad: Toque de Muerte (Touch of Death)",
        nv: 2,
        a: "O",
        d: "Cuando impactas a una criatura con un ataque cuerpo a cuerpo, puedes usar Canalizar Divinidad para infligir 5 + el doble de tu nivel de Clérigo de daño necrótico adicional."
      },
      {
        n: "Destrucción Ineludible (Inescapable Destruction)",
        nv: 6,
        d: "El daño necrótico de tus conjuros de Clérigo y opciones de Canalizar Divinidad ignora la resistencia al daño necrótico."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño necrótico adicional (2d8 en Nv.14)."
      },
      {
        n: "Segador Mejorado (Improved Reaper)",
        nv: 17,
        d: "Cuando lanzas un conjuro de nigromancia de nivel 1 a 5 de un solo objetivo, puede afectar a dos criaturas a 5 pies entre sí (debes aportar los componentes materiales para cada objetivo si se consumen)."
      },
    ],


    /* ── SCAG ── */
    "Dominio Arcano [SCAG]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Detect Magic, Magic Missile. Nv.3: Magic Weapon, Nystul's Magic Aura. Nv.5: Dispel Magic, Magic Circle. Nv.7: Arcane Eye, Leomund's Secret Chest. Nv.9: Planar Binding, Teleportation Circle."
      },
      {
        n: "Iniciado Arcano (Arcane Initiate)",
        nv: 1,
        d: "Ganas competencia en Arcanos y 2 trucos de la lista de Mago, que cuentan como trucos de Clérigo."
      },
      {
        n: "Canalizar Divinidad: Abjuración Arcana (Arcane Abjuration)",
        nv: 2,
        a: "A",
        d: "Como acción presentas tu símbolo sagrado: un celestial, elemental, feérico o infernal de tu elección a 30 pies que pueda verte u oírte hace una salvación de SAB; si falla queda Expulsado 1 minuto (o hasta recibir daño): gasta sus turnos alejándose de ti lo más posible, no puede acabar voluntariamente su movimiento a 30 pies de ti ni usar reacciones, y como acción sólo puede Correr o intentar escapar de un efecto que le impida moverse (si no puede moverse, puede Esquivar). Desde Nv.5, si una criatura falla la salvación y no está en su plano de origen, además es desterrada 1 minuto (como el conjuro Banishment, sin concentración) cuando su CR es 1/2 o menos (1 en Nv.8, 2 en Nv.11, 3 en Nv.14, 4 en Nv.17)."
      },
      {
        n: "Rompehechizos (Spell Breaker)",
        nv: 6,
        d: "Cuando restauras PG a un aliado con un conjuro de nivel 1+, puedes terminar un conjuro de tu elección sobre esa criatura cuyo nivel no supere el del espacio gastado."
      },
      {
        n: "Lanzamiento Potente (Potent Spellcasting)",
        nv: 8,
        d: "Sumas tu mod. SAB al daño de tus trucos de Clérigo."
      },
      {
        n: "Maestría Arcana (Arcane Mastery)",
        nv: 17,
        d: "Eliges un conjuro de Mago de nivel 6, uno de nivel 7, uno de 8 y uno de 9; se añaden a tus conjuros de dominio (siempre preparados) y cuentan como conjuros de Clérigo."
      },
    ],


    /* ── XGtE ── */
    "Dominio de la Forja [XGtE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Identify, Searing Smite. Nv.3: Heat Metal, Magic Weapon. Nv.5: Elemental Weapon, Protection from Energy. Nv.7: Fabricate, Wall of Fire. Nv.9: Animate Objects, Creation."
      },
      {
        n: "Competencias Adicionales",
        nv: 1,
        d: "Ganas competencia con armadura pesada y herramientas de herrero."
      },
      {
        n: "Bendición de la Forja (Blessing of the Forge)",
        nv: 1,
        a: "O",
        d: "Al terminar un descanso largo tocas un arma simple o marcial no mágica o una armadura no mágica: hasta tu siguiente descanso largo es mágica y concede +1 a la CA (armadura) o +1 a ataque y daño (arma)."
      },
      {
        n: "Canalizar Divinidad: Bendición del Artesano (Artisan's Blessing)",
        nv: 2,
        a: "O",
        d: "Con un ritual de 1 hora y metal (puede incluir monedas) por el valor del objeto, creas un objeto no mágico que contenga metal: un arma simple o marcial, una armadura, diez piezas de munición, un juego de herramientas u otro objeto metálico, de valor máximo 100 po. Aparece en un espacio libre sobre una superficie a 5 pies de ti al terminar la hora. El metal se transforma de forma irreversible. Puede duplicar un objeto metálico no mágico (p. ej. una llave) si posees el original durante el ritual."
      },
      {
        n: "Alma de la Forja (Soul of the Forge)",
        nv: 6,
        d: "Resistencia al daño de fuego. Con armadura pesada, +1 a la CA."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño de fuego adicional (2d8 en Nv.14)."
      },
      {
        n: "Santo de la Forja y el Fuego (Saint of Forge and Fire)",
        nv: 17,
        d: "Inmunidad al daño de fuego. Con armadura pesada, resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      },
    ],

    "Dominio de las Tumbas [XGtE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Bane, False Life. Nv.3: Gentle Repose, Ray of Enfeeblement. Nv.5: Revivify, Vampiric Touch. Nv.7: Blight, Death Ward. Nv.9: Antilife Shell, Raise Dead."
      },
      {
        n: "Círculo de Mortalidad (Circle of Mortality)",
        nv: 1,
        a: "B",
        d: "Cuando tirarías dados para restaurar PG con un conjuro a una criatura con 0 PG, usas el valor máximo de cada dado. Además aprendes Spare the Dying (no cuenta para tu límite), con alcance de 30 pies y que puedes lanzar como Acción Adicional."
      },
      {
        n: "Ojos de la Tumba (Eyes of the Grave)",
        nv: 1,
        a: "A",
        d: "Como acción detectas no-muertos a 60 pies (no tras cobertura total ni protegidos contra adivinación) hasta el final de tu siguiente turno. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Canalizar Divinidad: Camino a la Tumba (Path to the Grave)",
        nv: 2,
        a: "A",
        d: "Como acción maldices a una criatura a 30 pies hasta el final de tu siguiente turno: el siguiente ataque de ti o de un aliado que le impacte la hace vulnerable al daño de ese ataque, y la maldición termina."
      },
      {
        n: "Centinela en el Umbral de la Muerte (Sentinel at Death's Door)",
        nv: 6,
        a: "R",
        d: "Como Reacción, cuando tú o una criatura que veas a 30 pies sufre un golpe crítico, puedes convertirlo en un impacto normal; se cancelan los efectos que active un golpe crítico. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Lanzamiento Potente (Potent Spellcasting)",
        nv: 8,
        d: "Sumas tu mod. SAB al daño de tus trucos de Clérigo."
      },
      {
        n: "Guardián de las Almas (Keeper of Souls)",
        nv: 17,
        d: "Cuando un enemigo que veas muere a 60 pies de ti, tú o una criatura de tu elección a 60 pies recupera PG = al número de Dados de Golpe del enemigo. Solo puedes usarlo si no estás Incapacitado. Una vez usado, no puedes volver a usarlo hasta el inicio de tu siguiente turno."
      },
    ],


    /* ── TCE ── */
    "Dominio de la Paz [TCE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Heroism, Sanctuary. Nv.3: Aid, Warding Bond. Nv.5: Beacon of Hope, Sending. Nv.7: Aura of Purity, Otiluke's Resilient Sphere. Nv.9: Greater Restoration, Rary's Telepathic Bond."
      },
      {
        n: "Herramienta de Paz (Implement of Peace)",
        nv: 1,
        d: "Ganas competencia en Perspicacia, Interpretación o Persuasión (elige una)."
      },
      {
        n: "Vínculo Envalentonador (Emboldening Bond)",
        nv: 1,
        a: "A",
        d: "Como acción eliges hasta comp. criaturas voluntarias a 30 pies: durante 10 minutos están vinculadas. Mientras estén a 30 pies entre sí pueden tirar 1d4 y sumarlo a una tirada de ataque, prueba o salvación (una vez por turno). Usos = comp.; se recuperan con un descanso largo."
      },
      {
        n: "Canalizar Divinidad: Bálsamo de Paz (Balm of Peace)",
        nv: 2,
        a: "A",
        d: "Como acción te mueves hasta tu Velocidad sin provocar ataques de oportunidad; cuando pasas a 5 pies de otra criatura puedes restaurarle 2d6 + mod. SAB PG (mínimo 1). Una criatura solo puede recibir esta curación una vez por cada vez que realizas esta acción."
      },
      {
        n: "Vínculo Protector (Protective Bond)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura vinculada recibe daño, otra criatura vinculada a 30 pies puede usar su reacción para teletransportarse a un espacio a 5 pies de la primera y recibir todo el daño."
      },
      {
        n: "Lanzamiento Potente (Potent Spellcasting)",
        nv: 8,
        d: "Sumas tu mod. SAB al daño de tus trucos de Clérigo."
      },
      {
        n: "Vínculo Expansivo (Expansive Bond)",
        nv: 17,
        d: "Vínculo Envalentonador y Vínculo Protector funcionan a 60 pies; quien use Vínculo Protector recibe resistencia al daño que absorbe."
      },
    ],

    "Dominio del Orden [TCE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Command, Heroism. Nv.3: Hold Person, Zone of Truth. Nv.5: Mass Healing Word, Slow. Nv.7: Compulsion, Locate Creature. Nv.9: Commune, Dominate Person."
      },
      {
        n: "Competencias Adicionales",
        nv: 1,
        d: "Ganas competencia con armadura pesada y en Intimidación o Persuasión (elige una)."
      },
      {
        n: "Voz de Autoridad (Voice of Authority)",
        nv: 1,
        a: "O",
        d: "Si lanzas un conjuro con espacio de nivel 1+ que tenga como objetivo a un aliado, éste puede usar su Reacción inmediatamente después para hacer un ataque con arma contra una criatura de tu elección que veas. Si el conjuro afecta a varios aliados, tú eliges cuál hace el ataque."
      },
      {
        n: "Canalizar Divinidad: Exigencia del Orden (Order's Demand)",
        nv: 2,
        a: "A",
        d: "Como acción presentas tu símbolo sagrado: cada criatura de tu elección que pueda verte u oírte a 30 pies hace una salvación de SAB o queda Hechizada hasta el final de tu siguiente turno (o hasta recibir daño); además puedes hacer que suelte lo que sostenga."
      },
      {
        n: "Encarnación de la Ley (Embodiment of the Law)",
        nv: 6,
        a: "O",
        d: "Si lanzas un conjuro de encantamiento de nivel 1+ con tiempo de lanzamiento de 1 acción, puedes lanzarlo como Acción Adicional. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño psíquico adicional (2d8 en Nv.14)."
      },
      {
        n: "Ira del Orden (Order's Wrath)",
        nv: 17,
        a: "O",
        d: "Si infliges daño de Golpe Divino a una criatura en tu turno, puedes maldecirla hasta el inicio de tu siguiente turno: el siguiente ataque de un aliado que le impacte le inflige 2d8 de daño psíquico adicional y termina la maldición. Sólo una vez por turno."
      },
    ],

    "Dominio del Crepúsculo [TCE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Faerie Fire, Sleep. Nv.3: Moonbeam, See Invisibility. Nv.5: Aura of Vitality, Leomund's Tiny Hut. Nv.7: Aura of Life, Greater Invisibility. Nv.9: Circle of Power, Mislead."
      },
      {
        n: "Competencias Adicionales",
        nv: 1,
        d: "Ganas competencia con armas marciales y armadura pesada."
      },
      {
        n: "Ojos de la Noche (Eyes of Night)",
        nv: 1,
        a: "A",
        d: "Visión en la oscuridad 300 pies (ves la luz tenue como brillante y la oscuridad como tenue). Como acción compartes esa visión 1 hora con hasta mod. SAB (mínimo 1) criaturas voluntarias a 10 pies; se recupera con un descanso largo o gastando un espacio de conjuro."
      },
      {
        n: "Bendición Vigilante (Vigilant Blessing)",
        nv: 1,
        a: "A",
        d: "Como acción das a una criatura que toques (puedes ser tú) ventaja en su siguiente tirada de iniciativa."
      },
      {
        n: "Canalizar Divinidad: Santuario del Crepúsculo (Twilight Sanctuary)",
        nv: 2,
        a: "A",
        d: "Como acción presentas tu símbolo sagrado: una esfera de crepúsculo de 30 pies de radio, centrada en ti y llena de luz tenue, te sigue durante 1 minuto o hasta que quedes Incapacitado o mueras. Al final de cada turno, cada criatura de tu elección en ella gana 1d6 + nivel de Clérigo PG temporales o termina un efecto de Hechizado o Asustado."
      },
      {
        n: "Pasos de la Noche (Steps of Night)",
        nv: 6,
        a: "B",
        d: "Cuando estás en luz tenue u oscuridad, como Acción Adicional ganas Velocidad de vuelo = tu Velocidad durante 1 minuto. Usos = comp. por descanso largo."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar con un ataque con arma, infliges 1d8 de daño radiante adicional (2d8 en Nv.14)."
      },
      {
        n: "Manto del Crepúsculo (Twilight Shroud)",
        nv: 17,
        d: "Tú y tus aliados tenéis cobertura media mientras estéis en la esfera de Santuario del Crepúsculo."
      },
    ],


    /* ── PHB 2024 ── */
    "Dominio de la Vida [PHB 2024]": [
      {
        n: "Discípulo de la Vida (Disciple of Life)",
        nv: 3,
        d: "Cuando un conjuro que lanzas con un espacio restaura PG a una criatura, ésta recupera PG adicionales en el turno en que lanzas el conjuro. Los PG adicionales = 2 + nivel del espacio."
      },
      {
        n: "Conjuros del Dominio de la Vida",
        nv: 3,
        d: "Siempre preparados — Nv.3: Aid, Bless, Cure Wounds, Lesser Restoration. Nv.5: Mass Healing Word, Revivify. Nv.7: Aura of Life, Death Ward. Nv.9: Greater Restoration, Mass Cure Wounds."
      },
      {
        n: "Preservar Vida (Preserve Life)",
        nv: 3,
        a: "A",
        d: "Como acción Mágica gastas un uso de Canalizar Divinidad: restauras PG = 5 × tu nivel de Clérigo, repartidos entre criaturas Malheridas (por debajo de la mitad de PG) a 30 pies (puedes incluirte); ninguna puede superar la mitad de sus PG máximos."
      },
      {
        n: "Sanador Bendecido (Blessed Healer)",
        nv: 6,
        d: "Justo después de lanzar un conjuro con espacio que restaura PG a una o más criaturas distintas de ti, recuperas PG = 2 + nivel del espacio."
      },
      {
        n: "Curación Suprema (Supreme Healing)",
        nv: 17,
        d: "Cuando tirarías dados para restaurar PG con un conjuro o Canalizar Divinidad, usas el valor máximo de cada dado."
      },
    ],

    "Dominio de la Luz [PHB 2024]": [
      {
        n: "Resplandor del Alba (Radiance of the Dawn)",
        nv: 3,
        a: "A",
        d: "Como acción Mágica gastas un uso de Canalizar Divinidad: emites luz en una Emanación de 30 pies, disipas la oscuridad mágica y las criaturas de tu elección hacen una salvación de CON: sufren 2d10 + nivel de Clérigo de daño radiante (mitad si superan)."
      },
      {
        n: "Fulgor Protector (Warding Flare)",
        nv: 3,
        a: "R",
        d: "Cuando una criatura que veas a 30 pies hace una tirada de ataque, puedes usar tu reacción para imponerle desventaja. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
      {
        n: "Conjuros del Dominio de la Luz",
        nv: 3,
        d: "Siempre preparados — Nv.3: Burning Hands, Faerie Fire, Scorching Ray, See Invisibility. Nv.5: Daylight, Fireball. Nv.7: Arcane Eye, Wall of Fire. Nv.9: Flame Strike, Scrying."
      },
      {
        n: "Fulgor Protector Mejorado (Improved Warding Flare)",
        nv: 6,
        d: "Recuperas los usos de Fulgor Protector también con un descanso corto. Al usarlo, el objetivo del ataque gana 2d6 + mod. SAB PG temporales."
      },
      {
        n: "Corona de Luz (Corona of Light)",
        nv: 17,
        a: "A",
        d: "Como acción Mágica activas una aura durante 1 minuto (terminable): luz brillante en 60 pies y tenue 30 pies más. Tus enemigos en la luz brillante tienen desventaja en las salvaciones contra Resplandor del Alba y contra tus conjuros de daño de fuego o radiante. Usos = mod. SAB (mínimo 1) por descanso largo."
      },
    ],

    "Dominio del Engaño [PHB 2024]": [
      {
        n: "Bendición del Embaucador (Blessing of the Trickster)",
        nv: 3,
        a: "A",
        d: "Como acción Mágica eliges a ti o a una criatura voluntaria a 30 pies: tiene ventaja en pruebas de DES (Sigilo) hasta que termines un descanso largo o uses este rasgo de nuevo."
      },
      {
        n: "Invocar Duplicidad (Invoke Duplicity)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas un uso de Canalizar Divinidad y creas una ilusión perfecta de ti en un espacio libre a 30 pies (intangible, 1 minuto; termina si la despides o quedas Incapacitado). Puedes lanzar conjuros desde su espacio usando tus sentidos; tienes ventaja en ataques cuando tú y la ilusión estáis a 5 pies de una criatura que la ve; y como Acción Adicional la mueves 30 pies a un espacio libre a 120 pies."
      },
      {
        n: "Conjuros del Dominio del Engaño",
        nv: 3,
        d: "Siempre preparados — Nv.3: Charm Person, Disguise Self, Invisibility, Pass without Trace. Nv.5: Hypnotic Pattern, Nondetection. Nv.7: Confusion, Dimension Door. Nv.9: Dominate Person, Modify Memory."
      },
      {
        n: "Transposición del Embaucador (Trickster's Transposition)",
        nv: 6,
        d: "Cuando usas una Acción Adicional para crear o mover tu ilusión de Invocar Duplicidad, puedes teletransportarte intercambiando posición con ella."
      },
      {
        n: "Duplicidad Mejorada (Improved Duplicity)",
        nv: 17,
        d: "Tu ilusión gana: Distracción Compartida (tú y tus aliados tenéis ventaja en ataques contra criaturas a 5 pies de ella) y Ilusión Sanadora (cuando la ilusión termina, tú o una criatura de tu elección a 5 pies de ella recupera PG = tu nivel de Clérigo)."
      },
    ],

    "Dominio de la Guerra [PHB 2024]": [
      {
        n: "Golpe Guiado (Guided Strike)",
        nv: 3,
        a: "OR",
        d: "Cuando tú o una criatura a 30 pies falla una tirada de ataque, puedes gastar un uso de Canalizar Divinidad para darle +10, quizá haciéndola impactar. Si lo usas sobre la tirada de otra criatura, debes gastar tu Reacción."
      },
      {
        n: "Sacerdote de Guerra (War Priest)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional puedes hacer un ataque con un arma o un Ataque Desarmado. Puedes usar esta Acción Adicional un número de veces igual a tu mod. SAB (mínimo 1); recuperas todos los usos al terminar un Descanso Corto o Largo."
      },
      {
        n: "Conjuros del Dominio de la Guerra",
        nv: 3,
        d: "Siempre preparados — Nv.3: Guiding Bolt, Magic Weapon, Shield of Faith, Spiritual Weapon. Nv.5: Crusader's Mantle, Spirit Guardians. Nv.7: Fire Shield, Freedom of Movement. Nv.9: Hold Monster, Steel Wind Strike."
      },
      {
        n: "Bendición del Dios de la Guerra (War God's Blessing)",
        nv: 6,
        a: "O",
        d: "Puedes lanzar Shield of Faith o Spiritual Weapon gastando un uso de Canalizar Divinidad en lugar de un espacio; el conjuro no requiere concentración: dura 1 minuto y termina antes si lo lanzas de nuevo, quedas Incapacitado o mueres."
      },
      {
        n: "Avatar de la Batalla (Avatar of Battle)",
        nv: 17,
        d: "Resistencia al daño contundente, perforante y cortante."
      },
    ],


    /* ── HoF 2024 ── */
    "Dominio del Conocimiento [HoF 2024]": [
      {
        n: "Bendiciones del Conocimiento (Blessings of Knowledge)",
        nv: 3,
        d: "Ganas competencia con un tipo de herramientas de artesano y en 2 habilidades entre Arcanos, Historia, Naturaleza y Religión; tienes Pericia en esas 2 habilidades."
      },
      {
        n: "Magia de la Mente (Mind Magic)",
        nv: 3,
        a: "A",
        d: "Como acción Mágica gastas un uso de Canalizar Divinidad: eliges un conjuro de adivinación de la lista de conjuros del Dominio del Conocimiento que tengas preparado y lo lanzas sin gastar espacio ni componentes materiales."
      },
      {
        n: "Conjuros del Dominio del Conocimiento",
        nv: 3,
        d: "Siempre preparados — Nv.3: Command, Comprehend Languages, Detect Magic, Detect Thoughts, Identify, Mind Spike. Nv.5: Dispel Magic, Nondetection, Tongues. Nv.7: Arcane Eye, Banishment, Confusion. Nv.9: Legend Lore, Scrying, Synaptic Static."
      },
      {
        n: "Mente Desatada (Unfettered Mind)",
        nv: 6,
        d: "Telepatía a 60 pies; puedes contactar simultáneamente a mod. SAB criaturas (mínimo 1). Además ganas competencia en salvaciones de INT (si ya la tenías, eliges otra característica en la que no la tengas)."
      },
      {
        n: "Presciencia Divina (Divine Foreknowledge)",
        nv: 17,
        a: "B",
        d: "Como Acción Adicional expandes tu mente hacia el futuro: durante 1 hora tienes ventaja en las pruebas de d20. Una vez por descanso largo, o gastando un espacio de nivel 6+ (sin acción) para recuperarlo."
      },
    ],

    /* ── RAVENLOFT: THE HORRORS WITHIN (THW, 2024) ── */
    "Dominio de las Tumbas [THW 2024]": [
      {
        n: "Conjuros del Dominio de las Tumbas",
        nv: 3,
        d: "Siempre preparados — Nv.3: Detect Evil and Good, False Life, Gentle Repose, Ray of Enfeeblement, Spare the Dying. Nv.5: Revivify, Vampiric Touch. Nv.7: Blight, Death Ward. Nv.9: Dispel Evil and Good, Raise Dead."
      },
      {
        n: "Círculo de Mortalidad (Circle of Mortality)",
        nv: 3,
        a: "B",
        d: "Atracción de la Muerte (Pull of Death): una vez por turno, cuando infliges daño con un conjuro o al impactar con una tirada de ataque a una criatura a la que le falten PG, sufre 1d4 de daño necrótico adicional (1d6 desde el Nv.11 de Clérigo). Regreso a la Vida (Return to Life): puedes lanzar Spare the Dying como Acción Adicional. Además, cuando tirarías dados para restaurar PG con un conjuro o Canalizar Divinidad a una criatura con 0 PG, no tiras esos dados: usas el valor máximo de cada dado (p. ej., en vez de 2d4, restauras 8)."
      },
      {
        n: "Camino a la Tumba (Path to the Grave)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional presentas tu símbolo sagrado y gastas un uso de Canalizar Divinidad para maldecir a una criatura que veas a 30 pies hasta el inicio de tu siguiente turno. Mientras esté maldita, tiene Desventaja en las tiradas de ataque y las tiradas de salvación. Cuando tú o un aliado que veas impactáis al objetivo maldito con una tirada de ataque, puedes terminar la maldición antes (sin acción) para que ese ataque inflija daño necrótico o radiante adicional (a tu elección) igual a tu nivel de Clérigo."
      },
      {
        n: "Centinela en el Umbral de la Muerte (Sentinel at Death's Door)",
        nv: 6,
        a: "R",
        d: "Cuando tú o una criatura Malherida que veas a 60 pies recibe un impacto de una tirada de ataque, puedes usar tu Reacción para reducir a la mitad el daño de ese ataque (redondeando hacia abajo). Si la tirada era un golpe crítico, se cancelan los efectos que active un golpe crítico. Usos = mod. SAB (mínimo 1) por Descanso Largo."
      },
      {
        n: "Segador Divino (Divine Reaper)",
        nv: 17,
        a: "O",
        d: "Nigromancia Mejorada (Enhanced Necromancy): cuando lanzas un conjuro de nivel 5 o inferior de la escuela de Nigromancia que tenga una sola criatura como objetivo, o un conjuro de la tabla de Conjuros del Dominio de las Tumbas, puedes gastar un uso de Canalizar Divinidad para apuntar también a una segunda criatura dentro del alcance del conjuro. Si el conjuro requiere componentes materiales costosos o que se consumen, debes aportar componentes materiales para cada objetivo. Guardián de Almas (Keeper of Souls): cuando muere un enemigo a 60 pies de ti, tú o una criatura que veas a 60 pies recupera PG = el doble de tu nivel de Clérigo. No puedes usarlo si estás Incapacitado. Tras usarlo, no puedes volver a usarlo hasta terminar un Descanso Corto o Largo, salvo que gastes un espacio de conjuro de nivel 6 o superior (sin acción) para recuperar su uso."
      },
    ],

    /* ── PLANE SHIFT: AMONKHET (PSA) ── */
    "Dominio de la Ambición [PSA]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Bane, Disguise Self. Nv.3: Mirror Image, Ray of Enfeeblement. Nv.5: Bestow Curse, Vampiric Touch. Nv.7: Death Ward, Dimension Door. Nv.9: Dominate Person, Modify Memory."
      },
      {
        n: "Fulgor Protector (Warding Flare)",
        nv: 1,
        a: "R",
        d: "Cuando te ataca una criatura que veas a 30 pies, puedes usar tu reacción para imponer Desventaja a la tirada de ataque: una luz destella ante el atacante antes de que impacte o falle. Un atacante que no pueda ser cegado es inmune a este rasgo. Usos = mod. SAB (mínimo 1) por Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Invocar Duplicidad (Invoke Duplicity)",
        nv: 2,
        a: "AB",
        d: "Como acción usas Canalizar Divinidad para crear una ilusión perfecta de ti en un espacio libre que veas a 30 pies; dura 1 minuto o hasta que pierdas la concentración (como si te concentraras en un conjuro). Como Acción Adicional en tu turno puedes mover la ilusión hasta 30 pies a un espacio que veas, pero debe permanecer a 120 pies de ti. Mientras dure, puedes lanzar conjuros como si estuvieras en el espacio de la ilusión, pero usando tus propios sentidos. Además, cuando tanto tú como la ilusión estáis a 5 pies de una criatura que ve la ilusión, tienes Ventaja en las tiradas de ataque contra ella, por lo distraída que la deja."
      },
      {
        n: "Canalizar Divinidad: Manto de Sombras (Cloak of Shadows)",
        nv: 6,
        a: "A",
        d: "Como acción usas Canalizar Divinidad para desvanecerte: quedas Invisible hasta el final de tu siguiente turno. Dejas de ser invisible si atacas o lanzas un conjuro."
      },
      {
        n: "Lanzamiento Potente (Potent Spellcasting)",
        nv: 8,
        d: "Sumas tu mod. SAB al daño de tus trucos de Clérigo."
      },
      {
        n: "Duplicidad Mejorada (Improved Duplicity)",
        nv: 17,
        d: "Con Invocar Duplicidad puedes crear hasta 4 duplicados de ti en lugar de 1. Como Acción Adicional en tu turno puedes mover cualquier número de ellos hasta 30 pies, hasta un máximo de 120 pies de ti."
      },
    ],

    /* ── PLANE SHIFT: AMONKHET (PSA) ── */
    "Dominio del Conocimiento [PSA]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Command, Identify. Nv.3: Augury, Suggestion. Nv.5: Nondetection, Speak with Dead. Nv.7: Arcane Eye, Confusion. Nv.9: Legend Lore, Scrying."
      },
      {
        n: "Bendiciones del Conocimiento (Blessings of Knowledge)",
        nv: 1,
        d: "Aprendes 2 idiomas a tu elección y ganas competencia en 2 habilidades a tu elección entre Arcana, Historia, Naturaleza y Religión; tu bonificador de competencia se duplica en cualquier prueba de característica que use una de ellas."
      },
      {
        n: "Canalizar Divinidad: Conocimiento de las Eras (Knowledge of the Ages)",
        nv: 2,
        a: "A",
        d: "Como acción usas Canalizar Divinidad para acceder a un pozo divino de conocimiento: eliges una habilidad o herramienta y durante 10 minutos tienes competencia en ella."
      },
      {
        n: "Canalizar Divinidad: Leer Pensamientos (Read Thoughts)",
        nv: 6,
        a: "A",
        d: "Como acción usas Canalizar Divinidad y eliges una criatura que veas a 60 pies: hace una salvación de SAB. Si la supera, no puedes volver a usar este rasgo contra ella hasta terminar un Descanso Largo. Si falla, durante 1 minuto lees sus pensamientos superficiales (los que tiene en primer plano: sus emociones actuales y en qué piensa) mientras esté a 60 pies de ti. Durante ese tiempo, puedes usar tu acción para terminar este efecto y lanzar Suggestion sobre la criatura sin gastar espacio de conjuro; el objetivo falla automáticamente la salvación contra ese conjuro."
      },
      {
        n: "Lanzamiento Potente (Potent Spellcasting)",
        nv: 8,
        d: "Sumas tu mod. SAB al daño de tus trucos de Clérigo."
      },
      {
        n: "Visiones del Pasado (Visions of the Past)",
        nv: 17,
        a: "O",
        d: "Puedes evocar visiones del pasado relacionadas con un objeto que sostengas o con tu entorno inmediato. Dedicas al menos 1 minuto a meditar y rezar y recibes atisbos oníricos y sombríos de sucesos recientes; puedes meditar tantos minutos como tu puntuación de SAB y debes mantener la concentración durante ese tiempo, como si lanzaras un conjuro. Una vez usado, no puedes volver a usarlo hasta terminar un Descanso Corto o Largo. Lectura de Objeto (Object Reading): sosteniendo un objeto mientras meditas, ves visiones de su anterior propietario; tras 1 minuto sabes cómo lo obtuvo y lo perdió y cuál fue el suceso importante más reciente que lo involucró a él y al objeto. Si el objeto perteneció a otra criatura en el pasado reciente (en un número de días hasta tu puntuación de SAB), puedes dedicar 1 minuto adicional por cada propietario para saber lo mismo de esa criatura. Lectura de Zona (Area Reading): mientras meditas, ves visiones de sucesos recientes en tu entorno inmediato (una sala, calle, túnel, claro o similar, hasta un cubo de 50 pies) de hasta tantos días atrás como tu puntuación de SAB. Por cada minuto de meditación conoces un suceso importante, empezando por el más reciente. Los sucesos importantes suelen implicar emociones intensas (batallas y traiciones, bodas y asesinatos, nacimientos y funerales), pero también pueden ser sucesos más mundanos que sean relevantes para tu situación actual."
      },
    ],

    /* ── PLANE SHIFT: AMONKHET (PSA) ── */
    "Dominio de la Solidaridad [PSA]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Bless, Guiding Bolt. Nv.3: Aid, Warding Bond. Nv.5: Beacon of Hope, Crusader's Mantle. Nv.7: Aura of Life, Guardian of Faith. Nv.9: Circle of Power, Mass Cure Wounds."
      },
      {
        n: "Competencia Adicional",
        nv: 1,
        d: "Ganas competencia con armadura pesada."
      },
      {
        n: "Acción de Solidaridad (Solidarity's Action)",
        nv: 1,
        a: "B",
        d: "Cuando realizas la acción de Ayuda para auxiliar el ataque de un aliado, puedes hacer un ataque con arma como Acción Adicional. Usos = mod. SAB (mínimo 1); recuperas los usos gastados al terminar un Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Preservar Vida (Preserve Life)",
        nv: 2,
        a: "A",
        d: "Como acción presentas tu símbolo sagrado y evocas energía curativa que puede restaurar PG = 5 × tu nivel de Clérigo. Eliges criaturas a 30 pies y repartes esos PG entre ellas; no puede restaurar a una criatura por encima de la mitad de sus PG máximos. No puedes usarlo con no-muertos ni constructos."
      },
      {
        n: "Bendición de Oketra (Oketra's Blessing)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura a 30 pies hace una tirada de ataque, puedes usar tu reacción y Canalizar Divinidad para darle un bonificador de +10 a la tirada. Decides tras ver la tirada, pero antes de que el DM diga si el ataque impacta o falla."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar a una criatura con un ataque con arma, infliges 1d8 de daño adicional del mismo tipo que el que inflige el arma (2d8 en Nv.14)."
      },
      {
        n: "Curación Suprema (Supreme Healing)",
        nv: 17,
        d: "Cuando tirarías dados para restaurar PG con un conjuro, usas el valor máximo de cada dado (p. ej., en vez de 2d6 PG, restauras 12)."
      },
    ],

    /* ── PLANE SHIFT: AMONKHET (PSA) ── */
    "Dominio de la Fuerza [PSA]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Divine Favor, Shield of Faith. Nv.3: Enhance Ability, Protection from Poison. Nv.5: Haste, Protection from Energy. Nv.7: Dominate Beast, Stoneskin. Nv.9: Destructive Wave, Insect Plague."
      },
      {
        n: "Acólito de la Fuerza (Acolyte of Strength)",
        nv: 1,
        d: "Aprendes un truco de Druida a tu elección y ganas competencia en una habilidad a tu elección entre Trato con Animales, Atletismo, Naturaleza y Supervivencia."
      },
      {
        n: "Competencia Adicional",
        nv: 1,
        d: "Ganas competencia con armadura pesada."
      },
      {
        n: "Canalizar Divinidad: Proeza de Fuerza (Feat of Strength)",
        nv: 2,
        a: "O",
        d: "Cuando haces una tirada de ataque, prueba de característica o tirada de salvación con FUE, puedes usar Canalizar Divinidad para ganar un bonificador de +10 a la tirada. Decides tras ver la tirada, pero antes de que el DM diga si tiene éxito o falla."
      },
      {
        n: "Bendición de Rhonas (Rhonas's Blessing)",
        nv: 6,
        a: "R",
        d: "Cuando una criatura a 30 pies hace una tirada de ataque, prueba de característica o tirada de salvación con FUE, puedes usar tu reacción y Canalizar Divinidad para darle un bonificador de +10 a la tirada. Decides tras ver la tirada, pero antes de que el DM diga si tiene éxito o falla."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar a una criatura con un ataque con arma, infliges 1d8 de daño adicional del mismo tipo que el que inflige el arma (2d8 en Nv.14)."
      },
      {
        n: "Avatar de la Batalla (Avatar of Battle)",
        nv: 17,
        d: "Resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      },
    ],

    /* ── PLANE SHIFT: AMONKHET (PSA) ── */
    "Dominio del Celo [PSA]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Siempre preparados — Nv.1: Searing Smite, Thunderous Smite. Nv.3: Magic Weapon, Shatter. Nv.5: Haste, Fireball. Nv.7: Fire Shield (solo el escudo cálido), Freedom of Movement. Nv.9: Destructive Wave, Flame Strike."
      },
      {
        n: "Competencias Adicionales",
        nv: 1,
        d: "Ganas competencia con armas marciales y armadura pesada."
      },
      {
        n: "Sacerdote del Celo (Priest of Zeal)",
        nv: 1,
        a: "B",
        d: "Hazoret te envía destellos de inspiración mientras combates. Cuando realizas la acción de Atacar, puedes hacer un ataque con arma como Acción Adicional. Usos = mod. SAB (mínimo 1) por Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Fervor Devorador (Consuming Fervor)",
        nv: 2,
        a: "O",
        d: "Cuando tiras daño de fuego o de trueno, puedes usar Canalizar Divinidad para infligir el daño máximo en lugar de tirar."
      },
      {
        n: "Golpe Resonante (Resounding Strike)",
        nv: 6,
        d: "Cuando infliges daño de trueno a una criatura de tamaño Grande o menor, puedes además empujarla hasta 10 pies lejos de ti."
      },
      {
        n: "Golpe Divino (Divine Strike)",
        nv: 8,
        d: "Una vez por turno, al impactar a una criatura con un ataque con arma, infliges 1d8 de daño adicional del mismo tipo que el que inflige el arma (2d8 en Nv.14)."
      },
      {
        n: "Llamarada de Gloria (Blaze of Glory)",
        nv: 17,
        a: "R",
        d: "Puedes retrasar la muerte un instante para realizar un último acto heroico. Cuando un atacante que veas te reduce a 0 PG, incluso si fueras a morir en el acto, puedes usar tu reacción para moverte hasta tu Velocidad hacia el atacante y hacer un ataque cuerpo a cuerpo con arma contra él, siempre que el movimiento lo deje a tu alcance. Haces este ataque con Ventaja. Si impacta, la criatura sufre 5d10 de daño de fuego adicional y 5d10 adicionales del tipo del arma. Después caes Inconsciente y empiezas a hacer salvaciones de muerte con normalidad, o mueres si el daño recibido te habría matado en el acto. Una vez usado, no puedes volver a usarlo hasta terminar un Descanso Largo."
      },
    ],
  },
};
