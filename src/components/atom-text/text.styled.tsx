import { styled } from 'styled-components';
import { Colors, FontSizes, FontWeights } from '../../styles/styled';

interface TextProps {
  color?: Colors;
  $weight?: FontWeights;
  $fontSize?: FontSizes;
}

const Text = styled.p<TextProps>`
  height: 100%;
  font-size: ${({ $fontSize, theme }) =>
    $fontSize ? theme.fontSizes[$fontSize] : theme.fontSizes.primary};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-weight: ${({ $weight, theme }) =>
    $weight ? theme.fontWeights[$weight] : theme.fontWeights.normal};
`;

export default Text;
