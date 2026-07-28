# Essence Roberts — Portfolio

A personal portfolio site for Essence Roberts, Full Stack Developer. It showcases her background, experience, and projects through a photography-first, Apple-inspired interface — edge-to-edge tiles, alternating light and dark sections, and a single accent color doing all the interactive work.

## Design-Driven Build

This site was built using a **DESIGN.md-driven workflow**, with [Claude Code](https://claude.com/claude-code) as an AI coding agent. The process:

- I selected and specified the design system in [`DESIGN.md`](./DESIGN.md) — colors, typography, spacing, and component treatments — modeled after Apple's marketing site aesthetic.
- Claude Code implemented the React components and Tailwind styling directly from that spec, translating design tokens into working UI.
- I directed the build, wrote all of the content (bio, experience, project write-ups), and iterated on the design through multiple passes until the result matched the intended look and feel.

`DESIGN.md` remains in the repo as the source of truth for the design system.

## Tech Stack

- **[React 19](https://react.dev/)** — UI components
- **[Vite](https://vite.dev/)** — dev server and build tooling
- **[Tailwind CSS 4](https://tailwindcss.com/)** (via `@tailwindcss/vite`) — styling
- **[Oxlint](https://oxc.rs/)** — linting

## Features

- **Hero** — name, role, and a short intro with quick links to Projects and Contact
- **About** — bio and background summary
- **Experience** — work history and training
- **Projects** — project cards with images, tags, descriptions, and links to live sites / GitHub repos
- **Contact** — email, LinkedIn, and GitHub links
- Responsive, mobile-first layout throughout
- Custom design system defined in `DESIGN.md` and implemented via Tailwind theme tokens

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/essencenroberts/portfolio-v2.git
cd portfolio-v2
npm install
```

Run the dev server:

```bash
npm run dev
```

Other available scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint       # run Oxlint
```

## Connect

- **Portfolio:** _add your live URL here_
- **LinkedIn:** [linkedin.com/in/essencenroberts](https://linkedin.com/in/essencenroberts)
- **GitHub:** [github.com/essencenroberts](https://github.com/essencenroberts)
