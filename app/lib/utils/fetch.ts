import { auth } from '@/auth';
import { SystemError } from '../errors';

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const _errorHandler = async (response: Response) => {
  switch (response.status) {
    case 401:
    case 422:
      return await response.json();
    default:
      // TODO: 전역 에러 처리
      return Promise.reject(new SystemError());
  }
};

const _fetcher = async ({
  url,
  payload,
  options,
}: {
  url: string;
  payload?: any;
  options: any;
}) => {
  const session = await auth();

  const _options = {
    headers: {
      Authorization: `Token ${session?.user.token || ''}`,
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=utf-8',
    },
    ...options,
  };

  payload && (_options.body = JSON.stringify(payload));

  try {
    const response = await fetch(`${BASE_API_URL}${url}`, _options);

    if (response.ok) {
      return await response.json();
    }

    return _errorHandler(response);
  } catch (error) {
    return Promise.reject(new SystemError());
  }
};

const GET = async ({ url, payload }: { url: string; payload?: any }) => {
  const options = {
    method: 'GET',
  };

  return await _fetcher({
    url,
    payload,
    options,
  });
};

const POST = async ({ url, payload }: { url: string; payload?: any }) => {
  const options = {
    method: 'POST',
  };

  return await _fetcher({
    url,
    payload,
    options,
  });
};

const PUT = async ({ url, payload }: { url: string; payload?: any }) => {
  const options = {
    method: 'PUT',
  };

  return await _fetcher({
    url,
    payload,
    options,
  });
};

const PATCH = async ({ url, payload }: { url: string; payload?: any }) => {
  const options = {
    method: 'PATCH',
  };

  return await _fetcher({
    url,
    payload,
    options,
  });
};

const DELETE = async ({ url, payload }: { url: string; payload?: any }) => {
  const options = {
    method: 'DELETE',
  };
  return await _fetcher({
    url,
    payload,
    options,
  });
};

export { DELETE, GET, PATCH, POST, PUT };
