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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: { 50: '#fdf6e3', 100: '#faedc7', 200: '#f2d58f', 300: '#e8be57', 400: '#d4a853', 500: '#b8860b', 600: '#9a7209', 700: '#7c5e07', 800: '#5e4a05', 900: '#403603' },
        secondary: { 50: '#fdf8f0', 100: '#faf0dd', 200: '#f5e0b8', 300: '#edd093', 400: '#d4a853', 500: '#b8860b', 600: '#8b6914', 700: '#6b5e4f', 800: '#4a4035', 900: '#2c2418' },
        accent: { 50: '#f5f0eb', 100: '#ebe1d7', 200: '#d7c3af', 300: '#c3a587', 400: '#8b7355', 500: '#6b5e4f', 600: '#5a4f42', 700: '#4a4035', 800: '#3a3128', 900: '#2a231b' },
      },
    },
  },
};
