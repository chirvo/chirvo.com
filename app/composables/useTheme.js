import { ref, onMounted, watch } from 'vue';

const STORAGE_KEY = 'theme';
const DEFAULT = 'dark';

// Module-level shared ref so every component sees the same state.
const theme = ref(DEFAULT);

function applyTheme(value) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', value);
}

function persist(value) {
  if (typeof localStorage === 'undefined') return;
  try { localStorage.setItem(STORAGE_KEY, value); } catch (_) { /* ponytail: storage can be blocked, ignore */ }
}

export function useTheme() {
  function setTheme(value) {
    theme.value = value;
    applyTheme(value);
    persist(value);
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
  }

  onMounted(() => {
    // The inline <head> script already set data-theme on <html>.
    // Sync the reactive ref so the switcher icon reflects reality.
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light' || current === 'dark') {
      theme.value = current;
    }
  });

  return { theme, setTheme, toggleTheme };
}
