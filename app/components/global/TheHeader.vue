<template>
  <header class="glass sticky top-0 z-50 shadow-lg">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" class="text-gradient font-bold text-xl md:text-2xl">{{ fullName }}</a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li><router-link to="#about" class="font-semibold transition-colors duration-300 hover:text-primary">About</router-link></li>
        <li><router-link to="#skills" class="font-semibold transition-colors duration-300 hover:text-primary">Skills</router-link></li>
        <li><router-link to="#projects" class="font-semibold transition-colors duration-300 hover:text-primary">Projects</router-link></li>
        <li><router-link to="#experience" class="font-semibold transition-colors duration-300 hover:text-primary">Experience</router-link></li>
        <li><router-link to="#contact" class="font-semibold transition-colors duration-300 hover:text-primary">Contact</router-link></li>

        <!-- Language toggle -->
        <div class="flex items-center gap-2">
          <button @click="setLang('en')" :class="{ 'font-bold text-primary': lang === 'en' }" class="transition-colors duration-300">EN</button>
          <span class="text-base-content-secondary">/</span>
          <button @click="setLang('es')" :class="{ 'font-bold text-primary': lang === 'es' }" class="transition-colors duration-300">ES</button>
        </div>
      </ul>

      <!-- Mobile menu button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-base-content hover:text-primary transition-colors">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 bg-base-200 shadow-xl border-t border-base-300">
      <ul class="px-4 py-4 space-y-3">
        <li><a href="#about" @click="toggleMenu" class="block py-2 text-base-content hover:text-primary transition-colors">About</a></li>
        <li><a href="#skills" @click="toggleMenu" class="block py-2 text-base-content hover:text-primary transition-colors">Skills</a></li>
        <li><a href="#projects" @click="toggleMenu" class="block py-2 text-base-content hover:text-primary transition-colors">Projects</a></li>
        <li><a href="#experience" @click="toggleMenu" class="block py-2 text-base-content hover:text-primary transition-colors">Experience</a></li>
        <li><a href="#contact" @click="toggleMenu" class="block py-2 text-base-content hover:text-primary transition-colors">Contact</a></li>

        <!-- Language toggle -->
        <li class="pt-4 border-t border-base-300">
          <div class="flex items-center justify-center gap-2">
            <button @click="setLang('en')" :class="{ 'font-bold text-primary': lang === 'en' }" class="transition-colors duration-300">EN</button>
            <span class="text-base-content-secondary">/</span>
            <button @click="setLang('es')" :class="{ 'font-bold text-primary': lang === 'es' }" class="transition-colors duration-300">ES</button>
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
