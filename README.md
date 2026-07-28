# Essence Roberts — Portfolio

My personal portfolio site for built to showcases my background, experience, my skills, and path into software engineering.

## Design-Driven Build

This site was built using a **DESIGN.md-driven workflow**, with Claude Code, as an AI coding agent. The process:

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

- Responsive **Hero** — name, role, and a short intro with quick links to Projects and Contact
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
## About Me
I'm a developer based in Atlanta, GA, currently completeing Per Scholas AI-Native Full Stack Development program (MERN stack focus). My background spans digitla marketing, content strategy, and freelance creative work, experience that now shapes how I think about building products people actually want to use. I bring two years of self-taught JavaScript and React experience into thi program, and I'm working toward a Frontend, Full Stack, or Software Engineer role.


## Connect

- **Portfolio:** [essence-portfolio.netlify.app](https://essence-portfolio.netlify.app/)
- **LinkedIn:** [linkedin.com/in/essencenroberts](https://linkedin.com/in/essencenroberts)
- **GitHub:** [github.com/essencenroberts](https://github.com/essencenroberts)
