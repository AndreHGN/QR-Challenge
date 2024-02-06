import styled from 'styled-components';

const ErrorMessageStyled = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.secondary};
`;

export default ErrorMessageStyled;
