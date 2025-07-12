import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/classnames';

type FooterProps = ComponentPropsWithoutRef<'footer'>;

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      className={cn('flex w-full flex-col items-start pb-6', className)}
      {...props}
    >
      <p className="text-foreground/70 hover:text-foreground text-sm text-balance">
        * this website is still under development—thanks for stopping by! 🎉
      </p>
    </footer>
  );
};
