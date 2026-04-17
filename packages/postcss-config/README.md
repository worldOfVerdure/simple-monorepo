# @simple-monorepo/postcss-config

Shared PostCSS configuration for apps in this monorepo.

## What This Package Does

This package centralizes PostCSS plugins so each app can reuse the same setup.

It configures:

- `@csstools/postcss-global-data`
- `postcss-custom-media`

## Custom Media Chain

Custom media definitions are not imported in component code. They are loaded through PostCSS.

1. The app imports this shared config:
   - `apps/simple-demo/postcss.config.mjs`
2. This package exports plugin config:
   - `packages/postcss-config/index.mjs`
3. `@csstools/postcss-global-data` loads:
   - `packages/design-system/src/custom-media.css`
4. `postcss-custom-media` expands any `@media (--bp-...)` rules at build time.

So the chain is:

`app postcss.config.mjs` -> `@simple-monorepo/postcss-config` -> `global-data files[]` -> `design-system/src/custom-media.css` -> `postcss-custom-media` transform

## Relevant Files

- `packages/postcss-config/index.mjs`
- `packages/design-system/src/custom-media.css`
- `apps/simple-demo/postcss.config.mjs`

## Example

If `custom-media.css` defines:

```css
@custom-media --bp-up-sm (min-width: 600px);
```

Then app CSS can use:

```css
@media (--bp-up-sm) {
  .card {
    padding: 2rem;
  }
}
```

During build, PostCSS resolves this to a standard media query.

## Notes

- No direct `import "custom-media.css"` is required in app TS/TSX files.
- Keep breakpoint aliases in `packages/design-system/src/custom-media.css` so all apps share one source of truth.
