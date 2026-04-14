/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'homework-bg': '#FFF1EC',
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
}

export default config
