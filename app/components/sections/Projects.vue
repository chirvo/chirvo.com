<template>
  <section id="projects" ref="sectionRef" class="py-24 md:py-32 bg-base-100 relative overflow-hidden border-t border-border-subtle">
    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <!-- Section header -->
      <div class="max-w-2xl mb-16 md:mb-20 reveal-slow">
        <span class="section-eyebrow mb-6">{{ eyebrow }}</span>
        <h2 class="section-title mt-4">{{ projectsContent.title }}</h2>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <ProjectCard
          v-for="(project, index) in projectsContentItems"
          :key="index"
          :project="project"
          :index="index"
          class="reveal-slow"
          :style="{ transitionDelay: `${index * 100}ms` }"
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

const { lang } = useLang();
const projectsContent = computed(() => content.static.projects[lang.value]);
const eyebrow = computed(() => lang.value === 'es' ? '03 — Trabajo' : '03 — Work');

const projectsContentItems = computed(() =>
  content.shared.projects.items.map((project) => {
    const t = project[lang.value];
    return { title: t.title, description: t.description, image: project.image, tags: project.tags };
  })
);

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.05 });
onMounted(() => { if (sectionRef.value) observe(sectionRef.value); });
</script>
