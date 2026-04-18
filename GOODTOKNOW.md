# GOOD TO KNOW

## tsup + CSS Modules discrepancy in this monorepo

### What happened

When consuming `@simple-monorepo/ui` from built `dist` output, primitive components rendered without
expected styles.

The built JS had CSS module maps as empty objects, for example:

- `button_default = {}`
- `stack_default = {}`
- `link_default = {}`

That means class names resolved to `undefined` at runtime.

### Why this is confusing

- JS and CSS files were emitted to `dist` successfully.
- Imports looked correct (`import { Button } from '@simple-monorepo/ui'`).
- But component class maps were not populated in the built runtime output.

### Chosen solution for this stack

Use source consumption in app development while keeping clean package imports.

In `apps/simple-demo/tsconfig.json`:

```json
"paths": {
  "@/*": ["./src/*"],
  "@simple-monorepo/ui": ["../../packages/ui/src/index.ts"]
}
```

This lets Next/Turbopack compile UI source directly, so CSS Modules work correctly.

### Practical workflow

- Day-to-day app work: keep importing from `@simple-monorepo/ui`.
- Keep the tsconfig path mapping above in the app.
- Run periodic package checks:
  - `npm run build -w @simple-monorepo/ui`

### Why this is acceptable here

This repository is a personal stack, not a published package pipeline.

The goal is stable local developer experience and reliable styling in Next.js app runtime.

### If moving to publish-grade packaging later

Revisit package bundling for CSS Modules in `ui` and validate dist runtime class maps before
removing source-consumption mapping.
