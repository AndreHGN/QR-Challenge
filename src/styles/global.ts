import { createGlobalStyle } from 'styled-components';
import { FontFace } from './fonts';

const GlobalStyle = createGlobalStyle`
  ${FontFace}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => `${theme.fonts.regular}, ${theme.fonts.semibold}, ${theme.fonts.bold}, sans-serif`};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default GlobalStyle;
