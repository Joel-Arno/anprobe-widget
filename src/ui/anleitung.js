// Animierte Linien-Anleitungen (SVG + CSS-Animationen aus stil.js) und die
// Handgrafik fuer die Fingerwahl. Alle Zeichnungen im viewBox 0 0 200 240.

export const FINGER_NAMEN = {
  daumen: 'Daumen', zeige: 'Zeigefinger', mittel: 'Mittelfinger', ring: 'Ringfinger', klein: 'Kleiner Finger'
};

/** Texte je Art: Titel und kurze Schritte fuer den Intro-Bildschirm. */
export const ANLEITUNG = {
  ring: {
    titel: 'Zeig deine Hand',
    schritte: [
      'Halte die Hand mit dem Handrücken zur Kamera, die Finger leicht gespreizt.',
      'Dreh sie langsam – der Ring folgt jeder Bewegung.',
      'Tippe auf die kleine Hand, um den Finger zu wählen.'
    ]
  },
  armband: {
    titel: 'Zeig dein Handgelenk',
    schritte: [
      'Halte Hand und Handgelenk mit dem Handrücken zur Kamera.',
      'Dreh die Hand langsam hin und her.',
      'Ruhiges, helles Licht lässt das Gold am schönsten wirken.'
    ]
  },
  ohrringe: {
    titel: 'Zeig deine Ohren',
    schritte: [
      'Streich die Haare hinters Ohr.',
      'Dreh den Kopf leicht zur Seite – die Ohrringe schwingen mit.',
      'Gleichmäßiges Licht von vorn ist ideal.'
    ]
  },
  kette: {
    titel: 'Zeig Hals und Schultern',
    schritte: [
      'Geh etwas auf Abstand zur Kamera, sodass Hals und Schultern zu sehen sind.',
      'Ein offener Kragen zeigt die Kette am schönsten.',
      'Schau entspannt in die Kamera.'
    ]
  }
};

// ---------------------------------------------------------------- Hand

// Rechte Hand, Handruecken zur Betrachterin (Daumen links). Winkel in Grad
// gegen die Senkrechte, positiv = Spitze nach rechts.
const DX = 6;   // ganze Hand leicht nach rechts (Daumen ragt links heraus)
const FINGER_GEO = {
  klein: { x: 130.5 + DX, y: 139, winkel: 10, laenge: 52, breite: 15 },
  ring: { x: 114 + DX, y: 127, winkel: 4, laenge: 70, breite: 17 },
  mittel: { x: 96 + DX, y: 124, winkel: -1, laenge: 77, breite: 18 },
  zeige: { x: 77.5 + DX, y: 128, winkel: -7, laenge: 67, breite: 17.5 },
  daumen: { x: 55.3 + DX, y: 156.4, winkel: -42, laenge: 47, breite: 20 }
};

const r1 = (v) => Math.round(v * 10) / 10;

function fingerPunkte(f) {
  const a = (f.winkel * Math.PI) / 180;
  const dir = { x: Math.sin(a), y: -Math.cos(a) };
  const quer = { x: Math.cos(a), y: Math.sin(a) };
  const spitze = { x: f.x + dir.x * f.laenge, y: f.y + dir.y * f.laenge };
  const hb = f.breite / 2;
  const hs = (f.breite * 0.88) / 2;
  const p = (b, q, h) => ({ x: r1(b.x + quer.x * q * h), y: r1(b.y + quer.y * q * h) });
  return {
    rechtsUnten: p(f, 1, hb), linksUnten: p(f, -1, hb),
    rechtsOben: p(spitze, 1, hs), linksOben: p(spitze, -1, hs),
    rSpitze: r1(hs), dir, quer, spitze
  };
}

/** Punkt auf der Fingerachse (anteil 0 = Ansatz, 1 = Spitze). */
function aufFinger(f, anteil) {
  const p = fingerPunkte(f);
  return { x: f.x + p.dir.x * f.laenge * anteil, y: f.y + p.dir.y * f.laenge * anteil, quer: p.quer, breite: f.breite };
}

const X = (v) => r1(v + DX);

/** Umriss der Hand als offener Pfad (Unterarm laeuft unten aus). */
function handUmriss() {
  const reihenfolge = ['klein', 'ring', 'mittel', 'zeige'];
  // Unterarm rechts, Handgelenk, Kleinfingerballen
  let d = `M${X(129)} 238C${X(128.5)} 228 ${X(128)} 220 ${X(128.5)} 212C${X(131.5)} 192 ${X(138)} 166 ${X(137.9)} 141`;
  let vorher = null;
  for (const name of reihenfolge) {
    const p = fingerPunkte(FINGER_GEO[name]);
    if (vorher) {
      // Schwimmhaut: weicher Bogen zwischen zwei Fingern
      const mx = (vorher.x + p.rechtsUnten.x) / 2;
      const my = Math.max(vorher.y, p.rechtsUnten.y) + 5;
      d += `Q${r1(mx)} ${r1(my)} ${p.rechtsUnten.x} ${p.rechtsUnten.y}`;
    } else {
      d += `L${p.rechtsUnten.x} ${p.rechtsUnten.y}`;
    }
    d += `L${p.rechtsOben.x} ${p.rechtsOben.y}A${p.rSpitze} ${p.rSpitze} 0 0 0 ${p.linksOben.x} ${p.linksOben.y}L${p.linksUnten.x} ${p.linksUnten.y}`;
    vorher = p.linksUnten;
  }
  const d0 = fingerPunkte(FINGER_GEO.daumen);
  // Seite des Zeigefingers hinab zur Schwimmhaut, Daumen, Daumenballen, Unterarm links
  d += `C${r1(vorher.x - 1.5)} ${r1(vorher.y + 8)} ${r1(d0.rechtsUnten.x + 2.5)} ${r1(d0.rechtsUnten.y - 6)} ${d0.rechtsUnten.x} ${d0.rechtsUnten.y}`;
  d += `L${d0.rechtsOben.x} ${d0.rechtsOben.y}A${d0.rSpitze} ${d0.rSpitze} 0 0 0 ${d0.linksOben.x} ${d0.linksOben.y}`;
  d += `L${d0.linksUnten.x} ${d0.linksUnten.y}C${X(51)} 178 ${X(66)} 194 ${X(71)} 211C${X(72)} 220 ${X(72)} 230 ${X(71.5)} 238`;
  return d;
}

/** Geschlossene Fingerform (Trefferflaeche fuer die Fingerwahl). */
function fingerForm(name) {
  const f = FINGER_GEO[name];
  const p = fingerPunkte(f);
  const unten = { x: f.x - p.dir.x * 8, y: f.y - p.dir.y * 8 };
  const q = p.quer;
  const hb = f.breite / 2 + 1;
  return `M${r1(unten.x + q.x * hb)} ${r1(unten.y + q.y * hb)}L${p.rechtsOben.x} ${p.rechtsOben.y}A${p.rSpitze} ${p.rSpitze} 0 0 0 ${p.linksOben.x} ${p.linksOben.y}L${r1(unten.x - q.x * hb)} ${r1(unten.y - q.y * hb)}Z`;
}

/** Ringband quer ueber einen Finger (leicht gewoelbt). */
function ringBand(name, anteil = 0.3, extra = 1.8) {
  const m = aufFinger(FINGER_GEO[name], anteil);
  const h = m.breite / 2 + extra;
  const a = { x: r1(m.x - m.quer.x * h), y: r1(m.y - m.quer.y * h) };
  const b = { x: r1(m.x + m.quer.x * h), y: r1(m.y + m.quer.y * h) };
  return { d: `M${a.x} ${a.y}Q${r1(m.x)} ${r1(m.y + 3.2)} ${b.x} ${b.y}`, mitte: { x: r1(m.x), y: r1(m.y + 1.6) } };
}

// Vierstrahliger Funkelstern
function stern(cx, cy, r) {
  const k = r * 0.18;
  return `M${cx} ${cy - r}Q${cx + k} ${cy - k} ${cx + r} ${cy}Q${cx + k} ${cy + k} ${cx} ${cy + r}Q${cx - k} ${cy + k} ${cx - r} ${cy}Q${cx - k} ${cy - k} ${cx} ${cy - r}Z`;
}

const HAND_UMRISS = handUmriss();

function anleitungHand(art) {
  const band = ringBand('ring');
  const schmuck = art === 'ring'
    ? `<path class="anl-gold anl-ring" d="${band.d}"/>
       <path class="anl-funkeln" d="${stern(band.mitte.x + 9, band.mitte.y - 9, 4.5)}"/>`
    : `<path class="anl-gold anl-kettchen" d="M73 206Q100 218 127 206"/>
       <g class="anl-pendel" style="transform-origin:100px 212px"><path class="anl-gold-fein" d="M100 212v6"/><circle class="anl-perle" cx="100" cy="222" r="3.6"/></g>
       <path class="anl-funkeln" d="${stern(134, 196, 4.5)}"/>`;
  return `<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
    <g class="anl-pfeile"><path d="M30 92a78 78 0 0 0 0 64"/><path d="M26 150l4 6.5 5.5-5"/><path d="M170 156a78 78 0 0 0 0-64"/><path d="M174 98l-4-6.5-5.5 5"/></g>
    <g class="anl-figur anl-drehen">
      <path class="anl-linie anl-zeichnen" pathLength="1" d="${HAND_UMRISS}"/>
      ${schmuck}
    </g>
  </svg>`;
}

// ---------------------------------------------------------------- Gesicht (Ohrringe)

function anleitungGesicht() {
  const gesicht = 'M100 40C127 40 144 62 144 92C144 118 133 139 116 150C110 154 104 156 100 156C96 156 90 154 84 150C67 139 56 118 56 92C56 62 73 40 100 40Z';
  const haarAussen = 'M48 178C40 132 40 80 58 56C70 40 84 33 100 33C118 33 132 41 142 54';
  const haarScheitel = 'M100 33C96 44 86 52 70 58';
  // Strähne vor dem Ohr (A) bzw. hinter dem Ohr (B)
  const straehneVor = 'M142 54C152 72 154 96 149 120C146 138 150 160 156 180';
  const straehneHinter = 'M142 54C158 70 164 98 162 124C161 142 164 162 170 180';
  return `<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
    <g class="anl-figur anl-kopf">
      <path class="anl-linie anl-zeichnen" pathLength="1" d="${gesicht}"/>
      <path class="anl-linie" d="${haarAussen}"/>
      <path class="anl-linie-fein" d="${haarScheitel}"/>
      <path class="anl-linie-fein" d="M50 120C48 140 50 160 56 176"/>
      <g class="anl-zuege">
        <path class="anl-linie-fein" d="M77 83Q85 78.5 92 81.5M108 81.5Q115 78.5 123 83"/>
        <path class="anl-linie" d="M79 93Q85.5 97 92 93M108 93Q114.5 97 121 93"/>
        <path class="anl-linie-fein" d="M101 98C99.5 108 97.5 114 99.5 117.5C101.5 118.5 103.5 118 105 116.5"/>
        <path class="anl-lippen" d="M91 131Q95.5 128 100 130Q104.5 128 109 131Q100 138.5 91 131Z"/>
      </g>
      <path class="anl-linie" d="M144.5 90C153 85 157 99 151.5 107.5C149.5 111.5 147.5 113 145.5 112.5"/>
      <g class="anl-ohrring"><g class="anl-pendel" style="transform-origin:147px 114px">
        <circle class="anl-gold-punkt" cx="147" cy="114.5" r="1.7"/><path class="anl-gold-fein" d="M147 116v7.5"/><circle class="anl-perle" cx="147" cy="128" r="4.3"/>
      </g></g>
      <path class="anl-linie anl-straehne-vor" d="${straehneVor}"/>
      <path class="anl-linie anl-straehne-hinter" d="${straehneHinter}"/>
      <path class="anl-linie" d="M87 149C88 162 87 172 83 182M113 149C112 162 113 172 117 182"/>
      <path class="anl-linie" d="M83 182C67 190 40 195 27 214M117 182C133 190 160 195 173 214"/>
    </g>
    <path class="anl-funkeln anl-funkeln-ohr" d="${stern(166, 118, 4.5)}"/>
  </svg>`;
}

// ---------------------------------------------------------------- Hals (Kette)

function anleitungHals() {
  const ecke = (x, y, sx, sy) => `M${x} ${y + sy * 16}V${y}H${x + sx * 16}`;
  return `<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
    <g class="anl-sucher">
      <path d="${ecke(14, 14, 1, 1)}"/><path d="${ecke(186, 14, -1, 1)}"/><path d="${ecke(14, 226, 1, -1)}"/><path d="${ecke(186, 226, -1, -1)}"/>
    </g>
    <g class="anl-figur anl-zoom">
      <path class="anl-linie" d="M66 14C72 44 88 58 100 58C112 58 128 44 134 14"/>
      <path class="anl-linie-fein" d="M92 47Q100 51 108 47"/>
      <path class="anl-linie" d="M80 50C82 70 80 84 73 98M120 50C118 70 120 84 127 98"/>
      <path class="anl-linie anl-zeichnen" pathLength="1" d="M73 98C56 107 32 111 10 126"/>
      <path class="anl-linie anl-zeichnen" pathLength="1" d="M127 98C144 107 168 111 190 126"/>
      <path class="anl-linie-fein" d="M58 119C70 116 84 120 94 125M142 119C130 116 116 120 106 125M96.5 123.5Q100 127 103.5 123.5"/>
      <path class="anl-linie-fein" d="M38 150C62 186 138 186 162 150"/>
      <path class="anl-gold anl-kette-linie" pathLength="1" d="M75 100C79 134 91 154 100 156C109 154 121 134 125 100"/>
      <g class="anl-pendel" style="transform-origin:100px 156px"><path class="anl-gold-fein" d="M100 156v3.5"/><circle class="anl-perle" cx="100" cy="164.5" r="5"/></g>
    </g>
    <path class="anl-funkeln" d="${stern(122, 150, 4.5)}"/>
  </svg>`;
}

/** Animierte Anleitung je Art (SVG-Text). */
export function anleitungSvg(art) {
  if (art === 'ohrringe') return anleitungGesicht();
  if (art === 'kette') return anleitungHals();
  return anleitungHand(art);
}

// ---------------------------------------------------------------- Fingerwahl

/**
 * Kleine Handgrafik mit antippbaren Fingern. Jeder Finger ist ein
 * <g data-finger role="radio">; der aktive bekommt ein Goldband.
 */
export function fingerWahlSvg(aktiv = 'ring') {
  const finger = Object.keys(FINGER_GEO).map((name) => {
    const band = ringBand(name, name === 'daumen' ? 0.42 : 0.32, 1.2);
    const an = name === aktiv;
    return `<g class="fw-finger${an ? ' aktiv' : ''}" data-finger="${name}" role="radio" tabindex="${an ? 0 : -1}" aria-checked="${an}" aria-label="${FINGER_NAMEN[name]}">
      <path class="fw-flaeche" d="${fingerForm(name)}"/>
      <path class="fw-band" d="${band.d}"/>
    </g>`;
  }).join('');
  return `<svg class="fw-svg" viewBox="24 40 136 190" role="radiogroup" aria-label="Finger wählen">
    <path class="fw-umriss" d="${HAND_UMRISS}"/>
    ${finger}
  </svg>`;
}
