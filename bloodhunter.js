/* ═══════════════════════════════════════════════════════
   bloodhunter.js — Blood Hunter: rasgos y subclases
   Matt Mercer 2022 (versión oficial revisada)
═══════════════════════════════════════════════════════ */

const CLASE_BLOODHUNTER = {
  rasgos: [
    { n:"Hemocraft", nv:1, d:"Usas tu propia sangre para potenciar habilidades. Dado de Hemocraft: d4 (→d6 en Nv.5, →d8 en Nv.11, →d10 en Nv.17)." },
    { n:"Marca de Sangre", nv:1, d:"Como Acción Adicional, marcas a 1 criatura visible: añades tu dado de Hemocraft al daño contra ella y a tiradas de Perspicacia/Percepción para rastrearla. Dura 1 hora o hasta nueva marca." },
    { n:"Rito de Sangre", nv:1, d:"Activas un rito en tu arma (Acción Adicional): inflige daño adicional = dado de Hemocraft + PG = dado de Hemocraft (te dañas a ti mismo). Tipos: Ácido, Frío, Fuego, Rayo, Necrótico, Psíquico." },
    { n:"Sangre Curtida", nv:2, d:"Resistencia al daño de rito activo en tu arma mientras el rito esté activo." },
    { n:"Orden de Cazadores", nv:3, d:"Elige tu subclase." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Ataque Extra", nv:5, d:"Atacas dos veces con la acción de Atacar." },
    { n:"Mirada del Cazador", nv:6, d:"Acción: examinas a 1 criatura a 60 pies. Conoces sus inmunidades/resistencias/vulnerabilidades y si es sobrenatural." },
    { n:"Sangre Bravía", nv:7, d:"Cuando estás por debajo de la mitad de tus PG máximos, añades tu dado de Hemocraft a todas tus tiradas de daño con arma." },
    { n:"Entrenamiento de Cripta", nv:9, d:"Competencia doble en Arcana, Historia o Naturaleza (elige 1 relacionada con lo sobrenatural)." },
    { n:"Rito Mayor", nv:11, d:"Aprende un segundo Rito de Sangre. Puedes tener ambos activos en armas distintas." },
    { n:"Forma Mutada", nv:18, d:"Tu cuerpo ha cambiado por los ritos: ganas resistencia a 2 tipos de daño de tus ritos y +1 CA permanente." },
    { n:"Cazador Supremo", nv:20, d:"Cuando marcas a una criatura con Marca de Sangre, le añades una vulnerabilidad temporal al tipo de daño de tu Rito activo (CON para resistir)." },
  ],
  subclases: {

    "Orden del Tejedor de Huesos": [
      { n:"Rito del Tejedor de Huesos", nv:3, d:"Al activar tu Rito de Sangre, puedes elegir el tipo Necrótico gratuitamente (sin coste adicional de PG)." },
      { n:"Maldición Animada", nv:3, d:"Cuando matas a una criatura con tu Marca de Sangre activa, puedes animarla como zombi aliado por 1 hora (1/descanso largo)." },
      { n:"Escudo Osario", nv:7, d:"Reacción al recibir daño: invocas una barrera de huesos que absorbe daño = 1d12 + CON (1/descanso corto)." },
      { n:"Toque Marchito", nv:11, d:"Cuando golpeas con tu rito activo, el objetivo hace CON o queda Envenenado y su velocidad se reduce a la mitad hasta el final de su siguiente turno." },
      { n:"Maestro del No-muerto", nv:15, d:"Puedes controlar hasta CON no-muertos simultáneamente; tus zombis animados obtienen PG extra = tu nivel." },
    ],
    "Orden del Lanzallamas": [
      { n:"Rito del Fuego", nv:3, d:"Al activar tu Rito con tipo Fuego, el primer golpe de cada turno también inflige 1d4 de daño de fuego en área (5 pies alrededor del objetivo)." },
      { n:"Llama Maldita", nv:3, d:"Cuando golpeas a tu objetivo marcado con rito de fuego activo, puede quedar Ardiendo: recibe 1d6 de fuego al inicio de cada turno (DEX para apagar)." },
      { n:"Explosión Ardiente", nv:7, d:"1/descanso corto: cuando golpeas con rito de fuego activo, liberas una explosión de 15 pies de radio centrada en el objetivo (2d6 fuego, DEX reduce a la mitad)." },
      { n:"Inmunidad al Fuego", nv:11, d:"Inmune al daño de fuego; tus ataques con rito de fuego ignoran la resistencia al fuego." },
      { n:"Señor del Fuego", nv:15, d:"Mientras tu rito de fuego esté activo, criaturas que te golpeen en cuerpo a cuerpo reciben 1d8 de daño de fuego de retorno." },
    ],
    "Orden del Mutante": [
      { n:"Mutación", nv:3, d:"Aprendes 2 mutaciones de una lista (Ágil, Colmillos, Elasticidad, Escamas, Garras, Membrana, Ojos de Depredador, Piel Endurecida, Sentido de Presa, Velocidad...). Más en Nv.7, 11, 15." },
      { n:"Catalizador Extraño", nv:3, d:"Puedes activar o desactivar tus mutaciones físicas activas como Acción Adicional." },
      { n:"Mutación Adaptativa", nv:7, d:"Cuando recibes un tipo de daño por primera vez en el día, puedes usar Reacción para ganar resistencia a ese tipo hasta tu siguiente descanso largo." },
      { n:"Forma Aberrante", nv:11, d:"Puedes tener activas hasta 3 mutaciones simultáneamente; las mutaciones físicas son permanentemente visibles pero no afectan tu apariencia social." },
      { n:"Evolución Superior", nv:15, d:"Aprende 2 mutaciones adicionales; tus mutaciones ya no te cuestan PG activarlas." },
    ],
    "Orden del Profano": [
      { n:"Magia Profana", nv:3, d:"Aprendes 2 conjuros de la lista del Blood Hunter (INT o SAB). Los lanzas gastando PG = nivel del conjuro × dado de Hemocraft." },
      { n:"Sello Maldito", nv:3, d:"Cuando marcas a un objetivo con Marca de Sangre, puedes añadirle un sello: penalización en 1 tipo de tirada (ataque, salvación o habilidad) de tu elección." },
      { n:"Conocimiento Oscuro", nv:7, d:"Doble competencia en Arcana e Historia relacionadas con lo sobrenatural." },
      { n:"Conjuro de Sangre", nv:11, d:"Puedes lanzar cualquier conjuro de tu lista gastando PG en lugar de espacios; el coste es dado de Hemocraft × nivel del conjuro." },
      { n:"Maestro del Profano", nv:15, d:"1/descanso largo: lanzas tu conjuro de mayor nivel conocido sin coste de PG." },
    ],
  }
};
