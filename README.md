# Frantz Lab Website

Official website for the **Frantz Lab** at Washington University in St. Louis — advancing translational chemistry and drug discovery through innovative synthetic methods, high-throughput screening, and strategic industry partnerships.

**Live site:** [deflab-website.pages.dev](https://deflab-website.pages.dev/)

---

## About

The Frantz Lab, led by **Prof. Doug Frantz**, is part of the Department of Biochemistry & Molecular Biophysics at WashU Medicine. Research focuses on:

- **Drug Discovery & Medicinal Chemistry** — taccalonolide-based therapeutics for triple-negative breast cancer
- **Synthetic Methods & Catalysis** — Pd-catalyzed allene synthesis, metal-catalyzed borylation, late-stage functionalization

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Hugo](https://gohugo.io/) | Static site generator |
| [HugoBlox](https://hugoblox.com/) | Theme framework |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Cloudflare Pages](https://pages.cloudflare.com/) | Hosting & deployment |

---

## Local Development

### Prerequisites

- **Hugo Extended** ≥ 0.154.2 ([install](https://gohugo.io/installation/))
- **Go** ([install](https://go.dev/dl/)) — required for Hugo modules
- **Node.js** ≥ 18.0.0 ([install](https://nodejs.org/))

### Setup

```bash
# Install Hugo modules
hugo mod get -u && hugo mod tidy

# Install Node dependencies (for Tailwind CSS)
npm install

# Start dev server with live reload
hugo server
```

The site will be available at `http://localhost:1313`.

### Build

```bash
hugo
```

Output goes to `public/`. The Cloudflare Pages deployment runs this automatically on push to `main`.

---

## Project Structure

```
deflab-website/
├── config/_default/
│   ├── hugo.yaml          # Hugo config (baseURL, modules)
│   ├── params.yaml        # Site identity, theme colors, SEO
│   ├── menus.yaml         # Navigation menu items
│   └── module.yaml        # Hugo module mounts
├── content/
│   ├── home/              # Homepage section blocks
│   ├── people/            # Lab member profiles
│   ├── research/          # Research area pages
│   ├── publication/       # Publications list
│   └── group-life/        # Photo albums (conferences, outings, etc.)
├── layouts/
│   ├── home.html          # Custom homepage layout
│   └── _partials/
│       ├── components/
│       │   ├── headers/navbar.html   # Custom navbar
│       │   └── footers/minimal.html  # Custom footer
│       └── hooks/                    # Hugo hook partials
├── static/
│   └── images/
│       ├── WashU/         # Institutional logos
│       └── publications/  # Publication cover images
├── assets/
│   └── media/             # Site icon, logo assets for Hugo pipeline
└── themes/hugoblox-kit/   # Theme submodule
```

---

## Adding & Editing Content

### Lab Members

Create a new file in `content/people/`:

```bash
hugo new people/firstname-lastname.md
```

Edit the front matter to set name, role, bio, and photo. Photos go in `static/images/`.

### Publications

The publications list lives at `content/publication/publications-list.md`. Add new entries as numbered list items following the existing citation format.

### Research Pages

Research area pages are in `content/research/`. Each `.md` file becomes a page with its own URL.

### Group Life Albums

Photo album pages live in `content/group-life/`. Each album is a `.md` file with an image gallery block.

---

## Configuration

Key settings in `config/_default/params.yaml`:

| Setting | Description |
|---------|-------------|
| `identity.name` | Site name shown in navbar and title |
| `identity.organization` | Legal entity for copyright |
| `identity.tagline` | Short tagline |
| `theme.colors.primary` | WashU Red `#BA0C2F` |
| `theme.colors.secondary` | WashU Dark Gray `#252525` |
| `header.cta` | Contact button in navbar |

---

## Theme

The HugoBlox kit theme is included as a Git submodule at `themes/hugoblox-kit/`.

```bash
# Update theme to latest
git submodule update --remote themes/hugoblox-kit
```

Custom layout overrides in the top-level `layouts/` directory take precedence over theme defaults.

---

## Deployment

The site deploys automatically via **Cloudflare Pages** on every push to `main`. No manual steps needed.

To preview a branch deployment, push to any non-main branch — Cloudflare Pages will generate a preview URL.

---

## Links

- [HugoBlox Docs](https://docs.hugoblox.com/)
- [Hugo Docs](https://gohugo.io/documentation/)
- [WashU Medicine](https://medicine.washu.edu/)
- [Frantz Lab Department Page](https://biochem.wustl.edu/)
