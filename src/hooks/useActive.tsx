import { useCallback, useState } from 'react';

export const useActive = (intialActive?: string) => {
  const [active, setActive] = useState(intialActive);

  const handleActive = useCallback((target: string) => {
    setActive(target);
  }, []);

  return {
    active,
    handleActive,
  };
};
