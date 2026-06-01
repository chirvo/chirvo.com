import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Composable that counts from 0 to target when the element enters viewport.
 * Usage: const { value, start } = useAnimatedCounter(20, { suffix: '+', duration: 2000 });
 */
export function useAnimatedCounter(target, options = {}) {
  const {
    suffix = '',
    prefix = '',
    duration = 2000,
    decimals = 0,
  } = options;

  const current = ref(0);
  const hasStarted = ref(false);
  let animationFrame = null;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic for smooth deceleration
    const eased = 1 - Math.pow(1 - progress, 3);
    current.value = Math.round(eased * target);

    if (progress < 1) {
      animationFrame = requestAnimationFrame(step);
    }
  }

  function start() {
    if (hasStarted.value) return;
    hasStarted.value = true;
    current.value = 0;
    startTime = null;
    animationFrame = requestAnimationFrame(step);
  }

  function reset() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    current.value = 0;
    hasStarted.value = false;
  }

  onUnmounted(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
  });

  return { value: current, start, reset };
}
