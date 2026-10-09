// PBR-Materialien fuer Schmuck: Metalle, Suesswasserperlen, Steine.
// Alle Materialien werden geteilt und per Referenzzaehlung verwaltet:
// jedes Modell meldet ueber seine Ressourcen-Liste an, was es benutzt, und
// gibt es bei dispose() wieder frei. Erst wenn niemand mehr ein Material
// benutzt, wird es wirklich freigegeben.
import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Geteilte Ressourcen mit Referenzzaehlung
// ---------------------------------------------------------------------------

const geteilt = new Map(); // schluessel -> { wert, zaehler }

function holeGeteilt(schluessel, erzeuger) {
  let eintrag = geteilt.get(schluessel);
  if (!eintrag) {
    eintrag = { wert: erzeuger(), zaehler: 0 };
    geteilt.set(schluessel, eintrag);
  }
  eintrag.zaehler++;
  return eintrag.wert;
}

function gibGeteiltFrei(schluessel) {
  const eintrag = geteilt.get(schluessel);
  if (!eintrag) return;
  eintrag.zaehler--;
  if (eintrag.zaehler <= 0) {
    geteilt.delete(schluessel);
    entsorge(eintrag.wert);
  }
}

function entsorge(wert) {
  if (!wert) return;
  if (wert.isMaterial) {
    // Prozedurale Texturen gehoeren dem Material
    for (const k of ['normalMap', 'iridescenceThicknessMap', 'roughnessMap', 'map']) {
      if (wert[k] && wert[k].isTexture) wert[k].dispose();
    }
  }
  if (typeof wert.dispose === 'function') wert.dispose();
}

/** Aktuell gehaltene geteilte Ressourcen (fuer Tests). */
export function geteilteRessourcen() {
  return [...geteilt.entries()].map(([k, e]) => ({ schluessel: k, zaehler: e.zaehler }));
}

/**
 * Sammelt alles, was ein Modell belegt. geteilt() fuer gecachte Dinge,
 * eigen() fuer Geometrien, die nur dieses Modell besitzt.
 */
export class Ressourcen {
  constructor() {
    this.schluessel = [];
    this.eigene = new Set();
    this.entsorgt = false;
  }
  geteilt(schluessel, erzeuger) {
    this.schluessel.push(schluessel);
    return holeGeteilt(schluessel, erzeuger);
  }
  eigen(objekt) {
    if (objekt) this.eigene.add(objekt);
    return objekt;
  }
  dispose() {
    if (this.entsorgt) return;
    this.entsorgt = true;
    for (const k of this.schluessel) gibGeteiltFrei(k);
    for (const o of this.eigene) entsorge(o);
    this.schluessel.length = 0;
    this.eigene.clear();
  }
}

// Kleine Hilfe: Shader-Chunk an einer Stelle erweitern (mit Pruefung, damit
// eine geaenderte three-Version nicht stillschweigend den Effekt verliert)
function ersetze(quelle, suche, neu, name) {
  if (!quelle.includes(suche)) {
    console.warn(`[schmuck] Shader-Stelle '${suche}' fehlt (${name}); Effekt deaktiviert.`);
    return quelle;
  }
  return quelle.replace(suche, neu);
}

// ---------------------------------------------------------------------------
// Metalle
// ---------------------------------------------------------------------------

/*
 * Farben linear (Arbeitsfarbraum), farbe = Reflexionsgrad senkrecht (F0).
 * Referenz: Gold 24k F0 ~ (1.00, 0.77, 0.34), 18k-Gelbgold etwas heller.
 * Unter neutraler Studio-Umgebung wirkt der physikalische Wert blass-messingfarben:
 * echte Goldoberflaechen spiegeln sich gegenseitig (Mehrfachreflexion in Gliedern,
 * Innenseiten, Fassungen) und Produktfotos zeigen dadurch satte, warme Mitteltoene
 * und tief bernsteinfarbene Schatten. Deshalb:
 *  - F0 etwas waermer/satter als 24k-Referenz (weniger Gruen/Blau -> kein Gruenstich)
 *  - tiefe: dunkle Spiegelungen zusaetzlich mit der Metallfarbe gefaerbt (zweite Reflexion)
 *  - kante: Farbe streifender Spiegelungen (Schlick ginge nach Weiss)
 *  - agx: F0 fuer AgX-Tonemapping (AgX entsaettigt Gelb und dreht es Richtung Lachs;
 *    der Shader gleicht das aus, wenn der Renderer AgX verwendet)
 */
export const METALLE = {
  gold:      { name: 'Gold',      farbe: [1.00, 0.66, 0.24], agx: [1.00, 0.75, 0.20], kante: [1.00, 0.87, 0.60], tiefe: 0.75, rauheit: 0.11, klarlack: 0.0 },
  silber:    { name: 'Silber',    farbe: [0.95, 0.94, 0.92], kante: [1.00, 1.00, 1.00], tiefe: 0.0,  rauheit: 0.12, klarlack: 0.1 },
  rosegold:  { name: 'Roségold',  farbe: [1.00, 0.64, 0.50], agx: [1.00, 0.68, 0.50], kante: [1.00, 0.86, 0.80], tiefe: 0.6,  rauheit: 0.12, klarlack: 0.0 },
  weissgold: { name: 'Weißgold',  farbe: [0.90, 0.89, 0.86], kante: [1.00, 1.00, 0.98], tiefe: 0.1,  rauheit: 0.11, klarlack: 0.1 }
};

/** Swatch-Farbe (sRGB-Hex) fuer Oberflaechen, z. B. Varianten-Knoepfe. */
export function metallSwatch(metall) {
  const m = METALLE[metall] || METALLE.gold;
  const c = new THREE.Color().setRGB(m.farbe[0] * 0.8, m.farbe[1] * 0.8, m.farbe[2] * 0.8);
  return '#' + c.getHexString();
}

/**
 * Geteiltes Metallmaterial. variante:
 *  'poliert'  Hochglanz (Standard)
 *  'matt'     leicht satiniert (Innenseiten, Draehte)
 *  'schlange' mit Schuppen-Normalen fuer Schlangenketten
 *  'motiv'    fein satiniert fuer grosse, fast ebene Flaechen (Bluetenblaetter):
 *             streut die Umgebung etwas, damit sie nie nur eine dunkle Richtung spiegeln
 */
export function metallMaterial(res, metall = 'gold', variante = 'poliert') {
  const m = METALLE[metall] ? metall : 'gold';
  return res.geteilt(`metall:${m}:${variante}`, () => metallMaterialAus(METALLE[m], variante, m));
}

/** Ungeteiltes Metallmaterial aus Werten { farbe, kante, tiefe, rauheit, klarlack } (z. B. Labor). */
export function metallMaterialAus(p, variante = 'poliert', name = 'metall') {
  const mat = new THREE.MeshPhysicalMaterial({
    name: `metall-${name}-${variante}`,
    metalness: 1,
    roughness: p.rauheit,
    clearcoat: p.klarlack || 0,
    clearcoatRoughness: 0.04,
    envMapIntensity: 1
  });
  mat.color.setRGB(p.farbe[0], p.farbe[1], p.farbe[2]);
  mat.userData.metallName = name;
  if (variante === 'matt') {
    mat.roughness = Math.max(0.3, p.rauheit * 2.6);
    mat.clearcoat = 0;
  } else if (variante === 'motiv') {
    mat.roughness = Math.max(0.22, p.rauheit * 2);
    mat.clearcoat = 0;
  } else if (variante === 'schlange') {
    mat.normalMap = schuppenTextur();
    mat.normalScale.set(0.9, 0.9);
    mat.roughness = p.rauheit + 0.02;
  }
  const kante = p.kante || [1, 1, 1];
  const maxF = Math.max(...p.farbe);
  const uniforms = {
    metallTon: { value: new THREE.Vector3(p.farbe[0] / maxF, p.farbe[1] / maxF, p.farbe[2] / maxF) },
    metallKante: { value: new THREE.Vector3(...kante) },
    metallTiefe: { value: p.tiefe ?? 0 },
    metallAgx: { value: new THREE.Vector3(1, 1, 1) }
  };
  if (p.agx) uniforms.metallAgx.value.set(p.agx[0] / p.farbe[0], p.agx[1] / p.farbe[1], p.agx[2] / p.farbe[2]);
  mat.userData.metall = uniforms;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    // Programm ist je Tonemapping getrennt (Teil des Programmschluessels von three). Das Define
    // haengt nur vom Tonemapping ab, weil alle Metalle ein Programm teilen (ohne agx: Faktor 1).
    if (shader.toneMapping === THREE.AgXToneMapping) shader.defines = { ...shader.defines, METALL_AGX: '' };
    shader.fragmentShader = ersetze(shader.fragmentShader, '#include <common>', `#include <common>
uniform vec3 metallAgx;
uniform vec3 metallTon;
uniform vec3 metallKante;
uniform float metallTiefe;`, 'metall');
    // Wirkt auf die Spiegelung (Metall hat keinen Diffusanteil)
    shader.fragmentShader = ersetze(shader.fragmentShader, '#include <transmission_fragment>', `#include <transmission_fragment>
{
  float mNdV = saturate( dot( normal, geometryViewDir ) );
  float mL = dot( totalSpecular, vec3( 0.2126, 0.7152, 0.0722 ) );
  // dunkle Spiegelungen ein zweites Mal am Metall reflektiert -> satte, warme Tiefen
  float mTief = metallTiefe * ( 1.0 - smoothstep( 0.02, 0.9, mL ) );
  totalSpecular *= mix( vec3( 1.0 ), metallTon, mTief );
  // streifende Spiegelungen bleiben getoent statt weiss
  totalSpecular *= mix( vec3( 1.0 ), metallKante, pow( 1.0 - mNdV, 3.0 ) );
  #ifdef METALL_AGX
    totalSpecular *= metallAgx;
  #endif
}`, 'metall');
  };
  mat.customProgramCacheKey = () => 'schmuck-metall-1';
  return mat;
}

// Kleine kachelbare Normalen-Textur: Reihen gewoelbter Schuppen im Winkelmuster
// (Schlangenkette). u laeuft entlang der Kette, v um sie herum.
function schuppenTextur() {
  const B = 64, H = 32;
  const hoehe = new Float32Array(B * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < B; x++) {
      const u = x / B, v = y / H;
      const w = (u * 2 + Math.abs(v - 0.5) * 1.2) % 1;
      hoehe[y * B + x] = Math.sqrt(Math.max(0, w)) * (1 - w * 0.25);
    }
  }
  const daten = new Uint8Array(B * H * 4);
  const st = 2.2;
  const n = new THREE.Vector3();
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < B; x++) {
      const h = (xx, yy) => hoehe[((yy + H) % H) * B + ((xx + B) % B)];
      const dx = (h(x + 1, y) - h(x - 1, y)) * st;
      const dy = (h(x, y + 1) - h(x, y - 1)) * st * 0.5;
      n.set(-dx, -dy, 1).normalize();
      const i = (y * B + x) * 4;
      daten[i] = Math.round((n.x * 0.5 + 0.5) * 255);
      daten[i + 1] = Math.round((n.y * 0.5 + 0.5) * 255);
      daten[i + 2] = Math.round((n.z * 0.5 + 0.5) * 255);
      daten[i + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(daten, B, H, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.colorSpace = THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

// ---------------------------------------------------------------------------
// Suesswasserperlen
// ---------------------------------------------------------------------------

/*
 * Perlmutt besteht aus duennen, leicht durchscheinenden Aragonit-Plaettchen. Sichtbar:
 *  - Lueste: scharfe, helle Spiegelung der Umgebung auf glatter Oberflaeche (Klarlack-Schicht)
 *  - Koerperfarbe mit Tiefe: zur Kante hin dunkler und satter (randFarbe), zur Mitte hin
 *    weich leuchtend (Licht tritt ein und wieder aus: durchschein)
 *  - Orient/Ueberton: zarte rosa/gruenliche Interferenzfarben, wechseln mit Blickwinkel
 *    und Ort (fleckig, nie gleichmaessig); dazu Duennschicht-Irisieren der Spiegelung
 * grund: Koerperfarbe (linear), rand: Farbe zur Kante (Multiplikator), orientA/B: Uebertoene
 */
export const PERLFARBEN = {
  weiss:      { name: 'Weiß',       grund: [0.63, 0.60, 0.57], rand: [0.36, 0.33, 0.34], orientA: [1.00, 0.84, 0.89], orientB: [0.86, 1.00, 0.93], orient: 0.72, irid: 0.5, film: [300, 520], randBreite: 0.8 },
  creme:      { name: 'Creme',      grund: [0.62, 0.53, 0.42], rand: [0.46, 0.37, 0.34], orientA: [1.00, 0.78, 0.76], orientB: [0.90, 0.98, 0.82], orient: 0.8, irid: 0.45, film: [320, 540] },
  rose:       { name: 'Rosé',       grund: [0.64, 0.50, 0.49], rand: [0.46, 0.33, 0.40], orientA: [1.00, 0.70, 0.84], orientB: [0.86, 0.94, 0.98], orient: 0.9, irid: 0.5, film: [300, 520] },
  champagner: { name: 'Champagner', grund: [0.56, 0.43, 0.30], rand: [0.46, 0.34, 0.26], orientA: [1.00, 0.80, 0.68], orientB: [0.88, 0.94, 0.78], orient: 0.8, irid: 0.45, film: [340, 560] },
  grau:       { name: 'Grau',       grund: [0.26, 0.27, 0.30], rand: [0.62, 0.60, 0.70], orientA: [0.90, 0.80, 1.00], orientB: [0.78, 1.00, 0.88], orient: 0.8, irid: 0.45, film: [280, 500] }
};

/** Anzahl der Material-Varianten je Perlfarbe (Glanz/Orient leicht verschieden). */
export const PERL_VARIANTEN = 3;

// je Variante: Glanz (Rauheit der Klarlack-Schicht), Orient-Phase, Orient-Staerke
const PERL_STREUUNG = [
  { glanz: 0.0, phase: 0.0, orient: 1.0, film: 0 },
  { glanz: 0.012, phase: 0.37, orient: 0.85, film: 30 },
  { glanz: -0.008, phase: 0.71, orient: 1.15, film: -25 }
];

/**
 * Geteiltes Perlmaterial. variante 0..PERL_VARIANTEN-1 variiert Glanz und Orient leicht.
 * Farbvariation je Perle laeuft ueber instanceColor bzw. perlFarbvariation().
 */
export function perlMaterial(res, farbe = 'weiss', variante = 0) {
  const f = PERLFARBEN[farbe] ? farbe : 'weiss';
  const v = ((Math.round(variante) % PERL_VARIANTEN) + PERL_VARIANTEN) % PERL_VARIANTEN;
  return res.geteilt(`perle:${f}:${v}`, () => perlMaterialAus(PERLFARBEN[f], v, f));
}

/** Ungeteiltes Perlmaterial aus Werten (siehe PERLFARBEN), z. B. fuer das Labor. */
export function perlMaterialAus(p, v = 0, name = 'perle') {
  const s = PERL_STREUUNG[v % PERL_STREUUNG.length];
  const film = p.film || [300, 520];
  const ior = 1.53;
  const mat = new THREE.MeshPhysicalMaterial({
    name: `perle-${name}-${v}`,
    metalness: 0,
    roughness: p.rauheit ?? 0.3,
    clearcoat: 1,
    clearcoatRoughness: Math.max(0.0, (p.glanz ?? 0.035) + s.glanz),
    iridescence: p.irid ?? 0.5,
    iridescenceIOR: p.filmIor ?? 1.6,
    iridescenceThicknessRange: [film[0] + s.film, film[1] + s.film],
    ior,
    specularIntensity: 1,
    envMapIntensity: 1
  });
  mat.color.setRGB(p.grund[0], p.grund[1], p.grund[2]);
  // Lueste: viele Perlmutt-Schichten reflektieren zusammen deutlich mehr als eine
  // einzelne Grenzflaeche (F0 ~ 0,04). spiegel = gewuenschter Reflexionsgrad senkrecht.
  const f0 = ((ior - 1) / (ior + 1)) ** 2;
  mat.specularColor.setScalar((p.spiegel ?? 0.22) / f0);
  const uniforms = {
    perlRand: { value: new THREE.Vector3(...p.rand) },
    perlOrientA: { value: new THREE.Vector3(...p.orientA) },
    perlOrientB: { value: new THREE.Vector3(...p.orientB) },
    perlOrient: { value: (p.orient ?? 0.5) * s.orient },
    perlPhase: { value: s.phase },
    perlDurch: { value: p.durch ?? 0.2 },
    perlMuster: { value: p.muster ?? 0.55 },
    perlRandBreite: { value: p.randBreite ?? 0.95 }
  };
  mat.userData.perle = uniforms;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    // AgX staucht helle Toene stark: Perlen wuerden grau statt weiss
    if (shader.toneMapping === THREE.AgXToneMapping) shader.defines = { ...shader.defines, PERLE_AGX: '' };
    shader.vertexShader = ersetze(shader.vertexShader, '#include <common>', `#include <common>
varying vec3 vPerlOrt;`, 'perle');
    // Objektraum (mm) plus Lage der Instanz: Muster je Perle verschieden, aber fest
    shader.vertexShader = ersetze(shader.vertexShader, '#include <begin_vertex>', `#include <begin_vertex>
vPerlOrt = position;
#ifdef USE_INSTANCING
  vPerlOrt += instanceMatrix[3].xyz * 1.7;
#endif`, 'perle');
    shader.fragmentShader = ersetze(shader.fragmentShader, '#include <common>', `#include <common>
uniform vec3 perlRand;
uniform vec3 perlOrientA;
uniform vec3 perlOrientB;
uniform float perlOrient;
uniform float perlPhase;
uniform float perlDurch;
uniform float perlMuster;
uniform float perlRandBreite;
varying vec3 vPerlOrt;`, 'perle');
    // Duennschicht-Dicke fleckig variieren (sonst ueberall gleich)
    const physik = THREE.ShaderChunk.lights_physical_fragment.replace(
      'material.iridescenceThickness = iridescenceThicknessMaximum;',
      `{
        vec3 q = vPerlOrt * perlMuster * 1.3 + perlPhase * 5.0;
        float t = 0.5 + 0.25 * sin( q.x * 1.7 + sin( q.y * 2.3 + q.z ) * 1.5 ) + 0.25 * sin( q.z * 2.1 - q.y * 1.3 + perlPhase * 9.0 );
        material.iridescenceThickness = mix( iridescenceThicknessMinimum, iridescenceThicknessMaximum, t );
      }`);
    shader.fragmentShader = ersetze(shader.fragmentShader, '#include <lights_physical_fragment>', physik, 'perle');
    // Koerperfarbe: Tiefe zur Kante, Orient, Durchscheinen
    shader.fragmentShader = ersetze(shader.fragmentShader, '#include <aomap_fragment>', `#include <aomap_fragment>
{
  vec3 pN = normal;
  vec3 pV = geometryViewDir;
  float pNdV = saturate( dot( pN, pV ) );
  vec3 q = vPerlOrt * perlMuster + perlPhase * 7.0;
  float m1 = sin( q.x * 1.3 + sin( q.y * 1.7 + q.z * 0.9 ) * 1.4 );
  float m2 = sin( q.y * 1.1 - q.z * 1.9 + sin( q.x * 1.5 ) * 1.2 );
  float muster = 0.5 + 0.25 * ( m1 + m2 );
  // Orient: Uebertoene wechseln mit Blickwinkel und Ort
  float w = ( 1.0 - pNdV ) * 1.35 + muster * 0.8 + perlPhase;
  vec3 orient = mix( perlOrientA, perlOrientB, 0.5 + 0.5 * cos( 6.2831853 * w ) );
  float orientMenge = perlOrient * ( 0.35 + 0.65 * smoothstep( 0.95, 0.35, pNdV ) );
  vec3 koerper = mix( vec3( 1.0 ), orient, orientMenge );
  // Tiefe: zur Kante hin dunkler und satter
  koerper *= mix( vec3( 1.0 ), perlRand, smoothstep( perlRandBreite, 0.05, pNdV ) );
  #ifdef PERLE_AGX
    koerper *= 1.3;
  #endif
  reflectedLight.directDiffuse *= koerper;
  reflectedLight.indirectDiffuse *= koerper;
  // Weiche Begrenzung des Diffusanteils: vor hellem Grund (weisse Wand) clippt
  // die Perle sonst zu einer flachen Flaeche, und der Lueste geht verloren
  {
    float dL = dot( reflectedLight.indirectDiffuse + reflectedLight.directDiffuse, vec3( 0.2126, 0.7152, 0.0722 ) );
    if ( dL > 0.55 ) {
      float zielL = 0.55 + ( dL - 0.55 ) / ( 1.0 + ( dL - 0.55 ) * 1.3 );
      float k = zielL / dL;
      reflectedLight.indirectDiffuse *= k;
      reflectedLight.directDiffuse *= k;
    }
  }
  // Durchscheinen: Licht aus der Umgebung hinter der Perle tritt weich aus (Mitte leuchtet)
  #ifdef USE_ENVMAP
    vec3 pIrr = getIBLIrradiance( normalize( pN * 0.5 - pV ) ) * RECIPROCAL_PI;
    reflectedLight.indirectDiffuse += pIrr * diffuseColor.rgb * perlDurch * ( 0.35 + 0.65 * pNdV ) * mix( vec3( 1.0 ), orient, 0.5 );
  #endif
  // Spiegelung der Grundschicht leicht im Orient getoent
  reflectedLight.indirectSpecular *= mix( vec3( 1.0 ), orient, orientMenge * 0.6 );
}`, 'perle');
  };
  mat.customProgramCacheKey = () => 'schmuck-perle-2';
  return mat;
}

/** Leichte Farbabweichung einer einzelnen Perle (Multiplikator, linear). */
export function perlFarbvariation(rnd, ziel = new THREE.Color()) {
  const h = 1 - rnd() * 0.08;            // Helligkeit
  const w = (rnd() - 0.5) * 0.06;        // waermer/kuehler
  const r = (rnd() - 0.5) * 0.04;        // leicht rosig
  return ziel.setRGB(h * (1 + w * 0.5 + r), h * (1 - r * 0.3), h * (1 - w));
}

// ---------------------------------------------------------------------------
// Steine
// ---------------------------------------------------------------------------

export const STEINE = {
  diamant:  { name: 'Diamant',  farbe: '#ffffff', ior: 2.42, dispersion: 4.0, daempfung: null },
  zirkonia: { name: 'Zirkonia', farbe: '#ffffff', ior: 2.42, dispersion: 5.0, daempfung: null },
  saphir:   { name: 'Saphir',   farbe: '#1d3fae', ior: 1.77, dispersion: 1.2, daempfung: 1.2 },
  rubin:    { name: 'Rubin',    farbe: '#b0102c', ior: 1.77, dispersion: 1.2, daempfung: 1.2 },
  smaragd:  { name: 'Smaragd',  farbe: '#0f7a45', ior: 1.58, dispersion: 0.8, daempfung: 1.4 }
};

/**
 * Steinmaterial. Statt Transmission (zeigt nur, was hinter dem Stein liegt, und kostet
 * einen zusaetzlichen Renderdurchgang) berechnet ein kleiner Shader-Zusatz das Licht, das
 * ein facettierter Stein zurueckwirft: Brechung in den Stein, zwei Spiegelungen an
 * Pavillon-Facetten (je Facette fest), Dispersion je Farbkanal (Feuer), Abdunkelung durch
 * den Betrachter (Kontrastmuster). Quelle ist die Umgebung (PMREM). farbe ueberschreibt
 * die Standardfarbe (z. B. '#7fb2ff' fuer Aquamarin).
 */
export function steinMaterial(res, art = 'zirkonia', farbe = null) {
  const a = STEINE[art] ? art : 'zirkonia';
  const f = (farbe || STEINE[a].farbe).toLowerCase();
  return res.geteilt(`stein:${a}:${f}`, () => erzeugeStein(a, f));
}

function erzeugeStein(art, farbe) {
  const s = STEINE[art];
  const farbig = farbe !== '#ffffff';
  const mat = new THREE.MeshPhysicalMaterial({
    name: `stein-${art}`,
    metalness: 0,
    roughness: 0.04,
    ior: Math.min(2.333, s.ior), // three begrenzt ior; der Shader-Zusatz nutzt den echten Wert
    specularIntensity: 1,
    envMapIntensity: 1
  });
  mat.color = new THREE.Color(farbe);
  const uniforms = {
    steinIor: { value: s.ior },
    steinFeuer: { value: s.dispersion * 0.02 },
    steinBrillanz: { value: farbig ? 1.4 : 1.5 },
    steinKontrast: { value: farbig ? 0.6 : 0.9 }
  };
  mat.userData.stein = uniforms;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = ersetze(shader.vertexShader, '#include <common>', `#include <common>
varying vec3 vSteinA;
varying vec3 vSteinB;
varying float vSteinW;
varying vec3 vSteinPos;
vec3 steinHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}`, 'stein');
    shader.vertexShader = ersetze(shader.vertexShader, '#include <defaultnormal_vertex>', `#include <defaultnormal_vertex>
{
  // je Facette feste Pseudo-Normalen (aus der Objektnormale, also stabil bei Bewegung)
  vec3 hA = steinHash(objectNormal * 31.7 + 3.1) - 0.5;
  vec3 hB = steinHash(objectNormal * 17.3 + 9.4) - 0.5;
  #ifdef USE_INSTANCING
    hA = mat3(instanceMatrix) * hA;
    hB = mat3(instanceMatrix) * hB;
  #endif
  vSteinA = normalize(normalMatrix * hA);
  vSteinB = normalize(normalMatrix * hB);
  vSteinW = steinHash(objectNormal * 7.9 + 1.7).x;
  vSteinPos = position;
}`, 'stein');
    shader.fragmentShader = ersetze(shader.fragmentShader, '#include <common>', `#include <common>
uniform float steinIor;
uniform float steinFeuer;
uniform float steinBrillanz;
uniform float steinKontrast;
varying vec3 vSteinA;
varying vec3 vSteinB;
varying float vSteinW;
varying vec3 vSteinPos;
vec3 steinHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}`, 'stein');
    shader.fragmentShader = ersetze(shader.fragmentShader, '#include <opaque_fragment>', `
#ifdef ENVMAP_TYPE_CUBE_UV
{
  vec3 sN = normalize(normal);
  vec3 sV = geometryViewDir;
  float sNdV = clamp(dot(sN, sV), 0.0, 1.0);
  float sF0 = pow((steinIor - 1.0) / (steinIor + 1.0), 2.0);
  float sF = sF0 + (1.0 - sF0) * pow(1.0 - sNdV, 5.0);
  vec3 sAussen = textureCubeUV(envMap, envMapRotation * transformDirectionByInverseViewMatrix(reflect(-sV, sN), viewMatrix), 0.0).rgb * envMapIntensity * sF;
  // Pavillon-Muster: Sektor (16) und Ring der Eintrittsstelle waehlen die gespiegelte Facette
  float sWinkel = atan(vSteinPos.y, vSteinPos.x) / 6.2831853 + 0.5;
  float sSektor = floor(sWinkel * 16.0);
  float sRing = floor(length(vSteinPos.xy) / max(length(vSteinPos), 1e-4) * 2.6 + 0.3 * cos(sWinkel * 50.265));
  vec3 sH = steinHash(vec3(sSektor, sRing, vSteinW * 17.0) + 0.37);
  vec3 sP1 = normalize(-sN * 0.55 + normalize(mix(vSteinA, vSteinB, sH.x) + 0.001));
  vec3 sP2 = normalize(sN * 0.25 + normalize(mix(vSteinB, -vSteinA, sH.y) + 0.001));
  vec3 sInnen;
  for (int k = 0; k < 3; k++) {
    float ior = steinIor * (1.0 + (float(k) - 1.0) * steinFeuer);
    vec3 sT = refract(-sV, sN, 1.0 / ior);
    vec3 sD = normalize(reflect(reflect(sT, sP1), sP2));
    float sDunkel = 1.0 - steinKontrast * smoothstep(0.3, 0.92, dot(sD, sV));
    vec3 e = textureCubeUV(envMap, envMapRotation * transformDirectionByInverseViewMatrix(sD, viewMatrix), 0.0).rgb * envMapIntensity * sDunkel;
    e = pow(e, vec3(2.0)) * 1.8; // Kontrast: Lichter blitzen, Grautoene werden dunkel
    if (k == 0) sInnen.r = e.r; else if (k == 1) sInnen.g = e.g; else sInnen.b = e.b;
  }
  // je Facette eigene Helligkeit: einige fast schwarz (Spiegelung dunkler Umgebung/des Betrachters), andere blitzen
  float sFacette = mix(0.3, 1.25, vSteinW) * mix(0.05, 1.5, smoothstep(0.12, 0.85, sH.z));
  sInnen *= (1.0 - sF) * steinBrillanz * diffuseColor.rgb * sFacette;
  outgoingLight = sAussen + sInnen + reflectedLight.directSpecular;
}
#endif
#include <opaque_fragment>`, 'stein');
  };
  mat.customProgramCacheKey = () => 'schmuck-stein-1';
  return mat;
}

// ---------------------------------------------------------------------------
// Sonstiges
// ---------------------------------------------------------------------------

/** Seiden-/Nylonfaden fuer Perlenstraenge (kaum sichtbar). */
export function fadenMaterial(res, farbe = '#efe9df') {
  return res.geteilt(`faden:${farbe}`, () => {
    const m = new THREE.MeshStandardMaterial({ name: 'faden', roughness: 0.8, metalness: 0 });
    m.color.set(farbe);
    return m;
  });
}
