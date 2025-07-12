// eslint-disable-next-line simple-import-sort/imports
import '@/styles/globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
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
        {/* Umami Analytics */}
        <Script
          defer
          data-website-id="0211a212-68e7-4619-aaf5-6a304214fbd2"
          src="https://cloud.umami.is/script.js"
          strategy="afterInteractive"
        />

        {/* // TODO: Implement dark theme later */}
        <ThemeProvider forcedTheme="light">
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>

        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
