import styled, { css } from 'styled-components';
import {
  disabledButtonStyles,
  hightlightOnHoverStyles,
} from '../atom-button/button.styled';

export interface IconButtonStyledProps {
  $noBorder?: boolean;
  $circularButton?: boolean;
}

const IconButtonStyled = styled.button<IconButtonStyledProps>`
  ${({ $noBorder, $circularButton, theme }) => {
    const borderStyles = css`
      border: ${$noBorder ? 'none' : `1px solid ${theme.colors.black}`};
      border-radius: ${$circularButton ? '50%' : '4px'};
    `;

    return css`
      ${hightlightOnHoverStyles(borderStyles)}
      ${disabledButtonStyles}
      ${borderStyles}
    `;
  }}

  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.paddings.sm};
`;

export default IconButtonStyled;
