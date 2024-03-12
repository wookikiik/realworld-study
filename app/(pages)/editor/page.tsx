"use client";

import { ArticleForm } from "@/app/lib/definitions";
import { ErrorMessages } from "@/app/ui/components";
import { useState, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import type { Control } from "react-hook-form";

export default function Page() {
  const { register, watch, control } = useForm<ArticleForm>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tagList",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const displayTags = watch("tagList");
  function handleAppendTag(tag: string) {
    append(tag);
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ErrorMessages messages={errors} />

            <form>
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
                  <TagController tags={fields} onAppendTag={handleAppendTag}>
                    <div>
                      {fields.map((item, index) => (
                        <span key={item.id} className="tag-default tag-pill">
                          <i
                            style={{ marginRight: "5px" }}
                            className="ion-close-round"
                            onClick={() => remove(index)}
                          ></i>
                          {displayTags && displayTags[index]}
                          <input
                            type="hidden"
                            key={item.id}
                            {...register(`tagList.${index}`, {
                              min: {
                                value: 3,
                                message:
                                  "Tag must be at least 3 characters long",
                              },
                            })}
                          />
                        </span>
                      ))}
                    </div>
                  </TagController>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
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

function TagController({ tags, onAppendTag, children }: TagControllerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAppendTag(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") {
      return;
    }

    e.preventDefault();
    onAppendTag(inputRef.current!.value);
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
      {children}
    </>
  );
}

type TagControllerProps = {
  tags: Record<"id", string>[];
  children: React.ReactNode;
  onAppendTag: (tag: string) => void;
};
