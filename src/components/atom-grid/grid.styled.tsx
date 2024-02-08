import { styled } from 'styled-components';
import { Property } from 'csstype';
import { Spacing } from '../../styles/styled';

type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';

interface ColProps {
  $colWidth: ColWidth;
}

export const Col = styled.div<ColProps>`
  display: block;
  flex-basis: ${({ $colWidth }) =>
    $colWidth !== 'auto' ? `${($colWidth / 12) * 100}%` : null};
`;

interface RowProps {
  $spacing?: Spacing;
  $justifyContent?: Property.JustifyContent;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin: -${({ theme, $spacing }) => ($spacing ? theme.paddings[$spacing] : '0')};
  justify-content: ${({ $justifyContent }) => $justifyContent};

  & ${Col} {
    padding: ${({ theme, $spacing }) =>
      $spacing ? theme.paddings[$spacing] : '0'};
  }
`;
