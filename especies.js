/* ══════════════════════════════════════════════════════════════════
   especies.js — Especies jugables D&D 5e — COMPLETO
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2024 · Van Richten's Guide to Ravenloft (VRGtR)
     Tasha's Cauldron of Everything (TCE)
     Strixhaven: A Curriculum of Chaos (SAiS)
     Sword Coast Adventurer's Guide (SCAG)
     Mordenkainen's Tome of Foes (MTF)
     Mordenkainen's Presents: Monsters of the Multiverse (MotM)
     Mythic Odysseys of Theros (MOoT)
     Guildmaster's Guide to Ravnica (GGtR)
     Fizban's Treasury of Dragons (FTD)
     Explorer's Guide to Wildemount (EGW)
     Eberron: Rising from the Last War (ERLtLW)
     Astral Adventurer's Guide / Spelljammer (AAG)
══════════════════════════════════════════════════════════════════ */

const DND_ESPECIES = {

  /* ════════════════════════════════════════════════════════════════
     PHB 2024
  ════════════════════════════════════════════════════════════════ */

  "Humano [PHB24]": [
    { n:"Versátil", d:"Ganas la dote Heroic Inspiration al terminar cada descanso largo. Puedes escoger una dote de Origen al nivel 1." },
    { n:"Tenaz", d:"Cuando tiras para recuperar PG en un descanso corto, puedes volver a tirar cualquier dado que muestre 1 o 2 (una vez por dado)." },
    { n:"Habilidoso", d:"Competencia en una habilidad adicional de tu elección." },
    { n:"Idiomas", d:"Común + 1 idioma adicional de tu elección." },
  ],

  "Elfo [PHB24]": [
    { n:"Visión en la Oscuridad", d:"60 pies. Ves en luz tenue como si fuera brillante y en oscuridad como si fuera tenue (sin colores)." },
    { n:"Agudieza Élfica", d:"Competencia en Percepción." },
    { n:"Ancestro Feérico", d:"Ventaja en tiradas de salvación para no ser Encantado. La magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir. Meditas 4 horas en Trance semiconsciente y obtienes los mismos beneficios que 8 horas de sueño humano." },
    { n:"Pasos Feéricos", d:"Puedes lanzar Paso Brumoso sin espacio de conjuro 1/descanso corto. A Nv.5 también Libertad de Movimiento 1/descanso largo." },
    { n:"Subespecie", d:"Alto Elfo (truco de mago + idioma adicional), Elfo del Bosque (velocidad 35 pies + ocultarse en naturaleza), Drow (Luz de las Hadas, Oscuridad, Hechizo de Araña — 1/descanso largo)." },
  ],

  "Enano [PHB24]": [
    { n:"Visión en la Oscuridad", d:"120 pies." },
    { n:"Resiliencia Enana", d:"Ventaja en salvaciones contra veneno. Resistencia al daño por veneno." },
    { n:"Formación en Combate Enano", d:"Competencia en hacha de guerra, hacha de mano, martillo ligero y martillo de guerra." },
    { n:"Competencia con Herramientas", d:"Competencia en herramientas de herrero, cervecero o cantero (elige 1)." },
    { n:"Sentido de la Piedra", d:"Doble competencia en Historia sobre el origen de construcciones en piedra." },
    { n:"Subespecie", d:"Enano de las Colinas (+1 SAB, +1 PG/nivel, competencia en Percepción), Enano de las Montañas (+2 FUE, competencia en armadura ligera y media)." },
  ],

  "Mediano [PHB24]": [
    { n:"Suertudo", d:"Al obtener un 1 natural en ataque, habilidad o salvación, puedes volver a tirar ese dado y debes usar el nuevo resultado." },
    { n:"Valiente", d:"Ventaja en salvaciones contra el estado Asustado." },
    { n:"Agilidad de Mediano", d:"Puedes moverte a través del espacio de cualquier criatura de tamaño Mayor que el tuyo." },
    { n:"Naturaleza Alegre", d:"Puedes intentar esconderte cuando solo estás oscurecido por una criatura de tamaño Mayor que el tuyo." },
    { n:"Subespecie", d:"Pie Ligero (competencia en Sigilo, +CAR), Panzabombo (+2 CON, resistencia al veneno, ventaja en salvaciones contra veneno)." },
  ],

  "Gnomo [PHB24]": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Astucia Gnómica", d:"Ventaja en salvaciones de INT, SAB y CAR contra conjuros y efectos mágicos." },
    { n:"Subespecie", d:"Gnomo de la Roca (familiar mecánico, competencia en herramientas artesanales, mensajes encriptados a través del familiar). Gnomo del Bosque (Ilusión Menor a voluntad, hablar con animales pequeños)." },
  ],

  "Semielfo [PHB24]": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Ancestro Feérico", d:"Ventaja contra Encantamiento. La magia no puede dormirte." },
    { n:"Versatilidad Racial", d:"+2 CAR. +1 a otras dos estadísticas de tu elección. Competencia en 2 habilidades de tu elección." },
  ],

  "Semiorco [PHB24]": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Amenazante", d:"Competencia en Intimidación." },
    { n:"Resistencia Implacable", d:"1/descanso largo: cuando caerías a 0 PG, en cambio te quedas en 1 PG." },
    { n:"Ataques Salvajes", d:"En un crítico con arma cuerpo a cuerpo, tira uno de los dados de daño del arma una vez más y súmalo al daño." },
  ],

  "Tiefling [PHB24]": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resistencia Infernal", d:"Resistencia al daño de fuego." },
    { n:"Legado Infernal (Asmodeus)", d:"Truco Taumaturgia; Represalia Infernal (Nv.3); Oscuridad (Nv.5). 1/descanso largo sin espacio de conjuro." },
  ],

  "Draconido [PHB24]": [
    { n:"Ascendencia Dracónica", d:"Elige tipo de dragón. Determina el tipo de daño de tu aliento y tu resistencia (ácido, rayo, frío, fuego, veneno)." },
    { n:"Arma de Aliento", d:"Cono 15p o línea 5×30p. 2d6 en Nv.1 → 3d6 Nv.5 → 4d6 Nv.11 → 5d6 Nv.17. Salvación DES/CON mitad. 1/descanso corto." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de daño de tu ascendencia." },
    { n:"Instinto Dracónico", d:"Ventaja en Intimidación o Persuasión cuando tratas con dragones (elige al crear el personaje)." },
  ],

  /* ════════════════════════════════════════════════════════════════
     SWORD COAST ADVENTURER'S GUIDE [SCAG]
  ════════════════════════════════════════════════════════════════ */

  "Enano Gris (Duergar) [SCAG]": [
    { n:"Visión en la Oscuridad", d:"120 pies, incluyendo oscuridad mágica." },
    { n:"Resistencia Duergar", d:"Ventaja en salvaciones contra ilusiones y contra ser Encantado o Paralizado. Resiliencia enana habitual (veneno)." },
    { n:"Magia Duergar", d:"Agrandar (sobre ti mismo) sin espacio a Nv.3; Invisibilidad sin espacio a Nv.5. 1/descanso largo." },
    { n:"Sensibilidad a la Luz del Sol", d:"Desventaja en ataques y Percepción mientras tú o el objetivo estéis en luz solar directa." },
  ],

  "Tiefling Variante [SCAG]": [
    { n:"Legado de Levistus", d:"Frío Glacial (truco); Armadura de Ágatos (Nv.3); Bola de Fuego (Nv.5). 1/descanso largo." },
    { n:"Legado de Dispater", d:"Amigos (truco); Disfrazarse (Nv.3); Detectar Pensamientos (Nv.5). 1/descanso largo." },
    { n:"Legado de Fierna", d:"Amigos (truco); Encantar Persona (Nv.3); Sugestión (Nv.5). 1/descanso largo." },
    { n:"Legado de Glasya", d:"Amigos (truco); Disfrazarse (Nv.3); Invisibilidad Mayor (Nv.5). 1/descanso largo." },
    { n:"Legado de Mammon", d:"Manos de Mago (truco); Tenser's Disco Flotante (Nv.3); Levitar (Nv.5). 1/descanso largo." },
    { n:"Legado de Mephistopheles", d:"Crear Llama (truco); Paso Brumoso (Nv.3); Llamas del Infierno (Nv.5). 1/descanso largo." },
    { n:"Legado de Zariel", d:"Taumaturgia (truco); Represalia Infernal (Nv.3); Bola de Fuego (Nv.5). 1/descanso largo." },
    { n:"Alas (variante)", d:"Velocidad de vuelo 30 pies. Sustituye el Legado Infernal. Requiere aprobación del DM." },
  ],

  /* ════════════════════════════════════════════════════════════════
     MORDENKAINEN'S TOME OF FOES [MTF] /
     MONSTERS OF THE MULTIVERSE [MotM]
  ════════════════════════════════════════════════════════════════ */

  "Elfo Eladrin [MTF/MotM]": [
    { n:"Paso Feérico", d:"Como Acción Adicional, teletransportas 30 pies a espacio vacío visible. 1/descanso corto. Efecto adicional según estación actual — Otoño: objetivo a 30 pies (SAB CD) o Encantado hasta tu próximo turno. Invierno: objetivo (SAB CD) o Asustado hasta tu próximo turno. Primavera: empujas al objetivo hasta 10 pies. Verano: objetivo recibe 1d6 fuego." },
    { n:"Ancestro Feérico", d:"Ventaja contra Encantamiento. La magia no puede dormirte." },
    { n:"Trance", d:"Meditación de 4 horas = descanso largo completo." },
    { n:"Cambio de Estación", d:"Al terminar un descanso largo puedes cambiar tu estación activa." },
  ],

  "Githyanki [MTF/MotM]": [
    { n:"Conocimiento Marcial Githyanki", d:"Competencia en armadura ligera y media, espadas cortas, espadas largas y lanzas." },
    { n:"Psiónica Githyanki", d:"Manos de Mago (truco, psiónica); Salto (Nv.3); Paso Brumoso (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
    { n:"Ventaja Psiónica", d:"1/descanso largo: cuando realizas tirada de ataque, habilidad o salvación, añades 1d4 al resultado." },
  ],

  "Githzerai [MTF/MotM]": [
    { n:"Defensa Mental", d:"Ventaja en salvaciones contra Encantamiento y el estado Asustado." },
    { n:"Psiónica Githzerai", d:"Manos de Mago (truco, psiónica); Escudo (Nv.3); Detectar Pensamientos (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
    { n:"Ventaja Psiónica", d:"1/descanso largo: añades 1d4 a una tirada de ataque, habilidad o salvación." },
  ],

  "Yuan-ti [MTF/MotM]": [
    { n:"Inmunidad al Veneno", d:"Inmune al daño por veneno y a la condición Envenenado." },
    { n:"Magia de la Mente de Serpiente", d:"Truco Veneno; Sugestión (Nv.3); Terror en Masa (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
    { n:"Resistencia Mágica", d:"Ventaja en salvaciones contra conjuros y efectos mágicos." },
  ],

  "Kenku [MTF/MotM]": [
    { n:"Mímesis de Experto", d:"Puedes imitar perfectamente sonidos y voces que hayas escuchado. Una criatura que lo detecte debe superar Perspicacia (CD = 8 + comp + CAR)." },
    { n:"Entrenamiento Kenku", d:"Competencia en 2 habilidades de: Acrobacias, Engaño, Sigilo o Trapacería." },
  ],

  "Lizardfolk [MTF/MotM]": [
    { n:"Mordisco Natural", d:"Ataque desarmado: 1d6 + FUE perforante." },
    { n:"Aguantar la Respiración", d:"Hasta 15 minutos bajo el agua." },
    { n:"Naturaleza Hambreada", d:"Como Acción Adicional, comes parte de un cadáver adyacente: ganas PG temporales = CON mod + nivel. 1/descanso corto." },
    { n:"Armadura Natural", d:"CA = 13 + mod DES cuando no llevas armadura." },
    { n:"Velocidad de Natación", d:"30 pies." },
  ],

  "Aasimar [MTF/MotM]": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resistencia Celestial", d:"Resistencia al daño necrótico y radiante." },
    { n:"Manos Curativas", d:"Como Acción, tocas a una criatura y la curas con dados = tu bonificación de competencia (d4). 1/descanso largo." },
    { n:"Luz Celestial", d:"Lanzas Luz a voluntad." },
    { n:"Subespecie / Transformación", d:"Protector: alas con vuelo 30 pies + aura de 10 pies radiante. Vengador: vuelo 30 pies + aura necrótica. Caído: explosión de energía necrótica en 10 pies. Cada forma 1/descanso largo, dura 1 minuto." },
  ],

  "Bugbear [MTF/MotM]": [
    { n:"Sorpresa Brutal", d:"+2d6 daño adicional contra criaturas Sorprendidas en el primer turno de combate." },
    { n:"Alcance Largo", d:"Tus ataques cuerpo a cuerpo tienen alcance de 10 pies." },
    { n:"Sigilo Natural", d:"Competencia en Sigilo." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  "Firbolg [MTF/MotM]": [
    { n:"Magia Firbolg", d:"Detectar Magia y Hablar con Animales sin espacio de conjuro (1 uso de cada uno por descanso corto). Usa INT, SAB o CAR." },
    { n:"Paso Oculto", d:"Como Acción Adicional, te vuelves Invisible hasta el inicio de tu siguiente turno. 1/descanso corto." },
    { n:"Discurso de Bestia y Hoja", d:"Puedes comunicarte con bestias y plantas como si compartieras idioma (ellas responden de forma simple)." },
    { n:"Construcción Poderosa", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Disfraz Oculto", d:"Puedes lanzar Disfrazarse (solo como humanoide) sin espacio de conjuro. 1/descanso corto." },
  ],

  "Goblin [MTF/MotM]": [
    { n:"Fuga Ágil", d:"Como Acción Adicional, realiza la acción Desengancharse o Esconderse." },
    { n:"Freneticismo Goblin", d:"1/descanso largo: como Acción Adicional, realizas un ataque con arma o un ataque desarmado." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  "Hobgoblin [MTF/MotM]": [
    { n:"Formación Marcial", d:"Competencia en 2 armas marciales de tu elección y armadura ligera." },
    { n:"Guardia Salvadora", d:"1/descanso largo: cuando una criatura visible dentro de 30 pies falla una salvación, puedes usar Reacción para que la repita (debe usar el nuevo resultado)." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  "Kobold [MTF/MotM]": [
    { n:"Astucia Dracónica", d:"Puedes usar tu Acción Adicional para realizar la acción Ayudar. Si ayudas a un aliado a atacar, ese aliado puede estar a 30 pies si te ve u oye." },
    { n:"Herencia Dracónica", d:"Competencia en una habilidad de: Arcana, Medicina, Naturaleza, Percepción o Supervivencia. Además obtienes un truco adicional basado en el tipo de dragón elegido." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  "Orc [MTF/MotM]": [
    { n:"Agressivo", d:"Como Acción Adicional, te mueves hasta tu velocidad hacia un enemigo visible." },
    { n:"Construcción Poderosa", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Implacable", d:"1/descanso largo: cuando caerías a 0 PG, te quedas en 1 PG en cambio." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  "Shadar-kai [MTF/MotM]": [
    { n:"Bendición del Cuervo Negro", d:"Como Acción Adicional, teletransportas 30 pies a espacio vacío visible. Si lanzas un conjuro ese turno, ganas resistencia a todo daño hasta el inicio de tu siguiente turno. 1/descanso largo." },
    { n:"Visión en la Oscuridad", d:"60 pies, incluyendo oscuridad mágica." },
    { n:"Resistencia Feérica", d:"Ventaja en salvaciones contra Encantamiento." },
    { n:"Trance", d:"Meditación 4 horas = descanso largo completo." },
  ],

  "Aarakocra [MotM]": [
    { n:"Vuelo", d:"Velocidad de vuelo 50 pies. No puedes usar esta velocidad si llevas armadura media o pesada." },
    { n:"Garras", d:"Ataque desarmado: 1d6 + FUE cortante." },
    { n:"Lenguaje del Viento", d:"Puedes comunicarte con bestias que tengan velocidad de vuelo." },
  ],

  "Genasi de Aire [MotM]": [
    { n:"Resistencia al Rayo", d:"Resistencia al daño de rayo." },
    { n:"Paso sin Fin", d:"Tu velocidad de movimiento aumenta en 5 pies." },
    { n:"Magia Elemental de Aire", d:"Truco de lista de druida; Pasar Sin Dejar Rastro (Nv.3); Levitar (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
  ],

  "Genasi de Tierra [MotM]": [
    { n:"Resistencia al Veneno", d:"Resistencia al veneno. Ventaja en salvaciones contra Envenenado." },
    { n:"Andar por la Piedra", d:"Moverse por terreno de roca o tierra sin tratar no te cuesta movimiento adicional." },
    { n:"Magia Elemental de Tierra", d:"Truco de lista de druida; Pasar Sin Dejar Rastro (Nv.3); Cruzar Muros (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
  ],

  "Genasi de Fuego [MotM]": [
    { n:"Resistencia al Fuego", d:"Resistencia al daño de fuego." },
    { n:"Iluminación", d:"Emites luz brillante 10 pies y tenue 10 pies adicionales. Acción Adicional para activar o desactivar." },
    { n:"Magia Elemental de Fuego", d:"Truco Crear Llama; Manos Ardientes (Nv.3); Bola de Fuego (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
  ],

  "Genasi de Agua [MotM]": [
    { n:"Anfibio", d:"Puedes respirar aire y agua." },
    { n:"Resistencia al Ácido", d:"Resistencia al daño de ácido." },
    { n:"Velocidad de Natación", d:"Igual a tu velocidad de movimiento." },
    { n:"Magia Elemental de Agua", d:"Truco de lista de druida; Crear o Destruir Agua (Nv.3); Control del Agua (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
  ],

  "Tabaxi [MotM]": [
    { n:"Velocidad Felina", d:"1/descanso corto: como Acción Adicional, te mueves el doble de tu velocidad (solo movimiento)." },
    { n:"Garras de Gato", d:"Ataque desarmado: 1d6 + FUE cortante. Trepar no te cuesta movimiento adicional." },
    { n:"Curiosidad del Gato", d:"Competencia en Percepción y Sigilo." },
  ],

  "Tortle [MotM]": [
    { n:"Armadura Natural", d:"CA = 17 cuando no llevas armadura (no añades DES)." },
    { n:"Retirada al Caparazón", d:"Acción: CA = 19, velocidad 0, ventaja en FUE y CON, desventaja en DES. Acción para salir." },
    { n:"Aguantar la Respiración", d:"1 hora bajo el agua." },
    { n:"Garras Naturales", d:"Ataque desarmado: 1d6 + FUE cortante." },
  ],

  "Triton [MotM]": [
    { n:"Anfibio", d:"Puedes respirar aire y agua." },
    { n:"Control del Mar y el Aire", d:"Hablar con Animales acuáticos sin espacio; Niebla (Nv.3); Llamar a los Rayos (Nv.5). 1/descanso largo. Usa INT, SAB o CAR." },
    { n:"Emisario del Mar", d:"Puedes comunicarte de forma simple con bestias acuáticas." },
    { n:"Guardianes de las Profundidades", d:"Resistencia al frío. Velocidad de natación 30 pies." },
  ],

  "Harengon [MotM]": [
    { n:"Iniciativa del Conejo", d:"Añades tu bonificación de competencia a tu tirada de Iniciativa." },
    { n:"Salto Lepórido", d:"Como Acción Adicional saltas un número de pies = 5 × tu bonificación de competencia sin provocar ataques de oportunidad. 1/descanso corto." },
    { n:"Pies de Hierro", d:"Resistencia al daño por caída. Competencia en Acrobacias." },
    { n:"Vista Aguda", d:"Competencia en Percepción." },
  ],

  "Fairy [MotM]": [
    { n:"Vuelo de Hada", d:"Velocidad de vuelo 30 pies. No puedes usarlo con armadura media o pesada ni estando Cargado." },
    { n:"Magia de Hada", d:"Truco Taumaturgia o Luz de las Hadas; Paso Brumoso (Nv.3); Ver Invisibilidad (Nv.5). 1/descanso largo sin espacio. Usa INT, SAB o CAR." },
    { n:"Tamaño Pequeño", d:"Eres de tamaño Pequeño." },
  ],

  "Satiro [MotM]": [
    { n:"Magia Feérica", d:"Truco de lista de bardo; Encantar Persona (Nv.3); Pasar Sin Dejar Rastro (Nv.5). 1/descanso largo sin espacio. Usa CAR." },
    { n:"Saltos Mirthful", d:"Al saltar añades 1d8 pies a la distancia horizontal o 1d4 pies a la vertical. Sin coste de movimiento adicional." },
    { n:"Resistencia Feérica", d:"Ventaja en salvaciones contra Encantamiento y el estado Asustado." },
    { n:"Aclamación de Bardo", d:"Competencia en Actuación y en 1 instrumento musical." },
  ],

  /* ════════════════════════════════════════════════════════════════
     TASHA'S CAULDRON OF EVERYTHING [TCE]
  ════════════════════════════════════════════════════════════════ */

  "Linaje Personalizado [TCE]": [
    { n:"Aumento de Característica Variable", d:"+2 a una estadística de tu elección." },
    { n:"Tamaño Variable", d:"Elige Pequeño o Mediano." },
    { n:"Dote al Nivel 1", d:"Obtienes una dote de tu elección al nivel 1 (en lugar de rasgos raciales adicionales)." },
    { n:"Rasgo Especial", d:"Elige: Visión en la Oscuridad 60 pies, o competencia en 1 habilidad de tu elección." },
    { n:"Idiomas", d:"Común + 1 idioma adicional de tu elección." },
  ],

  /* ════════════════════════════════════════════════════════════════
     VAN RICHTEN'S GUIDE TO RAVENLOFT [VRGtR]
  ════════════════════════════════════════════════════════════════ */

  "Dhampir [VRGtR]": [
    { n:"Mordisco Vampírico", d:"Ataque desarmado: 1d4 perforante + FUE o DES. Al impactar puedes moverte 10 pies hacia el objetivo sin provocar ataques de oportunidad. Recuperas PG = un dado de daño del mordisco + CON mod. 1/descanso corto." },
    { n:"Escalar como Araña", d:"Velocidad de escalar igual a tu velocidad de movimiento. Puedes escalar en superficies difíciles y boca abajo sin tirada." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Herencia Vampírica", d:"No necesitas respirar. Cuentas como no-muerto a efectos de conjuros como Reparar." },
  ],

  "Hexblood [VRGtR]": [
    { n:"Intercambio de Maldición", d:"Como Acción, gasta un espacio de conjuro para transferir la condición Encantado, Asustado, Envenenado o una maldición que te afecte a otra criatura a 30 pies (salvación SAB CD = 8 + comp + SAB/INT/CAR)." },
    { n:"Legado del Aquelarre", d:"Disfrazarse sin espacio (1/descanso largo, Nv.1); Ceguera/Sordera sin espacio (1/descanso largo, Nv.3)." },
    { n:"Pelo de Bruja", d:"Como Acción Adicional, tu cabello se alarga para agarrar un objeto Pequeño o criatura Pequeña a 5 pies y moverlo 30 pies en una dirección. O puedes usar Desengancharse." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  "Reborn [VRGtR]": [
    { n:"Adaptación del Renacido", d:"Puedes aguantar la respiración indefinidamente. Inmune a enfermedades. Ventaja en salvaciones contra veneno y resistencia al veneno." },
    { n:"Conocimiento de Vidas Pasadas", d:"Competencia en 1 habilidad de tu elección. Puedes hacer tiradas de INT o SAB para recordar fragmentos de vidas anteriores." },
    { n:"Tenacidad del Renacido", d:"1/descanso largo: cuando caerías a 0 PG, te quedas en 1 PG." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  /* ════════════════════════════════════════════════════════════════
     MYTHIC ODYSSEYS OF THEROS [MOoT]
  ════════════════════════════════════════════════════════════════ */

  "Leonin [MOoT]": [
    { n:"Rugido del Pelotón", d:"1/descanso largo: como Acción Adicional, las criaturas de tu elección dentro de 10 pies deben superar salvación SAB (CD = 8 + comp + CON) o quedan Asustadas hasta el fin de tu siguiente turno." },
    { n:"Garras del León", d:"Ataque desarmado: 1d6 + FUE cortante." },
    { n:"Sentidos del León", d:"Competencia en Percepción." },
    { n:"Velocidad", d:"Tu velocidad de movimiento es 35 pies." },
  ],

  "Minotauro [MOoT]": [
    { n:"Carga Cornuda", d:"Si te mueves al menos 10 pies en línea recta y golpeas con tus cuernos, añades 2d6 al daño. Si el objetivo es Mediano o menor, salvación FUE (CD = 8 + comp + FUE) o empujado 10 pies y Tumbado." },
    { n:"Cuernos", d:"Ataque desarmado: 1d6 + FUE perforante." },
    { n:"Memoria Laberíntica", d:"Ventaja en pruebas de INT para recordar caminos o trazados de laberintos." },
    { n:"Construcción Poderosa", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
  ],

  /* ════════════════════════════════════════════════════════════════
     GUILDMASTER'S GUIDE TO RAVNICA [GGtR]
  ════════════════════════════════════════════════════════════════ */

  "Centauro [GGtR]": [
    { n:"Carga", d:"Si te mueves al menos 30 pies en línea recta antes de golpear con arma cuerpo a cuerpo, añades 1d6 al daño y el objetivo debe superar salvación FUE o es empujado." },
    { n:"Pezuñas", d:"Ataque desarmado: 1d6 + FUE contundente." },
    { n:"Cuerpo de Centauro", d:"Velocidad 40 pies. Cuentas como Grande para cargar/empujar/arrastrar." },
    { n:"Conocimiento Natural", d:"Competencia en Naturaleza o Supervivencia (elige 1)." },
  ],

  "Loxodon [GGtR]": [
    { n:"Trompa", d:"Puedes sostener o levantar objetos con la trompa (hasta 400 lb). Ventaja en Percepción basada en olfato." },
    { n:"Naturaleza Serena", d:"Añades el modificador de SAB a salvaciones de CON para mantener concentración." },
    { n:"Memoria Profunda", d:"Doble competencia en Historia." },
    { n:"Constitución Robusta", d:"+1 PG adicional por nivel (además del dado de vida de clase)." },
  ],

  "Simic Hybrid [GGtR]": [
    { n:"Modificación Animal (Nv.1)", d:"Elige 1: Garra de Cangrejo (1d6 cortante), Sensores de Pez (visión 30p bajo el agua), Patas de Mantis (saltar sin gastar movimiento), Resistencia Mucosa (ventaja en Atletismo y salvaciones FUE)." },
    { n:"Modificación Animal (Nv.5)", d:"Elige 1 adicional: Camuflaje de Cefalópodo (invisible en agua turbia), Piel con Pinchos (1d4 perforante a quien te agarre), Tentáculos (alcance 10p para agarrar), Alas Membranosas (vuelo 30p, sin armadura)." },
  ],

  "Vedalken [GGtR]": [
    { n:"Imperturbable", d:"Ventaja en salvaciones de INT, SAB y CAR." },
    { n:"Acumulación de Conocimientos", d:"Competencia en 2 habilidades o herramientas adicionales de tu elección." },
    { n:"Parcialmente Anfibio", d:"Puedes aguantar la respiración bajo el agua hasta 1 hora." },
  ],

  /* ════════════════════════════════════════════════════════════════
     STRIXHAVEN: A CURRICULUM OF CHAOS [SAiS]
  ════════════════════════════════════════════════════════════════ */

  "Owlin [SAiS]": [
    { n:"Vuelo", d:"Velocidad de vuelo igual a tu velocidad de movimiento. No puedes usar esta velocidad con armadura media o pesada." },
    { n:"Visión en la Oscuridad", d:"120 pies." },
    { n:"Alas Silenciosas", d:"Competencia en Sigilo. Ventaja en Sigilo relacionado con movimiento aéreo." },
  ],

  /* ════════════════════════════════════════════════════════════════
     FIZBAN'S TREASURY OF DRAGONS [FTD]
  ════════════════════════════════════════════════════════════════ */

  "Draconido Gema [FTD]": [
    { n:"Aliento de Gema", d:"Cono 15p o línea 60×5p. 1d10 en Nv.1 → 2d10 Nv.5 → 3d10 Nv.11 → 4d10 Nv.17. Tipo: Esmeralda/veneno, Amatista/fuerza, Zafiro/trueno, Rubí/psíquico, Topacio/necrótico. 1/descanso largo." },
    { n:"Vuelo Astral", d:"A partir de Nv.5: 1/descanso largo manifiestas alas astrales etéreas. Velocidad de vuelo 30 pies durante 1 minuto." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de daño de tu ascendencia gema." },
    { n:"Psi-Soplo", d:"Como Reacción al recibir daño, emites un pulso: el atacante recibe 1d6 psíquico." },
  ],

  "Draconido Cromático [FTD]": [
    { n:"Aliento Cromático", d:"Cono 15p o línea 5×30p. 1d10 en Nv.1 → 4d10 Nv.17. Tipo según dragón (Negro/ácido, Azul/rayo, Verde/veneno, Rojo/fuego, Blanco/frío). 1/descanso largo." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de tu ascendencia cromática." },
    { n:"Presencia Aterradora", d:"1/descanso largo: criaturas de tu elección en 30 pies superan salvación SAB (CD = 8 + comp + CAR) o quedan Asustadas hasta el fin de tu siguiente turno." },
  ],

  "Draconido Metálico [FTD]": [
    { n:"Aliento Metálico", d:"Cono 15p o línea 5×30p. 1d10 en Nv.1 → 4d10 Nv.17. Tipo: Latón-Cobre/ácido, Bronce-Dorado/fuego, Hierro-Plateado/frío. Opción de aliento alternativo debilitante. 1/descanso largo." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de tu ascendencia metálica." },
    { n:"Aliento Debilitador", d:"En lugar de daño, exhalas gas que reduce la velocidad a la mitad o incapacita para acciones (salvación CON) hasta el fin de tu siguiente turno." },
  ],

  /* ════════════════════════════════════════════════════════════════
     EXPLORER'S GUIDE TO WILDEMOUNT [EGW]
  ════════════════════════════════════════════════════════════════ */

  "Pallid Elf [EGW]": [
    { n:"Incertidumbre Curiosa", d:"Competencia en Medicina e Investigación." },
    { n:"Magia del Pallid Elf", d:"Luz de las Hadas sin espacio 1/descanso largo; Ver Invisibilidad sin espacio a Nv.5, 1/descanso largo." },
    { n:"Rasgos de Elfo", d:"Visión en la Oscuridad 60p, Agudieza Élfica, Ancestro Feérico, Trance." },
  ],

  "Lotusden Halfling [EGW]": [
    { n:"Hijo del Bosque", d:"El terreno difícil de origen vegetal no te cuesta movimiento adicional." },
    { n:"Magia del Lotusden", d:"Enredar sin espacio 1/descanso largo (Nv.3); Hablar con Plantas sin espacio 1/descanso largo (Nv.5)." },
    { n:"Rasgos de Mediano", d:"Suertudo, Valiente, Agilidad de Mediano." },
  ],

  /* ════════════════════════════════════════════════════════════════
     EBERRON: RISING FROM THE LAST WAR [ERLtLW]
  ════════════════════════════════════════════════════════════════ */

  "Kalashtar [ERLtLW]": [
    { n:"Mente Dual", d:"No puedes ser poseído ni contactado telepáticamente sin tu consentimiento. Inmune a hechizos de lectura de mente como Detectar Pensamientos." },
    { n:"Proyección Mental", d:"Puedes comunicarte telepáticamente con cualquier criatura inteligente a 60 pies (sin idioma compartido)." },
    { n:"Sensibilidad Psíquica", d:"Ventaja en tiradas de Perspicacia." },
    { n:"Resistencia Psíquica", d:"Resistencia al daño psíquico." },
    { n:"Idiomas", d:"Común, Quori y 1 idioma adicional." },
  ],

  "Changeling [ERLtLW]": [
    { n:"Cambiar Aspecto", d:"Como Acción transformas tu apariencia física: altura, peso, rasgos faciales, voz, color de piel/cabello/ojos. No cambia tu equipo. Puedes imitar a personas específicas (Perspicacia vs. tu CD de Engaño para detectarlo)." },
    { n:"Instintos de Changeling", d:"Competencia en 2 habilidades de: Engaño, Perspicacia, Intimidación, Persuasión o Actuación." },
    { n:"Idiomas", d:"Común + 2 idiomas adicionales." },
  ],

  "Warforged [ERLtLW]": [
    { n:"Cuerpo Construido", d:"Inmune a enfermedad. No necesitas comer, beber ni respirar. Inmune al sueño mágico. Puedes recibir curación mágica normalmente." },
    { n:"Fortaleza de Hierro", d:"+1 CA permanente integrado en tu estructura (no se acumula con armaduras que modifiquen la CA base)." },
    { n:"Herramienta Integrada", d:"Competencia en 1 herramienta artesanal integrada en tu cuerpo. Siempre la llevas contigo." },
    { n:"Centinela", d:"No necesitas dormir pero debes descansar inmóvil 6 horas para obtener beneficios del descanso largo. Eres consciente del entorno durante ese tiempo." },
  ],

  "Shifter [ERLtLW]": [
    { n:"Cambio de Forma Parcial", d:"Como Acción Adicional manifiestas tu naturaleza bestial: ganas PG temporales = 1d6 + CON. Según subespecie obtienes efectos adicionales durante 1 minuto. 1/descanso corto." },
    { n:"Subespecie Shifter", d:"Beasthide (PG temp +1d6 extra y +1 CA), Longtooth (colmillos 1d6 perforante como AA), Swiftstride (+10 velocidad y movimiento de 10p sin AO al ser atacado), Wildhunt (ventaja en Percepción; las criaturas no tienen ventaja en ataques contra ti por tener aliados adyacentes)." },
    { n:"Instintos Naturales", d:"Competencia en 2 habilidades de: Atletismo, Intimidación, Percepción o Sigilo." },
  ],

  /* ════════════════════════════════════════════════════════════════
     ASTRAL ADVENTURER'S GUIDE / SPELLJAMMER [AAG]
  ════════════════════════════════════════════════════════════════ */

  "Astral Elf [AAG]": [
    { n:"Trance Astral", d:"No necesitas dormir. Meditas 4 horas para beneficiarte de descanso largo. Cada Trance te otorga competencia en 1 habilidad o herramienta hasta el siguiente." },
    { n:"Conocimiento Estrellado", d:"Competencia en Arcana (o Historia/Naturaleza si ya la tienes)." },
    { n:"Magia Estelar", d:"Tienes 1 truco de lista de mago. A Nv.3 y 5 puedes lanzar conjuros de mago (máx. Nv.2 y 3 respectivamente) sin espacio de conjuro. 1/descanso largo." },
    { n:"Armamento Feérico", d:"Como Acción Adicional, tu arma pasa a ser mágica y añade 1d4 al daño hasta el inicio de tu siguiente turno. 1/descanso corto." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],

  "Autognome [AAG]": [
    { n:"Cuerpo Mecánico", d:"Inmune a veneno, enfermedad y sueño mágico. No necesitas comer, beber ni respirar. Resistencia al daño por veneno." },
    { n:"Reparación Integrada", d:"1/descanso largo: como Acción recuperas PG = 1d6 + nivel usando herramientas integradas." },
    { n:"Herramienta Integrada", d:"Competencia en 1 tipo de herramientas artesanales integradas en tu cuerpo." },
    { n:"Diseñado para el Éxito", d:"1/descanso largo: cuando obtienes 9 o menos en tirada de ataque, habilidad o salvación, puedes repetirla (debes usar el nuevo resultado)." },
    { n:"Protección del Creador", d:"1/descanso largo: cuando caerías a 0 PG sin morir instantáneamente, te quedas en 1 PG." },
  ],

  "Giff [AAG]": [
    { n:"Aptitud con Armas de Fuego", d:"Competencia con pistolas, mosquetes y otras armas de fuego." },
    { n:"Construcción Hipopótamo", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Fuerza de Impacto", d:"1/descanso corto: cuando impactas cuerpo a cuerpo, el objetivo supera CON (CD = 8 + comp + FUE) o queda Aturdido hasta el inicio de tu siguiente turno." },
    { n:"Seguridad Militar", d:"Competencia en Atletismo e Intimidación." },
  ],

  "Hadozee [AAG]": [
    { n:"Planeo", d:"Cuando caes más de 10 pies, puedes extender las membranas bajo tus brazos para planear. Caes 60 pies/turno horizontal por cada 5 pies de descenso y aterrizas sin daño." },
    { n:"Escalador Especializado", d:"Tu velocidad de escalar es igual a tu velocidad de movimiento. Puedes escalar en superficies difíciles y boca abajo sin tirada." },
    { n:"Garras de Hadozee", d:"Ataque desarmado: 1d4 + FUE cortante." },
  ],

  "Plasmoid [AAG]": [
    { n:"Cuerpo Amorfo", d:"Puedes pasar por aberturas de 1 pulgada sin tirada (tu equipo no cambia de tamaño). No puedes ser Agarrado o Restringido por medios no mágicos." },
    { n:"Pseudópodos", d:"2 pseudópodos extensibles hasta 10 pies para manipular objetos o realizar Atletismo a distancia." },
    { n:"Resistencia al Ácido", d:"Resistencia al daño de ácido." },
    { n:"Aguantar la Respiración", d:"Puedes aguantar la respiración indefinidamente." },
  ],

  "Thri-kreen [AAG]": [
    { n:"Cuatro Brazos", d:"Tienes 2 brazos secundarios además de los primarios. Pueden sostener objetos, escudos o armas ligeras, pero no pueden usarse para ataques adicionales ni conjuros." },
    { n:"Camuflaje", d:"Como Acción Adicional, cambias el color de tu caparazón para mimetizarte: ventaja en Sigilo hasta que te muevas o ataques." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Mandíbulas", d:"Ataque desarmado con mandíbulas: 1d6 + FUE perforante." },
  ],

};
