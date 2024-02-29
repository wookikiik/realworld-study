"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "@/app/lib/actions";
import { SigninForm } from "@/app/lib/definitions";
import { normalizeFormErrors } from "@/app/lib/utils";
import { ErrorMessages } from "@/app/ui/components";
import { EmailInput, PasswordInput } from "../_lib/fields";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>();

  const actionSignIn: () => void = handleSubmit(async (data: SigninForm) => {
    await signIn(data);
  });

  return (
    <>
      <h1 className="text-xs-center">Sign in</h1>
      <p className="text-xs-center">
        <Link href="/register">Need an account?</Link>
      </p>

      <ErrorMessages messages={normalizeFormErrors(errors)} />

      <form onSubmit={actionSignIn}>
        <fieldset className="form-group">
          <EmailInput label="email" register={register} />
        </fieldset>
        <fieldset className="form-group">
          <PasswordInput label="password" register={register} />
        </fieldset>
        <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
          Sign in
        </button>
      </form>
    </>
  );
}
