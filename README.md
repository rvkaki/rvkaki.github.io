# rjvieira.com

Personal site for Ricardo Vieira, football data analyst and developer.
Astro, no CSS framework, deployed to GitHub Pages on every push to `main`
(see `.github/workflows/deploy.yml`).

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in dist/
npm run preview
```

## Where things live

| Path | What's in it |
| --- | --- |
| `src/data/content.ts` | All copy: intro, work, roles, education, toolkit. Edit here first. |
| `src/pages/index.astro` | The whole page. One column, top to bottom. |
| `src/styles/global.css` | Every style on the site. Colours are custom properties at the top. |
| `src/layouts/` | Head and meta, plus the page shell. |
| `public/images/` | Project screenshots, as WebP. |
| `public/og.png` | Social preview card, generated from a throwaway HTML file. |

Design is a sports-desk / broadsheet layout: Archivo for the masthead and
furniture, Spectral for reading, red as the single spot colour. The site
follows the reader's system light/dark setting and has no theme toggle.
Colours come from the custom properties in `:root` and the
`prefers-color-scheme` block right under it, so changing a value there
changes both themes together.

## Updating the CV

Drop the new PDF at `public/cv-ricardo-vieira.pdf`. The intro and the contact
section both link to `site.cv` in `src/data/content.ts`.
