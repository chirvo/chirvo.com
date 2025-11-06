<template>
  <section id="skills" class="py-20 bg-dark">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ content.competencies.title }}</h2>
      <div class="grid md:grid-cols-3 gap-12">
        <div v-for="(pillar, index) in content.competencies.pillars" :key="index">
          <h3 class="text-2xl font-bold text-center mb-6">{{ pillar.title }}</h3>
          <div class="flex flex-wrap justify-center">
            <div v-for="(skill, skillIndex) in pillar.skills" :key="skillIndex" class="bg-primary text-light rounded-full px-4 py-2 text-sm font-semibold m-2 flex items-center">
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
import { content } from '~/lib/content';
import { icons } from '~/lib/icons';

const getIcon = (skill) => {
  const skillKey = skill.toLowerCase().replace(/\s/g, '').replace(/\./g, '').replace(/\+/g, '');
  return icons[skillKey] || 'simple-icons:serverless';
};
</script>