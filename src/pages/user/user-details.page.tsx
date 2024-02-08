import React from 'react';
import { useParams } from 'react-router-dom';
import UserDetailsTemplate from '../../components/template-user-details/user-details.template';
import { useAxios } from '../../hooks/use-axios';
import { User, UserDetailsResponse } from './request-types';

const UserDetailsPage = (): React.ReactElement => {
  const { id: userId } = useParams();

  const {
    response: userDetailsResponse,
    error: userDetailsError,
    loading,
  } = useAxios<undefined, UserDetailsResponse>({
    method: 'GET',
    url: `/api/v1/users/${userId}`,
  });

  if (userDetailsError) {
    console.log(userDetailsError);
  }

  const userData = userDetailsResponse?.user;

  return (
    <UserDetailsTemplate
      loading={loading}
      onUpdateUser={console.log}
      userData={userData as User}
    />
  );
};

export default UserDetailsPage;
