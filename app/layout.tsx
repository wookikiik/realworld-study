import './styles/global.css';

import { AppHeader } from './ui/components/header/appHeader';
import { AppFooter } from './ui/components/footer/appFooter';
import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import Auth from './lib/providers/Auth';

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
      <body>
        <Auth>
          <AppHeader />
          {children}
          <AppFooter />
        </Auth>
      </body>
    </html>
  );
}
