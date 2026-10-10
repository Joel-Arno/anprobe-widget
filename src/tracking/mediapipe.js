// Laden und Betreiben der MediaPipe-Tasks (Hand, Gesicht, Koerper).
//
// * Das Vision-Bundle wird zur Laufzeit per import() aus konfig.mediapipe geholt.
// * wasm und Modelle werden per fetch mit Fortschritt geladen. Das wasm wird
//   einmal heruntergeladen und als Blob-URL an alle Tasks gegeben (jede Task
//   startet ihre eigene wasm-Instanz).
// * Einmal erzeugte Tasks bleiben im Speicher (mehrfaches Oeffnen des Fensters).
// * GPU-Delegate wird versucht, sonst CPU. Modus VIDEO/IMAGE per setOptions
//   (ohne neues Modell wirkt setOptions synchron).

const vorrat = {
  vision: new Map(),   // basis -> Promise<{ mp, fileset, filesetDirekt }>
  wasm: new Map(),     // url -> Promise<string blobUrl>
  erkenner: new Map()  // schluessel -> Promise<Erkenner>
};

// Ungefaehre (entpackte) Groessen fuer die Fortschrittsanzeige, falls der
// Server keine oder eine komprimierte Content-Length meldet.
const SCHAETZUNG = {
  wasm: 13.0e6,
  hand: 7.8e6,
  gesicht: 3.8e6,
  koerper: 5.8e6
};

const TEXTE = {
  wasm: 'Erkennung wird geladen',
  hand: 'Handerkennung wird geladen',
  gesicht: 'Gesichtserkennung wird geladen',
  koerper: 'Körpererkennung wird geladen',
  start: 'Erkennung wird gestartet',
  fertig: 'Bereit'
};

const ohneSchraegstrich = (s) => String(s || '').replace(/\/+$/, '');
const STILLSTAND_MS = 25000;
// Fehlgeschlagene Modul-Importe merkt sich der Browser (Module-Map): ein neuer
// Versuch braucht deshalb eine andere Adresse
const importVersuche = new Map();

/** Fortschritt ueber mehrere Dateien; meldet gesamt 0..1 (Downloads bis 0.9). */
class Fortschritt {
  constructor(melde) {
    this.melde = typeof melde === 'function' ? melde : null;
    this.dateien = new Map();
    this.anteilStart = 0;
    this.text = TEXTE.wasm;
  }

  datei(name, schaetzung) {
    if (!this.dateien.has(name)) this.dateien.set(name, { geladen: 0, gesamt: schaetzung || 1e6, fertig: false });
    return this.dateien.get(name);
  }

  aktualisiere(name, geladen, gesamt, text) {
    const d = this.datei(name);
    if (gesamt) d.gesamt = gesamt;
    d.geladen = geladen;
    if (text) this.text = text;
    this.sende();
  }

  fertig(name) {
    const d = this.datei(name);
    d.fertig = true;
    d.geladen = d.gesamt;
    this.sende();
  }

  setzeStart(anteil, text) {
    this.anteilStart = anteil;
    if (text) this.text = text;
    this.sende();
  }

  wert() {
    let summe = 0, gesamt = 0;
    for (const d of this.dateien.values()) {
      gesamt += d.gesamt;
      summe += d.fertig ? d.gesamt : Math.min(d.geladen, d.gesamt * 0.98);
    }
    const download = gesamt > 0 ? summe / gesamt : 1;
    return Math.min(1, download * 0.9 + this.anteilStart * 0.1);
  }

  sende() {
    if (!this.melde) return;
    try { this.melde(this.wert(), this.text); } catch (e) { /* Anzeige darf das Laden nicht stoeren */ }
  }
}

/**
 * Laedt eine Datei per fetch und meldet Bytes. Liefert Uint8Array.
 * Eine komprimiert ausgelieferte Datei meldet eine zu kleine Content-Length;
 * dann gilt die Schaetzung.
 */
export async function ladeDatei(url, { schaetzung = 0, onBytes, stillstandMs = STILLSTAND_MS } = {}) {
  // Stillstandserkennung: kommen so lange keine Bytes, gilt das Laden als gescheitert
  // (die Fehlerseite bietet dann "Erneut versuchen" statt eines stehenden Balkens)
  const abbruch = typeof AbortController !== 'undefined' ? new AbortController() : null;
  let wache = 0;
  const weiter = () => {
    if (!abbruch) return;
    clearTimeout(wache);
    wache = setTimeout(() => abbruch.abort(), stillstandMs);
  };
  weiter();
  try {
    return await ladeDateiMitWache(url, { schaetzung, onBytes, signal: abbruch && abbruch.signal, weiter });
  } catch (e) {
    if (abbruch && abbruch.signal.aborted) throw new Error(`Laden ins Stocken geraten: ${url}`);
    throw e;
  } finally {
    clearTimeout(wache);
  }
}

async function ladeDateiMitWache(url, { schaetzung, onBytes, signal, weiter }) {
  const antwort = await fetch(url, { credentials: 'same-origin', signal: signal || undefined });
  weiter();
  if (!antwort.ok) throw new Error(`Laden fehlgeschlagen: ${url} (${antwort.status})`);
  const laengeKopf = Number(antwort.headers.get('content-length')) || 0;
  let gesamt = laengeKopf || schaetzung || 0;
  if (laengeKopf && schaetzung && laengeKopf < schaetzung * 0.7) gesamt = schaetzung;
  if (!antwort.body || !antwort.body.getReader) {
    const puffer = new Uint8Array(await antwort.arrayBuffer());
    if (onBytes) onBytes(puffer.length, puffer.length);
    return puffer;
  }
  const leser = antwort.body.getReader();
  const teile = [];
  let geladen = 0;
  for (;;) {
    const { done, value } = await leser.read();
    if (done) break;
    teile.push(value);
    geladen += value.length;
    weiter();
    if (geladen > gesamt) gesamt = geladen * 1.05;
    if (onBytes) onBytes(geladen, gesamt);
  }
  // Abgebrochene Uebertragung frueh erkennen (sonst scheitert MediaPipe unverstaendlich).
  // Bei komprimierter Auslieferung zaehlt die Content-Length die gepackten Bytes.
  if (laengeKopf && !antwort.headers.get('content-encoding') && geladen < laengeKopf) {
    throw new Error(`Laden unvollstaendig: ${url} (${geladen} von ${laengeKopf} Bytes)`);
  }
  if (teile.length === 1) return teile[0];
  const puffer = new Uint8Array(geladen);
  let pos = 0;
  for (const t of teile) { puffer.set(t, pos); pos += t.length; }
  return puffer;
}

/** Vision-Bundle importieren und Fileset bestimmen (einmal je Basis-URL). */
export function ladeVision(konfig, fortschritt) {
  const basis = ohneSchraegstrich(konfig && konfig.mediapipe);
  if (!basis) return Promise.reject(new Error('konfig.mediapipe fehlt'));
  if (!vorrat.vision.has(basis)) {
    const p = (async () => {
      const n = importVersuche.get(basis) || 0;
      const zusatz = n ? `?versuch=${n}` : '';
      let mp;
      try {
        mp = await import(/* webpackIgnore: true */ /* @vite-ignore */ `${basis}/vision_bundle.mjs${zusatz}`);
      } catch (e) {
        importVersuche.set(basis, n + 1);
        throw e;
      }
      const filesetDirekt = await mp.FilesetResolver.forVisionTasks(`${basis}/wasm`);
      return { mp, filesetDirekt };
    })();
    p.catch(() => vorrat.vision.delete(basis));
    vorrat.vision.set(basis, p);
  }
  return vorrat.vision.get(basis).then(async (v) => {
    // wasm vorab mit Fortschritt laden; misslingt das, laedt MediaPipe selbst.
    const url = String(v.filesetDirekt.wasmBinaryPath);
    let blobUrl = null;
    try {
      blobUrl = await ladeWasm(url, fortschritt);
    } catch (e) {
      blobUrl = null;
    }
    if (fortschritt && fortschritt.dateien.has('wasm')) fortschritt.fertig('wasm');
    const fileset = blobUrl ? { ...v.filesetDirekt, wasmBinaryPath: blobUrl } : v.filesetDirekt;
    return { mp: v.mp, fileset, filesetDirekt: v.filesetDirekt };
  });
}

function ladeWasm(url, fortschritt) {
  if (!vorrat.wasm.has(url)) {
    if (typeof URL === 'undefined' || !URL.createObjectURL) return Promise.resolve(null);
    const p = ladeDatei(url, {
      schaetzung: SCHAETZUNG.wasm,
      onBytes: (g, n) => fortschritt && fortschritt.aktualisiere('wasm', g, n, TEXTE.wasm)
    }).then((daten) => URL.createObjectURL(new Blob([daten], { type: 'application/wasm' })));
    p.catch(() => vorrat.wasm.delete(url));
    vorrat.wasm.set(url, p);
  }
  return vorrat.wasm.get(url);
}

/**
 * Huelle um eine MediaPipe-Task: Modus, streng steigende Zeitstempel,
 * Fehlerzaehlung (GPU-Ausfall -> CPU).
 */
export class Erkenner {
  constructor(art, task, delegate, neuBauen) {
    this.art = art;
    this.task = task;
    this.delegate = delegate;
    this.modus = 'VIDEO';
    this.letzteZeit = 0;
    this.fehlerInFolge = 0;
    this.neuBauen = neuBauen;
    this.wirdNeuGebaut = false;
    this.letzterFehler = null;
    this.haende = art === 'hand' ? 1 : null;
  }

  /** Anzahl Haende (nur Handerkennung; Ohrringe suchen zwei, Ring/Armband eine). */
  setzeHaende(n) {
    if (this.art !== 'hand' || !this.task || this.haende === n) return;
    const p = this.task.setOptions({ numHands: n });
    if (p && p.catch) p.catch(() => {});
    this.haende = n;
  }

  setzeModus(modus) {
    if (this.modus === modus) return;
    // Ohne neues Modell wendet setOptions die Optionen synchron an.
    const p = this.task.setOptions({ runningMode: modus });
    if (p && p.catch) p.catch(() => {});
    this.modus = modus;
  }

  /** Erkennung auf einem Bild (zeitMs null) oder Videoframe. Liefert Ergebnis oder null. */
  erkenne(quelle, zeitMs) {
    if (!this.task || this.wirdNeuGebaut) return null;
    try {
      let ergebnis;
      if (zeitMs == null) {
        this.setzeModus('IMAGE');
        ergebnis = this.task.detect(quelle);
        this.letzteZeit += 1; // IMAGE nutzt intern den letzten Zeitstempel + 1
      } else {
        this.setzeModus('VIDEO');
        const t = Math.max(Number(zeitMs) || 0, this.letzteZeit + 1);
        this.letzteZeit = t;
        ergebnis = this.task.detectForVideo(quelle, t);
      }
      this.fehlerInFolge = 0;
      return ergebnis;
    } catch (e) {
      this.letzterFehler = e;
      this.fehlerInFolge++;
      if (this.fehlerInFolge >= 3 && this.delegate === 'GPU' && this.neuBauen) this.aufCpuWechseln();
      return null;
    }
  }

  async aufCpuWechseln() {
    if (this.wirdNeuGebaut) return;
    this.wirdNeuGebaut = true;
    try {
      const neu = await this.neuBauen('CPU');
      try { this.task.close(); } catch (e) { /* egal */ }
      this.task = neu;
      this.delegate = 'CPU';
      this.modus = 'VIDEO';
      this.haende = this.art === 'hand' ? 1 : null;
      this.letzteZeit = 0;
      this.fehlerInFolge = 0;
    } catch (e) {
      this.letzterFehler = e;
    } finally {
      this.wirdNeuGebaut = false;
    }
  }

  schliessen() {
    try { if (this.task) this.task.close(); } catch (e) { /* egal */ }
    this.task = null;
  }
}

function taskOptionen(art, puffer, delegate) {
  const baseOptions = { modelAssetBuffer: puffer, delegate };
  if (art === 'hand') {
    return {
      baseOptions, runningMode: 'VIDEO', numHands: 1,
      minHandDetectionConfidence: 0.5, minHandPresenceConfidence: 0.5, minTrackingConfidence: 0.5
    };
  }
  if (art === 'gesicht') {
    return {
      baseOptions, runningMode: 'VIDEO', numFaces: 1,
      minFaceDetectionConfidence: 0.5, minFacePresenceConfidence: 0.5, minTrackingConfidence: 0.5,
      outputFaceBlendshapes: false, outputFacialTransformationMatrixes: true
    };
  }
  return {
    baseOptions, runningMode: 'VIDEO', numPoses: 1,
    minPoseDetectionConfidence: 0.5, minPosePresenceConfidence: 0.5, minTrackingConfidence: 0.5,
    outputSegmentationMasks: false
  };
}

function taskKlasse(mp, art) {
  return { hand: mp.HandLandmarker, gesicht: mp.FaceLandmarker, koerper: mp.PoseLandmarker }[art];
}

/** Erzeugt eine Task, zuerst mit GPU, dann CPU; zuerst mit wasm-Blob, sonst direkt. */
async function erzeugeTask(vision, art, puffer, wunschDelegate) {
  const Klasse = taskKlasse(vision.mp, art);
  const delegates = wunschDelegate === 'CPU' ? ['CPU'] : ['GPU', 'CPU'];
  const filesets = vision.fileset === vision.filesetDirekt ? [vision.fileset] : [vision.fileset, vision.filesetDirekt];
  let letzter = null;
  for (const fileset of filesets) {
    for (const delegate of delegates) {
      try {
        const task = await Klasse.createFromOptions(fileset, taskOptionen(art, puffer, delegate));
        return { task, delegate };
      } catch (e) {
        letzter = e;
      }
    }
  }
  throw letzter || new Error(`MediaPipe-Task ${art} konnte nicht erzeugt werden`);
}

/**
 * Laedt die benoetigten Tasks ('hand' | 'gesicht' | 'koerper').
 * onFortschritt(0..1, text) gesamt ueber alle noch nicht geladenen Dateien.
 * Liefert { hand?: Erkenner, gesicht?: Erkenner, koerper?: Erkenner, mp }.
 */
export async function ladeErkenner(arten, konfig, onFortschritt) {
  const fortschritt = new Fortschritt(onFortschritt);
  const modelle = (konfig && konfig.modelle) || {};
  // konfig.delegate: 'auto' (GPU, sonst CPU) | 'GPU' | 'CPU' (z. B. Tests mit Software-WebGL)
  const wunschDelegate = konfig && String(konfig.delegate || '').toUpperCase() === 'CPU' ? 'CPU' : null;
  const basis = ohneSchraegstrich(konfig && konfig.mediapipe);
  const offen = [];
  for (const art of arten) {
    if (!modelle[art]) throw new Error(`konfig.modelle.${art} fehlt`);
    const schluessel = `${basis}|${art}|${modelle[art]}`;
    if (!vorrat.erkenner.has(schluessel)) offen.push({ art, schluessel, url: modelle[art] });
  }
  if (offen.length && !vorrat.wasm.size) fortschritt.datei('wasm', SCHAETZUNG.wasm);
  for (const o of offen) fortschritt.datei(o.art, SCHAETZUNG[o.art]);
  fortschritt.sende();

  const visionP = ladeVision(konfig, fortschritt);
  // Modelle parallel zum wasm herunterladen
  const pufferP = new Map(offen.map((o) => [o.art, ladeDatei(o.url, {
    schaetzung: SCHAETZUNG[o.art],
    onBytes: (g, n) => fortschritt.aktualisiere(o.art, g, n, TEXTE[o.art])
  }).then((p) => { fortschritt.fertig(o.art); return p; })]));
  for (const p of pufferP.values()) p.catch(() => {});

  const vision = await visionP;
  // Tasks nacheinander erzeugen (der MediaPipe-Lader nutzt globale Variablen)
  let n = 0;
  for (const o of offen) {
    if (vorrat.erkenner.has(o.schluessel)) continue;
    const p = (async () => {
      const puffer = await pufferP.get(o.art);
      fortschritt.setzeStart(n / Math.max(1, offen.length), TEXTE.start);
      const { task, delegate } = await erzeugeTask(vision, o.art, puffer, wunschDelegate);
      // Fuer den CPU-Ersatz das Modell neu holen (meist aus dem HTTP-Cache),
      // statt den Puffer dauerhaft im Speicher zu halten.
      const neuBauen = async (d) => (await erzeugeTask(vision, o.art, await ladeDatei(o.url), d)).task;
      return new Erkenner(o.art, task, delegate, neuBauen);
    })();
    p.catch(() => vorrat.erkenner.delete(o.schluessel));
    vorrat.erkenner.set(o.schluessel, p);
    await p;
    n++;
  }

  const ergebnis = { mp: vision.mp };
  for (const art of arten) {
    ergebnis[art] = await vorrat.erkenner.get(`${basis}|${art}|${modelle[art]}`);
  }
  fortschritt.setzeStart(1, TEXTE.fertig);
  return ergebnis;
}

/** Gibt alle zwischengespeicherten Tasks frei (nur bei endgueltigem Abbau). */
export async function entladeAlle() {
  const alle = [...vorrat.erkenner.values()];
  vorrat.erkenner.clear();
  for (const p of alle) {
    try { (await p).schliessen(); } catch (e) { /* egal */ }
  }
  for (const p of vorrat.wasm.values()) {
    try { const u = await p; if (u) URL.revokeObjectURL(u); } catch (e) { /* egal */ }
  }
  vorrat.wasm.clear();
}
