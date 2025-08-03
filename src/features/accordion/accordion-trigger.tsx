import { useAccordion } from './accordion-context';
import { useAccordionItem } from './accordion-item-context';

import { cn } from '@utils';

type AccordionTriggerProps =
  React.HTMLAttributes<HTMLButtonElement> & {
    expandIcon?: JSX.Element;
  };

export const AccordionTrigger = ({
  expandIcon,
  children,
  ...props
}: AccordionTriggerProps) => {
  const { isExpanded, handleToggleItem } = useAccordion();
  const { itemId, contentId, triggerId, disabled } =
    useAccordionItem();

  const expanded = isExpanded(itemId);

  return (
    <button
      id={triggerId}
      className={cn(
        'group/trigger',
        'flex items-center justify-between gap-2',
        'w-full py-2',
        disabled && 'cursor-not-allowed opacity-50'
      )}
      type="button"
      aria-expanded={expanded}
      aria-controls={contentId}
      aria-disabled="false"
      onClick={() => !disabled && handleToggleItem(itemId)}
      {...props}
    >
      <span className="grow text-start">{children}</span>
      <span
        className={cn(
          'flex shrink-0 items-center justify-center',
          'h-8 w-8',
          'rounded-full bg-gray group-hover/trigger:bg-violet',
          'transition-transform duration-200',
          expanded ? 'rotate-180' : ''
        )}
      >
        {expandIcon}
      </span>
    </button>
  );
};
