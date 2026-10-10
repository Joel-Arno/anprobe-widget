// Vorlagen (Presets) im Stil von ARLISE: zarter Gold-Schmuck (18k PVD-vergoldeter
// Edelstahl) mit echten Suesswasserperlen. Jede Vorlage: { name, beschreibung, spec, varianten }.
// spec ist die Standardvariante (Gold); varianten listet weitere Metalle.

function mitVarianten(spec, metalle = ['gold', 'silber']) {
  const namen = { gold: 'Gold', silber: 'Silber', rosegold: 'Roségold', weissgold: 'Weißgold' };
  return metalle.map((m) => ({ name: namen[m], spec: { ...spec, metall: m, name: namen[m] } }));
}

function vorlage(name, beschreibung, spec, metalle) {
  const varianten = mitVarianten(spec, metalle);
  return { name, beschreibung, spec: varianten[0].spec, varianten };
}

export const VORLAGEN = {
  // ---------------------------------------------------------------- Ohrringe
  'perlentropfen-ohrringe': vorlage(
    'Perlentropfen-Ohrringe',
    'Goldene Huggie-Creole (12 mm) mit beweglichem Süßwasserperlen-Tropfen.',
    {
      art: 'ohrringe', metall: 'gold',
      ohrring: { typ: 'huggie', durchmesserMm: 12, staerkeMm: 2.1 },
      anhaenger: { typ: 'perle', groesseMm: 8 },
      perlen: { groesseMm: 7, form: 'tropfen', farbe: 'weiss' }
    }
  ),
  'basic-creolen': vorlage(
    'Basic Creolen',
    'Schlichte, runde Creolen, 18 mm, hochglanzpoliert.',
    { art: 'ohrringe', metall: 'gold', ohrring: { typ: 'creole', durchmesserMm: 18, staerkeMm: 2.2, profil: 'rund' } }
  ),
  'sonnen-ohrstecker': vorlage(
    'Sonnen-Ohrstecker',
    'Kleine Sonne mit facettierten Strahlen als Ohrstecker, 9 mm.',
    { art: 'ohrringe', metall: 'gold', ohrring: { typ: 'stecker' }, anhaenger: { typ: 'sonne', groesseMm: 9 } }
  ),
  'perlen-ohrstecker': vorlage(
    'Perlen-Ohrstecker',
    'Klassische Süßwasserperle (7 mm, Button) auf goldener Schale.',
    { art: 'ohrringe', metall: 'gold', ohrring: { typ: 'perlenstecker' }, perlen: { groesseMm: 7, form: 'button', farbe: 'weiss' } }
  ),
  'perlen-haenger': vorlage(
    'Perlen-Hänger',
    'Goldkugel-Stecker mit feinem Kettchen und tropfenförmiger Perle, ca. 30 mm.',
    {
      art: 'ohrringe', metall: 'gold',
      ohrring: { typ: 'haenger', laengeMm: 30 },
      anhaenger: { typ: 'perle', groesseMm: 8 },
      perlen: { groesseMm: 7, form: 'tropfen', farbe: 'creme' }
    }
  ),

  // ---------------------------------------------------------------- Armbänder
  'lunara-armband': vorlage(
    'Lunara Armband',
    'Feine Ankerkette mit Mond-Charm und kleiner Süßwasserperle, 17 cm + 4 cm Verlängerung.',
    {
      art: 'armband', metall: 'gold',
      armband: { typ: 'kette', laengeCm: 17, verlaengerungCm: 4 },
      kette: { typ: 'anker', staerkeMm: 1.3 },
      anhaenger: { typ: 'mond', groesseMm: 9 },
      perlen: { anordnung: 'einzeln', anzahl: 1, groesseMm: 4.5, form: 'tropfen', farbe: 'weiss' }
    }
  ),
  'perlen-armband': vorlage(
    'Perlen-Armband',
    'Süßwasserperlen (6 mm) auf Draht, getrennt durch goldene Zwischenperlen.',
    {
      art: 'armband', metall: 'gold',
      armband: { typ: 'perlen', laengeCm: 17, zwischenperlenMm: 2.5 },
      perlen: { groesseMm: 6, form: 'rund', farbe: 'weiss' }
    }
  ),
  'zartes-perlenarmband': vorlage(
    'Zartes Perlenarmband',
    'Hauchfeine Ankerkette mit einer einzelnen Süßwasserperle.',
    {
      art: 'armband', metall: 'gold',
      armband: { typ: 'kette', laengeCm: 17, verlaengerungCm: 3 },
      kette: { typ: 'anker', staerkeMm: 1.0 },
      perlen: { anordnung: 'stationen', anzahl: 1, groesseMm: 5, form: 'rund', farbe: 'weiss' }
    }
  ),

  // ---------------------------------------------------------------- Ketten
  'florea-kette': vorlage(
    'Florea Kette',
    'Feine Ankerkette (45 cm) mit Blütenanhänger und Perle in der Mitte.',
    {
      art: 'kette', metall: 'gold',
      kette: { typ: 'anker', staerkeMm: 1.2, laengeCm: 45 },
      anhaenger: { typ: 'blume', groesseMm: 12 },
      perlen: { groesseMm: 4, farbe: 'weiss' }
    }
  ),
  'perlenkette': vorlage(
    'Perlenkette',
    'Strang aus Süßwasserperlen (6 mm), 42 cm, mit goldenem Federring.',
    {
      art: 'kette', metall: 'gold',
      kette: { typ: 'perlenstrang', laengeCm: 42 },
      perlen: { groesseMm: 6, form: 'rund', farbe: 'weiss' }
    }
  ),
  'perlen-station-kette': vorlage(
    'Perlen-Station-Kette',
    'Feine Ankerkette mit fünf kleinen Süßwasserperlen im Abstand von 3,5 cm.',
    {
      art: 'kette', metall: 'gold',
      kette: { typ: 'anker', staerkeMm: 1.1, laengeCm: 45 },
      perlen: { anordnung: 'stationen', anzahl: 5, abstandMm: 35, groesseMm: 5, form: 'rund', farbe: 'weiss' }
    }
  ),
  'muenz-kette': vorlage(
    'Münz-Kette',
    'Gehämmerte Münze (13 mm) an einer Figarokette, 45 cm.',
    {
      art: 'kette', metall: 'gold',
      kette: { typ: 'figaro', staerkeMm: 1.6, laengeCm: 45 },
      anhaenger: { typ: 'muenze', groesseMm: 13 }
    }
  ),
  'herz-kette': vorlage(
    'Herz-Kette',
    'Gewölbtes Herz (11 mm) an feiner Erbskette, 45 cm.',
    {
      art: 'kette', metall: 'gold',
      kette: { typ: 'erbs', staerkeMm: 1.3, laengeCm: 45 },
      anhaenger: { typ: 'herz', groesseMm: 11 }
    },
    ['gold', 'silber', 'rosegold']
  ),

  // ---------------------------------------------------------------- Ringe
  'solitaer-ring': vorlage(
    'Solitär-Ring',
    'Zarte Schiene mit Zirkonia-Brillant (5 mm) in Sechs-Krappen-Fassung.',
    {
      art: 'ring', metall: 'gold',
      ring: { typ: 'solitaer', schieneMm: 1.8, profil: 'rund', innenDurchmesserMm: 17, krappen: 6 },
      stein: { art: 'zirkonia', groesseMm: 5, schliff: 'brillant' }
    },
    ['gold', 'silber', 'weissgold']
  ),
  'perlen-ring': vorlage(
    'Perlen-Ring',
    'Süßwasserperle (7 mm) auf zarter, halbrunder Schiene.',
    {
      art: 'ring', metall: 'gold',
      ring: { typ: 'perle', schieneMm: 1.6, profil: 'halbrund', innenDurchmesserMm: 17 },
      perlen: { groesseMm: 7, form: 'rund', farbe: 'weiss' }
    }
  ),
  'band-ring': vorlage(
    'Band-Ring',
    'Schlichter, hochglanzpolierter Bandring, 3 mm, halbrund.',
    { art: 'ring', metall: 'gold', ring: { typ: 'band', schieneMm: 3, profil: 'halbrund', innenDurchmesserMm: 17 } }
  ),
  'offener-perlenring': vorlage(
    'Offener Perlenring',
    'Offene Schiene mit zwei Süßwasserperlen an den Enden (Toi et Moi).',
    {
      art: 'ring', metall: 'gold',
      ring: { typ: 'offen', schieneMm: 1.5, profil: 'rund', innenDurchmesserMm: 17 },
      perlen: { groesseMm: 6, anzahl: 2, form: 'rund', farbe: 'weiss' }
    }
  )
};
