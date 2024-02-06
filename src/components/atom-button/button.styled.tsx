import styled, { css } from 'styled-components';
import { ButtonSizes, ButtonActions, FontWeights } from '../../styles/styled';
import { DefaultTheme, RuleSet } from 'styled-components/dist/types';

interface ButtonProps {
  action: ButtonActions;
  size?: ButtonSizes;
  width?: string;
  fontWeight?: FontWeights;
}

const mapButtonSizeToFontSize = (theme: DefaultTheme) => {
  return {
    sm: theme.fontSizes.secondary,
    md: theme.fontSizes.primary,
    lg: theme.fontSizes.header,
  };
};

const mapButtonActionToColors = (theme: DefaultTheme) => {
  const colorStyles: Record<ButtonActions, RuleSet> = {
    primary: css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    `,
    secondary: css`
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.primary};
    `,
    danger: css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.danger};
      border-color: ${theme.colors.danger};
    `,
    success: css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.success};
      border-color: ${theme.colors.success};
    `,
  };

  return colorStyles;
};

const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => `${theme.paddings.sm} ${theme.paddings.md}`};
  border: 1px solid;
  border-radius: 8px;
  width: ${({ width }) => width || 'auto'};
  cursor: pointer;
  position: relative;

  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ? theme.fontWeights[fontWeight] : theme.fontWeights.normal};

  font-size: ${({ size, theme }) =>
    size ? mapButtonSizeToFontSize(theme)[size] : theme.fontSizes.primary};

  ${({ action, theme }) => mapButtonActionToColors(theme)[action]};

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    content: ' ';
  }

  &:hover::before {
    background-color: currentColor;
    opacity: 0.2;
  }
`;

export default Button;
