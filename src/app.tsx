import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Navbar from './components/organism-navbar/navbar.component';
import PageWrapper from './app.styled';
import CustomToastContainer from './components/atom-toast-container/custom-toast-container.component';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <PageWrapper>
          <Outlet />
        </PageWrapper>
        <CustomToastContainer
          position='bottom-center'
          autoClose={5000}
          theme='colored'
          closeOnClick
        />
      </ThemeProvider>
    </>
  );
};

export default App;
