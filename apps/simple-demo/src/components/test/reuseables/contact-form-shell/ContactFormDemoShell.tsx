'use client';
//components & types
import {
  contactFormMessages,
  ContactFormShell,
  idleInvalidRule,
  invalidFocusValid,
  type ContactFormControlAdapter,
  type ContactFormShellClasses,
  type FormBehaviorRulebook
} from '@simple-monorepo/ui';
import { SectionHeading } from '../section-heading';
//react hooks and types
import { useId, useState, type ReactNode } from 'react';
//styles
import styles from './styles/contact-form-demo-shell.module.css';

type ContactFormDemoShellClasses = ContactFormShellClasses & {
  rulebookSwitcher?: string;
  rulebookLabel?: string;
  rulebookSelect?: string;
};

type ContactFormDemoShellProps = {
  heading: ReactNode;
  controls: ContactFormControlAdapter;
  classes?: ContactFormDemoShellClasses;
  rulebookOptions?: FormBehaviorRulebook[];
};

const mergeClassNames = (...classNames: Array<string | undefined>) =>
  classNames.filter(Boolean).join(' ');

export const ContactFormDemoShell = ({
  heading,
  controls,
  classes,
  rulebookOptions = [invalidFocusValid, idleInvalidRule]
}: ContactFormDemoShellProps) => {
  const rulebookSelectId = useId() + '-rulebook-select';
  const initialRulebookName = rulebookOptions[0]?.rulebookName ?? '';
  const [rulebookName, setRulebookName] = useState(initialRulebookName);

  const activeRulebook =
    rulebookOptions.find((option) => option.rulebookName === rulebookName) ?? rulebookOptions[0];

  const shellClasses: ContactFormShellClasses = {
    form: mergeClassNames(styles.form, classes?.form),
    fieldset: mergeClassNames(styles.fieldset, classes?.fieldset),
    legend: mergeClassNames(styles.legend, classes?.legend),
    field: mergeClassNames(styles.field, classes?.field),
    fieldHeader: mergeClassNames(styles.fieldHeader, classes?.fieldHeader),
    label: mergeClassNames(styles.label, classes?.label),
    control: mergeClassNames(styles.control, classes?.control),
    textarea: mergeClassNames(styles.textarea, classes?.textarea),
    message: mergeClassNames(styles.message, classes?.message),
    actions: mergeClassNames(styles.actions, classes?.actions),
    submit: mergeClassNames(styles.submit, classes?.submit),
    submitMessage: classes?.submitMessage,
    submitMessageSuccess: classes?.submitMessageSuccess,
    submitMessageError: classes?.submitMessageError,
    submitMessagePending: classes?.submitMessagePending
  };

  return (
    <>
      <SectionHeading>{heading}</SectionHeading>

      {rulebookOptions.length > 1 ? (
        <div className={mergeClassNames(styles.rulebookSwitcher, classes?.rulebookSwitcher)}>
          <label
            className={mergeClassNames(styles.rulebookLabel, classes?.rulebookLabel)}
            htmlFor={rulebookSelectId}
          >
            Rulebook
          </label>
          <select
            className={mergeClassNames(styles.rulebookSelect, classes?.rulebookSelect)}
            id={rulebookSelectId}
            onChange={(event) => setRulebookName(event.target.value)}
            value={rulebookName}
          >
            {rulebookOptions.map((rulebook) => (
              <option key={rulebook.rulebookName} value={rulebook.rulebookName}>
                ({rulebook.rulebookName})
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <ContactFormShell
        controls={controls}
        classes={shellClasses}
        rulebook={activeRulebook}
        messages={contactFormMessages}
      />
    </>
  );
};
