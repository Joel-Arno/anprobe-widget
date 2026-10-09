// Pruefseite fuer src/render: echtes Foto als Quelle, Anker aus dem echten
// Tracker (Einzelbild) oder von Hand, Schmuck aus src/schmuck oder Platzhalter.
// Steuerung per window.__lauf(fall) (Playwright: test/render/pruefe.cjs).
import * as THREE from 'three';
import { Buehne } from '/src/render/buehne.js';
import { platzhalter } from './platzhalter.js';

const KONFIG = {
  mediapipe: '/node_modules/@mediapipe/tasks-vision',
  modelle: {
    hand: '/test/cache/modelle/hand_landmarker.task',
    gesicht: '/test/cache/modelle/face_landmarker.task',
    koerper: '/test/cache/modelle/pose_landmarker_full.task'
  }
};
window.AnprobeKonfig = KONFIG;

const bilder = {};
const tracker = {};
const ergebnisse = {};
let buehne = null;
let leinwand = null;
let fallAktuell = null;
let ergebnisAktuell = null;
let schmuckModul = null;

async function ladeBild(name) {
  if (!bilder[name]) {
    const b = new Image();
    b.src = `/test/cache/bilder/${name}`;
    await b.decode();
    bilder[name] = b;
  }
  return bilder[name];
}

async function holeTracker(art) {
  if (!tracker[art]) {
    const { Tracker } = await import('/src/tracking/tracker.js');
    tracker[art] = new Tracker(art, { konfig: KONFIG });
    await tracker[art].laden();
    if (tracker[art].handZusatzLaden) await tracker[art].handZusatzLaden;
  }
  return tracker[art];
}

async function holeSchmuck() {
  if (!schmuckModul) schmuckModul = await import('/src/schmuck/index.js');
  return schmuckModul;
}

/** Tracking-Ergebnis fuer Bild+Art (zwischengespeichert). */
async function trackingFuer(bild, art, spiegel) {
  const schluessel = `${bild.src}|${art}|${spiegel}`;
  if (!ergebnisse[schluessel]) {
    const t = await holeTracker(art);
    ergebnisse[schluessel] = t.verarbeite(bild, null, { W: bild.naturalWidth, H: bild.naturalHeight, spiegel });
  }
  return ergebnisse[schluessel];
}

/** Ergebnis kopieren und optional Kopfneigung um Z (Grad) auf Ohranker anwenden. */
function veraendere(erg, fall) {
  const e = { ...erg, anker: { ...erg.anker } };
  if (fall.neigungGrad && (e.anker.ohrL || e.anker.ohrR)) {
    const qz = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), (fall.neigungGrad * Math.PI) / 180);
    for (const k of ['ohrL', 'ohrR']) {
      if (!e.anker[k]) continue;
      e.anker[k] = { ...e.anker[k], quaternion: qz.clone().multiply(e.anker[k].quaternion) };
    }
  }
  if (fall.ohneVerdecker) e.verdecker = [];
  return e;
}

function quelleFuer(bild, fall) {
  if (!fall.toenung) return bild;
  const c = document.createElement('canvas');
  c.width = bild.naturalWidth;
  c.height = bild.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(bild, 0, 0);
  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = fall.toenung;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.globalCompositeOperation = 'source-over';
  if (fall.helligkeit) {
    ctx.fillStyle = `rgba(0,0,0,${1 - fall.helligkeit})`;
    ctx.fillRect(0, 0, c.width, c.height);
  }
  return c;
}

function zeigeVerdecker() {
  // Verdecker halbtransparent farbig ueber das Bild legen (nur Pruefansicht)
  const v = buehne.verdecker;
  const mats = [v.material, v.netzMaterial];
  const alt = mats.map((m) => ({ cw: m.colorWrite, dw: m.depthWrite, t: m.transparent, o: m.opacity, c: m.color.getHex(), dt: m.depthTest }));
  for (const m of mats) {
    m.colorWrite = true; m.depthWrite = false; m.transparent = true; m.opacity = 0.3; m.color.set(0x3fa0ff); m.depthTest = false;
    m.needsUpdate = true;
  }
  buehne.renderer.render(buehne.szeneVerdecker, buehne.kamera);
  mats.forEach((m, i) => {
    Object.assign(m, { colorWrite: alt[i].cw, depthWrite: alt[i].dw, transparent: alt[i].t, opacity: alt[i].o, depthTest: alt[i].dt });
    m.color.setHex(alt[i].c);
    m.needsUpdate = true;
  });
}

/** Bildschirmrechteck (CSS-px) um die sichtbaren Schmuckstuecke. */
function ausschnitte() {
  const liste = [];
  const rect = leinwand.getBoundingClientRect();
  for (const e of buehne.eintraege) {
    for (const inst of e.instanzen) {
      if (!inst.wurzel.visible) continue;
      const c = e.kugel.center.clone().applyMatrix4(inst.wurzel.matrix);
      const r = e.kugel.radius * inst.wurzel.matrix.getMaxScaleOnAxis();
      const s = buehne.sicht;
      const fx = rect.width / (s.rechts - s.links);
      const fy = rect.height / (s.oben - s.unten);
      liste.push({
        key: inst.key,
        x: rect.left + (c.x - r - s.links) * fx,
        y: rect.top + (s.oben - c.y - r) * fy,
        b: 2 * r * fx,
        h: 2 * r * fy
      });
    }
  }
  return liste;
}

/**
 * fall: { bild, art, vorlage | spec | platzhalter, spiegel, breite, hoehe, modus,
 *         qualitaet, frames, neigungGrad, ohneSchatten, ohneVerdecker, zeigeVerdecker,
 *         toenung, helligkeit, ohneSchmuck, finger, pixelRatio, bewegung }
 */
window.__lauf = async (fall) => {
  fallAktuell = fall;
  if (buehne) {
    buehne.dispose();
    buehne = null;
  }
  if (leinwand) leinwand.remove();
  const bild = await ladeBild(fall.bild);
  const W = bild.naturalWidth;
  const H = bild.naturalHeight;
  const breite = fall.breite || W;
  const hoehe = fall.hoehe || Math.round(breite * H / W);
  leinwand = document.createElement('canvas');
  leinwand.style.display = 'block';
  document.getElementById('buehne').appendChild(leinwand);

  buehne = new Buehne(leinwand, { pixelRatio: fall.pixelRatio || 1, qualitaet: fall.qualitaet || 'hoch', tonemapping: fall.tonemapping || 'aces' });
  window.__buehne = buehne;
  buehne.setzeQuelle(quelleFuer(bild, fall), { W, H, spiegel: !!fall.spiegel, statisch: true });
  buehne.setzeAnsicht(breite, hoehe, fall.modus || 'contain');

  // Anker
  let erg = null;
  if (fall.ergebnis) erg = fall.ergebnis;
  else if (!fall.ohneSchmuck) erg = await trackingFuer(bild, fall.art, !!fall.spiegel);
  if (erg) erg = veraendere(erg, fall);
  ergebnisAktuell = erg;
  window.__ergebnis = erg;

  // Schmuck
  let modell = null;
  if (!fall.ohneSchmuck) {
    if (fall.platzhalter) modell = platzhalter(fall.platzhalter);
    else {
      const s = await holeSchmuck();
      const spec = fall.spec || s.VORLAGEN[fall.vorlage].spec;
      modell = s.baueSchmuck(spec);
    }
    buehne.setzeSchmuck(modell, { finger: fall.finger || 'ring' });
  }
  if (fall.ohneSchatten) {
    buehne.q = { ...buehne.q, schatten: 0 };
  }
  if (fall.ohneWeich) {
    buehne.q = { ...buehne.q, weich: false };
    buehne.weich.setzeAktiv(false);
  }
  const n = fall.frames ?? 30;
  const t0 = performance.now();
  for (let i = 0; i < n; i++) {
    let e = erg;
    if (erg && fall.bewegung && i < n - (fall.ruheFrames ?? 0)) {
      // Anker seitlich hin- und herbewegen (Physik-Test)
      e = { ...erg, anker: { ...erg.anker } };
      const dx = Math.sin(i / 30 * Math.PI * 2 * (fall.bewegung.hz || 1.5)) * (fall.bewegung.px || 40);
      for (const [k, a] of Object.entries(erg.anker)) {
        if (a && a.position) e.anker[k] = { ...a, position: a.position.clone().add(new THREE.Vector3(dx, 0, 0)) };
      }
    }
    buehne.aktualisiere(e, 1 / 30);
    buehne.rendere();
  }
  const ms = (performance.now() - t0) / Math.max(1, n);
  if (fall.zeigeVerdecker) zeigeVerdecker();
  const info = buehne.renderer.info;
  return {
    W, H, breite, hoehe,
    gefunden: erg ? erg.gefunden : null,
    anker: erg ? Object.keys(erg.anker) : [],
    masse: erg ? erg.masse : null,
    verdecker: erg ? erg.verdecker.length : 0,
    schattenflaechen: erg ? (Array.isArray(erg.schattenflaechen) ? 'array' : Object.keys(erg.schattenflaechen || {})) : null,
    msProFrame: ms,
    belichtung: buehne.renderer.toneMappingExposure,
    lichtFaktor: buehne.licht.faktor,
    lichtFarbe: buehne.licht.farbe.toArray(),
    drawCalls: info.render.calls,
    dreiecke: info.render.triangles,
    programme: info.programs ? info.programs.length : null,
    ausschnitte: ausschnitte(),
    sicht: buehne.sicht
  };
};

/** Weiter rendern (z. B. nach Aenderungen), n Frames. */
window.__weiter = (n = 1, aenderung = null) => {
  let erg = ergebnisAktuell;
  if (aenderung && erg) erg = veraendere(erg, { ...fallAktuell, ...aenderung });
  for (let i = 0; i < n; i++) {
    buehne.aktualisiere(erg, 1 / 30);
    buehne.rendere();
  }
  return ausschnitte();
};

/** Pixelvergleich Hintergrund vs. Originalbild (Canvas = Bildgroesse, pixelRatio 1). */
window.__pixelVergleich = () => {
  const r = buehne.renderer;
  buehne.rendere();
  const c = document.createElement('canvas');
  c.width = r.domElement.width;
  c.height = r.domElement.height;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(r.domElement, 0, 0);
  const a = ctx.getImageData(0, 0, c.width, c.height).data;
  const bild = bilder[fallAktuell.bild];
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(bild, 0, 0, c.width, c.height);
  const b = ctx.getImageData(0, 0, c.width, c.height).data;
  let max = 0;
  let summe = 0;
  let abweichend = 0;
  const hist = new Array(6).fill(0);
  for (let i = 0; i < a.length; i += 4) {
    for (let k = 0; k < 3; k++) {
      const d = Math.abs(a[i + k] - b[i + k]);
      if (d > max) max = d;
      summe += d;
      hist[Math.min(5, d)]++;
      if (d > 2) abweichend++;
    }
  }
  return { breite: c.width, hoehe: c.height, max, mittel: summe / (a.length * 0.75), abweichendUeber2: abweichend, hist };
};

/** Aufnahme pruefen. */
window.__aufnahme = async (opt = {}) => {
  const blob = await buehne.aufnahme(opt);
  const bmp = await createImageBitmap(blob);
  const url = await new Promise((ok) => {
    const fr = new FileReader();
    fr.onload = () => ok(fr.result);
    fr.readAsDataURL(blob);
  });
  // Nach der Aufnahme muss die Anzeige unveraendert weiterlaufen
  const groesse = buehne.renderer.getSize(new THREE.Vector2());
  return { typ: blob.type, bytes: blob.size, breite: bmp.width, hoehe: bmp.height, dataUrl: url, anzeige: [groesse.x, groesse.y, buehne.renderer.getPixelRatio()] };
};

/** Mittlere Farbe der Schmuckpixel (Differenz zu einem Bild ohne Schmuck). */
window.__schmuckFarbe = () => {
  const r = buehne.renderer;
  const lese = () => {
    buehne.rendere();
    const c = document.createElement('canvas');
    c.width = r.domElement.width;
    c.height = r.domElement.height;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(r.domElement, 0, 0);
    return ctx.getImageData(0, 0, c.width, c.height).data;
  };
  const mit = lese();
  for (const e of buehne.eintraege) for (const inst of e.instanzen) inst.wurzel.visible = false;
  buehne.funkeln.objekt.visible = false;
  buehne.empfaenger.objekt.visible = false;
  const ohne = lese();
  for (const e of buehne.eintraege) for (const inst of e.instanzen) inst.wurzel.visible = true;
  buehne.funkeln.objekt.visible = true;
  buehne.empfaenger.objekt.visible = true;
  let n = 0;
  const s = [0, 0, 0];
  for (let i = 0; i < mit.length; i += 4) {
    const d = Math.abs(mit[i] - ohne[i]) + Math.abs(mit[i + 1] - ohne[i + 1]) + Math.abs(mit[i + 2] - ohne[i + 2]);
    if (d > 40) {
      n++;
      s[0] += mit[i]; s[1] += mit[i + 1]; s[2] += mit[i + 2];
    }
  }
  return { pixel: n, farbe: s.map((x) => Math.round(x / Math.max(1, n))) };
};

/** Mehrfaches Oeffnen/Schliessen; liefert Ressourcenzaehler vor dispose. */
window.__mehrfach = async (n = 5, fall) => {
  const zaehler = [];
  for (let i = 0; i < n; i++) {
    await window.__lauf({ ...fall, frames: 5 });
    const m = buehne.renderer.info.memory;
    zaehler.push({ geometrien: m.geometries, texturen: m.textures });
    buehne.setzeSchmuck(null);
    for (let k = 0; k < 12; k++) { buehne.aktualisiere(ergebnisAktuell, 1 / 30); buehne.rendere(); }
    const m2 = buehne.renderer.info.memory;
    zaehler[i].nachEntfernen = { geometrien: m2.geometries, texturen: m2.texturen ?? m2.textures };
  }
  const r = buehne.renderer;
  buehne.dispose({ kontextFreigeben: false });
  const m3 = r.info.memory;
  zaehler.push({ nachDispose: { geometrien: m3.geometries, texturen: m3.textures, programme: r.info.programs?.length } });
  r.forceContextLoss();
  buehne = null;
  return zaehler;
};

window.__bereit = true;
