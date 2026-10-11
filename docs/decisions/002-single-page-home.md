# Use a focused homepage

- Status: Accepted
- Date: 2026-10-08

## Context

The first version will present three selected projects: MicroVision, Shades of Ruth, and Hackcorruption. A separate project index, About page, and Contact page would add navigation and maintenance without improving the initial experience.

## Decision

Put the essential overview on the homepage:

- Hero
- Selected project cards
- About section
- Resume callout
- Contact links
- Footer

Keep detailed project case studies under `/projects/[slug]` and the full resume under `/resume`.

## Consequences

- Visitors can understand the portfolio from one page.
- The homepage stays focused because deeper technical content remains on case-study pages.
- There are fewer top-level routes to maintain.
- A project index can be added later if the number of projects grows substantially.
