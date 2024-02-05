import { RouteObject } from 'react-router-dom';
import UserListPage from './user-list.page';
import UserDetailsPage from './user-details.page';

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
    ],
  },
];

export default userRoutes;
