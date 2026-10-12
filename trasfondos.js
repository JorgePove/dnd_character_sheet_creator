/* ═══════════════════════════════════════════════════════
   trasfondos.js — Trasfondos D&D 5e / 5.5e
   Fuentes: PHB 2024 · PHB 2014 · SCAG · GoS · CoS · ToA · AAG · AI · BGDiA · BGotG · BMT ·
   EGtW · GGtR · SCC · SatO · SotDQ · VRGtR · WBtW · PSA · PSI · ERftLW · HoF 2024 ·
   EFotA 2024 · ABH 2024 · THW 2024 · LFL 2024 (cada trasfondo lleva su fuente en la clave)
   Contrastado con dnd2024.wikidot.com y dnd5e.wikidot.com.
   Campos de cada trasfondo (todos opcionales salvo desc/comp/equipo):
     desc  = frase de ambientación
     asi   = 5.5e: características entre las que repartir +2/+1 o +1/+1/+1
     dote  = 5.5e: dote de origen que concede (se añade en el cuadro de Dotes);
             también en algunos 2014 recientes (AAG) que la conceden
     comp  = competencias en habilidades
     herr  = competencias con herramientas / vehículos
     idiomas = idiomas que concede (2014)
     equipo = equipo inicial (en 5.5e: opción A, o B = 50 po)
     rasgo = rasgo de trasfondo (2014)
═══════════════════════════════════════════════════════ */

const DND_TRASFONDOS = {

  /* ════════════════════════════════════════════════
     PHB 2024 (5.5e) — aumentos de característica (+2/+1 o +1/+1/+1 entre las 3 indicadas), dote de origen, 2 habilidades, 1 herramienta, equipo A (o B: 50 po)
  ════════════════════════════════════════════════ */
  "Acólito (Acolyte) [PHB 2024]": {
    desc: "Has dedicado tu vida al servicio de un templo.",
    asi: "INT, SAB o CAR",
    dote: "Magic Initiate (Clérigo)",
    comp: "Perspicacia, Religión",
    herr: "Útiles de caligrafía",
    equipo: "A: Útiles de caligrafía, libro (oraciones), símbolo sagrado, pergamino (10 hojas), túnica, 8 po · B: 50 po",
  },
  "Artesano (Artisan) [PHB 2024]": {
    desc: "Has aprendido un oficio como aprendiz de un maestro o en un gremio.",
    asi: "FUE, DES o INT",
    dote: "Crafter",
    comp: "Investigación, Persuasión",
    herr: "1 tipo de Herramientas de artesano (a elegir)",
    equipo: "A: las Herramientas de artesano elegidas, 2 bolsas, ropa de viajero, 32 po · B: 50 po",
  },
  "Charlatán (Charlatan) [PHB 2024]": {
    desc: "Sabes decir a la gente lo que quiere oír y vivir de ello.",
    asi: "DES, CON o CAR",
    dote: "Skilled",
    comp: "Engaño, Juego de Manos",
    herr: "Kit de falsificación",
    equipo: "A: Kit de falsificación, disfraz, ropa fina, 15 po · B: 50 po",
  },
  "Criminal [PHB 2024]": {
    desc: "Te ganabas la vida al margen de la ley.",
    asi: "DES, CON o INT",
    dote: "Alert",
    comp: "Juego de Manos, Sigilo",
    herr: "Herramientas de ladrón",
    equipo: "A: 2 dagas, Herramientas de ladrón, palanca, 2 bolsas, ropa de viajero, 16 po · B: 50 po",
  },
  "Artista (Entertainer) [PHB 2024]": {
    desc: "Has vivido de actuar ante el público.",
    asi: "FUE, DES o CAR",
    dote: "Musician",
    comp: "Acrobacias, Interpretación",
    herr: "1 Instrumento musical (a elegir)",
    equipo: "A: el Instrumento elegido, 2 disfraces, espejo, perfume, ropa de viajero, 11 po · B: 50 po",
  },
  "Granjero (Farmer) [PHB 2024]": {
    desc: "Creciste trabajando la tierra y cuidando animales.",
    asi: "FUE, CON o SAB",
    dote: "Tough",
    comp: "Trato con Animales, Naturaleza",
    herr: "Herramientas de carpintero",
    equipo: "A: hoz, Herramientas de carpintero, Botiquín de sanador, olla de hierro, pala, ropa de viajero, 30 po · B: 50 po",
  },
  "Guardia (Guard) [PHB 2024]": {
    desc: "Has servido vigilando una muralla, una puerta o a un señor.",
    asi: "FUE, INT o SAB",
    dote: "Alert",
    comp: "Atletismo, Percepción",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: lanza, ballesta ligera, 20 virotes, el Juego elegido, linterna de ojo de buey, grilletes, carcaj, ropa de viajero, 12 po · B: 50 po",
  },
  "Guía (Guide) [PHB 2024]": {
    desc: "Te criaste en la naturaleza y llevas a otros a través de ella.",
    asi: "DES, CON o SAB",
    dote: "Magic Initiate (Druida)",
    comp: "Sigilo, Supervivencia",
    herr: "Herramientas de cartógrafo",
    equipo: "A: arco corto, 20 flechas, Herramientas de cartógrafo, saco de dormir, carcaj, tienda, ropa de viajero, 3 po · B: 50 po",
  },
  "Ermitaño (Hermit) [PHB 2024]": {
    desc: "Viviste aislado, en meditación o estudio.",
    asi: "CON, SAB o CAR",
    dote: "Healer",
    comp: "Medicina, Religión",
    herr: "Kit de herboristería",
    equipo: "A: bastón, Kit de herboristería, saco de dormir, libro (filosofía), lámpara, 3 frascos de aceite, ropa de viajero, 16 po · B: 50 po",
  },
  "Mercader (Merchant) [PHB 2024]": {
    desc: "Te formaste comerciando y negociando.",
    asi: "CON, INT o CAR",
    dote: "Lucky",
    comp: "Trato con Animales, Persuasión",
    herr: "Herramientas de navegante",
    equipo: "A: Herramientas de navegante, 2 bolsas, ropa de viajero, 22 po · B: 50 po",
  },
  "Noble [PHB 2024]": {
    desc: "Creciste entre privilegios, etiqueta y expectativas.",
    asi: "FUE, INT o CAR",
    dote: "Skilled",
    comp: "Historia, Persuasión",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: el Juego elegido, ropa fina, perfume, 29 po · B: 50 po",
  },
  "Sabio (Sage) [PHB 2024]": {
    desc: "Pasaste años estudiando en bibliotecas y academias.",
    asi: "CON, INT o SAB",
    dote: "Magic Initiate (Mago)",
    comp: "Arcana, Historia",
    herr: "Útiles de caligrafía",
    equipo: "A: bastón, Útiles de caligrafía, libro (historia), pergamino (8 hojas), túnica, 8 po · B: 50 po",
  },
  "Marinero (Sailor) [PHB 2024]": {
    desc: "Has trabajado a bordo de barcos entre puertos y tormentas.",
    asi: "FUE, DES o SAB",
    dote: "Tavern Brawler",
    comp: "Acrobacias, Percepción",
    herr: "Herramientas de navegante",
    equipo: "A: daga, Herramientas de navegante, cuerda, ropa de viajero, 20 po · B: 50 po",
  },
  "Escriba (Scribe) [PHB 2024]": {
    desc: "Copiabas, redactabas y archivabas documentos.",
    asi: "DES, INT o SAB",
    dote: "Skilled",
    comp: "Investigación, Percepción",
    herr: "Útiles de caligrafía",
    equipo: "A: Útiles de caligrafía, ropa fina, lámpara, 3 frascos de aceite, pergamino (12 hojas), 23 po · B: 50 po",
  },
  "Soldado (Soldier) [PHB 2024]": {
    desc: "Serviste en un ejército o milicia.",
    asi: "FUE, DES o CON",
    dote: "Savage Attacker",
    comp: "Atletismo, Intimidación",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: lanza, arco corto, 20 flechas, el Juego elegido, Botiquín de sanador, carcaj, ropa de viajero, 14 po · B: 50 po",
  },
  "Caminante (Wayfarer) [PHB 2024]": {
    desc: "Creciste en la calle o viajando de un sitio a otro.",
    asi: "DES, SAB o CAR",
    dote: "Lucky",
    comp: "Perspicacia, Sigilo",
    herr: "Herramientas de ladrón",
    equipo: "A: 2 dagas, Herramientas de ladrón, 1 Juego de mesa, saco de dormir, 2 bolsas, ropa de viajero, 16 po · B: 50 po",
  },

  /* ════════════════════════════════════════════════
     PHB 2014 (5e) — 2 habilidades, herramientas, idiomas, equipo y rasgo de trasfondo. En 5.5e el aumento de característica y la dote vienen del trasfondo 2024.
  ════════════════════════════════════════════════ */
  "Acólito (Acolyte) [PHB 2014]": {
    desc: "Has pasado tu vida al servicio de un templo.",
    comp: "Perspicacia, Religión",
    idiomas: "2 a elegir",
    equipo: "Símbolo sagrado, libro de oraciones o rueda de oración, 5 varillas de incienso, vestimentas, ropa común, bolsa con 15 po.",
    rasgo: "Refugio de los Fieles: tú y tus compañeros podéis recibir curación y cuidados gratuitos en un templo, santuario u otra presencia establecida de tu fe, pero debéis aportar los componentes materiales de los conjuros. Quienes comparten tu religión te mantienen (solo a ti) con un estilo de vida modesto. Cerca de tu templo puedes pedir ayuda a los sacerdotes si no es peligrosa y sigues en buenos términos con él.",
  },
  "Charlatán (Charlatan) [PHB 2014]": {
    desc: "Siempre has sabido qué decirle a la gente.",
    comp: "Engaño, Juego de Manos",
    herr: "Kit de disfraz, Kit de falsificación",
    equipo: "Ropa fina, Kit de disfraz, herramientas de timo a elección (dados trucados, botellas de falso elixir, etc.), bolsa con 15 po.",
    rasgo: "Identidad Falsa: tienes una segunda identidad documentada (papeles, disfraz) y puedes falsificar documentos que hayas visto.",
  },
  "Criminal [PHB 2014]": {
    desc: "Eres un delincuente con experiencia. Variante Espía: mismas competencias y equipo; el rasgo pasa a llamarse Contacto Espía (Spy Contact) y el contacto enlaza con una red de espías, con el mismo efecto.",
    comp: "Engaño, Sigilo",
    herr: "1 Juego de mesa, Herramientas de ladrón",
    equipo: "Palanca, ropa común oscura con capucha, bolsa con 15 po.",
    rasgo: "Contacto Criminal: tienes un contacto de confianza que actúa de enlace con una red criminal y puede enviar y recibir mensajes a larga distancia.",
  },
  "Artista (Entertainer) [PHB 2014]": {
    desc: "Vives del espectáculo. Variante Gladiador: mismas competencias; en lugar del instrumento musical llevas un arma barata pero inusual (tridente o red, a elegir), y Por Aclamación Popular solo se aplica en lugares con combates como espectáculo (arena de gladiadores, club de lucha clandestino).",
    comp: "Acrobacias, Interpretación",
    herr: "Kit de disfraz, 1 Instrumento musical",
    equipo: "Un instrumento musical, un favor de un admirador, un disfraz, bolsa con 15 po.",
    rasgo: "Por Aclamación Popular: siempre encuentras un lugar donde actuar (posada, taberna, circo, teatro o corte noble). Allí recibes alojamiento y comida gratis de nivel modesto o cómodo (según la calidad del local) mientras actúes cada noche. Además, quienes te reconocen en una ciudad donde has actuado suelen tomarte simpatía.",
  },
  "Héroe del Pueblo (Folk Hero) [PHB 2014]": {
    desc: "Vienes de un origen humilde pero estás destinado a más.",
    comp: "Trato con Animales, Supervivencia",
    herr: "1 tipo de Herramientas de artesano, Vehículos (tierra)",
    equipo: "Un juego de herramientas de artesano, pala, olla de hierro, ropa común, bolsa con 10 po.",
    rasgo: "Hospitalidad Rústica: la gente humilde te acoge y esconde, siempre que no pongas en peligro a quienes te ayudan.",
  },
  "Artesano de Gremio (Guild Artisan) [PHB 2014]": {
    desc: "Perteneces a un gremio de artesanos. Variante Mercader de Gremio: Herramientas de navegante o un idioma extra en lugar de herramientas de artesano; en el equipo, una mula y un carro en lugar del juego de herramientas de artesano.",
    comp: "Perspicacia, Persuasión",
    herr: "1 tipo de Herramientas de artesano (Mercader: Herramientas de navegante o un idioma extra)",
    idiomas: "1 a elegir",
    equipo: "Un juego de herramientas de artesano, carta de presentación de tu gremio, ropa de viajero, bolsa con 15 po.",
    rasgo: "Membresía del Gremio: los miembros del gremio te dan alojamiento y comida si lo necesitas y pagan tu funeral. Si te acusan de un delito, el gremio te apoya si hay un buen caso para tu inocencia o el delito es justificable, y, si eres miembro en buenos términos, puede darte acceso a figuras políticas poderosas (puede exigir donar dinero u objetos mágicos al gremio). Debes pagar una cuota de 5 po al mes; si te retrasas, debes pagar los atrasos para seguir en buenos términos con el gremio.",
  },
  "Ermitaño (Hermit) [PHB 2014]": {
    desc: "Viviste en aislamiento y descubriste algo importante.",
    comp: "Medicina, Religión",
    herr: "Kit de herboristería",
    idiomas: "1 a elegir",
    equipo: "Estuche de pergaminos con notas, manta de invierno, ropa común, Kit de herboristería, 5 po.",
    rasgo: "Descubrimiento: tu aislamiento te reveló una verdad única y poderosa (la define el DM con el jugador).",
  },
  "Noble [PHB 2014]": {
    desc: "Tu familia tiene riqueza, poder y privilegios. Variante Caballero: ver rasgo.",
    comp: "Historia, Persuasión",
    herr: "1 Juego de mesa",
    idiomas: "1 a elegir",
    equipo: "Ropa fina, anillo de sello, pergamino de linaje, bolsa con 25 po.",
    rasgo: "Posición de Privilegio: por tu cuna, la gente tiende a pensar lo mejor de ti. Eres bienvenido en la alta sociedad y se asume que tienes derecho a estar donde estés. El pueblo llano procura acomodarte y evitar tu enfado, y la gente de alta cuna te trata como uno de los suyos. Puedes conseguir una audiencia con un noble local si la necesitas. (Caballero: sustituye Posición de Privilegio por Séquito: tienes el servicio de tres sirvientes leales a tu familia (asistentes o mensajeros; uno puede ser mayordomo). Uno es un noble que actúa como tu escudero a cambio de formación en su camino a la caballería (puede ser tu vínculo); los otros dos pueden ser un mozo de cuadra que cuida tu caballo y un criado que pule tu armadura. No luchan por ti, no te siguen a lugares obviamente peligrosos (como mazmorras) y se marchan si los pones en peligro con frecuencia o los maltratas.)",
  },
  "Forastero (Outlander) [PHB 2014]": {
    desc: "Creciste en tierras salvajes, lejos de la civilización.",
    comp: "Atletismo, Supervivencia",
    herr: "1 Instrumento musical",
    idiomas: "1 a elegir",
    equipo: "Bastón, trampa de caza, trofeo de un animal, ropa de viajero, bolsa con 10 po.",
    rasgo: "Vagabundo: recuerdas mapas y relieves y siempre encuentras comida y agua fresca para ti y hasta 5 personas más por día.",
  },
  "Sabio (Sage) [PHB 2014]": {
    desc: "Has pasado años aprendiendo los saberes del multiverso.",
    comp: "Arcana, Historia",
    idiomas: "2 a elegir",
    equipo: "Frasco de tinta negra, pluma, cuchillo pequeño, carta de un colega fallecido con una pregunta sin responder, ropa común, bolsa con 10 po.",
    rasgo: "Investigador: si no conoces una información, sabes dónde y de quién obtenerla (bibliotecas, sabios, etc.).",
  },
  "Marinero (Sailor) [PHB 2014]": {
    desc: "Navegaste años por mares peligrosos. Variante Pirata: ver rasgo.",
    comp: "Atletismo, Percepción",
    herr: "Herramientas de navegante, Vehículos (agua)",
    equipo: "Clavija de abordaje (porra), 50 pies de cuerda de seda, amuleto de la suerte, ropa común, bolsa con 10 po.",
    rasgo: "Pasaje en Barco: consigues pasaje gratis en un barco para ti y tus compañeros a cambio de ayudar en la travesía. (Pirata: Mala Reputación; la gente te teme y en asentamientos civilizados puedes salirte con delitos menores, p. ej. no pagar en una taberna, porque casi nadie te denunciará.)",
  },
  "Soldado (Soldier) [PHB 2014]": {
    desc: "Has servido en un ejército o milicia.",
    comp: "Atletismo, Intimidación",
    herr: "1 Juego de mesa, Vehículos (tierra)",
    equipo: "Insignia de rango, trofeo de un enemigo caído, dados de hueso o baraja, ropa común, bolsa con 10 po.",
    rasgo: "Rango Militar: los soldados de tu organización reconocen tu autoridad, puedes requisar equipo sencillo y pasar por fortalezas aliadas.",
  },
  "Pilluelo (Urchin) [PHB 2014]": {
    desc: "Creciste en la calle, solo, pobre y sin tutor.",
    comp: "Juego de Manos, Sigilo",
    herr: "Kit de disfraz, Herramientas de ladrón",
    equipo: "Cuchillo pequeño, mapa de tu ciudad natal, ratón de mascota, recuerdo de tus padres, ropa común, bolsa con 10 po.",
    rasgo: "Secretos de la Ciudad: conoces los patrones y el flujo secretos de las ciudades y encuentras pasos que otros pasan por alto. Fuera de combate, tú y los compañeros a quienes guíes podéis viajar entre dos lugares cualesquiera de la ciudad al doble de la velocidad normal.",
  },

  /* ════════════════════════════════════════════════
     SWORD COAST ADVENTURER'S GUIDE (SCAG, 2014)
  ════════════════════════════════════════════════ */
  "Guardia de la Ciudad (City Watch) [SCAG]": {
    desc: "Has hecho cumplir la ley en una ciudad. Variante Investigador: Investigación en lugar de Atletismo.",
    comp: "Atletismo, Perspicacia",
    idiomas: "2 a elegir",
    equipo: "Uniforme de la guardia, cuerno, grilletes, bolsa con 10 po.",
    rasgo: "Ojo del Vigilante: sabes localizar puestos de la guardia y los hampones de una comunidad.",
  },
  "Artesano de Clan (Clan Crafter) [SCAG]": {
    desc: "Perteneces a un clan de artesanos enanos.",
    comp: "Historia, Perspicacia",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "Enano (u otro a elegir si ya lo hablas)",
    equipo: "Herramientas de artesano, cincel con tu marca, ropa de viajero, bolsa con 5 po y una gema de 10 po.",
    rasgo: "Respeto de los Fornidos: alojamiento y comida gratis donde vivan enanos de escudo o de oro.",
  },
  "Erudito de Claustro (Cloistered Scholar) [SCAG]": {
    desc: "Has pasado años estudiando en una biblioteca monástica.",
    comp: "Historia, y una de Arcana, Naturaleza o Religión",
    idiomas: "2 a elegir",
    equipo: "Túnica de erudito, materiales de escritura, libro prestado, bolsa con 10 po.",
    rasgo: "Acceso a la Biblioteca: acceso libre a la biblioteca de tu hogar y trato preferente en otras bibliotecas.",
  },
  "Cortesano (Courtier) [SCAG]": {
    desc: "Has trabajado en los engranajes de una corte.",
    comp: "Perspicacia, Persuasión",
    idiomas: "2 a elegir",
    equipo: "Ropa fina, bolsa con 5 po.",
    rasgo: "Funcionario de la Corte: conoces los registros y los entresijos de cualquier corte noble o gobierno y a quién pedir favores.",
  },
  "Agente de Facción (Faction Agent) [SCAG]": {
    desc: "Sirves a una facción (Arpistas, Orden del Guantelete, Enclave Esmeralda, Alianza de los Señores o Zhentarim).",
    comp: "Perspicacia, y una habilidad de INT, SAB o CAR a elegir, según tu facción",
    idiomas: "2 a elegir",
    equipo: "Insignia de facción, texto o código de la facción, ropa común, bolsa con 15 po.",
    rasgo: "Refugio Seguro: reconoces a miembros de tu facción por señas y contraseñas y accedes a refugios y apoyo de información.",
  },
  "Viajero Lejano (Far Traveler) [SCAG]": {
    desc: "Vienes de tierras lejanas y nadie conoce tus costumbres.",
    comp: "Perspicacia, Percepción",
    herr: "1 Instrumento musical o Juego de mesa",
    idiomas: "1 a elegir",
    equipo: "Ropa de viajero, instrumento o juego, mapas de tu tierra, joya de 10 po, bolsa con 5 po.",
    rasgo: "Todos los Ojos en Ti: tu acento y modales llaman la atención; eruditos, nobles y mercaderes querrán oír tus relatos.",
  },
  "Heredero (Inheritor) [SCAG]": {
    desc: "Has recibido un objeto de gran valor no monetario.",
    comp: "Supervivencia, y una de Arcana, Historia o Religión",
    herr: "1 Juego de mesa o Instrumento musical",
    idiomas: "1 a elegir",
    equipo: "Tu herencia, ropa de viajero, herramienta elegida, bolsa con 15 po.",
    rasgo: "Herencia: posees un objeto único cuya historia y propiedades define el DM contigo.",
  },
  "Caballero de la Orden (Knight of the Order) [SCAG]": {
    desc: "Perteneces a una orden de caballería.",
    comp: "Persuasión, y una de Arcana, Historia, Naturaleza o Religión",
    herr: "1 Juego de mesa o Instrumento musical",
    idiomas: "1 a elegir",
    equipo: "Ropa de viajero, signo de tu orden, bolsa con 10 po.",
    rasgo: "Consideración de Caballero: recibes cobijo y ayuda de los miembros de tu orden y de quienes simpatizan con ella.",
  },
  "Veterano Mercenario (Mercenary Veteran) [SCAG]": {
    desc: "Has combatido por una compañía mercenaria.",
    comp: "Atletismo, Persuasión",
    herr: "1 Juego de mesa, Vehículos (tierra)",
    equipo: "Uniforme de compañía, insignia de rango, juego de mesa, 10 po de la paga.",
    rasgo: "Vida Mercenaria: reconoces compañías mercenarias, localizas tabernas de mercenarios y encuentras trabajo entre aventuras.",
  },
  "Cazarrecompensas Urbano (Urban Bounty Hunter) [SCAG]": {
    desc: "Rastreas fugitivos y presas en la ciudad.",
    comp: "2 a elegir entre Engaño, Perspicacia, Persuasión y Sigilo",
    herr: "2 a elegir entre Juegos de mesa, Instrumentos musicales y Herramientas de ladrón",
    equipo: "Ropa adecuada a tu labor, bolsa con 20 po.",
    rasgo: "Oído en el Suelo: tienes un informante en cualquier ciudad que te da información local.",
  },
  "Miembro de Tribu Uthgardt (Uthgardt Tribe Member) [SCAG]": {
    desc: "Naciste en una tribu bárbara de las Tierras del Norte.",
    comp: "Atletismo, Supervivencia",
    herr: "1 Instrumento musical o Herramientas de artesano",
    idiomas: "1 a elegir",
    equipo: "Trampa de caza, tótem o tatuajes tribales, ropa de viajero, bolsa con 10 po.",
    rasgo: "Herencia Uthgardt: conoces el territorio y su fauna; al forrajear encuentras el doble de comida y agua, y recibes hospitalidad de druidas, elfos nómadas, Arpistas y fieles de la Primera Circulación.",
  },
  "Noble de Aguas Profundas (Waterdhavian Noble) [SCAG]": {
    desc: "Naciste en una gran casa noble de Aguas Profundas.",
    comp: "Historia, Persuasión",
    herr: "1 Juego de mesa o Instrumento musical",
    idiomas: "1 a elegir",
    equipo: "Ropa fina, anillo de sello o broche, pergamino de linaje, odre de vino o zzar, bolsa con 20 po.",
    rasgo: "Mantenido con Estilo: mientras estés en Aguas Profundas u otro lugar del Norte, tu casa cubre tus necesidades diarias (posadas, tabernas y salas de fiestas anotan tu deuda y la envían a la finca de tu familia). Puedes llevar un estilo de vida cómodo sin pagar los 2 po diarios, o reducir en esa cantidad el coste de un estilo de vida rico o aristocrático. No puedes mantener un estilo de vida más modesto y quedarte con la diferencia: es una línea de crédito, no dinero.",
  },

  /* ════════════════════════════════════════════════
     OTROS LIBROS (2014): Ghosts of Saltmarsh (GoS), Curse of Strahd (CoS), Tomb of Annihilation (ToA)
  ════════════════════════════════════════════════ */
  "Pescador (Fisher) [GoS]": {
    desc: "Has vivido de la pesca.",
    comp: "Historia, Supervivencia",
    idiomas: "1 a elegir",
    equipo: "Aparejos de pesca, red, señuelo o botas de vadeo, ropa de viajero, bolsa con 10 po.",
    rasgo: "Cosechar el Agua: Ventaja en las pruebas de característica hechas con aparejos de pesca y, con acceso a una masa de agua con vida marina, mantienes un estilo de vida modesto como pescador y pescas comida para ti y hasta 10 personas más por día. Anécdota de Pesca: 1/día puedes contar tu historia a oyentes dispuestos; a criterio del DM, algunos se vuelven amistosos contigo. No es un efecto mágico y su simpatía depende de tus actos.",
  },
  "Carpintero Naval (Shipwright) [GoS]": {
    desc: "Has construido y reparado barcos.",
    comp: "Historia, Percepción",
    herr: "Herramientas de carpintero, Vehículos (agua)",
    equipo: "Herramientas de carpintero, libro en blanco, tinta y pluma, ropa de viajero, bolsa con 10 po.",
    rasgo: "¡Lo Arreglo!: con herramientas de carpintero y madera reparas un vehículo acuático; restauras PG iguales a 5 × tu bonificador de competencia; no puedes repetirlo hasta que el barco se repare en puerto.",
  },
  "Contrabandista (Smuggler) [GoS]": {
    desc: "Has movido mercancías fuera de la ley.",
    comp: "Atletismo, Engaño",
    herr: "Vehículos (agua)",
    equipo: "Chaleco o botas de cuero llamativos, ropa común, bolsa con 15 po.",
    rasgo: "Bajo Cuerda: conoces una red de contrabandistas dispuestos a sacarte de apuros. En un pueblo, ciudad o comunidad de tamaño similar (a criterio del DM), tú y tus compañeros podéis alojaros gratis en refugios seguros (estilo de vida pobre). Mientras estáis en uno, puedes elegir mantener en secreto vuestra presencia.",
  },
  "Perseguido (Haunted One) [CoS]": {
    desc: "Algo horrible te marcó y lo has dejado atrás... o no.",
    comp: "2 a elegir entre Arcana, Investigación, Religión y Supervivencia",
    idiomas: "2 a elegir, uno de ellos exótico",
    equipo: "Kit de cazamonstruos (cofre, palanca, martillo, 3 estacas de madera, símbolo sagrado, frasco de agua bendita, grilletes, espejo de acero, frasco de aceite, yesquero, 3 antorchas), ropa común, una baratija de especial significado (a elegir o tirar en la tabla de Baratijas de Terror) y 1 pieza de plata.",
    rasgo: "Corazón de Oscuridad: los plebeyos te tratan con cortesía y te ayudarán o combatirán a tu lado, salvo que hayas demostrado ser peligroso para ellos.",
  },
  "Antropólogo (Anthropologist) [ToA]": {
    desc: "Estudias culturas y las integras.",
    comp: "Perspicacia, Religión",
    idiomas: "2 a elegir",
    equipo: "Diario encuadernado en cuero, frasco de tinta, pluma, ropa de viajero, baratija, bolsa con 10 po.",
    rasgo: "Lingüista Hábil: puedes comunicarte con humanoides que no hablen ningún idioma que conozcas. Debes observarlos interactuar entre sí al menos 1 día; después aprendes un puñado de palabras, expresiones y gestos importantes, suficiente para comunicarte de forma rudimentaria. (Cultura adoptada, a elegir o tirar: Aarakocra, Enano, Elfo, Goblin, Mediano, Humano, Lizardfolk u Orco.)",
  },
  "Arqueólogo (Archaeologist) [ToA]": {
    desc: "Estudias ruinas y civilizaciones desaparecidas.",
    comp: "Historia, Supervivencia",
    herr: "Herramientas de cartógrafo o de navegante",
    idiomas: "1 a elegir",
    equipo: "Estuche de mapas, linterna de ojo de buey, pico de minero, ropa de viajero, pala, tienda para 2, baratija recuperada, bolsa con 25 po.",
    rasgo: "Conocimiento Histórico: al entrar en unas ruinas o una mazmorra, averiguas con acierto su propósito original y quiénes las construyeron (enanos, elfos, humanos, yuan-ti u otra raza conocida). Además, puedes determinar el valor monetario de objetos de arte con más de un siglo de antigüedad.",
  },

  /* ═══════════════════════════════════════════
     EBERRON: FORGE OF THE ARTIFICER (EFotA, 2024)
  ═══════════════════════════════════════════ */
  "Heredero Aberrante (Aberrant Heir) [EFotA 2024]": {
    desc: "Eres heredero de una Marca del Dragón Aberrante (Aberrant Dragonmark).",
    asi: "FUE, CON o CAR",
    dote: "Aberrant Dragonmark",
    comp: "Historia, Intimidación",
    herr: "Kit de disfraz",
    equipo: "A: daga, Kit de disfraz, disfraz, ropa de viajero, 16 po · B: 50 po",
  },
  "Arqueólogo (Archaeologist) [EFotA 2024]": {
    desc: "Exploras y excavas ruinas con ayuda de mapas, pala y linterna.",
    asi: "DES, INT o SAB",
    dote: "Skilled",
    comp: "Historia, Supervivencia",
    herr: "Herramientas de cartógrafo",
    equipo: "A: Herramientas de cartógrafo, linterna de ojo de buey, mapa, estuche para mapas o pergaminos, pala, tienda, ropa de viajero, 17 po · B: 50 po",
  },
  "Agente de Casa (House Agent) [EFotA 2024]": {
    desc: "Trabajas como agente al servicio de una de las casas con Marca del Dragón.",
    asi: "FUE, INT o CAR",
    dote: "Lucky",
    comp: "Investigación, Persuasión",
    herr: "1 tipo de Herramientas de artesano (a elegir)",
    equipo: "A: las Herramientas de artesano elegidas, ropa fina, 20 po · B: 50 po",
  },
  "Heredero de la Casa Cannith (House Cannith Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Cannith y portas su Marca del Dragón (Mark of Making).",
    asi: "FUE, DES o INT",
    dote: "Mark of Making",
    comp: "Investigación, Juego de Manos",
    herr: "1 tipo de Herramientas de artesano (a elegir)",
    equipo: "A: las Herramientas de artesano elegidas, palanca, ropa fina, 2 bolsas, 17 po · B: 50 po",
  },
  "Heredero de la Casa Deneith (House Deneith Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Deneith y portas su Marca del Dragón (Mark of Sentinel).",
    asi: "FUE, CON o SAB",
    dote: "Mark of Sentinel",
    comp: "Perspicacia, Percepción",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: lanza, arco corto, 20 flechas, el Juego de mesa elegido, ropa fina, Botiquín de sanador, carcaj, 1 po · B: 50 po",
  },
  "Heredero de la Casa Ghallanda (House Ghallanda Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Ghallanda y portas su Marca del Dragón (Mark of Hospitality).",
    asi: "DES, SAB o CAR",
    dote: "Mark of Hospitality",
    comp: "Perspicacia, Persuasión",
    herr: "Utensilios de cocinero",
    equipo: "A: Utensilios de cocinero, ropa fina, olla de hierro, lámpara, 5 frascos de aceite, perfume, 26 po · B: 50 po",
  },
  "Heredero de la Casa Jorasco (House Jorasco Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Jorasco y portas su Marca del Dragón (Mark of Healing).",
    asi: "DES, CON o SAB",
    dote: "Mark of Healing",
    comp: "Medicina, Sigilo",
    herr: "Kit de herboristería",
    equipo: "A: Kit de herboristería, ropa fina, Botiquín de sanador, 25 po · B: 50 po",
  },
  "Heredero de la Casa Kundarak (House Kundarak Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Kundarak y portas su Marca del Dragón (Mark of Warding).",
    asi: "FUE, CON o INT",
    dote: "Mark of Warding",
    comp: "Arcana, Investigación",
    herr: "Herramientas de ladrón",
    equipo: "A: Herramientas de ladrón, ropa fina, 10 po · B: 50 po",
  },
  "Heredero de la Casa Lyrandar (House Lyrandar Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Lyrandar y portas su Marca del Dragón (Mark of Storm).",
    asi: "FUE, DES o CAR",
    dote: "Mark of Storm",
    comp: "Acrobacias, Naturaleza",
    herr: "Herramientas de navegante",
    equipo: "A: Herramientas de navegante, ropa fina, 10 po · B: 50 po",
  },
  "Heredero de la Casa Medani (House Medani Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Medani y portas su Marca del Dragón (Mark of Detection).",
    asi: "DES, INT o SAB",
    dote: "Mark of Detection",
    comp: "Perspicacia, Investigación",
    herr: "Kit de disfraz",
    equipo: "A: Kit de disfraz, ropa fina, 10 po · B: 50 po",
  },
  "Heredero de la Casa Orien (House Orien Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Orien y portas su Marca del Dragón (Mark of Passage).",
    asi: "DES, CON o INT",
    dote: "Mark of Passage",
    comp: "Acrobacias, Atletismo",
    herr: "Herramientas de cartógrafo",
    equipo: "A: Herramientas de cartógrafo, ropa fina, mapa, estuche para mapas o pergaminos, 18 po · B: 50 po",
  },
  "Heredero de la Casa Phiarlan (House Phiarlan Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Phiarlan y portas su Marca del Dragón (Mark of Shadow).",
    asi: "DES, SAB o CAR",
    dote: "Mark of Shadow",
    comp: "Engaño, Sigilo",
    herr: "Kit de disfraz",
    equipo: "A: Kit de disfraz, ropa fina, 10 po · B: 50 po",
  },
  "Heredero de la Casa Sivis (House Sivis Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Sivis y portas su Marca del Dragón (Mark of Scribing).",
    asi: "INT, SAB o CAR",
    dote: "Mark of Scribing",
    comp: "Historia, Percepción",
    herr: "Útiles de caligrafía",
    equipo: "A: Útiles de caligrafía, ropa fina, tinta, 5 plumas, papel (30 hojas), pergamino (9 hojas), 8 po · B: 50 po",
  },
  "Heredero de la Casa Tharashk (House Tharashk Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Tharashk y portas su Marca del Dragón (Mark of Finding).",
    asi: "CON, INT o SAB",
    dote: "Mark of Finding",
    comp: "Percepción, Supervivencia",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: el Juego de mesa elegido, equipo de escalada, ropa fina, trampa de caza, grilletes, 2 po · B: 50 po",
  },
  "Heredero de la Casa Thuranni (House Thuranni Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Thuranni y portas su Marca del Dragón (Mark of Shadow).",
    asi: "DES, INT o CAR",
    dote: "Mark of Shadow",
    comp: "Interpretación, Sigilo",
    herr: "1 Instrumento musical (a elegir)",
    equipo: "A: el Instrumento musical elegido, disfraz, ropa fina, 13 po · B: 50 po",
  },
  "Heredero de la Casa Vadalis (House Vadalis Heir) [EFotA 2024]": {
    desc: "Eres heredero de la Casa Vadalis y portas su Marca del Dragón (Mark of Handling).",
    asi: "CON, SAB o CAR",
    dote: "Mark of Handling",
    comp: "Trato con Animales, Naturaleza",
    herr: "Kit de herboristería",
    equipo: "A: Kit de herboristería, ropa fina, red, 29 po · B: 50 po",
  },
  "Inquisitivo (Inquisitive) [EFotA 2024]": {
    desc: "Investigas casos y sigues pistas con un ojo siempre atento.",
    asi: "CON, INT o CAR",
    dote: "Alert",
    comp: "Perspicacia, Investigación",
    herr: "Herramientas de ladrón",
    equipo: "A: Herramientas de ladrón, linterna de ojo de buey, palanca, 10 frascos de aceite, ropa de viajero, 10 po · B: 50 po",
  },

  /* ═══════════════════════════════════════════
     EBERRON: RISING FROM THE LAST WAR (ERftLW, 2014)
  ═══════════════════════════════════════════ */
  "Agente de Casa (House Agent) [ERftLW]": {
    desc: "Reúnes información y cumples misiones para tu casa con Marca del Dragón.",
    comp: "Investigación, Persuasión",
    herr: "2 según tu casa — Cannith: suministros de alquimista y herramientas de manitas; Deneith: 1 Juego de mesa y Vehículos (tierra); Ghallanda: suministros de cervecero y Utensilios de cocinero; Jorasco: suministros de alquimista y Kit de herboristería; Kundarak: Herramientas de ladrón y herramientas de manitas; Lyrandar: Herramientas de navegante y Vehículos (agua y aire); Medani: Kit de disfraz y Herramientas de ladrón; Orien: 1 Juego de mesa y Vehículos (tierra); Phiarlan: Kit de disfraz y 1 Instrumento musical; Sivis: Útiles de caligrafía y Kit de falsificación; Tharashk: 1 Juego de mesa y Herramientas de ladrón; Thuranni: 1 Instrumento musical y Kit de envenenador; Vadalis: Kit de herboristería y Vehículos (tierra)",
    equipo: "Ropa fina, anillo de sello de la casa, documentos de identidad, bolsa con 20 po.",
    rasgo: "Conexiones de la Casa: como agente de tu casa, siempre puedes conseguir comida y alojamiento para ti y tus amigos en un enclave de la casa. Cuando la casa te asigna una misión, normalmente te proporciona los suministros y el transporte necesarios. Además, tienes muchos viejos amigos, mentores y rivales en tu casa, y puedes encontrarte con alguno al tratar con un negocio de la casa; su disposición a ayudarte depende de tu posición actual en ella. Rol: cuando un barón te encarga una misión concreta, el tipo de trabajo (tabla d8 de ejemplos) — 1: Adquisición; 2: Investigación; 3: Investigación y Desarrollo; 4: Seguridad; 5: Intimidación; 6: Exploración; 7: Negociación; 8: Operaciones Encubiertas.",
  },

  /* ═══════════════════════════════════════════
     ASTARION’S BOOK OF HUNGERS (ABH, 2024)
  ═══════════════════════════════════════════ */
  "Juerguista (Carouser) [ABH 2024]": {
    desc: "Has vivido entre fiestas, juegos y excesos.",
    asi: "DES, INT o CAR",
    dote: "Tireless Reveler",
    comp: "Engaño, Persuasión",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: daga, el Juego elegido, ropa fina, botella de cristal, espejo, perfume, bolsa, yesquero, 19 po · B: 50 po",
  },
  "Devoto del Vampiro (Vampire Devotee) [ABH 2024]": {
    desc: "Has vivido como devoto de un vampiro.",
    asi: "FUE, CON o CAR",
    dote: "Vampire's Plaything",
    comp: "Persuasión, Sigilo",
    herr: "Utensilios de cocinero",
    equipo: "A: Utensilios de cocinero, ropa fina, 2 botellas de cristal, Botiquín de sanador, perfume, lámpara, 3 frascos de aceite, odre, 19 po · B: 50 po",
  },
  "Superviviente de Vampiros (Vampire Survivor) [ABH 2024]": {
    desc: "Has sobrevivido a los vampiros.",
    asi: "DES, CON o SAB",
    dote: "Vampire Hunter",
    comp: "Perspicacia, Religión",
    herr: "Herramientas de tallista",
    equipo: "A: Herramientas de tallista, palanca, linterna sorda, símbolo sagrado (relicario), agua bendita, espejo, 3 frascos de aceite, yesquero, ropa de viajero, odre, 4 po · B: 50 po",
  },

  /* ═══════════════════════════════════════════
     FORGOTTEN REALMS: HEROES OF FAERÛN (HoF, 2024)
  ═══════════════════════════════════════════ */
  "Corsario Chondathano (Chondathan Freebooter) [HoF 2024]": {
    desc: "Has vivido como corsario al estilo de Chondath.",
    asi: "FUE, DES o SAB",
    dote: "Skilled",
    comp: "Atletismo, Juego de Manos",
    herr: "Herramientas de tejedor",
    equipo: "A: daga, Herramientas de tejedor, mochila, bolas de rodamiento, cesta, saco de dormir, cubo, raciones (para 3 días), cuerda, silbato de señales, ropa de viajero, 38 po · B: 50 po",
  },
  "Habitante de la Magia Muerta (Dead Magic Dweller) [HoF 2024]": {
    desc: "Has vivido en una zona de magia muerta.",
    asi: "FUE, CON o SAB",
    dote: "Healer",
    comp: "Medicina, Supervivencia",
    herr: "Herramientas de peletero",
    equipo: "A: garrote grande, Herramientas de peletero, saco de dormir, manta, Botiquín de sanador, pértiga, raciones (para 3 días), tienda, yesquero, 5 antorchas, ropa de viajero, odre, 32 po · B: 50 po",
  },
  "Cultista del Dragón (Dragon Cultist) [HoF 2024]": {
    desc: "Has pertenecido a un culto dedicado a los dragones.",
    asi: "DES, CON o INT",
    dote: "Cult of the Dragon Initiate",
    comp: "Engaño, Sigilo",
    herr: "Útiles de caligrafía",
    equipo: "A: Útiles de caligrafía, daga, botella de cristal, lámpara, grilletes, 5 frascos de aceite, 2 bolsas, túnica, cuerda, 30 po · B: 50 po",
  },
  "Cuidador del Enclave Esmeralda (Emerald Enclave Caretaker) [HoF 2024]": {
    desc: "Has cuidado de la naturaleza en nombre del Enclave Esmeralda.",
    asi: "CON, INT o SAB",
    dote: "Emerald Enclave Fledgling",
    comp: "Naturaleza, Supervivencia",
    herr: "Kit de herboristería",
    equipo: "A: arco corto, 20 flechas, Kit de herboristería, saco de dormir, manta, bolsa, tienda, ropa de viajero, 13 po · B: 50 po",
  },
  "Mercenario del Puño Llameante (Flaming Fist Mercenary) [HoF 2024]": {
    desc: "Has servido como mercenario en el Puño Llameante.",
    asi: "FUE, CON o CAR",
    dote: "Tough",
    comp: "Intimidación, Percepción",
    herr: "Herramientas de herrero",
    equipo: "A: maza, Herramientas de herrero, ropa fina, grilletes, ariete portátil, 4 po · B: 50 po",
  },
  "Tocado por un Genio (Genie Touched) [HoF 2024]": {
    desc: "Tu vida ha estado marcada por el contacto con un genio.",
    asi: "DES, SAB o CAR",
    dote: "Magic Initiate (Mago)",
    comp: "Percepción, Persuasión",
    herr: "Herramientas de soplador de vidrio",
    equipo: "A: martillo ligero, Herramientas de soplador de vidrio, ropa fina, lámpara, 3 frascos de aceite, odre, 2 po · B: 50 po",
  },
  "Arpista (Harper) [HoF 2024]": {
    desc: "Has actuado como agente de los Arpistas.",
    asi: "DES, INT o CAR",
    dote: "Harper Agent",
    comp: "Interpretación, Juego de Manos",
    herr: "Kit de disfraz",
    equipo: "A: Kit de disfraz, saco de dormir, disfraz, garfio, cuerda, ropa de viajero, 14 po · B: 50 po",
  },
  "Pescador de Hielo (Ice Fisher) [HoF 2024]": {
    desc: "Has vivido de la pesca sobre el hielo.",
    asi: "FUE, DES o CON",
    dote: "Alert",
    comp: "Trato con Animales, Atletismo",
    herr: "Herramientas de tallista",
    equipo: "A: Herramientas de tallista, cesta, polea y aparejo, cadena, trampa de caza, red, pértiga, raciones (para 3 días), ropa de viajero, 32 po · B: 50 po",
  },
  "Caballero del Guantelete (Knight of the Gauntlet) [HoF 2024]": {
    desc: "Has servido en la orden del Guantelete.",
    asi: "FUE, INT o SAB",
    dote: "Tyro of the Gauntlet",
    comp: "Atletismo, Medicina",
    herr: "Herramientas de herrero",
    equipo: "A: lanza, Herramientas de herrero, linterna de ojo de buey, símbolo sagrado, grilletes, 5 frascos de aceite, yesquero, ropa de viajero, 9 po · B: 50 po",
  },
  "Vasallo de la Alianza de los Señores (Lords' Alliance Vassal) [HoF 2024]": {
    desc: "Has servido como vasallo de la Alianza de los Señores.",
    asi: "FUE, INT o CAR",
    dote: "Lords' Alliance Agent",
    comp: "Perspicacia, Persuasión",
    herr: "Útiles de caligrafía",
    equipo: "A: 2 jabalinas, Útiles de caligrafía, ropa fina, tinta, 5 plumas, pergamino (9 hojas), 13 po · B: 50 po",
  },
  "Peregrino del Pozo Lunar (Moonwell Pilgrim) [HoF 2024]": {
    desc: "Has peregrinado hasta un pozo lunar.",
    asi: "CON, SAB o CAR",
    dote: "Magic Initiate (Druida)",
    comp: "Naturaleza, Interpretación",
    herr: "Útiles de pintor",
    equipo: "A: bastón, Útiles de pintor, saco de dormir, campana, bolsa, túnica, cordel, ropa de viajero, odre, 38 po · B: 50 po",
  },
  "Saqueador de Tumbas Mulhorandí (Mulhorandi Tomb Raider) [HoF 2024]": {
    desc: "Has saqueado tumbas de Mulhorand.",
    asi: "DES, CON o INT",
    dote: "Lucky",
    comp: "Investigación, Religión",
    herr: "Herramientas de albañil",
    equipo: "A: daga, martillo ligero, Herramientas de albañil, mochila, saco de dormir, palanca, escalera, pértiga, 2 bolsas, cuerda, cordel, yesquero, 5 antorchas, ropa de viajero, odre, 26 po · B: 50 po",
  },
  "Guardián del Mythal (Mythalkeeper) [HoF 2024]": {
    desc: "Has custodiado un mythal.",
    asi: "INT, SAB o CAR",
    dote: "Crafter",
    comp: "Arcana, Historia",
    herr: "Herramientas de joyero",
    equipo: "A: bastón, Herramientas de joyero, perfume, bolsa, túnica, pala, cordel, odre, 16 po · B: 50 po",
  },
  "Escudero del Dragón Púrpura (Purple Dragon Squire) [HoF 2024]": {
    desc: "Has servido como escudero del Dragón Púrpura.",
    asi: "FUE, SAB o CAR",
    dote: "Purple Dragon Rook",
    comp: "Trato con Animales, Perspicacia",
    herr: "Herramientas de navegante",
    equipo: "A: lanza, Herramientas de navegante, ropa fina, 9 po · B: 50 po",
  },
  "Errante Rashemi (Rashemi Wanderer) [HoF 2024]": {
    desc: "Has vagado por las tierras de Rashemen.",
    asi: "FUE, CON o CAR",
    dote: "Tough",
    comp: "Intimidación, Percepción",
    herr: "Herramientas de cartógrafo",
    equipo: "A: Herramientas de cartógrafo, mochila, saco de dormir, linterna sorda, 3 frascos de aceite, cuerda, yesquero, ropa de viajero, odre, 23 po · B: 50 po",
  },
  "Exiliado de los Maestros de las Sombras (Shadowmasters Exile) [HoF 2024]": {
    desc: "Has sido exiliado de los Maestros de las Sombras.",
    asi: "DES, INT o CAR",
    dote: "Savage Attacker",
    comp: "Acrobacias, Sigilo",
    herr: "Herramientas de ladrón",
    equipo: "A: 2 dagas, Herramientas de ladrón, abrojos, disfraz, garfio, pitones de hierro, espejo, 2 bolsas, cuerda, ropa de viajero, 3 po · B: 50 po",
  },
  "Iniciado del Fuego de Hechizo (Spellfire Initiate) [HoF 2024]": {
    desc: "Te has iniciado en el Spellfire.",
    asi: "CON, INT o CAR",
    dote: "Spellfire Spark",
    comp: "Arcana, Percepción",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: el Juego elegido, foco arcano (cristal o varita), 2 bolsas, ropa de viajero, 36 po · B: 50 po",
  },
  "Mercenario Zhentarim (Zhentarim Mercenary) [HoF 2024]": {
    desc: "Has servido como mercenario de los Zhentarim.",
    asi: "FUE, DES o CAR",
    dote: "Zhentarim Ruffian",
    comp: "Intimidación, Percepción",
    herr: "Kit de falsificación",
    equipo: "A: garrote, daga, Kit de falsificación, ropa fina, linterna sorda, 3 frascos de aceite, 2 bolsas, cordel, yesquero, 11 po · B: 50 po",
  },

  /* ═══════════════════════════════════════════
     LORWYN: FIRST LIGHT (LFL, 2024)
  ═══════════════════════════════════════════ */
  "Experto de Lorwyn (Lorwyn Expert) [LFL 2024]": {
    desc: "Conoces bien las tierras de Lorwyn.",
    asi: "FUE, CON o SAB",
    dote: "Child of the Sun",
    comp: "Atletismo, Naturaleza",
    herr: "Herramientas de cartógrafo",
    equipo: "A: bastón, Herramientas de cartógrafo, mochila, cesta, pergamino (4 hojas), cuerda, ropa de viajero, 29 po · B: 50 po",
  },
  "Experto de Shadowmoor (Shadowmoor Expert) [LFL 2024]": {
    desc: "Conoces bien las tierras de Shadowmoor.",
    asi: "DES, INT o CAR",
    dote: "Shadowmoor Hexer",
    comp: "Acrobacias, Engaño",
    herr: "Herramientas de soplador de vidrio",
    equipo: "A: daga, Herramientas de soplador de vidrio, mochila, trampa de caza, lámpara, 3 frascos de aceite, ropa de viajero, odre, 8 po · B: 50 po",
  },

  /* ═══════════════════════════════════════════
     SPELLJAMMER: ASTRAL ADVENTURER’S GUIDE (AAG)
  ═══════════════════════════════════════════ */
  "Vagabundo Astral (Astral Drifter) [AAG]": {
    desc: "Has vagado por el Mar Astral y una deidad errante te confió un secreto cósmico.",
    dote: "Magic Initiate (Clérigo)",
    comp: "Perspicacia, Religión",
    idiomas: "2 a elegir (se recomiendan Celestial o Gith)",
    equipo: "Ropa de viajero, diario, pluma, frasco de tinta, bolsa con 10 po.",
    rasgo: "Longevidad (Longevity): tienes 20d6 años más de los que aparentas, porque has pasado ese tiempo en el Mar Astral sin envejecer. Contacto Divino (Divine Contact): obtienes la dote Magic Initiate del Player’s Handbook y debes elegir Clérigo para ella. En el Mar Astral te cruzaste con una deidad errante; el encuentro fue breve y pacífico, pero te dejó huella: la deidad quiso compartir contigo un secreto o un saber cósmico oscuro (el DM y tú definís los detalles y su impacto en la campaña). Tira en la tabla para saber qué deidad encontraste, o pacta con el DM otra más adecuada. Tabla d10: 1: Corellon, dios del arte y la magia (caótico bueno); 2: Tymora, diosa de la buena fortuna (caótico bueno); 3: Fharlanghn, dios de los horizontes y los viajes (neutral bueno); 4: Istus, diosa del destino (neutral); 5: Nuada, dios de la guerra y los guerreros (neutral); 6: Zivilyn, dios de la sabiduría (neutral); 7: Arawn, dios de la vida y la muerte (neutral malvado); 8: Hecate, diosa de la magia y las lunas (caótico malvado); 9: Celestian, dios de las estrellas y los vagabundos (neutral); 10: Ptah, dios del conocimiento y los secretos (legal neutral).",
  },
  "Habitante del Espacio Salvaje (Wildspacer) [AAG]": {
    desc: "Has sobrevivido a los terrores del Espacio Salvaje (Wildspace).",
    dote: "Tough",
    comp: "Atletismo, Supervivencia",
    herr: "Herramientas de navegante, Vehículos (espacio)",
    equipo: "Clavija de abordaje (porra), ropa de viajero, gancho de agarre, 50 pies de cuerda de cáñamo, bolsa con 10 po.",
    rasgo: "Encuentro Cercano (Close Encounter): tuviste un encuentro angustioso con uno de los muchos terrores del Espacio Salvaje; escapaste con vida, pero te dejó una cicatriz o dos, o quizá una pesadilla recurrente. Tira en la tabla para saber qué criatura casi acaba contigo (las marcadas con * aparecen en Boo’s Astral Menagerie; las demás, en el Monster Manual). Tabla d10: 1: Beholder; 2: Cosmic horror*; 3: Feyr*; 4: Lunar dragon*; 5: Mind flayer; 6: Neh-thalggu*; 7: Neogi*; 8: Space clown*; 9: Vampirate*; 10: Void scavver*. Adaptación al Espacio Salvaje (Wildspace Adaptation): obtienes la dote Tough del Player’s Handbook. Además, aprendiste a adaptarte a la gravedad cero: estar ingrávido no te da Desventaja en tus tiradas de ataque cuerpo a cuerpo (véase «Weightlessness» en el capítulo 2).",
  },

  /* ═══════════════════════════════════════════
     BALDUR’S GATE: DESCENT INTO AVERNUS (BGDiA)
  ═══════════════════════════════════════════ */
  "Acólito de Puerta de Baldur (Baldur's Gate Acolyte) [BGDiA]": {
    desc: "Sirves a una fe y estás muy ligado a la comunidad religiosa de Puerta de Baldur.",
    comp: "Perspicacia, Religión",
    idiomas: "2 a elegir",
    equipo: "Símbolo sagrado (regalo al entrar en el sacerdocio), libro de oraciones o rueda de oración, 5 varillas de incienso, vestimentas, ropa común, bolsa con 15 po.",
    rasgo: "Refugio de los Fieles (Shelter of the Faithful): como acólito, mereces el respeto de quienes comparten tu fe y puedes oficiar las ceremonias religiosas de tu deidad. Tú y tus compañeros de aventuras podéis recibir curación y cuidados gratuitos en un templo, santuario u otra presencia establecida de tu fe, pero debéis aportar los componentes materiales de los conjuros. Quienes comparten tu religión te mantienen (solo a ti) con un estilo de vida modesto. Puedes tener lazos con un templo concreto de tu deidad o panteón y una residencia en él (el templo donde servías, si sigues en buenos términos, o uno donde has hallado un nuevo hogar); cerca de él puedes pedir ayuda a los sacerdotes, siempre que no sea peligrosa y sigas en buena posición ante tu templo. Comunidad Religiosa (Religious Community; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): estás muy ligado a la comunidad religiosa de Puerta de Baldur; sabes si una deidad tiene seguidores en la ciudad, qué lugares frecuentan abiertamente y en qué barrios suelen vivir.",
  },
  "Charlatán de Puerta de Baldur (Baldur's Gate Charlatan) [BGDiA]": {
    desc: "Vives de engañar a los demás y sabes hacerte pasar por un noble de Puerta de Baldur.",
    comp: "Engaño, Juego de Manos",
    herr: "Kit de disfraz, Kit de falsificación",
    equipo: "Ropa fina, Kit de disfraz, herramientas de timo a elegir (diez frascos con tapón llenos de líquido de colores, dados trucados, baraja marcada o anillo de sello de un duque imaginario), bolsa con 15 po.",
    rasgo: "Identidad Falsa (False Identity): has creado una segunda identidad con documentación, conocidos establecidos y disfraces para asumirla. Además, puedes falsificar documentos, incluidos papeles oficiales y cartas personales, siempre que hayas visto un ejemplo del tipo de documento o de la letra que intentas copiar. Heredero Perdido Hace Tiempo (Long-Lost Heir; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): conoces los modales y manías de los patriars (nobles de Puerta de Baldur) y otros nobles, y los imitas con soltura suficiente para convencer incluso a los cabezas de familia más estirados; sabes hacerte pasar por el heredero perdido de un linaje de patriars imaginario o extinguido. Gracias a ello tienes una ficha de la Guardia (Watch token) que te permite a ti solo entrar en la Ciudad Alta de Puerta de Baldur; quizá logres colar a otros contigo o incluso convencer a miembros de la Guardia de que eres un patriar, pero cualquier prueba real de tu autenticidad probablemente delatará el engaño. Estafas Favoritas (Favorite Schemes): eliges una estafa favorita o tiras en la tabla d6 (tabla de ejemplos en el libro).",
  },
  "Criminal de Puerta de Baldur (Baldur's Gate Criminal) [BGDiA]": {
    desc: "Te ganas la vida en el hampa de Puerta de Baldur, donde el crimen es un negocio más.",
    comp: "Engaño, Sigilo",
    herr: "1 Juego de mesa, Herramientas de ladrón",
    equipo: "Palanca, ropa común oscura con capucha, bolsa con 15 po.",
    rasgo: "Contacto Criminal (Criminal Contact): tienes un contacto fiable y de confianza que hace de enlace con una red de otros criminales. Sabes cómo enviarle y recibir mensajes de él, incluso a gran distancia; en concreto, conoces a los mensajeros locales, maestros de caravana corruptos y marineros turbios que pueden entregar mensajes por ti. Conexiones Criminales (Criminal Connections; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): en Puerta de Baldur el crimen es otro negocio; puedes concertar una reunión con un operativo de bajo rango de casi cualquier negocio, familia patriar, banda (crew), institución del gobierno o, por supuesto, el Gremio (Guild). Ese operativo te escuchará y, a su criterio, transmitirá tu información o petición a su cadena de mando. Estas reuniones casi siempre ocurren en lugares turbios. Orígenes Criminales (Criminal Origins) y Especialidad (Specialty): opcionales; eliges o tiras en las tablas d8 (tablas de ejemplos en el libro).",
  },
  "Artista de Puerta de Baldur (Baldur's Gate Entertainer) [BGDiA]": {
    desc: "Vives de actuar ante el público y conoces la trastienda del espectáculo en Puerta de Baldur.",
    comp: "Acrobacias, Interpretación",
    herr: "Kit de disfraz, 1 Instrumento musical",
    equipo: "Un instrumento musical (a elegir), el favor de un admirador (carta de amor, mechón de pelo o baratija), ropa de disfraz, bolsa con 15 po.",
    rasgo: "Por Aclamación Popular (By Popular Demand): siempre encuentras un sitio donde actuar, normalmente una posada o taberna, pero también un circo, un teatro o incluso la corte de un noble. Allí recibes alojamiento y comida gratis de nivel modesto o cómodo (según la calidad del local) mientras actúes cada noche. Además, tu actuación te convierte en una figura local: cuando desconocidos te reconocen en una ciudad donde has actuado, suelen tomarte simpatía. Pase de Bastidores (Backstage Pass; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): sabes que el verdadero negocio del espectáculo (o de cualquier empresa) ocurre entre bambalinas y te resulta fácil averiguar qué público frecuenta cada local (p. ej., los matones se juntan en el Blushing Mermaid y los patriars descarados en el Helm and Cloak). Tras una actuación con éxito puedes conocer a un entusiasta del público, de una ocupación o clase social que frecuente el local; ese contacto se alegra de hablar contigo y de escucharte. Especialidad (Specialty): eliges de una a tres rutinas o tiras en la tabla d10 (tabla de ejemplos en el libro).",
  },
  "Héroe del Pueblo de Puerta de Baldur (Baldur's Gate Folk Hero) [BGDiA]": {
    desc: "Vienes de los barrios humildes de Puerta de Baldur y la gente común te considera uno de los suyos.",
    comp: "Trato con Animales, Supervivencia",
    herr: "1 tipo de Herramientas de artesano, Vehículos (tierra)",
    equipo: "Un juego de herramientas de artesano (a elegir), pala, olla de hierro, ropa común, bolsa con 10 po.",
    rasgo: "Hospitalidad Rústica (Rustic Hospitality): al provenir de la gente común, encajas con facilidad entre ella. Puedes encontrar un lugar donde esconderte, descansar o recuperarte entre plebeyos, salvo que te hayas mostrado como un peligro para ellos; te protegerán de la ley o de cualquiera que te busque, aunque no arriesgarán la vida por ti. Venganza Social (Social Vengeance; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): has vivido toda tu vida en la Ciudad Baja o la Ciudad Exterior de Puerta de Baldur y sabes lo ansiosos que están los plebeyos por ver a cualquier patriar recibir su merecido. En una zona concurrida de la Ciudad Baja o la Exterior, puedes pasar 2d10 minutos convenciendo a 1d6 plebeyos de realizar un acto no ilegal que incomode a un miembro de la Guardia o del Flaming Fist, a un patriar o a otro individuo de aspecto adinerado. Orígenes de Héroe del Pueblo (Folk Hero Origins) y Especialidad (Specialty): opcionales; eliges o tiras en las tablas d6 y d10 (tablas de ejemplos en el libro).",
  },
  "Artesano de Gremio de Puerta de Baldur (Baldur's Gate Guild Artisan) [BGDiA]": {
    desc: "Perteneces a un gremio de artesanos y conoces las bandas y los barrios de Puerta de Baldur.",
    comp: "Perspicacia, Persuasión",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "1 a elegir",
    equipo: "Un juego de herramientas de artesano (a elegir), carta de presentación de tu gremio, ropa de viajero, bolsa con 15 po.",
    rasgo: "Membresía del Gremio (Guild Membership): como miembro establecido y respetado de un gremio, cuentas con los beneficios que da la pertenencia. Tus compañeros de gremio te dan alojamiento y comida si lo necesitas y pagan tu funeral. En algunas ciudades, la sede del gremio es un lugar central de encuentro con otros miembros de tu profesión, bueno para conocer posibles patronos, aliados o sirvientes. Los gremios suelen tener gran poder político: si te acusan de un delito, tu gremio te apoya si hay un buen caso para tu inocencia o el delito es justificable, y, si eres miembro en buenos términos, puedes acceder a figuras políticas poderosas a través de él (puede exigir donar dinero u objetos mágicos al gremio). Debes pagar una cuota de 5 po al mes; si te retrasas, debes pagar los atrasos para seguir en buenos términos. Cortesía Profesional (Professional Courtesy; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): conoces las bandas (crews) de la ciudad, sus territorios y su política entre bandas. Eliges uno de los tres distritos de Puerta de Baldur (Ciudad Alta, Ciudad Baja o Ciudad Exterior), donde llevas la mayor parte de tus negocios. Cuando necesites información sobre algo en un barrio de ese distrito, puedes buscar a miembros de bandas de la zona y enterarte de los chismes locales; además, accedes sin trabas a casi cualquier banco, sede de gremio, negocio, taller o punto de reunión de bandas de tu distrito. Especialidad (Specialty): eliges el negocio de tu gremio o tiras en la tabla d20; el DM y tú definís la naturaleza de tu gremio (tabla de ejemplos en el libro).",
  },
  "Ermitaño de Puerta de Baldur (Baldur's Gate Hermit) [BGDiA]": {
    desc: "Viviste largo tiempo en aislamiento, hiciste un gran descubrimiento y ahora conoces los bajos fondos de Puerta de Baldur.",
    comp: "Medicina, Religión",
    herr: "Kit de herboristería",
    idiomas: "1 a elegir",
    equipo: "Estuche de pergaminos lleno de notas de tus estudios u oraciones, manta de invierno, ropa común, Kit de herboristería, 5 po.",
    rasgo: "Descubrimiento (Discovery): la tranquila reclusión de tu retiro te dio acceso a un descubrimiento único y poderoso, cuya naturaleza depende de tu aislamiento: una gran verdad sobre el cosmos, las deidades, los seres poderosos de los planos exteriores o las fuerzas de la naturaleza; un lugar que nadie más ha visto; un hecho largamente olvidado; una reliquia del pasado que podría reescribir la historia; o información dañina para quienes te condenaron al exilio, motivo de tu regreso a la sociedad. El DM y tú definís los detalles y su impacto en la campaña. La Ciudad Real (The Real City; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): conoces la Puerta de Baldur que la mayoría de baldurianos ignora, el mundo despiadado de los sin techo y los desafortunados. Sabes adónde ir en la Ciudad Baja y la Ciudad Exterior para pasar desapercibido: en esos barrios bajos y campamentos de callejón consigues una cama húmeda y una mala comida, pero también cierta intimidad y que no te hagan preguntas. Vivir allí no es cómodo, pero es poco probable que nadie te encuentre y puedes quedarte cuanto quieras. Orígenes de Ermitaño (Hermit Origins) y Especialidad (Specialty, vida de reclusión): opcionales; eliges o tiras en las tablas d6 y d8 (tablas de ejemplos en el libro).",
  },
  "Noble de Puerta de Baldur (Baldur's Gate Noble) [BGDiA]": {
    desc: "Perteneces a una de las familias de élite (patriars) de Puerta de Baldur.",
    comp: "Historia, Persuasión",
    herr: "1 Juego de mesa",
    idiomas: "1 a elegir",
    equipo: "Ropa fina, anillo de sello, pergamino de linaje, bolsa con 25 po.",
    rasgo: "Patriar (Patriar; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): como miembro de una de las familias de élite de Puerta de Baldur, puedes cruzar las puertas de la ciudad sin pagar peajes, codearte con la nobleza de la ciudad sin que te cuestionen e impresionar a quienes buscan patronos ricos. Eres bienvenido en la Ciudad Alta y puedes quedarte allí de noche sin que te acosen ni te expulsen. Tu palabra se acepta sobre la de otros sin discusión, y la corrupción entre guardias o funcionarios tiende a favorecerte, no a perjudicarte, al menos hasta que hagas algún esfuerzo por denunciarla.",
  },
  "Forastero de Puerta de Baldur (Baldur's Gate Outlander) [BGDiA]": {
    desc: "Creciste lejos de la civilización y has llegado como forastero a Puerta de Baldur.",
    comp: "Atletismo, Supervivencia",
    herr: "1 Instrumento musical",
    idiomas: "1 a elegir",
    equipo: "Bastón, trampa de caza, trofeo de un animal que cazaste, ropa de viajero, bolsa con 10 po.",
    rasgo: "Vagabundo (Wanderer): tienes una excelente memoria para mapas y geografía y siempre recuerdas la disposición general del terreno, los asentamientos y otros rasgos a tu alrededor. Además, cada día encuentras comida y agua fresca para ti y hasta otras cinco personas, siempre que la tierra ofrezca bayas, caza menor, agua, etc. Experiencia de Inmigrante (Immigrant Experience; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): incluso tras poco tiempo en Puerta de Baldur has aprendido que la ciudad tiene más muros y puertas que los que patrullan la Guardia y el Flaming Fist. Eres conocido en las comunidades de inmigrantes de la ciudad; si necesitas saber sobre una tierra, pueblo, tradición o historia extranjeros, sabes dónde encontrar a alguien con experiencia de primera mano, probablemente en la Ciudad Exterior. Orígenes de Forastero (Outlander Origins) y Especialidad (Specialty, ocupación en tierras salvajes): opcionales; eliges o tiras en las tablas d6 y d10 (tablas de ejemplos en el libro).",
  },
  "Sabio de Puerta de Baldur (Baldur's Gate Sage) [BGDiA]": {
    desc: "Has dedicado años al estudio y conoces los secretos y rumores de Puerta de Baldur.",
    comp: "Arcana, Historia",
    idiomas: "2 a elegir",
    equipo: "Frasco de tinta negra, pluma, cuchillo pequeño, carta de un colega fallecido con una pregunta que aún no has podido responder, ropa común, bolsa con 10 po.",
    rasgo: "Investigador (Researcher): cuando intentas aprender o recordar un dato que no conoces, a menudo sabes dónde y de quién obtenerlo; normalmente en una biblioteca, scriptorium, universidad o un sabio u otra persona o criatura erudita. El DM puede dictaminar que lo que buscas está oculto en un lugar casi inaccesible o que simplemente no puede encontrarse; desvelar los mayores secretos del multiverso puede requerir una aventura o incluso una campaña entera. Chismoso (Rumor Monger; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): gracias a tu red de rumores personal y a los artículos publicados en el Baldur's Mouth, puedes deducir mucho de los secretos de los baldurianos (quién practica nigromancia, quién se dedica al espionaje o al contrabando, quién compraría o fabricaría artículos mágicos peligrosos sin pestañear). Cuando ocurre un crimen notable o un suceso misterioso en la ciudad, al instante tienes una lista de 1d4 sospechosos que, si no están implicados, tienen muchas probabilidades de saber quién lo está. Especialidad (Specialty, campo de estudio): eliges o tiras en la tabla d8 (tabla de ejemplos en el libro).",
  },
  "Marinero de Puerta de Baldur (Baldur's Gate Sailor) [BGDiA]": {
    desc: "Navegaste por mares peligrosos y conoces los muelles y el contrabando de Puerta de Baldur.",
    comp: "Atletismo, Percepción",
    herr: "Herramientas de navegante, Vehículos (agua)",
    equipo: "Clavija de abordaje (porra), 50 pies de cuerda de seda, amuleto de la suerte (como una pata de conejo o una piedra pequeña con un agujero en el centro, o una baratija aleatoria de la tabla de Baratijas del capítulo 5), ropa común, bolsa con 10 po.",
    rasgo: "Pasaje en Barco (Ship's Passage): cuando lo necesitas, puedes conseguir pasaje gratis en un barco de vela para ti y tus compañeros de aventuras. Puede ser el barco donde serviste u otro con el que tengas buena relación (quizá capitaneado por un antiguo compañero de tripulación). Como cobras un favor, no puedes estar seguro de un horario o ruta que cubra todas tus necesidades; el DM determina cuánto tardas en llegar adonde necesitas. A cambio del pasaje gratis, tú y tus compañeros debéis ayudar a la tripulación durante la travesía. Olfato de Contrabandista (Smuggler's Sense; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): conoces los muelles de Puerta de Baldur, el movimiento de inspectores y recaudadores de impuestos y cómo fluyen la carga y el dinero. Te resulta fácil desembarcar un cargamento o subirlo a un barco cooperativo sin levantar sospechas ni pagar impuestos. También conoces los movimientos de los Gray Wavers (los guardias del puerto del Flaming Fist) y sabes manejar las grúas mecanizadas de la ciudad.",
  },
  "Soldado de Puerta de Baldur (Baldur's Gate Soldier) [BGDiA]": {
    desc: "Has servido como soldado y tienes relación con el Flaming Fist o la Guardia de Puerta de Baldur.",
    comp: "Atletismo, Intimidación",
    herr: "1 Juego de mesa, Vehículos (tierra)",
    equipo: "Insignia de rango, trofeo de un enemigo caído (una daga, una hoja rota o un trozo de estandarte), dados de hueso o baraja, ropa común, bolsa con 10 po.",
    rasgo: "Rango Militar (Military Rank): tienes un rango militar de tu carrera como soldado. Los soldados leales a tu antigua organización militar siguen reconociendo tu autoridad e influencia y se someten a ti si son de rango inferior. Puedes invocar tu rango para influir en otros soldados y requisar equipo sencillo o caballos para uso temporal. Normalmente también puedes acceder a campamentos y fortalezas militares amigos donde se reconozca tu rango. Guardia de la Ciudad (City Guard; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): puedes elegir servir actualmente en el Flaming Fist o en la Guardia (Watch). Si lo haces, tienes responsabilidades propias de tu puesto y, mientras las cumplas, obtienes beneficios; si dejas de cumplirlas, pierdes los beneficios y puedes sufrir más consecuencias. Para recuperarlos debes tener una conversación desagradable con tu oficial al mando y cumplir tus responsabilidades durante un mes. Flaming Fist: una vez cada diez días debes presentarte en la Seatower of Balduran para entrenar, y tienes que cubrir un turno regular de patrulla en la Ciudad Baja o la Ciudad Exterior. A cambio, accedes a las fortalezas del Flaming Fist, tienes línea directa con oficiales y otros soldados, y puedes cruzar las puertas de la ciudad sin que te pregunten (aunque no puedes llevar invitados a la Ciudad Alta como un miembro de la Guardia); además, siempre eres bienvenido en el Three Old Kegs, donde los Three Old Toads te reciben con una sonrisa y una jarra de cerveza. La Guardia (The Watch): debes patrullar con regularidad la Ciudad Alta o cubrir un turno en sus puertas, y presentarte a entrenar en la Watch Citadel una vez cada diez días. A cambio, accedes a la Citadel y tienes línea directa con oficiales y funcionarios de la Guardia; tu palabra tiene mucho peso en la High Hall; la mayoría de los establecimientos del barrio Citadel Streets te dan comidas gratis a ti y a tus amigos; y puedes escoltar a personas a la Ciudad Alta sin que te pregunten, sean o no patriars o tengan fichas de la Guardia. Fuera de la Ciudad Alta, sin embargo, la mayoría te mira con recelo y sueles recibir una acogida fría si vas de uniforme. Prueba de Lealtad (Loyalty Test; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): has tratado con tantos soldados corruptos que detectas de lejos las conductas típicas de guardias y oficiales corruptos. Reconocer la corrupción no equivale a tener pruebas y tu instinto no es infalible, pero es un buen punto de partida para saber quién podría aceptar un soborno, mirar a otro lado ante un delito o tener conexiones criminales. También puedes usar este sentido para intuir quién cumplirá sus deberes estrictamente según el reglamento. Especialidad (Specialty, papel en tu unidad): eliges o tiras en la tabla d8 (tabla de ejemplos en el libro).",
  },
  "Pilluelo de Puerta de Baldur (Baldur's Gate Urchin) [BGDiA]": {
    desc: "Creciste en las calles de la ciudad, pobre y sin tutor, y conoces a los Gateguides.",
    comp: "Juego de Manos, Sigilo",
    herr: "Kit de disfraz, Herramientas de ladrón",
    equipo: "Cuchillo pequeño, mapa de la ciudad donde creciste, ratón de mascota, recuerdo de tus padres, ropa común, bolsa con 10 po.",
    rasgo: "Secretos de la Ciudad (City Secrets): conoces los patrones y el flujo secretos de las ciudades y encuentras pasos por la maraña urbana que otros pasan por alto. Fuera de combate, tú y los compañeros a quienes guíes podéis viajar entre dos lugares cualesquiera de la ciudad al doble de la velocidad normal. Conexión con los Gateguides (Gateguide Connection; solo en Puerta de Baldur o, a criterio del DM, en situaciones similares): aunque quizá no seas miembro de la banda de los Gateguides, has tratado con suficientes como para conocer su código de antorchas. Por la iluminación, colocación y tipo de antorcha dispuesta en una estructura o junto a ella, obtienes mucha información sobre quienes viven o comercian allí, en particular si tratan con justicia a los desconocidos, tienen conexiones con el Gremio (Guild) o el gobierno, o han ayudado o negado ayuda a los Gateguides en el pasado.",
  },
  "Sin Rostro (Faceless) [BGDiA]": {
    desc: "Aventuras tras la máscara de una persona pública que oculta tu verdadera identidad.",
    comp: "Engaño, Intimidación",
    herr: "Kit de disfraz",
    idiomas: "1 a elegir",
    equipo: "Kit de disfraz, un disfraz, bolsa con 10 po.",
    rasgo: "Persona Sin Rostro (Faceless Persona): aventuras tras la máscara de una persona pública, tan natural para ti como tu verdadero rostro oculto, que disfraza tu identidad. Tira en la tabla o pacta con el DM una persona única que encaje con el tono de la partida. Tabla d10: 1: espía o bandolero extravagante; 2: la encarnación de una nación o pueblo; 3: un canalla con disfraz enmascarado; 4: un espíritu vengativo; 5: la manifestación de una deidad o de tu fe; 6: alguien cuya belleza se realza mucho con maquillaje; 7: una imitación de otro héroe; 8: la encarnación de una escuela de magia; 9: un guerrero con armadura distintiva; 10: un disfraz con rasgos animales o monstruosos, pensado para infundir miedo. Doble Personalidad (Dual Personalities): la mayoría de tus compañeros y el mundo te conocen por tu persona; quienes intentan saber más de ti (tus debilidades, orígenes, propósito) topan con tu disfraz. Al ponerte un disfraz y comportarte como tu persona, eres irreconocible como tu verdadero yo; al quitarte el disfraz y mostrar tu verdadero rostro, ya no te identifican con tu persona. Así puedes alternar apariencias entre tus dos personalidades tantas veces como quieras, usando una para ocultar la otra o como camuflaje conveniente. Sin embargo, si alguien descubre la conexión entre tu persona y tu verdadero yo, tu engaño podría perder eficacia.",
  },

  /* ═══════════════════════════════════════════
     ACQUISITIONS INCORPORATED (AI)
  ═══════════════════════════════════════════ */
  "Vástago de Aventurero Famoso (Celebrity Adventurer's Scion) [AI]": {
    desc: "Eres descendiente de un aventurero famoso y su fama te abre puertas.",
    comp: "Percepción, Interpretación",
    herr: "Kit de disfraz",
    idiomas: "2 a elegir",
    equipo: "Kit de disfraz, ropa fina, bolsa con 30 po.",
    rasgo: "Alardear de Contactos (Name Dropping): conoces y has tratado con muchas personas poderosas de la tierra, y algunas quizá te recuerden. Puedes conseguir ayuda menor de una figura importante de la campaña, a criterio del DM. Además, la gente común te trata con deferencia, y tu herencia y las historias que cuentas pueden valerte una comida gratis o un lugar donde dormir.",
  },
  "Mercader Fracasado (Failed Merchant) [AI]": {
    desc: "Tu negocio como mercader fracasó, pero conservas tus contactos comerciales.",
    comp: "Investigación, Persuasión",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "1 a elegir",
    equipo: "Un juego de herramientas de artesano, balanza de mercader, ropa fina, bolsa con 10 po.",
    rasgo: "Cadena de Suministro (Supply Chain): de tu época como mercader conservas conexiones con mayoristas, proveedores y otros mercaderes y empresarios. Puedes recurrir a ellas al buscar objetos o información.",
  },
  "Apostador (Gambler) [AI]": {
    desc: "Vives del juego y las probabilidades.",
    comp: "Engaño, Perspicacia",
    herr: "1 Juego de mesa",
    idiomas: "1 a elegir",
    equipo: "Un juego de mesa, amuleto de la suerte, ropa fina, bolsa con 15 po.",
    rasgo: "Nunca Me Digas las Probabilidades (Never Tell Me the Odds): las probabilidades son tu pan de cada día. Durante actividades de tiempo libre que impliquen juegos de azar o calcular las probabilidades del mejor plan, te haces una idea sólida de qué opción es probablemente la mejor y de qué oportunidades parecen demasiado buenas para ser verdad, según determine el DM.",
  },
  "Demandante (Plaintiff) [AI]": {
    desc: "Has pasado por los tribunales y conoces a fondo el sistema legal.",
    comp: "Medicina, Persuasión",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "1 a elegir",
    equipo: "Un juego de herramientas de artesano, ropa fina, 20 po.",
    rasgo: "Jerga Legal (Legalese): tu experiencia con el sistema legal local te da un conocimiento firme de sus entresijos. Incluso cuando la ley no está de tu parte, puedes usar términos complejos como «ex injuria jus non oritur» y «cogitationis poenam nemo patitur» para asustar a la gente y hacerle creer que sabes de lo que hablas. Con gente común que no sabe más, quizá logres intimidar o engañar para obtener favores o trato especial.",
  },
  "Becario Rival (Rival Intern) [AI]": {
    desc: "Trabajaste como becario para un empleador y conservas conexiones con él.",
    comp: "Historia, Investigación",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "1 a elegir",
    equipo: "Un juego de herramientas de artesano, libro de cuentas de tu empleador anterior con un pequeño dato útil, ropa fina, bolsa con 10 po.",
    rasgo: "Informante Interno (Inside Informant): tienes conexiones con tu empleador anterior u otros grupos con los que trataste durante ese empleo. Puedes comunicarte con tus contactos y obtener información a criterio del DM.",
  },

  /* ═══════════════════════════════════════════
     GUILDMASTERS’ GUIDE TO RAVNICA (GGtR)
  ═══════════════════════════════════════════ */
  "Funcionario Azorius (Azorius Functionary) [GGtR]": {
    desc: "Formas parte del Senado Azorius, la burocracia que legisla y hace cumplir la ley en Ravnica.",
    comp: "Perspicacia, Intimidación",
    idiomas: "2 a elegir",
    equipo: "Insignia Azorius, pergamino con el texto de una ley importante para ti, frasco de tinta azul, pluma, ropa fina, bolsa con 10 po (monedas Azorius de 1 zino).",
    rasgo: "Autoridad Legal (Legal Authority): tienes autoridad para hacer cumplir las leyes de Ravnica, y eso inspira respeto e incluso miedo: la gente se comporta en tu presencia, evita llamar tu atención y asume que tienes derecho a estar donde estés. Mostrar tu insignia Azorius te consigue audiencia con quien quieras (aunque con infractores empedernidos puede causar más problemas de los que resuelve). Si abusas del privilegio, puedes meterte en serios problemas con tus superiores e incluso perder tu puesto. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Friends, Message; Nv.1: Command, Ensnaring Strike; Nv.2: Arcane Lock, Calm Emotions, Hold Person; Nv.3: Clairvoyance, Counterspell; Nv.4: Compulsion, Divination; Nv.5: Dominate Person. Tu magia suele adoptar la forma de runas azules o doradas que flotan y brillan en círculos, o de barreras azuladas de energía mágica (p. ej., las lianas de Ensnaring Strike pueden ser bandas luminosas con runas que rodean y sujetan al objetivo). Contactos (Contacts): tira dos veces en la tabla de Contactos Azorius (un aliado y un rival) y una en la de Contactos no Azorius (tablas en el libro).",
  },
  "Legionario Boros (Boros Legionnaire) [GGtR]": {
    desc: "Sirves como soldado en la Legión Boros, a las órdenes de sus oficiales y de los ángeles.",
    comp: "Atletismo, Intimidación",
    herr: "1 Juego de mesa",
    idiomas: "1 a elegir entre Celestial, Dracónico, Goblin o Minotauro",
    equipo: "Insignia Boros, pluma de ala de ángel, jirón de un estandarte Boros (recuerdo de una batalla famosa), ropa común, bolsa con 2 po (monedas Boros de 1 zino).",
    rasgo: "Puesto en la Legión (Legion Station): tienes un lugar establecido en la jerarquía de la Legión Boros. Puedes requisar equipo sencillo para uso temporal y acceder a cualquier guarnición Boros de Ravnica, donde descansas a salvo y recibes atención de médicos. Además cobras un salario de 1 po (una moneda Boros de 1 zino) a la semana que, junto al alojamiento gratuito en tu guarnición, te permite mantener un estilo de vida pobre entre aventuras. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Fire Bolt, Sacred Flame; Nv.1: Guiding Bolt, Heroism; Nv.2: Aid, Scorching Ray; Nv.3: Beacon of Hope, Blinding Smite; Nv.4: Death Ward, Wall of Fire; Nv.5: Flame Strike. Tu magia suele mostrar estallidos dramáticos de llamas o luz radiante; al lanzar conjuros beneficiosos sobre tus aliados, estos aparecen un instante rodeados de halos de fuego brillante. Contactos (Contacts): tira dos veces en la tabla de Contactos Boros (un aliado y un rival) y una en la de Contactos no Boros (tablas en el libro).",
  },
  "Operativo Dimir (Dimir Operative) [GGtR]": {
    desc: "Eres agente de la Casa Dimir, su red de espías, ladrones, asesinos y magos de la mente, infiltrado en otro gremio.",
    comp: "Engaño, Sigilo",
    herr: "Kit de disfraz",
    idiomas: "1 a elegir",
    equipo: "Insignia Dimir, 3 cuchillos pequeños, ropa común oscura y el equipo inicial del trasfondo de tu gremio secundario.",
    rasgo: "Identidad Falsa (False Identity): tienes más de una identidad. La que usas casi siempre te hace pasar por miembro de un gremio distinto de la Casa Dimir (tu gremio secundario), con documentación, conocidos establecidos y disfraces que te permiten asumirla y encajar en él. Cuando quieras puedes abandonar esa identidad y mezclarte con las masas sin gremio de la ciudad. Piensa con tu DM por qué estás infiltrado en el gremio secundario (tira un d8 o elige): 1: tus padres pertenecen a ese gremio y les dejas creer que sigues sus pasos; 2: te han asignado vigilar las actividades del gremio; 3: te han asignado acercarte a un individuo del gremio y averiguar sus secretos; 4: te han asignado reclutar a un nuevo espía Dimir entre sus filas; 5: eras miembro de ese gremio antes de que los Dimir te reclutaran; 6: no te gusta lo que representa el gremio y quieres destruirlo desde dentro; 7: en secreto desearías dejar a los Dimir y unirte a ese gremio, pero de los Dimir no se escapa; 8: elegiste el gremio al azar o por capricho. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Encode Thoughts, Mage Hand; Nv.1: Disguise Self, Sleep; Nv.2: Detect Thoughts, Pass without Trace; Nv.3: Gaseous Form, Meld into Stone, Nondetection; Nv.4: Arcane Eye, Freedom of Movement; Nv.5: Modify Memory. Tu magia pretende ser sutil e indetectable, aunque puede atraer sombras o nubes de niebla a tu alrededor. Con el truco Encode Thoughts puedes convertir los pensamientos de una criatura (incluidos los tuyos) en una hebra de pensamiento que otros pueden leer, compartir o robar; entre los Dimir se consideran una moneda valiosa. Contactos (Contacts): tira una vez en la tabla de Contactos Dimir (un aliado que es tu enlace en el gremio) y dos veces en la tabla de tu gremio secundario (la primera tirada da un aliado y la segunda un rival) (tablas en el libro).",
  },
  "Agente Golgari (Golgari Agent) [GGtR]": {
    desc: "Eres un instrumento especializado del Enjambre Golgari, que protege su existencia desde el subsuelo de la ciudad.",
    comp: "Naturaleza, Supervivencia",
    herr: "Kit de envenenador",
    idiomas: "1 a elegir entre Élfico, Gigante o Kraul",
    equipo: "Insignia Golgari, Kit de envenenador, escarabajo o araña de mascota, ropa común, bolsa con 10 po en monedas variadas.",
    rasgo: "Senderos del Subsuelo (Undercity Paths): conoces senderos subterráneos ocultos con los que esquivas multitudes, obstáculos y miradas al moverte por la ciudad. Fuera de combate, tú y los compañeros a quienes guíes podéis viajar entre dos lugares cualesquiera de la ciudad al doble de la velocidad normal. Esos senderos están acechados por peligros que rara vez salen a la superficie, así que el viaje no está garantizado como seguro. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Dancing Lights, Spare the Dying; Nv.1: Entangle, Ray of Sickness; Nv.2: Protection from Poison, Ray of Enfeeblement, Spider Climb; Nv.3: Animate Dead, Plant Growth; Nv.4: Giant Insect, Grasping Vine; Nv.5: Cloudkill, Insect Plague. La magia Golgari suele ir acompañada de un resplandor verde enfermizo y un hedor a podredumbre. Contactos (Contacts): tira dos veces en la tabla de Contactos Golgari (un aliado y un rival) y una en la de Contactos no Golgari (tablas en el libro).",
  },
  "Anarquista Gruul (Gruul Anarch) [GGtR]": {
    desc: "Perteneces a los Clanes Gruul y vives para luchar, asaltar y desatar tu furia.",
    comp: "Trato con Animales, Atletismo",
    herr: "Kit de herboristería",
    idiomas: "1 a elegir entre Dracónico, Gigante, Goblin o Silvano",
    equipo: "Insignia Gruul, trampa de caza, Kit de herboristería, cráneo de jabalí, capa de piel de bestia, ropa de viajero, bolsa con 10 po (monedas Azorius de 1 zino).",
    rasgo: "Refugio del Cinturón de Escombros (Rubblebelt Refuge): conoces a fondo zonas de la ciudad que casi todos evitan: barrios en ruinas arrasados por wurms, parques cubiertos de maleza que ninguna mano cuida desde hace décadas y los vastos cinturones de escombros (rubblebelts) de terreno roto que la gente civilizada abandonó. En esas zonas encuentras un lugar adecuado para que tú y tus aliados os escondáis o descanséis, y cada día encuentras comida y agua fresca para ti y hasta otras cinco personas. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Fire Bolt, Produce Flame; Nv.1: Compelled Duel, Speak with Animals, Thunderwave; Nv.2: Beast Sense, Shatter; Nv.3: Conjure Animals, Conjure Barrage; Nv.4: Dominate Beast, Stoneskin; Nv.5: Destructive Wave. Alimentada por el fuego de la rabia que arde en tu corazón, tu magia casi siempre va acompañada de efectos ígneos, como llamas humeantes tras tus ojos o danzando sobre tus manos. Contactos (Contacts): tira dos veces en la tabla de Contactos Gruul (un aliado y un rival) y una en la de Contactos no Gruul (tablas en el libro).",
  },
  "Ingeniero Izzet (Izzet Engineer) [GGtR]": {
    desc: "Contribuyes a la investigación de la Liga Izzet, entre laboratorios, experimentos e ingeniería.",
    comp: "Arcana, Investigación",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "1 a elegir entre Dracónico, Goblin o Vedalken",
    equipo: "Insignia Izzet, un juego de herramientas de artesano, restos calcinados y retorcidos de un experimento fallido, martillo, aparejo de poleas, ropa común, bolsa con 5 po (monedas Azorius de 1 zino).",
    rasgo: "Infraestructura Urbana (Urban Infrastructure): la Liga Izzet no solo hace inventos locos, experimentos peligrosos y explosiones: también se ocupa de tareas corrientes de construcción y arquitectura, sobre todo de crear la infraestructura que da a Ravnica agua corriente, plataformas levitantes y otras maravillas mágicas y tecnológicas. Tienes conocimientos básicos de la estructura de los edificios, incluido lo que hay tras las paredes, y puedes encontrar los planos de un edificio concreto para conocer los detalles de su construcción (puntos de entrada, debilidades estructurales, espacios secretos). Tu acceso a esa información no es ilimitado: si obtenerla o usarla te mete en problemas con la ley, el gremio no puede protegerte de las consecuencias. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Produce Flame, Shocking Grasp; Nv.1: Chaos Bolt, Create or Destroy Water, Unseen Servant; Nv.2: Heat Metal, Rope Trick; Nv.3: Call Lightning, Elemental Weapon, Glyph of Warding; Nv.4: Conjure Minor Elementals, Divination, Otiluke's Resilient Sphere; Nv.5: Animate Objects, Conjure Elemental. Tus conjuros tienden a ser ruidosos, vistosos o explosivos aunque su efecto sea corriente (p. ej., el portal de Rope Trick puede quedar perfilado por chispas inofensivas y llamativas). Si usas canalizador arcano, probablemente sea un artefacto intrincado con guanteletes metálicos, botes de cristal, tubos de cobre y correas de cuero que lo sujetan a tu cuerpo; el aparato de mizzium (mizzium apparatus) es una versión mágica de este equipo. Chaos Bolt es el conjuro favorito de los lanzadores Izzet por su carácter impredecible. Contactos (Contacts): tira dos veces en la tabla de Contactos Izzet (un aliado y un rival) y una en la de Contactos no Izzet (tablas en el libro).",
  },
  "Representante Orzhov (Orzhov Representative) [GGtR]": {
    desc: "Representas los intereses del Sindicato Orzhov, una estricta jerarquía de familias ricas y antiguas.",
    comp: "Intimidación, Religión",
    idiomas: "2 a elegir",
    equipo: "Insignia Orzhov, cadena de 1 pie de largo hecha con diez monedas de oro, vestimentas, ropa fina, bolsa con 1 pieza de platino (moneda Orzhov de 10 zinos).",
    rasgo: "Presión (Leverage): puedes ejercer presión sobre uno o varios individuos de rango inferior al tuyo en la jerarquía del gremio y exigirles ayuda según lo requiera la situación; por ejemplo, hacer que lleven un mensaje por el barrio, conseguir un breve trayecto en carruaje sin pagar o que otros limpien un desastre sangriento que dejaste en un callejón. El DM decide si tus exigencias son razonables y si hay subordinados disponibles para cumplirlas. A medida que mejora tu estatus en el gremio, ganas influencia sobre más gente, incluidos cargos de mayor poder. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Friends, Guidance; Nv.1: Command, Illusory Script; Nv.2: Enthrall, Ray of Enfeeblement, Zone of Truth; Nv.3: Bestow Curse, Speak with Dead, Spirit Guardians; Nv.4: Blight, Death Ward, Leomund's Secret Chest; Nv.5: Geas. Tu magia suele manifestarse como sombras arremolinadas, luz brillante o, a veces, la aparición momentánea de formas espirituales sombrías; tus conjuros pueden extraer la sangre de tus enemigos o tocar directamente sus almas. Contactos (Contacts): tira dos veces en la tabla de Contactos Orzhov (un aliado y un rival) y una en la de Contactos no Orzhov (tablas en el libro).",
  },
  "Cultista de Rakdos (Rakdos Cultist) [GGtR]": {
    desc: "Actúas en una troupe del Culto de Rakdos, convirtiendo el caos en espectáculo.",
    comp: "Acrobacias, Interpretación",
    herr: "1 Instrumento musical",
    idiomas: "1 a elegir entre Abisal o Gigante",
    equipo: "Insignia Rakdos, un instrumento musical a elección, disfraz, linterna sorda de hierro forjado, cadena de 10 pies con eslabones de púas afiladas, yesquero, 10 antorchas, ropa común, bolsa con 10 po (mezcla de monedas Azorius y Boros de 1 zino) y botella de zumo rojo y dulce.",
    rasgo: "Reputación Temible (Fearsome Reputation): la gente te reconoce como miembro del Culto de Rakdos y tiene cuidado de no provocar tu ira ni tu burla. Puedes salirte con la tuya en delitos menores (p. ej., negarte a pagar la comida en un restaurante o echar abajo la puerta de una tienda local) si ninguna autoridad legal presencia el delito: la mayoría está demasiado intimidada para denunciarte a los Azorius. Sentido de lo Dramático (A Flair for the Dramatic): los estilos de actuación Rakdos suelen fusionar la acrobacia circense con fuego, púas y ganchos de hierro forjado y monstruos. Tira un d8 o elige tu estilo preferido: 1: acróbata de rueda de púas; 2: satírico burlón; 3: malabarista de fuego; 4: titiritero de marionetas; 5: artista del dolor; 6: músico del ruido; 7: payaso de pesadilla; 8: maestro de ceremonias. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Fire Bolt, Vicious Mockery; Nv.1: Burning Hands, Dissonant Whispers, Hellish Rebuke; Nv.2: Crown of Madness, Enthrall, Flaming Sphere; Nv.3: Fear, Haste; Nv.4: Confusion, Wall of Fire; Nv.5: Dominate Person. Tu magia suele producir un espectáculo vistoso que te envuelve a ti o a tus objetivos en una mezcla de llamas inofensivas y formas sombrías; al manipular la mente de un oponente, un símbolo ardiente de Rakdos puede aparecer un instante como una máscara sobre su rostro. Contactos (Contacts): tira dos veces en la tabla de Contactos Rakdos (un aliado y un rival) y una en la de Contactos no Rakdos (tablas en el libro).",
  },
  "Iniciado Selesnya (Selesnya Initiate) [GGtR]": {
    desc: "Formas parte del Cónclave Selesnya, una comunidad guiada por dríadas que celebra la diversidad de sus miembros al servicio del conjunto.",
    comp: "Naturaleza, Persuasión",
    herr: "1 tipo de Herramientas de artesano o 1 Instrumento musical",
    idiomas: "1 a elegir entre Élfico, Loxodon o Silvano",
    equipo: "Insignia Selesnya, Botiquín de sanador, túnica, ropa común, bolsa con 5 po (monedas Azorius de 1 zino).",
    rasgo: "Refugio del Cónclave (Conclave's Shelter): como miembro del Cónclave Selesnya, puedes contar con que tus compañeros de gremio te den cobijo y ayuda. Tú y tus compañeros podéis encontrar un lugar donde esconderos o descansar en cualquier enclave Selesnya de la ciudad, salvo que hayas demostrado ser un peligro para ellos. Los miembros del enclave te protegen de la ley o de cualquiera que te busque, aunque no arriesgarán su vida por ello. Además, como miembro del gremio puedes recibir curación y cuidados gratuitos en un enclave Selesnya, pero debes aportar los componentes materiales de los conjuros. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Druidcraft, Friends; Nv.1: Animal Friendship, Charm Person; Nv.2: Aid, Animal Messenger, Calm Emotions, Warding Bond; Nv.3: Plant Growth, Speak with Plants; Nv.4: Aura of Life, Conjure Minor Elementals; Nv.5: Awaken, Commune with Nature. Los miembros del Cónclave llaman a su magia «doruvati» (palabra silvana que significa «don»). Al usar estos dones de Mat'Selesnya, remolinos elegantes de luz verde y plateada danzan en el aire a tu alrededor y pueden flotar hojas verdes fantasmales; tus conjuros pueden ir acompañados de una sensación de calidez suave y del olor de flores primaverales u hojas otoñales. Contactos (Contacts): tira dos veces en la tabla de Contactos Selesnya (un aliado y un rival) y una en la de Contactos no Selesnya (tablas en el libro).",
  },
  "Científico Simic (Simic Scientist) [GGtR]": {
    desc: "Investigas como científico del Combinado Simic, en un clado o en un proyecto especializado.",
    comp: "Arcana, Medicina",
    idiomas: "2 a elegir",
    equipo: "Insignia Simic, ropa común, libro de notas de investigación, pluma, frasco de tinta de calamar, frasco de aceite (de grasa de cetáceo), vial de ácido (derivado de jugos digestivos), vial de escamas de pez, vial de algas, vial de aguijones de medusa, botella de cristal con babaza sin identificar, bolsa con 10 po (monedas Azorius de 1 zino).",
    rasgo: "Investigador (Researcher): cuando intentas aprender o recordar un dato mágico o científico que no conoces, sabes dónde y de quién puedes obtenerlo; normalmente de un laboratorio Simic y a veces de una instalación Izzet, una biblioteca, una universidad o un erudito independiente u otra criatura docta. Saber dónde está la información no te permite obtenerla automáticamente: puede que debas ofrecer sobornos, favores u otros incentivos para que revelen sus secretos. El DM puede decidir que el conocimiento que buscas está oculto en un lugar inaccesible o que simplemente no se puede encontrar; desvelar los mayores secretos del multiverso puede requerir una aventura o incluso una campaña entera. Clados y Proyectos (Clades and Projects): como investigador Simic formas parte de un clado (grupo diverso de individuos que combinan talentos dispares en pos de un objetivo común) o eres investigador en un proyecto especializado a corto plazo centrado en una necesidad inmediata. Tira un d6 o elige tu área de investigación: 1: Clado Casco (Hull), centrado en protección y durabilidad; 2: Clado Aleta (Fin), centrado en el movimiento; 3: Clado Giro (Gyre), centrado en patrones cíclicos y metamagia; 4: Proyecto Guardián (Guardian), centrado en crear monstruos guardianes y supersoldados; 5: Proyecto Criptis (Crypsis), centrado en inteligencia y contrainteligencia; 6: investigación independiente en un campo nuevo. Conjuros de Gremio (Guild Spells): Req. rasgo Lanzamiento de Conjuros o Magia de Pacto. Los conjuros de la tabla se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, a todas ellas). Truco: Acid Splash, Druidcraft; Nv.1: Detect Poison and Disease, Expeditious Retreat, Jump; Nv.2: Alter Self, Enhance Ability, Enlarge/Reduce; Nv.3: Gaseous Form, Water Breathing, Wind Wall; Nv.4: Freedom of Movement, Polymorph; Nv.5: Creation. Cuando tu magia causa alteraciones físicas en ti o en otros, el resultado suele mostrar rasgos de peces, anfibios u otras criaturas acuáticas; remolinos azul verdoso de energía mágica pueden acompañar tus conjuros, formando espirales que reflejan la perfección matemática de la naturaleza. Contactos (Contacts): tira dos veces en la tabla de Contactos Simic (un aliado y un rival) y una en la de Contactos no Simic (tablas en el libro).",
  },

  /* ═══════════════════════════════════════════
     MYTHIC ODYSSEYS OF THEROS (MOoT)
  ═══════════════════════════════════════════ */
  "Atleta (Athlete) [MOoT]": {
    desc: "Has destacado en competiciones atléticas y has ganado la admiración del público.",
    comp: "Acrobacias, Atletismo",
    herr: "Vehículos (tierra)",
    idiomas: "1 a elegir",
    equipo: "Un disco de bronce o una pelota de cuero, un amuleto de la suerte o un trofeo pasado, ropa de viajero, bolsa con 10 po.",
    rasgo: "Ecos de Victoria (Echoes of Victory): has ganado admiración entre espectadores, atletas y entrenadores de la región que acogió tus victorias pasadas. Al visitar cualquier asentamiento a menos de 100 millas de donde creciste, hay un 50 % de probabilidad de encontrar a alguien que te admire y esté dispuesto a darte información o refugio temporal. Entre aventuras puedes competir en eventos atléticos lo bastante bien como para mantener un estilo de vida cómodo, según la actividad de descanso «Ejercer una profesión» (cap. 8 del Player's Handbook). Evento Favorito (Favored Event): la mayoría de los atletas destacan en una sola forma de competición; elige o tira d8: 1: maratón; 2: carrera de larga distancia; 3: lucha; 4: boxeo; 5: carrera de carros o caballos; 6: pancracio (combate mixto sin armas); 7: carrera de hoplitas (en armadura completa con una unidad); 8: pentatlón (carrera, salto de longitud, disco, jabalina, lucha).",
  },

  /* ═══════════════════════════════════════════
     THE WILD BEYOND THE WITCHLIGHT (WBtW)
  ═══════════════════════════════════════════ */
  "Extraviado Feérico (Feylost) [WBtW]": {
    desc: "Te perdiste en el Feywild y volviste transformado por su magia y sus costumbres.",
    comp: "Engaño, Supervivencia",
    herr: "1 tipo de Instrumento musical",
    idiomas: "1 a elegir entre Élfico, Gnómico, Goblin o Silvano",
    equipo: "Un instrumento musical a elegir, ropa de viajero, tres baratijas (cada una determinada tirando en la tabla de Baratijas del Feywild), bolsa con 8 po.",
    rasgo: "Conexión con el Feywild (Feywild Connection): tus modales y tu conocimiento de las costumbres feéricas son reconocidos por los nativos del Feywild, que te ven como uno de los suyos; por ello, las criaturas Feéricas amistosas tienden a ayudarte si estás perdido o necesitas ayuda en el Feywild. Marca Feérica (Fey Mark): tu estancia en el Feywild te transformó de forma sutil y obtuviste una marca feérica; elige o tira d8 (tabla de 8 marcas en el libro). Visitante del Feywild (Feywild Visitor): cuando duermes profundamente o estás en trance profundo durante un Descanso Largo, un espíritu del Feywild puede visitarte, si el DM quiere; su forma se determina tirando d8: 1: criatura despertada (una Bestia o planta corriente sobre la que se lanzó Awaken); 2: Centaur; 3: Dryad; 4: Faerie Dragon; 5: Pixie; 6: Satyr; 7: Sprite; 8: Unicorn. Estas visitas nunca te hacen daño, pueden durar minutos u horas y las recuerdas al despertar. Las conversaciones pueden contener mensajes, revelaciones, tonterías o pistas falsas, a criterio del DM, y siempre se desarrollan en un idioma que entiendes, aunque el visitante no pueda hablarlo normalmente.",
  },
  "Mano de Witchlight (Witchlight Hand) [WBtW]": {
    desc: "Eres uno de los artistas, ayudantes o cuidadores de animales del Carnaval Witchlight.",
    comp: "Interpretación, Juego de Manos",
    herr: "Kit de disfraz o 1 tipo de Instrumento musical",
    idiomas: "1 a elegir",
    equipo: "Un kit de disfraz o un instrumento musical a elegir, una baraja de cartas, un uniforme de carnaval o disfraz, una baratija (determinada tirando en la tabla de Baratijas del Feywild), bolsa con 8 po.",
    rasgo: "Fijo del Carnaval (Carnival Fixture): el Carnaval Witchlight te proporciona alojamiento modesto y comida gratis. Además, puedes pasearte por el carnaval y disfrutar de sus muchas maravillas sin coste alguno, siempre que no interrumpas sus espectáculos ni causes otros problemas. Compañero del Carnaval (Carnival Companion): con los años te has ganado la amistad de otro habitual del carnaval; tira d8 para saber a quién o qué has hecho tu amigo, o elige la opción que prefieras: 1: Witchlight hand viejo y cascarrabias; 2: Witchlight hand joven e impresionable; 3: artista (como un acróbata, un payaso o un músico); 4: artista retirado; 5: domador de animales experimentado; 6: Blink Dog viejo; 7: Sprite alegre; 8: fuego fatuo mágico e inofensivo (no necesita ficha) con Velocidad de vuelo 30 pies, que puede flotar y emite luz brillante en 5 pies y luz tenue otros 5 pies. Desarrolla esta amistad con tu DM. El compañero te acompaña mientras estés en el carnaval, pero no lo abandonará voluntariamente. El DM puede usar la ficha de Witchlight hand del libro para ayudantes, artistas y domadores; las fichas de los demás compañeros están en el Monster Manual.",
  },

  /* ═══════════════════════════════════════════
     SIGIL AND THE OUTLANDS (SatO)
  ═══════════════════════════════════════════ */
  "Guardián de Portal (Gate Warden) [SatO]": {
    desc: "Creciste en una ciudad-portal y viviste empapado de energía de otros planos.",
    comp: "Persuasión, Supervivencia",
    idiomas: "2 a elegir (se recomiendan Abisal, Celestial o Infernal)",
    equipo: "Un llavero con llaves de cerraduras desconocidas, un libro en blanco, una pluma de tinta o una pluma de ave, un frasco de tinta negra, ropa de viajero, bolsa con 10 po.",
    rasgo: "Infusión Planar (Planar Infusion): vivir en una ciudad-portal o lugar similar te impregnó de energía planar. Obtienes la dote Scion of the Outer Planes. Además, sabes dónde encontrar alojamiento modesto y comida gratis en la comunidad donde creciste. Baratijas de Guardián de Portal: al crear el personaje puedes tirar una vez en la tabla de Baratijas de Guardián de Portal, en lugar de la tabla de Baratijas del Player's Handbook, para tu baratija inicial (tabla en el libro).",
  },
  "Filósofo Planar (Planar Philosopher) [SatO]": {
    desc: "Defiendes las creencias de una facción ideológica de Sigil, la Ciudad de las Puertas.",
    comp: "Arcana, y la habilidad asociada a tu facción (ver Afinidades de Facción de Sigil en el rasgo) o 1 a elegir",
    idiomas: "2 a elegir",
    equipo: "Una llave de portal (por ejemplo, una bolsa de hojas de té doradas o el diente de una bestia planar), un manifiesto de tu filosofía, ropa común al estilo de tu facción, bolsa con 10 po en monedas de distintos mundos y planos.",
    rasgo: "Convicción (Conviction): obtienes la dote Scion of the Outer Planes. Además, los miembros de tu organización te proporcionan alojamiento modesto y comida gratis en cualquiera de sus propiedades o en los hogares de otros miembros de la facción. Afinidades de Facción de Sigil (Sigil Faction Affinities): doce facciones han ganado relevancia en la Ciudad de las Puertas, aunque existen muchas más; tu personaje puede pertenecer a una de ellas o a otra facción ideológica, quizá creada por ti. Habilidad asociada: Athar: Religión; Bleak Cabal: Perspicacia; Doomguard: Naturaleza; Fated: Intimidación; Fraternity of Order: Historia; Hands of Havoc: Sigilo; Harmonium: Percepción; Heralds of Dust: Medicina; Mercykillers: Supervivencia; Mind's Eye: Persuasión; Society of Sensation: Interpretación; Transcendent Order: Atletismo. Baratijas de Filósofo Planar: al crear el personaje puedes tirar una vez en la tabla de Baratijas de Filósofo Planar, en lugar de la tabla de Baratijas del Player's Handbook, para tu baratija inicial (tabla en el libro).",
  },

  /* ═══════════════════════════════════════════
     BIGBY PRESENTS: GLORY OF THE GIANTS (BGotG)
  ═══════════════════════════════════════════ */
  "Expósito de Gigantes (Giant Foundling) [BGotG]": {
    desc: "Te criaste entre criaturas colosales que te acogieron como a uno de los suyos.",
    comp: "Intimidación, Supervivencia",
    idiomas: "Gigante y 1 a elegir",
    equipo: "Mochila, ropa de viajero, una piedrecita o una ramita que te recuerde a tu hogar, bolsa con 10 po.",
    rasgo: "Golpe de los Gigantes (Strike of the Giants): obtienes la dote Strike of the Giants. Orígenes (Origin Stories): cómo llegaste a vivir entre gigantes lo decides tú; la tabla Foundling Origin (d6) sugiere seis posibilidades (tabla de ejemplos en el libro). Aunque eres inusualmente grande para los de tu especie, no eres más grande que un niño gigante, así que puedes ser muy consciente de tu tamaño.",
  },
  "Tallador de Runas (Rune Carver) [BGotG]": {
    desc: "Persigues los secretos de las runas de los gigantes, movido por el estudio, un misterio ancestral o un encuentro fatídico.",
    comp: "Historia, Percepción",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "Gigante",
    equipo: "Un juego de herramientas de artesano a elegir, un cuchillo pequeño, una piedra de afilar, ropa común, bolsa con 10 po.",
    rasgo: "Moldeador de Runas (Rune Shaper): obtienes la dote Rune Shaper. Estilos de Runas (Rune Styles): cada tallador de runas tiene un estilo y un medio preferidos; para determinar cómo haces tus runas puedes tirar d6 en la tabla Rune Style (tabla de 6 estilos en el libro).",
  },

  /* ═══════════════════════════════════════════
     RAVENLOFT: THE HORRORS WITHIN (THW, 2024)
  ═══════════════════════════════════════════ */
  "Perseguido (Haunted One) [THW 2024]": {
    desc: "Has afrontado un horror indecible y la oscuridad te sigue a todas partes.",
    asi: "CON, SAB o CAR",
    dote: "Survivor o una dote Dark Gift a elegir",
    comp: "Arcana, Supervivencia",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: el Juego de mesa elegido, palanca, agua bendita (1 frasco), espejo, aceite (2 frascos), silbato de señales, yesquero, ropa de viajero, 5 antorchas, odre, 14 po · B: 50 po",
  },
  "Investigador (Investigator) [THW 2024]": {
    desc: "Te ganas la vida descubriendo la verdad que se esconde tras los crímenes y los misterios.",
    asi: "INT, SAB o CAR",
    dote: "Sharp Eye o una dote Dark Gift a elegir",
    comp: "Perspicacia, Investigación",
    herr: "Kit de disfraz",
    equipo: "A: Kit de disfraz, grilletes, pala, ropa de viajero, 3 viales, 16 po · B: 50 po",
  },
  "Errante de la Niebla (Mist Wanderer) [THW 2024]": {
    desc: "Has recorrido sendas envueltas en niebla y sobrevives entre sus sombras.",
    asi: "DES, CON o SAB",
    dote: "Una dote Dark Gift a elegir (se recomienda Mist Walker)",
    comp: "Supervivencia, Sigilo",
    herr: "1 tipo de Herramientas de artesano (a elegir)",
    equipo: "A: las Herramientas de artesano elegidas, lámpara, aceite (5 frascos), bolsa, cuerda, yesquero, ropa de viajero, 30 po · B: 50 po",
  },
  "Médium (Spirit Medium) [THW 2024]": {
    desc: "Sirves de enlace entre los vivos y los espíritus que susurran desde el más allá.",
    asi: "CON, INT o SAB",
    dote: "Una dote Dark Gift a elegir (se recomienda Gathered Whispers)",
    comp: "Perspicacia, Religión",
    herr: "1 Juego de mesa (a elegir)",
    equipo: "A: daga, el Juego de mesa elegido, cesta, campana, 8 velas, tinta, pluma de tinta, papel (5 hojas), yesquero, ropa de viajero, 32 po · B: 50 po",
  },

  /* ═══════════════════════════════════════════
     VAN RICHTEN’S GUIDE TO RAVENLOFT (VRGtR)
  ═══════════════════════════════════════════ */
  "Perseguido (Haunted One) [VRGtR]": {
    desc: "Quienes te miran a los ojos ven que has afrontado un horror inimaginable y que la oscuridad no te es ajena.",
    comp: "2 a elegir entre Arcana, Investigación, Religión y Supervivencia",
    idiomas: "2 a elegir, uno de ellos Abisal, Celestial, Habla Profunda, Dracónico, Infernal, Primordial, Silvano o Subcomún",
    equipo: "Kit de cazamonstruos (cofre, palanca, martillo, 3 estacas de madera, símbolo sagrado, frasco de agua bendita, grilletes, espejo de acero, frasco de aceite, yesquero, 3 antorchas), ropa común, una baratija de especial significado (a elegir o tirar en la tabla de Baratijas de Terror) y 1 pp.",
    rasgo: "Corazón de Oscuridad (Heart of Darkness): quienes te miran a los ojos ven que has afrontado un horror inimaginable y que la oscuridad no te es ajena. Aunque te teman, los plebeyos te tratarán con toda cortesía y harán lo posible por ayudarte; salvo que te hayas mostrado peligroso para ellos, incluso empuñarán las armas para luchar a tu lado si te enfrentas solo a un enemigo. Suceso Desgarrador (Harrowing Event): antes de ser aventurero, tu vida quedó definida por un momento oscuro, una decisión fatídica o una tragedia, y ahora sientes una oscuridad que amenaza con consumirte; elige un suceso que te atormente o tira d10 (tabla de 10 sucesos en el libro).",
  },
  "Investigador (Investigator) [VRGtR]": {
    desc: "Eres experto en acceder a personas y lugares para obtener la información que necesitas.",
    comp: "2 a elegir entre Perspicacia, Investigación y Percepción",
    herr: "Kit de disfraz, Herramientas de ladrón",
    equipo: "Una lupa, pruebas de un caso pasado (a elegir o tirar una baratija en la tabla de Baratijas de Terror), ropa común y 10 po.",
    rasgo: "Investigación Oficial (Official Inquiry): eres experto en acceder a personas y lugares para obtener la información que necesitas. Combinando labia, determinación y documentación de aspecto oficial, puedes acceder a un lugar o a una persona relacionados con un crimen que estés investigando. Quienes no están implicados en tu investigación evitan obstaculizarte o transmiten tus peticiones. Además, las fuerzas del orden locales tienen una opinión firme de ti: te ven como una molestia o como uno de los suyos. Camino al Misterio (Path to Mystery): tu primer caso influyó en los tipos de misterios que te interesan; elige o tira d8 en la tabla First Case para desarrollar el misterio que inició tu carrera de investigador (tabla de 8 casos en el libro).",
  },

  /* ═══════════════════════════════════════════
     PLANE SHIFT: AMONKHET (PSA)
  ═══════════════════════════════════════════ */
  "Iniciado (Initiate) [PSA]": {
    desc: "Tu vida gira en torno a las cinco pruebas que determinarán tu valía en el más allá.",
    comp: "Atletismo, Intimidación",
    herr: "1 Juego de mesa, Vehículos (tierra)",
    equipo: "Una caja de rompecabezas sencilla, un pergamino con las enseñanzas básicas de los cinco dioses, un juego de mesa, ropa común, bolsa con 15 po. Si has superado alguna prueba antes de empezar la campaña, también tienes las cartelas (cartouches) que hayas ganado.",
    rasgo: "Pruebas de los Cinco Dioses (Trials of the Five Gods): tu vida se orienta a participar en las cinco pruebas que determinarán tu valía en el más allá. Mientras te preparas y las afrontas, tienes acceso constante a entrenamiento. Momias sirvientes (los ungidos), bajo la supervisión de visires, te proporcionan un lugar cómodo donde vivir y comidas regulares. Solo disfrutas de estos beneficios mientras obedezcas las normas sociales de Naktamun: entrenar para las pruebas (con o sin tu cosecha, crop), obedecer las órdenes de los dioses y seguir las instrucciones de sus visires. Si las infringes, corres el riesgo de ser tratado como disidente. Las pruebas y sus recompensas se detallan en la sección «Trials of the Five Gods» del libro.",
  },
  "Iniciado Disidente (Initiate (Dissenter)) [PSA]": {
    desc: "Eres un iniciado que ha roto con las normas de Naktamun y sobrevive gracias a otros disidentes.",
    comp: "Atletismo, Intimidación",
    herr: "1 Juego de mesa, Vehículos (tierra)",
    equipo: "Una caja de rompecabezas sencilla, un pergamino con las enseñanzas básicas de los cinco dioses, un juego de mesa, ropa común, bolsa con 15 po. Si has superado alguna prueba antes de empezar la campaña, también tienes las cartelas (cartouches) que hayas ganado.",
    rasgo: "Refugio de Disidentes (Shelter of Dissenters): para tener alguna esperanza de sobrevivir, ya sea ocultos en la ciudad o expulsados al desierto, los disidentes deben ayudarse entre sí. Puedes encontrar un lugar donde esconderte, descansar o recuperarte entre otros disidentes, que te ayudarán a protegerte de quienes te cazan, incluso arriesgando su vida por ti.",
  },
  "Visir (Vizier) [PSA]": {
    desc: "Eres la voz de tu dios ante los iniciados de Naktamun.",
    comp: "Historia, Religión",
    herr: "1 tipo de Herramientas de artesano, 1 tipo de Instrumento musical",
    equipo: "Un juego de herramientas de artesano o un instrumento musical (a elegir), un pergamino con las enseñanzas de tu dios, una cartela de visir (vizier's cartouche), ropa fina, bolsa con 25 po.",
    rasgo: "Voz de la Autoridad (Voice of Authority): tu voz es la voz de tu dios, al menos en teoría. Tu trabajo puede incluir formar e instruir a iniciados, que están obligados a obedecerte. En cualquier circunstancia, se espera que un iniciado se someta a tu voz y obedezca tus órdenes. Si abusas de esta autoridad, tu dios podría castigarte personalmente.",
  },
  "Visir Disidente (Vizier (Dissenter)) [PSA]": {
    desc: "Eres un visir que ha roto con las normas de Naktamun y sobrevive gracias a otros disidentes.",
    comp: "Historia, Religión",
    herr: "1 tipo de Herramientas de artesano, 1 tipo de Instrumento musical",
    equipo: "Un juego de herramientas de artesano o un instrumento musical (a elegir), un pergamino con las enseñanzas de tu dios, una cartela de visir (vizier's cartouche), ropa fina, bolsa con 25 po.",
    rasgo: "Refugio de Disidentes (Shelter of Dissenters): para tener alguna esperanza de sobrevivir, ya sea ocultos en la ciudad o expulsados al desierto, los disidentes deben ayudarse entre sí. Puedes encontrar un lugar donde esconderte, descansar o recuperarte entre otros disidentes, que te ayudarán a protegerte de quienes te cazan, incluso arriesgando su vida por ti.",
  },

  /* ═══════════════════════════════════════════
     PLANE SHIFT: INNISTRAD (PSI)
  ═══════════════════════════════════════════ */
  "Inquisidor (Inquisitor) [PSI]": {
    desc: "Sirves a la Iglesia con autoridad para detener a los criminales y juzgarlos.",
    comp: "Investigación, Religión",
    herr: "Herramientas de ladrón, 1 tipo de Herramientas de artesano",
    equipo: "Símbolo sagrado, ropa de viajero, bolsa con 15 po.",
    rasgo: "Autoridad Legal (Legal Authority): como inquisidor de la Iglesia, tienes autoridad para arrestar a criminales. A falta de otras autoridades, estás autorizado a dictar sentencia e incluso a ejecutarla. Si abusas de este poder, tus superiores en la Iglesia podrían retirártelo.",
  },

  /* ═══════════════════════════════════════════
     DRAGONLANCE: SHADOW OF THE DRAGON QUEEN (SotDQ)
  ═══════════════════════════════════════════ */
  "Caballero de Solamnia (Knight of Solamnia) [SotDQ]": {
    desc: "Perteneces a los Caballeros de Solamnia y sirves a sus ideales con tu destreza marcial.",
    comp: "Atletismo, Supervivencia",
    idiomas: "2 a elegir",
    equipo: "Una insignia de rango, una baraja de cartas, ropa común, bolsa con 10 po.",
    rasgo: "Escudero de Solamnia (Squire of Solamnia): obtienes la dote Squire of Solamnia. Además, los Caballeros de Solamnia te proporcionan alojamiento modesto y comida gratis en cualquiera de sus fortalezas o campamentos. Baratijas de Caballero de Solamnia: al crear el personaje tira una vez en la tabla de Baratijas de Caballero de Solamnia (d6), en lugar de la tabla de Baratijas del Player's Handbook, para tu baratija inicial (tabla en el libro).",
  },
  "Mago de la Alta Hechicería (Mage of High Sorcery) [SotDQ]": {
    desc: "Perteneces a la orden de los Magos de la Alta Hechicería, guardianes del saber arcano de Krynn.",
    comp: "Arcana, Historia",
    idiomas: "2 a elegir",
    equipo: "Un frasco de tinta de color, una pluma de tinta, ropa común, bolsa con 10 po.",
    rasgo: "Iniciado de la Alta Hechicería (Initiate of High Sorcery): obtienes la dote Initiate of High Sorcery. Además, los Magos de la Alta Hechicería te proporcionan alojamiento modesto y comida gratis de forma indefinida en cualquier Torre de la Alta Hechicería ocupada y durante una noche en el hogar de un miembro de la organización. Baratijas de Mago de la Alta Hechicería: al crear el personaje tira una vez en la tabla de Baratijas de Mago de la Alta Hechicería (d6), en lugar de la tabla de Baratijas del Player's Handbook, para tu baratija inicial (tabla en el libro).",
  },

  /* ═══════════════════════════════════════════
     THE BOOK OF MANY THINGS (BMT)
  ═══════════════════════════════════════════ */
  "Recompensado (Rewarded) [BMT]": {
    desc: "Tu vida dio un giro repentino tras años de penurias y recibiste una segunda oportunidad.",
    comp: "Perspicacia, Persuasión",
    herr: "1 Juego de mesa a elegir (por ejemplo, cartas o cartas de three-dragon ante)",
    idiomas: "1 a elegir",
    equipo: "Un frasco de tinta negra, una pluma de tinta, cinco hojas de papel, un juego de mesa (el de la competencia elegida), un anillo de sello, ropa fina, bolsa con 18 po.",
    rasgo: "Favor de la Fortuna (Fortune's Favor): tu inesperada buena fortuna se refleja en un beneficio menor. Obtienes una dote a elegir entre Lucky, Magic Initiate o Skilled. Tu elección refleja la transformación que cambió tu vida: un encuentro con un genio que te concedió tres deseos puede haber dado poderes mágicos (Magic Initiate); si saldaste las deudas de tu familia con una partida afortunada de three-dragon ante, podrías ser Lucky; y Skilled refleja la prueba que superaste para asegurar tu nuevo destino y los conocimientos y habilidades que te dio la fuerza que transformó tu vida. Baratijas de Recompensado: al crear el personaje puedes tirar una vez en la tabla de Baratijas de Recompensado (d6), en lugar de la tabla de Baratijas del Player's Handbook, para tu baratija inicial (tabla en el libro).",
  },
  "Arruinado (Ruined) [BMT]": {
    desc: "Lo tenías todo hasta que una desgracia ruinosa te derribó como a un castillo de naipes.",
    comp: "Sigilo, Supervivencia",
    herr: "1 Juego de mesa a elegir (por ejemplo, cartas o cartas de three-dragon ante)",
    idiomas: "1 a elegir",
    equipo: "Un reloj de arena agrietado, unos grilletes oxidados, una botella medio vacía, una trampa de caza, un juego de mesa (el de la competencia elegida), ropa de viajero, bolsa con 13 po.",
    rasgo: "Todavía en Pie (Still Standing): has soportado una desgracia ruinosa y posees reservas ocultas que otros no esperan. Obtienes una dote a elegir entre Alert, Skilled o Tough. Tu elección refleja cómo has afrontado la terrible pérdida que cambió tu vida: si has mantenido los sentidos alerta ante cada oportunidad y has salido de la miseria aferrándote a la menor esperanza, elige Alert; si has redoblado tus esfuerzos para recuperar lo que fue tuyo, elige Skilled; si has perseverado estoicamente ante la desgracia, elige Tough. Baratijas de Arruinado: al crear el personaje puedes tirar una vez en la tabla de Baratijas de Arruinado (d6), en lugar de la tabla de Baratijas del Player's Handbook (tabla en el libro).",
  },

  /* ═══════════════════════════════════════════
     PLAYER’S HANDBOOK 2014 (PHB 2014)
  ═══════════════════════════════════════════ */
  "Trasfondo Personalizado (Custom Background) [PHB 2014]": {
    desc: "Crea un trasfondo a medida combinando elementos de los trasfondos existentes.",
    comp: "2 a elegir",
    idiomas: "2 a elegir, en cualquier combinación de idiomas y competencias con herramientas",
    equipo: "El paquete de equipo de cualquier trasfondo.",
    rasgo: "Elige un Rasgo (Choose a Feature): elige un rasgo de cualquier trasfondo. Consulta la sección «Personalizar un trasfondo» (Customizing a Background) del Player's Handbook para más información.",
  },
  "Noble con Séquito (Variant Noble (Retainers)) [PHB 2014]": {
    desc: "Perteneces a una familia con privilegios y criados leales a su servicio.",
    comp: "Historia, Persuasión",
    herr: "1 Juego de mesa",
    idiomas: "1 a elegir",
    equipo: "Ropa fina, anillo de sello, pergamino de linaje, bolsa con 25 po.",
    rasgo: "Séquito (Retainers): cuentas con el servicio de tres criados leales a tu familia. Pueden ser asistentes o mensajeros, y uno puede ser un mayordomo. Son plebeyos que pueden realizar tareas mundanas por ti, pero no luchan por ti, no te seguirán a zonas obviamente peligrosas (como mazmorras) y se marcharán si se les pone en peligro con frecuencia o se les maltrata.",
  },

  /* ═══════════════════════════════════════════
     GHOSTS OF SALTMARSH (GoS)
  ═══════════════════════════════════════════ */
  "Infante de Marina (Marine) [GoS]": {
    desc: "Has servido como infante de marina y las penurias te han forjado en un arma viva imparable.",
    comp: "Atletismo, Supervivencia",
    herr: "Vehículos (agua y tierra)",
    equipo: "Una daga que perteneció a un compañero caído, una bandera doblada con el símbolo de tu barco o compañía, ropa de viajero, bolsa con 10 po.",
    rasgo: "Firme (Steady): puedes moverte el doble del tiempo normal (hasta 16 horas) cada día antes de sufrir el efecto de una marcha forzada (ver «Ritmo de viaje», cap. 8 del Player's Handbook). Además, encuentras automáticamente una ruta segura para desembarcar un bote en la costa, siempre que exista. Penalidad Soportada (Hardship Endured): una penalidad de tu pasado te ha forjado y es el centro de una filosofía personal que suele guiar tus actos; puedes tirar d6 o elegir la que mejor encaje: 1: Casi Ahogado (Nearly Drowned); 2: Capturado (Captured); 3: Sacrificio (Sacrifice); 4: Juggernaut; 5: Polizón (Stowaway); 6: No Dejar a Nadie Atrás (Leave None Behind) (descripciones en el libro).",
  },

  /* ═══════════════════════════════════════════
     EXPLORER’S GUIDE TO WILDEMOUNT (EGtW)
  ═══════════════════════════════════════════ */
  "Espía del Augen Trust (Augen Trust (Spy)) [EGtW]": {
    desc: "Trabajas para una red de espías, con un contacto fiable que te enlaza con otros agentes. Variante del Criminal con otro nombre de rasgo.",
    comp: "Engaño, Sigilo",
    herr: "1 Juego de mesa, Herramientas de ladrón",
    equipo: "Palanca, ropa común oscura con capucha, bolsa con 15 po.",
    rasgo: "Contacto Espía (Spy Contact): tienes un contacto fiable y de confianza que actúa de enlace con una red de otros espías. Sabes cómo hacer llegar mensajes a tu contacto y recibirlos de él, incluso a grandes distancias; en concreto, conoces a los mensajeros locales, maestros de caravana corruptos y marineros de mala fama que pueden entregar mensajes por ti. Especialidad (Specialty): elige el papel que desempeñabas en tu vida criminal o tira un d8 (tabla de ejemplos en el libro).",
  },
  "Erudito Cobalt (Cobalt Scholar (Sage)) [EGtW]": {
    desc: "Has dedicado años al estudio del saber arcano e histórico como erudito. Variante del Sabio.",
    comp: "Arcana, Historia",
    idiomas: "2 a elegir",
    equipo: "Frasco de tinta negra, pluma, cuchillo pequeño, carta de un colega fallecido con una pregunta que aún no has podido responder, ropa común, bolsa con 10 po.",
    rasgo: "Investigador (Researcher): cuando intentas aprender o recordar un dato de saber y no conoces esa información, a menudo sabes dónde y de quién puedes obtenerla; normalmente procede de una biblioteca, scriptorium, universidad, o de un sabio u otra criatura erudita. Tu DM puede decidir que el conocimiento que buscas está oculto en un lugar casi inaccesible o que simplemente no se puede encontrar; desentrañar los mayores secretos del multiverso puede exigir una aventura o incluso toda una campaña. Especialidad (Field of Study): tira un d8 o elige tu formación académica (tabla de ejemplos en el libro).",
  },
  "Sonriente (Grinner) [EGtW]": {
    desc: "Eres un Grinner, miembro del Golden Grin, y sabes encontrar escondite allá donde vayas.",
    comp: "Engaño, Interpretación",
    herr: "Herramientas de ladrón, 1 Instrumento musical",
    equipo: "Ropa fina, Kit de disfraz, un instrumento musical a elegir, anillo chapado en oro con una cara sonriente, bolsa con 15 po.",
    rasgo: "Balada del Necio Sonriente (Ballad of the Grinning Fool): como todo Grinner, sabes encontrar un escondite. En cualquier ciudad de 10.000 habitantes o más de la Menagerie Coast o de las tierras del Dwendalian Empire, puedes tocar la «Balada del Necio Sonriente» en una taberna o posada importante; un miembro del Golden Grin te encontrará y dará refugio a ti y a los compañeros por los que respondas. Este refugio puede cesar si ocultarte resulta demasiado peligroso, a criterio del DM. Debes usar este rasgo con cautela: no todos los que conocen la balada son tus amigos, y algunos son traidores, contraespías o agentes de la tiranía.",
  },
  "Nacido de Luxon (Luxonborn (Acolyte)) [EGtW]": {
    desc: "Sirves a tu fe como acólito y tu religión te respalda allá donde vas. Variante del Acólito.",
    comp: "Perspicacia, Religión",
    idiomas: "2 a elegir",
    equipo: "Símbolo sagrado (regalo al ingresar en el sacerdocio), libro de oraciones o rueda de oración, 5 varillas de incienso, vestimentas, ropa común, bolsa con 15 po.",
    rasgo: "Refugio de los Fieles (Shelter of the Faithful): como acólito, te ganas el respeto de quienes comparten tu fe y puedes realizar las ceremonias religiosas de tu deidad. Tú y tus compañeros de aventuras podéis recibir curación y cuidados gratuitos en un templo, santuario u otra presencia establecida de tu fe, pero debéis aportar los componentes materiales de los conjuros. Quienes comparten tu religión te mantendrán (solo a ti) con un estilo de vida modesto. Puede que tengas vínculos con un templo concreto dedicado a la deidad o panteón que hayas elegido, y que tengas allí una residencia (el templo donde servías, si sigues en buenos términos con él, o uno donde has encontrado un nuevo hogar). Cerca de tu templo puedes pedir ayuda a los sacerdotes, siempre que lo que pidas no sea peligroso y sigas en buen estado con el templo.",
  },
  "Agente de la Myriad (Myriad Operative (Criminal)) [EGtW]": {
    desc: "Eres un delincuente con experiencia, con contactos en una red criminal. Variante del Criminal.",
    comp: "Engaño, Sigilo",
    herr: "1 Juego de mesa, Herramientas de ladrón",
    equipo: "Palanca, ropa común oscura con capucha, bolsa con 15 po.",
    rasgo: "Contacto Criminal (Criminal Contact): tienes un contacto fiable y de confianza que actúa de enlace con una red de otros criminales. Sabes cómo hacer llegar mensajes a tu contacto y recibirlos de él, incluso a grandes distancias; en concreto, conoces a los mensajeros locales, maestros de caravana corruptos y marineros de mala fama que pueden entregar mensajes por ti. Especialidad (Specialty): elige el papel que desempeñabas en tu vida criminal o tira un d8 (tabla de ejemplos en el libro).",
  },
  "Pirata de la Revelry (Revelry Pirate (Sailor)) [EGtW]": {
    desc: "Navegaste años a bordo de un barco pirata por mares peligrosos. Variante del Marinero.",
    comp: "Atletismo, Percepción",
    herr: "Herramientas de navegante, Vehículos (agua)",
    equipo: "Clavija de abordaje (porra), 50 pies de cuerda de seda, amuleto de la suerte (como una pata de conejo o una piedra pequeña con un agujero en el centro; o tira una baratija aleatoria en la tabla de Baratijas del capítulo 5), ropa común, bolsa con 10 po.",
    rasgo: "Pasaje en Barco (Ship’s Passage): cuando lo necesites, puedes conseguir pasaje gratuito en un barco de vela para ti y tus compañeros de aventuras. Puedes navegar en el barco en el que serviste o en otro con el que tengas buena relación (quizá capitaneado por un antiguo compañero de tripulación). Como pides un favor, no puedes estar seguro de que el horario o la ruta cubran todas tus necesidades; tu Dungeon Master determinará cuánto se tarda en llegar adonde necesitas ir. A cambio del pasaje gratuito, se espera que tú y tus compañeros ayudéis a la tripulación durante el viaje.",
  },
  "Agente Volstrucker (Volstrucker Agent) [EGtW]": {
    desc: "Eres agente de la orden de los Volstrucker, con acceso a su red de comunicación en la sombra.",
    comp: "Engaño, Sigilo",
    herr: "Kit de envenenador",
    idiomas: "1 a elegir",
    equipo: "Ropa común, capa negra con capucha, Kit de envenenador, bolsa con 10 po.",
    rasgo: "Red de Sombras (Shadow Network): tienes acceso a la red de sombras de los Volstrucker, que te permite comunicarte con otros miembros de la orden a larga distancia. Si escribes una carta con una tinta arcana especial, la diriges a un miembro de los Volstrucker y la arrojas al fuego, la carta arderá hasta quedar en cenizas y se materializará de nuevo intacta en poder del agente al que la dirigiste. La tinta usada para enviar una carta por la red de sombras es la misma que emplea un mago para copiar conjuros en su libro de conjuros; escribir una carta con ella cuesta 10 po por página.",
  },

  /* ═══════════════════════════════════════════
     STRIXHAVEN: A CURRICULUM OF CHAOS (SCC)
  ═══════════════════════════════════════════ */
  "Estudiante de Lorehold (Lorehold Student) [SCC]": {
    desc: "Estudias en Lorehold, el colegio de Strixhaven dedicado al saber del pasado.",
    comp: "Historia, Religión",
    idiomas: "2 a elegir",
    equipo: "Frasco de tinta negra, pluma de tinta, martillo, linterna con capucha, yesquero, tomo de historia, uniforme escolar, bolsa con 15 po.",
    rasgo: "Iniciado de Lorehold (Lorehold Initiate): obtienes la dote Strixhaven Initiate y debes elegir Lorehold en ella. Además, si tienes el rasgo Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de Lorehold se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, se añaden a todas). Conjuros de Lorehold — nivel 1: Comprehend Languages, Identify; nivel 2: Borrowed Knowledge, Locate Object; nivel 3: Speak with Dead, Spirit Guardians; nivel 4: Arcane Eye, Stone Shape; nivel 5: Flame Strike, Legend Lore. Baratijas de Lorehold (Lorehold Trinkets): al crear tu personaje puedes tirar una vez en la tabla de Baratijas de Lorehold, en lugar de la tabla de Baratijas del Player’s Handbook, para tu baratija inicial.",
  },
  "Estudiante de Prismari (Prismari Student) [SCC]": {
    desc: "Estudias en Prismari, el colegio de Strixhaven dedicado a las artes y la magia elemental.",
    comp: "Acrobacias, Interpretación",
    herr: "1 Instrumento musical o Herramientas de artesano",
    idiomas: "1 a elegir",
    equipo: "Frasco de tinta negra, pluma de tinta, un juego de herramientas de artesano o un instrumento musical (a elegir), uniforme escolar, bolsa con 10 po.",
    rasgo: "Iniciado de Prismari (Prismari Initiate): obtienes la dote Strixhaven Initiate y debes elegir Prismari en ella. Además, si tienes el rasgo Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de Prismari se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, se añaden a todas). Conjuros de Prismari — nivel 1: Chromatic Orb, Thunderwave; nivel 2: Flaming Sphere, Kinetic Jaunt; nivel 3: Haste, Water Walk; nivel 4: Freedom of Movement, Wall of Fire; nivel 5: Cone of Cold, Conjure Elemental. Baratijas de Prismari (Prismari Trinkets): al crear tu personaje puedes tirar una vez en la tabla de Baratijas de Prismari, en lugar de la tabla de Baratijas del Player’s Handbook, para tu baratija inicial.",
  },
  "Estudiante de Quandrix (Quandrix Student) [SCC]": {
    desc: "Estudias en Quandrix, el colegio de Strixhaven dedicado a los patrones y la teoría arcana.",
    comp: "Arcana, Naturaleza",
    herr: "1 tipo de Herramientas de artesano",
    idiomas: "1 a elegir",
    equipo: "Frasco de tinta negra, pluma de tinta, ábaco, libro de teoría arcana, uniforme escolar, bolsa con 15 po.",
    rasgo: "Iniciado de Quandrix (Quandrix Initiate): obtienes la dote Strixhaven Initiate y debes elegir Quandrix en ella. Además, si tienes el rasgo Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de Quandrix se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, se añaden a todas). Conjuros de Quandrix — nivel 1: Entangle, Guiding Bolt; nivel 2: Enlarge/Reduce, Vortex Warp; nivel 3: Aura of Vitality, Haste; nivel 4: Control Water, Freedom of Movement; nivel 5: Circle of Power, Passwall. Baratijas de Quandrix (Quandrix Trinkets): al crear tu personaje puedes tirar una vez en la tabla de Baratijas de Quandrix, en lugar de la tabla de Baratijas del Player’s Handbook, para tu baratija inicial.",
  },
  "Estudiante de Silverquill (Silverquill Student) [SCC]": {
    desc: "Estudias en Silverquill, el colegio de Strixhaven dedicado a la palabra y la oratoria.",
    comp: "Intimidación, Persuasión",
    idiomas: "2 a elegir",
    equipo: "Frasco de tinta negra, pluma de tinta, libro de poesía, uniforme escolar, bolsa con 15 po.",
    rasgo: "Iniciado de Silverquill (Silverquill Initiate): obtienes la dote Strixhaven Initiate y debes elegir Silverquill en ella. Además, si tienes el rasgo Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de Silverquill se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, se añaden a todas). Conjuros de Silverquill — nivel 1: Dissonant Whispers, Silvery Barbs; nivel 2: Calm Emotions, Darkness; nivel 3: Beacon of Hope, Daylight; nivel 4: Compulsion, Confusion; nivel 5: Dominate Person, Rary's Telepathic Bond. Baratijas de Silverquill (Silverquill Trinkets): al crear tu personaje puedes tirar una vez en la tabla de Baratijas de Silverquill, en lugar de la tabla de Baratijas del Player’s Handbook, para tu baratija inicial.",
  },
  "Estudiante de Witherbloom (Witherbloom Student) [SCC]": {
    desc: "Estudias en Witherbloom, el colegio de Strixhaven dedicado a la naturaleza, la vida y la descomposición.",
    comp: "Naturaleza, Supervivencia",
    herr: "Kit de herboristería",
    idiomas: "1 a elegir",
    equipo: "Frasco de tinta negra, pluma de tinta, libro sobre identificación de plantas, olla de hierro, Kit de herboristería, uniforme escolar, bolsa con 15 po.",
    rasgo: "Iniciado de Witherbloom (Witherbloom Initiate): obtienes la dote Strixhaven Initiate y debes elegir Witherbloom en ella. Además, si tienes el rasgo Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de Witherbloom se añaden a la lista de conjuros de tu clase lanzadora (si eres multiclase con varias listas, se añaden a todas). Conjuros de Witherbloom — nivel 1: Cure Wounds, Inflict Wounds; nivel 2: Lesser Restoration, Wither and Bloom; nivel 3: Revivify, Vampiric Touch; nivel 4: Blight, Death Ward; nivel 5: Antilife Shell, Greater Restoration. Baratijas de Witherbloom (Witherbloom Trinkets): al crear tu personaje puedes tirar una vez en la tabla de Baratijas de Witherbloom, en lugar de la tabla de Baratijas del Player’s Handbook, para tu baratija inicial.",
  },
};
