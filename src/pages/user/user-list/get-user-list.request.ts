import { useAxiosOutput, useAxios } from '../../../hooks/use-axios';
import { UserListResponse } from '../request-types';

export const getUserList = (): useAxiosOutput<undefined, UserListResponse> => {
  return useAxios<undefined, UserListResponse>({
    method: 'GET',
    url: '/api/v1/users',
  });
};
