/* ═══════════════════════════════════════════════════════
   especies.js — Especies jugables D&D 5e (todas las fuentes)
   PHB 2014 · PHB 2024 · Mordenkainen's · Volo's · Ravnica
   Theros · Strixhaven · Spelljammer · MotM · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const DND_ESPECIES = {

  /* ── PHB 2014 / 2024 ── */
  "Humano": [
    { n:"Aumento de Característica", d:"Todas tus estadísticas aumentan en 1." },
    { n:"Idiomas", d:"Común + 1 idioma adicional." },
    { n:"Dotes (variante PHB14)", d:"En lugar de aumento de estadísticas, obtén 1 dote y competencia en 1 habilidad adicional." },
  ],
  "Elfo": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Agudieza Élfica", d:"Competencia en Percepción." },
    { n:"Ancestro Feérico", d:"Ventaja contra ser encantado; magia no puede dormirte." },
    { n:"Trance", d:"Meditas 4 horas en lugar de dormir 8." },
    { n:"Subespecie", d:"Alto Elfo, Elfo del Bosque, Drow (subvariantes con rasgos propios)." },
  ],
  "Enano": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resiliencia Enana", d:"Ventaja en salvaciones contra veneno; resistencia al daño por veneno." },
    { n:"Formación en Combate Enano", d:"Competencia en hacha de guerra, hacha de mano, martillo ligero y de guerra." },
    { n:"Competencia con Herramientas", d:"Competencia en herramientas de herrero, cervecero o cantero (elige 1)." },
    { n:"Sentido de la Piedra", d:"Doble competencia en Historia sobre construcciones en piedra." },
    { n:"Subespecie", d:"Enano de las Colinas (+1 SAB, +1 PG/nivel) o Enano de las Montañas (+2 FUE, armadura ligera/media)." },
  ],
  "Mediano": [
    { n:"Suertudo", d:"Al sacar 1 en ataque, habilidad o salvación, vuelves a tirar." },
    { n:"Valiente", d:"Ventaja en salvaciones contra miedo." },
    { n:"Agilidad de Mediano", d:"Puedes moverte a través del espacio de cualquier criatura de tamaño Mayor o superior." },
    { n:"Subespecie", d:"Pie Ligero (sigilo, bonificación CAR) o Panzabombo (+2 CON, resistencia veneno)." },
  ],
  "Gnomo": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Astucia Gnómica", d:"Ventaja en salvaciones de INT, SAB y CAR contra magia." },
    { n:"Subespecie", d:"Gnomo de la Roca (competencia en herramientas de artesano, familiar mecánico) o Gnomo del Bosque (Ilusión Menor, hablar con animales pequeños)." },
  ],
  "Semielfo": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Ancestro Feérico", d:"Ventaja contra encantamiento; no puede dormirte la magia." },
    { n:"Versatilidad Racial", d:"+2 CAR, +1 a dos estadísticas de tu elección; competencia en 2 habilidades adicionales." },
  ],
  "Semiorco": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Amenazante", d:"Competencia en Intimidación." },
    { n:"Resistencia Implacable", d:"1/descanso largo: cuando caes a 0 PG, te quedas en 1 PG." },
    { n:"Ataques Salvajes", d:"En un crítico con arma cuerpo a cuerpo, tira 1 dado adicional de daño del arma." },
  ],
  "Tiefling": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resistencia Infernal", d:"Resistencia al daño de fuego." },
    { n:"Legado Infernal", d:"Truco Taumaturgia (Nv.1), Represalia Infernal (Nv.3), Oscuridad (Nv.5). 1/descanso largo sin espacio." },
  ],
  "Draconido": [
    { n:"Ascendencia Dracónica", d:"Elige tipo de dragón: define tipo de daño del aliento y tu resistencia." },
    { n:"Arma de Aliento", d:"Área (cono 15p o línea 5×30p), daño 2d6 escalando a 3d6/4d6. 1/descanso corto." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de tu ascendencia dracónica." },
  ],

  /* ── Mordenkainen's Tome of Foes / Monsters of the Multiverse ── */
  "Elfo Eladrin": [
    { n:"Paso Feérico", d:"Teletransporte 30 pies a espacio vacío (1/descanso corto). Efecto extra según estación: Otoño (encanto), Invierno (miedo), Primavera (empuje), Verano (daño de fuego)." },
    { n:"Ancestro Feérico", d:"Ventaja contra encantamiento; magia no puede dormirte." },
  ],
  "Githyanki": [
    { n:"Mejora Psiónica", d:"+2 INT, +1 FUE." },
    { n:"Conocimiento Marcial Githyanki", d:"Competencia en armaduras ligeras y medias, espadas cortas, espadas largas y lanzas." },
    { n:"Psiónica Githyanki", d:"Truco Manos de Mago (Nv.1), Salto (Nv.3), Paso Brumoso (Nv.5). 1/descanso largo sin espacio." },
  ],
  "Githzerai": [
    { n:"Defensa Mental Githzerai", d:"Ventaja en tiradas de salvación contra encantamiento y asustado." },
    { n:"Psiónica Githzerai", d:"Manos de Mago (Nv.1), Escudo (Nv.3), Detectar Pensamientos (Nv.5). 1/descanso largo." },
  ],
  "Yuan-Ti Pureblood": [
    { n:"Inmunidad al Veneno", d:"Inmune al veneno y a la condición envenenado." },
    { n:"Magia de la Mente de Serpiente", d:"Truco Veneno, Sugestión y Magia Sobrante (Nv.3 y 5). 1/descanso largo sin espacio." },
    { n:"Resistencia Mágica", d:"Ventaja en salvaciones contra conjuros y efectos mágicos." },
  ],
  "Kenku": [
    { n:"Mímesis", d:"Puedes imitar perfectamente sonidos y voces que hayas escuchado." },
    { n:"Tramposo Experto", d:"Competencia en Engaño y Sigilo." },
    { n:"Acceso a Habilidades de Kenku", d:"Competencia adicional en Acrobacias, Trapacería o Percepción (según variante)." },
  ],
  "Lizardfolk": [
    { n:"Mordisco", d:"Ataque desarmado: 1d6 + FUE perforante." },
    { n:"Aguantar la Respiración", d:"Puede aguantar el aliento hasta 15 minutos." },
    { n:"Naturaleza Hambreada", d:"Puedes comer a una criatura muerta para ganar PG temporales = CON mod + nivel." },
    { n:"Armadura Natural", d:"CA = 13 + DES sin armadura." },
  ],
  "Aasimar": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resistencia Celestial", d:"Resistencia al daño necrótico y radiante." },
    { n:"Manos Curativas", d:"1/descanso largo: curas PG = nivel a una criatura tocada." },
    { n:"Subespecie", d:"Protector (alas, daño radiante), Vengador (vuelo, necrótico) o Caído (explosión necrótica área)." },
  ],
  "Bugbear": [
    { n:"Sorpresa Brutal", d:"+2d6 daño si atacas en el primer turno a una criatura sorprendida." },
    { n:"Alcance Largo", d:"Tus ataques cuerpo a cuerpo tienen alcance 10 pies gracias a tus brazos." },
    { n:"Sigiloso", d:"Competencia en Sigilo." },
  ],
  "Firbolg": [
    { n:"Magia Firbolg", d:"Hablar con Animales y Detectar Magia (1/descanso corto cada uno, sin espacio)." },
    { n:"Paso Oculto", d:"Como Acción Adicional, te vuelves invisible hasta el inicio de tu siguiente turno (1/descanso corto)." },
    { n:"Discurso Poderoso de la Bestia", d:"Puedes comunicarte con bestias y plantas como si compartieras idioma." },
  ],
  "Goblin": [
    { n:"Fuga", d:"Como Acción Adicional, Desengancharse o Esconderse." },
    { n:"Freneticismo", d:"1/descanso largo: realiza una acción adicional en tu turno." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],
  "Hobgoblin": [
    { n:"Formación Marcial", d:"Competencia en 2 armas marciales y armadura ligera." },
    { n:"Guardia Salvadora", d:"1/descanso largo: cuando un aliado visible a 30 pies falla una salvación, puedes usar Reacción para que vuelva a tirarla." },
  ],
  "Kobold": [
    { n:"Tácticas de Manada", d:"Ventaja en ataques si un aliado no incapacitado está adyacente al objetivo." },
    { n:"Sensibilidad a la Luz del Sol", d:"Desventaja en ataques y Percepción si tú o el objetivo estáis en luz solar directa." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],
  "Orc": [
    { n:"Agressivo", d:"Como Acción Adicional, te mueves hasta tu velocidad hacia un enemigo." },
    { n:"Formación Marcial", d:"Competencia en lanza, garrote, jabalina y hacha de mano." },
    { n:"Poderosa Construcción", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
  ],
  "Troll" : [
    { n:"Regeneración", d:"Recuperas 1d4 PG al inicio de tu turno si tienes al menos 1 PG y no has recibido daño de ácido o fuego." },
    { n:"Mordisco Poderoso", d:"Ataque de mordisco desarmado: 1d6 perforante." },
  ],

  /* ── Volo's Guide to Monsters ── */
  "Tabaxi": [
    { n:"Velocidad Felina", d:"1/descanso corto: muévete el doble de tu velocidad en tu turno." },
    { n:"Garras", d:"Ataque desarmado: 1d4 + FUE cortante. Trepas a tu velocidad." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Sentidos Agudos", d:"Competencia en Percepción." },
  ],
  "Triton": [
    { n:"Control del Agua y el Aire", d:"Hablar con Animales (acuáticos), Crear o Destruir Agua, Llamada del Rayo (Nv.3, 5). 1/descanso largo." },
    { n:"Emissario del Mar", d:"Puedes comunicarte con bestias acuáticas." },
    { n:"Guardianes de las Profundidades", d:"Resistencia al frío; velocidad de natación 30 pies." },
  ],
  "Tortle": [
    { n:"Armadura Natural", d:"CA = 17 (fija, no añades DES)." },
    { n:"Caparazón Defensivo", d:"Acción: te retraes en el caparazón. CA = 19, pero velocidad 0 y solo Acción para salir." },
    { n:"Aguantar la Respiración", d:"Aguanta hasta 1 hora." },
  ],
  "Loxodon": [
    { n:"Trompa", d:"Puedes levantar objetos o criaturas de hasta 400 lb con la trompa." },
    { n:"Resistencia Natural", d:"Puedes añadir SAB a salvaciones de CON para concentración." },
    { n:"Memoria Poderosa", d:"Competencia doble en Historia." },
  ],
  "Simic Hybrid": [
    { n:"Modificación Animal", d:"Al nivel 1 y 5, elige 1 modificación de una lista (agallas, garras, camuflaje, tentáculos, piel con pinchos, alas membranosas...)." },
  ],
  "Vedalken": [
    { n:"Imperturbable", d:"Ventaja en tiradas de salvación de INT, SAB y CAR." },
    { n:"Acumulación de Conocimientos", d:"Competencia en 2 habilidades o herramientas adicionales de tu elección." },
  ],

  /* ── Ravnica / Guildmaster's Guide ── */
  "Centauro": [
    { n:"Carga", d:"Si te mueves 30 pies en línea recta y golpeas con arma cuerpo a cuerpo, añades 1d6 al daño y empujas al objetivo (FUE CD)." },
    { n:"Pezuñas", d:"Ataque desarmado: 1d6 + FUE contundente." },
    { n:"Tamaño Grande", d:"Cuentas como Grande para cargar, empujar, arrastrar y levantar." },
  ],
  "Minotauro": [
    { n:"Carga Cornuda", d:"Si te mueves 10 pies en línea recta y golpeas con los cuernos, añades 2d6 al daño y empujas al objetivo (FUE CD)." },
    { n:"Cuernos", d:"Ataque desarmado: 1d6 + FUE perforante." },
    { n:"Laberíntico Recuerdo", d:"Ventaja en pruebas de INT para recordar el trazado de caminos." },
  ],

  /* ── Theros / Mythic Odysseys ── */
  "Leonin": [
    { n:"Rugido del Rey", d:"1/descanso largo: como Acción Adicional, asustas a criaturas a 10 pies (SAB CD)." },
    { n:"Garras del León", d:"Ataque desarmado: 1d6 + FUE cortante." },
    { n:"Sentidos Leoninos", d:"Competencia en Percepción." },
  ],
  "Satiro": [
    { n:"Magia Feérica", d:"Truco Encantamiento, Encantar Persona (Nv.3), Pasar Sin Rastro (Nv.5). 1/descanso largo." },
    { n:"Mirthful Leaps", d:"Cuando saltas, añades 1d8 pies a la distancia de salto (sin coste de movimiento)." },
    { n:"Resistencia Feérica", d:"Ventaja en salvaciones contra encantamiento y hechizos de encantamiento." },
  ],

  /* ── Strixhaven ── */
  "Owlin": [
    { n:"Vuelo", d:"Velocidad de vuelo = tu velocidad de movimiento." },
    { n:"Visión en la Oscuridad", d:"120 pies." },
    { n:"Alas Silenciosas", d:"Competencia en Sigilo." },
  ],

  /* ── Spelljammer ── */
  "Autognome": [
    { n:"Cuerpo Mecánico", d:"Inmune al veneno, enfermedad y al sueño mágico. No necesitas comer, beber ni respirar." },
    { n:"Reparación Integrada", d:"1/descanso largo: recuperas PG = 1d6 + nivel usando herramientas de artesano." },
    { n:"Conocimiento Integrado", d:"Competencia en 1 tipo de herramientas artesanales." },
  ],
  "Giff": [
    { n:"Aptitud con Armas de Fuego", d:"Competencia con pistolas, mosquetes y otras armas de fuego." },
    { n:"Hipopótamo de Construcción Poderosa", d:"Cuentas como una categoría mayor para cargar/empujar." },
    { n:"Impacto Explosivo", d:"1/descanso corto: tu primer ataque cuerpo a cuerpo puede causar una onda de choque (CON CD o aturdido)." },
  ],
  "Hadozee": [
    { n:"Planeo", d:"Si caes más de 10 pies con los brazos extendidos, puedes planear y caer sin daño." },
    { n:"Trepador Experto", d:"Trepar no te cuesta movimiento adicional." },
  ],
  "Plasmoid": [
    { n:"Cuerpo Amorfo", d:"Puedes moverte a través de espacios tan pequeños como 1 pulgada sin esfuerzo." },
    { n:"Pseudópodos", d:"Puedes crear extremidades temporales para tareas específicas." },
    { n:"Resistencia Ácida", d:"Resistencia al daño de ácido." },
  ],
  "Thri-kreen": [
    { n:"Cuatro Brazos", d:"Tienes 2 brazos adicionales (no puedes usarlos para lanzar conjuros o ataques extra)." },
    { n:"Camuflaje", d:"Puedes cambiar el color de tu piel: ventaja en Sigilo en entornos naturales." },
    { n:"Visión en la Oscuridad", d:"60 pies. También visión en luz tenue hasta 30 pies adicionales." },
  ],

  /* ── Monsters of the Multiverse ── */
  "Aarakocra": [
    { n:"Vuelo", d:"Velocidad de vuelo 50 pies. No puedes llevar armadura media ni pesada para volar." },
    { n:"Garras y Pico", d:"Ataque desarmado: 1d4 + FUE cortante (garras)." },
    { n:"Lenguaje del Viento", d:"Puedes comunicarte con criaturas que vuelen." },
  ],
  "Genasi de Aire": [
    { n:"Resistencia al Rayo", d:"Resistencia al daño de rayo." },
    { n:"Movimiento sin Restricciones", d:"Tu velocidad de movimiento aumenta en 5 pies." },
    { n:"Magia Genasi de Aire", d:"Pasar Sin Rastro (Nv.3), Levitar (Nv.5). 1/descanso largo sin espacio." },
  ],
  "Genasi de Tierra": [
    { n:"Resistencia al Veneno", d:"Resistencia al daño por veneno; ventaja en salvaciones contra veneno." },
    { n:"Andar por la Piedra", d:"Moverse a través de terreno de piedra o tierra no te cuesta movimiento adicional." },
    { n:"Magia Genasi de Tierra", d:"Pasar Sin Rastro (Nv.3), Pasar por las Piedras (Nv.5). 1/descanso largo." },
  ],
  "Genasi de Fuego": [
    { n:"Resistencia al Fuego", d:"Resistencia al daño de fuego." },
    { n:"Iluminación", d:"Emites luz brillante hasta 10 pies y luz tenue 10 pies adicionales. Puedes activar/desactivar esto." },
    { n:"Magia Genasi de Fuego", d:"Manos Ardientes (Nv.3), Bola de Fuego (Nv.5). 1/descanso largo sin espacio." },
  ],
  "Genasi de Agua": [
    { n:"Anfibio", d:"Puedes respirar tanto aire como agua." },
    { n:"Resistencia al Ácido", d:"Resistencia al daño de ácido." },
    { n:"Magia Genasi de Agua", d:"Crear o Destruir Agua (Nv.3), Control del Agua (Nv.5). 1/descanso largo." },
  ],
  "Shadar-kai": [
    { n:"Bendición del Cuervo", d:"Como Acción Adicional, teletransportas 30 pies a espacio vacío. Si lanzas un conjuro ese turno, ganas resistencia a todo daño hasta tu siguiente turno (1/descanso largo)." },
    { n:"Visión en la Oscuridad", d:"60 pies, incluyendo oscuridad mágica." },
    { n:"Resistencia Feérica", d:"Ventaja en salvaciones contra encantamiento." },
  ],

  /* ── EGW (Explorer's Guide to Wildemount) ── */
  "Pallid Elf": [
    { n:"Incertidumbre Curiosa", d:"Competencia en Medicina e Investigación." },
    { n:"Magia del Pallid Elf", d:"Luz de las Hadas (Nv.3), Ver Invisible (Nv.5). 1/descanso largo sin espacio." },
  ],
  "Lotusden Halfling": [
    { n:"Hijo del Bosque", d:"El terreno difícil vegetal no te cuesta movimiento adicional." },
    { n:"Magia del Lotusden", d:"Enredar (Nv.3), Hablar con Plantas (Nv.5). 1/descanso largo sin espacio." },
  ],

  /* ── TDCSR (Tal'Dorei Campaign Setting Reborn) ── */
  "Ravenite Dragonborn": [
    { n:"Ascendencia Dracónica Ravenite", d:"Tipo de dragón negro (ácido). Resistencia al ácido." },
    { n:"Arma de Aliento", d:"Línea de 30×5 pies, 2d6 ácido (escala). DEX para reducir a la mitad." },
    { n:"Venganza de los Muertos", d:"1/descanso largo: invocas una sombra de un aliado caído que te otorga ventaja en ataques durante 1 turno." },
  ],
  "Volstrucker Agent": [
    { n:"Entrenamiento Oscuro", d:"Competencia en Sigilo y Engaño con doble competencia." },
    { n:"Mente Endurecida", d:"Ventaja en salvaciones contra ser asustado." },
    { n:"Magia del Agente", d:"Disfrazarse (Nv.3), Paso Brumoso (Nv.5). 1/descanso largo." },
  ],
};
