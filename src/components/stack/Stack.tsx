import { cn } from '@utils';
import React from 'react';

export type StackProps = {
  direction?: 'row' | 'col';
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  align?: 'stretch' | 'start' | 'center' | 'end' | 'baseline';
  wrap?: 'wrap' | 'reverse' | 'nowrap';
  gap?: number | string;
} & React.HTMLAttributes<HTMLDivElement>;

const alignClasses: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

const wrapClasses: Record<string, string> = {
  wrap: 'flex-wrap',
  reverse: 'flex-wrap-reverse',
  nowrap: 'flex-nowrap',
};

export const Stack = React.forwardRef<
  HTMLDivElement,
  StackProps
>(
  (
    {
      className = '',
      direction = 'row',
      justify = 'start',
      align = 'stretch',
      wrap = 'nowrap',
      gap = 1,
      children, 
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          direction === 'col' && 'flex-col',
          justify && `justify-${justify}`,
          align && alignClasses[align],
          wrap && wrapClasses[wrap],
          className
        )}
        style={{ gap: `${gap}px` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
