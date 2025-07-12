import type { ComponentPropsWithoutRef } from 'react';

import { BackgroundPattern } from '@/components/background-pattern';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

type MainLayoutProps = ComponentPropsWithoutRef<'div'>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <BackgroundPattern>
      <div className="container mx-auto flex h-full min-h-dvh max-w-[720px] flex-col px-6 sm:px-0">
        <Header />
        {children}
        <Footer />
      </div>
    </BackgroundPattern>
  );
};
