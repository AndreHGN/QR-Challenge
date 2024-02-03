import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import routes from './pages/routes';
import PageRoutes from './pages/routes';
import HomePage from './pages/home/home.page';
import UserListPage from './pages/user/user-list.page';
import UserDetailsPage from './pages/user/user-details.page';

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <>
      <h1>App</h1>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
