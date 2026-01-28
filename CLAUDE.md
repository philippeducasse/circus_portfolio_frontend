# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start development server on port 3000
yarn build        # Build for production
yarn generate     # Generate static site
yarn preview      # Preview production build locally
yarn start        # Run production server (requires prior build)
```

## Deployment

Push to the `production` branch to trigger automated deployment:
```bash
git push origin main:production
```

This triggers a GitHub Actions workflow that builds a Docker image, pushes to Docker Hub, and deploys to the VPS.

## Architecture

This is a Nuxt 4 portfolio website for a circus artist with i18n support (English/French).

### Key Technologies
- **Nuxt 4** with Vue 3 and TypeScript
- **@nuxt/ui** for UI components (using `<UApp>`, `<UButton>`, etc.)
- **Tailwind CSS 4** for styling
- **@nuxtjs/i18n** for internationalization (no URL prefix strategy)
- **@nuxtjs/google-fonts** with Amatic SC (headings) and Inter (body)

### Project Structure
- `pages/` - Route pages (about, calendar, contact, dsvgo, projects, support)
- `components/layout/` - Layout components (Navbar, Footer, ContentLayout, LogoWithName)
- `components/page-components/` - Page-specific components organized by feature (calendar, landing, projects)
- `layouts/default.vue` - Main layout with Navbar, ContentLayout wrapper, and Footer
- `i18n/i18n.config.ts` - All translation strings for EN/FR
- `assets/css/main.css` - Global styles with base typography using Tailwind layers

### Styling Conventions
- Headings (h1-h4) use Amatic SC font family
- Body text uses Inter font
- Dark mode is the default and only color mode
- Primary color is configured in `app.config.ts`