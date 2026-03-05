/* ══════════════════════════════════════════════════════════
   hechizos-nivel-1.js — Conjuros de Nivel 1 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · SCAG · EGW · FTD · SAiS · GGtR · IDRotF
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_1 = [
  {
    id: "absorb_elements", n: "Absorber Elementos [XGE]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 reacción", range: "Personal", components: "S", duration: "1 turno",
    desc: "Reacción al recibir daño de ácido, frío, fuego, rayo o trueno: resistencia a ese tipo hasta el inicio de tu siguiente turno, y el próximo ataque cuerpo a cuerpo añade 1d6 de ese tipo (escala +1d6/nivel).",
    damage: "1d6 del tipo absorbido (escala)", extra: null
  },
  {
    id: "alarm", n: "Alarma [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 minuto (ritual)", range: "30 pies", components: "V, S, M (campanita)", duration: "8 horas",
    desc: "Proteges un área de 20 pies cúbicos. Cuando una criatura Diminuta o mayor entre, suena una alarma mental o audible. Puedes designar criaturas que no la activen.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "animal_friendship", n: "Amistad con Animales [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (comida)", duration: "24 horas",
    desc: "Convences a una bestia de INT 3 o menos de que eres su amiga. Salvación SAB o queda encantada. Escala: +1 bestia/nivel.",
    damage: null, extra: null
  },
  {
    id: "armor_of_agathys", n: "Armadura de Ágatos [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S, M (copa de agua)", duration: "1 hora",
    desc: "Ganas 5 PG temporales. Mientras los tengas, quienes te golpeen en cuerpo a cuerpo reciben 5 de frío. Escala: +5 PG temp y +5 frío/nivel.",
    damage: "5 Frío por golpe (escala)", extra: null
  },
  {
    id: "arms_of_hadar", n: "Brazos de Hadar [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S", duration: "Instantáneo",
    desc: "Tentáculos de oscuridad en 10 pies. Salvación FUE o 2d6 necrótico y no puede usar reacciones hasta su siguiente turno. Escala: +1d6/nivel.",
    damage: "2d6 Necrótico (escala)", extra: null
  },
  {
    id: "bane", n: "Perdición [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (gota de sangre)", duration: "Conc. 1 min",
    desc: "Hasta 3 criaturas: salvación CAR o restan 1d4 a tiradas de ataque y salvación. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "bless", n: "Bendición [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (agua bendita)", duration: "Conc. 1 min",
    desc: "Hasta 3 criaturas añaden 1d4 a tiradas de ataque y salvación. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "burning_hands", n: "Manos Ardientes [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cono 15p)", components: "V, S", duration: "Instantáneo",
    desc: "Cono de llamas de 15 pies. Salvación DES o 3d6 fuego, la mitad si tiene éxito. Objetos inflamables se incendian. Escala: +1d6/nivel.",
    damage: "3d6 Fuego (escala)", extra: null
  },
  {
    id: "catapult", n: "Catapulta [XGE]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "S", duration: "Instantáneo",
    desc: "Lanzas un objeto de 1-5 libras hasta 90 pies en línea recta. Si golpea a una criatura: ataque de conjuro, 3d8 contundente. Escala: +1d8/nivel.",
    damage: "3d8 Contundente (escala)", extra: null
  },
  {
    id: "cause_fear", n: "Causar Miedo [XGE]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Conc. 1 min",
    desc: "Una criatura que veas: salvación SAB o queda Asustada de ti. Puede volver a tirar al final de cada turno. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "chaos_bolt", n: "Rayo del Caos [XGE]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Ataque de conjuro a distancia: 2d8+1d6 de tipo aleatorio (d8 determina: ácido, rayo, fuego, frío, veneno, psíquico, trueno, fuerza). Si los dos d8 coinciden, salta a otro objetivo. Escala: +1d6/nivel.",
    damage: "2d8+1d6 tipo aleatorio (escala)", extra: null
  },
  {
    id: "charm_person", n: "Encantar Persona [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "1 hora",
    desc: "Un humanoide: salvación SAB (ventaja si está en combate contigo) o queda encantado. Te considera amigo. Al terminar, sabe que lo encantaste. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "chromatic_orb", n: "Orbe Cromático [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V, S, M (diamante 50 po)", duration: "Instantáneo",
    desc: "Esfera de 4 pulgadas. Ataque de conjuro a distancia. Elige tipo: ácido, frío, fuego, rayo, veneno o trueno: 3d8 de ese tipo. Escala: +1d8/nivel.",
    damage: "3d8 del tipo elegido (escala)", extra: null
  },
  {
    id: "color_spray", n: "Chorro de Colores [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 acción", range: "Personal (cono 15p)", components: "V, S, M (arena de colores)", duration: "1 turno",
    desc: "Cono de luz destellante. Ciega a criaturas con PG totales de 6d10 o menos (de menor a mayor PG). Escala: +2d10 PG afectados/nivel.",
    damage: null, extra: null
  },
  {
    id: "command", n: "Orden [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "1 turno",
    desc: "Una palabra de orden a 1 criatura visible. Salvación SAB o sigue la orden ese turno (acercarse, huir, tumbarse, dejar caer objeto, detenerse). Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "compelled_duel", n: "Duelo Obligado [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción adicional", range: "30 pies", components: "V", duration: "Conc. 1 min",
    desc: "Una criatura: salvación SAB o queda obligada a atacarte solo a ti. Desventaja si ataca a otros. Si te alejas más de 30 pies, puede repetir la salvación.",
    damage: null, extra: null
  },
  {
    id: "comprehend_languages", n: "Comprender Idiomas [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (hollín y sal)", duration: "1 hora",
    desc: "Entiendes el lenguaje literal de cualquier idioma hablado o escrito que escuches o leas. Para escritura necesitas 1 minuto por página.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "create_or_destroy_water", n: "Crear o Destruir Agua [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (agua/polvo de polvo seco)", duration: "Instantáneo",
    desc: "Crear: hasta 10 galones de agua limpia en contenedor o lluvia en 30 pies cúbicos. Destruir: evapora hasta 10 galones de agua en contenedor. Escala: +10 galones o +5 pies cúbicos/nivel.",
    damage: null, extra: null
  },
  {
    id: "cure_wounds", n: "Curar Heridas [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Criatura que tocas recupera 1d8 + mod. de lanzamiento PG. No tiene efecto en no-muertos ni constructos. Escala: +1d8/nivel.",
    damage: "Cura 1d8+mod (escala)", extra: null
  },
  {
    id: "detect_evil_and_good", n: "Detectar el Mal y el Bien [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Sabes si hay aberraciones, celestiales, elementales, feéricos, infernales o no-muertos a 30 pies. También lugares/objetos consagrados o profanados.",
    damage: null, extra: null
  },
  {
    id: "detect_magic", n: "Detectar Magia [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Percibes la magia en 30 pies. Puedes usar Acción para ver un aura tenue alrededor de objetos/criaturas mágicos y determinar su escuela.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "detect_poison_and_disease", n: "Detectar Veneno y Enfermedad [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (hoja de acebo)", duration: "Conc. 10 min",
    desc: "Detectas la presencia y localización de venenos, criaturas venenosas y enfermedades a 30 pies.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "disguise_self", n: "Disfrazarse [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 hora",
    desc: "Cambias tu aspecto: ropa, armadura, armas y demás. Puedes parecer hasta 1 pie más alto/bajo. No aguanta inspección táctil. Investigación vs. tu CD para descreer.",
    damage: null, extra: null
  },
  {
    id: "divine_favor", n: "Favor Divino [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Tus ataques con arma infligen +1d4 de daño radiante adicional.",
    damage: "+1d4 Radiante", extra: null
  },
  {
    id: "dissonant_whispers", n: "Susurros Disonantes [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Melodía disonante en la mente de 1 criatura. Salvación SAB o 3d6 psíquico y usa su reacción para huir lo máximo posible. Mitad de daño si tiene éxito, sin huir. Escala: +1d6/nivel.",
    damage: "3d6 Psíquico (escala)", extra: null
  },
  {
    id: "earth_tremor", n: "Temblor de Tierra [XGE]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S", duration: "Instantáneo",
    desc: "Temblor en el suelo en 10 pies. Salvación DES o 1d6 contundente y tumbado. Si el suelo es tierra o piedra, se convierte en terreno difícil. Escala: +1d6/nivel.",
    damage: "1d6 Contundente (escala)", extra: null
  },
  {
    id: "entangle", n: "Enredar [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Hierbas y enredaderas en área de 20 pies cuadrados. Criaturas en el área: salvación FUE o Restringidas. Las restringidas pueden repetir la salvación al final de sus turnos.",
    damage: null, extra: null
  },
  {
    id: "expeditious_retreat", n: "Retirada Expeditiva [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Puedes usar Correr como Acción Adicional en cada turno mientras dure el conjuro.",
    damage: null, extra: null
  },
  {
    id: "faerie_fire", n: "Fuego de las Hadas [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Conc. 1 min",
    desc: "Todo en un cubo de 20 pies queda delineado en luz (azul, verde o violeta). Salvación DES o delineado: ataques contra la criatura tienen ventaja; no puede beneficiarse de invisibilidad.",
    damage: null, extra: null
  },
  {
    id: "false_life", n: "Vida Falsa [PHB]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "Personal", components: "V, S, M (alcohol)", duration: "1 hora",
    desc: "Ganas 1d4+4 PG temporales. Escala: +5 PG temporales/nivel.",
    damage: "1d4+4 PG temporales (escala)", extra: null
  },
  {
    id: "feather_fall", n: "Caída de Pluma [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 reacción", range: "60 pies", components: "V, M (pluma)", duration: "1 min",
    desc: "Reacción al caer. Hasta 5 criaturas caen a 60 pies/round sin daño. Al aterrizar están de pie.",
    damage: null, extra: null
  },
  {
    id: "find_familiar", n: "Encontrar Familiar [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 hora (ritual)", range: "10 pies", components: "V, S, M (carbón/incienso/hierbas 10 po)", duration: "Instantáneo",
    desc: "Invocas un familiar en forma de bestia Diminuta. Puede ser búho, cuervo, gato, rana, lagarto, rata, araña u otro. Actúa por sí solo, no ataca. Puedes ver/oír a través de él.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "fog_cloud", n: "Nube de Niebla [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "Esfera de niebla densa de 20 pies de radio. Bloquea la visión. El viento puede dispersarla. Escala: +20 pies de radio/nivel.",
    damage: null, extra: null
  },
  {
    id: "gift_of_alacrity", n: "Don de Celeridad [EGW]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 minuto", range: "Toque", components: "V, S", duration: "8 horas",
    desc: "Criatura voluntaria que toques añade 1d8 a su tirada de Iniciativa durante la duración.",
    damage: null, extra: null
  },
  {
    id: "goodberry", n: "Baya Curativa [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (ramita de muérdago)", duration: "Instantáneo",
    desc: "Creas hasta 10 bayas mágicas. Comer 1 baya: cura 1 PG y proporciona sustento para 1 día. Duran 24 horas.",
    damage: "Cura 1 PG/baya", extra: null
  },
  {
    id: "grease", n: "Grasa [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (grasa de cerdo)", duration: "1 min",
    desc: "Área resbaladiza de 10 pies cuadrados. Criaturas en el área al inicio: salvación DES o tumbadas. Entrar o moverse: salvación DES o tumbadas.",
    damage: null, extra: null
  },
  {
    id: "guiding_bolt", n: "Rayo Guía [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "1 turno",
    desc: "Ataque de conjuro a distancia: 4d6 radiante. El próximo ataque contra el objetivo tiene ventaja (la luz mística lo rodea). Escala: +1d6/nivel.",
    damage: "4d6 Radiante (escala)", extra: null
  },
  {
    id: "healing_word", n: "Palabra Curativa [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Criatura visible recupera 1d4 + mod. de lanzamiento PG. Escala: +1d4/nivel.",
    damage: "Cura 1d4+mod (escala)", extra: null
  },
  {
    id: "hellish_rebuke", n: "Represalia Infernal [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 reacción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Reacción cuando eres dañado. Criatura que te dañó: salvación DES o 2d10 fuego, la mitad si tiene éxito. Escala: +1d10/nivel.",
    damage: "2d10 Fuego (escala)", extra: null
  },
  {
    id: "heroism", n: "Heroísmo [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
    desc: "Criatura voluntaria es inmune al miedo y gana PG temporales = tu mod. de lanzamiento al inicio de cada turno. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "hex", n: "Maldición [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción adicional", range: "90 pies", components: "V, S, M (ojo de tritón petrificado)", duration: "Conc. 1 hora",
    desc: "Maldices a un objetivo: tus ataques le infligen +1d6 necrótico adicional. Elige una estadística: desventaja en tiradas con ella. Si muere, puedes transferir la maldición. Escala: duración hasta 8h (Nv.3), 24h (Nv.5).",
    damage: "+1d6 Necrótico", extra: null
  },
  {
    id: "hunter_mark", n: "Marca del Cazador [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción adicional", range: "90 pies", components: "V", duration: "Conc. 1 hora",
    desc: "Marcas a una criatura. Tus ataques contra ella infligen +1d6 adicional. Ventaja en Percepción y Supervivencia para rastrearla. Si muere, puedes mover la marca. Escala: duración hasta 8h (Nv.3), 24h (Nv.5).",
    damage: "+1d6 (escala duración)", extra: null
  },
  {
    id: "ice_knife", n: "Cuchillo de Hielo [XGE]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "S, M (gota de agua/hielo)", duration: "Instantáneo",
    desc: "Proyectil de hielo. Ataque de conjuro a distancia: 1d10 perforante. Luego explota: salvación DES todas en 5 pies o 2d6 frío, mitad si tiene éxito. Escala: +1d6 frío/nivel.",
    damage: "1d10 Perforante + 2d6 Frío (escala)", extra: null
  },
  {
    id: "identify", n: "Identificar [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 minuto (ritual)", range: "Toque", components: "V, S, M (perla 100 po + pluma de búho)", duration: "Instantáneo",
    desc: "Conoces las propiedades de un objeto mágico tocado, los conjuros activos sobre él, o los conjuros activos sobre una criatura.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "illusory_script", n: "Escritura Ilusoria [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 minuto (ritual)", range: "Toque", components: "S, M (tinta 10 po)", duration: "10 días",
    desc: "Escribes un mensaje visible solo para los destinatarios que designes. Otros ven garabatos o un mensaje diferente.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "inflict_wounds", n: "Causar Heridas [PHB]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Ataque de conjuro cuerpo a cuerpo: 3d10 necrótico. Escala: +1d10/nivel.",
    damage: "3d10 Necrótico (escala)", extra: null
  },
  {
    id: "jump", n: "Salto [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (pata de saltamontes)", duration: "1 min",
    desc: "Distancia de salto de la criatura se triplica. Escala: +1 criatura/nivel adicional (PHB24).",
    damage: null, extra: null
  },
  {
    id: "longstrider", n: "Paso Largo [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (pizca de tierra)", duration: "1 hora",
    desc: "Velocidad de la criatura tocada aumenta en 10 pies. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "mage_armor", n: "Armadura de Mago [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (cuero curtido)", duration: "8 horas",
    desc: "CA del objetivo = 13 + DES si no lleva armadura.",
    damage: null, extra: null
  },
  {
    id: "magic_missile", n: "Misil Mágico [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Creas 3 dardos de fuerza que impactan automáticamente. Cada uno: 1d4+1 de fuerza. Pueden apuntar al mismo o a distintos objetivos. Escala: +1 dardo/nivel.",
    damage: "3 × (1d4+1) Fuerza (escala)", extra: null
  },
  {
    id: "magnify_gravity", n: "Magnificar la Gravedad [EGW]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "1 turno",
    desc: "La gravedad en una esfera de 10 pies se intensifica. Salvación CON o 2d8 de fuerza y velocidad reducida a la mitad. Objetos en el área caen al suelo. Escala: +1d8/nivel.",
    damage: "2d8 Fuerza (escala)", extra: null
  },
  {
    id: "protection_from_evil", n: "Protección contra el Mal y el Bien [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (agua bendita/polvo de plata)", duration: "Conc. 10 min",
    desc: "Un tipo de criatura (aberraciones, celestiales, elementales, feéricos, infernales, no-muertos) tiene desventaja en ataques contra el objetivo. No puede poseer, encantar o asustar al objetivo.",
    damage: null, extra: null
  },
  {
    id: "purify_food_and_drink", n: "Purificar Comida y Bebida [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción (ritual)", range: "10 pies", components: "V, S", duration: "Instantáneo",
    desc: "Toda comida y bebida no mágica en una esfera de 5 pies queda purificada de venenos y enfermedades.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "ray_of_sickness", n: "Rayo de Enfermedad [PHB]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Rayo verdoso. Ataque de conjuro a distancia: 2d8 veneno. Si impacta: salvación CON o queda Envenenada hasta tu siguiente turno. Escala: +1d8/nivel.",
    damage: "2d8 Veneno (escala)", extra: null
  },
  {
    id: "sanctuary", n: "Santuario [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción adicional", range: "30 pies", components: "V, S, M (espejo pequeño)", duration: "1 min",
    desc: "Proteges a una criatura. Quienes la ataquen: salvación SAB o deben elegir otro objetivo. Si el protegido ataca, el efecto termina.",
    damage: null, extra: null
  },
  {
    id: "searing_smite", n: "Golpe Abrasador [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "El próximo impacto con arma: +1d6 fuego y el objetivo se prende fuego (1d6 fuego al inicio de su turno; CON para apagarse). Escala: +1d6 fuego inicial/nivel.",
    damage: "1d6 Fuego + 1d6/turno (escala)", extra: null
  },
  {
    id: "shield", n: "Escudo [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 reacción", range: "Personal", components: "V, S", duration: "1 turno",
    desc: "Reacción al ser golpeado o ser objetivo de Misil Mágico. +5 CA hasta el inicio de tu siguiente turno (puede convertir el golpe en fallo). Inmune a Misil Mágico.",
    damage: null, extra: null
  },
  {
    id: "shield_of_faith", n: "Escudo de la Fe [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción adicional", range: "60 pies", components: "V, S, M (pergamino con texto sagrado)", duration: "Conc. 10 min",
    desc: "+2 CA a una criatura visible.",
    damage: null, extra: null
  },
  {
    id: "silent_image", n: "Imagen Silenciosa [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 acción", range: "60 pies", components: "V, S, M (trozo de lana)", duration: "Conc. 10 min",
    desc: "Imagen ilusoria de objeto, criatura o fenómeno en cubo de 15 pies. Sin sonido. Investigación vs. tu CD para descreer. Puedes moverla 60 pies como Acción.",
    damage: null, extra: null
  },
  {
    id: "sleep", n: "Dormir [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "90 pies", components: "V, S, M (arena fina/pétalos/grillo)", duration: "1 min",
    desc: "Duerme a criaturas con menos PG totales. Pool de 5d8 PG; la criatura con menos PG duerme primero. No afecta a no-muertos o seres inmunes al encantamiento. Escala: +2d8/nivel.",
    damage: "Pool de 5d8 PG (escala)", extra: null
  },
  {
    id: "snare", n: "Trampa [XGE]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 minuto", range: "Toque", components: "S, M (cuerda 25 po)", duration: "8 horas",
    desc: "Creas una trampa invisible en el suelo de 5 pies. Criatura Mediana o menor que entre: salvación DES o queda suspendida boca abajo (Restringida) a 3 pies del suelo.",
    damage: null, extra: null
  },
  {
    id: "speak_with_animals", n: "Hablar con Animales [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "10 min",
    desc: "Puedes comprender y comunicarte verbalmente con bestias. Pueden darte información de eventos cercanos recientes.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "tashas_caustic_brew", n: "Brebaje Cáustico de Tasha [TCE]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 30p)", components: "V, S, M (bolita de barro)", duration: "Conc. 1 min",
    desc: "Línea de ácido de 30×5 pies. Salvación DES o cubierta de ácido: 2d4 ácido al inicio de cada turno hasta que use Acción para limpiarse. Escala: +2d4/nivel.",
    damage: "2d4 Ácido/turno (escala)", extra: null
  },
  {
    id: "tashas_hideous_laughter", n: "Risa Horrible de Tasha [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (platillo y pluma de pata de ganso)", duration: "Conc. 1 min",
    desc: "Una criatura cae en carcajadas. Salvación SAB o tumbada e Incapacitada. Repite al final de cada turno y tras recibir daño (ventaja). No afecta a seres de INT 4 o menos.",
    damage: null, extra: null
  },
  {
    id: "thunderous_smite", n: "Golpe Colérico [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Próximo impacto con arma: +2d6 trueno y salvación FUE o empujado 10 pies y tumbado. El golpe es audible a 300 pies.",
    damage: "+2d6 Trueno", extra: null
  },
  {
    id: "thunderwave", n: "Onda de Trueno [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cubo 15p)", components: "V, S", duration: "Instantáneo",
    desc: "Cubo de 15 pies. Salvación CON o 2d8 trueno y empujado 10 pies. Mitad de daño si tiene éxito, sin empujar. Objetos no asegurados se lanzan. Audible a 300 pies. Escala: +1d8/nivel.",
    damage: "2d8 Trueno (escala)", extra: null
  },
  {
    id: "unseen_servant", n: "Sirviente Invisible [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción (ritual)", range: "60 pies", components: "V, S, M (cuerda/madera/hilo)", duration: "1 hora",
    desc: "Creas una fuerza invisible que puede realizar tareas simples (abrir puertas, doblar ropa, servir la cena). No puede atacar ni cargar más de 10 libras.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "witch_bolt", n: "Rayo de Bruja [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (ramita de árbol alcanzado por rayo)", duration: "Conc. 1 min",
    desc: "Ataque de conjuro a distancia: 1d12 rayo. Mientras el conjuro dure y mantengas concentración, puedes usar Acción para infligir 1d12 rayo automáticamente. Escala: +1d12 inicial/nivel.",
    damage: "1d12 Rayo/turno (escala)", extra: null
  },
  {
    id: "wrathful_smite", n: "Golpe Colérico Divino [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Próximo impacto con arma: +1d6 psíquico. Salvación SAB o queda Asustada de ti. Puede repetir la salvación al final de sus turnos.",
    damage: "+1d6 Psíquico", extra: null
  },
];
