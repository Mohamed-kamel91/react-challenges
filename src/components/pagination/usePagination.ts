import { useCallback, useMemo } from 'react';
import {
  calcTotalPages,
  validateCurrentPage,
  validatePageSize,
} from './utils';

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 5;
const DEFAULT_SIBLING_COUNT = 2;

type PaginationOptions = {
  count: number;
  page?: number;
  pageSize?: number;
  siblingCount?: number;
  onPageChange: (newPage: number) => void;
};

export const usePagination = ({
  count,
  page = DEFAULT_PAGE,
  pageSize = DEFAULT_SIZE,
  siblingCount = DEFAULT_SIBLING_COUNT,
  onPageChange,
}: PaginationOptions) => {
  const limit = validatePageSize(pageSize, count);
  const totalPages = calcTotalPages(count, limit);
  const currentPage = validateCurrentPage(page, totalPages);

  const fromCount =
    totalPages && currentPage && (currentPage - 1) * limit + 1; // skip + 1
  const toCount =
    totalPages &&
    currentPage &&
    Math.min(currentPage * limit || count, count);

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage === totalPages;

  const paginationItems = useMemo(
    () => getPagination(),
    [currentPage, totalPages, siblingCount]
  );

  function getPagination() {
    const visibleItems = siblingCount * 2 + 1;
    const halfRange = Math.floor(visibleItems / 2);

    let startPage = Math.max(currentPage - halfRange, 1);
    let endPage = startPage + visibleItems - 1; // the -1 is to exclude the last number in the range

    // Case 1: End page in the range exceeds total pages
    // case 2: Total pages is less than visible items
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - visibleItems + 1, 1); // the +1 is to exclude the firt number in the range
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  // Action Handlers
  const handlePrev = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [currentPage]);

  const handleNext = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [currentPage]);

  const handleFirst = useCallback(() => {
    onPageChange(1);
  }, []);

  const handleLast = useCallback(() => {
    onPageChange(totalPages);
  }, [totalPages]);

  const handleClickItem = useCallback((item: number) => {
    onPageChange(item);
  }, []);

  return {
    currentPage,
    totalPages,
    fromCount,
    toCount,
    isFirstPage,
    isLastPage,
    paginationItems,
    handlePrev,
    handleNext,
    handleFirst,
    handleLast,
    handleClickItem,
  };
};
