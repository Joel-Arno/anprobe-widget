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

const LANGE_SEITE = 160;          // Analysebild (px, lange Seite)
const WINKEL_MAX = 75 * Math.PI / 180;
const WINKEL_SCHRITT = 5 * Math.PI / 180;
const STRAHL_MM = [12, 20, 28, 36, 46, 56, 68, 80, 95, 110];
const QUER_ANTEIL = [-0.55, 0, 0.55];   // Abtastung quer zum Arm (Anteil des Handgelenkradius)
const SIGMA_FARBE = 0.035;        // Toleranz der Farbanteile (r, g)
const SIGMA_HELL = 0.5;           // Toleranz der Helligkeit (log)
const VORLIEBE = 0.12;            // Abzug fuer grosse Winkel (Handachse bevorzugt)
const FERN_MM = 40;               // ab hier zaehlt die Haut als "Unterarm sichtbar"

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
   * Liefert { winkel (rad, gegen den Uhrzeigersinn in der Buehne), guete 0..1 } oder null.
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
      werte.push({ w, wert, fern: fernGewicht ? fern / fernGewicht : 0 });
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
    const guete = Math.max(0, Math.min(1, (bester.fern - 0.3) / 0.25))
      * Math.max(0, Math.min(1, (bester.wert - 0.25) / 0.25))
      * Math.max(0, Math.min(1, (bester.wert - mittel) / 0.15));
    if (guete <= 0.01) return null;
    return { winkel, guete };
  }
}
