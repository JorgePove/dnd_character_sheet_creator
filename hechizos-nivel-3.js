/* ══════════════════════════════════════════════════════════
   hechizos-nivel-3.js — Conjuros de Nivel 3 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · BMT · FRHoF · TDCSR · IDRotF
   Nombres en inglés oficial · Descripciones en español
   Orden alfabético en inglés
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_3 = [
  {
    id: "animate_dead", n: "Animate Dead [PHB]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 minuto", range: "10 pies", components: "V, S, M (gota de sangre/trozo de carne/pizca de hueso)", duration: "Instantáneo",
    desc: "Creas un esqueleto o zombi a partir de restos óseos o cadáver. Obedece tus órdenes verbales. Sin órdenes, defiende su posición. Escala: +2 no-muertos/nivel.",
    damage: null, extra: null
  },
  {
    id: "antagonize", n: "Antagonize [BMT]",
    nivel: "Nivel 3", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (lengua de víbora)", duration: "Instantáneo",
    desc: "Susurras palabras hirientes a una criatura que pueda oírte a 30 pies. Salvación SAB o sufre 4d4 psíquico y debe usar inmediatamente su reacción (si está disponible) para realizar un ataque con arma contra otra criatura de tu elección visible a 5 pies de ella. Escala: +1d4/nivel.",
    damage: "4d4 Psíquico (escala)", extra: null
  },
  {
    id: "ashardalons_stride", n: "Ashardalon's Stride [FTD]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Llamas de dragón emanan de tus pies. Tu velocidad aumenta en 20 pies. Cuando te mueves por el espacio de otra criatura o terminas tu turno adyacente a ella: salvación DES o 1d6 fuego (escalando a 2d6 en Nv.5, 3d6 en Nv.7, 4d6 en Nv.9). El suelo donde pisas queda en llamas brevemente.",
    damage: "1d6 Fuego (escala)", extra: null
  },
  {
    id: "aura_of_vitality", n: "Aura of Vitality [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (30 pies)", components: "V", duration: "Conc. 1 min",
    desc: "Aura de energía curativa de 30 pies. Como Acción Adicional cada turno, curas a 1 criatura visible en el aura 2d6 PG.",
    damage: "Cura 2d6 PG/turno", extra: null
  },
  {
    id: "beacon_of_hope", n: "Beacon of Hope [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Hasta 3 criaturas tienen ventaja en SAB y en salvaciones contra la muerte. Cuando recuperan PG, recuperan el máximo posible.",
    damage: null, extra: null
  },
  {
    id: "bestow_curse", n: "Bestow Curse [PHB]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
    desc: "Ataque de conjuro cuerpo a cuerpo. Si impacta: elige efecto: desventaja en ataques, salvaciones o tiradas de habilidad con una estadística; o 1d8 necrótico adicional cuando le golpees. Escala: duración hasta 8h (Nv.4), 24h (Nv.5), permanente (Nv.7+).",
    damage: "+1d8 Necrótico (opcional)", extra: null
  },
  {
    id: "blinding_smite", n: "Blinding Smite [PHB]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Próximo impacto con arma: +3d8 radiante y salvación CON o queda Cegado. Repite la salvación al final de cada turno.",
    damage: "+3d8 Radiante", extra: null
  },
  {
    id: "blink", n: "Blink [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 min",
    desc: "Al final de tu turno, tira 1d20. Con 11+, desapareces al Plano Etéreo hasta tu siguiente turno. Si reapareces en espacio ocupado, sufres 1d10 de fuerza y vuelves al Etéreo.",
    damage: null, extra: null
  },
  {
    id: "cacophonic_shield", n: "Cacophonic Shield [FRHoF]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "Personal (emanación 10p)", components: "V, S", duration: "Conc. 1 min",
    desc: "Un escudo de sonido discordante te rodea en 10 pies. Criaturas que entren o inicien su turno en el área: salvación CON o 2d6 de trueno y quedan ensordecidas hasta el inicio de su siguiente turno. Además, mientras el escudo esté activo, tienes resistencia al daño de trueno.",
    damage: "2d6 Trueno + Ensordecido", extra: null
  },
  {
    id: "call_lightning", n: "Call Lightning [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Nube de tormenta de 100 pies de radio. Como Acción, llamas un rayo a un punto visible: salvación DES o 3d10 rayo, mitad si tiene éxito. En tormenta real: 4d10. Escala: +1d10/nivel.",
    damage: "3d10 Rayo (escala)", extra: null
  },
  {
    id: "catnap", n: "Catnap [XGE]",
    nivel: "Nivel 3", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "S, M (pizca de arena)", duration: "10 min",
    desc: "Hasta 3 criaturas voluntarias a 30 pies caen en sueño mágico. Al final de los 10 minutos, se despiertan y ganan los beneficios de un descanso corto. Escala: +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "clairvoyance", n: "Clairvoyance [PHB]",
    nivel: "Nivel 3", escuela: "Adivinación",
    casting: "10 minutos", range: "1 milla", components: "V, S, M (cuerno/ojo de vidrio 100 po)", duration: "Conc. 10 min",
    desc: "Creas un sensor invisible en un lugar conocido a 1 milla. Puedes ver u oír a través de él (un sentido a la vez) usando tu percepción normal.",
    damage: null, extra: null
  },
  {
    id: "conjure_animals", n: "Conjure Animals [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "Convocas espíritus feéricos en forma de bestia. Escoge: 1 bestia CR≤2, 2 bestias CR≤1, 4 bestias CR≤1/2, u 8 bestias CR≤1/4. Obedecen tus órdenes. Escala: duplicas la cantidad/2 niveles.",
    damage: null, extra: null
  },
  {
    id: "conjure_barrage", n: "Conjure Barrage [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "Personal (cono 60p)", components: "V, S, M (munición o arma arrojadiza)", duration: "Instantáneo",
    desc: "Lanzas munición que se multiplica en cono de 60 pies. Salvación DES o 3d8 del tipo del arma, mitad si tiene éxito. Escala: +1d8/nivel.",
    damage: "3d8 tipo arma (escala)", extra: null
  },
  {
    id: "conjure_constructs", n: "Conjure Constructs [FRHoF]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (trocito de hierro)", duration: "Conc. 1 hora",
    desc: "Convocas constructos mágicos para que luchen a tu lado. Aparecen en espacios vacíos visibles a 60 pies. Puedes convocar: 1 constructo CR≤2, 2 constructos CR≤1, 4 constructos CR≤1/2, u 8 constructos CR≤1/4. Obedecen tus órdenes. Escala: duplicas la cantidad por 2 niveles adicionales.",
    damage: null, extra: null
  },
  {
    id: "counterspell", n: "Counterspell [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 reacción", range: "60 pies", components: "S", duration: "Instantáneo",
    desc: "Reacción cuando una criatura a 60 pies lanza un conjuro. Interrumpe conjuros de Nv.3 o inferior automáticamente. Para niveles superiores: tirada de habilidad (INT/SAB/CAR) CD = 10 + nivel del conjuro.",
    damage: null, extra: null
  },
  {
    id: "create_food_and_water", n: "Create Food and Water [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Creas 45 libras de comida y 30 galones de agua en una superficie u objetos. Suficiente para 15 humanoides o 5 monturas durante 24 horas.",
    damage: null, extra: null
  },
  {
    id: "crusaders_mantle", n: "Crusader's Mantle [PHB]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "Personal (emanación 30p)", components: "V", duration: "Conc. 1 min",
    desc: "Aura de energía divina de 30 pies. Tú y tus aliados dentro del aura añadís 1d4 de radiante a ataques con arma.",
    damage: "+1d4 Radiante", extra: null
  },
  {
    id: "daylight", n: "Daylight [PHB]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "1 hora",
    desc: "Esfera de luz brillante de 60 pies de radio, luz tenue 60 pies adicionales. Disipa todas las oscuridades mágicas de Nv.3 o inferior en su radio.",
    damage: null, extra: null
  },
  {
    id: "dispel_magic", n: "Dispel Magic [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Elige un objeto, criatura o efecto mágico a 120 pies. Conjuros de Nv.3 o inferior terminan automáticamente. Para niveles superiores: tirada de habilidad CD = 10 + nivel del conjuro. Escala: niveles superiores en vez de tirar.",
    damage: null, extra: null
  },
  {
    id: "elemental_weapon", n: "Elemental Weapon [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
    desc: "Arma no mágica: +1 ataque, +1d4 de tipo elegido (ácido, frío, fuego, rayo o trueno). Escala: +2 ataque y +2d4 en Nv.5-6; +3 y +3d4 en Nv.7+.",
    damage: "+1d4 elemental (escala)", extra: null
  },
  {
    id: "enemies_abound", n: "Enemies Abound [XGE]",
    nivel: "Nivel 3", escuela: "Encantamiento",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Una criatura: salvación INT o su sentido de identificar amigos/enemigos queda distorsionado. Considera a todos enemigos y puede atacar a cualquiera. Repite la salvación al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "erupting_earth", n: "Erupting Earth [XGE]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (trozo de obsidiana)", duration: "Instantáneo",
    desc: "El terreno explota en un cubo de 20 pies. Salvación DES o 3d12 contundente, mitad si tiene éxito. El área se convierte en terreno difícil. Escala: +1d12/nivel.",
    damage: "3d12 Contundente (escala)", extra: null
  },
  {
    id: "fast_friends", n: "Fast Friends [SAiS]",
    nivel: "Nivel 3", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Conc. 1 hora",
    desc: "Un humanoide que puedas oír: salvación SAB o se convierte en tu amigo sincero durante la duración. Al terminar, sabe que fue encantado. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "fear", n: "Fear [PHB]",
    nivel: "Nivel 3", escuela: "Ilusión",
    casting: "1 acción", range: "Personal (cono 30p)", components: "V, S, M (pluma blanca/gallina)", duration: "Conc. 1 min",
    desc: "Cono de 30 pies de visiones aterradoras. Salvación SAB o huyen en dirección contraria, sueltan lo que lleven. Repite al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "feign_death", n: "Feign Death [PHB]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción (ritual)", range: "Toque", components: "V, S, M (pizca de polvo de hueso)", duration: "1 hora",
    desc: "Tocas a una criatura voluntaria y la pones en un estado cataléptico que imita la muerte. La criatura parece muerta a toda inspección (incluso mágica). Está incapacitada y ciega. Velocidad 0. Tiene resistencia a todo daño excepto psíquico. Las enfermedades y venenos se suspenden. Se puede terminar antes usando tu acción.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "fireball", n: "Fireball [PHB]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S, M (azufre+guano de murciélago)", duration: "Instantáneo",
    desc: "Esfera de 20 pies de radio. Salvación DES o 8d6 fuego, mitad si tiene éxito. Se propaga por esquinas. Escala: +1d6/nivel.",
    damage: "8d6 Fuego (escala)", extra: null
  },
  {
    id: "flame_arrows", n: "Flame Arrows [XGE]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
    desc: "Tocas un carcaj. Hasta 12 flechas o virotes del carcaj se vuelven mágicos. Cuando alguien dispara una de estas municiones e impacta: +1d6 fuego adicional. Una vez disparada, la munición pierde la magia.",
    damage: "+1d6 Fuego por flecha", extra: null
  },
  {
    id: "fly", n: "Fly [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (pluma de halcón)", duration: "Conc. 10 min",
    desc: "Criatura tocada gana velocidad de vuelo de 60 pies. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "freedom_of_the_waves", n: "Freedom of the Waves [TDCSR]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "120 pies", components: "V, S, M (un trozo de madera de naufragio)", duration: "Instantáneo",
    desc: "Creas una explosión de agua que te permite teletransportarte hasta 60 pies a un espacio acuático visible o adyacente al agua. Criaturas a 10 pies del punto de llegada: salvación FUE o 2d8 contundente y tumbadas. Puedes llevar hasta 8 criaturas voluntarias contiguas.",
    damage: "2d8 Contundente", extra: null
  },
  {
    id: "gaseous_form", n: "Gaseous Form [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (trozo de gasa/humo)", duration: "Conc. 1 hora",
    desc: "Criatura voluntaria se transforma en nube de gas: velocidad 10 pies + vuelo 10 pies, resistencia a daño no mágico, inmune a veneno/trueno, puede pasar por grietas pequeñas.",
    damage: null, extra: null
  },
  {
    id: "glyph_of_warding", n: "Glyph of Warding [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 hora", range: "Toque", components: "V, S, M (polvos de incienso/diamante 200 po)", duration: "Hasta disipar",
    desc: "Graba un glifo en una superficie. Al activarse por condición que elijas: puede causar daño (5d8 de un tipo) o lanzar un conjuro de nivel 3 o inferior almacenado.",
    damage: "5d8 del tipo elegido", extra: null
  },
  {
    id: "haste", n: "Haste [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (raíz de regaliz)", duration: "Conc. 1 min",
    desc: "Criatura voluntaria: dobla velocidad, +2 CA, ventaja en salvaciones DES, acción adicional (ataque, Correr, Desengancharse, Esconderse o Usar Objeto). Al terminar: incapacitada 1 turno.",
    damage: null, extra: null
  },
  {
    id: "hunger_of_hadar", n: "Hunger of Hadar [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "150 pies", components: "V, S, M (tentáculo de pulpo en escabeche)", duration: "Conc. 1 min",
    desc: "Abismo de oscuridad de 20 pies de radio. Ninguna luz brilla dentro. Criaturas en el área al inicio: salvación DES o 2d6 frío. Al final del turno: salvación CON o 2d6 ácido.",
    damage: "2d6 Frío + 2d6 Ácido", extra: null
  },
  {
    id: "hypnotic_pattern", n: "Hypnotic Pattern [PHB]",
    nivel: "Nivel 3", escuela: "Ilusión",
    casting: "1 acción", range: "120 pies", components: "S, M (bastón/incienso)", duration: "Conc. 1 min",
    desc: "Patrón tortuoso de colores en cubo de 30 pies. Criaturas que lo vean: salvación SAB o Hechizadas e Incapacitadas. Termina si reciben daño o alguien les agita.",
    damage: null, extra: null
  },
  {
    id: "incite_greed", n: "Incite Greed [IDRotF]",
    nivel: "Nivel 3", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S, M (moneda de oro)", duration: "Conc. 1 min",
    desc: "Muestras una moneda brillante. Criaturas en 30 pies: salvación SAB o quedan Hechizadas y se mueven hacia la moneda lo más rápido posible cada turno.",
    damage: null, extra: null
  },
  {
    id: "intellect_fortress", n: "Intellect Fortress [TCE]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Conc. 1 hora",
    desc: "Creas una fortaleza mental en una criatura visible. Gana resistencia al daño psíquico, ventaja en INT, SAB y CAR. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "laerals_silver_lance", n: "Laeral's Silver Lance [FRHoF]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 120p)", components: "V, S, M (astilla de plata 10 po)", duration: "Instantáneo",
    desc: "Una lanza de energía plateada brota de tu mano en una línea de 120×5 pies. Cada criatura en la línea debe hacer una salvación CON o recibir 4d8 de radiante, la mitad si tiene éxito. Los no-muertos tienen desventaja en esta salvación. Escala: +1d8/nivel.",
    damage: "4d8 Radiante (escala)", extra: null
  },
  {
    id: "leomund_tiny_hut", n: "Leomund's Tiny Hut [PHB]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 minuto (ritual)", range: "Personal (cúpula 10p)", components: "V, S, M (perla pequeña)", duration: "8 horas",
    desc: "Cúpula de 10 pies de radio. Temperatura agradable dentro, impermeable, bloquea paso de criaturas. Los de dentro ven fuera, los de fuera no ven dentro.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "life_transference", n: "Life Transference [XGE]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Sacrificas parte de tu propia vitalidad para curar a otra criatura. Sufres 4d8 necrótico (sin salvación ni resistencia) y una criatura visible a 30 pies recupera el doble de esa cantidad (8d8) de PG. Escala: +1d8/nivel (tú sufres +1d8, el objetivo recupera +2d8).",
    damage: "4d8 Necrótico a ti mismo (escala)", extra: null
  },
  {
    id: "lightning_arrow", n: "Lightning Arrow [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "El próximo ataque a distancia con arma: si impacta, 4d8 rayo en vez del daño normal. Si falla, 2d8 rayo. Criaturas a 10 pies del objetivo: salvación DES o 2d8 rayo, mitad si tiene éxito. Escala: +1d8/nivel.",
    damage: "4d8 Rayo (escala)", extra: null
  },
  {
    id: "lightning_bolt", n: "Lightning Bolt [PHB]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "Personal (línea 100p)", components: "V, S, M (piel de palo+cristal)", duration: "Instantáneo",
    desc: "Rayo de 100×5 pies. Salvación DES o 8d6 rayo, mitad si tiene éxito. Objetos inflamables se incendian. Escala: +1d6/nivel.",
    damage: "8d6 Rayo (escala)", extra: null
  },
  {
    id: "magic_circle", n: "Magic Circle [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 minuto", range: "10 pies", components: "V, S, M (sal/polvo de hierro/carbón 100 po)", duration: "1 hora",
    desc: "Cilindro de 10 pies de radio, 20 pies de alto. Tipos de criaturas elegidas (celestiales, elementales, infernales, no-muertos, feéricos) no pueden entrar voluntariamente. Escala: +1 hora/nivel.",
    damage: null, extra: null
  },
  {
    id: "major_image", n: "Major Image [PHB]",
    nivel: "Nivel 3", escuela: "Ilusión",
    casting: "1 acción", range: "120 pies", components: "V, S, M (trozo de lana)", duration: "Conc. 10 min",
    desc: "Imagen ilusoria de objeto, criatura o fenómeno en cubo de 20 pies. Incluye sonidos, temperatura y olor. Investigación vs. tu CD para descreer. Sin concentración si se lanza en Nv.6+.",
    damage: null, extra: null
  },
  {
    id: "mass_healing_word", n: "Mass Healing Word [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción adicional", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Hasta 6 criaturas visibles recuperan 1d4 + mod. de lanzamiento PG. Escala: +1d4/nivel.",
    damage: "Cura 1d4+mod (escala)", extra: null
  },
  {
    id: "meld_into_stone", n: "Meld into Stone [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción (ritual)", range: "Toque", components: "V, S", duration: "8 horas",
    desc: "Te fundes en una superficie de piedra que puedas tocar. Puedes percibir el exterior vagamente. No puedes ser atacado. Puedes salir usando movimiento.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "melfs_minute_meteors", n: "Melf's Minute Meteors [XGE]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "Personal", components: "V, S, M (cristal de cuarzo+bronce 10 po)", duration: "Conc. 10 min",
    desc: "Creas 6 meteoros diminutos que orbitan tu cabeza. Como Acción Adicional (o parte de tu acción), puedes disparar hasta 2 meteoros: cada uno impacta en un punto visible a 120 pies y explota en 5 pies (salvación DES o 2d6 fuego, mitad si tiene éxito). Escala: +2 meteoros/nivel.",
    damage: "2d6 Fuego por meteoro (escala)", extra: null
  },
  {
    id: "motivational_speech", n: "Motivational Speech [SAiS]",
    nivel: "Nivel 3", escuela: "Encantamiento",
    casting: "1 minuto", range: "60 pies", components: "V", duration: "1 hora",
    desc: "Hasta 5 criaturas que te puedan oír ganan 5 PG temporales, ventaja en SAB y no pueden ser Asustadas. Escala: +5 PG temporales y +1 criatura/nivel.",
    damage: null, extra: null
  },
  {
    id: "nondetection", n: "Nondetection [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (pizca de diamante/polvo de pizarra 25 po)", duration: "8 horas",
    desc: "El objetivo no puede ser detectado por ninguna magia de adivinación ni percibido mediante bolas de cristal.",
    damage: null, extra: null
  },
  {
    id: "phantom_steed", n: "Phantom Steed [PHB]",
    nivel: "Nivel 3", escuela: "Ilusión",
    casting: "1 minuto (ritual)", range: "30 pies", components: "V, S", duration: "1 hora",
    desc: "Corcel fantasmagórico de aspecto equino. Velocidad 100 pies. Solo puede ser montado por ti. Al terminar la duración, desaparece.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "plant_growth", n: "Plant Growth [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción / 8 horas", range: "150 pies", components: "V, S", duration: "Instantáneo",
    desc: "Acción: plantas en radio de 100 pies crecen exuberantemente; terreno difícil por 1 año. 8 horas: fertiliza hasta 1 milla cuadrada por 1 año (cosechas triples).",
    damage: null, extra: null
  },
  {
    id: "protection_from_energy", n: "Protection from Energy [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
    desc: "Criatura tocada gana resistencia a un tipo de daño (ácido, frío, fuego, rayo o trueno).",
    damage: null, extra: null
  },
  {
    id: "pulse_wave", n: "Pulse Wave [EGW]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cono 30p)", components: "V, S", duration: "Instantáneo",
    desc: "Onda de fuerza gravitacional en cono de 30 pies. Salvación CON o 6d6 de fuerza y empujados 15 pies. Mitad de daño y sin empuje si tienen éxito. Escala: +2d6/nivel.",
    damage: "6d6 Fuerza (escala)", extra: null
  },
  {
    id: "remove_curse", n: "Remove Curse [PHB]",
    nivel: "Nivel 3", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Eliminas todas las maldiciones que afecten a una criatura u objeto. Si el objeto está maldito, la maldición queda suprimida mientras lo sostengas.",
    damage: null, extra: null
  },
  {
    id: "revivify", n: "Revivify [PHB]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque", components: "V, S, M (diamante 300 po)", duration: "Instantáneo",
    desc: "Devuelves a la vida a una criatura muerta hace no más de 1 minuto. Regresa con 1 PG. No puede devolver a criaturas que murieron de vejez.",
    damage: null, extra: null
  },
  {
    id: "sending", n: "Sending [PHB]",
    nivel: "Nivel 3", escuela: "Adivinación",
    casting: "1 acción", range: "Ilimitado", components: "V, S, M (hilo de cobre fino)", duration: "1 turno",
    desc: "Envías un mensaje de 25 palabras a una criatura con la que estés familiarizado. Puede responder brevemente. Funciona entre planos.",
    damage: null, extra: null
  },
  {
    id: "sleet_storm", n: "Sleet Storm [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "150 pies", components: "V, S, M (pizca de polvo/semillas de acebo)", duration: "Conc. 1 min",
    desc: "Cilindro de 40 pies de radio y 20 de alto: terreno difícil helado, concentración: CD 10 o más difícil, visibilidad fuertemente oscurecida. Criaturas en el área al inicio: salvación DES o tumbadas.",
    damage: null, extra: null
  },
  {
    id: "slow", n: "Slow [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (melaza)", duration: "Conc. 1 min",
    desc: "Hasta 6 criaturas en cubo de 40 pies: salvación SAB o mitad de velocidad, -2 CA y DES, no puede usar reacciones, solo 1 acción o acción adicional por turno. Repite salvación al final de cada turno.",
    damage: null, extra: null
  },
  {
    id: "speak_with_dead", n: "Speak with Dead [PHB]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción", range: "10 pies", components: "V, S, M (hierbas de incienso quemadas)", duration: "10 min",
    desc: "Un cadáver con boca puede responder hasta 5 preguntas. Solo habla los idiomas que conocía en vida. Las respuestas son breves y no necesariamente verídicas.",
    damage: null, extra: null
  },
  {
    id: "speak_with_plants", n: "Speak with Plants [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción", range: "Personal (30 pies)", components: "V, S", duration: "10 min",
    desc: "Las plantas en 30 pies pueden escucharte y responderte. Las plantas entendidas que no sean mágicamente animadas pueden darte información sobre su entorno.",
    damage: null, extra: null
  },
  {
    id: "spirit_guardians", n: "Spirit Guardians [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "Personal (15 pies)", components: "V, S, M (símbolo sagrado)", duration: "Conc. 10 min",
    desc: "Espíritus te rodean en 15 pies. Criaturas hostiles en el área mueven a mitad de velocidad. Al entrar o iniciar el turno ahí: salvación SAB o 3d8 radiante/necrótico (tu elección), mitad si tienen éxito. Escala: +1d8/nivel.",
    damage: "3d8 Radiante o Necrótico (escala)", extra: null
  },
  {
    id: "spirit_shroud", n: "Spirit Shroud [TCE]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Espíritus de los muertos te rodean. Tus ataques infligen +1d8 del tipo elegido (radiante, necrótico o frío) a criaturas a 10 pies. Criaturas afectadas no pueden recuperar PG. Escala: +1d8 cada 2 niveles.",
    damage: "+1d8 (escala)", extra: null
  },
  {
    id: "stinking_cloud", n: "Stinking Cloud [PHB]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (cola de mofeta)", duration: "Conc. 1 min",
    desc: "Esfera de gas venenoso de 20 pies de radio. Fuertemente oscurecida. Criaturas en el área al inicio: salvación CON o gastan su acción sin lograr nada.",
    damage: null, extra: null
  },
  {
    id: "summon_fey", n: "Summon Fey [TCE]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (ramita de abedul)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu feérico que adopta una forma elegida. Tiene estadísticas según el nivel y te obedece. Escala: formas más poderosas a niveles superiores.",
    damage: null, extra: null
  },
  {
    id: "summon_lesser_demons", n: "Summon Lesser Demons [XGE]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (tintura de vino/sangre)", duration: "Conc. 1 hora",
    desc: "Convocas demonios aleatorios: 2 CR≤1 o 4 CR≤1/2 o 8 CR≤1/4. Atacan a la criatura más cercana. Al terminar, los demonios desaparecen. Escala: duplicas cantidad/2 niveles.",
    damage: null, extra: null
  },
  {
    id: "summon_shadowspawn", n: "Summon Shadowspawn [TCE]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (ojos de momia 300 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu de las sombras. Sus estadísticas escalan con el nivel del espacio usado. Te obedece y actúa en su iniciativa.",
    damage: null, extra: null
  },
  {
    id: "summon_undead", n: "Summon Undead [TCE]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción", range: "90 pies", components: "V, S, M (osamentas/fragmentos de tejido 300 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu no-muerto (esqueleto, zombi o sombra espiritual). Sus estadísticas escalan con el nivel. Te obedece.",
    damage: null, extra: null
  },
  {
    id: "sylines_viper", n: "Sylune's Viper [FRHoF]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción adicional", range: "Personal", components: "V, S, M (colmillo de serpiente)", duration: "Conc. 1 min",
    desc: "Convocas una serpiente espectral de energía mágica en tu mano. Puedes atacar con ella como si fuera un arma (ataque de conjuro cuerpo a cuerpo): 2d6 veneno + 1d6 necrótico. Si el objetivo falla una salvación CON, queda envenenado hasta el inicio de tu siguiente turno. Escala: +1d6 veneno/nivel.",
    damage: "2d6 Veneno + 1d6 Necrótico (escala)", extra: null
  },
  {
    id: "thunder_step", n: "Thunder Step [XGE]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V", duration: "Instantáneo",
    desc: "Te teletransportas a un espacio vacío visible a 90 pies. Un trueno audible a 300 pies. Criaturas a 10 pies del espacio de origen: 3d10 trueno (salvación CON mitad). Escala: +1d10/nivel.",
    damage: "3d10 Trueno (escala)", extra: null
  },
  {
    id: "tidal_wave", n: "Tidal Wave [XGE]",
    nivel: "Nivel 3", escuela: "Conjuración",
    casting: "1 acción", range: "120 pies", components: "V, S, M (gota de agua)", duration: "Instantáneo",
    desc: "Ola de agua de hasta 30×10×10 pies. Salvación DES o 4d8 contundente y tumbadas, mitad si tienen éxito. El área se convierte en terreno difícil de agua durante 1 minuto.",
    damage: "4d8 Contundente", extra: null
  },
  {
    id: "tiny_servant", n: "Tiny Servant [XGE]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 minuto", range: "Toque", components: "V, S", duration: "8 horas",
    desc: "Animas un objeto Diminuto: tiene CA 10, PG = 10 + nivel, velocidad 30 pies y puede atacar (1d4+1d4 por Nv.) o realizar tareas. Puede seguir órdenes simples. Escala: +2 objetos/nivel adicional.",
    damage: null, extra: null
  },
  {
    id: "tongues", n: "Tongues [PHB]",
    nivel: "Nivel 3", escuela: "Adivinación",
    casting: "1 acción", range: "Toque", components: "V, M (arcilla zigurat)", duration: "1 hora",
    desc: "La criatura tocada comprende cualquier idioma hablado y cualquier criatura que la escuche entiende lo que dice.",
    damage: null, extra: null
  },
  {
    id: "vampiric_touch", n: "Vampiric Touch [PHB]",
    nivel: "Nivel 3", escuela: "Nigromancia",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Ataque de conjuro cuerpo a cuerpo cada turno mientras dure: 3d6 necrótico y recuperas la mitad como PG. Escala: +1d6/nivel.",
    damage: "3d6 Necrótico (escala)", extra: null
  },
  {
    id: "wall_of_sand", n: "Wall of Sand [EGW]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V, S, M (puñado de arena)", duration: "Conc. 10 min",
    desc: "Muro de arena arremolinada de 30×10×10 pies. Fuertemente oscurecido. Criaturas que crucen: velocidad reducida a la mitad y 2d8 cortante.",
    damage: "2d8 Cortante al cruzar", extra: null
  },
  {
    id: "wall_of_water", n: "Wall of Water [EGW]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (gota de agua)", duration: "Conc. 10 min",
    desc: "Muro de agua de 30×10 pies (o anillo de 20 pies de radio). Fuego a través sufre desventaja en ataques. Criaturas en el muro tienen visión fuertemente oscurecida.",
    damage: null, extra: null
  },
  {
    id: "water_breathing", n: "Water Breathing [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (caña corta o paja)", duration: "24 horas",
    desc: "Hasta 10 criaturas voluntarias visibles pueden respirar bajo el agua durante la duración. Las criaturas que ya puedan respirar bajo el agua no se ven afectadas.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "water_walk", n: "Water Walk [PHB]",
    nivel: "Nivel 3", escuela: "Transmutación",
    casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (trozo de corcho)", duration: "1 hora",
    desc: "Hasta 10 criaturas voluntarias pueden andar sobre cualquier superficie líquida (agua, ácido, lodo, nieve, arenas movedizas, lava) como si fuera suelo firme. Si una criatura está sumergida cuando el conjuro se lanza, sube a la superficie.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "wind_wall", n: "Wind Wall [PHB]",
    nivel: "Nivel 3", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (pequeña abanico/pluma exótica)", duration: "Conc. 1 min",
    desc: "Muro de viento de 50×15 pies. Criaturas Pequeñas y menores empujadas 15 pies o derrumbadas. Niebla y gases disipados. Proyectiles desviados. Criaturas que crucen: salvación FUE o 3d8 contundente.",
    damage: "3d8 Contundente al cruzar", extra: null
  },
];
