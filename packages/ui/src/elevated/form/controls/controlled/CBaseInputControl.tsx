import * as Form from '@radix-ui/react-form';
import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../../../lib/cn';
import { useFormState, useFormTheme } from '../../context/formContext';
import { composeHandlers } from '../../helpers/composeHandlers';
import { getControlId, getMessageId } from '../../helpers/ids';
import { useValidationFlowStatus } from '../../helpers/state';
import { type SharedInputControlProps } from '../../helpers/types';
import { useControlValidationHandlers } from './useControlValidationHandlers';

export type CInputControlProps = SharedInputControlProps;

export function CBaseInputControl({
  className,
  name,
  type,
  onFocus,
  onBlur,
  onChange,
  onInvalid,
  'aria-describedby': ariaDescribedBy,
  id,
  ...props
}: CInputControlProps & { type: ComponentPropsWithoutRef<'input'>['type'] }) {
  const { classes } = useFormTheme();
  const { formId, errors } = useFormState();
  const fieldState = useValidationFlowStatus(name);
  const handlers = useControlValidationHandlers(name);
  const messageId = getMessageId(formId, name);

  return (
    <Form.Control asChild>
      <input
        aria-describedby={ariaDescribedBy ?? messageId}
        aria-invalid={errors[name] ? true : undefined}
        className={cn(classes?.control, className)}
        data-validation={fieldState}
        id={id ?? getControlId(formId, name)}
        name={name}
        onBlur={composeHandlers(handlers.onBlur, onBlur)}
        onChange={composeHandlers(handlers.onChange, onChange)}
        onFocus={composeHandlers(handlers.onFocus, onFocus)}
        onInvalid={composeHandlers(handlers.onInvalid, onInvalid)}
        type={type}
        {...props}
      />
    </Form.Control>
  );
}
