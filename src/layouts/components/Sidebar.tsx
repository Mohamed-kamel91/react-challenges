import { NavLink } from 'react-router-dom';

import { navigation } from '../constants';
import { cn } from '@utils';

export const Sidebar = () => {
  return (
    <aside className="sticky top-[71px] col-span-1 row-span-1 max-h-[calc(100vh-71px)] overflow-auto pt-10">
      <nav className="h-full px-5">
        <ul>
          {navigation.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  cn(
                    'inline-block w-full rounded-full px-4 py-3',
                    'text-left text-sm font-medium text-neutral-500',
                    'transition-all duration-100 ease-out',
                    !isActive &&
                      'hover:bg-gray-light hover:text-neutral-800',
                    isActive &&
                      'bg-violet-100 pl-7 text-violet-800'
                  )
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
