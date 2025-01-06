import React, { useCallback, useState } from 'react';

import { calcTotalPages } from '@components/pagination/utils';

export const usePaginationControls = (count: number) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const isLastPage = calcTotalPages(count, pageSize) === page;

  const handleChangePage = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const handlePageSize = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPageSize(+e.target.value);
      setPage(1);
    },
    []
  );

  return {
    page,
    pageSize,
    isLastPage,
    handleChangePage,
    handlePageSize,
  };
};
