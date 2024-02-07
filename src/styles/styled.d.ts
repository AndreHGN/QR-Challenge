import 'styled-components';

export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export type SpacingWithAuto = Spacing | 'auto';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'darkGray'
  | 'gray'
  | 'lightGray'
  | 'white'
  | 'danger'
  | 'success';

export type FontWeights = 'normal' | 'semibold' | 'bold';

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FontSizes = 'tertiary' | 'secondary' | 'primary' | 'header';

export type ButtonActions = 'primary' | 'secondary' | 'danger' | 'success';

export type ButtonSizes = 'sm' | 'md' | 'lg';

export type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
    margins: Record<SpacingWithAuto, string>;
    avatarSizes: Record<AvatarSizes, string>;
    iconSizes: Record<IconSizes, string>;
  }
}
