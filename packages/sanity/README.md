# `@repo/sanity`

Shared Sanity Studio configuration and dependencies for this monorepo.

This package is consumed by `apps/studio` (and can be imported by other apps that need shared Sanity utilities).

## What’s inside

- Sanity Studio dependencies (`sanity`, `@sanity/*`)
- Common Studio plugins (media, tags, singleton management, references, youtube input, etc.)

## Usage

In a workspace package (example from the Studio app), depend on it as:

```json
{
  "dependencies": {
    "@repo/sanity": "workspace:*"
  }
}
```

Then import from the export entrypoint:

```ts
import {} from '@repo/sanity'
```

## Development

From the repo root:

```bash
pnpm install
pnpm --filter @repo/sanity lint
pnpm --filter @repo/sanity build
```

Note: this package currently only defines an export entry (`./src/index.ts`). If you add build steps, ensure the exported entry stays valid.
