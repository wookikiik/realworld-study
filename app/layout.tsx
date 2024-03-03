import './styles/global.css';

import { AppHeader } from './ui/components/header/appHeader';
import { AppFooter } from './ui/components/footer/appFooter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
