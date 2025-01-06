import {
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
} from 'lucide-react';

import { usePaginationContext } from './pagination-context';
import { cn } from '@utils';

type paginationActionProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: JSX.Element;
  };

const PaginationAction = ({
  className,
  icon,
  disabled,
  ...props
}: paginationActionProps) => {
  const disabledStyles = disabled
    ? 'bg-none opacity-50'
    : 'opacity-100 hover:bg-gray';

  return (
    <button
      className={cn(
        'p-1',
        'rounded-full border border-black-light',
        'transition-colors',
        disabledStyles,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
};

const PaginationPrev = () => {
  const { isFirstPage, handlePrev } = usePaginationContext();

  return (
    <PaginationAction
      icon={<ChevronLeft className="icon-sm" />}
      disabled={isFirstPage}
      aria-label="Go to previous page"
      onClick={handlePrev}
    />
  );
};

const PaginationNext = () => {
  const { isLastPage, handleNext } = usePaginationContext();

  return (
    <PaginationAction
      icon={<ChevronRight className="icon-sm" />}
      disabled={isLastPage}
      aria-label="Go to next page"
      onClick={handleNext}
    />
  );
};

const PaginationFirst = () => {
  const { isFirstPage, handleFirst } = usePaginationContext();

  return (
    <PaginationAction
      icon={<ChevronFirst className="icon-sm" />}
      disabled={isFirstPage}
      aria-label="Go to first page"
      onClick={handleFirst}
    />
  );
};

const PaginationLast = () => {
  const { isLastPage, handleLast } = usePaginationContext();

  return (
    <PaginationAction
      icon={<ChevronLast className="icon-sm" />}
      disabled={isLastPage}
      aria-label="Go to last page"
      onClick={handleLast}
    />
  );
};

export {
  PaginationPrev,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
};
