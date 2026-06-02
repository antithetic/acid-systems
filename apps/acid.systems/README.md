# `acid.systems`

Astro site for **Acid Systems**, deployed with the Vercel adapter and wired up to Sanity for content.

## Requirements

- Node.js `>= 22.12.0`
- pnpm (repo is pinned via the root `packageManager`)

## Getting started

From the repo root:

```bash
pnpm install
pnpm --filter acid.systems dev
```

## Common commands

Run from the repo root:

```bash
# dev server
pnpm --filter acid.systems dev

# production build + local preview
pnpm --filter acid.systems build
pnpm --filter acid.systems preview
```

## Tech stack

- Astro (`astro`)
- React integration (`@astrojs/react`)
- Vercel adapter (`@astrojs/vercel`)
- Sanity (`@sanity/client`, `@sanity/astro`)

## Related packages

- `@repo/sanity`: shared Sanity configuration/plugins used by the Studio (and can be used by this site too)
