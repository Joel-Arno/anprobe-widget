// Erzeugt demo/index.html (Demo-Produktseite) aus den Vorlagen in src/schmuck.
// Das Modell-JSON je Produkt entsteht wie im Editor (felder.js: alsJson), damit die
// Demo genau das Format zeigt, das ins Shopify-Metafeld anprobe.modell gehoert.
//   node test/editor/demo-seite.mjs
// Produktbilder vorher mit test/editor/produktbilder.cjs rendern (demo/bilder/*.webp).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { VORLAGEN } from '../../src/schmuck/index.js';
import { vollstaendig, alsJson } from '../../editor/felder.js';

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const esc = (t) => String(t ?? '').replace(/[&<>"]/g, (z) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[z]));

// Produkte der Demo: Vorlage, Anzeigename, Preis, Kurztext, Material
const PRODUKTE = {
  ohrringe: {
    titel: 'Ohrringe',
    liste: [
      { id: 'perlentropfen-ohrringe', name: 'Perlentropfen Huggies', preis: '49,90 €', typ: 'Ohrringe' },
      { id: 'perlen-ohrstecker', name: 'Perlen-Ohrstecker', preis: '34,90 €', typ: 'Ohrstecker' },
      { id: 'basic-creolen', name: 'Basic Creolen', preis: '39,90 €', typ: 'Creolen' }
    ]
  },
  kette: {
    titel: 'Ketten',
    liste: [
      { id: 'florea-kette', name: 'Florea Kette', preis: '54,90 €', typ: 'Halsketten' },
      { id: 'perlenkette', name: 'Perlenkette', preis: '79,90 €', typ: 'Halsketten' },
      { id: 'herz-kette', name: 'Herz-Kette', preis: '44,90 €', typ: 'Halsketten' }
    ]
  },
  armband: {
    titel: 'Armbänder',
    liste: [
      { id: 'lunara-armband', name: 'Lunara Armband', preis: '44,90 €', typ: 'Armbänder' },
      { id: 'perlen-armband', name: 'Perlen-Armband', preis: '49,90 €', typ: 'Armbänder' },
      { id: 'zartes-perlenarmband', name: 'Zartes Perlenarmband', preis: '34,90 €', typ: 'Armbänder' }
    ]
  },
  ring: {
    titel: 'Ringe',
    liste: [
      { id: 'solitaer-ring', name: 'Solitär-Ring', preis: '39,90 €', typ: 'Ringe' },
      { id: 'perlen-ring', name: 'Perlen-Ring', preis: '42,90 €', typ: 'Ringe' },
      { id: 'offener-perlenring', name: 'Toi et Moi Perlenring', preis: '46,90 €', typ: 'Ringe' }
    ]
  }
};
const HAUPT = { id: 'perlentropfen-ohrringe', art: 'ohrringe' };

function varianten(id) {
  return VORLAGEN[id].varianten.map((v) => vollstaendig({ ...v.spec, name: v.name }).spec);
}
const hatSilber = (id) => VORLAGEN[id].varianten.some((v) => v.spec.metall === 'silber');
const bild = (id, metall = 'gold') => `bilder/${id}${metall === 'gold' ? '' : '-' + metall}.webp`;
const modellJson = (id) => alsJson(varianten(id), { zeilenBreite: 110 }).split('\n').map((z) => '      ' + z).join('\n');

function anprobe(p, art, { text = null, voll = false } = {}) {
  return `<div class="anprobe" data-anprobe data-titel="${esc(p.name)}" data-preis="${esc(p.preis)}" data-bild="${bild(p.id)}"
         data-art="${art}" data-typ="${esc(p.typ)}" data-breit${voll ? ' data-voll' : ''}${text ? ` data-text="${esc(text)}"` : ''}>
      <script type="application/json" data-anprobe-modell>
${modellJson(p.id)}
      </script>
    </div>`;
}

function karte(p, art) {
  const silber = hatSilber(p.id);
  return `
  <article class="karte">
    <div class="karte-bild">
      <img src="${bild(p.id)}" alt="${esc(p.name)} in Gold" width="1000" height="1000" loading="lazy">
      ${silber ? `<img class="zweit" src="${bild(p.id, 'silber')}" alt="" width="1000" height="1000" loading="lazy" aria-hidden="true">` : ''}
    </div>
    <div class="karte-text">
      <h3>${esc(p.name)}</h3>
      <p class="karte-info">${esc(VORLAGEN[p.id].beschreibung)}</p>
      <p class="preis">${esc(p.preis)}</p>
    </div>
    ${anprobe(p, art, { text: 'Anprobieren' })}
  </article>`;
}

const haupt = PRODUKTE[HAUPT.art].liste.find((p) => p.id === HAUPT.id);
const navi = Object.entries(PRODUKTE).map(([art, g]) => `<a href="#${art}">${esc(g.titel)}</a>`).join('');
const abschnitte = Object.entries(PRODUKTE).map(([art, g]) => `
<section class="kollektion" id="${art}" aria-labelledby="t-${art}">
  <div class="kollektion-kopf">
    <h2 id="t-${art}">${esc(g.titel)}</h2>
    <span>${g.liste.length} Stücke</span>
  </div>
  <div class="raster">${g.liste.map((p) => karte(p, art)).join('')}
  </div>
</section>`).join('');

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Demo: handgefertigter Schmuck virtuell anprobieren – live mit der Kamera, in echtem 3D.">
<title>Demo – Schmuck virtuell anprobieren</title>
<link rel="icon" href="data:,">
<!-- Diese Datei wird von test/editor/demo-seite.mjs erzeugt. -->
<style>
  :root {
    --elfenbein: #FBF8F3; --schwarz: #1E1B18; --gold: #B8955A; --linie: #E8E1D6; --leise: #6F665D; --flaeche: #F4EEE5;
    --serif: "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Charter, "Bitstream Charter", Georgia, serif;
    --anprobe-schrift-titel: var(--serif);
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0; background: var(--elfenbein); color: var(--schwarz);
    font: 15px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; }
  img { display: block; max-width: 100%; height: auto; }
  .leiste { padding: 9px 16px; text-align: center; font-size: 11px; letter-spacing: .18em; text-transform: uppercase; background: var(--schwarz); color: var(--elfenbein); }
  header.kopf { position: sticky; top: 0; z-index: 5; background: rgba(251, 248, 243, .92); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border-bottom: 1px solid var(--linie); }
  .kopf-innen { max-width: 1240px; margin: 0 auto; padding: 18px 24px 14px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .marke { font-family: var(--serif); font-size: 26px; letter-spacing: .5em; margin-right: -.5em; text-decoration: none; text-transform: uppercase; }
  nav.navi { display: flex; gap: 28px; font-size: 11.5px; letter-spacing: .18em; text-transform: uppercase; }
  nav.navi a { text-decoration: none; color: var(--leise); padding: 4px 0; border-bottom: 1px solid transparent; transition: color .25s, border-color .25s; }
  nav.navi a:hover { color: var(--schwarz); border-bottom-color: var(--gold); }

  main { max-width: 1240px; margin: 0 auto; padding: 0 24px 80px; }

  /* Produktseite */
  .produkt { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); gap: 56px; padding: 44px 0 64px; border-bottom: 1px solid var(--linie); }
  .galerie { display: grid; grid-template-columns: 72px minmax(0, 1fr); gap: 14px; align-items: start; }
  .galerie-liste { display: flex; flex-direction: column; gap: 10px; }
  .galerie-liste button { padding: 0; border: 1px solid transparent; background: none; cursor: pointer; transition: border-color .25s; }
  .galerie-liste button[aria-pressed="true"] { border-color: var(--schwarz); }
  .galerie-gross { position: relative; background: var(--flaeche); }
  .galerie-gross img { width: 100%; aspect-ratio: 1; object-fit: cover; transition: opacity .35s ease; }
  .galerie-gross .marke-3d { position: absolute; left: 16px; bottom: 16px; font-size: 10.5px; letter-spacing: .16em; text-transform: uppercase; color: var(--leise); background: rgba(251, 248, 243, .8); padding: 6px 10px; border-radius: 999px; }
  .info { padding-top: 12px; max-width: 460px; }
  .info .kategorie { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--leise); margin: 0 0 14px; }
  .info h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(30px, 3.6vw, 42px); line-height: 1.15; margin: 0 0 12px; }
  .info .preis-gross { font-size: 18px; margin: 0 0 4px; }
  .info .steuer { font-size: 12px; color: var(--leise); margin: 0 0 28px; }
  .info .text { color: #4A433D; margin: 0 0 28px; }
  .wahl-titel { font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: var(--leise); margin: 0 0 10px; }
  .wahl-titel b { color: var(--schwarz); font-weight: 500; letter-spacing: .08em; text-transform: none; font-size: 13px; margin-left: 6px; }
  .swatches { display: flex; gap: 10px; margin-bottom: 28px; }
  .swatch { width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--linie); padding: 3px; background: none; cursor: pointer; transition: border-color .25s; }
  .swatch span { display: block; width: 100%; height: 100%; border-radius: 50%; background: radial-gradient(circle at 32% 28%, rgba(255,255,255,.85) 0 12%, transparent 42%), radial-gradient(circle at 70% 78%, rgba(0,0,0,.2), transparent 55%), var(--f); }
  .swatch[aria-pressed="true"] { border-color: var(--schwarz); }
  .knoepfe { display: flex; flex-direction: column; gap: 10px; }
  .knoepfe .anprobe { margin: 0; }
  .warenkorb { height: 50px; border: 1px solid var(--schwarz); background: transparent; color: var(--schwarz); font: inherit; font-size: 12px; font-weight: 500; letter-spacing: .16em; text-transform: uppercase; cursor: pointer; transition: background .25s, color .25s; }
  .warenkorb:hover { background: var(--schwarz); color: var(--elfenbein); }
  .demo-hinweis { font-size: 12px; color: var(--leise); min-height: 1.4em; margin: 6px 0 0; }
  .details { margin-top: 30px; border-top: 1px solid var(--linie); }
  .details details { border-bottom: 1px solid var(--linie); }
  .details summary { list-style: none; cursor: pointer; padding: 15px 0; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; display: flex; justify-content: space-between; }
  .details summary::-webkit-details-marker { display: none; }
  .details summary::after { content: "+"; font-size: 16px; line-height: 1; color: var(--leise); }
  .details details[open] summary::after { content: "–"; }
  .details details p { margin: 0 0 16px; color: #4A433D; font-size: 14px; }

  .anprobe-erklaerung { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; padding: 52px 0; border-bottom: 1px solid var(--linie); }
  .anprobe-erklaerung div { padding-top: 16px; border-top: 1px solid var(--gold); }
  .anprobe-erklaerung h3 { font-family: var(--serif); font-weight: 400; font-size: 21px; margin: 0 0 6px; }
  .anprobe-erklaerung p { margin: 0; color: var(--leise); font-size: 14px; }

  /* Kollektion */
  .kollektion { padding-top: 56px; scroll-margin-top: 110px; }
  .kollektion-kopf { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 22px; }
  .kollektion h2 { font-family: var(--serif); font-weight: 400; font-size: 30px; margin: 0; }
  .kollektion-kopf span { font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: var(--leise); }
  .raster { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 36px 28px; }
  .karte { display: flex; flex-direction: column; }
  .karte-bild { position: relative; background: var(--flaeche); overflow: hidden; }
  .karte-bild img { width: 100%; aspect-ratio: 1; object-fit: cover; transition: opacity .45s ease, transform .9s cubic-bezier(.2,.7,.2,1); }
  .karte-bild .zweit { position: absolute; inset: 0; opacity: 0; }
  .karte:hover .karte-bild .zweit { opacity: 1; }
  .karte:hover .karte-bild img { transform: scale(1.025); }
  .karte-text { padding: 16px 0 2px; flex: 1; }
  .karte h3 { font-family: var(--serif); font-weight: 400; font-size: 19px; margin: 0 0 4px; }
  .karte-info { margin: 0 0 8px; font-size: 13px; color: var(--leise); line-height: 1.5; }
  .preis { margin: 0; font-size: 14px; }
  .karte .anprobe { margin: 14px 0 0; }

  footer { border-top: 1px solid var(--linie); padding: 36px 24px 48px; text-align: center; font-size: 12px; color: var(--leise); }
  footer p { margin: 4px 0; }

  @media (max-width: 900px) {
    .produkt { grid-template-columns: minmax(0, 1fr); gap: 28px; padding-top: 20px; }
    .galerie { grid-template-columns: minmax(0, 1fr); }
    .galerie-liste { order: 2; flex-direction: row; }
    .galerie-liste button { width: 64px; }
    .anprobe-erklaerung { grid-template-columns: minmax(0, 1fr); gap: 22px; padding: 36px 0; }
    .raster { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 14px; }
  }
  @media (max-width: 560px) {
    main { padding: 0 16px 60px; }
    .kopf-innen { padding: 14px 16px 10px; gap: 8px; }
    .marke { font-size: 22px; }
    nav.navi { gap: 16px; font-size: 10.5px; letter-spacing: .14em; }
    .karte h3 { font-size: 16px; }
    .karte-info { display: none; }
    .kollektion h2 { font-size: 25px; }
  }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; } }
</style>
</head>
<body>
<div class="leiste">Neu: Schmuck virtuell anprobieren</div>
<header class="kopf">
  <div class="kopf-innen">
    <a class="marke" href="#">Demo</a>
    <nav class="navi" aria-label="Kategorien">${navi}</nav>
  </div>
</header>

<main>
  <section class="produkt" aria-labelledby="produkt-titel">
    <div class="galerie">
      <div class="galerie-liste" aria-label="Bilder">
        <button type="button" aria-pressed="true" data-bild="${bild(haupt.id)}" data-metall="gold" aria-label="Gold"><img src="${bild(haupt.id)}" alt="" width="1000" height="1000"></button>
        <button type="button" aria-pressed="false" data-bild="${bild(haupt.id, 'silber')}" data-metall="silber" aria-label="Silber"><img src="${bild(haupt.id, 'silber')}" alt="" width="1000" height="1000" loading="lazy"></button>
      </div>
      <div class="galerie-gross">
        <img id="hauptbild" src="${bild(haupt.id)}" alt="${esc(haupt.name)}" width="1000" height="1000">
        <span class="marke-3d">3D · in echt anprobierbar</span>
      </div>
    </div>
    <div class="info">
      <p class="kategorie">Ohrringe · Süßwasserperle</p>
      <h1 id="produkt-titel">${esc(haupt.name)}</h1>
      <p class="preis-gross">${esc(haupt.preis)}</p>
      <p class="steuer">inkl. MwSt., zzgl. Versand</p>
      <p class="text">Zarte Huggie-Creolen aus 18 Karat PVD-vergoldetem Edelstahl mit beweglichem Tropfen aus echter Süßwasserperle. Jede Perle ist ein Unikat in Form und Schimmer.</p>
      <p class="wahl-titel">Farbe <b id="metall-name">Gold</b></p>
      <div class="swatches" role="group" aria-label="Farbe">
        <button type="button" class="swatch" aria-pressed="true" data-metall="gold" aria-label="Gold"><span style="--f:#CC9C5A"></span></button>
        <button type="button" class="swatch" aria-pressed="false" data-metall="silber" aria-label="Silber"><span style="--f:#C9C7C2"></span></button>
      </div>
      <div class="knoepfe">
        ${anprobe(haupt, HAUPT.art, { voll: true })}
        <button type="button" class="warenkorb">In den Warenkorb</button>
        <p class="demo-hinweis" aria-live="polite"></p>
      </div>
      <div class="details">
        <details open><summary>Material &amp; Pflege</summary><p>18k PVD-vergoldeter Edelstahl, wasserfest und hautfreundlich. Echte Süßwasserperle. Nach dem Tragen mit einem weichen Tuch abwischen.</p></details>
        <details><summary>Maße</summary><p>Creole 12 mm, Perle ca. 7 mm, Gesamtlänge ca. 22 mm.</p></details>
        <details><summary>Virtuelle Anprobe</summary><p>Die Kamera wird nur in deinem Browser ausgewertet – es werden keine Bilder übertragen oder gespeichert.</p></details>
      </div>
    </div>
  </section>

  <section class="anprobe-erklaerung" aria-label="So funktioniert die Anprobe">
    <div><h3>Live in 3D</h3><p>Jedes Stück ist ein echtes 3D-Modell: Gold spiegelt das Licht deines Raums, Perlen schimmern.</p></div>
    <div><h3>Sitzt, wo es soll</h3><p>Ohrringe am Ohrläppchen, Ketten am Hals, Ringe am Finger – ruhig verfolgt, auch in Bewegung.</p></div>
    <div><h3>Privat</h3><p>Alles passiert auf deinem Gerät. Ein Foto speicherst nur du, wenn du möchtest.</p></div>
  </section>
${abschnitte}
</main>

<footer>
  <p>Demo-Seite der virtuellen Anprobe. Produkte, Preise und Bilder sind Beispiele.</p>
  <p>Die Produktbilder sind aus denselben 3D-Modellen gerendert, die in der Anprobe zu sehen sind.</p>
</footer>

<script>
  // Farbwahl: Bild wechseln und die gewaehlte Variante in der Anprobe zuerst zeigen
  (function () {
    var bild = document.getElementById('hauptbild');
    var name = document.getElementById('metall-name');
    var modell = document.querySelector('.knoepfe [data-anprobe-modell]');
    var original = JSON.parse(modell.textContent);
    function waehle(metall) {
      document.querySelectorAll('[data-metall]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.metall === metall)); });
      var knopf = document.querySelector('.galerie-liste [data-metall="' + metall + '"]');
      if (knopf) bild.src = knopf.dataset.bild;
      name.textContent = metall === 'gold' ? 'Gold' : 'Silber';
      var liste = original.slice().sort(function (a, b) { return (b.metall === metall) - (a.metall === metall); });
      modell.textContent = JSON.stringify(liste);
    }
    document.querySelectorAll('.swatch, .galerie-liste button').forEach(function (b) {
      b.addEventListener('click', function () { waehle(b.dataset.metall); });
    });
    document.querySelector('.warenkorb').addEventListener('click', function () {
      document.querySelector('.demo-hinweis').textContent = 'Nur eine Demo – hier gibt es keinen Warenkorb.';
    });
  })();
</script>
<script type="module" src="../dist/anprobe.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(WURZEL, 'demo', 'index.html'), html);
console.log('demo/index.html geschrieben,', Math.round(html.length / 1024), 'KB');
