// tailwind.config.js
module.exports = {
  content: [
    './_includes/**/*.{html,js,jsx,ts,tsx}',
    './_layouts/**/*.{html,js,jsx,ts,tsx}',
    './assets/js/react-components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};