# Gautam Kumar — 3D Developer Portfolio

A responsive dark portfolio built with React, Vite, Three.js, React Three Fiber, Drei, and Framer Motion. The hero includes an interactive 3D laptop workspace; the rest of the page presents profile information, skills, projects, open-source contributions, and coding profiles.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Customize your content

Most portfolio content is centralized in `src/data.js`:
- `profile`: introduction, education, location, and social links
- `skills`: technology groups
- `projects`: featured projects and links
- `contributions`: selected merged contributions
- `openPullRequests`: selected PR links

The 3D scene is in `src/components/Workspace3D.jsx`. Styling and responsive breakpoints are in `src/styles.css`.

## Notes

- The portfolio uses external Google Fonts and the Three.js environment preset, so an internet connection is useful during development.
- Open pull-request links reflect the supplied README snapshot and should be reviewed periodically.
- Coding problem counts are also based on the supplied README snapshot.
- No personal photograph is required; the hero uses a generated 3D workspace scene.
# gautam_portfolio
