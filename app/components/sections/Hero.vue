<template>
  <section class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="mx-auto px-6">
        <h1 class="text-4xl md:text-6xl font-semibold text-dark">{{ heroContent.name }}</h1>
        <h2 class="text-2xl md:text-3xl text-dark mt-4">{{ heroContent.title }}</h2>
        <p class="text-lg md:text-xl text-dark mt-8 max-w-3xl mx-auto">{{ heroContent.pitch }}</p>
        <div class="mt-8">
          <a :href="heroLinks.github" target="_blank" rel="noopener noreferrer"
            class="text-dark hover:text-primary mx-4">GitHub</a>
          <a :href="heroLinks.linkedin" target="_blank" rel="noopener noreferrer"
            class="text-dark hover:text-primary mx-4">LinkedIn</a>
          <a :href="'mailto:' + heroLinks.email" class="text-dark hover:text-primary mx-4">Email</a>
        </div>
        <div class="flex mt-8 gap-2 justify-center">
          <a href="#projects" class="btn btn-primary">{{
            heroContent.cta.primary }}</a>
          <a href="#contact" class="btn btn-secondary">{{
            heroContent.cta.secondary }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
// import { content } from '~/lib/content';
import { content } from '~/lib/content_new_schema';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const heroContent = computed(() => content.static.hero[lang.value]);
const heroLinks = content.shared.links;
</script>