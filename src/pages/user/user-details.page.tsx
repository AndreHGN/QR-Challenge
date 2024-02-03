import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const UserDetailsPage = (): React.ReactElement => {
  const { id: userId } = useParams();

  return <div>User details {userId}</div>;
};

export default UserDetailsPage;
