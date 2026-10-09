// Unterarmrichtung aus dem Kamerabild (fuer Armbaender).
//
// Die Handpunkte von MediaPipe enden am Handgelenk; der Unterarm selbst wird
// nicht erkannt. Bei abgeknicktem Handgelenk (Handflaeche nach oben, Hand
// aufgestellt) zeigt die Verlaengerung der Handachse deshalb neben den Arm,
// und das Armband schwebt. Hier wird die Richtung des Unterarms im Bild
// geschaetzt: Hautfarbe aus der Handflaeche, dann Strahlen vom Handgelenk in
// Richtung Ellbogen (+-75 Grad um die Handachse) mit Hautanteil bewerten.
// Ergebnis ist ein Drehwinkel in der Bildebene relativ zur Handachse; ist der
// Arm nicht klar zu sehen (Aermel, Bildrand, hautfarbener Hintergrund), wird
// der Winkel abgeschwaecht bzw. null geliefert (dann gilt die Handachse).

const LANGE_SEITE = 224;          // Analysebild (px, lange Seite)
const WINKEL_MAX = 75 * Math.PI / 180;
const WINKEL_SCHRITT = 5 * Math.PI / 180;
const STRAHL_MM = [12, 20, 28, 36, 46, 56, 68, 80, 95, 110];
const QUER_ANTEIL = [-0.55, 0, 0.55];   // Abtastung quer zum Arm (Anteil des Handgelenkradius)
const SIGMA_FARBE = 0.035;        // Toleranz der Farbanteile (r, g)
const SIGMA_HELL = 0.5;           // Toleranz der Helligkeit (log)
const VORLIEBE = 0.12;            // Abzug fuer grosse Winkel (Handachse bevorzugt)
const FERN_MM = 40;               // ab hier zaehlt die Haut als "Unterarm sichtbar"
// Querschnitte fuer Breite und Mittellinie des Unterarms (mm vom Handgelenkpunkt)
const QUERSCHNITT_MM = [14, 24, 34, 44, 54, 64, 76];
const KANTE_AEHNLICH = 0.22;
const SIGMA_HELL_KANTE = 1.2;     // lokale Kante: Helligkeit kaum werten (Licht/Schatten auf dem Arm)      // darunter gilt ein Abtastpunkt als "keine Haut"
const NAH_MM = 30;                // Querschnitte bis hier gelten als "am Handgelenk" (Armband)
const BREITE_MAX = 2.0;           // Suche quer bis zum Vielfachen des Norm-Handgelenkradius

export class UnterarmSchaetzer {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.daten = null;
    this.b = 0;
    this.h = 0;
    this.k = 1;
    this.fehler = false;
  }

  /** Quelle verkleinert einlesen. Liefert false, wenn das nicht geht. */
  lese(quelle, W, H) {
    if (this.fehler) return false;
    try {
      const k = LANGE_SEITE / Math.max(W, H);
      const b = Math.max(8, Math.round(W * k));
      const h = Math.max(8, Math.round(H * k));
      if (!this.canvas) {
        this.canvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(b, h) : document.createElement('canvas');
        this.ctx = null;
      }
      if (this.canvas.width !== b || this.canvas.height !== h) {
        this.canvas.width = b;
        this.canvas.height = h;
      }
      if (!this.ctx) this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
      this.ctx.drawImage(quelle, 0, 0, b, h);
      this.daten = this.ctx.getImageData(0, 0, b, h).data;
      this.b = b;
      this.h = h;
      this.k = k;
      return true;
    } catch (e) {
      // z. B. fremde Bildquelle ohne CORS: dauerhaft auf die Handachse zurueckfallen
      this.fehler = true;
      return false;
    }
  }

  /** Farbe am Buehnenpunkt (x, y) als [Anteil r, Anteil g, Helligkeit] oder null. */
  farbe(x, y, W, H, spiegel) {
    const px = Math.round((spiegel ? W - x : x) * this.k - 0.5);
    const py = Math.round((H - y) * this.k - 0.5);
    if (px < 0 || py < 0 || px >= this.b || py >= this.h) return null;
    const i = (py * this.b + px) * 4;
    const d = this.daten;
    const r = d[i], g = d[i + 1], bl = d[i + 2];
    const summe = r + g + bl + 3;
    return [(r + 1) / summe, (g + 1) / summe, summe];
  }

  /**
   * P: 21 Handpunkte (Buehnenraum, Y oben), ppm: px je mm, quer: Handgelenkradius (mm).
   * Liefert { winkel (rad, gegen den Uhrzeigersinn in der Buehne), guete 0..1,
   *   arm: null | { halbBreitePx, halbBreiteNahPx, versatzPx, guete } } oder null.
   * arm: gemessene halbe Breite des Unterarms im Bild und seitlicher Versatz
   * seiner Mittellinie am Handgelenkpunkt (px, positiv = links der Armrichtung).
   */
  schaetze(quelle, P, ppm, quer, { W, H, spiegel }) {
    if (!quelle || !(ppm > 0) || !this.lese(quelle, W, H)) return null;
    // Hautfarbe: Mittel ueber die Handflaeche (zwischen Handgelenk und Knoecheln)
    const ref = [0, 0, 0];
    let n = 0;
    for (const t of [0.3, 0.5]) {
      for (const m of [5, 9, 13, 17]) {
        const c = this.farbe(P[0].x + t * (P[m].x - P[0].x), P[0].y + t * (P[m].y - P[0].y), W, H, spiegel);
        if (!c) continue;
        ref[0] += c[0]; ref[1] += c[1]; ref[2] += Math.log(c[2]);
        n++;
      }
    }
    if (n < 4) return null;
    ref[0] /= n; ref[1] /= n; ref[2] /= n;

    // Grundrichtung: von der Knoechelmitte zum Handgelenk (Richtung Ellbogen)
    const mx = (P[5].x + P[9].x + P[13].x + P[17].x) / 4;
    const my = (P[5].y + P[9].y + P[13].y + P[17].y) / 4;
    let dx = P[0].x - mx;
    let dy = P[0].y - my;
    const l = Math.hypot(dx, dy);
    if (l < 1e-3) return null;
    dx /= l; dy /= l;

    const aehnlich = (c) => {
      const a = (c[0] - ref[0]) / SIGMA_FARBE;
      const b = (c[1] - ref[1]) / SIGMA_FARBE;
      const hl = (Math.log(c[2]) - ref[2]) / SIGMA_HELL;
      return Math.exp(-0.5 * (a * a + b * b + hl * hl));
    };

    const werte = [];
    for (let w = -WINKEL_MAX; w <= WINKEL_MAX + 1e-6; w += WINKEL_SCHRITT) {
      const cs = Math.cos(w), sn = Math.sin(w);
      const ux = dx * cs - dy * sn;
      const uy = dx * sn + dy * cs;
      let summe = 0, gewicht = 0, drin = 0, gesamt = 0, fern = 0, fernGewicht = 0;
      STRAHL_MM.forEach((mm, j) => {
        const g = 1 / (1 + j / 4);   // nahe am Handgelenk zaehlt mehr
        for (const q of QUER_ANTEIL) {
          const off = q * quer * ppm;
          const x = P[0].x + ux * mm * ppm - uy * off;
          const y = P[0].y + uy * mm * ppm + ux * off;
          gesamt += g;
          const c = this.farbe(x, y, W, H, spiegel);
          if (!c) continue;
          const a = aehnlich(c);
          drin += g;
          summe += g * a;
          gewicht += g;
          if (mm >= FERN_MM) { fern += a; fernGewicht++; }
        }
      });
      // zu wenig im Bild: Richtung nicht bewertbar
      const wert = drin / gesamt >= 0.35 ? summe / gewicht - VORLIEBE * (w / WINKEL_MAX) ** 2 : null;
      werte.push({ w, wert, fern: fernGewicht ? fern / fernGewicht : 0, drin: drin / gesamt });
    }
    const gueltig = werte.filter((v) => v.wert != null);
    if (gueltig.length < 5) return null;
    let besterI = 0;
    werte.forEach((v, i) => { if (v.wert != null && (werte[besterI].wert == null || v.wert > werte[besterI].wert)) besterI = i; });
    const bester = werte[besterI];
    // Feinlage per Parabel durch die Nachbarn
    let winkel = bester.w;
    const a = werte[besterI - 1], c = werte[besterI + 1];
    if (a && c && a.wert != null && c.wert != null) {
      const nenner = a.wert - 2 * bester.wert + c.wert;
      if (nenner < -1e-6) winkel += WINKEL_SCHRITT * Math.max(-0.5, Math.min(0.5, 0.5 * (a.wert - c.wert) / nenner));
    }
    // Guete: Haut auch weiter weg vom Handgelenk sichtbar (nicht nur bis zum
    // Aermel) und klar besser als die anderen Richtungen
    const mittel = gueltig.reduce((s, v) => s + v.wert, 0) / gueltig.length;
    // Am Bildrand (Strahl nur teilweise im Bild) ist die Richtung unsicher: Guete daempfen
    const guete = Math.max(0, Math.min(1, (bester.fern - 0.3) / 0.25))
      * Math.max(0, Math.min(1, (bester.wert - 0.25) / 0.25))
      * Math.max(0, Math.min(1, (bester.wert - mittel) / 0.15))
      * Math.max(0, Math.min(1, (bester.drin - 0.4) / 0.35));
    if (guete <= 0.01) return null;
    // Mittellinie der Querschnitte: genauer als die Strahlbewertung (die Strahlen
    // starten am Handgelenkpunkt, der bei seitlicher Ansicht am Rand des Arms
    // liegt, und kippen deshalb zur Seite). Iteriert, weil die Querschnitte
    // senkrecht zur jeweils geschaetzten Richtung liegen; nur deutliche Messungen.
    let arm = null;
    for (let i = 0; i < 3; i++) {
      const a = this.querschnitte(P[0], winkel, dx, dy, ppm, quer, aehnlich, W, H, spiegel);
      if (!a) break;
      arm = a;
      if (a.winkelKorrektur == null) break;
      winkel = Math.max(-WINKEL_MAX, Math.min(WINKEL_MAX, winkel + a.winkelKorrektur * a.guete));
      if (Math.abs(a.winkelKorrektur) < 0.02) break;
    }
    return { winkel, guete, arm };
  }

  /**
   * Querschnitte senkrecht zur geschaetzten Armrichtung: Hautkanten links und
   * rechts suchen. Liefert halbe Breite (Median), seitlichen Versatz der
   * Mittellinie am Handgelenk und eine Winkelkorrektur aus der Ausgleichsgeraden
   * der Querschnittsmitten, oder null.
   */
  querschnitte(p0, winkel, dx, dy, ppm, quer, aehnlich, W, H, spiegel) {
    const cs = Math.cos(winkel), sn = Math.sin(winkel);
    const ux = dx * cs - dy * sn;
    const uy = dx * sn + dy * cs;
    const nx = -uy, ny = ux;                  // quer (links der Armrichtung)
    const schritt = 0.75 / this.k;            // Buehnenpixel je Abtastschritt
    const maxPx = BREITE_MAX * quer * ppm;
    // Kante: weder wie die Handflaeche noch wie die Haut in der Mitte dieses
    // Querschnitts. Die lokale Farbe vergleicht nur den Farbton (ohne Helligkeit):
    // hell beleuchtete Armkanten gelten sonst schon als Hintergrund, die Mitte
    // rutscht zur Schattenseite und der Verdecker deckt den Arm nicht ganz.
    const kante = (cx, cy, rx, ry, c0) => {
      const lokal = (c) => {
        const a = (c[0] - c0[0]) / SIGMA_FARBE;
        const b = (c[1] - c0[1]) / SIGMA_FARBE;
        const hl = Math.log(c[2] / c0[2]) / SIGMA_HELL_KANTE;
        return Math.exp(-0.5 * (a * a + b * b + hl * hl));
      };
      let fehlt = 0;
      for (let d = schritt; d <= maxPx; d += schritt) {
        const c = this.farbe(cx + rx * d, cy + ry * d, W, H, spiegel);
        if (!c) return null;                  // Bildrand: Kante unbekannt
        if (aehnlich(c) < KANTE_AEHNLICH && lokal(c) < KANTE_AEHNLICH) {
          if (++fehlt >= 2) return d - schritt * 1.5;
        } else fehlt = 0;
      }
      return null;
    };
    const mitten = [];
    const breiten = [];
    const nah = [];
    for (const mm of QUERSCHNITT_MM) {
      const cx = p0.x + ux * mm * ppm;
      const cy = p0.y + uy * mm * ppm;
      const c0 = this.farbe(cx, cy, W, H, spiegel);
      if (!c0 || aehnlich(c0) < 0.35) continue;
      const l = kante(cx, cy, nx, ny, c0);
      const r = kante(cx, cy, -nx, -ny, c0);
      if (l == null || r == null) continue;
      const h = (l + r) / 2;
      if (h < 0.45 * quer * ppm || h > 1.6 * quer * ppm) continue;
      breiten.push(h);
      if (mm <= NAH_MM) nah.push(h);
      // Mitte als (Abstand entlang, seitlicher Versatz)
      mitten.push({ s: mm * ppm, q: (l - r) / 2, l, r });
    }
    if (breiten.length < 3) return null;
    breiten.sort((a, b) => a - b);
    const halbBreitePx = breiten[Math.floor(breiten.length / 2)];
    // Ausgleichsgerade q = q0 + m * s durch die Querschnittsmitten
    const n = mitten.length;
    let ss = 0, sq = 0, sss = 0, ssq = 0;
    for (const m of mitten) { ss += m.s; sq += m.q; sss += m.s * m.s; ssq += m.s * m.q; }
    const nenner = n * sss - ss * ss;
    let m = 0;
    let q0 = sq / n;
    if (nenner > 1e-6) {
      m = (n * ssq - ss * sq) / nenner;
      q0 = (sq - m * ss) / n;
    }
    // Streuung der Breiten (Aermel, Schatten) und der Mitten um die Gerade
    const streuB = (breiten[breiten.length - 1] - breiten[0]) / halbBreitePx;
    let rest = 0;
    for (const p of mitten) rest += (p.q - q0 - m * p.s) ** 2;
    rest = Math.sqrt(rest / n) / halbBreitePx;
    const guete = Math.min(1, (n - 2) / 3) * Math.max(0, Math.min(1, (0.9 - streuB) / 0.5))
      * Math.max(0, Math.min(1, (0.45 - rest) / 0.3));
    if (guete <= 0.05) return null;
    // Winkelkorrektur: Gerade dreht gegen die Messrichtung (positiv = zur Seite n)
    const korrektur = Math.atan(m);
    nah.sort((a, b) => a - b);
    return {
      halbBreitePx,
      // am Armband (Handgelenk) ist der Arm meist schmaler als weiter oben
      halbBreiteNahPx: nah.length ? nah[Math.floor(nah.length / 2)] : halbBreitePx,
      versatzPx: q0,
      winkelKorrektur: Math.abs(korrektur) < 0.5 ? korrektur : null,
      guete,
      schnitte: mitten           // fuer Pruefansichten: { s, q, l, r } je Querschnitt
    };
  }
}
