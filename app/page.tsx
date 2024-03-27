'use server';
import Home from "./ui/home";

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;    
  },  
}) {  
  return (
    <main>
        <Home searchParams={searchParams}/>
    </main>
  );
}
