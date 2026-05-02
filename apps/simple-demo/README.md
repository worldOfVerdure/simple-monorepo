# simple-demo

Demo Next.js app inside the simple-monorepo workspace.

Live site: https://simple-monorepo-gamma.vercel.app/

## What This App Is

`simple-demo` is the runnable app in `apps/simple-demo` that consumes shared workspace packages:

- `@simple-monorepo/ui` for reusable primitives and elevated form building blocks
- `@simple-monorepo/design-system` for base CSS, tokens, and global utilities

This app is where components are assembled and validated in a real Next.js runtime.

## Monorepo Context

This is not a standalone template folder. It is one app in a monorepo managed by npm workspaces and Turbo.

- Workspace root scripts (`simple-monorepo/package.json`) orchestrate tasks across apps and packages
- App-level scripts (`apps/simple-demo/package.json`) run only this app
- `apps/simple-demo/tsconfig.json` maps `@simple-monorepo/ui` to source for local development so Next.js compiles UI code directly

## Stack

- Next.js (App Router)
- React 19
- TypeScript (strict)
- CSS Modules
- Shared design tokens via `@simple-monorepo/design-system`

## Run

From monorepo root:

```bash
npm install
npm run dev -w @simple-monorepo/simple-demo
```

Or from this folder:

```bash
npm install
npm run dev
```

## Build And Health Checks

From monorepo root:

```bash
npm run build -w @simple-monorepo/ui
npm run build -w @simple-monorepo/simple-demo
npm run build
```

The final `npm run build` validates the full monorepo build graph through Turbo.

## Styling And Components

- Theme tokens live in `src/app/styles/theme-light.css`
- Demo composition lives in `src/components/test`
- Form behavior is rulebook-driven through `@simple-monorepo/ui` exports (`invalidFocusValid`, `idleInvalidRule`)

## Deployment Note

For Vercel monorepo deployment, set project root directory to:

`apps/simple-demo`
