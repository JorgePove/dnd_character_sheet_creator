/* ══════════════════════════════════════════════════════════
   hechizos-nivel-6.js — Conjuros de Nivel 6 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · FRHoF · IDRotF
   Nombres en inglés oficial · Descripciones en español
   Orden alfabético en inglés
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_6 = [
  {
    id: "arcane_gate", n: "Arcane Gate [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "500 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Creas dos portales circulares de 10 pies de diámetro en dos puntos visibles a 500 pies entre sí. Cualquier criatura que entre por uno sale por el otro instantáneamente.",
    damage: null, extra: null
  },
  {
    id: "blade_barrier", n: "Blade Barrier [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Muro giratorio de hojas de espada de hasta 100 pies de largo, 20 de alto y 5 de ancho (o anillo de 60 pies de diámetro, 20 de alto). Criaturas que entren o empiecen su turno en él: salvación DES o 6d10 cortante, mitad si tienen éxito. El área es terreno difícil.",
    damage: "6d10 Cortante", extra: null
  },
  {
    id: "bones_of_the_earth", n: "Bones of the Earth [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Hasta 6 pilares de piedra emergen del suelo en puntos a 120 pies. Cada pilar: 5 pies de diámetro, hasta 30 de alto. Criaturas en el lugar: salvación DES o 6d6 contundente y encaramadas encima. Escala: +2 pilares/nivel.",
    damage: "6d6 Contundente (escala)", extra: null
  },
  {
    id: "chain_lightning", n: "Chain Lightning [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S, M (bits de piel de anguila+cristal)", duration: "Instantáneo",
    desc: "Rayo principal a 1 objetivo: salvación DES o 10d8 rayo, mitad si tiene éxito. Salta a 3 objetivos adicionales a 30 pies del anterior (salvación igual). Escala: +1 objetivo/nivel.",
    damage: "10d8 Rayo (escala)", extra: null
  },
  {
    id: "circle_of_death", n: "Circle of Death [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 acción", range: "150 pies", components: "V, S, M (polvo de hueso 500 po)", duration: "Instantáneo",
    desc: "Esfera de energía negativa de 60 pies de radio. Salvación CON o 8d6 necrótico, mitad si tiene éxito. Escala: +2d6/nivel.",
    damage: "8d6 Necrótico (escala)", extra: null
  },
  {
    id: "conjure_fey", n: "Conjure Fey [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "PHB24: Convocas un espíritu feérico poderoso. Elige la forma del espíritu: Bestia Feérica (daño de garras), Espíritu del Bosque (magia de encantamiento), o Hada Noble (aura de miedo). Sus estadísticas escalan con el nivel del espacio. Te obedece.",
    damage: null, extra: null
  },
  {
    id: "contingency", n: "Contingency [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "10 minutos", range: "Personal", components: "V, S, M (estatuilla de marfil de ti mismo 1500 po)", duration: "10 días",
    desc: "Preparas un conjuro de nivel 5 o inferior con una condición de activación. Cuando se cumpla la condición, el conjuro se lanza automáticamente sobre ti. Solo puedes tener una contingencia activa.",
    damage: null, extra: null
  },
  {
    id: "create_homunculus", n: "Create Homunculus [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 hora", range: "Toque", components: "V, S, M (arcilla+ceniza+fango+sangre del lanzador 1 PG+instrumentos de artesano)", duration: "Instantáneo",
    desc: "Creas un homúnculo permanente que comparte tu lazo vital. Si el homúnculo muere, pierdes 2d10 PG. Puedes comunicarte con él telepáticamente a 1 milla y percibir a través de sus sentidos. Si lanzas el conjuro de nuevo mientras tienes uno, el anterior muere.",
    damage: null, extra: null
  },
  {
    id: "create_undead", n: "Create Undead [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 minuto", range: "10 pies", components: "V, S, M (arcilla/sangre/polvo/grasa 150 po)", duration: "Instantáneo",
    desc: "Creas hasta 3 ghouls a partir de cadáveres. Obedecen tus órdenes. Escala: más poderosos según nivel (ghast Nv.7, sombra Nv.8, wight Nv.9).",
    damage: null, extra: null
  },
  {
    id: "dirge", n: "Dirge [FRHoF]",
    nivel: "Nivel 6", escuela: "Encantamiento",
    casting: "1 acción", range: "Personal (emanación 60p)", components: "V, S, M (instrumento musical)", duration: "Conc. 1 min",
    desc: "Entonas una melodía fúnebre que emana en 60 pies. Criaturas hostiles que entren o inicien su turno en el área: salvación SAB o quedan Aterrorizadas por ti y sufren 3d6 psíquico al inicio de cada uno de sus turnos mientras dure el miedo. Las criaturas que superen la salvación son inmunes a este conjuro durante 24 horas. Escala: +1d6/nivel.",
    damage: "3d6 Psíquico/turno (escala)", extra: null
  },
  {
    id: "disintegrate", n: "Disintegrate [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (polvo de hierro+polvo de rubí)", duration: "Instantáneo",
    desc: "Rayo verde delgado. Salvación DES o 10d6+40 de fuerza. Si esto reduce la criatura a 0 PG, queda desintegrada en polvo. Escala: +3d6+10/nivel.",
    damage: "10d6+40 Fuerza (escala)", extra: null
  },
  {
    id: "drawmij_instant_summons", n: "Drawmij's Instant Summons [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 minuto (ritual)", range: "Toque", components: "V, S, M (zafiro 1000 po que consume)", duration: "Hasta disipar",
    desc: "Tocas un objeto de hasta 10 libras. En cualquier momento puedes decir su nombre mágico y aparece en tu mano desde donde esté, en cualquier plano.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "druid_grove", n: "Druid Grove [XGE]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "10 minutos", range: "Toque", components: "V, S, M (muérdago, agujas de pino, corteza de abeto, arcilla 1 po)", duration: "24 horas",
    desc: "Proteges un área natural de hasta 90 pies de radio. Efectos elegibles (hasta 6): criaturas de tipo o alianza específica dañadas al entrar (2d6), plantas atacan intrusos, niebla espesa, animales atacan intrusos, terreno difícil, árboles susurran (Alarma mágica). Solo tú y las criaturas que designes pueden pasar sin consecuencias.",
    damage: "2d6 al entrar (opcional)", extra: null
  },
  {
    id: "elminsters_effulgent_spheres", n: "Elminster's Effulgent Spheres [FRHoF]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "Personal", components: "V, S, M (fragmento de ámbar)", duration: "Conc. 1 min",
    desc: "Creas hasta 4 esferas de luz brillante que orbitan tu cuerpo. Como Acción Adicional puedes lanzar una esfera a un objetivo visible a 60 pies: ataque de conjuro a distancia, 4d6 radiante e impide que esa criatura se beneficie de invisibilidad hasta el inicio de tu siguiente turno. Las esferas restantes siguen orbitando y iluminan 20 pies de luz brillante + 20 de tenue. Escala: +1 esfera/nivel.",
    damage: "4d6 Radiante por esfera (escala)", extra: null
  },
  {
    id: "eyebite", n: "Eyebite [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Tus ojos se vuelven negros. Cada turno elige un efecto sobre 1 criatura a 60 pies (salvación SAB): Dormida (hasta 1 hora), Aterrada (hasta el fin de la concentración), o Enferma (desventaja en ataques y tiradas de habilidad cada turno).",
    damage: null, extra: null
  },
  {
    id: "find_the_path", n: "Find the Path [PHB]",
    nivel: "Nivel 6", escuela: "Adivinación",
    casting: "1 minuto", range: "Personal", components: "V, S, M (set de adivinación + objeto del destino)", duration: "Conc. 1 día",
    desc: "Conoces la ruta más directa a un lugar específico en el mismo plano. Sabes si vas en la dirección correcta o no.",
    damage: null, extra: null
  },
  {
    id: "fizbans_platinum_shield", n: "Fizban's Platinum Shield [FTD]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "1 acción adicional", range: "60 pies", components: "V, S, M (moneda de platino 500 po)", duration: "Conc. 1 min",
    desc: "Creas un escudo de energía dracónica plateada alrededor de una criatura visible a 60 pies. La criatura gana: +2 CA, resistencia al daño de ácido, frío, fuego, rayo y veneno, e inmunidad a la condición Tumbado. Una vez por turno, si la criatura recibe daño, puedes usar tu reacción para reducir ese daño a la mitad.",
    damage: null, extra: null
  },
  {
    id: "flesh_to_stone", n: "Flesh to Stone [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (pizca de cal+agua+tierra)", duration: "Conc. 1 min",
    desc: "Una criatura: salvación CON o restringida mientras falla 3 veces seguidas → petrificada permanentemente. Éxito 3 veces seguidas: termina el efecto.",
    damage: null, extra: null
  },
  {
    id: "forbiddance", n: "Forbiddance [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "10 minutos (ritual)", range: "Toque", components: "V, S, M (aspersores de agua bendita/maldita+incienso+rubí 1000 po)", duration: "1 día",
    desc: "Proteges un área de hasta 40000 pies cuadrados, 30 pies de alto. Bloquea la teletransportación y viaje entre planos. Daña a ciertos tipos de criaturas (5d10 radiante/necrótico) al entrar.",
    damage: "5d10 Radiante o Necrótico al entrar", extra: "Puede lanzarse como ritual."
  },
  {
    id: "globe_of_invulnerability", n: "Globe of Invulnerability [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (emanación 10p)", components: "V, S, M (perla de cristal)", duration: "Conc. 1 min",
    desc: "Barrera esférica de 10 pies de radio. Los conjuros de nivel 5 o inferior no pueden penetrarla desde fuera. Los lanzados desde dentro sí pueden salir. Escala: nivel máximo bloqueado +1/nivel.",
    damage: null, extra: null
  },
  {
    id: "gravity_fissure", n: "Gravity Fissure [EGW]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 100p)", components: "V, S, M (fragmento de mineral pesado)", duration: "Instantáneo",
    desc: "Manifiestas una grieta de gravedad intensa en una línea de 100×5 pies desde ti. Criaturas en la línea: salvación CON o 8d8 de fuerza y atraídas al punto de origen. Mitad de daño y sin atracción si tienen éxito. Criaturas a 10 pies de la línea: salvación CON o atraídas a la línea y sufren daño completo. Escala: +2d8/nivel.",
    damage: "8d8 Fuerza (escala)", extra: null
  },
  {
    id: "guards_and_wards", n: "Guards and Wards [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "10 minutos", range: "Toque", components: "V, S, M (incienso+azufre+aceite+sangre+pequeña plata+cobre 10 po)", duration: "24 horas",
    desc: "Proteges un área de hasta 2500 pies cuadrados: puertas bloqueadas, escaleras con telarañas, confusión en pasillos, ilusiones en puertas, y una niebla densa. Escala: área adicional/nivel.",
    damage: null, extra: null
  },
  {
    id: "harm", n: "Harm [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Una criatura: salvación CON o 14d6 necrótico (mitad si tiene éxito). El daño no puede reducir los PG por debajo de 1. Si falla: sus PG máximos se reducen en el daño sufrido hasta el descanso largo.",
    damage: "14d6 Necrótico", extra: null
  },
  {
    id: "heal", n: "Heal [PHB]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Una criatura recupera 70 PG. También termina con ceguera, sordera y todas las enfermedades. Escala: +10 PG/nivel.",
    damage: "Cura 70 PG (escala)", extra: null
  },
  {
    id: "heroes_feast", n: "Heroes' Feast [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "10 minutos", range: "Personal (cubo 10p)", components: "V, S, M (recipiente dorado 1000 po)", duration: "Instantáneo",
    desc: "Banquete para hasta 12 criaturas. Tras comer (1 hora): curación de todos los PG, inmunidad a veneno y miedo, +2d10 PG máximos y totales, ventaja en SAB durante 24 horas.",
    damage: null, extra: null
  },
  {
    id: "investiture_of_flame", n: "Investiture of Flame [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Llamas te envuelven. Resistencia al frío; inmunidad al fuego. Las llamas iluminan 30 pies brillante + 30 tenue. Criaturas a 5 pies al inicio de su turno: 1d10 fuego. Como Acción: línea de fuego 15×5 pies (4d8 fuego, salvación DES mitad).",
    damage: "1d10/turno o 4d8 línea Fuego", extra: null
  },
  {
    id: "investiture_of_ice", n: "Investiture of Ice [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Hielo te envuelve. Resistencia al fuego; inmunidad al frío. Terreno difícil de hielo donde camines. Criaturas a 10 pies al inicio de su turno: salvación CON o 3d6 frío y velocidad reducida a la mitad.",
    damage: "3d6 Frío", extra: null
  },
  {
    id: "investiture_of_stone", n: "Investiture of Stone [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Piedra te envuelve. Resistencia al daño contundente, perforante y cortante de ataques no mágicos. Puedes moverte a través de la roca sólida a la mitad de tu velocidad.",
    damage: null, extra: null
  },
  {
    id: "investiture_of_wind", n: "Investiture of Wind [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Vientos te envuelven. Velocidad de vuelo 60 pies. Ataques a distancia contra ti tienen desventaja. Como Acción: viento de 15×10 pies (3d8 contundente, salvación CON mitad, tumbados).",
    damage: "3d8 Contundente", extra: null
  },
  {
    id: "magic_jar", n: "Magic Jar [PHB]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 minuto", range: "Personal", components: "V, S, M (recipiente de gemas 500 po)", duration: "Hasta disipar",
    desc: "Tu alma sale de tu cuerpo y queda en el recipiente. Puedes intentar poseer cuerpos a 100 pies (CAR vs. tu CD o queda poseída). Desde el recipiente puedes percibir a 100 pies.",
    damage: null, extra: null
  },
  {
    id: "mass_suggestion", n: "Mass Suggestion [PHB]",
    nivel: "Nivel 6", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, M (lengua de víbora+miel)", duration: "24 horas",
    desc: "Como Suggestion pero hasta 12 criaturas. Salvación SAB o siguen tu sugestión. Escala: duración hasta 10 días (Nv.7), 30 días (Nv.8), 180 días (Nv.9).",
    damage: null, extra: null
  },
  {
    id: "mental_prison", n: "Mental Prison [XGE]",
    nivel: "Nivel 6", escuela: "Ilusión",
    casting: "1 acción", range: "60 pies", components: "S", duration: "Conc. 1 hora",
    desc: "Una criatura: salvación INT o atrapada en ilusión personal. Si se mueve o algo cruza la barrera ilusoria: 10d10 psíquico. La criatura no puede percibir el mundo exterior.",
    damage: "10d10 Psíquico (al cruzar barrera)", extra: null
  },
  {
    id: "move_earth", n: "Move Earth [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (mezcla de arcilla/tierra/arena)", duration: "Conc. 2 horas",
    desc: "Mueves tierra (no roca) en cubo de 40 pies. Puedes excavar, levantar colinas o nivelar. El proceso es lento (10 minutos para cambio notable). Las criaturas en el área pueden moverse para evitar ser enterradas.",
    damage: null, extra: null
  },
  {
    id: "otherworldly_form", n: "Otherworldly Form [IDRotF]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Tu forma se transforma en algo extraplanar. Ganas: velocidad de vuelo 40 pies, resistencia al daño necrótico y radiante, y puedes lanzar Faerie Fire y See Invisibility a voluntad.",
    damage: null, extra: null
  },
  {
    id: "otilukes_freezing_sphere", n: "Otiluke's Freezing Sphere [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "300 pies", components: "V, S, M (pequeña esfera de cristal)", duration: "Instantáneo",
    desc: "Lanzas una esfera de frío glacial a un punto a 300 pies. Explota en radio de 60 pies: salvación CON o 10d6 frío, mitad si tiene éxito. Agua en el área se congela (3 pulgadas de grosor). Puedes guardar la esfera hasta 1 minuto para lanzarla después. Escala: +1d6/nivel.",
    damage: "10d6 Frío (escala)", extra: null
  },
  {
    id: "ottos_irresistible_dance", n: "Otto's Irresistible Dance [PHB]",
    nivel: "Nivel 6", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Conc. 1 min",
    desc: "Una criatura comienza a bailar involuntariamente. Pierde su movimiento, tiene desventaja en DES y en ataques, y los atacantes tienen ventaja contra ella. Puede intentar salvación SAB al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "planar_ally", n: "Planar Ally [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "10 minutos", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Pides la ayuda de una entidad extraplanar de tu deidad. Una criatura celestial, elemental o infernal de CR 16 o inferior puede aparecer. No tiene obligación de ayudar: debes ofrecerle algo de valor a cambio. Si acepta, te ayuda durante la tarea solicitada.",
    damage: null, extra: null
  },
  {
    id: "primordial_ward", n: "Primordial Ward [XGE]",
    nivel: "Nivel 6", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Ganas resistencia a ácido, frío, fuego, rayo y trueno. Cuando recibes daño de uno de estos tipos, puedes usar Reacción para ganar inmunidad a ese tipo hasta el final de tu siguiente turno.",
    damage: null, extra: null
  },
  {
    id: "programmed_illusion", n: "Programmed Illusion [PHB]",
    nivel: "Nivel 6", escuela: "Ilusión",
    casting: "1 acción", range: "120 pies", components: "V, S, M (trozo de lana+polvo de jade 25 po)", duration: "Hasta disipar",
    desc: "Creas una ilusión en un cubo de 30 pies que permanece inactiva hasta que se cumpla una condición que especifiques. La ilusión dura 5 minutos activa, luego vuelve a su estado latente.",
    damage: null, extra: null
  },
  {
    id: "scatter", n: "Scatter [XGE]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Instantáneo",
    desc: "Hasta 5 criaturas: salvación SAB o teletransportadas a espacio vacío visible a 120 pies que elijas. Las que fallen no pueden resistirse.",
    damage: null, extra: null
  },
  {
    id: "soul_cage", n: "Soul Cage [XGE]",
    nivel: "Nivel 6", escuela: "Nigromancia",
    casting: "1 reacción", range: "60 pies", components: "V, S, M (jaula pequeña de hueso/marfil 300 po)", duration: "8 horas",
    desc: "Reacción cuando una criatura humanoide muere a 60 pies. Atrapa su alma en la jaula (6 usos): robar experiencia vital (+2d8 PG y ventaja en siguiente tirada), consultar el alma, o consumirla (Revivify sin material).",
    damage: null, extra: null
  },
  {
    id: "summon_fiend", n: "Summon Fiend [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (sangre de una criatura inteligente 600 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu infernal que adopta una forma física. Elige: Demoníaco (caótico, daño en área), Diabólico (ordenado, magia de control) o Yugoloth (neutral, resistente). Sus estadísticas escalan con el nivel del espacio. Te obedece.",
    damage: null, extra: null
  },
  {
    id: "sunbeam", n: "Sunbeam [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 60p)", components: "V, S, M (lente de cristal)", duration: "Conc. 1 min",
    desc: "Línea de luz solar de 60×5 pies. Salvación CON o 6d8 radiante y cegado hasta tu siguiente turno, mitad si tiene éxito. No-muertos y hongos tienen desventaja. Como Acción cada turno.",
    damage: "6d8 Radiante", extra: null
  },
  {
    id: "tashas_bubbling_cauldron", n: "Tasha's Bubbling Cauldron [PHB24]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "5 pies", components: "V, S, M (caldero de hierro)", duration: "10 min",
    desc: "Caldero mágico que puede crear pociones de curación mayor para hasta 4 criaturas, neutralizar venenos o eliminar enfermedades en criaturas que beban de él.",
    damage: null, extra: null
  },
  {
    id: "tashas_otherworldly_guise", n: "Tasha's Otherworldly Guise [TCE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S, M (icor infernal o luz feérica 500 po)", duration: "Conc. 1 min",
    desc: "Adoptas la forma de una criatura extraplanar. Elige infernal o celestial. Ganas: velocidad de vuelo 40 pies, inmunidad a fuego y veneno (infernal) o radiante y encanto (celestial), resistencia a daño no mágico, +2 CA, dos ataques adicionales, y ataques de arma se vuelven mágicos.",
    damage: null, extra: null
  },
  {
    id: "tensers_transformation", n: "Tenser's Transformation [XGE]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 10 min",
    desc: "Te transformas en un guerrero. Ganas: +50 PG temporales, ventaja en ataques con arma, armas cuentan como mágicas, ataque adicional, competencia en armadura y armas. Al terminar: agotamiento 1.",
    damage: null, extra: null
  },
  {
    id: "transport_via_plants", n: "Transport via Plants [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "10 pies", components: "V, S", duration: "1 turno",
    desc: "Creas un portal mágico dentro de una planta Enorme o mayor. Puedes designar otra planta en cualquier lugar del mismo plano. Cualquier criatura que entre emerge junto a la planta destino.",
    damage: null, extra: null
  },
  {
    id: "true_seeing", n: "True Seeing [PHB]",
    nivel: "Nivel 6", escuela: "Adivinación",
    casting: "1 acción", range: "Toque", components: "V, S, M (ungüento de hongos+azafrán+grasa 25 po)", duration: "1 hora",
    desc: "La criatura tocada tiene Visión Verdadera, nota puertas/pasajes secretos, y ve al Plano Etéreo hasta 120 pies.",
    damage: null, extra: null
  },
  {
    id: "wall_of_ice", n: "Wall of Ice [PHB]",
    nivel: "Nivel 6", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (polvo de cuarzo)", duration: "Conc. 10 min",
    desc: "Muro de hielo de hasta 10 paneles de 10×10 pies (o domo o esfera de 10 pies de radio). Criaturas que atraviesen: salvación DES o 10d6 frío, mitad si tienen éxito. Al ser destruido un panel: nube de vapor fría (CON o 5d6 frío). Escala: +2d6/nivel.",
    damage: "10d6 Frío (escala)", extra: null
  },
  {
    id: "wall_of_thorns", n: "Wall of Thorns [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "120 pies", components: "V, S, M (puñado de espinas de rosal)", duration: "Conc. 10 min",
    desc: "Muro de zarzas de 60×10×5 pies (o anillo de 20 pies de radio, 20 de alto). Terreno difícil. Criaturas que entren o empiecen su turno en el muro: salvación DES o 7d8 perforante, mitad si tienen éxito. Escala: +1d8/nivel.",
    damage: "7d8 Perforante (escala)", extra: null
  },
  {
    id: "wind_walk", n: "Wind Walk [PHB]",
    nivel: "Nivel 6", escuela: "Transmutación",
    casting: "1 minuto", range: "30 pies", components: "V, S, M (fuego+agua bendita)", duration: "8 horas",
    desc: "Tú y hasta 10 criaturas voluntarias se transforman en una forma de nube. Velocidad de vuelo 300 pies. Pueden volver a su forma normal en 1 minuto. No pueden atacar en forma de nube.",
    damage: null, extra: null
  },
  {
    id: "word_of_recall", n: "Word of Recall [PHB]",
    nivel: "Nivel 6", escuela: "Conjuración",
    casting: "1 acción", range: "5 pies", components: "V", duration: "Instantáneo",
    desc: "Tú y hasta 5 criaturas voluntarias a 5 pies sois teletransportados al santuario más cercano de tu deidad en el mismo plano.",
    damage: null, extra: null
  },
];
