// Von Hand abgelesene Soll-Punkte (Bildkoordinaten des Originalbilds).
// ohr: { L: [x, y], R: [x, y] } = Ohrlaeppchen-Stichpunkt auf der Bildseite
// links/rechts; gewicht < 1 fuer unsichere Punkte.
// drossel: [x, y] = Drosselgrube (vordere Halsbasis, Mitte).
// portrait.jpg nur intern.
const KALIBRIERUNG = [
  { bild: 'mediapipe_face_landmark_fullsize.png', art: 'kette', ohr: { L: [478, 1470], R: [1785, 1445] } },
  { bild: 'business-person.png', art: 'kette', ohr: { L: [353, 318] }, drossel: [495, 560] },
  { bild: 'portrait.jpg', art: 'kette', ohr: { L: [300, 234], R: [505, 233] }, drossel: [385, 400] },
  { bild: 'man-woman-okay.jpg', art: 'kette', crop: [330, 0, 310, 300], ohr: { R: [478, 124], L: [399, 136, 0.5] } },
  { bild: 'face.png', art: 'kette', ohr: { L: [47, 160], R: [194, 164] } },
  { bild: 'pose.jpg', art: 'kette', drossel: [490, 314] },
  { bild: 'woman_hands.jpg', art: 'kette' },
  { bild: 'man-woman-okay.jpg', art: 'kette' },
  { bild: 'male_full_height_hands.jpg', art: 'kette' }
];
module.exports = { KALIBRIERUNG };
