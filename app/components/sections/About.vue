<template>
  <section id="about" ref="sectionRef" class="py-24 md:py-32 bg-base-100 relative overflow-hidden">
    <div class="bg-glow-orb" data-parallax-orb="0.03" style="top: 10%; left: 10%;"></div>

    <div class="container mx-auto px-6 relative z-10 flex flex-col items-center">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20 reveal-slow">
        <h2 class="section-title">{{ aboutContent.title }}</h2>
        <div class="divider-gold w-24 mx-auto mt-6"></div>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl">
        <!-- Image -->
        <div class="flex-shrink-0 reveal-slow">
          <div class="relative">
            <img src="https://placehold.co/400" alt="Irving Bermúdez"
                 class="w-48 h-48 md:w-64 md:h-64 object-cover border-2 border-base-300 rounded-sm"
                 style="background: linear-gradient(135deg, var(--color-base-300), var(--color-base-400));">
            <div class="absolute -bottom-3 -right-3 w-12 h-12 md:w-16 md:h-16 border-2 border-primary/30 rounded-sm"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 reveal-slow">
          <p class="text-base md:text-lg leading-relaxed whitespace-pre-line text-base-content-secondary">
            {{ aboutContent.description }}
          </p>
        </div>
      </div>

      <!-- Stats row -->
      <div ref="statsRef" class="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl reveal-slow">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="font-display text-3xl md:text-4xl text-primary font-light mb-1">
            {{ stat.prefix }}{{ stat.value }}{{ stat.suffix }}
          </div>
          <p class="text-xs uppercase tracking-wider text-base-content-secondary">{{ stat.label }}</p>
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
import { useParallaxOrbs } from '~/composables/useParallaxOrbs';

const { lang } = useLang();
const aboutContent = computed(() => content.static.about[lang.value]);
useParallaxOrbs();

// Observe section container to reveal all children
const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.1 });

onMounted(() => {
  if (sectionRef.value) observe(sectionRef.value);
});

// Animated counters
const counters = ref([
  { value: 0, target: 20, suffix: '+', prefix: '', duration: 2000 },
  { value: 0, target: 50, suffix: '+', prefix: '', duration: 2200 },
  { value: 0, target: 30, suffix: '+', prefix: '', duration: 2400 },
  { value: 0, target: 25, suffix: '+', prefix: '', duration: 2600 },
]);

let counterStart = false;

const stats = computed(() => {
  const labels = {
    en: ['Years of experience', 'Projects completed', 'Technologies mastered', 'Happy clients'],
    es: ['Años de experiencia', 'Proyectos completados', 'Tecnologías dominadas', 'Clientes satisfechos'],
  };
  return counters.value.map((c, i) => ({
    label: labels[lang.value][i],
    value: c.value,
    suffix: c.suffix,
    prefix: c.prefix,
  }));
});

function animateCounters() {
  if (counterStart) return;
  counterStart = true;

  counters.value.forEach((c) => {
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / c.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      c.value = Math.round(eased * c.target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  });
}

const statsRef = ref(null);
const statsObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.disconnect();
    }
  }
}, { threshold: 0.3 });

onMounted(() => {
  if (statsRef.value) {
    statsObserver.observe(statsRef.value);
  }
});
</script>
