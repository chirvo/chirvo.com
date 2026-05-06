<template>
  <section id="contact" class="py-24 bg-gradient-hero relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
    <div class="bg-glow-orb" style="top: 15%; left: 15%;"></div>
    <div class="bg-glow-orb" style="bottom: 15%; right: 15%; background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 animate-slide-up">
        <h2 class="section-title text-gradient">{{ contactContent.title }}</h2>
        <p class="section-subtitle mx-auto"></p>
      </div>

      <!-- Contact info -->
      <div class="max-w-3xl mx-auto">
        <p class="text-lg md:text-xl leading-relaxed text-base-content-secondary mb-10">{{ contactContent.description }}</p>
        <a :href="'mailto:' + contactEmail" 
           class="inline-flex items-center gap-4 px-8 py-4 bg-gradient-primary hover:bg-opacity-90 transition-all duration-300 rounded-xl text-white font-bold text-xl shadow-lg glow-effect hover:shadow-xl hover:scale-105">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.85 5.2L12 21l3.15-7.8L21 8h-18zm8.2-3c0 .34-.17.66-.43.86L9.15 10.1c-.24.24-.36.58-.36.94v2.12c0 .36.12.7.36.94l4.62 4.62c.2.2.47.31.75.31s.55-.11.75-.31l6.08-6.08c.2-.2.32-.54.32-.94s-.12-.74-.32-.94L11.2 5c-.2-.2-.47-.3-.75-.3s-.55.11-.75.31z"/>
          </svg>
          {{ contactEmail }}
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
const contactContent = computed(() => content.static.contact[lang.value]);
const contactEmail = content.shared.links.email;
</script>