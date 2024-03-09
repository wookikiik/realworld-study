import React, { createContext, useContext, useState } from 'react';
import type { UserAuthInfo } from './definitions';

const authContext = createContext<UserAuthInfo | null>;

interface ProvidersProps {
    children: React.ReactNode;
  }

export function MyProvider({ children }: ProvidersProps) {
  const [value, setValue] = useState("기본값");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}
