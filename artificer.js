/* ══════════════════════════════════════════════════════════════════
   artificer.js — Artificer: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: ERftLW 2014 · EFotA 2024 · TCE · THW 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (10 entradas):
     Alquimista                   [ERftLW 2014] / [EFotA 2024]
     Artillero                    [ERftLW 2014] / [EFotA 2024]
     Herrero de Batalla           [ERftLW 2014] / [EFotA 2024]
     Armero                       [TCE] / [EFotA 2024]
     Cartógrafo                   [EFotA 2024]
     Reanimador                   [THW 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_ARTIFICER = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d8. Salvaciones: CON e INT. Armaduras: ligeras, medias y escudos. Armas: simples. Herramientas: herramientas de ladrón, herramientas de manitas (Tinker's Tools) y una herramienta de artesano a tu elección. Habilidades: elige 2 entre Arcanos, Historia, Investigación, Medicina, Naturaleza, Percepción y Juego de Manos. [2014: mismas competencias]"
    },
    {
      n: "Competencia con Armas de Fuego (Optional Rule: Firearm Proficiency)",
      nv: 1,
      d: "[Sólo 2014, opcional de TCE] Si tu DM usa las reglas de armas de fuego del capítulo 9 del DMG y tu Artificer conoce su manejo, eres competente con ellas."
    },
    {
      n: "Magia de Manitas (Tinker's Magic)",
      nv: 1,
      a: "A",
      d: "Conoces el truco Mending. Además, como acción de Magia y con Tinker's Tools en la mano, creas un objeto en un espacio libre a 5 pies, a elegir entre: Ball Bearings, Basket, Bedroll, Bell, Blanket, Block and Tackle, Bottle (Glass), Bucket, Caltrops, Candle, Crowbar, Flask, Grappling Hook, Hunting Trap, Jug, Lamp, Manacles, Net, Oil, Paper, Parchment, Pole, Pouch, Rope, Sack, Shovel, Spikes (Iron), String, Tinderbox, Torch y Vial (reglas en el PHB). Puedes hacerlo un número de veces igual a tu mod. de INT (mín. 1) por Descanso Largo; el objeto dura hasta que termines un Descanso Largo. [2014: Magical Tinkering — tocas un objeto Diminuto no mágico y le das una propiedad (luz de 5 pies, mensaje grabado de 6 s, olor o sonido, o texto/imagen de hasta 25 palabras) que dura indefinidamente, en un nº de objetos igual a tu mod. de INT (mín. 1)]"
    },
    {
      n: "Lanzamiento de Conjuros (Spellcasting)",
      nv: 1,
      d: "INT es tu característica de lanzamiento. Foco: herramientas de ladrón, herramientas de manitas u otra herramienta de artesano con la que tengas competencia; debes tenerla en la mano al lanzar un conjuro de Artificer con componente M. Conoces 2 trucos (3 en Nv.10, 4 en Nv.14); al terminar un Descanso Largo puedes cambiar uno de tus trucos por otro truco de Artificer. Preparas conjuros de la lista de Artificer (2, 3, 4, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15 según el nivel) y cambias la lista tras un Descanso Largo; puedes lanzar como ritual los conjuros preparados con esa etiqueta. Espacios (semilanzador): Nv.1: 2×1º; Nv.3: 3×1º; Nv.5: 4×1º, 2×2º; Nv.7: 4/3; Nv.9: 4/3/2; Nv.11: 4/3/3; Nv.13: 4/3/3/1; Nv.15: 4/3/3/2; Nv.17: 4/3/3/3/1; Nv.19: 4/3/3/3/2. [2014: preparas conjuros = mod INT + mitad de tu nivel de Artificer (mín. 1); también puedes lanzar rituales; debes ser competente con la herramienta usada como foco y, desde Nv.2, también sirve de foco cualquier objeto con una de tus infusiones; los trucos se cambian al subir de nivel en esta clase (uno de Artificer por otro de la lista de Artificer)]"
    },
    {
      n: "Replicar Objeto Mágico (Replicate Magic Item)",
      nv: 2,
      d: "Conoces 4 planos de objetos mágicos (5 en Nv.6, 6 en Nv.10, 7 en Nv.14, 8 en Nv.18); al subir de nivel puedes cambiar un plano por otro (los objetos creados con el plano sustituido desaparecen de inmediato). Al terminar un Descanso Largo, con Tinker's Tools creas 1 o 2 objetos mágicos distintos de tus planos; si un objeto requiere sintonía, puedes sintonizarte con él en el instante en que lo creas (si lo haces más tarde, sigue el proceso normal de sintonía); el total de objetos creados que puedes mantener es 2 (3 en Nv.6, 4 en Nv.10, 5 en Nv.14, 6 en Nv.18); si superas tu máximo, desaparece el objeto más antiguo y aparece el nuevo. Los objetos desaparecen 1d4 días después de tu muerte. Foco de lanzamiento: puedes usar cualquier varita (Wand) o arma creada con este rasgo como foco de lanzamiento en lugar de herramientas de artesano. Las tablas de planos se amplían en Nv.2, 6, 10 y 14 con objetos cada vez más poderosos (descripciones en el DMG). Planos de Nv.2+: Alchemy Jug, Bag of Holding, Cap of Water Breathing, un objeto mágico Común que no sea Poción, Pergamino ni maldito (sintonía según el objeto), Goggles of Night, Manifold Tool (sintonía), Repeating Shot (sintonía), Returning Weapon, Rope of Climbing, Sending Stones, Shield +1, Wand of Magic Detection, Wand of Secrets, Wand of the War Mage +1 (sintonía), Weapon +1, Wraps of Unarmed Power +1. Nv.6+: Armor +1, Boots of Elvenkind, Boots of the Winding Path (sintonía), Cloak of Elvenkind (sintonía), Cloak of the Manta Ray (sintonía), Dazzling Weapon (sintonía), Eyes of Charming (sintonía), Eyes of Minute Seeing, Gloves of Thievery, Helm of Awareness, Lantern of Revealing, Mind Sharpener (sintonía), Necklace of Adaptation (sintonía), Pipes of Haunting, Repulsion Shield, Ring of Swimming, Ring of Water Walking, Sentinel Shield, Spell-Refueling Ring (sintonía), Wand of Magic Missiles, Wand of Web (sintonía), Weapon of Warning (sintonía). Nv.10+: Armor of Resistance (sintonía), Dagger of Venom, Elven Chain, Ring of Feather Falling (sintonía), Ring of Jumping (sintonía), Ring of Mind Shielding (sintonía), Shield +2, un objeto maravilloso Infrecuente que no sea maldito (sintonía según el objeto), Wand of the War Mage +2 (sintonía), Weapon +2, Wraps of Unarmed Power +2. Nv.14+: Armor +2, Arrow-Catching Shield (sintonía), Flame Tongue (sintonía), un objeto maravilloso Raro que no sea maldito (sintonía según el objeto), Ring of Free Action (sintonía), Ring of Protection (sintonía), Ring of the Ram (sintonía). Recomendados al empezar: Bag of Holding, Cap of Water Breathing, Sending Stones y Wand of the War Mage +1. [Sólo 2024; en 2014: Infuse Item — conoces 4 infusiones (6 en Nv.6, 8 en Nv.10, 10 en Nv.14, 12 en Nv.18) y puedes tener 2 objetos infundidos a la vez (3, 4, 5 y 6 en Nv.6, 10, 14 y 18)]"
    },
    {
      n: "Infusiones de Artificer (Artificer Infusions)",
      nv: 2,
      d: "[Sólo 2014, TCE] Opciones de Infundir Objeto (Infuse Item). De cada infusión se indica el objeto que la recibe, el nivel mínimo de Artificer si lo hay y si el objeto resultante requiere sintonía: Arcane Propulsion Armor (mín. Nv.14; armadura; sintonía), Armor of Magical Strength (armadura; sintonía), Boots of the Winding Path (mín. Nv.6; botas; sintonía), Enhanced Arcane Focus (vara, bastón o varita; sintonía), Enhanced Defense (armadura o escudo), Enhanced Weapon (arma simple o marcial), Helm of Awareness (mín. Nv.10; yelmo; sintonía), Homunculus Servant (gema o cristal de 100 po o más), Mind Sharpener (armadura o túnica), Radiant Weapon (mín. Nv.6; arma simple o marcial; sintonía), Repeating Shot (arma simple o marcial con la propiedad Munición; sintonía), Replicate Magic Item (repetible: eliges un objeto de las tablas de objetos replicables de TCE o un objeto mágico Común que no sea poción ni pergamino), Repulsion Shield (mín. Nv.6; escudo; sintonía), Resistant Armor (mín. Nv.6; armadura; sintonía), Returning Weapon (arma simple o marcial con la propiedad Arrojadiza), Spell-Refueling Ring (mín. Nv.6; anillo; sintonía)."
    },
    {
      n: "Subclase de Artificer (Especialista Artificer)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 5, 9 y 15. [2014: Artificer Specialist, mismos niveles]"
    },
    {
      n: "La Herramienta Adecuada (The Right Tool for the Job)",
      nv: 3,
      d: "[Sólo 2014] Como parte de un descanso corto o largo (1 hora de trabajo) creas un juego de herramientas de artesano en un espacio libre a 5 pies; es no mágico y desaparece cuando vuelves a usar este rasgo."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote, en Nv.4, 8, 12, 16 y 19]"
    },
    {
      n: "Manitas de Objetos Mágicos (Magic Item Tinker)",
      nv: 6,
      a: "AB",
      d: "Replicar Objeto Mágico gana estas opciones, que afectan a un objeto mágico a 5 pies que hayas creado con Replicar Objeto Mágico. Cargar (Acción Adicional): tocas un objeto que use cargas, gastas un espacio de conjuro de nivel 1+ y el objeto recupera cargas iguales al nivel del espacio. Drenar (Acción Adicional, 1/Descanso Largo): tocas el objeto y desaparece, convirtiendo su energía en un espacio de conjuro (nivel 1 si es Común, nivel 2 si es Infrecuente o Raro); el espacio desaparece al terminar un Descanso Largo. Transmutar (acción de Magia, 1/Descanso Largo): tocas el objeto y lo transformas en otro objeto mágico basado en un plano que conozcas. [Sólo 2024]"
    },
    {
      n: "Pericia con Herramientas (Tool Expertise)",
      nv: 6,
      d: "[Sólo 2014] Tu bonificador de competencia se duplica en cualquier prueba con una herramienta con la que seas competente."
    },
    {
      n: "Destello de Genialidad (Flash of Genius)",
      nv: 7,
      a: "R",
      d: "Cuando tú o una criatura que veas a 30 pies falla una prueba de característica o una salvación, puedes usar tu Reacción para sumar tu mod. de INT a la tirada (puede convertir el fallo en éxito). Usos = mod. de INT (mín. 1) por Descanso Largo. [2014: cuando tú o una criatura que veas a 30 pies hacéis una prueba de característica o una salvación, usas tu Reacción para sumar tu mod. de INT a la tirada (no sólo si falla)]"
    },
    {
      n: "Adepto de Objetos Mágicos (Magic Item Adept)",
      nv: 10,
      d: "Puedes sintonizar con hasta 4 objetos mágicos. [2014: además, al fabricar un objeto mágico Común o Infrecuente, tardas una cuarta parte del tiempo normal y pagas la mitad del oro habitual]"
    },
    {
      n: "Objeto Almacén de Conjuros (Spell-Storing Item)",
      nv: 11,
      a: "A",
      d: "Tras un Descanso Largo, tocas un arma Simple o Marcial o un objeto que puedas usar como foco de lanzamiento y almacenas en él un conjuro de Artificer de nivel 1, 2 o 3 cuyo tiempo de lanzamiento sea una acción y que no requiera un componente Material que el conjuro consuma (no hace falta tenerlo preparado). Una criatura que lo sostenga lanza el conjuro con una acción de Magia usando tu característica de lanzamiento; si el conjuro requiere Concentración, la criatura debe concentrarse, y tras usar el objeto así no puede volver a usarse hasta el inicio del siguiente turno de esa criatura. Usos = el doble de tu mod. de INT (mín. 2); dura hasta agotarse o hasta que repitas el rasgo. [2014: sólo conjuros de nivel 1 o 2 que se lancen con 1 acción; arma simple/marcial o foco]"
    },
    {
      n: "Artificio Avanzado (Advanced Artifice)",
      nv: 14,
      d: "Puedes sintonizar con hasta 5 objetos mágicos. Además, al terminar un Descanso Corto recuperas un uso de Destello de Genialidad. [Sólo 2024; en 2014: Magic Item Savant — 5 objetos sintonizados e ignoras los requisitos de clase, especie, conjuro o nivel de los objetos mágicos]"
    },
    {
      n: "Sabio de Objetos Mágicos (Magic Item Savant)",
      nv: 14,
      d: "[Sólo 2014] Puedes sintonizar con hasta 5 objetos mágicos e ignoras todos los requisitos de clase, especie, conjuro y nivel para usarlos."
    },
    {
      n: "Maestro de Objetos Mágicos (Magic Item Master)",
      nv: 18,
      d: "Puedes sintonizar con hasta 6 objetos mágicos."
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Alma de Artificio (Soul of Artifice)",
      nv: 20,
      a: "O",
      d: "Evitar la Muerte (Cheat Death): cuando te reducen a 0 PG sin matarte, puedes desintegrar tus objetos Infrecuentes o Raros creados con Replicar Objeto Mágico y recuperar 20 PG por objeto desintegrado. Guía Mágica (Magical Guidance): al terminar un Descanso Corto recuperas todos los usos de Destello de Genialidad si estás sintonizado con al menos un objeto mágico. [2014: +1 a todas las salvaciones por cada objeto mágico sintonizado (máx. +6); Reacción: al quedar a 0 PG sin morir, terminas una infusión y te quedas a 1 PG]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── ERftLW 2014 ── */
    "Alquimista [ERftLW 2014]": [
      {
        n: "Competencia con Herramientas y Conjuros de Alquimista",
        nv: 3,
        d: "Competencia con suministros de alquimista; si ya la tienes, competencia con otra herramienta de artesano a tu elección. Conjuros siempre preparados: Healing Word y Ray of Sickness (Nv.3); Flaming Sphere y Melf's Acid Arrow (Nv.5); Gaseous Form y Mass Healing Word (Nv.9); Blight y Death Ward (Nv.13); Cloudkill y Raise Dead (Nv.17)."
      },
      {
        n: "Elixir Experimental (Experimental Elixir)",
        nv: 3,
        a: "AB",
        d: "Al terminar un Descanso Largo, con suministros de alquimista encima, produces 1 elixir en un frasco vacío que toques (2 en Nv.6, 3 en Nv.15); tira el efecto de cada elixir por separado, y cada uno necesita su propio frasco. El efecto se tira en d6: 1 Curación (2d4 + mod INT PG), 2 Rapidez (+10 pies de Velocidad, 1 h), 3 Resiliencia (+1 CA, 10 min), 4 Audacia (+1d4 a ataques y salvaciones, 1 min), 5 Vuelo (Velocidad de vuelo 10 pies, 10 min), 6 Transformación (efecto de Alter Self, 10 min). Con una acción creas un elixir extra, en un frasco vacío que toques, gastando un espacio de conjuro de nivel 1+ (eliges el efecto). Una criatura puede beber el elixir con una acción o administrárselo a una criatura Incapacitada. Duran hasta que se beben o hasta el final de tu siguiente Descanso Largo."
      },
      {
        n: "Sabio Alquímico (Alchemical Savant)",
        nv: 5,
        d: "Cuando lanzas un conjuro con suministros de alquimista como foco, sumas tu mod. de INT (mín. +1) a una tirada de curación o de daño de ácido, fuego, necrótico o veneno."
      },
      {
        n: "Reactivos Restauradores (Restorative Reagents)",
        nv: 9,
        a: "A",
        d: "Quien bebe un Elixir Experimental tuyo gana 2d6 + mod INT PG temporales. Además lanzas Lesser Restoration sin gastar espacio ni prepararlo (suministros de alquimista como foco) un nº de veces igual a tu mod. de INT (mín. 1) por Descanso Largo."
      },
      {
        n: "Maestría Química (Chemical Mastery)",
        nv: 15,
        a: "A",
        d: "Resistencia al daño de ácido y de veneno e inmunidad a la condición Envenenado. Lanzas una vez cada uno Greater Restoration y Heal por Descanso Largo, sin espacio, sin prepararlos y sin componentes materiales (suministros de alquimista como foco)."
      },
    ],


    /* ── EFotA 2024 ── */
    "Alquimista [EFotA 2024]": [
      {
        n: "Herramientas del Oficio (Tools of the Trade)",
        nv: 3,
        d: "Competencia con suministros de alquimista y herbolario (o con otras herramientas de artesano si ya las tienes). Creas pociones en la mitad de tiempo."
      },
      {
        n: "Conjuros de Alquimista",
        nv: 3,
        d: "Siempre preparados: Healing Word y Ray of Sickness (Nv.3); Flaming Sphere y Melf's Acid Arrow (Nv.5); Gaseous Form y Mass Healing Word (Nv.9); Death Ward y Vitriolic Sphere (Nv.13); Cloudkill y Raise Dead (Nv.17)."
      },
      {
        n: "Elixir Experimental (Experimental Elixir)",
        nv: 3,
        a: "AB",
        d: "Al terminar un Descanso Largo, con suministros de alquimista en la mano, produces 2 elixires (3 en Nv.5, 4 en Nv.9, 5 en Nv.15). Para cada uno tira 1d6 en la tabla (el efecto se activa cuando alguien bebe el elixir): 1 Curación (2d8 + mod. INT PG; 3d8 en Nv.9, 4d8 en Nv.15); 2 Rapidez (+10 pies de Velocidad 1 h; +15 en Nv.9, +20 en Nv.15); 3 Resiliencia (+1 CA 10 min; 1 h en Nv.9, 8 h en Nv.15); 4 Audacia (1d4 a ataques y salvaciones 1 min; 10 min en Nv.9, 1 h en Nv.15); 5 Vuelo (Velocidad de vuelo 10 pies 10 min; 20 pies en Nv.9, 30 pies en Nv.15); 6 eliges el efecto de cualquiera de las otras cinco filas. Cada elixir aparece en un vial que desaparece al beberse o vaciarse; los elixires que sigan sin usar al terminar un Descanso Largo desaparecen con su vial. Una criatura puede beber el elixir como Acción Adicional o dárselo a otra criatura a 5 pies de ella. Con una acción de Magia y suministros de alquimista en la mano, gastas un espacio de conjuro para crear un elixir adicional y eliges su efecto en lugar de tirar."
      },
      {
        n: "Sabio Alquímico (Alchemical Savant)",
        nv: 5,
        d: "Cuando lanzas un conjuro con suministros de alquimista como foco, sumas tu mod. de INT (mín. +1) a una tirada de curación o de daño de ácido, fuego o veneno."
      },
      {
        n: "Reactivos Restauradores (Restorative Reagents)",
        nv: 9,
        a: "A",
        d: "Lanzas Lesser Restoration sin espacio ni preparación (suministros de alquimista como foco) un nº de veces igual a tu mod. de INT (mín. 1) por Descanso Largo."
      },
      {
        n: "Maestría Química (Chemical Mastery)",
        nv: 15,
        a: "A",
        d: "Erupción Alquímica: una vez por turno, al lanzar un conjuro de Artificer que cause daño de ácido, fuego o veneno, añades 2d8 de daño de fuerza. Resistencia Química: resistencia al daño de ácido y veneno e inmunidad a Envenenado. Caldero Conjurado: lanzas Tasha's Bubbling Cauldron una vez por Descanso Largo sin espacio, preparación ni componentes (suministros de alquimista como foco)."
      },
    ],


    /* ── ERftLW 2014 ── */
    "Artillero [ERftLW 2014]": [
      {
        n: "Competencia con Herramientas y Conjuros de Artillero",
        nv: 3,
        d: "Competencia con herramientas de tallista; si ya la tienes, competencia con otra herramienta de artesano a tu elección. Conjuros siempre preparados: Shield y Thunderwave (Nv.3); Scorching Ray y Shatter (Nv.5); Fireball y Wind Wall (Nv.9); Ice Storm y Wall of Fire (Nv.13); Cone of Cold y Wall of Force (Nv.17)."
      },
      {
        n: "Cañón Arcano (Eldritch Cannon)",
        nv: 3,
        a: "AB",
        d: "Con una acción y herramientas de tallista o de herrero creas un cañón mágico Pequeño o Diminuto en un espacio libre a 5 pies. No puedes crear otro hasta un Descanso Largo o gastar un espacio de conjuro de nivel 1+; sólo uno a la vez. CA 18, PG = 5 × tu nivel de Artificer, inmune al daño de veneno y psíquico y a todas las condiciones (si debe hacer una prueba o una salvación, todas sus características valen 10, +0); Mending le restaura 2d6 PG; desaparece a 0 PG, tras 1 hora o si lo despides con una acción. Al crearlo decides su aspecto, si tiene patas y su tipo. Una vez por turno, con una Acción Adicional y estando a 60 pies del cañón, lo activas con una de sus opciones; como parte de esa misma acción puedes hacer que ande o trepe hasta 15 pies a un espacio libre, si tiene patas. Opciones: Lanzallamas (cono de 15 pies, salvación DES, 2d8 fuego), Ballesta de Fuerza (ataque de conjuro a distancia a 120 pies, 2d8 fuerza y empuja 5 pies) o Protector (el propio cañón y cada criatura de tu elección a 10 pies de él ganan 1d8 + mod. INT PG temporales, mín. +1)."
      },
      {
        n: "Arma de Fuego Arcana (Arcane Firearm)",
        nv: 5,
        d: "Tras un Descanso Largo grabas runas en una varita, bastón o vara (con herramientas de tallista) y la conviertes en tu arma de fuego arcana, que sirve de foco. Cuando lanzas un conjuro de Artificer a través de ella, sumas 1d8 a una tirada de daño del conjuro."
      },
      {
        n: "Cañón Explosivo (Explosive Cannon)",
        nv: 9,
        a: "A",
        d: "Las tiradas de daño de tu cañón aumentan en 1d8. Con una acción (a 60 pies) puedes detonarlo: lo destruye y las criaturas a 20 pies hacen salvación de DES, sufriendo 3d8 de daño de fuerza (mitad si la superan)."
      },
      {
        n: "Posición Fortificada (Fortified Position)",
        nv: 15,
        d: "Tú y tus aliados tenéis cobertura media a 10 pies de tu cañón. Puedes tener dos cañones a la vez: los creas con la misma acción (pero no con el mismo espacio de conjuro), eliges si son iguales o distintos y activas ambos con la misma Acción Adicional. No puedes crear un tercero mientras tengas dos."
      },
    ],


    /* ── EFotA 2024 ── */
    "Artillero [EFotA 2024]": [
      {
        n: "Herramientas del Oficio (Tools of the Trade)",
        nv: 3,
        d: "Competencia con armas marciales a distancia y con herramientas de tallista (o con otras herramientas de artesano si ya las tienes). Creas varitas mágicas en la mitad de tiempo."
      },
      {
        n: "Conjuros de Artillero",
        nv: 3,
        d: "Siempre preparados: Shield y Thunderwave (Nv.3); Scorching Ray y Shatter (Nv.5); Fireball y Wind Wall (Nv.9); Ice Storm y Wall of Fire (Nv.13); Cone of Cold y Wall of Force (Nv.17)."
      },
      {
        n: "Cañón Arcano (Eldritch Cannon)",
        nv: 3,
        a: "AB",
        d: "Con una acción de Magia y herramientas de herrero o de tallista creas un cañón Pequeño o Diminuto a 5 pies; se recarga con un Descanso Largo o gastando un espacio de conjuro; dura 1 hora o hasta que lo despidas. CA 18, PG = 5 × tu nivel de Artificer, inmune a veneno y psíquico; Mending le restaura 2d6 PG. Con una Acción Adicional (a 60 pies) lo mueves hasta 15 pies y activas una opción: Lanzallamas (cono de 15 pies, salvación DES, 2d8 fuego), Ballesta de Fuerza (ataque de conjuro a distancia a 120 pies, 2d8 fuerza y empuja 5 pies) o Protector (él y criaturas a 10 pies ganan 1d8 + mod INT PG temporales)."
      },
      {
        n: "Arma de Fuego Arcana (Arcane Firearm)",
        nv: 5,
        d: "Tras un Descanso Largo grabas runas en una vara, bastón, varita o arma marcial a distancia y la conviertes en foco de lanzamiento. Cuando lanzas un conjuro de Artificer a través de ella, sumas 1d8 a una tirada de daño."
      },
      {
        n: "Cañón Explosivo (Explosive Cannon)",
        nv: 9,
        a: "R",
        d: "Detonar: cuando tu cañón recibe daño, puedes usar tu Reacción para detonarlo si estás a 60 pies de él; lo destruye y cada criatura a 20 pies hace una salvación de DES contra tu CD de conjuros, sufriendo 3d10 de daño de fuerza si falla (mitad si la supera). Potencia de Fuego: las tiradas de daño del cañón y los PG temporales que concede Protector aumentan en 1d8."
      },
      {
        n: "Posición Fortificada (Fortified Position)",
        nv: 15,
        d: "Puedes tener dos cañones a la vez y crear los dos con la misma acción de Magia (si gastas un espacio de conjuro para el primero, debes gastar otro para el segundo). Activas ambos con la misma Acción Adicional, con la misma opción de activación o con opciones distintas. No puedes crear un tercero mientras tengas dos. Tú y tus aliados tenéis cobertura media a 10 pies de tu cañón."
      },
    ],


    /* ── ERftLW 2014 ── */
    "Herrero de Batalla [ERftLW 2014]": [
      {
        n: "Competencia con Herramientas y Conjuros de Herrero de Batalla",
        nv: 3,
        d: "Competencia con herramientas de herrero; si ya la tienes, competencia con otra herramienta de artesano a tu elección. Conjuros siempre preparados: Heroism y Shield (Nv.3); Branding Smite y Warding Bond (Nv.5); Aura of Vitality y Conjure Barrage (Nv.9); Aura of Purity y Fire Shield (Nv.13); Banishing Smite y Mass Cure Wounds (Nv.17)."
      },
      {
        n: "Listo para el Combate (Battle Ready)",
        nv: 3,
        d: "Competencia con armas marciales. Cuando atacas con un arma mágica, puedes usar tu mod. de INT en lugar de FUE o DES para las tiradas de ataque y daño."
      },
      {
        n: "Defensor de Acero (Steel Defender)",
        nv: 3,
        a: "B",
        d: "Tras un Descanso Largo, con herramientas de herrero, creas un constructo Mediano leal (sólo uno; si creas otro, el primero perece). CA 15, PG = 2 + mod INT + 5 × tu nivel de Artificer, Velocidad 40 pies, inmune al daño de veneno y a las condiciones Hechizado, Agotamiento y Envenenado. Actúa en tu turno justo después del tuyo y sólo Esquiva salvo que le ordenes otra acción con una Acción Adicional; si estás Incapacitado, puede realizar cualquier acción por sí mismo, no solo Esquivar. También perece si tú mueres. Ataque Imbuido de Fuerza (1d8 + tu bonificador de competencia, fuerza), Reparar (3/día, 2d8 + comp.) y Desviar Ataque (Reacción: Desventaja a un ataque contra otra criatura a 5 pies). Mending le restaura 2d6 PG. Si murió hace menos de 1 hora, puedes usar tus herramientas de herrero con una acción para revivirlo, estando a 5 pies de él y gastando un espacio de conjuro de nivel 1+; vuelve a la vida tras 1 minuto con todos sus PG."
      },
      {
        n: "Ataque Extra (Extra Attack)",
        nv: 5,
        d: "Atacas dos veces cuando realizas la acción de Atacar en tu turno."
      },
      {
        n: "Descarga Arcana (Arcane Jolt)",
        nv: 9,
        a: "O",
        d: "Una vez por turno, al impactar con un arma mágica o cuando lo hace tu Defensor de Acero, infliges 2d6 de daño de fuerza extra o curas 2d6 PG a una criatura que veas a 30 pies del objetivo. Usos = mod. de INT (mín. 1) por Descanso Largo."
      },
      {
        n: "Defensor Mejorado (Improved Defender)",
        nv: 15,
        d: "Descarga Arcana pasa a 4d6. El Defensor de Acero gana +2 a la CA y, cuando usa Desviar Ataque, el atacante sufre 1d4 + mod INT de daño de fuerza."
      },
    ],


    /* ── EFotA 2024 ── */
    "Herrero de Batalla [EFotA 2024]": [
      {
        n: "Herramientas del Oficio (Tools of the Trade)",
        nv: 3,
        d: "Competencia con herramientas de herrero (o con otras herramientas de artesano si ya las tienes). Creas armas (mundanas y mágicas) en la mitad de tiempo."
      },
      {
        n: "Conjuros de Herrero de Batalla",
        nv: 3,
        d: "Siempre preparados: Heroism y Shield (Nv.3); Shining Smite y Warding Bond (Nv.5); Aura of Vitality y Conjure Barrage (Nv.9); Aura of Purity y Fire Shield (Nv.13); Banishing Smite y Mass Cure Wounds (Nv.17)."
      },
      {
        n: "Listo para el Combate (Battle Ready)",
        nv: 3,
        d: "Usas tu mod. de INT en lugar de FUE o DES para las tiradas de ataque y daño con armas mágicas. Ganas competencia con armas marciales y puedes usar un arma con la que tengas competencia como foco de lanzamiento para tus conjuros de Artificer."
      },
      {
        n: "Defensor de Acero (Steel Defender)",
        nv: 3,
        a: "B",
        d: "Cada vez que terminas un Descanso Largo puedes crear un nuevo defensor si tienes herramientas de herrero (Smith's Tools) en la mano; si ya tenías uno de este rasgo, el anterior desaparece. El defensor también desaparece si tú mueres. Decides su aspecto y si tiene dos o cuatro patas (sin efecto en sus estadísticas). Es amistoso contigo y tus aliados y te obedece. Constructo Mediano leal: CA 12 + mod INT, PG = 5 + 5 × tu nivel de Artificer, Velocidad 40 pies, inmune a veneno y a las condiciones Hechizado, Agotamiento y Envenenado. Actúa en tu turno y sólo Esquiva salvo que le ordenes otra acción con una Acción Adicional; si estás Incapacitado, el defensor actúa por sí mismo y no se limita a Esquivar. Ataque Imbuido de Fuerza (1d8 + 2 + mod INT, fuerza), Reparar (3/día, 2d8 + mod INT PG) y Desviar Ataque (Reacción: Desventaja a un ataque cercano). Si murió hace menos de 1 hora, puedes usar una acción de Magia para tocarlo y gastar un espacio de conjuro; el defensor vuelve a la vida tras 1 minuto con todos sus PG."
      },
      {
        n: "Ataque Extra (Extra Attack)",
        nv: 5,
        d: "Atacas dos veces cuando realizas la acción de Atacar; puedes renunciar a uno de esos ataques para ordenar el Ataque Imbuido de Fuerza de tu Defensor de Acero."
      },
      {
        n: "Descarga Arcana (Arcane Jolt)",
        nv: 9,
        a: "O",
        d: "Una vez por turno, al impactar con un arma mágica o cuando lo hace tu Defensor de Acero, infliges 2d6 de daño de fuerza extra o curas 2d6 PG a una criatura a 30 pies. Usos = mod. de INT (mín. 1) por Descanso Largo."
      },
      {
        n: "Defensor Mejorado (Improved Defender)",
        nv: 15,
        d: "Descarga Arcana pasa a 4d6. Cuando el Defensor de Acero usa Desviar Ataque, el atacante sufre 1d4 + mod INT de daño de fuerza."
      },
    ],


    /* ── TCE ── */
    "Armero [TCE]": [
      {
        n: "Competencia con Herramientas y Conjuros de Armero",
        nv: 3,
        d: "Competencia con armadura pesada y herramientas de herrero; si ya tienes la competencia con estas herramientas, competencia con otra herramienta de artesano a tu elección. Conjuros siempre preparados: Magic Missile y Thunderwave (Nv.3); Mirror Image y Shatter (Nv.5); Hypnotic Pattern y Lightning Bolt (Nv.9); Fire Shield y Greater Invisibility (Nv.13); Passwall y Wall of Force (Nv.17)."
      },
      {
        n: "Armadura Arcana (Arcane Armor)",
        nv: 3,
        a: "A",
        d: "Con una acción y herramientas de herrero en la mano conviertes una armadura que llevas en Armadura Arcana: ignora requisitos de FUE, sirve de foco de lanzamiento, no puede quitarse contra tu voluntad, cubre todo el cuerpo (el casco puede retraerse o desplegarse con una Acción Adicional), sustituye miembros perdidos y puedes ponértela o quitártela con una acción."
      },
      {
        n: "Modelo de Armadura (Armor Model)",
        nv: 3,
        a: "B",
        d: "Al terminar un descanso corto o largo, eliges un modelo. Con su arma especial usas INT en lugar de FUE o DES. Guardián: Guanteletes de Trueno (arma simple cuerpo a cuerpo, 1d8 trueno; el impactado tiene Desventaja contra otros objetivos hasta tu siguiente turno) y Campo Defensivo (Acción Adicional: PG temporales = tu nivel de Artificer, bonificador de competencia veces por Descanso Largo). Infiltrador: Lanzarrayos (arma simple a distancia 90/300 pies, 1d6 relámpago; una vez por turno +1d6 relámpago), Pasos Potenciados (+5 pies de Velocidad) y Campo Amortiguador (Ventaja en Sigilo; sin la Desventaja de la armadura)."
      },
      {
        n: "Ataque Extra (Extra Attack)",
        nv: 5,
        d: "Atacas dos veces cuando realizas la acción de Atacar."
      },
      {
        n: "Modificaciones de Armadura (Armor Modifications)",
        nv: 9,
        d: "La Armadura Arcana cuenta como cuatro objetos para las infusiones (peto, botas, casco y arma especial), cada uno con una infusión. Además, el máximo de objetos infundidos aumenta en 2 (esos extra deben ser parte de la armadura)."
      },
      {
        n: "Armadura Perfeccionada (Perfected Armor)",
        nv: 15,
        a: "R",
        d: "Guardián: Guanteletes de Trueno — cuando una criatura Enorme o menor que veas termina su turno a 30 pies de ti, con tu Reacción la obligas a hacer una salvación de FUE contra tu CD de conjuros; si falla, la arrastras hasta 25 pies en línea recta hacia ti a un espacio libre. Si queda a 5 pies de ti, puedes hacerle un ataque cuerpo a cuerpo con arma como parte de la Reacción (bonificador de competencia veces por Descanso Largo). Infiltrador: Lanzarrayos — la criatura que sufre su daño de relámpago brilla con luz mágica hasta el inicio de tu siguiente turno (luz tenue a 5 pies) y tiene Desventaja en las tiradas de ataque contra ti; además, la siguiente tirada de ataque contra ella tiene Ventaja y, si impacta, causa 1d6 de relámpago extra."
      },
    ],


    /* ── EFotA 2024 ── */
    "Armero [EFotA 2024]": [
      {
        n: "Herramientas del Oficio (Tools of the Trade)",
        nv: 3,
        d: "Entrenamiento con armadura pesada y competencia con herramientas de herrero (o con otras herramientas de artesano si ya las tienes). Creas armaduras mundanas y mágicas en la mitad de tiempo."
      },
      {
        n: "Conjuros de Armero",
        nv: 3,
        d: "Siempre preparados: Magic Missile y Thunderwave (Nv.3); Mirror Image y Shatter (Nv.5); Hypnotic Pattern y Lightning Bolt (Nv.9); Fire Shield y Greater Invisibility (Nv.13); Passwall y Wall of Force (Nv.17)."
      },
      {
        n: "Armadura Arcana (Arcane Armor)",
        nv: 3,
        a: "A",
        d: "Con una acción de Magia y herramientas de herrero activas una armadura que llevas: ignora requisitos de FUE, te la pones o quitas con la acción Utilizar, sirve de foco de lanzamiento y no puede quitarse contra tu voluntad."
      },
      {
        n: "Modelo de Armadura (Armor Model)",
        nv: 3,
        a: "B",
        d: "Puedes cambiar de modelo al terminar un descanso corto o largo con herramientas de herrero en la mano. Dreadnaught: Demoledor de Fuerza (arma simple cuerpo a cuerpo, 1d10 fuerza, Alcance; empuja o atrae hasta 10 pies a una criatura de un tamaño menor) y Estatura Gigante (Acción Adicional: 1 minuto; tu Alcance aumenta 5 pies y, si eres menor que Grande, te vuelves Grande junto con lo que llevas; si no hay espacio, tu tamaño no cambia; mod. INT veces, mín. 1, por Descanso Largo). Guardián: Pulso de Trueno (arma simple cuerpo a cuerpo, 1d8 trueno; la criatura impactada tiene Desventaja en las tiradas de ataque contra objetivos que no seas tú hasta el inicio de tu siguiente turno) y Campo Defensivo (Acción Adicional mientras estás Bloodied: ganas PG temporales iguales a tu nivel de Artificer; los pierdes si te quitas la armadura). Infiltrador: Lanzarrayos (a distancia 90/300 pies, 1d6 relámpago; una vez por turno +1d6), Pasos Potenciados (+5 pies de Velocidad) y Campo Amortiguador (Ventaja en Sigilo)."
      },
      {
        n: "Ataque Extra (Extra Attack)",
        nv: 5,
        d: "Atacas dos veces cuando realizas la acción de Atacar."
      },
      {
        n: "Armero Mejorado (Improved Armorer)",
        nv: 9,
        d: "Obtienes un plano adicional de Replicar Objeto Mágico (de categoría Armadura) y puedes crear un objeto de armadura extra. Tu arma especial del modelo gana +1 a las tiradas de ataque y daño."
      },
      {
        n: "Armadura Perfeccionada (Perfected Armor)",
        nv: 15,
        a: "BR",
        d: "Dreadnaught: Demoledor 2d6; Estatura Gigante da Alcance +10 pies, tamaño Grande o Enorme y Ventaja en pruebas y salvaciones de FUE. Guardián: el Pulso de Trueno pasa a 1d10. Cuando una criatura Enorme o menor que veas termina su turno a 30 pies de ti, con tu Reacción la obligas a hacer una salvación de FUE contra tu CD de conjuros; si falla, la arrastras hasta 25 pies hacia ti a un espacio libre. Si queda a 5 pies de ti, puedes hacerle un ataque cuerpo a cuerpo con arma como parte de la Reacción. Mod. INT veces (mín. 1) por Descanso Largo. Infiltrador: el Lanzarrayos pasa a 2d6. Las criaturas que sufren su daño de relámpago brillan hasta el inicio de tu siguiente turno (luz tenue a 5 pies) y tienen Desventaja en las tiradas de ataque contra ti. Acción Adicional: ganas Velocidad de vuelo igual al doble de tu Velocidad hasta el final del turno actual (mod. INT veces, mín. 1, por Descanso Largo)."
      },
    ],

    "Cartógrafo [EFotA 2024]": [
      {
        n: "Herramientas del Oficio (Tools of the Trade)",
        nv: 3,
        d: "Competencia con suministros de calígrafo y herramientas de cartógrafo (o con otras herramientas de artesano si ya las tienes). Creas pergaminos de conjuro en la mitad de tiempo."
      },
      {
        n: "Conjuros de Cartógrafo",
        nv: 3,
        d: "Siempre preparados: Faerie Fire, Guiding Bolt y Healing Word (Nv.3); Locate Object y Mind Spike (Nv.5); Call Lightning y Clairvoyance (Nv.9); Banishment y Locate Creature (Nv.13); Scrying y Teleportation Circle (Nv.17)."
      },
      {
        n: "Atlas del Aventurero (Adventurer's Atlas)",
        nv: 3,
        d: "Tras un Descanso Largo, con herramientas de cartógrafo, creas mapas mágicos para 1 + mod INT criaturas (mín. 2). Cada portador conoce la posición relativa de los demás portadores en el mismo plano, puede elegirlos como objetivo de conjuros dentro del alcance aunque no los vea ni tengan cobertura y suma 1d4 a su Iniciativa. Los mapas duran hasta tu muerte o hasta que repitas el rasgo."
      },
      {
        n: "Magia Cartográfica (Mapping Magic)",
        nv: 3,
        a: "A",
        d: "Cartografía Iluminada: lanzas Faerie Fire sin espacio mod. INT veces (mín. 1) por Descanso Largo. Salto de Portal: en tu turno, gastando la mitad de tu Velocidad (redondeando hacia abajo), te teletransportas a un espacio libre que veas a 10 pies de ti, o a 5 pies de una criatura a 30 pies de ti que lleve uno de tus mapas del Atlas. No puedes usarlo si tu Velocidad es 0."
      },
      {
        n: "Precisión Guiada (Guided Precision)",
        nv: 5,
        d: "Una vez por turno, al lanzar un conjuro de Cartógrafo o al impactar a una criatura afectada por Faerie Fire, sumas tu mod. de INT a una tirada de daño. El daño no rompe tu Concentración en Faerie Fire."
      },
      {
        n: "Movimiento Ingenioso (Ingenious Movement)",
        nv: 9,
        a: "R",
        d: "Cuando usas Destello de Genialidad, una criatura voluntaria a 30 pies (o tú) puede teletransportarse hasta 30 pies como parte de esa Reacción."
      },
      {
        n: "Atlas Superior (Superior Atlas)",
        nv: 15,
        d: "Refugio Seguro: un portador del mapa reducido a 0 PG puede destruirlo para recuperar PG iguales al doble de tu nivel de Artificer y teletransportarse a 5 pies de ti o de otro portador. Camino Certero: si eres uno de los portadores de tu Atlas del Aventurero, lanzas Find the Path sin gastar espacio de conjuro, sin prepararlo y sin componentes; una vez por Descanso Largo."
      },
    ],


    /* ── THW 2024 ── */
    "Reanimador [THW 2024]": [
      {
        n: "Conjuros de Reanimador",
        nv: 3,
        d: "Siempre preparados: False Life, Spare the Dying y Witch Bolt (Nv.3); Blindness/Deafness y Enhance Ability (Nv.5); Animate Dead y Lightning Bolt (Nv.9); Blight y Death Ward (Nv.13); Antilife Shell y Raise Dead (Nv.17)."
      },
      {
        n: "Sacudida de Vida (Jolt to Life)",
        nv: 3,
        a: "A",
        d: "Al lanzar Spare the Dying (acción de Magia) puedes modificar el conjuro para que envíe una descarga eléctrica al objetivo y lo reanime: el objetivo recupera PG iguales a tu nivel de Artificer, y cada criatura de tu elección en una Emanación de 10 pies originada en el objetivo hace una salvación de DES contra tu CD de conjuros, sufriendo 2d4 de daño de relámpago si falla (mitad si la supera). Puedes modificar el conjuro así mod. de INT veces por Descanso Largo. El daño sube a 3d4 en Nv.11 y 4d4 en Nv.17."
      },
      {
        n: "Herramientas del Reanimador",
        nv: 3,
        d: "Competencia con suministros de alquimista (o con otras herramientas de artesano si ya las tienes)."
      },
      {
        n: "Compañero Reanimado (Reanimated Companion)",
        nv: 3,
        a: "AB",
        d: "Con una acción de Magia y herramientas de manitas (Tinker's Tools) u otra herramienta de artesano con la que tengas competencia, creas un Compañero Reanimado no-muerto en un espacio libre a 5 pies. Decides su aspecto (sin efecto en sus estadísticas). Es amistoso contigo y tus aliados y te obedece. Una vez creado, no puedes crear otro hasta que termines un Descanso Largo o gastes un espacio de conjuro para crearlo; solo puedes tener un compañero a la vez. Dura hasta que termines un Descanso Largo o lo despidas con una acción de Magia (se desmorona inofensivamente). Si tú mueres, cae a 0 PG y muere (activando Estallido Mortal). Actúa en tu turno y sólo Esquiva salvo que le ordenes otra acción con una Acción Adicional (o estés Incapacitado). CA 10 + mod INT, PG = 5 + 5 × tu nivel de Artificer, Velocidad 30 pies, resistencia a necrótico y veneno, inmune a relámpago, visión ciega 60 pies. Estallido Mortal (2d4 necrótico en emanación de 10 pies al morir), Absorción de Rayos (recupera PG con daño de relámpago) y Zarpazo Terrible (1d4 + mod INT necrótico)."
      },
      {
        n: "Modificaciones Extrañas (Strange Modifications)",
        nv: 5,
        d: "Tu compañero gana una modificación: Conducto Arcano (Arcane Conduit: puedes lanzar conjuros como si estuvieras en el espacio del compañero, pero usando tus propios sentidos; una vez por turno, cuando lanzas un conjuro de Artificer de Evocación o Nigromancia que cause daño estando el compañero a 120 pies de ti, sumas tu mod. de INT a una tirada de daño de ese conjuro) o Ferocidad (Zarpazo Terrible usa 1d6)."
      },
      {
        n: "Reanimación Mejorada (Improved Reanimation)",
        nv: 9,
        d: "El Estallido Mortal pasa a 4d4 y su daño necrótico ignora resistencias."
      },
      {
        n: "Modificaciones Macabras (Macabre Modifications)",
        nv: 9,
        d: "Tu compañero tiene dos modificaciones en lugar de una. Nuevas opciones: Hinchado (Bloated: el compañero pasa a ser Grande; cuando impacta con Zarpazo Terrible a una criatura Grande o menor, esta es empujada hasta 10 pies de distancia del compañero; además sumas tu mod. de INT al daño de su Estallido Mortal), Demacrado (Gaunt: Velocidad 45 pies y Velocidad de trepar igual a su Velocidad, trepa superficies difíciles, incluidos techos, sin pruebas; cuando una criatura de tu elección empieza su turno en una Emanación de 10 pies originada en el compañero, debe superar una salvación de SAB contra tu CD de conjuros o quedar Asustada hasta el inicio de su siguiente turno) y Viscoso (Velocidad de nado; se cuela por espacios de 1 pulgada; un atacante a 10 pies sufre daño de ácido igual a tu mod. de INT)."
      },
      {
        n: "Revivir Facilitado (Facilitated Revival)",
        nv: 15,
        d: "Lanzas Raise Dead una vez sin espacio ni componentes (herramientas de artesano como foco); se recupera con un Descanso Largo."
      },
      {
        n: "Transferencia de Vida (Life Transfer)",
        nv: 15,
        a: "R",
        d: "Cuando tú o tu compañero recibís daño, puedes usar tu Reacción para recuperar PG iguales a los PG actuales de tu compañero; el compañero cae entonces a 0 PG y muere (activando Estallido Mortal)."
      },
      {
        n: "Modificaciones Superiores (Superior Modifications)",
        nv: 15,
        d: "Tu compañero tiene tres modificaciones en lugar de dos."
      },
    ],
  },
};
