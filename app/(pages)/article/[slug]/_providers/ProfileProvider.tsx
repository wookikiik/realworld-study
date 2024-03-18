"use client";

import { Profile } from "@/app/lib/definitions";

export default function ProfileProvider({
  profile,
  children,
}: ProfileProviderProps) {
  return <>{children}</>;
}

interface ProfileProviderProps {
  profile: Profile;
  children: React.ReactNode;
}
