import {
  Article,
  ArticleResponse,
  ArticlesResponse,
  Comment,
} from '@/app/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { DELETE, GET, POST } from '../utils/fetch';

/**
 * 게시물 등록
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#create-article
 */

export const createArticle = async (): Promise<Article> => {
  return {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon',
    description: 'Ever wonder how?',
    body: 'It takes a Jacobian',
    tagList: ['dragons', 'training'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'jake',
      bio: 'I work at statefarm',
      image: 'https://i.stack.imgur.com/xHWG8.jpg',
      following: false,
    },
  };
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

export const deleteArticle = async () => {};
/**
 * 게시물 수정
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#update-article
 */

export const updateArticle = async (): Promise<Article> => {
  return {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon',
    description: 'Ever wonder how?',
    body: 'It takes a Jacobian',
    tagList: ['dragons', 'training'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'jake',
      bio: 'I work at statefarm',
      image: 'https://i.stack.imgur.com/xHWG8.jpg',
      following: false,
    },
  };
};
/**
 * 게시물 목록 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#list-articles
 */

export const fetchArticles = async (
  query: string
): Promise<ArticlesResponse> => {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { articles, articlesCount } = await GET({
    url: `/articles?${query}`,
  });
  console.log(`/articles?${query}`);

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
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { articles, articlesCount } = await GET({
    url: `/articles/feed?${query}`,
  });
  console.log(`/articles/feed?${query}`);

  return { articles, articlesCount };
};
/**
 * 댓글 추가
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#add-comments-to-an-article
 */

export const addComment = async (): Promise<Comment> => {
  return {
    id: 1,
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:22:56.637Z',
    body: 'It takes a Jacobian',
    author: {
      username: 'jake',
      bio: 'I work at statefarm',
      image: 'https://i.stack.imgur.com/xHWG8.jpg',
      following: false,
    },
  };
};
/**
 * 댓글 삭제
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#delete-comment
 */

export const deleteComment = async () => {};
/**
 * 댓글 조회
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-comments-from-an-article
 */

export const getComments = async (): Promise<Comment[]> => {
  return [
    {
      id: 1,
      createdAt: '2016-02-18T03:22:56.637Z',
      updatedAt: '2016-02-18T03:22:56.637Z',
      body: 'It takes a Jacobian',
      author: {
        username: 'jake',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false,
      },
    },
  ];
  // return data.comments
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

  console.log(article);
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
