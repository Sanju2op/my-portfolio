# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay.

## Why this plan
The old portfolio looked like a template (emoji headings, a grid of identical cards, a stale "MCA student" intro) and gave a recruiter no reason to stay. The goal is a portfolio that shows a few projects well, with real case studies, and hands the quick "who is he and what has he done" question to a separate resume site.

## Phase 0: Bootstrap
- [x] `CLAUDE.md`, `README.md` and the five docs in `Docs/`
- [x] Audit of the old repo

## Phase 1: Decisions
- [x] **Domain:** `sanjaylagariya.vercel.app` added to the Vercel project and verified (19 Nov 2026)
- [x] **Astro vs staying on Next.js.** Astro
- [owner] **Project list** for the first launch. Default taken: the five in `Docs/CONTENT.md`, three featured
- [owner] Keep the "gaming spirit" personal line on the About page? Default: left out for now

## Phase 2: Astro rebuild (done)
- [x] Astro 7 project (MDX, sitemap, sharp), versions pinned; `vercel.json` with `framework: astro`
- [x] Shared design tokens, layout, nav, footer, SEO head, JSON-LD, 404, favicon, social image
- [x] Content collection `projects` with a schema
- [x] Merged to `main`; production deploy green
- [x] GitHub Actions CI (`.github/workflows/ci.yml`)
- [x] Removed all leftover Next.js files, the spare 270 KB favicons and the unused template SVGs (20 Nov 2026)
- [ ] Add `.agents/skills/frontend-design`

## Phase 3: Pages and content
- [x] Home, `/projects`, case study template, `/about`, `/contact` (no phone number)
- [x] Five project files with the owner's real descriptions; three marked as case studies in progress
- [ ] Write the three case studies with the owner (problem, what I built, what was hard, result)
- [owner] Real screenshots for each project (3 per project: overview, key screen, detail)
- [owner] Live links. Most projects have none yet; deploy them or say "code only"
- [owner] Current role and dates; confirm the About copy

## Phase 4: Signature and polish
- [ ] Prototype "the shelf" project index (cloth-bound spines) with a plain-list fallback and a phone layout
- [ ] Decide whether any Sakuga VFX control (`finktheartist/sakuga-vfx`, MIT) earns a place; if so, use one on a single page and respect reduced motion
- [ ] Accessibility pass: contrast, focus, heading order, reduced motion
- [ ] Performance pass: Lighthouse mobile 95 or better; JavaScript under 50 KB on the home page
- [owner] **Remove the old domain `my-portfolio-vert-gamma.vercel.app`** in Vercel (Project → Settings → Domains → Remove). The connector cannot remove domains
- [owner] Delete the stale `astro-rewrite` branch on GitHub (Branches page). No tool can delete branches

## Phase 5: Launch polish
- [x] Primary domain set in `astro.config.mjs`, `public/robots.txt` and the CI check
- [x] Resume site links to the new domain
- [owner] Update the GitHub profile and LinkedIn to the new link
- [ ] Add the site to Google Search Console and submit the sitemap

## Phase 6: Later
- [ ] Short notes or a "now" page
- [ ] A custom domain, if the owner ever wants one
- [ ] Self-host fonts

## Definition of done for version 1
- Live on `sanjaylagariya.vercel.app` from `main`
- No placeholders visible; every link works
- Three real case studies with screenshots
- Reads well on a phone; passes keyboard navigation
- Lighthouse mobile 95 or better in all four categories
- The resume site and portfolio link to each other

## Anti-patterns
- Showing every repo instead of the best few
- Emoji headings and identical card grids
- Describing projects as impressive instead of saying what they do
- Redesigning mid-build
