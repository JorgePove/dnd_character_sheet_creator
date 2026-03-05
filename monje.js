/* ═══════════════════════════════════════════════════════
   monje.js — Monje: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_MONJE = {
  rasgos: [
    { n:"Artes Marciales", nv:1, d:"Dados de artes marciales (d4→d10 según nivel). Ataques desarmados y armas de Monje usan FUE o DES (lo mayor). Ataque desarmado como Acción Adicional." },
    { n:"Defensa Sin Armadura", nv:1, d:"CA = 10 + DES + SAB sin armadura ni escudo." },
    { n:"Ki", nv:2, d:"Pool de puntos Ki (= nivel). Recupera con descanso corto. Poderes base: Ráfaga de Golpes, Paso del Viento, Defensa Paciente." },
    { n:"Movimiento Sin Armadura", nv:2, d:"+10 pies de velocidad (escala). A Nv.9 puedes correr por superficies verticales y agua sin caer al detenerte." },
    { n:"Tradición Monástica", nv:3, d:"Elige tu subclase." },
    { n:"Deflexión de Misiles", nv:3, d:"Reacción al ser golpeado por un proyectil: reduces el daño en 1d10 + DES + nivel. Si llegas a 0, capturas el proyectil y puedes lanzarlo de vuelta." },
    { n:"Caída Lenta", nv:4, d:"Reacción: reduces el daño de caída en 5 × nivel." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Ataque Extra", nv:5, d:"Atacas dos veces con la acción de Atacar." },
    { n:"Golpe Aturdidor", nv:5, d:"Al golpear: gasta 1 Ki, el objetivo hace tirada CON o queda Aturdido hasta tu siguiente turno." },
    { n:"Golpe Ki", nv:6, d:"Tus ataques desarmados se consideran mágicos." },
    { n:"Evasión", nv:7, d:"Con DEX en áreas: si fallas, mitad de daño; si tienes éxito, ninguno." },
    { n:"Quietud de Mente", nv:7, d:"Inmune a encantamiento y miedo." },
    { n:"Cuerpo Purificado", nv:10, d:"Inmune a enfermedades y venenos." },
    { n:"Lengua del Sol y la Luna", nv:13, d:"Comprendes y te comunicas con cualquier criatura que tenga idioma." },
    { n:"Alma de Diamante", nv:14, d:"Competencia en todas las tiradas de salvación." },
    { n:"Juventud Eterna", nv:15, d:"No envejeces ni sufres efectos de envejecimiento." },
    { n:"Cuerpo Vacío", nv:18, d:"1 Ki: invisible 1 minuto; 4 Ki: Plano Astral 1 día." },
    { n:"Ser Perfecto", nv:20, d:"FUE y DES se convierten en 20 si eran menores. Cuenta como Humanoide y como Elemental (ventajas de las dos)." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Camino de la Mano Abierta [PHB 2014]": [
      { n:"Técnica de la Mano Abierta", nv:3, d:"Al usar Ráfaga de Golpes, aplica 1 de 3 efectos extras: empujar 15 pies, derribar o impedir reacciones del objetivo." },
      { n:"Sanación de la Mano", nv:6, d:"Gasta 1 Ki: cura a una criatura tocada PG = 1d6 × nivel. No puedes usarte a ti mismo." },
      { n:"Paz de la Mano", nv:6, d:"Como parte de Sanación, eliminas 1 enfermedad, 1 veneno o 1 condición." },
      { n:"Forma de la Culebra", nv:11, d:"Eres invulnerable al Golpe Aturdidor mientras estés Aturdido." },
      { n:"Vacío del Cuerpo", nv:17, d:"Gasta 4 Ki: Plano Astral sin materiales, 10 minutos. No necesitas Cuerpo Vacío." },
    ],
    "Camino de las Sombras [PHB 2014]": [
      { n:"Artes de las Sombras", nv:3, d:"Gasta 2 Ki: lanzas Oscuridad, Visión en la Oscuridad, Pasar Sin Rastro o Silencio (sin componentes)." },
      { n:"Paso de Sombra", nv:6, d:"En penumbra u oscuridad: teletransportas 60 pies a otra zona oscura/penumbra como Acción Adicional." },
      { n:"Manto de Sombras", nv:11, d:"En penumbra u oscuridad: invisible hasta que ataques o lances conjuro." },
      { n:"Oportunista", nv:17, d:"Reacción cuando un aliado golpea a un objetivo: puedes atacarlo tú también." },
    ],
    "Camino de los Cuatro Elementos [PHB 2014]": [
      { n:"Discípulo de los Elementos", nv:3, d:"Aprendes 2 disciplinas elementales (de la lista) y 1 más cada 2 niveles adicionales." },
      { n:"Golpe Elemental", nv:6, d:"Tus ataques desarmados infligen tipo de daño elemental adicional (según disciplina activa)." },
      { n:"Cinturón Elemental", nv:11, d:"Gana resistencia a 2 tipos de daño elemental." },
      { n:"Cuerpo Elemental", nv:17, d:"Inmunidad a 1 tipo de daño elemental; resistencia al tipo de movimiento asociado (vuelo, natación...)." },
    ],

    /* ── PHB 2024 ── */
    "Camino de la Mano Abierta [PHB 2024]": [
      { n:"Técnica de la Mano Abierta", nv:3, d:"Ráfaga de Golpes: añade empujar, derribar o impedir reacciones al objetivo." },
      { n:"Sanación de la Mano", nv:6, d:"Gasta 1 Ki: cura tocando PG = 1d6 × nivel + SAB; elimina 1 condición/enfermedad/veneno." },
      { n:"Forma de la Culebra", nv:11, d:"Inmune al Golpe Aturdidor si estás Aturdido." },
      { n:"Vacío del Cuerpo", nv:17, d:"Gasta 4 Ki: Plano Astral 10 minutos sin componentes." },
    ],
    "Camino de las Sombras [PHB 2024]": [
      { n:"Artes de las Sombras", nv:3, d:"Gasta 2 Ki: Oscuridad, Visión Oscuridad, Pasar Sin Rastro o Silencio." },
      { n:"Paso de Sombra", nv:6, d:"En penumbra/oscuridad, teletransporta 60 pies como Acción Adicional." },
      { n:"Manto de Sombras", nv:11, d:"En oscuridad, invisible hasta atacar o lanzar." },
      { n:"Oportunista", nv:17, d:"Reacción: ataca cuando un aliado golpea al mismo objetivo." },
    ],
    "Camino de los Cuatro Elementos [PHB 2024]": [
      { n:"Discípulo de los Elementos", nv:3, d:"Aprende 2 disciplinas elementales; más en Nv.6, 11, 17." },
      { n:"Golpe Elemental", nv:6, d:"Tus ataques infligen daño elemental adicional." },
      { n:"Cinturón Elemental", nv:11, d:"Resistencia a 2 tipos elementales." },
      { n:"Cuerpo Elemental", nv:17, d:"Inmunidad a 1 tipo elemental; beneficio de movimiento asociado." },
    ],
    "Camino de la Misericordia [PHB 2024]": [
      { n:"Manos de Sanación", nv:3, d:"Gasta 1 Ki: toca y cura PG = 1d6 × nivel; elimina 1 condición." },
      { n:"Manos del Daño", nv:3, d:"Al golpear en Ráfaga de Golpes: gasta 1 Ki para añadir 1d10 de daño necrótico al objetivo." },
      { n:"Médico de los Enfermos", nv:6, d:"Gasta 5 Ki: lanzas Restauración Mayor sin materiales." },
      { n:"Velo del Sufrimiento", nv:11, d:"Cuando curas a un aliado con Manos de Sanación, puedes transferirte 1d6 de daño de él a ti." },
      { n:"Curación Suprema", nv:17, d:"Manos de Sanación cura el máximo posible de dados de golpe." },
    ],

    /* ── XGE ── */
    "Camino del Sol [XGE]": [
      { n:"Puño del Sol Naciente", nv:3, d:"En Ráfaga de Golpes, uno de los ataques inflige daño radiante adicional = 1d4 (escala)." },
      { n:"Aura Solar", nv:6, d:"Emites luz brillante 20 pies (puedes controlarla). Las criaturas a 5 pies reciben 1d6 radiante al inicio de su turno si quieres." },
      { n:"Escudo Solar", nv:11, d:"Puedes gastar 1 Ki como Reacción para cegarte a ti mismo o a un atacante (CON para resistir)." },
      { n:"Golpe del Meridiano", nv:17, d:"Como Acción, emites una onda de energía solar: 5d10 radiante en 30 pies (DEX para reducir a la mitad)." },
    ],
    "Camino de la Borrachera [XGE]": [
      { n:"Arte del Borracho", nv:3, d:"Puedes elegir al inicio de tu turno imitar estar ebrio: +2 CA, ventaja en DEX y ganas beneficios de combate inesperado." },
      { n:"Mente Inestable", nv:6, d:"Ventaja en tiradas de salvación contra Aturdido y Derribado." },
      { n:"Aguas Profundas", nv:11, d:"Cuando estás en Arte del Borracho y fallas una tirada, puedes re-tirarla 1 vez." },
      { n:"Borracho Maestro", nv:17, d:"Una vez por turno en Arte del Borracho, al ser atacado puedes mover al atacante 5 pies (FUE para resistir) y no recibes el daño." },
    ],

    /* ── TCE ── */
    "Camino de la Misericordia [TCE]": [
      { n:"Manos de Sanación", nv:3, d:"Gasta 1 Ki para tocar y curar PG = 1d6 × nivel + SAB; elimina 1 condición." },
      { n:"Manos del Daño", nv:3, d:"Al golpear en Ráfaga de Golpes: gasta 1 Ki, añades 1d10 de daño necrótico." },
      { n:"Médico de los Enfermos", nv:6, d:"Gasta 5 Ki: lanzas Restauración Mayor sin materiales." },
      { n:"Velo del Sufrimiento", nv:11, d:"Al curar, transfieres 1d6 de daño del objetivo a ti mismo." },
      { n:"Curación Suprema", nv:17, d:"Manos de Sanación siempre cura el máximo de sus dados." },
    ],
    "Camino del Espíritu Astral [TCE]": [
      { n:"Brazos del Espíritu Astral", nv:3, d:"Gasta 1 Ki: invocas brazos astrales que te dan alcance 5 pies extra, 1d6 radiante/frío por ataque, y 1 ataque adicional en Ráfaga de Golpes." },
      { n:"Visión del Espíritu Astral", nv:6, d:"Mientras tus brazos están activos, ganas Ver Invisible (60 pies)." },
      { n:"Cuerpo Astral", nv:11, d:"Gasta 10 Ki: tu espíritu astral se separa del cuerpo; vuelo 30 pies, inmune a veneno y necrótico, 10 minutos." },
      { n:"Destructor de Almas", nv:17, d:"Tus brazos astrales ignoran resistencias y se consideran mágicos + plateados." },
    ],
    "Camino de las Manos Kensai [TCE]": [
      { n:"Armas Kensai", nv:3, d:"Eliges 2 armas como Armas Kensai (una cuerpo a cuerpo, una arrojadiza). Las dominas completamente y puedes añadir tu dado de Artes Marciales a sus daños." },
      { n:"Golpe Ágil", nv:3, d:"Cuando atacas con un arma Kensai, puedes usar Acción Adicional para atacar con tus manos (desarmado)." },
      { n:"Un con la Hoja", nv:6, d:"Tus armas Kensai se consideran mágicas; añades SAB al daño de tu arma Kensai a distancia." },
      { n:"Golpe Certero", nv:11, d:"Gasta 3 Ki: un ataque con arma Kensai acierta automáticamente (impacto sin tirada)." },
      { n:"Maestro Espadachín", nv:17, d:"Al inicio de tu turno, ganas +2 CA hasta el inicio de tu siguiente turno." },
    ],

    /* ── EGW ── */
    "Camino del Puño Iluminado [EGW]": [
      { n:"Mano Iluminada", nv:3, d:"Gasta 1 Ki al golpear: infligas daño radiante adicional = dado de Artes Marciales y el objetivo emite luz tenue 5 pies hasta tu siguiente turno." },
      { n:"Cinturón Radiante", nv:6, d:"Cuando un objetivo iluminado por tu Mano Iluminada es golpeado, tus aliados obtienen ventaja en ataques contra él." },
      { n:"Explosión Solar", nv:11, d:"Gasta 3 Ki: onda de luz de 30 pies, 4d6 radiante (DEX reduce a la mitad), y los que fallen quedan cegados 1 round." },
      { n:"Forma Radiante", nv:17, d:"Gasta 4 Ki: durante 1 minuto emites luz brillante 30 pies; inmune al daño radiante; tus ataques infligen 1d6 radiante adicional." },
    ],

    /* ── TDCSR ── */
    "Camino del Guerrero Profano [TDCSR]": [
      { n:"Artes del Guerrero Profano", nv:3, d:"Aprendes 2 trucos de Mago o Hechicero; los lanzas con SAB sin componentes." },
      { n:"Ki Arcano", nv:3, d:"Gasta 2 Ki: lanzas un conjuro de Nv.1 de tu lista sin espacio ni componentes (SAB)." },
      { n:"Defensa Arcana", nv:6, d:"Reacción al ser objetivo de un conjuro: ganas +2 a tu salvación contra ese conjuro." },
      { n:"Golpe Profano", nv:11, d:"Al golpear con un ataque desarmado, puedes gastar 3 Ki para infligir además el efecto de un truco que conozcas (sin tirada de ataque adicional)." },
      { n:"Maestro de la Profanación", nv:17, d:"Al lanzar un conjuro con Ki Arcano, lo lanzas como si fuera 2 niveles más alto sin coste adicional." },
    ],
  }
};
