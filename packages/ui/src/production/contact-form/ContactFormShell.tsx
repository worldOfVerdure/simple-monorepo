'use client';
//components
import { Button } from '../../primitives/button';
import {
  Fieldset,
  FormActions,
  FormField,
  FormFieldHeader,
  FormLabel,
  FormLegend,
  FormMessage,
  FormRoot
} from '../../elevated/form';
//custom types
import type {
  ContactFormMessages,
  FormBehaviorRulebook,
  FormRootProps,
  FormSlots,
  SharedInputControlProps,
  SharedTextareaControlProps
} from '../../elevated';
//react hooks & types
import {
  useState,
  type ComponentType,
  type ReactNode
} from 'react';

import { cn } from '../../lib/cn';


const namePattern = "^[A-Za-z ,.'\\-]+$";

export type ContactFormControlAdapter = {
  TextControl: ComponentType<SharedInputControlProps>;
  EmailControl: ComponentType<SharedInputControlProps>;
  TextareaControl: ComponentType<SharedTextareaControlProps>;
};

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactFormSubmitEvent = {
  currentTarget: HTMLFormElement;
  preventDefault: () => void;
};

export type ContactFormSubmitHandler = (args: {
  values: ContactFormValues;
  formData: FormData;
  event: ContactFormSubmitEvent;
}) => Promise<void> | void;

export type ContactFormShellClasses = FormSlots & {
  submit?: string;
  submitMessage?: string;
  submitMessageSuccess?: string;
  submitMessageError?: string;
  submitMessagePending?: string;
};

type ContactFormShellProps = Omit<
  FormRootProps,
  'children' | 'classes' | 'onSubmit'
> & {
  controls: ContactFormControlAdapter;
  classes?: ContactFormShellClasses;
  messages: ContactFormMessages;
  rulebook: FormBehaviorRulebook;
  showLegend?: boolean;
  legend?: ReactNode;
  onSubmit?: ContactFormSubmitHandler | null;
};

const toStringValue = (value: FormDataEntryValue | null) => (typeof value === 'string' ? value : '');

const buildValues = (formData: FormData): ContactFormValues => {
  return {
    name: toStringValue(formData.get('name')),
    email: toStringValue(formData.get('email')),
    message: toStringValue(formData.get('message'))
  };
};

export const ContactFormShell = ({
  controls,
  classes,
  messages,
  rulebook,
  showLegend = true,
  legend = 'Message Me',
  onSubmit,
  ...formRootProps
}: ContactFormShellProps) => {
    // Use only the classes prop for slot class names. No merging or defaults.
    const shellClasses: ContactFormShellClasses = {
      form: classes?.form,
      fieldset: classes?.fieldset,
      legend: classes?.legend,
      field: classes?.field,
      fieldHeader: classes?.fieldHeader,
      label: classes?.label,
      control: classes?.control,
      textarea: classes?.textarea,
      message: classes?.message,
      actions: classes?.actions,
      submit: classes?.submit,
      submitMessage: classes?.submitMessage,
      submitMessageSuccess: classes?.submitMessageSuccess,
      submitMessageError: classes?.submitMessageError,
      submitMessagePending: classes?.submitMessagePending,
    };
  const {
    validationMessages,
    submitLabel,
    pendingSubmitLabel,
    pendingMessage,
    successMessage,
    errorMessage
  } = messages;

  const [submitState, setSubmitState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  const submitMessageByState: Record<'pending' | 'success' | 'error', ReactNode> = {
    pending: pendingMessage,
    success: successMessage,
    error: errorMessage
  };

  const submitMessageClassName =
    submitState === 'pending'
      ? shellClasses.submitMessagePending
      : submitState === 'success'
        ? shellClasses.submitMessageSuccess
        : shellClasses.submitMessageError;

  const handleSubmit = async (event: ContactFormSubmitEvent) => {
    event.preventDefault();

    // Frontend-only mode: no serverless submit handler was provided.
    if (!onSubmit) {
      setSubmitState('idle');
      return;
    }

    setSubmitState('pending');

    const formData = new FormData(event.currentTarget);
    const values = buildValues(formData);

    try {
      await onSubmit({
        values,
        formData,
        event
      });
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <>
      <FormRoot
        {...formRootProps}
        classes={shellClasses}
        onSubmit={handleSubmit}
        rulebook={rulebook}
        validationMessages={validationMessages}
      >
        <Fieldset>
          {showLegend ? <FormLegend>{legend}</FormLegend> : null}

          <FormField name="name">
            <FormFieldHeader>
              <FormLabel fieldName="name">Name *</FormLabel>
              <FormMessage fieldName="name" />
            </FormFieldHeader>
            <controls.TextControl name="name" required autoComplete="name" pattern={namePattern} />
          </FormField>

          <FormField name="email">
            <FormFieldHeader>
              <FormLabel fieldName="email">Email *</FormLabel>
              <FormMessage fieldName="email" />
            </FormFieldHeader>
            <controls.EmailControl name="email" required autoComplete="email" />
          </FormField>

          <FormField name="message">
            <FormFieldHeader>
              <FormLabel fieldName="message">Message *</FormLabel>
              <FormMessage fieldName="message" />
            </FormFieldHeader>
            <controls.TextareaControl name="message" required minLength={10} />
          </FormField>
        </Fieldset>

        <FormActions>
          <Button className={shellClasses.submit} size="md" type="submit">
            {submitState === 'pending' ? pendingSubmitLabel : submitLabel}
          </Button>
        </FormActions>
        {submitState !== 'idle' ? (
          <p className={shellClasses.submitMessage + ' ' + submitMessageClassName}>
            {submitMessageByState[submitState]}
          </p>
        ) : null}
      </FormRoot>
    </>
  );
};
