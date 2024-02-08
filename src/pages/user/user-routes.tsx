import { RouteObject } from 'react-router-dom';
import UserListPage from './user-list/user-list.page';
import UserDetailsPage from './user-details/user-details.page';
import AddUserPage from './add-user/add-user.page';
import GenericErrorPage from '../errors/generic-error.page';

const userRoutes: RouteObject[] = [
  {
    path: 'users',
    children: [
      {
        index: true,
        element: <UserListPage />,
        errorElement: <GenericErrorPage />,
      },
      {
        path: ':id',
        element: <UserDetailsPage />,
        errorElement: <GenericErrorPage />,
      },
      {
        path: 'add',
        element: <AddUserPage />,
        errorElement: <GenericErrorPage />,
      },
    ],
  },
];

export default userRoutes;
