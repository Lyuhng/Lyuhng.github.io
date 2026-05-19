# Academic Homepage

Astro + Tailwind CSS static academic homepage for Yuhang Lei.

## What is included

- Responsive pages: Home, Research, Publications, CV, Contact, and News.
- Data-driven content in `src/data/*.ts`.
- Google Scholar information imported from the public profile at <https://scholar.google.com/citations?user=zD7nHbYAAAAJ&hl=zh-CN&oi=ao>.
- Publications grouped by year and reusable project/publication/news cards.
- Placeholder CV PDF and replaceable profile/project images.
- GitHub Pages workflow at `.github/workflows/deploy.yml`.

## Local development

```bash
npm install
npm run dev
```

The local preview usually runs at <http://localhost:4321>.

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Replace personal information

Most maintenance happens in these files:

- `src/data/profile.ts`: name, role, institution, bio, interests, metrics, contact links, CV sections.
- `src/data/news.ts`: news items.
- `src/data/publications.ts`: publications, links, selected flags, abstracts.
- `src/data/projects.ts`: research project cards.
- `public/images/avatar.jpg`: profile portrait.
- `public/cv.pdf`: downloadable CV.

Fields that still need confirmation:

- Exact degree program, supervisor, and dates.
- Personal domain, if you plan to use one.
- Complete education, experience, awards, services, and invited talks.
- Final CV PDF.
- PDF, code, project, and BibTeX links for individual papers.

## Add a publication

Add a new object to `src/data/publications.ts`:

```ts
{
  title: "Your Paper Title",
  authors: "Yuhang Lei, Coauthor A, Coauthor B",
  venue: "Journal or Conference Name",
  year: 2026,
  type: "Journal",
  selected: true,
  links: {
    pdf: "https://example.com/paper.pdf",
    code: "https://github.com/...",
    project: "https://example.com/project",
    bibtex: "/bibtex/your-paper.bib",
    scholar: "https://scholar.google.com/..."
  }
}
```

The publications page will group it by year automatically.

## Deploy to GitHub Pages

Recommended repository name: `Lyuhng.github.io`.

This creates the clean personal site URL:

```text
https://lyuhng.github.io/
```

1. Create a new GitHub repository named `Lyuhng.github.io`.
2. Push this project to that repository.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main`; the workflow deploys the static site.

For a project page such as `https://USERNAME.github.io/academic-homepage/`, set a repository variable named `BASE_PATH` to `/academic-homepage/` or edit `astro.config.mjs`.

For a custom domain, set `SITE` to your domain, configure `Settings -> Pages -> Custom domain`, add the DNS records at your DNS provider, and enable HTTPS.
