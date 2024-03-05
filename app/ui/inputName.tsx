import {Path, UseFormRegister} from "react-hook-form"
import {UserAuthInfo} from "@/app/types";

type InputName = {
    name: Path<UserAuthInfo>
    register: UseFormRegister<UserAuthInfo>
}

export default function InputName({name, register}: InputName) {
    return (
        <fieldset className="form-group">
            <input className="form-control form-control-lg"
                   type="text" placeholder="Username"
                   {...register(name, { required: "username required" })} />
        </fieldset>
    )
}