# Architecture

## Two-site setup
| Site | Where | Purpose |
|---|---|---|
| Portfolio | This repo, hosted on Vercel | Selected work with case studies, about, contact |
| Resume | `Sanju2op/Sanju2op.github.io`, GitHub Pages | A one-page, printable resume with a PDF download |

Both use the same design tokens (colours, type) so they read as one brand. They are separate repos and share no code at build time; tokens are copied and kept in sync by hand.

## Current state (audit of the repo)
- Next.js 15.3.1, React 19, Tailwind 4, shadcn/ui, framer-motion, lucide-react
- Routes: `/`, `/about`, `/projects`, `/contact`
- Components: `HeroSection`, `AboutSection`, `Navbar`, `ProjectCard`, `theme-provider`, `ui/` (shadcn). `Footer.js` and `SectionTitle.js` are empty files
- Project data is in `src/lib/data.js` (three projects, one commented-out duplicate)
- Spare files: `favicon_backup.ico`, `favicon_failed.ico` (about 270 KB each)
- README is a single line; no docs
- Copy is stale: it says "MCA student" and "backend development" while the owner works full-stack
- Hosted on a long team-scoped Vercel URL: `my-portfolio-sanjay-lagariyas-projects.vercel.app`

Verdict: it is a template with a few facts dropped in. Keep the project descriptions; rebuild everything else.

## Target architecture
An **Astro** static site, deployed on Vercel.

### Why Astro rather than staying on Next.js
- The site is almost all content: a few pages and one case study per project. Astro's MDX content collections fit that exactly.
- It ships HTML and almost no JavaScript, which helps speed and search ranking.
- It uses the same tooling and token system as the resume site, which is already Astro.
- React is still available as an "island" (`@astrojs/react`) if a case study needs an interactive demo.
- Trade-off: the owner uses Next.js at work, so a Next.js portfolio could double as a skills showcase. The answer to that is the projects themselves, not the framework behind the portfolio.

Default is Astro. If the owner prefers to stay on Next.js, keep the same content model and design and rebuild the pages in Next.js instead.

### Repo layout (target)
```
src/
  content/
    projects/*.mdx        one file per project; frontmatter + case study body
  data/site.ts            name, role, links, nav, themes
  layouts/Base.astro      head, SEO tags, fonts, theme bootstrap
  layouts/CaseStudy.astro case study page layout
  components/             Nav, Footer, ProjectRow, Shelf (signature), Seo
  pages/
    index.astro           home
    projects/index.astro  all projects
    projects/[slug].astro case study (from the collection)
    about.astro
    contact.astro
    404.astro
    og.png.ts             social image drawn at build time
  styles/tokens.css       colour and type tokens (shared names with the resume site)
  styles/global.css
public/                   favicon.svg, robots.txt
Docs/                     these documents
.agents/skills/           frontend-design
```

### Content model: `projects` collection
```
title        string, required
slug         from filename
summary      string, one or two sentences, used on cards and in meta description
stack        string[]
role         string  (for example "Solo build", "Team of 3")
year         number, optional until confirmed
links        { code?: url, live?: url, docs?: url }
cover        image, optional until a real screenshot exists
featured     boolean   (shown on the home page)
order        number
todo         boolean   (true while content is waiting on the owner)
```
Body is MDX with these sections: What it is, The problem, What I built, What was hard, Result, Screenshots.

### Data flow
`src/content/projects/*.mdx` → content collection → `projects/index.astro` and `projects/[slug].astro`. Site-wide facts come from `src/data/site.ts`. Images are imported through `astro:assets` so they are resized at build time.

## Hosting and domain
- **Vercel** builds from GitHub. `main` is production; every other branch gets a preview URL.
- When the rebuild merges, switch the project's framework preset from Next.js to Astro (Project → Settings → Build and Development).
- **Domain:** no purchase. A short `*.vercel.app` name is set in Project → Settings → Domains. Candidates in order of preference (availability is first-come on Vercel, so the dashboard tells you):
  1. `sanjaylagariya.vercel.app`
  2. `sanjay-lagariya.vercel.app`
  3. `lagariya.vercel.app`
  4. `sanjay-builds.vercel.app`
  5. `sanjaydev.vercel.app`
- Make the new name the primary domain; the old long URL keeps working and redirects.
- After switching, update: resume site (`src/data/site.ts` → `portfolio`), GitHub profile, LinkedIn, canonical URLs and the sitemap `site` setting in this repo.

## SEO
Title, description, canonical, Open Graph and Twitter tags per page; JSON-LD `Person` on the home page and `CreativeWork` on case studies; generated `sitemap-index.xml`; `robots.txt`; a build-time social image per site (and optionally per project).

## Performance budget
- Lighthouse mobile 95 or better in all four categories
- Under 50 KB of JavaScript on the home page
- Project images served as WebP, each under about 150 KB
- Two font families at most

## Migration plan
1. Create branch `astro-rewrite`. Scaffold Astro in place of Next.js (remove `next`, `eslint-config-next`, shadcn files that are not needed).
2. Port the project descriptions into MDX files first; they are the most valuable existing content.
3. Build the pages; check the Vercel preview URL after each push.
4. Merge to `main` after the owner approves the preview. Switch the framework preset. Verify production.
5. Delete leftover Next.js files in a follow-up commit.

## Constraints and gotchas
- Astro 7 needs Node 22.23.4 or newer. Set the Node version in Vercel (Settings → Build and Development) if needed.
- Pin dependency versions; commit the lockfile (Vercel uses it).
- Case study screenshots are binary files and cannot be added through some automated tools; the owner may need to commit them directly.
- Changing the framework preset is a dashboard action only the owner can do.
