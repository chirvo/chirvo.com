<template>
  <section class="hero-glow bg-gradient-hero min-h-screen relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
    <div class="bg-glow-orb" style="top: -20%; left: -10%;"></div>
    <div class="bg-glow-orb" style="bottom: -20%; right: -10%; background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);"></div>
    
    <div class="container mx-auto px-6 py-24 relative z-10">
      <!-- Animated greeting -->
      <p class="text-xl md:text-2xl text-base-content-secondary mb-8 animate-slide-up" style="animation-delay: 0.1s;">
        {{ heroGreeting }}
      </p>

      <!-- Main carousel with gradient text -->
      <div class="carousel carousel-auto" :class="widthClasses">
        <div v-for="(content, index) in heroContent" :key="index" class="carousel-item flex-col items-start"
          :class="widthClasses">
          <h1 class="text-gradient text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up" 
              style="animation-delay: 0.2s;">
            {{ content.headline }}
          </h1>
          <p class="text-lg md:text-xl text-base-content-secondary max-w-3xl animate-slide-up" 
              style="animation-delay: 0.3s;">
            {{ content.subheadline }}
          </p>
          <div class="flex flex-wrap gap-4 mt-10 animate-slide-up" style="animation-delay: 0.4s;">
            <a :href="'#projects'" class="btn btn-primary glow-effect">{{ content.cta.primary }}</a>
            <a :href="'#contact'" class="btn btn-secondary">{{ content.cta.secondary }}</a>
          </div>
        </div>
      </div>

      <!-- Social links -->
      <div class="flex flex-wrap gap-6 justify-center mt-16 animate-slide-up" style="animation-delay: 0.5s;">
        <a :href="heroLinks.github" target="_blank" rel="noopener noreferrer"
          class="text-base-content hover:text-primary transition-colors duration-300 font-semibold flex items-center gap-2 group">
          <svg class="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.953-.399 3.001-.404 1.05.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.908 1.235 3.221 0 4.609-2.807 5.604-5.479 5.901.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.192-6.086 8.192-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a :href="heroLinks.linkedin" target="_blank" rel="noopener noreferrer"
          class="text-base-content hover:text-primary transition-colors duration-300 font-semibold flex items-center gap-2 group">
          <svg class="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-6h3v6zm-1.5-11.25c-.621 0-1.125.504-1.125 1.125v1.75c0 .621.504 1.125 1.125 1.125h1.75c.621 0 1.125-.504 1.125-1.125v-1.75c0-.621-.504-1.125-1.125-1.125h-1.75zm6.5 0h-3v-6h3v6zm-1.5-11.25c-.621 0-1.125.504-1.125 1.125v1.75c0 .621.504 1.125 1.125 1.125h1.75c.621 0 1.125-.504 1.125-1.125v-1.75c0-.621-.504-1.125-1.125-1.125h-1.75z"/>
          </svg>
          LinkedIn
        </a>
        <a :href="'mailto:' + heroLinks.email"
          class="text-base-content hover:text-primary transition-colors duration-300 font-semibold flex items-center gap-2 group">
          <svg class="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.85 5.2L12 21l3.15-7.8L21 8h-18zm8.2-3c0 .34-.17.66-.43.86L9.15 10.1c-.24.24-.36.58-.36.94v2.12c0 .36.12.7.36.94l4.62 4.62c.2.2.47.31.75.31s.55-.11.75-.31l6.08-6.08c.2-.2.32-.54.32-.94s-.12-.74-.32-.94L11.2 5c-.2-.2-.47-.3-.75-.3s-.55.11-.75.31z"/>
          </svg>
          Email
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const rand = Math.floor(Math.random() * 5);
const heroGreeting = computed(() => content.static.hero.greeting[lang.value]);
const heroContent = computed(() => content.static.hero.items[lang.value]);
const heroLinks = content.shared.links;
const widthClasses = "w-sm md:w-2xl lg:w-2xl xl:w-4xl 2xl:w-6xl";
</script>