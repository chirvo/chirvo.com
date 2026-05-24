<template>
  <section id="contact" class="py-24 md:py-32 bg-base-100 relative overflow-hidden">
    <div class="bg-glow-orb" style="top: 10%; left: 25%;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20 animate-slide-up">
        <h2 class="section-title">{{ contactContent.title }}</h2>
        <div class="divider-gold w-24 mx-auto mt-6"></div>
      </div>

      <!-- Contact info -->
      <div class="max-w-xl mx-auto text-center">
        <p class="text-base md:text-lg leading-relaxed text-base-content-secondary mb-10">{{ contactContent.description }}</p>
        <a :href="'mailto:' + contactEmail" 
           class="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover transition-all duration-200 text-base-100 font-medium tracking-wide">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
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