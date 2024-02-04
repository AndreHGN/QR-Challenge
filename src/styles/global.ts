import { createGlobalStyle } from 'styled-components';
import { FontFace } from './fonts';

const GlobalStyle = createGlobalStyle`
  ${FontFace}

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => `${theme.fonts.regular}, ${theme.fonts.semibold}, ${theme.fonts.bold}, sans-serif`};
  }
`;

export default GlobalStyle;
