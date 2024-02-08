import { toast } from 'react-toastify';
import { useAxiosOutput, useAxios } from '../../../hooks/use-axios';
import { CommentsResponse } from '../request-types';

export const getUserComments = (
  userId: string,
): useAxiosOutput<undefined, CommentsResponse> => {
  const { error, ...output } = useAxios<undefined, CommentsResponse>({
    method: 'GET',
    url: `/api/v1/users/${userId}/comments`,
  });

  if (error) {
    toast(error.message, { type: 'error' });
  }

  return { error, ...output };
};
