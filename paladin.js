/* ═══════════════════════════════════════════════════════
   paladin.js — Paladín: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_PALADIN = {
  rasgos: [
    { n:"Sentido Divino", nv:1, d:"Detecta celestiales, infernales y no-muertos a 60 pies. Usos = 1 + CAR/descanso largo." },
    { n:"Imposición de Manos", nv:1, d:"Pool de curación = 5 × nivel. Cura PG tocando, o usa 5 PG para curar una enfermedad o neutralizar un veneno." },
    { n:"Estilo de Combate", nv:2, d:"Elige especialización (Defensa, Duelo, Gran Arma, Protección, etc.)." },
    { n:"Conjuración", nv:2, d:"Lanzador medio (CAR). Lista de Paladín + conjuros de juramento siempre preparados." },
    { n:"Smite Divino", nv:2, d:"Al golpear, gasta espacio de conjuro: +2d8 radiante (+1d8/nivel extra; +1d8 vs. muertos vivientes/infernales). Máximo 5d8." },
    { n:"Salud Divina", nv:3, d:"Inmune a enfermedades." },
    { n:"Juramento Sagrado", nv:3, d:"Elige tu subclase. Otorga conjuros de juramento, Canal Divino y poderes especiales." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Ataque Extra", nv:5, d:"Atacas dos veces con la acción de Atacar." },
    { n:"Aura de Protección", nv:6, d:"Tú y aliados a 10 pies (→30 en Nv.18) añaden tu mod CAR a salvaciones (mín. +1)." },
    { n:"Aura de Coraje", nv:10, d:"Tú y aliados a 10 pies (→30 en Nv.18) no pueden ser Asustados." },
    { n:"Smite Divino Mejorado", nv:11, d:"Tus ataques con arma infligen siempre +1d8 de daño radiante extra." },
    { n:"Limpieza de Toque", nv:14, d:"Puedes usar Imposición de Manos para terminar 1 condición (Cegado, Sordo, Paralizado) en lugar de curar." },
    { n:"Paladín Anciano", nv:20, d:"Forma divina 1/descanso largo: aura 30 pies de efectos poderosos según juramento (dura 1 minuto)." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Juramento de Devoción [PHB 2014]": [
      { n:"Canal Divino – Arma Sagrada", nv:3, d:"Acción: infunde un arma con energía divina por 1 minuto: +CAR a ataques, luz brillante 20 pies." },
      { n:"Canal Divino – Expulsar Impíos", nv:3, d:"Criaturas de alineación malvada o infernales/no-muertos a 30 pies huyen (SAB para resistir)." },
      { n:"Aura de Devoción", nv:7, d:"Tú y aliados a 10 pies (→30 en Nv.18) sois inmunes a ser Encantados." },
      { n:"Pureza de Espíritu", nv:15, d:"Siempre bajo el efecto de Protección contra el Bien y el Mal." },
      { n:"Forma Sagrada", nv:20, d:"Alas, visión en oscuridad total, +CAR a salvaciones, resistencia a daño de conjuros (1 minuto)." },
    ],
    "Juramento de los Antiguos [PHB 2014]": [
      { n:"Canal Divino – Naturaleza Armonizada", nv:3, d:"Como Encantar Animales y Plantas (SAB CD), pero funciona también con bestias." },
      { n:"Canal Divino – Expulsar el Oscuro", nv:3, d:"Infernales, muertos vivientes y feéricos deben huir (SAB para resistir)." },
      { n:"Aura de Guardián", nv:7, d:"Tú y aliados a 10 pies (→30 en Nv.18) resistís el daño de conjuros." },
      { n:"Resistencia Ancestral", nv:15, d:"Siempre bajo Protección contra el Bien y el Mal; inmune a hechizos de Encantamiento y Miedo." },
      { n:"Campeón Anciano", nv:20, d:"Vuelta a las raíces: corres más rápido, tus conjuros de naturaleza se vuelven más poderosos (1 minuto)." },
    ],
    "Juramento de Venganza [PHB 2014]": [
      { n:"Canal Divino – Anatema", nv:3, d:"Marcas a un objetivo: ventaja en ataques contra él, no puede huir de ti, no puede atacar a otros si tú estás cerca." },
      { n:"Canal Divino – Expulsar el Pérfido", nv:3, d:"Infernales y no-muertos huyen 1 minuto (SAB para resistir)." },
      { n:"Aura de Ira", nv:7, d:"Tú y aliados a 10 pies (→30 en Nv.18) ganáis ventaja en ataques contra criaturas que hayáis atacado este turno." },
      { n:"Espíritu Indomable", nv:15, d:"Si eres Encantado o Asustado, puedes terminar el efecto al inicio de tu turno." },
      { n:"Ángel Vengador", nv:20, d:"Vuelo 60 pies, aura de terror, ataques que causan Asustado y ventaja en ataques (1 minuto)." },
    ],
    "Juramento Roto [PHB 2014]": [
      { n:"Canal Divino – Control de los No-muertos", nv:3, d:"Como Animar Muertos pero también controlas no-muertos ya existentes (SAB para resistir en no-muertos inteligentes)." },
      { n:"Canal Divino – Maldición Sombría", nv:3, d:"Un objetivo a 30 pies recibe +1d6 necrótico cada vez que sea golpeado (1 minuto)." },
      { n:"Aura de Odio", nv:7, d:"Tú y no-muertos que controles a 10 pies (→30 en Nv.18) añadís CAR a tiradas de daño." },
      { n:"Forma No-muerta", nv:15, d:"No necesitas comer, beber ni respirar; inmune a enfermedades y venenos; resistencia a necrótico." },
      { n:"Señor No-muerto", nv:20, d:"Aura que drena vida 30 pies (2d6 necrótico/turno), tus no-muertos se fortalecen (1 minuto)." },
    ],

    /* ── PHB 2024 ── */
    "Juramento de Devoción [PHB 2024]": [
      { n:"Canal Divino – Arma Sagrada", nv:3, d:"Infunde un arma: +CAR a impactos, luz brillante 20 pies, 1 minuto." },
      { n:"Canal Divino – Escudo de la Fe", nv:3, d:"Como Reacción, otorgas +2 CA a un aliado visible hasta el inicio de tu siguiente turno." },
      { n:"Aura de Devoción", nv:7, d:"Tú y aliados a 10 pies inmunes a Encantado." },
      { n:"Pureza de Espíritu", nv:15, d:"Protección contra el Bien y el Mal siempre activa sobre ti." },
      { n:"Forma Sagrada", nv:20, d:"Alas angelicales, visión en oscuridad total, +CAR a salvaciones, resistencia a daño de conjuros." },
    ],
    "Juramento de los Antiguos [PHB 2024]": [
      { n:"Canal Divino – Naturaleza Armonizada", nv:3, d:"Encanta animales y plantas a 30 pies (SAB CD)." },
      { n:"Canal Divino – Expulsar el Oscuro", nv:3, d:"Infernales, no-muertos y feéricos huyen (SAB)." },
      { n:"Aura de Guardián", nv:7, d:"Tú y aliados a 10 pies resistís daño de conjuros." },
      { n:"Resistencia Ancestral", nv:15, d:"Inmunidad a Encantamiento y Miedo; Protección vs. B y M siempre activa." },
      { n:"Campeón Anciano", nv:20, d:"Transformación natural: velocidad y poder de conjuros de naturaleza aumentados." },
    ],
    "Juramento de Venganza [PHB 2024]": [
      { n:"Canal Divino – Anatema", nv:3, d:"Marcas a 1 objetivo: ventaja en ataques contra él; no puede alejarse de ti; no puede atacar a aliados tuyos." },
      { n:"Canal Divino – Expulsar el Pérfido", nv:3, d:"Infernales y no-muertos huyen (SAB)." },
      { n:"Aura de Ira", nv:7, d:"Ventaja en ataques para ti y aliados a 10 pies vs. criaturas atacadas este turno." },
      { n:"Espíritu Indomable", nv:15, d:"Al inicio de tu turno, terminas Encantado o Asustado sobre ti." },
      { n:"Ángel Vengador", nv:20, d:"Vuelo 60 pies, ataques aterradoras, aura de miedo." },
    ],
    "Juramento de Gloria [PHB 2024]": [
      { n:"Canal Divino – Inspiración de Gloria", nv:3, d:"Hasta 6 aliados a 30 pies ganan PG temporales = tu nivel + CAR." },
      { n:"Canal Divino – Guía del Héroe", nv:3, d:"Otorgas ventaja en una tirada de habilidad o salvación a un aliado visible (Reacción)." },
      { n:"Aura de Alerta", nv:7, d:"Tú y aliados a 10 pies no podéis ser sorprendidos y añadís CAR a la Iniciativa." },
      { n:"Gloria Inmortal", nv:15, d:"Cuando caes a 0 PG, puedes usar Reacción para quedarte en 1 PG (1/descanso largo)." },
      { n:"Campeón Viviente", nv:20, d:"Durante 1 minuto: inmune a ser Asustado, curas PG al inicio de tu turno, tus golpes son críticos con 18-20." },
    ],

    /* ── XGE ── */
    "Juramento de la Conquista [XGE]": [
      { n:"Canal Divino – Conquistar", nv:3, d:"Criaturas a 30 pies de tu elección quedan Asustadas (SAB CD). Las asustadas tienen velocidad 0 mientras puedan verte." },
      { n:"Canal Divino – Fuerza Guiada", nv:3, d:"+10 a una tirada de ataque (tras ver el resultado)." },
      { n:"Aura de la Conquista", nv:7, d:"Las criaturas Asustadas de ti pierden velocidad y reciben 1d4 psíquico al inicio de su turno." },
      { n:"Implacable Ávido", nv:15, d:"Cuando una criatura asustada de ti falla una salvación, la daño igual a CAR." },
      { n:"Campeón Invencible", nv:20, d:"Aura de terror absoluto: criaturas a 30 pies quedan Asustadas automáticamente (SAB cada turno)." },
    ],
    "Juramento de Redención [XGE]": [
      { n:"Canal Divino – Empatía", nv:3, d:"Hablas a criatura hostil: no atacará si supera tu CD de SAB; si falla, se calma durante 1 minuto." },
      { n:"Canal Divino – Proteger al Inocente", nv:3, d:"Reacción: absorbes el daño que iba a recibir un aliado; lo recibes tú en su lugar." },
      { n:"Aura Reconfortante", nv:7, d:"Aliados a 10 pies inmunes a Asustado; resistencia al daño psíquico." },
      { n:"Pacificador", nv:15, d:"Si un enemigo te ataca, puede hacerte una oferta de rendición como Reacción. Puedes aceptarla sin coste." },
      { n:"Emissario of Redemption", nv:20, d:"Resistencia a todo daño de criaturas que no hayas atacado este combate; si te golpean, reciben 1/2 del daño de vuelta." },
    ],

    /* ── TCE ── */
    "Juramento de Gloria [TCE]": [
      { n:"Canal Divino – Inspiración de Gloria", nv:3, d:"Hasta 6 aliados a 30 pies ganan PG temporales = nivel + CAR." },
      { n:"Canal Divino – Llamada del Héroe", nv:3, d:"Otorgas ventaja en 1 tirada de habilidad a 1 aliado visible (Reacción)." },
      { n:"Aura de Alerta", nv:7, d:"Tú y aliados a 10 pies no sois sorprendidos; +CAR a Iniciativa." },
      { n:"Gloria Inmortal", nv:15, d:"1/descanso largo: cuando caes a 0 PG, te quedas en 1 PG en su lugar." },
      { n:"Campeón de los Campeones", nv:20, d:"1 minuto: inmune a Asustado, curas al inicio del turno, crítico mejorado." },
    ],
    "Juramento de los Vigilantes [TCE]": [
      { n:"Canal Divino – Llamada del Centinela", nv:3, d:"Otorgas a tus aliados la capacidad de hacer ataques de oportunidad sin gastar Reacción (1 minuto)." },
      { n:"Canal Divino – Orden a Detener", nv:3, d:"Una criatura a 30 pies queda Paralizada hasta el final de tu siguiente turno (SAB para resistir)." },
      { n:"Aura del Centinela", nv:7, d:"Las criaturas a 10 pies tienen desventaja en tiradas de Sigilo." },
      { n:"Vigilancia Inagotable", nv:15, d:"No puedes ser sorprendido; ventaja en Percepción; no necesitas dormir para meditación." },
      { n:"Guardián Eterno", nv:20, d:"Aura de 30 pies que impide teletransportaciones o viajes planos de criaturas hostiles dentro de ella." },
    ],

    /* ── EGW ── */
    "Juramento de la Avidez [EGW]": [
      { n:"Canal Divino – Tentáculo de la Avidez", nv:3, d:"Invocas un tentáculo de 10 pies que agarra a 1 criatura (FUE para escapar) y la arrastra 10 pies hacia ti cada turno." },
      { n:"Canal Divino – Maldición Consumidora", nv:3, d:"Maldices a 1 objetivo: cada vez que recibe daño pierde además 1d4 adicional de necrótico y tú recuperas esos PG." },
      { n:"Aura de Hambre", nv:7, d:"Cuando criaturas a 10 pies fallen un ataque contra ti, pierden 1d4 PG." },
      { n:"Resistencia Avarienta", nv:15, d:"Inmune a Encantado y Asustado; cuando te curen, curas el doble (1 vez por descanso corto)." },
      { n:"Forma del Ávido", nv:20, d:"Tentáculos múltiples, aura de drenaje de vida 30 pies, velocidad de vuelo 40 pies (1 minuto)." },
    ],

    /* ── TDCSR ── */
    "Juramento del Abisal [TDCSR]": [
      { n:"Canal Divino – Presencia del Abismo", nv:3, d:"Criaturas a 30 pies deben hacer SAB o quedan Asustadas; si las Asustas, también quedan Paralizadas de terror." },
      { n:"Canal Divino – Toque Condenatorio", nv:3, d:"Tocas a 1 criatura: recibe 2d8 necrótico y queda Maldita (tus ataques infligen +1d6 necrótico contra ella)." },
      { n:"Aura Abismal", nv:7, d:"Tú y aliados a 10 pies añadís CAR a tiradas de salvación contra conjuros." },
      { n:"Resistencia Profana", nv:15, d:"Resistencia al daño necrótico y psíquico; inmune a Asustado." },
      { n:"Forma del Juicio Eterno", nv:20, d:"Aura de condena 30 pies: las criaturas que fallen salvaciones de SAB quedan Paralizadas hasta 1 minuto." },
    ],
  }
};
