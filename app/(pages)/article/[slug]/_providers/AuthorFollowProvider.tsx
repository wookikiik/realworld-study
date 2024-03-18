"use client";

import { Author } from "@/app/lib/definitions";
import { useState, createContext, useContext, useEffect } from "react";

interface Context {
  authorName?: string;
  follow: boolean;
  onFollow: (author: string) => Promise<void>;
  onUnfollow: (author: string) => Promise<void>;
}

const AuthorContext = createContext<Context>({
  authorName: undefined,
  follow: false,
  onFollow: async () => {},
  onUnfollow: async () => {},
});

export default function AuthorFollowProvider({
  author,
  children,
}: AuthorProviderProps) {
  const [follow, setFollow] = useState(false);
  const { username, following } = author;

  useEffect(() => {
    setFollow(following);
  }, [following]);

  const onFollow = async (author: string) => {
    await fetch(`/api/follow/${author}`, { method: "POST" });
    setFollow(true);
  };

  const onUnfollow = async (author: string) => {
    await fetch(`/api/follow/${author}`, { method: "DELETE" });
    setFollow(false);
  };

  return (
    <AuthorContext.Provider
      value={{
        authorName: username,
        follow,
        onFollow,
        onUnfollow,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
}

export const useAuthorFollowState = () => {
  const { authorName, follow } = useContext(AuthorContext);
  return {
    authorName,
    follow,
  };
};

export const useAuthorFollowAction = () => {
  const { onFollow, onUnfollow } = useContext(AuthorContext);
  return {
    onFollow,
    onUnfollow,
  };
};

interface AuthorProviderProps {
  author: Author;
  children: React.ReactNode;
}
