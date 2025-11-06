<template>
  <section id="experience" class="py-20 bg-dark">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ content.timeline.title }}</h2>
      <div class="relative">
        <div class="border-r-2 border-primary absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <ul class="list-none m-0 p-0">
          <li v-for="(event, index) in content.timeline.events" :key="index" class="mb-8">
            <div class="flex items-center" :class="{ 'flex-row-reverse': index % 2 === 0 }">
              <div class="w-1/2">
                <div class="p-4 bg-primary rounded-lg shadow-lg" :class="{ 'mr-4': index % 2 !== 0, 'ml-4': index % 2 === 0 }">
                  <h3 class="text-xl font-bold">{{ event.title }}</h3>
                  <p class="text-sm">{{ event.year }}</p>
                  <p class="mt-2">{{ event.description }}</p>
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
import { content } from '~/lib/content';
</script>