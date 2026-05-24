<template>
  <section id="about" class="py-24 md:py-32 bg-base-100 relative overflow-hidden">
    <div class="bg-glow-orb" style="top: 10%; left: 10%;"></div>
    
    <div class="container mx-auto px-6 relative z-10 flex flex-col items-center">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20 animate-slide-up">
        <h2 class="section-title">{{ aboutContent.title }}</h2>
        <div class="divider-gold w-24 mx-auto mt-6"></div>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl">
        <!-- Image -->
        <div class="flex-shrink-0">
          <div class="relative">
            <img src="https://placehold.co/400" alt="Irving Bermúdez" 
                 class="w-48 h-48 md:w-64 md:h-64 object-cover border-2 border-base-300 rounded-sm"
                 style="background: linear-gradient(135deg, var(--color-base-300), var(--color-base-400));">
            <div class="absolute -bottom-3 -right-3 w-12 h-12 md:w-16 md:h-16 border-2 border-primary/30 rounded-sm"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 animate-slide-up">
          <p class="text-base md:text-lg leading-relaxed whitespace-pre-line text-base-content-secondary">
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