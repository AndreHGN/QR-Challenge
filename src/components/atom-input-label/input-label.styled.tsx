import { styled } from 'styled-components';

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.primary};
`;

export default InputLabel;
