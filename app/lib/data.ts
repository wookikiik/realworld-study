// Define an asynchronous function to fetch data

import { auth } from "@/auth";
import { LoginForm, UserModel, LoginResponse } from "./definitions";

const API_BASE_URL = process.env.API_BASE_URL;

const userData: UserModel = {
  email: "jake@jake.jake",
  token: "jwt.token.here",
  username: "jake",
  bio: "I work at statefarm",
  image: "https://api.realworld.io/images/smiley-cyrus.jpg",
};

export async function getCurrentUser(): Promise<UserModel> {
  const session = await auth();
  console.log(
    "Token information stored in the session: ",
    session?.user?.token,
  );

  // API 접속 상태가 불안정 할 때 대체 데이터를 사용
  return userData;

  // return fetch("https://api.realworld.io/api/user", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Token ${session?.user?.token}`,
  //   },
  // }) //
  //   .then((res) => res.json())
  //   .then((data) => data.user as UserModel);
}

export async function login({
  email,
  password,
}: LoginForm): Promise<LoginResponse> {
  // API 접속 상태가 불안정 할 때 대체 데이터를 사용
  return {
    user: userData,
  };

  // const user = await fetch(`${API_BASE_URL}/users/login`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     user: {
  //       email,
  //       password,
  //     },
  //   }),
  // }).then((res) => res.json());

  // return user;
}
