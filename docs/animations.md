# Animations

## Page loader

Add `<div class="page-loader" data-loader>` near the beginning of the body. The main entry script hides it after the page loads, with a timeout fallback.

## Float-in

Add `data-float-in` to an element. It will animate into view once it enters the viewport.

```html
<h2 data-float-in>Section title</h2>
<p data-float-in data-delay="120">Appears slightly later</p>
```

The optional `data-delay` value is milliseconds. The observer stops watching an element after it has appeared.

## Motion preferences

The animation stylesheet respects `prefers-reduced-motion: reduce`. Keep the fallback in place when adding new animations.

## CSS animation tokens

- `--duration-fast`
- `--duration-normal`
- `--duration-slow`
- `--ease-out`

Use short transitions for controls and longer entrance animations for content. Avoid animating layout-heavy properties when transform and opacity are sufficient.
