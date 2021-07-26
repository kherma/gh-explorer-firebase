const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        yellow: colors.amber,
        green: colors.green,
      },
      screens: {
        xs: '361px',
      },
      animation: {
        roll: 'rollDown 0.2s ease-in-out forwards',
        scale: 'scaleUp 0.7s ease-in-out backwards',
        slide: 'slideIn 0.7s ease-out 0.7s backwards',
      },
      keyframes: {
        rollDown: {
          '0%': { transform: 'translateY(-5px)', clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
          '10%': { transform: 'translateY(0)', clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        scaleUp: {
          '0%': { transform: 'translateY(-50px) scale(0)' },
          '70%': { transform: 'translateY(-50px) scale(1.1)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        slideIn: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      cursor: ['disabled'],
      translate: ['dark'],
    },
  },
  plugins: [],
};
