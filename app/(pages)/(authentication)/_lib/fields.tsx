import type { UseFormRegisterReturn } from "react-hook-form";

type FieldProps = {
  register: UseFormRegisterReturn;
};

type InputProps = {
  type?: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegisterReturn;
};

export function EmailInputField({ register }: FieldProps) {
  return <InputField placeholder="Email" register={register} />;
}

export function PasswordInputField({ register }: FieldProps) {
  return (
    <InputField type="password" placeholder="Password" register={register} />
  );
}

export function UsernameInputField({ register }: FieldProps) {
  return <InputField placeholder="Username" register={register} />;
}

export function InputField({
  type = "text",
  placeholder,
  required = true,
  register,
}: InputProps) {
  return (
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        type={type}
        placeholder={placeholder}
        required={required}
        {...register}
      />
    </fieldset>
  );
}
