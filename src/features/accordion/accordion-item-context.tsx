import { createContext, useContext, useMemo } from 'react';
import { AccordionItemOptions } from './types';

type ContextValue = Required<AccordionItemOptions> & {
  itemId: string;
  triggerId: string;
  contentId: string;
};

export const AccordionItemContext =
  createContext<ContextValue | null>(null);

type AccordionItemProviderProps =
  Required<AccordionItemOptions> & {
    id: string;
    children: React.ReactNode;
  };

// Provider
export const AccordionItemProvider = ({
  id,
  disabled,
  defaultExpanded,
  children,
}: AccordionItemProviderProps) => {
  const value = useMemo<ContextValue>(
    () => ({
      itemId: `accordion${id}item`,
      triggerId: `accordion${id}trigger`,
      contentId: `accordion${id}content`,
      disabled,
      defaultExpanded,
    }),
    [id]
  );

  return (
    <AccordionItemContext.Provider value={value}>
      {children}
    </AccordionItemContext.Provider>
  );
};

// Consumer
export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);

  if (context === null) {
    throw new Error(
      'Component must be used within a Accordion Item Provider'
    );
  }

  return context;
};
