import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#D1E2FF', // Example custom white color
        'custom-purple': '#9055A6'
      },
    },
  },
  plugins: [],
}

export default config
