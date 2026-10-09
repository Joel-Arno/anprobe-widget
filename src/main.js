// Einstieg: findet alle [data-anprobe]-Elemente, setzt den Knopf
// "Virtuell anprobieren" (Shadow DOM) ein und oeffnet die Anprobe.
//
//   window.Anprobe = { init(wurzel?, konfig?), oeffne(ziel), konfig }
//
// Knopf anpassen: data-farbe="#7a5a2b" (Farbe), data-voll (gefuellt),
// data-breit (volle Breite), data-text="..." (Beschriftung),
// CSS: [data-anprobe]::part(knopf) { ... }

import { konfig, aktualisiereKonfig, debugLog } from './konfig.js';
import { leseProdukt, produktAusDaten } from './produkt.js';
import { AnprobeApp } from './app.js';
import { KNOPF_CSS } from './ui/stil.js';
import { SYMBOLE } from './ui/symbole.js';

const VERSION = '2.0.0';
const eingerichtet = new WeakSet();
let app = null;

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (z) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[z]));

/** Die App lebt in einem eigenen Shadow DOM am Ende von <body>. */
function holeApp() {
  if (app) return app;
  const host = document.createElement('div');
  host.setAttribute('data-anprobe-fenster', '');
  document.body.appendChild(host);
  const schatten = host.attachShadow({ mode: 'open' });
  const wurzel = document.createElement('div');
  schatten.appendChild(wurzel);
  app = new AnprobeApp(wurzel, { konfig });
  return app;
}

/** Knopf in ein [data-anprobe]-Element setzen. */
function richteEin(el) {
  if (eingerichtet.has(el)) return;
  eingerichtet.add(el);
  let produkt;
  try {
    produkt = leseProdukt(el);
  } catch (e) {
    console.warn('[anprobe] Produktdaten nicht lesbar:', e);
    return;
  }
  if (!produkt.art || !produkt.varianten.length) {
    debugLog('Kein Schmuck erkannt, kein Knopf:', produkt.titel);
    return;
  }
  if (el.dataset.farbe) el.style.setProperty('--anprobe-farbe', el.dataset.farbe);

  let wurzel = el.shadowRoot;
  if (!wurzel) {
    try {
      wurzel = el.attachShadow({ mode: 'open' });
    } catch {
      // Element erlaubt kein Shadow DOM: eigenen Halter anhaengen
      const halter = document.createElement('span');
      halter.style.display = 'block';
      for (const a of ['data-voll', 'data-breit']) if (el.hasAttribute(a)) halter.setAttribute(a, '');
      el.appendChild(halter);
      wurzel = halter.attachShadow({ mode: 'open' });
    }
  }
  const text = el.dataset.text || konfig.knopfText || 'Virtuell anprobieren';
  wurzel.innerHTML = `<style>${KNOPF_CSS}</style><button type="button" part="knopf" aria-haspopup="dialog">${SYMBOLE.funkeln}<span part="text">${esc(text)}</span></button>`;
  const knopf = wurzel.querySelector('button');

  // Kein Vorladen beim Ueberfahren oder Antippen: Die Erkennung (ca. 15-25 MB,
  // je nach Konfiguration von Drittservern) laedt erst nach dem Klick, waehrend
  // das Intro mit dem Datenschutzhinweis zu sehen ist (app.oeffne).
  knopf.addEventListener('click', () => {
    // neu lesen: das Theme kann die Daten inzwischen geaendert haben
    let p = produkt;
    try { p = leseProdukt(el); } catch { /* alte Daten nehmen */ }
    if (!p.art || !p.varianten.length) p = produkt;
    p.startVariante = gewaehlteVariante(el, p.varianten);
    holeApp().oeffne(p).catch((e) => console.error('[anprobe]', e));
  });
}

/**
 * Auf der Produktseite gewaehlte Variante: Auswahl im Warenkorb-Formular des
 * Themes, sonst data-variante am Block (Text der gewaehlten Option bzw.
 * gewaehlte Optionsknoepfe). Liefert den Index in varianten oder 0.
 */
function gewaehlteVariante(el, varianten) {
  if (!varianten || varianten.length < 2) return 0;
  const texte = [];
  try {
    const form = document.querySelector('form[action*="/cart/add"]');
    if (form) {
      const wahl = form.querySelector('select[name="id"] option:checked');
      if (wahl) texte.push(wahl.textContent);
      for (const r of form.querySelectorAll('input[type="radio"]:checked')) texte.push(r.value);
      for (const s of form.querySelectorAll('select:not([name="id"]) option:checked')) texte.push(s.value || s.textContent);
    }
  } catch { /* fremdes Markup */ }
  // Stand beim Seitenaufbau (Liquid), falls das Formular nichts verraet
  if (el.dataset.variante) texte.push(el.dataset.variante);
  const norm = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
  for (const t of texte.map(norm).filter(Boolean)) {
    // laengster enthaltener Name gewinnt ("Roségold" nicht als "Gold" lesen)
    let beste = -1;
    let laenge = 0;
    varianten.forEach((v, i) => {
      const n = norm(v && v.name);
      if (n && t.includes(n) && n.length > laenge) { beste = i; laenge = n.length; }
    });
    if (beste >= 0) return beste;
  }
  return 0;
}

/**
 * Sucht [data-anprobe] unterhalb von wurzel (Standard: document).
 * Ein Objekt als einziges Argument gilt als Konfiguration.
 */
function init(wurzel = document, extraKonfig) {
  if (wurzel && !(wurzel instanceof Node) && typeof wurzel === 'object') {
    extraKonfig = wurzel;
    wurzel = document;
  }
  if (extraKonfig || window.AnprobeKonfig) aktualisiereKonfig(extraKonfig);
  const basis = wurzel || document;
  if (basis instanceof Element && basis.matches('[data-anprobe]')) richteEin(basis);
  if (basis.querySelectorAll) for (const el of basis.querySelectorAll('[data-anprobe]')) richteEin(el);
}

/** Oeffnet die Anprobe fuer ein Element, einen Selektor oder ein Produktobjekt. */
async function oeffne(ziel) {
  let produkt;
  if (typeof ziel === 'string') ziel = document.querySelector(ziel);
  if (ziel instanceof Element) produkt = leseProdukt(ziel);
  else if (ziel && typeof ziel === 'object') produkt = ziel.varianten && ziel.varianten.length && ziel.varianten[0].spec ? ziel : produktAusDaten(ziel);
  if (!produkt || !produkt.art) throw new Error('Anprobe: kein Schmuckstück erkannt');
  return holeApp().oeffne(produkt);
}

function beobachte() {
  // Shopify-Theme-Editor: Abschnitte werden neu geladen
  document.addEventListener('shopify:section:load', (e) => init(e.target));
  // Dynamisch eingefuegte Produktbloecke (Schnellansicht, Variantenwechsel)
  if (typeof MutationObserver === 'function') {
    new MutationObserver((liste) => {
      for (const m of liste) {
        for (const n of m.addedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.matches('[data-anprobe]')) richteEin(n);
          else if (n.firstElementChild && n.querySelector('[data-anprobe]')) init(n);
        }
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
}

if (typeof window !== 'undefined' && !(window.Anprobe && window.Anprobe.version)) {
  window.Anprobe = { init, oeffne, konfig, version: VERSION };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => init(), { once: true });
  else init();
  beobachte();
}

export { init, oeffne, konfig };
