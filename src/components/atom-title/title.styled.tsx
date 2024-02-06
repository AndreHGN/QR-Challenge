import styled from 'styled-components';
import { Colors } from '../../styles/styled';

interface TitleProps {
  color?: Colors;
}

const Title = styled.h1<TitleProps>`
  color: ${({ color, theme }) => (color ? theme.colors[color] : 'inherit')};
  font-size: ${({ theme }) => theme.fontSizes.header};
`;

export default Title;
