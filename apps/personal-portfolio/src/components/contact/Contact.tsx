'use client';
//components & rulebook
import {
  ContactFormShell,
  EmailControl,
  TextControl,
  TextareaControl,
  contactFormMessages,
  type ContactFormControlAdapter,
  type ContactFormSubmitHandler,
  invalidFocusValid
} from '@simple-monorepo/ui';
//styles
import { contactFormStyles } from '@simple-monorepo/ui';
import styles from './styles/contact.module.css';

export const Contact = () => {
  const controls: ContactFormControlAdapter = {
    TextControl,
    EmailControl,
    TextareaControl
  };

  const handleSubmit: ContactFormSubmitHandler = async ({ values, event }) => {
    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      event.currentTarget.reset();
    } catch {
      throw new Error('Failed to send message.');
    }
  };

  return (
    <section className={`${styles.contactContainer} full-width sectionContainer zero-margin`} id="contact">
       <span
         aria-hidden="true"
         className="navSectionSentinel"
         data-nav-active="#contact"
         data-nav-theme="dark"
         data-nav-sentinel
      />
      <h2 className="sectionH2">Contact Me</h2>

      <ContactFormShell
        classes={contactFormStyles}
        controls={controls}
        legend="Contact Me"
        messages={contactFormMessages}
        onSubmit={handleSubmit}
        rulebook={invalidFocusValid}
        showLegend={false}
      />
    </section>
  );
}
