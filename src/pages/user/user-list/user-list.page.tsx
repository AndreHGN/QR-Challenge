import React from 'react';
import { useAxios } from '../../../hooks/use-axios';
import UserListTemplate from '../../../components/template-user-list/user-list.template';
import { UserListResponse, Users } from '../request-types';

const UserListPage = (): React.ReactElement => {
  const { response, error, loading } = useAxios<undefined, UserListResponse>({
    method: 'GET',
    url: '/api/v1/users',
  });

  if (error) {
    console.log(error);
  }

  const userListData = response?.users;

  return (
    <UserListTemplate userListData={userListData as Users} loading={loading} />
  );
};

export default UserListPage;
