# `acid-studio`

Sanity Studio for the Acid Systems content backend.

## Requirements

- pnpm workspace install from the repo root

## Configure

This Studio is configured via `sanity.cli.ts`:

- `projectId`: `nmhp3u9m`
- `dataset`: `production`

## Getting started

From the repo root:

```bash
pnpm install
pnpm --filter acid-studio dev
```

## Common commands

Run from the repo root:

```bash
# local studio dev server
pnpm --filter acid-studio dev

# build + deploy
pnpm --filter acid-studio build
pnpm --filter acid-studio deploy

# (optional) GraphQL API deployment
pnpm --filter acid-studio deploy-graphql
```

## Notes

- This app depends on `@repo/sanity` (workspace package) for shared Studio configuration/plugins.
