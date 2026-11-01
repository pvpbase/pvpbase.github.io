# Codebase structure

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   └── pages/
│   │       └── home.css
│   └── js/
│       ├── main.js
│       └── modules/
│           ├── animations.js
│           └── countdown.js
└── docs/
    ├── animations.md
    ├── components.md
    └── structure.md
```

## CSS loading order

1. `tokens.css` defines the design system.
2. `base.css` defines global defaults and background layers.
3. `components.css` defines reusable UI classes.
4. `animations.css` defines motion and loader behavior.
5. `pages/home.css` contains layout rules used only by the landing page.

## JavaScript loading

`assets/js/main.js` is the entry point. It imports independent modules for the countdown and entrance animations. The site uses native browser modules and does not require a bundler.
