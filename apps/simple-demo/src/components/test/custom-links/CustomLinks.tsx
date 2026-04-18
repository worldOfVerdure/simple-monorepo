//components
import { CustomStackContent } from '../reuseables/custom-stack-content';
import { Link } from '@simple-monorepo/ui';
import { SectionHeading } from '../reuseables/section-heading';
//styles
import styles from './styles/custom-links.module.css';

export const CustomLinks = () => {
  return (
    <>
      <SectionHeading>Links</SectionHeading>
      <CustomStackContent >
        <Link
          className={styles.actionsContent}
          href="https://nextjs.org/docs"
          variant="buttonPrimary"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>
        <Link
          className={styles.actionsContent}
          href="https://react.dev"
          variant="buttonSecondary"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </Link>
        <Link
          className={styles.actionsContent}
          href="https://www.typescriptlang.org/docs/"
          variant="buttonGhost"
          vars={{ '--link-border': 'var(--color-primary)', '--link-color': 'var(--color-primary)' }}
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </Link>
        <Link
          className={`${styles.actionsContent} ${styles.customLink}`}
          size="lg"
          href="https://www.radix-ui.com/docs/primitives/overview/introduction"
          target="_blank"
          rel="noopener noreferrer"
          variant="buttonGhost"
        >
          Radix
        </Link>
        <Link
          className={styles.actionsContent}
          href="https://github.com/css-modules/css-modules"
          variant="text"
          size="lg"
          vars={{ '--link-color': 'var(--color-text)', '--link-decoration': 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS
        </Link>
      </CustomStackContent>
    </>
  );
}
