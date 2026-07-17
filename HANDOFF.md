# Handoff: SMV Engineers Website Redesign — Frontend v1

## Objective

Rebuild https://smvengineers.com as a modern React + Vite single-page application with a fresh, professional theme. All source material (content, assets, design system) is documented in `website-docs/`.

## Source Material

All content and assets are already extracted and organized:

```
website-docs/
├── INDEX.md                     # Site overview, page table, features
├── site-structure.md            # Navigation hierarchy & template layout
├── assets/
│   ├── images.md                # Full asset catalog with folder structure
│   ├── theme.json               # Design system (colors, fonts, components)
│   ├── css/autoptimize.css      # Original theme CSS (reference only)
│   ├── js/                      # Original JS (reference only)
│   ├── fonts/                   # Metropolis (4 weights), slick, vp-close-icon
│   ├── pdfs/                    # Company brochure
│   └── images/
│       ├── hero/                # 11 hero slider images (desktop + mobile)
│       ├── backgrounds/         # 9 section backgrounds & decorations
│       ├── projects/            # 5 project carousel thumbnails
│       ├── icons/               # 16 SVG/PNG UI controls
│       ├── logos/               # Site logo, 5 license logos, 28 client logos
│       ├── team/                # 38 team member photos
│       └── favicon/             # 4 favicon sizes
└── pages/
    ├── 01-home.md               # Hero slider, sections, project carousel, CTA
    ├── 02-the-firm.md           # Vision, Mission, Values, Culture, Background, Licenses
    ├── 03-services.md           # Full service catalog (10 services with descriptions)
    ├── 04-team.md               # 11 leadership + 27 staff with roles & offices
    ├── 05-projects.md           # 90+ projects organized by 9 categories
    ├── 06-our-clients.md        # 27 clients with named logo references
    ├── 07-careers.md            # 3 job openings + internship info
    └── 08-contact.md            # 3 office addresses, 3 contact forms, phone/email
```

## Tech Stack

| Layer | Choice | Package |
|-------|--------|---------|
| Framework | React 19 | `react`, `react-dom` |
| Build | Vite 6 | `vite`, `@vitejs/plugin-react` |
| Language | TypeScript 5 (strict) | `typescript` |
| Styling | Tailwind CSS v4 | `tailwindcss`, `@tailwindcss/vite` |
| Routing | React Router 7 | `react-router-dom` |
| Animation | Motion | `motion` (formerly Framer Motion) |
| Carousel | Embla Carousel | `embla-carousel-react` |
| Forms | React Hook Form + Zod | `react-hook-form`, `zod`, `@hookform/resolvers` |
| Icons | Lucide React | `lucide-react` |
| Linting | ESLint (flat config) | `eslint`, `typescript-eslint` |

See `docs/standards/STACK.md` for rationale and version details.

## Pages to Build (8 total)

| Route | Page | Key Content |
|-------|------|-------------|
| `/` | Home | Hero slider (5 slides), Firm intro, Services preview, Projects carousel, CTA |
| `/the-firm` | The Firm | Vision/Mission/Values tabs, Culture, Background, Licenses |
| `/services` | Services | Tabbed service catalog (10 services with descriptions) |
| `/team` | Team | Leadership grid + staff directory |
| `/projects` | Projects | 9 category tabs, project cards with images |
| `/our-clients` | Our Clients | Client logo grid (28 logos + 5 license logos) |
| `/careers` | Careers | 3 job listings + internship section |
| `/contact` | Contact | 3 office address cards, 3 tabbed forms |

## Design Direction

**Current feel:** Dark navy + red accent, traditional corporate engineering  
**Target feel:** Modern, clean, professional — structural engineering = strength, precision, trust

- Use the Metropolis fonts already in `assets/fonts/`
- Color palette: modern blues/teals with warm accents (not just copying the old red)
- Full responsive (mobile-first)
- Accessible (WCAG AA minimum)

## Global Components

1. **Header** — Sticky top bar with logo, nav links, mobile hamburger, social icons
2. **Footer** — Logo, nav, copyright, legal links, back-to-top
3. **Hero Slider** — Full-width rotating banner (reuse on every page)
4. **CTA Section** — "Let's Discuss Your Project" with email + button
5. **Tab System** — Reusable tab component for category switching
6. **Project Card** — Image + title card for carousels/grids
7. **Contact Form** — Reusable form component with validation

## Asset Usage

All images are pre-downloaded in `website-docs/assets/images/` organized by subfolder. Copy them into the new project's `public/` directory mirroring the same structure or flatten as needed.

## Getting Started

```bash
cd "frontend v1"
npm create vite@latest . -- --template react-ts
npm install react-router-dom tailwindcss @tailwindcss/vite motion embla-carousel-react embla-carousel-autoplay react-hook-form zod @hookform/resolvers lucide-react
```

See `docs/standards/SETUP.md` for full Vite, TypeScript, and ESLint configuration.

## MCP Tools Available

- **Firecrawl** — if you need to re-scrape any page for missing detail
- **Context7** — use it whenever you need up-to-date docs for React, Vite, Tailwind, or any library (`use context7` in your prompt)

## Important Notes

- This is a **complete redesign** — do not copy the old layout. Create a fresh, modern design.
- All content text must be preserved verbatim from the source docs.
- Team member photos, client logos, and project images must be linked correctly.
- No backend required — forms can use a third-party service (EmailJS, Formspree, etc.) or just wire up mailto.

## Standards Reference

All project conventions are documented in `docs/standards/`:

| File | What it covers |
|------|----------------|
| `STACK.md` | Tech stack details, version targets, library rationale |
| `SETUP.md` | Scaffold commands, dependency install, Vite/TS/ESLint config files |
| `CODING.md` | TypeScript conventions, component patterns, folder structure, library usage standards |
| `GIT-WORKFLOW.md` | Branch naming, commit convention, PR checklist |

## Project Skill

An opencode skill is registered at `.opencode/skills/smv-redesign/SKILL.md`. Load it via:

```
Use the smv-redesign skill
```
