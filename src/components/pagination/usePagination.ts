import { useCallback } from 'react';
import {
  calcTotalPages,
  validateCurrentPage,
  validatePageSize,
} from './utils';

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 5;

type PaginationOptions = {
  count: number;
  page?: number;
  pageSize?: number;
  onPageChange: (newPage: number) => void;
};

export const usePagination = ({
  count,
  page = DEFAULT_PAGE,
  pageSize = DEFAULT_SIZE,
  onPageChange,
}: PaginationOptions) => {
  const limit = validatePageSize(count, pageSize);
  const totalPages =
    calcTotalPages(count, limit) || DEFAULT_PAGE;
  const currentPage = validateCurrentPage(page, totalPages);

  const fromCount = (currentPage - 1) * limit + 1; // skip + 1
  const toCount = Math.min(currentPage * limit, count);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Handlers
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
    handlePrev,
    handleNext,
    handleFirst,
    handleLast,
    handleClickItem,
  };
};
