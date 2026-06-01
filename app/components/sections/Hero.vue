<template>
  <section class="hero-glow bg-gradient-hero min-h-screen relative overflow-hidden flex items-center justify-center">
    <!-- Subtle grid -->
    <div class="absolute inset-0 bg-grid-pattern opacity-40"></div>
    <div class="bg-glow-orb" style="top: -10%; left: 20%;"></div>
    <div class="bg-glow-orb" style="bottom: -10%; right: 20%;"></div>

    <div class="container mx-auto px-6 py-16 md:py-24 relative z-10 flex flex-col items-center">
      <div class="max-w-3xl flex flex-col items-center text-center gap-4">
        <!-- Greeting -->
        <p class="text-sm md:text-base text-base-content-secondary font-mono tracking-widest uppercase">
          {{ heroGreeting }}
        </p>

        <!-- Headline with typewriter -->
        <h1 ref="headlineRef" class="font-display text-3xl md:text-5xl lg:text-6xl font-light text-base-content leading-tight min-h-[1.2em]">
          <span ref="typedTextRef"></span><span class="cursor-blink">|</span>
        </h1>

        <!-- Subheadline with typewriter -->
        <p ref="subRef" class="text-base md:text-lg text-base-content-secondary leading-relaxed min-h-[1.5em]">
          <span ref="typedSubRef"></span><span class="cursor-blink">|</span>
        </p>

        <!-- CTA buttons -->
        <div ref="ctaRef" class="flex flex-wrap justify-center gap-4 opacity-0 transition-opacity duration-500">
          <a :href="'#projects'" class="btn btn-primary">{{ currentCtaPrimary }}</a>
          <a :href="'#contact'" class="btn btn-secondary">{{ currentCtaSecondary }}</a>
        </div>

        <!-- Slide indicators -->
        <div ref="indicatorsRef" class="flex gap-2 mt-6 opacity-0 transition-opacity duration-500">
          <button
            v-for="(_, i) in heroContent"
            :key="i"
            @click="goToSlide(i)"
            :class="['w-2 h-2 rounded-full transition-all duration-300', currentSlide === i ? 'bg-primary w-6' : 'bg-base-content/20 hover:bg-base-content/40']"
            :aria-label="'Go to slide ' + (i + 1)"
          />
        </div>

        <!-- Social links -->
        <div ref="socialRef" class="flex flex-wrap justify-center gap-4 mt-4 opacity-0 transition-opacity duration-500">
          <a :href="heroLinks.github" target="_blank" rel="noopener noreferrer"
            class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider flex items-center gap-2">
            <Icon name="simple-icons:github" size="18" />
            GitHub
          </a>
          <a :href="heroLinks.linkedin" target="_blank" rel="noopener noreferrer"
            class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider flex items-center gap-2">
            <Icon name="simple-icons:linkedin" size="18" />
            LinkedIn
          </a>
          <a :href="'mailto:' + heroLinks.email"
            class="text-base-content-secondary hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider flex items-center gap-2">
            <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 01-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { content } from '~/lib/content';
import { useLang } from '~/composables/useLang';

const { lang } = useLang();
const heroGreeting = computed(() => content.static.hero.greeting[lang.value]);
const heroContent = computed(() => content.static.hero.items[lang.value]);
const heroLinks = content.shared.links;

// Typewriter state
const typedTextRef = ref(null);
const typedSubRef = ref(null);
const headlineRef = ref(null);
const subRef = ref(null);
const ctaRef = ref(null);
const socialRef = ref(null);
const indicatorsRef = ref(null);

const currentSlide = ref(0);
let typewriterTimer = null;
let carouselTimer = null;

// Current CTA text (reactive to slide)
const currentCtaPrimary = computed(() => content.static.hero.items[lang.value][currentSlide.value]?.cta.primary || '');
const currentCtaSecondary = computed(() => content.static.hero.items[lang.value][currentSlide.value]?.cta.secondary || '');

// Typewriter effect
function typewrite(element, text, speed = 50, callback) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      typewriterTimer = setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

// Clear typewriter and reset
function clearTypewriter() {
  if (typewriterTimer) {
    clearTimeout(typewriterTimer);
    typewriterTimer = null;
  }
}

// Start typewriter sequence for a given slide
function startTypewriterForSlide(slideIndex) {
  clearTypewriter();
  currentSlide.value = slideIndex;

  const item = content.static.hero.items[lang.value][slideIndex];
  if (!item) return;

  // Reset refs
  if (typedTextRef.value) typedTextRef.value.textContent = '';
  if (typedSubRef.value) typedSubRef.value.textContent = '';

  // Phase 1: Type headline
  typewrite(typedTextRef.value, item.headline, 45, () => {
    // Pause after headline, then type subheadline
    typewriterTimer = setTimeout(() => {
      typewrite(typedSubRef.value, item.subheadline, 25, () => {
        // After typing completes, show CTA + socials + indicators
        if (ctaRef.value) ctaRef.value.classList.remove('opacity-0');
        if (socialRef.value) socialRef.value.classList.remove('opacity-0');
        if (indicatorsRef.value) indicatorsRef.value.classList.remove('opacity-0');

        // Start carousel after pause
        carouselTimer = setTimeout(() => {
          advanceSlide();
        }, 6000);
      });
    }, 800);
  });
}

// Advance to next slide
function advanceSlide() {
  const items = content.static.hero.items[lang.value];
  const nextSlide = (currentSlide.value + 1) % items.length;

  // Fade out current content
  if (ctaRef.value) ctaRef.value.classList.add('opacity-0');
  if (socialRef.value) socialRef.value.classList.add('opacity-0');
  if (indicatorsRef.value) indicatorsRef.value.classList.add('opacity-0');

  // Clear existing typewriter
  clearTypewriter();

  // Start new typewriter sequence
  typewriterTimer = setTimeout(() => {
    startTypewriterForSlide(nextSlide);
  }, 400);
}

// Go to specific slide
function goToSlide(index) {
  clearTypewriter();
  if (carouselTimer) clearTimeout(carouselTimer);

  // Fade out
  if (ctaRef.value) ctaRef.value.classList.add('opacity-0');
  if (socialRef.value) socialRef.value.classList.add('opacity-0');
  if (indicatorsRef.value) indicatorsRef.value.classList.add('opacity-0');

  typewriterTimer = setTimeout(() => {
    startTypewriterForSlide(index);
  }, 300);
}

onMounted(() => {
  startTypewriterForSlide(0);
});

onUnmounted(() => {
  clearTypewriter();
  if (carouselTimer) clearTimeout(carouselTimer);
});
</script>

<style scoped>
.cursor-blink {
  animation: blink 1s step-end infinite;
  color: var(--color-primary);
  font-weight: 300;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
