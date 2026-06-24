// Force-directed layout for the skills constellation.
// Deterministic (seeded RNG) so the layout is identical on every load.

// Seeded LCG (Numerical Recipes)
function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const CLUSTER_HOMES = [
  { id: 'dev',         cx: 290,  cy: 320, rx: 220, ry: 190 },
  { id: 'ai',          cx: 760,  cy: 195, rx: 215, ry: 165 },
  { id: 'systems',     cx: 1230, cy: 320, rx: 220, ry: 190 },
  { id: 'specialized', cx: 760,  cy: 690, rx: 220, ry: 155 },
];

function runLayout(skills, homes, rng) {
  // Seed: place each node in its cluster home
  const byCluster = new Map();
  for (const sk of skills) {
    if (!byCluster.has(sk.cluster)) byCluster.set(sk.cluster, []);
    byCluster.get(sk.cluster).push(sk);
  }
  for (const [cid, list] of byCluster) {
    const home = homes.find((h) => h.id === cid);
    if (!home) continue;
    const n = list.length;
    const step = (2 * Math.PI) / n;
    list.forEach((sk, i) => {
      const angle = step * i - Math.PI / 2 + (rng() - 0.5) * 0.4;
      const r = Math.min(home.rx, home.ry) * (0.45 + rng() * 0.4);
      sk.x = home.cx + r * Math.cos(angle);
      sk.y = home.cy + r * Math.sin(angle);
      sk.vx = 0;
      sk.vy = 0;
    });
  }

  // Unique edge set
  const edgeSet = new Set();
  const edges = [];
  for (const sk of skills) {
    for (const b of sk.bridges || []) {
      const key = [sk.name, b].sort().join('||');
      if (edgeSet.has(key)) continue;
      edgeSet.add(key);
      edges.push({ from: sk.name, to: b });
    }
  }

  // Physics loop
  const ITER = 350;
  const REPULSE = 12000;
  const SPRING_K = 0.045;
  const ANCHOR_K = 0.018;
  const DAMP = 0.78;
  let temp = 1.0;
  for (let it = 0; it < ITER; it++) {
    for (const sk of skills) { sk.fx = 0; sk.fy = 0; }
    // Repulsion
    for (let i = 0; i < skills.length; i++) {
      for (let j = i + 1; j < skills.length; j++) {
        const a = skills[i];
        const b = skills[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy + 0.1;
        const d = Math.sqrt(d2);
        const f = REPULSE / d2;
        const fx = (dx / d) * f;
        const fy = (dy / d) * f;
        a.fx += fx; a.fy += fy;
        b.fx -= fx; b.fy -= fy;
      }
    }
    // Spring attraction
    for (const e of edges) {
      const a = skills.find((s) => s.name === e.from);
      const b = skills.find((s) => s.name === e.to);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy) + 0.01;
      const sameCluster = a.cluster === b.cluster;
      const target = sameCluster ? 65 : 130;
      const f = (d - target) * SPRING_K;
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      a.fx += fx; a.fy += fy;
      b.fx -= fx; b.fy -= fy;
    }
    // Anchor pull
    for (const sk of skills) {
      const home = homes.find((h) => h.id === sk.cluster);
      if (!home) continue;
      sk.fx += (home.cx - sk.x) * ANCHOR_K;
      sk.fy += (home.cy - sk.y) * ANCHOR_K;
    }
    // Integrate
    for (const sk of skills) {
      sk.vx = (sk.vx + sk.fx * temp) * DAMP;
      sk.vy = (sk.vy + sk.fy * temp) * DAMP;
      sk.x += sk.vx;
      sk.y += sk.vy;
    }
    temp *= 0.985;
  }
}

export function buildSkillGraph(clusters, langCode) {
  const homes = CLUSTER_HOMES.map((h, i) => ({
    ...h,
    title: clusters[i] ? clusters[i][langCode].title : '',
    subtitle: clusters[i] ? clusters[i][langCode].subtitle : '',
  }));

  // Flatten skills
  const skills = [];
  for (const cl of clusters) {
    for (const sk of cl.skills) {
      skills.push({
        name: sk.name,
        cluster: cl.id,
        weight: sk.weight,
        since: sk.since,
        frequency: sk.frequency,
        contextEn: sk.en,
        contextEs: sk.es,
        bridges: sk.bridges || [],
        x: 0, y: 0, vx: 0, vy: 0,
      });
    }
  }

  // Deterministic seed per language
  const seed = langCode === 'es' ? 0x4D1A1F : 0x4D1A1E;
  const rng = makeRng(seed);
  runLayout(skills, homes, rng);

  // Label positions
  for (const sk of skills) {
    const home = homes.find((h) => h.id === sk.cluster);
    const right = sk.x >= home.cx;
    sk.radius = 4 + sk.weight * 1.1;
    sk.lx = right ? sk.x + sk.radius + 6 : sk.x - sk.radius - 6;
    sk.ly = sk.y + 4;
    sk.anchor = right ? 'start' : 'end';
  }

  // Bridge paths (curved bezier) — curated cross-cluster only
  const bridges = [];
  const seen = new Set();
  for (const sk of skills) {
    for (const bName of sk.bridges) {
      const key = [sk.name, bName].sort().join('||');
      if (seen.has(key)) continue;
      const b = skills.find((s) => s.name === bName);
      if (!b) continue;
      seen.add(key);
      bridges.push({
        from: sk.name,
        to: bName,
        x1: sk.x, y1: sk.y, x2: b.x, y2: b.y,
      });
    }
  }

  return { clusters: homes, nodes: skills, bridges };
}
