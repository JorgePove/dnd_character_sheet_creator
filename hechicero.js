/* ═══════════════════════════════════════════════════════
   hechicero.js — Hechicero: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR · ERftLW
═══════════════════════════════════════════════════════ */

const CLASE_HECHICERO = {
  rasgos: [
    { n:"Conjuración", nv:1, d:"Lanzador completo (CAR). Lista de Hechicero. Conoce un número fijo de conjuros." },
    { n:"Origen de Hechicería", nv:1, d:"Elige tu subclase (origen de tu poder innato)." },
    { n:"Puntos de Hechicería", nv:2, d:"Moneda mágica (= nivel) para crear Espacios adicionales o potenciar Metamagia." },
    { n:"Metamagia", nv:3, d:"Elige 2 opciones de metamagia: Acelerado, Cuidadoso, Distante, Potenciado, Extendido, Sutil, Gemelo, Buscador. Más en Nv.10 y 17." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Recuperación de Hechicería", nv:20, d:"Al inicio de cada turno de combate, ganas 4 Puntos de Hechicería automáticamente." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Linaje Dracónico [PHB 2014]": [
      { n:"Ancestro Dracónico", nv:1, d:"Elige un tipo de dragón (Rojo, Azul, Verde, Negro, Blanco, Oro, Plata…); idioma Dracónico y resistencia al daño asociado." },
      { n:"Resiliencia Dracónica", nv:1, d:"+1 PG máximo por nivel; cuando no llevas armadura, CA = 13 + DEX." },
      { n:"Afinidad Elemental", nv:6, d:"Cuando lanzas un conjuro del tipo de tu ancestro, añade CAR al daño (y puedes gastar 1 Punto para resistencia 1 hora)." },
      { n:"Alas de Dragón", nv:14, d:"Como Acción Adicional, despliegas alas: velocidad de vuelo 60 pies." },
      { n:"Presencia Dracónica", nv:18, d:"Acción + 5 Puntos: emite aura de 60 pies de miedo o fascinación (SAB para resistir)." },
    ],
    "Alma Salvaje [PHB 2014]": [
      { n:"Magia Salvaje", nv:1, d:"Tras lanzar un conjuro de Nv.1+, el DM puede pedir una tirada: si sacas ≤10, lanzas 1d100 en la tabla de Oleadas de Magia Salvaje." },
      { n:"Resonancia Oscura", nv:1, d:"Gasta 1 Punto de Hechicería para activar una Oleada de Magia Salvaje inmediatamente." },
      { n:"Marea de Caos", nv:6, d:"1/descanso largo: tienes ventaja en 1 tirada de ataque/habilidad/salvación. Si lo usas, el DM puede pedir una Oleada." },
      { n:"Magia Hechizante", nv:14, d:"Puedes gastar 1 Punto para activar una Oleada y elegir el efecto de la tabla en lugar de tirar." },
      { n:"Explosión Hechizante", nv:18, d:"Al activar una Oleada de Magia Salvaje, activas simultáneamente el efecto 'Rayos de Colores'." },
    ],

    /* ── PHB 2024 ── */
    "Linaje Dracónico [PHB 2024]": [
      { n:"Ancestro Dracónico", nv:1, d:"Elige tipo de dragón; resistencia al tipo de daño correspondiente." },
      { n:"Resiliencia Dracónica", nv:1, d:"+1 PG/nivel; CA = 13 + DEX sin armadura." },
      { n:"Guardián Dracónico", nv:6, d:"Cuando lanzas un conjuro de Nv.1+, puedes manifestar un dragón espectral que ataca o protege." },
      { n:"Alas de Dragón", nv:14, d:"Como Acción Adicional, despliegas alas: vuelo 60 pies." },
      { n:"Presencia Dracónica", nv:18, d:"Emite aura de miedo o fascinación 60 pies (SAB para resistir)." },
    ],
    "Alma Salvaje [PHB 2024]": [
      { n:"Magia Salvaje", nv:1, d:"Tras lanzar un conjuro, el DM puede pedir tirada: en ≤10, tabla de Magia Salvaje (d100)." },
      { n:"Resonancia Oscura", nv:1, d:"Gasta 1 Punto: activa una Oleada controlada." },
      { n:"Tide of Chaos", nv:6, d:"1/descanso largo: ventaja en 1 tirada. Usando Resonancia después restaura Tide of Chaos." },
      { n:"Magia Controlada", nv:14, d:"Cuando activas Oleada, eliges entre dos efectos de la tabla." },
      { n:"Explosión Hechizante", nv:18, d:"Tus Oleadas siempre incluyen el efecto de Bola de Fuego adicional en área." },
    ],

    /* ── XGE ── */
    "Alma de Tormenta [XGE]": [
      { n:"Magia de Tormenta", nv:1, d:"Resistencia a rayo y trueno; puedes hablar con criaturas del aire y del mar (Hablar con Animales limitado)." },
      { n:"Corazón de la Tormenta", nv:6, d:"Al lanzar un conjuro de Nv.1+ que cause daño de rayo o trueno, criaturas a 10 pies reciben 1d6 de ese tipo." },
      { n:"Guía de la Tormenta", nv:14, d:"Acción para controlar condiciones climáticas: crear viento, parar lluvia, despejar niebla... (1/descanso largo)." },
      { n:"Ira de la Tormenta", nv:18, d:"Al lanzar cualquier conjuro, puedes infligir un rayo adicional a otro objetivo a 60 pies (1d6 rayo, CON)." },
    ],
    "Alma de Sombra [XGE]": [
      { n:"Magia de Sombra", nv:1, d:"Visión en la oscuridad 120 pies; puedes gastar 3 Puntos para crear un perro de sombras (como Conjurar Bestia CR 1/2)." },
      { n:"Umbral de las Sombras", nv:6, d:"En penumbra u oscuridad, puedes teletransportarte 120 pies como Acción Adicional." },
      { n:"Resistencia de Sombra", nv:14, d:"Cuando estás en penumbra u oscuridad, eres resistente a todo daño no mágico." },
      { n:"Figura de las Sombras", nv:18, d:"En oscuridad completa, eres invisible para criaturas que dependan de la vista." },
    ],
    "Línea de Hadas [XGE]": [
      { n:"Magia Feérica", nv:1, d:"Luz de las Hadas y Encantar Persona siempre preparados; los lanzas sin espacio 1 vez/descanso largo cada uno." },
      { n:"Teletransportación Feérica", nv:6, d:"Como Acción Adicional, teletransportas 30 pies (puedes llevar a 1 criatura contigua). 1/descanso corto." },
      { n:"Arrugas Dimensionales", nv:14, d:"Al teletransportarte, criaturas a 5 pies pueden ser teletransportadas también." },
      { n:"Presencia Feérica", nv:18, d:"1/descanso largo: aura de 60 pies de fascinación o miedo (SAB para resistir)." },
    ],
    "Alma Divina [XGE]": [
      { n:"Magia Divina", nv:1, d:"Accedes a la lista completa de conjuros de Clérigo además de la de Hechicero." },
      { n:"Favor de los Dioses", nv:1, d:"1/descanso largo: cuando hagas una tirada de ataque o salvación y saques 1, puedes volver a tirar." },
      { n:"Alas Sobrenaturales", nv:6, d:"Puedes desplegar alas de vuelo 30 pies como Acción Adicional (SAB/descanso largo)." },
      { n:"Resiliencia Divina", nv:14, d:"Cuando llegas a 0 PG, recuperas PG = CAR mod × 2 (1/descanso largo)." },
      { n:"Forma Celestial", nv:18, d:"Como Acción, asumes una forma angélica por 1 minuto: vuelo 60 pies, resistencia necrótico/radiante, cura 2d8 a 1 aliado/turno." },
    ],

    /* ── TCE ── */
    "Aberrant Mind [TCE]": [
      { n:"Tentáculos Telepáticos", nv:1, d:"Aprendes Telepatía y conjuros adicionales de aberración siempre preparados." },
      { n:"Percepción Psíquica", nv:1, d:"Puedes detectar criaturas invisibles o en el Plano Etéreo a 30 pies." },
      { n:"Defensa Psi", nv:6, d:"Resistencia al daño psíquico; inmune a tener tus pensamientos leídos sin consentir." },
      { n:"Retorcimiento Aberrante", nv:14, d:"Cuando lanzas un conjuro de Ilusión o Encantamiento, puedes alterar la realidad alrededor del objetivo (2 Puntos)." },
      { n:"Crear Aberración", nv:18, d:"Con 7 Puntos, transformas a una criatura en aberración aliada durante 24 horas (SAB para resistir)." },
    ],
    "Clockwork Soul [TCE]": [
      { n:"Restauración del Mecanismo", nv:1, d:"Conjuros de orden siempre preparados: Alarma, Disipar Magia, Aguantar la Respiración, Ley de la Igualdad..." },
      { n:"Anular Caos", nv:1, d:"Cuando tú o un aliado a 60 pies lanza en la tabla de magia salvaje, puedes reemplazar el resultado por el medio de la tabla." },
      { n:"Bastion of Law", nv:6, d:"Gasta 1-5 Puntos: crea un escudo de protección para 1 criatura que absorbe daño igual a 5× puntos gastados." },
      { n:"Trance de Orden", nv:14, d:"Al lanzar un conjuro, puedes hacer que sea como si lo lanzaras con el espacio más alto que tengas sin gastar uno superior (2 Puntos)." },
      { n:"Codificado en la Ley", nv:18, d:"Inmune a ser Encantado; resistencia al daño mágico; aura de 10 pies que previene oleadas de magia salvaje." },
    ],

    /* ── EGW ── */
    "Magia de la Graviturgia [EGW]": [
      { n:"Ajuste Arcano", nv:1, d:"Como Acción Adicional, aumentas o reduces el peso de 1 criatura a 30 pies: pesada (velocidad 0, ventaja en FUE) o ligera (velocidad +10, desventaja FUE). 1/descanso corto." },
      { n:"Maestría Gravitónica", nv:1, d:"Añades INT a tiradas de Atletismo; no puedes ser derribado involuntariamente." },
      { n:"Explosión de Atracción", nv:6, d:"Cuando lanzas un conjuro que cause daño, puedes atraer a 1 objetivo afectado hasta 10 pies hacia ti." },
      { n:"Singularidad del Horizonte de Eventos", nv:14, d:"1/descanso largo: creas un punto de colapso gravitatorio de 30 pies de radio por 1 minuto; las criaturas dentro son atraídas 5 pies/turno y reciben 2d10 de aplastamiento." },
      { n:"Forma Etérea de Gravedad", nv:18, d:"Velocidad de vuelo 60 pies; inmune a ser derribado o inmovilizado; adds INT a tiradas de salvación de FUE." },
    ],
    "Magia de la Cronurgia [EGW]": [
      { n:"Cronista Arcano", nv:1, d:"Añades tu mod INT a la Iniciativa; puedes usar dados de Presagio como en la Escuela de Adivinación." },
      { n:"Impulsión Temporal", nv:1, d:"Como Reacción cuando una criatura visible falla una tirada: da +1d8 a ella. 1 vez/turno." },
      { n:"Congelar el Momento", nv:6, d:"Puedes almacenar un conjuro de concentración 'en pausa' por hasta 1 hora y activarlo después sin lanzarlo de nuevo." },
      { n:"Extraer Fragmento de Tiempo", nv:14, d:"Cuando una criatura visible cae a 0 PG, puedes usar Reacción para revertirla a 1 PG (1/descanso largo)." },
      { n:"Maestría del Tiempo", nv:18, d:"Cuando activas Impulsión Temporal, también puedes re-tirar la tirada de ataque del atacante (si había uno)." },
    ],

    /* ── TDCSR ── */
    "Linaje del Fuego Cósmico [TDCSR]": [
      { n:"Origen del Fuego Cósmico", nv:1, d:"Resistencia al fuego; cuando lanzas un conjuro que cause daño de fuego, puedes cambiarlo a cualquier tipo elemental." },
      { n:"Llama del Cosmos", nv:6, d:"Al lanzar un conjuro de fuego de Nv.1+, criaturas a 10 pies reciben 1d6 del tipo de daño elegido." },
      { n:"Corazón de Fuego Cósmico", nv:14, d:"Inmunidad al fuego; tus conjuros de fuego ignoran resistencias (pero no inmunidades)." },
      { n:"Ascensión del Fuego", nv:18, d:"Velocidad de vuelo 60 pies; tus conjuros de fuego infligen el máximo de daño siempre." },
    ],

    /* ── ERftLW ── */
    "Linaje de la Marca [ERftLW]": [
      { n:"Conjuros de la Marca", nv:1, d:"Tu tipo de Marca Dracónica otorga conjuros adicionales siempre preparados (Marca de Detección, Curación, Hospitalidad, etc.)." },
      { n:"Intuición de la Marca", nv:1, d:"Cuando lanzas un conjuro de tu Marca, añades 1d4 a las tiradas de habilidad relacionadas." },
      { n:"Magia de Marca Mejorada", nv:6, d:"Tus conjuros de Marca se lanzan como si tuvieras 1 nivel de espacio más sin gastar uno superior." },
      { n:"Marca Potenciada", nv:14, d:"1 vez/descanso largo puedes lanzar el conjuro máximo de tu Marca sin coste y como si fuera del nivel más alto disponible." },
      { n:"Pulso de la Marca", nv:18, d:"Cuando usas Metamagia, la primera criatura a 30 pies que elijas recupera 1d6 PG." },
    ],
  }
};
