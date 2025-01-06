import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

import { PaginationProps } from './Pagination';
import { usePagination } from './usePagination';

type PaginationValue = {
  siblingCount: number;
  currentPage: number;
  totalPages: number;
  count: number;
  fromCount: number;
  toCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  paginationItems: number[];
  handlePrev: () => void;
  handleNext: () => void;
  handleFirst: () => void;
  handleLast: () => void;
  handleClickItem: (item: number) => void;
};

// Pagination context
const PaginationContext = createContext<PaginationValue | null>(
  null
);

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
    paginationItems,
    handlePrev,
    handleNext,
    handleFirst,
    handleLast,
    handleClickItem,
  } = usePagination({
    count,
    page,
    pageSize,
    siblingCount,
    onPageChange,
  });

  const contextValue = useMemo(
    () => ({
      count,
      siblingCount,
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
    }),
    [
      count,
      siblingCount,
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
    ]
  );

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
};
