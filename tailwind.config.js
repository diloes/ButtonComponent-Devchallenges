/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        'blue-trasnparent': 'rgba(41, 98, 255, 0.10)'
      }
    }
  },
  plugins: []
}
