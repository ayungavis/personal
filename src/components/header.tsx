import type { ComponentPropsWithoutRef } from 'react';

import { GithubIcon, LinkedinIcon, LogoMarkIcon } from '@/assets/icons';
import { SOCIAL_URL } from '@/constants/app-constant';
import { cn } from '@/utils/classnames';

type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn('flex h-20 w-full items-center justify-between', className)}
      {...props}
    >
      <LogoMarkIcon />
      <div className="flex items-center gap-3">
        <a
          className="inline-block cursor-pointer"
          href={SOCIAL_URL.GITHUB}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon className="text-foreground/80 hover:text-foreground transition-colors" />
        </a>
        <a
          className="inline-block cursor-pointer"
          href={SOCIAL_URL.LINKEDIN}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedinIcon className="text-foreground/80 hover:text-foreground transition-colors" />
        </a>
      </div>
    </header>
  );
};
