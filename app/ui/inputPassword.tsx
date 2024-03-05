import {Path, UseFormRegister} from "react-hook-form"
import {UserAuthInfo} from "@/app/types";

type InputPassword = {
    name: Path<UserAuthInfo>
    register: UseFormRegister<UserAuthInfo>
}

export default function InputPassword({name, register}: InputPassword) {
    return (
        <fieldset className="form-group">
            <input className="form-control form-control-lg"
                   type="password" placeholder="Password"
                   {...register(name, { required: "Password required" })} />
        </fieldset>
    )
}