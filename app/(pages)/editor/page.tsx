"use client";

import { ArticleForm } from "@/app/lib/definitions";
import { ErrorMessages } from "@/app/ui/components";
import { useState, useRef, useEffect } from "react";
import { useForm, useFieldArray, useWatch, Controller } from "react-hook-form";
import { normalizeFormErrors } from "@/app/lib/utils";
import type { Control, UseFormSetError } from "react-hook-form";
import { createArticle } from "@/app/lib/actions";

export default function Page() {
  const {
    register,
    control,
    setError: setFormError,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<ArticleForm>();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setErrors(normalizeFormErrors(formErrors));
  }, [formErrors]);

  const action: () => void = handleSubmit(async (data) => {
    const errors = await createArticle(data);
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
                    {...register("title", { required: true })}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    {...register("description", { required: true })}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    {...register("body", { required: true })}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <TagController onError={setFormError} control={control} />
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

function TagController({ control, onError }: TagControllerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tagList",
  });

  const displayTags = useWatch({
    control,
    name: "tagList",
  });

  function handleAppendTag(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") {
      return;
    }

    e.preventDefault();

    const value = inputRef.current!.value;
    if (value.length < 2) {
      onError("tagList", {
        type: "minLength",
        message: "Tag must be at least 1 characters long",
      });
      return;
    }

    append(value);
    inputRef.current!.value = "";
  }

  return (
    <>
      <input
        type="text"
        className="form-control"
        onKeyDown={handleAppendTag}
        defaultValue=""
        ref={inputRef}
        placeholder="Enter tags"
      />
      <div>
        {fields.map((item, index) => (
          <span key={item.id} className="tag-default tag-pill">
            <i
              style={{ marginRight: "5px" }}
              className="ion-close-round"
              onClick={() => remove(index)}
            ></i>
            {displayTags && displayTags[index]}
            {/* register로 처리하지 않고, Controller를 사용하여 렌더링 하기 */}
            <Controller
              control={control}
              name={`tagList.${index}`}
              render={({ field }) => (
                <input type="hidden" key={item.id} {...field} />
              )}
            />
          </span>
        ))}
      </div>
    </>
  );
}

type TagControllerProps = {
  onError: UseFormSetError<ArticleForm>;
  control: Control<ArticleForm>;
};
