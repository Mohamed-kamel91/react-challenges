import { useEffect, useState } from 'react';
import { useScroll } from '@hooks';

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
