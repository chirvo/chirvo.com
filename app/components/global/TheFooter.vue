<template>
  <footer class="bg-dark py-6">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div>
        <p class="text-light">&copy; {{ new Date().getFullYear() }} {{ content.hero.name }}</p>
      </div>
      <div>
        <a :href="content.hero.links.github" target="_blank" rel="noopener noreferrer" class="text-light mx-2">
          <Icon name="simple-icons:github" size="24" />
        </a>
        <a :href="content.hero.links.linkedin" target="_blank" rel="noopener noreferrer" class="text-light mx-2">
          <Icon name="simple-icons:linkedin" size="24" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { content } from '~/lib/content';
</script>
