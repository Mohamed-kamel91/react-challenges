import { usePaginationContext } from './pagination-context';
import { cn } from '@utils';

export const PaginationItems = () => {
  const {
    currentPage,
    siblingCount,
    totalPages,
    handleClickItem,
  } = usePaginationContext();

  const visibleItems = siblingCount * 2 + 1;
  
  // This solution is bad cause the logic will have to run on each iteration 
  const pageNumbers = Array.from(
    { length: Math.min(totalPages, visibleItems) },
    setPagination
  );

  function setPagination(_: any, i: number) {
    if (totalPages <= visibleItems) {
      return i + 1;
    }

    // Current page is in the early range
    if (currentPage < visibleItems) {
      return i + 1;
    }

    // Current page is the last page
    if (currentPage === totalPages) {
      return currentPage - (visibleItems - (i + 1));
    }

    // current page is more or equal visible items
    const remainingPages = totalPages - currentPage;

    if (remainingPages >= siblingCount) {
      return currentPage - siblingCount + i;
    }

    return (
      currentPage -
      (siblingCount + (siblingCount - remainingPages)) +
      i
    );
  }

  return (
    <ul className="flex items-center justify-center">
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <button
            className={cn(
              'flex items-center justify-center',
              'mx-[3px] h-7 min-w-7 px-1',
              'text-sm',
              'rounded-full',
              currentPage === pageNumber
                ? 'bg-gray'
                : 'bg-none hover:bg-gray-light'
            )}
            aria-label={`Page ${pageNumber}`}
            onClick={() => handleClickItem(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </ul>
  );
};

export const PaginationItem = () => {
  return <li>Pagination</li>;
};

export const PaginationLink = () => {
  return <div>Pagination</div>;
};
