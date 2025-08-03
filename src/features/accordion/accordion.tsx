import React from 'react';
import { AccordionProvider } from './accordion-context';
import { AccordionOptions } from './types';

type AccordionProps = AccordionOptions & {
  children: React.ReactNode;
};

export const Accordion = ({
  children,
  ...options
}: AccordionProps) => {
  return (
    <AccordionProvider {...options}>
      {children}
    </AccordionProvider>
  );
};
