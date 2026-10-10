// Schaerfe angleichen: Ein gestochen scharfer Ring auf einem weichen Kamerabild
// wirkt aufgeklebt. SchaerfeSchaetzer misst die Unschaerfe des Kamerabilds dort,
// wo der Schmuck sitzt; Weichzeichner rendert den Schmuck in ein eigenes Ziel und
// legt ihn passend weichgezeichnet (Gauss) ueber das Kamerabild.
//
// Messung: Gradientenenergie eines 1:1-Bildausschnitts vor (E0) und nach einer
// bekannten Nachunschaerfe sigma0 = 1 px (E1). Fuer eine Kante mit Gauss-Unschaerfe
// sigma gilt E1/E0 = sigma / sqrt(sigma^2 + sigma0^2). Rauschen erhoeht E0 und
// laesst das Bild schaerfer erscheinen; das ist die vorsichtige Richtung.

import * as THREE from 'three';

const FELD = 64;               // Messfeld (Kamerapixel, 1:1)
const RAND = 3;                // Randpixel ohne volle Nachbarschaft
const INTERVALL_S = 0.5;       // hoechstens zweimal je Sekunde messen
const TAU_S = 1.5;             // Glaettung der Messwerte
const MIN_ENERGIE = 6;         // mittlere quadr. Gradienten (Graustufen^2): darunter zu kontrastarm
const SIGMA_NACH = 1.0;        // Binomial [1 4 6 4 1] / 16 hat sigma = 1
// Abbildung Kameraunschaerfe -> Schmuckunschaerfe (Kamerapixel): Ein scharfes
// Bild misst wegen der Abtastung etwa 0,6 px; der Schmuck bleibt einen Hauch
// klarer als die Haut (er ist das Produkt), aber nie gestochen auf weichem Grund.
const BASIS_PX = 0.65;
const STAERKE = 0.8;
const MAX_KAMERA_PX = 2.5;
const MAX_GERAET_PX = 4;
const AB_GERAET_PX = 0.35;     // darunter nicht weichzeichnen

function erzeugeCanvas(b, h) {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(b, h);
  const c = document.createElement('canvas');
  c.width = b;
  c.height = h;
  return c;
}

/** Gradientenenergie (Mittelwert, zentrale Differenzen) im Innern eines Feldes. */
function energie(L, n) {
  let s = 0;
  let k = 0;
  for (let y = RAND; y < n - RAND; y++) {
    const z = y * n;
    for (let x = RAND; x < n - RAND; x++) {
      const i = z + x;
      const gx = (L[i + 1] - L[i - 1]) * 0.5;
      const gy = (L[i + n] - L[i - n]) * 0.5;
      s += gx * gx + gy * gy;
      k++;
    }
  }
  return k ? s / k : 0;
}

/** Binomialfilter [1 4 6 4 1]/16 waagerecht und senkrecht (Raender bleiben grob). */
function binomial(L, n, tmp, aus) {
  for (let y = 0; y < n; y++) {
    const z = y * n;
    for (let x = 2; x < n - 2; x++) {
      const i = z + x;
      tmp[i] = (L[i - 2] + 4 * L[i - 1] + 6 * L[i] + 4 * L[i + 1] + L[i + 2]) * 0.0625;
    }
    tmp[z] = L[z]; tmp[z + 1] = L[z + 1]; tmp[z + n - 2] = L[z + n - 2]; tmp[z + n - 1] = L[z + n - 1];
  }
  for (let y = 2; y < n - 2; y++) {
    for (let x = 0; x < n; x++) {
      const i = y * n + x;
      aus[i] = (tmp[i - 2 * n] + 4 * tmp[i - n] + 6 * tmp[i] + 4 * tmp[i + n] + tmp[i + 2 * n]) * 0.0625;
    }
  }
}

/** Unschaerfe (Gauss-sigma in Pixeln) eines Graustufenfelds oder null (zu kontrastarm). */
export function schaetzeSigma(L, n, puffer) {
  const e0 = energie(L, n);
  if (!(e0 >= MIN_ENERGIE)) return null;
  const tmp = puffer?.tmp || new Float32Array(n * n);
  const b = puffer?.b || new Float32Array(n * n);
  binomial(L, n, tmp, b);
  const q = Math.min(0.97, Math.max(0.05, energie(b, n) / e0));
  return SIGMA_NACH * q / Math.sqrt(1 - q * q);
}

export class SchaerfeSchaetzer {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.L = new Float32Array(FELD * FELD);
    this.puffer = { tmp: new Float32Array(FELD * FELD), b: new Float32Array(FELD * FELD) };
    this.uhr = INTERVALL_S;   // erste Messung sofort
    this.sigma = null;        // geglaettete Kameraunschaerfe (Kamerapixel)
    this.roh = null;
    this.fehler = 0;
  }

  zuruecksetzen() {
    this.uhr = INTERVALL_S;
    this.sigma = null;
    this.roh = null;
  }

  /**
   * quelle: { element, W, H, spiegel } der Buehne; x, y: Buehnenpunkt (Y oben,
   * X wie angezeigt). Misst hoechstens alle 0,5 s; einzel = sofort und ungeglaettet.
   */
  aktualisiere(quelle, x, y, dt, einzel = false) {
    if (!quelle || !quelle.element || this.fehler > 3) return this.sigma;
    this.uhr += dt;
    if (!einzel && this.uhr < INTERVALL_S) return this.sigma;
    this.uhr = 0;
    const { element, W, H, spiegel } = quelle;
    if (!(W > FELD && H > FELD)) return this.sigma;
    try {
      if (!this.ctx) {
        this.canvas = erzeugeCanvas(FELD, FELD);
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true, alpha: false });
      }
      const sx = Math.round(Math.min(W - FELD, Math.max(0, (spiegel ? W - x : x) - FELD / 2)));
      const sy = Math.round(Math.min(H - FELD, Math.max(0, H - y - FELD / 2)));
      this.ctx.drawImage(element, sx, sy, FELD, FELD, 0, 0, FELD, FELD);
      const d = this.ctx.getImageData(0, 0, FELD, FELD).data;
      const L = this.L;
      for (let i = 0, j = 0; i < L.length; i++, j += 4) L[i] = 0.299 * d[j] + 0.587 * d[j + 1] + 0.114 * d[j + 2];
      const s = schaetzeSigma(L, FELD, this.puffer);
      this.roh = s;
      if (s != null) {
        if (this.sigma == null || einzel) this.sigma = s;
        else this.sigma += (s - this.sigma) * (1 - Math.exp(-INTERVALL_S / TAU_S));
      }
    } catch (e) {
      this.fehler++;   // z. B. fremdes Bild ohne CORS: dann eben scharf
    }
    return this.sigma;
  }

  /** Weichzeichnung des Schmucks in Geraetepixeln bei pxGeraet Geraetepixeln je Kamerapixel. */
  geraeteSigma(pxGeraet) {
    if (this.sigma == null || !(pxGeraet > 0)) return 0;
    const s = this.sigma;
    const k = Math.min(MAX_KAMERA_PX, STAERKE * Math.sqrt(Math.max(0, s * s - BASIS_PX * BASIS_PX)));
    const g = Math.min(MAX_GERAET_PX, k * pxGeraet);
    return g >= AB_GERAET_PX ? g : 0;
  }

  dispose() {
    this.ctx = null;
    this.canvas = null;
  }
}

/* ---------------------------------------------------------------------- */
/* Weichzeichner: Schmuck in eigenes Ziel, dann weich ueber das Kamerabild  */
/* ---------------------------------------------------------------------- */

// 16 Abtastpunkte auf einer Sonnenblumen-Spirale (gleichmaessige Scheibe, Radius 1)
const PUNKTE = 16;
const SPIRALE = (() => {
  const a = [];
  for (let i = 0; i < PUNKTE; i++) {
    const r = Math.sqrt((i + 0.5) / PUNKTE);
    const w = i * 2.39996323;
    a.push(new THREE.Vector2(r * Math.cos(w), r * Math.sin(w)));
  }
  return a;
})();

const KOMPOSIT_VS = /* glsl */`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

// Das Ziel enthaelt lineare, vormultiplizierte Farben (Normal-Blending auf
// transparentem Grund). Weichzeichnen vormultipliziert, dann entmultiplizieren,
// Tonemapping und sRGB wie beim direkten Zeichnen, wieder vormultipliziert ausgeben.
const KOMPOSIT_FS = /* glsl */`
uniform sampler2D karte;
uniform vec2 aufloesung;
uniform float sigma;
uniform vec2 spirale[${PUNKTE}];
void main() {
  vec2 uv = gl_FragCoord.xy / aufloesung;
  vec4 s = texture2D(karte, uv);
  if (sigma > 0.0) {
    float radius = 2.2 * sigma;
    float k = -0.5 / (sigma * sigma);
    float summe = 1.0;
    for (int i = 0; i < ${PUNKTE}; i++) {
      vec2 o = spirale[i] * radius;
      float w = exp(dot(o, o) * k);
      s += texture2D(karte, uv + o / aufloesung) * w;
      summe += w;
    }
    s /= summe;
  }
  float a = s.a;
  if (a < 0.002) discard;
  gl_FragColor = vec4(s.rgb / a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = vec4(gl_FragColor.rgb * a, a);
}`;

export class Weichzeichner {
  /**
   * renderer: THREE.WebGLRenderer. Ziel mit Halbfloat (Glanzlichter > 1 bleiben
   * fuer das Tonemapping erhalten) und Mehrfachabtastung (Kantenglaettung).
   * Ohne Halbfloat-Ziele: 8 Bit mit sRGB-Speicherung (Glanzlichter gekappt).
   */
  constructor(renderer, { samples = 4 } = {}) {
    const ext = renderer.extensions;
    let float = false;
    try { float = Boolean(ext && (ext.has('EXT_color_buffer_float') || ext.has('EXT_color_buffer_half_float'))); } catch { float = false; }
    this.halbfloat = float;
    this.samples = samples;
    this.ziel = null;
    this.uniforms = {
      karte: { value: null },
      aufloesung: { value: new THREE.Vector2(1, 1) },
      sigma: { value: 0 },
      spirale: { value: SPIRALE }
    };
    this.material = new THREE.ShaderMaterial({
      name: 'schmuck-komposit',
      vertexShader: KOMPOSIT_VS,
      fragmentShader: KOMPOSIT_FS,
      uniforms: this.uniforms,
      transparent: true,
      premultipliedAlpha: true,
      blending: THREE.NormalBlending,
      depthTest: false,
      depthWrite: false,
      toneMapped: true
    });
    // Rechteck ueber dem Schmuck (Buehnenraum), nicht der ganze Bildschirm
    this.flaeche = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.material);
    this.flaeche.frustumCulled = false;
    this.szene = new THREE.Scene();
    this.szene.add(this.flaeche);
  }

  /** Ziel auf Zeichenpuffergroesse bringen (lazy). */
  bereite(breite, hoehe, samples = this.samples) {
    breite = Math.max(1, Math.round(breite));
    hoehe = Math.max(1, Math.round(hoehe));
    if (this.ziel && this.ziel.samples !== samples) {
      this.ziel.dispose();
      this.ziel = null;
    }
    if (!this.ziel) {
      this.ziel = new THREE.WebGLRenderTarget(breite, hoehe, {
        type: this.halbfloat ? THREE.HalfFloatType : THREE.UnsignedByteType,
        colorSpace: this.halbfloat ? THREE.NoColorSpace : THREE.SRGBColorSpace,
        samples,
        depthBuffer: true,
        generateMipmaps: false,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter
      });
      this.ziel.texture.name = 'schmuck';
    } else if (this.ziel.width !== breite || this.ziel.height !== hoehe) {
      this.ziel.setSize(breite, hoehe);
    }
    this.uniforms.karte.value = this.ziel.texture;
    this.uniforms.aufloesung.value.set(breite, hoehe);
    return this.ziel;
  }

  /** Rechteck (Buehnenraum) um den Schmuck setzen: mitte, Halbbreite/-hoehe. */
  setzeBereich(x, y, halbB, halbH, z) {
    this.flaeche.position.set(x, y, z);
    this.flaeche.scale.set(Math.max(1, 2 * halbB), Math.max(1, 2 * halbH), 1);
  }

  dispose() {
    this.ziel?.dispose();
    this.ziel = null;
    this.flaeche.geometry.dispose();
    this.material.dispose();
    this.szene.clear();
  }
}
