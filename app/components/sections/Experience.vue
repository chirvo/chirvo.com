<template>
  <section id="experience" class="py-20 bg-light">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ experienceContent.title }}</h2>
      <div class="relative">
        <div class="border-r-2 border-primary absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <ul class="list-none m-0 p-0">
          <li v-for="(job, index) in experienceContent.jobs" :key="index" class="mb-8">
            <div class="flex items-center" :class="{ 'flex-row-reverse': index % 2 === 0 }">
              <div class="w-1/2">
                <div class="p-4 bg-primary rounded-lg shadow-lg" :class="{ 'mr-4': index % 2 !== 0, 'ml-4': index % 2 === 0 }">
                  <h3 class="text-xl font-bold">{{ job.role }}</h3>
                  <p class="text-sm">{{ job.period }}</p>
                </div>
              </div>
              <div class="w-1/2 flex justify-center">
                <div class="bg-primary rounded-full w-8 h-8"></div>
              </div>
            </div>
          </li>
           <li class="mb-8">
            <div class="flex items-center" :class="{ 'flex-row-reverse': experienceContent.jobs.length % 2 === 0 }">
              <div class="w-1/2">
                <div class="p-4 bg-primary rounded-lg shadow-lg" :class="{ 'mr-4': experienceContent.jobs.length % 2 !== 0, 'ml-4': experienceContent.jobs.length % 2 === 0 }">
                  <h3 class="text-xl font-bold">{{ experienceContent.education.degree }}</h3>
                  <p class="text-sm">{{ experienceContent.education.institution }}</p>
                  <p class="text-sm">{{ experienceContent.education.period }}</p>
                </div>
              </div>
              <div class="w-1/2 flex justify-center">
                <div class="bg-primary rounded-full w-8 h-8"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const experienceContent = computed(() => content[lang.value].experience);
</script>