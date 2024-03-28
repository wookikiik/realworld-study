import {
  ArticleForm,
  ArticleResponse,
  ArticlesResponse,
  CommentResponse,
  CommentsResponse,
} from '@/app/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { DELETE, GET, POST, PUT } from '../utils/fetcher';

/**
 * 게시물 등록
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#create-article
 */
export const createArticle = async (
  articleData: ArticleForm
): Promise<ArticleResponse> => {
  const { article } = await POST({
    url: '/articles',
    payload: { article: articleData },
  });

  return { article };
};

/**
 * 게시물 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-article
 */
export const fetchArticle = async (slug: string): Promise<ArticleResponse> => {
  const { article } = await GET({
    url: `/articles/${slug}`,
  });

  return { article };
};

/**
 * 게시물 삭제
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#delete-article
 */
export const deleteArticle = async (slug: string) => {
  await DELETE({
    url: `/articles/${slug}`,
  });
};

/**
 * 게시물 수정
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#update-article
 */
export const updateArticle = async (
  slug: string,
  articleData: ArticleForm
): Promise<ArticleResponse> => {
  const { article } = await PUT({
    url: `/articles/${slug}`,
    payload: { article: articleData },
  });

  return { article };
};

/**
 * 게시물 목록 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#list-articles
 */
export const fetchArticles = async (
  query: string
): Promise<ArticlesResponse> => {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { articles, articlesCount } = await GET({
    url: `/articles?${query}`,
  });

  return { articles, articlesCount };
};

/**
 * 피드 목록 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#feed-articles
 */
export const fetchFeedArticles = async (
  query: string
): Promise<ArticlesResponse> => {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { articles, articlesCount } = await GET({
    url: `/articles/feed?${query}`,
  });

  return { articles, articlesCount };
};

/**
 * 댓글 추가
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#add-comments-to-an-article
 */
export const addComment = async (
  slug: string,
  body: string
): Promise<CommentResponse> => {
  const { comment } = await POST({
    url: `/articles/${slug}/comments`,
    payload: {
      comment: {
        body,
      },
    },
  });

  return { comment };
};

/**
 * 댓글 삭제
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#delete-comment
 */
export const deleteComment = async (slug: string, commentId: string) => {
  await DELETE({
    url: `/articles/${slug}/comments/${commentId}`,
  });
};

/**
 * 댓글 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-comments-from-an-article
 */
export const fetchComments = async (
  slug: string
): Promise<CommentsResponse> => {
  const { comments } = await GET({
    url: `/articles/${slug}/comments`,
  });

  return { comments };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#favorite-article
 */
export const favoriteArticle = async (
  slug: string
): Promise<ArticleResponse> => {
  const { article } = await POST({
    url: `/articles/${slug}/favorite`,
  });

  return { article };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#unfavorite-article
 */
export const unfavoriteArticle = async (
  slug: string
): Promise<ArticleResponse> => {
  const { article } = await DELETE({
    url: `/articles/${slug}/favorite`,
  });

  return { article };
};
