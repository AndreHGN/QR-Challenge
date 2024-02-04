import { css, styled } from 'styled-components';
import { Property } from 'csstype';
import { Spacing, SpacingSize } from '../../styles/styled';

export interface MarginProps {
  $m?: SpacingSize;
  $mx?: SpacingSize;
  $my?: SpacingSize;
  $mt?: SpacingSize;
  $mr?: SpacingSize;
  $mb?: SpacingSize;
  $ml?: SpacingSize;
}

export interface PaddingProps {
  $p?: SpacingSize;
  $px?: SpacingSize;
  $py?: SpacingSize;
  $pt?: SpacingSize;
  $pr?: SpacingSize;
  $pb?: SpacingSize;
  $pl?: SpacingSize;
}

export interface LayoutProps extends MarginProps, PaddingProps {
  $display?: Property.Display;
  $alignItems?: Property.AlignItems;
  $justifyContent?: Property.JustifyContent;
  $flex?: Property.Flex;
  $gap?: Property.Gap;
}

const Layout = styled.div<LayoutProps>`
  ${(props) => {
    const theme = props.theme;

    const margin = defineSpacingValues(
      theme.margins,
      props.$m,
      props.$mx,
      props.$my,
      props.$mt,
      props.$mr,
      props.$mb,
      props.$ml,
    );

    const padding = defineSpacingValues(
      theme.paddings,
      props.$p,
      props.$px,
      props.$py,
      props.$pt,
      props.$pr,
      props.$pb,
      props.$pl,
    );

    return css`
      margin: ${margin};
      padding: ${padding};
      display: ${props.$display};
      align-items: ${props.$alignItems};
      justify-content: ${props.$justifyContent};
      flex: ${props.$flex};
      gap: ${props.$gap};
    `;
  }}
`;

const defineSpacingValues = (
  themePropertyMeasurements: Spacing,
  all?: SpacingSize,
  xAxis?: SpacingSize,
  yAxis?: SpacingSize,
  top?: SpacingSize,
  right?: SpacingSize,
  bottom?: SpacingSize,
  left?: SpacingSize,
) => {
  const xAxisValue = xAxis && themePropertyMeasurements[xAxis];
  const yAxisValue = yAxis && themePropertyMeasurements[yAxis];

  const rightValue = xAxisValue
    ? xAxisValue
    : right && themePropertyMeasurements[right];
  const leftValue = xAxisValue
    ? xAxisValue
    : left && themePropertyMeasurements[left];

  const topValue = yAxisValue
    ? yAxisValue
    : top && themePropertyMeasurements[top];
  const bottomValue = yAxisValue
    ? yAxisValue
    : bottom && themePropertyMeasurements[bottom];

  return all
    ? themePropertyMeasurements[all]
    : `${topValue || '0'} ${rightValue || '0'} ${bottomValue || '0'} ${leftValue || '0'}`;
};

export default Layout;
