//components
import { ControlledForm } from '@/components/test/controlled-form';
import { CustomButtons } from '@/components/test/custom-buttons';
import { CustomLinks } from '@/components/test/custom-links';
import { Header } from '@/components/test/header';
import { UncontrolledForm } from '@/components/test/uncontrolled-form';
//styles
import styles from './styles/test.module.css';

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
