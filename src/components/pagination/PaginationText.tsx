import { usePaginationContext } from './pagination-context';

type PaginationTextProps = {
  label?: string;
};

export const PaginationText = ({
  label,
}: PaginationTextProps) => {
  const { fromCount, toCount, count } = usePaginationContext();
  
  const paginationText = `${fromCount} - ${toCount} of ${count}`;

  return <p className="text-sm">
    {label && <span className='font-medium'>{label}</span>}
    {paginationText}
  </p>;
};
