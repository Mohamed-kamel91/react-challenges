import { useState } from 'react';
import { AccordionOptions } from './types';

export const useAccordionLogic = ({
  collapsible = false,
  multiple = false,
}: AccordionOptions) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    []
  );

  const isExpanded = (id: string) => expandedItems.includes(id);

  const handleToggleItem = (id: string) => {
    toggleItem(id);
  };

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const isOpen = prev.includes(id);

      if (isOpen) {
        return collapsible
          ? prev.filter((item) => item !== id)
          : prev;
      } else {
        return multiple ? [...prev, id] : [id];
      }
    });
  };

  const expandItem = (id: string) => {
    setExpandedItems((prev) => {
      const isOpen = prev.includes(id);

      if (!isOpen) {
        return multiple ? [...prev, id] : [id];
      }

      return prev;
    });
  };

  const collapseItem = (id: string) => {
    if (collapsible) {
      setExpandedItems((prev) => {
        const isOpen = prev.includes(id);
        return isOpen
          ? prev.filter((item) => item !== id)
          : prev;
      });
    }
  };

  return {
    expandedItems,
    isExpanded,
    expandItem,
    collapseItem,
    handleToggleItem,
  };
};
