# Ignite The Soul

The website for **Ignite The Soul**, a premium women's wellness brand founded by Mafaza Rafeek — coaching, retreats, workshops, and women's circles, presented as a calm, editorial digital sanctuary rather than a corporate business site.

This repository is currently in its **foundation phase**: project structure and documentation only. No application code has been written yet. Full context lives in [`CLAUDE.md`](./CLAUDE.md) and the [`docs/`](./docs) directory — read those before implementing anything.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animation | GSAP |
| Smooth Scrolling | Lenis |
| Forms | React Hook Form |
| Validation | Zod |
| Email | Resend |
| Icons | Lucide React |
| Deployment | Vercel |

See [docs/05-development-guide.md](./docs/05-development-guide.md) for the full technical rationale.

## Documentation

| Doc | Covers |
|---|---|
| [docs/01-project-overview.md](./docs/01-project-overview.md) | Brand, audience, offerings, project scope |
| [docs/02-brand-guidelines.md](./docs/02-brand-guidelines.md) | Voice, tone, values, visual identity |
| [docs/03-design-system.md](./docs/03-design-system.md) | Color, typography, spacing, components, motion |
| [docs/04-content-strategy.md](./docs/04-content-strategy.md) | Sitemap, page content, copywriting, SEO |
| [docs/05-development-guide.md](./docs/05-development-guide.md) | Architecture, conventions, workflow |
| [docs/06-roadmap.md](./docs/06-roadmap.md) | Phased delivery plan |
| [docs/references/](./docs/references) | Founder profile, client notes, inspiration, competitors |

`CLAUDE.md` is the permanent AI instruction manual for this repo — coding/design philosophy, folder and naming conventions, accessibility/performance/animation expectations, and definition of done.

## Folder Structure

```
docs/                  Project documentation (this is the source of truth)
public/
  images/ icons/ fonts/ videos/    Static assets, grouped by type
src/
  app/                 Routes, layouts, route handlers (App Router)
  components/
    ui/                shadcn/ui primitives, themed to the design system
    layout/            Header, footer, page shell, section wrapper
    sections/          Composed page sections (hero, offerings, testimonials, etc.)
    forms/             Contact + per-offering registration forms
    shared/            Small components reused across sections
  lib/                 Clients/utilities tied to external services (e.g. Resend)
  hooks/               Custom React hooks
  utils/               Generic helper functions
  types/               Shared TypeScript types
  data/                Static/structured content data
  styles/              Global styles, Tailwind entry point
  constants/           Site-wide constants (routes, metadata)
```

## Development Workflow

1. Read [CLAUDE.md](./CLAUDE.md) and the `docs/` set before writing code — documentation is the source of truth for this project.
2. Work on descriptively named branches (e.g. `feature/contact-form`, `docs/update-brand-guidelines`); `main` tracks production.
3. Commits follow conventional prefixes: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `perf:`, `chore:`.
4. Every task should meet the Definition of Done in [CLAUDE.md](./CLAUDE.md) before merging: responsive, accessible, matches the design system, no TypeScript/lint errors, manually tested.

## Setup Instructions

This repository is not yet ready for `npm install` — dependencies (Tailwind, shadcn/ui, GSAP, Lenis, React Hook Form, Zod, Resend) have not been added yet and installation is intentionally out of scope for the current phase.

When implementation begins:

1. Copy [`.env.example`](./.env.example) to `.env.local` and fill in real values (Resend API key, notification email, site URL).
2. Resolve the `app/` vs `src/app/` structure: this scaffold still has a root-level `app/` directory from the initial `create-next-app` setup, alongside the empty `src/app/` created for this project's structure. Next.js ignores `src/app` entirely while a root `app/` exists — the two cannot coexist. Migrate the existing route files into `src/app/` and update `tsconfig.json`'s path alias (`@/*` currently points to `./*` and needs to become `./src/*`) before running the dev server.
3. Install the planned dependencies listed in the Stack table above.
4. Configure Tailwind and shadcn/ui against the tokens in [docs/03-design-system.md](./docs/03-design-system.md).

## Roadmap

See [docs/06-roadmap.md](./docs/06-roadmap.md) for the full phase-by-phase plan. In short: Discovery & Documentation (current) → Brand Exploration → UI/UX Design → Development Environment → Core Development → Content Integration → Forms & Integrations → Motion & Polish → Quality Assurance → Launch → Post-Launch.
