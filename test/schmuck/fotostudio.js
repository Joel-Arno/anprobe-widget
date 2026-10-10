// Umgebung wie bei einer Schmuck-Produktaufnahme (nur fuer Pruefbilder):
// grosse Softbox oben, Hauptlicht vorn links, Streiflicht rechts, heller Tisch,
// sonst gedaempft graue Umgebung. Gibt Metall und Perlen Kontrast und Tiefe,
// so wie es Fotografen mit Softboxen und dunklen Karten erreichen.
import * as THREE from 'three';

export function fotostudioSzene() {
  const szene = new THREE.Scene();
  const flaeche = (b, h, farbe, staerke, pos, blick) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(b, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(farbe).multiplyScalar(staerke), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(...blick);
    szene.add(m);
    return m;
  };
  // Raum: innen gedaempft, Boden heller (Tisch), Waende nach oben etwas heller
  const raum = new THREE.Mesh(new THREE.SphereGeometry(40, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {},
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `varying vec3 vP;
      void main(){
        vec3 d = normalize(vP);
        float boden = smoothstep(0.05, -0.25, d.y);
        vec3 wand = mix(vec3(0.20, 0.19, 0.18), vec3(0.42, 0.40, 0.38), smoothstep(-0.1, 0.8, d.y));
        vec3 tisch = vec3(0.85, 0.82, 0.78);
        // hinter der Kamera dunkler (Fotograf, dunkle Karte)
        wand *= mix(1.0, 0.7, smoothstep(0.3, 0.9, d.z));
        gl_FragColor = vec4(mix(wand, tisch, boden), 1.0);
      }`
  }));
  szene.add(raum);
  flaeche(30, 30, 0xffffff, 3.2, [0, 30, 0], [0, 0, 0]);            // Softbox oben
  flaeche(14, 18, 0xfffaf2, 7.0, [-20, 14, 18], [0, 0, 0]);         // Hauptlicht vorn links
  flaeche(5, 26, 0xf4f6ff, 3.5, [26, 6, -6], [0, 0, 0]);            // Streiflicht rechts
  flaeche(22, 8, 0xffffff, 2.0, [0, 8, -30], [0, 0, 0]);            // Hintergrundlicht
  return szene;
}

/** PMREM-Umgebung des Fotostudios. */
export function fotostudioUmgebung(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const szene = fotostudioSzene();
  const tex = pmrem.fromScene(szene, 0.02).texture;
  szene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  pmrem.dispose();
  return tex;
}
