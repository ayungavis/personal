import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/classnames';

type BackgroundPatternProps = ComponentPropsWithoutRef<'div'>;

export const BackgroundPattern = ({
  children,
  className,
  ...props
}: BackgroundPatternProps) => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <div
        style={{
          backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
          `,
          backgroundSize: '8px 8px, 32px 32px, 32px 32px',
        }}
        {...props}
        className={cn('absolute inset-0 z-0', className)}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
