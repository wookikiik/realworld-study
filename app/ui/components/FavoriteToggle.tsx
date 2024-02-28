"use client";

import { Article } from "@/app/lib/definitions";
import IconButton from "./IconButton";

export default function FavoriteToggle({ article }: FavoriteToggleProps) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    console.log("Article is favorited?", article.favorited);
  }

  return (
    <IconButton
      icon="ion-heart"
      cssStyle="btn btn-outline-primary btn-sm pull-xs-right"
      onClick={handleClick}
    >
      {" "}
      {article.favoritesCount}
    </IconButton>
  );
}

type FavoriteToggleProps = {
  article: Article;
};
