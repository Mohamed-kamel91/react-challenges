import { createContext, useContext, useMemo } from 'react';

import { useAccordionLogic } from './useAccordionLogic';
import { AccordionOptions } from './types';

type ContextValue = ReturnType<typeof useAccordionLogic>;

export const AccordionContext =
  createContext<ContextValue | null>(null);

type AccordionProviderProps = AccordionOptions & {
  children: React.ReactNode;
};

// Provider
export const AccordionProvider = ({
  children,
  ...options
}: AccordionProviderProps) => {
  const {
    expandedItems,
    isExpanded,
    collapseItem,
    expandItem,
    handleToggleItem,
  } = useAccordionLogic(options);

  const value = useMemo<ContextValue>(
    () => ({
      expandedItems,
      collapseItem,
      expandItem,
      isExpanded,
      handleToggleItem,
    }),
    [expandedItems, isExpanded, handleToggleItem]
  );

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

// Consumer
export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (context === null) {
    throw new Error(
      'Component must be used within a Accordion Provider'
    );
  }

  return context;
};
