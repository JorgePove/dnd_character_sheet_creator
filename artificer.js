/* ═══════════════════════════════════════════════════════
   artificer.js — Artificer: rasgos y subclases (todas las fuentes)
   ERftLW · TCE
═══════════════════════════════════════════════════════ */

const CLASE_ARTIFICER = {
  rasgos: [
    { n:"Competencias Mágicas", nv:1, d:"Competencia en herramientas de ladrón y herramientas de artesano; usas herramientas como foco arcano." },
    { n:"Conjuración", nv:1, d:"Lanzador medio (INT). Lista de Artificer. Prepara conjuros = INT + mitad nivel." },
    { n:"Infundir Objeto", nv:2, d:"Infundes objetos con magia (2 infusiones activas → escala hasta 6). Aprende infusiones de una lista amplia." },
    { n:"El Hombre Correcto para el Trabajo", nv:2, d:"Cuando haces una tirada de habilidad con herramientas: si no tienes competencia, puedes añadir la mitad del bono." },
    { n:"Especialidad de Artificer", nv:3, d:"Elige tu subclase." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.8, 12, 16, 19." },
    { n:"Optimización de Herramientas", nv:6, d:"Doble competencia con herramientas artesanales (o las ganas si no las tenías)." },
    { n:"Flash of Genius", nv:7, d:"Reacción cuando tú o un aliado a 30 pies falla una tirada: añades tu mod INT al resultado (SAB/descanso largo)." },
    { n:"Almacén Mágico", nv:9, d:"Creas un contenedor que almacena conjuros de Nv.1-2 como pergaminos para su posterior uso." },
    { n:"Pericia de Artesano", nv:10, d:"Cuando creas un objeto no mágico, lo terminas en 1/5 del tiempo normal." },
    { n:"Spell-Storing Item", nv:11, d:"Al terminar descanso largo, almacenas un conjuro de Nv.1-2 en un objeto; cualquier portador puede lanzarlo (2×INT usos)." },
    { n:"Alma Mágica", nv:20, d:"Ignoras las restricciones de clase/raza en el uso de objetos mágicos; puedes sintonizarte con 6 objetos." },
  ],
  subclases: {

    /* ── ERftLW / TCE ── */
    "Alchemist [ERftLW/TCE]": [
      { n:"Herramientas del Alquimista", nv:3, d:"Competencia en herramientas de alquimista; las usas como foco para conjuros de subclase." },
      { n:"Conjuros del Alquimista", nv:3, d:"Conjuros siempre preparados según nivel: Curar Heridas, Rayo de Enfermedad, Nube de Alfileres, Nube Apestosa, Disipar Magia, Protección contra Venenos..." },
      { n:"Elixir Experimental", nv:3, d:"Al terminar descanso largo, creas 1 elixir (→2 en Nv.6, →3 en Nv.15). Efecto aleatorio: curación, velocidad, resiliencia, audacia, vuelo o transformación." },
      { n:"Conocimiento Alquímico", nv:5, d:"Añades INT a tiradas de daño de conjuros de veneno o ácido que lances." },
      { n:"Alquimia Suprema", nv:9, d:"Puedes lanzar los conjuros de subclase gastando elixires en lugar de espacios de conjuro." },
      { n:"Maestro Alquimista", nv:15, d:"Cuando lanzas conjuros de curación o veneno, los lanzas como si usaras un espacio 2 niveles más alto sin coste adicional." },
    ],
    "Artillerist [ERftLW/TCE]": [
      { n:"Herramientas del Artillero", nv:3, d:"Competencia en herramientas de tallador; las usas como foco arcano." },
      { n:"Conjuros del Artillero", nv:3, d:"Conjuros siempre preparados: Escudo, Rayo Ardiente, Bola de Fuego, Muro de Fuego, Cono de Frío, Muro de Hielo..." },
      { n:"Cañón Arcano", nv:3, d:"Creas un cañón Diminuto o Pequeño (1/descanso largo; →2 en Nv.9). Elige tipo: Flamethrower (15 pies cono, DEX), Force Ballista (1d8 fuerza, empuja) o Protector (PG temp. en 10 pies)." },
      { n:"Arcane Firearm", nv:5, d:"Tu bastón/varita/arco infundido añade 1d8 al daño de tus conjuros de Artificer." },
      { n:"Explosión Mejorada", nv:9, d:"Tu Cañón Arcano puede disparar 2 veces cuando le ordenas atacar." },
      { n:"Maestro Artillero", nv:15, d:"Puedes ignorar la resistencia a daño de fuego, fuerza o rayo con tus conjuros." },
    ],
    "Battle Smith [ERftLW/TCE]": [
      { n:"Herramientas del Herrero", nv:3, d:"Competencia en herramientas de herrero; las usas como foco arcano." },
      { n:"Conjuros del Battle Smith", nv:3, d:"Conjuros siempre preparados: Heroísmo, Escudo, Calmar Emociones, Guardia de la Fe, Aura de Vitalidad, Conjurar Elemental..." },
      { n:"Defensor de Acero", nv:3, d:"Creas un Steel Defender (1/descanso largo). Actúa en su turno, puede repararse con Dados de Golpe, escala con nivel." },
      { n:"Armas Inteligentes", nv:3, d:"Competencia en armas marciales; usas INT en lugar de FUE/DES en ataques con armas mágicas." },
      { n:"Guardia Extra", nv:5, d:"Ataque extra cuando el Steel Defender usa su acción de ataque." },
      { n:"Escudo Mejorado", nv:9, d:"Si el Steel Defender está activo, ganas +2 CA." },
      { n:"Maestro Herrero", nv:15, d:"Cuando el Steel Defender cae a 0 PG, puedes usar tu Reacción para que en su lugar quede en 1 PG." },
    ],
    "Armorer [TCE]": [
      { n:"Herramientas de Armero", nv:3, d:"Competencia en herramientas de armero; las usas como foco arcano." },
      { n:"Conjuros del Armero", nv:3, d:"Conjuros siempre preparados: Salto Mágico, Escudo Mágico, Fuerza Fantasmal, Agrandar/Reducir, Disipar Magia, Hipnotic Pattern..." },
      { n:"Armadura Arcana", nv:3, d:"Infundes una armadura pesada o media como armadura arcana: foco arcano integrado, no la puedes soltar, siempre cuentas como tener proficiencia." },
      { n:"Modelo de Armadura", nv:3, d:"Elige modelo: Guardián (gran arma integrada, empujar) o Infiltrador (arma a distancia integrada, Pasar Sin Rastro, DES CA)." },
      { n:"Armadura Mejorada", nv:9, d:"Tu armadura arcana gana vuelo 60 pies y +1 a ataques y daño de sus armas integradas." },
      { n:"Armadura Mejorada Superior", nv:15, d:"Tu armadura gana +2 CA adicional y puedes usarla para lanzar conjuros de contacto a 30 pies." },
    ],
  }
};
