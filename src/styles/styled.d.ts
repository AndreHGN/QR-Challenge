import 'styled-components';

export type Spacing = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
      danger: string;
      success: string;
    };
    fonts: {
      regular: string;
      semibold: string;
      bold: string;
    };
    paddings: Spacing;
    margins: Spacing;
  }
}
