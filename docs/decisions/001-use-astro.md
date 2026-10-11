# Use Astro for the portfolio

- Status: Accepted
- Date: 2026-10-08

## Context

The site is primarily static content: a homepage, project case studies, an HTML resume, and contact links. It does not require a backend, database, authentication, or a large client-side application.

## Decision

Use Astro with static output and TypeScript.

## Alternatives considered

- Next.js
- A React-only application
- A hosted website builder

## Consequences

- Pages can be rendered as fast static HTML.
- Client-side JavaScript remains limited to interactions that need it.
- Project content can be managed separately from presentation as the site grows.
- Astro-specific conventions, such as layouts and content collections, must be learned and documented.
