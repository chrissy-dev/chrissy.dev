---
title: Using ordinal indicators with dates in Eleventy 
date: 2019-05-24
featured_image: /assets/images/11ty.jpg
---

<p class="px-8 py-4 bg-yellow-100 border-t border-b md:border border-yellow-300 text-sm mb-6 -mx-8">
    <strong>This post is now archived.</strong> LiquidJS provides a tag out the box to handle ordinal dates (<a href="https://twitter.com/eleven_ty/status/1149721782926135298">Thanks Zach for the heads up!</a>).  I'll keep this post available just incase someone finds it useful. 
</p>


Recently I needed to display a `datetime` stamp in a human readable form with `st`, `nd`, `rd` and `th` after the day value 🤔. 

Luckily, using [11ty.io](https://11ty.io) as a static site generator with liquid templating makes this very simple with 11ty's [custom filters](https://www.11ty.io/docs/filters/).

Add a custom `ordinal` filter to your `.eleventy.js`

```js
// Ordinal date filter
eleventyConfig.addFilter("ordinal", function(date) {
    return date + (date > 0 ? ['th', 'st', 'nd', 'rd'][(date > 3 && date < 21) || date % 10 > 3 ? 0 : date % 10] : '');
});
```

It can then be used on the day value with the rest of the date parsed as you like.

{% raw %}
```html
{{ date | date: "%d" | ordinal }} {{ date | date: "%B %Y" }}
```
{% endraw %}

This will render:

```bash
1st May 2019 
```

There is probably a much cleaner way to do this ~~but this is the way I'm currently doing it 😄.~~ 