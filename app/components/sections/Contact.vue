<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-12">{{ contactContent.title }}</h2>
      <p class="text-lg mb-8 max-w-3xl mx-auto whitespace-pre-line">{{ contactContent.description }}</p>
      <a :href="'mailto:' + contactContent.email" class="text-2xl text-primary font-bold hover:underline">{{ contactContent.email }}</a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const contactContent = computed(() => content[lang.value].contact);
</script>