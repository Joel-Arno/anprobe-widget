/**
 * Buehne: WebGL-Darstellung der Anprobe (three.js).
 *
 * Alles liegt im Buehnenraum (Pixel des Kamerabilds, Y oben, Z zur
 * Betrachterin). Eine orthografische Kamera zeigt den sichtbaren Ausschnitt.
 *
 * Zeichenfolge pro Frame:
 *  1. Hintergrund: Kamerabild 1:1 (eigener Shader ohne Tonemapping und ohne
 *     Farbraumumrechnung, damit das Bild exakt farbtreu bleibt)
 *  2. Verdecker (nur Tiefe) - bzw. bei weicher Kante in eine Tiefentextur
 *  3. Schmuck (PBR, ACES/AgX, Umgebung aus Studio + Kamerabild), danach
 *     Schattenflaechen (Kontaktschatten) und Funkeln. Mit Schaerfeangleich
 *     (Standard) in ein eigenes Ziel (Halbfloat, Mehrfachabtastung), das dann
 *     so weichgezeichnet aufgelegt wird, wie das Kamerabild am Schmuck ist
 *
 * Die Buehne uebernimmt per setzeSchmuck uebergebene Modelle: sie werden
 * nach dem Ausblenden (oder in dispose) mit modell.dispose() freigegeben,
 * sofern nicht { freigeben: false } angegeben ist.
 */
import * as THREE from 'three';
import { PrimitivSatz, tiefenMaterial, WeicheVerdeckung } from './verdeckung.js';
import { Umgebung } from './umgebung.js';
import { Lichtschaetzer, Kontaktschatten, Funkeln } from './licht.js';
import { PendelSystem, Feder3 } from './physik.js';
import { SchaerfeSchaetzer, Weichzeichner } from './schaerfe.js';

const QUALITAET = {
  hoch: { pixelRatioMax: 2, schatten: 1024, weich: true, funkeln: true, umgebung: 'hoch' },
  mittel: { pixelRatioMax: 1.5, schatten: 512, weich: false, funkeln: false, umgebung: 'mittel' },
  niedrig: { pixelRatioMax: 1.25, schatten: 0, weich: false, funkeln: false, umgebung: 'niedrig' }
};

const KAMERA_Z = 10000;
// Nackenblende der Kette (Anteil des Halsradius hinter der Drosselgrube, Breite in mm)
const NACKEN_ANTEIL = 0.55;
const NACKEN_BREITE_MM = 9;
// Ringblende: Beginn hinter der Achse und Breite (Anteile des Aussenradius)
const RING_BLENDE = [0.25, 0.3];
// Armband (biegsam): Spiel der Schlaufe ums Handgelenk und groesste Verzerrung X:Z
const ARMBAND_SPIEL = 1.05;
const ARMBAND_VERZERRUNG_MIN = 0.88;
const ANHAENGER_VORSCHUB_MM = 9;   // Armband-Anhaenger fuer den Tiefentest zur Kamera
const NAH = 1;
const FERN = 20000;
const HINTERGRUND_Z = -9000;
const EINBLENDEN_S = 0.35;
const AUSBLENDEN_S = 0.25;
const FINGER_AUS_S = 0.12;
const FINGER_EIN_S = 0.22;
const ABTASTUNG_GROSS_PX = 3.2e6; // ab so vielen Zeichenpixeln 2- statt 4-fache Abtastung
const KANTE_CSS_PX = 1.6;     // Radius der weichen Verdeckungskante
const KETTE_NORM_MM = 55;

const HG_VS = /* glsl */ `
uniform vec4 uvTrafo;
varying vec2 vUv;
void main() {
  vUv = uv * uvTrafo.xy + uvTrafo.zw;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Rohwerte durchreichen: kein Tonemapping, keine Farbraumumrechnung
const HG_FS = /* glsl */ `
uniform sampler2D karte;
varying vec2 vUv;
void main() {
  gl_FragColor = vec4(texture2D(karte, vUv).rgb, 1.0);
}
`;

// Hilfsobjekte (keine Allokationen pro Frame)
const _m = new THREE.Matrix4();
const _t = new THREE.Matrix4();
const _v = new THREE.Vector3();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _g = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _mitte = new THREE.Vector3();
const _puffer = new THREE.Vector2();
const _SCHWERKRAFT = new THREE.Vector3(0, -1, 0);
const KREIS_N = 24;
const KREIS_COS = new Float32Array(KREIS_N);
const KREIS_SIN = new Float32Array(KREIS_N);
for (let i = 0; i < KREIS_N; i++) {
  KREIS_COS[i] = Math.cos((i / KREIS_N) * Math.PI * 2);
  KREIS_SIN[i] = Math.sin((i / KREIS_N) * Math.PI * 2);
}

const klemme = (x, a, b) => Math.min(b, Math.max(a, x));
const glatt = (x) => x * x * (3 - 2 * x);

function glattStufe(a, b, x) {
  return glatt(klemme((x - a) / (b - a), 0, 1));
}

/** Pfad (Kindindizes) von wurzel zu knoten, fuer Klone. */
function pfadZu(wurzel, knoten) {
  const pfad = [];
  let o = knoten;
  while (o && o !== wurzel) {
    if (!o.parent) return null;
    pfad.unshift(o.parent.children.indexOf(o));
    o = o.parent;
  }
  return o === wurzel ? pfad : null;
}

function folgePfad(wurzel, pfad) {
  let o = wurzel;
  for (const i of pfad) o = o && o.children[i];
  return o || null;
}

/**
 * Prueft, ob das Handgelenk (Ellipse a, b) in der um t*(dx, dz) verschobenen
 * Schlaufe (Ellipse A, B) liegt.
 */
function passtHinein(a, b, A, B, dx, dz, t) {
  for (let i = 0; i < KREIS_N; i++) {
    const x = (a * KREIS_COS[i] - t * dx) / A;
    const z = (b * KREIS_SIN[i] - t * dz) / B;
    if (x * x + z * z > 1) return false;
  }
  return true;
}

export class Buehne {
  /**
   * canvas: HTMLCanvasElement
   * pixelRatio: Standard devicePixelRatio (hoechstens 2)
   * qualitaet: 'hoch' | 'mittel' (zusaetzlich 'niedrig': ohne Schatten/Raumumgebung)
   * tonemapping: 'aces' (Standard) | 'agx'
   */
  constructor(canvas, { pixelRatio, qualitaet = 'hoch', tonemapping = 'aces', schaerfeAngleich = true } = {}) {
    this.canvas = canvas;
    this.qualitaetName = QUALITAET[qualitaet] ? qualitaet : 'hoch';
    this.q = QUALITAET[this.qualitaetName];
    // Weiche Kante nur, wenn beim Erzeugen vorgesehen (Shader werden dann immer erweitert)
    this.weichMoeglich = this.q.weich;

    // Mit Schaerfeangleich zeichnet der Schmuck in ein eigenes Ziel mit
    // Mehrfachabtastung; der Zeichenpuffer selbst braucht dann keine (spart Speicher)
    const kontextOpt = { alpha: true, premultipliedAlpha: true, preserveDrawingBuffer: false, powerPreference: 'high-performance' };
    const r = new THREE.WebGLRenderer({ canvas, antialias: !schaerfeAngleich, ...kontextOpt });
    const dpr = pixelRatio ?? (typeof window !== 'undefined' ? window.devicePixelRatio : 1) ?? 1;
    this.pixelRatioWunsch = dpr || 1;
    this.pixelRatio = Math.min(this.pixelRatioWunsch, this.q.pixelRatioMax, 2);
    r.setPixelRatio(this.pixelRatio);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = tonemapping === 'agx' ? THREE.AgXToneMapping : THREE.ACESFilmicToneMapping;
    this.belichtungBasis = tonemapping === 'agx' ? 1.35 : 1.0;
    r.toneMappingExposure = this.belichtungBasis;
    r.autoClear = false;
    r.setClearColor(0x000000, 0);
    r.shadowMap.enabled = false; // eigene Kontaktschatten (licht.js)
    this.renderer = r;
    // Kontextverlust (iOS/Android bei Speicherdruck, z. B. nach dem Teilen in
    // eine andere App): nicht weiter zeichnen, die App baut die Buehne neu auf
    this.verloren = false;
    this.onKontextVerlust = null;
    this.beiKontextVerlust = (e) => {
      e.preventDefault();
      if (this.entsorgt) return;
      this.verloren = true;
      if (typeof this.onKontextVerlust === 'function') this.onKontextVerlust();
    };
    canvas.addEventListener('webglcontextlost', this.beiKontextVerlust);

    this.kamera = new THREE.OrthographicCamera(0, 1, 1, 0, NAH, FERN);
    this.kamera.position.set(0, 0, KAMERA_Z);
    this.kamera.updateMatrixWorld();

    this.szeneHintergrund = new THREE.Scene();
    this.szeneVerdecker = new THREE.Scene();
    this.szene = new THREE.Scene();

    // Hintergrund (Kamerabild)
    this.hgMaterial = new THREE.ShaderMaterial({
      vertexShader: HG_VS,
      fragmentShader: HG_FS,
      uniforms: { karte: { value: null }, uvTrafo: { value: new THREE.Vector4(1, 1, 0, 0) } },
      depthTest: false,
      depthWrite: false,
      toneMapped: false
    });
    this.hintergrund = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.hgMaterial);
    this.hintergrund.frustumCulled = false;
    this.hintergrund.visible = false;
    this.szeneHintergrund.add(this.hintergrund);
    this.hgTextur = null;

    // Verdeckung und Schattenflaechen
    this.weich = new WeicheVerdeckung({ tiefenBereich: FERN - NAH });
    this.verdecker = new PrimitivSatz(tiefenMaterial(), { name: 'verdecker', netzMaterial: tiefenMaterial({ doppelseitig: true }) });
    this.szeneVerdecker.add(this.verdecker.objekt);
    this.verdeckerSkala = 1;

    // Licht und Umgebung
    this.umgebung = new Umgebung(r, { qualitaet: this.q.umgebung });
    this.szene.environment = this.umgebung.textur;
    this.licht = new Lichtschaetzer();
    this.umgebung.setzeKamerabild(this.licht.canvas);
    this.schatten = new Kontaktschatten({ maxGroesse: this.q.schatten || 256, taps: this.q.weich ? 12 : 8 });
    this.schatten.fuegeHinzu(this.szene);
    this.empfaengerMaterial = this.schatten.material();
    this.empfaenger = new PrimitivSatz(this.empfaengerMaterial, { name: 'schattenflaechen', renderOrder: 5 });
    if (this.weichMoeglich) this.weich.patche(this.empfaengerMaterial);
    this.szene.add(this.empfaenger.objekt);
    // Fuer den Schatten-Tiefenpass: alles ausser dem Schmuck kurz ausblenden
    this.versteckeFuerSchatten = () => {
      this.empfaenger.objekt.visible = false;
      this.funkeln.objekt.visible = false;
    };
    this.zeigeNachSchatten = () => {
      this.empfaenger.objekt.visible = true;
      this.funkeln.objekt.visible = true;
    };
    this.lichtVersion = -1;
    this.belichtungZiel = this.belichtungBasis;

    // Schaerfeangleich: Kamerabild am Schmuck messen, Schmuck passend weich auflegen
    this.schaerfe = new SchaerfeSchaetzer();
    this.wz = schaerfeAngleich ? new Weichzeichner(r) : null;
    this.wzBereich = { aktiv: false, x: 0, y: 0, r: 0 };
    this.wzSigma = 0;

    this.funkeln = new Funkeln({ patch: this.weichMoeglich ? (m) => this.weich.patche(m) : null });
    this.funkeln.aktiv = this.q.funkeln;
    this.szene.add(this.funkeln.objekt);

    this.eintraege = [];
    this.finger = 'ring';
    this.anpassung = { skala: 1, versatz: new THREE.Vector3() };
    this.schwerkraft = new THREE.Vector3(0, -1, 0);
    this.quelle = null;
    this.ansicht = { breite: canvas.clientWidth || canvas.width || 1, hoehe: canvas.clientHeight || canvas.height || 1, modus: 'cover' };
    this.sicht = { links: 0, rechts: 1, unten: 0, oben: 1, cssProPx: 1 };
    this.fokus = null;
    this.letztesDt = 1 / 30;
    this.entsorgt = false;
    this.setzeAnsicht(this.ansicht.breite, this.ansicht.hoehe, 'cover');
  }

  /* -------------------------------------------------------------------- */
  /* Quelle und Ansicht                                                    */
  /* -------------------------------------------------------------------- */

  /**
   * Hintergrundquelle setzen: HTMLVideoElement (VideoTexture), Canvas
   * (CanvasTexture, jeden Frame neu hochgeladen ausser statisch: true),
   * Bild/ImageBitmap (einmalig).
   */
  setzeQuelle(quelle, { W, H, spiegel = false, statisch = false } = {}) {
    if (this.hgTextur) {
      this.hgTextur.dispose();
      this.hgTextur = null;
    }
    if (!quelle) {
      this.quelle = null;
      this.hintergrund.visible = false;
      return;
    }
    const istVideo = typeof HTMLVideoElement !== 'undefined' && quelle instanceof HTMLVideoElement;
    const istCanvas = (typeof HTMLCanvasElement !== 'undefined' && quelle instanceof HTMLCanvasElement)
      || (typeof OffscreenCanvas !== 'undefined' && quelle instanceof OffscreenCanvas);
    const istBitmap = typeof ImageBitmap !== 'undefined' && quelle instanceof ImageBitmap;
    let tex;
    if (istVideo) tex = new THREE.VideoTexture(quelle);
    else if (istCanvas) tex = new THREE.CanvasTexture(quelle);
    else {
      tex = new THREE.Texture(quelle);
      tex.needsUpdate = true;
    }
    tex.colorSpace = THREE.NoColorSpace; // Rohwerte: Bild bleibt farbtreu
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    if (istBitmap) tex.flipY = false;
    this.hgTextur = tex;

    W = W || quelle.videoWidth || quelle.naturalWidth || quelle.width;
    H = H || quelle.videoHeight || quelle.naturalHeight || quelle.height;
    this.quelle = { element: quelle, W, H, spiegel: !!spiegel, art: istVideo ? 'video' : istCanvas ? 'canvas' : 'bild', statisch: !!statisch };

    const u = this.hgMaterial.uniforms;
    u.karte.value = tex;
    // Spiegelung ueber UV; ImageBitmap ignoriert flipY -> V selbst drehen
    u.uvTrafo.value.set(spiegel ? -1 : 1, istBitmap ? -1 : 1, spiegel ? 1 : 0, istBitmap ? 1 : 0);
    this.hintergrund.scale.set(W, H, 1);
    this.hintergrund.position.set(W / 2, H / 2, HINTERGRUND_Z);
    this.hintergrund.visible = true;
    this.licht.setzeQuelle(quelle, { W, H, spiegel });
    this.schaerfe.zuruecksetzen();
    for (const e of this.eintraege) for (const inst of e.instanzen) inst.pendel.zuruecksetzen();
    this.aktualisiereKamera();
  }

  /** Ausschnitt fuer eine Anzeigeflaeche (CSS-Pixel): 'cover' (Handy) oder 'contain' (Desktop). */
  setzeAnsicht(breiteCss, hoeheCss, modus = 'cover') {
    const b = Math.max(1, Math.round(breiteCss));
    const h = Math.max(1, Math.round(hoeheCss));
    this.ansicht = { breite: b, hoehe: h, modus: modus === 'contain' ? 'contain' : 'cover' };
    this.renderer.setSize(b, h, true);
    this.aktualisiereKamera();
    this.bereiteWeich();
  }

  aktualisiereKamera() {
    const { breite: b, hoehe: h, modus } = this.ansicht;
    const W = this.quelle ? this.quelle.W : b;
    const H = this.quelle ? this.quelle.H : h;
    const f = this.fokus;
    const s = (modus === 'contain' ? Math.min(b / W, h / H) : Math.max(b / W, h / H)) * (f ? f.zoom : 1);
    const vw = b / s;
    const vh = h / s;
    // mit Fokus: Ausschnitt um den Fokuspunkt, innerhalb des Bilds gehalten
    const lage = (mitte, v, G) => (v >= G ? (G - v) / 2 : Math.min(G - v, Math.max(0, mitte - v / 2)));
    const links = f ? lage(f.x, vw, W) : (W - vw) / 2;
    const unten = f ? lage(f.y, vh, H) : (H - vh) / 2;
    this.sicht = { links, rechts: links + vw, unten, oben: unten + vh, cssProPx: s };
    this.setzeFrustum(links, links + vw, unten, unten + vh);
  }

  setzeFrustum(links, rechts, unten, oben) {
    const k = this.kamera;
    k.left = links;
    k.right = rechts;
    k.bottom = unten;
    k.top = oben;
    k.updateProjectionMatrix();
  }

  bereiteWeich() {
    const aktiv = this.q.weich;
    this.weich.setzeAktiv(aktiv);
    if (!aktiv) return;
    const groesse = this.renderer.getDrawingBufferSize(_puffer);
    this.weich.bereite(groesse.x, groesse.y);
    this.weich.setzeRadius(KANTE_CSS_PX * this.renderer.getPixelRatio());
  }

  /**
   * Qualitaet zur Laufzeit wechseln (z. B. drosseln, wenn die Bildrate faellt):
   * 'hoch' | 'mittel' | 'niedrig'. Weiche Kante, Schattenkarte, Funkeln,
   * Raumumgebung und Pixelverhaeltnis folgen; Shader werden nicht neu erzeugt.
   */
  setzeQualitaet(stufe) {
    // auch als Objekt { qualitaet, pixelRatio } (so ruft die App bei adaptiver Qualitaet)
    let pixelRatio = null;
    if (stufe && typeof stufe === 'object') {
      pixelRatio = stufe.pixelRatio > 0 ? stufe.pixelRatio : null;
      stufe = stufe.qualitaet || this.qualitaetName;
    }
    if (!QUALITAET[stufe]) return;
    const prAlt = this.pixelRatioWunsch;
    if (pixelRatio) this.pixelRatioWunsch = Math.min(prAlt, pixelRatio);
    if (stufe === this.qualitaetName && this.pixelRatioWunsch === prAlt) return;
    this.qualitaetName = stufe;
    this.q = { ...QUALITAET[stufe], weich: QUALITAET[stufe].weich && this.weichMoeglich };
    this.funkeln.aktiv = this.q.funkeln;
    this.schatten.maxGroesse = this.q.schatten || 256;
    this.umgebung.setzeQualitaet(this.q.umgebung);
    this.szene.environment = this.umgebung.textur;
    const pr = Math.min(this.pixelRatioWunsch, this.q.pixelRatioMax, 2);
    if (pr !== this.renderer.getPixelRatio()) {
      this.pixelRatio = pr;
      this.renderer.setPixelRatio(pr);
    }
    this.setzeAnsicht(this.ansicht.breite, this.ansicht.hoehe, this.ansicht.modus);
  }

  /**
   * Ausschnitt vergroessern (z. B. Foto: Schmuckbereich), fokus = { x, y, zoom }
   * mit Mittelpunkt in Buehnenpixeln und zoom >= 1; null = ganzes Bild.
   */
  setzeFokus(fokus) {
    this.fokus = fokus && fokus.zoom > 1.01 ? { x: fokus.x, y: fokus.y, zoom: Math.min(4, fokus.zoom) } : null;
    this.aktualisiereKamera();
  }

  /** Bildschirmkoordinate (clientX/Y) -> Buehnenpunkt { x, y } in Pixeln. */
  bildschirmZuBuehne(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const u = (clientX - rect.left) / Math.max(1, rect.width);
    const v = (clientY - rect.top) / Math.max(1, rect.height);
    const s = this.sicht;
    return { x: s.links + u * (s.rechts - s.links), y: s.oben - v * (s.oben - s.unten) };
  }

  /* -------------------------------------------------------------------- */
  /* Schmuck                                                               */
  /* -------------------------------------------------------------------- */

  /**
   * Schmuck setzen (ersetzt das vorherige Stueck mit weicher Ueberblendung).
   * modell: SchmuckModell oder null. finger: fuer Ringe ('daumen'|'zeige'|'mittel'|'ring'|'klein').
   * freigeben: modell.dispose() nach dem Ausblenden aufrufen (Standard true).
   */
  setzeSchmuck(modell, { finger, freigeben = true } = {}) {
    if (finger) this.finger = finger;
    const aktuell = this.eintraege.find((e) => !e.aus);
    if (aktuell && modell && aktuell.modell === modell) return;
    if (aktuell) aktuell.aus = true;
    if (!modell || !modell.gruppe) {
      this.aktualisiereFunkenQuellen();
      return;
    }
    // Ein noch ausblendendes Exemplar desselben Modells sofort entfernen
    const alt = this.eintraege.find((e) => e.modell === modell);
    if (alt) this.entferneEintrag(alt, false);
    this.eintraege.push(this.baueEintrag(modell, freigeben));
    this.aktualisiereFunkenQuellen();
  }

  setzeFinger(key) {
    if (key) this.finger = key;
  }

  /** Feinjustierung: skala (Faktor), versatzMm (THREE.Vector3 im Modellrahmen). */
  setzeAnpassung({ skala, versatzMm } = {}) {
    if (Number.isFinite(skala) && skala > 0) this.anpassung.skala = klemme(skala, 0.5, 2);
    if (versatzMm) this.anpassung.versatz.set(versatzMm.x || 0, versatzMm.y || 0, versatzMm.z || 0);
  }

  baueEintrag(modell, freigeben) {
    const art = modell.art;
    const gruppe = modell.gruppe;
    if (gruppe.parent) gruppe.parent.remove(gruppe);
    gruppe.updateMatrixWorld(true);
    // Huellkugel im Modellrahmen (mm) fuer die Schattenkamera
    const box = new THREE.Box3().setFromObject(gruppe);
    const kugel = box.isEmpty() ? new THREE.Sphere(new THREE.Vector3(), 20) : box.getBoundingSphere(new THREE.Sphere());

    const plaetze = art === 'ohrringe'
      ? [{ key: 'ohrR', spiegel: false }, { key: 'ohrL', spiegel: true }]
      : [{ key: art, spiegel: false }];
    // Erst alle Klone anlegen, dann Materialien tauschen (Klone sollen die Originalmaterialien sehen)
    const gruppen = plaetze.map((p, i) => (i === 0 ? gruppe : gruppe.clone(true)));
    const instanzen = plaetze.map((p, i) => this.baueInstanz(modell, gruppen[i], i === 0, p));
    return {
      modell,
      art,
      freigeben,
      kugel,
      instanzen,
      ein: 0,
      aus: false,
      finger: this.finger,
      fingerBlende: 1
    };
  }

  baueInstanz(modell, gruppe, original, { key, spiegel }) {
    const wurzel = new THREE.Group();
    wurzel.name = `schmuck-${key}`;
    wurzel.matrixAutoUpdate = false;
    wurzel.visible = false;
    wurzel.add(gruppe);

    // Eigene Materialkopien je Exemplar: unabhaengige Deckkraft (Ein-/Ausblenden),
    // Programme werden geteilt (gleicher onBeforeCompile/Cache-Schluessel)
    const kopien = new Map();
    const originale = [];
    const steine = [];
    // Ebenenblende: Kette blendet hinter dem Hals weich aus, der Ring hinter
    // seiner Achse (sonst stehen Enden als Haken ueber, wo der Verdecker die
    // echte Kontur nicht genau trifft)
    const nacken = modell.art === 'kette' || modell.art === 'ring'
      ? { nackenEbene: { value: new THREE.Vector4(0, 0, 1, -1e9) }, nackenBreite: { value: 1 } }
      : null;
    // Armband: Anhaenger haengen meist genau an der Silhouette des Arms; ein etwas
    // zu breiter Verdecker schnitte sie sonst halb ab. Sie werden fuer den Tiefentest
    // etwas zur Kamera geschoben (orthografisch: im Bild unveraendert).
    const vorn = modell.art === 'armband' ? { tiefeVorschub: { value: 0 } } : null;
    const kopienVorn = new Map();
    const pendelNetze = new Set();
    if (vorn) {
      for (const p of modell.pendel || []) {
        const pfad = original ? null : pfadZu(modell.gruppe, p.knoten);
        const knoten = original ? p.knoten : pfad ? folgePfad(gruppe, pfad) : null;
        if (knoten) knoten.traverse((o) => { if (o.isMesh) pendelNetze.add(o); });
      }
    }
    const kopiere = (m, vorne = false) => {
      if (!m) return m;
      const karte = vorne ? kopienVorn : kopien;
      let k = karte.get(m);
      if (!k) {
        k = m.clone();
        k.onBeforeCompile = m.onBeforeCompile;
        k.customProgramCacheKey = m.customProgramCacheKey;
        k.userData = m.userData; // geteilt: Uniforms des Schmuckmoduls
        k.transparent = true;
        k.depthWrite = true;
        if (nacken) patcheNacken(k, nacken);
        if (vorne) patcheVorschub(k, vorn);
        if (this.weichMoeglich) this.weich.patche(k);
        karte.set(m, k);
      }
      return k;
    };
    gruppe.traverse((o) => {
      if (!o.isMesh) return;
      originale.push([o, o.material]);
      const istStein = Array.isArray(o.material) ? o.material.some((m) => m.userData?.stein) : !!o.material?.userData?.stein;
      const vorne = pendelNetze.has(o);
      o.material = Array.isArray(o.material) ? o.material.map((m) => kopiere(m, vorne)) : kopiere(o.material, vorne);
      o.castShadow = false;
      o.receiveShadow = false;
      if (istStein) {
        if (!o.geometry.boundingSphere) o.geometry.computeBoundingSphere();
        steine.push(o);
      }
    });

    // Pendel (beim Klon ueber den Pfad im Baum zuordnen)
    let pendelListe = modell.pendel || [];
    if (!original) {
      pendelListe = pendelListe.map((p) => {
        const pfad = pfadZu(modell.gruppe, p.knoten);
        const knoten = pfad ? folgePfad(gruppe, pfad) : null;
        return knoten ? { ...p, knoten } : null;
      }).filter(Boolean);
    }
    const inst = {
      key,
      spiegel,
      original,
      wurzel,
      gruppe,
      kopien: [...kopien.values(), ...kopienVorn.values()],
      grundDeckkraft: [...kopien.keys(), ...kopienVorn.keys()].map((m) => m.opacity),
      vorn,
      originale,
      steine,
      pendel: new PendelSystem(pendelListe, modell.art),
      feder: new Feder3(12, 0.55),
      sicht: 0,
      deckkraft: 0,
      gesetzteDeckkraft: -1,
      hatLage: false,
      skalaGl: 0,
      position: new THREE.Vector3(),
      pxProMm: 1,
      letzteQuat: new THREE.Quaternion(),
      drehung: 0,
      versatz: new THREE.Vector3(),
      ziel: new THREE.Vector3(),
      weite: 1,      // Armband: Skala der Schlaufe in X (weiteZ in Z)
      weiteZ: 1,
      nacken
    };
    this.szene.add(wurzel);
    return inst;
  }

  entferneEintrag(e, ausListe = true) {
    for (const inst of e.instanzen) {
      inst.pendel.dispose();
      for (const [o, m] of inst.originale) o.material = m;
      for (const k of inst.kopien) k.dispose();
      inst.wurzel.remove(inst.gruppe);
      inst.wurzel.removeFromParent();
      if (!inst.original) {
        // Klon: eigene Instanzpuffer freigeben, Geometrien gehoeren dem Modell
        inst.gruppe.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
      }
    }
    e.instanzen.length = 0;
    if (e.freigeben && e.modell && typeof e.modell.dispose === 'function') e.modell.dispose();
    const i = this.eintraege.indexOf(e);
    if (i >= 0) this.eintraege.splice(i, 1);
    if (ausListe) this.aktualisiereFunkenQuellen();
  }

  aktualisiereFunkenQuellen() {
    const quellen = [];
    for (const e of this.eintraege) {
      if (e.aus) continue;
      for (const inst of e.instanzen) {
        for (const mesh of inst.steine) {
          quellen.push({ mesh, radius: mesh.geometry.boundingSphere?.radius || 1, deckkraft: () => inst.deckkraft });
        }
      }
    }
    this.funkeln.setzeQuellen(quellen);
  }

  /* -------------------------------------------------------------------- */
  /* Frame                                                                 */
  /* -------------------------------------------------------------------- */

  /** Tracking-Ergebnis uebernehmen: Anker, Verdecker, Physik, Licht. */
  aktualisiere(ergebnis, dtSek = 1 / 30) {
    if (this.entsorgt) return;
    // Physik in hoechstens 0,1-s-Schritten; Ein-/Ausblenden nach der echten Zeit
    // (auf sehr langsamen Geraeten oder im Foto sonst nach Sekunden noch halb blass)
    const dtBlende = klemme(Number.isFinite(dtSek) ? dtSek : 1 / 30, 0, 1);
    const dt = Math.min(dtBlende, 0.1);
    this.letztesDt = dt;
    const erg = ergebnis || null;
    if (erg && erg.schwerkraft && erg.schwerkraft.lengthSq() > 1e-6) this.schwerkraft.copy(erg.schwerkraft).normalize();
    else this.schwerkraft.copy(_SCHWERKRAFT);

    this.aktualisiereLicht(dt);

    // Verdecker
    this.verdecker.aktualisiere(erg ? erg.verdecker : null, this.verdeckerSkala);

    // Schmuck
    let sichtbarMax = 0;
    let kugelN = 0;
    let kugelR = 0;
    _mitte.set(0, 0, 0);
    let ppmSchatten = 1;
    let bewegung = 0;
    for (let i = this.eintraege.length - 1; i >= 0; i--) {
      const e = this.eintraege[i];
      if (e.aus) e.ein -= dtBlende / AUSBLENDEN_S;
      else e.ein = Math.min(1, e.ein + dtBlende / EINBLENDEN_S);
      if (e.aus && e.ein <= 0) {
        this.entferneEintrag(e);
        continue;
      }
      // Fingerwechsel: kurz aus-, dann am neuen Finger einblenden
      if (e.art === 'ring' && e.finger !== this.finger) {
        e.fingerBlende -= dtBlende / FINGER_AUS_S;
        if (e.fingerBlende <= 0) {
          e.fingerBlende = 0;
          e.finger = this.finger;
          for (const inst of e.instanzen) {
            inst.skalaGl = 0;
            inst.pendel.zuruecksetzen();
          }
        }
      } else {
        e.fingerBlende = Math.min(1, e.fingerBlende + dtBlende / FINGER_EIN_S);
      }
      const blende = glatt(klemme(e.ein, 0, 1)) * glatt(e.fingerBlende);
      for (const inst of e.instanzen) {
        this.platziere(e, inst, erg, dt, blende);
        const d = inst.deckkraft;
        if (d > 0.01) {
          sichtbarMax = Math.max(sichtbarMax, d);
          // Huellkugel in Buehnenpixeln
          _v.copy(e.kugel.center).applyMatrix4(inst.wurzel.matrix);
          const r = e.kugel.radius * inst.wurzel.matrix.getMaxScaleOnAxis();
          if (kugelN === 0) {
            _mitte.copy(_v);
            kugelR = r;
          } else {
            // kleinste Kugel um beide (Ohrringe: zwei Exemplare)
            const abstand = _mitte.distanceTo(_v);
            if (abstand + kugelR <= r) {
              _mitte.copy(_v);
              kugelR = r;
            } else if (abstand + r > kugelR) {
              const neuR = (abstand + kugelR + r) / 2;
              _mitte.lerp(_v, (neuR - kugelR) / abstand);
              kugelR = neuR;
            }
          }
          kugelN++;
          ppmSchatten = inst.pxProMm;
          bewegung = Math.max(bewegung, inst.drehung);
        }
      }
    }

    // Schattenflaechen nur bei sichtbarem Schmuck
    const schattenAn = this.q.schatten > 0 && sichtbarMax > 0.01;
    let flaechen = schattenAn && erg ? this.waehleSchattenflaechen(erg.schattenflaechen) : null;
    let flaechenSkala = 1;
    if (schattenAn && erg && (!flaechen || flaechen.length === 0)) {
      // Keine eigenen Schattenflaechen: Verdecker (knapp vergroessert) empfangen den Schatten
      flaechen = erg.verdecker;
      flaechenSkala = 1.03;
    }
    this.empfaenger.aktualisiere(flaechen, flaechenSkala);
    this.empfaengerMaterial.opacity = this.empfaengerMaterial.userData.grundDeckkraft * sichtbarMax;

    // Schaerfeangleich: Bereich des Schmucks (Huellkugel) und Unschaerfe dort
    const wb = this.wzBereich;
    wb.aktiv = kugelN > 0;
    if (wb.aktiv) {
      wb.x = _mitte.x;
      wb.y = _mitte.y;
      wb.r = kugelR;
      if (this.wz) this.schaerfe.aktualisiere(this.quelle, wb.x, wb.y, dtBlende);
    }
    this.schatten.setzeAktiv(schattenAn);
    if (schattenAn && kugelN > 0) this.schatten.setzeBereich(_mitte, kugelR, ppmSchatten);

    this.funkeln.aktualisiere(dt, bewegung);
  }

  /** Anker fuer ein Exemplar aus dem Ergebnis holen. */
  holeAnker(erg, e, inst) {
    const a = erg && erg.anker;
    if (!a) return null;
    switch (e.art) {
      case 'ring': return a.ring ? a.ring[e.finger] || null : null;
      case 'armband': return a.armband || null;
      case 'kette': return a.kette || null;
      case 'ohrringe': return a[inst.key] || null;
      default: return a[e.art] || null;
    }
  }

  waehleSchattenflaechen(sf) {
    if (!sf) return null;
    if (Array.isArray(sf)) return sf;
    // Tracking liefert fuer die Hand je Art eigene Flaechen ({ ring, armband })
    for (const e of this.eintraege) if (!e.aus) return sf[e.art] || null;
    return null;
  }

  /** Lage, Skala, Deckkraft und Physik eines Exemplars. */
  platziere(e, inst, erg, dt, blende) {
    const anker = this.holeAnker(erg, e, inst);
    const gueltig = anker && anker.position && anker.quaternion && anker.pxProMm > 0;
    if (gueltig) {
      const sichtbar = anker.sichtbar ?? 1;
      if (inst.sicht < 0.02) inst.pendel.zuruecksetzen(); // Wiederauftauchen ohne Ruck
      inst.sicht = sichtbar;
      this.berechneMatrix(e, inst, anker, erg, dt, blende);
      inst.hatLage = true;
    } else {
      // Anker fehlt: letzte Lage halten, weich ausblenden
      inst.sicht *= Math.exp(-dt / 0.15);
      if (inst.sicht < 0.01) inst.sicht = 0;
    }
    const d = inst.hatLage ? blende * inst.sicht : 0;
    inst.deckkraft = d;
    inst.wurzel.visible = d > 0.01;
    if (Math.abs(d - inst.gesetzteDeckkraft) > 0.002) {
      for (let i = 0; i < inst.kopien.length; i++) inst.kopien[i].opacity = inst.grundDeckkraft[i] * d;
      inst.gesetzteDeckkraft = d;
    }
    if (gueltig && inst.wurzel.visible) {
      inst.pendel.aktualisiere(dt, anker.position, anker.pxProMm, this.schwerkraft);
    }
  }

  berechneMatrix(e, inst, anker, erg, dt, blende) {
    const masse = (erg && erg.masse) || {};
    const mm = e.modell.masse || {};
    const ppm = anker.pxProMm;
    let s = ppm;
    let fx = 1;
    let fz = 1;
    inst.versatz.copy(this.anpassung.versatz);

    if (e.art === 'ring') {
      // Innenradius genau auf den Fingerradius (Ring sitzt satt)
      const rPx = masse.fingerRadiusPx ? masse.fingerRadiusPx[e.finger] : 0;
      const innen = mm.innenRadiusMm || 8.5;
      if (rPx > 0) s = klemme(rPx / innen, ppm * 0.6, ppm * 1.6);
    } else if (e.art === 'kette') {
      const norm = mm.halsRadiusMm || KETTE_NORM_MM;
      const hals = masse.halsRadiusMm || norm;
      fx = fz = klemme(hals / norm, 0.8, 1.25);
    }

    // Skala gegen Pumpen leicht glaetten (Tracking glaettet bereits)
    if (!(inst.skalaGl > 0)) inst.skalaGl = s;
    else inst.skalaGl += (s - inst.skalaGl) * (1 - Math.exp(-dt / 0.08));
    s = inst.skalaGl * this.anpassung.skala;
    // Einblenden mit kaum merklichem Setzen (97 % -> 100 %)
    s *= 0.97 + 0.03 * blende;

    if (e.art === 'armband') {
      this.armbandSitz(e, inst, anker, masse, mm, s, dt);
      if (inst.vorn) inst.vorn.tiefeVorschub.value = ANHAENGER_VORSCHUB_MM * s;
      fx = inst.weite;
      fz = inst.weiteZ;
    }

    _s.set((inst.spiegel ? -1 : 1) * s * fx, s, s * fz);
    _m.compose(anker.position, anker.quaternion, _s);
    _t.makeTranslation(inst.versatz.x, inst.versatz.y, inst.versatz.z);
    _m.multiply(_t);
    const w = inst.wurzel;
    w.matrix.copy(_m);
    w.matrixWorldNeedsUpdate = true;
    w.updateMatrixWorld(true);
    if (inst.nacken && e.art === 'kette') this.setzeNackenEbene(inst, mm, s);
    else if (inst.nacken) this.setzeRingEbene(inst, mm, s);

    // Drehgeschwindigkeit (fuer Funkeln), 0..1
    if (!inst.hatLage) inst.letzteQuat.copy(anker.quaternion);
    const winkel = inst.letzteQuat.angleTo(anker.quaternion);
    inst.letzteQuat.copy(anker.quaternion);
    const roh = dt > 0 ? klemme(winkel / dt / 2.5, 0, 1) : 0;
    inst.drehung += (roh - inst.drehung) * (1 - Math.exp(-dt / 0.2));
    inst.pxProMm = s;
    inst.position.copy(anker.position);
  }

  /**
   * Ebene der Nackenblende (Buehnenraum) aus der Modellmatrix: Kettenteile
   * hinter z = -NACKEN_ANTEIL * Halsradius (Modellrahmen) blenden ueber
   * NACKEN_BREITE_MM aus. So enden die Kettenenden nicht als Haken auf dem
   * Kragen, wo die Kette hinter den Hals laeuft.
   */
  setzeNackenEbene(inst, mm, s) {
    const R = mm.halsRadiusMm || KETTE_NORM_MM;
    const e = inst.wurzel.matrixWorld.elements;
    _v.set(e[8], e[9], e[10]).normalize();                         // Modell-Z in der Buehne
    _p.set(0, 0, -NACKEN_ANTEIL * R).applyMatrix4(inst.wurzel.matrixWorld);
    inst.nacken.nackenEbene.value.set(_v.x, _v.y, _v.z, _v.dot(_p));
    inst.nacken.nackenBreite.value = Math.max(0.5, NACKEN_BREITE_MM * s);
  }

  /**
   * Ring: Teile, die mehr als RING_BLENDE[0] * Aussenradius hinter der Ringachse
   * (von der Kamera aus) liegen, blenden ueber RING_BLENDE[1] * Aussenradius aus.
   * Sie liegen hinter dem Finger; zeigt der Fingerverdecker dessen Kontur nicht
   * genau, blieben sie sonst als Haken neben dem Finger sichtbar.
   */
  setzeRingEbene(inst, mm, s) {
    const m = inst.wurzel.matrixWorld;
    const e = m.elements;
    _v.set(e[4], e[5], e[6]).normalize();                 // Ringachse (Modell-Y) in der Buehne
    _p.set(0, 0, 1).addScaledVector(_v, -_v.z);           // Blickrichtung quer zur Achse
    if (_p.lengthSq() < 1e-4) {                           // Achse zeigt zur Kamera: keine Blende
      inst.nacken.nackenEbene.value.set(0, 0, 1, -1e9);
      return;
    }
    _p.normalize();
    _g.setFromMatrixPosition(m);
    const R = ((mm.innenRadiusMm || 8.5) + 2) * s;
    inst.nacken.nackenEbene.value.set(_p.x, _p.y, _p.z, _p.dot(_g) - RING_BLENDE[0] * R);
    inst.nacken.nackenBreite.value = Math.max(0.5, RING_BLENDE[1] * R);
  }

  /**
   * Armband: Schlaufe darf das Handgelenk nicht schneiden (ggf. X/Z weiten)
   * und liegt durch die Schwerkraft oben auf (Versatz nach unten). Ergebnis
   * in inst.versatz (mm, Modellrahmen); eine Feder sorgt fuer Traegheit.
   */
  armbandSitz(e, inst, anker, masse, mm, s, dt) {
    const rad = masse.handgelenkRadienPx;
    const innen = mm.innenRadienMm || { x: 30, z: 24 };
    inst.ziel.set(0, 0, 0);
    inst.weite = 1;
    inst.weiteZ = 1;
    _q.copy(anker.quaternion).invert();
    if (rad && rad.quer > 0 && rad.tiefe > 0) {
      const a = rad.quer * 1.02;
      const b = rad.tiefe * 1.02;
      if (mm.starr) {
        // Armreif: feste Form, zu enge Schlaufe nur weiten
        inst.weite = Math.max(1, a / (innen.x * s), b / (innen.z * s));
        inst.weiteZ = inst.weite;
      } else {
        // Kette, Perlen: schmiegt sich mit etwas Spiel ans Handgelenk an (sonst steht
        // die Schlaufe seitlich ab, und ihre Rueckseite liegt sichtbar auf der Haut).
        // Je Achse eigener Faktor, das Verhaeltnis begrenzt (Perlen bleiben rund).
        const wx = (a * ARMBAND_SPIEL) / (innen.x * s);
        const wz = (b * ARMBAND_SPIEL) / (innen.z * s);
        const m = Math.max(wx, wz);
        inst.weite = Math.max(wx, m * ARMBAND_VERZERRUNG_MIN);
        inst.weiteZ = Math.max(wz, m * ARMBAND_VERZERRUNG_MIN);
      }
      const A = innen.x * s * inst.weite;
      const B = innen.z * s * inst.weiteZ;
      // Schwerkraft im Ankerrahmen, projiziert auf die Schlaufenebene
      _g.copy(this.schwerkraft).applyQuaternion(_q);
      const l = Math.hypot(_g.x, _g.z);
      // auch bei geweiteter Schlaufe: der verbleibende Spielraum liegt oben auf
      if (l > 1e-3) {
        const dx = _g.x / l;
        const dz = _g.z / l;
        let lo = 0;
        let hi = Math.max(A, B);
        for (let i = 0; i < 12; i++) {
          const mitte = (lo + hi) / 2;
          if (passtHinein(a, b, A, B, dx, dz, mitte)) lo = mitte;
          else hi = mitte;
        }
        const t = lo * glattStufe(0.05, 0.6, l) / s; // mm
        inst.ziel.set(dx * t, 0, dz * t);
      }
    }
    // Traegheit: Feder, angeregt durch die Ankerbeschleunigung (Modellrahmen)
    _v.copy(inst.pendel.bewegung.a).multiplyScalar(-0.15).applyQuaternion(_q);
    _v.y = 0;
    inst.versatz.add(inst.feder.schritt(inst.ziel, dt, _v));
  }

  aktualisiereLicht(dt) {
    const l = this.licht;
    const neu = l.aktualisiere(dt);
    if (l.gemessen) {
      // Belichtung: dunkle Raeume -> Schmuck dunkler, helle -> etwas heller
      const ziel = this.belichtungBasis * klemme(Math.pow(l.faktor, 0.5), 0.72, 1.12);
      this.belichtungZiel = ziel;
      this.umgebung.setzeLicht(l.faktor, l.farbe);
      this.schatten.setzeLicht(l.faktor, l.farbe);
    }
    const r = this.renderer;
    r.toneMappingExposure += (this.belichtungZiel - r.toneMappingExposure) * (1 - Math.exp(-dt / 0.4));
    this.umgebung.aktualisiere(dt, neu || l.version !== this.lichtVersion);
    this.lichtVersion = l.version;
  }

  /** Laufendes Einblenden sofort abschliessen (Foto: Schmuck gleich voll zeigen). */
  blendeSofort() {
    for (const e of this.eintraege) {
      if (e.aus) continue;
      e.ein = 1;
      if (e.art !== 'ring' || e.finger === this.finger) e.fingerBlende = 1;
    }
  }

  /** Zeichnen. */
  rendere() {
    if (this.entsorgt || this.verloren) return;
    const r = this.renderer;
    if (this.quelle && this.quelle.art === 'canvas' && !this.quelle.statisch && this.hgTextur) this.hgTextur.needsUpdate = true;
    if (this.umgebung.faellig && this.umgebung.erzeuge()) this.szene.environment = this.umgebung.textur;

    if (this.schatten.aktiv) this.schatten.zeichne(r, this.szene, this.versteckeFuerSchatten, this.zeigeNachSchatten);
    const weich = this.weich.aktiv && this.weich.ziel;
    if (weich) {
      r.setRenderTarget(this.weich.ziel);
      r.clear(true, true, false);
      r.render(this.szeneVerdecker, this.kamera);
      r.setRenderTarget(null);
    }
    if (this.wz) {
      this.zeichneMitAngleich(r, weich);
    } else {
      r.clear(true, true, true);
      r.render(this.szeneHintergrund, this.kamera);
      if (!weich) r.render(this.szeneVerdecker, this.kamera);
      r.render(this.szene, this.kamera);
    }
    this.setzeZaun();
  }

  /**
   * Schmuck (mit Verdeckern, Schatten, Funkeln) in das eigene Ziel, dann das
   * Kamerabild und darueber der Schmuck, so weich wie das Kamerabild dort.
   * Nur das Rechteck um den Schmuck wird zusammengesetzt.
   */
  zeichneMitAngleich(r, weich) {
    const wz = this.wz;
    const b = this.wzBereich;
    const groesse = r.getDrawingBufferSize(_puffer);
    if (b.aktiv) {
      // grosse Ziele (Aufnahme, Desktop mit hoher Pixeldichte): weniger Abtastungen
      const ziel = wz.bereite(groesse.x, groesse.y, groesse.x * groesse.y > ABTASTUNG_GROSS_PX ? 2 : 4);
      r.setRenderTarget(ziel);
      r.clear(true, true, true);
      if (!weich) r.render(this.szeneVerdecker, this.kamera);
      r.render(this.szene, this.kamera);
      r.setRenderTarget(null);
    }
    r.clear(true, true, true);
    r.render(this.szeneHintergrund, this.kamera);
    if (!b.aktiv) return;
    const k = this.kamera;
    const pxGeraet = groesse.x / Math.max(1e-6, k.right - k.left);
    const sigma = this.schaerfe.geraeteSigma(pxGeraet);
    this.wzSigma = sigma;
    wz.uniforms.sigma.value = sigma;
    const halb = b.r * 1.3 + (3 * sigma + 6) / pxGeraet;
    wz.setzeBereich(b.x, b.y, halb, halb, 0);
    r.render(wz.szene, k);
  }

  /**
   * GPU-Zaun nach dem Zeichnen (WebGL2): Die App fragt ohne zu blockieren ab,
   * ob die Grafikkarte das Bild fertig hat, und plant erst dann den naechsten
   * Schritt. Sonst staut sich auf langsamen Geraeten Arbeit in der GPU, und die
   * Oberflaeche (Uebergaenge, Tippen) bekommt trotz Pause keine Bilder.
   */
  setzeZaun() {
    const gl = this.renderer.getContext();
    if (typeof gl.fenceSync !== 'function') return;
    if (this.zaun) gl.deleteSync(this.zaun);
    this.zaun = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
    gl.flush();
  }

  /** Hat die GPU das zuletzt gezeichnete Bild fertig? (true ohne WebGL2-Zaun) */
  gpuFertig() {
    if (!this.zaun || this.entsorgt || this.verloren) return true;
    const gl = this.renderer.getContext();
    if (gl.getSyncParameter(this.zaun, gl.SYNC_STATUS) !== gl.SIGNALED) return false;
    gl.deleteSync(this.zaun);
    this.zaun = null;
    return true;
  }

  /* -------------------------------------------------------------------- */
  /* Aufnahme                                                              */
  /* -------------------------------------------------------------------- */

  /**
   * JPEG des sichtbaren Bildausschnitts (Kamerabild + Schmuck).
   * breite: Zielbreite in Pixeln (Standard: Ausschnitt in Kamerapixeln, mind. 1080)
   * wasserzeichen: false | 'ARLISE' | { text, schrift, farbe }
   */
  async aufnahme({ breite, wasserzeichen = false, jpegQualitaet = 0.92 } = {}) {
    if (this.entsorgt) throw new Error('Buehne entsorgt');
    const r = this.renderer;
    const W = this.quelle ? this.quelle.W : this.ansicht.breite;
    const H = this.quelle ? this.quelle.H : this.ansicht.hoehe;
    const s = this.sicht;
    const x0 = Math.max(s.links, 0);
    const x1 = Math.min(s.rechts, W);
    const y0 = Math.max(s.unten, 0);
    const y1 = Math.min(s.oben, H);
    const bw = Math.max(1, x1 - x0);
    const bh = Math.max(1, y1 - y0);
    const gl = r.getContext();
    const maxGl = Math.min(4096, gl.getParameter(gl.MAX_RENDERBUFFER_SIZE) || 4096, (gl.getParameter(gl.MAX_VIEWPORT_DIMS) || [4096])[0]);
    let ausB = Math.round(breite || Math.max(1080, bw));
    let ausH = Math.round(ausB * bh / bw);
    const zuGross = Math.max(ausB, ausH) / maxGl;
    if (zuGross > 1) {
      ausB = Math.floor(ausB / zuGross);
      ausH = Math.floor(ausH / zuGross);
    }

    const ziel = document.createElement('canvas');
    ziel.width = ausB;
    ziel.height = ausH;
    const ctx = ziel.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, ausB, ausH);

    // Zeichenpuffer kurz auf Zielgroesse, rendern, kopieren, zuruecksetzen
    const prAlt = r.getPixelRatio();
    const groesseAlt = r.getSize(new THREE.Vector2());
    const radiusAlt = this.weich.uniforms.verdeckParam.value.y;
    try {
      r.setPixelRatio(1);
      r.setSize(ausB, ausH, false);
      this.setzeFrustum(x0, x1, y0, y1);
      if (this.weich.aktiv) {
        this.weich.bereite(ausB, ausH);
        this.weich.setzeRadius(radiusAlt * (ausB / Math.max(1, (x1 - x0) * s.cssProPx * prAlt)));
      }
      this.rendere();
      ctx.drawImage(r.domElement, 0, 0, ausB, ausH);
    } finally {
      r.setPixelRatio(prAlt);
      r.setSize(groesseAlt.x, groesseAlt.y, false);
      this.aktualisiereKamera();
      this.bereiteWeich();
      this.rendere();
    }

    if (wasserzeichen) this.zeichneWasserzeichen(ctx, ausB, ausH, wasserzeichen);
    return new Promise((ok, fehler) => {
      ziel.toBlob((blob) => (blob ? ok(blob) : fehler(new Error('JPEG fehlgeschlagen'))), 'image/jpeg', jpegQualitaet);
    });
  }

  /** Dezenter Shopname unten rechts: feine Versalien mit Laufweite und Haarlinie. */
  zeichneWasserzeichen(ctx, b, h, opt) {
    const o = typeof opt === 'string' ? { text: opt } : (opt === true ? {} : opt);
    const text = String(o.text || 'ARLISE').toUpperCase();
    const kurz = Math.min(b, h);
    const groesse = Math.max(11, Math.round(kurz * 0.024));
    const laufweite = groesse * 0.42;
    const schrift = o.schrift || this.schriftFamilie();
    ctx.save();
    ctx.font = `400 ${groesse}px ${schrift}`;
    ctx.textBaseline = 'alphabetic';
    let breiteText = 0;
    const zeichen = [...text];
    const breiten = zeichen.map((z) => ctx.measureText(z).width);
    for (const w of breiten) breiteText += w;
    breiteText += laufweite * (zeichen.length - 1);
    const rand = Math.round(kurz * 0.045);
    let x = b - rand - breiteText;
    const y = h - rand;
    // Farbe nach Untergrund: auf hellem Grund warmes Schwarz, sonst Weiss
    const linie = groesse * 1.8;
    const links = Math.max(0, Math.floor(x - groesse * 0.9 - linie));
    const hell = this.mittlereHelligkeit(ctx, links, Math.max(0, Math.floor(y - groesse)), Math.ceil(b - rand - links), Math.ceil(groesse * 1.2));
    const dunkelSchrift = hell > 0.62;
    ctx.fillStyle = o.farbe || (dunkelSchrift ? 'rgba(30, 27, 24, 0.78)' : 'rgba(255, 255, 255, 0.9)');
    ctx.shadowColor = dunkelSchrift ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.28)';
    ctx.shadowBlur = groesse * 0.6;
    zeichen.forEach((z, i) => {
      ctx.fillText(z, x, y);
      x += breiten[i] + laufweite;
    });
    // Haarlinie vor dem Namen
    const dicke = Math.max(1, groesse / 16);
    ctx.fillRect(b - rand - breiteText - groesse * 0.9 - linie, y - groesse * 0.36 - dicke / 2, linie, dicke);
    ctx.restore();
  }

  /** Mittlere Helligkeit (0..1, sRGB) eines Bereichs im 2D-Kontext. */
  mittlereHelligkeit(ctx, x, y, b, h) {
    try {
      const d = ctx.getImageData(x, y, Math.max(1, b), Math.max(1, h)).data;
      let s = 0;
      for (let i = 0; i < d.length; i += 4) s += 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      return s / (255 * (d.length / 4));
    } catch (e) {
      return 0.5;
    }
  }

  schriftFamilie() {
    const ersatz = '"Helvetica Neue", Helvetica, Arial, sans-serif';
    try {
      const stil = getComputedStyle(this.canvas);
      const titel = stil.getPropertyValue('--anprobe-schrift-titel').trim();
      if (titel && titel !== 'inherit') return titel;
      return stil.fontFamily || ersatz;
    } catch (e) {
      return ersatz;
    }
  }

  /* -------------------------------------------------------------------- */

  /**
   * Alles freigeben. kontextFreigeben (Standard true) gibt auch den
   * WebGL-Kontext sofort frei (Canvas danach nicht wiederverwenden).
   */
  dispose({ kontextFreigeben = true } = {}) {
    if (this.entsorgt) return;
    if (this.zaun && !this.verloren) {
      try { this.renderer.getContext().deleteSync(this.zaun); } catch { /* egal */ }
    }
    this.zaun = null;
    this.entsorgt = true;
    for (const e of [...this.eintraege]) this.entferneEintrag(e, false);
    this.funkeln.dispose();
    this.verdecker.material.dispose();
    this.verdecker.netzMaterial.dispose();
    this.verdecker.dispose();
    this.empfaenger.dispose();
    this.weich.dispose();
    this.wz?.dispose();
    this.schaerfe.dispose();
    this.schatten.dispose();
    this.umgebung.dispose();
    this.licht.dispose();
    this.hgTextur?.dispose();
    this.hgTextur = null;
    this.hintergrund.geometry.dispose();
    this.hgMaterial.dispose();
    this.szene.environment = null;
    this.szene.clear();
    this.szeneVerdecker.clear();
    this.szeneHintergrund.clear();
    this.quelle = null;
    this.canvas.removeEventListener('webglcontextlost', this.beiKontextVerlust);
    this.renderer.dispose();
    if (kontextFreigeben && !this.verloren) this.renderer.forceContextLoss();
  }

  /**
   * Shader des aktuellen Schmucks vorab uebersetzen (parallel, falls der
   * Browser KHR_parallel_shader_compile kann), damit das erste Live-Bild nicht
   * ruckelt. Noch unsichtbare Exemplare werden dafuer kurz eingeblendet.
   */
  async vorbereiten() {
    if (this.entsorgt || this.verloren) return;
    const r = this.renderer;
    if (typeof r.compileAsync !== 'function') return;
    const versteckt = [];
    for (const e of this.eintraege) {
      for (const inst of e.instanzen || []) {
        if (inst.wurzel && !inst.wurzel.visible) { inst.wurzel.visible = true; versteckt.push(inst.wurzel); }
      }
    }
    // Ohne KHR_parallel_shader_compile blockiert das Uebersetzen ohnehin: dann
    // synchron (noch im Ladezustand, statt mitten in der Anprobe)
    const parallel = r.extensions && typeof r.extensions.has === 'function' && r.extensions.has('KHR_parallel_shader_compile');
    let p = null;
    // Programme haengen vom Ziel ab (Tonemapping nur beim Zeichnen auf den
    // Bildschirm): Schmuck und Verdecker fuer das eigene Ziel uebersetzen
    const groesse = r.getDrawingBufferSize(_puffer);
    const ziel = this.wz ? this.wz.bereite(groesse.x, groesse.y, groesse.x * groesse.y > ABTASTUNG_GROSS_PX ? 2 : 4) : null;
    const weich = this.weich.aktiv && this.weich.ziel;
    const auftraege = [
      [this.szene, ziel],
      [this.szeneVerdecker, weich ? this.weich.ziel : ziel],
      [this.szeneHintergrund, null]
    ];
    if (this.wz) auftraege.push([this.wz.szene, null]);
    const altZiel = r.getRenderTarget();
    try {
      const warten = [];
      for (const [sz, z] of auftraege) {
        r.setRenderTarget(z);
        if (parallel) warten.push(r.compileAsync(sz, this.kamera));
        else r.compile(sz, this.kamera);
      }
      if (warten.length) p = Promise.all(warten);
    } finally {
      r.setRenderTarget(altZiel);
      for (const w of versteckt) w.visible = false;
    }
    if (p) await p;
  }
}

/**
 * Material um einen Tiefenvorschub erweitern: Ecken werden fuer den Tiefentest um
 * tiefeVorschub (Buehnenpixel) zur Kamera geschoben. Orthografische Kamera: das Bild
 * bleibt gleich, nur knappe Verdeckungen an Silhouetten fallen weg.
 */
function patcheVorschub(material, uniforms) {
  const vorher = material.onBeforeCompile;
  const basisSchluessel = material.customProgramCacheKey();
  material.onBeforeCompile = function (shader, renderer) {
    if (vorher) vorher.call(this, shader, renderer);
    Object.assign(shader.uniforms, uniforms);
    const vs = shader.vertexShader;
    if (!vs.includes('#include <project_vertex>')) return;
    shader.vertexShader = vs.replace('void main() {', 'uniform float tiefeVorschub;\nvoid main() {')
      .replace('#include <project_vertex>', `#include <project_vertex>
mvPosition.z += tiefeVorschub;
gl_Position = projectionMatrix * mvPosition;`);
  };
  material.customProgramCacheKey = () => `${basisSchluessel}|vorschub1`;
  material.needsUpdate = true;
}

/** Material (Kopie je Exemplar) um die Nackenblende erweitern; Programm wird geteilt. */
function patcheNacken(material, uniforms) {
  const vorher = material.onBeforeCompile;
  const basisSchluessel = material.customProgramCacheKey();
  material.onBeforeCompile = function (shader, renderer) {
    if (vorher) vorher.call(this, shader, renderer);
    Object.assign(shader.uniforms, uniforms);
    const vs = shader.vertexShader;
    const fs = shader.fragmentShader;
    if (!vs.includes('#include <project_vertex>') || !fs.includes('#include <tonemapping_fragment>')) return;
    shader.vertexShader = vs.replace('void main() {', 'varying vec3 vNackenWelt;\nvoid main() {')
      .replace('#include <project_vertex>', `#include <project_vertex>
{
  vec4 nw = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
    nw = instanceMatrix * nw;
  #endif
  vNackenWelt = ( modelMatrix * nw ).xyz;
}`);
    shader.fragmentShader = fs.replace('void main() {', 'uniform vec4 nackenEbene;\nuniform float nackenBreite;\nvarying vec3 vNackenWelt;\nvoid main() {')
      .replace('#include <tonemapping_fragment>', `gl_FragColor.a *= smoothstep( -nackenBreite, 0.0, dot( vNackenWelt, nackenEbene.xyz ) - nackenEbene.w );
	#include <tonemapping_fragment>`);
  };
  material.customProgramCacheKey = () => `${basisSchluessel}|nacken1`;
  material.needsUpdate = true;
}
