// Defined types and interfaces
export interface UserAuthInfo {
    username: string,
    email: string,
    password: string,
    image: string,
    token: string,
}

export interface SessionUser {
    email: string;
    name: string;
    image?: string;
    token: string;
}
