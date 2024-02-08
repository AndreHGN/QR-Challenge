import React from 'react';
import UserListTemplate from '../../../components/template-user-list/user-list.template';
import { Users } from '../request-types';
import { getUserList } from './get-user-list.request';

const UserListPage = (): React.ReactElement => {
  const { response, error, loading } = getUserList();

  if (error) {
    console.log(error);
  }

  const userListData = response?.users;

  return (
    <UserListTemplate userListData={userListData as Users} loading={loading} />
  );
};

export default UserListPage;
