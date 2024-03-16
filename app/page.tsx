'use server';
import Home from "./ui/home";
import { Suspense } from "react";
// import { auth } from "@/auth";

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
