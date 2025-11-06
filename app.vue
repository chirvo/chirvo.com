<template>
  <div>
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
import TheHeader from '~/components/global/TheHeader.vue';
import TheFooter from '~/components/global/TheFooter.vue';
import Hero from '~/components/sections/Hero.vue';
import About from '~/components/sections/About.vue';
import Skills from '~/components/sections/Skills.vue';
import Projects from '~/components/sections/Projects.vue';
import Experience from '~/components/sections/Experience.vue';
import Contact from '~/components/sections/Contact.vue';

useHead({
  title: 'Irving Bermudez - Full-Stack Engineer & Systems Architect',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Personal portfolio website for Irving Bermudez, a Full-Stack Engineer and Systems Architect with over 20 years of experience.' }
  ]
});
</script>
