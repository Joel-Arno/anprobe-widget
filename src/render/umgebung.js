/**
 * Umgebungslicht fuer die Reflexionen des Schmucks.
 *
 * Studio: RoomEnvironment -> PMREM (einmalig). Liefert die klaren
 * Glanzlichter (Lichtflaechen), die Gold und Steine edel wirken lassen.
 *
 * Raum: eine kleine Umgebungsszene aus einer Kugel, die das stark
 * verkleinerte (= weichgezeichnete) Kamerabild zeigt, und den Lichtflaechen
 * des Studios. Sie wird alle ~0,5 s in geringer Aufloesung per
 * PMREM.fromScene neu erzeugt, damit Gold die Farben des echten Raums
 * spiegelt (warme Wand, Haut, Kleidung) und nicht wie im Fotostudio wirkt.
 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const EINSTELLUNG = {
  hoch: { studioGroesse: 256, raumGroesse: 128, intervall: 0.5 },
  mittel: { studioGroesse: 128, raumGroesse: 64, intervall: 1.0 },
  niedrig: { studioGroesse: 128, raumGroesse: 0, intervall: Infinity }
};

const KUGEL_VS = /* glsl */ `
varying vec3 vRichtung;
void main() {
  vRichtung = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Ebene Projektion des Bilds von vorn und hinten (stetig, keine Naht); dazu
// ein Studio-Grundton mit hellerer Decke, damit der Raum nie ganz dunkel ist.
const KUGEL_FS = /* glsl */ `
uniform sampler2D karte;
uniform float mischung;
uniform float staerke;
uniform vec3 grau;
varying vec3 vRichtung;
void main() {
  vec3 d = normalize(vRichtung);
  vec2 uv = vec2(0.5 + 0.47 * d.x, 0.5 + 0.47 * d.y);
  vec3 bild = texture2D(karte, uv).rgb;
  float oben = smoothstep(-0.6, 1.0, d.y);
  vec3 studio = grau * mix(0.35, 1.25, oben);
  // Bildfarben nach oben etwas aufhellen (Raumlicht kommt meist von oben)
  vec3 raum = bild * staerke * mix(0.75, 1.3, oben);
  gl_FragColor = vec4(mix(studio, raum, mischung), 1.0);
}
`;

export class Umgebung {
  /**
   * renderer: THREE.WebGLRenderer
   * qualitaet: 'hoch' | 'mittel' | 'niedrig' (niedrig: nur Studio)
   */
  constructor(renderer, { qualitaet = 'hoch', mischung = 0.62 } = {}) {
    this.renderer = renderer;
    this.einstellung = EINSTELLUNG[qualitaet] || EINSTELLUNG.hoch;
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.studio = new RoomEnvironment();
    this.studioZiel = this.pmrem.fromScene(this.studio, 0.04, 0.1, 100, { size: this.einstellung.studioGroesse });
    this.raumZiel = null;
    this.uhr = 0;
    this.faellig = false;
    this.kameraAn = this.einstellung.raumGroesse > 0;
    this.lichtFaktor = 1;
    this.lichtFarbe = new THREE.Color(1, 1, 1);
    this.baueRaumSzene(mischung);
  }

  /** Aktuelle Umgebungstextur (PMREM) fuer scene.environment. */
  get textur() {
    return (this.raumZiel || this.studioZiel).texture;
  }

  baueRaumSzene(mischung) {
    this.raumSzene = new THREE.Scene();
    this.karte = null;
    this.kugelMaterial = new THREE.ShaderMaterial({
      vertexShader: KUGEL_VS,
      fragmentShader: KUGEL_FS,
      uniforms: {
        karte: { value: null },
        mischung: { value: mischung },
        staerke: { value: 1.15 },
        grau: { value: new THREE.Color(0.55, 0.55, 0.55) }
      },
      side: THREE.BackSide,
      depthWrite: false
    });
    this.kugel = new THREE.Mesh(new THREE.SphereGeometry(40, 32, 16), this.kugelMaterial);
    this.kugel.renderOrder = -1;
    this.raumSzene.add(this.kugel);

    // Lichtflaechen wie im RoomEnvironment (gleiche Lage/Groesse/Staerke)
    this.studio.updateMatrixWorld(true);
    this.flaechen = [];
    this.studio.traverse((o) => {
      if (!o.isMesh || !o.material || !o.material.isMeshLambertMaterial) return;
      const st = o.material.emissiveIntensity;
      const m = new THREE.MeshBasicMaterial({ color: new THREE.Color(st, st, st), toneMapped: false });
      const f = new THREE.Mesh(o.geometry, m);
      f.matrixAutoUpdate = false;
      f.matrix.copy(o.matrixWorld);
      f.userData.staerke = st;
      this.raumSzene.add(f);
      this.flaechen.push(f);
    });
  }

  /** Stufe wechseln (Aufloesung/Intervall der Raumumgebung; Studio bleibt). */
  setzeQualitaet(stufe) {
    this.einstellung = EINSTELLUNG[stufe] || this.einstellung;
    this.setzeKameraAn(this.einstellung.raumGroesse > 0);
    this.faellig = this.kameraAn;
  }

  /** Kleines, bereits gespiegeltes Kamerabild-Canvas (vom Lichtschaetzer). */
  setzeKamerabild(canvas) {
    if (this.karte && this.karte.image === canvas) return;
    if (this.karte) this.karte.dispose();
    this.karte = canvas ? new THREE.CanvasTexture(canvas) : null;
    if (this.karte) {
      this.karte.colorSpace = THREE.SRGBColorSpace;
      this.karte.minFilter = THREE.LinearFilter;
      this.karte.generateMipmaps = false;
    }
    this.kugelMaterial.uniforms.karte.value = this.karte;
  }

  /** Helligkeit (relativ) und Farbstich des Raums fuer die Lichtflaechen. */
  setzeLicht(faktor, farbe) {
    this.lichtFaktor = faktor;
    if (farbe) this.lichtFarbe.copy(farbe);
  }

  setzeKameraAn(an) {
    this.kameraAn = !!an && this.einstellung.raumGroesse > 0;
    if (!this.kameraAn && this.raumZiel) {
      this.raumZiel.dispose();
      this.raumZiel = null;
    }
  }

  /** Zeit fortschreiben; markiert eine faellige Neuberechnung. */
  aktualisiere(dt, kamerabildNeu = true) {
    if (!this.kameraAn || !this.karte) return;
    this.uhr += dt;
    if (this.uhr >= this.einstellung.intervall && kamerabildNeu) this.faellig = true;
  }

  /**
   * Raumumgebung neu erzeugen (ausserhalb von renderer.render aufrufen).
   * Liefert true, wenn sich die Textur geaendert hat.
   */
  erzeuge() {
    if (!this.kameraAn || !this.karte) return false;
    this.faellig = false;
    this.uhr = 0;
    this.karte.needsUpdate = true;
    const k = this.lichtFaktor;
    for (const f of this.flaechen) {
      const st = f.userData.staerke * k;
      f.material.color.setRGB(st * this.lichtFarbe.r, st * this.lichtFarbe.g, st * this.lichtFarbe.b);
    }
    // Grundton folgt dem Raumlicht, damit dunkle Raeume dunkel spiegeln
    const g = 0.5 * k;
    this.kugelMaterial.uniforms.grau.value.setRGB(g * this.lichtFarbe.r, g * this.lichtFarbe.g, g * this.lichtFarbe.b);
    const neu = this.pmrem.fromScene(this.raumSzene, 0, 0.1, 100, { size: this.einstellung.raumGroesse });
    const alt = this.raumZiel;
    this.raumZiel = neu;
    if (alt) alt.dispose();
    return true;
  }

  dispose() {
    this.raumZiel?.dispose();
    this.studioZiel?.dispose();
    this.raumZiel = this.studioZiel = null;
    this.karte?.dispose();
    this.kugel.geometry.dispose();
    this.kugelMaterial.dispose();
    for (const f of this.flaechen) f.material.dispose();
    this.flaechen.length = 0;
    this.studio.dispose();
    this.pmrem.dispose();
  }
}
