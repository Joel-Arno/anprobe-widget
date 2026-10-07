// Feine Linien-Icons (inline SVG, 24er Raster, Strich = currentColor).
const svg = (inhalt, { b = 24, klasse = 'sym' } = {}) =>
  `<svg class="${klasse}" viewBox="0 0 ${b} ${b}" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inhalt}</svg>`;

export const SYM = {
  drehen: svg('<path d="M4.5 12a7.5 7.5 0 0 1 13.1-5"/><path d="M17.9 3.6v3.6h-3.6"/><path d="M19.5 12a7.5 7.5 0 0 1-13.1 5"/><path d="M6.1 20.4v-3.6h3.6"/>'),
  lineal: svg('<rect x="2.5" y="8.5" width="19" height="7" rx="1"/><path d="M6 8.5v3M9.5 8.5v2M13 8.5v3M16.5 8.5v2M20 8.5v3"/>'),
  massstab: svg('<path d="M4 7v10M20 7v10M4 12h16"/><path d="M7 9.5 4 12l3 2.5M17 9.5l3 2.5-3 2.5"/>'),
  bueste: svg('<path d="M9 3.5h6v5.5c0 1 .4 1.6 1.4 2l3.6 1.6c.9.4 1.5 1.3 1.5 2.3V20.5h-19v-5.6c0-1 .6-1.9 1.5-2.3L7.6 11c1-.4 1.4-1 1.4-2z"/><path d="M8.7 11.6c.8 2.6 1.9 3.9 3.3 3.9s2.5-1.3 3.3-3.9"/>'),
  paar: svg('<circle cx="7.5" cy="8" r="3.2"/><circle cx="16.5" cy="8" r="3.2"/><path d="M7.5 11.2v2.3M16.5 11.2v2.3"/><ellipse cx="7.5" cy="16.6" rx="1.9" ry="2.6"/><ellipse cx="16.5" cy="16.6" rx="1.9" ry="2.6"/>'),
  bild: svg('<rect x="3" y="4.5" width="18" height="15" rx="1.5"/><circle cx="9" cy="10" r="1.7"/><path d="m3.5 17.5 5-4.5 3.5 3 3-2.5 5.5 4.5"/>'),
  kamera: svg('<path d="M4 8.5h3l1.6-2.5h6.8L17 8.5h3a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.3" r="3.4"/>'),
  laden: svg('<path d="M12 15.5V4M7.5 8.5 12 4l4.5 4.5"/><path d="M4 15v3.5c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V15"/>'),
  speichern: svg('<path d="M12 4v11.5M7.5 11 12 15.5l4.5-4.5"/><path d="M4 15v3.5c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V15"/>'),
  kopieren: svg('<rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>'),
  haken: svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
  kreuz: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  info: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.4"/>'),
  achtung: svg('<path d="M12 4 21 19.5H3z"/><path d="M12 10v4.5M12 17v.3"/>'),
  verschieben: svg('<path d="M12 3v18M3 12h18"/><path d="m9.5 5.5 2.5-2.5 2.5 2.5M9.5 18.5l2.5 2.5 2.5-2.5M5.5 9.5 3 12l2.5 2.5M18.5 9.5 21 12l-2.5 2.5"/>'),
  vorlagen: svg('<rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/>'),
  neu: svg('<path d="M13.5 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3.5v5h5M12 11.5v6M9 14.5h6"/>'),
  buch: svg('<path d="M12 6.5C10.3 5 7.9 4.5 4 4.5v13c3.9 0 6.3.5 8 2 1.7-1.5 4.1-2 8-2v-13c-3.9 0-6.3.5-8 2z"/><path d="M12 6.5v13"/>'),
  pfeil: svg('<path d="m9 6 6 6-6 6"/>'),
  zurueck: svg('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4v3.5H8"/>'),
  // Arten
  ring: svg('<ellipse cx="12" cy="14" rx="6.5" ry="6.5"/><ellipse cx="12" cy="14" rx="5" ry="5"/><path d="m9.8 7.7 2.2-3.2 2.2 3.2"/><path d="M10.3 5.6h3.4"/>'),
  kette: svg('<path d="M4 3.5c0 7 3.6 11 8 11s8-4 8-11"/><path d="M12 14.5v1.2"/><path d="M12 15.7c-1.6 0-2.6 1.1-2.6 2.4 0 1.5 1.3 2.4 2.6 2.4s2.6-.9 2.6-2.4c0-1.3-1-2.4-2.6-2.4z"/>'),
  ohrringe: svg('<circle cx="12" cy="7.5" r="4"/><path d="M12 11.5v1.8"/><path d="M12 13.3c-1.8 0-3 1.6-3 3.4 0 2 1.4 3.3 3 3.3s3-1.3 3-3.3c0-1.8-1.2-3.4-3-3.4z"/>'),
  armband: svg('<ellipse cx="12" cy="12" rx="8.5" ry="5"/><ellipse cx="12" cy="12.6" rx="6.6" ry="3.4"/><path d="M12 17v1.6"/><circle cx="12" cy="19.6" r="1.1"/>')
};
