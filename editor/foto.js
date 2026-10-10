// Produktfoto zum Abgleich: halbtransparent ueber der 3D-Vorschau (verschieb- und
// skalierbar) oder daneben. Das Foto bleibt im Browser (Objekt-URL), nichts wird hochgeladen.
export class FotoAbgleich {
  /**
   * ebene:   Element ueber der Vorschau (absolut, deckt die Buehne ab)
   * daneben: Element neben der Vorschau (fuer den Modus 'daneben')
   * bereich: Container, der per Klasse 'mit-foto-daneben' zweispaltig wird
   */
  constructor({ ebene, daneben, bereich, onAenderung = () => {} }) {
    this.ebene = ebene;
    this.danebenEl = daneben;
    this.bereich = bereich;
    this.onAenderung = onAenderung;
    this.url = null;
    this.modus = 'darueber';
    this.deckkraft = 0.5;
    this.ausrichten = false;
    this.lage = { x: 0, y: 0, s: 1 };

    this.bildOben = document.createElement('img');
    this.bildOben.alt = 'Produktfoto (Abgleich)';
    this.bildOben.draggable = false;
    this.ebene.appendChild(this.bildOben);
    this.bildDaneben = document.createElement('img');
    this.bildDaneben.alt = 'Produktfoto';
    this.danebenEl.appendChild(this.bildDaneben);

    this.ziehen = null;
    this.ebene.addEventListener('pointerdown', (e) => this.start(e));
    this.ebene.addEventListener('pointermove', (e) => this.bewege(e));
    this.ebene.addEventListener('pointerup', (e) => this.ende(e));
    this.ebene.addEventListener('pointercancel', (e) => this.ende(e));
    this.ebene.addEventListener('wheel', (e) => this.rad(e), { passive: false });
    this.ebene.addEventListener('keydown', (e) => this.taste(e));
    this.zeige();
  }

  get geladen() { return !!this.url; }

  /** Bilddatei laden (File/Blob). */
  async lade(datei) {
    if (!datei || !/^image\//.test(datei.type)) throw new Error('Bitte ein Bild (JPG, PNG, WebP) wählen.');
    const url = URL.createObjectURL(datei);
    await new Promise((ok, fehler) => {
      const probe = new Image();
      probe.onload = ok;
      probe.onerror = () => fehler(new Error('Das Bild konnte nicht geöffnet werden.'));
      probe.src = url;
    });
    if (this.url) URL.revokeObjectURL(this.url);
    this.url = url;
    this.bildOben.src = url;
    this.bildDaneben.src = url;
    this.lage = { x: 0, y: 0, s: 1 };
    this.zeige();
  }

  setzeModus(modus) { this.modus = modus === 'daneben' ? 'daneben' : 'darueber'; this.zeige(); }
  setzeDeckkraft(w) { this.deckkraft = Math.min(1, Math.max(0.05, w)); this.zeige(); }
  setzeAusrichten(an) { this.ausrichten = !!an; this.zeige(); if (an) this.ebene.focus({ preventScroll: true }); }
  zuruecksetzen() { this.lage = { x: 0, y: 0, s: 1 }; this.zeige(); }

  entferne() {
    if (this.url) URL.revokeObjectURL(this.url);
    this.url = null;
    this.bildOben.removeAttribute('src');
    this.bildDaneben.removeAttribute('src');
    this.ausrichten = false;
    this.zeige();
  }

  zeige() {
    const da = !!this.url;
    const oben = da && this.modus === 'darueber';
    this.ebene.hidden = !oben;
    this.ebene.classList.toggle('ausrichten', oben && this.ausrichten);
    this.ebene.tabIndex = oben && this.ausrichten ? 0 : -1;
    this.bildOben.style.opacity = String(this.deckkraft);
    const { x, y, s } = this.lage;
    this.bildOben.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    this.bereich.classList.toggle('mit-foto-daneben', da && this.modus === 'daneben');
    this.danebenEl.hidden = !(da && this.modus === 'daneben');
    this.onAenderung(this);
  }

  start(e) {
    if (!this.ausrichten || e.button > 0) return;
    this.ebene.setPointerCapture(e.pointerId);
    this.ziehen = { id: e.pointerId, x: e.clientX, y: e.clientY, x0: this.lage.x, y0: this.lage.y };
    e.preventDefault();
  }

  bewege(e) {
    if (!this.ziehen || e.pointerId !== this.ziehen.id) return;
    this.lage.x = this.ziehen.x0 + (e.clientX - this.ziehen.x);
    this.lage.y = this.ziehen.y0 + (e.clientY - this.ziehen.y);
    this.zeige();
  }

  ende(e) {
    if (this.ziehen && e.pointerId === this.ziehen.id) this.ziehen = null;
  }

  rad(e) {
    if (!this.ausrichten) return;
    e.preventDefault();
    const faktor = Math.exp(-e.deltaY * 0.0012);
    this.skaliere(faktor, e.clientX, e.clientY);
  }

  /** Um einen Bildschirmpunkt skalieren (der Punkt bleibt stehen). */
  skaliere(faktor, cx, cy) {
    const r = this.ebene.getBoundingClientRect();
    const px = (cx ?? r.left + r.width / 2) - (r.left + r.width / 2);
    const py = (cy ?? r.top + r.height / 2) - (r.top + r.height / 2);
    const s0 = this.lage.s;
    const s1 = Math.min(8, Math.max(0.15, s0 * faktor));
    const k = s1 / s0;
    this.lage.x = px - (px - this.lage.x) * k;
    this.lage.y = py - (py - this.lage.y) * k;
    this.lage.s = s1;
    this.zeige();
  }

  taste(e) {
    if (!this.ausrichten) return;
    const schritt = e.shiftKey ? 10 : 1;
    const t = { ArrowLeft: [-schritt, 0], ArrowRight: [schritt, 0], ArrowUp: [0, -schritt], ArrowDown: [0, schritt] }[e.key];
    if (t) { this.lage.x += t[0]; this.lage.y += t[1]; this.zeige(); e.preventDefault(); }
    if (e.key === '+' || e.key === '=') { this.skaliere(1.02); e.preventDefault(); }
    if (e.key === '-') { this.skaliere(1 / 1.02); e.preventDefault(); }
  }
}
