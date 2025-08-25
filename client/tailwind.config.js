/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/drizzle-cube/dist/client/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}