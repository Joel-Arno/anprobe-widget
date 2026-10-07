// Pruefaelle fuer test/render/pruefe.cjs.
// Jeder Fall: { lauf(page, { speichere, name }) -> Ergebnis }.

async function bildLauf(page, fall, datei, ctx, { rand = 1.6, zusatz = null } = {}) {
  const info = await page.evaluate((f) => window.__lauf(f), fall);
  if (zusatz) await page.evaluate(zusatz);
  const el = await page.$('#buehne canvas');
  await el.screenshot({ path: `${ctx.AUSGABE}/${datei}.png` });
  // Ausschnitte um die Schmuckstuecke
  let i = 0;
  for (const a of info.ausschnitte || []) {
    const m = Math.max(a.b, a.h) * (rand - 1) / 2;
    const clip = { x: Math.max(0, a.x - m), y: Math.max(0, a.y - m), width: a.b + 2 * m, height: a.h + 2 * m };
    if (clip.width < 4 || clip.height < 4) continue;
    await page.screenshot({ path: `${ctx.AUSGABE}/${datei}-nah${i++}.png`, clip, scale: 'device' });
  }
  delete info.ausschnitte;
  return info;
}

const F = {
  // Hintergrund farbtreu: Bild 1:1, ohne Schmuck
  pixel: {
    async lauf(page) {
      const erg = {};
      for (const bild of ['business-person.png', 'hand-woman-man.jpg']) {
        await page.evaluate((b) => window.__lauf({ bild: b, ohneSchmuck: true, frames: 3 }), bild);
        erg[bild] = await page.evaluate(() => window.__pixelVergleich());
      }
      // Auch mit Spiegelung und anderem Ausschnitt muss es laufen (nur Sichtpruefung)
      return erg;
    }
  },

  'ring-perle': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'perlen-ring', breite: 900, pixelRatio: 2, frames: 30 }, 'ring-perle', ctx)
  },
  'ring-solitaer': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'right_hands.jpg', art: 'ring', vorlage: 'solitaer-ring', breite: 900, pixelRatio: 2, frames: 30 }, 'ring-solitaer', ctx)
  },
  'ring-band-verdecker': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'band-ring', breite: 900, pixelRatio: 2, frames: 30, zeigeVerdecker: true }, 'ring-band-verdecker', ctx)
  },
  'ring-platzhalter': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', platzhalter: 'ring', breite: 900, pixelRatio: 2, frames: 30 }, 'ring-platzhalter', ctx)
  },
  'ring-mittel': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'perlen-ring', breite: 900, pixelRatio: 2, frames: 30, qualitaet: 'mittel' }, 'ring-mittel', ctx)
  },
  'ohr-gerade': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'business-person.png', art: 'ohrringe', vorlage: 'perlen-haenger', breite: 800, pixelRatio: 2, frames: 40 }, 'ohr-gerade', ctx)
  },
  'ohr-geneigt': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'business-person.png', art: 'ohrringe', vorlage: 'perlen-haenger', breite: 800, pixelRatio: 2, frames: 60, neigungGrad: 28 }, 'ohr-geneigt', ctx)
  },
  'ohr-platzhalter-geneigt': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'business-person.png', art: 'ohrringe', platzhalter: 'ohrhaenger', breite: 800, pixelRatio: 2, frames: 60, neigungGrad: -30 }, 'ohr-platzhalter-geneigt', ctx)
  },
  'ohr-mann': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'mediapipe_face_landmark_fullsize.png', art: 'ohrringe', vorlage: 'perlentropfen-ohrringe', breite: 800, pixelRatio: 2, frames: 40 }, 'ohr-mann', ctx)
  },
  kette: {
    lauf: (page, ctx) => bildLauf(page, { bild: 'business-person.png', art: 'kette', vorlage: 'florea-kette', breite: 800, pixelRatio: 2, frames: 40 }, 'kette', ctx, { rand: 1.1 })
  },
  'kette-pose': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'pose.jpg', art: 'kette', vorlage: 'perlenkette', breite: 800, pixelRatio: 2, frames: 40 }, 'kette-pose', ctx, { rand: 1.1 })
  },
  armband: {
    lauf: (page, ctx) => bildLauf(page, { bild: 'hand-woman-man.jpg', art: 'armband', vorlage: 'lunara-armband', breite: 900, pixelRatio: 2, frames: 40 }, 'armband', ctx)
  },
  'armband-verdecker': {
    lauf: (page, ctx) => bildLauf(page, { bild: 'hand-woman-man.jpg', art: 'armband', vorlage: 'perlen-armband', breite: 900, pixelRatio: 2, frames: 40, zeigeVerdecker: true }, 'armband-verdecker', ctx)
  },

  // Gold spiegelt Raumfarben: gleiche Szene, Bild warm bzw. kalt getoent
  raumfarbe: {
    async lauf(page) {
      const erg = {};
      for (const [name, toenung] of [['neutral', null], ['warm', '#ffb36b'], ['kalt', '#7fb0ff']]) {
        await page.evaluate((t) => window.__lauf({ bild: 'paper_142.jpg', art: 'ring', vorlage: 'band-ring', breite: 900, pixelRatio: 1, frames: 40, toenung: t }), toenung);
        erg[name] = await page.evaluate(() => window.__schmuckFarbe());
      }
      return erg;
    }
  },

  // Schatten an/aus: Differenz nahe am Ring
  schatten: {
    async lauf(page, ctx) {
      const a = await bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'band-ring', breite: 900, pixelRatio: 2, frames: 30 }, 'schatten-an', ctx, { rand: 2.2 });
      const b = await bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'band-ring', breite: 900, pixelRatio: 2, frames: 30, ohneSchatten: true }, 'schatten-aus', ctx, { rand: 2.2 });
      return { an: a.msProFrame, aus: b.msProFrame };
    }
  },

  // Dunkler Raum: Belichtung muss sinken
  dunkel: {
    async lauf(page, ctx) {
      const hell = await bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'perlen-ring', breite: 900, pixelRatio: 2, frames: 40 }, 'licht-hell', ctx);
      const dunkel = await bildLauf(page, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'perlen-ring', breite: 900, pixelRatio: 2, frames: 40, toenung: '#ffffff', helligkeit: 0.35 }, 'licht-dunkel', ctx);
      return { hell: [hell.belichtung, hell.lichtFaktor, hell.lichtFarbe], dunkel: [dunkel.belichtung, dunkel.lichtFaktor, dunkel.lichtFarbe] };
    }
  },

  // Pendel bei Bewegung: Serie von Bildern
  pendel: {
    async lauf(page, ctx) {
      const info = await page.evaluate(() => window.__lauf({ bild: 'business-person.png', art: 'ohrringe', vorlage: 'perlen-haenger', breite: 800, pixelRatio: 1, frames: 20, bewegung: { px: 50, hz: 1.2 }, ruheFrames: 0 }));
      const bilder = [];
      for (let i = 0; i < 6; i++) {
        const aus = await page.evaluate(() => window.__weiter(4));
        const a = aus.find((x) => x.key === 'ohrR') || aus[0];
        if (!a) break;
        const m = Math.max(a.b, a.h) * 0.5;
        await page.screenshot({ path: `${ctx.AUSGABE}/pendel-${i}.png`, clip: { x: a.x - m, y: a.y - m, width: a.b + 2 * m, height: a.h + 2 * m } });
        bilder.push(i);
      }
      return { bilder, ms: info.msProFrame };
    }
  },

  aufnahme: {
    async lauf(page, ctx) {
      await page.evaluate(() => window.__lauf({ bild: 'business-person.png', art: 'ohrringe', vorlage: 'perlentropfen-ohrringe', breite: 420, hoehe: 760, modus: 'cover', pixelRatio: 2, frames: 30 }));
      const el = await page.$('#buehne canvas');
      await el.screenshot({ path: `${ctx.AUSGABE}/aufnahme-anzeige.png` });
      const a = await page.evaluate(() => window.__aufnahme({ breite: 1200, wasserzeichen: 'ARLISE' }));
      ctx.speichere('aufnahme.jpg', Buffer.from(a.dataUrl.split(',')[1], 'base64'));
      await el.screenshot({ path: `${ctx.AUSGABE}/aufnahme-anzeige-danach.png` });
      delete a.dataUrl;
      return a;
    }
  },

  mehrfach: {
    async lauf(page) {
      return page.evaluate(() => window.__mehrfach(4, { bild: 'paper_142.jpg', art: 'ring', vorlage: 'perlen-ring', breite: 600 }));
    }
  }
};

module.exports = F;

module.exports['schatten-solitaer'] = {
  async lauf(page, ctx) {
    await bildLauf(page, { bild: 'right_hands.jpg', art: 'ring', vorlage: 'solitaer-ring', breite: 900, pixelRatio: 2, frames: 30 }, 'sol-an', ctx, { rand: 2.4 });
    await bildLauf(page, { bild: 'right_hands.jpg', art: 'ring', vorlage: 'solitaer-ring', breite: 900, pixelRatio: 2, frames: 30, ohneSchatten: true }, 'sol-aus', ctx, { rand: 2.4 });
    return 'ok';
  }
};

module.exports['ring-spiegel-handy'] = {
  lauf: (page, ctx) => bildLauf(page, { bild: 'right_hands.jpg', art: 'ring', vorlage: 'perlen-ring', breite: 390, hoehe: 700, modus: 'cover', spiegel: true, pixelRatio: 2, frames: 30, finger: 'mittel' }, 'ring-spiegel-handy', ctx, { rand: 2 })
};
module.exports['ohr-spiegel-handy'] = {
  lauf: (page, ctx) => bildLauf(page, { bild: 'business-person.png', art: 'ohrringe', vorlage: 'basic-creolen', breite: 390, hoehe: 760, modus: 'cover', spiegel: true, pixelRatio: 2, frames: 30 }, 'ohr-spiegel-handy', ctx, { rand: 2.2 })
};

module.exports['sol-mittel'] = {
  lauf: (page, ctx) => bildLauf(page, { bild: 'right_hands.jpg', art: 'ring', vorlage: 'solitaer-ring', breite: 900, pixelRatio: 2, frames: 30, qualitaet: 'mittel' }, 'sol-mittel', ctx, { rand: 2.4 })
};
