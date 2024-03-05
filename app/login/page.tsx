'use client'
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import InputName from "@/app/ui/inputName";
import {UserAuthInfo} from "@/app/types";
import InputEmail from "@/app/ui/inputEmail";

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
              <InputName name="name" register={register}/>
              <InputEmail name="email" register={register}/>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
