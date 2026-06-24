// Three.js scene for the skills constellation.
// Renders glowing points + additive-blended bridge lines on a dark canvas.
// Subtle camera drift + mouse parallax give a "floating in space" feel
// without the boilerplate-tech-portfolio look.

import * as THREE from 'three';

const VIEW_W = 1500;
const VIEW_H = 880;
const VIEW_CX = VIEW_W / 2;
const VIEW_CY = VIEW_H / 2;

// Per-cluster color (sRGB hex) — slight variations of the gold brand.
// AI gets a brighter amber to feel featured.
const CLUSTER_COLORS = {
  dev:         { r: 0.83, g: 0.66, b: 0.32 }, // #d4a853
  ai:          { r: 0.96, g: 0.78, b: 0.45 }, // #f5c674 — featured
  systems:     { r: 0.66, g: 0.54, b: 0.29 }, // #a88a4a
  specialized: { r: 0.54, g: 0.45, b: 0.25 }, // #8a7240
};

// Procedural radial gradient for the node sprite (soft glow disc).
function makeGlowTexture() {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0.0, 'rgba(255, 230, 180, 1.0)');
  g.addColorStop(0.15, 'rgba(255, 210, 140, 0.85)');
  g.addColorStop(0.45, 'rgba(255, 180, 80, 0.30)');
  g.addColorStop(1.0, 'rgba(255, 180, 80, 0.0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export function initSkillScene(canvas, { nodes, bridges, onHover, onClick, onBgClick }) {
  const scene = new THREE.Scene();
  scene.background = null; // transparent — page bg shows through

  const camera = new THREE.PerspectiveCamera(55, 1, 1, 5000);
  camera.position.set(0, 0, 720);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const glowTex = makeGlowTexture();

  // ─── Points (nodes) ──────────────────────────────────────────────
  const positions = new Float32Array(nodes.length * 3);
  const colors = new Float32Array(nodes.length * 3);
  const sizes = new Float32Array(nodes.length);
  const baseZ = new Float32Array(nodes.length); // for drift

  // Initial radial seed for stable z variation per node
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    const x = n.x - VIEW_CX;
    const y = -(n.y - VIEW_CY);
    // z is small but varied, deterministic from the index
    const angle = (i * 137.508) * (Math.PI / 180);
    const z = Math.sin(angle) * 18;
    positions[i * 3]     = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    baseZ[i] = z;

    const c = CLUSTER_COLORS[n.cluster] || CLUSTER_COLORS.dev;
    // Boost featured (weight 5) toward white-ish for "star" feel
    const boost = n.weight >= 5 ? 0.25 : 0;
    colors[i * 3]     = Math.min(1, c.r + boost);
    colors[i * 3 + 1] = Math.min(1, c.g + boost);
    colors[i * 3 + 2] = Math.min(1, c.b + boost);

    sizes[i] = n.radius * 6.5;
  }

  const pointsGeom = new THREE.BufferGeometry();
  pointsGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pointsGeom.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  pointsGeom.setAttribute('aSize',    new THREE.BufferAttribute(sizes, 1));

  const pointsMat = new THREE.ShaderMaterial({
    uniforms: {
      uMap:        { value: glowTex },
      uTime:       { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
    },
    vertexShader: /* glsl */ `
      attribute float aSize;
      varying vec3 vColor;
      uniform float uPixelRatio;
      void main() {
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixelRatio * (300.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap;
      varying vec3 vColor;
      void main() {
        vec4 tex = texture2D(uMap, gl_PointCoord);
        if (tex.a < 0.01) discard;
        gl_FragColor = vec4(vColor, 1.0) * tex;
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  const points = new THREE.Points(pointsGeom, pointsMat);
  scene.add(points);

  // ─── Line segments (bridges) ──────────────────────────────────────
  const linePos = new Float32Array(bridges.length * 6);
  for (let i = 0; i < bridges.length; i++) {
    const b = bridges[i];
    const a = nodes.find((n) => n.name === b.from);
    const c = nodes.find((n) => n.name === b.to);
    if (!a || !c) continue;
    linePos[i * 6]     = a.x - VIEW_CX;
    linePos[i * 6 + 1] = -(a.y - VIEW_CY);
    linePos[i * 6 + 2] = (Math.sin((b.from.length * 13) * (Math.PI / 180))) * 14;
    linePos[i * 6 + 3] = c.x - VIEW_CX;
    linePos[i * 6 + 4] = -(c.y - VIEW_CY);
    linePos[i * 6 + 5] = (Math.sin((b.to.length * 17) * (Math.PI / 180))) * 14;
  }
  const lineGeom = new THREE.BufferGeometry();
  lineGeom.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: 0xf5c674,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    linewidth: 1,
  });
  const lines = new THREE.LineSegments(lineGeom, lineMat);
  scene.add(lines);

  // ─── Resize ──────────────────────────────────────────────────────
  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w || canvas.height !== h) {
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  // ─── Interaction (raycasting) ────────────────────────────────────
  const raycaster = new THREE.Raycaster();
  raycaster.params.Points = { threshold: 8 };
  const ndc = new THREE.Vector2();
  let hoverIdx = -1;

  function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    ndc.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    ndc.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(points);
    const next = hits.length > 0 ? hits[0].index : -1;
    if (next !== hoverIdx) {
      hoverIdx = next;
      onHover && onHover(next === -1 ? null : nodes[next].name);
    }
  }
  function onPointerClick(e) {
    const rect = canvas.getBoundingClientRect();
    ndc.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    ndc.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(points);
    if (hits.length > 0) {
      onClick && onClick(nodes[hits[0].index].name);
    } else {
      onBgClick && onBgClick();
    }
  }
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('click', onPointerClick);

  // ─── Mouse parallax target ───────────────────────────────────────
  const target = { x: 0, y: 0 };
  function onWindowPointerMove(e) {
    const r = canvas.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width)  * 2 - 1;
    target.y = ((e.clientY - r.top)  / r.height) * 2 - 1;
  }
  window.addEventListener('pointermove', onWindowPointerMove);

  // ─── Animation loop ──────────────────────────────────────────────
  let rafId = 0;
  const posAttr = pointsGeom.getAttribute('position');
  const cam = { x: 0, y: 0 };
  let t0 = performance.now();

  function tick() {
    rafId = requestAnimationFrame(tick);
    if (document.hidden) return;

    const now = performance.now();
    const t = (now - t0) * 0.001;

    // Gentle vertical drift per node (different periods) for life
    const arr = posAttr.array;
    for (let i = 0; i < nodes.length; i++) {
      const phase = i * 0.7;
      arr[i * 3 + 1] += Math.sin(t * 0.5 + phase) * 0.04;
      arr[i * 3]     += Math.cos(t * 0.4 + phase * 1.3) * 0.02;
    }
    posAttr.needsUpdate = true;

    // Mouse parallax — interpolate toward target
    cam.x += (target.x * 60 - cam.x) * 0.05;
    cam.y += (-target.y * 40 - cam.y) * 0.05;
    camera.position.x = cam.x + Math.sin(t * 0.18) * 6;
    camera.position.y = cam.y + Math.cos(t * 0.22) * 4;
    camera.lookAt(0, 0, 0);

    pointsMat.uniforms.uTime.value = t;
    renderer.render(scene, camera);
  }
  tick();

  // ─── External getters for label projection ───────────────────────
  const projectVec = new THREE.Vector3();
  function project(node) {
    projectVec.set(
      node.x - VIEW_CX,
      -(node.y - VIEW_CY),
      baseZ[nodes.indexOf(node)]
    );
    projectVec.project(camera);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    return {
      x: (projectVec.x * 0.5 + 0.5) * w,
      y: (-projectVec.y * 0.5 + 0.5) * h,
      visible: projectVec.z < 1,
    };
  }

  // ─── Hover highlight (boost size + color) ────────────────────────
  function setHover(name) {
    const idx = name ? nodes.findIndex((n) => n.name === name) : -1;
    if (idx === hoverIdx) return;
    hoverIdx = idx;
    const sizeAttr = pointsGeom.getAttribute('aSize');
    const colAttr  = pointsGeom.getAttribute('color');
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const isHover = i === idx;
      sizeAttr.array[i] = (n.radius * 6.5) * (isHover ? 1.6 : 1.0);
      const c = CLUSTER_COLORS[n.cluster] || CLUSTER_COLORS.dev;
      const boost = n.weight >= 5 ? 0.25 : 0;
      const hb = isHover ? 0.35 : 0;
      colAttr.array[i * 3]     = Math.min(1, c.r + boost + hb);
      colAttr.array[i * 3 + 1] = Math.min(1, c.g + boost + hb);
      colAttr.array[i * 3 + 2] = Math.min(1, c.b + boost + hb);
    }
    sizeAttr.needsUpdate = true;
    colAttr.needsUpdate  = true;
  }
  // Override onHover to also call setHover
  // (we keep the signature-compatible external onHover, but also manage size here)
  // Since onPointerMove calls onHover, we wrap it to also call setHover:
  const wrappedOnHover = (name) => {
    setHover(name);
    onHover && onHover(name);
  };
  // Replace the pointer listener
  canvas.removeEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    ndc.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    ndc.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(points);
    const next = hits.length > 0 ? hits[0].index : -1;
    if (next !== hoverIdx) {
      hoverIdx = next;
      wrappedOnHover(next === -1 ? null : nodes[next].name);
    }
  });

  // ─── Cleanup ─────────────────────────────────────────────────────
  return {
    project,
    cleanup() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('click', onPointerClick);
      window.removeEventListener('pointermove', onWindowPointerMove);
      pointsGeom.dispose();
      pointsMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
      glowTex.dispose();
      renderer.dispose();
    },
  };
}
