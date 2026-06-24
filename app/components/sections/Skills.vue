<template>
  <section id="skills" ref="sectionRef" class="py-24 md:py-32 bg-base-200 relative overflow-hidden border-t border-border-subtle">
    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <div class="max-w-2xl mb-12 md:mb-16 reveal-slow">
        <span class="section-eyebrow mb-6">{{ eyebrow }}</span>
        <h2 class="section-title mt-4">{{ competenciesContent.title }}</h2>
        <p class="mt-5 text-base text-base-content-secondary">{{ hintText }}</p>
      </div>

      <div ref="wrapRef" class="scene-wrap reveal-slow">
        <canvas ref="canvasRef" class="scene-canvas"></canvas>
        <!-- HTML labels layer -->
        <div class="labels-layer" aria-hidden="true">
          <div
            v-for="(node, i) in nodes"
            :key="'lbl-' + node.name"
            class="skill-label"
            :class="{
              'is-hovered': hoveredSkill === node.name,
              'is-active': activeSkill === node.name,
              'is-dimmed': (hoveredSkill || activeSkill) && hoveredSkill !== node.name && activeSkill !== node.name
            }"
            :style="{
              transform: `translate(${labelPositions[i]?.x ?? 0}px, ${labelPositions[i]?.y ?? 0}px)`,
              opacity: (hoveredSkill === node.name || activeSkill === node.name) ? 1 : 0,
            }"
          >{{ node.name }}</div>
        </div>
        <!-- Cluster captions -->
        <div
          v-for="cl in clusters"
          :key="'cl-' + cl.id"
          class="cluster-caption"
          :style="{ transform: `translate(${cl.cx}px, ${cl.cy - cl.ry - 30}px)` }"
        >
          <span class="cluster-caption-title">{{ cl.title }}</span>
          <span class="cluster-caption-sub">{{ cl.subtitle }}</span>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="pop">
        <div
          v-if="activeSkill && activeNode"
          ref="popRef"
          class="skill-popover"
          :style="popoverStyle"
          @click.stop
        >
          <button
            class="pop-close"
            :aria-label="closeLabel"
            @click="activeSkill = null"
          >x</button>
          <div class="flex items-baseline gap-2 mb-1.5">
            <span class="font-mono text-[10px] text-primary uppercase tracking-widest">
              {{ activeClusterTitle }}
            </span>
          </div>
          <h3 class="pop-title">{{ activeNode.name }}</h3>
          <div class="pop-meta">
            <span>{{ sinceLabel }} {{ activeNode.since }}</span>
            <span class="dot">.</span>
            <span>{{ freqLabel[activeNode.frequency] }}</span>
          </div>
          <p class="pop-body">{{ activeNode.context }}</p>
          <div v-if="activeBridges.length" class="pop-bridges">
            <span class="pop-bridges-label">{{ bridgesLabel }}</span>
            <div class="pop-bridge-chips">
              <button
                v-for="b in activeBridges"
                :key="b"
                class="bridge-chip"
                @click="activeSkill = b"
              >{{ b }}</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch, nextTick, reactive } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useSectionReveal } from '~/composables/useScrollReveal';
import { buildSkillGraph } from '~/lib/skillGraph';
import { initSkillScene } from '~/lib/threeSkillScene';

const { lang } = useLang();
const competenciesContent = computed(() => content.static.competencies[lang.value]);
const eyebrow = computed(() => (lang.value === 'es' ? '02 - Habilidades' : '02 - Skills'));
const hintText = computed(() =>
  lang.value === 'es'
    ? 'Veinte y tantos anos en un campo de constelaciones. Pasa el mouse, hace click en cualquier estrella.'
    : 'Twenty-plus years as a field of stars. Hover, click any node to see the context.'
);
const sinceLabel = computed(() => (lang.value === 'es' ? 'Desde' : 'Since'));
const bridgesLabel = computed(() => (lang.value === 'es' ? 'Puentes' : 'Bridges'));
const closeLabel = computed(() => (lang.value === 'es' ? 'Cerrar' : 'Close'));

const freqLabel = {
  daily: { en: 'Daily', es: 'Diario' },
  weekly: { en: 'Weekly', es: 'Semanal' },
  monthly: { en: 'Monthly', es: 'Mensual' },
  occasional: { en: 'Occasional', es: 'Ocasional' },
};

const layout = computed(() => {
  const clusters = content.static.competencies.clusters;
  const g = buildSkillGraph(clusters, lang.value);
  return {
    clusters: g.clusters,
    nodes: g.nodes.map((n) => ({
      ...n,
      context: lang.value === 'es' ? n.contextEs : n.contextEn,
    })),
    bridges: g.bridges,
  };
});

const nodes = computed(() => layout.value.nodes);
const clusters = computed(() => layout.value.clusters);
const nodesByName = computed(() => {
  const m = {};
  for (const n of nodes.value) m[n.name] = n;
  return m;
});

const hoveredSkill = ref(null);
const activeSkill = ref(null);
const activeNode = computed(() => (activeSkill.value ? nodesByName.value[activeSkill.value] : null));
const activeCluster = computed(() => (activeNode.value ? activeNode.value.cluster : null));
const activeClusterTitle = computed(() => {
  if (!activeCluster.value) return '';
  const cl = clusters.value.find((c) => c.id === activeCluster.value);
  return cl ? cl.title : '';
});
const activeBridges = computed(() => {
  if (!activeNode.value) return [];
  return (activeNode.value.bridges || []).filter((b) => nodesByName.value[b]);
});

const wrapRef = ref(null);
const canvasRef = ref(null);
const popRef = ref(null);
const popoverStyle = ref({ display: 'none' });

// Per-node projected screen positions, updated each frame
const labelPositions = reactive(nodes.value.map(() => ({ x: 0, y: 0, visible: false })));

let sceneApi = null;
let frameCounter = 0;

function startLabelProjection() {
  function update() {
    frameCounter++;
    if (frameCounter % 2 !== 0) {
      // Throttle to ~30fps for label DOM updates
      requestAnimationFrame(update);
      return;
    }
    if (!sceneApi) return;
    for (let i = 0; i < nodes.value.length; i++) {
      const p = sceneApi.project(nodes.value[i]);
      labelPositions[i].x = p.x;
      labelPositions[i].y = p.y;
    }
    requestAnimationFrame(update);
  }
  update();
}

function popoverPosFor(node) {
  if (!canvasRef.value) return { display: 'none' };
  const p = sceneApi ? sceneApi.project(node) : { x: 0, y: 0 };
  const rect = canvasRef.value.getBoundingClientRect();
  const screenX = rect.left + p.x;
  const screenY = rect.top + p.y;
  const pop = popRef.value;
  const popW = pop ? pop.offsetWidth : 300;
  const popH = pop ? pop.offsetHeight : 180;
  const offset = 16;
  const edge = 12;
  let left = screenX + offset;
  let top = screenY - popH / 2;
  if (left + popW > window.innerWidth - edge) left = screenX - popW - offset;
  if (left < edge) left = edge;
  if (top < edge) top = edge;
  if (top + popH > window.innerHeight - edge) top = window.innerHeight - popH - edge;
  return {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: 80,
  };
}

async function recomputePopover() {
  if (!activeSkill.value || !activeNode.value) {
    popoverStyle.value = { display: 'none' };
    return;
  }
  await nextTick();
  popoverStyle.value = popoverPosFor(activeNode.value);
}

watch(activeSkill, () => recomputePopover());

function onWindowResize() {
  if (activeNode.value) recomputePopover();
}
function onWindowScroll() {
  activeSkill.value = null;
}
window.addEventListener('resize', onWindowResize);
window.addEventListener('scroll', onWindowScroll, { passive: true });

onMounted(() => {
  sceneApi = initSkillScene(canvasRef.value, {
    nodes: nodes.value,
    bridges: layout.value.bridges,
    onHover: (name) => { hoveredSkill.value = name; },
    onClick: (name) => { activeSkill.value = activeSkill.value === name ? null : name; },
    onBgClick: () => { activeSkill.value = null; },
  });
  startLabelProjection();
});

onUnmounted(() => {
  if (sceneApi) sceneApi.cleanup();
  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('scroll', onWindowScroll);
});

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.05 });
onMounted(() => { if (sectionRef.value) observe(sectionRef.value); });
</script>

<style scoped>
.scene-wrap {
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 18px;
  overflow: hidden;
  background:
    radial-gradient(ellipse 60% 50% at 30% 30%, color-mix(in oklab, var(--color-primary) 5%, transparent), transparent 60%),
    radial-gradient(ellipse 50% 50% at 80% 70%, color-mix(in oklab, var(--color-primary) 4%, transparent), transparent 60%);
  border: 1px solid var(--color-border-subtle);
}
.scene-canvas {
  display: block;
  width: 100%;
  height: 100%;
  cursor: default;
}
.labels-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.skill-label {
  position: absolute;
  top: 0; left: 0;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-base-content);
  background: color-mix(in oklab, var(--color-base-200) 75%, transparent);
  border: 1px solid color-mix(in oklab, var(--color-primary) 35%, transparent);
  padding: 3px 8px;
  border-radius: 999px;
  white-space: nowrap;
  transform-origin: 0 50%;
  transition: opacity 0.18s ease, background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  letter-spacing: 0.01em;
  pointer-events: none;
  will-change: transform, opacity;
}
.skill-label.is-hovered,
.skill-label.is-active {
  color: var(--color-primary);
  background: color-mix(in oklab, var(--color-base-200) 92%, transparent);
  border-color: var(--color-primary);
}
.skill-label.is-dimmed { opacity: 0 !important; }

.cluster-caption {
  position: absolute;
  top: 0; left: 0;
  text-align: center;
  transform-origin: 50% 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.cluster-caption-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-base-content);
  letter-spacing: -0.005em;
}
.cluster-caption-sub {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--color-base-content-secondary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.65;
  max-width: 220px;
  white-space: normal;
}

.skill-popover {
  width: 300px;
  max-width: calc(100vw - 24px);
  background: var(--color-base-200);
  border: 1px solid var(--color-border-strong);
  border-radius: 14px;
  padding: 18px 20px 16px;
  box-shadow: 0 0 0 1px var(--color-primary-muted), 0 18px 48px -16px rgba(0, 0, 0, 0.55);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-base-content);
}
.pop-close {
  position: absolute;
  top: 10px; right: 12px;
  width: 24px; height: 24px;
  border: 0;
  background: transparent;
  color: var(--color-base-content-muted);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.15s, color 0.15s;
}
.pop-close:hover { background: var(--color-base-300); color: var(--color-base-content); }
.pop-title {
  font-family: var(--font-display);
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -0.01em;
  font-weight: 500;
  margin: 0 0 6px;
  color: var(--color-base-content);
}
.pop-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-base-content-secondary);
  margin-bottom: 12px;
}
.pop-meta .dot { opacity: 0.5; }
.pop-body {
  color: var(--color-base-content-secondary);
  font-size: 13px;
  line-height: 1.55;
  margin: 0 0 14px;
}
.pop-bridges { border-top: 1px solid var(--color-border-subtle); padding-top: 12px; }
.pop-bridges-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-base-content-muted);
  margin-bottom: 8px;
}
.pop-bridge-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.bridge-chip {
  font-family: var(--font-mono);
  font-size: 10.5px;
  padding: 4px 9px;
  border-radius: 999px;
  background: var(--color-base-300);
  color: var(--color-base-content-secondary);
  border: 1px solid var(--color-border-subtle);
  cursor: pointer;
  transition: all 0.15s;
}
.bridge-chip:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: var(--color-primary-muted);
}
.pop-enter-active, .pop-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateY(4px); }

@media (max-width: 900px) {
  .scene-wrap { height: 480px; }
  .cluster-caption-title { font-size: 12px; }
  .cluster-caption-sub { font-size: 8px; }
}
</style>
