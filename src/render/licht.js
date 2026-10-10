/**
 * Licht aus dem Kamerabild.
 *
 * - Lichtschaetzer: zeichnet das Kamerabild alle ~200 ms in ein winziges
 *   Canvas, schaetzt mittlere Helligkeit (linear) und Farbstich (Grauwelt)
 *   und fuehrt die Werte weich nach. Das Canvas dient zugleich als
 *   Vorlage fuer die Raumumgebung (umgebung.js).
 * - Kontaktschatten: Tiefenkarte des Schmucks aus Lichtrichtung; die
 *   Schattenflaechen (Haut) werden dicht hinter dem Schmuck weich und
 *   dezent abgedunkelt (mit Abstandsabfall), dazu ein Glanzlicht.
 * - Funkeln: seltene, kurze Glanzpunkte auf Steinfacetten.
 */
import * as THREE from 'three';

const LUM_R = 0.2126;
const LUM_G = 0.7152;
const LUM_B = 0.0722;
// Bezug: mittlere Bildhelligkeit eines gut ausgeleuchteten Innenraums (linear)
const LUM_NORMAL = 0.16;

// sRGB 0..255 -> linear (Tabelle, einmalig)
const SRGB_LINEAR = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  SRGB_LINEAR[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function erzeugeCanvas(b, h) {
  if (typeof document !== 'undefined') {
    const c = document.createElement('canvas');
    c.width = b;
    c.height = h;
    return c;
  }
  return new OffscreenCanvas(b, h);
}

export class Lichtschaetzer {
  constructor({ breite = 32, intervallSek = 0.2, tau = 0.9 } = {}) {
    this.breite = breite;
    this.hoehe = Math.round(breite * 0.75);
    this.intervall = intervallSek;
    this.tau = tau;
    this.canvas = erzeugeCanvas(this.breite, this.hoehe);
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true, alpha: false });
    this.quelle = null;
    this.spiegel = false;
    this.uhr = Infinity;
    this.gemessen = false;
    this.fehler = false;
    // geglaettete Ausgaben
    this.luminanz = LUM_NORMAL;      // mittlere Helligkeit, linear
    this.faktor = 1;                 // relativ zu LUM_NORMAL (gedaempft)
    this.farbe = new THREE.Color(1, 1, 1); // Weissabgleich-Toenung (Luminanz 1)
    this.version = 0;                // steigt bei jeder neuen Messung
    this._roh = new THREE.Color();
  }

  setzeQuelle(quelle, { W, H, spiegel = false } = {}) {
    this.quelle = quelle;
    this.spiegel = !!spiegel;
    const W0 = W || quelle?.videoWidth || quelle?.width || 4;
    const H0 = H || quelle?.videoHeight || quelle?.height || 3;
    const h = Math.max(8, Math.round(this.breite * H0 / W0));
    if (h !== this.hoehe) {
      this.hoehe = h;
      this.canvas.height = h;
    }
    this.uhr = Infinity;
    this.gemessen = false;
    this.fehler = false;
  }

  /** Liefert true, wenn eine neue Messung vorliegt. */
  aktualisiere(dt) {
    if (!this.quelle || this.fehler) return false;
    this.uhr += dt;
    if (this.uhr < this.intervall) {
      this.glaette(dt);
      return false;
    }
    const verstrichen = Number.isFinite(this.uhr) ? this.uhr : 0;
    this.uhr = 0;
    if (!this.messe()) return false;
    this.glaette(verstrichen, true);
    this.version++;
    return true;
  }

  messe() {
    const q = this.quelle;
    if (q.readyState !== undefined && q.readyState < 2) return false; // Video ohne Bild
    const { ctx, breite: b, hoehe: h } = this;
    try {
      ctx.setTransform(this.spiegel ? -1 : 1, 0, 0, 1, this.spiegel ? b : 0, 0);
      ctx.drawImage(q, 0, 0, b, h);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      const d = ctx.getImageData(0, 0, b, h).data;
      let r = 0;
      let g = 0;
      let bl = 0;
      let gewicht = 0;
      for (let i = 0, n = d.length; i < n; i += 4) {
        const lr = SRGB_LINEAR[d[i]];
        const lg = SRGB_LINEAR[d[i + 1]];
        const lb = SRGB_LINEAR[d[i + 2]];
        // Spitzlichter (Lampen, Fenster) zaehlen weniger, sonst kippt der Mittelwert
        const y = LUM_R * lr + LUM_G * lg + LUM_B * lb;
        const w = y > 0.8 ? 0.3 : 1;
        r += lr * w;
        g += lg * w;
        bl += lb * w;
        gewicht += w;
      }
      r /= gewicht;
      g /= gewicht;
      bl /= gewicht;
      this._roh.setRGB(r, g, bl);
      this.gemessen = true;
      return true;
    } catch (e) {
      // z. B. fremde Bildquelle (CORS): Schaetzung abschalten
      this.fehler = true;
      return false;
    }
  }

  glaette(dt, neu = false) {
    if (!this.gemessen) return;
    const roh = this._roh;
    const y = Math.max(1e-4, LUM_R * roh.r + LUM_G * roh.g + LUM_B * roh.b);
    const k = this.version === 0 && neu ? 1 : 1 - Math.exp(-dt / this.tau);
    this.luminanz += (y - this.luminanz) * k;
    // Kameras regeln selbst nach; deshalb nur gedaempft (Exponent 0.45) folgen
    const f = Math.min(1.35, Math.max(0.45, Math.pow(this.luminanz / LUM_NORMAL, 0.45)));
    this.faktor += (f - this.faktor) * k;
    // Farbstich: Grauwelt, zur Haelfte entsaettigt, Luminanz 1
    const tr = 0.5 + 0.5 * roh.r / y;
    const tg = 0.5 + 0.5 * roh.g / y;
    const tb = 0.5 + 0.5 * roh.b / y;
    const ty = LUM_R * tr + LUM_G * tg + LUM_B * tb;
    this.farbe.r += (Math.min(1.6, tr / ty) - this.farbe.r) * k;
    this.farbe.g += (Math.min(1.6, tg / ty) - this.farbe.g) * k;
    this.farbe.b += (Math.min(1.6, tb / ty) - this.farbe.b) * k;
  }

  dispose() {
    this.quelle = null;
    this.canvas.width = this.canvas.height = 1;
  }
}

/* ------------------------------------------------------------------------ */

// Ziel-Radius der Weichzeichnung in Texeln (Karte passt sich der Weichheit an)
const TEXEL_RADIUS = 2.5;

const KONTAKT_VS_PARS = /* glsl */ `
uniform mat4 kontaktMatrix;
varying vec4 vKontakt;
`;

const KONTAKT_VS = /* glsl */ `
vec4 kontaktWelt = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
kontaktWelt = instanceMatrix * kontaktWelt;
#endif
vKontakt = kontaktMatrix * (modelMatrix * kontaktWelt);
`;

// Empfaenger: Abstand hinter dem Schmuck (aus Lichtrichtung) -> Schatten,
// der mit dem Abstand abklingt. Vogel-Scheibe, pro Pixel gedreht (IGN).
const KONTAKT_FS_PARS = /* glsl */ `
uniform sampler2D kontaktTiefe;
uniform vec4 kontaktParam; // x: 1/Kartengroesse, y: Radius (Texel), z: Tiefenbereich (px), w: Abklingweite (px)
uniform float kontaktAktiv;
varying vec4 vKontakt;
float kontaktSchatten() {
  if (kontaktAktiv < 0.5) return 0.0;
  vec3 k = vKontakt.xyz / vKontakt.w;
  if (k.x < 0.0 || k.y < 0.0 || k.x > 1.0 || k.y > 1.0 || k.z > 1.0) return 0.0;
  float drehung = 6.2831853 * fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  float summe = 0.0;
  for (int i = 0; i < KONTAKT_TAPS; i++) {
    float r = sqrt((float(i) + 0.5) / float(KONTAKT_TAPS));
    float w = float(i) * 2.4 + drehung;
    vec2 o = vec2(cos(w), sin(w)) * r * kontaktParam.y * kontaktParam.x;
    float d = texture2D(kontaktTiefe, k.xy + o).r;
    float abstand = (k.z - d) * kontaktParam.z;
    // nur hinter dem Schmuck; nah = kraeftig, fern = verschwindet
    summe += step(0.0, abstand) * step(d, 0.99999) * exp(-max(abstand, 0.0) / kontaktParam.w);
  }
  return summe / float(KONTAKT_TAPS);
}
`;

const _ziel = new THREE.Vector3();
const _bias = new THREE.Matrix4().set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);

/**
 * Weiche Kontaktschatten mit Abstandsabfall.
 *
 * Der Schmuck wird aus Lichtrichtung in eine kleine Tiefenkarte gezeichnet
 * (Kamera eng um das Stueck). Die Schattenflaechen (Haut) vergleichen ihre
 * Lichttiefe mit dieser Karte: dicht hinter dem Schmuck entsteht ein
 * weicher Schatten, weiter entfernte Flaechen bleiben unberuehrt. So wirkt
 * die Haut beruehrt, ohne dass ein "Geisterbild" auf entfernte Flaechen faellt.
 * Dazu ein gerichtetes Licht (ohne three-Schatten) fuer ein klares Glanzlicht.
 */
export class Kontaktschatten {
  constructor({ maxGroesse = 1024, richtung = new THREE.Vector3(-0.22, 0.55, 0.8), staerke = 0.8, taps = 12 } = {}) {
    this.maxGroesse = maxGroesse;
    this.richtung = richtung.clone().normalize();
    this.grundStaerke = staerke;
    this.taps = taps;
    this.licht = new THREE.DirectionalLight(0xffffff, staerke);
    this.licht.name = 'kontaktlicht';
    this.licht.castShadow = false;
    this.kamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 100);
    this.groesse = 256;
    const tiefe = new THREE.DepthTexture(this.groesse, this.groesse);
    tiefe.type = THREE.UnsignedIntType;
    this.ziel = new THREE.WebGLRenderTarget(this.groesse, this.groesse, { depthBuffer: true, depthTexture: tiefe, generateMipmaps: false });
    this.tiefenMaterial = new THREE.MeshBasicMaterial({ colorWrite: false, side: THREE.DoubleSide });
    this.uniforms = {
      kontaktTiefe: { value: tiefe },
      kontaktMatrix: { value: new THREE.Matrix4() },
      kontaktParam: { value: new THREE.Vector4(1 / this.groesse, TEXEL_RADIUS, 100, 6) },
      kontaktAktiv: { value: 0 }
    };
    this.weichMm = 1.1;
    this.abklingMm = 2.2;
    this.aktiv = false;
    this.materialien = [];
  }

  /** Licht in die Szene haengen. */
  fuegeHinzu(szene) {
    szene.add(this.licht);
    szene.add(this.licht.target);
  }

  setzeAktiv(an) {
    this.aktiv = !!an;
    this.uniforms.kontaktAktiv.value = this.aktiv ? 1 : 0;
  }

  /** Material fuer die Schattenflaechen (farbig, Deckkraft = Staerke). */
  material({ farbe = 0x24170e, deckkraft = 0.42 } = {}) {
    const m = new THREE.MeshBasicMaterial({ color: farbe, transparent: true, opacity: deckkraft, depthWrite: false, toneMapped: false });
    m.name = 'schattenflaeche';
    m.userData.grundDeckkraft = deckkraft;
    const uniforms = this.uniforms;
    const taps = this.taps;
    m.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = shader.vertexShader
        .replace('void main() {', `${KONTAKT_VS_PARS}\nvoid main() {`)
        .replace('#include <project_vertex>', `#include <project_vertex>\n${KONTAKT_VS}`);
      shader.fragmentShader = shader.fragmentShader
        .replace('void main() {', `#define KONTAKT_TAPS ${taps}\n${KONTAKT_FS_PARS}\nvoid main() {`)
        .replace('#include <tonemapping_fragment>', 'gl_FragColor.a *= kontaktSchatten();\n\t#include <tonemapping_fragment>');
    };
    m.customProgramCacheKey = () => `kontakt-${taps}`;
    this.materialien.push(m);
    return m;
  }

  /**
   * mitte/radius in Buehnenpixeln, pxProMm fuer Weichheit und Abklingweite.
   * Die Kartenaufloesung folgt der gewuenschten Weichheit (wenige Texel Radius).
   */
  setzeBereich(mitte, radius, pxProMm) {
    const r = Math.max(4, radius * 1.1);
    const abstand = r * 2 + 10;
    const k = this.kamera;
    k.position.copy(mitte).addScaledVector(this.richtung, abstand);
    k.up.set(0, 1, 0);
    k.lookAt(_ziel.copy(mitte));
    k.left = -r;
    k.right = r;
    k.top = r;
    k.bottom = -r;
    k.near = 1;
    k.far = abstand + r * 4;
    k.updateProjectionMatrix();
    k.updateMatrixWorld();
    this.uniforms.kontaktMatrix.value.multiplyMatrices(_bias, k.projectionMatrix).multiply(k.matrixWorldInverse);

    const weichPx = Math.max(0.75, this.weichMm * pxProMm);
    const ideal = (2 * r * TEXEL_RADIUS) / weichPx;
    if (ideal > this.groesse * 1.45 || ideal < this.groesse / 1.45) {
      let n = 64;
      while (n < ideal && n < this.maxGroesse) n *= 2;
      if (n !== this.groesse) {
        this.groesse = n;
        this.ziel.setSize(n, n);
      }
    }
    const p = this.uniforms.kontaktParam.value;
    p.x = 1 / this.groesse;
    p.y = Math.min(8, Math.max(1, (weichPx * this.groesse) / (2 * r)));
    p.z = k.far - k.near;
    p.w = Math.max(1, this.abklingMm * pxProMm);

    // Glanzlicht aus derselben Richtung
    this.licht.position.copy(mitte).addScaledVector(this.richtung, abstand);
    this.licht.target.position.copy(mitte);
    this.licht.target.updateMatrixWorld();
    this.licht.updateMatrixWorld();
  }

  /** Tiefenpass des Schmucks; verstecke() blendet alles ausser dem Schmuck aus. */
  zeichne(renderer, szene, verstecke, zeige) {
    if (!this.aktiv) return;
    verstecke();
    const alt = szene.overrideMaterial;
    szene.overrideMaterial = this.tiefenMaterial;
    renderer.setRenderTarget(this.ziel);
    renderer.clear(true, true, false);
    renderer.render(szene, this.kamera);
    renderer.setRenderTarget(null);
    szene.overrideMaterial = alt;
    zeige();
  }

  /** Lichtstaerke und -farbe (aus dem Lichtschaetzer). */
  setzeLicht(faktor, farbe) {
    this.licht.intensity = this.grundStaerke * faktor;
    if (farbe) this.licht.color.copy(farbe);
  }

  dispose() {
    this.ziel.depthTexture.dispose();
    this.ziel.dispose();
    this.tiefenMaterial.dispose();
    for (const m of this.materialien) m.dispose();
    this.materialien.length = 0;
    this.licht.dispose();
    this.licht.removeFromParent();
    this.licht.target.removeFromParent();
  }
}

/* ------------------------------------------------------------------------ */

let sternTextur = null;
let sternNutzer = 0;

/** Weicher Vierstrahl-Stern (prozedural, einmalig). */
function holeSternTextur() {
  sternNutzer++;
  if (sternTextur) return sternTextur;
  const n = 64;
  const c = erzeugeCanvas(n, n);
  const ctx = c.getContext('2d');
  const bild = ctx.createImageData(n, n);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const u = (x + 0.5) / n * 2 - 1;
      const v = (y + 0.5) / n * 2 - 1;
      const r = Math.hypot(u, v);
      // Kern + zwei duenne Strahlen (horizontal/vertikal) + schwache Diagonalen
      const kern = Math.exp(-r * r * 60);
      const glanz = Math.exp(-r * r * 9) * 0.35;
      const strahl = (a, b) => Math.exp(-(b * b) * 900) * Math.pow(Math.max(0, 1 - Math.abs(a)), 2.2);
      const d1 = (u + v) * 0.7071;
      const d2 = (u - v) * 0.7071;
      const s = strahl(u, v) + strahl(v, u) + 0.35 * (strahl(d1, d2) + strahl(d2, d1));
      const w = Math.min(1, kern + glanz + s * 0.9);
      const i = (y * n + x) * 4;
      bild.data[i] = 255;
      bild.data[i + 1] = 255;
      bild.data[i + 2] = 255;
      bild.data[i + 3] = Math.round(w * 255);
    }
  }
  ctx.putImageData(bild, 0, 0);
  sternTextur = new THREE.CanvasTexture(c);
  sternTextur.colorSpace = THREE.SRGBColorSpace;
  return sternTextur;
}

function gibSternFrei() {
  sternNutzer--;
  if (sternNutzer <= 0 && sternTextur) {
    sternTextur.dispose();
    sternTextur = null;
    sternNutzer = 0;
  }
}

const _p = new THREE.Vector3();
const _mi = new THREE.Matrix4();

/**
 * Dezente Glanzpunkte auf Steinen. quellen: [{ mesh, deckkraft: () => 0..1 }].
 * Die Funken erscheinen selten (oefter bei Bewegung), leben ~0,2 s und
 * sitzen auf zufaelligen Eckpunkten der Steingeometrie.
 */
export class Funkeln {
  constructor({ anzahl = 5, patch = null } = {}) {
    this.objekt = new THREE.Group();
    this.objekt.name = 'funkeln';
    this.funken = [];
    const textur = holeSternTextur();
    for (let i = 0; i < anzahl; i++) {
      const mat = new THREE.SpriteMaterial({
        map: textur,
        color: new THREE.Color(1, 0.97, 0.9),
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
        toneMapped: false
      });
      if (patch) patch(mat);
      const s = new THREE.Sprite(mat);
      s.visible = false;
      s.renderOrder = 20;
      s.frustumCulled = false;
      this.objekt.add(s);
      this.funken.push({ sprite: s, t: 0, dauer: 0.2, groesse: 1, quelle: null, punkt: new THREE.Vector3(), instanz: -1 });
    }
    this.quellen = [];
    this.aktiv = true;
  }

  /** Steinmeshes eines Modellexemplars registrieren. */
  setzeQuellen(quellen) {
    this.quellen = quellen || [];
    for (const f of this.funken) {
      f.sprite.visible = false;
      f.quelle = null;
    }
  }

  /** bewegung: 0..1 (z. B. Drehgeschwindigkeit), dt in s. */
  aktualisiere(dt, bewegung = 0) {
    if (!this.aktiv || this.quellen.length === 0) {
      for (const f of this.funken) f.sprite.visible = false;
      return;
    }
    // Rate pro Stein: ruhig selten, bei Bewegung haeufiger
    const rate = (0.18 + 1.8 * Math.min(1, bewegung)) * Math.min(6, this.quellen.length);
    if (Math.random() < rate * dt) this.entzuende(this.frei());

    for (const f of this.funken) {
      if (!f.quelle) continue;
      f.t += dt;
      const q = f.quelle;
      const sicht = q.deckkraft ? q.deckkraft() : 1;
      if (f.t >= f.dauer || sicht < 0.05 || !q.mesh.visible) {
        f.quelle = null;
        f.sprite.visible = false;
        continue;
      }
      const x = f.t / f.dauer;
      const huelle = Math.pow(Math.sin(Math.PI * x), 2);
      // Lage jeden Frame neu (der Stein bewegt sich mit)
      _p.copy(f.punkt);
      if (f.instanz >= 0 && q.mesh.isInstancedMesh) {
        q.mesh.getMatrixAt(f.instanz, _mi);
        _p.applyMatrix4(_mi);
      }
      _p.applyMatrix4(q.mesh.matrixWorld);
      const gross = q.mesh.matrixWorld.getMaxScaleOnAxis() * q.radius;
      f.sprite.position.copy(_p);
      f.sprite.position.z += gross * 0.6; // knapp vor der Facette
      const s = gross * f.groesse * (0.75 + 0.25 * huelle);
      f.sprite.scale.set(s, s, 1);
      f.sprite.material.opacity = huelle * 0.85 * sicht;
      f.sprite.visible = true;
    }
  }

  frei() {
    for (const f of this.funken) if (!f.quelle) return f;
    return null;
  }

  entzuende(f) {
    if (!f) return;
    const q = this.quellen[Math.floor(Math.random() * this.quellen.length)];
    if (!q || !q.mesh.visible || (q.deckkraft && q.deckkraft() < 0.5)) return;
    const pos = q.mesh.geometry.getAttribute('position');
    if (!pos) return;
    // Facettenpunkt aus der oberen Haelfte (Krone) bevorzugen
    let bester = 0;
    let besterY = -Infinity;
    for (let i = 0; i < 3; i++) {
      const k = Math.floor(Math.random() * pos.count);
      const y = pos.getY(k) + pos.getZ(k);
      if (y > besterY) {
        besterY = y;
        bester = k;
      }
    }
    f.punkt.fromBufferAttribute(pos, bester);
    f.instanz = q.mesh.isInstancedMesh ? Math.floor(Math.random() * q.mesh.count) : -1;
    f.quelle = q;
    f.t = 0;
    f.dauer = 0.16 + Math.random() * 0.14;
    f.groesse = 1.6 + Math.random() * 1.4;
    f.sprite.material.rotation = Math.random() * Math.PI * 0.5;
  }

  dispose() {
    for (const f of this.funken) f.sprite.material.dispose();
    this.funken.length = 0;
    this.objekt.clear();
    this.objekt.removeFromParent();
    gibSternFrei();
  }
}
