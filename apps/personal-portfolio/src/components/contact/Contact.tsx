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

    // Capture the form reference synchronously to avoid React event pooling issues
    const form = event.currentTarget;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Please wait 1 hour to send another message.');
        }
        throw new Error(data?.error || 'Request failed');
      }

      if (!data?.message) {
        // Defensive: API should always return a message on success
        throw new Error('No success message from server.');
      }

      if (form && typeof form.reset === 'function')
        form.reset();

    } catch (err) {
      let message = 'Failed to send message.';
      if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === 'string') {
        message = err;
      }
      throw new Error(message);
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
