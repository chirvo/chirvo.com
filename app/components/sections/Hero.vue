<template>
  <section class="hero bg-base-100 min-h-screen bg-pattern-diagonal">
    <div class="hero-content text-left flex-col items-start">
      <h1 class="text-2xl mb-10">{{ heroGreeting }}</h1>
      <div class="carousel w-6xl">
        <div div v-for="content, index in heroContent" :key="index" :id="'hero-item-' + index"
          class="carousel-item w-6xl">
          <div>
            <h2 class="text-6xl font-bold mb-10">{{ content.headline }}</h2>
            <p class="text-2xl mb-10">{{ content.subheadline }}</p>
            <div class="flex mt-10 gap-2 justify-center">
              <a href="#projects" class="btn btn-primary">{{ content.cta.primary }}</a>
              <a href="#contact" class="btn btn-secondary">{{ content.cta.secondary }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center gap-2 py-2">
        <a div v-for="content, index in heroContent" :key="index" :href="'#hero-item-' + index"
          class="btn btn-xs btn-circle"></a>
      </div>
      <div>
        <div class="flex gap-2 justify-center w-full">
          <a :href="heroLinks.github" target="_blank" rel="noopener noreferrer"
            class="text-dark hover:text-primary mx-4">GitHub</a>
          <a :href="heroLinks.linkedin" target="_blank" rel="noopener noreferrer"
            class="text-dark hover:text-primary mx-4">LinkedIn</a>
          <a :href="'mailto:' + heroLinks.email" class="text-dark hover:text-primary mx-4">Email</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
// import { content } from '~/lib/content';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
//TODO: Maybe make rand computed()?
const rand = Math.floor(Math.random() * 5);
const heroGreeting = computed(() => content.static.hero.greeting[lang.value]);
const heroContent = computed(() => content.static.hero.items[lang.value]);
const heroLinks = content.shared.links;
</script>