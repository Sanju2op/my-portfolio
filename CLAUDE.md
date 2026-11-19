# CLAUDE.md

Guide for AI agents (and humans) working in this repo. Read this first, then the docs it points to.

## What this repo is
Sanjay Lagariya's **main portfolio site**, hosted on Vercel. It is one half of a two-site setup:

| Site | Repo | Role |
|---|---|---|
| **Portfolio** (this repo) | `Sanju2op/my-portfolio` | The showpiece: selected work, case studies, about, contact |
| **Resume** | `Sanju2op/Sanju2op.github.io` | A short, printable resume site with a PDF download |

The portfolio links to the resume; the resume links back to the portfolio for detail.

## Status
Today this is a Next.js 15 app with a generic template look. The plan is a rebuild on **Astro** with MDX case studies. Do not polish the old Next.js version; follow `Docs/TASKS.md`.

## Read before changing anything
- `Docs/TASKS.md` — phases, what is done, what is next, what is waiting on the owner
- `Docs/ARCHITECTURE.md` — current state, target architecture, migration plan, domain
- `Docs/CONVENTIONS.md` — rules for content, git, accessibility, performance, agent skills
- `Docs/DESIGN.md` — the visual system and how it relates to the resume site
- `Docs/CONTENT.md` — project inventory, case study template, about-page facts

## Commands
```
npm install
npm run dev      # local dev server
npm run build    # production build
```
The same commands work before and after the Astro rebuild.

## Deploying
Vercel builds from GitHub. Every push to `main` is a production deploy; every other branch gets a preview URL. The Astro rebuild happens on the `astro-rewrite` branch and is merged only after its preview is approved. When it merges, change the Vercel framework preset from Next.js to Astro (Project → Settings → Build and Development).

## Hard rules
1. Do not invent projects, roles, dates, metrics, quotes or achievements. Use `todo: true` (or `todo: true` in MDX frontmatter) for anything waiting on the owner.
2. Project content lives in `src/content/projects/*.mdx` and site-wide facts in `src/data/site.ts` once the Astro rebuild lands. Do not hard-code copy in page files.
3. No emoji headings, no cards inside cards, no gradient-blob hero, no terminal or command-line styling. The owner dislikes the terminal look.
4. Never put the owner's phone number or other private details on the site or in commits.
5. Default look is the book cloth theme: ivory (`#FAF9F5`) on clay (`#A94E32`). Body text must keep 4.5:1 contrast or better.
6. Use real screenshots for projects. No stock imagery.
7. Do not delete the Vercel project or change its domain settings in code; the owner does that in the Vercel dashboard.
8. Do not commit large binaries or spare files (the old `favicon_backup.ico` and `favicon_failed.ico` are to be removed).

## Skills
Project skills live in `.agents/skills/`. Use `frontend-design` for UI work (copy it in from `Sanju2op.github.io/.agents/skills/frontend-design/`; see `Docs/TASKS.md`).
