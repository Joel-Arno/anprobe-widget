// EIN Ohrring (fuer das Ohr auf der Betrachter-rechts-Seite; das andere Ohr bekommt
// eine an X gespiegelte Kopie). Rahmen: Ursprung = Stichpunkt im Ohrlaeppchen
// (Mitte der Laeppchendicke), +Y nach oben, +Z Blickrichtung, +X seitlich vom Kopf weg.
// Creolen liegen etwa in der Y-Z-Ebene, Stecker zeigen nach +X.
import * as THREE from 'three';
import { metallMaterial, steinMaterial } from './materialien.js';
import {
  schiene, perlenMesh, perlenSchale, perlenStreckung, kugelGeometrie, steinGeometrie,
  krappenGeometrie, zargenGeometrie, draht, aufblasen, roehre, Pfad, ketteEntlang, netz, vereinige
} from './geometrie.js';
import { baueMotiv, baueAnhaenger } from './anhaenger.js';

const PI = Math.PI;
const TAU = Math.PI * 2;
const LAEPPCHEN = 1.6;  // halbe Dicke des Ohrlaeppchens (mm): Vorderseite bei x = +1.6
const KIPPUNG = THREE.MathUtils.degToRad(24); // Creolen aus der Y-Z-Ebene gedreht: von vorn als Ring lesbar (Praesentationswinkel)

export function baueOhrring(spec, res) {
  const o = spec.ohrring;
  const metall = metallMaterial(res, spec.metall);
  const gruppe = new THREE.Group();
  gruppe.name = 'ohrring';
  const pendel = [];
  const saat = spec._saat || 1;
  let laenge = 0;

  switch (o.typ) {
    case 'creole': creole(false); break;
    case 'huggie': creole(true); break;
    case 'haenger': haenger(); break;
    case 'perlenstecker': perlenstecker(); break;
    default: stecker();
  }
  // Laenge = Abstand vom Stichpunkt bis zum tiefsten Punkt (Ruhelage)
  gruppe.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(gruppe);
  laenge = Math.max(laenge, -box.min.y);
  return { gruppe, masse: { laengeMm: laenge, hoeheMm: box.max.y - box.min.y }, pendel };

  // Stift durch das Laeppchen und Ohrmutter hinten
  function stiftUndMutter(xVorn) {
    // Stift ca. 11 mm ab Vorderseite des Laeppchens, Spitze leicht gerundet
    const hinten = 9.4;
    const stift = new THREE.CylinderGeometry(0.4, 0.4, xVorn + hinten, 10);
    stift.rotateZ(PI / 2);
    stift.translate((xVorn - hinten) / 2, 0, 0);
    const spitze = new THREE.SphereGeometry(0.4, 10, 6);
    spitze.translate(-hinten, 0, 0);
    // Ohrmutter (Butterfly): Platte am Laeppchen, Nabe, zwei eingerollte Fluegel
    const xm = -LAEPPCHEN - 0.25;
    const umriss = [];
    for (let i = 0; i < 48; i++) {
      const w = (i / 48) * TAU, c = Math.cos(w), s = Math.sin(w);
      umriss.push(new THREE.Vector2(2.4 * Math.sign(c) * Math.pow(Math.abs(c), 0.6), 1.55 * Math.sign(s) * Math.pow(Math.abs(s), 0.6)));
    }
    const platte = aufblasen(umriss, { hoehe: 0.14, rueckHoehe: 0.14, ringe: 4, form: 0.2 });
    platte.rotateY(-PI / 2);
    platte.translate(xm, 0, 0);
    const nabe = new THREE.CylinderGeometry(0.75, 0.8, 1.5, 16, 1);
    nabe.rotateZ(PI / 2);
    nabe.translate(xm - 0.75, 0, 0);
    const teile = [stift, spitze, platte, nabe];
    for (const seite of [1, -1]) {
      const pfad = [[xm - 0.05, 2.25], [xm - 0.75, 2.55], [xm - 1.45, 2.05], [xm - 1.4, 1.2], [xm - 0.95, 0.9]].map(([x, z]) => new THREE.Vector3(x, 0, z * seite));
      const k = new THREE.CatmullRomCurve3(pfad, false, 'centripetal');
      const pts = k.getSpacedPoints(24);
      teile.push(roehre(pts, { radius: 1.25, ellipse: [1, 0.12], segmente: 12, kappen: 'flach', normalen: pts.map(() => new THREE.Vector3(0, 1, 0)) }));
    }
    gruppe.add(netz(res.eigen(vereinige(teile)), metall, 'stift'));
  }

  function stecker() {
    const an = spec.anhaenger;
    let kopf;
    if (an && an.typ !== 'keiner' && an.typ !== 'stein') {
      const m = baueMotiv(an.typ, { spec, groesseMm: an.groesseMm, res, saat });
      kopf = m.gruppe;
      kopf.rotation.y = PI / 2; // Vorderseite +Z -> +X
      kopf.position.x = LAEPPCHEN - m.rueckZ;
      laenge = m.hoehe / 2;
    } else {
      // Stein in Zarge (oder Krappen bei groesseren Steinen)
      const st = spec.stein;
      const s = steinGeometrie({ groesse: st.groesseMm, schliff: st.schliff });
      const f = st.groesseMm > 5 ? krappenGeometrie({ stein: s, anzahl: 4, winkel0: PI / 4 }) : zargenGeometrie({ stein: s });
      kopf = new THREE.Group();
      kopf.add(netz(res.eigen(s.geometrie), steinMaterial(res, st.art, st.farbe), 'stein'));
      kopf.add(netz(res.eigen(f.geometrie), metall, 'fassung'));
      kopf.rotation.y = PI / 2;
      kopf.position.x = LAEPPCHEN - f.basisZ;
      laenge = s.ry + 0.4;
    }
    gruppe.add(kopf);
    stiftUndMutter(LAEPPCHEN + 0.3);
  }

  function perlenstecker() {
    const P = spec.perlen;
    const D = P.groesseMm;
    const form = P.form === 'tropfen' || P.form === 'reis' ? 'rund' : P.form;
    const schale = perlenSchale(D);
    const sm = netz(res.eigen(schale.geometrie), metall, 'schale');
    sm.rotation.y = PI / 2; // Achse Z -> X
    sm.position.x = LAEPPCHEN + schale.hoehe * 0.35;
    gruppe.add(sm);
    const perle = perlenMesh({ durchmesser: D, form, farbe: P.farbe, res, saat, detail: 14 });
    perle.rotation.z = -PI / 2; // Bohrachse Y -> X
    perle.position.x = LAEPPCHEN + schale.hoehe * 0.65 + (D * perlenStreckung(form)) / 2 * 0.97;
    gruppe.add(perle);
    laenge = D / 2;
    stiftUndMutter(LAEPPCHEN + schale.hoehe * 0.4);
  }

  function creole(huggie) {
    const D = o.durchmesserMm;
    const t = o.staerkeMm;
    // Huggie: kraeftiger, leicht ovaler Querschnitt (von der Seite gewoelbt, nicht flach wie eine Scheibe)
    const profil = o.profil || 'rund';
    const dicke = huggie ? t * 0.82 : (profil === 'rund' ? t : t * 0.8);
    const Ri = D / 2 - dicke;
    const Rm = Ri + dicke / 2;
    const reif = new THREE.Group();
    reif.name = huggie ? 'huggie' : 'creole';
    const g = schiene({ radiusX: Ri, breite: t, dicke, profil, segmente: 96 });
    const m = netz(res.eigen(g), metall, 'reif');
    m.rotation.z = -PI / 2; // Schiene um Y -> Reif um X (Y-Z-Ebene)
    m.position.y = -Rm;
    reif.add(m);
    reif.rotation.y = KIPPUNG;
    gruppe.add(reif);
    laenge = 2 * Rm + dicke / 2; // tiefster Punkt des Reifs (Ruhelage)
    // Anhaenger (z. B. Perlentropfen) am tiefsten Punkt des Reifs
    const an = spec.anhaenger;
    if (an && an.typ !== 'keiner') {
      const knoten = new THREE.Group();
      knoten.name = 'tropfen';
      knoten.position.set(0, -2 * Rm, 0);
      knoten.rotation.y = PI / 2; // Biegering um den Reifdraht (entlang Z), Vorderseite nach +X
      const anh = baueAnhaenger(an.typ, { spec, groesseMm: an.groesseMm, kettenRadius: dicke / 2, res, saat });
      knoten.add(anh.gruppe);
      reif.add(knoten);
      pendel.push({ knoten, laengeMm: anh.schwerpunktMm, achse: 'frei' });
      laenge = 2 * Rm + anh.hoeheMm;
    }
    if (!huggie) pendel.push({ knoten: reif, laengeMm: Rm, achse: 'frei' });
  }

  function haenger() {
    // Oben: kleine Kugel (Stecker) oder Haken; daran Kettchen + Tropfen
    const an = spec.anhaenger && spec.anhaenger.typ !== 'keiner' ? spec.anhaenger : { typ: 'perle', groesseMm: spec.perlen.groesseMm };
    const W = 0.95;
    let aufhaengung;
    if (o.befestigung === 'haken') {
      const pfad = [[-3.5, -11], [-5.2, -6.5], [-4.4, -1.6], [-2.2, 0.6], [0, 0.6], [2.2, 0.2], [3.4, -1.6], [3.5, -4.2], [3.5, -5.6]].map(([x, y]) => new THREE.Vector3(x, y, 0));
      const h = draht(pfad, 0.4, { segmente: 8 });
      const oese = new THREE.TorusGeometry(0.75, 0.38, 8, 20);
      oese.translate(3.5, -6.5, 0);
      const kugel = kugelGeometrie(0.9, 2);
      kugel.translate(3.5, -2.6, 0);
      gruppe.add(netz(res.eigen(vereinige([h, oese, kugel])), metall, 'haken'));
      aufhaengung = new THREE.Vector3(3.5, -6.5 - 0.75 + 0.38, 0);
    } else {
      const r = 1.8;
      const kugel = kugelGeometrie(r, 3);
      kugel.translate(LAEPPCHEN + r * 0.95, 0, 0);
      const oese = new THREE.TorusGeometry(0.6, 0.3, 8, 18);
      oese.rotateY(PI / 2);
      oese.translate(LAEPPCHEN + r * 0.95, -r - 0.35, 0);
      gruppe.add(netz(res.eigen(vereinige([kugel, oese])), metall, 'kugel'));
      stiftUndMutter(LAEPPCHEN + 0.3);
      aufhaengung = new THREE.Vector3(LAEPPCHEN + r * 0.95, -r - 0.35 - 0.6 + 0.3, 0);
    }
    const knoten = new THREE.Group();
    knoten.name = 'haenger';
    knoten.position.copy(aufhaengung);
    const anh0 = baueAnhaenger(an.typ, { spec, groesseMm: an.groesseMm, kettenRadius: W * 0.3, res, saat });
    const kettenLaenge = Math.max(0, o.laengeMm - (-aufhaengung.y) - anh0.hoeheMm);
    let y = 0;
    if (kettenLaenge > 2.5) {
      const pts = [], nn = [];
      for (let i = 0; i <= 20; i++) { pts.push(new THREE.Vector3(0, -(i / 20) * kettenLaenge, 0)); nn.push(new THREE.Vector3(1, 0, 0)); }
      knoten.add(ketteEntlang(new Pfad(pts, { normalen: nn }), { typ: 'anker', staerkeMm: W, material: metall, res, saat }));
      y = -kettenLaenge;
    }
    const halter = new THREE.Group();
    halter.position.y = y;
    halter.rotation.y = PI / 2; // Vorderseite nach +X
    halter.add(anh0.gruppe);
    knoten.add(halter);
    gruppe.add(knoten);
    pendel.push({ knoten, laengeMm: (kettenLaenge + anh0.hoeheMm) * 0.6, achse: 'frei' });
    laenge = -aufhaengung.y + kettenLaenge + anh0.hoeheMm;
  }
}
