# Project descrption — GitHub Pages / Jekyll

This repository is a lightweight private project memo site.

## Repository structure

REPO/
├── .gitignore
├── README.md
├── _config.yml # main Jekyll configuration file
├── index.html # main page content in the "frame"
│
├── _includes/ # Jekyll folder for small reusable project card
│   └── project-card.html
│
├── _layouts/ # Jekyll folder for page templates
│   ├── default.html # general page shell (like an overall "frame")
│   └── project.html # individual project detail pages
│
├── _projects/
│   ├── project-one.md
│   ├── project-two.md
│   └── ...
│
└── assets/
    ├── css/
    │   └── styles.css # visual styling
    ├── js/
    │   └── app.js # JavaScript file that for page’s interactive behavior
    └── images/
        ├── ...


## Designed for **GitHub Pages → Deploy from a branch**

Files to repo → Settings → Pages → Build and deployment → Deploy from a branch.Selection: `main` branch and `/(root)` folder.

No custom workflow file required.  
GitHub Pages uses Jekyll when publishing from a branch.

## Site name and intro

Page reads automatically: `title`, `tagline`, `intro`,  `description`.

The project grid continuous, no pagination. Images browser-native lazy loading (browser doesn’t download every image immediately).

## Adding a project

Create a new `.md` file inside `_projects/`. 
Use lowercase filename with hyphens (`_projects/my-new-project.md`)

Structure 

```yaml
---
title: "My New Project"
date: 2026-09-10
tags: [AI, Visual, Experiments]
short_text: "Two or three short lines for the card front."
back_text: "Consice description."
image: /assets/images/my-new-project.jpg
image_position: 50% 50%
card_style: image
card_size: standard
external_url: "https:// optional /"
---
```

Some links need to open an internal .md file instead of an external site, **remove the `external_url` line** and write the longer description below the closing `---`. Everything after the second --- becomes the longer project webpage if that project has an internal page.

Example:

```markdown
---
title: "Private Research Prototype"
date: 2026-09-10
tags: [Research, AI]
short_text: "A public-safe summary of a private prototype."
back_text: "This card describes the idea without exposing the private implementation or repository."
card_style: type
card_size: standard
background: "#e7d4c9"
handwritten_note: "work in progress"
---

## About the project

This is the longer public-safe description.
```

## Card fields

- `title` — project title.
- `date` — used by Newest / Oldest sorting. Use `YYYY-MM-DD`.
- `tags` — one project may have several tags; filters (new tag items that I might add) are generated automatically onto the page.
- `short_text` — front-side description.
- `back_text` — back-side description.
- `image` — optional local image path. Put images in `assets/images/`.
- `image_position` — optional crop focus, for example `70% 35%`.
- `card_style` — `image` or `type`.
- `card_size` — `compact`, `standard`, or `tall`.
- `background` — background color for a text-only card.
- `handwritten_note` — optional handwritten accent.
- `title_style` — optional `handwritten` for a handwritten card title.
- `external_url` — optional. If present, Open project goes to that URL in a new tab. If absent, it opens the generated Markdown project page.
- `link_label` — optional replacement for the words `Open project`.

## Images

Demo SVG placeholders.
Intention: JPEG/WebP photographs, SVG simple graphics. 

## GitHub Desktop workflow & .gitignore

Edit in cloned repo folder -> review **Changes** list ->  commit -> commit and push. See what `.gitignore` keeps out.
