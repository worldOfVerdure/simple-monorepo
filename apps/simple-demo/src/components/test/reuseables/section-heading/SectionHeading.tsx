import styles from './styles/section-heading.module.css';

export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={`${styles.sectionHeading} zero-margin`}>{children}</h2>;
};
