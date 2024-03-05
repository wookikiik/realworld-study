import "@/app/ui/global.css";
import type { Metadata } from "next";

import { source_sans } from "../ui/fonts";
import { Navigation, Footer } from "@/app/ui/components";
import Script from "next/script";
import UserProvider from "../lib/providers/UserProvider";

export const metadata: Metadata = {
  title: {
    default: "Conduit",
    template: "%s - Conduit",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${source_sans.variable}`}>
        <main>
          <UserProvider>
            <Navigation />
            {children}
          </UserProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
