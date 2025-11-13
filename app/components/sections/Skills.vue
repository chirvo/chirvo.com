<template>
  <section id="skills" class="py-20 bg-light">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ competenciesContent.title }}</h2>
      <div class="grid md:grid-cols-3 gap-12">
        <div v-for="(pillar, index) in competenciesContentPillars" :key="index">
          <h3 class="text-2xl font-bold text-center mb-6">{{ pillar.title }}</h3>
          <div class="flex flex-wrap justify-center">
            <div v-for="(skill, index) in pillar.skills" :key="index" class="badge badge-soft badge-primary m-2">
              <Icon :name="getIcon(skill)" class="mr-2" />
              <span>{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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