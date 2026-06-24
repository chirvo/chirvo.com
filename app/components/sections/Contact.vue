<template>
  <section id="contact" ref="sectionRef" class="py-24 md:py-32 bg-base-100 relative overflow-hidden border-t border-border-subtle">
    <div class="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50"></div>
    <div class="absolute inset-0 bg-linear-to-b from-transparent via-base-100/80 to-base-100 pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-8 relative z-10">
      <!-- Section header -->
      <div class="max-w-2xl mb-16 md:mb-20 reveal-slow">
        <span class="section-eyebrow mb-6">{{ eyebrow }}</span>
        <h2 class="section-title mt-4">{{ contactContent.title }}</h2>
      </div>

      <div class="max-w-3xl reveal-slow">
        <p class="text-lg md:text-xl text-base-content-secondary leading-relaxed mb-10">
          {{ contactContent.description }}
        </p>

        <!-- Contact methods -->
        <div class="grid sm:grid-cols-2 gap-3 mb-10">
          <a
            :href="`mailto:${email}`"
            class="group flex items-center gap-4 p-5 rounded-xl bg-base-200 border border-border-subtle hover:border-primary transition-all"
          >
            <div class="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center text-primary shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="font-mono text-[10px] uppercase tracking-widest text-base-content-muted mb-1">{{ emailLabel }}</p>
              <p class="text-sm text-base-content truncate group-hover:text-primary transition-colors">{{ email }}</p>
            </div>
          </a>

          <a
            :href="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-5 rounded-xl bg-base-200 border border-border-subtle hover:border-primary transition-all"
          >
            <div class="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center text-primary shrink-0">
              <Icon name="simple-icons:linkedin" size="20" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="font-mono text-[10px] uppercase tracking-widest text-base-content-muted mb-1">LinkedIn</p>
              <p class="text-sm text-base-content truncate group-hover:text-primary transition-colors">linkedin.com/in/irvingbermudez</p>
            </div>
          </a>

          <a
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-5 rounded-xl bg-base-200 border border-border-subtle hover:border-primary transition-all"
          >
            <div class="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center text-primary shrink-0">
              <Icon name="simple-icons:github" size="20" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="font-mono text-[10px] uppercase tracking-widest text-base-content-muted mb-1">GitHub</p>
              <p class="text-sm text-base-content truncate group-hover:text-primary transition-colors">github.com/chirvo</p>
            </div>
          </a>

          <div class="flex items-center gap-4 p-5 rounded-xl bg-base-200 border border-border-subtle">
            <div class="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center text-primary shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75">
                <path d="M12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="9"/>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="font-mono text-[10px] uppercase tracking-widest text-base-content-muted mb-1">{{ timezoneLabel }}</p>
              <p class="text-sm text-base-content">UTC−4 · Caracas</p>
            </div>
          </div>
        </div>

        <!-- Primary CTA -->
        <a :href="`mailto:${email}`" class="btn btn-primary">
          {{ ctaLabel }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';
import { useSectionReveal } from '~/composables/useScrollReveal';

const { lang } = useLang();
const contactContent = computed(() => content.static.contact[lang.value]);
const eyebrow = computed(() => lang.value === 'es' ? '05 — Contacto' : '05 — Contact');
const emailLabel = computed(() => lang.value === 'es' ? 'Correo' : 'Email');
const timezoneLabel = computed(() => lang.value === 'es' ? 'Zona horaria' : 'Timezone');
const ctaLabel = computed(() => lang.value === 'es' ? 'Iniciar un proyecto' : 'Start a project');

const { email, linkedin, github } = content.shared.links;

const sectionRef = ref(null);
const { observe } = useSectionReveal({ threshold: 0.1 });
onMounted(() => { if (sectionRef.value) observe(sectionRef.value); });
</script>
