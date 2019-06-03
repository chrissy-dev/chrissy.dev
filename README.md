# chriscollins.me

Personal website built with 11ty. 

[![Netlify Status](https://api.netlify.com/api/v1/badges/be563c8f-e704-4135-87eb-ab90f9862134/deploy-status)](https://app.netlify.com/sites/chrisssy/deploys)

## Notes 

- This project uses Eleventy as a static site generator.
- Templating is Liquid (can be changed if you want). 
- Compile CSS and TailwindCSS with PostCSS
- PurgeCSS to remove unused CSS (Set up for TailwindCSS by default)
- A good handful of SEO meta tags set up
- Sitemap generated automatically
- Pull in latest instagram posts on build (works with IFTTT to trigger a build)

## Getting started

Install dependencies 

```
npm install
```

Start the development server

```
npm start
```

### Generating a build

```
npm run build
```

