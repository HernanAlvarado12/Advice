/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  future: {
    hoverOnlyWhenSupported: true    
  },
  theme: {
    extend: {
      spacing: {
        '0.5': '0.3rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'base': '2.4rem',
        'lg': '3.2rem',
        'xl': '4.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      colors: {
        cyan: 'hsl(193, 38%, 86%)',
        green: 'hsl(150, 100%, 66%)',
        blue: {
          DEFAULT: 'hsl(217, 19%, 38%)',
          100: 'hsl(217, 19%, 24%)',
          200: 'hsl(218, 23%, 16%)'
        }
      },
      boxShadow: {
        icon: '0 0 3rem, 0 0 4rem hsl(218, 23%, 16%)'
      }
    },
  },
  plugins: [],
}
