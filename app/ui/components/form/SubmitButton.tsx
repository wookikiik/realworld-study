'use client';

import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  className?: string;
  children: React.ReactNode;
}
export const SubmitButton = ({ className, children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={clsx(className)}>
      {children}
    </button>
  );
};
