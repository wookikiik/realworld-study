"use client";

import { Article, ArticleForm } from "@/app/lib/definitions";
import { ErrorMessages } from "@/app/ui/components";
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { normalizeFormErrors } from "@/app/lib/utils";
import TagController from "./TagController";

export function Form({ article, onAction }: FormProps) {
  const methods = useForm<ArticleForm>({
    defaultValues: article,
  });

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setErrors(normalizeFormErrors(methods.formState.errors));
  }, [methods.formState.errors]);

  const action: () => void = methods.handleSubmit(async (data) => {
    const errors = await onAction(data);
    errors && setErrors(errors);
  });

  const { register, setError: setFormError } = methods;

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ErrorMessages messages={errors} />
            <FormProvider {...methods}>
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
            </FormProvider>
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
