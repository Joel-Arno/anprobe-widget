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

/** Anzahl aktuell gehaltener geteilter Ressourcen (fuer Tests). */
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

// ---------------------------------------------------------------------------
// Metalle
// ---------------------------------------------------------------------------

// Farben linear (Arbeitsfarbraum). Gold = 18k PVD-vergoldeter Edelstahl, warm.
export const METALLE = {
  gold:      { name: 'Gold',      farbe: [1.00, 0.72, 0.32], rauheit: 0.12, klarlack: 0.08 },
  silber:    { name: 'Silber',    farbe: [0.96, 0.95, 0.93], rauheit: 0.13, klarlack: 0.12 },
  rosegold:  { name: 'Roségold',  farbe: [1.00, 0.70, 0.60], rauheit: 0.15, klarlack: 0.2 },
  weissgold: { name: 'Weißgold',  farbe: [0.91, 0.90, 0.87], rauheit: 0.12, klarlack: 0.15 }
};

/** Swatch-Farbe (sRGB-Hex) fuer Oberflaechen, z. B. Varianten-Knoepfe. */
export function metallSwatch(metall) {
  const m = METALLE[metall] || METALLE.gold;
  const c = new THREE.Color().setRGB(m.farbe[0] * 0.86, m.farbe[1] * 0.86, m.farbe[2] * 0.86);
  return '#' + c.getHexString();
}

/**
 * Metallmaterial. variante:
 *  'poliert'  Hochglanz (Standard)
 *  'matt'     leicht satiniert (Innenseiten, Draehte)
 *  'schlange' mit Schuppen-Normalen fuer Schlangenketten
 */
export function metallMaterial(res, metall = 'gold', variante = 'poliert') {
  const m = METALLE[metall] ? metall : 'gold';
  return res.geteilt(`metall:${m}:${variante}`, () => erzeugeMetall(m, variante));
}

function erzeugeMetall(metall, variante) {
  const p = METALLE[metall];
  const mat = new THREE.MeshPhysicalMaterial({
    name: `metall-${metall}-${variante}`,
    metalness: 1,
    roughness: p.rauheit,
    clearcoat: p.klarlack,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1
  });
  mat.color.setRGB(p.farbe[0], p.farbe[1], p.farbe[2]);
  if (variante === 'matt') {
    mat.roughness = 0.32;
    mat.clearcoat = 0;
  } else if (variante === 'schlange') {
    mat.normalMap = schuppenTextur();
    mat.normalScale.set(0.9, 0.9);
    mat.roughness = p.rauheit + 0.02;
  }
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
      // Winkelmuster: Reihen entlang u, v-Abhaengigkeit als Spitze
      const w = (u * 2 + Math.abs(v - 0.5) * 1.2) % 1;
      // gewoelbte Schuppe mit scharfer Kante am Uebergang
      hoehe[y * B + x] = Math.sqrt(Math.max(0, w)) * (1 - w * 0.25);
    }
  }
  const daten = new Uint8Array(B * H * 4);
  const st = 2.2;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < B; x++) {
      const h = (xx, yy) => hoehe[((yy + H) % H) * B + ((xx + B) % B)];
      const dx = (h(x + 1, y) - h(x - 1, y)) * st;
      const dy = (h(x, y + 1) - h(x, y - 1)) * st * 0.5;
      const n = new THREE.Vector3(-dx, -dy, 1).normalize();
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

// grund: Koerperfarbe (linear), ueberton: Orient/Sheen-Farbe, irid: Staerke des Orients
export const PERLFARBEN = {
  weiss:      { name: 'Weiß',       grund: [0.84, 0.82, 0.78], ueberton: [1.00, 0.84, 0.88], irid: 0.55, film: [260, 430] },
  creme:      { name: 'Creme',      grund: [0.84, 0.76, 0.62], ueberton: [1.00, 0.88, 0.76], irid: 0.45, film: [300, 460] },
  rose:       { name: 'Rosé',       grund: [0.86, 0.70, 0.66], ueberton: [1.00, 0.76, 0.84], irid: 0.55, film: [280, 440] },
  champagner: { name: 'Champagner', grund: [0.78, 0.64, 0.46], ueberton: [1.00, 0.84, 0.66], irid: 0.45, film: [320, 480] },
  grau:       { name: 'Grau',       grund: [0.36, 0.37, 0.40], ueberton: [0.70, 0.80, 0.95], irid: 0.75, film: [220, 400] }
};

/** Anzahl der Material-Varianten je Perlfarbe (Glanz/Orient leicht verschieden). */
export const PERL_VARIANTEN = 3;

/**
 * Perlmaterial. variante 0..PERL_VARIANTEN-1 variiert Glanz und Orient leicht.
 * Farbvariation je Perle laeuft ueber instanceColor bzw. perlFarbvariation().
 */
export function perlMaterial(res, farbe = 'weiss', variante = 0) {
  const f = PERLFARBEN[farbe] ? farbe : 'weiss';
  const v = ((variante % PERL_VARIANTEN) + PERL_VARIANTEN) % PERL_VARIANTEN;
  return res.geteilt(`perle:${f}:${v}`, () => erzeugePerle(f, v));
}

function erzeugePerle(farbe, v) {
  const p = PERLFARBEN[farbe];
  const glanz = [0, 0.03, -0.02][v];
  const film = [0, 40, -30][v];
  const mat = new THREE.MeshPhysicalMaterial({
    name: `perle-${farbe}-${v}`,
    metalness: 0,
    roughness: 0.34 + glanz * 2,
    clearcoat: 1,
    clearcoatRoughness: 0.07 + glanz,
    sheen: 0.55,
    sheenRoughness: 0.42,
    iridescence: p.irid + [0, -0.08, 0.06][v],
    iridescenceIOR: 1.62,
    iridescenceThicknessRange: [p.film[0] + film, p.film[1] + film],
    ior: 1.6,
    specularIntensity: 0.55,
    envMapIntensity: 1.05
  });
  mat.color.setRGB(p.grund[0], p.grund[1], p.grund[2]);
  mat.sheenColor.setRGB(p.ueberton[0], p.ueberton[1], p.ueberton[2]);
  return mat;
}

/** Leichte Farbabweichung einer einzelnen Perle (Multiplikator, linear). */
export function perlFarbvariation(rnd, ziel = new THREE.Color()) {
  const h = 1 - rnd() * 0.07;            // Helligkeit
  const w = (rnd() - 0.5) * 0.05;        // waermer/kuehler
  const r = (rnd() - 0.5) * 0.03;        // leicht rosig
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
    steinFeuer: { value: s.dispersion * 0.008 },
    steinBrillanz: { value: farbig ? 1.3 : 1.6 },
    steinKontrast: { value: farbig ? 0.5 : 0.75 }
  };
  mat.userData.stein = uniforms;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
varying vec3 vSteinA;
varying vec3 vSteinB;
varying float vSteinW;
varying vec3 vSteinPos;
vec3 steinHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}`)
      .replace('#include <defaultnormal_vertex>', `#include <defaultnormal_vertex>
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
}`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
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
}`)
      .replace('#include <opaque_fragment>', `
#ifdef ENVMAP_TYPE_CUBE_UV
{
  vec3 sN = normalize(normal);
  vec3 sV = geometryViewDir;
  float sNdV = clamp(dot(sN, sV), 0.0, 1.0);
  float sF0 = pow((steinIor - 1.0) / (steinIor + 1.0), 2.0);
  float sF = sF0 + (1.0 - sF0) * pow(1.0 - sNdV, 5.0);
  vec3 sAussen = textureCubeUV(envMap, envMapRotation * inverseTransformDirection(reflect(-sV, sN), viewMatrix), 0.0).rgb * envMapIntensity * sF;
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
    vec3 e = textureCubeUV(envMap, envMapRotation * inverseTransformDirection(sD, viewMatrix), 0.0).rgb * envMapIntensity * sDunkel;
    e = pow(e, vec3(1.5)) * 1.7; // Kontrast: Lichter blitzen, Grautoene werden dunkel
    if (k == 0) sInnen.r = e.r; else if (k == 1) sInnen.g = e.g; else sInnen.b = e.b;
  }
  sInnen *= (1.0 - sF) * steinBrillanz * diffuseColor.rgb * mix(0.45, 1.3, vSteinW) * mix(0.55, 1.25, sH.z);
  outgoingLight = sAussen + sInnen + reflectedLight.directSpecular;
}
#endif
#include <opaque_fragment>`);
  };
  mat.customProgramCacheKey = () => 'edelstein-1';
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
