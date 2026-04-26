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
  const themeValue: FormThemeContextValue = { classes };

  return (
    <FormThemeContext value={themeValue}>
      <Form.Root className={cn(classes?.form, className)} style={{ ...tokens, ...style }} {...props}>
        {children}
      </Form.Root>
    </FormThemeContext>
  );
}
