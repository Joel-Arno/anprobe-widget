// Live-3D-Vorschau des Editors (auch fuer Produktbilder): Studiolicht, weicher
// Bodenschatten, Drehteller, Ansichten, echte Groesse (1:1) mit mm-Lineal und
// Export als PNG.
//
//   const v = new Vorschau(huelle, { onAenderung })
//   v.zeige(modell /* SchmuckModell */)   ersetzt das vorige Modell (entsorgt es)
//   v.setze({ drehteller, bueste, paar, echteGroesse, lineal })
//   v.ansicht('produkt'|'vorn'|'seite'|'oben', { sofort })
//   v.setzeBildschirmMass(pxProMm)        CSS-Pixel je mm des Bildschirms (Kalibrierung)
//   v.pxProMm()                           aktueller Massstab in Bildmitte (CSS-Pixel je mm)
//   await v.alsBild({ groesse, hintergrund: 'hell'|'transparent' }) -> Blob (PNG)
//   v.dispose()
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { studioUmgebung, baueBueste, maleHintergrund, HINTERGRUND_CSS } from './studio.js';

const GRAD = Math.PI / 180;
export const MM_JE_ZOLL = 25.4;
/** Nennmass von CSS: 96 px je Zoll. */
export const CSS_PX_PRO_MM = 96 / MM_JE_ZOLL;

// Lage des Modells im Studio je Art (Produktfoto-Haltung) und Kameraansichten
// (Azimut um +Y, Hoehe ueber dem Boden, beides in Grad).
const LAGE = {
  // Stein nach oben (+Z -> +Y), Fingerachse in die Tiefe; steht auf der Schiene
  ring: { euler: [-90, 0, 0], luft: 0, ansichten: { produkt: [-32, 16], vorn: [0, 4], seite: [-90, 6], oben: [0, 80] } },
  // liegt flach: Schlaufe waagerecht, Handruecken (+Z) zur Kamera
  armband: { euler: [0, -42, 0], luft: 0, ansichten: { produkt: [-18, 34], vorn: [0, 10], seite: [-90, 12], oben: [0, 84] } },
  // Schauseite (+X) zur Kamera, haengend; das Paar nebeneinander
  ohrringe: { euler: [0, -90, 0], luft: 7, ansichten: { produkt: [-16, 10], vorn: [0, 3], seite: [-90, 6], oben: [0, 70] } },
  // auf der Bueste (Rahmen der Kette = Rahmen der Bueste)
  kette: { euler: [0, 0, 0], luft: 0, ansichten: { produkt: [-10, 8], vorn: [0, 4], seite: [-62, 8], oben: [0, 55] } }
};

export class Vorschau {
  constructor(huelle, { onAenderung = null, pixelRatio = null, studioHintergrund = true, linealUnten = 0, buesteFarbe = null } = {}) {
    this.buesteFarbe = buesteFarbe;
    this.rand = null; // Rahmenfaktor (null = je Art), kleiner = Schmuck fuellt mehr
    this.detail = false; // Kette: Nahaufnahme statt ganzer Bogen
    this.huelle = huelle;
    this.onAenderung = onAenderung;
    this.optionen = { drehteller: false, bueste: true, paar: true, echteGroesse: false, lineal: true };
    this.bildschirmPxProMm = CSS_PX_PRO_MM;
    this.modell = null;
    this.art = null;
    this.ansichtName = 'produkt';
    this.flug = null;
    this.schmutzig = true;
    this.entsorgt = false;

    if (studioHintergrund) huelle.style.background = HINTERGRUND_CSS;
    if (getComputedStyle(huelle).position === 'static') huelle.style.position = 'relative';
    const canvas = document.createElement('canvas');
    canvas.className = 'vorschau-leinwand';
    canvas.style.cssText = 'position:absolute;left:0;top:0;display:block;touch-action:none;outline:none;';
    canvas.setAttribute('aria-label', '3D-Vorschau: ziehen zum Drehen, Mausrad oder zwei Finger zum Zoomen');
    canvas.setAttribute('role', 'img');
    huelle.appendChild(canvas);
    this.canvas = canvas;

    const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    r.setPixelRatio(pixelRatio || Math.min(2, window.devicePixelRatio || 1));
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.VSMShadowMap;
    r.setClearColor(0x000000, 0);
    this.renderer = r;

    this.szene = new THREE.Scene();
    this.umgebung = studioUmgebung(r);
    this.szene.environment = this.umgebung;

    this.kamera = new THREE.PerspectiveCamera(22, 1, 1, 6000);
    this.steuerung = new OrbitControls(this.kamera, canvas);
    const st = this.steuerung;
    st.enableDamping = true;
    st.dampingFactor = 0.09;
    st.rotateSpeed = 0.7;
    st.zoomSpeed = 0.8;
    st.enablePan = true;
    st.screenSpacePanning = true;
    st.autoRotateSpeed = 1.6;
    st.addEventListener('change', () => { this.schmutzig = true; });
    st.addEventListener('start', () => { this.flug = null; });
    // Zoomen von Hand beendet den 1:1-Modus
    canvas.addEventListener('wheel', () => { if (this.optionen.echteGroesse) this.setze({ echteGroesse: false }, true); }, { passive: true });

    // Licht: Hauptlicht mit weichem Schatten; Glanz kommt aus der Umgebung
    this.licht = new THREE.DirectionalLight(0xfff6ec, 1.15);
    this.licht.castShadow = true;
    this.licht.shadow.mapSize.set(1024, 1024);
    this.licht.shadow.radius = 10;
    this.licht.shadow.blurSamples = 24;
    this.licht.shadow.bias = -0.0005;
    this.szene.add(this.licht, this.licht.target);

    this.boden = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), new THREE.ShadowMaterial({ opacity: 0.16 }));
    this.boden.rotation.x = -Math.PI / 2;
    this.boden.receiveShadow = true;
    this.szene.add(this.boden);

    this.halter = new THREE.Group();   // Produktlage
    this.szene.add(this.halter);
    this.buesteTeile = null;

    // mm-Lineal als Overlay
    this.lineal = document.createElement('canvas');
    this.lineal.className = 'vorschau-lineal';
    this.lineal.setAttribute('aria-hidden', 'true');
    this.lineal.style.cssText = `position:absolute;left:0;top:auto;bottom:${linealUnten}px;pointer-events:none;`;
    huelle.appendChild(this.lineal);
    this.linealStand = '';

    this.groesse = { b: 1, h: 1 };
    this.beobachter = new ResizeObserver(() => this.passeGroesseAn());
    this.beobachter.observe(huelle);
    this.passeGroesseAn();

    this.zeit = performance.now();
    this.schleife = this.schleife.bind(this);
    this.raf = requestAnimationFrame(this.schleife);
  }

  // ------------------------------------------------------------ Modell

  /** Zeigt ein SchmuckModell (das vorige wird entsorgt). halteAnsicht: Kamera nicht neu rahmen. */
  zeige(modell, { halteAnsicht = false } = {}) {
    const artWechsel = !this.modell || this.modell.art !== modell.art;
    this.leereHalter();
    if (this.modell) this.modell.dispose();
    this.modell = modell;
    this.art = modell.art;
    const lage = LAGE[modell.art] || LAGE.ring;
    modell.gruppe.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });

    const innen = new THREE.Group();
    innen.rotation.set(lage.euler[0] * GRAD, lage.euler[1] * GRAD, lage.euler[2] * GRAD);
    innen.add(modell.gruppe);
    this.halter.add(innen);

    if (modell.art === 'ohrringe' && this.optionen.paar) {
      // zweites Ohr: an der Bildebene gespiegelt (Spiegelpaar), nebeneinander
      innen.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(innen);
      const breite = box.max.x - box.min.x;
      const abstand = Math.max(breite + 7, 16);
      const links = new THREE.Group();
      links.scale.x = -1;
      const kopie = innen.clone(true);
      links.add(kopie);
      innen.position.x += abstand / 2;
      links.position.x -= abstand / 2;
      this.halter.add(links);
    }
    if (modell.art === 'kette') {
      if (!this.buesteTeile) this.buesteTeile = baueBueste(this.buesteFarbe ? { farbe: this.buesteFarbe } : {});
      innen.add(this.optionen.bueste ? this.buesteTeile.bueste : this.buesteTeile.verdecker);
    }
    this.richteAus();
    if (artWechsel || !halteAnsicht) this.ansicht(halteAnsicht ? this.ansichtName : 'produkt', { sofort: true, rahmen: true });
    else this.rahmeNeu(false);
    this.schmutzig = true;
  }

  leereHalter() {
    if (this.buesteTeile) {
      this.buesteTeile.bueste.removeFromParent();
      this.buesteTeile.verdecker.removeFromParent();
    }
    if (this.modell) this.modell.gruppe.removeFromParent();
    this.halter.clear();
    this.halter.position.set(0, 0, 0);
  }

  /** Halter auf den Boden stellen und mittig ausrichten, Schattenkamera anpassen. */
  richteAus() {
    const lage = LAGE[this.art] || LAGE.ring;
    this.halter.position.set(0, 0, 0);
    this.halter.updateMatrixWorld(true);
    const box = this.schmuckBox();
    const mitte = box.getCenter(new THREE.Vector3());
    if (this.art === 'kette') {
      // Bueste steht; Boden weit unten (Schatten faellt auf die Bueste)
      this.halter.position.set(0, 0, 0);
      this.boden.position.y = -400;
    } else {
      this.halter.position.set(-mitte.x, -box.min.y + lage.luft, -mitte.z);
      this.boden.position.y = 0;
    }
    this.halter.updateMatrixWorld(true);
    const b2 = this.schmuckBox();
    const groesse = b2.getSize(new THREE.Vector3());
    const r = Math.max(10, groesse.length() / 2);
    const z = b2.getCenter(new THREE.Vector3());
    // Licht von oben, leicht vorn links: Schatten faellt nach hinten rechts
    const richtung = (this.art === 'ohrringe' ? new THREE.Vector3(-0.18, 1, 0.22) : new THREE.Vector3(-0.32, 1, 0.38)).normalize();
    this.licht.target.position.copy(z);
    this.licht.position.copy(z).addScaledVector(richtung, r * 6);
    const sk = this.licht.shadow.camera;
    const s = this.art === 'kette' ? r * 1.6 : r * 1.25;
    sk.left = -s; sk.right = s; sk.top = s; sk.bottom = -s;
    sk.near = r * 2; sk.far = r * 12;
    sk.updateProjectionMatrix();
    // Weichheit in mm vorgeben und in Texel der Schattenkarte umrechnen
    const weichMm = this.art === 'kette' ? 1.2 : this.art === 'ohrringe' ? 3.2 : 2.0;
    this.licht.shadow.radius = THREE.MathUtils.clamp(weichMm / ((2 * s) / this.licht.shadow.mapSize.x), 1.5, 25);
    this.boden.material.opacity = this.art === 'ohrringe' ? 0.12 : 0.16;
    this.licht.shadow.needsUpdate = true;
  }

  /** Box nur des Schmucks (ohne Bueste). */
  schmuckBox() {
    const box = new THREE.Box3();
    this.halter.updateMatrixWorld(true);
    this.halter.traverse((o) => {
      if (!o.isMesh || !o.visible) return;
      let p = o;
      while (p) { if (p.name === 'bueste' || p.name === 'hals-verdecker') return; p = p.parent; }
      if (o.isInstancedMesh) {
        const m = new THREE.Matrix4();
        if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
        for (let i = 0; i < o.count; i++) {
          o.getMatrixAt(i, m);
          box.union(o.geometry.boundingBox.clone().applyMatrix4(m.premultiply(o.matrixWorld)));
        }
      } else {
        box.expandByObject(o, true);
      }
    });
    if (box.isEmpty()) box.setFromCenterAndSize(new THREE.Vector3(), new THREE.Vector3(20, 20, 20));
    return box;
  }

  // ------------------------------------------------------------ Optionen

  /** Optionen setzen; vonInnen = Aenderung kam aus der Vorschau (Rueckmeldung an die UI). */
  setze(neu, vonInnen = false) {
    const alt = { ...this.optionen };
    Object.assign(this.optionen, neu);
    const o = this.optionen;
    this.steuerung.autoRotate = !!o.drehteller;
    if (this.modell && (alt.bueste !== o.bueste || alt.paar !== o.paar)) {
      // Bueste/Paar umschalten: Modell neu einhaengen, Ansicht halten
      const m = this.modell;
      this.modell = null;
      this.leereHalter();
      this.zeigeOhneEntsorgen(m);
    }
    if (alt.echteGroesse !== o.echteGroesse) {
      this.steuerung.enableZoom = true;
      this.rahmeNeu(true);
    }
    this.lineal.style.display = o.lineal ? '' : 'none';
    this.linealStand = '';
    this.schmutzig = true;
    if (vonInnen && this.onAenderung) this.onAenderung({ ...o });
  }

  zeigeOhneEntsorgen(m) {
    const ansicht = this.ansichtName;
    const zielAlt = this.steuerung.target.clone();
    const posAlt = this.kamera.position.clone();
    this.modell = null;
    // zeige() entsorgt nur ein vorhandenes this.modell
    this.zeige(m, { halteAnsicht: true });
    this.ansichtName = ansicht;
    this.steuerung.target.copy(zielAlt);
    this.kamera.position.copy(posAlt);
    this.rahmeNeu(false);
  }

  setzeBildschirmMass(pxProMm) {
    this.bildschirmPxProMm = pxProMm > 0 ? pxProMm : CSS_PX_PRO_MM;
    if (this.optionen.echteGroesse) this.rahmeNeu(true);
    this.linealStand = '';
    this.schmutzig = true;
  }

  // ------------------------------------------------------------ Kamera

  /** Benannte Ansicht anfliegen. */
  ansicht(name, { sofort = false, rahmen = true } = {}) {
    const lage = LAGE[this.art] || LAGE.ring;
    const [az, hoehe] = lage.ansichten[name] || lage.ansichten.produkt;
    this.ansichtName = name;
    const { ziel, abstand } = this.rahmenFuer();
    const richtung = new THREE.Vector3(
      Math.sin(az * GRAD) * Math.cos(hoehe * GRAD),
      Math.sin(hoehe * GRAD),
      Math.cos(az * GRAD) * Math.cos(hoehe * GRAD)
    );
    const d = rahmen ? abstand : this.kamera.position.distanceTo(this.steuerung.target);
    const pos = ziel.clone().addScaledVector(richtung, d);
    this.begrenze();
    if (sofort) {
      this.flug = null;
      this.steuerung.target.copy(ziel);
      this.kamera.position.copy(pos);
      this.steuerung.update();
    } else {
      this.flug = {
        t: 0, dauer: 0.55,
        vonZiel: this.steuerung.target.clone(), nachZiel: ziel,
        vonPos: this.kamera.position.clone(), nachPos: pos
      };
    }
    this.schmutzig = true;
  }

  /** Ziel und Abstand, damit der Schmuck das Bild gut fuellt (bzw. 1:1). */
  rahmenFuer() {
    const box = this.schmuckBox();
    const ziel = box.getCenter(new THREE.Vector3());
    const groesse = box.getSize(new THREE.Vector3());
    let r = Math.max(4, groesse.length() / 2);
    if (this.art === 'kette') {
      // vorderer Teil der Kette mit Anhaenger fuellt das Bild, Hals bleibt angeschnitten
      const vorn = new THREE.Box3(new THREE.Vector3(box.min.x, box.min.y, -20), box.max.clone());
      vorn.max.y = Math.min(box.max.y, 30);
      vorn.getCenter(ziel);
      const g = vorn.getSize(new THREE.Vector3());
      r = Math.max(g.x, g.y) * 0.68;
      ziel.y -= g.y * 0.06; // etwas Luft unter dem Anhaenger (Lineal)
      if (this.detail) {
        // Nahaufnahme fuer Produktbilder: tiefster Teil mit Anhaenger im unteren Drittel
        // Oberkante unter der Drosselgrube: der Hals der Bueste bleibt ausserhalb
        // des Bilds (wirkt sonst wie ein Rohr), die Kette laeuft oben aus dem Bild
        r = Math.max(38, g.x * 0.44);
        ziel.y = Math.max(box.min.y + r * 0.3, Math.min(box.min.y + r * 0.6, -16 - r));
      }
    }
    const fov = this.kamera.fov * GRAD;
    const fovH = 2 * Math.atan(Math.tan(fov / 2) * this.kamera.aspect);
    const halb = Math.min(fov, fovH) / 2;
    let abstand = (r / Math.sin(halb)) * (this.rand ?? (this.art === 'kette' ? 1.0 : 1.12));
    if (this.optionen.echteGroesse) abstand = this.abstandFuerMass(this.bildschirmPxProMm);
    return { ziel, abstand };
  }

  /** Abstand der Kamera, bei dem 1 mm in Bildmitte pxProMm CSS-Pixel misst. */
  abstandFuerMass(pxProMm) {
    const h = this.groesse.h;
    return h / (2 * Math.tan((this.kamera.fov * GRAD) / 2) * pxProMm);
  }

  /** Abstand halten, nur Rahmen/Massstab neu (nach Groessen- oder Modusaenderung). */
  rahmeNeu(abstandNeu) {
    const { ziel, abstand } = this.rahmenFuer();
    const richtung = this.kamera.position.clone().sub(this.steuerung.target).normalize();
    if (!Number.isFinite(richtung.x) || richtung.lengthSq() < 0.5) richtung.set(0, 0.2, 1).normalize();
    const d = abstandNeu || this.optionen.echteGroesse ? abstand : this.kamera.position.distanceTo(this.steuerung.target);
    this.flug = null;
    this.steuerung.target.copy(ziel);
    this.kamera.position.copy(ziel).addScaledVector(richtung, d);
    this.begrenze();
    this.steuerung.update();
    this.schmutzig = true;
  }

  begrenze() {
    const { abstand } = this.rahmenFuerOhneMass();
    const st = this.steuerung;
    st.minDistance = abstand * 0.18;
    st.maxDistance = Math.max(abstand * 4, this.abstandFuerMass(this.bildschirmPxProMm) * 1.5);
    if (this.art === 'kette' && this.optionen.bueste) {
      st.minAzimuthAngle = -75 * GRAD; st.maxAzimuthAngle = 75 * GRAD;
      st.maxPolarAngle = 100 * GRAD;
    } else {
      st.minAzimuthAngle = -Infinity; st.maxAzimuthAngle = Infinity;
      st.maxPolarAngle = 92 * GRAD; // nicht unter den Boden
    }
  }

  rahmenFuerOhneMass() {
    const e = this.optionen.echteGroesse;
    this.optionen.echteGroesse = false;
    const erg = this.rahmenFuer();
    this.optionen.echteGroesse = e;
    return erg;
  }

  /** CSS-Pixel je mm am Zielpunkt (Bildmitte). */
  pxProMm() {
    const d = this.kamera.position.distanceTo(this.steuerung.target);
    return this.groesse.h / (2 * Math.tan((this.kamera.fov * GRAD) / 2) * d);
  }

  // ------------------------------------------------------------ Groesse, Schleife

  passeGroesseAn() {
    const b = Math.max(1, this.huelle.clientWidth), h = Math.max(1, this.huelle.clientHeight);
    if (b === this.groesse.b && h === this.groesse.h) return;
    this.groesse = { b, h };
    this.renderer.setSize(b, h, false);
    this.canvas.style.width = b + 'px';
    this.canvas.style.height = h + 'px';
    this.kamera.aspect = b / h;
    this.kamera.updateProjectionMatrix();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.lineal.width = Math.round(b * dpr);
    this.lineal.height = Math.round(64 * dpr);
    this.lineal.style.width = b + 'px';
    this.lineal.style.height = '64px';
    this.linealStand = '';
    // Massstab bei Hoehenaenderung halten (1:1) bzw. Bild gefuellt lassen
    if (this.modell) this.rahmeNeu(true);
    this.schmutzig = true;
    this.zeichne();
  }

  schleife() {
    if (this.entsorgt) return;
    this.raf = requestAnimationFrame(this.schleife);
    const jetzt = performance.now();
    const dt = Math.min(0.05, (jetzt - this.zeit) / 1000);
    this.zeit = jetzt;
    if (this.flug) {
      const f = this.flug;
      f.t += dt / f.dauer;
      const k = f.t >= 1 ? 1 : 1 - Math.pow(1 - f.t, 3);
      this.steuerung.target.lerpVectors(f.vonZiel, f.nachZiel, k);
      // auf der Kugel um das Ziel fliegen (nicht durch das Modell hindurch)
      const von = f.vonPos.clone().sub(f.vonZiel), nach = f.nachPos.clone().sub(f.nachZiel);
      const lv = von.length(), ln = nach.length();
      const richtung = von.normalize().lerp(nach.normalize(), k).normalize();
      this.kamera.position.copy(this.steuerung.target).addScaledVector(richtung, lv + (ln - lv) * k);
      if (f.t >= 1) this.flug = null;
      this.schmutzig = true;
    }
    const bewegt = this.steuerung.update(dt);
    if (bewegt || this.steuerung.autoRotate) this.schmutzig = true;
    if (this.schmutzig) this.zeichne();
  }

  zeichne() {
    this.schmutzig = false;
    this.renderer.render(this.szene, this.kamera);
    this.zeichneLineal();
  }

  /** mm-Lineal unten im Bild; gilt in Bildmitte (Tiefe des Drehpunkts). */
  zeichneLineal() {
    if (!this.optionen.lineal) return;
    const pxmm = this.pxProMm();
    const stand = `${pxmm.toFixed(3)}|${this.groesse.b}|${this.optionen.echteGroesse}`;
    if (stand === this.linealStand) return;
    this.linealStand = stand;
    const c = this.lineal, g = c.getContext('2d');
    const dpr = c.width / this.groesse.b;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, this.groesse.b, 64);
    const verfuegbar = Math.min(this.groesse.b * 0.62, 560);
    // Gesamtlaenge auf runde Werte, Teilung je nach Dichte
    const stufen = [5, 10, 20, 30, 50, 100, 200, 300, 500];
    let laenge = stufen[0];
    for (const s of stufen) if (s * pxmm <= verfuegbar) laenge = s;
    const fein = pxmm >= 4 ? 1 : pxmm >= 1.6 ? 5 : 10;
    const grob = laenge <= 30 ? 5 : laenge <= 100 ? 10 : 50;
    const beschriftung = laenge <= 20 ? 5 : laenge <= 100 ? 10 : laenge <= 200 ? 50 : 100;
    const x0 = Math.round((this.groesse.b - laenge * pxmm) / 2) + 0.5;
    const y0 = 40.5;
    // matte Glasflaeche dahinter: lesbar auch vor der dunklen Bueste
    const textBreite = this.optionen.echteGroesse ? 108 : 26;
    const px0 = x0 - 16, px1 = x0 + laenge * pxmm + textBreite;
    g.fillStyle = 'rgba(255,253,249,0.66)';
    g.beginPath();
    if (g.roundRect) g.roundRect(px0, 15, px1 - px0, 34, 17);
    else g.rect(px0, 15, px1 - px0, 34);
    g.fill();
    g.strokeStyle = 'rgba(30,27,24,0.55)';
    g.fillStyle = 'rgba(30,27,24,0.72)';
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(x0, y0); g.lineTo(x0 + laenge * pxmm, y0);
    for (let mm = 0; mm <= laenge + 1e-6; mm += fein) {
      const x = Math.round(x0 + mm * pxmm) + 0.0;
      const h = mm % grob === 0 ? 9 : mm % 5 === 0 ? 6 : 3.5;
      g.moveTo(x, y0); g.lineTo(x, y0 - h);
    }
    g.stroke();
    g.font = '500 10px system-ui, -apple-system, "Segoe UI", sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'alphabetic';
    for (let mm = 0; mm <= laenge + 1e-6; mm += beschriftung) {
      g.fillText(String(mm), x0 + mm * pxmm, y0 - 13);
    }
    g.textAlign = 'left';
    g.font = '500 9px system-ui, -apple-system, "Segoe UI", sans-serif';
    const text = this.optionen.echteGroesse ? 'MM · ECHTE GRÖSSE' : 'MM';
    g.fillText(text, x0 + laenge * pxmm + 8, y0 - 1);
  }

  // ------------------------------------------------------------ Export

  /**
   * Aktuelle Ansicht als quadratisches PNG.
   * hintergrund: 'hell' (Studioverlauf) | 'transparent'
   */
  async alsBild({ groesse = 2048, hintergrund = 'hell', typ = 'image/png', qualitaet = 0.92 } = {}) {
    const r = this.renderer;
    const altPr = r.getPixelRatio();
    const altAspekt = this.kamera.aspect;
    const ausgabe = document.createElement('canvas');
    ausgabe.width = ausgabe.height = groesse;
    const ctx = ausgabe.getContext('2d');
    if (hintergrund === 'hell') maleHintergrund(ctx, groesse, groesse);
    try {
      r.setPixelRatio(1);
      r.setSize(groesse, groesse, false);
      this.kamera.aspect = 1;
      // gleiche Bildhoehe wie in der Vorschau; bei Hochformat Breite statt Hoehe halten
      const fovAlt = this.kamera.fov;
      if (altAspekt < 1) this.kamera.fov = 2 * Math.atan(Math.tan((fovAlt * GRAD) / 2) * altAspekt) / GRAD;
      this.kamera.updateProjectionMatrix();
      this.licht.shadow.needsUpdate = true;
      r.render(this.szene, this.kamera);
      ctx.drawImage(r.domElement, 0, 0, groesse, groesse);
      this.kamera.fov = fovAlt;
    } finally {
      r.setPixelRatio(altPr);
      r.setSize(this.groesse.b, this.groesse.h, false);
      this.kamera.aspect = altAspekt;
      this.kamera.updateProjectionMatrix();
      this.zeichne();
    }
    return new Promise((ok, fehler) => ausgabe.toBlob((b) => (b ? ok(b) : fehler(new Error('Bild konnte nicht erzeugt werden'))), typ, qualitaet));
  }

  dispose() {
    if (this.entsorgt) return;
    this.entsorgt = true;
    cancelAnimationFrame(this.raf);
    this.beobachter.disconnect();
    this.leereHalter();
    if (this.modell) this.modell.dispose();
    if (this.buesteTeile) this.buesteTeile.dispose();
    this.steuerung.dispose();
    this.boden.geometry.dispose();
    this.boden.material.dispose();
    this.umgebung.dispose();
    this.renderer.dispose();
    this.canvas.remove();
    this.lineal.remove();
  }
}
