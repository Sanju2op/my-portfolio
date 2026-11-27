# Adding real screenshots

Project covers and in-page images go through Astro's image pipeline: they are resized and converted to WebP at build time, so you can upload normal-sized PNG or JPG files. Until a real cover is set, a drawn placeholder cover is used.

## Steps
1. **Take the screenshot.** A wide shot of the app or browser window works best (about 16:10). At least 1600 px wide. Hide anything private (emails, names, keys, tokens).
2. **Upload it** to `src/assets/shots/` in the `my-portfolio` repo: on GitHub open that folder, choose *Add file → Upload files*, drop the image in, and commit to `main`. Name it after the project, for example `testimonials-system.png`.
3. **Set the cover** in the project's file, for example `src/content/projects/testimonials-system.mdx`:
   ```
   cover: ../../assets/shots/testimonials-system.png
   ```
   Remove the `mock:` line (it only chooses the placeholder cover).
4. **Add more screenshots** inside the case study text with normal image syntax. The path is relative to the MDX file:
   ```
   ![The dashboard showing a list of testimonials](../../assets/shots/testimonials-dashboard.png)
   ```
   Always write a short description in the square brackets; it becomes the alt text for screen readers.
5. Commit. The site rebuilds and deploys by itself.

## What the build does
- The cover is cropped to the top of the image and made 800 px wide for the project list and 1600 px wide for the case study banner, both as WebP.
- Images inside the case study text keep their own size, converted to WebP, so export them at about 1600 px wide.
- The original files are not shipped to visitors.

## Good screenshots
- Real data or realistic data, not lorem ipsum.
- One clear idea per image: overview, one key screen, one detail.
- Consistent browser window or no window; the same style across projects.

## Why this is a manual step
The tools used to maintain this repo can write text files but cannot upload image files, so images have to be added from GitHub's website or with git on your computer.
