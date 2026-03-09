/* ══════════════════════════════════════════════════════════════════
   artificer.js — Artificer: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     Eberron: Rising from the Last War (ERftLW) — subclases 2014
     Tasha's Cauldron of Everything (TCE)        — Armorer
     Eberron: Forge of the Artificer (EFotA)     — revisión 2024 + Cartógrafo
   ──────────────────────────────────────────────────────────────────
   SUBCLASES:
     Alquimista           [ERftLW 2014]
     Artillero            [ERftLW 2014]
     Herrero de Batalla   [ERftLW 2014]
     Armero               [TCE]
     Cartógrafo           [EFotA 2024]  ← nueva subclase
══════════════════════════════════════════════════════════════════ */

const CLASE_ARTIFICER = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras y medias, escudos. Armas simples. Herramientas de ladrón, todas las herramientas de artesano. Salvaciones: CON e INT. Habilidades: elige 2 entre Arcanos, Historia, Investigación, Medicina, Naturaleza, Percepción y Juego de Manos."
    },
    {
      n: "Objetos Mágicos Artesanales",
      nv: 1,
      d: "Puedes usar herramientas de artesano como foco mágico para tus conjuros de Artificer. Cuando lanzas un conjuro con componentes materiales sin coste, puedes utilizar tus herramientas en lugar de los componentes."
    },
    {
      n: "Detectar Magia Ritual",
      nv: 1,
      d: "Puedes lanzar Detectar Magia a voluntad sin gastar espacio de conjuro, pero solo como ritual (10 minutos adicionales). Esta versión no requiere concentración."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "INT es tu característica de conjuro (CD = 8 + comp + mod INT). Preparas conjuros = mod INT + mitad de tu nivel de Artificer (redondeado arriba, mínimo 1). Puedes cambiar conjuros preparados al terminar un descanso largo cuando tengas acceso a tus herramientas. Progresión de medio lanzador (igual que Paladín o Explorador)."
    },
    {
      n: "Infundir Objetos",
      nv: 2,
      d: "Al terminar un descanso largo puedes infundir hasta un número de objetos = mitad de infusiones conocidas. Infusiones conocidas: 4 (Nv.2) → 6 (Nv.6) → 8 (Nv.10) → 10 (Nv.14) → 12 (Nv.18). Objetos infundidos a la vez: 2 (Nv.2) → 3 (Nv.6) → 4 (Nv.10) → 5 (Nv.14) → 6 (Nv.18). Si superas el máximo, la infusión más antigua termina."
    },
    {
      n: "Especialidad de Artificer",
      nv: 3,
      d: "Eliges tu subclase (Especialidad). Cada una otorga herramientas adicionales, conjuros de especialidad siempre preparados, y rasgos en Nv.3, 5, 9 y 15."
    },
    {
      n: "El Hombre Adecuado para el Trabajo",
      nv: 3,
      d: "Al terminar cada descanso largo, ganas competencia con una herramienta de artesano de tu elección. Esta competencia dura hasta el siguiente descanso largo."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Dominio de Herramientas",
      nv: 6,
      d: "Tienes dominio (doble bonificador de competencia) con las herramientas de artesano de tu especialidad. También puedes usar cualquier herramienta de artesano como foco mágico para tus conjuros."
    },
    {
      n: "Guardia Arcana Flash",
      nv: 7,
      d: "Reacción: cuando tú o una criatura visible a 60 pies recibe daño, puedes reducir ese daño en 1d6 + mod INT + nivel de Artificer. Usos = mod INT (mínimo 1). Se recuperan con descanso largo."
    },
    {
      n: "Magia del Alma",
      nv: 11,
      d: "Cuando lanzas un conjuro de Artificer de Nv.1+, puedes dar a una criatura visible a 30 pies PG temporales = nivel del espacio + mod INT. Una criatura puede beneficiarse de esto una sola vez por turno."
    },
    {
      n: "Almacén de Magia",
      nv: 14,
      d: "En 1 minuto puedes almacenar un conjuro de Artificer de Nv.1-5 en un objeto. Una criatura que lleve el objeto puede activarlo gastando su acción (usa tu CD y ataque de conjuro). El conjuro permanece hasta que se active o prepares uno nuevo. Un objeto, un solo conjuro."
    },
    {
      n: "Alma de Artificer",
      nv: 20,
      d: "+1 a CA y +1 a todas las tiradas de salvación por cada objeto mágico que lleves equipado (máximo +5 para cada bonus)."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (ESPECIALIDADES)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── Eberron: Rising from the Last War (2014) ── */
    "Alquimista [ERftLW 2014]": [
      {
        n: "Herramientas y Conjuros de Especialidad",
        nv: 3,
        d: "Herramienta extra: Equipamiento de Alquimista. Conjuros siempre preparados — Nv.3: Curar Heridas, Rayo de Debilidad. Nv.5: Flecha Ácida de Melf, Nube de Veneno. Nv.9: Hipnótico, Bola de Fuego. Nv.13: Muerte Apacible, Alterar el Mundo. Nv.17: Curar Heridas en Masa, Nube Mortal."
      },
      {
        n: "Investigación Experimental",
        nv: 3,
        d: "Al terminar un descanso largo, creas 1 Elixir Experimental gratis (adicionales cuestan espacio Nv.1+). Tipos: Curación (2d4+2 PG), Gallardía (+1 CA durante 10 min), Vigor (PG temporales = 2d4+mod INT), Audacia (ventaja en el primer ataque y primera salvación del próximo turno), Vuelo (velocidad de vuelo 10 pies durante 10 min), Transformación (Alter Self sin concentración durante 10 min). El elixir dura hasta el próximo descanso largo."
      },
      {
        n: "Alquimia Experimental",
        nv: 5,
        d: "Al lanzar un conjuro curativo de Nv.1+ en una criatura distinta de ti, esa criatura recupera PG adicionales = mod INT (mínimo 1)."
      },
      {
        n: "Conocimiento Químico",
        nv: 9,
        d: "Inmunidad al daño de ácido y veneno, y a la condición Envenenado. Cuando lanzas un conjuro de Nv.1+ que inflige daño de ácido o veneno, añades mod INT al daño."
      },
      {
        n: "Elixires Perpetuos",
        nv: 15,
        d: "Al terminar un descanso largo creas un número de Elixires = mod INT, todos gratuitos. Puedes elegir el tipo de cada uno de forma independiente."
      },
    ],

    "Artillero [ERftLW 2014]": [
      {
        n: "Herramientas y Conjuros de Especialidad",
        nv: 3,
        d: "Herramienta extra: Herramientas de Tallista. Conjuros siempre preparados — Nv.3: Proyectil Mágico, Escudo. Nv.5: Proyectil Llameante, Escorchar. Nv.9: Bola de Fuego, Rayo de Hielo. Nv.13: Muro de Fuego, Muro de Hielo. Nv.17: Cono de Frío, Muro de Fuerza."
      },
      {
        n: "Cañón Arcano",
        nv: 3,
        d: "Con 1 acción creas un cañón mágico en un espacio libre a 5 pies (o en tu mano si es Diminuto). Elige tipo: Lanzallamas (cono 15 pies, 2d8 fuego, DEX para reducir a la mitad), Cañón de Fuerza (ataque de conjuro a 120 pies, 2d8 fuerza) o Torreta Protectora (PG temporales = 1d8+mod INT a criaturas amistosas a 10 pies). CA 18, PG = 5×nivel Artificer. Se activa con AA; puedes moverlo 15 pies con AA. 1/descanso largo gratis (adicionales gastan espacio Nv.1+)."
      },
      {
        n: "Cañón como Foco",
        nv: 3,
        d: "Puedes usar el Cañón como foco de conjuro. Cuando lanzas conjuros de ataque a distancia puedes ignorar cobertura de la mitad y de tres cuartos."
      },
      {
        n: "Cañón Explosivo",
        nv: 5,
        d: "El daño del cañón aumenta en 1d8 (2d8→3d8). Además, AA: el cañón explota haciendo 3d8 de fuerza a criaturas en radio 20 pies (DEX para reducir a la mitad). Se destruye al explotar."
      },
      {
        n: "Fortaleza Arcana",
        nv: 9,
        d: "Puedes tener dos Cañones Arcanos activos a la vez y activarlos ambos con la misma AA."
      },
      {
        n: "Artillería Maestra",
        nv: 15,
        d: "Tus cañones infligen daño máximo la primera vez que dañan a cualquier criatura en un encuentro. Cuando usas tu AA para activar el cañón, también puedes hacer un ataque con arma o conjuro tú mismo."
      },
    ],

    "Herrero de Batalla [ERftLW 2014]": [
      {
        n: "Herramientas y Conjuros de Especialidad",
        nv: 3,
        d: "Herramienta extra: Herramientas de Herrero. Competencia extra: armas marciales. Conjuros siempre preparados — Nv.3: Heroísmo, Escudo. Nv.5: Rayo Llameante, Manos Ardientes. Nv.9: Aura de Vitalidad, Muro de Fuego. Nv.13: Compeler Criaturas, Fabricar. Nv.17: Animación de Objetos, Creación."
      },
      {
        n: "Arma de Acero Arcano",
        nv: 3,
        d: "En 1 hora creas un arma mágica (espada corta arcana). Usas INT en lugar de FUE o DES para atacar y dañar con ella. Cuenta como mágica. Puedes tener dos Armas de Acero Arcano (una por mano)."
      },
      {
        n: "Centinela de Acero",
        nv: 3,
        d: "En 8 horas y con tus herramientas de herrero creas un constructo mecánico (Centinela de Acero). Actúa en tu iniciativa, obedece tus órdenes y puede atacar según su bloque de estadísticas. Si muere, puedes reconstruirlo en 1 hora. Puede llevar objetos mágicos que tú hayas infundido."
      },
      {
        n: "Mente Extra",
        nv: 5,
        d: "Como AA puedes percibir a través de los sentidos de tu Centinela (hasta que uses otra AA para volver a los tuyos). El Centinela gana Ataque Extra (ataca dos veces con la acción de Atacar)."
      },
      {
        n: "Guardián Arcano",
        nv: 9,
        d: "El Centinela gana +2 a CA y sus ataques cuentan como plateados y mágicos. Cuando usa Ayuda para asistir uno de tus ataques, obtienes ventaja en esa tirada."
      },
      {
        n: "Mejoras del Herrero",
        nv: 15,
        d: "El Centinela gana +40 PG máximos. Cuando reduce a 0 PG a una criatura, recuperas PG = 1d10+mod INT. Tus Armas de Acero Arcano infligen un dado de daño adicional al golpear."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Armero [TCE]": [
      {
        n: "Herramientas y Conjuros de Especialidad",
        nv: 3,
        d: "Herramienta extra: Herramientas de Herrero. Competencia extra: armadura pesada. Conjuros siempre preparados — Nv.3: Proyectil Mágico, Ola Tronante. Nv.5: Fuerza Mirrorante, Escorchar. Nv.9: Patrón Hipnótico, Rayo de Relámpago. Nv.13: Descarga de Energía, Muro de Fuego. Nv.17: Animación de Objetos, Pasamuros."
      },
      {
        n: "Armadura del Artificer",
        nv: 3,
        d: "Creas tu Armadura del Artificer en 1 hora. Dos modelos a elegir (cambiable al terminar descanso largo): Guardián (armadura pesada) — Thundergauntlets: 2 ataques cuerpo a cuerpo, 1d8 trueno, INT para atacar, criaturas golpeadas tienen desventaja en ataques contra otros hasta tu siguiente turno; + Placa Defensiva: +1 CA. Infiltración (armadura mediana) — Lightning Launcher: ataque a distancia 90/300 pies, 1d6 rayo, INT para atacar, 1/turno añades mod INT al daño; + sin desventaja en Sigilo."
      },
      {
        n: "Armadura como Foco y Revestimiento",
        nv: 3,
        d: "Puedes usar la Armadura del Artificer como foco mágico y cuenta como un único objeto a efectos de infusiones. Ponérsela o quitársela requiere solo 1 acción."
      },
      {
        n: "Modificaciones Extra",
        nv: 5,
        d: "La armadura admite 2 modificaciones adicionales (infusiones que solo se aplican a ella, no cuentan contra tu límite general). Sube a 3 en Nv.9 y a 4 en Nv.15."
      },
      {
        n: "Armadura Perfeccionada",
        nv: 9,
        d: "Guardián: AA para activar Repulsor de Fuerza — empuja criaturas en cono de 30 pies (salvación FUE para resistir). Infiltración: AA para activar Cargador Electromagnético — ventaja en ataques con arma a aliados a 30 pies durante 1 turno."
      },
      {
        n: "Armadura Perfeccionada Mejorada",
        nv: 15,
        d: "Guardián: activa Tormenta de Trueno (cono 60 pies, 3d6 trueno, DEX para reducir a la mitad, empuja 20 pies; 1/descanso largo). Infiltración: activa Carga de Relámpago (teleportación hasta 30 pies + primer ataque inflige 1d6 rayo adicional; 1/descanso largo)."
      },
    ],

    /* ── Eberron: Forge of the Artificer (2024) — subclase nueva ── */
    "Cartógrafo [EFotA 2024]": [
      {
        n: "Herramientas y Conjuros de Especialidad",
        nv: 3,
        d: "Herramientas extra: Suministros de Calígrafo y Herramientas de Cartógrafo. Escritura Rápida: el tiempo y el oro para crear un Pergamino de Conjuro se reducen a la mitad. Conjuros siempre preparados — Nv.3: Luz de las Hadas, Saeta Guiadora, Palabra de Curación. Nv.5: Localizar Objeto, Aguijón Mental. Nv.9: Llamar Relámpago, Clarividencia. Nv.13: Localizar Criatura, Destierro. Nv.17: Escrutinio, Círculo de Teletransporte."
      },
      {
        n: "Atlas del Aventurero",
        nv: 3,
        d: "Al terminar un descanso largo (usando tus Herramientas de Cartógrafo) creas un Atlas del Aventurero con copias para distribuir entre tus aliados. Los portadores de una copia obtienen: Conciencia — añaden mod INT a sus tiradas de Iniciativa. Posicionamiento — saben la ubicación de todos los demás portadores del Atlas y pueden apuntar conjuros y ataques a portadores aunque no los vean ni tengan línea de visión (si están en rango). Solo puedes tener un Atlas activo; crear uno nuevo destruye el anterior."
      },
      {
        n: "Magia Cartográfica",
        nv: 3,
        d: "Mientras portas el Atlas obtienes: Cartografía Iluminada — lanzas Luz de las Hadas un número de veces = mod INT sin gastar espacio (se recupera con descanso largo). Salto Portal — gastas la mitad de tu velocidad para teletransportarte hasta 10 pies a un espacio visible, o hasta un espacio a 5 pies de un portador del Atlas a 30 pies. Sin límite de usos."
      },
      {
        n: "Precisión Guiada",
        nv: 5,
        d: "Una vez por turno, al golpear con un ataque de un conjuro de la lista del Cartógrafo, o al golpear a una criatura afectada por tu Luz de las Hadas, añades mod INT al daño de ese ataque. Además, recibir daño no puede interrumpir tu concentración en Luz de las Hadas."
      },
      {
        n: "Movimiento Ingenioso",
        nv: 9,
        d: "Cuando usas Guardia Arcana Flash (Flash of Genius), tú o una criatura voluntaria visible a 30 pies podéis teletransportaros hasta 30 pies como parte de la misma Reacción, sin coste adicional de movimiento ni acción."
      },
      {
        n: "Atlas Superior",
        nv: 15,
        d: "Puedes crear tantas copias del Atlas como desees (sin límite de portadores). Una vez por turno, como Reacción cuando un portador lanza un conjuro, puedes hacer que ese conjuro ignore la cobertura total o parcial. Además, una vez por descanso largo, puedes usar Salto Portal para teletransportarte hasta la ubicación de cualquier portador del Atlas a cualquier distancia."
      },
    ],

  }, // fin subclases
}; // fin CLASE_ARTIFICER
