import { notFound } from "next/navigation";
import type {
  ApiParams,
  UserResponse,
  ErrorResponse,
  SigninForm,
  SignupForm,
  ArticlesResponse,
  ArticleListSearchParams,
  PaginationParams,
  ArticleResponse,
  ArticleForm,
  TagsResponse,
  CommentsResponse,
  ProfileResponse,
  ProfileForm,
  CommentResponse,
} from "@/app/lib/definitions";
import { Method, NoCache, RequiresAuth } from "./decorator";

interface DataService {
  login(form: SigninForm): Promise<UserResponse | ErrorResponse>;
  register(form: SignupForm): Promise<UserResponse | ErrorResponse>;
  getCurrentUser(): Promise<UserResponse>;
  fetchArticleListGlobalFeed(): Promise<ArticlesResponse | ErrorResponse>;
  fetchArticleListFeed(): Promise<ArticlesResponse | ErrorResponse>;
  fetchArticleList(
    params: ArticleListSearchParams & PaginationParams,
  ): Promise<ArticlesResponse | ErrorResponse>;
  fetchArticle(slug: string): Promise<ArticleResponse>;
  createArticle(form: ArticleForm): Promise<ArticleResponse | ErrorResponse>;
  favoriteArticle(slug: string): Promise<ArticleResponse | ErrorResponse>;
  unfavoriteArticle(slug: string): Promise<ArticleResponse | ErrorResponse>;
  fetchComments(slug: string): Promise<CommentsResponse>;
  fetchAllTag(): Promise<TagsResponse>;
  fetchProfile(username: string): Promise<ProfileResponse>;
  updateProfile(form: ProfileForm): Promise<UserResponse | ErrorResponse>;
  followUser(username: string): Promise<ProfileResponse | ErrorResponse>;
  unfollowUser(username: string): Promise<ProfileResponse | ErrorResponse>;
  createComment(slug: string, comment: string): Promise<CommentResponse>;
  deleteComment(slug: string, id: string): Promise<void>;
}

class DefaultDataService {
  private baseUrl = process.env.API_BASE_URL;

  @NoCache()
  @Method("POST")
  login(params?: RequestInit) {
    return async (form: SigninForm): Promise<UserResponse | ErrorResponse> => {
      const response = await this._fetch("/users/login", {
        ...params,
        data: { user: form },
      });

      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("POST")
  register(params?: RequestInit) {
    return async (form: SigninForm): Promise<UserResponse | ErrorResponse> => {
      const response = await this._fetch("/users", {
        ...params,
        data: { user: form },
      });

      return unWarpperResponseData(response);
    };
  }

  @Method("GET")
  getCurrentUser(params?: RequestInit) {
    return async (): Promise<UserResponse> => {
      const response = await this._fetch("/users", params);
      return unWarpperResponseData(response);
    };
  }

  @Method("GET")
  fetchArticleListGlobalFeed(params?: RequestInit) {
    return async (): Promise<ArticlesResponse | ErrorResponse> => {
      const response = await this._fetch("/articles/feed", params);
      return unWarpperResponseData(response);
    };
  }

  @Method("GET")
  fetchArticleListFeed(params?: RequestInit) {
    return async (): Promise<ArticlesResponse | ErrorResponse> => {
      const response = await this._fetch("/articles/feed", params);
      return unWarpperResponseData(response);
    };
  }

  @Method("GET")
  fetchArticleList(params?: RequestInit) {
    return async (
      searchParams: ArticleListSearchParams & PaginationParams,
    ): Promise<ArticlesResponse | ErrorResponse> => {
      const response = await this._fetch("/articles", {
        ...params,
        data: searchParams,
      });
      return unWarpperResponseData(response);
    };
  }

  @Method("GET")
  fetchArticle(params?: RequestInit) {
    return async (slug: string): Promise<ArticleResponse> => {
      const response = await this._fetch(`/articles/${slug}`, params);
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("POST")
  @RequiresAuth()
  createArticle(params?: RequestInit) {
    return async (
      form: ArticleForm,
    ): Promise<ArticleResponse | ErrorResponse> => {
      const response = await this._fetch("/articles", {
        ...params,
        data: { article: form },
      });
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("POST")
  @RequiresAuth()
  favoriteArticle(params?: RequestInit) {
    return async (slug: string): Promise<ArticleResponse | ErrorResponse> => {
      const encodedSlug = encodeURIComponent(slug);
      const response = await this._fetch(
        `/articles/${encodedSlug}/favorite`,
        params,
      );
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("DELETE")
  @RequiresAuth()
  unfavoriteArticle(params?: RequestInit) {
    return async (slug: string): Promise<ArticleResponse | ErrorResponse> => {
      const encodedSlug = encodeURIComponent(slug);
      const response = await this._fetch(
        `/articles/${encodedSlug}/favorite`,
        params,
      );
      return unWarpperResponseData(response);
    };
  }

  @Method("GET")
  fetchComments(params?: RequestInit) {
    return async (slug: string): Promise<CommentsResponse> => {
      const response = await this._fetch(`/articles/${slug}/comments`, params);
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("POST")
  @RequiresAuth()
  createComment(params?: RequestInit) {
    return async (slug: string, comment: string): Promise<CommentResponse> => {
      const encodedSlug = encodeURIComponent(slug);
      const response = await this._fetch(`/articles/${encodedSlug}/comments`, {
        ...params,
        data: { comment: { body: comment } },
      });
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("DELETE")
  @RequiresAuth()
  deleteComment(params?: RequestInit) {
    return async (slug: string, id: string): Promise<void> => {
      const encodedSlug = encodeURIComponent(slug);
      const response = await this._fetch(
        `/articles/${encodedSlug}/comments/${id}`,
        params,
      );
      return unWarpperResponseData(response);
    };
  }

  @Method("GET")
  fetchProfile(params?: RequestInit) {
    return async (username: string): Promise<ProfileResponse> => {
      const response = await this._fetch(`/profiles/${username}`, params);
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("PUT")
  @RequiresAuth()
  updateProfile(params?: RequestInit) {
    return async (form: ProfileForm): Promise<UserResponse | ErrorResponse> => {
      const response = await this._fetch("/user", {
        ...params,
        data: { user: form },
      });
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("POST")
  @RequiresAuth()
  followUser(params?: RequestInit) {
    return async (
      username: string,
    ): Promise<ProfileResponse | ErrorResponse> => {
      const response = await this._fetch(
        `/profiles/${username}/follow`,
        params,
      );
      return unWarpperResponseData(response);
    };
  }

  @NoCache()
  @Method("DELETE")
  @RequiresAuth()
  unfollowUser(params?: RequestInit) {
    return async (
      username: string,
    ): Promise<ProfileResponse | ErrorResponse> => {
      const response = await this._fetch(
        `/profiles/${username}/follow`,
        params,
      );
      return unWarpperResponseData(response);
    };
  }

  fetchAllTag(params?: RequestInit) {
    return async (): Promise<TagsResponse> => {
      return {
        tags: ["reactjs", "angularjs"],
      };
    };
  }

  _fetch(url: string, params?: ApiParams) {
    const data = params?.data;
    if (!!data) {
      params.body = JSON.stringify(data);
      delete params.data;
    }

    const headers: Record<string, any> = {
      "Content-Type": "application/json",
    };

    params?.headers && Object.assign(headers, params.headers);
    return fetch(`${this.baseUrl}${url}`, params);
  }
}

const data = new DefaultDataService();
export const login = data.login({});
export const register = data.register({});
export const getCurrentUser = data.getCurrentUser({});
export const fetchArticleListGlobalFeed = data.fetchArticleListGlobalFeed({});
export const fetchArticleListFeed = data.fetchArticleListFeed({});
export const fetchArticleList = data.fetchArticleList({});
export const fetchArticle = data.fetchArticle({});
export const createArticle = data.createArticle({});
export const favoriteArticle = data.favoriteArticle({});
export const unfavoriteArticle = data.unfavoriteArticle({});
export const fetchComments = data.fetchComments({});
export const createComment = data.createComment({});
export const deleteComment = data.deleteComment({});
export const fetchAllTag = data.fetchAllTag({});
export const fetchProfile = data.fetchProfile({});
export const updateProfile = data.updateProfile({});
export const followUser = data.followUser({});
export const unfollowUser = data.unfollowUser({});

async function unWarpperResponseData<T>(response: Response): Promise<T> {
  if (response.ok || response.status === 422) {
    return response.json();
  }

  switch (response?.status) {
    // Unauthorized requests
    case 401:
      throw new Error("Unauthorized");

    // Forbidden requests
    case 403:
      throw new Error("Forbidden");

    // Not found requests
    case 404:
      notFound();

    // All other errors
    default:
      console.error("Unknown error", response);
      throw new Error("Unknown error");
  }
}

// class DataServiceBuilder {
//   static build(): DataService {
//     const data = new DefaultDataService();
//     return {
//       login: data.login({}),
//       register: data.register({}),
//       getCurrentUser: data.getCurrentUser({}),
//       fetchArticleListGlobalFeed: data.fetchArticleListGlobalFeed({}),
//       fetchArticleListFeed: data.fetchArticleListFeed({}),
//       fetchArticleList: data.fetchArticleList({}),
//       fetchArticle: data.fetchArticle({}),
//       createArticle: data.createArticle({}),
//       favoriteArticle: data.favoriteArticle({}),
//       unfavoriteArticle: data.unfavoriteArticle({}),
//       fetchComments: data.fetchComments({}),
//       createComment: data.createComment({}),
//       deleteComment: data.deleteComment({}),
//       fetchAllTag: data.fetchAllTag({}),
//       fetchProfile: data.fetchProfile({}),
//       updateProfile: data.updateProfile({}),
//       followUser: data.followUser({}),
//       unfollowUser: data.unfollowUser({}),
//     };
//   }
// }
