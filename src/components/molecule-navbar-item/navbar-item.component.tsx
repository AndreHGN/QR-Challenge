import NavbarLink from '../atom-navbar-link/navbar-link.styled';
import NavbarItemStyled from './navbar-item.styled.component';

interface NavbarItemProps {
  to: string;
  text: string;
}

const NavbarItem = ({ to, text }: NavbarItemProps): React.ReactElement => {
  return (
    <NavbarItemStyled>
      <NavbarLink to={to}>{text}</NavbarLink>
    </NavbarItemStyled>
  );
};

export default NavbarItem;
