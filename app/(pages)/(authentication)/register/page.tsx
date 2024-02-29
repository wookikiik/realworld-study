"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "@/app/lib/actions";
import { SignupForm } from "@/app/lib/definitions";
import { normalizeFormErrors } from "@/app/lib/utils";
import { ErrorMessages } from "@/app/ui/components";
import { EmailInput, PasswordInput, UsernameInput } from "../_lib/fields";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>();

  const actionSignup: () => void = handleSubmit(async (data: SignupForm) => {
    await signIn(data);
  });

  return (
    <>
      <h1 className="text-xs-center">Sign up</h1>
      <p className="text-xs-center">
        <Link href="/login">Have an account?</Link>
      </p>

      <ErrorMessages messages={normalizeFormErrors(errors)} />

      <form onSubmit={actionSignup}>
        <fieldset className="form-group">
          <UsernameInput label="username" register={register} />
        </fieldset>
        <fieldset className="form-group">
          <EmailInput label="email" register={register} />
        </fieldset>
        <fieldset className="form-group">
          <PasswordInput label="password" register={register} />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right">
          Sign up
        </button>
      </form>
    </>
  );
}
