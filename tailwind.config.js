/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:"#B336FF"
      },
      animation:{
        'pulse-slow': 'pulse 10s linear infinite',
        'ping-slow': 'ping 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',

      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

