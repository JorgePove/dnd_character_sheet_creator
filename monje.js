/* ══════════════════════════════════════════════════════════════════
   monje.js — Monje: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · SCAG · SCAG/XGtE · XGtE · TCE · FToD · TCSR · PHB 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (15 entradas):
     Camino de la Mano Abierta    [PHB 2014] / [PHB 2024]
     Camino de las Sombras        [PHB 2014] / [PHB 2024]
     Camino de los Cuatro Elementos [PHB 2014]
     Camino de la Larga Muerte    [SCAG]
     Camino del Alma del Sol      [SCAG/XGtE]
     Camino del Maestro Borracho  [XGtE]
     Camino del Kensei            [XGtE]
     Camino de la Misericordia    [TCE] / [PHB 2024]
     Camino del Ser Astral        [TCE]
     Camino del Dragón Ascendente [FToD]
     Camino del Alma Cobalt       [TCSR]
     Camino del Guerrero Elemental [PHB 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_MONJE = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d8. Salvaciones: FUE y DES. Armaduras: ninguna. Armas: simples y marciales con la propiedad Ligera. Herramientas: una herramienta de artesano o instrumento musical. Habilidades: elige 2 entre Acrobacias, Atletismo, Historia, Perspicacia, Religión y Sigilo. [2014: armas: simples y espadas cortas; 2 habilidades entre Acrobacias, Atletismo, Historia, Perspicacia, Religión y Sigilo]"
    },
    {
      n: "Defensa sin Armadura (Unarmored Defense)",
      nv: 1,
      d: "Mientras no llevas armadura ni escudo, tu CA = 10 + mod. DES + mod. SAB."
    },
    {
      n: "Artes Marciales (Martial Arts)",
      nv: 1,
      a: "B",
      d: "Mientras no llevas armadura ni escudo: usas DES (en lugar de FUE) para ataques y daño con golpes sin armas y armas de monje (armas simples cuerpo a cuerpo y marciales Ligeras); tu dado de Artes Marciales es d6 (d8 en Nv.5, d10 en Nv.11, d12 en Nv.17) y sustituye el daño base del golpe sin arma; y cuando realizas la acción Atacar con un golpe sin arma o un arma de monje, puedes hacer un golpe sin arma como Acción Adicional. [2014: dados d4, d6 (Nv.5), d8 (Nv.11), d10 (Nv.17); el golpe adicional lo haces tras la acción Atacar con un golpe sin arma o arma de monje]"
    },
    {
      n: "Foco del Monje (Monk's Focus)",
      nv: 2,
      a: "B",
      d: "Tienes Puntos de Enfoque (PE) = tu nivel de Monje (desde Nv.2); los recuperas todos con un descanso corto o largo. CD de salvación de Enfoque = 8 + comp. + mod. SAB. Con ellos: Ráfaga de Golpes (Flurry of Blows): gastas 1 PE para hacer 2 golpes sin armas con tu Acción Adicional de Artes Marciales en lugar de 1. Defensa Paciente (Patient Defense): Acción Adicional, Retirarse gratis; con 1 PE también Esquivar. Paso del Viento (Step of the Wind): Acción Adicional, Correr gratis; con 1 PE también Retirarse y tu distancia de salto se duplica. [2014: Ki, mismos usos con 1 punto de ki cada uno: Ráfaga de Golpes y Paso del Viento como Acción Adicional, Defensa Paciente = Esquivar]"
    },
    {
      n: "Movimiento sin Armadura (Unarmored Movement)",
      nv: 2,
      d: "Mientras no llevas armadura ni escudo, tu Velocidad aumenta: +10 pies (Nv.2), +15 (Nv.6), +20 (Nv.10), +25 (Nv.14), +30 (Nv.18)."
    },
    {
      n: "Metabolismo Sobrenatural (Uncanny Metabolism)",
      nv: 2,
      a: "O",
      d: "Cuando tiras iniciativa, puedes recuperar todos tus Puntos de Enfoque gastados; además tiras tu dado de Artes Marciales y recuperas PG = tu nivel de Monje + el resultado. Una vez por descanso largo. [Sólo 2024]"
    },
    {
      n: "Subclase de Monje (Tradición Monástica)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6, 11 y 17. [2014: Tradición Monástica, mismos niveles]"
    },
    {
      n: "Desviar Ataques (Deflect Attacks)",
      nv: 3,
      a: "R",
      d: "Cuando un ataque te impacta y causa daño contundente, perforante o cortante, usas tu Reacción para reducir el daño en 1d10 + mod. DES + nivel de Monje. Si lo reduces a 0, puedes gastar 1 PE para redirigirlo: una criatura que veas a 5 pies (ataque cuerpo a cuerpo) o 60 pies (a distancia) hace una salvación de DES (CD de Enfoque) o sufre 2 dados de Artes Marciales + mod. DES de daño del mismo tipo (la mitad si la supera). [2014: Desviar Proyectiles: sólo ataques a distancia con arma; reduces 1d10 + mod. DES + nivel de Monje y, si llega a 0, puedes atrapar el proyectil y gastar 1 ki para devolverlo como ataque a distancia (20/60 pies) con la misma Reacción]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Caída Lenta (Slow Fall)",
      nv: 4,
      a: "R",
      d: "Cuando caes, usas tu Reacción para reducir el daño de la caída en 5 × tu nivel de Monje."
    },
    {
      n: "Ataque Extra (Extra Attack)",
      nv: 5,
      a: "A",
      d: "Atacas dos veces al realizar la acción Atacar."
    },
    {
      n: "Golpe Aturdidor (Stunning Strike)",
      nv: 5,
      a: "O",
      d: "Una vez por turno, cuando impactas con un arma de monje o un golpe sin arma, puedes gastar 1 PE: el objetivo hace una salvación de CON (CD de Enfoque); si falla queda Aturdido hasta el inicio de tu siguiente turno; si la supera, su Velocidad se reduce a la mitad hasta el inicio de tu siguiente turno y el siguiente ataque contra él tiene Ventaja. [2014: gastas 1 ki; si falla queda aturdido hasta el final de tu siguiente turno; sin efecto si la supera]"
    },
    {
      n: "Golpes Potenciados (Empowered Strikes)",
      nv: 6,
      d: "Tus golpes sin armas pueden infligir daño de fuerza en lugar de su tipo normal. [2014: Golpes Imbuidos de Ki: tus golpes sin armas cuentan como mágicos para superar resistencias e inmunidades]"
    },
    {
      n: "Evasión (Evasion)",
      nv: 7,
      d: "Cuando una salvación de DES permite la mitad de daño, no sufres daño si la superas y sólo la mitad si fallas (no funciona si estás Incapacitado)."
    },
    {
      n: "Quietud de Mente (Stillness of Mind)",
      nv: 7,
      d: "Con una acción, terminas un efecto sobre ti que te tenga hechizado o asustado. [Sólo 2014; en 2024 lo cubre Autorrestauración]"
    },
    {
      n: "Movimiento Acrobático (Acrobatic Movement)",
      nv: 9,
      d: "Mientras no llevas armadura ni escudo, te mueves por superficies verticales y sobre líquidos durante tu turno sin caer."
    },
    {
      n: "Concentración Elevada (Heightened Focus)",
      nv: 10,
      d: "Mejoras tus opciones de Foco: Ráfaga de Golpes hace 3 golpes sin armas por 1 PE; Defensa Paciente concede además PG temporales = 2 tiradas de tu dado de Artes Marciales; Paso del Viento permite llevar contigo a una criatura voluntaria Grande o menor adyacente. [Sólo 2024]"
    },
    {
      n: "Autorrestauración (Self-Restoration)",
      nv: 10,
      d: "Al final de tu turno puedes terminar en ti una condición de Hechizado, Asustado o Envenenado. Además no sufres agotamiento por no comer ni beber. [Sólo 2024]"
    },
    {
      n: "Pureza Corporal (Purity of Body)",
      nv: 10,
      d: "Eres inmune a enfermedades y veneno. [Sólo 2014]"
    },
    {
      n: "Desviar Energía (Deflect Energy)",
      nv: 13,
      d: "Desviar Ataques funciona contra daño de cualquier tipo. [Sólo 2024]"
    },
    {
      n: "Lengua del Sol y la Luna (Tongue of the Sun and Moon)",
      nv: 13,
      d: "Entiendes todos los idiomas hablados y cualquier criatura que hable un idioma puede entenderte. [Sólo 2014]"
    },
    {
      n: "Superviviente Disciplinado (Disciplined Survivor)",
      nv: 14,
      a: "O",
      d: "Ganas competencia en todas las salvaciones. Cuando fallas una salvación, puedes gastar 1 PE para repetirla y usar el nuevo resultado. [2014: Alma de Diamante: competencia en todas las salvaciones y gastas 1 ki para repetir una salvación fallida]"
    },
    {
      n: "Concentración Perfecta (Perfect Focus)",
      nv: 15,
      d: "Cuando tiras iniciativa y no usas Metabolismo Sobrenatural, recuperas Puntos de Enfoque hasta tener 4 si tienes menos. [Sólo 2024]"
    },
    {
      n: "Cuerpo Atemporal (Timeless Body)",
      nv: 15,
      d: "Tu cuerpo no envejece por magia ni sufre sus efectos; no necesitas comer ni beber. [Sólo 2014]"
    },
    {
      n: "Defensa Superior (Superior Defense)",
      nv: 18,
      a: "O",
      d: "Al inicio de tu turno puedes gastar 3 PE: durante 1 minuto (o hasta quedar Incapacitado) tienes resistencia a todo daño salvo de fuerza. [Sólo 2024]"
    },
    {
      n: "Cuerpo Vacío (Empty Body)",
      nv: 18,
      d: "Con una acción gastas 4 ki: 1 minuto invisible y con resistencia a todo daño salvo fuerza. Además puedes gastar 8 ki para lanzar Astral Projection sin componentes (sólo a ti). [Sólo 2014]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Cuerpo y Mente (Body and Mind)",
      nv: 20,
      d: "Tu DES y tu SAB aumentan en 4 (máx. 25). [Sólo 2024]"
    },
    {
      n: "Yo Perfecto (Perfect Self)",
      nv: 20,
      d: "Cuando tiras iniciativa y no te quedan puntos de ki, recuperas 4. [Sólo 2014]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Camino de la Mano Abierta [PHB 2014]": [
      {
        n: "Técnica de la Mano Abierta (Open Hand Technique)",
        nv: 3,
        a: "O",
        d: "Cada vez que impactas con un ataque de tu Ráfaga de Golpes, puedes imponer uno de estos efectos: salvación de DES o queda Derribado; salvación de FUE o es empujado hasta 15 pies; no puede usar Reacciones hasta el final de tu siguiente turno."
      },
      {
        n: "Integridad Corporal (Wholeness of Body)",
        nv: 6,
        a: "A",
        d: "Con una acción recuperas PG = 3 × tu nivel de Monje. Una vez usado, necesitas un descanso largo."
      },
      {
        n: "Tranquilidad (Tranquility)",
        nv: 11,
        d: "Al final de un descanso largo ganas el efecto de Sanctuary hasta el siguiente descanso largo (CD de salvación = 8 + comp. + mod. SAB)."
      },
      {
        n: "Palma Vibrante (Quivering Palm)",
        nv: 17,
        a: "A",
        d: "Al impactar con un golpe sin arma, gastas 3 ki para implantar vibraciones imperceptibles que duran días = tu nivel de Monje. Más tarde, con una acción, las terminas: el objetivo hace una salvación de CON; si falla, cae a 0 PG; si la supera, sufre 10d10 de daño necrótico. Sólo una criatura a la vez; puedes terminarlas sin daño si quieres."
      },
    ],

    "Camino de las Sombras [PHB 2014]": [
      {
        n: "Artes de las Sombras (Shadow Arts)",
        nv: 3,
        a: "A",
        d: "Con una acción gastas 2 ki para lanzar Darkness, Darkvision, Pass Without Trace o Silence sin componentes materiales. Además aprendes el truco Minor Illusion."
      },
      {
        n: "Paso de las Sombras (Shadow Step)",
        nv: 6,
        a: "B",
        d: "Mientras estés en luz tenue u oscuridad, como Acción Adicional te teletransportas hasta 60 pies a un espacio libre que veas también en luz tenue u oscuridad; tienes Ventaja en el primer ataque cuerpo a cuerpo que hagas antes del final del turno."
      },
      {
        n: "Manto de Sombras (Cloak of Shadows)",
        nv: 11,
        a: "A",
        d: "Mientras estés en luz tenue u oscuridad, con una acción te vuelves invisible hasta que ataques, lances un conjuro o estés en luz brillante."
      },
      {
        n: "Oportunista (Opportunist)",
        nv: 17,
        a: "R",
        d: "Cuando una criatura a 5 pies de ti recibe un impacto de un ataque de otra criatura distinta de ti, usas tu Reacción para hacerle un ataque cuerpo a cuerpo."
      },
    ],

    "Camino de los Cuatro Elementos [PHB 2014]": [
      {
        n: "Discípulo de los Elementos (Disciple of the Elements)",
        nv: 3,
        a: "A",
        d: "Conoces Atunamiento Elemental (Elemental Attunement: con una acción creas un efecto sensorial inofensivo de aire, tierra, agua o fuego, enciendes o apagas una vela, enfrías o calientas 1 libra de material o moldeas elementos) y una disciplina elemental más; aprendes otra en Nv.6, 11 y 17 (puedes cambiar una al aprender otra). Las disciplinas que lanzan conjuros no requieren componentes materiales. Desde Nv.5, puedes gastar ki adicional para subir el nivel del conjuro (+1 por ki; máximo de ki por conjuro: 3 en Nv.5-8, 4 en 9-12, 5 en 13-16, 6 en 17-20). Cualquier nivel: Colmillos de la Serpiente de Fuego (1 ki: alcance +10 pies y daño de fuego; +1 ki al impactar = +1d10), Puño de los Cuatro Truenos (2 ki: Thunderwave), Puño del Aire Inquebrantable (2+ ki: salvación de FUE a 30 pies, 3d10 contundente +1d10 por ki extra, empuja 20 pies y derriba), Ráfaga de los Espíritus del Vendaval (2 ki: Gust of Wind), Dar Forma al Río Fluyente (1 ki: controlas agua/hielo en 30 pies), Golpe Barrido de Ceniza (2 ki: Burning Hands), Látigo de Agua (2+ ki: salvación de DES a 30 pies, 3d10 contundente +1d10 por ki extra, derriba o atrae 25 pies). Nv.6: Agarre del Viento del Norte (3 ki: Hold Person), Gong de la Cumbre (3 ki: Shatter). Nv.11: Llamas del Fénix (4 ki: Fireball), Postura de Niebla (4 ki: Gaseous Form), Cabalgar el Viento (4 ki: Fly). Nv.17: Aliento del Invierno (6 ki: Cone of Cold), Defensa de la Montaña Eterna (5 ki: Stoneskin), Río de Llama Hambrienta (5 ki: Wall of Fire), Ola de Tierra Rodante (6 ki: Wall of Stone)."
      },
    ],


    /* ── SCAG ── */
    "Camino de la Larga Muerte [SCAG]": [
      {
        n: "Toque de la Muerte (Touch of Death)",
        nv: 3,
        a: "O",
        d: "Cuando reduces a una criatura a 0 PG a 5 pies de ti, ganas PG temporales = mod. SAB + nivel de Monje (mín. 1)."
      },
      {
        n: "Hora de la Cosecha (Hour of Reaping)",
        nv: 6,
        a: "A",
        d: "Con una acción, cada criatura a 30 pies que pueda verte hace una salvación de SAB o queda Asustada hasta el final de tu siguiente turno."
      },
      {
        n: "Maestría sobre la Muerte (Mastery of Death)",
        nv: 11,
        a: "O",
        d: "Cuando te reducen a 0 PG, puedes gastar 1 ki (sin acción) para quedarte a 1 PG."
      },
      {
        n: "Toque de la Larga Muerte (Touch of the Long Death)",
        nv: 17,
        a: "A",
        d: "Con una acción, tocas a una criatura a 5 pies y gastas de 1 a 10 ki: hace una salvación de CON y sufre 2d10 de daño necrótico por ki gastado (la mitad si la supera)."
      },
    ],


    /* ── SCAG/XGtE ── */
    "Camino del Alma del Sol [SCAG/XGtE]": [
      {
        n: "Rayo de Sol Radiante (Radiant Sun Bolt)",
        nv: 3,
        a: "O",
        d: "Ganas un ataque especial de conjuro a distancia (alcance 30 pies, eres competente) que haces con la acción Atacar en lugar de un golpe: usa DES para ataque y daño, daño radiante con tu dado de Artes Marciales. Cuando lo usas como parte de Atacar, puedes gastar 1 ki para hacerlo dos veces como Acción Adicional."
      },
      {
        n: "Golpe de Arco Abrasador (Searing Arc Strike)",
        nv: 6,
        a: "B",
        d: "Tras realizar la acción Atacar, puedes gastar 2 ki para lanzar Burning Hands como Acción Adicional; cada ki adicional sube el nivel del conjuro en 1 (máximo de ki gastable = la mitad de tu nivel de Monje)."
      },
      {
        n: "Estallido Solar Abrasador (Searing Sunburst)",
        nv: 11,
        a: "A",
        d: "Con una acción lanzas una esfera hasta un punto a 150 pies que estalla en 20 pies de radio: salvación de CON o 2d6 de daño radiante (sin cobertura total opaca). Puedes gastar hasta 3 ki: +2d6 de daño por ki."
      },
      {
        n: "Escudo Solar (Sun Shield)",
        nv: 17,
        a: "B",
        d: "Emites luz brillante 30 pies y tenue 30 pies más (la activas o apagas con Acción Adicional). Cuando una criatura te impacta con un ataque cuerpo a cuerpo, usas tu Reacción para infligirle 5 + mod. SAB de daño radiante."
      },
    ],


    /* ── XGtE ── */
    "Camino del Maestro Borracho [XGtE]": [
      {
        n: "Competencias Adicionales (Bonus Proficiencies)",
        nv: 3,
        d: "Ganas competencia en Interpretación y en suministros de cervecero (si no las tenías)."
      },
      {
        n: "Técnica del Borracho (Drunken Technique)",
        nv: 3,
        d: "Cuando usas Ráfaga de Golpes, ganas los beneficios de la acción Retirarse y tu Velocidad aumenta 10 pies hasta el final del turno."
      },
      {
        n: "Balanceo Ebrio (Tipsy Sway)",
        nv: 6,
        a: "R",
        d: "Levantarte de Derribado te cuesta 5 pies de movimiento (no la mitad de tu Velocidad). Además, cuando una criatura falla un ataque cuerpo a cuerpo contra ti, usas tu Reacción y gastas 1 ki para que ese ataque impacte a otra criatura de tu elección (no el atacante) que veas a 5 pies de ti."
      },
      {
        n: "Suerte del Borracho (Drunkard's Luck)",
        nv: 11,
        a: "O",
        d: "Cuando haces una prueba de característica, tirada de ataque o salvación con Desventaja, puedes gastar 2 ki para anular la Desventaja en esa tirada."
      },
      {
        n: "Frenesí de Ebriedad (Intoxicated Frenzy)",
        nv: 17,
        d: "Al usar Ráfaga de Golpes, puedes hacer hasta 3 ataques adicionales (hasta 5 en total), siempre que cada ataque de la Ráfaga apunte a una criatura distinta este turno."
      },
    ],

    "Camino del Kensei [XGtE]": [
      {
        n: "Camino del Kensei (Path of the Kensei)",
        nv: 3,
        a: "B",
        d: "Armas de Kensei: eliges 2 tipos de arma (uno cuerpo a cuerpo y uno a distancia; simples o marciales sin Pesada ni Especial; el arco largo vale) y ganas competencia con ellas; cuentan como armas de monje (otro tipo más en Nv.6, 11 y 17). Parada Ágil: si haces un golpe sin arma como parte de Atacar y llevas un arma cuerpo a cuerpo de Kensei, ganas +2 a la CA hasta el inicio de tu siguiente turno. Disparo del Kensei: como Acción Adicional, tus ataques a distancia con arma de Kensei infligen +1d4 de daño este turno. Camino del Pincel: competencia con suministros de caligrafía o pintura."
      },
      {
        n: "Uno con la Hoja (One with the Blade)",
        nv: 6,
        a: "O",
        d: "Tus ataques con armas de Kensei cuentan como mágicos. Además, al impactar con un arma de Kensei, puedes gastar 1 ki para infligir tu dado de Artes Marciales de daño adicional (una vez por turno)."
      },
      {
        n: "Afilar la Hoja (Sharpen the Blade)",
        nv: 11,
        a: "B",
        d: "Como Acción Adicional gastas hasta 3 ki para dar a un arma de Kensei que toques un bonificador al ataque y al daño = ki gastados, durante 1 minuto o hasta usarlo de nuevo. No afecta a armas mágicas con bonificador."
      },
      {
        n: "Precisión Infalible (Unerring Accuracy)",
        nv: 17,
        a: "O",
        d: "Una vez por turno, si fallas un ataque con un arma de monje, puedes repetir la tirada de ataque."
      },
    ],


    /* ── TCE ── */
    "Camino de la Misericordia [TCE]": [
      {
        n: "Implementos de Misericordia (Implements of Mercy)",
        nv: 3,
        d: "Ganas competencia en Perspicacia, Medicina y herramientas de herborista; recibes una máscara especial (cuervo, blanca lisa, rostro llorón, rostro risueño, calavera o mariposa)."
      },
      {
        n: "Manos de Curación (Hand of Healing)",
        nv: 3,
        a: "A",
        d: "Con una acción gastas 1 ki para tocar a una criatura y restaurarle PG = 1 dado de Artes Marciales + mod. SAB. Puedes sustituir un golpe de tu Ráfaga de Golpes por este efecto sin gastar ki."
      },
      {
        n: "Manos de Daño (Hand of Harm)",
        nv: 3,
        a: "O",
        d: "Una vez por turno, al impactar con un golpe sin arma, puedes gastar 1 ki para infligir daño necrótico adicional = 1 dado de Artes Marciales + mod. SAB."
      },
      {
        n: "Toque del Médico (Physician's Touch)",
        nv: 6,
        d: "Manos de Curación también puede terminar una enfermedad o una condición: cegado, ensordecido, paralizado, envenenado o aturdido. Manos de Daño puede dejar al objetivo envenenado hasta el final de tu siguiente turno."
      },
      {
        n: "Ráfaga de Curación y Daño (Flurry of Healing and Harm)",
        nv: 11,
        a: "O",
        d: "Al usar Ráfaga de Golpes, puedes sustituir cada golpe por Manos de Curación sin gastar ki, y usar Manos de Daño en los golpes de la Ráfaga sin gastar su ki (sigue limitado a una vez por turno)."
      },
      {
        n: "Mano de la Misericordia Suprema (Hand of Ultimate Mercy)",
        nv: 17,
        a: "A",
        d: "Con una acción tocas el cadáver de una criatura muerta hace menos de 24 horas y gastas 5 ki: vuelve a la vida con 4d10 + mod. SAB PG y se eliminan cegado, ensordecido, paralizado, envenenado y aturdido. Una vez por descanso largo."
      },
    ],

    "Camino del Ser Astral [TCE]": [
      {
        n: "Brazos del Ser Astral (Arms of the Astral Self)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas 1 ki: durante 10 minutos aparecen brazos espectrales. Al invocarlos, criaturas a 10 pies hacen salvación de DES o sufren daño de fuerza = 2 dados de Artes Marciales. Mientras duran: usas SAB en lugar de FUE en pruebas y salvaciones de FUE; puedes hacer golpes sin armas con ellos con 5 pies más de alcance, usando SAB para ataque y daño, y el daño es de fuerza."
      },
      {
        n: "Rostro del Ser Astral (Visage of the Astral Self)",
        nv: 6,
        a: "B",
        d: "Como Acción Adicional gastas 1 ki (o con Brazos) para invocar un rostro espectral 10 minutos: Visión Astral (ves 120 pies en oscuridad mágica o no), Sabiduría del Espíritu (Ventaja en Perspicacia y Intimidación) y Palabra del Espíritu (hablas a una criatura a 60 pies o a todos en 600 pies, sólo audible para quien elijas)."
      },
      {
        n: "Cuerpo del Ser Astral (Body of the Astral Self)",
        nv: 11,
        a: "R",
        d: "Con Brazos y Rostro activos aparece un cuerpo espectral. Desviar Energía: usas tu Reacción para reducir daño de ácido, frío, fuego, fuerza, rayo o trueno en 1d10 + mod. SAB (mín. 1). Brazos Potenciados: una vez por turno, al impactar con los brazos astrales, +1 dado de Artes Marciales de daño."
      },
      {
        n: "Ser Astral Despierto (Awakened Astral Self)",
        nv: 17,
        a: "B",
        d: "Como Acción Adicional gastas 5 ki: invocas brazos, rostro y cuerpo despiertos 10 minutos. Armadura del Espíritu: +2 a la CA. Ráfaga Astral: al usar Ataque Extra atacas tres veces en lugar de dos si todos los ataques usan los brazos astrales."
      },
    ],


    /* ── FToD ── */
    "Camino del Dragón Ascendente [FToD]": [
      {
        n: "Discípulo Dracónico (Draconic Disciple)",
        nv: 3,
        a: "O",
        d: "Presencia Dracónica: si fallas una prueba de CAR (Intimidación o Persuasión), puedes repetirla con tu Reacción (una vez por descanso largo). Golpe Dracónico: tus golpes sin armas pueden infligir daño ácido, frío, fuego, rayo o veneno. Lengua de Dragones: aprendes Dracónico u otro idioma."
      },
      {
        n: "Aliento del Dragón (Breath of the Dragon)",
        nv: 3,
        a: "O",
        d: "Sustituyes un ataque de la acción Atacar por un cono de 20 pies o línea de 30 pies × 5 pies de energía dracónica: salvación de DES (CD de ki) o sufren 2 dados de Artes Marciales de daño (la mitad si la superan); 3 dados desde Nv.11. Usos = tu bonificador de competencia por descanso largo; puedes gastar 2 ki para usos extra."
      },
      {
        n: "Alas Desplegadas (Wings Unfurled)",
        nv: 6,
        a: "O",
        d: "Al usar Paso del Viento, despliegas alas espectrales y tienes Velocidad de vuelo igual a tu Velocidad hasta el final del turno. Usos = tu bonificador de competencia por descanso largo."
      },
      {
        n: "Aspecto del Wyrm (Aspect of the Wyrm)",
        nv: 11,
        a: "B",
        d: "Como Acción Adicional creas un aura de 10 pies durante 1 minuto: Presencia Aterradora (criatura en el aura hace salvación de SAB o queda asustada 1 minuto) o Resistencia (tú y tus aliados tenéis resistencia a ácido, frío, fuego, rayo o veneno, a tu elección). Una vez por descanso largo o gastando 3 ki."
      },
      {
        n: "Aspecto Ascendente (Ascendant Aspect)",
        nv: 17,
        d: "Aliento Aumentado: gastas 1 ki para que tu Aliento del Dragón sea cono de 60 pies o línea de 90 pies con 4 dados de Artes Marciales. Vista Ciega 10 pies. Furia Explosiva: criaturas de tu elección en el aura de Aspecto del Wyrm hacen salvación de DES o sufren 3d10 de daño ácido, frío, fuego, rayo o veneno."
      },
    ],


    /* ── TCSR ── */
    "Camino del Alma Cobalt [TCSR]": [
      {
        n: "Erudición Mística (Mystical Erudition)",
        nv: 3,
        d: "Aprendes un idioma y ganas competencia en una habilidad (Arcanos, Historia, Investigación, Naturaleza o Religión); si ya eras competente, duplicas tu bonificador. Ganas otro idioma y habilidad en Nv.11 y 17."
      },
      {
        n: "Extraer Aspectos (Extract Aspects)",
        nv: 3,
        a: "R",
        d: "Cuando impactas con un ataque de tu Ráfaga de Golpes puedes analizar a la criatura: aprendes sus vulnerabilidades, resistencias, inmunidades al daño y a condiciones. Si una criatura analizada te falla un ataque, usas tu Reacción para hacerle un golpe sin arma si está a tu alcance (dura hasta un descanso)."
      },
      {
        n: "Extorsionar la Verdad (Extort Truth)",
        nv: 6,
        a: "O",
        d: "Al impactar con un golpe sin arma, gastas 1 ki para forzar una salvación de CAR: si falla, no puede mentir deliberadamente y las pruebas de CAR contra ella tienen Ventaja hasta 10 minutos. Sabes el resultado de la salvación; puedes tocarla sin dañarla."
      },
      {
        n: "Mente de Mercurio (Mind of Mercury)",
        nv: 11,
        a: "O",
        d: "Una vez por turno, si ya has usado tu Reacción, puedes gastar 1 ki para usar una Reacción adicional."
      },
      {
        n: "Descarga Debilitante (Debilitating Barrage)",
        nv: 17,
        a: "O",
        d: "Al impactar con un golpe sin arma, gastas 3 ki para dar a la criatura vulnerabilidad a un tipo de daño durante 1 minuto (o hasta que sufra ese daño); una resistencia se suprime; la inmunidad no cambia. No puedes afectar a la misma criatura de nuevo en 24 horas."
      },
    ],


    /* ── PHB 2024 ── */
    "Camino de la Mano Abierta [PHB 2024]": [
      {
        n: "Técnica de la Mano Abierta (Open Hand Technique)",
        nv: 3,
        a: "O",
        d: "Cada vez que impactas con un ataque de tu Ráfaga de Golpes, puedes imponer un efecto: Aturdir (Addle): el objetivo no puede hacer Ataques de Oportunidad hasta el inicio de su siguiente turno. Empujar (Push): salvación de FUE o es empujado hasta 15 pies. Derribar (Topple): salvación de DES o queda Derribado."
      },
      {
        n: "Integridad Corporal (Wholeness of Body)",
        nv: 6,
        a: "B",
        d: "Como Acción Adicional tiras tu dado de Artes Marciales y recuperas PG = resultado + mod. SAB (mín. 1). Usos = mod. SAB (mín. 1) por descanso largo."
      },
      {
        n: "Paso Veloz (Fleet Step)",
        nv: 11,
        d: "Cuando usas una Acción Adicional que no sea Paso del Viento, puedes usar Paso del Viento inmediatamente después de ella."
      },
      {
        n: "Palma Vibrante (Quivering Palm)",
        nv: 17,
        a: "O",
        d: "Al impactar con un golpe sin arma, gastas 4 PE para implantar vibraciones imperceptibles durante días = tu nivel de Monje. Después, las terminas (sin acción): el objetivo hace una salvación de CON; si falla sufre 10d12 de daño de fuerza, si la supera la mitad. Sólo una criatura a la vez."
      },
    ],

    "Camino de las Sombras [PHB 2024]": [
      {
        n: "Artes de las Sombras (Shadow Arts)",
        nv: 3,
        d: "Oscuridad: gastas 1 PE para lanzar Darkness sin componentes y ver dentro de ella; al inicio de tu turno puedes mover el área hasta 60 pies. Visión en la Oscuridad: ganas 60 pies de Visión en la oscuridad (o +60 pies si ya la tenías). Figuras Sombrías: conoces Minor Illusion (SAB es tu característica de lanzamiento)."
      },
      {
        n: "Paso de las Sombras (Shadow Step)",
        nv: 6,
        a: "B",
        d: "Mientras estés totalmente en luz tenue u oscuridad, como Acción Adicional te teletransportas hasta 60 pies a un espacio libre que veas también en luz tenue u oscuridad; tienes Ventaja en el siguiente ataque cuerpo a cuerpo antes del final del turno."
      },
      {
        n: "Paso de las Sombras Mejorado (Improved Shadow Step)",
        nv: 11,
        d: "Al usar Paso de las Sombras, puedes gastar 1 PE para eliminar el requisito de empezar y terminar en luz tenue u oscuridad; además puedes hacer un golpe sin arma inmediatamente después de teletransportarte."
      },
      {
        n: "Capa de Sombras (Cloak of Shadows)",
        nv: 17,
        a: "A",
        d: "Con una acción Mágica, totalmente en luz tenue u oscuridad, gastas 3 PE para envolverte en sombras 1 minuto (termina si quedas Incapacitado o terminas tu turno en luz brillante): ganas Invisibilidad, atraviesas espacios ocupados como terreno difícil y usas Ráfaga de Golpes sin gastar PE."
      },
    ],

    "Camino del Guerrero Elemental [PHB 2024]": [
      {
        n: "Sintonía Elemental (Elemental Attunement)",
        nv: 3,
        a: "O",
        d: "Al inicio de tu turno puedes gastar 1 PE para obtener energía elemental durante 10 minutos o hasta quedar Incapacitado. Alcance: tus golpes sin armas tienen +10 pies de alcance. Golpes Elementales: infliges daño de ácido, frío, fuego, rayo o trueno en lugar del normal, y el objetivo hace una salvación de FUE o lo mueves hasta 10 pies hacia ti o alejándolo."
      },
      {
        n: "Manipular Elementos (Manipulate Elements)",
        nv: 3,
        d: "Conoces el conjuro Elementalism (SAB es tu característica de lanzamiento)."
      },
      {
        n: "Estallido Elemental (Elemental Burst)",
        nv: 6,
        a: "A",
        d: "Con una acción Mágica gastas 2 PE: estalla energía elemental en una esfera de 20 pies de radio a 120 pies; salvación de DES o sufren 3 dados de Artes Marciales de daño ácido, frío, fuego, rayo o trueno (a tu elección); la mitad si la superan."
      },
      {
        n: "Zancada de los Elementos (Stride of the Elements)",
        nv: 11,
        d: "Mientras tu Sintonía Elemental está activa, tienes Velocidad de vuelo y de nado iguales a tu Velocidad."
      },
      {
        n: "Epítome Elemental (Elemental Epitome)",
        nv: 17,
        d: "Mientras tu Sintonía Elemental está activa: tienes resistencia a un tipo de daño (ácido, frío, fuego, rayo o trueno) que puedes cambiar al inicio de tu turno; Paso del Viento aumenta tu Velocidad 20 pies y las criaturas cercanas al moverte sufren 1 dado de Artes Marciales de daño; una vez por turno añades 1 dado de Artes Marciales al daño de tus golpes sin armas."
      },
    ],

    "Camino de la Misericordia [PHB 2024]": [
      {
        n: "Mano de Daño (Hand of Harm)",
        nv: 3,
        a: "O",
        d: "Una vez por turno, al impactar a una criatura con un golpe sin arma y causar daño, puedes gastar 1 PE para infligir daño necrótico adicional = 1 dado de Artes Marciales + mod. SAB."
      },
      {
        n: "Mano de Curación (Hand of Healing)",
        nv: 3,
        a: "A",
        d: "Con una acción Mágica, gastas 1 PE para tocar a una criatura y restaurarle PG = 1 dado de Artes Marciales + mod. SAB. Puedes sustituir un golpe de tu Ráfaga de Golpes por este efecto sin gastar PE."
      },
      {
        n: "Implementos de Misericordia (Implements of Mercy)",
        nv: 3,
        d: "Ganas competencia en Perspicacia y Medicina, y con herramientas de herborista."
      },
      {
        n: "Toque del Médico (Physician's Touch)",
        nv: 6,
        d: "Mano de Daño impone además Envenenado hasta el final de tu siguiente turno. Mano de Curación puede terminar una condición: Cegado, Ensordecido, Paralizado, Envenenado o Aturdido."
      },
      {
        n: "Ráfaga de Curación y Daño (Flurry of Healing and Harm)",
        nv: 11,
        a: "O",
        d: "Al usar Ráfaga de Golpes, puedes sustituir cada golpe por Mano de Curación sin gastar PE; Mano de Daño funciona con los golpes de la Ráfaga sin gastar PE (sigue limitado a una vez por turno). Usos = mod. SAB por descanso largo."
      },
      {
        n: "Mano de la Misericordia Suprema (Hand of Ultimate Mercy)",
        nv: 17,
        a: "A",
        d: "Con una acción Mágica tocas el cadáver de una criatura muerta hace menos de 24 horas y gastas 5 PE: vuelve a la vida con 4d10 + mod. SAB PG y se eliminan Cegado, Ensordecido, Paralizado, Envenenado y Aturdido. Una vez por descanso largo."
      },
    ],
  },
};
