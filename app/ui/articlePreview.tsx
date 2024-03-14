'use server';
import Image from "next/image";

export default async function ArticlePreview({articles}: any) {
    
    return (
        articles && articles.map((article: any, index: any) => {
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
                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                            <i className="ion-heart"></i> {article.favoritesCount}
                        </button>
                    </div>
                    <a href="/article/how-to-build-webapps-that-scale" className="preview-link">
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <span>Read more...</span>
                        <ul className="tag-list">
                            {article.tagList.map((tag: string, index: number) =>
                                <li className="tag-default tag-pill tag-outline" key={index}>{tag}</li>
                            )}

                        </ul>
                    </a>
                </div>
            )

        })
    )
}