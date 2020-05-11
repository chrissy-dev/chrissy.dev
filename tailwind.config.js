module.exports = {
  theme: {
    extend: {
      colors: {
        'blue': {
          100: '#E6F0FF',
          200: '#BFDAFF',
          300: '#99C3FF',
          400: '#4D97FE',
          500: '#006AFE',
          600: '#005FE5',
          700: '#004098',
          800: '#003072',
          900: '#00204C',
        }
      },
      spacing: {
        '16/9': '56.25%'
      },
      inset: {
        '1': '0.5rem',
        '2': '1rem',
        '3': '1.5rem',
        '4': '2rem',
        '5': '2.5rem'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.njk', './src/**/*.js'],
  } : {}
}