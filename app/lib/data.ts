// Define an asynchronous function to fetch data

import {
  ArticlesResponse,
  TagsResponse,
  ArticleResponse,
  CommentsResponse,
  ProfileResponse,
  User,
} from "./definitions";

export async function login(email: string, password: string): Promise<User> {
  return {
    email: "jake@jake.jake",
    username: "jake",
    bio: "I like to skateboard",
    image: "https://i.stack.imgur.com/xHWG8.jpg",
    token: "jwt.token.here",
  };
}

export async function getCurrentUser(): Promise<User> {
  return {
    email: "jake@jake.jake",
    username: "jake",
    bio: "I like to skateboard",
    image: "https://i.stack.imgur.com/xHWG8.jpg",
    token: "jwt.token.here",
  };
}

export async function fetchAllArticle(): Promise<ArticlesResponse> {
  return {
    articles: [
      {
        slug: "how-to-train-your-dragon",
        title: "How to train your dragon",
        description: "Ever wonder how?",
        body: "It takes a Jacobian",
        tagList: ["dragons", "training"],
        createdAt: "2016-02-18T03:22:56.637Z",
        updatedAt: "2016-02-18T03:48:35.824Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
      {
        slug: "how-to-train-your-dragon-2",
        title: "How to train your dragon 2",
        description: "So toothless",
        body: "It a dragon",
        tagList: ["dragons", "training"],
        createdAt: "2016-02-18T03:22:56.637Z",
        updatedAt: "2016-02-18T03:48:35.824Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
    ],
    articlesCount: 2,
  };
}

export async function fetchArticle(slug: string): Promise<ArticleResponse> {
  return {
    article: {
      slug: "how-to-train-your-dragon",
      title: "How to train your dragon",
      description: "Ever wonder how?",
      body: "It takes a Jacobian",
      tagList: ["dragons", "training"],
      createdAt: "2016-02-18T03:22:56.637Z",
      updatedAt: "2016-02-18T03:48:35.824Z",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "jake",
        bio: "I work at statefarm",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
        following: false,
      },
    },
  };
}

export async function fetchAllTag(): Promise<TagsResponse> {
  return {
    tags: ["reactjs", "angularjs"],
  };
}

export async function fetchComments(slug: string): Promise<CommentsResponse> {
  return {
    comments: [
      {
        id: 1,
        createdAt: "2016-02-18T03:22:56.637Z",
        updatedAt: "2016-02-18T03:22:56.637Z",
        body: "It takes a Jacobian",
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
    ],
  };
}

export async function fetchProfile(username: string): Promise<ProfileResponse> {
  return {
    profile: {
      username: "jake",
      bio: "I work at statefarm",
      image: "https://i.stack.imgur.com/xHWG8.jpg",
      following: false,
    },
  };
}
