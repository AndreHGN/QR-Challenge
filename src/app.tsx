import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './pages/routes';

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
