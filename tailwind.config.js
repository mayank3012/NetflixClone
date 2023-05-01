/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'short': { 'raw': '(max-height: 600px)' },
        'xshort': { 'raw': '(max-height: 400px)' },
        // => @media (min-height: 800px) { ... }
      },
      keyframes: {
        zoomin: {
          '0%': { transform: 'scale(0)' },
          '100%': { tansform: 'scale(1)' }
        },
      },
      animation: {
        'zoom-in': 'zoomin 200ms ease-out',
      },
    },
  },
  plugins: [],
}

