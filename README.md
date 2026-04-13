# Oulad Chatta

A production-ready Vite + React landing site for Oulad Chatta, focused on Sahrawi Hassani heritage, ensemble presentation, and booking inquiries.

## Stack

- React 19
- TypeScript
- Vite 8
- CSS Modules

## Requirements

- Node.js `20.19.0` or newer
- npm `10+` recommended

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
npm run check
```

## Deployment

This project builds to a static `dist/` folder, so it works well on:

- Vercel
- Netlify
- Cloudflare Pages
- Firebase Hosting
- GitHub Pages

Standard production flow:

```bash
npm install
npm run check
npm run build
```

Then deploy the generated `dist/` directory.

## Project Notes

- Navigation and CTA links point to real sections.
- The inquiry form works on static hosting by opening the user's default email client with a pre-filled message.
- Remote imagery now has graceful fallbacks so the site stays presentable if third-party images fail to load.
- Basic SEO, manifest, and robots metadata are included for deployment.

## If You Deploy To A Subfolder

If you deploy this site under a subpath instead of a root domain, set the Vite `base` option in [vite.config.ts](/c:/Users/HP/Desktop/oulad%20chatta/vite.config.ts).
