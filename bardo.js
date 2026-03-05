/* ═══════════════════════════════════════════════════════
   bardo.js — Bardo: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_BARDO = {
  rasgos: [
    { n:"Conjuración", nv:1, d:"Lanzador completo (CAR). Lista de Bardo. Aprende conjuros a nivel." },
    { n:"Inspiración Bárdica", nv:1, d:"Concede 1 dado de inspiración (d6→d12 según nivel) a un aliado. Usos = CAR/descanso largo (→corto en Nv.5)." },
    { n:"Multicompetencia", nv:1, d:"Competencia en 3 instrumentos y armaduras ligeras, armas simples y espadas de mano." },
    { n:"Canción de Descanso", nv:2, d:"Aliados que escuchan tu música recuperan PG adicionales al gastar Dados de Golpe (d6→d12 según nivel)." },
    { n:"Conocimiento de Juglar", nv:2, d:"Competencia en Perspicacia e Historia, más doble competencia en ambas." },
    { n:"Colegio de Bardo", nv:3, d:"Elige tu subclase (Colegio)." },
    { n:"Especialidad", nv:3, d:"Dobla el bono de competencia en 2 habilidades elegidas." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Contraconjuro", nv:6, d:"Reacción para dar ventaja a aliados cercanos en salvaciones contra conjuros." },
    { n:"Secretos Mágicos (2014)", nv:10, d:"Aprende 2 conjuros de cualquier lista de clase (también en Nv.14 y 18)." },
    { n:"Especialidad", nv:10, d:"Dobla el bono de competencia en 2 habilidades más." },
    { n:"Inspiración Superior", nv:20, d:"Al inicio de combate sin usos de Inspiración, recuperas uno automáticamente." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Colegio del Conocimiento [PHB 2014]": [
      { n:"Palabras de Puñal", nv:3, d:"Gasta Inspiración para restar el dado de una tirada de ataque, daño o habilidad de un enemigo." },
      { n:"Secretos Mágicos Adicionales", nv:6, d:"Aprende 2 conjuros adicionales de cualquier lista de clase (antes de lo normal)." },
      { n:"Capacidad Sin Igual", nv:14, d:"Al fallar una tirada de habilidad, puedes gastar Inspiración para volver a tirarla." },
    ],
    "Colegio del Valor [PHB 2014]": [
      { n:"Competencia de Combate", nv:3, d:"Competencia en armaduras medias, escudos y armas marciales." },
      { n:"Inspiración de Combate", nv:3, d:"Los aliados pueden usar tu Inspiración para aumentar tiradas de ataque o CA." },
      { n:"Ataque Extra", nv:6, d:"Atacas dos veces con la acción de Atacar." },
      { n:"Magia de Batalla", nv:14, d:"Al lanzar un conjuro de Bardo, puedes atacar una vez como Acción Adicional." },
    ],

    /* ── PHB 2024 ── */
    "Colegio del Conocimiento [PHB 2024]": [
      { n:"Palabras de Puñal", nv:3, d:"Gasta Inspiración para restar el dado de una tirada de ataque, salvación o habilidad de un enemigo visible." },
      { n:"Secretos Mágicos Adicionales", nv:6, d:"Aprende 2 conjuros extra de cualquier lista de clase." },
      { n:"Infalibilidad Sin Par", nv:14, d:"Al fallar cualquier tirada, gasta Inspiración para volver a tirar." },
    ],
    "Colegio del Valor [PHB 2024]": [
      { n:"Competencia de Combate", nv:3, d:"Competencia en armaduras medias, escudos y armas marciales." },
      { n:"Inspiración de Combate", nv:3, d:"Los aliados pueden usar Inspiración para mejorar tiradas de ataque, daño o CA." },
      { n:"Ataque Extra", nv:6, d:"Atacas dos veces con la acción de Atacar." },
      { n:"Magia de Batalla", nv:14, d:"Al usar Acción para lanzar un conjuro de Bardo, puedes atacar como Acción Adicional." },
    ],
    "Colegio de la Danza [PHB 2024]": [
      { n:"Paso Elegante", nv:3, d:"Al gastar Inspiración, tu movimiento no provoca ataques de oportunidad este turno." },
      { n:"Inspiración Cinética", nv:3, d:"Cuando un aliado usa tu Inspiración en un ataque, puede moverse la mitad de su velocidad sin oportunidad." },
      { n:"Maestro del Baile", nv:6, d:"Tus movimientos en combate pueden incluir ataques adicionales como parte de la misma acción." },
      { n:"Movimiento Mágico", nv:14, d:"Lanzas Paso Brumoso sin espacio de conjuro (SAB/descanso corto) usando Inspiración." },
    ],
    "Colegio de las Espadas [PHB 2024]": [
      { n:"Competencia de Combate", nv:3, d:"Competencia con armas marciales y armadura media." },
      { n:"Floritura de Combate", nv:3, d:"Gasta Inspiración en ataques para maniobras especiales: Defensa, Embate o Corte." },
      { n:"Ataque Extra", nv:6, d:"Atacas dos veces con la acción de Atacar." },
      { n:"Magia de la Espada", nv:14, d:"Al lanzar un conjuro de Bardo, puedes atacar como Acción Adicional." },
    ],

    /* ── XGE ── */
    "Colegio de las Espadas [XGE]": [
      { n:"Competencia de Combate", nv:3, d:"Competencia con armas marciales y armadura media." },
      { n:"Floritura de Combate", nv:3, d:"Gasta Inspiración bárdica en ataques para elegir 1 de 3 maniobras: Golpe Defensivo (+d a CA), Golpe de Embestida (empuja) o Golpe Cortante (daña a otro cercano)." },
      { n:"Ataque Extra", nv:6, d:"Atacas dos veces con la acción de Atacar." },
      { n:"Magia de la Espada", nv:14, d:"Al lanzar un conjuro de bardo, puedes atacar con arma como Acción Adicional." },
    ],
    "Colegio de la Majestuosidad [XGE]": [
      { n:"Manto de Inspiración", nv:3, d:"Gasta Inspiración: hasta 5 aliados a 60 pies se mueven sin oportunidad y ganan PG temporales (2d6)." },
      { n:"Manto de Majestuosidad", nv:6, d:"Lanzas Encantar Persona sin espacio como Acción Adicional (1/descanso largo); se mantiene aunque el objetivo reciba daño." },
      { n:"Majestad Inquebrantable", nv:14, d:"Como Acción Adicional, asumes una presencia sobrenatural 1 minuto: los ataques contra ti requieren tirada CAR o el ataque falla." },
    ],
    "Colegio de los Susurros [XGE]": [
      { n:"Palabras en la Piel", nv:3, d:"1 vez por turno al golpear, gasta Inspiración para añadir 2d6 (→8d6 en Nv.15) de daño psíquico." },
      { n:"Sombras Psíquicas", nv:3, d:"Al matar a una criatura Humanoide, puedes robar su sombra y hacerte pasar por ella (apariencia y recuerdos)." },
      { n:"Lore Manchada", nv:6, d:"Gasta 3 Inspiraciones: la sombra de un objetivo revela sus secretos (como Zona de Verdad, pero selectivo)." },
      { n:"Shadow Lore", nv:14, d:"Acción: susurras secretos a un objetivo (CAR o queda bajo tu control 8 horas; olvida el hechizo al romperlo)." },
    ],

    /* ── TCE ── */
    "Colegio de la Elocuencia [TCE]": [
      { n:"Orador Seguro", nv:3, d:"Cuando usas un dado de Inspiración bárdica y el resultado es 1-5, no consumes el dado." },
      { n:"Palabras Perfectas", nv:3, d:"Competencia con doble bonificación en Persuasión y Actuación (o las ganas si no las tenías)." },
      { n:"Universo Cautivador", nv:6, d:"Cuando lanzas un conjuro de Encantamiento, puedes dar Inspiración bárdica a un aliado sin coste de acción." },
      { n:"Maestría del Discurso", nv:14, d:"Cuando lanzas Encantar Persona o Encantar Monstruo con espacio, puedes afectar hasta INT objetivos adicionales." },
    ],
    "Colegio de la Creación [TCE]": [
      { n:"Nota de Potencial", nv:3, d:"Cuando un aliado usa tu Inspiración, ganas un beneficio extra: PG temp., ventaja o movimiento adicional." },
      { n:"Actuación de la Creación", nv:3, d:"Creas un objeto animado Mediano o menor (como Animar Objeto) que actúa hasta tu siguiente turno (1/descanso largo)." },
      { n:"Musa Animada", nv:6, d:"Tu objeto de Actuación escala en tamaño (hasta Grande); puede atacar como Acción Adicional." },
      { n:"Sinfonía de la Creación", nv:14, d:"Puedes crear múltiples objetos simultáneamente y mantenerlos activos más tiempo." },
    ],

    /* ── TDCSR ── */
    "Colegio de la Sátira [TDCSR]": [
      { n:"Ingenio Venenoso", nv:3, d:"Cuando usas Inspiración bárdica para reducir una tirada enemiga y el dado muestra 4 o más, el objetivo queda Envenenado hasta el final de su siguiente turno." },
      { n:"Palabras que Hieren", nv:3, d:"1/turno, cuando usas Palabras de Puñal contra un objetivo, añades 1d6 de daño psíquico extra." },
      { n:"Golpe Cómico", nv:6, d:"Cuando reduces a 0 PG a un enemigo, las criaturas que lo presencien deben superar CON o queden Incapacitadas de risa hasta el final de su siguiente turno (SAB anula)." },
      { n:"Maestro del Ridículo", nv:14, d:"Las criaturas Asustadas por tus conjuros o habilidades también quedan con desventaja en las tiradas de ataque." },
    ],
  }
};
