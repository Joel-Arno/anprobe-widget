// Felder des Editors: Beschriftungen, Bedienelemente und Sichtbarkeit je Art/Typ,
// dazu die Umwandlung zwischen Editor-Zustand (vollstaendige, gepruefte Spec)
// und dem knappen JSON fuer das Shopify-Metafeld anprobe.modell.
import { pruefeSpec, SPEC_OPTIONEN, VORLAGEN } from '../src/schmuck/index.js';

const { auswahl: AUSWAHL, zahlen: ZAHLEN } = SPEC_OPTIONEN;

export const ARTEN = [
  { wert: 'ohrringe', name: 'Ohrringe' },
  { wert: 'kette', name: 'Kette' },
  { wert: 'armband', name: 'Armband' },
  { wert: 'ring', name: 'Ring' }
];
export const ART_NAMEN = Object.fromEntries(ARTEN.map((a) => [a.wert, a.name]));

export const METALL_NAMEN = { gold: 'Gold', silber: 'Silber', rosegold: 'Roségold', weissgold: 'Weißgold' };
export const METALL_HINWEIS = {
  gold: '18k PVD-vergoldet', silber: 'Edelstahl, silberfarben', rosegold: 'PVD roségold', weissgold: 'hell, rhodiniert'
};

// Anzeigenamen der Auswahlwerte
const NAMEN = {
  metall: METALL_NAMEN,
  'kette.typ': { anker: 'Anker', erbs: 'Erbs', figaro: 'Figaro', panzer: 'Panzer', schlange: 'Schlange', kugel: 'Kugel', paperclip: 'Paperclip', seil: 'Kordel', perlenstrang: 'Perlenstrang' },
  'perlen.form': { rund: 'Rund', barock: 'Barock', tropfen: 'Tropfen', button: 'Button', reis: 'Reis' },
  'perlen.farbe': { weiss: 'Weiß', creme: 'Creme', rose: 'Rosé', champagner: 'Champagner', grau: 'Grau' },
  'anhaenger.typ': { keiner: 'Keiner', perle: 'Perle', sonne: 'Sonne', blume: 'Blume', mond: 'Mond', herz: 'Herz', muenze: 'Münze', tropfen: 'Tropfen', stein: 'Stein', stern: 'Stern', muschel: 'Muschel' },
  'ohrring.typ': { stecker: 'Stecker', creole: 'Creole', huggie: 'Huggie', haenger: 'Hänger', perlenstecker: 'Perlenstecker' },
  'ohrring.profil': { '': 'Automatisch', rund: 'Rund', halbrund: 'Halbrund', flach: 'Flach' },
  'ohrring.befestigung': { stecker: 'Kugelstecker', haken: 'Haken' },
  'ring.typ': { band: 'Band', solitaer: 'Solitär', perle: 'Perle', offen: 'Offen', siegel: 'Siegel', kette: 'Kette' },
  'ring.profil': { halbrund: 'Halbrund', rund: 'Rund', flach: 'Flach' },
  'ring.krappen': { 4: '4 Krappen', 6: '6 Krappen' },
  'stein.art': { zirkonia: 'Zirkonia', diamant: 'Diamant', saphir: 'Saphir', rubin: 'Rubin', smaragd: 'Smaragd' },
  'stein.schliff': { brillant: 'Brillant', oval: 'Oval', tropfen: 'Tropfen', smaragd: 'Treppe' },
  'armband.typ': { kette: 'Kette', perlen: 'Perlen', reif: 'Reif', tennis: 'Tennis' },
  perlenAn: { keine: 'Keine', stationen: 'Stationen', einzeln: 'Einzeln' }
};

/** Anzeigename eines Werts. */
export function wertName(pfad, wert) {
  const n = NAMEN[pfad];
  return (n && n[wert]) || String(wert);
}

// Farbtupfer fuer Perlen (Oberflaeche)
export const PERL_TUPFER = { weiss: '#F4F1EC', creme: '#EFE3CF', rose: '#F1DDD8', champagner: '#E3CDAE', grau: '#8D8C92' };
// typische Steinfarben (wenn keine eigene Farbe gesetzt ist)
export const STEIN_TUPFER = { zirkonia: '#F4F6F8', diamant: '#FFFFFF', saphir: '#2B4FA8', rubin: '#B3123A', smaragd: '#1E8A55' };

// ---------------------------------------------------------------- Pfade

export function lies(spec, pfad) {
  return pfad.split('.').reduce((o, k) => (o == null ? undefined : o[k]), spec);
}

export function schreibe(spec, pfad, wert) {
  const teile = pfad.split('.');
  let o = spec;
  for (let i = 0; i < teile.length - 1; i++) {
    if (!o[teile[i]] || typeof o[teile[i]] !== 'object') o[teile[i]] = {};
    o = o[teile[i]];
  }
  const k = teile[teile.length - 1];
  if (wert === undefined) delete o[k];
  else o[k] = wert;
}

// ---------------------------------------------------------------- Sichtbarkeit

const istCreole = (s) => s.ohrring.typ === 'creole' || s.ohrring.typ === 'huggie';
const anh = (s) => s.anhaenger.typ;
const mitPerlenAnhaenger = (s) => anh(s) === 'perle' || anh(s) === 'blume';

/** Perlen an Kette/Kettenarmband: 'keine' | 'stationen' | 'einzeln'. */
export function perlenAn(s) {
  if (!(s.perlen.anzahl > 0)) return 'keine';
  return s.perlen.anordnung === 'einzeln' ? 'einzeln' : s.perlen.anordnung === 'stationen' ? 'stationen' : 'keine';
}

const anhaengerSichtbar = (s) =>
  (s.art === 'ohrringe' && s.ohrring.typ !== 'perlenstecker') ||
  s.art === 'kette' ||
  (s.art === 'armband' && s.armband.typ === 'kette');

// Perlen als eigener Teil des Stuecks (nicht nur im Anhaenger)
const perlenEigen = (s) => {
  switch (s.art) {
    case 'ohrringe': return s.ohrring.typ === 'perlenstecker';
    case 'kette': return s.kette.typ === 'perlenstrang' || perlenAn(s) !== 'keine';
    case 'armband': return s.armband.typ === 'perlen' || (s.armband.typ === 'kette' && perlenAn(s) !== 'keine');
    case 'ring': return s.ring.typ === 'perle' || s.ring.typ === 'offen';
    default: return false;
  }
};
const perlenSichtbar = (s) => perlenEigen(s) || (anhaengerSichtbar(s) && mitPerlenAnhaenger(s));
// Die Bluete traegt immer eine runde Perle; die Form zaehlt nur fuer andere Perlen
const perlenFormSichtbar = (s) => perlenEigen(s) || (anhaengerSichtbar(s) && anh(s) === 'perle');

const steinSichtbar = (s) => {
  switch (s.art) {
    case 'ohrringe': return (s.ohrring.typ === 'stecker' && (anh(s) === 'keiner' || anh(s) === 'stein')) || (s.ohrring.typ !== 'perlenstecker' && anh(s) === 'stein');
    case 'kette': return anh(s) === 'stein';
    case 'armband': return s.armband.typ === 'tennis' || (s.armband.typ === 'kette' && anh(s) === 'stein');
    case 'ring': return s.ring.typ === 'solitaer';
    default: return false;
  }
};

// Perlen-Anordnung als eigenes Bedienelement nur an Ketten (nicht Perlenstrang) und Kettenarmbaendern
const perlenAnSichtbar = (s) => (s.art === 'kette' && s.kette.typ !== 'perlenstrang') || (s.art === 'armband' && s.armband.typ === 'kette');

/**
 * Abschnitte mit Feldern. Feld:
 *  { pfad, label, typ: 'wahl'|'zahl'|'schalter'|'farbe'|'perlfarbe'|'perlenAn',
 *    wenn?(s), optionen?(s) -> Werte, einheit?, schritt?, bereich?(s) -> [min,max], hinweis?(s, wert) }
 */
export const ABSCHNITTE = [
  {
    id: 'ohrring', titel: 'Ohrring', wenn: (s) => s.art === 'ohrringe',
    felder: [
      { pfad: 'ohrring.typ', label: 'Typ', typ: 'wahl' },
      { pfad: 'ohrring.durchmesserMm', label: 'Durchmesser', typ: 'zahl', einheit: 'mm', schritt: 0.5, bereich: () => [8, 50], wenn: istCreole },
      { pfad: 'ohrring.staerkeMm', label: 'Stärke', typ: 'zahl', einheit: 'mm', schritt: 0.1, bereich: () => [1, 6], wenn: istCreole },
      { pfad: 'ohrring.profil', label: 'Profil', typ: 'wahl', optionen: () => ['', 'rund', 'halbrund', 'flach'], wenn: istCreole },
      { pfad: 'ohrring.laengeMm', label: 'Gesamtlänge', typ: 'zahl', einheit: 'mm', schritt: 1, bereich: () => [12, 80], wenn: (s) => s.ohrring.typ === 'haenger', hinweis: () => 'vom Ohrloch bis zum tiefsten Punkt' },
      { pfad: 'ohrring.befestigung', label: 'Befestigung', typ: 'wahl', wenn: (s) => s.ohrring.typ === 'haenger' }
    ]
  },
  {
    id: 'ring', titel: 'Ring', wenn: (s) => s.art === 'ring',
    felder: [
      { pfad: 'ring.typ', label: 'Typ', typ: 'wahl' },
      { pfad: 'ring.innenDurchmesserMm', label: 'Innendurchmesser', typ: 'zahl', einheit: 'mm', schritt: 0.1, bereich: () => [14, 22], hinweis: (s, w) => `Ringgröße ${Math.round(w * Math.PI)} (Innenumfang in mm)` },
      { pfad: 'ring.schieneMm', label: (s) => (s.ring.typ === 'kette' ? 'Gliedstärke' : 'Schienenbreite'), typ: 'zahl', einheit: 'mm', schritt: 0.1, bereich: () => [1, 8] },
      { pfad: 'ring.profil', label: 'Profil', typ: 'wahl', wenn: (s) => ['band', 'solitaer', 'perle'].includes(s.ring.typ) },
      { pfad: 'ring.krappen', label: 'Fassung', typ: 'wahl', optionen: () => [4, 6], wenn: (s) => s.ring.typ === 'solitaer' }
    ]
  },
  {
    id: 'armband', titel: 'Armband', wenn: (s) => s.art === 'armband',
    felder: [
      { pfad: 'armband.typ', label: 'Typ', typ: 'wahl' },
      { pfad: 'armband.laengeCm', label: (s) => (s.armband.typ === 'reif' ? 'Innenumfang' : 'Länge'), typ: 'zahl', einheit: 'cm', schritt: 0.5, bereich: () => [14, 22] },
      { pfad: 'armband.verlaengerungCm', label: 'Verlängerung', typ: 'zahl', einheit: 'cm', schritt: 0.5, bereich: () => [0, 6], wenn: (s) => s.armband.typ === 'kette' },
      { pfad: 'armband.zwischenperlenMm', label: 'Goldkugeln dazwischen', typ: 'zahl', einheit: 'mm', schritt: 0.5, bereich: () => [0, 5], wenn: (s) => s.armband.typ === 'perlen', hinweis: (s, w) => (w > 0 ? 'Durchmesser der Zwischenkugeln' : 'keine Zwischenkugeln') },
      { pfad: 'armband.breiteMm', label: 'Breite', typ: 'zahl', einheit: 'mm', schritt: 0.5, bereich: () => [1, 20], wenn: (s) => s.armband.typ === 'reif' },
      { pfad: 'ring.profil', label: 'Profil', typ: 'wahl', wenn: (s) => s.armband.typ === 'reif' },
      { pfad: 'armband.offen', label: 'Offene Spange', typ: 'schalter', wenn: (s) => s.armband.typ === 'reif' }
    ]
  },
  {
    id: 'kette', titel: (s) => (s.art === 'kette' ? 'Kette' : s.art === 'ring' ? 'Glieder' : 'Kette'),
    wenn: (s) => s.art === 'kette' || (s.art === 'armband' && s.armband.typ === 'kette') || (s.art === 'ring' && s.ring.typ === 'kette'),
    felder: [
      { pfad: 'kette.typ', label: 'Kettenart', typ: 'wahl', optionen: (s) => AUSWAHL['kette.typ'].filter((t) => s.art === 'kette' || t !== 'perlenstrang') },
      { pfad: 'kette.staerkeMm', label: 'Stärke', typ: 'zahl', einheit: 'mm', schritt: 0.1, bereich: () => [0.6, 5], wenn: (s) => s.art !== 'ring' && s.kette.typ !== 'perlenstrang' },
      { pfad: 'kette.laengeCm', label: 'Länge', typ: 'zahl', einheit: 'cm', schritt: 0.5, bereich: () => [35, 90], wenn: (s) => s.art === 'kette', hinweis: (s, w) => kettenHinweis(w) }
    ]
  },
  {
    id: 'anhaenger', titel: (s) => (s.art === 'ohrringe' && s.ohrring.typ === 'stecker' ? 'Motiv' : 'Anhänger'), wenn: anhaengerSichtbar,
    felder: [
      {
        pfad: 'anhaenger.typ', label: 'Form', typ: 'wahl',
        optionen: (s) => {
          const alle = AUSWAHL['anhaenger.typ'];
          if (s.art === 'ohrringe' && (s.ohrring.typ === 'haenger' || s.ohrring.typ === 'stecker')) return alle.filter((t) => t !== 'keiner');
          return alle;
        }
      },
      { pfad: 'anhaenger.groesseMm', label: 'Größe', typ: 'zahl', einheit: 'mm', schritt: 0.5, bereich: () => [5, 30], wenn: (s) => !['keiner', 'perle', 'stein'].includes(anh(s)) }
    ]
  },
  {
    id: 'perlen', titel: (s) => (s.kette && s.art === 'kette' && s.kette.typ === 'perlenstrang' ? 'Perlenstrang' : 'Perlen'), wenn: (s) => perlenAnSichtbar(s) || perlenSichtbar(s),
    felder: [
      { pfad: 'perlenAn', label: 'Perlen an der Kette', typ: 'perlenAn', wenn: perlenAnSichtbar },
      {
        pfad: 'perlen.anzahl', label: 'Anzahl', typ: 'zahl', schritt: 1,
        bereich: (s) => (s.art === 'ring' ? [1, 2] : perlenAn(s) === 'einzeln' ? [1, 3] : [1, 15]),
        wenn: (s) => (perlenAnSichtbar(s) && perlenAn(s) === 'stationen') || (s.art === 'armband' && perlenAnSichtbar(s) && perlenAn(s) === 'einzeln') || (s.art === 'ring' && s.ring.typ === 'offen'),
        hinweis: (s) => (s.art === 'armband' && perlenAn(s) === 'einzeln' ? 'Perlen-Charms neben dem Anhänger' : s.art === 'ring' ? 'Perlen an den Enden' : '')
      },
      { pfad: 'perlen.abstandMm', label: 'Abstand', typ: 'zahl', einheit: 'mm', schritt: 1, bereich: () => [8, 120], wenn: (s) => perlenAnSichtbar(s) && perlenAn(s) === 'stationen' && s.perlen.anzahl > 1 },
      { pfad: 'perlen.groesseMm', label: 'Größe', typ: 'zahl', einheit: 'mm', schritt: 0.5, bereich: () => [3, 12], wenn: perlenSichtbar, hinweis: (s) => (perlenEigen(s) ? '' : anh(s) === 'blume' ? 'Perle in der Blütenmitte' : 'Perle am Anhänger') },
      { pfad: 'perlen.form', label: 'Form', typ: 'wahl', wenn: perlenFormSichtbar },
      { pfad: 'perlen.farbe', label: 'Farbe', typ: 'perlfarbe', wenn: perlenSichtbar }
    ]
  },
  {
    id: 'stein', titel: 'Stein', wenn: steinSichtbar,
    felder: [
      { pfad: 'stein.art', label: 'Art', typ: 'wahl', optionen: () => AUSWAHL['stein.art'].filter((a) => a !== 'perle') },
      { pfad: 'stein.farbe', label: 'Eigene Farbe', typ: 'farbe' },
      { pfad: 'stein.groesseMm', label: 'Größe', typ: 'zahl', einheit: 'mm', schritt: 0.1, bereich: (s) => (s.art === 'armband' ? [1.8, 5] : [1.5, 10]) },
      { pfad: 'stein.schliff', label: 'Schliff', typ: 'wahl', wenn: (s) => !(s.art === 'armband' && s.armband.typ === 'tennis') }
    ]
  }
];

function kettenHinweis(cm) {
  if (cm <= 40) return 'Choker – liegt eng am Halsansatz';
  if (cm <= 43) return 'Halsansatz';
  if (cm <= 47) return 'Klassisch – auf dem Schlüsselbein';
  if (cm <= 55) return 'Unter dem Schlüsselbein';
  if (cm <= 65) return 'Auf der Brust';
  return 'Lang';
}

/** Titel/Label kann Text oder Funktion sein. */
export function text(t, s) { return typeof t === 'function' ? t(s) : t; }

/** Werte eines Auswahlfelds. */
export function optionenVon(feld, s) {
  if (feld.optionen) return feld.optionen(s);
  if (feld.typ === 'perlenAn') return ['keine', 'stationen', 'einzeln'];
  return AUSWAHL[feld.pfad] || [];
}

/** Bereich [min, max] eines Zahlfelds (Spezifikationsgrenzen beachtet). */
export function bereichVon(feld, s) {
  const [min, max] = ZAHLEN[feld.pfad] || [0, 100];
  const [a, b] = feld.bereich ? feld.bereich(s) : [min, max];
  return [Math.max(min, a), Math.min(max, b)];
}

/** Sichtbare Abschnitte mit ihren sichtbaren Feldern. */
export function sichtbareAbschnitte(s) {
  return ABSCHNITTE.filter((a) => a.wenn(s))
    .map((a) => ({ ...a, felder: a.felder.filter((f) => !f.wenn || f.wenn(s)) }))
    .filter((a) => a.felder.length);
}

// ---------------------------------------------------------------- Aenderungen

/**
 * Setzt einen Wert in der (vollstaendigen) Spec und gleicht abhaengige Felder an,
 * damit die Auswahl im Editor immer dem gebauten Modell entspricht.
 */
export function setzeWert(spec, pfad, wert) {
  if (pfad === 'perlenAn') {
    if (wert === 'keine') spec.perlen.anzahl = 0;
    else if (wert === 'einzeln') { spec.perlen.anordnung = 'einzeln'; spec.perlen.anzahl = 1; }
    else { spec.perlen.anordnung = 'stationen'; spec.perlen.anzahl = Math.max(3, Math.min(15, spec.perlen.anzahl || 0)); }
    if (wert !== 'keine' && spec.perlen.groesseMm > 8) spec.perlen.groesseMm = 5;
    return spec;
  }
  if (pfad === 'stein.farbe') { spec.stein.farbe = wert || null; return spec; }
  if (pfad === 'ohrring.profil' && !wert) { delete spec.ohrring.profil; return spec; }
  schreibe(spec, pfad, wert);
  return gleicheAn(spec);
}

/** Gleichwertige Darstellungen vereinheitlichen (z. B. Stecker ohne Motiv = Steinstecker). */
export function gleicheAn(spec) {
  if (spec.art === 'ohrringe') {
    if (spec.ohrring.typ === 'stecker' && spec.anhaenger.typ === 'keiner') spec.anhaenger.typ = 'stein';
    if (spec.ohrring.typ === 'haenger' && spec.anhaenger.typ === 'keiner') spec.anhaenger.typ = 'perle';
  }
  if (spec.art === 'armband' && spec.kette.typ === 'perlenstrang') spec.kette.typ = 'anker';
  if (spec.art === 'ring' && spec.ring.typ === 'offen' && !(spec.perlen.anzahl >= 1)) spec.perlen.anzahl = 2;
  return spec;
}

/** Vollstaendige, gepruefte Spec (Editor-Zustand) aus beliebiger Eingabe. */
export function vollstaendig(eingabe) {
  const { spec, fehler } = pruefeSpec(eingabe);
  return { spec: gleicheAn(spec), fehler };
}

// ---------------------------------------------------------------- Export

/** Pfade, die fuer diese Spec ins JSON gehoeren (nur, was das Modell beeinflusst). */
export function exportPfade(s) {
  const pfade = [];
  for (const a of sichtbareAbschnitte(s)) {
    for (const f of a.felder) {
      if (f.pfad === 'perlenAn') {
        const an = perlenAn(s);
        if (an !== 'keine') pfade.push('perlen.anordnung', 'perlen.anzahl');
        continue;
      }
      if (f.pfad === 'stein.farbe' && !s.stein.farbe) continue;
      if (f.pfad === 'ohrring.profil' && !s.ohrring.profil) continue;
      if (!pfade.includes(f.pfad)) pfade.push(f.pfad);
    }
  }
  return pfade;
}

const GRUPPEN_REIHE = ['ohrring', 'ring', 'armband', 'kette', 'anhaenger', 'perlen', 'stein'];

/** Knappe Spec fuer das Metafeld: name, art, metall und nur die wirksamen Felder. */
export function kompakt(s) {
  const aus = {};
  if (s.name) aus.name = s.name;
  aus.art = s.art;
  aus.metall = s.metall;
  const pfade = exportPfade(s);
  for (const g of GRUPPEN_REIHE) {
    for (const p of pfade) {
      if (!p.startsWith(g + '.')) continue;
      let w = lies(s, p);
      if (typeof w === 'number') w = Math.round(w * 100) / 100;
      schreibe(aus, p, w);
    }
  }
  return aus;
}

/** JSON fuer das Metafeld (Liste der Varianten), gut lesbar: kurze Gruppen in einer Zeile. */
export function alsJson(varianten, { eingerueckt = true, zeilenBreite = 40 } = {}) {
  const liste = varianten.map(kompakt);
  if (!eingerueckt) return JSON.stringify(liste);
  const kurz = (w) => JSON.stringify(w).replace(/,"/g, ', "').replace(/":/g, '": ').replace(/^\{"/, '{ "').replace(/\}$/, ' }');
  const zeilen = liste.map((v) => {
    const teile = Object.entries(v).map(([k, w]) => {
      const einzeilig = `${JSON.stringify(k)}: ${w && typeof w === 'object' ? kurz(w) : JSON.stringify(w)}`;
      if (!(w && typeof w === 'object') || einzeilig.length <= zeilenBreite) return einzeilig;
      const innen = Object.entries(w).map(([k2, w2]) => `      ${JSON.stringify(k2)}: ${JSON.stringify(w2)}`).join(',\n');
      return `${JSON.stringify(k)}: {\n${innen}\n    }`;
    });
    return '  {\n    ' + teile.join(',\n    ') + '\n  }';
  });
  return '[\n' + zeilen.join(',\n') + '\n]';
}

// ---------------------------------------------------------------- Import

/**
 * Liest JSON aus dem Metafeld (oder einer Datei) ein. Erlaubt: Liste von Specs,
 * einzelne Spec, { varianten: [...] }, Eintraege { name, spec } und { vorlage: 'id', ... }.
 * Liefert { varianten: Spec[], hinweise: string[] } oder wirft Error mit verstaendlicher Meldung.
 */
export function leseJson(text) {
  let daten;
  try {
    daten = JSON.parse(String(text || '').trim());
  } catch (e) {
    throw new Error(`Das ist kein gültiges JSON (${e.message}).`);
  }
  let eintraege = [];
  if (Array.isArray(daten)) eintraege = daten;
  else if (daten && Array.isArray(daten.varianten)) {
    const { varianten, ...gemeinsam } = daten;
    eintraege = varianten.map((v) => (v && v.spec ? { ...v, spec: { ...gemeinsam, ...v.spec } } : { ...gemeinsam, ...v }));
  } else if (daten && typeof daten === 'object') eintraege = [daten];
  eintraege = eintraege.filter((e) => e && typeof e === 'object');
  if (!eintraege.length) throw new Error('Keine Variante gefunden. Erwartet wird eine Liste wie [{ "name": "Gold", "art": "kette", … }].');
  const hinweise = [];
  const varianten = eintraege.map((e, i) => {
    let roh = e.spec && typeof e.spec === 'object' ? { ...e.spec, name: e.name || e.spec.name } : { ...e };
    if (roh.vorlage && VORLAGEN[roh.vorlage]) {
      const { vorlage, ...rest } = roh;
      roh = { ...VORLAGEN[vorlage].spec, ...rest };
    }
    if (roh.glb || roh.glbUrl) hinweise.push(`Variante ${i + 1}: GLB-Verweis wird im Editor nicht angezeigt (nur parametrische Modelle).`);
    const { spec, fehler } = vollstaendig(roh);
    if (!spec.name) spec.name = METALL_NAMEN[spec.metall] || `Variante ${i + 1}`;
    for (const f of fehler) hinweise.push(`${spec.name}: ${f}`);
    return spec;
  });
  // eine Art je Produkt
  const art = varianten[0].art;
  if (varianten.some((v) => v.art !== art)) {
    hinweise.push(`Varianten haben verschiedene Arten; alle als „${ART_NAMEN[art]}“ übernommen.`);
    for (const v of varianten) if (v.art !== art) Object.assign(v, vollstaendig({ ...v, art }).spec);
  }
  return { varianten, hinweise };
}

/** Pruefung der Ausgabe: baut jede Variante gedanklich nach (pruefeSpec) und meldet Abweichungen. */
export function pruefeAusgabe(varianten) {
  const hinweise = [];
  const namen = new Set();
  varianten.forEach((v, i) => {
    const k = kompakt(v);
    const { fehler } = pruefeSpec(k);
    for (const f of fehler) hinweise.push(`${k.name || 'Variante ' + (i + 1)}: ${f}`);
    const n = (k.name || '').trim().toLowerCase();
    if (!n) hinweise.push(`Variante ${i + 1} hat keinen Namen.`);
    else if (namen.has(n)) hinweise.push(`Der Name „${k.name}“ kommt doppelt vor.`);
    namen.add(n);
  });
  return hinweise;
}

/** Vorlagen nach Art gruppiert: [{ art, name, vorlagen: [{ id, name, beschreibung, spec, varianten }] }]. */
export function vorlagenNachArt() {
  return ARTEN.map((a) => ({
    art: a.wert,
    name: a.name,
    vorlagen: Object.entries(VORLAGEN).filter(([, v]) => v.spec.art === a.wert).map(([id, v]) => ({ id, ...v }))
  }));
}

/** Naechstes noch freies Metall fuer eine neue Variante. */
export function naechstesMetall(varianten) {
  const belegt = new Set(varianten.map((v) => v.metall));
  return AUSWAHL.metall.find((m) => !belegt.has(m)) || 'gold';
}

export { AUSWAHL, ZAHLEN, VORLAGEN };
