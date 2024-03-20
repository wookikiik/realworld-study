"use client";

import { Article, ArticleForm } from "@/app/lib/definitions";
import { ErrorMessages } from "@/app/ui/components";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { normalizeFormErrors } from "@/app/lib/utils";
import TagController from "./TagController";

export function Form({ article, onAction }: FormProps) {
  const {
    register,
    control,
    setError: setFormError,
    formState: { defaultValues, errors: formErrors },
    handleSubmit,
  } = useForm<ArticleForm>({
    defaultValues: article,
  });

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setErrors(normalizeFormErrors(formErrors));
  }, [formErrors]);

  const action: () => void = handleSubmit(async (data) => {
    const errors = await onAction(data);
    errors && setErrors(errors);
  });

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ErrorMessages messages={errors} />
            <form onSubmit={action}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    defaultValue={article?.title}
                    {...register("title", { required: true })}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    defaultValue={article?.description}
                    {...register("description", { required: true })}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    defaultValue={article?.body}
                    {...register("body", { required: true })}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <TagController onError={setFormError} />
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FormProps {
  article?: Article;
  onAction: (formData: ArticleForm) => Promise<string[] | undefined>;
}
