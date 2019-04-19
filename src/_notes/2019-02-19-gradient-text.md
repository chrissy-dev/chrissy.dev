---
title: Accessible text gradients using CSS
date: 2019-02-19
featured_image: /assets/images/gradient-text.jpg
---

```css
h1 {
  font-size: 3rem;
  background: #2193b0; /* fallback for old browsers */
  background: linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

