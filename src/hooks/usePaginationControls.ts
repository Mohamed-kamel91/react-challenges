import React, { useCallback, useState } from 'react';

import { calcTotalPages } from '@components/pagination/utils';

export const usePaginationControls = (count: number) => {
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(5);

  const isLastPage = calcTotalPages(count, rows) === page;

  const handleChangePage = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRows = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRows(+e.target.value);
      setPage(1);
    },
    []
  );

  return {
    rows,
    page,
    isLastPage,
    handleChangeRows,
    handleChangePage,
  };
};
