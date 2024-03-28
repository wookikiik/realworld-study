// Defined types and interfaces
export interface UserAuthInfo {
    username?: string,
    email?: string,
    password?: string,
    image?: string,
    token?: string,
    bio?: string,
}

export const ARTICLES_PER_PAGE = 10;
export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export type tabType = {
    tabName: string;
    isActive: boolean;
    query?: string;
}

export type ArticleType = {
    article: {
        "slug": string,
        "title": string,
        "description": string,
        "body": string,
        "tagList": [
            string
        ],
        "favorited": boolean,
        "favoritesCount": number,
        "createdAt": Date,
        "updatedAt": Date,
        "author": {
            "username": string,
            "bio": string,
            "image": string,
            "following": boolean
        }
    }
}

export type CommentsType = {
    "comments": CommentType[]
}

export type CommentType = {
    "id": number,
    "createdAt": string,
    "updatedAt": string,
    "body": string,
    "author": {
        "username": string,
        "bio": string,
        "image": string,
        "following": boolean
    }
}

// export interface SessionUser {
//     email: string;
//     name: string;
//     image?: string;
//     token: string;
// }

// export interface AdapterUser {
//     email: string;
//     name: string;
//     image?: string;
//     token: string;
// }

// export interface User {
//     id?: string
//   name?: string | null
//   email?: string | null
//   image?: string | null
//   token: string,
// }
