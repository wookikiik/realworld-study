'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export const FavoriteContext = createContext<{
  favorited: boolean;
  setFavorited: Dispatch<SetStateAction<boolean>>;
  favoritesCount: number;
  setFavoritesCount: Dispatch<SetStateAction<number>>;
}>({
  favorited: false,
  setFavorited: () => {},
  favoritesCount: 0,
  setFavoritesCount: () => {},
});

export const useFavorite = () => {
  const { favorited, setFavorited, favoritesCount, setFavoritesCount } =
    useContext(FavoriteContext);

  return {
    favorited,
    setFavorited,
    favoritesCount,
    setFavoritesCount,
  };
};

const FavoriteProvider = ({
  favorited: defaultFavorited,
  favoritesCount: defaultFavoritesCount,
  children,
}: {
  favorited: boolean;
  favoritesCount: number;
  children: React.ReactNode;
}) => {
  const [favorited, setFavorited] = useState<boolean>(defaultFavorited);
  const [favoritesCount, setFavoritesCount] = useState<number>(
    defaultFavoritesCount
  );

  return (
    <FavoriteContext.Provider
      value={{
        favorited,
        setFavorited,
        favoritesCount,
        setFavoritesCount,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
