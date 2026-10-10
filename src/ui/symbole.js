// Icons als Inline-SVG (Linien, currentColor). Feine Strichstaerke passend zum Shop.

const svg = (inhalt, { groesse = 24, strich = 1.25, klasse = '' } = {}) =>
  `<svg class="sym ${klasse}" viewBox="0 0 24 24" width="${groesse}" height="${groesse}" fill="none" stroke="currentColor" stroke-width="${strich}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inhalt}</svg>`;

// Vierstrahliger Funkelstern mit eingezogenen Seiten
const stern = (cx, cy, r) => {
  const k = r * 0.16;
  return `M${cx} ${cy - r}C${cx + k} ${cy - k} ${cx + k} ${cy - k} ${cx + r} ${cy}C${cx + k} ${cy + k} ${cx + k} ${cy + k} ${cx} ${cy + r}C${cx - k} ${cy + k} ${cx - k} ${cy + k} ${cx - r} ${cy}C${cx - k} ${cy - k} ${cx - k} ${cy - k} ${cx} ${cy - r}Z`;
};

export const SYMBOLE = {
  funkeln: svg(`<path d="${stern(10, 13, 7.5)}"/><path d="${stern(18.5, 5.5, 3)}"/>`, { strich: 1.1 }),
  schliessen: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  kamera: svg('<path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h2.6l1.4-2h6l1.4 2H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z"/><circle cx="12" cy="12.8" r="3.4"/>'),
  wechseln: svg('<path d="M4 9.5A8 8 0 0 1 18.6 7M20 14.5A8 8 0 0 1 5.4 17"/><path d="M18.9 3.6l-.3 3.6-3.6-.3M5.1 20.4l.3-3.6 3.6.3"/><circle cx="12" cy="12" r="2.4"/>'),
  foto: svg('<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><circle cx="9" cy="9.5" r="1.6"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17"/>'),
  teilen: svg('<path d="M12 3.5v11M8 7.2l4-3.7 4 3.7"/><path d="M8.5 10.5H6.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2"/>'),
  tasche: svg('<path d="M5.5 8.5h13l-1 11a1 1 0 0 1-1 .9h-9a1 1 0 0 1-1-.9z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/>'),
  speichern: svg('<path d="M12 4v11M7.8 10.8L12 15l4.2-4.2"/><path d="M5 19.5h14"/>'),
  zurueck: svg('<path d="M14.5 6l-6 6 6 6"/>'),
  schloss: svg('<rect x="5.5" y="10.5" width="13" height="9.5" rx="1.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>', { groesse: 16 }),
  zuruecksetzen: svg('<path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5"/><path d="M4.5 4.5v3.6h3.6"/>', { groesse: 18 }),
  hand: svg('<path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/>'),
  perle: svg('<circle cx="12" cy="12" r="6.5"/><path d="M9 9.6a3.6 3.6 0 0 1 2.6-1.6"/>'),
  fehler: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.2v.1"/>', { groesse: 28, strich: 1.1 })
};

// Kleine animierte Symbole fuer die Hinweis-Pille (Animation in stil.js, Klassen hs-*)
export const HINWEIS_SYMBOLE = {
  hand: svg('<g class="hs-winken"><path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/></g>', { groesse: 18 }),
  naeher: svg('<g class="hs-zoom"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></g><circle cx="12" cy="12" r="2.2"/>', { groesse: 18 }),
  rahmen: svg('<path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/><g class="hs-atmen"><rect x="8" y="8" width="8" height="8" rx="1"/></g>', { groesse: 18 }),
  spreizen: svg('<g class="hs-spreizen"><path d="M12 20v-9M12 11l-4.5-6M12 11l4.5-6M12 11V3.5"/></g>', { groesse: 18 }),
  gesicht: svg('<ellipse cx="12" cy="11.5" rx="6" ry="7.5"/><g class="hs-blinzeln"><path d="M9.6 10.5h.1M14.3 10.5h.1"/></g><path d="M10.4 15.2c1 .6 2.2.6 3.2 0"/>', { groesse: 18 }),
  kopfDrehen: svg('<ellipse cx="12" cy="12" rx="5.5" ry="7"/><g class="hs-drehen"><path d="M10 10.5h.1M13.4 10.5h.1M11.5 12.5l-.4 1.6h1"/></g><path d="M2.8 9.5c-.8 1.6-.8 3.4 0 5M21.2 9.5c.8 1.6.8 3.4 0 5"/>', { groesse: 18 }),
  schultern: svg('<circle cx="12" cy="7" r="3.2"/><path d="M10.6 10v2.2M13.4 10v2.2"/><g class="hs-atmen"><path d="M3.5 20c.6-4 3.6-6.5 8.5-6.5s7.9 2.5 8.5 6.5"/></g>', { groesse: 18 }),
  wenden: svg('<g class="hs-wenden"><path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/></g>', { groesse: 18 }),
  punkt: '<span class="hs-punkt" aria-hidden="true"></span>'
};

/** Symbol zum Hinweis-Code des Trackers. */
export function hinweisSymbol(code) {
  const zuordnung = {
    'hand-zeigen': 'hand', naeher: 'naeher', 'ganz-ins-bild': 'rahmen', 'finger-spreizen': 'spreizen',
    'gesicht-zeigen': 'gesicht', 'kopf-drehen': 'kopfDrehen', schultern: 'schultern', handruecken: 'wenden'
  };
  return HINWEIS_SYMBOLE[zuordnung[code]] || HINWEIS_SYMBOLE.punkt;
}
