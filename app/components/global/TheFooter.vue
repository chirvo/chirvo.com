<template>
  <footer class="bg-light py-6">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div>
        <p class="text-dark">{{ footerContent.copyright }}</p>
      </div>
      <div>
        <a :href="footerContent.links.github" target="_blank" rel="noopener noreferrer" class="text-dark mx-2">
          <Icon name="simple-icons:github" size="24" />
        </a>
        <a :href="footerContent.links.linkedin" target="_blank" rel="noopener noreferrer" class="text-dark mx-2">
          <Icon name="simple-icons:linkedin" size="24" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const footerContent = computed(() => content[lang.value].footer);
</script>
