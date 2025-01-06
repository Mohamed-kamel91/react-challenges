import { cn } from '@utils';
import React from 'react';

type TableProps = React.HTMLAttributes<HTMLTableElement>;
type TableHeaderProps =
  React.HTMLAttributes<HTMLTableSectionElement>;
type TableBodyProps =
  React.HTMLAttributes<HTMLTableSectionElement>;
type TableFooterProps =
  React.HTMLAttributes<HTMLTableSectionElement>;
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
type TableHeadProps =
  React.TdHTMLAttributes<HTMLTableCellElement>;
type TableCellProps =
  React.TdHTMLAttributes<HTMLTableCellElement>;
type TableCaptionProps =
  React.TdHTMLAttributes<HTMLTableCaptionElement>;

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative',
          'rounded-xl border border-violet-200'
        )}
      >
        <table
          ref={ref}
          className={cn(
            'w-full',
            'border-collapse overflow-hidden text-left',
            className
          )}
          {...props}
        >
          {children}
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, children, ...props }, ref) => {
  return (
    <thead ref={ref} {...props}>
      {children}
    </thead>
  );
});

TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(({ className, children, ...props }, ref) => {
  return (
    <tbody
      ref={ref}
      className={cn(
        '[&>tr:nth-child(odd)]:bg-violet',
        className
      )}
      {...props}
    >
      {children}
    </tbody>
  );
});

TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ className, children, ...props }, ref) => {
  return (
    <tfoot
      className="[&>tr]:bg-transparent [&>tr]:last:border-b-0"
      ref={ref}
      {...props}
    >
      {children}
    </tfoot>
  );
});

TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  TableRowProps
>(({ className, children, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn('border-b border-b-violet-200', className)}
    {...props}
  >
    {children}
  </tr>
));

TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  TableHeadProps
>(({ className, children, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'p-2',
      'overflow-hidden overflow-ellipsis whitespace-nowrap',
      className
    )}
    {...props}
  >
    {children}
  </th>
));

TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  TableCellProps
>(({ className, children, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'max-w-0 p-2',
      'overflow-hidden overflow-ellipsis whitespace-nowrap',
      className
    )}
    {...props}
  >
    {children}
  </td>
));

TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(({ className, children, ...props }, ref) => (
  <caption ref={ref} {...props}>
    {children}
  </caption>
));

TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
