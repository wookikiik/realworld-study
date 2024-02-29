import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type FieldProps<FORM extends FieldValues> = {
  label: Path<FORM>;
  register: UseFormRegister<FORM>;
};

export function EmailInput<FORM extends FieldValues>({
  label,
  register,
}: FieldProps<FORM>) {
  return (
    <input
      className="form-control form-control-lg"
      type="email"
      placeholder="Email"
      {...register(label, { required: "Email is required." })}
    />
  );
}

export function PasswordInput<FORM extends FieldValues>({
  label,
  register,
}: FieldProps<FORM>) {
  return (
    <input
      className="form-control form-control-lg"
      type="password"
      placeholder="Password"
      {...register(label, { required: "Password is required." })}
    />
  );
}
