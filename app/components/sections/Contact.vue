<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-12">{{ contactContent.title }}</h2>
      <p class="text-lg mb-8 max-w-3xl mx-auto whitespace-pre-line">{{ contactContent.description }}</p>
      <a :href="'mailto:' + contactEmail" class="text-2xl text-primary font-bold hover:underline">{{
        contactEmail }}</a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content_new_schema';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const contactContent = computed(() => content.static.contact[lang.value]);
const contactEmail = content.shared.links.email;
</script>