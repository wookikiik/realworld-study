import { ArticleForm } from '../definitions';
import { FormValidateError } from '../errors';
import { ArticleSchema } from '../schema';

export const convertArticleData = (formData: FormData): ArticleForm => {
  const result = ArticleSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    body: formData.get('body'),
    tagList: formData.get('tagList') || [],
  }); // omit | pick

  if (result.success) {
    return result.data as ArticleForm;
  }

  throw new FormValidateError({ errors: result.error.flatten().fieldErrors });
};
