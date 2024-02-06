import { css, styled } from 'styled-components';
import { Property } from 'csstype';
import { Spacing } from '../../styles/styled';

export interface MarginProps {
  $m?: Spacing;
  $mx?: Spacing;
  $my?: Spacing;
  $mt?: Spacing;
  $mr?: Spacing;
  $mb?: Spacing;
  $ml?: Spacing;
}

export interface PaddingProps {
  $p?: Spacing;
  $px?: Spacing;
  $py?: Spacing;
  $pt?: Spacing;
  $pr?: Spacing;
  $pb?: Spacing;
  $pl?: Spacing;
}

export interface LayoutProps extends MarginProps, PaddingProps {
  $display?: Property.Display;
  $alignItems?: Property.AlignItems;
  $justifyContent?: Property.JustifyContent;
  $flex?: Property.Flex;
  $flexDirection?: Property.FlexDirection;
  $flexWrap?: Property.FlexWrap;
  $gap?: Property.Gap;
  $width?: string;
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
      flex-direction: ${props.$flexDirection};
      flex-wrap: ${props.$flexWrap || 'nowrap'};
      gap: ${props.$gap};
      width: ${props.$width};
    `;
  }}
`;

const defineSpacingValues = (
  themePropertyMeasurements: Record<Spacing, string>,
  all?: Spacing,
  xAxis?: Spacing,
  yAxis?: Spacing,
  top?: Spacing,
  right?: Spacing,
  bottom?: Spacing,
  left?: Spacing,
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
