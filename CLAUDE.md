# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` or `pnpm start`: Launch local development server at `http://localhost:4321`.
- `pnpm build`: Run type checking and create a production build in `./dist`.
- `pnpm preview`: Preview the production build locally at `http://localhost:4321`.
- `pnpm deploy:vercel`: Deploy to Vercel (requires Vercel CLI credentials).
- `pnpm deploy:cloudflare`: Deploy to Cloudflare Pages (requires Wrangler configuration).

## Scripting with Astro

All Astro commands are exposed via the `astro` CLI. Example:
- `pnpm astro generate` (if configured) for static site generation.

## Code Architecture Overview

- **Astro Integration**: The project uses Astro 4.x as the core framework, rendering components as static HTML with selective hydration.
- **Tailwind CSS**: Utility-first styling managed through `tailwind.config.mjs`. Themes and color variables are defined using CSS custom properties with opacity utilities.
- **TypeScript Path Aliases**: Defined in `tsconfig.json` with `@/*` alias pointing to `src/*` and `@cv` alias for `cv.json`.
- **Component Structure**: UI components live under `src/components/`, separated by feature (e.g., `ThemeSwitch.astro`, `Experience.astro`). Sections like experiences are rendered via Astro's `.astro` files that combine JSX-like syntax with frontmatter scripts.
- **Deployment**: Integrated with Vercel and Cloudflare via `deploy:` scripts. Both use a pre-rendered `dist` folder produced by `pnpm build`.

## Testing & Linting (Indirect)

- Type checking is performed by `astro check` as part of `pnpm build`.
- Prettier formatting is applied via `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.

## Key Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Defines Astro integrations (Tailwind, Astro Icon, Playform Compress). |
| `tailwind.config.mjs` | Custom theme, colors, and opacity utilities. |
| `tsconfig.json` | TypeScript compiler options, path aliases, and plugin settings. |
| `cv.json` | Central data source for the printable CV; can be edited to update portfolio content. |

## Common Pitfalls

- Duplicate function implementations in Astro components can cause TypeScript errors. Ensure each function is declared only once per file.
- Unused destructuring variables in Astro component props cause `'Left side of comma operator is unused'` errors. Either use all destructured values or remove the unused ones.