'use client';

import { loginAction } from '@/app/lib/actions';
import { SignInForm } from '@/app/lib/definitions';
import Link from 'next/link';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';

export default function Page() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>();

  const onSubmit: SubmitHandler<SignInForm> = async (formData) => {
    await loginAction(formData);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>

            <Errors errors={errors} />

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="form-group">
                <input
                  {...register('email', {
                    required: 'Email Address is required',
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  })}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const Errors = ({ errors }: { errors: FieldErrors<SignInForm> }) => {
  if (!errors) {
    return null;
  }
  return (
    <ul className="error-messages">
      {errors.email?.type === 'required' && <li>{errors.email.message}</li>}
      {errors.email?.type === 'pattern' && <li>올바른 형식</li>}
      {errors.password && <li>{errors.password.message}</li>}
    </ul>
  );
};
