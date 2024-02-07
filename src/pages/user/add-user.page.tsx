import React, { useState } from 'react';
import AddUserTemplate from '../../components/template-add-user/add-user.template';
import { UserInput } from './requests/add-user.request';
import { useAxiosCallback } from '../../hooks/use-axios';

const AddUserPage = (): React.ReactElement => {
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const addUserRequest = useAxiosCallback<UserInput>();

  const handleAddUser = (user: UserInput) => {
    setLoading(true);
    addUserRequest({
      method: 'POST',
      url: '/api/v1/users',
      headers: {
        Accept: '*/*',
      },
      data: user,
    })
      .then(() => {})
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  if (error) {
    console.log(error.message);
  }

  return <AddUserTemplate onAddUser={handleAddUser} loading={loading} />;
};

export default AddUserPage;
