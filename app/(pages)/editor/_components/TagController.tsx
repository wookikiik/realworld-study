import { ArticleForm } from "@/app/lib/definitions";
import { useRef } from "react";
import { useFieldArray, useWatch, Controller } from "react-hook-form";
import type { Control, UseFormSetError } from "react-hook-form";

export default function TagController({
  control,
  onError,
}: TagControllerProps) {
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

interface TagControllerProps {
  onError: UseFormSetError<ArticleForm>;
  control: Control<ArticleForm>;
}
