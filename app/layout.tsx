import './global.css';

import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { AppFooter } from './ui/components/footer/AppFooter';
import { AppHeader } from './ui/components/header/AppHeader';
import Providers from './ui/providers/Providers';

export const metadata: Metadata = {
  title: {
    default: 'Conduit',
    template: '%s - Conduit',
  },
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Providers>
          <AppHeader />
          {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
