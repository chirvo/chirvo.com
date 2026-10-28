// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  css: [join(dirname(fileURLToPath(import.meta.url)), "app/assets/css/main.css")],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Irving Bermúdez — Full-Stack Engineer & Linux Specialist",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Full-stack engineer and Linux specialist with 20+ years designing and shipping high-availability systems, from bare metal to the browser.",
        },
        { name: "theme-color", content: "#fdf6e3" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Irving Bermúdez — Full-Stack Engineer & Linux Specialist" },
        {
          property: "og:description",
          content:
            "20+ years of high-availability systems: Linux, distributed systems, cloud, and the whole stack in between.",
        },
        { property: "og:image", content: "/images/irving.jpg" },
        { name: "twitter:card", content: "summary" },
      ],
      link: [
        { rel: "canonical", href: "https://chirvo.com/" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "16x16 32x32 48x48" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "preload", as: "image", href: "/images/irving.jpg" },
      ],
    },
  },
});
