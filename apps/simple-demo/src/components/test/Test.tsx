import styles from './styles/test.module.css';
import { Header } from '@/components/test/header';
import { CustomButtons } from '@/components/test/custom-buttons';
import { CustomLinks } from '@/components/test/custom-links';
import { UncontrolledForm } from '@/components/test/uncontrolled-form';
import { ControlledForm } from '@/components/test/controlled-form';

export const Test = () => {
  return (
    <section className={`${styles.test} grid items-center`}>
      <Header />
      <CustomButtons />
      <CustomLinks />
      <UncontrolledForm />
      <ControlledForm />
    </section>
  );
}
