import { css, styled } from 'styled-components';
import { AvatarSizes } from '../../styles/styled';

interface AvatarStyledProps {
  size: AvatarSizes;
}

const AvatarStyled = styled.img<AvatarStyledProps>`
  ${({ size, theme }) => {
    const sizeValue = theme.avatarSizes[size];
    return css`
      vertical-align: middle;
      width: ${sizeValue};
      height: ${sizeValue};
      border-radius: 50%;
    `;
  }}
`;

export default AvatarStyled;
