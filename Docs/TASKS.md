# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay.

## Why this plan
The current portfolio looks like a template (emoji headings, a grid of identical cards, a stale "MCA student" intro) and gives a recruiter no reason to stay. The goal is a portfolio that shows a few projects well, with real case studies, and hands the quick "who is he and what has he done" question to a separate resume site.

## Phase 0: Bootstrap (done in this commit)
- [x] `CLAUDE.md`, `README.md` and the five docs in `Docs/`
- [x] Audit of the current repo (see `Docs/ARCHITECTURE.md`)

## Phase 1: Decisions (defaults apply if unanswered)
- [owner] **Domain name** on `vercel.app`. Default: `sanjaylagariya.vercel.app`; fallbacks in `Docs/ARCHITECTURE.md`
- [owner] **Astro vs staying on Next.js.** Default: Astro (content-heavy, static, better SEO and speed, React islands still possible)
- [owner] **Project list** for the first launch. Default: the five in `Docs/CONTENT.md`, with the first three written up as case studies
- [owner] Keep the "gaming spirit" personal line on the About page? Default: keep one short line, drop the rest

## Phase 2: Scaffold the Astro rebuild (branch `astro-rewrite`)
- [ ] Create the branch and an Astro 7 project in the repo (Tailwind v4, MDX, sitemap, sharp, React integration only if a page needs an island)
- [ ] Add `.agents/skills/frontend-design`
- [ ] Shared design tokens in `src/styles/tokens.css` (same names as the resume site)
- [ ] Layout, nav, footer, SEO head, JSON-LD, 404
- [ ] Content collection `projects` with a schema (see `Docs/ARCHITECTURE.md`)
- [ ] Build-time social image and favicon
- [ ] Confirm the Vercel preview deploys. Check that the preview URL builds with the Astro preset

## Phase 3: Pages and content
- [ ] Home: role, one-paragraph intro, selected work, short about, contact
- [ ] `/projects`: index of all projects
- [ ] `/projects/[slug]`: case study template (problem, role, stack, what was hard, result, links)
- [ ] Case studies for the first three projects (draft from the repo READMEs and code, owner reviews)
- [ ] `/about`: rewritten facts (full-stack, not "MCA student"), timeline
- [ ] `/contact`: email and links, no phone number
- [owner] Real screenshots for each project (3 per project: overview, key screen, detail)
- [owner] Live links. Most projects have none yet; deploy them or say "code only"
- [owner] Current role and dates; resume link

## Phase 4: Signature and polish
- [ ] Prototype "the shelf" project index (projects as cloth-bound spines) with a plain-list fallback and a phone layout
- [ ] Accessibility pass: contrast, focus, heading order, reduced motion
- [ ] Performance pass: Lighthouse mobile 95 or better; JavaScript under 50 KB on the home page
- [ ] Remove old files: `favicon_backup.ico`, `favicon_failed.ico`, empty `Footer.js` and `SectionTitle.js`, commented-out code

## Phase 5: Launch
- [ ] Review the preview deploy with the owner
- [ ] Merge `astro-rewrite` into `main`
- [ ] Switch the Vercel framework preset to Astro and redeploy if the first build fails
- [ ] Add the chosen `vercel.app` domain and make it primary
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
