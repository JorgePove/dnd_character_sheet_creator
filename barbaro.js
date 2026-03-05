/* ═══════════════════════════════════════════════════════
   barbaro.js — Bárbaro: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_BARBARO = {
  rasgos: [
    { n:"Furia", nv:1, d:"Usos/Descanso Largo según nivel. +2 daño (→+4 Nv.16), resistencia a contundente/perforante/cortante, ventaja en FUE." },
    { n:"Defensa sin armadura", nv:1, d:"CA = 10 + DEX + CON sin armadura." },
    { n:"Arma de Bárbaro", nv:1, d:"Las armas que empuñas infligen daño adicional de Furia (+2 → +4 en Nv.16)." },
    { n:"Sentido del Peligro", nv:2, d:"Ventaja en salvaciones DEX contra efectos visibles." },
    { n:"Ataque Desarmado", nv:2, d:"(2014) Puedes atacar con manos desnudas usando FUE." },
    { n:"Camino Primal", nv:3, d:"Elige tu subclase." },
    { n:"Mejora de Característica", nv:4, d:"+2 a una estadística o +1 a dos. También en Nv.8, 12, 16, 19." },
    { n:"Ataque Extra", nv:5, d:"Atacas dos veces con la acción de Atacar." },
    { n:"Movimiento Rápido", nv:5, d:"+10 pies de velocidad sin armadura (→+15 en Nv.10)." },
    { n:"Instinto Salvaje", nv:7, d:"Ventaja en Iniciativa; puedes entrar en Furia al ser sorprendido." },
    { n:"Crítico Brutal (2014)", nv:9, d:"Tira 1 dado adicional de daño del arma en críticos cuerpo a cuerpo (→3 dados en Nv.17)." },
    { n:"Golpe Brutal (2024)", nv:9, d:"Con ventaja en Furia, aplica un efecto de Golpe Brutal en lugar de tirar ambos dados." },
    { n:"Furia Imparable", nv:11, d:"Si caes a 0 PG en Furia, puedes continuar hasta el final de tu siguiente turno." },
    { n:"Furia Persistente", nv:15, d:"La Furia solo termina si caes inconsciente o voluntariamente." },
    { n:"Poder Indomable", nv:20, d:"(2014) Al tirar estadística de FUE, usa la puntuación si supera la tirada." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Camino del Berserker [PHB 2014]": [
      { n:"Frenesí", nv:3, d:"En Furia, ataca una vez adicional como Acción Adicional. Al salir, ganas 1 nivel de agotamiento." },
      { n:"Furia Sin Mente", nv:6, d:"No puedes ser encantado ni asustado durante la Furia." },
      { n:"Presencia Intimidatoria", nv:10, d:"Acción: aterroriza a una criatura que puedas ver (CAR). Misma criatura no de nuevo hasta descanso largo." },
      { n:"Represalia", nv:14, d:"Reacción: cuando recibes daño de una criatura, puedes atacarla inmediatamente." },
    ],
    "Camino del Guerrero Ancestral [PHB 2014]": [
      { n:"Protectores Ancestrales", nv:3, d:"En el primer turno de tu Furia, los espíritus dan desventaja a los ataques de enemigos contra tus aliados." },
      { n:"Escudo Espiritual", nv:6, d:"Reacción para reducir el daño recibido por un aliado visible en 2d6 + SAB." },
      { n:"Consultar a los Espíritus", nv:10, d:"Lanzas Augur o Comunión con la Naturaleza sin espacios (1/descanso largo)." },
      { n:"Venganza de los Ancestros", nv:14, d:"En Furia, cuando un aliado visible cae a 0 PG, ganas ventaja en ataques contra el responsable." },
    ],
    "Camino de la Tormenta [PHB 2014]": [
      { n:"Tormenta de Rayos", nv:3, d:"En Furia, al golpear en cuerpo a cuerpo, criaturas a 5 pies reciben 1d6 de rayo (CON para reducir a la mitad)." },
      { n:"Alma de Tormenta", nv:6, d:"Resistencia a rayo y trueno; puedes respirar bajo el agua y nadas a tu velocidad normal." },
      { n:"Escudo de Tormenta", nv:10, d:"Reacción para reducir a la mitad el daño de rayo/trueno que un aliado a 30 pies iba a recibir." },
      { n:"Ira de la Tormenta", nv:14, d:"Al usar Furia Imparable, criaturas a 30 pies sufren 2d6 de rayo (CON para resistir)." },
    ],
    "Camino del Corazón Salvaje [PHB 2014]": [
      { n:"Espíritu Animal", nv:3, d:"Elige un espíritu (Oso, Águila, Lobo, Alce, Tigre) con beneficios únicos durante la Furia." },
      { n:"Espíritu Vago", nv:6, d:"Puedes cambiar de espíritu animal cada vez que entras en Furia." },
      { n:"Poderoso Bestia", nv:10, d:"Las ventajas de tu espíritu animal activo mejoran notablemente." },
      { n:"Furia Bestial", nv:14, d:"En Furia, puedes usar simultáneamente los beneficios de dos espíritus animal." },
    ],
    "Camino de la Magia Salvaje [PHB 2014/Tasha's]": [
      { n:"Conciencia Mágica", nv:3, d:"Al entrar en Furia, detectas magia activa de Nv.1-9 dentro de 60 pies." },
      { n:"Oleada de Magia Salvaje", nv:3, d:"Al entrar en Furia, lanza en la tabla de oleadas de magia salvaje (d8) y aplica el efecto." },
      { n:"Magia Duradera", nv:6, d:"Al entrar en Furia, tus conjuros de concentración no se rompen automáticamente." },
      { n:"Explosión Hechizante", nv:10, d:"Al golpear en Furia, activas un efecto adicional de oleada de magia salvaje." },
      { n:"Alma Hechizada", nv:14, d:"Como Acción Adicional en Furia, lanzas un conjuro de Nv.1-3 de la lista de Hechicero (1/Furia)." },
    ],

    /* ── PHB 2024 ── */
    "Camino del Berserker [PHB 2024]": [
      { n:"Frenesí", nv:3, d:"En Furia, una vez por turno al golpear añades 1d6 de daño extra del tipo del arma (sin agotamiento)." },
      { n:"Actitud Descuidada", nv:6, d:"En Furia, cuando atacas con ventaja y aciertas, también golpeas a otra criatura adyacente que no haya atacado." },
      { n:"Presencia Intimidatoria", nv:10, d:"Acción: aterroriza a una criatura visible (salvación CAR). Se puede usar mientras estás en Furia." },
      { n:"Represalia", nv:14, d:"Reacción: al recibir daño de una criatura a 5 pies, puedes atacarla." },
    ],
    "Camino del Guerrero Ancestral [PHB 2024]": [
      { n:"Protectores Ancestrales", nv:3, d:"En Furia, los espíritus dificultan los ataques de un enemigo que hayas golpeado (desventaja contra aliados)." },
      { n:"Escudo Espiritual", nv:6, d:"Reacción: cuando un aliado visible recibe daño, reduce ese daño en 2d6 + mod SAB." },
      { n:"Consultar a los Espíritus", nv:10, d:"Sin espacio de conjuro: Augur o Comunión con la Naturaleza (1/descanso largo)." },
      { n:"Venganza de los Ancestros", nv:14, d:"En Furia, al caer un aliado, los espíritus te guían: ventaja en ataques contra el responsable ese turno." },
    ],
    "Camino de la Grandeza Gigante [PHB 2024]": [
      { n:"Habla de Gigante", nv:3, d:"Aprendes el idioma Gigante; puedes lanzar Comprensión de Idiomas sin espacio (INT/descanso largo)." },
      { n:"Forma de la Grandeza", nv:3, d:"En Furia, creces a tamaño Grande (si hay espacio) y añades 1d6 a daño cuerpo a cuerpo." },
      { n:"Paso de Gigante", nv:6, d:"En Furia puedes lanzar objetos Medianos o menores como arma arrojadiza (alcance 60 pies, 2d10 contundente)." },
      { n:"Espíritu del Gigante", nv:10, d:"Ganas uno de los beneficios del tipo de gigante elegido (Colina, Glaciar, Piedra, Tormenta, Fuego, Nubes)." },
      { n:"Tamaño Colosal", nv:14, d:"En Furia puedes crecer a tamaño Enorme; ventaja en FUE y añades 1d8 adicional al daño." },
    ],
    "Camino de la Bestia [PHB 2024]": [
      { n:"Forma de la Bestia", nv:3, d:"En Furia, tu cuerpo manifiesta rasgos de bestia: elige entre Mordisco, Garras o Cola." },
      { n:"Alma Bestial", nv:6, d:"Tus ataques en Furia cuentan como mágicos; te adaptas a terrenos (natación, escalada o vuelo)." },
      { n:"Armadura de Espinas", nv:10, d:"Al inicio de cada turno en Furia, criaturas que te hayan atacado en cuerpo a cuerpo reciben 1d6 daño perforante." },
      { n:"Cuerpo de la Bestia Mejorado", nv:14, d:"Los ataques de Forma de la Bestia mejoran: más daño, mayor alcance y efectos adicionales." },
    ],

    /* ── XGE ── */
    "Camino de la Tormenta [XGE]": [
      { n:"Alma de Tormenta", nv:3, d:"Resistencia a rayo y trueno; velocidad de natación 30 pies; puedes respirar bajo el agua." },
      { n:"Tormenta de Rayos", nv:3, d:"En Furia, al golpear en cuerpo a cuerpo, criaturas a 5 pies reciben 1d6 de rayo (CON para reducir a la mitad)." },
      { n:"Escudo de Tormenta", nv:6, d:"Cuando un aliado a 60 pies recibe daño de rayo o trueno, puedes usar Reacción para reducirlo a la mitad." },
      { n:"Ira de la Tormenta", nv:10, d:"Al usar Furia Imparable, todas las criaturas a 30 pies reciben 2d6 de rayo (CON para resistir)." },
    ],

    /* ── TCE ── */
    "Camino del Corazón Salvaje [TCE]": [
      { n:"Espíritu Animal", nv:3, d:"Elige 1 espíritu (Oso/Águila/Alce/Lobo/Tigre); cada uno da beneficios distintos durante la Furia. Puedes cambiar al entrar en Furia." },
      { n:"Alma de la Bestia", nv:6, d:"Tu espíritu animal te otorga un rasgo pasivo permanente." },
      { n:"Espíritu Vago", nv:10, d:"Al entrar en Furia, puedes obtener los beneficios de dos espíritus animal a la vez." },
      { n:"Furia Bestial", nv:14, d:"En Furia, ataques desarmados o con arma natural infligen +1d8 de daño del tipo elegido." },
    ],
    "Camino de la Magia Salvaje [TCE]": [
      { n:"Conciencia Mágica", nv:3, d:"Al entrar en Furia, detectas magia activa de cualquier nivel en 60 pies." },
      { n:"Oleada de Magia Salvaje", nv:3, d:"Al entrar en Furia, lanzas 1d8 en la tabla de Oleadas Salvajes del Bárbaro y se aplica el efecto." },
      { n:"Magia Duradera", nv:6, d:"Al entrar en Furia, los conjuros de concentración que mantengas no se rompen automáticamente." },
      { n:"Explosión Hechizante", nv:10, d:"Al golpear en Furia, activas una Oleada adicional del d8." },
      { n:"Alma Hechizada", nv:14, d:"Como Acción Adicional en Furia, lanzas un conjuro de Nv.1-3 de la lista de Hechicero (1 vez por Furia)." },
    ],
    "Camino del Berserker Ancestral [TCE]": [
      { n:"Guerrero del Tótem", nv:3, d:"Elige un animal tótem (Oso/Águila/Alce/Lobo/Tigre) con beneficios al nivel 3." },
      { n:"Aspecto de la Bestia", nv:6, d:"Ganas beneficios del aspecto del tótem elegido (o uno diferente)." },
      { n:"Viaje Espiritual", nv:10, d:"Lanzas Comunión con la Naturaleza como ritual sin materiales." },
      { n:"Ataque del Tótem", nv:14, d:"Ganas el poder de ataque del espíritu tótem (o uno diferente al elegido en Nv.3 y 6)." },
    ],

    /* ── EGW ── */
    "Camino del Alma del Portento [EGW]": [
      { n:"Juramento Roto", nv:3, d:"Tus ataques en Furia cuentan como mágicos a efectos de resistencias." },
      { n:"Ira Divina", nv:3, d:"Al entrar en Furia, eliges radiante o necrótico: añades 1d6 de ese tipo en el primer golpe de cada turno." },
      { n:"Alma Resistente", nv:6, d:"Ventaja en tiradas de salvación contra conjuros mientras estás en Furia." },
      { n:"Castigo Sagrado", nv:10, d:"Cuando golpeas a un lanzador de conjuros en Furia, puede perder la concentración automáticamente (CON CD = 8 + daño infligido)." },
      { n:"Voluntad Inamovible", nv:14, d:"Al entrar en Furia, lanzas Libertad de Movimiento sobre ti mismo sin espacio ni concentración." },
    ],

    /* ── TDCSR ── */
    "Camino del Mundo Destrozado [TDCSR]": [
      { n:"Forma Destrozada", nv:3, d:"Al entrar en Furia, elige un elemento (fuego/frío/rayo/ácido/trueno); ganas resistencia a ese tipo y tus ataques infligen 1d6 adicional de ese tipo." },
      { n:"Chispa de la Creación", nv:6, d:"Tu Forma Destrozada emite destellos dañinos a criaturas contiguas (CON para resistir)." },
      { n:"Explosión Cósmica", nv:10, d:"1/descanso largo: en Furia, lanzas un cono de 30 pies de energía primordial (5d8, DEX para reducir a la mitad)." },
      { n:"Resiliencia Primordial", nv:14, d:"Ganas resistencia permanente a los cuatro tipos elementales; inmunidad al tipo que elegiste en Forma Destrozada." },
    ],
    "Camino de la Fuerza Lunar [TDCSR]": [
      { n:"Transformación Lunar", nv:3, d:"Al entrar en Furia, pasas por fases lunares (Creciente/Llena/Menguante) con beneficios únicos en cada una." },
      { n:"Espíritu Lunar", nv:6, d:"En Furia, cuando gastas Dados de Golpe para curarte (descanso corto), añades SAB al total curado." },
      { n:"Oleada Lunar", nv:10, d:"Puedes cambiar de fase lunar activa como Acción Adicional durante la Furia." },
      { n:"Cuerpo Celestial", nv:14, d:"Resistencia permanente a daño radiante y necrótico; vuelo 30 pies en Furia (fase llena)." },
    ],
  }
};
