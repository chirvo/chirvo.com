<template>
  <div class="card card-hover bg-base-200 overflow-hidden">
    <!-- Image -->
    <figure class="relative h-48 overflow-hidden">
      <img :src="project.image" :alt="project.title" 
           class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
      <div class="absolute inset-0 bg-gradient-to-t from-base-200/80 to-transparent"></div>
    </figure>

    <!-- Content -->
    <div class="p-6">
      <h2 class="font-display text-xl text-base-content mb-3 font-medium">{{ project.title }}</h2>
      <p class="text-base-content-secondary mb-5 line-clamp-3 text-sm leading-relaxed">{{ project.description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-5">
        <div v-for="(tag, index) in project.tags" :key="index"
             class="badge badge-primary">
          {{ tag }}
        </div>
      </div>

      <!-- CTA -->
      <button @click="$router.push('#projects')" 
              class="btn btn-primary w-full text-sm">
        View Details
      </button>
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
