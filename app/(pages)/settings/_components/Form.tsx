"use client";

import { UserWithoutToken, Profile } from "@/app/lib/definitions";
import { useForm } from "react-hook-form";

export default function Form({ profile }: FormProps) {
  const {
    register,
    formState: { errors },
  } = useForm<Profile>({
    defaultValues: profile,
  });

  return (
    <>
      <ul className="error-messages">
        <li>That name is required</li>
      </ul>

      <form>
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
