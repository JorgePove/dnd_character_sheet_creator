/* ══════════════════════════════════════════════════════════
   hechizos-nivel-1.js — Conjuros de Nivel 1 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · SCAG · EGW · FTD · SCC · IDRotF
   Nombres en inglés oficial · Descripciones en español
   Orden alfabético en inglés
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_1 = [
  {
    id: "absorb_elements", n: "Absorb Elements [XGE]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 reacción", range: "Personal", components: "S", duration: "1 turno",
    desc: "Reacción al recibir daño de ácido, frío, fuego, rayo o trueno: resistencia a ese tipo hasta el inicio de tu siguiente turno, y el próximo ataque cuerpo a cuerpo añade 1d6 de ese tipo (escala +1d6/nivel).",
    damage: "1d6 del tipo absorbido (escala)", extra: null
  },
  {
    id: "alarm", n: "Alarm [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 minuto (ritual)", range: "30 pies", components: "V, S, M (campanita)", duration: "8 horas",
    desc: "Proteges un área de 20 pies cúbicos. Cuando una criatura Diminuta o mayor entre, suena una alarma mental o audible. Puedes designar criaturas que no la activen.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "animal_friendship", n: "Animal Friendship [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (comida)", duration: "24 horas",
    desc: "Convences a una bestia de INT 3 o menos de que eres su amiga. Salvación SAB o queda encantada. Escala: +1 bestia/nivel.",
    damage: null, extra: null
  },
  {
    id: "armor_of_agathys", n: "Armor of Agathys [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S, M (copa de agua)", duration: "1 hora",
    desc: "Ganas 5 PG temporales. Mientras los tengas, quienes te golpeen en cuerpo a cuerpo reciben 5 de frío. Escala: +5 PG temp y +5 frío/nivel.",
    damage: "5 Frío por golpe (escala)", extra: null
  },
  {
    id: "arms_of_hadar", n: "Arms of Hadar [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S", duration: "Instantáneo",
    desc: "Tentáculos de oscuridad en 10 pies. Salvación FUE o 2d6 necrótico y no puede usar reacciones hasta su siguiente turno. Escala: +1d6/nivel.",
    damage: "2d6 Necrótico (escala)", extra: null
  },
  {
    id: "bane", n: "Bane [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (gota de sangre)", duration: "Conc. 1 min",
    desc: "Hasta 3 criaturas: salvación CAR o restan 1d4 a tiradas de ataque y salvación. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "beast_bond", n: "Beast Bond [XGE]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción", range: "Toque", components: "V, S, M (trozo de piel de la bestia)", duration: "Conc. 10 min",
    desc: "Estableces un vínculo telepático con una bestia que puedas tocar y que sea amistosa contigo. La bestia debe tener INT de 3 o menos. Mientras dure el conjuro, puedes comunicarte con la bestia telepáticamente, y la bestia obtiene ventaja en sus ataques contra criaturas que puedas ver dentro de 5 pies.",
    damage: null, extra: null
  },
  {
    id: "bless", n: "Bless [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (agua bendita)", duration: "Conc. 1 min",
    desc: "Hasta 3 criaturas añaden 1d4 a tiradas de ataque y salvación. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "burning_hands", n: "Burning Hands [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cono 15p)", components: "V, S", duration: "Instantáneo",
    desc: "Cono de llamas de 15 pies. Salvación DES o 3d6 fuego, la mitad si tiene éxito. Objetos inflamables se incendian. Escala: +1d6/nivel.",
    damage: "3d6 Fuego (escala)", extra: null
  },
  {
    id: "catapult", n: "Catapult [XGE]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "S", duration: "Instantáneo",
    desc: "Lanzas un objeto de 1-5 libras hasta 90 pies en línea recta. Si golpea a una criatura: ataque de conjuro, 3d8 contundente. Escala: +1d8/nivel.",
    damage: "3d8 Contundente (escala)", extra: null
  },
  {
    id: "cause_fear", n: "Cause Fear [XGE]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Conc. 1 min",
    desc: "Una criatura que veas: salvación SAB o queda Asustada de ti. Puede volver a tirar al final de cada turno. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "ceremony", n: "Ceremony [XGE]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 hora (ritual)", range: "Toque", components: "V, S, M (agua bendita 25 po)", duration: "Instantáneo",
    desc: "Realizas uno de varios ritos sagrados tocando a una criatura voluntaria: Veneración al Amanecer (clérigo/paladín: añade 1d4 a una salvación el día siguiente), Inicio a la Fe (criatura no dedicada: gana 1d4 PG temporales), Inicio a la Madurez (humanoide joven: Ventaja en tiradas de habilidad durante 24h), Bendición de Boda (marido y mujer: +2 CA mientras estén a 30 pies entre sí durante 7 días), Últimas Ritos (muerto: no puede levantarse como no-muerto a menos que sea resucitado).",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "chaos_bolt", n: "Chaos Bolt [XGE]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Ataque de conjuro a distancia: 2d8+1d6 de tipo aleatorio (d8 determina: ácido, rayo, fuego, frío, veneno, psíquico, trueno, fuerza). Si los dos d8 coinciden, salta a otro objetivo. Escala: +1d6/nivel.",
    damage: "2d8+1d6 tipo aleatorio (escala)", extra: null
  },
  {
    id: "charm_person", n: "Charm Person [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "1 hora",
    desc: "Un humanoide: salvación SAB (ventaja si está en combate contigo) o queda encantado. Te considera amigo. Al terminar, sabe que lo encantaste. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "chromatic_orb", n: "Chromatic Orb [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V, S, M (diamante 50 po)", duration: "Instantáneo",
    desc: "Esfera de 4 pulgadas. Ataque de conjuro a distancia. Elige tipo: ácido, frío, fuego, rayo, veneno o trueno: 3d8 de ese tipo. Escala: +1d8/nivel.",
    damage: "3d8 del tipo elegido (escala)", extra: null
  },
  {
    id: "color_spray", n: "Color Spray [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 acción", range: "Personal (cono 15p)", components: "V, S, M (arena de colores)", duration: "1 turno",
    desc: "Cono de luz destellante. Ciega a criaturas con PG totales de 6d10 o menos (de menor a mayor PG). Escala: +2d10 PG afectados/nivel.",
    damage: null, extra: null
  },
  {
    id: "command", n: "Command [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "1 turno",
    desc: "Una palabra de orden a 1 criatura visible. Salvación SAB o sigue la orden ese turno (acercarse, huir, tumbarse, dejar caer objeto, detenerse). Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "compelled_duel", n: "Compelled Duel [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción adicional", range: "30 pies", components: "V", duration: "Conc. 1 min",
    desc: "Una criatura: salvación SAB o queda obligada a atacarte solo a ti. Desventaja si ataca a otros. Si te alejas más de 30 pies, puede repetir la salvación.",
    damage: null, extra: null
  },
  {
    id: "comprehend_languages", n: "Comprehend Languages [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (hollín y sal)", duration: "1 hora",
    desc: "Entiendes el lenguaje literal de cualquier idioma hablado o escrito que escuches o leas. Para escritura necesitas 1 minuto por página.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "create_or_destroy_water", n: "Create or Destroy Water [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (agua/polvo de polvo seco)", duration: "Instantáneo",
    desc: "Crear: hasta 10 galones de agua limpia en contenedor o lluvia en 30 pies cúbicos. Destruir: evapora hasta 10 galones de agua en contenedor. Escala: +10 galones o +5 pies cúbicos/nivel.",
    damage: null, extra: null
  },
  {
    id: "cure_wounds", n: "Cure Wounds [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Criatura que tocas recupera 1d8 + mod. de lanzamiento PG. No tiene efecto en no-muertos ni constructos. Escala: +1d8/nivel.",
    damage: "Cura 1d8+mod (escala)", extra: null
  },
  {
    id: "detect_evil_and_good", n: "Detect Evil and Good [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Sabes si hay aberraciones, celestiales, elementales, feéricos, infernales o no-muertos a 30 pies. También lugares/objetos consagrados o profanados.",
    damage: null, extra: null
  },
  {
    id: "detect_magic", n: "Detect Magic [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Percibes la magia en 30 pies. Puedes usar Acción para ver un aura tenue alrededor de objetos/criaturas mágicos y determinar su escuela.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "detect_poison_and_disease", n: "Detect Poison and Disease [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (hoja de acebo)", duration: "Conc. 10 min",
    desc: "Detectas la presencia y localización de venenos, criaturas venenosas y enfermedades a 30 pies.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "disguise_self", n: "Disguise Self [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 hora",
    desc: "Cambias tu aspecto: ropa, armadura, armas y demás. Puedes parecer hasta 1 pie más alto/bajo. No aguanta inspección táctil. Investigación vs. tu CD para descreer.",
    damage: null, extra: null
  },
  {
    id: "dissonant_whispers", n: "Dissonant Whispers [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Melodía disonante en la mente de 1 criatura. Salvación SAB o 3d6 psíquico y usa su reacción para huir lo máximo posible. Mitad de daño si tiene éxito, sin huir. Escala: +1d6/nivel.",
    damage: "3d6 Psíquico (escala)", extra: null
  },
  {
    id: "divine_favor", n: "Divine Favor [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Tus ataques con arma infligen +1d4 de daño radiante adicional.",
    damage: "+1d4 Radiante", extra: null
  },
  {
    id: "earth_tremor", n: "Earth Tremor [XGE]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S", duration: "Instantáneo",
    desc: "Temblor en el suelo en 10 pies. Salvación DES o 1d6 contundente y tumbado. Si el suelo es tierra o piedra, se convierte en terreno difícil. Escala: +1d6/nivel.",
    damage: "1d6 Contundente (escala)", extra: null
  },
  {
    id: "entangle", n: "Entangle [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Hierbas y enredaderas en área de 20 pies cuadrados. Criaturas en el área: salvación FUE o Restringidas. Las restringidas pueden repetir la salvación al final de sus turnos.",
    damage: null, extra: null
  },
  {
    id: "ensnaring_strike", n: "Ensnaring Strike [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "El próximo impacto con arma: zarcillos mágicos apresan al objetivo. Salvación FUE o queda Restringido. Mientras esté Restringido: 1d6 perforante al inicio de su turno. Una criatura puede usar su Acción para intentar liberarse (FUE vs. tu CD). Escala: +1d6/nivel.",
    damage: "1d6 Perforante/turno (escala)", extra: null
  },
  {
    id: "expeditious_retreat", n: "Expeditious Retreat [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Puedes usar Correr como Acción Adicional en cada turno mientras dure el conjuro.",
    damage: null, extra: null
  },
  {
    id: "faerie_fire", n: "Faerie Fire [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Conc. 1 min",
    desc: "Todo en un cubo de 20 pies queda delineado en luz (azul, verde o violeta). Salvación DES o delineado: ataques contra la criatura tienen ventaja; no puede beneficiarse de invisibilidad.",
    damage: null, extra: null
  },
  {
    id: "false_life", n: "False Life [PHB]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "Personal", components: "V, S, M (alcohol)", duration: "1 hora",
    desc: "Ganas 1d4+4 PG temporales. Escala: +5 PG temporales/nivel.",
    damage: "1d4+4 PG temporales (escala)", extra: null
  },
  {
    id: "feather_fall", n: "Feather Fall [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 reacción", range: "60 pies", components: "V, M (pluma)", duration: "1 min",
    desc: "Reacción al caer. Hasta 5 criaturas caen a 60 pies/round sin daño. Al aterrizar están de pie.",
    damage: null, extra: null
  },
  {
    id: "find_familiar", n: "Find Familiar [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 hora (ritual)", range: "10 pies", components: "V, S, M (carbón/incienso/hierbas 10 po)", duration: "Instantáneo",
    desc: "Invocas un familiar en forma de bestia Diminuta. Puede ser búho, cuervo, gato, rana, lagarto, rata, araña u otro. Actúa por sí solo, no ataca. Puedes ver/oír a través de él.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "fog_cloud", n: "Fog Cloud [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "Esfera de niebla densa de 20 pies de radio. Bloquea la visión. El viento puede dispersarla. Escala: +20 pies de radio/nivel.",
    damage: null, extra: null
  },
  {
    id: "frost_fingers", n: "Frost Fingers [IDRotF]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cono 15p)", components: "V, S", duration: "Instantáneo",
    desc: "Un cono helado de 15 pies surge de tus manos extendidas. Salvación CON o 2d8 frío, mitad si tiene éxito. El agua no mágica en el área se congela sólida si tiene 1 pie de profundidad o menos. Escala: +1d8/nivel.",
    damage: "2d8 Frío (escala)", extra: null
  },
  {
    id: "gift_of_alacrity", n: "Gift of Alacrity [EGW]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 minuto", range: "Toque", components: "V, S", duration: "8 horas",
    desc: "Criatura voluntaria que toques añade 1d8 a su tirada de Iniciativa durante la duración.",
    damage: null, extra: null
  },
  {
    id: "goodberry", n: "Goodberry [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (ramita de muérdago)", duration: "Instantáneo",
    desc: "Creas hasta 10 bayas mágicas. Comer 1 baya: cura 1 PG y proporciona sustento para 1 día. Duran 24 horas.",
    damage: "Cura 1 PG/baya", extra: null
  },
  {
    id: "grease", n: "Grease [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (grasa de cerdo)", duration: "1 min",
    desc: "Área resbaladiza de 10 pies cuadrados. Criaturas en el área al inicio: salvación DES o tumbadas. Entrar o moverse: salvación DES o tumbadas.",
    damage: null, extra: null
  },
  {
    id: "guiding_bolt", n: "Guiding Bolt [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "1 turno",
    desc: "Ataque de conjuro a distancia: 4d6 radiante. El próximo ataque contra el objetivo tiene ventaja (la luz mística lo rodea). Escala: +1d6/nivel.",
    damage: "4d6 Radiante (escala)", extra: null
  },
  {
    id: "hail_of_thorns", n: "Hail of Thorns [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "El próximo impacto a distancia con arma: una lluvia de espinas brota del proyectil. El objetivo y todas las criaturas a 5 pies de él: salvación DES o 1d10 perforante, mitad si tiene éxito. Escala: +1d10/nivel.",
    damage: "1d10 Perforante (escala)", extra: null
  },
  {
    id: "healing_word", n: "Healing Word [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Criatura visible recupera 1d4 + mod. de lanzamiento PG. Escala: +1d4/nivel.",
    damage: "Cura 1d4+mod (escala)", extra: null
  },
  {
    id: "hellish_rebuke", n: "Hellish Rebuke [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 reacción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Reacción cuando eres dañado. Criatura que te dañó: salvación DES o 2d10 fuego, la mitad si tiene éxito. Escala: +1d10/nivel.",
    damage: "2d10 Fuego (escala)", extra: null
  },
  {
    id: "heroism", n: "Heroism [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
    desc: "Criatura voluntaria es inmune al miedo y gana PG temporales = tu mod. de lanzamiento al inicio de cada turno. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "hex", n: "Hex [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción adicional", range: "90 pies", components: "V, S, M (ojo de tritón petrificado)", duration: "Conc. 1 hora",
    desc: "Maldices a un objetivo: tus ataques le infligen +1d6 necrótico adicional. Elige una estadística: desventaja en tiradas con ella. Si muere, puedes transferir la maldición. Escala: duración hasta 8h (Nv.3), 24h (Nv.5).",
    damage: "+1d6 Necrótico", extra: null
  },
  {
    id: "hunter_mark", n: "Hunter's Mark [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción adicional", range: "90 pies", components: "V", duration: "Conc. 1 hora",
    desc: "Marcas a una criatura. Tus ataques contra ella infligen +1d6 adicional. Ventaja en Percepción y Supervivencia para rastrearla. Si muere, puedes mover la marca. Escala: duración hasta 8h (Nv.3), 24h (Nv.5).",
    damage: "+1d6 (escala duración)", extra: null
  },
  {
    id: "ice_knife", n: "Ice Knife [XGE]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "S, M (gota de agua/hielo)", duration: "Instantáneo",
    desc: "Proyectil de hielo. Ataque de conjuro a distancia: 1d10 perforante. Luego explota: salvación DES todas en 5 pies o 2d6 frío, mitad si tiene éxito. Escala: +1d6 frío/nivel.",
    damage: "1d10 Perforante + 2d6 Frío (escala)", extra: null
  },
  {
    id: "identify", n: "Identify [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 minuto (ritual)", range: "Toque", components: "V, S, M (perla 100 po + pluma de búho)", duration: "Instantáneo",
    desc: "Conoces las propiedades de un objeto mágico tocado, los conjuros activos sobre él, o los conjuros activos sobre una criatura.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "illusory_script", n: "Illusory Script [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 minuto (ritual)", range: "Toque", components: "S, M (tinta 10 po)", duration: "10 días",
    desc: "Escribes un mensaje visible solo para los destinatarios que designes. Otros ven garabatos o un mensaje diferente.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "inflict_wounds", n: "Inflict Wounds [PHB]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Ataque de conjuro cuerpo a cuerpo: 3d10 necrótico. Escala: +1d10/nivel.",
    damage: "3d10 Necrótico (escala)", extra: null
  },
  {
    id: "jump", n: "Jump [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (pata de saltamontes)", duration: "1 min",
    desc: "Distancia de salto de la criatura se triplica. Escala: +1 criatura/nivel adicional (PHB24).",
    damage: null, extra: null
  },
  {
    id: "longstrider", n: "Longstrider [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (pizca de tierra)", duration: "1 hora",
    desc: "Velocidad de la criatura tocada aumenta en 10 pies. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "mage_armor", n: "Mage Armor [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (cuero curtido)", duration: "8 horas",
    desc: "CA del objetivo = 13 + DES si no lleva armadura.",
    damage: null, extra: null
  },
  {
    id: "magic_missile", n: "Magic Missile [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Creas 3 dardos de fuerza que impactan automáticamente. Cada uno: 1d4+1 de fuerza. Pueden apuntar al mismo o a distintos objetivos. Escala: +1 dardo/nivel.",
    damage: "3 × (1d4+1) Fuerza (escala)", extra: null
  },
  {
    id: "magnify_gravity", n: "Magnify Gravity [EGW]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "1 turno",
    desc: "La gravedad en una esfera de 10 pies se intensifica. Salvación CON o 2d8 de fuerza y velocidad reducida a la mitad. Objetos en el área caen al suelo. Escala: +1d8/nivel.",
    damage: "2d8 Fuerza (escala)", extra: null
  },
  {
    id: "protection_from_evil", n: "Protection from Evil and Good [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (agua bendita/polvo de plata)", duration: "Conc. 10 min",
    desc: "Un tipo de criatura (aberraciones, celestiales, elementales, feéricos, infernales, no-muertos) tiene desventaja en ataques contra el objetivo. No puede poseer, encantar o asustar al objetivo.",
    damage: null, extra: null
  },
  {
    id: "purify_food_and_drink", n: "Purify Food and Drink [PHB]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción (ritual)", range: "10 pies", components: "V, S", duration: "Instantáneo",
    desc: "Toda comida y bebida no mágica en una esfera de 5 pies queda purificada de venenos y enfermedades.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "ray_of_sickness", n: "Ray of Sickness [PHB]",
    nivel: "Nivel 1", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Rayo verdoso. Ataque de conjuro a distancia: 2d8 veneno. Si impacta: salvación CON o queda Envenenada hasta tu siguiente turno. Escala: +1d8/nivel.",
    damage: "2d8 Veneno (escala)", extra: null
  },
  {
    id: "sanctuary", n: "Sanctuary [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción adicional", range: "30 pies", components: "V, S, M (espejo pequeño)", duration: "1 min",
    desc: "Proteges a una criatura. Quienes la ataquen: salvación SAB o deben elegir otro objetivo. Si el protegido ataca, el efecto termina.",
    damage: null, extra: null
  },
  {
    id: "searing_smite", n: "Searing Smite [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "El próximo impacto con arma: +1d6 fuego y el objetivo se prende fuego (1d6 fuego al inicio de su turno; CON para apagarse). Escala: +1d6 fuego inicial/nivel.",
    damage: "1d6 Fuego + 1d6/turno (escala)", extra: null
  },
  {
    id: "shield", n: "Shield [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 reacción", range: "Personal", components: "V, S", duration: "1 turno",
    desc: "Reacción al ser golpeado o ser objetivo de Misil Mágico. +5 CA hasta el inicio de tu siguiente turno (puede convertir el golpe en fallo). Inmune a Misil Mágico.",
    damage: null, extra: null
  },
  {
    id: "shield_of_faith", n: "Shield of Faith [PHB]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 acción adicional", range: "60 pies", components: "V, S, M (pergamino con texto sagrado)", duration: "Conc. 10 min",
    desc: "+2 CA a una criatura visible.",
    damage: null, extra: null
  },
  {
    id: "silent_image", n: "Silent Image [PHB]",
    nivel: "Nivel 1", escuela: "Ilusión",
    casting: "1 acción", range: "60 pies", components: "V, S, M (trozo de lana)", duration: "Conc. 10 min",
    desc: "Imagen ilusoria de objeto, criatura o fenómeno en cubo de 15 pies. Sin sonido. Investigación vs. tu CD para descreer. Puedes moverla 60 pies como Acción.",
    damage: null, extra: null
  },
  {
    id: "silvery_barbs", n: "Silvery Barbs [SCC]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 reacción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Reacción cuando una criatura visible a 60 pies tiene éxito en una tirada de ataque, de habilidad o salvación: la criatura debe volver a tirar el d20 y usar el resultado más bajo. Luego elige una criatura diferente que puedas ver en rango (puedes elegirte a ti mismo): esa criatura tiene ventaja en la próxima tirada de ataque, de habilidad o salvación que haga en el siguiente minuto. Una criatura solo puede beneficiarse de esta ventaja una vez a la vez.",
    damage: null, extra: null
  },
  {
    id: "sleep", n: "Sleep [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "90 pies", components: "V, S, M (arena fina/pétalos/grillo)", duration: "1 min",
    desc: "Duerme a criaturas con menos PG totales. Pool de 5d8 PG; la criatura con menos PG duerme primero. No afecta a no-muertos o seres inmunes al encantamiento. Escala: +2d8/nivel.",
    damage: "Pool de 5d8 PG (escala)", extra: null
  },
  {
    id: "snare", n: "Snare [XGE]",
    nivel: "Nivel 1", escuela: "Abjuración",
    casting: "1 minuto", range: "Toque", components: "S, M (cuerda 25 po)", duration: "8 horas",
    desc: "Creas una trampa invisible en el suelo de 5 pies. Criatura Mediana o menor que entre: salvación DES o queda suspendida boca abajo (Restringida) a 3 pies del suelo.",
    damage: null, extra: null
  },
  {
    id: "speak_with_animals", n: "Speak with Animals [PHB]",
    nivel: "Nivel 1", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "10 min",
    desc: "Puedes comprender y comunicarte verbalmente con bestias. Pueden darte información de eventos cercanos recientes.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "sudden_awakening", n: "Sudden Awakening [EGW]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción adicional", range: "10 pies", components: "V", duration: "Instantáneo",
    desc: "Cada criatura dormida de tu elección en 10 pies se despierta inmediatamente, y cada una que estuviera Tumbada puede ponerse de pie usando su reacción.",
    damage: null, extra: null
  },
  {
    id: "tashas_caustic_brew", n: "Tasha's Caustic Brew [TCE]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 30p)", components: "V, S, M (bolita de barro)", duration: "Conc. 1 min",
    desc: "Línea de ácido de 30×5 pies. Salvación DES o cubierta de ácido: 2d4 ácido al inicio de cada turno hasta que use Acción para limpiarse. Escala: +2d4/nivel.",
    damage: "2d4 Ácido/turno (escala)", extra: null
  },
  {
    id: "tashas_hideous_laughter", n: "Tasha's Hideous Laughter [PHB]",
    nivel: "Nivel 1", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (platillo y pluma de pata de ganso)", duration: "Conc. 1 min",
    desc: "Una criatura cae en carcajadas. Salvación SAB o tumbada e Incapacitada. Repite al final de cada turno y tras recibir daño (ventaja). No afecta a seres de INT 4 o menos.",
    damage: null, extra: null
  },
  {
    id: "tensers_floating_disk", n: "Tenser's Floating Disk [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (gota de mercurio)", duration: "1 hora",
    desc: "Disco circular de fuerza de 3 pies de diámetro y 1 pulgada de grosor flotando a 3 pies del suelo. Puede cargar hasta 500 libras. Se mueve solo para seguirte a 20 pies o menos. Si te alejas más de 30 pies, el disco te sigue hasta quedar a 30 pies y espera.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "thunderous_smite", n: "Thunderous Smite [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Próximo impacto con arma: +2d6 trueno y salvación FUE o empujado 10 pies y tumbado. El golpe es audible a 300 pies.",
    damage: "+2d6 Trueno", extra: null
  },
  {
    id: "thunderwave", n: "Thunderwave [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cubo 15p)", components: "V, S", duration: "Instantáneo",
    desc: "Cubo de 15 pies. Salvación CON o 2d8 trueno y empujado 10 pies. Mitad de daño si tiene éxito, sin empujar. Objetos no asegurados se lanzan. Audible a 300 pies. Escala: +1d8/nivel.",
    damage: "2d8 Trueno (escala)", extra: null
  },
  {
    id: "unseen_servant", n: "Unseen Servant [PHB]",
    nivel: "Nivel 1", escuela: "Conjuración",
    casting: "1 acción (ritual)", range: "60 pies", components: "V, S, M (cuerda/madera/hilo)", duration: "1 hora",
    desc: "Creas una fuerza invisible que puede realizar tareas simples (abrir puertas, doblar ropa, servir la cena). No puede atacar ni cargar más de 10 libras.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "witch_bolt", n: "Witch Bolt [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (ramita de árbol alcanzado por rayo)", duration: "Conc. 1 min",
    desc: "Ataque de conjuro a distancia: 1d12 rayo. Mientras el conjuro dure y mantengas concentración, puedes usar Acción para infligir 1d12 rayo automáticamente. Escala: +1d12 inicial/nivel.",
    damage: "1d12 Rayo/turno (escala)", extra: null
  },
  {
    id: "wrathful_smite", n: "Wrathful Smite [PHB]",
    nivel: "Nivel 1", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Próximo impacto con arma: +1d6 psíquico. Salvación SAB o queda Asustada de ti. Puede repetir la salvación al final de sus turnos.",
    damage: "+1d6 Psíquico", extra: null
  },
  {
    id: "zephyr_strike", n: "Zephyr Strike [XGE]",
    nivel: "Nivel 1", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Te mueves como el viento. Hasta que el conjuro termine, tus movimientos no provocan ataques de oportunidad. Una vez antes de que el conjuro termine, puedes dar ventaja a un ataque con arma. Si ese ataque impacta: +1d8 de fuerza adicional y tu velocidad aumenta en 30 pies hasta el final de ese turno.",
    damage: "+1d8 Fuerza (al activar ventaja)", extra: null
  },
];
