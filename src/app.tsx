import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import routes from './pages/routes';
import Container from './components/atom-container/container.styled';
import Title from './components/atom-title/title.styled';
import GlobalStyle from './styles/global';
import Layout from './components/atom-layout/layout.styled';

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout $pt='lg' $display='flex' $justifyContent='space-between'>
          <Title>Bom dia</Title>
          <Title>Bom dia2</Title>
        </Layout>
        <Layout $pt='xs' $pr='sm' $pb='md' $pl='lg'>
          <Container>
            <Title color={theme.colors.white}>Bom dia</Title>
          </Container>
        </Layout>
        <div>Bom dia teste</div>
        <h1>App</h1>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
