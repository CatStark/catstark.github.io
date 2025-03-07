// tailwind.config.js
module.exports = {
  content: [
    './_includes/**/*.{html,js,jsx,ts,tsx}',
    './_layouts/**/*.{html,js,jsx,ts,tsx}',
    './assets/js/react-components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg-main)',
        foreground: 'var(--color-text-main)',
        primary: 'var(--color-text-link)',
        secondary: 'var(--color-border-light)',
        accent: 'var(--color-border-dark)'
      }
    },
  },
  plugins: [],
}