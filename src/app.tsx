import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import routes from './pages/routes';
import Container from './components/atom-container/container.component';
import GlobalStyle from './styles/global';

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>Bom dia teste</Container>
        <div>Bom dia teste</div>
        <h1>App</h1>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
