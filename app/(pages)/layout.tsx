import "@/app/ui/global.css";
import type { Metadata } from "next";
import ReactLink from "next/link";
import { Navigation, Footer } from "@/app/ui/components";
import { titillium_web } from "@/app/ui/fonts";
import { source_sans } from "../ui/fonts";
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
            <nav className="navbar navbar-light">
              <div className="container">
                <ReactLink
                  className={`${titillium_web.className} navbar-brand`}
                  href="/"
                >
                  conduit
                </ReactLink>
                <Navigation />
              </div>
            </nav>
            {children}
          </UserProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
