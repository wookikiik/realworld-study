'use server';
import HeartButton from "./heartButton";
import Link from "next/link";
import MyImage from "./myImage";
import { MONTHS } from "../lib/definitions";

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
                            <Link href={`/profile/${article.author.username}`}>
                            <MyImage src={article.author.image} />
                        </Link> 
                            <div className="info">
                                <a href={`/profile/${article.author.username}`}
                                    className="author">{article.author.username}</a>
                                <span className="date">{MONTHS[new Date(article.createdAt).getMonth()]} {new Date(article.createdAt).getDate()}, {new Date(article.createdAt).getFullYear()}</span>
                            </div>
                            <HeartButton
                                slug={article.slug}
                                favoritesCount={article.favoritesCount}
                                isLiked={article.favorited}
                            />
                        </div>
                        <Link href={`/article/${article.slug}`} className="preview-link">
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
                        </Link>
                    </div>
                )

            }) :
            <div className="article-preview">No articles are here... yet.</div>
    )
}