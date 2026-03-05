/* ══════════════════════════════════════════════════════════
   hechizos-nivel-2.js — Conjuros de Nivel 2 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · SCAG · EGW · FTD · GGtR · IDRotF
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_2 = [
  {
    id: "aganazzars_scorcher", n: "Incinerador de Aganazzar [XGE]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (escama roja de dragón)", duration: "Instantáneo",
    desc: "Línea de fuego de 30×5 pies. Salvación DES o 3d8 fuego, mitad si tiene éxito. Escala: +1d8/nivel.",
    damage: "3d8 Fuego (escala)", extra: null
  },
  {
    id: "aid", n: "Auxilio [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "30 pies", components: "V, S, M (tira de tela blanca)", duration: "8 horas",
    desc: "Hasta 3 criaturas ganan +5 PG máximos y PG actuales. Escala: +5 PG/nivel adicional.",
    damage: null, extra: null
  },
  {
    id: "alter_self", n: "Alterarse a Sí Mismo [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 hora",
    desc: "Elige: Adaptación Acuática (respirar agua, nadar 30p), Cambio Natural (garras/puas/mordisco 1d6), o Forma Distinta (cambiar apariencia).",
    damage: null, extra: null
  },
  {
    id: "animal_messenger", n: "Mensajero Animal [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (comida pequeña)", duration: "24 horas",
    desc: "Una bestia Diminuta lleva un mensaje hablado de 25 palabras a un destinatario descrito. Escala: duración ×48h/nivel.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "arcane_lock", n: "Cerradura Arcana [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (polvo de oro 25 po)", duration: "Hasta disipar",
    desc: "Bloqueas mágicamente una puerta, ventana, cofre u otro objeto con apertura. La CD para abrirlo se incrementa en 10. El lanzador puede abrirlo normalmente.",
    damage: null, extra: null
  },
  {
    id: "arcanists_magic_aura", n: "Aura Mágica de Nystul [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Toque", components: "V, S, M (cuadrado de seda)", duration: "24 horas",
    desc: "Alteras la percepción mágica de un objeto o criatura: cambias su alineamiento mágico, lo haces aparecer como mágico/no mágico, o enmascaras su escuela de magia durante 30 días.",
    damage: null, extra: null
  },
  {
    id: "augury", n: "Augurio [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 minuto (ritual)", range: "Personal", components: "V, S, M (varitas de marfil 25 po)", duration: "Instantáneo",
    desc: "Consultas a los poderes que velan. Recibes un presagio sobre el resultado de una acción específica en los próximos 30 minutos: bueno, malo, bueno y malo, o neutro.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "barkskin", n: "Corteza Protectora [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (trozo de corteza de roble)", duration: "Conc. 1 hora",
    desc: "La piel del objetivo se endurece. CA mínima = 16 sin importar la armadura que lleve.",
    damage: null, extra: null
  },
  {
    id: "blindness_deafness", n: "Ceguera/Sordera [PHB]",
    nivel: "Nivel 2", escuela: "Nigromancia",
    casting: "1 acción", range: "30 pies", components: "V", duration: "1 min",
    desc: "Una criatura: salvación CON o queda Cegada o Sorda. Repite la salvación al final de cada turno. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "blur", n: "Difuminar [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Tu forma se difumina. Los atacantes tienen desventaja contra ti (a menos que usen sentidos no visuales o sean inmunes a la ceguera).",
    damage: null, extra: null
  },
  {
    id: "calm_emotions", n: "Calmar Emociones [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Suprimes emociones extremas en criaturas en esfera de 20 pies. Salvación CAR o: suprime encantamiento/miedo; o se vuelven indiferentes a criaturas hostiles.",
    damage: null, extra: null
  },
  {
    id: "cloud_of_daggers", n: "Nube de Dagas [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (astilla de cristal)", duration: "Conc. 1 min",
    desc: "Cubo de 5 pies lleno de dagas giratorias. Criatura que entre o empiece ahí: 4d4 cortante. Escala: +2d4/nivel.",
    damage: "4d4 Cortante (escala)", extra: null
  },
  {
    id: "continual_flame", n: "Llama Continua [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, S, M (rubí en polvo 50 po)", duration: "Hasta disipar",
    desc: "Llama permanente en un objeto que da la misma luz que una antorcha pero sin calor, humo ni combustión. No puede apagarse con agua o viento.",
    damage: null, extra: null
  },
  {
    id: "crown_of_madness", n: "Corona de la Locura [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Un humanoide: salvación SAB o corona de hierro retorcido le corona. Cada turno ataca a la criatura más cercana que elijas. Repite la salvación al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "darkness", n: "Oscuridad [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, M (piel de murciélago/gota de alquitrán)", duration: "Conc. 10 min",
    desc: "Oscuridad mágica en esfera de 15 pies. Bloquea visión normal y de penumbra. Una fuente de luz de nivel 2 o inferior no puede vencerla.",
    damage: null, extra: null
  },
  {
    id: "darkvision", n: "Visión en la Oscuridad [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (zanahoria seca/ágata)", duration: "8 horas",
    desc: "La criatura tocada gana visión en la oscuridad hasta 60 pies.",
    damage: null, extra: null
  },
  {
    id: "detect_thoughts", n: "Detectar Pensamientos [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (moneda de cobre)", duration: "Conc. 1 min",
    desc: "Lees la superficie de los pensamientos de criaturas a 30 pies. Puedes profundizar: salvación SAB o conoces sus pensamientos más profundos y puedes hacerles preguntas mentalmente.",
    damage: null, extra: null
  },
  {
    id: "dragon_breath", n: "Aliento de Dragón [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S, M (guindilla)", duration: "Conc. 1 min",
    desc: "Criatura tocada puede exhalar un cono de 15 pies o línea de daño (ácido, frío, fuego, rayo o veneno) como Acción. Salvación DES: 3d6 del tipo elegido, mitad si tiene éxito. Escala: +1d6/nivel.",
    damage: "3d6 tipo elegido (escala)", extra: null
  },
  {
    id: "dust_devil", n: "Torbellino de Polvo [XGE]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (pizca de polvo)", duration: "Conc. 1 min",
    desc: "Torbellino de polvo de 5 pies en cubo de 5 pies. Criatura que entre o empiece: salvación FUE o 1d8 contundente y empujada 10 pies. Se puede mover 30 pies como Acción. Escala: +1d8/nivel.",
    damage: "1d8 Contundente (escala)", extra: null
  },
  {
    id: "earthbind", n: "Inmovilizar a la Tierra [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "300 pies", components: "V, S, M (trozo de hierro)", duration: "Conc. 1 min",
    desc: "Una criatura voladora: salvación FUE o su velocidad de vuelo se reduce a 0 y cae lentamente a tierra (sin daño).",
    damage: null, extra: null
  },
  {
    id: "enhance_ability", n: "Mejorar Atributo [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (pelo de animal)", duration: "Conc. 1 hora",
    desc: "Elige un efecto: Fuerza del Oso (+2d6 PG temp, ventaja FUE), Gracia del Gato (ventaja DES, sin daño de caída ≤20p), Resiliencia del Cangrejo (ventaja CON), Inteligencia del Zorro (ventaja INT), Sabiduría del Búho (ventaja SAB), Majestuosidad del Águila (ventaja CAR). Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "enlarge_reduce", n: "Agrandar/Reducir [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (pizca de hierro/polvo)", duration: "Conc. 1 min",
    desc: "Agrandar: dobla tamaño, +1d4 daño con armas. Reducir: mitad de tamaño, -1d4 daño, ventaja en Sigilo. Salvación CON si es involuntario.",
    damage: "±1d4 (escala)", extra: null
  },
  {
    id: "enthrall", n: "Cautivar [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "1 min",
    desc: "Tu discurso hipnotiza a criaturas en 60 pies. Salvación SAB (con bonificación si están en combate) o quedan cautivadas por ti: desventaja en Percepción sobre otros.",
    damage: null, extra: null
  },
  {
    id: "find_steed", n: "Encontrar Corcel [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "10 minutos", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Convocas un espíritu en forma de corcel (caballo de guerra, poni, camello, mastín, mastodonte). Es tu compañero inteligente. Podéis comunicaros telepáticamente.",
    damage: null, extra: null
  },
  {
    id: "flame_blade", n: "Hoja Llameante [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V, S, M (hoja de sumac)", duration: "Conc. 10 min",
    desc: "Cimitarra de fuego en tu mano libre. Ataque de conjuro cuerpo a cuerpo: 3d6 fuego. Ilumina 10 pies brillante y 10 tenue. Escala: +1d6 cada 2 niveles.",
    damage: "3d6 Fuego (escala)", extra: null
  },
  {
    id: "flaming_sphere", n: "Esfera de Fuego [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (sebo+fósforo)", duration: "Conc. 1 min",
    desc: "Esfera de fuego de 5 pies de diámetro. Criatura a 5 pies al inicio de su turno: salvación DES o 2d6 fuego, mitad si tiene éxito. Puedes moverla 30 pies como Acción Adicional. Escala: +1d6/nivel.",
    damage: "2d6 Fuego (escala)", extra: null
  },
  {
    id: "gentle_repose", n: "Reposo Pacífico [PHB]",
    nivel: "Nivel 2", escuela: "Nigromancia",
    casting: "1 acción (ritual)", range: "Toque", components: "V, S, M (pizca de sal/moneda)", duration: "10 días",
    desc: "Preservas un cadáver. No puede convertirse en no-muerto. El tiempo de este conjuro cuenta para límites de resurrección.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "gust_of_wind", n: "Ráfaga de Viento [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 60p)", components: "V, S, M (semilla de legumbre)", duration: "Conc. 1 min",
    desc: "Línea de viento de 60×10 pies. Criaturas que empiecen ahí: salvación FUE o empujadas 15 pies. Ráfaga dispersa gases y nieblas. Puedes cambiar la dirección como Acción Adicional.",
    damage: null, extra: null
  },
  {
    id: "heat_metal", n: "Metal al Rojo [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (trozo de hierro + llama)", duration: "Conc. 1 min",
    desc: "Un objeto metálico que no sea mágico se calienta al rojo. Criatura en contacto: 2d8 fuego. Si lo llevan puesto o lo sostienen: pueden soltarlo o sufrir desventaja en ataques y salvaciones. Escala: +1d8/nivel.",
    damage: "2d8 Fuego/turno (escala)", extra: null
  },
  {
    id: "hold_person", n: "Mantener Persona [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S, M (palillo recto)", duration: "Conc. 1 min",
    desc: "Un humanoide: salvación SAB o queda Paralizado. Repite al final de cada turno. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "invisibility", n: "Invisibilidad [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Toque", components: "V, S, M (párpado de pestañas de víbora)", duration: "Conc. 1 hora",
    desc: "Criatura tocada se vuelve invisible. El efecto termina si ataca o lanza un conjuro. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "knock", n: "Abrir [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Un objeto cerrado con cerrojo, llave, aldaba o atascado se abre. Funciona sobre Cerradura Arcana (la suspende 10 minutos). Golpe fuerte audible a 300 pies.",
    damage: null, extra: null
  },
  {
    id: "levitate", n: "Levitar [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (cadena de oro)", duration: "Conc. 10 min",
    desc: "Una criatura u objeto de hasta 500 libras flota hasta 20 pies del suelo. El objetivo puede moverse verticalmente 20 pies/turno. Salvación CON si es involuntario.",
    damage: null, extra: null
  },
  {
    id: "locate_animals_or_plants", n: "Localizar Animales o Plantas [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (pluma de búho)", duration: "Instantáneo",
    desc: "Describes una especie de bestia o planta. Sabes la dirección y distancia al ejemplar más cercano a 5 millas.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "locate_object", n: "Localizar Objeto [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (bifurcación de madera", duration: "Conc. 10 min",
    desc: "Describes u objeto conocido. Sabes la dirección al objeto más cercano de ese tipo a 1000 pies, siempre que no esté bloqueado por plomo.",
    damage: null, extra: null
  },
  {
    id: "magic_mouth", n: "Boca Mágica [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 minuto (ritual)", range: "30 pies", components: "V, S, M (panal y polvo de jade 10 po)", duration: "Hasta disipar",
    desc: "Implanta un mensaje en un objeto. Cuando se cumpla una condición que especifiques, una boca aparece y recita el mensaje (hasta 25 palabras).",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "magic_weapon", n: "Arma Mágica [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
    desc: "Un arma no mágica se vuelve +1 mágica. Escala: +2 en Nv.4, +3 en Nv.6.",
    damage: "+1/+2/+3 al arma (escala)", extra: null
  },
  {
    id: "melfs_acid_arrow", n: "Flecha Ácida de Melf [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V, S, M (polvo de ruibarbo/hígado de víbora)", duration: "Instantáneo",
    desc: "Ataque de conjuro a distancia: 4d4 ácido inmediato y 2d4 ácido al final de su siguiente turno. Si falla, la mitad de daño inmediato. Escala: +1d4 de cada parte/nivel.",
    damage: "4d4+2d4 Ácido (escala)", extra: null
  },
  {
    id: "mirror_image", n: "Imagen Especular [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 min",
    desc: "Creas 3 duplicados ilusorios. Cuando te ataquen, un dado determina si golpean a un duplicado. Duplicados destruidos eliminan las copias.",
    damage: null, extra: null
  },
  {
    id: "misty_step", n: "Paso Brumoso [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Instantáneo",
    desc: "Rodeado de una bruma plateada, te teletransportas hasta 30 pies a un espacio vacío que puedas ver.",
    damage: null, extra: null
  },
  {
    id: "moonbeam", n: "Rayo de Luna [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (semilla de coral/pluma de avestruz)", duration: "Conc. 1 min",
    desc: "Rayo de luz plateada de 5 pies de radio, 40 pies de alto. Criatura que entre o empiece: salvación CON o 2d10 radiante (formas alternas: daño total). Escala: +1d10/nivel.",
    damage: "2d10 Radiante (escala)", extra: null
  },
  {
    id: "nathairs_mischief", n: "Travesuras de Nathair [FTD]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "60 pies", components: "S, M (moneda dorada)", duration: "Conc. 1 min",
    desc: "Cubo de 20 pies lleno de magia dracónica impredecible. Al inicio de tu turno, el cubo genera un efecto aleatorio: destellos cegadores, burbujas de risa (Incapacitado), cristales brillantes (ciego 1 turno), o baba pegajosa (velocidad 0).",
    damage: null, extra: null
  },
  {
    id: "pass_without_trace", n: "Pasar sin Dejar Rastro [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S, M (ceniza de madera de acebo quemado)", duration: "Conc. 1 hora",
    desc: "Aura de sigilo. Tú y hasta 10 criaturas a 30 pies ganáis +10 a tiradas de Sigilo y no podéis ser rastreados excepto por magia.",
    damage: null, extra: null
  },
  {
    id: "prayer_of_healing", n: "Oración de Curación [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "10 minutos", range: "30 pies", components: "V", duration: "Instantáneo",
    desc: "Hasta 6 criaturas visibles recuperan 2d8 + mod. de lanzamiento PG. No en combate. Escala: +1d8/nivel.",
    damage: "Cura 2d8+mod (escala)", extra: null
  },
  {
    id: "protection_from_poison", n: "Protección contra el Veneno [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "1 hora",
    desc: "Neutraliza un veneno activo. Durante la duración: ventaja en salvaciones contra veneno, resistencia al daño por veneno.",
    damage: null, extra: null
  },
  {
    id: "ray_of_enfeeblement", n: "Rayo de Debilitamiento [PHB]",
    nivel: "Nivel 2", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Ataque de conjuro a distancia. Si impacta: salvación CON o solo inflige la mitad de daño en ataques con arma que usen FUE. Repite la salvación al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "rope_trick", n: "Truco de la Cuerda [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (polvo de maíz/pasta de tela)", duration: "1 hora",
    desc: "Una cuerda de hasta 60 pies sube y crea un espacio extradimensional en su extremo. Hasta 8 criaturas pueden entrar. Invisible desde fuera.",
    damage: null, extra: null
  },
  {
    id: "scorching_ray", n: "Rayo Abrasador [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Lanzas 3 rayos de fuego. Ataque de conjuro a distancia por cada rayo: 2d6 fuego. Puedes dirigirlos al mismo o distintos objetivos. Escala: +1 rayo/nivel.",
    damage: "3 × 2d6 Fuego (escala)", extra: null
  },
  {
    id: "see_invisibility", n: "Ver Invisibilidad [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (pizca de talco/polvo de plata)", duration: "1 hora",
    desc: "Ves criaturas y objetos invisibles como si fueran visibles y puedes ver al Plano Etéreo hasta 60 pies.",
    damage: null, extra: null
  },
  {
    id: "shadow_blade", n: "Hoja de Sombra [XGE]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Cimitarra de sombra solidificada. Ataque de conjuro cuerpo a cuerpo (FUE o DES): 2d8 psíquico. En condiciones de poca luz: ventaja en ataques. Puedes lanzarla (20/60 pies). Escala: 3d8 Nv.3-4, 4d8 Nv.5-6, 5d8 Nv.7+.",
    damage: "2d8 Psíquico (escala)", extra: null
  },
  {
    id: "shatter", n: "Fragmentar [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (esquirla de mica)", duration: "Instantáneo",
    desc: "Ruido súbito doloroso. Esfera de 10 pies: salvación CON o 3d8 trueno, mitad si tiene éxito. Objetos inorgánicos en el área sufren daño automático. Escala: +1d8/nivel.",
    damage: "3d8 Trueno (escala)", extra: null
  },
  {
    id: "silence", n: "Silencio [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción (ritual)", range: "120 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Esfera de silencio de 20 pies de radio. Ningún sonido puede salir ni entrar. Inmunidad al daño sónico. Imposible lanzar conjuros con componente verbal dentro.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "skywrite", n: "Escritura Celeste [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "Conc. 1 hora",
    desc: "Escribes en el cielo con nubes un mensaje de hasta 10 palabras visibles a 1 milla. Un viento fuerte puede distorsionarlo.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "spider_climb", n: "Trepar como Araña [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (gota de alquitrán + araña)", duration: "Conc. 1 hora",
    desc: "La criatura puede escalar superficies difíciles, incluyendo techos, sin tirada de habilidad.",
    damage: null, extra: null
  },
  {
    id: "spiritual_weapon", n: "Arma Espiritual [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción adicional", range: "60 pies", components: "V, S", duration: "1 min",
    desc: "Arma flotante de energía radiante. Acción Adicional para moverla 20 pies y atacar: ataque de conjuro cuerpo a cuerpo, 1d8 + mod. de lanzamiento radiante. Escala: +1d8 cada 2 niveles.",
    damage: "1d8+mod Radiante (escala)", extra: null
  },
  {
    id: "suggestion", n: "Sugestión [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, M (lengua de víbora/miel)", duration: "Conc. 8 horas",
    desc: "Propones un curso de acción razonable a una criatura que te pueda oír. Salvación SAB o sigue tu sugestión. Termina si la sugestión es dañina.",
    damage: null, extra: null
  },
  {
    id: "tashas_mind_whip", n: "Látigo Mental de Tasha [TCE]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "90 pies", components: "V", duration: "1 turno",
    desc: "Latigazo psíquico en la mente de una criatura. Salvación INT o 3d6 psíquico y pierde una de las siguientes opciones en su siguiente turno: mover, acción o acción adicional. Escala: +1 objetivo/nivel.",
    damage: "3d6 Psíquico (escala)", extra: null
  },
  {
    id: "warding_bond", n: "Vínculo de Protección [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (anillos de oro 50 po c/u)", duration: "1 hora",
    desc: "El objetivo gana +1 CA, +1 salvaciones y resistencia a todo daño. Cuando recibe daño, tú recibes la misma cantidad. Si os separáis más de 60 pies, el conjuro termina.",
    damage: null, extra: null
  },
  {
    id: "warp_sense", n: "Sentido de Distorsión [EGW]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (ojo de pez disecado)", duration: "Conc. 8 horas",
    desc: "Durante la duración, eres consciente de cualquier conjuro de teletransporte o portal que se lance o active a 30 pies: sabes la dirección y nivel aproximado.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "web", n: "Tela de Araña [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (araña)", duration: "Conc. 1 hora",
    desc: "Cubo de 20 pies de tela pegajosa y difícil. Criaturas que empiecen o entren: salvación DES o Restringidas. Pueden liberarse con Acción (FUE vs. tu CD).",
    damage: null, extra: null
  },
  {
    id: "zone_of_truth", n: "Zona de Verdad [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "10 min",
    desc: "Esfera de 15 pies. Criaturas en el área: salvación CAR o no pueden mentir deliberadamente mientras estén dentro. Saben si el conjuro les afecta.",
    damage: null, extra: null
  },
];
