/* ══════════════════════════════════════════════════════════════════
   creacion-datos.js — Datos del asistente de creación de personaje
   ──────────────────────────────────────────────────────────────────
   Solo datos (sin interfaz). Los usa creacion.js.
   · Armas, armaduras y equipo inicial de cada clase: PHB 2024 (5.5e) y PHB 2014 / TCE
     (5e), contrastados con 5etools (donde difieren manda 5etools; ver CR_ARMAS.e14).
   · Edición: '24' = 5.5e (2024), '14' = 5e (2014).
   · Convención de los objetos del equipo: [referencia, cantidad]. La referencia es la
     clave de CR_ARMAS (arma), CR_ARM (armadura), CR_OBJ (objeto) o un comodín «@…»
     (el jugador elige: @wS arma simple, @wM marcial, @wSC simple cuerpo a cuerpo,
     @wMC marcial cuerpo a cuerpo, @instr instrumento, @art herramienta de artesano,
     @instrArt instrumento o herramienta, @juego juego, @fSag símbolo sagrado,
     @fArc foco arcano, @fDru foco druídico).
══════════════════════════════════════════════════════════════════ */

/* ───────── Habilidades (nombres tal como salen en la ficha) ───────── */
const CR_HAB = [
  { n: 'Acrobacias', st: 'dex' }, { n: 'Arcana', st: 'int' }, { n: 'Atletismo', st: 'str' },
  { n: 'Engaño', st: 'cha' }, { n: 'Historia', st: 'int' }, { n: 'Interpretación', st: 'cha' },
  { n: 'Intimidación', st: 'cha' }, { n: 'Investigación', st: 'int' }, { n: 'Juego de Manos', st: 'dex' },
  { n: 'Medicina', st: 'wis' }, { n: 'Naturaleza', st: 'int' }, { n: 'Percepción', st: 'wis' },
  { n: 'Perspicacia', st: 'wis' }, { n: 'Persuasión', st: 'cha' }, { n: 'Religión', st: 'int' },
  { n: 'Sigilo', st: 'dex' }, { n: 'Supervivencia', st: 'wis' }, { n: 'Trato con Animales', st: 'wis' },
];
const CR_HAB_NOMBRES = CR_HAB.map(h => h.n);

/* ───────── Armas ─────────
   n nombre · c categoría (s simple, m marcial) · r 1 = a distancia · d dado de daño · t tipo ·
   v dado a dos manos (Versátil) · a alcance/distancia (arrojadiza o munición) ·
   p propiedades (A munición, F sutil, H pesada, L ligera, LD carga, R alcance, T arrojadiza,
   V versátil, 2H dos manos) · m maestría (solo 2024) · e14 = lo que cambia en 5e (2014) ·
   s24 = solo existe en 2024. */
const CR_ARMAS = {
  'battleaxe': {n: 'Hacha de batalla (Battleaxe)', c: 'm', r: 0, d: '1d8', t: 'Cortante', p: ['V'], v: '1d10', m: 'Topple'},
  'blowgun': {n: 'Cerbatana (Blowgun)', c: 'm', r: 1, d: '1', t: 'Perforante', p: ['A', 'LD'], a: '25/100', m: 'Vex'},
  'club': {n: 'Garrote (Club)', c: 's', r: 0, d: '1d4', t: 'Contundente', p: ['L'], m: 'Slow'},
  'dagger': {n: 'Daga (Dagger)', c: 's', r: 0, d: '1d4', t: 'Perforante', p: ['F', 'L', 'T'], a: '20/60', m: 'Nick'},
  'dart': {n: 'Dardo (Dart)', c: 's', r: 1, d: '1d4', t: 'Perforante', p: ['F', 'T'], a: '20/60', m: 'Vex'},
  'flail': {n: 'Mayal (Flail)', c: 'm', r: 0, d: '1d8', t: 'Contundente', p: [], m: 'Sap'},
  'glaive': {n: 'Guja (Glaive)', c: 'm', r: 0, d: '1d10', t: 'Cortante', p: ['H', 'R', '2H'], m: 'Graze'},
  'greataxe': {n: 'Gran hacha (Greataxe)', c: 'm', r: 0, d: '1d12', t: 'Cortante', p: ['H', '2H'], m: 'Cleave'},
  'greatclub': {n: 'Garrote grande (Greatclub)', c: 's', r: 0, d: '1d8', t: 'Contundente', p: ['2H'], m: 'Push'},
  'greatsword': {n: 'Mandoble (Greatsword)', c: 'm', r: 0, d: '2d6', t: 'Cortante', p: ['H', '2H'], m: 'Graze'},
  'halberd': {n: 'Alabarda (Halberd)', c: 'm', r: 0, d: '1d10', t: 'Cortante', p: ['H', 'R', '2H'], m: 'Cleave'},
  'hand crossbow': {n: 'Ballesta de mano (Hand Crossbow)', c: 'm', r: 1, d: '1d6', t: 'Perforante', p: ['A', 'L', 'LD'], a: '30/120', m: 'Vex'},
  'handaxe': {n: 'Hacha de mano (Handaxe)', c: 's', r: 0, d: '1d6', t: 'Cortante', p: ['L', 'T'], a: '20/60', m: 'Vex'},
  'heavy crossbow': {n: 'Ballesta pesada (Heavy Crossbow)', c: 'm', r: 1, d: '1d10', t: 'Perforante', p: ['A', 'H', 'LD', '2H'], a: '100/400', m: 'Push'},
  'javelin': {n: 'Jabalina (Javelin)', c: 's', r: 0, d: '1d6', t: 'Perforante', p: ['T'], a: '30/120', m: 'Slow'},
  'lance': {n: 'Lanza de caballería (Lance)', c: 'm', r: 0, d: '1d10', t: 'Perforante', p: ['H', 'R', '2H'], m: 'Topple', e14: {d: '1d12', p: ['R', 'S']}},
  'light crossbow': {n: 'Ballesta ligera (Light Crossbow)', c: 's', r: 1, d: '1d8', t: 'Perforante', p: ['A', 'LD', '2H'], a: '80/320', m: 'Slow'},
  'light hammer': {n: 'Martillo ligero (Light Hammer)', c: 's', r: 0, d: '1d4', t: 'Contundente', p: ['L', 'T'], a: '20/60', m: 'Nick'},
  'longbow': {n: 'Arco largo (Longbow)', c: 'm', r: 1, d: '1d8', t: 'Perforante', p: ['A', 'H', '2H'], a: '150/600', m: 'Slow'},
  'longsword': {n: 'Espada larga (Longsword)', c: 'm', r: 0, d: '1d8', t: 'Cortante', p: ['V'], v: '1d10', m: 'Sap'},
  'mace': {n: 'Maza (Mace)', c: 's', r: 0, d: '1d6', t: 'Contundente', p: [], m: 'Sap'},
  'maul': {n: 'Martillo pesado (Maul)', c: 'm', r: 0, d: '2d6', t: 'Contundente', p: ['H', '2H'], m: 'Topple'},
  'morningstar': {n: 'Lucero del alba (Morningstar)', c: 'm', r: 0, d: '1d8', t: 'Perforante', p: [], m: 'Sap'},
  'musket': {s24: 1, n: 'Mosquete (Musket)', c: 'm', r: 1, d: '1d12', t: 'Perforante', p: ['A', 'LD', '2H'], a: '40/120', m: 'Slow'},
  'pike': {n: 'Pica (Pike)', c: 'm', r: 0, d: '1d10', t: 'Perforante', p: ['H', 'R', '2H'], m: 'Push'},
  'pistol': {s24: 1, n: 'Pistola (Pistol)', c: 'm', r: 1, d: '1d10', t: 'Perforante', p: ['A', 'LD'], a: '30/90', m: 'Vex'},
  'quarterstaff': {n: 'Bastón (Quarterstaff)', c: 's', r: 0, d: '1d6', t: 'Contundente', p: ['V'], v: '1d8', m: 'Topple'},
  'rapier': {n: 'Estoque (Rapier)', c: 'm', r: 0, d: '1d8', t: 'Perforante', p: ['F'], m: 'Vex'},
  'scimitar': {n: 'Cimitarra (Scimitar)', c: 'm', r: 0, d: '1d6', t: 'Cortante', p: ['F', 'L'], m: 'Nick'},
  'shortbow': {n: 'Arco corto (Shortbow)', c: 's', r: 1, d: '1d6', t: 'Perforante', p: ['A', '2H'], a: '80/320', m: 'Vex'},
  'shortsword': {n: 'Espada corta (Shortsword)', c: 'm', r: 0, d: '1d6', t: 'Perforante', p: ['F', 'L'], m: 'Vex'},
  'sickle': {n: 'Hoz (Sickle)', c: 's', r: 0, d: '1d4', t: 'Cortante', p: ['L'], m: 'Nick'},
  'sling': {n: 'Honda (Sling)', c: 's', r: 1, d: '1d4', t: 'Contundente', p: ['A'], a: '30/120', m: 'Slow'},
  'spear': {n: 'Lanza (Spear)', c: 's', r: 0, d: '1d6', t: 'Perforante', p: ['T', 'V'], v: '1d8', a: '20/60', m: 'Sap'},
  'trident': {n: 'Tridente (Trident)', c: 'm', r: 0, d: '1d8', t: 'Perforante', p: ['T', 'V'], v: '1d10', a: '20/60', m: 'Topple', e14: {d: '1d6', v: '1d8'}},
  'war pick': {n: 'Pico de guerra (War Pick)', c: 'm', r: 0, d: '1d8', t: 'Perforante', p: ['V'], v: '1d10', m: 'Sap', e14: {v: null, p: []}},
  'warhammer': {n: 'Martillo de guerra (Warhammer)', c: 'm', r: 0, d: '1d8', t: 'Contundente', p: ['V'], v: '1d10', m: 'Push'},
  'whip': {n: 'Látigo (Whip)', c: 'm', r: 0, d: '1d4', t: 'Cortante', p: ['F', 'R'], m: 'Slow'},
};

const CR_PROP = { A: 'Munición', F: 'Sutil', H: 'Pesada', L: 'Ligera', LD: 'Carga', R: 'Alcance', T: 'Arrojadiza', V: 'Versátil', '2H': 'A dos manos' };
const CR_MAESTRIA = {
  Cleave: 'Hender (Cleave)', Graze: 'Rozar (Graze)', Nick: 'Muesca (Nick)', Push: 'Empujar (Push)',
  Sap: 'Debilitar (Sap)', Slow: 'Ralentizar (Slow)', Topple: 'Derribar (Topple)', Vex: 'Hostigar (Vex)',
};

/* ───────── Armaduras ─────────
   sel = clave de la opción del desplegable «Armadura equipada» de la ficha (la CA la calcula la ficha) ·
   k tipo (L ligera, M media, H pesada) · ca CA base · sig 1 = desventaja en Sigilo · fue = Fuerza mínima */
const CR_ARM = {
  'padded armor':          { n: 'Armadura acolchada (Padded)', sel: 'acolchada', k: 'L', ca: 11, sig: 1 },
  'leather armor':         { n: 'Armadura de cuero (Leather)', sel: 'cuero', k: 'L', ca: 11 },
  'studded leather armor': { n: 'Armadura de cuero tachonado (Studded Leather)', sel: 'cueroestud', k: 'L', ca: 12 },
  'hide armor':            { n: 'Armadura de pieles (Hide)', sel: 'pieles', k: 'M', ca: 12 },
  'chain shirt':           { n: 'Camisa de malla (Chain Shirt)', sel: 'cadena', k: 'M', ca: 13 },
  'scale mail':            { n: 'Cota de escamas (Scale Mail)', sel: 'escamas', k: 'M', ca: 14, sig: 1 },
  'breastplate':           { n: 'Coraza (Breastplate)', sel: 'coraza', k: 'M', ca: 14 },
  'half plate armor':      { n: 'Semiplaca (Half Plate)', sel: 'semiplaca', k: 'M', ca: 15, sig: 1 },
  'ring mail':             { n: 'Cota de anillas (Ring Mail)', sel: 'anillos', k: 'H', ca: 14, sig: 1 },
  'chain mail':            { n: 'Cota de malla (Chain Mail)', sel: 'cota', k: 'H', ca: 16, sig: 1, fue: 13 },
  'splint armor':          { n: 'Armadura segmentada (Splint)', sel: 'segmentada', k: 'H', ca: 17, sig: 1, fue: 15 },
  'plate armor':           { n: 'Armadura de placas (Plate)', sel: 'placas', k: 'H', ca: 18, sig: 1, fue: 15 },
  'shield':                { n: 'Escudo (Shield)', es: 1, ca: 2 },
};

/* ───────── Objetos sueltos: id → [nombre, cantidad por defecto] ───────── */
const CR_OBJ = {
  'arrows (20)': ['Flechas', 20], 'crossbow bolts (20)': ['Virotes de ballesta', 20],
  'quiver': ['Carcaj'], 'component pouch': ['Bolsa de componentes'], 'spellbook': ['Libro de conjuros (Spellbook)'],
  "thieves' tools": ['Herramientas de ladrón'], "tinker's tools": ['Herramientas de manitas'],
  'herbalism kit': ['Kit de herboristería'], 'holy symbol': ['Símbolo sagrado'],
  'sprig of mistletoe': ['Ramita de muérdago (foco druídico)'], 'crystal': ['Cristal (foco arcano)'], 'orb': ['Orbe (foco arcano)'],
  'book': ['Libro'], 'robe': ['Túnica'], 'lute': ['Laúd'],
  'alchemist': ['Suministros de alquimista'],
  'caligrafia': ['Útiles de caligrafía'], 'libro-oraciones': ['Libro (oraciones)'], 'pergamino': ['Pergamino (hoja)'],
  'bolsa': ['Bolsa'], 'ropa-viaje': ['Ropa de viajero'], 'ropa-fina': ['Ropa fina'], 'disfraz': ['Disfraz'],
  'kit-falsificacion': ['Kit de falsificación'], 'palanca': ['Palanca'], 'espejo': ['Espejo'], 'perfume': ['Perfume'],
  'carpintero': ['Herramientas de carpintero'], 'botiquin': ['Botiquín de sanador'], 'olla': ['Olla de hierro'], 'pala': ['Pala'],
  'linterna-ojo': ['Linterna de ojo de buey'], 'grilletes': ['Grilletes'], 'cartografo': ['Herramientas de cartógrafo'],
  'saco-dormir': ['Saco de dormir'], 'tienda': ['Tienda'], 'libro-filosofia': ['Libro (filosofía)'], 'libro-historia': ['Libro (historia)'],
  'lampara': ['Lámpara'], 'aceite': ['Frasco de aceite'], 'navegante': ['Herramientas de navegante'], 'cuerda': ['Cuerda'],
};

/* ───────── Paquetes de aventurero (se reparten en filas del Inventario) ───────── */
const CR_PAQ = {
  "burglar's pack": { n: 'Paquete de ladrón',
    24: [[1, 'Mochila'], [1, 'Bolas de rodamiento (bolsa)'], [1, 'Campanilla'], [10, 'Vela'], [1, 'Palanqueta'], [1, 'Linterna sorda'], [7, 'Frasco de aceite'], [5, 'Ración'], [1, 'Cuerda (50 pies)'], [1, 'Yesquero'], [1, 'Odre']],
    14: [[1, 'Mochila'], [1, 'Bolas de rodamiento (bolsa de 1.000)'], [1, 'Cuerda fina (10 pies)'], [1, 'Campanilla'], [5, 'Vela'], [1, 'Palanqueta'], [1, 'Martillo'], [10, 'Pitón'], [1, 'Linterna sorda'], [2, 'Frasco de aceite'], [5, 'Ración'], [1, 'Yesquero'], [1, 'Odre'], [1, 'Cuerda de cáñamo (50 pies)']] },
  "diplomat's pack": { n: 'Paquete de diplomático',
    24: [[1, 'Cofre'], [1, 'Ropa fina'], [1, 'Tinta (frasco)'], [5, 'Pluma de escribir'], [1, 'Lámpara'], [2, 'Estuche para mapas o pergaminos'], [4, 'Frasco de aceite'], [5, 'Hoja de papel'], [5, 'Hoja de pergamino'], [1, 'Perfume (vial)'], [1, 'Yesquero']],
    14: [[1, 'Cofre'], [2, 'Estuche para mapas o pergaminos'], [1, 'Ropa fina'], [1, 'Tinta (frasco)'], [1, 'Pluma de escribir'], [1, 'Lámpara'], [2, 'Frasco de aceite'], [5, 'Hoja de papel'], [1, 'Perfume (vial)'], [1, 'Lacre'], [1, 'Jabón']] },
  "dungeoneer's pack": { n: 'Paquete de mazmorrero',
    24: [[1, 'Mochila'], [1, 'Abrojos (bolsa de 20)'], [1, 'Palanqueta'], [2, 'Frasco de aceite'], [10, 'Ración'], [1, 'Cuerda (50 pies)'], [1, 'Yesquero'], [10, 'Antorcha'], [1, 'Odre']],
    14: [[1, 'Mochila'], [1, 'Palanqueta'], [1, 'Martillo'], [10, 'Pitón'], [10, 'Antorcha'], [1, 'Yesquero'], [10, 'Ración'], [1, 'Odre'], [1, 'Cuerda de cáñamo (50 pies)']] },
  "entertainer's pack": { n: 'Paquete de artista',
    24: [[1, 'Mochila'], [1, 'Saco de dormir'], [1, 'Campanilla'], [1, 'Linterna de ojo de buey'], [3, 'Disfraz'], [1, 'Espejo'], [8, 'Frasco de aceite'], [9, 'Ración'], [1, 'Yesquero'], [1, 'Odre']],
    14: [[1, 'Mochila'], [1, 'Saco de dormir'], [2, 'Disfraz'], [5, 'Vela'], [5, 'Ración'], [1, 'Odre'], [1, 'Kit de disfraz']] },
  "explorer's pack": { n: 'Paquete de explorador',
    24: [[1, 'Mochila'], [1, 'Saco de dormir'], [2, 'Frasco de aceite'], [10, 'Ración'], [1, 'Cuerda (50 pies)'], [1, 'Yesquero'], [10, 'Antorcha'], [1, 'Odre']],
    14: [[1, 'Mochila'], [1, 'Saco de dormir'], [1, 'Kit de comida'], [1, 'Yesquero'], [10, 'Antorcha'], [10, 'Ración'], [1, 'Odre'], [1, 'Cuerda de cáñamo (50 pies)']] },
  "priest's pack": { n: 'Paquete de sacerdote',
    24: [[1, 'Mochila'], [1, 'Manta'], [1, 'Agua bendita'], [1, 'Lámpara'], [7, 'Ración'], [1, 'Túnica'], [1, 'Yesquero']],
    14: [[1, 'Mochila'], [1, 'Manta'], [10, 'Vela'], [1, 'Yesquero'], [1, 'Caja de limosnas'], [2, 'Bloque de incienso'], [1, 'Incensario'], [1, 'Vestimentas'], [2, 'Ración'], [1, 'Odre']] },
  "scholar's pack": { n: 'Paquete de erudito',
    24: [[1, 'Mochila'], [1, 'Libro'], [1, 'Tinta (frasco)'], [1, 'Pluma de escribir'], [1, 'Lámpara'], [10, 'Frasco de aceite'], [10, 'Hoja de pergamino'], [1, 'Yesquero']],
    14: [[1, 'Mochila'], [1, 'Libro de saber'], [1, 'Tinta (frasco)'], [1, 'Pluma de escribir'], [10, 'Hoja de pergamino'], [1, 'Bolsita de arena'], [1, 'Cuchillo pequeño']] },
};

/* ───────── Herramientas, instrumentos y juegos ───────── */
const CR_HERR = {
  art: ['Suministros de alquimista', 'Suministros de cervecero', 'Útiles de caligrafía', 'Herramientas de carpintero', 'Herramientas de cartógrafo', 'Herramientas de zapatero', 'Utensilios de cocina', 'Herramientas de soplador de vidrio', 'Herramientas de joyero', 'Herramientas de peletero', 'Herramientas de albañil', 'Suministros de pintor', 'Herramientas de alfarero', 'Herramientas de herrero', 'Herramientas de manitas', 'Herramientas de tejedor', 'Herramientas de tallista'],
  instr: ['Gaita', 'Tambor', 'Dulcémele', 'Flauta', 'Cuerno', 'Laúd', 'Lira', 'Flauta de pan', 'Chirimía', 'Viola'],
  juego: ['Dados', 'Ajedrez dracónico', 'Naipes', 'Ajedrez de tres dragones'],
  otras: ['Herramientas de ladrón', 'Kit de disfraz', 'Kit de falsificación', 'Kit de herboristería', 'Kit de envenenador', 'Herramientas de navegante', 'Vehículos (tierra)', 'Vehículos (agua)'],
};
const CR_FOCOS = {
  fSag: ['Amuleto', 'Emblema', 'Relicario'],
  fArc: ['Cristal', 'Orbe', 'Vara', 'Bastón', 'Varita'],
  fDru: ['Ramita de muérdago', 'Tótem', 'Bastón de madera', 'Vara de tejo'],
};

/* ───────── Idiomas ───────── */
const CR_IDIOMAS = {
  est: ['Lengua de señas común', 'Dracónico', 'Élfico', 'Enano', 'Gigante', 'Gnómico', 'Goblin', 'Mediano', 'Orco'],
  raros: ['Abisal', 'Celestial', 'Habla Profunda', 'Infernal', 'Primordial', 'Silvano', 'Subcomún'],
};

/* ───────── Competencias de armas y armaduras por clase ─────────
   A = armaduras (L ligeras, M medias, H pesadas, E escudos) · W = armas: 'S' simples, 'M' marciales,
   '+ML' marciales con Ligera, '+MFL' marciales con Sutil o Ligera, o lista de claves de CR_ARMAS. */
const CR_COMP = {
  'Artificer':    { A: 'LME',  W: { 24: 'S', 14: 'S' } },
  'Bárbaro':      { A: 'LME',  W: { 24: 'SM', 14: 'SM' } },
  'Bardo':        { A: 'L',    W: { 24: 'S', 14: 'S|hand crossbow,longsword,rapier,shortsword' } },
  'Blood Hunter': { A: 'LME',  W: { 24: 'SM', 14: 'SM' } },
  'Brujo':        { A: 'L',    W: { 24: 'S', 14: 'S' } },
  'Clérigo':      { A: 'LME',  W: { 24: 'S', 14: 'S' } },
  'Druida':       { A: { 24: 'LE', 14: 'LME' }, W: { 24: 'S', 14: 'club,dagger,dart,javelin,mace,quarterstaff,scimitar,sickle,sling,spear' },
                    nota: { 14: 'sin metal' } },
  'Explorador':   { A: 'LME',  W: { 24: 'SM', 14: 'SM' } },
  'Guerrero':     { A: 'LMHE', W: { 24: 'SM', 14: 'SM' } },
  'Hechicero':    { A: '',     W: { 24: 'S', 14: 'dagger,dart,sling,quarterstaff,light crossbow' } },
  'Mago':         { A: '',     W: { 24: 'S', 14: 'dagger,dart,sling,quarterstaff,light crossbow' } },
  'Monje':        { A: '',     W: { 24: 'S|+ML', 14: 'S|shortsword' } },
  'Paladín':      { A: 'LMHE', W: { 24: 'SM', 14: 'SM' } },
  'Pícaro':       { A: 'L',    W: { 24: 'S|+MFL', 14: 'S|hand crossbow,longsword,rapier,shortsword' } },
};
const CR_ARM_TXT = { L: 'ligeras', M: 'medias', H: 'pesadas', E: 'escudos' };

/* ───────── Pericias que da la clase (nivel de clase, cuántas) ───────── */
const CR_PERICIA = {
  'Pícaro':     { 24: [[1, 2], [6, 2]], 14: [[1, 2], [6, 2]] },
  'Bardo':      { 24: [[2, 2], [9, 2]], 14: [[3, 2], [10, 2]] },
  'Explorador': { 24: [[2, 1], [9, 2]], 14: [] },
  'Mago':       { 24: [[2, 1]], 14: [], solo: ['Arcana', 'Historia', 'Investigación', 'Medicina', 'Naturaleza', 'Religión'] },
};

/* ───────── Maestría con armas (solo 2024): [nivel de clase, nº de armas] ───────── */
const CR_MAESTRIAS = {
  'Bárbaro':    { cuerpo: 1, n: [[1, 2], [4, 3], [10, 4]] },
  'Guerrero':   { n: [[1, 3], [4, 4], [10, 5], [16, 6]] },
  'Paladín':    { n: [[1, 2]] },
  'Explorador': { n: [[1, 2]] },
  'Pícaro':     { n: [[1, 2]] },
};

/* ───────── Orden Divino / Primigenio (2024, nivel 1) ───────── */
const CR_ORDEN = {
  'Clérigo': { t: 'Orden Divino (Divine Order)', op: [
    { v: 'Protector', d: 'Competencia con armas marciales y entrenamiento con armadura pesada.', arm: 'armas marciales y armadura pesada' },
    { v: 'Taumaturgo', d: 'Conoces un truco más de Clérigo y sumas tu mod. SAB (mín. +1) a las pruebas de Arcana y Religión.', truco: 1 }] },
  'Druida': { t: 'Orden Primigenio (Primal Order)', op: [
    { v: 'Mago', d: 'Conoces un truco más de Druida y sumas tu mod. SAB (mín. +1) a las pruebas de Arcana y Naturaleza.', truco: 1 },
    { v: 'Guardián', d: 'Competencia con armas marciales y entrenamiento con armadura media.', arm: 'armas marciales y armadura media' }] },
};

/* ───────── Clases: habilidades y equipo inicial ─────────
   hab = {n, de} (de: lista de habilidades, null = cualquiera) · eq (2024) = { A:{it,po}, B:…, C:… } ·
   eq (2014) = { g: [ {f:[…]} | {a:[…],b:[…],c:[…]} ], dado:[nº, caras, ×] } (f = fijo). */
const CR_CLASES = {
  'Artificer': {'14': {hab: {n: 2, de: ['Arcana', 'Historia', 'Investigación', 'Medicina', 'Naturaleza', 'Percepción', 'Juego de Manos']}, eq: {g: [{f: [['@wS', 2]]}, {f: [['light crossbow', 1], ['crossbow bolts (20)', 1]]}, {a: [['studded leather armor', 1]], b: [['scale mail', 1]]}, {f: [['thieves\' tools', 1], ['dungeoneer\'s pack', 1]]}], dado: [5, 4, 10]}}, '24': {hab: {n: 2, de: ['Arcana', 'Historia', 'Investigación', 'Medicina', 'Naturaleza', 'Percepción', 'Juego de Manos']}, eq: {A: {it: [['studded leather armor', 1], ['dagger', 1], ['thieves\' tools', 1], ['tinker\'s tools', 1], ['dungeoneer\'s pack', 1]], po: 16}, B: {it: [], po: 150}}}, herr: {fija: ['Herramientas de ladrón', 'Herramientas de manitas'], pick: [['art', 1]]}},
  'Bárbaro': {'14': {hab: {n: 2, de: ['Trato con Animales', 'Atletismo', 'Intimidación', 'Naturaleza', 'Percepción', 'Supervivencia']}, eq: {g: [{a: [['greataxe', 1]], b: [['@wMC', 1]]}, {a: [['handaxe', 2]], b: [['@wS', 1]]}, {f: [['explorer\'s pack', 1], ['javelin', 4]]}], dado: [2, 4, 10]}}, '24': {hab: {n: 2, de: ['Trato con Animales', 'Atletismo', 'Intimidación', 'Naturaleza', 'Percepción', 'Supervivencia']}, eq: {A: {it: [['greataxe', 1], ['handaxe', 4], ['explorer\'s pack', 1]], po: 15}, B: {it: [], po: 75}}}},
  'Bardo': {'14': {hab: {n: 3, de: null}, eq: {g: [{a: [['rapier', 1]], b: [['longsword', 1]], c: [['@wS', 1]]}, {a: [['diplomat\'s pack', 1]], b: [['entertainer\'s pack', 1]]}, {a: [['lute', 1]], b: [['@instr', 1]]}, {f: [['leather armor', 1], ['dagger', 1]]}], dado: [5, 4, 10]}}, '24': {hab: {n: 3, de: null}, eq: {A: {it: [['leather armor', 1], ['dagger', 2], ['@instr', 1], ['entertainer\'s pack', 1]], po: 19}, B: {it: [], po: 90}}}, herr: {pick: [['instr', 3]]}},
  'Blood Hunter': {'14': {hab: {n: 3, de: ['Acrobacias', 'Arcana', 'Atletismo', 'Historia', 'Perspicacia', 'Investigación', 'Religión', 'Supervivencia']}, eq: {g: [{a: [['@wM', 1]], b: [['@wS', 2]]}, {a: [['light crossbow', 1], ['crossbow bolts (20)', 1]], b: [['handaxe', 2]]}, {a: [['dungeoneer\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['alchemist', 1]]}], dado: [5, 4, 10]}}, '24': {hab: {n: 3, de: ['Acrobacias', 'Arcana', 'Atletismo', 'Historia', 'Perspicacia', 'Investigación', 'Religión', 'Supervivencia']}, eq: {g: [{a: [['@wM', 1]], b: [['@wS', 2]]}, {a: [['light crossbow', 1], ['crossbow bolts (20)', 1]], b: [['handaxe', 2]]}, {a: [['dungeoneer\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['alchemist', 1]]}], dado: [5, 4, 10]}}, herr: {fija: ['Suministros de alquimista']}},
  'Brujo': {'14': {hab: {n: 2, de: ['Arcana', 'Engaño', 'Historia', 'Intimidación', 'Investigación', 'Naturaleza', 'Religión']}, eq: {g: [{a: [['light crossbow', 1], ['crossbow bolts (20)', 1]], b: [['@wS', 1]]}, {a: [['component pouch', 1]], b: [['@fArc', 1]]}, {a: [['scholar\'s pack', 1]], b: [['dungeoneer\'s pack', 1]]}, {f: [['leather armor', 1], ['@wS', 1], ['dagger', 2]]}], dado: [4, 4, 10]}}, '24': {hab: {n: 2, de: ['Arcana', 'Engaño', 'Historia', 'Intimidación', 'Investigación', 'Naturaleza', 'Religión']}, eq: {A: {it: [['leather armor', 1], ['sickle', 1], ['dagger', 2], ['orb', 1], ['book', 1], ['scholar\'s pack', 1]], po: 15}, B: {it: [], po: 100}}}},
  'Clérigo': {'14': {hab: {n: 2, de: ['Historia', 'Perspicacia', 'Medicina', 'Persuasión', 'Religión']}, eq: {g: [{a: [['mace', 1]], b: [['warhammer', 1]]}, {a: [['scale mail', 1]], b: [['leather armor', 1]], c: [['chain mail', 1]]}, {a: [['light crossbow', 1], ['crossbow bolts (20)', 1]], b: [['@wS', 1]]}, {a: [['priest\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['shield', 1], ['@fSag', 1]]}], dado: [5, 4, 10]}}, '24': {hab: {n: 2, de: ['Historia', 'Perspicacia', 'Medicina', 'Persuasión', 'Religión']}, eq: {A: {it: [['chain shirt', 1], ['shield', 1], ['mace', 1], ['holy symbol', 1], ['priest\'s pack', 1]], po: 7}, B: {it: [], po: 110}}}},
  'Druida': {'14': {hab: {n: 2, de: ['Arcana', 'Trato con Animales', 'Perspicacia', 'Medicina', 'Naturaleza', 'Percepción', 'Religión', 'Supervivencia']}, eq: {g: [{a: [['shield', 1]], b: [['@wS', 1]]}, {a: [['scimitar', 1]], b: [['@wSC', 1]]}, {f: [['leather armor', 1], ['explorer\'s pack', 1], ['@fDru', 1]]}], dado: [2, 4, 10]}}, '24': {hab: {n: 2, de: ['Arcana', 'Trato con Animales', 'Perspicacia', 'Medicina', 'Naturaleza', 'Percepción', 'Religión', 'Supervivencia']}, eq: {A: {it: [['leather armor', 1], ['shield', 1], ['sickle', 1], ['@fDru', 1], ['explorer\'s pack', 1], ['herbalism kit', 1]], po: 9}, B: {it: [], po: 50}}}, herr: {fija: ['Kit de herboristería']}, idi: {fijos: ['Druídico']}},
  'Explorador': {'14': {hab: {n: 3, de: ['Trato con Animales', 'Atletismo', 'Perspicacia', 'Investigación', 'Naturaleza', 'Percepción', 'Sigilo', 'Supervivencia']}, eq: {g: [{a: [['scale mail', 1]], b: [['leather armor', 1]]}, {a: [['shortsword', 2]], b: [['@wSC', 2]]}, {a: [['dungeoneer\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['longbow', 1], ['arrows (20)', 1]]}], dado: [5, 4, 10]}}, '24': {hab: {n: 3, de: ['Trato con Animales', 'Atletismo', 'Perspicacia', 'Investigación', 'Naturaleza', 'Percepción', 'Sigilo', 'Supervivencia']}, eq: {A: {it: [['studded leather armor', 1], ['scimitar', 1], ['shortsword', 1], ['longbow', 1], ['arrows (20)', 1], ['quiver', 1], ['sprig of mistletoe', 1], ['explorer\'s pack', 1]], po: 7}, B: {it: [], po: 150}}}, idi: {libres: {'24': [[2, 2]]}}},
  'Guerrero': {'14': {hab: {n: 2, de: ['Acrobacias', 'Trato con Animales', 'Atletismo', 'Historia', 'Perspicacia', 'Intimidación', 'Percepción', 'Supervivencia']}, eq: {g: [{a: [['chain mail', 1]], b: [['leather armor', 1], ['longbow', 1], ['arrows (20)', 1]]}, {a: [['@wM', 1], ['shield', 1]], b: [['@wM', 2]]}, {a: [['light crossbow', 1], ['crossbow bolts (20)', 1]], b: [['handaxe', 2]]}, {a: [['dungeoneer\'s pack', 1]], b: [['explorer\'s pack', 1]]}], dado: [5, 4, 10]}}, '24': {hab: {n: 2, de: ['Acrobacias', 'Trato con Animales', 'Atletismo', 'Historia', 'Perspicacia', 'Intimidación', 'Persuasión', 'Percepción', 'Supervivencia']}, eq: {A: {it: [['chain mail', 1], ['greatsword', 1], ['flail', 1], ['javelin', 8], ['dungeoneer\'s pack', 1]], po: 4}, B: {it: [['studded leather armor', 1], ['scimitar', 1], ['shortsword', 1], ['longbow', 1], ['arrows (20)', 1], ['quiver', 1], ['dungeoneer\'s pack', 1]], po: 11}, C: {it: [], po: 155}}}},
  'Hechicero': {'14': {hab: {n: 2, de: ['Arcana', 'Engaño', 'Perspicacia', 'Intimidación', 'Persuasión', 'Religión']}, eq: {g: [{a: [['light crossbow', 1], ['crossbow bolts (20)', 1]], b: [['@wS', 1]]}, {a: [['component pouch', 1]], b: [['@fArc', 1]]}, {a: [['dungeoneer\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['dagger', 2]]}], dado: [3, 4, 10]}}, '24': {hab: {n: 2, de: ['Arcana', 'Engaño', 'Perspicacia', 'Intimidación', 'Persuasión', 'Religión']}, eq: {A: {it: [['spear', 1], ['dagger', 2], ['crystal', 1], ['dungeoneer\'s pack', 1]], po: 28}, B: {it: [], po: 50}}}},
  'Mago': {'14': {hab: {n: 2, de: ['Arcana', 'Historia', 'Perspicacia', 'Investigación', 'Medicina', 'Religión']}, eq: {g: [{a: [['quarterstaff', 1]], b: [['dagger', 1]]}, {a: [['component pouch', 1]], b: [['@fArc', 1]]}, {a: [['scholar\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['spellbook', 1]]}], dado: [4, 4, 10]}}, '24': {hab: {n: 2, de: ['Arcana', 'Historia', 'Perspicacia', 'Investigación', 'Medicina', 'Naturaleza', 'Religión']}, eq: {A: {it: [['dagger', 2], ['quarterstaff', 1], ['robe', 1], ['spellbook', 1], ['scholar\'s pack', 1]], po: 5}, B: {it: [], po: 55}}}},
  'Monje': {'14': {hab: {n: 2, de: ['Acrobacias', 'Atletismo', 'Historia', 'Perspicacia', 'Religión', 'Sigilo']}, eq: {g: [{a: [['shortsword', 1]], b: [['@wS', 1]]}, {a: [['dungeoneer\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['dart', 10]]}], dado: [5, 4, 1]}}, '24': {hab: {n: 2, de: ['Acrobacias', 'Atletismo', 'Historia', 'Perspicacia', 'Religión', 'Sigilo']}, eq: {A: {it: [['spear', 1], ['dagger', 5], ['@instrArt', 1], ['explorer\'s pack', 1]], po: 11}, B: {it: [], po: 50}}}, herr: {pick: [['instrArt', 1]]}},
  'Paladín': {'14': {hab: {n: 2, de: ['Atletismo', 'Perspicacia', 'Intimidación', 'Medicina', 'Persuasión', 'Religión']}, eq: {g: [{a: [['@wM', 1], ['shield', 1]], b: [['@wM', 2]]}, {a: [['javelin', 5]], b: [['@wSC', 1]]}, {a: [['priest\'s pack', 1]], b: [['explorer\'s pack', 1]]}, {f: [['chain mail', 1], ['@fSag', 1]]}], dado: [5, 4, 10]}}, '24': {hab: {n: 2, de: ['Atletismo', 'Perspicacia', 'Intimidación', 'Medicina', 'Persuasión', 'Religión']}, eq: {A: {it: [['chain mail', 1], ['shield', 1], ['longsword', 1], ['javelin', 6], ['holy symbol', 1], ['priest\'s pack', 1]], po: 9}, B: {it: [], po: 150}}}},
  'Pícaro': {'14': {hab: {n: 4, de: ['Acrobacias', 'Atletismo', 'Engaño', 'Perspicacia', 'Intimidación', 'Investigación', 'Percepción', 'Interpretación', 'Persuasión', 'Juego de Manos', 'Sigilo']}, eq: {g: [{a: [['rapier', 1]], b: [['shortsword', 1]]}, {a: [['shortbow', 1], ['arrows (20)', 1]], b: [['shortsword', 1]]}, {a: [['burglar\'s pack', 1]], b: [['dungeoneer\'s pack', 1]], c: [['explorer\'s pack', 1]]}, {f: [['leather armor', 1], ['dagger', 2], ['thieves\' tools', 1]]}], dado: [4, 4, 10]}}, '24': {hab: {n: 4, de: ['Acrobacias', 'Atletismo', 'Engaño', 'Perspicacia', 'Intimidación', 'Investigación', 'Percepción', 'Persuasión', 'Juego de Manos', 'Sigilo']}, eq: {A: {it: [['leather armor', 1], ['dagger', 2], ['shortsword', 1], ['shortbow', 1], ['arrows (20)', 1], ['quiver', 1], ['thieves\' tools', 1], ['burglar\'s pack', 1]], po: 8}, B: {it: [], po: 100}}}, herr: {fija: ['Herramientas de ladrón']}, idi: {fijos: ['Jerga de ladrones'], libres: {'24': [[1, 1]]}}},
};

/* ═══════════════════════════════════════════════════════
   ESPECIES de PHB 2024 con elecciones
   eleg: lista de elecciones. Cada una: id, t (título),
     op: opciones { v, d (texto), vel, sp:[[nivel, id de conjuro]] }  ·  car: INT/SAB/CAR
     hab: lista de habilidades (o 'cualquiera')  ·  dote: 'origen'
   sp (a nivel de especie): conjuros que da siempre [[nivel, id]]
═══════════════════════════════════════════════════════ */
const CR_CAR3 = ['INT', 'SAB', 'CAR'];
const CR_TAM_MP = ['Mediano', 'Pequeño'];
const CR_ESP24 = {
  'Aasimar [PHB 2024]': { vel: 30, sp: [[0, 'light']], eleg: [{ id: 'tam', t: 'Tamaño', tam: CR_TAM_MP }] },
  'Dracónido [PHB 2024]': { vel: 30, eleg: [{ id: 'asc', t: 'Ascendencia dracónica', op: [
    { v: 'Negro', d: 'ácido' }, { v: 'Azul', d: 'relámpago' }, { v: 'Latón', d: 'fuego' }, { v: 'Bronce', d: 'relámpago' }, { v: 'Cobre', d: 'ácido' },
    { v: 'Oro', d: 'fuego' }, { v: 'Verde', d: 'veneno' }, { v: 'Rojo', d: 'fuego' }, { v: 'Plata', d: 'frío' }, { v: 'Blanco', d: 'frío' }] }] },
  'Elfo [PHB 2024]': { vel: 30, eleg: [
    { id: 'lin', t: 'Linaje élfico', op: [
      { v: 'Drow', d: 'Visión en la Oscuridad 120 pies; Dancing Lights; Faerie Fire (nv. 3); Darkness (nv. 5)', sp: [[0, 'dancing_lights'], [3, 'faerie_fire'], [5, 'darkness']] },
      { v: 'Alto Elfo', d: 'Prestidigitation; Detect Magic (nv. 3); Misty Step (nv. 5)', sp: [[0, 'prestidigitation'], [3, 'detect_magic'], [5, 'misty_step']] },
      { v: 'Elfo del Bosque', d: 'Velocidad 35 pies; Druidcraft; Longstrider (nv. 3); Pass without Trace (nv. 5)', vel: 35, sp: [[0, 'druidcraft'], [3, 'longstrider'], [5, 'pass_without_trace']] }] },
    { id: 'car', t: 'Característica de lanzamiento del linaje', car: CR_CAR3 },
    { id: 'hab', t: 'Sentidos agudos (competencia)', hab: ['Perspicacia', 'Percepción', 'Supervivencia'] }] },
  'Enano [PHB 2024]': { vel: 30 },
  'Gnomo [PHB 2024]': { vel: 30, eleg: [
    { id: 'lin', t: 'Linaje gnómico', op: [
      { v: 'Gnomo del Bosque', d: 'Minor Illusion; Speak with Animals siempre preparado', sp: [[0, 'minor_illusion'], [1, 'speak_with_animals']] },
      { v: 'Gnomo de las Rocas', d: 'Mending; Prestidigitation (+ aparatos de relojería)', sp: [[0, 'mending'], [0, 'prestidigitation']] }] },
    { id: 'car', t: 'Característica de lanzamiento del linaje', car: CR_CAR3 }] },
  'Goliat [PHB 2024]': { vel: 35, eleg: [{ id: 'asc', t: 'Ascendencia gigante', op: [
    { v: 'Nube', d: "Salto de Nube (Cloud's Jaunt)" }, { v: 'Fuego', d: "Quemadura de Fuego (Fire's Burn)" }, { v: 'Escarcha', d: "Frío de Escarcha (Frost's Chill)" },
    { v: 'Colina', d: "Tumbo de la Colina (Hill's Tumble)" }, { v: 'Piedra', d: "Aguante de Piedra (Stone's Endurance)" }, { v: 'Tormenta', d: "Trueno de Tormenta (Storm's Thunder)" }] }] },
  'Humano [PHB 2024]': { vel: 30, eleg: [
    { id: 'tam', t: 'Tamaño', tam: CR_TAM_MP },
    { id: 'hab', t: 'Habilidoso (competencia en una habilidad)', hab: 'cualquiera' },
    { id: 'dote', t: 'Versátil (dote de Origen)', dote: 'origen' }] },
  'Mediano [PHB 2024]': { vel: 30 },
  'Orco [PHB 2024]': { vel: 30 },
  'Tiefling [PHB 2024]': { vel: 30, sp: [[0, 'thaumaturgy']], eleg: [
    { id: 'tam', t: 'Tamaño', tam: CR_TAM_MP },
    { id: 'lin', t: 'Legado infernal', op: [
      { v: 'Abisal', d: 'Resistencia al veneno; Poison Spray; Ray of Sickness (nv. 3); Hold Person (nv. 5)', sp: [[0, 'poison_spray'], [3, 'ray_of_sickness'], [5, 'hold_person']] },
      { v: 'Ctónico', d: 'Resistencia al necrótico; Chill Touch; False Life (nv. 3); Ray of Enfeeblement (nv. 5)', sp: [[0, 'chill_touch'], [3, 'false_life'], [5, 'ray_of_enfeeblement']] },
      { v: 'Infernal', d: 'Resistencia al fuego; Fire Bolt; Hellish Rebuke (nv. 3); Darkness (nv. 5)', sp: [[0, 'fire_bolt'], [3, 'hellish_rebuke'], [5, 'darkness']] }] },
    { id: 'car', t: 'Característica de lanzamiento del legado', car: CR_CAR3 }] },
};

/* ═══════════════════════════════════════════════════════
   TRASFONDOS de PHB 2024: herramienta, dote de origen y equipo A
   herr: herramientas que da (texto) · pick: 'art'|'instr'|'juego' si el jugador elige una ·
   dote: { n (clave en DND_DOTES sin la fuente), lista (Magic Initiate) } · eq: { it, po }
   (B siempre es 50 po)
═══════════════════════════════════════════════════════ */
const CR_TF24 = {
  'Acólito (Acolyte) [PHB 2024]':   { herr: ['Útiles de caligrafía'], dote: { n: 'Magic Initiate', lista: 'Clérigo' },
    eq: { it: [['caligrafia', 1], ['libro-oraciones', 1], ['holy symbol', 1], ['pergamino', 10], ['robe', 1]], po: 8 } },
  'Artesano (Artisan) [PHB 2024]':  { pick: 'art', dote: { n: 'Crafter' },
    eq: { it: [['@art', 1], ['bolsa', 2], ['ropa-viaje', 1]], po: 32 } },
  'Charlatán (Charlatan) [PHB 2024]': { herr: ['Kit de falsificación'], dote: { n: 'Skilled' },
    eq: { it: [['kit-falsificacion', 1], ['disfraz', 1], ['ropa-fina', 1]], po: 15 } },
  'Criminal [PHB 2024]':            { herr: ['Herramientas de ladrón'], dote: { n: 'Alert' },
    eq: { it: [['dagger', 2], ["thieves' tools", 1], ['palanca', 1], ['bolsa', 2], ['ropa-viaje', 1]], po: 16 } },
  'Artista (Entertainer) [PHB 2024]': { pick: 'instr', dote: { n: 'Musician' },
    eq: { it: [['@instr', 1], ['disfraz', 2], ['espejo', 1], ['perfume', 1], ['ropa-viaje', 1]], po: 11 } },
  'Granjero (Farmer) [PHB 2024]':   { herr: ['Herramientas de carpintero'], dote: { n: 'Tough' },
    eq: { it: [['sickle', 1], ['carpintero', 1], ['botiquin', 1], ['olla', 1], ['pala', 1], ['ropa-viaje', 1]], po: 30 } },
  'Guardia (Guard) [PHB 2024]':     { pick: 'juego', dote: { n: 'Alert' },
    eq: { it: [['spear', 1], ['light crossbow', 1], ['crossbow bolts (20)', 1], ['@juego', 1], ['linterna-ojo', 1], ['grilletes', 1], ['quiver', 1], ['ropa-viaje', 1]], po: 12 } },
  'Guía (Guide) [PHB 2024]':        { herr: ['Herramientas de cartógrafo'], dote: { n: 'Magic Initiate', lista: 'Druida' },
    eq: { it: [['shortbow', 1], ['arrows (20)', 1], ['cartografo', 1], ['saco-dormir', 1], ['quiver', 1], ['tienda', 1], ['ropa-viaje', 1]], po: 3 } },
  'Ermitaño (Hermit) [PHB 2024]':   { herr: ['Kit de herboristería'], dote: { n: 'Healer' },
    eq: { it: [['quarterstaff', 1], ['herbalism kit', 1], ['saco-dormir', 1], ['libro-filosofia', 1], ['lampara', 1], ['aceite', 3], ['ropa-viaje', 1]], po: 16 } },
  'Mercader (Merchant) [PHB 2024]': { herr: ['Herramientas de navegante'], dote: { n: 'Lucky' },
    eq: { it: [['navegante', 1], ['bolsa', 2], ['ropa-viaje', 1]], po: 22 } },
  'Noble [PHB 2024]':               { pick: 'juego', dote: { n: 'Skilled' },
    eq: { it: [['@juego', 1], ['ropa-fina', 1], ['perfume', 1]], po: 29 } },
  'Sabio (Sage) [PHB 2024]':        { herr: ['Útiles de caligrafía'], dote: { n: 'Magic Initiate', lista: 'Mago' },
    eq: { it: [['quarterstaff', 1], ['caligrafia', 1], ['libro-historia', 1], ['pergamino', 8], ['robe', 1]], po: 8 } },
  'Marinero (Sailor) [PHB 2024]':   { herr: ['Herramientas de navegante'], dote: { n: 'Tavern Brawler' },
    eq: { it: [['dagger', 1], ['navegante', 1], ['cuerda', 1], ['ropa-viaje', 1]], po: 20 } },
  'Escriba (Scribe) [PHB 2024]':    { herr: ['Útiles de caligrafía'], dote: { n: 'Skilled' },
    eq: { it: [['caligrafia', 1], ['ropa-fina', 1], ['lampara', 1], ['aceite', 3], ['pergamino', 12]], po: 23 } },
  'Soldado (Soldier) [PHB 2024]':   { pick: 'juego', dote: { n: 'Savage Attacker' },
    eq: { it: [['spear', 1], ['shortbow', 1], ['arrows (20)', 1], ['@juego', 1], ['botiquin', 1], ['quiver', 1], ['ropa-viaje', 1]], po: 14 } },
  'Caminante (Wayfarer) [PHB 2024]': { herr: ['Herramientas de ladrón'], dote: { n: 'Lucky' },
    eq: { it: [['dagger', 2], ["thieves' tools", 1], ['@juego', 1], ['saco-dormir', 1], ['bolsa', 2], ['ropa-viaje', 1]], po: 16 } },
};

/* ═══════════════════════════════════════════════════════
   DOTES DE ORIGEN con elecciones
   Magic Initiate: 2 trucos + 1 conjuro de nivel 1 de la lista elegida y característica INT/SAB/CAR
   Skilled: 3 habilidades o herramientas · Musician: 3 instrumentos · Crafter: 3 herramientas de artesano
═══════════════════════════════════════════════════════ */
const CR_DOTE_OP = {
  'Magic Initiate': { listas: ['Clérigo', 'Druida', 'Mago'], trucos: 2, conj: 1, car: CR_CAR3 },
  'Skilled':        { habherr: 3 },
  'Musician':       { instr: 3 },
  'Crafter':        { art: 3 },
};
