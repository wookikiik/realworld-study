import { auth } from '@/auth';
import { SystemError } from '../errors';

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const _successHandler = async (response: Response) => {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
   */
  if (response.status === 204) {
    return Promise.resolve();
  }

  return await response.json();
};
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
const _requestLog = (url: string, options: any) => {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `[Request] (${options.method}) ${BASE_API_URL}${url}`
  );
};
const _responseLog = (url: string, options: any, response: Response) => {
  if (response.ok) {
    console.log(
      '\x1b[32m%s\x1b[0m',
      `[Response: ${response.status}] (${options.method}) ${BASE_API_URL}${url}`
    );
  } else {
    console.log(
      '\x1b[31m%s\x1b[0m',
      `[Response: ${response.status}] - Error!! (${options.method}) ${BASE_API_URL}${url}`
    );
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
    _requestLog(url, _options);
    const response = await fetch(`${BASE_API_URL}${url}`, _options);
    _responseLog(url, _options, response);

    if (response.ok) {
      return _successHandler(response);
    }

    return _errorHandler(response);
  } catch (error) {
    console.log(error);
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
