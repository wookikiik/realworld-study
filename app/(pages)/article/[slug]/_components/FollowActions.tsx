"use client";

import { Article } from "@/app/lib/definitions";

export default function Actions({ article }: ActionsProps) {
  return (
    <>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; Follow {article.author.username}&nbsp;
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp; Favorite Post&nbsp;
        <span className="counter">({article.favoritesCount})</span>
      </button>
      {/* <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-edit"></i> Edit Article
      </button>
      <button className="btn btn-sm btn-outline-danger">
        <i className="ion-trash-a"></i> Delete Article
      </button> */}
    </>
  );
}

type ActionsProps = {
  article: Article;
};
