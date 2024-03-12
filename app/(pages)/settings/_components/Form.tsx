"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserWithoutToken, ProfileForm } from "@/app/lib/definitions";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ErrorMessages } from "@/app/ui/components";
import { normalizeFormErrors } from "@/app/lib/utils";
import { updateProfile } from "@/app/lib/actions";

const schema = z.object({
  image: z.string().url(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  bio: z.string().optional(),
  email: z.string().email("Email must be a valid email address"),
  password: z
    .string()
    .optional()
    .refine((value) => !value || value.length >= 5, {
      message: "Password must be at least 5 characters long",
    }),
});

export default function Form({ profile }: FormProps) {
  const [errors, setErrors] = useState<string[]>([]);

  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<ProfileForm>({
    defaultValues: profile,
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    // console.log(formErrors);
    setErrors(normalizeFormErrors(formErrors));
  }, [formErrors]);

  const action: () => void = handleSubmit(async (data: ProfileForm) => {
    const errors = await updateProfile(data);
    errors && setErrors(errors);
  });

  return (
    <>
      <ErrorMessages messages={errors} />
      <form onSubmit={action}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="URL of profile picture"
              {...register("image")}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Your Name"
              {...register("username")}
            />
          </fieldset>
          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows={8}
              placeholder="Short bio about you"
              {...register("bio")}
            ></textarea>
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="New Password"
              {...register("password")}
            />
          </fieldset>
          <button className="btn btn-lg btn-primary pull-xs-right">
            Update Settings
          </button>
        </fieldset>
      </form>
    </>
  );
}

type FormProps = {
  profile: UserWithoutToken;
};
