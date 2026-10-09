// Produktdaten aus dem DOM lesen (data-anprobe, siehe docs/ARCHITEKTUR.md).
//
// leseProdukt(el) -> { titel, preis?, bildUrl?, art, varianten: [{ name, spec | glbUrl }], finger?,
//                      quelle: 'modell'|'glb'|'vorlage', vorlage?: id }
// art ist null, wenn kein Schmuck erkannt wurde (dann kein Knopf).

import { VORLAGEN } from './schmuck/index.js';
import { debugLog } from './konfig.js';

export const ARTEN = ['ring', 'armband', 'kette', 'ohrringe'];
export const FINGER = ['daumen', 'zeige', 'mittel', 'ring', 'klein'];

const METALL_NAMEN = { gold: 'Gold', silber: 'Silber', rosegold: 'Roségold', weissgold: 'Weißgold' };

/** Kleinbuchstaben, Umlaute umschreiben, Akzente weg. */
export function normiere(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Schluesselwoerter je Art. Gesucht wird das Wortende (Kopf des deutschen
// Kompositums: "Kettenring" ist ein Ring, "Ringkette" eine Kette). Ohrringe
// stehen vor Ringen, sonst wuerde "Ohrring" als Ring erkannt.
const ART_MUSTER = [
  ['ohrringe', /(ohrringe?|ohrstecker|stecker|creolen?|hoops?|huggies?|ohrhaenger|ohrclips?|earrings?|studs?)$/],
  ['armband', /(armbaender|armband|armkette|armreif(?:en|e)?|bracelets?|bangles?)$/],
  ['kette', /(ketten?|collier|choker|necklaces?|anhaenger|pendants?|chains?)$/],
  ['ring', /(ringe?|rings?)$/]
];

/** Art aus einem freien Text (Typ, Titel, Tag) oder null. */
export function artAusText(text) {
  const n = normiere(text);
  if (!n) return null;
  if (ARTEN.includes(n)) return n;
  const woerter = n.split(/[^a-z0-9]+/).filter(Boolean);
  for (const wort of woerter) {
    for (const [art, muster] of ART_MUSTER) if (muster.test(wort)) return art;
  }
  // Notfall: Teilwort irgendwo im Text (Ohrring vor Ring)
  for (const [art, stamm] of [['ohrringe', 'ohrring'], ['ohrringe', 'creole'], ['armband', 'armband'], ['kette', 'kette'], ['ring', 'ring']]) {
    if (n.includes(stamm)) return art;
  }
  return null;
}

/** Tags als Liste (Komma-getrennt). */
function leseTags(el) {
  return String(el.dataset.tags || '').split(',').map((t) => t.trim()).filter(Boolean);
}

/** JSON-Modell(e) aus <script type="application/json" data-anprobe-modell>. */
function leseModellJson(el) {
  const skripte = el.querySelectorAll('script[data-anprobe-modell]');
  const eintraege = [];
  for (const s of skripte) {
    const roh = (s.textContent || '').trim();
    if (!roh) continue;
    try {
      let daten = JSON.parse(roh);
      // Metafeld als Text statt JSON angelegt: Liquid liefert einen JSON-String im String
      if (typeof daten === 'string') daten = JSON.parse(daten);
      if (Array.isArray(daten)) eintraege.push(...daten);
      else if (daten && Array.isArray(daten.varianten)) {
        // { art?, varianten: [...] }: gemeinsame Felder an jede Variante geben
        const { varianten, ...gemeinsam } = daten;
        for (const v of varianten) eintraege.push(v && v.spec ? { ...v, spec: { ...gemeinsam, ...v.spec } } : { ...gemeinsam, ...v });
      } else if (daten && typeof daten === 'object') eintraege.push(daten);
    } catch (e) {
      console.warn(`[anprobe] Modell-JSON für „${el.dataset.titel || 'Produkt'}“ fehlerhaft (Metafeld vom Typ JSON?):`, e.message);
    }
  }
  return eintraege.filter((e) => e && typeof e === 'object');
}

/** Ein Eintrag aus dem Modell-JSON -> Variante { name, spec } oder { name, glbUrl, spec }. */
function zuVariante(eintrag, index) {
  // Formen: Spec direkt, { name, spec }, { name, glb|glbUrl, ... }, { vorlage: 'id', ...ueberschreibungen }
  let spec = eintrag.spec && typeof eintrag.spec === 'object' ? { ...eintrag.spec } : { ...eintrag };
  delete spec.spec;
  const glbUrl = eintrag.glbUrl || eintrag.glb || spec.glbUrl || spec.glb || null;
  delete spec.glb; delete spec.glbUrl;
  const vorlageId = eintrag.vorlage || spec.vorlage;
  if (vorlageId && VORLAGEN[vorlageId]) {
    const { vorlage: _v, ...rest } = spec;
    spec = { ...VORLAGEN[vorlageId].spec, ...rest };
  }
  delete spec.vorlage;
  const name = eintrag.name || spec.name || (spec.metall && METALL_NAMEN[spec.metall]) || `Variante ${index + 1}`;
  spec.name = spec.name || name;
  return glbUrl ? { name, glbUrl, spec } : { name, spec };
}

// Woerter, die eine Vorlage naeher bestimmen (Titel <-> Vorlagentext)
const MERKMALE = [
  'perle', 'creole', 'huggie', 'sonne', 'mond', 'herz', 'muenz', 'blume', 'bluete', 'flor', 'stern', 'muschel',
  'solitaer', 'stecker', 'haenger', 'tropfen', 'station', 'band', 'offen', 'figaro', 'anker', 'erbs', 'zirkonia',
  'stein', 'strang', 'zart', 'basic', 'lunara', 'florea', 'siegel', 'tennis', 'reif'
];
const MERKMAL_ALIAS = { bluete: 'blume', flor: 'blume', muenze: 'muenz', coin: 'muenz', pearl: 'perle', hoop: 'creole', heart: 'herz', sun: 'sonne', moon: 'mond' };

function vorlagenText(id, v) {
  const werte = [];
  const sammle = (o) => {
    for (const w of Object.values(o || {})) {
      if (typeof w === 'string') werte.push(w);
      else if (w && typeof w === 'object') sammle(w);
    }
  };
  sammle(v.spec);
  return normiere([id, id.replace(/-/g, ''), v.name, v.beschreibung, ...werte].join(' '));
}

/** Passende Vorlage fuer Art und Titel: { id, vorlage } oder null. */
export function waehleVorlage(art, titel) {
  const kandidaten = Object.entries(VORLAGEN).filter(([, v]) => v && v.spec && v.spec.art === art);
  if (!kandidaten.length) return null;
  const t = normiere(titel);
  const woerter = t.split(/[^a-z0-9]+/).filter((w) => w.length >= 4);
  const titelMerkmale = new Set();
  for (const m of MERKMALE) if (t.includes(m)) titelMerkmale.add(m);
  for (const [alias, m] of Object.entries(MERKMAL_ALIAS)) if (t.includes(alias)) titelMerkmale.add(m);
  let beste = kandidaten[0];
  let besterWert = 0;
  for (const k of kandidaten) {
    const text = vorlagenText(k[0], k[1]);
    let wert = 0;
    for (const w of woerter) if (text.includes(w)) wert += 1;
    for (const m of titelMerkmale) if (text.includes(m)) wert += 2;
    if (wert > besterWert) { beste = k; besterWert = wert; }
  }
  return { id: beste[0], vorlage: beste[1] };
}

/** Metall aus einem Namen ("Gold", "Silber", "Rosé" ...) oder null. */
export function metallAusName(name) {
  const n = normiere(name);
  if (/rose/.test(n)) return 'rosegold';
  if (/weiss/.test(n)) return 'weissgold';
  if (/silber|silver|edelstahl|steel/.test(n)) return 'silber';
  if (/gold|vergoldet/.test(n)) return 'gold';
  return null;
}

/** Varianten aus einer Vorlage, auf Namen der Seite abgestimmt (v1: data-anprobe-bild data-name). */
function variantenAusVorlage(vorlage, titel, namenSeite) {
  const basis = vorlage.varianten && vorlage.varianten.length ? vorlage.varianten : [{ name: vorlage.name, spec: vorlage.spec }];
  const metalle = namenSeite.map((n) => ({ name: n, metall: metallAusName(n) })).filter((x) => x.metall);
  if (metalle.length) {
    return metalle.map(({ name, metall }) => ({ name, spec: { ...vorlage.spec, metall, name } }));
  }
  const varianten = basis.map((v) => ({ name: v.name, spec: { ...v.spec } }));
  // Titel nennt ein Metall (z. B. "Herzkette Silber") -> diese Variante zuerst
  const titelMetall = metallAusName(titel);
  if (titelMetall) {
    const i = varianten.findIndex((v) => v.spec.metall === titelMetall);
    if (i > 0) varianten.unshift(...varianten.splice(i, 1));
  }
  return varianten;
}

/**
 * Liest ein [data-anprobe]-Element.
 * Art: data-art, Tag "anprobe:<art>", Modell-JSON, Produkttyp, Titel, uebrige Tags.
 */
export function leseProdukt(el) {
  const d = el.dataset;
  const titel = (d.titel || '').trim() || 'Schmuckstück';
  const tags = leseTags(el);
  const eintraege = leseModellJson(el);

  const tagArt = tags.map((t) => /^anprobe\s*:\s*(.+)$/i.exec(t)).filter(Boolean).map((m) => artAusText(m[1]))[0] || null;
  const modellArt = eintraege.map((e) => artAusText((e.spec && e.spec.art) || e.art)).find(Boolean) || null;
  let art = artAusText(d.art) || tagArt || modellArt || artAusText(d.typ) || artAusText(titel);
  if (!art) for (const t of tags) if ((art = artAusText(t))) break;
  // Tag "anprobe:aus" (wie in v1): kein Knopf fuer dieses Produkt
  if (tags.some((t) => /^anprobe\s*:\s*aus$/i.test(t.trim()))) art = null;

  // Bild fuer die Kurzinfo: data-bild, sonst Shopify-Hauptbild (v1-Block)
  const bildEl = el.querySelector('[data-anprobe-bild][data-ersatz]') || el.querySelector('[data-anprobe-bild]');
  const bildUrl = d.bild || (bildEl && bildEl.dataset.url) || null;
  const namenSeite = [...el.querySelectorAll('[data-anprobe-bild][data-name]')]
    .map((b) => b.dataset.name.trim()).filter(Boolean);

  const produkt = {
    titel,
    preis: (d.preis || '').trim() || null,
    bildUrl,
    art,
    varianten: [],
    finger: FINGER.includes(normiere(d.finger)) ? normiere(d.finger) : (art === 'ring' ? 'ring' : undefined),
    quelle: 'vorlage'
  };
  if (!art) return produkt;

  if (eintraege.length) {
    produkt.varianten = eintraege.map(zuVariante).map((v) => ({ ...v, spec: { ...v.spec, art } }));
    produkt.quelle = produkt.varianten.some((v) => v.glbUrl) ? 'glb' : 'modell';
  } else if (d.glb) {
    produkt.varianten = [{ name: d.glbName || titel, glbUrl: d.glb, spec: { art, metall: metallAusName(d.glbName || titel) || 'gold' } }];
    produkt.quelle = 'glb';
  } else {
    const wahl = waehleVorlage(art, titel);
    if (wahl) {
      produkt.varianten = variantenAusVorlage(wahl.vorlage, titel, namenSeite);
      produkt.vorlage = wahl.id;
    } else {
      produkt.varianten = [{ name: 'Gold', spec: { art, metall: 'gold', name: 'Gold' } }];
    }
    // Sichtbar fuer die Shop-Pflege, auch ohne Debug: ein fehlendes Modell faellt sonst nicht auf
    console.info(`[anprobe] Kein Modell für „${titel}“ – Vorlage ${produkt.vorlage || '(Standard)'} verwendet (Notlösung).`);
    debugLog('Vorlage statt Modell', produkt.vorlage);
  }
  return produkt;
}

/**
 * Produkt aus einem einfachen Objekt (fuer Anprobe.oeffne({ titel, art, ... })).
 * Felder wie die data-Attribute; modell: Spec, Spec-Liste oder { varianten }.
 */
export function produktAusDaten(daten = {}) {
  const el = document.createElement('div');
  const felder = { titel: daten.titel, preis: daten.preis, bild: daten.bild || daten.bildUrl, art: daten.art, typ: daten.typ,
    tags: Array.isArray(daten.tags) ? daten.tags.join(',') : daten.tags, glb: daten.glb, finger: daten.finger };
  for (const [k, w] of Object.entries(felder)) if (w != null && w !== '') el.dataset[k] = String(w);
  const modell = daten.modell || daten.varianten || daten.spec;
  if (modell) {
    const s = document.createElement('script');
    s.type = 'application/json';
    s.setAttribute('data-anprobe-modell', '');
    s.textContent = JSON.stringify(modell);
    el.appendChild(s);
  }
  return leseProdukt(el);
}
