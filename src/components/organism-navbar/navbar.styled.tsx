import styled from 'styled-components';

const NavbarStyled = styled.ul`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.paddings.lg}`};
  background-color: ${({ theme }) => theme.colors.primary};
  list-style-type: none;
`;

export default NavbarStyled;
