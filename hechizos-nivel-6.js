/* ══════════════════════════════════════════════════════════
   hechizos-nivel-6.js — Conjuros de Nivel 6 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · GGtR
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_6 = [
  {
    id: "arcane_gate", n: "Portal Arcano [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "500 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Creas dos portales circulares de 10 pies de diámetro en dos puntos visibles a 500 pies entre sí. Cualquier criatura que entre por uno sale por el otro instantáneamente.",
    damage: null, extra: null
  },
  {
    id: "bones_of_the_earth", n: "Huesos de la Tierra [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Hasta 6 pilares de piedra emergen del suelo en puntos a 120 pies. Cada pilar: 5 pies de diámetro, hasta 30 de alto. Criaturas en el lugar: salvación DES o 6d6 contundente y encaramadas encima. Escala: +2 pilares/nivel.",
    damage: "6d6 Contundente (escala)", extra: null
  },
  {
    id: "chain_lightning", n: "Rayo en Cadena [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S, M (bits de piel de anguila+cristal)", duration: "Instantáneo",
    desc: "Rayo principal a 1 objetivo: salvación DES o 10d8 rayo, mitad si tiene éxito. Salta a 3 objetivos adicionales a 30 pies del anterior (salvación igual). Escala: +1 objetivo/nivel.",
    damage: "10d8 Rayo (escala)", extra: null
  },
  {
    id: "circle_of_death", n: "Círculo de la Muerte [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 acción", range: "150 pies", components: "V, S, M (polvo de hueso 500 po)", duration: "Instantáneo",
    desc: "Esfera de energía negativa de 60 pies de radio. Salvación CON o 8d6 necrótico, mitad si tiene éxito. Escala: +2d6/nivel.",
    damage: "8d6 Necrótico (escala)", extra: null
  },
  {
    id: "conjure_fey", n: "Convocar Ser Feérico Mayor [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 minuto", range: "90 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "Convocas un ser feérico de CR 6 o inferior. Obedece tus órdenes. Si se rompe la concentración, el ser puede actuar libremente. Escala: CR máximo +1/nivel.",
    damage: null, extra: null
  },
  {
    id: "contingency", n: "Contingencia [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "10 minutos", range: "Personal", components: "V, S, M (estatuilla de marfil de ti mismo 1500 po)", duration: "10 días",
    desc: "Preparas un conjuro de nivel 5 o inferior con una condición de activación. Cuando se cumpla la condición, el conjuro se lanza automáticamente sobre ti. Solo puedes tener una contingencia activa.",
    damage: null, extra: null
  },
  {
    id: "create_undead", n: "Crear No-Muertos [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 minuto", range: "10 pies", components: "V, S, M (arcilla/sangre/polvo/grasa 150 po)", duration: "Instantáneo",
    desc: "Creas hasta 3 ghoul a partir de cadáveres. Obedecen tus órdenes. Escala: más poderosos según nivel (ghast Nv.7, sombra Nv.8, wight Nv.9).",
    damage: null, extra: null
  },
  {
    id: "disintegrate", n: "Desintegrar [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (polvo de hierro+polvo de rubí)", duration: "Instantáneo",
    desc: "Rayo verde delgado. Ataque de conjuro a distancia o salvación DES: 10d6+40 de fuerza. Si esto reduce la criatura a 0 PG, queda desintegrada en polvo. Escala: +3d6+10/nivel.",
    damage: "10d6+40 Fuerza (escala)", extra: null
  },
  {
    id: "drawmij_instant_summons", n: "Invocación Instantánea de Drawmij [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 minuto (ritual)", range: "Toque", components: "V, S, M (zafiro 1000 po que consume)", duration: "Hasta disipar",
    desc: "Tocas un objeto de hasta 10 libras. En cualquier momento puedes decir su nombre mágico y aparece en tu mano desde donde esté, en cualquier plano.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "eyebite", n: "Mirada Maligna [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Tus ojos se vuelven negros. Cada turno elige un efecto sobre 1 criatura a 60 pies (salvación SAB): Dormida (hasta 1 hora), Aterrada (hasta el fin de la concentración), o Enferma (desventaja en ataques y tiradas cada turno).",
    damage: null, extra: null
  },
  {
    id: "find_the_path", n: "Encontrar el Camino [PHB]",
    nivel: "Nivel 6", escuela: "Adivinación",
    casting: "1 minuto", range: "Personal", components: "V, S, M (set de adivinación + objeto del destino)", duration: "Conc. 1 día",
    desc: "Conoces la ruta más directa a un lugar específico en el mismo plano. Sabes si vas en la dirección correcta o no.",
    damage: null, extra: null
  },
  {
    id: "flesh_to_stone", n: "Carne a Piedra [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (pizca de cal+agua+tierra)", duration: "Conc. 1 min",
    desc: "Una criatura: salvación CON o restringida mientras falla 3 veces seguidas → petrificada permanentemente. Éxito 3 veces seguidas: termina el efecto.",
    damage: null, extra: null
  },
  {
    id: "forbiddance", n: "Prohibición [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "10 minutos (ritual)", range: "Toque", components: "V, S, M (aspersores de agua bendita/maldita+incienso+rubí 1000 po)", duration: "1 día",
    desc: "Proteges un área de hasta 40000 pies cuadrados, 30 pies de alto. Bloquea la teletransportación y viaje entre planos. Daña a ciertos tipos de criaturas (5d10 radiante/necrótico) al entrar.",
    damage: "5d10 Radiante o Necrótico al entrar", extra: "Puede lanzarse como ritual."
  },
  {
    id: "globe_of_invulnerability", n: "Globo de Invulnerabilidad [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S, M (perla de cristal)", duration: "Conc. 1 min",
    desc: "Barrera esférica de 10 pies de radio. Los conjuros de nivel 5 o inferior no pueden penetrarla desde fuera. Los lanzados desde dentro sí pueden salir. Escala: nivel máximo bloqueado +1/nivel.",
    damage: null, extra: null
  },
  {
    id: "guards_and_wards", n: "Guardias y Obstáculos [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "10 minutos", range: "Toque", components: "V, S, M (incienso+azufre+aceite+sangre+pequeña plata+cobre 10 po)", duration: "24 horas",
    desc: "Proteges un área de hasta 2500 pies cuadrados: puertas bloqueadas, escaleras con telarañas, confusión en pasillos, ilusiones en puertas, y una niebla densa. Escala: área adicional/nivel.",
    damage: null, extra: null
  },
  {
    id: "harm", n: "Dañar [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Una criatura: salvación CON o 14d6 necrótico (mitad si tiene éxito). El daño no puede reducir los PG por debajo de 1. Si falla: sus PG máximos se reducen en el daño sufrido hasta el descanso largo.",
    damage: "14d6 Necrótico", extra: null
  },
  {
    id: "heal", n: "Curar [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Una criatura recupera 70 PG. También termina con ceguera, sordera y todas las enfermedades. Escala: +10 PG/nivel.",
    damage: "Cura 70 PG (escala)", extra: null
  },
  {
    id: "heroes_feast", n: "Festín de los Héroes [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "10 minutos", range: "30 pies", components: "V, S, M (recipiente dorado 1000 po)", duration: "Instantáneo",
    desc: "Banquete para hasta 12 criaturas. Tras comer (1 hora): curación de todos los PG, inmunidad a veneno y miedo, +2d10 PG máximos y totales, ventaja en SAB durante 24 horas.",
    damage: null, extra: null
  },
  {
    id: "investiture_of_flame", n: "Investidura de Llama [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Llamas te envuelven. Resistencia al frío; inmunidad al fuego. Las llamas iluminan 30 pies brillante + 30 tenue. Criaturas a 5 pies al inicio de su turno: 1d10 fuego. Como Acción: línea de fuego 15×5 pies (4d8 fuego, salvación DES mitad).",
    damage: "1d10/turno o 4d8 línea Fuego", extra: null
  },
  {
    id: "investiture_of_ice", n: "Investidura de Hielo [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Hielo te envuelve. Resistencia al fuego; inmunidad al frío. Terreno difícil de hielo donde camines. Criaturas a 10 pies al inicio de su turno: salvación CON o 3d6 frío y velocidad reducida a la mitad.",
    damage: "3d6 Frío", extra: null
  },
  {
    id: "investiture_of_stone", n: "Investidura de Piedra [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Piedra te envuelve. Resistencia al daño contundente, perforante y cortante de ataques no mágicos. Puedes moverte a través de la roca sólida a la mitad de tu velocidad.",
    damage: null, extra: null
  },
  {
    id: "investiture_of_wind", n: "Investidura de Viento [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Vientos te envuelven. Velocidad de vuelo 60 pies. Ataques a distancia contra ti tienen desventaja. Como Acción: viento de 15×10 pies (3d8 contundente, salvación CON mitad, tumbados).",
    damage: "3d8 Contundente", extra: null
  },
  {
    id: "magic_jar", n: "Jaula de Almas [XGE]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 minuto", range: "Personal", components: "V, S, M (recipiente de gemas 500 po)", duration: "Hasta disipar",
    desc: "Tu alma sale de tu cuerpo y queda en el recipiente. Puedes intentar poseer cuerpos a 100 pies (CAR vs. tu CD o queda poseída). Desde el recipiente puedes percibir a 100 pies.",
    damage: null, extra: null
  },
  {
    id: "mass_suggestion", n: "Sugestión en Masa [PHB]",
    nivel: "Nivel 6", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, M (lengua de víbora+miel)", duration: "24 horas",
    desc: "Como Sugestión pero hasta 12 criaturas. Salvación SAB o siguen tu sugestión. Escala: duración hasta 10 días (Nv.7), 30 días (Nv.8), 180 días (Nv.9).",
    damage: null, extra: null
  },
  {
    id: "mental_prison", n: "Prisión Mental [XGE]",
    nivel: "Nivel 6", escuela: "Ilusión",
    casting: "1 acción", range: "60 pies", components: "S", duration: "Conc. 1 hora",
    desc: "Una criatura: salvación INT o atrapada en ilusión personal. Si se mueve o algo cruza la barrera ilusoria: 10d10 psíquico. La criatura no puede percibir el mundo exterior.",
    damage: "10d10 Psíquico (al cruzar barrera)", extra: null
  },
  {
    id: "move_earth", n: "Mover Tierra [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (mezcla de arcilla/tierra/arena)", duration: "Conc. 2 horas",
    desc: "Mueves tierra (no roca) en cubo de 40 pies. Puedes excavar, levantar colinas o nivelar. El proceso es lento (10 minutos para cambio notable). Las criaturas en el área pueden moverse para evitar ser enterradas.",
    damage: null, extra: null
  },
  {
    id: "otherworldly_form", n: "Forma Extraplanar [IDRotF]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Tu forma se transforma en algo extraplanar. Ganas: velocidad de vuelo 40 pies, resistencia al daño necrótico y radiante, y puedes lanzar Luz de las Hadas y Ver Invisibilidad a voluntad.",
    damage: null, extra: null
  },
  {
    id: "otto_irresistible_dance", n: "Danza Irresistible de Otto [PHB]",
    nivel: "Nivel 6", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Conc. 1 min",
    desc: "Una criatura comienza a bailar involuntariamente. Pierde su movimiento, tiene desventaja en DES y en ataques, y los atacantes tienen ventaja contra ella. Puede intentar salvación SAB al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "primordial_ward", n: "Protección Primordial [XGE]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Ganas resistencia a ácido, frío, fuego, rayo y trueno. Cuando recibes daño de uno de estos tipos, puedes usar Reacción para ganar inmunidad a ese tipo hasta el final de tu siguiente turno.",
    damage: null, extra: null
  },
  {
    id: "programmed_illusion", n: "Ilusión Programada [PHB]",
    nivel: "Nivel 6", escuela: "Ilusión",
    casting: "1 acción", range: "120 pies", components: "V, S, M (trozo de lana+polvo de jade 25 po)", duration: "Hasta disipar",
    desc: "Creas una ilusión en un cubo de 30 pies que permanece inactiva hasta que se cumpla una condición que especifiques. La ilusión dura 5 minutos activa, luego vuelve a su estado latente.",
    damage: null, extra: null
  },
  {
    id: "scatter", n: "Dispersar [XGE]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Instantáneo",
    desc: "Hasta 5 criaturas: salvación SAB o teletransportadas a espacio vacío visible a 120 pies que elijas. Las que fallen no pueden resistirse.",
    damage: null, extra: null
  },
  {
    id: "soul_cage", n: "Jaula de Almas [XGE]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 reacción", range: "60 pies", components: "V, S, M (jaula pequeña de hueso/marfil 300 po)", duration: "8 horas",
    desc: "Reacción cuando una criatura humanoide muere a 60 pies. Atrapa su alma en la jaula (6 usos): robar experiencia vital (+2d8 PG y ventaja en siguiente tirada), consultar el alma, o consumirla (Revivificar sin material).",
    damage: null, extra: null
  },
  {
    id: "sunbeam", n: "Rayo de Sol [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 60p)", components: "V, S, M (lente de cristal)", duration: "Conc. 1 min",
    desc: "Línea de luz solar de 60×5 pies. Salvación CON o 6d8 radiante y cegado hasta tu siguiente turno, mitad si tiene éxito. No-muertos y hongos tienen desventaja. Como Acción cada turno. Escala: no.",
    damage: "6d8 Radiante", extra: null
  },
  {
    id: "tasha_bubbling_cauldron", n: "Caldero Burbujeante de Tasha [PHB24]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "5 pies", components: "V, S, M (caldero de hierro)", duration: "10 min",
    desc: "Caldero mágico que puede crear pociones de curación mayor para hasta 4 criaturas, neutralizar venenos o eliminar enfermedades en criaturas que beban de él.",
    damage: null, extra: null
  },
  {
    id: "tenser_transformation", n: "Transformación de Tenser [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Te transformas en un guerrero. Ganas: +50 PG temporales, ventaja en ataques con arma, armas cuentan como mágicas, ataque adicional, competencia en armadura y armas. Al terminar: agotamiento 1.",
    damage: null, extra: null
  },
  {
    id: "transport_via_plants", n: "Transporte por Plantas [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "10 pies", components: "V, S", duration: "1 turno",
    desc: "Creas un portal mágico dentro de una planta Enorme o mayor. Puedes designar otra planta en cualquier lugar del mismo plano. Cualquier criatura que entre emerge junto a la planta destino.",
    damage: null, extra: null
  },
  {
    id: "true_seeing", n: "Visión Verdadera [PHB]",
    nivel: "Nivel 6", escuela: "Adivinación",
    casting: "1 acción", range: "Toque", components: "V, S, M (ungüento de hongos+azafrán+grasa 25 po)", duration: "1 hora",
    desc: "La criatura tocada tiene Visión Verdadera, nota puertas/pasajes secretos, y ve al Plano Etéreo hasta 120 pies.",
    damage: null, extra: null
  },
  {
    id: "wall_of_ice", n: "Muro de Hielo [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (polvo de cuarzo)", duration: "Conc. 10 min",
    desc: "Muro de hielo de hasta 10 paneles de 10×10 pies (o domo o esfera de 10 pies de radio). Criaturas que atraviesen: salvación DES o 10d6 frío, mitad si tienen éxito. Al ser destruido un panel: nube de vapor fría (CON o 5d6 frío). Escala: +2d6/nivel.",
    damage: "10d6 Frío (escala)", extra: null
  },
  {
    id: "wind_walk", n: "Caminar con el Viento [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 minuto", range: "30 pies", components: "V, S, M (fuego+agua bendita)", duration: "8 horas",
    desc: "Tú y hasta 10 criaturas voluntarias se transforman en una forma de nube. Velocidad de vuelo 300 pies. Pueden volver a su forma normal en 1 minuto. No pueden atacar en forma de nube.",
    damage: null, extra: null
  },
  {
    id: "word_of_recall", n: "Palabra de Regreso [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "5 pies", components: "V", duration: "Instantáneo",
    desc: "Tú y hasta 5 criaturas voluntarias a 5 pies sois teletransportados al santuario más cercano de tu deidad en el mismo plano.",
    damage: null, extra: null
  },
];
