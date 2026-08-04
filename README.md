# Aryan Thind — Portfolio

A single-page portfolio built with React, TypeScript, Vite, and Tailwind CSS v4.

## Design

Instead of a generic dark-theme template, the visual language is built around
My actual work: computer vision, AR, and sensor-based projects. The
signature elements are a point-cloud "scan grid" background with a sweeping
scan line in the hero, and viewfinder-style corner brackets on the hero
readout card and the highlighted project — a nod to the AR bounding-box UI
from the WallHax and Gazer projects.

- **Display face:** Space Grotesk
- **Mono/data face:** IBM Plex Mono (labels, tags, the HUD readout)
- **Body face:** Inter
- **Palette:** deep indigo-navy background, cyan "scan" accent, warm amber
  accent for the human/nonprofit side of the work

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Editing content
All real content
(bio, experience, projects, skills, education, social links) lives in:

```
src/data/portfolio.json
```

Open that file and edit the values directly. A few notes:

- `projects[].highlight: true` pins that project first and gives it the
  bracket-frame treatment. Set at most 1–2 projects to `true` so it stays
  meaningful.
- `projects[].link: ""` (empty string) hides the "View" link on that card —
  useful for hackathon projects with no public repo.
- `profile.social.*` — leave any field as an empty string to hide that icon
  entirely (handled in `SocialLinks.tsx`).
- Word-break: body text uses `word-break: normal` everywhere on purpose —
  don't remove that when editing styles, or long words in the bio/project
  descriptions can wrap mid-word on narrow screens.

## Structure

```
src/
  data/portfolio.json       ← all content, edit this
  types/portfolio.ts        ← TypeScript shape of the content
  hooks/usePortfolio.ts     ← typed accessor components use instead of the JSON directly
  components/
    Navbar.tsx
    SocialLinks.tsx
    HeroSection.tsx
    AboutSection.tsx
    ExperienceSection.tsx
    ProjectsSection.tsx
    ProjectCard.tsx
    SkillsSection.tsx
    Footer.tsx
  index.css                 ← design tokens (@theme) + the scan/bracket motif CSS
  App.tsx
  main.tsx
```

## Deploying

Any static host works since this is a Vite SPA with no server dependency.
Easiest options:

- **Vercel / Netlify:** connect the GitHub repo, build command `npm run
  build`, output directory `dist`. Auto-deploys on every push to `main`.
- **GitHub Pages:** run `npm run build`, then push the contents of `dist/`
  to a `gh-pages` branch (or use the `gh-pages` npm package to automate it).
