<template>
  <section id="projects" class="py-20 bg-base-200">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ projectsContent.title }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <ProjectCard v-for="(project, index) in projectsContentItems" :key="index" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { content } from "~/lib/content";
import ProjectCard from "~/components/ProjectCard.vue";
import { useLang } from "~/composables/useLang";

const { lang } = useLang();
const projectsContent = computed(() => content.static.projects[lang.value]);
const projectsContentItems = computed(() => {
  return content.shared.projects.items.map((project) => {
    const langText = project[lang.value];
    const result = { title: langText.title, description: langText.description, image: project.image, tags: project.tags };
    return result;
  });
});
</script>

