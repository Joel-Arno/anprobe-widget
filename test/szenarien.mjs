// Testszenarien fuer test/laufen.mjs.
//
// Ein Szenario:
// {
//   name: 'ring-woman_hands',         eindeutig, auch Ordnername in test/ergebnisse/
//   art: 'ring'|'armband'|'kette'|'ohrringe',
//   produkt: '#p-ring',               Element auf test/seite.html (Standard: #p-<art>)
//   bild: 'woman_hands.jpg',          Testbild (test/cache/bilder)
//   ablauf: 'kamera'|'foto'|'ohne-kamera'|'verweigert',
//   video: 'rauschen'|'statisch'|'bewegt',   Fake-Kamera (siehe kamera.mjs)
//   format: 'auto'|'quer'|'hoch', crop: 'w:h:x:y', einpassen: 'einpassen'|'fuellen',
//   geraet: 'desktop'|'handy',
//   finger: 'zeige'|...               Ring: Finger vor der Messung umstellen
//   erwartet: { gefunden: true, anker: ['ohrL','ohrR'] }   Pruefkriterien
//   intern: true                      Bild nur fuer interne Pruefungen (nie weitergeben)
// }

export const GERAETE = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  handy: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
};

const sz = (name, art, bild, extra = {}) => ({
  name, art, bild, produkt: `#p-${art}`, ablauf: 'kamera', video: 'rauschen', format: 'auto',
  einpassen: 'einpassen', crop: null, geraet: 'desktop', ...extra
});

// Erwartete Anker je Art
const ANKER = { ring: ['ring'], armband: ['armband'], kette: ['kette'], ohrringe: ['ohrL', 'ohrR'] };

export const SZENARIEN = [
  // ---------------------------------------------------------------- Ring
  sz('ring-woman_hands', 'ring', 'woman_hands.jpg', { crop: '480:270:40:220' }),
  sz('ring-right_hands', 'ring', 'right_hands.jpg'),
  sz('ring-left_hands', 'ring', 'left_hands.jpg', { finger: 'zeige' }),
  sz('ring-paper_142', 'ring', 'paper_142.jpg'),
  sz('ring-paper_166', 'ring', 'paper_166.jpg', { finger: 'mittel' }),
  sz('ring-hand-woman-man', 'ring', 'hand-woman-man.jpg', { crop: '400:225:0:80' }),

  // ---------------------------------------------------------------- Armband
  sz('armband-hand-woman-man', 'armband', 'hand-woman-man.jpg', { crop: '400:225:0:80' }),
  sz('armband-woman_hands', 'armband', 'woman_hands.jpg', { crop: '480:270:40:220' }),
  sz('armband-right_hands', 'armband', 'right_hands.jpg'),
  sz('armband-paper_142', 'armband', 'paper_142.jpg'),

  // ---------------------------------------------------------------- Ohrringe
  sz('ohrringe-business-person', 'ohrringe', 'business-person.png', { crop: '958:539:0:0' }),
  sz('ohrringe-man-woman-okay', 'ohrringe', 'man-woman-okay.jpg', { erwartet: { anker: ['ohrL', 'ohrR'], mindestens: 1 } }),
  sz('ohrringe-mediapipe_face', 'ohrringe', 'mediapipe_face_landmark_fullsize.png'),
  sz('ohrringe-portrait', 'ohrringe', 'portrait.jpg', { intern: true }),

  // ---------------------------------------------------------------- Kette
  sz('kette-business-person', 'kette', 'business-person.png', { crop: '958:539:0:150' }),
  sz('kette-pose', 'kette', 'pose.jpg', { crop: '480:270:260:180' }),
  sz('kette-portrait', 'kette', 'portrait.jpg', { intern: true }),

  // ---------------------------------------------------------------- Handy (Hochformat-Kamera, Vollbild)
  sz('handy-ohrringe-business-person', 'ohrringe', 'business-person.png', { geraet: 'handy', format: 'hoch', crop: '540:960:209:0' }),
  sz('handy-kette-business-person', 'kette', 'business-person.png', { geraet: 'handy', format: 'hoch', crop: '540:960:209:0' }),
  sz('handy-ring-woman_hands', 'ring', 'woman_hands.jpg', { geraet: 'handy', format: 'hoch', crop: '360:640:140:180' }),
  sz('handy-armband-hand-woman-man', 'armband', 'hand-woman-man.jpg', { geraet: 'handy', format: 'hoch', crop: '180:317:120:0', einpassen: 'fuellen' }),

  // ---------------------------------------------------------------- Bewegung (Nachlauf, Stabilitaet)
  sz('bewegt-ring-paper_142', 'ring', 'paper_142.jpg', { video: 'bewegt', bewegt: true }),
  sz('bewegt-ohrringe-business-person', 'ohrringe', 'business-person.png', { video: 'bewegt', bewegt: true, crop: '958:539:0:0' }),

  // ---------------------------------------------------------------- Foto und ohne Kamera
  sz('foto-ohrringe-business-person', 'ohrringe', 'business-person.png', { ablauf: 'foto' }),
  sz('foto-ring-handy-woman_hands', 'ring', 'woman_hands.jpg', { ablauf: 'foto', geraet: 'handy' }),
  sz('ohne-kamera-kette-pose', 'kette', 'pose.jpg', { ablauf: 'ohne-kamera' }),
  sz('verweigert-armband-hand-woman-man', 'armband', 'hand-woman-man.jpg', { ablauf: 'verweigert', geraet: 'handy' }),
  // ohne Modell-JSON: Vorlage nach Titel
  sz('vorlage-ohrstecker-business-person', 'ohrringe', 'business-person.png', { produkt: '#p-vorlage' })
].map((s) => ({ ...s, erwartet: { anker: ANKER[s.art], mindestens: ANKER[s.art].length, ...(s.erwartet || {}) } }));

/** Filter: Art, Szenarioname, Teilstring oder regulaerer Ausdruck (Komma = oder). */
export function waehleSzenarien(nur, { intern = true } = {}) {
  let liste = SZENARIEN.filter((s) => intern || !s.intern);
  if (!nur) return liste;
  const teile = String(nur).split(',').map((t) => t.trim()).filter(Boolean);
  const passt = (s, t) => {
    if (ANKER[t]) return s.art === t;   // Art: genau (sonst passt "ring" auch auf "ohrringe")
    if (['kamera', 'foto', 'ohne-kamera', 'verweigert'].includes(t)) return s.ablauf === t;
    if (GERAETE[t]) return s.geraet === t;
    if (s.name === t || s.name.includes(t)) return true;
    try { return new RegExp(t).test(s.name); } catch { return false; }
  };
  return liste.filter((s) => teile.some((t) => passt(s, t)));
}
