# Component library

Reusable classes for the PvPBase visual language. The styles are plain CSS and can be used on any HTML element.

## Buttons

Use `.button` as the base class and add one variant.

```html
<a class="button button--primary" href="#">Primary action</a>
<a class="button button--outline" href="#">Secondary action</a>
<a class="button button--quiet" href="#">Quiet action</a>
```

Available modifiers:

| Class | Purpose |
| --- | --- |
| `.button--primary` | Accent-filled primary action |
| `.button--outline` | Subtle outlined action |
| `.button--quiet` | Low-emphasis action |
| `.button--small` | Compact button |
| `.button--large` | Larger button |
| `.button--block` | Full-width button |

Combine modifiers, for example `button button--primary button--large`.

## Surfaces

- `.surface` — translucent panel with a border and blur
- `.surface--accent` — accent border and subtle glow
- `.border-subtle` — standard low-contrast border

```html
<div class="surface surface--accent">Highlighted content</div>
```

## Status and labels

```html
<div class="status-pill">
  <span class="status-indicator"></span>
  Operational
</div>
<span class="eyebrow">Section label</span>
```

## Background and text helpers

- `.bg-page`, `.bg-grid`, `.bg-glow`
- `.text-muted`, `.text-accent`

## Icons

Lucide icons are outline icons. Add a `data-lucide` attribute and initialize Lucide with `lucide.createIcons()`.

```html
<i data-lucide="arrow-up-right" aria-hidden="true"></i>
<i class="fa-brands fa-discord" aria-hidden="true"></i>
```

Use Lucide for interface symbols and Font Awesome brand icons for logos. Do not use both icon systems for the same icon.
