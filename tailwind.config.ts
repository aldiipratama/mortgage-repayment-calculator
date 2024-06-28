import type { Config } from 'tailwindcss'

export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require('daisyui')],
} satisfies Config

