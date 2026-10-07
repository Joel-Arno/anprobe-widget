// Attrappe der Buehne (Schnittstelle laut docs/ARCHITEKTUR.md, "Schnittstelle render").
// Zeichnet nur das Kamerabild (2D) und Kreise an den Ankern, damit die
// Oberflaeche ohne WebGL-Buehne geprueft werden kann.

const METALL_FARBE = { gold: '#C9A05A', silber: '#C9C9C6', rosegold: '#D49A84', weissgold: '#DAD6CC' };

export class Buehne {
  constructor(canvas, { pixelRatio = 1, qualitaet = 'hoch' } = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.pixelRatio = pixelRatio;
    this.qualitaet = qualitaet;
    this.quelle = null;
    this.info = { W: 1, H: 1, spiegel: false };
    this.ansicht = { b: 1, h: 1, modus: 'cover' };
    this.modell = null;
    this.finger = 'ring';
    this.anpassung = { skala: 1, versatzMm: { x: 0, y: 0, z: 0 } };
    this.ergebnis = null;
    this.zeit = 0;
    window.__stubBuehne = this;
    (window.__stubProtokoll ||= []).push(['konstruktor', { pixelRatio, qualitaet }]);
  }

  setzeQuelle(quelle, { W, H, spiegel }) {
    this.quelle = quelle;
    this.info = { W, H, spiegel };
    window.__stubProtokoll.push(['setzeQuelle', { W, H, spiegel, art: quelle.tagName }]);
  }

  setzeAnsicht(b, h, modus) {
    this.ansicht = { b, h, modus };
    this.canvas.width = Math.round(b * this.pixelRatio);
    this.canvas.height = Math.round(h * this.pixelRatio);
    window.__stubProtokoll.push(['setzeAnsicht', { b, h, modus }]);
  }

  setzeSchmuck(modell, { finger } = {}) {
    this.modell = modell;
    if (finger) this.finger = finger;
    window.__stubProtokoll.push(['setzeSchmuck', { art: modell.art, metall: modell.gruppe?.userData?.spec?.metall, finger }]);
  }

  setzeFinger(key) {
    this.finger = key;
    window.__stubProtokoll.push(['setzeFinger', key]);
  }

  setzeAnpassung({ skala, versatzMm }) {
    this.anpassung = { skala, versatzMm: { x: versatzMm.x, y: versatzMm.y, z: versatzMm.z } };
  }

  aktualisiere(ergebnis, dt) {
    this.ergebnis = ergebnis;
    this.zeit += dt;
  }

  /** Abbildung Buehnenraum -> Canvas-Pixel (cover/contain). */
  abbildung() {
    const { W, H } = this.info;
    const b = this.canvas.width;
    const h = this.canvas.height;
    const s = this.ansicht.modus === 'contain' ? Math.min(b / W, h / H) : Math.max(b / W, h / H);
    return { s, ox: (b - W * s) / 2, oy: (h - H * s) / 2, W, H };
  }

  zeichne(ctx, a) {
    const { W, H, spiegel } = this.info;
    ctx.fillStyle = '#2a2622';
    if (this.ansicht.modus === 'contain') ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    else ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (this.quelle) {
      ctx.save();
      if (spiegel) {
        ctx.translate(a.ox + W * a.s, a.oy);
        ctx.scale(-1, 1);
        ctx.drawImage(this.quelle, 0, 0, W * a.s, H * a.s);
      } else {
        ctx.drawImage(this.quelle, a.ox, a.oy, W * a.s, H * a.s);
      }
      ctx.restore();
    }
    const e = this.ergebnis;
    if (!e || !e.anker) return;
    const farbe = METALL_FARBE[this.modell?.gruppe?.userData?.spec?.metall] || '#C9A05A';
    const anker = [];
    if (e.anker.ring) anker.push(e.anker.ring[this.finger]);
    for (const k of ['armband', 'kette', 'ohrL', 'ohrR']) if (e.anker[k]) anker.push(e.anker[k]);
    for (const an of anker) {
      if (!an || !(an.sichtbar > 0)) continue;
      const v = this.anpassung.versatzMm;
      const skala = an.pxProMm * this.anpassung.skala;
      // Versatz im Modellrahmen -> Buehne (Quaternion)
      const q = an.quaternion;
      const off = drehe(q, { x: v.x * skala, y: v.y * skala, z: v.z * skala });
      const X = an.position.x + off.x;
      const Y = an.position.y + off.y;
      const sx = a.ox + X * a.s;
      const sy = a.oy + (H - Y) * a.s;
      const r = 6 * skala * a.s;
      ctx.save();
      ctx.globalAlpha = an.sichtbar;
      ctx.lineWidth = Math.max(2, 1.6 * skala * a.s);
      ctx.strokeStyle = farbe;
      ctx.shadowColor = 'rgba(0,0,0,.35)';
      ctx.shadowBlur = 6 * a.s;
      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = farbe;
      ctx.beginPath();
      ctx.arc(sx, sy, Math.max(2, r * 0.18), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  rendere() {
    this.zeichne(this.ctx, this.abbildung());
    this.renderZaehler = (this.renderZaehler || 0) + 1;
  }

  bildschirmZuBuehne(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const a = this.abbildung();
    const px = ((clientX - r.left) / r.width) * this.canvas.width;
    const py = ((clientY - r.top) / r.height) * this.canvas.height;
    return { x: (px - a.ox) / a.s, y: a.H - (py - a.oy) / a.s };
  }

  async aufnahme({ breite = 1440 } = {}) {
    const c = document.createElement('canvas');
    const f = breite / this.canvas.width;
    c.width = Math.round(this.canvas.width * f);
    c.height = Math.round(this.canvas.height * f);
    const ctx = c.getContext('2d');
    const a = this.abbildung();
    this.zeichne(ctx, { ...a, s: a.s * f, ox: a.ox * f, oy: a.oy * f });
    window.__stubProtokoll.push(['aufnahme', { breite: c.width, hoehe: c.height }]);
    return new Promise((r) => c.toBlob(r, 'image/jpeg', 0.92));
  }

  dispose() {
    window.__stubProtokoll.push(['dispose']);
    this.quelle = null;
  }
}

function drehe(q, v) {
  if (!q) return v;
  const { x, y, z, w } = q;
  const ix = w * v.x + y * v.z - z * v.y;
  const iy = w * v.y + z * v.x - x * v.z;
  const iz = w * v.z + x * v.y - y * v.x;
  const iw = -x * v.x - y * v.y - z * v.z;
  return {
    x: ix * w + iw * -x + iy * -z - iz * -y,
    y: iy * w + iw * -y + iz * -x - ix * -z,
    z: iz * w + iw * -z + ix * -y - iy * -x
  };
}
