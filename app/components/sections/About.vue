<template>
  <section id="about" ref="sectionRef" class="py-24 md:py-32 bg-base-100 relative overflow-hidden">
    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <!-- Section header -->
      <div class="max-w-2xl mb-16 md:mb-20 reveal-slow">
        <span class="section-eyebrow mb-6">{{ eyebrow }}</span>
        <h2 class="section-title mt-4">{{ aboutContent.title }}</h2>
      </div>

      <div class="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 max-w-6xl">
        <!-- Monogram avatar + meta -->
        <div class="reveal-slow">
          <div class="aspect-square w-full max-w-[280px] relative">
            <div
              class="absolute inset-0 rounded-2xl border border-border-subtle bg-base-200 flex items-center justify-center overflow-hidden"
            >
              <!-- ponytail: monogram instead of a real headshot — looks intentional, not placeholder -->
              <span class="font-display text-[8rem] leading-none text-gradient font-medium select-none">IB</span>
            </div>
            <div class="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-primary/30 -z-10"></div>
          </div>

          <!-- Quick meta -->
          <div class="mt-6 space-y-2 font-mono text-xs text-base-content-secondary">
            <div class="flex items-center gap-2">
              <span class="w-1 h-1 rounded-full bg-primary"></span>
              <span>Caracas, Venezuela · Remote</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-1 h-1 rounded-full bg-primary"></span>
              <span>UCAB · Ing. en Informática</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-1 h-1 rounded-full bg-primary"></span>
              <span>EN / ES · native / native</span>
            </div>
          </div>
        </div>

        <!-- Narrative -->
        <div class="reveal-slow">
          <div class="text-base md:text-lg leading-[1.75] text-base-content-secondary space-y-5 whitespace-pre-line">
            <p v-for="(para, i) in paragraphs" :key="i">{{ para }}</p>
          </div>
        </div>
      </div>

      <!-- Stats row -->
      <div ref="statsRef" class="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-subtle max-w-5xl reveal-slow">
        <div v-for="(stat, i) in stats" :key="stat.label" class="bg-base-100 p-6 md:p-8">
          <div class="font-display text-4xl md:text-5xl text-gradient font-medium mb-2">
            {{ stat.prefix }}{{ stat.value }}{{ stat.suffix }}
          </div>
          <p class="text-xs font-mono uppercase tracking-wider text-base-content-secondary">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useSectionReveal } from '~/composables/useScrollReveal';

const { lang } = useLang();
const aboutContent = computed(() => content.static.about[lang.value]);
const paragraphs = computed(() => aboutContent.value.description.split(/\n+/).filter(Boolean));
const eyebrow = computed(() => lang.value === 'es' ? '01 — Sobre Mí' : '01 — About');

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.1 });
onMounted(() => { if (sectionRef.value) observe(sectionRef.value); });

// Animated counters
const counters = ref([
  { value: 0, target: 20, suffix: '+', duration: 1800 },
  { value: 0, target: 5,  suffix: '',  duration: 1800 },
  { value: 0, target: 40, suffix: '+', duration: 2000 },
  { value: 0, target: 150, suffix: '+', duration: 2200 },
]);

const stats = computed(() => {
  const labels = {
    en: ['Years building systems', 'Companies co-founded', 'Technologies in stack', 'Nodes managed'],
    es: ['Años construyendo', 'Empresas cofundadas', 'Tecnologías en stack', 'Nodos gestionados'],
  };
  return counters.value.map((c, i) => ({
    label: labels[lang.value][i],
    value: c.value,
    suffix: c.suffix,
  }));
});

const statsRef = ref(null);
onMounted(() => {
  if (typeof window === 'undefined' || !statsRef.value) return;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      counters.value.forEach((c) => {
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / c.duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          c.value = Math.round(eased * c.target);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      io.disconnect();
    }
  }, { threshold: 0.3 });
  io.observe(statsRef.value);
});
</script>
