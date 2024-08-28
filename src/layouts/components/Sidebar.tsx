import { NavLink } from 'react-router-dom';

import { cn } from '@utils';
import { navigation } from '@routes/constants';

export const Sidebar = () => {
  return (
    <aside className="h-full pt-10">
      <nav className="h-full px-5">
        <ul>
          {navigation.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  cn(
                    'flex w-full items-center gap-3 px-4 py-[14px]',
                    'rounded-full text-left text-sm font-medium text-neutral-500',
                    'transition-all duration-100 ease-out',
                    !isActive &&
                      'hover:bg-gray-light hover:text-neutral-800',
                    isActive && 'bg-violet pl-7 text-violet-dark'
                  )
                }
              >
                <Icon size={24} />
                <span className="grow">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
