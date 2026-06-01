import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Composable that tracks scroll progress percentage and active section.
 * Returns progress (0-100) and activeSection (id string).
 */
export function useScrollProgress(sectionIds = []) {
  const progress = ref(0);
  const activeSection = ref('');
  let ticking = false;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    ticking = false;
  }

  function updateActiveSection() {
    const scrollPos = window.scrollY + window.innerHeight * 0.4;

    let current = '';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    }

    // If we're at the very top, highlight the first section
    if (!current && sectionIds.length > 0) {
      current = sectionIds[0];
    }

    activeSection.value = current;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateActiveSection();
      });
      ticking = true;
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();
    updateActiveSection();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return { progress, activeSection };
}
