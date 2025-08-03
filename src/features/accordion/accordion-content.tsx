import { useEffect, useLayoutEffect, useRef } from 'react';
import { useAccordion } from './accordion-context';
import { useAccordionItem } from './accordion-item-context';

import { cn } from '@utils';

type AccordionContentProps =
  React.HTMLAttributes<HTMLDivElement>;

export const AccordionContent = ({
  className,
  children,
}: AccordionContentProps) => {
  const { isExpanded, expandItem } = useAccordion();
  const { itemId, triggerId, contentId, defaultExpanded } =
    useAccordionItem();

  const expanded = isExpanded(itemId);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    if (expanded) {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      ref.current.style.opacity = '1';
      ref.current.style.paddingBottom = '16px';
    } else {
      ref.current.style.height = '0';
      ref.current.style.opacity = '0';
      ref.current.style.paddingBottom = '0';
    }
  }, [expanded]);

  useEffect(() => {
    if (defaultExpanded) {
      expandItem(itemId);
    }
  }, []);

  return (
    <div
      ref={ref}
      id={contentId}
      className={cn(
        'box-content overflow-hidden',
        '[transition:height_0.15s_ease-out,opacity_0.1s_ease-out]',
        className
      )}
      role="region"
      aria-hidden={!expanded}
      aria-labelledby={triggerId}
    >
      {children}
    </div>
  );
};
