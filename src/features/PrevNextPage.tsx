import { Link, useLocation } from 'react-router-dom';

import { capitalizeFirst, cn } from '@utils';

type Route = {
  path: string;
  name: string;
};

type PrevNextPageProps<T extends Route> = {
  routes: T[];
};

export const PrevNextPage = <T extends Route>({
  routes,
}: PrevNextPageProps<T>) => {
  const { pathname } = useLocation();

  const currentRouteIndex = routes.findIndex((route) => {
    return pathname.slice(1) === route.path;
  });

  const prevRoute = routes[currentRouteIndex - 1];
  const nextRoute = routes[currentRouteIndex + 1];

  return (
    <div className="grid grid-cols-2 gap-3">
      {prevRoute && (
        <div className="col-start-1">
          <PageLink
            direction="previous"
            path={prevRoute.path}
            name={prevRoute.name}
          />
        </div>
      )}

      {nextRoute && (
        <div className="col-start-2">
          <PageLink
            direction="next"
            path={nextRoute.path}
            name={nextRoute.name}
            align="right"
          />
        </div>
      )}
    </div>
  );
};

type PageLinkProps = {
  direction: 'previous' | 'next';
  align?: 'left' | 'center' | 'right';
} & Route;

const PageLink = ({
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
        `text-${align}`
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
