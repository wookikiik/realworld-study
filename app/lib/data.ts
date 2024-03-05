// Define an asynchronous function to fetch data

import { SignInForm, User } from '@/app/lib/definitions';

export const login = async (payload: SignInForm): Promise<User> => {
  return {
    email: payload.email,
    name: 'Test',
    bio: '',
    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
    token:
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYTlmYzkxZS1jNDcxLTQzYmEtOTVmZi1kYzNjZmQzMTg2Y2YiLCJleHAiOjE3MDk1NzQ0MjJ9.LPFigzOobpPhjLRuZ4ZOo8V4OTcMQ6ib8gdyeBz7XZGX8fe-kzRHAtKeX65-QESD46R0gMa1i6xzEc3E9Nr1BA',
  };
  // const data = await fetch('http://localhost:8080/users/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(payload),
  // });

  // if (!data.ok) {
  //   return null;
  // }

  // return await data.json();
};
