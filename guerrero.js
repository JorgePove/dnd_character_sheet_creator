/* ═══════════════════════════════════════════════════════
   guerrero.js — Guerrero: rasgos y subclases (todas las fuentes)
   PHB 2014 · PHB 2024 · XGE · TCE · EGW · TDCSR
═══════════════════════════════════════════════════════ */

const CLASE_GUERRERO = {
  rasgos: [
    { n:"Estilo de Combate", nv:1, d:"Elige una especialización de combate (Arquería, Duelo, Defensa, Gran Arma, Interposición, etc.)." },
    { n:"Segundo Aliento", nv:1, d:"Acción Adicional: recupera 1d10 + nivel de PG (1/descanso corto)." },
    { n:"Oleada de Acción", nv:2, d:"1/descanso corto: realiza una acción adicional completa en tu turno." },
    { n:"Arquetipo Marcial", nv:3, d:"Elige tu subclase." },
    { n:"Mejora de Característica", nv:4, d:"+2 o +1/+1. También en Nv.6, 8, 12, 14, 16, 19 (más Mejoras que otras clases)." },
    { n:"Ataque Extra", nv:5, d:"2 ataques (→3 en Nv.11, →4 en Nv.20) con la acción de Atacar." },
    { n:"Golpe Indomable", nv:9, d:"Repite una tirada de salvación fallida 1 vez (→2 en Nv.13, →3 en Nv.17)." },
  ],
  subclases: {

    /* ── PHB 2014 ── */
    "Campeón [PHB 2014]": [
      { n:"Crítico Mejorado", nv:3, d:"Crítico con 19-20 (→18-20 en Nv.15)." },
      { n:"Atleta Notable", nv:7, d:"Doble competencia en Atletismo; salto de longitud/altura sin carrerilla cuenta como si la tuvieras." },
      { n:"Estilo de Combate Adicional", nv:10, d:"Aprende un segundo Estilo de Combate." },
      { n:"Crítico Superior", nv:15, d:"Crítico con 18-20." },
      { n:"Superviviente", nv:18, d:"Al inicio de tu turno con ≤ mitad de PG máximos, recuperas 5 + CON de PG." },
    ],
    "Maestro de Batalla [PHB 2014]": [
      { n:"Maniobras de Combate", nv:3, d:"Aprende 3 maniobras (de 16 disponibles); 4 Dados de Superioridad d8 (→d10 en Nv.10, →d12 en Nv.18)." },
      { n:"Estudioso de la Guerra", nv:3, d:"Competencia en un tipo de herramienta artesanal o instrumento musical." },
      { n:"Maniobras Adicionales", nv:7, d:"Aprende 2 maniobras más." },
      { n:"Saber del Maestro", nv:15, d:"Recuperas 1d3 Dados de Superioridad al tirar Iniciativa." },
      { n:"Implacable", nv:18, d:"Cuando gastas tu último Dado de Superioridad, recuperas 1 automáticamente." },
    ],
    "Caballero de Arcano [PHB 2014]": [
      { n:"Conjuración", nv:3, d:"Lanzador limitado de conjuros de Mago (INT). Preferencia por Evocación y Abjuración." },
      { n:"Vínculo con Arma", nv:3, d:"Vincula hasta 2 armas; puedes invocarlas con Acción Adicional y no las puedes soltar sin querer." },
      { n:"Magia de Guerra", nv:7, d:"Al lanzar un truco, puedes hacer 1 ataque como Acción Adicional." },
      { n:"Golpe Arcano", nv:10, d:"Si el objetivo falla CON tras ser golpeado, tu siguiente conjuro ignora su resistencia a magia." },
      { n:"Carga de Guerra Arcana", nv:15, d:"Al usar Magia de Guerra, puedes teletransportarte 30 pies antes de atacar." },
      { n:"Magia de Guerra Mejorada", nv:18, d:"Al atacar, puedes lanzar un conjuro de Nv.1-2 como Acción Adicional." },
    ],

    /* ── PHB 2024 ── */
    "Campeón [PHB 2024]": [
      { n:"Crítico Mejorado", nv:3, d:"Crítico con 19-20 (→18-20 en Nv.15)." },
      { n:"Hazaña Heroica", nv:7, d:"Ganas acceso a Dotes especiales de Campeón; puedes gastar una cada descanso." },
      { n:"Estilo Adicional", nv:10, d:"Aprende un segundo Estilo de Combate." },
      { n:"Crítico Legendario", nv:15, d:"Crítico con 18-20." },
      { n:"Superviviente", nv:18, d:"Al inicio de tu turno con ≤ mitad PG, recuperas 5 + CON de PG." },
    ],
    "Maestro de Batalla [PHB 2024]": [
      { n:"Maniobras de Combate", nv:3, d:"Aprende 3 maniobras + 4 Dados de Superioridad d8. Añade más maniobras en Nv.7, 10, 15." },
      { n:"Estudioso de la Guerra", nv:3, d:"Competencia en una herramienta artesanal o instrumento." },
      { n:"Conocimiento Marcial", nv:7, d:"Puedes usar maniobras en ataques de oportunidad." },
      { n:"Saber del Maestro", nv:15, d:"Recuperas 1d3 Dados de Superioridad al tirar Iniciativa." },
      { n:"Maestro sin igual", nv:18, d:"Cuando gastas el último Dado de Superioridad, recuperas inmediatamente 1." },
    ],
    "Caballero de Arcano [PHB 2024]": [
      { n:"Conjuración", nv:3, d:"Lanzador limitado de conjuros de Mago (INT). Preferencia Evocación/Abjuración." },
      { n:"Vínculo con Arma", nv:3, d:"Vincula 2 armas; puedes invocarlas como Acción Adicional; no se sueltan involuntariamente." },
      { n:"Magia de Guerra", nv:7, d:"Al lanzar un truco, realiza 1 ataque de arma vinculada como Acción Adicional." },
      { n:"Golpe Arcano", nv:10, d:"Tras golpear, si falla CON, el siguiente conjuro ignora resistencia a magia." },
      { n:"Carga de Guerra Arcana", nv:15, d:"Al usar Magia de Guerra, puedes teletransportarte hasta 30 pies." },
      { n:"Magia de Guerra Mejorada", nv:18, d:"Puedes lanzar un conjuro de Nv.1-4 como Acción Adicional después de atacar." },
    ],

    /* ── XGE ── */
    "Samurái [XGE]": [
      { n:"Determinación Luchadora", nv:3, d:"1/descanso largo: como Acción Adicional, obtienes ventaja en todos los ataques hasta el final de tu turno." },
      { n:"Perspicacia Elegante", nv:7, d:"Competencia en Historia o Perspicacia; competencia en 1 idioma adicional." },
      { n:"Guardia Implacable", nv:10, d:"Cuando usas Oleada de Acción, ganas PG temporales = CON + nivel de Guerrero." },
      { n:"Estoicismo Rápido", nv:15, d:"Cuando fallas una tirada de salvación de CON para concentración, puedes re-tirarla (1 vez por conjuro)." },
      { n:"Resistencia de Acero", nv:18, d:"Al tirar Iniciativa sin PG temporales, ganas 5 + CON de PG temporales." },
    ],
    "Scout [XGE]": [
      { n:"Combatiente Ágil", nv:3, d:"Competencia en Naturaleza y Supervivencia; no puedes ser sorprendido si estás consciente." },
      { n:"Pulgada de Tierra", nv:3, d:"Reacción cuando un enemigo te hace ataque de oportunidad: muévete 5 pies sin provocar nuevos ataques (antes del impacto)." },
      { n:"Ojo de Búho", nv:7, d:"No tienes penalización por largo alcance; ignoras media cobertura en ataques." },
      { n:"Asalto Superior", nv:10, d:"En tu primer turno de combate, tienes ventaja en todos tus ataques." },
      { n:"Danza de Combate", nv:15, d:"Cuando te mueves al menos 10 pies y atacas, ganas +1 CA hasta el inicio de tu siguiente turno." },
      { n:"Guerrero Imparable", nv:18, d:"No puedes ser ralentizado involuntariamente ni reducido a velocidad 0." },
    ],

    /* ── TCE ── */
    "Caballero Rúnico [TCE]": [
      { n:"Falsificación de Runas", nv:3, d:"Aprende 2 runas de gigante. Cada runa tiene efecto pasivo y efecto activo (1 uso/descanso corto)." },
      { n:"Fortuna del Gigante", nv:3, d:"Reacción al ver una tirada: añades 1d6 a ella (SAB/descanso largo)." },
      { n:"Golpe Rúnico", nv:7, d:"Al golpear, puedes activar una runa que has grabado en el arma como Acción Adicional." },
      { n:"Gran Estatura", nv:10, d:"Creces de Mediano a Grande (si hay espacio); ganas ventaja en FUE; armas 1d4 extra de daño." },
      { n:"Maestro de Runas", nv:15, d:"Aprende 1 runa adicional. Cada runa puede usarse 2 veces/descanso corto." },
      { n:"Forma Rúnica", nv:18, d:"Como Acción Adicional, creces a Enorme por 10 minutos (1/descanso largo); ventaja FUE, +2d6 daño." },
    ],
    "Psi Warrior [TCE]": [
      { n:"Energía Psiónica", nv:3, d:"Pool de dados d6 psíonicos (= doble bonificador de competencia). Se recuperan en descanso corto o largo." },
      { n:"Golpe Psiónico", nv:3, d:"Gasta 1 dado: añades sus PG de daño de fuerza al golpear y el objetivo queda empujado o ralentizado." },
      { n:"Escudo Psiónico", nv:3, d:"Reacción al recibir daño: gasta 1 dado y reduces el daño en esa cantidad." },
      { n:"Aceleración Psiónica", nv:7, d:"Gasta 1 dado como Acción Adicional: te mueves el resultado × 10 pies sin oportunidad." },
      { n:"Telequinesia", nv:10, d:"Gasta 1 dado como Acción: mueves un objeto de hasta 100 libras el resultado × 5 pies." },
      { n:"Maestro Psiónico", nv:15, d:"Tus dados psíonicos se convierten en d8; recuperas 1d4 al hacer un crítico." },
      { n:"Creación Psiónica", nv:18, d:"Puedes crear objetos sencillos de hasta 10 libras con energía psiónica (duran 1 hora)." },
    ],

    /* ── EGW ── */
    "Echo Knight [EGW]": [
      { n:"Manifestar Eco", nv:3, d:"Creas un eco espectral en espacio vacío a 15 pies. Puedes atacar desde su posición y teletransportarte a él (Acción Adicional, 1/descanso corto)." },
      { n:"Eco Sin Fin", nv:7, d:"Puedes mantener hasta 2 ecos simultáneamente; cada uno puede atacar." },
      { n:"Oleada del Eco", nv:10, d:"Cuando usas Oleada de Acción, el eco también puede realizar 1 ataque." },
      { n:"Legión de Ecos", nv:15, d:"Cuando te mueves, el eco puede moverse también; puedes atacar desde la posición de cualquier eco activo." },
      { n:"Eco Eterno", nv:18, d:"Cuando un eco es destruido, recuperas PG = nivel de Guerrero." },
    ],

    /* ── TDCSR ── */
    "Caballero del Abismo [TDCSR]": [
      { n:"Magia del Abismo", nv:3, d:"Lanzas conjuros de oscuridad (INT): Oscuridad, Paso Brumoso, Desvanecimiento, Sombra de Moil, Imagen Proyectada..." },
      { n:"Vínculo con Arma Sombrío", nv:3, d:"Tu arma vinculada deja una estela de sombra; al golpear reduces la velocidad del objetivo 10 pies hasta tu siguiente turno." },
      { n:"Magia de Guerra Oscura", nv:7, d:"Al lanzar un truco de oscuridad/necrótico, puedes atacar como Acción Adicional." },
      { n:"Portada Umbral", nv:10, d:"Mientras estés en penumbra u oscuridad, ganas +2 CA." },
      { n:"Forma del Abismo", nv:15, d:"1/descanso largo: entras en Forma del Abismo por 1 minuto: resistencia a necrótico/psíquico, ataques infligen daño necrótico adicional." },
      { n:"Señor de las Sombras", nv:18, d:"Puedes ver perfectamente en oscuridad mágica; los enemigos en oscuridad tienen desventaja en ataques contra ti." },
    ],
  }
};
