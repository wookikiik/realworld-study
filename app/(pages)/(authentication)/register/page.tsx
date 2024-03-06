"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { signUp } from "@/app/lib/actions";
import { SignupForm } from "@/app/lib/definitions";
import { normalizeFormErrors } from "@/app/lib/utils";
import { ErrorMessages } from "@/app/ui/components";

export default function Page() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors: formErrors },
  } = useForm<SignupForm>();

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setErrors(normalizeFormErrors(formErrors));
  }, [formErrors]);

  const actionSignup: () => void = handleSubmit(async (form: SignupForm) => {
    const errors = await signUp(form);
    errors && setErrors(errors);
  });

  const usernameField = register(
    "username", //
    // {
    //   required: "Username is required.",
    // },
  );

  const emailField = register(
    "email", //
    // {
    //   required: "Email is required.",
    //   pattern: {
    //     value: /\S+@\S+\.\S+/,
    //     message: "Email must be a valid email address.",
    //   },
    // },
  );

  const passwordField = register(
    "password", //
    // {
    //   required: "Password is required.",
    //   minLength: {
    //     value: 5,
    //     message: "Password must be at least 5 characters long.",
    //   },
    // },
  );

  return (
    <>
      <h1 className="text-xs-center">Sign up</h1>
      <p className="text-xs-center">
        <Link href="/login">Have an account?</Link>
      </p>

      <ErrorMessages messages={errors} />

      <form onSubmit={actionSignup}>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Username"
            {...usernameField}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            {...emailField}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            {...passwordField}
          />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right">
          Sign up
        </button>
      </form>
    </>
  );
}
