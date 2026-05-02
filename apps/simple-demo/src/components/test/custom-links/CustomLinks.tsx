//components
import { CustomStackContent } from '../reuseables/custom-stack-content';
import { Link } from '@simple-monorepo/ui';
import { SectionHeading } from '../reuseables/section-heading';
//styles
import styles from './styles/custom-links.module.css';
import { raiseStyles } from '@simple-monorepo/ui';
import { underlineStyles } from '@simple-monorepo/ui';

export const CustomLinks = () => {
  return (
    <>
      <SectionHeading>Links</SectionHeading>
      <CustomStackContent >
        <Link
          className={`${styles.actionsContent} ${raiseStyles.raiseOnHover}`}
          href="https://nextjs.org/docs"
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="primary"
        >
          Next.js
        </Link>
        <Link
          className={`${styles.actionsContent} ${raiseStyles.raiseOnHover}`}
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          variant="secondary"
        >
          React
        </Link>
        <Link
          className={`${styles.actionsContent} ${raiseStyles.raiseOnHover}`}
          href="https://www.typescriptlang.org/docs/"
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="ghost"
          vars={{ '--link-border': 'var(--color-primary)', '--link-color': 'var(--color-primary)' }}
        >
          TypeScript
        </Link>
        <Link
          className={`${styles.actionsContent} ${styles.customLink} ${raiseStyles.raiseOnHover}`}
          href="https://www.radix-ui.com/docs/primitives/overview/introduction"
          rel="noopener noreferrer"
          size="lg"
          target="_blank"
          variant="ghost"
        >
          Radix
        </Link>
        <Link
          classes={{ label: `${underlineStyles.label}` }}
          className={`${styles.actionsContent} ${underlineStyles.text}`}
          href="https://github.com/css-modules/css-modules"
          rel="noopener noreferrer"
          size="lg"
          target="_blank"
          vars={{ '--link-color': 'var(--color-text)', '--link-decoration': 'none' }}
        >
          CSS
        </Link>
      </CustomStackContent>
    </>
  );
}
