import { DefaultTheme } from 'styled-components';
import { Spacing } from './styled';

const spacing: Spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

const theme: DefaultTheme = {
  colors: {
    primary: '#4059AD',
    secondary: '#6B9AC4',
    black: '#272727',
    white: '#F7F7F7',
    danger: '#CC2936',
    success: '#97D8C4',
  },
  fonts: {
    regular: 'Source-Sans-3',
    semibold: 'Source-Sans-3-Semibold',
    bold: 'Source-Sans-3-Bold',
  },
  paddings: spacing,
  margins: spacing,
};

export default theme;
