/* ══════════════════════════════════════════════════════════════════
   bloodhunter.js — Blood Hunter (2022): rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Fuente:
     Blood Hunter Class (2022) — Matthew Mercer / Darrington Press
     Publicado en D&D Beyond como contenido de terceros oficial
   ──────────────────────────────────────────────────────────────────
   NOTAS DE CLASE:
     • Característica de Hemocraft: INT (por defecto) o SAB (variante 2022)
     • Blood Maledict (Maldición de Sangre): 1 uso/descanso corto o largo
       (+1 uso en Nv.6/10/14/18). CD = 8 + comp + mod Hemocraft.
     • Crimson Rite (Rito Carmesí): activas un rito sobre un arma como AA,
       sufriendo 1 dado de Hemocraft de daño. Tipos básicos: Rite of the Flame
       (fuego), Rite of the Frozen (frío), Rite of the Storm (rayo). Aprenden
       ritos adicionales según subclase o nivel.
     • Dado de Hemocraft: d4 (Nv.1-4) → d6 (Nv.5-10) → d8 (Nv.11-16) → d10 (Nv.17+)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (4 órdenes):
     Orden del Fantasmacuchillas (Ghostslayer)
     Orden del Licántropo (Lycan)
     Orden del Mutante (Mutant)
     Orden del Alma Profana (Profane Soul)
══════════════════════════════════════════════════════════════════ */

const CLASE_BLOODHUNTER = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras y medias. Escudos. Armas simples y marciales. Herramientas de alquimista. Salvaciones: FUE y DES. Habilidades: elige 3 entre Acrobacias, Atletismo, Arcanos, Historia, Perspicacia, Investigación, Medicina, Naturaleza, Percepción, Religión y Supervivencia."
    },
    {
      n: "Rito del Cazador (Hunter's Bane)",
      nv: 1,
      d: "Realizas el ritual del Bane del Cazador, sufriendo un cambio permanente pero ganando percepción sobrenatural. Tienes ventaja en pruebas de SAB (Supervivencia) para rastrear Hadas, Fiends y No-Muertos, y en pruebas de INT para recordar información sobre ellos."
    },
    {
      n: "Maldición de Sangre (Blood Maledict)",
      nv: 1,
      d: "Conoces 1 Maldición de Sangre de la lista y puedes usarla 1 vez por descanso corto o largo (→2 usos Nv.6 →3 usos Nv.10 →4 usos Nv.14 →5 usos Nv.18). Aprendes una nueva maldición en Nv.3/6/9/12/15/18. Para amplificar (Amplify) una maldición, gastas 1 PG. CD de salvación = 8 + comp + mod Hemocraft. Maldiciones base: Acechado (objetivo rastreado, ventaja en tus ataques), Sangre Ansiosa (desventaja a velocidad), Coagulante (resiste daño una vez), Ojos Hendidos (Cegado), Máscara de la Oscuridad (oscuridad alrededor del objetivo), Marca (desventaja en salvaciones del objetivo), Menguante (reducción de CR efectivo para huir), Sangre Envenenada (veneno/necrótico). Maldiciones de subclase se describen en sus respectivas secciones."
    },
    {
      n: "Rito Carmesí (Crimson Rite)",
      nv: 2,
      d: "Como AA activas un rito en un arma que empuñas: sufres daño = 1 dado de Hemocraft (sin resistencia posible) y el arma inflige daño adicional = mismo dado de ese tipo elemental hasta que el rito termine o te incapacites. Tienes 3 Ritos básicos: Rite of the Flame (fuego), Rite of the Frozen (frío), Rite of the Storm (rayo). El coste de PG escala con el dado de Hemocraft (d4→d6→d8→d10 según nivel). Solo puedes tener 1 rito activo a la vez."
    },
    {
      n: "Modificador de Hemocraft",
      nv: 2,
      d: "Tu mod Hemocraft = mod INT (por defecto) o mod SAB (variante 2022 opcional). Se usa para la CD de Maldiciones de Sangre, el daño de ciertos rasgos y los conjuros del Alma Profana."
    },
    {
      n: "Orden Sanguínea (Blood Hunter Order)",
      nv: 3,
      d: "Eliges tu subclase (Orden). Otorga rasgos en Nv.3, 7, 11, 15 y 18."
    },
    {
      n: "Marca de la Condenación (Brand of Castigation)",
      nv: 6,
      d: "Cuando dañas a una criatura con un arma que tiene un Rito Carmesí activo, puedes canalizar la magia hemocraft para marcarla. La criatura marcada recibe 1 dado de Hemocraft adicional de daño del rito cuando te ataque a ti. La marca dura 1 hora o hasta que uses esta característica de nuevo. Una sola marca activa."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Ataque Extra",
      nv: 5,
      d: "Atacas dos veces cuando usas la acción de Atacar."
    },
    {
      n: "Evasión de Garra (Grim Psychometry)",
      nv: 9,
      d: "Puedes meditar durante 10 minutos con un objeto para discernir detalles vagos de cualquier pasado maligno o violento vinculado a él. Haces una prueba de SAB (Historia) y el DM decide qué impresiones recibes. No te proporciona información detallada pero sí presentimientos e imágenes fragmentadas."
    },
    {
      n: "Oscuridad (Dark Augmentation)",
      nv: 10,
      d: "Tu cuerpo se fortalece mediante la hemocraft. Tu velocidad aumenta en 5 pies. Además añades tu mod Hemocraft a cualquier tirada de salvación STR, DES o CON que no sea ya tu mod de la característica correspondiente."
    },
    {
      n: "Marca del Destierro (Brand of Sundering) [compartido]",
      nv: 11,
      d: "Cada subclase tiene su propio rasgo de Nv.11 relacionado con la Marca de Condenación. Ver la sección de cada subclase."
    },
    {
      n: "Represalia Sanguinaria (Blood Curse Mastery)",
      nv: 20,
      d: "Cuando usas Blood Maledict y amplías una maldición, no sufres el coste de PG de la amplificación. Además tus Maldiciones de Sangre ya no cuentan los usos al amplificar."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (ÓRDENES)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── ORDEN DEL FANTASMACUCHILLAS (Ghostslayer) ── */
    "Orden del Fantasmacuchillas [BH2022]": [
      {
        n: "Rito del Alba (Rite of the Dawn)",
        nv: 3,
        d: "Aprendes el Rite of the Dawn (rito adicional gratuito): el daño extra del rito es radiante. Mientras esté activo: tu arma emite luz brillante (20 pies) + tenue (20 pies más), tienes resistencia a daño necrótico, y tus ataques pueden afectar a criaturas incorpóreas y criaturas en el Plano Etéreo (incluso si están a tu alcance y normalmente serían intangibles)."
      },
      {
        n: "Especialista en Maldiciones (Curse Specialist)",
        nv: 3,
        d: "Ganas 1 uso adicional de Blood Maledict (permanente, acumulable con los incrementos normales de nivel). Además, puedes lanzar tus Maldiciones de Sangre sobre cualquier criatura, incluso si no tiene sangre (constructos, elementales, no-muertos, plantas, etc.)."
      },
      {
        n: "Paso Etéreo (Ethereal Step)",
        nv: 7,
        d: "Al inicio de tu turno puedes proyectarte al Plano Etéreo como AA. Permaneces ahí hasta el final del turno, momento en el que vuelves al plano material en el espacio que ocupas o en el más cercano disponible. Mientras estés en el Plano Etéreo, puedes ver y oír el plano material hasta 60 pies (y viceversa), eres inmune al daño no mágico, e invisible para criaturas del plano material. Usos = mod Hemocraft (mínimo 1) por descanso largo."
      },
      {
        n: "Marca del Destrozo (Brand of Sundering)",
        nv: 11,
        d: "Cuando una criatura marcada con Brand of Castigation recibe daño de tu Rite of the Dawn, ese daño también se aplica si la criatura intentara moverse a través de criaturas u objetos (no puede hacerlo mientras esté marcada). Además, el daño del rite aumenta: la criatura recibe 1 dado adicional de Hemocraft de daño radiante del rito mientras esté marcada."
      },
      {
        n: "Maldición de Sangre del Exorcista",
        nv: 15,
        d: "Ganas la Blood Curse of the Exorcist (no cuenta contra tus maldiciones conocidas): como AA seleccionas una criatura a 30 pies que esté Asustada, Encantada o Poseída — ese efecto termina inmediatamente. Amplificar: la criatura que causó el efecto sufre 3d6 daño psíquico y, si falla una salvación de SAB, queda Aturdida hasta el final de tu siguiente turno."
      },
      {
        n: "Renacer del Rito (Rite Revival)",
        nv: 18,
        d: "Cuando caes a 0 PG y tienes un Crimson Rite activo, puedes elegir terminar el rito y caer a 1 PG en lugar de quedar inconsciente. No puedes usar esta característica de nuevo hasta terminar un descanso largo."
      },
    ],

    /* ── ORDEN DEL LICÁNTROPO (Lycan) ── */
    "Orden del Licántropo [BH2022]": [
      {
        n: "Sentidos Aumentados (Heightened Senses)",
        nv: 3,
        d: "Tienes ventaja en pruebas de SAB (Percepción) que dependan del oído o el olfato."
      },
      {
        n: "Transformación Híbrida (Hybrid Transformation)",
        nv: 3,
        d: "Como AA te transformas en tu forma híbrida durante hasta 1 hora. Puedes hablar, usar equipo y llevar armadura en esta forma. Puedes revertir como AA. Reviertes automáticamente si caes Inconsciente, llegas a 0 PG o mueres. Esta característica reemplaza las reglas de licantropía del Manual de Monstruos. Usos = 2 por descanso corto o largo (→sin límite en Nv.15). Mientras estés transformado: Fuerza Feral — +1 a tiradas de daño cuerpo a cuerpo (→+2 en Nv.11, →+3 en Nv.18), ventaja en tiradas de FUE y salvaciones de FUE, velocidad +10 pies; Resiliencia Maldita — resistencia a daño contundente, perforante y cortante de armas no mágicas y no plateadas; Defensa Feral — +1 CA cuando no lleves armadura; Garras del Rito — puedes aplicar el daño de tu Crimson Rite activo a tus ataques desarmados (garras), que hacen 1d6 cortante + mod FUE o DES; Sed de Sangre (Bloodlust) — cuando comienzas tu turno con la mitad o menos de tus PG máximos, debes superar una salvación de SAB (CD = 8 + comp + mod Hemocraft) o atacar a la criatura más cercana (aliada o enemiga). Si hay empate, tiras al azar."
      },
      {
        n: "Destreza del Acechador (Stalker's Prowess)",
        nv: 7,
        d: "Tu velocidad aumenta 10 pies (acumulable con el bono de la forma híbrida). Además en tu forma híbrida: tus ataques de arma cuentan como mágicos a efectos de superar resistencias e inmunidades, y añades tu bonificador de competencia a las tiradas de ataque con tus garras (si no lo tenías ya)."
      },
      {
        n: "Transformación Avanzada (Advanced Transformation)",
        nv: 11,
        d: "Aprendes a controlar mejor la bestia. Los usos de Hybrid Transformation aumentan: ahora se recuperan con descanso corto o largo sin límite de veces por día. Además, al inicio de cada uno de tus turnos en forma híbrida cuando tengas la mitad o menos de PG, recuperas PG = 1 + mod CON (mínimo 1) — Lycan Regeneration. Esto no funciona si hiciste una tirada de Sed de Sangre fallida ese turno."
      },
      {
        n: "Marca de lo Voraz (Brand of the Voracious)",
        nv: 15,
        d: "Cuando marcas a una criatura con Brand of Castigation, puedes gastar 1 uso de Blood Maledict para marcarla con Brand of the Voracious. Tienes ventaja en las tiradas de salvación de Sed de Sangre cuando la criatura marcada esté a 30 pies. Además, mientras la criatura marcada con Brand of the Voracious esté viva, siempre cuenta como si estuviera a la mitad o menos de PG para los efectos de Hybrid Transformation (el DM decide si esto aplica en cada caso específico). Usos de la transformación: en Nv.15 son ilimitados."
      },
      {
        n: "Transformación Implacable (Impending Transformation)",
        nv: 18,
        d: "Tu dominio de la forma híbrida alcanza su cúspide. El bono de daño de Fuerza Feral aumenta a +3. Los ataques en forma híbrida ahora también añaden tu mod Hemocraft al daño. Cuando reduces a 0 PG a una criatura marcada con Brand of the Voracious, recuperas PG = dado de Hemocraft + mod CON."
      },
    ],

    /* ── ORDEN DEL MUTANTE (Mutant) ── */
    "Orden del Mutante [BH2022]": [
      {
        n: "Arte del Mutágeno (Mutagencraft)",
        nv: 3,
        d: "Aprendes a elaborar mutágenos alquímicos que alteran temporalmente tus capacidades mentales y físicas. Al terminar un descanso corto o largo, elaboras mutágenos (1 al inicio → 2 en Nv.7 → 3 en Nv.11 → 4 en Nv.15 → 5 en Nv.18). Los mutágenos son inestables y caducan al terminar tu próximo descanso si no los usas. Como AA bebes un mutágeno; sus efectos y efectos secundarios duran hasta que termines un descanso corto o largo. Mientras estés bajo el efecto de 1 o más mutágenos, puedes usar tu Acción para purgarlos todos (terminando efectos y secundarios). Los mutágenos están diseñados para tu biología específica — no tienen efecto en otras criaturas. Fórmulas conocidas: 4 (Nv.3) → 5 (Nv.7) → 6 (Nv.11) → 7 (Nv.15) → 8 (Nv.18). Lista completa de mutágenos (con efecto y efecto secundario): Aether [req. Nv.11]: vuelo 20 pies durante 1 hora; desventaja en tiradas de FUE y DES. Celeridad: DES +3 (→+4 Nv.11, →+5 Nv.18) y máximo +3; desventaja en salvaciones de SAB. Conversación: ventaja en pruebas de INT; desventaja en pruebas de CAR. Crueldad [req. Nv.11]: ataque adicional como AA; desventaja en salvaciones de INT/SAB/CAR. Embers: resistencia a fuego, vulnerabilidad a frío. Escarcha: resistencia a frío, vulnerabilidad a fuego. Impermeable: resistencia a perforante, vulnerabilidad a cortante. Movilidad: inmunidad a Aferrado y Restringido; desventaja en iniciativa × 2. Ojo Nocturno: visión oscura 120 pies (o +90 si ya la tenías) + ver a través de oscuridad mágica; desventaja en ataques y Percepción cuando tú o el objetivo esté en luz solar directa. Potencia: FUE +3 (→+4 Nv.11, →+5 Nv.18) y máximo +3; desventaja en salvaciones de DES. Precisión [req. Nv.11]: crítico con 19-20; desventaja en salvaciones de FUE. Rapidez: velocidad +10 pies (→+15 pies a Nv.15); desventaja en pruebas de INT. Reconstrucción [req. Nv.7]: al inicio de cada turno con 1 PG pero menos de la mitad del máximo, recuperas PG = bonificador de competencia; velocidad −10 pies. Sagacidad: INT +3 (→+4 Nv.11, →+5 Nv.18) y máximo +3; desventaja en salvaciones de CAR. Protegido: resistencia a cortante, vulnerabilidad a contundente. Inquebrantable: resistencia a contundente, vulnerabilidad a perforante. Bermellón: 1 uso adicional de Blood Maledict; desventaja en salvaciones de muerte."
      },
      {
        n: "Metabolismo Extraño (Strange Metabolism)",
        nv: 7,
        d: "Tu cuerpo se ha adaptado a toxinas. Eres inmune al daño de veneno y a la condición Envenenado. Además, una vez por descanso corto o largo, puedes usar una AA para ignorar el efecto secundario de un mutágeno que te esté afectando durante 1 minuto."
      },
      {
        n: "Marca del Axioma (Brand of Axiom)",
        nv: 11,
        d: "Una criatura marcada con Brand of Castigation no puede beneficiarse de la invisibilidad, de ilusiones que alteren su apariencia, ni del polimorfismo o cambio de forma. Si intenta transformarse, debe superar una salvación de SAB (CD = 8 + comp + mod Hemocraft) o el intento falla y queda Aturdida hasta el final de su turno."
      },
      {
        n: "Maldición de Sangre de la Corrosión",
        nv: 15,
        d: "Ganas la Blood Curse of Corrosion (no cuenta contra tus maldiciones conocidas): como AA elige una criatura a 30 pies — queda Envenenada durante 1 minuto (salvación de CON para evitarlo; puede repetir al inicio de cada turno). Amplificar: la criatura también sufre 4d6 de daño ácido al inicio de cada uno de sus turnos mientras esté Envenenada."
      },
      {
        n: "Mutación Exaltada (Exalted Mutation)",
        nv: 18,
        d: "Tu cuerpo ha aprendido a producir mutágenos de forma natural. Como AA elige un mutágeno que te esté afectando: sus efectos y secundarios terminan, y puedes activar inmediatamente otro mutágeno de tu lista de fórmulas conocidas sin necesidad de haberlo elaborado previamente. Usos = mod Hemocraft (mínimo 1) por descanso largo."
      },
    ],

    /* ── ORDEN DEL ALMA PROFANA (Profane Soul) ── */
    "Orden del Alma Profana [BH2022]": [
      {
        n: "Patrón Ultraterreno (Otherworldly Patron)",
        nv: 3,
        d: "Forjas un pacto con uno de los siguientes patrones (versión 2022 de D&D Beyond incluye): Archfey, Celestial, Fathomless, Fiend, Genio, Gran Antiguo, Hexblade, No-Muerto (Undead) y Moribundo (Undying). La elección modifica el rasgo Rite Focus y otorga un conjuro especial en Nv.7 y Nv.15."
      },
      {
        n: "Magia de Pacto (Pact Magic)",
        nv: 3,
        d: "Tu mod Hemocraft es tu característica de lanzamiento. Aprendes 2 trucos de Brujo (→3 en Nv.10). Conjuros conocidos: 2 (Nv.3) → escalando hasta 11 (Nv.20). Espacios de conjuro (todos del mismo nivel, se recuperan con descanso largo — no con descanso corto como el Brujo estándar): 1 espacio Nv.1 (Nv.3-5) → 2 espacios Nv.1 (Nv.6) → 2 espacios Nv.2 (Nv.7-10) → 2 espacios Nv.3 (Nv.13-18) → 2 espacios Nv.4 (Nv.19-20)."
      },
      {
        n: "Foco del Rito (Rite Focus)",
        nv: 3,
        d: "Tu arma se convierte en foco de conjuro para tus conjuros de Brujo mientras tengas un Crimson Rite activo en ella. Además, según tu patrón, obtienes un beneficio adicional mientras el rito esté activo: Archfey — la criatura dañada pierde beneficios de cobertura e invisibilidad hasta el final de tu siguiente turno. Celestial — como AA gastas 1 uso de Blood Maledict para curar a una criatura a 60 pies que veas PG = 1 dado de Hemocraft + mod Hemocraft. Fathomless — puedes respirar bajo el agua; 1/turno puedes reducir la velocidad de la criatura dañada en 10 pies hasta el final de su siguiente turno. Fiend — si sacas 1 en un dado de rito, puedes relanzarlo (1 vez por ataque). Gran Antiguo — en un crítico, la criatura y otras a 10 pies quedan Asustadas de ti hasta el final de tu siguiente turno. Hexblade — cuando marcas a una criatura con Blood Maledict, tu próximo ataque contra ella inflige daño adicional = bonificador de competencia. No-Muerto (Undead) — si matas a una criatura, ganas PG temporales = dado de Hemocraft. Moribundo (Undying) — ventaja en salvaciones de muerte mientras el rito esté activo. Genio — como AA gastas 1 uso de Blood Maledict para obtener vuelo 30 pies durante turnos = mod Hemocraft (mínimo 1)."
      },
      {
        n: "Oscuro Auxiliar (Dark Ones' Blessing / Patron Gift)",
        nv: 7,
        d: "Cuando usas tu acción para lanzar un truco, puedes realizar un ataque con arma como AA. Además tu patrón te concede el uso de un conjuro especial 1 vez por descanso largo (sin gastar espacio): Archfey — Slow. Celestial — Revivify. Fathomless — Lightning Bolt. Fiend — Fireball. Genio — Protection from Energy. Gran Antiguo — Haste. Hexblade — Blink. No-Muerto — Speak with Dead. Moribundo — Bestow Curse."
      },
      {
        n: "Marca de la Cicatriz Sombría (Brand of the Sapping Scar)",
        nv: 11,
        d: "Una criatura marcada con Brand of Castigation tiene desventaja en tiradas de salvación contra tus conjuros de Brujo."
      },
      {
        n: "Arcana Desbloqueada (Unsealed Arcana)",
        nv: 15,
        d: "Tu patrón te otorga un segundo conjuro especial que puedes lanzar sin gastar espacio 1 vez por descanso largo. El conjuro depende del patrón: Archfey — Slow. Celestial — Revivify. Fathomless — Lightning Bolt. Fiend — Fireball. Genio — Protection from Energy. Gran Antiguo — Haste. Hexblade — Blink. No-Muerto — Speak with Dead. Moribundo — Bestow Curse. (Nota: estos conjuros coinciden con el don de Nv.7 pero ahora se pueden lanzar sin espacio, donde el de Nv.7 requería espacio.)"
      },
      {
        n: "Maldición de Sangre del Devorador de Almas",
        nv: 18,
        d: "Ganas la Blood Curse of the Soul Eater (no cuenta contra tus maldiciones conocidas): como Reacción cuando una criatura que no sea no-muerto o constructo cae a 0 PG a 30 pies de ti, tienes ventaja en todas las tiradas de ataque con arma hasta el final de tu siguiente turno. Amplificar: además recuperas 1 espacio de Pact Magic gastado. Solo puedes amplificar esta maldición 1 vez por descanso largo."
      },
    ],

  }, // fin subclases
}; // fin CLASE_BLOODHUNTER
