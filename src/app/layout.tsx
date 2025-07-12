import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import type { CSSProperties, ReactNode } from 'react';

import { MainLayout } from '@/components/layout/main-layout';
import { APP_CONSTANT } from '@/constants/app-constant';
import { inter } from '@/fonts';

export const viewport: Viewport = {
  themeColor: APP_CONSTANT.THEME_COLOR,
};

export const metadata: Metadata = {
  title: APP_CONSTANT.TITLE,
  description: APP_CONSTANT.DESCRIPTION,
  metadataBase: new URL(APP_CONSTANT.URL),
  openGraph: {
    title: APP_CONSTANT.TITLE,
    description: APP_CONSTANT.DESCRIPTION,
    url: APP_CONSTANT.URL,
    siteName: APP_CONSTANT.TITLE,
  },
  twitter: {
    card: 'summary_large_image',
    site: APP_CONSTANT.TWITTER_USERNAME,
    creator: APP_CONSTANT.TWITTER_USERNAME,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      style={
        {
          '--font-inter': inter.style.fontFamily,
        } as CSSProperties
      }
    >
      <body>
        {/* // TODO: Implement dark theme later */}
        <ThemeProvider forcedTheme="light">
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
