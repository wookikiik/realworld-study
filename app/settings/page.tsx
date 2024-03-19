'use server';
import Form from "./components/form"
import { getCurrentUser } from "../data";
import { UserAuthInfo } from "../lib/definitions";
import LogoutButton from "./components/logoutButton";

export default async function Page() {
    
    const data = await getCurrentUser();    
    const userInfo = data.user as UserAuthInfo;
    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings
                        </h1>
                        <hr />
                        <Form info={userInfo}/>
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
    )
}