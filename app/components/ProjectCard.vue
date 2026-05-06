<template>
  <div class="card card-hover bg-base-200 overflow-hidden">
    <!-- Image with gradient overlay -->
    <figure class="relative h-48 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <img :src="project.image" :alt="project.title" 
           class="relative w-full h-full object-cover transition-transform duration-500 hover:scale-110">
    </figure>

    <!-- Content -->
    <div class="card-body p-6">
      <h2 class="card-title text-gradient mb-3" style="font-size: 1.25rem;">{{ project.title }}</h2>
      <p class="text-base-content-secondary mb-4 line-clamp-3">{{ project.description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <div v-for="(tag, index) in project.tags" :key="index"
             class="badge badge-primary text-xs px-2 py-1">
          {{ tag }}
        </div>
      </div>

      <!-- CTA -->
      <button @click="$router.push('#projects')" 
              class="btn btn-primary w-full">
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
