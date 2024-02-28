import React from "react";
import { getCurrentUser } from "@/app/lib/data";
import AuthProvider from "./AuthProvider";
import { auth } from "@/auth";

interface ProvidersProps {
  children: React.ReactNode;
}

async function UserProvider({ children }: ProvidersProps) {
  let currentUser = undefined;
  const session = await auth();
  if (!!session?.user) {
    currentUser = await getCurrentUser();
  }

  return <AuthProvider currentUser={currentUser}>{children}</AuthProvider>;
}

export default UserProvider;
