<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ content.projects.title }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <ProjectCard v-for="(project, index) in content.projects.items" :key="index" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { content } from '~/lib/content';
import ProjectCard from '~/components/ProjectCard.vue';

// Replace placeholder images with actual paths
content.projects.items.forEach(item => {
  if (item.image.includes('project-crypto')) {
    item.image = 'https://via.placeholder.com/400x200?text=Crypto+Project';
  } else if (item.image.includes('project-wordpress')) {
    item.image = 'https://via.placeholder.com/400x200?text=WordPress+Project';
  } else if (item.image.includes('project-isp')) {
    item.image = 'https://via.placeholder.com/400x200?text=ISP+Project';
  }
});
</script>