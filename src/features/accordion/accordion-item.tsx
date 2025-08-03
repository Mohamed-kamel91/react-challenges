import { useId } from 'react';
import {
  AccordionItemProvider,
  useAccordionItem,
} from './accordion-item-context';
import { cn } from '@utils';
import { AccordionItemOptions } from './types';

export type AccordionItemProps =
  React.HTMLAttributes<HTMLDivElement> & AccordionItemOptions;

export const AccordionItem = ({
  disabled = false,
  defaultExpanded = false,
  children,
  ...props
}: AccordionItemProps) => {
  const id = useId();

  return (
    <AccordionItemProvider
      id={id}
      disabled={disabled}
      defaultExpanded={defaultExpanded}
    >
      <AccordionItemInner {...props}>
        {children}
      </AccordionItemInner>
    </AccordionItemProvider>
  );
};

const AccordionItemInner = ({
  className,
  children,
  ...props
}: AccordionItemProps) => {
  const { itemId } = useAccordionItem();
  return (
    <div
      className={cn('border-b', className)}
      id={itemId}
      {...props}
    >
      {children}
    </div>
  );
};
