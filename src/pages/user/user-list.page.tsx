import React from 'react';
import { useAxios } from '../../hooks/use-axios';

const UserListPage = (): React.ReactElement => {
  const { response, error, loading } = useAxios({
    method: 'GET',
    url: '/api/v1/users',
  });

  console.log(response);

  return <div>User list</div>;
};

export default UserListPage;
