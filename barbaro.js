/* ══════════════════════════════════════════════════════════════════
   barbaro.js — Bárbaro: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
     Sword Coast Adventurer's Guide (SCAG)
     Explorer's Guide to Wildemount (EGtW)
     Bigby Presents: Glory of the Giants (BGotG)
     Tal'Dorei Campaign Setting Reborn (TCSR)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Camino del Berserker           [PHB 2014] / [PHB 2024]
     Camino del Guerrero Tótem      [PHB 2014]
     Camino del Corazón Salvaje     [PHB 2024]  ← evolución del Tótem
     Camino del Árbol del Mundo     [PHB 2024]  ← nueva
     Camino del Zelote              [XGtE] / [PHB 2024]
     Camino del Guardián Ancestral  [XGtE]
     Heraldo de la Tormenta         [XGtE]
     Camino de la Bestia            [TCE]
     Camino de la Magia Salvaje     [TCE]
     Camino del Berserker Osado     [SCAG]      ← Battlerager
     Camino del Gigante             [BGotG]
     Camino del Devastador          [EGtW]      ← Path of the Juggernaut
     Camino del Mundo Destrozado    [TCSR]
     Camino de la Fuerza Lunar      [TCSR]
══════════════════════════════════════════════════════════════════ */

const CLASE_BARBARO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras y medias, escudos. Todas las armas simples y marciales. Salvaciones: FUE y CON. Habilidades: elige 2 entre Atletismo, Intimidación, Naturaleza, Percepción, Supervivencia y Trato con Animales."
    },
    {
      n: "Furia",
      nv: 1,
      d: "Como acción adicional entras en Furia (dura 1 minuto; termina si te quedas inconsciente, si no atacas ni recibes daño desde tu último turno, o si la finalizas voluntariamente como AA). Mientras estás en Furia: ventaja en tiradas de FUE, +2 al daño de ataques de FUE (→+3 Nv.9, →+4 Nv.16), resistencia a daño contundente/perforante/cortante. No puedes lanzar conjuros ni concentrarte en ellos durante la Furia. Usos: 2 (Nv.1) → 3 (Nv.3) → 4 (Nv.6) → 5 (Nv.12) → 6 (Nv.17) → ilimitado (Nv.20). Se recuperan con descanso largo."
    },
    {
      n: "Defensa sin Armadura",
      nv: 1,
      d: "Mientras no vistas armadura, tu CA = 10 + mod DES + mod CON. Puedes usar un escudo y seguir beneficiándote de este rasgo."
    },
    {
      n: "Arma de Bárbaro [PHB 2024]",
      nv: 1,
      d: "(PHB 2024) Tus ataques con arma usando FUE infligen 1 dado de daño adicional al golpear."
    },
    {
      n: "Sentido del Peligro",
      nv: 2,
      d: "Ventaja en tiradas de salvación de DES contra efectos que puedas ver, como trampas y conjuros. No funciona si estás Cegado, Ensordecido o Incapacitado."
    },
    {
      n: "Ataque Imprudente",
      nv: 2,
      d: "Cuando realizas tu primer ataque en un turno, puedes decidir atacar de forma imprudente. Obtienes ventaja en ese ataque y en todos los ataques de FUE en cuerpo a cuerpo de ese turno, pero los ataques contra ti tienen ventaja hasta tu siguiente turno."
    },
    {
      n: "Camino Primal",
      nv: 3,
      d: "Eliges tu subclase (Camino Primal). Otorga rasgos en Nv.3, 6, 10 y 14."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 12, 16 y 19. Puedes tomar una dote en su lugar."
    },
    {
      n: "Ataque Extra",
      nv: 5,
      d: "Atacas dos veces cuando usas la acción de Atacar."
    },
    {
      n: "Movimiento Rápido",
      nv: 5,
      d: "+10 pies a tu velocidad mientras no vistas armadura pesada."
    },
    {
      n: "Instinto Salvaje",
      nv: 7,
      d: "Tu instinto está tan afilado que obtienes ventaja en tiradas de Iniciativa. Además, si eres sorprendido al inicio del combate y no estás incapacitado, puedes actuar con normalidad en tu primer turno siempre que entres en Furia antes de hacer cualquier otra cosa."
    },
    {
      n: "Instinto Salvaje [PHB 2024]",
      nv: 7,
      d: "(PHB 2024) Ventaja en Iniciativa. Además, cuando eres sorprendido, puedes entrar en Furia como Reacción al inicio del combate antes de que el primer turno del encuentro tenga lugar."
    },
    {
      n: "Crítico Brutal [PHB 2014]",
      nv: 9,
      d: "(PHB 2014) Cuando consigues un golpe crítico con un ataque de arma cuerpo a cuerpo, puedes tirar un dado de daño adicional del arma al calcular el daño extra del crítico. En Nv.13 son 2 dados adicionales y en Nv.17 son 3 dados adicionales."
    },
    {
      n: "Golpe Brutal [PHB 2024]",
      nv: 9,
      d: "(PHB 2024) Si tienes ventaja en la tirada de ataque y atacas con FUE o con un arma de lanzamiento, puedes renunciar a la ventaja para aplicar un efecto de Golpe Brutal (en lugar de tirar ambos dados). Efectos a elegir: Derribar (objetivo cae Tumbado), Empujar (empujas al objetivo 15 pies en línea recta), Perturbar (objetivo sufre desventaja en la primera tirada de salvación que haga antes de tu siguiente turno)."
    },
    {
      n: "Furia Imparable",
      nv: 11,
      d: "Si en Furia caes a 0 PG y no mueres directamente, puedes hacer una tirada de salvación de CON (CD 10). Si superas, te quedas en 1 PG. Cada uso adicional incrementa la CD en 5. Se reinicia al terminar un descanso largo."
    },
    {
      n: "Furia Persistente",
      nv: 15,
      d: "Tu Furia es tan feroz que solo termina si caes inconsciente o si decides terminarla voluntariamente. Ya no termina por no haber atacado ni recibido daño."
    },
    {
      n: "Poder Indomable [PHB 2014]",
      nv: 20,
      d: "(PHB 2014) Si tu total en una prueba de FUE es menor que tu puntuación de FUE, puedes usar tu puntuación de FUE en lugar del total. Además, el número de usos de Furia es ilimitado."
    },
    {
      n: "Campeón Primal [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) Encarnas el poder primordial: +4 a FUE y +4 a CON (esto puede llevar las puntuaciones por encima de 20). Los usos de Furia son ilimitados."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (CAMINOS PRIMALES)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Camino del Berserker [PHB 2014]": [
      {
        n: "Frenesí",
        nv: 3,
        d: "Al entrar en Furia puedes optar por un Frenesí. Si lo haces, durante toda la Furia puedes atacar una vez adicional como Acción Adicional en cada uno de tus turnos. Al finalizar la Furia ganas 1 nivel de Agotamiento."
      },
      {
        n: "Furia sin Mente",
        nv: 6,
        d: "No puedes ser Encantado ni Asustado mientras estás en Furia. Si ya estabas Encantado o Asustado al entrar en Furia, el efecto queda suspendido mientras dure."
      },
      {
        n: "Presencia Intimidatoria",
        nv: 10,
        d: "Como Acción puedes aterrorizar a una criatura que puedas ver a 30 pies. Debe superar una salvación de SAB (CD = 8 + comp + mod CAR) o quedará Asustada de ti hasta el final de tu siguiente turno. En turnos sucesivos puedes usar tu Acción para extender el efecto 1 turno más. El efecto termina si la criatura termina su turno fuera de tu línea de visión o a más de 60 pies. Una vez que el efecto falle o termine, esa criatura es inmune a tu Presencia Intimidatoria durante 24 horas."
      },
      {
        n: "Represalia",
        nv: 14,
        d: "Como Reacción, cuando recibes daño de una criatura que esté a 5 pies de ti, puedes realizar un ataque de arma cuerpo a cuerpo contra ella."
      },
    ],

    "Camino del Guerrero Tótem [PHB 2014]": [
      {
        n: "Buscador del Espíritu",
        nv: 3,
        d: "Puedes lanzar Bestia Parlante y Comunión con la Naturaleza como rituales sin componentes materiales."
      },
      {
        n: "Espíritu Tótem",
        nv: 3,
        d: "Al entrar en Furia, elige uno de los siguientes espíritus tótem para canalizar su poder: Oso — mientras estás en Furia, tus aliados a 30 pies tienen ventaja en salvaciones de FUE y CON, y resistencia a todo daño excepto psíquico. Águila — mientras estás en Furia eres imposible de atacar con oportunidad; además, como AA en tu turno puedes hacer la acción de Correr. Lobo — en Furia, cuando golpeas a una criatura Grande o menor, puedes usar AA para derribarla (queda Tumbada). Alce (XGtE) — mientras estás en Furia, tu velocidad aumenta 15 pies y criaturas amistosas pueden usar Desengancharse libremente. Tigre (XGtE) — cuando entras en Furia, puedes moverte hasta 10 pies; durante la Furia, mejoras los saltos en 10 pies."
      },
      {
        n: "Aspecto de la Bestia",
        nv: 6,
        d: "Obtienes una habilidad mágica de un segundo espíritu tótem (puedes elegir el mismo): Oso — cuentas como Enorme para cargar peso. Águila — ves hasta 1 milla con normalidad, identifica fácilmente detalles, luz tenue no te impone desventaja. Lobo — puedes rastrear criaturas con ventaja incluso a paso rápido. Alce (XGtE) — puedes nadar a doble velocidad y respirar bajo el agua. Tigre (XGtE) — te haces con competencia en dos habilidades entre Atletismo, Acrobacias, Sigilo y Supervivencia."
      },
      {
        n: "Caminante Espiritual",
        nv: 10,
        d: "Puedes lanzar Comunión con la Naturaleza como ritual, lo que te permite comunicarte con los espíritus de la tierra que te rodean."
      },
      {
        n: "Comunión con el Tótem",
        nv: 14,
        d: "Ganas un poderoso beneficio mágico de un tercer espíritu tótem (puede repetirse): Oso — mientras estás en Furia, cualquier criatura que te golpee cuerpo a cuerpo recibe 1d6 de daño de fuerza. Águila — mientras estás en Furia, tienes velocidad de vuelo igual a tu velocidad de caminar. Lobo — mientras estás en Furia, tus aliados tienen ventaja en ataques contra cualquier criatura que esté a 5 pies de ti y que no esté incapacitada. Alce (XGtE) — Ola Tronante puede lanzarse sin espacio mientras estás en Furia (CON CD 13). Tigre (XGtE) — cuando hagas daño en la primera ronda de combate, el objetivo sangra; pierde 1d6 PG al inicio de cada turno durante 1 minuto (salvación CON CD 13 para finalizar)."
      },
    ],

    /* ── PHB 2024 ── */
    "Camino del Berserker [PHB 2024]": [
      {
        n: "Frenesí",
        nv: 3,
        d: "Mientras estás en Furia, una vez por turno cuando golpeas a una criatura con un ataque, puedes infligir 1d6 de daño adicional del mismo tipo que el arma. Este daño extra no causa Agotamiento."
      },
      {
        n: "Actitud Descuidada",
        nv: 6,
        d: "Mientras estás en Furia, si tienes ventaja en una tirada de ataque de arma cuerpo a cuerpo y aciertas, también golpeas a una segunda criatura que esté a 5 pies del objetivo original y al alcance de tu arma. El daño es igual al modificador de FUE (sin añadir el dado de daño)."
      },
      {
        n: "Presencia Intimidatoria",
        nv: 10,
        d: "Como Acción puedes aterrorizar a una criatura visible a 30 pies (salvación SAB CD = 8 + comp + mod CAR o queda Asustada hasta el final de tu siguiente turno). Puedes extender el efecto con tu Acción en turnos sucesivos. Inmunidad 24h una vez resista o el efecto termine."
      },
      {
        n: "Represalia",
        nv: 14,
        d: "Reacción: cuando recibes daño de una criatura a 5 pies, puedes realizar un ataque de arma cuerpo a cuerpo contra ella inmediatamente."
      },
    ],

    "Camino del Corazón Salvaje [PHB 2024]": [
      {
        n: "Espíritu Animal",
        nv: 3,
        d: "Al entrar en Furia, eliges el espíritu que canalizas (puedes cambiarlo en cada Furia): Oso — resistencia a todo daño excepto psíquico mientras estás en Furia. Águila — como AA en tu turno puedes Correr; los ataques de oportunidad contra ti tienen desventaja. Lobo — puedes usar AA para derribar a una criatura que hayas golpeado (queda Tumbada). Alce — tu velocidad aumenta 15 pies y los aliados pueden usar Desengancharse libremente a 5 pies de ti. Tigre — +10 pies a saltos; al entrar en Furia puedes moverte 10 pies inmediatamente."
      },
      {
        n: "Alma de la Bestia",
        nv: 6,
        d: "Tu espíritu animal te otorga un rasgo pasivo permanente (independiente de la Furia): Oso — cuentas como Enorme para cargar. Águila — visión hasta 1 milla con detalle. Lobo — puedes rastrear criaturas con ventaja a paso rápido. Alce — nadar a doble velocidad, respirar bajo el agua. Tigre — dos competencias de habilidad adicionales entre Atletismo, Acrobacias, Sigilo y Supervivencia."
      },
      {
        n: "Caminante Espiritual",
        nv: 10,
        d: "Puedes lanzar Comunión con la Naturaleza como ritual sin materiales."
      },
      {
        n: "Furia Bestial",
        nv: 14,
        d: "Mientras estás en Furia, tus ataques desarmados y con armas naturales infligen 1d8 de daño adicional del tipo del espíritu activo."
      },
    ],

    "Camino del Árbol del Mundo [PHB 2024]": [
      {
        n: "Vástago del Árbol del Mundo",
        nv: 3,
        d: "Mientras estás en Furia, cuando reduces a una criatura a 0 PG, tú o una criatura que puedas ver a 30 pies recupera PG = 1d6 + mod CON."
      },
      {
        n: "Pasos del Árbol del Mundo",
        nv: 6,
        d: "Mientras estás en Furia, al inicio de cada uno de tus turnos puedes teletransportarte hasta 60 pies a un espacio desocupado que puedas ver. Cuando llegues, las criaturas a 5 pies de tu destino reciben 1d8 de daño de fuerza (salvación CON para reducir a la mitad, CD = CD de conjuro basada en CON)."
      },
      {
        n: "Hojas de la Cima del Árbol",
        nv: 10,
        d: "Cuando entras en Furia, ganas velocidad de vuelo = tu velocidad de caminar durante 1 minuto. Si estás volando cuando la Furia termina, caes suavemente (como bajo el efecto de Caída de Pluma)."
      },
      {
        n: "Rama del Árbol del Mundo",
        nv: 14,
        d: "Cuando usas Pasos del Árbol del Mundo, puedes llevar contigo a hasta 6 criaturas voluntarias de tamaño Grande o menor que estén a 5 pies de ti. Las criaturas aparecen en espacios vacíos adyacentes a tu destino."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Camino del Guardián Ancestral [XGtE]": [
      {
        n: "Protectores Ancestrales",
        nv: 3,
        d: "Cuando entras en Furia, los espíritus de tus antepasados se manifiestan. La primera criatura que golpees en Furia queda acosada por ellos: los ataques de esa criatura contra objetivos que no seas tú tienen desventaja, y el primer aliado que reciba daño de ella reduce ese daño a la mitad hasta el inicio de tu siguiente turno. El efecto se mueve al siguiente objetivo si reduces a 0 PG al actual."
      },
      {
        n: "Escudo Espiritual",
        nv: 6,
        d: "Como Reacción, cuando un aliado visible a 30 pies recibe daño, puedes reducir ese daño en 2d6 (→3d6 en Nv.10, →4d6 en Nv.14) siempre que estés en Furia."
      },
      {
        n: "Consultar a los Espíritus",
        nv: 10,
        d: "Puedes lanzar Augur o Comunión con la Naturaleza sin gastar espacio de conjuro. Se recupera con descanso largo. SAB es tu característica para estos conjuros."
      },
      {
        n: "Venganza de los Ancestros",
        nv: 14,
        d: "Mientras estás en Furia, cuando un aliado visible cae a 0 PG, ganas ventaja en todos los ataques contra la criatura responsable hasta el final de tu siguiente turno."
      },
    ],

    "Heraldo de la Tormenta [XGtE]": [
      {
        n: "Alma de Tormenta",
        nv: 3,
        d: "Ganas resistencia a daño de rayo y trueno. Mientras estás en Furia, emites un aura de tormenta en 10 pies que aplica un efecto según el ambiente elegido al nivel 3 (y que permanece de por vida): Desierto — criaturas hostiles a 5 pies reciben 1d6 de daño de fuego al inicio de su turno. Mar — criaturas hostiles a 30 pies reciben 1d6 de daño de rayo o trueno (tu elección) al inicio de su turno. Tundra — criaturas hostiles a 10 pies reciben 1d6 de daño de frío al inicio de su turno."
      },
      {
        n: "Escudo de Tormenta",
        nv: 6,
        d: "Cuando un aliado a 30 pies recibe daño de rayo o trueno, puedes usar tu Reacción (estando en Furia) para reducir ese daño a la mitad."
      },
      {
        n: "Espíritu de la Tormenta",
        nv: 10,
        d: "Inmunidad al daño de rayo y trueno. Tu aura de Alma de Tormenta aumenta a 30 pies. Además, cualquier criatura hostil que empiece su turno en el aura recibe 1d10 de daño del tipo de tu entorno."
      },
      {
        n: "Ira de la Tormenta",
        nv: 14,
        d: "Mientras estás en Furia, cuando recibes daño de una criatura a 5 pies puedes usar tu Reacción para que esa criatura reciba 2d6 de daño de rayo o trueno (a tu elección), sin tirada de salvación."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Camino de la Bestia [TCE]": [
      {
        n: "Forma de la Bestia",
        nv: 3,
        d: "Al entrar en Furia, tu cuerpo manifiesta rasgos de una bestia primordial. Elige uno (puedes cambiar en cada Furia): Mordisco — ganas un ataque de mordisco (1d8 perforante, FUE para atacar, se usa como AA; cuando muerdes una criatura, recuperas PG = mod PB). Garras — ganas ataques de garra (1d6 cortante, FUE para atacar); cuando atacas con la acción de Atacar puedes realizar un ataque de garra adicional como parte de esa acción. Cola — ganas una cola (1d8 perforante, FUE, alcance 10 pies); como Reacción cuando otra criatura te golpea, puedes añadir +4 a tu CA para ese ataque (potencialmente convirtiéndolo en fallo)."
      },
      {
        n: "Alma Bestial",
        nv: 6,
        d: "Tus ataques con armas y ataques de bestia cuentan como mágicos a efectos de superar resistencias. Además, mientras estás en Furia, ganas una de las siguientes adaptaciones (elegida al entrar): Velocidad de natación 30 pies y puedes respirar bajo el agua. Velocidad de escalada 30 pies. Cuando saltas, triplica la distancia (en lugar de doblarla normalmente)."
      },
      {
        n: "Armadura de Espinas",
        nv: 10,
        d: "Mientras estás en Furia, al inicio de cada uno de tus turnos, cualquier criatura que te haya golpeado en cuerpo a cuerpo desde tu último turno recibe 1d6 de daño perforante."
      },
      {
        n: "Cuerpo Bestial Potenciado",
        nv: 14,
        d: "Los ataques de Forma de la Bestia mejoran: Mordisco — el daño aumenta a 2d8. Garras — el ataque adicional de garra puede hacerse como AA, sin gastar el de la acción. Cola — el daño aumenta a 2d8 y el bonus de CA sube a +6."
      },
    ],

    "Camino de la Magia Salvaje [TCE]": [
      {
        n: "Conciencia Mágica",
        nv: 3,
        d: "Como Acción puedes abrir tu conciencia al flujo mágico: detectas la presencia de conjuros activos de Nv.1 o superior en un radio de 60 pies hasta el final de tu siguiente turno. Se recupera con descanso largo. Mientras estés en Furia, no necesitas gastar esta acción, se activa automáticamente al inicio de cada turno."
      },
      {
        n: "Oleada de Magia Salvaje",
        nv: 3,
        d: "Al entrar en Furia, lanzas 1d8 en la tabla de Oleadas de Magia Salvaje del Bárbaro (ver tabla) y aplicas el efecto inmediatamente. Los efectos duran hasta que la Furia termine (salvo indicación contraria)."
      },
      {
        n: "Magia Duradera",
        nv: 6,
        d: "Mientras estás en Furia, los conjuros de concentración que mantuvieras activos al entrar en Furia no se rompen automáticamente. Sí debes seguir haciendo tiradas de concentración si recibes daño."
      },
      {
        n: "Explosión Hechizante",
        nv: 10,
        d: "Cuando golpeas a una criatura con un ataque mientras estás en Furia, puedes crear un efecto de Oleada de Magia Salvaje adicional (lanzas el d8 y aplicas el resultado). Usos = mod CON (mínimo 1). Se recuperan con descanso largo."
      },
      {
        n: "Alma Hechizada",
        nv: 14,
        d: "Mientras estás en Furia, una vez por Furia puedes lanzar como Acción Adicional un conjuro de Nv.1-3 de la lista del Hechicero sin gastar espacio de conjuro ni componentes materiales (CAR como característica de conjuro)."
      },
    ],

    /* ── Sword Coast Adventurer's Guide ── */
    "Camino del Berserker Osado [SCAG]": [
      {
        n: "Berserker Osado",
        nv: 3,
        d: "Requiere ser Enano. Mientras estás en Furia y vistes Armadura de Pinchos, cuentas como armado. Los ataques desarmados o de lucha libre infligen 1d4 de daño perforante. Además, puedes usar la acción de Aferrar como acción adicional mientras estás en Furia."
      },
      {
        n: "Corredor Osado",
        nv: 6,
        d: "Como Acción Adicional mientras estás en Furia puedes correr, añadiendo el resultado a tu movimiento (incluso si ya usaste tu movimiento)."
      },
      {
        n: "Intimidación Destructiva",
        nv: 10,
        d: "Cuando golpeas a una criatura con un ataque de arma cuerpo a cuerpo, puedes obligarla a superar una salvación SAB (CD = 8 + comp + mod FUE) o quedará Asustada de ti hasta el final de tu siguiente turno. 1/descanso corto o largo."
      },
      {
        n: "Venganza Osada",
        nv: 14,
        d: "Cuando una criatura a 5 pies te inflige daño, puedes usar tu Reacción para atacarla con tu Armadura de Pinchos (1d4 perforante) y empujarla 10 pies si no supera una salvación de FUE (CD = 8 + comp + mod FUE)."
      },
    ],

    /* ── Explorer's Guide to Wildemount ── */
    "Camino del Devastador [EGtW]": [
      {
        n: "Imparable",
        nv: 3,
        d: "Tus ataques cuerpo a cuerpo en Furia cuentan como mágicos a efectos de superar resistencias e inmunidades."
      },
      {
        n: "Presencia Aplastante",
        nv: 3,
        d: "Cuando golpeas a una criatura en Furia, puedes intentar derribarla (tirada de FUE enfrentada). Si la derrumbas, queda Tumbada y no puede levantarse hasta el final de tu siguiente turno (sus piernas quedan bloqueadas por tu fuerza)."
      },
      {
        n: "Mente Fortalecida",
        nv: 6,
        d: "Mientras estás en Furia, tienes ventaja en tiradas de salvación de INT, SAB y CAR. Además, el daño que recibes no puede interrumpir tu concentración en conjuros."
      },
      {
        n: "Defensa Indomable",
        nv: 10,
        d: "Cuando una criatura trata de moverte con magia u obligarte a caer Tumbado, puedes usar tu Reacción para hacer una tirada de salvación de FUE (CD = 8 + ataque/tirada del efecto). Si superas, no te mueves ni caes."
      },
      {
        n: "Golpe que Aplasta el Mundo",
        nv: 14,
        d: "En Furia, cuando derrumbas a una criatura con Presencia Aplastante, criaturas a 5 pies de esa criatura deben superar una salvación de DEX (CD = 8 + comp + mod FUE) o recibirán 2d6 de daño contundente y caerán Tumbadas."
      },
    ],

    /* ── Bigby Presents: Glory of the Giants ── */
    "Camino del Gigante [BGotG]": [
      {
        n: "Herencia Gigante",
        nv: 3,
        d: "Aprendes el idioma Gigante. Además, eliges uno de los seis tipos de gigante y ganas una habilidad activa (sin coste) y un beneficio pasivo asociados a ese tipo: Colina — acción para regurgitar veneno (cono 15 pies, CON), pasivo: resistencia a veneno. Glaciar — acción para crear terreno helado (cono 15 pies, CON), pasivo: resistencia a frío. Piedra — acción para lanzar una roca (ataque a distancia, 2d10), pasivo: resistencia a contundente no-mágico. Tormenta — acción para llamar un rayo (DEX), pasivo: resistencia a rayo. Fuego — acción para exhalar fuego (cono, DEX), pasivo: resistencia a fuego. Nubes — acción para teletransportarte 30 pies, pasivo: puedes lanzar Detectar Magia sin espacio una vez por descanso largo."
      },
      {
        n: "Forma del Gigante",
        nv: 3,
        d: "Al entrar en Furia, puedes crecer a tamaño Grande (si el espacio lo permite). Mientras eres Grande: tu alcance aumenta 5 pies, añades 1d6 al daño de tus ataques de FUE y puedes agarrar a criaturas de tamaño Grande o menor."
      },
      {
        n: "Paso Sísmico",
        nv: 6,
        d: "Mientras estás en Furia y tienes tamaño Grande: como AA puedes arrojar un objeto Mediano o menor hasta 60 pies (ataque de conjuro usando FUE, 2d10 del tipo de tu Herencia Gigante), o puedes agarrar a una criatura Grande o menor y lanzarla hasta 30 pies (FUE enfrentada; si aterriza recibe 3d6 contundente y cae Tumbada)."
      },
      {
        n: "Escudo Titánico",
        nv: 10,
        d: "Cuando tú o un aliado visible a 30 pies recibís daño del tipo de tu Herencia Gigante, puedes usar tu Reacción para reducir ese daño en 2d12 + mod CON."
      },
      {
        n: "Colosal",
        nv: 14,
        d: "Mientras estás en Furia, puedes crecer a tamaño Enorme (si el espacio lo permite). Siendo Enorme: tu alcance aumenta 10 pies en total (5 adicionales sobre Grande), añades 1d8 extra al daño de ataques de FUE y tienes ventaja en tiradas de FUE (Atletismo)."
      },
    ],

    /* ── Tal'Dorei Campaign Setting Reborn ── */
    "Camino del Mundo Destrozado [TCSR]": [
      {
        n: "Forma Destrozada",
        nv: 3,
        d: "Al entrar en Furia, eliges un elemento primordial (fuego, frío, rayo, ácido o trueno). Durante la Furia: ganas resistencia a ese tipo de daño, y al golpear con un ataque de arma cuerpo a cuerpo infligas 1d6 de daño adicional de ese tipo."
      },
      {
        n: "Chispa de la Creación",
        nv: 6,
        d: "Mientras estás en Furia y tu Forma Destrozada está activa, criaturas hostiles que te golpeen en cuerpo a cuerpo reciben 1d6 de daño del tipo de tu elemento (CON CD = 8 + comp + mod CON para reducir a la mitad)."
      },
      {
        n: "Explosión Cósmica",
        nv: 10,
        d: "Mientras estás en Furia, como Acción puedes emitir una explosión de energía primordial en un cono de 30 pies: 5d8 del tipo de tu elemento (DEX para reducir a la mitad, CD = 8 + comp + mod CON). 1/descanso largo."
      },
      {
        n: "Resiliencia Primordial",
        nv: 14,
        d: "Ganas resistencia permanente a los cuatro tipos de daño elemental (fuego, frío, rayo, ácido) además del tipo de tu Forma Destrozada. Al tipo de tu Forma Destrozada, ganas inmunidad en lugar de resistencia."
      },
    ],

    "Camino de la Fuerza Lunar [TCSR]": [
      {
        n: "Transformación Lunar",
        nv: 3,
        d: "Al entrar en Furia, avanzas a la siguiente fase lunar (Creciente → Llena → Menguante → Creciente). Cada fase otorga un beneficio distinto durante la Furia: Creciente — cuando golpeas, puedes empujar al objetivo 5 pies (FUE CD para resistir). Llena — velocidad de vuelo 30 pies. Menguante — cuando golpeas con éxito, el objetivo tiene desventaja en su siguiente tirada de ataque."
      },
      {
        n: "Espíritu Lunar",
        nv: 6,
        d: "Mientras estás en Furia, cuando gastas Dados de Golpe para curarte durante un descanso corto, añades mod SAB a cada dado gastado."
      },
      {
        n: "Oleada Lunar",
        nv: 10,
        d: "Como Acción Adicional mientras estás en Furia, puedes avanzar a la siguiente fase lunar y obtener sus beneficios inmediatamente."
      },
      {
        n: "Cuerpo Celestial",
        nv: 14,
        d: "Ganas resistencia permanente a daño radiante y necrótico. Cuando estás en Furia con la fase Llena activa, tu velocidad de vuelo aumenta a 60 pies."
      },
    ],

  }, // fin subclases
}; // fin CLASE_BARBARO
