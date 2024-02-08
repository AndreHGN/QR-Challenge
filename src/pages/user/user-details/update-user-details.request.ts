import { useNavigate } from 'react-router-dom';
import { UserFormData } from '../../../components/organism-user-form/user-form.component';
import { useAxios } from '../../../hooks/use-axios';
import {
  UpdateUserDetailsInput,
  UpdateUserDetailsResponse,
} from '../request-types';
import { toast } from 'react-toastify';
import { strings } from './strings';

interface UpdateUserReturn {
  error?: Error;
  loading: boolean;
  onUpdateUser: (user: UserFormData) => void;
}

export const updateUserDetails = (userId: string): UpdateUserReturn => {
  const navigate = useNavigate();
  const {
    error,
    loading,
    makeRequest: updateUserDetailsRequest,
  } = useAxios<UpdateUserDetailsInput, UpdateUserDetailsResponse>();

  const handleRequest = (user: UserFormData) => {
    const userInput = {
      user: {
        name: user.name,
        email: user.email,
        admission_date: user.date,
        job_title: user.jobTitle,
        photo_url: user.avatar,
      },
    };

    updateUserDetailsRequest(
      {
        method: 'PUT',
        url: `/api/v1/users/${userId}`,
        data: userInput,
      },
      () => {
        navigate('/users');
        toast(strings.updateUserSuccess, { type: 'success' });
      },
    );
  };

  if (error) {
    toast(error.message, { type: 'error' });
  }

  return { error, loading, onUpdateUser: handleRequest };
};
