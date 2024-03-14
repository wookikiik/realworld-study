import '../../styles/skeleton.css';

export const ArticlesSkeleton = () => {
  return (
    <>
      <ArticleItemSkeleton />
      <ArticleItemSkeleton />
    </>
  );
};

export const ArticleItemSkeleton = () => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <div className="skeleton-avatar-info-button">
          <div className="skeleton-avatar-info">
            <div className="skeleton-avatar"></div>
            <div className="info">
              <div className="skeleton-author"></div>
              <div className="skeleton-date"></div>
            </div>
          </div>
          <div className="skeleton-button"></div>
        </div>
      </div>
      <div className="preview-link">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-read-more"></div>
        <div className="tag-list-container">
          <div className="tag-list">
            <div className="skeleton-tag tag-default tag-pill tag-outline"></div>
            <div className="skeleton-tag tag-default tag-pill tag-outline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
