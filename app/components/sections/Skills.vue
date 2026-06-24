<template>
  <section id="skills" ref="sectionRef" class="py-24 md:py-32 bg-base-200 relative overflow-hidden border-t border-border-subtle">
    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <div class="max-w-2xl mb-12 md:mb-16 reveal-slow">
        <span class="section-eyebrow mb-6">{{ eyebrow }}</span>
        <h2 class="section-title mt-4">{{ competenciesContent.title }}</h2>
        <p class="mt-5 text-base text-base-content-secondary">{{ hintText }}</p>
      </div>

      <div ref="wrapRef" class="constellation-wrap reveal-slow">
        <svg
          ref="svgRef"
          viewBox="0 0 1200 730"
          class="constellation-svg"
          @click="onSvgClick"
        >
          <ellipse
            v-for="cl in layout.clusters"
            :key="'z-' + cl.id"
            :cx="cl.cx" :cy="cl.cy" :rx="cl.rx" :ry="cl.ry"
            :class="['cluster-zone', cl.id, { 'zone-active': activeCluster === cl.id }]"
          />
          <text
            v-for="cl in layout.clusters"
            :key="'l-' + cl.id"
            :x="cl.cx" :y="cl.cy - cl.ry - 22"
            class="cluster-label"
          >{{ cl.title }}</text>
          <text
            v-for="cl in layout.clusters"
            :key="'s-' + cl.id"
            :x="cl.cx" :y="cl.cy - cl.ry - 8"
            class="cluster-subtitle"
          >{{ cl.subtitle }}</text>

          <line
            v-for="(e, i) in layout.withinEdges"
            :key="'we-' + i"
            :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2"
            :class="['skill-line', 'line-within', { dim: isEdgeDimmed(e.from, e.to) }]"
          />
          <path
            v-for="(b, i) in layout.bridges"
            :key="'b-' + i"
            :d="b.path"
            :class="['skill-line', 'line-bridge', { dim: isEdgeDimmed(b.from, b.to) }]"
          />

          <g
            v-for="(node, i) in layout.nodes"
            :key="node.name"
            class="skill-node-group"
            :class="[node.cluster, { 'is-active': activeSkill === node.name, 'is-dimmed': isNodeDimmed(node.name) }]"
            :style="nodeStyle(i)"
            @click.stop="toggleSkill(node.name)"
            @mouseenter="hoveredSkill = node.name"
            @mouseleave="hoveredSkill = null"
          >
            <circle
              v-if="node.weight === 5"
              :cx="node.x" :cy="node.y" :r="node.radius + 5"
              class="node-halo"
            />
            <circle
              :cx="node.x" :cy="node.y" :r="node.radius"
              :class="['skill-node', node.cluster]"
            />
            <text
              :x="node.lx" :y="node.ly"
              :text-anchor="node.anchor"
              :class="['skill-label', { 'label-active': activeSkill === node.name }]"
            >{{ node.name }}</text>
          </g>
        </svg>
        <p class="md:hidden text-xs text-base-content-muted font-mono mt-3">{{ swipeHint }}</p>
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
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useSectionReveal } from '~/composables/useScrollReveal';
import { buildSkillGraph } from '~/lib/skillGraph';

const { lang } = useLang();
const competenciesContent = computed(() => content.static.competencies[lang.value]);
const eyebrow = computed(() => (lang.value === 'es' ? '02 - Habilidades' : '02 - Skills'));

const hintText = computed(() =>
  lang.value === 'es'
    ? '20+ anos condensados en un grafo. Toca cualquier nodo para ver contexto, anio de inicio y puentes a otras habilidades.'
    : '20+ years condensed into a graph. Tap any node for context, when I started, and the bridges to other skills.'
);
const swipeHint = computed(() =>
  lang.value === 'es' ? 'Desliza horizontalmente para ver el grafo completo.' : 'Swipe horizontally to see the full graph.'
);

const freqLabel = {
  daily: { en: 'Daily', es: 'Diario' },
  weekly: { en: 'Weekly', es: 'Semanal' },
  monthly: { en: 'Monthly', es: 'Mensual' },
  occasional: { en: 'Occasional', es: 'Ocasional' },
};
const sinceLabel = computed(() => (lang.value === 'es' ? 'Desde' : 'Since'));
const bridgesLabel = computed(() => (lang.value === 'es' ? 'Puentes' : 'Bridges'));
const closeLabel = computed(() => (lang.value === 'es' ? 'Cerrar' : 'Close'));

const layout = computed(() => {
  const clusters = content.static.competencies.clusters;
  const graph = buildSkillGraph(clusters, lang.value);
  return {
    clusters: graph.clusters,
    nodes: graph.nodes.map((n) => ({
      ...n,
      context: lang.value === 'es' ? n.contextEs : n.contextEn,
    })),
    withinEdges: graph.withinEdges,
    bridges: graph.bridges,
  };
});

const nodesByName = computed(() => {
  const map = {};
  for (const n of layout.value.nodes) map[n.name] = n;
  return map;
});

const hoveredSkill = ref(null);
const activeSkill = ref(null);
const activeNode = computed(() => (activeSkill.value ? nodesByName.value[activeSkill.value] : null));
const activeCluster = computed(() => (activeNode.value ? activeNode.value.cluster : null));
const activeClusterTitle = computed(() => {
  if (!activeCluster.value) return '';
  const cl = layout.value.clusters.find((c) => c.id === activeCluster.value);
  return cl ? cl.title : '';
});
const activeBridges = computed(() => {
  if (!activeNode.value) return [];
  return (activeNode.value.bridges || []).filter((b) => nodesByName.value[b]);
});

function isEdgeDimmed(a, b) {
  if (activeSkill.value) return activeSkill.value !== a && activeSkill.value !== b;
  if (hoveredSkill.value) return hoveredSkill.value !== a && hoveredSkill.value !== b;
  return false;
}
function isNodeDimmed(name) {
  if (activeSkill.value) return activeSkill.value !== name;
  if (hoveredSkill.value) return hoveredSkill.value !== name;
  return false;
}
function toggleSkill(name) {
  activeSkill.value = activeSkill.value === name ? null : name;
}
function onSvgClick() {
  activeSkill.value = null;
}
function nodeStyle(i) {
  return { transitionDelay: `${i * 18}ms` };
}

const wrapRef = ref(null);
const svgRef = ref(null);
const popRef = ref(null);
const popoverStyle = ref({ display: 'none' });

async function recomputePopover() {
  if (!activeSkill.value || !activeNode.value) {
    popoverStyle.value = { display: 'none' };
    return;
  }
  await nextTick();
  const svg = svgRef.value;
  const pop = popRef.value;
  if (!svg || !pop) return;
  const VIEW_W = 1200;
  const VIEW_H = 730;
  const svgRect = svg.getBoundingClientRect();
  const node = activeNode.value;
  const scaleX = svgRect.width / VIEW_W;
  const scaleY = svgRect.height / VIEW_H;
  const cx = svgRect.left + node.x * scaleX;
  const cy = svgRect.top + node.y * scaleY;
  const popW = pop.offsetWidth || 300;
  const popH = pop.offsetHeight || 180;
  const offset = 16;
  const edge = 12;
  let left = cx + offset;
  let top = cy - popH / 2;
  if (left + popW > window.innerWidth - edge) left = cx - popW - offset;
  if (left < edge) left = edge;
  if (top < edge) top = edge;
  if (top + popH > window.innerHeight - edge) top = window.innerHeight - popH - edge;
  popoverStyle.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: 80,
  };
}

watch(activeSkill, () => {
  recomputePopover();
});

const onResize = () => recomputePopover();
const onScroll = () => { activeSkill.value = null; };

onMounted(() => {
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  window.removeEventListener('scroll', onScroll);
});

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.05 });
onMounted(() => { if (sectionRef.value) observe(sectionRef.value); });
</script>

<style scoped>
.constellation-wrap {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.constellation-svg {
  display: block;
  width: 100%;
  height: auto;
  min-width: 980px;
}
.cluster-zone {
  fill: none;
  stroke: currentColor;
  stroke-opacity: 0.04;
  stroke-width: 1;
  stroke-dasharray: 4 5;
  transition: stroke-opacity 0.3s ease, stroke-dasharray 0.3s ease, stroke-width 0.3s ease;
  pointer-events: none;
}
.cluster-zone.zone-active { stroke-opacity: 0.18; stroke-dasharray: none; stroke-width: 1.5; }
.cluster-zone.ai { stroke-dasharray: 6 4; }
.cluster-zone.ai.zone-active { stroke-opacity: 0.28; stroke-dasharray: none; }
.cluster-label {
  font-family: var(--font-display);
  font-size: 19px;
  fill: var(--color-base-content);
  text-anchor: middle;
  font-weight: 500;
  letter-spacing: -0.01em;
  pointer-events: none;
}
.cluster-subtitle {
  font-family: var(--font-mono);
  font-size: 10px;
  fill: var(--color-base-content-secondary);
  text-anchor: middle;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.6;
  pointer-events: none;
}
.skill-line {
  stroke: var(--color-base-content);
  transition: stroke-opacity 0.25s ease, stroke 0.25s ease;
  pointer-events: none;
}
.skill-line.line-within { stroke-opacity: 0.05; stroke-width: 1; }
.skill-line.line-bridge { stroke-opacity: 0.14; stroke-width: 1.1; stroke-dasharray: 3 3; }
.skill-line.dim { stroke-opacity: 0.008; }
.skill-node-group {
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal-active .skill-node-group { opacity: 1; }
.skill-node-group.is-dimmed { opacity: 0.18; }
.skill-node { transition: fill 0.2s ease; }
.skill-node.dev { fill: var(--color-primary); }
.skill-node.ai { fill: color-mix(in oklab, var(--color-primary) 78%, #fff 22%); }
.skill-node.systems { fill: color-mix(in oklab, var(--color-primary) 88%, #000 12%); }
.skill-node.specialized { fill: color-mix(in oklab, var(--color-primary) 92%, #000 8%); }
.skill-node-group:hover .skill-node,
.skill-node-group.is-active .skill-node {
  fill: var(--color-primary-hover);
}
.node-halo {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 1;
  stroke-opacity: 0.15;
  pointer-events: none;
  animation: halo-pulse 3.6s ease-in-out infinite;
}
@keyframes halo-pulse {
  0%, 100% { stroke-opacity: 0.10; }
  50%      { stroke-opacity: 0.28; }
}
.skill-node-group:hover .node-halo,
.skill-node-group.is-active .node-halo {
  animation: none;
  stroke-opacity: 0.5;
}
.skill-label {
  font-family: var(--font-mono);
  font-size: 11px;
  fill: var(--color-base-content-secondary);
  dominant-baseline: central;
  transition: fill 0.2s ease, opacity 0.25s ease, font-weight 0.2s ease;
  pointer-events: none;
}
.skill-node-group:hover .skill-label,
.skill-label.label-active {
  fill: var(--color-primary);
  font-weight: 500;
}
.skill-node-group.is-dimmed .skill-label { opacity: 0.18; }
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
  .constellation-svg { width: 1000px; }
  .cluster-label { font-size: 15px; }
  .skill-label { font-size: 10px; }
}
</style>
