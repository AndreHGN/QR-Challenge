import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#4059AD',
    secondary: '#6B9AC4',
    black: '#272727',
    darkGray: '#787878',
    gray: '#acacac',
    lightGray: '#e0e0e0',
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
    tertiary: '12px',
    secondary: '14px',
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
    xxxl: '64px',
  },
  margins: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    auto: 'auto',
  },
  avatarSizes: {
    xs: '24px',
    sm: '32px',
    md: '48px',
    lg: '80px',
    xl: '112px',
  },
  iconSizes: {
    xs: '8px',
    sm: '16px',
    md: '32px',
    lg: '48px',
    xl: '60px',
  },
};

export default theme;
