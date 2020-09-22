module.exports = {
  theme: {
    fontFamily: {
      'body': ['Libre Baskerville', 'serif'],
    },
    typography: {
      default: {
        css: {
          code: {
            fontWeight: '500',
          },
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
          pre: {
            borderRadius: '0',
          },
        },
      },
    },
    extend: {
      colors: {
        'yellow': {
          '200': '#FBF1D6'
        }
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'last'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js'],
  } : {}
}