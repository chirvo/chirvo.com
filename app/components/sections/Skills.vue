<template>
  <section id="skills" ref="sectionRef" class="py-24 md:py-32 bg-base-200 relative overflow-hidden border-t border-border-subtle">
    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <!-- Section header -->
      <div class="max-w-2xl mb-12 md:mb-16 reveal-slow">
        <span class="section-eyebrow mb-6">{{ eyebrow }}</span>
        <h2 class="section-title mt-4">{{ competenciesContent.title }}</h2>
        <p class="mt-5 text-base text-base-content-secondary">{{ hintText }}</p>
      </div>

      <!-- Bento grid: one card per cluster -->
      <div class="bento-grid reveal-slow">
        <article
          v-for="(cl, i) in clusterCards"
          :key="cl.id"
          :class="['bento-card', `cluster-${cl.id}`, { 'bento-featured': cl.id === 'ai' }]"
        >
          <header class="bento-card-head">
            <div class="bento-card-meta">
              <span class="bento-card-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="bento-card-count">
                {{ cl.skills.length }} {{ technologiesLabel }}
              </span>
              <span v-if="cl.id === 'ai'" class="bento-card-badge">{{ sinceBadge }}</span>
            </div>
            <h3 class="bento-card-title">{{ cl.title[lang] }}</h3>
            <p class="bento-card-subtitle">{{ cl.subtitle[lang] }}</p>
          </header>

          <div class="bento-chips">
            <button
              v-for="sk in sortedSkills(cl)"
              :key="sk.name"
              type="button"
              :class="['bento-chip', `weight-${sk.weight}`, `cluster-${cl.id}`]"
              @click="activeSkill = sk.name"
            >
              <span class="bento-chip-name">{{ sk.name }}</span>
              <span
                v-if="sk.bridges && sk.bridges.length"
                class="bento-chip-dots"
                :aria-label="sk.bridges.length + ' bridges'"
              >{{ sk.bridges.length }}</span>
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- Detail popover -->
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
    ? 'Veinte y tantos anos de stack, ordenado por donde mas impacto he tenido. Toca cualquier tecnologia para ver el contexto.'
    : 'Twenty-plus years of stack, ordered by where I have had the most impact. Tap any technology for context.'
);
const sinceLabel = computed(() => (lang.value === 'es' ? 'Desde' : 'Since'));
const bridgesLabel = computed(() => (lang.value === 'es' ? 'Puentes' : 'Bridges'));
const closeLabel = computed(() => (lang.value === 'es' ? 'Cerrar' : 'Close'));
const technologiesLabel = computed(() => (lang.value === 'es' ? 'tecnologias' : 'technologies'));
const sinceBadge = computed(() => (lang.value === 'es' ? 'desde 2023' : 'since 2023'));

const freqLabel = {
  daily: { en: 'Daily', es: 'Diario' },
  weekly: { en: 'Weekly', es: 'Semanal' },
  monthly: { en: 'Monthly', es: 'Mensual' },
  occasional: { en: 'Occasional', es: 'Ocasional' },
};

const graph = computed(() =>
  buildSkillGraph(content.static.competencies.clusters, lang.value)
);
const nodesByName = computed(() => graph.value.nodesByName);

const clusterCards = computed(() =>
  content.static.competencies.clusters.map((cl) => ({
    id: cl.id,
    title: cl[lang.value].title,
    subtitle: cl[lang.value].subtitle,
    skills: cl.skills,
  }))
);

function sortedSkills(cl) {
  return [...cl.skills].sort((a, b) => b.weight - a.weight || a.name.localeCompare(b.name));
}

// Popover state
const activeSkill = ref(null);
const activeNode = computed(() => (activeSkill.value ? nodesByName.value[activeSkill.value] : null));
const activeCluster = computed(() => (activeNode.value ? activeNode.value.cluster : null));
const activeClusterTitle = computed(() => {
  if (!activeCluster.value) return '';
  const cl = clusterCards.value.find((c) => c.id === activeCluster.value);
  return cl ? cl.title : '';
});
const activeBridges = computed(() => {
  if (!activeNode.value) return [];
  return (activeNode.value.bridges || []).filter((b) => nodesByName.value[b]);
});

// Popover positioning
const popRef = ref(null);
const popoverStyle = ref({ display: 'none' });

function positionPopover() {
  if (!activeSkill.value || !activeNode.value || !popRef.value) {
    popoverStyle.value = { display: 'none' };
    return;
  }
  // Center horizontally, near the clicked chip
  const popW = popRef.value.offsetWidth || 320;
  const popH = popRef.value.offsetHeight || 200;
  const edge = 12;
  const target = event?.currentTarget;
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  if (target && target.getBoundingClientRect) {
    const r = target.getBoundingClientRect();
    cx = r.left + r.width / 2;
    cy = r.top + r.height / 2;
  }
  let left = cx - popW / 2;
  let top = cy - popH / 2;
  if (left < edge) left = edge;
  if (left + popW > window.innerWidth - edge) left = window.innerWidth - popW - edge;
  if (top < edge) top = edge;
  if (top + popH > window.innerHeight - edge) top = window.innerHeight - popH - edge;
  popoverStyle.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: 80,
  };
}

async function recomputePopover(e) {
  if (!activeSkill.value) {
    popoverStyle.value = { display: 'none' };
    return;
  }
  await nextTick();
  positionPopover(e);
}

watch(activeSkill, (n) => {
  if (n) recomputePopover();
  else popoverStyle.value = { display: 'none' };
});

function onResize() {
  if (activeSkill.value) recomputePopover();
}
function onScroll() {
  activeSkill.value = null;
}
window.addEventListener('resize', onResize);
window.addEventListener('scroll', onScroll, { passive: true });

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  window.removeEventListener('scroll', onScroll);
});

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.05 });
onMounted(() => { if (sectionRef.value) observe(sectionRef.value); });
</script>

<style scoped>
/* ── Bento grid ───────────────────────────────────────── */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1100px) {
  .bento-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
}

.bento-card {
  display: flex;
  flex-direction: column;
  background: var(--color-base-200);
  border: 1px solid var(--color-border-subtle);
  border-radius: 16px;
  padding: 24px 24px 28px;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
  min-height: 280px;
}
.bento-card:hover {
  border-color: var(--color-border-strong);
}

/* AI cluster gets featured treatment */
.bento-featured {
  background:
    linear-gradient(140deg,
      var(--color-base-200) 0%,
      color-mix(in oklab, var(--color-primary) 8%, var(--color-base-200)) 100%);
  border-color: color-mix(in oklab, var(--color-primary) 35%, var(--color-border-subtle));
  box-shadow: 0 0 0 1px color-mix(in oklab, var(--color-primary) 12%, transparent);
}
.bento-featured:hover {
  border-color: var(--color-primary);
}

.bento-card-head {
  margin-bottom: 20px;
}
.bento-card-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-base-content-muted);
  margin-bottom: 10px;
}
.bento-card-num { color: var(--color-primary); font-weight: 500; }
.bento-card-count { opacity: 0.7; }
.bento-featured .bento-card-num { color: var(--color-primary); }
.bento-card-badge {
  margin-left: auto;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--color-primary);
  color: var(--color-base-100);
  font-weight: 600;
  letter-spacing: 0.1em;
}
.bento-card-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--color-base-content);
  margin-bottom: 6px;
}
.bento-card-subtitle {
  font-size: 13px;
  line-height: 1.45;
  color: var(--color-base-content-secondary);
}

/* ── Chips ─────────────────────────────────────────────── */
.bento-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.bento-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-weight: 500;
  border-radius: 999px;
  border: 1px solid;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  letter-spacing: 0.01em;
  line-height: 1;
  white-space: nowrap;
}
.bento-chip-name { display: inline-block; }

/* Weight-driven sizing */
.bento-chip.weight-5 {
  font-size: 12.5px;
  padding: 7px 12px;
  border-color: var(--color-primary);
  background: color-mix(in oklab, var(--color-primary) 14%, var(--color-base-200));
  color: var(--color-base-content);
}
.bento-chip.weight-4 {
  font-size: 11.5px;
  padding: 5px 10px;
  border-color: var(--color-border-strong);
  background: var(--color-base-300);
  color: var(--color-base-content);
}
.bento-chip.weight-3 {
  font-size: 11px;
  padding: 4px 9px;
  border-color: var(--color-border-subtle);
  background: color-mix(in oklab, var(--color-base-300) 70%, transparent);
  color: var(--color-base-content-secondary);
}
.bento-chip.weight-2 {
  font-size: 10.5px;
  padding: 3px 8px;
  border-color: var(--color-border-subtle);
  background: transparent;
  color: var(--color-base-content-muted);
}

.bento-chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-primary-muted);
  transform: translateY(-1px);
}

/* Bridge count dot */
.bento-chip-dots {
  font-size: 9px;
  font-weight: 600;
  background: var(--color-primary);
  color: var(--color-base-100);
  padding: 1px 5px;
  border-radius: 999px;
  line-height: 1.2;
  min-width: 14px;
  text-align: center;
}
.bento-chip.weight-2 .bento-chip-dots,
.bento-chip.weight-3 .bento-chip-dots {
  background: color-mix(in oklab, var(--color-primary) 70%, var(--color-base-400));
}

/* ── Popover ──────────────────────────────────────────── */
.skill-popover {
  width: 320px;
  max-width: calc(100vw - 24px);
  background: var(--color-base-200);
  border: 1px solid var(--color-border-strong);
  border-radius: 14px;
  padding: 18px 20px 16px;
  box-shadow:
    0 0 0 1px var(--color-primary-muted),
    0 18px 48px -16px rgba(0, 0, 0, 0.55);
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
.pop-bridges {
  border-top: 1px solid var(--color-border-subtle);
  padding-top: 12px;
}
.pop-bridges-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-base-content-muted);
  margin-bottom: 8px;
}
.pop-bridge-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
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
</style>
