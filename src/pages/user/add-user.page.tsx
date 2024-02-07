import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddUserTemplate from '../../components/template-add-user/add-user.template';
import axios from 'axios';
import { UserDetailsRequestInput } from './request-type';

const AddUserPage = (): React.ReactElement => {
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleAddUser = (user: UserDetailsRequestInput) => {
    setLoading(true);
    axios
      .request({
        method: 'POST',
        url: '/api/v1/users',
        headers: {
          Accept: '*/*',
        },
        data: user,
      })
      .then(() => {
        navigate('/users');
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (error) {
    console.log(error.message);
  }

  return <AddUserTemplate onAddUser={handleAddUser} loading={loading} />;
};

export default AddUserPage;
