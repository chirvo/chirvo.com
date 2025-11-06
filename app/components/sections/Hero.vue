<template>
  <section id="hero" class="h-screen flex items-center justify-center text-center bg-dark">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl md:text-6xl font-bold text-light">{{ content.hero.name }}</h1>
      <h2 class="text-2xl md:text-4xl text-light mt-4">{{ content.hero.title }}</h2>
      <p class="text-lg md:text-xl text-light mt-8 max-w-3xl mx-auto">{{ content.hero.pitch }}</p>
      <div class="mt-8">
        <a href="#projects" class="bg-primary text-light font-bold py-3 px-6 rounded-full mx-2">{{ content.hero.cta.primary }}</a>
        <a href="#contact" class="bg-transparent border-2 border-primary text-primary font-bold py-3 px-6 rounded-full mx-2">{{ content.hero.cta.secondary }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { content } from '~/lib/content';
</script>