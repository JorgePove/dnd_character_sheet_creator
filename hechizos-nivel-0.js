/* ══════════════════════════════════════════════════════════
   hechizos-nivel-0.js — Trucos (Nivel 0) D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · SCAG · FTD · GGtR · IDRotF · PHB24
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_0 = [
  {
    id: "acid_splash", n: "Salpicadura Ácida [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Proyectil de ácido contra 1 o 2 criaturas a 5 pies entre sí. Salvación DES o 1d6 ácido. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Ácido (escala)", extra: null
  },
  {
    id: "blade_ward", n: "Guardia de Cuchilla [PHB]",
    nivel: "Truco", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 turno",
    desc: "Resistencia al daño contundente, perforante y cortante de ataques con arma hasta el inicio de tu siguiente turno.",
    damage: null, extra: null
  },
  {
    id: "booming_blade", n: "Hoja Retumbante [SCAG/TCE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "S, M (arma de 1 po+)", duration: "1 turno",
    desc: "Ataca con arma cuerpo a cuerpo. Si impacta, el objetivo queda envuelto en energía sónica; si se mueve voluntariamente, recibe 1d8 de trueno. Escala: daño inicial +1d8 Nv.5, trueno secundario 2d8 Nv.5.",
    damage: "1d8 Trueno secundario (escala)", extra: null
  },
  {
    id: "chill_touch", n: "Toque Escalofriante [PHB]",
    nivel: "Truco", escuela: "Nigromancia",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "1 turno",
    desc: "Proyectil espectral. Ataque de conjuro a distancia: 1d8 necrótico; no puede recuperar PG hasta tu siguiente turno. Vs. no-muertos: también desventaja en ataques. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Necrótico (escala)", extra: null
  },
  {
    id: "control_flames", n: "Controlar Llamas [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "S", duration: "Instantáneo / 1 hora",
    desc: "Manipulas una llama no mágica en un cubo de 5 pies: expandirla, extinguirla, cambiar su color/forma, o duplicarla.",
    damage: null, extra: null
  },
  {
    id: "create_bonfire", n: "Crear Hoguera [XGE]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Hoguera mágica en cubo de 5 pies. Criatura que entre o empiece ahí: salvación DES o 1d8 fuego. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Fuego (escala)", extra: null
  },
  {
    id: "dancing_lights", n: "Luces Danzantes [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (fósforo/madera fosforescente)", duration: "Conc. 1 min",
    desc: "Creas hasta 4 puntos de luz que iluminan 10 pies de luz tenue. Puedes combinarlas en una figura humanoide. Las mueves 60 pies como acción adicional.",
    damage: null, extra: null
  },
  {
    id: "druidcraft", n: "Arte Druídico [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Efectos naturales menores: predecir el tiempo, hacer florecer una planta, crear un olor o sonido natural, encender/apagar una vela.",
    damage: null, extra: null
  },
  {
    id: "eldritch_blast", n: "Descarga Sobrenatural [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Haz de energía crepitante. Ataque de conjuro a distancia: 1d10 fuerza. Escala: 2 haces Nv.5, 3 Nv.11, 4 Nv.17. Cada haz apunta independientemente.",
    damage: "1d10 Fuerza/haz (escala)", extra: null
  },
  {
    id: "encode_thoughts", n: "Codificar Pensamientos [GGtR]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "Personal", components: "S", duration: "8 horas",
    desc: "Extraes un recuerdo y lo conviertes en una hebra de pensamiento tangible que puedes almacenar o compartir. Cualquier criatura que la toque puede ver el recuerdo.",
    damage: null, extra: null
  },
  {
    id: "fire_bolt", n: "Rayo de Fuego [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Proyectil de fuego. Ataque de conjuro a distancia: 1d10 fuego. Objetos inflamables se incendian. Escala: 2d10 Nv.5, 3d10 Nv.11, 4d10 Nv.17.",
    damage: "1d10 Fuego (escala)", extra: null
  },
  {
    id: "friends", n: "Amigos [PHB]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "Personal", components: "S, M (maquillaje)", duration: "Conc. 1 min",
    desc: "Ventaja en tiradas de CAR contra 1 criatura no hostil. Al terminar, la criatura sabe que fue manipulada y puede volverse hostil.",
    damage: null, extra: null
  },
  {
    id: "frostbite", n: "Quemadura de Frío [XGE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Salvación CON o 1d6 frío y desventaja en el próximo ataque con arma. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Frío (escala)", extra: null
  },
  {
    id: "green_flame_blade", n: "Hoja de Llama Verde [SCAG/TCE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "S, M (arma de 1 po+)", duration: "Instantáneo",
    desc: "Ataque con arma cuerpo a cuerpo. Si impacta, salta fuego verde a otra criatura a 5 pies: daño = mod. de lanzamiento. Escala Nv.5: +1d8 al objetivo principal y +1d8+mod al secundario.",
    damage: "Mod. de lanzamiento Fuego (escala)", extra: null
  },
  {
    id: "guidance", n: "Guía [PHB]",
    nivel: "Truco", escuela: "Adivinación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
    desc: "Tocas a una criatura voluntaria. Una vez antes de que el conjuro termine, puede añadir 1d4 a una tirada de habilidad.",
    damage: null, extra: null
  },
  {
    id: "gust", n: "Ráfaga [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
    desc: "Ráfaga de viento: empuja 5 pies a criatura Grande o menor (FUE CD), desvía objeto volador, o crea brisa pequeña.",
    damage: null, extra: null
  },
  {
    id: "hand_of_radiance", n: "Mano de Radiancia [IDRotF]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "V, S", duration: "Instantáneo",
    desc: "Criaturas a 5 pies que elijas hacen salvación CON o reciben 1d6 radiante. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Radiante (escala)", extra: null
  },
  {
    id: "infestation", n: "Infestación [XGE]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V, S, M (pulga viva)", duration: "Instantáneo",
    desc: "Enjambre de parásitos. Salvación CON o 1d6 veneno y el objetivo se mueve 5 pies en dirección aleatoria. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Veneno (escala)", extra: null
  },
  {
    id: "light", n: "Luz [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, M (luciérnaga/fósforo)", duration: "1 hora",
    desc: "Objeto que tocas emite luz brillante 20 pies, luz tenue 20 adicionales. Si criatura hostil lo lleva, salvación DES o falla.",
    damage: null, extra: null
  },
  {
    id: "lightning_lure", n: "Señuelo de Rayo [SCAG/TCE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (15 pies)", components: "V", duration: "Instantáneo",
    desc: "Látigo de energía. Criatura a 15 pies: salvación FUE o se acerca 10 pies y recibe 1d8 rayo. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Rayo (escala)", extra: null
  },
  {
    id: "mage_hand", n: "Mano de Mago [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "1 min",
    desc: "Mano espectral que manipula objetos, abre puertas/contenedores, guarda o saca objetos hasta 10 libras. No puede atacar ni activar objetos mágicos.",
    damage: null, extra: null
  },
  {
    id: "magic_stone", n: "Piedra Mágica [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S", duration: "1 min",
    desc: "Bendices hasta 3 piedras. Lanzables (20/60 pies) con SAB: 1d6+SAB contundente. Solo tú o quien reciba las piedras puede lanzarlas.",
    damage: "1d6+SAB Contundente", extra: null
  },
  {
    id: "mending", n: "Reparar [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 minuto", range: "Toque", components: "V, S, M (dos imanes)", duration: "Instantáneo",
    desc: "Repara una rotura o corte en un objeto (máx. 1 pie en cualquier dimensión). Puede reparar constructos mágicos pero no restaura la magia.",
    damage: null, extra: null
  },
  {
    id: "message", n: "Mensaje [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (hilo de cobre)", duration: "1 turno",
    desc: "Susurras un mensaje a una criatura visible. Solo ella lo oye y puede responder en susurros que solo tú oyes.",
    damage: null, extra: null
  },
  {
    id: "mind_sliver", n: "Fragmento Mental [TCE]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "1 turno",
    desc: "Salvación INT o 1d6 psíquico y resta 1d4 a su próxima salvación antes de que termines tu siguiente turno. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Psíquico (escala)", extra: null
  },
  {
    id: "minor_illusion", n: "Ilusión Menor [PHB]",
    nivel: "Truco", escuela: "Ilusión",
    casting: "1 acción", range: "30 pies", components: "S, M (trozo de lana)", duration: "1 min",
    desc: "Crea imagen (cubo de 5 pies) o sonido ilusorio. Investigación vs. tu CD para descreer.",
    damage: null, extra: null
  },
  {
    id: "mold_earth", n: "Moldear la Tierra [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "S", duration: "Instantáneo / 1 hora",
    desc: "Mueves hasta 5 pies cúbicos de tierra/arena, creas terreno difícil o dibujos, o empujas tierra a cubo adyacente.",
    damage: null, extra: null
  },
  {
    id: "on_off", n: "Encender/Apagar [PHB24]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Activas o desactivas un dispositivo que se enciende o apaga (antorcha, lámpara, chimenea, aparato mecánico simple).",
    damage: null, extra: null
  },
  {
    id: "poison_spray", n: "Rociada de Veneno [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "10 pies", components: "V, S", duration: "Instantáneo",
    desc: "Nube de gas venenoso. Salvación CON o 1d12 veneno. Escala: 2d12 Nv.5, 3d12 Nv.11, 4d12 Nv.17.",
    damage: "1d12 Veneno (escala)", extra: null
  },
  {
    id: "prestidigitation", n: "Prestidigitación [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "10 pies", components: "V, S", duration: "Hasta 1 hora",
    desc: "Efectos mágicos menores: chispa, limpiar/ensuciar, enfriar/calentar, crear sabor/olor, marca ilusoria, pequeño objeto inofensivo. Hasta 3 efectos simultáneos.",
    damage: null, extra: null
  },
  {
    id: "produce_flame", n: "Producir Llama [PHB]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "10 min",
    desc: "Llama en tu mano (ilumina 10 pies brillante, +10 tenue). Puedes lanzarla (30 pies, ataque a distancia): 1d8 fuego. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Fuego (escala)", extra: null
  },
  {
    id: "primal_savagery", n: "Salvajismo Primario [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "S", duration: "Instantáneo",
    desc: "Tus dientes o uñas se vuelven letales. Ataque de conjuro cuerpo a cuerpo: 1d10 ácido. Escala: 2d10 Nv.5, 3d10 Nv.11, 4d10 Nv.17.",
    damage: "1d10 Ácido (escala)", extra: null
  },
  {
    id: "ray_of_frost", n: "Rayo de Escarcha [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Rayo azul-blanco. Ataque de conjuro a distancia: 1d8 frío y -10 pies de velocidad hasta tu siguiente turno. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Frío (escala)", extra: null
  },
  {
    id: "resistance", n: "Resistencia [PHB]",
    nivel: "Truco", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (capa pequeña)", duration: "Conc. 1 min",
    desc: "Una criatura tocada puede añadir 1d4 a una tirada de salvación antes de que el conjuro termine.",
    damage: null, extra: null
  },
  {
    id: "sacred_flame", n: "Llama Sagrada [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Radiación flamígera. Salvación DES (sin beneficio de cobertura) o 1d8 radiante. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Radiante (escala)", extra: null
  },
  {
    id: "shape_water", n: "Dar Forma al Agua [XGE]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "S", duration: "Instantáneo / 1 hora",
    desc: "Manipulas hasta 5 pies cúbicos de agua: moverla, cambiar color/opacidad, congelarla, crear formas simples. Máx. 2 efectos simultáneos.",
    damage: null, extra: null
  },
  {
    id: "shillelagh", n: "Cachiporra Mágica [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Toque", components: "V, S, M (muérdago y trébol)", duration: "1 min",
    desc: "Infunde un bastón o cachiporra. Ataques usan SAB en lugar de FUE; el arma es mágica y hace 1d8 en lugar del daño normal.",
    damage: "1d8 Contundente (SAB)", extra: null
  },
  {
    id: "shocking_grasp", n: "Sacudida [PHB]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
    desc: "Descarga eléctrica. Ventaja si objetivo lleva armadura metálica. Ataque de conjuro cuerpo a cuerpo: 1d8 rayo y no puede usar reacciones hasta su siguiente turno. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Rayo (escala)", extra: null
  },
  {
    id: "spare_the_dying", n: "Salvar al Moribundo [PHB]",
    nivel: "Truco", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque (PHB14) / 15 pies (PHB24)", components: "V, S", duration: "Instantáneo",
    desc: "Criatura viva con 0 PG queda estabilizada. No tiene efecto en no-muertos o constructos.",
    damage: null, extra: null
  },
  {
    id: "starry_wisp", n: "Destello Estelar [PHB24]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Destello de energía estelar. Ataque de conjuro a distancia: 1d8 radiante. Si impacta, el objetivo emite luz tenue 5 pies hasta el inicio de tu siguiente turno. Escala: 2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17.",
    damage: "1d8 Radiante (escala)", extra: null
  },
  {
    id: "sword_burst", n: "Explosión de Espadas [SCAG/TCE]",
    nivel: "Truco", escuela: "Conjuración",
    casting: "1 acción", range: "Personal (5 pies)", components: "V", duration: "Instantáneo",
    desc: "Espadas espectrales en 5 pies. Salvación DES todas las criaturas cercanas o 1d6 de fuerza. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Fuerza (escala)", extra: null
  },
  {
    id: "thaumaturgy", n: "Taumaturgia [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V", duration: "Hasta 1 min",
    desc: "Efectos menores: voz retumbante, llamas cambian color, vibración en suelo, puertas se abren/cierran, ojos brillan. Hasta 3 efectos a la vez.",
    damage: null, extra: null
  },
  {
    id: "thorn_whip", n: "Látigo de Espinas [PHB]",
    nivel: "Truco", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (tallo espinoso)", duration: "Instantáneo",
    desc: "Tallo espinoso. Ataque de conjuro cuerpo a cuerpo: 1d6 perforante y si el objetivo es Grande o menor, se acerca 10 pies. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Perforante (escala)", extra: null
  },
  {
    id: "thunderclap", n: "Palmada de Trueno [XGE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "S", duration: "Instantáneo",
    desc: "Trueno audible a 100 pies. Salvación CON todas las criaturas a 5 pies o 1d6 de trueno. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Trueno (escala)", extra: null
  },
  {
    id: "toll_the_dead", n: "Doblar las Campanas [XGE]",
    nivel: "Truco", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Tañido fúnebre. Salvación SAB o 1d8 necrótico (1d12 si ya le faltan PG). Escala: 2d8/2d12 Nv.5, 3d8/3d12 Nv.11, 4d8/4d12 Nv.17.",
    damage: "1d8 o 1d12 Necrótico (escala)", extra: null
  },
  {
    id: "true_strike", n: "Golpe Certero [PHB]",
    nivel: "Truco", escuela: "Adivinación",
    casting: "1 acción", range: "Personal", components: "S", duration: "Conc. 1 turno",
    desc: "PHB14: ventaja en el próximo ataque contra un objetivo visible a 30 pies. PHB24: ataque de conjuro cuerpo a cuerpo o distancia con SAB/INT/CAR: 1d6. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 (PHB24, escala)", extra: null
  },
  {
    id: "vicious_mockery", n: "Burla Despiadada [PHB]",
    nivel: "Truco", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Insultos mágicos. Salvación SAB o 1d4 psíquico y desventaja en el próximo ataque antes de tu siguiente turno. Escala: 2d4 Nv.5, 3d4 Nv.11, 4d4 Nv.17.",
    damage: "1d4 Psíquico (escala)", extra: null
  },
  {
    id: "virtue", n: "Virtud [SCAG]",
    nivel: "Truco", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "1 turno",
    desc: "Criatura tocada gana 1d4 PG temporales que duran hasta el inicio de tu siguiente turno.",
    damage: null, extra: null
  },
  {
    id: "word_of_radiance", n: "Palabra de Radiancia [XGE]",
    nivel: "Truco", escuela: "Evocación",
    casting: "1 acción", range: "Personal (5 pies)", components: "V, M (símbolo sagrado)", duration: "Instantáneo",
    desc: "Energía radiante a criaturas que elijas a 5 pies. Salvación CON o 1d6 radiante. Escala: 2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17.",
    damage: "1d6 Radiante (escala)", extra: null
  },
];
