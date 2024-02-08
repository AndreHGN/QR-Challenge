import { RouteObject } from 'react-router-dom';
import NotFoundPage from './not-found/not-found.page';
import userRoutes from './user/user-routes';
import App from '../app';
import HomePage from './home/home.page';
import GenericErrorPage from './errors/generic-error.page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <GenericErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <GenericErrorPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
        errorElement: <GenericErrorPage />,
      },
      ...userRoutes,
    ],
  },
];

export default routes;
