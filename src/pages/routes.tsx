import { RouteObject } from 'react-router-dom';
import HomePage from './home/home.page';
import NotFoundPage from './not-found/not-found.page';
import userRoutes from './user/user-routes';

const basicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

const routes = [...basicRoutes, ...userRoutes];

export default routes;
