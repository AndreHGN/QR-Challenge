import 'styled-components';

export type Spacing = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type SpacingSize = keyof Spacing;

export type Colors = {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  danger: string;
  success: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fonts: {
      regular: string;
      semibold: string;
      bold: string;
    };
    paddings: Spacing;
    margins: Spacing;
  }
}
