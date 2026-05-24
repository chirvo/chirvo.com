<template>
  <footer class="relative bg-base-200 border-t border-base-300">
    <div class="container mx-auto px-6 py-8 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Copyright -->
        <p class="text-base-content-secondary text-xs">{{ footerContent.copyright }}</p>

        <!-- Social links -->
        <nav class="flex items-center gap-4">
          <a :href="footerLinks.github" target="_blank" rel="noopener noreferrer"
             class="text-base-content-secondary hover:text-primary transition-colors duration-200 p-2">
            <Icon name="simple-icons:github" size="20" />
          </a>
          <a :href="footerLinks.linkedin" target="_blank" rel="noopener noreferrer"
             class="text-base-content-secondary hover:text-primary transition-colors duration-200 p-2">
            <Icon name="simple-icons:linkedin" size="20" />
          </a>
        </nav>
      </div>
    </div>
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
