/* ═══════════════════════════════════════════════════════
   BASE DE DATOS D&D 5e — CLASES Y SUBCLASES
   Entrega 1: PHB 2014 + PHB 2024
   Formato de rasgo: { n: "Nombre", nv: nivel, d: "descripción" }
═══════════════════════════════════════════════════════ */

const DND_CLASES = {

  /* ══════════════════════════════════════════════════════
     BÁRBARO
  ══════════════════════════════════════════════════════ */
  "Bárbaro": {
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
      "Camino del Berserker [PHB 2014]": [
        { n:"Frenesí", nv:3, d:"En Furia, ataca una vez adicional como Acción Adicional. Al salir, ganas 1 nivel de agotamiento." },
        { n:"Furia Sin Mente", nv:6, d:"No puedes ser encantado ni asustado durante la Furia." },
        { n:"Presencia Intimidatoria", nv:10, d:"Acción: aterroriza a una criatura que puedas ver (CAR). Misma criatura no de nuevo hasta descanso largo." },
        { n:"Represalia", nv:14, d:"Reacción: cuando recibes daño de una criatura, puedes atacarla inmediatamente." },
      ],
      "Camino del Berserker [PHB 2024]": [
        { n:"Frenesí", nv:3, d:"En Furia, una vez por turno al golpear añades 1d6 de daño extra del tipo del arma (sin agotamiento)." },
        { n:"Actitud Descuidada", nv:6, d:"En Furia, cuando atacas con ventaja y aciertas, también golpeas a otra criatura adyacente que no haya atacado." },
        { n:"Presencia Intimidatoria", nv:10, d:"Acción: aterroriza a una criatura visible (salvación CAR). Se puede usar mientras estás en Furia." },
        { n:"Represalia", nv:14, d:"Reacción: al recibir daño de una criatura a 5 pies, puedes atacarla." },
      ],
      "Camino del Guerrero Ancestral [PHB 2014]": [
        { n:"Protectores Ancestrales", nv:3, d:"En el primer turno de tu Furia, los espíritus dan desventaja a los ataques de enemigos contra tus aliados." },
        { n:"Escudo Espiritual", nv:6, d:"Reacción para reducir el daño recibido por un aliado visible en 2d6 + SAB." },
        { n:"Consultar a los Espíritus", nv:10, d:"Lanzas Augur o Comunión con la Naturaleza sin espacios (1/descanso largo)." },
        { n:"Venganza de los Ancestros", nv:14, d:"En Furia, cuando un aliado visible cae a 0 PG, ganas ventaja en ataques contra el responsable." },
      ],
      "Camino del Guerrero Ancestral [PHB 2024]": [
        { n:"Protectores Ancestrales", nv:3, d:"En Furia, los espíritus dificultan los ataques de un enemigo que hayas golpeado (desventaja contra aliados)." },
        { n:"Escudo Espiritual", nv:6, d:"Reacción: cuando un aliado visible recibe daño, reduce ese daño en 2d6 + mod SAB." },
        { n:"Consultar a los Espíritus", nv:10, d:"Sin espacio de conjuro: Augur o Comunión con la Naturaleza (1/descanso largo)." },
        { n:"Venganza de los Ancestros", nv:14, d:"En Furia, al caer un aliado, los espíritus te guían: ventaja en ataques contra el responsable ese turno." },
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
    }
  },

  /* ══════════════════════════════════════════════════════
     BARDO
  ══════════════════════════════════════════════════════ */
  "Bardo": {
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
      "Colegio del Conocimiento [PHB 2014]": [
        { n:"Palabras de Puñal", nv:3, d:"Gasta Inspiración para restar el dado de una tirada de ataque, daño o habilidad de un enemigo." },
        { n:"Secretos Mágicos Adicionales", nv:6, d:"Aprende 2 conjuros adicionales de cualquier lista de clase (antes de lo normal)." },
        { n:"Capacidad Sin Igual", nv:14, d:"Al fallar una tirada de habilidad, puedes gastar Inspiración para volver a tirarla." },
      ],
      "Colegio del Conocimiento [PHB 2024]": [
        { n:"Palabras de Puñal", nv:3, d:"Gasta Inspiración para restar el dado de una tirada de ataque, salvación o habilidad de un enemigo visible." },
        { n:"Secretos Mágicos Adicionales", nv:6, d:"Aprende 2 conjuros extra de cualquier lista de clase." },
        { n:"Infalibilidad Sin Par", nv:14, d:"Al fallar cualquier tirada, gasta Inspiración para volver a tirar." },
      ],
      "Colegio del Valor [PHB 2014]": [
        { n:"Competencia de Combate", nv:3, d:"Competencia en armaduras medias, escudos y armas marciales." },
        { n:"Inspiración de Combate", nv:3, d:"Los aliados pueden usar tu Inspiración para aumentar tiradas de ataque o CA." },
        { n:"Ataque Extra", nv:6, d:"Atacas dos veces con la acción de Atacar." },
        { n:"Magia de Batalla", nv:14, d:"Al lanzar un conjuro de Bardo, puedes atacar una vez como Acción Adicional." },
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
    }
  },

  /* ══════════════════════════════════════════════════════
     CLÉRIGO
  ══════════════════════════════════════════════════════ */
  "Clérigo": {
    rasgos: [
      { n:"Conjuración Divina", nv:1, d:"Lanzador completo (SAB). Lista de Clérigo + conjuros de dominio siempre preparados." },
      { n:"Dominio Divino", nv:1, d:"Elige tu subclase (Dominio). Sus conjuros están siempre preparados." },
      { n:"Canal Divino", nv:2, d:"Usa el poder divino (1 uso/descanso corto → 3 en Nv.18). Base: Expulsar No-muertos." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Destruir No-muertos", nv:5, d:"Expulsar destruye automáticamente no-muertos de CR bajo (escala con nivel)." },
      { n:"Potencia Divina Mejorada", nv:8, d:"Añade mod SAB al daño de uno de tus conjuros de Clérigo por turno." },
      { n:"Intervención Divina", nv:10, d:"Pide ayuda directa a tu deidad. En Nv.20 tiene éxito automático." },
    ],
    subclases: {
      "Dominio de la Vida [PHB 2014/2024]": [
        { n:"Competencia Pesada", nv:1, d:"Competencia en armadura pesada." },
        { n:"Discípulo de la Vida", nv:3, d:"Cuando lanzas un conjuro de curación, el objetivo recupera PG adicionales = 2 + nivel del conjuro." },
        { n:"Canal Divino – Preservar Vida", nv:3, d:"Distribuye hasta 5×nivel de PG de curación entre criaturas a 30 pies." },
        { n:"Curación Bienaventurada", nv:6, d:"Tus conjuros de curación también curan a otra criatura adyacente al objetivo." },
        { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante por ataque con arma, 1 vez/turno (+2d8 en Nv.14)." },
        { n:"Curación Suprema", nv:17, d:"Tus dados de curación siempre muestran el valor máximo." },
      ],
      "Dominio de la Luz [PHB 2014/2024]": [
        { n:"Truco de Bono", nv:1, d:"Aprendes el truco Sagrado o Llama Producida." },
        { n:"Destello Apotropaico", nv:3, d:"Reacción: impone desventaja en un ataque contra ti (SAB/descanso largo)." },
        { n:"Canal Divino – Luz Radiante", nv:3, d:"Emite un destello cegador de 30 pies: criaturas que fallen CON quedan cegadas." },
        { n:"Aura Mejorada de Luz", nv:6, d:"Resistencia al daño de fuego; conjuros de fuego/luz causan +1d6 daño." },
        { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante, 1 vez/turno." },
        { n:"Corona de Luz", nv:17, d:"Activa un aura de luz brillante (60 pies) que daña demonios y no-muertos que entren en ella." },
      ],
      "Dominio de la Tormenta [PHB 2014/2024]": [
        { n:"Competencia de Combate", nv:1, d:"Armadura pesada, tridente, armas de marina/espadón/hacha." },
        { n:"Cólera de la Tormenta", nv:3, d:"Reacción al ser golpeado: el atacante hace tirada CON o sufre 2d8 de rayo o trueno." },
        { n:"Canal Divino – Furia Destructora", nv:3, d:"Maximiza el daño de rayo o trueno de un conjuro en ese momento." },
        { n:"Trueno Divino", nv:6, d:"Cuando lanzas un conjuro que causa daño de trueno, añades SAB a una tirada de daño." },
        { n:"Golpe Divino", nv:8, d:"+1d8 de daño de trueno, 1 vez/turno." },
        { n:"Estormborn", nv:17, d:"Velocidad de vuelo = tu velocidad de movimiento al aire libre." },
      ],
      "Dominio de la Guerra [PHB 2014/2024]": [
        { n:"Competencia de Combate", nv:1, d:"Armadura pesada y armas marciales." },
        { n:"Sacerdote de Guerra", nv:3, d:"Como Acción Adicional cuando atacas con arma, atacas otra vez (SAB/descanso corto)." },
        { n:"Canal Divino – Golpe Guiado", nv:3, d:"+10 a una tirada de ataque (tras ver el resultado)." },
        { n:"Canal Divino – Bendición del Dios de la Guerra", nv:6, d:"Reacción: da +10 a la tirada de ataque de un aliado visible." },
        { n:"Golpe Divino", nv:8, d:"+1d8 del tipo del arma, 1 vez/turno." },
        { n:"Avatar de Batalla", nv:17, d:"Resistencia a daño contundente, perforante y cortante no mágico." },
      ],
      "Dominio del Conocimiento [PHB 2014/2024]": [
        { n:"Bendiciones del Conocimiento", nv:1, d:"Competencia en 2 idiomas adicionales y 2 habilidades INT; doble competencia en ellas." },
        { n:"Canal Divino – Conocimiento de los Siglos", nv:3, d:"Obtén competencia temporal en cualquier habilidad o herramienta (10 minutos)." },
        { n:"Canal Divino – Leer Pensamientos", nv:6, d:"Lee pensamientos superficiales de una criatura o lanza Sugestión sin espacio." },
        { n:"Potencia Mejorada", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
        { n:"Visiones del Pasado", nv:17, d:"Meditando 1 minuto, obtienes visiones sobre un objeto o lugar." },
      ],
      "Dominio de la Naturaleza [PHB 2014]": [
        { n:"Acólito de la Naturaleza", nv:1, d:"Aprende un truco de Druida; competencia en Trato con Animales, Naturaleza o Supervivencia." },
        { n:"Canal Divino – Encantar Animales y Plantas", nv:3, d:"Encanta animales y plantas con éxito automático en 30 pies (SAB para resistir)." },
        { n:"Resistencia de los Seres Naturales", nv:6, d:"Resistencia a veneno y encantamiento; resistencia a daño contundente/perforante/cortante de armas no mágicas." },
        { n:"Golpe Divino", nv:8, d:"+1d8 de daño frío, de rayo o de veneno, 1 vez/turno." },
        { n:"Señor de la Naturaleza", nv:17, d:"Inmunidad a conjuros encantamiento/encanto; animales y plantas naturales te ignoran." },
      ],
      "Dominio de los Engaños [PHB 2014/2024]": [
        { n:"Divinidades del Engaño", nv:1, d:"Aprendes los conjuros Disfrazarse y Encantar Persona (siempre preparados; gratis 1 vez/descanso largo)." },
        { n:"Canal Divino – Invocar Duplicado", nv:3, d:"Crea una copia ilusoria de ti a 30 pies. Puedes moverte a través de ella y lanzar conjuros desde su posición." },
        { n:"Canal Divino – Capa de Sombras", nv:3, d:"Otorga ventaja en Sigilo y Engaño a una criatura que toques durante 1 hora." },
        { n:"Golpe Divino", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
        { n:"Maestro del Engaño", nv:17, d:"Puedes crear hasta 4 copias ilusorias de ti mismo. Las controlas como Acción Adicional." },
      ],
      "Dominio de la Muerte [PHB 2014]": [
        { n:"Competencia en Armas Marciales", nv:1, d:"Competencia con armas marciales." },
        { n:"Segador", nv:3, d:"Los trucos de daño que normalmente afectan a 1 criatura también afectan a una segunda criatura a 5 pies." },
        { n:"Canal Divino – Toque de Muerte", nv:3, d:"Al tocar a una criatura, inflige 5 + nivel×2 de daño necrótico." },
        { n:"Golpe Divino", nv:8, d:"+1d8 de daño necrótico, 1 vez/turno." },
        { n:"Control Indestructible", nv:17, d:"Inmune al daño de tus propios conjuros de muerte; criaturas a 10 pies al morir propagan un pulso necrótico." },
      ],
      "Dominio Arcano [PHB 2024]": [
        { n:"Hechizología Arcana", nv:1, d:"Aprende 2 trucos de Mago (cuentan como conjuros de Clérigo para ti)." },
        { n:"Conjuros Arcanos", nv:3, d:"Aprende 2 conjuros de Mago de Nv.1-2 (siempre preparados); ganas 1 uso adicional de Canal Divino." },
        { n:"Canal Divino – Magia de Arcano Divino", nv:3, d:"Recupera un espacio de conjuro de Nv.1-4 (escala con nivel de Clérigo)." },
        { n:"Defensa Arcana", nv:6, d:"+INT a salvaciones contra conjuros y efectos mágicos." },
        { n:"Golpe Divino", nv:8, d:"+1d8 de daño de fuerza, 1 vez/turno." },
        { n:"Dominador de Hechizos", nv:17, d:"Puedes preparar conjuros de Mago adicionales y usarlos con tu INT." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     DRUIDA
  ══════════════════════════════════════════════════════ */
  "Druida": {
    rasgos: [
      { n:"Conjuración", nv:1, d:"Lanzador completo (SAB). Lista de Druida." },
      { n:"Lenguaje Druídico", nv:1, d:"Conoces el lenguaje secreto de los druidas y puedes dejar mensajes ocultos en la naturaleza." },
      { n:"Forma Salvaje", nv:2, d:"Transfórmate en bestia 2 veces/descanso corto. CR máximo escala con nivel." },
      { n:"Círculo Druídico", nv:3, d:"Elige tu subclase (Círculo)." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Paso por la Tierra", nv:6, d:"El terreno difícil de origen natural no te afecta ni ralentiza." },
      { n:"Cuerpo de Naturaleza", nv:18, d:"En Forma Salvaje, resistes al daño contundente, perforante y cortante no mágico." },
      { n:"Archidruida", nv:20, d:"Puedes usar Forma Salvaje un número ilimitado de veces." },
    ],
    subclases: {
      "Círculo de la Luna [PHB 2014]": [
        { n:"Formas de Combate", nv:2, d:"Forma Salvaje incluye bestias de CR hasta 1 (desde CR 1/4). CR máximo = nivel/3. Incluye criaturas con natación/escalada." },
        { n:"Forma Elemental", nv:10, d:"Gasta 2 usos de Forma Salvaje para transformarte en un elemental de Agua, Tierra, Fuego o Aire." },
        { n:"Golpes de Bestia", nv:6, d:"Tus ataques en Forma Salvaje se consideran mágicos a efectos de resistencias." },
        { n:"Bestia Mítica", nv:14, d:"En Forma Salvaje puedes añadir INT, SAB o CAR a un ataque cuerpo a cuerpo." },
      ],
      "Círculo de la Luna [PHB 2024]": [
        { n:"Formas de Combate", nv:2, d:"Forma Salvaje incluye bestias de CR hasta nivel/3 (mínimo CR 1). Vuelo permitido antes." },
        { n:"Golpes de Bestia", nv:6, d:"Tus ataques en Forma Salvaje se consideran mágicos." },
        { n:"Forma Elemental", nv:10, d:"Transformación en elemental sin gastar usos adicionales de Forma Salvaje." },
        { n:"Bestia Mítica", nv:14, d:"Forma Salvaje gana una característica de cada bestia que hayas sido anteriormente en la sesión." },
      ],
      "Círculo de la Tierra [PHB 2014]": [
        { n:"Truco Adicional", nv:2, d:"Aprende 1 truco de Druida adicional." },
        { n:"Recuperación Natural", nv:2, d:"1/descanso largo, tras un descanso corto recuperas espacios de conjuro de nivel total ≤ mitad nivel." },
        { n:"Conjuros de Círculo", nv:3, d:"Conjuros adicionales siempre preparados según terreno elegido (Ártico, Costa, Desierto, Bosque, Llanura, Montaña, Pantano, Inframundo)." },
        { n:"Paso por la Tierra", nv:6, d:"El terreno difícil natural no te afecta; evitas trampas de origen natural o mágico." },
        { n:"Mente Esquiva", nv:10, d:"Ventaja en tiradas de salvación de CON para mantener concentración." },
        { n:"Santuario de la Naturaleza", nv:14, d:"Los animales salvajes y las plantas no te atacan salvo compulsión mágica." },
      ],
      "Círculo de la Tierra [PHB 2024]": [
        { n:"Truco Adicional", nv:2, d:"Aprende 1 truco de Druida adicional." },
        { n:"Recuperación Natural", nv:2, d:"1/descanso largo, recupera espacios de conjuro de nivel total ≤ mitad nivel." },
        { n:"Conjuros de Círculo", nv:3, d:"Conjuros adicionales según terreno elegido (Ártico, Costa, Desierto, Bosque, Llanura, Montaña, Pantano, Inframundo)." },
        { n:"Deambulante de la Tierra", nv:6, d:"El terreno difícil natural no te cuesta movimiento adicional." },
        { n:"Magia Inagotable", nv:10, d:"Cuando lanzas un conjuro de Círculo, recuperas 1 uso de Forma Salvaje." },
        { n:"Guardián de la Naturaleza", nv:14, d:"Cuando uses Forma Salvaje en área de tu terreno, puedes afectar a criaturas hostiles a 30 pies." },
      ],
      "Círculo del Mar [PHB 2024]": [
        { n:"Conjuros del Mar", nv:3, d:"Nebulina, Paso del Trueno, Conjurar Relámpagos, Control del Tiempo, Marea Alta... siempre preparados." },
        { n:"Furia de la Tormenta", nv:3, d:"Reacción al ser golpeado: el atacante sufre 1d6 de rayo (DEX para reducir a la mitad). Escala a 2d6 en Nv.10." },
        { n:"Desplazamiento del Océano", nv:6, d:"Como Acción Adicional, teletransportas a un objetivo a 60 pies dentro del agua o a una corriente." },
        { n:"Forma Oceánica", nv:10, d:"Gasta 1 uso de Forma Salvaje: te transformas en un Elementar de Agua por 10 minutos." },
        { n:"Marejada", nv:14, d:"Una vez por turno, cuando golpeas en Forma Oceánica, empujas al objetivo 15 pies y lo tumbas." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     EXPLORADOR / RANGER
  ══════════════════════════════════════════════════════ */
  "Explorador": {
    rasgos: [
      { n:"Enemigo Favorecido", nv:1, d:"Ventaja en rastrear; +2 daño vs. tipo de criatura elegido (escala a +4 en Nv.6, +6 en Nv.14)." },
      { n:"Entorno Favorecido", nv:1, d:"Doble competencia en Naturaleza y Supervivencia en terreno elegido; ventajas de orientación." },
      { n:"Conjuración", nv:2, d:"Lanzador medio (SAB). Lista del Explorador. Prepara conjuros = SAB + mitad nivel." },
      { n:"Estilo de Combate", nv:2, d:"Elige un estilo de combate especializado (Arquería, Duelo, Lucha con dos armas, etc.)." },
      { n:"Conciencia Primitiva", nv:3, d:"Expande tus sentidos: 1 minuto de concentración para detectar tipos de criaturas a 1 milla." },
      { n:"Arquetipo de Explorador", nv:3, d:"Elige tu subclase." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Ataque Extra", nv:5, d:"Atacas dos veces con la acción de Atacar." },
      { n:"Paso de las Tierras", nv:8, d:"El terreno difícil de origen natural no te afecta; Forma de la Naturaleza sin concentración." },
      { n:"Mente Oculta", nv:10, d:"No puedes ser sorprendido mientras estás consciente." },
      { n:"Desvanecerse", nv:14, d:"Puedes usar la acción de Esconderse como Acción Adicional." },
      { n:"Sentido Salvaje", nv:18, d:"1/descanso corto: Detectar Bien y el Mal en 1 milla (bestias y criaturas no detectadas)." },
      { n:"Matador de Enemigos", nv:20, d:"1/turno: cuando golpeas a tu Enemigo Favorecido, añades 1d10 + SAB al daño." },
    ],
    subclases: {
      "Cazador [PHB 2014]": [
        { n:"Presa del Cazador", nv:3, d:"Elige 1 entre: Asesino de Hordas (+1d6 a Primero de la ronda), Matador de Colosos (1d8 extra) o Mata-gigantes (ataque oportunidad al atacar)." },
        { n:"Tácticas Defensivas", nv:7, d:"Elige 1 entre: Reflexivos (ventaja en DEX vs. trampas/magia de área), Escurridizo (sin ataques de oportunidad) o Voluntad de Acero (ventaja vs. asustado)." },
        { n:"Multiataques", nv:11, d:"Elige 1 entre: Ráfaga de Flechas (3 objetivos con un ataque) o Torbellino (todos a 5 pies)." },
        { n:"Técnica Superior del Cazador", nv:15, d:"Elige 1 entre: Crítico Superior (crítico en 19-20), Esquiva Superior (mitad daño con DEX) o Dispersar la Muchedumbre (+1d6 a Hordas)." },
      ],
      "Cazador [PHB 2024]": [
        { n:"Cazador Nato", nv:3, d:"Competencia en Perspicacia y Supervivencia con doble competencia; no sorprendido si consciente." },
        { n:"Marca del Cazador", nv:3, d:"Como Acción Adicional, marcas a 1 objetivo: +1d6 daño en todos tus ataques contra él, ventaja en Percepción/Supervivencia para rastrearlo." },
        { n:"Multiataque del Cazador", nv:7, d:"Puedes atacar a hasta 3 objetivos distintos en la misma acción de Atacar." },
        { n:"Evasión del Cazador", nv:11, d:"Si fallas una salvación de DEX, sufres la mitad del daño en lugar de todo." },
        { n:"Mente de Acero", nv:15, d:"Ventaja en salvaciones de SAB; inmune a la condición asustado." },
      ],
      "Acechador de la Bestia [PHB 2014]": [
        { n:"Compañero de la Bestia", nv:3, d:"Un animal compañero de CR ≤ nivel/4 combate a tu lado y escala con tu nivel." },
        { n:"Vinculación Excepcional", nv:7, d:"Cuando el compañero falla una salvación de DEX, no recibe daño si tú estás a 5 pies." },
        { n:"Tácticas de la Manada", nv:11, d:"El compañero tiene ventaja en todos sus ataques si tú estás a 5 pies del objetivo." },
        { n:"Intercambio Profundo", nv:15, d:"Puedes usar la acción del compañero simultáneamente con tu propia Acción Adicional." },
      ],
      "Acechador de la Bestia [PHB 2024]": [
        { n:"Compañero Primo", nv:3, d:"Compañero animal mejorado (CR ≤ nivel/4, mínimo CR 1/4). Puede actuar con tu Acción Adicional." },
        { n:"Vínculo Primo", nv:3, d:"Compartes tus bonos de competencia con el compañero; recuperas 1 uso de Forma Salvaje cuando combate." },
        { n:"Aliado Bestial", nv:7, d:"El compañero gana +SAB a las tiradas de daño." },
        { n:"Protector Bestial", nv:11, d:"Cuando eres atacado, el compañero puede interponerse: recibe él el daño si está a 5 pies." },
        { n:"Vínculo Definitivo", nv:15, d:"El compañero actúa en su propio turno además del tuyo." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     GUERRERO / FIGHTER
  ══════════════════════════════════════════════════════ */
  "Guerrero": {
    rasgos: [
      { n:"Estilo de Combate", nv:1, d:"Elige una especialización de combate (Arquería, Duelo, Defensa, Gran Arma, Interposición, etc.)." },
      { n:"Segundo Aliento", nv:1, d:"Acción Adicional: recupera 1d10 + nivel de PG (1/descanso corto)." },
      { n:"Oleada de Acción", nv:2, d:"1/descanso corto: realiza una acción adicional completa en tu turno." },
      { n:"Arquetipo Marcial", nv:3, d:"Elige tu subclase." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.6, 8, 12, 14, 16, 19 (más Mejoras que otras clases)." },
      { n:"Ataque Extra", nv:5, d:"2 ataques (→3 en Nv.11, →4 en Nv.20) con la acción de Atacar." },
      { n:"Golpe Indomable", nv:9, d:"Repite una tirada de salvación fallida 1 vez (→2 en Nv.13, →3 en Nv.17)." },
    ],
    subclases: {
      "Campeón [PHB 2014]": [
        { n:"Crítico Mejorado", nv:3, d:"Crítico con 19-20 (→18-20 en Nv.15)." },
        { n:"Atleta Notable", nv:7, d:"Doble competencia en Atletismo; salto de longitud/altura sin carrerilla cuenta como si la tuvieras." },
        { n:"Estilo de Combate Adicional", nv:10, d:"Aprende un segundo Estilo de Combate." },
        { n:"Crítico Superior", nv:15, d:"Crítico con 18-20." },
        { n:"Superviviente", nv:18, d:"Al inicio de tu turno con ≤ mitad de PG máximos, recuperas 5 + CON de PG." },
      ],
      "Campeón [PHB 2024]": [
        { n:"Crítico Mejorado", nv:3, d:"Crítico con 19-20 (→18-20 en Nv.15)." },
        { n:"Hazaña Heroica", nv:7, d:"Ganas acceso a Dotes especiales de Campeón; puedes gastar una cada descanso." },
        { n:"Estilo Adicional", nv:10, d:"Aprende un segundo Estilo de Combate." },
        { n:"Crítico Legendario", nv:15, d:"Crítico con 18-20." },
        { n:"Superviviente", nv:18, d:"Al inicio de tu turno con ≤ mitad PG, recuperas 5 + CON de PG." },
      ],
      "Maestro de Batalla [PHB 2014]": [
        { n:"Maniobras de Combate", nv:3, d:"Aprende 3 maniobras (de 16 disponibles); 4 Dados de Superioridad d8 (→d10 en Nv.10, →d12 en Nv.18)." },
        { n:"Estudioso de la Guerra", nv:3, d:"Competencia en un tipo de herramienta artesanal o instrumento musical." },
        { n:"Maniobras Adicionales", nv:7, d:"Aprende 2 maniobras más." },
        { n:"Saber del Maestro", nv:15, d:"Recuperas 1d3 Dados de Superioridad al tirar Iniciativa." },
        { n:"Implacable", nv:18, d:"Cuando gastas tu último Dado de Superioridad, recuperas 1 automáticamente." },
      ],
      "Maestro de Batalla [PHB 2024]": [
        { n:"Maniobras de Combate", nv:3, d:"Aprende 3 maniobras + 4 Dados de Superioridad d8. Añade más maniobras en Nv.7, 10, 15." },
        { n:"Estudioso de la Guerra", nv:3, d:"Competencia en una herramienta artesanal o instrumento." },
        { n:"Conocimiento Marcial", nv:7, d:"Puedes usar maniobras en ataques de oportunidad." },
        { n:"Saber del Maestro", nv:15, d:"Recuperas 1d3 Dados de Superioridad al tirar Iniciativa." },
        { n:"Maestro sin igual", nv:18, d:"Cuando gastas el último Dado de Superioridad, recuperas inmediatamente 1." },
      ],
      "Caballero de Arcano [PHB 2014]": [
        { n:"Conjuración", nv:3, d:"Lanzador limitado de conjuros de Mago (INT). Preferencia por Evocación y Abjuración." },
        { n:"Vínculo con Arma", nv:3, d:"Vincula hasta 2 armas; puedes invocarlas con Acción Adicional y no las puedes soltar sin querer." },
        { n:"Magia de Guerra", nv:7, d:"Al lanzar un truco, puedes hacer 1 ataque como Acción Adicional." },
        { n:"Golpe Arcano", nv:10, d:"Si el objetivo falla CON tras ser golpeado, tu siguiente conjuro ignora su resistencia a magia." },
        { n:"Carga de Guerra Arcana", nv:15, d:"Al usar Magia de Guerra, puedes teletransportarte 30 pies antes de atacar." },
        { n:"Magia de Guerra Mejorada", nv:18, d:"Al atacar, puedes lanzar un conjuro de Nv.1-2 como Acción Adicional." },
      ],
      "Caballero de Arcano [PHB 2024]": [
        { n:"Conjuración", nv:3, d:"Lanzador limitado de conjuros de Mago (INT). Preferencia Evocación/Abjuración." },
        { n:"Vínculo con Arma", nv:3, d:"Vincula 2 armas; puedes invocarlas como Acción Adicional; no se sueltan involuntariamente." },
        { n:"Magia de Guerra", nv:7, d:"Al lanzar un truco, realiza 1 ataque de arma vinculada como Acción Adicional." },
        { n:"Golpe Arcano", nv:10, d:"Tras golpear, si falla CON, el siguiente conjuro ignora resistencia a magia." },
        { n:"Carga de Guerra Arcana", nv:15, d:"Al usar Magia de Guerra, puedes teletransportarte hasta 30 pies." },
        { n:"Magia de Guerra Mejorada", nv:18, d:"Puedes lanzar un conjuro de Nv.1-4 como Acción Adicional después de atacar." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     HECHICERO / SORCERER
  ══════════════════════════════════════════════════════ */
  "Hechicero": {
    rasgos: [
      { n:"Conjuración", nv:1, d:"Lanzador completo (CAR). Lista de Hechicero. Conoce un número fijo de conjuros." },
      { n:"Origen de Hechicería", nv:1, d:"Elige tu subclase (origen de tu poder innato)." },
      { n:"Puntos de Hechicería", nv:2, d:"Moneda mágica (= nivel) para crear Espacios adicionales o potenciar Metamagia." },
      { n:"Metamagia", nv:3, d:"Elige 2 opciones de metamagia: Acelerado, Cuidadoso, Distante, Potenciado, Extendido, Sutil, Gemelo, Buscador. Más en Nv.10 y 17." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Recuperación de Hechicería", nv:20, d:"Al inicio de cada turno de combate, ganas 4 Puntos de Hechicería automáticamente." },
    ],
    subclases: {
      "Linaje Dracónico [PHB 2014]": [
        { n:"Ancestro Dracónico", nv:1, d:"Elige un tipo de dragón (Rojo, Azul, Verde, Negro, Blanco, Oro, Plata…); idioma Dracónico y resistencia al daño asociado." },
        { n:"Resiliencia Dracónica", nv:1, d:"+1 PG máximo por nivel; cuando no llevas armadura, CA = 13 + DEX." },
        { n:"Afinidad Elemental", nv:6, d:"Cuando lanzas un conjuro del tipo de tu ancestro, añade CAR al daño (y puedes gastar 1 Punto para resistencia 1 hora)." },
        { n:"Alas de Dragón", nv:14, d:"Como Acción Adicional, despliegas alas: velocidad de vuelo 60 pies." },
        { n:"Presencia Dracónica", nv:18, d:"Acción + 5 Puntos: emite aura de 60 pies de miedo o fascinación (SAB para resistir)." },
      ],
      "Linaje Dracónico [PHB 2024]": [
        { n:"Ancestro Dracónico", nv:1, d:"Elige tipo de dragón; resistencia al tipo de daño correspondiente." },
        { n:"Resiliencia Dracónica", nv:1, d:"+1 PG/nivel; CA = 13 + DEX sin armadura." },
        { n:"Guardián Dracónico", nv:6, d:"Cuando lanzas un conjuro de Nv.1+, puedes manifestar un dragón espectral que ataca o protege." },
        { n:"Alas de Dragón", nv:14, d:"Como Acción Adicional, despliegas alas: vuelo 60 pies." },
        { n:"Presencia Dracónica", nv:18, d:"Emite aura de miedo o fascinación 60 pies (SAB para resistir)." },
      ],
      "Alma Salvaje [PHB 2014]": [
        { n:"Magia Salvaje", nv:1, d:"Tras lanzar un conjuro de Nv.1+, el DM puede pedir una tirada: si sacas ≤10, lanzas 1d100 en la tabla de Oleadas de Magia Salvaje." },
        { n:"Resonancia Oscura", nv:1, d:"Gasta 1 Punto de Hechicería para activar una Oleada de Magia Salvaje inmediatamente." },
        { n:"Marea de Caos", nv:6, d:"1/descanso largo: tienes ventaja en 1 tirada de ataque/habilidad/salvación. Si lo usas, el DM puede pedir una Oleada." },
        { n:"Magia Hechizante", nv:14, d:"Puedes gastar 1 Punto para activar una Oleada y elegir el efecto de la tabla en lugar de tirar." },
        { n:"Explosión Hechizante", nv:18, d:"Al activar una Oleada de Magia Salvaje, activas simultáneamente el efecto 'Rayos de Colores'." },
      ],
      "Alma Salvaje [PHB 2024]": [
        { n:"Magia Salvaje", nv:1, d:"Tras lanzar un conjuro, el DM puede pedir tirada: en ≤10, tabla de Magia Salvaje (d100)." },
        { n:"Resonancia Oscura", nv:1, d:"Gasta 1 Punto: activa una Oleada controlada." },
        { n:"Tide of Chaos", nv:6, d:"1/descanso largo: ventaja en 1 tirada. Usando Resonancia después restaura Tide of Chaos." },
        { n:"Magia Controlada", nv:14, d:"Cuando activas Oleada, eliges entre dos efectos de la tabla." },
        { n:"Explosión Hechizante", nv:18, d:"Tus Oleadas siempre incluyen el efecto de Bola de Fuego adicional en área." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     MAGO / WIZARD
  ══════════════════════════════════════════════════════ */
  "Mago": {
    rasgos: [
      { n:"Conjuración", nv:1, d:"Lanzador completo (INT). Lista de Mago, la más amplia del juego. Grimorio de conjuros." },
      { n:"Recuperación Arcana", nv:1, d:"1/descanso largo: tras un descanso corto, recuperas espacios de conjuro de nivel total ≤ mitad nivel." },
      { n:"Tradición Arcana", nv:2, d:"Elige tu subclase (Escuela de Magia u otra)." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Maestría de Conjuro", nv:18, d:"Elige 1 conjuro de Nv.1 y 1 de Nv.2 de tu grimorio; los lanzas sin gastar espacio." },
      { n:"Conjuros con Firma", nv:20, d:"Elige 2 conjuros de Nv.3; siempre preparados y puedes lanzarlos sin espacio 1 vez cada uno por descanso largo." },
    ],
    subclases: {
      "Escuela de Abjuración [PHB 2014]": [
        { n:"Abjurador Experto", nv:2, d:"Gana 2× competencia para salvaciones de Abjuración; coste de copiar conjuros de Abjuración reducido." },
        { n:"Protección Arcana", nv:2, d:"Barrera de energía mágica = 2 × nivel de Mago PG. Se recarga al lanzar Abjuración." },
        { n:"Supresión Proyectada", nv:6, d:"Disipar Magia y Antimagia Magic Field tienen radio mejorado cuando los lanzas tú." },
        { n:"Pureza Mejorada", nv:10, d:"Tu Protección Arcana puede proteger también a un aliado adyacente." },
        { n:"Resistencia Mágica", nv:14, d:"Ventaja en salvaciones contra conjuros y efectos mágicos; resistencia al daño de conjuros." },
      ],
      "Escuela de Abjuración [PHB 2024]": [
        { n:"Experto en Abjuración", nv:2, d:"Doble competencia en Arcana para Abjuración; coste reducido de copia." },
        { n:"Protección Arcana", nv:2, d:"Barrera de 2×nivel PG que bloquea daño. Se recarga lanzando Abjuración." },
        { n:"Supresión Arcana Proyectada", nv:6, d:"Disipar Magia puede alcanzar más objetivos a la vez." },
        { n:"Manto de Abjuración", nv:10, d:"La barrera también protege a aliados a 5 pies." },
        { n:"Resistencia Mágica", nv:14, d:"Ventaja en salvaciones contra conjuros; resistencia al daño mágico." },
      ],
      "Escuela de Conjuración [PHB 2014]": [
        { n:"Conjurador Experto", nv:2, d:"Copiar conjuros de Conjuración a mitad de coste y tiempo." },
        { n:"Conjuración Menor", nv:2, d:"Crea un objeto Diminuto o Pequeño inanimado (no mágico) que dura 1 hora." },
        { n:"Distorsión Benigna", nv:6, d:"Cuando invocas o convocas una criatura, puede aparecer en cualquier espacio vacío a 20 pies." },
        { n:"Paso del Conjurador", nv:10, d:"Puedes teletransportarte 30 pies como parte de tu movimiento (1/turno)." },
        { n:"Invocación Enfocada", nv:14, d:"Concentración en conjuros de Conjuración no se rompe por recibir daño." },
      ],
      "Escuela de Adivinación [PHB 2014]": [
        { n:"Augur Experto", nv:2, d:"Copiar conjuros de Adivinación a mitad de coste y tiempo." },
        { n:"Presagio", nv:2, d:"Cada día al amanecer, tira 2d20; anota los resultados. Puedes sustituir cualquier tirada de ataque/salvación/habilidad por uno de estos dados." },
        { n:"Tercero Superior", nv:6, d:"Cuando lanzas un conjuro de Adivinación, recuperas 1 espacio de Nv.1 (1/turno)." },
        { n:"El Tercer Ojo", nv:10, d:"1/descanso largo: ganas uno de los siguientes: Visión en Oscuridad, Visión Etérea, Leer Mentes (30 pies), o Ver Invisible." },
        { n:"Mayor Presagio", nv:14, d:"Tira 3d20 para Presagio. Puedes dar uno de tus dados de Presagio a un aliado visible." },
      ],
      "Escuela de Adivinación [PHB 2024]": [
        { n:"Presagio", nv:2, d:"Tira 2d20 al amanecer; sustituye tiradas de ataque/salvación/habilidad de cualquier criatura visible." },
        { n:"Clarividencia de Experto", nv:6, d:"Cuando usas Presagio en un aliado, ese aliado también gana ventaja en su tirada." },
        { n:"El Tercer Ojo", nv:10, d:"1/descanso largo: ganas Visión en Oscuridad, Etérea, Leer Mentes o Ver Invisible." },
        { n:"Mayor Presagio", nv:14, d:"Tiras 3d20 para Presagio y puedes compartir uno de los resultados." },
      ],
      "Escuela de Encantamiento [PHB 2014]": [
        { n:"Encantador Experto", nv:2, d:"Copiar conjuros de Encantamiento a mitad de coste y tiempo." },
        { n:"Hipnótico", nv:2, d:"Cuando lanzas un conjuro de Encantamiento, el objetivo no recuerda que lanzaste el conjuro si dura 1 minuto o menos." },
        { n:"Golpe de Instinto", nv:6, d:"Cuando un aliado ataca a un objetivo que tú has encantado, obtiene ventaja en ese ataque." },
        { n:"División del Encanto", nv:10, d:"Al lanzar un conjuro de Encantamiento que afecta a 1 criatura, puedes afectar a 2 criaturas a la vez." },
        { n:"Alterar Memoria", nv:14, d:"Si encanta a un objetivo, puedes borrar hasta 5 minutos de su memoria de los últimos 24 horas." },
      ],
      "Escuela de Encantamiento [PHB 2024]": [
        { n:"Hipnótico", nv:2, d:"Los encantados no recuerdan el conjuro si dura ≤ 1 minuto." },
        { n:"Golpe de Instinto", nv:6, d:"Aliados obtienen ventaja en ataques contra criaturas que has encantado." },
        { n:"División del Encanto", nv:10, d:"Tus conjuros de Encantamiento de 1 objetivo pueden afectar a 2 criaturas." },
        { n:"Alterar Memoria", nv:14, d:"Tras encantar, borra hasta 5 minutos de memoria reciente del objetivo." },
      ],
      "Escuela de Evocación [PHB 2014]": [
        { n:"Evocador Experto", nv:2, d:"Copiar conjuros de Evocación a mitad de coste y tiempo." },
        { n:"Escultor de Conjuros", nv:2, d:"Cuando lanzas un conjuro de Evocación con área, puedes proteger a hasta INT criaturas (sin daño ni efecto)." },
        { n:"Truco Potenciado", nv:6, d:"Los trucos de Evocación que causan daño pueden re-tirar el mínimo obtenido en los dados (1 vez/lanzamiento)." },
        { n:"Evocación Potenciada", nv:10, d:"Añade tu modificador INT al daño de los conjuros de Evocación de Mago." },
        { n:"Sobrecargar", nv:14, d:"Puedes lanzar un conjuro de Evocación de Nv.1-5 como si tuvieras un espacio de Nv.5 sin gastar uno superior." },
      ],
      "Escuela de Evocación [PHB 2024]": [
        { n:"Escultor de Conjuros", nv:2, d:"Protege a hasta INT criaturas de tus conjuros de Evocación con área de efecto." },
        { n:"Truco Potenciado", nv:6, d:"Re-tira el dado mínimo en trucos de Evocación (1 vez/lanzamiento)." },
        { n:"Evocación Potenciada", nv:10, d:"Añade INT al daño de cualquier conjuro de Evocación de Mago." },
        { n:"Sobrecargar", nv:14, d:"Lanza conjuros de Nv.1-5 de Evocación como si fueran Nv.5 sin gastar espacio superior (1/descanso largo)." },
      ],
      "Escuela de Ilusión [PHB 2014]": [
        { n:"Ilusionista Experto", nv:2, d:"Copiar conjuros de Ilusión a mitad de coste; lanzas trucos de Ilusión como Acción Adicional." },
        { n:"Ilusiones Maleables", nv:6, d:"Cuando tienes activa una ilusión de concentración, puedes cambiar su naturaleza con una Acción." },
        { n:"Duplicado Ilusorio", nv:10, d:"1/descanso corto: lanzas Imagen Mayor sin espacio de conjuro ni componentes." },
        { n:"Realidad Ilusoria", nv:14, d:"Tras lanzar una ilusión de Nv.1+, haz que 1 objeto inanimado de ella sea real durante 1 minuto." },
      ],
      "Escuela de Ilusión [PHB 2024]": [
        { n:"Ilusionista Experto", nv:2, d:"Trucos de Ilusión como Acción Adicional; copia a mitad de coste." },
        { n:"Ilusiones Maleables", nv:6, d:"Cambia la naturaleza de tus ilusiones activas con una Acción." },
        { n:"Duplicado Ilusorio", nv:10, d:"1/descanso corto: Imagen Mayor sin espacio ni componentes." },
        { n:"Realidad Ilusoria", nv:14, d:"Un objeto inanimado de tu ilusión se vuelve real por 1 minuto." },
      ],
      "Escuela de Nigromancia [PHB 2014]": [
        { n:"Nigromante Experto", nv:2, d:"Copiar conjuros de Nigromancia a mitad de coste; doble no-muertos controlados." },
        { n:"Cosecha de Vitalidad", nv:2, d:"Al matar a una criatura de CR ≥ 1/2 con un conjuro, recuperas PG = max(1, INT + nivel)." },
        { n:"No-muertos Sin Égida", nv:6, d:"Los no-muertos que creas/controlas ganan PG adicionales y +bono de competencia a sus tiradas de daño." },
        { n:"Sombra Indomable", nv:10, d:"1/descanso largo: lanzas Invocación de Sombras sin espacio de conjuro." },
        { n:"Forma de Huesos", nv:14, d:"Ganas resistencia a daño necrótico; eres inmune a enfermedad y veneno." },
      ],
      "Escuela de Nigromancia [PHB 2024]": [
        { n:"Cosecha de Vitalidad", nv:2, d:"Al matar con un conjuro, recuperas PG = INT + nivel." },
        { n:"No-muertos Sin Égida", nv:6, d:"Tus no-muertos controlados ganan PG y bonificación de ataque adicionales." },
        { n:"Sombra Indomable", nv:10, d:"1/descanso largo: Invocación de Sombras sin espacio ni componentes." },
        { n:"Forma de Huesos", nv:14, d:"Resistencia a necrótico; inmunidad a enfermedad y veneno." },
      ],
      "Escuela de Transmutación [PHB 2014]": [
        { n:"Transmutador Experto", nv:2, d:"Copiar conjuros de Transmutación a mitad de coste; competencia en Arcana e Historia." },
        { n:"Alquimia Menor", nv:2, d:"Transmuta un material en otro de valor similar (plomo en plata, por ejemplo) por 1 hora." },
        { n:"Piedra del Transmutador", nv:6, d:"Creas una piedra que otorga 1 de 4 beneficios al portador (visión en oscuridad, velocidad, resistencia o +1 salvación)." },
        { n:"Escultor de Carne", nv:10, d:"Durante 1 descanso largo, cambias permanentemente tu apariencia física o la de otra criatura voluntaria." },
        { n:"Maestro Transmutador", nv:14, d:"1/descanso largo: convierte hasta 1 libra de material en otro de igual valor; cura enfermedades/maldiciones; rejuvenece o envejece a 1 criatura." },
      ],
      "Escuela de Transmutación [PHB 2024]": [
        { n:"Alquimia Menor", nv:2, d:"Transmuta 1 material en otro durante 1 hora." },
        { n:"Piedra del Transmutador", nv:6, d:"Creas una piedra con 1 de 4 beneficios pasivos para quien la porte." },
        { n:"Escultor de Carne", nv:10, d:"Cambias tu apariencia permanentemente con 1 descanso largo." },
        { n:"Maestro Transmutador", nv:14, d:"1/descanso largo: cura enfermedades, elimina maldiciones, envejece o rejuvenece a 1 criatura." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     MONJE / MONK
  ══════════════════════════════════════════════════════ */
  "Monje": {
    rasgos: [
      { n:"Artes Marciales", nv:1, d:"Ataques desarmados/armas de monje usan dado que escala (d4→d10 en Nv.17). Puedes usar DEX en lugar de FUE." },
      { n:"Defensa sin Armadura", nv:1, d:"CA = 10 + DEX + SAB sin armadura ni escudo." },
      { n:"Puntos de Ki", nv:2, d:"Recurso igual a nivel. Se recupera tras descanso corto. Financia habilidades del Monje." },
      { n:"Paso sin Viento", nv:2, d:"Acción Adicional: Saltar, Desengancharte o Esconderte." },
      { n:"Movimiento sin Armadura", nv:2, d:"+10 pies de velocidad sin armadura (→+30 en Nv.18)." },
      { n:"Tradición Monástica", nv:3, d:"Elige tu subclase." },
      { n:"Desviar Proyectiles", nv:3, d:"Reacción: reduce el daño de un proyectil; gasta 1 Ki para devolver el proyectil." },
      { n:"Caída Lenta", nv:4, d:"Reacción: reduce el daño de caída en 5× nivel." },
      { n:"Ataque Extra", nv:5, d:"Dos ataques con la acción de Atacar." },
      { n:"Golpe Aturdidor", nv:5, d:"Gasta 1 Ki al golpear: el objetivo hace tirada CON o queda Aturdido hasta tu siguiente turno." },
      { n:"Golpe Ki", nv:6, d:"Tus ataques desarmados se consideran mágicos." },
      { n:"Evasión", nv:7, d:"DEX con éxito: 0 daño. DEX con fallo: mitad de daño." },
      { n:"Quietud de Mente", nv:7, d:"Acción: elimina efectos de encantamiento o miedo que te afecten." },
      { n:"Pureza de Cuerpo", nv:10, d:"Inmunidad a enfermedad y veneno." },
      { n:"Alma de Diamante", nv:14, d:"Competencia en todas las tiradas de salvación; puedes volver a tirar una fallida (1 vez)." },
      { n:"Ser Eterno", nv:15, d:"No sufres penalizaciones por envejecimiento mágico; no necesitas comer ni beber." },
      { n:"Cuerpo Vacío", nv:18, d:"Gasta 4 Ki: Invisibilidad 1 minuto. Gasta 8 Ki: Plano Astral 1 hora." },
      { n:"Ser Perfecto", nv:20, d:"Cuando no tienes Ki al inicio de tu turno, recuperas 4 automáticamente." },
    ],
    subclases: {
      "Camino de la Mano Abierta [PHB 2014]": [
        { n:"Técnica de la Mano Abierta", nv:3, d:"Al golpear con Ráfaga de Golpes: derriba (DEX), empuja 15 pies, o impide reacciones hasta tu siguiente turno." },
        { n:"Integridad de Todo", nv:6, d:"Gasta 3 Ki: curación = dado de Artes Marciales + SAB. No en ti mismo." },
        { n:"Tranquilidad", nv:11, d:"Al final de tu descanso largo, ganas el beneficio de Santuario (SAB CD)." },
        { n:"Palma de Quivering", nv:17, d:"Gasta 3 Ki: las vibraciones dañan al objetivo más tarde. Actívalo: el objetivo cae a 0 PG (CON para sobrevivir con 1 PG)." },
      ],
      "Camino de la Mano Abierta [PHB 2024]": [
        { n:"Técnica de la Mano Abierta", nv:3, d:"Al golpear con Ráfaga de Golpes: derriba, empuja 15 pies o niega reacciones hasta tu siguiente turno." },
        { n:"Integridad de Todo", nv:6, d:"Gasta 3 Ki: curación = dado de Artes Marciales + SAB (ya sea en ti o en otro)." },
        { n:"Tranquilidad", nv:11, d:"Al final del descanso largo, ganas Santuario durante 1 turno de combate." },
        { n:"Palma de Quivering", nv:17, d:"Gasta 4 Ki: impones vibraciones al objetivo. Actívalo como Acción: cae a 0 PG (o CON = mitad de sus PG máximos)." },
      ],
      "Camino de las Sombras [PHB 2014]": [
        { n:"Magia de las Sombras", nv:3, d:"Lanzas Oscuridad (2 Ki), Pasar Sin Rastro (2 Ki), Silencio (2 Ki) e Invisibilidad (2 Ki, solo en ti)." },
        { n:"Paso de las Sombras", nv:6, d:"En penumbra u oscuridad, teletransportación de 60 pies como Acción Adicional." },
        { n:"Manto de Sombras", nv:11, d:"Gasta 2 Ki: Invisible hasta que ataques o lances un conjuro (o pase 1 minuto)." },
        { n:"Oportunista de Sombra", nv:17, d:"Reacción: cuando una criatura a 5 pies ataca a otro objetivo, puedes atacar al atacante." },
      ],
      "Camino de las Sombras [PHB 2024]": [
        { n:"Magia de las Sombras", nv:3, d:"Lanzas Oscuridad, Silencio e Invisibilidad gastando Ki (2 cada uno)." },
        { n:"Paso de las Sombras", nv:6, d:"En penumbra u oscuridad, teleportas 60 pies como Acción Adicional." },
        { n:"Manto de Sombras", nv:11, d:"Gasta 2 Ki: Invisible hasta atacar o lanzar conjuro." },
        { n:"Oportunista de Sombra", nv:17, d:"Reacción: atacas a cualquier criatura que ataque a alguien que no seas tú, a 5 pies." },
      ],
      "Camino de los Cuatro Elementos [PHB 2014]": [
        { n:"Discípulo de los Elementos", nv:3, d:"Aprende 2 disciplinas elementales (de una lista de ~17) que emulan conjuros usando Ki." },
        { n:"Más Disciplinas", nv:6, d:"Aprende 1 disciplina adicional (también en Nv.11 y 17)." },
        { n:"Golpe del Movimiento del Viento", nv:6, d:"(Ejemplo): 2 Ki. Efecto de Empuje de Viento en área." },
        { n:"Maestría Elemental", nv:17, d:"Tus disciplinas elementales de alta ki cuestan 1 punto menos." },
      ],
      "Camino de los Cuatro Elementos [PHB 2024]": [
        { n:"Disciplinas Elementales", nv:3, d:"Aprende Puños de Viento Sin Fin (gratis) + 2 disciplinas adicionales de 4 elementos. Más en Nv.6, 11 y 17." },
        { n:"Puños de Viento Sin Fin", nv:3, d:"Al golpear con ataque desarmado, puedes añadir 1d10 de fuerza (1 Ki)." },
        { n:"Disciplinas Adicionales", nv:6, d:"Aprende 1 disciplina más (total 4 en Nv.11, 5 en Nv.17)." },
        { n:"Foco Elemental", nv:11, d:"Cuando usas una disciplina elemental, puedes recuperar 1 Ki si la tirada de salvación del objetivo falla." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     PALADÍN / PALADIN
  ══════════════════════════════════════════════════════ */
  "Paladín": {
    rasgos: [
      { n:"Sentido Divino", nv:1, d:"Acción: detectas celestiales, feéricos o no-muertos a 60 pies (no Nv.1 en 2024: 1 acción). Usos = 1 + CAR/descanso largo." },
      { n:"Imposición de Manos", nv:1, d:"Reserva de curación = 5× nivel. Cura tocando (1 PG por carga) o elimina enfermedad/veneno (5 cargas)." },
      { n:"Estilo de Combate", nv:2, d:"Elige un estilo (Defensa, Duelo, Gran Arma, Protección)." },
      { n:"Conjuración", nv:2, d:"Lanzador medio (CAR). Lista de Paladín + conjuros de Juramento siempre preparados." },
      { n:"Golpe Divino", nv:2, d:"Gasta 1 espacio: siguiente impacto +2d8 daño radiante o necrótico (→5d8 en Nv.14)." },
      { n:"Juramento Sagrado", nv:3, d:"Elige tu subclase. Ganas Canal Divino y conjuros de Juramento adicionales." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Ataque Extra", nv:5, d:"Dos ataques con la acción de Atacar." },
      { n:"Aura de Protección", nv:6, d:"Tú y aliados a 10 pies (→30 en Nv.18) añaden tu mod CAR a todas las tiradas de salvación." },
      { n:"Aura de Valor", nv:10, d:"Tú y aliados dentro del Aura no pueden ser Asustados." },
      { n:"Pureza de Espíritu", nv:20, d:"Siempre bajo el efecto de Protección contra el Bien y el Mal." },
    ],
    subclases: {
      "Juramento de la Devoción [PHB 2014]": [
        { n:"Canal Divino – Arma Sagrada", nv:3, d:"Infunde un arma con CAR a las tiradas de impacto y luz brillante 20 pies (1 minuto)." },
        { n:"Canal Divino – Expulsar lo Impuro", nv:3, d:"Criaturas aberraciones, celestiales, elementales, feéricos, fiendos y no-muertos huyen (SAB)." },
        { n:"Aura de Devoción", nv:7, d:"Tú y aliados en el Aura no pueden ser Encantados." },
        { n:"Pureza de Espíritu", nv:15, d:"Siempre bajo el efecto de Protección contra el Bien y el Mal." },
        { n:"Nimbo Sagrado", nv:20, d:"Aura brillante 30 pies; no-muertos y feéricos dañados al entrar; tú y aliados obtienen ventaja contra ellos." },
      ],
      "Juramento de la Devoción [PHB 2024]": [
        { n:"Canal Divino – Arma Sagrada", nv:3, d:"Infunde un arma: +CAR a impacto, luz 20 pies, 1 minuto." },
        { n:"Canal Divino – Luz Sagrada", nv:3, d:"Expulsa criaturas aberraciones, celestiales, feéricos, fiendos y no-muertos (SAB) en 30 pies." },
        { n:"Aura de Devoción", nv:7, d:"Tú y aliados en el Aura son inmunes a Encantado." },
        { n:"Guerrero Sagrado", nv:15, d:"Cuando aciertas a un no-muerto, añades 1d6 de daño radiante extra." },
        { n:"Nimbo Sagrado", nv:20, d:"Aura brillante 30 pies; 10 PG de daño radiante a demonios/no-muertos al entrar. Ventaja contra ellos." },
      ],
      "Juramento de la Venganza [PHB 2014]": [
        { n:"Canal Divino – Voto de Enemistad", nv:3, d:"Ventaja en todos tus ataques contra 1 criatura durante 1 minuto." },
        { n:"Canal Divino – Expulsar al Indigno", nv:3, d:"Expulsa feéricos, fiendos y no-muertos con CD SAB." },
        { n:"Espíritu de la Venganza", nv:7, d:"Reacción: cuando un aliado cercano es golpeado, puedes atacar al atacante." },
        { n:"Perseguidor Incansable", nv:7, d:"Ventaja en todas las tiradas para rastrear a tu Voto de Enemistad; difícil huir de ti." },
        { n:"Alma Implacable", nv:15, d:"Solo puedes ser reducido a 1 PG (en lugar de 0) una vez por descanso largo." },
        { n:"Ángel Vengador", nv:20, d:"Alas de vuelo 60 pies; aura de miedo 30 pies (SAB). Dura 1 minuto (1/descanso largo)." },
      ],
      "Juramento de la Venganza [PHB 2024]": [
        { n:"Canal Divino – Voto de Enemistad", nv:3, d:"Ventaja en todos tus ataques contra 1 objetivo por 1 minuto." },
        { n:"Canal Divino – Expulsar al Indigno", nv:3, d:"Expulsa feéricos, fiendos y no-muertos." },
        { n:"Espíritu de la Venganza", nv:7, d:"Reacción: al ser golpeado un aliado, atacas al responsable." },
        { n:"Fuerza de la Condena", nv:15, d:"Al impactar con Voto activo, puedes añadir 1d8 de daño de fuerza (1/turno)." },
        { n:"Ángel de la Vida", nv:20, d:"Vuelo 60 pies; aura de Miedo 30 pies; ataques adicionales. 1 minuto/descanso largo." },
      ],
      "Juramento de los Ancestros [PHB 2014/2024]": [
        { n:"Canal Divino – Guía de la Naturaleza", nv:3, d:"Criaturas aliadas en 30 pies tienen ventaja en tiradas de DEX y SAB hasta tu siguiente turno." },
        { n:"Canal Divino – Abjurar Elementales", nv:3, d:"Expulsa elementales y feéricos (SAB)." },
        { n:"Resistencia Fae", nv:7, d:"Tú y aliados en el Aura tenéis ventaja en salvaciones contra conjuros y efectos mágicos." },
        { n:"Espíritu de las Edades", nv:15, d:"Siempre bajo el efecto de Protección contra el Bien y el Mal." },
        { n:"Campeón del Viejo Pacto", nv:20, d:"Forma de Guardián Antiguo de la Naturaleza: 1 minuto. +10 a CA, resistencia a daño físico no mágico." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     PÍCARO / ROGUE
  ══════════════════════════════════════════════════════ */
  "Pícaro": {
    rasgos: [
      { n:"Ataque Furtivo", nv:1, d:"+1d6 de daño por cada 2 niveles (máx +10d6) cuando tienes ventaja en el ataque o un aliado está a 5 pies del objetivo (1 vez/turno)." },
      { n:"Jerga de Ladrones", nv:1, d:"Lenguaje secreto y jerga criminal reconocida por ladrones; puedes dejar mensajes ocultos." },
      { n:"Acción Astucia", nv:2, d:"Acción Adicional: Tarea (herramientas de ladrón), Desengancharte, Esconderte o Usar un Objeto." },
      { n:"Expertise", nv:1, d:"Doble competencia en 2 habilidades elegidas (también en Nv.6, aunque algunas versiones lo dan en Nv.1 y Nv.6)." },
      { n:"Arquetipo Pícaro", nv:3, d:"Elige tu subclase." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 10, 12, 16, 19." },
      { n:"Esquiva Ágil", nv:5, d:"Acción Adicional: usa la acción de Desviar (mitad daño en DEX sin Reacción)." },
      { n:"Expertise (segunda)", nv:6, d:"Doble competencia en 2 habilidades más." },
      { n:"Evasión", nv:7, d:"En salvación de DEX: 0 daño si superas, mitad si fallas." },
      { n:"Fiabilidad", nv:11, d:"En habilidades con competencia, trata un resultado de 9 o menos como 10." },
      { n:"Sentido Ciego", nv:14, d:"Detectas la ubicación de criaturas invisibles a 10 pies." },
      { n:"Mente Escurridiza", nv:15, d:"Competencia en tiradas de salvación de SAB." },
      { n:"Escurridizo", nv:18, d:"No puedes ser sorprendido si estás consciente; nadie tiene ventaja en ataques contra ti." },
      { n:"Golpe de Suerte", nv:20, d:"Si fallas un ataque o alguien supera una tirada de salvación contra ti, puedes gastar 2 Puntos de Suerte para convertirlo en éxito." },
    ],
    subclases: {
      "Ladrón [PHB 2014]": [
        { n:"Manos Rápidas", nv:3, d:"Acción Astucia amplía: robo de bolsillos, Usar Dispositivo Mágico o Usar Objeto." },
        { n:"Escalador de Segunda Planta", nv:3, d:"Escalar no cuesta movimiento adicional; saltos más largos usando DEX en lugar de FUE." },
        { n:"Uso de Objetos Supremo", nv:9, d:"Puedes usar objetos mágicos que normalmente no podrías (ignorando clase y estadística requerida)." },
        { n:"Reflexivos", nv:13, d:"Puedes aplicar Ataque Furtivo en ataques de oportunidad como Reacción." },
        { n:"Ladrón de Manos de Seda", nv:17, d:"Ventaja en robo de bolsillos; puedes robar objetos que alguien sostiene o lleva equipados." },
      ],
      "Ladrón [PHB 2024]": [
        { n:"Manos Rápidas", nv:3, d:"Acción Astucia amplía: robo de bolsillos, herramientas de ladrón, Usar Objeto." },
        { n:"Escalador de Segunda Planta", nv:3, d:"Escalar no cuesta movimiento adicional; saltos con DEX." },
        { n:"Tacto Supremo", nv:9, d:"Usar objetos mágicos ignorando clase, alineación y estadística requerida." },
        { n:"Reflexivos", nv:13, d:"Aplicas Ataque Furtivo en ataques de oportunidad." },
        { n:"Ladrón de Manos de Seda", nv:17, d:"Puedes robar objetos equipados sin ser detectado; ventaja en robo de bolsillos." },
      ],
      "Asesino [PHB 2014]": [
        { n:"Competencia Asesina", nv:3, d:"Competencia en kit de disfraz y venenos; doble competencia en Engaño y Sigilo." },
        { n:"Bonificación Asesina", nv:3, d:"Ventaja en ataques contra criaturas que no hayan actuado aún en este combate; impactos a sorprendidos son siempre críticos." },
        { n:"Infiltrador", nv:9, d:"Puedes crear falsas identidades completas que resisten la magia de detección." },
        { n:"Impostor", nv:13, d:"Puedes hacerte pasar por una persona que hayas estudiado durante 3 horas; la magia de detección falla." },
        { n:"Golpe de Muerte", nv:17, d:"Si una criatura sorprendida falla una salvación CON (CD 8 + DEX + comp.), muere instantáneamente." },
      ],
      "Asesino [PHB 2024]": [
        { n:"Bonificación Asesina", nv:3, d:"En el primer turno de combate, ventaja en todos tus ataques; los impactos a sorprendidos son críticos." },
        { n:"Disfraz Rápido", nv:3, d:"Kit de disfraz siempre equipado; aplicar disfraz te toma 1 minuto." },
        { n:"Infiltrador", nv:9, d:"Creas identidades falsas; la magia no puede detectar que son falsas sin éxito en tirada." },
        { n:"Muerte Segura", nv:13, d:"Al reducir a 0 PG a un objetivo, la muerte es instantánea si falla una tirada CON." },
        { n:"Golpe de Muerte", nv:17, d:"Tienes 1 oportunidad de matar instantáneamente a un sorprendido con 1 golpe (CON CD 20 para sobrevivir)." },
      ],
      "Arcano Embaucador [PHB 2014]": [
        { n:"Conjuración", nv:3, d:"Lanzador parcial (INT) con 3 conjuros de Nv.1 al inicio (scala hasta 4.º nivel). Lista de Mago, preferencia Ilusión/Encantamiento." },
        { n:"Mano Traviesa de Mage Hand", nv:3, d:"Tu Mano de Mago puede robar bolsillos, manipular objetos a distancia y desactivar dispositivos." },
        { n:"Engaño Ambiguo", nv:9, d:"Las criaturas creer que sus compañeros lanzaron tus conjuros de ilusión/encantamiento." },
        { n:"Ladrón de Magia", nv:13, d:"Cuando un objetivo cercano falla una salvación de concentración, puede Reacción transferir el conjuro a ti." },
        { n:"Maestro de Ilusión", nv:17, d:"Duplica un conjuro de ilusión sin gastar espacio ni componentes (1/descanso largo)." },
      ],
      "Arcano Embaucador [PHB 2024]": [
        { n:"Conjuración", nv:3, d:"Lanzador parcial (INT) hasta conjuros de Nv.4. Preferencia Ilusión/Encantamiento de lista de Mago." },
        { n:"Mano Traviesa de Mage Hand", nv:3, d:"Mano de Mago invisible; puede robar y manipular objetos a distancia." },
        { n:"Engaño Ambiguo", nv:9, d:"Criaturas cercanas creen que otro lanzó tus conjuros de Ilusión/Encantamiento." },
        { n:"Ladrón de Magia", nv:13, d:"Al ser golpeado un objetivo con Ataque Furtivo, puede fallar la concentración automáticamente." },
        { n:"Maestro de Ilusión", nv:17, d:"1/descanso largo: duplica un conjuro de Ilusión sin coste." },
      ],
    }
  },

  /* ══════════════════════════════════════════════════════
     BRUJO / WARLOCK
  ══════════════════════════════════════════════════════ */
  "Brujo": {
    rasgos: [
      { n:"Conjuración del Pacto", nv:1, d:"Lanzador con espacios recuperados en descanso corto. Los espacios son todos del nivel más alto disponible." },
      { n:"Patrón Ultraterreno", nv:1, d:"Elige tu patrón (subclase). Conjuros de Patrón siempre preparados." },
      { n:"Invocaciones del Brujo", nv:2, d:"Habilidades mágicas permanentes (Visión del Diablo, Susurros del Sepulcro, etc.). Aprende 2 + más al subir nivel." },
      { n:"Pacto Boon", nv:3, d:"Elige: Hoja del Pacto (arma), Cadena del Pacto (familiar mejorado) o Tomo del Pacto (grimorio)." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Arcanum del Brujo", nv:11, d:"Conjuro de 6.º nivel (1/descanso largo). Más en Nv.13 (7.º), 15 (8.º), 17 (9.º)." },
      { n:"Maestro Supremo del Brujo", nv:20, d:"1/descanso corto: crea 1 espacio de conjuro de 4.º o 5.º nivel." },
    ],
    subclases: {
      "El Gran Antiguo [PHB 2014]": [
        { n:"Mente Despertada", nv:1, d:"Puedes hablar telepáticamente con cualquier criatura que veas a 30 pies (y que tenga algún idioma)." },
        { n:"Protección del Antiguo", nv:6, d:"Cuando recibes daño psíquico, puedes dividirlo entre tú y otra criatura a 30 pies." },
        { n:"Escudo Telepático", nv:10, d:"Tú y aliados a 30 pies tenéis ventaja en salvaciones de CAR; los aliados comparten tu resistencia psíquica." },
        { n:"Crear Aberración", nv:14, d:"Al lanzar un conjuro de Nv.1-4 en una criatura con éxito, puedes corromperla (SAB o se convierte en tu aliada por 1 minuto)." },
      ],
      "El Gran Antiguo [PHB 2024]": [
        { n:"Mente Despertada", nv:1, d:"Hablas telepáticamente a 30 pies." },
        { n:"Entropía Psíquica", nv:1, d:"Cuando golpeas con Maldición del Brujo, añades 1d8 de daño psíquico." },
        { n:"Distorsión de la Realidad", nv:6, d:"Cuando lanzas un conjuro de Ilusión/Encantamiento, el objetivo tiene desventaja en la salvación." },
        { n:"Escudo Telepático", nv:10, d:"Tú y aliados cercanos compartís resistencia psíquica." },
        { n:"Crear Aberración", nv:14, d:"Al éxito de un conjuro, corrompes al objetivo en aberración aliada (SAB para resistir)." },
      ],
      "El Archidiablo [PHB 2014]": [
        { n:"Bendición del Oscuro", nv:1, d:"Al reducir a 0 PG a una criatura hostil, ganas PG temporales = CAR + nivel de Brujo." },
        { n:"Suerte del Oscuro", nv:6, d:"Cuando lanzas un conjuro de Encantamiento o Ilusión, puedes recuperar un espacio de conjuro gastado." },
        { n:"Resistencia Infernal", nv:10, d:"Ganas resistencia al daño de fuego." },
        { n:"Resiliencia Infernal", nv:14, d:"Cada descanso largo, elige un tipo de daño (no fuerza/psíquico); ganas resistencia a él hasta el próximo descanso largo." },
      ],
      "El Archidiablo [PHB 2024]": [
        { n:"Bendición del Oscuro", nv:1, d:"Al matar a una criatura hostil, ganas PG temporales = CAR + nivel Brujo." },
        { n:"Suerte del Oscuro", nv:6, d:"Cuando lanzas Encantamiento/Ilusión, recuperas 1 espacio gastado." },
        { n:"Resistencia Infernal", nv:10, d:"Resistencia al daño de fuego." },
        { n:"Pacto Infernal", nv:14, d:"Cuando eres reducido a 0 PG, puedes hacer un pacto de emergencia: recuperas PG = nivel×2 y ganas ventaja en todos los ataques por 1 turno (1/descanso largo)." },
      ],
      "El Feérico [PHB 2014]": [
        { n:"Presencia Feérica", nv:1, d:"Acción: criaturas en cubo de 10 pies (CAR): quedan Encantadas o Asustadas hasta el final de tu próximo turno (SAB/descanso corto)." },
        { n:"Escapatoria Mística", nv:6, d:"Reacción al recibir daño: teletransportación de 60 pies a espacio visible desocupado (SAB/descanso largo)." },
        { n:"Beguiling Defenses", nv:10, d:"Eres inmune a ser Encantado; puedes redirigir intentos de Encantamiento al lanzador (SAB)." },
        { n:"Oscuridad del Feérico", nv:14, d:"Lanzas Oscuridad sin espacio y puedes ver a través de ella." },
      ],
      "El Feérico [PHB 2024]": [
        { n:"Presencia Feérica", nv:1, d:"Acción: criaturas en cubo de 10 pies quedan Encantadas o Asustadas (SAB/descanso corto)." },
        { n:"Paso Feérico", nv:1, d:"Puedes lanzar Paso Brumoso (Misty Step) sin coste (CAR/descanso largo)." },
        { n:"Defensas Seductoras", nv:6, d:"Inmune a Encantado; puedes redirigir intentos de encantamiento al lanzador." },
        { n:"Escapatoria Mística", nv:10, d:"Reacción: teleportación de 60 pies al recibir daño (SAB/descanso largo)." },
        { n:"Maestría del Feérico", nv:14, d:"Tus conjuros de Encantamiento e Ilusión no pueden ser disipados sin una tirada." },
      ],
    }
  },

};

// ── ENTREGA 2: Xanathar's Guide to Everything (XGE) + Tasha's Cauldron of Everything (TCE) ──
// Inyectamos subclases nuevas en cada clase existente
(function() {
  const add = (clase, nombre, rasgos) => {
    if (DND_CLASES[clase]) DND_CLASES[clase].subclases[nombre] = rasgos;
  };

  /* ══════════════════════════════════════════════════════
     BÁRBARO
  ══════════════════════════════════════════════════════ */
  add("Bárbaro", "Camino de la Tormenta [XGE]", [
    { n:"Alma de Tormenta", nv:3, d:"Resistencia a rayo y trueno; velocidad de natación 30 pies; puedes respirar bajo el agua." },
    { n:"Tormenta de Rayos", nv:3, d:"En Furia, al golpear en cuerpo a cuerpo, criaturas a 5 pies reciben 1d6 de rayo (CON para reducir a la mitad)." },
    { n:"Escudo de Tormenta", nv:6, d:"Cuando un aliado a 60 pies recibe daño de rayo o trueno, puedes usar Reacción para reducirlo a la mitad." },
    { n:"Ira de la Tormenta", nv:10, d:"Al usar Furia Imparable, todas las criaturas a 30 pies reciben 2d6 de rayo (CON para resistir)." },
  ]);

  add("Bárbaro", "Camino del Corazón Salvaje [TCE]", [
    { n:"Espíritu Animal", nv:3, d:"Elige 1 espíritu (Oso/Águila/Alce/Lobo/Tigre); cada uno da beneficios distintos durante la Furia. Puedes cambiar al entrar en Furia." },
    { n:"Alma de la Bestia", nv:6, d:"Tu espíritu animal te otorga un rasgo pasivo permanente." },
    { n:"Espíritu Vago", nv:10, d:"Al entrar en Furia, puedes obtener los beneficios de dos espíritus animal a la vez." },
    { n:"Furia Bestial", nv:14, d:"En Furia, ataques desarmados o con arma natural infligen +1d8 de daño del tipo elegido." },
  ]);

  add("Bárbaro", "Camino de la Magia Salvaje [TCE]", [
    { n:"Conciencia Mágica", nv:3, d:"Al entrar en Furia, detectas magia activa de cualquier nivel en 60 pies." },
    { n:"Oleada de Magia Salvaje", nv:3, d:"Al entrar en Furia, lanzas 1d8 en la tabla de Oleadas Salvajes del Bárbaro y se aplica el efecto." },
    { n:"Magia Duradera", nv:6, d:"Al entrar en Furia, los conjuros de concentración que mantengas no se rompen automáticamente." },
    { n:"Explosión Hechizante", nv:10, d:"Al golpear en Furia, activas una Oleada adicional del d8." },
    { n:"Alma Hechizada", nv:14, d:"Como Acción Adicional en Furia, lanzas un conjuro de Nv.1-3 de la lista de Hechicero (1 vez por Furia)." },
  ]);

  add("Bárbaro", "Camino del Berserker Ancestral [TCE]", [
    { n:"Guerrero del Tótem", nv:3, d:"Elige un animal tótem (Oso/Águila/Alce/Lobo/Tigre) con beneficios al nivel 3." },
    { n:"Aspecto de la Bestia", nv:6, d:"Ganas beneficios del aspecto del tótem elegido (o uno diferente)." },
    { n:"Viaje Espiritual", nv:10, d:"Lanzas Comunión con la Naturaleza como ritual sin materiales." },
    { n:"Ataque del Tótem", nv:14, d:"Ganas el poder de ataque del espíritu tótem (o uno diferente al elegido en Nv.3 y 6)." },
  ]);

  /* ══════════════════════════════════════════════════════
     BARDO
  ══════════════════════════════════════════════════════ */
  add("Bardo", "Colegio de las Espadas [XGE]", [
    { n:"Competencia de Combate", nv:3, d:"Competencia con armas marciales y armadura media." },
    { n:"Floritura de Combate", nv:3, d:"Gasta Inspiración bárdica en ataques para elegir 1 de 3 maniobras: Golpe Defensivo (+d a CA), Golpe de Embestida (empuja) o Golpe Cortante (daña a otro cercano)." },
    { n:"Ataque Extra", nv:6, d:"Atacas dos veces con la acción de Atacar." },
    { n:"Magia de la Espada", nv:14, d:"Al lanzar un conjuro de bardo, puedes atacar con arma como Acción Adicional." },
  ]);

  add("Bardo", "Colegio de la Majestuosidad [XGE]", [
    { n:"Manto de Inspiración", nv:3, d:"Gasta Inspiración: hasta 5 aliados a 60 pies se mueven sin oportunidad y ganan PG temporales (2d6)." },
    { n:"Manto de Majestuosidad", nv:6, d:"Lanzas Encantar Persona sin espacio como Acción Adicional (1/descanso largo); se mantiene aunque el objetivo reciba daño." },
    { n:"Majestad Inquebrantable", nv:14, d:"Como Acción Adicional, asumes una presencia sobrenatural 1 minuto: los ataques contra ti requieren tirada CAR o el ataque falla." },
  ]);

  add("Bardo", "Colegio de los Susurros [XGE]", [
    { n:"Palabras en la Piel", nv:3, d:"1 vez por turno al golpear, gasta Inspiración para añadir 2d6 (→8d6 en Nv.15) de daño psíquico." },
    { n:"Sombras Psíquicas", nv:3, d:"Al matar a una criatura Humanoide, puedes robar su sombra y hacerte pasar por ella (apariencia y recuerdos)." },
    { n:"Lore Manchada", nv:6, d:"Gasta 3 Inspiraciones: la sombra de un objetivo revela sus secretos (como Zona de Verdad, pero selectivo)." },
    { n:"Shadow Lore", nv:14, d:"Acción: susurras secretos a un objetivo (CAR o queda bajo tu control 8 horas; olvida el hechizo al romperlo)." },
  ]);

  add("Bardo", "Colegio de la Elocuencia [TCE]", [
    { n:"Orador Seguro", nv:3, d:"Cuando usas un dado de Inspiración bárdica y el resultado es 1-5, no consumes el dado." },
    { n:"Palabras Perfectas", nv:3, d:"Competencia con doble bonificación en Persuasión y Actuación (o las ganas si no las tenías)." },
    { n:"Universo Cautivador", nv:6, d:"Cuando lanzas un conjuro de Encantamiento, puedes dar Inspiración bárdica a un aliado sin coste de acción." },
    { n:"Maestría del Discurso", nv:14, d:"Cuando lanzas Encantar Persona o Encantar Monstruo con espacio, puedes afectar hasta INT objetivos adicionales." },
  ]);

  add("Bardo", "Colegio de la Creación [TCE]", [
    { n:"Nota de Potencial", nv:3, d:"Cuando un aliado usa tu Inspiración, ganas un beneficio extra: PG temp., ventaja o movimiento adicional." },
    { n:"Actuación de la Creación", nv:3, d:"Creas un objeto animado Mediano o menor (como Animar Objeto) que actúa hasta tu siguiente turno (1/descanso largo)." },
    { n:"Musa Animada", nv:6, d:"Tu objeto de Actuación escala en tamaño (hasta Grande); puede atacar como Acción Adicional." },
    { n:"Sinfonía de la Creación", nv:14, d:"Puedes crear múltiples objetos simultáneamente y mantenerlos activos más tiempo." },
  ]);

  /* ══════════════════════════════════════════════════════
     CLÉRIGO
  ══════════════════════════════════════════════════════ */
  add("Clérigo", "Dominio de la Forja [XGE]", [
    { n:"Competencia de Artesano", nv:1, d:"Competencia en armadura pesada y herramientas de herrero." },
    { n:"Bendición de la Forja", nv:1, d:"1/descanso largo: infunde +1 mágico a un arma o armadura no mágica." },
    { n:"Canal Divino – Toque de Artesano", nv:3, d:"Activa la forja divina: ataques aliados a 30 pies ganan +1 tirada de impacto durante 10 minutos." },
    { n:"Alma de Artífice", nv:6, d:"+1 a todas las salvaciones por cada armadura mágica que lleves activa." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño de fuego, 1 vez/turno (+2d8 en Nv.14)." },
    { n:"Hijo de la Forja", nv:17, d:"Inmunidad al fuego; resistencia a daño perforante, cortante y contundente en armadura pesada." },
  ]);

  add("Clérigo", "Dominio de las Tumbas [XGE]", [
    { n:"Ojos de la Tumba", nv:1, d:"Detectas no-muertos en 60 pies con acción (1/descanso largo)." },
    { n:"Guardián del Umbral de la Muerte", nv:1, d:"Reacción: niega un crítico contra ti o un aliado a 30 pies, convirtiéndolo en impacto normal (SAB/descanso largo)." },
    { n:"Canal Divino – Sendero hacia la Tumba", nv:3, d:"Maldices a un objetivo: el próximo daño que reciba se duplica." },
    { n:"Centinela en la Muerte", nv:6, d:"Reacción al morir una criatura a 30 pies: puede usar Reacción para recuperar PG = 2d8 + SAB." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño frío, 1 vez/turno." },
    { n:"Guardián de los Muertos", nv:17, d:"Al morir en combate, puedes revivir inmediatamente con PG máximos (1/descanso largo)." },
  ]);

  add("Clérigo", "Dominio de la Paz [TCE]", [
    { n:"Embajador de la Paz", nv:1, d:"Competencia con doble bonificación en Perspicacia; aprendes el idioma Celestial." },
    { n:"Vínculo Protector", nv:1, d:"Vinculas a dos criaturas: cuando una recibe daño, la otra puede usarlo en su lugar (Reacción)." },
    { n:"Canal Divino – Balada de la Paz", nv:3, d:"Criaturas a 30 pies: restauras PG y eliminas condiciones de tu elección." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante, 1 vez/turno." },
    { n:"Vínculo Sagrado", nv:17, d:"Los vinculados pueden teletransportarse al lado del otro como Reacción." },
  ]);

  add("Clérigo", "Dominio del Orden [TCE]", [
    { n:"Voz de Autoridad", nv:1, d:"Cuando lanzas un conjuro de Nv.1+ en un aliado, ese aliado puede atacar como Reacción." },
    { n:"Canal Divino – Decreto de Orden", nv:3, d:"Hasta 3 criaturas en 30 pies quedan Encantadas: obedecen órdenes simples 1 minuto (SAB)." },
    { n:"Encarnación de la Ley", nv:6, d:"Cuando lanzas un conjuro de Encantamiento, puedes hacerlo sin componentes verbales ni somáticos." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
    { n:"Ira del Orden", nv:17, d:"Cuando lanzas un conjuro de Encantamiento en un enemigo, ese enemigo queda maldecido: 2d8 daño psíquico extra si ataca a tus aliados." },
  ]);

  add("Clérigo", "Dominio del Crepúsculo [TCE]", [
    { n:"Bonus de Armadura y Vista", nv:1, d:"Competencia en armadura pesada y armas marciales; visión en la oscuridad 300 pies." },
    { n:"Ojos del Crepúsculo", nv:1, d:"Ventaja en salvaciones contra condición Asustado; visión en oscuridad mágica." },
    { n:"Canal Divino – Santuario del Crepúsculo", nv:3, d:"Esfera de 30 pies de radio (oscuridad tenue): aliados ganan PG temporales, velocidad +10, ventaja vs. miedo." },
    { n:"Pasos del Crepúsculo", nv:6, d:"Reacción: teletransportas a ti mismo o a un aliado visible hasta 30 pies." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante o necrótico, 1 vez/turno." },
    { n:"Vigilia Nocturna", nv:17, d:"Tú y aliados dentro del santuario son inmunes al sueño y no podéis ser sorprendidos." },
  ]);

  add("Clérigo", "Dominio Arcano [TCE]", [
    { n:"Hechizología Arcana", nv:1, d:"Aprende 2 trucos de Mago adicionales." },
    { n:"Conjuros Arcanos", nv:3, d:"Aprende 2 conjuros de Mago de Nv.1-2 (siempre preparados); ganas 1 uso adicional de Canal Divino." },
    { n:"Canal Divino – Restaurar Magia", nv:3, d:"Recuperas un espacio de conjuro de Nv.1-5 (escala según nivel de Clérigo)." },
    { n:"Potente Hechizología", nv:6, d:"+INT a una tirada de daño de cualquier conjuro de Mago que lances (1/turno)." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño de fuerza, 1 vez/turno." },
    { n:"Hechicero Supremo", nv:17, d:"Preparas conjuros adicionales de Mago de Nv.1-5; los lanzas con espacios de Clérigo." },
  ]);

  /* ══════════════════════════════════════════════════════
     DRUIDA
  ══════════════════════════════════════════════════════ */
  add("Druida", "Círculo de las Esporas [TCE]", [
    { n:"Halo de Esporas", nv:2, d:"Reacción cuando una criatura a 10 pies falla mover o atacar: recibe 1d4 de daño necrótico (escala)." },
    { n:"Infusión de Esporas", nv:2, d:"Gastas 4 Ki (o usos de Forma Salvaje): te conviertes en zombie simbiótico con PG temporales y ataques alterados." },
    { n:"Fungal Infestation", nv:6, d:"Cuando un Humanoide o Bestia muere a 10 pies, puedes animarlo como zombi fúngico (SAB/descanso largo)." },
    { n:"Proliferación de Esporas", nv:10, d:"Al usar Halo de Esporas o Infusión, puedes afectar a criaturas adicionales." },
    { n:"Forma Fúngica", nv:14, d:"En Forma Salvaje puedes adoptar la Forma de Zombie Esporal con resistencias adicionales." },
  ]);

  add("Druida", "Círculo de los Sueños [XGE]", [
    { n:"Bálsamo del Tribunal de Verano", nv:2, d:"Pool de curación = nivel. Como Acción Adicional, gasta para curar a 1 criatura a 5 pies PG + DAdo de Vida." },
    { n:"Paso de los Sueños", nv:6, d:"Teletransportación de 60 pies hacia zona de luz brillante o luz de luna (1/descanso corto)." },
    { n:"Bálsamo Durmiente", nv:10, d:"Al usar Bálsamo, el objetivo también gana ventaja en la próxima tirada que haga." },
    { n:"Tierra de los Sueños", nv:14, d:"Lanzas Sueño sin espacio de conjuro (1/descanso largo); en el sueño puedes comunicarte telepáticamente." },
  ]);

  add("Druida", "Círculo del Pastor [XGE]", [
    { n:"Lenguaje del Espíritu", nv:2, d:"Hablas con bestias; competencia doble en Trato con Animales; aprendes Hablar con Animales (siempre activo)." },
    { n:"Tótem del Espíritu", nv:2, d:"Como Acción Adicional, invocas un tótem espiritual visible (Halcón, Unicornio o Oso). Beneficia a criaturas cercanas. 1 minuto (1/descanso corto)." },
    { n:"Invocación Poderosa", nv:6, d:"Las criaturas invocadas por tus conjuros obtienen PG adicionales = nivel y +bono competencia a daño." },
    { n:"Guardián del Rebaño", nv:10, d:"Tu Tótem del Espíritu puede reanimar criaturas invocadas que caigan a 0 PG (1 vez/tótem)." },
    { n:"Santuario Místico", nv:14, d:"Las criaturas invocadas dentro del aura del tótem son inmunes al encantamiento." },
  ]);

  add("Druida", "Círculo de las Estrellas [TCE]", [
    { n:"Mapa de Estrellas", nv:2, d:"Creas un Mapa Estelar (enfoque); mientras lo sostienes: truco Guía, 1 conjuro adicional y ventaja en Arcana." },
    { n:"Forma Estelar", nv:2, d:"Gasta 1 uso de Forma Salvaje: no te transformas, pero tu cuerpo emite constelaciones. Elige modo: Arquero, Cáliz o Dragón." },
    { n:"Alma Cósmica", nv:6, d:"Tu Forma Estelar puede curar a un aliado visible como Acción Adicional (dado de curación = dado de Artes Marciales)." },
    { n:"Guía del Cosmos", nv:10, d:"Mientras sostienes el Mapa Estelar, lanzas Augur sin espacio (2/descanso largo)." },
    { n:"Forma Estelar Completa", nv:14, d:"Al usar Forma Estelar, activas automáticamente los tres modos simultáneamente." },
  ]);

  /* ══════════════════════════════════════════════════════
     EXPLORADOR
  ══════════════════════════════════════════════════════ */
  add("Explorador", "Acechador de Sombras [XGE]", [
    { n:"Magia del Sombrío", nv:3, d:"Conjuros adicionales siempre preparados: Disfrazarse, Paso brumoso, Miedo, Mayor Invisibilidad, Pasar Sin Rastro..." },
    { n:"Paso Sombrío", nv:3, d:"Mientras estás en penumbra u oscuridad, como Acción Adicional teletransportas 60 pies a otro área oscura/penumbra." },
    { n:"Ojos de Penumbra", nv:3, d:"Visión en la oscuridad 60 pies; puedes ver en oscuridad mágica." },
    { n:"Emboscador", nv:7, d:"Ventaja en ataques durante el primer turno de combate contra criaturas que no te hayan atacado aún." },
    { n:"Golpe de Umbral", nv:11, d:"Cuando golpeas desde el sigilo o desde la oscuridad, el objetivo queda cegado hasta el final de su próximo turno." },
    { n:"Muerte en las Sombras", nv:15, d:"Si atacas a un objetivo que no puede verte, el impacto añade +6d6 de daño de necrótico." },
  ]);

  add("Explorador", "Horizon Walker [XGE]", [
    { n:"Magia del Horizonte", nv:3, d:"Conjuros de planar siempre preparados: Protección contra el Bien y el Mal, Pausa Temporal, Destierro..." },
    { n:"Detectar Portal", nv:3, d:"Detectas portales planares a 1 milla de distancia (1/descanso corto)." },
    { n:"Golpe Planar", nv:3, d:"1 vez/turno al golpear: añades 1d8 de daño de fuerza y el objetivo no puede hacer ataques de oportunidad hasta tu siguiente turno." },
    { n:"Paso Etéreo", nv:7, d:"Como Acción Adicional, entras en el Plano Etéreo hasta el final de tu turno." },
    { n:"Ataques Ambiguos", nv:11, d:"Cuando atacas, puedes hacer 1 ataque adicional contra un objetivo diferente en el Plano Etéreo o Material." },
    { n:"Defensa del Viajero", nv:15, d:"Cuando eres atacado, puedes teleportarte 5 pies como Reacción (1/turno)." },
  ]);

  add("Explorador", "Monster Slayer [XGE]", [
    { n:"Magia del Cazador de Monstruos", nv:3, d:"Conjuros adicionales: Protección contra el Bien y el Mal, Zona de la Verdad, Disipar Magia, Círculo Mágico, Atar Monstruo..." },
    { n:"Sensor del Cazador", nv:3, d:"Acción: examinas a 1 criatura visible a 60 pies y conoces sus inmunidades, resistencias y vulnerabilidades." },
    { n:"Magia Slayer", nv:3, d:"Reacción cuando un objetivo lanza un conjuro: impones desventaja en la tirada de ataque del conjuro; si impacta igual, sufres 2d6 de daño menos." },
    { n:"Presión Sobrenatural", nv:7, d:"Al marcar a un objetivo con Marca del Cazador, tiene velocidad reducida a la mitad y desventaja en ataques a tus aliados." },
    { n:"Golpe Mágico", nv:11, d:"Tus ataques se consideran mágicos; criaturas bajo efectos de conjuros reciben 2d6 daño adicional de tu Ataque." },
    { n:"Eliminar el Monstruo", nv:15, d:"Al golpear a tu objetivo marcado, puedes hacerle un crítico automático (1/descanso largo)." },
  ]);

  add("Explorador", "Swarmkeeper [TCE]", [
    { n:"Enjambre Reunido", nv:3, d:"Tienes un enjambre de espíritus naturales a tu alrededor. Al golpear, el enjambre puede: empujar 15 pies, dañar 1d6 con aguja/garra, o moverte 5 pies sin oportunidad." },
    { n:"Magia del Enjambre", nv:3, d:"Conjuros adicionales siempre preparados: Enredar, Nube de Dagas, Volar, Armadura de Agaletes, Insecto Gigante..." },
    { n:"Defensa del Enjambre", nv:7, d:"Si recibes daño de un atacante a 5 pies, el enjambre le inflige 1d6 de daño perforante." },
    { n:"Torbellino del Enjambre", nv:11, d:"El enjambre puede envolver a 1 objetivo: velocidad 0 y concentración penalizada (CON CD)." },
    { n:"Forma del Enjambre", nv:15, d:"Como Acción Adicional, te dispersas dentro del enjambre: vuelo 10 pies, resistencia a daño físico, 1 minuto (1/descanso largo)." },
  ]);

  add("Explorador", "Fey Wanderer [TCE]", [
    { n:"Dones Feéricos", nv:3, d:"Añades SAB a Engaño, Intimidación y Persuasión; también en cada una de esas que ya tengas competencia." },
    { n:"Conjuros del Caminante Feérico", nv:3, d:"Conjuros adicionales: Encantar Persona, Paso Brumoso, Disipar Magia, Dominio de Monstruo, Fuerza del Titán..." },
    { n:"Elusión de la Hada", nv:3, d:"Al golpear, el objetivo queda Encantado o Asustado (a tu elección) hasta el final de su turno." },
    { n:"Ocultar la Mente Feérica", nv:7, d:"Eres inmune a Detección de Pensamientos y a telepatos maliciosos." },
    { n:"Viaje Feérico", nv:11, d:"Como Acción Adicional, teletransportas a 1 aliado visible al espacio junto a ti (1/descanso corto)." },
    { n:"Represalia Feérica", nv:15, d:"Cuando una criatura Encantada o Asustada por ti te ataca, sufre 4d6 de daño psíquico." },
  ]);

  add("Explorador", "Drakewarden [TCE]", [
    { n:"Compañero Drake", nv:3, d:"Convocas un Drake (lagarto alado mágico) que actúa con tu Acción Adicional. Escala con nivel (tamaño/ataque)." },
    { n:"Conjuros del Guardián Drake", nv:3, d:"Conjuros de dragón adicionales según el tipo elemental del drake." },
    { n:"Vínculo Dracónico", nv:7, d:"Cuando el Drake usa su ataque, puedes atacar también como Reacción." },
    { n:"Drake Titánico", nv:11, d:"El Drake crece a Tamaño Grande y puedes montarlo; realiza 2 ataques cuando le ordenas atacar." },
    { n:"Ascensión Dracónica", nv:15, d:"1/descanso largo: el Drake se transforma brevemente en un dragón adulto del tipo asociado (1 minuto)." },
  ]);

  /* ══════════════════════════════════════════════════════
     GUERRERO
  ══════════════════════════════════════════════════════ */
  add("Guerrero", "Samurái [XGE]", [
    { n:"Determinación Luchadora", nv:3, d:"1/descanso largo: como Acción Adicional, obtienes ventaja en todos los ataques hasta el final de tu turno." },
    { n:"Perspicacia Elegante", nv:7, d:"Competencia en Historia o Perspicacia; competencia en 1 idioma adicional." },
    { n:"Guardia Implacable", nv:10, d:"Cuando usas Oleada de Acción, ganas PG temporales = CON + nivel de Guerrero." },
    { n:"Estoicismo Rápido", nv:15, d:"Cuando fallas una tirada de salvación de CON para concentración, puedes re-tirarla (1 vez por conjuro)." },
    { n:"Resistencia de Acero", nv:18, d:"Al tirar Iniciativa sin PG temporales, ganas 5 + CON de PG temporales." },
  ]);

  add("Guerrero", "Scout [XGE]", [
    { n:"Combatiente Ágil", nv:3, d:"Competencia en Naturaleza y Supervivencia; no puedes ser sorprendido si estás consciente." },
    { n:"Pulgada de Tierra", nv:3, d:"Reacción cuando un enemigo te hace ataque de oportunidad: muévete 5 pies sin provocar nuevos ataques (antes del impacto)." },
    { n:"Ojo de Búho", nv:7, d:"No tienes penalización por largo alcance; ignoras media cobertura en ataques." },
    { n:"Asalto Superior", nv:10, d:"En tu primer turno de combate, tienes ventaja en todos tus ataques." },
    { n:"Danza de Combate", nv:15, d:"Cuando te mueves al menos 10 pies y atacas, ganas +1 CA hasta el inicio de tu siguiente turno." },
    { n:"Guerrero Imparable", nv:18, d:"No puedes ser ralentizado involuntariamente ni reducido a velocidad 0." },
  ]);

  add("Guerrero", "Caballero Rúnico [TCE]", [
    { n:"Falsificación de Runas", nv:3, d:"Aprende 2 runas de gigante. Cada runa tiene efecto pasivo y efecto activo (1 uso/descanso corto)." },
    { n:"Fortuna del Gigante", nv:3, d:"Reacción al ver una tirada: añades 1d6 a ella (SAB/descanso largo)." },
    { n:"Golpe Rúnico", nv:7, d:"Al golpear, puedes activar una runa que has grabado en el arma como Acción Adicional." },
    { n:"Gran Estatura", nv:10, d:"Creces de Mediano a Grande (si hay espacio); ganas ventaja en FUE; armas 1d4 extra de daño." },
    { n:"Maestro de Runas", nv:15, d:"Aprende 1 runa adicional. Cada runa puede usarse 2 veces/descanso corto." },
    { n:"Forma Rúnica", nv:18, d:"Como Acción Adicional, creces a Enorme por 10 minutos (1/descanso largo); ventaja FUE, +2d6 daño." },
  ]);

  add("Guerrero", "Psi Warrior [TCE]", [
    { n:"Energía Psiónica", nv:3, d:"Pool de dados d6 psíonicos (= doble bonificador de competencia). Se recuperan en descanso corto o largo." },
    { n:"Golpe Psiónico", nv:3, d:"Gasta 1 dado: añades sus PG de daño de fuerza al golpear y el objetivo queda empujado o ralentizado." },
    { n:"Escudo Psiónico", nv:3, d:"Reacción al recibir daño: gasta 1 dado y reduces el daño en esa cantidad." },
    { n:"Aceleración Psiónica", nv:7, d:"Gasta 1 dado como Acción Adicional: te mueves el resultado × 10 pies sin oportunidad." },
    { n:"Telequinesia", nv:10, d:"Gasta 1 dado como Acción: mueves un objeto de hasta 100 libras el resultado × 5 pies." },
    { n:"Maestro Psiónico", nv:15, d:"Tus dados psíonicos se convierten en d8; recuperas 1d4 al hacer un crítico." },
    { n:"Creación Psiónica", nv:18, d:"Puedes crear objetos sencillos de hasta 10 libras con energía psiónica (duran 1 hora)." },
  ]);

  add("Guerrero", "Echo Knight [Wildemount/TCE]", [
    { n:"Manifestar Eco", nv:3, d:"Creas un eco espectral en espacio vacío a 15 pies. Puedes atacar desde su posición y teleportarte a él." },
    { n:"Paso del Eco", nv:3, d:"Como Acción Adicional, teletransportas a la posición del eco (1/descanso corto)." },
    { n:"Oleada del Eco", nv:7, d:"Cuando usas Oleada de Acción, el eco puede realizar 1 ataque como parte de esa acción." },
    { n:"Eco Sin Fin", nv:10, d:"Puedes mantener activos hasta 2 ecos simultáneamente." },
    { n:"Legión de Ecos", nv:15, d:"Cuando el eco se mueve, puedes atacar desde su posición también al moverte tú." },
    { n:"Eco Eterno", nv:18, d:"Cuando un eco es destruido, recuperas PG = nivel de Guerrero." },
  ]);

  /* ══════════════════════════════════════════════════════
     HECHICERO
  ══════════════════════════════════════════════════════ */
  add("Hechicero", "Alma de Tormenta [XGE]", [
    { n:"Magia de Tormenta", nv:1, d:"Resistencia a rayo y trueno; puedes hablar con criaturas del aire y del mar (Hablar con Animales limitado)." },
    { n:"Corazón de la Tormenta", nv:6, d:"Al lanzar un conjuro de Nv.1+ que cause daño de rayo o trueno, criaturas a 10 pies reciben 1d6 de ese tipo." },
    { n:"Guía de la Tormenta", nv:14, d:"Acción para controlar condiciones climáticas: crear viento, parar lluvia, despejar niebla... (1/descanso largo)." },
    { n:"Ira de la Tormenta", nv:18, d:"Al lanzar cualquier conjuro, puedes infligir un rayo adicional a otro objetivo a 60 pies (1d6 rayo, CON)." },
  ]);

  add("Hechicero", "Alma de Sombra [XGE]", [
    { n:"Magia de Sombra", nv:1, d:"Visión en la oscuridad 120 pies; puedes gastar 3 Puntos para crear un perro de sombras (como Conjurar Bestia CR 1/2)." },
    { n:"Umbral de las Sombras", nv:6, d:"En penumbra u oscuridad, puedes teletransportarte 120 pies como Acción Adicional." },
    { n:"Resistencia de Sombra", nv:14, d:"Cuando estás en penumbra u oscuridad, eres resistente a todo daño no mágico." },
    { n:"Figura de las Sombras", nv:18, d:"En oscuridad completa, eres invisible para criaturas que dependan de la vista." },
  ]);

  add("Hechicero", "Línea de Hadas [XGE]", [
    { n:"Magia Feérica", nv:1, d:"Luz de las Hadas y Encantar Persona siempre preparados; los lanzas sin espacio 1 vez/descanso largo cada uno." },
    { n:"Teletransportación Feérica", nv:6, d:"Como Acción Adicional, teletransportas 30 pies (puedes llevar a 1 criatura contigua). 1/descanso corto." },
    { n:"Arrugas Dimensionales", nv:14, d:"Al teletransportarte, criaturas a 5 pies pueden ser teletransportadas también." },
    { n:"Presencia Feérica", nv:18, d:"1/descanso largo: aura de 60 pies de fascinación o miedo (SAB para resistir)." },
  ]);

  add("Hechicero", "Alma Divina [XGE]", [
    { n:"Magia Divina", nv:1, d:"Accedes a la lista completa de conjuros de Clérigo además de la de Hechicero." },
    { n:"Favor de los Dioses", nv:1, d:"1/descanso largo: cuando hagas una tirada de ataque o salvación y saques 1, puedes volver a tirar." },
    { n:"Alas Sobrenaturales", nv:6, d:"Puedes desplegar alas de vuelo 30 pies como Acción Adicional (SAB/descanso largo)." },
    { n:"Resiliencia Divina", nv:14, d:"Cuando llegas a 0 PG, recuperas PG = CAR mod × 2 (1/descanso largo)." },
    { n:"Forma Celestial", nv:18, d:"Como Acción, asumes una forma angélica por 1 minuto: vuelo 60 pies, resistencia necrótico/radiante, cura 2d8 a 1 aliado/turno." },
  ]);

  add("Hechicero", "Aberrant Mind [TCE]", [
    { n:"Tentáculos Telepáticos", nv:1, d:"Aprendes Telepatía y conjuros adicionales de aberración siempre preparados." },
    { n:"Percepción Psíquica", nv:1, d:"Puedes detectar criaturas invisibles o en el Plano Etéreo a 30 pies." },
    { n:"Defensa Psi", nv:6, d:"Resistencia al daño psíquico; inmune a tener tus pensamientos leídos sin consentir." },
    { n:"Retorcimiento Aberrante", nv:14, d:"Cuando lanzas un conjuro de Ilusión o Encantamiento, puedes alterar la realidad alrededor del objetivo (2 Puntos)." },
    { n:"Crear Aberración", nv:18, d:"Con 7 Puntos, transformas a una criatura en aberración aliada durante 24 horas (SAB para resistir)." },
  ]);

  add("Hechicero", "Clockwork Soul [TCE]", [
    { n:"Restauración del Mecanismo", nv:1, d:"Conjuros de orden siempre preparados: Alarma, Disipar Magia, Aguantar la Respiración, Ley de la Igualdad..." },
    { n:"Anular Caos", nv:1, d:"Cuando tú o un aliado a 60 pies lanza en la tabla de magia salvaje, puedes reemplazar el resultado por el medio de la tabla." },
    { n:"Bastion of Law", nv:6, d:"Gasta 1-5 Puntos: crea un escudo de protección para 1 criatura que absorbe daño igual a 5× puntos gastados." },
    { n:"Trance de Orden", nv:14, d:"Al lanzar un conjuro, puedes hacer que sea como si lo lanzaras con el espacio más alto que tengas sin gastar uno superior (2 Puntos)." },
    { n:"Codificado en la Ley", nv:18, d:"Inmune a ser Encantado; resistencia al daño mágico; aura de 10 pies que previene oleadas de magia salvaje." },
  ]);

  /* ══════════════════════════════════════════════════════
     MAGO
  ══════════════════════════════════════════════════════ */
  add("Mago", "Mago de Guerra [XGE]", [
    { n:"Truco Defensivo", nv:2, d:"Al lanzar un truco de daño, ganas +2 CA hasta tu siguiente turno." },
    { n:"Desviar Hechizo", nv:2, d:"Cuando fallas una tirada de salvación contra un conjuro, puedes usar Reacción para re-tirarla (1/turno)." },
    { n:"Propulsión Arcana", nv:6, d:"Cuando lanzas un conjuro de Nv.1+, puedes moverte hasta 30 pies sin provocar ataques de oportunidad." },
    { n:"Dureza Arcana", nv:10, d:"Añades INT a cualquier tirada de salvación que hagas." },
    { n:"Surge Arcano", nv:14, d:"Al usar tu turno completo para lanzar conjuros (Acción + Acción Adicional), un tercer conjuro puede lanzarse como Reacción." },
  ]);

  add("Mago", "Orden de los Escribas [TCE]", [
    { n:"Escriba de Conjuros", nv:2, d:"Copias conjuros en tu grimorio en 2 minutos (en lugar de 2 horas); el coste se reduce a la mitad; puedes cambiar el tipo de daño del conjuro." },
    { n:"Libro de los Conocimientos", nv:2, d:"Cuando encuentras otro grimorio, puedes copiar un conjuro de él en 1 minuto gratuitamente." },
    { n:"Maestro de Pergaminos", nv:6, d:"Cuando lanzas un conjuro del grimorio, puedes lanzarlo como si tuvieras 1 nivel más de espacio sin gastar uno superior (1/descanso largo)." },
    { n:"El Libro Habla", nv:10, d:"Tu grimorio puede hablar contigo telepáticamente mientras lo sostienes; también puede lanzar un truco de tu lista como Acción Adicional." },
    { n:"Una con el Libro", nv:14, d:"Mientras el grimorio esté en tu persona, eres inmune a ser Encantado y lanzas conjuros de Adivinación con ventaja." },
  ]);

  /* ══════════════════════════════════════════════════════
     MONJE
  ══════════════════════════════════════════════════════ */
  add("Monje", "Camino del Sol [XGE]", [
    { n:"Puño Radiante", nv:3, d:"Tus ataques pueden ser a distancia como rayos de energía radiante (alcance 30 pies, daño Artes Marciales)." },
    { n:"Escudo Brillante", nv:6, d:"Gasta 1 Ki: eres rodeado de llamas solares por 1 minuto. Atacantes a 5 pies reciben 1d6 de radiante." },
    { n:"Paso Solar", nv:11, d:"Gasta 2 Ki: teletransportas 60 pies a zona iluminada y creaturas en tu antigua/nueva posición reciben 4d6 radiante (DEX)." },
    { n:"Explosión Solar", nv:17, d:"Gasta 4 Ki: esfera de 20 pies de radio de luz radiante (10d6, CON para reducir a la mitad; criaturas que fallen quedan cegadas)." },
  ]);

  add("Monje", "Camino del Borracho [XGE]", [
    { n:"Borracho Peligroso", nv:3, d:"Competencia en Actuación; cuando usas Paso sin Viento puedes esconderte y el objetivo pierde sus Reacciones hasta el próximo turno." },
    { n:"Instinto Alcohólico", nv:6, d:"Reacción al ser golpeado: el atacante re-tira su ataque y usa el resultado más bajo." },
    { n:"Bamboleo Sereno", nv:11, d:"Gasta 2 Ki: hasta 3 criaturas a 20 pies deben mover 10 pies en dirección aleatoria (DEX para resistir)." },
    { n:"Palma Intoxicante", nv:17, d:"Al golpear con Ráfaga de Golpes, puedes marcar al objetivo. Acción: el objetivo cae Incapacitado 1 minuto (CON; bono por Ki gastado)." },
  ]);

  add("Monje", "Camino del Kensei [XGE]", [
    { n:"Armas Kensei", nv:3, d:"Elige 2 armas (1 cuerpo a cuerpo + 1 a distancia) como Armas Kensei: las usas con DEX, cuentan como armas de monje y las atacas con bono de competencia." },
    { n:"Tiro con Habilidad", nv:3, d:"Los ataques a distancia con Arma Kensei no sufren desventaja si hay un enemigo a 5 pies." },
    { n:"Un con la Hoja", nv:3, d:"Al atacar con Arma Kensei, el ataque inflige 1d4 extra al siguiente objetivo del turno (o ganas +2 CA hasta el siguiente)." },
    { n:"Amolar la Hoja", nv:6, d:"Gasta 1 Ki al final de descanso corto: el Arma Kensei gana +1 a impacto y daño (hasta siguiente descanso largo)." },
    { n:"Golpe Afilado", nv:11, d:"Al usar Golpe Aturdidor con Arma Kensei, el objetivo tiene desventaja en la tirada de salvación." },
    { n:"Alma del Filo", nv:17, d:"Armas Kensei ganan +3 a impacto y daño. Los críticos con ellas son en 18-20." },
  ]);

  add("Monje", "Camino de la Misericordia [TCE]", [
    { n:"Manos de Curación", nv:3, d:"Gasta 1 Ki al golpear: la criatura recupera PG = 1d10 + SAB." },
    { n:"Manos de Daño", nv:3, d:"Gasta 1 Ki al golpear: inflige daño necrótico adicional = 1d6 + SAB." },
    { n:"Médico Compasivo", nv:6, d:"Al usar Manos de Curación, también eliminas 1 condición: Cegado, Ensordecido, Paralizado, Envenenado o Aturdido." },
    { n:"Manos Letales", nv:11, d:"Al reducir a 0 PG con Manos de Daño, la criatura sufre 2d10 adicional de daño necrótico al inicio del siguiente turno." },
    { n:"Sanador Consumado", nv:17, d:"Puedes usar Manos de Curación y Manos de Daño en el mismo ataque contra distintos objetivos." },
  ]);

  add("Monje", "Camino del Espíritu Astral [TCE]", [
    { n:"Brazos de la Mente Astral", nv:3, d:"Gasta 1 Ki: manifiestas brazos espectrales astrales. Alcance 5 pies adicional; ataques usan SAB o DEX; daño de fuerza." },
    { n:"Visión de la Mente Astral", nv:6, d:"Puedes ver en la oscuridad mágica; puedes ver criaturas invisibles en el Plano Astral a 30 pies." },
    { n:"Vigor Cósmico", nv:11, d:"Al activar los Brazos, también ganas PG temporales = nivel de Monje." },
    { n:"Proyección de Consciencia", nv:11, d:"Gasta 8 Ki: tu consciencia sale de tu cuerpo. Exploras 1 milla/minuto; ves, oyes y hablas, pero no puedes interactuar físicamente." },
    { n:"Forma Astral Completa", nv:17, d:"Gasta 10 Ki: asumes una Forma Astral por 10 minutos. Tamaño Grande, vuelo 60 pies, ataques mejorados, aura de terror." },
  ]);

  /* ══════════════════════════════════════════════════════
     PALADÍN
  ══════════════════════════════════════════════════════ */
  add("Paladín", "Juramento de los Conquistadores [XGE]", [
    { n:"Canal Divino – Presencia Conquistadora", nv:3, d:"Criaturas a 30 pies que fallen tirada de SAB quedan Asustadas de ti durante 1 minuto." },
    { n:"Canal Divino – Golpe Guiado", nv:3, d:"+10 a una tirada de ataque tras ver el resultado." },
    { n:"Aura de Conquista", nv:7, d:"Las criaturas Asustadas por ti tienen velocidad 0 y reciben 1d4 de daño psíquico al inicio de su turno." },
    { n:"Destreza Escalofriante", nv:15, d:"Los críticos que ases también aplican la condición Asustado al objetivo (SAB para resistir)." },
    { n:"Conquistador Invicto", nv:20, d:"1 minuto: inmune a Asustado; ventaja en todos los ataques en combate cuerpo a cuerpo; +10 velocidad." },
  ]);

  add("Paladín", "Juramento de la Redención [XGE]", [
    { n:"Canal Divino – Emisario de la Paz", nv:3, d:"+5 a Persuasión durante 10 minutos." },
    { n:"Canal Divino – Reprender al Violento", nv:3, d:"Reacción: cuando un aliado a 30 pies recibe daño de un atacante, ese atacante recibe el mismo daño (SAB para resistir)." },
    { n:"Artesano de la Paz", nv:3, d:"Cuando entras en combate, puedes elegir a 1 criatura: no puede atacar a otros distintos a ti durante 1 round (SAB para resistir)." },
    { n:"Aura Protectora", nv:7, d:"Tu Aura de Protección también reduce en 2d8 el daño mágico que reciban tus aliados." },
    { n:"Resiliencia Tranquila", nv:15, d:"Cuando recibes daño suficiente para dejarte a 0 PG, puedes reducirlo a 1 PG (1/descanso largo)." },
    { n:"Emisario de la Redención", nv:20, d:"Resistencia a todos los daños; criaturas que te ataquen reciben la mitad del daño que te causaron como daño radiante." },
  ]);

  add("Paladín", "Juramento de la Gloria [TCE]", [
    { n:"Canal Divino – Inspirar Grandeza", nv:3, d:"Hasta 2 aliados a 60 pies ganan ventaja en tiradas de ataque y +10 de velocidad durante 1 minuto." },
    { n:"Canal Divino – Golpe Glorioso", nv:3, d:"+10 a una tirada de ataque tras ver el resultado." },
    { n:"Aura de Alerta", nv:7, d:"Tú y aliados en tu Aura no podéis ser sorprendidos." },
    { n:"Gran Reputación", nv:15, d:"Los enemigos tienen desventaja en ataques contra tus aliados cuando tú estás presente y visible." },
    { n:"Forma Gloriosa", nv:20, d:"1 minuto: cuerpo radiante, vuelo 30 pies, curación de 10 PG a aliados al inicio de cada turno." },
  ]);

  add("Paladín", "Juramento del Vigía [TCE]", [
    { n:"Sentinela al Umbral", nv:3, d:"Aprendes los idiomas Celestial, Infernal y Abisal; ventaja en Perspicacia y Percepción." },
    { n:"Canal Divino – Centinela del Alma", nv:3, d:"Reacción: cuando un aliado visible es atacado, te teletransportas a un espacio adyacente al atacante." },
    { n:"Conjuros del Vigía", nv:3, d:"Siempre preparados: Alarma, Detección de Invisible, Disipar Magia, Ojo de Vigilancia, Atar Monstruo." },
    { n:"Aura de la Sentinela", nv:7, d:"+5 a la Iniciativa de todos tus aliados dentro del Aura." },
    { n:"Vigilante Eterno", nv:15, d:"No puedes ser sorprendido; eres inmune a conjuros que anulen tu percepción." },
    { n:"Campeón Guardián", nv:20, d:"Vuelo 60 pies; aura que obliga a criaturas a atacarte a ti en lugar de a tus aliados (SAB para resistir)." },
  ]);

  /* ══════════════════════════════════════════════════════
     PÍCARO
  ══════════════════════════════════════════════════════ */
  add("Pícaro", "Swashbuckler [XGE]", [
    { n:"Fancy Footwork", nv:3, d:"Cuando atacas a una criatura en cuerpo a cuerpo, ella no puede hacerte ataque de oportunidad en ese turno." },
    { n:"Rakish Audacity", nv:3, d:"+CAR a la Iniciativa; puedes usar Ataque Furtivo cuando peleas en duelo (solo un enemigo a 5 pies de ti)." },
    { n:"Elegancia", nv:9, d:"Si ganas Iniciativa, puedes moverte hasta tu velocidad sin provocar ataques de oportunidad." },
    { n:"Maestro del Duelo", nv:13, d:"Al fallar un ataque con arma de finura, puedes volver a tirar (1 vez/turno)." },
    { n:"Maestría del Espadachín", nv:17, d:"Si la primera tirada de ataque de tu turno impacta, puedes hacer 1 ataque adicional inmediatamente." },
  ]);

  add("Pícaro", "Inquisitivo [XGE]", [
    { n:"Ojo de la Investigación", nv:3, d:"Puedes usar Ataque Furtivo si tienes ventaja en Perspicacia contra el objetivo (independientemente de ventaja en el ataque)." },
    { n:"Instinto de Pesquisa", nv:3, d:"Acción: haces tirada de Perspicacia o Investigación para saber si un objeto o criatura miente o es ilusorio." },
    { n:"Ojo Constante", nv:9, d:"No sufres penalización por poca luz en Percepción; ventaja para detectar criaturas ocultas o ilusiones." },
    { n:"Ojo Omnisciente", nv:13, d:"Sabes de forma instintiva si un objeto o criatura tiene magia activa sin gastar acción." },
    { n:"Deducción Maestra", nv:17, d:"Puedes re-tirar cualquier tirada de Perspicacia o Investigación que hagas (1 vez/tirada)." },
  ]);

  add("Pícaro", "Maestro del Mástil [XGE - Scout]", [
    { n:"Scout", nv:3, d:"Competencia en Naturaleza y Supervivencia; no puedes ser sorprendido mientras estés consciente." },
    { n:"Pulgada de Tierra", nv:3, d:"Reacción al ser objetivo de ataque de oportunidad: muévete 5 pies sin provocar ese ataque." },
    { n:"Experto de la Jungla", nv:9, d:"Competencia doble en Naturaleza y Supervivencia; terreno difícil de origen natural no te cuesta movimiento extra." },
    { n:"Movimiento Superior", nv:13, d:"No eres ralentizado por terreno difícil ni detienes tu movimiento por arbustos o maleza." },
    { n:"Emboscador Experto", nv:17, d:"Al atacar desde el sigilo, el impacto también aplica Ataque Furtivo al objetivo en el siguiente round." },
  ]);

  add("Pícaro", "Alma Fantasma [XGE]", [
    { n:"Forma Fantasma", nv:3, d:"Como Acción Adicional, adoptas forma espectral: puedes moverte a través de criaturas/objetos (1 pie/pie de movimiento). Dura 10 minutos (SAB/descanso largo)." },
    { n:"Rastro Espectral", nv:3, d:"En Forma Fantasma, dejas un rastro de energía: una criatura que empiece su turno en tu espacio recibe 1d6 de necrótico." },
    { n:"Toque de Muerte", nv:9, d:"Tu Ataque Furtivo puede dañar a criaturas en el Plano Etéreo cuando estás en Forma Fantasma." },
    { n:"Ladrón de Vida", nv:13, d:"Cuando reduces a 0 PG a una criatura, ganas PG temporales = 2d6 + CON." },
    { n:"Muerte Fantasma", nv:17, d:"En Forma Fantasma, eres inmune a daño no mágico y tienes resistencia a todo daño mágico." },
  ]);

  add("Pícaro", "Soul Knife [TCE]", [
    { n:"Cuchillas Psíquicas", nv:3, d:"Puedes manifestar 1 o 2 hojas de energía psíquica (daño 1d6 psíquico; puedes lanzarlas a 60 pies)." },
    { n:"Dados de Energía Psiónica", nv:3, d:"Pool de d6 psiónicos (= doble competencia). Se recuperan en descanso corto o largo." },
    { n:"Hoja que Busca el Alma", nv:3, d:"Gasta 2 dados: adds sus valor total como daño psíquico a un impacto de Cuchilla." },
    { n:"Defensa Psiónica", nv:9, d:"Resistencia al daño psíquico; gasta 1 dado para reducir daño recibido en igual cantidad." },
    { n:"Cuchilla Trepadora", nv:13, d:"Al impactar con Cuchilla, puedes gastar 2 dados para teletransportarte al espacio del objetivo." },
    { n:"Hoja Espectral", nv:17, d:"Una de tus Cuchillas ignora resistencias e inmunidades; golpea también en el Plano Etéreo." },
  ]);

  /* ══════════════════════════════════════════════════════
     BRUJO
  ══════════════════════════════════════════════════════ */
  add("Brujo", "El Celestial [XGE]", [
    { n:"Lista de Conjuros Curativos", nv:1, d:"Accedes a conjuros de curación de Clérigo y Druida que de otro modo no tendrías." },
    { n:"Llama Curativa", nv:1, d:"Cuando reduces a 0 PG a una criatura con un conjuro, tú u otro aliado a 60 pies recuperáis PG = 1d10 + CAR." },
    { n:"Guía Radiante", nv:6, d:"Añades CAR al daño radiante de tus conjuros de Brujo." },
    { n:"Alma Celeste", nv:10, d:"Resistencia a daño radiante y necrótico; visión en la oscuridad 60 pies (o la existente +60)." },
    { n:"Aparición Celestial", nv:14, d:"Puedes desplegar alas de vuelo 30 pies y emites un aura de luz radiante que daña demonios/no-muertos." },
  ]);

  add("Brujo", "El Abismal [TCE]", [
    { n:"Tentáculo del Profundo", nv:1, d:"Como Acción Adicional, conjuras un tentáculo en espacio a 60 pies: ataca como Acción Adicional (alcance 10 pies, 1d8 frío), dura 1 minuto (1/descanso largo)." },
    { n:"Naturaleza Submarina", nv:1, d:"Puedes respirar bajo el agua; velocidad de natación 40 pies." },
    { n:"Forma de Kraken", nv:6, d:"Cuando el tentáculo golpea, puedes agarrar al objetivo (FUE CD = CD de salvación)." },
    { n:"Oleada Oscura", nv:10, d:"Una vez por turno, cuando lanzas un conjuro de Nv.1+, puedes teletransportarte al espacio de tu tentáculo." },
    { n:"Una con las Profundidades", nv:14, d:"Eres inmune a daño de frío; resistencia a daño de rayo y trueno; 1d4+1 tentáculos simultáneos." },
  ]);

  add("Brujo", "El No-muerto [TCE]", [
    { n:"Forma del Espanto", nv:3, d:"Como Acción Adicional, alteras tu aspecto a algo terrorífico por 1 minuto: criaturas a 10 pies que fallen CAR quedan Asustadas (SAB/descanso corto)." },
    { n:"Toque Maldito", nv:3, d:"Cuando atacas en Forma del Espanto, ganas resistencia a todos los daños durante ese turno." },
    { n:"Cáscara Necrótica", nv:6, d:"Cuando recibes daño no mortal (que no sería letal), puedes ignorarlo (1/descanso largo)." },
    { n:"Espíritu Indomable", nv:10, d:"Resistencia al daño necrótico; no puedes ser Asustado." },
    { n:"Ascensión al No-muerto", nv:14, d:"1/descanso largo: por 1 minuto te conviertes en No-muerto poderoso: resistencias múltiples, inmunidad a veneno y enfermedad, no necesitas respirar." },
  ]);

  add("Brujo", "El Genio [TCE]", [
    { n:"Tipo de Genio", nv:1, d:"Elige Dao (tierra), Djinni (viento), Efreet (fuego) o Marid (agua). Conjuros adicionales y tipo de daño extra." },
    { n:"Recipiente del Genio", nv:1, d:"Tienes un recipiente mágico que actúa como un espacio extradimensional donde puedes descansar (8 horas = 1 descanso largo)." },
    { n:"Ventaja del Genio", nv:1, d:"1/descanso largo: añades 1d4 a cualquier tirada de ataque, habilidad o salvación." },
    { n:"Benevolencia del Genio", nv:6, d:"Los aliados que descansan en tu Recipiente recuperan 1d6 PG extra por dado de golpe gastado." },
    { n:"Receptáculo Mejorado", nv:10, d:"Tu Recipiente puede contener hasta 6 criaturas; tiene efectos adicionales según tu tipo de genio." },
    { n:"Deseo Limitado", nv:14, d:"1/año: lanzas Deseo con el efecto de copiar cualquier conjuro de Nv.8 o menor sin componentes materiales." },
  ]);

})();

// ── ENTREGA 3: Explorer's Guide to Wildemount (EGW) + Tal'Dorei Campaign Setting Reborn (TDCSR) + Eberron: Rising from the Last War (ERftLW) ──
(function() {
  const add = (clase, nombre, rasgos) => {
    if (DND_CLASES[clase]) DND_CLASES[clase].subclases[nombre] = rasgos;
  };

  /* ══════════════════════════════════════════════════════
     ARTIFICER (Clase completa — ERftLW / TCE)
  ══════════════════════════════════════════════════════ */
  DND_CLASES["Artificer"] = {
    rasgos: [
      { n:"Competencias Mágicas", nv:1, d:"Competencia en herramientas de ladrón y de artesano. Las herramientas artesanas son tu foco arcano." },
      { n:"Conjuración", nv:1, d:"Lanzador medio (INT). Lista de Artificer. Preparas conjuros tras cada descanso largo." },
      { n:"Infundir Objeto", nv:2, d:"Infunde objetos mundanos con propiedades mágicas. Número de infusiones escala con nivel." },
      { n:"La Herramienta Correcta", nv:2, d:"Como Acción, accedes a competencia en cualquier herramienta artesanal tocándola con tu foco." },
      { n:"Especialización", nv:3, d:"Elige tu subclase (Especialidad de Artificer)." },
      { n:"Herramienta para el Trabajo", nv:3, d:"En 1 hora de trabajo mágico, creas cualquier herramienta artesanal que necesites." },
      { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
      { n:"Ataque Extra", nv:5, d:"Atacas dos veces con la acción de Atacar." },
      { n:"Detección de Magia", nv:6, d:"Lanzas Detectar Magia sin espacio ni componentes a voluntad." },
      { n:"Destello de Genialidad", nv:7, d:"Reacción: añades tu mod INT a una tirada de habilidad o salvación de un aliado a 30 pies." },
      { n:"Almacén de Magia", nv:11, d:"Creas un objeto especial que almacena 1 conjuro de Nv.1-2 para un aliado." },
      { n:"Armadura de Ingenio", nv:14, d:"Te forjas una armadura permanente con capacidades especiales." },
      { n:"Alma de Conjuro", nv:20, d:"Puedes lanzar cualquier conjuro de Artificer sin gastar espacio (1 vez/turno)." },
    ],
    subclases: {
      "Alquimista [ERftLW/TCE]": [
        { n:"Herramientas del Alquimista", nv:3, d:"Competencia en suministros de alquimia; los usas como foco arcano para tus conjuros de Artificer." },
        { n:"Conjuros del Alquimista", nv:3, d:"Conjuros adicionales siempre preparados según nivel: Curar Heridas, Rayo de Enfermedad, Nube Apestosa, Destello, Crear Comida y Agua..." },
        { n:"Elixir Experimental", nv:3, d:"Al finalizar un descanso largo, creas 1+ elixires con efectos aleatorios (curación, velocidad, resistencia, vuelo, transformación o valentía)." },
        { n:"Alquimia Mágica", nv:5, d:"Cuando lanzas un conjuro de curación, el objetivo recupera PG adicionales = mod INT." },
        { n:"Resiliencia Química", nv:9, d:"Resistencia a veneno y ácido; inmunidad a la condición Envenenado." },
        { n:"Cuerpo Alquímico", nv:15, d:"Ganas uno de: resistencia ácida, inmunidad a veneno, regeneración de 5 PG al inicio de cada turno o +2 CA." },
      ],
      "Artillero [ERftLW/TCE]": [
        { n:"Herramientas del Artillero", nv:3, d:"Competencia en herramientas de artillero; fabricas armadura de cuero tachonado mejorada." },
        { n:"Conjuros del Artillero", nv:3, d:"Conjuros adicionales: Escudo, Manos Ardientes, Disipar Magia, Bola de Fuego, Pared de Fuego..." },
        { n:"Cañón Arcano", nv:3, d:"Creas un cañón mágico en 1 hora en tres variantes: Flameadora (cono de fuego), Protectora (escudo PG temp.) o Fuerza Explosiva (rayo de fuerza)." },
        { n:"Defensa Arcana", nv:5, d:"+1 CA mientras llevas una armadura o un escudo que hayas infundido." },
        { n:"Explosión de Tiro Rápido", nv:9, d:"Cuando atacas dos veces, puedes sustituir uno de los ataques por un disparo del Cañón Arcano." },
        { n:"Fortaleza Arcana", nv:15, d:"El aura del Cañón otorga +1 CA y +1 a todas las salvaciones a tus aliados cercanos." },
      ],
      "Herrero de Batalla [ERftLW/TCE]": [
        { n:"Herramientas del Herrero", nv:3, d:"Competencia en herramientas de herrero; usas INT en lugar de FUE/DEX en ataques con el Arma Especial." },
        { n:"Conjuros del Herrero", nv:3, d:"Conjuros adicionales: Herramienta Arcana, Heroísmo, Disipar Magia, Velocidad, Rayo Forestal..." },
        { n:"Arma Especial de Acero", nv:3, d:"Creas un arma de acero especial (espada larga u otra) que actúa como foco arcano; escala contigo." },
        { n:"Guardián de Acero", nv:3, d:"Creas un compañero Perro de Acero que combate a tu lado y escala con tu nivel de Artificer." },
        { n:"Arcana Jure", nv:9, d:"Cuando lanzas un conjuro de Nv.1+, puedes atacar con el Arma Especial como Acción Adicional." },
        { n:"Armadura de Acero Mejorada", nv:15, d:"Tu armadura infundida otorga resistencia a 1 tipo de daño por turno (a elegir al inicio de cada turno)." },
      ],
      "Armero [TCE]": [
        { n:"Herramientas del Armero", nv:3, d:"Competencia en herramientas de herrero; tu Armadura Arcana es tu foco arcano." },
        { n:"Conjuros del Armero", nv:3, d:"Conjuros adicionales: Magia de Trueno, Escudo, Hipnótico, Rayo de Relámpago, Muro de Fuerza..." },
        { n:"Armadura Arcana", nv:3, d:"Transformas una armadura en Armadura Arcana (no se puede quitar sin tu permiso). Elige modelo: Guardián (manoplas de ataque) o Infiltrador (lanzador de armas integrado)." },
        { n:"Modificaciones de Armadura", nv:9, d:"Tu Armadura Arcana puede recibir infusiones adicionales sin contar contra tu límite total." },
        { n:"Armadura Perfeccionada", nv:15, d:"Cada modelo de Armadura Arcana obtiene un poder adicional poderoso: Guardián atrae criaturas; Infiltrador vuela 60 pies." },
      ],
    }
  };

  /* ══════════════════════════════════════════════════════
     BÁRBARO — Wildemount + Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Bárbaro", "Camino del Alma del Portento [EGW]", [
    { n:"Juramento Roto", nv:3, d:"Tus ataques en Furia cuentan como mágicos a efectos de resistencias." },
    { n:"Ira Divina", nv:3, d:"Al entrar en Furia, eliges radiante o necrótico: añades 1d6 de ese tipo en el primer golpe de cada turno." },
    { n:"Alma Resistente", nv:6, d:"Ventaja en tiradas de salvación contra conjuros mientras estás en Furia." },
    { n:"Castigo Sagrado", nv:10, d:"Cuando golpeas a un lanzador de conjuros en Furia, puede perder la concentración automáticamente (CON CD = 8 + daño infligido)." },
    { n:"Voluntad Inamovible", nv:14, d:"Al entrar en Furia, lanzas Libertad de Movimiento sobre ti mismo sin espacio ni concentración." },
  ]);

  add("Bárbaro", "Camino del Mundo Destrozado [TDCSR]", [
    { n:"Forma Destrozada", nv:3, d:"Al entrar en Furia, partes de tu cuerpo se convierten en energía elemental. Elige un elemento (fuego/frío/rayo/ácido/trueno); ganas resistencia a ese tipo y tus ataques infligen 1d6 adicional de ese tipo." },
    { n:"Chispa de la Creación", nv:6, d:"Tu Forma Destrozada emite destellos dañinos a criaturas contiguas (CON para resistir)." },
    { n:"Explosión Cósmica", nv:10, d:"1/descanso largo: en Furia, lanzas un cono de 30 pies de energía primordial (5d8, DEX para reducir a la mitad)." },
    { n:"Resiliencia Primordial", nv:14, d:"Ganas resistencia permanente a los cuatro tipos elementales; inmunidad al tipo que elegiste en Forma Destrozada." },
  ]);

  add("Bárbaro", "Camino de la Fuerza Lunar [TDCSR]", [
    { n:"Transformación Lunar", nv:3, d:"Al entrar en Furia, pasas por fases lunares (Creciente/Llena/Menguante) con beneficios únicos en cada una." },
    { n:"Espíritu Lunar", nv:6, d:"En Furia, cuando gastas Dados de Golpe para curarte (descanso corto), añades SAB al total curado." },
    { n:"Oleada Lunar", nv:10, d:"Puedes cambiar de fase lunar activa como Acción Adicional durante la Furia." },
    { n:"Cuerpo Celestial", nv:14, d:"Resistencia permanente a daño radiante y necrótico; vuelo 30 pies en Furia (fase llena)." },
  ]);

  /* ══════════════════════════════════════════════════════
     BARDO — Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Bardo", "Colegio de la Sátira [TDCSR]", [
    { n:"Ingenio Venenoso", nv:3, d:"Cuando usas Inspiración bárdica para reducir una tirada enemiga y el dado muestra 4 o más, el objetivo queda Envenenado hasta el final de su siguiente turno." },
    { n:"Palabras que Hieren", nv:3, d:"1/turno, cuando usas Palabras de Puñal contra un objetivo, añades 1d6 de daño psíquico extra." },
    { n:"Golpe Cómico", nv:6, d:"Cuando reduces a 0 PG a un enemigo, las criaturas que lo presencien deben superar CON o queden Incapacitadas de risa hasta el final de su siguiente turno (SAB anula)." },
    { n:"Maestro del Ridículo", nv:14, d:"Las criaturas Asustadas por tus conjuros o habilidades también quedan con desventaja en las tiradas de ataque." },
  ]);

  /* ══════════════════════════════════════════════════════
     CLÉRIGO — Wildemount + Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Clérigo", "Dominio de la Ambición [EGW]", [
    { n:"Exigencias del Ambicioso", nv:1, d:"Competencia en Intimidación y Engaño; cuando una criatura a 30 pies falla una tirada, puedes moverte hasta ella sin oportunidad (reacción)." },
    { n:"Canal Divino – Avanzar en la Oscuridad", nv:3, d:"Entras brevemente en el Plano Sombrío y reapareces a 60 pies en espacio vacío." },
    { n:"Canal Divino – Corrupción Codiciosa", nv:3, d:"Hasta 5 criaturas a 30 pies reciben 2d10 de necrótico y quedan Asustadas (SAB para resistir)." },
    { n:"El Factor de la Ventaja", nv:6, d:"Cuando tienes ventaja en una tirada de ataque, añades tu mod CAR al daño del impacto." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño psíquico, 1 vez/turno." },
    { n:"Señor del Caos", nv:17, d:"Cuando un aliado cae a 0 PG, puedes usar Reacción para hacer que su energía vital explote: 2d10 necrótico en 10 pies (DEX)." },
  ]);

  add("Clérigo", "Dominio del Resurgir [EGW]", [
    { n:"Abrazar el Resurgir", nv:1, d:"Cuando reduces a una criatura a 0 PG con un conjuro, recuperas PG = nivel de Clérigo." },
    { n:"Canal Divino – Toca de Vida y Muerte", nv:3, d:"Drenas PG de una criatura (2d6 + nivel) para curar a otra a 30 pies en igual cantidad." },
    { n:"Coste de la Vida", nv:6, d:"Cuando estabilizas a una criatura, puedes gastar tus propios PG para que ella recupere 1 PG en lugar de quedar estabilizada." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño necrótico, 1 vez/turno." },
    { n:"Detonación Vital", nv:17, d:"Cuando un aliado a 30 pies cae a 0 PG, puedes hacer que explote: 2d8 necrótico a criaturas a 5 pies de él (DEX para reducir a la mitad)." },
  ]);

  add("Clérigo", "Dominio de la Unidad [TDCSR]", [
    { n:"Embajador de la Unidad", nv:1, d:"Competencia doble en Persuasión; cuando lanzas un conjuro en un aliado, ese aliado gana +1d4 a su próxima tirada de habilidad." },
    { n:"Canal Divino – Vínculo de Destinos", nv:3, d:"Vinculas a dos criaturas: comparten sus puntos de PG al recibir daño (mitad cada una) durante 1 minuto." },
    { n:"Canal Divino – Edicto Sagrado", nv:3, d:"Hasta 5 aliados a 30 pies ganan ventaja en sus tiradas de ataque hasta el final de tu siguiente turno." },
    { n:"Golpe Divino", nv:8, d:"+1d8 de daño radiante, 1 vez/turno." },
    { n:"Unión Perfecta", nv:17, d:"Mientras el Vínculo de Destinos está activo, los vinculados ganan además resistencia a todos los daños." },
  ]);

  /* ══════════════════════════════════════════════════════
     DRUIDA — Wildemount + Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Druida", "Círculo de la Tundra [TDCSR]", [
    { n:"Conjuros de Tundra", nv:2, d:"Conjuros siempre preparados según nivel: Rociada Helada, Ráfaga de Nieve, Tormenta de Granizo, Piel de Piedra, Cono de Frío..." },
    { n:"Corazón de Permafrost", nv:2, d:"En Forma Salvaje ganas resistencia al frío y puedes crear terreno helado (terreno difícil) a tu alrededor." },
    { n:"Rugido del Glaciar", nv:6, d:"Cuando entras en Forma Salvaje, criaturas a 30 pies reciben 2d6 de daño frío (CON para reducir a la mitad)." },
    { n:"Abrazo Glacial", nv:10, d:"Lanzas Esfera Congelante de Otiluke sin espacio de conjuro 1 vez/descanso largo." },
    { n:"Tundra Eterna", nv:14, d:"Resistencia permanente al frío; inmunidad a la condición Paralizado." },
  ]);

  add("Druida", "Círculo de la Putrefacción [TDCSR]", [
    { n:"Conjuros de Putrefacción", nv:2, d:"Conjuros adicionales: Rayo de Enfermedad, Nube Apestosa, Toque de Animación, Contagio, Plaga de Insectos..." },
    { n:"Infección de Esporas", nv:2, d:"Forma Salvaje alternativa: en lugar de transformarte, te infestas de esporas. Ganas PG temporales y tus ataques infligen daño necrótico adicional." },
    { n:"Miasma Tóxico", nv:6, d:"Criaturas que fallen salvaciones contra tus conjuros de veneno o necrótico también quedan Envenenadas." },
    { n:"Proliferación de la Putrefacción", nv:10, d:"Al matar a una criatura, puedes usar Reacción para hacer que explote: 2d8 necrótico en 5 pies." },
    { n:"Forma de Plaga", nv:14, d:"En Forma Salvaje de esporas, eres inmune a veneno y necrótico; criaturas que te toquen reciben 1d6 necrótico." },
  ]);

  /* ══════════════════════════════════════════════════════
     EXPLORADOR — Wildemount
  ══════════════════════════════════════════════════════ */
  add("Explorador", "Explorador Gravitónico [EGW]", [
    { n:"Conjuros Gravitónicos", nv:3, d:"Conjuros de gravedad siempre preparados: Caída Flotante, Agravar, Invertir Gravedad, Teletransportación..." },
    { n:"Ajuste de Gravedad", nv:3, d:"Como Acción Adicional: empujas u atraes a 1 criatura a 60 pies hasta 10 pies (FUE para resistir). 1/descanso corto." },
    { n:"Escudo de Gravitones", nv:7, d:"Reacción al ser atacado: +2 CA y empujas al atacante 5 pies." },
    { n:"Lanzador Gravitónico", nv:11, d:"Cuando tu Ajuste de Gravedad falla, puedes volver a intentarlo en el mismo turno." },
    { n:"Maestro Gravitónico", nv:15, d:"Las criaturas afectadas por tu Ajuste tienen desventaja en todos sus ataques durante 1 round." },
  ]);

  add("Explorador", "Explorador Cronomático [EGW]", [
    { n:"Conjuros Crono", nv:3, d:"Conjuros de tiempo siempre preparados: Aguantar la Respiración, Pausa Temporal, Mayor Invisibilidad, Doppelganger, Detener el Tiempo..." },
    { n:"Impulsión Temporal", nv:3, d:"Como Reacción cuando tú o un aliado a 30 pies falla una tirada: da +1d8 a esa tirada. 1/descanso corto." },
    { n:"Burbuja Temporal", nv:7, d:"Cuando usas Impulsión Temporal, el beneficiario puede moverse sin provocar ataques de oportunidad hasta su siguiente turno." },
    { n:"Inversión Temporal", nv:11, d:"1/descanso largo: reviertes el estado de 1 criatura visible a cómo estaba al inicio del combate (PG, concentración, espacios de conjuro)." },
    { n:"Distorsión Maestra", nv:15, d:"Impulsión Temporal sube a +2d8 y no tiene límite de usos (solo limitado por 1 uso por criatura por turno)." },
  ]);

  /* ══════════════════════════════════════════════════════
     GUERRERO — Wildemount + Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Guerrero", "Echo Knight [EGW]", [
    { n:"Manifestar Eco", nv:3, d:"Creas un eco espectral en espacio vacío a 15 pies. Puedes atacar desde su posición y teletransportarte a él (Acción Adicional, 1/descanso corto)." },
    { n:"Eco Sin Fin", nv:7, d:"Puedes mantener hasta 2 ecos simultáneamente; cada uno puede atacar." },
    { n:"Oleada del Eco", nv:10, d:"Cuando usas Oleada de Acción, el eco también puede realizar 1 ataque." },
    { n:"Legión de Ecos", nv:15, d:"Cuando te mueves, el eco puede moverse también; puedes atacar desde la posición de cualquier eco activo." },
    { n:"Eco Eterno", nv:18, d:"Cuando un eco es destruido, recuperas PG = nivel de Guerrero." },
  ]);

  add("Guerrero", "Caballero del Abismo [TDCSR]", [
    { n:"Magia del Abismo", nv:3, d:"Lanzas conjuros de oscuridad (INT): Oscuridad, Paso Brumoso, Desvanecimiento, Sombra de Moil, Imagen Proyectada..." },
    { n:"Vínculo con Arma Sombrío", nv:3, d:"Tu arma vinculada deja una estela de sombra; al golpear reduces la velocidad del objetivo 10 pies hasta tu siguiente turno." },
    { n:"Magia de Guerra Oscura", nv:7, d:"Al lanzar un truco de oscuridad/necrótico, puedes atacar como Acción Adicional." },
    { n:"Portada Umbral", nv:10, d:"Mientras estés en penumbra u oscuridad, ganas +2 CA." },
    { n:"Forma del Abismo", nv:15, d:"1/descanso largo: entras en Forma del Abismo por 1 minuto: resistencia a necrótico/psíquico, ataques infligen daño necrótico adicional." },
    { n:"Señor de las Sombras", nv:18, d:"Puedes ver perfectamente en oscuridad mágica; los enemigos en oscuridad tienen desventaja en ataques contra ti." },
  ]);

  /* ══════════════════════════════════════════════════════
     HECHICERO — Wildemount + Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Hechicero", "Magia de la Graviturgia [EGW]", [
    { n:"Ajuste Arcano", nv:1, d:"Como Acción Adicional, aumentas o reduces el peso de 1 criatura a 30 pies: pesada (velocidad 0, ventaja en FUE) o ligera (velocidad +10, desventaja FUE). 1/descanso corto." },
    { n:"Maestría Gravitónica", nv:1, d:"Añades INT a tiradas de Atletismo; no puedes ser derribado involuntariamente." },
    { n:"Explosión de Atracción", nv:6, d:"Cuando lanzas un conjuro que cause daño, puedes atraer a 1 objetivo afectado hasta 10 pies hacia ti." },
    { n:"Singularidad del Horizonte de Eventos", nv:14, d:"1/descanso largo: creas un punto de colapso gravitatorio de 30 pies de radio por 1 minuto; las criaturas dentro son atraídas 5 pies/turno y reciben 2d10 de aplastamiento." },
    { n:"Forma Etérea de Gravedad", nv:18, d:"Velocidad de vuelo 60 pies; inmune a ser derribado o inmovilizado; adds INT a tiradas de salvación de FUE." },
  ]);

  add("Hechicero", "Magia de la Cronurgia [EGW]", [
    { n:"Cronista Arcano", nv:1, d:"Añades tu mod INT a la Iniciativa; puedes usar dados de Presagio como en la Escuela de Adivinación." },
    { n:"Impulsión Temporal", nv:1, d:"Como Reacción cuando una criatura visible falla una tirada: da +1d8 a ella. 1 vez/turno." },
    { n:"Congelar el Momento", nv:6, d:"Puedes almacenar un conjuro de concentración 'en pausa' por hasta 1 hora y activarlo después sin lanzarlo de nuevo." },
    { n:"Extraer Fragmento de Tiempo", nv:14, d:"Cuando una criatura visible cae a 0 PG, puedes usar Reacción para revertirla a 1 PG (1/descanso largo)." },
    { n:"Maestría del Tiempo", nv:18, d:"Cuando activas Impulsión Temporal, también puedes re-tirar la tirada de ataque del atacante (si había uno)." },
  ]);

  add("Hechicero", "Linaje del Fuego Cósmico [TDCSR]", [
    { n:"Origen del Fuego Cósmico", nv:1, d:"Resistencia al fuego; cuando lanzas un conjuro que cause daño de fuego, puedes cambiarlo a cualquier tipo elemental." },
    { n:"Llama del Cosmos", nv:6, d:"Al lanzar un conjuro de fuego de Nv.1+, criaturas a 10 pies reciben 1d6 del tipo de daño elegido." },
    { n:"Corazón de Fuego Cósmico", nv:14, d:"Inmunidad al fuego; tus conjuros de fuego ignoran resistencias (pero no inmunidades)." },
    { n:"Ascensión del Fuego", nv:18, d:"Velocidad de vuelo 60 pies; tus conjuros de fuego infligen el máximo de daño siempre." },
  ]);

  /* ══════════════════════════════════════════════════════
     MAGO — Wildemount
  ══════════════════════════════════════════════════════ */
  add("Mago", "Magia de la Cronurgia [EGW]", [
    { n:"Cronista Arcano", nv:2, d:"Añades tu mod INT a la Iniciativa; aprendes a crear dados de Presagio como la Escuela de Adivinación." },
    { n:"Toque del Destino", nv:2, d:"Como Acción Adicional 1/turno: impones ventaja o desventaja a una tirada de ataque, habilidad o salvación de una criatura visible." },
    { n:"Fuerza Temporal", nv:6, d:"Puedes almacenar un conjuro de concentración 'en pausa' por hasta 1 hora y activarlo en cualquier momento." },
    { n:"Extraer Fragmento de Tiempo", nv:10, d:"Cuando una criatura visible cae a 0 PG, puedes revertirla a 1 PG como Reacción (1/descanso largo)." },
    { n:"Intervención Momentánea", nv:14, d:"Cuando una criatura lanza un conjuro, puedes reemplazarlo con uno de los tuyos del mismo nivel (CON para resistir). 1/descanso largo." },
  ]);

  add("Mago", "Magia de la Graviturgia [EGW]", [
    { n:"Ajuste Arcano", nv:2, d:"Como Acción Adicional, aumentas o reduces el peso de 1 criatura a 30 pies. 1/descanso corto." },
    { n:"Presión Inercial", nv:2, d:"Añades INT a tiradas de Atletismo; no puedes ser derribado involuntariamente." },
    { n:"Explosión de Atracción", nv:6, d:"Al lanzar un conjuro de daño, puedes atraer a 1 objetivo 10 pies hacia ti." },
    { n:"Punto de Colapso", nv:10, d:"1/descanso largo: creas una singularidad gravitatoria de 20 pies de radio por 1 minuto que atrae y daña criaturas." },
    { n:"Forma Gravitónica", nv:14, d:"Velocidad de vuelo 60 pies; inmune a ser derribado o inmovilizado." },
  ]);

  /* ══════════════════════════════════════════════════════
     MONJE — Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Monje", "Camino del Escudo Viviente [TDCSR]", [
    { n:"Fundamentos del Escudo", nv:3, d:"Competencia con escudos sin penalización a Artes Marciales; los escudos cuentan como armas de monje para ti." },
    { n:"Escudo de Ki", nv:3, d:"Gasta 1 Ki: creas un escudo de energía en ti o en un aliado a 30 pies (absorbe 1d6 + SAB de daño). Dura 1 minuto." },
    { n:"Golpe del Escudo", nv:6, d:"Puedes atacar con el escudo usando tus Artes Marciales (aplica Ataque Furtivo si es Pícaro también)." },
    { n:"Barrera del Escudo", nv:11, d:"Tu Escudo de Ki otorga resistencia a 1 tipo de daño a tu elección." },
    { n:"Espíritu del Guardián", nv:17, d:"Cuando una criatura a 30 pies es golpeada, puedes usar Reacción para transferir la mitad del daño a tu Escudo de Ki." },
  ]);

  add("Monje", "Camino de las Manos Abiertas Cromaticas [TDCSR]", [
    { n:"Toque Cromático", nv:3, d:"Elige un tipo de daño elemental; Ráfaga de Golpes añade 1d4 de ese tipo. Cambiable en descanso largo." },
    { n:"Aura de Color", nv:6, d:"En combate emites un aura de 10 pies de tu elemento; criaturas enemigas que empiecen turno en ella reciben 1d4." },
    { n:"Oleada Elemental", nv:11, d:"Gasta 4 Ki: lanzas una ola de 15 pies de tu elemento (3d6, salvación DEX o CON)." },
    { n:"Cuerpo Elemental", nv:17, d:"Resistencia permanente a tu tipo de daño elemental; 1/turno adds 1d8 de ese tipo en ataques." },
  ]);

  /* ══════════════════════════════════════════════════════
     PALADÍN — Eberron + Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Paladín", "Juramento del Rompedor [ERftLW]", [
    { n:"Conjuros del Rompedor", nv:3, d:"Conjuros adicionales: Detectar Magia, Disipar Magia, Globo Antimagia, Antipatía/Simpatía..." },
    { n:"Canal Divino – Censura de Hechicero", nv:3, d:"Cuando ves a una criatura lanzar un conjuro a 60 pies, puedes usar Reacción para imponer desventaja en su tirada de lanzamiento." },
    { n:"Canal Divino – Ire del Rompedor", nv:3, d:"+10 a una tirada de ataque (tras ver el resultado)." },
    { n:"Aura del Supresor", nv:7, d:"Criaturas dentro del Aura tienen desventaja en tiradas de salvación para mantener concentración." },
    { n:"Disrupción Sobrenatural", nv:15, d:"Cuando golpeas a un lanzador de conjuros, puede perder la concentración automáticamente si falla CON CD = 8 + tu CAR + comp." },
    { n:"Campeón del Orden", nv:20, d:"1 minuto: +10 CA; inmune a conjuros de Nv.5 o menor; ataques infligen 2d8 de daño de fuerza extra." },
  ]);

  add("Paladín", "Juramento de la Majestad Abisal [TDCSR]", [
    { n:"Conjuros Abisales", nv:3, d:"Conjuros de oscuridad y miedo siempre preparados: Oscuridad, Miedo, Destierro, Controlar el No-muerto..." },
    { n:"Canal Divino – Presencia Abismal", nv:3, d:"Criaturas a 30 pies que fallen SAB quedan Asustadas de ti 1 minuto." },
    { n:"Canal Divino – Maldición del Abismo", nv:3, d:"Maldices a 1 objetivo: pierde 1d4 de cualquier tirada de salvación durante 1 minuto." },
    { n:"Aura Oscura", nv:7, d:"En penumbra u oscuridad, tú y aliados en el Aura ganáis ventaja en ataques cuerpo a cuerpo." },
    { n:"Resistencia Abismal", nv:15, d:"Resistencia al daño necrótico y psíquico; inmune a Asustado." },
    { n:"Señor del Abismo", nv:20, d:"1 minuto: creces a Tamaño Grande, vuelo 60 pies, aura de terror 60 pies, +2d6 necrótico a todos los ataques." },
  ]);

  /* ══════════════════════════════════════════════════════
     PÍCARO — Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Pícaro", "Embaucador Sanguíneo [TDCSR]", [
    { n:"Magia de Sangre", nv:3, d:"Lanzador parcial (INT) con conjuros de sangre y cuerpo: Curar Heridas, Rayo de Enfermedad, Acelerar, Dominar Monstruo..." },
    { n:"Instinto Sanguíneo", nv:3, d:"Cuando atacas a una criatura que sangra (reducida a la mitad de PG o menos), tienes ventaja en el ataque." },
    { n:"Herida Sangrante", nv:9, d:"Cuando aplicas Ataque Furtivo, el objetivo sangra: pierde 1d6 de PG al inicio de cada turno (CON CD = 8 + DEX + comp. para detener)." },
    { n:"Vampiro del Combate", nv:13, d:"Cuando kills a un objetivo con Ataque Furtivo, recuperas PG = SAB." },
    { n:"Maestro de la Sangre", nv:17, d:"Tus conjuros de sangre pueden ignorar resistencias; Herida Sangrante sube a 2d6." },
  ]);

  /* ══════════════════════════════════════════════════════
     BRUJO — Tal'Dorei
  ══════════════════════════════════════════════════════ */
  add("Brujo", "El Vacío [TDCSR]", [
    { n:"Cosmos Oscuro", nv:1, d:"Resistencia al daño frío y psíquico; visión en la oscuridad 60 pies adicionales." },
    { n:"Abrazo del Vacío", nv:1, d:"Gasta 1 espacio de conjuro: creas una burbuja de vacío de 15 pies a 60 pies. Criaturas dentro no pueden ser teletransportadas y sufren 2d6 psíquico/turno." },
    { n:"Alas del Vacío", nv:6, d:"Velocidad de vuelo 40 pies; eres invisible en oscuridad total." },
    { n:"Una con el Vacío", nv:10, d:"Resistencia a todos los daños en el vacío; puedes moverte a través de criaturas y objetos gastando 1 Ki (o espacio de conjuro)." },
    { n:"Maestro del Vacío Cósmico", nv:14, d:"1/descanso largo: por 1 minuto, eres inmune a todos los daños y lanzas Detener Tiempo sin espacio." },
  ]);

  add("Brujo", "El Alma del Tótem [TDCSR]", [
    { n:"Espíritu Ancestral", nv:1, d:"Elige un espíritu animal tótem; ganas el beneficio pasivo de ese espíritu y sus conjuros siempre preparados." },
    { n:"Compañero del Tótem", nv:1, d:"Puedes invocar a tu espíritu tótem como criatura (estadísticas de Bestia CR ≤ nivel/4) 1/descanso largo." },
    { n:"Vínculo del Tótem", nv:6, d:"Compartes los sentidos de tu compañero de tótem invocado; adds SAB a tiradas de Percepción." },
    { n:"Rugido del Espíritu", nv:10, d:"Cuando tu compañero ataca, puedes usar Reacción para hacer que inflija daño adicional = CAR." },
    { n:"Fusión Totémica", nv:14, d:"1/descanso largo: por 1 minuto, te fusionas con el espíritu: ganas sus movimientos especiales, resistencias y ataques." },
  ]);

  /* ══════════════════════════════════════════════════════
     HECHICERO — Eberron
  ══════════════════════════════════════════════════════ */
  add("Hechicero", "Linaje de la Marca [ERftLW]", [
    { n:"Conjuros de la Marca", nv:1, d:"Tu tipo de Marca Dracónica otorga conjuros adicionales siempre preparados (Marca de Detección, Curación, Hospitalidad, etc.)." },
    { n:"Intuición de la Marca", nv:1, d:"Cuando lanzas un conjuro de tu Marca, añades 1d4 a las tiradas de habilidad relacionadas." },
    { n:"Magia de Marca Mejorada", nv:6, d:"Tus conjuros de Marca se lanzan como si tuvieras 1 nivel de espacio más sin gastar uno superior." },
    { n:"Marca Potenciada", nv:14, d:"1 vez/descanso largo puedes lanzar el conjuro máximo de tu Marca sin coste y como si fuera del nivel más alto disponible." },
    { n:"Pulso de la Marca", nv:18, d:"Cuando usas Metamagia, la primera criatura a 30 pies que elijas recupera 1d6 PG." },
  ]);

})();
const DND_DOTES = [
  /* ORIGEN */
  { n:"Alert",                   tipo:"O", d:"No puedes ser sorprendido; +5 a la Iniciativa." },
  { n:"Crafter",                 tipo:"O", d:"Competencia en 3 herramientas artesanas; fabricas objetos más baratos." },
  { n:"Healer",                  tipo:"O", d:"Usas kits de curación para estabilizar y curar PG adicionales." },
  { n:"Lucky",                   tipo:"O", d:"3 puntos de suerte/descanso largo para volver a tirar ataque, habilidad o salvación." },
  { n:"Magic Initiate (Bard)",   tipo:"O", d:"Aprende 2 trucos y 1 conjuro de Nv.1 de Bardo; lanzable 1/descanso largo." },
  { n:"Magic Initiate (Cleric)", tipo:"O", d:"Aprende 2 trucos y 1 conjuro de Nv.1 de Clérigo; lanzable 1/descanso largo." },
  { n:"Magic Initiate (Druid)",  tipo:"O", d:"Aprende 2 trucos y 1 conjuro de Nv.1 de Druida; lanzable 1/descanso largo." },
  { n:"Magic Initiate (Sorcerer)",tipo:"O",d:"Aprende 2 trucos y 1 conjuro de Nv.1 de Hechicero; lanzable 1/descanso largo." },
  { n:"Magic Initiate (Warlock)", tipo:"O",d:"Aprende 2 trucos y 1 conjuro de Nv.1 de Brujo; lanzable 1/descanso largo." },
  { n:"Magic Initiate (Wizard)", tipo:"O", d:"Aprende 2 trucos y 1 conjuro de Nv.1 de Mago; lanzable 1/descanso largo." },
  { n:"Musician",                tipo:"O", d:"Competencia en 3 instrumentos; Inspiración de Bardo 1/descanso largo." },
  { n:"Savage Attacker",         tipo:"O", d:"1/turno, vuelve a tirar los dados de daño de un ataque cuerpo a cuerpo; usa el mejor resultado." },
  { n:"Skilled",                 tipo:"O", d:"Competencia en 3 habilidades o herramientas a tu elección." },
  { n:"Tavern Brawler",          tipo:"O", d:"Utensilios improvisados y puños causan +1d4; ventajas en agarrar." },
  { n:"Tough",                   tipo:"O", d:"+2 PG máximos por nivel (retroactivo)." },

  /* GENERALES */
  { n:"Ability Score Improvement",tipo:"G",d:"+2 a una característica o +1 a dos características." },
  { n:"Actor",                   tipo:"G", d:"+1 CAR; ventaja en Actuación/Engaño al imitar; imitas voces perfectamente." },
  { n:"Athlete",                 tipo:"G", d:"+1 FUE o DEX; trepar/salto cuestan menos movimiento; ponerte en pie es solo 5 pies." },
  { n:"Charger",                 tipo:"G", d:"Tras Cargar, puedes atacar o empujar como Acción Adicional." },
  { n:"Crossbow Expert",         tipo:"G", d:"Ignoras penalización cuerpo a cuerpo con ballestas; ataque adicional como Acción Adicional." },
  { n:"Crusher",                 tipo:"G", d:"+1 FUE o CON; en crítico con daño contundente, mueve al objetivo 5 pies; ventaja al moverlo." },
  { n:"Defensive Duelist",       tipo:"G", d:"Reacción con arma con finura: añade comp. a CA contra un ataque cuerpo a cuerpo." },
  { n:"Dual Wielder",            tipo:"G", d:"+1 CA con dos armas; usa armas a una mano aunque no sean ligeras; sacar dos armas es una sola Acción Adicional." },
  { n:"Dungeon Delver",          tipo:"G", d:"Ventaja en Percepción/Investigación de puertas ocultas; ventaja para evadir trampas; resistencia al daño de trampas." },
  { n:"Durable",                 tipo:"G", d:"+1 CON; en descanso corto recuperas al menos 2× mod CON de PG." },
  { n:"Elemental Adept",         tipo:"G", d:"Ignoras resistencias a un tipo de daño; los 1 en dados de ese daño cuentan como 2." },
  { n:"Fey Touched",             tipo:"G", d:"+1 INT/SAB/CAR; Paso Brumoso 1/descanso largo; 1 conjuro de adivinación/encantamiento Nv.1 1/descanso largo." },
  { n:"Fighting Initiate",       tipo:"G", d:"Aprende 1 Estilo de Combate (requiere competencia en arma marcial)." },
  { n:"Grappler",                tipo:"G", d:"Ventaja en ataques contra criaturas que agarras; puedes sujetarlas por encima de ti." },
  { n:"Great Weapon Master",     tipo:"G", d:"En crítico o al matar, ataque adicional como Acción Adicional; puedes tomar -5 ataque por +10 daño." },
  { n:"Gunner",                  tipo:"G", d:"+1 DEX; competencia en armas de fuego; ignoras penalización cuerpo a cuerpo con armas de fuego." },
  { n:"Heavily Armored",         tipo:"G", d:"+1 FUE; competencia en armadura pesada (requiere media)." },
  { n:"Heavy Armor Master",      tipo:"G", d:"+1 FUE; con armadura pesada, reduce daño no mágico en 3 por ataque." },
  { n:"Inspiring Leader",        tipo:"G", d:"Tras un descanso corto/largo, otorga PG temporales = nivel + CAR a hasta 6 aliados." },
  { n:"Keen Mind",               tipo:"G", d:"+1 INT; siempre sabes el norte, horas desde amanecer/anochecer, y recuerdas con precisión." },
  { n:"Lightly Armored",         tipo:"G", d:"+1 FUE o DEX; competencia en armadura ligera." },
  { n:"Linguist",                tipo:"G", d:"+1 INT; aprende 3 idiomas; puedes crear cifrados que solo tú (y quien enseñes) puedes descifrar." },
  { n:"Lucky (General)",         tipo:"G", d:"Igual que la Dote de Origen, si el DM lo permite como general también." },
  { n:"Mage Slayer",             tipo:"G", d:"Reacción al ser lanzado un conjuro cercano: ataca al lanzador; ventaja en salvaciones contra conjuros de lanzadores adyacentes." },
  { n:"Martial Adept",           tipo:"G", d:"Aprende 2 maniobras de Maestro de Batalla; 1 Dado de Superioridad d6 (sin pila si ya tienes)." },
  { n:"Medium Armor Master",     tipo:"G", d:"Con armadura media, CA máxima por DEX sube a +3; ventaja en Sigilo." },
  { n:"Mobile",                  tipo:"G", d:"+10 pies velocidad; cargar/atacar evita ataques de oportunidad del objetivo ese turno." },
  { n:"Moderately Armored",      tipo:"G", d:"+1 FUE o DEX; competencia en armadura media y escudos." },
  { n:"Mounted Combatant",       tipo:"G", d:"Ventaja en ataques contra criaturas más pequeñas que tu montura; redirige ataques a ti; Evasión para la montura." },
  { n:"Observant",               tipo:"G", d:"+1 INT o SAB; lees labios; +5 a Percepción e Investigación pasivas." },
  { n:"Piercer",                 tipo:"G", d:"+1 FUE o DEX; en crítico con daño perforante, añade 1 dado extra; vuelve a tirar el mínimo 1 vez." },
  { n:"Poisoner",                tipo:"G", d:"Ignoras resistencia al veneno; aplica veneno como Acción Adicional; 50 usos de veneno potente/descanso largo." },
  { n:"Polearm Master",          tipo:"G", d:"Ataque adicional con el extremo del arma (Acción Adicional); ataque de oportunidad cuando criaturas entran en alcance." },
  { n:"Resilient",               tipo:"G", d:"+1 a una estadística; competencia en salvaciones de esa estadística." },
  { n:"Ritual Caster",           tipo:"G", d:"Aprende 2 conjuros rituales de Nv.1; puedes seguir aprendiendo rituales." },
  { n:"Sentinel",                tipo:"G", d:"Al golpear con ataque de oportunidad, objetivo queda a velocidad 0; puedes atacar cuando protegen a alguien de ti." },
  { n:"Shadow Touched",          tipo:"G", d:"+1 INT/SAB/CAR; Invisibilidad 1/descanso largo; 1 conjuro de ilusión/nigromancia Nv.1 1/descanso largo." },
  { n:"Sharpshooter",            tipo:"G", d:"Sin penalización por largo alcance; ignoras media cobertura; puedes tomar -5 ataque por +10 daño." },
  { n:"Shield Master",           tipo:"G", d:"Empujar como Acción Adicional tras atacar; añade escudo a DEX; éxito en DEX = 0 daño." },
  { n:"Skilled",                 tipo:"G", d:"Competencia en 3 habilidades o herramientas." },
  { n:"Skulker",                 tipo:"G", d:"Puedes esconderte en luz tenue; fallar un ataque desde escondite no te revela; Percepción en penumbra sin penalización." },
  { n:"Slasher",                 tipo:"G", d:"+1 FUE o DEX; en crítico con cortante, reduces velocidad del objetivo en 10; impones desventaja en ataques." },
  { n:"Spell Sniper",            tipo:"G", d:"Dobla alcance de conjuros de ataque; ignoras media cobertura; aprende 1 truco de ataque." },
  { n:"Telekinetic",             tipo:"G", d:"+1 INT/SAB/CAR; Mage Hand invisible gratis; empuja 5 pies como Acción Adicional." },
  { n:"Telepathic",              tipo:"G", d:"+1 INT/SAB/CAR; comunicación telepática a 60 pies; Detectar Pensamientos 1/descanso largo." },
  { n:"War Caster",              tipo:"G", d:"Ventaja en CON para mantener concentración; conjuros de oportunidad en lugar de ataques; lanza con manos ocupadas." },
  { n:"Weapon Master",           tipo:"G", d:"+1 FUE o DEX; competencia en 4 armas." },

  /* FIGHTING STYLES */
  { n:"Archery",                 tipo:"F", d:"+2 a tiradas de ataque con armas a distancia." },
  { n:"Blind Fighting",          tipo:"F", d:"Sentido ciego en 10 pies." },
  { n:"Defense",                 tipo:"F", d:"+1 CA con armadura." },
  { n:"Dueling",                 tipo:"F", d:"+2 daño con arma a una mano si la otra está libre." },
  { n:"Great Weapon Fighting",   tipo:"F", d:"Repite 1 y 2 en dados de daño con armas a dos manos." },
  { n:"Interception",            tipo:"F", d:"Reacción: reduce 1d10 + comp. de daño a un aliado cercano." },
  { n:"Protection",              tipo:"F", d:"Reacción con escudo: impone desventaja en ataque contra aliado adyacente." },
  { n:"Thrown Weapon Fighting",  tipo:"F", d:"+2 daño con armas arrojadizas; sacar y lanzar en la misma acción." },
  { n:"Two-Weapon Fighting",     tipo:"F", d:"Añade estadística al daño del segundo ataque con dos armas." },
  { n:"Unarmed Fighting",        tipo:"F", d:"Puñetazos hacen 1d6 (1d8 si la otra mano libre); agarre daña 1d4." },

  /* EPIC BOONS */
  { n:"Boon of Combat Prowess",  tipo:"E", d:"Cuando fallas un ataque, puedes convertirlo en impacto (1/turno)." },
  { n:"Boon of Dimensional Travel",tipo:"E",d:"Paso Brumoso sin componentes como Acción Adicional." },
  { n:"Boon of Energy Resistance",tipo:"E",d:"Resistencia a 2 tipos de daño a tu elección; cambialos en descanso largo." },
  { n:"Boon of Fate",            tipo:"E", d:"2/descanso largo: da ventaja o desventaja en una tirada visible." },
  { n:"Boon of Fortitude",       tipo:"E", d:"+40 PG máximos." },
  { n:"Boon of Irresistible Offense",tipo:"E",d:"Tus ataques y conjuros ignoran resistencias (no inmunidades)." },
  { n:"Boon of Recovery",        tipo:"E", d:"1/descanso largo, cuando caes a 0 PG, permaneces a 1 PG." },
  { n:"Boon of Skill",           tipo:"E", d:"Competencia en todas las habilidades." },
  { n:"Boon of Speed",           tipo:"E", d:"+30 pies de velocidad; el terreno difícil no te ralentiza." },
  { n:"Boon of Spell Recall",    tipo:"E", d:"1/descanso largo: lanza un conjuro de Nv.1-4 sin gastar espacio." },
  { n:"Boon of the Night Spirit",tipo:"E", d:"En oscuridad, eres invisible y puedes fundirte con las sombras." },
  { n:"Boon of Truesight",       tipo:"E", d:"Visión verdadera en 60 pies permanente." },
];

/* ─────────────────────────────────────────────
   ESPECIES (PHB 2024 / SRD)
───────────────────────────────────────────── */
const DND_ESPECIES = {
  "Humano": [
    { n:"Versátil", d:"Competencia en una habilidad a tu elección." },
    { n:"Inspiración Heroica", d:"1/descanso largo: ventaja en ataque, habilidad o salvación (o la das a un aliado)." },
  ],
  "Elfo": [
    { n:"Visión en la Oscuridad", d:"Ves en penumbra a 60 pies como si fuera luz tenue." },
    { n:"Percepción Aguda", d:"Competencia en Percepción." },
    { n:"Herencia Feérica", d:"Ventaja contra ser encantado; no puedes ser inducido al sueño mágicamente." },
    { n:"Trance", d:"No duermes; meditas 4 horas (equivale a descanso largo de 8h). Accedes a recuerdos de vidas pasadas." },
    { n:"Linaje de Elfo", d:"Elige: Alto Elfo (truco de mago), Elfo de Bosque (Paso veloz 35 pies), o Drow (Magia drow)." },
  ],
  "Enano": [
    { n:"Visión en la Oscuridad", d:"60 pies en penumbra." },
    { n:"Resistencia Enana", d:"Ventaja en salvaciones de veneno; resistencia al daño de veneno." },
    { n:"Combate Enano", d:"Competencia en hacha de batalla, hacha de mano, martillo ligero y martillo de guerra." },
    { n:"Competencia en Herramientas", d:"Herramientas de cervecero, albañilería o herrero." },
    { n:"Afinidad con la Piedra", d:"Doble competencia en Historia sobre trabajo en piedra." },
    { n:"Linaje de Enano", d:"Elige: Enano de Colina (+SAB, +1 PG/nivel) o Enano de Montaña (+FUE, armaduras ligeras/medias)." },
  ],
  "Mediano": [
    { n:"Suertudo", d:"Cuando sacas un 1 en ataque, habilidad o salvación, vuelves a tirar." },
    { n:"Valiente", d:"Ventaja en tiradas de miedo." },
    { n:"Agilidad del Mediano", d:"Puedes moverte por el espacio de criaturas de tamaño Grande o mayor." },
    { n:"Linaje de Mediano", d:"Elige: Piesligeros (ocultarse tras criaturas mayores) o Robusto (ventaja contra veneno)." },
  ],
  "Gnomo": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Astucia Gnómica", d:"Ventaja en tiradas de INT, SAB y CAR contra magia." },
    { n:"Linaje de Gnomo", d:"Elige: Gnomo de Bosque (Ilusión menor, habla con animales) o Gnomo de Roca (+INT, gadgets)." },
  ],
  "Semielfo": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Herencia Feérica", d:"Ventaja contra ser encantado; inmune al sueño mágico." },
    { n:"Versatilidad de Habilidades", d:"Competencia en 2 habilidades a tu elección." },
  ],
  "Semiorco": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Amenazante", d:"Competencia en Intimidación." },
    { n:"Resistencia Implacable", d:"1/descanso largo: cuando caes a 0 PG, caes a 1 PG en su lugar." },
    { n:"Ataques Salvajes", d:"En un crítico cuerpo a cuerpo, añade 1 dado adicional de daño." },
  ],
  "Tiefling": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resistencia Infernal", d:"Resistencia al daño de fuego." },
    { n:"Legado Infernal", d:"Taumaturgia (truco). Nv.3: Represalia Infernal. Nv.5: Oscuridad (CAR)." },
  ],
  "Dracónido": [
    { n:"Ancestro Dracónico", d:"Elige tipo de dragón; determina el tipo de daño y otorga el idioma Dracónico." },
    { n:"Arma de Aliento", d:"Línea o cono de daño como Acción (escala con nivel). Salvación DEX o CON." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de daño de tu ancestro." },
  ],
  "Aasimar": [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resistencia Celeste", d:"Resistencia a necrótico y radiante." },
    { n:"Manos Sanadoras", d:"Toca para curar PG = nivel de personaje (1/descanso largo)." },
    { n:"Legado de la Luz", d:"Conoces el truco Luz." },
    { n:"Transformación Celestial", d:"Nv.3+: 1 minuto con alas de vuelo 30 pies y daño adicional radiante/necrótico." },
  ],
  "Goliath": [
    { n:"Resistencia del Gigante de Piedra", d:"Resistencia al daño de frío." },
    { n:"Poderoso", d:"Cuenta como talla Grande para carga." },
    { n:"Resistencia Implacable", d:"1/descanso largo: cuando caes a 0 PG, caes a 1 PG en su lugar." },
    { n:"Conocimiento de las Alturas", d:"Competencia en Atletismo." },
  ],
  "Kenku": [
    { n:"Maestro de Imitaciones", d:"Imitas cualquier sonido; ventaja en Sigilo y Falsificación." },
    { n:"Recuerdo Kenku", d:"Competencia en 2 habilidades a tu elección." },
    { n:"Vuelo", d:"Velocidad de vuelo 30 pies (sin armadura pesada)." },
  ],
  "Tabaxi": [
    { n:"Garras de Felino", d:"Garras: arma natural (1d6 cortante, DEX)." },
    { n:"Caída Felina", d:"Reduce daño de caídas de hasta 50 pies." },
    { n:"Curioso de Gato", d:"1/descanso largo: velocidad dobla y escalar sin coste de movimiento durante 1 turno." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ],
  "Yuan-ti": [
    { n:"Magia Serpentoide", d:"Resistencia e inmunidad al veneno. Sugestión (CAR, 1/descanso largo)." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Sentidos de Serpiente", d:"Ventaja en Percepción basada en olfato." },
  ],
  "Githyanki": [
    { n:"Velocidad Psiónica", d:"Paso Brumoso 1/descanso largo; Saltar (psi) como Acción Adicional." },
    { n:"Resistencia Psiónica", d:"Ventaja en salvaciones de INT, SAB y CAR." },
    { n:"Armas Githyanki", d:"Competencia con espada larga, espada corta y armadura mediana." },
  ],
  "Githzerai": [
    { n:"Defensa Psiónica", d:"+2 CA natural de origen psiónico." },
    { n:"Resistencia Psiónica", d:"Ventaja en salvaciones de INT, SAB y CAR." },
    { n:"Magia Psiónica", d:"Shield, Detect Thoughts (1/descanso largo)." },
  ],
};

/* ─────────────────────────────────────────────
   TRASFONDOS (PHB 2024)
───────────────────────────────────────────── */
const DND_TRASFONDOS = {
  "Acólito":            { comp:["Perspicacia","Religión"],          idiomas:2, equipo:"Símbolo sagrado, libro de oraciones, 5 varitas de incienso, vestimenta, 15 po.", rasgo:"Refugio de los fieles: En templos de tu fe, recibes atención gratuita para ti y tus compañeros." },
  "Charlatán":          { comp:["Engaño","Juego de manos"],         herr:"Kit de disfraz, herramientas de falsificación", equipo:"Kit de disfraz, cartas/dados cargados, prendas de ciudad, 15 po.", rasgo:"Identidad falsa: Tienes una segunda identidad completa con documentación y contactos." },
  "Criminal":           { comp:["Engaño","Sigilo"],                  herr:"Herramientas de ladrón", equipo:"Palanca, ropa oscura con capucha, 15 po.", rasgo:"Contacto criminal: Tienes un contacto fiable en el hampa." },
  "Artista":            { comp:["Acrobacias","Actuación"],          herr:"Instrumento musical", equipo:"Instrumento, favor de admirador, disfraz, 15 po.", rasgo:"Por el amor al arte: Alojamiento gratuito actuando en posadas y tabernas." },
  "Soldado":            { comp:["Atletismo","Intimidación"],        herr:"Vehículos terrestres", equipo:"Insignia de rango, trofeo de batalla, juego de dados, 10 po.", rasgo:"Rango militar: Soldados te reconocen y respetan; acceso a campamentos militares." },
  "Sabio":              { comp:["Arcana","Historia"],               idiomas:2, equipo:"Tinta, pluma, cuchillo, carta de colega, ropa, 10 po.", rasgo:"Investigador: Si no sabes algo, sabes quién puede saberlo." },
  "Forastero":          { comp:["Atletismo","Supervivencia"],       herr:"Instrumento musical", equipo:"Palo, trampa, trofeo animal, ropa de viaje, 10 po.", rasgo:"Viajero del mundo: Excelente memoria geográfica; nunca te pierdes en exterior." },
  "Marino":             { comp:["Atletismo","Percepción"],          herr:"Herramientas de navegante", equipo:"Cuerda 50 pies, amuleto, ropa, 10 po.", rasgo:"Pasaje seguro: Puedes conseguir pasaje gratis para ti y tus compañeros en barcos." },
  "Noble":              { comp:["Historia","Persuasión"],            herr:"Un juego de juego", idiomas:1, equipo:"Ropas finas, anillo de sello, árbol genealógico, 25 po.", rasgo:"Privilegio de posición: La gente asume lo mejor de ti; acceso a alta sociedad." },
  "Ermitaño":           { comp:["Medicina","Religión"],             herr:"Kit de herboristería", idiomas:1, equipo:"Caja de pergaminos, manta, ropa, kit de herboristería, 5 po.", rasgo:"Descubrimiento: Desvelaste una verdad profunda sobre el cosmos o los dioses." },
  "Artesano de Gremio": { comp:["Perspicacia","Persuasión"],        herr:"Herramientas de artesano", idiomas:1, equipo:"Herramientas, carta del gremio, ropa de viajero, 15 po.", rasgo:"Membresía de gremio: Alojamiento y sanación gratuita en ciudades con tu gremio." },
  "Proscrito":          { comp:["Atletismo","Intimidación"],        herr:"Instrumento musical", equipo:"Trofeos, ropa de viaje, 10 po.", rasgo:"Sin dejar rastro: Encuentra refugio, descanso o ayuda en casi cualquier ciudad." },
};

/* Lista de todas las habilidades para los selectores de trasfondo personalizado
   — nombres exactamente como aparecen en los <label> del panel — */
const HABILIDADES_LISTA = [
  "Acrobacias","Atletismo","Interpretación","Arcanos","Engaño","Historia",
  "Intimidación","Investigación","Juego de Manos","Medicina","Naturaleza",
  "Percepción","Perspicacia","Persuasión","Religión","Sigilo","Supervivencia","Trato con Animales"
];

/* Estadísticas para el trasfondo personalizado */
const STATS_LISTA = ["Fuerza","Destreza","Constitución","Inteligencia","Sabiduría","Carisma"];
const STAT_KEY    = { "Fuerza":"str","Destreza":"dex","Constitución":"con","Inteligencia":"int","Sabiduría":"wis","Carisma":"cha" };

/** Busca la fila de habilidad por el texto de su label (más robusto que por clase) */
function _filaHabilidad(panel, nombreHab) {
  if (!nombreHab) return null;
  for (const fila of panel.querySelectorAll('.fila-skill')) {
    const lbl = fila.querySelector('label');
    if (lbl && lbl.textContent.trim().startsWith(nombreHab)) return fila;
  }
  return null;
}

/* ═══════════════════════════════════════════════════════
   RENDERIZADO DE RASGOS (negrita + nivel)
═══════════════════════════════════════════════════════ */

/** Convierte un array de { n, nv, d } en texto con formato:
    [Nv.X] NombreRasgo: descripción */
function rasgosTxt(arr) {
  return arr.map(r => {
    const nv  = r.nv > 0 ? `[Nv.${r.nv}] ` : '';
    return `${nv}${r.n}: ${r.d}`;
  }).join('\n');
}

/** Convierte rasgos de especie { n, d } (sin nivel) */
function especieTxt(arr) {
  return arr.map(r => `${r.n}: ${r.d}`).join('\n');
}

/* ═══════════════════════════════════════════════════════
   LÓGICA DE SELECTORES
═══════════════════════════════════════════════════════ */

const TIPO_ETIQUETA = { G:"General", O:"Origen", E:"Epic Boon", F:"Fighting Style" };

function initCaractSelectores(panel) {
  // Clase
  const selClase = panel.querySelector('.sel-clase');
  if (selClase) {
    Object.keys(DND_CLASES).sort().forEach(nombre => {
      const opt = document.createElement('option');
      opt.value = nombre; opt.textContent = nombre;
      selClase.appendChild(opt);
    });
  }

  // Especie
  const selEspecie = panel.querySelector('.sel-especie');
  if (selEspecie) {
    Object.keys(DND_ESPECIES).sort().forEach(nombre => {
      const opt = document.createElement('option');
      opt.value = nombre; opt.textContent = nombre;
      selEspecie.appendChild(opt);
    });
  }

  // Trasfondo (incluye "Personalizado" al final)
  const selTrasfondo = panel.querySelector('.sel-trasfondo');
  if (selTrasfondo) {
    Object.keys(DND_TRASFONDOS).sort().forEach(nombre => {
      const opt = document.createElement('option');
      opt.value = nombre; opt.textContent = nombre;
      selTrasfondo.appendChild(opt);
    });
    const optCustom = document.createElement('option');
    optCustom.value = '__personalizado__'; optCustom.textContent = '✏ Personalizado';
    selTrasfondo.appendChild(optCustom);
  }

  // Dotes
  const selDote = panel.querySelector('.sel-dote');
  if (selDote) {
    const grupos = { O:"Origen", G:"General", F:"Fighting Style", E:"Epic Boon" };
    Object.entries(grupos).forEach(([tipo, label]) => {
      const optgroup = document.createElement('optgroup');
      optgroup.label = label;
      DND_DOTES.filter(d => d.tipo === tipo).sort((a,b) => a.n.localeCompare(b.n)).forEach(dote => {
        const opt = document.createElement('option');
        opt.value = dote.n;
        opt.textContent = dote.n;
        opt.title = dote.d;
        optgroup.appendChild(opt);
      });
      selDote.appendChild(optgroup);
    });
  }

  // Habilidades en selects de trasfondo personalizado
  const tfHab1 = panel.querySelector('.tf-hab1-sel');
  const tfHab2 = panel.querySelector('.tf-hab2-sel');
  [tfHab1, tfHab2].forEach(sel => {
    if (!sel) return;
    HABILIDADES_LISTA.forEach(h => {
      const opt = document.createElement('option');
      opt.value = h; opt.textContent = h;
      sel.appendChild(opt);
    });
  });

  // Dotes de Origen en el selector del trasfondo personalizado
  const tfDote = panel.querySelector('.tf-dote-sel');
  if (tfDote) {
    DND_DOTES.filter(d => d.tipo === 'O').sort((a,b) => a.n.localeCompare(b.n)).forEach(dote => {
      const opt = document.createElement('option');
      opt.value = dote.n; opt.textContent = dote.n; opt.title = dote.d;
      tfDote.appendChild(opt);
    });
  }
}

/* ── CLASE ── */
function onClaseChange(sel) {
  const panel = getPanel(sel);
  const clase = sel.value;

  const selSub = panel.querySelector('.sel-subclase');
  selSub.innerHTML = '';
  if (!clase || !DND_CLASES[clase]) {
    selSub.innerHTML = '<option value="">— Selecciona primero una clase —</option>';
  } else {
    selSub.innerHTML = '<option value="">— Selecciona una subclase —</option>';
    Object.keys(DND_CLASES[clase].subclases).forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub; opt.textContent = sub;
      selSub.appendChild(opt);
    });
  }

  const ta = panel.querySelector('.caract-clase');
  if (clase && DND_CLASES[clase]) {
    ta.value = `══ ${clase.toUpperCase()} ══\n\n` + rasgosTxt(DND_CLASES[clase].rasgos);
  } else { ta.value = ''; }

  panel.querySelector('.caract-subclase').value = '';
  guardarDebounced();
}

/* ── SUBCLASE ── */
function onSubclaseChange(sel) {
  const panel = getPanel(sel);
  const claseNombre = panel.querySelector('.sel-clase').value;
  const subNombre   = sel.value;
  const ta = panel.querySelector('.caract-subclase');

  if (claseNombre && subNombre && DND_CLASES[claseNombre]?.subclases[subNombre]) {
    const arr = DND_CLASES[claseNombre].subclases[subNombre];
    ta.value = `══ ${subNombre.toUpperCase()} ══\n\n` + rasgosTxt(arr);
  } else { ta.value = ''; }

  guardarDebounced();
}

/* ── ESPECIE ── */
function onEspecieChange(sel) {
  const panel = getPanel(sel);
  const especie = sel.value;
  const ta = panel.querySelector('.caract-especie');

  if (especie && DND_ESPECIES[especie]) {
    ta.value = `══ ${especie.toUpperCase()} ══\n\n` + especieTxt(DND_ESPECIES[especie]);
  } else { ta.value = ''; }

  guardarDebounced();
}

/* ── DOTES ── */
function onDoteAdd(btn) {
  const panel = getPanel(btn);
  const sel   = panel.querySelector('.sel-dote');
  const doteNombre = sel.value;
  if (!doteNombre) return;

  const dote = DND_DOTES.find(d => d.n === doteNombre);
  if (!dote) return;

  const ta = panel.querySelector('.caract-dotes');
  const linea = `[${TIPO_ETIQUETA[dote.tipo]}] ${dote.n}: ${dote.d}`;
  ta.value = ta.value ? ta.value + '\n' + linea : linea;
  sel.value = '';
  guardarDebounced();
}

/* ── TRASFONDO ── */
function onTrasfondoChange(sel) {
  const panel = getPanel(sel);
  const valor = sel.value;
  const ta    = panel.querySelector('.caract-trasfondo-txt');
  const custom = panel.querySelector('.trasfondo-personalizado');

  if (valor === '__personalizado__') {
    ta.value = '';
    if (custom) custom.style.display = '';
  } else {
    if (custom) custom.style.display = 'none';
    if (valor && DND_TRASFONDOS[valor]) {
      const t = DND_TRASFONDOS[valor];
      let txt = `══ ${valor.toUpperCase()} ══\n\n`;
      txt += `Competencias: ${t.comp.join(', ')}\n`;
      if (t.idiomas) txt += `Idiomas: ${t.idiomas} a tu elección\n`;
      if (t.herr)    txt += `Herramientas: ${t.herr}\n`;
      txt += `Equipo: ${t.equipo}\n\nRasgo:\n${t.rasgo}`;
      ta.value = txt;
    } else { ta.value = ''; }
  }
  guardarDebounced();
}

/* ── TRASFONDO PERSONALIZADO – aplicar bonos automáticamente ── */
function aplicarTrasfondoPersonalizado(panel) {
  const wrap = panel.querySelector('.trasfondo-personalizado');
  if (!wrap) return;

  const stat2Key = STAT_KEY[wrap.querySelector('.tf-stat2-sel')?.value];
  const stat1Key = STAT_KEY[wrap.querySelector('.tf-stat1-sel')?.value];
  const prevBonos = wrap.dataset.prevBonos ? JSON.parse(wrap.dataset.prevBonos) : {};

  // ── Bonos de estadísticas ──
  // Revertir anteriores
  if (prevBonos.stat2) {
    const el = panel.querySelector(`.stat-score[data-stat="${prevBonos.stat2}"]`);
    if (el) el.value = Math.max(1, parseInt(el.value) - 2);
  }
  if (prevBonos.stat1 && prevBonos.stat1 !== prevBonos.stat2) {
    const el = panel.querySelector(`.stat-score[data-stat="${prevBonos.stat1}"]`);
    if (el) el.value = Math.max(1, parseInt(el.value) - 1);
  }
  // Aplicar nuevos
  if (stat2Key) {
    const el = panel.querySelector(`.stat-score[data-stat="${stat2Key}"]`);
    if (el) el.value = parseInt(el.value) + 2;
  }
  if (stat1Key && stat1Key !== stat2Key) {
    const el = panel.querySelector(`.stat-score[data-stat="${stat1Key}"]`);
    if (el) el.value = parseInt(el.value) + 1;
  }

  // ── Habilidades ──
  const hab1 = wrap.querySelector('.tf-hab1-sel')?.value;
  const hab2 = wrap.querySelector('.tf-hab2-sel')?.value;

  // Revertir anteriores
  [prevBonos.hab1, prevBonos.hab2].forEach(h => {
    if (!h) return;
    const fila = _filaHabilidad(panel, h);
    if (fila) {
      const dot = fila.querySelector('.dot.prof');
      if (dot && dot.dataset.fromTrasfondo) { dot.checked = false; delete dot.dataset.fromTrasfondo; }
    }
  });
  // Aplicar nuevas
  [hab1, hab2].forEach(h => {
    if (!h) return;
    const fila = _filaHabilidad(panel, h);
    if (fila) {
      const dot = fila.querySelector('.dot.prof');
      if (dot && !dot.checked) { dot.checked = true; dot.dataset.fromTrasfondo = '1'; }
    }
  });

  wrap.dataset.prevBonos = JSON.stringify({ stat2: stat2Key, stat1: stat1Key, hab1, hab2 });
  actualizarTodoPanel(panel);
  guardarDebounced();
}

/* ── LIMPIAR ── */
function limpiarCaract(btn, tipo) {
  const panel = getPanel(btn);
  if (tipo === 'clase') {
    panel.querySelector('.sel-clase').value = '';
    panel.querySelector('.sel-subclase').innerHTML = '<option value="">— Selecciona primero una clase —</option>';
    panel.querySelector('.caract-clase').value   = '';
    panel.querySelector('.caract-subclase').value = '';
  } else if (tipo === 'subclase') {
    panel.querySelector('.sel-subclase').value    = '';
    panel.querySelector('.caract-subclase').value = '';
  } else if (tipo === 'especie') {
    panel.querySelector('.sel-especie').value     = '';
    panel.querySelector('.caract-especie').value  = '';
  } else if (tipo === 'dotes') {
    panel.querySelector('.sel-dote').value        = '';
    panel.querySelector('.caract-dotes').value    = '';
  } else if (tipo === 'trasfondo') {
    panel.querySelector('.sel-trasfondo').value   = '';
    panel.querySelector('.caract-trasfondo-txt').value = '';
    const c = panel.querySelector('.trasfondo-personalizado');
    if (c) c.style.display = 'none';
  }
  guardarDebounced();
}

/* ── DOTE DE ORIGEN desde Trasfondo Personalizado ── */
function onDoteOrigenAdd(btn) {
  const panel = getPanel(btn);
  const sel   = panel.querySelector('.tf-dote-sel');
  const doteNombre = sel.value;
  if (!doteNombre) return;

  const dote = DND_DOTES.find(d => d.n === doteNombre && d.tipo === 'O');
  if (!dote) return;

  // Añadir a la textarea de Dotes igual que onDoteAdd
  const ta = panel.querySelector('.caract-dotes');
  const linea = `[Origen] ${dote.n}: ${dote.d}`;
  ta.value = ta.value ? ta.value + '\n' + linea : linea;

  sel.value = '';
  guardarDebounced();
}

/* ── RECURSOS: toggle botón C / L ── */
function toggleRecargaRecurso(btn) {
  const tipo = btn.dataset.tipo; // 'corto' o 'largo'
  const cls  = tipo === 'corto' ? 'activo-corto' : 'activo-largo';
  btn.classList.toggle(cls);
  guardarDebounced();
}

/* ── RECURSOS: recargar al descanso ── */
function recargaRecursosPorDescanso(panel, tipoDescanso) {
  panel.querySelectorAll('.recurso-caja').forEach(caja => {
    const btnCorto = caja.querySelector('.recurso-recarga-btn[data-tipo="corto"]');
    const btnLargo = caja.querySelector('.recurso-recarga-btn[data-tipo="largo"]');
    const recargaCorto = btnCorto?.classList.contains('activo-corto');
    const recargaLargo = btnLargo?.classList.contains('activo-largo');

    const debeRecargar =
      (tipoDescanso === 'corto' && recargaCorto) ||
      (tipoDescanso === 'largo' && (recargaLargo || recargaCorto)); // largo recarga todo

    if (debeRecargar) {
      const max = parseInt(caja.querySelector('.recurso-max').value) || 0;
      caja.querySelector('.recurso-actual').value = max;
    }
  });
}

/* ═══════════════════════════════════════════════════════
   ENTREGA 4: BLOOD HUNTER (Homebrew — Matt Mercer 2022)
   + ESPECIES AMPLIADAS
   + DOTES ADICIONALES
   Añadir al final de caracteristicas.js
═══════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════
   BLOOD HUNTER (Matt Mercer, versión 2022)
   Clase homebrew. Requiere permiso del DM.
   Fuente: D&D Beyond / Critical Role (2022 errata)
══════════════════════════════════════════════════════ */
DND_CLASES["Blood Hunter"] = {
  rasgos: [
    { n:"Hunter's Bane", nv:1, d:"Sobrevives el rito alquímico que te une a la oscuridad. Ventaja en Supervivencia para rastrear Feéricos, Fiendos y No-muertos, y en tiradas de INT sobre ellos. CD de Hemocraft = 8 + competencia + modificador de INT (o SAB con permiso del DM)." },
    { n:"Blood Maledict", nv:1, d:"Conoces 1 Maldición de Sangre. Usos = 1/descanso corto o largo (→2 en Nv.6, →3 en Nv.13, →4 en Nv.17). Para amplificar una maldición sufres daño = tu dado de Hemocraft. Nuevas maldiciones en Nv.6, 10, 14 y 18." },
    { n:"Estilo de Combate", nv:2, d:"Elige: Arquería (+2 ataques a distancia), Duelo (+2 daño a una mano libre), Arma Grande (repite 1-2 en dados de daño), Dos Armas (añade estadística al segundo ataque) o Defensa (+1 CA con armadura)." },
    { n:"Crimson Rite", nv:2, d:"Acción Adicional: activas un rito en tu arma, sufriendo daño = tu dado de Hemocraft. El arma inflige daño adicional del tipo del rito en cada golpe. Dado de Hemocraft: d6 (→d8 Nv.5, →d10 Nv.11, →d12 Nv.17). Ritos Primarios (desde Nv.2): Llama (fuego), Congelado (frío), Tormenta (rayo). Ritos Esotéricos (desde Nv.14): Muerto (necrótico), Oráculo (psíquico), Rugido (trueno)." },
    { n:"Orden de Cazadores de Sangre", nv:3, d:"Elige tu subclase (Orden). Rasgos en Nv.3, 7, 11, 15 y 18." },
    { n:"Mejora de Característica", nv:4, d:"+2 a una estadística o +1 a dos. También en Nv.8, 12, 16, 19." },
    { n:"Ataque Extra", nv:5, d:"Dos ataques con la acción de Atacar." },
    { n:"Brand of Castigation", nv:6, d:"Al golpear a una criatura con Crimson Rite activo, la marcas. La marca revela su ubicación (mismo plano) y la hace sufrir daño psíquico = tu modificador de Hemocraft cada vez que te dañe a ti. Dura hasta que muera o descansen." },
    { n:"Grim Psychometry", nv:9, d:"10 minutos de meditación sobre un objeto: tirada de Perspicacia con ventaja para revelar su historia violenta o maligna. El DM decide qué visiones obtienes." },
    { n:"Dark Augmentation", nv:10, d:"Tu sangre corrompida te endurece. +1 a todas las salvaciones. Tu velocidad aumenta en 5 pies. Puedes escalar a tu velocidad normal." },
    { n:"Brand of Tethering", nv:13, d:"Brand of Castigation mejora: el daño psíquico sube a 2× tu modificador de Hemocraft. La criatura marcada no puede usar Carrera, y si intenta teletransportarse o cambiar de plano sufre 4d6 de daño psíquico y debe superar una tirada de SAB o el intento falla." },
    { n:"Hardened Soul", nv:14, d:"Ventaja en tiradas de salvación contra ser encantado o asustado." },
    { n:"Sanguine Mastery", nv:20, d:"Una vez por turno, cuando uses un dado de Hemocraft, puedes elegir volver a tirar y usar el resultado que prefieras. Además, en cada crítico con Crimson Rite activo, recuperas 1 uso gastado de Blood Maledict." },
  ],
  subclases: {
    "Order of the Ghostslayer [2022]": [
      { n:"Rite of the Dawn", nv:3, d:"Aprendes el Rite of the Dawn: tu daño de rito es radiante. Con él activo: el arma emite luz brillante 20 pies, tienes resistencia al daño necrótico, puedes afectar a criaturas incorporales y del Plano Etéreo, y contra no-muertos tiras 1 dado de Hemocraft adicional de daño." },
      { n:"Curse Specialist", nv:3, d:"Ganas 1 uso adicional de Blood Maledict. Tus maldiciones de sangre pueden afectar a cualquier criatura, tenga sangre o no." },
      { n:"Ethereal Step", nv:7, d:"Al inicio de tu turno puedes entrar en el Plano Etéreo. Permaneces en él hasta el inicio de tu siguiente turno, pudiéndote mover a través de objetos y criaturas. Tomas 1d10 de daño de fuerza si terminas tu turno dentro de un objeto sólido." },
      { n:"Brand Exposure", nv:11, d:"Tu Brand of Castigation expone la esencia del objetivo: las criaturas marcadas reciben 1 dado de Hemocraft adicional de daño de Crimson Rite en cada golpe. Además, una criatura marcada no puede moverse a través de objetos ni usar Carrera." },
      { n:"Exorcism of Spirits", nv:15, d:"Ganas la maldición Blood Curse of the Exorcist sin que cuente contra tus maldiciones conocidas. (Acción Adicional: elimina encantamiento/miedo/posesión de 1 criatura visible a 30 pies. Amplificar: el causante sufre 3d6 radiante y queda paralizado si falla SAB.)" },
      { n:"Rite Absorption", nv:18, d:"Cuando caes a 0 PG con un Crimson Rite activo pero no mueres, el rito termina y caes a 1 PG en su lugar. Si tienes varios ritos activos, eliges cuál termina." },
    ],
    "Order of the Lycan [2022]": [
      { n:"Hybrid Transformation", nv:3, d:"Acción Adicional: te transformas en Forma Híbrida por 1 minuto (1/descanso corto o largo). En forma híbrida: ataques de garra (1d6+FUE cortante, tus manos); si te queda ≤50% PG al inicio de tu turno haces tirada de SAB CD 8 o atacas al aliado más cercano (puedes gastar Blood Maledict para imponer desventaja). Garras cuentan como armas de monje." },
      { n:"Predatory Strikes", nv:3, d:"En Forma Híbrida, tus garras obtienen +1 a las tiradas de ataque (→+2 en Nv.11, →+3 en Nv.18). Cuando activas Crimson Rite en tus garras en Forma Híbrida, tus ataques desarmados cuentan como mágicos." },
      { n:"Stalker's Prowess", nv:7, d:"Tu velocidad aumenta en 10 pies. En Forma Híbrida tu talla sube a Grande si hay espacio; si no, permaneces Mediano. Los ataques con garras tienen alcance 10 pies." },
      { n:"Advanced Transformation", nv:11, d:"Puedes usar Hybrid Transformation 2 veces entre descansos. En Forma Híbrida ganas Lycan Regeneration: al inicio de tu turno, si tienes al menos 1 PG pero menos de la mitad de tu máximo, recuperas 1 + CON PG (mínimo 1)." },
      { n:"Brand of the Voracious", nv:15, d:"Ventaja en la tirada de SAB para evitar el ataque de Bloodlust contra aliados. Además, en Forma Híbrida tienes ventaja en ataques contra criaturas que hayas marcado con Brand of Castigation." },
      { n:"Hybrid Overwhelm", nv:18, d:"Puedes usar Hybrid Transformation de forma ilimitada y la forma puede durar indefinidamente. Ganas la maldición Blood Curse of the Howl sin que cuente contra tus maldiciones conocidas. (Acción: criaturas a 30 pies que te oigan hacen SAB o quedan Asustadas hasta el final de su turno. Si fallan por 5+, quedan Aturdidas.)" },
    ],
    "Order of the Mutant [2022]": [
      { n:"Mutagencraft", nv:3, d:"Aprendes 4 fórmulas de mutágeno. Puedes preparar 1 mutágeno al finalizar un descanso corto o largo (→ más según nivel). Al consumirlo como Acción Adicional, su efecto dura 1 hora. Cada mutágeno tiene un efecto positivo y un efecto secundario negativo." },
      { n:"Strange Metabolism", nv:7, d:"Inmunidad al daño de veneno y a la condición Envenenado. Como Acción Adicional, puedes ignorar el efecto secundario de 1 mutágeno activo durante 1 minuto." },
      { n:"Brand of Axiom", nv:11, d:"Las criaturas marcadas por Brand of Castigation no pueden beneficiarse de invisibilidad ni de resistencias a daño mágico. Los mutágenos activos en ti se consideran mágicos." },
      { n:"Blood Curse of Corrosion", nv:15, d:"Ganas la maldición Blood Curse of Corrosion sin que cuente contra tus maldiciones conocidas. (Acción Adicional: el objetivo sufre 1d8 de veneno por turno durante 1 min; CON al final de cada turno para resistir. Amplificar: también queda Envenenado.)" },
      { n:"Exaltation of the Mutant", nv:18, d:"Como Acción Adicional, puedes terminar 1 mutágeno activo e iniciar inmediatamente otro de los que conoces. Usos = mod INT (mínimo 1)/descanso largo." },
    ],
    "Order of the Profane Soul [2022]": [
      { n:"Conjuración del Pacto", nv:3, d:"Lanzador tipo Brujo (CAR, espacios recuperados en descanso corto o largo). Lista de Brujo. Elige patrón: Archfey, Celestial, Fathomless, Fiend, Genio, Gran Antiguo, Hexblade, No-muerto o Sin Muerte. Tu arma con Crimson Rite activo actúa como foco de conjuración y puede infligir daño de fuerza como rito." },
      { n:"Patron's Blessing", nv:3, d:"Beneficio pasivo según tu patrón (ej. Archfey: la criatura golpeada no puede beneficiarse de cobertura ni invisibilidad hasta el final de tu siguiente turno; Fiend: cuando reduces a 0 PG a una criatura, ganas PG temporales = CAR; Gran Antiguo: cuando golpeas, el objetivo no puede usar reacciones hasta su siguiente turno; etc.)." },
      { n:"Unsealed Arcana", nv:7, d:"Puedes lanzar 1 conjuro de Brujo de Nv.1-2 usando un espacio de conjuro sin gastar tu acción de ataque en esa misma acción." },
      { n:"Brand Vulnerability", nv:11, d:"Las criaturas marcadas por Brand of Castigation tienen desventaja en tiradas de salvación contra tus conjuros de Brujo." },
      { n:"Patron's Dominion", nv:15, d:"1 conjuro adicional de mayor nivel según tu patrón, lanzable sin espacio 1/descanso largo (ej. Archfey: Ralentizar; Celestial: Revivir; Fathomless: Rayo; Fiend: Bola de Fuego; Gran Antiguo: Acelerar; Hexblade: Parpadeo; No-muerto: Hablar con Muertos; Genio: Protección Elemental; etc.)." },
      { n:"Blood Curse of the Souleater", nv:18, d:"Ganas la maldición Blood Curse of the Souleater sin que cuente contra tus maldiciones conocidas. (Acción Adicional: al matar a una criatura de CR 5+, puedes devorar su alma. Hasta el final de tu siguiente turno, tienes ventaja en ataques y añades 2d6 de necrótico a los impactos. Amplificar: también recuperas 1 espacio de conjuro de Brujo gastado.)" },
    ],
  }
};

/* ══════════════════════════════════════════════════════
   AMPLIACIÓN DE ESPECIES
   Fuentes: Mordenkainen's / Monsters of the Multiverse,
   Volo's Guide, Ravnica, Theros, Strixhaven, Spelljammer,
   Fizban's Treasury of Dragons, etc.
══════════════════════════════════════════════════════ */
(function() {
  const addEspecie = (nombre, rasgos) => {
    if (!DND_ESPECIES[nombre]) DND_ESPECIES[nombre] = rasgos;
  };

  /* ── Mordenkainen / Monsters of the Multiverse ── */
  addEspecie("Orco", [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Agressivo", d:"Como Acción Adicional, te mueves hasta tu velocidad hacia una criatura hostil visible." },
    { n:"Resistencia Implacable", d:"1/descanso largo: cuando caes a 0 PG, caes a 1 PG en su lugar." },
    { n:"Poderoso", d:"Cuentas como talla Grande para empujar, agarrar o cargar." },
  ]);

  addEspecie("Firbolg", [
    { n:"Magia Firbolg", d:"Detectar Magia y Disfrazarse (versión feérica que borra tu rastro olfativo) sin espacio 1/descanso corto cada uno. SAB o INT como estadística de conjuro." },
    { n:"Voz de la Jungla", d:"Hablas con bestias y plantas (Hablar con Animales y Hablar con Plantas sin espacio, 1/descanso largo cada uno)." },
    { n:"Paso Oculto", d:"Como Acción Adicional, te vuelves invisible hasta el inicio de tu siguiente turno (1/descanso corto)." },
    { n:"Talla Poderosa", d:"Cuentas como talla Grande para carga y empuje." },
  ]);

  addEspecie("Genasi (Aire)", [
    { n:"Vuelo Innato", d:"Velocidad de vuelo = tu velocidad (sin armadura pesada)." },
    { n:"Magia del Viento", d:"Levitación sin espacio 1/descanso largo. Ráfaga de Viento a nivel 3+." },
    { n:"Infatigable", d:"No necesitas respirar ni dormir (meditas). No puedes ser sofocado." },
  ]);

  addEspecie("Genasi (Agua)", [
    { n:"Anfibia", d:"Puedes respirar aire y agua." },
    { n:"Velocidad de Natación", d:"Velocidad de natación = tu velocidad." },
    { n:"Magia del Agua", d:"Forma de Agua sin espacio 1/descanso largo. Crear o Destruir Agua desde Nv.3." },
    { n:"Resistencia al Ácido", d:"Resistencia al daño de ácido." },
  ]);

  addEspecie("Genasi (Tierra)", [
    { n:"Velocidad de Excavación", d:"Velocidad de excavación 30 pies en tierra no rocosa." },
    { n:"Magia de la Tierra", d:"Pasar sin Rastro sin espacio 1/descanso largo. Moldear Tierra a voluntad." },
    { n:"Resistencia al Veneno", d:"Resistencia al daño de veneno; ventaja en salvaciones de CON contra veneno." },
  ]);

  addEspecie("Genasi (Fuego)", [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Resistencia al Fuego", d:"Resistencia al daño de fuego." },
    { n:"Magia del Fuego", d:"Produce Llama a voluntad. Quemar desde Nv.3. Bola de Fuego desde Nv.5 (1/descanso largo)." },
  ]);

  addEspecie("Tritón", [
    { n:"Anfibio", d:"Puedes respirar aire y agua; velocidad de natación 30 pies." },
    { n:"Control sobre Aguas", d:"Crear o Destruir Agua a voluntad. Lanzas Control del Tiempo (acuático) sin espacio 1/descanso largo." },
    { n:"Embajador del Mar", d:"Hablas con bestias acuáticas y puedes comunicarte con criaturas del mar telepáticamente." },
    { n:"Resistencia al Frío", d:"Resistencia al daño de frío." },
  ]);

  addEspecie("Torttle", [
    { n:"Caparazón Natural", d:"CA natural = 17 (no se suma DEX). No puedes llevar armadura, pero puedes usar un escudo." },
    { n:"Sostenerse", d:"Acción: te retiras al caparazón. Ganas +4 CA y ventaja en FUE y CON, pero velocidad 0 y desventaja en DEX hasta salir (Acción Adicional)." },
    { n:"Garras", d:"Garras como arma natural: 1d6 cortante." },
    { n:"Aguantar la Respiración", d:"Aguantas la respiración hasta 1 hora." },
  ]);

  addEspecie("Hobgoblin", [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Disciplina Marcial", d:"Cuando falles una tirada de ataque, puedes añadir +2d4 al resultado (1/turno; 1/descanso corto o largo)." },
    { n:"Formación de Guardia", d:"Mientras no estás incapacitado, puedes dar a un aliado adyacente +1 CA como Reacción al ser atacado." },
    { n:"Ahorro de Vida", d:"Cuando caes a 0 PG y no mueres, puedes caer a 1 PG (1/descanso largo)." },
  ]);

  addEspecie("Bugbear", [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Emboscada Brutal", d:"En el primer turno de combate, añades 2d6 de daño extra a un ataque si tienes ventaja o si hay un aliado adyacente al objetivo." },
    { n:"Brazos Largos", d:"Tu alcance en ataques cuerpo a cuerpo es de 10 pies en lugar de 5." },
    { n:"Sigilo Furtivo", d:"Competencia en Sigilo; cuando reduces la velocidad a 0 con Sigilo, no gastas movimiento adicional." },
  ]);

  addEspecie("Kobold", [
    { n:"Astucia de Dracónido", d:"Como Acción Adicional, das ventaja al siguiente ataque de un aliado contra una criatura a 5 pies de ti. Usable INT/descanso largo." },
    { n:"Legado Dracónico", d:"Resistencia al daño de tu tipo de dragón elegido (idéntico al Dracónido)." },
    { n:"Pack Tactics (Tácticas de Manada)", d:"Ventaja en ataques contra criaturas si hay un aliado a 5 pies del objetivo que no esté incapacitado." },
    { n:"Sensible a la Luz Solar", d:"Desventaja en ataques y Percepción basada en vista con luz solar directa." },
  ]);

  addEspecie("Goblin", [
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Huida Ágil", d:"Como Acción Adicional, puedes Desengancharte o Esconderte." },
    { n:"Corazón de Furor", d:"Eres Pequeño, pero puedes empuñar armas a una mano aunque sean de tamaño Mediano sin penalización." },
    { n:"Furious Assault", d:"1/turno: cuando golpeas con un ataque, inflige 1d6 adicional de daño del mismo tipo." },
  ]);

  addEspecie("Aarakocra", [
    { n:"Vuelo", d:"Velocidad de vuelo 50 pies. No puedes llevar armadura pesada." },
    { n:"Garras", d:"Garras: 1d4 cortante. Puedes agarrar en picado (doble daño si caes ≥10 pies antes de golpear)." },
    { n:"Orientación Estelar", d:"Nunca te pierdes a cielo abierto; competencia en Supervivencia." },
  ]);

  addEspecie("Centauro", [
    { n:"Carga", d:"Si te mueves ≥30 pies en línea recta hacia un objetivo y lo golpeas cuerpo a cuerpo, inflige 1d6 extra de perforante." },
    { n:"Cascos", d:"Pezuñas: ataque natural (1d6 contundente)." },
    { n:"Ecuestre Natural", d:"Cuentas como tu propia montura para todos los efectos de montar. No puedes ser montado." },
    { n:"Talla Grande", d:"Eres de tamaño Grande." },
  ]);

  addEspecie("Minotauro", [
    { n:"Cuernos", d:"Cuernos: ataque natural (1d6 perforante). Si te mueves ≥10 pies en línea recta, inflige 1d8 adicional." },
    { n:"Memoria Laberíntica", d:"Ventaja en tiradas de Historia para recordar caminos o mapas." },
    { n:"Embiste", d:"Cuando cargas y golpeas, puedes empujar al objetivo 10 pies (FUE para resistir)." },
    { n:"Constitución Poderosa", d:"+1 a todas las tiradas de salvación de CON." },
  ]);

  addEspecie("Leonin", [
    { n:"Garras", d:"Garras: ataque natural (1d4 cortante + DEX/FUE)." },
    { n:"Rugido Intimidatorio", d:"Como Acción Adicional, rugues. Criaturas a 10 pies hacen tirada de SAB o quedan Asustadas hasta el final de tu siguiente turno (1/descanso corto)." },
    { n:"Sentidos Felinos", d:"Competencia en Percepción; olfato ventajoso (ventaja en Percepción basada en olfato)." },
    { n:"Velocidad del Felino", d:"+5 pies de velocidad." },
  ]);

  addEspecie("Satiro", [
    { n:"Magia Feérica", d:"Amigo (truco). Encantar Persona desde Nv.3. Disipar Magia desde Nv.5 (1/descanso largo)." },
    { n:"Mente Mágica", d:"Ventaja en tiradas de salvación contra encantamiento y magia de ilusión." },
    { n:"Pausa y Ritmo", d:"Competencia en Actuación y en 1 instrumento musical." },
    { n:"Cuernos de Carnero", d:"Cabezazo: 1d4 contundente + FUE. En carga (≥10 pies), el objetivo debe superar FUE o queda derribado." },
  ]);

  addEspecie("Vedalken", [
    { n:"Incansable Precisión", d:"Competencia en 2 habilidades o herramientas de INT. Cuando fallas una tirada de habilidad de INT, puedes añadir 1d4 (1/descanso largo)." },
    { n:"Compostura Parcial", d:"Ventaja en tiradas de salvación de INT, SAB y CAR." },
    { n:"Anfibio Limitado", d:"Puedes aguantar la respiración bajo el agua hasta 1 hora." },
  ]);

  addEspecie("Loxodon", [
    { n:"Trompa", d:"Trompa con alcance 5 pies para agarrar (tirada de FUE opuesta). Puede llevar objetos Pequeños." },
    { n:"Piel Natural", d:"CA natural = 12 + modificador CON (sin armadura)." },
    { n:"Poder Elefantino", d:"Ventaja en FUE para empujar, derribar o cargar. Cuenta como talla Grande para carga." },
    { n:"Olfato Agudo", d:"Ventaja en Percepción basada en olfato." },
  ]);

  addEspecie("Simic Hybrid", [
    { n:"Adaptación Animal", d:"A Nv.1 elige 2 de los siguientes rasgos de criatura marina o terrestre: Caparazón Blindado (+1 CA), Garra/Mordisco (1d6), Velocidad de Natación (30 pies), Aletas o Tenáculos (Agarrar hasta 10 pies, alcance), o Visión en la Oscuridad (60 pies)." },
    { n:"Adaptación Avanzada", d:"A Nv.5 ganas 1 rasgo adicional de la lista de Adaptación Animal (incluyendo vuelo 30 pies si no se tenía)." },
  ]);

  addEspecie("Hadozee", [
    { n:"Planeo", d:"Si caes y no estás incapacitado, despliega membranas: caes máximo 60 pies/ronda y puedes moverte horizontalmente hasta 5 pies por cada 1 pie de descenso." },
    { n:"Trepa Rápida", d:"Velocidad de escalada = tu velocidad." },
    { n:"Golpe de Cola", d:"Cola: ataque natural (1d4 contundente). Puedes usarla para hacer agarres." },
  ]);

  addEspecie("Astral Elf", [
    { n:"Trance Astral", d:"No duermes; meditas 4 horas. Al finalizar el trance, ganas competencia en 1 arma, herramienta o habilidad de tu elección hasta el próximo trance." },
    { n:"Legado Estrellado", d:"Conoces 1 truco de la lista de Mago, Clérigo o Druida (INT, SAB o CAR). Puedes lanzar Luz de las Hadas sin espacio 1/descanso largo." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
    { n:"Herencia Feérica", d:"Ventaja contra ser encantado; inmune al sueño mágico." },
  ]);

  addEspecie("Autognome", [
    { n:"Armadura Integrada", d:"CA natural = 13 + modificador DEX. No puedes llevar armadura, pero puedes usar un escudo." },
    { n:"Reparaciones Integradas", d:"Al gastar Dados de Golpe en descanso corto, recuperas el máximo posible. Vuelta a la Vida: si caes a 0 PG y no mueres, puedes gastar un Dado de Golpe para caer a 1 PG (1/descanso largo)." },
    { n:"Herramientas Integradas", d:"Competencia en herramientas de artesano de tu elección; llevas las herramientas incorporadas." },
    { n:"Cuerpo Mecánico", d:"Inmune al veneno y a la condición Envenenado. No necesitas comer, beber ni respirar." },
  ]);

  addEspecie("Thri-kreen", [
    { n:"Camuflaje", d:"Puedes cambiar el color de tu caparazón para fundirte con el entorno: ventaja en Sigilo." },
    { n:"Brazos Secundarios", d:"Tienes 2 brazos adicionales más pequeños. Puedes sostener 2 objetos adicionales (pero no armas). Puedes usar Acción Adicional para atacar con las manos secundarias (sin armas, 1d4 contundente)." },
    { n:"Visión en la Oscuridad", d:"60 pies (sensibilidad al movimiento por antenas)." },
    { n:"Salto Poderoso", d:"+5 pies al salto de longitud y altura; sin necesidad de carrerilla." },
  ]);

  addEspecie("Dhampir", [
    { n:"Escalada del Depredador", d:"Velocidad de escalada = tu velocidad." },
    { n:"Mordisco del Vampiro", d:"Mordisco: ataque natural (1d4 perforante + necrotic = SAB o CON, a tu elección). Al morder a una criatura viva, recuperas PG = daño necrótico infligido (1/descanso corto o largo)." },
    { n:"Hambre del No-muerto", d:"Ventaja en Percepción y Supervivencia para rastrear criaturas vivas." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ]);

  addEspecie("Hexblood", [
    { n:"Magia de la Bruja", d:"Amigo (truco). Disfrazarse y Cantrip Ilusión/Encantamiento (INT/SAB/CAR) sin espacio 1/descanso largo." },
    { n:"Mensajero Espeluznante", d:"1/descanso largo: arrancas y lanzas uno de tus ojos o orejas. Permanece activo hasta 24h; ves/oyes a través de él. Lo recuperas durmiendo." },
    { n:"Marca de Malestar", d:"Como Acción Adicional, marcas a 1 criatura visible. Cuando alguien lanza contra ella un conjuro de encantamiento o ilusión, puede volver a tirar el dado de la salvación (1/descanso largo)." },
  ]);

  addEspecie("Reborn", [
    { n:"No Muerto Tranquilo", d:"Tienes ventaja en tiradas de salvación contra enfermedad y veneno; resistencia al veneno. No necesitas comer, beber ni respirar." },
    { n:"Conocimiento Fragmentado", d:"Ventaja en 1 habilidad de INT de tu elección. 1/descanso largo: puedes recordar vagamente algo de tu vida pasada (tirada INT). El DM decide qué recuerdas." },
    { n:"Desvanecer la Muerte", d:"1/descanso largo: cuando caes a 0 PG y no mueres, caes a 1 PG en su lugar." },
    { n:"Visión de Velo", d:"Visión en la oscuridad 60 pies (tus ojos pueden percibir el velo entre los planos)." },
  ]);

  addEspecie("Shadar-kai (Elfo de las Sombras)", [
    { n:"Visión en la Oscuridad", d:"60 pies (o 120 pies en versión Mordenkainen)." },
    { n:"Herencia Feérica", d:"Ventaja contra ser encantado; inmune al sueño mágico." },
    { n:"Trance", d:"Meditas 4 horas (equivale a descanso largo)." },
    { n:"Paso del Plano Sombrío", d:"Como Acción Adicional, te teletransportas hasta 30 pies a un espacio desocupado que puedas ver. Si tu destino está en penumbra u oscuridad, ganas resistencia a todos los daños hasta el inicio de tu siguiente turno (1/descanso largo)." },
  ]);

  addEspecie("Sea Elf (Elfo del Mar)", [
    { n:"Herencia Feérica", d:"Ventaja contra ser encantado; inmune al sueño mágico." },
    { n:"Trance", d:"Meditas 4 horas (equivale a descanso largo)." },
    { n:"Hijo del Mar", d:"Puedes respirar aire y agua; velocidad de natación 30 pies." },
    { n:"Amigo del Mar", d:"Puedes comunicarte con bestias acuáticas de INT 3 o inferior." },
    { n:"Entrenamiento Marino", d:"Competencia con lanza, tridente, arco corto y red." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ]);

  addEspecie("Eladrin", [
    { n:"Herencia Feérica", d:"Ventaja contra ser encantado; inmune al sueño mágico." },
    { n:"Trance", d:"Meditas 4 horas. Cambias de estación durante el trance." },
    { n:"Paso Feérico", d:"Como Acción Adicional, te teletransportas hasta 30 pies a un espacio desocupado visible. Efecto de estación al llegar: Otoño (SAB o Encantado), Invierno (SAB o Asustado), Primavera (empuja 5 pies), Verano (1d6 de fuego). 1/descanso corto." },
    { n:"Visión en la Oscuridad", d:"60 pies." },
  ]);

  addEspecie("Duergar", [
    { n:"Visión en la Oscuridad", d:"120 pies." },
    { n:"Resistencia Enana", d:"Ventaja en salvaciones de veneno; resistencia al daño de veneno." },
    { n:"Resiliencia Duergar", d:"Ventaja en tiradas de salvación contra ilusiones y hechizos que paralicen o encantan." },
    { n:"Invisibilidad Duergar", d:"Como Acción, te vuelves invisible hasta atacar, lanzar un conjuro o terminar la concentración (1/descanso largo)." },
    { n:"Agrandar Duergar", d:"Como Acción, te agrandas a talla Grande (o a talla original → ropa y equipo también): ventaja en FUE, +1d4 daño (1/descanso largo)." },
    { n:"Sensibilidad Solar", d:"Desventaja en ataques y Percepción visual con luz solar directa." },
  ]);

  addEspecie("Deep Gnome (Gnomo Profundo)", [
    { n:"Visión en la Oscuridad", d:"120 pies." },
    { n:"Don de los Gnomos de la Roca", d:"Ventaja en tiradas de INT, SAB y CAR contra magia." },
    { n:"Camuflaje de Piedra", d:"Ventaja en Sigilo en terreno rocoso o subterráneo." },
    { n:"Magia Gnómica Profunda", d:"Conoces el truco Ilusión Menor. Pasar Sin Rastro sin espacio 1/descanso largo." },
  ]);

  addEspecie("Verdan", [
    { n:"Oscuridad Mental", d:"Ventaja en tiradas de salvación contra ser encantado o asustado." },
    { n:"Crecimiento Imparable", d:"Cuando alcanzas el Nv.5 de personaje, tu talla cambia de Pequeño a Mediano." },
    { n:"Don Psiónico", d:"Como Acción Adicional, conoces la mayor emoción que siente una criatura a 10 pies (no requiere salvación)." },
    { n:"Hablar con Pequeñas Bestias", d:"Puedes comunicarte de forma básica con bestias de INT 3 o inferior." },
  ]);

  addEspecie("Grung", [
    { n:"Piel Venenosa", d:"Cualquier criatura que te agarre o sea agarrada por ti debe superar CON CD 12 o queda Envenenada hasta el final de su siguiente turno." },
    { n:"Arborícola", d:"Velocidad de escalada 25 pies. No necesitas manos libres para escalar." },
    { n:"Aguantar la Respiración", d:"Aguantas la respiración 1 hora; velocidad de natación 25 pies." },
    { n:"Salto Poderoso", d:"+25 pies al salto de longitud y +13 pies al de altura." },
  ]);

  addEspecie("Shifter", [
    { n:"Cambiaformas", d:"Como Acción Adicional, te transformas durante 1 minuto. Ganas PG temporales = nivel + CON. Elige linaje de Cambiante al crearlo: Rastreador (ventaja en Percepción/Supervivencia), Feroz (ataques desarmados d6 y +1 CA), Protector (piel dura: +1 CA), Justo (Atletismo con ventaja y +5 velocidad). 1/descanso corto." },
    { n:"Sentidos Bestiales", d:"Competencia en Percepción." },
  ]);

  addEspecie("Warforged", [
    { n:"Construcción Compuesta", d:"No necesitas comer, beber, ni respirar. Inmune a enfermedad. Meditas 6 horas (no duermes). Eres inmune a conjuros de dormitar." },
    { n:"Cuerpo Blindado", d:"CA base = 10 + bonificador de armadura de cualquier armadura que llevas + DEX. Puedes integrar armadura (+1 CA si llevas armadura ligera/media/pesada)." },
    { n:"Marco Poderoso", d:"Cuentas como talla Grande para carga. Tu velocidad no se reduce por llevar equipo pesado." },
    { n:"Herramienta Especializada", d:"Competencia en 1 herramienta artesanal a tu elección; esa herramienta está integrada en tu cuerpo." },
  ]);

  addEspecie("Changeling", [
    { n:"Cambiaformas", d:"Como Acción, cambias tu apariencia física (incluida voz) para parecerte a cualquier humanoide Mediano o Pequeño. No copias estadísticas." },
    { n:"Memoria de Forma", d:"Puedes recordar hasta INT+2 formas aprendidas. Al interactuar durante 1 minuto con alguien, puedes memorizar su apariencia." },
    { n:"Instinto Social", d:"Competencia en Engaño y Persuasión (o doble competencia si ya las tenías en alguna)." },
  ]);

  addEspecie("Kalashtar", [
    { n:"Dual Mente", d:"Ventaja en tiradas de salvación de SAB; eres inmune a conjuros de Detectar Pensamientos." },
    { n:"Comunicación Mental", d:"Puedes enviar mensajes telepáticos a criaturas que conozcas a 60 pies (sin revelar tu ubicación)." },
    { n:"Personalidad del Espíritu", d:"Competencia en Perspicacia." },
    { n:"Protección Psiónica", d:"Resistencia al daño psíquico." },
  ]);

  addEspecie("Fairy (Hada)", [
    { n:"Vuelo", d:"Velocidad de vuelo 30 pies. No puedes llevar armadura pesada." },
    { n:"Magia de Hada", d:"Disfrazarse y Paso Brumoso sin espacio 1/descanso largo cada uno. SAB, INT o CAR como estadística de conjuro." },
    { n:"Talla Pequeña", d:"Eres de talla Pequeña. Puedes moverte por el espacio de criaturas Medianas sin coste extra." },
  ]);

  addEspecie("Harengon", [
    { n:"Salto del Conejo", d:"Como Acción Adicional, saltas hasta 5× tu modificador de DES pies (mínimo 5 pies). Esto no provoca ataques de oportunidad (1/descanso corto)." },
    { n:"Percepción Atenta", d:"Competencia en Percepción." },
    { n:"Fortuna del Conejo", d:"Cuando una criatura visible te ataca y obtienes ventaja en la tirada de DEX para esquivar, puedes añadir tu bono de competencia a la CA (Reacción; 1/descanso corto)." },
  ]);

  addEspecie("Owlin", [
    { n:"Vuelo Silencioso", d:"Velocidad de vuelo 30 pies. Tus ataques y movimiento no provocan sonido detectable. No puedes llevar armadura pesada." },
    { n:"Visión en la Oscuridad", d:"120 pies." },
    { n:"Silencioso y Letal", d:"Competencia en Sigilo." },
  ]);

  addEspecie("Plasmoid", [
    { n:"Resistencia al Ácido y al Veneno", d:"Resistencia al daño de ácido y veneno." },
    { n:"Forma Amorfa", d:"Puedes pasar a través de espacios de 1 pulgada de ancho sin coste de movimiento." },
    { n:"Pseudópodo", d:"Puedes crear hasta 2 pseudópodos (alcance 10 pies) para agarrar, escalar o manipular objetos." },
    { n:"Aguantar la Respiración", d:"Puedes aguantar la respiración indefinidamente." },
  ]);

  addEspecie("Giff", [
    { n:"Constitución Militar", d:"Cuando sufres daño de explosión o pólvora, reduces ese daño en 1d10." },
    { n:"Carga de Hipopótamo", d:"Si te mueves ≥20 pies en línea recta y golpeas, el objetivo hace tirada de FUE o es derribado. Inflige 1d6 extra de contundente." },
    { n:"Aptitud para las Armas de Fuego", d:"Competencia con pistolas, mosquetes y armas de fuego. Ignoras la propiedad de carga en armas de fuego." },
    { n:"Resiliencia Mágica", d:"Ventaja en tiradas de salvación contra conjuros." },
  ]);

  addEspecie("Dracónido (Dragonborn Cromático)", [
    { n:"Ancestro Dracónico", d:"Elige: Negro (ácido), Azul (rayo), Verde (veneno), Rojo (fuego) o Blanco (frío)." },
    { n:"Arma de Aliento", d:"Línea o cono de daño; salvación DEX o CON. Escala con nivel." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de tu ancestro." },
    { n:"Aliento de Ventura", d:"1/descanso largo: como Reacción al recibir daño, usas el Arma de Aliento." },
  ]);

  addEspecie("Dracónido (Dragonborn Metálico)", [
    { n:"Ancestro Dracónico", d:"Elige: Bronce (rayo), Cobre (ácido), Oro (fuego), Latón (fuego) o Plata (frío)." },
    { n:"Arma de Aliento", d:"Línea o cono de daño; salvación DEX o CON. Escala con nivel." },
    { n:"Aliento de la Protección", d:"Opcionalmente, en lugar del aliento de daño, emites un aliento curativo: aliados en el área recuperan PG = tu nivel." },
    { n:"Presencia Metálica", d:"1/descanso largo: aura de 30 pies de fascinación o miedo (CAR CD)." },
  ]);

  addEspecie("Dracónido (Dragonborn Gema)", [
    { n:"Ancestro de Dragón Gema", d:"Elige: Amatista (fuerza), Cristal (radiante), Esmeralda (psíquico), Rubí (frío), Zafiro (trueno)." },
    { n:"Arma de Aliento", d:"Cono de daño del tipo de tu gema; salvación CON." },
    { n:"Resistencia al Daño", d:"Resistencia al tipo de tu ancestro." },
    { n:"Vuelo Psiónico", d:"Como Acción Adicional, ganas velocidad de vuelo 30 pies hasta el final de tu turno (1/descanso largo)." },
  ]);

})();

/* ══════════════════════════════════════════════════════
   DOTES ADICIONALES
   Fuentes: XGE, TCE, PHB 2024, One D&D UA, etc.
══════════════════════════════════════════════════════ */
(function() {
  const nuevasDotes = [
    /* ── GENERALES adicionales ── */
    { n:"Alert (General)",              tipo:"G", d:"No puedes ser sorprendido; +5 a la Iniciativa. (Versión General para niveles avanzados)." },
    { n:"Bountiful Luck",               tipo:"G", d:"Req: Mediano. Cuando un aliado a 30 pies saca un 1 en una tirada, puede usar tu rasgo Suertudo." },
    { n:"Dragon Fear",                  tipo:"G", d:"Req: Dracónido. +1 FUE/CON/CAR. Cuando uses Arma de Aliento puedes rugir: criaturas en el área hacen tirada de SAB o quedan Asustadas 1 minuto." },
    { n:"Dragon Hide",                  tipo:"G", d:"Req: Dracónido. +1 FUE/CON/CAR. CA natural = 13 + DEX. Garras: 1d4 cortante." },
    { n:"Drow High Magic",              tipo:"G", d:"Req: Drow. Detectar Magia a voluntad. Levitación y Tinieblas sin espacio 1/descanso largo." },
    { n:"Dwarf Resilience",             tipo:"G", d:"Req: Enano. +1 CON. En descanso corto, cuando gastas un Dado de Golpe recuperas PG adicionales = tu mod CON." },
    { n:"Elven Accuracy",               tipo:"G", d:"Req: Elfo o Semielfo. +1 DEX/INT/SAB/CAR. Cuando tienes ventaja en un ataque de DEX/INT/SAB/CAR, puedes tirar 1 dado adicional y usar el mejor." },
    { n:"Fade Away",                    tipo:"G", d:"Req: Gnomo. +1 DEX o INT. Reacción al recibir daño: te vuelves invisible hasta el inicio de tu siguiente turno (1/descanso corto)." },
    { n:"Flames of Phlegethos",         tipo:"G", d:"Req: Tiefling. +1 INT o CAR. Cuando lanzas un conjuro de fuego, re-tiras los 1 en dados de daño. Puedes envolverse en llamas 1 minuto/descanso largo (1d4 a quienes te toquen)." },
    { n:"Infernal Constitution",        tipo:"G", d:"Req: Tiefling. +1 CON. Resistencia a frío y veneno; ventaja en salvaciones de CON." },
    { n:"Orcish Fury",                  tipo:"G", d:"Req: Semiorco. +1 FUE o CON. 1/turno al golpear, añade 1 dado de daño del arma extra. Al usar Resistencia Implacable, haz 1 ataque inmediatamente como Reacción." },
    { n:"Prodigy",                      tipo:"G", d:"Req: Humano, Semielfo o Semiorco. Competencia en 1 habilidad, 1 herramienta y 1 idioma. Doble competencia en 1 habilidad que ya tengas." },
    { n:"Second Chance",                tipo:"G", d:"Req: Mediano. +1 DEX/CON/CAR. Reacción cuando una criatura te ataca: fuerza a re-tirar ese ataque (1/turno; 1/descanso corto o largo)." },
    { n:"Squat Nimbleness",             tipo:"G", d:"Req: Enano, Mediano, Gnomo u otra raza Pequeña. +1 FUE o DEX. +5 velocidad; doble competencia en Atletismo o Acrobacias; ventaja para escapar de agarres." },
    { n:"Wood Elf Magic",               tipo:"G", d:"Req: Elfo de Bosque. Pasar Sin Rastro a voluntad. 1 conjuro de la lista de Druida sin espacio 1/descanso largo." },
    { n:"Aberrant Dragonmark",          tipo:"G", d:"Req: Sin Dragonmark. Aprendes 1 truco y 1 conjuro de Nv.1 de la lista de Hechicero; 1/descanso largo sin espacio. Riesgo de oleada de magia salvaje al amplificarlo." },
    { n:"Adept of the Black Robes",     tipo:"G", d:"Req: Orden de las Togas Negras (Krynn). Añades CAR a los dados de daño psíquico de tus conjuros. 1/descanso largo: cuando lanzas un conjuro, recuperas un espacio de Nv.1-2." },
    { n:"Adept of the Red Robes",       tipo:"G", d:"Req: Orden de las Togas Rojas. Añades SAB a una tirada de daño de conjuro. 1/descanso largo cuando aciertas con un conjuro." },
    { n:"Adept of the White Robes",     tipo:"G", d:"Req: Orden de las Togas Blancas. Añades INT a tiradas de curación de conjuros. Cuando lanzas un conjuro de Nv.1+, puedes dar PG temporales = 2d6+INT a 1 aliado a 30 pies." },
    { n:"War Caster (Epic)",            tipo:"G", d:"Ventaja en CON para concentración; atacas como Reacción con cualquier conjuro de daño; puedes lanzar conjuros con manos ocupadas." },
    { n:"Gift of the Chromatic Dragon", tipo:"G", d:"1/descanso largo: infunde tu arma o la de un aliado con energía elemental (fuego/frío/rayo/ácido/veneno; 1d4 extra de ese tipo, 1 minuto). Reacción al recibir daño: ganas resistencia a ese tipo." },
    { n:"Gift of the Gem Dragon",       tipo:"G", d:"+1 INT/SAB/CAR. Reacción al recibir daño de una criatura: emite energía psiónica en área de 10 pies (2d8 de fuerza, STR para resistir y ser empujado 10 pies). 1/descanso largo." },
    { n:"Gift of the Metallic Dragon",  tipo:"G", d:"Aprendes Curar Heridas (lanzable con cualquier estadística mental, 1/descanso largo). Reacción cuando una criatura a 5 pies es atacada: añades tu bono de competencia a la CA contra ese ataque." },
    { n:"Crusher",                      tipo:"G", d:"+1 FUE o CON. En crítico con daño contundente, mueve al objetivo 5 pies y las criaturas tienen ventaja en ataques contra él hasta el inicio de tu siguiente turno." },
    { n:"Piercer",                      tipo:"G", d:"+1 FUE o DEX. En crítico con daño perforante, añade 1 dado de daño del arma extra. 1/turno puedes re-tirar 1 dado de daño perforante y usar cualquier resultado." },
    { n:"Slasher",                      tipo:"G", d:"+1 FUE o DEX. Al golpear con daño cortante, reduces la velocidad del objetivo en 10 pies hasta tu siguiente turno. En crítico, el objetivo tiene desventaja en ataques hasta el inicio de tu turno." },
    { n:"Artificer Initiate",           tipo:"G", d:"Aprendes 1 truco de Artificer y 1 conjuro de Nv.1 de Artificer (1/descanso largo sin espacio). Competencia en herramientas de artesano de tu elección." },
    { n:"Metamagic Adept",              tipo:"G", d:"Req: conjuración. Aprendes 2 opciones de Metamagia de Hechicero. Ganas 2 Puntos de Hechicería (se recuperan en descanso largo; no se acumulan con los de Hechicero)." },
    { n:"Eldritch Adept",               tipo:"G", d:"Req: conjuración. Aprendes 1 Invocación de Brujo que no requiera nivel de Brujo." },
    { n:"Poisoner (Origin)",            tipo:"G", d:"Ignoras resistencia al veneno. Aplicas veneno como Acción Adicional. 50 dosis de veneno potente (1d4+2 veneno, CON CD 14) al finalizar cada descanso largo." },
    { n:"Skill Expert",                 tipo:"G", d:"+1 a cualquier estadística. Competencia en 1 habilidad. Doble competencia en 1 habilidad en la que ya seas competente." },
    { n:"Tandem Tactician",             tipo:"G", d:"Como Acción Adicional, concedes ventaja al siguiente ataque de un aliado contra 1 enemigo que puedas ver." },
    { n:"Outlands Envoy",               tipo:"G", d:"Aprendes 2 idiomas. 1/descanso largo: lanzas Detectar Pensamientos o Comunicación sin componentes materiales." },
    { n:"Strixhaven Initiate",          tipo:"G", d:"Aprendes 2 trucos y 1 conjuro de Nv.1 de la lista de 1 de los 5 colegios de Strixhaven (Lorehold, Prismari, Quandrix, Silverquill, Witherbloom). 1/descanso largo sin espacio." },
    { n:"Gunner",                       tipo:"G", d:"+1 DEX. Competencia con armas de fuego. Ignoras penalización cuerpo a cuerpo con armas de fuego. No se puede tirar ventaja al recargar." },
    { n:"Telekinetic (revisado TCE)",   tipo:"G", d:"+1 INT/SAB/CAR. Mage Hand invisible y silenciosa, alcance +30 pies, puede empujar 5 pies. Como Acción Adicional, empujas/atraes a 1 criatura a 30 pies (STR para resistir)." },
    { n:"Telepathic (revisado TCE)",    tipo:"G", d:"+1 INT/SAB/CAR. Comunica telepáticamente a 60 pies con cualquier idioma. Detectar Pensamientos sin espacio 1/descanso largo." },

    /* ── FIGHTING STYLES adicionales ── */
    { n:"Superior Technique",           tipo:"F", d:"Aprende 1 maniobra de Maestro de Batalla. Ganas 1 Dado de Superioridad d6 (no se acumula si ya tienes)." },
    { n:"Tunnel Fighter",               tipo:"F", d:"Como Acción Adicional, entras en guardia. Mientras estás en guardia, los ataques de oportunidad no cuestan Reacción y puedes hacerlos contra todos los que se muevan dentro de tu alcance." },
    { n:"Close Quarters Shooter",       tipo:"F", d:"No tienes desventaja por ataques a distancia a cuerpo a cuerpo. +1 a tiradas de ataque con armas a distancia contra objetivos a 30 pies o menos." },
    { n:"Mariner",                       tipo:"F", d:"+1 CA mientras no usas escudo ni armadura pesada. Velocidad de natación y escalada = tu velocidad." },
    { n:"Druidic Warrior",               tipo:"F", d:"Aprendes 2 trucos de Druida. SAB es tu estadística de lanzamiento de esos trucos." },

    /* ── EPIC BOONS adicionales ── */
    { n:"Boon of the Fire Soul",         tipo:"E", d:"Inmunidad al fuego. 1/turno al golpear: el objetivo recibe 2d6 de fuego extra." },
    { n:"Boon of High Magic",            tipo:"E", d:"Ganas 1 espacio de conjuro de Nv.9 que se recupera en descanso largo." },
    { n:"Boon of Undetectability",       tipo:"E", d:"No puedes ser detectado por visión verdadera ni por conjuros de adivinación. Siempre se considera que tienes ventaja en Sigilo." },
    { n:"Boon of Perfect Health",        tipo:"E", d:"Inmunidad a enfermedad y veneno; ventaja en salvaciones de CON." },
    { n:"Boon of Planar Travel",         tipo:"E", d:"1/descanso largo: lanzas Planeshift sin componentes materiales." },
  ];

  // Añadimos solo las que no existan ya (evita duplicados)
  nuevasDotes.forEach(dote => {
    if (!DND_DOTES.find(d => d.n === dote.n)) {
      DND_DOTES.push(dote);
    }
  });
})();

