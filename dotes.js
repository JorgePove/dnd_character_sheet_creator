/* ═══════════════════════════════════════════════════════
   dotes.js — Dotes D&D 5e (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const DND_DOTES = [

  /* ════════════════════════════════
     DOTES DE ORIGEN (PHB 2024)
     Se toman al Nivel 1
  ════════════════════════════════ */
  { n:"Alert", tipo:"Origen", d:"+5 a la Iniciativa. No puedes ser sorprendido. Las criaturas ocultas no obtienen ventaja en ataques contra ti." },
  { n:"Crafter", tipo:"Origen", d:"Competencia en 3 herramientas de artesano. Cuando compras objetos no mágicos, obtienes artículos adicionales por valor del 20% de lo gastado." },
  { n:"Healer", tipo:"Origen", d:"Cuando usas un botiquín para estabilizar a una criatura, recupera 1 PG. Como Acción, usa un botiquín para curar 1d6 + 4 + número de Dados de Golpe máximos del objetivo (1 vez por criatura por descanso corto)." },
  { n:"Lucky", tipo:"Origen", d:"3 puntos de suerte/descanso largo. Gástalos para tirar 1 dado adicional en ataque, habilidad o salvación (tuyo o del atacante) y elegir cuál usar." },
  { n:"Magic Initiate", tipo:"Origen", d:"Elige una lista de conjuros: aprende 2 trucos y 1 conjuro de Nv.1 (lanzable 1 vez/descanso largo sin espacio, o con espacios si tienes)." },
  { n:"Musician", tipo:"Origen", d:"Competencia en 3 instrumentos musicales. Tras un descanso corto con música, hasta 6 aliados que te escuchen ganan Inspiración." },
  { n:"Savage Attacker", tipo:"Origen", d:"1 vez/turno al hacer un ataque cuerpo a cuerpo, puedes re-tirar los dados de daño del arma y quedarte con el resultado más alto." },
  { n:"Skilled", tipo:"Origen", d:"Competencia en 3 habilidades o herramientas de tu elección." },
  { n:"Tavern Brawler", tipo:"Origen", d:"+1 FUE o CON. Competencia con objetos improvisados. Los ataques desarmados hacen 1d4. Al golpear con desarmado u objeto improvisado, puedes aferrar al objetivo como Acción Adicional." },
  { n:"Tough", tipo:"Origen", d:"+2 PG máximos por nivel actual y futuro." },

  /* ════════════════════════════════
     DOTES GENERALES (PHB 2014)
  ════════════════════════════════ */
  { n:"Actor", tipo:"General", d:"+1 CAR. Ventaja en Actuación y Engaño al hacerse pasar por otro. Puedes imitar la voz de una persona conocida." },
  { n:"Athlete", tipo:"General", d:"+1 FUE o DES. Levantarte de tumbado cuesta solo 5 pies de movimiento. Escalar no cuesta movimiento adicional. Salto largo/alto sin carrerilla cuenta como si la tuvieras." },
  { n:"Charger", tipo:"General", d:"Si usas Correr como Acción y luego atacas con Acción Adicional, añades +5 daño o empujas 10 pies al objetivo." },
  { n:"Crossbow Expert", tipo:"General", d:"Ignoras la propiedad de carga en ballestas. Atacar en cuerpo a cuerpo no impone desventaja en ataques de ballesta. Con Acción Adicional puedes disparar con ballesta de mano." },
  { n:"Defensive Duelist", tipo:"General", d:"Req. DES 13. Con arma de finura: Reacción para añadir bono de competencia a tu CA contra un ataque." },
  { n:"Dual Wielder", tipo:"General", d:"+1 CA con dos armas. Puedes luchar con dos armas no ligeras. Puedes sacar o guardar dos armas de una vez." },
  { n:"Dungeon Delver", tipo:"General", d:"Ventaja en Percepción/Investigación para puertas/pasajes secretos. Ventaja en salvaciones vs. trampas. Resistencia al daño de trampas. Puedes buscar trampas a paso normal." },
  { n:"Durable", tipo:"General", d:"+1 CON. Al gastar Dados de Golpe en descanso corto, el mínimo recuperado = 2 × modificador CON." },
  { n:"Elemental Adept", tipo:"General", d:"Req. capacidad de lanzar conjuros. Elige Ácido, Frío, Fuego, Rayo o Trueno: tus conjuros de ese tipo ignoran resistencia y tratan los 1 como 2." },
  { n:"Grappler", tipo:"General", d:"Req. FUE 13. Ventaja en ataques contra criatura que aferras. Puedes restringir a 1 criatura de tu tamaño o menor (ambos quedan Restringidos)." },
  { n:"Great Weapon Master", tipo:"General", d:"Al hacer crítico o matar con arma pesada: ataque adicional con Acción Adicional. Puedes aceptar -5 ataque para +10 daño." },
  { n:"Healer (PHB14)", tipo:"General", d:"Usar botiquín estabiliza y da 1 PG. Como Acción, usa botiquín para curar 1d6+4+Dados de Golpe (1/criatura/descanso corto)." },
  { n:"Heavily Armored", tipo:"General", d:"Req. competencia en armadura media. Ganas competencia en armadura pesada y +1 FUE." },
  { n:"Heavy Armor Master", tipo:"General", d:"Req. competencia en armadura pesada. +1 FUE. Mientras lleves armadura pesada, el daño no mágico de ataques se reduce en 3." },
  { n:"Inspiring Leader", tipo:"General", d:"Req. CAR 13. Tras un descanso corto, hasta 6 aliados que te escuchen ganan PG temporales = nivel + mod CAR." },
  { n:"Keen Mind", tipo:"General", d:"+1 INT. Siempre sabes el norte. Recuerdas todo lo que has visto u oído en el último mes." },
  { n:"Lightly Armored", tipo:"General", d:"+1 FUE o DES. Ganas competencia en armadura ligera." },
  { n:"Linguist", tipo:"General", d:"+1 INT. Aprendes 3 idiomas. Puedes crear y descifrar cifrados." },
  { n:"Lucky (PHB14)", tipo:"General", d:"3 puntos/descanso largo: tira dado adicional en ataque, habilidad o salvación tuya; o en ataque contra ti. Elige el resultado." },
  { n:"Mage Slayer", tipo:"General", d:"Reacción cuando criatura a 5 pies lanza un conjuro: la atacas. Ventaja en salvaciones vs. conjuros de criaturas a 5 pies. Concentración de criaturas a 5 pies tiene desventaja en CON." },
  { n:"Magic Initiate (PHB14)", tipo:"General", d:"Elige lista: aprende 2 trucos y 1 conjuro de Nv.1 (1 vez/descanso largo sin espacio)." },
  { n:"Martial Adept", tipo:"General", d:"Aprendes 2 maniobras de Maestro de Batalla y obtienes 1 Dado de Superioridad d6 (aparte de los del Guerrero si los tienes)." },
  { n:"Medium Armor Master", tipo:"General", d:"Req. competencia en armadura media. Sin desventaja en Sigilo con armadura media. Con armadura media, CA = 12 + DES (sin límite de +2)." },
  { n:"Mobile", tipo:"General", d:"+10 pies de velocidad. Al usar Correr, ignoras terreno difícil. Al atacar a una criatura, no provoca ataques de oportunidad contra ti ese turno." },
  { n:"Moderately Armored", tipo:"General", d:"Req. competencia en armadura ligera. Ganas competencia en armadura media y escudos y +1 FUE o DES." },
  { n:"Mounted Combatant", tipo:"General", d:"Ventaja en ataques a criaturas desmontadas menores que tu montura. Puedes redirigir ataques vs. tu montura hacia ti. Tu montura pasa DEX en área sin daño si tiene éxito." },
  { n:"Observant", tipo:"General", d:"+1 INT o SAB. Lees labios. +5 a Percepción e Investigación pasivas." },
  { n:"Polearm Master", tipo:"General", d:"Con alabarda, lanza, bastón o guadaña: ataque Adicional con el extremo del arma (1d4 contundente). Ataques de oportunidad cuando una criatura entra a 10 pies." },
  { n:"Resilient", tipo:"General", d:"+1 a estadística elegida. Ganas competencia en esa estadística para tiradas de salvación." },
  { n:"Ritual Caster", tipo:"General", d:"Req. INT o SAB 13. Libro de rituales con 2 conjuros de ritual de Nv.1. Puedes copiar más conjuros de ritual." },
  { n:"Savage Attacker (PHB14)", tipo:"General", d:"1 vez/turno: re-tira dados de daño de arma cuerpo a cuerpo y elige el mejor resultado." },
  { n:"Sentinel", tipo:"General", d:"Cuando golpeas con ataque de oportunidad: velocidad del objetivo = 0. Ataques de oportunidad aunque use Desengancharse. Reacción para atacar cuando criatura a 5 pies ataca a otro." },
  { n:"Sharpshooter", tipo:"General", d:"Sin penalización por alcance largo. Ignoras media y tres cuartos de cobertura. Puedes aceptar -5 ataque para +10 daño en ranged." },
  { n:"Shield Master", tipo:"General", d:"Con escudo: Acción Adicional para empujar. Añades bono de escudo a salvaciones DEX vs. un efecto. Reacción para no recibir daño si pasas DEX." },
  { n:"Skilled (PHB14)", tipo:"General", d:"Competencia en 3 habilidades o herramientas." },
  { n:"Skulker", tipo:"General", d:"Req. DES 13. Esconderte con visión leve. Al fallar sigilo con ataque a distancia, no te revelan. Penumbra no es desventaja en Percepción visual." },
  { n:"Spell Sniper", tipo:"General", d:"Req. capacidad de lanzar conjuros. Elige lista: aprendes 1 truco de ataque. Alcance de conjuros de ataque se duplica. Ignoras media y tres cuartos de cobertura con conjuros." },
  { n:"Tavern Brawler (PHB14)", tipo:"General", d:"+1 FUE o CON. Competencia con objetos improvisados. Desarmados: 1d4. Al golpear, puedes aferrar como Acción Adicional." },
  { n:"Tough (PHB14)", tipo:"General", d:"+2 PG máximos por nivel actual y futuro." },
  { n:"War Caster", tipo:"General", d:"Req. capacidad de lanzar conjuros. Ventaja en CON para concentración. Componentes somáticos con manos ocupadas. Puedes lanzar conjuros como ataque de oportunidad (Reacción)." },
  { n:"Weapon Master", tipo:"General", d:"+1 FUE o DES. Ganas competencia en 4 armas de tu elección." },

  /* ════════════════════════════════
     DOTES XGE
  ════════════════════════════════ */
  { n:"Bountiful Luck", tipo:"General (XGE)", d:"Req. Mediano. Cuando un aliado a 30 pies saque 1 en ataque, habilidad o salvación, puedes usar Reacción para que vuelva a tirar." },
  { n:"Dragon Fear", tipo:"General (XGE)", d:"Req. Draconido. +1 FUE, CON o CAR. Puedes exhalar miedo en lugar de aliento: criaturas en el área hacen SAB o quedan Asustadas 1 minuto." },
  { n:"Dragon Hide", tipo:"General (XGE)", d:"Req. Draconido. +1 FUE, CON o CAR. CA = 13 + DES sin armadura. Las garras son armas naturales: 1d4 cortante." },
  { n:"Drow High Magic", tipo:"General (XGE)", d:"Req. Drow. Detectar Magia a voluntad. Levitar y Disipar Magia 1 vez/descanso largo sin espacio." },
  { n:"Dwarven Fortitude", tipo:"General (XGE)", d:"Req. Enano. +1 CON. En combate puedes Esquivar como Acción y gastar 1 Dado de Golpe para recuperar PG." },
  { n:"Elven Accuracy", tipo:"General (XGE)", d:"Req. Elfo o Semielfo. +1 DES, INT, SAB o CAR. Cuando tengas ventaja en ataque con esas estadísticas, tira el dado 3 veces y elige el mejor." },
  { n:"Fade Away", tipo:"General (XGE)", d:"Req. Gnomo. +1 DES o INT. Reacción al recibir daño: te vuelves invisible hasta atacar o el final de tu siguiente turno (1/descanso corto)." },
  { n:"Fey Teleportation", tipo:"General (XGE)", d:"Req. Alto Elfo. +1 INT o CAR. Aprendes Élfico. Paso Brumoso 1 vez/descanso corto sin espacio." },
  { n:"Flames of Phlegethos", tipo:"General (XGE)", d:"Req. Tiefling. +1 INT o CAR. Al lanzar conjuro de fuego, re-tira el 1. Cuando lanzas conjuro de fuego, llamas a tu alrededor 1 turno (+1d4 fuego a quien te golpee)." },
  { n:"Infernal Constitution", tipo:"General (XGE)", d:"Req. Tiefling. +1 CON. Resistencia a frío y veneno. Ventaja en salvaciones contra veneno." },
  { n:"Orcish Fury", tipo:"General (XGE)", d:"Req. Semiorco. +1 FUE o CON. Al golpear con arma simple o marcial, añades 1 dado adicional de daño del arma. Reacción al usar Resistencia Implacable: realizas 1 ataque." },
  { n:"Prodigy", tipo:"General (XGE)", d:"Req. Humano o Semielfo. Ganas 1 habilidad, 1 herramienta y 1 idioma. Doble competencia en 1 habilidad que ya tengas." },
  { n:"Second Chance", tipo:"General (XGE)", d:"Req. Mediano. +1 DES, CON o CAR. Reacción cuando te golpean: fuerzas a re-tirar el ataque (1/descanso corto o largo)." },
  { n:"Squat Nimbleness", tipo:"General (XGE)", d:"Req. Enano o Mediano. +1 FUE o DES. +5 pies de velocidad. Competencia en Atletismo o Acrobacias. Ventaja en FUE/DES para escapar de aferres." },
  { n:"Wood Elf Magic", tipo:"General (XGE)", d:"Req. Elfo del Bosque. Aprendes Pasar Sin Rastro, Hablar con Animales (1/descanso largo) y 1 truco de Druida." },

  /* ════════════════════════════════
     DOTES TCE
  ════════════════════════════════ */
  { n:"Artificer Initiate", tipo:"General (TCE)", d:"Aprende 1 truco de Artificer (INT) y 1 conjuro de Nv.1 de Artificer (1/descanso largo). Competencia en 1 herramienta artesanal." },
  { n:"Chef", tipo:"General (TCE)", d:"+1 CON o SAB. Competencia en herramientas de cocinero. Tras descanso corto, hasta nivel×CON PG temporales repartibles. Cenas especiales otorgan PG temporales a aliados." },
  { n:"Crusher", tipo:"General (TCE)", d:"+1 FUE o CON. Al golpear con daño contundente, mueves objetivo 5 pies. 1 vez/turno en crítico contundente: aliados tienen ventaja contra ese objetivo hasta tu siguiente turno." },
  { n:"Eldritch Adept", tipo:"General (TCE)", d:"Req. Pacto Mágico o capacidad de lanzar conjuros. Aprendes 1 Invocación Mística del Brujo (sin los requisitos de nivel)." },
  { n:"Fey Touched", tipo:"General (TCE)", d:"+1 INT, SAB o CAR. Aprendes Paso Brumoso y 1 conjuro de Nv.1 de Adivinación o Encantamiento. 1 vez/descanso largo cada uno sin espacio." },
  { n:"Fighting Initiate", tipo:"General (TCE)", d:"Req. competencia en armadura marcial. Aprendes 1 Estilo de Combate del Guerrero. Puedes cambiarlo al subir de nivel." },
  { n:"Gunner", tipo:"General (TCE)", d:"+1 DES. Competencia en armas de fuego. Ignoras propiedad de carga. Atacar en cuerpo a cuerpo no impone desventaja en armas de fuego." },
  { n:"Metamagic Adept", tipo:"General (TCE)", d:"Req. capacidad de lanzar conjuros. Aprendes 2 opciones de Metamagia y ganas 2 Puntos de Hechicería." },
  { n:"Piercer", tipo:"General (TCE)", d:"+1 FUE o DES. 1 vez/turno en daño perforante: re-tira 1 dado de daño. En crítico perforante: tira 1 dado extra." },
  { n:"Poisoner", tipo:"General (TCE)", d:"Ignorar resistencia al veneno. Acción Adicional para envenenar arma (1d8 veneno 1 minuto). Competencia en kit de venenos." },
  { n:"Shadow Touched", tipo:"General (TCE)", d:"+1 INT, SAB o CAR. Aprendes Invisibilidad y 1 conjuro de Nv.1 de Ilusión o Nigromancia. 1 vez/descanso largo cada uno sin espacio." },
  { n:"Skill Expert", tipo:"General (TCE)", d:"+1 a cualquier estadística. Competencia en 1 habilidad. Doble competencia en 1 habilidad que ya tengas." },
  { n:"Slasher", tipo:"General (TCE)", d:"+1 FUE o DES. Al golpear con daño cortante: -10 pies de velocidad al objetivo hasta tu siguiente turno. En crítico cortante: desventaja en ataques del objetivo hasta tu siguiente turno." },
  { n:"Telekinetic", tipo:"General (TCE)", d:"+1 INT, SAB o CAR. Aprendes truco Manos de Mago (invisible). Como Acción Adicional, empujas o atraes 5 pies a criatura a 30 pies (STR CD = 8 + competencia + estadística)." },
  { n:"Telepathic", tipo:"General (TCE)", d:"+1 INT, SAB o CAR. Telepatía a 60 pies con criaturas que veas. Detectar Pensamientos 1/descanso largo sin espacio." },
  { n:"Tracker", tipo:"General (TCE)", d:"+1 SAB. Aprende Marca del Cazador (1/descanso largo sin espacio). Competencia en Supervivencia." },

  /* ════════════════════════════════
     FIGHTING STYLES (como dotes PHB24)
  ════════════════════════════════ */
  { n:"Archery", tipo:"Estilo de Combate", d:"+2 a tiradas de ataque con armas a distancia." },
  { n:"Blind Fighting", tipo:"Estilo de Combate", d:"Visión ciega 10 pies; puedes ver criaturas invisibles en ese rango." },
  { n:"Defense", tipo:"Estilo de Combate", d:"+1 CA mientras lleves armadura." },
  { n:"Dueling", tipo:"Estilo de Combate", d:"+2 daño con arma a 1 mano si la otra no sostiene arma." },
  { n:"Great Weapon Fighting", tipo:"Estilo de Combate", d:"Con arma a 2 manos o versátil con 2 manos: re-tira 1 y 2 en dados de daño (debes usar el nuevo resultado)." },
  { n:"Interception", tipo:"Estilo de Combate", d:"Reacción cuando un aliado a 5 pies recibe daño: reduce el daño en 1d10 + bono competencia." },
  { n:"Protection", tipo:"Estilo de Combate", d:"Con escudo: Reacción para imponer desventaja en un ataque contra aliado a 5 pies." },
  { n:"Superior Technique", tipo:"Estilo de Combate", d:"Aprende 1 maniobra de Maestro de Batalla y ganas 1 Dado de Superioridad d6." },
  { n:"Thrown Weapon Fighting", tipo:"Estilo de Combate", d:"Sacar arma arrojadiza como parte del ataque. +2 daño con armas arrojadizas." },
  { n:"Two-Weapon Fighting", tipo:"Estilo de Combate", d:"Con combate con dos armas, añades estadística al daño del segundo ataque." },
  { n:"Unarmed Fighting", tipo:"Estilo de Combate", d:"Ataques desarmados hacen 1d6 (1d8 si tienes las manos libres). Al inicio de tu turno, criaturas que aferres reciben 1d4 contundente." },

  /* ════════════════════════════════
     EPIC BOONS (PHB 2024, Nv.19+)
  ════════════════════════════════ */
  { n:"Boon of Combat Prowess", tipo:"Epic Boon", d:"+1 a estadística de tu elección (máx. 30). 1 vez/turno cuando falles un ataque: acierta automáticamente." },
  { n:"Boon of Dimensional Travel", tipo:"Epic Boon", d:"+1 a estadística de tu elección. Como Acción Adicional, teletransportas 30 pies a espacio vacío visible." },
  { n:"Boon of Energy Resistance", tipo:"Epic Boon", d:"+1 a estadística de tu elección. Resistencia a 2 tipos de daño a tu elección; puedes cambiarlos tras un descanso largo." },
  { n:"Boon of Fate", tipo:"Epic Boon", d:"+1 a estadística de tu elección. 1 vez/turno cuando tú u otro a 60 pies hagáis una tirada, añades o restas 2d4 al resultado (antes de saber si tiene éxito)." },
  { n:"Boon of Fortitude", tipo:"Epic Boon", d:"+1 a estadística de tu elección. PG máximos aumentan en 40." },
  { n:"Boon of Irresistible Offense", tipo:"Epic Boon", d:"+1 FUE o DES. Tus ataques ignoran resistencia al daño. 1 vez/turno cuando golpees puedes cambiar el tipo de daño a fuerza." },
  { n:"Boon of Recovery", tipo:"Epic Boon", d:"+1 a estadística de tu elección. 1/descanso largo: cuando caes a 0 PG, te quedas en 1 PG y recuperas la mitad de tus PG máximos." },
  { n:"Boon of Skill", tipo:"Epic Boon", d:"+1 a estadística de tu elección. Competencia en todas las habilidades; doble competencia en 1 habilidad de tu elección." },
  { n:"Boon of Speed", tipo:"Epic Boon", d:"+1 DES. +30 pies de velocidad. Como Acción Adicional, Desengancharte." },
  { n:"Boon of Spell Recall", tipo:"Epic Boon", d:"+1 INT, SAB o CAR. 1/descanso largo: lanzas cualquier conjuro que conozcas de Nv.1-4 sin gastar espacio." },
  { n:"Boon of the Night Spirit", tipo:"Epic Boon", d:"+1 a estadística de tu elección. En penumbra u oscuridad: resistencia a todo daño; puedes teletransportarte 60 pies a otro lugar oscuro (Acción Adicional)." },
  { n:"Boon of Truesight", tipo:"Epic Boon", d:"+1 a estadística de tu elección. Visión verdadera 60 pies." },
];
