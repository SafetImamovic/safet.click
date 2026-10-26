# safet.click

Personal site: blog, projects, about. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
```

## Content

| What | Where |
|---|---|
| Blog post | `src/content/blog/<slug>.md` |
| Project | `src/content/projects/<slug>.md` |
| About | `src/pages/about.astro` |
| CV (experience, education, teaching, awards, skills) | `src/pages/cv.astro`, PDF at `public/cv.pdf` |
| Publications | `src/pages/publications.astro` |
| Name, bio, socials, nav | `src/consts.ts` |

Project frontmatter: `featured: true` puts a card with `image` on the home page; `kofi: true` adds the Ko-fi box; `links` adds extra buttons (Modrinth, CurseForge, docs).

The frontmatter schema lives in `src/content.config.ts`. Set `draft: true` to hide an entry in production; drafts still show in `npm run dev`.

## Deploy

Every push to `master` builds and deploys through `.github/workflows/deploy.yml`.

One-time setup:

1. GitHub repo → Settings → Pages → Source: **GitHub Actions**.
2. Namecheap → Domain List → safet.click → Advanced DNS:
   - Four `A` records, host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record, host `www`, value `safetimamovic.github.io.`
   - Remove Namecheap's default parking records.
3. Repo → Settings → Pages → Custom domain: `safet.click`, then tick **Enforce HTTPS** once the certificate is issued.

`public/CNAME` already holds the domain.
