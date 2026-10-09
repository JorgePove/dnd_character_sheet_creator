/* ═══════════════════════════════════════════════════════
   trasfondos.js — Trasfondos D&D 5e / 5.5e
   Fuentes: PHB 2024 · PHB 2014 · SCAG · GoS · CoS · ToA (+ libros 2025-26 si constan abajo)
   Contrastado con dnd2024.wikidot.com y dnd5e.wikidot.com.
   Campos de cada trasfondo (todos opcionales salvo desc/comp/equipo):
     desc  = frase de ambientación
     asi   = 5.5e: características entre las que repartir +2/+1 o +1/+1/+1
     dote  = 5.5e: dote de origen que concede (se añade en el cuadro de Dotes)
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
    rasgo: "Refugio de los Fieles: tú y tus compañeros recibís curación y cuidados gratuitos en templos de tu fe; puedes contar con el clero de tu religión para apoyo.",
  },
  "Charlatán (Charlatan) [PHB 2014]": {
    desc: "Siempre has sabido qué decirle a la gente.",
    comp: "Engaño, Juego de Manos",
    herr: "Kit de disfraz, Kit de falsificación",
    equipo: "Ropa fina, Kit de disfraz, herramientas de timo a elección (dados trucados, botellas de falso elixir, etc.), bolsa con 15 po.",
    rasgo: "Identidad Falsa: tienes una segunda identidad documentada (papeles, disfraz) y puedes falsificar documentos que hayas visto.",
  },
  "Criminal [PHB 2014]": {
    desc: "Eres un delincuente con experiencia. Variante Espía: mismas competencias, rasgo y equipo.",
    comp: "Engaño, Sigilo",
    herr: "1 Juego de mesa, Herramientas de ladrón",
    equipo: "Palanca, ropa común oscura con capucha, bolsa con 15 po.",
    rasgo: "Contacto Criminal: tienes un contacto de confianza que actúa de enlace con una red criminal y puede enviar y recibir mensajes a larga distancia.",
  },
  "Artista (Entertainer) [PHB 2014]": {
    desc: "Vives del espectáculo. Variante Gladiador: mismas competencias y rasgo, con la arena como escenario.",
    comp: "Acrobacias, Interpretación",
    herr: "Kit de disfraz, 1 Instrumento musical",
    equipo: "Un instrumento musical, un favor de un admirador, un disfraz, bolsa con 15 po.",
    rasgo: "Por Aclamación Popular: puedes encontrar un lugar donde actuar y recibir alojamiento y comida modestos gratis mientras actúes; la gente te reconoce.",
  },
  "Héroe del Pueblo (Folk Hero) [PHB 2014]": {
    desc: "Vienes de un origen humilde pero estás destinado a más.",
    comp: "Trato con Animales, Supervivencia",
    herr: "1 tipo de Herramientas de artesano, Vehículos (tierra)",
    equipo: "Un juego de herramientas de artesano, pala, olla de hierro, ropa común, bolsa con 10 po.",
    rasgo: "Hospitalidad Rústica: la gente humilde te acoge y esconde, siempre que no pongas en peligro a quienes te ayudan.",
  },
  "Artesano de Gremio (Guild Artisan) [PHB 2014]": {
    desc: "Perteneces a un gremio de artesanos. Variante Mercader de Gremio: Herramientas de navegante o un idioma extra en lugar de herramientas de artesano.",
    comp: "Perspicacia, Persuasión",
    herr: "1 tipo de Herramientas de artesano (Mercader: Herramientas de navegante o un idioma extra)",
    idiomas: "1 a elegir",
    equipo: "Un juego de herramientas de artesano, carta de presentación de tu gremio, ropa de viajero, bolsa con 15 po.",
    rasgo: "Membresía del Gremio: los miembros del gremio te dan alojamiento y comida, tienes apoyo legal y político, y puedes pagar la cuota para acceder a recursos del gremio.",
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
    rasgo: "Posición de Privilegio: la gente de clase alta te trata con deferencia y eres bienvenido en cortes y mansiones. (Caballero: tienes 2 sirvientes y un escudero o corcel.)",
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
    rasgo: "Secretos de la Ciudad: conoces pasadizos y atajos; al moverte por una ciudad (fuera de combate) viajas al doble de velocidad.",
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
    comp: "Perspicacia, y una de INT/SAB/CAR según facción (Investigación, Religión, Naturaleza, Historia o Engaño)",
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
    rasgo: "Mantenido con Estilo: tu casa cubre tus gastos de vida en Aguas Profundas y el Norte (línea de crédito, no ingresos).",
  },

  /* ════════════════════════════════════════════════
     OTROS LIBROS (2014): Ghosts of Saltmarsh (GoS), Curse of Strahd (CoS), Tomb of Annihilation (ToA)
  ════════════════════════════════════════════════ */
  "Pescador (Fisher) [GoS]": {
    desc: "Has vivido de la pesca.",
    comp: "Historia, Supervivencia",
    herr: "Aparejos de pesca",
    idiomas: "1 a elegir",
    equipo: "Aparejos de pesca, red, señuelo o botas de vadeo, ropa de viajero, bolsa con 10 po.",
    rasgo: "Cosechar el Agua: Ventaja con los aparejos de pesca y, cerca de vida marina, mantienes un estilo de vida modesto y alimentas a ti y hasta 10 personas por día. Anécdota de Pesca: 1/día cuentas tu historia para que los oyentes se muestren amistosos.",
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
    rasgo: "Bajo Cuerda: conoces una red de contrabandistas que te dan alojamiento seguro y discreción.",
  },
  "Perseguido (Haunted One) [CoS]": {
    desc: "Algo horrible te marcó y lo has dejado atrás... o no.",
    comp: "2 a elegir entre Arcana, Investigación, Religión y Supervivencia",
    idiomas: "2 a elegir, uno de ellos exótico",
    equipo: "Kit de cazamonstruos (cofre, palanca, martillo, estacas de madera, símbolo sagrado, agua bendita, grilletes, espejo de acero, frasco de aceite, yesquero, antorchas), un baratija gótica, ropa común, 1 pp.",
    rasgo: "Corazón de Oscuridad: los plebeyos te tratan con cortesía y te ayudarán o combatirán a tu lado, salvo que hayas demostrado ser peligroso para ellos.",
  },
  "Antropólogo (Anthropologist) [ToA]": {
    desc: "Estudias culturas y las integras.",
    comp: "Perspicacia, Religión",
    idiomas: "2 a elegir",
    equipo: "Diario encuadernado en cuero, frasco de tinta, pluma, ropa de viajero, baratija, bolsa con 10 po.",
    rasgo: "Camaleón Cultural: adoptas costumbres de una cultura ajena. Lingüista Hábil: tras observar a humanoides un día puedes comunicarte con ellos con palabras y gestos básicos.",
  },
  "Arqueólogo (Archaeologist) [ToA]": {
    desc: "Estudias ruinas y civilizaciones desaparecidas.",
    comp: "Historia, Supervivencia",
    herr: "Herramientas de cartógrafo o de navegante",
    idiomas: "1 a elegir",
    equipo: "Estuche de mapas, linterna de ojo de buey, pico de minero, ropa de viajero, pala, tienda para 2, baratija recuperada, bolsa con 25 po.",
    rasgo: "Excavador de Polvo: al examinar ruinas averiguas su propósito original y quiénes las construyeron; además tasas objetos de arte antiguos.",
  },
};
