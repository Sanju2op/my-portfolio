# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay (see `Docs/NEEDS.md`).

## Where we are (updated 23 Nov 2026)
The portfolio is live on `sanjaylagariya.vercel.app`, responsive at three sizes, with dummy content standing in for the missing real content, a book-shelf project index on tablet and desktop, per-project social images and an accessibility audit in CI. The resume is live on `sanju2op.github.io`. The next session should continue with **Backlog, in order** below.

## Done
- [x] Astro rebuild, Vercel deploy, GitHub Actions CI, domain `sanjaylagariya.vercel.app`
- [x] All old Next.js files removed (20 Nov 2026)
- [x] Current role (DI Solutions: intern Dec 2025, employee Jun 2026) on the About timeline
- [x] Dummy content in place: case studies for the three featured projects, a bio, a drawn portrait, generated project covers; no placeholder outlines on the page
- [x] Responsive layout: phone, tablet (54 rem) and desktop (68 rem) wrappers; hero with portrait; case study with a sticky facts sidebar on desktop
- [x] Case study navigation (previous and next) and `CreativeWork` + `BreadcrumbList` JSON-LD
- [x] **The shelf** (`ProjectList.astro`): spines on a board from 48 rem, opens on hover or keyboard focus; phones keep the plain list. Verified for every book at 390, 768, 820, 1024, 1366 and 1600 px
- [x] Per-project social images at `/og/<slug>.png`, drawn at build time and used in each case study's meta tags (23 Nov 2026)
- [x] Accessibility audit in CI: axe-core on six pages at phone and desktop widths, failing on serious or critical issues. It found one real issue (the logo link's accessible name did not contain its visible text), now fixed. Passing on GitHub (23 Nov 2026)
- [x] Research on resume and portfolio best practices

## Backlog, in order
1. [ ] Add `.agents/skills/frontend-design` to this repo
2. [ ] Performance checks in CI: Lighthouse on the home and one case study; budget of 95 on mobile
3. [ ] Self-host the two fonts (faster, no third-party request) and add `font-display` tuning
4. [ ] Image pipeline for real screenshots: import through `astro:assets` so they are resized and converted to WebP
5. [ ] Shelf polish once real covers exist: check the cover crop, and decide whether spine colours should follow each project
6. [ ] Decide on a Sakuga VFX control (`finktheartist/sakuga-vfx`, MIT) for one spot on the Contact page, or drop the idea
7. [ ] A short "now" page and notes section, once there is something to say
8. [ ] Colour theme choice (Sky, Blue, Marigold, Mint, Coral) as an optional footer control, if wanted
9. [ ] Keyboard and screen reader pass by hand on the shelf (automated checks pass; a human check is still worth doing)

Research notes behind the backlog: the portfolio should state the role in the first screen, use one consistent format per project, keep links working, and load fast on mobile. Recruiters scan for a few seconds, so the strongest three projects must come first.

Testing notes for future sessions:
- Build from a **fresh clone of `main`** before testing. Running `git stash` or testing a stale copy gave a false overflow result once.
- A test web server started in one shell command does not survive into the next one; start it and run the checks in the same command.
- Run `scripts/a11y.py` locally (needs `npm install --no-save axe-core` and Playwright) before changing layout or colours.

## Waiting on Sanjay
See `Docs/NEEDS.md` for the full, current list. The biggest items are a real photo, real screenshots for the three featured projects, and your own words for the case studies and the bio.

## Cleanup only the owner can do
- [owner] Remove the old Vercel domain `my-portfolio-vert-gamma.vercel.app`
- [owner] Delete the stale branch `astro-rewrite` on GitHub
- [owner] Update GitHub profile and LinkedIn once dummy content is replaced

## Definition of done for version 1
- Live on `sanjaylagariya.vercel.app` from `main`
- No dummy content left; every link works
- Three real case studies with screenshots
- Reads well on phone, tablet and desktop; passes keyboard navigation and the automated accessibility audit
- Lighthouse mobile 95 or better in all four categories
- The resume site and portfolio link to each other

## Anti-patterns
- Showing every repo instead of the best few
- Emoji headings and identical card grids
- Describing projects as impressive instead of saying what they do
- Redesigning mid-build
