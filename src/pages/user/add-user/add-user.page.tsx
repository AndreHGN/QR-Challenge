import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddUserTemplate from '../../../components/template-add-user/add-user.template';
import axios from 'axios';
import { UserDetailsRequestInput } from '../request-types';
import { UserFormData } from '../../../components/organism-user-form/user-form.component';

const AddUserPage = (): React.ReactElement => {
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleAddUser = (userData: UserFormData) => {
    setLoading(true);

    const userInput: UserDetailsRequestInput = {
      user: {
        name: userData.name,
        email: userData.email,
        admission_date: userData.date,
        job_title: userData.jobTitle,
        photo_url: userData.avatar,
      },
    };

    axios
      .request({
        method: 'POST',
        url: '/api/v1/users',
        headers: {
          Accept: '*/*',
        },
        data: userInput,
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
