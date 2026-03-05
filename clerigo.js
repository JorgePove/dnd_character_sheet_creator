/* ═══════════════════════════════════════════════════════
   clerigo.js — Clérigo: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_CLERIGO = {
  rasgos: [
    { n:"Conjuración Divina", nv:1, d:"Lanzador completo (SAB). Lista de Clérigo + conjuros de dominio siempre preparados." },
    { n:"Dominio Divino", nv:1, d:"Elige tu subclase (Dominio). Sus conjuros están siempre preparados." },
    { n:"Canal Divino", nv:2, d:"Usa el poder divino (1 uso/descanso corto → 3 en Nv.18). Base: Expulsar No-muertos." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Destruir No-muertos", nv:5, d:"Expulsar destruye automáticamente no-muertos de CR bajo (escala con nivel)." },
    { n:"Potencia Divina Mejorada", nv:8, d:"Añade mod SAB al daño de uno de tus conjuros de Clérigo por turno." },
    { n:"Intervención Divina", nv:10, d:"Pide ayuda directa a tu deidad. En Nv.20 tiene éxito automático." },
  ],
  subclases: {

    /* ── PHB 2014 / 2024 ── */
    "Dominio de la Vida [PHB 2014/2024]": [
      { n:"Competencia Pesada", nv:1, d:"Competencia en armadura pesada." },
      { n:"Discípulo de la Vida", nv:3, d:"Cuando lanzas un conjuro de curación, el objetivo recupera PG adicionales = 2 + nivel del conjuro." },
      { n:"Canal Divino – Preservar Vida", nv:3, d:"Distribuye hasta 5×nivel de PG de curación entre criaturas a 30 pies." },
      { n:"Curación Bienaventurada", nv:6, d:"Tus conjuros de curación también curan a otra criatura adyacente al objetivo." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante por ataque con arma, 1 vez/turno (+2d8 en Nv.14)." },
      { n:"Curación Suprema", nv:17, d:"Tus dados de curación siempre muestran el valor máximo." },
    ],
    "Dominio de la Luz [PHB 2014/2024]": [
      { n:"Truco de Bono", nv:1, d:"Aprendes el truco Sagrado o Llama Producida." },
      { n:"Destello Apotropaico", nv:3, d:"Reacción: impone desventaja en un ataque contra ti (SAB/descanso largo)." },
      { n:"Canal Divino – Luz Radiante", nv:3, d:"Emite un destello cegador de 30 pies: criaturas que fallen CON quedan cegadas." },
      { n:"Aura Mejorada de Luz", nv:6, d:"Resistencia al daño de fuego; conjuros de fuego/luz causan +1d6 daño." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante, 1 vez/turno." },
      { n:"Corona de Luz", nv:17, d:"Activa un aura de luz brillante (60 pies) que daña demonios y no-muertos que entren en ella." },
    ],
    "Dominio de la Tormenta [PHB 2014/2024]": [
      { n:"Competencia de Combate", nv:1, d:"Armadura pesada, tridente, armas de marina/espadón/hacha." },
      { n:"Cólera de la Tormenta", nv:3, d:"Reacción al ser golpeado: el atacante hace tirada CON o sufre 2d8 de rayo o trueno." },
      { n:"Canal Divino – Furia Destructora", nv:3, d:"Maximiza el daño de rayo o trueno de un conjuro en ese momento." },
      { n:"Trueno Divino", nv:6, d:"Cuando lanzas un conjuro que causa daño de trueno, añades SAB a una tirada de daño." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño de trueno, 1 vez/turno." },
      { n:"Estormborn", nv:17, d:"Velocidad de vuelo = tu velocidad de movimiento al aire libre." },
    ],
    "Dominio de la Guerra [PHB 2014/2024]": [
      { n:"Competencia de Combate", nv:1, d:"Armadura pesada y armas marciales." },
      { n:"Sacerdote de Guerra", nv:3, d:"Como Acción Adicional cuando atacas con arma, atacas otra vez (SAB/descanso corto)." },
      { n:"Canal Divino – Golpe Guiado", nv:3, d:"+10 a una tirada de ataque (tras ver el resultado)." },
      { n:"Canal Divino – Bendición del Dios de la Guerra", nv:6, d:"Reacción: da +10 a la tirada de ataque de un aliado visible." },
      { n:"Golpe Divino", nv:8, d:"+1d8 del tipo del arma, 1 vez/turno." },
      { n:"Avatar de Batalla", nv:17, d:"Resistencia a daño contundente, perforante y cortante no mágico." },
    ],
    "Dominio del Conocimiento [PHB 2014/2024]": [
      { n:"Bendiciones del Conocimiento", nv:1, d:"Competencia en 2 idiomas adicionales y 2 habilidades INT; doble competencia en ellas." },
      { n:"Canal Divino – Conocimiento de los Siglos", nv:3, d:"Obtén competencia temporal en cualquier habilidad o herramienta (10 minutos)." },
      { n:"Canal Divino – Leer Pensamientos", nv:6, d:"Lee pensamientos superficiales de una criatura o lanza Sugestión sin espacio." },
      { n:"Potencia Mejorada", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
      { n:"Visiones del Pasado", nv:17, d:"Meditando 1 minuto, obtienes visiones sobre un objeto o lugar." },
    ],
    "Dominio de la Naturaleza [PHB 2014]": [
      { n:"Acólito de la Naturaleza", nv:1, d:"Aprende un truco de Druida; competencia en Trato con Animales, Naturaleza o Supervivencia." },
      { n:"Canal Divino – Encantar Animales y Plantas", nv:3, d:"Encanta animales y plantas con éxito automático en 30 pies (SAB para resistir)." },
      { n:"Resistencia de los Seres Naturales", nv:6, d:"Resistencia a veneno y encantamiento; resistencia a daño contundente/perforante/cortante de armas no mágicas." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño frío, de rayo o de veneno, 1 vez/turno." },
      { n:"Señor de la Naturaleza", nv:17, d:"Inmunidad a conjuros encantamiento/encanto; animales y plantas naturales te ignoran." },
    ],
    "Dominio de los Engaños [PHB 2014/2024]": [
      { n:"Divinidades del Engaño", nv:1, d:"Aprendes los conjuros Disfrazarse y Encantar Persona (siempre preparados; gratis 1 vez/descanso largo)." },
      { n:"Canal Divino – Invocar Duplicado", nv:3, d:"Crea una copia ilusoria de ti a 30 pies. Puedes moverte a través de ella y lanzar conjuros desde su posición." },
      { n:"Canal Divino – Capa de Sombras", nv:3, d:"Otorga ventaja en Sigilo y Engaño a una criatura que toques durante 1 hora." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
      { n:"Maestro del Engaño", nv:17, d:"Puedes crear hasta 4 copias ilusorias de ti mismo. Las controlas como Acción Adicional." },
    ],
    "Dominio de la Muerte [PHB 2014]": [
      { n:"Competencia en Armas Marciales", nv:1, d:"Competencia con armas marciales." },
      { n:"Segador", nv:3, d:"Los trucos de daño que normalmente afectan a 1 criatura también afectan a una segunda criatura a 5 pies." },
      { n:"Canal Divino – Toque de Muerte", nv:3, d:"Al tocar a una criatura, inflige 5 + nivel×2 de daño necrótico." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño necrótico, 1 vez/turno." },
      { n:"Control Indestructible", nv:17, d:"Inmune al daño de tus propios conjuros de muerte; criaturas a 10 pies al morir propagan un pulso necrótico." },
    ],
    "Dominio Arcano [PHB 2024]": [
      { n:"Hechizología Arcana", nv:1, d:"Aprende 2 trucos de Mago (cuentan como conjuros de Clérigo para ti)." },
      { n:"Conjuros Arcanos", nv:3, d:"Aprende 2 conjuros de Mago de Nv.1-2 (siempre preparados); ganas 1 uso adicional de Canal Divino." },
      { n:"Canal Divino – Magia de Arcano Divino", nv:3, d:"Recupera un espacio de conjuro de Nv.1-4 (escala con nivel de Clérigo)." },
      { n:"Defensa Arcana", nv:6, d:"+INT a salvaciones contra conjuros y efectos mágicos." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño de fuerza, 1 vez/turno." },
      { n:"Dominador de Hechizos", nv:17, d:"Puedes preparar conjuros de Mago adicionales y usarlos con tu INT." },
    ],

    /* ── XGE ── */
    "Dominio de la Forja [XGE]": [
      { n:"Competencia de Artesano", nv:1, d:"Competencia en armadura pesada y herramientas de herrero." },
      { n:"Bendición de la Forja", nv:1, d:"1/descanso largo: infunde +1 mágico a un arma o armadura no mágica." },
      { n:"Canal Divino – Toque de Artesano", nv:3, d:"Activa la forja divina: ataques aliados a 30 pies ganan +1 tirada de impacto durante 10 minutos." },
      { n:"Alma de Artífice", nv:6, d:"+1 a todas las salvaciones por cada armadura mágica que lleves activa." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño de fuego, 1 vez/turno (+2d8 en Nv.14)." },
      { n:"Hijo de la Forja", nv:17, d:"Inmunidad al fuego; resistencia a daño perforante, cortante y contundente en armadura pesada." },
    ],
    "Dominio de las Tumbas [XGE]": [
      { n:"Ojos de la Tumba", nv:1, d:"Detectas no-muertos en 60 pies con acción (1/descanso largo)." },
      { n:"Guardián del Umbral de la Muerte", nv:1, d:"Reacción: niega un crítico contra ti o un aliado a 30 pies, convirtiéndolo en impacto normal (SAB/descanso largo)." },
      { n:"Canal Divino – Sendero hacia la Tumba", nv:3, d:"Maldices a un objetivo: el próximo daño que reciba se duplica." },
      { n:"Centinela en la Muerte", nv:6, d:"Reacción al morir una criatura a 30 pies: puede usar Reacción para recuperar PG = 2d8 + SAB." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño frío, 1 vez/turno." },
      { n:"Guardián de los Muertos", nv:17, d:"Al morir en combate, puedes revivir inmediatamente con PG máximos (1/descanso largo)." },
    ],

    /* ── TCE ── */
    "Dominio de la Paz [TCE]": [
      { n:"Embajador de la Paz", nv:1, d:"Competencia con doble bonificación en Perspicacia; aprendes el idioma Celestial." },
      { n:"Vínculo Protector", nv:1, d:"Vinculas a dos criaturas: cuando una recibe daño, la otra puede usarlo en su lugar (Reacción)." },
      { n:"Canal Divino – Balada de la Paz", nv:3, d:"Criaturas a 30 pies: restauras PG y eliminas condiciones de tu elección." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante, 1 vez/turno." },
      { n:"Vínculo Sagrado", nv:17, d:"Los vinculados pueden teletransportarse al lado del otro como Reacción." },
    ],
    "Dominio del Orden [TCE]": [
      { n:"Voz de Autoridad", nv:1, d:"Cuando lanzas un conjuro de Nv.1+ en un aliado, ese aliado puede atacar como Reacción." },
      { n:"Canal Divino – Decreto de Orden", nv:3, d:"Hasta 3 criaturas en 30 pies quedan Encantadas: obedecen órdenes simples 1 minuto (SAB)." },
      { n:"Encarnación de la Ley", nv:6, d:"Cuando lanzas un conjuro de Encantamiento, puedes hacerlo sin componentes verbales ni somáticos." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
      { n:"Ira del Orden", nv:17, d:"Cuando lanzas un conjuro de Encantamiento en un enemigo, ese enemigo queda maldecido: 2d8 daño psíquico extra si ataca a tus aliados." },
    ],
    "Dominio del Crepúsculo [TCE]": [
      { n:"Bonus de Armadura y Vista", nv:1, d:"Competencia en armadura pesada y armas marciales; visión en la oscuridad 300 pies." },
      { n:"Ojos del Crepúsculo", nv:1, d:"Ventaja en salvaciones contra condición Asustado; visión en oscuridad mágica." },
      { n:"Canal Divino – Santuario del Crepúsculo", nv:3, d:"Esfera de 30 pies de radio (oscuridad tenue): aliados ganan PG temporales, velocidad +10, ventaja vs. miedo." },
      { n:"Pasos del Crepúsculo", nv:6, d:"Reacción: teletransportas a ti mismo o a un aliado visible hasta 30 pies." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante o necrótico, 1 vez/turno." },
      { n:"Vigilia Nocturna", nv:17, d:"Tú y aliados dentro del santuario son inmunes al sueño y no podéis ser sorprendidos." },
    ],
    "Dominio Arcano [TCE]": [
      { n:"Hechizología Arcana", nv:1, d:"Aprende 2 trucos de Mago adicionales." },
      { n:"Conjuros Arcanos", nv:3, d:"Aprende 2 conjuros de Mago de Nv.1-2 (siempre preparados); ganas 1 uso adicional de Canal Divino." },
      { n:"Canal Divino – Restaurar Magia", nv:3, d:"Recuperas un espacio de conjuro de Nv.1-5 (escala según nivel de Clérigo)." },
      { n:"Potente Hechizología", nv:6, d:"+INT a una tirada de daño de cualquier conjuro de Mago que lances (1/turno)." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño de fuerza, 1 vez/turno." },
      { n:"Hechicero Supremo", nv:17, d:"Preparas conjuros adicionales de Mago de Nv.1-5; los lanzas con espacios de Clérigo." },
    ],

    /* ── EGW ── */
    "Dominio de la Ambición [EGW]": [
      { n:"Exigencias del Ambicioso", nv:1, d:"Competencia en Intimidación y Engaño; cuando una criatura a 30 pies falla una tirada, puedes moverte hasta ella sin oportunidad (reacción)." },
      { n:"Canal Divino – Avanzar en la Oscuridad", nv:3, d:"Entras brevemente en el Plano Sombrío y reapareces a 60 pies en espacio vacío." },
      { n:"Canal Divino – Corrupción Codiciosa", nv:3, d:"Hasta 5 criaturas a 30 pies reciben 2d10 de necrótico y quedan Asustadas (SAB para resistir)." },
      { n:"El Factor de la Ventaja", nv:6, d:"Cuando tienes ventaja en una tirada de ataque, añades tu mod CAR al daño del impacto." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
      { n:"Señor del Caos", nv:17, d:"Cuando un aliado cae a 0 PG, puedes usar Reacción para hacer que su energía vital explote: 2d10 necrótico en 10 pies (DEX)." },
    ],
    "Dominio del Resurgir [EGW]": [
      { n:"Abrazar el Resurgir", nv:1, d:"Cuando reduces a una criatura a 0 PG con un conjuro, recuperas PG = nivel de Clérigo." },
      { n:"Canal Divino – Toca de Vida y Muerte", nv:3, d:"Drenas PG de una criatura (2d6 + nivel) para curar a otra a 30 pies en igual cantidad." },
      { n:"Coste de la Vida", nv:6, d:"Cuando estabilizas a una criatura, puedes gastar tus propios PG para que ella recupere 1 PG en lugar de quedar estabilizada." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño necrótico, 1 vez/turno." },
      { n:"Detonación Vital", nv:17, d:"Cuando un aliado a 30 pies cae a 0 PG, puedes hacer que explote: 2d8 necrótico a criaturas a 5 pies de él (DEX para reducir a la mitad)." },
    ],

    /* ── TDCSR ── */
    "Dominio de la Unidad [TDCSR]": [
      { n:"Embajador de la Unidad", nv:1, d:"Competencia doble en Persuasión; cuando lanzas un conjuro en un aliado, ese aliado gana +1d4 a su próxima tirada de habilidad." },
      { n:"Canal Divino – Vínculo de Destinos", nv:3, d:"Vinculas a dos criaturas: comparten sus puntos de PG al recibir daño (mitad cada una) durante 1 minuto." },
      { n:"Canal Divino – Edicto Sagrado", nv:3, d:"Hasta 5 aliados a 30 pies ganan ventaja en sus tiradas de ataque hasta el final de tu siguiente turno." },
      { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante, 1 vez/turno." },
      { n:"Unión Perfecta", nv:17, d:"Mientras el Vínculo de Destinos está activo, los vinculados ganan además resistencia a todos los daños." },
    ],
  }
};
