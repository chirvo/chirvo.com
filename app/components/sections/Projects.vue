<template>
  <section id="projects" ref="sectionRef" class="py-24 md:py-32 bg-base-100 relative overflow-hidden">
    <div class="bg-glow-orb" data-parallax-orb="0.03" style="top: 10%; left: 15%;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20 reveal-slow">
        <h2 class="section-title">{{ projectsContent.title }}</h2>
        <div class="divider-gold w-24 mx-auto mt-6"></div>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in projectsContentItems"
          :key="index"
          :project="project"
          class="reveal-slow"
          :style="{ transitionDelay: `${index * 120}ms` }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { content } from '~/lib/content';
import ProjectCard from '~/components/ProjectCard.vue';
import { useLang } from '~/composables/useLang';
import { useSectionReveal } from '~/composables/useScrollReveal';
import { useParallaxOrbs } from '~/composables/useParallaxOrbs';

const { lang } = useLang();
const projectsContent = computed(() => content.static.projects[lang.value]);
const projectsContentItems = computed(() => {
  return content.shared.projects.items.map((project) => {
    const langText = project[lang.value];
    const result = { title: langText.title, description: langText.description, image: project.image, tags: project.tags };
    return result;
  });
});

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.1 });

onMounted(() => {
  if (sectionRef.value) observe(sectionRef.value);
});
useParallaxOrbs();
</script>
