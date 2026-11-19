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
The Astro rebuild is on the `astro-rewrite` branch and builds cleanly. `main` still holds the old Next.js template until the branch is merged. Follow `Docs/TASKS.md`.

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
npm run build    # production build into dist/
```
Node 22.23.4 or newer is required (Astro 7). Dependency versions are pinned.

## Deploying
Vercel builds from GitHub. Every push to `main` is a production deploy; every other branch gets a preview URL. `vercel.json` sets `{ "framework": "astro" }`, so the Astro branch builds as Astro even though the Vercel project was created as Next.js. No dashboard change is needed. Merge `astro-rewrite` into `main` only after its preview is approved.

## Hard rules
1. Do not invent projects, roles, dates, metrics, quotes or achievements. Use `todo: true` (in `site.ts` entries or MDX frontmatter) for anything waiting on the owner.
2. Project content lives in `src/content/projects/*.mdx`; site-wide facts live in `src/data/site.ts`. Do not hard-code copy in page files.
3. No emoji headings, no cards inside cards, no gradient-blob hero, no terminal or command-line styling. The owner dislikes the terminal look.
4. Never put the owner's phone number or other private details on the site or in commits.
5. Default look is the book cloth theme: ivory (`#FAF9F5`) on clay (`#A94E32`). Body text must keep 4.5:1 contrast or better.
6. Use real screenshots for projects. No stock imagery.
7. Do not delete the Vercel project or change its domain in code; the owner does that in the Vercel dashboard.
8. Do not add Tailwind, PostCSS or shadcn config back. A leftover `postcss.config.mjs` breaks the Astro build.
9. Do not commit large binaries or spare files.

## Skills
Project skills live in `.agents/skills/`. Use `frontend-design` for UI work (copy it in from `Sanju2op.github.io/.agents/skills/frontend-design/`; see `Docs/TASKS.md`).
