//components
import { Link, Stack } from '@simple-monorepo/ui';
//icons
import { ChevronDownIcon } from '@radix-ui/react-icons';
//styles
import styles from './styles/hero.module.css';

export const Hero = () => {
  return (
    <section className={`${styles.heroContainer} full-width`} data-theme="dark" id="home">
      <span
        aria-hidden="true"
        className={`${styles.navThemeSentinel} ${styles.navThemeSentinelTop}`}
        data-nav-active="#home"
        data-nav-theme="light"
        data-nav-sentinel
      />
      <span
        aria-hidden="true"
        className={`${styles.navThemeSentinel} ${styles.navThemeSentinelBright}`}
        data-nav-theme="dark"
        data-nav-sentinel
      />
      <Stack className={`${styles.heroStack} full-width`} >
        <h1 className={`${styles.heroH1} font-header text-center`}>
          I&apos;m <span className={styles.heroH1Name}>Andrew Chupka</span>
        </h1>
        <h2 className={`${styles.heroH2} font-header text-center`}>I&apos;m a Fullstack Developer</h2>
        <Link
          classes={{ label: styles.heroLinkLabel }}
          className={styles.heroLink}
          href="#projects"
          size="lg"
          variant="ghost"
        >
          View My Work
          <ChevronDownIcon height={20} width={20} />
        </Link>
      </Stack>
    </section>
  );
}
