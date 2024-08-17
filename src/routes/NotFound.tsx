import { cn } from '@utils';
import { House } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        className={cn(
          'inline-flex gap-2 rounded-full px-4 py-3 mt-4',
          'bg-violet-400 text-left text-sm font-medium text-white',
          'transition-all duration-100 ease-out',
          'hover:bg-violet-300'
        )}
        to="/"
        replace
      >
        <House size={20} />
        <span>Go to Home</span>
      </Link>
    </div>
  );
};
