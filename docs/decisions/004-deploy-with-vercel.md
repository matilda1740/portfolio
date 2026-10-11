# Deploy with Vercel

- Status: Accepted
- Date: 2026-10-08

## Context

The site is a static Astro project hosted from GitHub. The deployment platform should provide a low-configuration workflow, preview deployments, and automatic production builds.

## Decision

Deploy the portfolio through the GitHub-to-Vercel integration.

Use:

```text
Build command: npm run build
Output directory: dist
```

## Consequences

- Pushing changes to GitHub can trigger deployments automatically.
- Preview deployments can be reviewed before production.
- No application server or deployment-specific backend code is needed.
- The Vercel project and GitHub repository settings become part of the deployment workflow.
