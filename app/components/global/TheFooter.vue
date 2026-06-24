<template>
  <footer class="relative bg-base-200 border-t border-border-subtle">
    <div class="container mx-auto px-6 md:px-8 py-12 relative z-10">
      <div class="grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <!-- Brand + copyright -->
        <div>
          <a href="#" class="inline-flex items-center gap-2.5 mb-3">
            <span class="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-base-100 font-display text-sm font-semibold">
              {{ initials }}
            </span>
            <span class="font-display text-base text-base-content">{{ name.first }} {{ name.last }}</span>
          </a>
          <p class="text-sm text-base-content-secondary max-w-md">
            {{ footerContent.tagline }}
          </p>
          <p class="font-mono text-[11px] uppercase tracking-widest text-base-content-muted mt-4">
            {{ footerContent.copyright }}
          </p>
        </div>

        <!-- Right: nav + socials -->
        <div class="flex flex-col md:items-end gap-5">
          <nav class="flex flex-wrap md:justify-end gap-x-6 gap-y-2">
            <a
              v-for="link in footerNav"
              :key="link.id"
              :href="`#${link.id}`"
              class="text-xs font-mono uppercase tracking-widest text-base-content-secondary hover:text-primary transition-colors"
            >
              {{ link.label }}
            </a>
          </nav>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-9 h-9 rounded-md flex items-center justify-center text-base-content-secondary hover:text-primary hover:bg-base-300 border border-border-subtle transition-all"
            >
              <Icon :name="social.icon" size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const { name, links } = content.shared;
const initials = `${name.first[0]}${name.last[0]}`;

const footerContent = computed(() => content.static.footer[lang.value]);

const footerNav = computed(() => {
  const map = {
    en: [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Work' },
      { id: 'experience', label: 'Career' },
      { id: 'contact', label: 'Contact' },
    ],
    es: [
      { id: 'about', label: 'Sobre Mí' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'projects', label: 'Trabajo' },
      { id: 'experience', label: 'Carrera' },
      { id: 'contact', label: 'Contacto' },
    ],
  };
  return map[lang.value] || map.en;
});

const socials = [
  { label: 'GitHub',   href: links.github,   icon: 'simple-icons:github' },
  { label: 'LinkedIn', href: links.linkedin, icon: 'simple-icons:linkedin' },
  { label: 'Email',    href: `mailto:${links.email}`, icon: 'simple-icons:gmail' },
];
</script>
