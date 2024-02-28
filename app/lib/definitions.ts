// Defined types and interfaces

// #########################################
// #             Search parameter          #
// #########################################
export interface ArticleSearchParams {
  author?: string;
  slug?: string;
  tag?: string;
}

// #########################################
// #               Api response            #
// #########################################

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface ArticleResponse {
  article: Article;
}

export interface TagsResponse {
  tags: Tag[];
}

export interface CommentsResponse {
  comments: Comment[];
}

export interface ProfileResponse {
  profile: Profile;
}

export interface User {
  token: string;
  email: string;
  name: string;
  image: string;
}

export type UserWithOptionalToken = Omit<User, "token"> & { token?: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export type Tag = string;

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
}

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
