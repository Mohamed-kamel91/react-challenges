import { Link } from 'react-router-dom';

import { capitalizeFirst, cn } from '@utils';
import { Route } from './constants';

type PageLinkProps = {
  direction: 'previous' | 'next';
  align?: 'left' | 'center' | 'right';
} & Route;

export const PageLink = ({
  direction,
  align = 'left',
  name,
  path,
}: PageLinkProps) => {
  return (
    <Link
      className={cn(
        'flex flex-col px-4 py-3 transition-colors duration-300 ease-out',
        'rounded-[10px] border hover:border-violet-dark',
        {
          'text-left': align === 'left',
          'text-right': align === 'right',
          'text-center': align === 'center',
        }
      )}
      to={`/${path}`}
    >
      <span className="text-xs leading-5 text-gray-dark">
        {`${capitalizeFirst(direction)} page`}
      </span>

      <span className="text-sm font-medium leading-5 text-violet-dark">
        {name}
      </span>
    </Link>
  );
};
