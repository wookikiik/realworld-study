"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { signUp } from "@/app/lib/actions";
import { SignupForm } from "@/app/lib/definitions";
import { normalizeFormErrors } from "@/app/lib/utils";
import { ErrorMessages } from "@/app/ui/components";
import { EmailInputField, UsernameInputField } from "../_lib/fields";

export default function Page() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupForm>();

  const actionSignup: () => void = handleSubmit(async (data: SignupForm) => {
    await signUp(data);
  });

  return (
    <>
      <h1 className="text-xs-center">Sign up</h1>
      <p className="text-xs-center">
        <Link href="/login">Have an account?</Link>
      </p>

      <ErrorMessages messages={normalizeFormErrors(errors)} />

      <form onSubmit={actionSignup}>
        <UsernameInputField
          register={register("username", { required: "Username is required." })}
        />
        <EmailInputField
          register={register("email", {
            required: "Email is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email must be a valid email address.",
            },
          })}
        />
        <fieldset className="form-group">
          {/* space value trimmed */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required.",
              minLength: {
                value: 5,
                message: "Password must be at least 5 characters long.",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                className="form-control form-control-lg"
                placeholder="Password"
                onChange={(e) => field.onChange(e.target.value.trim())}
              />
            )}
          />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right">
          Sign up
        </button>
      </form>
    </>
  );
}
