<template>
  <div class="min-h-screen bg-base-100">
    <TheHeader />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { useHead } from '#app';
import { computed } from 'vue';
import TheHeader from '~/components/global/TheHeader.vue';
import TheFooter from '~/components/global/TheFooter.vue';
import Hero from '~/components/sections/Hero.vue';
import About from '~/components/sections/About.vue';
import Skills from '~/components/sections/Skills.vue';
import Projects from '~/components/sections/Projects.vue';
import Experience from '~/components/sections/Experience.vue';
import Contact from '~/components/sections/Contact.vue';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();

useHead({
  title: 'Irving A. Bermúdez S. - Full-Stack Engineer & Systems Architect',
  htmlAttrs: {
    lang: computed(() => lang.value),
    style: `scroll-behavior: smooth; direction: ltr;`
  },
  meta: [
    { name: 'description', content: 'Personal portfolio website for Irving Bermudez, a Full-Stack Engineer and Systems Architect with over 20 years of experience.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=hide' },
    { property: 'og:title', content: 'Irving A. Bermúdez S. - Full-Stack Engineer & Systems Architect' },
    { property: 'og:description', content: 'Personal portfolio website for Irving Bermudez, a Full-Stack Engineer and Systems Architect with over 20 years of experience.' },
    { property: 'og:type', content: 'website' },
    { property: 'twitter:card', content: 'summary_large_image' }
  ]
});
</script>