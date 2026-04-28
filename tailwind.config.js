/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"','cursive'],
        mono:  ['"Space Mono"','monospace'],
        sans:  ['"DM Sans"','sans-serif'],
      },
      colors: {
        bg:   '#040408',
        bg2:  '#080812',
        card: '#0d0d1a',
        red:  '#ff2244',
        red2: '#ff6680',
        gold: '#ffd166',
        cyan: '#00f5d4',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-rev':  'spin 15s linear infinite reverse',
        'float':     'float 6s ease-in-out infinite',
        'shimmer':   'shimmer 3s linear infinite',
      },
      keyframes: {
        float:   { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-16px)' } },
        shimmer: { from:{ backgroundPosition:'0% center' }, to:{ backgroundPosition:'200% center' } },
      },
    },
  },
  plugins: [],
}
