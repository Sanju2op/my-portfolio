# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay.

## Why this plan
The old portfolio looked like a template (emoji headings, a grid of identical cards, a stale "MCA student" intro) and gave a recruiter no reason to stay. The goal is a portfolio that shows a few projects well, with real case studies, and hands the quick "who is he and what has he done" question to a separate resume site.

## Phase 0: Bootstrap
- [x] `CLAUDE.md`, `README.md` and the five docs in `Docs/`
- [x] Audit of the old repo

## Phase 1: Decisions (defaults apply if unanswered)
- [owner] **Domain name** on `vercel.app`. Default: `sanjaylagariya.vercel.app`; fallbacks in `Docs/ARCHITECTURE.md`. Set in Vercel → Project → Settings → Domains
- [x] **Astro vs staying on Next.js.** Default taken: Astro
- [owner] **Project list** for the first launch. Default taken: the five in `Docs/CONTENT.md`, three featured
- [owner] Keep the "gaming spirit" personal line on the About page? Default: left out for now

## Phase 2: Astro rebuild
- [x] Astro 7 project (MDX, sitemap, sharp), versions pinned
- [x] `vercel.json` with `framework: astro`
- [x] Shared design tokens in `src/styles/tokens.css`
- [x] Layout, nav, footer, SEO head, JSON-LD, 404, favicon, build-time social image
- [x] Content collection `projects` with a schema
- [x] Clean-clone build passes (10 pages)
- [x] Vercel preview deploy green; merged to `main`; production deploy green (19 Nov 2026)
- [ ] Add `.agents/skills/frontend-design`

## Phase 3: Pages and content
- [x] Home, `/projects`, case study template, `/about`, `/contact` (no phone number)
- [x] Five project files with the owner's real descriptions; three marked as case studies in progress
- [ ] Write the three case studies with the owner (problem, what I built, what was hard, result)
- [owner] Real screenshots for each project (3 per project: overview, key screen, detail)
- [owner] Live links. Most projects have none yet; deploy them or say "code only"
- [owner] Current role and dates; confirm the About copy

## Phase 4: Signature, polish and cleanup
- [ ] Prototype "the shelf" project index (cloth-bound spines) with a plain-list fallback and a phone layout
- [ ] Decide whether any Sakuga VFX control (`finktheartist/sakuga-vfx`, MIT) earns a place; if so, use one on a single page and respect reduced motion
- [ ] Accessibility pass: contrast, focus, heading order, reduced motion
- [ ] Performance pass: Lighthouse mobile 95 or better; JavaScript under 50 KB on the home page
- [ ] Remove leftover Next.js files: `src/app/`, `src/components/*.js`, `src/components/ui/`, `src/lib/`, `components.json`, `eslint.config.mjs`, `jsconfig.json`, `next.config.mjs`, and the unused SVGs in `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`)
- [ ] Delete the stale `astro-rewrite` branch

## Phase 5: Launch polish
- [ ] Add the chosen `vercel.app` domain and make it primary; then set `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the new name
- [ ] Update links on the resume site, GitHub profile and LinkedIn
- [ ] Add the site to Google Search Console and submit the sitemap

## Phase 6: Later
- [ ] Short notes or a "now" page
- [ ] A custom domain, if the owner ever wants one
- [ ] Self-host fonts

## Definition of done for version 1
- Live on the chosen `vercel.app` name from `main`
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
