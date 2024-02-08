import styled from 'styled-components';
import { FontSizes, FontWeights } from '../../styles/styled';

interface TextButtonProps {
  width?: string;
  fontWeight?: FontWeights;
  fontSize?: FontSizes;
}

const TextButton = styled.button<TextButtonProps>`
  border: none;
  width: ${({ width }) => width || 'auto'};
  cursor: pointer;
  background-color: transparent;

  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ? theme.fontWeights[fontWeight] : theme.fontWeights.normal};

  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.primary};

  color: ${({ theme }) => theme.colors.darkGray};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.black};
  }
`;

export default TextButton;
