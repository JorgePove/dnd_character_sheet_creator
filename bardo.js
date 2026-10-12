/* ══════════════════════════════════════════════════════════════════
   bardo.js — Bardo: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · XGtE · MOoT/TCE · TCE · VRGtR · PHB 2024 · THW 2024 · HoF 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (14 entradas):
     Colegio del Saber                       [PHB 2014] / [PHB 2024]
     Colegio del Valor                       [PHB 2014] / [PHB 2024]
     Colegio del Glamur                      [XGtE] / [PHB 2024]
     Colegio de las Espadas                  [XGtE]
     Colegio de los Susurros                 [XGtE]
     Colegio de la Elocuencia                [MOoT/TCE]
     Colegio de la Creación                  [TCE]
     Colegio de los Espíritus                [VRGtR] / [THW 2024]
     Colegio de la Danza                     [PHB 2024]
     Colegio de la Luna                      [HoF 2024]
   ──────────────────────────────────────────────────────────────────
   Campo `a` de cada rasgo = cómo se usa en combate (lo lee el panel de Acciones):
     "A" Acción · "B" Acción Adicional · "R" Reacción · "O" Otros (sin acción, usos
     limitados o decisión puntual) · combinable ("AB"). Sin `a` = rasgo pasivo.
══════════════════════════════════════════════════════════════════ */

const CLASE_BARDO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Dado de golpe d8. Salvaciones: DES y CAR. Armaduras: ligeras. Armas: simples. Herramientas: 3 instrumentos musicales a tu elección. Habilidades: elige 3 cualesquiera. [2014: armas simples, ballestas de mano, espadas largas, estoques y espadas cortas]"
    },
    {
      n: "Inspiración Bárdica (Bardic Inspiration)",
      nv: 1,
      a: "B",
      d: "Como Acción Adicional inspiras a otra criatura a 60 pies que pueda verte u oírte: gana un Dado de Inspiración Bárdica (d6; d8 en Nv.5, d10 en Nv.10, d12 en Nv.15). Una criatura sólo puede tener un dado a la vez. Durante la siguiente hora, cuando falle una prueba de d20 (prueba de característica, ataque o salvación) puede tirar el dado y sumarlo al d20, quizá convirtiendo el fallo en éxito; el dado se gasta al tirarlo. Usos = mod. CAR (mínimo 1); los recuperas con un descanso largo (corto desde Nv.5). [2014: la criatura debe poder oírte (no basta verte); el dado dura 10 minutos y puede sumarse a cualquier prueba de característica, ataque o salvación (no sólo cuando falla), decidiéndolo tras ver el d20 pero antes de que el DM diga si tiene éxito]"
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador completo. CAR es tu característica de conjuros (CD = 8 + comp. + mod. CAR; ataque = comp. + mod. CAR). Puedes usar un instrumento musical como foco. Trucos: 2 (3 en Nv.4, 4 en Nv.10). Prepara 4 conjuros de Bardo en Nv.1 (5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22 en Nv.2-20); al subir de nivel de Bardo puedes cambiar un truco por otro de la lista de Bardo y un conjuro preparado por otro conjuro de Bardo para el que tengas espacios. Los conjuros que otro rasgo de Bardo te da siempre preparados no cuentan para tu límite de conjuros preparados, pero cuentan como conjuros de Bardo para ti. Los conjuros de nivel 1+ se lanzan con espacios; también como ritual si tienen la etiqueta Ritual. [2014: conoces conjuros en lugar de prepararlos (4 en Nv.1, hasta 22 en Nv.20) y cambias uno al subir de nivel; los trucos no se cambian salvo con Versatilidad Bárdica, opcional de TCE]"
    },
    {
      n: "Pericia (Expertise)",
      nv: 2,
      d: "Ganas Pericia (doble bonificador de competencia) en 2 habilidades en las que seas competente; otras 2 en Nv.9. [2014: 2 habilidades en Nv.3 y 2 más en Nv.10]"
    },
    {
      n: "Aprendiz de Todo (Jack of All Trades)",
      nv: 2,
      d: "Sumas la mitad de tu bonificador de competencia (redondeado hacia abajo) a cualquier prueba de característica que use una competencia de habilidad que no tengas y que no use ya tu bonificador de competencia. Ej.: una prueba de FUE (Atletismo) sin competencia en Atletismo. [2014: cualquier prueba de característica que no incluya ya tu bonificador de competencia]"
    },
    {
      n: "Canción de Descanso (Song of Rest)",
      nv: 2,
      d: "[Sólo 2014] Si tú o tus aliados que oigan tu actuación gastáis Dados de Golpe durante un descanso corto, cada uno recupera 1d6 PG adicionales (1d8 en Nv.9, 1d10 en Nv.13, 1d12 en Nv.17). [Eliminado en 2024]"
    },
    {
      n: "Inspiración Mágica (Magical Inspiration)",
      nv: 2,
      d: "[Sólo 2014, opcional de TCE] Si una criatura con un dado de Inspiración Bárdica tuyo lanza un conjuro que restaura PG o inflige daño, puede tirar ese dado y elegir un objetivo afectado por el conjuro; suma el resultado a los PG recuperados o al daño. Luego se pierde el dado."
    },
    {
      n: "Subclase de Bardo (Colegio Bárdico)",
      nv: 3,
      d: "Eliges una subclase. Concede rasgos en Nv.3, 6 y 14. [2014: Colegio Bárdico]"
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "Ganas la dote Mejora de Característica (o cualquier otra dote para la que cumplas requisitos) en Nv.4, 8, 12 y 16. [2014: +2 a una característica o +1 a dos (máx. 20), o una dote; además otra mejora en Nv.19]"
    },
    {
      n: "Versatilidad Bárdica (Bardic Versatility)",
      nv: 4,
      d: "[Sólo 2014, opcional de TCE] Al alcanzar un nivel de Bardo que concede Mejora de Característica, puedes hacer una de estas dos cosas: sustituir una de las habilidades elegidas para Pericia por otra habilidad en la que seas competente y que no tenga Pericia, o sustituir un truco aprendido con Lanzamiento de Conjuros por otro truco de la lista de Bardo."
    },
    {
      n: "Fuente de Inspiración (Font of Inspiration)",
      nv: 5,
      a: "O",
      d: "Recuperas todos tus usos de Inspiración Bárdica al terminar un descanso corto o largo. Además puedes gastar un espacio de conjuro (sin acción) para recuperar un uso de Inspiración Bárdica. [2014: recuperas los usos con un descanso corto o largo, sin la opción de espacios]"
    },
    {
      n: "Contraencantamiento (Countercharm)",
      nv: 7,
      a: "R",
      d: "Si tú o una criatura a 30 pies falla una salvación contra un efecto que aplique Hechizado o Asustado, puedes usar tu reacción para que repita la salvación con ventaja. [2014: rasgo de Nv.6; como acción inicias una actuación hasta el final de tu siguiente turno: tú y los aliados a 30 pies que te oigan tenéis ventaja en salvaciones contra Asustado y Hechizado]"
    },
    {
      n: "Secretos Mágicos (Magical Secrets)",
      nv: 10,
      d: "Cada vez que subes de nivel de Bardo (incluido el 10) y aumenta el número de conjuros preparados, puedes elegir los nuevos de las listas de Bardo, Clérigo, Druida y Mago; cuentan como conjuros de Bardo para ti. Además, cuando sustituyes un conjuro preparado de esta clase, puedes sustituirlo por uno de esas listas. [2014: aprendes 2 conjuros de cualquier clase en Nv.10, 14 y 18]"
    },
    {
      n: "Inspiración Superior (Superior Inspiration)",
      nv: 18,
      d: "Al tirar Iniciativa, si tienes menos de 2 usos de Inspiración Bárdica, los recuperas hasta tener 2. [2014: rasgo de Nv.20; si tiras Iniciativa sin usos, recuperas 1]"
    },
    {
      n: "Don Épico (Epic Boon)",
      nv: 19,
      d: "Ganas una dote de Don Épico (u otra dote para la que cumplas requisitos). [Sólo 2024; en 2014 es una mejora de característica más]"
    },
    {
      n: "Palabras de Creación (Words of Creation)",
      nv: 20,
      d: "Siempre tienes preparados Power Word Heal y Power Word Kill. Cuando lanzas cualquiera de ellos puedes elegir un segundo objetivo si está a 10 pies del primero. [Sólo 2024]"
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Colegio del Saber [PHB 2014]": [
      {
        n: "Competencias Adicionales",
        nv: 3,
        d: "Ganas competencia en 3 habilidades a tu elección."
      },
      {
        n: "Palabras Cortantes (Cutting Words)",
        nv: 3,
        a: "R",
        d: "Cuando una criatura que veas a 60 pies hace una tirada de ataque, prueba de característica o tirada de daño, puedes usar tu reacción y gastar un uso de Inspiración Bárdica para tirar el dado y restárselo (puedes decidirlo tras la tirada, antes de que el DM determine el resultado). Es inmune si no puede oírte o es inmune a Hechizado."
      },
      {
        n: "Secretos Mágicos Adicionales (Additional Magical Secrets)",
        nv: 6,
        d: "Aprendes 2 conjuros de cualquier clase (truco o de un nivel que puedas lanzar). Cuentan como conjuros de Bardo para ti, pero no cuentan para tu límite de conjuros conocidos."
      },
      {
        n: "Habilidad Incomparable (Peerless Skill)",
        nv: 14,
        a: "O",
        d: "Cuando haces una prueba de característica puedes gastar un uso de Inspiración Bárdica, tirar el dado y sumarlo a la prueba (puedes decidirlo tras tirar, antes de saber el resultado)."
      },
    ],

    "Colegio del Valor [PHB 2014]": [
      {
        n: "Competencias Adicionales",
        nv: 3,
        d: "Ganas competencia con armaduras medias, escudos y armas marciales."
      },
      {
        n: "Inspiración de Combate (Combat Inspiration)",
        nv: 3,
        a: "R",
        d: "Una criatura con un dado de Inspiración Bárdica tuyo puede tirarlo y sumar el resultado al daño de un ataque con arma que acaba de hacer, o usar su reacción para tirarlo y sumarlo a su CA contra un ataque (tras ver la tirada, antes de saber si impacta)."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        a: "A",
        d: "Puedes atacar dos veces en lugar de una cuando realizas la acción de Atacar."
      },
      {
        n: "Magia de Batalla (Battle Magic)",
        nv: 14,
        a: "B",
        d: "Cuando usas tu acción para lanzar un conjuro de Bardo, puedes hacer un ataque con arma como Acción Adicional."
      },
    ],


    /* ── XGtE ── */
    "Colegio del Glamur [XGtE]": [
      {
        n: "Manto de Inspiración (Mantle of Inspiration)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas un uso de Inspiración Bárdica: eliges hasta mod. CAR (mínimo 1) criaturas que veas y que puedan verte a 60 pies; cada una gana PG temporales (5 en Nv.3, 8 en Nv.5, 11 en Nv.10, 14 en Nv.15) y puede usar su reacción para moverse su Velocidad sin provocar ataques de oportunidad."
      },
      {
        n: "Actuación Cautivadora (Enthralling Performance)",
        nv: 3,
        a: "O",
        d: "Tras actuar al menos 1 minuto (cantar, recitar o bailar), hasta mod. CAR (mínimo 1) humanoides que te hayan visto actuar a 60 pies deben superar una salvación de SAB (tu CD de conjuros) o quedar Hechizados: te idolatran, hablan bien de ti y estorban a tus oponentes (sin violencia salvo que ya estuvieran dispuestos). Dura 1 hora; termina si recibe daño, si lo atacas o si te ve atacar a sus aliados. Una vez por descanso corto o largo."
      },
      {
        n: "Manto de Majestad (Mantle of Majesty)",
        nv: 6,
        a: "B",
        d: "Como Acción Adicional lanzas Command sin gastar espacio de conjuro y adoptas una apariencia sobrenatural durante 1 minuto o hasta que termine tu concentración. Mientras dure puedes lanzar Command como Acción Adicional en cada turno sin espacio, y las criaturas que hayas Hechizado fallan automáticamente la salvación. Una vez por descanso largo."
      },
      {
        n: "Majestad Inquebrantable (Unbreakable Majesty)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional adoptas una presencia majestuosa durante 1 minuto o hasta quedar Incapacitado. Cuando una criatura te ataca por primera vez en un turno, debe superar una salvación de CAR (tu CD) o no puede atacarte ese turno y debe elegir otro objetivo o desperdicia el ataque. Si la supera, puede atacarte pero tiene desventaja en las salvaciones contra tus conjuros en tu siguiente turno. Una vez por descanso corto o largo."
      },
    ],

    "Colegio de las Espadas [XGtE]": [
      {
        n: "Competencias Adicionales",
        nv: 3,
        d: "Ganas competencia con armadura media y con la cimitarra. Si eres competente con un arma cuerpo a cuerpo simple o marcial, puedes usarla como foco para tus conjuros de Bardo."
      },
      {
        n: "Estilo de Combate",
        nv: 3,
        d: "Eliges Duelo (+2 al daño con un arma cuerpo a cuerpo en una mano y sin otra arma) o Combate con Dos Armas (sumas tu modificador al daño del segundo ataque)."
      },
      {
        n: "Floritura de la Hoja (Blade Flourish)",
        nv: 3,
        a: "O",
        d: "Cuando realizas la acción de Atacar, tu Velocidad aumenta 10 pies hasta el final del turno y, si impactas con un ataque con arma de la acción, puedes gastar un uso de Inspiración Bárdica para una floritura (sólo una por turno): Defensiva: daño adicional = dado y sumas esa cantidad a tu CA hasta el inicio de tu siguiente turno. Cortante: daño adicional = dado al objetivo y a otra criatura a 5 pies de ti. Móvil: daño adicional = dado, empujas al objetivo 5 pies + dado y puedes usar tu reacción para moverte hasta tu Velocidad a un espacio a 5 pies de él."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        a: "A",
        d: "Puedes atacar dos veces en lugar de una cuando realizas la acción de Atacar."
      },
      {
        n: "Floritura del Maestro (Master's Flourish)",
        nv: 14,
        a: "O",
        d: "Cuando usas una Floritura de la Hoja puedes tirar 1d6 y usarlo en lugar de gastar un dado de Inspiración Bárdica."
      },
    ],

    "Colegio de los Susurros [XGtE]": [
      {
        n: "Cuchillas Psíquicas (Psychic Blades)",
        nv: 3,
        a: "O",
        d: "Cuando impactas a una criatura con un ataque con arma, puedes gastar un uso de Inspiración Bárdica para infligir 2d6 de daño psíquico adicional (3d6 en Nv.5, 5d6 en Nv.10, 8d6 en Nv.15). Sólo una vez por turno."
      },
      {
        n: "Palabras de Terror (Words of Terror)",
        nv: 3,
        a: "O",
        d: "Tras hablar a solas con un humanoide al menos 1 minuto, esa criatura debe superar una salvación de SAB (tu CD) o quedar Asustada de ti o de otra criatura de tu elección durante 1 hora (termina si es atacada o dañada, o ve atacar a sus aliados). Una vez por descanso corto o largo."
      },
      {
        n: "Manto de Susurros (Mantle of Whispers)",
        nv: 6,
        a: "R",
        d: "Cuando un humanoide muere a 30 pies de ti, puedes usar tu reacción para capturar mágicamente su sombra; la conservas hasta que la uses o termines un descanso largo. Como acción, la sombra se desvanece y se transforma en un disfraz: pareces la persona muerta, sana y viva, durante 1 hora o hasta que lo termines como Acción Adicional. Mientras lo llevas accedes a toda la información que el humanoide compartiría con naturalidad con un conocido casual (datos generales de su vida, no secretos), suficiente para hacerte pasar por él. Otra criatura puede ver a través del disfraz con una prueba de SAB (Perspicacia) enfrentada a tu prueba de CAR (Engaño), a la que sumas +5. Una vez que capturas una sombra, no puedes capturar otra hasta terminar un descanso corto o largo."
      },
      {
        n: "Sabiduría de las Sombras (Shadow Lore)",
        nv: 14,
        a: "A",
        d: "Como acción susurras una frase que sólo una criatura de tu elección a 30 pies puede oír. Debe hacer una salvación de SAB contra tu CD de conjuros; la supera automáticamente si no comparte un idioma contigo o no puede oírte, y entonces tu susurro suena a murmullo ininteligible sin efecto. Si falla, queda Hechizada por ti 8 horas o hasta que tú o tus aliados la ataquéis, le hagáis daño o la obliguéis a hacer una tirada de salvación. Cree que conoces su secreto más vergonzoso (tú no lo conoces) y obedece tus órdenes por miedo a que lo reveles; no arriesgará su vida ni luchará por ti salvo que ya estuviera dispuesta, y te concede favores y regalos como a un amigo cercano. Al terminar el efecto no entiende por qué te temía. Una vez por descanso largo."
      },
    ],


    /* ── MOoT/TCE ── */
    "Colegio de la Elocuencia [MOoT/TCE]": [
      {
        n: "Lengua de Plata (Silver Tongue)",
        nv: 3,
        d: "En una prueba de CAR (Persuasión) o CAR (Engaño), un 9 o menos en el d20 cuenta como 10."
      },
      {
        n: "Palabras Desconcertantes (Unsettling Words)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas un uso de Inspiración Bárdica y eliges una criatura a 60 pies: tira el dado; la criatura resta ese número de la siguiente salvación que haga antes del inicio de tu siguiente turno."
      },
      {
        n: "Inspiración Infalible (Unfailing Inspiration)",
        nv: 6,
        d: "Cuando una criatura suma uno de tus dados de Inspiración Bárdica a una prueba, ataque o salvación y la tirada falla, conserva el dado."
      },
      {
        n: "Discurso Universal (Universal Speech)",
        nv: 6,
        a: "A",
        d: "Como acción eliges hasta mod. CAR (mínimo 1) criaturas a 60 pies: durante 1 hora te entienden sea cual sea el idioma. Una vez por descanso largo, o gastando un espacio de conjuro."
      },
      {
        n: "Inspiración Contagiosa (Infectious Inspiration)",
        nv: 14,
        a: "R",
        d: "Cuando una criatura a 60 pies suma tu dado de Inspiración Bárdica a una tirada y tiene éxito, puedes usar tu reacción para dar un dado de Inspiración Bárdica a otra criatura (no tú) que pueda oírte a 60 pies, sin gastar uno de tus usos. Usos = mod. CAR (mínimo 1); se recuperan con un descanso largo."
      },
    ],


    /* ── TCE ── */
    "Colegio de la Creación [TCE]": [
      {
        n: "Mota de Potencial (Mote of Potential)",
        nv: 3,
        d: "Cuando das un dado de Inspiración Bárdica, creas una mota Diminuta que orbita a la criatura (dura hasta que se gasta el dado). Al usarlo: Prueba de característica: tira el dado dos veces y elige el resultado. Ataque: el objetivo y las criaturas de tu elección a 5 pies hacen salvación de CON (tu CD) o sufren daño de trueno = número del dado. Salvación: gana PG temporales = número del dado + mod. CAR (mínimo 1)."
      },
      {
        n: "Actuación de Creación (Performance of Creation)",
        nv: 3,
        a: "A",
        d: "Como acción creas un objeto no mágico a 10 pies (valor ≤ 20 × tu nivel de Bardo en po; tamaño Mediano o menor; Grande en Nv.6, Enorme en Nv.14) que dura horas = comp. Un solo objeto a la vez. Una vez por descanso largo, o gastando un espacio de conjuro de nivel 2+."
      },
      {
        n: "Actuación Animadora (Animating Performance)",
        nv: 6,
        a: "A",
        d: "Como acción animas un objeto no mágico Grande o menor a 30 pies de ti que nadie lleve ni sostenga, con la ficha de Objeto Danzante (CA 16, PG 10 + 5 × nivel de Bardo, Velocidad 30 pies/volar 30; ataque Golpe Reforzado con Fuerza: tu bonificador de ataque de conjuros, 1d10 + comp. de fuerza). Es amistoso, te obedece y dura 1 hora, hasta que llegue a 0 PG o hasta que mueras. Comparte tu iniciativa y actúa justo después de ti; se mueve y usa su reacción por su cuenta, pero su única acción es Esquivar salvo que uses una Acción Adicional para ordenarle otra (puedes ordenárselo como parte de la misma Acción Adicional de Inspiración Bárdica). Si estás Incapacitado, puede realizar cualquier acción a su elección. Una vez por descanso largo, o gastando un espacio de conjuro de nivel 3+. Sólo puedes tener un objeto animado a la vez: si animas otro, el anterior queda inerte."
      },
      {
        n: "Crescendo Creativo (Creative Crescendo)",
        nv: 14,
        d: "Cuando usas Actuación de Creación puedes crear varios objetos a la vez (número = mod. CAR, mínimo 2): sólo uno del tamaño máximo, los demás Pequeños o Diminutos. Ya no estás limitado por el valor en po del objeto. Cuando creas un objeto puedes terminar uno anterior."
      },
    ],


    /* ── VRGtR ── */
    "Colegio de los Espíritus [VRGtR]": [
      {
        n: "Susurros Guía (Guiding Whispers)",
        nv: 3,
        d: "Aprendes el truco Guidance (no cuenta para tus trucos conocidos); para ti tiene alcance de 60 pies."
      },
      {
        n: "Foco Espiritual (Spiritual Focus)",
        nv: 3,
        d: "Puedes usar como foco de lanzamiento una vela, bola de cristal, calavera, tablero espiritista o baraja tarokka. Desde Nv.6, cuando lanzas un conjuro de Bardo que inflige daño o cura usando ese foco, tiras 1d6 y lo sumas a una tirada de daño o a la curación."
      },
      {
        n: "Relatos del Más Allá (Tales from Beyond)",
        nv: 3,
        a: "BA",
        d: "Mientras sostienes tu Foco Espiritual, como Acción Adicional gastas un uso de Inspiración Bárdica y tiras el dado de Inspiración Bárdica en la tabla Relatos de Espíritus; guardas el relato hasta aplicarlo o hasta un descanso corto o largo. Sólo puedes guardar un relato a la vez: tirar de nuevo en la tabla termina de inmediato el efecto del relato anterior. Como acción eliges una criatura que veas a 30 pies (puedes ser tú) para recibir el efecto (CD = tu CD de conjuros); una vez aplicado, no puedes volver a aplicarlo hasta que lo saques otra vez. 1 Astuto Animal: durante 10 min, cuando el objetivo hace una prueba de INT, SAB o CAR puede tirar un dado extra justo después del d20 y sumarlo a la prueba; es del mismo tipo que tu dado de Inspiración Bárdica. 2 Duelista Célebre: ataque de conjuro cuerpo a cuerpo; 2 dados + mod. CAR de daño de fuerza. 3 Amigos Queridos: el objetivo y otra criatura a 5 pies ganan PG temporales = dado + mod. CAR. 4 Fugitivo: el objetivo puede usar de inmediato su reacción para teletransportarse hasta 30 pies a un espacio libre que vea; al hacerlo puede elegir hasta mod. CAR (mínimo 0) criaturas que vea a 30 pies de él para que usen de inmediato esa misma reacción. 5 Vengador: 1 min, quien le impacte cuerpo a cuerpo sufre daño de fuerza = dado. 6 Viajero: PG temporales = dado + nivel de Bardo; +10 pies de Velocidad y +1 CA mientras los tenga. 7 Embaucador: salvación de SAB o 2 dados de daño psíquico e Incapacitado hasta el final de su siguiente turno. 8 Fantasma: invisible hasta el final de su siguiente turno o hasta que impacte a una criatura con un ataque; si impacta durante la invisibilidad, esa criatura sufre 1 dado de daño necrótico y queda Asustada del objetivo hasta el final de su siguiente turno. 9 Bruto: cada criatura de su elección que vea a 30 pies de él hace una salvación de FUE; si falla, sufre 3 dados de daño de trueno y cae Tumbada; si la supera, sufre la mitad del daño y no cae Tumbada. 10 Dragón: cono de fuego de 30 pies, salvación de DES, 4 dados de fuego (mitad si supera). 11 Ángel: recupera 2 dados + mod. CAR PG y terminas una condición (Cegado, Ensordecido, Paralizado, Petrificado, Envenenado). 12 Manipulador Mental: salvación de INT o 3 dados de psíquico y Aturdido hasta el final de su siguiente turno."
      },
      {
        n: "Sesión Espiritista (Spirit Session)",
        nv: 6,
        a: "O",
        d: "Puedes hacer un ritual de 1 hora (en un descanso corto o largo) con hasta comp. criaturas voluntarias (incluido tú), usando tu foco espiritual: al terminar aprendes temporalmente un conjuro de cualquier clase, de nivel ≤ número de participantes, de un nivel que puedas lanzar y de la escuela de adivinación o nigromancia. Cuenta como conjuro de Bardo pero no cuenta para tu límite de conjuros de Bardo conocidos; lo conoces hasta que empieces un descanso largo. No puedes repetir el ritual hasta que empieces un descanso largo."
      },
      {
        n: "Conexión Mística (Mystical Connection)",
        nv: 14,
        d: "Cuando tiras en la tabla de Relatos de Espíritus, puedes tirar el dado dos veces y elegir uno de los dos efectos; si sacas el mismo número, eliges cualquier efecto de la tabla."
      },
    ],


    /* ── PHB 2024 ── */
    "Colegio del Saber [PHB 2024]": [
      {
        n: "Competencias Adicionales",
        nv: 3,
        d: "Ganas competencia en 3 habilidades a tu elección."
      },
      {
        n: "Palabras Cortantes (Cutting Words)",
        nv: 3,
        a: "R",
        d: "Cuando una criatura que veas a 60 pies hace una tirada de daño o tiene éxito en una prueba de característica o tirada de ataque, puedes usar tu reacción y gastar un uso de Inspiración Bárdica: tiras el dado y restas el número a la tirada de la criatura, reduciendo el daño o convirtiendo un éxito en fallo."
      },
      {
        n: "Descubrimientos Mágicos (Magical Discoveries)",
        nv: 6,
        d: "Aprendes 2 conjuros de tu elección de las listas de Clérigo, Druida y Mago (truco o conjuro de un nivel que puedas lanzar). Siempre los tienes preparados; al subir de nivel de Bardo puedes cambiar uno por otro de esas listas."
      },
      {
        n: "Habilidad Incomparable (Peerless Skill)",
        nv: 14,
        a: "O",
        d: "Cuando fallas una prueba de característica o una tirada de ataque, puedes gastar un uso de Inspiración Bárdica: tiras el dado y lo sumas al d20, quizá convirtiendo el fallo en éxito. Si sigue fallando, no se gasta el uso."
      },
    ],

    "Colegio del Valor [PHB 2024]": [
      {
        n: "Inspiración de Combate (Combat Inspiration)",
        nv: 3,
        a: "R",
        d: "Una criatura que tenga un dado de Inspiración Bárdica tuyo puede usarlo para: Defensa: cuando una tirada de ataque la impacta, puede usar su reacción para tirar el dado y sumarlo a su CA contra ese ataque, quizá haciendo que falle; Ofensa: tras impactar con una tirada de ataque, tirar el dado y sumarlo al daño."
      },
      {
        n: "Entrenamiento Marcial (Martial Training)",
        nv: 3,
        d: "Ganas competencia con armas marciales y entrenamiento con armadura media y escudos. Puedes usar un arma simple o marcial como foco para tus conjuros de Bardo."
      },
      {
        n: "Ataque Extra",
        nv: 6,
        a: "A",
        d: "Puedes atacar dos veces en lugar de una cuando realizas la acción de Atacar. Además puedes sustituir uno de esos ataques por el lanzamiento de uno de tus trucos con tiempo de lanzamiento de una acción."
      },
      {
        n: "Magia de Batalla (Battle Magic)",
        nv: 14,
        a: "B",
        d: "Tras lanzar un conjuro con tiempo de lanzamiento de una acción, puedes hacer un ataque con arma como Acción Adicional."
      },
    ],

    "Colegio del Glamur [PHB 2024]": [
      {
        n: "Magia Seductora (Beguiling Magic)",
        nv: 3,
        a: "O",
        d: "Siempre tienes preparados Charm Person y Mirror Image. Además, justo después de lanzar un conjuro de Encantamiento o Ilusión con un espacio, puedes obligar a una criatura que veas a 60 pies a hacer una salvación de SAB (tu CD): si falla queda Hechizada o Asustada (a tu elección) durante 1 minuto, repitiendo la salvación al final de cada uno de sus turnos. Una vez por descanso largo, o gastando un uso de Inspiración Bárdica (sin acción) para recuperarlo."
      },
      {
        n: "Manto de Inspiración (Mantle of Inspiration)",
        nv: 3,
        a: "B",
        d: "Como Acción Adicional gastas un uso de Inspiración Bárdica y tiras el dado: eliges hasta mod. CAR (mínimo 1) otras criaturas a 60 pies; cada una gana PG temporales = el doble del resultado y puede usar su reacción para moverse su Velocidad sin provocar ataques de oportunidad."
      },
      {
        n: "Manto de Majestad (Mantle of Majesty)",
        nv: 6,
        a: "B",
        d: "Siempre tienes preparado Command. Como Acción Adicional lanzas Command sin espacio y adoptas una apariencia sobrenatural 1 minuto o hasta que termine tu concentración; mientras dure puedes lanzar Command como Acción Adicional sin espacio en cada turno, y las criaturas Hechizadas por ti fallan automáticamente sus salvaciones contra Command. Una vez por descanso largo, o gastando un espacio de nivel 3+."
      },
      {
        n: "Majestad Inquebrantable (Unbreakable Majesty)",
        nv: 14,
        a: "B",
        d: "Como Acción Adicional adoptas una presencia majestuosa durante 1 minuto o hasta quedar Incapacitado. Mientras dure, la primera vez en un turno que una criatura te impacta con una tirada de ataque, debe superar una salvación de CAR (tu CD) o el ataque falla. Una vez por descanso corto o largo."
      },
    ],

    "Colegio de la Danza [PHB 2024]": [
      {
        n: "Juego de Pies Deslumbrante (Dazzling Footwork)",
        nv: 3,
        a: "O",
        d: "Mientras no lleves armadura ni empuñes un escudo, ganas estos beneficios. Virtuoso de la Danza: ventaja en las pruebas de CAR (Interpretación) que impliquen bailar. Defensa sin Armadura: tu CA base = 10 + mod. DES + mod. CAR. Golpes Ágiles: cuando gastas un uso de Inspiración Bárdica como parte de una acción, acción adicional o reacción, puedes hacer un ataque desarmado como parte de ella. Daño Bárdico: puedes usar DES en lugar de FUE en las tiradas de ataque desarmado y, al impactar, infligir daño contundente = dado de Inspiración Bárdica + mod. DES en lugar del normal (esta tirada no gasta el dado)."
      },
      {
        n: "Movimiento Inspirador (Inspiring Movement)",
        nv: 6,
        a: "R",
        d: "Cuando un enemigo que veas termina su turno a 5 pies de ti, puedes usar tu reacción y gastar un uso de Inspiración Bárdica para moverte hasta la mitad de tu Velocidad; luego un aliado a 30 pies puede moverse también hasta la mitad de su Velocidad usando su reacción. Este movimiento no provoca ataques de oportunidad."
      },
      {
        n: "Juego de Pies Conjunto (Tandem Footwork)",
        nv: 6,
        a: "O",
        d: "Al tirar Iniciativa, si no estás Incapacitado puedes gastar un uso de Inspiración Bárdica: tiras el dado y tú y cada aliado a 30 pies que pueda verte u oírte ganáis un bonificador a la Iniciativa igual al resultado."
      },
      {
        n: "Evasión Guía (Leading Evasion)",
        nv: 14,
        d: "Cuando haces una salvación de DES para sufrir la mitad del daño, no sufres daño si la superas y sólo la mitad si fallas. Puedes compartir este beneficio con las criaturas a 5 pies de ti que hagan la misma salvación. No funciona si estás Incapacitado."
      },
    ],

    /* ── RAVENLOFT: THE HORRORS WITHIN (THW, 2024) ── */
    "Colegio de los Espíritus [THW 2024]": [
      {
        n: "Canalizador (Channeler)",
        nv: 3,
        d: "Aprendes a contactar con espíritus de más allá de la tumba y dejas que su poder y su saber fluyan a través de ti. Susurros Guía (Guiding Whispers): conoces el truco Guidance; al lanzarlo tiene alcance de 60 pies. Foco Espiritual (Spiritual Focus): ganas un Juego de mesa (Gaming Set: baraja de cartas), con el que tienes competencia, y puedes usarlo o uno de estos objetos como foco de lanzamiento para tus conjuros de Bardo: Arcane Focus (cristal u orbe), Candle o Ink Pen."
      },
      {
        n: "Espíritus del Más Allá (Spirits from Beyond)",
        nv: 3,
        a: "AB",
        d: "Puedes invocar espíritus de los muertos para potenciarte a ti y a tus aliados. Cuando usas una Acción Adicional para dar un dado de Inspiración Bárdica a una criatura, puedes invocar el poder de un espíritu aleatorio: tira el dado de Inspiración Bárdica y consulta la tabla Espíritus del Más Allá. El espíritu queda canalizado hasta que lo liberes o termines un Descanso Corto o Largo. Canalización Controlada (Controlled Channeling): como Acción Adicional, gastas un uso de Inspiración Bárdica y canalizas un espíritu concreto, elegido en la tabla en lugar de tirar; su número debe ser menor o igual que el mayor número de tu dado de Inspiración Bárdica (con un d8 puedes elegir cualquier espíritu hasta el 8, la Sombra, inclusive). Liberar un Espíritu (Unleashing a Spirit): como acción Mágica, liberas uno de tus espíritus canalizados; eliges como objetivo a una criatura que veas a 30 pies de ti y el espíritu surte efecto; si su efecto exige una salvación, la CD es tu CD de conjuros de Bardo. En la tabla, «dado» = una tirada de tu dado de Inspiración Bárdica (2 dados = dos tiradas). Tabla (dado de Inspiración Bárdica: espíritu y efecto al liberarlo): 1: Amado (Beloved) — el objetivo recupera PG = dado + mod. CAR; 2: Tirador Certero (Sharpshooter) — el objetivo sufre daño de fuerza = dado + mod. CAR; 3: Vengador (Avenger) — hasta el final de tu siguiente turno, toda criatura que impacte al objetivo con una tirada de ataque cuerpo a cuerpo sufre daño de fuerza = dado; 4: Renegado (Renegade) — el objetivo puede usar de inmediato una Reacción para teletransportarse hasta 30 pies a un espacio libre que vea; 5: Adivino (Fortune Teller) — el objetivo tiene Ventaja en las Pruebas de d20 hasta el inicio de tu siguiente turno; 6: Viajero (Wayfarer) — el objetivo gana PG temporales = dado + nivel de Bardo y, mientras los tenga, su Velocidad aumenta 10 pies; 7: Embaucador (Trickster) — el objetivo hace una salvación de SAB: si falla, sufre daño psíquico = 2 dados y queda Hechizado hasta el inicio de tu siguiente turno; si la supera, sufre solo la mitad del daño; 8: Sombra (Shade) — el objetivo tiene la condición Invisible hasta el final de su siguiente turno o hasta que haga una tirada de ataque, inflija daño o lance un conjuro; cuando termina la invisibilidad, cada criatura en una Emanación de 5 pies que parte del objetivo debe superar una salvación de CON o sufrir daño necrótico = 2 dados; 9: Pirómano (Arsonist) — el objetivo hace una salvación de DES: si falla, sufre daño de fuego = 4 dados; si la supera, la mitad; 10: Cobarde (Coward) — el objetivo y cada criatura de tu elección en una Emanación de 30 pies que parte del objetivo deben superar una salvación de SAB o quedar Asustados hasta el inicio de tu siguiente turno; mientras una criatura esté Asustada, su Velocidad se reduce a la mitad (redondeando hacia abajo) y puede usar una acción o una Acción Adicional, no ambas; 11: Bruto (Brute) — cada criatura de tu elección en una Emanación de 30 pies que parte del objetivo hace una salvación de FUE: si falla, sufre daño de trueno = 3 dados y queda Tumbada; si la supera, sufre solo la mitad del daño; 12: Sacerdote (Priest) — el objetivo recupera PG = 2 dados y termina en él una de estas condiciones, a tu elección: Cegado, Hechizado, Ensordecido, Paralizado, Envenenado o Aturdido."
      },
      {
        n: "Canalización Potenciada (Empowered Channeling)",
        nv: 6,
        a: "O",
        d: "Tu capacidad de canalizar espíritus mejora. Poder del Más Allá (Power from Beyond): una vez por turno, cuando lanzas con un espacio de conjuro un conjuro de Bardo que inflige daño o restaura PG, tira 1d6 y suma el resultado a una de las tiradas de daño del conjuro o al total de PG que restaura. Manifestación Espiritual (Spiritual Manifestation): siempre tienes preparado Spirit Guardians; puedes lanzarlo una vez sin espacio de conjuro y recuperas esa capacidad al terminar un Descanso Largo. Siempre que lances el conjuro, puedes modificarlo para que los espíritus también protejan de amenazas terrenales: tú y los aliados dentro de la Emanación del conjuro tenéis Cobertura Media. Una vez que modificas el conjuro así, no puedes volver a hacerlo hasta terminar un Descanso Corto o Largo."
      },
      {
        n: "Conexión Mística (Mystical Connection)",
        nv: 14,
        d: "Dominas a los espíritus que invocas. Cuando tiras en la tabla Espíritus del Más Allá, puedes tirar el dado dos veces y elegir cuál de los dos efectos conceder. Si sacas el mismo número en ambos dados, en su lugar puedes elegir cualquier efecto de la tabla."
      },
    ],

    /* ── FORGOTTEN REALMS: HEROES OF FAERÛN (HoF, 2024) ── */
    "Colegio de la Luna [HoF 2024]": [
      {
        n: "Inspiración de la Luna (Moon's Inspiration)",
        nv: 3,
        a: "BO",
        d: "El poder primigenio y cambiante de la luna fluye por ti y te concede estos beneficios. Eclipse Inspirado (Inspired Eclipse): cuando usas una Acción Adicional para dar un dado de Inspiración Bárdica a una criatura, puedes obtener la condición Invisible y teletransportarte hasta 30 pies a un espacio libre que veas como parte de esa Acción Adicional. Esta invisibilidad dura hasta el inicio de tu siguiente turno y termina antes, de inmediato, después de que hagas una tirada de ataque, inflijas daño o lances un conjuro. Vitalidad Lunar (Lunar Vitality): una vez por turno, cuando restauras PG a una criatura con un conjuro, puedes gastar un dado de Inspiración Bárdica y aumentar los PG restaurados en una cantidad igual a una tirada de ese dado; además, la Velocidad de la criatura aumenta 10 pies hasta el final de su siguiente turno."
      },
      {
        n: "Saber Primigenio (Primal Lore)",
        nv: 3,
        d: "Aprendes Druídico (Druidic) y un truco de la lista de conjuros de Druida. Cuenta como conjuro de Bardo para ti, pero no cuenta para el número de trucos que conoces. Cada vez que subes un nivel de Bardo, puedes sustituir este truco por otro truco a tu elección de la lista de conjuros de Druida. Además, eliges una de estas habilidades y ganas Competencia en ella: Trato con Animales, Perspicacia, Medicina, Naturaleza, Percepción o Supervivencia."
      },
      {
        n: "Bendición de la Luz de la Luna (Blessing of Moonlight)",
        nv: 6,
        a: "O",
        d: "Siempre tienes preparado el conjuro Moonbeam. Cuando lo lanzas, puedes modificarlo para que brilles tenuemente mientras el conjuro esté activo: emites Luz Tenue hasta 5 pies y, cada vez que una criatura falla su tirada de salvación contra los efectos de este Moonbeam, otra criatura de tu elección que veas a 60 pies de ti recupera 2d4 PG. Una vez que usas este rasgo para modificar un lanzamiento de Moonbeam, no puedes volver a usarlo hasta terminar un Descanso Largo."
      },
      {
        n: "Esplendor del Atardecer (Eventide's Splendor)",
        nv: 14,
        d: "Te impregnas del poder de la luna y mejoras tu Inspiración de la Luna de estos modos. Sombra de la Luna Nueva (Shadow of the New Moon): cuando usas Eclipse Inspirado, la criatura que recibió el dado de Inspiración Bárdica también puede obtener la condición Invisible y usar de inmediato una Reacción para teletransportarse hasta 30 pies a un espacio libre que vea; permanece Invisible hasta el inicio de su siguiente turno. Vivacidad de la Luna Llena (Vibrance of the Full Moon): cuando usas Vitalidad Lunar, puedes tirar 1d6 y usar el número obtenido en lugar de gastar un dado de Inspiración Bárdica."
      },
    ],
  },
};
