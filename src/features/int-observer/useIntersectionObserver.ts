import { useEffect, useRef, useState } from 'react';

type State = {
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
};

type IntersectionObserverOptions = {
  once?: boolean;
  initialTrigger?: boolean;
  onChange?: (
    isIntersecting: boolean,
    entry: IntersectionObserverEntry,
  ) => void;
} & IntersectionObserverInit;

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
  once: false,
  initialTrigger: true,
};

export const useIntersectionObserver = <
  T extends Element = HTMLDivElement,
>(
  options: IntersectionObserverOptions = defaultOptions,
) => {
  const {
    rootMargin,
    root,
    threshold,
    once,
    initialTrigger,
    onChange,
  } = {
    ...defaultOptions,
    ...options,
  };

  const [state, setState] = useState<State>({
    isIntersecting: initialTrigger,
    entry: undefined,
  });

  // Target Ref
  const ref = useRef<T>(null);
  const callbackRef = useRef<IntersectionObserverOptions["onChange"]>();
  callbackRef.current = onChange;

  useEffect(() => {
    // Ensure we have a ref to observe
    if (!ref.current) return;

    // Ensure browser supports the Intersection Observer API
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const thresholds = Array.isArray(threshold)
          ? threshold
          : [threshold];

        entries.forEach((entry) => {
          const isIntersecting =
            entry.isIntersecting &&
            thresholds.some(
              (threshold) =>
                entry.intersectionRatio >= threshold,
            );

          // Update state
          setState({ isIntersecting, entry });

          // Execute the onchange callback
          callbackRef.current?.(entry.isIntersecting, entry);

          // Unobserve element if element is to intersect for the first time only
          if (isIntersecting && once) {
            console.log("unobserve");
            observer.unobserve(ref.current as Element);
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    // Observe the target element
    observer.observe(ref.current);
    console.log("observe");
    
    // Disconnect observer on unmount
    return () => {
      console.log('Disconnect');
      observer.disconnect();
    };
  }, [once, root, rootMargin, threshold]);

  return {
    ref,
    isIntersecting: state.isIntersecting,
    entry: state.entry,
    0: ref,
    1: state.isIntersecting,
    2: state.entry,
    length: 3,
    [Symbol.iterator]: function* () {
      yield* [ref, state.isIntersecting, state.entry];
    },
  };
};
