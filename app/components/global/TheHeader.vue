<template>
  <header class="glass sticky top-0 z-50 border-b border-base-300/50">
    <nav class="container mx-auto px-6 py-5 flex justify-between items-center">
      <a href="#" class="font-display text-xl md:text-2xl font-medium text-base-content tracking-wide">{{ fullName }}</a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li><router-link to="#about" class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">About</router-link></li>
        <li><router-link to="#skills" class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">Skills</router-link></li>
        <li><router-link to="#projects" class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">Projects</router-link></li>
        <li><router-link to="#experience" class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">Experience</router-link></li>
        <li><router-link to="#contact" class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider font-medium">Contact</router-link></li>

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
        <li><a href="#about" @click="toggleMenu" class="block py-2 text-base-content-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider">About</a></li>
        <li><a href="#skills" @click="toggleMenu" class="block py-2 text-base-content-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider">Skills</a></li>
        <li><a href="#projects" @click="toggleMenu" class="block py-2 text-base-content-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider">Projects</a></li>
        <li><a href="#experience" @click="toggleMenu" class="block py-2 text-base-content-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider">Experience</a></li>
        <li><a href="#contact" @click="toggleMenu" class="block py-2 text-base-content-secondary hover:text-primary transition-colors text-sm uppercase tracking-wider">Contact</a></li>

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

const isOpen = ref(false);
const { lang, setLang } = useLang();
const { name } = content.shared;
const fullName = `${name.first} ${name.middle[0]}. ${name.last} ${name.maiden[0]}.`;

// Toggle mobile menu
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>
