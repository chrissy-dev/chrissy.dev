module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js', 'utils/**/*.js'],
  } : {}
}