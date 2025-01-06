import { usePaginationContext } from './pagination-context';
import { cn } from '@utils';

export const PaginationItems = () => {
  const { paginationItems } = usePaginationContext();

  return (
    <ul className="flex items-center justify-center">
      {paginationItems.map((item) => (
        <PaginationItem key={item}>
          <PaginationButton paginationItem={item}>
            {item}
          </PaginationButton>
        </PaginationItem>
      ))}
    </ul>
  );
};

type PaginationItemProps =
  React.HTMLAttributes<HTMLLIElement> & {};

export const PaginationItem = ({
  className,
  children,
  ...props
}: PaginationItemProps) => {
  return (
    <li className={cn(className)} {...props}>
      {children}
    </li>
  );
};

export const PaginationLink = () => {
  return <div>Pagination</div>;
};

type PaginationButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    paginationItem: number;
  };

export const PaginationButton = ({
  paginationItem,
  children,
  ...props
}: PaginationButtonProps) => {
  const { currentPage, handleClickItem } =
    usePaginationContext();

  return (
    <button
      className={cn(
        'flex items-center justify-center',
        'mx-[3px] h-7 min-w-7 px-1',
        'text-sm',
        'rounded-full',
        currentPage === paginationItem
          ? 'bg-gray'
          : 'bg-none hover:bg-gray-light'
      )}
      aria-label={`Page ${paginationItem}`}
      onClick={() => handleClickItem(paginationItem)}
      {...props}
    >
      {children}
    </button>
  );
};
