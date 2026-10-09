/* ══════════════════════════════════════════════════════════════════
   especies.js — Especies jugables D&D 5e / 5.5e
   ──────────────────────────────────────────────────────────────────
   Revisado contra: PHB 2024 y Eberron: Forge of the Artificer 2024 (wiki dnd2024),
   PHB 2014, Mordenkainen Presents: Monsters of the Multiverse (MotM) y libros
   anteriores (VGtM, MTF, SCAG, EEPC, GGtR, MOoT, EGtW, ERftLW, FTD, SAiS, AAG,
   VRGtR) según dnd5e.wikidot.com.
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
    { n:"Revelación Celestial (Celestial Revelation)", a:"B", d:"Nv.3: con una Acción Adicional te transformas 1 minuto (o hasta que lo termines), 1/Descanso Largo. Eliges una opción al activarla: Alas Celestiales (Heavenly Wings): Velocidad de vuelo igual a tu Velocidad. Resplandor Interior (Inner Radiance): luz brillante a 10 pies y tenue 10 más; al final de cada uno de tus turnos las criaturas a 10 pies sufren daño radiante igual a tu bonificador de competencia. Sudario Necrótico (Necrotic Shroud): las criaturas a 10 pies que no sean aliadas hacen salvación de CAR (CD 8 + mod. CAR + comp.) o quedan Asustadas hasta el final de tu siguiente turno. En tu turno, una vez, infliges daño extra (necrótico o radiante) igual a tu bonificador de competencia." },
  ],

  "Dracónido [PHB 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (5–7 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies." },
    { n:"Ascendencia Dracónica (Draconic Ancestry)", d:"Eliges un tipo de dragón: Negro o Cobre → ácido; Azul o Bronce → relámpago; Latón, Oro o Rojo → fuego; Plata o Blanco → frío; Verde → veneno. Determina el daño de tu Aliento y tu resistencia." },
    { n:"Arma de Aliento (Breath Weapon)", a:"A", d:"Cuando realizas la acción de Atacar en tu turno, puedes sustituir uno de tus ataques por un exhalar en cono de 15 pies o línea de 30 pies × 5 pies. Salvación de DES (CD 8 + mod. CON + comp.): 1d10 de daño del tipo de tu ascendencia (2d10 en Nv.5, 3d10 en Nv.11, 4d10 en Nv.17), mitad si la supera. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Resistencia al Daño (Damage Resistance)", d:"Resistencia al tipo de daño de tu ascendencia dracónica." },
    { n:"Vuelo Dracónico (Draconic Flight)", a:"B", d:"Nv.5: con una Acción Adicional te brotan alas espectrales durante 10 minutos (o hasta que las retraigas) y tienes Velocidad de vuelo igual a tu Velocidad. 1/Descanso Largo." },
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
    { n:"Linaje Gnómico (Gnomish Lineage)", a:"A", d:"Eliges un linaje y una característica de lanzamiento (INT, SAB o CAR). Gnomo del Bosque: truco Minor Illusion y Speak with Animals siempre preparado (lo lanzas sin espacio un nº de veces igual a tu bonificador de competencia por Descanso Largo, y con espacios). Gnomo de las Rocas: trucos Mending y Prestidigitation; durante 10 minutos creas un aparato de relojería Diminuto (CA 5, 1 PG; juguete, encendedor o caja de música) que con una Acción Adicional produce un efecto de Prestidigitation; máx. 3 aparatos, cada uno dura 8 horas o hasta desmontarlo." },
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
    { n:"Versátil (Versatile)", d:"Ganas una dote de Origen a tu elección (se recomienda Skilled)." },
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
    { n:"Trance", d:"No duermes: meditas 4 horas al día y obtienes el beneficio de 8 horas de sueño." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Truco (Cantrip)", d:"Conoces un truco de Mago a tu elección (INT es tu característica de lanzamiento)." },
  ],

  "Elfo del Bosque [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Élfico. Aumento: DES +2, SAB +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No duermes: meditas 4 horas al día y obtienes el beneficio de 8 horas de sueño." },
    { n:"Entrenamiento Élfico con Armas (Elf Weapon Training)", d:"Competencia con espada larga, espada corta, arco corto y arco largo." },
    { n:"Pies Ligeros (Fleet of Foot)", d:"Tu Velocidad base es 35 pies." },
    { n:"Máscara de lo Salvaje (Mask of the Wild)", d:"Puedes intentar esconderte aunque sólo estés ligeramente oculto por fenómenos naturales (lluvia, nieve, niebla, follaje...)." },
  ],

  "Elfo Oscuro (Drow) [PHB 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad Superior 120 pies. Idiomas: Común y Élfico. Aumento: DES +2, CAR +1." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones contra Hechizado y la magia no puede dormirte." },
    { n:"Trance", d:"No duermes: meditas 4 horas al día y obtienes el beneficio de 8 horas de sueño." },
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
    { n:"Habla Silenciosa (Silent Speech)", d:"Puedes hablar telepáticamente a una criatura a 30 pies de ti que entienda al menos un idioma (una a la vez)." },
  ],

  "Mediano Lotusden [EGtW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 25 pies. Idiomas: Común y Mediano. Aumento: DES +2, SAB +1." },
    { n:"Suerte (Lucky)", d:"Cuando sacas un 1 natural en una tirada de ataque, prueba de característica o salvación, puedes repetir la tirada y debes usar el nuevo resultado." },
    { n:"Valiente (Brave)", d:"Ventaja en las salvaciones contra Asustado." },
    { n:"Agilidad Mediana (Halfling Nimbleness)", d:"Puedes moverte por el espacio de cualquier criatura de un tamaño mayor que el tuyo." },
    { n:"Hijo del Bosque (Children of the Woods)", a:"A", d:"Conoces el truco Druidcraft. Nv.3: Entangle una vez por Descanso Largo. Nv.5: Spike Growth una vez por Descanso Largo. Sin componentes materiales; SAB es tu característica de lanzamiento." },
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
    { n:"Manitas (Tinker)", d:"Competencia con herramientas de manitas. Con ellas y 1 hora de trabajo y 10 po de materiales construyes un artilugio Diminuto de relojería (CA 5, 1 PG): juguete mecánico, encendedor o caja de música. Dura 24 horas o hasta desmontarlo; puedes tener hasta 3 a la vez." },
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
    { n:"Rasgos Básicos", d:"Como el Tiefling del PHB 2014 (Humanoide, Mediano, 30 pies, Visión en la Oscuridad 60 pies, Resistencia Infernal al fuego, idiomas Común e Infernal); estas variantes sustituyen el Legado Infernal. Aumento base CAR +2; el segundo aumento depende de la variante." },
    { n:"Feral (SCAG)", d:"Aumento: DES +2, INT +1 en vez de CAR +2, INT +1. Conserva el Legado Infernal." },
    { n:"Lengua de Diablo (Devil's Tongue, SCAG)", a:"A", d:"Sustituye el Legado Infernal: truco Vicious Mockery; Nv.3 Charm Person (como conjuro de nivel 2); Nv.5 Enthrall; una vez por Descanso Largo cada uno; CAR." },
    { n:"Fuego Infernal (Hellfire, SCAG)", a:"A", d:"Modifica el Legado Infernal: el conjuro de Nv.3 es Burning Hands (como conjuro de nivel 2) en lugar de Hellish Rebuke; el resto (Thaumaturgy y Darkness en Nv.5) se mantiene. 1/Descanso Largo cada uno; CAR." },
    { n:"Alado (Winged, SCAG)", d:"Sustituye el Legado Infernal: alas de murciélago con Velocidad de vuelo 30 pies (no con armadura pesada)." },
    { n:"Legado de Asmodeo (MTF)", a:"A", d:"INT +1. Thaumaturgy; Nv.3 Hellish Rebuke (nivel 2); Nv.5 Darkness; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Baalzebul (MTF)", a:"A", d:"INT +1. Thaumaturgy; Nv.3 Ray of Sickness (nivel 2); Nv.5 Crown of Madness; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Dispater (MTF)", a:"A", d:"DES +1. Thaumaturgy; Nv.3 Disguise Self; Nv.5 Detect Thoughts; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Fierna (MTF)", a:"A", d:"SAB +1. Friends; Nv.3 Charm Person (nivel 2); Nv.5 Suggestion; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Glasya (MTF)", a:"A", d:"DES +1. Minor Illusion; Nv.3 Disguise Self; Nv.5 Invisibility; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Levistus (MTF)", a:"A", d:"CON +1. Ray of Frost; Nv.3 Armor of Agathys (nivel 2); Nv.5 Darkness; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Mammon (MTF)", a:"A", d:"INT +1. Mage Hand; Nv.3 Tenser's Floating Disk; Nv.5 Arcane Lock; 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Mefistófeles (MTF)", a:"A", d:"INT +1. Mage Hand; Nv.3 Burning Hands (nivel 2); Nv.5 Flame Blade (nivel 3); 1/Descanso Largo cada uno; CAR." },
    { n:"Legado de Zariel (MTF)", a:"A", d:"FUE +1. Thaumaturgy; Nv.3 Searing Smite (nivel 2); Nv.5 Branding Smite (nivel 3); 1/Descanso Largo cada uno; CAR." },
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
    { n:"Revelación Celestial (Celestial Revelation)", a:"B", d:"Nv.3: con una Acción Adicional te transformas 1 minuto (1/Descanso Largo) y eliges: Sombra Necrótica (ojos como pozos de oscuridad y alas fantasmales; las criaturas a 10 pies que te vean hacen salvación de CAR, CD 8 + comp. + mod. CAR, o quedan Asustadas hasta el final de tu siguiente turno), Consunción Radiante (luz brillante a 10 pies y tenue 10 más; al final de cada uno de tus turnos las criaturas a 10 pies sufren daño radiante = comp.) o Alma Radiante (alas luminosas; Velocidad de vuelo = tu Velocidad). Una vez por turno infliges daño extra (necrótico o radiante) igual a tu bonificador de competencia. [Original VGtM: Acción; daño extra = tu nivel; Protector = Alma Radiante, Azote = Consunción Radiante (daño a ti y a otros = mitad del nivel), Caído = Sombra Necrótica]" },
  ],

  "Bugbear [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, FUE +2, DES +1; idiomas Común y Goblin]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Miembros Largos (Long-Limbed)", d:"Cuando haces un ataque cuerpo a cuerpo en tu turno, tu alcance aumenta 5 pies." },
    { n:"Constitución Poderosa (Powerful Build)", d:"Cuentas como una categoría de tamaño mayor para la capacidad de carga y para empujar, arrastrar o levantar." },
    { n:"Sigiloso (Sneaky)", d:"Competencia en Sigilo y puedes pasar por espacios de una criatura Pequeña sin apretarte." },
    { n:"Ataque Sorpresa (Surprise Attack)", d:"Si impactas a una criatura que aún no ha actuado en el combate, inflige 2d6 de daño extra. [Original VGtM: sólo una vez por combate]" },
  ],

  "Centauro [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano, Velocidad 40 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original GGtR/MOoT: FUE +2, SAB +1; idiomas Común y Silvano; Cascos 1d4; Superviviente en vez de Afinidad Natural]" },
    { n:"Carga (Charge)", a:"B", d:"Si te mueves al menos 30 pies en línea recta hacia un objetivo e impactas con un ataque cuerpo a cuerpo en el mismo turno, puedes hacer inmediatamente un ataque con los cascos como Acción Adicional." },
    { n:"Cuerpo Equino (Equine Build)", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar. Trepar con manos y pies te cuesta 4 pies adicionales por pie." },
    { n:"Cascos (Hooves)", d:"Armas naturales: 1d6 + mod. de FUE de daño contundente." },
    { n:"Afinidad Natural (Natural Affinity)", d:"Competencia en una habilidad entre Trato con Animales, Medicina, Naturaleza y Supervivencia." },
  ],

  "Changeling [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original ERftLW: CAR +2 y +1 a otra; idiomas Común y otros dos; habilidades a elegir entre Engaño, Perspicacia, Intimidación y Persuasión]" },
    { n:"Instintos de Changeling (Changeling Instincts)", d:"Competencia en dos habilidades entre Engaño, Perspicacia, Intimidación, Interpretación y Persuasión." },
    { n:"Cambiaformas (Shapechanger)", a:"A", d:"Con una acción cambias tu apariencia y voz (coloración, cabello, sexo, altura, peso; tamaño Mediano o Pequeño). Puedes parecer otra persona pero no copiar a un individuo concreto. No cambia tu equipo ni la disposición básica de tus miembros. Vuelves a tu forma con una acción o al morir." },
  ],

  "Gnomo de las Profundidades [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño, Velocidad 30 pies, Visión en la Oscuridad 120 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC/SCAG: INT +2, DES +1, Velocidad 25 pies; idiomas Común y Gnómico (Infracomún en SCAG); Astucia Gnómica y Camuflaje de Piedra]" },
    { n:"Resistencia Mágica Gnómica (Gnomish Magic Resistance)", d:"Ventaja en las salvaciones de INT, SAB y CAR contra conjuros." },
    { n:"Camuflaje de Svirfneblin (Svirfneblin Camouflage)", d:"Ventaja en pruebas de Destreza (Sigilo). Usos = bonificador de competencia por Descanso Largo." },
    { n:"Don del Svirfneblin (Gift of the Svirfneblin)", a:"A", d:"Nv.3: lanzas Disguise Self una vez por Descanso Largo. Nv.5: lanzas también Nondetection una vez por Descanso Largo sin componentes materiales. También con espacios de conjuro. INT, SAB o CAR." },
  ],

  "Duergar [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 120 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original SCAG: CON +2, FUE +1, Velocidad 25 pies (no reducida por armadura pesada), idiomas Común y Enano; Resiliencia Duergar (ventaja contra ilusiones, Hechizado y Paralizado), Entrenamiento Enano en Combate, competencia con herramientas, Sentido de la Piedra y Sensibilidad a la Luz Solar (Desventaja en ataques y Percepción bajo luz directa del sol)]" },
    { n:"Magia Duergar (Duergar Magic)", a:"A", d:"Nv.3: lanzas Enlarge/Reduce sobre ti sin componentes materiales una vez por Descanso Largo. Nv.5: lanzas Invisibility (sobre ti) una vez por Descanso Largo. También con espacios. INT, SAB o CAR." },
    { n:"Resiliencia Enana (Dwarven Resilience)", d:"Ventaja en salvaciones contra veneno y resistencia al daño de veneno." },
    { n:"Fortaleza Psiónica (Psionic Fortitude)", d:"Ventaja en las salvaciones para evitar o terminar las condiciones Hechizado y Aturdido." },
  ],

  "Eladrin [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original DMG/MTF: DES +2, CAR +1; idiomas Común y Élfico]" },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar Hechizado. [Original: ventaja contra Hechizado y la magia no puede dormirte]" },
    { n:"Paso Feérico (Fey Step)", a:"B", d:"Con una Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas. Usos = bonificador de competencia por Descanso Largo. Nv.3: según tu estación, efecto adicional (CD 8 + comp. + mod. INT/SAB/CAR): Otoño: hasta 2 criaturas a 10 pies, salvación de SAB o Hechizadas 1 minuto (o hasta recibir daño); Invierno: 1 criatura a 5 pies, salvación de SAB o Asustada hasta el final de tu siguiente turno; Primavera: tocas a una criatura voluntaria a 5 pies y ella se teletransporta en tu lugar a un espacio libre a 30 pies que veas; Verano: cada criatura a 5 pies sufre daño de fuego igual a tu bonificador de competencia. [Original MTF: 1/descanso corto; Verano: daño = mod. CAR]" },
    { n:"Trance", d:"No duermes; haces un Descanso Largo en 4 horas meditando consciente. Al terminarlo puedes cambiar de estación y ganas competencia con dos armas o herramientas de tu elección hasta tu siguiente Descanso Largo." },
  ],

  "Fairy [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Pequeño, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. Ver también Fairy en The Wild Beyond the Witchlight (mismo texto)." },
    { n:"Magia Feérica (Fairy Magic)", a:"A", d:"Conoces el truco Druidcraft. Nv.3: lanzas Faerie Fire una vez por Descanso Largo. Nv.5: lanzas Enlarge/Reduce una vez por Descanso Largo. También con espacios de conjuro. INT, SAB o CAR." },
    { n:"Vuelo (Flight)", d:"Gracias a tus alas tienes Velocidad de vuelo igual a tu Velocidad caminando. No puedes usarla con armadura media o pesada." },
  ],

  "Firbolg [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, SAB +2, FUE +1; idiomas Común, Élfico y Gigante]" },
    { n:"Magia Firbolg (Firbolg Magic)", a:"A", d:"Lanzas Detect Magic y Disguise Self una vez cada uno por Descanso Largo (también con espacios); con Disguise Self puedes parecer hasta 90 cm más bajo o alto. INT, SAB o CAR. [Original: recarga con descanso corto o largo; SAB]" },
    { n:"Paso Oculto (Hidden Step)", a:"B", d:"Con una Acción Adicional te vuelves Invisible hasta el inicio de tu siguiente turno o hasta que ataques, causes daño u obligues a una salvación. Usos = bonificador de competencia por Descanso Largo. [Original: 1 uso por descanso corto o largo]" },
    { n:"Constitución Poderosa (Powerful Build)", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Habla de Bestias y Hojas (Speech of Beast and Leaf)", d:"Puedes comunicarte de forma limitada con bestias y plantas: te entienden pero tú a ellas no. Ventaja en pruebas de Carisma para influir en ellas." },
  ],

  "Githyanki [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: FUE +2, INT +1; idiomas Común y Gith; Maestría Decadente (un idioma y una habilidad o herramienta), Prodigio Marcial (armaduras ligera y media; espadas cortas, espadas largas y mandobles)]" },
    { n:"Conocimiento Astral (Astral Knowledge)", d:"Tras cada Descanso Largo ganas competencia en una habilidad y con un arma o herramienta a tu elección hasta el siguiente Descanso Largo." },
    { n:"Psiónica Githyanki (Githyanki Psionics)", a:"A", d:"Conoces el truco Mage Hand (mano invisible, sin componentes). Nv.3: lanzas Jump una vez por Descanso Largo. Nv.5: lanzas Misty Step una vez por Descanso Largo. También con espacios. INT, SAB o CAR." },
    { n:"Resiliencia Psíquica (Psychic Resilience)", d:"Resistencia al daño psíquico." },
  ],

  "Githzerai [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: SAB +2, INT +1; idiomas Común y Gith]" },
    { n:"Disciplina Mental (Mental Discipline)", d:"Ventaja en las salvaciones para evitar o terminar Hechizado y Asustado." },
    { n:"Psiónica Githzerai (Githzerai Psionics)", a:"A", d:"Conoces el truco Mage Hand (invisible, sin componentes). Nv.3: lanzas Shield una vez por Descanso Largo. Nv.5: lanzas Detect Thoughts una vez por Descanso Largo. También con espacios. INT, SAB o CAR. [Original MTF: SAB]" },
    { n:"Resiliencia Psíquica (Psychic Resilience)", d:"Resistencia al daño psíquico." },
  ],

  "Goblin [MotM]": [
    { n:"Rasgos Básicos", d:"Feérico, Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, DES +2, CON +1; idiomas Común y Goblin]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Furia del Pequeño (Fury of the Small)", a:"O", d:"Una vez por turno, cuando dañas con un ataque o conjuro a una criatura de tamaño mayor que el tuyo, infliges daño extra igual a tu bonificador de competencia. Usos = bonificador de competencia por Descanso Largo. [Original VGtM: daño extra = tu nivel; recarga con descanso corto o largo]" },
    { n:"Escape Ágil (Nimble Escape)", a:"B", d:"Puedes realizar la acción Retirarse o Esconderse como Acción Adicional en cada uno de tus turnos." },
  ],

  "Goliat [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original EEPC: FUE +2, CON +1; idiomas Común y Gigante]" },
    { n:"Pequeño Gigante (Little Giant)", d:"Competencia en Atletismo. Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar. [Original: Atleta Natural + Constitución Poderosa]" },
    { n:"Nacido en la Montaña (Mountain Born)", d:"Resistencia al daño de frío y aclimatación a la gran altitud (más de 6.000 m)." },
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
    { n:"Rasgos Básicos", d:"Feérico, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original VGtM: humanoide, CON +2, INT +1; idiomas Común y Goblin; Entrenamiento Marcial (dos armas marciales y armadura ligera) y Salvar las Apariencias (si fallas un ataque, prueba o salvación suma +1 por aliado a 30 pies, máx. +5; 1/descanso corto o largo)]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar la condición Hechizado." },
    { n:"Don Feérico (Fey Gift)", a:"B", d:"Con una Acción Adicional realizas la acción Ayudar. Usos = bonificador de competencia por Descanso Largo. Nv.3: en cada uso eliges además: Hospitalidad (tú y el objetivo ganáis 1d6 + comp. PG temporales), Pasaje (tú y el objetivo ganáis +10 pies de Velocidad hasta el inicio de tu siguiente turno) o Rencor (la primera tirada de ataque del objetivo contra ti tiene Desventaja hasta el inicio de tu siguiente turno)." },
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
    { n:"Paso de Tierra (Earth Walk)", d:"Ignoras el terreno difícil del suelo o suelo de piedra o tierra que pisas con tu Velocidad caminando." },
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
    { n:"Armadura Natural (Natural Armor)", d:"Sin armadura, tu CA es 13 + mod. de DES; puedes usar escudo." },
    { n:"Intuición Natural (Nature's Intuition)", d:"Competencia en dos habilidades entre Trato con Animales, Medicina, Naturaleza, Percepción, Sigilo y Supervivencia." },
  ],

  "Loxodon [GGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y Loxodon. Aumento: CON +2, SAB +1." },
    { n:"Constitución Poderosa (Powerful Build)", d:"Cuentas como una categoría de tamaño mayor para cargar, empujar, arrastrar y levantar." },
    { n:"Serenidad Loxodon (Loxodon Serenity)", d:"Ventaja en las salvaciones para evitar Hechizado y Asustado." },
    { n:"Armadura Natural (Natural Armor)", d:"Sin armadura, tu CA es 12 + mod. de CON; puedes usar escudo." },
    { n:"Trompa (Trunk)", d:"Alcance de 5 pies; puede levantar hasta 5 × tu FUE en libras. Sirve para levantar, soltar, sostener, empujar, tirar de objetos o criaturas, abrir y cerrar puertas o recipientes, agarrar y hacer ataques desarmados; no puede usar armas ni escudos ni tareas de precisión." },
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

  "Owlin [SAiS]": [
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
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies y nado igual a tu Velocidad, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: DES +2, CON +1; idiomas Común, Élfico y Aquan; Entrenamiento de Elfo Marino (lanza, tridente, ballesta ligera, red); Hijo del Mar con nado 30 pies]" },
    { n:"Hijo del Mar (Child of the Sea)", d:"Respiras aire y agua; resistencia al daño de frío (según MotM)." },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar Hechizado." },
    { n:"Amigo del Mar (Friend of the Sea)", d:"Con gestos y sonidos comunicas ideas sencillas a cualquier Bestia con Velocidad de nado." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Trance", d:"Haces un Descanso Largo en 4 horas de meditación consciente; al terminar ganas competencia con dos armas o herramientas a tu elección hasta el siguiente Descanso Largo." },
  ],

  "Shadar-kai [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide (cuenta como elfo para requisitos), Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original MTF: DES +2, CON +1; idiomas Común y Élfico; Bendición de la Reina Cuervo 1/Descanso Largo]" },
    { n:"Ascendencia Feérica (Fey Ancestry)", d:"Ventaja en las salvaciones para evitar o terminar Hechizado; la magia no puede dormirte." },
    { n:"Sentidos Agudos (Keen Senses)", d:"Competencia en Percepción." },
    { n:"Bendición de la Reina Cuervo (Blessing of the Raven Queen)", a:"B", d:"Con una Acción Adicional te teletransportas hasta 30 pies a un espacio libre que veas. Usos = bonificador de competencia por Descanso Largo. Nv.3: además ganas resistencia a todo daño hasta el inicio de tu siguiente turno (aspecto fantasmal)." },
    { n:"Resistencia Necrótica (Necrotic Resistance)", d:"Resistencia al daño necrótico." },
    { n:"Trance", d:"Haces un Descanso Largo en 4 horas de meditación; al terminar ganas competencia con dos armas o herramientas a tu elección hasta el siguiente Descanso Largo." },
  ],

  "Shifter [MotM]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento (MotM): +2/+1 o +1/+1/+1. [Original ERftLW: Beasthide CON +2 FUE +1; Longtooth FUE +2 DES +1; Swiftstride DES +2 CAR +1; Wildhunt SAB +2; idioma Común; Sentidos Agudos (Percepción); Cambiar de Forma 1/descanso corto o largo con PG temporales = nivel + mod. CON]" },
    { n:"Instintos Bestiales (Bestial Instincts)", d:"Competencia en una habilidad entre Acrobacias, Atletismo, Intimidación y Supervivencia." },
    { n:"Cambio de Forma (Shifting)", a:"B", d:"Con una Acción Adicional te transformas 1 minuto: ganas PG temporales iguales a 2 × tu bonificador de competencia y un rasgo de forma a tu elección (Beasthide: +1d6 PG temporales y +1 CA; Longtooth: ataque con colmillos como Acción Adicional, 1d6 + FUE perforante; Swiftstride: +10 pies de Velocidad y Reacción para moverte 10 pies cuando una criatura termina su turno a 5 pies, sin provocar; Wildhunt: Ventaja en pruebas de SAB y ninguna criatura a 30 pies puede tener Ventaja en sus ataques contra ti salvo que estés Incapacitado). Usos = bonificador de competencia por Descanso Largo." },
  ],

  "Simic Hybrid [GGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Élfico o Vedalken. Aumento: CON +2 y +1 a otra característica." },
    { n:"Mejora Animal (Animal Enhancement)", a:"A", d:"Nv.1 eliges una: Planeo de Manta (reduces el daño de caída hasta 100 pies y avanzas 2 pies horizontales por pie caído), Trepador Ágil (Velocidad de trepar = tu Velocidad) o Adaptación Acuática (respiras aire y agua; nado = tu Velocidad). Nv.5 eliges otra: Apéndices de Agarre (garras o tentáculos; Acción para agarrar; 1d6 + FUE contundente; agarras como Acción Adicional tras impactar), Caparazón (+1 CA sin armadura pesada) o Escupitajo Ácido (Acción: objetivo a 30 pies, salvación de DES CD 8 + comp. + mod. CON, 2d10 ácido, 3d10 en Nv.11, 4d10 en Nv.17; mod. CON veces por Descanso Largo)." },
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
    { n:"Defensa de Caparazón (Shell Defense)", a:"B", d:"Con una Acción Adicional te encierras en el caparazón: +4 CA, Ventaja en salvaciones de FUE y CON; estás Derribado, Velocidad 0, Desventaja en salvaciones de DES, no puedes usar Reacciones y sólo puedes salir con una Acción Adicional." },
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
    { n:"Cambiaformas (Shape-Shifter)", a:"A", d:"Con una acción cambias tu apariencia y voz (coloración, cabello, sexo, altura, peso y tamaño). Puedes parecerte a otras especies jugables pero no copiar a un individuo que no hayas visto. Debes mantener la misma disposición de miembros; tu ropa y equipo no cambian. Vuelves a tu forma verdadera con una acción." },
  ],

  "Kalashtar [EFotA 2024]": [
    { n:"Rasgos Básicos", d:"Aberración, Mediano (6–7 pies), Velocidad 30 pies. (Eberron: Forge of the Artificer) [Original ERftLW 2014: SAB +2, CAR +1; humanoide; idiomas Común, Quori y uno más]" },
    { n:"Mente Dual (Dual Mind)", d:"Ventaja en las salvaciones de SAB y CAR. [ERftLW: ventaja en todas las salvaciones de SAB]" },
    { n:"Disciplina Mental (Mental Discipline)", d:"Resistencia al daño psíquico." },
    { n:"Vínculo Mental (Mind Link)", a:"A", d:"Te comunicas telepáticamente con criaturas que veas a una distancia de hasta 10 pies × tu nivel. Con la acción de Magia concedes a otra criatura la capacidad de responderte telepáticamente durante 1 hora (o hasta que lo termines)." },
    { n:"Desconectado de los Sueños (Severed from Dreams)", d:"No puedes ser objetivo del conjuro Dream. Al terminar un Descanso Largo ganas competencia en una habilidad a tu elección hasta el siguiente Descanso Largo." },
  ],

  "Kalashtar [ERftLW 2014]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común, Quori y uno más. Aumento: SAB +2, CAR +1." },
    { n:"Mente Dual (Dual Mind)", d:"Ventaja en todas las salvaciones de Sabiduría." },
    { n:"Disciplina Mental (Mental Discipline)", d:"Resistencia al daño psíquico." },
    { n:"Vínculo Mental (Mind Link)", a:"A", d:"Telepatía con criaturas que veas a 10 pies × tu nivel. Con una acción permites que una criatura te responda telepáticamente durante 1 hora o hasta que lo termines; sólo una a la vez." },
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
    { n:"Rasgos Básicos", d:"Constructo, Mediano (6–8 pies) o Pequeño (3–4 pies), Velocidad 30 pies. (Eberron: Forge of the Artificer) [Original ERftLW 2014: CON +2 y +1 a otra, humanoide-constructo, idiomas Común y uno más]" },
    { n:"Resiliencia de Constructo (Construct Resilience)", d:"Resistencia al daño de veneno y Ventaja en las salvaciones contra Envenenado." },
    { n:"Protección Integrada (Integrated Protection)", d:"+1 a la CA. La armadura que te pones no puede quitarse contra tu voluntad mientras vivas." },
    { n:"Descanso del Centinela (Sentry's Rest)", d:"No necesitas dormir y la magia no puede dormirte. Haces un Descanso Largo en 6 horas inactivo e inmóvil, aunque consciente." },
    { n:"Diseño Especializado (Specialized Design)", d:"Competencia en una habilidad y una herramienta a tu elección." },
    { n:"Incansable (Tireless)", d:"No sufres Agotamiento por deshidratación, desnutrición ni asfixia." },
  ],

  "Warforged [ERftLW 2014]": [
    { n:"Rasgos Básicos", d:"Constructo (humanoide), Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: CON +2 y +1 a otra característica." },
    { n:"Resiliencia Constructiva (Constructed Resilience)", d:"Ventaja en salvaciones contra veneno, resistencia al daño de veneno, inmune a enfermedad, no necesitas comer, beber ni respirar y no duermes (la magia no puede dormirte)." },
    { n:"Descanso del Centinela (Sentry's Rest)", d:"Pasas 6 horas inactivo e inmóvil durante un Descanso Largo, aparentando ser inerte pero consciente." },
    { n:"Protección Integrada (Integrated Protection)", d:"+1 a la CA. Ponerte o quitarte armadura requiere 1 hora de incorporación; no pueden quitártela contra tu voluntad mientras vivas." },
    { n:"Diseño Especializado (Specialized Design)", d:"Competencia en una habilidad y una herramienta." },
  ],


  /* ════════════════════════════════════════════════════════════════
     RAVENLOFT (THW 2024 / VRGtR 2014)
  ════════════════════════════════════════════════════════════════ */

  "Dhampir [THW 2024]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 35 pies, Visión en la Oscuridad 60 pies. (Ravenloft: The Horrors Within)" },
    { n:"Trepar como Araña (Spider Climb)", d:"Velocidad de trepar igual a tu Velocidad; desde Nv.3 trepas por superficies verticales y techos con las manos libres." },
    { n:"Rastro de No-Muerte (Trace of Undeath)", d:"Resistencia al daño necrótico." },
    { n:"Mordisco Vampírico (Vampiric Bite)", d:"Tus ataques desarmados con los colmillos infligen 1d4 de daño perforante + mod. de CON contra criaturas que no sean Constructos ni No-Muertos. Al impactar eliges: Drenar (recuperas PG iguales al daño perforante) o Fortalecer (sumas el daño a tu siguiente prueba de característica o tirada de ataque en 1 minuto). Usos = bonificador de competencia por Descanso Largo." },
  ],

  "Dhampir [VRGtR]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano o Pequeño, Velocidad 35 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Legado Ancestral (Ancestral Legacy)", d:"Si sustituyes la especie de un personaje existente, conservas sus competencias en habilidades y velocidades de trepar, volar o nadar; si no, ganas competencia en dos habilidades." },
    { n:"Naturaleza Sin Muerte (Deathless Nature)", d:"No necesitas respirar." },
    { n:"Trepar como Araña (Spider Climb)", d:"Velocidad de trepar igual a tu Velocidad; desde Nv.3 trepas por superficies verticales y techos con las manos libres." },
    { n:"Mordisco Vampírico (Vampiric Bite)", d:"Arma natural simple cuerpo a cuerpo: usas CON para ataque y daño, 1d4 perforante; ventaja contra criaturas con la mitad o menos de sus PG. Al impactar a una criatura que no sea Constructo ni No-Muerto eliges: recuperas PG iguales al daño o sumas el daño a tu siguiente prueba o ataque. Usos = bonificador de competencia por Descanso Largo." },
  ],

  "Hexblood [THW 2024]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano (4–7 pies) o Pequeño (2–4 pies), Velocidad 30 pies, Visión en la Oscuridad 60 pies. (Ravenloft: The Horrors Within)" },
    { n:"Ficha Siniestra (Eerie Token)", a:"B", d:"Con una Acción Adicional te arrancas un mechón, uña o diente que se vuelve una ficha mágica hasta tu siguiente Descanso Largo (1/Descanso Largo). A 10 millas de ella puedes: Mensaje a Distancia (Magia: mensaje telepático de hasta 25 palabras a quien la sostenga) o Visión Remota (Magia: 1 minuto viendo y oyendo desde la ficha; terminas si quedas Incapacitado)." },
    { n:"Magia Maléfica (Hex Magic)", a:"A", d:"Siempre tienes preparados Disguise Self y Hex; los lanzas una vez cada uno por Descanso Largo sin espacio (también con espacios). INT, SAB o CAR." },
  ],

  "Hexblood [VRGtR]": [
    { n:"Rasgos Básicos", d:"Feérico, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Legado Ancestral (Ancestral Legacy)", d:"Si sustituyes la especie de un personaje existente, conservas sus competencias en habilidades y velocidades de trepar, volar o nadar; si no, ganas competencia en dos habilidades." },
    { n:"Ficha Siniestra (Eerie Token)", a:"B", d:"Con una Acción Adicional te arrancas un mechón, uña o diente: ficha mágica hasta el siguiente Descanso Largo (1/Descanso Largo). A 10 millas: envías un mensaje telepático de 25 palabras al portador, o entras en trance 1 minuto para ver y oír desde la ficha; ésta se destruye al terminar." },
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
    { n:"Naturaleza Sin Muerte (Deathless Nature)", d:"Ventaja en salvaciones contra enfermedad y veneno, resistencia al veneno, Ventaja en salvaciones contra muerte; no necesitas comer, beber ni respirar y no duermes (Descanso Largo en 4 horas inmóvil y consciente)." },
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
    { n:"Máquina Curativa (Healing Machine)", d:"Si Mending te afecta, puedes gastar un Dado de Golpe para recuperar PG; también te benefician Cure Wounds, Healing Word, Mass Cure Wounds, Mass Healing Word y Spare the Dying." },
    { n:"Naturaleza Mecánica (Mechanical Nature)", d:"Resistencia al veneno, inmune a enfermedad, Ventaja en salvaciones contra parálisis y veneno; no necesitas comer, beber ni respirar." },
    { n:"Descanso del Centinela (Sentry's Rest)", d:"Un Descanso Largo requiere 6 horas inactivo e inmóvil pero consciente." },
    { n:"Diseño Especializado (Specialized Design)", d:"Competencia con dos herramientas del PHB." },
  ],

  "Giff [AAG]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
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
    { n:"Amorfo (Amorphous)", d:"Te cuelas por espacios de 1 pulgada si no vas cargado; Ventaja para iniciar o escapar de un agarre." },
    { n:"Contener la Respiración (Hold Breath)", d:"Puedes contener la respiración 1 hora." },
    { n:"Resiliencia Natural (Natural Resilience)", d:"Resistencia al daño de ácido y veneno; Ventaja en las salvaciones contra veneno." },
    { n:"Moldear el Cuerpo (Shape Self)", a:"B", d:"Con tu acción remodelas el cuerpo en forma humanoide o masa sin miembros; con una Acción Adicional extruyes o reabsorbes un seudópodo (hasta 6 pulgadas de ancho y 10 pies de largo) para manipular objetos, puertas o cosas Diminutas (máx. 10 libras)." },
  ],

  "Thri-kreen [AAG]": [
    { n:"Rasgos Básicos", d:"Monstruosidad, Mediano o Pequeño, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Caparazón Camaleónico (Chameleon Carapace)", a:"A", d:"Sin armadura, tu CA es 13 + mod. de DES. Con una acción cambias la coloración del caparazón: Ventaja en Sigilo para esconderte en un entorno que coincida." },
    { n:"Brazos Secundarios (Secondary Arms)", d:"Dos brazos pequeños que manipulan objetos, abren puertas y recipientes, cogen o sueltan objetos Diminutos o empuñan armas ligeras." },
    { n:"Insomne (Sleepless)", d:"No necesitas dormir y puedes mantenerte consciente en un Descanso Largo (sin actividad intensa)." },
    { n:"Telepatía Thri-kreen (Thri-kreen Telepathy)", d:"Transmites pensamientos a criaturas voluntarias a 120 pies que entiendan al menos un idioma, sin magia." },
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
    { n:"Aliento Metálico (Metallic Breath Weapon)", a:"A", d:"Nv.5: en cono de 15 pies, salvación de CON: Aliento Debilitante (Incapacitado hasta el inicio de tu siguiente turno) o Aliento Repulsor (salvación de FUE: empujado 20 pies y Derribado). 1/Descanso Largo." },
  ],

  "Dracónido Gema [FTD]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2/+1 o +1/+1/+1." },
    { n:"Ascendencia de Gema (Gem Ancestry)", d:"Amatista (fuerza), Cristal (radiante), Esmeralda (psíquico), Zafiro (trueno) o Topacio (necrótico)." },
    { n:"Arma de Aliento (Breath Weapon)", a:"A", d:"Sustituyes un ataque de tu acción Atacar por un aliento en cono de 15 pies: salvación de DES (CD 8 + CON + comp.), 1d10 del tipo de tu ascendencia (2d10 en Nv.5, 3d10 en Nv.11, 4d10 en Nv.17), mitad si la supera. Usos = bonificador de competencia por Descanso Largo." },
    { n:"Resistencia Dracónica (Draconic Resistance)", d:"Resistencia al tipo de daño de tu ascendencia." },
    { n:"Mente Psiónica (Psionic Mind)", d:"Hablas telepáticamente con cualquier criatura que veas a 30 pies, sin idioma común." },
    { n:"Vuelo de Gema (Gem Flight)", a:"B", d:"Nv.5: con una Acción Adicional te brotan alas espectrales 1 minuto y tienes Velocidad de vuelo igual a tu Velocidad (flotas). 1/Descanso Largo." },
  ],

  "Dracónido de Sangre de Dragón [EGtW]": [
    { n:"Rasgos Básicos", d:"Humanoide, Mediano, Velocidad 30 pies, Visión en la Oscuridad 60 pies. Idiomas: Común y Dracónico. Aumento: INT +2, CAR +1. Usa la Ascendencia Dracónica y el Arma de Aliento del dracónido del PHB 2014." },
    { n:"Presencia Imponente (Forceful Presence)", d:"Una vez por Descanso Largo puedes hacer una prueba de Intimidación o Persuasión con Ventaja." },
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
    { n:"Rasgos Básicos", d:"Humanoide, Pequeño o Mediano (a tu elección), Velocidad 30 pies. Idiomas: Común y uno más. Aumento: +2 a una característica a tu elección." },
    { n:"Dote (Feat)", d:"Ganas una dote a tu elección para la que cumplas los requisitos." },
    { n:"Rasgo Variable (Variable Trait)", d:"Eliges una opción: Visión en la Oscuridad de 60 pies, o competencia en una habilidad a tu elección." },
  ],

};
