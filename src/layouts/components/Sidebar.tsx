import { NavLink } from 'react-router-dom';

import { cn } from '@utils';
import { navigation } from '@routes/constants';

export const Sidebar = () => {
  return (
    <aside className="h-full pt-10">
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
                    isActive && 'bg-violet pl-7 text-violet-dark'
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
