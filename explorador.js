/* ═══════════════════════════════════════════════════════
   explorador.js — Explorador: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW
═══════════════════════════════════════════════════════ */

const CLASE_EXPLORADOR = {
  rasgos: [
    { n:"Enemigo Favorecido", nv:1, d:"Ventaja en rastrear; +2 daño vs. tipo de criatura elegido (escala a +4 en Nv.6, +6 en Nv.14)." },
    { n:"Entorno Favorecido", nv:1, d:"Doble competencia en Naturaleza y Supervivencia en terreno elegido; ventajas de orientación." },
    { n:"Conjuración", nv:2, d:"Lanzador medio (SAB). Lista del Explorador. Prepara conjuros = SAB + mitad nivel." },
    { n:"Estilo de Combate", nv:2, d:"Elige un estilo de combate especializado (Arquería, Duelo, Lucha con dos armas, etc.)." },
    { n:"Conciencia Primitiva", nv:3, d:"Expande tus sentidos: 1 minuto de concentración para detectar tipos de criaturas a 1 milla." },
    { n:"Arquetipo de Explorador", nv:3, d:"Elige tu subclase." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Ataque Extra", nv:5, d:"Atacas dos veces con la acción de Atacar." },
    { n:"Paso de las Tierras", nv:8, d:"El terreno difícil de origen natural no te afecta; Forma de la Naturaleza sin concentración." },
    { n:"Mente Oculta", nv:10, d:"No puedes ser sorprendido mientras estás consciente." },
    { n:"Desvanecerse", nv:14, d:"Puedes usar la acción de Esconderse como Acción Adicional." },
    { n:"Sentido Salvaje", nv:18, d:"1/descanso corto: Detectar Bien y el Mal en 1 milla (bestias y criaturas no detectadas)." },
    { n:"Matador de Enemigos", nv:20, d:"1/turno: cuando golpeas a tu Enemigo Favorecido, añades 1d10 + SAB al daño." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Cazador [PHB 2014]": [
      { n:"Presa del Cazador", nv:3, d:"Elige 1 entre: Asesino de Hordas (+1d6 a Primero de la ronda), Matador de Colosos (1d8 extra) o Mata-gigantes (ataque oportunidad al atacar)." },
      { n:"Tácticas Defensivas", nv:7, d:"Elige 1 entre: Reflexivos (ventaja en DEX vs. trampas/magia de área), Escurridizo (sin ataques de oportunidad) o Voluntad de Acero (ventaja vs. asustado)." },
      { n:"Multiataques", nv:11, d:"Elige 1 entre: Ráfaga de Flechas (3 objetivos con un ataque) o Torbellino (todos a 5 pies)." },
      { n:"Técnica Superior del Cazador", nv:15, d:"Elige 1 entre: Crítico Superior (crítico en 19-20), Esquiva Superior (mitad daño con DEX) o Dispersar la Muchedumbre (+1d6 a Hordas)." },
    ],
    "Acechador de la Bestia [PHB 2014]": [
      { n:"Compañero de la Bestia", nv:3, d:"Un animal compañero de CR ≤ nivel/4 combate a tu lado y escala con tu nivel." },
      { n:"Vinculación Excepcional", nv:7, d:"Cuando el compañero falla una salvación de DEX, no recibe daño si tú estás a 5 pies." },
      { n:"Tácticas de la Manada", nv:11, d:"El compañero tiene ventaja en todos sus ataques si tú estás a 5 pies del objetivo." },
      { n:"Intercambio Profundo", nv:15, d:"Puedes usar la acción del compañero simultáneamente con tu propia Acción Adicional." },
    ],

    /* ── PHB 2024 ── */
    "Cazador [PHB 2024]": [
      { n:"Cazador Nato", nv:3, d:"Competencia en Perspicacia y Supervivencia con doble competencia; no sorprendido si consciente." },
      { n:"Marca del Cazador", nv:3, d:"Como Acción Adicional, marcas a 1 objetivo: +1d6 daño en todos tus ataques contra él, ventaja en Percepción/Supervivencia para rastrearlo." },
      { n:"Multiataque del Cazador", nv:7, d:"Puedes atacar a hasta 3 objetivos distintos en la misma acción de Atacar." },
      { n:"Evasión del Cazador", nv:11, d:"Si fallas una salvación de DEX, sufres la mitad del daño en lugar de todo." },
      { n:"Mente de Acero", nv:15, d:"Ventaja en salvaciones de SAB; inmune a la condición asustado." },
    ],
    "Acechador de la Bestia [PHB 2024]": [
      { n:"Compañero Primo", nv:3, d:"Compañero animal mejorado (CR ≤ nivel/4, mínimo CR 1/4). Puede actuar con tu Acción Adicional." },
      { n:"Vínculo Primo", nv:3, d:"Compartes tus bonos de competencia con el compañero; recuperas 1 uso de Forma Salvaje cuando combate." },
      { n:"Aliado Bestial", nv:7, d:"El compañero gana +SAB a las tiradas de daño." },
      { n:"Protector Bestial", nv:11, d:"Cuando eres atacado, el compañero puede interponerse: recibe él el daño si está a 5 pies." },
      { n:"Vínculo Definitivo", nv:15, d:"El compañero actúa en su propio turno además del tuyo." },
    ],

    /* ── XGE ── */
    "Acechador de Sombras [XGE]": [
      { n:"Magia del Sombrío", nv:3, d:"Conjuros adicionales siempre preparados: Disfrazarse, Paso brumoso, Miedo, Mayor Invisibilidad, Pasar Sin Rastro..." },
      { n:"Ojos de Penumbra", nv:3, d:"Visión en la oscuridad 60 pies; puedes ver en oscuridad mágica." },
      { n:"Paso Sombrío", nv:3, d:"Mientras estás en penumbra u oscuridad, como Acción Adicional teletransportas 60 pies a otro área oscura/penumbra." },
      { n:"Emboscador", nv:7, d:"Ventaja en ataques durante el primer turno de combate contra criaturas que no te hayan atacado aún." },
      { n:"Golpe de Umbral", nv:11, d:"Cuando golpeas desde el sigilo o desde la oscuridad, el objetivo queda cegado hasta el final de su próximo turno." },
      { n:"Muerte en las Sombras", nv:15, d:"Si atacas a un objetivo que no puede verte, el impacto añade +6d6 de daño de necrótico." },
    ],
    "Horizon Walker [XGE]": [
      { n:"Magia del Horizonte", nv:3, d:"Conjuros de planar siempre preparados: Protección contra el Bien y el Mal, Pausa Temporal, Destierro..." },
      { n:"Detectar Portal", nv:3, d:"Detectas portales planares a 1 milla de distancia (1/descanso corto)." },
      { n:"Golpe Planar", nv:3, d:"1 vez/turno al golpear: añades 1d8 de daño de fuerza y el objetivo no puede hacer ataques de oportunidad hasta tu siguiente turno." },
      { n:"Paso Etéreo", nv:7, d:"Como Acción Adicional, entras en el Plano Etéreo hasta el final de tu turno." },
      { n:"Ataques Ambiguos", nv:11, d:"Cuando atacas, puedes hacer 1 ataque adicional contra un objetivo diferente en el Plano Etéreo o Material." },
      { n:"Defensa del Viajero", nv:15, d:"Cuando eres atacado, puedes teleportarte 5 pies como Reacción (1/turno)." },
    ],
    "Monster Slayer [XGE]": [
      { n:"Magia del Cazador de Monstruos", nv:3, d:"Conjuros adicionales: Protección contra el Bien y el Mal, Zona de la Verdad, Disipar Magia, Círculo Mágico, Atar Monstruo..." },
      { n:"Sensor del Cazador", nv:3, d:"Acción: examinas a 1 criatura visible a 60 pies y conoces sus inmunidades, resistencias y vulnerabilidades." },
      { n:"Magia Slayer", nv:3, d:"Reacción cuando un objetivo lanza un conjuro: impones desventaja en la tirada de ataque del conjuro; si impacta igual, sufres 2d6 de daño menos." },
      { n:"Presión Sobrenatural", nv:7, d:"Al marcar a un objetivo con Marca del Cazador, tiene velocidad reducida a la mitad y desventaja en ataques a tus aliados." },
      { n:"Golpe Mágico", nv:11, d:"Tus ataques se consideran mágicos; criaturas bajo efectos de conjuros reciben 2d6 daño adicional de tu Ataque." },
      { n:"Eliminar el Monstruo", nv:15, d:"Al golpear a tu objetivo marcado, puedes hacerle un crítico automático (1/descanso largo)." },
    ],

    /* ── TCE ── */
    "Swarmkeeper [TCE]": [
      { n:"Enjambre Reunido", nv:3, d:"Tienes un enjambre de espíritus naturales a tu alrededor. Al golpear, el enjambre puede: empujar 15 pies, dañar 1d6 con aguja/garra, o moverte 5 pies sin oportunidad." },
      { n:"Magia del Enjambre", nv:3, d:"Conjuros adicionales siempre preparados: Enredar, Nube de Dagas, Volar, Armadura de Agaletes, Insecto Gigante..." },
      { n:"Defensa del Enjambre", nv:7, d:"Si recibes daño de un atacante a 5 pies, el enjambre le inflige 1d6 de daño perforante." },
      { n:"Torbellino del Enjambre", nv:11, d:"El enjambre puede envolver a 1 objetivo: velocidad 0 y concentración penalizada (CON CD)." },
      { n:"Forma del Enjambre", nv:15, d:"Como Acción Adicional, te dispersas dentro del enjambre: vuelo 10 pies, resistencia a daño físico, 1 minuto (1/descanso largo)." },
    ],
    "Fey Wanderer [TCE]": [
      { n:"Dones Feéricos", nv:3, d:"Añades SAB a Engaño, Intimidación y Persuasión; también en cada una de esas que ya tengas competencia." },
      { n:"Conjuros del Caminante Feérico", nv:3, d:"Conjuros adicionales: Encantar Persona, Paso Brumoso, Disipar Magia, Dominio de Monstruo, Fuerza del Titán..." },
      { n:"Elusión de la Hada", nv:3, d:"Al golpear, el objetivo queda Encantado o Asustado (a tu elección) hasta el final de su turno." },
      { n:"Ocultar la Mente Feérica", nv:7, d:"Eres inmune a Detección de Pensamientos y a telepatos maliciosos." },
      { n:"Viaje Feérico", nv:11, d:"Como Acción Adicional, teletransportas a 1 aliado visible al espacio junto a ti (1/descanso corto)." },
      { n:"Represalia Feérica", nv:15, d:"Cuando una criatura Encantada o Asustada por ti te ataca, sufre 4d6 de daño psíquico." },
    ],
    "Drakewarden [TCE]": [
      { n:"Compañero Drake", nv:3, d:"Convocas un Drake (lagarto alado mágico) que actúa con tu Acción Adicional. Escala con nivel (tamaño/ataque)." },
      { n:"Conjuros del Guardián Drake", nv:3, d:"Conjuros de dragón adicionales según el tipo elemental del drake." },
      { n:"Vínculo Dracónico", nv:7, d:"Cuando el Drake usa su ataque, puedes atacar también como Reacción." },
      { n:"Drake Titánico", nv:11, d:"El Drake crece a Tamaño Grande y puedes montarlo; realiza 2 ataques cuando le ordenas atacar." },
      { n:"Ascensión Dracónica", nv:15, d:"1/descanso largo: el Drake se transforma brevemente en un dragón adulto del tipo asociado (1 minuto)." },
    ],

    /* ── EGW ── */
    "Explorador Gravitónico [EGW]": [
      { n:"Conjuros Gravitónicos", nv:3, d:"Conjuros de gravedad siempre preparados: Caída Flotante, Agravar, Invertir Gravedad, Teletransportación..." },
      { n:"Ajuste de Gravedad", nv:3, d:"Como Acción Adicional: empujas u atraes a 1 criatura a 60 pies hasta 10 pies (FUE para resistir). 1/descanso corto." },
      { n:"Escudo de Gravitones", nv:7, d:"Reacción al ser atacado: +2 CA y empujas al atacante 5 pies." },
      { n:"Lanzador Gravitónico", nv:11, d:"Cuando tu Ajuste de Gravedad falla, puedes volver a intentarlo en el mismo turno." },
      { n:"Maestro Gravitónico", nv:15, d:"Las criaturas afectadas por tu Ajuste tienen desventaja en todos sus ataques durante 1 round." },
    ],
    "Explorador Cronomático [EGW]": [
      { n:"Conjuros Crono", nv:3, d:"Conjuros de tiempo siempre preparados: Aguantar la Respiración, Pausa Temporal, Mayor Invisibilidad, Doppelganger, Detener el Tiempo..." },
      { n:"Impulsión Temporal", nv:3, d:"Como Reacción cuando tú o un aliado a 30 pies falla una tirada: da +1d8 a esa tirada. 1/descanso corto." },
      { n:"Burbuja Temporal", nv:7, d:"Cuando usas Impulsión Temporal, el beneficiario puede moverse sin provocar ataques de oportunidad hasta su siguiente turno." },
      { n:"Inversión Temporal", nv:11, d:"1/descanso largo: reviertes el estado de 1 criatura visible a cómo estaba al inicio del combate (PG, concentración, espacios de conjuro)." },
      { n:"Distorsión Maestra", nv:15, d:"Impulsión Temporal sube a +2d8 y no tiene límite de usos (solo limitado por 1 uso por criatura por turno)." },
    ],
  }
};
