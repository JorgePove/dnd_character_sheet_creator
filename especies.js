/* ══════════════════════════════════════════════════════════════════
   especies.js — Especies jugables D&D 5e / 5.5e
   ──────────────────────────────────────────────────────────────────
   Revisado contra: PHB 2024 y Eberron: Forge of the Artificer 2024 (wiki dnd2024),
   PHB 2014, Mordenkainen Presents: Monsters of the Multiverse (MotM) y libros
   anteriores (VGtM, MTF, SCAG, EEPC, GGtR, MOoT, EGtW, ERftLW, FTD, SCC, AAG,
   VRGtR) según dnd5e.wikidot.com. Ampliado y contrastado con 5etools: Plane Shift
   (PSA, PSD, PSI, PSK, PSX, PSZ), ERftLW (Marcas del Dragón), OGA, LR, SotDQ,
   Lorwyn–Shadowmoor (LFL 2024) y THW 2024.
   Convención: las especies de 2014 con ASI llevan una nota "Versión original".
   El campo opcional  a  marca rasgos activos para el panel de acciones:
     "A" = Acción · "B" = Acción Adicional · "R" = Reacción · "O" = otro/gratis
   (vacío = rasgo pasivo).
══════════════════════════════════════════════════════════════════ */

const DND_ESPECIES = {

  /* ════════════════════════════════════════════════════════════════
     PLAYER'S HANDBOOK 2024 (5.5e)
  ════════════════════════════════════════════════════════════════ */

  "Aasimar [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Resistencia Celestial (Celestial Resistance)", d:"Resistencia al daño necrótico y radiante." },
    { n:"Portador de Luz (Light Bearer)", d:"Conoces el truco Light. Carisma es tu característica de lanzamiento para él." },
    { n:"Manos Curativas (Healing Hands)", a:"A", d:"Con la acción de Magia tocas a una criatura y tiras un nº de d4 igual a tu bonificador de competencia; recupera tantos PG como la suma. 1/Descanso Largo." },
    { n:"Revelación Celestial (Celestial Revelation)", a:"B", d:"Nv.3: con una Acción Adicional te transformas 1 minuto (o hasta que lo termines), 1/Descanso Largo. Eliges una opción al activarla: Alas Celestiales (Heavenly Wings): Velocidad de vuelo igual a tu Velocidad. Resplandor Interior (Inner Radiance): luz brillante a 10 pies y tenue 10 más; al final de cada uno de tus turnos las criaturas a 10 pies sufren daño radiante igual a tu bonificador de competencia. Sudario Necrótico (Necrotic Shroud): las criaturas a 10 pies que no sean aliadas hacen salvación de CAR (CD 8 + mod. CAR + comp.) o quedan Asustadas hasta el final de tu siguiente turno. Una vez en cada uno de tus turnos mientras dure la transformación, cuando infliges daño a un objetivo con un ataque o un conjuro, puedes infligirle daño extra igual a tu bonificador de competencia: necrótico con Sudario Necrótico; radiante con Alas Celestiales o Resplandor Interior." },
  ],

  "Dracónido [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (5–7 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Ascendencia Dracónica (Draconic Ancestry)", d:"Eliges un tipo de dragón: Negro o Cobre → ácido; Azul o Bronce → relámpago; Latón, Oro o Rojo → fuego; Plata o Blanco → frío; Verde → veneno. Determina el daño de tu Aliento y tu resistencia." },
    { n:"Arma de Aliento (Breath Weapon)", a:"A", d:"Cuando realizas la acción de Atacar en tu turno, puedes sustituir uno de tus ataques por un exhalar en cono de 15 pies o línea de 30 pies × 5 pies. Salvación de DES (CD 8 + mod. CON + comp.): 1d10 de daño del tipo de tu ascendencia (2d10 en Nv.5, 3d10 en Nv.11, 4d10 en Nv.17), mitad si la supera. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Resistencia al Daño (Damage Resistance)", d:"Resistencia al tipo de daño de tu ascendencia dracónica." },
    { n:"Vuelo Dracónico (Draconic Flight)", a:"B", d:"Nv.5: con una Acción Adicional te brotan alas espectrales que duran 10 minutos, hasta que las retraigas (sin acción) o hasta que tengas la condición Incapacitado. Mientras duran, tienes Velocidad de vuelo igual a tu Velocidad. 1/Descanso Largo." },
  ],

  "Enano [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–5 pies), Velocidad 30 pies, Visión en la Oscuridad 120 pies." },
    { n:"Resiliencia Enana (Dwarven Resilience)", d:"Resistencia al daño de veneno y Ventaja en las salvaciones para evitar o terminar la condición Envenenado." },
    { n:"Dureza Enana (Dwarven Toughness)", d:"Tus PG máximos aumentan en 1 y en 1 más cada vez que subes de nivel." },
    { n:"Sentido de la Piedra (Stonecunning)", a:"B", d:"Con una Acción Adicional ganas Sentido Sísmico (Tremorsense) con alcance 60 pies durante 10 minutos, mientras estés sobre una superficie de piedra (natural o trabajada) o la toques. Usos = bonificador de competencia por Descanso Largo." },
  ],

  "Elfo [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (5–6 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Linaje Élfico (Elven Lineage)", a:"A", d:"Eliges un linaje y una característica de lanzamiento (INT, SAB o CAR). Drow: Visión en la Oscuridad 120 pies; truco Dancing Lights; Nv.3 Faerie Fire; Nv.5 Darkness. Alto Elfo: truco Prestidigitation (puedes cambiarlo por otro truco de Mago tras un Descanso Largo); Nv.3 Detect Magic; Nv.5 Misty Step. Elfo del Bosque: Velocidad 35 pies; truco Druidcraft; Nv.3 Longstrider; Nv.5 Pass without Trace. Los conjuros de Nv.3 y Nv.5 los lanzas una vez por Descanso Largo sin espacio (también con espacios)." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Perspicacia, Percepción o Supervivencia (a tu elección)." },
    { n:"Trance", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 4 horas de meditación consciente." },
  ],

  "Gnomo [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño (3–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Astucia Gnómica (Gnomish Cunning)", d:"Ventaja en las salvaciones de INT, SAB y CAR." },
    { n:"Linaje Gnómico (Gnomish Lineage)", a:"A", d:"Eliges un linaje y una característica de lanzamiento (INT, SAB o CAR). Gnomo del Bosque: truco Minor Illusion y Speak with Animals siempre preparado (lo lanzas sin espacio un nº de veces igual a tu bonificador de competencia por Descanso Largo, y con espacios). Gnomo de las Rocas: trucos Mending y Prestidigitation. Además, puedes pasar 10 minutos lanzando Prestidigitation para crear un aparato de relojería Diminuto (CA 5, 1 PG), como un juguete, un encendedor o una caja de música. Al crearlo eliges un efecto de Prestidigitation (y, si ese efecto tiene opciones, una sola de ellas: p. ej. encender o apagar fuego, no ambas); el aparato produce ese efecto cuando tú u otra criatura gastáis una Acción Adicional para activarlo con un toque. Puedes tener 3 aparatos a la vez; cada uno se desmonta a las 8 horas de crearse o cuando lo desmontas con un toque (acción de Utilizar)." },
  ],

  "Goliat [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (7–8 pies), Velocidad 35 pies." },
    { n:"Ascendencia Gigante (Giant Ancestry)", a:"BR", d:"Eliges un don sobrenatural; usos = bonificador de competencia por Descanso Largo. Salto de Nube (Cloud's Jaunt): Acción Adicional, te teletransportas hasta 30 pies a un espacio libre que veas. Quemadura de Fuego (Fire's Burn): al impactar con un ataque infliges 1d10 de fuego extra. Frío de Escarcha (Frost's Chill): al impactar infliges 1d6 de frío extra y reduces la Velocidad del objetivo en 10 pies hasta tu siguiente turno. Voltereta de Colina (Hill's Tumble): al impactar a una criatura Grande o menor la derribas. Resistencia de Piedra (Stone's Endurance): Reacción al recibir daño, tiras 1d12 + mod. CON y reduces el daño. Trueno de Tormenta (Storm's Thunder): Reacción cuando una criatura a 60 pies te daña, le infliges 1d8 de trueno." },
    { n:"Forma Grande (Large Form)", a:"B", d:"Nv.5: con una Acción Adicional creces hasta tamaño Grande (si hay espacio) durante 10 minutos: Ventaja en pruebas de FUE y +10 pies de Velocidad. 1/Descanso Largo." },
    { n:"Constitución Poderosa (Powerful Build)", d:"Ventaja en las pruebas para terminar un agarre y cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
  ],

  "Mediano [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño (2–3 pies), Velocidad 30 pies." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones para evitar o terminar la condición Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo, pero no detenerte en él." },
    { n:"Suerte (Luck)", d:"Cuando sacas un 1 en el d20 de una Prueba de d20, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Naturalmente Sigiloso (Naturally Stealthy)", d:"Puedes realizar la acción Esconderse incluso estando oculto sólo por una criatura al menos un tamaño mayor que tú." },
  ],

  "Humano [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies." },
    { n:"Ingenioso (Resourceful)", d:"Ganas Inspiración Heroica cada vez que terminas un Descanso Largo." },
    { n:"Habilidoso (Skillful)", d:"Competencia en una habilidad a tu elección." },
    { n:"Versátil (Versatile)", d:"Ganas una dote de Origen a tu elección." },
  ],

  "Orco [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (6–7 pies), Velocidad 30 pies, Visión en la Oscuridad 120 pies." },
    { n:"Subida de Adrenalina (Adrenaline Rush)", a:"B", d:"Con una Acción Adicional realizas la acción Correr y ganas PG temporales iguales a tu bonificador de competencia. Usos = bonificador de competencia; se recuperan con un descanso corto o largo." },
    { n:"Resistencia Implacable (Relentless Endurance)", a:"O", d:"Cuando quedas a 0 PG sin morir de golpe, quedas a 1 PG. 1/Descanso Largo." },
  ],

  "Tiefling [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (3–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Legado Infernal (Fiendish Legacy)", a:"A", d:"Eliges un legado y una característica de lanzamiento (INT, SAB o CAR). Abisal: resistencia al veneno, truco Poison Spray; Nv.3 Ray of Sickness; Nv.5 Hold Person. Ctónico: resistencia al necrótico, truco Chill Touch; Nv.3 False Life; Nv.5 Ray of Enfeeblement. Infernal: resistencia al fuego, truco Fire Bolt; Nv.3 Hellish Rebuke; Nv.5 Darkness. Los conjuros de Nv.3 y Nv.5 los lanzas una vez por Descanso Largo sin espacio (también con espacios)." },
    { n:"Presencia Sobrenatural (Otherworldly Presence)", d:"Conoces el truco Thaumaturgy (con la misma característica de lanzamiento de tu legado)." },
  ],


  /* ════════════════════════════════════════════════════════════════
     PLAYER'S HANDBOOK 2014 (5e) — versiones originales con aumentos de característica
  ════════════════════════════════════════════════════════════════ */

  "Humano [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +1 a todas las características." },
  ],

  "Humano Variante [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +1 a dos características distintas a tu elección." },
    { n:"Habilidad (Skills)", d:"Competencia en una habilidad a tu elección." },
    { n:"Dote (Feat)", d:"Ganas una dote a tu elección." },
  ],

  "Enano de las Colinas [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies (no se reduce por llevar armadura pesada), Visión en la Oscuridad 60 pies. Idiomas: Común y Enano. Aumento: CON +2, SAB +1." },
    { n:"Resiliencia Enana (Dwarven Resilience)", d:"Ventaja en las salvaciones contra veneno y resistencia al daño de veneno." },
    { n:"Entrenamiento Enano en Combate (Dwarven Combat Training)", d:"Competencia con hacha de batalla, hacha de mano, martillo ligero y martillo de guerra." },
    { n:"Competencia con Herramientas (Tool Proficiency)", d:"Competencia con herramientas de herrero, suministros de cervecero o herramientas de albañil (a tu elección)." },
    { n:"Sentido de la Piedra (Stonecunning)", d:"En pruebas de Inteligencia (Historia) sobre el origen de obras de piedra, cuentas como competente y sumas el doble de tu bonificador de competencia." },
    { n:"Dureza Enana (Dwarven Toughness)", d:"Tus PG máximos aumentan en 1 y en 1 más cada vez que subes de nivel." },
  ],

  "Enano de las Montañas [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies (no se reduce por llevar armadura pesada), Visión en la Oscuridad 60 pies. Idiomas: Común y Enano. Aumento: CON +2, FUE +2." },
    { n:"Resiliencia Enana (Dwarven Resilience)", d:"Ventaja en las salvaciones contra veneno y resistencia al daño de veneno." },
    { n:"Entrenamiento Enano en Combate (Dwarven Combat Training)", d:"Competencia con hacha de batalla, hacha de mano, martillo ligero y martillo de guerra." },
    { n:"Competencia con Herramientas (Tool Proficiency)", d:"Competencia con herramientas de herrero, suministros de cervecero o herramientas de albañil (a tu elección)." },
    { n:"Sentido de la Piedra (Stonecunning)", d:"En pruebas de Inteligencia (Historia) sobre el origen de obras de piedra, cuentas como competente y sumas el doble de tu bonificador de competencia." },
    { n:"Entrenamiento Enano con Armaduras (Dwarven Armor Training)", d:"Competencia con armadura ligera y media." },
  ],

  "Elfo Alto [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más. Aumento: DES +2, INT +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Truco (Cantrip)", d:"Conoces un truco de Mago a tu elección (INT es tu característica de lanzamiento)." },
  ],

  "Elfo del Bosque [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Élfico. Aumento: DES +2, SAB +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Pies Ligeros (Fleet of Foot)", d:"Tu Velocidad base es 35 pies." },
    { n:"Máscara de lo Salvaje (Mask of the Wild)", d:"Puedes intentar esconderte aunque sólo estés ligeramente oculto por fenómenos naturales (lluvia, nieve, niebla, follaje...)." },
  ],

  "Elfo Oscuro (Drow) [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad Superior 120 pies. Idiomas: Común y Élfico. Aumento: DES +2, CAR +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Sensibilidad a la Luz Solar (Sunlight Sensitivity)", d:"Desventaja en tiradas de ataque y pruebas de Sabiduría (Percepción) basadas en la vista cuando tú o tu objetivo/lo que intentas percibir estáis bajo luz solar directa." },
    { n:"Magia Drow (Drow Magic)", a:"A", d:"Conoces el truco Dancing Lights. Nv.3: Faerie Fire una vez por Descanso Largo. Nv.5: Darkness una vez por Descanso Largo. CAR es tu característica de lanzamiento." },
    { n:"Entrenamiento Drow con Armas (Drow Weapon Training)", d:"Competencia con estoques, espadas cortas y ballestas de mano." },
  ],

  "Mediano Piesligeros [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies. Idiomas: Común y Mediano. Aumento: DES +2, CAR +1." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo." },
    { n:"Naturalmente Sigiloso (Naturally Stealthy)", d:"Puedes intentar esconderte aunque sólo estés oculto por una criatura al menos un tamaño mayor que tú." },
  ],

  "Mediano Fornido [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies. Idiomas: Común y Mediano. Aumento: DES +2, CON +1." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo." },
    { n:"Resiliencia Fornida (Stout Resilience)", d:"Ventaja en las salvaciones contra veneno y resistencia al daño de veneno." },
  ],

  "Mediano Fantasma (Ghostwise) [SCAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies. Idiomas: Común y Mediano. Aumento: DES +2, SAB +1." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo." },
    { n:"Habla Silenciosa (Silent Speech)", d:"Puedes hablar telepáticamente a cualquier criatura a 30 pies de ti. La criatura solo te entiende si compartís un idioma. Puedes hablar así a una criatura a la vez." },
  ],

  "Mediano Lotusden [EGtW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies. Idiomas: Común y Mediano. Aumento: DES +2, SAB +1." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo." },
    { n:"Hijo del Bosque (Child of the Wood)", a:"A", d:"Conoces el truco Druidcraft. Nv.3: Entangle una vez por Descanso Largo. Nv.5: Spike Growth una vez por Descanso Largo. Sin componentes materiales; SAB es tu característica de lanzamiento." },
    { n:"Paso de los Árboles (Timberwalk)", d:"Las pruebas para rastrearte tienen Desventaja y te mueves por terreno difícil de plantas y maleza no mágicas sin gasto extra de movimiento." },
  ],

  "Dracónido [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y Dracónico. Aumento: FUE +2, CAR +1." },
    { n:"Ascendencia Dracónica (Draconic Ancestry)", d:"Eliges un dragón: Negro (ácido), Azul (relámpago), Latón (fuego), Bronce (relámpago), Cobre (ácido), Oro (fuego), Verde (veneno), Rojo (fuego), Plata (frío) o Blanco (frío). Determina tu Aliento y tu resistencia." },
    { n:"Arma de Aliento (Breath Weapon)", a:"A", d:"Con una acción exhalas energía: línea 5×30 pies (Negro, Azul, Latón, Bronce, Cobre; salvación de DES) o cono de 15 pies (Oro, Rojo: DES; Verde, Plata, Blanco: CON). CD 8 + mod. CON + comp. Daño 2d6 (3d6 en Nv.6, 4d6 en Nv.11, 5d6 en Nv.16), mitad si la supera. Se recupera con un descanso corto o largo." },
    { n:"Resistencia al Daño (Damage Resistance)", d:"Resistencia al tipo de daño de tu ascendencia dracónica." },
  ],

  "Gnomo del Bosque [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Gnómico. Aumento: INT +2, DES +1." },
    { n:"Astucia Gnómica (Gnome Cunning)", d:"Ventaja en todas las salvaciones de INT, SAB y CAR contra magia." },
    { n:"Ilusionista Natural (Natural Illusionist)", d:"Conoces el truco Minor Illusion (INT es tu característica de lanzamiento)." },
    { n:"Hablar con Bestias Pequeñas (Speak with Small Beasts)", d:"Mediante sonidos y gestos puedes comunicar ideas sencillas a Bestias Pequeñas o menores." },
  ],

  "Gnomo de las Rocas [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Gnómico. Aumento: INT +2, CON +1." },
    { n:"Astucia Gnómica (Gnome Cunning)", d:"Ventaja en todas las salvaciones de INT, SAB y CAR contra magia." },
    { n:"Saber del Artífice (Artificer's Lore)", d:"En pruebas de Inteligencia (Historia) sobre objetos mágicos, objetos alquímicos o dispositivos tecnológicos, sumas el doble de tu bonificador de competencia." },
    { n:"Manitas (Tinker)", d:"Competencia con herramientas de manitas. Con ellas, 1 hora de trabajo y 10 po de materiales construyes un artilugio Diminuto de relojería (CA 5, 1 PG); puedes tener hasta 3 activos a la vez. Eliges al crearlo: Juguete mecánico (animal, monstruo o persona; colocado en el suelo se mueve 5 pies en dirección aleatoria en cada uno de tus turnos y hace los ruidos propios de la criatura), Encendedor (produce una llama en miniatura para encender una vela, antorcha o hoguera; usarlo requiere una acción) o Caja de música (al abrirla toca una canción a volumen moderado hasta que termina o se cierra). Deja de funcionar a las 24 horas (salvo que dediques 1 hora a repararlo) o cuando usas tu acción para desmontarlo; entonces recuperas los materiales." },
  ],

  "Semielfo [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más. Aumento: CAR +2 y +1 a otras dos características a tu elección." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Versatilidad con Habilidades (Skill Versatility)", d:"Competencia en dos habilidades a tu elección." },
  ],

  "Semiorco [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Orco. Aumento: FUE +2, CON +1." },
    { n:"Amenazante (Menacing)", d:"Competencia en Intimidación." },
    { n:"Resistencia Implacable (Relentless Endurance)", a:"O", d:"Cuando quedas a 0 PG sin morir de golpe, quedas a 1 PG en su lugar. 1/Descanso Largo." },
    { n:"Ataques Salvajes (Savage Attacks)", d:"Cuando haces un golpe crítico con un ataque cuerpo a cuerpo con arma, tiras uno de los dados de daño del arma una vez más y lo sumas al daño extra del crítico." },
  ],

  "Tiefling [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común e Infernal. Aumento: CAR +2, INT +1." },
    { n:"Resistencia Infernal (Hellish Resistance)", d:"Resistencia al daño de fuego." },
    { n:"Legado Infernal (Infernal Legacy)", a:"A", d:"Conoces el truco Thaumaturgy. Nv.3: lanzas Hellish Rebuke como conjuro de nivel 2 una vez por Descanso Largo. Nv.5: lanzas Darkness una vez por Descanso Largo. CAR es tu característica de lanzamiento." },
  ],

  "Tiefling Variante [SCAG/MTF]": [
    { n:"Rasgos Básicos", d:"Como el Tiefling del PHB 2014 (Humanoide, Mediano, 30 pies, Visión en la Oscuridad 60 pies, Resistencia Infernal al fuego, idiomas Común e Infernal); estas variantes sustituyen el Legado Infernal. Aumento base CAR +2; el segundo aumento depende de la variante. En las cuatro variantes SCAG (Feral, Lengua de Diablo, Fuego Infernal y Alado) puedes elegir +2 a DES o +2 a CAR (más INT +1)." },
    { n:"Feral (SCAG)", d:"Aumento: DES +2, INT +1 en vez de CAR +2, INT +1 (puedes elegir +2 a DES o +2 a CAR, como en el resto de variantes SCAG). Conserva el Legado Infernal." },
    { n:"Lengua de Diablo (Devil's Tongue, SCAG)", a:"A", d:"Sustituye el Legado Infernal: truco Vicious Mockery; Nv.3 Charm Person (como conjuro de nivel 2); Nv.5 Enthrall; una vez por Descanso Largo cada uno; CAR. Aumento: +2 a DES o +2 a CAR (a elegir), más INT +1." },
    { n:"Fuego Infernal (Hellfire, SCAG)", a:"A", d:"Modifica el Legado Infernal: el conjuro de Nv.3 es Burning Hands (como conjuro de nivel 2) en lugar de Hellish Rebuke; el resto (Thaumaturgy y Darkness en Nv.5) se mantiene. 1/Descanso Largo cada uno; CAR. Aumento: +2 a DES o +2 a CAR (a elegir), más INT +1." },
    { n:"Alado (Winged, SCAG)", d:"Sustituye el Legado Infernal: alas de murciélago con Velocidad de vuelo 30 pies (no con armadura pesada). Aumento: +2 a DES o +2 a CAR (a elegir), más INT +1." },
    { n:"Legado de Asmodeo (MTF)", a:"A", d:"INT +1. Thaumaturgy; Nv.3 Hellish Rebuke (nivel 2); Nv.5 Darkness; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Baalzebul (MTF)", a:"A", d:"INT +1. Thaumaturgy; Nv.3 Ray of Sickness (nivel 2); Nv.5 Crown of Madness; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Dispater (MTF)", a:"A", d:"DES +1. Thaumaturgy; Nv.3 Disguise Self; Nv.5 Detect Thoughts; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Fierna (MTF)", a:"A", d:"SAB +1. Friends; Nv.3 Charm Person (nivel 2); Nv.5 Suggestion; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Glasya (MTF)", a:"A", d:"DES +1. Minor Illusion; Nv.3 Disguise Self; Nv.5 Invisibility; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Levistus (MTF)", a:"A", d:"CON +1. Ray of Frost; Nv.3 Armor of Agathys (nivel 2); Nv.5 Darkness; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Mammon (MTF)", a:"A", d:"INT +1. Mage Hand; Nv.3 Tenser's Floating Disk (1/Descanso Corto o Largo); Nv.5 Arcane Lock (1/Descanso Largo, sin componente material); CAR." },
    { n:"Legado de Mefistófeles (MTF)", a:"A", d:"INT +1. Mage Hand; Nv.3 Burning Hands (nivel 2); Nv.5 Flame Blade; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Zariel (MTF)", a:"A", d:"FUE +1. Thaumaturgy; Nv.3 Searing Smite (nivel 2); Nv.5 Branding Smite; 1/Descanso Largo cada uno; CAR." },
  ],


  /* ════════════════════════════════════════════════════════════════
     MONSTERS OF THE MULTIVERSE [MotM] (y versiones originales anteriores)
  ════════════════════════════════════════════════════════════════ */

  "Aarakocra [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento de característica (MotM): +2/+1 o +1/+1/+1. [Original EEPC: DES +2, SAB +1, Velocidad 25 pies, vuelo 50 pies, idiomas Común, Aarakocra y Auran]" },
    { n:"Vuelo (Flight)", d:"Tienes Velocidad de vuelo igual a tu Velocidad caminando. No puedes usarla si llevas armadura media o pesada. [Original EEPC: vuelo 50 pies]" },
    { n:"Garras (Talons)", d:"Tus ataques desarmados infligen 1d6 + mod. de FUE de daño cortante. [Original EEPC: 1d4]" },
    { n:"Invocador de Viento (Wind Caller)", a:"A", d:"Nv.3: lanzas Gust of Wind una vez por Descanso Largo sin componentes materiales (también con espacios de conjuro de nivel 2+). INT, SAB o CAR a tu elección." },
  ],

  "Aasimar [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: CAR +2 y +1 según subespecie (Protector SAB, Azote CON, Caído FUE); idiomas Común y Celestial]" },
    { n:"Resistencia Celestial (Celestial Resistance)", d:"Resistencia al daño necrótico y radiante." },
    { n:"Manos Curativas (Healing Hands)", a:"A", d:"Con una acción tocas a una criatura y tiras un nº de d4 igual a tu bonificador de competencia; recupera esos PG. 1/Descanso Largo. [Original VGtM: recupera PG iguales a tu nivel]" },
    { n:"Portador de Luz (Light Bearer)", d:"Conoces el truco Light (característica de lanzamiento: CAR)." },
    { n:"Revelación Celestial (Celestial Revelation)", a:"B", d:"Nv.3: eliges una de estas revelaciones. A partir de entonces, con una Acción Adicional liberas la energía celestial que llevas dentro y ganas los beneficios de esa revelación. La transformación dura 1 minuto o hasta que la termines con una Acción Adicional. 1/Descanso Largo. Sombra Necrótica: tus ojos se vuelven pozos de oscuridad y te brotan alas fantasmales sin capacidad de vuelo; las criaturas que no sean tus aliadas, a 10 pies de ti y que te vean, hacen salvación de CAR (CD 8 + comp. + mod. CAR) o quedan Asustadas de ti hasta el final de tu siguiente turno. Consunción Radiante: una luz abrasadora emana de tus ojos y boca; emites luz brillante en 10 pies de radio y luz tenue 10 pies más, y al final de cada uno de tus turnos cada criatura a 10 pies de ti sufre daño radiante igual a tu bonificador de competencia. Alma Radiante: te brotan dos alas luminosas y espectrales; tienes Velocidad de vuelo igual a tu Velocidad caminando. Mientras dure la transformación, una vez en cada uno de tus turnos, cuando infliges daño a un objetivo con un ataque o un conjuro, puedes infligirle daño extra igual a tu bonificador de competencia: necrótico con Sombra Necrótica, radiante con las otras dos opciones. [Original VGtM: Acción; daño extra = tu nivel; Protector = Alma Radiante, Azote = Consunción Radiante (daño a ti y a otros = mitad del nivel), Caído = Sombra Necrótica]" },
  ],

  "Bugbear [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como goblinoide para cualquier requisito o efecto que pida un goblinoide), Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, FUE +2, DES +1; idiomas Común y Goblin]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Miembros Largos (Long-Limbed)", d:"Cuando haces un ataque cuerpo a cuerpo en tu turno, tu alcance aumenta 5 pies." },
    { n:"Constitución Poderosa (Powerful Build)", d:"Cuentas como una categoría de tamaño mayor para la capacidad de carga y para empujar, arrastrar o levantar." },
    { n:"Sigiloso (Sneaky)", d:"Competencia en Sigilo. Además, sin tener que apretarte, puedes moverte por un espacio lo bastante grande para una criatura Pequeña y detenerte en él." },
    { n:"Ataque Sorpresa (Surprise Attack)", d:"Si impactas a una criatura que aún no ha actuado en el combate, inflige 2d6 de daño extra. [Original VGtM: sólo una vez por combate]" },
  ],

  "Centauro [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano, Velocidad 40 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original GGtR/MOoT: FUE +2, SAB +1; idiomas Común y Silvano; Cascos 1d4; Superviviente en vez de Afinidad Natural]" },
    { n:"Carga (Charge)", a:"B", d:"Si te mueves al menos 30 pies en línea recta hacia un objetivo y luego lo impactas con un ataque cuerpo a cuerpo con arma en el mismo turno, puedes hacer de inmediato, como Acción Adicional, un ataque con los cascos contra ese mismo objetivo." },
    { n:"Cuerpo Equino (Equine Build)", d:"Cuentas como una categoría de tamaño mayor para determinar tu capacidad de carga y el peso que puedes empujar o arrastrar. Además, trepar con manos y pies te resulta especialmente difícil por tus patas equinas: cada pie de movimiento te cuesta 4 pies adicionales en vez del 1 adicional normal." },
    { n:"Cascos (Hooves)", d:"Armas naturales: 1d6 + mod. de FUE de daño contundente." },
    { n:"Afinidad Natural (Natural Affinity)", d:"Competencia en una habilidad entre Trato con Animales, Medicina, Naturaleza y Supervivencia." },
  ],

  "Changeling [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano o Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original ERftLW: CAR +2 y +1 a otra; idiomas Común y otros dos; habilidades a elegir entre Engaño, Perspicacia, Intimidación y Persuasión]" },
    { n:"Instintos de Changeling (Changeling Instincts)", d:"Competencia en dos habilidades entre Engaño, Perspicacia, Intimidación, Interpretación y Persuasión." },
    { n:"Cambiaformas (Shapechanger)", a:"A", d:"Con una acción cambias tu apariencia y tu voz; tú determinas los detalles, incluidos tu coloración, la longitud del cabello y el sexo, y puedes ajustar tu altura entre Mediano y Pequeño. Puedes aparentar ser miembro de otra especie, aunque ninguna de tus estadísticas de juego cambia. No puedes duplicar la apariencia de un individuo que nunca hayas visto, y debes adoptar una forma con la misma disposición básica de miembros que tienes. Tu ropa y tu equipo no cambian con este rasgo. Permaneces en la nueva forma hasta que uses una acción para volver a tu forma verdadera o hasta que mueras." },
  ],

  "Gnomo de las Profundidades [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como gnomo para cualquier requisito o efecto que pida un gnomo), Pequeño, Velocidad 30 pies, Visión en la Oscuridad 120 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC/SCAG: INT +2, DES +1, Velocidad 25 pies; idiomas Común y Gnómico (Infracomún en SCAG); Astucia Gnómica y Camuflaje de Piedra]" },
    { n:"Resistencia Mágica Gnómica (Gnomish Magic Resistance)", d:"Ventaja en las salvaciones de INT, SAB y CAR contra conjuros." },
    { n:"Camuflaje de Svirfneblin (Svirfneblin Camouflage)", d:"Ventaja en pruebas de Destreza (Sigilo). Usos = bonificador de competencia por Descanso Largo." },
    { n:"Don del Svirfneblin (Gift of the Svirfneblin)", a:"A", d:"Nv.3: lanzas Disguise Self una vez por Descanso Largo. Nv.5: lanzas también Nondetection una vez por Descanso Largo sin componentes materiales. También con espacios de conjuro. INT, SAB o CAR." },
  ],

  "Duergar [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como enano para cualquier requisito o efecto que pida un enano), Mediano, Velocidad 30 pies, Visión en la Oscuridad 120 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original SCAG: CON +2, FUE +1, Velocidad 25 pies (no reducida por armadura pesada), idiomas Común y Enano; Resiliencia Duergar (ventaja contra ilusiones, Hechizado y Paralizado), Entrenamiento Enano en Combate, competencia con herramientas, Sentido de la Piedra y Sensibilidad a la Luz Solar (Desventaja en ataques y Percepción bajo luz directa del sol)]" },
    { n:"Magia Duergar (Duergar Magic)", a:"A", d:"Nv.3: lanzas Enlarge/Reduce sobre ti sin componentes materiales una vez por Descanso Largo. Nv.5: lanzas Invisibility sobre ti, sin componentes materiales, una vez por Descanso Largo. También con espacios. INT, SAB o CAR." },
    { n:"Resiliencia Enana (Dwarven Resilience)", d:"Ventaja en salvaciones contra veneno y resistencia al daño de veneno." },
    { n:"Fortaleza Psiónica (Psionic Fortitude)", d:"Ventaja en las salvaciones para evitar o terminar las condiciones Hechizado y Aturdido." },
  ],

  "Eladrin [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como elfo para cualquier requisito o efecto que pida un elfo), Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original DMG/MTF: DES +2, CAR +1; idiomas Común y Élfico]" },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar Hechizado. [Original: ventaja contra Hechizado y la magia no puede dormirte]" },
    { n:"Paso Feérico (Fey Step)", a:"B", d:"Con una Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas. Usos = bonificador de competencia por Descanso Largo. Nv.3: según tu estación, efecto adicional (CD 8 + comp. + mod. INT/SAB/CAR): Otoño: justo después de usar Paso Feérico, hasta 2 criaturas de tu elección que veas a 10 pies de ti hacen salvación de SAB o quedan Hechizadas por ti 1 minuto, o hasta que tú o tus compañeros les causéis daño; Invierno: al usar Paso Feérico, 1 criatura de tu elección que veas a 5 pies de ti antes de teletransportarte hace salvación de SAB o queda Asustada de ti hasta el final de tu siguiente turno; Primavera: tocas a una criatura voluntaria a 5 pies y ella se teletransporta en tu lugar a un espacio libre a 30 pies que veas; Verano: justo después de usar Paso Feérico, cada criatura de tu elección que veas a 5 pies de ti sufre daño de fuego igual a tu bonificador de competencia. [Original MTF: 1/descanso corto; Verano: daño = mod. CAR]" },
    { n:"Trance", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 4 horas de meditación, durante la cual permaneces consciente. Cuando terminas el trance puedes cambiar de estación y ganar competencia con dos armas o herramientas del Player's Handbook que no tengas, a tu elección, hasta que termines tu siguiente Descanso Largo." },
  ],

  "Fairy [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. Ver también Fairy en The Wild Beyond the Witchlight (mismo texto)." },
    { n:"Magia Feérica (Fairy Magic)", a:"A", d:"Conoces el truco Druidcraft. Nv.3: lanzas Faerie Fire una vez por Descanso Largo. Nv.5: lanzas Enlarge/Reduce una vez por Descanso Largo. También con espacios de conjuro. INT, SAB o CAR." },
    { n:"Vuelo (Flight)", d:"Gracias a tus alas tienes Velocidad de vuelo igual a tu Velocidad caminando. No puedes usarla con armadura media o pesada." },
  ],

  "Firbolg [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, SAB +2, FUE +1; idiomas Común, Élfico y Gigante]" },
    { n:"Magia Firbolg (Firbolg Magic)", a:"A", d:"Lanzas Detect Magic y Disguise Self una vez cada uno por Descanso Largo (también con espacios); con Disguise Self puedes parecer hasta 3 pies más bajo o más alto. INT, SAB o CAR. [Original: recarga con descanso corto o largo; SAB]" },
    { n:"Paso Oculto (Hidden Step)", a:"B", d:"Con una Acción Adicional te vuelves Invisible hasta el inicio de tu siguiente turno o hasta que ataques, causes daño u obligues a una salvación. Usos = bonificador de competencia por Descanso Largo. [Original: 1 uso por descanso corto o largo]" },
    { n:"Constitución Poderosa (Powerful Build)", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Habla de Bestias y Hojas (Speech of Beast and Leaf)", d:"Puedes comunicarte de forma limitada con bestias y plantas: te entienden pero tú a ellas no. Ventaja en pruebas de Carisma para influir en ellas." },
  ],

  "Githyanki [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: FUE +2, INT +1; idiomas Común y Gith; Maestría Decadente (un idioma y una habilidad o herramienta), Prodigio Marcial (armaduras ligera y media; espadas cortas, espadas largas y mandobles)]" },
    { n:"Conocimiento Astral (Astral Knowledge)", d:"Tras cada Descanso Largo ganas competencia en una habilidad y con un arma o herramienta del Player's Handbook, a tu elección, hasta el final de tu siguiente Descanso Largo." },
    { n:"Psiónica Githyanki (Githyanki Psionics)", a:"A", d:"Conoces el truco Mage Hand y la mano es invisible al lanzarlo con este rasgo. Nv.3: lanzas Jump una vez por Descanso Largo. Nv.5: lanzas Misty Step una vez por Descanso Largo. También con espacios de conjuro del nivel adecuado. Ninguno de estos conjuros requiere componentes al lanzarlo con este rasgo. INT, SAB o CAR a tu elección." },
    { n:"Resiliencia Psíquica (Psychic Resilience)", d:"Resistencia al daño psíquico." },
  ],

  "Githzerai [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: SAB +2, INT +1; idiomas Común y Gith]" },
    { n:"Disciplina Mental (Mental Discipline)", d:"Ventaja en las salvaciones para evitar o terminar Hechizado y Asustado." },
    { n:"Psiónica Githzerai (Githzerai Psionics)", a:"AR", d:"Conoces el truco Mage Hand y la mano es invisible al lanzarlo con este rasgo. Nv.3: lanzas Shield una vez por Descanso Largo. Nv.5: lanzas Detect Thoughts una vez por Descanso Largo. También con espacios de conjuro del nivel adecuado. Ninguno de estos conjuros requiere componentes al lanzarlo con este rasgo. INT, SAB o CAR a tu elección. [Original MTF: SAB]" },
    { n:"Resiliencia Psíquica (Psychic Resilience)", d:"Resistencia al daño psíquico." },
  ],

  "Goblin [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como goblinoide para cualquier requisito o efecto que pida un goblinoide), Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, DES +2, CON +1; idiomas Común y Goblin]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Furia del Pequeño (Fury of the Small)", a:"O", d:"Una vez por turno, cuando dañas con un ataque o conjuro a una criatura de tamaño mayor que el tuyo, infliges daño extra igual a tu bonificador de competencia. Usos = bonificador de competencia por Descanso Largo. [Original VGtM: daño extra = tu nivel; recarga con descanso corto o largo]" },
    { n:"Escape Ágil (Nimble Escape)", a:"B", d:"Puedes realizar la acción Retirarse o Esconderse como Acción Adicional en cada uno de tus turnos." },
  ],

  "Goliat [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC: FUE +2, CON +1; idiomas Común y Gigante]" },
    { n:"Pequeño Gigante (Little Giant)", d:"Competencia en Atletismo. Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar. [Original: Atleta Natural + Constitución Poderosa]" },
    { n:"Nacido en la Montaña (Mountain Born)", d:"Resistencia al daño de frío. También te aclimatas de forma natural a las grandes altitudes, aunque nunca hayas estado en ninguna; esto incluye elevaciones por encima de 20.000 pies." },
    { n:"Resistencia de Piedra (Stone's Endurance)", a:"R", d:"Cuando recibes daño, puedes usar tu Reacción: tiras 1d12 + mod. de CON y reduces el daño en ese total. Usos = bonificador de competencia por Descanso Largo. [Original: recarga con descanso corto o largo]" },
  ],

  "Harengon [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Gatillo de Liebre (Hare-Trigger)", d:"Sumas tu bonificador de competencia a las tiradas de iniciativa." },
    { n:"Sentidos Leporinos (Leporine Senses)", d:"Competencia en Percepción." },
    { n:"Pies Afortunados (Lucky Footwork)", a:"R", d:"Cuando fallas una salvación de DES, puedes usar tu Reacción para sumar 1d4 a la tirada (puede convertirla en éxito). No puedes usarlo Derribado ni con Velocidad 0." },
    { n:"Salto de Conejo (Rabbit Hop)", a:"B", d:"Con una Acción Adicional saltas un nº de pies igual a 5 × tu bonificador de competencia sin provocar ataques de oportunidad. Usos = bonificador de competencia por Descanso Largo. Requiere Velocidad mayor que 0." },
  ],

  "Hobgoblin [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como goblinoide para cualquier requisito o efecto que pida un goblinoide), Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, CON +2, INT +1; idiomas Común y Goblin; Entrenamiento Marcial (dos armas marciales y armadura ligera) y Salvar las Apariencias (si fallas un ataque, prueba o salvación suma +1 por aliado a 30 pies, máx. +5; 1/descanso corto o largo)]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Don Feérico (Fey Gift)", a:"B", d:"Con una Acción Adicional realizas la acción Ayudar. Usos = bonificador de competencia por Descanso Largo. Nv.3: cada vez que realices la acción Ayudar con este rasgo, eliges una opción: Hospitalidad (tú y la criatura a la que ayudas ganáis cada uno 1d6 + comp. PG temporales), Pasaje (tú y la criatura a la que ayudas aumentáis 10 pies vuestra Velocidad caminando hasta el inicio de tu siguiente turno) o Rencor (hasta el inicio de tu siguiente turno, la primera vez que la criatura a la que ayudas impacte a un objetivo con una tirada de ataque, ese objetivo tiene Desventaja en la siguiente tirada de ataque que haga durante el siguiente minuto)." },
    { n:"Fortuna de los Muchos (Fortune from the Many)", a:"O", d:"Cuando fallas un ataque, una prueba o una salvación, sumas a la tirada un bonus igual al nº de aliados que veas a 30 pies (máx. +3). Usos = bonificador de competencia por Descanso Largo." },
  ],

  "Genasi de Aire [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC: CON +2, DES +1, Velocidad 30 pies, sin visión en la oscuridad, idiomas Común y Primordial]" },
    { n:"Aliento Interminable (Unending Breath)", d:"Puedes contener la respiración indefinidamente mientras no estés Incapacitado." },
    { n:"Resistencia al Rayo (Lightning Resistance)", d:"Resistencia al daño de relámpago." },
    { n:"Mezclarse con el Viento (Mingle with the Wind)", a:"A", d:"Conoces el truco Shocking Grasp. Nv.3: lanzas Feather Fall una vez por Descanso Largo sin componentes materiales. Nv.5: lanzas Levitate una vez por Descanso Largo sin componentes materiales. También con espacios de conjuro. INT, SAB o CAR. [Original EEPC: sólo Levitate 1/Descanso Largo; CON]" },
  ],

  "Genasi de Tierra [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC: CON +2, FUE +1; idiomas Común y Primordial]" },
    { n:"Paso de Tierra (Earth Walk)", d:"Puedes moverte por terreno difícil sin gastar movimiento adicional si usas tu Velocidad caminando sobre el suelo o sobre un piso." },
    { n:"Fundirse con la Piedra (Merge with Stone)", a:"B", d:"Conoces el truco Blade Ward y puedes lanzarlo como Acción Adicional un nº de veces igual a tu bonificador de competencia (se recuperan con un Descanso Largo). Nv.5: lanzas Pass without Trace una vez por Descanso Largo sin componentes materiales (también con espacios de nivel 2+). INT, SAB o CAR. [Original EEPC: sólo Pass without Trace 1/Descanso Largo; CON]" },
  ],

  "Genasi de Fuego [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC: CON +2, INT +1; idiomas Común y Primordial]" },
    { n:"Resistencia al Fuego (Fire Resistance)", d:"Resistencia al daño de fuego." },
    { n:"Alcanzar la Llama (Reach to the Blaze)", a:"A", d:"Conoces el truco Produce Flame. Nv.3: lanzas Burning Hands una vez por Descanso Largo. Nv.5: lanzas Flame Blade una vez por Descanso Largo sin componentes materiales. También con espacios. INT, SAB o CAR. [Original EEPC: sólo Burning Hands (Nv.3); CON]" },
  ],

  "Genasi de Agua [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies y nado 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC: CON +2, SAB +1; idiomas Común y Primordial; sin visión en la oscuridad]" },
    { n:"Resistencia al Ácido (Acid Resistance)", d:"Resistencia al daño de ácido." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Llamada de la Ola (Call to the Wave)", a:"A", d:"Conoces el truco Acid Splash. Nv.3: lanzas Create or Destroy Water una vez por Descanso Largo. Nv.5: lanzas Water Walk una vez por Descanso Largo sin componentes materiales. También con espacios. INT, SAB o CAR. [Original EEPC: truco Shape Water y sólo Create or Destroy Water; CON]" },
  ],

  "Kenku [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: DES +2, SAB +1; lees y escribes Común y Auran pero sólo hablas mediante Mimetismo; Falsificación Experta, Entrenamiento Kenku (2 habilidades de Acrobacias, Engaño, Sigilo, Juego de Manos)]" },
    { n:"Duplicación Experta (Expert Duplication)", d:"Ventaja en las pruebas para copiar escritura u obras de artesanía propias o ajenas." },
    { n:"Memoria Kenku (Kenku Recall)", a:"O", d:"Competencia en dos habilidades a tu elección. Cuando haces una prueba con una habilidad en la que eres competente, puedes darte Ventaja; usos = bonificador de competencia por Descanso Largo." },
    { n:"Mimetismo (Mimicry)", d:"Imitas con precisión sonidos y voces que hayas oído. Quien oiga la imitación puede detectarla con una prueba de Sabiduría (Perspicacia) contra CD 8 + comp. + mod. CAR." },
  ],

  "Kobold [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: DES +2, idiomas Común y Dracónico; Grovel, Cower and Beg, Tácticas de Manada y Sensibilidad a la Luz Solar]" },
    { n:"Grito Dracónico (Draconic Cry)", a:"B", d:"Con una Acción Adicional das Ventaja en las tiradas de ataque a ti y a tus aliados contra enemigos a 10 pies de ti que te oigan, hasta el inicio de tu siguiente turno. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Legado Kobold (Kobold Legacy)", d:"Eliges uno: Astucia (Craftiness) — competencia en Arcanos, Investigación, Medicina, Juego de Manos o Supervivencia; Desafío (Defiance) — Ventaja en las salvaciones contra Asustado; o Hechicería Dracónica (Draconic Sorcery) — conoces un truco de Hechicero (INT, SAB o CAR)." },
  ],

  "Leonin [MOoT]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Leonin. Aumento: CON +2, FUE +1." },
    { n:"Garras (Claws)", d:"Armas naturales: 1d4 + mod. de FUE de daño cortante." },
    { n:"Instintos de Cazador (Hunter's Instincts)", d:"Competencia en una habilidad entre Atletismo, Intimidación, Percepción y Supervivencia." },
    { n:"Rugido Amenazante (Daunting Roar)", a:"B", d:"Con una Acción Adicional, las criaturas a 10 pies que te oigan hacen salvación de SAB (CD 8 + comp. + mod. CON) o quedan Asustadas hasta el final de tu siguiente turno. Se recupera con un descanso corto o largo." },
  ],

  "Lizardfolk [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies y nado igual a tu Velocidad. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: CON +2, SAB +1; idiomas Común y Dracónico; Artesano Astuto, Instinto de Cazador y Mandíbulas Hambrientas con PG temporales = mod. CON, 1/descanso corto o largo]" },
    { n:"Mordisco (Bite)", d:"Arma natural: 1d6 + mod. de FUE de daño cortante." },
    { n:"Contener la Respiración (Hold Breath)", d:"Puedes contener la respiración hasta 15 minutos." },
    { n:"Mandíbulas Hambrientas (Hungry Jaws)", a:"B", d:"Con una Acción Adicional haces un ataque de mordisco; si impactas ganas PG temporales iguales a tu bonificador de competencia. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Armadura Natural (Natural Armor)", d:"Tienes la piel dura y escamosa. Si no llevas armadura, tu CA base es 13 + mod. de DES. Puedes usar tu armadura natural para determinar tu CA si la armadura que llevas te dejaría con una CA menor. Los beneficios de un escudo se aplican con normalidad mientras uses tu armadura natural." },
    { n:"Intuición Natural (Nature's Intuition)", d:"Competencia en dos habilidades entre Trato con Animales, Medicina, Naturaleza, Percepción, Sigilo y Supervivencia." },
  ],

  "Loxodon [GGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y Loxodon. Aumento: CON +2, SAB +1." },
    { n:"Constitución Poderosa (Powerful Build)", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Serenidad Loxodon (Loxodon Serenity)", d:"Ventaja en las salvaciones para evitar Hechizado y Asustado." },
    { n:"Armadura Natural (Natural Armor)", d:"Sin armadura, tu CA es 12 + mod. de CON. Puedes usar tu armadura natural para determinar tu CA si la armadura que llevas te dejaría con una CA menor. Los beneficios de un escudo se aplican con normalidad mientras usas tu armadura natural. (Las formas de calcular la CA no se acumulan: eliges una.)" },
    { n:"Trompa (Trunk)", d:"Puedes agarrar cosas con la trompa y usarla como esnórquel. Tiene un alcance de 5 pies y puede levantar un número de libras igual a 5 × tu puntuación de FUE. Con ella puedes realizar tareas sencillas: levantar, soltar, sostener, empujar o tirar de un objeto o criatura; abrir o cerrar una puerta o recipiente; agarrar a alguien o hacer un ataque desarmado. Tu DM puede permitir otras tareas sencillas. La trompa no puede empuñar armas ni escudos ni hacer nada que requiera precisión manual, como usar herramientas u objetos mágicos o realizar los componentes somáticos de un conjuro." },
    { n:"Olfato Agudo (Keen Smell)", d:"Ventaja en pruebas de Sabiduría (Percepción y Supervivencia) e Inteligencia (Investigación) que impliquen el olfato." },
  ],

  "Minotauro [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MOoT: FUE +2, CON +1; idiomas Común y Minotauro; Presencia Imponente (competencia en Intimidación o Persuasión) en vez de Recuerdo del Laberinto]" },
    { n:"Cuernos (Horns)", d:"Armas naturales: 1d6 + mod. de FUE de daño perforante." },
    { n:"Embestida Perforante (Goring Rush)", a:"B", d:"Al usar la acción Correr y moverte al menos 20 pies, puedes hacer un ataque con los cuernos como Acción Adicional." },
    { n:"Cuernos Martillo (Hammering Horns)", a:"B", d:"Cuando impactas con un ataque cuerpo a cuerpo en tu acción Atacar, puedes usar una Acción Adicional para empujar al objetivo (hasta un tamaño mayor que tú, a 5 pies): salvación de FUE (CD 8 + comp. + mod. FUE) o lo empujas hasta 10 pies." },
    { n:"Recuerdo del Laberinto (Labyrinthine Recall)", d:"Siempre sabes dónde está el norte. Ventaja en pruebas de Sabiduría (Supervivencia) para orientarte o rastrear." },
  ],

  "Orco [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM/EGtW: FUE +2, CON +1; idiomas Común y Orco; Agresivo (Acción Adicional: moverte tu Velocidad hacia un enemigo que veas u oigas), Intuición Primaria (2 habilidades de Trato con Animales, Perspicacia, Intimidación, Medicina, Naturaleza, Percepción, Supervivencia)]" },
    { n:"Subida de Adrenalina (Adrenaline Rush)", a:"B", d:"Con una Acción Adicional realizas la acción Correr y ganas PG temporales iguales a tu bonificador de competencia. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Constitución Poderosa (Powerful Build)", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Resistencia Implacable (Relentless Endurance)", a:"O", d:"Cuando quedas a 0 PG sin morir de golpe, quedas a 1 PG. 1/Descanso Largo." },
  ],

  "Owlin [SCC]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 120 pies. Idiomas: Común y uno más. Aumento: +2 a una característica y +1 a otra." },
    { n:"Plumas Silenciosas (Silent Feathers)", d:"Competencia en Sigilo." },
    { n:"Vuelo (Flight)", d:"Tienes Velocidad de vuelo igual a tu Velocidad caminando. No puedes usarla con armadura media o pesada." },
  ],

  "Sátiro [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano, Velocidad 35 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MOoT: CAR +2, DES +1; idiomas Común y Silvano; Embestida 1d4]" },
    { n:"Embestida (Ram)", d:"Armas naturales: 1d6 + mod. de FUE de daño contundente." },
    { n:"Resistencia Mágica (Magic Resistance)", d:"Ventaja en las salvaciones contra conjuros." },
    { n:"Saltos Alegres (Mirthful Leaps)", d:"Cuando haces un salto de longitud o altura, tira 1d8 y suma el resultado a los pies que recorres (también en salto sin carrerilla)." },
    { n:"Juerguista (Reveler)", d:"Competencia en Interpretación y Persuasión, y con un instrumento musical a tu elección." },
  ],

  "Elfo Marino [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como elfo para cualquier requisito o efecto que pida un elfo), Mediano, Velocidad 30 pies y nado igual a tu Velocidad, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: DES +2, CON +1; idiomas Común, Élfico y Aquan; Entrenamiento de Elfo Marino (lanza, tridente, ballesta ligera, red); Hijo del Mar con nado 30 pies]" },
    { n:"Hijo del Mar (Child of the Sea)", d:"Respiras aire y agua; resistencia al daño de frío (según MotM)." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar Hechizado." },
    { n:"Amigo del Mar (Friend of the Sea)", d:"Con gestos y sonidos comunicas ideas sencillas a cualquier Bestia con Velocidad de nado." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Trance", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 4 horas de meditación, durante la cual permaneces consciente. Cuando terminas el trance puedes ganar competencia con dos armas o herramientas del Player's Handbook que no tengas, a tu elección, hasta que termines tu siguiente Descanso Largo." },
  ],

  "Shadar-kai [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta como elfo para requisitos), Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: DES +2, CON +1; idiomas Común y Élfico; Bendición de la Reina Cuervo 1/Descanso Largo]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Bendición de la Reina Cuervo (Blessing of the Raven Queen)", a:"B", d:"Con una Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas. Usos = bonificador de competencia por Descanso Largo. Nv.3: además ganas resistencia a todo daño hasta el inicio de tu siguiente turno (aspecto fantasmal)." },
    { n:"Resistencia Necrótica (Necrotic Resistance)", d:"Resistencia al daño necrótico." },
    { n:"Trance", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 4 horas de meditación, durante la cual permaneces consciente. Cuando terminas el trance puedes ganar competencia con dos armas o herramientas del Player's Handbook que no tengas, a tu elección, hasta que termines tu siguiente Descanso Largo." },
  ],

  "Shifter [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original ERftLW: Beasthide CON +2 FUE +1; Longtooth FUE +2 DES +1; Swiftstride DES +2 CAR +1; Wildhunt SAB +2; idioma Común; Sentidos Agudos (Percepción); Cambiar de Forma 1/descanso corto o largo con PG temporales = nivel + mod. CON]" },
    { n:"Instintos Bestiales (Bestial Instincts)", d:"Competencia en una habilidad entre Acrobacias, Atletismo, Intimidación y Supervivencia." },
    { n:"Cambio de Forma (Shifting)", a:"BR", d:"Con una Acción Adicional adoptas un aspecto más bestial durante 1 minuto, hasta que mueras o hasta que vuelvas a tu aspecto normal con una Acción Adicional. Al transformarte ganas PG temporales iguales a 2 × tu bonificador de competencia. Usos = bonificador de competencia por Descanso Largo. Cada vez que te transformas ganas además un beneficio según la opción que elegiste al crear el personaje (no se elige en cada uso). Beasthide: 1d6 PG temporales adicionales y, mientras estés transformado, +1 a la CA. Longtooth: al transformarte y, con una Acción Adicional, en tus otros turnos mientras estés transformado, haces un ataque desarmado con tus colmillos alargados; si impactas, infliges 1d6 + mod. FUE de daño perforante. Swiftstride: mientras estés transformado, tu Velocidad caminando aumenta 10 pies y, como Reacción, puedes moverte hasta 10 pies cuando una criatura termina su turno a 5 pies de ti, sin provocar ataques de oportunidad. Wildhunt: mientras estés transformado, Ventaja en pruebas de SAB y ninguna criatura a 30 pies de ti puede hacer una tirada de ataque con Ventaja contra ti salvo que estés Incapacitado." },
  ],

  "Simic Hybrid [GGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Élfico o Vedalken. Aumento: CON +2 y +1 a otra característica." },
    { n:"Mejora Animal (Animal Enhancement)", a:"A", d:"Nv.1 eliges una: Planeo de Manta (cuando caes y no estás Incapacitado, puedes restar hasta 100 pies a la distancia de caída al calcular el daño por caída y avanzar hasta 2 pies en horizontal por cada pie que desciendas), Trepador Ágil (Velocidad de trepar = tu Velocidad) o Adaptación Acuática (respiras aire y agua; nado = tu Velocidad). Nv.5 eliges una de las opciones de Nv.1 que no tomaste, o una de estas: Apéndices de Agarre (garras o tentáculos; Acción para agarrar; 1d6 + FUE contundente; agarras como Acción Adicional tras impactar), Caparazón (+1 CA sin armadura pesada) o Escupitajo Ácido (Acción: rocías ácido sobre una criatura u objeto que veas a 30 pies o menos; sufre 2d10 de daño ácido a menos que supere una salvación de DES, CD 8 + comp. + mod. CON, y en ese caso no sufre daño; 3d10 en Nv.11 y 4d10 en Nv.17; mod. CON veces (mínimo una) por Descanso Largo)." },
  ],

  "Tabaxi [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies y trepar 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: DES +2, CAR +1, trepar 20 pies; idiomas Común y uno a elegir; garras 1d4]" },
    { n:"Agilidad Felina (Feline Agility)", a:"O", d:"Cuando te mueves en tu turno en combate, puedes duplicar tu Velocidad hasta el final del turno. Se recupera cuando terminas un turno sin moverte (0 pies)." },
    { n:"Garras de Gato (Cat's Claws)", d:"Armas naturales: 1d6 + mod. de FUE de daño cortante." },
    { n:"Talento Felino (Cat's Talent)", d:"Competencia en Percepción y Sigilo." },
  ],

  "Tortle [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original The Tortle Package (TP): FUE +2, SAB +1; idiomas Común y Aquan; Garras 1d4; Instinto de Supervivencia (Supervivencia); Defensa de Caparazón como Acción]" },
    { n:"Garras (Claws)", d:"Armas naturales: 1d6 + mod. de FUE de daño cortante." },
    { n:"Contener la Respiración (Hold Breath)", d:"Puedes contener la respiración hasta 1 hora." },
    { n:"Armadura Natural (Natural Armor)", d:"No puedes llevar armadura; tu CA base es 17 (sin sumar DES) y puedes usar escudo." },
    { n:"Defensa de Caparazón (Shell Defense)", a:"AB", d:"Con una acción te encierras en tu caparazón. Hasta que salgas, ganas +4 a la CA y Ventaja en las salvaciones de FUE y CON. Mientras estés en el caparazón: estás Derribado, tu Velocidad es 0 y no puede aumentar, tienes Desventaja en las salvaciones de DES, no puedes usar Reacciones y la única acción que puedes realizar es una Acción Adicional para salir del caparazón." },
    { n:"Intuición Natural (Nature's Intuition)", d:"Competencia en una habilidad entre Trato con Animales, Medicina, Naturaleza, Percepción, Sigilo y Supervivencia." },
  ],

  "Tritón [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies y nado igual a tu Velocidad, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: FUE, CON y CAR +1; idiomas Común y Primordial; nado 30 pies]" },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Control del Aire y el Agua (Control Air and Water)", a:"A", d:"Lanzas Fog Cloud; Nv.3 Gust of Wind; Nv.5 Water Walk (según MotM; Wall of Water en el original). Cada uno una vez por Descanso Largo, también con espacios. INT, SAB o CAR. [Original: CAR]" },
    { n:"Emisario del Mar (Emissary of the Sea)", d:"Comunicas ideas sencillas a Bestias, Elementales y Monstruosidades con Velocidad de nado; te entienden pero tú a ellas no. [Original: sólo bestias que respiran agua]" },
    { n:"Guardián de las Profundidades (Guardian of the Depths)", d:"Resistencia al daño de frío." },
  ],

  "Vedalken [GGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común, Vedalken y uno más. Aumento: INT +2, SAB +1." },
    { n:"Desapasionamiento Vedalken (Vedalken Dispassion)", d:"Ventaja en todas las salvaciones de INT, SAB y CAR." },
    { n:"Precisión Incansable (Tireless Precision)", d:"Competencia en una habilidad (Arcanos, Historia, Investigación, Medicina, Interpretación o Juego de Manos) y una herramienta a elección. En pruebas con ellas, tira 1d4 y súmalo al total." },
    { n:"Parcialmente Anfibio (Partially Amphibious)", d:"Absorbes oxígeno por la piel: respiras bajo el agua hasta 1 hora; luego no puedes repetirlo hasta un Descanso Largo." },
  ],

  "Verdan [AI]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño (Mediano al llegar a Nv.5 tras un estirón de 60 cm o más), Velocidad 30 pies. Idiomas: Común, Goblin y uno más ligado a tu trasfondo. Aumento: CAR +2, CON +1." },
    { n:"Curación de Sangre Negra (Black Blood Healing)", d:"Cuando tiras 1 o 2 en un Dado de Golpe gastado al final de un descanso corto, puedes repetir la tirada y usar el nuevo resultado." },
    { n:"Telepatía Limitada (Limited Telepathy)", d:"Comunicas ideas sencillas por telepatía con criaturas que veas a 30 pies que entiendan al menos un idioma." },
    { n:"Persuasivo (Persuasive)", d:"Competencia en Persuasión." },
    { n:"Percepción Telepática (Telepathic Insight)", d:"Ventaja en todas las salvaciones de SAB y CAR." },
  ],

  "Yuan-ti [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM Yuan-ti Pureblood: CAR +2, INT +1; idiomas Común, Abisal y Dracónico; inmune al veneno y a Envenenado; Hechizo Innato con Suggestion en Nv.3]" },
    { n:"Resistencia Mágica (Magic Resistance)", d:"Ventaja en las salvaciones contra conjuros." },
    { n:"Resiliencia al Veneno (Poison Resilience)", d:"Ventaja en las salvaciones contra Envenenado y resistencia al daño de veneno." },
    { n:"Lanzamiento Serpentino (Serpentine Spellcasting)", a:"A", d:"Conoces el truco Poison Spray y lanzas Animal Friendship a voluntad (sólo serpientes). Nv.3: lanzas Suggestion una vez por Descanso Largo (también con espacios de nivel 2+). INT, SAB o CAR." },
  ],


  /* ════════════════════════════════════════════════════════════════
     EBERRON (EFotA 2024 / ERftLW 2014)
  ════════════════════════════════════════════════════════════════ */

  "Changeling [EFotA 2024]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies. (Eberron: Forge of the Artificer)" },
    { n:"Instintos de Changeling (Changeling Instincts)", d:"Competencia en dos habilidades entre Engaño, Perspicacia, Intimidación, Interpretación y Persuasión." },
    { n:"Cambiaformas (Shape-Shifter)", a:"A", d:"Con una acción cambias tu apariencia y tu voz; tú decides los detalles (coloración, longitud del cabello, sexo) y puedes ajustar altura y peso y cambiar tu tamaño entre Mediano y Pequeño. Puedes parecerte a un miembro de otra especie jugable, aunque tus estadísticas de juego no cambian. No puedes copiar el aspecto de un individuo que nunca hayas visto y debes adoptar una forma con la misma disposición básica de miembros. Este rasgo no cambia tu ropa ni tu equipo. Mientras estés transformado con este rasgo, tienes Ventaja en las pruebas de Carisma. Permaneces en la nueva forma hasta que uses una acción para volver a tu verdadera forma." },
  ],

  "Kalashtar [EFotA 2024]": [
    { n:"Rasgos Básicos", d:"Aberración, Mediano (6–7 pies), Velocidad 30 pies. (Eberron: Forge of the Artificer) [Original ERftLW 2014: SAB +2, CAR +1; humanoide; idiomas Común, Quori y uno más]" },
    { n:"Mente Dual (Dual Mind)", d:"Ventaja en las salvaciones de SAB y CAR. [ERftLW: ventaja en todas las salvaciones de SAB]" },
    { n:"Disciplina Mental (Mental Discipline)", d:"Resistencia al daño psíquico." },
    { n:"Vínculo Mental (Mind Link)", a:"A", d:"Tienes telepatía con un alcance en pies igual a 10 × tu nivel. Mientras la usas para hablar telepáticamente con una criatura, puedes usar una acción de Magia para darle la capacidad de hablar telepáticamente contigo durante 1 hora o hasta que uses otra acción de Magia para terminar este efecto." },
    { n:"Desconectado de los Sueños (Severed from Dreams)", d:"No puedes ser objetivo del conjuro Dream. Al terminar un Descanso Largo ganas competencia en una habilidad a tu elección hasta el siguiente Descanso Largo." },
  ],

  "Kalashtar [ERftLW 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común, Quori y uno más. Aumento: SAB +2, CAR +1." },
    { n:"Mente Dual (Dual Mind)", d:"Ventaja en todas las salvaciones de Sabiduría." },
    { n:"Disciplina Mental (Mental Discipline)", d:"Resistencia al daño psíquico." },
    { n:"Vínculo Mental (Mind Link)", a:"A", d:"Puedes hablar telepáticamente con cualquier criatura que veas a una distancia en pies igual a 10 × tu nivel. No necesitáis compartir idioma, pero la criatura debe entender al menos uno. Mientras la usas así, puedes usar tu acción para darle la capacidad de hablar telepáticamente contigo durante 1 hora o hasta que lo termines con una acción; para ello la criatura debe poder verte y estar dentro del alcance. Solo puedes dárselo a una criatura a la vez: concedérselo a una se lo quita a otra." },
    { n:"Desconectado de los Sueños (Severed from Dreams)", d:"Inmune a los efectos que requieren soñar (p. ej. Dream), pero no a los de sueño mágico (Sleep)." },
  ],

  "Khoravar [EFotA 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–6 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies. (Eberron: Forge of the Artificer)" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Don Feérico (Fey Gift)", d:"Conoces el truco Friends; tras un Descanso Largo puedes cambiarlo por otro truco de Clérigo, Druida o Mago. Característica de lanzamiento (INT, SAB o CAR) elegida al escoger la especie." },
    { n:"Resiliencia al Letargo (Lethargy Resilience)", d:"Si fallas una salvación contra la condición Inconsciente, la superas en su lugar. Se recupera tras 1d4 Descansos Largos." },
    { n:"Versatilidad con Habilidades (Skill Versatility)", d:"Ganas competencia en una habilidad o herramienta; puedes cambiarla tras cada Descanso Largo." },
  ],

  "Warforged [EFotA 2024]": [
    { n:"Rasgos Básicos", d:"Constructo, Mediano (6–8 pies) o Pequeño (3–4 pies), Velocidad 30 pies. (Eberron: Forge of the Artificer) [Original ERftLW 2014: CON +2 y +1 a otra, Humanoide, idiomas Común y uno más]" },
    { n:"Resiliencia de Constructo (Construct Resilience)", d:"Resistencia al daño de veneno y Ventaja en las salvaciones contra Envenenado." },
    { n:"Protección Integrada (Integrated Protection)", d:"+1 a la CA. La armadura que te pones no puede quitarse contra tu voluntad mientras vivas." },
    { n:"Descanso del Centinela (Sentry's Rest)", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 6 horas inactivo e inmóvil, aunque consciente." },
    { n:"Diseño Especializado (Specialized Design)", d:"Competencia en una habilidad y una herramienta a tu elección." },
    { n:"Incansable (Tireless)", d:"No sufres Agotamiento por deshidratación, desnutrición ni asfixia." },
  ],

  "Warforged [ERftLW 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. (Constructo solo en la versión 2024.) Inmune a los efectos mágicos de envejecimiento. Idiomas: Común y uno más. Aumento: CON +2 y +1 a otra característica." },
    { n:"Resiliencia Constructiva (Constructed Resilience)", d:"Ventaja en salvaciones contra veneno, resistencia al daño de veneno, inmune a enfermedad, no necesitas comer, beber ni respirar y no duermes (la magia no puede dormirte)." },
    { n:"Descanso del Centinela (Sentry's Rest)", d:"Pasas 6 horas inactivo e inmóvil durante un Descanso Largo, aparentando ser inerte pero consciente." },
    { n:"Protección Integrada (Integrated Protection)", d:"+1 a la CA. Solo puedes ponerte armaduras con las que seas competente. Para ponerte una armadura que no sea un escudo debes incorporarla a tu cuerpo durante 1 hora, manteniéndote en contacto con ella; para quitártela debes dedicar 1 hora a retirarla. Puedes descansar mientras la incorporas o retiras así. Mientras vivas, la armadura incorporada a tu cuerpo no puede quitarse contra tu voluntad." },
    { n:"Diseño Especializado (Specialized Design)", d:"Competencia en una habilidad y una herramienta." },
  ],


  /* ════════════════════════════════════════════════════════════════
     RAVENLOFT (THW 2024 / VRGtR 2014)
  ════════════════════════════════════════════════════════════════ */

  "Dhampir [THW 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 35 pies, Visión en la Oscuridad 60 pies. (Ravenloft: The Horrors Within)" },
    { n:"Trepar como Araña (Spider Climb)", d:"Velocidad de trepar igual a tu Velocidad; desde Nv.3 trepas por superficies verticales y techos con las manos libres." },
    { n:"Rastro de No-Muerte (Trace of Undeath)", d:"Resistencia al daño necrótico." },
    { n:"Mordisco Vampírico (Vampiric Bite)", d:"Cuando usas tu Ataque Desarmado e infliges daño, puedes morder con tus colmillos: infliges daño perforante igual a 1d4 + mod. de CON en lugar del daño normal del Ataque Desarmado. Además, cuando infliges este daño a una criatura que no sea Constructo ni No-Muerto, puedes potenciarte de una forma a tu elección: Drenar (recuperas PG iguales al daño perforante infligido) o Fortalecer (ganas un bonificador a tu siguiente prueba de característica o tirada de ataque en el siguiente minuto igual al daño perforante infligido). Puedes potenciarte con este rasgo un número de veces igual a tu bonificador de competencia y recuperas todos los usos al terminar un Descanso Largo." },
  ],

  "Dhampir [VRGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Legado Ancestral (Ancestral Legacy)", d:"Si sustituyes la especie de un personaje existente, conservas sus competencias en habilidades y velocidades de trepar, volar o nadar; si no, ganas competencia en dos habilidades." },
    { n:"Naturaleza Sin Muerte (Deathless Nature)", d:"No necesitas respirar." },
    { n:"Trepar como Araña (Spider Climb)", d:"Velocidad de trepar igual a tu Velocidad; desde Nv.3 trepas por superficies verticales y techos con las manos libres." },
    { n:"Mordisco Vampírico (Vampiric Bite)", d:"Tu mordisco de colmillos es un arma natural cuerpo a cuerpo simple con la que eres competente: usas tu mod. de CON (en lugar de FUE) en las tiradas de ataque y de daño, e inflige 1d4 de daño perforante. Mientras te falten la mitad o más de tus PG, tienes Ventaja en las tiradas de ataque con este mordisco. Cuando impactas con él a una criatura que no sea Constructo ni No-Muerto, puedes potenciarte: recuperas PG iguales al daño perforante infligido, o ganas un bonificador a tu siguiente prueba de característica o tirada de ataque igual a ese daño. Puedes potenciarte así un número de veces igual a tu bonificador de competencia; recuperas todos los usos al terminar un Descanso Largo." },
  ],

  "Hexblood [THW 2024]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies. (Ravenloft: The Horrors Within)" },
    { n:"Ficha Siniestra (Eerie Token)", a:"AB", d:"Con una Acción Adicional creas una ficha mágica arrancándote sin daño un mechón de pelo, una uña u otro método similar. Mientras la ficha exista (hasta que termines un Descanso Largo, salvo que se destruya antes), obtienes: Mensaje a Distancia (acción de Magia: envías un mensaje telepático de 25 palabras o menos a la criatura que sostenga o lleve la ficha, si estás a 10 millas o menos de ella) y Visión Remota (si estás a 10 millas o menos de la ficha, acción de Magia: extiendes tus sentidos a través de ella durante 1 minuto, hasta que quedes Incapacitado o hasta que lo termines sin necesidad de acción; ves y oyes desde la ficha como si estuvieras allí. Al terminar este estado, la ficha se destruye de forma inofensiva). Una vez creada una ficha, no puedes crear otra hasta que termines un Descanso Largo." },
    { n:"Magia Maléfica (Hex Magic)", a:"A", d:"Siempre tienes preparados Disguise Self y Hex; los lanzas una vez cada uno por Descanso Largo sin espacio (también con espacios). INT, SAB o CAR." },
  ],

  "Hexblood [VRGtR]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Legado Ancestral (Ancestral Legacy)", d:"Si sustituyes la especie de un personaje existente, conservas sus competencias en habilidades y velocidades de trepar, volar o nadar; si no, ganas competencia en dos habilidades." },
    { n:"Ficha Siniestra (Eerie Token)", a:"AB", d:"Con una Acción Adicional te arrancas sin daño un mechón de pelo, una uña o un diente: queda imbuido de magia hasta que termines un Descanso Largo. Mientras lo esté, puedes: Mensaje Telepático (acción: envías un mensaje de hasta 25 palabras a la criatura que sostenga o lleve la ficha, si estás a 10 millas o menos de ella) y Visión Remota (si estás a 10 millas o menos de la ficha, acción: entras en trance durante 1 minuto, que termina antes si lo descartas sin acción o quedas Incapacitado; ves y oyes desde la ficha como si estuvieras allí, y mientras usas así tus sentidos estás Cegado y Ensordecido respecto a tu entorno; al terminar el trance la ficha se destruye de forma inofensiva). Una vez creada una ficha, no puedes crear otra hasta que termines un Descanso Largo, momento en que te vuelve a crecer la parte que te quitaste." },
    { n:"Magia Maléfica (Hex Magic)", a:"A", d:"Lanzas Disguise Self y Hex una vez cada uno por Descanso Largo sin espacio (también con espacios). INT, SAB o CAR." },
  ],

  "Lupin [THW 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies. (Ravenloft: The Horrors Within)" },
    { n:"Salto Feral (Feral Pounce)", d:"Tus ataques desarmados infligen daño cortante en lugar de contundente. Una vez por turno, cuando impactas con un ataque desarmado en tu acción Atacar, puedes usar a la vez las opciones de Daño y de Empujar." },
    { n:"Aullido (Howl)", a:"B", d:"Con una Acción Adicional, las criaturas a 15 pies hacen salvación de SAB (CD 8 + mod. CON + comp.) o tienen Desventaja en tiradas de ataque y salvaciones hasta el inicio de tu siguiente turno. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Instintos de Licántropo (Werewolf Instincts)", d:"Competencia en Percepción, Sigilo o Supervivencia (a tu elección)." },
  ],

  "Reborn [THW 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies. (Ravenloft: The Horrors Within)" },
    { n:"Escapado de la Muerte (Escaped Death)", d:"Ventaja en las salvaciones contra muerte." },
    { n:"Perdurable (Everlasting)", d:"No sufres Agotamiento por deshidratación, desnutrición ni asfixia. No necesitas dormir y la magia no puede dormirte; haces un Descanso Largo en 4 horas inactivo e inmóvil." },
    { n:"Conocimiento de una Vida Pasada (Knowledge from a Past Life)", a:"O", d:"Competencia en una habilidad. Cuando fallas una prueba de característica, tiras 1d6 y lo sumas al d20. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Resistencia Extraña (Strange Endurance)", d:"Resistencia a un tipo de daño a tu elección: frío, necrótico o veneno." },
  ],

  "Reborn [VRGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Legado Ancestral (Ancestral Legacy)", d:"Si sustituyes la especie de un personaje existente, conservas sus competencias en habilidades y velocidades de trepar, volar o nadar; si no, ganas competencia en dos habilidades." },
    { n:"Naturaleza Sin Muerte (Deathless Nature)", d:"Has escapado de la muerte: tienes Ventaja en las salvaciones contra enfermedad y contra la condición Envenenado, y Resistencia al daño de veneno; tienes Ventaja en las salvaciones contra muerte; no necesitas comer, beber ni respirar; no necesitas dormir y la magia no puede dormirte. Puedes terminar un Descanso Largo en 4 horas si pasas esas horas inactivo e inmóvil, conservando la consciencia." },
    { n:"Conocimiento de una Vida Pasada (Knowledge from a Past Life)", a:"O", d:"Cuando haces una prueba que usa una habilidad, puedes tirar 1d6 tras ver el d20 y sumarlo. Usos = bonificador de competencia por Descanso Largo." },
  ],


  /* ════════════════════════════════════════════════════════════════
     SPELLJAMMER / ASTRAL ADVENTURER'S GUIDE [AAG]
  ════════════════════════════════════════════════════════════════ */

  "Astral Elf [AAG]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta como elfo), Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Fuego Astral (Astral Fire)", d:"Conoces un truco: Dancing Lights, Light o Sacred Flame. INT, SAB o CAR a tu elección." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Paso Estelar (Starlight Step)", a:"B", d:"Con una Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Trance Astral (Astral Trance)", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 4 horas de meditación; al terminar ganas competencia en una habilidad y con un arma o herramienta (PHB) hasta el siguiente Descanso Largo." },
  ],

  "Autognome [AAG]": [
    { n:"Rasgos Básicos", d:"Constructo, Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Carcasa Blindada (Armored Casing)", d:"Sin armadura, tu CA es 13 + mod. de DES." },
    { n:"Hecho para el Éxito (Built for Success)", a:"O", d:"Tras ver una tirada de d20 de ataque, prueba o salvación, sumas 1d4. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Máquina Curativa (Healing Machine)", d:"Si te lanzan el conjuro Mending, puedes gastar un Dado de Golpe, tirarlo y recuperar PG iguales al resultado + tu mod. de CON (mínimo 1 PG). Además, tu creador te diseñó para beneficiarte de conjuros que preservan la vida pero normalmente no afectan a Constructos: Cure Wounds, Healing Word, Mass Cure Wounds, Mass Healing Word y Spare the Dying." },
    { n:"Naturaleza Mecánica (Mechanical Nature)", d:"Resistencia al veneno, inmune a enfermedad, Ventaja en salvaciones contra parálisis y veneno; no necesitas comer, beber ni respirar." },
    { n:"Descanso del Centinela (Sentry's Rest)", d:"Un Descanso Largo requiere 6 horas inactivo e inmóvil pero consciente." },
    { n:"Diseño Especializado (Specialized Design)", d:"Competencia con dos herramientas del PHB." },
  ],

  "Giff [AAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies y nado igual a tu Velocidad. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Chispa Astral (Astral Spark)", a:"O", d:"Al impactar con un arma simple o marcial, infliges daño de fuerza extra igual a tu bonificador de competencia (una vez por turno). Usos = bonificador de competencia por Descanso Largo." },
    { n:"Maestría con Armas de Fuego (Firearms Mastery)", d:"Competencia con todas las armas de fuego, ignoras la propiedad Carga y no tienes Desventaja a larga distancia." },
    { n:"Constitución de Hipopótamo (Hippo Build)", d:"Ventaja en pruebas y salvaciones de FUE; cuentas como una categoría de tamaño mayor para cargar y empujar." },
  ],

  "Hadozee [AAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies y trepar igual a tu Velocidad. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Pies Diestros (Dexterous Feet)", a:"B", d:"Con una Acción Adicional usas los pies para manipular objetos, abrir o cerrar puertas y recipientes, o coger o soltar objetos Diminutos." },
    { n:"Planeo (Glide)", a:"R", d:"Al caer 10 pies o más, con tu Reacción extiendes las membranas y planeas horizontalmente una distancia igual a tu Velocidad sin sufrir daño de caída." },
    { n:"Esquiva Hadozee (Hadozee Dodge)", a:"R", d:"Cuando recibes daño, con tu Reacción tiras 1d6, sumas tu bonificador de competencia y reduces el daño en ese total (mín. 0). Usos = bonificador de competencia por Descanso Largo." },
  ],

  "Plasmoid [AAG]": [
    { n:"Rasgos Básicos", d:"Cieno, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Amorfo (Amorphous)", d:"Puedes pasar por un espacio de tan solo 1 pulgada de ancho, siempre que no lleves puesto ni cargues nada. Tienes Ventaja en las pruebas de característica para iniciar un agarre o escapar de él." },
    { n:"Contener la Respiración (Hold Breath)", d:"Puedes contener la respiración 1 hora." },
    { n:"Resiliencia Natural (Natural Resilience)", d:"Resistencia al daño de ácido y veneno; Ventaja en las salvaciones contra veneno." },
    { n:"Moldear el Cuerpo (Shape Self)", a:"AB", d:"Con una acción remodelas tu cuerpo para tener cabeza, uno o dos brazos, una o dos piernas y manos y pies improvisados, o vuelves a ser una masa sin miembros. Con forma humanoide puedes llevar ropa y armadura hechas para un Humanoide de tu tamaño. Con una Acción Adicional extruyes un seudópodo de hasta 6 pulgadas de ancho y 10 pies de largo, o lo reabsorbes; en esa misma Acción Adicional puedes usarlo para manipular un objeto, abrir o cerrar una puerta o recipiente, o coger o soltar un objeto Diminuto. El seudópodo no tiene órganos sensoriales y no puede atacar, activar objetos mágicos ni levantar más de 10 libras." },
  ],

  "Thri-kreen [AAG]": [
    { n:"Rasgos Básicos", d:"Monstruosidad, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Caparazón Camaleónico (Chameleon Carapace)", a:"A", d:"Sin armadura, tu CA es 13 + mod. de DES. Con una acción cambias la coloración del caparazón: Ventaja en Sigilo para esconderte en un entorno que coincida." },
    { n:"Brazos Secundarios (Secondary Arms)", d:"Dos brazos pequeños que manipulan objetos, abren puertas y recipientes, cogen o sueltan objetos Diminutos o empuñan armas ligeras." },
    { n:"Insomne (Sleepless)", d:"No necesitas dormir y puedes mantenerte consciente en un Descanso Largo (sin actividad intensa)." },
    { n:"Telepatía Thri-kreen (Thri-kreen Telepathy)", d:"Sin ayuda de la magia no puedes hablar los idiomas que conoces que no sean thri-kreen; en su lugar usas telepatía para transmitir tus pensamientos. Tienes la capacidad mágica de transmitir tus pensamientos mentalmente a criaturas voluntarias a 120 pies o menos de ti. La criatura no necesita compartir idioma contigo, pero debe entender al menos uno. El vínculo se rompe si os separáis más de 120 pies, si cualquiera de los dos queda Incapacitado o si cualquiera lo corta mentalmente (sin acción)." },
  ],


  /* ════════════════════════════════════════════════════════════════
     FIZBAN'S TREASURY OF DRAGONS / EXPLORER'S GUIDE TO WILDEMOUNT / TASHA'S
  ════════════════════════════════════════════════════════════════ */

  "Dracónido Cromático [FTD]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Ascendencia Cromática (Chromatic Ancestry)", d:"Negro (ácido), Azul (relámpago), Verde (veneno), Rojo (fuego) o Blanco (frío)." },
    { n:"Arma de Aliento (Breath Weapon)", a:"A", d:"Sustituyes un ataque de tu acción Atacar por un aliento en línea de 30 pies × 5 pies: salvación de DES (CD 8 + CON + comp.), 1d10 del tipo de tu ascendencia (2d10 en Nv.5, 3d10 en Nv.11, 4d10 en Nv.17), mitad si la supera. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Resistencia Dracónica (Draconic Resistance)", d:"Resistencia al tipo de daño de tu ascendencia." },
    { n:"Protección Cromática (Chromatic Warding)", a:"A", d:"Nv.5: con una acción te vuelves inmune al tipo de daño de tu ascendencia durante 1 minuto. 1/Descanso Largo." },
  ],

  "Dracónido Metálico [FTD]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Ascendencia Metálica (Metallic Ancestry)", d:"Latón (fuego), Bronce (relámpago), Cobre (ácido), Oro (fuego) o Plata (frío)." },
    { n:"Arma de Aliento (Breath Weapon)", a:"A", d:"Sustituyes un ataque de tu acción Atacar por un aliento en cono de 15 pies: salvación de DES (CD 8 + CON + comp.), 1d10 del tipo de tu ascendencia (2d10 en Nv.5, 3d10 en Nv.11, 4d10 en Nv.17), mitad si la supera. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Resistencia Dracónica (Draconic Resistance)", d:"Resistencia al tipo de daño de tu ascendencia." },
    { n:"Aliento Metálico (Metallic Breath Weapon)", a:"A", d:"Nv.5: obtienes un segundo aliento. Sustituyes un ataque de tu acción Atacar por una exhalación en un cono de 15 pies; la CD de la salvación es 8 + mod. CON + bonificador de competencia. Cada vez que lo usas, eliges una opción: Aliento Debilitante (cada criatura del cono debe superar una salvación de CON o quedar Incapacitada hasta el inicio de tu siguiente turno) o Aliento Repulsor (cada criatura del cono debe superar una salvación de FUE o ser empujada 20 pies lejos de ti y quedar Derribada). Tras usarlo, no puedes volver a hacerlo hasta que termines un Descanso Largo." },
  ],

  "Dracónido Gema [FTD]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Ascendencia de Gema (Gem Ancestry)", d:"Amatista (fuerza), Cristal (radiante), Esmeralda (psíquico), Zafiro (trueno) o Topacio (necrótico)." },
    { n:"Arma de Aliento (Breath Weapon)", a:"A", d:"Sustituyes un ataque de tu acción Atacar por un aliento en cono de 15 pies: salvación de DES (CD 8 + CON + comp.), 1d10 del tipo de tu ascendencia (2d10 en Nv.5, 3d10 en Nv.11, 4d10 en Nv.17), mitad si la supera. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Resistencia Dracónica (Draconic Resistance)", d:"Resistencia al tipo de daño de tu ascendencia." },
    { n:"Mente Psiónica (Psionic Mind)", d:"Puedes enviar mensajes telepáticos a cualquier criatura que veas a 30 pies o menos de ti. No necesitas compartir idioma con ella para que los entienda, pero la criatura debe ser capaz de entender al menos un idioma." },
    { n:"Vuelo de Gema (Gem Flight)", a:"B", d:"Nv.5: con una Acción Adicional te brotan alas espectrales 1 minuto y tienes Velocidad de vuelo igual a tu Velocidad (flotas). 1/Descanso Largo." },
  ],

  "Dracónido de Sangre de Dragón [EGtW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Dracónico. Aumento: INT +2, CAR +1. Usa la Ascendencia Dracónica y el Arma de Aliento del dracónido del PHB 2014." },
    { n:"Presencia Imponente (Forceful Presence)", d:"Al hacer una prueba de Carisma (Intimidación o Persuasión) puedes hacerla con Ventaja. Una vez usado este rasgo, no puedes volver a usarlo hasta que termines un Descanso Corto o Largo." },
  ],

  "Dracónido Ravenita [EGtW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Dracónico. Aumento: FUE +2, CON +1. Usa la Ascendencia Dracónica y el Arma de Aliento del dracónido del PHB 2014." },
    { n:"Asalto Vengativo (Vengeful Assault)", a:"R", d:"Cuando recibes daño de una criatura a alcance de un arma que empuñas, puedes usar tu Reacción para hacerle un ataque con esa arma. 1/descanso corto o largo." },
  ],

  "Elfo Pálido [EGtW]": [
    { n:"Rasgos Básicos", d:"Subraza de elfo (Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies; Sentidos Agudos, Ascendencia Feérica y Trance como el elfo del PHB 2014). Idiomas: Común y Élfico. Aumento: DES +2, SAB +1." },
    { n:"Sentido Incisivo (Incisive Sense)", d:"Ventaja en pruebas de Investigación y Perspicacia." },
    { n:"Bendición de la Tejedora de Lunas (Blessing of the Moonweaver)", a:"A", d:"Conoces el truco Light. Nv.3: Sleep una vez por Descanso Largo sin componentes materiales. Nv.5: Invisibility (sólo sobre ti) una vez por Descanso Largo sin componentes materiales. SAB es tu característica de lanzamiento." },
  ],

  "Linaje Personalizado [TCE]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño o Mediano (a tu elección), Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2 a una característica a tu elección. Para cualquier rasgo del juego que exija una especie concreta (como elfo o enano), tu especie se considera Linaje Personalizado." },
    { n:"Dote (Feat)", d:"Ganas una dote a tu elección para la que cumplas los requisitos." },
    { n:"Rasgo Variable (Variable Trait)", d:"Eliges una opción: Visión en la Oscuridad de 60 pies, o competencia en una habilidad a tu elección." },
  ],

  /* ═══════════════════════════════════════════
     ONE GRUNG ABOVE (OGA)
  ═══════════════════════════════════════════ */

  "Grung [OGA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, trepar 25 pies. Inmune al daño de veneno y a la condición Envenenado. Competencia en Percepción. Idiomas: Grung. Aumento: DES +2, CON +1." },
    { n:"Alerta Arbórea (Arboreal Alertness)", d:"Competencia en la habilidad Percepción." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Inmunidad al Veneno (Poison Immunity)", d:"Eres inmune al daño de veneno y a la condición Envenenado." },
    { n:"Piel Venenosa (Poisonous Skin)", a:"O", d:"Cualquier criatura que te agarre o entre en contacto directo con tu piel debe superar una salvación de CON (CD 12) o queda Envenenada 1 minuto. Una criatura Envenenada que ya no esté en contacto directo contigo puede repetir la salvación al final de cada uno de sus turnos, terminando el efecto en sí misma si la supera. También puedes aplicar este veneno a cualquier arma perforante como parte de un ataque con ella; en ese caso, al impactar, el objetivo debe superar una salvación de CON (CD 12) o sufrir 2d4 de daño de veneno." },
    { n:"Salto desde Parado (Standing Leap)", d:"Tu salto de longitud llega hasta 25 pies y tu salto de altura hasta 15 pies, con o sin carrerilla." },
    { n:"Dependencia del Agua (Water Dependency)", d:"Si en un día no te sumerges en agua al menos 1 hora, sufres un nivel de Agotamiento al final de ese día. Solo puedes recuperarte de este Agotamiento con magia o sumergiéndote en agua al menos 1 hora." },
  ],
  /* ═══════════════════════════════════════════
     DRAGONLANCE: SHADOW OF THE DRAGON QUEEN (SotDQ)
  ═══════════════════════════════════════════ */

  "Kender [SotDQ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 30 pies. Competencia en una habilidad a elegir (Curiosidad Kender). Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Intrépido (Fearless)", a:"O", d:"Ventaja en las salvaciones para evitar o terminar la condición Asustado. Cuando fallas una salvación para evitar o terminar la condición Asustado, puedes elegir superarla en su lugar. Una vez que superas así una salvación, no puedes volver a hacerlo hasta que termines un Descanso Largo." },
    { n:"Curiosidad Kender (Kender Curiosity)", d:"Por el origen místico de tu pueblo, ganas competencia en una habilidad a tu elección entre Perspicacia, Investigación, Juego de Manos, Sigilo o Supervivencia." },
    { n:"Provocar (Taunt)", a:"B", d:"Con una Acción Adicional lanzas una retahíla de palabras provocadoras a una criatura que esté a 60 pies de ti y pueda oírte y entenderte. El objetivo debe superar una salvación de SAB o tiene Desventaja en las tiradas de ataque contra objetivos que no seas tú hasta el inicio de tu siguiente turno. CD = 8 + bonificador de competencia + mod. INT, SAB o CAR (a elegir al escoger la especie). Usos = bonificador de competencia por Descanso Largo." },
  ],
  /* ═══════════════════════════════════════════
     LOCATHAH RISING (LR)
  ═══════════════════════════════════════════ */

  "Locathah [LR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies. Competencia en Atletismo y Percepción. Idiomas: Común y Aquan. Aumento: FUE +2, DES +1." },
    { n:"Armadura Natural (Natural Armor)", d:"Tienes la piel dura y escamosa. Si no llevas armadura, tu CA es 12 + mod. de DES. Puedes usar tu armadura natural para determinar tu CA si la armadura que llevas te dejaría con una CA menor. Los beneficios de un escudo se aplican con normalidad mientras usas tu armadura natural." },
    { n:"Observador y Atlético (Observant & Athletic)", d:"Competencia en Atletismo y Percepción." },
    { n:"Voluntad de Leviatán (Leviathan Will)", d:"Ventaja en las salvaciones contra ser Hechizado, Asustado, Paralizado, Envenenado, Aturdido o puesto a dormir." },
    { n:"Anfibio Limitado (Limited Amphibiousness)", d:"Puedes respirar aire y agua, pero debes sumergirte al menos una vez cada 4 horas para evitar asfixiarte." },
  ],
  /* ═══════════════════════════════════════════
     LORWYN: FIRST LIGHT (LFL, 2024)
  ═══════════════════════════════════════════ */

  "Boggart [LFL 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta también como goblinoide para cualquier requisito o efecto que pida un goblinoide), Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Furia del Pequeño (Fury of the Small)", a:"O", d:"Cuando dañas con un ataque o conjuro a una criatura de tamaño mayor que el tuyo, puedes infligirle daño extra igual a tu bonificador de competencia. Usos = bonificador de competencia por Descanso Largo, y no más de una vez por turno." },
    { n:"Escape Ágil (Nimble Escape)", a:"B", d:"Puedes realizar la acción Retirarse o Esconderse como Acción Adicional en cada uno de tus turnos." },
  ],

  "Elfo [LFL 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (5–6 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Linaje Élfico (Elven Lineage)", a:"A", d:"Eliges un linaje y una característica de lanzamiento (INT, SAB o CAR); ganas el beneficio de Nv.1 del linaje y, en Nv.3 y Nv.5, aprendes un conjuro de mayor nivel que siempre tienes preparado. Lorwyn: truco Thorn Whip (tras cada Descanso Largo puedes cambiarlo por otro truco de la lista de Druida); Nv.3 Command; Nv.5 Silence. Shadowmoor: tu Visión en la Oscuridad aumenta a 120 pies; truco Starry Wisp; Nv.3 Heroism; Nv.5 Gentle Repose. Los conjuros de Nv.3 y Nv.5 los lanzas una vez cada uno sin espacio por Descanso Largo (también con espacios del nivel adecuado)." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Perspicacia, Percepción o Supervivencia (a tu elección)." },
    { n:"Trance", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 4 horas si las pasas en una meditación similar a un trance, durante la cual conservas la consciencia." },
  ],

  "Faerie [LFL 2024]": [
    { n:"Rasgos Básicos", d:"Feérico, Pequeño, Velocidad 30 pies, vuelo igual a tu Velocidad." },
    { n:"Magia Feérica (Fairy Magic)", a:"A", d:"Conoces el truco Druidcraft. Nv.3: puedes lanzar Faerie Fire con este rasgo. Nv.5: puedes lanzar también Enlarge/Reduce con este rasgo. Una vez lanzado cada uno de ellos con este rasgo, no puedes volver a lanzarlo así hasta que termines un Descanso Largo (también puedes lanzarlos con espacios de conjuro del nivel adecuado). INT, SAB o CAR es tu característica de lanzamiento para estos conjuros (a elegir al escoger la especie)." },
    { n:"Vuelo (Flight)", d:"Gracias a tus alas tienes Velocidad de vuelo igual a tu Velocidad caminando. No puedes usarla si llevas armadura media o pesada." },
    { n:"Linaje Feérico (Faerie Lineage)", d:"Como nativo de Lorwyn o de Shadowmoor, puedes obtener rasgos adicionales. Lorwyn: ningún rasgo adicional. Shadowmoor: Visión en la Oscuridad con alcance 120 pies." },
  ],

  "Flamekin [LFL 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño (a tu elección al escoger la especie), Velocidad 30 pies, Visión en la Oscuridad 60 pies, Resistencia al fuego." },
    { n:"Resistencia al Fuego (Fire Resistance)", d:"Resistencia al daño de fuego." },
    { n:"Alcanzar la Llama (Reach to the Blaze)", a:"A", d:"Conoces el truco Produce Flame. Nv.3: puedes lanzar Burning Hands con este rasgo. Nv.5: puedes lanzar también Flame Blade con este rasgo, sin componente material. Una vez lanzado cada uno de ellos con este rasgo, no puedes volver a lanzarlo así hasta que termines un Descanso Largo (también puedes lanzarlos con espacios de conjuro del nivel adecuado). INT, SAB o CAR es tu característica de lanzamiento para estos conjuros (a elegir al escoger la especie)." },
  ],

  "Kithkin [LFL 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño (2–3 pies), Velocidad 30 pies." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones para evitar o terminar la condición Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo, pero no detenerte en él." },
    { n:"Suerte (Luck)", d:"Cuando sacas un 1 en el d20 de una Prueba de d20, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Naturalmente Sigiloso (Naturally Stealthy)", d:"Puedes realizar la acción Esconderse incluso estando oculto solo por una criatura al menos un tamaño mayor que tú." },
    { n:"Linaje Kithkin (Kithkin Lineage)", d:"Como nativo de Lorwyn o de Shadowmoor, puedes obtener rasgos adicionales. Lorwyn: ningún rasgo adicional. Shadowmoor: Visión en la Oscuridad con alcance 120 pies." },
  ],

  "Lorwyn Changeling [LFL 2024]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 120 pies." },
    { n:"Cambiar de Forma (Shape Self)", a:"A", d:"Con una acción puedes remodelar tu cuerpo a una forma Humanoide bípeda o a una forma de Bestia cuadrúpeda. Mientras tengas forma Humanoide, puedes llevar ropa y armadura hechas para un Humanoide de tu tamaño." },
    { n:"Imitador Encantador (Delightful Imitator)", d:"Competencia en Engaño o Interpretación (a tu elección)." },
    { n:"Movimiento Impredecible (Unpredictable Movement)", a:"O", d:"Cuando tiras Iniciativa, puedes moverte de inmediato hasta la mitad de tu Velocidad, siempre que no tengas Desventaja en la tirada de Iniciativa." },
  ],

  "Rimekin [LFL 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies, Resistencia al frío." },
    { n:"Magia de Fuego Frío (Cold Fire Magic)", a:"A", d:"Conoces el truco Ray of Frost. En los niveles de personaje 3 y 5 aprendes los conjuros Ice Knife y Flame Blade, respectivamente, y siempre los tienes preparados. Lanzas cada uno una vez sin espacio de conjuro y recuperas esa capacidad al terminar un Descanso Largo (también puedes lanzarlos con espacios de conjuro del nivel adecuado). Cuando lanzas Flame Blade con este rasgo, el conjuro inflige daño de frío en lugar de daño de fuego. INT, SAB o CAR es tu característica de lanzamiento para estos conjuros (a elegir al escoger la especie)." },
    { n:"Resistencia al Frío (Cold Resistance)", d:"Resistencia al daño de frío." },
  ],
  /* ═══════════════════════════════════════════
     EBERRON: FORGE OF THE ARTIFICER (EFotA, 2024)
  ═══════════════════════════════════════════ */

  "Shifter [EFotA 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies. (Eberron: Forge of the Artificer)" },
    { n:"Instintos Bestiales (Bestial Instincts)", d:"Canalizando a la bestia que llevas dentro, ganas competencia en una habilidad a tu elección entre Acrobacias, Atletismo, Intimidación o Supervivencia." },
    { n:"Cambio de Forma (Shifting)", a:"BR", d:"Con una Acción Adicional adoptas un aspecto más bestial durante 1 minuto o hasta que vuelvas a tu aspecto normal con una Acción Adicional. Al transformarte ganas PG temporales iguales a 2 × tu bonificador de competencia. Puedes transformarte un número de veces igual a tu bonificador de competencia y recuperas todos los usos al terminar un Descanso Largo. Cada vez que te transformas ganas el beneficio de una opción (se elige al escoger la especie). Beasthide: 1d6 PG temporales adicionales y, mientras estés transformado, +1 a la CA. Longtooth: al transformarte y, con una Acción Adicional, en tus otros turnos mientras estés transformado, puedes hacer un Ataque Desarmado con tus colmillos alargados; si impactas e infliges daño, puedes infligir daño perforante igual a 1d6 + mod. FUE en lugar del daño normal del Ataque Desarmado. Swiftstride: mientras estés transformado, tu Velocidad aumenta 10 pies; además, como Reacción, puedes moverte hasta 10 pies cuando una criatura termina su turno a 5 pies de ti, y este movimiento no provoca Ataques de Oportunidad. Wildhunt: mientras estés transformado, tienes Ventaja en las pruebas de SAB y ninguna criatura a 30 pies de ti puede tener Ventaja en una tirada de ataque contra ti, salvo que estés Incapacitado." },
  ],
  /* ═══════════════════════════════════════════
     EBERRON: RISING FROM THE LAST WAR (ERftLW, 2014)
  ═══════════════════════════════════════════ */

  "Enano (Marca de la Protección, Mark of Warding) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies (no se reduce por llevar armadura pesada), Visión en la Oscuridad 60 pies. Idiomas: Común y Enano. Aumento: CON +2, INT +1." },
    { n:"Resiliencia Enana (Dwarven Resilience)", d:"Ventaja en las salvaciones contra veneno y resistencia al daño de veneno." },
    { n:"Entrenamiento Enano en Combate (Dwarven Combat Training)", d:"Competencia con hacha de batalla, hacha de mano, martillo ligero y martillo de guerra." },
    { n:"Competencia con Herramientas (Tool Proficiency)", d:"Competencia con herramientas de herrero, suministros de cervecero o herramientas de albañil (a tu elección)." },
    { n:"Sentido de la Piedra (Stonecunning)", d:"En pruebas de Inteligencia (Historia) sobre el origen de obras de piedra, cuentas como competente y sumas el doble de tu bonificador de competencia." },
    { n:"Intuición del Guardián (Warder's Intuition)", d:"Cuando haces una prueba de Inteligencia (Investigación) o una prueba de característica con herramientas de ladrón, puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Protecciones y Sellos (Wards and Seals)", a:"A", d:"Puedes lanzar Alarm y Mage Armor con este rasgo. Desde Nv.3 también Arcane Lock. Una vez lanzado uno de estos conjuros así, no puedes volver a lanzarlo con este rasgo hasta terminar un Descanso Largo. INT es tu característica de lanzamiento y no necesitas componentes materiales." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Protección se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Alarm, Armor of Agathys; 2: Arcane Lock, Knock; 3: Glyph of Warding, Magic Circle; 4: Leomund's Secret Chest, Mordenkainen's Faithful Hound; 5: Antilife Shell." },
  ],

  "Elfo (Marca de la Sombra, Mark of Shadow) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Élfico. Aumento: DES +2, CAR +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Intuición Astuta (Cunning Intuition)", d:"Cuando haces una prueba de Carisma (Interpretación) o de Destreza (Sigilo), puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Dar Forma a las Sombras (Shape Shadows)", a:"A", d:"Conoces el truco Minor Illusion. Desde Nv.3 puedes lanzar Invisibility una vez con este rasgo y recuperas esa capacidad al terminar un Descanso Largo. CAR es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Sombra se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Disguise Self, Silent Image; 2: Darkness, Pass without Trace; 3: Clairvoyance, Major Image; 4: Greater Invisibility, Hallucinatory Terrain; 5: Mislead." },
  ],

  "Gnomo (Marca de la Escritura, Mark of Scribing) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Gnómico. Aumento: INT +2, CAR +1." },
    { n:"Astucia Gnómica (Gnome Cunning)", d:"Ventaja en todas las salvaciones de INT, SAB y CAR contra magia." },
    { n:"Escriba Dotado (Gifted Scribe)", d:"Cuando haces una prueba de Inteligencia (Historia) o una prueba de característica con útiles de caligrafía, puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Intuición del Escriba (Scribe's Insight)", a:"A", d:"Conoces el truco Message. También puedes lanzar Comprehend Languages una vez con este rasgo y recuperas esa capacidad al terminar un Descanso Corto o Largo. Desde Nv.3 puedes lanzar Magic Mouth con este rasgo y recuperas esa capacidad al terminar un Descanso Largo. INT es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Escritura se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Comprehend Languages, Illusory Script; 2: Animal Messenger, Silence; 3: Sending, Tongues; 4: Arcane Eye, Confusion; 5: Dream." },
  ],

  "Semielfo (Marca de la Detección, Mark of Detection) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más. Aumento: SAB +2 y +1 a otra característica a tu elección (FUE, DES, CON, INT o CAR). Sustituye la Versatilidad con Habilidades del Semielfo." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Intuición Deductiva (Deductive Intuition)", d:"Cuando haces una prueba de Inteligencia (Investigación) o de Sabiduría (Perspicacia), puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Detección Mágica (Magical Detection)", a:"A", d:"Puedes lanzar Detect Magic y Detect Poison and Disease con este rasgo. Desde Nv.3 también See Invisibility. Una vez lanzado uno de estos conjuros así, no puedes volver a lanzarlo con este rasgo hasta terminar un Descanso Largo. SAB es tu característica de lanzamiento y no necesitas componentes materiales." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Detección se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Detect Evil and Good, Detect Poison and Disease; 2: Detect Thoughts, Find Traps; 3: Clairvoyance, Nondetection; 4: Arcane Eye, Divination; 5: Legend Lore." },
  ],

  "Semielfo (Marca de la Tormenta, Mark of Storm) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más. Aumento: CAR +2, DES +1. Sustituye la Versatilidad con Habilidades del Semielfo." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Intuición del Viento (Windwright's Intuition)", d:"Cuando haces una prueba de Destreza (Acrobacias) o cualquier prueba de característica con herramientas de navegante, puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Don de la Tormenta (Storm's Boon)", d:"Resistencia al daño de relámpago." },
    { n:"Vientos en Contra (Headwinds)", a:"A", d:"Conoces el truco Gust. Desde Nv.3 puedes lanzar Gust of Wind una vez con este rasgo y recuperas esa capacidad al terminar un Descanso Largo. CAR es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Tormenta se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Feather Fall, Fog Cloud; 2: Gust of Wind, Levitate; 3: Sleet Storm, Wind Wall; 4: Conjure Minor Elementals, Control Water; 5: Conjure Elemental." },
  ],

  "Semiorco (Marca del Hallazgo, Mark of Finding) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Goblin. Aumento: SAB +2, CON +1. Sustituye los rasgos Amenazante, Resistencia Implacable y Ataques Salvajes del Semiorco." },
    { n:"Intuición del Cazador (Hunter's Intuition)", d:"Cuando haces una prueba de Sabiduría (Percepción) o de Sabiduría (Supervivencia), puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Magia del Buscador (Finder's Magic)", a:"AB", d:"Puedes lanzar Hunter's Mark con este rasgo. Desde Nv.3 también Locate Object. Una vez lanzado uno de estos conjuros así, no puedes volver a lanzarlo con este rasgo hasta terminar un Descanso Largo. SAB es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca del Hallazgo se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Faerie Fire, Longstrider; 2: Locate Animals or Plants, Locate Object; 3: Clairvoyance, Speak with Plants; 4: Divination, Locate Creature; 5: Commune with Nature." },
  ],

  "Mediano (Marca de la Curación, Mark of Healing) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies. Idiomas: Común y Mediano. Aumento: DES +2, SAB +1." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo." },
    { n:"Intuición Médica (Medical Intuition)", d:"Cuando haces una prueba de Sabiduría (Medicina) o una prueba de característica con un kit de herboristería, puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Toque Curativo (Healing Touch)", a:"A", d:"Puedes lanzar Cure Wounds con este rasgo. Desde Nv.3 también Lesser Restoration. Una vez lanzado uno de estos conjuros así, no puedes volver a lanzarlo con este rasgo hasta terminar un Descanso Largo. SAB es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Curación se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Cure Wounds, Healing Word; 2: Lesser Restoration, Prayer of Healing; 3: Aura of Vitality, Mass Healing Word; 4: Aura of Purity, Aura of Life; 5: Greater Restoration." },
  ],

  "Mediano (Marca de la Hospitalidad, Mark of Hospitality) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies. Idiomas: Común y Mediano. Aumento: DES +2, CAR +1." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo." },
    { n:"Siempre Hospitalario (Ever Hospitable)", d:"Cuando haces una prueba de Carisma (Persuasión) o una prueba de característica con suministros de cervecero o utensilios de cocinero, puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Magia del Posadero (Innkeeper's Magic)", a:"A", d:"Conoces el truco Prestidigitation. También puedes lanzar Purify Food and Drink y Unseen Servant con este rasgo. Una vez lanzado uno de estos conjuros así, no puedes volver a lanzarlo con este rasgo hasta terminar un Descanso Largo. CAR es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Hospitalidad se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Goodberry, Sleep; 2: Aid, Calm Emotions; 3: Create Food and Water, Leomund's Tiny Hut; 4: Aura of Purity, Mordenkainen's Private Sanctum; 5: Hallow." },
  ],

  "Humano (Marca de la Doma, Mark of Handling) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: SAB +2 y +1 a otra característica a tu elección (FUE, DES, CON, INT o CAR)." },
    { n:"Intuición Salvaje (Wild Intuition)", d:"Cuando haces una prueba de Sabiduría (Trato con Animales) o de Inteligencia (Naturaleza), puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Conexión Primigenia (Primal Connection)", a:"A", d:"Puedes lanzar Animal Friendship y Speak with Animals con este rasgo, sin componente material. Una vez lanzado uno de estos conjuros así, no puedes volver a lanzarlo con este rasgo hasta terminar un Descanso Corto o Largo. SAB es tu característica de lanzamiento." },
    { n:"Cuanto Más Grandes (The Bigger They Are)", d:"Desde Nv.3, al lanzar Animal Friendship o Speak with Animals puedes elegir como objetivo una Bestia o una Monstruosidad, siempre que su puntuación de Inteligencia sea 3 o menos." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Doma se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Animal Friendship, Speak with Animals; 2: Beast Sense, Calm Emotions; 3: Beacon of Hope, Conjure Animals; 4: Aura of Life, Dominate Beast; 5: Awaken." },
  ],

  "Humano (Marca de la Creación, Mark of Making) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: INT +2 y +1 a otra característica a tu elección (FUE, DES, CON, SAB o CAR)." },
    { n:"Intuición del Artesano (Artisan's Intuition)", d:"Cuando haces una prueba de Arcana o una prueba de característica con herramientas de artesano, puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Don del Creador (Maker's Gift)", d:"Competencia con un tipo de herramientas de artesano a tu elección." },
    { n:"Forjador de Conjuros (Spellsmith)", a:"B", d:"Conoces el truco Mending. También puedes lanzar Magic Weapon con este rasgo; si lo haces, el conjuro dura 1 hora y no requiere concentración. Una vez lanzado así, no puedes volver a hacerlo hasta terminar un Descanso Largo. INT es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca de la Creación se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Identify, Tenser's Floating Disk; 2: Continual Flame, Magic Weapon; 3: Conjure Barrage, Elemental Weapon; 4: Fabricate, Stone Shape; 5: Creation." },
  ],

  "Humano (Marca del Pasaje, Mark of Passage) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 35 pies. Idiomas: Común y uno más. Aumento: DES +2 y +1 a otra característica a tu elección (FUE, CON, INT, SAB o CAR)." },
    { n:"Velocidad del Mensajero (Courier's Speed)", d:"Tu Velocidad base caminando aumenta a 35 pies." },
    { n:"Movimiento Intuitivo (Intuitive Motion)", d:"Cuando haces una prueba de Destreza (Acrobacias) o cualquier prueba de característica para manejar o mantener un vehículo terrestre, puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Pasaje Mágico (Magical Passage)", a:"B", d:"Puedes lanzar Misty Step una vez con este rasgo y recuperas esa capacidad al terminar un Descanso Largo. DES es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca del Pasaje se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Expeditious Retreat, Jump; 2: Misty Step, Pass without Trace; 3: Blink, Phantom Steed; 4: Dimension Door, Freedom of Movement; 5: Teleportation Circle." },
  ],

  "Humano (Marca del Centinela, Mark of Sentinel) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: CON +2, SAB +1." },
    { n:"Intuición del Centinela (Sentinel's Intuition)", d:"Cuando haces una prueba de Sabiduría (Perspicacia) o de Sabiduría (Percepción), puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Escudo del Guardián (Guardian's Shield)", a:"R", d:"Puedes lanzar Shield una vez con este rasgo y recuperas esa capacidad al terminar un Descanso Largo. SAB es tu característica de lanzamiento." },
    { n:"Guardián Vigilante (Vigilant Guardian)", a:"R", d:"Cuando una tirada de ataque impacta a una criatura que veas a 5 pies de ti, puedes usar tu Reacción para intercambiar posiciones con ella; el ataque te impacta a ti en su lugar. Una vez usado, no puedes volver a hacerlo hasta terminar un Descanso Largo." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca del Centinela se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Compelled Duel, Shield of Faith; 2: Warding Bond, Zone of Truth; 3: Counterspell, Protection from Energy; 4: Death Ward, Guardian of Faith; 5: Bigby's Hand." },
  ],

  "Humano (Marca del Hallazgo, Mark of Finding) [ERftLW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Goblin. Aumento: SAB +2, CON +1." },
    { n:"Intuición del Cazador (Hunter's Intuition)", d:"Cuando haces una prueba de Sabiduría (Percepción) o de Sabiduría (Supervivencia), puedes tirar 1d4 y sumarlo a la prueba." },
    { n:"Magia del Buscador (Finder's Magic)", a:"AB", d:"Puedes lanzar Hunter's Mark con este rasgo. Desde Nv.3 también Locate Object. Una vez lanzado uno de estos conjuros así, no puedes volver a lanzarlo con este rasgo hasta terminar un Descanso Largo. SAB es tu característica de lanzamiento." },
    { n:"Hechizos de la Marca (Spells of the Mark)", d:"Si tienes el rasgo de clase Lanzamiento de Conjuros o Magia de Pacto, los conjuros de la tabla de la Marca del Hallazgo se añaden a la lista de conjuros de tu clase lanzadora. Nivel de conjuro 1: Faerie Fire, Longstrider; 2: Locate Animals or Plants, Locate Object; 3: Clairvoyance, Speak with Plants; 4: Divination, Locate Creature; 5: Commune with Nature." },
  ],
  /* ═══════════════════════════════════════════
     PLANE SHIFT: KALADESH (PSK)
  ═══════════════════════════════════════════ */

  "Aetherborn [PSK]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Resistencia al daño necrótico. Competencia en Intimidación. Idiomas: Común y dos más. Aumento: CAR +2 y +1 a otras dos características distintas (a elegir entre FUE, DES, CON, INT y SAB)." },
    { n:"Nacido del Éter (Born of Aether)", d:"Resistencia al daño necrótico." },
    { n:"Amenazante (Menacing)", d:"Competencia en Intimidación." },
    { n:"Don del Aetherborn (Gift of the Aetherborn)", a:"A", d:"Variante opcional a criterio del DM: investigar y someterse a la transformación sigue un proceso similar a inventar y fabricar un objeto mágico raro, pero con ungüentos e ingredientes raros en lugar de éter. Ganas Drenar Vida (Drain Life): un ataque natural, tocando a un ser vivo con una mano con garras, que inflige 1d6 de daño necrótico y te restaura los mismos PG. Si pasas 7 días sin infligir este daño, tus PG máximos se reducen en 1d6 por semana; esa reducción no se elimina hasta que uses Drain Life y termines un Descanso Largo." },
  ],

  "Enano de Kaladesh [PSK]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies (no se reduce por llevar armadura pesada), Visión en la Oscuridad 60 pies. Resistencia al daño de veneno. Idiomas: Común y Enano. Aumento: CON +2, SAB +1." },
    { n:"Resiliencia Enana (Dwarven Resilience)", d:"Ventaja en las salvaciones contra veneno y resistencia al daño de veneno." },
    { n:"Dureza Enana (Dwarven Toughness)", d:"Tus PG máximos aumentan en 1 y en 1 más cada vez que subes de nivel." },
    { n:"Pericia de Artesano (Artisan's Expertise)", d:"Competencia con dos tipos de herramientas de artesano a tu elección. Tu bonificador de competencia se duplica en cualquier prueba de característica que use una de esas competencias. Además, en las pruebas de Inteligencia (Historia) sobre el origen de cualquier construcción arquitectónica (edificios, obras públicas como canales y acueductos y el enorme engranaje que sustenta gran parte de la construcción de Ghirapur), cuentas como competente en Historia y sumas el doble de tu bonificador de competencia en lugar del normal." },
  ],

  "Elfo de Kaladesh [PSK]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Competencia en Percepción. Idiomas: Común y Élfico. Aumento: DES +2, SAB +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Cultura Élfica (Elf Culture)", d:"Los elfos de Kaladesh no se organizan en naciones ni tribus, pero reconocen tres grupos culturales (más bien actitudes ante el resto de la sociedad y el uso de la tecnología). Eliges una de estas culturas. Con rasgos propios (entradas aparte): Bishatar y Tirahar (Velocidad 35 pies y Máscara de lo Salvaje) y Vahadar (un truco de Druida y un idioma adicional)." },
  ],

  "Humano de Kaladesh [PSK]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +1 a todas las características." },
  ],

  "Vedalken [PSK]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y Vedalken. Aumento: INT +2, SAB +1." },
    { n:"Astucia Vedalken (Vedalken Cunning)", d:"Ventaja en todas las salvaciones de INT, SAB y CAR contra magia." },
    { n:"Saber del Éter (Aether Lore)", d:"Cuando haces una prueba de Inteligencia (Historia) relacionada con objetos mágicos o dispositivos tecnológicos propulsados por éter, puedes sumar el doble de tu bonificador de competencia en lugar de cualquier bonificador de competencia que aplicaras normalmente." },
  ],

  "Elfo de Kaladesh (Bishatar y Tirahar) [PSK]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Competencia en Percepción. Idiomas: Común y Élfico. Aumento: DES +2, SAB +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Cultura Élfica (Elf Culture)", d:"Los elfos de Kaladesh no se organizan en naciones ni tribus, pero reconocen tres grupos culturales (más bien actitudes ante el resto de la sociedad y el uso de la tecnología). Esta entrada recoge la cultura Bishatar y Tirahar." },
    { n:"Pies Ligeros (Fleet of Foot)", d:"Tu Velocidad caminando aumenta a 35 pies." },
    { n:"Máscara de lo Salvaje (Mask of the Wild)", d:"Puedes intentar esconderte aunque solo estés ligeramente oculto por follaje, lluvia intensa, nieve que cae, niebla y otros fenómenos naturales." },
  ],

  "Elfo de Kaladesh (Vahadar) [PSK]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Competencia en Percepción. Idiomas: Común, Élfico y uno más. Aumento: DES +2, SAB +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Cultura Élfica (Elf Culture)", d:"Los elfos de Kaladesh no se organizan en naciones ni tribus, pero reconocen tres grupos culturales (más bien actitudes ante el resto de la sociedad y el uso de la tecnología). Esta entrada recoge la cultura Vahadar." },
    { n:"Truco (Cantrip)", d:"Conoces un truco a tu elección de la lista de conjuros de Druida. SAB es tu característica de lanzamiento para él." },
    { n:"Idioma Adicional (Extra Language)", d:"Puedes hablar, leer y escribir un idioma adicional a tu elección." },
  ],
  /* ═══════════════════════════════════════════
     PLANE SHIFT: AMONKHET (PSA)
  ═══════════════════════════════════════════ */

  "Aven [PSA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies, volar 30 pies. Idiomas: Común y Aven. Aumento: DES +2." },
    { n:"Vuelo (Flight)", d:"Tienes Velocidad de vuelo de 30 pies. No puedes usarla mientras llevas armadura media o pesada (si tu campaña usa la regla variante de carga, tampoco si estás sobrecargado)." },
  ],

  "Khenra [PSA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 35 pies. Competencia con khopesh (espada larga), lanza y jabalina. Idiomas: Común y Khenra. Aumento: DES +2, FUE +1." },
    { n:"Entrenamiento Khenra con Armas (Khenra Weapon Training)", d:"Competencia con el khopesh (espada larga), la lanza y la jabalina." },
    { n:"Gemelos Khenra (Khenra Twins)", d:"Si tu gemelo está vivo y puedes verlo, cuando sacas un 1 en una tirada de ataque, prueba de característica o salvación, puedes repetir el dado y debes usar la nueva tirada. Si tu gemelo ha muerto (o naciste sin gemelo), no puedes quedar Asustado." },
  ],

  "Minotauro de Amonkhet [PSA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Competencia en Intimidación. Idiomas: Común y Minotauro. Aumento: FUE +2, CON +1." },
    { n:"Arma Natural (Natural Weapon)", d:"Puedes usar tus cuernos como arma natural para hacer ataques desarmados. Si impactas con ellos, infliges daño contundente igual a 1d6 + mod. FUE." },
    { n:"Amenazante (Menacing)", d:"Competencia en Intimidación." },
    { n:"Resistencia Implacable (Relentless Endurance)", a:"O", d:"Cuando quedas a 0 PG sin morir de golpe, quedas a 1 PG en su lugar. No puedes volver a usarlo hasta terminar un Descanso Largo." },
    { n:"Ataques Salvajes (Savage Attacks)", d:"Cuando haces un golpe crítico con un ataque cuerpo a cuerpo con arma, tiras uno de los dados de daño del arma una vez más y lo sumas al daño extra del crítico." },
  ],

  "Naga [PSA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Inmune al daño de veneno y a la condición Envenenado. Competencia con el Kit de envenenador. Idiomas: Común y Naga. Aumento: CON +2, INT +1." },
    { n:"Ráfaga de Velocidad (Speed Burst)", a:"B", d:"Bajando el cuerpo al suelo e impulsándote con los brazos te mueves más rápido durante un rato. Con una Acción Adicional en tu turno, si tienes ambas manos libres, aumentas tu Velocidad caminando en 5 pies hasta el final de tu turno." },
    { n:"Armas Naturales (Natural Weapons)", a:"A", d:"Tus fauces con colmillos y tu cuerpo serpentino constrictor son armas naturales con las que puedes hacer ataques desarmados. Mordisco: si impactas, infliges daño perforante igual a 1d4 + mod. FUE y el objetivo debe superar una salvación de CON (CD 8 + bonificador de competencia + mod. CON) o sufre 1d4 de daño de veneno. Constricción: si impactas, infliges daño contundente igual a 1d6 + mod. FUE y el objetivo queda Agarrado (CD de escape 8 + bonificador de competencia + mod. FUE); mientras dure el agarre, el objetivo está Apresado y tú no puedes constreñir a otro objetivo." },
    { n:"Inmunidad al Veneno (Poison Immunity)", d:"Eres inmune al daño de veneno y no puedes quedar Envenenado." },
    { n:"Afinidad con el Veneno (Poison Affinity)", d:"Competencia con el Kit de envenenador." },
  ],

  "Humano de Amonkhet [PSA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +1 a dos características distintas a tu elección." },
    { n:"Habilidad (Skills)", d:"Competencia en una habilidad a tu elección." },
    { n:"Dote (Feat)", d:"Ganas una dote a tu elección." },
  ],

  "Aven (Cabeza de Halcón, Hawk-Headed) [PSA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies, volar 30 pies. Competencia en Percepción. Idiomas: Común y Aven. Aumento: DES +2, SAB +2." },
    { n:"Vuelo (Flight)", d:"Tienes Velocidad de vuelo de 30 pies. No puedes usarla mientras llevas armadura media o pesada (si tu campaña usa la regla variante de carga, tampoco si estás sobrecargado)." },
    { n:"Ojo de Halcón (Hawkeyed)", d:"Competencia en Percepción. Además, atacar a larga distancia no impone Desventaja en tus tiradas de ataque con armas a distancia." },
  ],

  "Aven (Cabeza de Ibis, Ibis-Headed) [PSA]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies, volar 30 pies. Idiomas: Común y Aven. Aumento: DES +2, INT +1." },
    { n:"Vuelo (Flight)", d:"Tienes Velocidad de vuelo de 30 pies. No puedes usarla mientras llevas armadura media o pesada (si tu campaña usa la regla variante de carga, tampoco si estás sobrecargado)." },
    { n:"Bendición de Kefnet (Kefnet's Blessing)", d:"Puedes sumar la mitad de tu bonificador de competencia, redondeada hacia abajo, a cualquier prueba de Inteligencia que hagas y que no incluya ya tu bonificador de competencia." },
  ],
  /* ═══════════════════════════════════════════
     PLANE SHIFT: ZENDIKAR (PSZ)
  ═══════════════════════════════════════════ */

  "Elfo de Zendikar [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Competencia en Percepción. Idiomas: Común y Élfico. Aumento: SAB +2." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
  ],

  "Goblin [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad 60 pies, Resistencia al daño de fuego y psíquico. Idiomas: Común y Goblin. Sin aumento propio (cada tribu da CON +2)." },
    { n:"Aguante (Grit)", d:"Resistencia al daño de fuego y al daño psíquico. Además, si no llevas armadura, tu CA es 11 + mod. de DES." },
  ],

  "Humano de Zendikar [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +1 a todas las características." },
  ],

  "Kor [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, trepar 30 pies (mientras no estés sobrecargado ni lleves armadura pesada). Competencia en Atletismo y Acrobacias. Idiomas: Común y el habla silenciosa de los Kor. Aumento: DES +2, SAB +1." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Trepar (Climbing)", d:"Tienes además Velocidad de trepar 30 pies, siempre que no estés sobrecargado ni lleves armadura pesada." },
    { n:"Trepador Kor (Kor Climbing)", d:"Competencia en Atletismo y Acrobacias." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
  ],

  "Merfolk [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies, respirar aire y agua. Idiomas: Común, Merfolk y uno más. Aumento: CAR +1." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Nadar (Swimming)", d:"Tienes Velocidad de nadar 30 pies." },
  ],

  "Vampiro [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies, Resistencia al daño necrótico. Idiomas: Común y Vampiro. Aumento: CAR +2." },
    { n:"Sed de Sangre (Blood Thirst)", a:"A", d:"Puedes drenar sangre y energía vital de una criatura voluntaria, o de una que tengas Agarrada, Incapacitada o Apresada. Haz un ataque cuerpo a cuerpo contra el objetivo. Si impactas, infliges 1 de daño perforante y 1d6 de daño necrótico. Los PG máximos del objetivo se reducen en una cantidad igual al daño necrótico sufrido y tú recuperas esa cantidad de PG. La reducción dura hasta que el objetivo termine un Descanso Largo. El objetivo muere si este efecto reduce sus PG máximos a 0." },
    { n:"Resistencia Vampírica (Vampiric Resistance)", d:"Resistencia al daño necrótico." },
  ],

  "Elfo de Zendikar (Nación Joraga) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Competencia en Percepción. Idiomas: Común y Élfico. Aumento: SAB +2, DES +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Máscara de lo Salvaje (Mask of the Wild)", d:"Puedes intentar esconderte aunque solo estés ligeramente oculto por follaje, lluvia intensa, nieve que cae, niebla u otros fenómenos naturales." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Pies Ligeros (Fleet of Foot)", d:"Tu Velocidad al caminar aumenta a 35 pies." },
  ],

  "Elfo de Zendikar (Nación Mul Daya) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad Superior 120 pies (radio de 120 pies en lugar de 60). Competencia en Percepción. Idiomas: Común y Élfico. Aumento: SAB +2, FUE +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Magia Mul Daya (Mul Daya Magic)", a:"AB", d:"Conoces el truco Chill Touch. Nv.3: Hex una vez por Descanso Largo. Nv.5: Darkness una vez por Descanso Largo. SAB es tu característica de lanzamiento." },
    { n:"Sensibilidad a la Luz Solar (Sunlight Sensitivity)", d:"Desventaja en las tiradas de ataque y en las pruebas de Sabiduría (Percepción) basadas en la vista cuando tú, el objetivo de tu ataque o lo que intentas percibir estáis bajo luz solar directa." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
  ],

  "Elfo de Zendikar (Nación Tajuru) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Competencia en Percepción y en otras dos habilidades o herramientas a elegir. Idiomas: Común y Élfico. Aumento: SAB +2, CAR +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Versatilidad con Habilidades (Skill Versatility)", d:"Competencia en cualquier combinación de otras dos habilidades o herramientas a tu elección." },
  ],

  "Goblin de Zendikar (Tribu Grotag) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad 60 pies, Resistencia al daño de fuego y psíquico. Competencia en Trato con Animales. Idiomas: Común y Goblin. Aumento: CON +2." },
    { n:"Aguante (Grit)", d:"Resistencia al daño de fuego y al daño psíquico. Además, si no llevas armadura, tu CA es 11 + mod. de DES." },
    { n:"Domador Grotag (Grotag Tamer)", d:"Competencia en la habilidad Trato con Animales." },
  ],

  "Goblin de Zendikar (Tribu Lavastep) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad 60 pies, Resistencia al daño de fuego y psíquico. Idiomas: Común y Goblin. Aumento: CON +2." },
    { n:"Aguante (Grit)", d:"Resistencia al daño de fuego y al daño psíquico. Además, si no llevas armadura, tu CA es 11 + mod. de DES." },
    { n:"Aguante Lavastep (Lavastep Grit)", d:"Ventaja en las pruebas de Destreza (Sigilo) para esconderte en entornos rocosos o subterráneos." },
  ],

  "Goblin de Zendikar (Tribu Tuktuk) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad 60 pies, Resistencia al daño de fuego y psíquico. Competencia con herramientas de ladrón. Idiomas: Común y Goblin. Aumento: CON +2." },
    { n:"Aguante (Grit)", d:"Resistencia al daño de fuego y al daño psíquico. Además, si no llevas armadura, tu CA es 11 + mod. de DES." },
    { n:"Astucia Tuktuk (Tuktuk Cunning)", d:"Competencia con herramientas de ladrón." },
  ],

  "Merfolk de Zendikar (Credo Cosi) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies, respirar aire y agua. Competencia en Juego de Manos y Sigilo. Idiomas: Común, Merfolk y uno más. Aumento: CAR +1 (Merfolk), más INT +1 y CAR +2 (Credo Cosi)." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Nadar (Swimming)", d:"Tienes Velocidad de nadar 30 pies." },
    { n:"Truco (Cantrip)", d:"Conoces un truco a tu elección de la lista de conjuros de Bardo. CAR es tu característica de lanzamiento para él." },
    { n:"Credo del Embaucador (Creed of the Trickster)", d:"Competencia en Juego de Manos y Sigilo." },
  ],

  "Merfolk de Zendikar (Credo Emeria) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies, respirar aire y agua. Competencia en Engaño y Persuasión. Idiomas: Común, Merfolk y uno más. Aumento: CAR +1, SAB +2." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Nadar (Swimming)", d:"Tienes Velocidad de nadar 30 pies." },
    { n:"Truco (Cantrip)", d:"Conoces un truco a tu elección de la lista de conjuros de Druida. SAB es tu característica de lanzamiento para él." },
    { n:"Manipulación del Credo del Viento (Wind Creed Manipulation)", d:"Competencia en Engaño y Persuasión." },
  ],

  "Merfolk de Zendikar (Credo Ula) [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies, respirar aire y agua. Competencia en Supervivencia y con herramientas de navegante. Idiomas: Común, Merfolk y uno más. Aumento: CAR +1, INT +2." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Nadar (Swimming)", d:"Tienes Velocidad de nadar 30 pies." },
    { n:"Truco (Cantrip)", d:"Conoces un truco a tu elección de la lista de conjuros de Mago. INT es tu característica de lanzamiento para él." },
    { n:"Navegación del Credo del Agua (Water Creed Navigation)", d:"Competencia con herramientas de navegante y en la habilidad Supervivencia." },
  ],

  "Vampiro de Zendikar [PSZ]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies, Resistencia al daño necrótico. Idiomas: Común y Vampiro. Aumento: CAR +2, INT +1." },
    { n:"Sed de Sangre (Blood Thirst)", a:"A", d:"Puedes drenar sangre y energía vital de una criatura voluntaria, o de una que tengas Agarrada, Incapacitada o Apresada. Haz un ataque cuerpo a cuerpo contra el objetivo. Si impactas, infliges 1 de daño perforante y 1d6 de daño necrótico. Los PG máximos del objetivo se reducen en una cantidad igual al daño necrótico sufrido y tú recuperas esa cantidad de PG. La reducción dura hasta que el objetivo termine un Descanso Largo. El objetivo muere si este efecto reduce sus PG máximos a 0." },
    { n:"Resistencia Vampírica (Vampiric Resistance)", d:"Resistencia al daño necrótico." },
    { n:"Transformación en Nulo (Null Transformation)", d:"Un humanoide al que mates con tu rasgo Sed de Sangre se convierte en un Nulo (Null)." },
  ],
  /* ═══════════════════════════════════════════
     PLANE SHIFT: INNISTRAD (PSI)
  ═══════════════════════════════════════════ */

  "Humano de Innistrad [PSI]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: no tiene aumento propio; lo da la variante de Innistrad que elijas (Gavony, Kessig, Nephalia o Stensia)." },
  ],

  "Humano de Innistrad (Gavony) [PSI]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +1 a todas las características." },
  ],

  "Humano de Innistrad (Kessig) [PSI]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 40 pies. Competencia en Supervivencia. Idiomas: Común y uno más. Aumento: DES +1, SAB +1." },
    { n:"Gente del Bosque (Forest Folk)", d:"Competencia en la habilidad Supervivencia." },
    { n:"Pies Ligeros (Fleet of Foot)", d:"Tu Velocidad base caminando es 40 pies." },
    { n:"Paso Seguro (Sure-footed)", d:"Cuando usas la acción de Correr (Dash), el terreno difícil no te cuesta movimiento extra ese turno." },
    { n:"Ataque Saltarín (Spring Attack)", d:"Cuando haces un ataque cuerpo a cuerpo contra una criatura, no provocas Ataques de Oportunidad de esa criatura durante el resto de tu turno, impactes o no." },
  ],

  "Humano de Innistrad (Nephalia) [PSI]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Competencia en cuatro habilidades o herramientas a elegir. Idiomas: Común y uno más. Aumento: INT +1, CAR +1." },
    { n:"Amplitud de Conocimientos (Breadth of Knowledge)", d:"Ganas competencia en cualquier combinación de cuatro habilidades o con cuatro herramientas a tu elección." },
  ],

  "Humano de Innistrad (Stensia) [PSI]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Competencia en Intimidación. Idiomas: Común y uno más. Aumento: FUE +1, CON +1." },
    { n:"Amedrentador (Daunting)", d:"Competencia en la habilidad Intimidación." },
    { n:"Robusto (Tough)", d:"Tus PG máximos aumentan en 2, y en 2 más cada vez que subes de nivel." },
  ],
  /* ═══════════════════════════════════════════
     PLANE SHIFT: IXALAN (PSX)
  ═══════════════════════════════════════════ */

  "Humano de Ixalan [PSX]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más (ver Idiomas). Aumento: +1 a todas las características." },
    { n:"Idiomas (Languages)", d:"Puedes hablar, leer y escribir Común y un idioma adicional a tu elección. Si tu campaña usa las reglas opcionales de idiomas, tu origen nacional determina tu lengua materna: Itzocan para el Imperio del Sol (Sun Empire), Coalition pidgin para la Coalición Descarada (Brazen Coalition) o Vampire para la Legión del Ocaso (Legion of Dusk). Sigues hablando además un idioma a tu elección y Común si existe en tu campaña." },
  ],

  "Orco de Ixalan [PSX]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Competencia en Intimidación. Idiomas: Común (si existe en tu campaña) y Orco. Aumento: FUE +2, CON +1." },
    { n:"Amenazante (Menacing)", d:"Competencia en la habilidad Intimidación." },
    { n:"Resistencia Implacable (Relentless Endurance)", a:"O", d:"Cuando quedas a 0 PG sin morir de golpe, quedas a 1 PG en su lugar. No puedes volver a usar este rasgo hasta terminar un Descanso Largo." },
    { n:"Ataques Salvajes (Savage Attacks)", d:"Cuando haces un golpe crítico con un ataque cuerpo a cuerpo con arma, tiras uno de los dados de daño del arma una vez más y lo sumas al daño extra del crítico." },
  ],

  "Siren [PSX]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies, volar 30 pies (no con armadura media o pesada). Idiomas: Común (si existe en tu campaña) y Siren. Aumento: CAR +2." },
    { n:"Canto de Sirena (Siren's Song)", d:"Conoces el truco Friends y puedes lanzarlo sin componentes materiales." },
    { n:"Vuelo (Flight)", d:"Tienes Velocidad de vuelo de 30 pies. No puedes usarla mientras llevas armadura media o pesada. (Si tu campaña usa la regla variante de carga, tampoco puedes usarla si vas sobrecargado.)" },
  ],

  "Goblin de Ixalan [PSX]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, trepar 25 pies (no con armadura media o pesada), Visión en la Oscuridad 60 pies. Resistencia al daño de fuego y psíquico. Idiomas: Común (si existe en tu campaña) y Goblin. Aumento: DES +2." },
    { n:"Agilidad Trepadora (Agile Climber)", d:"Tienes Velocidad de trepar de 25 pies. No puedes usarla mientras llevas armadura media o pesada. (Si tu campaña usa la regla variante de carga, tampoco puedes usarla si vas sobrecargado.)" },
    { n:"Entereza (Grit)", d:"Tienes Resistencia al daño de fuego y al daño psíquico. Además, si no llevas armadura, tu CA es 11 + mod. DES." },
  ],

  "Merfolk de Ixalan (Azul, Blue) [PSX]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies. Competencia en Historia y Naturaleza. Idiomas: Común (si existe en tu campaña), Merfolk y uno más a tu elección. Aumento: INT +2, CAR +1." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Truco (Cantrip)", d:"Conoces un truco a tu elección de la lista de conjuros de Mago. INT es tu característica de lanzamiento para él." },
    { n:"Saber de las Aguas (Lore of the Waters)", d:"Competencia en las habilidades Historia y Naturaleza." },
  ],

  "Merfolk de Ixalan (Verde, Green) [PSX]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies. Idiomas: Común (si existe en tu campaña), Merfolk y uno más a tu elección. Aumento: SAB +2, CAR +1." },
    { n:"Anfibio (Amphibious)", d:"Puedes respirar aire y agua." },
    { n:"Truco (Cantrip)", d:"Conoces un truco a tu elección de la lista de conjuros de Druida. SAB es tu característica de lanzamiento para él." },
    { n:"Máscara de lo Salvaje (Mask of the Wild)", d:"Puedes intentar esconderte incluso cuando solo estás ligeramente oculto por follaje, lluvia intensa, nieve, niebla y otros fenómenos naturales." },
  ],

  "Vampire de Ixalan [PSX]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Resistencia al daño necrótico. Idiomas: Común (si existe en tu campaña) y Vampire. Aumento: CAR +2, SAB +1." },
    { n:"Sed de Sangre (Blood Thirst)", a:"A", d:"Puedes drenar sangre y energía vital de una criatura voluntaria o que tengas Agarrada, Incapacitada o Apresada. Haces un ataque cuerpo a cuerpo contra el objetivo; si impactas, infliges 1 de daño perforante y 1d6 de daño necrótico. Los PG máximos del objetivo se reducen en una cantidad igual al daño necrótico sufrido y tú recuperas PG por esa misma cantidad. La reducción dura hasta que el objetivo termine un Descanso Largo. El objetivo muere si este efecto reduce sus PG máximos a 0." },
    { n:"Banquete de Sangre (Feast of Blood)", d:"Cuando drenas sangre con Sed de Sangre, sientes una oleada de vitalidad: tu Velocidad aumenta en 10 pies y tienes Ventaja en las pruebas de FUE y DES y en las tiradas de salvación de FUE y DES durante 1 minuto." },
    { n:"Resistencia Vampírica (Vampiric Resistance)", d:"Tienes Resistencia al daño necrótico." },
  ],
  /* ═══════════════════════════════════════════
     PLANE SHIFT: DOMINARIA (PSD)
  ═══════════════════════════════════════════ */

  "Aven [PSD]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies, volar 30 pies (no con armadura media o pesada). Competencia en Percepción. Idiomas: Común y Aven. Aumento: DES +2, SAB +2." },
    { n:"Vuelo (Flight)", d:"Tienes Velocidad de vuelo de 30 pies. No puedes usarla mientras llevas armadura media o pesada. (Si tu campaña usa la regla variante de carga, tampoco puedes usarla si vas sobrecargado.)" },
    { n:"Ojo de Halcón (Hawkeyed)", d:"Competencia en la habilidad Percepción. Además, atacar a largo alcance no impone Desventaja en tus tiradas de ataque a distancia con arma." },
  ],

  "Humano (Keldon) [PSD]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Competencia en Atletismo y en las salvaciones de FUE. Idiomas: Común y Keldon. Aumento: FUE +2, CON +1." },
    { n:"Atleta Natural (Natural Athlete)", d:"Competencia en la habilidad Atletismo." },
    { n:"Resiliencia Keldon (Keldon Resilience)", d:"Competencia en las tiradas de salvación de Fuerza." },
    { n:"Nacido en Icehaven (Icehaven Born)", d:"Estás adaptado de forma natural a los climas fríos, como se describe en el capítulo 5 de la Dungeon Master's Guide." },
  ],
  /* ═══════════════════════════════════════════
     MORDENKAINEN’S TOME OF FOES (MTF, 2014)
  ═══════════════════════════════════════════ */

  "Gith [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y Gith. Aumento: INT +1. Especie base de Githyanki y Githzerai: cada una añade sus propios rasgos y su aumento de característica (ver sus entradas)." },
  ],

  "Enano Duergar [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 25 pies (no se reduce por llevar armadura pesada), Visión en la Oscuridad Superior 120 pies. Resistencia al daño de veneno. Idiomas: Común, Enano e Infracomún. Aumento: CON +2, FUE +1." },
    { n:"Resiliencia Duergar (Duergar Resilience)", d:"Ventaja en las salvaciones contra veneno, contra ilusiones y contra Hechizado o Paralizado, y resistencia al daño de veneno." },
    { n:"Entrenamiento Enano en Combate (Dwarven Combat Training)", d:"Competencia con hacha de batalla, hacha de mano, martillo ligero y martillo de guerra." },
    { n:"Competencia con Herramientas (Tool Proficiency)", d:"Competencia con herramientas de herrero, suministros de cervecero o herramientas de albañil (a tu elección)." },
    { n:"Sentido de la Piedra (Stonecunning)", d:"En pruebas de Inteligencia (Historia) sobre el origen de obras de piedra, cuentas como competente y sumas el doble de tu bonificador de competencia." },
    { n:"Magia Duergar (Duergar Magic)", a:"A", d:"Nv.3: puedes lanzar Enlarge/Reduce sobre ti una vez, usando solo la opción de agrandar. Nv.5: puedes lanzar Invisibility sobre ti una vez. No necesitas componentes materiales y no puedes lanzarlos bajo luz solar directa (una vez lanzados, la luz solar no los afecta). Recuperas ambos usos al terminar un Descanso Largo. INT es tu característica de lanzamiento." },
    { n:"Sensibilidad a la Luz Solar (Sunlight Sensitivity)", d:"Desventaja en tiradas de ataque y pruebas de Sabiduría (Percepción) basadas en la vista cuando tú, el objetivo de tu ataque o lo que intentas percibir estáis bajo luz solar directa." },
  ],

  "Elfo Eladrin [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Élfico. Aumento: DES +2, CAR +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Paso Feérico (Fey Step)", a:"B", d:"Eliges la estación de tu eladrin (otoño, invierno, primavera o verano) y puedes cambiarla al terminar un Descanso Largo. Con una Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas; una vez usado, no puedes volver a hacerlo hasta terminar un Descanso Corto o Largo. Nv.3: Paso Feérico gana un efecto según tu estación (CD = 8 + bonificador de competencia + mod. CAR). Otoño: justo después de usarlo, hasta 2 criaturas de tu elección que veas a 10 pies de ti deben superar una salvación de SAB o quedan Hechizadas por ti 1 minuto, o hasta que tú o tus compañeros les causéis daño. Invierno: al usarlo, 1 criatura de tu elección que veas a 5 pies de ti antes de teletransportarte debe superar una salvación de SAB o queda Asustada de ti hasta el final de tu siguiente turno. Primavera: al usarlo, puedes tocar a 1 criatura voluntaria a 5 pies de ti; ella se teletransporta en tu lugar a un espacio libre de su elección que veas a 30 pies de ti. Verano: justo después de usarlo, cada criatura de tu elección que veas a 5 pies de ti sufre daño de fuego igual a tu mod. CAR (mín. 1)." },
  ],

  "Elfo Marino [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, nadar 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y Aquan. Aumento: DES +2, CON +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Entrenamiento de Elfo Marino (Sea Elf Training)", d:"Competencia con lanza, tridente, ballesta ligera y red." },
    { n:"Hijo del Mar (Child of the Sea)", d:"Velocidad de nado 30 pies y puedes respirar aire y agua." },
    { n:"Amigo del Mar (Friend of the Sea)", d:"Con gestos y sonidos puedes comunicar ideas sencillas a cualquier Bestia que tenga Velocidad de nado innata." },
  ],

  "Elfo Shadar-kai [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Resistencia al daño necrótico. Idiomas: Común y Élfico. Aumento: DES +2, CON +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No necesitas dormir: meditas 4 horas al día, semiconsciente, y obtienes el beneficio de 8 horas de sueño. Si meditas durante un Descanso Largo, lo terminas en solo 4 horas; por lo demás se aplican todas las reglas del Descanso Largo." },
    { n:"Resistencia Necrótica (Necrotic Resistance)", d:"Resistencia al daño necrótico." },
    { n:"Bendición de la Reina Cuervo (Blessing of the Raven Queen)", a:"B", d:"Con una Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas. Una vez usado, no puedes volver a hacerlo hasta terminar un Descanso Largo. Desde Nv.3, además tienes resistencia a todo el daño cuando te teletransportas con este rasgo, hasta el inicio de tu siguiente turno; durante ese tiempo tu aspecto es fantasmal y translúcido." },
  ],

  "Githyanki [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común, Gith y uno más a tu elección (Maestría Decadente). Aumento: FUE +2, INT +1." },
    { n:"Maestría Decadente (Decadent Mastery)", d:"Aprendes un idioma a tu elección y ganas competencia con una habilidad o herramienta a tu elección." },
    { n:"Prodigio Marcial (Martial Prodigy)", d:"Competencia con armadura ligera y media y con espadas cortas, espadas largas y mandobles." },
    { n:"Psiónica Githyanki (Githyanki Psionics)", a:"AB", d:"Conoces el truco Mage Hand y la mano es Invisible cuando lo lanzas con este rasgo. Nv.3: puedes lanzar Jump una vez; Nv.5: puedes lanzar Misty Step una vez. Recuperas cada uso al terminar un Descanso Largo. INT es tu característica de lanzamiento y estos conjuros no requieren componentes al lanzarlos con este rasgo." },
  ],

  "Githzerai [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y Gith. Aumento: SAB +2, INT +1." },
    { n:"Disciplina Mental (Mental Discipline)", d:"Ventaja en las salvaciones contra las condiciones Hechizado y Asustado." },
    { n:"Psiónica Githzerai (Githzerai Psionics)", a:"AR", d:"Conoces el truco Mage Hand y la mano es Invisible cuando lo lanzas con este rasgo. Nv.3: puedes lanzar Shield una vez; Nv.5: puedes lanzar Detect Thoughts una vez. Recuperas cada uso al terminar un Descanso Largo. SAB es tu característica de lanzamiento y estos conjuros no requieren componentes al lanzarlos con este rasgo." },
  ],

  "Gnomo de las Profundidades (Svirfneblin) [MTF]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad Superior 120 pies. Idiomas: Común, Gnómico e Infracomún. Aumento: INT +2, DES +1." },
    { n:"Astucia Gnómica (Gnome Cunning)", d:"Ventaja en todas las salvaciones de INT, SAB y CAR contra magia." },
    { n:"Camuflaje de Piedra (Stone Camouflage)", d:"Ventaja en pruebas de Destreza (Sigilo) para esconderte en terreno rocoso." },
  ],
  /* ═══════════════════════════════════════════
     SWORD COAST ADVENTURER’S GUIDE (SCAG)
  ═══════════════════════════════════════════ */

  "Gnomo de las Profundidades (Svirfneblin) [SCAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies, Visión en la Oscuridad Superior 120 pies. Idiomas: Común, Gnómico e Infracomún. Aumento: INT +2, DES +1." },
    { n:"Astucia Gnómica (Gnome Cunning)", d:"Ventaja en todas las salvaciones de INT, SAB y CAR contra magia." },
    { n:"Camuflaje de Piedra (Stone Camouflage)", d:"Ventaja en pruebas de Destreza (Sigilo) para esconderte en terreno rocoso." },
  ],

  "Semielfo Variante (Descendencia de Elfo Acuático, Aquatic Elf Descent) [SCAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más a tu elección. Aumento: CAR +2 y +1 a otras dos características a tu elección." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Rasgo Variante (Variant Feature, Choose 1)", d:"Sustituye a Versatilidad con Habilidades: eliges 1 de estas opciones. 1: Versatilidad con Habilidades (Skill Versatility): competencia en dos habilidades a tu elección; 2: Nadar (Swim): Velocidad de nado 30 pies." },
  ],

  "Semielfo Variante (Descendencia Drow, Drow Descent) [SCAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más a tu elección. Aumento: CAR +2 y +1 a otras dos características a tu elección." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Rasgo Variante (Variant Feature, Choose 1)", a:"A", d:"Sustituye a Versatilidad con Habilidades: eliges 1 de estas opciones. 1: Versatilidad con Habilidades (Skill Versatility): competencia en dos habilidades a tu elección; 2: Magia Drow (Drow Magic): conoces el truco Dancing Lights; Nv.3: lanzas Faerie Fire una vez; Nv.5: lanzas también Darkness una vez; cada uno solo se vuelve a lanzar con este rasgo tras un Descanso Largo; CAR es tu característica de lanzamiento." },
  ],

  "Semielfo Variante (Descendencia de Elfo Lunar o Solar, Moon Elf or Sun Elf Descent) [SCAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más a tu elección. Aumento: CAR +2 y +1 a otras dos características a tu elección." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Rasgo Variante (Variant Feature, Choose 1)", d:"Sustituye a Versatilidad con Habilidades: eliges 1 de estas opciones. 1: Versatilidad con Habilidades (Skill Versatility): competencia en dos habilidades a tu elección; 2: Entrenamiento Élfico con Armas (Elf Weapon Training): competencia con espada larga, espada corta, arco corto y arco largo; 3: Truco (Cantrip): conoces un truco a tu elección de la lista de conjuros de Mago (INT es tu característica de lanzamiento)." },
  ],

  "Semielfo Variante (Descendencia de Elfo del Bosque, Wood Elf Descent) [SCAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común, Élfico y uno más a tu elección. Aumento: CAR +2 y +1 a otras dos características a tu elección." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Rasgo Variante (Variant Feature, Choose 1)", d:"Sustituye a Versatilidad con Habilidades: eliges 1 de estas opciones. 1: Versatilidad con Habilidades (Skill Versatility): competencia en dos habilidades a tu elección; 2: Entrenamiento Élfico con Armas (Elf Weapon Training): competencia con espada larga, espada corta, arco corto y arco largo; 3: Pies Ligeros (Fleet of Foot): tu Velocidad base caminando aumenta a 35 pies; 4: Máscara de lo Salvaje (Mask of the Wild): puedes intentar esconderte aunque solo estés ligeramente oculto por follaje, lluvia intensa, nieve, niebla y otros fenómenos naturales." },
  ],
};
