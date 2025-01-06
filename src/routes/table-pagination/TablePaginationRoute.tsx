import { ContentLayout } from '@layouts';
import { UsersTable } from '@features/table-pagination/UsersTable';

export const TablePaginationRoute = () => {
  return (
    <ContentLayout title="Table Pagination">
      <UsersTable />
    </ContentLayout>
  );
};
