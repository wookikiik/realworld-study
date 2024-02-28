"use client";
import { createContext, useContext } from "react";
import { User } from "@/app/lib/definitions";

const AuthContext = createContext<User | undefined>(undefined);

export default function AuthProvider({
  currentUser,
  children,
}: {
  currentUser: User | undefined;
  children: React.ReactNode;
}) {
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  const user = useContext(AuthContext);
  return {
    user,
    isLogined: !!user,
  };
};
