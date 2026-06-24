<template>
  <article class="group card card-hover flex flex-col h-full reveal-slow">
    <!-- Image -->
    <div class="relative aspect-[16/10] overflow-hidden bg-base-300">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div class="absolute inset-0 bg-linear-to-t from-base-200/90 via-base-200/20 to-transparent"></div>

      <!-- Project number badge -->
      <div class="absolute top-4 left-4">
        <span class="font-mono text-[10px] uppercase tracking-widest text-base-content-secondary bg-base-100/80 backdrop-blur px-2 py-1 rounded">
          {{ formattedIndex }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 md:p-7 flex flex-col flex-1">
      <h3 class="font-display text-xl md:text-2xl text-base-content mb-3 font-medium leading-tight transition-colors duration-300 group-hover:text-primary">
        {{ project.title }}
      </h3>
      <p class="text-sm text-base-content-secondary mb-6 leading-relaxed line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <span v-for="tag in project.tags.slice(0, 4)" :key="tag" class="chip chip-outline">
          {{ tag }}
        </span>
        <span v-if="project.tags.length > 4" class="chip chip-outline text-base-content-muted">
          +{{ project.tags.length - 4 }}
        </span>
      </div>

      <!-- CTA -->
      <div class="mt-auto pt-2 flex items-center gap-2 text-sm font-medium text-base-content-secondary group-hover:text-primary transition-colors">
        <span>{{ ctaLabel }}</span>
        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import { useLang } from '~/composables/useLang';

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
});

const { lang } = useLang();
const formattedIndex = computed(() => String(props.index + 1).padStart(2, '0'));
const ctaLabel = computed(() => lang.value === 'es' ? 'Ver caso de estudio' : 'View case study');
</script>
