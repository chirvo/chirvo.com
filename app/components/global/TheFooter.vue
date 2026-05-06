<template>
  <footer class="relative bg-base-100 border-t border-base-300">
    <!-- Background glow -->
    <div class="absolute inset-0 bg-gradient-hero opacity-50"></div>

    <div class="container mx-auto px-6 py-8 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Copyright -->
        <p class="text-base-content-secondary text-sm">{{ footerContent.copyright }}</p>

        <!-- Social links -->
        <nav class="flex items-center gap-6">
          <a :href="footerLinks.github" target="_blank" rel="noopener noreferrer"
             class="text-base-content hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
            <Icon name="simple-icons:github" size="24" />
          </a>
          <a :href="footerLinks.linkedin" target="_blank" rel="noopener noreferrer"
             class="text-base-content hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
            <Icon name="simple-icons:linkedin" size="24" />
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
