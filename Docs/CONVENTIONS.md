# Conventions

## Agent skills
- **Skills directory:** project skills live in `.agents/skills/`.
- **UI and design work:** use the `frontend-design` skill.
- **Content work:** follow `Docs/CONTENT.md` for the case study template and about-page facts.

## Development workflow
- **Branches:** the Astro rebuild lives on `astro-rewrite`. Use short feature branches after launch. `main` is production on Vercel.
- **Previews:** every branch gets a Vercel preview URL. Check the preview at phone width (about 390px) and desktop width before merging.
- **Build first:** run `npm run build` locally before pushing. A failed build means no deploy.
- **Do not edit build output** (`dist/`, `.next/`, `.vercel/`).

## Target platforms
- **Primary:** phones. Recruiters often open portfolio links on mobile.
- **Secondary:** desktop and tablet. One centred reading column scales up without a separate design.

## Content rules
- **No invention:** never make up projects, roles, dates, metrics, quotes or achievements. Mark missing facts with `todo: true` and ask.
- **Say what it does:** describe a project plainly (what it is, what it was built with, where to see it). Avoid "cutting-edge", "passionate", "seamless".
- **Privacy:** no phone number or private details on the site or in commits.
- **Links:** every link must work. Check new links before pushing.
- **Screenshots:** real screenshots only, saved as WebP at 1600px wide or less and under 150 KB where possible.
- **Writing:** first person for the intro and about page; plain third-person-free sentences for case studies.

## Design rules
- **Default theme:** book cloth, ivory `#FAF9F5` on clay `#A94E32` (5.2:1 contrast).
- **Contrast:** body text at 4.5:1 or better everywhere.
- **Not allowed:** emoji headings, cards inside cards, gradient blobs, terminal styling, neon on black.
- **Motion:** hover, focus and page transitions only, and all of it off under `prefers-reduced-motion`.
- **Accessibility:** skip link, visible focus, real heading order, alt text on every meaningful image.

## Code rules
- Pin dependency versions. Commit the lockfile.
- Keep React out of the page unless a page needs interactivity (use an Astro island).
- Styles live in `tokens.css` and `global.css`; no one-off colours in components.
- Delete dead code and commented-out blocks; git keeps the history.

## Git hygiene
- **Check `.gitignore`:** `node_modules/`, `dist/`, `.astro/`, `.next/` and `.vercel/` stay ignored.
- **Check `git status`:** before committing, make sure no private files or large binaries are staged.
- **Commit messages:** short, imperative, saying what changed and why.
- **Spare files:** do not keep backup copies in the repo (`favicon_backup.ico` and similar). Git is the backup.

## Versioning
No app version. The footer date, if shown, is set at build time.
