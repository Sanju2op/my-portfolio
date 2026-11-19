# Architecture

## Two-site setup
| Site | Where | Purpose |
|---|---|---|
| Portfolio | This repo, hosted on Vercel | Selected work with case studies, about, contact |
| Resume | `Sanju2op/Sanju2op.github.io`, GitHub Pages | A one-page, printable resume with a PDF download |

Both use the same design tokens (colours, type) so they read as one brand. They are separate repos and share no code at build time; tokens are copied and kept in sync by hand.

## History and current state
The repo started as a Next.js 15 template (Next, React 19, Tailwind 4, shadcn, framer-motion) with generic copy, two empty component files, two spare 270 KB favicon files and a one-line README. It was rebuilt on **Astro** and merged to `main` on 19 Nov 2026. Some old Next.js files are still in the repo and are listed for removal in `Docs/TASKS.md` (Phase 4). The old project descriptions were kept and moved into MDX.

## Why Astro rather than Next.js
- The site is almost all content: a few pages and one case study per project. Astro's MDX content collections fit that exactly.
- It ships HTML and almost no JavaScript, which helps speed and search ranking.
- It uses the same tooling and token system as the resume site, which is also Astro.
- React is still available as an "island" (`@astrojs/react`) if a case study needs an interactive demo.
- Trade-off: the owner uses Next.js at work, so a Next.js portfolio could double as a skills showcase. The answer to that is the projects themselves, not the framework behind the portfolio.

## Repo layout
```
src/
  content/projects/*.mdx   one file per project; frontmatter + case study body
  content.config.ts        collection schema
  data/site.ts             name, role, links, nav, skills, timeline
  layouts/Base.astro       head, SEO tags, fonts, nav, footer
  components/ProjectList.astro
  pages/
    index.astro            home
    projects/index.astro   all projects
    projects/[slug].astro  case study (from the collection)
    about.astro  contact.astro  404.astro
    og.png.ts              social image drawn at build time
  styles/tokens.css        colour and type tokens (names shared with the resume site)
  styles/global.css
public/                    favicon.svg, robots.txt
vercel.json                { "framework": "astro" }
Docs/                      these documents
.agents/skills/            frontend-design (to add)
```

## Content model: `projects` collection
```
title     string, required
summary   string, used on lists and as the meta description
stack     string[]
role      string, optional
year      number, optional until confirmed
links     { code?, live?, docs? }  (valid URLs)
featured  boolean   (shown on the home page)
order     number
todo      boolean   (true while the case study is waiting on the owner)
```
The page URL is the file name: `testimonials-system.mdx` is `/projects/testimonials-system/`. The body is MDX with the sections What it is, The problem, What I built, What was hard, Result, Screenshots.

## Data flow
`src/content/projects/*.mdx` → content collection → `projects/index.astro`, the home page and `projects/[slug].astro`. Site-wide facts come from `src/data/site.ts`. Images, once added, are imported through `astro:assets` so they are resized at build time.

## Hosting and domain
- **Vercel** builds from GitHub. `main` is production; every other branch gets a preview URL.
- `vercel.json` sets `{ "framework": "astro" }`. This overrides the project's saved Next.js preset, so no dashboard change is needed.
- **Domain:** no purchase. A short `*.vercel.app` name is set in Project → Settings → Domains. Candidates in order of preference (availability is first-come on Vercel, so the dashboard tells you):
  1. `sanjaylagariya.vercel.app`
  2. `sanjay-lagariya.vercel.app`
  3. `lagariya.vercel.app`
  4. `sanjay-builds.vercel.app`
  5. `sanjaydev.vercel.app`
- Make the new name the primary domain; the old long URL keeps working.
- After switching, update `site` in `astro.config.mjs`, the sitemap line in `public/robots.txt`, the resume site (`src/data/site.ts` → `portfolio`), the GitHub profile and LinkedIn.
- Until the domain is chosen, `site` points at the current long Vercel URL so canonical links are not wrong.

## SEO
Title, description, canonical, Open Graph and Twitter tags per page; JSON-LD `Person` on the home page; generated `sitemap-index.xml`; `robots.txt`; a build-time social image. Case studies use their summary as the meta description.

## Performance budget
- Lighthouse mobile 95 or better in all four categories
- Under 50 KB of JavaScript on the home page (it ships none today)
- Project images as WebP, each under about 150 KB
- Two font families at most

## Constraints and gotchas
- Astro 7 needs Node 22.23.4 or newer. If a Vercel build complains about the Node version, set it in Project → Settings → Build and Development.
- Dependency versions are pinned. There is no committed lockfile; Vercel creates one on install.
- A leftover `postcss.config.mjs` (from the old Tailwind setup) breaks the Astro build. It was removed; do not add it back.
- A failed Vercel build never replaces the live site. Intermediate commits can show a failed deploy email while a later commit succeeds; check the newest deployment.
- Case study screenshots are binary files and cannot be added through some automated tools; the owner may need to commit them directly.
