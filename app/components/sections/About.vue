<template>
  <section id="about" class="py-24 bg-base-100 relative overflow-hidden">
    <!-- Background glow effects -->
    <div class="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 animate-slide-up">
        <h2 class="section-title text-gradient">{{ aboutContent.title }}</h2>
        <p class="section-subtitle"></p>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Image container with glow effect -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
          <img src="https://placehold.co/500" alt="Irving Bermudez" 
               class="relative z-10 rounded-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
               style="background: linear-gradient(135deg, #1e1e2e, #2a2a40);">
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-base-300 rounded-xl flex items-center justify-center animate-pulse-slow">
            <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 15.5zm6-9.5c0 5.23-4.27 9.5-9.5 9.5S9 11.23 9 6c0-2.07.84-4.03 2.3-5.5L12 .5l2.7 0C16.16.97 17 2.93 17 5z"/>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="animate-slide-up">
          <p class="text-lg md:text-xl leading-relaxed whitespace-pre-line text-base-content-secondary">
            {{ aboutContent.description }}
          </p>
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
const aboutContent = computed(() => content.static.about[lang.value]);
</script>