<template>
  <div class="bg-light rounded-lg shadow-lg overflow-hidden">
    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-dark">{{ project.description }}</p>
      <div class="mt-4">
        <span v-for="tag in project.tags" :key="tag" class="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-dark mr-2 mb-2">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
