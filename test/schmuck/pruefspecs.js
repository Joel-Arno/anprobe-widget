// Zusaetzliche Specs, die alle Erzeuger und Varianten abdecken (nur fuer Pruefungen).
export const PRUEF_SPECS = {
  'p-panzer-kette': { art: 'kette', kette: { typ: 'panzer', staerkeMm: 2.5, laengeCm: 45 } },
  'p-paperclip-kette': { art: 'kette', kette: { typ: 'paperclip', staerkeMm: 2.2, laengeCm: 45 }, anhaenger: { typ: 'stern', groesseMm: 11 } },
  'p-schlangen-kette': { art: 'kette', kette: { typ: 'schlange', staerkeMm: 1.3, laengeCm: 42 }, anhaenger: { typ: 'tropfen', groesseMm: 12 } },
  'p-seil-kette': { art: 'kette', kette: { typ: 'seil', staerkeMm: 1.8, laengeCm: 50 }, anhaenger: { typ: 'muschel', groesseMm: 13 } },
  'p-kugel-kette': { art: 'kette', kette: { typ: 'kugel', staerkeMm: 1.5, laengeCm: 45 }, anhaenger: { typ: 'stein', groesseMm: 10, stein: { art: 'saphir', groesseMm: 6, schliff: 'oval' } }, stein: { art: 'saphir', groesseMm: 6, schliff: 'oval' } },
  'p-sonne-kette-60': { art: 'kette', kette: { typ: 'anker', staerkeMm: 1.2, laengeCm: 60 }, anhaenger: { typ: 'sonne', groesseMm: 14 } },
  'p-mond-kette-40': { art: 'kette', metall: 'silber', kette: { typ: 'erbs', staerkeMm: 1.2, laengeCm: 40 }, anhaenger: { typ: 'mond', groesseMm: 12 } },
  'p-barock-strang': { art: 'kette', kette: { typ: 'perlenstrang', laengeCm: 45 }, perlen: { groesseMm: 8, form: 'barock', farbe: 'champagner' } },
  'p-siegelring': { art: 'ring', ring: { typ: 'siegel', schieneMm: 2.5, profil: 'flach', innenDurchmesserMm: 17 } },
  'p-solitaer-4': { art: 'ring', metall: 'weissgold', ring: { typ: 'solitaer', schieneMm: 1.8, krappen: 4 }, stein: { art: 'diamant', groesseMm: 6 } },
  'p-kettenring': { art: 'ring', ring: { typ: 'kette', schieneMm: 1.5 }, kette: { typ: 'panzer' } },
  'p-flach-band': { art: 'ring', metall: 'rosegold', ring: { typ: 'band', schieneMm: 4, profil: 'flach' } },
  'p-tennis': { art: 'armband', metall: 'silber', armband: { typ: 'tennis', laengeCm: 18 }, stein: { art: 'zirkonia', groesseMm: 3 } },
  'p-reif': { art: 'armband', armband: { typ: 'reif', laengeCm: 19, breiteMm: 4 } },
  'p-panzer-armband': { art: 'armband', armband: { typ: 'kette', laengeCm: 18 }, kette: { typ: 'panzer', staerkeMm: 3.2 } },
  'p-stern-stecker': { art: 'ohrringe', ohrring: { typ: 'stecker' }, anhaenger: { typ: 'stern', groesseMm: 8 } },
  'p-stein-stecker': { art: 'ohrringe', ohrring: { typ: 'stecker' }, stein: { art: 'zirkonia', groesseMm: 5 } },
  'p-haken-haenger': { art: 'ohrringe', ohrring: { typ: 'haenger', befestigung: 'haken', laengeMm: 35 }, anhaenger: { typ: 'muenze', groesseMm: 11 } },
  'p-grosse-creole': { art: 'ohrringe', metall: 'silber', ohrring: { typ: 'creole', durchmesserMm: 35, staerkeMm: 3, profil: 'halbrund' } },
  'p-grau-perle': { art: 'ohrringe', ohrring: { typ: 'perlenstecker' }, perlen: { groesseMm: 9, farbe: 'grau', form: 'rund' } },
  'p-rose-barock': { art: 'ring', ring: { typ: 'perle' }, perlen: { groesseMm: 9, form: 'barock', farbe: 'rose' } }
};
