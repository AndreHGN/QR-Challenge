import { useNavigate } from 'react-router-dom';
import { UserFormData } from '../../../components/organism-user-form/user-form.component';
import { useAxios } from '../../../hooks/use-axios';
import { AddUserInput, User } from '../request-types';

interface AddUserReturn {
  error?: Error;
  loading: boolean;
  onAddUser: (user: UserFormData) => void;
}

export const addUser = (): AddUserReturn => {
  const navigate = useNavigate();
  const {
    error,
    loading,
    makeRequest: addUserDetailsRequest,
  } = useAxios<AddUserInput, User>();

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

    addUserDetailsRequest(
      {
        method: 'POST',
        url: '/api/v1/users',
        data: userInput,
      },
      () => navigate('/users'),
    );
  };

  return { error, loading, onAddUser: handleRequest };
};
