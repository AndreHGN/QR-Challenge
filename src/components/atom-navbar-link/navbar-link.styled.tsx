import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavbarLink = styled(Link)`
  display: block;
  text-decoration: none;
  height: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.sm};
  color: ${({ theme }) => theme.colors.white};
`;

export default NavbarLink;
