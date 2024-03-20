'use client';

import { useEffect, useState } from 'react';
import { ZodError } from 'zod';

/**
 * @deprecated
 */
export default function Error({ error }: { error: Error }) {
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  useEffect(() => {
    if (error instanceof ZodError) {
      setErrorMessage([error.message]);
    }
  }, [error]);

  return <div>{errorMessage}</div>;
}
