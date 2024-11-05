/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
         'custom-radial': 'radial-gradient(ellipse closest-side at center,#6b7280,#374151,#000000)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        assistant: ['Assistant', 'sans-serif'],
  },
  plugins: [],
}
  }
}
