'use server';
import { signIn as login } from "@/auth"
import { unstable_noStore as noStore } from 'next/cache';
import type { UserAuthInfo } from "./definitions";
import { auth } from '@/auth';
import { fetchData, fetchWithAuth } from "./utils";

const URL = 'https://api.realworld.io/api/'

export async function getCurrentUser(): Promise<any> {
  const res = await fetch('http://localhost:3000/api/user/', {
    method: 'GET'
  })
  // 또는 상대 경로: const res = await fetch('/api/data')    
  const data = await res.json();
  console.log("getCurrentUser res", data);
  if (data.data) {
    // data.data에 접근하여 사용
    console.log(data.data)
  } else {
    // 에러 처리
    console.error(data.error)
  }

  return data.data
}



async function getSessionToken(): Promise<any> {
  const session = await auth();
  console.log("session", session);
  return session?.user?.token
}

// new ===== 

export async function updateUserAction(userParam: UserAuthInfo): Promise<any> {
  const updatedUser = await fetchWithAuth<UserAuthInfo>(
    'user',
    'PUT',
    { user: userParam }
  );
  return updatedUser;
}

export async function signIn(formData: UserAuthInfo) {
  await login("credentials", formData);
}

export async function userLoginAction(
  email: string,
  password: string,
): Promise<any> {
  noStore();

  const data = await fetchData<{user: UserAuthInfo}>(
    'users/login',
    'POST',
    { user: { email, password } }
  )  
  return data?.user;
}


export async function followAction(username: string): Promise<any> {
  const followUser = await fetchWithAuth<UserAuthInfo>(
    'profiles/' + username + '/follow',
    'POST',    
  );  
  return followUser;
}

export async function unfollowAction(username: string): Promise<any> {
  const unfollowUser = await fetchWithAuth<UserAuthInfo>(
    'profiles/' + username + '/follow',
    'DELETE',    
  );  
  return unfollowUser;
}


