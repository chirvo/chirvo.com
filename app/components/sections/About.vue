<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ aboutContent.title }}</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://placehold.co/500" alt="Irving Bermudez" class="rounded-full mx-auto" />
        </div>
        <div>
          <p class="text-lg leading-relaxed whitespace-pre-line">{{ aboutContent.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content_new_schema';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const aboutContent = computed(() => content.static.about[lang.value]);
</script>