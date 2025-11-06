<template>
  <div class="bg-dark rounded-lg shadow-lg overflow-hidden">
    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-light">{{ project.description }}</p>
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
