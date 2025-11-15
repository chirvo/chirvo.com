<template>
  <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-6 lg:p-8">
    <aside class="grid-flow-col items-center">
      <p>{{ footerContent.copyright }}</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a :href="footerLinks.github" target="_blank" rel="noopener noreferrer" class="text-dark mx-2">
        <Icon name="simple-icons:github" size="24" />
      </a>
      <a :href="footerLinks.linkedin" target="_blank" rel="noopener noreferrer" class="text-dark mx-2">
        <Icon name="simple-icons:linkedin" size="24" />
      </a>
    </nav>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const footerContent = computed(() => content.static.footer[lang.value]);
const footerLinks = content.shared.links;
</script>
