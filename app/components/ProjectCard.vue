<template>
  <div class="card bg-base-100 w-96 shadow-sm overflow-hidden">
    <figure>
      <img :src="project.image" :alt="project.title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="card-actions justify-end">
        <div v-for="tag in project.tags" :key="tag" class="badge badge-soft badge-primary">{{ tag }}</div>
      </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">More</button>
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
