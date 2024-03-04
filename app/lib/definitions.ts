// Defined types and interfaces

export interface User {
  email: string;
  name: string;
  image?: string;
  bio?: string;
  token: string;
}

export interface SignInForm {
  email: string;
  password: string;
}
