<template>
  <section id="experience" class="py-24 bg-base-100 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
    <div class="bg-glow-orb" style="top: 20%; left: 30%;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 animate-slide-up">
        <h2 class="section-title text-gradient">{{ experiencePageTitle.title }}</h2>
        <p class="section-subtitle"></p>
      </div>

      <!-- Timeline -->
      <ul class="max-w-3xl mx-auto">
        <li v-for="(job, index) in experienceContentJobs" :key="index" class="timeline-item mb-12">
          <div class="relative pl-16">
            <h3 class="text-gradient text-xl md:text-2xl font-bold mb-2">{{ job.role }}</h3>
            <p class="text-lg text-base-content-secondary mb-4">{{ job.company }}</p>
            <time class="text-primary font-mono text-sm mb-4">{{ job.period }}</time>
            <ul class="space-y-2 ml-8">
              <li v-for="(achievement, index) in job.achievements" :key="index"
                  class="flex items-start gap-3 text-base-content-secondary">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </li>
        <li v-for="(education, index) in experienceContentEducation" :key="index" class="timeline-item mb-12">
          <div class="relative pl-16">
            <h3 class="text-xl font-bold text-base-content mb-2">{{ education.degree }}</h3>
            <p class="text-lg text-base-content-secondary">{{ education.institution }}</p>
            <time class="text-primary font-mono text-sm mt-2">{{ education.period }}</time>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const experiencePageTitle = computed(() => content.static.experience[lang.value]);
const timelineGap = computed(() => content.static.experience[lang.value].length)
const experienceContentJobs = computed(() => {
  return content.shared.experience.map((job) => {
    const langText = job[lang.value];
    const result = { period: job.period, company: job.company, role: langText.role, achievements: langText.achievements };
    return result;
  });
});
const experienceContentEducation = computed(() => {
  return content.shared.education.map((ed) => {
    const langText = ed[lang.value];
    const result = { period: ed.period, institution: langText.institution, degree: langText.degree };
    return result;
  });
});
</script>