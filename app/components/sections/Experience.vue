<template>
  <section id="experience" class="py-24 md:py-32 bg-base-200 relative overflow-hidden">
    <div class="bg-glow-orb" data-parallax-orb="0.04" style="top: 15%; left: 20%;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div ref="headerRef" class="text-center mb-16 md:mb-20 reveal-slow">
        <h2 class="section-title">{{ experiencePageTitle.title }}</h2>
        <div class="divider-gold w-24 mx-auto mt-6"></div>
      </div>

      <!-- Timeline -->
      <ul ref="timelineRef" class="max-w-3xl mx-auto">
        <li v-for="(job, index) in experienceContentJobs" :key="`job-${index}`"
            class="timeline-item reveal-slow"
            :style="{ transitionDelay: `${index * 150}ms` }">
          <div class="relative pl-10">
            <h3 class="font-display text-xl md:text-2xl text-base-content font-medium mb-1">{{ job.role }}</h3>
            <p class="text-base text-base-content-secondary mb-2">{{ job.company }}</p>
            <time class="text-primary font-mono text-xs mb-4 block">{{ job.period }}</time>
            <ul class="space-y-2">
              <li v-for="(achievement, aIndex) in job.achievements" :key="aIndex"
                  class="flex items-start gap-3 text-base-content-secondary text-sm leading-relaxed stagger-item"
                  :style="{ transitionDelay: `${index * 150 + aIndex * 50}ms` }">
                <span class="text-primary mt-1.5 text-xs shrink-0">◆</span>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </li>
        <li v-for="(education, index) in experienceContentEducation" :key="`edu-${index}`"
            class="timeline-item reveal-slow"
            :style="{ transitionDelay: `${(experienceContentJobs.length + index) * 150}ms` }">
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
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useRevealElement } from '~/composables/useScrollReveal';
import { useParallaxOrbs } from '~/composables/useParallaxOrbs';

const { lang } = useLang();
const experiencePageTitle = computed(() => content.static.experience[lang.value]);
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

const headerRef = useRevealElement({ threshold: 0.2 });
const timelineRef = ref(null);
useParallaxOrbs();

// Timeline draw-on-scroll effect
let timelineObserver = null;

function initTimelineDraw() {
  if (!timelineRef.value) return;
  const items = timelineRef.value.querySelectorAll('.timeline-item');
  if (!items.length) return;

  // Find the last ::after line element and animate its height
  const lastLine = timelineRef.value.querySelector('.timeline-item:last-child::after');
  if (!lastLine) return;

  timelineObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // Draw the line progressively
        const timeline = timelineRef.value;
        const rect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        function updateLineHeight() {
          const scrolled = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
          const lines = timeline.querySelectorAll('.timeline-item::after');
          // Use a container line approach
          timeline.style.setProperty('--line-height', `${scrolled * 100}%`);
          if (scrolled < 1) requestAnimationFrame(updateLineHeight);
        }

        requestAnimationFrame(updateLineHeight);
        timelineObserver.disconnect();
      }
    }
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

  timelineObserver.observe(timelineRef.value);
}

onMounted(() => {
  initTimelineDraw();
});

onUnmounted(() => {
  if (timelineObserver) timelineObserver.disconnect();
});
</script>
