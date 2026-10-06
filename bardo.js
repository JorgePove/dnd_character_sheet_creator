/* ══════════════════════════════════════════════════════════════════
   bardo.js — Bardo: rasgos de clase y subclases
   ──────────────────────────────────────────────────────────────────
   Texto de la clase base: reglas 2024 (PHB 2024) con las diferencias
   importantes de 2014 entre corchetes. Cada subclase lleva en su clave la
   fuente y la edición a la que corresponde.
   Fuentes de subclases: PHB 2014 · XGtE · MOoT/TCE · TCE · VRGtR · PHB 2024
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (12 entradas):
     Colegio del Saber            [PHB 2014] / [PHB 2024]
     Colegio del Valor            [PHB 2014] / [PHB 2024]
     Colegio del Glamur           [XGtE] / [PHB 2024]
     Colegio de las Espadas       [XGtE]
     Colegio de los Susurros      [XGtE]
     Colegio de la Elocuencia     [MOoT/TCE]
     Colegio de la Creación       [TCE]
     Colegio de los Espíritus     [VRGtR]
     Colegio de la Danza          [PHB 2024]
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
      d: "Como Acción Adicional inspiras a otra criatura a 60 pies que pueda verte u oírte: gana un Dado de Inspiración Bárdica (d6; d8 en Nv.5, d10 en Nv.10, d12 en Nv.15). Una criatura sólo puede tener un dado a la vez. Durante la siguiente hora, cuando falle una prueba de d20 (prueba de característica, ataque o salvación) puede tirar el dado y sumarlo al d20, quizá convirtiendo el fallo en éxito; el dado se gasta al tirarlo. Usos = mod. CAR (mínimo 1); los recuperas con un descanso largo (corto desde Nv.5). [2014: el dado se usa en 10 minutos, y se añade antes de saber si la prueba tiene éxito o falla]"
    },
    {
      n: "Lanzamiento de Conjuros",
      nv: 1,
      d: "Lanzador completo. CAR es tu característica de conjuros (CD = 8 + comp. + mod. CAR; ataque = comp. + mod. CAR). Puedes usar un instrumento musical como foco. Trucos: 2 (3 en Nv.4, 4 en Nv.10). Prepara 4 conjuros de Bardo en Nv.1 (5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22 en Nv.2-20); al subir de nivel de Bardo puedes cambiar un conjuro preparado. Los conjuros de nivel 1+ se lanzan con espacios; también como ritual si tienen la etiqueta Ritual. [2014: conoces conjuros en lugar de prepararlos (4 en Nv.1, hasta 22 en Nv.20) y cambias uno al subir de nivel]"
    },
    {
      n: "Pericia (Expertise)",
      nv: 2,
      d: "Ganas Pericia (doble bonificador de competencia) en 2 habilidades en las que seas competente; otras 2 en Nv.9. [2014: 2 habilidades en Nv.3 y 2 más en Nv.10]"
    },
    {
      n: "Aprendiz de Todo (Jack of All Trades)",
      nv: 2,
      d: "Sumas la mitad de tu bonificador de competencia (redondeado hacia abajo) a cualquier prueba de característica en la que no tengas competencia y que no use ya tu bonificador de competencia."
    },
    {
      n: "Canción de Descanso (Song of Rest)",
      nv: 2,
      d: "[Sólo 2014] Si tú o tus aliados que oigan tu actuación gastáis Dados de Golpe durante un descanso corto, cada uno recupera 1d6 PG adicionales (1d8 en Nv.9, 1d10 en Nv.13, 1d12 en Nv.17). [Eliminado en 2024]"
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
      d: "Cada vez que subes de nivel de Bardo y aumenta el número de conjuros preparados, puedes elegir los nuevos de las listas de Bardo, Clérigo, Druida y Mago; cuentan como conjuros de Bardo para ti. [2014: aprendes 2 conjuros de cualquier clase en Nv.10, 14 y 18]"
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
        d: "Como Acción Adicional gastas un uso de Inspiración Bárdica: hasta mod. CAR (mínimo 1) criaturas que veas a 60 pies ganan PG temporales (5 en Nv.3, 8 en Nv.5, 11 en Nv.10, 14 en Nv.15) y pueden usar su reacción para moverse su Velocidad sin provocar ataques de oportunidad."
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
        d: "Ganas competencia con armadura media y con la cimitarra. Puedes usar un arma cuerpo a cuerpo simple o marcial como foco para tus conjuros de Bardo."
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
        d: "Cuando un humanoide muere a 30 pies, puedes usar tu reacción para capturar su sombra. Como acción adoptas su apariencia 1 hora (o hasta que lo termines), accedes a información que compartiría con naturalidad; para descubrir el disfraz hace falta una prueba de Perspicacia enfrentada a tu Engaño (+5). Una vez por descanso corto o largo."
      },
      {
        n: "Sabiduría de las Sombras (Shadow Lore)",
        nv: 14,
        a: "A",
        d: "Como acción susurras a una criatura a 30 pies: debe superar una salvación de SAB (tu CD) o quedar Hechizada 8 horas (obedece tus órdenes por miedo a que reveles su secreto, sin arriesgar su vida ni luchar salvo que ya lo estuviera). Una vez por descanso largo."
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
        d: "Como acción animas un objeto Grande o menor a 30 pies (no llevado ni sostenido) con la ficha de Objeto Danzante (CA 16, PG 10 + 5 × nivel de Bardo, Velocidad 30 pies/volar 30; ataque Golpe Reforzado con Fuerza: tu bonificador de ataque de conjuros, 1d10 + comp. de fuerza). Te obedece, comparte tu iniciativa (actúa tras ti, sólo Esquivar salvo que le ordenes con una Acción Adicional) y dura 1 hora. Una vez por descanso largo, o gastando un espacio de nivel 3+."
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
        d: "Como Acción Adicional gastas un uso de Inspiración Bárdica y tiras el dado en la tabla Relatos de Espíritus; guardas el relato hasta aplicarlo o hasta un descanso corto o largo (uno a la vez). Como acción eliges una criatura que veas a 30 pies (puedes ser tú) para recibir el efecto (CD = tu CD de conjuros). 1 Astuto Animal: 10 min, +1 dado extra a sus pruebas de INT/SAB/CAR. 2 Duelista Célebre: ataque de conjuro cuerpo a cuerpo; 2 dados + mod. CAR de daño de fuerza. 3 Amigos Queridos: el objetivo y otra criatura a 5 pies ganan PG temporales = dado + mod. CAR. 4 Fugitivo: reacción para teletransportarse 30 pies. 5 Vengador: 1 min, quien le impacte cuerpo a cuerpo sufre daño de fuerza = dado. 6 Viajero: PG temporales = dado + nivel de Bardo; +10 pies de Velocidad y +1 CA mientras los tenga. 7 Embaucador: salvación de SAB o 2 dados de daño psíquico e Incapacitado hasta el final de su siguiente turno. 8 Fantasma: invisible hasta el final de su siguiente turno o hasta que impacte. 9 Bruto: las criaturas de su elección a 30 pies hacen salvación de FUE o sufren 3 dados de trueno y caen Tumbadas. 10 Dragón: cono de fuego de 30 pies, salvación de DES, 4 dados de fuego (mitad si supera). 11 Ángel: recupera 2 dados + mod. CAR PG y terminas una condición (Cegado, Ensordecido, Paralizado, Petrificado, Envenenado). 12 Manipulador Mental: salvación de INT o 3 dados de psíquico y Aturdido hasta el final de su siguiente turno."
      },
      {
        n: "Sesión Espiritista (Spirit Session)",
        nv: 6,
        a: "O",
        d: "Puedes hacer un ritual de 1 hora (en un descanso) con hasta comp. criaturas voluntarias (incluido tú), usando tu foco espiritual: al terminar aprendes temporalmente un conjuro de cualquier clase, de nivel ≤ número de participantes y ≤ al máximo que puedas lanzar, de adivinación o nigromancia. Cuenta como conjuro de Bardo. Una vez por descanso largo."
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
        d: "Una criatura que tenga un dado de Inspiración Bárdica tuyo puede usarlo para: Defensa: al ser atacada, usar su reacción para tirar el dado y sumarlo a su CA contra ese ataque; Ofensa: tras impactar con una tirada de ataque, tirar el dado y sumarlo al daño."
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
        d: "Como Acción Adicional gastas un uso de Inspiración Bárdica y tiras el dado: hasta mod. CAR (mínimo 1) criaturas a 60 pies ganan PG temporales = el doble del resultado y pueden usar su reacción para moverse su Velocidad sin provocar ataques de oportunidad."
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
        d: "Virtuoso de la Danza: ventaja en pruebas de Interpretación que impliquen bailar. Defensa sin Armadura: sin armadura ni escudo, tu CA base = 10 + mod. DES + mod. CAR. Golpes Ágiles: cuando gastas un uso de Inspiración Bárdica como parte de una acción, acción adicional o reacción, puedes hacer un ataque desarmado como parte de ella. Daño Bárdico: puedes usar DES en tus ataques desarmados y, al impactar, infligir daño contundente = dado de Inspiración Bárdica + mod. DES en lugar del normal (sin gastar el dado)."
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
  },
};
