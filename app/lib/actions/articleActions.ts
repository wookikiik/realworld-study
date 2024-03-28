'use server';

import { redirect } from 'next/navigation';
import {
  createArticle as create,
  updateArticle as update,
} from '../data/article';
import { ArticleForm } from '../definitions';
import { FormValidateError } from '../errors';
import { convertArticleData } from '../utils/article';

/**
 * server action의 try/catch 블럭 안에서 redirect되지 않는 문제
 * @see https://github.com/vercel/next.js/issues/55586
 * @see https://velog.io/@minboykim/Next.js-Server-Actions#adding-trycatch-to-server-actions
 */
export const publishArticle = async (prevState: any, formData: FormData) => {
  let newSlug = '';
  try {
    const slug = formData.get('slug') as string;
    const articleData: ArticleForm = convertArticleData(formData);

    const { article } = !!slug
      ? await update(slug, articleData)
      : await create(articleData);

    newSlug = article.slug;
  } catch (error) {
    if (error instanceof FormValidateError) {
      return { messages: error.messages };
    }
  }

  redirect(`/article/${newSlug}`);
};
