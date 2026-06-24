<template>
  <section class="bg-gradient-hero min-h-screen relative overflow-hidden flex items-center">
    <!-- Subtle grid + noise overlay -->
    <div class="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
    <div class="absolute inset-0 bg-noise pointer-events-none"></div>

    <!-- Top fade to header -->
    <div class="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-base-100 to-transparent pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-8 relative z-10 pt-32 pb-20">
      <div class="max-w-5xl">
        <!-- Eyebrow -->
        <div class="flex items-center gap-3 mb-8 hero-eyebrow">
          <span class="w-8 h-px bg-primary"></span>
          <span class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {{ availableLabel }}
          </span>
        </div>

        <!-- Headline -->
        <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8 hero-headline">
          <span class="block text-base-content">{{ firstName }}</span>
          <span class="block text-gradient">{{ lastName }}</span>
        </h1>

        <!-- Role -->
        <p class="font-mono text-sm md:text-base text-base-content-secondary tracking-wide mb-8 hero-role">
          {{ roleLabel }}
        </p>

        <!-- Subheadline -->
        <p class="text-lg md:text-xl text-base-content-secondary max-w-2xl leading-relaxed mb-12 hero-sub">
          {{ subheadline }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center gap-3 mb-16 hero-ctas">
          <a :href="'#projects'" class="btn btn-primary">
            {{ ctaPrimary }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a :href="'#contact'" class="btn btn-secondary">
            {{ ctaSecondary }}
          </a>
        </div>

        <!-- Meta row — quick proof points -->
        <div class="flex flex-wrap items-center gap-x-8 gap-y-4 hero-meta">
          <div class="flex items-center gap-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span class="font-mono text-xs text-base-content-secondary">
              <span class="text-base-content">{{ yearsLabel }}</span> {{ yearsText }}
            </span>
          </div>
          <div class="flex items-center gap-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span class="font-mono text-xs text-base-content-secondary">
              <span class="text-base-content">{{ specialtyLabel }}</span>
            </span>
          </div>
          <div class="flex items-center gap-3 ml-auto">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.label"
              class="text-base-content-secondary hover:text-primary transition-colors"
            >
              <Icon :name="link.icon" size="20" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-scroll">
      <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-base-content-muted">{{ scrollLabel }}</span>
      <div class="w-px h-10 bg-linear-to-b from-primary to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const hero = computed(() => content.static.hero[lang.value]);
const headline = computed(() => content.static.hero[lang.value].items[0]);
const firstName = computed(() => `${content.shared.name.first}`);
const lastName = computed(() => `${content.shared.name.last} ${content.shared.name.maiden[0]}.`);

const availableLabel = computed(() => hero.value.available);
const roleLabel = computed(() => hero.value.role);
const subheadline = computed(() => headline.value.subheadline);
const ctaPrimary = computed(() => headline.value.cta.primary);
const ctaSecondary = computed(() => headline.value.cta.secondary);
const yearsLabel = computed(() => hero.value.years);
const yearsText = computed(() => hero.value.yearsText);
const specialtyLabel = computed(() => hero.value.specialty);
const scrollLabel = computed(() => hero.value.scroll);

const socialLinks = [
  { label: 'GitHub', href: content.shared.links.github, icon: 'simple-icons:github' },
  { label: 'LinkedIn', href: content.shared.links.linkedin, icon: 'simple-icons:linkedin' },
  { label: 'Email', href: `mailto:${content.shared.links.email}`, icon: 'simple-icons:gmail' },
];
</script>

<style scoped>
.hero-eyebrow,
.hero-headline,
.hero-role,
.hero-sub,
.hero-ctas,
.hero-meta,
.hero-scroll {
  animation: hero-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.hero-eyebrow { animation-delay: 0.1s; }
.hero-headline { animation-delay: 0.2s; }
.hero-role     { animation-delay: 0.35s; }
.hero-sub      { animation-delay: 0.45s; }
.hero-ctas     { animation-delay: 0.55s; }
.hero-meta     { animation-delay: 0.7s; }
.hero-scroll   { animation-delay: 1.2s; }

@keyframes hero-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-eyebrow, .hero-headline, .hero-role, .hero-sub,
  .hero-ctas, .hero-meta, .hero-scroll {
    animation: none;
  }
}
</style>
