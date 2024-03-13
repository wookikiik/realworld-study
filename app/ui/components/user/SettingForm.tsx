'use client';

import { updateUser } from '@/app/lib/actions/userActions';
import { UpdateUserForm, User } from '@/app/lib/definitions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormErrorMessages } from '../form/FormErrorMessages';

const settingSchema = z.object({
  image: z
    .string({
      required_error: 'Image is required',
    })
    .url({ message: 'Invalid image url' }),
  bio: z.string(),
  email: z
    .string({
      required_error: 'Email address is required',
    })
    .email('Invalid email address'),
  password: z.string(),
});
// .required(); => min

const Form = ({ user }: { user: User }) => {
  const {
    register,
    formState: { errors: formErrors, isSubmitting },
    handleSubmit,
  } = useForm<UpdateUserForm>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: zodResolver(settingSchema),
    defaultValues: {
      image: user.image || '',
      username: user?.username || '',
      bio: user?.bio || '',
      email: user?.email || '',
    },
  });

  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    const messages = Object.entries(formErrors).map(([_, error]) => {
      return error?.message || '';
    });
    setErrors(messages.filter((message) => message.length > 0));
  }, [formErrors]);

  const onSubmit: SubmitHandler<UpdateUserForm> = async (formData) => {
    const { user } = await updateUser(formData);

    if (user) {
      alert('Success!');
      return;
    }
    setErrors(['Fail!']);
  };

  return (
    <>
      <FormErrorMessages errors={errors} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <fieldset className="form-group">
            <input
              disabled={isSubmitting}
              {...register('image')}
              className="form-control"
              type="text"
              placeholder="URL of profile picture"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              disabled={true}
              {...register('username')}
              className="form-control form-control-lg"
              type="text"
              placeholder="Your Name"
            />
          </fieldset>
          <fieldset className="form-group">
            <textarea
              disabled={isSubmitting}
              {...register('bio')}
              className="form-control form-control-lg"
              rows={8}
              placeholder="Short bio about you"
            ></textarea>
          </fieldset>
          <fieldset className="form-group">
            <input
              disabled={isSubmitting}
              {...register('email')}
              className="form-control form-control-lg"
              type="text"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              disabled={isSubmitting}
              {...register('password')}
              className="form-control form-control-lg"
              type="password"
              placeholder="New Password"
            />
          </fieldset>
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-lg btn-primary pull-xs-right"
          >
            Update Settings
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
