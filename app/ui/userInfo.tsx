import { useForm } from "react-hook-form"
export default function UserInfo({ hasUserName = false}) {

    type Inputs = {
        email: string
        password: string
        username?: string
    }

    const {
        register,
    } = useForm<Inputs>()
    return (
        <>
            {hasUserName && <fieldset className="form-group">
                <input className="form-control form-control-lg"
                    type="text" placeholder="Username"
                    {...register("username", { required: "username required" })} />
            </fieldset>}

            <fieldset className="form-group">
                <input className="form-control form-control-lg"
                    type="text" placeholder="Email"
                    {...register("email", { required: "email required" })} />
            </fieldset>
            <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password"
                    {...register("password", { required: "password required" })} />
            </fieldset>
        </>
    )
}