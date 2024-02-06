import styled from 'styled-components';

const NavbarItemStyled = styled.li`
  text-align: center;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default NavbarItemStyled;
