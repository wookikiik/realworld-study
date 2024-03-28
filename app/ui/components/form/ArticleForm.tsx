'use client';

import { publishArticle } from '@/app/lib/actions/articleActions';
import { Article } from '@/app/lib/definitions';
import { KeyboardEvent, useState } from 'react';
import { useFormState } from 'react-dom';
import { FormErrorMessages } from './FormErrorMessages';
import { SubmitButton } from './SubmitButton';

interface ArticleFormProps {
  article?: Article;
}
export const ArticleForm = ({ article }: ArticleFormProps) => {
  const [tagList, setTagList] = useState<string[]>(article?.tagList || []);
  const [publishState, doPublish] = useFormState(publishArticle, {
    messages: '',
  });

  const handleAddTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTagList([...tagList, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };
  const handleDeleteTag = (tag: string) => {
    setTagList(tagList.filter((t) => t !== tag));
  };

  return (
    <>
      <FormErrorMessages errors={publishState?.messages || []} />
      <form action={doPublish}>
        <input type="hidden" name="slug" value={article?.slug} />
        <input type="hidden" name="tagList" value={tagList} />
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
          </fieldset>
          <SubmitButton className="btn btn-lg pull-xs-right btn-primary">
            Publish Article
          </SubmitButton>
        </fieldset>
      </form>
    </>
  );
};
