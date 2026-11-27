# Architecture

## Two-site setup
| Site | Where | Purpose |
|---|---|---|
| Portfolio | This repo, hosted on Vercel at `sanjaylagariya.vercel.app` | Selected work with case studies, about, contact |
| Resume | `Sanju2op/Sanju2op.github.io`, GitHub Pages | A one-page, printable resume with a PDF download |

Both use the same design tokens (colours, type) so they read as one brand. They are separate repos and share no code at build time; tokens are copied and kept in sync by hand.

## History
The repo started as a Next.js 15 template with generic copy and a one-line README. It was rebuilt on **Astro**, merged to `main` on 19 Nov 2026, and every leftover Next.js file was removed on 20 Nov 2026. The old project descriptions were kept and moved into MDX.

## Why Astro rather than Next.js
- The site is almost all content: a few pages and one case study per project. Astro's MDX content collections fit that exactly.
- It ships HTML and almost no JavaScript, which helps speed and search ranking.
- It uses the same tooling and token system as the resume site, which is also Astro.
- React is still available as an "island" (`@astrojs/react`) if a case study needs an interactive demo.
- Trade-off: the owner uses Next.js at work, so a Next.js portfolio could double as a skills showcase. The answer to that is the projects themselves, not the framework behind the portfolio.

## Repo layout
```
.github/workflows/ci.yml   build, output checks, axe accessibility audit and Lighthouse budget on every push and pull request
scripts/a11y.py            runs axe-core against the built pages at phone and desktop widths
scripts/lighthouse_check.py   fails if a Lighthouse category is under its budget
src/
  assets/shots/            real screenshots (uploaded by the owner; see Docs/SCREENSHOTS.md)
  content/projects/*.mdx   one file per project; frontmatter + case study body
  content.config.ts        collection schema
  data/site.ts             name, role, employer, links, nav, bio, skills, timeline
  layouts/Base.astro       head, SEO tags (per-page social image), font imports and preloads, nav, footer
  components/ProjectList.astro   the project index: a plain list on phones, "the shelf" of book spines on tablet and desktop
  pages/
    index.astro            home (hero with portrait, selected work, skills, contact)
    projects/index.astro   all projects
    projects/[slug].astro  case study (banner, facts sidebar, previous/next links, JSON-LD)
    about.astro  contact.astro  404.astro
    covers/[slug].svg.ts   dummy cover art drawn at build time (used until a real cover is set)
    portrait.svg.ts        dummy portrait drawn at build time (replaced by a real photo)
    og.png.ts              site social image drawn at build time
    og/[slug].png.ts       one social image per project, drawn at build time
  styles/tokens.css        colour and type tokens (names shared with the resume site)
  styles/global.css        layout, responsive breakpoints and components
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
year      number, optional
links     { code?, live?, docs? }  (valid URLs)
featured  boolean   (shown on the home page)
order     number
mock      'cards' | 'list' | 'grid' | 'player' | 'blocks'   which dummy cover to draw
cover     image, optional: a file in src/assets/shots/, e.g. ../../assets/shots/x.png (validated by Astro; build fails if the file is missing). Overrides the dummy cover
dummy     boolean   (true while the text is placeholder; not shown on the page; tracked in Docs/NEEDS.md)
```
The page URL is the file name: `testimonials-system.mdx` is `/projects/testimonials-system/`. The body is MDX with the sections What it is, The problem, What I built, What was hard, Result.

## Responsive layout
- Wrapper width: phone full width, 54 rem from 48 rem, 68 rem from 72 rem (`--wrap` in `global.css`).
- Home hero: portrait beside the text from 52 rem. Project index: plain list below 48 rem, the shelf from 48 rem. Case study: facts sidebar beside the text from 64 rem.
- Every change is tested at 390, 820 and 1366 px (and the shelf at 768, 1024 and 1600 px).

## The shelf
`ProjectList.astro` renders each project as a list item with a spine link and a panel (cover, title, summary, stack). Below 48 rem the spine is hidden and the panel shows as a list row. From 48 rem the items are book spines on a board; hovered or keyboard-focused spines (or the first, when none is active) grow to show the panel. A container query hides the cover when the open book is too narrow, so text never clips. It uses `:has()` and container queries (supported in current browsers).

## Images
- A project with `cover` set uses Astro's `<Image>`: cropped to the top of the screenshot, 800 px wide in the project list and 1600 px wide for the case study banner, converted to WebP. Without `cover`, the drawn SVG cover at `/covers/<slug>.svg` is used.
- Images written in the MDX body (`![alt](../../assets/shots/x.png)`) are converted to WebP at their own size.
- Image files must be uploaded by the owner; see `Docs/SCREENSHOTS.md`.

## Fonts
Bricolage Grotesque (display) and Newsreader (body) are self-hosted through `@fontsource-variable/*`, imported in `Base.astro` and bundled by the build (Latin subset about 136 KB). The two Latin font files are preloaded in `<head>` to avoid a layout shift when they load. There is no request to Google; CI fails if one reappears.

## Data flow
`src/content/projects/*.mdx` → content collection → the shelf, `projects/index.astro`, the home page and `projects/[slug].astro`. Site-wide facts come from `src/data/site.ts`.

## Hosting, domain and CI
- **Vercel** builds from GitHub. `main` is production; every other branch gets a preview URL. `vercel.json` sets `{ "framework": "astro" }`.
- **Primary domain:** `sanjaylagariya.vercel.app` (free `vercel.app` name; nothing was purchased).
- **Other addresses on the project:** `my-portfolio-vert-gamma.vercel.app` is an old auto-generated name to remove in the Vercel dashboard (Project → Settings → Domains → Remove); the connector cannot remove domains. Vercel's per-deployment and per-branch URLs cannot be removed and are only reachable by the owner while Deployment Protection is on.
- **If the primary domain changes:** update `site` in `astro.config.mjs`, the sitemap line in `public/robots.txt`, the canonical check in `ci.yml`, the resume site's `portfolio` link, the GitHub profile and LinkedIn.
- **GitHub Actions CI** (`ci.yml`): install, build, then check that key pages and social images exist, the canonical URL is the primary domain, no phone number or `tel:` link is in the build and no Google Fonts request is present; then run axe-core (WCAG 2 A and AA) on six pages at two widths (fails on serious or critical issues); then Lighthouse on the home page and one case study (performance 85, other categories 95). It does not deploy; Vercel does.

## SEO
Title, description, canonical, Open Graph and Twitter tags per page; a per-project social image; JSON-LD `Person` on the home page and `CreativeWork` plus `BreadcrumbList` on each case study; generated `sitemap-index.xml`; `robots.txt`.

## Performance budget
- Lighthouse mobile 95 or better in all four categories; CI enforces 85 for performance and 95 for the rest. Local scores: 99 to 100 for performance, 100 for the others
- Under 50 KB of JavaScript on the home page (it ships none today)
- Project images as WebP, each under about 150 KB
- Two font families at most

## Constraints and gotchas
- Astro 7 needs Node 22.23.4 or newer. If a Vercel build complains about the Node version, set it in Project → Settings → Build and Development.
- Dependency versions are pinned. There is no committed lockfile; Vercel and CI create one on install.
- A leftover `postcss.config.mjs` breaks the Astro build. Do not add it back.
- A failed Vercel build never replaces the live site. Intermediate commits can show a failed or cancelled deploy while a later commit succeeds; check the newest deployment.
- Image files cannot be uploaded through the tools used to maintain this repo; the owner uploads them (see `Docs/SCREENSHOTS.md`).
- Social images use whatever sans-serif fonts the build machine has, so lettering can differ slightly from the site fonts.
