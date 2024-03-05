"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { signIn } from "@/app/lib/actions";
import { SigninForm } from "@/app/lib/definitions";
import { normalizeFormErrors } from "@/app/lib/utils";
import { ErrorMessages } from "@/app/ui/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../_lib/fields";
import { useEffect, useState } from "react";

// Using zod to validate the form
const schema = z
  .object({
    email: z.string().email("Email must be a valid email address"),
    password: z
      .string()
      .trim()
      .min(5, "Password must be at least 5 characters long"),
  })
  .required();

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting },
  } = useForm<SigninForm>({
    resolver: zodResolver(schema),
  });

  // TODO: error 상태 관리
  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    setErrors(normalizeFormErrors(formErrors))
  }, [formErrors])


  const actionSignIn: () => void = handleSubmit(async (data: SigninForm) => {
    const error = await signIn(data);
    error && setErrors([error]);
  });

  return (
    <>
      <h1 className="text-xs-center">Sign in</h1>
      <p className="text-xs-center">
        <Link href="/register">Need an account?</Link>
      </p>

      <ErrorMessages messages={errors} />

      <form onSubmit={actionSignIn}>
        <InputField placeholder="Email" register={register("email")} />
        <InputField
          type="password"
          placeholder="Password"
          register={register("password")}
        />
        <LoginButton isSubmitting={isSubmitting} />
      </form>
    </>
  );
}

function LoginButton({isSubmitting}: {isSubmitting: boolean}){
  return (
    <button aria-disabled={isSubmitting} disabled={isSubmitting} type="submit" className="btn btn-lg btn-primary pull-xs-right">
      Sign in
    </button>
  )
}