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
  const response = await callWithAuth("/user", "GET");
  return unWarpperResponseData(response);

  // return {
  //   email: "jake@jake.jake",
  //   username: "jake",
  //   bio: "I like to skateboard",
  //   image: "https://i.stack.imgur.com/xHWG8.jpg",
  //   token: "jwt.token.here",
  // };
}

export async function fetchArticleListGlobalFeed(): Promise<
  ArticlesResponse | ErrorResponse
> {
  const data = await GET("/articles/feed");
  return unWarpperResponseData(data);
}

export async function fetchArticleListFeed(): Promise<
  ArticlesResponse | ErrorResponse
> {
  const data = await GET("/articles/feed");
  return unWarpperResponseData(data);
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

export async function mockupFetchArticleList(
  searchParams: ArticleListSearchParams & PaginationParams,
): Promise<ArticlesResponse> {
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
): Promise<ArticlesResponse | ErrorResponse> {
  const response = await GET("/articles", searchParams);
  return unWarpperResponseData(response);
}

export async function fetchArticle(
  slug: string,
): Promise<ArticleResponse | ErrorResponse> {
  const response = await callWithAuth(`/articles/${slug}`, "GET");
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

export async function followUser(
  username: string,
): Promise<ProfileResponse | ErrorResponse> {
  const response = await callWithAuth(`/profiles/${username}/follow`, "POST");
  return unWarpperResponseData(response);
  return {
    profile: {
      username: "jake",
      bio: "I work at statefarm",
      image: "https://i.stack.imgur.com/xHWG8.jpg",
      following: true,
    },
  };
}

export async function unfollowUser(
  username: string,
): Promise<ProfileResponse | ErrorResponse> {
  const response = await callWithAuth(`/profiles/${username}/follow`, "DELETE");
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

export async function favoriteArticle(
  slug: string,
): Promise<ArticleResponse | ErrorResponse> {
  noStore();
  const encodedSlug = encodeURIComponent(slug);
  const response = await callWithAuth(
    `/articles/${encodedSlug}/favorite`,
    "POST",
  );
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
      favorited: true,
      favoritesCount: 1,
      author: {
        username: "jake",
        bio: "I work at statefarm",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
        following: false,
      },
    },
  };
}

export async function unfavoriteArticle(
  slug: string,
): Promise<ArticleResponse | ErrorResponse> {
  noStore();
  const encodedSlug = encodeURIComponent(slug);
  const response = await callWithAuth(
    `/articles/${encodedSlug}/favorite`,
    "DELETE",
  );
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

export async function createComment(
  slug: string,
  comment: string,
): Promise<CommentsResponse | ErrorResponse> {
  const encodedSlug = encodeURIComponent(slug);
  const response = await callWithAuth(
    `/articles/${encodedSlug}/comments`,
    "POST",
    {
      comment: {
        body: comment,
      },
    },
  );

  return unWarpperResponseData(response);
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

async function DELETE(url: string) {
  return callAPI(url, "DELETE");
}

async function callWithAuth(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: Record<string, any>,
) {
  let requestUrl = url;
  let requestData = data;
  if (method === "GET" && data) {
    const urlParams = new URLSearchParams(data).toString();
    requestUrl = `${url}?${urlParams}`;
    requestData = undefined;
  }

  return callAPI(requestUrl, method, requestData, async (init: RequestInit) => {
    const headers = init.headers as Record<string, any>;
    //  Add Authorization
    const session = await auth();
    if (session?.user.token) {
      headers["Authorization"] = `Token ${session.user.token}`;
    }
    init.headers = headers;
  });
}
async function callAPI(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: Record<string, any>,
  addInit?: (init: RequestInit) => Promise<void>,
) {
  const headers: Record<string, any> = {
    "Content-Type": "application/json",
  };

  const init: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  addInit && (await addInit(init));
  // console.log("callAPI", url);
  return fetch(`${API_BASE_URL}${url}`, init);
}

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
