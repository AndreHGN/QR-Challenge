import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Navbar from './components/organism-navbar/navbar.component';
import PageWrapper from './app.styled';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
