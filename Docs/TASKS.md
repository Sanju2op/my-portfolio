# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay (see `Docs/NEEDS.md`).

## Where we are (updated 23 Nov 2026)
The portfolio is live on `sanjaylagariya.vercel.app`, responsive at three sizes, with dummy content standing in for the missing real content. The resume is live on `sanju2op.github.io`. The next session should continue with **Backlog, in order** below.

## Done
- [x] Astro rebuild, Vercel deploy, GitHub Actions CI, domain `sanjaylagariya.vercel.app`
- [x] All old Next.js files removed (20 Nov 2026)
- [x] Current role (DI Solutions: intern Dec 2025, employee Jun 2026) on the About timeline
- [x] Dummy content in place: case studies for the three featured projects, a bio, a drawn portrait, generated project covers; no placeholder outlines on the page (23 Nov 2026)
- [x] Responsive layout: phone, tablet (54 rem) and desktop (68 rem) wrappers; hero with portrait; project rows with covers; case study with a sticky facts sidebar on desktop
- [x] Research on resume and portfolio best practices (see Backlog notes)

## Backlog, in order
1. [ ] Add `.agents/skills/frontend-design` to this repo
2. [ ] **The shelf**: project index as cloth-bound spines on tablet and desktop, with a plain list on phones and a keyboard-operable fallback (see `Docs/DESIGN.md`)
3. [ ] Per-project social images: generate a card per project at build time (title on clay), like `og.png`
4. [ ] Case study navigation: previous and next project links at the bottom of each case study
5. [ ] Structured data: `CreativeWork` JSON-LD on each case study, `BreadcrumbList` on project pages
6. [ ] Accessibility checks in CI: run axe against the built pages with Playwright and fail on serious issues
7. [ ] Performance checks in CI: Lighthouse on the home and one case study; budget of 95 on mobile
8. [ ] Self-host the two fonts (faster, no third-party request) and add `font-display` tuning
9. [ ] Image pipeline for real screenshots: import through `astro:assets` so they are resized and converted to WebP
10. [ ] Decide on a Sakuga VFX control (`finktheartist/sakuga-vfx`, MIT) for one spot on the Contact page, or drop the idea
11. [ ] A short "now" page and notes section, once there is something to say
12. [ ] Colour theme choice (Sky, Blue, Marigold, Mint, Coral) as an optional footer control, if wanted

Research notes behind the backlog: the portfolio should state the role in the first screen, use one consistent format per project, keep links working, and load fast on mobile. Recruiters scan for a few seconds, so the strongest three projects must come first.

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
- Reads well on phone, tablet and desktop; passes keyboard navigation
- Lighthouse mobile 95 or better in all four categories
- The resume site and portfolio link to each other

## Anti-patterns
- Showing every repo instead of the best few
- Emoji headings and identical card grids
- Describing projects as impressive instead of saying what they do
- Redesigning mid-build
