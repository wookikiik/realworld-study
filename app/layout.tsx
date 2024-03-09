'use client';

import "./global.css";
import Footer from "./ui/footer";
import Header from "./ui/header";
import { sourceSans3 } from "./ui/fonts";
import Providers from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${sourceSans3.className} sans-serif`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
