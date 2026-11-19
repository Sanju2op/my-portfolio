# Design

## Goal
A portfolio that feels warm, editorial and trustworthy, and that shows a few projects properly. Within ten seconds a visitor should know who Sanjay is, what he builds, and which projects to open.

## Relationship to the resume site
The two sites share one set of tokens and fonts but are tuned differently:

| | Portfolio (this repo) | Resume (`Sanju2op.github.io`) |
|---|---|---|
| Feel | Expressive, editorial, room for imagery | Quiet, dense, document-like |
| Background | Book cloth clay (`#A94E32`) with ivory text | Ivory paper (`#FAF9F5`) with dark ink and clay accents |
| Layout | Reading column plus wider project sections | One column, print-friendly, fits one or two pages |
| Motion | Hover and page transitions, reduced-motion safe | None |
| Interactive | Project index, case studies | Download PDF, print |

## Direction
Book cloth: the warm clay-red of old cloth bindings, ivory type, thick rules. Think of a well-made book, not an app dashboard.

Not this: emoji headings, grids of identical cards, gradient hero blobs, terminal windows, command-prompt labels, neon on black.

## Tokens (shared names)
| Token | Portfolio value | Use |
|---|---|---|
| `--bg` | `#A94E32` | Page background |
| `--fg` | `#FAF9F5` | Text, rules, buttons |
| `--soft` | `#FBEEE6` | Secondary text |
| `--card` | `#FAF9F5` | Frames, contact card |
| `--card-fg` | `#3A1A10` | Text on ivory surfaces |

Alternative themes (Sky, Blue, Marigold, Mint, Coral) may be offered from the footer. Each must keep 4.5:1 text contrast.

## Typography
- Display: Bricolage Grotesque, heavy and condensed for the name; 600 to 700 for headings.
- Body: Newsreader at about 19px, generous line height.
- Sentence-case headings written as phrases. No uppercase eyebrows, no numbered markers unless the content is a real sequence.

## Layout
- Home: top bar, hero (name, role, intro, two buttons), selected work, short about, contact, footer.
- `/projects`: the index of every project.
- `/projects/[slug]`: a case study set like a book chapter: title, one-line summary, a facts strip (role, stack, links), then sections with screenshots.
- Lists use thick rules, not boxes. One large filled surface per page at most.

## Signature to prototype: "the shelf"
The project index is a shelf of cloth-bound book spines. Each project has a spine in one of the theme colours with its title stamped in ivory. Hover or focus pulls the book forward and shows its summary; selecting it opens the case study.

Rules for it:
- It must work without hover (phone): spines become a tappable list with the same colours.
- It must be keyboard operable and read sensibly to screen readers (a real list of links).
- It is only the project index. Everything else stays quiet.
- If it does not survive a phone test, fall back to the plain ruled list. The list is the baseline.

## Components
- Top bar with initials and three links
- Buttons: one solid, one outlined
- Project row (plain list): title, one-line summary, links
- Case study facts strip
- Footer with links and an optional colour picker

## Motion
Hover, focus and a short page transition only. No entrance animations. Everything is disabled for `prefers-reduced-motion`.

## Accessibility
Skip link, visible focus rings, real headings, 4.5:1 body contrast in every theme, alt text on meaningful images, and no information carried by colour alone.

## Outcome
After a minute on the site a visitor should feel: this person is careful, plain-spoken and builds real things.
