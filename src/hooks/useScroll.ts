import { useCallback, useEffect, useState } from 'react';

const IS_SERVER = typeof window === 'undefined';

export const useScroll = <T extends HTMLElement = HTMLElement>(
  ref?: React.RefObject<T> | null
) => {
  const [scroll, setScroll] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  const getScrollXY = useCallback(() => {
    if (ref?.current) {
      return {
        scrollX: ref.current.scrollLeft,
        scrollY: ref.current.scrollTop,
      };
    }

    return {
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };
  }, [ref]);

  useEffect(() => {
    if (IS_SERVER) {
      return;
    }

    // Initialize scroll
    setScroll(getScrollXY());

    const element = ref?.current || window;

    const handleScroll = () => {
      setScroll(getScrollXY());
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [ref, getScrollXY]);

  return scroll;
};
