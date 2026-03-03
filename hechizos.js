/* ═══════════════════════════════════════════════════════
   hechizos.js — Base de datos de hechizos D&D 5e
   Fuentes: PHB, XGE, TCE, SCAG y otras oficiales
═══════════════════════════════════════════════════════ */

const DND_SPELLS = {
  0:   [
    {
      id: "firebolt", n: "Rayo de Fuego",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
      desc: "Lanzas una chispa de fuego hacia una criatura u objeto. Tirada de ataque a distancia. En impacto: 1d10 fuego. Objetos inflamables prenden.",
      damage: "1d10 Fuego (2d10 Nv.5, 3d10 Nv.11, 4d10 Nv.17)", extra: null
    },
    {
      id: "prestidigitation", n: "Prestidigitación",
      nivel: "Truco", escuela: "Transmutación",
      casting: "1 acción", range: "10 pies", components: "V, S", duration: "Hasta 1 hora",
      desc: "Trucos mágicos menores: efectos sensoriales, encender/apagar llamas, limpiar objetos, enfriar/calentar, crear marcas o imágenes ilusorias breves.",
      damage: null, extra: null
    },
    {
      id: "mage_hand", n: "Mano de Mago",
      nivel: "Truco", escuela: "Conjuración",
      casting: "1 acción", range: "30 pies", components: "V, S", duration: "1 min",
      desc: "Mano espectral flotante que puede manipular objetos, abrir puertas o recipientes, y recoger cosas. Carga máx 10 lb.",
      damage: null, extra: null
    },
    {
      id: "acid_splash", n: "Salpicadura Ácida [PHB]",
      nivel: "Truco", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Burbuja de ácido hacia 1 criatura o 2 a ≤5 pies. Salvación DES o 1d6 ácido.",
      damage: "1d6 Ácido (2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17)", extra: null
    },
    {
      id: "blade_ward", n: "Guardia de Cuchilla [PHB]",
      nivel: "Truco", escuela: "Abjuración",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "1 turno",
      desc: "Resistencia a daño contundente, perforante y cortante de armas hasta tu siguiente turno.",
      damage: null, extra: null
    },
    {
      id: "booming_blade", n: "Hoja Retumbante [SCAG/TCE]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "Personal (5p)", components: "S, M (arma cuerpo a cuerpo)", duration: "1 turno",
      desc: "Ataque con arma cuerpo a cuerpo; si el objetivo se mueve voluntariamente antes de tu siguiente turno recibe 1d8 trueno adicional.",
      damage: "Arma + 1d8 Trueno si se mueve (escala Nv.5/11/17)", extra: null
    },
    {
      id: "chill_touch", n: "Toque Escalofriante [PHB]",
      nivel: "Truco", escuela: "Nigromancia",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "1 turno",
      desc: "Ataque a distancia con conjuro. Impacto: 1d8 necrótico y el objetivo no puede recuperar PG hasta tu siguiente turno.",
      damage: "1d8 Necrótico (2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17)", extra: null
    },
    {
      id: "create_bonfire", n: "Crear Hoguera [XGE]",
      nivel: "Truco", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Hoguera en espacio de 5 pies. Salvación DES al entrar o empezar ahí o recibe 1d8 fuego.",
      damage: "1d8 Fuego (2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17)", extra: null
    },
    {
      id: "dancing_lights", n: "Luces Danzantes [PHB]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (fósforo)", duration: "Conc. 1 min",
      desc: "Hasta 4 luces flotantes que emiten luz tenue 10 pies. Puedes moverlas 60 pies/turno como acción adicional.",
      damage: null, extra: null
    },
    {
      id: "druidcraft", n: "Arte Druídico [PHB]",
      nivel: "Truco", escuela: "Transmutación",
      casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
      desc: "Efectos menores de la naturaleza: predecir clima, florecer plantas, crear aroma, encender bayas.",
      damage: null, extra: null
    },
    {
      id: "eldritch_blast", n: "Descarga Sobrenatural [PHB]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
      desc: "Rayo de energía crepitante. Ataque a distancia con conjuro; 1d10 fuerza. Más rayos al subir de nivel.",
      damage: "1d10 Fuerza/rayo (2 Nv.5, 3 Nv.11, 4 Nv.17)", extra: null
    },
    {
      id: "frostbite", n: "Quemadura de Frío [XGE]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Salvación CON o 1d6 frío y desventaja en la próxima tirada de ataque del objetivo.",
      damage: "1d6 Frío (2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17)", extra: null
    },
    {
      id: "green_flame_blade", n: "Hoja de Llama Verde [SCAG/TCE]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "Personal (5p)", components: "S, M (arma)", duration: "Instantáneo",
      desc: "Ataque con arma cuerpo a cuerpo. Llamas verdes saltan a otro objetivo a 5 pies infligiendo daño extra al subir nivel.",
      damage: "Arma + fuego extra adyacente (escala Nv.5/11/17)", extra: null
    },
    {
      id: "guidance", n: "Guía [PHB]",
      nivel: "Truco", escuela: "Adivinación",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
      desc: "Criatura tocada puede añadir 1d4 a una prueba de característica antes de que el conjuro acabe.",
      damage: "+1d4 a una prueba", extra: null
    },
    {
      id: "light", n: "Luz [PHB]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "Toque", components: "V, M (luciérnaga)", duration: "1 hora",
      desc: "Objeto emite luz brillante 20 pies y tenue 20 pies más. Si lo tiene una criatura hostil: salvación DES o afecta el objeto.",
      damage: null, extra: null
    },
    {
      id: "mending", n: "Reparar [PHB]",
      nivel: "Truco", escuela: "Transmutación",
      casting: "1 minuto", range: "Toque", components: "V, S, M (2 imanes)", duration: "Instantáneo",
      desc: "Repara una rotura de hasta 1 pie en un objeto no mágico. Invisible tras la reparación.",
      damage: null, extra: null
    },
    {
      id: "message", n: "Mensaje [PHB]",
      nivel: "Truco", escuela: "Transmutación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (alambre de cobre)", duration: "1 turno",
      desc: "Susurras un mensaje a una criatura a 120 pies; solo ella lo oye y puede responderte susurrando.",
      damage: null, extra: null
    },
    {
      id: "mind_sliver", n: "Fragmento Mental [TCE]",
      nivel: "Truco", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V", duration: "1 turno",
      desc: "Salvación INT o 1d6 psíquico y resta 1d4 de su próxima tirada de salvación.",
      damage: "1d6 Psíquico (2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17)", extra: null
    },
    {
      id: "minor_illusion", n: "Ilusión Menor [PHB]",
      nivel: "Truco", escuela: "Ilusión",
      casting: "1 acción", range: "30 pies", components: "S, M (piel de carnero)", duration: "1 min",
      desc: "Crea un sonido o imagen estática de un objeto (máx 5 pies cúbicos). Interactuar permite salvación INT para detectarlo.",
      damage: null, extra: null
    },
    {
      id: "poison_spray", n: "Rociada de Veneno [PHB]",
      nivel: "Truco", escuela: "Conjuración",
      casting: "1 acción", range: "10 pies", components: "V, S", duration: "Instantáneo",
      desc: "Chorro de gas nocivo. Salvación CON o 1d12 veneno.",
      damage: "1d12 Veneno (2d12 Nv.5, 3d12 Nv.11, 4d12 Nv.17)", extra: null
    },
    {
      id: "ray_of_frost", n: "Rayo de Escarcha [PHB]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Rayo azulado-blanco. Ataque a distancia: 1d8 frío y velocidad -10 pies hasta tu siguiente turno.",
      damage: "1d8 Frío (2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17)", extra: null
    },
    {
      id: "resistance", n: "Resistencia [PHB]",
      nivel: "Truco", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (capa de malla)", duration: "Conc. 1 min",
      desc: "La criatura tocada puede sumar 1d4 a una tirada de salvación antes de que el conjuro acabe.",
      damage: "+1d4 a una salvación", extra: null
    },
    {
      id: "sacred_flame", n: "Llama Sagrada [PHB]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Salvación DES (sin beneficio de cobertura); en fallo: 1d8 radiante.",
      damage: "1d8 Radiante (2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17)", extra: null
    },
    {
      id: "shillelagh", n: "Cachiporra Mágica [PHB]",
      nivel: "Truco", escuela: "Transmutación",
      casting: "1 acción adicional", range: "Personal", components: "V, S, M (muérdago, garrote)", duration: "1 min",
      desc: "Arma de madera usa MOD SAB en lugar de FUE y dado de daño d8. Cuenta como mágica.",
      damage: "1d8 Contundente + MOD SAB", extra: null
    },
    {
      id: "shocking_grasp", n: "Sacudida [PHB]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
      desc: "Ventaja si el objetivo lleva armadura metálica. En impacto: 1d8 rayo y no puede usar reacciones hasta su siguiente turno.",
      damage: "1d8 Rayo (2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17)", extra: null
    },
    {
      id: "spare_the_dying", n: "Salvar al Moribundo [PHB]",
      nivel: "Truco", escuela: "Nigromancia",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
      desc: "Criatura viva con 0 PG queda estabilizada.",
      damage: null, extra: null
    },
    {
      id: "thaumaturgy", n: "Taumaturgia [PHB]",
      nivel: "Truco", escuela: "Transmutación",
      casting: "1 acción", range: "30 pies", components: "V", duration: "Hasta 1 min",
      desc: "Señal de poder divino: truenos, temblar el suelo, cambiar el color de llamas, abrir puertas, ojos brillantes.",
      damage: null, extra: null
    },
    {
      id: "thorn_whip", n: "Látigo de Espinas [PHB]",
      nivel: "Truco", escuela: "Transmutación",
      casting: "1 acción", range: "30 pies", components: "V, S, M (tallo con espinas)", duration: "Instantáneo",
      desc: "Ataque cuerpo a cuerpo (alcance 30 pies): 1d6 perforante. En impacto: arrastra 10 pies hacia ti a criatura Grande o menor.",
      damage: "1d6 Perforante (2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17)", extra: null
    },
    {
      id: "toll_the_dead", n: "Doblar las Campanas [XGE]",
      nivel: "Truco", escuela: "Nigromancia",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Salvación SAB: 1d8 necrótico. Si el objetivo ya tiene PG perdidos: 1d12 en su lugar.",
      damage: "1d8/1d12 Necrótico (escala Nv.5/11/17)", extra: null
    },
    {
      id: "true_strike", n: "Golpe Certero [PHB]",
      nivel: "Truco", escuela: "Adivinación",
      casting: "1 acción", range: "30 pies", components: "S", duration: "Conc. 1 turno",
      desc: "Ves las defensas del objetivo; tu primer ataque contra él en tu siguiente turno tiene ventaja.",
      damage: null, extra: null
    },
    {
      id: "vicious_mockery", n: "Burla Despiadada [PHB]",
      nivel: "Truco", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
      desc: "Insultos mágicos. Salvación SAB; fallo: 1d4 psíquico y desventaja en su próxima tirada de ataque.",
      damage: "1d4 Psíquico (2d4 Nv.5, 3d4 Nv.11, 4d4 Nv.17)", extra: null
    },
    {
      id: "word_of_radiance", n: "Palabra de Radiancia [XGE]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "Personal (5p)", components: "V, M (símbolo sagrado)", duration: "Instantáneo",
      desc: "Criaturas elegidas a 5 pies: salvación CON o 1d6 radiante.",
      damage: "1d6 Radiante (2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17)", extra: null
    }
,
    {
      id: "infestation", n: "Infestación [XGE]",
      nivel: "Truco", escuela: "Conjuración",
      casting: "1 acción", range: "30 pies", components: "V, S, M (insecto vivo)", duration: "Instantáneo",
      desc: "Lanzas un insecto sobre una criatura. Salvación CON o 1d6 veneno y se mueve 5 pies en dirección aleatoria.",
      damage: "1d6 Veneno (2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17)", extra: null
    },
    {
      id: "lightning_lure", n: "Señuelo de Rayo [SCAG/TCE]",
      nivel: "Truco", escuela: "Evocación",
      casting: "1 acción", range: "Personal (15p)", components: "V", duration: "Instantáneo",
      desc: "Látigo de energía arrastra criatura a ≤15 pies hacia ti (salvación FUE). Si termina a 5 pies: 1d8 rayo.",
      damage: "1d8 Rayo (2d8 Nv.5, 3d8 Nv.11, 4d8 Nv.17)", extra: null
    },
    {
      id: "sword_burst", n: "Explosión de Espadas [SCAG/TCE]",
      nivel: "Truco", escuela: "Conjuración",
      casting: "1 acción", range: "Personal (5p)", components: "V", duration: "Instantáneo",
      desc: "Espadas espectrales giran 5 pies a tu alrededor. Salvación DES o 1d6 fuerza.",
      damage: "1d6 Fuerza (2d6 Nv.5, 3d6 Nv.11, 4d6 Nv.17)", extra: null
    },
  ],
  1:   [
    {
      id: "magic_missile", n: "Misil Mágico",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
      desc: "3 dardos de fuerza con impacto garantizado. Cada uno inflige 1d4+1 de fuerza. Puedes dirigirlos libremente.",
      damage: "3 × (1d4+1) Fuerza (escala: +1 dardo/nivel)", extra: null
    },
    {
      id: "burning_hands", n: "Manos Ardientes",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "Personal (cono 15p)", components: "V, S", duration: "Instantáneo",
      desc: "Cono de 15 pies. Salvación DES; fallo: 3d6 fuego; éxito: mitad.",
      damage: "3d6 Fuego (escala: +1d6/nivel)", extra: null
    },
    {
      id: "cure_wounds", n: "Curar Heridas",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
      desc: "Criatura tocada recupera 1d8 + MOD lanzador PG.",
      damage: "1d8 + MOD lanzador (escala: +1d8/nivel)", extra: null
    },
    {
      id: "absorb_elements", n: "Absorber Elementos [XGE]",
      nivel: "Nivel 1", escuela: "Abjuración",
      casting: "1 reacción", range: "Personal", components: "S", duration: "1 turno",
      desc: "Reacción al recibir daño elemental: resistencia a ese tipo hasta tu siguiente turno. Tu próximo ataque cuerpo a cuerpo añade 1d6 extra de ese tipo.",
      damage: "1d6 elemental extra (escala: +1d6/nivel)", extra: null
    },
    {
      id: "arms_of_hadar", n: "Brazos de Hadar [PHB]",
      nivel: "Nivel 1", escuela: "Conjuración",
      casting: "1 acción", range: "Personal (10p)", components: "V, S", duration: "Instantáneo",
      desc: "Tentáculos de oscuridad en 10 pies. Salvación FUE o 2d6 necrótico y sin reacciones hasta su siguiente turno.",
      damage: "2d6 Necrótico (escala: +1d6/nivel)", extra: null
    },
    {
      id: "bane", n: "Perdición [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción", range: "30 pies", components: "V, S, M (gota de sangre)", duration: "Conc. 1 min",
      desc: "Hasta 3 criaturas (salvación CAR): restan 1d4 a ataques y salvaciones durante 1 min.",
      damage: "-1d4 ataques y salvaciones (escala: +1 criatura/nivel)", extra: null
    },
    {
      id: "bless", n: "Bendición [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción adicional", range: "30 pies", components: "V, S, M (agua bendita)", duration: "Conc. 1 min",
      desc: "Hasta 3 criaturas elegidas: suman 1d4 a ataques y salvaciones durante 1 min.",
      damage: "+1d4 ataques y salvaciones (escala: +1 criatura/nivel)", extra: null
    },
    {
      id: "catapult", n: "Catapulta [XGE]",
      nivel: "Nivel 1", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "S", duration: "Instantáneo",
      desc: "Lanzas un objeto de 1-5 lb hasta 90 pies en línea recta. Ataque a distancia: 3d8 contundente al objeto y al objetivo.",
      damage: "3d8 Contundente (escala: +1d8/nivel)", extra: null
    },
    {
      id: "charm_person", n: "Encantar Persona [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción", range: "30 pies", components: "V, S", duration: "1 hora",
      desc: "Humanoide: salvación SAB o encantado 1 hora. Te considera amigo. Al terminar sabe que fue encantado.",
      damage: null, extra: "Escala: +1 criatura/nivel extra."
    },
    {
      id: "command", n: "Orden [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V", duration: "1 turno",
      desc: "Palabra de orden (acercarse, huir, caer, soltar, detenerse). Salvación SAB o la obedece 1 turno.",
      damage: null, extra: null
    },
    {
      id: "comprehend_languages", n: "Comprender Idiomas [PHB]",
      nivel: "Nivel 1", escuela: "Adivinación",
      casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (hollín y sal)", duration: "1 hora",
      desc: "Entiendes cualquier idioma hablado o escrito durante 1 hora.",
      damage: null, extra: null
    },
    {
      id: "detect_magic", n: "Detectar Magia [PHB]",
      nivel: "Nivel 1", escuela: "Adivinación",
      casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "Conc. 10 min",
      desc: "Percibes auras mágicas en 30 pies. Puedes ver la escuela de los objetos o criaturas mágicas.",
      damage: null, extra: null
    },
    {
      id: "disguise_self", n: "Disfrazarse [PHB]",
      nivel: "Nivel 1", escuela: "Ilusión",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "1 hora",
      desc: "Cambias tu apariencia: ropa, armadura, pelo, cara, hasta 1 pie de altura diferente. Examen táctil revela la ilusión.",
      damage: null, extra: null
    },
    {
      id: "divine_favor", n: "Favor Divino [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
      desc: "Ataques con arma infligen +1d4 de daño radiante adicional.",
      damage: "+1d4 Radiante/ataque", extra: null
    },
    {
      id: "earth_tremor", n: "Temblor de Tierra [XGE]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "Personal (10p)", components: "V, S", duration: "Instantáneo",
      desc: "Criaturas en 10 pies: salvación DES o 1d6 contundente y Derribadas (en suelo de piedra/tierra).",
      damage: "1d6 Contundente (escala: +1d6/nivel)", extra: null
    },
    {
      id: "entangle", n: "Enredar [PHB]",
      nivel: "Nivel 1", escuela: "Conjuración",
      casting: "1 acción", range: "90 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Plantas en cuadrado de 20 pies. Salvación FUE al inicio de turno o quedan Restringidas.",
      damage: null, extra: null
    },
    {
      id: "faerie_fire", n: "Fuego de las Hadas [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V", duration: "Conc. 1 min",
      desc: "Cubo de 20 pies: criaturas delineadas (salvación DES). Ataques contra ellas con ventaja; no pueden ser invisibles.",
      damage: null, extra: null
    },
    {
      id: "false_life", n: "Vida Falsa [PHB]",
      nivel: "Nivel 1", escuela: "Nigromancia",
      casting: "1 acción", range: "Personal", components: "V, S, M (alcohol)", duration: "1 hora",
      desc: "Ganas 1d4+4 PG temporales.",
      damage: "1d4+4 PG temporales (escala: +5/nivel)", extra: null
    },
    {
      id: "feather_fall", n: "Caída de Pluma [PHB]",
      nivel: "Nivel 1", escuela: "Transmutación",
      casting: "1 reacción", range: "60 pies", components: "V, M (pluma)", duration: "1 min",
      desc: "Hasta 5 criaturas en caída descienden a 60 pies/turno y no reciben daño por caída.",
      damage: null, extra: null
    },
    {
      id: "goodberry", n: "Baya Curativa [PHB]",
      nivel: "Nivel 1", escuela: "Transmutación",
      casting: "1 acción", range: "Toque", components: "V, S, M (muérdago)", duration: "Instantáneo",
      desc: "Creas hasta 10 bayas mágicas. Cada una restaura 1 PG y proporciona nutrición suficiente para un día.",
      damage: "1 PG por baya (hasta 10 bayas)", extra: null
    },
    {
      id: "grease", n: "Grasa [PHB]",
      nivel: "Nivel 1", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S, M (mantequilla)", duration: "1 min",
      desc: "Cuadrado de 10 pies resbaladizo. Salvación DES al entrar o moverse por él o caen Derribados.",
      damage: null, extra: null
    },
    {
      id: "guiding_bolt", n: "Rayo Guía [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "1 turno",
      desc: "Ataque a distancia: 4d6 radiante. El objetivo emite luz tenue y el siguiente ataque contra él tiene ventaja.",
      damage: "4d6 Radiante (escala: +1d6/nivel)", extra: null
    },
    {
      id: "healing_word", n: "Palabra Curativa [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción adicional", range: "60 pies", components: "V", duration: "Instantáneo",
      desc: "Criatura visible recupera 1d4 + MOD lanzador PG.",
      damage: "1d4 + MOD lanzador (escala: +1d4/nivel)", extra: null
    },
    {
      id: "hellish_rebuke", n: "Represalia Infernal [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 reacción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Reacción al ser dañado: atacante rodeado de llamas. Salvación DES; fallo: 2d10 fuego; éxito: mitad.",
      damage: "2d10 Fuego (escala: +1d10/nivel)", extra: null
    },
    {
      id: "heroism", n: "Heroísmo [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
      desc: "Inmune a Asustado; gana PG temporales = MOD CAR al inicio de cada turno.",
      damage: "PG temp = MOD CAR/turno (escala: +1 criatura/nivel)", extra: null
    },
    {
      id: "hex", n: "Maldición [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción adicional", range: "90 pies", components: "V, S, M (ojo de tritón)", duration: "Conc. 1 hora",
      desc: "+1d6 necrótico al golpear al objetivo maldito. Desventaja en pruebas de la característica elegida.",
      damage: "+1d6 Necrótico/ataque (escala duración: Nv.3→8h, Nv.5→24h)", extra: null
    },
    {
      id: "hunters_mark", n: "Marca del Cazador [PHB]",
      nivel: "Nivel 1", escuela: "Adivinación",
      casting: "1 acción adicional", range: "90 pies", components: "V", duration: "Conc. 1 hora",
      desc: "+1d6 al golpear a la presa marcada. Ventaja en PER/SUP para localizarla. Transferible si cae.",
      damage: "+1d6 del tipo del arma (escala duración)", extra: null
    },
    {
      id: "ice_knife", n: "Cuchillo de Hielo [XGE]",
      nivel: "Nivel 1", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "S, M (hielo)", duration: "Instantáneo",
      desc: "Ataque a distancia: 1d10 perforante. Explota en área de 5 pies: salvación DES o 2d6 frío.",
      damage: "1d10 Perforante + 2d6 Frío área (escala: +1d6/nivel)", extra: null
    },
    {
      id: "inflict_wounds", n: "Causar Heridas [PHB]",
      nivel: "Nivel 1", escuela: "Nigromancia",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
      desc: "Ataque cuerpo a cuerpo con conjuro: 3d10 necrótico.",
      damage: "3d10 Necrótico (escala: +1d10/nivel)", extra: null
    },
    {
      id: "mage_armor", n: "Armadura de Mago [PHB]",
      nivel: "Nivel 1", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (cuero de murciélago)", duration: "8 horas",
      desc: "CA de criatura sin armadura = 13 + MOD DES durante 8 horas.",
      damage: "CA 13 + MOD DES", extra: null
    },
    {
      id: "protection_from_evil", n: "Protección contra el Mal [PHB]",
      nivel: "Nivel 1", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (agua bendita)", duration: "Conc. 10 min",
      desc: "Protección contra aberraciones, celestiales, elementales, hadas, infernales y no-muertos: desventaja en ataques contra el objetivo, inmune a encanto/posesión de esos tipos.",
      damage: null, extra: null
    },
    {
      id: "sanctuary", n: "Santuario [PHB]",
      nivel: "Nivel 1", escuela: "Abjuración",
      casting: "1 acción adicional", range: "30 pies", components: "V, S, M (espejo de plata)", duration: "1 min",
      desc: "Criaturas que ataquen al objetivo protegido: salvación SAB o eligen otro. Termina si el protegido ataca.",
      damage: null, extra: null
    },
    {
      id: "searing_smite", n: "Golpe Abrasador [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
      desc: "Próximo ataque con arma: +1d6 fuego; el objetivo prende (1d6 fuego/turno, salvación CON para apagar).",
      damage: "1d6 Fuego + 1d6/turno (escala: +1d6/nivel)", extra: null
    },
    {
      id: "shield", n: "Escudo [PHB]",
      nivel: "Nivel 1", escuela: "Abjuración",
      casting: "1 reacción", range: "Personal", components: "V, S", duration: "1 turno",
      desc: "+5 CA hasta tu siguiente turno incluyendo el ataque desencadenante. Bloquea también Misil Mágico.",
      damage: "+5 CA", extra: null
    },
    {
      id: "shield_of_faith", n: "Escudo de la Fe [PHB]",
      nivel: "Nivel 1", escuela: "Abjuración",
      casting: "1 acción adicional", range: "60 pies", components: "V, S, M (texto sagrado)", duration: "Conc. 10 min",
      desc: "+2 CA a criatura visible durante 10 minutos.",
      damage: "+2 CA", extra: null
    },
    {
      id: "sleep", n: "Dormir [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción", range: "90 pies", components: "V, S, M (arena, pétalos)", duration: "1 min",
      desc: "Duerme criaturas sumando hasta 5d8 PG (las de menos PG primero). Herirlas las despierta.",
      damage: "Duerme criaturas hasta 5d8 PG (escala: +2d8/nivel)", extra: null
    },
    {
      id: "speak_with_animals", n: "Hablar con Animales [PHB]",
      nivel: "Nivel 1", escuela: "Adivinación",
      casting: "1 acción (ritual)", range: "Personal", components: "V, S", duration: "10 min",
      desc: "Comunicación verbal con bestias durante 10 minutos.",
      damage: null, extra: null
    },
    {
      id: "thunderwave", n: "Onda de Trueno [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "Personal (cubo 15p)", components: "V, S", duration: "Instantáneo",
      desc: "Cubo de 15 pies. Salvación CON; fallo: 2d8 trueno + empujado 10 pies; éxito: mitad.",
      damage: "2d8 Trueno (escala: +1d8/nivel)", extra: null
    },
    {
      id: "witch_bolt", n: "Rayo de Bruja [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "30 pies", components: "V, S, M (ramita)", duration: "Conc. 1 min",
      desc: "Ataque a distancia: 1d12 rayo. Acción para mantener el rayo activo automáticamente cada turno.",
      damage: "1d12 Rayo inicial y continuo (escala: +1d12/nivel)", extra: null
    },
    {
      id: "wrathful_smite", n: "Golpe Colérico [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
      desc: "Próximo ataque con arma: +1d6 psíquico. Salvación SAB o Asustado de ti.",
      damage: "+1d6 Psíquico", extra: null
    }
,
    {
      id: "chromatic_orb", n: "Orbe Cromático [PHB]",
      nivel: "Nivel 1", escuela: "Evocación",
      casting: "1 acción", range: "90 pies", components: "V, S, M (diamante 50 po)", duration: "Instantáneo",
      desc: "Elige el tipo de energía (ácido, frío, fuego, rayo, trueno o veneno). Ataque a distancia: 3d8 del tipo elegido.",
      damage: "3d8 del tipo elegido (escala: +1d8/nivel)", extra: null
    },
    {
      id: "color_spray", n: "Chorro de Colores [PHB]",
      nivel: "Nivel 1", escuela: "Ilusión",
      casting: "1 acción", range: "Personal (cono 15p)", components: "V, S, M (polvos de colores)", duration: "1 turno",
      desc: "Cono de luz brillante. Ciega criaturas con hasta 6d10 PG acumulados empezando por las de menos PG.",
      damage: "Ciega hasta 6d10 PG combinados (escala: +2d10/nivel)", extra: null
    },
    {
      id: "dissonant_whispers", n: "Susurros Disonantes [PHB]",
      nivel: "Nivel 1", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
      desc: "Melodía discordante. Salvación SAB; fallo: 3d6 psíquico y usa reacción para alejarse lo máximo posible; éxito: mitad sin huida.",
      damage: "3d6 Psíquico (escala: +1d6/nivel)", extra: null
    },
  ],
  2:   [
    {
      id: "web", n: "Tela de Araña",
      nivel: "Nivel 2", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S, M (seda de araña)", duration: "Conc. 1 hora",
      desc: "Cubo de 20 pies de telaraña (terreno difícil). Salvación DES o Restringida. Inflamable.",
      damage: null, extra: null
    },
    {
      id: "shatter", n: "Fragmentar",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S, M (mica)", duration: "Instantáneo",
      desc: "Esfera de 10 pies. Salvación CON; fallo: 3d8 trueno; éxito: mitad.",
      damage: "3d8 Trueno (escala: +1d8/nivel)", extra: null
    },
    {
      id: "misty_step", n: "Paso Brumoso",
      nivel: "Nivel 2", escuela: "Conjuración",
      casting: "1 acción adicional", range: "Personal", components: "V", duration: "Instantáneo",
      desc: "Teletransporte hasta 30 pies a espacio visible desocupado.",
      damage: null, extra: null
    },
    {
      id: "aganazzars_scorcher", n: "Incinerador de Aganazzar [XGE]",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "1 acción", range: "30 pies", components: "V, S, M (escama de dragón)", duration: "Instantáneo",
      desc: "Línea de 30×5 pies de llamas. Salvación DES; fallo: 3d8 fuego; éxito: mitad.",
      damage: "3d8 Fuego (escala: +1d8/nivel)", extra: null
    },
    {
      id: "aid", n: "Auxilio [PHB]",
      nivel: "Nivel 2", escuela: "Abjuración",
      casting: "1 acción", range: "30 pies", components: "V, S, M (venda blanca)", duration: "8 horas",
      desc: "Hasta 3 criaturas ganan 5 PG temporales y su máximo de PG aumenta en 5.",
      damage: "+5 PG temporales (escala: +5/nivel)", extra: null
    },
    {
      id: "alter_self", n: "Alterarse a Sí Mismo [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 hora",
      desc: "Cambias tu cuerpo: branquias, apariencia diferente o armas naturales (1d6+FUE, mágicas).",
      damage: null, extra: null
    },
    {
      id: "barkskin", n: "Corteza Protectora [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "Toque", components: "V, S, M (corteza de roble)", duration: "Conc. 1 hora",
      desc: "CA no puede ser menor de 16.",
      damage: "CA mínima 16", extra: null
    },
    {
      id: "blindness_deafness", n: "Ceguera/Sordera [PHB]",
      nivel: "Nivel 2", escuela: "Nigromancia",
      casting: "1 acción", range: "30 pies", components: "V", duration: "1 min",
      desc: "Salvación CON o Cegado/Ensordecido (tu elección). Repite al final de cada uno de sus turnos.",
      damage: null, extra: null
    },
    {
      id: "blur", n: "Difuminar [PHB]",
      nivel: "Nivel 2", escuela: "Ilusión",
      casting: "1 acción", range: "Personal", components: "V", duration: "Conc. 1 min",
      desc: "Ataques contra ti tienen desventaja (excepto si el atacante no depende de la vista).",
      damage: null, extra: null
    },
    {
      id: "calm_emotions", n: "Calmar Emociones [PHB]",
      nivel: "Nivel 2", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Esfera de 20 pies: suprime encantamientos/miedo o hace indiferentes a humanoides (salvación CAR).",
      damage: null, extra: null
    },
    {
      id: "cloud_of_daggers", n: "Nube de Dagas [PHB]",
      nivel: "Nivel 2", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S, M (vidrio)", duration: "Conc. 1 min",
      desc: "Cubo de 5 pies de dagas giratorias en posición fija. Criaturas que entren o estén: 4d4 cortante.",
      damage: "4d4 Cortante (escala: +2d4/nivel)", extra: null
    },
    {
      id: "darkness", n: "Oscuridad [PHB]",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, M (pellets de murciélago)", duration: "Conc. 10 min",
      desc: "Esfera de 15 pies de oscuridad mágica total. Visión normal no la penetra.",
      damage: null, extra: null
    },
    {
      id: "darkvision", n: "Visión en la Oscuridad [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "Toque", components: "V, S, M (zanahoria)", duration: "8 horas",
      desc: "Criatura gana visión en la oscuridad hasta 60 pies.",
      damage: null, extra: null
    },
    {
      id: "detect_thoughts", n: "Detectar Pensamientos [PHB]",
      nivel: "Nivel 2", escuela: "Adivinación",
      casting: "1 acción", range: "Personal", components: "V, S, M (moneda de cobre)", duration: "Conc. 1 min",
      desc: "Lees pensamientos superficiales (PAS 10). Puedes profundizar (salvación SAB). Detecta pensantes a 30 pies.",
      damage: null, extra: null
    },
    {
      id: "dragon_s_breath", n: "Aliento de Dragón [XGE]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción adicional", range: "Toque", components: "V, S, M (chile)", duration: "Conc. 1 min",
      desc: "Criatura tocada exhala energía en cono de 15 pies (tipo a elegir). Salvación DES mitad.",
      damage: "3d6 del tipo elegido (escala: +1d6/nivel)", extra: null
    },
    {
      id: "enhance_ability", n: "Mejorar Atributo [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "Toque", components: "V, S, M (pelo de animal)", duration: "Conc. 1 hora",
      desc: "Ventaja en pruebas de la estadística elegida + beneficio secundario (p.ej. Bull's Strength: doble capacidad de carga).",
      damage: null, extra: null
    },
    {
      id: "enlarge_reduce", n: "Agrandar/Reducir [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "30 pies", components: "V, S, M (polvo de hierro)", duration: "Conc. 1 min",
      desc: "Agrandar: dobla tamaño, ventaja FUE, +1d4 daño en armas. Reducir: mitad de tamaño, desventaja FUE, -1d4 daño.",
      damage: null, extra: null
    },
    {
      id: "flaming_sphere", n: "Esfera de Fuego [PHB]",
      nivel: "Nivel 2", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S, M (sebo, fósforo)", duration: "Conc. 1 min",
      desc: "Esfera de fuego de 5 pies que mueves 30 pies/turno. Salvación DES al pasar: 2d6 fuego.",
      damage: "2d6 Fuego (escala: +1d6/nivel)", extra: null
    },
    {
      id: "hold_person", n: "Mantener Persona [PHB]",
      nivel: "Nivel 2", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V, S, M (mano de hierro)", duration: "Conc. 1 min",
      desc: "Humanoide: salvación SAB o Paralizado. Ataques a 5 pies son críticos automáticos.",
      damage: null, extra: null
    },
    {
      id: "invisibility", n: "Invisibilidad [PHB]",
      nivel: "Nivel 2", escuela: "Ilusión",
      casting: "1 acción", range: "Toque", components: "V, S, M (párpado de murciélago)", duration: "Conc. 1 hora",
      desc: "Criatura invisible. Termina si ataca o lanza un conjuro.",
      damage: null, extra: null
    },
    {
      id: "knock", n: "Abrir [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
      desc: "Abre hasta 3 cerrojos o sellados mágicos. Sonido de golpe audible a 300 pies.",
      damage: null, extra: null
    },
    {
      id: "levitate", n: "Levitar [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "V, S, M (partícula de hierro)", duration: "Conc. 10 min",
      desc: "Una criatura u objeto (máx 500 lb) flota y puede moverse vertical hasta 20 pies/turno.",
      damage: null, extra: null
    },
    {
      id: "melfs_acid_arrow", n: "Flecha Ácida de Melf [PHB]",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "1 acción", range: "90 pies", components: "V, S, M (hoja de ruibarbo)", duration: "Instantáneo",
      desc: "Ataque a distancia: 4d4 ácido. Al final del siguiente turno del objetivo: 2d4 ácido adicional.",
      damage: "4d4 Ácido + 2d4 al siguiente turno", extra: null
    },
    {
      id: "mirror_image", n: "Imagen Especular [PHB]",
      nivel: "Nivel 2", escuela: "Ilusión",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "1 min",
      desc: "3 duplicados ilusorios. d20 para ver a cuál se golpea. Sin Concentración.",
      damage: null, extra: null
    },
    {
      id: "pass_without_trace", n: "Pasar sin Dejar Rastro [PHB]",
      nivel: "Nivel 2", escuela: "Abjuración",
      casting: "1 acción", range: "Personal", components: "V, S, M (cenizas)", duration: "Conc. 1 hora",
      desc: "+10 a Sigilo para ti y aliados en 30 pies. No rastreable mágicamente.",
      damage: "+10 Sigilo al grupo", extra: null
    },
    {
      id: "prayer_of_healing", n: "Oración de Curación [PHB]",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "10 minutos", range: "30 pies", components: "V", duration: "Instantáneo",
      desc: "Hasta 6 criaturas recuperan 2d8 + MOD lanzador PG. Solo fuera de combate.",
      damage: "2d8 + MOD lanzador (escala: +1d8/nivel)", extra: null
    },
    {
      id: "scorching_ray", n: "Rayo Abrasador [PHB]",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
      desc: "3 rayos de fuego independientes. Cada uno: ataque a distancia, 2d6 fuego.",
      damage: "3 × 2d6 Fuego (escala: +1 rayo/nivel)", extra: null
    },
    {
      id: "see_invisibility", n: "Ver Invisibilidad [PHB]",
      nivel: "Nivel 2", escuela: "Adivinación",
      casting: "1 acción", range: "Personal", components: "V, S, M (talco y plata)", duration: "1 hora",
      desc: "Ves criaturas y objetos invisibles y el Plano Etéreo hasta 60 pies.",
      damage: null, extra: null
    },
    {
      id: "silence", n: "Silencio [PHB]",
      nivel: "Nivel 2", escuela: "Ilusión",
      casting: "1 acción (ritual)", range: "120 pies", components: "V, S", duration: "Conc. 10 min",
      desc: "Esfera de 20 pies: ningún sonido ni componentes verbales posibles dentro.",
      damage: null, extra: null
    },
    {
      id: "spider_climb", n: "Trepar como Araña [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "Toque", components: "V, S, M (alquitrán)", duration: "Conc. 1 hora",
      desc: "Criatura puede escalar superficies verticales y techos a plena velocidad.",
      damage: null, extra: null
    },
    {
      id: "spiritual_weapon", n: "Arma Espiritual [PHB]",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "1 acción adicional", range: "60 pies", components: "V, S", duration: "1 min",
      desc: "Arma flotante de fuerza. Acción adicional para atacar: 1d8 + MOD SAB de fuerza.",
      damage: "1d8 + MOD SAB Fuerza (escala: +1d8 cada 2 niveles)", extra: null
    },
    {
      id: "suggestion", n: "Sugestión [PHB]",
      nivel: "Nivel 2", escuela: "Encantamiento",
      casting: "1 acción", range: "30 pies", components: "V, M (lengua de serpiente)", duration: "Conc. 8 horas",
      desc: "Sugieres una acción razonable (salvación SAB). La criatura la sigue mientras sea sensata.",
      damage: null, extra: null
    },
    {
      id: "warding_bond", n: "Vínculo de Protección [PHB]",
      nivel: "Nivel 2", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (anillos de platino 50 po)", duration: "1 hora",
      desc: "Aliado: +1 CA, +1 salvaciones, resistencia a todo daño. Tú recibes el mismo daño que ella.",
      damage: null, extra: null
    },
    {
      id: "zone_of_truth", n: "Zona de Verdad [PHB]",
      nivel: "Nivel 2", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "10 min",
      desc: "Esfera de 15 pies. Salvación CAR o no puede mentir deliberadamente.",
      damage: null, extra: null
    }
,
    {
      id: "flame_blade", n: "Hoja Llameante [PHB]",
      nivel: "Nivel 2", escuela: "Evocación",
      casting: "1 acción adicional", range: "Personal", components: "V, S, M (hoja de sumac)", duration: "Conc. 10 min",
      desc: "Hoja de fuego en tu mano. Ataque cuerpo a cuerpo con conjuro: 3d6 fuego (MOD SAB). Emite luz brillante 10 pies.",
      damage: "3d6 Fuego (escala: +1d6 cada 2 niveles)", extra: null
    },
    {
      id: "heat_metal", n: "Metal al Rojo [PHB]",
      nivel: "Nivel 2", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "V, S, M (hierro y llama)", duration: "Conc. 1 min",
      desc: "Objeto de metal fabricado se calienta al rojo. Al portarlo: 2d8 fuego por turno. Portador puede soltarlo o atacar con desventaja.",
      damage: "2d8 Fuego/turno (escala: +1d8/nivel)", extra: null
    },
    {
      id: "lesser_restoration", n: "Restauración Menor [PHB]",
      nivel: "Nivel 2", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Instantáneo",
      desc: "Termina una condición a tu elección: Ceguera, Sordera, Parálisis o Envenenamiento.",
      damage: null, extra: "Sin Concentración."
    },
  ],
  3:   [
    {
      id: "fireball", n: "Bola de Fuego",
      nivel: "Nivel 3", escuela: "Evocación",
      casting: "1 acción", range: "150 pies", components: "V, S, M (guano y azufre)", duration: "Instantáneo",
      desc: "Explosión de 20 pies de radio. Salvación DES; fallo: 8d6 fuego; éxito: mitad.",
      damage: "8d6 Fuego (escala: +1d6/nivel)", extra: null
    },
    {
      id: "counterspell", n: "Contrahechizo",
      nivel: "Nivel 3", escuela: "Abjuración",
      casting: "1 reacción", range: "60 pies", components: "S", duration: "Instantáneo",
      desc: "Anula conjuro en progreso. Nv.3 o menos: automático. Nv.4+: prueba INT (CD 10 + nivel del conjuro).",
      damage: null, extra: null
    },
    {
      id: "hypnotic_pattern", n: "Patrón Hipnótico",
      nivel: "Nivel 3", escuela: "Ilusión",
      casting: "1 acción", range: "120 pies", components: "S, M (cristal torcido)", duration: "Conc. 1 min",
      desc: "Cubo de 30 pies de colores hipnóticos. Salvación SAB; fallo: Encantada e Incapacitada (vel. 0).",
      damage: null, extra: null
    },
    {
      id: "animate_dead", n: "Animar Muertos [PHB]",
      nivel: "Nivel 3", escuela: "Nigromancia",
      casting: "1 minuto", range: "10 pies", components: "V, S, M (sangre, hueso)", duration: "Instantáneo",
      desc: "Creas un zombi o esqueleto. Obedece órdenes verbales. Requiere relanzar cada 24 h para mantener control.",
      damage: null, extra: "Escala: +2 no-muertos por nivel extra."
    },
    {
      id: "bestow_curse", n: "Imponer Maldición [PHB]",
      nivel: "Nivel 3", escuela: "Nigromancia",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
      desc: "Ataque con conjuro; en impacto: salvación SAB o maldición (desventaja stat, daño extra, perder acción, etc.).",
      damage: null, extra: "Escala en duración al subir slot."
    },
    {
      id: "blink", n: "Parpadear [PHB]",
      nivel: "Nivel 3", escuela: "Transmutación",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "1 min",
      desc: "Al final de cada turno tiras d20. Con 11+: desapareces al Plano Etéreo hasta tu siguiente turno.",
      damage: null, extra: null
    },
    {
      id: "call_lightning", n: "Llamar Rayo [PHB]",
      nivel: "Nivel 3", escuela: "Conjuración",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 10 min",
      desc: "Nube de tormenta. Cada turno (Acción): salvación DES o 3d10 rayo (4d10 en tormenta real).",
      damage: "3d10 Rayo/rayo (escala: +1d10/nivel)", extra: null
    },
    {
      id: "clairvoyance", n: "Clarividencia [PHB]",
      nivel: "Nivel 3", escuela: "Adivinación",
      casting: "10 minutos", range: "1 milla", components: "V, S, M (cristal 100 po)", duration: "Conc. 10 min",
      desc: "Sensor invisible en lugar conocido a 1 milla. Ves u oyes a través de él.",
      damage: null, extra: null
    },
    {
      id: "dispel_magic", n: "Disipar Magia [PHB]",
      nivel: "Nivel 3", escuela: "Abjuración",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
      desc: "Nv.3 o menos terminan automáticamente. Nv.4+: prueba de CAR (CD 10 + nivel del conjuro).",
      damage: null, extra: null
    },
    {
      id: "erupting_earth", n: "Tierra en Erupción [XGE]",
      nivel: "Nivel 3", escuela: "Transmutación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (granito)", duration: "Instantáneo",
      desc: "Cubo de 20 pies explota. Salvación DES; fallo: 3d12 contundente. Deja terreno difícil.",
      damage: "3d12 Contundente (escala: +1d12/nivel)", extra: null
    },
    {
      id: "fear", n: "Miedo [PHB]",
      nivel: "Nivel 3", escuela: "Ilusión",
      casting: "1 acción", range: "Personal (cono 30p)", components: "V, S, M (pluma blanca)", duration: "Conc. 1 min",
      desc: "Cono de 30 pies. Salvación SAB o Asustadas; huyen hasta que el conjuro acabe.",
      damage: null, extra: null
    },
    {
      id: "fly", n: "Volar [PHB]",
      nivel: "Nivel 3", escuela: "Transmutación",
      casting: "1 acción", range: "Toque", components: "V, S, M (pluma)", duration: "Conc. 10 min",
      desc: "Criatura gana velocidad de vuelo 60 pies.",
      damage: null, extra: null
    },
    {
      id: "haste", n: "Apresurarse [PHB]",
      nivel: "Nivel 3", escuela: "Transmutación",
      casting: "1 acción", range: "30 pies", components: "V, S, M (regaliz)", duration: "Conc. 1 min",
      desc: "Dobla velocidad, +2 CA, ventaja DES y una acción adicional limitada.",
      damage: null, extra: null
    },
    {
      id: "leomund_tiny_hut", n: "Cabaña Minúscula de Leomund [PHB]",
      nivel: "Nivel 3", escuela: "Evocación",
      casting: "1 minuto (ritual)", range: "Personal (10p)", components: "V, S, M (cristal)", duration: "8 horas",
      desc: "Cúpula de 10 pies. Bloquea magia hostil y criaturas. Interior cómodo. Hasta 9 criaturas + tú.",
      damage: null, extra: "Ritual. Sin Concentración."
    },
    {
      id: "lightning_bolt", n: "Rayo [PHB]",
      nivel: "Nivel 3", escuela: "Evocación",
      casting: "1 acción", range: "Personal (100p)", components: "V, S, M (varilla de ámbar)", duration: "Instantáneo",
      desc: "Línea de 5×100 pies. Salvación DES; fallo: 8d6 rayo; éxito: mitad.",
      damage: "8d6 Rayo (escala: +1d6/nivel)", extra: null
    },
    {
      id: "mass_healing_word", n: "Palabra Curativa en Masa [PHB]",
      nivel: "Nivel 3", escuela: "Evocación",
      casting: "1 acción adicional", range: "60 pies", components: "V", duration: "Instantáneo",
      desc: "Hasta 6 criaturas visibles recuperan 1d4 + MOD lanzador PG.",
      damage: "1d4 + MOD lanzador × 6 (escala: +1d4/nivel)", extra: null
    },
    {
      id: "nondetection", n: "No Detección [PHB]",
      nivel: "Nivel 3", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (ceniza y diamante 25 po)", duration: "8 horas",
      desc: "No puede ser objetivo de magia de adivinación ni de mirada divina.",
      damage: null, extra: "Sin Concentración."
    },
    {
      id: "plant_growth", n: "Crecer Plantas [PHB]",
      nivel: "Nivel 3", escuela: "Transmutación",
      casting: "1 acción u 8 horas", range: "150 pies", components: "V, S", duration: "Instantáneo",
      desc: "1 acción: terreno difícil en radio de 100 pies. 8 horas: enriquece tierras en 1 milla de radio.",
      damage: null, extra: null
    },
    {
      id: "protection_from_energy", n: "Protección contra la Energía [PHB]",
      nivel: "Nivel 3", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
      desc: "Resistencia a un tipo de daño energético elegido (ácido, frío, fuego, rayo o trueno).",
      damage: null, extra: null
    },
    {
      id: "revivify", n: "Revivificar [PHB]",
      nivel: "Nivel 3", escuela: "Nigromancia",
      casting: "1 acción", range: "Toque", components: "V, S, M (diamantes 300 po)", duration: "Instantáneo",
      desc: "Devuelve la vida a criatura muerta hace ≤1 minuto. Regresa con 1 PG.",
      damage: null, extra: null
    },
    {
      id: "sending", n: "Enviar Mensaje [PHB]",
      nivel: "Nivel 3", escuela: "Evocación",
      casting: "1 acción", range: "Sin límite", components: "V, S, M (alambre de cobre)", duration: "1 turno",
      desc: "Hasta 25 palabras a cualquier criatura conocida en cualquier plano. Puede responder 25 palabras.",
      damage: null, extra: null
    },
    {
      id: "slow", n: "Ralentizar [PHB]",
      nivel: "Nivel 3", escuela: "Transmutación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (melaza)", duration: "Conc. 1 min",
      desc: "Hasta 6 criaturas (salvación SAB): velocidad mitad, -2 CA y DES, sin reacciones.",
      damage: null, extra: null
    },
    {
      id: "speak_with_dead", n: "Hablar con los Muertos [PHB]",
      nivel: "Nivel 3", escuela: "Nigromancia",
      casting: "1 acción", range: "10 pies", components: "V, S, M (incienso)", duration: "10 min",
      desc: "El cadáver responde hasta 5 preguntas. Solo sabe lo que supo en vida.",
      damage: null, extra: null
    },
    {
      id: "spirit_guardians", n: "Guardianes Espirituales [PHB]",
      nivel: "Nivel 3", escuela: "Conjuración",
      casting: "1 acción", range: "Personal (15p)", components: "V, S, M (símbolo sagrado)", duration: "Conc. 10 min",
      desc: "Espíritus en 15 pies (terreno difícil). Salvación SAB; fallo: 3d8 radiante o necrótico.",
      damage: "3d8 Radiante/Necrótico (escala: +1d8/nivel)", extra: null
    },
    {
      id: "stinking_cloud", n: "Nube Apestosa [PHB]",
      nivel: "Nivel 3", escuela: "Conjuración",
      casting: "1 acción", range: "90 pies", components: "V, S, M (huevo podrido)", duration: "Conc. 1 min",
      desc: "Nube de 20 pies que bloquea visión. Salvación CON al inicio del turno o se pierde la acción.",
      damage: null, extra: null
    },
    {
      id: "thunder_step", n: "Paso de Trueno [XGE]",
      nivel: "Nivel 3", escuela: "Conjuración",
      casting: "1 acción", range: "90 pies", components: "V", duration: "Instantáneo",
      desc: "Teletransporte hasta 90 pies; criaturas a 10 pies del punto de partida: salvación CON o 3d10 trueno.",
      damage: "3d10 Trueno (escala: +1d10/nivel)", extra: null
    },
    {
      id: "vampiric_touch", n: "Toque Vampírico [PHB]",
      nivel: "Nivel 3", escuela: "Nigromancia",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
      desc: "Ataque cuerpo a cuerpo: 3d6 necrótico. Curas la mitad del daño causado. Repetible cada turno.",
      damage: "3d6 Necrótico + curación mitad (escala: +1d6/nivel)", extra: null
    },
    {
      id: "water_walk", n: "Caminar sobre el Agua [PHB]",
      nivel: "Nivel 3", escuela: "Transmutación",
      casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (corcho)", duration: "1 hora",
      desc: "Hasta 10 criaturas pueden caminar sobre líquidos como si fuera suelo sólido.",
      damage: null, extra: null
    },
    {
      id: "wind_wall", n: "Muro de Viento [PHB]",
      nivel: "Nivel 3", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (pequeño abanico)", duration: "Conc. 1 min",
      desc: "Muro de viento de 50×15 pies. Salvación FUE o 3d8 contundente. Bloquea proyectiles y nieblas.",
      damage: "3d8 Contundente", extra: null
    }
,
    {
      id: "conjure_barrage", n: "Ráfaga de Conjuro [PHB]",
      nivel: "Nivel 3", escuela: "Conjuración",
      casting: "1 acción", range: "Personal (cono 60p)", components: "V, S, M (munición o arma arrojadiza)", duration: "Instantáneo",
      desc: "Lanzas arma o munición que se multiplica en un cono de 60 pies. Salvación DES; fallo: 3d8 del tipo del arma; éxito: mitad.",
      damage: "3d8 del tipo del arma", extra: null
    },
    {
      id: "daylight", n: "Luz del Día [PHB]",
      nivel: "Nivel 3", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "1 hora",
      desc: "Esfera de luz brillante de 60 pies de radio y tenue 60 pies más. Disipa oscuridades mágicas de Nv.3 o menor.",
      damage: null, extra: "Sin Concentración."
    },
    {
      id: "tongues", n: "Lenguas [PHB]",
      nivel: "Nivel 3", escuela: "Adivinación",
      casting: "1 acción", range: "Toque", components: "V, M (arcilla en espiral)", duration: "1 hora",
      desc: "La criatura tocada entiende cualquier idioma hablado, y cualquier criatura la entiende a ella.",
      damage: null, extra: "Sin Concentración."
    },
  ],
  4:   [
    {
      id: "polymorph", n: "Polimorfismo",
      nivel: "Nivel 4", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "V, S, M (capullo de oruga)", duration: "Conc. 1 hora",
      desc: "Transforma criatura en bestia de CR ≤ nivel/CR de la criatura objetivo.",
      damage: null, extra: null
    },
    {
      id: "ice_storm", n: "Tormenta de Hielo",
      nivel: "Nivel 4", escuela: "Evocación",
      casting: "1 acción", range: "300 pies", components: "V, S, M (polvo de hielo y agua)", duration: "Instantáneo",
      desc: "Cilindro de 20×40 pies. Salvación DES; fallo: 2d8 contundente + 4d6 frío. Terreno difícil.",
      damage: "2d8 Contundente + 4d6 Frío (escala: +1d8/nivel)", extra: null
    },
    {
      id: "greater_invisibility", n: "Invisibilidad Mayor",
      nivel: "Nivel 4", escuela: "Ilusión",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 min",
      desc: "Invisible incluso al atacar o lanzar conjuros.",
      damage: null, extra: null
    },
    {
      id: "arcane_eye", n: "Ojo Arcano [PHB]",
      nivel: "Nivel 4", escuela: "Adivinación",
      casting: "1 acción", range: "30 pies", components: "V, S, M (pelo de murciélago)", duration: "Conc. 1 hora",
      desc: "Ojo invisible que mueves 30 pies/turno. Visión normal + visión en la oscuridad 30 pies. Pasa por huecos de 1 pulgada.",
      damage: null, extra: null
    },
    {
      id: "banishment", n: "Destierro [PHB]",
      nivel: "Nivel 4", escuela: "Abjuración",
      casting: "1 acción", range: "60 pies", components: "V, S, M (objeto repugnante al objetivo)", duration: "Conc. 1 min",
      desc: "Salvación CAR; fallo: desterrado. Foráneo → permanente al soltar concentración.",
      damage: null, extra: "Escala: +1 criatura/nivel extra."
    },
    {
      id: "blight", n: "Plaga [PHB]",
      nivel: "Nivel 4", escuela: "Nigromancia",
      casting: "1 acción", range: "30 pies", components: "V, S", duration: "Instantáneo",
      desc: "Salvación CON; fallo: 8d8 necrótico; éxito: mitad. Plantas no hacen salvación: daño máximo.",
      damage: "8d8 Necrótico (escala: +1d8/nivel)", extra: null
    },
    {
      id: "confusion", n: "Confusión [PHB]",
      nivel: "Nivel 4", escuela: "Encantamiento",
      casting: "1 acción", range: "90 pies", components: "V, S, M (cascabeles)", duration: "Conc. 1 min",
      desc: "Esfera de 10 pies. Salvación SAB; fallo: acciones aleatorias cada turno (tabla d10).",
      damage: null, extra: null
    },
    {
      id: "death_ward", n: "Protección contra la Muerte [PHB]",
      nivel: "Nivel 4", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "8 horas",
      desc: "Si el daño la llevaría a 0 PG, queda en 1 PG y el conjuro termina.",
      damage: null, extra: "Sin Concentración. 8 horas."
    },
    {
      id: "dimension_door", n: "Puerta Dimensional [PHB]",
      nivel: "Nivel 4", escuela: "Conjuración",
      casting: "1 acción", range: "500 pies", components: "V", duration: "Instantáneo",
      desc: "Teletransporte hasta 500 pies. Puedes llevar a una criatura de tu tamaño o menor.",
      damage: null, extra: null
    },
    {
      id: "fire_shield", n: "Escudo de Fuego [PHB]",
      nivel: "Nivel 4", escuela: "Evocación",
      casting: "1 acción", range: "Personal", components: "V, S, M (fósforo)", duration: "10 min",
      desc: "Llamas cálidas o frías. Resistencia a frío/fuego (el opuesto). Atacantes cuerpo a cuerpo reciben 2d8 del tipo opuesto.",
      damage: "2d8 Fuego o Frío por atacante", extra: "Sin Concentración."
    },
    {
      id: "freedom_of_movement", n: "Libertad de Movimiento [PHB]",
      nivel: "Nivel 4", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (cuero)", duration: "1 hora",
      desc: "Inmune a Parálisis. Escapa de Agarrado/Restringido con solo 5 pies de movimiento.",
      damage: null, extra: "Sin Concentración. 1 hora."
    },
    {
      id: "sickening_radiance", n: "Resplandor Enfermizo [XGE]",
      nivel: "Nivel 4", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 10 min",
      desc: "Esfera de 30 pies. Salvación CON; fallo: 4d10 radiante + 1 nivel de agotamiento.",
      damage: "4d10 Radiante + 1 agotamiento", extra: null
    },
    {
      id: "stoneskin", n: "Piel de Piedra [PHB]",
      nivel: "Nivel 4", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (diamante 100 po)", duration: "Conc. 1 hora",
      desc: "Resistencia a daño contundente, cortante y perforante no mágico.",
      damage: null, extra: null
    },
    {
      id: "vitriolic_sphere", n: "Esfera Vitriólica [XGE]",
      nivel: "Nivel 4", escuela: "Evocación",
      casting: "1 acción", range: "150 pies", components: "V, S, M (ámbar)", duration: "Instantáneo",
      desc: "Explosión de 20 pies. Salvación DES; fallo: 10d4 ácido + 5d4 ácido al siguiente turno.",
      damage: "10d4 Ácido + 5d4 ácido diferido (escala: +2d4/nivel)", extra: null
    },
    {
      id: "wall_of_fire", n: "Muro de Fuego [PHB]",
      nivel: "Nivel 4", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (fósforo)", duration: "Conc. 1 min",
      desc: "Muro de hasta 60×20×1 pies. Criaturas al cruzar: salvación DES o 5d8 fuego.",
      damage: "5d8 Fuego (escala: +1d8/nivel)", extra: null
    },
    {
      id: "watery_sphere", n: "Esfera de Agua [XGE]",
      nivel: "Nivel 4", escuela: "Conjuración",
      casting: "1 acción", range: "90 pies", components: "V, S, M (trozo de coral)", duration: "Conc. 1 min",
      desc: "Esfera de agua de 10 pies de radio. Salvación FUE o Restringida dentro. Puede moverse 30 pies/turno.",
      damage: "Restringida (salvación FUE para escapar)", extra: null
    }
,
    {
      id: "compulsion", n: "Compulsión [PHB]",
      nivel: "Nivel 4", escuela: "Encantamiento",
      casting: "1 acción", range: "30 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Humanoides afectados (salvación SAB): cada turno deben moverse en la dirección que elijas sin poder acercarse a ti voluntariamente.",
      damage: null, extra: null
    },
    {
      id: "divination", n: "Adivinación [PHB]",
      nivel: "Nivel 4", escuela: "Adivinación",
      casting: "1 acción (ritual)", range: "Personal", components: "V, S, M (incienso 25 po)", duration: "Instantáneo",
      desc: "Preguntas sobre eventos de los próximos 7 días. Respuesta: Bien, Mal, Ambos o Ninguno.",
      damage: null, extra: "Ritual. Segunda vez en el día: 25% de respuesta errónea."
    },
    {
      id: "evards_black_tentacles", n: "Tentáculos Negros de Evard [PHB]",
      nivel: "Nivel 4", escuela: "Conjuración",
      casting: "1 acción", range: "90 pies", components: "V, S, M (tentáculo de pulpo)", duration: "Conc. 1 min",
      desc: "Cuadrado de 20 pies de tentáculos (terreno difícil). Salvación DES o Restringida y 3d6 contundente por turno.",
      damage: "3d6 Contundente/turno si Restringida", extra: null
    },
  ],
  5:   [
    {
      id: "cone_of_cold", n: "Cono de Frío",
      nivel: "Nivel 5", escuela: "Evocación",
      casting: "1 acción", range: "Personal (cono 60p)", components: "V, S, M (cristal de hielo)", duration: "Instantáneo",
      desc: "Cono de 60 pies. Salvación CON; fallo: 8d8 frío; éxito: mitad.",
      damage: "8d8 Frío (escala: +1d8/nivel)", extra: null
    },
    {
      id: "hold_monster", n: "Mantener Monstruo",
      nivel: "Nivel 5", escuela: "Encantamiento",
      casting: "1 acción", range: "90 pies", components: "V, S, M (barra de hierro)", duration: "Conc. 1 min",
      desc: "Cualquier criatura: salvación SAB o Paralizada. Ataques a 5 pies son críticos automáticos.",
      damage: null, extra: null
    },
    {
      id: "wall_of_force", n: "Muro de Fuerza",
      nivel: "Nivel 5", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (polvo de piedra)", duration: "Conc. 10 min",
      desc: "Pared de fuerza invisible inmune a todo daño. Solo Desintegrar puede destruirla.",
      damage: null, extra: null
    },
    {
      id: "animate_objects", n: "Animar Objetos [PHB]",
      nivel: "Nivel 5", escuela: "Transmutación",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Hasta 10 objetos animados bajo tu control. Daño según tamaño (Diminuto: 1d4+4, Mediano: 2d6+1).",
      damage: "Variable por tamaño del objeto", extra: "Escala: +2 objetos/nivel extra."
    },
    {
      id: "commune", n: "Comunión [PHB]",
      nivel: "Nivel 5", escuela: "Adivinación",
      casting: "1 minuto (ritual)", range: "Personal", components: "V, S, M (incienso y agua bendita)", duration: "1 min",
      desc: "Contactas a tu deidad. Hasta 3 preguntas de sí/no con respuestas verídicas.",
      damage: null, extra: "Ritual."
    },
    {
      id: "conjure_elemental", n: "Convocar Elemental [PHB]",
      nivel: "Nivel 5", escuela: "Conjuración",
      casting: "1 minuto", range: "90 pies", components: "V, S, M (incienso elemental)", duration: "Conc. 1 hora",
      desc: "Invocas un elemental de CR 5 o menor. Si pierdes concentración, puede volverse hostil.",
      damage: null, extra: null
    },
    {
      id: "contact_other_plane", n: "Contactar Otro Plano [PHB]",
      nivel: "Nivel 5", escuela: "Adivinación",
      casting: "1 minuto (ritual)", range: "Personal", components: "V", duration: "1 min",
      desc: "Contactas entidad extraplanar: hasta 5 preguntas sí/no. Salvación INT CD 15 o locura temporal.",
      damage: null, extra: "Ritual."
    },
    {
      id: "dominate_person", n: "Dominar Persona [PHB]",
      nivel: "Nivel 5", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Humanoide: salvación SAB o bajo tu control total. Repite si recibe daño.",
      damage: null, extra: null
    },
    {
      id: "greater_restoration", n: "Restauración Mayor [PHB]",
      nivel: "Nivel 5", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (diamante 100 po)", duration: "Instantáneo",
      desc: "Reduce agotamiento, termina encantamientos, maldiciones, petrificación o restaura estadísticas reducidas.",
      damage: null, extra: null
    },
    {
      id: "mass_cure_wounds", n: "Curar Heridas en Masa [PHB]",
      nivel: "Nivel 5", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Hasta 6 criaturas en radio de 30 pies recuperan 3d8 + MOD lanzador PG.",
      damage: "3d8 + MOD lanzador × 6 (escala: +1d8/nivel)", extra: null
    },
    {
      id: "mislead", n: "Despistar [PHB]",
      nivel: "Nivel 5", escuela: "Ilusión",
      casting: "1 acción", range: "Personal", components: "S", duration: "Conc. 1 hora",
      desc: "Te vuelves invisible y creas un duplicado ilusorio en tu lugar que puedes controlar.",
      damage: null, extra: null
    },
    {
      id: "modify_memory", n: "Modificar Memoria [PHB]",
      nivel: "Nivel 5", escuela: "Encantamiento",
      casting: "1 acción", range: "30 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Humanoide Encantado: puedes modificar un recuerdo de los últimos 24 horas.",
      damage: null, extra: null
    },
    {
      id: "raise_dead", n: "Resucitar [PHB]",
      nivel: "Nivel 5", escuela: "Nigromancia",
      casting: "1 hora", range: "Toque", components: "V, S, M (diamante 500 po)", duration: "Instantáneo",
      desc: "Devuelve la vida a criatura muerta hace ≤10 días. Regresa con 1 PG y penalizaciones temporales.",
      damage: null, extra: null
    },
    {
      id: "scrying", n: "Escudriñar [PHB]",
      nivel: "Nivel 5", escuela: "Adivinación",
      casting: "10 min", range: "Personal", components: "V, S, M (espejo de plata 1.000 po)", duration: "Conc. 10 min",
      desc: "Ves y oyes a una criatura conocida en cualquier lugar. Salvación SAB (modificada por familiaridad).",
      damage: null, extra: null
    },
    {
      id: "skill_empowerment", n: "Refuerzo de Habilidad [XGE]",
      nivel: "Nivel 5", escuela: "Transmutación",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
      desc: "Criatura con competencia en una habilidad pasa a tener competencia doble en ella.",
      damage: null, extra: null
    },
    {
      id: "synaptic_static", n: "Estática Sináptica [XGE]",
      nivel: "Nivel 5", escuela: "Encantamiento",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
      desc: "Esfera de 20 pies. Salvación INT; fallo: 8d6 psíquico y -1d6 a ataques, pruebas y concentración por 1 min.",
      damage: "8d6 Psíquico", extra: null
    },
    {
      id: "telekinesis", n: "Telequinesis [PHB]",
      nivel: "Nivel 5", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 10 min",
      desc: "Mueves objeto (máx 1.000 lb) o criatura (salvación FUE) hasta 30 pies/turno con tu mente.",
      damage: null, extra: null
    },
    {
      id: "telepathic_bond", n: "Vínculo Telepático de Rary [PHB]",
      nivel: "Nivel 5", escuela: "Adivinación",
      casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (cáscaras de huevo)", duration: "1 hora",
      desc: "Hasta 8 criaturas comparten un vínculo telepático que ignora distancia y barreras.",
      damage: null, extra: "Ritual."
    },
    {
      id: "tree_stride", n: "Caminar entre Árboles [PHB]",
      nivel: "Nivel 5", escuela: "Conjuración",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
      desc: "Entra en un árbol y emerge de otro árbol del mismo tipo a 500 pies.",
      damage: null, extra: null
    },
    {
      id: "wall_of_stone", n: "Muro de Piedra [PHB]",
      nivel: "Nivel 5", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (granito)", duration: "Conc. 10 min",
      desc: "Muro de hasta 10 paneles de 10×10 pies. Puede hacerse permanente si se mantiene 10 min.",
      damage: null, extra: null
    }
,
    {
      id: "destructive_wave", n: "Onda Destructiva [PHB]",
      nivel: "Nivel 5", escuela: "Evocación",
      casting: "1 acción", range: "Personal (30p)", components: "V", duration: "Instantáneo",
      desc: "Energía en 30 pies alrededor. Salvación CON; fallo: 5d6 trueno + 5d6 radiante o necrótico y Derribado; éxito: mitad.",
      damage: "5d6 Trueno + 5d6 Radiante o Necrótico", extra: null
    },
    {
      id: "geas", n: "Geas [PHB]",
      nivel: "Nivel 5", escuela: "Encantamiento",
      casting: "1 minuto", range: "60 pies", components: "V", duration: "30 días",
      desc: "Ordenas a humanoide que no falle SAB una tarea específica. Desobedecer: 5d10 psíquico/día.",
      damage: "5d10 Psíquico/día si desobedece", extra: "Escala duración: Nv.7→1 año, Nv.9→permanente."
    },
    {
      id: "insect_plague", n: "Plaga de Insectos [PHB]",
      nivel: "Nivel 5", escuela: "Conjuración",
      casting: "1 acción", range: "300 pies", components: "V, S, M (maíz, incienso y néctar)", duration: "Conc. 10 min",
      desc: "Esfera de 20 pies de insectos voraces (terreno difícil). Salvación CON; fallo: 4d10 perforante; éxito: mitad.",
      damage: "4d10 Perforante (escala: +1d10/nivel)", extra: null
    },
  ],
  6:   [
    {
      id: "chain_lightning", n: "Rayo en Cadena",
      nivel: "Nivel 6", escuela: "Evocación",
      casting: "1 acción", range: "150 pies", components: "V, S, M (piel, ámbar, 3 alfileres)", duration: "Instantáneo",
      desc: "10d8 rayo al objetivo principal. Salta a 3 objetivos más (salvación DES mitad).",
      damage: "10d8 Rayo (escala: +1 objetivo/nivel)", extra: null
    },
    {
      id: "disintegrate", n: "Desintegrar",
      nivel: "Nivel 6", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "V, S, M (cristal magnético y cuarzo)", duration: "Instantáneo",
      desc: "Salvación DES; fallo: 10d6+40 fuerza. Si lleva a 0 PG: se desintegra en polvo.",
      damage: "10d6 + 40 Fuerza (escala: +3d6+10/nivel)", extra: null
    },
    {
      id: "true_seeing", n: "Ver la Verdad",
      nivel: "Nivel 6", escuela: "Adivinación",
      casting: "1 acción", range: "Toque", components: "V, S, M (ungüento 25 po)", duration: "1 hora",
      desc: "Visión verdadera 120 pies. Ve invisible, plano etéreo. Inmune a ilusiones.",
      damage: null, extra: "Sin Concentración. 1 hora."
    },
    {
      id: "arcane_gate", n: "Portal Arcano [PHB]",
      nivel: "Nivel 6", escuela: "Conjuración",
      casting: "1 acción", range: "500 pies", components: "V, S", duration: "Conc. 10 min",
      desc: "Dos portales circulares de 10 pies de diámetro conectados entre sí en distintos lugares.",
      damage: null, extra: null
    },
    {
      id: "blade_barrier", n: "Barrera de Cuchillas [PHB]",
      nivel: "Nivel 6", escuela: "Evocación",
      casting: "1 acción", range: "90 pies", components: "V, S", duration: "Conc. 10 min",
      desc: "Muro de cuchillas de 100 pies. Salvación DES; fallo: 6d10 cortante; éxito: mitad.",
      damage: "6d10 Cortante", extra: null
    },
    {
      id: "circle_of_death", n: "Círculo de Muerte [PHB]",
      nivel: "Nivel 6", escuela: "Nigromancia",
      casting: "1 acción", range: "150 pies", components: "V, S, M (perla negra 500 po)", duration: "Instantáneo",
      desc: "Esfera de 60 pies. Salvación CON; fallo: 8d6 necrótico; éxito: mitad.",
      damage: "8d6 Necrótico (escala: +2d6/nivel)", extra: null
    },
    {
      id: "contingency", n: "Contingencia [PHB]",
      nivel: "Nivel 6", escuela: "Evocación",
      casting: "10 minutos", range: "Personal", components: "V, S, M (marfil 1.500 po + gema 1.500 po)", duration: "10 días",
      desc: "Programa un conjuro de Nv.5 o menos para que se active automáticamente bajo una condición.",
      damage: null, extra: null
    },
    {
      id: "create_undead", n: "Crear No-Muertos [PHB]",
      nivel: "Nivel 6", escuela: "Nigromancia",
      casting: "1 minuto", range: "10 pies", components: "V, S, M (polvo y sangre)", duration: "Instantáneo",
      desc: "Creas hasta 3 ghouls obedientes. Escala: ghasts a Nv.7, sombras a Nv.8, wights a Nv.9.",
      damage: null, extra: "Escala en poder de criatura creada."
    },
    {
      id: "eyebite", n: "Mirada Maligna [PHB]",
      nivel: "Nivel 6", escuela: "Nigromancia",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
      desc: "Tus ojos se oscurecen. Cada turno una criatura visible: Adormecida, Asustada o Enferma.",
      damage: null, extra: null
    },
    {
      id: "globe_of_invulnerability", n: "Globo de Invulnerabilidad [PHB]",
      nivel: "Nivel 6", escuela: "Abjuración",
      casting: "1 acción", range: "Personal (10p)", components: "V, S, M (perla de vidrio)", duration: "Conc. 1 min",
      desc: "Barrera de 10 pies: ningún conjuro de Nv.5 o menor puede entrar o afectar el interior.",
      damage: null, extra: null
    },
    {
      id: "harm", n: "Dañar [PHB]",
      nivel: "Nivel 6", escuela: "Nigromancia",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Salvación CON; fallo: 14d6 necrótico y PG máx reducidos en esa cantidad; éxito: mitad.",
      damage: "14d6 Necrótico", extra: null
    },
    {
      id: "heal", n: "Sanar [PHB]",
      nivel: "Nivel 6", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Criatura recupera 70 PG. Termina ceguera, sordera y enfermedades.",
      damage: "70 PG curación (escala: +10/nivel)", extra: null
    },
    {
      id: "heroes_feast", n: "Festín de Héroes [PHB]",
      nivel: "Nivel 6", escuela: "Conjuración",
      casting: "10 min", range: "30 pies", components: "V, S, M (bol 1.000 po)", duration: "Instantáneo",
      desc: "12 criaturas: inmunes a veneno y miedo, ventaja en salvaciones de SAB, +2d10 PG máx durante 24 horas.",
      damage: "+2d10 PG máx × 24 h", extra: null
    },
    {
      id: "mass_suggestion", n: "Sugestión en Masa [PHB]",
      nivel: "Nivel 6", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V, M (lengua de serpiente)", duration: "24 horas",
      desc: "Sugieres una acción razonable a hasta 12 criaturas (salvación SAB).",
      damage: null, extra: null
    },
    {
      id: "sunbeam", n: "Rayo de Sol [PHB]",
      nivel: "Nivel 6", escuela: "Evocación",
      casting: "1 acción", range: "Personal (60p)", components: "V, S, M (lente)", duration: "Conc. 1 min",
      desc: "Línea de 5×60 pies de luz brillante. Salvación CON; fallo: 6d8 radiante + Cegado 1 turno.",
      damage: "6d8 Radiante", extra: null
    },
    {
      id: "wall_of_ice", n: "Muro de Hielo [PHB]",
      nivel: "Nivel 6", escuela: "Evocación",
      casting: "1 acción", range: "120 pies", components: "V, S, M (pieza de cuarzo)", duration: "Conc. 10 min",
      desc: "Muro de paneles de hielo de 10×10×1 pie. Criaturas al surgir: salvación DES o 10d6 frío.",
      damage: "10d6 Frío al surgir (escala: +2d6/nivel)", extra: null
    },
    {
      id: "wall_of_thorns", n: "Muro de Espinas [PHB]",
      nivel: "Nivel 6", escuela: "Conjuración",
      casting: "1 acción", range: "120 pies", components: "V, S, M (espinas)", duration: "Conc. 10 min",
      desc: "Muro de 60×10×5 pies de espinos. Cruzarlo: salvación DES o 7d8 perforante.",
      damage: "7d8 Perforante al cruzar (escala: +1d8/nivel)", extra: null
    }
,
    {
      id: "flesh_to_stone", n: "Carne a Piedra [PHB]",
      nivel: "Nivel 6", escuela: "Transmutación",
      casting: "1 acción", range: "60 pies", components: "V, S, M (arcilla, cal y agua)", duration: "Conc. 1 min",
      desc: "Salvación CON; 3 fallos consecutivos: Petrificado permanentemente. 3 éxitos antes: conjuro falla.",
      damage: null, extra: null
    },
    {
      id: "ottos_irresistible_dance", n: "Danza Irresistible de Otto [PHB]",
      nivel: "Nivel 6", escuela: "Encantamiento",
      casting: "1 acción", range: "30 pies", components: "V", duration: "Conc. 1 min",
      desc: "Criatura baila sin control: -4 CA, desventaja DES y en ataques. Salvación SAB al final del turno para terminar.",
      damage: null, extra: null
    },
  ],
  7:   [
    {
      id: "fire_storm", n: "Tormenta de Fuego",
      nivel: "Nivel 7", escuela: "Evocación",
      casting: "1 acción", range: "150 pies", components: "V, S", duration: "Instantáneo",
      desc: "Hasta 10 cubos de 10 pies contiguos de llamas. Salvación DES; fallo: 7d10 fuego; éxito: mitad.",
      damage: "7d10 Fuego", extra: null
    },
    {
      id: "teleport", n: "Teletransporte",
      nivel: "Nivel 7", escuela: "Conjuración",
      casting: "1 acción", range: "10 pies", components: "V", duration: "Instantáneo",
      desc: "Hasta 8 criaturas voluntarias viajan a destino conocido en el mismo plano. Precisión según familiaridad.",
      damage: null, extra: null
    },
    {
      id: "forcecage", n: "Jaula de Fuerza",
      nivel: "Nivel 7", escuela: "Evocación",
      casting: "1 acción", range: "100 pies", components: "V, S, M (rubí en polvo 1.500 po)", duration: "1 hora",
      desc: "Caja o jaula de fuerza de 20 pies. Inamovible, indestructible. Ningún teletransporte.",
      damage: null, extra: "Sin Concentración. 1 hora."
    },
    {
      id: "conjure_celestial", n: "Convocar Celestial [PHB]",
      nivel: "Nivel 7", escuela: "Conjuración",
      casting: "1 minuto", range: "90 pies", components: "V, S", duration: "Conc. 1 hora",
      desc: "Invocas un celestial de CR 4 o menor (CR 5 a Nv.9).",
      damage: null, extra: null
    },
    {
      id: "delayed_blast_fireball", n: "Bola de Fuego Retardada [PHB]",
      nivel: "Nivel 7", escuela: "Evocación",
      casting: "1 acción", range: "150 pies", components: "V, S, M (bola de guano)", duration: "Conc. 1 min",
      desc: "Gema explosiva; cada turno sin detonar: +1d6. Al detonar: 12d6 fuego en 20 pies (salvación DES mitad).",
      damage: "12d6 Fuego base + 1d6/turno (escala: +1d6/nivel)", extra: null
    },
    {
      id: "divine_word", n: "Palabra Divina [PHB]",
      nivel: "Nivel 7", escuela: "Evocación",
      casting: "1 acción adicional", range: "30 pies", components: "V", duration: "Instantáneo",
      desc: "Criaturas que fallen salvación CAR: efectos según PG (sorda, ciega, aturdida o muerta).",
      damage: null, extra: null
    },
    {
      id: "etherealness", n: "Etiralidad [PHB]",
      nivel: "Nivel 7", escuela: "Transmutación",
      casting: "1 acción", range: "Personal", components: "V, S", duration: "8 horas",
      desc: "Entras en el Plano Etéreo. Ves el plano material pero no eres afectado.",
      damage: null, extra: "Sin Concentración. 8 horas."
    },
    {
      id: "finger_of_death", n: "Dedo de la Muerte [PHB]",
      nivel: "Nivel 7", escuela: "Nigromancia",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Salvación CON; fallo: 7d8+30 necrótico; éxito: mitad. Si muere: se levanta como zombi permanente.",
      damage: "7d8 + 30 Necrótico", extra: null
    },
    {
      id: "mirage_arcane", n: "Espejismo Arcano [PHB]",
      nivel: "Nivel 7", escuela: "Ilusión",
      casting: "10 minutos", range: "Alcance de visión", components: "V, S", duration: "10 días",
      desc: "Transforma el terreno visible en 1 milla de radio: apariencia, sonido, temperatura. No hace daño real.",
      damage: null, extra: null
    },
    {
      id: "plane_shift", n: "Desplazamiento Planar [PHB]",
      nivel: "Nivel 7", escuela: "Conjuración",
      casting: "1 acción", range: "Toque", components: "V, S, M (horquilla 250 po)", duration: "Instantáneo",
      desc: "Hasta 8 criaturas viajan a otro plano. Como ataque: salvación CAR o criatura desterrada.",
      damage: null, extra: null
    },
    {
      id: "prismatic_spray", n: "Chorro Prismático [PHB]",
      nivel: "Nivel 7", escuela: "Evocación",
      casting: "1 acción", range: "Personal (cono 60p)", components: "V, S", duration: "Instantáneo",
      desc: "Cono de 60 pies: 8 efectos aleatorios según color (tabla d8).",
      damage: "Variable por color (tabla d8)", extra: null
    },
    {
      id: "regenerate", n: "Regenerar [PHB]",
      nivel: "Nivel 7", escuela: "Transmutación",
      casting: "1 minuto", range: "Toque", components: "V, S, M (muérdago)", duration: "1 hora",
      desc: "4d8+15 PG inmediatos + 1 PG/turno durante 1 hora. Extremidades cercenadas rebrotan en 2 minutos.",
      damage: "4d8+15 PG + 1/turno durante 1 hora", extra: null
    },
    {
      id: "resurrection", n: "Resurrección [PHB]",
      nivel: "Nivel 7", escuela: "Nigromancia",
      casting: "1 hora", range: "Toque", components: "V, S, M (diamante 1.000 po)", duration: "Instantáneo",
      desc: "Devuelve la vida a criatura muerta hace ≤100 años. Regresa con todos sus PG. Regenera el cuerpo.",
      damage: null, extra: null
    },
    {
      id: "reverse_gravity", n: "Invertir Gravedad [PHB]",
      nivel: "Nivel 7", escuela: "Transmutación",
      casting: "1 acción", range: "100 pies", components: "V, S, M (imán)", duration: "Conc. 1 min",
      desc: "En cilindro de 50 pies de radio y 100 pies de alto la gravedad se invierte.",
      damage: null, extra: null
    },
    {
      id: "symbol", n: "Símbolo [PHB]",
      nivel: "Nivel 7", escuela: "Abjuración",
      casting: "1 minuto", range: "Toque", components: "V, S, M (mercurio 1.000 po)", duration: "Hasta activarse/10 días",
      desc: "Símbolo inscrito que al activarse crea un efecto (muerte, discordia, miedo, locura, sueño, aturdimiento o dolor).",
      damage: null, extra: null
    }
,
    {
      id: "mordenkainen_s_sword", n: "Espada de Mordenkainen [PHB]",
      nivel: "Nivel 7", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S, M (miniatura de platino 250 po)", duration: "Conc. 1 min",
      desc: "Espada flotante de fuerza mágica. Acción adicional para atacar: tirada de ataque con conjuro, 3d10 fuerza.",
      damage: "3d10 Fuerza por ataque", extra: null
    },
    {
      id: "project_image", n: "Proyectar Imagen [PHB]",
      nivel: "Nivel 7", escuela: "Ilusión",
      casting: "1 acción", range: "500 millas", components: "V, S, M (réplica pequeña 5 po)", duration: "Conc. 1 día",
      desc: "Duplicado ilusorio tuyo en lugar conocido a 500 millas. Percibes y hablas a través de él.",
      damage: null, extra: null
    },
    {
      id: "simulacrum", n: "Simulacro [PHB]",
      nivel: "Nivel 7", escuela: "Ilusión",
      casting: "12 horas", range: "Toque", components: "V, S, M (nieve, pelo y rubí en polvo 1.500 po)", duration: "Hasta dispelarse",
      desc: "Copia ilusoria de una criatura con la mitad de sus PG máx. Obedece tus órdenes. No recupera conjuros.",
      damage: null, extra: "Sin Concentración. Permanente hasta dispelado."
    },
  ],
  8:   [
    {
      id: "incendiary_cloud", n: "Nube Incendiaria",
      nivel: "Nivel 8", escuela: "Conjuración",
      casting: "1 acción", range: "150 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Nube de 20 pies de humo ardiente. Salvación DES al inicio de turno; fallo: 10d8 fuego; éxito: mitad.",
      damage: "10d8 Fuego", extra: null
    },
    {
      id: "mind_blank", n: "Mente en Blanco",
      nivel: "Nivel 8", escuela: "Abjuración",
      casting: "1 acción", range: "Toque", components: "V, S", duration: "24 horas",
      desc: "Inmunidad a daño psíquico, lectura mental, adivinación, encantamiento y cambio de personalidad.",
      damage: null, extra: "Sin Concentración. 24 horas."
    },
    {
      id: "sunburst", n: "Explosión Solar",
      nivel: "Nivel 8", escuela: "Evocación",
      casting: "1 acción", range: "150 pies", components: "V, S, M (fuego y diamante)", duration: "Instantáneo",
      desc: "Esfera de 60 pies de luz brillante. Salvación CON; fallo: 12d6 radiante + Cegado 1 min; éxito: mitad.",
      damage: "12d6 Radiante", extra: null
    },
    {
      id: "abi_dalzims_horrid_wilting", n: "Marchitamiento Horrible [XGE]",
      nivel: "Nivel 8", escuela: "Nigromancia",
      casting: "1 acción", range: "150 pies", components: "V, S, M (trozo de esponja)", duration: "Instantáneo",
      desc: "Esfera de 30 pies. Salvación CON; fallo: 12d8 necrótico; éxito: mitad. Extra daño a plantas y elementales de agua.",
      damage: "12d8 Necrótico", extra: null
    },
    {
      id: "antimagic_field", n: "Campo Antimagia [PHB]",
      nivel: "Nivel 8", escuela: "Abjuración",
      casting: "1 acción", range: "Personal (10p)", components: "V, S, M (polvo de hierro)", duration: "Conc. 1 hora",
      desc: "Esfera de 10 pies donde la magia no funciona: ningún conjuro puede lanzarse ni afectar el área.",
      damage: null, extra: null
    },
    {
      id: "control_weather", n: "Controlar el Tiempo [PHB]",
      nivel: "Nivel 8", escuela: "Transmutación",
      casting: "10 min", range: "Personal (5 millas)", components: "V, S, M (incienso)", duration: "Conc. 8 horas",
      desc: "Controlas el clima en 5 millas: precipitación, temperatura y viento.",
      damage: null, extra: null
    },
    {
      id: "demiplane", n: "Demiplane [PHB]",
      nivel: "Nivel 8", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "S", duration: "1 hora",
      desc: "Puerta a un demiplane de 30 pies cúbicos en el Plano Etéreo. Acceso solo desde esta puerta.",
      damage: null, extra: null
    },
    {
      id: "dominate_monster", n: "Dominar Monstruo [PHB]",
      nivel: "Nivel 8", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 hora",
      desc: "Cualquier tipo de criatura: salvación SAB o bajo tu control total durante 1 hora.",
      damage: null, extra: null
    },
    {
      id: "earthquake", n: "Terremoto [PHB]",
      nivel: "Nivel 8", escuela: "Evocación",
      casting: "1 acción", range: "500 pies", components: "V, S, M (arcilla, roca, palo)", duration: "Conc. 1 min",
      desc: "Terremoto en 100 pies de radio: suelo agrietado, Concentración con desventaja, criaturas pueden caer.",
      damage: null, extra: null
    },
    {
      id: "feeblemind", n: "Debilitar Mente [PHB]",
      nivel: "Nivel 8", escuela: "Encantamiento",
      casting: "1 acción", range: "150 pies", components: "V, S, M (arcilla y cristal)", duration: "Instantáneo",
      desc: "Salvación INT; fallo: 4d6 psíquico + INT y CAR reducidos a 1. No puede lanzar conjuros ni comunicarse.",
      damage: "4d6 Psíquico + INT/CAR reducidos a 1", extra: null
    },
    {
      id: "maddening_darkness", n: "Oscuridad Enloquecedora [XGE]",
      nivel: "Nivel 8", escuela: "Evocación",
      casting: "1 acción", range: "150 pies", components: "V, M (gota de brea)", duration: "Conc. 10 min",
      desc: "Esfera de 60 pies de oscuridad mágica. Criaturas que empiecen ahí: salvación SAB o 8d8 psíquico.",
      damage: "8d8 Psíquico", extra: null
    },
    {
      id: "maze", n: "Laberinto [PHB]",
      nivel: "Nivel 8", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 10 min",
      desc: "Una criatura enviada a laberinto extradimensional. Acción: INT CD 20 para escapar.",
      damage: null, extra: null
    },
    {
      id: "power_word_stun", n: "Palabra de Poder: Aturdir [PHB]",
      nivel: "Nivel 8", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
      desc: "Criatura con ≤150 PG: Aturdida. Repite salvación CON al final de cada turno para terminar.",
      damage: null, extra: null
    },
    {
      id: "tsunami", n: "Tsunami [PHB]",
      nivel: "Nivel 8", escuela: "Conjuración",
      casting: "1 minuto", range: "Alcance visual", components: "V, S", duration: "Conc. 6 turnos",
      desc: "Pared de agua de hasta 300×300×50 pies. Criaturas que fallen FUE: empujadas y sumergidas.",
      damage: "6d10 Contundente (crece cada turno)", extra: null
    }
,
    {
      id: "clone", n: "Clon [PHB]",
      nivel: "Nivel 8", escuela: "Nigromancia",
      casting: "1 hora", range: "Toque", components: "V, S, M (diamante 1.000 po + recipiente de cristal 2.000 po)", duration: "Instantáneo",
      desc: "Creas un clon inerte de una criatura. Si ella muere, su alma migra al clon que despierta con todos sus PG.",
      damage: null, extra: "Permanente."
    },
    {
      id: "holy_aura", n: "Aura Sagrada [PHB]",
      nivel: "Nivel 8", escuela: "Abjuración",
      casting: "1 acción", range: "30 pies", components: "V, S, M (relicario 1.000 po)", duration: "Conc. 1 min",
      desc: "Criaturas elegidas brillan con luz divina: ventaja en salvaciones, desventaja en ataques contra ellas. Atacantes infernales o no-muertos quedan Cegados.",
      damage: null, extra: null
    },
  ],
  9:   [
    {
      id: "wish", n: "Deseo",
      nivel: "Nivel 9", escuela: "Conjuración",
      casting: "1 acción", range: "Personal", components: "V", duration: "Instantáneo",
      desc: "El conjuro más poderoso. Puede duplicar cualquier hechizo de Nv.8 o menos, o pedir algo único al DM.",
      damage: "Ilimitado (con riesgos)", extra: "33% de perder el conjuro permanentemente."
    },
    {
      id: "meteor_swarm", n: "Lluvia de Meteoros",
      nivel: "Nivel 9", escuela: "Evocación",
      casting: "1 acción", range: "1 milla", components: "V, S", duration: "Instantáneo",
      desc: "4 esferas de 40 pies de radio. Salvación DES; fallo: 20d6 fuego + 20d6 contundente; éxito: mitad.",
      damage: "20d6 Fuego + 20d6 Contundente × 4 puntos", extra: null
    },
    {
      id: "true_polymorph", n: "Polimorfismo Verdadero",
      nivel: "Nivel 9", escuela: "Transmutación",
      casting: "1 acción", range: "30 pies", components: "V, S, M (capullo de oruga)", duration: "Conc. 1 hora",
      desc: "Como Polimorfismo pero también transforma objetos en criaturas y viceversa. Si dura 1 hora completa: permanente.",
      damage: null, extra: "Si persiste 1 hora completa, el efecto se vuelve permanente."
    },
    {
      id: "astral_projection", n: "Proyección Astral [PHB]",
      nivel: "Nivel 9", escuela: "Nigromancia",
      casting: "1 hora", range: "10 pies", components: "V, S, M (jacinto 1.000 po + plata)", duration: "Especial",
      desc: "Tú y hasta 8 criaturas proyectan sus almas al Plano Astral.",
      damage: null, extra: null
    },
    {
      id: "foresight", n: "Previsión [PHB]",
      nivel: "Nivel 9", escuela: "Adivinación",
      casting: "1 minuto", range: "Toque", components: "V, S, M (pluma de colibrí)", duration: "8 horas",
      desc: "Ventaja en ataques, pruebas y salvaciones; ataques contra ti con desventaja.",
      damage: null, extra: "Sin Concentración. 8 horas."
    },
    {
      id: "gate", n: "Portal [PHB]",
      nivel: "Nivel 9", escuela: "Conjuración",
      casting: "1 acción", range: "60 pies", components: "V, S, M (diamante 5.000 po)", duration: "Conc. 1 min",
      desc: "Abre un portal a otro plano. Puede invocar a una criatura específica para que cruce.",
      damage: null, extra: null
    },
    {
      id: "imprisonment", n: "Encarcelamiento [PHB]",
      nivel: "Nivel 9", escuela: "Abjuración",
      casting: "1 minuto", range: "30 pies", components: "V, S, M (componente 500 po)", duration: "Hasta dispelarse",
      desc: "Salvación SAB o encerrada permanentemente en 1 de 6 modos (cadenas, entierro, hibernación, etc.).",
      damage: null, extra: null
    },
    {
      id: "mass_heal", n: "Curación en Masa [PHB]",
      nivel: "Nivel 9", escuela: "Evocación",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
      desc: "Reparte hasta 700 PG entre criaturas visibles a tu elección. Termina enfermedades y condiciones.",
      damage: "700 PG repartibles", extra: null
    },
    {
      id: "power_word_kill", n: "Palabra de Poder: Matar [PHB]",
      nivel: "Nivel 9", escuela: "Encantamiento",
      casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
      desc: "Criatura con ≤100 PG muere instantáneamente. Sin tirada de salvación.",
      damage: "Muerte instantánea (≤100 PG)", extra: null
    },
    {
      id: "prismatic_wall", n: "Muro Prismático [PHB]",
      nivel: "Nivel 9", escuela: "Abjuración",
      casting: "1 acción", range: "60 pies", components: "V, S", duration: "10 min",
      desc: "Pared de 90×30 pies con 7 capas de luz de colores. Cada capa aplica un efecto distinto al cruzarla.",
      damage: "Variable por capa (7 capas distintas)", extra: null
    },
    {
      id: "time_stop", n: "Parada del Tiempo [PHB]",
      nivel: "Nivel 9", escuela: "Transmutación",
      casting: "1 acción", range: "Personal", components: "V", duration: "Instantáneo",
      desc: "El tiempo se detiene para todos excepto tú. Tomas 1d4+1 turnos extra. Termina si afectas a otra criatura.",
      damage: null, extra: null
    },
    {
      id: "weird", n: "Espanto [PHB]",
      nivel: "Nivel 9", escuela: "Ilusión",
      casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
      desc: "Esfera de 30 pies. Salvación SAB; fallo: Asustada. Cada turno: salvación SAB o 4d10 psíquico.",
      damage: "4d10 Psíquico/turno", extra: null
    }
,
    {
      id: "shapechange", n: "Cambio de Forma [PHB]",
      nivel: "Nivel 9", escuela: "Transmutación",
      casting: "1 acción", range: "Personal", components: "V, S, M (perla 1.500 po y escamas de serpiente)", duration: "Conc. 1 hora",
      desc: "Te transformas en cualquier criatura de CR ≤ tu nivel. Mantienes INT, SAB, CAR y habilidades de clase.",
      damage: null, extra: null
    },
    {
      id: "true_resurrection", n: "Resurrección Verdadera [PHB]",
      nivel: "Nivel 9", escuela: "Nigromancia",
      casting: "1 hora", range: "Toque", components: "V, S, M (diamantes 25.000 po)", duration: "Instantáneo",
      desc: "Resucita criatura muerta hace ≤200 años. Crea un cuerpo nuevo. Funciona aunque haya sido desintegrada.",
      damage: null, extra: null
    },
  ],
};
