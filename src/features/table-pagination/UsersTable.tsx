import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/table';
import { TablePagination } from './TablePagination';

import { usePaginationControls } from '@hooks';

import data from './users.json';
import { getData } from './utils';
import { User } from './types';

const tableHeaders = [
  { label: 'Id' },
  { label: 'Name' },
  { label: 'Age' },
  { label: 'Ocupation' },
];

export const UsersTable = () => {
  const usersData = data as User[];
  const count = usersData.length;
  const hasUsers = count > 0;
  
  const { page, pageSize, handleChangePage, handlePageSize } =
    usePaginationControls(count);

  const emptyRows = Math.max(0, page * pageSize - count);

  // User set
  const users = getData<User>({
    data: usersData,
    page,
    limit: pageSize,
  });

  // Create one row for all the empty rows as a filler
  const fillerHeight =
    (205 / 5) * (pageSize - (count % pageSize));

  return (
    <Table className="min-h-[314px]">
      <TableHeader>
        <TableRow>
          {tableHeaders.map((header) => (
            <TableHead key={header.label}>
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {hasUsers ? (
          <>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.occupation}</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: fillerHeight }} />
            )}
          </>
        ) : (
          <TableRow className="!bg-transparent">
            <TableCell
              colSpan={tableHeaders.length}
              className="text-center"
            >
              No data available.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell
            className="p-5"
            colSpan={tableHeaders.length}
          >
            <TablePagination
              count={count}
              page={page}
              pageSize={pageSize}
              hasData={hasUsers}
              handleChangePage={handleChangePage}
              handlePageSize={handlePageSize}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
