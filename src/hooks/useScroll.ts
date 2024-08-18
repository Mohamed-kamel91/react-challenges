import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState([
    window.scrollX,
    window.scrollY,
  ]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll([window.scrollX, window.scrollY]);
    });
  }, []);

  return {
    scrollX: scroll[0],
    scrollY: scroll[1],
  };
};
