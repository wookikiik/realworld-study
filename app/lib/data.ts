// Define an asynchronous function to fetch data
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

import { auth } from "@/auth";
import {
  ArticlesResponse,
  TagsResponse,
  ArticleResponse,
  CommentsResponse,
  ProfileResponse,
  User,
  UserResponse,
  SignupForm,
  ErrorResponse,
  ArticleListSearchParams,
  PaginationParams,
  ProfileForm,
  ArticleForm,
} from "./definitions";

const API_BASE_URL = process.env.API_BASE_URL;

export async function login(
  email: string,
  password: string,
): Promise<UserResponse | ErrorResponse> {
  noStore();
  const response = await POST("/users/login", { user: { email, password } });
  return unWarpperResponseData(response);
  // return {
  //   user: {
  //     email: "jake@jake.jake",
  //     username: "jake",
  //     bio: "I like to skateboard",
  //     image: "https://i.stack.imgur.com/xHWG8.jpg",
  //     token: "jwt.token.here",
  //   },
  // };
}

export async function register(
  data: SignupForm,
): Promise<UserResponse | ErrorResponse> {
  noStore();
  const response = await POST("/users", { user: data });
  return unWarpperResponseData(response);
  // return {
  //   user: {
  //     email: "jake@jake.jake",
  //     username: "jake",
  //     bio: "I like to skateboard",
  //     image: "https://i.stack.imgur.com/xHWG8.jpg",
  //     token: "jwt.token.here",
  //   },
  // };
}

export async function getCurrentUser(): Promise<UserResponse> {
  noStore();
  const response = await GET("/user");
  return unWarpperResponseData(response);

  // return {
  //   email: "jake@jake.jake",
  //   username: "jake",
  //   bio: "I like to skateboard",
  //   image: "https://i.stack.imgur.com/xHWG8.jpg",
  //   token: "jwt.token.here",
  // };
}

export async function fetchArticleListFeed(): Promise<ArticlesResponse> {
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

export async function fetchArticleList(
  searchParams: ArticleListSearchParams & PaginationParams,
): Promise<ArticlesResponse> {
  // const url = "/articles";
  // const params: Record<string, string | number> = {};
  // Object.entries(searchParams).forEach(([key, value]) => {
  //   if (value) {
  //     params[key] = value;
  //   }
  // });

  // console.log(params);

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
  // const response = await GET("/articles", params);
}

export async function fetchArticle(
  slug: string,
): Promise<ArticleResponse | ErrorResponse> {
  const response = await GET(`/articles/${slug}`);
  return unWarpperResponseData(response);
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

export async function createArticle(
  formData: ArticleForm,
): Promise<ArticleResponse | ErrorResponse> {
  const response = await POST("/articles", { article: formData });
  return unWarpperResponseData(response);
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
  const response = await GET(`/profiles/${username}`);
  return unWarpperResponseData(response);

  return {
    profile: {
      username: "jake",
      bio: "I work at statefarm",
      image: "https://i.stack.imgur.com/xHWG8.jpg",
      following: false,
    },
  };
}

export async function updateProfile(
  profile: ProfileForm,
): Promise<UserResponse | ErrorResponse> {
  const response = await PUT(`/user`, {
    user: profile,
  });

  return unWarpperResponseData<UserResponse>(response);
}

async function POST(url: string, data?: Record<string, any>) {
  return callAPI(url, "POST", data);
}

async function GET(url: string, params?: Record<string, any>) {
  const urlParams = new URLSearchParams(params).toString();
  return callAPI(`${url}?${urlParams}`, "GET");
}

async function PUT(url: string, data?: Record<string, any>) {
  return callAPI(url, "PUT", data);
}

async function callAPI(
  url: string,
  method: "GET" | "POST" | "PUT",
  data?: Record<string, any>,
) {
  const headers: Record<string, any> = {
    "Content-Type": "application/json",
  };

  //  Add Authorization
  const session = await auth();
  if (session?.user.token) {
    headers["Authorization"] = `Token ${session.user.token}`;
  }

  // console.log("callAPI", url, method, data, headers);
  return fetch(`${API_BASE_URL}${url}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  });
}

async function unWarpperResponseData<T>(response: Response): Promise<T> {
  if (response.ok || response.status === 422) {
    return response.json();
  }

  // console.log(response.status, response.statusText);
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
    default:
      throw new Error("Unknown error");
  }
}
