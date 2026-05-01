# ContactFormShell

## Required CSS Tokens

To ensure the `ContactFormShell` component is styled correctly and is themeable, your app or design system must define the following CSS custom properties (tokens):

### Form Surface

- `--color-form-surface`: The background color of the form container.
  - Example (light): `#ececec`
  - Example (dark): `#23272f`

### Border Radius

- `--radius-lg`: Used for the form's border radius.
- `--radius-md`: Used for the submit button's border radius.

### Spacing

- `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-5`: Used for form and button padding/gap.

### Typography

- `--font-family-body`: Font family for form text.
- `--font-size-2`: Font size for the submit button label.
- `--text-caption`, `--text-body`: Font sizes for messages and labels.

### Colors

- `--color-text`: Main text color.
- `--color-text-secondary`: Used for the submit button label.
- `--color-primary`: Used for focus/active states.
- `--color-error`, `--color-success`: Used for validation messages.
- `--color-border`: Used for input borders.
- `--color-surface`: Used for input backgrounds.

### Example: theme-base.css

```css
[data-base-theme="app"] {
  --color-form-surface: #ececec;
  --color-text: #222;
  --color-text-secondary: #666;
  --color-primary: #0f766e;
  --color-error: #9c1d1d;
  --color-success: #044d14;
  --color-border: #020024;
  --color-surface: #fff;
  --radius-lg: 1rem;
  --radius-md: 0.5rem;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 2rem;
  --space-5: 3rem;
  --font-family-body: system-ui, sans-serif;
  --font-size-2: 1rem;
  --text-caption: 0.875rem;
  --text-body: 1rem;
}
```

## Notes

- You can override these tokens in your light/dark theme files for custom theming.
- If a token is missing, the form may not render as intended.
- Always provide sensible defaults in your base theme.

---

**This file documents the required tokens for any app or theme using ContactFormShell.**
