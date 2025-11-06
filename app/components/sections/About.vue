<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ content.about.title }}</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://via.placeholder.com/500" alt="Irving Bermudez" class="rounded-full mx-auto" />
        </div>
        <div>
          <p class="text-lg leading-relaxed">{{ content.about.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { content } from '~/lib/content';
</script>