# Matilda Mwendwa Portfolio

A static portfolio website for presenting selected software engineering, research, and product work alongside a resume.

## Current status

The project is in active development. The current foundation includes:

- Astro with TypeScript.
- Tailwind CSS with semantic light and dark theme tokens.
- Self-hosted Fraunces, Inter, and JetBrains Mono fonts.
- A responsive homepage shell with navigation, theme toggle, and footer.
- Static output suitable for Vercel deployment.

Project case studies, the HTML resume, and final personal content are added in later phases.

## Technology

- [Astro](https://astro.build/) for static pages and layouts.
- [TypeScript](https://www.typescriptlang.org/) for type-safe configuration and components.
- [Tailwind CSS](https://tailwindcss.com/) for utility styling.
- [Fontsource](https://fontsource.org/) for locally bundled fonts.
- [Vercel](https://vercel.com/) for deployment.

Astro is a good fit because this site is primarily static content. It keeps client-side JavaScript limited to interactions that need it, such as the theme toggle.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
src/
  components/    Shared interface components
  layouts/       Reusable page layouts
  pages/         Public routes
  styles/        Global styles and theme tokens
public/          Static files such as the resume PDF and images
docs/
  decisions/     Architecture decision records
```

## Planned content workflow

The selected projects are:

1. MicroVision
2. Shades of Ruth
3. Hackcorruption

Each project will have a detailed case-study route under `/projects/[slug]`. MicroVision and Shades of Ruth will link to their GitHub repositories. Hackcorruption will link to its Figma prototype and will be described accurately as a design or prototype project unless implementation evidence is available.

The homepage will contain the hero, selected project cards, About section, resume callout, contact links, and footer. A separate project index, About page, and Contact page are intentionally not planned for the first version.

## Deployment

The GitHub repository is connected to Vercel. The intended deployment flow is:

```text
Push to GitHub
  -> Vercel installs dependencies
  -> npm run build
  -> Vercel publishes dist/
```

Vercel should create preview deployments for branch changes and deploy the production branch after it is merged or pushed according to the repository settings.

The project is configured for static output with `dist/` as the build directory. No environment variables or backend services are currently required.

## Documentation

Important implementation decisions are recorded in [`docs/decisions/`](./docs/decisions/). The website case studies will document project outcomes for external readers, while this README documents the repository and development workflow.

## Verification before publishing

Before sharing a deployment:

1. Run `npm run build`.
2. Review the generated site in a browser at desktop and mobile widths.
3. Test keyboard navigation and the theme toggle.
4. Check internal, GitHub, Figma, resume, and live-demo links.
5. Review the Vercel preview deployment before promoting changes to production.
