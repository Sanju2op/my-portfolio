# CLAUDE.md

Guide for AI agents (and humans) working in this repo. Read this first, then the docs it points to.

## What this repo is
Sanjay Lagariya's **main portfolio site**, live at https://sanjaylagariya.vercel.app and hosted on Vercel. It is one half of a two-site setup:

| Site | Repo | Role |
|---|---|---|
| **Portfolio** (this repo) | `Sanju2op/my-portfolio` | The showpiece: selected work, case studies, about, contact |
| **Resume** | `Sanju2op/Sanju2op.github.io` | A one-page, printable resume with a PDF download, at https://sanju2op.github.io |

The portfolio links to the resume; the resume links back to the portfolio for detail.

## Status
Live on `main`. Responsive for phone, tablet and desktop, with a book-spine project index ("the shelf") on tablet and desktop. Real content is arriving in pieces from the owner, so the site currently uses **dummy content** (a drawn portrait, generated project covers, written-out case studies and a bio). Nothing is highlighted as a placeholder on the page. `Docs/NEEDS.md` lists what is missing and where each dummy item lives.

## Working agreement
The owner has asked for continuous progress without approval for each step. Work through `Docs/TASKS.md` in order, keep `Docs/NEEDS.md` current, and note what was done and what is next in `Docs/TASKS.md` so a later session can continue. The owner gives feedback occasionally; act on it first.

## Read before changing anything
- `Docs/TASKS.md` — phases, the improvement backlog, what is done and what is next
- `Docs/NEEDS.md` — what the owner still needs to supply, and the dummy content register
- `Docs/ARCHITECTURE.md` — repo layout, content model, hosting, domain, CI
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

## Deploying and checks
- **Vercel** builds from GitHub. Every push to `main` is a production deploy; every other branch gets a preview URL. `vercel.json` sets `{ "framework": "astro" }`. A failed build never replaces the live site.
- **GitHub Actions** (`.github/workflows/ci.yml`) runs on every push and pull request and does not deploy. It builds, then checks: key pages and social images exist, the canonical URL is the primary domain, no phone number and no Google Fonts request is in the build; an axe-core accessibility audit (`scripts/a11y.py`) at phone and desktop widths fails on serious issues; and a Lighthouse budget (`scripts/lighthouse_check.py`) requires performance 85 and accessibility, best practices and SEO 95 on the home page and one case study.
- Before changing layout or colours, run `scripts/a11y.py` locally (needs `npm install --no-save axe-core` and Playwright).

## Hard rules
1. **Dummy content is allowed, but must be tracked.** Write it to read naturally, avoid invented hard numbers, never make claims that could embarrass the owner, mark it (`dummy: true` in MDX, a `// DUMMY` comment in data files) and list it in `Docs/NEEDS.md`. Do not show placeholder outlines or "coming soon" notes on the page.
2. Real facts the owner has stated (jobs, dates, education, links) must stay accurate. Do not invent awards, employers, metrics or quotes from named people.
3. Project content lives in `src/content/projects/*.mdx`; site-wide facts live in `src/data/site.ts`. Do not hard-code copy in page files.
4. No emoji headings, no cards inside cards, no gradient-blob hero, no terminal or command-line styling. The owner dislikes the terminal look.
5. Never put the owner's phone number or other private details on the site or in commits. The CI check fails the build if one appears.
6. Default look is the book cloth theme: ivory (`#FAF9F5`) on clay (`#A94E32`). Body text must keep 4.5:1 contrast or better.
7. Every layout change must be checked at phone (390 px), tablet (820 px) and desktop (1366 px) widths, with no horizontal scrolling, and the shelf's open state checked at 768, 1024 and 1600 px.
8. Fonts are self-hosted through `@fontsource-variable/*`. Do not add Google Fonts or other third-party font links. Keep the two `<link rel="preload">` tags in `Base.astro`; without them the headline shifts layout when the font loads.
9. Domain changes are made in the Vercel dashboard or connector. If the primary domain changes, update `site` in `astro.config.mjs`, the sitemap line in `public/robots.txt`, and the canonical check in `ci.yml`.
10. Do not add Next.js, Tailwind, PostCSS or shadcn files back. A leftover `postcss.config.mjs` breaks the Astro build.
11. Do not commit large binaries or spare files.

## Skills
Project skills live in `.agents/skills/`. Use `frontend-design` for UI work (copy it in from `Sanju2op.github.io/.agents/skills/frontend-design/`; see `Docs/TASKS.md`).
