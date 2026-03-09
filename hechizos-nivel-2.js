/* ══════════════════════════════════════════════════════════
   hechizos-nivel-2.js — Conjuros de Nivel 2 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · SCC · AAG · BMT · FRHoF · EFA
   Nombres en inglés oficial · Descripciones en español
   Orden alfabético en inglés
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_2 = [
  {
    id: "aganazzars_scorcher", n: "Aganazzar's Scorcher [XGE]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (escama roja de dragón)", duration: "Instantáneo",
    desc: "Línea de fuego de 30×5 pies. Salvación DES o 3d8 fuego, mitad si tiene éxito. Escala: +1d8/nivel.",
    damage: "3d8 Fuego (escala)", extra: null
  },
  {
    id: "aid", n: "Aid [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "30 pies", components: "V, S, M (tira de tela blanca)", duration: "8 horas",
    desc: "Hasta 3 criaturas ganan +5 PG máximos y PG actuales. Escala: +5 PG/nivel adicional.",
    damage: null, extra: null
  },
  {
    id: "air_bubble", n: "Air Bubble [AAG]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "S", duration: "24 horas",
    desc: "Creas una burbuja de aire fresco alrededor de la cabeza de hasta 10 criaturas voluntarias. Las criaturas dentro pueden respirar con normalidad, incluso en entornos sin aire o bajo el agua. Una criatura puede romper la burbuja fácilmente si lo desea.",
    damage: null, extra: null
  },
  {
    id: "alter_self", n: "Alter Self [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 hora",
    desc: "Elige: Adaptación Acuática (respirar agua, nadar 30p), Cambio Natural (garras/puas/mordisco 1d6), o Forma Distinta (cambiar apariencia).",
    damage: null, extra: null
  },
  {
    id: "animal_messenger", n: "Animal Messenger [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (comida pequeña)", duration: "24 horas",
    desc: "Una bestia Diminuta lleva un mensaje hablado de 25 palabras a un destinatario descrito. Escala: duración ×48h/nivel.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "arcane_lock", n: "Arcane Lock [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (polvo de oro 25 po)", duration: "Hasta disipar",
    desc: "Bloqueas mágicamente una puerta, ventana, cofre u otro objeto con apertura. La CD para abrirlo se incrementa en 10. El lanzador puede abrirlo normalmente.",
    damage: null, extra: null
  },
  {
    id: "arcane_vigor", n: "Arcane Vigor [PHB24]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Instantáneo",
    desc: "Canalizas magia para sanar tu cuerpo. Ganas PG temporales iguales a 2d6 + tu modificador de la característica de lanzamiento. Escala: +2d6 por nivel de conjuro adicional.",
    damage: "2d6+mod PG temporales (escala)", extra: null
  },
  {
    id: "augury", n: "Augury [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 minuto (ritual)", range: "Personal", components: "V, S, M (varitas de marfil 25 po)", duration: "Instantáneo",
    desc: "Consultas a los poderes que velan. Recibes un presagio sobre el resultado de una acción específica en los próximos 30 minutos: bueno, malo, bueno y malo, o neutro.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "barkskin", n: "Barkskin [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S, M (trozo de corteza de roble)", duration: "1 hora",
    desc: "PHB24: La piel del objetivo se endurece. CA mínima = 17 sin importar la armadura que lleve. Sin concentración. PHB14: Conc. 1 hora, CA mínima 16.",
    damage: null, extra: null
  },
  {
    id: "beast_sense", n: "Beast Sense [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Toque", components: "S", duration: "Conc. 1 hora",
    desc: "Tocas a una bestia voluntaria. Durante la duración puedes usar tu acción para ver a través de sus ojos y escuchar con sus oídos. Mientras lo haces, eres sordo y ciego a tus propios sentidos.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "blindness_deafness", n: "Blindness/Deafness [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V", duration: "1 min",
    desc: "Una criatura: salvación CON o queda Cegada o Sorda (elige). Repite la salvación al final de cada turno. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "blur", n: "Blur [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Tu forma se difumina. Los atacantes tienen desventaja contra ti (a menos que usen sentidos no visuales o sean inmunes a la ceguera).",
    damage: null, extra: null
  },
  {
    id: "borrowed_knowledge", n: "Borrowed Knowledge [SCC]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (libro)", duration: "1 hora",
    desc: "Absorbes información de hechizos almacenados. Durante la duración, tienes competencia en una habilidad de tu elección. Puedes terminar este efecto antes para obtener una habilidad diferente.",
    damage: null, extra: null
  },
  {
    id: "calm_emotions", n: "Calm Emotions [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Suprimes emociones extremas en criaturas en esfera de 20 pies. Salvación CAR o: suprime encantamiento/miedo; o se vuelven indiferentes a criaturas hostiles.",
    damage: null, extra: null
  },
  {
    id: "cloud_of_daggers", n: "Cloud of Daggers [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (astilla de cristal)", duration: "Conc. 1 min",
    desc: "Cubo de 5 pies lleno de dagas giratorias. Criatura que entre o empiece ahí: 4d4 cortante. Escala: +2d4/nivel.",
    damage: "4d4 Cortante (escala)", extra: null
  },
  {
    id: "continual_flame", n: "Continual Flame [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, S, M (rubí en polvo 50 po)", duration: "Hasta disipar",
    desc: "Llama permanente en un objeto que da la misma luz que una antorcha pero sin calor, humo ni combustión. No puede apagarse con agua o viento.",
    damage: null, extra: null
  },
  {
    id: "cordon_of_arrows", n: "Cordon of Arrows [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (4 o más flechas o virotes)", duration: "8 horas",
    desc: "Clavas hasta 4 flechas o virotes en el suelo. La primera criatura que no sea tú que se acerque a 30 pies de las flechas: una flecha vuela y ataca (ataque de conjuro): 1d6 perforante. Escala: +2 flechas/nivel, +1d6 por nivel impar.",
    damage: "1d6 Perforante por flecha (escala)", extra: null
  },
  {
    id: "crown_of_madness", n: "Crown of Madness [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Un humanoide: salvación SAB o corona de hierro retorcido le corona. Cada turno ataca a la criatura más cercana que elijas. Repite la salvación al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "darkness", n: "Darkness [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, M (piel de murciélago/gota de alquitrán)", duration: "Conc. 10 min",
    desc: "Oscuridad mágica en esfera de 15 pies. Bloquea visión normal y de penumbra. Una fuente de luz de nivel 2 o inferior no puede vencerla.",
    damage: null, extra: null
  },
  {
    id: "darkvision", n: "Darkvision [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (zanahoria seca/ágata)", duration: "8 horas",
    desc: "La criatura tocada gana visión en la oscuridad hasta 60 pies.",
    damage: null, extra: null
  },
  {
    id: "death_armor", n: "Death Armor [FRHoF]",
    nivel: "Nivel 2", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque", components: "V, S, M (un hueso)", duration: "Conc. 10 min",
    desc: "Envuelves a una criatura tocada en energía necrótica. Cuando una criatura golpea al objetivo con un ataque cuerpo a cuerpo, el atacante recibe 1d6 necrótico. El objetivo también gana resistencia al daño necrótico mientras dure el conjuro.",
    damage: "1d6 Necrótico al atacante", extra: null
  },
  {
    id: "deryans_helpful_homunculi", n: "Deryan's Helpful Homunculi [FRHoF]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (arcilla o cera 5 po)", duration: "1 hora",
    desc: "Convocas 1d4 homúnculos diminutos que te ayudan. Pueden realizar tareas simples y llevar objetos ligeros. Como acción adicional puedes ordenarles que acudan a un punto que puedas ver en 30 pies y realicen una tarea sencilla. Se disuelven al acabar la duración.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "detect_thoughts", n: "Detect Thoughts [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (moneda de cobre)", duration: "Conc. 1 min",
    desc: "Lees la superficie de los pensamientos de criaturas a 30 pies. Puedes profundizar: salvación SAB o conoces sus pensamientos más profundos y puedes hacerles preguntas mentalmente.",
    damage: null, extra: null
  },
  {
    id: "dragon_breath", n: "Dragon's Breath [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S, M (guindilla)", duration: "Conc. 1 min",
    desc: "Criatura tocada puede exhalar un cono de 15 pies o línea de daño (ácido, frío, fuego, rayo o veneno) como Acción. Salvación DES: 3d6 del tipo elegido, mitad si tiene éxito. Escala: +1d6/nivel.",
    damage: "3d6 tipo elegido (escala)", extra: null
  },
  {
    id: "dust_devil", n: "Dust Devil [XGE]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (pizca de polvo)", duration: "Conc. 1 min",
    desc: "Torbellino de polvo de 5 pies en cubo de 5 pies. Criatura que entre o empiece: salvación FUE o 1d8 contundente y empujada 10 pies. Se puede mover 30 pies como Acción. Escala: +1d8/nivel.",
    damage: "1d8 Contundente (escala)", extra: null
  },
  {
    id: "earthbind", n: "Earthbind [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "300 pies", components: "V, S, M (trozo de hierro)", duration: "Conc. 1 min",
    desc: "Una criatura voladora: salvación FUE o su velocidad de vuelo se reduce a 0 y cae lentamente a tierra (sin daño).",
    damage: null, extra: null
  },
  {
    id: "elminsters_elusion", n: "Elminster's Elusion [FRHoF]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción adicional", range: "Personal", components: "V, S, M (trozo de cuarzo ahumado)", duration: "Conc. 1 min",
    desc: "Te vuelves parcialmente incorpóreo. Puedes moverte a través de objetos sólidos y criaturas (cuestan el doble de movimiento). Si terminas tu turno dentro de un objeto sólido recibes 1d10 de fuerza. Mientras dure, eres resistente al daño contundente, perforante y cortante de ataques no mágicos.",
    damage: null, extra: null
  },
  {
    id: "enhance_ability", n: "Enhance Ability [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (pelo de animal)", duration: "Conc. 1 hora",
    desc: "Elige un efecto: Fuerza del Oso (+2d6 PG temp, ventaja FUE), Gracia del Gato (ventaja DES, sin daño de caída ≤20p), Resiliencia del Cangrejo (ventaja CON), Inteligencia del Zorro (ventaja INT), Sabiduría del Búho (ventaja SAB), Majestuosidad del Águila (ventaja CAR). Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "enlarge_reduce", n: "Enlarge/Reduce [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (pizca de hierro/polvo)", duration: "Conc. 1 min",
    desc: "Agrandar: dobla tamaño, +1d4 daño con armas. Reducir: mitad de tamaño, -1d4 daño, ventaja en Sigilo. Salvación CON si es involuntario.",
    damage: "±1d4 (escala)", extra: null
  },
  {
    id: "enthrall", n: "Enthrall [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "1 min",
    desc: "Tu discurso hipnotiza a criaturas en 60 pies. Salvación SAB (con bonificación si están en combate) o quedan cautivadas por ti: desventaja en Percepción sobre otros.",
    damage: null, extra: null
  },
  {
    id: "find_steed", n: "Find Steed [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "10 minutos", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Convocas un espíritu en forma de corcel (caballo de guerra, poni, camello, mastín, mastodonte). Es tu compañero inteligente. Podéis comunicaros telepáticamente.",
    damage: null, extra: null
  },
  {
    id: "find_traps", n: "Find Traps [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Sientes la presencia de cualquier trampa a 120 pies en línea de visión. Sabes la ubicación general y el tipo de trampa (mágica, mecánica, etc.), pero no cómo desactivarla.",
    damage: null, extra: null
  },
  {
    id: "flame_blade", n: "Flame Blade [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V, S, M (hoja de sumac)", duration: "Conc. 10 min",
    desc: "Cimitarra de fuego en tu mano libre. Ataque de conjuro cuerpo a cuerpo: 3d6 fuego. Ilumina 10 pies brillante y 10 tenue. Escala: +1d6 cada 2 niveles.",
    damage: "3d6 Fuego (escala)", extra: null
  },
  {
    id: "flaming_sphere", n: "Flaming Sphere [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (sebo+fósforo)", duration: "Conc. 1 min",
    desc: "Esfera de fuego de 5 pies de diámetro. Criatura a 5 pies al inicio de su turno: salvación DES o 2d6 fuego, mitad si tiene éxito. Puedes moverla 30 pies como Acción Adicional. Escala: +1d6/nivel.",
    damage: "2d6 Fuego (escala)", extra: null
  },
  {
    id: "fortunes_favor", n: "Fortune's Favor [EGW]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 minuto", range: "60 pies", components: "V, S, M (polvo de perla 100 po)", duration: "1 hora",
    desc: "Imbuyes a una criatura voluntaria visible con una visión del futuro que influye en su suerte. Hasta que el conjuro termine, la criatura puede tirar un d20 adicional una vez cuando haga una tirada de ataque, tirada de habilidad o salvación, pudiendo elegir qué resultado usar. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "gentle_repose", n: "Gentle Repose [PHB]",
    nivel: "Nivel 2", escuela: "Nigromancia",
    casting: "1 acción (ritual)", range: "Toque", components: "V, S, M (pizca de sal/moneda)", duration: "10 días",
    desc: "Preservas un cadáver. No puede convertirse en no-muerto. El tiempo de este conjuro cuenta para límites de resurrección.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "gust_of_wind", n: "Gust of Wind [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 60p)", components: "V, S, M (semilla de legumbre)", duration: "Conc. 1 min",
    desc: "Línea de viento de 60×10 pies. Criaturas que empiecen ahí: salvación FUE o empujadas 15 pies. Ráfaga dispersa gases y nieblas. Puedes cambiar la dirección como Acción Adicional.",
    damage: null, extra: null
  },
  {
    id: "healing_spirit", n: "Healing Spirit [XGE]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción adicional", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Espíritu curativo en un espacio de 5 pies visible a 60 pies. Es invisible y ocupa su espacio. Criatura (no constructos/no-muertos) que empiece su turno o se mueva al espacio del espíritu: cura 1d6 PG. Puedes moverlo 30 pies como Acción Adicional. Usos: 1+mod de lanzamiento. Escala: +1d6/nivel.",
    damage: "Cura 1d6 (escala)", extra: null
  },
  {
    id: "heat_metal", n: "Heat Metal [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (trozo de hierro + llama)", duration: "Conc. 1 min",
    desc: "Un objeto metálico que no sea mágico se calienta al rojo. Criatura en contacto: 2d8 fuego. Si lo llevan puesto o lo sostienen: pueden soltarlo o sufrir desventaja en ataques y salvaciones. Escala: +1d8/nivel.",
    damage: "2d8 Fuego/turno (escala)", extra: null
  },
  {
    id: "hold_person", n: "Hold Person [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S, M (palillo recto)", duration: "Conc. 1 min",
    desc: "Un humanoide: salvación SAB o queda Paralizado. Repite al final de cada turno. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "homunculus_servant", n: "Homunculus Servant [EFA]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 hora (ritual)", range: "10 pies", components: "V, S, M (gema 100 po + materiales 10 po)", duration: "Instantáneo",
    desc: "Creas un homúnculo pequeño e inteligente vinculado a ti. Tiene sus propias estadísticas pero sigue tus órdenes telepáticamente. Puede entregar objetos, activar dispositivos simples y actuar como mensajero. Si el homúnculo muere, puedes crear otro con un coste adicional de materiales.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "immovable_object", n: "Immovable Object [EGW]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (polvo de diamante 25 po + barra de hierro)", duration: "1 hora",
    desc: "Tocas un objeto que pese hasta 10 libras y queda fijo en el lugar donde está, incluso en el aire. Una criatura puede usar una Acción para hacer una tirada de FUE (CD igual a tu CD de conjuro) para moverlo hasta 10 pies. Escala: Nv.4 = hasta 500 lb, FUE +5; Nv.6 = hasta 4000 lb, FUE +10.",
    damage: null, extra: null
  },
  {
    id: "invisibility", n: "Invisibility [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Toque", components: "V, S, M (párpado de pestañas de víbora)", duration: "Conc. 1 hora",
    desc: "Criatura tocada se vuelve invisible. El efecto termina si ataca o lanza un conjuro. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "kinetic_jaunt", n: "Kinetic Jaunt [SCC]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "S", duration: "Conc. 1 min",
    desc: "Impulsas tu movimiento con magia cinética. Hasta que el conjuro termine, tu velocidad aumenta en 10 pies, tus movimientos no provocan ataques de oportunidad, y puedes moverte a través del espacio de otras criaturas (aunque no puedes terminar tu turno en su espacio).",
    damage: null, extra: null
  },
  {
    id: "knock", n: "Knock [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Un objeto cerrado con cerrojo, llave, aldaba o atascado se abre. Funciona sobre Cerradura Arcana (la suspende 10 minutos). Golpe fuerte audible a 300 pies.",
    damage: null, extra: null
  },
  {
    id: "lesser_restoration", n: "Lesser Restoration [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción adicional", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Tocas a una criatura y terminas una enfermedad o una condición que la afecte: cegado, ensordecido, paralizado, envenenado.",
    damage: null, extra: null
  },
  {
    id: "levitate", n: "Levitate [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (cadena de oro)", duration: "Conc. 10 min",
    desc: "Una criatura u objeto de hasta 500 libras flota hasta 20 pies del suelo. El objetivo puede moverse verticalmente 20 pies/turno. Salvación CON si es involuntario.",
    damage: null, extra: null
  },
  {
    id: "locate_animals_or_plants", n: "Locate Animals or Plants [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (pluma de búho)", duration: "Instantáneo",
    desc: "Describes una especie de bestia o planta. Sabes la dirección y distancia al ejemplar más cercano a 5 millas.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "locate_object", n: "Locate Object [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (bifurcación de madera)", duration: "Conc. 10 min",
    desc: "Describes u objeto conocido. Sabes la dirección al objeto más cercano de ese tipo a 1000 pies, siempre que no esté bloqueado por plomo.",
    damage: null, extra: null
  },
  {
    id: "magic_mouth", n: "Magic Mouth [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 minuto (ritual)", range: "30 pies", components: "V, S, M (panal y polvo de jade 10 po)", duration: "Hasta disipar",
    desc: "Implanta un mensaje en un objeto. Cuando se cumpla una condición que especifiques, una boca aparece y recita el mensaje (hasta 25 palabras).",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "magic_weapon", n: "Magic Weapon [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
    desc: "Un arma no mágica se vuelve +1 mágica. Escala: +2 en Nv.4, +3 en Nv.6.",
    damage: "+1/+2/+3 al arma (escala)", extra: null
  },
  {
    id: "maximilians_earthen_grasp", n: "Maximilian's Earthen Grasp [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (puño de arcilla)", duration: "Conc. 1 min",
    desc: "Mano de tierra en espacio de 5 pies en suelo de tierra o piedra. Salvación FUE o Restringido. Puede repetir la salvación al final de cada turno. Puedes usar tu Acción: la mano aplasta al objetivo (2d6 contundente, FUE para soltarse).",
    damage: "2d6 Contundente (aplastar)", extra: null
  },
  {
    id: "melfs_acid_arrow", n: "Melf's Acid Arrow [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V, S, M (polvo de ruibarbo/hígado de víbora)", duration: "Instantáneo",
    desc: "Ataque de conjuro a distancia: 4d4 ácido inmediato y 2d4 ácido al final de su siguiente turno. Si falla, la mitad de daño inmediato. Escala: +1d4 de cada parte/nivel.",
    damage: "4d4+2d4 Ácido (escala)", extra: null
  },
  {
    id: "mind_spike", n: "Mind Spike [PHB24]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "120 pies", components: "S", duration: "Conc. 1 hora",
    desc: "Clava una punta de energía psíquica en la mente de una criatura visible. Salvación INT o 3d8 psíquico y conoces su ubicación hasta que el conjuro termine (aunque esté invisible o en otro plano). Si el objetivo se mueve, sabes adónde se ha movido. Escala: +1d8/nivel.",
    damage: "3d8 Psíquico + rastreo (escala)", extra: null
  },
  {
    id: "mirror_image", n: "Mirror Image [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 min",
    desc: "Creas 3 duplicados ilusorios. Cuando te ataquen, un dado determina si golpean a un duplicado. Duplicados destruidos eliminan las copias.",
    damage: null, extra: null
  },
  {
    id: "misty_step", n: "Misty Step [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Instantáneo",
    desc: "Rodeado de una bruma plateada, te teletransportas hasta 30 pies a un espacio vacío que puedas ver.",
    damage: null, extra: null
  },
  {
    id: "moonbeam", n: "Moonbeam [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (semilla de coral/pluma de avestruz)", duration: "Conc. 1 min",
    desc: "Rayo de luz plateada de 5 pies de radio, 40 pies de alto. Criatura que entre o empiece: salvación CON o 2d10 radiante (formas alternas: daño total). Escala: +1d10/nivel.",
    damage: "2d10 Radiante (escala)", extra: null
  },
  {
    id: "nathairs_mischief", n: "Nathair's Mischief [FTD]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "60 pies", components: "S, M (moneda dorada)", duration: "Conc. 1 min",
    desc: "Cubo de 20 pies lleno de magia dracónica impredecible. Al inicio de tu turno, el cubo genera un efecto aleatorio: destellos cegadores, burbujas de risa (Incapacitado), cristales brillantes (ciego 1 turno), o baba pegajosa (velocidad 0).",
    damage: null, extra: null
  },
  {
    id: "nystuls_magic_aura", n: "Nystul's Magic Aura [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "Toque", components: "V, S, M (cuadrado de seda)", duration: "24 horas",
    desc: "Alteras la percepción mágica de un objeto o criatura: cambias su alineamiento mágico, lo haces aparecer como mágico/no mágico, o enmascaras su escuela de magia durante 30 días.",
    damage: null, extra: null
  },
  {
    id: "pass_without_trace", n: "Pass without Trace [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S, M (ceniza de madera de acebo quemado)", duration: "Conc. 1 hora",
    desc: "Aura de sigilo. Tú y hasta 10 criaturas a 30 pies ganáis +10 a tiradas de Sigilo y no podéis ser rastreados excepto por magia.",
    damage: null, extra: null
  },
  {
    id: "phantasmal_force", n: "Phantasmal Force [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción", range: "60 pies", components: "V, S, M (trozo de lana)", duration: "Conc. 1 min",
    desc: "Creas una ilusión en la mente de una criatura. Salvación INT o la criatura cree que la ilusión (en cubo de 10 pies) es real. La ilusión puede infligir 1d6 psíquico/turno si es de naturaleza dañina. Investigación vs. tu CD para percibir que es ilusoria.",
    damage: "1d6 Psíquico/turno (si dañina)", extra: null
  },
  {
    id: "prayer_of_healing", n: "Prayer of Healing [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "10 minutos", range: "30 pies", components: "V", duration: "Instantáneo",
    desc: "Hasta 6 criaturas visibles recuperan 2d8 + mod. de lanzamiento PG. No en combate. Escala: +1d8/nivel.",
    damage: "Cura 2d8+mod (escala)", extra: null
  },
  {
    id: "protection_from_poison", n: "Protection from Poison [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "1 hora",
    desc: "Neutraliza un veneno activo. Durante la duración: ventaja en salvaciones contra veneno, resistencia al daño por veneno.",
    damage: null, extra: null
  },
  {
    id: "pyrotechnics", n: "Pyrotechnics [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Elige una llama no mágica que puedas ver a 60 pies y crea uno de los siguientes efectos: Fuegos artificiales (destellos brillantes en cubo de 10 pies; criaturas en el área: salvación CON o cegadas hasta el final de tu siguiente turno) o Humo (nube de humo de 20 pies de radio durante 1 minuto; área fuertemente oscurecida). La llama se apaga en cualquier caso.",
    damage: null, extra: null
  },
  {
    id: "ray_of_enfeeblement", n: "Ray of Enfeeblement [PHB]",
    nivel: "Nivel 2", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Ataque de conjuro a distancia. Si impacta: salvación CON o solo inflige la mitad de daño en ataques con arma que usen FUE. Repite la salvación al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "rimes_binding_ice", n: "Rime's Binding Ice [FTD]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cono 30p)", components: "S, M (trozo de hielo o cuarzo blanco)", duration: "Instantáneo",
    desc: "Cono de frío de 30 pies. Salvación CON o 3d8 frío y Restringido por hielo hasta el inicio de tu siguiente turno. Si tienen éxito en la salvación: mitad de daño sin Restringir. Escala: +1d8/nivel.",
    damage: "3d8 Frío + Restringido (escala)", extra: null
  },
  {
    id: "rope_trick", n: "Rope Trick [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (polvo de maíz/pasta de tela)", duration: "1 hora",
    desc: "Una cuerda de hasta 60 pies sube y crea un espacio extradimensional en su extremo. Hasta 8 criaturas pueden entrar. Invisible desde fuera.",
    damage: null, extra: null
  },
  {
    id: "scorching_ray", n: "Scorching Ray [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Lanzas 3 rayos de fuego. Ataque de conjuro a distancia por cada rayo: 2d6 fuego. Puedes dirigirlos al mismo o distintos objetivos. Escala: +1 rayo/nivel.",
    damage: "3 × 2d6 Fuego (escala)", extra: null
  },
  {
    id: "see_invisibility", n: "See Invisibility [PHB]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "V, S, M (pizca de talco/polvo de plata)", duration: "1 hora",
    desc: "Ves criaturas y objetos invisibles como si fueran visibles y puedes ver al Plano Etéreo hasta 60 pies.",
    damage: null, extra: null
  },
  {
    id: "shadow_blade", n: "Shadow Blade [XGE]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Cimitarra de sombra solidificada. Ataque de conjuro cuerpo a cuerpo (FUE o DES): 2d8 psíquico. En condiciones de poca luz: ventaja en ataques. Puedes lanzarla (20/60 pies). Escala: 3d8 Nv.3-4, 4d8 Nv.5-6, 5d8 Nv.7+.",
    damage: "2d8 Psíquico (escala)", extra: null
  },
  {
    id: "shatter", n: "Shatter [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (esquirla de mica)", duration: "Instantáneo",
    desc: "Ruido súbito doloroso. Esfera de 10 pies: salvación CON o 3d8 trueno, mitad si tiene éxito. Objetos inorgánicos en el área sufren daño automático. Escala: +1d8/nivel.",
    damage: "3d8 Trueno (escala)", extra: null
  },
  {
    id: "shining_smite", n: "Shining Smite [PHB24]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "El próximo ataque con arma que impacte: +2d6 radiante y el objetivo emite luz brillante en 5 pies + luz tenue otros 5 pies, y tiene desventaja en la siguiente tirada de ataque que realice antes del final de su turno. Escala: +1d6/nivel.",
    damage: "+2d6 Radiante (escala)", extra: null
  },
  {
    id: "silence", n: "Silence [PHB]",
    nivel: "Nivel 2", escuela: "Ilusión",
    casting: "1 acción (ritual)", range: "120 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Esfera de silencio de 20 pies de radio. Ningún sonido puede salir ni entrar. Inmunidad al daño sónico. Imposible lanzar conjuros con componente verbal dentro.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "skywrite", n: "Skywrite [XGE]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "Conc. 1 hora",
    desc: "Escribes en el cielo con nubes un mensaje de hasta 10 palabras visibles a 1 milla. Un viento fuerte puede distorsionarlo.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "snillocs_snowball_swarm", n: "Snilloc's Snowball Swarm [XGE]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V, S, M (trozo de hielo o cristal)", duration: "Instantáneo",
    desc: "Lluvia de bolas de nieve en esfera de 5 pies de radio. Salvación DES o 3d6 frío, mitad si tiene éxito. Escala: +1d6/nivel.",
    damage: "3d6 Frío (escala)", extra: null
  },
  {
    id: "spider_climb", n: "Spider Climb [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (gota de alquitrán + araña)", duration: "Conc. 1 hora",
    desc: "La criatura puede escalar superficies difíciles, incluyendo techos, sin tirada de habilidad.",
    damage: null, extra: null
  },
  {
    id: "spike_growth", n: "Spike Growth [PHB]",
    nivel: "Nivel 2", escuela: "Transmutación",
    casting: "1 acción", range: "150 pies", components: "V, S, M (siete espinas afiladas)", duration: "Conc. 10 min",
    desc: "El suelo en un radio de 20 pies se llena de espinas y pinchos mágicos. Terreno difícil. Criatura que entre o se mueva por el área: 2d4 perforante por cada 5 pies recorridos. La trampa es difícilmente visible (Percepción CD 15).",
    damage: "2d4 Perforante por 5 pies", extra: null
  },
  {
    id: "spiritual_weapon", n: "Spiritual Weapon [PHB]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción adicional", range: "60 pies", components: "V, S", duration: "1 min",
    desc: "Arma flotante de energía radiante. Acción Adicional para moverla 20 pies y atacar: ataque de conjuro cuerpo a cuerpo, 1d8 + mod. de lanzamiento radiante. Escala: +1d8 cada 2 niveles.",
    damage: "1d8+mod Radiante (escala)", extra: null
  },
  {
    id: "spray_of_cards", n: "Spray of Cards [BMT]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "Personal (cono 15p)", components: "V, S, M (una baraja de cartas)", duration: "Instantáneo",
    desc: "Lanzas cartas en un cono de 15 pies. Cada criatura en el área: salvación DES o 2d6 cortante y cegada hasta el inicio de tu siguiente turno. Escala: +1d6/nivel.",
    damage: "2d6 Cortante + Cegado (escala)", extra: null
  },
  {
    id: "suggestion", n: "Suggestion [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, M (lengua de víbora/miel)", duration: "Conc. 8 horas",
    desc: "Propones un curso de acción razonable a una criatura que te pueda oír. Salvación SAB o sigue tu sugestión. Termina si la sugestión es dañina.",
    damage: null, extra: null
  },
  {
    id: "summon_beast", n: "Summon Beast [TCE/PHB24]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (pluma/pelo/espina 200 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu bestial que toma la forma de un animal de tu elección. Elige: Aéreo (vuelo 60p, ataque con pico), Acuático (nado 30p, ataque con aleta/mordisco), o Terrestre (escalar 30p, ataque con garra). Sus PG y ataques escalan con el nivel del conjuro. Escala: +1d8 daño cada 2 niveles.",
    damage: "1d8+mod por ataque (escala)", extra: null
  },
  {
    id: "tashas_mind_whip", n: "Tasha's Mind Whip [TCE]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "90 pies", components: "V", duration: "1 turno",
    desc: "Latigazo psíquico en la mente de una criatura. Salvación INT o 3d6 psíquico y pierde una de las siguientes opciones en su siguiente turno: mover, acción o acción adicional. Escala: +1 objetivo/nivel.",
    damage: "3d6 Psíquico (escala)", extra: null
  },
  {
    id: "vortex_warp", n: "Vortex Warp [SCC]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S", duration: "Instantáneo",
    desc: "Manipulas el tejido del espacio para teletransportar a una criatura visible a 90 pies a un espacio vacío que puedas ver a 90 pies. Si la criatura es hostil: salvación CON o es teletransportada. Escala: rango +30 pies/nivel.",
    damage: null, extra: null
  },
  {
    id: "warding_bond", n: "Warding Bond [PHB]",
    nivel: "Nivel 2", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (anillos de oro 50 po c/u)", duration: "1 hora",
    desc: "El objetivo gana +1 CA, +1 salvaciones y resistencia a todo daño. Cuando recibe daño, tú recibes la misma cantidad. Si os separáis más de 60 pies, el conjuro termina.",
    damage: null, extra: null
  },
  {
    id: "warding_wind", n: "Warding Wind [XGE]",
    nivel: "Nivel 2", escuela: "Evocación",
    casting: "1 acción", range: "Personal", components: "V", duration: "Conc. 10 min",
    desc: "Viento fuerte te rodea en radio de 10 pies. Efectos: terreno difícil para otros, extingue llamas Pequeñas o menores, dispersa gases/vapores, ataques a distancia con armas con desventaja contigo como objetivo, eres inmune al daño gaseoso. El viento hace ruido.",
    damage: null, extra: null
  },
  {
    id: "warp_sense", n: "Warp Sense [EGW]",
    nivel: "Nivel 2", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (ojo de pez disecado)", duration: "Conc. 8 horas",
    desc: "Durante la duración, eres consciente de cualquier conjuro de teletransporte o portal que se lance o active a 30 pies: sabes la dirección y nivel aproximado.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "web", n: "Web [PHB]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (araña)", duration: "Conc. 1 hora",
    desc: "Cubo de 20 pies de tela pegajosa y difícil. Criaturas que empiecen o entren: salvación DES o Restringidas. Pueden liberarse con Acción (FUE vs. tu CD).",
    damage: null, extra: null
  },
  {
    id: "wither_and_bloom", n: "Wither and Bloom [SCC]",
    nivel: "Nivel 2", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S, M (flor marchita)", duration: "Instantáneo",
    desc: "Infundes energía necrótica y vital simultáneamente en un área. Criaturas de tu elección en esfera de 10 pies: salvación CON o 2d6 necrótico (mitad si tienen éxito). Una criatura diferente de tu elección en el área (no constructos ni no-muertos) recupera 1d6+mod PG. Escala: +1d6 daño y +1d6 curación/nivel.",
    damage: "2d6 Necrótico + 1d6+mod curación (escala)", extra: null
  },
  {
    id: "wristpocket", n: "Wristpocket [EGW]",
    nivel: "Nivel 2", escuela: "Conjuración",
    casting: "1 acción (ritual)", range: "Personal", components: "S", duration: "Conc. 1 hora",
    desc: "Guardas un objeto que quepas en la mano en un espacio extradimensional en tu muñeca. Solo puedes guardar 1 objeto a la vez. Puedes recuperarlo usando tu Acción Adicional. Si el conjuro termina, el objeto cae al suelo a tus pies.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "zone_of_truth", n: "Zone of Truth [PHB]",
    nivel: "Nivel 2", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "10 min",
    desc: "Esfera de 15 pies. Criaturas en el área: salvación CAR o no pueden mentir deliberadamente mientras estén dentro. Saben si el conjuro les afecta.",
    damage: null, extra: null
  },
];
