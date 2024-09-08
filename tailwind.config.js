/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      textOutline: {
        'outline': 'yellow'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtil = {
        '.text-outline': {
          '-webkit-text-stroke': '1.2px yellow', // Замените на нужный вам цвет и размер обводки
          // 'color': 'transparent',
        },
        '.text-under-outline': {
          '-webkit-text-stroke': '0.8px yellow', // Замените на нужный вам цвет и размер обводки
        }
      }
      addUtilities(newUtil, ['responsive', 'hover'])
    }
  ],
}

// theme: {
//   extend: {
//     textOutline: {
//       'outline': '2px 2px #ff0000', // Замените на нужный вам цвет и размер обводки
//     },
//   },
// },
// plugins: [
//   function({ addUtilities }) {
//     const newUtilities = {
//       '.text-outline': {
//         textShadow: '2px 2px #ff0000', // Замените на нужный вам цвет и размер обводки
//       },
//     }
//     addUtilities(newUtilities, ['responsive', 'hover'])
//   }