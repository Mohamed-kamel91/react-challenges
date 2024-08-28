import {
  useResizePanel,
  useResizePanelOptions,
} from './useResizePanel';
import { cn } from '@utils';

type ResizablePanelProps = {
  children: React.ReactNode;
} & useResizePanelOptions;

export const ResizablePanel = ({
  initialSize = 300,
  minW = 200,
  maxW = 500,
  children,
}: ResizablePanelProps) => {
  const { panelRef, size, isDragging, handleDrag } =
    useResizePanel({ initialSize, minW, maxW });

  return (
    <div
      ref={panelRef}
      className="relative h-full bg-gray"
      style={{ width: size }}
    >
      {children}

      <div
        className={cn(
          'absolute -right-[4px] top-0 h-full w-[6px] cursor-ew-resize',
          'bg-transparent hover:bg-violet',
          'transition-colors delay-200 duration-300 ease-out',
          isDragging && 'bg-violet'
        )}
        onMouseDown={handleDrag}
      />
    </div>
  );
};
