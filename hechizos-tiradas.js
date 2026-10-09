/* ══════════════════════════════════════════════════════════
   hechizos-tiradas.js — Tiradas de conjuros que NO se pueden deducir del texto
   del campo `damage` (curaciones, PG temporales, varios dardos o rayos, daño extra
   a un ataque con arma, conjuros con varias tiradas alternativas…).

   Se indexa por el `id` del conjuro. Si un conjuro está aquí, `tirarHechizo`
   (script.js) usa esta definición; si no, analiza el campo `damage` como siempre.
   Valores según las reglas 2024 (PHB 2024) cuando el conjuro existe en ellas;
   si no, según el libro original (XGE, TCE, FTD…). Contrastado con la wiki de
   reglas 2024 y con el texto original de cada conjuro.

   FORMATO de una definición:
   {
     tipo:  'dano' | 'cura' | 'temp' | 'extra'
              extra = daño que se SUMA al de un ataque con arma (sentencias, Hex…)
     rep:   nº de repeticiones (dardos, rayos, ataques de una criatura) o 'mitad'
            (= mitad del nivel del espacio, redondeando abajo)
     repNv: repeticiones extra por cada nivel de espacio sobre el base
     atq:   true → tirada de ataque de conjuro por cada repetición
     atqFijo / atqMod: bono de ataque fijo (+ mod. de lanzamiento si atqMod) en vez del de la ficha
     ventaja: el ataque se hace siempre con ventaja
     sal / mitad: salvación del objetivo (nombre de la característica) y si en éxito es la mitad
     mitadFallo: si el ataque falla, mitad del daño de la primera línea (Flecha ácida de Melf)
     espera: { q, c } dados extra por cada turno de espera (Bola de fuego retardada)
     especial: 'caos' (Rayo del caos) | 'dg' (Vigor arcano: gasta Dados de Golpe)
     modos: [ { et, ...definición } ] varias tiradas alternativas; se elige al lanzar
     lineas: [ {
        q, c, plano   dados (q × dc) y bono plano
        mod           suma el mod. de la característica de lanzamiento
        dano          tipo de daño (texto)       et  etiqueta de la línea
        tipo          'cura' | 'temp' | 'dano' para una línea concreta
        signo         -1 para restar (Reducir)
        nv            { q, plano, cada, max }: dados/bono extra por cada `cada` (1) niveles sobre el base (máx. `max` veces)
        planoNivel    suma el nivel del espacio ×N al bono plano
        qTruco        [Nv1-4, Nv5-10, Nv11-16, Nv17-20] dados según nivel del personaje (trucos)
     } ]
   }
══════════════════════════════════════════════════════════ */

const HECHIZOS_TIRADAS = {

  /* ───────────────────────── TRUCOS ───────────────────────── */
  green_flame_blade: { tipo: 'extra', lineas: [
    { et: 'Extra al objetivo principal', c: 8, qTruco: [0, 1, 2, 3], dano: 'Fuego' },
    { et: '2.ª criatura (a 5 pies)',     c: 8, qTruco: [0, 1, 2, 3], mod: true, dano: 'Fuego' },
  ] },
  magic_stone: { tipo: 'dano', atq: true, lineas: [
    { q: 1, c: 6, mod: true, dano: 'Contundente' },
  ] },
  true_strike: { tipo: 'extra', lineas: [
    { et: 'Daño extra', c: 6, qTruco: [0, 1, 2, 3], dano: 'Radiante' },
  ] },

  /* ───────────────────────── NIVEL 1 ───────────────────────── */
  armor_of_agathys: { tipo: 'temp', auto: 'temp', lineas: [
    { tipo: 'temp', plano: 5, nv: { plano: 5 }, et: 'PG temporales' },
    { tipo: 'dano', plano: 5, nv: { plano: 5 }, dano: 'Frío', et: 'A quien te golpee cuerpo a cuerpo (mientras duren)' },
  ] },
  chaos_bolt: { tipo: 'dano', atq: true, especial: 'caos', lineas: [
    { q: 2, c: 8, et: '2d8' },
    { q: 1, c: 6, nv: { q: 1 }, et: 'd6 extra' },
  ] },
  cure_wounds:   { tipo: 'cura', lineas: [ { q: 2, c: 8, mod: true, nv: { q: 2 } } ] },
  divine_favor:  { tipo: 'extra', lineas: [ { q: 1, c: 4, dano: 'Radiante' } ] },
  false_life:    { tipo: 'temp', auto: 'temp', lineas: [ { q: 2, c: 4, plano: 4, nv: { plano: 5 }, et: 'PG temporales' } ] },
  healing_word:  { tipo: 'cura', lineas: [ { q: 2, c: 4, mod: true, nv: { q: 2 } } ] },
  hex:           { tipo: 'extra', lineas: [ { q: 1, c: 6, dano: 'Necrótico' } ] },
  hunter_mark:   { tipo: 'extra', lineas: [ { q: 1, c: 6, dano: 'Fuerza' } ] },
  magic_missile: { tipo: 'dano', rep: 3, repNv: 1, etRep: 'Dardo', lineas: [ { q: 1, c: 4, plano: 1, dano: 'Fuerza' } ] },
  thunderous_smite: { tipo: 'extra', lineas: [ { q: 2, c: 6, nv: { q: 1 }, dano: 'Trueno' } ] },
  wrathful_smite:   { tipo: 'extra', lineas: [ { q: 1, c: 6, nv: { q: 1 }, dano: 'Necrótico' } ] },
  zephyr_strike:    { tipo: 'extra', lineas: [ { q: 1, c: 8, dano: 'Fuerza' } ] },

  /* ───────────────────────── NIVEL 2 ───────────────────────── */
  arcane_vigor: { tipo: 'cura', especial: 'dg', lineas: [ { mod: true } ] },
  enlarge_reduce: { modos: [
    { et: 'Agrandar: +1d4 al daño con armas', tipo: 'extra', lineas: [ { q: 1, c: 4, dano: 'del arma' } ] },
    { et: 'Reducir: −1d4 al daño con armas',  tipo: 'extra', lineas: [ { q: 1, c: 4, signo: -1, dano: 'del arma' } ] },
  ] },
  healing_spirit:   { tipo: 'cura', lineas: [ { q: 1, c: 6, nv: { q: 1 } } ] },
  melfs_acid_arrow: { tipo: 'dano', atq: true, mitadFallo: true, lineas: [
    { q: 4, c: 4, nv: { q: 1 }, dano: 'Ácido', et: 'Al impactar' },
    { q: 2, c: 4, nv: { q: 1 }, dano: 'Ácido', et: 'Al final de su siguiente turno' },
  ] },
  prayer_of_healing: { tipo: 'cura', lineas: [ { q: 2, c: 8, nv: { q: 1 } } ] },
  scorching_ray:     { tipo: 'dano', rep: 3, repNv: 1, atq: true, etRep: 'Rayo', lineas: [ { q: 2, c: 6, dano: 'Fuego' } ] },
  shining_smite:     { tipo: 'extra', lineas: [ { q: 2, c: 6, nv: { q: 1 }, dano: 'Radiante' } ] },
  spiritual_weapon:  { tipo: 'dano', atq: true, lineas: [ { q: 1, c: 8, mod: true, nv: { q: 1 }, dano: 'Fuerza' } ] },
  summon_beast:      { tipo: 'dano', rep: 'mitad', atq: true, etRep: 'Rend', lineas: [ { q: 1, c: 8, plano: 4, planoNivel: 1, dano: 'Perforante' } ] },

  /* ───────────────────────── NIVEL 3 ───────────────────────── */
  aura_of_vitality:  { tipo: 'cura', lineas: [ { q: 2, c: 6 } ] },
  bestow_curse:      { tipo: 'extra', lineas: [ { q: 1, c: 8, dano: 'Necrótico' } ] },
  blinding_smite:    { tipo: 'extra', lineas: [ { q: 3, c: 8, nv: { q: 1 }, dano: 'Radiante' } ] },
  crusaders_mantle:  { tipo: 'extra', lineas: [ { q: 1, c: 4, dano: 'Radiante' } ] },
  elemental_weapon:  { tipo: 'extra', lineas: [ { q: 1, c: 4, nv: { q: 1, cada: 2, max: 2 }, dano: 'del tipo elegido' } ] },
  flame_arrows:      { tipo: 'extra', lineas: [ { q: 1, c: 6, dano: 'Fuego', et: 'Por flecha' } ] },
  mass_healing_word: { tipo: 'cura', lineas: [ { q: 2, c: 4, mod: true, nv: { q: 1 } } ] },
  spirit_shroud:     { tipo: 'extra', lineas: [ { q: 1, c: 8, nv: { q: 1, cada: 2 }, dano: 'Radiante, Necrótico o Frío' } ] },

  /* ───────────────────────── NIVEL 4 ───────────────────────── */
  elemental_bane:     { tipo: 'extra', lineas: [ { q: 2, c: 6, dano: 'del tipo elegido', et: 'Extra (1 vez por turno)' } ] },
  guardian_of_faith:  { tipo: 'dano', sal: 'Destreza', mitad: true, lineas: [ { plano: 20, dano: 'Radiante' } ] },
  guardian_of_nature: { tipo: 'extra', lineas: [ { q: 1, c: 6, dano: 'Fuerza' } ] },
  spirit_of_death:    { tipo: 'dano', rep: 'mitad', atq: true, ventaja: true, etRep: 'Guadaña', lineas: [ { q: 1, c: 8, plano: 3, planoNivel: 1, dano: 'Necrótico' } ] },
  staggering_smite:   { tipo: 'extra', lineas: [ { q: 4, c: 6, nv: { q: 1 }, dano: 'Psíquico' } ] },

  /* ───────────────────────── NIVEL 5 ───────────────────────── */
  animate_objects: { modos: [
    { et: 'Objeto Mediano o menor', tipo: 'dano', atq: true, lineas: [ { q: 1, c: 4,  plano: 3, nv: { q: 1 }, dano: 'Fuerza' } ] },
    { et: 'Objeto Grande',          tipo: 'dano', atq: true, lineas: [ { q: 2, c: 6,  plano: 3, mod: true, nv: { q: 1 }, dano: 'Fuerza' } ] },
    { et: 'Objeto Enorme',          tipo: 'dano', atq: true, lineas: [ { q: 2, c: 12, plano: 3, mod: true, nv: { q: 1 }, dano: 'Fuerza' } ] },
  ] },
  banishing_smite: { tipo: 'extra', lineas: [ { q: 5, c: 10, dano: 'Fuerza' } ] },
  danse_macabre: { modos: [
    { et: 'Esqueleto (espada corta o arco)', tipo: 'dano', atq: true, atqFijo: 4, atqMod: true, lineas: [ { q: 1, c: 6, plano: 2, mod: true, dano: 'Perforante' } ] },
    { et: 'Zombi (golpe)',                   tipo: 'dano', atq: true, atqFijo: 3, atqMod: true, lineas: [ { q: 1, c: 6, plano: 1, mod: true, dano: 'Contundente' } ] },
  ] },
  holy_weapon: { modos: [
    { et: 'Daño extra por golpe',                  tipo: 'extra', lineas: [ { q: 2, c: 8, dano: 'Radiante' } ] },
    { et: 'Terminar el conjuro: explosión (CON)', tipo: 'dano', sal: 'Constitución', mitad: true, lineas: [ { q: 4, c: 8, dano: 'Radiante' } ] },
  ] },
  mass_cure_wounds: { tipo: 'cura', lineas: [ { q: 5, c: 8, mod: true, nv: { q: 1 } } ] },
  songals_elemental_suffusion: { tipo: 'dano', sal: 'Destreza', mitad: true, lineas: [
    { q: 2, c: 6, dano: 'del tipo elegido', et: 'Pulso elemental (al lanzar y al inicio de cada turno)' },
  ] },
  summon_dragon: { modos: [
    { et: 'Rend (mordisco/garra)',  tipo: 'dano', rep: 'mitad', atq: true, etRep: 'Rend', lineas: [ { q: 1, c: 6, plano: 4, planoNivel: 1, dano: 'Perforante' } ] },
    { et: 'Aliento (cono de 30 pies)', tipo: 'dano', sal: 'Destreza', mitad: true, lineas: [ { q: 2, c: 6, dano: 'del tipo elegido' } ] },
  ] },

  /* ───────────────────────── NIVEL 6 ───────────────────────── */
  disintegrate: { tipo: 'dano', sal: 'Destreza', mitad: false, lineas: [ { q: 10, c: 6, plano: 40, nv: { q: 3 }, dano: 'Fuerza' } ] },
  heal:         { tipo: 'cura', lineas: [ { plano: 70, nv: { plano: 10 } } ] },
  investiture_of_flame: { modos: [
    { et: 'Quemar a quien se acerca (1d10)', tipo: 'dano', lineas: [ { q: 1, c: 10, dano: 'Fuego' } ] },
    { et: 'Línea de fuego (4d8, salv. DES)',  tipo: 'dano', sal: 'Destreza', mitad: true, lineas: [ { q: 4, c: 8, dano: 'Fuego' } ] },
  ] },

  /* ───────────────────────── NIVEL 7+ ───────────────────────── */
  delayed_blast_fireball: { tipo: 'dano', sal: 'Destreza', mitad: true, espera: { c: 6 }, lineas: [ { q: 12, c: 6, nv: { q: 1 }, dano: 'Fuego' } ] },
  finger_of_death:        { tipo: 'dano', sal: 'Constitución', mitad: true, lineas: [ { q: 7, c: 8, plano: 30, dano: 'Necrótico' } ] },
  regenerate:             { tipo: 'cura', lineas: [ { q: 4, c: 8, plano: 15, et: 'Inmediato (luego +1 PG por turno)' } ] },
  symbol:                 { tipo: 'dano', sal: 'Constitución', mitad: true, lineas: [ { q: 10, c: 10, dano: 'Necrótico', et: 'Efecto Muerte' } ] },
  earthquake:             { tipo: 'dano', sal: 'Destreza', mitad: true, lineas: [ { q: 12, c: 6, dano: 'Contundente', et: 'Derrumbe de una estructura' } ] },
  power_word_kill:        { tipo: 'dano', lineas: [ { q: 12, c: 12, dano: 'Psíquico', et: 'Solo si el objetivo tiene más de 100 PG' } ] },

  /* Sin tirada posible según las reglas (solo texto): sleep, goodberry, magic_weapon,
     divine_word, reverse_gravity, tether_essence, mass_heal, power_word_heal, wish.
     Al lanzarlos se gasta el espacio y se anota el efecto en el registro. */
};
