import { useAxiosOutput, useAxios } from '../../../hooks/use-axios';
import { CommentsResponse } from '../request-types';

export const getUserComments = (
  userId: string,
): useAxiosOutput<undefined, CommentsResponse> => {
  return useAxios<undefined, CommentsResponse>({
    method: 'GET',
    url: `/api/v1/users/${userId}/comments`,
  });
};
