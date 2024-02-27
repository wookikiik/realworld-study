import './ui/global.css';
import {source_sans} from './ui/fonts';
import {Navigation, Footer} from '@/app/ui';

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
      </body>
    </html>
  );
}
