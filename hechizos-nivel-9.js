/* ══════════════════════════════════════════════════════════
   hechizos-nivel-9.js — Conjuros de Nivel 9 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_9 = [
  {
    id: "astral_projection", n: "Proyección Astral [PHB]",
    nivel: "Nivel 9", escuela: "Nigromancia",
    casting: "1 hora", range: "10 pies", components: "V, S, M (jacinto+barra de plata 100 po c/u por criatura)", duration: "Especial",
    desc: "Tú y hasta 8 aliados voluntarios proyectáis vuestras consciencias al Plano Astral. Vuestros cuerpos físicos quedan en trance en el plano de origen. Al morir en el Astral, regresáis a vuestros cuerpos.",
    damage: null, extra: null
  },
  {
    id: "foresight", n: "Previsión [PHB]",
    nivel: "Nivel 9", escuela: "Adivinación",
    casting: "1 minuto", range: "Toque", components: "V, S, M (pluma de colibrí)", duration: "8 horas",
    desc: "Criatura tocada nunca puede ser sorprendida, tiene ventaja en ataques, tiradas de habilidad y salvaciones, y los ataques contra ella tienen desventaja. Sin Concentración.",
    damage: null, extra: null
  },
  {
    id: "gate", n: "Portal [PHB]",
    nivel: "Nivel 9", escuela: "Conjuración",
    casting: "1 acción", range: "60 pies", components: "V, S, M (diamante 5000 po)", duration: "Conc. 1 min",
    desc: "Abres un portal circular de 5 a 20 pies a otro plano de existencia. Puedes nombrar a una criatura específica para que el portal la atraiga (CAR o se ve arrastrada a través). Cualquier criatura puede cruzarlo voluntariamente.",
    damage: null, extra: null
  },
  {
    id: "imprisonment", n: "Encarcelamiento [PHB]",
    nivel: "Nivel 9", escuela: "Abjuración",
    casting: "1 minuto", range: "30 pies", components: "V, S, M (retrato o imagen tallada 500 po)", duration: "Hasta disipar",
    desc: "Una criatura: salvación SAB o aprisionada de la forma que elijas: Encadenada (restringida en su lugar), Empotrada (enterrada en tierra), Enjaulada (jaula de fuerza), Adormecida (suspensión animada), Miniaturizada (congelada en recipiente).",
    damage: null, extra: null
  },
  {
    id: "invulnerability", n: "Invulnerabilidad [XGE]",
    nivel: "Nivel 9", escuela: "Abjuración",
    casting: "1 acción", range: "Personal", components: "V, S, M (pequeño trozo de adamantina 500 po)", duration: "Conc. 10 min",
    desc: "Eres inmune a todo daño durante la duración.",
    damage: null, extra: null
  },
  {
    id: "mass_heal", n: "Curación Masiva [PHB]",
    nivel: "Nivel 9", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Energía curativa se extiende a criaturas en 60 pies. Distribuyes hasta 700 PG entre cualquier número de criaturas visibles. También termina con ceguera, sordera y enfermedades.",
    damage: "Cura hasta 700 PG distribuidos", extra: null
  },
  {
    id: "mass_polymorph", n: "Polimorfia en Masa [XGE]",
    nivel: "Nivel 9", escuela: "Transmutación",
    casting: "1 acción", range: "120 pies", components: "V, S, M (gusano cocido)", duration: "Conc. 1 hora",
    desc: "Hasta 10 criaturas visibles en esfera de 120 pies. Salvación SAB o transformadas en bestias de CR igual o inferior al suyo (o Nv./4). Si llegan a 0 PG, revierten. Escala: sin cambios.",
    damage: null, extra: null
  },
  {
    id: "meteor_swarm", n: "Lluvia de Meteoros [PHB]",
    nivel: "Nivel 9", escuela: "Evocación",
    casting: "1 acción", range: "1 milla", components: "V, S", duration: "Instantáneo",
    desc: "4 meteoros caen en 4 puntos distintos a 1 milla (mínimo 40 pies entre sí). Cada uno: esfera 40 pies, salvación DES o 20d6 fuego + 20d6 contundente, mitad si tienen éxito. Las áreas pueden superponerse.",
    damage: "20d6 Fuego + 20d6 Contundente × 4", extra: null
  },
  {
    id: "nightmare", n: "Pesadilla [PHB]",
    nivel: "Nivel 9", escuela: "Ilusión",
    casting: "1 minuto", range: "Especial", components: "V, S, M (puñado de arena negra/rosa seca)", duration: "8 horas",
    desc: "Entras en el sueño de una criatura y le infundes una pesadilla imposible de despertar. La criatura no descansa y sufre 3d6 psíquico al despertar. También puedes enviar mensajes a través del sueño.",
    damage: "3d6 Psíquico al despertar", extra: null
  },
  {
    id: "power_word_kill", n: "Palabra de Poder: Matar [PHB]",
    nivel: "Nivel 9", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Una criatura con 100 PG o menos muere instantáneamente. Si tiene más de 100 PG, el conjuro no tiene efecto.",
    damage: "Muerte instantánea (≤100 PG)", extra: null
  },
  {
    id: "prismatic_wall", n: "Muro Prismático [PHB]",
    nivel: "Nivel 9", escuela: "Abjuración",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "10 min",
    desc: "Muro de 90×30 pies (o esfera de 30 pies de radio) de 7 capas de color. Cada capa tiene propiedad única (fuego, ácido, rayo, veneno, frío, fuerza, extradimensional). Solo conjuros o colores específicos pueden desactivar cada capa.",
    damage: "10d6 por capa (múltiples tipos)", extra: null
  },
  {
    id: "shapechange", n: "Cambio de Forma [PHB]",
    nivel: "Nivel 9", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S, M (escama de dragón+pluma de fénix 1500 po)", duration: "Conc. 1 hora",
    desc: "Te transformas en una criatura diferente con CR igual o inferior a tu nivel. Puedes ser bestia, elemental, feérico, no-muerto, constructo (si tienes conjuros). Ganas todos sus rasgos. Puedes cambiar de forma cada turno como Acción Adicional.",
    damage: null, extra: null
  },
  {
    id: "storm_of_vengeance", n: "Tormenta de Venganza [PHB]",
    nivel: "Nivel 9", escuela: "Conjuración",
    casting: "1 acción", range: "Vista", components: "V, S", duration: "Conc. 1 min",
    desc: "Nube de tormenta de 360 pies de radio. Turno 1: rayos (10d6 trueno, CON mitad). Turno 2: granizo ácido (1d6 ácido). Turnos 3-5: lluvia ácida (1d6 ácido). Turno 6: granizo (2d6 frío). Al terminar: ventarrón (FUE o tumbado).",
    damage: "10d6 Trueno + efectos por turno", extra: null
  },
  {
    id: "time_stop", n: "Parar el Tiempo [PHB]",
    nivel: "Nivel 9", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V", duration: "Instantáneo",
    desc: "El tiempo se detiene para todas las criaturas excepto tú. Realizas 1d4+1 turnos consecutivos. El tiempo reanuda si afectas a otra criatura o a un objeto que lleve.",
    damage: null, extra: null
  },
  {
    id: "true_polymorph", n: "Polimorfismo Verdadero [PHB]",
    nivel: "Nivel 9", escuela: "Transmutación",
    casting: "1 acción", range: "30 pies", components: "V, S, M (gota de mercurio+ámbar+polvo de alabastro)", duration: "Conc. 1 hora",
    desc: "Transforma a una criatura u objeto en otra forma. Criatura → criatura (CR ≤ objetivo), criatura → objeto, objeto → criatura (CR ≤ mitad del nivel del lanzador). Si se mantiene 1 hora, se vuelve permanente.",
    damage: null, extra: null
  },
  {
    id: "true_resurrection", n: "Resurrección Verdadera [PHB]",
    nivel: "Nivel 9", escuela: "Nigromancia",
    casting: "1 hora", range: "Toque", components: "V, S, M (aspersor de agua bendita+diamantes 25000 po)", duration: "Instantáneo",
    desc: "Devuelves a la vida a una criatura muerta hace no más de 200 años (no por vejez). Restaura el cuerpo completamente aunque no queden restos. Regresa con todos sus PG.",
    damage: null, extra: null
  },
  {
    id: "weird", n: "Extraño [PHB]",
    nivel: "Nivel 9", escuela: "Ilusión",
    casting: "1 acción", range: "120 pies", components: "V, S", duration: "Conc. 1 min",
    desc: "Manifiestas el miedo más profundo de cada criatura en esfera de 30 pies. Salvación SAB o aterrada y 4d10 psíquico al inicio de cada turno. Puede repetir la salvación al final de cada turno.",
    damage: "4d10 Psíquico/turno", extra: null
  },
  {
    id: "wish", n: "Deseo [PHB]",
    nivel: "Nivel 9", escuela: "Conjuración",
    casting: "1 acción", range: "Personal", components: "V", duration: "Instantáneo",
    desc: "El conjuro más poderoso. Puedes replicar cualquier conjuro de nivel 8 o inferior sin material. O desear algo más allá: el DM decide el alcance. Usar para algo más que replicar conjuros: 33% de nunca poder lanzarlo de nuevo, daño 1d10 necrótico por nivel hasta el próximo descanso largo, y otros efectos secundarios.",
    damage: "Especial", extra: null
  },
];
