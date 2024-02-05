import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './pages/routes';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
