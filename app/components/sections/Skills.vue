<template>
  <section id="skills" class="py-24 md:py-32 bg-base-200 relative overflow-hidden">
    <div class="bg-glow-orb" data-parallax-orb="0.04" style="top: 5%; left: 30%;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div ref="headerRef" class="text-center mb-16 md:mb-20 reveal-slow">
        <h2 class="section-title">{{ competenciesContent.title }}</h2>
        <div class="divider-gold w-24 mx-auto mt-6"></div>
      </div>

      <!-- Skills pillars -->
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(pillar, pIndex) in competenciesContentPillars" :key="pIndex"
          ref="pillarRefs"
          class="card card-hover bg-base-100 reveal-slow"
          :style="{ transitionDelay: `${pIndex * 150}ms` }">
          <h3 class="font-display text-xl md:text-2xl text-base-content text-center mb-8 font-medium">{{ pillar.title }}</h3>
          <div class="flex flex-wrap gap-2 justify-center">
            <div v-for="(skill, sIndex) in pillar.skills" :key="sIndex"
              class="badge badge-primary stagger-item"
              :style="{ transitionDelay: `${pIndex * 150 + sIndex * 30}ms` }">
              <Icon :name="getIcon(skill)" />
              <span class="ml-1.5">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { content } from '~/lib/content';
import { icons } from '~/lib/icons';
import { useLang } from '~/composables/useLang';
import { useRevealElement } from '~/composables/useScrollReveal';
import { useParallaxOrbs } from '~/composables/useParallaxOrbs';

const { lang } = useLang();
const competenciesContent = computed(() => content.static.competencies[lang.value]);
const competenciesContentPillars = computed(() => {
  return content.static.competencies.pillars.map((pillar) => {
    const langText = pillar[lang.value];
    const result = { title: langText.title, skills: pillar.skills };
    return result;
  });
});
const getIcon = (skill) => {
  const skillKey = skill.toLowerCase().replace(/\s/g, '').replace(/\./g, '').replace(/\+/g, '');
  return icons[skillKey] || 'simple-icons:serverless';
};

const headerRef = useRevealElement({ threshold: 0.2 });
useParallaxOrbs();
</script>
