import styled from 'styled-components';

const NavbarTitleStyled = styled.li`
  text-align: center;
  height: 100%;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default NavbarTitleStyled;
