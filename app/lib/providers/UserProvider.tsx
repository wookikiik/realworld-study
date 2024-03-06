import React from "react";
import { getCurrentUser } from "@/app/lib/data";
import AuthProvider from "./AuthProvider";
import { auth } from "@/auth";
import { User } from "../definitions";

interface ProvidersProps {
  children: React.ReactNode;
}

async function UserProvider({ children }: ProvidersProps) {
  let currentUser: User | undefined = undefined;
  const session = await auth();
  if (!!session?.user) {
    currentUser = await getCurrentUser();
    delete currentUser.token;
  }

  return <AuthProvider currentUser={currentUser}>{children}</AuthProvider>;
}

export default UserProvider;
