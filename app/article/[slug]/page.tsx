import { getArticle, getComments } from "@/app/data";
import { sourceSerif4 } from "../../ui/fonts"
import Image from 'next/image';
import Link from "next/link";
import MyImage from "@/app/ui/myImage";
import { CommentType, MONTHS } from "@/app/lib/definitions";
import { auth } from "@/auth";
import FollowButton from "@/app/ui/followButton";
import EditProfileButton from "@/app/ui/editProfileButton";
import FavoriteButton from "@/app/ui/favoriteButton";
import DeleteButton from "@/app/ui/deletebutton";
import CommentForm from "@/app/ui/commentForm";

export default async function Page({ params, searchParams }: {
    params: {
        slug: string,
    },
    searchParams: {
        query?: string,
        page?: string,
    }

}) {
    const data = await getArticle(params.slug);
    const article = data?.article;
    const author = article.author;
    const articleDate = new Date(article?.createdAt);
    const session = await auth();
    const isMyArticle = session?.user?.name === author.username

    const comments = await getComments(params.slug);

    return (
        <div className={`${sourceSerif4} article-page`}>
            <div className="banner">
                <div className="container">
                    <h1>{article?.title}</h1>

                    <div className="article-meta">
                        <Link href={`/profile/${author?.username}`}>
                            <MyImage src={article.author?.image} />
                        </Link>
                        <div className="info">
                            <Link href={`/profile/${author?.username}`}
                                className="author">{author.username}</Link>
                            <span className="date">
                                {MONTHS[articleDate?.getMonth()]} {articleDate?.getDate()}, {articleDate?.getFullYear()}</span>
                        </div>
                        {
                            isMyArticle ?
                                <>
                                    <EditProfileButton />
                                    <DeleteButton />
                                </>
                                :
                                <FollowButton name={author.username} isfollowing={author.following} />
                        }
                        &nbsp;&nbsp;
                        <FavoriteButton />
                    </div>
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <p className={`${sourceSerif4.className}`}>
                            {article.body}
                        </p>
                        <ul className="tag-list">
                            {article.tagList.map((tag: string, index: number) => {
                                return (
                                    <li
                                        key={index}
                                        className="tag-default tag-pill tag-outline">
                                        {tag}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="article-actions">
                    <div className="article-meta">
                        <Link href="profile.html">
                            <MyImage src={article.author?.image} />
                        </Link>
                        <div className="info">
                            <Link href="" className="author">{author.username}</Link>
                            <span className="date"> {MONTHS[articleDate?.getMonth()]} {articleDate?.getDate()}, {articleDate?.getFullYear()}</span>
                        </div>

                        {
                            isMyArticle ?
                                <>
                                    <EditProfileButton />
                                    <DeleteButton />
                                </>
                                :
                                <FollowButton name={author.username} isfollowing={author.following} />
                        }
                        &nbsp;&nbsp;
                        <FavoriteButton />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <CommentForm slug={params.slug} img={author.image} />
                        {comments.comments.map((comment: CommentType, index: any) => {
                            return (
                                <div className="card" key={index}>
                                    <div className="card-block">
                                        <p className="card-text">
                                            {comment.body}
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <Link href="/profile/author" className="comment-author">
                                            <MyImage src={comment.author.image} className="comment-author-img" />
                                        </Link>
                                        &nbsp;
                                        <Link href={`/profile/${comment.author.image}`} className="comment-author">{comment.author.username}</Link>
                                        <span className="date-posted"> {MONTHS[new Date(comment.createdAt).getMonth()]} {new Date(comment.createdAt).getDate()}, {new Date(comment.createdAt).getFullYear()}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}