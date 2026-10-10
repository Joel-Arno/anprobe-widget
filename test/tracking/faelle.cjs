// Prueffaelle fuer pruefung.cjs. soll: Soll-Punkte in Bildkoordinaten
// (Ohrlaeppchen-Stichpunkt bzw. Drosselgrube), von Hand aus den Bildern
// abgelesen. portrait.jpg: nur interne Pruefung.
const HAND = [
  'right_hands.jpg', 'left_hands.jpg', 'woman_hands.jpg', 'hand-woman-man.jpg',
  'paper_103.jpg', 'paper_119.jpg', 'paper_142.jpg', 'paper_143.jpg', 'paper_146.jpg',
  'paper_158.jpg', 'paper_165.jpg', 'paper_166.jpg', 'paper_170.jpg', 'paper_176.jpg',
  'fist.jpg', 'thumb_up.jpg', 'pointing_up.jpg', 'victory.jpg', 'business-person.png', 'man-woman-okay.jpg'
];

const OHREN = [
  { bild: 'mediapipe_face_landmark_fullsize.png', art: 'ohrringe', soll: [[478, 1470], [1785, 1445]], massstab: 0.5 },
  { bild: 'business-person.png', art: 'ohrringe', soll: [[353, 318]] },
  { bild: 'man-woman-okay.jpg', art: 'ohrringe', crop: [330, 0, 310, 300], soll: [[478, 124], [399, 136]], name: 'man-woman-okay_frau_ohrringe', massstab: 3 },
  { bild: 'portrait.jpg', art: 'ohrringe', soll: [[300, 234], [505, 233]] },
  { bild: 'face.png', art: 'ohrringe', massstab: 3 },
  { bild: 'woman_hands.jpg', art: 'ohrringe' }
];

const KETTE = [
  { bild: 'business-person.png', art: 'kette' },
  { bild: 'pose.jpg', art: 'kette' },
  { bild: 'portrait.jpg', art: 'kette' },
  { bild: 'woman_hands.jpg', art: 'kette' },
  { bild: 'man-woman-okay.jpg', art: 'kette' },
  { bild: 'male_full_height_hands.jpg', art: 'kette' }
];

const FAELLE = [
  ...HAND.map((bild) => ({ bild, art: 'ring' })),
  ...['right_hands.jpg', 'woman_hands.jpg', 'paper_165.jpg', 'fist.jpg', 'hand-woman-man.jpg'].map((bild) => ({ bild, art: 'armband' })),
  { bild: 'right_hands.jpg', art: 'ring', spiegel: true },
  { bild: 'paper_103.jpg', art: 'ring', spiegel: true },
  ...OHREN,
  { bild: 'business-person.png', art: 'ohrringe', spiegel: true, soll: [[353, 318]] },
  ...KETTE,
  { bild: 'business-person.png', art: 'kette', spiegel: true }
];

module.exports = { FAELLE };
