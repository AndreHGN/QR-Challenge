import styled from 'styled-components';
import { Colors, Spacing } from '../../styles/styled';

interface CardProps {
  noBorder?: boolean;
  $backgroundColor?: Colors;
  $width?: string;
  $padding?: Spacing;
}

const Card = styled.div<CardProps>`
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.colors[$backgroundColor] : theme.colors.lightGray};
  border: 1px solid
    ${({ theme, $backgroundColor }) =>
      $backgroundColor
        ? theme.colors[$backgroundColor]
        : theme.colors.lightGray};
  border-radius: 8px;
  width: ${({ $width }) => $width || '100%'};
  padding: ${({ theme, $padding }) =>
    $padding ? theme.paddings[$padding] : theme.paddings.md};
`;

export default Card;
