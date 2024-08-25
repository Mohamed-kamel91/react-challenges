import { useEffect } from 'react';

import { useToggle } from '@hooks';

type UseSwitchOptions = {
  isChecked?: boolean;
  onSwitch?: () => void;
};

export const useSwitch = ({
  isChecked,
  onSwitch,
}: UseSwitchOptions) => {
  const [isToggled, toggle] = useToggle(isChecked);

  const handleSwitch = () => {
    if (!isChecked) {
      toggle();
    }
  };

  useEffect(() => {
    if (onSwitch) {
      onSwitch();
    }
  }, [toggle, onSwitch]);

  return {
    isToggled,
    handleSwitch,
  };
};
