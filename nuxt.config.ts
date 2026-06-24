// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: [join(dirname(fileURLToPath(import.meta.url)), "app/assets/css/main.css")],

  // FOUC-prevention: read persisted theme and set data-theme on <html>
  // before any CSS is applied or the page paints.
  app: {
    head: {
      script: [
        {
          innerHTML:
            "(function(){try{var t=localStorage.getItem('theme');" +
            "document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')" +
            "}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();",
          tagPosition: "head",
        },
      ],
    },
  },
});
