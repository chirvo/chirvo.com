/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app/app.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        recursive: ["Recursive", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "nord"],
  },
};
