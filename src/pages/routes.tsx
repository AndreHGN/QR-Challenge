import { RouteObject } from 'react-router-dom';
import NotFoundPage from './not-found/not-found.page';
import userRoutes from './user/user-routes';
import App from '../app';
import HomePage from './home/home.page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      ...userRoutes,
    ],
  },
];

export default routes;
