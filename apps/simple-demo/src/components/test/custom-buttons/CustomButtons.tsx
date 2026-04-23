//components
import { Button } from '@simple-monorepo/ui';
import { CustomStackContent } from '../reuseables/custom-stack-content';
import { SectionHeading } from '../reuseables/section-heading';
//styles
import styles from './styles/custom-buttons.module.css';

export const CustomButtons = () => {
  return (
    <>
      <SectionHeading>Buttons</SectionHeading>
      <CustomStackContent>
        <Button
          className={styles.actionsContent}
          data-theme="dark"
          size="sm"
          type="button"
        >
          Primary
        </Button>
        <Button
          className={styles.actionsContent}
          size="md"
          type="button"
          variant="secondary"
        >
          Secondary
        </Button>
        <Button
          className={styles.actionsContent}
          size="md"
          type="button"
          variant="ghost"
          vars={{ '--btn-border': 'var(--color-primary)', '--btn-color': 'var(--color-primary)' }}
        >
          Token override
        </Button>
      </CustomStackContent>
    </>
  );
}
