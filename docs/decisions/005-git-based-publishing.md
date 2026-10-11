# Use Git-based publishing controls

- Status: Accepted
- Date: 2026-10-11

## Context

The portfolio is maintained by its owner and currently has a small number of projects. A custom admin dashboard would require authentication, a database or CMS, media management, and additional security and maintenance work.

## Decision

Manage projects as validated Markdown content in Git. Use frontmatter controls:

- `published` controls whether a project gets a public project route.
- `featured` controls whether a published project appears on the homepage.
- `sortOrder` controls the order of featured project cards.

Publishing is a GitHub and Vercel workflow: edit content, review locally or in a Vercel preview, then push the approved change.

## Consequences

- Project changes have a complete, reviewable history.
- Unpublished projects are excluded from the static build.
- No admin credentials, database, or CMS are required.
- A CMS can be introduced later if the number of editors or projects makes Git-based editing insufficient.
