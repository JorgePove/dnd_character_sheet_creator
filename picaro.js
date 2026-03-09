/* ══════════════════════════════════════════════════════════════════
   picaro.js — Pícaro: rasgos de clase y subclases completas
   ──────────────────────────────────────────────────────────────────
   Fuentes:
     PHB 2014 · PHB 2024
     Sword Coast Adventurer's Guide (SCAG)
     Xanathar's Guide to Everything (XGtE)
     Tasha's Cauldron of Everything (TCE)
   ──────────────────────────────────────────────────────────────────
   SUBCLASES (13 entradas):
     Ladrón                  [PHB 2014] / [PHB 2024]
     Asesino                 [PHB 2014] / [PHB 2024]
     Tramposo Arcano         [PHB 2014] / [PHB 2024]
     Maestro de Intrigas     [SCAG]     (📌 reimpreso en XGtE)
     Bocazas                 [SCAG]     (📌 reimpreso en XGtE)
     Explorador              [XGtE]
     Espadachín              [XGtE]
     Inquisitivo             [XGtE]
     Fantasma                [TCE]
     Cuchillo de Alma        [TCE]
══════════════════════════════════════════════════════════════════ */

const CLASE_PICARO = {

  /* ══════════════════════════════════════════════════════════════
     RASGOS DE CLASE
  ══════════════════════════════════════════════════════════════ */
  rasgos: [
    {
      n: "Competencias",
      nv: 1,
      d: "Armaduras ligeras. Armas simples, ballestas de mano, espadas largas, rapieras y espadas cortas. Herramientas de ladrón. Salvaciones: DES e INT. Habilidades: elige 4 entre Acrobacias, Atletismo, Engaño, Perspicacia, Intimidación, Investigación, Percepción, Actuación, Persuasión, Juego de Manos y Sigilo."
    },
    {
      n: "Experiencia",
      nv: 1,
      d: "Elige 2 de tus competencias de habilidad o herramientas de ladrón: tu bonificador de competencia se duplica en esas tiradas. En Nv.6 elige otras 2."
    },
    {
      n: "Ataque Furtivo",
      nv: 1,
      d: "1/turno puedes infligir daño extra cuando golpeas a una criatura con arma de ataque con finura o a distancia, si tienes ventaja en la tirada de ataque O si hay un aliado a 5 pies del objetivo (sin desventaja tu mismo). Daño: 1d6 (Nv.1) → 2d6 (Nv.3) → 3d6 (Nv.5) → 4d6 (Nv.7) → 5d6 (Nv.9) → 6d6 (Nv.11) → 7d6 (Nv.13) → 8d6 (Nv.15) → 9d6 (Nv.17) → 10d6 (Nv.19)."
    },
    {
      n: "Jerga de Ladrones",
      nv: 1,
      d: "Conoces la Jerga de Ladrones, una mezcla secreta de dialecto, argot y código que permite ocultar mensajes en conversaciones normales. También puedes dejar mensajes escritos que solo otros que conozcan la jerga entienden."
    },
    {
      n: "Acción Astuta",
      nv: 2,
      d: "Como AA puedes: Ocultarte (Esconderse), Desengancharte (Desengancharse) o Correr (Correr). En Nv.17 (Esquivar Escurridizamente): puedes también Esquivar como AA."
    },
    {
      n: "Arquetipo Pícaro",
      nv: 3,
      d: "Eliges tu subclase (Arquetipo Pícaro / Arquetipo Granuja). Otorga rasgos en Nv.3, 9, 13 y 17."
    },
    {
      n: "Mejora de Característica",
      nv: 4,
      d: "+2 a una característica o +1 a dos (máx. 20). También en Nv.8, 10, 12, 16 y 19. Puedes tomar una dote en su lugar. (El Pícaro tiene más ASIs que otras clases excepto el Guerrero.)"
    },
    {
      n: "Esquiva Asombrosa",
      nv: 5,
      d: "Reacción: cuando un atacante que puedas ver te golpea, reduces el daño del ataque a la mitad."
    },
    {
      n: "Evasión",
      nv: 7,
      d: "Cuando haces una tirada de salvación de DES contra un efecto con daño en área: si superas, no recibes daño; si fallas, solo recibes la mitad."
    },
    {
      n: "Habilidades Confiables",
      nv: 11,
      d: "Cuando haces una prueba de habilidad con competencia, trata cualquier resultado de d20 de 9 o menos como un 10."
    },
    {
      n: "Mente Escurridiza",
      nv: 15,
      d: "Ganas competencia en tiradas de salvación de SAB."
    },
    {
      n: "Escurridizo",
      nv: 18,
      d: "No puedes ser rastreado por medios no mágicos. Los ataques de oportunidad contra ti siempre tienen desventaja."
    },
    {
      n: "Golpe de Suerte",
      nv: 20,
      d: "Si tu ataque falla a una criatura a la que podrías aplicar Ataque Furtivo, puedes tirar 1d6. Con 1-5 fallas igual. Con 6 el ataque impacta."
    },
    {
      n: "Golpe de Suerte [PHB 2024]",
      nv: 20,
      d: "(PHB 2024) 1/turno cuando aplicas Ataque Furtivo a una criatura, puedes forzarla a superar una salvación DEX (CD = 8 + comp + mod DES) o quedará Aturdida hasta el inicio de tu siguiente turno."
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     SUBCLASES (ARQUETIPOS PÍCAROS)
  ══════════════════════════════════════════════════════════════ */
  subclases: {

    /* ── PHB 2014 ── */
    "Ladrón [PHB 2014]": [
      {
        n: "Manos Rápidas",
        nv: 3,
        d: "Usando la AA de Acción Astuta puedes también: hacer una prueba de DES (Juego de Manos), usar herramientas de ladrón para desactivar una trampa o abrir una cerradura, o tomar la acción de Usar Objeto."
      },
      {
        n: "Trepador Ágil",
        nv: 3,
        d: "Escalar ya no te cuesta movimiento adicional. Además, cuando haces un Salto de Carrera, la distancia que puedes cubrir aumenta en pies = mod DES."
      },
      {
        n: "Posición de Segundo Piso",
        nv: 9,
        d: "Cuando atacas a una criatura desde una altura mayor que ella (posición elevada), el rango del Ataque Furtivo se extiende a distancia (en lugar de requerir melee o distancia normal). El rango exacto = rango del arma usada. Además, si caes y no estás Incapacitado, puedes reducir el daño de caída en 5 × tu nivel de Pícaro."
      },
      {
        n: "Usar Objeto Mágico",
        nv: 13,
        d: "Ignoras todos los requisitos de clase, raza y nivel para usar objetos mágicos."
      },
      {
        n: "Reflexivos del Ladrón",
        nv: 17,
        d: "Puedes tomar dos turnos durante el primer asalto de cualquier combate. Tomas tu primer turno en tu iniciativa normal y el segundo en tu iniciativa − 10. No puedes usar esta característica si estás Sorprendido."
      },
    ],

    "Asesino [PHB 2014]": [
      {
        n: "Competencias de Asesino",
        nv: 3,
        d: "Ganas competencia con el kit de disfraz y el kit de envenenador."
      },
      {
        n: "Asesinar",
        nv: 3,
        d: "Tienes ventaja en tiradas de ataque contra criaturas que aún no han tomado un turno en combate. Además, cualquier ataque que hagas contra una criatura Sorprendida es un crítico automático."
      },
      {
        n: "Infiltrador",
        nv: 9,
        d: "Puedes crear una identidad falsa perfecta incluyendo documentación, referencias establecidas y disfraces. Si pasas al menos una semana estableciendo esa identidad en un lugar, puedes hacerla convincente para todos. No puedes establecer una identidad que duplique a alguien que ya exista."
      },
      {
        n: "Impostor",
        nv: 13,
        d: "Ganas la habilidad de imitar el habla, la escritura y el comportamiento de otra persona. Debes pasar al menos tres horas estudiando el habla, los manierismos y las acciones del objetivo. Ventaja en pruebas de Engaño para hacerse pasar por esa persona."
      },
      {
        n: "Ataque de la Muerte",
        nv: 17,
        d: "Si estudias a tu objetivo durante al menos 3 asaltos antes de atacar, y luego lo golpeas en ese mismo combate con un ataque furtivo mientras está Sorprendido, debe superar una salvación CON (CD = 8 + comp + mod DES) o morirá instantáneamente. Si supera la salvación, el ataque igual aplica el Ataque Furtivo."
      },
    ],

    "Tramposo Arcano [PHB 2014]": [
      {
        n: "Lanzamiento de Conjuros",
        nv: 3,
        d: "INT es tu característica de conjuro. Un tercio de lanzador (lista del Mago). Trucos: 3 (Nv.3, incluyendo Mano de Mago y 2 de Encantamiento/Ilusión) → 4 (Nv.10). Conjuros conocidos: 3 (Nv.3, al menos 2 de Encantamiento o Ilusión) → escala hasta 11 (Nv.20)."
      },
      {
        n: "Mano de Mago Traviesa",
        nv: 3,
        d: "Cuando lanzas Mano de Mago, puedes hacer la mano invisible. Puedes usar la AA para controlar la mano y realizar Juego de Manos, abrir cerraduras o desactivar trampas (con las herramientas de ladrón), o robar un objeto que la criatura lleve o vista (DES vs DES activo de la criatura). No puedes atacar ni lanzar conjuros con la mano."
      },
      {
        n: "Emboscada Mágica",
        nv: 9,
        d: "Si estás Oculto cuando lanzas un conjuro, las criaturas objetivo tienen desventaja en las tiradas de salvación contra ese conjuro este turno."
      },
      {
        n: "Ladrón de Conjuros",
        nv: 13,
        d: "Puedes robar el conocimiento de cómo lanzar un conjuro que te afecte. Inmediatamente después de que una criatura lance un conjuro que te tenga como objetivo, si fallas la salvación o la tirada de ataque del conjuro te impacta, puedes usar Reacción para obligar a la criatura a superar una salvación INT (CD = 8 + comp + mod INT) o pierdes temporalmente el conjuro hasta el siguiente Descanso Largo. Si superas, puedes lanzar ese conjuro (usando tu INT) 1 vez sin espacio antes del siguiente Descanso Largo."
      },
      {
        n: "Ladrón de Conjuros Maestro",
        nv: 17,
        d: "Puedes robar hasta un conjuro de Nv.4 (en lugar de solo los que te afecten directamente). Además, si consigues robarlo con éxito, el conjuro queda bloqueado en la mente del lanzador durante 8 horas."
      },
    ],

    /* ── PHB 2024 ── */
    "Ladrón [PHB 2024]": [
      {
        n: "Manos Rápidas",
        nv: 3,
        d: "Con la AA de Acción Astuta puedes: hacer prueba de Juego de Manos, usar herramientas de ladrón para abrir cerradura o desactivar trampa, o usar la acción de Usar Objeto (incluyendo pociones)."
      },
      {
        n: "Trepador Ágil",
        nv: 3,
        d: "Escalar no te cuesta movimiento adicional. Distancia de salto con carrera aumenta en mod DES pies."
      },
      {
        n: "Posición de Segundo Piso",
        nv: 9,
        d: "Atacando desde posición elevada respecto al objetivo, el rango de Ataque Furtivo alcanza hasta el rango del arma usada. Si caes sin Incapacitado, reduces el daño de caída en 5 × nivel de Pícaro."
      },
      {
        n: "Usar Objeto Mágico",
        nv: 13,
        d: "Ignoras todos los requisitos de clase, raza y nivel para usar objetos mágicos."
      },
      {
        n: "Reflexivos del Ladrón",
        nv: 17,
        d: "Tomas dos turnos en el primer asalto de cualquier combate: uno en tu iniciativa normal y otro en tu iniciativa −10. No funciona si estás Sorprendido."
      },
    ],

    "Asesino [PHB 2024]": [
      {
        n: "Competencias de Asesino",
        nv: 3,
        d: "Competencia en kit de disfraz y kit de envenenador. También ganas Infiltración: puedes crear una identidad falsa completa en 7 días de trabajo."
      },
      {
        n: "Asesinar",
        nv: 3,
        d: "Ventaja en ataques contra criaturas que no hayan actuado en combate. Crítico automático contra criaturas Sorprendidas."
      },
      {
        n: "Golpes Astutos",
        nv: 9,
        d: "Cuando aplicas Ataque Furtivo puedes elegir uno de los siguientes efectos (salvación CON CD = 8 + comp + mod DES): Envenenar (el objetivo queda Envenenado hasta el fin de su siguiente turno), Aturdir (queda Aturdido hasta el fin de su siguiente turno), o Tropezar (cae Tumbado)."
      },
      {
        n: "Impostor",
        nv: 13,
        d: "Estudias a un objetivo 3+ horas y puedes imitar su habla y comportamiento. Ventaja en Engaño para hacerse pasar por él."
      },
      {
        n: "Veneno Persistente",
        nv: 13,
        d: "Cuando eliges Envenenar con Golpes Astutos, el objetivo queda Envenenado durante 1 minuto (salvación al inicio de cada turno para terminar)."
      },
      {
        n: "Ataque de la Muerte",
        nv: 17,
        d: "Tras estudiar a un objetivo 3 asaltos y golpearle con Ataque Furtivo mientras está Sorprendido: salvación CON (CD = 8 + comp + mod DES) o muere. Si supera, aplica igualmente el Ataque Furtivo."
      },
    ],

    "Tramposo Arcano [PHB 2024]": [
      {
        n: "Lanzamiento de Conjuros",
        nv: 3,
        d: "INT es tu característica de conjuro. Un tercio de lanzador (lista del Mago). Incluye Mano de Mago obligatoriamente. 3 trucos y 3 conjuros conocidos al inicio (mínimo 2 de Encantamiento o Ilusión), escalando hasta 4 trucos y 11 conjuros en Nv.20."
      },
      {
        n: "Mano de Mago Traviesa",
        nv: 3,
        d: "Mano de Mago puede hacerse invisible. Con la AA puedes controlarla para: Juego de Manos, abrir cerraduras/trampas con herramientas de ladrón, o robar objetos de una criatura (DES vs DES activo)."
      },
      {
        n: "Emboscada Mágica",
        nv: 9,
        d: "Si estás Oculto al lanzar un conjuro, los objetivos tienen desventaja en salvaciones contra ese conjuro este turno."
      },
      {
        n: "Ladrón de Conjuros",
        nv: 13,
        d: "Reacción: cuando una criatura te lanza un conjuro, le fuerzas a superar salvación INT (CD = 8 + comp + mod INT) o pierde el conjuro. Si lo ganas, puedes lanzarlo 1 vez antes del siguiente Descanso Largo."
      },
      {
        n: "Ladrón de Conjuros Maestro",
        nv: 17,
        d: "Puedes robar conjuros de hasta Nv.4. El conjuro queda bloqueado para el lanzador original durante 8 horas si lo robas."
      },
    ],

    /* ── Sword Coast Adventurer's Guide / XGtE ── */
    "Maestro de Intrigas [SCAG/XGtE]": [
      {
        n: "Maestro de Intrigas",
        nv: 3,
        d: "Ganas competencia con el kit de disfraz, el kit de envenenador y un tipo de instrumento musical. Puedes imitar el acento y el modo de hablar de otra persona con solo 1 minuto de escucha. Aprendes dos idiomas adicionales."
      },
      {
        n: "Tácticas de Intriga",
        nv: 3,
        d: "Puedes usar la AA para otorgar ventaja al próximo ataque de un aliado contra una criatura a 30 pies que tú hayas dañado este turno con Ataque Furtivo."
      },
      {
        n: "Manipulador Insidioso",
        nv: 9,
        d: "Puedes usar la acción de Ayuda (Help) desde 30 pies de distancia (en lugar de los 5 pies habituales). Además, cuando usas la acción de Ayuda en combate, añades tu bonificador de competencia a la próxima tirada de ataque del aliado beneficiado si ese ataque impacta."
      },
      {
        n: "Engaño Desconcertante",
        nv: 13,
        d: "Una vez entre Descansos Cortos o Largos, cuando fallas una prueba de Engaño o Persuasión, puedes tratar el resultado como si hubieras sacado un 20 en el d20."
      },
      {
        n: "Alma de Embaucador",
        nv: 17,
        d: "Eres inmune a efectos que detecten mentiras o lean el alineamiento. Cuando una criatura intenta leer tu mente o forzarte a decir la verdad (conjuros, habilidades), puede hacer una tirada de INT enfrentada a tu Engaño; si pierdes, cree lo que desees que crea."
      },
    ],

    "Bocazas [SCAG/XGtE]": [
      {
        n: "Bocazas",
        nv: 3,
        d: "Ganas competencia en una habilidad adicional y en un idioma adicional. Cuando usas el truco Mano de Mago, puedes hacer la mano invisible, y Mano de Mago siempre forma parte de tus conjuros conocidos (no cuenta contra el límite si eres Tramposo Arcano). Si no eres Tramposo Arcano, aprendes el truco Mano de Mago."
      },
      {
        n: "Palabras de Distracción",
        nv: 3,
        d: "Puedes usar tu AA para citar a un enemigo: una criatura a 60 pies que puedas ver y que te pueda oír sufre desventaja en la siguiente tirada de salvación que haga antes del inicio de tu siguiente turno."
      },
      {
        n: "Palabras Infiltradas",
        nv: 9,
        d: "Cuando una criatura amistosa a 60 pies va a hacer una tirada de ataque, puedes usar tu Reacción para darle ventaja en esa tirada. La criatura debe poder oírte."
      },
      {
        n: "Palabras Intimidatorias",
        nv: 13,
        d: "Cuando usas Palabras de Distracción contra una criatura, también puede quedar Asustada de ti hasta el inicio de tu siguiente turno (misma tirada de salvación SAB)."
      },
      {
        n: "Maestro del Engaño",
        nv: 17,
        d: "Puedes usar Palabras de Distracción como parte del mismo turno en que lanzas un conjuro o realizas un ataque, sin coste adicional de AA. Además, una vez por Descanso Largo, puedes volverte Invisible durante 1 minuto como AA."
      },
    ],

    /* ── Xanathar's Guide to Everything ── */
    "Explorador [XGtE]": [
      {
        n: "Skirmisher",
        nv: 3,
        d: "Cuando una criatura se acerca a ti o te ataca, puedes moverte hasta la mitad de tu velocidad como Reacción. Este movimiento no provoca ataques de oportunidad."
      },
      {
        n: "Superviviente",
        nv: 3,
        d: "Ganas competencia en Naturaleza y Supervivencia. Tu bonificador de competencia se duplica en esas dos habilidades."
      },
      {
        n: "Acción Superior",
        nv: 9,
        d: "En el primer turno de cualquier combate puedes tomar dos acciones adicionales a tu acción normal (pero no puedes usar Ataque Furtivo en más de un ataque por acción). Esto te permite preparar, moverte y atacar de forma realmente efectiva en la ronda inicial."
      },
      {
        n: "Emboscador Ágil",
        nv: 13,
        d: "Tienes ventaja en tiradas de ataque contra cualquier criatura que no haya actuado aún en el combate. Además tienes ventaja en tiradas de DES (Sigilo) cuando te muevas a velocidad normal."
      },
      {
        n: "Esquiva Superior",
        nv: 17,
        d: "Eres escurridizo en combate. Cuando realizas la acción de Esquivar, también puedes Ocultarte como parte de esa misma acción (si hay lugar para hacerlo). Si estás Oculto al inicio de tu turno, puedes mantenerte Oculto tras atacar si superas una prueba de DES (Sigilo) CD 15."
      },
    ],

    "Espadachín [XGtE]": [
      {
        n: "Ingenio de Combate",
        nv: 3,
        d: "No necesitas ventaja para aplicar Ataque Furtivo a criaturas a 5 pies de ti; basta con que no tengas desventaja. Además, cuando atercas a distancia a alguien a 5 pies, tampoco impones desventaja en tus ataques a distancia."
      },
      {
        n: "Pasos Elegantes",
        nv: 3,
        d: "Puedes usar tu AA para ejecutar la acción de Desengancharse. Además, si te mueves al menos 5 pies antes de atacar, no provocas ataques de oportunidad al alejarte del objetivo de ese ataque durante el mismo turno."
      },
      {
        n: "Fanfarrón Elegante",
        nv: 9,
        d: "Puedes usar CAR en lugar de INT para las pruebas de Acrobacias. Además, cuando haces una prueba de CAR (Persuasión, Engaño, Actuación o Intimidación), añades mod DES o mod CAR (el mejor de los dos)."
      },
      {
        n: "Espada Distrayente",
        nv: 13,
        d: "Cuando aplicas Ataque Furtivo a una criatura en tu turno, esa criatura tiene desventaja en la primera tirada de ataque que haga antes del inicio de tu siguiente turno."
      },
      {
        n: "Maestro del Duelo",
        nv: 17,
        d: "Cuando un enemigo que falla un ataque de arma cuerpo a cuerpo contra ti, puedes usar Reacción para atacarle con tu arma. Este ataque puede aplicar Ataque Furtivo."
      },
    ],

    "Inquisitivo [XGtE]": [
      {
        n: "Oído para el Engaño",
        nv: 3,
        d: "Cuando haces una prueba de SAB (Perspicacia) para determinar si una criatura está mintiendo, tratas cualquier resultado de 7 o menos en el d20 como un 8."
      },
      {
        n: "Ojo para el Detalle",
        nv: 3,
        d: "Puedes usar la AA para hacer una prueba de SAB (Percepción) para detectar criaturas o una prueba de INT (Investigación) para descubrir pistas."
      },
      {
        n: "Combate Perspicaz",
        nv: 3,
        d: "Como AA puedes estudiar a una criatura a 30 pies. Si tu SAB (Perspicacia) supera la DES (Engaño) activa de la criatura, puedes aplicar Ataque Furtivo contra ella aunque no haya aliados adyacentes (ni ventaja). Este beneficio dura 1 minuto o hasta que uses este rasgo contra otra criatura."
      },
      {
        n: "Ojo para la Debilidad",
        nv: 9,
        d: "Cuando usas Combate Perspicaz y el Ataque Furtivo es válido, añades 3d6 adicionales al daño del Ataque Furtivo."
      },
      {
        n: "Oído para la Treachería",
        nv: 13,
        d: "Puedes usar la AA para copiar exactamente los manierismos de una criatura que hayas estudiado durante 1 minuto. Ventaja en pruebas de Engaño para hacerse pasar por esa persona. Inmunidad a efectos que detecten tus emociones o te hagan decir la verdad."
      },
      {
        n: "Mente de Detective",
        nv: 17,
        d: "Cuando usas Combate Perspicaz, el bono de 3d6 de Ojo para la Debilidad aumenta a 4d6. Además, puedes usar Combate Perspicaz como parte de la misma AA que Acción Astuta."
      },
    ],

    /* ── Tasha's Cauldron of Everything ── */
    "Fantasma [TCE]": [
      {
        n: "Susurros de los Muertos",
        nv: 3,
        d: "Al terminar un Descanso Corto o Largo, puedes obtener la competencia en una habilidad o herramienta a tu elección (un fragmento de alma muerta te susurra el conocimiento). Pierdes esa competencia cuando uses este rasgo de nuevo."
      },
      {
        n: "Gemidos desde la Tumba",
        nv: 3,
        d: "Cuando aplicas Ataque Furtivo, puedes hacer que una segunda criatura a 30 pies de tu objetivo reciba daño necrótico = la mitad del Ataque Furtivo (sin tirada de ataque ni salvación). Usos = mod SAB (mínimo 1). Recarga con Descanso Largo."
      },
      {
        n: "Fichas de los Muertos",
        nv: 9,
        d: "Cuando una criatura a 30 pies muere (no llega a 0 PG y hace tiradas de muerte, sino que muere de verdad), puedes usar Reacción para extraer una ficha de su alma. Tienes un número máximo de fichas = bonificador de competencia. Mientras tengas al menos 1 ficha: ventaja en salvaciones de muerte y tiradas de CON. Puedes destruir una ficha para: recuperar un uso de Gemidos desde la Tumba, o interrogar al espíritu (1 pregunta que responde con lo que sabía en vida)."
      },
      {
        n: "Caminar entre Fantasmas",
        nv: 13,
        d: "Gastas 1 ficha de alma (AA): te vuelves espectral durante 10 minutos. Puedes moverte a través de objetos sólidos y otras criaturas (cuesta movimiento extra pasar a través de ellas). Si terminas tu turno dentro de un objeto sólido, eres expulsado al espacio más cercano disponible y recibes daño de fuerza. Puedes terminarlo antes como AA."
      },
      {
        n: "Amigo de la Muerte",
        nv: 17,
        d: "Gemidos desde la Tumba ya inflige el daño completo del Ataque Furtivo (no solo la mitad) a la segunda criatura. Al terminar Descanso Largo, si no tienes fichas de alma, una aparece en tu mano espontáneamente (los muertos se sienten atraídos hacia ti)."
      },
    ],

    "Cuchillo de Alma [TCE]": [
      {
        n: "Energía Psiónica",
        nv: 3,
        d: "Tienes Dados de Energía Psiónica (d6, escalando: d8 Nv.5, d10 Nv.11, d12 Nv.17). Número de dados = 2 × bonificador de competencia. Se recuperan todos con Descanso Largo; recuperas 1 con Descanso Corto. Poderes: Destreza Psi (Psi-Bolstered Knack) — si fallas prueba de habilidad con competencia, lanzas 1 dado y lo añades (si sigues fallando devuelves el dado); Susurros Psíquicos (Psychic Whispers) — Acción: eliges criaturas visibles (hasta bonificador de competencia), lanzas 1 dado; durante las horas resultantes te comunicas telepáticamente con ellas."
      },
      {
        n: "Hojas Psíquicas",
        nv: 3,
        d: "Manifiestas cuchillas psíquicas de energía mental. Como parte de la acción de Atacar, puedes materializar una cuchilla en tu mano libre: es un arma simple cuerpo a cuerpo con las propiedades Finura y Arrojadiza (alcance 60 pies), hace 1d6 de daño psíquico + mod DES (o INT). La cuchilla desaparece tras el ataque. Si tu otra mano está libre después del primer ataque, puedes invocar otra y atacar de nuevo como AA (sin aplicar Ataque Furtivo al segundo)."
      },
      {
        n: "Golpe Certero",
        nv: 9,
        d: "Cuando fallas un ataque con la Hoja Psíquica, puedes gastar 1 Dado de Energía, lanzarlo y añadirlo a la tirada de ataque, posiblemente convirtiendo el fallo en impacto (el dado solo se gasta si el ataque impacta). Además, teleportación psíquica (AA): gastas 1 dado, lo lanzas, te teletransportas hasta el resultado × 10 pies (en inglés, feet = resultado × 10) a espacio desocupado visible."
      },
      {
        n: "Velo Psíquico",
        nv: 13,
        d: "Acción: te vuelves Invisible durante 1 hora o hasta que ataques o forces a alguien a hacer una salvación. 1/descanso largo (o gasta 1 Dado de Energía para volver a usarlo)."
      },
      {
        n: "Rasgar la Mente",
        nv: 17,
        d: "Cuando aplicas Ataque Furtivo con la Hoja Psíquica, puedes forzar al objetivo a superar una salvación de SAB (CD = 8 + comp + mod DES) o quedar Aturdido durante 1 minuto. El objetivo puede repetir la salvación al final de cada uno de sus turnos. 1/descanso largo (o gasta 3 Dados de Energía para volver a usarlo)."
      },
    ],

  }, // fin subclases
}; // fin CLASE_PICARO
