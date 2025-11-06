<template>
  <section id="hero" class="h-screen flex items-center justify-center text-center bg-light">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl md:text-6xl font-bold text-dark">{{ heroContent.name }}</h1>
      <h2 class="text-2xl md:text-4xl text-dark mt-4">{{ heroContent.title }}</h2>
      <p class="text-lg md:text-xl text-dark mt-8 max-w-3xl mx-auto">{{ heroContent.pitch }}</p>
      <div class="mt-8">
        <a :href="heroContent.links.github" target="_blank" rel="noopener noreferrer" class="text-dark hover:text-primary mx-4">GitHub</a>
        <a :href="heroContent.links.linkedin" target="_blank" rel="noopener noreferrer" class="text-dark hover:text-primary mx-4">LinkedIn</a>
        <a :href="'mailto:' + heroContent.links.email" class="text-dark hover:text-primary mx-4">Email</a>
      </div>
      <div class="mt-8">
        <a href="#projects" class="bg-primary text-dark font-bold py-3 px-6 rounded-full mx-2">{{ heroContent.cta.primary }}</a>
        <a href="#contact" class="bg-transparent border-2 border-primary text-primary font-bold py-3 px-6 rounded-full mx-2">{{ heroContent.cta.secondary }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const heroContent = computed(() => content[lang.value].hero);
</script>