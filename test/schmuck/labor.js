// Material-Labor: Varianten von Metall- und Perlmaterial nebeneinander rendern.
// window.labor({ zellen: [{ typ: 'gold'|'perle'|'stein', werte, titel, grund }], spalten, ton, zelle })
//   werte: Parameter wie in METALLE bzw. PERLFARBEN (fehlende aus der Vorgabe)
//   grund: 'studio' (heller Verlauf) | 'haut' | 'dunkel'
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { fotostudioUmgebung } from './fotostudio.js';
import { METALLE, PERLFARBEN, metallMaterialAus, perlMaterialAus, steinMaterial, Ressourcen } from '../../src/schmuck/materialien.js';
import { schiene, perlenGeometrie, kugelGeometrie, ketteEntlang, Pfad, steinGeometrie } from '../../src/schmuck/geometrie.js';

const canvas = document.getElementById('leinwand');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = false;
const pmrem = new THREE.PMREMGenerator(renderer);
const studio = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
const fotostudio = fotostudioUmgebung(renderer);
const PARAM = new URLSearchParams(location.search);
let foto = null;
const fotoBereit = new Promise((ok) => {
  new THREE.TextureLoader().load(PARAM.get('foto') || '/test/cache/bilder/business-person.png', (t) => {
    t.mapping = THREE.EquirectangularReflectionMapping;
    t.colorSpace = THREE.SRGBColorSpace;
    foto = pmrem.fromEquirectangular(t).texture;
    ok();
  }, undefined, () => ok());
});

function verlauf(oben, unten) {
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
const GRUENDE = {
  studio: verlauf('#f7f4ef', '#e4ddd3'),
  haut: verlauf('#d8b49a', '#b98f74'),
  dunkel: verlauf('#3a3532', '#211d1b')
};

function goldProbe(mat, res) {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(res.eigen(schiene({ radiusX: 8.5, breite: 3, dicke: 1.6, profil: 'halbrund' })), mat);
  ring.rotation.set(-1.0, 0.5, 0.15);
  ring.position.set(-6, 3, 0);
  g.add(ring);
  const kugel = new THREE.Mesh(res.eigen(kugelGeometrie(3.2, 5)), mat);
  kugel.position.set(9, 6, 0);
  g.add(kugel);
  // kurzes Stueck Ankerkette im Bogen
  const pts = [], nn = [];
  for (let i = 0; i <= 80; i++) {
    const t = i / 80;
    pts.push(new THREE.Vector3(-16 + 32 * t, -9 - 5 * Math.sin(Math.PI * t), 2));
    nn.push(new THREE.Vector3(0, 0, 1));
  }
  g.add(ketteEntlang(new Pfad(pts, { normalen: nn }), { typ: 'anker', staerkeMm: 2.2, material: mat, res }));
  return { gruppe: g, radius: 19 };
}

function perlProbe(werte, res, nah = false) {
  const g = new THREE.Group();
  const lagen = nah
    ? [[-4.6, 0, 8, 0, 'rund'], [4.6, 0, 8, 1, 'rund']]
    : [[-7.5, 4, 8, 0, 'rund'], [2, 4.5, 8, 1, 'rund'], [10.5, 3.5, 7, 2, 'tropfen'], [-5, -7, 9, 1, 'barock'], [6, -7, 6.5, 0, 'button']];
  for (const [x, y, d, v, form] of lagen) {
    const m = new THREE.Mesh(res.eigen(perlenGeometrie({ durchmesser: d, form, saat: v + 2, detail: 14 })), res.eigen(perlMaterialAus(werte, v, 'labor')));
    m.position.set(x, y, 0);
    if (form === 'button') m.rotation.x = Math.PI / 2;
    g.add(m);
  }
  return { gruppe: g, radius: nah ? 9.5 : 16 };
}

function steinProbe(art, res) {
  const g = new THREE.Group();
  const s = steinGeometrie({ groesse: 8, schliff: 'brillant' });
  const m = new THREE.Mesh(res.eigen(s.geometrie), steinMaterial(res, art));
  m.rotation.x = -0.6;
  g.add(m);
  return { gruppe: g, radius: 8 };
}

const raster = document.getElementById('raster');
let res = null;

window.labor = async function labor({ zellen, spalten = 3, ton = 'aces', zelle = 420, belichtung = null, umgebung = 'studio' }) {
  await fotoBereit;
  if (res) res.dispose();
  res = new Ressourcen();
  for (const el of [...raster.querySelectorAll('.titel')]) el.remove();
  const zeilen = Math.ceil(zellen.length / spalten);
  const B = spalten * zelle, H = zeilen * zelle;
  renderer.setSize(B, H, false);
  canvas.style.width = B + 'px'; canvas.style.height = H + 'px';
  renderer.toneMapping = ton === 'agx' ? THREE.AgXToneMapping : ton === 'neutral' ? THREE.NeutralToneMapping : THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = belichtung ?? (ton === 'agx' ? 1.35 : 1.0);
  renderer.setScissorTest(true);
  zellen.forEach((z, i) => {
    const scene = new THREE.Scene();
    scene.background = GRUENDE[z.grund || 'studio'];
    const u = z.umgebung || umgebung;
    scene.environment = u === 'foto' && foto ? foto : u === 'fotostudio' ? fotostudio : studio;
    const licht = new THREE.DirectionalLight(0xffffff, z.licht ?? 1.1);
    licht.position.set(0.45, 1, 0.55).multiplyScalar(100);
    scene.add(licht);
    let probe;
    if (z.typ === 'perle') probe = perlProbe({ ...PERLFARBEN[z.farbe || 'weiss'], ...(z.werte || {}) }, res, !!z.nah);
    else if (z.typ === 'stein') probe = steinProbe(z.art || 'zirkonia', res);
    else probe = goldProbe(res.eigen(metallMaterialAus({ ...METALLE[z.metall || 'gold'], ...(z.werte || {}) })), res);
    scene.add(probe.gruppe);
    const kamera = new THREE.PerspectiveCamera(22, 1, 1, 2000);
    const abstand = probe.radius / Math.sin(THREE.MathUtils.degToRad(11));
    kamera.position.set(0, abstand * 0.35, abstand);
    kamera.lookAt(0, 0, 0);
    const x = (i % spalten) * zelle, y = Math.floor(i / spalten) * zelle;
    renderer.setViewport(x, H - y - zelle, zelle, zelle);
    renderer.setScissor(x, H - y - zelle, zelle, zelle);
    renderer.render(scene, kamera);
    const t = document.createElement('div');
    t.className = 'titel';
    t.style.left = x + 4 + 'px'; t.style.top = y + 4 + 'px';
    t.textContent = z.titel || String(i);
    raster.appendChild(t);
  });
  renderer.setScissorTest(false);
  return { breite: B, hoehe: H };
};
window.bereit = true;
