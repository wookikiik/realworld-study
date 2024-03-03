'use client';

export const ArticleFavoriteButton = () => {
  const handleClick = () => {};

  return (
    <button className="btn btn-sm btn-outline-primary" onClick={handleClick}>
      <i className="ion-heart"></i>
      &nbsp; Favorite Article <span className="counter">(29)</span>
    </button>
  );
};

export const ArticleEditButton = () => {
  const handleClick = () => {};

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={handleClick}>
      <i className="ion-edit"></i> Edit Article
    </button>
  );
};

export const ArticleDeleteButton = () => {
  const handleClick = () => {};

  return (
    <button className="btn btn-sm btn-outline-danger" onClick={handleClick}>
      <i className="ion-trash-a"></i> Delete Article
    </button>
  );
};
