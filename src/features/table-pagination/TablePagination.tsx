import {
  Pagination,
  PaginationNext,
  PaginationPrev,
  PaginationText,
  PaginationFirst,
  PaginationLast,
  PaginationItems,
} from '@components/pagination';
import { Stack } from '@components/stack';
import { SelectRowsPerPage } from './SelectRowsPerPage';

type TablePaginationProps = {
  count: number;
  page: number;
  pageSize: number;
  hasData: boolean;
  handleChangePage: (newPage: number) => void;
  handlePageSize: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export const TablePagination = ({
  count,
  page,
  pageSize,
  hasData,
  handleChangePage,
  handlePageSize,
}: TablePaginationProps) => {
  return (
    <Stack justify="between" wrap="wrap" gap={12}>
      <Pagination
        page={page}
        count={count}
        pageSize={pageSize}
        siblingCount={2}
        onPageChange={handleChangePage}
      >
        <Stack align="center" gap={12} wrap="wrap">
          <Stack justify="center" align="center" gap={6}>
            <PaginationFirst />
            <PaginationPrev />
            {hasData ? <PaginationItems /> : null}
            <PaginationNext />
            <PaginationLast />
          </Stack>
          <PaginationText />
        </Stack>
      </Pagination>

      <SelectRowsPerPage
        count={count}
        rows={pageSize}
        rowsOptions={[5, 10, 15, 20, -1]}
        isDisabled={!hasData}
        handleSelectRows={handlePageSize}
      />
    </Stack>
  );
};
