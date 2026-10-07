// Attrappe des Trackers (Schnittstelle laut docs/ARCHITEKTUR.md, "Schnittstelle tracking").
// Steuerung aus dem Test ueber window.__stub = { ladezeitMs, ladeFehler, gefunden, hinweis }.
import * as THREE from 'three';

export const BENOETIGT = { ring: ['hand'], armband: ['hand'], ohrringe: ['gesicht'], kette: ['gesicht', 'koerper'] };

const steuerung = () => (window.__stub ||= {});

function anker(x, y, pxProMm, sichtbar = 1) {
  return { position: new THREE.Vector3(x, y, 0), quaternion: new THREE.Quaternion(), pxProMm, sichtbar };
}

export class Tracker {
  constructor(art, { konfig, onFortschritt } = {}) {
    this.art = art;
    this.konfig = konfig;
    this.onFortschritt = onFortschritt;
    this.geladen = false;
    (window.__stubProtokoll ||= []).push(['tracker', art]);
  }

  async laden() {
    const dauer = steuerung().ladezeitMs ?? 1200;
    const texte = ['Lade Erkennung', 'Lade Modell', 'Starte Erkennung'];
    const schritte = 20;
    for (let i = 1; i <= schritte; i++) {
      await new Promise((r) => setTimeout(r, dauer / schritte));
      if (steuerung().ladeFehler && i === 8) throw new Error('Netzwerkfehler (Attrappe)');
      this.onFortschritt?.(Math.min(0.99, i / schritte), texte[Math.min(2, Math.floor((i / schritte) * 3))]);
    }
    this.geladen = true;
    return this;
  }

  zuruecksetzen() { window.__stubProtokoll.push(['zuruecksetzen']); }
  dispose() {}

  verarbeite(quelle, zeitMs, { W, H, spiegel }) {
    const st = steuerung();
    (this.aufrufe ||= []).push({ zeitMs, W, H, spiegel });
    if (this.aufrufe.length > 200) this.aufrufe.shift();
    const t = (zeitMs ?? 0) / 1000;
    const gefunden = st.gefunden ?? true;
    const pxProMm = W / 160;
    const wackel = zeitMs == null ? 0 : Math.sin(t * 1.3) * W * 0.006;
    const ergebnis = {
      gefunden,
      hinweis: st.hinweis ?? (gefunden ? null : { code: 'hand-zeigen', text: 'Halte deine Hand ins Bild' }),
      anker: {},
      masse: {},
      verdecker: [],
      schattenflaechen: [],
      schwerkraft: new THREE.Vector3(0, -1, 0)
    };
    if (!gefunden) return ergebnis;
    const p = st.punkte || {};
    if (this.art === 'ring') {
      const finger = ['daumen', 'zeige', 'mittel', 'ring', 'klein'];
      ergebnis.anker.ring = {};
      finger.forEach((f, i) => {
        const [x, y] = p[f] || [0.3 + i * 0.1, 0.55 - Math.abs(i - 2) * 0.04];
        ergebnis.anker.ring[f] = anker(x * W + wackel, y * H, pxProMm);
      });
    } else if (this.art === 'armband') {
      const [x, y] = p.armband || [0.5, 0.25];
      ergebnis.anker.armband = anker(x * W + wackel, y * H, pxProMm);
    } else if (this.art === 'kette') {
      const [x, y] = p.kette || [0.5, 0.3];
      ergebnis.anker.kette = anker(x * W + wackel, y * H, pxProMm);
    } else {
      const [xl, yl] = p.ohrL || [0.36, 0.55];
      const [xr, yr] = p.ohrR || [0.64, 0.55];
      ergebnis.anker.ohrL = anker(xl * W + wackel, yl * H, pxProMm);
      ergebnis.anker.ohrR = anker(xr * W + wackel, yr * H, pxProMm);
    }
    return ergebnis;
  }
}
