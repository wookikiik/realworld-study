import Home from "./ui/home";
import { sourceSerif4 } from "./ui/fonts";
import { SessionProvider } from "next-auth/react";

export default function Page() {
  return (
    <main>      
      <Home />
    </main>
  );
}
