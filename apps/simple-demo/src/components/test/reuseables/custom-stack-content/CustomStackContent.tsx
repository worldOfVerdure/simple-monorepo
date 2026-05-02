//components
import { Stack } from '@simple-monorepo/ui';
//styles
import styles from './styles/custom-stack-content.module.css';

export const CustomStackContent = ({children}: {children: React.ReactNode}) => {
  return (
    <Stack as="article" className={styles.actions} direction="row" gap="var(--space-3)" wrap="wrap" >
      {children}
    </Stack>
  );
}
