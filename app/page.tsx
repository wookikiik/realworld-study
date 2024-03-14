'use server';
import Home from "./ui/home";
// import { auth } from "@/auth";

export default async function Page() {
  // const session = await auth()
  // const isLoggedIn = session?.user ? true : false;
  return (
    <main>      
      <Home/>
    </main>
  );
}
