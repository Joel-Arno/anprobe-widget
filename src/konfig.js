// Konfiguration: Standardwerte, ueberschreibbar per window.AnprobeKonfig
// (vor dem Laden des Skripts setzen) oder per Anprobe.init({ ... }).
// Debug zusaetzlich per URL-Parameter ?anprobe-debug.

const MP_VERSION = '1.1.0';
const MODELL_BASIS = 'https://storage.googleapis.com/mediapipe-models';

export const STANDARD_KONFIG = Object.freeze({
  // Ordner mit vision_bundle.mjs und wasm/
  mediapipe: `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MP_VERSION}`,
  modelle: Object.freeze({
    hand: `${MODELL_BASIS}/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
    gesicht: `${MODELL_BASIS}/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
    koerper: `${MODELL_BASIS}/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`
  }),
  // MediaPipe-Rechenweg: 'auto' (GPU, bei Fehler CPU) | 'CPU'
  delegate: 'auto',
  // Darstellungsqualitaet: 'auto' (adaptiv nach Bildrate) | 'hoch' | 'mittel' | 'niedrig' (fest)
  qualitaet: 'auto',
  shopName: 'ARLISE',
  debug: false,
  knopfText: 'Virtuell anprobieren',
  // Breite der gespeicherten Aufnahme in Pixeln
  aufnahmeBreite: 1440,
  // Ergebnisseite: „In den Warenkorb“ fuer die angeprobte Variante (braucht die
  // Shop-Daten des Shopify-Blocks, data-anprobe-shop)
  warenkorb: true
});

function istObjekt(w) {
  return w !== null && typeof w === 'object' && !Array.isArray(w);
}

/** Tiefe Zusammenfuehrung (nur einfache Objekte), ohne die Quellen zu veraendern. */
function verschmelze(basis, extra) {
  const aus = { ...basis };
  if (!istObjekt(extra)) return aus;
  for (const [k, w] of Object.entries(extra)) {
    if (w === undefined) continue;
    aus[k] = istObjekt(w) && istObjekt(basis[k]) ? verschmelze(basis[k], w) : w;
  }
  return aus;
}

/** true, wenn ?anprobe-debug (oder #anprobe-debug) in der URL steht. */
export function debugAusUrl() {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has('anprobe-debug')) return url.searchParams.get('anprobe-debug') !== '0';
    return /(^|[#&])anprobe-debug\b/.test(url.hash.slice(1));
  } catch {
    return false;
  }
}

/**
 * Wirksame Konfiguration: Standard <- window.AnprobeKonfig <- extra.
 * Liefert ein neues Objekt.
 */
export function leseKonfig(extra) {
  const seite = typeof window !== 'undefined' ? window.AnprobeKonfig : null;
  const k = verschmelze(verschmelze(STANDARD_KONFIG, seite), extra);
  if (typeof window !== 'undefined' && debugAusUrl()) k.debug = true;
  k.debug = Boolean(k.debug);
  return k;
}

/** Aktuelle Konfiguration (wird von main.js bei init() erneuert). */
export const konfig = leseKonfig();

let zusatz = {};

/**
 * Liest window.AnprobeKonfig neu und uebernimmt extra (sammelt sich ueber
 * mehrere Aufrufe). Gleiches Objekt, damit Verweise gueltig bleiben.
 */
export function aktualisiereKonfig(extra) {
  zusatz = verschmelze(zusatz, extra);
  const neu = leseKonfig(zusatz);
  for (const k of Object.keys(konfig)) delete konfig[k];
  Object.assign(konfig, neu);
  return konfig;
}

/** Debug-Ausgabe nur bei konfig.debug. */
export function debugLog(...teile) {
  if (konfig.debug && typeof console !== 'undefined') console.info('[anprobe]', ...teile);
}
