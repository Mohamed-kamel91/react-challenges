import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

import { PaginationProps } from './Pagination';
import { usePagination } from './usePagination';

// Pagination context
const PaginationContext = createContext<{
  siblingCount: number;
  currentPage: number;
  totalPages: number;
  count: number;
  fromCount: number;
  toCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  handleFirst: () => void;
  handleLast: () => void;
  handleClickItem: (item: number) => void;
} | null>(null);

// Pagination hook
export const usePaginationContext = () => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error(
      'Component must be used within a PaginationProvider'
    );
  }

  return context;
};

// Context provider
type PaginationProviderProps = PaginationProps & {
  children: React.ReactNode;
};

export const PaginationProvider = ({
  count,
  page = 1,
  pageSize = 5,
  siblingCount = 2,
  onPageChange,
  children,
}: PaginationProviderProps) => {
  const {
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
  } = usePagination({ count, page, pageSize, onPageChange });

  const contextValue = useMemo(
    () => ({
      siblingCount,
      currentPage,
      totalPages,
      count,
      fromCount,
      toCount,
      isFirstPage,
      isLastPage,
      handlePrev,
      handleNext,
      handleFirst,
      handleLast,
      handleClickItem,
    }),
    [
      siblingCount,
      currentPage,
      totalPages,
      count,
      fromCount,
      toCount,
      isFirstPage,
      isLastPage,
      handlePrev,
      handleNext,
      handleFirst,
      handleLast,
      handleClickItem,
    ]
  );

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
};
