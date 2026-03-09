/* ═══════════════════════════════════════════════════════
   trasfondos.js — Trasfondos D&D 5e (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const DND_TRASFONDOS = {

  /* ── PHB 2014 ── */
  "Acólito": {
    desc: "Has pasado tu vida al servicio de un templo, aprendiendo sus rituales y doctrinas.",
    competencias: ["Perspicacia", "Religión"],
    herramientas: [],
    idiomas: 2,
    equipo: "Símbolo sagrado, libro de oraciones, 5 varitas de incienso, vestimentas, 15 po.",
    rasgo: "Refugio de los Fieles: los templos de tu fe te ofrecen alojamiento y curación gratuita a ti y a tus compañeros.",
  },
  "Charlatán": {
    desc: "Siempre has tenido el don de hacer creer a la gente lo que quieres.",
    competencias: ["Engaño", "Persuasión"],
    herramientas: ["Kit de disfraz", "Kit de falsificación"],
    idiomas: 0,
    equipo: "Kit de disfraz, herramientas de estafa, ropa fina, 15 po.",
    rasgo: "Cara Falsa: puedes falsificar documentos y crear identidades falsas convincentes.",
  },
  "Criminal": {
    desc: "Eres un experimentado delincuente con historial de delitos.",
    competencias: ["Engaño", "Sigilo"],
    herramientas: ["Herramientas de ladrón", "Juego de mesa (1 tipo)"],
    idiomas: 0,
    equipo: "Palanca, ropa oscura con capucha, herramientas de ladrón, 15 po.",
    rasgo: "Contacto Criminal: tienes un contacto fiable en el mundo criminal que puede darte información y pasar mensajes.",
  },
  "Entretenido": {
    desc: "Te has criado en el mundo del espectáculo, viviendo de hacer sonreír a los demás.",
    competencias: ["Acrobacias", "Actuación"],
    herramientas: ["Kit de disfraz", "Instrumento musical (1)"],
    idiomas: 0,
    equipo: "Instrumento musical, regalo de admirador, disfraz, 15 po.",
    rasgo: "Por Aclamación Popular: siempre puedes encontrar un lugar donde actuar y conseguir alojamiento y comida básica.",
  },
  "Forastero": {
    desc: "Creciste en las tierras salvajes, lejos de la civilización.",
    competencias: ["Atletismo", "Supervivencia"],
    herramientas: ["Instrumento musical (1)", "Herramientas de herborista"],
    idiomas: 1,
    equipo: "Bastón, trampa de caza, trofeo de caza, ropa de viaje, 10 po.",
    rasgo: "Viajero Errante: tienes una memoria excelente para los mapas y la geografía, y siempre puedes encontrar comida y agua para ti y hasta 5 personas.",
  },
  "Gremial": {
    desc: "Perteneciste a un gremio de artesanos, aprendiendo un oficio.",
    competencias: ["Perspicacia", "Persuasión"],
    herramientas: ["Herramientas de artesano (1 tipo)"],
    idiomas: 1,
    equipo: "Herramientas de artesano, carta de presentación del gremio, ropa de viajero, 15 po.",
    rasgo: "Membresía del Gremio: el gremio te ofrece alojamiento, puede prestarte dinero y actúa en tu favor con las autoridades.",
  },
  "Héroe del Pueblo": {
    desc: "Vienes del pueblo llano y te identificas con la gente común.",
    competencias: ["Trato con Animales", "Supervivencia"],
    herramientas: ["Herramientas de artesano (1 tipo)", "Vehículos (terrestres)"],
    idiomas: 0,
    equipo: "Herramientas de artesano, pala, olla de hierro, ropa común, 10 po.",
    rasgo: "Hospitalidad Rústica: la gente del pueblo te ayudará a esconderte, alimentarte y encontrar información, aunque no arriesgarán su vida por ti.",
  },
  "Marino": {
    desc: "Has navegado los mares durante años, viviendo aventuras en alta mar.",
    competencias: ["Atletismo", "Percepción"],
    herramientas: ["Herramientas de navegación", "Vehículos (acuáticos)"],
    idiomas: 0,
    equipo: "Cuerda de seda (50 pies), amuleto de buena suerte, ropa común, 10 po.",
    rasgo: "Pasaje en Barco: puedes conseguir pasaje gratuito en barco para ti y tus compañeros.",
  },
  "Noble": {
    desc: "Comprendes la riqueza, el poder y el privilegio.",
    competencias: ["Historia", "Persuasión"],
    herramientas: ["Juego de mesa (1 tipo)"],
    idiomas: 1,
    equipo: "Ropa fina, anillo de sello, pergamino de árbol genealógico, 25 po.",
    rasgo: "Posición de Privilegio: gracias a tu nombre, la gente asume que tienes derechos. La gente corriente se aparta para dejarte paso.",
  },
  "Sabio": {
    desc: "Has pasado años aprendiendo los secretos del cosmos.",
    competencias: ["Arcana", "Historia"],
    herramientas: [],
    idiomas: 2,
    equipo: "Pluma, tinta, cuchillo pequeño, carta de un colega fallecido, ropa común, 10 po.",
    rasgo: "Investigador: si no sabes algo, sabes dónde encontrarlo o quién puede saberlo.",
  },
  "Soldado": {
    desc: "La guerra ha sido tu modo de vida durante gran parte de tu existencia.",
    competencias: ["Atletismo", "Intimidación"],
    herramientas: ["Juego de mesa (1 tipo)", "Vehículos (terrestres)"],
    idiomas: 0,
    equipo: "Insignia de rango, trofeo de enemigo caído, dados de hueso, ropa común, 10 po.",
    rasgo: "Rango Militar: los soldados reconocen tu autoridad y deferencia a tu rango; puedes acceder a campamentos y fortalezas militares.",
  },
  "Urdidor": {
    desc: "Creciste en las calles de una ciudad grande, aprendiendo a sobrevivir por tu cuenta.",
    competencias: ["Trapacería", "Sigilo"],
    herramientas: ["Kit de disfraz", "Herramientas de ladrón"],
    idiomas: 0,
    equipo: "Cuchillo pequeño, mapa de la ciudad de origen, mascota (ratón), recuerdo de los padres, ropa común, 10 po.",
    rasgo: "Secretos de la Ciudad: conoces los callejones, pasajes secretos y lugares seguros de cualquier ciudad.",
  },

  /* ── XGE ── */
  "Ciudad-Estado": {
    desc: "Creciste en una gran ciudad-estado, aprendiendo sus leyes y costumbres.",
    competencias: ["Historia", "Persuasión"],
    herramientas: ["Juego de mesa (1 tipo)"],
    idiomas: 1,
    equipo: "Ropa fina, conjunto de herramientas de juego, mapa de la ciudad, 10 po.",
    rasgo: "Ciudadano Respetado: en tu ciudad natal eres conocido y respetado; la gente común te ayuda si se lo pides.",
  },
  "Clarividente": {
    desc: "Tienes un don para ver más allá del velo de la realidad.",
    competencias: ["Arcana", "Historia"],
    herramientas: [],
    idiomas: 2,
    equipo: "Kit de adivinación, diario de visiones, vela, 15 po.",
    rasgo: "Presagios: 1/día tienes una visión vaga que puede ser una advertencia útil.",
  },
  "Ermitaño": {
    desc: "Viviste en un estado de reclusión, ya sea en una celda monástica o en los confines del mundo.",
    competencias: ["Medicina", "Religión"],
    herramientas: ["Kit de herborista"],
    idiomas: 1,
    equipo: "Kit de herborista, diario con notas, ropa común, 5 po.",
    rasgo: "Descubrimiento: durante tu reclusión realizaste un gran descubrimiento que aún no has compartido con el mundo.",
  },
  "Marinero Pirata": {
    desc: "Navegaste bajo una bandera negra, robando y saqueando.",
    competencias: ["Atletismo", "Percepción"],
    herramientas: ["Herramientas de navegación", "Vehículos (acuáticos)"],
    idiomas: 0,
    equipo: "Cuerda de seda (50 pies), amuleto de buena suerte, ropa de marino, 10 po.",
    rasgo: "Mal Fama: eres conocido como un pirata; la gente te teme y los puertos te cierran puertas, pero otros piratas te respetan.",
  },

  /* ── TCE ── */
  "Investigador": {
    desc: "Eres un investigador entrenado, sea para la guardia de la ciudad o como detective independiente.",
    competencias: ["Investigación", "Perspicacia"],
    herramientas: ["Kit de disfraz"],
    idiomas: 1,
    equipo: "Lupa, notas de un caso anterior, 10 po.",
    rasgo: "Red de Informantes: tienes una red de contactos que pueden darte información sobre crímenes y actividades ilegales.",
  },

  /* ── EGW ── */
  "Augurador": {
    desc: "Trabajaste para el Imperio de Dwendalian como augurador, leyendo presagios.",
    competencias: ["Arcana", "Historia"],
    herramientas: [],
    idiomas: 2,
    equipo: "Kit de adivinación, uniforme de augurador, 15 po.",
    rasgo: "Acceso Imperial: puedes acceder a registros del Imperio y solicitar información oficial.",
  },
  "Contrabandista": {
    desc: "Pasaste mercancía a través de fronteras en la costa de Wildemount.",
    competencias: ["Atletismo", "Engaño"],
    herramientas: ["Vehículos (acuáticos)"],
    idiomas: 1,
    equipo: "Mochila con compartimento oculto, mapa de rutas de contrabando, 15 po.",
    rasgo: "Rutas Seguras: conoces rutas y escondites para mover mercancía o personas sin ser detectado.",
  },

  /* ── TDCSR ── */
  "Agente de Asmodeus": {
    desc: "Serviste como agente del culto de Asmodeo en Tal'Dorei.",
    competencias: ["Engaño", "Religión"],
    herramientas: ["Kit de disfraz"],
    idiomas: 1,
    equipo: "Símbolo oculto de Asmodeo, ropa elegante, 20 po.",
    rasgo: "Contacto Infernal: tienes un contacto en la jerarquía infernal que puede darte favores menores.",
  },
  "Guardabosques de Tal'Dorei": {
    desc: "Patrullaste las fronteras salvajes de Tal'Dorei como guardabosques.",
    competencias: ["Naturaleza", "Supervivencia"],
    herramientas: ["Herramientas de herborista"],
    idiomas: 1,
    equipo: "Capa de guardabosques, trampa de caza, kit de herborista, 10 po.",
    rasgo: "Conocedor del Territorio: conoces el terreno de Tal'Dorei como la palma de tu mano; nunca te pierdes y siempre encuentras refugio.",
  },

  /* ── Personalizado ── */
  "Personalizado": {
    desc: "Crea tu propio trasfondo eligiendo competencias, herramientas e idiomas.",
    competencias: ["(Elige 2)"],
    herramientas: ["(Elige 2 herramientas o idiomas)"],
    idiomas: 0,
    equipo: "A elección del jugador y DM.",
    rasgo: "A elección del jugador y DM.",
  },
};
