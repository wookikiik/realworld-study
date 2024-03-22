import Form from "./components/form"
import { getCurrentUser } from "../lib/actions";
import { UserAuthInfo } from "../lib/definitions";
import LogoutButton from "./components/logoutButton";
import { auth } from "@/auth";
import { getUserData } from "../data";

export default async function Page() {    
    const userInfo = await getUserData();        
    
    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings
                        </h1>
                        <Form info={userInfo} />
                        <hr />
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
    )
}