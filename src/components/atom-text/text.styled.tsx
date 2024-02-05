import { styled } from 'styled-components';
import { Colors, FontWeights } from '../../styles/styled';

interface TextProps {
  color?: Colors;
  $weight?: FontWeights;
}

const Text = styled.p<TextProps>`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-weight: ${({ $weight, theme }) =>
    $weight ? theme.fontWeights[$weight] : theme.fontWeights.normal};
  height: 100%;
`;

export default Text;
