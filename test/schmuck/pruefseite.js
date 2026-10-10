// Pruefseite fuer die Schmuckmodelle: Produktfoto-Ansichten und Achsen-/Referenzansichten.
// window.zeige({ id | spec, ansicht, metall, ton }) baut, rendert und liefert Kennzahlen.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { fotostudioUmgebung } from './fotostudio.js';
import { baueSchmuck, VORLAGEN } from '../../src/schmuck/index.js';
import { koerperVorn, NORMKOERPER } from '../../src/schmuck/kette.js';
import { METALLE, PERLFARBEN, Ressourcen, metallMaterial, perlMaterial, steinMaterial } from '../../src/schmuck/materialien.js';
import { perlenGeometrie, steinGeometrie } from '../../src/schmuck/geometrie.js';
import { PRUEF_SPECS } from './pruefspecs.js';

const PARAM = new URLSearchParams(location.search);
const AUTO = PARAM.has('auto');
const GROESSE = Number(PARAM.get('groesse') || 900);
// Material-Versuche: ?metallwerte=gold:1,0.75,0.36:0.14:0.1  (Farbe linear : Rauheit : Klarlack)
for (const eintrag of (PARAM.get('metallwerte') || '').split(';').filter(Boolean)) {
  const [name, farbe, rauheit, klarlack] = eintrag.split(':');
  if (!METALLE[name]) continue;
  if (farbe) METALLE[name].farbe = farbe.split(',').map(Number);
  if (rauheit) METALLE[name].rauheit = Number(rauheit);
  if (klarlack) METALLE[name].klarlack = Number(klarlack);
}

export const ALLE = { materialtafel: { art: 'tafel' }, ...Object.fromEntries(Object.entries(VORLAGEN).map(([k, v]) => [k, v.spec])), ...PRUEF_SPECS };
export const ANSICHTEN = {
  ring: ['produkt', 'seite', 'stein', 'achsen'],
  armband: ['getragen', 'oben', 'nah', 'achsen'],
  kette: ['buste', 'nah', 'glieder', 'seite', 'achsen'],
  ohrringe: ['seite', 'vorn', 'schraeg', 'achsen'],
  tafel: ['tafel']
};

// ---------------------------------------------------------------- Buehne
const canvas = document.getElementById('leinwand');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(AUTO ? 1 : Math.min(2, devicePixelRatio));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

const scene = new THREE.Scene();
scene.background = verlaufTextur('#f7f4ef', '#e6e0d7');
const pmrem = new THREE.PMREMGenerator(renderer);
// Standard: Produktfoto-Studio. ?umgebung=room: RoomEnvironment (Studio-Anteil der Buehne)
const studio = PARAM.get('umgebung') === 'room' ? pmrem.fromScene(new RoomEnvironment(), 0.04).texture : fotostudioUmgebung(renderer);
scene.environment = studio;
// ?umgebung=foto: Reflexionen aus einem Kamerabild (wie die Buehne es beimischt)
const umgebungFoto = PARAM.get('umgebung') === 'foto' ? new Promise((ok) => {
  new THREE.TextureLoader().load('/test/cache/bilder/business-person.png', (t) => {
    t.mapping = THREE.EquirectangularReflectionMapping;
    t.colorSpace = THREE.SRGBColorSpace;
    scene.environment = pmrem.fromEquirectangular(t).texture;
    ok();
  }, undefined, () => ok());
}) : Promise.resolve();

const kamera = new THREE.PerspectiveCamera(24, 1, 0.5, 5000);
const steuerung = new OrbitControls(kamera, canvas);
steuerung.enableDamping = false;

const licht = new THREE.DirectionalLight(0xffffff, 1.1);
licht.castShadow = true;
licht.shadow.mapSize.set(2048, 2048);
licht.shadow.radius = 9;
licht.shadow.blurSamples = 16;
licht.shadow.bias = -0.0004;
scene.add(licht, licht.target);

const boden = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), new THREE.ShadowMaterial({ opacity: 0.14 }));
boden.rotation.x = -Math.PI / 2;
boden.receiveShadow = true;
scene.add(boden);
const wand = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.ShadowMaterial({ opacity: 0.13 }));
wand.rotation.y = Math.PI / 2;
wand.receiveShadow = true;
scene.add(wand);

const halter = new THREE.Group();
const referenz = new THREE.Group();
scene.add(halter, referenz);
let modell = null;

function verlaufTextur(oben, unten) {
  const c = document.createElement('canvas');
  c.width = 4; c.height = 256;
  const g = c.getContext('2d');
  const v = g.createLinearGradient(0, 0, 0, 256);
  v.addColorStop(0, oben); v.addColorStop(1, unten);
  g.fillStyle = v; g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function groesseSetzen() {
  const w = AUTO ? GROESSE : innerWidth, h = AUTO ? GROESSE : innerHeight;
  renderer.setSize(w, h, false);
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  kamera.aspect = w / h;
  kamera.updateProjectionMatrix();
}
groesseSetzen();
addEventListener('resize', () => { groesseSetzen(); rendere(); });

// ---------------------------------------------------------------- Referenzen
const hautMat = new THREE.MeshPhysicalMaterial({ color: 0xd9b59c, roughness: 0.62, sheen: 0.4, sheenColor: 0xffd8c8, transparent: false });
const samtMat = new THREE.MeshPhysicalMaterial({ color: 0x3b3531, roughness: 0.92, sheen: 1, sheenColor: 0x9a8e86, sheenRoughness: 0.55 });
const glasMat = new THREE.MeshStandardMaterial({ color: 0xd9b59c, roughness: 0.7, transparent: true, opacity: 0.35, depthWrite: false });

function achsen(laenge) {
  const g = new THREE.Group();
  const farben = [0xd03030, 0x2e9e3e, 0x2f5fd0];
  const namen = ['X', 'Y', 'Z'];
  for (let i = 0; i < 3; i++) {
    const r = laenge * 0.012;
    const zyl = new THREE.Mesh(new THREE.CylinderGeometry(r, r, laenge, 12), new THREE.MeshBasicMaterial({ color: farben[i] }));
    const spitze = new THREE.Mesh(new THREE.ConeGeometry(r * 3, r * 9, 16), zyl.material);
    zyl.position.y = laenge / 2; spitze.position.y = laenge;
    const a = new THREE.Group();
    a.add(zyl, spitze);
    if (i === 0) a.rotation.z = -Math.PI / 2;
    if (i === 2) a.rotation.x = Math.PI / 2;
    g.add(a);
    const s = schrift(namen[i], farben[i]);
    s.scale.setScalar(laenge * 0.14);
    s.position.set(i === 0 ? laenge * 1.12 : 0, i === 1 ? laenge * 1.12 : 0, i === 2 ? laenge * 1.12 : 0);
    g.add(s);
  }
  const k = new THREE.Mesh(new THREE.SphereGeometry(laenge * 0.03, 16, 12), new THREE.MeshBasicMaterial({ color: 0x111111 }));
  g.add(k);
  return g;
}

function schrift(text, farbe) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#' + new THREE.Color(farbe).getHexString();
  g.font = 'bold 52px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 32, 34);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false }));
}

/** Normkoerper: Halszylinder + Vorderflaeche (Hoehenfeld) mit Schulteransatz. */
function bueste(material) {
  const g = new THREE.Group();
  const K = NORMKOERPER;
  const hals = new THREE.Mesh(new THREE.CylinderGeometry(K.halsRadius, K.halsRadius, 170, 96, 1, true), material);
  hals.position.set(0, 85 - 25, K.halsMitteZ);
  hals.receiveShadow = true;
  g.add(hals);
  const nx = 140, ny = 150;
  const pos = [];
  const idx = [];
  const xMax = 150;
  for (let i = 0; i <= nx; i++) {
    const x = -xMax + (2 * xMax * i) / nx;
    const ax = Math.abs(x);
    const yTop = ax < K.halsRadius ? 60 : 28 - 0.32 * (ax - K.halsRadius) - 0.0015 * (ax - K.halsRadius) ** 2;
    for (let j = 0; j <= ny; j++) {
      const t = j / ny;
      const y = -280 + (yTop + 280) * t;
      let z = koerperVorn(x, y).z;
      // seitlich nach hinten abrunden (Oberkoerper)
      if (ax > 110) z -= (ax - 110) ** 2 * 0.03;
      pos.push(x, y, z);
    }
  }
  // Schulteroberseite: von der Vorderkante nach hinten
  const nb = 12;
  const basis = pos.length / 3;
  for (let i = 0; i <= nx; i++) {
    const k = (i * (ny + 1) + ny) * 3;
    const x = pos[k], y = pos[k + 1], z0 = pos[k + 2];
    for (let j = 1; j <= nb; j++) {
      const t = j / nb;
      pos.push(x, y + Math.sin(t * Math.PI / 2) * 6 - t * t * 4, z0 + (-120 - z0) * t);
    }
  }
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      const a = i * (ny + 1) + j, b = (i + 1) * (ny + 1) + j;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    let a = i * (ny + 1) + ny, b = (i + 1) * (ny + 1) + ny;
    for (let j = 1; j <= nb; j++) {
      const a2 = basis + i * nb + (j - 1), b2 = basis + (i + 1) * nb + (j - 1);
      idx.push(a, b, a2, b, b2, a2);
      a = a2; b = b2;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const vorn = new THREE.Mesh(geo, material);
  vorn.receiveShadow = true;
  g.add(vorn);
  return g;
}

// ---------------------------------------------------------------- Anzeige
function leeren() {
  if (modell) { halter.remove(modell.gruppe); modell.dispose(); modell = null; }
  halter.rotation.set(0, 0, 0);
  halter.position.set(0, 0, 0);
  while (referenz.children.length) {
    const c = referenz.children.pop();
    c.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
}

function kameraAuf(ziel, richtung, radius) {
  const d = richtung.clone().normalize();
  const abstand = radius / Math.sin(THREE.MathUtils.degToRad(kamera.fov / 2)) * 1.02;
  kamera.position.copy(ziel).addScaledVector(d, abstand);
  kamera.near = Math.max(0.1, abstand / 50);
  kamera.far = abstand * 20 + 2000;
  kamera.updateProjectionMatrix();
  steuerung.target.copy(ziel);
  kamera.lookAt(ziel);
  steuerung.update();
}

function lichtAuf(box, richtung = new THREE.Vector3(0.45, 1, 0.55)) {
  const c = box.getCenter(new THREE.Vector3());
  const r = box.getSize(new THREE.Vector3()).length() / 2 + 5;
  licht.position.copy(c).addScaledVector(richtung.clone().normalize(), r * 3);
  licht.target.position.copy(c);
  const sc = licht.shadow.camera;
  sc.left = -r; sc.right = r; sc.top = r; sc.bottom = -r; sc.near = r * 0.5; sc.far = r * 6;
  sc.updateProjectionMatrix();
}

function boxVon(obj) {
  obj.updateMatrixWorld(true);
  return new THREE.Box3().setFromObject(obj);
}

let tafelRes = null;
function materialTafel() {
  // Perlen (alle Farben), Metalle, Steine nebeneinander
  tafelRes = new Ressourcen();
  const g = new THREE.Group();
  const farben = Object.keys(PERLFARBEN);
  farben.forEach((f, i) => {
    for (let v = 0; v < 2; v++) {
      const m = new THREE.Mesh(tafelRes.geteilt(`t-perle-${v}`, () => perlenGeometrie({ durchmesser: 8, saat: v + 3, detail: 14 })), perlMaterial(tafelRes, f, v));
      m.position.set(i * 10 - 20, 5 + v * 10, 0);
      m.castShadow = true;
      g.add(m);
    }
  });
  ['gold', 'silber', 'rosegold', 'weissgold'].forEach((mt, i) => {
    const m = new THREE.Mesh(new THREE.TorusKnotGeometry(2.6, 0.9, 120, 16), metallMaterial(tafelRes, mt));
    m.position.set(i * 10 - 15, 26, 0);
    m.castShadow = true;
    g.add(m);
  });
  ['zirkonia', 'saphir', 'rubin', 'smaragd'].forEach((a, i) => {
    const st = steinGeometrie({ groesse: 7, schliff: i === 3 ? 'smaragd' : i === 1 ? 'oval' : 'brillant' });
    const m = new THREE.Mesh(st.geometrie, steinMaterial(tafelRes, a));
    m.rotation.x = -0.5;
    m.position.set(i * 10 - 15, 36, 0);
    g.add(m);
  });
  return g;
}

window.zeige = async function zeige({ id = null, spec = null, ansicht = null, metall = null, ton = 'aces' } = {}) {
  leeren();
  await umgebungFoto;
  if (tafelRes) { tafelRes.dispose(); tafelRes = null; }
  if (id === 'materialtafel') {
    renderer.toneMapping = ton === 'agx' ? THREE.AgXToneMapping : THREE.ACESFilmicToneMapping;
    const t = materialTafel();
    referenz.add(t);
    boden.visible = true; wand.visible = false; boden.position.y = 0;
    lichtAuf(boxVon(t));
    kameraAuf(new THREE.Vector3(0, 20, 0), new THREE.Vector3(0, 0.25, 1), 27);
    rendere();
    await new Promise((ok) => requestAnimationFrame(() => ok()));
    rendere();
    return { id, art: 'tafel', ansicht: 'tafel', bauMs: 0, dreiecke: 0, aufrufe: renderer.info.render.calls, masse: {}, pendel: 0 };
  }
  let s = spec || ALLE[id];
  if (!s) throw new Error('Unbekannte Vorlage ' + id);
  if (metall) s = { ...s, metall };
  renderer.toneMapping = ton === 'agx' ? THREE.AgXToneMapping : THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = ton === 'agx' ? 1.35 : 1.0;
  const t0 = performance.now();
  modell = baueSchmuck(s);
  const bauMs = performance.now() - t0;
  halter.add(modell.gruppe);
  const art = modell.art;
  ansicht = ansicht || ANSICHTEN[art][0];
  boden.visible = true; wand.visible = false;
  scene.background = verlaufTextur('#f7f4ef', '#e6e0d7');

  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  if (ansicht === 'achsen') {
    boden.visible = false;
    scene.background = new THREE.Color(0xf4f2ee);
    referenz.add(achsen(art === 'kette' ? 80 : art === 'armband' ? 45 : 18));
    const grid = new THREE.GridHelper(art === 'kette' ? 300 : 80, art === 'kette' ? 30 : 16, 0xb8b0a5, 0xd8d2c9);
    referenz.add(grid);
    if (art === 'ring') {
      const f = new THREE.Mesh(new THREE.CylinderGeometry(modell.masse.innenRadiusMm, modell.masse.innenRadiusMm * 0.92, 50, 48, 1, true), glasMat);
      f.position.y = 10;
      referenz.add(f);
      kameraAuf(V(0, 2, 2), V(1.1, 0.75, 1.3), 19);
    } else if (art === 'armband') {
      const r = modell.masse.innenRadienMm;
      const f = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 120, 64, 1, true), glasMat);
      f.scale.set(r.x * 0.9, 1, r.z * 0.85);
      referenz.add(f);
      kameraAuf(V(0, 0, 0), V(1.2, 0.9, 1.4), 62);
    } else if (art === 'kette') {
      const b = bueste(glasMat);
      referenz.add(b);
      kameraAuf(V(0, -30, -20), V(1.0, 0.55, 1.25), 150);
    } else {
      const lappen = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 24), glasMat);
      lappen.scale.set(1.6, 9, 7);
      lappen.position.set(0, 1.5, -1);
      referenz.add(lappen);
      kameraAuf(V(0, -modell.masse.laengeMm / 2 + 2, 0), V(1.0, 0.55, 1.2), Math.max(14, modell.masse.laengeMm * 0.75));
    }
    lichtAuf(boxVon(halter));
  } else if (art === 'ring') {
    halter.rotation.x = -Math.PI / 2; // Stein nach oben, Fingerachse zur Kamera
    const box = boxVon(halter);
    halter.position.y = -box.min.y;
    const b2 = boxVon(halter);
    boden.position.y = 0;
    const c = b2.getCenter(new THREE.Vector3());
    const r = b2.getSize(new THREE.Vector3()).length() / 2;
    lichtAuf(b2);
    if (ansicht === 'produkt') kameraAuf(c, V(0.42, 0.42, 1), r * 0.92);
    else if (ansicht === 'seite') kameraAuf(c, V(1, 0.22, 0.12), r * 0.9);
    else kameraAuf(V(c.x, b2.max.y - 3.5, c.z), V(0.25, 1, 0.75), 6.5);
  } else if (art === 'armband') {
    if (ansicht === 'oben') {
      const box = boxVon(halter);
      halter.position.y = -box.min.y;
      const b2 = boxVon(halter);
      lichtAuf(b2);
      kameraAuf(b2.getCenter(new THREE.Vector3()), V(0, 1, 0.42), 45);
    } else {
      halter.rotation.x = -Math.PI / 2; // Handruecken oben, Hand zeigt von der Kamera weg
      const r = modell.masse.innenRadienMm;
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 200, 64), hautMat);
      arm.rotation.x = Math.PI / 2;
      arm.scale.set(r.x * 0.86, 1, r.z * 0.8);
      arm.position.y = r.z - r.z * 0.8; // Arm liegt oben am Armband an
      arm.castShadow = arm.receiveShadow = true;
      referenz.add(arm);
      halter.position.y = 0;
      const box = boxVon(halter);
      boden.position.y = Math.min(box.min.y, arm.position.y - r.z * 0.8) - 0.5;
      lichtAuf(box);
      if (ansicht === 'getragen') kameraAuf(V(0, 6, 4), V(0.35, 1, 0.8), 42);
      else kameraAuf(V(0, r.z + 2, 6), V(0.3, 1, 0.75), 14);
    }
  } else if (art === 'kette') {
    const b = bueste(samtMat);
    b.traverse((o) => { o.castShadow = false; });
    referenz.add(b);
    boden.visible = false;
    scene.background = verlaufTextur('#efeae3', '#ddd5ca');
    const tiefe = modell.masse.tiefeMm || 60;
    lichtAuf(new THREE.Box3(V(-80, -tiefe - 20, -60), V(80, 40, 60)), V(0.3, 0.8, 1));
    if (ansicht === 'buste') kameraAuf(V(0, -tiefe * 0.42 + 8, 0), V(0, 0.08, 1), Math.max(85, tiefe * 0.62 + 40));
    else if (ansicht === 'seite') kameraAuf(V(0, -tiefe * 0.4, -20), V(1, 0.1, 0.35), Math.max(90, tiefe * 0.62 + 50));
    else if (ansicht === 'nah') {
      const a = modell.gruppe.getObjectByName('anhaenger') || modell.gruppe.getObjectByName('perlen') || modell.gruppe;
      const box = boxVon(a);
      const c = box.getCenter(new THREE.Vector3());
      const r = Math.max(9, box.getSize(new THREE.Vector3()).length() / 2);
      kameraAuf(a.name === 'anhaenger' ? c : V(0, -tiefe + 12, 25), V(0.15, 0.3, 1), a.name === 'anhaenger' ? r * 1.25 : 22);
    } else {
      // Makro auf die Glieder vorn seitlich
      const ziel = gliederZiel(modell.gruppe, tiefe) || V(30, -20, 10);
      kameraAuf(ziel, V(0.2, 0.25, 1), 6);
    }
  } else {
    // Ohrringe
    const box = boxVon(halter);
    const c = box.getCenter(new THREE.Vector3());
    const r = Math.max(6, box.getSize(new THREE.Vector3()).length() / 2);
    boden.visible = false;
    wand.visible = ansicht === 'seite';
    wand.position.set(-13, 0, 0);
    lichtAuf(box, V(1, 0.8, 0.5));
    if (ansicht === 'seite') kameraAuf(c, V(1, 0.08, 0.22), r * 0.95);
    else if (ansicht === 'vorn') kameraAuf(c, V(0.08, 0.05, 1), r * 0.95);
    else kameraAuf(c, V(1, 0.45, 0.9), r * 0.95);
  }

  rendere();
  await new Promise((ok) => requestAnimationFrame(() => ok()));
  rendere();
  const info = renderer.info.render;
  let dreiecke = 0;
  modell.gruppe.traverse((o) => {
    if (o.isMesh) {
      const n = o.geometry.index ? o.geometry.index.count / 3 : o.geometry.attributes.position.count / 3;
      dreiecke += n * (o.isInstancedMesh ? o.count : 1);
    }
  });
  const ergebnis = { id, art, ansicht, bauMs: Math.round(bauMs), dreiecke: Math.round(dreiecke), aufrufe: info.calls, masse: modell.masse, pendel: modell.pendel.length };
  document.getElementById('info').textContent = JSON.stringify(ergebnis);
  return ergebnis;
};

function gliederZiel(gruppe, tiefe) {
  let best = null, bestWert = Infinity;
  const m = new THREE.Matrix4(), p = new THREE.Vector3();
  const pruefe = () => {
    if (p.x < 0 || p.z < -10) return;
    const wert = Math.abs(p.x - 22) + Math.abs(p.y + tiefe * 0.55) * 0.5;
    if (wert < bestWert) { bestWert = wert; best = p.clone(); }
  };
  gruppe.updateMatrixWorld(true);
  gruppe.traverse((o) => {
    if (o.isInstancedMesh && (o.name === 'glieder' || o.name === 'perlen')) {
      for (let i = 0; i < o.count; i++) { o.getMatrixAt(i, m); p.setFromMatrixPosition(m); pruefe(); }
    } else if (o.isMesh && (o.name === 'schlange' || o.name === 'kordel')) {
      const pos = o.geometry.attributes.position;
      for (let i = 0; i < pos.count; i += 7) { p.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld); pruefe(); }
    }
  });
  return best;
}

function rendere() { renderer.render(scene, kamera); }
steuerung.addEventListener('change', rendere);

// ---------------------------------------------------------------- Bedienung (manuell)
const wahl = document.getElementById('wahl');
const ansichtWahl = document.getElementById('ansicht');
for (const id of Object.keys(ALLE)) wahl.add(new Option(id, id));
function ansichtenFuellen() {
  const art = ALLE[wahl.value].art === 'ohrring' ? 'ohrringe' : ALLE[wahl.value].art;
  ansichtWahl.innerHTML = '';
  for (const a of ANSICHTEN[art]) ansichtWahl.add(new Option(a, a));
}
async function aktualisieren() {
  await window.zeige({ id: wahl.value, ansicht: ansichtWahl.value, metall: document.getElementById('metall').value || null, ton: document.getElementById('ton').value });
}
wahl.addEventListener('change', () => { ansichtenFuellen(); aktualisieren(); });
for (const el of ['ansicht', 'metall', 'ton']) document.getElementById(el).addEventListener('change', aktualisieren);
if (AUTO) { document.getElementById('leiste').classList.add('versteckt'); document.getElementById('info').style.display = 'none'; }
ansichtenFuellen();
if (!AUTO) aktualisieren();
window.ALLE = ALLE;
window.ANSICHTEN = ANSICHTEN;
window.bereit = true;
