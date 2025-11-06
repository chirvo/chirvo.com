<template>
  <header class="bg-dark sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
      <div>
        <a href="#" class="text-light font-bold text-xl">{{ content.hero.name }}</a>
      </div>
      <div class="hidden md:block">
        <ul class="flex items-center space-x-8">
          <li><a href="#about" class="text-light">About</a></li>
          <li><a href="#skills" class="text-light">Skills</a></li>
          <li><a href="#projects" class="text-light">Projects</a></li>
          <li><a href="#experience" class="text-light">Experience</a></li>
          <li><a href="#contact" class="text-light">Contact</a></li>
        </ul>
      </div>
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" class="text-light focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
    <div v-if="isOpen" class="md:hidden">
      <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li><a href="#about" class="block text-light px-3 py-2 rounded-md text-base font-medium">About</a></li>
        <li><a href="#skills" class="block text-light px-3 py-2 rounded-md text-base font-medium">Skills</a></li>
        <li><a href="#projects" class="block text-light px-3 py-2 rounded-md text-base font-medium">Projects</a></li>
        <li><a href="#experience" class="block text-light px-3 py-2 rounded-md text-base font-medium">Experience</a></li>
        <li><a href="#contact" class="block text-light px-3 py-2 rounded-md text-base font-medium">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { content } from '~/lib/content';

const isOpen = ref(false);
</script>
