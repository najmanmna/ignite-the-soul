@AGENTS.md

# CLAUDE.md

# Ignite The Soul

This repository contains the source code for the Ignite The Soul website.

Before making implementation decisions, always consult the documentation inside the `/docs` directory.

---

# Project Documentation

Read these documents before writing code.

1. docs/01-project-overview.md
2. docs/02-brand-guidelines.md
3. docs/03-design-system.md
4. docs/04-content-strategy.md
5. docs/05-development-guide.md
6. docs/06-roadmap.md

Reference material is available under:

docs/references/

Never ignore documented decisions.

Documentation is the source of truth.

---

# Project Philosophy

This is not a typical marketing website.

It should feel like a calm digital sanctuary.

Every implementation decision should support:

- Simplicity
- Clarity
- Warmth
- Accessibility
- Performance
- Maintainability

Avoid unnecessary complexity.

---

# Technology Stack

Framework

- Next.js (App Router)

Language

- TypeScript

Styling

- Tailwind CSS

UI

- shadcn/ui

Animation

- GSAP
- Lenis

Forms

- React Hook Form
- Zod

Email

- Resend

Icons

- Lucide React

---

# Folder Conventions

```
docs/                   Project documentation — read before implementing anything
public/
  images/ icons/ fonts/ videos/    Static assets, grouped by type
src/
  app/                   Routes, layouts, route handlers (App Router)
  components/
    ui/                  shadcn/ui primitives, themed to the design system
    layout/              Header, footer, page shell, section wrapper
    sections/            Composed page sections (hero, offerings, testimonials, etc.)
    forms/               Contact + per-offering registration forms
    shared/              Small components reused across sections
  lib/                   Clients/utilities tied to external services (e.g. Resend)
  hooks/                 Custom React hooks
  utils/                 Generic helper functions
  types/                 Shared TypeScript types
  data/                  Static/structured content data
  styles/                Global styles, Tailwind entry point
  constants/             Site-wide constants (routes, metadata)
```

Every file belongs in the folder that matches its responsibility. Do not create new top-level folders without updating this document and `docs/05-development-guide.md`.

---

# Naming Conventions

- Components: `PascalCase` (e.g. `Hero.tsx`, `OfferCard.tsx`).
- Hooks: `camelCase`, prefixed `use` (e.g. `useScroll.ts`, `useMediaQuery.ts`).
- Utilities: `camelCase` (e.g. `formatDate.ts`, `cn.ts`).
- Constants: `camelCase` filenames, `SCREAMING_SNAKE_CASE` for true constant values (e.g. `site.ts`, `routes.ts`).
- Types: `camelCase` filenames matching the domain they describe (e.g. `testimonial.ts`, `offering.ts`).
- Routes/folders inside `src/app/`: lowercase, kebab-case if multi-word.

---

# General Development Rules

Always:

- Use TypeScript strict mode.
- Prefer Server Components.
- Use Client Components only when required.
- Write reusable components.
- Keep components focused.
- Prefer composition over duplication.
- Follow the existing folder structure.
- Respect the design system.
- Use semantic HTML.
- Build mobile-first.

Never:

- Introduce new dependencies without approval.
- Duplicate components.
- Hardcode colors.
- Ignore accessibility.
- Use inline styles unless required.
- Add unnecessary abstractions.

---

# Component Guidelines

Before creating a component:

1. Search for an existing one.
2. Reuse if possible.
3. Extend if appropriate.
4. Only create a new component if necessary.

Keep components small.

Split components when responsibilities grow.

---

# Styling Rules

Use Tailwind utilities.

Follow the design tokens.

Avoid arbitrary values whenever possible.

Spacing should follow the spacing scale.

Typography should follow the design system.

---

# Animation Rules

Animations should:

- Feel subtle
- Support storytelling
- Never distract
- Respect prefers-reduced-motion

Avoid:

- Bounce
- Flash
- Spin
- Heavy parallax
- Excessive motion

Performance always comes before animation.

---

# Accessibility

Every feature must support:

- Keyboard navigation
- Screen readers
- Visible focus states
- Semantic HTML
- WCAG AA

Accessibility is required.

---

# Forms

Every form should use:

- React Hook Form
- Zod validation

Requirements:

- Accessible labels
- Helpful validation
- Loading state
- Success state
- Friendly errors

Submissions use Resend.

---

# Performance Goals

Target:

- Lighthouse Performance ≥ 95
- Accessibility = 100
- Best Practices = 100
- SEO = 100

Optimize:

- Images
- Fonts
- Bundle size
- Animations

Avoid unnecessary JavaScript.

---

# SEO

Every page should include:

- Metadata
- Open Graph tags
- Proper heading hierarchy
- Semantic HTML

---

# Code Standards

Use:

- Descriptive names
- Small functions
- Reusable utilities
- Shared types
- Consistent formatting

Avoid:

- any
- console.log in production
- Dead code
- Unused imports

---

# Before Every Task

Before writing code:

1. Read the relevant documentation.
2. Understand the existing architecture.
3. Search for reusable components.
4. Confirm the implementation matches the design system.

Do not guess.

---

# When Unsure

If documentation conflicts with implementation:

Stop.

Do not invent solutions.

Ask for clarification.

Documentation takes priority over assumptions.

---

# Definition of Done

A task is complete only when:

- Fully implemented
- Responsive
- Accessible
- Matches the approved design
- Uses reusable components
- Has no TypeScript errors
- Passes ESLint
- Performs well
- Uses existing project conventions

---

# Final Principle

Write code another developer can understand six months from now.

Choose clarity over cleverness.

Build experiences that feel calm, intentional, and timeless.