/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-maroon': '#510F0F',
      }
      
    },
    fontFamily: {
      'custom': 'Jeju Hallasan',
    },
    backgroundImage: {
      'realBackground': "url('bg.png')" 
    },
    aspectRatio: {
      'custom': '4 / 3',
    },
    
  },
  plugins: [],
}