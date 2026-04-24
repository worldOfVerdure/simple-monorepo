'use client';
//components
import { ContactFormDemoShell, uncontrolledAdapter } from '../reuseables';

export const UncontrolledForm = () => {
  return <ContactFormDemoShell heading="Uncontrolled Forms" controls={uncontrolledAdapter} />;
};
