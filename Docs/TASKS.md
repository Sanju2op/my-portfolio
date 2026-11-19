# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay.

## Why this plan
The old portfolio looked like a template (emoji headings, a grid of identical cards, a stale "MCA student" intro) and gave a recruiter no reason to stay. The goal is a portfolio that shows a few projects well, with real case studies, and hands the quick "who is he and what has he done" question to a separate resume site.

## Phase 0: Bootstrap
- [x] `CLAUDE.md`, `README.md` and the five docs in `Docs/`
- [x] Audit of the old repo (see `Docs/ARCHITECTURE.md`)

## Phase 1: Decisions (defaults apply if unanswered)
- [owner] **Domain name** on `vercel.app`. Default: `sanjaylagariya.vercel.app`; fallbacks in `Docs/ARCHITECTURE.md`. Set in Vercel → Project → Settings → Domains
- [x] **Astro vs staying on Next.js.** Default taken: Astro
- [owner] **Project list** for the first launch. Default taken: the five in `Docs/CONTENT.md`, three featured
- [owner] Keep the "gaming spirit" personal line on the About page? Default: leave it out for now

## Phase 2: Scaffold the Astro rebuild (branch `astro-rewrite`)
- [x] Branch and Astro 7 project (MDX, sitemap, sharp), versions pinned
- [x] `vercel.json` with `framework: astro` so previews build as Astro
- [x] Shared design tokens in `src/styles/tokens.css`
- [x] Layout, nav, footer, SEO head, JSON-LD, 404
- [x] Content collection `projects` with a schema
- [x] Build-time social image and favicon
- [x] Clean-clone build passes (10 pages)
- [ ] Confirm the Vercel **preview** deploy for this branch is green (owner: open the Vercel dashboard → Deployments; send me any error)
- [ ] Add `.agents/skills/frontend-design`

## Phase 3: Pages and content
- [x] Home: role, intro, selected work, skills, contact
- [x] `/projects` index and `/projects/[slug]` case study template
- [x] Five project files with the owner's real descriptions; three are marked as case studies in progress
- [x] `/about` and `/contact` (no phone number)
- [ ] Write the three case studies with the owner (problem, what I built, what was hard, result)
- [owner] Real screenshots for each project (3 per project: overview, key screen, detail)
- [owner] Live links. Most projects have none yet; deploy them or say "code only"
- [owner] Current role and dates; confirm the About copy

## Phase 4: Signature and polish
- [ ] Prototype "the shelf" project index (cloth-bound spines) with a plain-list fallback and a phone layout
- [ ] Accessibility pass: contrast, focus, heading order, reduced motion
- [ ] Performance pass: Lighthouse mobile 95 or better; JavaScript under 50 KB on the home page
- [ ] Remove leftover Next.js files: `src/app/`, `src/components/*.js`, `src/components/ui/`, `src/lib/`, `components.json`, `eslint.config.mjs`, `jsconfig.json`, `next.config.mjs`, and the unused SVGs in `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`)

## Phase 5: Launch
- [ ] Review the preview deploy with the owner
- [ ] Merge `astro-rewrite` into `main`
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
