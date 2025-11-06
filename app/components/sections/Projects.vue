<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ projectsContent.title }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <ProjectCard v-for="(project, index) in projectsContent.items" :key="index" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import ProjectCard from '~/components/ProjectCard.vue';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const projectsContent = computed(() => {
  const projects = content[lang.value].projects;
  projects.items.forEach(item => {
    const title = item.title.toLowerCase();
    if (title.includes('crypto')) {
      item.image = 'https://via.placeholder.com/400x200?text=Crypto+Project';
    } else if (title.includes('wordpress')) {
      item.image = 'https://via.placeholder.com/400x200?text=WordPress+Project';
    } else if (title.includes('isp') || title.includes('internet provider')) {
      item.image = 'https://via.placeholder.com/400x200?text=ISP+Project';
    } else if (title.includes('prototyping')) {
      item.image = 'https://via.placeholder.com/400x200?text=Rapid+Prototyping';
    } else {
      item.image = 'https://via.placeholder.com/400x200?text=Project';
    }
  });
  return projects;
});
</script>