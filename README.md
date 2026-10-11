# Matilda Mwendwa Gitonga Portfolio

A static portfolio website for presenting selected software engineering, research, and product work alongside a resume.

## Current status

The current version includes:

- Astro with TypeScript.
- Tailwind CSS with semantic light and dark theme tokens.
- Self-hosted Fraunces, Inter, and JetBrains Mono fonts.
- A responsive homepage with a layered portrait hero, selected work, About, and Contact sections.
- Published project detail pages for MicroVision, Shades of Ruth, and InnoBid.
- A designed HTML resume page with a downloadable PDF.
- Reusable components for layout sections, contact links, project actions, breadcrumbs, project navigation, and the layered hero.
- Responsive mobile refinements for navigation controls, hero composition, project cards, and project pager alignment.
- Static output suitable for Vercel deployment.

The site is intentionally static and does not require a backend, database, authentication, or runtime API.

## Technology

- [Astro](https://astro.build/) for static pages and layouts.
- [TypeScript](https://www.typescriptlang.org/) for type-safe configuration and components.
- [Tailwind CSS](https://tailwindcss.com/) for utility styling.
- [Fontsource](https://fontsource.org/) for locally bundled fonts.
- [Vercel](https://vercel.com/) for deployment.

Astro is a good fit because this site is primarily static content. It keeps client-side JavaScript limited to interactions that need it, such as the theme toggle and mobile navigation.

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
  components/    Shared interface and layout components
  layouts/       Reusable page layouts
  pages/         Public routes
  styles/        Global styles and theme tokens
  content/       Markdown project entries
  content.config.ts
public/          Static files such as the resume PDF and images
docs/
  decisions/     Architecture decision records
.vscode/         Shareable editor recommendations and launch configuration
```

Important reusable components include:

- `Section.astro` — consistent page section wrapper with configurable IDs, borders, and spacing.
- `LayeredPortraitHero.astro` — responsive editorial hero collage with mobile-specific layer positioning.
- `ContactLinks.astro` — shared email, LinkedIn, GitHub, and location links.
- `ProjectActions.astro` — consistent project action buttons.
- `ProjectBreadcrumbs.astro` — project detail breadcrumbs.
- `ProjectPager.astro` — compact and card-style previous/next project navigation.
- `Header.astro`, `Footer.astro`, and `ThemeToggle.astro` — shared site chrome and theme interaction.

## Managing projects

Projects are managed through Markdown files in `src/content/projects/`. This is the current admin workflow:

1. Add or edit a project file.
2. Set `published: true` to generate its public project route, or `published: false` to keep it out of the site.
3. Set `featured: true` to show the project on the homepage.
4. Use `sortOrder` to control the order of featured project cards.
5. Run `npm run build`, review the local site, commit, and push to GitHub.

The content schema validates metadata at build time. Unpublished projects are excluded from generated routes, and only published featured projects appear on the homepage.

## Content workflow

The published projects are:

1. MicroVision
2. Shades of Ruth
3. InnoBid (Hackcorruption)

Each project has a detailed project route under `/projects/[slug]`. Project links are defined in the content frontmatter, including GitHub repositories, live demos, Figma prototypes, papers, and other external artifacts where available. InnoBid is described accurately as a design or prototype project unless implementation evidence is available.

The homepage contains the hero, selected project cards, About section, contact links, and footer. A separate project index, About page, and Contact page are intentionally not planned for the first version.

## Responsive design

The interface is designed mobile-first and is checked at narrow mobile widths as well as desktop widths. Current responsive behavior includes:

- Icon-only theme and menu controls on mobile, with accessible labels preserved.
- A mobile-specific layered hero composition rather than simply hiding desktop artwork.
- Shorter mobile hero copy to reduce first-screen height.
- Reduced mobile project image proportions to limit unnecessary scrolling.
- Intentional alignment for one-sided previous/next project navigation.
- Desktop-specific collage and typography overrides preserved at larger breakpoints.

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

## Editor configuration

The repository includes `.vscode/extensions.json` and `.vscode/launch.json` because they provide shareable project recommendations and a convenient Astro development-server launch configuration. They should remain version-controlled.

Machine-specific files such as personal settings, secrets, and local environment files should not be committed. The existing `.gitignore` excludes dependencies, build output, environment files, macOS metadata, and JetBrains settings.

## Documentation

Important implementation decisions are recorded in [`docs/decisions/`](./docs/decisions/). The website project pages will document project outcomes for external readers, while this README documents the repository and development workflow.

## Verification before publishing

Before sharing a deployment:

1. Run `npm run build`.
2. Review the generated site in a browser at desktop and mobile widths.
3. Test keyboard navigation and the theme toggle.
4. Check internal, GitHub, Figma, resume, and live-demo links.
5. Review the Vercel preview deployment before promoting changes to production.

## Suggested commit

For the current batch of portfolio architecture and responsive UI work:

```text
Refine portfolio components and responsive layouts
```
