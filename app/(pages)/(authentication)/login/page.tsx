"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "@/app/lib/actions";
import { SigninForm } from "@/app/lib/definitions";
import { normalizeFormErrors } from "@/app/lib/utils";
import { ErrorMessages } from "@/app/ui/components";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

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
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: zodResolver(schema),
  });

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
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Email"
            required
            {...register("email")}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />
        </fieldset>
        <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
          Sign in
        </button>
      </form>
    </>
  );
}
