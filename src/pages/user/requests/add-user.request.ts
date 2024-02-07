import { useAxios } from '../../../hooks/use-axios';

export type UserOutput = {
  id: string;
  name: string;
  email: string;
  photo_url: string;
  admission_date: string;
  job_title: string;
  created_at: string;
  updated_at: string;
};

export type UserInput = {
  user: {
    name: string;
    email: string;
    photo_url?: string;
    admission_date: string;
    job_title: string;
  };
};

export const useAddUserRequest = (user: UserInput) => {
  return useAxios<UserInput, UserOutput>({
    method: 'POST',
    url: '/api/v1/users',
    data: user,
  });
};
