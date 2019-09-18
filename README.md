<p align="center">
	<img src="/src/assets/images/avatar.jpg" alt="Chris Collins Avatar" width="56" align="center" />
</p>

<p align="center"><a href="https://www.chriscollins.me"><strong>chriscollins.me</strong></a></p>

<p align="center"><em>Eleventy · Tailwind CSS · HTML · CSS · Netlify</em></p>
<p align="center"><img src="https://api.netlify.com/api/v1/badges/be563c8f-e704-4135-87eb-ab90f9862134/deploy-status"></p>


## What's used? 

- Eleventy as a static site generator
- Templating is Liquid 
- Compile CSS and TailwindCSS with PostCSS (with some plugins)
- PurgeCSS to remove unused CSS (Set up for TailwindCSS by default)
- A good handful of SEO meta tags set up
- Sitemap generated automatically
- Pull in latest instagram posts on build (works with IFTTT to trigger a build)
- Use [Jimp](https://github.com/oliver-moran/jimp#readme) to create optimised versions of photos
- Support native dark mode 
- Webmentions (Basic support, needs more work)


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

