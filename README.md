Dansk Boliglån – Frontend

This is a Next.js
 project bootstrapped with create-next-app
.

It powers danskboliglaan.dk, including dynamic sections driven by Sanity CMS, global design tokens defined in globals.css, and a custom UI system built with Tailwind CSS v4.

🚀 Getting Started

Run the development server:

npm run dev
# or: yarn dev / pnpm dev / bun dev


Open http://localhost:3000
 to view the site.

You can start editing the page by modifying:

app/page.tsx


The page auto-updates as you edit.
The project uses next/font to load Ubuntu Sans (brand font).

🧱 Tech Stack
Frontend

Next.js 16 (App Router + Turbopack)

React Server Components

Tailwind CSS v4 using brand tokens from globals.css

next/image, next/font, and built-in optimizations

CMS

Sanity Studio at db-studio/

GROQ queries powering all homepage sections

Modular sections: hero, steps, usp, faq, trustpilot, video, apply-now, about-us, blog, CTA products, etc.

Deployment

Vercel

Environment variables required for Sanity (documented below)

🎨 Design System (Important)

All colors, spacing, and typography follow brand tokens defined in:

/app/globals.css


Example tokens:

--color-brand-dark
--color-brand-primary
--color-brand-primary-soft
--color-brand-card
--color-brand-spring
--color-brand-dusk
--color-brand-text


Use them via Tailwind:

<div class="bg-brand-dark text-brand-card"></div>


No hex codes in components unless explicitly approved.

Layout Rules

Max width: 1900px

Global padding: 10px left/right

Header overlays the Hero (absolute, no vertical offset)

Hero uses layered gradients exactly as in Figma

Calculator card sits on the Hero baseline

📁 Project Structure
app/
  layout.tsx          ← global HTML + header/footer
  page.tsx            ← dynamic sections from Sanity
  globals.css         ← brand tokens, Tailwind theme
components/
  Header.tsx
  Footer.tsx
  HeroCalculatorCard.tsx
  sections/
    HeroSection.tsx
    StepsSection.tsx
    UspSection.tsx
    ...
lib/
  sanity.client.ts
public/
  images, videos, logos

🧩 Dynamic Sections from Sanity

Each section type in Sanity has a matching component in db-next/components/.

When adding a new section:

Create schema in db-studio/schemas/

Add preview configuration (for editor clarity)

Add query fields in homePageQuery (page.tsx)

Add matching rendering branch in page.tsx

Build UI component in /components/sections/

Test in Studio + localhost

🤝 Contributing

This repo follows a strict design-driven workflow.

Golden Rules

No “vibe coding”

No arbitrary spacing or colors

Follow Figma pixel-perfect

Use brand tokens from globals.css

Use TypeScript strictly

Keep components pure and consistent

Ask before introducing new patterns

Branching
git checkout -b feature/name-of-feature

PR Requirements

A pull request must contain:

Clear description of the change

Screenshots (desktop + mobile) for UI work

No console warnings

Clean TypeScript

Matching Sanity schema (if relevant)

No unapproved design deviations

PRs are reviewed for both code quality and design accuracy.

👷 Working With Freelancers

Freelancers should:

Follow this README and CONTRIBUTING.md

Not introduce new patterns without confirmation

Validate assumptions before coding

Keep commits focused and small

Align everything with Figma

Avoid technical improvisation

They can be given access via:

Read-only for initial review

Collaborator with PR approval required

Protected main branch with required reviews

🔐 Environment Variables

Required to run:

SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_READ_TOKEN=
NEXT_PUBLIC_SANITY_API_VERSION=


For video and image assets stored locally, use:

/public/yourfile.mp4


Sanity validations accept relative-url values.

📖 Learn More

Next.js Documentation

Learn Next.js

Vercel Deployment Guide

☁️ Deploy on Vercel

Deploy directly using:

https://vercel.com/new?filter=next.js

The project is configured for predictable, optimized Vercel builds.