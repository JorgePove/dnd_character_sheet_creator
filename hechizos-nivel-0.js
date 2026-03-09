/* ══════════════════════════════════════════════════════════
   hechizos-nivel-0.js — Trucos (Nivel 0) D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · SCAG · FTD · GGtR · IDRotF · EGW · PHB24
   Orden alfabético en inglés (nombre visible)
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_0 = [
  {
    id: "acid_splash", n: "Acid Splash [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Proyectil de ácido contra 1 o 2 criaturas a 5 pies entre sí. Salvación DES o 1d6 ácido. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Ácido (escala)", extra: null
  },
  {
    id: "blade_ward", n: "Blade Ward [PHB]",
    nivel: "Truco", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 turno",
    desc: "Resistencia al daño contundente, perforante y cortante de ataques con arma hasta el inicio de tu siguiente turno.",
    damage: null, extra: null
  },
  {
    id: "booming_blade", n: "Booming Blade [SCAG/TCE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "S, M (arma de 1 po+)", duration: "1 turno",
    desc: "Ataca con arma cuerpo a cuerpo. Si impacta, el objetivo queda envuelto en energía sónica; si se mueve voluntariamente, recibe 1d8 de trueno. Escala: daño inicial +1d8 Nv.5, trueno secundario 2d8 Nv.5.",
    damage: "1d8 Trueno secundario (escala)", extra: null
  },
  {
    id: "chill_touch", n: "Chill Touch [PHB]",
    nivel: "Truco", escuela: "Nigromancia",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "1 turno",
    desc: "Proyectil espectral. Ataque de conjuro a distancia: 1d8 necrótico; no puede recuperar PG hasta tu siguiente turno. Vs. no-muertos: también desventaja en ataques. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Necrótico (escala)", extra: null
  },
  {
    id: "control_flames", n: "Control Flames [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "S", duration: "Instantáneo / 1 hora",
    desc: "Manipulas una llama no mágica en un cubo de 5 pies: expandirla, extinguirla, cambiar su color/forma, o duplicarla.",
    damage: null, extra: null
  },
  {
    id: "create_bonfire", n: "Create Bonfire [XGE]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Hoguera mágica en cubo de 5 pies. Criatura que entre o empiece ahí: salvación DES o 1d8 fuego. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Fuego (escala)", extra: null
  },
  {
    id: "dancing_lights", n: "Dancing Lights [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (fósforo/madera fosforescente)", duration: "Conc. 1 min",
    desc: "Creas hasta 4 puntos de luz que iluminan 10 pies de luz tenue. Puedes combinarlas en una figura humanoide. Las mueves 60 pies como acción adicional.",
    damage: null, extra: null
  },
  {
    id: "druidcraft", n: "Druidcraft [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Efectos naturales menores: predecir el tiempo, hacer florecer una planta, crear un olor o sonido natural, encender/apagar una vela.",
    damage: null, extra: null
  },
  {
    id: "eldritch_blast", n: "Eldritch Blast [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Haz de energía crepitante. Ataque de conjuro a distancia: 1d10 fuerza. Escala: 2 haces Nv.5, 3 Nv.11, 4 Nv.17. Cada haz apunta independientemente.",
    damage: "1d10 Fuerza/haz (escala)", extra: null
  },
  {
    id: "elementalism", n: "Elementalism [PHB24]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Exertes control sobre los elementos creando uno de los siguientes efectos: Invocar Aire (brisa en cubo de 5 pies que mueve tela, polvo, hojas, puertas); Invocar Tierra (capa de polvo en área de 5 pies cuadrados, o escribir una palabra en tierra/arena); Invocar Fuego (nube de brasas y humo de color a elección en cubo de 5 pies, puede encender velas/antorchas); Invocar Agua (niebla húmeda en cubo de 5 pies, o 1 taza de agua limpia); Esculpir Elemento (das forma rudimentaria de criatura u objeto a tierra/arena/fuego/humo/niebla/agua que quepa en cubo de 1 pie, dura 1 hora).",
    damage: null, extra: null
  },
  {
    id: "encode_thoughts", n: "Encode Thoughts [GGtR]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "Personal", components: "S", duration: "8 horas",
    desc: "Extraes un recuerdo y lo conviertes en una hebra de pensamiento tangible que puedes almacenar o compartir. Cualquier criatura que la toque puede ver el recuerdo.",
    damage: null, extra: null
  },
  {
    id: "fire_bolt", n: "Fire Bolt [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Proyectil de fuego. Ataque de conjuro a distancia: 1d10 fuego. Objetos inflamables se incendian. Escala: 2d10 Nv.5, 3d10 Nv.11, 4d10 Nv.17.",
    damage: "1d10 Fuego (escala)", extra: null
  },
  {
    id: "friends", n: "Friends [PHB]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "Personal", components: "S, M (maquillaje)", duration: "Conc. 1 min",
    desc: "Ventaja en tiradas de CAR contra 1 criatura no hostil. Al terminar, la criatura sabe que fue manipulada y puede volverse hostil.",
    damage: null, extra: null
  },
  {
    id: "frostbite", n: "Frostbite [XGE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Salvación CON o 1d6 frío y desventaja en el próximo ataque con arma. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Frío (escala)", extra: null
  },
  {
    id: "green_flame_blade", n: "Green-Flame Blade [SCAG/TCE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "S, M (arma de 1 po+)", duration: "Instantáneo",
    desc: "Ataque con arma cuerpo a cuerpo. Si impacta, salta fuego verde a otra criatura a 5 pies: daño = mod. de lanzamiento. Escala Nv.5: +1d8 al objetivo principal y +1d8+mod al secundario.",
    damage: "Mod. de lanzamiento Fuego (escala)", extra: null
  },
  {
    id: "guidance", n: "Guidance [PHB]",
    nivel: "Truco", escuela: "Adivinación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
    desc: "Tocas a una criatura voluntaria. Una vez antes de que el conjuro termine, puede añadir 1d4 a una tirada de habilidad.",
    damage: null, extra: null
  },
  {
    id: "gust", n: "Gust [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Ráfaga de viento: empuja 5 pies a criatura Grande o menor (FUE CD), desvía objeto volador, o crea brisa pequeña.",
    damage: null, extra: null
  },
  {
    id: "hand_of_radiance", n: "Hand of Radiance [IDRotF]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "V, S", duration: "Instantáneo",
    desc: "Criaturas a 5 pies que elijas hacen salvación CON o reciben 1d6 radiante. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Radiante (escala)", extra: null
  },
  {
    id: "infestation", n: "Infestation [XGE]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V, S, M (pulga viva)", duration: "Instantáneo",
    desc: "Enjambre de parásitos. Salvación CON o 1d6 veneno y el objetivo se mueve 5 pies en dirección aleatoria. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Veneno (escala)", extra: null
  },
  {
    id: "light", n: "Light [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, M (luciérnaga/fósforo)", duration: "1 hora",
    desc: "Objeto que tocas emite luz brillante 20 pies, luz tenue 20 adicionales. Si criatura hostil lo lleva, salvación DES o falla.",
    damage: null, extra: null
  },
  {
    id: "lightning_lure", n: "Lightning Lure [SCAG/TCE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (15 pies)", components: "V", duration: "Instantáneo",
    desc: "Látigo de rayos que atrae a una criatura a 15 pies hacia ti (FUE CD). Si llega a 5 pies, recibe 1d8 de rayo. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Rayo (escala)", extra: null
  },
  {
    id: "mage_hand", n: "Mage Hand [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "1 min",
    desc: "Mano espectral flotante en un punto visible a 30 pies. Puede manipular objetos, abrir puertas no cerradas con llave, guardar o recoger objetos de contenedores o verter su contenido. No puede atacar, activar objetos mágicos ni cargar más de 10 libras.",
    damage: null, extra: null
  },
  {
    id: "magic_stone", n: "Magic Stone [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S", duration: "1 min",
    desc: "Hasta 3 piedras pequeñas se vuelven mágicas. Puedes lanzarlas (30 pies, ataque a distancia con SAB) o con honda: 1d6+SAB contundente cada una. Pueden usarlas otras criaturas. Pierden la magia al golpear o al terminar la duración.",
    damage: "1d6+SAB Contundente", extra: null
  },
  {
    id: "mending", n: "Mending [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 minuto", range: "Toque", components: "V, S, M (dos imanes/dos astillas de madera)", duration: "Instantáneo",
    desc: "Repara un objeto roto o desgarrado con una sola rotura o desgarro. La reparación es invisible. Puede usarse para reparar un golem de construcción u otro constructo si tiene la etiqueta de objeto mágico.",
    damage: null, extra: null
  },
  {
    id: "message", n: "Message [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (un trozo de alambre de cobre)", duration: "1 turno",
    desc: "Susurras un mensaje a una criatura visible a 120 pies. Solo esa criatura escucha el mensaje y puede responderte en un susurro que solo tú oyes. El mensaje puede atravesar obstáculos sólidos si conoces la ubicación del objetivo.",
    damage: null, extra: null
  },
  {
    id: "mind_sliver", n: "Mind Sliver [TCE/PHB24]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "1 turno",
    desc: "Clava una astilla de energía psíquica en la mente de una criatura visible. Salvación INT o 1d6 psíquico y resta 1d4 al resultado de la siguiente salvación que haga antes del final de tu próximo turno. Solo componente verbal. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Psíquico + penalización 1d4 a salvación (escala)", extra: null
  },
  {
    id: "minor_illusion", n: "Minor Illusion [PHB]",
    nivel: "Truco", escuela: "Ilusión",
    casting: "1 acción", range: "30 pies", components: "S, M (trozo de lana)", duration: "1 min",
    desc: "Creas un sonido o imagen ilusoria (no ambos) en un punto a 30 pies. Sonido: volumen de susurro a grito. Imagen: no mayor que un cubo de 5 pies, sin movimiento ni sonido. Examen de Investigación CD 14 para detectarla.",
    damage: null, extra: null
  },
  {
    id: "mold_earth", n: "Mold Earth [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "S", duration: "Instantáneo / 1 hora",
    desc: "Manipulas hasta 5 pies cúbicos de tierra o piedra sin trabajar: excavarla y moverla, crear o rellenar trincheras de 5 pies, cambiar su color/textura (hasta 2 efectos simultáneos), o hacer que suelo difícil en un área de 5 pies cuadrados sea normal temporalmente.",
    damage: null, extra: null
  },
  {
    id: "poison_spray", n: "Poison Spray [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "10 pies", components: "V, S", duration: "Instantáneo",
    desc: "Proyectas un chorro de gas tóxico. Salvación CON o 1d12 veneno. Escala: 2d12 Nv.5, 3d12 Nv.11, 4d12 Nv.17.",
    damage: "1d12 Veneno (escala)", extra: null
  },
  {
    id: "prestidigitation", n: "Prestidigitation [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "10 pies", components: "V, S", duration: "Hasta 1 hora",
    desc: "Efectos mágicos menores: chispa, limpiar/ensuciar, enfriar/calentar, crear sabor/olor, marca ilusoria, pequeño objeto inofensivo. Hasta 3 efectos simultáneos.",
    damage: null, extra: null
  },
  {
    id: "produce_flame", n: "Produce Flame [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "10 min",
    desc: "Llama en tu mano (ilumina 10 pies brillante, +10 tenue). Puedes lanzarla (30 pies, ataque a distancia): 1d8 fuego. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Fuego (escala)", extra: null
  },
  {
    id: "primal_savagery", n: "Primal Savagery [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "S", duration: "Instantáneo",
    desc: "Tus dientes o uñas se vuelven letales. Ataque de conjuro cuerpo a cuerpo: 1d10 ácido. Escala: 2d10 Nv.5, 3d10 Nv.11, 4d10 Nv.17.",
    damage: "1d10 Ácido (escala)", extra: null
  },
  {
    id: "ray_of_frost", n: "Ray of Frost [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Rayo azul-blanco. Ataque de conjuro a distancia: 1d8 frío y -10 pies de velocidad hasta tu siguiente turno. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Frío (escala)", extra: null
  },
  {
    id: "resistance", n: "Resistance [PHB]",
    nivel: "Truco", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (capa pequeña)", duration: "Conc. 1 min",
    desc: "Una criatura tocada puede añadir 1d4 a una tirada de salvación antes de que el conjuro termine.",
    damage: null, extra: null
  },
  {
    id: "sacred_flame", n: "Sacred Flame [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Radiación flamígera. Salvación DES (sin beneficio de cobertura) o 1d8 radiante. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Radiante (escala)", extra: null
  },
  {
    id: "sapping_sting", n: "Sapping Sting [EGW]",
    nivel: "Truco", escuela: "Nigromancia",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Minas la vitalidad de una criatura visible. Salvación CON o 1d4 necrótico y cae Tumbada. Exclusivo de la lista de mago (Dunamagia). Escala: 2d4 Nv.5, 3d4 Nv.11, 4d4 Nv.17.",
    damage: "1d4 Necrótico + Tumbado (escala)", extra: null
  },
  {
    id: "shape_water", n: "Shape Water [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "S", duration: "Instantáneo / 1 hora",
    desc: "Manipulas hasta 5 pies cúbicos de agua: moverla, cambiar color/opacidad, congelarla, crear formas simples. Máx. 2 efectos simultáneos.",
    damage: null, extra: null
  },
  {
    id: "shillelagh", n: "Shillelagh [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S, M (muérdago y trébol)", duration: "1 min",
    desc: "Infunde un bastón o cachiporra. Ataques usan SAB en lugar de FUE; el arma es mágica y hace 1d8 en lugar del daño normal.",
    damage: "1d8 Contundente (SAB)", extra: null
  },
  {
    id: "shocking_grasp", n: "Shocking Grasp [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Descarga eléctrica. Ventaja si objetivo lleva armadura metálica. Ataque de conjuro cuerpo a cuerpo: 1d8 rayo y no puede usar reacciones hasta su siguiente turno. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Rayo (escala)", extra: null
  },
  {
    id: "spare_the_dying", n: "Spare the Dying [PHB]",
    nivel: "Truco", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque (PHB14) / 15 pies (PHB24)", components: "V, S", duration: "Instantáneo",
    desc: "Criatura viva con 0 PG queda estabilizada. No tiene efecto en no-muertos o constructos.",
    damage: null, extra: null
  },
  {
    id: "starry_wisp", n: "Starry Wisp [PHB24]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Destello de energía estelar. Ataque de conjuro a distancia: 1d8 radiante. Si impacta, el objetivo emite luz tenue 5 pies hasta el inicio de tu siguiente turno. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Radiante (escala)", extra: null
  },
  {
    id: "sword_burst", n: "Sword Burst [SCAG/TCE]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "Personal (5 pies)", components: "V", duration: "Instantáneo",
    desc: "Espadas espectrales en 5 pies. Salvación DES todas las criaturas cercanas o 1d6 de fuerza. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Fuerza (escala)", extra: null
  },
  {
    id: "thaumaturgy", n: "Thaumaturgy [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Hasta 1 min",
    desc: "Efectos menores: voz retumbante, llamas cambian color, vibración en suelo, puertas se abren/cierran, ojos brillan. Hasta 3 efectos a la vez.",
    damage: null, extra: null
  },
  {
    id: "thorn_whip", n: "Thorn Whip [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (tallo espinoso)", duration: "Instantáneo",
    desc: "Tallo espinoso. Ataque de conjuro cuerpo a cuerpo: 1d6 perforante y si el objetivo es Grande o menor, se acerca 10 pies. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Perforante (escala)", extra: null
  },
  {
    id: "thunderclap", n: "Thunderclap [XGE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "S", duration: "Instantáneo",
    desc: "Trueno audible a 100 pies. Salvación CON todas las criaturas a 5 pies o 1d6 de trueno. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Trueno (escala)", extra: null
  },
  {
    id: "toll_the_dead", n: "Toll the Dead [XGE]",
    nivel: "Truco", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Tañido fúnebre. Salvación SAB o 1d8 necrótico (1d12 si ya le faltan PG). Escala: 2d8/2d12 Nv.5, 3d8/3d12 Nv.11, 4d8/4d12 Nv.17.",
    damage: "1d8 o 1d12 Necrótico (escala)", extra: null
  },
  {
    id: "true_strike", n: "True Strike [PHB]",
    nivel: "Truco", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "S", duration: "Conc. 1 turno",
    desc: "PHB14: ventaja en el próximo ataque contra un objetivo visible a 30 pies. PHB24: ataque de conjuro cuerpo a cuerpo o distancia con SAB/INT/CAR: 1d6. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 (PHB24, escala)", extra: null
  },
  {
    id: "vicious_mockery", n: "Vicious Mockery [PHB]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Insultos mágicos. Salvación SAB o 1d4 psíquico y desventaja en el próximo ataque antes de tu siguiente turno. Escala: 2d4 Nv.5, 3d4 Nv.11, 4d4 Nv.17.",
    damage: "1d4 Psíquico (escala)", extra: null
  },
  {
    id: "virtue", n: "Virtue [SCAG]",
    nivel: "Truco", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "1 turno",
    desc: "Criatura tocada gana 1d4 PG temporales que duran hasta el inicio de tu siguiente turno.",
    damage: null, extra: null
  },
  {
    id: "word_of_radiance", n: "Word of Radiance [XGE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "V, M (símbolo sagrado)", duration: "Instantáneo",
    desc: "Energía radiante a criaturas que elijas a 5 pies. Salvación CON o 1d6 radiante. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Radiante (escala)", extra: null
  },
];
