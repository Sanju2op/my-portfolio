# Needs from Sanjay

A running list of what is missing. Send things in pieces, in any order, whenever there is time. The sites use realistic **dummy content** in the meantime, so nothing looks unfinished. When real content arrives, replace the matching dummy item and tick it off here.

Status: [ ] still needed, [x] received and applied.

## How dummy content works
- Dummy text is written to read naturally and avoid hard numbers, so it can be swapped without rewriting the page.
- It is **not visible** on the site (no dashed outlines or notes). It is tracked here and, for projects, with `dummy: true` in the MDX frontmatter.
- Do not post the portfolio or resume anywhere (LinkedIn, applications, profiles) until the dummy items below are replaced.

## A. About you
- [ ] A real portrait photo (portrait orientation, at least 1200 px tall, good light, plain background). Replaces the drawn placeholder
- [ ] Bio: 3 to 4 plain sentences in your own words (who you are, what you like building, what you want next)
- [ ] What you are looking for: kind of role, location or remote, and whether you are open to offers
- [ ] Preferred contact method, if not email

## B. Experience (used on the portfolio and the resume)
- [ ] Your real job title at DI Solutions
- [ ] 2 to 3 real bullet points for DI Solutions: what you build, with which tools, and any result you can share (speed, users, time saved). One line each
- [ ] Confirm the dates: intern from Dec 2025, employee from Jun 2026
- [ ] MCA start and end months; BCA years (for example 2021 to 2024)
- [ ] Any certifications or courses worth listing (optional)

## C. Projects (Testimonials system, Upwork Clone, Keyboard Shop first)
For each of the three featured projects:
- [ ] 3 real screenshots: overview, one key screen, one detail (WebP or PNG, 1600 px wide, light and dark mode if relevant)
- [ ] A live link, or confirm "code only"
- [ ] Your role (solo or team size) and the year
- [ ] Confirm the tech stack (the Upwork Clone and Keyboard Shop stacks are not stated yet)
- [ ] Your own words for: the problem, what you built, one hard part, the result (real numbers if you have them)

Smaller items:
- [ ] Music App: one screenshot and a sentence on what it does
- [ ] Template replicas: which four templates they copy (optional)
- [ ] Any other project worth adding (public repos only): `freelancerhub`, Streak Tracker, Ludo 10X are candidates; say which to include

## D. Accounts and links (only when the dummy content is replaced)
- [ ] Update GitHub profile and LinkedIn to link to https://sanjaylagariya.vercel.app and the resume
- [ ] LinkedIn headline and About text matching the website
- [ ] Pin your best 3 to 4 GitHub repositories and give each a short README
- [ ] Google Search Console: add the site and submit the sitemap (needs you to log in once to verify ownership)

## E. Actions only you can do (no tool can)
- [ ] Vercel: remove the old domain `my-portfolio-vert-gamma.vercel.app` (my-portfolio → Settings → Domains → Remove)
- [ ] GitHub: delete the branch `astro-rewrite` in `my-portfolio`
- [ ] GitHub: delete the branch `terminal-style` in `Sanju2op.github.io` (it contains the removed phone number)

## F. Optional extras
- [ ] Two real quotes from a teammate, mentor or teacher, with their permission, name and role
- [ ] Topics for short notes or a "now" page
- [ ] A logo or personal mark, if you want one instead of the "SL" monogram
- [ ] A custom domain (not needed)

## Dummy content register
Everything below is placeholder and should be replaced. Update this table when something changes.

| Dummy item | Where it lives | Replace with |
|---|---|---|
| Portrait | `src/pages/portrait.svg.ts`, used on home and About | A real photo (put it in `public/`, change the two `<img>` tags) |
| Project cover images | `src/pages/covers/[slug].svg.ts`; `mock` in each MDX | Real screenshots; set `cover:` in each MDX and remove `mock` |
| Case study text (problem, what I built, what was hard, result), role, year | `src/content/projects/testimonials-system.mdx`, `upwork-clone.mdx`, `keyboard-shop.mdx` | Your own words and facts; then remove `dummy: true` |
| Music App and Template replicas role lines | `music-app.mdx`, `template-replicas.mdx` | Real details; then remove `dummy: true` |
| About bio | `bio` in `src/data/site.ts` | Your real bio |

Resume dummy items are listed in the resume repo's `Docs/NEEDS.md`.
