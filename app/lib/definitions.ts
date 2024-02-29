// Defined types and interfaces

export type LoginState = string | undefined;

export type LoginForm = {
  email: string;
  password: string;
};

export type UserModel = {
  email: string;
  username: string;
  token: string;
  image: string;
  bio: string;
};

export type User = {
  email: string;
  name: string;
  image: string;
  token: string;
};

export type LoginErrorModel = {
  errors: {
    [field: string]: string[];
  };
};

export type LoginResponse =
  | {
      user: UserModel;
    }
  | LoginErrorModel;
