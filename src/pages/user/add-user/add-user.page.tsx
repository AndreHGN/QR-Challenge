import React from 'react';
import AddUserTemplate from '../../../components/template-add-user/add-user.template';
import { UserFormData } from '../../../components/organism-user-form/user-form.component';
import { addUser } from './post-user.request';
import { toast } from 'react-toastify';

const AddUserPage = (): React.ReactElement => {
  const { error, loading, onAddUser } = addUser();

  const handleAddUser = (user: UserFormData) => {
    onAddUser(user);
  };

  if (error) {
    toast(error.message, { type: 'error' });
  }

  return <AddUserTemplate onAddUser={handleAddUser} loading={loading} />;
};

export default AddUserPage;
