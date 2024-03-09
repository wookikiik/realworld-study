'use client'
import Link from "next/link";
import InputName from "@/app/ui/inputName";
import InputPassword from "@/app/ui/inputPassword";
import InputEmail from "@/app/ui/inputEmail";
import { SubmitHandler, useForm } from "react-hook-form";
import type { UserAuthInfo } from "../lib/definitions";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthInfo>()

  const onSubmit: SubmitHandler<UserAuthInfo> = (data) => console.log(data)

  return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link href="/login">Have an account?</Link>
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <ul className="error-messages">
                  {errors && Object.entries(errors).map(([key, error]) => (
                      <li key={key}>{error.message}</li>
                  ))}
                </ul>
                <InputName name="name" register={register}/>
                <InputEmail name={"email"} register={register} />
                <InputPassword name={"password"} register={register}/>
                <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
