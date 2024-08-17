import { cn } from '@utils';
import { RotateCcw } from 'lucide-react';

type ErrorFallbackProsp = {
  error?: Error;
  resetErrorBoundary?: (...args: any[]) => void;
};

export const ErrorFallback = ({ error }: ErrorFallbackProsp) => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center"
      role="alert"
    >
      <h2 className="mb-[20px] text-[20px] font-medium">
        {error ? error.message : 'Ooops, something went wrong!'}
      </h2>

      <button
        className={cn(
          'inline-flex gap-2 rounded-full px-4 py-3',
          'bg-violet-400 text-left text-sm font-medium text-white',
          'transition-all duration-100 ease-out',
          'hover:bg-violet-300'
        )}
        onClick={() => window.location.reload()}
      >
        <RotateCcw size={20}/><span>Refresh</span>
      </button>
    </div>
  );
};
