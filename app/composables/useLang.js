import { ref } from 'vue';

const lang = ref('en');

export function useLang() {
  const setLang = (newLang) => {
    lang.value = newLang;
  };

  return {
    lang,
    setLang,
  };
}
