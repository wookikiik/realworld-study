import { auth } from "@/auth";
import { ARTICLES_PER_PAGE } from "./definitions";
const serverUrl = 'https://api.realworld.io/api'

export async function fetchWithAuth<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: Record<string, any>,
): Promise<T> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };
    const session = await auth();
    const token = session?.user?.token;
    console.log("fetchWithAuth sessiont", session);

    if (token) {
        headers['Authorization'] = `Token ${token}`;
    }
    const fullUrl = `${serverUrl}/${url}`

    console.log("fetchWithAuth url", url);
    console.log("fetchWithAuth fullUrl", fullUrl);

    const response = await fetch(fullUrl, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }    

    return await response.json();
}

export async function fetchData<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: Record<string, any>
): Promise<T> {
    const fullUrl = `${serverUrl}/${url}`
    console.log('fetchData fullUrl', fullUrl);
    const response = await fetch(fullUrl, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    return await response.json();
}

export function calculateOffset(currentPage: string) {
    return (Number(currentPage) - 1) * ARTICLES_PER_PAGE;
}

export function convertParamsToQueryString(params: Record<string, any>): string {
    return Object.keys(params)
        .map((key) => {
            if (params[key] !== undefined) {
                console.log('key', key);
                console.log('encodeURIComponent(params[key]', encodeURIComponent(params[key]));
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
            } 
        })
        .join('&');

}


export const createPageURL = (
    params: URLSearchParams,
    pathname: string,
    setKey: string,
    setValue: string) => {

    params.set(setKey, setValue.toString());
    return `${pathname}?${params.toString()}`;
};
