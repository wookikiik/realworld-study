'use client'
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import type { UserAuthInfo } from "../lib/definitions";
import InputPassword from "@/app/ui/inputPassword";
import ErrorMessages from "@/app/ui/errorMessages";
import InputEmail from "../ui/inputEmail";
import { signIn } from "../lib/actions";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthInfo>()

  const onSubmit: SubmitHandler<UserAuthInfo> = async (data) => {        
    await signIn(data);    
  }

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
              {errors && <ErrorMessages errors={errors} />}
              <InputEmail name="email" register={register}/>
              <InputPassword name="password" register={register}/>
              <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
