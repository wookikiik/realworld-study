'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import { ArticleType } from "../lib/definitions"
import { useState } from "react";
import { postArticle } from "../lib/actions";
import { useRouter } from 'next/navigation';


export default function Page() {
    const [tag, setTag] = useState('');
    const [tagList, setTagList] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ArticleType>()
    const { replace } = useRouter();

    const onSubmit: SubmitHandler<ArticleType> = async (data) => {
        const articleParam = {...data, tagList};
        const res = await postArticle(articleParam);
        replace('article/'+ res.article.slug);
    }

    const handleWordChange = (event: any) => {
        setTag(event.target.value);
    };

    const handleWordSubmit = (event: any) => {        
        if (event.key === 'Enter' && tag.trim()) {
            setTagList([...tagList, tag.trim()]);
            setTag('');
        }
    };


    return (
        <div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        <ul className="error-messages">
                            {errors && Object.entries(errors).map(([key, error]) => (
                                <li key={key}>{error.message}</li>
                            ))}
                        </ul>
                        <form>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Article Title"
                                        {
                                        ...register("title", {
                                            required: "title required"
                                        })
                                        } />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What's this article about?"
                                        {
                                        ...register("description", {
                                            required: "description required"
                                        })
                                        } />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows={8}
                                        placeholder="Write your article (in markdown)"
                                        {
                                        ...register("body", {
                                            required: "body required"
                                        })
                                        }
                                    ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter tags"
                                        value={tag}
                                        onChange={handleWordChange}
                                        onKeyDown={handleWordSubmit}
                                    />
                                    <div className="tag-list">
                                        {tagList.map((t, index) => (
                                            <span key={index}
                                                className="tag-default tag-pill">
                                                <i className="ion-close-round"></i>
                                                {t} </span>
                                        ))}

                                    </div>
                                </fieldset>
                                <button
                                    className="btn btn-lg pull-xs-right btn-primary"
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}>
                                    Publish Article
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}