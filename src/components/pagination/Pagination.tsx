import { PaginationProvider } from './pagination-context';

export type PaginationProps =
  React.HTMLAttributes<HTMLElement> & {
    count: number; // Total data items
    page?: number; // Active Page
    pageSize?: number; // Items per page
    siblingCount?: number;
    onPageChange: (newPage: number) => void;
  };

export const Pagination = ({
  count,
  page = 1,
  pageSize = 5,
  siblingCount = 2,
  onPageChange,
  children,
  ...props
}: PaginationProps) => {
  return (
    <PaginationProvider
      page={page}
      count={count}
      pageSize={pageSize}
      siblingCount={siblingCount}
      onPageChange={onPageChange}
    >
      <nav {...props}>{children}</nav>
    </PaginationProvider>
  );
};
