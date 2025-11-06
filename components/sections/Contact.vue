<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ content.contact.title }}</h2>
      <p class="text-lg text-center mb-8">{{ content.contact.description }}</p>
      <form name="contact" method="POST" data-netlify="true" class="max-w-xl mx-auto">
        <input type="hidden" name="form-name" value="contact" />
        <div class="mb-4">
          <label :for="content.contact.form.name" class="block text-light mb-2">{{ content.contact.form.name }}</label>
          <input type="text" :id="content.contact.form.name" name="name" class="w-full px-3 py-2 bg-dark border border-primary rounded-lg focus:outline-none focus:border-light">
        </div>
        <div class="mb-4">
          <label :for="content.contact.form.email" class="block text-light mb-2">{{ content.contact.form.email }}</label>
          <input type="email" :id="content.contact.form.email" name="email" class="w-full px-3 py-2 bg-dark border border-primary rounded-lg focus:outline-none focus:border-light">
        </div>
        <div class="mb-4">
          <label :for="content.contact.form.message" class="block text-light mb-2">{{ content.contact.form.message }}</label>
          <textarea :id="content.contact.form.message" name="message" rows="5" class="w-full px-3 py-2 bg-dark border border-primary rounded-lg focus:outline-none focus:border-light"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="bg-primary text-light font-bold py-3 px-6 rounded-full">{{ content.contact.form.submit }}</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { content } from '~/lib/content';
</script>