# Development Guide

## Purpose

This document defines the architecture, development workflow, coding standards, project conventions, and engineering practices for the Ignite The Soul website.

It exists to ensure every contributor—human or AI—builds the project consistently while maintaining high standards for performance, accessibility, maintainability, and user experience.

This document focuses on **how the website is built**, not how it looks.

---

# Project Stack

| Layer | Technology |
|---------|------------|
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

---

# Project Structure

```
src/
│
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   └── shared/
│
├── lib/
├── hooks/
├── utils/
├── types/
├── data/
├── constants/
└── styles/
```

Every folder has a single responsibility.

Avoid unnecessary nesting.

---

# Phase 3 Checklist — Development Environment

The initial `create-next-app` scaffold created a root-level `app/` directory. Next.js ignores `src/app` entirely while a root `app/` exists, so before any real development starts:

- [ ] Migrate `app/` → `src/app/`
- [ ] Update `tsconfig.json` path aliases (`@/*` currently resolves to `./*` and must become `./src/*`)
- [ ] Verify `next.config.ts`
- [ ] Confirm the Next.js application boots successfully

Do not begin Phase 4 (Core Development) until every item above is checked off.

---

# Architecture Principles

## Server Components First

Default to Server Components.

Only use Client Components when necessary.

Examples:

- Forms
- Animations
- Interactive UI
- Browser APIs

---

## Composition Over Duplication

Build reusable sections.

Avoid copy-pasting layouts.

If something appears twice, consider creating a shared component.

---

## Single Responsibility

Each component should solve one problem.

Avoid large monolithic files.

---

## Predictable Folder Structure

Every component should live where another developer expects to find it.

---

# Naming Conventions

Components

```
Hero.tsx
Navbar.tsx
OfferCard.tsx
```

Hooks

```
useScroll.ts
useMediaQuery.ts
```

Utilities

```
formatDate.ts
cn.ts
```

Constants

```
site.ts
routes.ts
metadata.ts
```

Types

```
testimonial.ts
offering.ts
navigation.ts
```

---

# Component Guidelines

Every component should:

- Be reusable
- Be typed
- Accept only necessary props
- Have descriptive names
- Avoid unnecessary state

Keep components under roughly 200 lines where practical.

Split large sections into smaller components.

---

# Styling Standards

Use Tailwind utilities.

Avoid custom CSS whenever possible.

Never use inline styles unless dynamically required.

Never hardcode colors.

Always use design tokens.

---

# Animation Standards

GSAP handles complex animations.

Lenis handles scrolling.

Animations should:

- Enhance content
- Never distract
- Respect reduced motion
- Be subtle
- Perform well

Avoid:

- Bounce
- Spin
- Flashing effects
- Excessive parallax

---

# Forms

Every form should use:

React Hook Form

+

Zod

Requirements:

- Client-side validation
- Accessible labels
- Helpful error messages
- Loading state
- Success state
- Error state

Submissions handled through:

Resend

---

# Accessibility

Every page must:

- Meet WCAG AA
- Support keyboard navigation
- Have visible focus states
- Respect prefers-reduced-motion
- Use semantic HTML
- Include alt text
- Maintain proper heading hierarchy

Accessibility is not optional.

---

# Performance

Goals

Lighthouse

95+

Accessibility

100

Best Practices

100

SEO

100

Core Web Vitals

Excellent

---

# Images

Use next/image.

Compress before upload.

Lazy load below the fold.

Avoid oversized assets.

Use WebP when appropriate.

---

# Fonts

Use next/font.

Avoid importing fonts from CSS.

Self-host whenever possible.

Limit font weights.

---

# State Management

No global state library.

Use:

- Server Components
- Props
- Local state
- React Hook Form

Introduce global state only if genuinely required.

---

# Environment Variables

Secrets belong in:

```
.env.local
```

Never commit secrets.

Document every variable inside:

```
.env.example
```

---

# Error Handling

Every async operation should:

- Handle loading
- Handle failure
- Display friendly messages

Never expose technical errors to users.

---

# SEO

Every page requires:

- Metadata
- Open Graph
- Canonical URL
- Structured headings

---

# Git Workflow

Main Branch

```
main
```

Feature branches

```
feature/homepage

feature/forms

feature/about-page
```

Documentation

```
docs/update-brand-guidelines
```

Commit format

```
feat:

fix:

docs:

refactor:

style:

perf:

chore:
```

---

# Code Quality

Always:

✓ Strict TypeScript

✓ ESLint clean

✓ No console.log before production

✓ No unused imports

✓ No duplicated components

✓ Small reusable functions

✓ Descriptive variable names

---

# Testing Checklist

Before merging:

✓ Responsive

✓ Accessibility

✓ Lighthouse

✓ Forms

✓ Animations

✓ Links

✓ SEO

✓ Mobile

✓ Tablet

✓ Desktop

---

# Deployment

Hosting

Vercel

Production branch

main

Environment variables configured in Vercel.

---

# Definition of Done

A task is complete when:

- Requirements are implemented
- Fully responsive
- Accessible
- Performs well
- Uses reusable components
- Follows the design system
- Passes linting
- Has no TypeScript errors
- Matches the approved design
- Has been manually tested

---

# Final Engineering Principle

Write code that another developer can understand six months from now without needing an explanation.

Prioritize clarity over cleverness.

Maintainability over shortcuts.

Consistency over personal preference.