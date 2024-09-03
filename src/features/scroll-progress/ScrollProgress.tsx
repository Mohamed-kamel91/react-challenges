import React from 'react';

import { useScrollProgress } from './useScrollProgress';
import { cn } from '@utils';

type ScrollProgressProps = {
  position?: React.CSSProperties['position'];
};

export const ScrollProgress = React.forwardRef<
  HTMLElement,
  ScrollProgressProps
>(({ position = 'fixed' }, ref) => {
  const progress = useScrollProgress(
    ref as React.RefObject<HTMLElement> | null
  );

  const positionStyles =
    position === 'fixed'
      ? 'fixed left-0 top-0 z-[60]'
      : 'sticky left-0 top-0 z-auto';

  return (
    <div
      className={cn(positionStyles, 'h-1 bg-violet-400')}
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-roledescription="Page scroll progress bar"
    />
  );
});
