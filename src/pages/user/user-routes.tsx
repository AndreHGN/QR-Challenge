import { RouteObject } from 'react-router-dom';
import UserListPage from './user-list.page';
import UserDetailsPage from './user-details.page';
import AddUserPage from './add-user.page';

const userRoutes: RouteObject[] = [
  {
    path: 'users',
    children: [
      {
        index: true,
        element: <UserListPage />,
      },
      {
        path: ':id',
        element: <UserDetailsPage />,
      },
      {
        path: 'add',
        element: <AddUserPage />,
      },
    ],
  },
];

export default userRoutes;
