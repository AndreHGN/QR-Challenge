import React from 'react';
import AddUserTemplate from '../../../components/template-add-user/add-user.template';
import { UserFormData } from '../../../components/organism-user-form/user-form.component';
import { addUser } from './post-user.request';

const AddUserPage = (): React.ReactElement => {
  const { error, loading, onAddUser } = addUser();

  const handleAddUser = (user: UserFormData) => {
    onAddUser(user);
  };

  if (error) {
    console.log(error.message);
  }

  return <AddUserTemplate onAddUser={handleAddUser} loading={loading} />;
};

export default AddUserPage;
