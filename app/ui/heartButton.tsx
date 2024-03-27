'use client';
import { useEffect, useState } from "react"
import { unFavoriteAction, favoriteAction } from "../lib/actions";

export default function HeartButton({ slug, favoritesCount, isLiked }:
    { slug: string, favoritesCount: number, isLiked: boolean }) {
        const [likeState, setLikeState] = useState(false);

        useEffect(() => {
            setLikeState(isLiked);
        }, [isLiked])

    const handleClick = async () => {
        const res = await (likeState ? unFavoriteAction(slug) : favoriteAction(slug));
        setLikeState(res?.article?.favorited)
    }

    return (
        <button
            className="btn btn-outline-primary btn-sm pull-xs-right"
            onClick={handleClick}>
            <i className="ion-heart"></i>  {favoritesCount}</button>
    )
}