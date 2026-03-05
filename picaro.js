/* ═══════════════════════════════════════════════════════
   picaro.js — Pícaro: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_PICARO = {
  rasgos: [
    { n:"Especialidad", nv:1, d:"Doble competencia en 2 habilidades elegidas (o 1 habilidad + herramientas de ladrón)." },
    { n:"Ataque Furtivo", nv:1, d:"+1d6 de daño extra cuando tienes ventaja o un aliado adyacente al objetivo. Escala hasta +10d6 en Nv.19." },
    { n:"Jerga de Ladrones", nv:1, d:"Conoces el lenguaje secreto de los ladrones; puedes dejar mensajes ocultos." },
    { n:"Acción Astucia", nv:2, d:"Acción Adicional siempre disponible para: Correr, Desengancharse o Esconderse." },
    { n:"Arquetipo de Pícaro", nv:3, d:"Elige tu subclase." },
    { n:"Reducción del Daño", nv:3, d:"Cuando haces una tirada de salvación de DEX: éxito = sin daño; fallo = mitad de daño." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 10, 12, 16, 19." },
    { n:"Ataque Sin Sorpresa", nv:5, d:"Si fallas tu primer ataque del turno, puedes volver a tirar (1 vez/turno)." },
    { n:"Especialidad Adicional", nv:6, d:"Doble competencia en 2 habilidades más." },
    { n:"Mente Evasiva", nv:7, d:"Competencia en tiradas de salvación de INT o SAB (elige 1)." },
    { n:"Esquiva Reflexiva", nv:7, d:"Reacción cuando un atacante visible te golpea: imponle desventaja en ese ataque." },
    { n:"Escurridizo", nv:15, d:"No puedes ser sorprendido; no sufres ataques de oportunidad." },
    { n:"Mente Resbaladiza", nv:18, d:"Ganas competencia en salvaciones de SAB (si no la tenías ya)." },
    { n:"Esquivo", nv:20, d:"Los atacantes tienen desventaja contra ti a menos que estés incapacitado." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Ladrón [PHB 2014]": [
      { n:"Manos Rápidas", nv:3, d:"Con Acción Astucia puedes también: usar objeto, maniobra con herramientas de ladrón, o acción de Prestidigitación." },
      { n:"Trepador Ágil", nv:3, d:"Escalar no te cuesta movimiento adicional; puedes usar Acción Astucia para saltar." },
      { n:"Usar Objeto Mágico", nv:13, d:"Ignoras restricciones de clase, raza y alineamiento en objetos mágicos." },
      { n:"Reflexivos del Ladrón", nv:17, d:"Siempre actúas en la primera ronda de sorpresa aunque estés sorprendido." },
    ],
    "Asesino [PHB 2014]": [
      { n:"Competencia en Disfraz", nv:3, d:"Competencia con el kit de disfraz y con el kit de venenos." },
      { n:"Asesinar", nv:3, d:"Ventaja en ataques contra criaturas que no hayan actuado aún; los críticos automáticos contra criaturas sorprendidas." },
      { n:"Impostor", nv:9, d:"Puedes copiar perfectamente habla, escritura y comportamiento de otra persona tras 3 horas de estudio." },
      { n:"Veneno de Muerte", nv:13, d:"Al usar Ataque Furtivo, el objetivo hace tirada CON o queda Envenenado 1 hora; si falla por 5+, queda Inconsciente hasta ser curado o agitado." },
      { n:"Golpe de Muerte", nv:17, d:"Si sorprendes a un objetivo en el primer round, puede fallar CON y morir instantáneamente (funciona hasta CR = nivel/2)." },
    ],
    "Embaucador Arcano [PHB 2014]": [
      { n:"Conjuración", nv:3, d:"Lanzador limitado de conjuros de Mago (INT). Preferencia por Encantamiento e Ilusión." },
      { n:"Mano Traviesa", nv:3, d:"Puedes controlar la Mano de Mago sin Acción Adicional; la conviertes en invisible; puedes efectuar maniobras adicionales con ella." },
      { n:"Ladrón de Conjuros", nv:13, d:"Reacción: cuando una criatura lanza un conjuro de Nv.1-4, lo robas y puedes lanzarlo tú en tu siguiente turno." },
      { n:"Ladrón de Magia", nv:17, d:"Al robar un conjuro, el lanzador original pierde su espacio de conjuro." },
    ],

    /* ── PHB 2024 ── */
    "Ladrón [PHB 2024]": [
      { n:"Manos Rápidas", nv:3, d:"Acción Astucia también permite: usar objeto, herramientas de ladrón, o Prestidigitación." },
      { n:"Trepador Ágil", nv:3, d:"Trepar sin coste de movimiento; salto como Acción Astucia." },
      { n:"Instinto Supremo", nv:9, d:"Ventaja en Percepción e Investigación; nunca sorprendido." },
      { n:"Usar Objeto Mágico", nv:13, d:"Ignoras restricciones en objetos mágicos." },
      { n:"Reflexivos del Ladrón", nv:17, d:"Actúas siempre en la primera ronda aunque estés sorprendido." },
    ],
    "Asesino [PHB 2024]": [
      { n:"Asesinar", nv:3, d:"Ventaja en ataques vs. criaturas que no hayan actuado; críticos automáticos vs. sorprendidos." },
      { n:"Veneno de Muerte", nv:9, d:"Ataque Furtivo envenena al objetivo (CON o Envenenado 1h; fallo grave = Inconsciente)." },
      { n:"Impostor", nv:13, d:"Copias perfectamente la apariencia y forma de hablar de otra persona." },
      { n:"Golpe de Muerte", nv:17, d:"Objetivo sorprendido falla CON o muere (hasta CR = nivel/2)." },
    ],
    "Embaucador Arcano [PHB 2024]": [
      { n:"Conjuración", nv:3, d:"Lanzador limitado de conjuros de Mago (INT). Preferencia Encantamiento/Ilusión." },
      { n:"Mano Traviesa", nv:3, d:"Mano de Mago invisible y controlable sin Acción Adicional." },
      { n:"Ladrón de Conjuros", nv:13, d:"Reacción: roba un conjuro de Nv.1-4 y lánzalo en tu siguiente turno." },
      { n:"Ladrón de Magia", nv:17, d:"Al robar un conjuro, el lanzador pierde ese espacio de conjuro." },
    ],

    /* ── XGE ── */
    "Inquisidor Maestro [XGE]": [
      { n:"Oído Agudo", nv:3, d:"Doble competencia en Perspicacia; puedes usar Perspicacia con Acción Adicional." },
      { n:"Mirada Aguda", nv:3, d:"Las criaturas no pueden tener ventaja en tiradas de Engaño contra ti." },
      { n:"Ojo que Todo lo Ve", nv:9, d:"Ganas Ver Invisible y ventaja en Percepción visual; no puedes ser cegado involuntariamente." },
      { n:"Stedfast Eye", nv:13, d:"Cuando usas Esquiva Reflexiva, si el atacante falla, puede quedar Cegado hasta el final de su siguiente turno." },
      { n:"Verdad Aplastante", nv:17, d:"Cuando usas Ataque Furtivo contra un objetivo, también puedes hacerle una pregunta que debe responder verazmente (SAB para resistir)." },
    ],
    "Scout [XGE]": [
      { n:"Combatiente Ágil", nv:3, d:"Competencia en Naturaleza y Supervivencia; no puedes ser sorprendido si estás consciente." },
      { n:"Pulgada de Tierra", nv:3, d:"Reacción cuando un enemigo te hace ataque de oportunidad: muévete 5 pies sin provocar más ataques." },
      { n:"Ojo de Búho", nv:9, d:"Sin penalización por alcance largo; ignoras media cobertura en ataques a distancia." },
      { n:"Emboscador Superior", nv:13, d:"Ventaja en todos los ataques del primer turno si el combate comenzó con una emboscada tuya." },
      { n:"Desvanecerse en la Naturaleza", nv:17, d:"Puedes usar Esconderse en terreno natural como Acción Adicional aunque estés observado." },
    ],
    "Swashbuckler [XGE]": [
      { n:"Elegante Maniobrabilidad", nv:3, d:"No provocas ataques de oportunidad al moverte si tu objetivo es la criatura que los haría." },
      { n:"Ingenio Rakish", nv:3, d:"Puedes usar Ataque Furtivo aunque no tengas ventaja si el objetivo está a 5 pies y no hay otras criaturas cerca de ti." },
      { n:"Encanto Fanfarrón", nv:9, d:"Puedes usar CAR en tiradas de Persuasión; intentas Encantar a criaturas durante 1 minuto (CAR CD)." },
      { n:"Presencia Elegante", nv:13, d:"Cuando Encantas a una criatura y la golpeas con Ataque Furtivo, el daño duplica el dado de Furtivo." },
      { n:"Maestro del Estilo", nv:17, d:"Al matar a un objetivo, puedes mover tu velocidad completa sin oportunidad e intentar Encantar a otra criatura visible." },
    ],

    /* ── TCE ── */
    "Fantasma [TCE]": [
      { n:"Charla con los Muertos", nv:3, d:"Cuando matas a una criatura, puedes extraer un recuerdo de ella y usarlo (conocimiento, habilidad, idioma) por 6 horas." },
      { n:"Forma Espectral", nv:3, d:"Como Acción Adicional, te vuelves semitransparente: resistencia a daño físico no mágico, vuelo 10 pies, atraviesas objetos (no criaturas). Dura hasta el final de tu turno." },
      { n:"Toque Espectral", nv:9, d:"Al golpear con Ataque Furtivo, el objetivo hace CON o queda Aturdido hasta el final de su siguiente turno." },
      { n:"Recuerdo de los Espectros", nv:13, d:"Puedes llevar 2 recuerdos de criaturas muertas simultáneamente." },
      { n:"Caminante de Sombras", nv:17, d:"Cuando usas Forma Espectral, puedes teletransportarte hasta 300 pies a un lugar en sombras que puedas ver." },
    ],
    "Soulknife [TCE]": [
      { n:"Cuchillas del Alma", nv:3, d:"Manifiestas 2 cuchillas psíquicas: 1d6 psíquico, finura, arrojadizas (60 pies). Aparecen y desaparecen a voluntad." },
      { n:"Susurros Psíquicos", nv:3, d:"Puedes comunicarte telepáticamente con criaturas que puedas ver (alcance INT × 10 pies)." },
      { n:"Hoja del Alma Potenciada", nv:9, d:"Las cuchillas hacen 2d6; puedes atacar 2 veces con ambas como parte de la misma acción." },
      { n:"Defensa Psíquica", nv:13, d:"Resistencia al daño psíquico; inmune a leer pensamientos no consentida." },
      { n:"Tajo Psi", nv:17, d:"Al golpear con ambas cuchillas al mismo objetivo en un turno, puede quedar Aturdido 1 minuto (INT para resistir)." },
    ],

    /* ── EGW ── */
    "Sangre de Magia [EGW]": [
      { n:"Sangrado Arcano", nv:3, d:"Al usar Ataque Furtivo, puedes gastar PG = dado de Furtivo para lanzar un truco de Mago sin Acción adicional." },
      { n:"Magia en la Sangre", nv:3, d:"Lanzas 2 trucos de Mago y 1 conjuro de Nv.1 de Mago (INT). A Nv.9 ganas más conjuros." },
      { n:"Destilación Mágica", nv:9, d:"Cuando usas Ataque Furtivo, puedes añadir un efecto de truco al golpe sin coste adicional." },
      { n:"Pulso de Energía", nv:13, d:"1/descanso corto: cuando aciertas con Ataque Furtivo, puedes hacer que irradie una onda de daño del tipo de tu último conjuro (2d6 en 10 pies)." },
      { n:"Explosión Arcana", nv:17, d:"Cuando usas Ataque Furtivo con un conjuro activo, añades INT al daño total." },
    ],

    /* ── TDCSR ── */
    "Campeón del Abismo [TDCSR]": [
      { n:"Dones del Abismo", nv:3, d:"Visión en oscuridad 60 pies; resistencia al daño necrótico; conoces el idioma Abisal." },
      { n:"Golpe Oscuro", nv:3, d:"Al usar Ataque Furtivo, puedes cambiar el tipo de daño a necrótico o psíquico." },
      { n:"Presencia Temible", nv:9, d:"Como Acción Adicional, intentas Asustar a 1 criatura a 30 pies (SAB CD = 8 + competencia + CAR)." },
      { n:"Toque del Vacío", nv:13, d:"Cuando golpeas con Ataque Furtivo, el objetivo tiene desventaja en su siguiente tirada de ataque o salvación (lo que primero haga)." },
      { n:"Forma del Vacío", nv:17, d:"1/descanso largo: como Acción Adicional, te vuelves semietéreo durante 1 minuto: resistencia a todo daño, atraviesas objetos sólidos, invisible para criaturas que dependan de la vista." },
    ],
  }
};
