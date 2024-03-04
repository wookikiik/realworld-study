'use client'
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import UserInfo from "../ui/userInfo";

type Inputs = {
  email: string
  password: string
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <ul className="error-messages">
                {errors && Object.entries(errors).map(([key, error]) => (
                  <li key={key}>{error.message}</li>
                ))}
              </ul>
              <UserInfo />
              {/* <fieldset className="form-group">
                <input className="form-control form-control-lg"
                  type="text" placeholder="Email"
                  {...register("email", { required: "email required" })} />
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="password" placeholder="Password"
                  {...register("password", { required: "password required" })} />
              </fieldset> */}
              <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
