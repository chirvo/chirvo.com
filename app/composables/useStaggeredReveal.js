import { onMounted, onUnmounted } from 'vue';

/**
 * Composable that staggers reveal animations for a list of elements.
 * Usage: const { targets } = useStaggeredReveal('.stagger-item', { delay: 80 });
 * Then call targets.value to get the NodeList, and add .stagger-active class when triggered.
 */
export function useStaggeredReveal(selector, options = {}) {
  const {
    delay = 80,
    threshold = 0.1,
    rootMargin = '0px 0px -40px 0px',
  } = options;

  let observer = null;
  let triggered = false;

  function trigger() {
    if (triggered) return;
    triggered = true;

    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * delay}ms`;
      item.classList.add('stagger-active');
    });
  }

  function cleanup() {
    if (observer) {
      observer.disconnect();
    }
  }

  onMounted(() => {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    // Wrap all items in a container observer
    const container = items[0].parentElement;
    if (!container) return;

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          trigger();
          observer.disconnect();
          return;
        }
      }
    }, { threshold, rootMargin });

    observer.observe(container);
  });

  onUnmounted(() => {
    cleanup();
  });

  return { trigger };
}
