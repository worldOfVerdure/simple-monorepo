import {
  CEmailControl,
  CTextControl,
  CTextareaControl,
  EmailControl,
  TextControl,
  TextareaControl,
  type ContactFormControlAdapter
} from '@simple-monorepo/ui';

export const controlledAdapter: ContactFormControlAdapter = {
  TextControl: CTextControl,
  EmailControl: CEmailControl,
  TextareaControl: CTextareaControl
};

export const uncontrolledAdapter: ContactFormControlAdapter = {
  TextControl,
  EmailControl,
  TextareaControl
};
