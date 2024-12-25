import { useLocation } from 'react-router-dom';

import { PageLink } from './pageLink';
import { Route } from './constants';

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
