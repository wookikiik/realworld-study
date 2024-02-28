
import { auth } from '@/auth';
import { UserWithOptionalToken } from '../definitions';

export async function useAuth() {
    const user = await getSessionUser();
    return { 
        user, 
        isLogined: isLogined(user) 
    };
}

async function getSessionUser(){
    return {
        name: "Eric Simons",
        email: "wmoo.heo@test.com",
        image: 'http://i.imgur.com/Qr71crq.jpg'
    }
    // const session = await auth();
    // const user = session?.user as UserWithOptionalToken | undefined;
    // !!user && delete user.token;
    // return user;
}

function isLogined(user: UserWithOptionalToken | undefined){
    return !!user;
}