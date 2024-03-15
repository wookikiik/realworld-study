// Defined types and interfaces

export interface User {
  email: string;
  username: string;
  image?: string | null;
  bio?: string;
}

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Author extends Profile {}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Array<string>;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

// Form
export interface SignForm {
  username?: string;
  email: string;
  password: string;
}
export interface UpdateUserForm {
  image: string;
  username: string;
  bio: string;
  email: string;
  password: string;
}

// Params
export interface SignParams extends SignForm {}
export interface UpdateUserParams extends UpdateUserForm {}

// API Response
export interface ResponseWithUser {
  user: User;
}

export interface SignUpResponse extends ResponseWithUser {
  errors: {
    email: string[];
    username: string[];
  };
}
export interface SignInResponse extends ResponseWithUser {
  message: string;
}
export interface UpdateUserResponse extends ResponseWithUser {}

export interface ResponseWithProfile {
  profile: Profile;
}

export interface ArticleResponse {
  article: Article;
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}
