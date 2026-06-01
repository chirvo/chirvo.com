<template>
  <div class="card bg-base-200 overflow-hidden group relative">
    <!-- Glow border on hover -->
    <div class="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
         style="box-shadow: 0 0 0 1px var(--color-primary), 0 4px 30px rgba(212, 168, 83, 0.15); z-index: 1;">
    </div>

    <!-- Image -->
    <figure class="relative h-48 overflow-hidden">
      <img :src="project.image" :alt="project.title"
           class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
      <div class="absolute inset-0 bg-gradient-to-t from-base-200/80 to-transparent"></div>
    </figure>

    <!-- Content -->
    <div class="p-6 relative z-10">
      <h2 class="font-display text-xl text-base-content mb-3 font-medium transition-colors duration-300 group-hover:text-primary">
        {{ project.title }}
      </h2>
      <p class="text-base-content-secondary mb-5 line-clamp-3 text-sm leading-relaxed">{{ project.description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-5">
        <div v-for="(tag, index) in project.tags" :key="index"
             class="badge badge-primary transition-all duration-300 group-hover:border-primary/50">
          {{ tag }}
        </div>
      </div>

      <!-- CTA -->
      <button class="btn btn-primary w-full text-sm group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
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
