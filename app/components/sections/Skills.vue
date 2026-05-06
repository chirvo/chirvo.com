<template>
  <section id="skills" class="py-24 bg-gradient-hero relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
    <div class="bg-glow-orb" style="top: 10%; left: 20%;"></div>
    <div class="bg-glow-orb" style="bottom: 15%; right: 20%; background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 animate-slide-up">
        <h2 class="section-title text-gradient">{{ competenciesContent.title }}</h2>
        <p class="section-subtitle"></p>
      </div>

      <!-- Skills pillars -->
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(pillar, index) in competenciesContentPillars" :key="index"
          class="card card-hover glass">
          <h3 class="text-gradient text-center mb-8 font-display text-2xl">{{ pillar.title }}</h3>
          <div class="flex flex-wrap gap-2 justify-center">
            <div v-for="(skill, sIndex) in pillar.skills" :key="sIndex"
              class="badge badge-primary glow-effect hover:scale-110 transition-transform duration-300">
              <Icon :name="getIcon(skill)" />
              <span class="ml-2 text-xs md:text-sm">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<div className="min-h-screen w-full bg-[#f8fafc] relative">
</div>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { icons } from '~/lib/icons';
import { useLang } from '~/composables/useLang';

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
</script>