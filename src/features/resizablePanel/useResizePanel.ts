import { useEffect, useRef, useState } from 'react';

export type useResizePanelOptions = {
  initialSize?: number;
  minW?: number;
  maxW?: number;
};

export const useResizePanel = (
  options: useResizePanelOptions
) => {
  const { initialSize = 300, minW = 200, maxW = 500 } = options;

  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const prevX = useRef<number>(0);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    prevX.current = e.clientX;
    setIsDragging(true);
  };

  useEffect(() => {
    const resize = (e: MouseEvent) => {
      if (!isDragging) return;

      const currentX = e.clientX;
      // Calculate how far the mouse has moved since the last position
      const deltaX = currentX - prevX.current;
      // Update the panel size based on the movement
      const newSize = size + deltaX;

      setSize(Math.max(minW, Math.min(newSize, maxW)));

      // Update prevX to the current mouse position for the next move
      prevX.current = currentX;
    };

    const stopResize = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);

    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    };
  }, [isDragging, size, minW, maxW]);

  // Persist resize cursor and disable user select during resizing
  useEffect(() => {
    const doc = document.documentElement;
    const styles = ['select-none', 'cursor-ew-resize'];

    if (isDragging) {
      doc.classList.add(...styles);
    } else {
      doc.classList.remove(...styles);
    }
  }, [isDragging]);

  return {
    panelRef,
    size,
    isDragging,
    handleDrag,
  };
};
