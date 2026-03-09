/* ══════════════════════════════════════════════════════════════════
   clerigo.js — Clérigo: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Sword Coast Adventurer's Guide (SCAG)
     Guildmasters' Guide to Ravnica (GGtR)
     Mythic Odysseys of Theros (MOoT)
     Tal'Dorei Campaign Setting Reborn (TCSR)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (20 entradas):
     Dominio de la Vida         [PHB 2014] / [PHB 2024]
     Dominio de la Luz          [PHB 2014] / [PHB 2024]
     Dominio de la Naturaleza   [PHB 2014]
     Dominio de la Tempestad    [PHB 2014]
     Dominio de la Guerra       [PHB 2014] / [PHB 2024]
     Dominio del Conocimiento   [PHB 2014] / [PHB 2024]
     Dominio del Engaño         [PHB 2014] / [PHB 2024]
     Dominio de la Muerte       [PHB 2014]
     Dominio de la Forja        [XGtE]
     Dominio de las Tumbas      [XGtE]
     Dominio de la Paz          [TCE]
     Dominio del Orden          [TCE]
     Dominio del Crepúsculo     [TCE]
     Dominio Arcano             [SCAG]
     Dominio de las Esporas     [GGtR]
     Dominio del Hogar          [MOoT]
     Dominio de la Sangre       [TCSR]
     Dominio de la Luna         [TCSR]
══════════════════════════════════════════════════════════════════ */

const CLASE_CLERIGO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras y medias, escudos. Todas las armas simples. Salvaciones: SAB y CAR. Habilidades: elige 2 entre Historia, Medicina, Persuasión, Perspicacia y Religión."
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "SAB es tu característica de conjuro (CD = 8 + comp + mod SAB). El Clérigo es un lanzador completo. Prepara conjuros diariamente: elige un número = mod SAB + nivel de Clérigo (mínimo 1) de la lista de Clérigo más los conjuros de dominio (siempre preparados). Conoce todos los trucos de Clérigo que elija al aprender (3 en Nv.1 → 4 en Nv.4 → 5 en Nv.10). Puede cambiar todos los conjuros preparados al terminar un Descanso Largo."
    },
    {
      n: "Dominio Divino",
      nv: 1,
      d: "Eliges tu subclase (Dominio Divino) al Nv.1. Cada dominio otorga conjuros de dominio (siempre preparados, no cuentan contra el límite), competencias adicionales y rasgos en Nv.1, 2, 6, 8 y 17."
    },
    {
      n: "Canalizar Divinidad",
      nv: 2,
      d: "Puedes canalizar energía divina para alimentar efectos mágicos. Usos: 1 (Nv.2-5) → 2 (Nv.6-17) → 3 (Nv.18+). Se recuperan con Descanso Corto o Largo."
    },
    {
      n: "Canalizar Divinidad: Expulsar No-Muertos",
      nv: 2,
      d: "Como Acción, presentas tu símbolo sagrado. Cada no-muerto visible a 30 pies debe superar salvación SAB (CD conjuro) o quedará Asustado de ti durante 1 minuto. Una criatura asustada debe alejarse todo lo posible. En Nv.5 (Destruir No-Muertos) los de CR 1/2 o inferior son destruidos al fallar (CR umbral sube: 1 en Nv.8, 2 en Nv.11, 3 en Nv.14, 4 en Nv.17)."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Destruir No-Muertos",
      nv: 5,
      d: "Cuando usas Expulsar No-Muertos y un no-muerto falla la salvación, es destruido si su CR es igual o inferior al umbral: CR 1/2 (Nv.5), CR 1 (Nv.8), CR 2 (Nv.11), CR 3 (Nv.14), CR 4 (Nv.17)."
    },
    {
      n: "Intervención Divina",
      nv: 10,
      d: "Como Acción, imploras ayuda a tu deidad. Lanzas percentil: si el resultado ≤ tu nivel de Clérigo, tu deidad interviene (el DM decide la forma). Si ocurre, no puedes usarlo de nuevo en 7 días. Si falla, recuperas el uso al terminar Descanso Largo. En Nv.20 la intervención ocurre automáticamente."
    },
    {
      n: "Intervención Divina Mejorada [PHB 2024]",
      nv: 10,
      d: "(PHB 2024) Puedes lanzar cualquier conjuro de Clérigo de Nv.5 o inferior sin gastar espacio ni componentes materiales (1/descanso largo). El conjuro no requiere concentración y dura su duración completa."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (DOMINIOS DIVINOS)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Dominio de la Vida [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Bendecir, Curar Heridas. Nv.3: Restauración Menor, Arma Espiritual. Nv.5: Aura de Vitalidad, Revivificar. Nv.7: Guardián de la Fe, Curar Heridas en Masa. Nv.9: Restauración Mayor, Resucitar Muertos."
      },
      {
        n: "Competencia con Armadura Pesada",
        nv: 1,
        d: "Obtienes competencia en armadura pesada."
      },
      {
        n: "Discípulo de la Vida",
        nv: 1,
        d: "Cuando lanzas un conjuro de Nv.1 o superior que restaure PG, esa criatura recupera PG adicionales = 2 + el nivel del espacio usado."
      },
      {
        n: "Canalizar Divinidad: Preservar Vida",
        nv: 2,
        d: "Como Acción, restauras un total de PG = 5 × nivel de Clérigo distribuidos entre criaturas visibles a 30 pies. Solo puedes curar a cada criatura hasta la mitad de su máximo. No funciona en no-muertos ni constructos."
      },
      {
        n: "Curador Bendecido",
        nv: 6,
        d: "Cuando lanzas un conjuro de Nv.1+ que cure PG a una criatura distinta de ti, también recuperas PG = 2 + nivel del espacio."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 radiante (→2d8 en Nv.14)."
      },
      {
        n: "Curación Suprema",
        nv: 17,
        d: "Cuando lanzas un conjuro curativo, usas el número máximo de cada dado en lugar de tirarlos."
      },
    ],

    "Dominio de la Luz [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Manos Ardientes, Luz de las Hadas. Nv.3: Rayo Llameante, Escorchar. Nv.5: Bola de Fuego, Luz del Día. Nv.7: Guardián de la Fe, Muro de Fuego. Nv.9: Llama, Rayo de Sol."
      },
      {
        n: "Truco Adicional",
        nv: 1,
        d: "Aprendes el truco Luz. Si ya lo conoces, aprendes otro truco de Clérigo a tu elección."
      },
      {
        n: "Destellos Protectores",
        nv: 1,
        d: "Reacción: cuando una criatura a 30 pies va a ser golpeada, impones desventaja al atacante. Usos = mod SAB (mínimo 1). Recarga con Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Brillantez Radiante",
        nv: 2,
        d: "Acción: criaturas hostiles a 30 pies que te vean superan salvación CON (CD conjuro) o reciben 2d10 radiante y quedan Cegadas hasta el fin de tu siguiente turno."
      },
      {
        n: "Corona de Luz",
        nv: 6,
        d: "Acción: emites luz brillante (60 pies) + tenue (30 pies) durante 1 minuto. Atacantes que dependan de la vista tienen desventaja al atacarte. Puedes desactivarla como AA."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 radiante o fuego (→2d8 en Nv.14)."
      },
      {
        n: "Llamarada Solar",
        nv: 17,
        d: "Criaturas que fallen contra Brillantez Radiante quedan Cegadas permanentemente hasta recibir curación mágica."
      },
    ],

    "Dominio de la Naturaleza [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Enredar, Hablar con Animales. Nv.3: Barrera de Espinas, Muro de Viento. Nv.5: Convocar Relámpago, Crecer Plantas. Nv.7: Dominar Bestia, Zancada Arbórea. Nv.9: Comunión con la Naturaleza, Plaga de Insectos."
      },
      {
        n: "Acólito de la Naturaleza",
        nv: 1,
        d: "Aprendes un truco de Druida a tu elección. Ganas competencia en Atletismo, Naturaleza, Percepción o Supervivencia (elige 1)."
      },
      {
        n: "Competencia con Armadura Pesada",
        nv: 1,
        d: "Obtienes competencia en armadura pesada."
      },
      {
        n: "Canalizar Divinidad: Encanto de Bestias y Plantas",
        nv: 2,
        d: "Acción: bestias y plantas visibles a 30 pies superan salvación SAB (CD conjuro) o quedan Encantadas durante 1 minuto. Las criaturas encantadas son amistosas y obedecen tus indicaciones. El efecto termina si reciben daño."
      },
      {
        n: "Defensor de la Naturaleza",
        nv: 6,
        d: "Reacción: cuando una criatura golpea a un aliado a 30 pies, puedes hacer que el atacante supere salvación FUE (CD conjuro) o quede Enredado hasta el fin de su turno."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 veneno (→2d8 en Nv.14)."
      },
      {
        n: "Señor de la Naturaleza",
        nv: 17,
        d: "Inmunidad a veneno y a las condiciones Encantado y Asustado. Bestias y plantas siempre te tratan como amistoso."
      },
    ],

    "Dominio de la Tempestad [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Ola Tronante, Niebla. Nv.3: Rayo, Ráfaga de Viento. Nv.5: Convocar Relámpago, Muro de Viento. Nv.7: Control del Agua, Tormenta de Hielo. Nv.9: Destruir y Matar, Tormenta de Venganza."
      },
      {
        n: "Competencias de Combate",
        nv: 1,
        d: "Obtienes competencia en armas marciales y armadura pesada."
      },
      {
        n: "Corazón de Tormenta",
        nv: 1,
        d: "Cuando lanzas un conjuro de Nv.1+ que cause daño de rayo o trueno, puedes usar tu Reacción para empujar a criaturas a 10 pies del origen hasta 10 pies lejos."
      },
      {
        n: "Canalizar Divinidad: Ira Destructiva",
        nv: 2,
        d: "Cuando tiras daño de rayo o trueno, puedes usar Canalizar Divinidad para causar el daño máximo posible en lugar de tirar."
      },
      {
        n: "Tormenta Furiosa",
        nv: 6,
        d: "Cuando una criatura recibe daño de rayo/trueno de tus conjuros, recibe 10 adicionales del mismo tipo (→14 en Nv.14)."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 trueno (→2d8 en Nv.14)."
      },
      {
        n: "Ojo de la Tormenta",
        nv: 17,
        d: "Velocidad de vuelo 60 pies. Inmunidad a rayo y trueno. Reacción para añadir 2d6 de rayo o trueno a una criatura que los reciba a 30 pies."
      },
    ],

    "Dominio de la Guerra [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Favor Divino, Escudo de Fe. Nv.3: Arma Espiritual, Ira del Guerrero. Nv.5: Cruzada, Arma Elemental. Nv.7: Libertad de Movimiento, Golpe de Poder. Nv.9: Llama, Mantener Monstruo."
      },
      {
        n: "Competencias de Combate",
        nv: 1,
        d: "Obtienes competencia en armas marciales y armadura pesada."
      },
      {
        n: "Sacerdote de Guerra",
        nv: 1,
        d: "Cuando usas la acción de Atacar, puedes realizar un ataque con arma adicional como AA. Usos = mod SAB (mínimo 1). Recarga con Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Golpe Guiado",
        nv: 2,
        d: "Cuando realizas una tirada de ataque, puedes gastar Canalizar Divinidad para ganar +10 a esa tirada (decidido tras ver el resultado, antes de saber si impacta)."
      },
      {
        n: "Canalizar Divinidad: Bendición del Dios de la Guerra",
        nv: 6,
        d: "Reacción: cuando un aliado a 30 pies realiza una tirada de ataque, gastas Canalizar Divinidad para darle +10 (mismo mecanismo que Golpe Guiado)."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 del tipo del arma (→2d8 en Nv.14)."
      },
      {
        n: "Avatar de la Batalla",
        nv: 17,
        d: "Resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      },
    ],

    "Dominio del Conocimiento [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Comando, Identificar. Nv.3: Sugestión, Detectar Pensamientos. Nv.5: No-Detección, Hablar con los Muertos. Nv.7: Confusión, Ojo Arcano. Nv.9: Leyenda Lore, Sugestión en Masa."
      },
      {
        n: "Bendiciones del Conocimiento",
        nv: 1,
        d: "Aprendes 2 idiomas adicionales. Ganas competencia en 2 de estas habilidades: Arcanos, Historia, Naturaleza o Religión. Con las elegidas, tu bonificador de competencia se duplica."
      },
      {
        n: "Canalizar Divinidad: Conocimiento de las Eras",
        nv: 2,
        d: "Acción: elige una habilidad o herramienta. Tienes competencia en ella durante 10 minutos. Si ya la tenías, la doblas."
      },
      {
        n: "Canalizar Divinidad: Leer Pensamientos",
        nv: 2,
        d: "Acción: una criatura a 60 pies supera salvación SAB o puedes leer sus pensamientos superficiales durante 1 minuto. Como Acción puedes lanzar Sugestión sobre ella sin espacio y sin salvación."
      },
      {
        n: "Conocimiento Sobrenatural",
        nv: 6,
        d: "Cuando ves a una criatura usar una habilidad o herramienta, puedes copiar temporalmente esa competencia durante 1 hora (1/descanso largo)."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 psíquico (→2d8 en Nv.14)."
      },
      {
        n: "Conocimiento Visionario",
        nv: 17,
        d: "Lanzas Visión Verdadera a voluntad. Puedes lanzar un conjuro de adivinación sin espacio 1/descanso largo."
      },
    ],

    "Dominio del Engaño [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Disfrazarse, Invisibilidad. Nv.3: Imagen Menor, Paso Brumoso. Nv.5: No-Detección, Parpadeo. Nv.7: Gran Invisibilidad, Polimorfismo. Nv.9: Dominación, Alucinación de Terreno."
      },
      {
        n: "Bendición del Embaucador",
        nv: 1,
        d: "Ganas competencia en Engaño y Sigilo."
      },
      {
        n: "Canalizar Divinidad: Invocar Duplicado",
        nv: 2,
        d: "Acción: creas una copia ilusoria perfecta tuya en un espacio vacío a 30 pies. Dura 1 minuto. Como AA la mueves 30 pies. Puedes lanzar conjuros desde su posición. Desaparece si la golpean."
      },
      {
        n: "Canalizar Divinidad: Manto del Ilusionista",
        nv: 2,
        d: "Acción: te vuelves Invisible durante 1 hora o hasta que ataques o lances un conjuro."
      },
      {
        n: "Embaucador Sombra",
        nv: 6,
        d: "Puedes lanzar conjuros desde la posición del Duplicado. Criaturas a 5 pies del duplicado tienen desventaja en ataques contra ti."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 veneno (→2d8 en Nv.14)."
      },
      {
        n: "Maestro del Engaño",
        nv: 17,
        d: "Polimorfismo sobre ti mismo a voluntad (1/descanso corto, CR 1 o inferior). El Duplicado Invocado puede infligir 2d10 psíquico a criaturas adyacentes."
      },
    ],

    "Dominio de la Muerte [PHB 2014]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Palabra Falsa de los Muertos, Rayo de Debilidad. Nv.3: Nube Ciega, Toque del Vampiro. Nv.5: Animar Muertos, Hablar con los Muertos. Nv.7: Blight, Muerte Apacible. Nv.9: Antipatía/Simpatía, Dedo de la Muerte."
      },
      {
        n: "Competencia con Armas Marciales",
        nv: 1,
        d: "Obtienes competencia en armas marciales."
      },
      {
        n: "Segador",
        nv: 1,
        d: "Aprendes un truco de nigromancia de cualquier lista. Cuando lanzas un truco de nigromancia que afecta a una criatura, puedes afectar a 2 criaturas a 5 pies entre sí dentro del alcance."
      },
      {
        n: "Canalizar Divinidad: Toque de Muerte",
        nv: 2,
        d: "Al golpear con un ataque cuerpo a cuerpo, gastas Canalizar Divinidad para infligir daño de nigromancia adicional = 5 × nivel de Clérigo."
      },
      {
        n: "Ataques de No-Muertos",
        nv: 6,
        d: "Los no-muertos que controles añaden tu bonificador de competencia al daño de sus ataques (una vez por turno por criatura)."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 necrótico (→2d8 en Nv.14)."
      },
      {
        n: "Cosecha de Muerte Mejorada",
        nv: 17,
        d: "Cuando lanzas Animar Muertos, puedes crear 2 no-muertos adicionales por espacio. Tus no-muertos tienen el máximo de PG posibles."
      },
    ],

    /* ── PHB 2024 ── */
    "Dominio de la Vida [PHB 2024]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Bendecir, Curar Heridas. Nv.3: Ayuda, Restauración Menor. Nv.5: Aura de Vitalidad, Revivificar. Nv.7: Muerte Apacible, Curar Heridas en Masa. Nv.9: Restauración Mayor, Resucitar Muertos."
      },
      {
        n: "Discípulo de la Vida",
        nv: 1,
        d: "Cuando lanzas un conjuro de Nv.1+ que restaure PG, la criatura recupera PG adicionales = 2 + nivel del espacio."
      },
      {
        n: "Preservar Vida (Canalizar Divinidad)",
        nv: 2,
        d: "Acción: distribuyes hasta 5 × nivel de Clérigo PG entre criaturas visibles a 30 pies (máx. mitad de PG máx. por criatura). No funciona en no-muertos ni constructos."
      },
      {
        n: "Curador Bendecido",
        nv: 6,
        d: "Al curar a otra criatura con conjuro de Nv.1+, también recuperas PG = 2 + nivel del espacio."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 radiante (→2d8 en Nv.14)."
      },
      {
        n: "Curación Suprema",
        nv: 17,
        d: "Cuando lanzas un conjuro curativo, usas el máximo de cada dado en lugar de tirarlos."
      },
    ],

    "Dominio de la Luz [PHB 2024]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Manos Ardientes, Luz de las Hadas. Nv.3: Rayo Llameante, Escorchar. Nv.5: Bola de Fuego, Luz del Día. Nv.7: Guardián de la Fe, Muro de Fuego. Nv.9: Llama, Rayo de Sol."
      },
      {
        n: "Destellos Protectores",
        nv: 1,
        d: "Reacción: cuando una criatura a 30 pies va a ser golpeada, impones desventaja al atacante. Usos = mod SAB. Recarga con Descanso Largo."
      },
      {
        n: "Brillantez Radiante (Canalizar Divinidad)",
        nv: 2,
        d: "Acción: criaturas hostiles a 30 pies superan salvación CON (CD conjuro) o reciben 2d10 radiante y quedan Cegadas hasta el fin de tu siguiente turno."
      },
      {
        n: "Corona de Luz",
        nv: 6,
        d: "Acción: luz brillante 60 pies + tenue 30 pies durante 1 minuto. Atacantes con visión tienen desventaja al atacarte. Desactivable como AA."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear: +1d8 radiante o fuego (→2d8 en Nv.14)."
      },
      {
        n: "Llamarada Solar",
        nv: 17,
        d: "Criaturas que fallen Brillantez Radiante quedan Cegadas permanentemente hasta recibir curación mágica."
      },
    ],

    "Dominio de la Guerra [PHB 2024]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Favor Divino, Escudo de Fe. Nv.3: Arma Espiritual, Ira del Guerrero. Nv.5: Cruzada, Arma Elemental. Nv.7: Libertad de Movimiento, Golpe de Poder. Nv.9: Llama, Mantener Monstruo."
      },
      {
        n: "Competencias de Combate",
        nv: 1,
        d: "Obtienes competencia en armas marciales y armadura pesada."
      },
      {
        n: "Sacerdote de Guerra",
        nv: 1,
        d: "Cuando usas la acción de Atacar, puedes realizar un ataque con arma adicional como AA. Usos = mod SAB (mínimo 1). Recarga con Descanso Largo."
      },
      {
        n: "Golpe Guiado (Canalizar Divinidad)",
        nv: 2,
        d: "+10 a una tirada de ataque (después de ver el resultado, antes de conocer si impacta). También aplicable a aliados a 30 pies como Reacción (Bendición del Dios de la Guerra)."
      },
      {
        n: "Escudo de Guerra",
        nv: 6,
        d: "Reacción: cuando un aliado a 30 pies recibe un golpe crítico, conviertes ese crítico en un golpe normal."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 del tipo del arma (→2d8 en Nv.14)."
      },
      {
        n: "Avatar de la Batalla",
        nv: 17,
        d: "Resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      },
    ],

    "Dominio del Conocimiento [PHB 2024]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Comando, Identificar. Nv.3: Sugestión, Detectar Pensamientos. Nv.5: No-Detección, Hablar con los Muertos. Nv.7: Confusión, Ojo Arcano. Nv.9: Leyenda Lore, Sugestión en Masa."
      },
      {
        n: "Bendiciones del Conocimiento",
        nv: 1,
        d: "Aprendes 2 idiomas. Ganas dominio (doble bonificador) en 2 de estas habilidades: Arcanos, Historia, Naturaleza o Religión."
      },
      {
        n: "Conocimiento de las Eras (Canalizar Divinidad)",
        nv: 2,
        d: "Acción: competencia en una habilidad o herramienta durante 10 minutos (o dominio si ya la tenías)."
      },
      {
        n: "Leer Pensamientos (Canalizar Divinidad)",
        nv: 2,
        d: "Acción: una criatura a 60 pies supera salvación SAB o puedes leer sus pensamientos durante 1 minuto y lanzar Sugestión sobre ella sin espacio ni salvación."
      },
      {
        n: "Conocimiento Sobrenatural",
        nv: 6,
        d: "Copias temporalmente la competencia de una criatura observada durante 1 hora. 1/descanso largo."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear: +1d8 psíquico (→2d8 en Nv.14)."
      },
      {
        n: "Conocimiento Visionario",
        nv: 17,
        d: "Visión Verdadera a voluntad. 1/descanso largo: lanzas un conjuro de adivinación sin espacio."
      },
    ],

    "Dominio del Engaño [PHB 2024]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Disfrazarse, Invisibilidad. Nv.3: Imagen Menor, Paso Brumoso. Nv.5: No-Detección, Parpadeo. Nv.7: Gran Invisibilidad, Polimorfismo. Nv.9: Dominación, Alucinación de Terreno."
      },
      {
        n: "Bendición del Embaucador",
        nv: 1,
        d: "Competencia en Engaño y Sigilo."
      },
      {
        n: "Invocar Duplicado (Canalizar Divinidad)",
        nv: 2,
        d: "Acción: copia ilusoria perfecta tuya en espacio vacío a 30 pies. Dura 1 minuto. AA para moverla 30 pies. Puedes lanzar conjuros desde su posición. Desaparece si la golpean."
      },
      {
        n: "Manto del Ilusionista (Canalizar Divinidad)",
        nv: 2,
        d: "Acción: Invisibilidad durante 1 hora o hasta que ataques o lances un conjuro."
      },
      {
        n: "Embaucador Sombra",
        nv: 6,
        d: "Conjuros lanzados desde la posición del Duplicado. Criaturas a 5 pies del duplicado tienen desventaja en ataques contra ti."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear: +1d8 psíquico (→2d8 en Nv.14)."
      },
      {
        n: "Maestro del Engaño",
        nv: 17,
        d: "Polimorfismo a voluntad sobre ti mismo (1/descanso corto, bestia CR 1 o inferior). El Duplicado puede infligir 2d10 psíquico a criaturas adyacentes."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Dominio de la Forja [XGtE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Identificar, Manos Ardientes. Nv.3: Arma Mágica, Calor del Metal. Nv.5: Arma Elemental, Protección contra Energía. Nv.7: Fabricar, Muro de Fuego. Nv.9: Animar Objetos, Piel de Piedra."
      },
      {
        n: "Competencias de Forja",
        nv: 1,
        d: "Competencia en armadura pesada y herramientas de herrero. Puedes lanzar Identificar como ritual sin materiales."
      },
      {
        n: "Bendición de la Forja",
        nv: 1,
        d: "Al terminar un Descanso Largo, tocas un arma o armadura no mágica: se vuelve mágica (+1 ataque y daño para armas; +1 CA para armaduras) mientras estés vivo. Solo 1 objeto a la vez."
      },
      {
        n: "Canalizar Divinidad: Bendición del Artesano",
        nv: 2,
        d: "En 1 hora de ritual creas un objeto metálico no mágico de hasta 100 po de valor (arma, armadura, herramienta u objeto metálico ordinario)."
      },
      {
        n: "Alma de la Forja",
        nv: 6,
        d: "Resistencia al daño de fuego. Mientras lleves armadura, +1 a CA."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 fuego (→2d8 en Nv.14)."
      },
      {
        n: "Santo del Forjador",
        nv: 17,
        d: "Inmunidad al daño de fuego. Con armadura puesta, resistencia al daño contundente, perforante y cortante no mágico."
      },
    ],

    "Dominio de las Tumbas [XGtE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Falsa Muerte, Palabra de Curación. Nv.3: Gentle Repose, Silencio. Nv.5: Hablar con los Muertos, Caminar por el Viento. Nv.7: Aura de Vida, Muerte Apacible. Nv.9: Antipatía/Simpatía, Raising the Dead."
      },
      {
        n: "Guardián del Umbral",
        nv: 1,
        d: "Competencia en Medicina. Aprendes Taumaturgia si no la conoces."
      },
      {
        n: "Ojos ante la Muerte",
        nv: 1,
        d: "Acción: durante 1 minuto percibes la vitalidad de criaturas a 30 pies (PG aproximados, si están envenenadas, malditas o enfermas). Usos = mod SAB. Recarga con Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Guardián de las Almas",
        nv: 2,
        d: "Reacción: cuando una criatura a 60 pies va a morir, la preservas en 1 PG en lugar de 0. 1/descanso corto o largo."
      },
      {
        n: "Centinela del Umbral",
        nv: 6,
        d: "Resistencia al daño infligido por no-muertos. Tus conjuros curativos restauran el máximo al lanzarlos sobre criaturas a 0 PG."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 necrótico (→2d8 en Nv.14)."
      },
      {
        n: "Guardianes de las Almas",
        nv: 17,
        d: "Cuando expulsas o destruyes no-muertos, recuperas PG = 2 × CR de la criatura destruida. Puedes lanzar Antipatía/Simpatía centrado en ti sin espacio (1/descanso largo)."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Dominio de la Paz [TCE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Heroísmo, Santuario. Nv.3: Ayuda, Restauración Menor. Nv.5: Aura de Vitalidad, Vínculo Protector. Nv.7: Aura de Pureza, Guardián de la Fe. Nv.9: Restauración Mayor, Resurrección."
      },
      {
        n: "Implemento de la Paz",
        nv: 1,
        d: "Competencia en Perspicacia, Actuación o Persuasión (elige 1)."
      },
      {
        n: "Vínculo de Armonía",
        nv: 1,
        d: "Ritual de 1 minuto: estableces un vínculo con una criatura voluntaria a 30 pies. Mientras el vínculo esté activo y a 30 pies: como Reacción puedes transferirte 1d4 del daño que reciba. Máximo de vínculos = bonificador de competencia. Se rompen con Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Balada Apaciguadora",
        nv: 2,
        d: "Acción: aura de paz en 30 pies durante 1 minuto (concentración). Criaturas hostiles al inicio de su turno en el aura superan salvación SAB (CD conjuro) o quedan Incapacitadas hasta el fin de ese turno."
      },
      {
        n: "Escudo de Protección",
        nv: 6,
        d: "Reacción: cuando una criatura vinculada va a ser golpeada, le añades mod SAB a su CA hasta el inicio de tu siguiente turno."
      },
      {
        n: "Golpe Protector",
        nv: 8,
        d: "1/turno al golpear con arma: otorgas PG temporales = 1d8 + mod SAB a una criatura a 30 pies (→2d8 en Nv.14)."
      },
      {
        n: "Presencia Calmante",
        nv: 17,
        d: "Criaturas amistosas a 60 pies son inmunes a Asustado y Encantado. Acción: terminas cualquier efecto de Miedo o Encantamiento en todos los aliados a 30 pies."
      },
    ],

    "Dominio del Orden [TCE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Comando, Heroísmo. Nv.3: Mantener Persona, Zona de Verdad. Nv.5: Imagen Mayor, Lentitud. Nv.7: Compulsión, Localizar Criatura. Nv.9: Dominación, Mantener Monstruo."
      },
      {
        n: "Competencias del Orden",
        nv: 1,
        d: "Competencia en armadura pesada y en Intimidación o Persuasión (elige 1)."
      },
      {
        n: "Voz del Orden",
        nv: 1,
        d: "Cuando lanzas un conjuro de encantamiento de Nv.1+, un aliado a 30 pies puede como Reacción realizar un ataque con arma o moverse hasta su velocidad."
      },
      {
        n: "Canalizar Divinidad: Orden Sagrada",
        nv: 2,
        d: "Acción: una criatura a 30 pies supera salvación SAB (CD conjuro) o queda Encantada durante 1 minuto. Mientras esté Encantada, debes darle una orden al inicio de cada turno; si no la sigue, queda Incapacitada."
      },
      {
        n: "Guardia del Orden",
        nv: 6,
        d: "Reacción: cuando una criatura Encantada por ti (o aliada) va a ser atacada, el atacante supera salvación SAB (CD conjuro) o el ataque falla automáticamente."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 psíquico (→2d8 en Nv.14)."
      },
      {
        n: "Dominio Absoluto",
        nv: 17,
        d: "Comando puede afectar a cualquier número de criaturas a 30 pies. Orden Sagrada ya no requiere Canalizar Divinidad: usos = mod SAB por Descanso Largo."
      },
    ],

    "Dominio del Crepúsculo [TCE]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Luz de las Hadas, Sueño. Nv.3: Invisibilidad en Masa, Luna (Moonbeam). Nv.5: Aura de Vitalidad, Oscuridad. Nv.7: Aura de Vida, Gran Invisibilidad. Nv.9: Círculo de Poder, Modificar Memoria."
      },
      {
        n: "Ojos del Crepúsculo",
        nv: 1,
        d: "Visión en oscuridad normal y mágica hasta 300 pies. No puedes ser Sorprendido mientras no estés Incapacitado."
      },
      {
        n: "Santuario del Crepúsculo",
        nv: 1,
        d: "Acción: esfera de luz tenue de 30 pies centrada en ti durante 1 minuto (concentración). Dentro: criaturas de tu elección tienen ventaja en salvaciones; criaturas hostiles tienen desventaja en ataques contra criaturas dentro. Usos = mod SAB. Recarga con Descanso Largo."
      },
      {
        n: "Canalizar Divinidad: Paso Crepuscular",
        nv: 2,
        d: "AA: te teletransportas hasta 30 pies a espacio visible. Puedes llevar hasta 5 criaturas voluntarias visibles, cada una a un espacio vacío a 10 pies del destino."
      },
      {
        n: "Pasos en Duermevela",
        nv: 6,
        d: "Mientras el Santuario del Crepúsculo esté activo, tú y los aliados dentro podéis volar a 30 pies."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 psíquico (→2d8 en Nv.14)."
      },
      {
        n: "Vigil Eterno",
        nv: 17,
        d: "No necesitas dormir ni puedes ser dormido mágicamente. Los aliados en tu Santuario tampoco pueden ser dormidos."
      },
    ],

    /* ── Sword Coast Adventurer's Guide ── */
    "Dominio Arcano [SCAG]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Proyectil Mágico, Detectar Magia. Nv.3: Proyectil Llameante, Nube de Dagas. Nv.5: Proyectil Llameante (3º), Dispersar Magia. Nv.7: Ojo Arcano, Gran Invisibilidad. Nv.9: Túnel, Telekinesis."
      },
      {
        n: "Inicia Arcana",
        nv: 1,
        d: "Aprendes 2 trucos de Mago. Puedes lanzar estos trucos como si fueran de Clérigo, usando SAB como característica de conjuro."
      },
      {
        n: "Magia Arcana",
        nv: 1,
        d: "Cuando preparas conjuros de Clérigo, puedes sustituir uno de ellos por un conjuro de Mago del mismo nivel. Ese conjuro arcano cuenta como conjuro de Clérigo para ti."
      },
      {
        n: "Canalizar Divinidad: Conjuro Arcano",
        nv: 2,
        d: "Cuando lanzas un conjuro de Clérigo que cause daño, puedes usar Canalizar Divinidad para que ese conjuro ignore la resistencia al tipo de daño que inflija (no ignora la inmunidad)."
      },
      {
        n: "Recuperación Arcana",
        nv: 6,
        d: "Una vez por Descanso Largo, cuando terminas un Descanso Corto, recuperas espacios de conjuro gastados cuya suma de niveles sea igual o inferior a la mitad de tu nivel de Clérigo (redondeado arriba). No puedes recuperar espacios de Nv.6 o superior con este rasgo."
      },
      {
        n: "Potencia Mágica",
        nv: 8,
        d: "Cuando lanzas un conjuro de Clérigo que cause daño, añades tu modificador de SAB al daño una vez por lanzamiento."
      },
      {
        n: "Conjuro Supremo",
        nv: 17,
        d: "Cuando lanzas un conjuro de daño de Clérigo o Mago usando un espacio de Nv.5 o inferior, puedes lanzarlo de nuevo con la misma acción sin gastar otro espacio. 1/descanso largo."
      },
    ],

    /* ── Guildmasters' Guide to Ravnica ── */
    "Dominio de las Esporas [GGtR]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Brote de Cuchillas, Enredar. Nv.3: Crecer Plantas, Forma Gaseosa. Nv.5: Animar Muertos, Blight. Nv.7: Confusión, Plaga de Insectos. Nv.9: Comunión con la Naturaleza, Dedo de la Muerte."
      },
      {
        n: "Círculo de Esporas",
        nv: 1,
        d: "Aprendes el truco Taumaturgia. Cuando una criatura hostil a 10 pies comienza su turno, puedes usar Reacción para infligirle daño necrótico automático que escala con nivel: 1d4 (Nv.1-5), 1d6 (Nv.6-9), 1d8 (Nv.10-13), 1d10 (Nv.14+)."
      },
      {
        n: "Halo de Esporas",
        nv: 1,
        d: "Cuando una criatura en tu aura de esporas falla una salvación de CON para mantener concentración, puedes usar tu Reacción para que el fallo sea automático."
      },
      {
        n: "Canalizar Divinidad: Infundir Esporas",
        nv: 2,
        d: "Reacción: cuando una criatura Grande o menor muere a 10 pies, la animas con esporas. Se levanta con 1 PG y actúa en tu iniciativa (ataque: +3, 1d6+1 perforante). Dura 1 hora o hasta 0 PG."
      },
      {
        n: "Proliferación de Esporas",
        nv: 6,
        d: "El aura de Círculo de Esporas alcanza 30 pies. Puedes otorgar PG temporales = nivel de Clérigo a aliados que entren en el aura (1 vez por criatura por turno)."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 necrótico (→2d8 en Nv.14)."
      },
      {
        n: "Forma Fúngica",
        nv: 17,
        d: "Lanzas Gaseous Form sobre ti mismo 1/descanso largo sin espacio. En esta forma emites esporas que infligen 3d6 necrótico a criaturas a 5 pies al inicio de su turno (CON CD conjuro para reducir a la mitad)."
      },
    ],

    /* ── Mythic Odysseys of Theros ── */
    "Dominio del Hogar [MOoT]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Crear o Destruir Agua, Curar Heridas. Nv.3: Fortalecer, Restauración Menor. Nv.5: Aura de Vitalidad, Crear Comida y Agua. Nv.7: Localizar Criatura, Guardián de la Fe. Nv.9: Comunión, Curar Heridas en Masa."
      },
      {
        n: "Protector del Hogar",
        nv: 1,
        d: "Competencia en Medicina y Perspicacia. Puedes lanzar Reparar (Mending) a voluntad como ritual para reparar objetos dañados."
      },
      {
        n: "Canalizar Divinidad: Corazón del Hogar",
        nv: 2,
        d: "Acción: designas un área de hasta 1.000 pies cuadrados como hogar sagrado durante 24 horas. Dentro: criaturas hostiles tienen desventaja en ataques contra aliados tuyos; aliados recuperan 1d4 PG adicionales al gastar Dados de Golpe."
      },
      {
        n: "Guardián del Umbral",
        nv: 6,
        d: "En tu Corazón del Hogar eres inmune a Asustado y tienes ventaja en salvaciones contra conjuros. Criaturas que intenten entrar sin ser invitadas superan salvación SAB (CD conjuro) o quedan Asustadas e incapaces de entrar."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 radiante (→2d8 en Nv.14)."
      },
      {
        n: "Santidad del Hogar",
        nv: 17,
        d: "Tu Corazón del Hogar dura indefinidamente. Criaturas amistosas dentro son inmunes a enfermedades y venenos. Expulsar No-Muertos funciona a 60 pies dentro del área."
      },
    ],

    /* ── Tal'Dorei Campaign Setting Reborn ── */
    "Dominio de la Sangre [TCSR]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Falso Vida, Ray of Sickness. Nv.3: Rayo de Debilidad, Spike Growth. Nv.5: Haste, Slow. Nv.7: Blight, Stoneskin. Nv.9: Dominar Persona, Infestación."
      },
      {
        n: "Escucha de la Sangre",
        nv: 1,
        d: "Puedes lanzar Detectar el Mal y el Bien y Detectar Magia a voluntad sin espacio de conjuro, pero solo para detectar criaturas vivas con sangre o efectos que alteren la sangre."
      },
      {
        n: "Sangre como Combustible",
        nv: 1,
        d: "Cuando una criatura a 30 pies pierde PG (no PG temporales), puedes usar tu Reacción para ganar PG temporales = la mitad del daño infligido (máximo = mod SAB). Estos PG temporales duran hasta el siguiente Descanso Corto o Largo."
      },
      {
        n: "Canalizar Divinidad: Torrente de Sangre",
        nv: 2,
        d: "Acción: una criatura a 30 pies que tengas marcada pierde PG = 2d6 + mod SAB (sin salvación). Puedes redistribuir la mitad de ese daño como curación a una criatura amistosa a 30 pies."
      },
      {
        n: "Vínculo Sanguíneo",
        nv: 6,
        d: "Cuando lanzas un conjuro que restaure PG, puedes aumentar la curación en 1d8 adicional por cada criatura a 30 pies que tenga menos de la mitad de sus PG máximos (máximo bonus = mod SAB adicionales)."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 necrótico (→2d8 en Nv.14)."
      },
      {
        n: "Maestro de la Sangre",
        nv: 17,
        d: "Las criaturas que fallan una salvación contra tus conjuros de nigromancia o encantamiento también comienzan a sangrar: pierden 1d6 PG al inicio de cada turno durante 1 minuto (CON CD conjuro para terminar). Inmunidad a daño necrótico."
      },
    ],

    "Dominio de la Luna [TCSR]": [
      {
        n: "Conjuros de Dominio",
        nv: 1,
        d: "Nv.1: Luz de las Hadas, Sueño. Nv.3: Luna (Moonbeam), Silencio. Nv.5: Convocar Relámpago, No-Detección. Nv.7: Guardián de la Fe, Gran Invisibilidad. Nv.9: Comunión, Transmutación de Formas."
      },
      {
        n: "Danza del Claro de Luna",
        nv: 1,
        d: "Aprendes el truco Taumaturgia. Cuando lanzas un conjuro que crea luz brillante o tenue, puedes elegir una criatura dentro de la luz para que tenga desventaja en su siguiente tirada de ataque o salvación (1 vez por conjuro)."
      },
      {
        n: "Bendición Lunar",
        nv: 1,
        d: "Al terminar un Descanso Largo bajo el cielo nocturno (o en entorno donde la luna sea visible), tú y hasta mod SAB aliados voluntarios que puedas ver recuperáis PG adicionales = nivel de Clérigo."
      },
      {
        n: "Canalizar Divinidad: Luz de Luna",
        nv: 2,
        d: "Acción: proyectas una explosión de luz lunar en 30 pies. Criaturas hostiles superan salvación CON (CD conjuro) o quedan Cegadas hasta el inicio de tu siguiente turno y reciben 2d6 de daño radiante. Las criaturas licántropas tienen desventaja en esta salvación."
      },
      {
        n: "Guía del Claro de Luna",
        nv: 6,
        d: "Mientras haya luz brillante (natural o mágica) a 60 pies de ti, puedes usar Reacción cuando un aliado falle una tirada de ataque para darle ventaja en la siguiente tirada de ataque que haga antes del fin de tu siguiente turno."
      },
      {
        n: "Golpe Divino",
        nv: 8,
        d: "1/turno al golpear con arma: +1d8 radiante (→2d8 en Nv.14)."
      },
      {
        n: "Forma Lunar",
        nv: 17,
        d: "Como Acción puedes transformarte en un ser de luz lunar durante 1 minuto: vuelo 60 pies, inmunidad a Cegado y daño radiante, y emites luz brillante en 30 pies que inflige 2d10 radiante a criaturas hostiles al inicio de su turno (CON para reducir a la mitad). 1/descanso largo."
      },
    ],

  }, // fin subclases
}; // fin CLASE_CLERIGO
