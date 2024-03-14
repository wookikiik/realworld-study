'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export const FollowContext = createContext<{
  follow: boolean;
  setFollow: Dispatch<SetStateAction<boolean>>;
}>({
  follow: false,
  setFollow: () => {},
});

export const useFollow = () => {
  const { follow, setFollow } = useContext(FollowContext);

  return {
    follow,
    setFollow,
  };
};

const FollowProvider = ({
  follow: defaultFollow,
  children,
}: {
  follow: boolean;
  children: React.ReactNode;
}) => {
  const [follow, setFollow] = useState<boolean>(defaultFollow);
  return (
    <FollowContext.Provider
      value={{
        follow,
        setFollow,
      }}
    >
      {children}
    </FollowContext.Provider>
  );
};

export default FollowProvider;
