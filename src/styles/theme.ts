import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#4059AD',
    secondary: '#6B9AC4',
    black: '#272727',
    white: '#F7F7F7',
    danger: '#CC2936',
    success: '#007c4b',
  },
  fonts: {
    regular: 'Source-Sans-3',
    semibold: 'Source-Sans-3-Semibold',
    bold: 'Source-Sans-3-Bold',
  },
  fontWeights: {
    normal: '400',
    semibold: '600',
    bold: '700',
  },
  fontSizes: {
    tertiary: '8px',
    secondary: '12px',
    primary: '16px',
    header: '32px',
  },
  paddings: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  margins: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  avatarSizes: {
    xs: '24px',
    sm: '32px',
    md: '48px',
    lg: '80px',
    xl: '112px',
  },
};

export default theme;
