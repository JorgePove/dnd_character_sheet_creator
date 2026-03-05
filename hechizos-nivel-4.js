/* ══════════════════════════════════════════════════════════
   hechizos-nivel-4.js — Conjuros de Nivel 4 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · GGtR · IDRotF
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_4 = [
  {
    id: "arcane_eye", n: "Ojo Arcano [PHB]",
    nivel: "Nivel 4", escuela: "Adivinación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (pelo de murciélago)", duration: "Conc. 1 hora",
    desc: "Creas un ojo mágico invisible que flota en el aire. Puedes ver a través de él (visión en la oscuridad 30 pies). Puedes moverlo 30 pies por turno. Puede pasar por huecos de 1 pulgada.",
    damage: null, extra: null
  },
  {
    id: "aura_of_life", n: "Aura de Vida [PHB]",
    nivel: "Nivel 4", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (30 pies)", components: "V", duration: "Conc. 10 min",
    desc: "Aura de 30 pies. Tú y aliados dentro: resistencia al daño necrótico e inmunidad a PG máximos reducidos. Aliados a 0 PG al inicio del turno recuperan 1 PG.",
    damage: null, extra: null
  },
  {
    id: "aura_of_purity", n: "Aura de Pureza [PHB]",
    nivel: "Nivel 4", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (30 pies)", components: "V", duration: "Conc. 10 min",
    desc: "Aura de 30 pies. Tú y aliados dentro: inmunes a enfermedad, resistencia al daño por veneno, ventaja en salvaciones contra: encanto, miedo, parálisis, veneno, aturdimiento.",
    damage: null, extra: null
  },
  {
    id: "banishment", n: "Destierro [PHB]",
    nivel: "Nivel 4", escuela: "Abjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (objeto repugnante para el objetivo)", duration: "Conc. 1 min",
    desc: "Una criatura: salvación CAR o desterrada. Si es de este plano: espacio semiplano ilusorio (regresa al terminar). Si es extraplanar: vuelve a su plano permanentemente si dura 1 minuto. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "blight", n: "Plaga [PHB]",
    nivel: "Nivel 4", escuela: "Nigromancia",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Drenas la vitalidad de una criatura. Salvación CON o 8d8 necrótico, mitad si tiene éxito. Las plantas no hacen salvación y reciben el daño máximo. Escala: +1d8/nivel.",
    damage: "8d8 Necrótico (escala)", extra: null
  },
  {
    id: "charm_monster", n: "Encantar Monstruo [XGE]",
    nivel: "Nivel 4", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "1 hora",
    desc: "Una criatura de cualquier tipo: salvación SAB (ventaja si estás en combate con ella) o queda encantada. Al terminar, sabe que fue encantada. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "compulsion", n: "Compulsión [PHB]",
    nivel: "Nivel 4", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Hasta criaturas que puedas ver a 30 pies: salvación SAB o deben moverse en la dirección que elijas al inicio de cada turno (sin entrar en zona obviamente peligrosa). Repite la salvación al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "confusion", n: "Confusión [PHB]",
    nivel: "Nivel 4", escuela: "Encantamiento",
    casting: "1 acción", range: "90 pies", components: "V, S, M (tres nueces de cascara)", duration: "Conc. 1 min",
    desc: "Esfera de 10 pies de radio. Criaturas: salvación SAB o confundidas. Cada turno tiran 1d10: vagan, atacan a quien sea, quedan aturdidas o actúan con normalidad. Repite al final de cada turno. Escala: +5 pies de radio/nivel.",
    damage: null, extra: null
  },
  {
    id: "conjure_minor_elementals", n: "Convocar Elementales Menores [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 minuto", range: "90 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "Convocas espíritus elementales: 1 CR≤2, 2 CR≤1, 4 CR≤1/2 u 8 CR≤1/4. Obedecen tus órdenes. Escala: duplicas la cantidad/2 niveles.",
    damage: null, extra: null
  },
  {
    id: "conjure_woodland_beings", n: "Convocar Seres del Bosque [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (una baya de acebo por criatura)", duration: "Conc. 1 hora",
    desc: "Convocas espíritus feéricos en forma de seres del bosque: 1 CR≤2, 2 CR≤1, 4 CR≤1/2 u 8 CR≤1/4. Escala: duplicas la cantidad/2 niveles.",
    damage: null, extra: null
  },
  {
    id: "control_water", n: "Controlar Agua [PHB]",
    nivel: "Nivel 4", escuela: "Transmutación",
    casting: "1 acción", range: "300 pies", components: "V, S, M (agua+polvo de tierra)", duration: "Conc. 10 min",
    desc: "Controlas el agua en cubo de 100 pies: Inundación (+20 pies nivel), Drenar (crea torbellino), Redirigir flujo, o Maelstrom (criaturas en el agua: FUE o 2d8 contundente y Restringidas).",
    damage: "2d8 Contundente (Maelstrom)", extra: null
  },
  {
    id: "death_ward", n: "Protección contra la Muerte [PHB]",
    nivel: "Nivel 4", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "8 horas",
    desc: "La primera vez que el objetivo caiga a 0 PG o sufra un efecto que lo mate instantáneamente, en su lugar cae a 1 PG y el conjuro termina.",
    damage: null, extra: null
  },
  {
    id: "dimension_door", n: "Puerta Dimensional [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "500 pies", components: "V", duration: "Instantáneo",
    desc: "Te teletransportas a cualquier lugar a 500 pies que puedas visualizar o describir. Puedes llevar a 1 criatura Mediana o menor contigo (voluntaria). Si el destino está ocupado: 4d6 de fuerza y no te mueves.",
    damage: null, extra: null
  },
  {
    id: "divination", n: "Adivinación [PHB]",
    nivel: "Nivel 4", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (incienso+ofrenda 25 po)", duration: "Instantáneo",
    desc: "Contactas a tu deidad o sus servidores. Haces una pregunta sobre un evento en los próximos 7 días. Recibes una respuesta verdadera y breve. Lanzamientos repetidos tienen chance creciente de respuesta aleatoria.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "dominate_beast", n: "Dominar Bestia [PHB]",
    nivel: "Nivel 4", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Una bestia: salvación SAB o queda bajo tu control telepático. Puedes darle órdenes como Acción Adicional. Repite la salvación cada vez que recibe daño. Escala: duración 10 min (Nv.5), 1 hora (Nv.6), 8 horas (Nv.7+).",
    damage: null, extra: null
  },
  {
    id: "elemental_bane", n: "Perdición Elemental [XGE]",
    nivel: "Nivel 4", escuela: "Transmutación",
    casting: "1 acción", range: "90 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Elige tipo de daño (ácido, frío, fuego, rayo o trueno). Una criatura: salvación CON o pierde resistencia a ese tipo y sufre 2d6 adicional de ese tipo cuando recibe daño. Escala: +1 criatura/2 niveles.",
    damage: "+2d6 del tipo elegido", extra: null
  },
  {
    id: "evards_black_tentacles", n: "Tentáculos Negros de Evard [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (tentáculo de pulpo)", duration: "Conc. 1 min",
    desc: "Tentáculos en área de 20 pies cuadrados. Criaturas en el área al inicio o al entrar: salvación DES o Restringidas y 3d6 contundente. Restringidas: 3d6 al inicio de cada turno. FUE/DES para escapar.",
    damage: "3d6 Contundente/turno", extra: null
  },
  {
    id: "fabricate", n: "Fabricar [PHB]",
    nivel: "Nivel 4", escuela: "Transmutación",
    casting: "10 minutos", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Conviertes materias primas en objetos manufacturados. Transformas hasta 10 pies cúbicos de material vegetal o 1 pie cúbico de mineral/metal. Requiere competencia con herramientas adecuadas.",
    damage: null, extra: null
  },
  {
    id: "faithful_hound", n: "Perro Fiel de Mordenkainen [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V, S, M (hueso de perro+campanita de plata)", duration: "8 horas",
    desc: "Perro espectral invisible en posición fija. Ladra si una criatura Pequeña o mayor se acerca a 30 pies sin que lo permitas. Ataca automáticamente: +5 a golpear, 4d8 perforante a criaturas a 5 pies.",
    damage: "4d8 Perforante", extra: null
  },
  {
    id: "fire_shield", n: "Escudo de Fuego [PHB]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción", range: "Personal", components: "V, S, M (fósforo o polvo de luciérnaga)", duration: "10 min",
    desc: "Llamas cálidas o frías te envuelven. Resistencia a frío (llamas cálidas) o a fuego (llamas frías). Quien te golpee en cuerpo a cuerpo: 2d8 fuego o frío.",
    damage: "2d8 Fuego o Frío al atacante", extra: null
  },
  {
    id: "freedom_of_movement", n: "Libertad de Movimiento [PHB]",
    nivel: "Nivel 4", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (cuerda de cuero)", duration: "1 hora",
    desc: "La criatura tocada ignora terreno difícil, y la magia no puede reducir su velocidad ni Paralizarla ni Restringirla. Puede usar 5 pies de movimiento para escapar de aferres y restricciones no mágicas.",
    damage: null, extra: null
  },
  {
    id: "giant_insect", n: "Insecto Gigante [PHB]",
    nivel: "Nivel 4", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Transforma hasta 10 ciempiés, 3 arañas, 5 avispas o 1 escorpión en versiones gigantes. Siguen tus órdenes de ataque.",
    damage: null, extra: null
  },
  {
    id: "grace_of_the_raven_queen", n: "Gracia de la Reina Cuervo [IDRotF]",
    nivel: "Nivel 4", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "1 minuto",
    desc: "Ganas velocidad de vuelo de 40 pies y resistencia al daño de frío durante 1 minuto.",
    damage: null, extra: null
  },
  {
    id: "gravity_sinkhole", n: "Agujero de Gravedad [EGW]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "120 pies", components: "V, S, M (esfera de hierro)", duration: "Instantáneo",
    desc: "Punto de gravedad intensa en esfera de 20 pies de radio. Salvación CON o 5d10 de fuerza y atraídas al centro. Mitad de daño y sin atracción si tienen éxito. Escala: +1d10/nivel.",
    damage: "5d10 Fuerza (escala)", extra: null
  },
  {
    id: "greater_invisibility", n: "Invisibilidad Mayor [PHB]",
    nivel: "Nivel 4", escuela: "Ilusión",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
    desc: "La criatura tocada se vuelve invisible. A diferencia de Invisibilidad, no termina si ataca o lanza conjuros.",
    damage: null, extra: null
  },
  {
    id: "guardian_of_faith", n: "Guardián de la Fe [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V", duration: "8 horas",
    desc: "Guardián espectral luminoso de 10 pies que flota en un espacio vacío. Criaturas hostiles a 10 pies: salvación DES o 20 radiante, mitad si tienen éxito. Desaparece tras infligir 60 de daño total.",
    damage: "20 Radiante (salvación)", extra: null
  },
  {
    id: "hallucinatory_terrain", n: "Terreno Alucinatorio [PHB]",
    nivel: "Nivel 4", escuela: "Ilusión",
    casting: "10 minutos", range: "300 pies", components: "V, S, M (piedra, ramita y trozo de hoja verde)", duration: "24 horas",
    desc: "Área natural de 150 pies cuadrados parece otro tipo de terreno natural. La naturaleza táctil de la ilusión es real (pared ilusoria es tangible). Investigación vs. tu CD para descreer.",
    damage: null, extra: null
  },
  {
    id: "ice_storm", n: "Tormenta de Hielo [PHB]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción", range: "300 pies", components: "V, S, M (pizca de polvo/hielo)", duration: "Instantáneo",
    desc: "Cilindro de 20 pies de radio, 40 de alto. Salvación DES o 2d8 contundente + 4d6 frío, mitad si tienen éxito. El suelo queda cubierto de hielo (terreno difícil) hasta tu siguiente turno. Escala: +1d8 contundente/nivel.",
    damage: "2d8 Contundente + 4d6 Frío (escala)", extra: null
  },
  {
    id: "leomund_secret_chest", n: "Cofre Secreto de Leomund [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (cofre exquisito 5000 po + réplica 50 po)", duration: "Instantáneo",
    desc: "Ocultas un cofre enorme (3×2×2 pies) en el Plano Etéreo. Puedes sacarlo tocando la réplica. Tras 60 días hay 5% de probabilidad diaria de que el contenido se pierda.",
    damage: null, extra: null
  },
  {
    id: "locate_creature", n: "Localizar Criatura [PHB]",
    nivel: "Nivel 4", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (pelo de la criatura)", duration: "Conc. 1 hora",
    desc: "Describes o nombras una criatura familiar. Sabes la dirección al individuo más cercano de ese tipo en 1000 pies, o al individuo específico si estás familiarizado. No funciona a través de agua corriente.",
    damage: null, extra: null
  },
  {
    id: "mordenkainen_faithful_hound", n: "Perro Guardián de Mordenkainen [PHB]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V, S, M (hueso + campanita de plata)", duration: "8 horas",
    desc: "Perro espectral invisible que vigila. Ladra al detectar criaturas. Ataca automáticamente: +nivel de lanzamiento a golpear, 4d8 perforante.",
    damage: "4d8 Perforante", extra: null
  },
  {
    id: "otiluke_resilient_sphere", n: "Esfera Resistente de Otiluke [PHB]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (hemisferios cristal+cuero/acero 500 po)", duration: "Conc. 1 min",
    desc: "Esfera de fuerza de 10 pies de diámetro. Salvación DES o queda encerrada. La esfera es indestructible y nada puede cruzar sus paredes.",
    damage: null, extra: null
  },
  {
    id: "phantasmal_killer", n: "Asesino Fantasmal [PHB]",
    nivel: "Nivel 4", escuela: "Ilusión",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Toca el miedo más profundo de una criatura. Salvación SAB o asustada. Al inicio de cada turno: salvación SAB o 4d10 psíquico. Escala: +1d10/nivel.",
    damage: "4d10 Psíquico (escala)", extra: null
  },
  {
    id: "polymorph", n: "Polimorfismo [PHB]",
    nivel: "Nivel 4", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (capullo de mariposa)", duration: "Conc. 1 hora",
    desc: "Transforma a una criatura en otra forma bestial. El nuevo CR no puede superar el nivel o CR de la criatura. Si los PG llegan a 0, revierte. Puede usarse en uno mismo.",
    damage: null, extra: null
  },
  {
    id: "shadow_of_moil", n: "Sombra de Moil [XGE]",
    nivel: "Nivel 4", escuela: "Nigromancia",
    casting: "1 acción", range: "Personal", components: "V, S, M (fragmento de ópalo negro 300 po)", duration: "Conc. 1 min",
    desc: "Llamas de oscuridad te rodean. Resistencia al daño radiante. Fuentes de luz a 10 pies se apagan. Quien te golpee en cuerpo a cuerpo: 2d8 necrótico.",
    damage: "2d8 Necrótico al atacante", extra: null
  },
  {
    id: "sickening_radiance", n: "Resplandor Nauseabundo [XGE]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Luz enfermiza en esfera de 30 pies. Criaturas que entren o inicien turno: salvación CON o 4d10 radiante y 1 nivel de agotamiento. La luz revela criaturas invisibles.",
    damage: "4d10 Radiante", extra: null
  },
  {
    id: "stone_shape", n: "Dar Forma a la Piedra [PHB]",
    nivel: "Nivel 4", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (arcilla blanda)", duration: "Instantáneo",
    desc: "Tocas una piedra de tamaño Mediano o menor y le das cualquier forma. También puedes tocar paredes de piedra para crear puertas, pasajes u objetos de tamaño Pequeño.",
    damage: null, extra: null
  },
  {
    id: "stoneskin", n: "Piel Pétrea [PHB]",
    nivel: "Nivel 4", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (polvo de diamante 100 po)", duration: "Conc. 1 hora",
    desc: "La criatura tocada gana resistencia al daño contundente, perforante y cortante de ataques no mágicos.",
    damage: null, extra: null
  },
  {
    id: "storm_sphere", n: "Esfera de Tormenta [XGE]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Esfera de tormenta de 20 pies de radio. Criaturas en el área al inicio: 2d6 trueno. Como Acción Adicional, lanzas un rayo: ataque de conjuro, 4d6 rayo. Escala: +1d6 al trueno y +1d6 al rayo/nivel.",
    damage: "2d6 Trueno + 4d6 Rayo (escala)", extra: null
  },
  {
    id: "staggering_smite", n: "Golpe Tambaleante [PHB]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Próximo impacto con arma: +4d6 psíquico. Salvación SAB o Aturdida hasta el final de su siguiente turno.",
    damage: "+4d6 Psíquico", extra: null
  },
  {
    id: "summon_aberration", n: "Convocar Aberración [TCE]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (fragmento de aboleth/calamar 400 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu aberrante (Beholder Fragmento, Putrefacto, o Estrella). Sus estadísticas escalan con el nivel del espacio. Te obedece.",
    damage: null, extra: null
  },
  {
    id: "summon_construct", n: "Convocar Constructo [TCE]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (ornamento de metal 400 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu constructo (Arcano, Acero o Acólito). Sus estadísticas escalan con el nivel del espacio. Te obedece.",
    damage: null, extra: null
  },
  {
    id: "summon_elemental", n: "Convocar Elemental [TCE]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (polvo del plano elemental 400 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu elemental (Aire, Tierra, Fuego, Agua). Sus estadísticas escalan con el nivel del espacio. Te obedece.",
    damage: null, extra: null
  },
  {
    id: "summon_greater_demon", n: "Invocar Demonio Mayor [XGE]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (vial de sangre)", duration: "Conc. 1 hora",
    desc: "Convocas un demonio de CR 5 o inferior. No tienes control sobre él; actúa según su naturaleza. Cada turno puede obedecer si falla CAR vs. tu CD de conjuro.",
    damage: null, extra: null
  },
  {
    id: "vitriolic_sphere", n: "Esfera Vitriólica [XGE]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S, M (polvo de esmeralda)", duration: "Instantáneo",
    desc: "Ataque de conjuro a distancia: 10d4 ácido inmediato. Si impacta o falla la salvación CON: 5d4 ácido al final de su siguiente turno. Escala: +2d4 inmediato y +1d4 posterior/nivel.",
    damage: "10d4 Ácido (escala)", extra: null
  },
  {
    id: "wall_of_fire", n: "Muro de Fuego [PHB]",
    nivel: "Nivel 4", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (pequeña pieza de fósforo)", duration: "Conc. 1 min",
    desc: "Muro de llamas de 60×20 pies (o anillo de 20 pies de radio, 20 de alto). Criaturas que entren o empiecen su turno en el lado elegido: salvación DES o 5d8 fuego, mitad si tienen éxito. Escala: +1d8/nivel.",
    damage: "5d8 Fuego (escala)", extra: null
  },
  {
    id: "watery_sphere", n: "Esfera Acuosa [XGE]",
    nivel: "Nivel 4", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (trozo de vela redondo)", duration: "Conc. 1 min",
    desc: "Esfera de agua de 10 pies de diámetro. Criaturas en el área: salvación FUE o Restringidas (ahogándose). La esfera puede moverse 30 pies/turno. Escala: +1 criatura Restringida/nivel.",
    damage: null, extra: null
  },
];
