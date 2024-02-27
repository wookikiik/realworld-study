import '@/app/ui/global.css';

import {source_sans} from './ui/fonts';
import {Navigation, Footer} from '@/app/ui/component';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${source_sans.className}`}>
        <main>
          <Navigation />
          {children}
          <Footer />
        </main>
        <Script async defer src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"></Script>
      </body>
    </html>
  );
}