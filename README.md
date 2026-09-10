# Project descrption — Visual Project Memo 

This repository is a lightweight private project memo site.
Jekyll -> GitHub Pages code & structure created and debugged with AI assistance, ChatGPT 5.6 Sol High 9/2026. 

## Repository structure

```text
REPO/
├── .gitignore
├── README.md
├── _config.yml
├── index.html
│
├── _includes/
│   └── project-card.html
│
├── _layouts/
│   ├── default.html
│   └── project.html
│
├── _projects/
│   ├── project-one.md
│   ├── project-two.md
│   └── ...
│
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    └── images/
        └── ...
```
_config.yml — main Jekyll configuration  
index.html — showcase homepage  
_includes/ — reusable HTML pieces, currently the project card  
_layouts/ — page templates  
_projects/ — one Markdown file per project  
assets/css/ — visual styling  
assets/js/ — filtering, sorting, card interaction  
assets/images/ — project images  

## Designed for **GitHub Pages → Deploy from a branch**

Files to repo → Settings → Pages → Build and deployment → Deploy from a branch.  
Selection: `main` branch and `/(root)` folder.
No custom workflow file required.  
GitHub Pages uses Jekyll when publishing from a branch.

## Site 

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

For projects with no external link, might use internal .md file instead. 
**Remove the `external_url` line** -> write longer description below the closing `---`. 
Everything after the second --- becomes the longer project webpage if that project has an internal page. 

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
- `tags` — one project may have several tags; add tags as wished; filters for new tag items generated automatically onto the page.
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
Intention: JPEG/WebP, SVG simple graphics. 

## Making updates: GitHub Desktop workflow & .gitignore

Edit in cloned repo folder -> review **Changes** list ->  commit -> commit and push. See what `.gitignore` keeps out.
