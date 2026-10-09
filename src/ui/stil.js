// CSS fuer Knopf (KNOPF_CSS) und Anprobe-Fenster (FENSTER_CSS), beides im Shadow DOM.
// Farben laut Spezifikation: Elfenbein #FBF8F3, warmes Schwarz #1E1B18,
// Champagner-Gold #B8955A, feine Linien #E8E1D6. Schrift wird vom Shop geerbt.

export const KNOPF_CSS = `
/* !important im Shadow DOM schlaegt normale Theme-Regeln wie div:empty { display: none } */
:host { display: block !important; margin: 12px 0; --anprobe-farbe: #1E1B18; }
:host([hidden]) { display: none !important; }
button {
  all: unset; box-sizing: border-box; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  min-height: 48px; padding: 0 22px; max-width: 100%; text-align: center; line-height: 1.3;
  font: inherit; font-size: 12px; font-weight: 500; letter-spacing: .16em; text-transform: uppercase;
  color: var(--anprobe-farbe); background: transparent;
  border: 1px solid var(--anprobe-farbe); border-radius: 2px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color .26s ease, color .26s ease, border-color .26s ease;
}
:host([data-breit]) button, :host([data-voll]) button { width: 100%; }
button:hover { background: var(--anprobe-farbe); color: #FBF8F3; }
:host([data-voll]) button { background: var(--anprobe-farbe); color: #FBF8F3; }
:host([data-voll]) button:hover { background: color-mix(in srgb, var(--anprobe-farbe) 86%, #fff); }
button:focus-visible { outline: 1px solid #B8955A; outline-offset: 3px; }
.sym { flex: none; width: 18px; height: 18px; margin-top: -1px; }
.sym path:last-child { transform-origin: 18.5px 5.5px; }
button:hover .sym path:last-child { animation: funkeln 1.1s ease-in-out; }
@keyframes funkeln { 0%, 100% { transform: scale(1); opacity: 1; } 45% { transform: scale(.4) rotate(45deg); opacity: .4; } }
/* App-Skript laedt noch (langsame Verbindung): Funkeln laeuft weiter */
button[aria-busy="true"] { cursor: progress; }
button[aria-busy="true"] .sym path:last-child { animation: funkeln 1.1s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { button, button .sym path { transition: none; animation: none !important; } }
`;

export const FENSTER_CSS = `
.anprobe, .anprobe * , .anprobe *::before, .anprobe *::after { box-sizing: border-box; }
.anprobe {
  --a-elfenbein: #FBF8F3; --a-tinte: #1E1B18; --a-gold: #B8955A; --a-linie: #E8E1D6;
  --a-tinte-2: rgba(30, 27, 24, .68); --a-tinte-3: rgba(30, 27, 24, .64);
  --a-gold-text: #8C6D3A;
  --a-champagner: #F3ECE1; --a-gold-hell: #D9C29A;
  --a-titel: var(--anprobe-schrift-titel, inherit);
  --a-dauer: 260ms; --a-kurve: cubic-bezier(.22, .61, .36, 1);
  --a-glas: rgba(251, 248, 243, .84); --a-glas-rand: rgba(255, 255, 255, .55);
  --a-oben: env(safe-area-inset-top, 0px); --a-unten: env(safe-area-inset-bottom, 0px);
  position: fixed; inset: 0; z-index: 2147483000;
  display: flex; align-items: center; justify-content: center;
  font-family: inherit; font-size: 15px; line-height: 1.5; color: var(--a-tinte);
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%; text-align: left; letter-spacing: normal;
  opacity: 0; transition: opacity var(--a-dauer) var(--a-kurve);
}
.anprobe.offen { opacity: 1; }
.anprobe[hidden] { display: none; }
.a-schleier {
  position: absolute; inset: 0; background: rgba(30, 27, 24, .46);
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
}
.a-fenster {
  position: relative; overflow: hidden; isolation: isolate;
  width: min(1040px, calc(100vw - 64px)); height: min(700px, calc(100vh - 64px));
  background: var(--a-elfenbein); border-radius: 4px;
  box-shadow: 0 40px 100px -20px rgba(30, 27, 24, .45), 0 0 0 1px rgba(30, 27, 24, .04);
  transform: translateY(12px) scale(.985); transition: transform 380ms var(--a-kurve);
}
.anprobe.offen .a-fenster { transform: none; }

/* ---------- Grundbausteine */
.a-label {
  display: block; font-size: 11px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase;
  color: var(--a-gold-text); margin: 0 0 14px;
}
.a-titel {
  font-family: var(--a-titel); font-weight: 400; font-size: 32px; line-height: 1.15;
  letter-spacing: .005em; margin: 0 0 18px; color: var(--a-tinte);
}
.a-text { margin: 0; color: var(--a-tinte-2); font-size: 15px; }
.a-klein { font-size: 12.5px; color: var(--a-tinte-3); line-height: 1.5; }
button { font: inherit; color: inherit; }
.a-knopf {
  appearance: none; border: 1px solid var(--a-tinte); border-radius: 2px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  min-height: 50px; padding: 0 28px; background: var(--a-tinte); color: var(--a-elfenbein);
  font-size: 12px; font-weight: 500; letter-spacing: .18em; text-transform: uppercase; white-space: nowrap;
  transition: background-color var(--a-dauer) ease, color var(--a-dauer) ease, border-color var(--a-dauer) ease, opacity var(--a-dauer) ease;
  -webkit-tap-highlight-color: transparent;
}
.a-knopf:hover { background: #38332d; border-color: #38332d; }
.a-knopf .sym { width: 18px; height: 18px; }
.a-knopf.zweit { background: transparent; color: var(--a-tinte); border-color: rgba(30, 27, 24, .35); }
.a-knopf.zweit:hover { border-color: var(--a-tinte); background: rgba(30, 27, 24, .03); }
.a-textknopf {
  appearance: none; background: none; border: 0; padding: 6px 2px; cursor: pointer;
  font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: var(--a-tinte-2);
  text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 5px; text-decoration-color: var(--a-linie);
  transition: color var(--a-dauer) ease, text-decoration-color var(--a-dauer) ease;
}
.a-textknopf:hover { color: var(--a-tinte); text-decoration-color: var(--a-gold); }
.anprobe :focus { outline: none; }
.anprobe :focus-visible { outline: 1px solid var(--a-gold); outline-offset: 3px; }
.a-rund {
  appearance: none; cursor: pointer; flex: none; width: 44px; height: 44px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center; padding: 0;
  background: transparent; border: 1px solid transparent; color: var(--a-tinte);
  transition: background-color var(--a-dauer) ease, opacity var(--a-dauer) ease, transform var(--a-dauer) var(--a-kurve);
  -webkit-tap-highlight-color: transparent;
}
.a-rund:hover { background: rgba(30, 27, 24, .05); }
.a-rund:active { transform: scale(.94); }
.glas {
  background: var(--a-glas); border: 1px solid var(--a-glas-rand);
  -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
  box-shadow: 0 10px 34px -8px rgba(30, 27, 24, .22);
}
.a-unsichtbar { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

/* ---------- Ebenen und Zustaende */
.a-buehne { position: absolute; inset: 0; background: #2a2622; overflow: hidden; touch-action: none; user-select: none; -webkit-user-select: none; transition: background-color 420ms var(--a-kurve); }
.anprobe:not([data-zustand="live"]) .a-buehne { background: var(--a-elfenbein); }
.a-video, .a-canvas, .a-fotogrund { position: absolute; inset: 0; width: 100%; height: 100%; }
.a-video { object-fit: cover; }
.a-video.gespiegelt { transform: scaleX(-1); }
.a-fotogrund { background-size: cover; background-position: center; filter: blur(34px) saturate(.8); transform: scale(1.15); opacity: 0; }
.anprobe[data-zustand="foto"] .a-fotogrund { opacity: .45; }
.a-canvas { opacity: 0; transition: opacity 420ms var(--a-kurve); cursor: grab; }
.a-canvas:active { cursor: grabbing; }
.anprobe[data-zustand="live"] .a-canvas, .anprobe[data-zustand="foto"] .a-canvas, .anprobe[data-zustand="ergebnis"] .a-canvas { opacity: 1; }
.a-blitz { position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; }
.a-blitz.an { animation: blitz 420ms ease-out; }
@keyframes blitz { 0% { opacity: .85; } 100% { opacity: 0; } }

.a-seite {
  position: absolute; inset: 0; display: flex; background: var(--a-elfenbein);
  opacity: 0; visibility: hidden; pointer-events: none;
  transition: opacity var(--a-dauer) var(--a-kurve), visibility 0s linear var(--a-dauer);
}
.anprobe[data-zustand="intro"] .a-intro,
.anprobe[data-zustand="laden"] .a-laden,
.anprobe[data-zustand="ergebnis"] .a-ergebnis,
.anprobe[data-zustand="fehler"] .a-fehler { opacity: 1; visibility: visible; pointer-events: auto; transition-delay: 0s; }
.a-seite > .a-inhalt { transform: translateY(8px); transition: transform 420ms var(--a-kurve); }
.anprobe[data-zustand="intro"] .a-intro > .a-inhalt,
.anprobe[data-zustand="laden"] .a-laden > .a-inhalt,
.anprobe[data-zustand="ergebnis"] .a-ergebnis > .a-inhalt,
.anprobe[data-zustand="fehler"] .a-fehler > .a-inhalt { transform: none; }

/* ---------- Kopfzeile (Produkt + Schliessen) */
.a-kopf {
  position: absolute; z-index: 5; top: 0; left: 0; right: 0; pointer-events: none;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: calc(16px + var(--a-oben)) 16px 0 20px;
}
.a-kopf > * { pointer-events: auto; }
.a-produkt {
  display: flex; align-items: center; gap: 12px; min-width: 0; max-width: min(420px, 100% - 64px);
  padding: 6px 18px 6px 6px; border-radius: 999px; border: 1px solid transparent;
  transition: background-color var(--a-dauer) ease, border-color var(--a-dauer) ease, box-shadow var(--a-dauer) ease, opacity var(--a-dauer) ease;
}
.a-produkt img {
  flex: none; width: 40px; height: 40px; border-radius: 50%; object-fit: cover; background: var(--a-champagner);
  border: 1px solid var(--a-linie);
}
.a-produkt img[hidden] { display: none; }
.a-produkt-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
.a-produkt-name { font-size: 13px; font-weight: 500; letter-spacing: .02em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.a-produkt-preis { font-size: 12px; color: var(--a-tinte-2); font-variant-numeric: tabular-nums; }
.a-produkt-preis:empty { display: none; }
.a-schliessen .sym { width: 22px; height: 22px; }
.anprobe[data-zustand="live"] .a-kopf .a-produkt, .anprobe[data-zustand="foto"] .a-kopf .a-produkt,
.anprobe[data-zustand="live"] .a-kopf .a-rund, .anprobe[data-zustand="foto"] .a-kopf .a-rund {
  background: var(--a-glas); border-color: var(--a-glas-rand);
  -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
  box-shadow: 0 10px 34px -8px rgba(30, 27, 24, .22);
}
.anprobe[data-zustand="intro"] .a-kopf .a-produkt { opacity: 0; pointer-events: none; }

/* ---------- Intro */
.a-intro { flex-direction: row; }
.a-bild {
  position: relative; flex: 1 1 50%; display: flex; align-items: center; justify-content: center;
  background: radial-gradient(120% 90% at 50% 38%, #FFFDF9 0%, var(--a-champagner) 62%, #EDE3D3 100%);
  overflow: hidden;
}
.a-bild::after { content: ''; position: absolute; inset: 18px; border: 1px solid rgba(184, 149, 90, .28); pointer-events: none; }
.a-intro > .a-inhalt {
  flex: 1 1 50%; display: flex; flex-direction: column; justify-content: center;
  padding: 72px 64px 40px 60px; overflow-y: auto;
}
.a-produktzeile { display: flex; align-items: center; gap: 14px; margin: 0 0 30px; padding-bottom: 22px; border-bottom: 1px solid var(--a-linie); }
.a-produktzeile img { width: 52px; height: 52px; object-fit: cover; border-radius: 2px; background: var(--a-champagner); }
.a-produktzeile img[hidden] { display: none; }
.a-produktzeile .a-produkt-name { font-family: var(--a-titel); font-size: 17px; font-weight: 400; letter-spacing: .01em; white-space: normal; }
.a-schritte { list-style: none; margin: 0 0 32px; padding: 0; counter-reset: schritt; display: grid; gap: 12px; }
.a-schritte li { position: relative; padding-left: 38px; color: var(--a-tinte-2); font-size: 14.5px; line-height: 1.55; counter-increment: schritt; }
.a-schritte li::before {
  content: '0' counter(schritt); position: absolute; left: 0; top: 1px;
  font-size: 11px; letter-spacing: .12em; color: var(--a-gold-text); font-variant-numeric: tabular-nums;
}
.a-aktionen { display: flex; flex-direction: column; gap: 12px; align-items: stretch; max-width: 340px; }
.a-datenschutz { display: flex; gap: 10px; align-items: flex-start; margin-top: 26px; }
.a-datenschutz .sym { flex: none; width: 15px; height: 15px; margin-top: 2px; color: var(--a-gold); }

/* ---------- Anleitungsgrafik */
.a-anleitung { position: relative; width: min(78%, 340px); aspect-ratio: 200 / 240; perspective: 900px; }
.anl-svg { width: 100%; height: 100%; overflow: visible; display: block; }
.anl-linie, .anl-linie-fein, .anl-pfeile path, .anl-sucher path { fill: none; stroke: var(--a-tinte); stroke-linecap: round; stroke-linejoin: round; }
.anl-linie { stroke-width: 1.5; }
.anl-linie-fein { stroke-width: 1; opacity: .55; }
.anl-lippen { fill: rgba(196, 140, 128, .22); stroke: var(--a-tinte); stroke-width: 1; stroke-linejoin: round; opacity: .8; }
.anl-gold { fill: none; stroke: var(--a-gold); stroke-width: 3; stroke-linecap: round; }
.anl-gold-fein { fill: none; stroke: var(--a-gold); stroke-width: 1.2; stroke-linecap: round; }
.anl-gold-punkt { fill: var(--a-gold); stroke: none; }
.anl-kettchen { stroke-width: 2.6; stroke-dasharray: .01 4.4; }
.anl-perle { fill: #FFFDF8; stroke: var(--a-gold); stroke-width: 1.1; }
.anl-funkeln { fill: var(--a-gold); stroke: none; transform-box: fill-box; transform-origin: center; animation: anl-funkeln 3.2s ease-in-out infinite; }
.anl-pfeile path, .anl-sucher path { stroke: var(--a-gold); stroke-width: 1.1; opacity: .7; }
.anl-pfeile { animation: anl-atmen 5s ease-in-out infinite; }
.anl-zeichnen { stroke-dasharray: 1; stroke-dashoffset: 0; animation: anl-zeichnen 1.6s var(--a-kurve) both; }
.anl-figur { transform-box: view-box; transform-origin: 50% 60%; }
.anl-drehen { animation: anl-drehen 6s ease-in-out 1s infinite; }
.a-anleitung[data-art="ring"] .anl-svg, .a-anleitung[data-art="armband"] .anl-svg { animation: anl-drehen3d 6s ease-in-out 1s infinite; }
.anl-pendel { animation: anl-pendel 2.6s ease-in-out infinite; }
.anl-straehne-vor { animation: anl-straehne-vor 7s ease-in-out infinite; }
.anl-straehne-hinter { animation: anl-straehne-hinter 7s ease-in-out infinite; }
.anl-ohrring { animation: anl-ohrring 7s ease-in-out infinite; }
.anl-funkeln-ohr { animation: anl-funkeln-ohr 7s ease-in-out infinite; }
.anl-zuege { animation: anl-zuege 7s ease-in-out infinite; }
.a-anleitung[data-art="ohrringe"] .anl-svg { animation: anl-kopf3d 7s ease-in-out infinite; }
.anl-zoom { transform-origin: 50% 45%; animation: anl-zoom 6s var(--a-kurve) infinite; }
.anl-sucher { transform-box: view-box; transform-origin: 50% 50%; animation: anl-sucher 6s var(--a-kurve) infinite; }
.anl-kette-linie { stroke-dasharray: 1; stroke-dashoffset: 0; animation: anl-kette 6s var(--a-kurve) infinite; }
@keyframes anl-zeichnen { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes anl-funkeln { 0%, 100% { transform: scale(.35); opacity: 0; } 40% { transform: scale(1) rotate(45deg); opacity: 1; } 70% { transform: scale(.5) rotate(90deg); opacity: 0; } }
@keyframes anl-atmen { 0%, 100% { opacity: .25; } 50% { opacity: 1; } }
@keyframes anl-drehen { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
@keyframes anl-drehen3d { 0%, 100% { transform: rotateY(-24deg); } 50% { transform: rotateY(24deg); } }
@keyframes anl-pendel { 0%, 100% { transform: rotate(7deg); } 50% { transform: rotate(-7deg); } }
@keyframes anl-straehne-vor { 0%, 18% { opacity: 1; transform: none; } 34%, 92% { opacity: 0; transform: translateX(9px); } 100% { opacity: 1; transform: none; } }
@keyframes anl-straehne-hinter { 0%, 22% { opacity: 0; } 38%, 90% { opacity: 1; } 100% { opacity: 0; } }
@keyframes anl-ohrring { 0%, 24% { opacity: 0; } 38%, 90% { opacity: 1; } 100% { opacity: 0; } }
@keyframes anl-funkeln-ohr { 0%, 40% { opacity: 0; transform: scale(.3); } 50% { opacity: 1; transform: scale(1) rotate(45deg); } 60%, 100% { opacity: 0; transform: scale(.3) rotate(90deg); } }
@keyframes anl-zuege { 0%, 42% { transform: none; } 58%, 80% { transform: translateX(-4px); } 92%, 100% { transform: none; } }
@keyframes anl-kopf3d { 0%, 42% { transform: rotateY(0); } 58%, 80% { transform: rotateY(-14deg); } 92%, 100% { transform: rotateY(0); } }
@keyframes anl-zoom { 0%, 10% { transform: scale(1.22); } 45%, 88% { transform: scale(1); } 100% { transform: scale(1.22); } }
@keyframes anl-sucher { 0%, 10% { transform: scale(.9); opacity: .5; } 45%, 88% { transform: scale(1); opacity: 1; } 100% { transform: scale(.9); opacity: .5; } }
@keyframes anl-kette { 0%, 30% { stroke-dashoffset: 1; } 60%, 92% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 1; } }

/* ---------- Laden */
.a-laden { background: var(--a-elfenbein); align-items: center; justify-content: center; text-align: center; }
.a-laden.milchglas { background: rgba(251, 248, 243, .86); -webkit-backdrop-filter: blur(26px); backdrop-filter: blur(26px); }
.a-laden > .a-inhalt { display: flex; flex-direction: column; align-items: center; padding: 32px; max-width: 420px; }
.a-laden .a-titel { font-size: 26px; margin-bottom: 30px; }
.a-ladesymbol { color: var(--a-gold); margin-bottom: 22px; }
.a-ladesymbol .sym { width: 34px; height: 34px; animation: laden-funkeln 2.4s ease-in-out infinite; }
@keyframes laden-funkeln { 0%, 100% { transform: scale(.88); opacity: .5; } 50% { transform: scale(1.04); opacity: 1; } }
.a-fortschritt { width: 240px; }
.a-balken { position: relative; height: 1px; background: rgba(30, 27, 24, .14); overflow: visible; }
.a-balken > span {
  position: absolute; left: 0; top: -0.5px; height: 2px; width: 100%; background: var(--a-gold);
  transform-origin: left center; transform: scaleX(0); transition: transform 320ms var(--a-kurve);
}
.a-fortschritt-zeile { display: flex; justify-content: space-between; margin-top: 12px; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--a-tinte-3); }
.a-prozent { font-variant-numeric: tabular-nums; color: var(--a-tinte-2); }
.a-laden .a-textknopf { margin-top: 34px; }

/* ---------- Live-Bedienung */
.a-live {
  position: absolute; inset: 0; z-index: 4; pointer-events: none;
  opacity: 0; visibility: hidden; transition: opacity var(--a-dauer) var(--a-kurve), visibility 0s linear var(--a-dauer);
}
.anprobe[data-zustand="live"] .a-live, .anprobe[data-zustand="foto"] .a-live { opacity: 1; visibility: visible; transition-delay: 0s; }
.a-live > * { pointer-events: auto; }
.a-hinweis {
  position: absolute; left: 0; right: 0; margin: 0 auto; width: max-content; top: calc(80px + var(--a-oben)); max-width: calc(100% - 40px);
  display: flex; align-items: center; gap: 10px; padding: 10px 18px 10px 14px; border-radius: 999px;
  font-size: 13.5px; line-height: 1.35; color: var(--a-tinte); pointer-events: none;
  opacity: 0; transform: translateY(-8px) scale(.97);
  transition: opacity 300ms var(--a-kurve), transform 300ms var(--a-kurve);
}
.a-hinweis.an { opacity: 1; transform: none; }
.a-hinweis .sym { flex: none; width: 18px; height: 18px; color: var(--a-gold); overflow: visible; }
.a-hinweis .sym * { transform-box: fill-box; }
.hs-punkt { flex: none; width: 7px; height: 7px; border-radius: 50%; background: var(--a-gold); animation: hs-puls 1.6s ease-in-out infinite; }
.hs-winken { transform-origin: 50% 100%; animation: hs-winken 1.4s ease-in-out infinite; }
.hs-zoom { transform-origin: center; animation: hs-zoom 1.6s ease-in-out infinite; }
.hs-atmen { transform-origin: center; animation: hs-atmen 1.6s ease-in-out infinite; }
.hs-spreizen { transform-origin: 50% 100%; animation: hs-atmen 1.4s ease-in-out infinite; }
.hs-blinzeln { animation: hs-blinzeln 2.4s ease-in-out infinite; }
.hs-drehen { animation: hs-drehen 1.8s ease-in-out infinite; }
.hs-wenden { transform-origin: center; animation: hs-wenden 2.4s ease-in-out infinite; }
@keyframes hs-puls { 0%, 100% { transform: scale(.7); opacity: .5; } 50% { transform: scale(1); opacity: 1; } }
@keyframes hs-winken { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
@keyframes hs-zoom { 0%, 100% { transform: scale(1); } 50% { transform: scale(.78); } }
@keyframes hs-atmen { 0%, 100% { transform: scale(.88); } 50% { transform: scale(1.06); } }
@keyframes hs-blinzeln { 0%, 44%, 52%, 100% { opacity: 1; } 48% { opacity: 0; } }
@keyframes hs-wenden { 0%, 25% { transform: scaleX(1); } 50%, 75% { transform: scaleX(-1); } 100% { transform: scaleX(1); } }
@keyframes hs-drehen { 0%, 100% { transform: translateX(-1.6px); } 50% { transform: translateX(1.6px); } }

.a-tipp {
  position: absolute; left: 0; right: 0; margin: 0 auto; width: max-content; max-width: calc(100% - 48px);
  top: calc(136px + var(--a-oben)); text-align: center;
  padding: 7px 16px; border-radius: 999px; pointer-events: none;
  font-size: 10.5px; line-height: 1.5; letter-spacing: .12em; text-transform: uppercase; color: #fff;
  background: rgba(30, 27, 24, .34); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
  opacity: 0; transition: opacity 600ms ease;
}
.a-tipp.an { opacity: 1; }
.a-zuruecksetzen { position: absolute; right: 16px; top: calc(76px + var(--a-oben)); opacity: 0; visibility: hidden; transform: scale(.9); transition: opacity var(--a-dauer) ease, transform var(--a-dauer) var(--a-kurve), visibility 0s linear var(--a-dauer); }
.a-zuruecksetzen.an { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
.a-zuruecksetzen.glas:hover { background: rgba(251, 248, 243, .9); }

.a-unten {
  position: absolute; left: 0; right: 0; bottom: 0; pointer-events: none;
  display: flex; flex-direction: column; align-items: center; gap: 18px;
  padding: 0 16px calc(26px + var(--a-unten));
}
.a-unten > * { pointer-events: auto; }
.a-varianten { display: flex; align-items: center; gap: 4px; padding: 4px 18px 4px 4px; border-radius: 999px; }
.a-varianten[hidden] { display: none; }
.a-swatches { display: flex; gap: 2px; }
.a-swatch {
  appearance: none; cursor: pointer; position: relative; width: 38px; height: 38px; padding: 0; border-radius: 50%;
  border: 0; background: transparent; display: grid; place-items: center; -webkit-tap-highlight-color: transparent;
}
.a-swatch > i {
  display: block; width: 26px; height: 26px; border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(30, 27, 24, .12), 0 1px 3px rgba(30, 27, 24, .18);
  transition: transform var(--a-dauer) var(--a-kurve);
}
.a-swatch::after {
  content: ''; position: absolute; inset: 2px; border-radius: 50%; border: 1px solid var(--a-tinte);
  opacity: 0; transform: scale(.85); transition: opacity var(--a-dauer) ease, transform var(--a-dauer) var(--a-kurve);
}
.a-swatch[aria-checked="true"]::after { opacity: .85; transform: none; }
.a-swatch:hover > i { transform: scale(1.06); }
.a-variantenname {
  min-width: 5.5em; padding-left: 12px; margin-left: 4px; border-left: 1px solid rgba(30, 27, 24, .14);
  font-size: 10.5px; line-height: 20px; letter-spacing: .2em; text-transform: uppercase; color: var(--a-tinte); white-space: nowrap;
}
.a-leiste { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; width: 100%; max-width: 360px; }
.a-leiste .a-rund { width: 48px; height: 48px; justify-self: center; }
.a-leiste .a-rund[hidden] { visibility: hidden; display: inline-flex; }
.a-leiste .a-rund.glas:hover { background: rgba(251, 248, 243, .9); }
.a-ausloeser {
  appearance: none; cursor: pointer; position: relative; width: 76px; height: 76px; border-radius: 50%; padding: 0;
  border: 0; background: transparent; -webkit-tap-highlight-color: transparent;
}
.a-ausloeser::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%; border: 1.5px solid rgba(255, 255, 255, .95);
  box-shadow: 0 0 0 1px rgba(30, 27, 24, .1), inset 0 0 0 1px rgba(30, 27, 24, .06), 0 4px 24px rgba(30, 27, 24, .25);
}
.a-ausloeser::after {
  content: ''; position: absolute; inset: 7px; border-radius: 50%; background: rgba(251, 248, 243, .96);
  box-shadow: 0 0 0 1px rgba(30, 27, 24, .08), 0 2px 10px rgba(30, 27, 24, .12);
  transition: transform 180ms var(--a-kurve), background-color var(--a-dauer) ease;
}
.a-ausloeser:hover::after { background: #fff; }
.a-ausloeser:active::after { transform: scale(.9); }
.a-ausloeser .sym { position: relative; z-index: 1; color: var(--a-gold); width: 22px; height: 22px; opacity: 0; transition: opacity var(--a-dauer) ease; }
.anprobe[data-zustand="foto"] .a-ausloeser .sym { opacity: 1; }
.a-ausloeser[disabled] { opacity: .5; cursor: default; }

/* Fingerwahl (Ringe) */
.a-fingerwahl {
  position: absolute; left: 16px; bottom: calc(196px + var(--a-unten)); min-width: 66px;
  display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 9px 6px 7px; border-radius: 16px;
  transition: left 360ms var(--a-kurve), right 360ms var(--a-kurve), opacity var(--a-dauer) ease;
}
.a-fingerwahl.rechts { left: calc(100% - 82px); }
.a-fingerwahl[hidden] { display: none; }
.fw-svg { width: 50px; height: 70px; overflow: visible; display: block; }
.fw-umriss { fill: rgba(251, 248, 243, .55); stroke: var(--a-tinte); stroke-width: 1.4; stroke-linejoin: round; stroke-linecap: round; vector-effect: non-scaling-stroke; }
.fw-finger { cursor: pointer; outline: none; }
.fw-flaeche { fill: transparent; stroke: none; transition: fill var(--a-dauer) ease; }
.fw-finger:hover .fw-flaeche { fill: rgba(184, 149, 90, .12); }
.fw-finger.aktiv .fw-flaeche { fill: rgba(184, 149, 90, .2); }
.fw-band { fill: none; stroke: var(--a-gold); stroke-width: 4.5; stroke-linecap: round; opacity: 0; transition: opacity var(--a-dauer) ease; }
.fw-finger.aktiv .fw-band { opacity: 1; }
.fw-finger:focus-visible .fw-flaeche { stroke: var(--a-gold); stroke-width: 1.2; vector-effect: non-scaling-stroke; }
.a-fingername { font-size: 8.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--a-tinte-2); white-space: nowrap; }

/* ---------- Ergebnis */
.a-ergebnis { align-items: stretch; justify-content: center; }
.a-ergebnis > .a-inhalt { display: flex; gap: 56px; align-items: center; justify-content: center; width: 100%; padding: 84px 64px 48px; }
.a-rahmen {
  position: relative; flex: 0 1 auto; height: 100%; max-height: 100%; min-width: 0;
  display: flex; align-items: center; justify-content: center;
}
.a-rahmen img {
  display: block; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 2px;
  box-shadow: 0 30px 60px -24px rgba(30, 27, 24, .35); background: var(--a-champagner);
}
.a-ergebnis-text { flex: 0 0 300px; display: flex; flex-direction: column; }
.a-ergebnis-text .a-titel { font-size: 30px; margin-bottom: 10px; }
.a-ergebnis-text .a-text { margin-bottom: 30px; }
.a-ergebnis-text .a-knopf { width: 100%; margin-bottom: 10px; }
.a-ergebnis-text .a-textknopf { align-self: flex-start; margin-top: 14px; }
.a-ergebnis .a-knopf[hidden] { display: none; }

/* ---------- Fehler */
.a-fehler { align-items: center; justify-content: center; text-align: center; }
.a-fehler > .a-inhalt { max-width: 440px; padding: 40px 28px; display: flex; flex-direction: column; align-items: center; }
.a-fehler .a-inhalt > .sym { color: var(--a-gold); margin-bottom: 20px; }
.a-fehler .a-titel { font-size: 26px; }
.a-fehler .a-text { margin-bottom: 30px; }
.a-fehler .a-aktionen { justify-content: center; }

/* ---------- Handy: Vollbild */
@media (max-width: 700px), (max-height: 520px) {
  .a-schleier { display: none; }
  .a-fenster { width: 100%; height: 100%; border-radius: 0; box-shadow: none; transform: translateY(16px); }
  .a-kopf { padding: calc(12px + var(--a-oben)) 12px 0 12px; }
  .a-produkt { padding-right: 14px; }
  .a-produkt img { width: 34px; height: 34px; }
  .a-titel { font-size: 27px; margin-bottom: 14px; }
  .a-intro { flex-direction: column; }
  .a-bild { flex: 1 1 auto; min-height: 0; }
  .a-bild::after { inset: 12px 12px 0; border-bottom: 0; }
  .a-anleitung { width: auto; height: min(88%, 300px); }
  .a-intro > .a-inhalt { flex: 0 0 auto; padding: 24px 24px calc(20px + var(--a-unten)); overflow: visible; }
  .a-produktzeile { display: none; }
  .a-label { margin-bottom: 10px; }
  .a-schritte { margin-bottom: 22px; gap: 8px; }
  .a-schritte li { font-size: 14px; padding-left: 32px; }
  .a-schritte li:nth-child(3) { display: none; }
  .a-aktionen { flex-direction: column; align-items: stretch; gap: 10px; }
  .a-aktionen .a-knopf { width: 100%; }
  .a-datenschutz { margin-top: 16px; justify-content: center; text-align: left; }
  .a-ergebnis > .a-inhalt { flex-direction: column; gap: 22px; padding: calc(76px + var(--a-oben)) 20px calc(20px + var(--a-unten)); }
  .a-rahmen { flex: 1 1 auto; min-height: 0; width: 100%; }
  .a-ergebnis-text { flex: 0 0 auto; width: 100%; }
  .a-ergebnis-text .a-titel { font-size: 24px; margin-bottom: 4px; text-align: center; }
  .a-ergebnis-text .a-text { margin-bottom: 18px; text-align: center; font-size: 14px; }
  .a-ergebnis-text .a-textknopf { align-self: center; margin-top: 4px; }
  .a-knoepfe-paar { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .a-knoepfe-paar .a-knopf { margin: 0; padding: 0 12px; }
  .a-knoepfe-paar .a-knopf:only-child, .a-knoepfe-paar .a-knopf[hidden] + .a-knopf { grid-column: 1 / -1; }
}
@media (max-height: 520px) and (orientation: landscape) {
  .a-intro { flex-direction: row; }
  .a-bild { flex: 0 0 36%; }
  .a-bild::after { inset: 12px 0 12px 12px; border-bottom: 1px solid rgba(184, 149, 90, .28); border-right: 0; }
  .a-intro > .a-inhalt { flex: 1 1 auto; overflow-y: auto; padding: 48px 28px 16px; }
  .a-schritte li:nth-child(3) { display: block; }
  .a-aktionen { flex-direction: row; max-width: none; }
  .a-aktionen .a-knopf { width: auto; flex: 1; }
  .a-fingerwahl { bottom: calc(16px + var(--a-unten)); }
  .a-unten { gap: 10px; padding-bottom: calc(14px + var(--a-unten)); }
  .a-tipp { top: calc(72px + var(--a-oben)); }
  .a-hinweis { top: calc(16px + var(--a-oben)); max-width: calc(100% - 520px); }
}

@media (prefers-reduced-motion: reduce) {
  .anprobe *, .anprobe *::before, .anprobe *::after { animation: none !important; transition-duration: 1ms !important; transition-delay: 0s !important; }
  .anl-straehne-vor { opacity: 0; }
}
`;
