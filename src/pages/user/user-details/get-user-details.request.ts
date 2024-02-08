import { toast } from 'react-toastify';
import { useAxiosOutput, useAxios } from '../../../hooks/use-axios';
import { UserDetailsResponse } from '../request-types';

export const getUserDetails = (
  userId: string,
): useAxiosOutput<undefined, UserDetailsResponse> => {
  const { error, ...output } = useAxios<undefined, UserDetailsResponse>({
    method: 'GET',
    url: `/api/v1/users/${userId}`,
  });

  if (error) {
    toast(error.message, { type: 'error' });
  }

  return { error, ...output };
};
