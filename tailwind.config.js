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
        },
        'orange': {
          100: '#FFEEE6',
          200: '#FED4BF',
          300: '#FEBA99',
          400: '#FD864D',
          500: '#FC5200',
          600: '#E34A00',
          700: '#973100',
          800: '#712500',
          900: '#4C1900',
        },
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
    content: ['./src/**/*.html', './src/**/*.njk', './src/**/*.js', './.eleventy.js'],
  } : {}
}