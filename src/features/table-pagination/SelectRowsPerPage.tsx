import { cn } from '@utils';

type SelectRowsPerPageProps = {
  count: number;
  rows: number;
  rowsOptions?: number[];
  handleSelectRows: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export const SelectRowsPerPage = ({
  count,
  rows,
  rowsOptions = [10, 25, 50, 100],
  handleSelectRows,
}: SelectRowsPerPageProps) => {
  const options = Array.from(new Set(rowsOptions));

  return (
    <div className="group flex items-center gap-1">
      <p id="rows-selector-label" className="text-sm">
        Rows per page:
      </p>
      <select
        id="rows-selector"
        className={cn(
          'px-1 py-[2px]',
          'text-sm',
          'rounded-md border border-solid border-black-light',
          'hover:bg-gray focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-black',
          'transition-colors'
        )}
        tabIndex={0}
        value={rows}
        name="rowsPerPage"
        aria-labelledby="rows-selector-label"
        onChange={handleSelectRows}
      >
        {options.map((value) => (
          <option
            key={value}
            value={value === -1 ? count : value}
          >
            {value === -1 ? 'All' : value}
          </option>
        ))}
      </select>
    </div>
  );
};
