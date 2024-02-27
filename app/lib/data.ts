// Define an asynchronous function to fetch data

import { 
    LoginForm,
    UserModel, 
    LoginErrorModel 
} from "./definitions";

const API_BASE_URL = process.env.API_BASE_URL;

type LoginResponse = UserModel | LoginErrorModel
export async function login({email, password }: LoginForm): Promise<LoginResponse> {
    const user = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        user: {
        email,
        password,
        },
    }),
    })
    .then((res) => res.json())
    .then((data) => data.user as UserModel);

    return user;
}