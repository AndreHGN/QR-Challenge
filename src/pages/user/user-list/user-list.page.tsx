import React from 'react';
import UserListTemplate from '../../../components/template-user-list/user-list.template';
import { Users } from '../request-types';
import { getUserList } from './get-user-list.request';
import { toast } from 'react-toastify';

const UserListPage = (): React.ReactElement => {
  const { response, error, loading } = getUserList();

  if (error) {
    toast(error.message, { type: 'error' });
  }

  const userListData = response?.users;

  return (
    <UserListTemplate userListData={userListData as Users} loading={loading} />
  );
};

export default UserListPage;
