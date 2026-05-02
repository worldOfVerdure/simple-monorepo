//components
import { Button } from '@simple-monorepo/ui';
import { CustomStackContent } from '../reuseables/custom-stack-content';
import { SectionHeading } from '../reuseables/section-heading';
//styles
import { raiseStyles } from '@simple-monorepo/ui';
import styles from './styles/custom-buttons.module.css';

export const CustomButtons = () => {
  const BUTTON_STYLES = `${styles.actionsContent} ${raiseStyles.raiseOnHover}`;
  return (
    <>
      <SectionHeading>Buttons</SectionHeading>
      <CustomStackContent>
        <Button
          className={BUTTON_STYLES}
          data-theme="dark"
          size="sm"
          type="button"
        >
          Primary
        </Button>
        <Button
          className={BUTTON_STYLES}
          size="md"
          type="button"
          variant="secondary"
        >
          Secondary
        </Button>
        <Button
          className={BUTTON_STYLES}
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
