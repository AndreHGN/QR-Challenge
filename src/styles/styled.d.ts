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

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FontSizes = 'tertiary' | 'secondary' | 'primary' | 'header';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Colors, string>;
    fonts: {
      regular: string;
      semibold: string;
      bold: string;
    };
    fontWeights: Record<FontWeights, string>;
    fontSizes: Record<FontSizes, string>;
    paddings: Record<Spacing, string>;
    margins: Record<Spacing | 'auto', string>;
    avatarSizes: Record<AvatarSizes, string>;
  }
}
