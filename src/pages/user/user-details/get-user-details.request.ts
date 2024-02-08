import { useAxiosOutput, useAxios } from '../../../hooks/use-axios';
import { UserDetailsResponse } from '../request-types';

export const getUserDetails = (
  userId: string,
): useAxiosOutput<undefined, UserDetailsResponse> => {
  return useAxios<undefined, UserDetailsResponse>({
    method: 'GET',
    url: `/api/v1/users/${userId}`,
  });
};
