import 'styled-components';

export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'danger'
  | 'success';

export type FontWeights = 'normal' | 'semibold' | 'bold';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Colors, string>;
    fonts: {
      regular: string;
      semibold: string;
      bold: string;
    };
    fontWeights: Record<FontWeights, string>;
    paddings: Record<Spacing, string>;
    margins: Record<Spacing | 'auto', string>;
  }
}
