import { RouteObject } from 'react-router-dom';
import UserListPage from './user-list/user-list.page';
import UserDetailsPage from './user-details/user-details.page';
import AddUserPage from './add-user/add-user.page';

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
