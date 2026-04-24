'use client';
//components
import { ContactFormDemoShell, controlledAdapter } from '../reuseables';

export const ControlledForm = () => {
  return <ContactFormDemoShell heading="Controlled Forms" controls={controlledAdapter} />;
};
