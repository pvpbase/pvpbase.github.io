# PvPBase Preview

The public preview page for PvPBase — a shared foundation for standardized Minecraft PvP kits.

## Quick start

This is a static website. Open `index.html` in a browser or publish the repository with GitHub Pages. No build step or package manager is required.

## Project structure

- `index.html` — page structure and CDN dependencies
- `assets/css/` — design tokens, base styles, reusable components, animations and page styles
- `assets/js/` — application entry point and focused JavaScript modules
- `docs/` — component and project documentation

## Styling and components

Start with [the component library](docs/components.md). Design tokens are centralized in `assets/css/tokens.css`; reusable classes live in `assets/css/components.css`.

## External libraries

- [Tailwind CSS Play CDN](https://tailwindcss.com/docs/installation/play-cdn) for optional utility classes
- [Lucide](https://lucide.dev/) for outline interface icons
- [Font Awesome](https://fontawesome.com/) for brand icons such as Discord
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)

These are loaded from CDNs. An internet connection is required for the external assets.

## Accessibility

The page includes semantic landmarks, visible keyboard focus, accessible labels, and a reduced-motion fallback. Keep these when adding new sections or animations.
