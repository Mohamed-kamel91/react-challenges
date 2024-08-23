import { useScroll } from '@hooks';
import { cn } from '@utils';
import { forwardRef, useEffect, useState } from 'react';

type ScrollProgressProps = {
  position?: React.CSSProperties['position'];
};

export const ScrollProgress = forwardRef<
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

export const useScrollProgress = <
  T extends HTMLElement = HTMLElement,
>(
  ref?: React.RefObject<T> | null
) => {
  const [progress, setProgress] = useState(0);

  const { scrollY } = useScroll(ref);

  useEffect(() => {
    const element =
      ref && 'current' in ref && ref.current
        ? ref.current
        : document.documentElement;

    const clientHeight = element.clientHeight;
    const scrollHeight = element.scrollHeight;

    const width =
      (scrollY / (scrollHeight - clientHeight)) * 100;

    setProgress(width);
  }, [ref, scrollY]);

  return progress;
};
