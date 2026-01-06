# The Frantz Lab Website

This repository contains the source code for the official website of the Frantz Lab at Washington University in St. Louis.

## Live Site

The live website can be viewed at: [https://Bonney96.github.io/deflab-website/](https://Bonney96.github.io/deflab-website/)

## Setup

This site is built with [HugoBlox](https://github.com/HugoBlox/kit), a Hugo-based static site generator.

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (version 0.154.2 or later)
- [Go](https://go.dev/dl/) (for Hugo modules)
- [Node.js](https://nodejs.org/) (optional, for some features)

### Getting Started

1. **Install Hugo modules:**
   ```bash
   hugo mod get -u
   hugo mod tidy
   ```

2. **Start the development server:**
   ```bash
   hugo server
   ```
   The site will be available at `http://localhost:1313`

3. **Build the site:**
   ```bash
   hugo
   ```
   The generated site will be in the `public/` directory.

### Theme

The HugoBlox kit theme is included as a git submodule in `themes/hugoblox-kit/`.

To update the theme:
```bash
git submodule update --remote themes/hugoblox-kit
```

### Configuration

- Main config: `hugo.yaml`
- Module config: `config/_default/module.yaml`
- Site parameters: `config/_default/params.yaml`
- Navigation: `config/_default/menus.yaml`

### Documentation

For more information, visit:
- [HugoBlox Documentation](https://docs.hugoblox.com/)
- [Hugo Documentation](https://gohugo.io/documentation/)
