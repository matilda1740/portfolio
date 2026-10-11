# Prefer external project links over embedded demos

- Status: Accepted
- Date: 2026-10-08

## Context

Some projects have external resources such as Streamlit applications, GitHub repositories, or Figma prototypes. Embedded applications can be slow, unavailable while waking from sleep, difficult to use on mobile, and visually inconsistent with the portfolio.

## Decision

Use static previews and clearly labelled external links:

- GitHub repositories for MicroVision and Shades of Ruth.
- A Figma prototype link for Hackcorruption.
- External live-demo links where available.

Do not embed live applications in the initial version. If an embed becomes valuable later, load it only after an explicit user action.

## Consequences

- The portfolio remains fast and usable when an external app is unavailable.
- Visitors can choose whether to open a demo, repository, or prototype.
- Link labels must accurately describe the destination.
- Screenshots and static previews need meaningful alternative text.
