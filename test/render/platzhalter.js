// Einfache Platzhalter-Modelle nach den Modellkonventionen (mm), unabhaengig
// von src/schmuck: Torus-Ring mit Perle, Ohrhaenger mit Pendel.
import * as THREE from 'three';

function gold() {
  const m = new THREE.MeshPhysicalMaterial({ metalness: 1, roughness: 0.18, clearcoat: 0.2 });
  m.color.setRGB(1.0, 0.77, 0.4);
  return m;
}

function perle() {
  return new THREE.MeshPhysicalMaterial({
    color: 0xf4efe6, roughness: 0.22, sheen: 0.6, sheenColor: new THREE.Color(0xffe6f0),
    iridescence: 0.4, iridescenceIOR: 1.5, clearcoat: 0.6, clearcoatRoughness: 0.1
  });
}

export function platzhalter(art) {
  const ressourcen = [];
  const merke = (x) => (ressourcen.push(x), x);
  const g = new THREE.Group();
  let masse = {};
  const pendel = [];
  if (art === 'ring') {
    const innen = 8.5;
    const rohr = 1.1;
    const geo = merke(new THREE.TorusGeometry(innen + rohr, rohr, 24, 96));
    geo.rotateX(Math.PI / 2); // Schiene um die Y-Achse
    g.add(new THREE.Mesh(geo, merke(gold())));
    const p = new THREE.Mesh(merke(new THREE.SphereGeometry(3.6, 48, 32)), merke(perle()));
    p.position.set(0, 0, innen + rohr * 2 + 3.0);
    g.add(p);
    masse = { innenRadiusMm: innen };
  } else if (art === 'ohrhaenger') {
    const mat = merke(gold());
    const ring = new THREE.Mesh(merke(new THREE.TorusGeometry(2.2, 0.45, 12, 48)), mat);
    ring.rotation.y = Math.PI / 2;
    g.add(ring);
    const knoten = new THREE.Group();
    knoten.position.set(0, -2.2, 0);
    g.add(knoten);
    const stab = new THREE.Mesh(merke(new THREE.CylinderGeometry(0.35, 0.35, 16, 12)), mat);
    stab.position.y = -8;
    knoten.add(stab);
    const p = new THREE.Mesh(merke(new THREE.SphereGeometry(4, 48, 32)), merke(perle()));
    p.position.y = -19;
    knoten.add(p);
    pendel.push({ knoten, laengeMm: 19 });
    masse = { laengeMm: 25 };
    art = 'ohrringe';
  }
  return {
    art,
    gruppe: g,
    masse,
    pendel,
    dispose() {
      for (const r of ressourcen) r.dispose();
    }
  };
}
