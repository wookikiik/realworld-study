'use client';

import { login, signUp } from '@/app/lib/actions/authenticationActions';
import { SignForm } from '@/app/lib/definitions';
import { CommonError } from '@/app/lib/errors';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormErrorMessages } from '../common/FormErrorMessages';

interface SignFormProps {
  isRegister?: boolean;
}

const Form = ({ isRegister = false }: SignFormProps) => {
  const router = useRouter();

  const {
    register,
    formState: { errors: formErrors, isSubmitting },
    handleSubmit,
  } = useForm<SignForm>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    const messages = Object.entries(formErrors).map(([_, error]) => {
      return error?.message || '';
    });
    setErrors(messages.filter((message) => message.length > 0));

    return () => setErrors([]);
  }, [formErrors]);

  const handleSignUp = async (formData: SignForm) => {
    const { errors } = await signUp(formData);

    if (errors) {
      throw new CommonError({
        messages: [...errors.email, ...errors.username],
      });
    }
  };

  const handleSignIn = async (formData: SignForm) => {
    const errorMessage = await login(formData);

    if (errorMessage) {
      throw new CommonError({
        messages: [errorMessage],
      });
    }
  };

  const onSubmit: SubmitHandler<SignForm> = async (formData) => {
    try {
      isRegister && (await handleSignUp(formData));
      await handleSignIn(formData);
      router.push('/');
    } catch (error: any) {
      error.messages && setErrors([...(error as CommonError).messages]);
    }
  };

  return (
    <>
      <FormErrorMessages errors={errors} />

      <form onSubmit={handleSubmit(onSubmit)}>
        {isRegister && (
          <fieldset className="form-group">
            <input
              disabled={isSubmitting}
              {...register('username', {
                required: 'User name is required',
              })}
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
            />
            {/* {formErrors.username?.message && (
              <ErrorMessage name="username" errors={formErrors} />
            )} */}
          </fieldset>
        )}

        <fieldset className="form-group">
          <input
            disabled={isSubmitting}
            {...register('email', {
              required: 'Email Address is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Invalid email.',
              },
            })}
            className="form-control form-control-lg"
            type="text"
            placeholder="Email"
          />
          {/* {formErrors.email?.message && (
            <ErrorMessage name="email" errors={formErrors} />
          )} */}
        </fieldset>
        <fieldset className="form-group">
          <input
            disabled={isSubmitting}
            {...register('password', { required: 'Password is required' })}
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
          />
          {/* {formErrors.password?.message && (
            <ErrorMessage name="password" errors={formErrors} />
          )} */}
        </fieldset>
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-lg btn-primary pull-xs-right"
        >
          {isRegister ? 'Sign up' : 'Sign in'}
        </button>
      </form>
    </>
  );
};

export default Form;
