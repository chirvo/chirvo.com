<template>
  <section id="projects" class="py-24 bg-base-100 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
    <div class="bg-glow-orb" style="top: 5%; left: 10%;"></div>
    <div class="bg-glow-orb" style="bottom: 10%; right: 10%; background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 animate-slide-up">
        <h2 class="section-title text-gradient">{{ projectsContent.title }}</h2>
        <p class="section-subtitle"></p>
      </div>

      <!-- Projects grid -->
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

