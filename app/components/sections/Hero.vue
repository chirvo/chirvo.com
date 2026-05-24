<template>
  <section class="hero-glow bg-gradient-hero min-h-screen relative overflow-hidden flex items-center justify-center">
    <!-- Subtle grid -->
    <div class="absolute inset-0 bg-grid-pattern opacity-40"></div>
    <div class="bg-glow-orb" style="top: -10%; left: 20%;"></div>
    <div class="bg-glow-orb" style="bottom: -10%; right: 20%;"></div>
    
    <div class="container mx-auto px-6 py-16 md:py-24 relative z-10 flex flex-col items-center">
      <div class="max-w-3xl flex flex-col items-center text-center gap-4">
        <!-- Greeting -->
        <p class="text-sm md:text-base text-base-content-secondary animate-slide-up font-mono tracking-widest uppercase" style="animation-delay: 0.1s;">
          {{ heroGreeting }}
        </p>

        <!-- Main headline -->
        <h1 class="font-display text-3xl md:text-5xl lg:text-6xl font-light text-base-content animate-slide-up leading-tight"
            style="animation-delay: 0.2s;">
          {{ heroContent[0].headline }}
        </h1>

        <p class="text-base md:text-lg text-base-content-secondary animate-slide-up leading-relaxed"
            style="animation-delay: 0.3s;">
          {{ heroContent[0].subheadline }}
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-wrap justify-center gap-4 animate-slide-up"
            style="animation-delay: 0.4s;">
          <a :href="'#projects'" class="btn btn-primary">{{ heroContent[0].cta.primary }}</a>
          <a :href="'#contact'" class="btn btn-secondary">{{ heroContent[0].cta.secondary }}</a>
        </div>

        <!-- Social links -->
        <div class="flex flex-wrap justify-center gap-4 animate-slide-up" style="animation-delay: 0.5s;">
          <a :href="heroLinks.github" target="_blank" rel="noopener noreferrer"
            class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider flex items-center gap-2">
            <Icon name="simple-icons:github" size="18" />
            GitHub
          </a>
          <a :href="heroLinks.linkedin" target="_blank" rel="noopener noreferrer"
            class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider flex items-center gap-2">
            <Icon name="simple-icons:linkedin" size="18" />
            LinkedIn
          </a>
          <a :href="'mailto:' + heroLinks.email"
            class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider flex items-center gap-2">
            <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const heroGreeting = computed(() => content.static.hero.greeting[lang.value]);
const heroContent = computed(() => content.static.hero.items[lang.value]);
const heroLinks = content.shared.links;
</script>