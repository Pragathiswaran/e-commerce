/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 25px 70px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

