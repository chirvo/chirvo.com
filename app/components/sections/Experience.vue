<template>
  <section id="experience" ref="sectionRef" class="py-24 md:py-32 bg-base-200 relative overflow-hidden border-t border-border-subtle">
    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <!-- Section header -->
      <div class="max-w-2xl mb-16 md:mb-20 reveal-slow">
        <span class="section-eyebrow mb-6">{{ eyebrow }}</span>
        <h2 class="section-title mt-4">{{ experiencePageTitle.title }}</h2>
      </div>

      <!-- Timeline -->
      <ul class="max-w-3xl">
        <li
          v-for="(job, index) in experienceContentJobs"
          :key="`job-${index}`"
          class="timeline-item reveal-slow"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="flex flex-wrap items-baseline gap-x-4 mb-2">
            <h3 class="font-display text-xl md:text-2xl text-base-content font-medium">{{ job.role }}</h3>
            <span class="font-mono text-xs text-primary">·</span>
            <span class="font-mono text-xs text-base-content-secondary">{{ job.company }}</span>
          </div>
          <time class="inline-block font-mono text-[11px] uppercase tracking-widest text-base-content-muted mb-4">
            {{ job.period }}
          </time>
          <ul class="space-y-2.5">
            <li
              v-for="(achievement, aIndex) in job.achievements"
              :key="aIndex"
              class="flex items-start gap-3 text-sm md:text-base text-base-content-secondary leading-relaxed stagger-item"
              :style="{ transitionDelay: `${index * 80 + aIndex * 40}ms` }"
            >
              <span class="mt-2 w-1 h-1 rounded-full bg-primary shrink-0"></span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </li>

        <!-- Education -->
        <li class="mt-12 mb-4">
          <span class="section-eyebrow">{{ educationLabel }}</span>
        </li>
        <li
          v-for="(ed, index) in experienceContentEducation"
          :key="`edu-${index}`"
          class="timeline-item reveal-slow"
          :style="{ transitionDelay: `${(experienceContentJobs.length + index) * 100}ms` }"
        >
          <h3 class="font-display text-lg md:text-xl text-base-content font-medium mb-1">{{ ed.degree }}</h3>
          <p class="text-sm text-base-content-secondary">{{ ed.institution }}</p>
          <time class="inline-block font-mono text-[11px] uppercase tracking-widest text-base-content-muted mt-2">
            {{ ed.period }}
          </time>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useSectionReveal } from '~/composables/useScrollReveal';

const { lang } = useLang();
const experiencePageTitle = computed(() => content.static.experience[lang.value]);
const eyebrow = computed(() => lang.value === 'es' ? '04 — Carrera' : '04 — Career');
const educationLabel = computed(() => lang.value === 'es' ? 'Educación' : 'Education');

const experienceContentJobs = computed(() =>
  content.shared.experience.map((job) => {
    const t = job[lang.value];
    return { period: job.period, company: job.company, role: t.role, achievements: t.achievements };
  })
);

const experienceContentEducation = computed(() =>
  content.shared.education.map((ed) => {
    const t = ed[lang.value];
    return { period: ed.period, institution: t.institution, degree: t.degree };
  })
);

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.05 });
onMounted(() => { if (sectionRef.value) observe(sectionRef.value); });
</script>
