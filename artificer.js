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
      n: "Magia de Manitas (Tinker's Magic)",
      nv: 1,
      a: "A",
      d: "Conoces el truco Mending. Además, como acción de Magia y con Tinker's Tools en la mano, creas un objeto de la lista del rasgo (equipo sencillo, p. ej. Rope, Caltrops, Crowbar...). Puedes hacerlo un número de veces igual a tu mod. de INT (mín. 1) por Descanso Largo; el objeto dura hasta que termines un Descanso Largo. [2014: Magical Tinkering — tocas un objeto Diminuto no mágico y le das una propiedad (luz de 5 pies, mensaje grabado de 6 s, olor o sonido, o texto/imagen de hasta 25 palabras) que dura indefinidamente, en un nº de objetos igual a tu mod. de INT (mín. 1)]"
    },
    {
      n: "Lanzamiento de Conjuros (Spellcasting)",
      nv: 1,
      d: "INT es tu característica de lanzamiento. Foco: herramientas de ladrón, de manitas o de artesano. Conoces 2 trucos (3 en Nv.10, 4 en Nv.14). Preparas conjuros de la lista de Artificer (2, 3, 4, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15 según el nivel) y cambias la lista tras un Descanso Largo; puedes lanzar como ritual los conjuros preparados con esa etiqueta. Espacios (semilanzador): Nv.1: 2×1º; Nv.3: 3×1º; Nv.5: 4×1º, 2×2º; Nv.7: 4/3; Nv.9: 4/3/2; Nv.11: 4/3/3; Nv.13: 4/3/3/1; Nv.15: 4/3/3/2; Nv.17: 4/3/3/3/1; Nv.19: 4/3/3/3/2. [2014: preparas conjuros = mod INT + mitad de tu nivel de Artificer (mín. 1); también puedes lanzar rituales]"
    },
    {
      n: "Replicar Objeto Mágico (Replicate Magic Item)",
      nv: 2,
      d: "Conoces 4 planos de objetos mágicos (5 en Nv.6, 6 en Nv.10, 7 en Nv.14, 8 en Nv.18); al subir de nivel puedes cambiar un plano por otro. Al terminar un Descanso Largo, con Tinker's Tools creas 1 o 2 objetos mágicos distintos de tus planos; el total de objetos creados que puedes mantener es 2 (3 en Nv.6, 4 en Nv.10, 5 en Nv.14, 6 en Nv.18). Las tablas de planos se amplían en Nv.2, 6, 10 y 14 con objetos cada vez más poderosos. Los objetos desaparecen 1d4 días después de tu muerte. [Sólo 2024; en 2014: Infuse Item — conoces 4 infusiones (6 en Nv.6, 8 en Nv.10, 10 en Nv.14, 12 en Nv.18) y puedes tener 2 objetos infundidos a la vez (3, 4, 5 y 6 en Nv.6, 10, 14 y 18)]"
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
      d: "Con Tinker's Tools puedes tocar (a 5 pies) un objeto mágico y hacer una de estas cosas: Cargar (Acción Adicional): gastas un espacio de conjuro y el objeto recupera cargas igual al nivel del espacio. Drenar (Acción Adicional, 1/Descanso Largo): conviertes el objeto en un espacio de conjuro (nivel 1 si es Común, nivel 2 si es Infrecuente o Raro; el espacio desaparece al terminar el siguiente Descanso Largo). Transmutar (acción de Magia, 1/Descanso Largo): lo conviertes en otro objeto mágico de tus planos conocidos. [Sólo 2024]"
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
      d: "Cuando tú o una criatura que veas a 30 pies falla una prueba de característica o una salvación, puedes usar tu Reacción para sumar tu mod. de INT a la tirada (puede convertir el fallo en éxito). Usos = mod. de INT (mín. 1) por Descanso Largo. [2014: la usas antes de saber el resultado: se suma a la prueba o salvación (no sólo si falla)]"
    },
    {
      n: "Adepto de Objetos Mágicos (Magic Item Adept)",
      nv: 10,
      d: "Puedes sintonizar con hasta 4 objetos mágicos. [2014: además creas objetos mágicos Comunes o Infrecuentes en la mitad de tiempo y coste]"
    },
    {
      n: "Objeto Almacén de Conjuros (Spell-Storing Item)",
      nv: 11,
      a: "A",
      d: "Tras un Descanso Largo, tocas un arma o un foco de lanzamiento y almacenas en él un conjuro de Artificer de nivel 1 a 3 (sin necesidad de tenerlo preparado ni consumir componentes costosos). Una criatura que lo sostenga lanza el conjuro con una acción de Magia usando tu característica de lanzamiento. Usos = el doble de tu mod. de INT (mín. 2); dura hasta agotarse o hasta que repitas el rasgo. [2014: sólo conjuros de nivel 1 o 2 que se lancen con 1 acción; arma simple/marcial o foco]"
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
        d: "Competencia con suministros de alquimista. Conjuros siempre preparados: Healing Word y Ray of Sickness (Nv.3); Flaming Sphere y Melf's Acid Arrow (Nv.5); Gaseous Form y Mass Healing Word (Nv.9); Blight y Death Ward (Nv.13); Cloudkill y Raise Dead (Nv.17)."
      },
      {
        n: "Elixir Experimental (Experimental Elixir)",
        nv: 3,
        a: "AB",
        d: "Al terminar un Descanso Largo produces 2 elixires en frascos vacíos a 5 pies (3 en Nv.6, 4 en Nv.15); el efecto se tira en d6: 1 Curación (2d4 + mod INT PG), 2 Rapidez (+10 pies de Velocidad, 1 h), 3 Resiliencia (+1 CA, 10 min), 4 Audacia (+1d4 a ataques y salvaciones, 1 min), 5 Vuelo (Velocidad de vuelo 10 pies, 10 min), 6 Transformación (efecto de Alter Self, 10 min). Con una acción creas un elixir extra gastando un espacio de conjuro (eliges el efecto). Beber o administrar un elixir es una acción. Duran hasta que se beben o hasta tu siguiente Descanso Largo."
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
        d: "Al terminar un Descanso Largo con suministros de alquimista creas 2 elixires (3 en Nv.5, 4 en Nv.9, 5 en Nv.15). Beber un elixir es una Acción Adicional. Efectos: Curación 2d8 + mod INT (3d8 en Nv.9, 4d8 en Nv.15); Rapidez +10 pies de Velocidad 1 h (+15 / +20 pies en niveles altos); Resiliencia +1 CA 10 min (1 h / 8 h); Audacia +1d4 a ataques y salvaciones 1 min (10 min / 1 h); Vuelo 10 pies 10 min (20 / 30 pies); y un efecto adicional de la tabla. Con una acción de Magia creas un elixir extra gastando un espacio de conjuro."
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
        d: "Competencia con herramientas de tallista. Conjuros siempre preparados: Shield y Thunderwave (Nv.3); Scorching Ray y Shatter (Nv.5); Fireball y Wind Wall (Nv.9); Ice Storm y Wall of Fire (Nv.13); Cone of Cold y Wall of Force (Nv.17)."
      },
      {
        n: "Cañón Arcano (Eldritch Cannon)",
        nv: 3,
        a: "AB",
        d: "Con una acción y herramientas de tallista o de herrero creas un cañón mágico Pequeño o Diminuto en un espacio libre a 5 pies. No puedes crear otro hasta un Descanso Largo o gastar un espacio de conjuro de nivel 1+; sólo uno a la vez. CA 18, PG = 5 × tu nivel de Artificer, inmune a veneno y psíquico; Mending le restaura 2d6 PG; desaparece a 0 PG, tras 1 hora o si lo despides con una acción. Con una Acción Adicional (a 60 pies) lo mueves y lo orientas, y activas una de sus opciones: Lanzallamas (cono de 15 pies, salvación DES, 2d8 fuego), Ballesta de Fuerza (ataque de conjuro a distancia a 120 pies, 2d8 fuerza y empuja 5 pies) o Protector (tú y criaturas a 10 pies ganáis 1d8 + mod INT PG temporales)."
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
        d: "Tú y tus aliados tenéis cobertura media a 10 pies de tu cañón. Puedes tener dos cañones a la vez (los creas con la misma acción) y activar ambos con la misma Acción Adicional."
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
        d: "Detonar: con tu Reacción (cañón a 60 pies) lo destruyes; las criaturas a 20 pies hacen salvación de DES o sufren 3d10 de daño de fuerza (mitad si la superan). Potencia de Fuego: el daño del cañón y la curación de Protector aumentan en 1d8."
      },
      {
        n: "Posición Fortificada (Fortified Position)",
        nv: 15,
        d: "Puedes mantener dos cañones a la vez y activar ambos con una sola Acción Adicional. Tú y tus aliados tenéis cobertura media a 10 pies de tu cañón."
      },
    ],


    /* ── ERftLW 2014 ── */
    "Herrero de Batalla [ERftLW 2014]": [
      {
        n: "Competencia con Herramientas y Conjuros de Herrero de Batalla",
        nv: 3,
        d: "Competencia con herramientas de herrero. Conjuros siempre preparados: Heroism y Shield (Nv.3); Branding Smite y Warding Bond (Nv.5); Aura of Vitality y Conjure Barrage (Nv.9); Aura of Purity y Fire Shield (Nv.13); Banishing Smite y Mass Cure Wounds (Nv.17)."
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
        d: "Tras un Descanso Largo, con herramientas de herrero, creas un constructo Mediano leal (sólo uno; si creas otro, el primero perece). CA 15, PG = 2 + mod INT + 5 × tu nivel de Artificer, Velocidad 40 pies, inmune a veneno. Actúa en tu turno justo después del tuyo y sólo Esquiva salvo que le ordenes otra acción con una Acción Adicional. Ataque Imbuido de Fuerza (1d8 + tu bonificador de competencia, fuerza), Reparar (3/día, 2d8 + comp.) y Desviar Ataque (Reacción: Desventaja a un ataque contra otra criatura a 5 pies). Mending le restaura 2d6 PG; si muere hace menos de 1 hora, lo revives con herramientas de herrero y un espacio de conjuro."
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
        d: "Usas tu mod. de INT en lugar de FUE o DES para las tiradas de ataque y daño con armas mágicas. Ganas competencia con armas marciales y puedes usar armas como foco de lanzamiento."
      },
      {
        n: "Defensor de Acero (Steel Defender)",
        nv: 3,
        a: "B",
        d: "Constructo Mediano leal: CA 12 + mod INT, PG = 5 + 5 × tu nivel de Artificer, Velocidad 40 pies, inmune a veneno y a las condiciones Hechizado, Agotamiento y Envenenado. Actúa en tu turno y sólo Esquiva salvo que le ordenes otra acción con una Acción Adicional. Ataque Imbuido de Fuerza (1d8 + 2 + mod INT, fuerza), Reparar (3/día, 2d8 + mod INT PG) y Desviar Ataque (Reacción: Desventaja a un ataque cercano). Si muere, puedes revivirlo en 1 hora gastando un espacio de conjuro."
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
        d: "Competencia con armadura pesada y herramientas de herrero. Conjuros siempre preparados: Magic Missile y Thunderwave (Nv.3); Mirror Image y Shatter (Nv.5); Hypnotic Pattern y Lightning Bolt (Nv.9); Fire Shield y Greater Invisibility (Nv.13); Passwall y Wall of Force (Nv.17)."
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
        d: "Guardián: Guanteletes de Trueno — cuando una criatura Enorme o menor a 30 pies recibe daño de alguien distinto de ti, con tu Reacción debe superar una salvación de FUE o es arrastrada hasta 30 pies a un espacio libre a 5 pies de ti (bonificador de competencia veces por Descanso Largo). Infiltrador: Lanzarrayos — la criatura que sufre su daño brilla (luz tenue a 5 pies) hasta tu siguiente turno; el siguiente ataque contra ella tiene Ventaja y causa +1d6 relámpago."
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
        d: "Puedes cambiar de modelo al terminar un descanso corto o largo con herramientas de herrero en la mano. Dreadnaught: Demoledor de Fuerza (arma simple cuerpo a cuerpo, 1d10 fuerza, Alcance; empuja o atrae hasta 10 pies a una criatura de un tamaño menor) y Estatura Gigante (Acción Adicional: 1 minuto, Alcance +5 pies y te vuelves Grande; mod. INT veces por Descanso Largo). Guardián: Pulso de Trueno (arma simple cuerpo a cuerpo, 1d8 trueno; el impactado tiene Desventaja contra otros objetivos) y Campo Defensivo (Acción Adicional mientras estás Bloodied: PG temporales = tu nivel de Artificer; mod. INT veces, mín. 1, por Descanso Largo). Infiltrador: Lanzarrayos (a distancia 90/300 pies, 1d6 relámpago; una vez por turno +1d6), Pasos Potenciados (+5 pies de Velocidad) y Campo Amortiguador (Ventaja en Sigilo)."
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
        d: "Dreadnaught: Demoledor 2d6; Estatura Gigante da Alcance +10 pies, tamaño Grande o Enorme y Ventaja en pruebas y salvaciones de FUE. Guardián: Pulso 1d10; Reacción para atraer criaturas a 30 pies (mod. INT veces por Descanso Largo). Infiltrador: Lanzarrayos 2d6; las criaturas impactadas emiten luz tenue y tienen Desventaja al atacarte; Acción Adicional: Velocidad de vuelo igual al doble de tu Velocidad (mod. INT veces por Descanso Largo)."
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
        d: "Cartografía Iluminada: lanzas Faerie Fire sin espacio mod. INT veces (mín. 1) por Descanso Largo. Salto de Portal: en tu turno gastas la mitad de tu Velocidad para teletransportarte a un espacio libre a 10 pies de ti, o a 5 pies de un portador del mapa a 30 pies."
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
        d: "Refugio Seguro: un portador del mapa reducido a 0 PG puede destruirlo para recuperar PG iguales al doble de tu nivel de Artificer y teletransportarse a 5 pies de ti o de otro portador. Camino Certero: lanzas Find the Path una vez por Descanso Largo sin espacio, preparación ni componentes."
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
        a: "B",
        d: "Acción Adicional: envías una descarga a una criatura (modifica Spare the Dying); el objetivo recupera PG iguales a tu nivel de Artificer y las criaturas a 10 pies hacen salvación de DES (tu CD) o sufren 2d4 de daño de relámpago (mitad si la superan). Usos = mod. de INT por Descanso Largo. El daño sube a 3d4 en Nv.11 y 4d4 en Nv.17."
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
        d: "Con una acción de Magia y herramientas de manitas creas un compañero no-muerto a 5 pies. Dura hasta un Descanso Largo o hasta que lo despidas, y muere si tú mueres. Actúa en tu turno y sólo Esquiva salvo que le ordenes otra acción con una Acción Adicional (o estés Incapacitado). CA 10 + mod INT, PG = 5 + 5 × tu nivel de Artificer, Velocidad 30 pies, resistencia a necrótico y veneno, inmune a relámpago, visión ciega 60 pies. Estallido Mortal (2d4 necrótico en emanación de 10 pies al morir), Absorción de Rayos (recupera PG con daño de relámpago) y Zarpazo Terrible (1d4 + mod INT necrótico)."
      },
      {
        n: "Modificaciones Extrañas (Strange Modifications)",
        nv: 5,
        d: "Tu compañero gana una modificación: Conducto Arcano (lanzas conjuros desde su espacio y sumas tu mod. de INT a una tirada de daño de un conjuro de Evocación o Nigromancia, una vez por turno) o Ferocidad (Zarpazo Terrible usa 1d6)."
      },
      {
        n: "Reanimación Mejorada (Improved Reanimation)",
        nv: 9,
        d: "El Estallido Mortal pasa a 4d4 y su daño necrótico ignora resistencias."
      },
      {
        n: "Modificaciones Macabras (Macabre Modifications)",
        nv: 9,
        d: "Tu compañero tiene dos modificaciones en lugar de una. Nuevas opciones: Hinchado (Grande; empuja hasta 10 pies a quien golpea; suma tu mod. de INT al Estallido Mortal), Demacrado (Velocidad 45 pies y de trepar; las criaturas que empiezan el turno a 10 pies hacen salvación de SAB o quedan Asustadas) y Viscoso (Velocidad de nado; se cuela por espacios de 1 pulgada; un atacante a 10 pies sufre daño de ácido igual a tu mod. de INT)."
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
        d: "Reacción cuando recibes daño: recuperas PG iguales a los PG actuales de tu compañero; el compañero muere y detona su Estallido Mortal."
      },
      {
        n: "Modificaciones Superiores (Superior Modifications)",
        nv: 15,
        d: "Tu compañero tiene tres modificaciones en lugar de dos."
      },
    ],
  },
};
