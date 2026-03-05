/* ══════════════════════════════════════════════════════════
   hechizos-nivel-8.js — Conjuros de Nivel 8 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · IDRotF
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_8 = [
  {
    id: "abi_dalzim_horrid_wilting", n: "Marchitamiento Horrible de Abi-Dalzim [XGE]",
    nivel: "Nivel 8", escuela: "Nigromancia",
    casting: "1 acción", range: "150 pies", components: "V, S, M (esponja)", duration: "Instantáneo",
    desc: "Absorbes la humedad de las criaturas en esfera de 30 pies. Salvación CON o 12d8 necrótico, mitad si tienen éxito. Las plantas y el agua no hacen salvación y reciben el máximo.",
    damage: "12d8 Necrótico", extra: null
  },
  {
    id: "antimagic_field", n: "Campo Antimágico [PHB]",
    nivel: "Nivel 8", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S, M (pizca de polvo de hierro)", duration: "Conc. 1 hora",
    desc: "Esfera de 10 pies de radio alrededor tuyo. Dentro: los conjuros no funcionan, los objetos mágicos pierden sus propiedades, los no-muertos convocados se disuelven. El campo se mueve contigo.",
    damage: null, extra: null
  },
  {
    id: "antipathy_sympathy", n: "Antipatía/Simpatía [PHB]",
    nivel: "Nivel 8", escuela: "Encantamiento",
    casting: "1 hora", range: "60 pies", components: "V, S, M (alaun+gota de miel)", duration: "10 días",
    desc: "Animas un objeto o área de 200 pies cúbicos. Antipatía: un tipo de criatura se ve repelida (SAB o huye). Simpatía: ese tipo se ve atraída irresistiblemente (SAB o acercarse).",
    damage: null, extra: null
  },
  {
    id: "clone", n: "Clon [PHB]",
    nivel: "Nivel 8", escuela: "Nigromancia",
    casting: "1 hora", range: "Toque", components: "V, S, M (diamante 1000 po+recipiente 2000 po)", duration: "Instantáneo",
    desc: "Creas un clon inerte de una criatura. Si el original muere, su alma migra al clon (si lo desea) que madura en 120 días. El clon tiene los mismos PG máximos del original al morir.",
    damage: null, extra: null
  },
  {
    id: "control_weather", n: "Controlar el Tiempo [PHB]",
    nivel: "Nivel 8", escuela: "Transmutación",
    casting: "10 minutos", range: "Personal (5 millas)", components: "V, S, M (humo+tierra+agua)", duration: "Conc. 8 horas",
    desc: "Controlas el clima en radio de 5 millas. Cambias precipitaciones, temperatura y viento gradualmente en 1d4×10 minutos. Los cambios bruscos no son posibles.",
    damage: null, extra: null
  },
  {
    id: "demiplane", n: "Semiplano [PHB]",
    nivel: "Nivel 8", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "S", duration: "1 hora",
    desc: "Puerta a semiplano extradimensional de 30 pies cúbicos. Persiste entre usos. Criaturas dentro al cerrar la puerta quedan atrapadas hasta que se vuelva a abrir.",
    damage: null, extra: null
  },
  {
    id: "dominate_monster", n: "Dominar Monstruo [PHB]",
    nivel: "Nivel 8", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "Cualquier criatura: salvación SAB o bajo tu control telepático. Órdenes como Acción Adicional. Repite la salvación cada vez que recibe daño. Escala: duración 8 horas (Nv.9).",
    damage: null, extra: null
  },
  {
    id: "earthquake", n: "Terremoto [PHB]",
    nivel: "Nivel 8", escuela: "Evocación",
    casting: "1 acción", range: "500 pies", components: "V, S, M (pizca de tierra/roca/barro)", duration: "Conc. 1 min",
    desc: "Terremoto en esfera de 100 pies. Terreno difícil. Concentración: CD 15+. Criaturas en suelo: DES o tumbadas. Estructuras sufren 50 daño/turno. Grietas: 1d6 caen al inicio del turno.",
    damage: "50 daño a estructuras/turno", extra: null
  },
  {
    id: "feeblemind", n: "Debilitar Mente [PHB]",
    nivel: "Nivel 8", escuela: "Encantamiento",
    casting: "1 acción", range: "150 pies", components: "V, S, M (puñado de bolas de arcilla/cristal/mármol)", duration: "Instantáneo",
    desc: "Una criatura: salvación INT o 4d6 psíquico, INT y CAR se vuelven 1. No puede lanzar conjuros ni comunicarse coherentemente. Cada 30 días puede repetir la salvación para terminar el efecto.",
    damage: "4d6 Psíquico + reducción INT/CAR", extra: null
  },
  {
    id: "glibness", n: "Labia [PHB]",
    nivel: "Nivel 8", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V", duration: "1 hora",
    desc: "Cuando hagas una tirada de CAR puedes sustituirla por 15 automáticamente. Puedes mentir convincentemente en discursos (no en interrogatorios con magia de adivinación). Sin Concentración.",
    damage: null, extra: null
  },
  {
    id: "holy_aura", n: "Aura Sagrada [PHB]",
    nivel: "Nivel 8", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (30 pies)", components: "V, S, M (relicario sagrado 1000 po)", duration: "Conc. 1 min",
    desc: "Aura de luz sagrada de 30 pies. Aliados dentro: ventaja en salvaciones, los ataques contra ellos tienen desventaja, y si un no-muerto o infernal golpea a un aliado: salvación CON o cegado hasta el fin de su turno.",
    damage: null, extra: null
  },
  {
    id: "illusory_dragon", n: "Dragón Ilusorio [XGE]",
    nivel: "Nivel 8", escuela: "Ilusión",
    casting: "1 acción", range: "120 pies", components: "S", duration: "Conc. 1 min",
    desc: "Dragón ilusorio enorme de 20 pies en espacio vacío. Como Acción Adicional: muévelo 60 pies y puede usar su aliento (cono 60 pies, salvación INT o 7d6 del tipo elegido, mitad si tiene éxito).",
    damage: "7d6 tipo elegido (aliento ilusorio)", extra: null
  },
  {
    id: "incendiary_cloud", n: "Nube Incendiaria [PHB]",
    nivel: "Nivel 8", escuela: "Conjuración",
    casting: "1 acción", range: "150 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Nube de chispas ardientes de 20 pies de radio. Fuertemente oscurecida. Criaturas que entren o inicien turno: salvación DES o 10d8 fuego, mitad si tienen éxito. Puedes moverla 10 pies/turno.",
    damage: "10d8 Fuego", extra: null
  },
  {
    id: "maddening_darkness", n: "Oscuridad Enloquecedora [XGE]",
    nivel: "Nivel 8", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, M (gota de alquitrán mezclada con grasa)", duration: "Conc. 10 min",
    desc: "Oscuridad mágica intensa en esfera de 60 pies de radio. Voces locas resuenan dentro. Criaturas que inicien turno: salvación SAB o 8d8 psíquico, mitad si tienen éxito.",
    damage: "8d8 Psíquico", extra: null
  },
  {
    id: "maze", n: "Laberinto [PHB]",
    nivel: "Nivel 8", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Una criatura queda atrapada en un laberinto extradimensional. Pierde acciones intentando escapar (INT CD 20). Los minotauros escapan automáticamente al inicio de su turno. Al terminar la concentración, regresa al punto más cercano.",
    damage: null, extra: null
  },
  {
    id: "mind_blank", n: "Mente en Blanco [PHB]",
    nivel: "Nivel 8", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "24 horas",
    desc: "Criatura tocada: inmune al daño psíquico, a ser encantada, a la adivinación y a la detección de pensamientos. Sus pensamientos y localización no pueden ser percibidos por magia.",
    damage: null, extra: null
  },
  {
    id: "power_word_stun", n: "Palabra de Poder: Aturdir [PHB]",
    nivel: "Nivel 8", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Especial",
    desc: "Una criatura con 150 PG o menos queda Aturdida. Al final de cada turno: salvación CON para terminar el efecto.",
    damage: null, extra: null
  },
  {
    id: "reality_break", n: "Ruptura de Realidad [EGW]",
    nivel: "Nivel 8", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (cristal de luz de luna 100 po)", duration: "Conc. 1 min",
    desc: "Desgarras la realidad en torno a una criatura. Salvación SAB o: al inicio de cada turno 1d10 aleatorio de efecto (teletransportada 30 pies al azar, 4d12 de fuerza, Aturdida, cegada y sorda hasta su siguiente turno).",
    damage: "4d12 Fuerza (uno de los efectos posibles)", extra: null
  },
  {
    id: "sunburst", n: "Estallido Solar [PHB]",
    nivel: "Nivel 8", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S, M (fuego+pedernal)", duration: "Instantáneo",
    desc: "Luz brillante en esfera de 60 pies. Salvación CON o 12d6 radiante y cegado 1 minuto, mitad si tiene éxito. Los cegados pueden repetir la salvación al final de cada turno. No-muertos y hongos: desventaja.",
    damage: "12d6 Radiante", extra: null
  },
  {
    id: "telepathy", n: "Telepatía [PHB]",
    nivel: "Nivel 8", escuela: "Evocación",
    casting: "1 acción", range: "Ilimitado", components: "V, S, M (par de anillos de plata conectados por hilo)", duration: "24 horas",
    desc: "Estableces un enlace telepático con una criatura voluntaria del mismo plano. Podéis comunicaros mentalmente a cualquier distancia. El receptor no puede bloquearlo involuntariamente.",
    damage: null, extra: null
  },
  {
    id: "tsunami", n: "Tsunami [PHB]",
    nivel: "Nivel 8", escuela: "Conjuración",
    casting: "1 minuto", range: "Vista", components: "V, S", duration: "Conc. 6 turnos",
    desc: "Muro de agua de 300 pies de largo, 300 de alto, 50 de grosor. Avanza 50 pies/turno alejándose de ti. Criaturas en el área: salvación FUE o 6d10 contundente y arrastradas. Criaturas que comiencen turno en el muro: salvación FUE o asfixiadas.",
    damage: "6d10 Contundente", extra: null
  },
  {
    id: "wild_shape_greater", n: "Formas Animales [PHB]",
    nivel: "Nivel 8", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Conc. 24 horas",
    desc: "Tú y hasta 10 aliados voluntarios en 30 pies se transforman en bestias de CR 4 o inferior. Cada criatura elige su forma. Al llegar a 0 PG en forma de bestia, revierte a la forma normal.",
    damage: null, extra: null
  },
];
