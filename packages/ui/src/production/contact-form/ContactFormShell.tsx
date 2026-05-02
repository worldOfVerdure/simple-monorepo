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
  FormRoot,
  RedAsterisk
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
  useId,
  type ComponentType,
  type ReactNode
} from 'react';
import { FormStateContext } from '../../elevated/form/context/formContext';

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
  submitLabel?: string;
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
  // Form state (moved up from FormRoot)
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const formId = useId().replace(/:/g, '');

  // Submit state
  const [submitState, setSubmitState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [lastError, setLastError] = useState<string | null>(null);

  // Context value
  const stateValue = {
    formId,
    focusedField,
    touchedFields,
    errors,
    validationMessages: messages.validationMessages,
    rulebook,
    setFocusedField,
    setTouchedWrapper: (fieldName: string, touched: boolean) => {
      setTouchedFields((previous) => {
        if (previous[fieldName] === touched) {
          return previous;
        }
        return {
          ...previous,
          [fieldName]: touched
        };
      });
    },
    setErrorWrapper: (fieldName: string, message: string | null) => {
      setErrors((previous) => {
        if (previous[fieldName] === message) {
          return previous;
        }
        return {
          ...previous,
          [fieldName]: message
        };
      });
    }
  };

  // Slot classes
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
    submitLabel: classes?.submitLabel,
    submitMessage: classes?.submitMessage,
    submitMessageSuccess: classes?.submitMessageSuccess,
    submitMessageError: classes?.submitMessageError,
    submitMessagePending: classes?.submitMessagePending,
  };
  
  const {
    submitLabel,
    pendingSubmitLabel,
    pendingMessage,
    successMessage,
    errorMessage,
    rateLimitMessage
  } = messages;

  const submitMessageByState: Record<'pending' | 'success' | 'error', ReactNode> = {
    pending: pendingMessage,
    success: successMessage,
    error: lastError === 'rate-limit' ? rateLimitMessage : errorMessage
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
    setLastError(null);

    const formData = new FormData(event.currentTarget);
    const values = buildValues(formData);

    try {
      await onSubmit({
        values,
        formData,
        event
      });
      setSubmitState('success');
      // Reset touched state for all fields after successful submit
      stateValue.setTouchedWrapper('name', false);
      stateValue.setTouchedWrapper('email', false);
      stateValue.setTouchedWrapper('message', false);
    } catch (err) {
      // Detect rate limit error by message
      if (err instanceof Error && err.message === 'Please wait 1 hour to send another message.') {
        setLastError('rate-limit');
      } else {
        setLastError(null);
      }
      setSubmitState('error');
    }
  };

  return (
    <FormStateContext.Provider value={stateValue}>
      <FormRoot
        {...formRootProps}
        classes={shellClasses}
        onSubmit={handleSubmit}
        rulebook={rulebook}
        validationMessages={messages.validationMessages}
      >
        <Fieldset>
          {showLegend ? <FormLegend>{legend}</FormLegend> : null}

          <FormField name="name">
            <FormFieldHeader>
              <FormLabel fieldName="name">Name <RedAsterisk /></FormLabel>
              <FormMessage fieldName="name" />
            </FormFieldHeader>
            <controls.TextControl name="name" required autoComplete="name" pattern={namePattern} />
          </FormField>

          <FormField name="email">
            <FormFieldHeader>
              <FormLabel fieldName="email">Email <RedAsterisk /></FormLabel>
              <FormMessage fieldName="email" />
            </FormFieldHeader>
            <controls.EmailControl name="email" required autoComplete="email" />
          </FormField>

          <FormField name="message">
            <FormFieldHeader>
              <FormLabel fieldName="message">Message <RedAsterisk /></FormLabel>
              <FormMessage fieldName="message" />
            </FormFieldHeader>
            <controls.TextareaControl name="message" required minLength={10} />
          </FormField>
        </Fieldset>

        <FormActions>
          <Button
            classes={{ label: shellClasses.submitLabel }}
            className={shellClasses.submit}
            data-theme="dark"
            type="submit"
            variant="none"
          >
            {submitState === 'pending' ? pendingSubmitLabel : submitLabel}
          </Button>
        </FormActions>
        {submitState !== 'idle' ? (
          <p className={shellClasses.submitMessage + ' ' + submitMessageClassName}>
            {submitMessageByState[submitState]}
          </p>
        ) : null}
      </FormRoot>
    </FormStateContext.Provider>
  );
};
