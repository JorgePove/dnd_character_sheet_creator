/* ══════════════════════════════════════════════════════════
   hechizos-nivel-5.js — Conjuros de Nivel 5 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · IDRotF
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_5 = [
  {
    id: "animate_objects", n: "Animar Objetos [PHB]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Animas hasta 10 objetos no mágicos no llevados. Diminutos: 10 (1d4+4/ataque, +2 hit). Pequeños: 5 (1d8+2, +2). Medianos: 2 (2d6+2, +2). Grande: 1 (2d10+2, +2). Enorme: 1 (2d12+2, +2). Escala: +2 Diminutos/nivel.",
    damage: "Varía por tamaño (escala)", extra: null
  },
  {
    id: "antilife_shell", n: "Capa Contra la Vida [PHB]",
    nivel: "Nivel 5", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S", duration: "Conc. 1 hora",
    desc: "Barrera de 10 pies de radio que impide el paso a criaturas vivas (no-muertos y constructos no están afectados). Las criaturas no pueden voluntariamente entrar.",
    damage: null, extra: null
  },
  {
    id: "awaken", n: "Despertar [PHB]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "8 horas", range: "Toque", components: "V, S, M (ágata de 1000 po)", duration: "Instantáneo",
    desc: "Tocas una bestia o planta Enorme o menor. Gana INT 10 si era inferior, aprende un idioma que conozcas y puede hablar. Sus estadísticas mejoran. Queda encantada por ti 30 días.",
    damage: null, extra: null
  },
  {
    id: "banishing_smite", n: "Golpe Desterrador [PHB]",
    nivel: "Nivel 5", escuela: "Abjuración",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Próximo impacto con arma: +5d10 de fuerza. Si el objetivo cae a 50 PG o menos, queda desterrado (como el conjuro Destierro).",
    damage: "+5d10 Fuerza", extra: null
  },
  {
    id: "bigbys_hand", n: "Mano de Bigby [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (guante de cuero)", duration: "Conc. 1 min",
    desc: "Mano de fuerza enorme (CA 20, PG = tu máximo). Elige función cada turno: Puño (4d8 fuerza, empujar 5 pies), Aferrar (FUE vs. tu CD), Interponerse (+4 CA), Apuntar (ventaja en siguiente ataque). Escala: +2d8/nivel.",
    damage: "4d8 Fuerza (escala)", extra: null
  },
  {
    id: "circle_of_power", n: "Círculo de Poder [PHB]",
    nivel: "Nivel 5", escuela: "Abjuración",
    casting: "1 acción", range: "Personal (30 pies)", components: "V", duration: "Conc. 10 min",
    desc: "Aura de 30 pies. Aliados dentro tienen ventaja en salvaciones contra efectos mágicos. Si pasan una salvación que permite mitad de daño, no reciben daño.",
    damage: null, extra: null
  },
  {
    id: "commune", n: "Comunión [PHB]",
    nivel: "Nivel 5", escuela: "Adivinación",
    casting: "1 minuto (ritual)", range: "Personal", components: "V, S, M (incienso+vial de agua bendita/maldita)", duration: "1 min",
    desc: "Contactas a tu deidad o servidores divinos. Puedes hacer 3 preguntas de respuesta sí/no. Las respuestas son verídicas pero pueden ser esquivas.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "commune_with_nature", n: "Comunión con la Naturaleza [PHB]",
    nivel: "Nivel 5", escuela: "Adivinación",
    casting: "1 minuto (ritual)", range: "Personal", components: "V, S", duration: "Instantáneo",
    desc: "Te fundes brevemente con la naturaleza. Conoces hasta 3 datos del entorno en 3 millas (interior: 300 pies): tipo de terreno, cuerpos de agua, prevalencia de bestias/plantas, edificaciones, criaturas poderosas, planos.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "cone_of_cold", n: "Cono de Frío [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cono 60p)", components: "V, S, M (cristal o vidrío)", duration: "Instantáneo",
    desc: "Cono de 60 pies de aire congelado. Salvación CON o 8d8 frío, mitad si tiene éxito. Criaturas muertas por este conjuro se congelan estáticamente. Escala: +1d8/nivel.",
    damage: "8d8 Frío (escala)", extra: null
  },
  {
    id: "contact_other_plane", n: "Contactar Otro Plano [PHB]",
    nivel: "Nivel 5", escuela: "Adivinación",
    casting: "1 minuto (ritual)", range: "Personal", components: "V", duration: "1 min",
    desc: "Contactas mentalmente a un semidiós, espíritu de un sabio muerto o una entidad de otro plano. Puedes hacer 5 preguntas sí/no. Fallo en salvación INT CD 15: locura temporal.",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "contagion", n: "Contagio [PHB]",
    nivel: "Nivel 5", escuela: "Nigromancia",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "7 días",
    desc: "Ataque de conjuro cuerpo a cuerpo. Si impacta: tras 3 fallos de CON seguidos (al inicio de cada turno), la criatura queda afligida con enfermedad elegida (Cegada, Debilitada, Plaga, Pestilencia, Fiebre del Mal).",
    damage: null, extra: null
  },
  {
    id: "control_winds", n: "Controlar Vientos [XGE]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "1 acción", range: "300 pies", components: "V, S", duration: "Conc. 1 hora",
    desc: "Controlas el viento en un cubo de 100 pies: Corriente Ascendente (vuelo difícil hacia abajo), Ráfaga (criaturas: FUE o empujadas 15 pies + DES en ataques a distancia), o Calma (sin viento).",
    damage: null, extra: null
  },
  {
    id: "creation", n: "Creación [PHB]",
    nivel: "Nivel 5", escuela: "Ilusión",
    casting: "1 minuto", range: "30 pies", components: "V, S, M (polvo de oro de Shadowfell)", duration: "Especial",
    desc: "Creas un objeto de material vegetal (hasta 5 pies cúbicos) durante días = nivel. O mineral (1 pie cúbico) durante 12 horas. El objeto desaparece al terminar.",
    damage: null, extra: null
  },
  {
    id: "dawn", n: "Alba [XGE]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (bengala de sol)", duration: "Conc. 1 min",
    desc: "Cilindro de luz solar de 30 pies de radio, 40 de alto. Criaturas que entren o inicien turno: salvación CON o 4d10 radiante, mitad si tienen éxito. No-muertos y hongos desventaja. Puedes moverlo 60 pies por Acción Adicional.",
    damage: "4d10 Radiante", extra: null
  },
  {
    id: "destructive_wave", n: "Onda Destructiva [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "Personal (30 pies)", components: "V", duration: "Instantáneo",
    desc: "Energía divina en 30 pies. Salvación CON o 5d6 trueno + 5d6 radiante o necrótico, mitad si tienen éxito. Las que fallen también quedan tumbadas.",
    damage: "5d6 Trueno + 5d6 Radiante/Necrótico", extra: null
  },
  {
    id: "dispel_evil_and_good", n: "Disipar el Mal y el Bien [PHB]",
    nivel: "Nivel 5", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S, M (agua bendita/polvo de plata/hierro)", duration: "Conc. 1 min",
    desc: "Elige un efecto: Protección Brillante (desventaja en ataques de aberraciones/celestiales/elementales/feéricos/infernales/no-muertos), Ruptura de Encantamiento (toca a criatura Hechizada por esas criaturas), o Destierro (toca a una de esas criaturas: CAR o desterrada).",
    damage: null, extra: null
  },
  {
    id: "dominate_person", n: "Dominar Persona [PHB]",
    nivel: "Nivel 5", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Un humanoide: salvación SAB o bajo tu control telepático. Puedes darle órdenes como Acción Adicional. Repite la salvación cada vez que recibe daño. Escala: duración aumenta según nivel.",
    damage: null, extra: null
  },
  {
    id: "dream", n: "Sueño [PHB]",
    nivel: "Nivel 5", escuela: "Ilusión",
    casting: "1 minuto", range: "Especial", components: "V, S, M (puñado de arena/pequeño cuerno/pluma de pájaro)", duration: "8 horas",
    desc: "Entras en el sueño de una criatura durmiente conocida (en cualquier plano). Puedes moldear el sueño. Si lo conviertes en pesadilla: salvación SAB o no descansa y 3d6 psíquico.",
    damage: "3d6 Psíquico (pesadilla)", extra: null
  },
  {
    id: "enervation", n: "Enervación [XGE]",
    nivel: "Nivel 5", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Rayo de energía debilitante. Ataque de conjuro a distancia: 4d8 necrótico y la mitad de ese daño lo recuperas como PG. Cada turno: nueva tirada de ataque como Acción. Escala: +1d8/nivel.",
    damage: "4d8 Necrótico (escala)", extra: null
  },
  {
    id: "far_step", n: "Paso Lejano [XGE]",
    nivel: "Nivel 5", escuela: "Conjuración",
    casting: "1 acción adicional", range: "Personal", components: "V", duration: "Conc. 1 min",
    desc: "Te teletransportas hasta 60 pies a un espacio vacío visible. Mientras dure la concentración, puedes teletransportarte de nuevo como Acción Adicional cada turno.",
    damage: null, extra: null
  },
  {
    id: "geas", n: "Geas [PHB]",
    nivel: "Nivel 5", escuela: "Encantamiento",
    casting: "1 minuto", range: "60 pies", components: "V", duration: "30 días",
    desc: "Impones una orden mágica a una criatura que entienda tu idioma. Salvación SAB o está obligada a seguirla. Si viola la orden: 5d10 psíquico 1 vez/día. Escala: duración y daño según nivel.",
    damage: "5d10 Psíquico (por violación)", extra: null
  },
  {
    id: "greater_restoration", n: "Restauración Mayor [PHB]",
    nivel: "Nivel 5", escuela: "Abjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (polvo de diamante 100 po)", duration: "Instantáneo",
    desc: "Elimina un efecto que: reduzca las estadísticas o PG máximos, cause agotamiento, Encante o Petrificación, o una maldición incluyendo sintonización con objeto maldito.",
    damage: null, extra: null
  },
  {
    id: "hallow", n: "Santificar [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "24 horas", range: "Toque", components: "V, S, M (hierbas, aceites y ofrendas 1000 po)", duration: "Hasta disipar",
    desc: "Santificas o profanas un área de 60 pies de radio. El área: bloquea ciertos tipos de criaturas, impide teletransporte, neutraliza miedo/encanto, u otros efectos divinos a elección.",
    damage: null, extra: null
  },
  {
    id: "hold_monster", n: "Mantener Monstruo [PHB]",
    nivel: "Nivel 5", escuela: "Encantamiento",
    casting: "1 acción", range: "90 pies", components: "V, S, M (pequeño fragmento de hierro recto)", duration: "Conc. 1 min",
    desc: "Una criatura de cualquier tipo (no solo humanoide): salvación SAB o queda Paralizada. Repite la salvación al final de cada turno. Escala: +1 objetivo/nivel.",
    damage: null, extra: null
  },
  {
    id: "holy_weapon", n: "Arma Sagrada [XGE]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción adicional", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
    desc: "Infundes un arma con energía sagrada. Se vuelve mágica si no lo era y añade +2d8 radiante en cada golpe. Como Acción puedes terminar el conjuro: explosión de luz brillante de 30 pies (salvación CON o cegado 1 minuto).",
    damage: "+2d8 Radiante", extra: null
  },
  {
    id: "immolation", n: "Inmolación [XGE]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "90 pies", components: "V", duration: "Conc. 1 min",
    desc: "Llamas en una criatura. Ataque de conjuro a distancia: 8d6 fuego. Cada turno: repite el ataque automáticamente sin tirada (8d6 fuego). Si muere, se desintegra en cenizas.",
    damage: "8d6 Fuego/turno", extra: null
  },
  {
    id: "infernal_calling", n: "Llamada Infernal [XGE]",
    nivel: "Nivel 5", escuela: "Conjuración",
    casting: "1 minuto", range: "90 pies", components: "V, S, M (rubí 999 po)", duration: "Conc. 1 hora",
    desc: "Convocas un diablo de CR 6 o inferior. No obedece automáticamente; intenta corromperte. Cada turno: salvación CAR vs. tu CD para que obedezca. Si muere, puede volver al Infierno.",
    damage: null, extra: null
  },
  {
    id: "insect_plague", n: "Plaga de Insectos [PHB]",
    nivel: "Nivel 5", escuela: "Conjuración",
    casting: "1 acción", range: "300 pies", components: "V, S, M (unos cuantos granos de azúcar/pizca de grasa/pequeña trampa)", duration: "Conc. 10 min",
    desc: "Nube de langostas en esfera de 20 pies de radio. Oscurecida. Criaturas que entren o inicien turno: salvación CON o 4d10 perforante, mitad si tienen éxito. Escala: +1d10/nivel.",
    damage: "4d10 Perforante (escala)", extra: null
  },
  {
    id: "legend_lore", n: "Leyenda y Lore [PHB]",
    nivel: "Nivel 5", escuela: "Adivinación",
    casting: "10 minutos", range: "Personal", components: "V, S, M (incienso 250 po + tablillas de marfil 50 po)", duration: "Instantáneo",
    desc: "Nombras o describes una persona, lugar u objeto. La magia te trae información significativa sobre el tema si existe en la leyenda.",
    damage: null, extra: null
  },
  {
    id: "maelstrom", n: "Maelstrom [XGE]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (papel enrollado)", duration: "Conc. 1 min",
    desc: "Torbellino de agua de 30 pies de radio, 5 de profundo. Terreno difícil. Criaturas que inicien turno ahí: salvación FUE o 6d6 contundente y atraídas 10 pies al centro.",
    damage: "6d6 Contundente", extra: null
  },
  {
    id: "mass_cure_wounds", n: "Curar Heridas en Masa [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Hasta 6 criaturas visibles en radio de 30 pies recuperan 3d8 + mod. de lanzamiento PG. Escala: +1d8/nivel.",
    damage: "Cura 3d8+mod (escala)", extra: null
  },
  {
    id: "mislead", n: "Engañar [PHB]",
    nivel: "Nivel 5", escuela: "Ilusión",
    casting: "1 acción", range: "Personal", components: "S", duration: "Conc. 1 hora",
    desc: "Te vuelves invisible y creas un duplicado ilusorio tuyo en tu posición actual. Puedes mover el duplicado y hablar a través de él. Mientras estés invisible, puedes ver y oír a través del duplicado.",
    damage: null, extra: null
  },
  {
    id: "modify_memory", n: "Modificar Memoria [PHB]",
    nivel: "Nivel 5", escuela: "Encantamiento",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Una criatura: salvación SAB o Hechizada e Incapacitada. Puedes alterar un recuerdo de los últimos 24 horas (hasta 10 minutos). Escala: rango de tiempo ampliable según nivel.",
    damage: null, extra: null
  },
  {
    id: "passwall", n: "Cruzar Muros [PHB]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (sésamo)", duration: "1 hora",
    desc: "Creas un pasaje de 5×8×20 pies en madera, yeso o piedra. El pasaje dura 1 hora y luego cierra (las criaturas dentro salen expulsadas al espacio más cercano).",
    damage: null, extra: null
  },
  {
    id: "planar_binding", n: "Vinculación Planar [PHB]",
    nivel: "Nivel 5", escuela: "Abjuración",
    casting: "1 hora", range: "60 pies", components: "V, S, M (joya 1000 po que consume)", duration: "24 horas",
    desc: "Intentas vincular a una criatura celestial, elemental, feérica o infernal (CR ≤ nivel): salvación CAR o queda obligada a obedecerte. Escala: duración aumenta con el nivel.",
    damage: null, extra: null
  },
  {
    id: "raise_dead", n: "Resucitar Muertos [PHB]",
    nivel: "Nivel 5", escuela: "Nigromancia",
    casting: "1 hora", range: "Toque", components: "V, S, M (diamante 500 po)", duration: "Instantáneo",
    desc: "Devuelves a la vida a una criatura muerta hace no más de 10 días. Regresa con 1 PG. Penalización durante 4 días: -4 a ataques, salvaciones y tiradas de habilidad.",
    damage: null, extra: null
  },
  {
    id: "rapid_quiver", n: "Carcaj Rápido [PHB]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Puedes usar Acción Adicional para realizar hasta 2 ataques no mágicos con arma a distancia, sin gastar munición de tu carcaj.",
    damage: null, extra: null
  },
  {
    id: "reincarnate", n: "Reencarnación [PHB]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "1 hora", range: "Toque", components: "V, S, M (aceites y ungüentos 1000 po)", duration: "Instantáneo",
    desc: "Devuelves el alma de una criatura muerta hace no más de 10 días a un cuerpo nuevo de forma aleatoria (humano, enano, elfo, etc., según tabla).",
    damage: null, extra: null
  },
  {
    id: "scrying", n: "Escudriñar [PHB]",
    nivel: "Nivel 5", escuela: "Adivinación",
    casting: "10 minutos", range: "Personal", components: "V, S, M (espejo de plata 1000 po)", duration: "Conc. 10 min",
    desc: "Ves y oyes a través de un sensor invisible junto a una criatura en el mismo plano. Salvación SAB (modificada por tu familiaridad con ella). Puedes ver el entorno a través del sensor.",
    damage: null, extra: null
  },
  {
    id: "seeming", n: "Aparentar [PHB]",
    nivel: "Nivel 5", escuela: "Ilusión",
    casting: "1 acción", range: "30 pies", components: "V, S", duration: "8 horas",
    desc: "Cambias la apariencia de cualquier número de criaturas que puedas ver en 30 pies. Cada una puede parecer diferente en tamaño hasta 1 pie de diferencia. Investigación vs. tu CD para descreer.",
    damage: null, extra: null
  },
  {
    id: "skill_empowerment", n: "Potenciar Habilidad [XGE]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S", duration: "Conc. 1 hora",
    desc: "Criatura tocada: doble competencia en 1 habilidad en la que ya tenga competencia.",
    damage: null, extra: null
  },
  {
    id: "steel_wind_strike", n: "Golpe de Viento de Acero [XGE]",
    nivel: "Nivel 5", escuela: "Conjuración",
    casting: "1 acción", range: "30 pies", components: "S, M (espada o hacha)", duration: "Instantáneo",
    desc: "Te teletransportas trazando ataques. Ataca hasta 5 criaturas a 30 pies (ataque de conjuro cuerpo a cuerpo, 6d10 de fuerza cada una). Apareces en el espacio de la última.",
    damage: "6d10 Fuerza/objetivo", extra: null
  },
  {
    id: "summon_celestial", n: "Convocar Celestial [TCE]",
    nivel: "Nivel 5", escuela: "Conjuración",
    casting: "1 acción", range: "90 pies", components: "V, S, M (oro 500 po)", duration: "Conc. 1 hora",
    desc: "Convocas un espíritu celestial (Ave de Fuego o Pegaso de Luz). Sus estadísticas escalan con el nivel. Te obedece y puede curar.",
    damage: null, extra: null
  },
  {
    id: "synaptic_static", n: "Estática Sináptica [XGE]",
    nivel: "Nivel 5", escuela: "Encantamiento",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Instantáneo",
    desc: "Interferencia psíquica en esfera de 20 pies de radio. Salvación INT o 8d6 psíquico y restan 1d6 a tiradas de ataque, tiradas de habilidad y salvaciones de CON hasta que despejen la mente (Acción).",
    damage: "8d6 Psíquico", extra: null
  },
  {
    id: "telekinesis", n: "Telequinesia [PHB]",
    nivel: "Nivel 5", escuela: "Transmutación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Conc. 10 min",
    desc: "Mueves objetos o criaturas con la mente. Objeto (500 libras): mueves 30 pies. Criatura: FUE vs. tu CD o la mueves 30 pies (Restringida si falla continuamente).",
    damage: null, extra: null
  },
  {
    id: "telepathic_bond", n: "Vínculo Telepático [PHB]",
    nivel: "Nivel 5", escuela: "Adivinación",
    casting: "1 acción (ritual)", range: "30 pies", components: "V, S, M (cáscaras de huevo de fénix)", duration: "1 hora",
    desc: "Hasta 8 criaturas voluntarias comparten un vínculo telepático. Pueden comunicarse mentalmente entre sí independientemente del idioma y la distancia (mismo plano).",
    damage: null, extra: "Puede lanzarse como ritual."
  },
  {
    id: "teleportation_circle", n: "Círculo de Teletransporte [PHB]",
    nivel: "Nivel 5", escuela: "Conjuración",
    casting: "1 minuto", range: "10 pies", components: "V, M (mercurio+fósforo+polvo de diamante 50 po)", duration: "1 turno",
    desc: "Creas un portal que conecta con un círculo de teletransporte permanente conocido en el mismo plano. Cualquier criatura que entre es teletransportada allí.",
    damage: null, extra: null
  },
  {
    id: "tree_stride", n: "Zancada Arbórea [PHB]",
    nivel: "Nivel 5", escuela: "Conjuración",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "Conc. 1 min",
    desc: "Entras en un árbol vivo de tu tamaño o mayor y emerges de otro árbol similar a 500 pies. Como Acción Adicional puedes moverte así cada turno. Ambos árboles deben ser del mismo tipo.",
    damage: null, extra: null
  },
  {
    id: "wall_of_force", n: "Muro de Fuerza [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (pizca de polvo de cuarzo)", duration: "Conc. 10 min",
    desc: "Muro invisible de fuerza de hasta 10 paneles de 10 pies (o esfera/hemisferio de 10 pies de radio). Indestructible durante la duración. Nada puede cruzarlo físicamente ni mágicamente (excepto Desintegrar).",
    damage: null, extra: null
  },
  {
    id: "wall_of_stone", n: "Muro de Piedra [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (granito pequeño)", duration: "Conc. 10 min",
    desc: "Muro de piedra sólida no mágica: hasta 10 paneles de 10×10 pies, 6 pulgadas de grosor. Puede ser permanente si se mantiene 10 minutos. Criaturas que queden atrapadas: DES o quedan en la pared (3d6 contundente).",
    damage: "3d6 Contundente (si atrapa)", extra: null
  },
  {
    id: "whirlwind", n: "Torbellino de Llamas [PHB]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "Personal (10 pies)", components: "V, S", duration: "Conc. 1 min",
    desc: "Anillo de llamas de 10 pies de radio. Criaturas que entren o inicien turno: salvación DES o 2d6 fuego. Puedes moverlo 30 pies como Acción Adicional. Escala: +1d6/nivel.",
    damage: "2d6 Fuego (escala)", extra: null
  },
  {
    id: "wrath_of_nature", n: "Ira de la Naturaleza [XGE]",
    nivel: "Nivel 5", escuela: "Evocación",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Las plantas, piedras y árboles en radio de 60 pies cobran vida y atacan a tus enemigos. Criaturas en el área: terreno difícil, ramas atacan (2d6 cortante, salvación DES), piedras golpean (4d4 contundente, salvación DES).",
    damage: "2d6 Cortante + 4d4 Contundente", extra: null
  },
];
