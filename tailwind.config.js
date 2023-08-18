/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ash': "#F6F8FF",
        'back': "#FEFEFE",
        'darkoo': "#1E2A47",
        'thick': "#141D2F",
        'link': "#0079FF",
      }
    },
  },
  plugins: [],
}

