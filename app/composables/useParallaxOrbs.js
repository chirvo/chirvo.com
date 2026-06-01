import { onMounted, onUnmounted } from 'vue';

/**
 * Composable that applies parallax drift to glow orbs based on scroll position.
 * Accepts an array of refs to orb elements with a data-parallax-speed attribute.
 */
export function useParallaxOrbs() {
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const orbs = document.querySelectorAll('[data-parallax-orb]');
        orbs.forEach((orb) => {
          const speed = parseFloat(orb.dataset.parallaxOrb) || 0.05;
          const yOffset = scrollY * speed;
          orb.style.transform = `translateY(${yOffset}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });
}
