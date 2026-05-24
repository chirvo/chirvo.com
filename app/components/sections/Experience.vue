<template>
  <section id="experience" class="py-24 md:py-32 bg-base-200 relative overflow-hidden">
    <div class="bg-glow-orb" style="top: 15%; left: 20%;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20 animate-slide-up">
        <h2 class="section-title">{{ experiencePageTitle.title }}</h2>
        <div class="divider-gold w-24 mx-auto mt-6"></div>
      </div>

      <!-- Timeline -->
      <ul class="max-w-3xl mx-auto">
        <li v-for="(job, index) in experienceContentJobs" :key="index" class="timeline-item">
          <div class="relative pl-10">
            <h3 class="font-display text-xl md:text-2xl text-base-content font-medium mb-1">{{ job.role }}</h3>
            <p class="text-base text-base-content-secondary mb-2">{{ job.company }}</p>
            <time class="text-primary font-mono text-xs mb-4 block">{{ job.period }}</time>
            <ul class="space-y-2">
              <li v-for="(achievement, index) in job.achievements" :key="index"
                  class="flex items-start gap-3 text-base-content-secondary text-sm leading-relaxed">
                <span class="text-primary mt-1.5 text-xs">◆</span>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </li>
        <li v-for="(education, index) in experienceContentEducation" :key="index" class="timeline-item">
          <div class="relative pl-10">
            <h3 class="font-display text-lg md:text-xl text-base-content font-medium mb-1">{{ education.degree }}</h3>
            <p class="text-base text-base-content-secondary">{{ education.institution }}</p>
            <time class="text-primary font-mono text-xs mt-2 block">{{ education.period }}</time>
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