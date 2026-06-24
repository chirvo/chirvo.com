<template>
  <header
    class="sticky top-0 z-50 border-b transition-colors duration-300"
    :class="scrolled ? 'glass border-b border-border-subtle' : 'border-b border-transparent bg-transparent'"
  >
    <nav class="container mx-auto px-6 md:px-8 h-16 flex justify-between items-center">
      <!-- Brand mark -->
      <a href="#" class="flex items-center gap-2.5 group">
        <span class="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-base-100 font-display text-sm font-semibold">
          {{ initials }}
        </span>
        <span class="hidden sm:inline font-display text-base text-base-content tracking-wide group-hover:text-primary transition-colors">
          {{ name.first }} {{ name.last }}
        </span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="nav-link text-xs uppercase tracking-widest font-medium"
            :class="{ 'active': activeSection === link.id }"
          >
            {{ link.label }}
          </a>
        </li>

        <li class="ml-4 pl-6 border-l border-border-subtle flex items-center gap-2">
          <button
            @click="setLang('en')"
            :class="lang === 'en' ? 'text-primary' : 'text-base-content-muted hover:text-base-content'"
            class="text-[11px] font-mono uppercase tracking-widest transition-colors"
          >EN</button>
          <span class="text-base-content-muted/40">/</span>
          <button
            @click="setLang('es')"
            :class="lang === 'es' ? 'text-primary' : 'text-base-content-muted hover:text-base-content'"
            class="text-[11px] font-mono uppercase tracking-widest transition-colors"
          >ES</button>
        </li>

        <li class="pl-6 border-l border-border-subtle flex items-center">
          <button
            @click="toggleTheme"
            :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
            :title="theme === 'dark' ? 'Light' : 'Dark'"
            class="text-base-content-muted hover:text-primary transition-colors p-1 -mr-1 flex items-center justify-center"
          >
            <svg v-if="theme === 'dark'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
            <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          </button>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-base-content hover:text-primary transition-colors p-2 -mr-2" :aria-label="isOpen ? 'Close menu' : 'Open menu'">
        <svg v-if="!isOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-150 ease-in"
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-border-subtle">
        <ul class="px-6 py-6 space-y-1">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              @click="isOpen = false"
              class="nav-link block py-2.5 text-sm uppercase tracking-widest font-medium"
              :class="{ 'active': activeSection === link.id }"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="pt-4 mt-2 border-t border-border-subtle flex items-center gap-4">
            <button @click="setLang('en')" :class="lang === 'en' ? 'text-primary' : 'text-base-content-muted'" class="text-xs font-mono uppercase tracking-widest">EN</button>
            <span class="text-base-content-muted/40">/</span>
            <button @click="setLang('es')" :class="lang === 'es' ? 'text-primary' : 'text-base-content-muted'" class="text-xs font-mono uppercase tracking-widest">ES</button>
            <button
              @click="toggleTheme"
              :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
              class="ml-auto text-base-content-muted hover:text-primary transition-colors p-1 flex items-center justify-center"
            >
              <svg v-if="theme === 'dark'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useTheme } from '~/composables/useTheme';
import { useScrollProgress } from '~/composables/useScrollProgress';

const isOpen = ref(false);
const scrolled = ref(false);
const { lang, setLang } = useLang();
const { theme, toggleTheme } = useTheme();
const { name } = content.shared;
const initials = `${name.first[0]}${name.last[0]}`;

const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'];
const { activeSection } = useScrollProgress(sectionIds);

const navLinks = computed(() => {
  const links = {
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
  return links[lang.value] || links.en;
});

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
