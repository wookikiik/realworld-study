import {Path, UseFormRegister} from "react-hook-form"
import {UserAuthInfo} from "@/app/types";

type InputEmail = {
    name: Path<UserAuthInfo>
    register: UseFormRegister<UserAuthInfo>
}

export default function InputEmail({name, register}: InputEmail) {
    return (
        <fieldset className="form-group">
            <input className="form-control form-control-lg"
                   type="password" placeholder="Email"
                   {...register(name, { required: "email required" })} />
        </fieldset>
    )
}