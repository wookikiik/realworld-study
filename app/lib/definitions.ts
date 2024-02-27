// Defined types and interfaces

export type LoginState = string | undefined;

export type LoginForm = {
    email: string;
    password: string;
}

export type UserModel = {
    id: string;
    email: string;
    username: string;
    token: string;
    image: string;
    bio: string;
};

export type LoginErrorModel = {
    [field: string]: string[];
  };