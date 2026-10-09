// Fingerbreite aus dem Kamerabild (fuer Ringe).
//
// Die Handpunkte liegen auf der Mittellinie der Finger; ihre Breite kennt
// MediaPipe nicht. Mit einem Normdurchmesser steht ein Ring an schlanken
// Fingern seitlich ueber und wirkt wie eine aufgesteckte Klammer. Hier wird
// die Breite des Grundglieds im Bild gemessen: Bereich um die Hand verkleinert
// einlesen, dann quer zur Fingerachse auf beiden Seiten den staerksten Sprung in
// Helligkeit und Farbton suchen (Rand zum Hintergrund bzw. dunkle Fuge zum
// Nachbarfinger). Die runde Schattierung des Fingers selbst verlaeuft weich.

const LANGE_SEITE = 288;          // Analysebild (px, lange Seite des Handbereichs)
const RAND_ANTEIL = 0.12;         // Handbereich etwas groesser als die Punkte
// Querschnitte relativ zur Ringlage (Anteil des Grundglieds): eher zum Mittelgelenk
// hin, nahe am Knoechel liegt die Schwimmhaut zwischen den Fingern (keine Kante)
const LINIEN = [-0.06, 0.08, 0.22];
const SUCHE_MIN = 0.45;           // Kantensuche zwischen diesen Vielfachen des Normradius
const SUCHE_MAX = 1.6;
const SPRUNG_MIN = 0.12;          // schwaecher: keine sichere Kante (Haut an Haut)
const FARB_GEWICHT = 4;           // Farbtonsprung gegenueber Helligkeitssprung

export class FingerMesser {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.daten = null;
    this.fehler = false;
  }

  /** Handbereich (Buehnenpixel, Punkte P) verkleinert einlesen. */
  lese(quelle, P, W, H, spiegel) {
    if (this.fehler || !quelle) return false;
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const p of P) {
      const sx = spiegel ? W - p.x : p.x;
      const sy = H - p.y;
      if (sx < x0) x0 = sx; if (sx > x1) x1 = sx;
      if (sy < y0) y0 = sy; if (sy > y1) y1 = sy;
    }
    const rand = RAND_ANTEIL * Math.max(x1 - x0, y1 - y0);
    x0 = Math.max(0, Math.floor(x0 - rand));
    y0 = Math.max(0, Math.floor(y0 - rand));
    x1 = Math.min(W, Math.ceil(x1 + rand));
    y1 = Math.min(H, Math.ceil(y1 + rand));
    const sw = x1 - x0;
    const sh = y1 - y0;
    if (sw < 8 || sh < 8) return false;
    const k = Math.min(1, LANGE_SEITE / Math.max(sw, sh));
    const b = Math.max(1, Math.round(sw * k));
    const h = Math.max(1, Math.round(sh * k));
    try {
      if (!this.canvas) {
        this.canvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(b, h) : document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
      }
      if (this.canvas.width !== b || this.canvas.height !== h) {
        this.canvas.width = b;
        this.canvas.height = h;
      }
      this.ctx.drawImage(quelle, x0, y0, sw, sh, 0, 0, b, h);
      this.daten = this.ctx.getImageData(0, 0, b, h).data;
    } catch (e) {
      // z. B. fremde Quelle ohne CORS: dann bleibt es beim Normdurchmesser
      this.fehler = true;
      return false;
    }
    this.bereich = { x0, y0, k, b, h, W, H, spiegel };
    return true;
  }

  /** Farbe an einem Buehnenpunkt: [r-Anteil, g-Anteil, Helligkeit] oder null. */
  farbe(x, y) {
    const { x0, y0, k, b, h, W, H, spiegel } = this.bereich;
    const px = Math.round(((spiegel ? W - x : x) - x0) * k - 0.5);
    const py = Math.round((H - y - y0) * k - 0.5);
    if (px < 0 || py < 0 || px >= b || py >= h) return null;
    const i = (py * b + px) * 4;
    const d = this.daten;
    const r = d[i], g = d[i + 1], bl = d[i + 2];
    const summe = r + g + bl + 3;
    return [(r + 1) / summe, (g + 1) / summe, summe];
  }

  /**
   * Halbe Breite des Fingers quer zur Achse a->b (Buehnenpixel) an der Stelle t
   * (0..1 entlang a->b) und seitlicher Versatz seiner Mitte (positiv = links der
   * Richtung a->b). rNorm: Radius nach Normdurchmesser. Liefert null, wenn
   * nicht sicher messbar (Bildrand, Hintergrund wie Haut, Finger verdeckt).
   */
  miss(a, b, t, rNorm) {
    if (!this.daten) return null;
    const dx = b.x - a.x, dy = b.y - a.y;
    const l = Math.hypot(dx, dy);
    if (l < 2 || !(rNorm > 0)) return null;
    const ux = dx / l, uy = dy / l;
    const nx = -uy, ny = ux;
    const schritt = Math.max(0.5, 0.5 / this.bereich.k);
    const abstand = 1 / this.bereich.k;      // Gradient ueber etwa ein Analysepixel
    const halbe = [];
    const versatz = [];
    for (const dt of LINIEN) {
      const s = (t + dt) * l;
      const cx = a.x + ux * s, cy = a.y + uy * s;
      if (!this.farbe(cx, cy)) continue;
      // Kante = staerkster Sprung (Helligkeit und Farbton) zwischen 0,45 und 1,6
      // Normradien von der Mitte. Ein Finger ist im Licht rund schattiert (weicher
      // Verlauf), der Rand zum Hintergrund oder zur Fuge springt.
      const kante = (sx, sy) => {
        let beste = 0;
        let bestD = null;
        for (let d = SUCHE_MIN * rNorm; d <= SUCHE_MAX * rNorm; d += schritt) {
          const c1 = this.farbe(cx + sx * (d - abstand), cy + sy * (d - abstand));
          const c2 = this.farbe(cx + sx * (d + abstand), cy + sy * (d + abstand));
          if (!c1 || !c2) return null;          // Bildrand
          const sprung = Math.abs(c2[2] - c1[2]) / (c2[2] + c1[2])
            + FARB_GEWICHT * Math.hypot(c2[0] - c1[0], c2[1] - c1[1]);
          if (sprung > beste) { beste = sprung; bestD = d; }
        }
        return beste >= SPRUNG_MIN ? bestD : null;
      };
      const li = kante(nx, ny);
      const re = kante(-nx, -ny);
      if (li == null || re == null) continue;
      halbe.push((li + re) / 2);
      versatz.push((li - re) / 2);
    }
    if (halbe.length < 2) return null;
    // robust: Median, Ausreisser (> 20 % daneben) verwerfen
    const median = [...halbe].sort((p, q) => p - q)[halbe.length >> 1];
    let sh = 0, sv = 0, n = 0;
    halbe.forEach((hb, i) => {
      if (Math.abs(hb - median) > 0.2 * median) return;
      sh += hb; sv += versatz[i]; n++;
    });
    if (n < 2) return null;
    return { halb: sh / n, versatz: sv / n, guete: n === LINIEN.length ? 1 : 0.7 };
  }
}
