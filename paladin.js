/* ══════════════════════════════════════════════════════════════════
   paladin.js — Paladín: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Dungeon Master's Guide (DMG)
     Sword Coast Adventurer's Guide (SCAG)
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Mythic Odysseys of Theros (MOoT)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Juramento de Devoción      [PHB 2014] / [PHB 2024]
     Juramento de los Ancestros [PHB 2014] / [PHB 2024]
     Juramento de Venganza      [PHB 2014] / [PHB 2024]
     Juramento de la Corona     [SCAG]
     Juramento de Conquista     [XGtE]
     Juramento de Redención     [XGtE]
     Juramento de Gloria        [MOoT/TCE] / [PHB 2024]
     Juramento de los Vigilantes [TCE]
     Paladín Apóstata           [DMG]
══════════════════════════════════════════════════════════════════ */

const CLASE_PALADIN = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Todas las armaduras y escudos. Armas simples y marciales. Salvaciones: SAB y CAR. Habilidades: elige 2 entre Atletismo, Perspicacia, Intimidación, Medicina, Persuasión y Religión."
    },
    {
      n: "Sentido Divino",
      nv: 1,
      d: "Como Acción puedes abrir tu conciencia a la presencia de bien y mal intensos. Hasta el final de tu siguiente turno, sabes la ubicación de cualquier celestial, fiend o no-muerto a 60 pies que no esté detrás de cobertura total. Sabes su tipo pero no su identidad. También detectas la presencia de cualquier lugar u objeto consagrado o maldecido dentro del mismo rango. Usos = 1 + mod CAR (mínimo 1) por Descanso Largo."
    },
    {
      n: "Imponer Manos",
      nv: 1,
      d: "Tienes una reserva de poder curativo = 5 × nivel de Paladín. Como Acción tocas a una criatura para restaurar PG de tu reserva (cualquier cantidad). Puedes gastar 5 PG de la reserva para curar una enfermedad o neutralizar un veneno. No funciona en constructos ni no-muertos. La reserva se recupera con Descanso Largo."
    },
    {
      n: "Estilo de Combate",
      nv: 2,
      d: "Elige un estilo: Defensa (+1 CA con armadura), Duelo (+2 daño con arma de una mano sin otra arma), Protección (Reacción: desventaja al atacante contra aliado a 5 pies con escudo), Armas a Dos Manos (repite 1 o 2 en dados de daño de armas a dos manos), Combate Bendecido [TCE/PHB2024] (aprendes un truco de Clérigo o Druida usando CAR)."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 2,
      d: "CAR es tu característica de conjuro (CD = 8 + comp + mod CAR). El Paladín es un lanzador de medio nivel. Prepara conjuros = mod CAR + mitad nivel Paladín (redondeado abajo). Los conjuros de juramento siempre están preparados y no cuentan contra el límite. Espacios de conjuro de progresión de medio lanzador (hasta Nv.5)."
    },
    {
      n: "Golpe Divino",
      nv: 2,
      d: "Gastas un espacio de conjuro como AA antes de golpear con arma cuerpo a cuerpo. Daño adicional radiante = 2d8 por nivel del espacio (máximo 5d8 con espacio Nv.5). PHB 2024: Golpe Divino es ahora siempre parte del primer ataque del turno (no como AA), y escala a 1d8 por nivel de Paladín ÷ 4 (redondeado abajo, máximo 5d8)."
    },
    {
      n: "Salud Divina",
      nv: 3,
      d: "La magia divina que fluye en ti te hace inmune a las enfermedades."
    },
    {
      n: "Juramento Sagrado",
      nv: 3,
      d: "Eliges tu subclase (Juramento Sagrado). Otorga Conjuros de Juramento (siempre preparados), 2 opciones de Canalizar Divinidad, y rasgos en Nv.3, 7, 15 y 20."
    },
    {
      n: "Canalizar Divinidad",
      nv: 3,
      d: "Tienes 1 uso de Canalizar Divinidad que se recupera con Descanso Corto o Largo (→2 en Nv.11 con PHB 2024)."
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
      n: "Aura de Protección",
      nv: 6,
      d: "Tú y las criaturas amistosas a 10 pies añadís mod CAR (mínimo +1) a todas las tiradas de salvación mientras estés consciente. En Nv.18 el aura aumenta a 30 pies."
    },
    {
      n: "Aura de Valentía",
      nv: 10,
      d: "Tú y las criaturas amistosas a 10 pies no pueden ser Asustadas mientras estés consciente. En Nv.18 el aura aumenta a 30 pies."
    },
    {
      n: "Golpe Divino Mejorado",
      nv: 11,
      d: "(PHB 2014) Cuando golpeas con un ataque de arma cuerpo a cuerpo, infligas 1d8 de daño radiante adicional."
    },
    {
      n: "Pureza del Espíritu",
      nv: 15,
      d: "(PHB 2014) Siempre estás bajo el efecto del conjuro Protección contra el Mal y el Bien."
    },
    {
      n: "Nimbo Sagrado",
      nv: 20,
      d: "(PHB 2014) Acción (1/descanso largo): durante 1 minuto emites luz brillante en 30 pies. Los enemigos que empiecen su turno en esa luz reciben 10 de daño radiante. Ventaja en salvaciones contra conjuros de fiends y no-muertos."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (JURAMENTOS SAGRADOS)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Juramento de Devoción [PHB 2014]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Protección contra el Bien y el Mal, Santuario. Nv.5: Restauración Menor, Zona de Verdad. Nv.9: Faro de Esperanza, Dispersar Magia. Nv.13: Libertad de Movimiento, Guardián de la Fe. Nv.17: Comunión, Guardián de los Espíritus."
      },
      {
        n: "Canalizar Divinidad: Arma Sagrada",
        nv: 3,
        d: "Acción: imbuyes un arma con poder divino durante 1 minuto. El arma emite luz brillante (20 pies) + tenue (20 pies más). Añades mod CAR a las tiradas de ataque con ella. El arma se vuelve mágica. Termina si sueltas el arma."
      },
      {
        n: "Canalizar Divinidad: Expulsar al Impío",
        nv: 3,
        d: "Acción: presentas tu símbolo sagrado y pronuncias una oración. Los fiends y no-muertos a 30 pies que puedan verte u oírte superan salvación SAB (CD conjuro) o quedan Asustados durante 1 minuto o hasta recibir daño."
      },
      {
        n: "Aura de Devoción",
        nv: 7,
        d: "Tú y las criaturas amistosas a 10 pies no podéis ser Encantadas mientras estés consciente. En Nv.18 el aura aumenta a 30 pies."
      },
      {
        n: "Pureza del Espíritu",
        nv: 15,
        d: "Siempre estás bajo el efecto del conjuro Protección contra el Mal y el Bien."
      },
      {
        n: "Nimbo Sagrado",
        nv: 20,
        d: "Acción (1/descanso largo): durante 1 minuto emites luz brillante en 30 pies. Los enemigos que comiencen su turno en esa luz reciben 10 de daño radiante. Ventaja en salvaciones contra conjuros de fiends y no-muertos."
      },
    ],

    "Juramento de los Ancestros [PHB 2014]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Hablar con los Animales, Enredar. Nv.5: Luz de Luna, Paso Brumoso. Nv.9: Crecer Plantas, Protección contra la Energía. Nv.13: Tormenta de Hielo, Zancada Arbórea. Nv.17: Comunión con la Naturaleza, Transmutación de Formas."
      },
      {
        n: "Canalizar Divinidad: Ira de la Naturaleza",
        nv: 3,
        d: "Acción: las plantas y zarcillos a 10 pies agarran a los enemigos. Criaturas hostiles en el radio superan salvación FUE o DES (su elección, CD conjuro) o quedan Aferradas durante 1 minuto."
      },
      {
        n: "Canalizar Divinidad: Expulsar al Devolver",
        nv: 3,
        d: "Acción: prestas tu símbolo sagrado. Los fiends y no-muertos a 30 pies superan SAB (CD conjuro) o son Asustados durante 1 minuto. Los Asustados que fallen de nuevo son empujados al Plano Feérico o Sombrío (el más cercano)."
      },
      {
        n: "Aura de Valentía de los Ancestros",
        nv: 7,
        d: "Tú y las criaturas amistosas a 10 pies tenéis resistencia a los daños de los conjuros de fiends y no-muertos. En Nv.18 el aura aumenta a 30 pies."
      },
      {
        n: "Centinela Eterno",
        nv: 15,
        d: "Cuando caes a 0 PG y no mueres, puedes elegir quedar en 1 PG en su lugar. 1/descanso largo."
      },
      {
        n: "Campeón Anciano",
        nv: 20,
        d: "Acción (1/descanso largo): durante 1 minuto te transformas: regeneras 10 PG al inicio de cada turno, las plantas brotan a tus pies (terreno difícil para enemigos a 10 pies), puedes lanzar como AA cualquier conjuro de Paladín de tiempo de lanzamiento 1 acción, y los enemigos a 10 pies tienen desventaja en salvaciones contra tus conjuros."
      },
    ],

    "Juramento de Venganza [PHB 2014]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Tormento, Golpe del Cazador. Nv.5: Mantener Persona, Paso Brumoso. Nv.9: Hipnotizar, Protección contra la Energía. Nv.13: Destierro, Dimensión Door. Nv.17: Mantener Monstruo, Convocar Ángel Deva."
      },
      {
        n: "Canalizar Divinidad: Juramento del Enemigo",
        nv: 3,
        d: "AA: designas una criatura a 10 pies como tu Enemigo Jurado durante 1 minuto. Tienes ventaja en ataques contra ella. Si la criatura intenta moverse fuera de tu alcance, puedes usar Reacción para moverte junto a ella sin coste (no provoca ataques de oportunidad)."
      },
      {
        n: "Canalizar Divinidad: Misericordia Divina",
        nv: 3,
        d: "Acción: presentas tu símbolo sagrado. Los fiends y no-muertos a 30 pies que fallen SAB (CD conjuro) quedan Asustados y Paralziados durante 1 minuto (una tirada de SAB al inicio de cada turno para finalizar el Paralizado; el Asustado dura 1 minuto completo)."
      },
      {
        n: "Perseguidor Implacable",
        nv: 7,
        d: "Si el Enemigo Jurado intenta abandonar tu alcance, puedes moverlos contigo como Reacción (igual velocidad), y sus intentos de escapar dan ventaja a tus ataques de oportunidad contra él."
      },
      {
        n: "Alma de Venganza",
        nv: 15,
        d: "Cuando el Enemigo Jurado es golpeado por una maldición o falla una salvación contra uno de tus conjuros, puedes usar tu Reacción para hacerle un ataque con arma."
      },
      {
        n: "Vengador Implacable",
        nv: 20,
        d: "Acción (1/descanso largo): durante 1 hora tus ataques con arma tienen un rango de crítico de 18-20, y tienes resistencia a todos los daños. Cuando matas a un enemigo, recuperas PG = mod CAR + nivel Paladín (mínimo 1)."
      },
    ],

    /* ── PHB 2024 ── */
    "Juramento de Devoción [PHB 2024]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Protección contra el Bien y el Mal, Santuario. Nv.5: Aid, Zona de Verdad. Nv.9: Faro de Esperanza, Dispersar Magia. Nv.13: Libertad de Movimiento, Guardián de la Fe. Nv.17: Comunión, Guardián de los Espíritus."
      },
      {
        n: "Arma Sagrada (Canalizar Divinidad)",
        nv: 3,
        d: "AA: imbuyes un arma con poder divino durante 1 minuto. Añades mod CAR a las tiradas de ataque con esa arma y emite luz brillante en 20 pies. El arma se vuelve mágica."
      },
      {
        n: "Juramento Sagrado (Canalizar Divinidad)",
        nv: 3,
        d: "Acción: pronuncias el juramento ante los fiends y no-muertos. Criaturas de esos tipos a 30 pies superan SAB (CD conjuro) o quedan Asustadas durante 1 minuto o hasta recibir daño."
      },
      {
        n: "Aura de Devoción",
        nv: 7,
        d: "Tú y las criaturas amistosas a 10 pies (→30 pies Nv.18) no pueden ser Encantadas mientras estés consciente."
      },
      {
        n: "Pureza del Espíritu",
        nv: 15,
        d: "Efecto permanente de Protección contra el Mal y el Bien sobre ti."
      },
      {
        n: "Nimbo Sagrado",
        nv: 20,
        d: "Acción (1/descanso largo): durante 1 minuto, luz brillante en 30 pies; enemigos en la luz reciben 10 daño radiante al inicio de su turno; ventaja en salvaciones contra conjuros de fiends y no-muertos."
      },
    ],

    "Juramento de los Ancestros [PHB 2024]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Hablar con los Animales, Enredar. Nv.5: Luz de Luna, Paso Brumoso. Nv.9: Crecer Plantas, Protección contra la Energía. Nv.13: Tormenta de Hielo, Zancada Arbórea. Nv.17: Comunión con la Naturaleza, Transmutación de Formas."
      },
      {
        n: "Ira de la Naturaleza (Canalizar Divinidad)",
        nv: 3,
        d: "Acción: plantas y zarcillos a 10 pies atrapan enemigos. Salvación FUE o DES (CD conjuro) o quedan Aferrados 1 minuto."
      },
      {
        n: "Expulsar al Devolver (Canalizar Divinidad)",
        nv: 3,
        d: "Acción: fiends y no-muertos a 30 pies superan SAB o quedan Asustados. Los que fallen de nuevo son empujados al Plano Feérico o Sombrío."
      },
      {
        n: "Aura de Valentía Ancestral",
        nv: 7,
        d: "Tú y aliados a 10 pies (→30 pies Nv.18) tenéis resistencia a daños de conjuros de fiends y no-muertos."
      },
      {
        n: "Centinela Eterno",
        nv: 15,
        d: "1/descanso largo: en lugar de caer a 0 PG, caes a 1 PG."
      },
      {
        n: "Campeón Anciano",
        nv: 20,
        d: "Acción (1/descanso largo, 1 minuto): regeneras 10 PG/turno, plantas dificultan el movimiento enemigo a 10 pies, puedes lanzar conjuros de Paladín como AA, enemigos a 10 pies tienen desventaja en salvaciones contra tus conjuros."
      },
    ],

    "Juramento de Venganza [PHB 2024]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Tormento, Golpe del Cazador. Nv.5: Mantener Persona, Paso Brumoso. Nv.9: Hipnotizar, Protección contra la Energía. Nv.13: Destierro, Dimensión Door. Nv.17: Mantener Monstruo, Convocar Ángel Deva."
      },
      {
        n: "Juramento del Enemigo (Canalizar Divinidad)",
        nv: 3,
        d: "AA: marcas a una criatura a 10 pies como Enemigo Jurado durante 1 minuto. Ventaja en ataques contra ella; cuando intenta alejarse puedes seguirla sin coste como Reacción."
      },
      {
        n: "Misericordia Divina (Canalizar Divinidad)",
        nv: 3,
        d: "Acción: fiends y no-muertos a 30 pies superan SAB o quedan Asustados y Paralizados 1 minuto (tirada de SAB al inicio de cada turno para salir del Paralizado)."
      },
      {
        n: "Perseguidor Implacable",
        nv: 7,
        d: "Reacción cuando el Enemigo Jurado huye: te mueves junto a él. Ataques de oportunidad contra él tienen ventaja."
      },
      {
        n: "Alma de Venganza",
        nv: 15,
        d: "Reacción cuando el Enemigo Jurado falla una salvación o sufre una maldición: realizas un ataque con arma contra él."
      },
      {
        n: "Vengador Implacable",
        nv: 20,
        d: "Acción (1/descanso largo, 1 hora): crítico 18-20, resistencia a todo daño, recuperas PG al matar enemigos = mod CAR + nivel Paladín."
      },
    ],

    "Juramento de Gloria [MOoT/TCE/PHB 2024]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Heroísmo, Guiding Bolt. Nv.5: Mejorar Estadísticas (Enhance Ability), Golpe Espiritual (Spiritual Weapon). Nv.9: Aura de Vitalidad, Protección contra la Energía. Nv.13: Compulsión, Libertad de Movimiento. Nv.17: Leyenda Lore, Pasaje Legendario."
      },
      {
        n: "Inspiración Gloriosa (Canalizar Divinidad)",
        nv: 3,
        d: "AA: tú y criaturas amistosas a 30 pies ganan PG temporales = mod CAR + nivel Paladín (mínimo 1). Duran 1 hora."
      },
      {
        n: "Movimiento Sobrenatural (Canalizar Divinidad)",
        nv: 3,
        d: "Acción: criaturas de tu elección a 30 pies ganan +10 pies a la velocidad y pueden usar Acrobacias/Atletismo con ventaja durante 10 minutos."
      },
      {
        n: "Aura de la Gloria",
        nv: 7,
        d: "Tú y las criaturas amistosas a 10 pies (→30 pies Nv.18) tenéis ventaja en tiradas de habilidad de FUE, DES y CAR mientras estés consciente."
      },
      {
        n: "Leyenda Viviente",
        nv: 15,
        d: "Cuando fallas una prueba de CAR, puedes tratar el d20 como si hubiera sacado 10. Además, cuando una criatura intenta ver a través de ilusión o averiguar tu identidad real, la información que comparte de ti es siempre gloriosa (aunque sea falsa)."
      },
      {
        n: "Héroe del Tiempo",
        nv: 20,
        d: "Acción (1/descanso largo, 1 hora): eres inmune a Asustado y Encantado, tienes ventaja en todas las tiradas de ataque, y cuando tienes 0 PG (no muerto) puedes levantarte con PG = mod CAR × 5 (1 vez durante la duración)."
      },
    ],

    /* ── Sword Coast Adventurer's Guide ── */
    "Juramento de la Corona [SCAG]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Comando, Compeler Duelo. Nv.5: Aguantar Persona, Zona de Verdad. Nv.9: Aura de Vitalidad, Guardián de los Espíritus. Nv.13: Destierro, Guardián de la Fe. Nv.17: Círculo de Poder, Dominación."
      },
      {
        n: "Canalizar Divinidad: Desafío del Campeón",
        nv: 3,
        d: "AA: criaturas hostiles de tu elección a 30 pies superan SAB (CD conjuro) o no pueden alejarse voluntariamente más de 30 pies de ti. El efecto termina si estás Incapacitado, mueres o la criatura ya está a más de 30 pies."
      },
      {
        n: "Canalizar Divinidad: Girar la Marea",
        nv: 3,
        d: "AA: criaturas amistosas de tu elección que puedan oírte a 30 pies y que tengan la mitad o menos de sus PG máximos recuperan PG = 1d6 + mod CAR (mínimo 1)."
      },
      {
        n: "Lealtad Divina",
        nv: 7,
        d: "Reacción: cuando una criatura a 5 pies recibe daño, tomas tú ese daño en su lugar. Este daño no puede reducirse ni prevenirse de ninguna forma."
      },
      {
        n: "Bastión de Ley",
        nv: 15,
        d: "Ventaja en salvaciones para evitar quedar Paralizado o Aturdido."
      },
      {
        n: "Campeón Exaltado",
        nv: 20,
        d: "Acción (1/descanso largo, 1 hora): resistencia a daño contundente, perforante y cortante no mágico; tus aliados a 30 pies tienen ventaja en tiradas de salvación de la muerte; tú y tus aliados a 30 pies tenéis ventaja en salvaciones de SAB."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Juramento de Conquista [XGtE]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Armadura de Agonía (Armor of Agathys), Mando. Nv.5: Retener Persona, Espíritu Espectral. Nv.9: Miedo, Bola de Fuego. Nv.13: Dominar Bestia, Muro de Fuego. Nv.17: Dominar Persona, Insecto Plaga."
      },
      {
        n: "Canalizar Divinidad: Presencia Conquistadora",
        nv: 3,
        d: "Acción: criaturas hostiles a 30 pies superan SAB (CD conjuro) o quedan Asustadas durante 1 minuto. Las criaturas Asustadas quedan Paralizadas mientras haya luz brillante alrededor suyo."
      },
      {
        n: "Canalizar Divinidad: Golpe Guiado",
        nv: 3,
        d: "Tras ver el resultado de tu tirada de ataque y antes de saber si impacta, gastas la Canalizar Divinidad para añadir +10 a esa tirada."
      },
      {
        n: "Aura de la Conquista",
        nv: 7,
        d: "Las criaturas Asustadas de ti tienen velocidad 0 mientras estén a 10 pies de ti (→30 pies Nv.18). Cuando una criatura Asustada empieza su turno a 10 pies, recibe daño psíquico = mod CAR (mínimo 1)."
      },
      {
        n: "Manto Persistente",
        nv: 15,
        d: "Cuando una criatura te golpea con un ataque, recibe daño psíquico = mod CAR (mínimo 1)."
      },
      {
        n: "Conquistador Invencible",
        nv: 20,
        d: "Acción (1/descanso largo, 1 minuto): resistencia a todos los daños, tus ataques cuerpo a cuerpo tienen rango de crítico 19-20, puedes hacer un ataque adicional con la acción de Atacar (3 ataques totales)."
      },
    ],

    "Juramento de Redención [XGtE]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Santuario, Golpe del Viento. Nv.5: Calmar Emociones, Mantener Persona. Nv.9: Contador de Hechizos, Hipnotizar. Nv.13: Destierro, Otiluke's Resilient Sphere. Nv.17: Mantener Monstruo, Muro de Fuerza."
      },
      {
        n: "Canalizar Divinidad: Emissario de la Paz",
        nv: 3,
        d: "AA: ganas +5 a las pruebas de Persuasión durante los próximos 10 minutos."
      },
      {
        n: "Canalizar Divinidad: Rebuke the Violent",
        nv: 3,
        d: "Reacción: cuando una criatura a 30 pies inflige daño a otra con un ataque, haces que el atacante supere una salvación SAB (CD conjuro) o reciba daño radiante = el daño infligido (la mitad si supera la salvación)."
      },
      {
        n: "Protector Abnegado",
        nv: 7,
        d: "Reacción: cuando un aliado a 1 pie tuyo va a recibir daño, puedes hacer que te afecte a ti en su lugar. El daño no puede reducirse. En Nv.18 la distancia aumenta a 30 pies."
      },
      {
        n: "Mente Serena",
        nv: 15,
        d: "Eres inmune a las condiciones Encantado y Asustado."
      },
      {
        n: "Emissario de la Redención",
        nv: 20,
        d: "Pasivo: tienes resistencia a todos los daños causados por otras criaturas (pero no por trampas, terreno, etc.). Cuando una criatura te golpea, recibe daño radiante = mod CAR (mínimo 1). Si atacas a una criatura, pierdes estas ventajas contra ella durante 1 minuto."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Juramento de los Vigilantes [TCE]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Alarma, Detectar Magia. Nv.5: Moonbeam, Ver la Invisibilidad. Nv.9: Dispersar Magia, Proyección Nondetection. Nv.13: Ojo Arcano, Destierro. Nv.17: Mantener Monstruo, Hold Monster (ya está), Escudriñar."
      },
      {
        n: "Canalizar Divinidad: Voluntad del Vigilante",
        nv: 3,
        d: "Acción: criaturas de tu elección a 30 pies pueden añadir mod SAB a sus tiradas de iniciativa durante las próximas 24 horas."
      },
      {
        n: "Canalizar Divinidad: Abjuración Apotropaica",
        nv: 3,
        d: "Acción: criaturas aberrantes, celestiales, elementales, hadas, fiends o no-muertos a 30 pies superan SAB (CD conjuro) o quedan Asustadas durante 1 minuto. Las criaturas de CR ≤ 1/4 son destruidas si fallan."
      },
      {
        n: "Aura del Centinela",
        nv: 7,
        d: "Tú y las criaturas amistosas a 10 pies (→30 pies Nv.18) añadís tu bonificador de competencia a la Iniciativa mientras estés consciente."
      },
      {
        n: "Reprensión Vigilante",
        nv: 15,
        d: "Reacción: cuando una criatura a 30 pies obliga a hacer una tirada de salvación de INT, SAB o CAR, puedes hacer que reciba 2d8 + mod CAR de daño radiante (sin importar si supera o falla la salvación)."
      },
      {
        n: "Baluarte Mortal",
        nv: 20,
        d: "AA (1/descanso largo, 1 minuto): tus ojos brillan. Eres inmune a Encantado; criaturas aberrantes, elementales, hadas, fiends y no-muertos a 30 pies tienen desventaja en tiradas de ataque; puedes usar Acción para hacer que una de esas criaturas vuelva a su plano de origen (SAB para resistir, CD conjuro)."
      },
    ],

    /* ── Dungeon Master's Guide ── */
    "Paladín Apóstata [DMG]": [
      {
        n: "Conjuros de Juramento",
        nv: 3,
        d: "Nv.3: Maldición de Hellish Rebuke, Oscuridad. Nv.5: Locura de la Corona, Golpe del Vampiro. Nv.9: Animar Muertos, Blight. Nv.13: Augurio de la Muerte, Marchitar. Nv.17: Antipatía/Simpatía, Convocar No-Muerto."
      },
      {
        n: "Canalizar Divinidad: Control de los No-Muertos",
        nv: 3,
        d: "Acción: presentas tu símbolo profano. Cada no-muerto a 30 pies que puedas ver superan SAB (CD conjuro) o quedan bajo tu control durante 24 horas o hasta que uses este rasgo de nuevo. Una criatura controlada sigue tus órdenes al límite de su comprensión."
      },
      {
        n: "Canalizar Divinidad: Golpe Espectral",
        nv: 3,
        d: "Acción: golpeas la mente de un enemigo a 5 pies. Superan salvación INT (CD conjuro) o reciben 3d10 de daño psíquico y tienen desventaja en todas las tiradas hasta el final de su siguiente turno."
      },
      {
        n: "Aura de Odio",
        nv: 7,
        d: "Tú y los fiends y no-muertos amistosos a 10 pies (→30 pies Nv.18) añadís mod CAR a las tiradas de daño de ataques con arma cuerpo a cuerpo (mínimo +1)."
      },
      {
        n: "Inmortalidad Espectral",
        nv: 15,
        d: "Eres inmune a los daños de veneno y de la condición Asustado. Cuando mueres no caes: en su lugar quedas Incapacitado con 1 PG. Cuando comienzas tu turno con PG entre 1 y la mitad de tu máximo, recuperas PG = mod CAR (mínimo 1)."
      },
      {
        n: "Señor Tenebroso",
        nv: 20,
        d: "Acción (1/descanso largo, 1 minuto): oscuridad mágica en 30 pies (solo tú ves a través de ella); criaturas hostiles en ella tienen desventaja en ataques; los no-muertos de CR 5 o inferior que entren en la zona suman su turno completo a tu mando."
      },
    ],

  }, // fin subclases
}; // fin CLASE_PALADIN
