// Schnittstelle schmuck -> render (siehe docs/ARCHITEKTUR.md)
//   baueSchmuck(spec)      parametrisches Modell aus JSON
//   ladeGlb(url, spec)     GLB in mm mit gleichen Konventionen
//   pruefeSpec(spec)       Pruefung + Standardwerte
//   VORLAGEN               fertige Vorlagen im Stil des Shops
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Ressourcen, metallMaterial, perlMaterial, steinMaterial } from './materialien.js';
import { saatAusText } from './geometrie.js';
import { baueRing } from './ring.js';
import { baueArmband } from './armband.js';
import { baueKette } from './kette.js';
import { baueOhrring } from './ohrring.js';
import { ANHAENGER_TYPEN } from './anhaenger.js';

export { VORLAGEN } from './vorlagen.js';
// Zusaetzlich (z. B. fuer Editor und Varianten-Swatches)
export { metallSwatch, METALLE, PERLFARBEN } from './materialien.js';

const ARTEN = ['ring', 'armband', 'kette', 'ohrringe'];
const ART_ALIAS = { ohrring: 'ohrringe', ohrstecker: 'ohrringe', creolen: 'ohrringe', halskette: 'kette', collier: 'kette', armreif: 'armband', ringe: 'ring' };

// Erlaubte Werte je Feld (Pfad 'gruppe.feld'), erster Wert = Standard
const AUSWAHL = {
  metall: ['gold', 'silber', 'rosegold', 'weissgold'],
  'kette.typ': ['anker', 'erbs', 'figaro', 'panzer', 'schlange', 'kugel', 'paperclip', 'seil', 'perlenstrang'],
  'perlen.form': ['rund', 'barock', 'tropfen', 'button', 'reis'],
  'perlen.farbe': ['weiss', 'creme', 'rose', 'champagner', 'grau'],
  'perlen.anordnung': ['strang', 'stationen', 'einzeln'],
  'anhaenger.typ': ['keiner', ...ANHAENGER_TYPEN],
  'ohrring.typ': ['stecker', 'creole', 'huggie', 'haenger', 'perlenstecker'],
  'ohrring.profil': ['rund', 'flach', 'halbrund'],
  'ohrring.befestigung': ['stecker', 'haken'],
  'ring.typ': ['band', 'solitaer', 'perle', 'offen', 'siegel', 'kette'],
  'ring.profil': ['halbrund', 'rund', 'flach'],
  'stein.art': ['zirkonia', 'diamant', 'saphir', 'rubin', 'smaragd', 'perle'],
  'stein.schliff': ['brillant', 'oval', 'tropfen', 'smaragd'],
  'armband.typ': ['kette', 'perlen', 'reif', 'tennis']
};

// [min, max, standard] je Zahl
const ZAHLEN = {
  'kette.staerkeMm': [0.6, 6, 1.2],
  'kette.laengeCm': [30, 100, 45],
  'perlen.groesseMm': [2, 16, 6],
  'perlen.abstandMm': [5, 200, 30],
  'perlen.anzahl': [0, 200, 0],
  'anhaenger.groesseMm': [4, 40, 12],
  'ohrring.durchmesserMm': [6, 70, 14],
  'ohrring.staerkeMm': [0.8, 8, 2],
  'ohrring.laengeMm': [8, 90, 30],
  'ring.schieneMm': [1, 12, 2],
  'ring.innenDurchmesserMm': [12, 26, 17],
  'ring.krappen': [4, 6, 4],
  'stein.groesseMm': [1, 14, 4],
  'armband.laengeCm': [12, 26, 18],
  'armband.verlaengerungCm': [0, 8, 3],
  'armband.zwischenperlenMm': [0, 6, 2.5],
  'armband.breiteMm': [1, 30, 3]
};

const GRUPPEN = ['kette', 'perlen', 'anhaenger', 'ohrring', 'ring', 'stein', 'armband'];

/** Erlaubte Werte ('gruppe.feld' -> Liste, erster = Standard) und Zahlbereiche ([min, max, standard]). */
export const SPEC_OPTIONEN = { auswahl: AUSWAHL, zahlen: ZAHLEN };
// Felder ohne festen Standard (der Erzeuger waehlt passend zum Typ)
const OHNE_STANDARD = new Set(['ohrring.profil']);

function istObjekt(v) { return v && typeof v === 'object' && !Array.isArray(v); }

/**
 * Spec pruefen und mit Standardwerten auffuellen.
 * Liefert { ok, fehler: string[], spec } – spec ist immer baubar (ungueltige Werte ersetzt).
 */
export function pruefeSpec(spec) {
  const fehler = [];
  const ein = istObjekt(spec) ? spec : {};
  if (!istObjekt(spec)) fehler.push('Spec fehlt oder ist kein Objekt.');
  const aus = {};
  // Art
  let art = typeof ein.art === 'string' ? ein.art.toLowerCase().trim() : '';
  art = ART_ALIAS[art] || art;
  if (!ARTEN.includes(art)) {
    fehler.push(`art '${ein.art}' unbekannt (erlaubt: ${ARTEN.join(', ')}); 'kette' verwendet.`);
    art = 'kette';
  }
  aus.art = art;
  if (typeof ein.name === 'string') aus.name = ein.name;
  // Metall
  aus.metall = auswahl('metall', ein.metall, fehler);
  // Gruppen
  for (const g of GRUPPEN) {
    const quelle = istObjekt(ein[g]) ? ein[g] : {};
    if (ein[g] !== undefined && !istObjekt(ein[g])) fehler.push(`${g} muss ein Objekt sein.`);
    const ziel = { ...quelle };
    for (const pfad of Object.keys(AUSWAHL)) {
      const [gr, feld] = pfad.split('.');
      if (gr !== g || !feld) continue;
      if (OHNE_STANDARD.has(pfad) && (quelle[feld] === undefined || quelle[feld] === null || quelle[feld] === '')) { delete ziel[feld]; continue; }
      ziel[feld] = auswahl(pfad, quelle[feld], fehler);
    }
    for (const pfad of Object.keys(ZAHLEN)) {
      const [gr, feld] = pfad.split('.');
      if (gr === g) ziel[feld] = zahl(pfad, quelle[feld], fehler);
    }
    aus[g] = ziel;
  }
  // Abhaengigkeiten und sinnvolle Standards je Art
  if (aus.ring.krappen !== 4 && aus.ring.krappen !== 6) aus.ring.krappen = aus.ring.krappen > 5 ? 6 : 4;
  if (aus.stein.farbe !== undefined && aus.stein.farbe !== null && !/^#[0-9a-f]{6}$/i.test(String(aus.stein.farbe))) {
    fehler.push(`stein.farbe '${aus.stein.farbe}' ist keine Farbe wie '#aabbcc'; Standard verwendet.`);
    aus.stein.farbe = null;
  }
  if (aus.stein.farbe === undefined) aus.stein.farbe = null;
  if (art === 'ring' && aus.ring.typ === 'solitaer' && aus.stein.art === 'perle') aus.ring.typ = 'perle';
  if (aus.stein.art === 'perle') aus.stein.art = 'zirkonia';
  if (aus.ohrring.befestigung === undefined) aus.ohrring.befestigung = 'stecker';
  if (aus.armband.offen !== undefined) aus.armband.offen = !!aus.armband.offen;
  else aus.armband.offen = false;
  return { ok: fehler.length === 0, fehler, spec: aus };
}

function auswahl(pfad, wert, fehler) {
  const erlaubt = AUSWAHL[pfad];
  if (wert === undefined || wert === null || wert === '') return erlaubt[0];
  const w = String(wert).toLowerCase().trim()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/é/g, 'e');
  if (erlaubt.includes(w)) return w;
  fehler.push(`${pfad} '${wert}' unbekannt (erlaubt: ${erlaubt.join(', ')}); '${erlaubt[0]}' verwendet.`);
  return erlaubt[0];
}

function zahl(pfad, wert, fehler) {
  const [min, max, std] = ZAHLEN[pfad];
  if (wert === undefined || wert === null || wert === '') return std;
  const z = typeof wert === 'number' ? wert : parseFloat(String(wert).replace(',', '.'));
  if (!Number.isFinite(z)) {
    fehler.push(`${pfad} '${wert}' ist keine Zahl; ${std} verwendet.`);
    return std;
  }
  if (z < min || z > max) {
    const k = Math.min(max, Math.max(min, z));
    fehler.push(`${pfad} ${z} ausserhalb ${min}…${max}; auf ${k} begrenzt.`);
    return k;
  }
  return z;
}

const BAUER = { ring: baueRing, armband: baueArmband, kette: baueKette, ohrringe: baueOhrring };

/**
 * Parametrisches Schmuckmodell bauen.
 * Liefert SchmuckModell { art, gruppe, masse, pendel, dispose() } in mm.
 */
export function baueSchmuck(spec) {
  const { spec: s, fehler } = pruefeSpec(spec);
  if (fehler.length && typeof console !== 'undefined') console.warn('[schmuck] Spec-Hinweise:', fehler);
  const { name, ...ohneName } = s;
  s._saat = saatAusText(JSON.stringify({ ...ohneName, metall: undefined })) + 1;
  const res = new Ressourcen();
  let teil;
  try {
    teil = BAUER[s.art](s, res);
  } catch (e) {
    // Notfall: mit Standardwerten der Art bauen, damit die Anprobe nicht abbricht
    console.error('[schmuck] Bau fehlgeschlagen, Standardmodell verwendet:', e);
    res.dispose();
    return baueSchmuck({ art: s.art, metall: s.metall });
  }
  const gruppe = teil.gruppe;
  gruppe.name = `schmuck-${s.art}`;
  gruppe.userData.spec = s;
  gruppe.userData.einheit = 'mm';
  const masse = { ...teil.masse };
  if (s.art === 'kette') masse.halsRadiusMm = masse.halsRadiusMm ?? 55;
  let entsorgt = false;
  return {
    art: s.art,
    gruppe,
    masse,
    pendel: teil.pendel || [],
    dispose() {
      if (entsorgt) return;
      entsorgt = true;
      entsorgeInstanzen(gruppe);
      res.dispose();
    }
  };
}

// InstancedMesh haelt eigene GPU-Puffer (Matrizen, Farben); dispose() gibt sie im Renderer frei
function entsorgeInstanzen(gruppe) {
  gruppe.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
}

/**
 * GLB laden (Masseinheit mm, Rahmen wie bei den parametrischen Modellen).
 * Materialnamen 'metall*'/'gold*'/'silber*', 'perle*', 'stein*'/'diamant*' werden durch die
 * Shop-Materialien ersetzt (Metall laut spec.metall). Knoten mit Namen 'pendel*' werden zu
 * Pendeln (userData/extras: laengeMm, achse). masse aus scene.extras.masse oder aus der Spec.
 */
export async function ladeGlb(url, spec = {}) {
  const { spec: s } = pruefeSpec({ art: 'kette', ...spec });
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(url);
  const res = new Ressourcen();
  const gruppe = new THREE.Group();
  gruppe.name = `glb-${s.art}`;
  const szene = gltf.scene;
  gruppe.add(szene);
  const eigene = new Set();
  const pendel = [];
  szene.traverse((o) => {
    if (o.isMesh) {
      if (o.geometry) eigene.add(o.geometry);
      const ersetze = (m) => {
        const n = (m && m.name ? m.name : '').toLowerCase();
        if (/^(metall|metal|gold|silber|silver)/.test(n)) return metallMaterial(res, s.metall);
        if (/^(perle|pearl)/.test(n)) return perlMaterial(res, s.perlen.farbe, 0);
        if (/^(stein|diamant|stone|gem)/.test(n)) return steinMaterial(res, s.stein.art, s.stein.farbe);
        eigene.add(m);
        return m;
      };
      o.material = Array.isArray(o.material) ? o.material.map(ersetze) : ersetze(o.material);
      o.castShadow = true;
    }
    if (/^pendel/i.test(o.name)) {
      const box = new THREE.Box3().setFromObject(o);
      pendel.push({
        knoten: o,
        laengeMm: Number(o.userData.laengeMm) || Math.max(1, (box.max.y - box.min.y) / 2),
        achse: ['frei', 'x', 'z'].includes(o.userData.achse) ? o.userData.achse : 'frei'
      });
    }
  });
  const box = new THREE.Box3().setFromObject(szene);
  const extra = szene.userData && szene.userData.masse ? szene.userData.masse : {};
  const masse = { ...extra };
  if (s.art === 'ring' && masse.innenRadiusMm === undefined) masse.innenRadiusMm = s.ring.innenDurchmesserMm / 2;
  if (s.art === 'kette' && masse.halsRadiusMm === undefined) masse.halsRadiusMm = 55;
  if (s.art === 'ohrringe' && masse.laengeMm === undefined) masse.laengeMm = Math.max(0, -box.min.y);
  if (s.art === 'armband' && masse.innenRadienMm === undefined) {
    masse.innenRadienMm = { x: Math.max(20, -box.min.x - 1), z: Math.max(15, -box.min.z - 1) };
  }
  let entsorgt = false;
  return {
    art: s.art,
    gruppe,
    masse,
    pendel,
    dispose() {
      if (entsorgt) return;
      entsorgt = true;
      entsorgeInstanzen(gruppe);
      for (const o of eigene) {
        if (o.isMaterial) {
          for (const k of Object.keys(o)) if (o[k] && o[k].isTexture) o[k].dispose();
        }
        o.dispose();
      }
      res.dispose();
    }
  };
}
