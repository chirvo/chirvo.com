<template>
  <section id="experience" class="py-20 bg-light">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ experiencePageTitle.title }}</h2>
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(job, index) in experienceContentJobs" :key="index">
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div :class="index % 2 === 0 ? 'mb-10 timeline-start md:text-justify' : 'timeline-end md:mb-10'">
            <time class="font-mono italic mb-2">{{ job.period }}</time>
            <div class="text-xl font-black">{{ job.role }}</div>
            <div class="text-md font-black mb-2">{{ job.company }}</div>
            <div clas="text-sm">
              <ul class="ml-12">
                <li class="mb-1 text-sm" style="list-style-type: lower-roman;"
                  v-for="(achievement, index) in job.achievements" :key="index">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </li>
        <li v-for="(education, index) in experienceContentEducation" :key="index">
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div :class="(timelineGap + index) % 2 === 0 ? 'mb-10 timeline-start md:text-end' : 'timeline-end md:mb-10'">
            <time class="font-mono italic">{{ education.period }}</time>
            <div class="text-lg font-black">{{ education.degree }}</div>
            <div>
              {{ education.institution }}
            </div>
          </div>
          <hr />

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