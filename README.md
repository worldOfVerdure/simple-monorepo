# simple-monorepo

Welcome to the **simple-monorepo**! This repository is a modern, full-stack monorepo designed for scalable web development, rapid prototyping, and robust production deployment.

---

## 🗂️ Monorepo Structure

```
.
├── apps/
│   ├── personal-portfolio/   # Next.js app: personal portfolio site
│   └── simple-demo/          # Next.js app: demo playground
├── packages/
│   ├── design-system/        # Design tokens, base CSS, and utilities
│   ├── postcss-config/       # Shared PostCSS config
│   └── ui/                   # Reusable React UI components (design system)
├── package.json              # Monorepo root config (workspaces, scripts)
├── tsconfig.base.json        # Shared TypeScript config
├── turbo.json                # Turborepo build pipeline config
└── GOODTOKNOW.md             # Extra tips and troubleshooting
```

---

## 🚀 What This Monorepo Offers

- **Multiple Next.js Apps:**
  - `personal-portfolio`: A real-world portfolio site, using the shared UI library and design system.
  - `simple-demo`: A playground for testing and demoing UI components in isolation.

- **Reusable UI Library:**
  - `packages/ui`: A production-grade React component library, including forms, buttons, layout primitives, and more. Built for composability and accessibility.

- **Design System:**
  - `packages/design-system`: Centralized design tokens (colors, spacing, typography), CSS utilities, and base styles for consistent theming across all apps.

- **Shared Tooling:**
  - `packages/postcss-config`: Shared PostCSS configuration for consistent CSS processing.
  - Centralized TypeScript and TurboRepo configs for fast builds and type safety.

- **Modern Monorepo Tooling:**
  - Uses [Turborepo](https://turbo.build/) for fast, incremental builds and caching.
  - [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) for dependency management.

---

## 🧭 How to Navigate

- **Apps:**
  - Go to `apps/personal-portfolio` to see a real-world Next.js app using the shared UI library.
  - Go to `apps/simple-demo` for a minimal Next.js app to test and demo components.

- **UI Library:**
  - Explore `packages/ui/src/` for all reusable React components.
  - Components are organized by domain (e.g., `contact-form`, `primitives`, `elevated`).
  - Each component is fully typed and designed for easy integration.

- **Design System:**
  - Check `packages/design-system/` for CSS tokens, base styles, and utility classes.

- **Shared Configs:**
  - Root-level `package.json`, `tsconfig.base.json`, and `turbo.json` define workspace-wide scripts, TypeScript settings, and build pipelines.

- **Troubleshooting & Tips:**
  - See `GOODTOKNOW.md` for solutions to common issues and advanced tips.

---

## 📝 Notes for Hiring Managers

- **Component Reuse:**
  - Demonstrates how to build and consume a design system and UI library across multiple apps.
- **Type Safety:**
  - TypeScript is used throughout, with strict settings and shared configs.
- **Scalability:**
  - The structure supports adding more apps or packages with minimal friction.
- **Modern Tooling:**
  - Uses Turborepo, npm workspaces, and PostCSS for a best-in-class developer experience.
- **Accessibility & Best Practices:**
  - UI components are built with accessibility and composability in mind.
- **Real-World Patterns:**
  - Includes real-world features like serverless API routes, form validation, and theming.

---

## 📦 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run all apps in dev mode:**
   ```sh
   npm run dev
   ```
3. **Build all packages and apps:**
   ```sh
   npm run build
   ```
4. **Run tests (if available):**
   ```sh
   npm test
   ```

---

## 🤝 Contributing

- Fork the repo and open a PR for any improvements or bug fixes.
- Please follow the existing code style and structure.

---

## 📬 Questions?

Feel free to reach out or open an issue if you have questions about the codebase or want to discuss improvements!

---

**Thank you for reviewing this monorepo!**
