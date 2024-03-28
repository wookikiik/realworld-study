'use client';
import { useState } from "react";
import MyImage from "./myImage";
import { postCommentAction } from "../lib/actions";

export default function CommentForm({ slug, img }: { slug: string, img: string }) {
    const [comment, setComment] = useState('');

    async function handleFormSubmit(event: any) {
        event.preventDefault();
        await postCommentAction(slug);
        setComment('');
    }

    const handleTextareaChange = (event: any) => {
        setComment(event.target.value);
      };

    return (
        <form className="card comment-form" onSubmit={handleFormSubmit}>
            <div className="card-block">
                <textarea
                    className="form-control"
                    placeholder="Write a comment..." rows={3}
                    value={comment}
                    onChange={handleTextareaChange}
                ></textarea>
            </div>
            <div className="card-footer">
                <MyImage
                    src={img}
                    className="comment-author-img" />
                <button className="btn btn-sm btn-primary">
                    Post Comment</button>
            </div>
        </form>
    )
}