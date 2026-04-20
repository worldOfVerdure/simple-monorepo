//metadata
import { metadata } from './metadata';
//styles
import '@simple-monorepo/design-system/src/reset.css';
import '@simple-monorepo/design-system/src/tokens.css';
import './styles/theme-light.css';
import '@simple-monorepo/design-system/src/base.css';
import './styles/app-base.css';
import '@simple-monorepo/design-system/src/utilities.css';

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
