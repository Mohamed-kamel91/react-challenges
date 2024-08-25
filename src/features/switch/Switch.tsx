import { useSwitch } from './useSwitch';
import { cn } from '@utils';

type Switchprops = {
  label?: string;
  color?: string;
  labelPosition?: 'left' | 'right';
  isChecked?: boolean;
  onIcon?: JSX.Element;
  offIcon?: JSX.Element;
  onSwitch?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Switch = ({
  id,
  label,
  color,
  labelPosition = 'left',
  isChecked = false,
  disabled,
  onIcon,
  offIcon,
  onSwitch,
  ...props
}: Switchprops) => {
  const { isToggled, handleSwitch } = useSwitch({
    isChecked,
    onSwitch,
  });

  const bgColor = isToggled
    ? disabled
      ? 'bg-violet-50'
      : 'bg-violet'
    : 'bg-gray';

  return (
    <div className="flex cursor-pointer items-center gap-2 p-1">
      {label && (
        <label
          className={cn(
            'cursor-default text-sm',
            labelPosition === 'left' ? 'order-1' : 'order-2'
          )}
          htmlFor={id}
        >
          <span id={`${id}-label`}>{label}</span>
        </label>
      )}

      <button
        className={cn(
          'relative h-6 w-10',
          `rounded-full ${bgColor}`,
          'transition-colors duration-250 ease-out',
          labelPosition === 'left' ? 'order-2' : 'order-1'
        )}
        id={id}
        type="button"
        role="switch"
        disabled={disabled}
        aria-checked={isToggled}
        aria-labelledby={label && `${id}-label`}
        onClick={handleSwitch}
        {...props}
      >
        <div
          className={cn(
            'absolute left-[2px] top-[2px] flex h-[20px] w-[20px] items-center justify-center',
            'rounded-full border-gray bg-white',
            'transition-all duration-250 ease-out',
            isToggled && 'translate-x-4'
          )}
        >
          {isToggled ? onIcon : offIcon}
        </div>
      </button>
    </div>
  );
};
