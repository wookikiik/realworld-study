'use client';

import { publishArticle } from '@/app/lib/actions/articleActions';
import { Article } from '@/app/lib/definitions';
import { KeyboardEvent, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { FormErrorMessages } from './FormErrorMessages';

interface ArticleFormProps {
  isEdit?: boolean;
  article?: Article;
}
export const ArticleForm = ({ isEdit = false, article }: ArticleFormProps) => {
  // const publishArticleWithSlug = publishArticle.bind(null, article?.slug);
  const [tagList, setTagList] = useState<string[]>(article?.tagList || []);
  const [state, formAction] = useFormState(publishArticle, {
    messages: '',
  });

  const handleAddTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTagList([...tagList, e.currentTarget.value]);
    }
  };
  const handleDeleteTag = (tag: string) => {
    setTagList(tagList.filter((t) => t !== tag));
  };

  return (
    <>
      <FormErrorMessages errors={state?.messages || []} />
      <form action={formAction}>
        <fieldset>
          <fieldset className="form-group">
            <input
              type="text"
              name="title"
              className="form-control form-control-lg"
              placeholder="Article Title"
              defaultValue={article?.title}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="What's this article about?"
              defaultValue={article?.description}
            />
          </fieldset>
          <fieldset className="form-group">
            <textarea
              className="form-control"
              rows={8}
              name="body"
              placeholder="Write your article (in markdown)"
              defaultValue={article?.body}
            ></textarea>
          </fieldset>
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter tags"
              onKeyDown={handleAddTag}
            />
            {isEdit && (
              <div className="tag-list">
                {tagList.map((tag) => {
                  return (
                    <span key={tag} className="tag-default tag-pill">
                      <i
                        className="ion-close-round"
                        onClick={() => handleDeleteTag(tag)}
                      ></i>{' '}
                      {tag}
                    </span>
                  );
                })}
              </div>
            )}
          </fieldset>
          <PublishButton />
        </fieldset>
      </form>
    </>
  );
};

const PublishButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-lg pull-xs-right btn-primary"
    >
      Publish Article
    </button>
  );
};
