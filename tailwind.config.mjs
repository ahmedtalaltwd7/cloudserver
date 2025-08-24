/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
      },
      direction: {
        'rtl': 'rtl',
      }
    },
  },
  plugins: [],
}
