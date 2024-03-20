'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createArticle as create } from '../data/article';
import { ArticleForm } from '../definitions';
import { FormValidateError } from '../errors';
import { convertArticleData } from '../utils/article';

export const publishArticle = async (
  // slug: string | undefined,
  prevState: any,
  formData: FormData
) => {
  try {
    const articleData: ArticleForm = convertArticleData(formData);

    // const { article } = !slug
    //   ? await create(articleData)
    //   : await update(articleData);

    const { article } = await create(articleData);

    revalidatePath(`/article/${article.slug}`);
    redirect(`/article/${article.slug}`);
  } catch (error) {
    if (error instanceof FormValidateError) {
      return { messages: error.messages };
    }
  }
};
