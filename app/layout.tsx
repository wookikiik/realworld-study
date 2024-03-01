import "./global.css";
import Footer from "./ui/footer";
import Header from "./ui/header";
import { sourceSans3 } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} sans-serif`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
