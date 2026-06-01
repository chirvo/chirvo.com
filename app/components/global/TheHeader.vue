<template>
  <header class="glass sticky top-0 z-50 border-b border-base-300/50">
    <nav class="container mx-auto px-6 py-5 flex justify-between items-center">
      <a href="#" class="font-display text-xl md:text-2xl font-medium text-base-content tracking-wide">{{ fullName }}</a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="relative inline-block text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
            :class="{ 'text-primary': activeSection === link.id }"
          >
            {{ link.label }}
            <span
              v-if="activeSection === link.id"
              class="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary transition-all duration-300"
            />
          </a>
        </li>

        <!-- Language toggle -->
        <div class="flex items-center gap-2 ml-4 pl-4 border-l border-base-400">
          <button @click="setLang('en')" :class="{ 'text-primary font-medium': lang === 'en' }" class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-xs uppercase tracking-wider">EN</button>
          <span class="text-base-content-secondary/50">/</span>
          <button @click="setLang('es')" :class="{ 'text-primary font-medium': lang === 'es' }" class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-xs uppercase tracking-wider">ES</button>
        </div>
      </ul>

      <!-- Mobile menu button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-base-content hover:text-primary transition-colors p-2">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-lg border-t border-base-300">
      <ul class="px-6 py-6 space-y-4">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click="toggleMenu"
            class="block py-2 text-base-content-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider"
            :class="{ 'text-primary': activeSection === link.id }"
          >
            {{ link.label }}
          </a>
        </li>

        <!-- Language toggle -->
        <li class="pt-4 border-t border-base-300">
          <div class="flex items-center justify-center gap-2">
            <button @click="setLang('en')" :class="{ 'text-primary font-medium': lang === 'en' }" class="text-base-content-secondary hover:text-primary transition-colors text-xs uppercase tracking-wider">EN</button>
            <span class="text-base-content-secondary/50">/</span>
            <button @click="setLang('es')" :class="{ 'text-primary font-medium': lang === 'es' }" class="text-base-content-secondary hover:text-primary transition-colors text-xs uppercase tracking-wider">ES</button>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useScrollProgress } from '~/composables/useScrollProgress';

const isOpen = ref(false);
const { lang, setLang } = useLang();
const { name } = content.shared;
const fullName = `${name.first} ${name.middle[0]}. ${name.last} ${name.maiden[0]}.`;

const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'];
const { activeSection } = useScrollProgress(sectionIds);

const navLinks = computed(() => {
  const links = {
    en: [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    es: [
      { id: 'about', label: 'Sobre Mí' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'experience', label: 'Experiencia' },
      { id: 'contact', label: 'Contacto' },
    ],
  };
  return links[lang.value] || links.en;
});

// Toggle mobile menu
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>
