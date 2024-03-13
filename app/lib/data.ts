// Define an asynchronous function to fetch data

import {
  Article,
  ArticleResponse,
  ArticlesResponse,
  Comment,
  Profile,
  ResponseWithProfile,
  ResponseWithUser,
  SignInResponse,
  SignParams,
  SignUpResponse,
  UpdateUserForm,
  UpdateUserResponse,
} from '@/app/lib/definitions';
import { GET, POST, PUT } from './utils/fetch';

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#registration
 */
export const registration = async (
  payload: SignParams
): Promise<SignUpResponse> => {
  const { user, errors } = await POST({
    url: '/users',
    payload: { user: payload },
  });

  return { user, errors };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#registration
 */
export const authentication = async (
  payload: SignParams
): Promise<SignInResponse> => {
  const { user, message } = await POST({
    url: '/users/login',
    payload: { user: payload },
  });

  return { user, message };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-current-user
 */
export const getCurrentUser = async (): Promise<ResponseWithUser> => {
  const { user } = await GET({
    url: '/user',
  });

  return { user };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#update-user
 */
export const updateUser = async (
  payload: UpdateUserForm
): Promise<UpdateUserResponse> => {
  const { user } = await PUT({
    url: '/user',
    payload: { user: payload },
  });

  return { user };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-profile
 */
export const getProfile = async (
  username: string
): Promise<ResponseWithProfile> => {
  const { profile } = await GET({
    url: `/profiles/${username}`,
  });

  return { profile };
};

/**
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
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-article
 */
export const getArticle = async (slug: string): Promise<ArticleResponse> => {
  // const { article } = await GET({
  //   url: `/articles/${slug}`,
  // });

  // return { article };
  return {
    article: {
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
        username: 'yy',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false,
      },
    },
  };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#delete-article
 */
export const deleteArticle = async () => {};

/**
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
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#list-articles
 */
export const getArticles = async (query: string): Promise<ArticlesResponse> => {
  const { articles, articlesCount } = await GET({
    url: `/articles?${query}`,
  });

  // return { articles, articlesCount };
  return {
    articles: [
      {
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
          username: 'yy',
          bio: 'I work at statefarm',
          image: 'https://i.stack.imgur.com/xHWG8.jpg',
          following: false,
        },
      },
      {
        slug: 'how-to-train-your-dragon-2',
        title: 'How to train your dragon 2',
        description: 'So toothless',
        body: 'It a dragon',
        tagList: ['dragons', 'training'],
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:48:35.824Z',
        favorited: false,
        favoritesCount: 0,
        author: {
          username: 'xx',
          bio: 'I work at statefarm',
          image: '',
          following: false,
        },
      },
    ],
    articlesCount: 2,
  };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#feed-articles
 */
export const getFeedArticles = async () => {};

/**
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
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#delete-comment
 */
export const deleteComment = async () => {};

/**
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
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-tags
 */
export const getTags = async (): Promise<string[]> => {
  return ['reactjs', 'angularjs'];
  // return data.tags
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#follow-user
 */
export const followUser = async (): Promise<Profile> => {
  return {
    username: 'jake',
    bio: 'I work at statefarm',
    image: 'https://api.realworld.io/images/smiley-cyrus.jpg',
    following: true,
  };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#unfollow-user
 */
export const unfollowUser = async (): Promise<Profile> => {
  return {
    username: 'jake',
    bio: 'I work at statefarm',
    image: 'https://api.realworld.io/images/smiley-cyrus.jpg',
    following: false,
  };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#favorite-article
 */
export const favoriteArticle = async (
  slug: string
): Promise<ArticleResponse> => {
  // const { article } = await POST({
  //   url: `/slug/${slug}/favorite`,
  // });

  // return { article };
  return {
    article: {
      slug: 'how-to-train-your-dragon',
      title: 'How to train your dragon',
      description: 'Ever wonder how?',
      body: 'It takes a Jacobian',
      tagList: ['dragons', 'training'],
      createdAt: '2016-02-18T03:22:56.637Z',
      updatedAt: '2016-02-18T03:48:35.824Z',
      favorited: true,
      favoritesCount: 1,
      author: {
        username: 'jake',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false,
      },
    },
  };
};

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#unfavorite-article
 */
export const unfavoriteArticle = async (
  slug: string
): Promise<ArticleResponse> => {
  // const { article} = await DELETE({
  //   url: `/slug/${slug}/favorite`,
  // });

  // return {article}
  return {
    article: {
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
    },
  };
};
