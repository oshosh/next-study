import { ApiContext, User } from '@/types';
import { fetcher } from '@/utils';

export interface SigninParams {
  username: string;
  password: string;
}

const signin = async (context: ApiContext, params: SigninParams): Promise<User> => {
  const option = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };

  const api = await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`, option);

  return api;
};

export default signin;
