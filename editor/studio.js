// Fotostudio fuer Editor-Vorschau und Produktbilder: Umgebungslicht (Softboxen,
// gedaempfter Raum, heller Tisch), Samtbueste fuer Ketten und der helle
// Hintergrundverlauf, der auch in exportierte Bilder gemalt wird.
import * as THREE from 'three';
import { NORMKOERPER } from '../src/schmuck/kette.js';

/** Hintergrundverlauf (sRGB): Mitte hell, Rand warm. Gleich in CSS und Export. */
export const HINTERGRUND = { mitte: '#FFFDF9', rand: '#EEE7DC', unten: '#E9E1D5' };

/** CSS-Hintergrund der Buehne, passend zu maleHintergrund(). */
export const HINTERGRUND_CSS =
  `radial-gradient(120% 95% at 50% 38%, ${HINTERGRUND.mitte} 0%, #F8F3EB 48%, ${HINTERGRUND.rand} 100%)`;

/** Malt den Studio-Hintergrund in einen 2D-Kontext (fuer PNG-Export). */
export function maleHintergrund(ctx, b, h) {
  const r = Math.hypot(b * 1.2, h * 0.95) / 2;
  const g = ctx.createRadialGradient(b / 2, h * 0.38, 0, b / 2, h * 0.38, r * 1.15);
  g.addColorStop(0, HINTERGRUND.mitte);
  g.addColorStop(0.48, '#F8F3EB');
  g.addColorStop(1, HINTERGRUND.rand);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, b, h);
}

// Studio als Szene: Raum innen gedaempft (gibt Metall Tiefe), heller Tisch,
// grosse Softbox oben, Hauptlicht vorn links, Streiflicht rechts, Gegenlicht hinten.
function studioSzene() {
  const szene = new THREE.Scene();
  const raum = new THREE.Mesh(
    new THREE.SphereGeometry(40, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec3 vP;
        void main(){
          vec3 d = normalize(vP);
          float boden = smoothstep(0.04, -0.3, d.y);
          vec3 wand = mix(vec3(0.17, 0.155, 0.14), vec3(0.46, 0.43, 0.40), smoothstep(-0.15, 0.85, d.y));
          wand *= mix(1.0, 0.8, smoothstep(0.25, 0.95, d.z));
          vec3 tisch = vec3(0.92, 0.88, 0.82);
          gl_FragColor = vec4(mix(wand, tisch, boden), 1.0);
        }`
    })
  );
  szene.add(raum);
  const flaeche = (b, h, farbe, staerke, pos) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(b, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(farbe).multiplyScalar(staerke), side: THREE.DoubleSide })
    );
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    szene.add(m);
  };
  flaeche(30, 30, 0xffffff, 3.0, [0, 30, 2]);        // Softbox oben
  flaeche(14, 18, 0xfff8ee, 6.5, [-20, 13, 18]);     // Hauptlicht vorn links (warm)
  flaeche(5, 26, 0xf3f5ff, 3.4, [26, 6, -4]);        // Streiflicht rechts (kuehl)
  flaeche(22, 7, 0xffffff, 2.0, [0, 9, -30]);        // Gegenlicht hinten
  flaeche(16, 7, 0xfffaf0, 1.6, [4, 3, 28]);         // Aufheller vorn (Schauseiten nicht zu dunkel)
  return szene;
}

/** PMREM-Textur des Studios (einmal je Renderer). */
export function studioUmgebung(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const szene = studioSzene();
  const tex = pmrem.fromScene(szene, 0.02, 0.1, 100).texture;
  szene.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) o.material.dispose();
  });
  pmrem.dispose();
  return tex;
}

/**
 * Samtbueste im Rahmen der Kette (mm, Ursprung Drosselgrube, +Y Hals hinauf, +Z vorn),
 * passend zum Normkoerper der Kettendrapierung (NORMKOERPER, vgl. koerperVorn).
 * Liefert { bueste: Group (sichtbar), verdecker: Mesh (nur Tiefe, Hals), dispose() }.
 */
export function baueBueste({ farbe = '#A08F80', glanz = '#CDBFB2' } = {}) {
  const K = NORMKOERPER;
  const yMin = -260, yMax = 150, zMin = -210;
  const nx = 120;
  // Oberkoerper ohne Hals: Brustebene (25 Grad) wie in koerperVorn, oberhalb der
  // Drosselgrube steil nach hinten (Schulteroberseite). Der Hals ist ein eigener
  // Zylinder; so entsteht an der Halsseite eine saubere Kante statt Streifen.
  const t1 = Math.tan(K.brustNeigung);
  const STEIL_OBEN = 2.6; // wie src/schmuck/kette.js
  const brust = (x, y) => -t1 * y - (STEIL_OBEN - t1) * 6 * Math.log1p(Math.exp(y / 6)) - K.rundung * x * x;
  // halbe Breite je Hoehe: Oberkoerper, Schulterlinie (Trapez) zum Hals
  const breite = (y) => {
    const t = THREE.MathUtils.smoothstep(y, -30, 52);
    return K.halsRadius + 118 * Math.pow(1 - t, 0.85);
  };
  // Zeilen dichter am Uebergang Brust/Schulter (steile Flaechen bleiben glatt)
  const zeilen = [];
  for (let y = yMin; y < -40; y += 6) zeilen.push(y);
  for (let y = -40; y < 80; y += 1.5) zeilen.push(y);
  for (let y = 80; y <= yMax; y += 4) zeilen.push(y);
  const ny = zeilen.length - 1;
  const pos = [], idx = [];
  for (let j = 0; j <= ny; j++) {
    const y = zeilen[j];
    const W = breite(y);
    const re = Math.min(48, Math.max(0, W - K.halsRadius - 4));
    for (let i = 0; i <= nx; i++) {
      const u = (i / nx) * 2 - 1;
      const x = u * W;
      let z = brust(x, y);
      if (re > 0) {
        const t = THREE.MathUtils.clamp((Math.abs(x) - (W - re)) / re, 0, 1);
        z -= re * 1.5 * t * t; // weich (endliche Steigung), sonst Streifen in den Normalen
      }
      pos.push(x, y, Math.max(z, zMin));
    }
  }
  const w = nx + 1;
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const a = j * w + i, b = a + 1, c = a + w, d = c + 1;
      idx.push(a, b, d, a, d, c);
    }
  }
  const vorn = new THREE.BufferGeometry();
  vorn.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  vorn.setIndex(idx);
  vorn.computeVertexNormals();
  const samt = new THREE.MeshPhysicalMaterial({
    color: farbe, roughness: 0.9, metalness: 0,
    sheen: 1, sheenColor: new THREE.Color(glanz), sheenRoughness: 0.45,
    side: THREE.DoubleSide
  });
  const bueste = new THREE.Group();
  bueste.name = 'bueste';
  const m = new THREE.Mesh(vorn, samt);
  m.receiveShadow = true;
  bueste.add(m);
  // Hals: elliptischer Zylinder (vorn Radius 55, hinten flacher), unten in der Brust verborgen
  const tiefe = (K.halsRadius + K.halsTiefeHinten) / 2;
  const hals = new THREE.CylinderGeometry(K.halsRadius, K.halsRadius, yMax + 30, 72, 1, false);
  hals.scale(1, 1, tiefe / K.halsRadius);
  hals.translate(0, (yMax - 30) / 2, K.halsMitteZ - (K.halsTiefeHinten - K.halsRadius) / 2);
  const hm = new THREE.Mesh(hals, samt);
  hm.receiveShadow = true;
  bueste.add(hm);
  // Ohne Bueste: nur der Hals schreibt Tiefe, damit die Kette hinten unsichtbar bleibt
  const tief = new THREE.MeshBasicMaterial({ colorWrite: false });
  const vg = new THREE.CylinderGeometry(K.halsRadius - 1.5, K.halsRadius - 1.5, 190, 48, 1, false);
  vg.scale(1, 1, (K.halsRadius + K.halsTiefeHinten) / 2 / K.halsRadius);
  vg.translate(0, 75, K.halsMitteZ - (K.halsTiefeHinten - K.halsRadius) / 2);
  const verdecker = new THREE.Mesh(vg, tief);
  verdecker.name = 'hals-verdecker';
  verdecker.renderOrder = -1;
  return {
    bueste,
    verdecker,
    dispose() {
      vorn.dispose(); hals.dispose(); vg.dispose(); samt.dispose(); tief.dispose();
    }
  };
}
