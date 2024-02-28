// Defined types and interfaces

export type User = {
    token: string;
    email: string;
    name: string;
    image: string;
}

export type UserWithOptionalToken = Omit<User, 'token'> & { token?: string };
