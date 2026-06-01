import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Composable that triggers CSS animations when elements enter viewport.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options;

  const observed = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        if (once) observer.unobserve(entry.target);
      } else if (!once) {
        entry.target.classList.remove('reveal-active');
      }
    }
  }, { threshold, rootMargin });

  function observe(el) {
    if (el && !observed.has(el)) {
      observed.add(el);
      observer.observe(el);
    }
  }

  function unobserve(el) {
    if (el) {
      observer.unobserve(el);
      observed.delete(el);
    }
  }

  onUnmounted(() => {
    observer.disconnect();
  });

  return { observe, unobserve };
}

/**
 * Composable that returns a ref to an element and auto-observes it.
 */
export function useRevealElement(options = {}) {
  const target = ref(null);
  const { observe } = useScrollReveal(options);

  onMounted(() => {
    if (target.value) observe(target.value);
  });

  return target;
}

/**
 * Composable that reveals all children with 'reveal-slow' class
 * when the section container enters the viewport.
 * Defers IntersectionObserver creation to onMounted for SSR safety.
 */
export function useSectionReveal(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -40px 0px',
  } = options;

  let observer = null;
  const queuedRefs = [];

  function observe(el) {
    if (!el) return;
    if (observer) {
      observer.observe(el);
    } else {
      queuedRefs.push(el);
    }
  }

  onMounted(() => {
    if (typeof window === 'undefined') return;
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.reveal-slow');
          children.forEach((child) => {
            child.classList.add('reveal-active');
          });
          observer.unobserve(entry.target);
        }
      }
    }, { threshold, rootMargin });

    // Re-observe any refs that were queued before mount
    for (const ref of queuedRefs) {
      observer.observe(ref);
    }
    queuedRefs.length = 0;
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { observe };
}
