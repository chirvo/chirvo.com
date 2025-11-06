// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  css: [join(currentDir, "app/assets/css/main.css")],
});
