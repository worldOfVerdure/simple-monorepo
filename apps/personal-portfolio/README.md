# personal-portfolio

A personal site for showcasing projects, experience, and a contact form.

Live site: https://www.andrewchupka.com/

## About

This app lives in `apps/personal-portfolio` inside the monorepo. It uses shared UI and styling packages from the workspace, but this is the main app that powers the live portfolio site.

If you are browsing the repo, this is the folder to focus on for portfolio pages, content, and contact behavior.

## Tech Used

- Next.js
- React
- TypeScript
- CSS Modules

## Local Development

From monorepo root:

```bash
npm install
npm run dev -w @simple-monorepo/personal-portfolio
```

Or run it directly from this folder:

```bash
npm install
npm run dev
```

## Build

From monorepo root:

```bash
npm run build -w @simple-monorepo/ui
npm run build -w @simple-monorepo/personal-portfolio
npm run build
```

The last command checks the full monorepo build.

## Project Structure Notes

- App routes and layout: `src/app`
- Reusable sections/components: `src/components`
- Theme files: `src/app/styles`
- Project card data: `src/components/projects/projects-data`

## Environment Variables (For Contact Form)

Add these when deploying:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `NEXT_PUBLIC_SITE_URL`

## Vercel Deploy Note

If deploying from the monorepo on Vercel, use this root directory:

`apps/personal-portfolio`
