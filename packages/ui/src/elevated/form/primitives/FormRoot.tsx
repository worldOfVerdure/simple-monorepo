//!Important note: “touched” means “this field has entered validation flow,” not strictly “user
//!blurred it.”
'use client';

import * as Form from '@radix-ui/react-form';
import { useId, useState } from 'react';
import { cn } from '../../../lib/cn';
import {
  FormStateContext,
  type FormStateContextValue,
  FormThemeContext,
  type FormThemeContextValue
} from '../context/formContext';
import type { FormErrors, FormRootProps, FormTouchedFields } from '../helpers/types';

export function FormRoot({
  className,
  classes,
  tokens,
  style,
  rulebook,
  validationMessages,
  children,
  ...props
}: FormRootProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touchedFields, setTouchedFields] = useState<FormTouchedFields>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const formId = useId().replace(/:/g, '');
  const stateValue: FormStateContextValue = {
    formId,
    focusedField,
    touchedFields,
    errors,
    validationMessages,
    rulebook,
    setFocusedField,
    setTouchedWrapper: (fieldName, touched) => {
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
    setErrorWrapper: (fieldName, message) => {
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

  const themeValue: FormThemeContextValue = { classes };

  return (
    <FormThemeContext value={themeValue}>
      <FormStateContext value={stateValue}>
        <Form.Root className={cn(classes?.form, className)} style={{ ...tokens, ...style }} {...props}>
          {children}
        </Form.Root>
      </FormStateContext>
    </FormThemeContext>
  );
}
