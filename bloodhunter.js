/* ══════════════════════════════════════════════════════════════════
   bloodhunter.js — Blood Hunter: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: BH2022
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (4 entradas):
     Orden del Fantasmacuchillas  [BH2022]
     Orden del Licántropo         [BH2022]
     Orden del Mutante            [BH2022]
     Orden del Alma Profana       [BH2022]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_BLOODHUNTER = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d10. Salvaciones: DES e INT. Armaduras: ligeras, medias y escudos. Armas: simples y marciales. Herramientas: suministros de alquimista. Habilidades: elige 3 entre Acrobacias, Arcanos, Atletismo, Historia, Perspicacia, Investigación, Religión y Supervivencia."
    },
    {
      n: "Bane del Cazador (Hunter's Bane)",
      nv: 1,
      d: "Tienes Ventaja en las pruebas de Sabiduría (Supervivencia) para rastrear feéricos, infernales y no-muertos, y en las pruebas de Inteligencia para recordar información sobre ellos."
    },
    {
      n: "Maldición de Sangre (Blood Maledict)",
      nv: 1,
      a: "BR",
      d: "Tu modificador de Hemocraft es tu mod. de INT o SAB (a tu elección); CD = 8 + bonificador de competencia + mod. de Hemocraft. Dado de Hemocraft: d4 (Nv.1), d6 (Nv.5), d8 (Nv.11), d10 (Nv.17). Conoces 1 Maldición de Sangre (2 en Nv.6, 3 en Nv.10, 4 en Nv.14, 5 en Nv.18) y puedes usarla 1 vez por descanso corto o largo (2 en Nv.6, 3 en Nv.13, 4 en Nv.17). Cada maldición se lanza como Acción Adicional o Reacción según la maldición, sobre una criatura que veas a 30 pies. Puedes amplificarla perdiendo PG necróticos iguales a una tirada del dado de Hemocraft (no reducibles) para añadir su efecto amplificado. Las criaturas sin sangre son inmunes salvo que amplifiques. Maldiciones: Fallen Puppet, Binding, Eyeless, Marked, Anxiety, Bloated Agony, Muddled Mind, y las de Orden (Corrosion, Exorcist, Howl, Souleater)."
    },
    {
      n: "Estilo de Combate (Fighting Style)",
      nv: 2,
      d: "Eliges uno: Arquería (+2 al ataque a distancia), Duelo (+2 al daño con un arma en una mano), Combate con Arma a Dos Manos (repites 1 y 2 en los dados de daño) o Combate con Dos Armas (sumas el mod. al daño del segundo ataque)."
    },
    {
      n: "Rito Carmesí (Crimson Rite)",
      nv: 2,
      a: "B",
      d: "Con una Acción Adicional activas un rito en un arma que empuñes: sufres un daño necrótico igual a una tirada del dado de Hemocraft (no reducible) y el arma inflige ese dado extra del tipo del rito hasta que termines un descanso corto o largo. Un solo arma y un solo rito activo a la vez. Ritos: Llama (fuego), Helado (frío) y Tormenta (relámpago) desde Nv.2; Muerte (necrótico), Oráculo (psíquico) y Rugido (trueno) desde Nv.14."
    },
    {
      n: "Orden de Cazadores de Sangre (Blood Hunter Order)",
      nv: 3,
      d: "Eliges una Orden (subclase): Ghostslayer, Lycan, Mutant o Profane Soul. Concede rasgos en Nv.3, 7, 11, 15 y 18."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20), o una dote, en Nv.4, 8, 12, 16 y 19."
    },
    {
      n: "Ataque Extra (Extra Attack)",
      nv: 5,
      d: "Atacas dos veces cuando realizas la acción de Atacar en tu turno."
    },
    {
      n: "Marca de Castigo (Brand of Castigation)",
      nv: 6,
      a: "O",
      d: "Cuando dañas a una criatura con un arma con un Rito Carmesí activo, puedes grabarle una marca arcana (1 vez por descanso corto o largo). Sabes en qué dirección está mientras esté en tu plano, y cada vez que ella dañe a ti o a un aliado cercano sufre daño psíquico igual a tu mod. de Hemocraft (mín. 1). Dura hasta que la despidas o la apliques a otra criatura; puede disiparse con Dispel Magic."
    },
    {
      n: "Mejora del Rito Carmesí (Crimson Rite Improvement)",
      nv: 7,
      d: "Aprendes un rito adicional (Nv.7) y otro más en Nv.14, que puede ser Muerte, Oráculo o Rugido."
    },
    {
      n: "Psicometría Sombría (Grim Psychometry)",
      nv: 9,
      d: "Tienes Ventaja en pruebas de Inteligencia (Historia) para discernir la historia siniestra o trágica de objetos y lugares que toques; con una tirada alta el DJ puede concederte visiones."
    },
    {
      n: "Aumento Oscuro (Dark Augmentation)",
      nv: 10,
      d: "Tu Velocidad aumenta 5 pies y sumas tu mod. de Hemocraft (mín. +1) a tus salvaciones de Fuerza, Destreza y Constitución."
    },
    {
      n: "Marca de Atadura (Brand of Tethering)",
      nv: 13,
      d: "Mejora la Marca de Castigo: el daño psíquico es el doble de tu mod. de Hemocraft (mín. 2), la criatura marcada no puede Correr y, si intenta teletransportarse o abandonar el plano, sufre 4d6 de daño psíquico y debe superar una salvación de SAB o fallar."
    },
    {
      n: "Alma Endurecida (Hardened Soul)",
      nv: 14,
      d: "Tienes Ventaja en las salvaciones contra Hechizado y Asustado. Además aprendes un rito adicional (Mejora del Rito Carmesí)."
    },
    {
      n: "Maestría Sanguínea (Sanguine Mastery)",
      nv: 20,
      d: "Una vez por turno puedes volver a tirar cualquier dado de Hemocraft y usar el resultado que prefieras. Cuando impactas con un golpe crítico con tu arma con rito, recuperas un uso de Maldición de Sangre."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── BH2022 ── */
    "Orden del Fantasmacuchillas [BH2022]": [
      {
        n: "Rito del Alba (Rite of the Dawn)",
        nv: 3,
        d: "Aprendes este rito adicional: su daño extra es radiante, el arma emite luz brillante en 20 pies, ganas resistencia al daño necrótico y el arma inflige un dado de Hemocraft adicional contra no-muertos."
      },
      {
        n: "Especialista en Maldiciones (Curse Specialist)",
        nv: 3,
        d: "Ganas 1 uso adicional de Maldición de Sangre y tus maldiciones afectan a criaturas sin sangre aunque no las amplifiques."
      },
      {
        n: "Paso Etéreo (Aether Walk)",
        nv: 7,
        a: "O",
        d: "Al inicio de tu turno puedes pasar al Plano Etéreo durante un nº de rondas igual a tu mod. de Hemocraft (mín. 1): atraviesas criaturas y objetos como terreno difícil y sufres 1d10 de daño de fuerza si terminas el turno dentro de un objeto. Se recupera con un descanso corto o largo; 2 usos en Nv.15."
      },
      {
        n: "Marca del Destrozo (Brand of Sundering)",
        nv: 11,
        d: "Cuando impactas a una criatura marcada con tu Rito Carmesí activo, tiras un dado de Hemocraft adicional de daño. Las criaturas marcadas con Movimiento Incorpóreo o similar pierden la capacidad de atravesar criaturas u objetos."
      },
      {
        n: "Maldición de Sangre del Exorcista (Blood Curse of the Exorcist)",
        nv: 15,
        d: "Ganas esta Maldición de Sangre adicional (no cuenta contra tus maldiciones conocidas): arrancas la corrupción de mente y cuerpo de tus aliados y castigas a los responsables."
      },
      {
        n: "Renacer del Rito (Rite Revival)",
        nv: 18,
        a: "O",
        d: "Cuando quedas a 0 PG sin morir de golpe, puedes terminar todos tus Ritos Carmesí activos para quedar a 1 PG."
      },
    ],

    "Orden del Licántropo [BH2022]": [
      {
        n: "Sentidos Aumentados (Heightened Senses)",
        nv: 3,
        d: "Tienes Ventaja en las pruebas de Sabiduría (Percepción) que dependan del oído o del olfato."
      },
      {
        n: "Transformación Híbrida (Hybrid Transformation)",
        nv: 3,
        a: "B",
        d: "Con una Acción Adicional te transformas en tu forma híbrida hasta 1 hora (revertir es una Acción Adicional); 1 uso por descanso corto o largo. Fuerza Feral: Ventaja en pruebas y salvaciones de FUE y +1 al daño cuerpo a cuerpo (+2 en Nv.11, +3 en Nv.18). Piel Resistente: resistencia al daño contundente, perforante y cortante no mágico (salvo plata) y +1 CA sin armadura pesada. Golpes Depredadores: tus ataques sin armas aceptan el Rito Carmesí (1d6, 1d8 en Nv.11; usan DES) y puedes dar un ataque sin armas adicional con Acción Adicional. Sed de Sangre: por debajo de la mitad de tus PG debes superar una salvación de SAB CD 8 o atacar a la criatura más cercana (fallo automático si concentras)."
      },
      {
        n: "Destreza del Acechador (Stalker's Prowess)",
        nv: 7,
        d: "Tu Velocidad aumenta 10 pies; salto de longitud +10 pies y de altura +3 pies. Golpes Depredadores Mejorados: +1 a los ataques sin armas (+2 en Nv.11, +3 en Nv.18) y tus golpes sin armas cuentan como mágicos con un Rito Carmesí activo."
      },
      {
        n: "Transformación Avanzada (Advanced Transformation)",
        nv: 11,
        d: "Obtienes 2 usos de Transformación Híbrida por descanso corto o largo. Regeneración Licántropa: al inicio de tu turno, si estás por debajo de la mitad de tus PG, recuperas 1 + mod. de CON PG."
      },
      {
        n: "Marca de lo Voraz (Brand of the Voracious)",
        nv: 15,
        d: "Tienes Ventaja en la salvación de Sed de Sangre y Ventaja en los ataques contra criaturas marcadas mientras estás transformado."
      },
      {
        n: "Maestría de la Transformación Híbrida (Hybrid Transformation Mastery)",
        nv: 18,
        d: "Usos ilimitados de Transformación Híbrida; la forma dura hasta que revierte, quedes inconsciente o mueras. Ganas la Maldición de Sangre del Aullido (Howl), sin contar contra tus maldiciones conocidas."
      },
    ],

    "Orden del Mutante [BH2022]": [
      {
        n: "Arte del Mutágeno (Mutagencraft)",
        nv: 3,
        a: "B",
        d: "Con una Acción Adicional creas un mutágeno propio con una fórmula conocida; sus efectos duran hasta que termines un descanso corto o largo y caduca si no se consume. Mutágenos preparados a la vez: 1 (Nv.3), 2 (Nv.7 y 11), 3 (Nv.15 y 18). Fórmulas conocidas: 4 (Nv.3) hasta 8 (Nv.18); al aprender una nueva puedes cambiar otra."
      },
      {
        n: "Metabolismo Extraño (Strange Metabolism)",
        nv: 7,
        a: "B",
        d: "Eres inmune al daño de veneno y a la condición Envenenado. Con una Acción Adicional, una vez por Descanso Largo, suprimes el efecto secundario negativo de uno de tus mutágenos durante 1 minuto."
      },
      {
        n: "Marca del Axioma (Brand of Axiom)",
        nv: 11,
        d: "Tu Marca de Castigo disipa automáticamente ilusiones e invisibilidad en la criatura marcada e impide que las vuelva a usar. Una criatura marcada en forma alternativa debe superar una salvación de SAB o revertir a su forma verdadera y quedar Aturdida hasta el final de tu siguiente turno (lo mismo si intenta cambiar de forma)."
      },
      {
        n: "Maldición de Sangre de la Corrosión (Blood Curse of Corrosion)",
        nv: 15,
        d: "Ganas esta Maldición de Sangre adicional (no cuenta contra tus maldiciones conocidas)."
      },
      {
        n: "Mutación Exaltada (Exalted Mutation)",
        nv: 18,
        a: "B",
        d: "Con una Acción Adicional sustituyes un mutágeno activo por otro de tus fórmulas conocidas. Usos = mod. de Hemocraft (mín. 1) por Descanso Largo."
      },
    ],

    "Orden del Alma Profana [BH2022]": [
      {
        n: "Patrón Ultraterreno (Otherworldly Patron)",
        nv: 3,
        d: "Eliges patrón entre nueve: la Reina de las Hadas (Archfey), el Archidiablo (Fiend), el Gran Antiguo (Great Old One), el Inmortal (Undying), el Celestial, el Hexblade, el Insondable (Fathomless), el Genio y el No-Muerto (Undead)."
      },
      {
        n: "Magia de Pacto (Pact Magic)",
        nv: 3,
        d: "Aprendes 2 trucos de la lista de Brujo y conoces conjuros de Brujo (2 de nivel 1, hasta 11 conocidos en Nv.20). Tus espacios de pacto van de nivel 1 en Nv.3 a nivel 4 en Nv.19. Tu característica de lanzamiento es INT o SAB (tu mod. de Hemocraft)."
      },
      {
        n: "Foco del Rito (Rite Focus)",
        nv: 3,
        d: "Mientras tu Rito Carmesí esté activo, tu arma sirve de foco de lanzamiento de Brujo. Cada patrón concede un beneficio propio (p. ej. el Archidiablo repite 1 y 2 en el daño de fuego)."
      },
      {
        n: "Frenesí Místico (Mystic Frenzy)",
        nv: 7,
        a: "B",
        d: "Después de lanzar un truco con tu acción, puedes realizar un ataque con arma como Acción Adicional."
      },
      {
        n: "Arcano Revelado (Revealed Arcana)",
        nv: 7,
        d: "Lanzas un conjuro propio de tu patrón una vez por Descanso Largo usando un espacio de Magia de Pacto (p. ej. Blur, Lesser Restoration, Gust of Wind, Scorching Ray, según patrón)."
      },
      {
        n: "Marca de la Cicatriz Sombría (Brand of the Sapping Scar)",
        nv: 11,
        d: "Las criaturas marcadas con tu Marca de Castigo tienen Desventaja en las salvaciones contra tus conjuros de Brujo."
      },
      {
        n: "Arcano Desbloqueado (Unsealed Arcana)",
        nv: 15,
        d: "Lanzas un conjuro más poderoso propio de tu patrón una vez por Descanso Largo sin gastar espacio (p. ej. Slow, Revivify, Lightning Bolt, Fireball, según patrón)."
      },
      {
        n: "Maldición de Sangre del Devorador de Almas (Blood Curse of the Souleater)",
        nv: 18,
        d: "Ganas esta Maldición de Sangre adicional (no cuenta contra tus maldiciones conocidas)."
      },
    ],
  },
};
