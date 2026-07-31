# Utkarsh — Portfolio Website

A modern, responsive developer portfolio built with React and Vite.

## Tech Stack

- **React 18** + **Vite 5** — fast, modern frontend
- **lucide-react** — clean, consistent icons
- **GitHub Pages** — free hosting directly from this repo
- **GitHub Actions** — auto-build and deploy on every push

## Features

- Hero, About, Skills, Projects, Education, and Contact sections
- Smooth scroll navigation and reveal-on-scroll animations
- Fully responsive across mobile, tablet, and desktop
- Dark, minimal aesthetic with a lime accent
- Auto-deploys to GitHub Pages on push to `main`

## Local Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # create a production build in dist/
npm run preview  # preview the production build locally
```

## Deployment

The site deploys automatically to GitHub Pages via the workflow in
`.github/workflows/deploy.yml` whenever code is pushed to the `main` branch.

To enable hosting:

1. Go to **Settings → Pages** in the GitHub repo.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` — the site goes live at:

   `https://<username>.github.io/portfolio-website/`

## Sections

| Section     | What it covers                          |
| ----------- | --------------------------------------- |
| Hero        | Name, title, quick intro, social links  |
| About       | Background, what I do, focus areas      |
| Skills      | Languages, frameworks, tools, concepts  |
| Projects    | Highlighted projects with links         |
| Education   | Academic background and coursework      |
| Contact     | Email and social links                  |
