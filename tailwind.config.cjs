const defaultTheme = require('tailwindcss/defaultTheme');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#9145FF',
          200: '#8439FF',
          300: '#6F3FCF',
          400: '#573299',
          500: '#502E7B',
          600: '#422660',
          700: '#25143A',
          800: '#0F071D',
          900: '#0D0A13',
        },
      },
    },
  },

  plugins: [
    // Tailwind
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),

    // Iconify
    addDynamicIconSelectors(),
  ],
};

module.exports = config;
