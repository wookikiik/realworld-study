'use server';
import Image from "next/image";
import HeartButton from "./heartButton";

export default async function ArticlePreview({ articlesParam }: {
    articlesParam:
    { articles: any, articlesCount: number }
}) {
    return (
        articlesParam.articlesCount > 0 ?
            articlesParam.articles.map((article: any, index: any) => {
                return (
                    <div className="article-preview" key={index}>
                        <div className="article-meta">
                            {/* <a href={`/profile/${article.author.username}`}>
                            <Image src={article.author.image} alt="" width={512} height={512} />
                        </a> */}
                            <div className="info">
                                <a href={`/profile/${article.author.username}`}
                                    className="author">{article.author.username}</a>
                                <span className="date">January 20th</span>
                            </div>
                            <HeartButton
                                slug={article.slug}
                                favoritesCount={article.favoritesCount}
                                isLiked={article.favorited}
                            />
                        </div>
                        <a href="/article/how-to-build-webapps-that-scale" className="preview-link">
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <span>Read more...</span>
                            <ul className="tag-list">
                                {
                                    article.tagList.map((tag: string, index: number) =>
                                        <li className="tag-default tag-pill tag-outline" key={index}>
                                            {tag}
                                        </li>
                                    )
                                }

                            </ul>
                        </a>
                    </div>
                )

            }) :
            <div className="article-preview">No articles are here... yet.</div>
    )
}