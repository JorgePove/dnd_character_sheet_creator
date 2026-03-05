/* ══════════════════════════════════════════════════════════
   hechizos-nivel-7.js — Conjuros de Nivel 7 D&D 5e — COMPLETO
   Fuentes: PHB 2014/2024 · XGE · TCE · EGW · FTD · IDRotF
   Orden alfabético en español
══════════════════════════════════════════════════════════ */

const HECHIZOS_NIVEL_7 = [
  {
    id: "crown_of_stars", n: "Corona de Estrellas [XGE]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "1 hora",
    desc: "7 estrellas de luz orbitan tu cabeza (iluminan 30 pies brillante + 30 tenue). Como Acción Adicional lanzas una: ataque de conjuro a distancia 60 pies, 4d12 radiante. Sin Concentración.",
    damage: "4d12 Radiante/estrella (7 usos)", extra: null
  },
  {
    id: "delayed_blast_fireball", n: "Bola de Fuego de Explosión Retardada [PHB]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S, M (bola de guano)", duration: "Conc. 1 min",
    desc: "Bola de luz brillante que puede retrasarse hasta 1 minuto. Al detonar (Acción o fin concentración): esfera 20 pies, salvación DES o 12d6 fuego, mitad si tiene éxito. Cada turno de espera: +1d6. Escala: +1d6/nivel.",
    damage: "12d6+ Fuego (escala +1d6/turno espera)", extra: null
  },
  {
    id: "divine_word", n: "Palabra Divina [PHB]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción adicional", range: "30 pies", components: "V", duration: "Instantáneo",
    desc: "Criaturas que escuchen (salvación CAR): efectos por PG actuales: ≤10 → muertas; ≤20 → ceguera/sordera 1h; ≤30 → ensordecida 1 min; ≤50 → aturdida 1 min. Criaturas de otro plano: desterradas automáticamente.",
    damage: "Efectos por PG / destierro automático", extra: null
  },
  {
    id: "draconic_transformation", n: "Transformación Dracónica [FTD]",
    nivel: "Nivel 7", escuela: "Transmutación",
    casting: "1 acción adicional", range: "Personal", components: "V, S, M (escama de dragón)", duration: "Conc. 1 min",
    desc: "Adquieres rasgos dracónicos: alas (vuelo 60 pies), ceguera blindaje (CA mín 14+DES), aliento cono 60 pies (6d6 del tipo elegido al crear personaje, salvación DES mitad, Acción Adicional).",
    damage: "6d6 tipo dracónico (aliento)", extra: null
  },
  {
    id: "etherealness", n: "Etericidad [PHB]",
    nivel: "Nivel 7", escuela: "Transmutación",
    casting: "1 acción", range: "Personal", components: "V, S", duration: "8 horas",
    desc: "Entras en el Plano Etéreo. Ves el plano material en 60 pies (gris tenue). Atraviesas materia sólida pero no puedes interactuar con el material. Sin Concentración. Escala: +1 criatura/nivel adicional.",
    damage: null, extra: null
  },
  {
    id: "finger_of_death", n: "Dedo de la Muerte [PHB]",
    nivel: "Nivel 7", escuela: "Nigromancia",
    casting: "1 acción", range: "60 pies", components: "V, S", duration: "Instantáneo",
    desc: "Salvación CON: fallo 7d8+30 necrótico; éxito mitad. Si muere por este conjuro: se levanta la siguiente noche como zombi permanente bajo tu control.",
    damage: "7d8+30 Necrótico", extra: null
  },
  {
    id: "fire_storm", n: "Tormenta de Fuego [PHB]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción", range: "150 pies", components: "V, S", duration: "Instantáneo",
    desc: "Hasta 10 cubos de 10 pies (adyacentes o no). Salvación DES: fallo 7d10 fuego; éxito mitad. Plantas no mágicas no hacen salvación. Puedes excluir cubos del área.",
    damage: "7d10 Fuego", extra: null
  },
  {
    id: "forcecage", n: "Jaula de Fuerza [PHB]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción", range: "100 pies", components: "V, S, M (polvo de rubí 1500 po)", duration: "1 hora",
    desc: "Jaula de barras de fuerza de 20 pies de lado (o caja sólida de 10 pies de lado). Indestructible durante la duración; ninguna magia permite cruzarla excepto Plano Shift. Sin Concentración.",
    damage: null, extra: null
  },
  {
    id: "mirage_arcane", n: "Espejismo Arcano [PHB]",
    nivel: "Nivel 7", escuela: "Ilusión",
    casting: "10 minutos", range: "Vista", components: "V, S", duration: "10 días",
    desc: "Transforma terreno en milla cuadrada en cualquier otro tipo natural: desierto a bosque, llano a montaña nevada. Multisensorial y parcialmente real (terreno difícil ilusorio es real). Sin Concentración.",
    damage: null, extra: null
  },
  {
    id: "mordenkainen_magnificent_mansion", n: "Magnífica Mansión de Mordenkainen [PHB]",
    nivel: "Nivel 7", escuela: "Conjuración",
    casting: "1 minuto", range: "300 pies", components: "V, S, M (marfil/gema/madera 15 po)", duration: "24 horas",
    desc: "Portal a mansión extradimensional con hasta 100 habitaciones de 10 pies. Capacidad para 100 criaturas. Sirvientes espectrales. Temperatura cómoda. Sin Concentración.",
    damage: null, extra: null
  },
  {
    id: "mordenkainen_sword", n: "Espada de Mordenkainen [PHB]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción", range: "60 pies", components: "V, S, M (plomo+platino+plata 250 po)", duration: "Conc. 1 min",
    desc: "Espada de fuerza flotante de 5 pies. Acción Adicional para atacar: ataque de conjuro cuerpo a cuerpo, 3d10 de fuerza. No requiere tu bonificación de ataque. Puedes moverla 20 pies.",
    damage: "3d10 Fuerza/ataque", extra: null
  },
  {
    id: "plane_shift", n: "Cambio de Plano [PHB]",
    nivel: "Nivel 7", escuela: "Conjuración",
    casting: "1 acción", range: "Toque", components: "V, S, M (varilla sintonizada 250 po)", duration: "Instantáneo",
    desc: "Tú y hasta 8 aliados voluntarios viajáis a otro plano. O: ataque de conjuro cuerpo a cuerpo contra criatura hostil (salvación CAR o desterrada a plano aleatorio).",
    damage: null, extra: null
  },
  {
    id: "power_word_pain", n: "Palabra de Poder: Dolor [XGE]",
    nivel: "Nivel 7", escuela: "Encantamiento",
    casting: "1 acción", range: "60 pies", components: "V", duration: "Instantáneo",
    desc: "Criatura con 100 PG o menos: dolor intenso. Velocidad 0, no puede concentrarse, solo puede hacer Acción o Acción Adicional (no ambas). Salvación CON al final de cada turno para terminar.",
    damage: null, extra: null
  },
  {
    id: "prismatic_spray", n: "Rociado Prismático [PHB]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción", range: "Personal (cono 60p)", components: "V, S", duration: "Instantáneo",
    desc: "Cono de 60 pies. Cada criatura: 1d8 aleatorio. Rojo: 10d6 fuego (DES). Naranja: 10d6 ácido (DES). Amarillo: 10d6 rayo (DES). Verde: 10d6 veneno (CON). Azul: 10d6 frío (CON). Índigo: Restringido → Petrificado. Violeta: Cegado → desterrado al plano. 8: dos rayos aleatorios.",
    damage: "10d6 del tipo aleatorio", extra: null
  },
  {
    id: "project_image", n: "Proyectar Imagen [PHB]",
    nivel: "Nivel 7", escuela: "Ilusión",
    casting: "1 acción", range: "500 millas", components: "V, S, M (efigie de ti 5 po)", duration: "Conc. 1 día",
    desc: "Duplicado ilusorio tuyo en cualquier lugar del mismo plano a 500 millas. Ves y oyes a través de él. Puedes lanzar conjuros desde su posición como si estuvieras allí.",
    damage: null, extra: null
  },
  {
    id: "regenerate", n: "Regenerar [PHB]",
    nivel: "Nivel 7", escuela: "Transmutación",
    casting: "1 minuto", range: "Toque", components: "V, S, M (oración+muérdago)", duration: "1 hora",
    desc: "Recupera 4d8+15 PG de inmediato, luego regenera 1 PG al inicio de cada turno durante la hora. Miembros amputados vuelven a crecer en 2 minutos si los fragmentos están presentes (o 2d4 semanas si no).",
    damage: "Cura 4d8+15 PG + 1/turno", extra: null
  },
  {
    id: "resurrection", n: "Resurrección [PHB]",
    nivel: "Nivel 7", escuela: "Nigromancia",
    casting: "1 hora", range: "Toque", components: "V, S, M (diamante 1000 po)", duration: "Instantáneo",
    desc: "Criatura muerta hace no más de 100 años (no por vejez). Regresa con todos sus PG. Restaura partes del cuerpo amputadas. Penalización: -4 a ataques, salvaciones y tiradas durante 4 días.",
    damage: null, extra: null
  },
  {
    id: "reverse_gravity", n: "Invertir Gravedad [PHB]",
    nivel: "Nivel 7", escuela: "Transmutación",
    casting: "1 acción", range: "100 pies", components: "V, S, M (lodestone+polvo de hierro)", duration: "Conc. 1 min",
    desc: "Cilindro de 50 pies de radio, 100 pies de alto: todo no asegurado al suelo cae hacia arriba (hasta el techo del cilindro). Al expirar o finalizar concentración: daño de caída normal al descender.",
    damage: "Daño de caída al terminar", extra: null
  },
  {
    id: "sequester", n: "Secuestrar [PHB]",
    nivel: "Nivel 7", escuela: "Transmutación",
    casting: "1 acción", range: "Toque", components: "V, S, M (crisolita 5000 po)", duration: "Hasta disipar",
    desc: "Objeto u criatura voluntaria: invisible, protegida de adivinación, en suspensión animada (no envejece, no necesita comer/respirar). Se despierta cuando se cumpla condición que especifiques.",
    damage: null, extra: null
  },
  {
    id: "simulacrum", n: "Simulacro [PHB]",
    nivel: "Nivel 7", escuela: "Ilusión",
    casting: "12 horas", range: "Toque", components: "V, S, M (nieve/hielo/cabello/rubí 1500 po)", duration: "Hasta disipar",
    desc: "Copia ilusoria de una criatura con la mitad de sus PG máximos. Comparte conocimientos y conjuros pero no puede recuperar espacios ni PG salvo con conjuro. Solo puede haber un simulacro tuyo a la vez. Sin Concentración.",
    damage: null, extra: null
  },
  {
    id: "symbol", n: "Símbolo [PHB]",
    nivel: "Nivel 7", escuela: "Abjuración",
    casting: "1 minuto", range: "Toque", components: "V, S, M (mercurio/fósforo/diamante 1000 po)", duration: "Hasta disipar o activar",
    desc: "Trampa mágica en superficie u objeto. Al activarse por condición elegida afecta a criaturas en 60 pies. Efectos disponibles: Muerte (10d10 necrótico, CON mitad), Discord (CAR o se atacan entre sí 1 min), Miedo (SAB o huyen 1 min), Agotamiento (CON o nivel 1 agot.), Locura (INT o acción aleatoria), Dolor (CON o incapacitado 1 min), Sueño (hasta 5d10×10 PG dormidos), Aturdimiento (SAB o aturdido 1 min).",
    damage: "Varía por símbolo elegido", extra: null
  },
  {
    id: "teleport", n: "Teletransporte [PHB]",
    nivel: "Nivel 7", escuela: "Conjuración",
    casting: "1 acción", range: "10 pies", components: "V", duration: "Instantáneo",
    desc: "Tú y hasta 8 criaturas voluntarias a 10 pies, o hasta 1000 lb de objetos, teleportados a destino en el mismo plano. Precisión depende de familiaridad (permanente, asociado, visto, descrito, falso). Fallo puede llevar a destino erróneo o accidente.",
    damage: null, extra: null
  },
  {
    id: "temple_of_the_gods", n: "Templo de los Dioses [XGE]",
    nivel: "Nivel 7", escuela: "Conjuración",
    casting: "1 hora", range: "120 pies", components: "V, S, M (símbolo sagrado 5 po)", duration: "24 horas",
    desc: "Templo de piedra de 120×80 pies. Dentro: santificado (como Hallow personalizable), resistencia a tipo de daño para aliados, no-muertos con desventaja en ataques. Completamente amueblado y funcional. Sin Concentración.",
    damage: null, extra: null
  },
  {
    id: "whirlwind", n: "Torbellino [XGE]",
    nivel: "Nivel 7", escuela: "Evocación",
    casting: "1 acción", range: "300 pies", components: "V, M (pizca de polvo)", duration: "Conc. 1 min",
    desc: "Torbellino de 10 pies de radio, 30 pies de alto. Criaturas que entren o inicien turno: salvación DES o 10d6 contundente y atrapadas (suspendidas dentro). Acción para moverlo 30 pies.",
    damage: "10d6 Contundente", extra: null
  },
];
