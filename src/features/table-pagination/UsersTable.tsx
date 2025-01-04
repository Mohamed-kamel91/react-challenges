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

import usersData from './users.json';

const tableHeaders = [
  { label: 'Id' },
  { label: 'Name' },
  { label: 'Age' },
  { label: 'Ocupation' },
];

export const UsersTable = () => {
  const count = usersData.length;

  const { page, rows, handleChangePage, handleChangeRows } =
    usePaginationControls(count);

  const emptyRows = Math.max(0, page * rows - count);
  const fromRow = (page - 1) * rows;
  const toRow = page * rows;

  // Users data to display
  const users = usersData.slice(fromRow, toRow);

  // Create one row for all the empty rows as a filler
  const fillerHeight = (205 / 5) * (rows - (count % rows));

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
              pageSize={rows}
              handleChangePage={handleChangePage}
              handleChangeRows={handleChangeRows}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
